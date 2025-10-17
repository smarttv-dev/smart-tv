import { CodePreview } from '../../../../../components';
import CommandTabs from '../../../../../components/CommandTabs';

const installer = {
  pnpm: 'pnpm add @smart-tv/query',
  npm: 'npm install @smart-tv/query',
  yarn: 'yarn add @smart-tv/query'
};

export default function QueryInstallation() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Installation</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Install the Smart TV Query package and set up your application for efficient data fetching.
                </p>
            </div>

            {/* Package Installation */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Package Installation</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Install the package using your preferred package manager:
                </p>

                <div className="space-y-4">
                    <CommandTabs commands={installer} />
                </div>
            </div>

            {/* Requirements */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Requirements</h2>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 dark:border-blue-500 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">Peer Dependencies</h3>
                    <div className="space-y-2 text-blue-800 dark:text-blue-300">
                        <p>• <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded text-sm text-blue-900 dark:text-blue-100">react ^18.0.0</code> - React 18 or higher</p>
                        <p>• <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded text-sm text-blue-900 dark:text-blue-100">react-dom ^18.0.0</code> - React DOM 18 or higher</p>
                    </div>
                </div>

                <div className="mt-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 dark:border-green-500 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 dark:text-green-200 mb-2">Runtime Requirements</h3>
                    <div className="space-y-2 text-green-800 dark:text-green-300">
                        <p>• <strong>Modern Browser:</strong> Support for ES2020+ features</p>
                        <p>• <strong>Fetch API:</strong> Native fetch support (or polyfill)</p>
                        <p>• <strong>TypeScript:</strong> Optional but recommended (v4.5+)</p>
                    </div>
                </div>
            </div>

            {/* Basic Setup */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Basic Setup</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Set up the QueryClient and wrap your app with the QueryClientProvider:
                </p>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">1. Create Query Client</h3>
                        <CodePreview
                            code={`// src/lib/queryClient.ts
import { QueryClient } from '@smart-tv/query';

export const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 5 * 60 * 1000, // 5 minutes - how long data stays fresh
    cacheTime: 10 * 60 * 1000, // 10 minutes - how long data stays in cache
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    retry: 2, // retry failed requests 2 times
  }
});`}
                            language="ts"
                        />
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">2. Wrap Your App</h3>
                        <CodePreview
                            code={`// src/App.tsx
import React from 'react';
import { QueryClientProvider } from '@smart-tv/query';
import { queryClient } from './lib/queryClient';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}

export default App;`}
                            language="tsx"
                        />
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">3. Use in Components</h3>
                        <CodePreview
                            code={`// src/components/MovieList.tsx
import React from 'react';
import { useQuery } from '@smart-tv/query';

interface Movie {
  id: number;
  title: string;
  genre: string;
}

export function MovieList() {
  const { data, error, status, refetch } = useQuery<Movie[]>(
    ['movies'],
    async () => {
      const response = await fetch('/api/movies');
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      return response.json();
    }
  );

  if (status === 'loading') {
    return <div>Loading movies...</div>;
  }

  if (status === 'error') {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div>
      <h2>Movies</h2>
      <button onClick={() => refetch()}>Refresh</button>
      <ul>
        {data?.map(movie => (
          <li key={movie.id}>
            {movie.title} - {movie.genre}
          </li>
        ))}
      </ul>
    </div>
  );
}`}
                            language="tsx"
                        />
                    </div>
                </div>
            </div>

            {/* XHR Fetcher for Legacy TV Support */}
            {/* Legacy Smart TV Setup */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Legacy Smart TV Setup</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    For older Smart TV platforms that don&apos;t support modern fetch API, use the built-in XHR fetcher for maximum compatibility.
                </p>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Using XHR Fetcher</h3>
                        <CodePreview
                            code={`// src/lib/api.ts
import { xhrFetcher, tvFetch } from '@smart-tv/query';

// Create API functions using XHR fetcher
export const api = {
  // Basic usage with xhrFetcher
  getMovies: async () => {
    const response = await xhrFetcher('/api/movies');
    return response.json();
  },

  // Advanced usage with options for Smart TV optimization
  getMovieDetails: async (id: number) => {
    const response = await tvFetch(\`/api/movies/\${id}\`, {
      method: 'GET',
      timeout: 15000, // 15 second timeout for slow TV networks
      responseType: 'json',
      headers: {
        'Accept': 'application/json',
        'X-Device-Type': 'smart-tv'
      },
      withCredentials: true, // Include cookies for authentication
      onDownloadProgress: (loaded, total) => {
        console.log(\`Loading movie details: \${Math.round((loaded / total) * 100)}%\`);
      }
    });
    return response.json();
  },

  // POST request with JSON body
  createWatchlistItem: async (movieId: number) => {
    const response = await xhrFetcher('/api/watchlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: { movieId },
      timeout: 10000
    });
    return response.json();
  }
};`}
                            language="ts"
                        />
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Smart TV Component Example</h3>
                        <CodePreview
                            code={`// src/components/TVMovieList.tsx
import React from 'react';
import { useQuery } from '@smart-tv/query';
import { api } from '../lib/api';

export function TVMovieList() {
  const { data, error, status, refetch } = useQuery(
    ['tv-movies'],
    api.getMovies,
    {
      staleTime: 10 * 60 * 1000, // 10 minutes - longer for TV
      cacheTime: 30 * 60 * 1000, // 30 minutes cache
      refetchOnWindowFocus: false, // TV apps don't lose focus
      retry: 3, // More retries for unreliable TV networks
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000)
    }
  );

  if (status === 'loading') {
    return (
      <div className="tv-loading flex flex-col items-center justify-center p-8 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <div className="loading-spinner w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-gray-700 dark:text-gray-300">Loading movies for your Smart TV...</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="tv-error p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
        <h3 className="text-lg font-semibold text-red-900 dark:text-red-200 mb-2">Connection Error</h3>
        <p className="text-red-800 dark:text-red-300 mb-4">Unable to load movies. Please check your internet connection.</p>
        <button 
          onClick={() => refetch()}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="tv-movie-grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {data?.map(movie => (
        <div key={movie.id} className="tv-movie-card bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img src={movie.poster} alt={movie.title} className="w-full h-auto rounded-t-lg" />
          <div className="p-3">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate">{movie.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{movie.genre}</p>
          </div>
        </div>
      ))}
    </div>
  );
}`}
                            language="tsx"
                        />
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">XHR Options Reference</h3>
                        <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Available XHR Options:</h4>
                            <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                                <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-gray-900 dark:text-gray-100">method</code> - HTTP method (GET, POST, PUT, DELETE)</li>
                                <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-gray-900 dark:text-gray-100">headers</code> - Request headers object</li>
                                <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-gray-900 dark:text-gray-100">body</code> - Request body (auto-stringified for objects)</li>
                                <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-gray-900 dark:text-gray-100">timeout</code> - Request timeout in milliseconds</li>
                                <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-gray-900 dark:text-gray-100">responseType</code> - Response type (json, text, blob, arraybuffer)</li>
                                <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-gray-900 dark:text-gray-100">withCredentials</code> - Include cookies/credentials</li>
                                <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-gray-900 dark:text-gray-100">onUploadProgress</code> - Upload progress callback</li>
                                <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-gray-900 dark:text-gray-100">onDownloadProgress</code> - Download progress callback</li>
                                <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-gray-900 dark:text-gray-100">signal</code> - AbortSignal for request cancellation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* TypeScript Setup */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">TypeScript Setup</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    For the best TypeScript experience, configure your project with proper types:
                </p>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">tsconfig.json</h3>
                        <CodePreview
                            code={`{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["DOM", "DOM.Iterable", "ES2020"],
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}`}
                            language="json"
                        />
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Global Type Declarations</h3>
                        <CodePreview
                            code={`// src/types/query.d.ts
declare module '@smart-tv/query' {
  interface QueryClient {
    // Add custom methods if extending the client
  }
  
  interface DefaultOptions {
    // Extend default options if needed
  }
}`}
                            language="ts"
                        />
                    </div>
                </div>
            </div>

            {/* Environment Configuration */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Environment Configuration</h2>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Development Setup</h3>
                        <CodePreview
                            code={`// src/lib/queryClient.dev.ts
import { QueryClient } from '@smart-tv/query';

export const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 0, // Always refetch in development
    cacheTime: 5 * 60 * 1000, // 5 minutes cache
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    retry: 1, // Less retries in development
  }
});

// Enable query devtools if available
if (process.env.NODE_ENV === 'development') {
  // Optional: Add development-specific debugging
  console.log('Query client initialized in development mode');
}`}
                            language="ts"
                        />
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Production Setup</h3>
                        <CodePreview
                            code={`// src/lib/queryClient.prod.ts
import { QueryClient } from '@smart-tv/query';

export const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 5 * 60 * 1000, // 5 minutes fresh
    cacheTime: 30 * 60 * 1000, // 30 minutes cache
    refetchOnWindowFocus: false, // Disable on focus for TV
    refetchOnMount: true,
    retry: 3, // More retries in production
  }
});`}
                            language="ts"
                        />
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Smart TV Optimized Setup</h3>
                        <CodePreview
                            code={`// src/lib/queryClient.tv.ts
import { QueryClient } from '@smart-tv/query';

export const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 10 * 60 * 1000, // 10 minutes - longer for TV
    cacheTime: 60 * 60 * 1000, // 1 hour - aggressive caching
    refetchOnWindowFocus: false, // TV apps don't lose focus
    refetchOnMount: false, // Prevent unnecessary refetches
    retry: 2,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  }
});

// TV-specific optimizations
if (typeof window !== 'undefined') {
  // Prevent network requests when device is in standby
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      queryClient.cancelQueries();
    }
  });
}`}
                            language="ts"
                        />
                    </div>
                </div>
            </div>

            {/* Next Steps */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Next Steps</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a
                        href="/components/query/usage"
                        className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-sm dark:hover:shadow-blue-500/10 transition-all duration-200 bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/80"
                    >
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">📚 Usage Guide</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Learn how to configure and use queries effectively</p>
                    </a>
                    <a
                        href="/components/query/hooks"
                        className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-sm dark:hover:shadow-blue-500/10 transition-all duration-200 bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/80"
                    >
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🪝 Hooks Reference</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Complete API reference for all available hooks</p>
                    </a>
                    <a
                        href="/components/query/examples"
                        className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-sm dark:hover:shadow-blue-500/10 transition-all duration-200 bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/80"
                    >
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">💡 Examples</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Real-world examples and common patterns</p>
                    </a>
                    <a
                        href="/components/query/types"
                        className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-sm dark:hover:shadow-blue-500/10 transition-all duration-200 bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/80"
                    >
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🔧 TypeScript Types</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Type definitions and interfaces reference</p>
                    </a>
                </div>
            </div>

            {/* Troubleshooting */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Troubleshooting</h2>
                <div className="space-y-4">
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-500 rounded-lg p-4">
                        <h3 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-3 flex items-center">
                            <span className="mr-2">⚠️</span>
                            Common Issues
                        </h3>
                        <ul className="text-yellow-800 dark:text-yellow-300 text-sm space-y-2">
                            <li className="flex items-start">
                                <span className="font-bold mr-2 mt-0.5">•</span>
                                <div>
                                    <strong className="text-yellow-900 dark:text-yellow-200">Fetch not defined:</strong>
                                    <span className="ml-1">Ensure your environment supports the Fetch API or use the built-in XHR fetcher</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2 mt-0.5">•</span>
                                <div>
                                    <strong className="text-yellow-900 dark:text-yellow-200">React version mismatch:</strong>
                                    <span className="ml-1">Make sure you&apos;re using React 18+ for full compatibility</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2 mt-0.5">•</span>
                                <div>
                                    <strong className="text-yellow-900 dark:text-yellow-200">TypeScript errors:</strong>
                                    <span className="ml-1">Update to TypeScript 4.5+ for best compatibility and type safety</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2 mt-0.5">•</span>
                                <div>
                                    <strong className="text-yellow-900 dark:text-yellow-200">Bundle size:</strong>
                                    <span className="ml-1">Use tree-shaking with modern bundlers (Webpack 5+, Vite) to reduce bundle size</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500 rounded-lg p-4">
                        <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-3 flex items-center">
                            <span className="mr-2">💡</span>
                            Pro Tips
                        </h3>
                        <ul className="text-blue-800 dark:text-blue-300 text-sm space-y-2">
                            <li className="flex items-start">
                                <span className="font-bold mr-2 mt-0.5">•</span>
                                <div>Use the <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded text-blue-900 dark:text-blue-100">xhrFetcher</code> for older Smart TV platforms</div>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2 mt-0.5">•</span>
                                <div>Configure longer <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded text-blue-900 dark:text-blue-100">staleTime</code> and <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded text-blue-900 dark:text-blue-100">cacheTime</code> for TV apps</div>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold mr-2 mt-0.5">•</span>
                                <div>Enable request retries with exponential backoff for unreliable TV networks</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
