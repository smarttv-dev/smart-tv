# @smart-tv/ui

A comprehensive React component library tailored for Smart TV applications. It provides spatial navigation, focusable UI components, routing, and utilities for building fast, accessible TV experiences with remote control or keyboard navigation.

## Features

- 🎯 **Spatial Navigation** - Smart directional navigation with customizable focus management
- 🎨 **UI Components** - Pre-built focusable components (Button, Card, Menu, Navbar, Sidebar)
- 🧭 **Routing System** - Built-in router with navigation stack management
- 📱 **On-Screen Keyboard** - Virtual keyboard with multiple layouts and themes
- 🎭 **Overlay Components** - Dialog, Drawer, Snackbar, Tooltip
- 📐 **Layout System** - Grid and Row components for responsive layouts
- 🔧 **React Hooks** - `useFocusable`, `useFocusContext`, `useRouter`, and more
- 🐛 **Visual Debugger** - Visual feedback for focus states during development
- ♿ **Accessibility** - Built with TV accessibility standards in mind

## Installation

Install the package using your preferred package manager:

```bash
# npm
npm install @smart-tv/ui

# pnpm
pnpm add @smart-tv/ui

# yarn
yarn add @smart-tv/ui
```

### Import Styles

Don't forget to import the CSS file in your app:

```ts
import '@smart-tv/ui/styles.css'
```

## Quick Start

### Basic Setup

Wrap your app with the required providers. **`AppProvider` is mandatory** and must be the outermost provider:

```tsx
import { AppProvider, RouterProvider, Route, Button } from '@smart-tv/ui'
import '@smart-tv/ui/styles.css'

function App() {
  return (
    <AppProvider init={{
      debug: false,
      visualDebug: false,
      distanceCalculationMethod: 'center',
    }}>
      <RouterProvider>
        <Route path="/" component={HomePage} />
        <Route path="/details/:id" component={DetailsPage} />
      </RouterProvider>
    </AppProvider>
  )
}

export default App
```

### With Query Client (for data fetching)

If you're using `@smart-tv/query` for data management:

```tsx
import { QueryClient, QueryClientProvider } from '@smart-tv/query'
import { AppProvider, RouterProvider, Route } from '@smart-tv/ui'
import '@smart-tv/ui/styles.css'

const queryClient = new QueryClient({
  staleTime: 1000 * 60 * 5, // 5 minutes
  cacheTime: 1000 * 60 * 10, // 10 minutes
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider init={{
        debug: false,
        visualDebug: false,
      }}>
        <RouterProvider>
          <Route path="/" component={HomePage} />
        </RouterProvider>
      </AppProvider>
    </QueryClientProvider>
  )
}

export default App
```

## Core Providers

### AppProvider (Required)

The main provider that initializes the spatial navigation system. **This provider is mandatory** for the library to work.

```tsx
import { AppProvider } from '@smart-tv/ui'

<AppProvider init={{
  debug: false,              // Enable debug logging
  visualDebug: false,        // Show visual focus indicators
  nativeMode: false,         // Use native focus behavior
  throttle: 0,              // Throttle navigation in milliseconds
  shouldFocusDOMNode: true, // Focus actual DOM nodes
  rtl: false,               // Right-to-left support
  distanceCalculationMethod: 'center', // 'center' | 'edges' | 'corners'
}}>
  {/* Your app */}
</AppProvider>
```

### RouterProvider (Recommended)

Built-in routing system with navigation stack management:

```tsx
import { RouterProvider, Route, Link, useRouter } from '@smart-tv/ui'

<RouterProvider initial="/" maxStack={50}>
  <Route path="/" component={HomePage} />
  <Route path="/movies" component={MoviesPage} />
  <Route path="/movie/:id" component={MovieDetails} />
</RouterProvider>
```

**Router hooks:**
- `useRouter()` - Access navigation methods (push, back, replace)
- `useParams()` - Get route parameters
- `useLocation()` - Get current route state

### QueryClientProvider (Optional)

For data fetching and caching (from `@smart-tv/query`):

```tsx
import { QueryClient, QueryClientProvider } from '@smart-tv/query'

const queryClient = new QueryClient({
  staleTime: 1000 * 60 * 5,
  cacheTime: 1000 * 60 * 10,
})

<QueryClientProvider client={queryClient}>
  {/* Your app */}
</QueryClientProvider>
```

## Components

### Core Components

#### Screen
Main screen wrapper component:
```tsx
import { Screen } from '@smart-tv/ui'

<Screen id="home" title="Home">
  {/* Screen content */}
</Screen>
```

#### Section
Focusable section within a screen:
```tsx
import { Section } from '@smart-tv/ui'

<Section focusKey="hero-section">
  {/* Section content */}
</Section>
```

### UI Components

#### Button
```tsx
import { Button } from '@smart-tv/ui'

<Button 
  onPress={() => console.log('Pressed')}
  variant="primary"
>
  Play Now
</Button>
```

#### Card
```tsx
import { Card } from '@smart-tv/ui'

<Card 
  focusKey="card-1"
  onPress={() => navigate('/details/1')}
>
  <img src="poster.jpg" alt="Movie" />
  <h3>Movie Title</h3>
</Card>
```

#### Menu & Navbar
```tsx
import { Menu, Navbar } from '@smart-tv/ui'

<Navbar>
  <Menu items={menuItems} />
</Navbar>
```

#### Sidebar
```tsx
import { Sidebar } from '@smart-tv/ui'

<Sidebar position="left" width={250}>
  {/* Sidebar content */}
</Sidebar>
```

### Layout Components

#### Grid
```tsx
import { Grid } from '@smart-tv/ui'

<Grid columns={4} gap={16}>
  {items.map(item => (
    <Card key={item.id} {...item} />
  ))}
</Grid>
```

#### Row
```tsx
import { Row } from '@smart-tv/ui'

<Row gap={12} align="center">
  {/* Row items */}
</Row>
```

### Overlay Components

#### Dialog
```tsx
import { Dialog } from '@smart-tv/ui'

<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
  <h2>Confirm Action</h2>
  <p>Are you sure?</p>
  <Button onPress={handleConfirm}>Yes</Button>
</Dialog>
```

#### Drawer
```tsx
import { Drawer } from '@smart-tv/ui'

<Drawer open={isOpen} position="right">
  {/* Drawer content */}
</Drawer>
```

#### Snackbar
```tsx
import { Snackbar } from '@smart-tv/ui'

<Snackbar message="Action completed" duration={3000} />
```

#### Tooltip
```tsx
import { Tooltip } from '@smart-tv/ui'

<Tooltip content="More information">
  <Button>Help</Button>
</Tooltip>
```

### Search Components

#### Keyboard (On-Screen Keyboard)
```tsx
import { Keyboard } from '@smart-tv/ui'

<Keyboard
  value={searchQuery}
  onChange={setSearchQuery}
  onSubmit={handleSearch}
  layout="qwerty" // 'qwerty' | 'abc' | 'numeric'
  theme="dark"
/>
```

## Hooks

### useFocusable
Register a component as focusable:

```tsx
import { useFocusable } from '@smart-tv/ui'

function CustomComponent() {
  const { ref, focused } = useFocusable({
    focusKey: 'my-component',
    onEnterPress: () => console.log('Enter pressed'),
    onArrowPress: (direction) => console.log(direction),
    onFocus: () => console.log('Focused'),
    onBlur: () => console.log('Blurred'),
  })

  return (
    <div ref={ref} className={focused ? 'focused' : ''}>
      {/* Component content */}
    </div>
  )
}
```

### useFocusContext
Access focus context in nested components:

```tsx
import { useFocusContext } from '@smart-tv/ui'

function NestedComponent() {
  const { focusKey, focused } = useFocusContext()
  return <div>Focus Key: {focusKey}</div>
}
```

### useRouter
Navigate between routes:

```tsx
import { useRouter } from '@smart-tv/ui'

function MovieCard() {
  const router = useRouter()

  const handlePress = () => {
    router.push('/movie/123', { from: 'home' })
  }

  return <Button onPress={handlePress}>View Details</Button>
}
```

### useParams
Access route parameters:

```tsx
import { useParams } from '@smart-tv/ui'

function MovieDetails() {
  const { id } = useParams()
  return <div>Movie ID: {id}</div>
}
```

## Utilities

### measureLayout
Measure component dimensions:

```tsx
import { measureLayout } from '@smart-tv/ui'

const layout = measureLayout(element)
// { left, top, right, bottom, width, height, x, y }
```

### VisualDebugger
Enable visual debugging during development:

```tsx
import { VisualDebugger } from '@smart-tv/ui'

// Enable in AppProvider
<AppProvider init={{ visualDebug: true }}>
  {/* Your app */}
</AppProvider>
```

### WritingDirection
Support for RTL layouts:

```tsx
import { WritingDirection } from '@smart-tv/ui'

// Enable RTL
<AppProvider init={{ rtl: true }}>
  {/* Your app */}
</AppProvider>
```

## Complete Example

Here's a complete example showing all the main providers working together:

```tsx
import { QueryClient, QueryClientProvider } from '@smart-tv/query'
import { AppProvider, RouterProvider, Route, Screen, Grid, Card } from '@smart-tv/ui'
import '@smart-tv/ui/styles.css'

const queryClient = new QueryClient({
  staleTime: 1000 * 60 * 5,
  cacheTime: 1000 * 60 * 10,
})

function HomePage() {
  const movies = [
    { id: 1, title: 'Movie 1', poster: '/poster1.jpg' },
    { id: 2, title: 'Movie 2', poster: '/poster2.jpg' },
  ]

  return (
    <Screen id="home" title="Home">
      <Grid columns={4} gap={20}>
        {movies.map(movie => (
          <Card
            key={movie.id}
            focusKey={`movie-${movie.id}`}
            onPress={() => router.push(`/movie/${movie.id}`)}
          >
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
          </Card>
        ))}
      </Grid>
    </Screen>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider init={{
        debug: false,
        visualDebug: false,
        distanceCalculationMethod: 'center',
      }}>
        <RouterProvider>
          <Route path="/" component={HomePage} />
          <Route path="/movie/:id" component={MovieDetails} />
        </RouterProvider>
      </AppProvider>
    </QueryClientProvider>
  )
}

export default App
```

## Key Navigation

The library automatically handles these keys:
- **Arrow Keys** (↑ ↓ ← →): Navigate between focusable elements
- **Enter**: Activate focused element (trigger onPress/onEnterPress)
- **Back/Escape**: Go back in navigation stack

You can customize key mappings in the `AppProvider` configuration.

## Documentation

For comprehensive documentation, API references, and interactive examples, visit:

**📚 [https://smart-tv-docs.vercel.app/components/ui](https://smart-tv-docs.vercel.app/components/ui)**

The documentation includes:
- Complete component API references
- Interactive examples and demos
- Best practices for Smart TV development
- Migration guides and troubleshooting

## Package Structure

```
@smart-tv/ui/
├── core/          # Core providers (AppProvider, RouterProvider, Screen, Section)
├── components/    # UI components (Button, Card, Menu, Navbar, Sidebar)
├── layout/        # Layout components (Grid, Row)
├── overlay/       # Overlay components (Dialog, Drawer, Snackbar, Tooltip)
├── search/        # Search components (Keyboard)
├── hooks/         # React hooks (useFocusable, useFocusContext, useRouter)
└── utils/         # Utilities (measureLayout, VisualDebugger, WritingDirection)
```

You can import from specific subpaths:

```tsx
import { AppProvider } from '@smart-tv/ui/core'
import { Button, Card } from '@smart-tv/ui/components'
import { Grid } from '@smart-tv/ui/layout'
import { Dialog } from '@smart-tv/ui/overlay'
import { useFocusable } from '@smart-tv/ui/hooks'
```

## Development

### Building the package

From the monorepo root:

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Build only @smart-tv/ui
pnpm --filter=@smart-tv/ui build
```

### Running the demo app

```bash
# Start the demo app
pnpm --filter=demo dev
```

### Watching for changes

```bash
# Watch and rebuild on changes
pnpm --filter=@smart-tv/ui dev:bundle
pnpm --filter=@smart-tv/ui dev:styles
```

## Debugging Tips

1. **Enable Visual Debug Mode:**
   ```tsx
   <AppProvider init={{ visualDebug: true }}>
   ```
   This will show focus boundaries around focusable elements.

2. **Enable Debug Logging:**
   ```tsx
   <AppProvider init={{ debug: true }}>
   ```
   This will log navigation events to the console.

3. **Check Focus Key:**
   Every focusable component should have a unique `focusKey` prop for proper navigation.

4. **Navigation not working?**
   - Ensure `AppProvider` is wrapping your entire app
   - Check that components have the `focusKey` prop
   - Verify that components are actually rendered (check with React DevTools)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Smart TV browsers (Tizen, webOS, etc.)

## TypeScript Support

The library is written in TypeScript and includes full type definitions. No additional `@types` packages are needed.

```tsx
import type { InitOptions, Direction, FocusableComponentLayout } from '@smart-tv/ui'
```

## Contributing

We welcome contributions! Please follow these guidelines:

1. **Code Style:** Follow the existing code style and use ESLint
2. **Testing:** Add tests for new features
3. **Documentation:** Update the README and docs for API changes
4. **Commits:** Use conventional commit messages

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for more details.

## License

MIT License - see [LICENSE](../../LICENSE) for details.

## Related Packages

- **[@smart-tv/query](../query)** - Data fetching and caching for Smart TV apps
- **[@smart-tv/player](../player)** - Video player component with focus support
- **[create-smart-tv](../create-smart-tv)** - CLI tool to scaffold new Smart TV projects

## Support

- 📖 [Documentation](https://smart-tv-docs.vercel.app)
- 🐛 [Report Issues](https://github.com/smarttv-dev/smart-tv/issues)
- 💬 [Discussions](https://github.com/smarttv-dev/smart-tv/discussions)

---

Made with ❤️ for Smart TV developers
