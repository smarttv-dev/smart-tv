import React from "react";
import CodePreview from "../../../../../components/CodePreview";

export default function SectionDoc(): React.ReactElement {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Section</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A container component for grouping related content within a Screen, with focus management capabilities.
        </p>
      </div>

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Import</h2>
        <CodePreview
          language="tsx"
          code={`import { Section } from '@smart-tv/ui';`}
        />
      </div>

      {/* Basic Usage */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Basic Usage</h2>
        <CodePreview
          language="tsx"
          code={`import { Screen, Section, Row, Card } from '@smart-tv/ui';

function HomeScreen() {
  return (
    <Screen focusKey="home">
      <Section focusKey="hero-section">
        <h1>Featured Content</h1>
        <Row focusKey="featured-row">
          <Card focusKey="featured-1">Featured 1</Card>
          <Card focusKey="featured-2">Featured 2</Card>
        </Row>
      </Section>
      
      <Section focusKey="trending-section">
        <h2>Trending Now</h2>
        <Row focusKey="trending-row">
          <Card focusKey="trending-1">Trending 1</Card>
          <Card focusKey="trending-2">Trending 2</Card>
        </Row>
      </Section>
    </Screen>
  );
}`}
        />
      </div>

      {/* View Only Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">View Only Section</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Use <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">viewOnly</code> to make the section non-focusable while allowing its children to receive focus.
        </p>
        <CodePreview
          language="tsx"
          code={`<Section focusKey="header" viewOnly>
  <h1>My App</h1>
  {/* Section itself won't be focused, but buttons inside can be */}
  <Button focusKey="profile">Profile</Button>
  <Button focusKey="settings">Settings</Button>
</Section>`}
        />
      </div>

      {/* Self Focus */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Auto Focus Section</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Use <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">selFocus</code> to automatically focus this section when it mounts.
        </p>
        <CodePreview
          language="tsx"
          code={`<Section focusKey="main-content" selFocus>
  <Row focusKey="content-row">
    <Card focusKey="card-1">Card 1</Card>
    <Card focusKey="card-2">Card 2</Card>
  </Row>
</Section>`}
        />
      </div>

      {/* Nested Sections */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Nested Sections</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Sections can be nested to create complex hierarchical layouts.
        </p>
        <CodePreview
          language="tsx"
          code={`<Section focusKey="main-section" className="p-8">
  <h1>Main Section</h1>
  
  <Section focusKey="left-panel" className="w-1/2">
    <h2>Left Panel</h2>
    <Row focusKey="left-row">
      <Button focusKey="btn-1">Button 1</Button>
      <Button focusKey="btn-2">Button 2</Button>
    </Row>
  </Section>
  
  <Section focusKey="right-panel" className="w-1/2">
    <h2>Right Panel</h2>
    <Row focusKey="right-row">
      <Button focusKey="btn-3">Button 3</Button>
      <Button focusKey="btn-4">Button 4</Button>
    </Row>
  </Section>
</Section>`}
        />
      </div>

      {/* Track Children */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Track Child Focus</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Enable focus tracking to remember which child was last focused.
        </p>
        <CodePreview
          language="tsx"
          code={`<Section
  focusKey="category-section"
  trackChildren
  saveLastFocusedChild
>
  <h2>Categories</h2>
  <Grid focusKey="categories" columns={4}>
    <Card focusKey="cat-1">Action</Card>
    <Card focusKey="cat-2">Comedy</Card>
    <Card focusKey="cat-3">Drama</Card>
    <Card focusKey="cat-4">Horror</Card>
  </Grid>
  {/* When returning to this section, focus will restore to the last selected category */}
</Section>`}
        />
      </div>

      {/* Focus Boundary */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Section with Focus Boundary</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Restrict navigation to keep focus within the section.
        </p>
        <CodePreview
          language="tsx"
          code={`<Section
  focusKey="sidebar"
  isFocusBoundary
  focusBoundaryDirections={['left']} // Can't navigate left out of sidebar
  className="fixed left-0 top-0 h-full w-64"
>
  <nav>
    <Button focusKey="nav-home">Home</Button>
    <Button focusKey="nav-movies">Movies</Button>
    <Button focusKey="nav-series">Series</Button>
    <Button focusKey="nav-settings">Settings</Button>
  </nav>
</Section>`}
        />
      </div>

      {/* Preferred Child Focus */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Preferred Child Focus</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Specify which child should receive focus by default.
        </p>
        <CodePreview
          language="tsx"
          code={`<Section
  focusKey="menu-section"
  preferredChildFocusKey="play-button"
>
  <Button focusKey="back-button">Back</Button>
  <Button focusKey="play-button">Play</Button>
  <Button focusKey="info-button">Info</Button>
  {/* When this section is focused, "play-button" will be focused first */}
</Section>`}
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
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">viewOnly</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Non-focusable section</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">selFocus</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Auto-focus on mount</td>
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
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">preferredChildFocusKey</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Default child to focus</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">isFocusBoundary</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Restrict focus within</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">focusBoundaryDirections</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Direction[]</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">-</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Blocked directions</td>
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
          <li>Use Section to group related content within a Screen</li>
          <li>Set viewOnly=true for non-interactive header/footer sections</li>
          <li>Enable trackChildren and saveLastFocusedChild for better navigation memory</li>
          <li>Use preferredChildFocusKey to guide initial focus within the section</li>
          <li>Combine with Grid or Row components for structured layouts</li>
          <li>Use focus boundaries sparingly, only for modal-like sections</li>
        </ul>
      </div>
    </div>
  );
}
