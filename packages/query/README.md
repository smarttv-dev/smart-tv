# @smart-tv/query

A lightweight, dependency-free data fetching and caching library optimized for Smart TV applications. Built with performance and simplicity in mind, it provides powerful features without the bloat of larger libraries.

## Features

- 🚀 **Lightweight** - Zero dependencies, tree-shakeable, optimized for Smart TV performance
- 💾 **Smart Caching** - Configurable staleTime and cacheTime with automatic cache management
- 🔄 **Request Deduplication** - Automatic deduplication of concurrent identical requests
- ⚡ **React Hooks** - `useQuery`, `useMutation`, `useInfiniteQuery` for seamless integration
- 🔌 **XHR & Fetch Support** - Built-in XHR fetcher with progress tracking and abort support
- ♾️ **Infinite Queries** - Built-in support for paginated and infinite scroll data
- 🎯 **Window Focus Refetch** - Automatically refetch stale data when window regains focus
- 🔧 **TypeScript First** - Full TypeScript support with excellent type inference
- 🪶 **Small Bundle Size** - Minimal footprint for faster load times on TV devices

## Installation

Install the package using your preferred package manager:

```bash
# npm
npm install @smart-tv/query

# pnpm
pnpm add @smart-tv/query

# yarn
yarn add @smart-tv/query
```

## Quick Start

### Basic Setup

Wrap your app with `QueryClientProvider` and create a `QueryClient` instance:

```tsx
import { QueryClient, QueryClientProvider } from '@smart-tv/query'

const queryClient = new QueryClient({
  staleTime: 1000 * 60 * 5,  // 5 minutes
  cacheTime: 1000 * 60 * 10, // 10 minutes
  retry: 3,                   // Retry failed requests 3 times
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourApp />
    </QueryClientProvider>
  )
}
```

### Basic Query

Use `useQuery` to fetch and cache data:

```tsx
import { useQuery } from '@smart-tv/query'

function Movies() {
  const { data, error, status, refetch } = useQuery(
    ['movies'],
    () => fetch('/api/movies').then(res => res.json())
  )

  if (status === 'loading') return <div>Loading...</div>
  if (status === 'error') return <div>Error: {error.message}</div>

  return (
    <div>
      {data.map(movie => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  )
}
```

## Core Concepts

### QueryClient

The `QueryClient` is the core of the library. It manages cache, handles deduplication, and coordinates all queries.

```tsx
import { QueryClient } from '@smart-tv/query'

const queryClient = new QueryClient({
  staleTime: 1000 * 60 * 5,     // Data is fresh for 5 minutes
  cacheTime: 1000 * 60 * 10,    // Cache persists for 10 minutes after unused
  retry: 3,                      // Retry failed requests 3 times
  enabled: true,                 // Enable queries by default
  keepPreviousData: false,       // Whether to keep previous data during refetch
})
```

**Configuration Options:**

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `staleTime` | number | 0 | Time in ms before data is considered stale |
| `cacheTime` | number | 5min | Time in ms before unused cache is garbage collected |
| `retry` | number | 0 | Number of retry attempts for failed requests |
| `enabled` | boolean | true | Enable/disable queries globally |
| `keepPreviousData` | boolean | false | Keep previous data during refetch |
| `refetchOnWindowFocus` | boolean | false | Refetch when window regains focus |
| `refetchOnMount` | boolean | true | Refetch on component mount if stale |

## API Reference

### useQuery

Fetch and cache data with automatic cache management.

```tsx
const {
  data,
  error,
  status,
  refetch
} = useQuery(queryKey, queryFn, options)
```

**Parameters:**

- `queryKey`: `string | readonly unknown[]` - Unique identifier for the query
- `queryFn`: `() => Promise<T>` - Function that returns a promise with data
- `options`: `QueryOptions<T>` - Optional configuration (overrides client defaults)

**Returns:**

- `data`: `T | undefined` - The fetched data
- `error`: `unknown | undefined` - Error if the query failed
- `status`: `'idle' | 'loading' | 'success' | 'error'` - Current query status
- `refetch`: `() => Promise<T>` - Function to manually refetch data

**Example with dynamic parameters:**

```tsx
function MovieDetails({ movieId }) {
  const { data, status } = useQuery(
    ['movie', movieId],
    () => fetch(`/api/movies/${movieId}`).then(res => res.json()),
    {
      staleTime: 1000 * 60 * 10, // 10 minutes
      enabled: !!movieId,         // Only fetch if movieId exists
    }
  )

  if (status === 'loading') return <Spinner />
  return <div>{data.title}</div>
}
```

**Example with data transformation:**

```tsx
const { data } = useQuery(
  ['movies'],
  () => fetch('/api/movies').then(res => res.json()),
  {
    select: (data) => data.filter(movie => movie.rating > 4),
  }
)
```

### useMutation

Execute mutations (POST, PUT, DELETE) with success/error callbacks.

```tsx
const {
  mutate,
  data,
  error,
  status
} = useMutation(mutationFn, options)
```

**Parameters:**

- `mutationFn`: `(variables: TVariables) => Promise<TData>` - Function that performs the mutation
- `options`: `MutationOptions<TData, TVariables>` - Optional callbacks

**Returns:**

- `mutate`: `(variables: TVariables) => Promise<TData>` - Function to trigger the mutation
- `data`: `TData | undefined` - Response data from the mutation
- `error`: `unknown | undefined` - Error if mutation failed
- `status`: `'idle' | 'loading' | 'success' | 'error'` - Current mutation status

**Example:**

```tsx
import { useMutation } from '@smart-tv/query'

function AddMovieForm() {
  const { mutate, status } = useMutation(
    (newMovie) => fetch('/api/movies', {
      method: 'POST',
      body: JSON.stringify(newMovie),
      headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json()),
    {
      onSuccess: (data) => {
        console.log('Movie added:', data)
        // Invalidate and refetch movies list
        queryClient.invalidateQueries(['movies'], { refetch: true })
      },
      onError: (error) => {
        console.error('Failed to add movie:', error)
      },
    }
  )

  const handleSubmit = (movie) => {
    mutate(movie)
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Adding...' : 'Add Movie'}
      </button>
    </form>
  )
}
```

### useInfiniteQuery

Fetch paginated data with infinite scroll support.

```tsx
const {
  data,
  isFetching,
  fetchNext,
  hasNextPage
} = useInfiniteQuery(queryKey, fetchPageFn, options)
```

**Parameters:**

- `queryKey`: `QueryKey` - Unique identifier for the infinite query
- `fetchPageFn`: `(cursor?: string | number | null) => Promise<TPage>` - Function to fetch each page
- `options`: `InfiniteQueryOptions<TItem>` - Configuration options

**Returns:**

- `data`: `TItem[]` - Flattened array of all items from all pages
- `isFetching`: `boolean` - Whether currently fetching a page
- `fetchNext`: `() => Promise<void>` - Function to fetch the next page
- `hasNextPage`: `boolean` - Whether there are more pages to fetch

**Example:**

```tsx
import { useInfiniteQuery } from '@smart-tv/query'

function MovieList() {
  const { data, isFetching, fetchNext, hasNextPage } = useInfiniteQuery(
    ['movies', 'infinite'],
    async (cursor) => {
      const res = await fetch(`/api/movies?cursor=${cursor || ''}`)
      return res.json()
    },
    {
      mapPage: (raw) => ({
        items: raw.results,
        nextCursor: raw.nextCursor,
      }),
      getHasNext: (pages) => {
        const lastPage = pages[pages.length - 1]
        return !!lastPage?.nextCursor
      },
    }
  )

  return (
    <div>
      {data.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      
      {hasNextPage && (
        <button onClick={fetchNext} disabled={isFetching}>
          {isFetching ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  )
}
```

### QueryClient Methods

#### invalidateQueries

Invalidate queries to mark them as stale and optionally refetch.

```tsx
// Invalidate and refetch a specific query
queryClient.invalidateQueries(['movies'], { refetch: true })

// Invalidate without refetching
queryClient.invalidateQueries(['movies'])

// Invalidate all queries
queryClient.invalidateQueries()
```

#### getQueryData

Get cached data for a specific query.

```tsx
const cachedMovies = queryClient.getQueryData(['movies'])
```

#### setQueryData

Manually update cached data.

```tsx
// Direct update
queryClient.setQueryData(['movies'], newMoviesArray)

// Update with function
queryClient.setQueryData(['movies'], (oldData) => {
  return [...oldData, newMovie]
})
```

#### fetchQuery

Imperatively fetch a query (useful outside of React components).

```tsx
const movies = await queryClient.fetchQuery(
  ['movies'],
  () => fetch('/api/movies').then(res => res.json()),
  { staleTime: 1000 * 60 }
)
```

## Advanced Features

### Custom Fetcher with XHR

The library includes a powerful XHR-based fetcher with progress tracking and timeout support:

```tsx
import { xhrFetcher, tvFetch } from '@smart-tv/query'

// Basic usage
const { data } = useQuery(
  ['movie', id],
  () => xhrFetcher(`/api/movies/${id}`, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer token' },
  })
)

// With progress tracking
const { mutate } = useMutation(
  (file) => xhrFetcher('/upload', {
    method: 'POST',
    body: file,
    timeout: 30000, // 30 seconds
    onUploadProgress: (sent, total) => {
      console.log(`Uploaded ${sent} / ${total}`)
    },
  })
)

// With abort signal
const controller = new AbortController()
xhrFetcher('/api/data', { signal: controller.signal })
// Later: controller.abort()
```

**XHR Options:**

- `method`: HTTP method (GET, POST, PUT, DELETE, etc.)
- `headers`: Request headers
- `body`: Request body (auto-stringified for objects)
- `responseType`: Response type ('json', 'text', 'blob', 'arraybuffer')
- `timeout`: Request timeout in milliseconds
- `withCredentials`: Include cookies in cross-origin requests
- `onUploadProgress`: Upload progress callback
- `onDownloadProgress`: Download progress callback
- `signal`: AbortSignal for request cancellation

### Window Focus Refetching

Automatically refetch stale data when the TV app regains focus:

```tsx
const queryClient = new QueryClient({
  refetchOnWindowFocus: true,
})

// Or per-query
const { data } = useQuery(['movies'], fetchMovies, {
  refetchOnWindowFocus: true,
  staleTime: 1000 * 60 * 5, // Only refetch if older than 5 minutes
})
```

### Optimistic Updates

Update UI optimistically before mutation completes:

```tsx
const { mutate } = useMutation(
  (updatedMovie) => fetch(`/api/movies/${updatedMovie.id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedMovie),
  }),
  {
    onSuccess: (newData) => {
      // Update cache with server response
      queryClient.setQueryData(['movie', newData.id], newData)
      queryClient.invalidateQueries(['movies'])
    },
  }
)

// Optimistic update before mutation
const handleUpdate = (movie) => {
  // Update cache immediately
  queryClient.setQueryData(['movie', movie.id], movie)
  
  // Then trigger mutation
  mutate(movie)
}
```

### Dependent Queries

Execute queries that depend on other queries:

```tsx
// First query
const { data: user } = useQuery(['user'], fetchUser)

// Second query depends on first
const { data: posts } = useQuery(
  ['posts', user?.id],
  () => fetchUserPosts(user.id),
  {
    enabled: !!user?.id, // Only run when user.id exists
  }
)
```

### Parallel Queries

Execute multiple queries in parallel:

```tsx
function Dashboard() {
  const movies = useQuery(['movies'], fetchMovies)
  const shows = useQuery(['shows'], fetchShows)
  const trending = useQuery(['trending'], fetchTrending)

  if (movies.status === 'loading' || shows.status === 'loading') {
    return <Spinner />
  }

  return (
    <div>
      <MovieSection data={movies.data} />
      <ShowSection data={shows.data} />
      <TrendingSection data={trending.data} />
    </div>
  )
}
```

## Complete Example

Here's a comprehensive example showing various features:

```tsx
import { QueryClient, QueryClientProvider, useQuery, useMutation } from '@smart-tv/query'

// Create client
const queryClient = new QueryClient({
  staleTime: 1000 * 60 * 5,
  cacheTime: 1000 * 60 * 10,
  retry: 3,
  refetchOnWindowFocus: true,
})

// API functions
const fetchMovies = () => fetch('/api/movies').then(res => res.json())
const fetchMovie = (id) => fetch(`/api/movies/${id}`).then(res => res.json())
const addToWatchlist = (movieId) =>
  fetch('/api/watchlist', {
    method: 'POST',
    body: JSON.stringify({ movieId }),
    headers: { 'Content-Type': 'application/json' },
  }).then(res => res.json())

// Components
function MovieList() {
  const { data, status, refetch } = useQuery(['movies'], fetchMovies, {
    select: (data) => data.filter(m => m.rating > 3),
  })

  if (status === 'loading') return <Spinner />
  if (status === 'error') return <Error />

  return (
    <div>
      <button onClick={refetch}>Refresh</button>
      {data.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

function MovieDetails({ movieId }) {
  const { data } = useQuery(
    ['movie', movieId],
    () => fetchMovie(movieId),
    { enabled: !!movieId }
  )

  const { mutate, status } = useMutation(addToWatchlist, {
    onSuccess: () => {
      queryClient.invalidateQueries(['watchlist'])
      alert('Added to watchlist!')
    },
  })

  return (
    <div>
      <h1>{data?.title}</h1>
      <button
        onClick={() => mutate(movieId)}
        disabled={status === 'loading'}
      >
        Add to Watchlist
      </button>
    </div>
  )
}

// App
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieList />
    </QueryClientProvider>
  )
}
```

## TypeScript Support

Full TypeScript support with excellent type inference:

```tsx
import { useQuery, QueryClient, QueryOptions } from '@smart-tv/query'

interface Movie {
  id: number
  title: string
  rating: number
}

// Type-safe query
const { data } = useQuery<Movie[]>(
  ['movies'],
  () => fetch('/api/movies').then(res => res.json())
)
// data is typed as Movie[] | undefined

// Type-safe mutation
const { mutate } = useMutation<Movie, { title: string }>(
  (newMovie) => fetch('/api/movies', {
    method: 'POST',
    body: JSON.stringify(newMovie),
  }).then(res => res.json())
)
// mutate expects { title: string }
```

## Documentation

For comprehensive documentation, interactive examples, and best practices, visit:

**📚 [https://smart-tv-docs.vercel.app/components/query](https://smart-tv-docs.vercel.app/components/query)**

## Performance Tips for Smart TV

1. **Use appropriate staleTime**: Set longer staleTime (5-10 minutes) for data that doesn't change frequently
2. **Implement pagination**: Use `useInfiniteQuery` for large datasets
3. **Enable window focus refetch**: Ensure users see fresh data when returning to the app
4. **Optimize cache size**: Set reasonable cacheTime to prevent memory issues on low-end devices
5. **Use XHR fetcher**: Better control over requests with timeout and abort support

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Smart TV browsers (Tizen 4.0+, webOS 4.0+)

## Development

### Building the package

```bash
# Install dependencies
pnpm install

# Build
pnpm --filter=@smart-tv/query build

# Development mode
pnpm --filter=@smart-tv/query dev
```

## Contributing

Contributions are welcome! Please follow the monorepo conventions and add tests for new features.

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for more details.

## Related Packages

- **[@smart-tv/ui](../ui)** - React component library for Smart TV apps
- **[@smart-tv/player](../player)** - Video player with focus support
- **[create-smart-tv](../create-smart-tv)** - CLI to scaffold Smart TV projects

## License

MIT License - see [LICENSE](../../LICENSE) for details.

## Support

- 📖 [Documentation](https://smart-tv-docs.vercel.app)
- 🐛 [Report Issues](https://github.com/smarttv-dev/smart-tv/issues)
- 💬 [Discussions](https://github.com/smarttv-dev/smart-tv/discussions)

---

Made with ❤️ for Smart TV developers
