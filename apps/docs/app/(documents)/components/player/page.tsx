import Link from "next/link";
import CodePreview from "@/components/CodePreview";
import CommandTabs from "@/components/CommandTabs";

export default function PlayerOverview() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 p-8 md:p-12 dark:border-purple-800 dark:from-purple-950/30 dark:via-pink-950/30 dark:to-red-950/30">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
            <span className="text-lg">🎬</span>
            Media Streaming
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            Smart TV Player
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-gray-700 dark:text-gray-200">
            Professional video player built with{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              Shaka Player
            </span>
            ,{" "}
            <span className="font-semibold text-pink-600 dark:text-pink-400">
              Smart TV navigation
            </span>
            , and{" "}
            <span className="font-semibold text-red-600 dark:text-red-400">
              remote control support
            </span>
            .
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-purple-400/10 blur-3xl dark:bg-purple-600/10"></div>
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-pink-400/10 blur-3xl dark:bg-pink-600/10"></div>
      </div>

      {/* Features Grid */}
      <div>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 text-xl text-white">
            ✨
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Key Features
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-blue-800 dark:from-blue-950/30 dark:to-blue-900/30">
            <div className="mb-3 text-3xl">🎥</div>
            <h3 className="mb-2 font-bold text-blue-900 dark:text-blue-200">
              Shaka Player
            </h3>
            <p className="text-sm text-blue-800 dark:text-blue-300">
              Professional-grade streaming with adaptive bitrate
            </p>
          </div>
          <div className="group rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-green-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-green-800 dark:from-green-950/30 dark:to-green-900/30">
            <div className="mb-3 text-3xl">🎯</div>
            <h3 className="mb-2 font-bold text-green-900 dark:text-green-200">
              Focus Management
            </h3>
            <p className="text-sm text-green-800 dark:text-green-300">
              Built-in spatial navigation for remote controls
            </p>
          </div>
          <div className="group rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-purple-800 dark:from-purple-950/30 dark:to-purple-900/30">
            <div className="mb-3 text-3xl">🔧</div>
            <h3 className="mb-2 font-bold text-purple-900 dark:text-purple-200">
              Customizable
            </h3>
            <p className="text-sm text-purple-800 dark:text-purple-300">
              Flexible component architecture
            </p>
          </div>
          <div className="group rounded-xl border border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-orange-800 dark:from-orange-950/30 dark:to-orange-900/30">
            <div className="mb-3 text-3xl">📱</div>
            <h3 className="mb-2 font-bold text-orange-900 dark:text-orange-200">
              Responsive
            </h3>
            <p className="text-sm text-orange-800 dark:text-orange-300">
              Works on TV, mobile, and desktop
            </p>
          </div>
          <div className="group rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-red-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-red-800 dark:from-red-950/30 dark:to-red-900/30">
            <div className="mb-3 text-3xl">🎭</div>
            <h3 className="mb-2 font-bold text-red-900 dark:text-red-200">
              Zero Dependencies
            </h3>
            <p className="text-sm text-red-800 dark:text-red-300">
              Self-contained state management
            </p>
          </div>
          <div className="group rounded-xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-indigo-800 dark:from-indigo-950/30 dark:to-indigo-900/30">
            <div className="mb-3 text-3xl">🌐</div>
            <h3 className="mb-2 font-bold text-indigo-900 dark:text-indigo-200">
              Multi-language
            </h3>
            <p className="text-sm text-indigo-800 dark:text-indigo-300">
              Audio tracks, subtitles, quality selection
            </p>
          </div>
          <div className="group rounded-xl border border-teal-200 bg-gradient-to-br from-teal-50 to-teal-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-teal-800 dark:from-teal-950/30 dark:to-teal-900/30">
            <div className="mb-3 text-3xl">🎨</div>
            <h3 className="mb-2 font-bold text-teal-900 dark:text-teal-200">
              Tailwind CSS
            </h3>
            <p className="text-sm text-teal-800 dark:text-teal-300">
              Styled with utility classes
            </p>
          </div>
          <div className="group rounded-xl border border-pink-200 bg-gradient-to-br from-pink-50 to-pink-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-pink-800 dark:from-pink-950/30 dark:to-pink-900/30">
            <div className="mb-3 text-3xl">📡</div>
            <h3 className="mb-2 font-bold text-pink-900 dark:text-pink-200">
              DRM Support
            </h3>
            <p className="text-sm text-pink-800 dark:text-pink-300">
              Protected content playback
            </p>
          </div>
        </div>
      </div>

      {/* Installation */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8 dark:border-gray-700 dark:bg-gray-800/50">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 text-xl text-white">
            📦
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Installation
          </h2>
        </div>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Install the Smart TV Player package using your preferred package
          manager:
        </p>
        <CommandTabs
          commands={{
            npm: "npm install @smart-tv/player",
            pnpm: "pnpm add @smart-tv/player",
            yarn: "yarn add @smart-tv/player",
            bun: "bun add @smart-tv/player",
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
          Get started with the Smart TV Player in just a few steps:
        </p>
        <CodePreview
          code={`import React from 'react';
import {
  VideoPlayer,
  PlayerController,
  MediaProvider
} from '@smart-tv/player';
import '@smart-tv/player/styles.css';

function App() {
  return (
    <MediaProvider>
      <div className="relative w-full h-screen bg-black">
        <VideoPlayer
          src="https://example.com/video.m3u8"
          poster="https://example.com/poster.jpg"
          autoPlay={false}
          onReady={() => console.log('Player ready')}
        />
        <PlayerController
          layoutStyle="youtube"
          title="Sample Video"
          subtitle="Episode 1"
        />
      </div>
    </MediaProvider>
  );
}`}
          language="tsx"
        />
      </div>

      {/* Key Components */}
      <div>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-xl text-white">
            🧩
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Core Components
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Essential building blocks for video playback
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="group rounded-xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-purple-400">
            <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
              VideoPlayer
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Core video component with Shaka Player integration for streaming
              video content.
            </p>
            <code className="block rounded-md bg-gray-100 px-3 py-1.5 font-mono text-xs dark:bg-gray-800">
              {'<VideoPlayer src="..." />'}
            </code>
          </div>
          <div className="group rounded-xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-purple-400">
            <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
              PlayerController
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Customizable player controls with multiple layout styles and
              button configurations.
            </p>
            <code className="block rounded-md bg-gray-100 px-3 py-1.5 font-mono text-xs dark:bg-gray-800">
              {'<PlayerController layoutStyle="youtube" />'}
            </code>
          </div>
          <div className="group rounded-xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-purple-400">
            <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
              MediaProvider
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Context provider for player state management and event handling.
            </p>
            <code className="block rounded-md bg-gray-100 px-3 py-1.5 font-mono text-xs dark:bg-gray-800">
              {"<MediaProvider>...</MediaProvider>"}
            </code>
          </div>
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
            href="/components/player/installation"
            className="group block rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500 hover:shadow-lg dark:border-gray-700 dark:from-gray-800/50 dark:to-gray-800/30 dark:hover:border-purple-400"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">📦</span>
              <h3 className="font-bold text-gray-900 transition-colors group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
                Installation
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Package installation and setup instructions
            </p>
          </Link>
          <Link
            href="/components/player/usage"
            className="group block rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500 hover:shadow-lg dark:border-gray-700 dark:from-gray-800/50 dark:to-gray-800/30 dark:hover:border-purple-400"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">⚙️</span>
              <h3 className="font-bold text-gray-900 transition-colors group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
                Usage & Configuration
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Basic and advanced player configurations
            </p>
          </Link>
          <Link
            href="/components/player/components"
            className="group block rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500 hover:shadow-lg dark:border-gray-700 dark:from-gray-800/50 dark:to-gray-800/30 dark:hover:border-purple-400"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">🧩</span>
              <h3 className="font-bold text-gray-900 transition-colors group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
                Components
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              All available components and their props
            </p>
          </Link>
          <Link
            href="/components/player/hooks"
            className="group block rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500 hover:shadow-lg dark:border-gray-700 dark:from-gray-800/50 dark:to-gray-800/30 dark:hover:border-purple-400"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">🪝</span>
              <h3 className="font-bold text-gray-900 transition-colors group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
                Hooks
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              React hooks for player state management
            </p>
          </Link>
          <Link
            href="/components/player/examples"
            className="group block rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500 hover:shadow-lg dark:border-gray-700 dark:from-gray-800/50 dark:to-gray-800/30 dark:hover:border-purple-400"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">💡</span>
              <h3 className="font-bold text-gray-900 transition-colors group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
                Examples
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Sample implementations and configurations
            </p>
          </Link>
          <Link
            href="/components/player/types"
            className="group block rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500 hover:shadow-lg dark:border-gray-700 dark:from-gray-800/50 dark:to-gray-800/30 dark:hover:border-purple-400"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">📘</span>
              <h3 className="font-bold text-gray-900 transition-colors group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
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
