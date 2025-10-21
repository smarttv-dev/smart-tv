import Link from "next/link";
import React from "react";
import CodePreview from "@/components/CodePreview";
import CommandTabs from "@/components/CommandTabs";

export default function UIComponentsIndex(): React.ReactElement {
  const coreComponents = [
    {
      name: "AppProvider",
      path: "/components/ui/app-provider",
      description: "⭐ REQUIRED - Root provider for Smart TV navigation system",
      required: true,
    },
    {
      name: "Screen",
      path: "/components/ui/screen",
      description: "Full-screen container with focus context",
    },
    {
      name: "Section",
      path: "/components/ui/section",
      description: "Section container for content grouping",
    },
    {
      name: "Router",
      path: "/components/ui/router",
      description: "Client-side routing with history management",
    },
  ];

  const uiComponents = [
    {
      name: "Button",
      path: "/components/ui/button",
      description: "Focusable button with enter/arrow handlers",
    },
    {
      name: "Card",
      path: "/components/ui/card",
      description: "Container with Header, Content, Footer",
    },
    {
      name: "Menu",
      path: "/components/ui/menu",
      description: "Navigation menu component",
    },
    {
      name: "Navbar",
      path: "/components/ui/navbar",
      description: "Top navigation bar",
    },
    {
      name: "Sidebar",
      path: "/components/ui/sidebar",
      description: "Collapsible side navigation",
    },
  ];

  const layoutComponents = [
    {
      name: "Grid",
      path: "/components/ui/grid",
      description: "Grid layout with virtualization & infinite scroll",
    },
    {
      name: "Row",
      path: "/components/ui/row",
      description: "Horizontal scrollable row with virtualization",
    },
  ];

  const overlayComponents = [
    {
      name: "Dialog",
      path: "/components/ui/dialog",
      description: "Modal dialog with focus trap",
    },
    {
      name: "Drawer",
      path: "/components/ui/drawer",
      description: "Slide-in panel from edges",
    },
    {
      name: "Snackbar",
      path: "/components/ui/snackbar",
      description: "Toast notifications",
    },
    {
      name: "Tooltip",
      path: "/components/ui/tooltip",
      description: "Contextual tooltips",
    },
  ];

  const inputComponents = [
    {
      name: "Keyboard",
      path: "/components/ui/keyboard",
      description: "On-screen keyboard with multiple layouts",
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 md:p-12 dark:border-blue-800 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
            <span className="text-lg">🎯</span>
            Smart TV Development
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            UI Components
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-gray-700 dark:text-gray-200">
            Production-ready components for building Smart TV applications with{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Smart TV navigation
            </span>
            ,{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              focus management
            </span>
            , and{" "}
            <span className="font-semibold text-pink-600 dark:text-pink-400">
              remote control support
            </span>
            .
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-600/10"></div>
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-purple-400/10 blur-3xl dark:bg-purple-600/10"></div>
      </div>

      {/* Critical Notice */}
      <div className="relative rounded-xl border-l-4 border-amber-500 bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 p-6 shadow-lg md:p-8 dark:border-amber-400 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-red-950/30">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-amber-100 text-2xl dark:bg-amber-900/50">
            ⚠️
          </div>
          <div className="flex-1">
            <div className="mb-3 flex items-center gap-2">
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100">
                AppProvider is Mandatory!
              </h3>
              <span className="rounded-md bg-red-100 px-2 py-1 text-xs font-bold uppercase text-red-700 dark:bg-red-900/50 dark:text-red-300">
                Required
              </span>
            </div>
            <p className="mb-3 leading-relaxed text-amber-900 dark:text-amber-100">
              <strong>All Smart TV components require AppProvider</strong> to
              work. It initializes the Smart TV navigation system and manages
              focus throughout your application.
            </p>
            <div className="rounded-lg border border-amber-200 bg-amber-100/50 p-4 dark:border-amber-800 dark:bg-amber-900/30">
              <p className="text-sm text-amber-900 dark:text-amber-100">
                💡 <strong>Quick Tip:</strong> Always wrap your app&apos;s root
                component with{" "}
                <code className="rounded bg-amber-200 px-2 py-1 font-mono text-sm font-semibold dark:bg-amber-800">
                  AppProvider
                </code>{" "}
                before using any other UI component.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Installation */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8 dark:border-gray-700 dark:bg-gray-800/50">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-xl text-white">
            📦
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Installation
          </h2>
        </div>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Install the Smart TV UI package using your preferred package manager:
        </p>
        <CommandTabs
          commands={{
            npm: "npm install @smart-tv/ui",
            pnpm: "pnpm add @smart-tv/ui",
            yarn: "yarn add @smart-tv/ui",
            bun: "bun add @smart-tv/ui",
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
          Get your Smart TV app up and running in minutes with this minimal
          example:
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
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-xl text-white">
            ⚡
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Core Components
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Foundation components required for Smart TV applications
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {coreComponents.map((component) => (
            <Link
              key={component.path}
              href={component.path}
              className="group relative block rounded-xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-blue-400"
            >
              <div className="mb-3 flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
                  {component.name}
                </h3>
                {component.required && (
                  <span className="flex-shrink-0 rounded-md bg-gradient-to-r from-red-500 to-pink-500 px-2.5 py-1 text-xs font-bold uppercase text-white shadow-sm">
                    Required
                  </span>
                )}
              </div>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                {component.description}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                Learn more
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
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
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* UI Components */}
      <div>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 text-xl text-white">
            🎨
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              UI Components
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Interactive components for navigation and user interaction
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {uiComponents.map((component) => (
            <Link
              key={component.path}
              href={component.path}
              className="group block rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500 hover:shadow-lg dark:border-gray-700 dark:from-gray-800/50 dark:to-gray-800/30 dark:hover:border-purple-400"
            >
              <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
                {component.name}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {component.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Layout Components */}
      <div>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-xl text-white">
            📐
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Layout Components
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Advanced layouts with virtualization and infinite scroll
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {layoutComponents.map((component) => (
            <Link
              key={component.path}
              href={component.path}
              className="group block rounded-xl border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-xl dark:border-cyan-800 dark:from-cyan-950/20 dark:to-blue-950/20 dark:hover:border-cyan-400"
            >
              <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-cyan-600 dark:text-gray-100 dark:group-hover:text-cyan-400">
                {component.name}
              </h3>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                {component.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay Components */}
      <div>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 text-xl text-white">
            🪟
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Overlays
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Modal dialogs, drawers, and notification components
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {overlayComponents.map((component) => (
            <Link
              key={component.path}
              href={component.path}
              className="group block rounded-xl border border-violet-200 bg-gradient-to-br from-violet-50 to-purple-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500 hover:shadow-lg dark:border-violet-800 dark:from-violet-950/20 dark:to-purple-950/20 dark:hover:border-violet-400"
            >
              <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-violet-600 dark:text-gray-100 dark:group-hover:text-violet-400">
                {component.name}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {component.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Input Components */}
      <div>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-xl text-white">
            ⌨️
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Input Components
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              On-screen keyboard and input controls
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {inputComponents.map((component) => (
            <Link
              key={component.path}
              href={component.path}
              className="group block rounded-xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-xl dark:border-emerald-800 dark:from-emerald-950/20 dark:to-teal-950/20 dark:hover:border-emerald-400"
            >
              <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-gray-100 dark:group-hover:text-emerald-400">
                {component.name}
              </h3>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                {component.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-gray-100 p-8 dark:border-slate-700 dark:from-slate-900/50 dark:to-gray-900/50">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-xl text-white">
            ✨
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Key Features
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mb-3 text-4xl">🎯</div>
            <h4 className="mb-2 text-lg font-bold text-white">
              Smart TV Navigation
            </h4>
            <p className="text-sm leading-relaxed text-blue-100">
              Navigate using arrow keys and D-pad with intelligent focus
              management
            </p>
          </div>
          <div className="group rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mb-3 text-4xl">🚀</div>
            <h4 className="mb-2 text-lg font-bold text-white">
              Virtualization
            </h4>
            <p className="text-sm leading-relaxed text-green-100">
              Render large lists efficiently with built-in virtualization
            </p>
          </div>
          <div className="group rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mb-3 text-4xl">♾️</div>
            <h4 className="mb-2 text-lg font-bold text-white">
              Infinite Scroll
            </h4>
            <p className="text-sm leading-relaxed text-purple-100">
              Load more content automatically as users scroll
            </p>
          </div>
          <div className="group rounded-xl bg-gradient-to-br from-orange-500 to-red-600 p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mb-3 text-4xl">🌐</div>
            <h4 className="mb-2 text-lg font-bold text-white">RTL Support</h4>
            <p className="text-sm leading-relaxed text-orange-100">
              Right-to-left layout support for international apps
            </p>
          </div>
          <div className="group rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mb-3 text-4xl">🎨</div>
            <h4 className="mb-2 text-lg font-bold text-white">Customizable</h4>
            <p className="text-sm leading-relaxed text-pink-100">
              Full styling control with className and active states
            </p>
          </div>
          <div className="group rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mb-3 text-4xl">📘</div>
            <h4 className="mb-2 text-lg font-bold text-white">TypeScript</h4>
            <p className="text-sm leading-relaxed text-cyan-100">
              Complete type safety with TypeScript definitions
            </p>
          </div>
        </div>
      </div>

      {/* Focus Key Best Practices */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8 dark:border-gray-700 dark:bg-gray-800/50">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 text-xl text-white">
            💡
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Focus Key Best Practices
            </h2>
          </div>
        </div>
        <div className="mb-6 rounded-lg border border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 dark:border-yellow-800 dark:from-yellow-950/20 dark:to-orange-950/20">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
            Every focusable component requires a unique{" "}
            <code className="rounded bg-yellow-200 px-2 py-1 font-mono text-sm font-semibold dark:bg-yellow-800">
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
