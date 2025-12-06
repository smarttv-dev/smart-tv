import React, {
  ReactNode,
  useCallback,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { InfiniteObserver, PageCursor } from "../infinite";
import { QueryClient } from "../queryClient";
import { QueryKey } from "../types";
import { QueryClientProvider, useClient } from "./useQuery";

export type InfiniteQueryOptions<TItem = unknown> = {
  enabled?: boolean;
  staleTime?: number;
  mapPage?: (
    raw: any,
    cursor?: string | number | null
  ) => PageCursor<TItem> | null;
  getHasNext?: (pages: PageCursor<TItem>[]) => boolean;
  // react-query style options
  initialPageParam?: string | number | null;
  queryFn?: (args: { pageParam?: string | number | null }) => Promise<any>;
  getNextPageParam?: (
    lastPage: any,
    allPages: any[]
  ) => string | number | null | undefined;
};

export function useInfiniteQuery<TItem = unknown, TPage = PageCursor<TItem>>(
  key: QueryKey,
  fetchPageOrOptions:
    | ((cursor?: string | number | null) => Promise<TPage>)
    | InfiniteQueryOptions<TItem>,
  maybeOptions?: InfiniteQueryOptions<TItem>
) {
  const client = useClient();
  const observerRef = useRef<InfiniteObserver<TItem> | null>(null);
  const [, force] = useReducer((s) => s + 1, 0);

  // normalize overload: support both (key, fetcher, options) and (key, options) signatures
  let fetchPage: (cursor?: string | number | null) => Promise<any>;
  const isFetcher = typeof fetchPageOrOptions === "function";
  // canonical options object to use throughout
  const opts: InfiniteQueryOptions<TItem> | undefined = isFetcher
    ? maybeOptions
    : (fetchPageOrOptions as any) || maybeOptions;
  // keep backward-compatible name
  const options = opts;

  if (isFetcher) {
    fetchPage = fetchPageOrOptions as any;
  } else if (opts && opts.queryFn) {
    const initial = opts.initialPageParam;
    fetchPage = async (cursor?: string | number | null) => {
      const pageParam = cursor ?? initial;
      return opts.queryFn!({ pageParam });
    };
  } else {
    // fallback no-op fetcher (consumer should provide one)
    fetchPage = async () => null as any;
  }

  // If consumer provided getNextPageParam but didn't provide a mapPage, attach a sensible default mapper.
  // This default mapper attempts to detect common API shapes (arrays, {items:[]}, {data:[]}, nested containers like rails.list)
  // and preserves top-level metadata so that getNextPageParam(lastPage, allPages) can inspect fields like lastPage.rails.count.
  if (opts && opts.getNextPageParam && !opts.mapPage) {
    const getNext = opts.getNextPageParam;
    opts.mapPage = (raw: any, cursor?: string | number | null) => {
      const tryExtract = (obj: any): any[] | undefined => {
        if (!obj || typeof obj !== "object") return undefined;
        if (Array.isArray(obj)) return obj;
        if (Array.isArray(obj.items)) return obj.items;
        if (Array.isArray(obj.data)) return obj.data;
        if (Array.isArray(obj.list)) return obj.list;
        if (Array.isArray(obj.results)) return obj.results;
        return undefined;
      };

      let items: any[] | undefined = tryExtract(raw);
      if (!items) {
        for (const k of ["items", "data", "list", "results", "rails"]) {
          if (raw && raw[k] !== undefined) {
            const extracted = tryExtract(raw[k]);
            if (extracted) {
              items = extracted;
              break;
            }
          }
        }
      }
      if (!items) items = [raw];

      let lastPageLike: any;
      if (raw && typeof raw === "object") {
        if (raw.rails && typeof raw.rails === "object") {
          lastPageLike = { ...raw };
          lastPageLike.rails = { ...raw.rails, list: items };
        } else if (
          raw.items &&
          typeof raw.items === "object" &&
          !Array.isArray(raw.items)
        ) {
          lastPageLike = { ...raw, items: { ...raw.items, list: items } };
        } else {
          lastPageLike = { ...raw, items };
        }
      } else {
        lastPageLike = { items };
      }

      lastPageLike.page = raw?.page ?? cursor;

      const allPages = (observerRef.current?.pages || []).map((p) => ({
        ...p,
      }));
      const next = getNext(lastPageLike, allPages as any);
      const nextCursor = next === undefined ? null : next;
      return { ...lastPageLike, items, nextCursor } as any;
    };
  }

  // initialize observer once and hydrate from cache if available
  if (!observerRef.current) {
    observerRef.current = new InfiniteObserver(async (cursor) => {
      // use client.fetchQuery to benefit from inflight dedupe and cache
      const cacheKey = [
        ...(Array.isArray(key) ? key : [key]),
        "infinite",
        cursor ?? "null",
      ];
      const page = await client.fetchQuery(cacheKey, () => fetchPage(cursor), {
        staleTime: options?.staleTime,
      });
      return page as any;
    }, options?.mapPage);

    // if cached combined items exist, hydrate observer.pages from cache
    const cached = client.getQueryData<{ items: TItem[]; nextCursor?: any }[]>(
      Array.isArray(key) ? [...key, "infinite-pages"] : [key, "infinite-pages"]
    );
    if (cached && Array.isArray(cached)) {
      observerRef.current.pages = cached as any;
    }
  }

  const observer = observerRef.current;

  useEffect(() => {
    // if (options?.enabled === false) return;
    // initial load
    // if (observer.pages.length === 0) {
    //   observer
    //     .fetchNext()
    //     .then(() => {
    //       // persist pages to client cache so revisiting can read without network if within cacheTime
    //       client.setQueryData(
    //         Array.isArray(key)
    //           ? [...key, "infinite-pages"]
    //           : [key, "infinite-pages"],
    //         observer.pages as any
    //       );
    //       force();
    //     })
    //     .catch(() => force());
    // }
    observerRef.current = new InfiniteObserver(async (cursor) => {
      // use client.fetchQuery to benefit from inflight dedupe and cache
      const cacheKey = [
        ...(Array.isArray(key) ? key : [key]),
        "infinite",
        cursor ?? "null",
      ];
      const page = await client.fetchQuery(cacheKey, () => fetchPage(cursor), {
        staleTime: options?.staleTime,
      });
      return page as any;
    }, options?.mapPage);

    // if cached combined items exist, hydrate observer.pages from cache
    const cached = client.getQueryData<{ items: TItem[]; nextCursor?: any }[]>(
      Array.isArray(key) ? [...key, "infinite-pages"] : [key, "infinite-pages"]
    );
    if (cached && Array.isArray(cached)) {
      observerRef.current.pages = cached as any;
    }

    // initial load
    const observer = observerRef.current;
    if (options?.enabled === false) return;
    if (observer.pages.length === 0) {
      observer
        .fetchNext()
        .then(() => {
          client.setQueryData(
            Array.isArray(key)
              ? [...key, "infinite-pages"]
              : [key, "infinite-pages"],
            observer.pages as any
          );
          force();
        })
        .catch(() => force());
    } else {
      // ensure UI updates to reflect hydrated pages
      force();
    }
  }, [JSON.stringify(key)]);

  const fetchNext = useCallback(async () => {
    await observer.fetchNext();
    // update cached pages after fetching
    client.setQueryData(
      Array.isArray(key) ? [...key, "infinite-pages"] : [key, "infinite-pages"],
      observer.pages as any
    );
    force();
  }, [JSON.stringify(key)]);

  // TanStack-compatible helper: fetchNextPage(options?)
  const fetchNextPage = useCallback(
    async (opts?: { pageParam?: any }) => {
      if (opts && opts.pageParam !== undefined) {
        // If a manual pageParam is provided, we need to fetch that specific cursor.
        // Use the underlying fetchPage via observer's fetchPage by calling client.fetchQuery
        const cacheKey = [
          ...(Array.isArray(key) ? key : [key]),
          "infinite",
          String(opts.pageParam),
        ];
        const page = await client.fetchQuery(
          cacheKey,
          () => fetchPage(opts.pageParam),
          {
            staleTime: options?.staleTime,
          }
        );
        // normalize via mapPage when observer pushes pages normally, so reuse mapPage here
        // Normalize the fetched page using the provided mapPage option when available.
        const mapper = options?.mapPage || maybeOptions?.mapPage;
        let mapped: any = null;
        if (mapper) mapped = mapper(page, opts.pageParam);
        else if (page && Array.isArray(page.items))
          mapped = { items: page.items, nextCursor: page.nextCursor };
        else if (Array.isArray(page)) mapped = { items: page };
        else mapped = { items: [page], nextCursor: null };

        if (mapped) {
          observer.pages.push(mapped as any);
          client.setQueryData(
            Array.isArray(key)
              ? [...key, "infinite-pages"]
              : [key, "infinite-pages"],
            observer.pages as any
          );
        }
        force();
        return { pages: observer.pages } as any;
      }

      await fetchNext();
      return { pages: observer.pages } as any;
    },
    [JSON.stringify(key)]
  );

  const items = observer.getItems() as TItem[];
  const isFetching = observer.isFetching;
  const hasNextPage = options?.getHasNext
    ? options.getHasNext(observer.pages as any)
    : observer.hasNext;
  // no previous support implemented yet
  const hasPreviousPage = false;

  // expose raw pages as well for callers who need per-page metadata
  const pages = observer.pages as any;

  // TanStack-compatible: pageParams is array of page cursors used. We don't track explicit pageParams; derive from pages if present.
  const pageParams = pages.map((p: any) => p.page ?? p.nextCursor ?? null);

  const isFetchingNextPage = observer.isFetching; // simple mapping: true while fetchNext running
  const isFetchingPreviousPage = false;

  return {
    // TanStack-like data shape
    data:
      pages.length > 0 ? { pages, pageParams } : { pages: [], pageParams: [] },
    // keep backward-compatible flattened data for callers expecting `data.data`
    items,
    pages,
    pageParams,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNext,
    fetchNextPage,
    hasNextPage,
    hasPreviousPage,
  } as any;
}

export function InfiniteProvider({
  children,
  client,
}: {
  client: QueryClient;
  children?: ReactNode;
}) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
