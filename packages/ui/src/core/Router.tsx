"use client";
import {
  ComponentType,
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type RouteState = any;

interface RouteEntry {
  path: string;
  state?: RouteState;
  base?: string;
  skippable?: boolean;
}

interface RouterContextValue {
  current: RouteEntry;
  push: (path: string, state?: RouteState) => void;
  replace: (path: string, state?: RouteState) => void;
  back: () => void;
  go: (n: number) => void;
  registerRoute: (
    pattern: string,
    opts?: { skippable?: boolean }
  ) => () => void;
  getParamsForPath: (path: string) => Params;
  getMatchingRoute: (path: string) => string | null;
}

const RouterContext = createContext<RouterContextValue | undefined>(undefined);

function pathToSegments(path: string) {
  return path.replace(/^\//, "").split("/").filter(Boolean);
}

type Params = Record<string, string>;

function matchPath(
  pattern: string,
  path: string
): { params: Params; matched: boolean } {
  const pSegments = pathToSegments(pattern);
  const tSegments = pathToSegments(path);

  const params: Params = {};

  // quick wildcard match
  if (pattern === "*") return { params, matched: true };

  if (pSegments.length !== tSegments.length) return { params, matched: false };

  for (let i = 0; i < pSegments.length; i++) {
    const ps = pSegments[i] ?? "";
    const ts = tSegments[i] ?? "";
    if (ps.startsWith(":")) {
      const key = ps.slice(1);
      params[key] = decodeURIComponent(ts || "");
      continue;
    }
    if (ps === "*") {
      // wildcard matches remainder
      return { params, matched: true };
    }
    if (ps !== ts) return { params, matched: false };
  }

  return { params, matched: true };
}

export function RouterProvider({
  children,
  initial = "/",
  maxStack = 50,
  collapseSameBase = true,
  skipDuplicates = true,
}: {
  children: ReactNode;
  initial?: string;
  maxStack?: number;
  collapseSameBase?: boolean;
  skipDuplicates?: boolean;
}) {
  const routesRef = useRef<Set<string>>(new Set());
  const skippableRoutesRef = useRef<Set<string>>(new Set());
  const stackRef = useRef<RouteEntry[]>([
    { path: initial, state: undefined, base: pathToSegments(initial)[0] ?? "" },
  ]);
  const [currentTick, tick] = useState(0);

  const push = useCallback(
    (path: string, state?: RouteState) => {
      const top = stackRef.current[stackRef.current.length - 1];
      const base = pathToSegments(path)[0] ?? "";

      // Prevent pushing duplicate path (regardless of state)
      if (top && top.path === path) {
        // Optionally update state if different
        if (top.state !== state) {
          stackRef.current[stackRef.current.length - 1] = {
            ...top,
            path,
            state,
            base,
          };
          tick((n) => n + 1);
        }
        return;
      }

      // Optionally collapse navigations that stay within the same base section (simple replace)
      if (collapseSameBase && top) {
        const topBase = top.base ?? pathToSegments(top.path)[0] ?? "";
        const newBase = base;
        if (topBase && newBase && topBase === newBase) {
          // Two options: replace top (current simple behavior) OR mark older entries skippable.
          if (skipDuplicates) {
            const entrySkippable =
              skippableRoutesRef.current.has(path) ||
              skippableRoutesRef.current.has(base);
            // Only mark earlier entries skippable if the new entry is skippable
            if (entrySkippable) {
              for (let i = 0; i < stackRef.current.length - 1; i++) {
                if (stackRef.current[i].base === newBase) {
                  stackRef.current[i].skippable = true;
                }
              }
            }
            // Prevent pushing duplicate path
            if (top.path !== path) {
              stackRef.current.push({
                path,
                state,
                base,
                skippable: entrySkippable,
              });
            }
          } else {
            // default: replace top so stack doesn't grow
            const entrySkippable =
              skippableRoutesRef.current.has(path) ||
              skippableRoutesRef.current.has(base);
            stackRef.current[stackRef.current.length - 1] = {
              path,
              state,
              base,
              skippable: entrySkippable,
            };
          }
          tick((n) => n + 1);
          return;
        }
      }

      // Determine skippable using the best matching registered route pattern (prefer static/specific)
      const sortedPatterns = Array.from(routesRef.current).sort((a, b) => {
        const aHasParams = a.includes(":");
        const bHasParams = b.includes(":");
        const aIsWildcard = a.includes("*");
        const bIsWildcard = b.includes("*");

        // Wildcard routes last
        if (aIsWildcard && !bIsWildcard) return 1;
        if (!aIsWildcard && bIsWildcard) return -1;

        // Static routes before dynamic routes
        if (!aHasParams && bHasParams) return -1;
        if (aHasParams && !bHasParams) return 1;

        // Both static or both dynamic: longer paths first (more specific)
        return b.split("/").length - a.split("/").length;
      });

      let bestMatchPattern: string | null = null;
      for (const pattern of sortedPatterns) {
        const { matched } = matchPath(pattern, path);
        if (matched) {
          bestMatchPattern = pattern;
          break;
        }
      }

      const entrySkippable = bestMatchPattern
        ? skippableRoutesRef.current.has(bestMatchPattern)
        : false;

      // Remove any existing entries with same path so route is moved to top instead of duplicated
      stackRef.current = stackRef.current.filter((e) => e.path !== path);

      // If the new entry is skippable and we have a matching registered pattern, remove previous entries
      // that match the same best pattern (so dynamic patterns only affect routes that matched that pattern)
      if (entrySkippable && bestMatchPattern) {
        stackRef.current = stackRef.current.filter((e) => {
          return !matchPath(bestMatchPattern as string, e.path).matched;
        });
      }

      // Push the new entry
      stackRef.current.push({ path, state, base, skippable: entrySkippable });

      // enforce max stack depth to avoid unbounded memory usage on long sessions
      if (maxStack > 0 && stackRef.current.length > maxStack) {
        // keep the most recent `maxStack` entries
        stackRef.current = stackRef.current.slice(-maxStack);
      }

      tick((n) => n + 1);
    },
    [collapseSameBase, maxStack, skipDuplicates]
  );

  const replace = useCallback((path: string, state?: RouteState) => {
    const base = pathToSegments(path)[0] ?? "";
    const entrySkippable =
      skippableRoutesRef.current.has(path) ||
      skippableRoutesRef.current.has(base);
    stackRef.current[stackRef.current.length - 1] = {
      path,
      state,
      base,
      skippable: entrySkippable,
    };
    tick((n) => n + 1);
  }, []);

  const back = useCallback(() => {
    if (stackRef.current.length <= 1) return;

    // pop current
    stackRef.current.pop();

    // Only skip consecutive skippable entries at the top
    while (
      stackRef.current.length > 1 &&
      stackRef.current[stackRef.current.length - 1].skippable
    ) {
      stackRef.current.pop();
    }

    tick((n) => n + 1);
  }, []);

  const go = useCallback((n: number) => {
    if (n === 0) return;
    const idx = stackRef.current.length - 1 + n;
    if (idx < 0) {
      // keep only the first entry if going back past start
      stackRef.current = [stackRef.current[0] as RouteEntry];
    } else if (idx >= stackRef.current.length) {
      // no-op: can't go forward beyond stack
    } else {
      stackRef.current.splice(idx + 1);
    }
    tick((x) => x + 1);
  }, []);

  const registerRoute = useCallback(
    (pattern: string, opts?: { skippable?: boolean }) => {
      routesRef.current.add(pattern);
      if (opts?.skippable) skippableRoutesRef.current.add(pattern);
      return () => {
        routesRef.current.delete(pattern);
        if (opts?.skippable) skippableRoutesRef.current.delete(pattern);
      };
    },
    []
  );

  const getParamsForPath = useCallback((path: string) => {
    // Sort routes by specificity: static routes first, then dynamic routes
    const sortedPatterns = Array.from(routesRef.current).sort((a, b) => {
      const aHasParams = a.includes(":");
      const bHasParams = b.includes(":");
      const aIsWildcard = a.includes("*");
      const bIsWildcard = b.includes("*");

      // Wildcard routes last
      if (aIsWildcard && !bIsWildcard) return 1;
      if (!aIsWildcard && bIsWildcard) return -1;

      // Static routes before dynamic routes
      if (!aHasParams && bHasParams) return -1;
      if (aHasParams && !bHasParams) return 1;

      // Both static or both dynamic: longer paths first (more specific)
      return b.split("/").length - a.split("/").length;
    });

    for (const pattern of sortedPatterns) {
      const { params, matched } = matchPath(pattern, path);
      if (matched) return params;
    }
    return {} as Params;
  }, []);

  const getMatchingRoute = useCallback((path: string) => {
    // Sort routes by specificity: static routes first, then dynamic routes
    const sortedPatterns = Array.from(routesRef.current).sort((a, b) => {
      const aHasParams = a.includes(":");
      const bHasParams = b.includes(":");
      const aIsWildcard = a.includes("*");
      const bIsWildcard = b.includes("*");

      // Wildcard routes last
      if (aIsWildcard && !bIsWildcard) return 1;
      if (!aIsWildcard && bIsWildcard) return -1;

      // Static routes before dynamic routes
      if (!aHasParams && bHasParams) return -1;
      if (aHasParams && !bHasParams) return 1;

      // Both static or both dynamic: longer paths first (more specific)
      return b.split("/").length - a.split("/").length;
    });

    for (const pattern of sortedPatterns) {
      const { matched } = matchPath(pattern, path);
      if (matched) return pattern;
    }
    return null;
  }, []);

  // Compute current entry - depends on currentTick which changes when stack changes
  const current: RouteEntry = useMemo(() => {
    return (
      stackRef.current[stackRef.current.length - 1] || {
        path: initial,
        state: undefined,
      }
    );
    // currentTick is intentionally a dependency to trigger recomputation when stack changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTick, initial]);

  const value = useMemo(
    () => ({
      current,
      push,
      replace,
      back,
      go,
      registerRoute,
      getParamsForPath,
      getMatchingRoute,
    }),
    [
      current,
      push,
      replace,
      back,
      go,
      registerRoute,
      getParamsForPath,
      getMatchingRoute,
    ]
  );
  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error("useRouter must be used inside RouterProvider");
  return ctx;
}

export function Link({
  to,
  state,
  children,
  replace = false,
}: {
  to: string;
  state?: RouteState;
  children: ReactNode;
  replace?: boolean;
}) {
  const r = useRouter();
  return (
    <a
      role="link"
      tabIndex={0}
      onClick={(e) => {
        // allow modifier keys and non-left clicks to fall through so users can open in new tabs
        if (e.defaultPrevented) return;
        if (e.button !== 0 || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
          return;
        e.preventDefault();
        if (replace) r.replace(to, state);
        else r.push(to, state);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          if (replace) r.replace(to, state);
          else r.push(to, state);
        }
      }}
    >
      {children}
    </a>
  );
}

// Simple Route component that renders children when the path matches exactly
export function Route({
  path,
  component: Component,
  element,
  children,
  skippable,
}: {
  path: string;
  component?: ComponentType<{ params?: Params; state?: RouteState }>;
  element?:
    | ReactNode
    | ((props: { params: Params; state?: RouteState }) => ReactNode);
  children?:
    | ReactNode
    | ((props: { params: Params; state?: RouteState }) => ReactNode);
  skippable?: boolean;
}) {
  const { current, registerRoute, getMatchingRoute } = useRouter();

  // Register route immediately using useLayoutEffect (runs before paint)
  // This ensures routes are registered before rendering logic runs
  useLayoutEffect(
    () => registerRoute(path, { skippable }),
    [path, registerRoute, skippable]
  );

  // Check if this route matches
  const { params, matched } = matchPath(path, current.path);

  // If this route doesn't match, don't render
  if (!matched) return null;

  // Check if there's a more specific route that should take precedence
  const bestMatch = getMatchingRoute(current.path);

  // If no routes are registered yet (initial render), allow this route to render if it matches
  // Otherwise, only render if this is the best matching route
  if (bestMatch !== null && bestMatch !== path) return null;

  const state = current.state;

  if (Component) return <Component params={params} state={state} />;

  if (typeof element === "function")
    return (
      <>
        {(
          element as (props: {
            params: Params;
            state?: RouteState;
          }) => ReactNode
        )({ params, state })}
      </>
    );

  if (element) return <>{element}</>;

  if (typeof children === "function")
    return (
      <>
        {(
          children as (props: {
            params: Params;
            state?: RouteState;
          }) => ReactNode
        )({ params, state })}
      </>
    );

  return <>{children ?? null}</>;
}

export function useParams() {
  const { current, getParamsForPath } = useRouter();
  return useMemo(
    () => getParamsForPath(current.path),
    [current.path, getParamsForPath]
  );
}

export function useRoute() {
  const { current } = useRouter();
  return current;
}

// A lightweight alternative to react-router's useLocation/useNavigate
export function useLocation() {
  const { current } = useRouter();
  return current;
}

export default {
  RouterProvider,
  Link,
  Route,
  useRouter,
  useLocation,
};

// DEV-ONLY: helper to inspect stackRef in tests or console
// Remove or guard behind NODE_ENV before shipping
export function __debug_getStack() {
  try {
    // @ts-expect-error accessing module-level ref for debug only
    return JSON.parse(JSON.stringify(stackRef.current));
  } catch {
    return null;
  }
}
