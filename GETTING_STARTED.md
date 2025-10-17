# Quick Start Guide

Get started with Smart TV packages in minutes! This guide will help you set up and run your first Smart TV application.

## Table of Contents

- [Installation](#installation)
- [Create New App](#create-new-app)
- [Manual Setup](#manual-setup)
- [Basic Usage](#basic-usage)
- [Next Steps](#next-steps)

## Installation

### Prerequisites

Before you begin, ensure you have:

- **Node.js**: >= 18.x ([Download](https://nodejs.org/))
- **Package Manager**: npm, pnpm, or yarn
- **Text Editor**: VS Code recommended

### Verify Installation

```bash
node --version  # Should show v18.x or higher
npm --version   # Should show v9.x or higher
```

## Create New App

The fastest way to get started is using our CLI tool.

### Option 1: Using npx (Recommended)

```bash
# Create a new Smart TV app
npx create-smart-tv-app my-tv-app

# Navigate to the project
cd my-tv-app

# Install dependencies
npm install

# Start development server
npm run dev
```

### Option 2: Using pnpm

```bash
pnpm create smart-tv-app my-tv-app
cd my-tv-app
pnpm install
pnpm dev
```

### Option 3: Using yarn

```bash
yarn create smart-tv-app my-tv-app
cd my-tv-app
yarn install
yarn dev
```

## Manual Setup

If you prefer to set up manually or add to an existing project:

### 1. Install Packages

```bash
# Install player package
npm install @smart-tv/player

# Install query package
npm install @smart-tv/query

# Install peer dependencies
npm install react react-dom
```

### 2. Create a Basic App

**App.tsx**

```tsx
import React from 'react';
import { Player } from '@smart-tv/player';
import { QueryClient, QueryClientProvider, useQuery } from '@smart-tv/query';
import '@smart-tv/player/styles.css';

// Create a client
const queryClient = new QueryClient();

function VideoPage() {
  const { data, loading } = useQuery({
    queryKey: ['video-info'],
    queryFn: async () => {
      const response = await fetch('/api/video');
      return response.json();
    },
  });

  if (loading) return <div>Loading...</div>;

  return (
    <div className="h-screen bg-black">
      <Player
        src={data.videoUrl}
        poster={data.posterUrl}
        title={data.title}
        autoPlay={false}
      />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <VideoPage />
    </QueryClientProvider>
  );
}

export default App;
```

### 3. Start Development

```bash
npm run dev
```

Open your browser at `http://localhost:5173` (or the port shown in your terminal).

## Basic Usage

### Using the Player

```tsx
import { Player } from '@smart-tv/player';
import '@smart-tv/player/styles.css';

function MyPlayer() {
  return (
    <Player
      src="https://example.com/video.m3u8"
      poster="https://example.com/poster.jpg"
      autoPlay={false}
      onPlay={() => console.log('Playing')}
      onPause={() => console.log('Paused')}
      onEnded={() => console.log('Ended')}
    />
  );
}
```

### Using the Query Hook

```tsx
import { useQuery } from '@smart-tv/query';

function MovieList() {
  const { data, loading, error, refetch } = useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      const response = await fetch('/api/movies');
      return response.json();
    },
  });

  if (loading) return <div>Loading movies...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Movies</h1>
      <button onClick={refetch}>Refresh</button>
      <ul>
        {data.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

### Using Mutations

```tsx
import { useMutation } from '@smart-tv/query';

function AddMovie() {
  const mutation = useMutation({
    mutationFn: async (newMovie) => {
      const response = await fetch('/api/movies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMovie),
      });
      return response.json();
    },
    onSuccess: () => {
      console.log('Movie added successfully!');
    },
  });

  return (
    <button
      onClick={() => mutation.mutate({ title: 'New Movie', year: 2025 })}
      disabled={mutation.loading}
    >
      {mutation.loading ? 'Adding...' : 'Add Movie'}
    </button>
  );
}
```

## Project Structure

After creating a new app, your project will look like this:

```
my-tv-app/
├── node_modules/
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Entry point
│   ├── index.css         # Global styles
│   ├── components/       # Your components
│   ├── pages/            # Your pages
│   └── data/             # Data fetching logic
├── public/               # Static assets
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite config
└── tailwind.config.js    # Tailwind config
```

## Common Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Format code
npm run format
```

## Next Steps

### 1. Explore Examples

Check out the [demo app](../apps/demo) for complete examples.

### 2. Read Documentation

- [Player API Documentation](../packages/player/README.md)
- [Query API Documentation](../packages/query/README.md)
- [Contributing Guide](../CONTRIBUTING.md)

### 3. Customize Your App

- Add routing with React Router
- Implement authentication
- Connect to your API
- Customize the theme
- Add more pages and features

### 4. Deploy

Build and deploy your app:

```bash
# Build for production
npm run build

# Deploy the dist/ folder to your hosting provider
```

Recommended hosting providers:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Your TV platform's hosting solution

## Troubleshooting

### Port Already in Use

If port 5173 is already in use:

```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:5173 | xargs kill -9
```

Or change the port in `vite.config.ts`:

```ts
export default defineConfig({
  server: {
    port: 3000, // Change to your preferred port
  },
});
```

### Module Not Found

If you get module errors:

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Make sure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "moduleResolution": "node",
    "resolveJsonModule": true
  }
}
```

## Getting Help

- 📖 [Documentation](https://github.com/foridpathan/smart-tv)
- 💬 [GitHub Discussions](https://github.com/foridpathan/smart-tv/discussions)
- 🐛 [Issue Tracker](https://github.com/foridpathan/smart-tv/issues)
- ⭐ [Star on GitHub](https://github.com/foridpathan/smart-tv)

## Community

Join our community:

- Star the repo on GitHub
- Follow for updates
- Share your projects
- Contribute to the codebase

---

Happy coding! 🚀 Build amazing Smart TV experiences!
