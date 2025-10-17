import React from "react";
import CodePreview from "../../../../../components/CodePreview";

export default function CardDoc(): React.ReactElement {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Card</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A versatile container component with built-in focus management, perfect for displaying media content, product cards, and grid items.
        </p>
      </div>

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Import</h2>
        <CodePreview
          language="tsx"
          code={`import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@smart-tv/ui';`}
        />
      </div>

      {/* Basic Usage */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Basic Usage</h2>
        <CodePreview
          language="tsx"
          code={`<Card focusKey="movie-card" className="w-64">
  <img src="/movie-poster.jpg" alt="Movie" className="w-full h-96 object-cover" />
  <h3 className="p-4 text-lg font-semibold">Movie Title</h3>
</Card>`}
        />
      </div>

      {/* With Subcomponents */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">With Card Subcomponents</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Use the provided subcomponents for structured card layouts.
        </p>
        <CodePreview
          language="tsx"
          code={`<Card focusKey="detailed-card" className="w-80">
  <CardHeader>
    <CardTitle>The Great Adventure</CardTitle>
    <CardDescription>2023 • Action • 2h 15m</CardDescription>
  </CardHeader>
  
  <CardContent>
    <img src="/poster.jpg" alt="Poster" className="w-full h-64 object-cover rounded" />
    <p className="mt-4 text-sm text-gray-600">
      An epic journey through uncharted territories...
    </p>
  </CardContent>
  
  <CardFooter className="flex gap-2">
    <Button focusKey="play-btn">Play</Button>
    <Button focusKey="info-btn">More Info</Button>
  </CardFooter>
</Card>`}
        />
      </div>

      {/* Focusable Card */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Focusable Card with Actions</h2>
        <CodePreview
          language="tsx"
          code={`<Card 
  focusKey="action-card"
  focusable={true}
  className="w-64 transition-transform"
  active="scale-105 shadow-2xl ring-4 ring-blue-500"
  onEnterPress={() => console.log('Card clicked')}
>
  <img src="/content.jpg" alt="Content" className="w-full h-80 object-cover" />
  <div className="p-4">
    <h3 className="font-bold">Interactive Card</h3>
    <p className="text-sm text-gray-600">Press Enter to select</p>
  </div>
</Card>`}
        />
      </div>

      {/* Render Props */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Render Props Pattern</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Dynamically render card content based on focus state.
        </p>
        <CodePreview
          language="tsx"
          code={`<Card 
  focusKey="dynamic-card"
  className="w-64"
>
  {({ focused, focusSelf }) => (
    <div className={focused ? 'bg-blue-500 text-white' : 'bg-gray-100'}>
      <img 
        src="/image.jpg" 
        alt="Image" 
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold">
          {focused ? '▶ Now Playing' : 'Movie Title'}
        </h3>
      </div>
    </div>
  )}
</Card>`}
        />
      </div>

      {/* Card Grid */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Card Grid Layout</h2>
        <CodePreview
          language="tsx"
          code={`import { Grid, Card } from '@smart-tv/ui';

<Grid 
  focusKey="movie-grid" 
  columns={4} 
  gap={16}
  className="p-8"
>
  {movies.map((movie) => (
    <Card
      key={movie.id}
      focusKey={\`movie-\${movie.id}\`}
      className="w-full"
      active="scale-110 shadow-2xl"
      onEnterPress={() => openMovie(movie.id)}
    >
      <img src={movie.poster} alt={movie.title} className="w-full h-96 object-cover" />
      <div className="p-3">
        <h3 className="font-semibold">{movie.title}</h3>
        <p className="text-sm text-gray-600">{movie.year}</p>
      </div>
    </Card>
  ))}
</Grid>`}
        />
      </div>

      {/* Card Row */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Horizontal Card Row</h2>
        <CodePreview
          language="tsx"
          code={`import { Row, Card } from '@smart-tv/ui';

<Section focusKey="featured-section">
  <h2 className="text-2xl font-bold mb-4">Featured Content</h2>
  
  <Row 
    focusKey="featured-row" 
    gap={16}
    scrollProps={{ behavior: 'smooth' }}
  >
    {featured.map((item) => (
      <Card
        key={item.id}
        focusKey={\`featured-\${item.id}\`}
        className="min-w-[250px]"
        active="scale-110"
      >
        <img src={item.image} alt={item.title} className="w-full h-80 object-cover" />
        <p className="p-3 font-semibold">{item.title}</p>
      </Card>
    ))}
  </Row>
</Section>`}
        />
      </div>

      {/* With Nested Focusable Elements */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Card with Nested Buttons</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Cards can contain nested focusable elements. Use <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">trackChildren</code> to manage focus.
        </p>
        <CodePreview
          language="tsx"
          code={`<Card 
  focusKey="complex-card"
  trackChildren={true}
  saveLastFocusedChild={true}
  className="w-96"
>
  <img src="/movie.jpg" alt="Movie" className="w-full h-80 object-cover" />
  
  <CardContent className="p-4">
    <h3 className="text-xl font-bold mb-2">Movie Title</h3>
    <p className="text-gray-600 mb-4">Description goes here...</p>
    
    <div className="flex gap-2">
      <Button focusKey="play-btn" className="flex-1">
        Play
      </Button>
      <Button focusKey="add-btn" className="flex-1">
        Add to List
      </Button>
      <Button focusKey="info-btn" className="flex-1">
        Info
      </Button>
    </div>
  </CardContent>
</Card>`}
        />
      </div>

      {/* Focus Boundary */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Card with Focus Boundary</h2>
        <CodePreview
          language="tsx"
          code={`<Card 
  focusKey="modal-card"
  isFocusBoundary={true}
  focusBoundaryDirections={['up', 'down', 'left', 'right']}
  className="w-96 mx-auto"
>
  <CardHeader>
    <CardTitle>Confirmation</CardTitle>
  </CardHeader>
  
  <CardContent>
    <p>Are you sure you want to delete this item?</p>
  </CardContent>
  
  <CardFooter className="flex gap-2">
    <Button focusKey="cancel-btn">Cancel</Button>
    <Button focusKey="confirm-btn">Confirm</Button>
    {/* Focus cannot escape this card */}
  </CardFooter>
</Card>`}
        />
      </div>

      {/* Props Reference */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Card Props</h2>
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
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">focusable</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Make card itself focusable</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">trackChildren</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Track child focus</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">saveLastFocusedChild</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Restore child focus</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">className</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">CSS classes</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">active</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">CSS classes when focused</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">onEnterPress</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">function</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Enter press handler</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">onFocus</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">function</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Focus handler</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">children</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">ReactNode | RenderFunction</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Card content</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Subcomponents */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Subcomponents</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">CardHeader</h3>
            <p className="text-gray-600 dark:text-gray-300">Container for card header content (title, description)</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">CardTitle</h3>
            <p className="text-gray-600 dark:text-gray-300">Main title of the card</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">CardDescription</h3>
            <p className="text-gray-600 dark:text-gray-300">Subtitle or description text</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">CardContent</h3>
            <p className="text-gray-600 dark:text-gray-300">Main content area of the card</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">CardFooter</h3>
            <p className="text-gray-600 dark:text-gray-300">Footer area for actions and buttons</p>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Use consistent card dimensions within a grid or row</li>
          <li>Provide clear visual feedback with the <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">active</code> prop</li>
          <li>Use CardHeader, CardContent, and CardFooter for structured layouts</li>
          <li>Enable <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">trackChildren</code> when cards contain buttons</li>
          <li>Optimize images for TV resolution (use appropriate sizes)</li>
          <li>Keep card content readable at 10-foot viewing distance</li>
        </ul>
      </div>
    </div>
  );
}
