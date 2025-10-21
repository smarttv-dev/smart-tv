/* eslint-disable react/no-unescaped-entities */
import { CodePreview } from "@/components";
import CommandTabs from "@/components/CommandTabs";

const installer = {
  pnpm: "pnpm add @smart-tv/player",
  npm: "npm install @smart-tv/player",
  yarn: "yarn add @smart-tv/player",
};

export default function PlayerInstallation() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Installation
        </h1>
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
          Learn how to install and set up the Smart TV Player in your project.
        </p>
      </div>

      {/* Package Installation */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Package Installation
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Install the Smart TV Player package using your preferred package
          manager:
        </p>

        <div className="space-y-4">
          <CommandTabs commands={installer} />
        </div>
      </div>

      {/* Dependencies */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Dependencies
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          The Smart TV Player has the following peer dependencies that need to
          be installed in your project:
        </p>

        <div className="mb-4 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-700 dark:bg-yellow-900/20">
          <h3 className="mb-2 font-semibold text-yellow-800 dark:text-yellow-200">
            Required Peer Dependencies
          </h3>
          <ul className="space-y-1 text-sm text-yellow-700 dark:text-yellow-300">
            <li>• React ≥16.8.0</li>
            <li>• React DOM ≥16.8.0</li>
          </ul>
        </div>

        <CodePreview code="npm install react react-dom" language="bash" />
      </div>

      {/* CSS Import */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          CSS Styles
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Import the required CSS styles in your application. You can do this in
          several ways:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-lg font-semibold">
              Option 1: Import in your main CSS file
            </h3>
            <CodePreview
              code='@import "@smart-tv/player/styles.css";'
              language="sh"
            />
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">
              Option 2: Import in your JavaScript/TypeScript file
            </h3>
            <CodePreview
              code={`import React from 'react';
import '@smart-tv/player/styles.css';
// Your other imports...`}
              language="tsx"
            />
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">
              Option 3: Import in Next.js _app.tsx
            </h3>
            <CodePreview
              code={`import '@smart-tv/player/styles.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}`}
              language="tsx"
            />
          </div>
        </div>
      </div>

      {/* Tailwind CSS Configuration */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Tailwind CSS Configuration
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          The Smart TV Player uses Tailwind CSS with a custom prefix. If
          you&apos;re using Tailwind CSS in your project, you may want to
          include the player package in your Tailwind configuration:
        </p>

        <CodePreview
          code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // Include Smart TV Player components
    './node_modules/@smart-tv/player/dist/**/*.{js,mjs}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
          language="js"
        />

        <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-700 dark:bg-blue-900/20">
          <h3 className="mb-2 font-semibold text-blue-800 dark:text-blue-200">
            Note about CSS Prefixes
          </h3>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            The Smart TV Player uses the prefix{" "}
            <code className="rounded bg-blue-100 px-1 dark:bg-blue-800">
              player-
            </code>{" "}
            for all Tailwind classes to avoid conflicts with your project&apos;s
            styles. This means you don&apos;t need to worry about CSS conflicts
            when integrating the player.
          </p>
        </div>
      </div>

      {/* TypeScript Support */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          TypeScript Support
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          The Smart TV Player is built with TypeScript and includes full type
          definitions. No additional @types packages are required.
        </p>

        <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-700 dark:bg-green-900/20">
          <h3 className="mb-2 font-semibold text-green-800 dark:text-green-200">
            ✅ TypeScript Ready
          </h3>
          <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
            <li>• Full TypeScript support out of the box</li>
            <li>• Comprehensive type definitions for all components</li>
            <li>• IntelliSense support in VS Code</li>
            <li>• Type-safe prop validation</li>
          </ul>
        </div>
      </div>

      {/* Verification */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Verify Installation
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Create a simple test component to verify that the installation was
          successful:
        </p>

        <CodePreview
          code={`import React from 'react';
import { VideoPlayer, MediaProvider } from '@smart-tv/player';
import '@smart-tv/player/styles.css';

function TestPlayer() {
  return (
    <MediaProvider>
      <div className="w-full h-64 bg-black rounded-lg">
        <VideoPlayer
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
          onReady={() => console.log('Player is ready!')}
        />
      </div>
    </MediaProvider>
  );
}

export default TestPlayer;`}
          language="tsx"
        />

        <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
          <h3 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">
            Expected Result
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            If the installation was successful, you should see a video player
            with the Big Buck Bunny sample video. Check the browser console for
            the "Player is ready!" message.
          </p>
        </div>
      </div>

      {/* Troubleshooting */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Troubleshooting
        </h2>

        <div className="space-y-4">
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
              Module not found errors
            </h3>
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
              If you see module not found errors, ensure all peer dependencies
              are installed:
            </p>
            <CodePreview code="npm ls react react-dom" language="bash" />
          </div>

          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
              Styles not loading
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Make sure you've imported the CSS file. The styles are required
              for proper player functionality.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
              TypeScript errors
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Ensure your TypeScript version is compatible (≥4.5.0). The package
              includes its own type definitions.
            </p>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Next Steps
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <a
            href="/components/player/usage"
            className="block rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-500 hover:shadow-sm dark:border-gray-700 dark:hover:border-blue-400"
          >
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
              → Usage & Configuration
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Learn how to configure and use the player components
            </p>
          </a>
          <a
            href="/components/player/examples"
            className="block rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-500 hover:shadow-sm dark:border-gray-700 dark:hover:border-blue-400"
          >
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
              → Examples
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              See real-world examples and implementations
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
