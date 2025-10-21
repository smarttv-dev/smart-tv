import React from "react";
import CodePreview from "@/components/CodePreview";

export default function ButtonDoc(): React.ReactElement {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-gray-100">
          Button
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A focusable button component optimized for TV remote control
          navigation with spatial focus support.
        </p>
      </div>

      {/* Import */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Import
        </h2>
        <CodePreview
          language="tsx"
          code={`import { Button } from '@smart-tv/ui';`}
        />
      </div>

      {/* Basic Usage */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Basic Usage
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          The Button component requires a unique{" "}
          <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-700">
            focusKey
          </code>{" "}
          for navigation.
        </p>
        <CodePreview
          language="tsx"
          code={`<Button
  focusKey="my-button"
  onEnterPress={() => console.log('Button pressed')}
>
  Click Me
</Button>`}
        />
      </div>

      {/* With Styling */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          With Custom Styling
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Apply custom styles when focused using the{" "}
          <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-700">
            active
          </code>{" "}
          prop.
        </p>
        <CodePreview
          language="tsx"
          code={`<Button
  focusKey="styled-button"
  className="px-6 py-3 bg-blue-500 text-white rounded-lg"
  active="scale-110 bg-blue-600 shadow-xl"
  onEnterPress={() => alert('Clicked!')}
>
  Styled Button
</Button>`}
        />
      </div>

      {/* Disabled State */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Disabled State
        </h2>
        <CodePreview
          language="tsx"
          code={`<Button
  focusKey="disabled-button"
  disabled={true}
  className="opacity-50 cursor-not-allowed"
>
  Disabled Button
</Button>`}
        />
      </div>

      {/* Force Focus */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Force Focus
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Programmatically focus a button using the{" "}
          <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-700">
            forceFocus
          </code>{" "}
          prop.
        </p>
        <CodePreview
          language="tsx"
          code={`import { useState } from 'react';

function App() {
  const [focus, setFocus] = useState(false);

  return (
    <>
      <Button
        focusKey="force-button"
        forceFocus={focus}
        onEnterPress={() => console.log('Focused button clicked')}
      >
        Force Focus Me
      </Button>

      <Button
        focusKey="trigger"
        onEnterPress={() => setFocus(true)}
      >
        Focus Above Button
      </Button>
    </>
  );
}`}
        />
      </div>

      {/* Render Props */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Render Props Pattern
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Use render props to dynamically render button content based on focus
          state.
        </p>
        <CodePreview
          language="tsx"
          code={`<Button
  focusKey="render-button"
  onEnterPress={() => console.log('Clicked')}
>
  {({ focused, focusSelf }) => (
    <div className={\`flex items-center gap-2 \${focused ? 'text-blue-500' : ''}\`}>
      {focused && <span>▶</span>}
      <span>Play</span>
    </div>
  )}
</Button>`}
        />
      </div>

      {/* Event Handlers */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Event Handlers
        </h2>
        <CodePreview
          language="tsx"
          code={`<Button
  focusKey="event-button"
  onEnterPress={(props, details) => {
    console.log('Button pressed', props, details);
  }}
  onEnterRelease={(props, details) => {
    console.log('Button released');
  }}
  onFocus={(layout, props, details) => {
    console.log('Button focused');
  }}
  onBlur={(layout, props, details) => {
    console.log('Button blurred');
  }}
  onArrowPress={(direction, props, details) => {
    console.log('Arrow pressed:', direction);
    return false; // Prevent navigation
  }}
>
  Event Button
</Button>`}
        />
      </div>

      {/* With Payload */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          With Payload Data
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Pass additional data to event handlers using the{" "}
          <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-700">
            payload
          </code>{" "}
          prop.
        </p>
        <CodePreview
          language="tsx"
          code={`const videoData = { id: 123, title: 'Movie Title' };

<Button
  focusKey="play-button"
  payload={videoData}
  onEnterPress={(props) => {
    console.log('Play video:', props.payload);
    // Access: props.payload.id, props.payload.title
  }}
>
  Play Video
</Button>`}
        />
      </div>

      {/* Mouse Hover */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Mouse Hover Support
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Enable mouse hover for hybrid TV/web applications.
        </p>
        <CodePreview
          language="tsx"
          code={`<Button
  focusKey="hover-button"
  hover={true}
  className="px-4 py-2 bg-gray-200"
  active="bg-blue-500 text-white"
  onEnterPress={() => console.log('Clicked')}
>
  Hover-enabled Button
</Button>`}
        />
      </div>

      {/* Button Group */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Button Group
        </h2>
        <CodePreview
          language="tsx"
          code={`import { Row, Button } from '@smart-tv/ui';

<Row focusKey="button-group" className="flex gap-4">
  <Button focusKey="btn-1" onEnterPress={() => console.log('Button 1')}>
    Option 1
  </Button>
  <Button focusKey="btn-2" onEnterPress={() => console.log('Button 2')}>
    Option 2
  </Button>
  <Button focusKey="btn-3" onEnterPress={() => console.log('Button 3')}>
    Option 3
  </Button>
</Row>`}
        />
      </div>

      {/* Props Reference */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Props
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 dark:border-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Prop
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Default
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  focusKey
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  string
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  required
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Unique identifier for spatial navigation
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  children
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  ReactNode | RenderFunction
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  -
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Button content or render function
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  onEnterPress
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  (props, details) =&gt; void
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  -
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Called when Enter/OK is pressed
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  onEnterRelease
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  (props, details) =&gt; void
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  -
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Called when Enter/OK is released
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  onFocus
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  (layout, props, details) =&gt; void
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  -
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Called when button receives focus
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  onBlur
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  (layout, props, details) =&gt; void
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  -
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Called when button loses focus
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  onArrowPress
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  (direction, props, details) =&gt; boolean
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  -
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Called on arrow key press
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  className
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  string
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  -
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  CSS classes for the button
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  active
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  string
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  -
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  CSS classes when focused
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  disabled
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  boolean
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  false
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Disable button interactions
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  forceFocus
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  boolean
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  false
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Programmatically focus button
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  hover
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  boolean
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  false
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Enable mouse hover support
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  payload
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  any
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  -
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Data passed to event handlers
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  style
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  CSSProperties
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  -
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Inline styles
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Best Practices */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Best Practices
        </h2>
        <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-300">
          <li>
            Always provide a unique{" "}
            <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-700">
              focusKey
            </code>{" "}
            for each button
          </li>
          <li>Use clear, action-oriented button labels</li>
          <li>
            Provide strong visual feedback with the{" "}
            <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-700">
              active
            </code>{" "}
            prop when focused
          </li>
          <li>
            Make buttons large enough for easy selection (min 48px height
            recommended)
          </li>
          <li>
            Use{" "}
            <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-700">
              payload
            </code>{" "}
            to pass additional context to event handlers
          </li>
          <li>
            Consider using render props for dynamic content based on focus state
          </li>
        </ul>
      </div>
    </div>
  );
}
