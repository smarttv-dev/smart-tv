import React from "react";
import CodePreview from "../../../../../components/CodePreview";

export default function ScreenDoc(): React.ReactElement {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Screen</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A full-screen container component that serves as the root for your application screens with automatic focus management.
        </p>
      </div>

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Import</h2>
        <CodePreview
          language="tsx"
          code={`import { Screen } from '@smart-tv/ui';`}
        />
      </div>

      {/* Basic Usage */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Basic Usage</h2>
        <CodePreview
          language="tsx"
          code={`import { AppProvider, Screen, Button } from '@smart-tv/ui';

function App() {
  return (
    <AppProvider>
      <Screen focusKey="home-screen">
        <h1>Welcome to My App</h1>
        <Button focusKey="start-button">Get Started</Button>
      </Screen>
    </AppProvider>
  );
}`}
        />
      </div>

      {/* Auto Focus */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Auto Focus on Mount</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Use <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">selFocus</code> to automatically focus the screen when it mounts.
        </p>
        <CodePreview
          language="tsx"
          code={`<Screen 
  focusKey="main-screen" 
  selFocus // Automatically focuses this screen on mount
>
  <YourContent />
</Screen>`}
        />
      </div>

      {/* Custom Element */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Custom Root Element</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Use the <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">as</code> prop to render Screen as a different element type.
        </p>
        <CodePreview
          language="tsx"
          code={`// Render as main element
<Screen focusKey="home" as="main">
  <YourContent />
</Screen>

// Render as section
<Screen focusKey="settings" as="section" className="settings-screen">
  <YourContent />
</Screen>`}
        />
      </div>

      {/* Track Children */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Track Child Focus</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Enable <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">trackChildren</code> and <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">saveLastFocusedChild</code> to remember the last focused child when returning to this screen.
        </p>
        <CodePreview
          language="tsx"
          code={`<Screen
  focusKey="main"
  trackChildren
  saveLastFocusedChild
>
  <Row focusKey="row-1">
    <Button focusKey="btn-1">Button 1</Button>
    <Button focusKey="btn-2">Button 2</Button>
  </Row>
  {/* When returning to this screen, it will restore focus to the last focused button */}
</Screen>`}
        />
      </div>

      {/* Focus Boundary */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Focus Boundary</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Create focus boundaries to restrict navigation within the screen.
        </p>
        <CodePreview
          language="tsx"
          code={`<Screen
  focusKey="modal-screen"
  isFocusBoundary
  focusBoundaryDirections={['up', 'down', 'left', 'right']}
>
  <div>
    {/* Focus cannot escape this screen in any direction */}
    <Button focusKey="ok">OK</Button>
    <Button focusKey="cancel">Cancel</Button>
  </div>
</Screen>`}
        />
      </div>

      {/* With Router */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">With Router</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Each route typically has its own Screen component.
        </p>
        <CodePreview
          language="tsx"
          code={`import { RouterProvider, Route, Screen } from '@smart-tv/ui';

function HomeScreen() {
  return (
    <Screen focusKey="home" selFocus>
      <h1>Home</h1>
    </Screen>
  );
}

function SettingsScreen() {
  return (
    <Screen focusKey="settings" selFocus>
      <h1>Settings</h1>
    </Screen>
  );
}

function App() {
  return (
    <AppProvider>
      <RouterProvider initial="/">
        <Route path="/" component={HomeScreen} />
        <Route path="/settings" component={SettingsScreen} />
      </RouterProvider>
    </AppProvider>
  );
}`}
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
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">required</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Unique identifier for the screen</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">selFocus</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Auto-focus this screen on mount</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">as</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">ElementType</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">div</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">HTML element type to render</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">trackChildren</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Track child component focus</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">saveLastFocusedChild</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Restore focus to last child</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">isFocusBoundary</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Restrict focus within screen</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">focusBoundaryDirections</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Direction[]</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Directions to restrict</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">className</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">CSS class names</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Best Practices */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Use one Screen component per route or major view</li>
          <li>Always provide a unique focusKey for each screen</li>
          <li>Use selFocus to automatically focus when screen appears</li>
          <li>Enable trackChildren and saveLastFocusedChild for better UX when navigating back</li>
          <li>Use isFocusBoundary for modal or dialog screens to trap focus</li>
          <li>Combine with Section components for complex layouts</li>
        </ul>
      </div>
    </div>
  );
}
