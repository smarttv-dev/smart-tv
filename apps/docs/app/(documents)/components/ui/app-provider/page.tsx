import React from "react";
import CodePreview from "@/components/CodePreview";

export default function AppProviderDoc(): React.ReactElement {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-gray-100">
          AppProvider
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          ⭐ The mandatory root provider that initializes spatial navigation and
          manages focus throughout your Smart TV application.
        </p>
      </div>

      {/* Critical Notice */}
      <div className="rounded-lg border-2 border-red-400 bg-red-50 p-6 dark:border-red-600 dark:bg-red-900/20">
        <h3 className="mb-2 text-xl font-semibold text-red-900 dark:text-red-100">
          ⚠️ Required Component
        </h3>
        <p className="mb-3 text-red-800 dark:text-red-200">
          <strong>AppProvider is mandatory for all Smart TV components.</strong>{" "}
          Without it, spatial navigation and focus management will not work.
        </p>
        <p className="text-red-800 dark:text-red-200">
          Always wrap your application&apos;s root component with AppProvider
          before using any other UI component.
        </p>
      </div>

      {/* Import */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Import
        </h2>
        <CodePreview
          language="tsx"
          code={`import { AppProvider } from '@smart-tv/ui';
import '@smart-tv/ui/styles.css'; // Don't forget to import styles`}
        />
      </div>

      {/* Basic Usage */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Basic Usage
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Wrap your entire application with AppProvider at the root level.
        </p>
        <CodePreview
          language="tsx"
          code={`import { AppProvider, Screen, Button } from '@smart-tv/ui';

function App() {
  return (
    <AppProvider>
      <Screen focusKey="main-screen">
        <h1>My Smart TV App</h1>
        <Button focusKey="play-button" onEnterPress={() => console.log('Play')}>
          Play
        </Button>
      </Screen>
    </AppProvider>
  );
}

export default App;`}
        />
      </div>

      {/* With Configuration */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          With Initialization Config
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Configure the spatial navigation system with initialization options.
        </p>
        <CodePreview
          language="tsx"
          code={`<AppProvider
  init={{
    // Enable debug mode to visualize focus (development only)
    debug: false,

    // Show visual debugging overlay
    visualDebug: false,

    // Throttle key presses in milliseconds
    throttle: 0,

    // Enable throttling for key presses
    throttleKeypresses: false,

    // Use getBoundingClientRect for layout calculations
    useGetBoundingClientRect: true,

    // Focus DOM nodes directly
    shouldFocusDOMNode: false,

    // Right-to-left layout support
    rtl: false,

    // Distance calculation method for spatial navigation
    distanceCalculationMethod: 'center', // 'center' | 'edges' | 'corners'
  }}
>
  <YourApp />
</AppProvider>`}
        />
      </div>

      {/* With Initial Label */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          With Initial Label
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Set an initial label for the app context (useful for app state
          management).
        </p>
        <CodePreview
          language="tsx"
          code={`<AppProvider initialLabel="home">
  <YourApp />
</AppProvider>`}
        />
      </div>

      {/* Using Context Methods */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Using AppProvider Context
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Access navigation methods and state using the useAppProvider hook.
        </p>
        <CodePreview
          language="tsx"
          code={`import { useAppProvider } from '@smart-tv/ui';

function MyComponent() {
  const {
    label,
    setLabel,
    setFocus,
    navigate,
    getFocusedKey,
    setRtl,
  } = useAppProvider();

  const handleAction = () => {
    // Set focus to a specific component
    setFocus('play-button');

    // Navigate programmatically
    navigate('down');

    // Get currently focused key
    const currentFocus = getFocusedKey();
    console.log('Focused:', currentFocus);

    // Change layout direction
    setRtl(true);

    // Update app label/state
    setLabel('playing');
  };

  return (
    <button onClick={handleAction}>
      Current State: {label}
    </button>
  );
}`}
        />
      </div>

      {/* Debug Mode */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Debug Mode
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Enable debug mode during development to see focus events and
          navigation details in the console.
        </p>
        <CodePreview
          language="tsx"
          code={`<AppProvider
  init={{
    debug: process.env.NODE_ENV === 'development',
    visualDebug: true, // Shows visual overlay of focusable elements
  }}
>
  <YourApp />
</AppProvider>`}
        />
      </div>

      {/* RTL Support */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          RTL Support
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Enable right-to-left layout for languages like Arabic and Hebrew.
        </p>
        <CodePreview
          language="tsx"
          code={`// Set RTL at initialization
<AppProvider init={{ rtl: true }}>
  <YourApp />
</AppProvider>

// Or toggle RTL dynamically
function LanguageSelector() {
  const { setRtl } = useAppProvider();

  return (
    <select onChange={(e) => setRtl(e.target.value === 'ar')}>
      <option value="en">English</option>
      <option value="ar">Arabic</option>
    </select>
  );
}`}
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
                  children
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  ReactNode
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  required
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Your application components
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  initialLabel
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  string
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  &apos;&apos;
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Initial app label/state
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  init
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  InitOptions
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">{`{ debug: false }`}</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Spatial navigation initialization config
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Init Options */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Init Options
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 dark:border-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Option
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
                  debug
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  boolean
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  false
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Enable console debug logs
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  visualDebug
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  boolean
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  false
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Show visual debugging overlay
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  throttle
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  number
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  0
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Throttle delay in milliseconds
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  throttleKeypresses
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  boolean
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  false
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Enable key press throttling
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  rtl
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  boolean
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  false
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Right-to-left layout
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  distanceCalculationMethod
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  string
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  center
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  center | edges | corners
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Context Methods */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Context Methods (useAppProvider)
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 dark:border-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Method
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  label
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  string
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Current app label/state
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  setLabel
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  (label: string) =&gt; void
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Update app label/state
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  setFocus
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  (focusKey: string) =&gt; void
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Programmatically focus an element
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  navigate
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  (direction: Direction) =&gt; void
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Navigate up/down/left/right
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  getFocusedKey
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  () =&gt; string
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Get currently focused key
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-sm text-blue-600 dark:text-blue-400">
                  setRtl
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  (rtl: boolean) =&gt; void
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  Toggle RTL layout
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
          <li>Always place AppProvider at the root of your application</li>
          <li>
            Import the CSS file:{" "}
            <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-700">
              import &apos;@smart-tv/ui/styles.css&apos;
            </code>
          </li>
          <li>
            Enable debug mode during development to troubleshoot focus issues
          </li>
          <li>Set throttle to 0 unless you experience performance issues</li>
          <li>
            Use the useAppProvider hook only within components wrapped by
            AppProvider
          </li>
          <li>Configure RTL based on user&apos;s language preference</li>
        </ul>
      </div>

      {/* Common Patterns */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Common Patterns
        </h2>

        <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900 dark:text-gray-100">
          App Structure
        </h3>
        <CodePreview
          language="tsx"
          code={`// app.tsx or main.tsx
import { AppProvider } from '@smart-tv/ui';
import '@smart-tv/ui/styles.css';
import { MainScreen } from './screens/MainScreen';

export default function App() {
  return (
    <AppProvider init={{ debug: false }}>
      <MainScreen />
    </AppProvider>
  );
}`}
        />

        <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900 dark:text-gray-100">
          With Router
        </h3>
        <CodePreview
          language="tsx"
          code={`import { AppProvider, RouterProvider, Route } from '@smart-tv/ui';

export default function App() {
  return (
    <AppProvider>
      <RouterProvider initial="/">
        <Route path="/" component={HomeScreen} />
        <Route path="/player/:id" component={PlayerScreen} />
        <Route path="/settings" component={SettingsScreen} />
      </RouterProvider>
    </AppProvider>
  );
}`}
        />
      </div>
    </div>
  );
}
