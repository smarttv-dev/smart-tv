import React from "react";
import CodePreview from "@/components/CodePreview";

export default function DrawerDoc(): React.ReactElement {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-gray-100">
          Drawer
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A slide-in panel component that appears from the edge of the screen,
          perfect for navigation menus and side panels.
        </p>
      </div>

      {/* Import */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Import
        </h2>
        <CodePreview
          language="tsx"
          code={`import { Drawer } from '@smart-tv/ui';`}
        />
      </div>

      {/* Basic Usage */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Basic Usage
        </h2>
        <CodePreview
          language="tsx"
          code={`import { useState } from 'react';
import { Drawer, Button } from '@smart-tv/ui';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button focusKey="open-drawer" onEnterPress={() => setOpen(true)}>
        Open Drawer
      </Button>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
      >
        <h2>Drawer Content</h2>
        <Button focusKey="close" onEnterPress={() => setOpen(false)}>
          Close
        </Button>
      </Drawer>
    </>
  );
}`}
        />
      </div>

      {/* Drawer Sides */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Drawer Position
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Control which side the drawer slides in from.
        </p>
        <CodePreview
          language="tsx"
          code={`// Left side drawer (default)
<Drawer open={open} side="left" onClose={handleClose}>
  <nav>Navigation Menu</nav>
</Drawer>

// Right side drawer
<Drawer open={open} side="right" onClose={handleClose}>
  <aside>Settings Panel</aside>
</Drawer>

// Top drawer
<Drawer open={open} side="top" onClose={handleClose}>
  <div>Notifications</div>
</Drawer>

// Bottom drawer
<Drawer open={open} side="bottom" onClose={handleClose}>
  <div>Player Controls</div>
</Drawer>`}
        />
      </div>

      {/* Custom Width */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Custom Width/Height
        </h2>
        <CodePreview
          language="tsx"
          code={`// Custom width for left/right drawers
<Drawer
  open={open}
  side="left"
  width="400px"
  onClose={handleClose}
>
  <div>Wide drawer content</div>
</Drawer>

// Custom height for top/bottom drawers
<Drawer
  open={open}
  side="bottom"
  height="300px"
  onClose={handleClose}
>
  <div>Tall drawer content</div>
</Drawer>

// Responsive width
<Drawer
  open={open}
  width="min(400px, 90vw)"
  onClose={handleClose}
>
  <div>Responsive drawer</div>
</Drawer>`}
        />
      </div>

      {/* With Overlay */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Overlay Configuration
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Control the backdrop overlay behavior.
        </p>
        <CodePreview
          language="tsx"
          code={`// With backdrop overlay (default)
<Drawer
  open={open}
  overlay={true}
  onClose={handleClose}
>
  <div>Content</div>
</Drawer>

// Without overlay
<Drawer
  open={open}
  overlay={false}
  onClose={handleClose}
>
  <div>Content without backdrop</div>
</Drawer>

// Custom overlay opacity
<Drawer
  open={open}
  overlay={true}
  className="[&>.overlay]:bg-black/80"
  onClose={handleClose}
>
  <div>Darker overlay</div>
</Drawer>`}
        />
      </div>

      {/* Close Behavior */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Close Behavior
        </h2>
        <CodePreview
          language="tsx"
          code={`// Close on backdrop click
<Drawer
  open={open}
  closeOnBackdrop={true}
  onClose={handleClose}
>
  <div>Click outside to close</div>
</Drawer>

// Close on Escape key
<Drawer
  open={open}
  closeOnEsc={true}
  onClose={handleClose}
>
  <div>Press ESC to close</div>
</Drawer>

// Both close methods
<Drawer
  open={open}
  closeOnBackdrop={true}
  closeOnEsc={true}
  onClose={handleClose}
>
  <div>Multiple close options</div>
</Drawer>`}
        />
      </div>

      {/* Navigation Drawer */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Navigation Drawer
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Create a navigation menu with focus management.
        </p>
        <CodePreview
          language="tsx"
          code={`import { Drawer, Section, Button } from '@smart-tv/ui';

function NavigationDrawer({ open, onClose }) {
  return (
    <Drawer
      open={open}
      side="left"
      width="300px"
      onClose={onClose}
      closeOnBackdrop={true}
    >
      <Section
        focusKey="nav-menu"
        className="h-full p-6"
        isFocusBoundary
        focusBoundaryDirections={['left']}
      >
        <h2 className="text-2xl mb-6">Menu</h2>

        <nav className="space-y-2">
          <Button focusKey="nav-home" onEnterPress={() => navigate('/')}>
            Home
          </Button>
          <Button focusKey="nav-movies" onEnterPress={() => navigate('/movies')}>
            Movies
          </Button>
          <Button focusKey="nav-series" onEnterPress={() => navigate('/series')}>
            TV Series
          </Button>
          <Button focusKey="nav-settings" onEnterPress={() => navigate('/settings')}>
            Settings
          </Button>
        </nav>
      </Section>
    </Drawer>
  );
}`}
        />
      </div>

      {/* Animation */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Custom Animation
        </h2>
        <CodePreview
          language="tsx"
          code={`<Drawer
  open={open}
  side="right"
  onClose={handleClose}
  className="
    transition-transform
    duration-300
    ease-out
    data-[open=true]:translate-x-0
    data-[open=false]:translate-x-full
  "
>
  <div>Smooth slide animation</div>
</Drawer>`}
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
                  open
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  boolean
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  required
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Controls drawer visibility
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  onClose
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  () =&gt; void
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  required
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Close handler
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  side
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  left | right | top | bottom
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  left
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Side to slide from
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  width
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  string
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  320px
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Drawer width (left/right)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  height
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  string
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  auto
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Drawer height (top/bottom)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  overlay
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  boolean
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  true
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Show backdrop overlay
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  closeOnBackdrop
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  boolean
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  false
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Close on backdrop click
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  closeOnEsc
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  boolean
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  false
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Close on Escape key
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
                  CSS classes
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
          <li>Use drawers for navigation menus and supplementary content</li>
          <li>Set focus boundaries to keep navigation within the drawer</li>
          <li>Enable closeOnBackdrop for better UX on TV remotes</li>
          <li>
            Keep drawer width appropriate for TV screens (300-400px typically)
          </li>
          <li>
            Use left/right drawers for navigation, top/bottom for contextual
            content
          </li>
          <li>Provide visual feedback for the active/focused item</li>
        </ul>
      </div>
    </div>
  );
}
