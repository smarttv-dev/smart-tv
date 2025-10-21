import { CodePreview } from "@/components";

export default function QueryTypes() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
          TypeScript Types
        </h1>
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
          Complete TypeScript type definitions and interfaces for Smart TV Query
          package.
        </p>
      </div>

      {/* Core Types */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Core Types
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Essential types that form the foundation of the Smart TV Query system.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">Query Key Types</h3>
            <CodePreview
              code={`// Query key can be a string or array of serializable values
export type QueryKey = string | readonly unknown[];

// Helper type for extracting query key from query
export type QueryKeyFrom<T> = T extends Query<infer TQueryKey, any, any, any>
  ? TQueryKey
  : never;

// Type-safe query key factory
export interface QueryKeyFactory<T extends Record<string, any>> {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? T[K]
    : T[K] extends Record<string, any>
    ? QueryKeyFactory<T[K]>
    : never;
}

// Example usage
const queryKeys = {
  movies: {
    all: ['movies'] as const,
    lists: () => [...queryKeys.movies.all, 'list'] as const,
    list: (filters: MovieFilters) => [...queryKeys.movies.lists(), filters] as const,
    details: () => [...queryKeys.movies.all, 'detail'] as const,
    detail: (id: number) => [...queryKeys.movies.details(), id] as const,
  },
} as const;

type MovieQueryKeys = typeof queryKeys.movies;`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Query Function Types</h3>
            <CodePreview
              code={`// Basic query function type
export type QueryFunction<
  TQueryFnData = unknown,
  TQueryKey extends QueryKey = QueryKey
> = (context: QueryFunctionContext<TQueryKey>) => Promise<TQueryFnData>;

// Query function context
export interface QueryFunctionContext<TQueryKey extends QueryKey = QueryKey> {
  queryKey: TQueryKey;
  signal?: AbortSignal;
  meta?: QueryMeta;
}

// Query metadata for additional context
export interface QueryMeta {
  [key: string]: unknown;
}

// Error types
export interface QueryError extends Error {
  status?: number;
  statusText?: string;
  data?: unknown;
}

// Mutation function type
export type MutationFunction<TData = unknown, TVariables = unknown> = (
  variables: TVariables
) => Promise<TData>;`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">XHR Fetcher Types</h3>
            <CodePreview
              code={`// XHR-based fetcher for legacy Smart TV compatibility
export type Fetcher<T> = (...args: any[]) => Promise<T>;

// XHR options interface for Smart TV optimization
export interface XhrOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
  responseType?: '' | 'arraybuffer' | 'blob' | 'document' | 'json' | 'text';
  timeout?: number; // milliseconds - important for TV networks
  withCredentials?: boolean;

  // Progress callbacks for large content downloads
  onUploadProgress?: (sent: number, total?: number) => void;
  onDownloadProgress?: (loaded: number, total?: number) => void;

  // AbortSignal for request cancellation
  signal?: AbortSignal | null;
}

// XHR Response interface (mirrors fetch Response)
export interface XhrResponse {
  ok: boolean;
  status: number;
  statusText: string;
  url: string;
  headers: {
    get: (key: string) => string | null;
    has: (key: string) => boolean;
  };

  // Response body methods
  json: () => Promise<any>;
  text: () => Promise<string>;
  arrayBuffer: () => Promise<ArrayBuffer>;
  blob: () => Promise<Blob>;

  // Raw XHR response for advanced usage
  raw: any;
}

// XHR fetcher function signature
export const xhrFetcher: Fetcher<XhrResponse>;
export const tvFetch: Fetcher<XhrResponse>; // Alias for xhrFetcher

// Type-safe XHR fetcher usage
export type XhrFetcher<T = any> = (
  input: string,
  options?: XhrOptions
) => Promise<XhrResponse>;

// Smart TV specific options
export interface TVFetchOptions extends XhrOptions {
  deviceType?: 'smart-tv' | 'streaming-device' | 'set-top-box';
  platform?: 'tizen' | 'webos' | 'android-tv' | 'roku';
  memoryHint?: 'low' | 'medium' | 'high';
  networkType?: 'wifi' | 'ethernet' | 'cellular';
}`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">State Types</h3>
            <CodePreview
              code={`// Query status enum
export type QueryStatus = 'loading' | 'error' | 'success';

// Fetch status for more granular control
export type FetchStatus = 'fetching' | 'paused' | 'idle';

// Query state interface
export interface QueryState<TData = unknown, TError = Error> {
  data: TData | undefined;
  error: TError | null;
  status: QueryStatus;
  fetchStatus: FetchStatus;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  isFetching: boolean;
  isStale: boolean;
  dataUpdatedAt: number;
  errorUpdatedAt: number;
  fetchFailureCount: number;
  fetchFailureReason: TError | null;
}

// Mutation state interface
export interface MutationState<TData = unknown, TError = Error, TVariables = unknown> {
  data: TData | undefined;
  error: TError | null;
  status: 'idle' | 'loading' | 'error' | 'success';
  isIdle: boolean;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  failureCount: number;
  failureReason: TError | null;
  variables: TVariables | undefined;
  submittedAt: number;
}`}
              language="ts"
            />
          </div>
        </div>
      </div>

      {/* Query Options */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Query Options
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Configuration options for customizing query behavior.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">Base Query Options</h3>
            <CodePreview
              code={`export interface QueryOptions<
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> {
  // Cache configuration
  staleTime?: number;
  cacheTime?: number;

  // Refetch behavior
  refetchOnMount?: boolean | 'always';
  refetchOnWindowFocus?: boolean | 'always';
  refetchOnReconnect?: boolean | 'always';
  refetchInterval?: number | false;
  refetchIntervalInBackground?: boolean;

  // Retry configuration
  retry?: boolean | number | ((failureCount: number, error: TError) => boolean);
  retryOnMount?: boolean;
  retryDelay?: number | ((retryAttempt: number, error: TError) => number);

  // Data transformation
  select?: (data: TQueryFnData) => TData;
  placeholderData?: TData | ((previousValue: TData | undefined, previousQuery: Query | undefined) => TData);
  initialData?: TData | (() => TData);
  initialDataUpdatedAt?: number | (() => number);

  // Lifecycle callbacks
  onSuccess?: (data: TData) => void;
  onError?: (error: TError) => void;
  onSettled?: (data: TData | undefined, error: TError | null) => void;

  // Advanced options
  enabled?: boolean;
  keepPreviousData?: boolean;
  suspense?: boolean;
  useErrorBoundary?: boolean | ((error: TError) => boolean);
  meta?: QueryMeta;

  // Network mode
  networkMode?: 'online' | 'always' | 'offlineFirst';

  // Structure sharing
  structuralSharing?: boolean | ((oldData: TData | undefined, newData: TData) => TData);
}

// Default options interface
export interface DefaultOptions<TError = Error> {
  queries?: Omit<QueryOptions<unknown, TError>, 'queryKey' | 'queryFn'>;
  mutations?: Omit<MutationOptions<unknown, TError, unknown>, 'mutationFn'>;
}`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">
              Infinite Query Options
            </h3>
            <CodePreview
              code={`export interface InfiniteQueryOptions<
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> extends Omit<QueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'select'> {
  // Page parameter functions
  getNextPageParam: (
    lastPage: TQueryFnData,
    allPages: TQueryFnData[]
  ) => unknown | undefined;

  getPreviousPageParam?: (
    firstPage: TQueryFnData,
    allPages: TQueryFnData[]
  ) => unknown | undefined;

  // Data selection for infinite queries
  select?: (data: InfiniteData<TQueryFnData>) => TData;

  // Initial page parameter
  initialPageParam?: unknown;
}

// Infinite data structure
export interface InfiniteData<TData> {
  pages: TData[];
  pageParams: unknown[];
}

// Infinite query function context
export interface InfiniteQueryFunctionContext<
  TQueryKey extends QueryKey = QueryKey,
  TPageParam = unknown
> extends QueryFunctionContext<TQueryKey> {
  pageParam: TPageParam;
  direction: 'forward' | 'backward';
}`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Mutation Options</h3>
            <CodePreview
              code={`export interface MutationOptions<
  TData = unknown,
  TError = Error,
  TVariables = unknown,
  TContext = unknown
> {
  // Lifecycle callbacks
  onMutate?: (variables: TVariables) => Promise<TContext | void> | TContext | void;
  onSuccess?: (
    data: TData,
    variables: TVariables,
    context: TContext | undefined
  ) => Promise<unknown> | unknown;
  onError?: (
    error: TError,
    variables: TVariables,
    context: TContext | undefined
  ) => Promise<unknown> | unknown;
  onSettled?: (
    data: TData | undefined,
    error: TError | null,
    variables: TVariables,
    context: TContext | undefined
  ) => Promise<unknown> | unknown;

  // Retry configuration
  retry?: boolean | number | ((failureCount: number, error: TError) => boolean);
  retryDelay?: number | ((retryAttempt: number, error: TError) => number);

  // Error handling
  useErrorBoundary?: boolean | ((error: TError, variables: TVariables, context: TContext | undefined) => boolean);

  // Metadata
  meta?: MutationMeta;

  // Network mode
  networkMode?: 'online' | 'always' | 'offlineFirst';
}

// Mutation metadata
export interface MutationMeta {
  [key: string]: unknown;
}`}
              language="ts"
            />
          </div>
        </div>
      </div>

      {/* Hook Return Types */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Hook Return Types
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Return types for all query hooks with complete type safety.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">useQuery Return Type</h3>
            <CodePreview
              code={`export interface UseQueryResult<TData = unknown, TError = Error>
  extends QueryState<TData, TError> {
  // Data and error
  data: TData | undefined;
  error: TError | null;

  // Status booleans
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  isFetching: boolean;
  isStale: boolean;
  isPlaceholderData: boolean;
  isPreviousData: boolean;

  // Status enums
  status: QueryStatus;
  fetchStatus: FetchStatus;

  // Timestamps
  dataUpdatedAt: number;
  errorUpdatedAt: number;

  // Failure tracking
  fetchFailureCount: number;
  fetchFailureReason: TError | null;

  // Actions
  refetch: (options?: RefetchOptions) => Promise<UseQueryResult<TData, TError>>;
  remove: () => void;
}

// Refetch options
export interface RefetchOptions {
  throwOnError?: boolean;
  cancelRefetch?: boolean;
}

// Enabled/disabled query result
export type UseQueryResult<TData, TError> =
  | UseQuerySuccessResult<TData, TError>
  | UseQueryLoadingResult<TData, TError>
  | UseQueryErrorResult<TData, TError>;

interface UseQuerySuccessResult<TData, TError> extends QueryState<TData, TError> {
  data: TData;
  error: null;
  isSuccess: true;
  isLoading: false;
  isError: false;
  status: 'success';
}

interface UseQueryLoadingResult<TData, TError> extends QueryState<TData, TError> {
  data: undefined;
  error: null;
  isSuccess: false;
  isLoading: true;
  isError: false;
  status: 'loading';
}

interface UseQueryErrorResult<TData, TError> extends QueryState<TData, TError> {
  data: undefined;
  error: TError;
  isSuccess: false;
  isLoading: false;
  isError: true;
  status: 'error';
}`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">
              useMutation Return Type
            </h3>
            <CodePreview
              code={`export interface UseMutationResult<
  TData = unknown,
  TError = Error,
  TVariables = unknown,
  TContext = unknown
> extends MutationState<TData, TError, TVariables> {
  // Data and error
  data: TData | undefined;
  error: TError | null;
  variables: TVariables | undefined;

  // Status booleans
  isIdle: boolean;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;

  // Status enum
  status: 'idle' | 'loading' | 'error' | 'success';

  // Failure tracking
  failureCount: number;
  failureReason: TError | null;

  // Timestamps
  submittedAt: number;

  // Actions
  mutate: (
    variables: TVariables,
    options?: MutateOptions<TData, TError, TVariables, TContext>
  ) => void;
  mutateAsync: (
    variables: TVariables,
    options?: MutateOptions<TData, TError, TVariables, TContext>
  ) => Promise<TData>;
  reset: () => void;
}

// Mutate options for individual mutations
export interface MutateOptions<
  TData = unknown,
  TError = Error,
  TVariables = unknown,
  TContext = unknown
> {
  onSuccess?: (data: TData, variables: TVariables, context: TContext) => Promise<unknown> | unknown;
  onError?: (error: TError, variables: TVariables, context: TContext) => Promise<unknown> | unknown;
  onSettled?: (
    data: TData | undefined,
    error: TError | null,
    variables: TVariables,
    context: TContext
  ) => Promise<unknown> | unknown;
}`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">
              useInfiniteQuery Return Type
            </h3>
            <CodePreview
              code={`export interface UseInfiniteQueryResult<TData = unknown, TError = Error>
  extends Omit<UseQueryResult<InfiniteData<TData>, TError>, 'data'> {
  // Infinite-specific data
  data: InfiniteData<TData> | undefined;

  // Page navigation
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFetchingNextPage: boolean;
  isFetchingPreviousPage: boolean;

  // Actions
  fetchNextPage: (options?: FetchNextPageOptions) => Promise<UseInfiniteQueryResult<TData, TError>>;
  fetchPreviousPage: (options?: FetchPreviousPageOptions) => Promise<UseInfiniteQueryResult<TData, TError>>;
}

// Fetch page options
export interface FetchNextPageOptions {
  throwOnError?: boolean;
  cancelRefetch?: boolean;
  pageParam?: unknown;
}

export interface FetchPreviousPageOptions {
  throwOnError?: boolean;
  cancelRefetch?: boolean;
  pageParam?: unknown;
}

// Helper types for infinite query data manipulation
export type InfiniteQueryPages<T> = T extends InfiniteData<infer U> ? U[] : never;
export type InfiniteQueryPageParam<T> = T extends InfiniteData<any> ? unknown : never;`}
              language="ts"
            />
          </div>
        </div>
      </div>

      {/* QueryClient Types */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          QueryClient Types
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Types for the QueryClient class and its methods.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">
              QueryClient Interface
            </h3>
            <CodePreview
              code={`export interface QueryClient {
  // Configuration
  getDefaultOptions(): DefaultOptions;
  setDefaultOptions(options: DefaultOptions): void;

  // Cache management
  getQueryData<TData = unknown>(queryKey: QueryKey): TData | undefined;
  getQueriesData<TData = unknown>(
    queryKey: QueryKey
  ): Array<[QueryKey, TData | undefined]>;
  setQueryData<TData>(
    queryKey: QueryKey,
    updater: Updater<TData | undefined, TData | undefined>
  ): TData | undefined;
  setQueriesData<TData>(
    queryKey: QueryKey,
    updater: Updater<TData | undefined, TData | undefined>
  ): Array<[QueryKey, TData | undefined]>;

  // Query state management
  getQueryState<TData = unknown, TError = Error>(
    queryKey: QueryKey
  ): QueryState<TData, TError> | undefined;

  // Query execution
  fetchQuery<TData = unknown, TError = Error, TQueryKey extends QueryKey = QueryKey>(
    options: FetchQueryOptions<TData, TError, TQueryKey>
  ): Promise<TData>;
  prefetchQuery<TData = unknown, TError = Error, TQueryKey extends QueryKey = QueryKey>(
    options: FetchQueryOptions<TData, TError, TQueryKey>
  ): Promise<void>;
  ensureQueryData<TData = unknown, TError = Error, TQueryKey extends QueryKey = QueryKey>(
    options: FetchQueryOptions<TData, TError, TQueryKey>
  ): Promise<TData>;

  // Query invalidation
  invalidateQueries(
    filters?: QueryFilters,
    options?: InvalidateOptions
  ): Promise<void>;
  refetchQueries(
    filters?: QueryFilters,
    options?: RefetchOptions
  ): Promise<void>;
  cancelQueries(
    filters?: QueryFilters,
    options?: CancelOptions
  ): Promise<void>;

  // Query removal
  removeQueries(filters?: QueryFilters): void;
  clear(): void;

  // Utility methods
  isFetching(filters?: QueryFilters): number;
  isMutating(filters?: MutationFilters): number;

  // Cache and mutation cache access
  getQueryCache(): QueryCache;
  getMutationCache(): MutationCache;
}

// Query filters for bulk operations
export interface QueryFilters {
  queryKey?: QueryKey;
  exact?: boolean;
  type?: 'active' | 'inactive' | 'all';
  stale?: boolean;
  fetching?: boolean;
  predicate?: (query: Query) => boolean;
}

// Mutation filters
export interface MutationFilters {
  mutationKey?: MutationKey;
  exact?: boolean;
  fetching?: boolean;
  predicate?: (mutation: Mutation) => boolean;
}

// Operation options
export interface InvalidateOptions {
  throwOnError?: boolean;
  refetchType?: 'active' | 'inactive' | 'all' | 'none';
}

export interface CancelOptions {
  revert?: boolean;
}

// Updater function type
export type Updater<TInput, TOutput = TInput> = TOutput | ((input: TInput) => TOutput);`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Fetch Query Options</h3>
            <CodePreview
              code={`export interface FetchQueryOptions<
  TQueryFnData = unknown,
  TError = Error,
  TQueryKey extends QueryKey = QueryKey
> extends QueryOptions<TQueryFnData, TError, TQueryFnData, TQueryKey> {
  queryKey: TQueryKey;
  queryFn: QueryFunction<TQueryFnData, TQueryKey>;
}

// Infinite fetch query options
export interface FetchInfiniteQueryOptions<
  TQueryFnData = unknown,
  TError = Error,
  TQueryKey extends QueryKey = QueryKey
> extends InfiniteQueryOptions<TQueryFnData, TError, TQueryFnData, TQueryKey> {
  queryKey: TQueryKey;
  queryFn: InfiniteQueryFunction<TQueryFnData, TQueryKey>;
}

// Query cache configuration
export interface QueryCacheConfig {
  onError?: (error: unknown, query: Query) => void;
  onSuccess?: (data: unknown, query: Query) => void;
  onSettled?: (data: unknown | undefined, error: unknown | null, query: Query) => void;
}

// Mutation cache configuration
export interface MutationCacheConfig {
  onError?: (error: unknown, variables: unknown, context: unknown, mutation: Mutation) => void;
  onSuccess?: (data: unknown, variables: unknown, context: unknown, mutation: Mutation) => void;
  onSettled?: (
    data: unknown | undefined,
    error: unknown | null,
    variables: unknown,
    context: unknown,
    mutation: Mutation
  ) => void;
}`}
              language="ts"
            />
          </div>
        </div>
      </div>

      {/* Utility Types */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Utility Types
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Helper types for advanced TypeScript usage and type manipulation.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">Query Key Helpers</h3>
            <CodePreview
              code={`// Extract data type from query result
export type QueryData<T> = T extends UseQueryResult<infer TData, any> ? TData : never;

// Extract error type from query result
export type QueryError<T> = T extends UseQueryResult<any, infer TError> ? TError : never;

// Create typed query key
export type TypedQueryKey<T extends string, P = never> = [P] extends [never]
  ? [T]
  : [T, P];

// Query key inference
export type InferQueryKey<T> = T extends (queryKey: infer K, ...args: any[]) => any
  ? K
  : never;

// Query data inference
export type InferQueryData<T> = T extends (...args: any[]) => Promise<infer D>
  ? D
  : T extends (...args: any[]) => infer D
  ? D
  : never;

// Safe query key factory
export interface SafeQueryKeyFactory {
  <T extends string>(base: T): TypedQueryKey<T>;
  <T extends string, P>(base: T, params: P): TypedQueryKey<T, P>;
}

// Example usage
const createQueryKey: SafeQueryKeyFactory = <T extends string, P = never>(
  base: T,
  params?: P
): TypedQueryKey<T, P> => {
  return params ? ([base, params] as TypedQueryKey<T, P>) : ([base] as TypedQueryKey<T, P>);
};

// Usage
const movieKey = createQueryKey('movie', { id: 123 }); // ['movie', { id: 123 }]
const moviesKey = createQueryKey('movies'); // ['movies']`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Conditional Types</h3>
            <CodePreview
              code={`// Enable/disable query based on parameters
export type EnabledQuery<T> = T extends { enabled: false }
  ? UseQueryResult<undefined, Error>
  : UseQueryResult<unknown, Error>;

// Optional query parameters
export type OptionalQueryParams<T> = T extends undefined
  ? { enabled: false }
  : { enabled: true };

// Mutation variables requirement
export type MutationVariables<T> = T extends UseMutationResult<any, any, infer V, any>
  ? V
  : never;

// Conditional hook return based on enabled state
export type ConditionalQueryResult<
  TData,
  TError = Error,
  TEnabled extends boolean = true
> = TEnabled extends false
  ? UseQueryResult<undefined, TError>
  : UseQueryResult<TData, TError>;

// Generic query hook type
export type QueryHook<
  TData = unknown,
  TError = Error,
  TVariables = unknown
> = TVariables extends undefined
  ? () => UseQueryResult<TData, TError>
  : (variables: TVariables) => UseQueryResult<TData, TError>;

// Generic mutation hook type
export type MutationHook<
  TData = unknown,
  TError = Error,
  TVariables = unknown,
  TContext = unknown
> = () => UseMutationResult<TData, TError, TVariables, TContext>;`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Advanced Hook Types</h3>
            <CodePreview
              code={`// Strongly typed custom hook factory
export interface CustomQueryHookFactory {
  <TData, TError = Error, TQueryKey extends QueryKey = QueryKey>(
    queryKey: TQueryKey,
    queryFn: QueryFunction<TData, TQueryKey>,
    options?: Omit<QueryOptions<TData, TError>, 'queryKey' | 'queryFn'>
  ): () => UseQueryResult<TData, TError>;
}

// Typed query options for specific data types
export type TypedQueryOptions<TData, TError = Error> = Omit<
  QueryOptions<TData, TError>,
  'queryKey' | 'queryFn'
>;

// Custom hook with parameters
export type ParameterizedQueryHook<TParams, TData, TError = Error> = (
  params: TParams
) => UseQueryResult<TData, TError>;

// Async query function with typed parameters
export type TypedQueryFunction<TData, TParams = void> = TParams extends void
  ? () => Promise<TData>
  : (params: TParams) => Promise<TData>;

// Complete custom hook type
export type CompleteQueryHook<TParams, TData, TError = Error> = {
  (params: TParams): UseQueryResult<TData, TError>;
  queryKey: (params: TParams) => QueryKey;
  queryFn: TypedQueryFunction<TData, TParams>;
};

// Example implementation
function createTypedQueryHook<TParams, TData, TError = Error>(
  keyFactory: (params: TParams) => QueryKey,
  queryFn: TypedQueryFunction<TData, TParams>,
  defaultOptions?: TypedQueryOptions<TData, TError>
): CompleteQueryHook<TParams, TData, TError> {
  const hook = (params: TParams) => {
    return useQuery(
      keyFactory(params),
      () => queryFn(params as any),
      defaultOptions
    );
  };

  hook.queryKey = keyFactory;
  hook.queryFn = queryFn;

  return hook;
}

// Usage
const useMovie = createTypedQueryHook(
  (id: number) => ['movie', id],
  (id: number) => fetchMovie(id),
  { staleTime: 5 * 60 * 1000 }
);`}
              language="ts"
            />
          </div>
        </div>
      </div>

      {/* Module Declaration */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Module Declaration
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Complete module declaration for the Smart TV Query package.
        </p>

        <div>
          <CodePreview
            code={`// @smart-tv/query module declaration
declare module '@smart-tv/query' {
  // Re-export all types
  export * from './types';

  // Core classes
  export class QueryClient {
    constructor(options?: QueryClientConfig);
    // ... methods
  }

  export class QueryCache {
    constructor(config?: QueryCacheConfig);
    // ... methods
  }

  export class MutationCache {
    constructor(config?: MutationCacheConfig);
    // ... methods
  }

  // React hooks
  export function useQuery<
    TQueryFnData = unknown,
    TError = Error,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey
  >(
    queryKey: TQueryKey,
    queryFn: QueryFunction<TQueryFnData, TQueryKey>,
    options?: QueryOptions<TQueryFnData, TError, TData, TQueryKey>
  ): UseQueryResult<TData, TError>;

  export function useMutation<
    TData = unknown,
    TError = Error,
    TVariables = unknown,
    TContext = unknown
  >(
    mutationFn: MutationFunction<TData, TVariables>,
    options?: MutationOptions<TData, TError, TVariables, TContext>
  ): UseMutationResult<TData, TError, TVariables, TContext>;

  export function useInfiniteQuery<
    TQueryFnData = unknown,
    TError = Error,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey
  >(
    queryKey: TQueryKey,
    queryFn: InfiniteQueryFunction<TQueryFnData, TQueryKey>,
    options?: InfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>
  ): UseInfiniteQueryResult<TData, TError>;

  export function useQueryClient(): QueryClient;

  // Provider component
  export interface QueryClientProviderProps {
    client: QueryClient;
    children?: React.ReactNode;
  }

  export const QueryClientProvider: React.FC<QueryClientProviderProps>;

  // Error boundary
  export interface QueryErrorResetBoundaryProps {
    children: React.ReactNode;
  }

  export const QueryErrorResetBoundary: React.FC<QueryErrorResetBoundaryProps>;

  // Utility functions
  export function hashQueryKey(queryKey: QueryKey): string;
  export function isServer(): boolean;
  export function isCancelledError(error: unknown): error is CancelledError;

  // Default export
  const SmartTVQuery: {
    QueryClient: typeof QueryClient;
    QueryCache: typeof QueryCache;
    MutationCache: typeof MutationCache;
    useQuery: typeof useQuery;
    useMutation: typeof useMutation;
    useInfiniteQuery: typeof useInfiniteQuery;
    useQueryClient: typeof useQueryClient;
    QueryClientProvider: typeof QueryClientProvider;
  };

  export default SmartTVQuery;
}`}
            language="ts"
          />
        </div>
      </div>

      {/* Type Examples */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Type Usage Examples
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Practical examples of using TypeScript with Smart TV Query.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">
              Strongly Typed API Layer
            </h3>
            <CodePreview
              code={`// api/types.ts
export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

export interface PaginatedResponse<T> {
  results: T[];
  page: number;
  total_pages: number;
  total_results: number;
}

export type MoviesResponse = PaginatedResponse<Movie>;

// api/movies.ts
class MoviesAPI {
  private baseURL = 'https://api.example.com';

  async getMovies(params: {
    page?: number;
    genre?: number;
  }): Promise<MoviesResponse> {
    const url = new URL(\`\${this.baseURL}/movies\`);
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.set(key, value.toString());
      }
    });

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    }
    return response.json();
  }

  async getMovie(id: number): Promise<Movie> {
    const response = await fetch(\`\${this.baseURL}/movies/\${id}\`);
    if (!response.ok) {
      throw new Error(\`Movie \${id} not found\`);
    }
    return response.json();
  }
}

export const moviesAPI = new MoviesAPI();

// hooks/useMovies.ts
export function useMovies(params: { page?: number; genre?: number } = {}) {
  return useQuery<MoviesResponse, Error, MoviesResponse, QueryKey>(
    ['movies', params],
    () => moviesAPI.getMovies(params),
    {
      staleTime: 5 * 60 * 1000,
      keepPreviousData: true,
      enabled: Object.keys(params).length > 0,
    }
  );
}

export function useMovie(id: number) {
  return useQuery<Movie, Error, Movie, QueryKey>(
    ['movie', id],
    () => moviesAPI.getMovie(id),
    {
      enabled: !!id && id > 0,
      staleTime: 10 * 60 * 1000,
    }
  );
}`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">
              Type-Safe Query Key Factory
            </h3>
            <CodePreview
              code={`// queryKeys.ts
interface MovieFilters {
  genre?: number;
  year?: number;
  sortBy?: 'title' | 'release_date' | 'vote_average';
}

interface UserFilters {
  role?: 'admin' | 'user';
  active?: boolean;
}

export const queryKeys = {
  // Movies
  movies: {
    all: ['movies'] as const,
    lists: () => [...queryKeys.movies.all, 'list'] as const,
    list: (filters: MovieFilters) => [...queryKeys.movies.lists(), filters] as const,
    details: () => [...queryKeys.movies.all, 'detail'] as const,
    detail: (id: number) => [...queryKeys.movies.details(), id] as const,
    search: (query: string) => [...queryKeys.movies.all, 'search', query] as const,
  },

  // Users
  users: {
    all: ['users'] as const,
    lists: () => [...queryKeys.users.all, 'list'] as const,
    list: (filters: UserFilters) => [...queryKeys.users.lists(), filters] as const,
    details: () => [...queryKeys.users.all, 'detail'] as const,
    detail: (id: number) => [...queryKeys.users.details(), id] as const,
  },

  // Watchlist
  watchlist: {
    all: ['watchlist'] as const,
    user: (userId: number) => [...queryKeys.watchlist.all, userId] as const,
  },
} as const;

// Type inference examples
type MovieQueryKeys = typeof queryKeys.movies;
type MovieListKey = ReturnType<MovieQueryKeys['list']>; // ['movies', 'list', MovieFilters]
type MovieDetailKey = ReturnType<MovieQueryKeys['detail']>; // ['movies', 'detail', number]

// Usage in hooks
export function useMovieList(filters: MovieFilters) {
  return useQuery(
    queryKeys.movies.list(filters),
    () => moviesAPI.getMovies(filters)
  );
}

export function useMovieDetail(id: number) {
  return useQuery(
    queryKeys.movies.detail(id),
    () => moviesAPI.getMovie(id)
  );
}`}
              language="ts"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Related Documentation
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <a
            href="/components/query"
            className="block rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-500 hover:shadow-sm dark:border-gray-700 dark:hover:border-blue-400"
          >
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
              Overview
            </h3>
            <p className="text-sm text-gray-600">
              Smart TV Query features and quick start guide
            </p>
          </a>
          <a
            href="/components/query/hooks"
            className="block rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-500 hover:shadow-sm dark:border-gray-700 dark:hover:border-blue-400"
          >
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
              Hooks Reference
            </h3>
            <p className="text-sm text-gray-600">
              Complete API documentation for all hooks
            </p>
          </a>
          <a
            href="/components/query/examples"
            className="block rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-500 hover:shadow-sm dark:border-gray-700 dark:hover:border-blue-400"
          >
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
              Examples
            </h3>
            <p className="text-sm text-gray-600">
              Real-world examples and implementation patterns
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
