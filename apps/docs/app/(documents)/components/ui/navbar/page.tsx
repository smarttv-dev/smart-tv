import React from "react";
import CodePreview from "@/components/CodePreview";

export default function NavbarDoc(): React.ReactElement {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-gray-100">
          Navbar
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A top navigation bar component for app-level navigation with logo,
          menu items, and actions.
        </p>
      </div>

      {/* Import */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Import
        </h2>
        <CodePreview
          language="tsx"
          code={`import { Navbar } from '@smart-tv/ui';`}
        />
      </div>

      {/* Basic Usage */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Basic Usage
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Create a simple navbar with logo and navigation items.
        </p>
        <CodePreview
          language="tsx"
          code={`<Navbar focusKey="navbar">
  <Navbar.Logo>My App</Navbar.Logo>
  <Navbar.Menu>
    <Navbar.Item focusKey="home" onEnterPress={() => navigate('/')}>
      Home
    </Navbar.Item>
    <Navbar.Item focusKey="browse" onEnterPress={() => navigate('/browse')}>
      Browse
    </Navbar.Item>
    <Navbar.Item focusKey="search" onEnterPress={() => navigate('/search')}>
      Search
    </Navbar.Item>
  </Navbar.Menu>
</Navbar>`}
        />
      </div>

      {/* With Actions */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          With Action Buttons
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Add action buttons like settings or user profile.
        </p>
        <CodePreview
          language="tsx"
          code={`<Navbar focusKey="navbar-with-actions">
  <Navbar.Logo>My App</Navbar.Logo>
  <Navbar.Menu>
    <Navbar.Item focusKey="home">Home</Navbar.Item>
    <Navbar.Item focusKey="browse">Browse</Navbar.Item>
  </Navbar.Menu>
  <Navbar.Actions>
    <Button focusKey="settings-btn" variant="ghost">
      <SettingsIcon />
    </Button>
    <Button focusKey="profile-btn" variant="ghost">
      <UserIcon />
    </Button>
  </Navbar.Actions>
</Navbar>`}
        />
      </div>

      {/* Sticky Navbar */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Sticky Position
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Make the navbar sticky at the top during scroll.
        </p>
        <CodePreview
          language="tsx"
          code={`<Navbar
  focusKey="sticky-navbar"
  sticky={true}
  className="sticky top-0 z-50"
>
  <Navbar.Logo>My App</Navbar.Logo>
  <Navbar.Menu>
    <Navbar.Item focusKey="home">Home</Navbar.Item>
  </Navbar.Menu>
</Navbar>`}
        />
      </div>

      {/* Custom Styling */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Custom Styling
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Customize navbar appearance with themes and colors.
        </p>
        <CodePreview
          language="tsx"
          code={`<Navbar
  focusKey="custom-navbar"
  className="bg-gradient-to-r from-purple-600 to-blue-600"
>
  <Navbar.Logo className="text-white font-bold">
    Brand
  </Navbar.Logo>
  <Navbar.Menu className="text-white">
    <Navbar.Item
      focusKey="home"
      active="bg-white/20 rounded-md"
    >
      Home
    </Navbar.Item>
  </Navbar.Menu>
</Navbar>`}
        />
      </div>

      {/* Best Practices */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Best Practices
        </h2>
        <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-300">
          <li>Keep the navbar simple with 4-6 primary navigation items</li>
          <li>Place most important actions on the right side</li>
          <li>Use consistent styling across your application</li>
          <li>Make the logo focusable to return home</li>
          <li>Ensure navbar is always accessible via remote control</li>
        </ul>
      </div>
    </div>
  );
}
