import Link from 'next/link';
import CodePreview from '../../../../components/CodePreview';
import CommandTabs from '../../../../components/CommandTabs';

export default function PlayerOverview() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 dark:from-purple-950/30 dark:via-pink-950/30 dark:to-red-950/30 rounded-2xl p-8 md:p-12 border border-purple-200 dark:border-purple-800">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/50 rounded-full text-sm font-medium text-purple-700 dark:text-purple-300 mb-6">
            <span className="text-lg">🎬</span>
            Media Streaming
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6">
            Smart TV Player
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl leading-relaxed">
            Professional video player built with{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">Shaka Player</span>,{" "}
            <span className="font-semibold text-pink-600 dark:text-pink-400">Smart TV navigation</span>, and{" "}
            <span className="font-semibold text-red-600 dark:text-red-400">remote control support</span>.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-400/10 dark:bg-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Features Grid */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white text-xl">
            ✨
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Key Features</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3">🎥</div>
            <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-2">Shaka Player</h3>
            <p className="text-sm text-blue-800 dark:text-blue-300">Professional-grade streaming with adaptive bitrate</p>
          </div>
          <div className="group p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 border border-green-200 dark:border-green-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-bold text-green-900 dark:text-green-200 mb-2">Focus Management</h3>
            <p className="text-sm text-green-800 dark:text-green-300">Built-in spatial navigation for remote controls</p>
          </div>
          <div className="group p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 border border-purple-200 dark:border-purple-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="font-bold text-purple-900 dark:text-purple-200 mb-2">Customizable</h3>
            <p className="text-sm text-purple-800 dark:text-purple-300">Flexible component architecture</p>
          </div>
          <div className="group p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 border border-orange-200 dark:border-orange-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-bold text-orange-900 dark:text-orange-200 mb-2">Responsive</h3>
            <p className="text-sm text-orange-800 dark:text-orange-300">Works on TV, mobile, and desktop</p>
          </div>
          <div className="group p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/30 border border-red-200 dark:border-red-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3">🎭</div>
            <h3 className="font-bold text-red-900 dark:text-red-200 mb-2">Zero Dependencies</h3>
            <p className="text-sm text-red-800 dark:text-red-300">Self-contained state management</p>
          </div>
          <div className="group p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/30 dark:to-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="font-bold text-indigo-900 dark:text-indigo-200 mb-2">Multi-language</h3>
            <p className="text-sm text-indigo-800 dark:text-indigo-300">Audio tracks, subtitles, quality selection</p>
          </div>
          <div className="group p-6 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950/30 dark:to-teal-900/30 border border-teal-200 dark:border-teal-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-bold text-teal-900 dark:text-teal-200 mb-2">Tailwind CSS</h3>
            <p className="text-sm text-teal-800 dark:text-teal-300">Styled with utility classes</p>
          </div>
          <div className="group p-6 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/30 border border-pink-200 dark:border-pink-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3">📡</div>
            <h3 className="font-bold text-pink-900 dark:text-pink-200 mb-2">DRM Support</h3>
            <p className="text-sm text-pink-800 dark:text-pink-300">Protected content playback</p>
          </div>
        </div>
      </div>

      {/* Installation */}
      <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white text-xl">
            📦
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Installation</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Install the Smart TV Player package using your preferred package manager:
        </p>
        <CommandTabs
          commands={{
            npm: 'npm install @smart-tv/player',
            pnpm: 'pnpm add @smart-tv/player',
            yarn: 'yarn add @smart-tv/player',
            bun: 'bun add @smart-tv/player'
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
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-xl">
            🧩
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Core Components
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Essential building blocks for video playback
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group p-6 bg-white dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              VideoPlayer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
              Core video component with Shaka Player integration for streaming video content.
            </p>
            <code className="text-xs bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-md font-mono block">
              {'<VideoPlayer src="..." />'}
            </code>
          </div>
          <div className="group p-6 bg-white dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              PlayerController
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
              Customizable player controls with multiple layout styles and button configurations.
            </p>
            <code className="text-xs bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-md font-mono block">
              {'<PlayerController layoutStyle="youtube" />'}
            </code>
          </div>
          <div className="group p-6 bg-white dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              MediaProvider
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
              Context provider for player state management and event handling.
            </p>
            <code className="text-xs bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-md font-mono block">
              {'<MediaProvider>...</MediaProvider>'}
            </code>
          </div>
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
            href="/components/player/installation" 
            className="group block p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">📦</span>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Installation
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Package installation and setup instructions
            </p>
          </Link>
          <Link 
            href="/components/player/usage" 
            className="group block p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">⚙️</span>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Usage & Configuration
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Basic and advanced player configurations
            </p>
          </Link>
          <Link 
            href="/components/player/components" 
            className="group block p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🧩</span>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Components
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              All available components and their props
            </p>
          </Link>
          <Link 
            href="/components/player/hooks" 
            className="group block p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🪝</span>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Hooks
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              React hooks for player state management
            </p>
          </Link>
          <Link 
            href="/components/player/examples" 
            className="group block p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">💡</span>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Examples
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Sample implementations and configurations
            </p>
          </Link>
          <Link 
            href="/components/player/types" 
            className="group block p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">📘</span>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
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
