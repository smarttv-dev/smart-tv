# Smart TV 📺

A comprehensive toolkit for building Smart TV applications with React, TypeScript, and modern web technologies.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg)](https://pnpm.io/)

> **📚 [Documentation](./apps/docs)** | **🚀 [Quick Deploy](./DEPLOY_NOW.md)** | **📖 [Getting Started](./GETTING_STARTED.md)**

## 🌟 Features

- **📦 Modular Packages**: Three core packages for different aspects of Smart TV development
- **🎮 Spatial Navigation**: Built-in support for TV remote control navigation
- **🎬 Video Player**: Powerful video player built on Shaka Player with adaptive streaming
- **⚡ Performance Optimized**: Optimized for Smart TV hardware constraints
- **🎨 Customizable UI**: Tailwind CSS-based components with full customization
- **📱 Multi-Platform**: Support for various Smart TV platforms and browsers
- **🔧 Developer Friendly**: TypeScript, ESLint, Prettier, and modern tooling
- **🚀 Quick Start**: CLI tool to scaffold projects in seconds

## 📦 Packages

This monorepo contains the following packages:

### Published Packages (Available on npm)

| Package | Version | Description |
|---------|---------|-------------|
| [`@smart-tv/player`](./packages/player) | ![npm](https://img.shields.io/npm/v/@smart-tv/player) | Video player component with Shaka Player integration |
| [`@smart-tv/query`](./packages/query) | ![npm](https://img.shields.io/npm/v/@smart-tv/query) | Data fetching and caching utilities for Smart TV apps |
| [`create-smart-tv-app`](./packages/create-smart-tv) | ![npm](https://img.shields.io/npm/v/create-smart-tv-app) | CLI tool to scaffold Smart TV applications |

### Internal Packages

- `@smart-tv/ui` - Shared UI components
- `@smart-tv/eslint-config` - Shared ESLint configurations
- `@smart-tv/typescript-config` - Shared TypeScript configurations
- `@smart-tv/tailwind-config` - Shared Tailwind CSS configurations

## 🚀 Quick Start

### Create a New Smart TV App

The fastest way to get started is using our CLI tool:

```bash
# Using npm
npm create smart-tv-app my-smart-tv-app

# Using pnpm
pnpm create smart-tv-app my-smart-tv-app

# Using yarn
yarn create smart-tv-app my-smart-tv-app
```

Then:

```bash
cd my-smart-tv-app
npm install
npm run dev
```

### Install Individual Packages

#### Player Package

```bash
npm install @smart-tv/player
# or
pnpm add @smart-tv/player
```

**Usage:**

```tsx
import { Player } from '@smart-tv/player';
import '@smart-tv/player/styles.css';

function App() {
  return (
    <Player
      src="https://example.com/video.mpd"
      poster="https://example.com/poster.jpg"
      autoPlay={false}
    />
  );
}
```

#### Query Package

```bash
npm install @smart-tv/query
# or
pnpm add @smart-tv/query
```

**Usage:**

```tsx
import { useQuery } from '@smart-tv/query';

function MovieList() {
  const { data, loading, error } = useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      const response = await fetch('/api/movies');
      return response.json();
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
```

## 🏗️ Monorepo Structure

```
smart-tv/
├── apps/
│   ├── demo/              # Demo application showcasing features
│   ├── docs/              # Documentation website
│   └── web/               # Main website
├── packages/
│   ├── create-smart-tv/   # CLI tool (publishable)
│   ├── player/            # Video player (publishable)
│   ├── query/             # Data fetching (publishable)
│   ├── ui/                # Shared UI components
│   ├── eslint-config/     # ESLint configurations
│   ├── typescript-config/ # TypeScript configurations
│   └── tailwind-config/   # Tailwind configurations
├── CONTRIBUTING.md        # Contribution guidelines
├── CODE_OF_CONDUCT.md     # Code of conduct
├── SECURITY.md            # Security policy
├── CHANGELOG.md           # Version history
└── LICENSE                # MIT License
```

## 🛠️ Development

### Prerequisites

- Node.js >= 18
- pnpm 8.15.6

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

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development mode for all apps |
| `pnpm build` | Build all packages and apps |
| `pnpm lint` | Lint all packages |
| `pnpm check-types` | Type-check all packages |
| `pnpm format` | Format code with Prettier |
| `pnpm clean` | Clean all build artifacts |

## 📖 Documentation

- [Getting Started Guide](./docs/getting-started.md)
- [Player API Documentation](./packages/player/README.md)
- [Query API Documentation](./packages/query/README.md)
- [CLI Usage Guide](./packages/create-smart-tv/README.md)
- [Contributing Guide](./CONTRIBUTING.md)
- [Publishing Guide](./PUBLISHING.md)
- [Architecture Overview](./docs/architecture.md)

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

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🌟 Acknowledgments

Built with:
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [Turborepo](https://turbo.build/) - Monorepo management
- [Shaka Player](https://github.com/shaka-project/shaka-player) - Video player
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## 📞 Support

- 📖 [Documentation](https://github.com/smarttv-dev/smart-tv)
- 💬 [GitHub Discussions](https://github.com/smarttv-dev/smart-tv/discussions)
- 🐛 [Issue Tracker](https://github.com/smarttv-dev/smart-tv/issues)
- ⭐ [Star on GitHub](https://github.com/smarttv-dev/smart-tv)

## 🗺️ Roadmap

- [ ] Enhanced spatial navigation utilities
- [ ] More Smart TV platform integrations
- [ ] Advanced DRM support
- [ ] Performance monitoring tools
- [ ] Testing utilities
- [ ] Storybook integration
- [ ] More examples and templates

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/foridpathan/smart-tv?style=social)
![GitHub forks](https://img.shields.io/github/forks/foridpathan/smart-tv?style=social)
![GitHub issues](https://img.shields.io/github/issues/foridpathan/smart-tv)
![GitHub pull requests](https://img.shields.io/github/issues-pr/foridpathan/smart-tv)

---

Made with ❤️ by the ForidPathan

**Happy Coding! 🚀**
