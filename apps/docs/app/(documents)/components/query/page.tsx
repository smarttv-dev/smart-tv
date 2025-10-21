import Link from "next/link";
import CodePreview from "@/components/CodePreview";
import CommandTabs from "@/components/CommandTabs";

export default function QueryOverview() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-8 md:p-12 dark:border-cyan-800 dark:from-cyan-950/30 dark:via-blue-950/30 dark:to-indigo-950/30">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300">
            <span className="text-lg">🔄</span>
            Data Fetching
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            Smart TV Query
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-gray-700 dark:text-gray-200">
            Tiny, dependency-free query client with{" "}
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">
              smart caching
            </span>
            ,{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              request deduplication
            </span>
            , and{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              legacy TV support
            </span>
            .
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-600/10"></div>
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-600/10"></div>
      </div>

      {/* Features Grid */}
      <div>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-xl text-white">
            ✨
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Key Features
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-blue-800 dark:from-blue-950/30 dark:to-blue-900/30">
            <div className="mb-3 text-3xl">🚀</div>
            <h3 className="mb-2 font-bold text-blue-900 dark:text-blue-200">
              Lightweight & Fast
            </h3>
            <p className="text-sm text-blue-800 dark:text-blue-300">
              Zero dependencies, tiny bundle size optimized for TV apps
            </p>
          </div>
          <div className="group rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-green-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-green-800 dark:from-green-950/30 dark:to-green-900/30">
            <div className="mb-3 text-3xl">🔄</div>
            <h3 className="mb-2 font-bold text-green-900 dark:text-green-200">
              Smart Caching
            </h3>
            <p className="text-sm text-green-800 dark:text-green-300">
              Configurable stale time and cache time for optimal performance
            </p>
          </div>
          <div className="group rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-purple-800 dark:from-purple-950/30 dark:to-purple-900/30">
            <div className="mb-3 text-3xl">🔀</div>
            <h3 className="mb-2 font-bold text-purple-900 dark:text-purple-200">
              Request Deduplication
            </h3>
            <p className="text-sm text-purple-800 dark:text-purple-300">
              Automatic deduplication of identical requests
            </p>
          </div>
          <div className="group rounded-xl border border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-orange-800 dark:from-orange-950/30 dark:to-orange-900/30">
            <div className="mb-3 text-3xl">📺</div>
            <h3 className="mb-2 font-bold text-orange-900 dark:text-orange-200">
              Legacy TV Support
            </h3>
            <p className="text-sm text-orange-800 dark:text-orange-300">
              XHR-based fetcher for maximum compatibility
            </p>
          </div>
          <div className="group rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-red-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-red-800 dark:from-red-950/30 dark:to-red-900/30">
            <div className="mb-3 text-3xl">🪝</div>
            <h3 className="mb-2 font-bold text-red-900 dark:text-red-200">
              React Hooks
            </h3>
            <p className="text-sm text-red-800 dark:text-red-300">
              useQuery, useMutation, and useInfiniteQuery hooks
            </p>
          </div>
          <div className="group rounded-xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-indigo-800 dark:from-indigo-950/30 dark:to-indigo-900/30">
            <div className="mb-3 text-3xl">🌳</div>
            <h3 className="mb-2 font-bold text-indigo-900 dark:text-indigo-200">
              Tree Shakeable
            </h3>
            <p className="text-sm text-indigo-800 dark:text-indigo-300">
              Import only what you need for minimal bundle size
            </p>
          </div>
        </div>
      </div>

      {/* Installation */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8 dark:border-gray-700 dark:bg-gray-800/50">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-xl text-white">
            📦
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Installation
          </h2>
        </div>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Install the Smart TV Query package using your preferred package
          manager:
        </p>
        <CommandTabs
          commands={{
            npm: "npm install @smart-tv/query",
            pnpm: "pnpm add @smart-tv/query",
            yarn: "yarn add @smart-tv/query",
            bun: "bun add @smart-tv/query",
          }}
        />
      </div>

      {/* Quick Start */}
      <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-6 md:p-8 dark:border-green-800 dark:from-green-950/20 dark:to-emerald-950/20">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 text-xl text-white">
            🚀
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Quick Start
          </h2>
        </div>
        <p className="mb-6 text-lg text-gray-700 dark:text-gray-200">
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
      <div className="relative rounded-xl border-l-4 border-amber-500 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 p-6 shadow-lg md:p-8 dark:border-amber-400 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-yellow-950/30">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-amber-100 text-2xl dark:bg-amber-900/50">
            📺
          </div>
          <div className="flex-1">
            <h2 className="mb-3 text-2xl font-bold text-amber-900 dark:text-amber-100">
              Legacy Smart TV Support
            </h2>
            <p className="mb-4 leading-relaxed text-amber-900 dark:text-amber-100">
              For maximum compatibility with older Smart TV platforms that
              don&apos;t support modern fetch API, Smart TV Query includes a
              powerful XHR-based fetcher.
            </p>
            <div className="mb-4 rounded-lg border border-amber-200 bg-amber-100/50 p-4 dark:border-amber-800 dark:bg-amber-900/30">
              <h3 className="mb-2 text-lg font-semibold text-amber-900 dark:text-amber-200">
                Why XHR for Smart TVs?
              </h3>
              <ul className="space-y-1 text-sm text-amber-800 dark:text-amber-300">
                <li>
                  • Many older Smart TV platforms (2015-2018) don&apos;t support
                  fetch API
                </li>
                <li>
                  • XMLHttpRequest is universally supported across all TV
                  browsers
                </li>
                <li>
                  • Provides additional features like upload/download progress
                  and timeout control
                </li>
                <li>
                  • Better error handling for unreliable TV network connections
                </li>
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
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-xl text-white">
            🧩
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Core API
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Essential hooks and utilities
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="group rounded-xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-cyan-400">
            <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-cyan-600 dark:text-gray-100 dark:group-hover:text-cyan-400">
              QueryClient
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              The central client that manages cache, configurations, and query
              lifecycle.
            </p>
            <code className="block rounded-md bg-gray-100 px-3 py-1.5 font-mono text-xs dark:bg-gray-800">
              {`new QueryClient({ staleTime: 5min })`}
            </code>
          </div>
          <div className="group rounded-xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-cyan-400">
            <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-cyan-600 dark:text-gray-100 dark:group-hover:text-cyan-400">
              useQuery
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Hook for fetching and caching data with automatic background
              updates.
            </p>
            <code className="block rounded-md bg-gray-100 px-3 py-1.5 font-mono text-xs dark:bg-gray-800">
              {`useQuery(['key'], fetcher)`}
            </code>
          </div>
          <div className="group rounded-xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-cyan-400">
            <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-cyan-600 dark:text-gray-100 dark:group-hover:text-cyan-400">
              useMutation
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Hook for creating, updating, or deleting data with optimistic
              updates.
            </p>
            <code className="block rounded-md bg-gray-100 px-3 py-1.5 font-mono text-xs dark:bg-gray-800">
              {`useMutation(mutationFn, options)`}
            </code>
          </div>
          <div className="group rounded-xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-cyan-400">
            <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-cyan-600 dark:text-gray-100 dark:group-hover:text-cyan-400">
              useInfiniteQuery
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Hook for implementing infinite scrolling and pagination patterns.
            </p>
            <code className="block rounded-md bg-gray-100 px-3 py-1.5 font-mono text-xs dark:bg-gray-800">
              {`useInfiniteQuery(['key'], fetcher)`}
            </code>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8 dark:border-gray-700 dark:bg-gray-800/50">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-teal-600 text-xl text-white">
            📊
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Why Smart TV Query?
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full rounded-lg border border-gray-200 dark:border-gray-700">
            <thead className="dark:to-gray-750 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">
                  Feature
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">
                  Smart TV Query
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">
                  React Query
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">
                  SWR
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                  Bundle Size
                </td>
                <td className="px-4 py-3 font-semibold text-green-600 dark:text-green-400">
                  ~5KB
                </td>
                <td className="px-4 py-3 text-orange-600 dark:text-orange-400">
                  ~45KB
                </td>
                <td className="px-4 py-3 text-yellow-600 dark:text-yellow-400">
                  ~25KB
                </td>
              </tr>
              <tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                  Dependencies
                </td>
                <td className="px-4 py-3 font-semibold text-green-600 dark:text-green-400">
                  Zero
                </td>
                <td className="px-4 py-3 text-red-600 dark:text-red-400">
                  Multiple
                </td>
                <td className="px-4 py-3 text-yellow-600 dark:text-yellow-400">
                  Few
                </td>
              </tr>
              <tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                  TV Optimized
                </td>
                <td className="px-4 py-3 font-semibold text-green-600 dark:text-green-400">
                  ✓ Yes
                </td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                  ○ No
                </td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                  ○ No
                </td>
              </tr>
              <tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                  Legacy TV Support
                </td>
                <td className="px-4 py-3 font-semibold text-green-600 dark:text-green-400">
                  ✓ XHR Fetcher
                </td>
                <td className="px-4 py-3 text-red-600 dark:text-red-400">
                  ✗ Fetch only
                </td>
                <td className="px-4 py-3 text-red-600 dark:text-red-400">
                  ✗ Fetch only
                </td>
              </tr>
              <tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                  Progress Tracking
                </td>
                <td className="px-4 py-3 font-semibold text-green-600 dark:text-green-400">
                  ✓ Upload/Download
                </td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                  ○ Limited
                </td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                  ○ Limited
                </td>
              </tr>
              <tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                  TypeScript
                </td>
                <td className="px-4 py-3 font-semibold text-green-600 dark:text-green-400">
                  ✓ Built-in
                </td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">
                  ✓ Built-in
                </td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">
                  ✓ Built-in
                </td>
              </tr>
              <tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                  Caching
                </td>
                <td className="px-4 py-3 font-semibold text-green-600 dark:text-green-400">
                  ✓ Simple
                </td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">
                  ✓ Advanced
                </td>
                <td className="px-4 py-3 text-green-600 dark:text-green-400">
                  ✓ Simple
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Documentation Navigation */}
      <div>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-red-600 text-xl text-white">
            📚
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Documentation
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Explore detailed guides and API references
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/components/query/installation"
            className="group block rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500 hover:shadow-lg dark:border-gray-700 dark:from-gray-800/50 dark:to-gray-800/30 dark:hover:border-cyan-400"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">📦</span>
              <h3 className="font-bold text-gray-900 transition-colors group-hover:text-cyan-600 dark:text-gray-100 dark:group-hover:text-cyan-400">
                Installation
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Package installation and setup instructions
            </p>
          </Link>
          <Link
            href="/components/query/usage"
            className="group block rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500 hover:shadow-lg dark:border-gray-700 dark:from-gray-800/50 dark:to-gray-800/30 dark:hover:border-cyan-400"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">⚙️</span>
              <h3 className="font-bold text-gray-900 transition-colors group-hover:text-cyan-600 dark:text-gray-100 dark:group-hover:text-cyan-400">
                Usage & Configuration
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Basic and advanced query configurations
            </p>
          </Link>
          <Link
            href="/components/query/hooks"
            className="group block rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500 hover:shadow-lg dark:border-gray-700 dark:from-gray-800/50 dark:to-gray-800/30 dark:hover:border-cyan-400"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">🪝</span>
              <h3 className="font-bold text-gray-900 transition-colors group-hover:text-cyan-600 dark:text-gray-100 dark:group-hover:text-cyan-400">
                Hooks
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              useQuery, useMutation, and useInfiniteQuery
            </p>
          </Link>
          <Link
            href="/components/query/examples"
            className="group block rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500 hover:shadow-lg dark:border-gray-700 dark:from-gray-800/50 dark:to-gray-800/30 dark:hover:border-cyan-400"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">💡</span>
              <h3 className="font-bold text-gray-900 transition-colors group-hover:text-cyan-600 dark:text-gray-100 dark:group-hover:text-cyan-400">
                Examples
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Real-world examples and use cases
            </p>
          </Link>
          <Link
            href="/components/query/types"
            className="group block rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500 hover:shadow-lg dark:border-gray-700 dark:from-gray-800/50 dark:to-gray-800/30 dark:hover:border-cyan-400"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">📘</span>
              <h3 className="font-bold text-gray-900 transition-colors group-hover:text-cyan-600 dark:text-gray-100 dark:group-hover:text-cyan-400">
                Types
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              TypeScript type definitions and interfaces
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
