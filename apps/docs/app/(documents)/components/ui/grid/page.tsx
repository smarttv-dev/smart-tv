import React from "react";
import CodePreview from "../../../../../components/CodePreview";

export default function GridDoc(): React.ReactElement {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Grid</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A responsive grid layout container for organizing content in rows and columns with spatial navigation support.
        </p>
      </div>

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Import</h2>
        <CodePreview
          language="tsx"
          code={`import { Grid } from '@smart-tv/ui';`}
        />
      </div>

      {/* Basic Usage */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Basic Usage</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Create a basic grid layout with cards or content items.
        </p>
        <CodePreview
          language="tsx"
          code={`<Grid focusKey="movie-grid" columns={4}>
  {movies.map((movie) => (
    <Card key={movie.id} focusKey={\`movie-\${movie.id}\`}>
      <CardContent>
        <img src={movie.poster} alt={movie.title} />
        <h3>{movie.title}</h3>
      </CardContent>
    </Card>
  ))}
</Grid>`}
        />
      </div>

      {/* Responsive Columns */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Responsive Columns</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Adapt grid columns based on screen size.
        </p>
        <CodePreview
          language="tsx"
          code={`<Grid 
  focusKey="responsive-grid"
  columns={{ sm: 2, md: 3, lg: 4, xl: 6 }}
  gap={4}
>
  {items.map((item) => (
    <Card key={item.id} focusKey={\`item-\${item.id}\`}>
      {item.content}
    </Card>
  ))}
</Grid>`}
        />
      </div>

      {/* Custom Gap */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Custom Spacing</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Control spacing between grid items.
        </p>
        <CodePreview
          language="tsx"
          code={`<Grid 
  focusKey="spaced-grid"
  columns={3}
  gap={8}
  className="p-4"
>
  <Card focusKey="item-1">Item 1</Card>
  <Card focusKey="item-2">Item 2</Card>
  <Card focusKey="item-3">Item 3</Card>
</Grid>`}
        />
      </div>

      {/* Auto Fit */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Auto-fit Layout</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Automatically fit items based on minimum width.
        </p>
        <CodePreview
          language="tsx"
          code={`<Grid 
  focusKey="autofit-grid"
  autoFit="minmax(200px, 1fr)"
  gap={4}
>
  {items.map((item, idx) => (
    <Card key={idx} focusKey={\`item-\${idx}\`}>
      {item}
    </Card>
  ))}
</Grid>`}
        />
      </div>

      {/* With Focus Boundary */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Focus Boundary</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Contain focus within the grid for better navigation control.
        </p>
        <CodePreview
          language="tsx"
          code={`<Grid 
  focusKey="bounded-grid"
  columns={3}
  isFocusBoundary={true}
  focusBoundaryDirections={['left', 'right']}
>
  <Card focusKey="item-1">Item 1</Card>
  <Card focusKey="item-2">Item 2</Card>
  <Card focusKey="item-3">Item 3</Card>
</Grid>`}
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
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Unique identifier</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">columns</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">number | object</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">3</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Number of columns or responsive config</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">gap</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">number</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">4</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Gap between items (in spacing units)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">autoFit</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">CSS grid auto-fit value</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">isFocusBoundary</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Contain focus within grid</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">focusBoundaryDirections</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">array</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Directions to block focus escape</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">className</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Additional CSS classes</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">children</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">ReactNode</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Grid items</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Best Practices */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Use consistent card sizes for better visual alignment</li>
          <li>Set appropriate <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">gap</code> values for comfortable navigation</li>
          <li>Consider using responsive columns for different screen sizes</li>
          <li>Enable focus boundary for better navigation control in sections</li>
          <li>Use auto-fit for dynamic content with varying item counts</li>
        </ul>
      </div>
    </div>
  );
}
