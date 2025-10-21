import Link from "next/link";

export default function Page(): React.ReactElement {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium dark:border-gray-700">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            Open Source · BSD-3-Clause Licensed
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl dark:text-white">
            Build for the Big Screen
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-12 max-w-3xl text-xl text-gray-600 sm:text-2xl dark:text-gray-400">
            Production-ready React toolkit for building Smart TV applications
            with spatial navigation, video streaming, and optimized performance.
          </p>

          {/* CTA Buttons */}
          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/components"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              Get Started
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <Link
              href="https://github.com/smarttv-dev/smart-tv"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900 transition-colors hover:border-gray-400 dark:border-gray-700 dark:text-white dark:hover:border-gray-600"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
            <div>
              <span className="font-bold text-gray-900 dark:text-white">3</span>{" "}
              Core Packages
            </div>
            <div>
              <span className="font-bold text-gray-900 dark:text-white">
                17+
              </span>{" "}
              UI Components
            </div>
            <div>
              <span className="font-bold text-gray-900 dark:text-white">
                BSD
              </span>{" "}
              Open Source
            </div>
          </div>
        </div>
      </section>

      {/* Platform Support - Minimal */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 dark:bg-gray-900/50">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Works Everywhere
          </h2>
          <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
            Built for <strong>Chromium 30+</strong> and legacy browsers.
            Supports all major Smart TV platforms.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div>Samsung Tizen</div>
            <div>LG webOS</div>
            <div>Android TV</div>
            <div>Fire TV</div>
            <div>Apple TV</div>
            <div>Roku TV</div>
          </div>
        </div>
      </section>

      {/* Features - 3 Packages */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-16 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Everything You Need
          </h2>

          <div className="grid gap-12 md:grid-cols-3">
            {/* UI Package */}
            <div>
              <div className="mb-4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  UI Components
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  17+ components with spatial navigation and focus management
                  optimized for TV interfaces.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Spatial Navigation
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Focus Management
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Virtualization Ready
                  </li>
                </ul>
              </div>
              <Link
                href="/components/ui"
                className="font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                Explore UI →
              </Link>
            </div>

            {/* Query Package */}
            <div>
              <div className="mb-4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Data Query
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Lightweight data fetching and caching utilities optimized for
                  TV apps.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Smart Caching
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Auto Refetching
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Zero Dependencies
                  </li>
                </ul>
              </div>
              <Link
                href="/components/query"
                className="font-medium text-purple-600 hover:underline dark:text-purple-400"
              >
                Explore Query →
              </Link>
            </div>

            {/* Player Package */}
            <div>
              <div className="mb-4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Video Player
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Professional video player with Shaka Player integration and
                  DRM support.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-pink-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Adaptive Streaming
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-pink-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    DRM Protected
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-pink-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Remote Control Ready
                  </li>
                </ul>
              </div>
              <Link
                href="/components/player"
                className="font-medium text-pink-600 hover:underline dark:text-pink-400"
              >
                Explore Player →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Size */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 dark:bg-gray-900/50">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Lightweight & Fast
          </h2>
          <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
            Minimal footprint, tree-shakeable, optimized for TV hardware
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-2 text-4xl font-bold text-blue-600 dark:text-blue-400">
                350KB
              </div>
              <div className="mb-1 text-sm text-gray-600 dark:text-gray-400">
                @smart-tv/ui
              </div>
              <div className="text-xs text-gray-500">gzipped</div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-2 text-4xl font-bold text-purple-600 dark:text-purple-400">
                124KB
              </div>
              <div className="mb-1 text-sm text-gray-600 dark:text-gray-400">
                @smart-tv/query
              </div>
              <div className="text-xs text-gray-500">gzipped</div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-2 text-4xl font-bold text-pink-600 dark:text-pink-400">
                400KB
              </div>
              <div className="mb-1 text-sm text-gray-600 dark:text-gray-400">
                @smart-tv/player
              </div>
              <div className="text-xs text-gray-500">gzipped</div>
            </div>
          </div>
        </div>
      </section>

      {/* Player Performance Comparison - Astro Islands Style */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 dark:bg-black">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-sm font-semibold text-pink-500">
              Best-In-Class Performance
            </h2>
            <h3 className="mb-4 text-3xl font-bold">Video Player Comparison</h3>
            <p className="text-lg text-gray-400">
              Complete solution with Shaka Player core + React components + TV
              controls + DRM support
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-200 p-8 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-8 text-sm">Bundle size comparison (gzipped)</p>

            <div className="space-y-3">
              {/* Smart TV Player - Winner */}
              <div className="flex flex-col xl:flex-row xl:items-center">
                <div className="w-40 pr-6 text-right">
                  <span className="text-lg font-bold">@smart-tv/player</span>
                </div>
                <div className="relative flex h-12 flex-1 items-center gap-4">
                  <div className="absolute h-full w-full rounded-lg bg-gray-300 dark:border dark:border-gray-700 dark:bg-transparent"></div>
                  <div
                    className="relative flex h-12 items-center rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 px-3"
                    style={{ width: "11.7%", minWidth: "120px" }}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                      <svg
                        className="h-5 w-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="relative text-nowrap text-2xl font-bold text-teal-400">
                    400 KB
                  </span>
                </div>
              </div>

              {/* Shaka Player */}
              <div className="flex flex-col xl:flex-row xl:items-center">
                <div className="w-40 pr-6 text-right">
                  <span className="text-base font-medium">Shaka Player</span>
                </div>
                <div className="relative flex h-12 flex-1 items-center gap-4">
                  <div className="absolute h-full w-full rounded-lg bg-gray-300 dark:border dark:border-gray-700 dark:bg-transparent"></div>
                  <div
                    className="relative flex h-12 items-center rounded-lg bg-gray-700 px-3"
                    style={{ width: "100%" }}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-600">
                      <span className="text-xs font-bold text-white">SP</span>
                    </div>
                  </div>
                  <span className="relative text-nowrap text-xl font-bold text-gray-400">
                    33.4 MB
                  </span>
                </div>
              </div>

              {/* Video.js */}
              <div className="flex flex-col xl:flex-row xl:items-center">
                <div className="w-40 pr-6 text-right">
                  <span className="text-base font-medium">Video.js</span>
                </div>
                <div className="relative flex h-12 flex-1 items-center gap-4">
                  <div className="absolute h-full w-full rounded-lg bg-gray-300 dark:border dark:border-gray-700 dark:bg-transparent"></div>
                  <div
                    className="relative flex h-12 items-center rounded-lg bg-gray-700 px-3"
                    style={{ width: "46.2%" }}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-600">
                      <span className="text-xs font-bold text-white">VJ</span>
                    </div>
                  </div>
                  <span className="relative text-nowrap text-xl font-bold text-gray-400">
                    15.4 MB
                  </span>
                </div>
              </div>

              {/* HLS.js */}
              <div className="flex flex-col xl:flex-row xl:items-center">
                <div className="w-40 pr-6 text-right">
                  <span className="text-base font-medium">HLS.js</span>
                </div>
                <div className="relative flex h-12 flex-1 items-center gap-4">
                  <div className="absolute h-full w-full rounded-lg bg-gray-300 dark:border dark:border-gray-700 dark:bg-transparent"></div>
                  <div
                    className="relative flex h-12 items-center rounded-lg bg-gray-700 px-3"
                    style={{ width: "71.6%" }}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-600">
                      <span className="text-xs font-bold text-white">HL</span>
                    </div>
                  </div>
                  <span className="relative text-nowrap text-xl font-bold text-gray-400">
                    23.9 MB
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-300 pt-6">
              <div className="rounded-lg border border-pink-500/20 bg-pink-500/10 p-4">
                <p className="text-sm">
                  <strong className="font-semibold">Complete Solution:</strong>{" "}
                  @smart-tv/player includes Shaka Player core + React components
                  + TV-optimized controls + DRM support + spatial navigation
                  integration - all in one lightweight package.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                Get Started in Minutes
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                Install packages from npm, import components, and start
                building. Simple, straightforward, and developer-friendly.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Install Packages
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Add via npm, pnpm, or yarn
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Import Components
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Full TypeScript support
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 font-bold text-pink-600 dark:bg-pink-900/30 dark:text-pink-400">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Build & Deploy
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Ship to production
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900 dark:bg-black">
              <div className="flex items-center gap-2 border-b border-gray-800 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="ml-auto text-xs text-gray-400">App.tsx</span>
              </div>
              <div className="overflow-x-auto p-4 font-mono text-sm text-gray-300">
                <pre>{`import { VideoPlayer, MediaProvider } 
  from '@smart-tv/player'

export default function App() {
  return (
    <MediaProvider>
      <VideoPlayer
        src="video.m3u8"
        poster="poster.jpg"
        autoPlay={false}
      />
    </MediaProvider>
  )
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 dark:bg-gray-900/50">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-16 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Why Choose Smart TV
          </h2>

          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-bold text-gray-900 dark:text-white">
                Blazing Fast
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Optimized for TV hardware
              </p>
            </div>

            <div>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-bold text-gray-900 dark:text-white">
                Customizable
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Flexible APIs and styling
              </p>
            </div>

            <div>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-bold text-gray-900 dark:text-white">
                Type Safe
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Full TypeScript support
              </p>
            </div>

            <div>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-bold text-gray-900 dark:text-white">
                Open Source
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                BSD-3-Clause licensed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Ready to Build?
          </h2>
          <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
            Join developers building the next generation of Smart TV
            applications
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/components"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-8 py-4 font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              Browse Components
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <Link
              href="https://github.com/smarttv-dev/smart-tv"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-8 py-4 font-semibold text-gray-900 transition-colors hover:border-gray-400 dark:border-gray-700 dark:text-white dark:hover:border-gray-600"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              Star on GitHub
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              BSD-3-Clause
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Production Ready
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
              Actively Maintained
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
