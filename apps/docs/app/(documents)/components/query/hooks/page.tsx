import { CodePreview } from "@/components";

export default function QueryHooks() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Hooks Reference
        </h1>
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
          Complete API reference for all Smart TV Query hooks including
          useQuery, useMutation, and useInfiniteQuery.
        </p>
      </div>

      {/* useQuery Hook */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          useQuery
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          The primary hook for fetching and caching data. Returns loading
          states, data, and error information.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">Basic Usage</h3>
            <CodePreview
              code={`import { useQuery } from '@smart-tv/query';

function MovieList() {
  const {
    data,           // The fetched data
    error,          // Error object if request failed
    status,         // 'loading', 'error', or 'success'
    isLoading,      // Boolean: is currently loading
    isError,        // Boolean: has error
    isSuccess,      // Boolean: request succeeded
    refetch,        // Function to manually refetch
    remove,         // Function to remove from cache
  } = useQuery(
    'movies',                    // Query key
    async () => {                // Query function
      const response = await fetch('/api/movies');
      return response.json();
    },
    {                           // Options (optional)
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
    }
  );

  if (isLoading) return <div>Loading movies...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div>
      <button onClick={() => refetch()}>Refresh</button>
      <ul>
        {data?.map((movie: any) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}`}
              language="tsx"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Type Definitions</h3>
            <CodePreview
              code={`// Query function type
type QueryFunction<T = unknown> = () => Promise<T>;

// Query options
interface QueryOptions<TData = unknown, TError = Error> {
  staleTime?: number;              // How long data is fresh (default: 0)
  cacheTime?: number;              // How long to keep in cache (default: 5 min)
  refetchOnMount?: boolean;        // Refetch on component mount (default: true)
  refetchOnWindowFocus?: boolean;  // Refetch on window focus (default: true)
  refetchOnReconnect?: boolean;    // Refetch on reconnect (default: true)
  refetchInterval?: number;        // Auto-refetch interval in ms
  retry?: boolean | number | ((failureCount: number, error: TError) => boolean);
  retryDelay?: number | ((retryAttempt: number, error: TError) => number);
  enabled?: boolean;               // Enable/disable query (default: true)
  initialData?: TData;             // Initial data
  placeholderData?: TData;         // Placeholder data while loading
  keepPreviousData?: boolean;      // Keep previous data during refetch
  onSuccess?: (data: TData) => void;
  onError?: (error: TError) => void;
  onSettled?: (data: TData | undefined, error: TError | null) => void;
}

// Hook return type
interface QueryResult<TData = unknown, TError = Error> {
  data: TData | undefined;
  error: TError | null;
  status: 'loading' | 'error' | 'success';
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  isFetching: boolean;
  isStale: boolean;
  refetch: () => Promise<QueryResult<TData, TError>>;
  remove: () => void;
}`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Advanced Examples</h3>
            <CodePreview
              code={`// Parameterized query with TypeScript
interface Movie {
  id: number;
  title: string;
  genre: string;
  year: number;
}

interface MovieFilters {
  genre?: string;
  year?: number;
  sortBy?: 'title' | 'year' | 'rating';
}

function FilteredMovies({ filters }: { filters: MovieFilters }) {
  const { data, isLoading, error } = useQuery<Movie[], Error>(
    ['movies', filters],
    async () => {
      const params = new URLSearchParams();
      if (filters.genre) params.set('genre', filters.genre);
      if (filters.year) params.set('year', filters.year.toString());
      if (filters.sortBy) params.set('sortBy', filters.sortBy);

      const response = await fetch(\`/api/movies?\${params}\`);
      if (!response.ok) throw new Error('Failed to fetch movies');
      return response.json();
    },
    {
      enabled: Object.keys(filters).length > 0, // Only fetch if filters provided
      staleTime: 10 * 60 * 1000, // Fresh for 10 minutes
      keepPreviousData: true,     // Show previous results while loading
      retry: (failureCount, error) => {
        // Don't retry on 404
        if (error.message.includes('404')) return false;
        return failureCount < 3;
      },
      onSuccess: (data) => {
        console.log(\`Loaded \${data.length} movies\`);
      },
      onError: (error) => {
        console.error('Movie fetch error:', error);
      }
    }
  );

  if (isLoading) return <div>Loading movies...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <p>{data?.length || 0} movies found</p>
      {data?.map(movie => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.genre} • {movie.year}</p>
        </div>
      ))}
    </div>
  );
}`}
              language="tsx"
            />
          </div>
        </div>
      </div>

      {/* useMutation Hook */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          useMutation
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Hook for creating, updating, or deleting data. Unlike useQuery,
          mutations are not automatically executed.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">Basic Usage</h3>
            <CodePreview
              code={`import { useMutation, useQueryClient } from '@smart-tv/query';

function AddMovieForm() {
  const queryClient = useQueryClient();

  const {
    mutate,         // Function to trigger mutation
    mutateAsync,    // Async version of mutate
    data,           // Response data from mutation
    error,          // Error from mutation
    status,         // 'idle', 'loading', 'error', 'success'
    isLoading,      // Boolean: is currently mutating
    isError,        // Boolean: mutation failed
    isSuccess,      // Boolean: mutation succeeded
    reset,          // Reset mutation state
  } = useMutation(
    async (newMovie: CreateMovieRequest) => {
      const response = await fetch('/api/movies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMovie),
      });
      if (!response.ok) throw new Error('Failed to create movie');
      return response.json();
    },
    {
      onSuccess: (data, variables) => {
        console.log('Movie created:', data);
        // Invalidate movie list to refetch
        queryClient.invalidateQueries(['movies']);
      },
      onError: (error, variables) => {
        console.error('Failed to create movie:', error);
      },
      onSettled: (data, error, variables) => {
        console.log('Mutation completed');
      }
    }
  );

  const handleSubmit = (movieData: CreateMovieRequest) => {
    mutate(movieData);
  };

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        handleSubmit({
          title: formData.get('title') as string,
          genre: formData.get('genre') as string,
        });
      }}>
        <input name="title" placeholder="Movie title" required />
        <input name="genre" placeholder="Genre" required />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Creating...' : 'Create Movie'}
        </button>
      </form>

      {isError && <div>Error: {error?.message}</div>}
      {isSuccess && <div>Movie created successfully!</div>}
    </div>
  );
}`}
              language="tsx"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Optimistic Updates</h3>
            <CodePreview
              code={`interface Movie {
  id: number;
  title: string;
  likes: number;
}

function MovieLikeButton({ movie }: { movie: Movie }) {
  const queryClient = useQueryClient();

  const likeMutation = useMutation(
    async (movieId: number) => {
      const response = await fetch(\`/api/movies/\${movieId}/like\`, {
        method: 'POST',
      });
      return response.json();
    },
    {
      // Optimistic update
      onMutate: async (movieId) => {
        // Cancel outgoing refetches
        await queryClient.cancelQueries(['movie', movieId]);

        // Snapshot previous value
        const previousMovie = queryClient.getQueryData<Movie>(['movie', movieId]);

        // Optimistically update
        if (previousMovie) {
          queryClient.setQueryData<Movie>(['movie', movieId], {
            ...previousMovie,
            likes: previousMovie.likes + 1,
          });
        }

        // Return context for rollback
        return { previousMovie };
      },

      // Rollback on error
      onError: (error, movieId, context) => {
        if (context?.previousMovie) {
          queryClient.setQueryData(['movie', movieId], context.previousMovie);
        }
      },

      // Always refetch after error or success
      onSettled: (data, error, movieId) => {
        queryClient.invalidateQueries(['movie', movieId]);
      },
    }
  );

  return (
    <button
      onClick={() => likeMutation.mutate(movie.id)}
      disabled={likeMutation.isLoading}
    >
      ❤️ {movie.likes} {likeMutation.isLoading && '...'}
    </button>
  );
}`}
              language="tsx"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">
              Mutation Type Definitions
            </h3>
            <CodePreview
              code={`// Mutation function type
type MutationFunction<TData = unknown, TVariables = unknown> = (
  variables: TVariables
) => Promise<TData>;

// Mutation options
interface MutationOptions<TData = unknown, TError = Error, TVariables = unknown> {
  onMutate?: (variables: TVariables) => Promise<any> | any;
  onSuccess?: (data: TData, variables: TVariables, context?: any) => Promise<void> | void;
  onError?: (error: TError, variables: TVariables, context?: any) => Promise<void> | void;
  onSettled?: (
    data: TData | undefined,
    error: TError | null,
    variables: TVariables,
    context?: any
  ) => Promise<void> | void;
  retry?: boolean | number | ((failureCount: number, error: TError) => boolean);
  retryDelay?: number | ((retryAttempt: number, error: TError) => number);
}

// Mutation result type
interface MutationResult<TData = unknown, TError = Error, TVariables = unknown> {
  data: TData | undefined;
  error: TError | null;
  status: 'idle' | 'loading' | 'error' | 'success';
  isIdle: boolean;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  mutate: (variables: TVariables) => void;
  mutateAsync: (variables: TVariables) => Promise<TData>;
  reset: () => void;
}`}
              language="ts"
            />
          </div>
        </div>
      </div>

      {/* useInfiniteQuery Hook */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          useInfiniteQuery
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Hook for implementing infinite scrolling and pagination patterns.
          Perfect for long lists of content.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">Basic Usage</h3>
            <CodePreview
              code={`import { useInfiniteQuery } from '@smart-tv/query';

interface MoviesPage {
  movies: Movie[];
  nextCursor?: string;
  hasMore: boolean;
}

function InfiniteMovieList() {
  const {
    data,              // Pages array
    error,             // Error object
    status,            // Loading status
    hasNextPage,       // Boolean: has more pages
    isFetchingNextPage, // Boolean: fetching next page
    fetchNextPage,     // Function to fetch next page
    refetch,           // Refetch all pages
  } = useInfiniteQuery<MoviesPage>(
    'infinite-movies',
    async ({ pageParam = '' }) => {
      const response = await fetch(\`/api/movies?cursor=\${pageParam}\`);
      return response.json();
    },
    {
      getNextPageParam: (lastPage) => {
        // Return next page parameter, or undefined if no more pages
        return lastPage.hasMore ? lastPage.nextCursor : undefined;
      },
      staleTime: 5 * 60 * 1000,
    }
  );

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'error') return <div>Error: {error?.message}</div>;

  // Flatten all pages into single array
  const allMovies = data?.pages.flatMap(page => page.movies) ?? [];

  return (
    <div>
      <div className="movie-grid">
        {allMovies.map(movie => (
          <div key={movie.id} className="movie-card">
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
          </div>
        ))}
      </div>

      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading more...' : 'Load More'}
        </button>
      )}
    </div>
  );
}`}
              language="tsx"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">
              Advanced Infinite Scrolling
            </h3>
            <CodePreview
              code={`import { useInfiniteQuery } from '@smart-tv/query';
import { useEffect, useRef, useCallback } from 'react';

interface SearchResults {
  items: SearchItem[];
  total: number;
  page: number;
  hasMore: boolean;
}

function InfiniteSearchResults({ query }: { query: string }) {
  const observerRef = useRef<IntersectionObserver>();
  const lastElementRef = useRef<HTMLDivElement>(null);

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery<SearchResults>(
    ['search', query],
    async ({ pageParam = 1 }) => {
      const response = await fetch(
        \`/api/search?q=\${encodeURIComponent(query)}&page=\${pageParam}\`
      );
      return response.json();
    },
    {
      enabled: !!query, // Only search if query exists
      getNextPageParam: (lastPage) => {
        return lastPage.hasMore ? lastPage.page + 1 : undefined;
      },
      staleTime: 30 * 1000, // Search results stale after 30 seconds
      keepPreviousData: true, // Keep previous search while loading new
    }
  );

  // Intersection Observer for auto-loading
  const lastElementCallbackRef = useCallback(
    (node: HTMLDivElement) => {
      if (isFetchingNextPage) return;

      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage]
  );

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  if (isLoading) return <div>Searching...</div>;
  if (error) return <div>Search error: {error.message}</div>;
  if (!data?.pages[0]?.items.length) return <div>No results found</div>;

  const allItems = data.pages.flatMap(page => page.items);
  const totalResults = data.pages[0]?.total || 0;

  return (
    <div>
      <p>Found {totalResults} results</p>

      <div className="results-list">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;

          return (
            <div
              key={item.id}
              ref={isLast ? lastElementCallbackRef : undefined}
              className="result-item"
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>

      {isFetchingNextPage && (
        <div className="loading-more">Loading more results...</div>
      )}
    </div>
  );
}`}
              language="tsx"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">
              Infinite Query Type Definitions
            </h3>
            <CodePreview
              code={`// Infinite query function type
type InfiniteQueryFunction<TData = unknown, TPageParam = unknown> = (
  context: {
    pageParam: TPageParam;
    queryKey: QueryKey;
  }
) => Promise<TData>;

// Infinite query options
interface InfiniteQueryOptions<TData = unknown, TError = Error> {
  getNextPageParam: (lastPage: TData, pages: TData[]) => unknown;
  getPreviousPageParam?: (firstPage: TData, pages: TData[]) => unknown;
  staleTime?: number;
  cacheTime?: number;
  enabled?: boolean;
  refetchOnMount?: boolean;
  refetchOnWindowFocus?: boolean;
  retry?: boolean | number;
  onSuccess?: (data: InfiniteData<TData>) => void;
  onError?: (error: TError) => void;
}

// Infinite query result type
interface InfiniteQueryResult<TData = unknown, TError = Error> {
  data: InfiniteData<TData> | undefined;
  error: TError | null;
  status: 'loading' | 'error' | 'success';
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  isFetching: boolean;
  isFetchingNextPage: boolean;
  isFetchingPreviousPage: boolean;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  fetchNextPage: () => Promise<InfiniteQueryResult<TData, TError>>;
  fetchPreviousPage: () => Promise<InfiniteQueryResult<TData, TError>>;
  refetch: () => Promise<InfiniteQueryResult<TData, TError>>;
}

// Infinite data structure
interface InfiniteData<TData> {
  pages: TData[];
  pageParams: unknown[];
}`}
              language="ts"
            />
          </div>
        </div>
      </div>

      {/* useQueryClient Hook */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          useQueryClient
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Access the QueryClient instance to manually manage cache, invalidate
          queries, and perform advanced operations.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">Basic Usage</h3>
            <CodePreview
              code={`import { useQueryClient } from '@smart-tv/query';

function CacheManager() {
  const queryClient = useQueryClient();

  const handleInvalidateMovies = async () => {
    // Invalidate all movie queries
    await queryClient.invalidateQueries(['movies']);
  };

  const handleSetMovieData = () => {
    // Manually set data in cache
    queryClient.setQueryData(['movie', 123], {
      id: 123,
      title: 'New Movie',
      genre: 'Action'
    });
  };

  const handleGetMovieData = () => {
    // Get data from cache
    const movie = queryClient.getQueryData(['movie', 123]);
    console.log('Cached movie:', movie);
  };

  const handleClearCache = () => {
    // Clear all cached data
    queryClient.clear();
  };

  const handleRefetchAll = () => {
    // Refetch all active queries
    queryClient.refetchQueries();
  };

  return (
    <div>
      <button onClick={handleInvalidateMovies}>
        Invalidate Movies
      </button>
      <button onClick={handleSetMovieData}>
        Set Movie Data
      </button>
      <button onClick={handleGetMovieData}>
        Get Movie Data
      </button>
      <button onClick={handleClearCache}>
        Clear Cache
      </button>
      <button onClick={handleRefetchAll}>
        Refetch All
      </button>
    </div>
  );
}`}
              language="tsx"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">QueryClient Methods</h3>
            <CodePreview
              code={`// Cache management
queryClient.getQueryData(queryKey);              // Get cached data
queryClient.setQueryData(queryKey, data);        // Set cached data
queryClient.removeQueries(queryKey);             // Remove from cache
queryClient.clear();                             // Clear all cache

// Query invalidation
queryClient.invalidateQueries(queryKey);         // Mark as stale
queryClient.refetchQueries(queryKey);            // Force refetch
queryClient.cancelQueries(queryKey);             // Cancel ongoing

// Query state
queryClient.getQueriesData(queryKey);            // Get multiple queries
queryClient.setQueriesData(queryKey, updater);   // Update multiple queries
queryClient.isFetching(queryKey);                // Check if fetching
queryClient.isStale(queryKey);                   // Check if stale

// Advanced operations
queryClient.fetchQuery(queryKey, queryFn);       // Imperatively fetch
queryClient.prefetchQuery(queryKey, queryFn);    // Prefetch for cache
queryClient.ensureQueryData(queryKey, queryFn);  // Fetch if not cached`}
              language="ts"
            />
          </div>
        </div>
      </div>

      {/* Custom Hooks */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Custom Query Hooks
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Create reusable custom hooks that encapsulate your data fetching logic
          for better organization.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">
              Custom useMovies Hook
            </h3>
            <CodePreview
              code={`// hooks/useMovies.ts
import { useQuery, UseQueryResult } from '@smart-tv/query';

interface Movie {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
}

interface MovieFilters {
  genre?: string;
  year?: number;
  minRating?: number;
}

// Custom hook for fetching movies
export function useMovies(filters: MovieFilters = {}): UseQueryResult<Movie[]> {
  return useQuery(
    ['movies', filters],
    async () => {
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) {
          params.set(key, value.toString());
        }
      });

      const response = await fetch(\`/api/movies?\${params}\`);
      if (!response.ok) throw new Error('Failed to fetch movies');
      return response.json();
    },
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
      enabled: Object.keys(filters).length > 0,
    }
  );
}

// Custom hook for a single movie
export function useMovie(id: number): UseQueryResult<Movie> {
  return useQuery(
    ['movie', id],
    async () => {
      const response = await fetch(\`/api/movies/\${id}\`);
      if (!response.ok) throw new Error(\`Movie \${id} not found\`);
      return response.json();
    },
    {
      enabled: !!id,
      staleTime: 10 * 60 * 1000, // 10 minutes for individual movies
    }
  );
}

// Custom hook for movie recommendations
export function useMovieRecommendations(movieId: number): UseQueryResult<Movie[]> {
  return useQuery(
    ['movie-recommendations', movieId],
    async () => {
      const response = await fetch(\`/api/movies/\${movieId}/recommendations\`);
      if (!response.ok) throw new Error('Failed to fetch recommendations');
      return response.json();
    },
    {
      enabled: !!movieId,
      staleTime: 30 * 60 * 1000, // 30 minutes for recommendations
    }
  );
}`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Using Custom Hooks</h3>
            <CodePreview
              code={`// components/MovieList.tsx
import { useMovies } from '../hooks/useMovies';

function MovieList() {
  const { data: movies, isLoading, error } = useMovies({
    genre: 'action',
    minRating: 7,
  });

  if (isLoading) return <div>Loading movies...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {movies?.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

// components/MovieDetail.tsx
import { useMovie, useMovieRecommendations } from '../hooks/useMovies';

function MovieDetail({ movieId }: { movieId: number }) {
  const { data: movie, isLoading } = useMovie(movieId);
  const { data: recommendations } = useMovieRecommendations(movieId);

  if (isLoading) return <div>Loading movie details...</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Genre: {movie.genre}</p>
      <p>Year: {movie.year}</p>
      <p>Rating: {movie.rating}/10</p>

      {recommendations && (
        <div>
          <h3>Recommended Movies</h3>
          {recommendations.map(rec => (
            <div key={rec.id}>{rec.title}</div>
          ))}
        </div>
      )}
    </div>
  );
}`}
              language="tsx"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">
              XHR-Based Custom Hooks for Legacy TV
            </h3>
            <CodePreview
              code={`// hooks/useTVMovies.ts - XHR-based hooks for Smart TV compatibility
import { useQuery, UseQueryResult } from '@smart-tv/query';
import { xhrFetcher, tvFetch } from '@smart-tv/query';

interface TVMovie {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  poster_url: string;
}

interface TVMovieFilters {
  genre?: string;
  year?: number;
  platform?: 'tizen' | 'webos' | 'android-tv';
}

// Custom hook using XHR fetcher for maximum TV compatibility
export function useTVMovies(filters: TVMovieFilters = {}): UseQueryResult<TVMovie[]> {
  return useQuery(
    ['tv-movies', filters],
    async () => {
      const response = await xhrFetcher('/api/tv/movies', {
        method: 'POST', // Use POST to avoid URL length limits on TV browsers
        headers: {
          'Content-Type': 'application/json',
          'X-Device-Type': 'smart-tv',
          'X-Platform': filters.platform || 'unknown'
        },
        body: filters,
        timeout: 20000, // 20 second timeout for TV networks
        responseType: 'json'
      });

      if (!response.ok) {
        throw new Error(\`TV API Error: \${response.status}\`);
      }

      return response.json();
    },
    {
      staleTime: 15 * 60 * 1000, // 15 minutes - longer for TV
      cacheTime: 60 * 60 * 1000, // 1 hour cache
      refetchOnMount: false, // Prevent unnecessary refetches on TV
      refetchOnWindowFocus: false, // TV apps don't lose focus
      retry: 4, // More retries for unreliable TV networks
      retryDelay: (attemptIndex) => Math.min(2000 * 2 ** attemptIndex, 60000),
      enabled: Object.keys(filters).length > 0,
    }
  );
}

// Custom hook for single TV movie with progress tracking
export function useTVMovie(id: number): UseQueryResult<TVMovie> {
  return useQuery(
    ['tv-movie', id],
    async () => {
      const response = await tvFetch(\`/api/tv/movies/\${id}\`, {
        timeout: 15000,
        responseType: 'json',
        headers: {
          'Accept': 'application/json',
          'X-Image-Size': '1920x1080' // Request TV-optimized images
        },
        onDownloadProgress: (loaded, total) => {
          if (total) {
            const progress = Math.round((loaded / total) * 100);
            console.log(\`Loading movie \${id}: \${progress}%\`);
          }
        }
      });

      if (!response.ok) {
        throw new Error(\`Failed to load TV movie \${id}\`);
      }

      const movie = await response.json();

      // Optimize image URLs for TV display
      if (movie.poster_url) {
        movie.poster_url = movie.poster_url.replace('/w500/', '/w1280/');
      }

      return movie;
    },
    {
      enabled: !!id && id > 0,
      staleTime: 30 * 60 * 1000, // 30 minutes for movie details
      cacheTime: 2 * 60 * 60 * 1000, // 2 hours cache
      retry: 3,
    }
  );
}

// Custom hook for TV streaming content with device-specific optimization
export function useTVStreamingContent(deviceInfo: {
  platform: string;
  memory: number;
  bandwidth: 'low' | 'medium' | 'high';
}): UseQueryResult<any[]> {
  return useQuery(
    ['tv-streaming-content', deviceInfo],
    async () => {
      const response = await tvFetch('/api/tv/streaming/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Device-Platform': deviceInfo.platform,
          'X-Device-Memory': deviceInfo.memory.toString(),
          'X-Network-Quality': deviceInfo.bandwidth
        },
        body: {
          device_capabilities: {
            max_resolution: deviceInfo.memory >= 4 ? '4K' : '1080p',
            hdr_support: deviceInfo.memory >= 4,
            audio_codecs: ['aac', 'ac3'],
            video_codecs: ['h264', 'h265']
          }
        },
        timeout: 25000, // Longer timeout for content metadata
        responseType: 'json',
        withCredentials: true
      });

      if (!response.ok) {
        throw new Error('Failed to load streaming content for TV');
      }

      return response.json();
    },
    {
      staleTime: 20 * 60 * 1000, // 20 minutes for streaming content
      cacheTime: 2 * 60 * 60 * 1000, // 2 hours cache
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 2,
      retryDelay: 5000, // Fixed 5 second delay
    }
  );
}`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">
              Using XHR-Based TV Hooks
            </h3>
            <CodePreview
              code={`// components/TVMovieApp.tsx
import { useTVMovies, useTVMovie, useTVStreamingContent } from '../hooks/useTVMovies';

function TVMovieApp() {
  // Detect TV platform
  const platform = detectTVPlatform();
  const deviceInfo = {
    platform,
    memory: getDeviceMemory(),
    bandwidth: getNetworkQuality()
  };

  const { data: movies, isLoading: moviesLoading } = useTVMovies({
    genre: 'action',
    platform: platform as any
  });

  const { data: streamingContent } = useTVStreamingContent(deviceInfo);

  if (moviesLoading) {
    return (
      <div className="tv-loading">
        <div className="tv-spinner" />
        <p>Loading optimized for your Smart TV...</p>
      </div>
    );
  }

  return (
    <div className="tv-app">
      <section className="tv-movies-section">
        <h2>Movies for {platform}</h2>
        <div className="tv-movie-grid">
          {movies?.map(movie => (
            <TVMovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      <section className="tv-streaming-section">
        <h2>Streaming Content</h2>
        <div className="tv-content-grid">
          {streamingContent?.map(content => (
            <TVContentCard key={content.id} content={content} />
          ))}
        </div>
      </section>
    </div>
  );
}

// Utility functions for TV detection
function detectTVPlatform(): string {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes('tizen')) return 'tizen';
  if (ua.includes('webos')) return 'webos';
  if (ua.includes('android') && ua.includes('tv')) return 'android-tv';
  return 'unknown';
}

function getDeviceMemory(): number {
  // @ts-ignore - navigator.deviceMemory is experimental
  return navigator.deviceMemory || 2;
}

function getNetworkQuality(): 'low' | 'medium' | 'high' {
  // @ts-ignore - navigator.connection is experimental
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (!connection) return 'medium';

  const effectiveType = connection.effectiveType;
  if (effectiveType === '4g') return 'high';
  if (effectiveType === '3g') return 'medium';
  return 'low';
}`}
              language="tsx"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
