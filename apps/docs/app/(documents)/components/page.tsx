import Link from "next/link";
import React from "react";

export default function ComponentsIndex(): React.ReactElement {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 md:p-12 border border-blue-200 dark:border-blue-800">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
            <span className="text-lg">🧩</span>
            Component Library
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Smart TV Components
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl leading-relaxed mb-4">
            Production-ready React components for building{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">Smart TV applications</span>.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Explore our collection of highly optimized, accessible, and customizable components designed specifically for TV interfaces and large-screen experiences.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Components Grid */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-xl">
            📦
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Core Packages</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Essential component packages for Smart TV development
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* UI Components Card */}
          <Link 
            href="/components/ui"
            className="group block relative overflow-hidden border-2 border-pink-200 dark:border-pink-800 rounded-xl p-6 hover:border-pink-500 dark:hover:border-pink-400 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-pink-950/30 dark:via-rose-950/30 dark:to-red-950/30"
          >
            <div className="flex flex-col h-full">
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 dark:from-pink-600 dark:to-rose-700 flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                    Smart TV UI
                  </h3>
                  <span className="px-2 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold rounded-md uppercase">
                    New
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-200 text-sm mb-4 leading-relaxed">
                  Complete UI component library with spatial navigation, focus management, and remote control support. Build beautiful TV interfaces with ease.
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-pink-100 dark:bg-pink-900/40 text-pink-800 dark:text-pink-300">
                    🎨 17+ Components
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300">
                    🎯 Spatial Nav
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300">
                    ♾️ Virtualization
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-300">
                    📘 TypeScript
                  </span>
                </div>
                
                {/* Arrow */}
                <div className="flex items-center text-pink-600 dark:text-pink-400 text-sm font-bold group-hover:translate-x-2 transition-transform">
                  Explore UI Components
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Player Component Card */}
          <Link 
            href="/components/player"
            className="group block relative overflow-hidden border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 dark:from-blue-950/30 dark:via-cyan-950/30 dark:to-sky-950/30"
          >
            <div className="flex flex-col h-full">
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 dark:from-blue-600 dark:to-cyan-700 flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Smart TV Player
                </h3>
                <p className="text-gray-700 dark:text-gray-200 text-sm mb-4 leading-relaxed">
                  Comprehensive video player built with Shaka Player, featuring adaptive streaming, DRM support, and spatial navigation optimized for TV remotes.
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300">
                    🎥 Shaka Player
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300">
                    🎯 Spatial Nav
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300">
                    🔒 DRM Ready
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-300">
                    📱 Responsive
                  </span>
                </div>
                
                {/* Arrow */}
                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-bold group-hover:translate-x-2 transition-transform">
                  Explore Player
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Query Component Card */}
          <Link 
            href="/components/query"
            className="group block relative overflow-hidden border-2 border-purple-200 dark:border-purple-800 rounded-xl p-6 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 dark:from-purple-950/30 dark:via-violet-950/30 dark:to-indigo-950/30"
          >
            <div className="flex flex-col h-full">
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700 flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Smart TV Query
                </h3>
                <p className="text-gray-700 dark:text-gray-200 text-sm mb-4 leading-relaxed">
                  Powerful data fetching and state management hooks designed for TV applications. Handle async data, caching, and optimistic updates with ease.
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300">
                    📡 Data Fetching
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300">
                    💾 Caching
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300">
                    ⚡ Optimistic Updates
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-300">
                    🔄 Auto Refetch
                  </span>
                </div>
                
                {/* Arrow */}
                <div className="flex items-center text-purple-600 dark:text-purple-400 text-sm font-bold group-hover:translate-x-2 transition-transform">
                  Explore Query
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900/50 dark:to-gray-900/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-xl">
            ⚡
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Quick Access</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Jump directly to commonly used sections
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          <Link 
            href="/components/ui"
            className="group flex flex-col items-center p-5 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl hover:shadow-xl hover:scale-105 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <span className="text-sm font-bold text-white text-center">UI Components</span>
          </Link>

          <Link 
            href="/components/player/installation"
            className="group flex flex-col items-center p-5 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl hover:shadow-xl hover:scale-105 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <span className="text-sm font-bold text-white text-center">Installation</span>
          </Link>

          <Link 
            href="/components/player/examples"
            className="group flex flex-col items-center p-5 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl hover:shadow-xl hover:scale-105 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span className="text-sm font-bold text-white text-center">Examples</span>
          </Link>

          <Link 
            href="/components/player/types"
            className="group flex flex-col items-center p-5 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl hover:shadow-xl hover:scale-105 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-sm font-bold text-white text-center">TypeScript</span>
          </Link>
        </div>
      </div>

      {/* Features Overview */}
      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 md:p-10 border border-blue-200 dark:border-blue-800">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl">
            ✨
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Why Smart TV Components?</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Built for the unique challenges of TV development
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="group p-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Optimized for TV</h3>
            <p className="text-blue-100 text-sm leading-relaxed">Built specifically for large screens and remote control navigation</p>
          </div>

          <div className="group p-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Fully Customizable</h3>
            <p className="text-purple-100 text-sm leading-relaxed">Flexible APIs and styling options to match your brand</p>
          </div>

          <div className="group p-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Production Ready</h3>
            <p className="text-green-100 text-sm leading-relaxed">Battle-tested in real-world TV applications</p>
          </div>
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white text-xl">
            🚀
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Getting Started</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Install the components you need and start building in minutes
            </p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          Choose your package and start building amazing Smart TV experiences today.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/components/ui"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-2xl hover:scale-105"
          >
            <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            Get Started with UI
          </Link>
          <Link 
            href="/components/player/installation"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-2xl hover:scale-105"
          >
            <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Install Player
          </Link>
          <Link 
            href="/components/query/installation"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-2xl hover:scale-105"
          >
            <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Install Query
          </Link>
          <Link 
            href="/components/player/examples"
            className="group inline-flex items-center px-8 py-4 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-500 dark:hover:border-gray-400 text-gray-900 dark:text-gray-100 font-bold rounded-xl transition-all hover:shadow-lg"
          >
            <svg className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            View Examples
          </Link>
        </div>
      </div>
    </div>
  );
}
