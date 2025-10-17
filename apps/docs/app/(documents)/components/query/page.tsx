import Link from 'next/link';
import CodePreview from '../../../../components/CodePreview';
import CommandTabs from '../../../../components/CommandTabs';

export default function QueryOverview() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-cyan-950/30 dark:via-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 md:p-12 border border-cyan-200 dark:border-cyan-800">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 dark:bg-cyan-900/50 rounded-full text-sm font-medium text-cyan-700 dark:text-cyan-300 mb-6">
            <span className="text-lg">🔄</span>
            Data Fetching
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Smart TV Query
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl leading-relaxed">
            Tiny, dependency-free query client with{" "}
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">smart caching</span>,{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">request deduplication</span>, and{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">legacy TV support</span>.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 dark:bg-cyan-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Features Grid */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-xl">
            ✨
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Key Features</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-2">Lightweight & Fast</h3>
            <p className="text-sm text-blue-800 dark:text-blue-300">Zero dependencies, tiny bundle size optimized for TV apps</p>
          </div>
          <div className="group p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 border border-green-200 dark:border-green-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="font-bold text-green-900 dark:text-green-200 mb-2">Smart Caching</h3>
            <p className="text-sm text-green-800 dark:text-green-300">Configurable stale time and cache time for optimal performance</p>
          </div>
          <div className="group p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3">🔀</div>
            <h3 className="font-bold text-purple-900 dark:text-purple-200 mb-2">Request Deduplication</h3>
            <p className="text-sm text-purple-800 dark:text-purple-300">Automatic deduplication of identical requests</p>
          </div>
          <div className="group p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 border border-orange-200 dark:border-orange-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3">📺</div>
            <h3 className="font-bold text-orange-900 dark:text-orange-200 mb-2">Legacy TV Support</h3>
            <p className="text-sm text-orange-800 dark:text-orange-300">XHR-based fetcher for maximum compatibility</p>
          </div>
          <div className="group p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/30 border border-red-200 dark:border-red-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3">🪝</div>
            <h3 className="font-bold text-red-900 dark:text-red-200 mb-2">React Hooks</h3>
            <p className="text-sm text-red-800 dark:text-red-300">useQuery, useMutation, and useInfiniteQuery hooks</p>
          </div>
          <div className="group p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/30 dark:to-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3">🌳</div>
            <h3 className="font-bold text-indigo-900 dark:text-indigo-200 mb-2">Tree Shakeable</h3>
            <p className="text-sm text-indigo-800 dark:text-indigo-300">Import only what you need for minimal bundle size</p>
          </div>
        </div>
      </div>

      {/* Installation */}
      <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-xl">
            📦
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Installation</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Install the Smart TV Query package using your preferred package manager:
        </p>
        <CommandTabs
          commands={{
            npm: 'npm install @smart-tv/query',
            pnpm: 'pnpm add @smart-tv/query',
            yarn: 'yarn add @smart-tv/query',
            bun: 'bun add @smart-tv/query'
          }}
        />
      </div>

      {/* Quick Start */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl p-6 md:p-8 border border-green-200 dark:border-green-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white text-xl">
            🚀
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Quick Start</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-200 mb-6 text-lg">
          Get started with Smart TV Query in just a few steps:
        </p>
        <CodePreview 
          code={`import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@smart-tv/query';

// Create a query client
const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  }
});

// Wrap your app with the provider
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Movies />
    </QueryClientProvider>
  );
}

// Use the query hook in your components
function Movies() {
  const { data, error, status, refetch } = useQuery(
    ['movies'],
    () => fetch('/api/movies').then(r => r.json())
  );

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'error') return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {data?.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      <button onClick={() => refetch()}>Refresh</button>
    </div>
  );
}`}
          language="tsx"
        />
      </div>

      {/* Legacy TV Support */}
      <div className="relative bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-yellow-950/30 border-l-4 border-amber-500 dark:border-amber-400 rounded-xl p-6 md:p-8 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center text-2xl">
            📺
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-3">
              Legacy Smart TV Support
            </h2>
            <p className="text-amber-900 dark:text-amber-100 mb-4 leading-relaxed">
              For maximum compatibility with older Smart TV platforms that don&apos;t support modern fetch API, 
              Smart TV Query includes a powerful XHR-based fetcher.
            </p>
            <div className="bg-amber-100/50 dark:bg-amber-900/30 rounded-lg p-4 border border-amber-200 dark:border-amber-800 mb-4">
              <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-200 mb-2">
                Why XHR for Smart TVs?
              </h3>
              <ul className="text-amber-800 dark:text-amber-300 text-sm space-y-1">
                <li>• Many older Smart TV platforms (2015-2018) don&apos;t support fetch API</li>
                <li>• XMLHttpRequest is universally supported across all TV browsers</li>
                <li>• Provides additional features like upload/download progress and timeout control</li>
                <li>• Better error handling for unreliable TV network connections</li>
              </ul>
            </div>
            <CodePreview 
            code={`import { QueryClient, QueryClientProvider, useQuery, xhrFetcher, tvFetch } from '@smart-tv/query';

// Use xhrFetcher directly in query functions
function Movies() {
  const { data, error, status } = useQuery(
    ['movies'],
    () => xhrFetcher('/api/movies').then(response => response.json())
  );

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'error') return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Movies ({data.length})</h1>
      <ul>
        {data?.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

// Advanced XHR options for Smart TV optimization
const fetchMovieWithProgress = (id) => {
  return xhrFetcher(\`/api/movies/\${id}\`, {
    method: 'GET',
    timeout: 15000, // 15 second timeout for slow TV networks
    responseType: 'json',
    headers: {
      'Accept': 'application/json',
      'X-Device-Type': 'smart-tv'
    },
    onDownloadProgress: (loaded, total) => {
      console.log(\`Download progress: \${loaded}/\${total}\`);
    }
  });
};

// tvFetch is an alias for xhrFetcher
function StreamingContent() {
  const { data } = useQuery(
    ['streaming-content'],
    () => tvFetch('/api/streaming/content', {
      timeout: 20000, // Longer timeout for content metadata
      withCredentials: true, // Include credentials for authenticated endpoints
    }).then(response => response.json())
  );

  return <div>{/* render streaming content */}</div>;
}`}
            language="tsx"
            />
          </div>
        </div>
      </div>

      {/* Core API */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-xl">
            🧩
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Core API
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Essential hooks and utilities
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group p-6 bg-white dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              QueryClient
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
              The central client that manages cache, configurations, and query lifecycle.
            </p>
            <code className="text-xs bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-md font-mono block">
              {`new QueryClient({ staleTime: 5min })`}
            </code>
          </div>
          <div className="group p-6 bg-white dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              useQuery
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
              Hook for fetching and caching data with automatic background updates.
            </p>
            <code className="text-xs bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-md font-mono block">
              {`useQuery(['key'], fetcher)`}
            </code>
          </div>
          <div className="group p-6 bg-white dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              useMutation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
              Hook for creating, updating, or deleting data with optimistic updates.
            </p>
            <code className="text-xs bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-md font-mono block">
              {`useMutation(mutationFn, options)`}
            </code>
          </div>
          <div className="group p-6 bg-white dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              useInfiniteQuery
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
              Hook for implementing infinite scrolling and pagination patterns.
            </p>
            <code className="text-xs bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-md font-mono block">
              {`useInfiniteQuery(['key'], fetcher)`}
            </code>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-xl">
            📊
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Why Smart TV Query?</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-750">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">Feature</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">Smart TV Query</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">React Query</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">SWR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">Bundle Size</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400 font-semibold">~5KB</td>
                <td className="px-4 py-3 text-orange-600 dark:text-orange-400">~45KB</td>
                <td className="px-4 py-3 text-yellow-600 dark:text-yellow-400">~25KB</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">Dependencies</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400 font-semibold">Zero</td>
                <td className="px-4 py-3 text-red-600 dark:text-red-400">Multiple</td>
                <td className="px-4 py-3 text-yellow-600 dark:text-yellow-400">Few</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">TV Optimized</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400 font-semibold">✓ Yes</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">○ No</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">○ No</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">Legacy TV Support</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400 font-semibold">✓ XHR Fetcher</td>
                <td className="px-4 py-3 text-red-600 dark:text-red-400">✗ Fetch only</td>
                <td className="px-4 py-3 text-red-600 dark:text-red-400">✗ Fetch only</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">Progress Tracking</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400 font-semibold">✓ Upload/Download</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">○ Limited</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">○ Limited</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">TypeScript</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400 font-semibold">✓ Built-in</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">✓ Built-in</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">✓ Built-in</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">Caching</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400 font-semibold">✓ Simple</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">✓ Advanced</td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">✓ Simple</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Documentation Navigation */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg flex items-center justify-center text-white text-xl">
            📚
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Documentation
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Explore detailed guides and API references
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link 
            href="/components/query/installation" 
            className="group block p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">📦</span>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                Installation
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Package installation and setup instructions
            </p>
          </Link>
          <Link 
            href="/components/query/usage" 
            className="group block p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">⚙️</span>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                Usage & Configuration
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Basic and advanced query configurations
            </p>
          </Link>
          <Link 
            href="/components/query/hooks" 
            className="group block p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🪝</span>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                Hooks
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              useQuery, useMutation, and useInfiniteQuery
            </p>
          </Link>
          <Link 
            href="/components/query/examples" 
            className="group block p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">💡</span>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                Examples
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Real-world examples and use cases
            </p>
          </Link>
          <Link 
            href="/components/query/types" 
            className="group block p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">📘</span>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                Types
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              TypeScript type definitions and interfaces
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
