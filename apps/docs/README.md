# Smart TV Documentation

This is the documentation application for the Smart TV monorepo.

## Features

- Top navigation with links: Home, Docs, Components, Themes
- Left sidebar with package links and quick navigation
- Component preview pages with live preview and copyable code blocks
- Built with Next.js 15 and Tailwind CSS 4

## Development

### Run Locally

1. From the repository root, install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development server:

   ```bash
   pnpm -w -C apps/docs dev
   ```

   Or from the root:

   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
# From the docs directory
pnpm build

# Or from the root
cd apps/docs && pnpm build
```

### Start Production Server Locally

```bash
pnpm start
```

## Deployment

### Deploy to Vercel (Recommended)

The documentation is configured for easy deployment to Vercel:

1. **Quick Deploy** - Click the button below:
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/smarttv-dev/smart-tv)

2. **Manual Setup** - See [VERCEL_DEPLOYMENT.md](../../VERCEL_DEPLOYMENT.md) for detailed instructions

The project includes:

- `vercel.json` - Monorepo configuration
- `.vercelignore` - Build optimization

### Other Deployment Options

- **GitHub Pages**: Export static site with `next export`
- **Netlify**: Connect your repo and configure build settings
- **Cloudflare Pages**: Similar to Vercel setup

## Project Structure

```
apps/docs/
├── app/                    # Next.js App Router
│   ├── (documents)/        # Documentation routes
│   ├── themes/             # Theme showcase
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/             # React components
│   ├── Sidebar.tsx         # Navigation sidebar
│   ├── TopNav.tsx          # Top navigation
│   └── CodePreview.tsx     # Code examples
└── public/                 # Static assets
```

## Contributing

This app is part of an open-source project (BSD 3-Clause License). Contributions are welcome!

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Smart TV Project](../../README.md)
- [Deployment Guide](../../VERCEL_DEPLOYMENT.md)
