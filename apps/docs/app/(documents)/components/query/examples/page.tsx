import { CodePreview } from "@/components";

export default function QueryExamples() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Examples
        </h1>
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
          Real-world examples and common patterns for using Smart TV Query in
          your Smart TV applications.
        </p>
      </div>

      {/* Movie Browsing App */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Movie Browsing App
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          A complete example showing movie browsing with search, filtering, and
          detail views.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">Setup & Types</h3>
            <CodePreview
              code={`// types/movie.ts
export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  genre_ids: number[];
  release_date: string;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieListResponse {
  results: Movie[];
  total_pages: number;
  total_results: number;
  page: number;
}

// api/movieApi.ts
const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const movieApi = {
  discover: async (params: {
    page?: number;
    genre?: number;
    year?: number;
    sortBy?: string;
  }): Promise<MovieListResponse> => {
    const searchParams = new URLSearchParams({
      api_key: API_KEY!,
      page: params.page?.toString() || '1',
      ...(params.genre && { with_genres: params.genre.toString() }),
      ...(params.year && { year: params.year.toString() }),
      ...(params.sortBy && { sort_by: params.sortBy }),
    });

    const response = await fetch(\`\${API_BASE_URL}/discover/movie?\${searchParams}\`);
    if (!response.ok) throw new Error('Failed to fetch movies');
    return response.json();
  },

  search: async (query: string, page = 1): Promise<MovieListResponse> => {
    const response = await fetch(
      \`\${API_BASE_URL}/search/movie?api_key=\${API_KEY}&query=\${encodeURIComponent(query)}&page=\${page}\`
    );
    if (!response.ok) throw new Error('Failed to search movies');
    return response.json();
  },

  getMovie: async (id: number): Promise<Movie> => {
    const response = await fetch(\`\${API_BASE_URL}/movie/\${id}?api_key=\${API_KEY}\`);
    if (!response.ok) throw new Error(\`Failed to fetch movie \${id}\`);
    return response.json();
  },

  getGenres: async (): Promise<Genre[]> => {
    const response = await fetch(\`\${API_BASE_URL}/genre/movie/list?api_key=\${API_KEY}\`);
    if (!response.ok) throw new Error('Failed to fetch genres');
    const data = await response.json();
    return data.genres;
  },
};`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Custom Hooks</h3>
            <CodePreview
              code={`// hooks/useMovies.ts
import { useQuery, useInfiniteQuery } from '@smart-tv/query';
import { movieApi } from '../api/movieApi';

// Discover movies with filters
export function useDiscoverMovies(filters: {
  genre?: number;
  year?: number;
  sortBy?: string;
}) {
  return useQuery(
    ['movies', 'discover', filters],
    () => movieApi.discover(filters),
    {
      staleTime: 10 * 60 * 1000, // 10 minutes
      keepPreviousData: true,
      enabled: Object.keys(filters).some(key => filters[key as keyof typeof filters]),
    }
  );
}

// Infinite scrolling movies
export function useInfiniteMovies(filters: {
  genre?: number;
  year?: number;
  sortBy?: string;
}) {
  return useInfiniteQuery(
    ['movies', 'infinite', filters],
    ({ pageParam = 1 }) => movieApi.discover({ ...filters, page: pageParam }),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
      },
      staleTime: 5 * 60 * 1000,
      enabled: Object.keys(filters).some(key => filters[key as keyof typeof filters]),
    }
  );
}

// Search movies
export function useSearchMovies(query: string) {
  return useQuery(
    ['movies', 'search', query],
    () => movieApi.search(query),
    {
      enabled: query.length > 2,
      staleTime: 2 * 60 * 1000, // 2 minutes for search results
      keepPreviousData: true,
    }
  );
}

// Single movie details
export function useMovie(id: number) {
  return useQuery(
    ['movie', id],
    () => movieApi.getMovie(id),
    {
      enabled: !!id,
      staleTime: 30 * 60 * 1000, // 30 minutes for movie details
    }
  );
}

// Genres list
export function useGenres() {
  return useQuery(
    ['genres'],
    movieApi.getGenres,
    {
      staleTime: Infinity, // Genres rarely change
      cacheTime: Infinity,
    }
  );
}`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Movie List Component</h3>
            <CodePreview
              code={`// components/MovieList.tsx
import React, { useState } from 'react';
import { useInfiniteMovies, useGenres } from '../hooks/useMovies';

interface MovieListProps {
  filters: {
    genre?: number;
    year?: number;
    sortBy?: string;
  };
}

export function MovieList({ filters }: MovieListProps) {
  const [selectedGenre, setSelectedGenre] = useState<number | undefined>(filters.genre);
  const [sortBy, setSortBy] = useState(filters.sortBy || 'popularity.desc');

  const { data: genres } = useGenres();

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteMovies({
    genre: selectedGenre,
    sortBy,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="bg-gray-200 aspect-[2/3] rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Error loading movies: {error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  const allMovies = data?.pages.flatMap(page => page.results) ?? [];

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <select
          value={selectedGenre || ''}
          onChange={(e) => setSelectedGenre(e.target.value ? Number(e.target.value) : undefined)}
          className="px-3 py-2 border rounded"
        >
          <option value="">All Genres</option>
          {genres?.map(genre => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 border rounded"
        >
          <option value="popularity.desc">Most Popular</option>
          <option value="release_date.desc">Newest</option>
          <option value="vote_average.desc">Highest Rated</option>
          <option value="title.asc">Alphabetical</option>
        </select>
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {allMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Load More */}
      {hasNextPage && (
        <div className="text-center">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="px-6 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            {isFetchingNextPage ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
}

// components/MovieCard.tsx
function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="group cursor-pointer transition-transform hover:scale-105">
      <div className="aspect-[2/3] bg-gray-200 rounded-lg overflow-hidden">
        {movie.poster_path ? (
          <img
            src={{\`https://image.tmdb.org/t/p/w500\${movie.poster_path}\`}}
            alt={movie.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>
      <div className="mt-2 space-y-1">
        <h3 className="font-medium text-sm line-clamp-2">{movie.title}</h3>
        <p className="text-xs text-gray-500">
          {new Date(movie.release_date).getFullYear()}
        </p>
        <div className="flex items-center space-x-1">
          <span className="text-yellow-400">★</span>
          <span className="text-xs">{movie.vote_average.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}`}
              language="tsx"
            />
          </div>
        </div>
      </div>

      {/* Legacy Smart TV Example */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Legacy Smart TV Implementation
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Complete example using XHR fetcher for maximum compatibility with
          older Smart TV platforms (2015-2018).
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">
              TV-Optimized API Layer
            </h3>
            <CodePreview
              code={`// api/tvMovieApi.ts
import { xhrFetcher, tvFetch } from '@smart-tv/query';

const TV_API_BASE = 'https://api.example.com/tv';

export interface TVMovieFilters {
  genre?: string;
  year?: number;
  rating?: number;
  page?: number;
}

export const tvMovieApi = {
  // Optimized for TV networks with longer timeouts
  getMovies: async (filters: TVMovieFilters = {}): Promise<MovieListResponse> => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined) params.set(key, value.toString());
    });

    const response = await tvFetch(\`\${TV_API_BASE}/movies?\${params}\`, {
      method: 'GET',
      timeout: 20000, // 20 second timeout for TV networks
      responseType: 'json',
      headers: {
        'Accept': 'application/json',
        'X-Device-Type': 'smart-tv',
        'X-Platform': navigator.userAgent.includes('Tizen') ? 'tizen' : 'webos',
        'Cache-Control': 'max-age=300' // 5 minute cache hint
      },
      withCredentials: true,
      onDownloadProgress: (loaded, total) => {
        if (total && loaded < total) {
          console.log(\`Loading movies: \${Math.round((loaded/total) * 100)}%\`);
        }
      }
    });

    if (!response.ok) {
      throw new Error(\`TV API Error: \${response.status} - \${response.statusText}\`);
    }

    return response.json();
  },

  // Get movie details with poster optimization for TV screens
  getMovieDetails: async (id: number): Promise<Movie> => {
    const response = await xhrFetcher(\`\${TV_API_BASE}/movies/\${id}\`, {
      timeout: 15000,
      responseType: 'json',
      headers: {
        'Accept': 'application/json',
        'X-Image-Size': '1920x1080', // Request TV-optimized images
        'X-Device-Memory': getDeviceMemory()
      }
    });

    if (!response.ok) {
      throw new Error(\`Failed to load movie \${id} for TV\`);
    }

    const movie = await response.json();

    // Optimize image URLs for TV display
    if (movie.poster_path) {
      movie.poster_path = movie.poster_path.replace('/w500/', '/w1280/');
    }

    return movie;
  },

  // Search with TV-specific optimizations
  searchMovies: async (query: string, page = 1): Promise<MovieListResponse> => {
    if (query.length < 2) {
      return { results: [], total_pages: 0, total_results: 0, page: 1 };
    }

    const response = await tvFetch(\`\${TV_API_BASE}/search\`, {
      method: 'POST', // Use POST to avoid URL length limits on TV browsers
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        query: query.trim(),
        page,
        tv_optimized: true
      },
      timeout: 25000 // Longer timeout for search
    });

    if (!response.ok) {
      throw new Error('Search failed for TV platform');
    }

    return response.json();
  }
};

// Utility function to detect device memory
function getDeviceMemory(): string {
  // @ts-ignore - navigator.deviceMemory is experimental
  const memory = navigator.deviceMemory || 2;
  return memory >= 4 ? 'high' : memory >= 2 ? 'medium' : 'low';
}`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">TV-Optimized Hooks</h3>
            <CodePreview
              code={`// hooks/useTVMovies.ts
import { useQuery, useInfiniteQuery } from '@smart-tv/query';
import { tvMovieApi } from '../api/tvMovieApi';

// TV-optimized movie discovery with aggressive caching
export function useTVMovies(filters: TVMovieFilters = {}) {
  return useQuery(
    ['tv-movies', filters],
    () => tvMovieApi.getMovies(filters),
    {
      staleTime: 15 * 60 * 1000, // 15 minutes - longer for TV
      cacheTime: 60 * 60 * 1000, // 1 hour cache
      refetchOnMount: false, // Prevent unnecessary refetches on TV
      refetchOnWindowFocus: false, // TV apps don't lose focus
      refetchOnReconnect: true, // Refetch on network reconnect
      retry: 4, // More retries for unreliable TV networks
      retryDelay: (attemptIndex) => {
        // Exponential backoff with longer delays for TV
        return Math.min(2000 * 2 ** attemptIndex, 60000);
      },
      keepPreviousData: true, // Smooth transitions on TV
    }
  );
}

// Infinite scrolling optimized for TV remote navigation
export function useInfiniteTVMovies(filters: TVMovieFilters = {}) {
  return useInfiniteQuery(
    ['tv-movies-infinite', filters],
    ({ pageParam = 1 }) => tvMovieApi.getMovies({ ...filters, page: pageParam }),
    {
      getNextPageParam: (lastPage) => {
        const hasMore = lastPage.page < lastPage.total_pages;
        return hasMore ? lastPage.page + 1 : undefined;
      },
      staleTime: 10 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      // Load smaller pages for TV memory constraints
      enabled: Object.keys(filters).length > 0,
    }
  );
}

// Single movie with TV-specific optimizations
export function useTVMovie(id: number) {
  return useQuery(
    ['tv-movie', id],
    () => tvMovieApi.getMovieDetails(id),
    {
      enabled: !!id && id > 0,
      staleTime: 30 * 60 * 1000, // 30 minutes for movie details
      cacheTime: 2 * 60 * 60 * 1000, // 2 hours cache
      retry: 3,
      retryDelay: 3000, // Fixed 3 second delay for movie details
    }
  );
}

// TV search with debouncing and memory management
export function useTVSearch(query: string) {
  return useQuery(
    ['tv-search', query],
    () => tvMovieApi.searchMovies(query),
    {
      enabled: query.length >= 2,
      staleTime: 60 * 1000, // 1 minute for search results
      cacheTime: 5 * 60 * 1000, // 5 minutes cache for search
      keepPreviousData: true,
      retry: 2, // Fewer retries for search
    }
  );
}`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">
              TV-Friendly Components
            </h3>
            <CodePreview
              code={`// components/TVMovieGrid.tsx
import React, { useRef, useEffect } from 'react';
import { useTVMovies } from '../hooks/useTVMovies';

interface TVMovieGridProps {
  filters: TVMovieFilters;
  onMovieSelect: (movie: Movie) => void;
}

export function TVMovieGrid({ filters, onMovieSelect }: TVMovieGridProps) {
  const { data, isLoading, error, refetch } = useTVMovies(filters);
  const gridRef = useRef<HTMLDivElement>(null);

  // TV remote navigation support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const focusedElement = document.activeElement as HTMLElement;

      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'ArrowDown':
          // Handle grid navigation
          event.preventDefault();
          navigateGrid(event.key, focusedElement);
          break;
        case 'Enter':
          // Select movie
          if (focusedElement?.dataset.movieId) {
            const movieId = parseInt(focusedElement.dataset.movieId);
            const movie = data?.results.find(m => m.id === movieId);
            if (movie) onMovieSelect(movie);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [data, onMovieSelect]);

  const navigateGrid = (direction: string, currentElement: HTMLElement) => {
    // TV grid navigation logic
    const cards = Array.from(gridRef.current?.querySelectorAll('[data-movie-id]') || []);
    const currentIndex = cards.indexOf(currentElement);
    const columns = 6; // Grid columns

    let nextIndex = currentIndex;

    switch (direction) {
      case 'ArrowRight':
        nextIndex = Math.min(currentIndex + 1, cards.length - 1);
        break;
      case 'ArrowLeft':
        nextIndex = Math.max(currentIndex - 1, 0);
        break;
      case 'ArrowDown':
        nextIndex = Math.min(currentIndex + columns, cards.length - 1);
        break;
      case 'ArrowUp':
        nextIndex = Math.max(currentIndex - columns, 0);
        break;
    }

    (cards[nextIndex] as HTMLElement)?.focus();
  };

  if (isLoading) {
    return (
      <div className="tv-loading-screen">
        <div className="tv-spinner" />
        <h2>Loading Movies for Smart TV...</h2>
        <p>Optimized for your television experience</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="tv-error-screen">
        <div className="tv-error-icon">📺</div>
        <h2>Connection Error</h2>
        <p>Unable to load movies. Check your internet connection.</p>
        <button
          className="tv-retry-button"
          onClick={() => refetch()}
          autoFocus
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="tv-movie-grid" ref={gridRef}>
      <div className="tv-grid-container">
        {data?.results.map((movie, index) => (
          <div
            key={movie.id}
            data-movie-id={movie.id}
            tabIndex={0}
            className="tv-movie-card"
            onFocus={(e) => e.target.scrollIntoView({ behavior: 'smooth', block: 'center' })}
          >
            <div className="tv-movie-poster">
              {movie.poster_path ? (
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  loading={index < 12 ? 'eager' : 'lazy'} // Eager load first row
                  onError={(e) => {
                    e.currentTarget.src = '/tv-placeholder.jpg';
                  }}
                />
              ) : (
                <div className="tv-no-poster">
                  <span>📽️</span>
                  <p>No Image</p>
                </div>
              )}
            </div>
            <div className="tv-movie-info">
              <h3 className="tv-movie-title">{movie.title}</h3>
              <div className="tv-movie-meta">
                <span className="tv-year">
                  {new Date(movie.release_date).getFullYear()}
                </span>
                <span className="tv-rating">
                  ⭐ {movie.vote_average.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* TV-friendly pagination info */}
      <div className="tv-pagination-info">
        <p>
          Showing {data?.results.length} of {data?.total_results} movies
        </p>
        <p>
          Page {data?.page} of {data?.total_pages}
        </p>
      </div>
    </div>
  );
}`}
              language="tsx"
            />
          </div>
        </div>
      </div>

      {/* Search with Debouncing */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Search with Debouncing
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Implement search functionality with debouncing to reduce API calls.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">
              Search Hook with Debouncing
            </h3>
            <CodePreview
              code={`// hooks/useDebounce.ts
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// hooks/useSearchMovies.ts
import { useDebounce } from './useDebounce';
import { useQuery } from '@smart-tv/query';
import { movieApi } from '../api/movieApi';

export function useSearchMovies(query: string) {
  const debouncedQuery = useDebounce(query, 300); // 300ms delay

  return useQuery(
    ['movies', 'search', debouncedQuery],
    () => movieApi.search(debouncedQuery),
    {
      enabled: debouncedQuery.length > 2,
      staleTime: 30 * 1000, // 30 seconds
      keepPreviousData: true,
    }
  );
}`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Search Component</h3>
            <CodePreview
              code={`// components/MovieSearch.tsx
import React, { useState } from 'react';
import { useSearchMovies } from '../hooks/useSearchMovies';

export function MovieSearch() {
  const [query, setQuery] = useState('');
  const { data, isLoading, error, isFetching } = useSearchMovies(query);

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {isFetching && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin h-4 w-4 border-2 border-blue-500 rounded-full border-t-transparent" />
          </div>
        )}
      </div>

      {/* Search Results */}
      {query.length > 2 && (
        <div>
          {isLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin h-8 w-8 border-2 border-blue-500 rounded-full border-t-transparent mx-auto" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">Searching...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-600">Error: {error.message}</p>
            </div>
          ) : data?.results.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 dark:text-gray-300">No movies found for "{query}"</p>
            </div>
          ) : (
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Found {data?.total_results} results for "{query}"
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {data?.results.map(movie => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Search Suggestions */}
      {query.length > 0 && query.length <= 2 && (
        <p className="text-sm text-gray-500">
          Type at least 3 characters to search
        </p>
      )}
    </div>
  );
}`}
              language="tsx"
            />
          </div>
        </div>
      </div>

      {/* Optimistic Updates */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Optimistic Updates
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Implement optimistic updates for immediate UI feedback during
          mutations.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">Watchlist Management</h3>
            <CodePreview
              code={`// hooks/useWatchlist.ts
import { useMutation, useQuery, useQueryClient } from '@smart-tv/query';

interface WatchlistItem {
  id: number;
  movieId: number;
  movie: Movie;
  addedAt: string;
}

const watchlistApi = {
  getWatchlist: async (): Promise<WatchlistItem[]> => {
    const response = await fetch('/api/watchlist');
    if (!response.ok) throw new Error('Failed to fetch watchlist');
    return response.json();
  },

  addToWatchlist: async (movieId: number): Promise<WatchlistItem> => {
    const response = await fetch('/api/watchlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ movieId }),
    });
    if (!response.ok) throw new Error('Failed to add to watchlist');
    return response.json();
  },

  removeFromWatchlist: async (movieId: number): Promise<void> => {
    const response = await fetch(\`/api/watchlist/\${movieId}\`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to remove from watchlist');
  },
};

export function useWatchlist() {
  return useQuery(['watchlist'], watchlistApi.getWatchlist, {
    staleTime: 5 * 60 * 1000,
  });
}

export function useAddToWatchlist() {
  const queryClient = useQueryClient();

  return useMutation(watchlistApi.addToWatchlist, {
    onMutate: async (movieId) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries(['watchlist']);

      // Snapshot previous value
      const previousWatchlist = queryClient.getQueryData<WatchlistItem[]>(['watchlist']);

      // Optimistically update
      if (previousWatchlist) {
        const optimisticItem: WatchlistItem = {
          id: Date.now(), // Temporary ID
          movieId,
          movie: queryClient.getQueryData(['movie', movieId]) as Movie,
          addedAt: new Date().toISOString(),
        };

        queryClient.setQueryData<WatchlistItem[]>(['watchlist'], [
          ...previousWatchlist,
          optimisticItem,
        ]);
      }

      return { previousWatchlist };
    },

    onError: (error, movieId, context) => {
      // Rollback on error
      if (context?.previousWatchlist) {
        queryClient.setQueryData(['watchlist'], context.previousWatchlist);
      }
    },

    onSettled: () => {
      // Always refetch to ensure consistency
      queryClient.invalidateQueries(['watchlist']);
    },
  });
}

export function useRemoveFromWatchlist() {
  const queryClient = useQueryClient();

  return useMutation(watchlistApi.removeFromWatchlist, {
    onMutate: async (movieId) => {
      await queryClient.cancelQueries(['watchlist']);

      const previousWatchlist = queryClient.getQueryData<WatchlistItem[]>(['watchlist']);

      // Optimistically remove
      if (previousWatchlist) {
        queryClient.setQueryData<WatchlistItem[]>(
          ['watchlist'],
          previousWatchlist.filter(item => item.movieId !== movieId)
        );
      }

      return { previousWatchlist };
    },

    onError: (error, movieId, context) => {
      if (context?.previousWatchlist) {
        queryClient.setQueryData(['watchlist'], context.previousWatchlist);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries(['watchlist']);
    },
  });
}`}
              language="ts"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">
              Watchlist Button Component
            </h3>
            <CodePreview
              code={`// components/WatchlistButton.tsx
import React from 'react';
import { useWatchlist, useAddToWatchlist, useRemoveFromWatchlist } from '../hooks/useWatchlist';

interface WatchlistButtonProps {
  movie: Movie;
  className?: string;
}

export function WatchlistButton({ movie, className = '' }: WatchlistButtonProps) {
  const { data: watchlist } = useWatchlist();
  const addToWatchlist = useAddToWatchlist();
  const removeFromWatchlist = useRemoveFromWatchlist();

  const isInWatchlist = watchlist?.some(item => item.movieId === movie.id) ?? false;
  const isLoading = addToWatchlist.isLoading || removeFromWatchlist.isLoading;

  const handleToggle = () => {
    if (isInWatchlist) {
      removeFromWatchlist.mutate(movie.id);
    } else {
      addToWatchlist.mutate(movie.id);
    }
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isLoading}
      className={{\`
        flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
        \${isInWatchlist
          ? 'bg-red-100 text-red-700 hover:bg-red-200'
          : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
        }
        \${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-sm'}
        \${className}
      \`}}
    >
      {isLoading ? (
        <div className="animate-spin h-4 w-4 border-2 border-current rounded-full border-t-transparent" />
      ) : (
        <span>{isInWatchlist ? '❤️' : '🤍'}</span>
      )}
      <span>
        {isLoading
          ? 'Updating...'
          : isInWatchlist
            ? 'Remove from Watchlist'
            : 'Add to Watchlist'
        }
      </span>
    </button>
  );
}

// Usage in MovieDetail component
function MovieDetail({ movieId }: { movieId: number }) {
  const { data: movie, isLoading } = useMovie(movieId);

  if (isLoading) return <div>Loading...</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={{\`https://image.tmdb.org/t/p/w500\${movie.poster_path}\`}}
          alt={movie.title}
          className="w-full md:w-80 aspect-[2/3] object-cover rounded-lg"
        />

        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p className="text-gray-600 dark:text-gray-300">
              {new Date(movie.release_date).getFullYear()}
            </p>
          </div>

          <p className="text-gray-800">{movie.overview}</p>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <span className="text-yellow-400">★</span>
              <span>{movie.vote_average.toFixed(1)}</span>
              <span className="text-gray-500">({movie.vote_count} votes)</span>
            </div>
          </div>

          <WatchlistButton movie={movie} />
        </div>
      </div>
    </div>
  );
}`}
              language="tsx"
            />
          </div>
        </div>
      </div>

      {/* Background Syncing */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Background Syncing
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Keep data fresh with background syncing and automatic refetching.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">Live Sports Scores</h3>
            <CodePreview
              code={`// hooks/useLiveScores.ts
import { useQuery } from '@smart-tv/query';

interface LiveScore {
  gameId: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: 'live' | 'finished' | 'scheduled';
  lastUpdated: string;
}

export function useLiveScores() {
  return useQuery<LiveScore[]>(
    ['live-scores'],
    async () => {
      const response = await fetch('/api/sports/live-scores');
      if (!response.ok) throw new Error('Failed to fetch live scores');
      return response.json();
    },
    {
      refetchInterval: 30 * 1000,        // Refetch every 30 seconds
      refetchIntervalInBackground: true,  // Continue refetching in background
      staleTime: 0,                      // Always consider stale
      cacheTime: 5 * 60 * 1000,          // Keep in cache for 5 minutes
      refetchOnWindowFocus: true,        // Refetch when user returns
    }
  );
}

// components/LiveScoreboard.tsx
function LiveScoreboard() {
  const { data: scores, isLoading, error, dataUpdatedAt } = useLiveScores();

  if (isLoading) return <div>Loading scores...</div>;
  if (error) return <div>Error loading scores</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Live Scores</h2>
        <p className="text-sm text-gray-500">
          Last updated: {new Date(dataUpdatedAt).toLocaleTimeString()}
        </p>
      </div>

      <div className="grid gap-4">
        {scores?.map(score => (
          <div key={score.gameId} className="border rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <div className="font-medium">{score.homeTeam} vs {score.awayTeam}</div>
                <div className="text-2xl font-bold">
                  {score.homeScore} - {score.awayScore}
                </div>
              </div>
              <div className={{\`
                px-2 py-1 rounded text-sm font-medium
                \${score.status === 'live' ? 'bg-red-100 text-red-800' :
                  score.status === 'finished' ? 'bg-gray-100 text-gray-800' :
                  'bg-blue-100 text-blue-800 dark:text-blue-300'}
              \`}}>
                {score.status.toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`}
              language="tsx"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">
              Sync Status Indicator
            </h3>
            <CodePreview
              code={`// components/SyncStatus.tsx
import React from 'react';
import { useQueryClient } from '@smart-tv/query';

export function SyncStatus() {
  const queryClient = useQueryClient();
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);
  const [isSyncing, setIsSyncing] = React.useState(false);

  React.useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      // Refetch all queries when coming back online
      queryClient.refetchQueries();
    };

    const handleOffline = () => {
      setIsOnline(false);
      // Cancel all queries when going offline
      queryClient.cancelQueries();
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [queryClient]);

  // Monitor query states for sync indication
  React.useEffect(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
      if (event.query.state.isFetching) {
        setIsSyncing(true);
      } else {
        // Check if any queries are still fetching
        const fetchingQueries = queryClient.getQueryCache().getAll().some(
          query => query.state.isFetching
        );
        setIsSyncing(fetchingQueries);
      }
    });

    return unsubscribe;
  }, [queryClient]);

  return (
    <div className="flex items-center space-x-2 text-sm">
      <div className={{\`
        w-2 h-2 rounded-full
        \${!isOnline ? 'bg-red-500' :
          isSyncing ? 'bg-yellow-500 animate-pulse' :
          'bg-green-500'}
      \`}} />
      <span className="text-gray-600 dark:text-gray-300">
        {!isOnline ? 'Offline' :
         isSyncing ? 'Syncing...' :
         'Online'}
      </span>
    </div>
  );
}`}
              language="tsx"
            />
          </div>
        </div>
      </div>

      {/* Error Recovery */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Error Recovery
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Implement robust error handling and recovery mechanisms for better
          user experience.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold">
              Global Error Boundary
            </h3>
            <CodePreview
              code={`// components/ErrorBoundary.tsx
import React from 'react';

interface Props {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; retry: () => void }>;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  retry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error!} retry={this.retry} />;
    }

    return this.props.children;
  }
}

function DefaultErrorFallback({ error, retry }: { error: Error; retry: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center space-y-4">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Something went wrong
        </h1>
        <p className="text-gray-600 max-w-md">
          {error.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={retry}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}`}
              language="tsx"
            />
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Query Error Handler</h3>
            <CodePreview
              code={`// components/QueryErrorHandler.tsx
import React from 'react';
import { useQueryClient } from '@smart-tv/query';

interface QueryErrorProps {
  error: Error;
  queryKey: unknown[];
  onRetry?: () => void;
}

export function QueryErrorHandler({ error, queryKey, onRetry }: QueryErrorProps) {
  const queryClient = useQueryClient();

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      queryClient.refetchQueries(queryKey);
    }
  };

  const handleClearCache = () => {
    queryClient.removeQueries(queryKey);
    handleRetry();
  };

  const isNetworkError = error.message.includes('fetch') || error.message.includes('network');
  const isServerError = error.message.includes('500') || error.message.includes('Internal Server Error');

  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <div className="flex items-start space-x-3">
        <div className="text-red-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        </div>

        <div className="flex-1">
          <h3 className="text-sm font-medium text-red-800">
            {isNetworkError ? 'Network Error' :
             isServerError ? 'Server Error' :
             'Error Loading Data'}
          </h3>

          <p className="mt-1 text-sm text-red-700">
            {isNetworkError ? 'Please check your internet connection and try again.' :
             isServerError ? 'Our servers are experiencing issues. Please try again later.' :
             error.message}
          </p>

          <div className="mt-3 flex space-x-2">
            <button
              onClick={handleRetry}
              className="text-sm bg-red-100 text-red-800 px-3 py-1 rounded hover:bg-red-200"
            >
              Retry
            </button>

            <button
              onClick={handleClearCache}
              className="text-sm text-red-600 px-3 py-1 rounded border border-red-300 hover:bg-red-50"
            >
              Clear Cache & Retry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Usage in components
function MovieListWithErrorHandling() {
  const { data, error, isLoading, refetch } = useDiscoverMovies({
    genre: 28, // Action
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    return (
      <QueryErrorHandler
        error={error}
        queryKey={['movies', 'discover', { genre: 28 }]}
        onRetry={refetch}
      />
    );
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {data?.results.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}`}
              language="tsx"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
