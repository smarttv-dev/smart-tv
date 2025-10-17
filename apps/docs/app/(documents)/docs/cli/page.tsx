import React from 'react';
import { CodePreview } from '../../../../components';
import CommandTabs from '../../../../components/CommandTabs';

const quickUsage = {
  npx: 'npx create-smart-tv-app my-smart-tv-app',
  pnpm: 'pnpm create smart-tv-app my-smart-tv-app',
  npm: 'npm create smart-tv-app@latest my-smart-tv-app',
  yarn: 'yarn create smart-tv-app my-smart-tv-app'
};

const afterCreation = `cd my-smart-tv-app
npm install
npm run dev
`;

export default function CliPage(): React.ReactElement {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">CLI — create-smart-tv-app</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">A CLI to scaffold Smart TV apps quickly.</p>

      <section className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Quick usage</h2>
        <div className="mt-3">
          <CommandTabs commands={quickUsage} />
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Options</h2>
        <ul className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          <li><strong>--help, -h</strong> Show help</li>
          <li><strong>--version, -v</strong> Show CLI version</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">What the CLI does</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 my-2">The CLI copies a bundled template into your destination folder, updates package.json with project name and smart-tv dependencies, and prints next steps.</p>
        <CodePreview code={afterCreation} />
      </section>
    </div>
  );
}
