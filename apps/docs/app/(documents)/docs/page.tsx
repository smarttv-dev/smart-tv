import Link from "next/link";
import React from "react";

export default function DocsIndex(): React.ReactElement {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
          Documentation
        </h1>
        <p className="mb-2 text-xl text-gray-600 dark:text-gray-300">
          Complete guides and API references for building Smart TV applications
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Explore our comprehensive documentation to get started quickly and
          build production-ready TV apps with confidence.
        </p>
      </div>

      {/* Quick Start */}
      <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 p-8 dark:border-blue-800 dark:from-blue-900/10 dark:to-purple-900/10">
        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg">
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
          <div>
            <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
              Quick Start Guide
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              New to Smart TV? Start here to get up and running in minutes.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white dark:bg-blue-500">
                1
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                Install
              </h3>
            </div>
            <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
              Add Smart TV packages to your project via npm or yarn
            </p>
            <Link
              href="/components/player/installation"
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Installation guide
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white dark:bg-purple-500">
                2
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                Explore
              </h3>
            </div>
            <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
              Browse components and learn how to use them
            </p>
            <Link
              href="/components"
              className="inline-flex items-center gap-1 text-sm font-medium text-purple-600 hover:underline dark:text-purple-400"
            >
              View components
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-600 text-xs font-bold text-white dark:bg-pink-500">
                3
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                Build
              </h3>
            </div>
            <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
              Follow examples to create your Smart TV app
            </p>
            <Link
              href="/components/player/examples"
              className="inline-flex items-center gap-1 text-sm font-medium text-pink-600 hover:underline dark:text-pink-400"
            >
              See examples
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Core Packages */}
      <div>
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Core Packages
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {/* UI Package */}
          <div className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-500 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-400">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md transition-transform group-hover:scale-110 dark:from-blue-600 dark:to-blue-700">
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
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  UI Components
                </h3>
                <code className="text-xs text-gray-500 dark:text-gray-400">
                  @smart-tv/ui
                </code>
              </div>
            </div>

            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              Composable React components with built-in focus management,
              spatial navigation, and TV-optimized styling.
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                Focus Management
              </span>
              <span className="rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                Tailwind CSS
              </span>
            </div>

            <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
              <Link
                href="/components"
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                View documentation
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Query Package */}
          <div className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-purple-500 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-purple-400">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-md transition-transform group-hover:scale-110 dark:from-purple-600 dark:to-purple-700">
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
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  Data Query
                </h3>
                <code className="text-xs text-gray-500 dark:text-gray-400">
                  @smart-tv/query
                </code>
              </div>
            </div>

            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              Powerful React hooks for data fetching, caching, and state
              management optimized for TV application performance.
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                Smart Caching
              </span>
              <span className="rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                Auto Refetch
              </span>
            </div>

            <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
              <Link
                href="/components/query"
                className="inline-flex items-center gap-1 text-sm font-medium text-purple-600 hover:underline dark:text-purple-400"
              >
                View documentation
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Player Package */}
          <div className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-pink-500 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-pink-400">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 text-white shadow-md transition-transform group-hover:scale-110 dark:from-pink-600 dark:to-pink-700">
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
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  Video Player
                </h3>
                <code className="text-xs text-gray-500 dark:text-gray-400">
                  @smart-tv/player
                </code>
              </div>
            </div>

            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              Feature-rich video player with Shaka Player integration, DRM
              support, adaptive streaming, and TV remote controls.
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-md bg-pink-100 px-2 py-1 text-xs font-medium text-pink-700 dark:bg-pink-900/30 dark:text-pink-300">
                DRM Protected
              </span>
              <span className="rounded-md bg-pink-100 px-2 py-1 text-xs font-medium text-pink-700 dark:bg-pink-900/30 dark:text-pink-300">
                HLS/DASH
              </span>
            </div>

            <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
              <Link
                href="/components/player"
                className="inline-flex items-center gap-1 text-sm font-medium text-pink-600 hover:underline dark:text-pink-400"
              >
                View documentation
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Topics */}
      <div>
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Popular Topics
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/components/player/installation"
            className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-blue-500 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-400"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-transform group-hover:scale-110 dark:bg-blue-900/30 dark:text-blue-400">
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="mb-1 font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
                Installation & Setup
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Learn how to install and configure Smart TV packages in your
                project
              </p>
            </div>
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>

          <Link
            href="/components/player/hooks"
            className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-purple-500 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-purple-400"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600 transition-transform group-hover:scale-110 dark:bg-purple-900/30 dark:text-purple-400">
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
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="mb-1 font-semibold text-gray-900 transition-colors group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
                React Hooks API
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Explore powerful hooks for player state management and data
                fetching
              </p>
            </div>
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-purple-600 dark:group-hover:text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>

          <Link
            href="/components/player/examples"
            className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-green-500 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-green-400"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600 transition-transform group-hover:scale-110 dark:bg-green-900/30 dark:text-green-400">
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
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="mb-1 font-semibold text-gray-900 transition-colors group-hover:text-green-600 dark:text-gray-100 dark:group-hover:text-green-400">
                Code Examples
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Real-world examples and implementation patterns for TV apps
              </p>
            </div>
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-green-600 dark:group-hover:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>

          <Link
            href="/components/player/types"
            className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-orange-500 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-orange-400"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600 transition-transform group-hover:scale-110 dark:bg-orange-900/30 dark:text-orange-400">
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="mb-1 font-semibold text-gray-900 transition-colors group-hover:text-orange-600 dark:text-gray-100 dark:group-hover:text-orange-400">
                TypeScript Types
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Complete TypeScript type definitions and interfaces reference
              </p>
            </div>
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-orange-600 dark:group-hover:text-orange-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Resources */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Community & Support */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Community & Support
            </h3>
          </div>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
            Join our community, report issues, and contribute to the project.
          </p>
          <div className="space-y-3">
            <a
              href="https://github.com/smarttv-dev/smart-tv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub Repository
            </a>
            <a
              href="https://github.com/smarttv-dev/smart-tv/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              Report an Issue
            </a>
            <a
              href="https://github.com/smarttv-dev/smart-tv/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Contributing Guide
            </a>
          </div>
        </div>

        {/* Open Source */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white">
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Open Source
            </h3>
          </div>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
            Smart TV is BSD 3-Clause licensed and welcomes contributions from
            the community.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
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
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Free to use
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  BSD 3-Clause licensed for commercial and personal projects
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
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
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Community driven
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Built and maintained by developers worldwide
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
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
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Production ready
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Battle-tested in real-world applications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
