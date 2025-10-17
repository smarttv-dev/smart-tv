import React from "react";
import CodePreview from "../../../../../components/CodePreview";

export default function RouterDoc(): React.ReactElement {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Router</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Client-side routing system with history management, dynamic routes, and focus-aware navigation for Smart TV apps.
        </p>
      </div>

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Import</h2>
        <CodePreview
          language="tsx"
          code={`import { 
  RouterProvider, 
  Route, 
  Link,
  useRouter,
  useParams,
  useRoute,
  useLocation
} from '@smart-tv/ui';`}
        />
      </div>

      {/* Basic Usage */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Basic Usage</h2>
        <CodePreview
          language="tsx"
          code={`import { AppProvider, RouterProvider, Route, Screen } from '@smart-tv/ui';

function HomeScreen() {
  return (
    <Screen focusKey="home" selFocus>
      <h1>Home Screen</h1>
    </Screen>
  );
}

function AboutScreen() {
  return (
    <Screen focusKey="about" selFocus>
      <h1>About Screen</h1>
    </Screen>
  );
}

function App() {
  return (
    <AppProvider>
      <RouterProvider initial="/">
        <Route path="/" component={HomeScreen} />
        <Route path="/about" component={AboutScreen} />
      </RouterProvider>
    </AppProvider>
  );
}`}
        />
      </div>

      {/* Dynamic Routes */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Dynamic Routes with Parameters</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Use <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">:param</code> syntax for dynamic route segments.
        </p>
        <CodePreview
          language="tsx"
          code={`import { useParams } from '@smart-tv/ui';

function PlayerScreen() {
  const { id } = useParams<{ id: string }>();
  
  return (
    <Screen focusKey="player" selFocus>
      <h1>Playing video: {id}</h1>
    </Screen>
  );
}

function App() {
  return (
    <AppProvider>
      <RouterProvider initial="/">
        <Route path="/" component={HomeScreen} />
        <Route path="/player/:id" component={PlayerScreen} />
        <Route path="/category/:categoryId/video/:videoId" component={DetailScreen} />
      </RouterProvider>
    </AppProvider>
  );
}`}
        />
      </div>

      {/* Navigation with Link */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Navigation with Link Component</h2>
        <CodePreview
          language="tsx"
          code={`import { Link, Button } from '@smart-tv/ui';

function HomeScreen() {
  return (
    <Screen focusKey="home">
      <h1>Home</h1>
      
      {/* Link as a focusable button */}
      <Link to="/about" focusKey="about-link">
        <Button>Go to About</Button>
      </Link>
      
      {/* Link with parameters */}
      <Link to="/player/123" focusKey="player-link">
        <Button>Watch Video 123</Button>
      </Link>
      
      {/* Link with state */}
      <Link 
        to="/details" 
        state={{ videoData: { title: 'My Video' } }}
        focusKey="details-link"
      >
        <Button>View Details</Button>
      </Link>
    </Screen>
  );
}`}
        />
      </div>

      {/* Programmatic Navigation */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Programmatic Navigation</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Use the <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">useRouter</code> hook for programmatic navigation.
        </p>
        <CodePreview
          language="tsx"
          code={`import { useRouter, Button } from '@smart-tv/ui';

function HomeScreen() {
  const router = useRouter();
  
  const handleNavigate = () => {
    // Navigate to a route
    router.push('/about');
    
    // Navigate with parameters
    router.push('/player/456');
    
    // Navigate with state
    router.push('/details', { videoId: '789' });
    
    // Go back
    router.back();
    
    // Replace current route (no history entry)
    router.replace('/login');
    
    // Check if can go back
    if (router.canGoBack()) {
      router.back();
    }
  };
  
  return (
    <Screen focusKey="home">
      <Button focusKey="nav-button" onEnterPress={handleNavigate}>
        Navigate
      </Button>
    </Screen>
  );
}`}
        />
      </div>

      {/* Router Configuration */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Router Configuration</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Configure router behavior with advanced options.
        </p>
        <CodePreview
          language="tsx"
          code={`<RouterProvider
  initial="/"
  maxStack={10} // Limit history stack size
  collapseSameBase={true} // Collapse routes with same base path
  skipDuplicates={true} // Skip duplicate consecutive routes
>
  <Route path="/" component={HomeScreen} />
  <Route path="/about" component={AboutScreen} />
</RouterProvider>`}
        />
      </div>

      {/* Skippable Routes */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Skippable Routes</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Mark routes as skippable to bypass them when navigating back.
        </p>
        <CodePreview
          language="tsx"
          code={`<RouterProvider initial="/">
  <Route path="/" component={HomeScreen} />
  
  {/* Loading screen will be skipped when going back */}
  <Route path="/loading" component={LoadingScreen} skippable />
  
  <Route path="/player/:id" component={PlayerScreen} />
</RouterProvider>

// When user goes from Home -> Loading -> Player
// and presses back, they'll return directly to Home, skipping Loading`}
        />
      </div>

      {/* useRoute Hook */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">useRoute Hook</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Get current route information and state.
        </p>
        <CodePreview
          language="tsx"
          code={`import { useRoute } from '@smart-tv/ui';

function MyScreen() {
  const route = useRoute();
  
  console.log(route.path);      // Current path: "/player/123"
  console.log(route.params);    // Params: { id: "123" }
  console.log(route.state);     // Any state passed during navigation
  console.log(route.skippable); // Whether route is skippable
  
  return <div>Current path: {route.path}</div>;
}`}
        />
      </div>

      {/* useLocation Hook */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">useLocation Hook</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Get current location information.
        </p>
        <CodePreview
          language="tsx"
          code={`import { useLocation } from '@smart-tv/ui';

function Navigation() {
  const location = useLocation();
  
  return (
    <nav>
      <Link 
        to="/" 
        className={location.pathname === '/' ? 'active' : ''}
      >
        Home
      </Link>
      <Link 
        to="/about"
        className={location.pathname === '/about' ? 'active' : ''}
      >
        About
      </Link>
    </nav>
  );
}`}
        />
      </div>

      {/* Access State from Navigation */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Accessing Navigation State</h2>
        <CodePreview
          language="tsx"
          code={`// Passing state during navigation
function HomeScreen() {
  const router = useRouter();
  
  const openPlayer = (video) => {
    router.push('/player/123', { 
      videoTitle: video.title,
      resumeTime: video.lastPosition 
    });
  };
  
  return <Button onEnterPress={() => openPlayer(myVideo)}>Play</Button>;
}

// Receiving state in destination route
function PlayerScreen() {
  const route = useRoute();
  const { videoTitle, resumeTime } = route.state || {};
  
  return (
    <div>
      <h1>{videoTitle}</h1>
      <p>Resume from: {resumeTime}s</p>
    </div>
  );
}`}
        />
      </div>

      {/* Props Reference */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">RouterProvider Props</h2>
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
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">initial</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">required</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Initial route path</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">maxStack</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">number</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">50</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Max history stack size</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">collapseSameBase</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Collapse same base paths</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">skipDuplicates</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Skip duplicate routes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Route Props */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Route Props</h2>
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
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">path</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">string</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">required</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Route path pattern</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">component</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">ComponentType</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">required</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Component to render</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">skippable</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">false</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Skip when navigating back</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* useRouter Return */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">useRouter Methods</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 dark:border-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Method</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Signature</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">push</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">(path, state?) =&gt; void</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Navigate to path</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">replace</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">(path, state?) =&gt; void</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Replace current route</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">back</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">() =&gt; void</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Go back one route</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">canGoBack</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">() =&gt; boolean</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Check if can go back</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Best Practices */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Always wrap RouterProvider inside AppProvider</li>
          <li>Use dynamic parameters (:id) for content-specific routes</li>
          <li>Mark transient screens (loading, splash) as skippable</li>
          <li>Pass complex data via state instead of URL parameters</li>
          <li>Use replace() for redirects to avoid cluttering history</li>
          <li>Each Screen component should have selFocus for proper focus management</li>
          <li>Handle back button navigation with router.back() or browser back event</li>
        </ul>
      </div>
    </div>
  );
}
