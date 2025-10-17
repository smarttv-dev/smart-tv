import React from "react";
import CodePreview from "../../../../../components/CodePreview";

export default function SnackbarDoc(): React.ReactElement {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Snackbar</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Brief, auto-dismissing notification messages that appear at the edge of the screen.
        </p>
      </div>

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Import</h2>
        <CodePreview
          language="tsx"
          code={`import { Snackbar } from '@smart-tv/ui';`}
        />
      </div>

      {/* Basic Usage */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Basic Usage</h2>
        <CodePreview
          language="tsx"
          code={`import { useState } from 'react';
import { Snackbar, Button } from '@smart-tv/ui';

function App() {
  const [open, setOpen] = useState(false);
  
  const showSnackbar = () => {
    setOpen(true);
  };
  
  return (
    <>
      <Button focusKey="show" onEnterPress={showSnackbar}>
        Show Notification
      </Button>
      
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        message="Settings saved successfully!"
      />
    </>
  );
}`}
        />
      </div>

      {/* Duration */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Auto-Hide Duration</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Control how long the snackbar stays visible before auto-dismissing.
        </p>
        <CodePreview
          language="tsx"
          code={`// Auto-hide after 3 seconds (default)
<Snackbar
  open={open}
  onClose={handleClose}
  message="Quick notification"
  duration={3000}
/>

// Auto-hide after 5 seconds
<Snackbar
  open={open}
  onClose={handleClose}
  message="Longer notification"
  duration={5000}
/>

// Don't auto-hide (null duration)
<Snackbar
  open={open}
  onClose={handleClose}
  message="Stays until manually closed"
  duration={null}
/>`}
        />
      </div>

      {/* Placement */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Placement</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Position the snackbar at different locations on screen.
        </p>
        <CodePreview
          language="tsx"
          code={`// Bottom center (default)
<Snackbar
  open={open}
  placement="bottom-center"
  message="Bottom center notification"
/>

// Bottom left
<Snackbar
  open={open}
  placement="bottom-left"
  message="Bottom left notification"
/>

// Bottom right
<Snackbar
  open={open}
  placement="bottom-right"
  message="Bottom right notification"
/>

// Top positions
<Snackbar
  open={open}
  placement="top-center"
  message="Top center notification"
/>

<Snackbar
  open={open}
  placement="top-left"
  message="Top left notification"
/>

<Snackbar
  open={open}
  placement="top-right"
  message="Top right notification"
/>`}
        />
      </div>

      {/* With Action */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">With Action Button</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Add an action button for user interaction.
        </p>
        <CodePreview
          language="tsx"
          code={`<Snackbar
  open={open}
  onClose={handleClose}
  message="Item deleted"
  action={{
    label: "Undo",
    onClick: handleUndo,
    focusKey: "undo-action"
  }}
/>

// Action with custom styling
<Snackbar
  open={open}
  onClose={handleClose}
  message="Download complete"
  action={{
    label: "Open",
    onClick: handleOpen,
    focusKey: "open-action",
    className: "text-blue-400 font-semibold"
  }}
/>`}
        />
      </div>

      {/* Pause on Hover */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Pause on Hover/Focus</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Prevent auto-hide when user interacts with the snackbar.
        </p>
        <CodePreview
          language="tsx"
          code={`<Snackbar
  open={open}
  onClose={handleClose}
  message="Pauses on interaction"
  duration={5000}
  pauseOnHover={true}
  action={{
    label: "Retry",
    onClick: handleRetry,
    focusKey: "retry-btn"
  }}
/>`}
        />
      </div>

      {/* Variants */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Variants</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Different styles for different message types.
        </p>
        <CodePreview
          language="tsx"
          code={`// Success message
<Snackbar
  open={open}
  message="Action completed successfully!"
  variant="success"
  className="bg-green-600 text-white"
/>

// Error message
<Snackbar
  open={open}
  message="Something went wrong"
  variant="error"
  className="bg-red-600 text-white"
/>

// Warning message
<Snackbar
  open={open}
  message="Please check your connection"
  variant="warning"
  className="bg-amber-600 text-white"
/>

// Info message
<Snackbar
  open={open}
  message="New features available"
  variant="info"
  className="bg-blue-600 text-white"
/>`}
        />
      </div>

      {/* Multiple Snackbars */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Queue Management</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Manage multiple notifications with a queue system.
        </p>
        <CodePreview
          language="tsx"
          code={`import { useState } from 'react';

function App() {
  const [snackbars, setSnackbars] = useState<Array<{
    id: number;
    message: string;
    open: boolean;
  }>>([]);
  
  const showSnackbar = (message: string) => {
    const id = Date.now();
    setSnackbars(prev => [...prev, { id, message, open: true }]);
  };
  
  const closeSnackbar = (id: number) => {
    setSnackbars(prev => 
      prev.map(s => s.id === id ? { ...s, open: false } : s)
    );
    // Remove after animation
    setTimeout(() => {
      setSnackbars(prev => prev.filter(s => s.id !== id));
    }, 300);
  };
  
  return (
    <>
      <Button onEnterPress={() => showSnackbar('First notification')}>
        Show Notification
      </Button>
      
      {snackbars.map((snackbar, index) => (
        <Snackbar
          key={snackbar.id}
          open={snackbar.open}
          message={snackbar.message}
          onClose={() => closeSnackbar(snackbar.id)}
          style={{ bottom: \`\${(index * 70) + 20}px\` }}
        />
      ))}
    </>
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
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">open</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">required</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Controls visibility</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">message</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string | ReactNode</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">required</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Notification message</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">onClose</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">() =&gt; void</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">required</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Close handler</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">duration</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">number | null</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">3000</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Auto-hide duration (ms)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">placement</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">PlacementType</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">bottom-center</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Screen position</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">action</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">ActionConfig</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Action button config</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">pauseOnHover</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Pause timer on hover</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">variant</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">default</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Visual variant</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">className</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Config */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Action Config</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 dark:border-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Property</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Type</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">label</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Button text</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">onClick</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">() =&gt; void</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Click handler</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">focusKey</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Focus key for button</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">className</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Button CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Best Practices */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Keep messages brief and actionable</li>
          <li>Use 3-5 seconds duration for most notifications</li>
          <li>Provide action buttons for recoverable operations (Undo, Retry)</li>
          <li>Use appropriate variants/colors for different message types</li>
          <li>Enable pauseOnHover when snackbar has actions</li>
          <li>Position snackbars to not obscure important content</li>
          <li>Implement a queue system for multiple notifications</li>
        </ul>
      </div>
    </div>
  );
}
