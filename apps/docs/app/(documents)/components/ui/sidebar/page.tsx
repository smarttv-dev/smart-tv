import React from "react";
import CodePreview from "../../../../../components/CodePreview";

export default function SidebarDoc(): React.ReactElement {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Sidebar</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A collapsible side navigation panel with hierarchical menu support for TV applications.
        </p>
      </div>

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Import</h2>
        <CodePreview
          language="tsx"
          code={`import { Sidebar } from '@smart-tv/ui';`}
        />
      </div>

      {/* Basic Usage */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Basic Usage</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Create a basic sidebar with navigation items.
        </p>
        <CodePreview
          language="tsx"
          code={`<Sidebar focusKey="sidebar">
  <Sidebar.Item focusKey="home" icon={<HomeIcon />}>
    Home
  </Sidebar.Item>
  <Sidebar.Item focusKey="browse" icon={<BrowseIcon />}>
    Browse
  </Sidebar.Item>
  <Sidebar.Item focusKey="library" icon={<LibraryIcon />}>
    My Library
  </Sidebar.Item>
  <Sidebar.Item focusKey="settings" icon={<SettingsIcon />}>
    Settings
  </Sidebar.Item>
</Sidebar>`}
        />
      </div>

      {/* Collapsible */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Collapsible Sidebar</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Toggle between expanded and collapsed states.
        </p>
        <CodePreview
          language="tsx"
          code={`const [collapsed, setCollapsed] = useState(false);

<Sidebar 
  focusKey="collapsible-sidebar"
  collapsed={collapsed}
  onToggle={() => setCollapsed(!collapsed)}
>
  <Sidebar.Item focusKey="home" icon={<HomeIcon />}>
    Home
  </Sidebar.Item>
  <Sidebar.Item focusKey="browse" icon={<BrowseIcon />}>
    Browse
  </Sidebar.Item>
</Sidebar>`}
        />
      </div>

      {/* With Groups */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Grouped Items</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Organize sidebar items into logical groups.
        </p>
        <CodePreview
          language="tsx"
          code={`<Sidebar focusKey="grouped-sidebar">
  <Sidebar.Group title="Main">
    <Sidebar.Item focusKey="home">Home</Sidebar.Item>
    <Sidebar.Item focusKey="browse">Browse</Sidebar.Item>
  </Sidebar.Group>
  
  <Sidebar.Group title="Library">
    <Sidebar.Item focusKey="favorites">Favorites</Sidebar.Item>
    <Sidebar.Item focusKey="watchlist">Watchlist</Sidebar.Item>
  </Sidebar.Group>
  
  <Sidebar.Group title="Settings">
    <Sidebar.Item focusKey="account">Account</Sidebar.Item>
    <Sidebar.Item focusKey="preferences">Preferences</Sidebar.Item>
  </Sidebar.Group>
</Sidebar>`}
        />
      </div>

      {/* Best Practices */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Use icons for better recognition when collapsed</li>
          <li>Group related items for better organization</li>
          <li>Keep the sidebar width consistent</li>
          <li>Provide visual feedback for the active item</li>
          <li>Consider auto-collapsing on small screens</li>
        </ul>
      </div>
    </div>
  );
}
