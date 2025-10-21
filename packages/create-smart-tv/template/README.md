# Smart TV App

A Smart TV application built with React and Smart TV packages.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

2. Start the development server:

   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Features

- ⚡ Built with Vite for fast development
- 📺 Smart TV optimized components from `@smart-tv/ui`
- 🎬 Media player support with `@smart-tv/player`
- 🔄 Data fetching with `@smart-tv/query`
- 🎨 Styled with Tailwind CSS
- 📱 Responsive design for different TV screen sizes
- 🎮 Remote control navigation support

## Building for Production

```bash
npm run build
# or
pnpm build
# or
yarn build
```

The built files will be in the `dist` directory.

## Smart TV Packages

This project includes the following Smart TV packages:

- **@smart-tv/ui**: UI components optimized for TV interfaces
- **@smart-tv/player**: Media player components for video/audio
- **@smart-tv/query**: Data fetching and state management

## Development

The development server runs on `http://localhost:3000` and is configured to be accessible from the network (`0.0.0.0`) so you can test on actual Smart TV devices or simulators.

## Browser Support

This project is configured to support older Smart TV browsers including:

- Chrome 38+
- Internet Explorer 11+

Legacy polyfills are included for Promise support and other modern JavaScript features.
