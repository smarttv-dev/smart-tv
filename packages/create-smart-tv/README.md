# create-smart-tv-app

🚀 A CLI tool to quickly scaffold Smart TV applications with React and Smart TV packages.

## Quick Start

### Using npx (Recommended)

```bash
npx create-smart-tv-app my-smart-tv-app
cd my-smart-tv-app
npm install
npm run dev
```

### Using npm

```bash
npm create smart-tv-app@latest my-smart-tv-app
cd my-smart-tv-app
npm install
npm run dev
```

### Using yarn

```bash
yarn create smart-tv-app my-smart-tv-app
cd my-smart-tv-app
yarn install
yarn dev
```

### Using pnpm

```bash
pnpm create smart-tv-app my-smart-tv-app
cd my-smart-tv-app
pnpm install
pnpm dev
```

### Command Options

```bash
# Show help
npx create-smart-tv-app --help

# Show version
npx create-smart-tv-app --version

# Create project
npx create-smart-tv-app my-project-name
```

## What's Included

The CLI creates a new Smart TV project with the following structure:

```
my-smart-tv-app/
├── src/
│   ├── App.tsx          # Main app component with Smart TV routing
│   ├── main.tsx         # Entry point with Smart TV polyfills
│   └── index.css        # Global styles with TV-specific CSS
├── .babelrc             # Babel configuration for legacy TV support
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore file
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── tsconfig.node.json   # TypeScript configuration for Node.js
└── vite.config.ts       # Vite configuration with legacy support
```

## Features

### 📺 Smart TV Optimized
- Pre-configured for Smart TV environments
- Legacy browser support (Chrome 38+, IE 11+)
- Remote control navigation support
- TV-specific CSS and styling

### ⚡ Modern Development Experience
- **Vite** for fast development and building
- **TypeScript** support out of the box
- **Tailwind CSS** for utility-first styling
- **ESLint** for code quality
- Hot module replacement during development

### 📦 Smart TV Packages Included
- **@smart-tv/ui**: UI components optimized for TV interfaces
- **@smart-tv/player**: Media player components for video/audio
- **@smart-tv/query**: Data fetching and state management

## Requirements

- Node.js 16 or higher
- npm, yarn, or pnpm

## License

MIT
