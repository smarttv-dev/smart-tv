import React from "react";
import CodePreview from "@/components/CodePreview";

export default function KeyboardDoc(): React.ReactElement {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-gray-100">
          Keyboard
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          An on-screen keyboard component for text input on TV interfaces with
          spatial navigation support.
        </p>
      </div>

      {/* Import */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Import
        </h2>
        <CodePreview
          language="tsx"
          code={`import { Keyboard } from '@smart-tv/ui';`}
        />
      </div>

      {/* Basic Usage */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Basic Usage
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Create a basic on-screen keyboard for text input.
        </p>
        <CodePreview
          language="tsx"
          code={`const [value, setValue] = useState('');

<Keyboard
  focusKey="search-keyboard"
  value={value}
  onChange={setValue}
  onSubmit={(text) => handleSearch(text)}
  placeholder="Search for movies..."
/>`}
        />
      </div>

      {/* Different Layouts */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Keyboard Layouts
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Switch between different keyboard layouts.
        </p>
        <CodePreview
          language="tsx"
          code={`// QWERTY Layout (default)
<Keyboard
  focusKey="qwerty-kb"
  layout="qwerty"
  value={value}
  onChange={setValue}
/>

// ABC Layout
<Keyboard
  focusKey="abc-kb"
  layout="abc"
  value={value}
  onChange={setValue}
/>

// Numeric Layout
<Keyboard
  focusKey="numeric-kb"
  layout="numeric"
  value={value}
  onChange={setValue}
/>`}
        />
      </div>

      {/* With Suggestions */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          With Auto-complete
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Add autocomplete suggestions for faster text input.
        </p>
        <CodePreview
          language="tsx"
          code={`const [value, setValue] = useState('');
const [suggestions, setSuggestions] = useState([]);

const handleChange = (text) => {
  setValue(text);
  // Fetch suggestions based on input
  const matches = searchSuggestions(text);
  setSuggestions(matches);
};

<Keyboard
  focusKey="autocomplete-kb"
  value={value}
  onChange={handleChange}
  suggestions={suggestions}
  onSuggestionSelect={(suggestion) => setValue(suggestion)}
/>`}
        />
      </div>

      {/* Custom Theme */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Custom Theme
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Customize the keyboard appearance with themes.
        </p>
        <CodePreview
          language="tsx"
          code={`<Keyboard
  focusKey="themed-kb"
  value={value}
  onChange={setValue}
  theme={{
    background: 'bg-gray-900',
    key: 'bg-gray-800 text-white',
    keyActive: 'bg-blue-600 scale-110',
    keyHover: 'bg-gray-700'
  }}
/>`}
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
                  Unique identifier
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  value
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  string
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  &apos;&apos;
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Current input value
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  onChange
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  function
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  -
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Value change handler
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  onSubmit
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  function
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  -
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Submit handler
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  layout
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  string
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  qwerty
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Keyboard layout type
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  placeholder
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  string
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  -
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Input placeholder text
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  suggestions
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  array
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  []
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Autocomplete suggestions
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  theme
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  object
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  -
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Custom theme configuration
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
            Show the keyboard in a modal or drawer for better focus management
          </li>
          <li>Provide autocomplete suggestions to reduce typing effort</li>
          <li>
            Use appropriate layouts based on input type (numeric for numbers,
            etc.)
          </li>
          <li>
            Make keys large enough for easy navigation with remote control
          </li>
          <li>Display the current input value clearly above the keyboard</li>
          <li>Provide clear visual feedback for key presses</li>
        </ul>
      </div>
    </div>
  );
}
