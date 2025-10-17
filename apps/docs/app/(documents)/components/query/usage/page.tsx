import { CodePreview } from '../../../../../components';

export default function QueryUsage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Usage & Configuration</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Learn how to configure and use Smart TV Query for optimal data fetching in your Smart TV applications.
        </p>
      </div>

      {/* Query Client Configuration */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Query Client Configuration</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          The QueryClient is the central manager for all your queries. Configure it to match your app&apos;s needs:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Basic Configuration</h3>
            <CodePreview 
              code={`import { QueryClient } from '@smart-tv/query';

const queryClient = new QueryClient({
  defaultOptions: {
    // Query options
    staleTime: 5 * 60 * 1000,          // Data is fresh for 5 minutes
    cacheTime: 10 * 60 * 1000,         // Keep in cache for 10 minutes
    refetchOnMount: true,               // Refetch when component mounts
    refetchOnWindowFocus: false,        // Don't refetch on TV focus
    retry: 2,                           // Retry failed requests 2 times
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    
    // Mutation options
    onError: (error) => {
      console.error('Query error:', error);
    },
    onSuccess: (data) => {
      console.log('Query success:', data);
    }
  }
});`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Smart TV Optimized Configuration</h3>
            <CodePreview 
              code={`import { QueryClient } from '@smart-tv/query';

const queryClient = new QueryClient({
  defaultOptions: {
    // Aggressive caching for TV performance
    staleTime: 10 * 60 * 1000,         // 10 minutes fresh time
    cacheTime: 60 * 60 * 1000,         // 1 hour cache time
    
    // TV-specific behavior
    refetchOnWindowFocus: false,        // TV apps don't lose focus
    refetchOnMount: false,              // Prevent unnecessary refetches
    refetchOnReconnect: true,           // Refetch on network reconnect
    
    // Error handling for unreliable TV networks
    retry: 3,
    retryDelay: attemptIndex => {
      const delay = Math.min(1000 * 2 ** attemptIndex, 30000);
      console.log(\`Retrying in \${delay}ms (attempt \${attemptIndex + 1})\`);
      return delay;
    },
    
    // Network timeout for TV environments
    timeout: 10000,                     // 10 second timeout
  }
});

// Handle device sleep/wake cycles
if (typeof window !== 'undefined') {
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      // Cancel ongoing requests when device goes to sleep
      queryClient.cancelQueries();
    } else {
      // Optionally refetch critical data when device wakes up
      queryClient.refetchQueries(['critical-data']);
    }
  });
}`}
              language="ts"
            />
          </div>
        </div>
      </div>

      {/* Query Keys */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Query Keys</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Query keys uniquely identify your queries and are used for caching, invalidation, and refetching.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Simple Keys</h3>
            <CodePreview 
              code={`// String keys for simple queries
useQuery('movies', fetchMovies);
useQuery('user-profile', fetchUserProfile);
useQuery('tv-channels', fetchChannels);`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Array Keys</h3>
            <CodePreview 
              code={`// Array keys for complex queries with parameters
useQuery(['movie', movieId], () => fetchMovie(movieId));
useQuery(['movies', { genre: 'action', year: 2024 }], () => fetchMovies({ genre: 'action', year: 2024 }));
useQuery(['user', userId, 'watchlist'], () => fetchUserWatchlist(userId));

// Hierarchical keys for better organization
useQuery(['content', 'movies', 'trending'], fetchTrendingMovies);
useQuery(['content', 'movies', 'genre', genreId], () => fetchMoviesByGenre(genreId));
useQuery(['content', 'tv-shows', 'season', showId, seasonNumber], () => fetchSeason(showId, seasonNumber));`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Key Best Practices</h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 dark:border-blue-500 p-4 rounded-lg">
              <div className="space-y-2 text-blue-800 dark:text-blue-300">
                <p>• <strong>Hierarchical:</strong> Structure keys from general to specific</p>
                <p>• <strong>Consistent:</strong> Use the same key format across your app</p>
                <p>• <strong>Descriptive:</strong> Make keys readable and meaningful</p>
                <p>• <strong>Serializable:</strong> Ensure key objects can be serialized</p>
              </div>
            </div>
            <CodePreview 
              code={`// Good: Hierarchical and descriptive
const QUERY_KEYS = {
  movies: {
    all: ['movies'] as const,
    lists: () => [...QUERY_KEYS.movies.all, 'list'] as const,
    list: (filters: MovieFilters) => [...QUERY_KEYS.movies.lists(), filters] as const,
    details: () => [...QUERY_KEYS.movies.all, 'detail'] as const,
    detail: (id: number) => [...QUERY_KEYS.movies.details(), id] as const,
  },
  user: {
    all: ['user'] as const,
    profile: (id: number) => [...QUERY_KEYS.user.all, id] as const,
    watchlist: (id: number) => [...QUERY_KEYS.user.profile(id), 'watchlist'] as const,
  }
} as const;

// Usage
useQuery(QUERY_KEYS.movies.list({ genre: 'action' }), () => fetchMovies({ genre: 'action' }));
useQuery(QUERY_KEYS.movies.detail(123), () => fetchMovie(123));`}
              language="ts"
            />
          </div>
        </div>
      </div>

      {/* Query Functions */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Query Functions</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Query functions are responsible for fetching your data. They should be pure functions that return a Promise.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Basic Query Function</h3>
            <CodePreview 
              code={`// Simple fetch function
const fetchMovies = async (): Promise<Movie[]> => {
  const response = await fetch('/api/movies');
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  return response.json();
};

// Usage in component
function MovieList() {
  const { data, error, status } = useQuery('movies', fetchMovies);
  
  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'error') return <div>Error: {error?.message}</div>;
  
  return (
    <ul>
      {data?.map(movie => <li key={movie.id}>{movie.title}</li>)}
    </ul>
  );
}`}
              language="tsx"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Parameterized Query Function</h3>
            <CodePreview 
              code={`// Query function with parameters
const fetchMovie = async (id: number): Promise<Movie> => {
  const response = await fetch(\`/api/movies/\${id}\`);
  if (!response.ok) {
    throw new Error(\`Failed to fetch movie \${id}\`);
  }
  return response.json();
};

// Query function with complex parameters
const fetchMovies = async (filters: MovieFilters): Promise<MovieResponse> => {
  const params = new URLSearchParams({
    genre: filters.genre || '',
    year: filters.year?.toString() || '',
    page: filters.page?.toString() || '1',
    limit: filters.limit?.toString() || '20'
  });
  
  const response = await fetch(\`/api/movies?\${params}\`);
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  return response.json();
};

// Usage
function MovieDetail({ movieId }: { movieId: number }) {
  const { data: movie } = useQuery(
    ['movie', movieId],
    () => fetchMovie(movieId)
  );
  
  return <div>{movie?.title}</div>;
}

function FilteredMovies({ filters }: { filters: MovieFilters }) {
  const { data } = useQuery(
    ['movies', filters],
    () => fetchMovies(filters)
  );
  
  return <div>{data?.movies.length} movies found</div>;
}`}
              language="tsx"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">XHR Fetcher for Legacy TV Support</h3>
            <CodePreview 
              code={`// Import XHR fetcher for older Smart TV compatibility
import { xhrFetcher, tvFetch } from '@smart-tv/query';

// Basic XHR query function
const fetchMoviesXHR = async (): Promise<Movie[]> => {
  const response = await xhrFetcher('/api/movies');
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  return response.json();
};

// Advanced XHR with Smart TV optimizations
const fetchMovieWithProgress = async (id: number): Promise<Movie> => {
  const response = await tvFetch(\`/api/movies/\${id}\`, {
    method: 'GET',
    timeout: 15000, // Longer timeout for TV networks
    responseType: 'json',
    headers: {
      'Accept': 'application/json',
      'X-Device-Type': 'smart-tv',
      'X-Device-Memory': navigator.deviceMemory || '4' // Memory hints for server
    },
    withCredentials: true, // Include authentication cookies
    onDownloadProgress: (loaded, total) => {
      if (total) {
        const progress = Math.round((loaded / total) * 100);
        console.log(\`Loading movie \${id}: \${progress}%\`);
      }
    }
  });

  if (!response.ok) {
    throw new Error(\`Failed to fetch movie \${id}: \${response.status} \${response.statusText}\`);
  }
  
  return response.json();
};

// POST request with XHR
const createWatchlistItemXHR = async (movieId: number): Promise<WatchlistItem> => {
  const response = await xhrFetcher('/api/watchlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: { movieId },
    timeout: 10000,
    onUploadProgress: (sent, total) => {
      console.log(\`Upload progress: \${sent}/\${total}\`);
    }
  });

  if (!response.ok) {
    throw new Error('Failed to add to watchlist');
  }
  
  return response.json();
};

// Usage in components
function TVMovieList() {
  const { data, error, status } = useQuery(
    ['movies-xhr'],
    fetchMoviesXHR,
    {
      staleTime: 10 * 60 * 1000, // Longer stale time for TV
      retry: 3, // More retries for unreliable TV networks
    }
  );

  if (status === 'loading') return <div>Loading for Smart TV...</div>;
  if (status === 'error') return <div>TV Error: {error?.message}</div>;

  return (
    <div className="tv-movie-grid">
      {data?.map(movie => (
        <div key={movie.id} className="tv-movie-card">
          {movie.title}
        </div>
      ))}
    </div>
  );
}

// Comparison: Modern fetch vs XHR fetcher
const modernFetch = () => fetch('/api/movies').then(r => r.json());
const legacyFetch = () => xhrFetcher('/api/movies').then(r => r.json());

// Both work the same way in your queries!
const modernQuery = useQuery(['movies-modern'], modernFetch);
const legacyQuery = useQuery(['movies-legacy'], legacyFetch);`}
              language="tsx"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Error Handling in Query Functions</h3>
            <CodePreview 
              code={`// Robust error handling
const fetchWithRetry = async (url: string, options?: RequestInit): Promise<any> => {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  // Handle different error types
  if (!response.ok) {
    let errorMessage = 'Network request failed';
    
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch {
      // If response is not JSON, use status text
      errorMessage = response.statusText || errorMessage;
    }
    
    // Throw error with status for better error handling
    const error = new Error(errorMessage) as any;
    error.status = response.status;
    error.statusText = response.statusText;
    throw error;
  }

  return response.json();
};

// Query function with proper error handling
const fetchMovieDetails = async (id: number): Promise<MovieDetails> => {
  try {
    return await fetchWithRetry(\`/api/movies/\${id}/details\`);
  } catch (error: any) {
    // Add context to the error
    error.message = \`Failed to fetch movie details for ID \${id}: \${error.message}\`;
    throw error;
  }
};

// Usage with error boundary
function MovieDetailsWithError({ movieId }: { movieId: number }) {
  const { data, error, status, retry } = useQuery(
    ['movie-details', movieId],
    () => fetchMovieDetails(movieId),
    {
      retry: (failureCount, error: any) => {
        // Don't retry on 404 errors
        if (error?.status === 404) return false;
        // Retry up to 3 times for other errors
        return failureCount < 3;
      },
      retryDelay: 1000, // Wait 1 second between retries
    }
  );
  
  if (status === 'loading') return <div>Loading movie details...</div>;
  
  if (status === 'error') {
    return (
      <div className="error-container">
        <p>Error loading movie details: {error?.message}</p>
        <button onClick={() => retry()}>Try Again</button>
      </div>
    );
  }
  
  return <div>{data?.title}</div>;
}`}
              language="tsx"
            />
          </div>
        </div>
      </div>

      {/* Query Options */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Query Options</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Customize query behavior with various options to optimize performance and user experience.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Caching Options</h3>
            <CodePreview 
              code={`// Custom caching behavior
useQuery('trending-movies', fetchTrendingMovies, {
  staleTime: 15 * 60 * 1000,    // Fresh for 15 minutes
  cacheTime: 60 * 60 * 1000,    // Keep in cache for 1 hour
  refetchOnMount: false,         // Don't refetch on component mount
  refetchOnWindowFocus: false,   // Don't refetch on window focus
  refetchOnReconnect: true,      // Refetch when network reconnects
});

// Short-lived data
useQuery('live-sports-score', fetchLiveScore, {
  staleTime: 0,                  // Always stale, always refetch
  cacheTime: 30 * 1000,          // Keep for 30 seconds only
  refetchInterval: 10 * 1000,    // Auto-refetch every 10 seconds
});

// Long-lived static data
useQuery('app-config', fetchAppConfig, {
  staleTime: Infinity,           // Never goes stale
  cacheTime: Infinity,           // Never removed from cache
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
});`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Loading States & Placeholders</h3>
            <CodePreview 
              code={`// Initial data and placeholders
useQuery('user-preferences', fetchUserPreferences, {
  initialData: {
    theme: 'dark',
    language: 'en',
    autoplay: true
  },
  placeholderData: {
    theme: 'dark',
    language: 'en', 
    autoplay: false
  }
});

// Keep previous data while loading new data
function MovieList({ genre }: { genre: string }) {
  const { data, isLoading, isFetching } = useQuery(
    ['movies', { genre }],
    () => fetchMoviesByGenre(genre),
    {
      keepPreviousData: true, // Show previous data while fetching new
    }
  );

  return (
    <div>
      {isFetching && <div className="loading-indicator">Updating...</div>}
      <div className={isLoading ? 'opacity-50' : ''}>
        {data?.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}`}
              language="tsx"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Conditional Queries</h3>
            <CodePreview 
              code={`// Enable/disable queries conditionally
function UserDashboard({ userId }: { userId?: number }) {
  // Only fetch user data if userId is available
  const { data: user } = useQuery(
    ['user', userId],
    () => fetchUser(userId!),
    {
      enabled: !!userId, // Only run if userId exists
    }
  );

  // Fetch user preferences only after user data is loaded
  const { data: preferences } = useQuery(
    ['user-preferences', userId],
    () => fetchUserPreferences(userId!),
    {
      enabled: !!user, // Only run if user data exists
    }
  );

  if (!userId) return <div>Please log in</div>;
  if (!user) return <div>Loading user...</div>;

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      {preferences && (
        <div>Theme: {preferences.theme}</div>
      )}
    </div>
  );
}

// Query based on app state
function ContentFeed() {
  const { isOnline } = useNetworkStatus();
  
  const { data } = useQuery(
    'content-feed',
    fetchContentFeed,
    {
      enabled: isOnline, // Only fetch when online
      refetchOnMount: isOnline,
    }
  );

  if (!isOnline) {
    return <div>Offline mode - showing cached content</div>;
  }

  return <div>{/* render content */}</div>;
}`}
              language="tsx"
            />
          </div>
        </div>
      </div>

      {/* Query Invalidation */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Query Invalidation</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Manually invalidate and refetch queries when data changes or after mutations.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Manual Invalidation</h3>
            <CodePreview 
              code={`import { useQueryClient } from '@smart-tv/query';

function MovieManager() {
  const queryClient = useQueryClient();

  const handleMovieUpdate = async (movieId: number) => {
    // Update movie on server
    await updateMovie(movieId);
    
    // Invalidate specific movie query
    await queryClient.invalidateQueries(['movie', movieId]);
    
    // Invalidate all movie-related queries
    await queryClient.invalidateQueries(['movies']);
    
    // Invalidate queries by pattern
    await queryClient.invalidateQueries({
      queryKey: ['movies'],
      exact: false, // Invalidate all queries that start with ['movies']
    });
  };

  const handleClearCache = () => {
    // Remove all queries from cache
    queryClient.clear();
  };

  const handleRefreshAll = () => {
    // Refetch all active queries
    queryClient.refetchQueries();
  };

  return (
    <div>
      <button onClick={() => handleMovieUpdate(123)}>
        Update Movie
      </button>
      <button onClick={handleClearCache}>
        Clear Cache
      </button>
      <button onClick={handleRefreshAll}>
        Refresh All
      </button>
    </div>
  );
}`}
              language="tsx"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Automatic Invalidation</h3>
            <CodePreview 
              code={`// Invalidate queries after successful mutations
const useAddMovie = () => {
  const queryClient = useQueryClient();
  
  return useMutation(
    (newMovie: CreateMovieRequest) => createMovie(newMovie),
    {
      onSuccess: () => {
        // Invalidate movie lists to show new movie
        queryClient.invalidateQueries(['movies']);
      },
      onError: (error) => {
        console.error('Failed to add movie:', error);
      },
    }
  );
};

// Smart invalidation based on mutation result
const useUpdateMovie = () => {
  const queryClient = useQueryClient();
  
  return useMutation(
    ({ id, updates }: { id: number; updates: Partial<Movie> }) => 
      updateMovie(id, updates),
    {
      onSuccess: (updatedMovie, { id }) => {
        // Update the specific movie in cache
        queryClient.setQueryData(['movie', id], updatedMovie);
        
        // Invalidate movie lists to show updated data
        queryClient.invalidateQueries(['movies']);
        
        // If genre changed, invalidate genre-specific queries
        if (updates.genre) {
          queryClient.invalidateQueries(['movies', 'genre']);
        }
      },
    }
  );
};`}
              language="ts"
            />
          </div>
        </div>
      </div>

      {/* Performance Tips */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Performance Tips</h2>
        <div className="space-y-4">
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 dark:border-green-500 p-4 rounded-lg">
            <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2">Smart TV Optimizations</h3>
            <ul className="text-green-800 dark:text-green-300 text-sm space-y-1">
              <li>• Use longer <code className="bg-green-100 px-1 rounded">staleTime</code> for better TV performance</li>
              <li>• Disable <code className="bg-green-100 px-1 rounded">refetchOnWindowFocus</code> for TV apps</li>
              <li>• Implement aggressive caching for content metadata</li>
              <li>• Use <code className="bg-green-100 px-1 rounded">keepPreviousData</code> for smooth transitions</li>
              <li>• Cancel queries when device goes to sleep</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 dark:border-blue-500 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Query Key Strategies</h3>
            <ul className="text-blue-800 dark:text-blue-300 text-sm space-y-1">
              <li>• Use hierarchical keys for better cache management</li>
              <li>• Keep query keys consistent across components</li>
              <li>• Use TypeScript for query key type safety</li>
              <li>• Create query key factories for complex apps</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 dark:border-purple-500 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2">Error Handling</h3>
            <ul className="text-purple-800 text-sm space-y-1">
              <li>• Implement proper retry logic for network issues</li>
              <li>• Use error boundaries for graceful error handling</li>
              <li>• Provide fallback data for critical queries</li>
              <li>• Log errors for debugging in production</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
