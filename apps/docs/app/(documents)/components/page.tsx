import Link from "next/link";
import React from "react";

export default function ComponentsIndex(): React.ReactElement {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 md:p-12 dark:border-blue-800 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 text-sm font-medium text-blue-700 dark:from-blue-900/50 dark:to-purple-900/50 dark:text-blue-300">
            <span className="text-lg">🧩</span>
            Component Library
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            Smart TV Components
          </h1>
          <p className="mb-4 max-w-3xl text-xl leading-relaxed text-gray-700 dark:text-gray-200">
            Production-ready React components for building{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Smart TV applications
            </span>
            .
          </p>
          <p className="max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Explore our collection of highly optimized, accessible, and
            customizable components designed specifically for TV interfaces and
            large-screen experiences.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-600/10"></div>
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-purple-400/10 blur-3xl dark:bg-purple-600/10"></div>
      </div>

      {/* Main Components Grid */}
      <div>
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-xl text-white">
            📦
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Core Packages
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Essential component packages for Smart TV development
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* UI Components Card */}
          <Link
            href="/components/ui"
            className="group relative block overflow-hidden rounded-xl border-2 border-pink-200 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:shadow-2xl dark:border-pink-800 dark:from-pink-950/30 dark:via-rose-950/30 dark:to-red-950/30 dark:hover:border-pink-400"
          >
            <div className="flex h-full flex-col">
              {/* Icon */}
              <div className="mb-4 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-xl transition-transform group-hover:rotate-3 group-hover:scale-110 dark:from-pink-600 dark:to-rose-700">
                <svg
                  className="h-10 w-10"
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

              {/* Content */}
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-pink-600 dark:text-gray-100 dark:group-hover:text-pink-400">
                    Smart TV UI
                  </h3>
                  <span className="rounded-md bg-gradient-to-r from-pink-500 to-rose-500 px-2 py-1 text-xs font-bold uppercase text-white">
                    New
                  </span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                  Complete UI component library with spatial navigation, focus
                  management, and remote control support. Build beautiful TV
                  interfaces with ease.
                </p>

                {/* Features */}
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-pink-100 px-2 py-1 text-xs font-medium text-pink-800 dark:bg-pink-900/40 dark:text-pink-300">
                    🎨 17+ Components
                  </span>
                  <span className="inline-flex items-center rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">
                    🎯 Spatial Nav
                  </span>
                  <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                    ♾️ Virtualization
                  </span>
                  <span className="inline-flex items-center rounded-md bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800 dark:bg-orange-900/40 dark:text-orange-300">
                    📘 TypeScript
                  </span>
                </div>

                {/* Arrow */}
                <div className="flex items-center text-sm font-bold text-pink-600 transition-transform group-hover:translate-x-2 dark:text-pink-400">
                  Explore UI Components
                  <svg
                    className="ml-1 h-5 w-5"
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
                </div>
              </div>
            </div>
          </Link>

          {/* Player Component Card */}
          <Link
            href="/components/player"
            className="group relative block overflow-hidden rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-2xl dark:border-blue-800 dark:from-blue-950/30 dark:via-cyan-950/30 dark:to-sky-950/30 dark:hover:border-blue-400"
          >
            <div className="flex h-full flex-col">
              {/* Icon */}
              <div className="mb-4 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-xl transition-transform group-hover:rotate-3 group-hover:scale-110 dark:from-blue-600 dark:to-cyan-700">
                <svg
                  className="h-10 w-10"
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

              {/* Content */}
              <div className="flex-1">
                <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
                  Smart TV Player
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                  Comprehensive video player built with Shaka Player, featuring
                  adaptive streaming, DRM support, and spatial navigation
                  optimized for TV remotes.
                </p>

                {/* Features */}
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                    🎥 Shaka Player
                  </span>
                  <span className="inline-flex items-center rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">
                    🎯 Spatial Nav
                  </span>
                  <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900/40 dark:text-green-300">
                    🔒 DRM Ready
                  </span>
                  <span className="inline-flex items-center rounded-md bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800 dark:bg-orange-900/40 dark:text-orange-300">
                    📱 Responsive
                  </span>
                </div>

                {/* Arrow */}
                <div className="flex items-center text-sm font-bold text-blue-600 transition-transform group-hover:translate-x-2 dark:text-blue-400">
                  Explore Player
                  <svg
                    className="ml-1 h-5 w-5"
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
                </div>
              </div>
            </div>
          </Link>

          {/* Query Component Card */}
          <Link
            href="/components/query"
            className="group relative block overflow-hidden rounded-xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:shadow-2xl dark:border-purple-800 dark:from-purple-950/30 dark:via-violet-950/30 dark:to-indigo-950/30 dark:hover:border-purple-400"
          >
            <div className="flex h-full flex-col">
              {/* Icon */}
              <div className="mb-4 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-xl transition-transform group-hover:rotate-3 group-hover:scale-110 dark:from-purple-600 dark:to-indigo-700">
                <svg
                  className="h-10 w-10"
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

              {/* Content */}
              <div className="flex-1">
                <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
                  Smart TV Query
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                  Powerful data fetching and state management hooks designed for
                  TV applications. Handle async data, caching, and optimistic
                  updates with ease.
                </p>

                {/* Features */}
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">
                    📡 Data Fetching
                  </span>
                  <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                    💾 Caching
                  </span>
                  <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900/40 dark:text-green-300">
                    ⚡ Optimistic Updates
                  </span>
                  <span className="inline-flex items-center rounded-md bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800 dark:bg-orange-900/40 dark:text-orange-300">
                    🔄 Auto Refetch
                  </span>
                </div>

                {/* Arrow */}
                <div className="flex items-center text-sm font-bold text-purple-600 transition-transform group-hover:translate-x-2 dark:text-purple-400">
                  Explore Query
                  <svg
                    className="ml-1 h-5 w-5"
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
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-gray-100 p-8 dark:border-slate-700 dark:from-slate-900/50 dark:to-gray-900/50">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-xl text-white">
            ⚡
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Quick Access
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Jump directly to commonly used sections
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Link
            href="/components/ui"
            className="group flex flex-col items-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 p-5 transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm transition-transform group-hover:rotate-6 group-hover:scale-110">
              <svg
                className="h-7 w-7"
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
            <span className="text-center text-sm font-bold text-white">
              UI Components
            </span>
          </Link>

          <Link
            href="/components/player/installation"
            className="group flex flex-col items-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 p-5 transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm transition-transform group-hover:rotate-6 group-hover:scale-110">
              <svg
                className="h-7 w-7"
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
            <span className="text-center text-sm font-bold text-white">
              Installation
            </span>
          </Link>

          <Link
            href="/components/player/examples"
            className="group flex flex-col items-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 p-5 transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm transition-transform group-hover:rotate-6 group-hover:scale-110">
              <svg
                className="h-7 w-7"
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
            <span className="text-center text-sm font-bold text-white">
              Examples
            </span>
          </Link>

          <Link
            href="/components/player/types"
            className="group flex flex-col items-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 p-5 transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm transition-transform group-hover:rotate-6 group-hover:scale-110">
              <svg
                className="h-7 w-7"
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
            <span className="text-center text-sm font-bold text-white">
              TypeScript
            </span>
          </Link>
        </div>
      </div>

      {/* Features Overview */}
      <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 md:p-10 dark:border-blue-800 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-xl text-white">
            ✨
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Why Smart TV Components?
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Built for the unique challenges of TV development
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="group rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <svg
                className="h-7 w-7 text-white"
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
            <h3 className="mb-2 text-lg font-bold text-white">
              Optimized for TV
            </h3>
            <p className="text-sm leading-relaxed text-blue-100">
              Built specifically for large screens and remote control navigation
            </p>
          </div>

          <div className="group rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <svg
                className="h-7 w-7 text-white"
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
            <h3 className="mb-2 text-lg font-bold text-white">
              Fully Customizable
            </h3>
            <p className="text-sm leading-relaxed text-purple-100">
              Flexible APIs and styling options to match your brand
            </p>
          </div>

          <div className="group rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <svg
                className="h-7 w-7 text-white"
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
            <h3 className="mb-2 text-lg font-bold text-white">
              Production Ready
            </h3>
            <p className="text-sm leading-relaxed text-green-100">
              Battle-tested in real-world TV applications
            </p>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800/50">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-600 text-xl text-white">
            🚀
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Getting Started
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Install the components you need and start building in minutes
            </p>
          </div>
        </div>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
          Choose your package and start building amazing Smart TV experiences
          today.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/components/ui"
            className="group inline-flex items-center rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 px-8 py-4 font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-pink-600 hover:to-rose-700 hover:shadow-2xl"
          >
            <svg
              className="mr-3 h-6 w-6 transition-transform group-hover:rotate-12"
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
            Get Started with UI
          </Link>
          <Link
            href="/components/player/installation"
            className="group inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 px-8 py-4 font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-blue-600 hover:to-cyan-700 hover:shadow-2xl"
          >
            <svg
              className="mr-3 h-6 w-6 transition-transform group-hover:rotate-12"
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
            Install Player
          </Link>
          <Link
            href="/components/query/installation"
            className="group inline-flex items-center rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 px-8 py-4 font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-purple-600 hover:to-indigo-700 hover:shadow-2xl"
          >
            <svg
              className="mr-3 h-6 w-6 transition-transform group-hover:rotate-12"
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
            Install Query
          </Link>
          <Link
            href="/components/player/examples"
            className="group inline-flex items-center rounded-xl border-2 border-gray-300 bg-white px-8 py-4 font-bold text-gray-900 transition-all hover:border-gray-500 hover:shadow-lg dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:hover:border-gray-400"
          >
            <svg
              className="mr-3 h-6 w-6 transition-transform group-hover:translate-x-1"
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
            View Examples
          </Link>
        </div>
      </div>
    </div>
  );
}
