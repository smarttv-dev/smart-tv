import React from "react";
import CodePreview from "../../../../../components/CodePreview";

export default function TooltipDoc(): React.ReactElement {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Tooltip</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Contextual information that appears when an element receives focus, providing helpful hints without cluttering the interface.
        </p>
      </div>

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Import</h2>
        <CodePreview
          language="tsx"
          code={`import { Tooltip } from '@smart-tv/ui';`}
        />
      </div>

      {/* Basic Usage */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Basic Usage</h2>
        <CodePreview
          language="tsx"
          code={`import { Tooltip, Button } from '@smart-tv/ui';

function App() {
  return (
    <Tooltip content="Click to play the video">
      <Button focusKey="play-button">
        Play
      </Button>
    </Tooltip>
  );
}`}
        />
      </div>

      {/* Placement */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Tooltip Placement</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Control where the tooltip appears relative to the target element.
        </p>
        <CodePreview
          language="tsx"
          code={`// Top placement (default)
<Tooltip content="Tooltip above" placement="top">
  <Button focusKey="btn-1">Hover Me</Button>
</Tooltip>

// Bottom placement
<Tooltip content="Tooltip below" placement="bottom">
  <Button focusKey="btn-2">Hover Me</Button>
</Tooltip>

// Left placement
<Tooltip content="Tooltip on left" placement="left">
  <Button focusKey="btn-3">Hover Me</Button>
</Tooltip>

// Right placement
<Tooltip content="Tooltip on right" placement="right">
  <Button focusKey="btn-4">Hover Me</Button>
</Tooltip>`}
        />
      </div>

      {/* Delay */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Show/Hide Delay</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Add delays before showing or hiding the tooltip.
        </p>
        <CodePreview
          language="tsx"
          code={`// Delay before showing (500ms)
<Tooltip 
  content="Appears after delay" 
  delay={500}
>
  <Button focusKey="delayed">Delayed Tooltip</Button>
</Tooltip>

// No delay
<Tooltip 
  content="Appears immediately" 
  delay={0}
>
  <Button focusKey="instant">Instant Tooltip</Button>
</Tooltip>

// Long delay (1 second)
<Tooltip 
  content="Takes a moment to appear" 
  delay={1000}
>
  <Button focusKey="slow">Slow Tooltip</Button>
</Tooltip>`}
        />
      </div>

      {/* Rich Content */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Rich Content</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Use JSX elements for complex tooltip content.
        </p>
        <CodePreview
          language="tsx"
          code={`<Tooltip
  content={
    <div className="space-y-2">
      <h3 className="font-semibold">Premium Feature</h3>
      <p className="text-sm">Subscribe to unlock HD quality</p>
      <div className="flex gap-2 mt-2">
        <span className="text-xs bg-blue-500 px-2 py-1 rounded">$9.99/mo</span>
      </div>
    </div>
  }
  placement="top"
>
  <Button focusKey="premium">
    <LockIcon /> HD Quality
  </Button>
</Tooltip>`}
        />
      </div>

      {/* Controlled Visibility */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Controlled Visibility</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Manually control when the tooltip is visible.
        </p>
        <CodePreview
          language="tsx"
          code={`import { useState } from 'react';

function ControlledTooltip() {
  const [visible, setVisible] = useState(false);
  
  return (
    <Tooltip
      content="Controlled tooltip"
      visible={visible}
      onVisibleChange={setVisible}
    >
      <Button 
        focusKey="controlled"
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
      >
        Controlled
      </Button>
    </Tooltip>
  );
}`}
        />
      </div>

      {/* Arrow */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">With/Without Arrow</h2>
        <CodePreview
          language="tsx"
          code={`// With arrow (default)
<Tooltip content="Has a pointer" arrow={true}>
  <Button focusKey="with-arrow">With Arrow</Button>
</Tooltip>

// Without arrow
<Tooltip content="Clean edges" arrow={false}>
  <Button focusKey="no-arrow">No Arrow</Button>
</Tooltip>`}
        />
      </div>

      {/* Styling */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Custom Styling</h2>
        <CodePreview
          language="tsx"
          code={`// Dark theme tooltip
<Tooltip 
  content="Dark tooltip" 
  className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl"
>
  <Button focusKey="dark">Dark Theme</Button>
</Tooltip>

// Light theme tooltip
<Tooltip 
  content="Light tooltip" 
  className="bg-white text-gray-900 px-4 py-2 rounded-lg shadow-lg border"
>
  <Button focusKey="light">Light Theme</Button>
</Tooltip>

// Colored tooltip
<Tooltip 
  content="Important action" 
  className="bg-red-500 text-white px-4 py-2 rounded-lg"
>
  <Button focusKey="warning">Delete</Button>
</Tooltip>`}
        />
      </div>

      {/* Focus Behavior */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Focus Behavior</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Tooltip automatically shows when the wrapped element receives focus and hides when it loses focus.
        </p>
        <CodePreview
          language="tsx"
          code={`import { Row, Card, Tooltip } from '@smart-tv/ui';

function VideoRow() {
  return (
    <Row focusKey="video-row">
      <Tooltip content="Action Movie • 2h 15m • 2023">
        <Card focusKey="movie-1">
          <img src="/movie1.jpg" alt="Movie 1" />
        </Card>
      </Tooltip>
      
      <Tooltip content="Comedy Series • S1 E1 • 45m">
        <Card focusKey="movie-2">
          <img src="/movie2.jpg" alt="Movie 2" />
        </Card>
      </Tooltip>
      
      <Tooltip content="Documentary • 1h 30m • 4K">
        <Card focusKey="movie-3">
          <img src="/movie3.jpg" alt="Movie 3" />
        </Card>
      </Tooltip>
    </Row>
  );
}`}
        />
      </div>

      {/* Multiple Lines */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Multi-line Content</h2>
        <CodePreview
          language="tsx"
          code={`<Tooltip
  content={
    <>
      <div>Title: The Great Adventure</div>
      <div>Duration: 2h 15m</div>
      <div>Rating: PG-13</div>
      <div>Year: 2023</div>
    </>
  }
  className="max-w-xs"
  placement="top"
>
  <Card focusKey="movie-card">
    <img src="/movie.jpg" alt="Movie" />
  </Card>
</Tooltip>`}
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
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">content</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string | ReactNode</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">required</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Tooltip content</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">children</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">ReactElement</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">required</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Target element</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">placement</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">top | bottom | left | right</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">top</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Tooltip position</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">delay</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">number</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">200</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Show delay (ms)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">visible</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Controlled visibility</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">onVisibleChange</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">(visible: boolean) =&gt; void</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Visibility change handler</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">arrow</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">true</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Show arrow pointer</td>
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

      {/* Best Practices */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Keep tooltip content concise and informative</li>
          <li>Use tooltips for supplementary information, not critical content</li>
          <li>Set appropriate delay based on context (shorter for frequently used items)</li>
          <li>Ensure tooltips don&apos;t obscure other important UI elements</li>
          <li>Use consistent styling across all tooltips in your app</li>
          <li>Consider screen edges when positioning tooltips</li>
          <li>For TV apps, ensure tooltips are readable at 10-foot viewing distance</li>
        </ul>
      </div>
    </div>
  );
}
