import React from "react";
import CodePreview from "../../../../../components/CodePreview";

export default function RowDoc(): React.ReactElement {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Row</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A horizontal row layout component for aligning elements in a line with spatial navigation support.
        </p>
      </div>

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Import</h2>
        <CodePreview
          language="tsx"
          code={`import { Row } from '@smart-tv/ui';`}
        />
      </div>

      {/* Basic Usage */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Basic Usage</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Create a horizontal row of items.
        </p>
        <CodePreview
          language="tsx"
          code={`<Row focusKey="movie-row">
  {movies.map((movie) => (
    <Card key={movie.id} focusKey={\`movie-\${movie.id}\`}>
      <CardContent>
        <img src={movie.poster} alt={movie.title} />
        <h4>{movie.title}</h4>
      </CardContent>
    </Card>
  ))}
</Row>`}
        />
      </div>

      {/* With Title */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Row with Title</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Add a title to describe the row content.
        </p>
        <CodePreview
          language="tsx"
          code={`<Row focusKey="trending-row" title="Trending Now">
  {trendingMovies.map((movie) => (
    <Card key={movie.id} focusKey={\`trending-\${movie.id}\`}>
      <img src={movie.poster} alt={movie.title} />
    </Card>
  ))}
</Row>`}
        />
      </div>

      {/* Scrollable Row */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Scrollable Row</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Enable horizontal scrolling for long lists.
        </p>
        <CodePreview
          language="tsx"
          code={`<Row 
  focusKey="scrollable-row"
  scrollable={true}
  title="Continue Watching"
>
  {continueWatching.map((item) => (
    <Card key={item.id} focusKey={\`continue-\${item.id}\`}>
      <img src={item.thumbnail} />
      <div className="progress" style={{ width: \`\${item.progress}%\` }} />
    </Card>
  ))}
</Row>`}
        />
      </div>

      {/* Custom Spacing */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Custom Spacing</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Control the gap between items in the row.
        </p>
        <CodePreview
          language="tsx"
          code={`<Row 
  focusKey="custom-spacing-row"
  gap={6}
  title="New Releases"
>
  {newReleases.map((item) => (
    <Card key={item.id} focusKey={\`new-\${item.id}\`}>
      {item.content}
    </Card>
  ))}
</Row>`}
        />
      </div>

      {/* With Navigation Buttons */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">With Navigation Arrows</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Add left/right navigation buttons for mouse users.
        </p>
        <CodePreview
          language="tsx"
          code={`<Row 
  focusKey="nav-row"
  title="Popular Movies"
  showNavigation={true}
  onNavigateLeft={() => scrollLeft()}
  onNavigateRight={() => scrollRight()}
>
  {popularMovies.map((movie) => (
    <Card key={movie.id} focusKey={\`popular-\${movie.id}\`}>
      {movie.content}
    </Card>
  ))}
</Row>`}
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
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">title</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Row title header</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">scrollable</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Enable horizontal scrolling</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">gap</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">number</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">4</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Gap between items</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">showNavigation</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Show navigation arrows</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">onNavigateLeft</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">function</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Left arrow click handler</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">onNavigateRight</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">function</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Right arrow click handler</td>
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
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Row items</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Best Practices */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Use descriptive titles to identify row content</li>
          <li>Enable scrolling for rows with many items</li>
          <li>Keep item sizes consistent within a row</li>
          <li>Use appropriate gap spacing for comfortable navigation</li>
          <li>Consider showing 3-5 items visible at once</li>
        </ul>
      </div>
    </div>
  );
}
