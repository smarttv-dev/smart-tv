# Smart TV 📺

A comprehensive toolkit for building Smart TV applications with React, TypeScript, and modern web technologies.

[![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![Node Version](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg)](https://pnpm.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)

> **📚 [Documentation](https://smart-tv-docs.vercel.app)** | **🎮 [UI Components](https://smart-tv-docs.vercel.app/components/ui)** | **🎬 [Video Player](https://smart-tv-docs.vercel.app/components/player)** | **⚡ [Data Query](https://smart-tv-docs.vercel.app/components/query)**

## 🌟 Features

- **📦 Modular Architecture**: Four production-ready packages for complete Smart TV development
- **🎮 Navigation**: Advanced remote control and keyboard navigation system
- **🎬 Video Player**: Professional-grade player with Shaka Player, DRM, and adaptive streaming
- **⚡ Smart Caching**: Optimized data fetching and caching with automatic deduplication
- **🎨 UI Components**: Comprehensive component library with focus management
- **📱 Multi-Platform**: Samsung Tizen, LG webOS, Android TV, Fire TV, and modern browsers
- **🔧 TypeScript First**: Full type safety with excellent IntelliSense support
- **🚀 CLI Tool**: Scaffold production-ready apps in seconds
- **♿ Accessibility**: Built-in accessibility features for TV platforms
- **🎯 Production Ready**: Battle-tested components used in real-world applications

## 📦 Packages

This monorepo contains the following packages:

### Published Packages (Available on npm)

| Package                                         | Version                                                  | Description                                | Documentation                                              |
| ----------------------------------------------- | -------------------------------------------------------- | ------------------------------------------ | ---------------------------------------------------------- |
| [`@smart-tv/ui`](./packages/ui)                 | ![npm](https://img.shields.io/npm/v/@smart-tv/ui)        | React components with navigation           | [Docs](https://smart-tv-docs.vercel.app/components/ui)     |
| [`@smart-tv/player`](./packages/player)         | ![npm](https://img.shields.io/npm/v/@smart-tv/player)    | Video player with Shaka Player integration | [Docs](https://smart-tv-docs.vercel.app/components/player) |
| [`@smart-tv/query`](./packages/query)           | ![npm](https://img.shields.io/npm/v/@smart-tv/query)     | Data fetching and caching utilities        | [Docs](https://smart-tv-docs.vercel.app/components/query)  |
| [`create-smart-tv`](./packages/create-smart-tv) | ![npm](https://img.shields.io/npm/v/create-smart-tv-app) | CLI tool to scaffold Smart TV applications | [README](./packages/create-smart-tv)                       |

### Internal Packages

- `@smart-tv/eslint-config` - Shared ESLint configurations
- `@smart-tv/typescript-config` - Shared TypeScript configurations
- `@smart-tv/tailwind-config` - Shared Tailwind CSS configurations

## 🚀 Quick Start

### Create a New Smart TV App

The fastest way to get started is using our CLI tool:

```bash
# Using npm
npm create smart-tv my-smart-tv-app

# Using pnpm
pnpm create smart-tv my-smart-tv-app

# Using yarn
yarn create smart-tv my-smart-tv-app
```

Then:

```bash
cd my-smart-tv-app
npm install
npm run dev
```

Your Smart TV app will be running at `http://localhost:5173` 🎉

### Install Individual Packages

#### UI Package (Required)

The core package providing navigation and UI components:

```bash
npm install @smart-tv/ui
# or
pnpm add @smart-tv/ui
# or
yarn add @smart-tv/ui
```

**Usage:**

```tsx
import { AppProvider, RouterProvider, Route, Button } from "@smart-tv/ui";
import "@smart-tv/ui/styles.css";

function App() {
  return (
    <AppProvider init={{ debug: false, visualDebug: false }}>
      <RouterProvider>
        <Route path="/" component={HomePage} />
        <Route path="/details/:id" component={DetailsPage} />
      </RouterProvider>
    </AppProvider>
  );
}
```

**[📚 Full UI Documentation](https://smart-tv-docs.vercel.app/components/ui)**

#### Player Package

Professional video player with adaptive streaming and DRM support:

```bash
npm install @smart-tv/player @smart-tv/ui shaka-player
# or
pnpm add @smart-tv/player @smart-tv/ui shaka-player
```

**Usage:**

```tsx
import { MediaProvider, VideoPlayer, PlayerController } from "@smart-tv/player";
import "@smart-tv/player/styles.css";

function App() {
  return (
    <MediaProvider>
      <div className="relative h-screen w-full bg-black">
        <VideoPlayer
          src="https://example.com/video.m3u8"
          poster="https://example.com/poster.jpg"
          autoPlay={false}
        />
        <PlayerController layout="netflix" />
      </div>
    </MediaProvider>
  );
}
```

**[📚 Full Player Documentation](https://smart-tv-docs.vercel.app/components/player)**

#### Query Package

Lightweight data fetching and caching for Smart TV apps:

```bash
npm install @smart-tv/query
# or
pnpm add @smart-tv/query
```

**Usage:**

```tsx
import { QueryClient, QueryClientProvider, useQuery } from "@smart-tv/query";

const queryClient = new QueryClient({
  staleTime: 1000 * 60 * 5,
  cacheTime: 1000 * 60 * 10,
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieList />
    </QueryClientProvider>
  );
}

function MovieList() {
  const { data, status } = useQuery(["movies"], () =>
    fetch("/api/movies").then((res) => res.json())
  );

  if (status === "loading") return <div>Loading...</div>;
  if (status === "error") return <div>Error loading movies</div>;

  return (
    <div>
      {data.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
```

**[📚 Full Query Documentation](https://smart-tv-docs.vercel.app/components/query)**

## 💡 Complete Example

Here's a complete example showing all three packages working together:

```tsx
import {
  AppProvider,
  RouterProvider,
  Route,
  Screen,
  Grid,
  Card,
} from "@smart-tv/ui";
import { QueryClient, QueryClientProvider, useQuery } from "@smart-tv/query";
import { MediaProvider, VideoPlayer, PlayerController } from "@smart-tv/player";
import "@smart-tv/ui/styles.css";
import "@smart-tv/player/styles.css";

// Initialize query client
const queryClient = new QueryClient({
  staleTime: 1000 * 60 * 5,
  cacheTime: 1000 * 60 * 10,
});

// Movie List Component
function MovieList() {
  const { data, status } = useQuery(["movies"], () =>
    fetch("/api/movies").then((res) => res.json())
  );

  if (status === "loading") return <div>Loading movies...</div>;
  if (status === "error") return <div>Error loading movies</div>;

  return (
    <Screen id="home" title="Movies">
      <Grid columns={4} gap={20}>
        {data.map((movie) => (
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
  );
}

// Movie Player Component
function MoviePlayer({ movieId }) {
  const { data: movie } = useQuery(["movie", movieId], () =>
    fetch(`/api/movies/${movieId}`).then((res) => res.json())
  );

  return (
    <MediaProvider>
      <div className="relative h-screen w-full bg-black">
        <VideoPlayer src={movie.videoUrl} poster={movie.poster} autoPlay />
        <PlayerController
          layout="netflix"
          title={movie.title}
          subtitle={movie.description}
        />
      </div>
    </MediaProvider>
  );
}

// Main App
function App() {
  return (
    <AppProvider init={{ debug: false, visualDebug: false }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider>
          <Route path="/" component={MovieList} />
          <Route path="/movie/:id" component={MoviePlayer} />
        </RouterProvider>
      </QueryClientProvider>
    </AppProvider>
  );
}

export default App;
```

This example demonstrates:

- **navigation** with AppProvider and RouterProvider
- **Data fetching** with useQuery
- **Video playback** with VideoPlayer and PlayerController
- **Remote control navigation** across all components

## 🏗️ Monorepo Structure

```
smart-tv/
├── apps/
│   ├── demo/              # Demo application showcasing features
│   ├── docs/              # Documentation website
├── packages/
│   ├── create-smart-tv/   # CLI tool (publishable)
│   ├── player/            # Video player (publishable)
│   ├── query/             # Data fetching (publishable)
│   ├── ui/                # UI components (publishable)
│   ├── eslint-config/     # ESLint configurations
│   ├── typescript-config/ # TypeScript configurations
│   └── tailwind-config/   # Tailwind configurations
├── CONTRIBUTING.md        # Contribution guidelines
├── CODE_OF_CONDUCT.md     # Code of conduct
├── SECURITY.md            # Security policy
├── CHANGELOG.md           # Version history
└── LICENSE                # BSD 3-Clause License
```

## 🛠️ Development

### Prerequisites

- Node.js >= 18
- pnpm >= 8.15.6

### Setup

1. Clone the repository:

```bash
git clone https://github.com/smarttv-dev/smart-tv.git
cd smart-tv
```

2. Install dependencies:

```bash
pnpm install
```

3. Build all packages:

```bash
pnpm build
```

4. Start development:

```bash
pnpm dev
```

### Available Scripts

| Script             | Description                         |
| ------------------ | ----------------------------------- |
| `pnpm dev`         | Start development mode for all apps |
| `pnpm build`       | Build all packages and apps         |
| `pnpm lint`        | Lint all packages                   |
| `pnpm check-types` | Type-check all packages             |
| `pnpm format`      | Format code with Prettier           |
| `pnpm clean`       | Clean all build artifacts           |

## 📖 Documentation

### Official Documentation

- **📚 [Main Documentation](https://smart-tv-docs.vercel.app)** - Complete documentation and guides
- **🎮 [UI Components](https://smart-tv-docs.vercel.app/components/ui)** - navigation and UI components
- **🎬 [Video Player](https://smart-tv-docs.vercel.app/components/player)** - Player API and examples
- **⚡ [Data Query](https://smart-tv-docs.vercel.app/components/query)** - Data fetching and caching

### Package Documentation

- [UI Package README](./packages/ui/README.md) - @smart-tv/ui documentation
- [Player Package README](./packages/player/README.md) - @smart-tv/player documentation
- [Query Package README](./packages/query/README.md) - @smart-tv/query documentation
- [CLI Package README](./packages/create-smart-tv/README.md) - create-smart-tv documentation

### Guides

- [Contributing Guide](./CONTRIBUTING.md) - How to contribute to the project
- [Security Policy](./SECURITY.md) - Security guidelines and reporting
- [Code of Conduct](./CODE_OF_CONDUCT.md) - Community guidelines
- [Changelog](./CHANGELOG.md) - Version history and updates

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guide](./CONTRIBUTING.md) to get started.

### Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🔧 Submit pull requests
- ⭐ Star the repository

### Development Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Run tests: `pnpm test`
5. Commit: `git commit -m "feat: add new feature"`
6. Push: `git push origin feature/my-feature`
7. Open a Pull Request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed instructions.

## 📋 Requirements

### Runtime Requirements

- Modern browser with support for:
  - ES2020+
  - Web Components
  - Media Source Extensions (MSE)
  - Encrypted Media Extensions (EME) for DRM content

### Development Requirements

- Node.js >= 18.x
- pnpm >= 8.15.6
- TypeScript >= 5.x

### Supported Platforms

- Samsung Tizen (2019+)
- LG webOS (4.0+)
- Android TV
- Fire TV
- Modern web browsers (Chrome, Firefox, Safari, Edge)

## 🔐 Security

Security is a top priority. If you discover a security vulnerability, please follow our [Security Policy](./SECURITY.md).

- ✅ Regular dependency updates
- ✅ Security audits
- ✅ Responsible disclosure process
- ✅ CVE tracking

## 📞 Support

### Get Help

- **📚 [Documentation](https://smart-tv-docs.vercel.app)** - Comprehensive guides and API reference
- **💬 [GitHub Discussions](https://github.com/smarttv-dev/smart-tv/discussions)** - Ask questions and share ideas
- **🐛 [Issue Tracker](https://github.com/smarttv-dev/smart-tv/issues)** - Report bugs and request features
- **⭐ [Star on GitHub](https://github.com/smarttv-dev/smart-tv)** - Show your support

### NPM Packages

- **[@smart-tv/ui](https://www.npmjs.com/package/@smart-tv/ui)** - UI Components on npm
- **[@smart-tv/player](https://www.npmjs.com/package/@smart-tv/player)** - Video Player on npm
- **[@smart-tv/query](https://www.npmjs.com/package/@smart-tv/query)** - Data Query on npm

## 🗺️ Roadmap

### Completed

- [x] Core UI components with navigation
- [x] Video player with Shaka Player integration
- [x] Data fetching and caching utilities
- [x] CLI tool for project scaffolding
- [x] Comprehensive documentation

### Planned Features

- [ ] Enhanced keyboard shortcuts and accessibility
- [ ] Additional Smart TV platform integrations (Roku, Apple TV)
- [ ] Advanced DRM and content protection features
- [ ] Performance monitoring and analytics tools
- [ ] Testing utilities and E2E testing framework
- [ ] Storybook integration for component showcase
- [ ] More templates and starter kits
- [ ] Developer tools browser extension
- [ ] Voice control integration
- [ ] Offline-first capabilities

## 🌟 Acknowledgments

### Built With

- **[React](https://react.dev/)** - A JavaScript library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Typed superset of JavaScript
- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling
- **[Turborepo](https://turbo.build/)** - High-performance build system for monorepos
- **[Shaka Player](https://github.com/shaka-project/shaka-player)** - JavaScript library for adaptive media playback
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

### Special Thanks

- The open-source community for their amazing tools and libraries
- All contributors who have helped improve this project
- Smart TV developers providing feedback and use cases

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/smarttv-dev/smart-tv?style=social)
![GitHub forks](https://img.shields.io/github/forks/smarttv-dev/smart-tv?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/smarttv-dev/smart-tv?style=social)
![GitHub issues](https://img.shields.io/github/issues/smarttv-dev/smart-tv)
![GitHub pull requests](https://img.shields.io/github/issues-pr/smarttv-dev/smart-tv)
![GitHub contributors](https://img.shields.io/github/contributors/smarttv-dev/smart-tv)
![GitHub last commit](https://img.shields.io/github/last-commit/smarttv-dev/smart-tv)

## 📧 Contact

**Author:** Forid Pathan  
**Email:** foridpathan45@gmail.com  
**GitHub:** [@foridpathan](https://github.com/foridpathan)

For business inquiries, partnership opportunities, or commercial support, please reach out via email.

## 📄 License

This project is licensed under the **BSD 3-Clause License** - see the [LICENSE](./LICENSE) file for details.

### What this means:

- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed
- ℹ️ License and copyright notice required

---

<div align="center">

**Made with ❤️ by [Forid Pathan](https://github.com/foridpathan)**

[⭐ Star on GitHub](https://github.com/smarttv-dev/smart-tv) · [📚 Documentation](https://smart-tv-docs.vercel.app) · [🐛 Report Bug](https://github.com/smarttv-dev/smart-tv/issues) · [💡 Request Feature](https://github.com/smarttv-dev/smart-tv/issues)

**Happy Coding! 🚀**

</div>
