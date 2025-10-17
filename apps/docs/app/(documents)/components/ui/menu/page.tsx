import React from "react";
import CodePreview from "../../../../../components/CodePreview";

export default function MenuDoc(): React.ReactElement {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Menu</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Navigation menu item component with routing support, focus management, and remote control interaction.
        </p>
      </div>

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Import</h2>
        <CodePreview
          language="tsx"
          code={`import { Menu } from '@smart-tv/ui';`}
        />
      </div>

      {/* Basic Usage */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Basic Usage</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Create a simple menu item with click handler.
        </p>
        <CodePreview
          language="tsx"
          code={`<Menu 
  focusKey="home-menu"
  onEnterPress={() => console.log('Home selected')}
>
  Home
</Menu>`}
        />
      </div>

      {/* With Navigation */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">With Navigation (href)</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Menu items can navigate to routes using the <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">href</code> prop. This integrates with your router automatically.
        </p>
        <CodePreview
          language="tsx"
          code={`<Menu 
  focusKey="movies-menu"
  href="/movies"
>
  Movies
</Menu>

<Menu 
  focusKey="shows-menu"
  href="/shows"
>
  TV Shows
</Menu>`}
        />
      </div>

      {/* External Links */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">External Links</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Open external links in a new window with <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">target</code> and <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">rel</code> props.
        </p>
        <CodePreview
          language="tsx"
          code={`<Menu 
  focusKey="external-menu"
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  External Site
</Menu>`}
        />
      </div>

      {/* Styled Menu */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Styled Menu Items</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Customize menu appearance and focus states.
        </p>
        <CodePreview
          language="tsx"
          code={`<Menu 
  focusKey="styled-menu"
  className="px-4 py-3 text-gray-700 dark:text-gray-200"
  active="bg-blue-500 text-white font-bold"
  href="/profile"
>
  Profile
</Menu>`}
        />
      </div>

      {/* With Icons */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Menu with Icons</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Include icons or other elements within menu items.
        </p>
        <CodePreview
          language="tsx"
          code={`<Menu 
  focusKey="settings-menu"
  className="flex items-center gap-3 px-4 py-3"
  active="bg-blue-500 text-white"
  href="/settings"
>
  <SettingsIcon />
  <span>Settings</span>
</Menu>`}
        />
      </div>

      {/* Render Props */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Render Props Pattern</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Dynamically render menu content based on focus state.
        </p>
        <CodePreview
          language="tsx"
          code={`<Menu 
  focusKey="dynamic-menu"
  href="/movies"
>
  {({ focused }) => (
    <div className={\`flex items-center gap-2 \${focused ? 'text-blue-500' : ''}\`}>
      {focused && '▶'}
      <span>Movies</span>
    </div>
  )}
</Menu>`}
        />
      </div>

      {/* Mouse Hover */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Mouse Hover Support</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Enable hover support for hybrid TV/web apps.
        </p>
        <CodePreview
          language="tsx"
          code={`<Menu 
  focusKey="hover-menu"
  hover={true}
  href="/search"
>
  Search
</Menu>`}
        />
      </div>

      {/* Props Reference */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 dark:border-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Prop</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Type</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Default</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">focusKey</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Required. Unique identifier for navigation</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">href</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">URL to navigate to on Enter press</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">target</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Link target (_blank, _self, etc.)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">rel</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Link relationship (noopener, etc.)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">onEnterPress</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">function</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Called when Enter/OK is pressed</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">onEnterRelease</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">function</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Called when Enter/OK is released</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">onFocus</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">function</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Called when menu receives focus</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">onBlur</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">function</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Called when menu loses focus</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">onArrowPress</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">function</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Called when arrow keys are pressed</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">className</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">CSS classes for the menu</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">active</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">CSS classes when focused</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">disabled</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Disable menu interactions</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">hover</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Enable mouse hover support</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">payload</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">any</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Data passed to event handlers</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">children</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">ReactNode | function</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Menu content or render function</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Best Practices */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Use unique <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">focusKey</code> values for each menu item</li>
          <li>Provide clear visual feedback with the <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">active</code> prop</li>
          <li>Use <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">href</code> for navigation to integrate with your router</li>
          <li>Group related menu items in a <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">Navbar</code> or <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">Sidebar</code> component</li>
          <li>Make menu items large enough for easy remote control selection (min 48px height)</li>
        </ul>
      </div>
    </div>
  );
}
