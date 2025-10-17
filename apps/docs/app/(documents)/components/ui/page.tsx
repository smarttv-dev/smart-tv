import Link from "next/link";
import React from "react";
import CodePreview from "../../../../components/CodePreview";
import CommandTabs from "../../../../components/CommandTabs";

export default function UIComponentsIndex(): React.ReactElement {
  const coreComponents = [
    {
      name: "AppProvider",
      path: "/components/ui/app-provider",
      description: "⭐ REQUIRED - Root provider for Smart TV navigation system",
      required: true
    },
    {
      name: "Screen",
      path: "/components/ui/screen",
      description: "Full-screen container with focus context"
    },
    {
      name: "Section",
      path: "/components/ui/section",
      description: "Section container for content grouping"
    },
    {
      name: "Router",
      path: "/components/ui/router",
      description: "Client-side routing with history management"
    },
  ];

  const uiComponents = [
    {
      name: "Button",
      path: "/components/ui/button",
      description: "Focusable button with enter/arrow handlers"
    },
    {
      name: "Card",
      path: "/components/ui/card",
      description: "Container with Header, Content, Footer"
    },
    {
      name: "Menu",
      path: "/components/ui/menu",
      description: "Navigation menu component"
    },
    {
      name: "Navbar",
      path: "/components/ui/navbar",
      description: "Top navigation bar"
    },
    {
      name: "Sidebar",
      path: "/components/ui/sidebar",
      description: "Collapsible side navigation"
    },
  ];

  const layoutComponents = [
    {
      name: "Grid",
      path: "/components/ui/grid",
      description: "Grid layout with virtualization & infinite scroll"
    },
    {
      name: "Row",
      path: "/components/ui/row",
      description: "Horizontal scrollable row with virtualization"
    },
  ];

  const overlayComponents = [
    {
      name: "Dialog",
      path: "/components/ui/dialog",
      description: "Modal dialog with focus trap"
    },
    {
      name: "Drawer",
      path: "/components/ui/drawer",
      description: "Slide-in panel from edges"
    },
    {
      name: "Snackbar",
      path: "/components/ui/snackbar",
      description: "Toast notifications"
    },
    {
      name: "Tooltip",
      path: "/components/ui/tooltip",
      description: "Contextual tooltips"
    },
  ];

  const inputComponents = [
    {
      name: "Keyboard",
      path: "/components/ui/keyboard",
      description: "On-screen keyboard with multiple layouts"
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 md:p-12 border border-blue-200 dark:border-blue-800">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/50 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
            <span className="text-lg">🎯</span>
            Smart TV Development
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            UI Components
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl leading-relaxed">
            Production-ready components for building Smart TV applications with{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">Smart TV navigation</span>,{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">focus management</span>, and{" "}
            <span className="font-semibold text-pink-600 dark:text-pink-400">remote control support</span>.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Critical Notice */}
      <div className="relative bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-red-950/30 border-l-4 border-amber-500 dark:border-amber-400 rounded-xl p-6 md:p-8 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center text-2xl">
            ⚠️
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100">
                AppProvider is Mandatory!
              </h3>
              <span className="px-2 py-1 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 text-xs font-bold rounded-md uppercase">
                Required
              </span>
            </div>
            <p className="text-amber-900 dark:text-amber-100 mb-3 leading-relaxed">
              <strong>All Smart TV components require AppProvider</strong> to work. It initializes the Smart TV navigation 
              system and manages focus throughout your application.
            </p>
            <div className="bg-amber-100/50 dark:bg-amber-900/30 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
              <p className="text-sm text-amber-900 dark:text-amber-100">
                💡 <strong>Quick Tip:</strong> Always wrap your app&apos;s root component with{" "}
                <code className="px-2 py-1 bg-amber-200 dark:bg-amber-800 rounded font-mono text-sm font-semibold">
                  AppProvider
                </code>{" "}
                before using any other UI component.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Installation */}
      <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl">
            📦
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Installation</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Install the Smart TV UI package using your preferred package manager:
        </p>
        <CommandTabs
          commands={{
            npm: 'npm install @smart-tv/ui',
            pnpm: 'pnpm add @smart-tv/ui',
            yarn: 'yarn add @smart-tv/ui',
            bun: 'bun add @smart-tv/ui'
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
          Get your Smart TV app up and running in minutes with this minimal example:
        </p>
        <CodePreview
          language="tsx"
          code={`import { AppProvider, Screen, Button, Grid, Card } from '@smart-tv/ui';
import '@smart-tv/ui/styles.css';

function App() {
  return (
    <AppProvider 
      init={{
        debug: false,
        throttle: 0
      }}
    >
      <Screen focusKey="home" trackChildren>
        <h1>Welcome to Smart TV</h1>
        
        <Grid focusKey="content-grid" columns={4} gap={16}>
          {movies.map((movie) => (
            <Card 
              key={movie.id}
              focusKey={\`movie-\${movie.id}\`}
              onEnterPress={() => playMovie(movie)}
            >
              <img src={movie.poster} alt={movie.title} />
              <h3>{movie.title}</h3>
            </Card>
          ))}
        </Grid>
      </Screen>
    </AppProvider>
  );
}`}
        />
      </div>

      {/* Core Components */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-xl">
            ⚡
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Core Components
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Foundation components required for Smart TV applications
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreComponents.map((component) => (
            <Link
              key={component.path}
              href={component.path}
              className="group relative block p-6 bg-white dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {component.name}
                </h3>
                {component.required && (
                  <span className="flex-shrink-0 px-2.5 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-md uppercase shadow-sm">
                    Required
                  </span>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {component.description}
              </p>
              <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* UI Components */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white text-xl">
            🎨
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              UI Components
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Interactive components for navigation and user interaction
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {uiComponents.map((component) => (
            <Link
              key={component.path}
              href={component.path}
              className="group block p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {component.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {component.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Layout Components */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-xl">
            📐
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Layout Components
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Advanced layouts with virtualization and infinite scroll
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {layoutComponents.map((component) => (
            <Link
              key={component.path}
              href={component.path}
              className="group block p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-2 border-cyan-200 dark:border-cyan-800 rounded-xl hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {component.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {component.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay Components */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl">
            🪟
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Overlays
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Modal dialogs, drawers, and notification components
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {overlayComponents.map((component) => (
            <Link
              key={component.path}
              href={component.path}
              className="group block p-5 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 border border-violet-200 dark:border-violet-800 rounded-xl hover:border-violet-500 dark:hover:border-violet-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {component.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {component.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Input Components */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-xl">
            ⌨️
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Input Components
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              On-screen keyboard and input controls
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inputComponents.map((component) => (
            <Link
              key={component.path}
              href={component.path}
              className="group block p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-2 border-emerald-200 dark:border-emerald-800 rounded-xl hover:border-emerald-500 dark:hover:border-emerald-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {component.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {component.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900/50 dark:to-gray-900/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl">
            ✨
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Key Features</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3">🎯</div>
            <h4 className="font-bold text-white text-lg mb-2">Smart TV Navigation</h4>
            <p className="text-blue-100 text-sm leading-relaxed">
              Navigate using arrow keys and D-pad with intelligent focus management
            </p>
          </div>
          <div className="group p-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3">🚀</div>
            <h4 className="font-bold text-white text-lg mb-2">Virtualization</h4>
            <p className="text-green-100 text-sm leading-relaxed">
              Render large lists efficiently with built-in virtualization
            </p>
          </div>
          <div className="group p-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3">♾️</div>
            <h4 className="font-bold text-white text-lg mb-2">Infinite Scroll</h4>
            <p className="text-purple-100 text-sm leading-relaxed">
              Load more content automatically as users scroll
            </p>
          </div>
          <div className="group p-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3">🌐</div>
            <h4 className="font-bold text-white text-lg mb-2">RTL Support</h4>
            <p className="text-orange-100 text-sm leading-relaxed">
              Right-to-left layout support for international apps
            </p>
          </div>
          <div className="group p-6 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3">🎨</div>
            <h4 className="font-bold text-white text-lg mb-2">Customizable</h4>
            <p className="text-pink-100 text-sm leading-relaxed">
              Full styling control with className and active states
            </p>
          </div>
          <div className="group p-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3">📘</div>
            <h4 className="font-bold text-white text-lg mb-2">TypeScript</h4>
            <p className="text-cyan-100 text-sm leading-relaxed">
              Complete type safety with TypeScript definitions
            </p>
          </div>
        </div>
      </div>

      {/* Focus Key Best Practices */}
      <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center text-white text-xl">
            💡
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Focus Key Best Practices</h2>
          </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 rounded-lg p-6 mb-6 border border-yellow-200 dark:border-yellow-800">
          <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
            Every focusable component requires a unique{" "}
            <code className="px-2 py-1 bg-yellow-200 dark:bg-yellow-800 rounded font-mono text-sm font-semibold">
              focusKey
            </code>
            . Follow these conventions for maintainable and scalable code:
          </p>
        </div>
        <CodePreview
          language="tsx"
          code={`// ✅ Good: Descriptive, hierarchical, unique
<Button focusKey="home-hero-play-button">Play</Button>
<Card focusKey="movie-card-123">Movie Card</Card>
<Grid focusKey="trending-movies-grid">...</Grid>

// ❌ Bad: Generic, unclear, duplicate risk
<Button focusKey="btn1">Play</Button>
<Card focusKey="card">Movie Card</Card>
<Grid focusKey="grid">...</Grid>

// 💡 Tip: Use template literals for dynamic content
{movies.map((movie) => (
  <Card focusKey={\`movie-\${movie.id}\`} key={movie.id}>
    {movie.title}
  </Card>
))}`}
        />
      </div>
    </div>
  );
}
