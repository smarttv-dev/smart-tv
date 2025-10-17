# Publishing Guide

This document provides comprehensive instructions for publishing Smart TV packages to npm.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Package Overview](#package-overview)
- [Pre-Publishing Checklist](#pre-publishing-checklist)
- [Publishing Process](#publishing-process)
- [Post-Publishing Tasks](#post-publishing-tasks)
- [Automated Publishing](#automated-publishing)
- [Troubleshooting](#troubleshooting)

## Prerequisites

### Required Tools

1. **Node.js**: >= 18.x
2. **pnpm**: 8.15.6
3. **npm account**: [Sign up](https://www.npmjs.com/signup) if you don't have one
4. **npm authentication**: Login to npm

### Setup npm Authentication

```bash
# Login to npm
npm login

# Verify authentication
npm whoami
```

### Setup Organization (if using @smart-tv scope)

If publishing scoped packages (`@smart-tv/*`), ensure:

1. Organization exists on npm: `smart-tv`
2. You have publish access to the organization
3. Packages are configured as public (free) or paid

```bash
# Check organization access
npm org ls smart-tv
```

## Package Overview

### Packages to Publish

| Package | Name | Scope | Initial Version |
|---------|------|-------|-----------------|
| Player | `@smart-tv/player` | Public | 0.1.0 |
| Query | `@smart-tv/query` | Public | 0.1.0 |
| Create CLI | `create-smart-tv-app` | Public | 1.0.0 |

### Package Configuration

Each package must have:
- ✅ Unique name
- ✅ Version number
- ✅ License (MIT)
- ✅ Repository field
- ✅ Keywords for discoverability
- ✅ Main entry points (main, module, types)
- ✅ Files to include
- ✅ README.md

## Pre-Publishing Checklist

### 1. Code Quality Checks

```bash
# Run from root directory
pnpm install
pnpm lint
pnpm check-types
pnpm test
pnpm build
```

All checks must pass before publishing.

### 2. Version Management

Update versions in `package.json` files following [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (0.1.0): New features (backward compatible)
- **PATCH** (0.0.1): Bug fixes (backward compatible)

```bash
# For first release, set to 0.1.0 or 1.0.0
# packages/player/package.json
# packages/query/package.json
# packages/create-smart-tv/package.json
```

### 3. Update Documentation

- [ ] README.md in each package
- [ ] CHANGELOG.md in root
- [ ] API documentation
- [ ] Code examples
- [ ] Migration guides (if applicable)

### 4. Update Package Metadata

Ensure each package has:

```json
{
  "name": "@smart-tv/package-name",
  "version": "0.1.0",
  "description": "Clear package description",
  "license": "MIT",
  "author": "ForidPathan",
  "repository": {
    "type": "git",
    "url": "https://github.com/foridpathan/smart-tv.git",
    "directory": "packages/package-name"
  },
  "keywords": [
    "smart-tv",
    "react",
    "typescript",
    "..."
  ],
  "bugs": {
    "url": "https://github.com/foridpathan/smart-tv/issues"
  },
  "homepage": "https://github.com/foridpathan/smart-tv#readme"
}
```

### 5. Verify Build Output

```bash
# Build specific package
cd packages/player
pnpm build

# Check dist/ directory
ls -la dist/

# Verify files are correct
# - index.js (CommonJS)
# - index.mjs (ES Module)
# - index.d.ts (TypeScript definitions)
# - styles.css (if applicable)
```

### 6. Test Package Locally

```bash
# Create a test directory
mkdir /tmp/test-smart-tv
cd /tmp/test-smart-tv

# Initialize test project
npm init -y

# Link local package
cd /path/to/smart-tv/packages/player
npm link

cd /tmp/test-smart-tv
npm link @smart-tv/player

# Test import
node -e "const player = require('@smart-tv/player'); console.log(player);"
```

### 7. Verify Package Contents

```bash
# See what files will be published
cd packages/player
npm pack --dry-run

# Create actual tarball to inspect
npm pack

# Extract and inspect
tar -xzf smart-tv-player-0.1.0.tgz
ls -la package/
```

## Publishing Process

### Option 1: Manual Publishing (Recommended for First Release)

#### 1. Publish @smart-tv/player

```bash
cd packages/player

# Final checks
pnpm lint
pnpm check-types
pnpm build

# Publish (scoped packages are private by default, use --access public)
npm publish --access public

# Or for dry-run first
npm publish --access public --dry-run
```

#### 2. Publish @smart-tv/query

```bash
cd packages/query

# Remove private flag from package.json first!
# Change "private": true to remove the line or set to false

# Final checks
pnpm build

# Publish
npm publish --access public
```

#### 3. Publish create-smart-tv-app

```bash
cd packages/create-smart-tv

# Final checks
# Verify bin/cli.js exists and has proper shebang

# Publish (not scoped, so no --access flag needed)
npm publish
```

### Option 2: Using pnpm Publish

```bash
# From root directory

# Publish all packages with public access
pnpm -r publish --access public

# Or publish specific package
pnpm --filter @smart-tv/player publish --access public
```

### Option 3: Using Turbo (Automated)

Add to root `package.json`:

```json
{
  "scripts": {
    "publish-packages": "turbo run build && pnpm -r publish --access public"
  }
}
```

Then run:

```bash
pnpm publish-packages
```

## Post-Publishing Tasks

### 1. Verify Publication

```bash
# Check on npm
npm view @smart-tv/player
npm view @smart-tv/query
npm view create-smart-tv-app

# Test installation
npm install @smart-tv/player
```

### 2. Create Git Tag

```bash
# Tag the release
git tag -a v0.1.0 -m "Release v0.1.0"
git push origin v0.1.0

# Or tag for specific packages
git tag -a player-v0.1.0 -m "Player v0.1.0"
git tag -a query-v0.1.0 -m "Query v0.1.0"
git tag -a cli-v1.0.0 -m "CLI v1.0.0"
git push --tags
```

### 3. Create GitHub Release

1. Go to: https://github.com/foridpathan/smart-tv/releases/new
2. Choose the tag created above
3. Set release title: "v0.1.0 - Initial Release"
4. Add release notes from CHANGELOG.md
5. Publish release

### 4. Update CHANGELOG

```markdown
## [0.1.0] - 2025-10-17

### Published
- `@smart-tv/player@0.1.0` - Video player component
- `@smart-tv/query@0.1.0` - Data fetching utilities
- `create-smart-tv-app@1.0.0` - CLI scaffolding tool

### Added
- Initial public release
- [List major features]
```

### 5. Announce Release

- Post on social media
- Update documentation site
- Notify contributors
- Post in relevant communities

## Automated Publishing

### GitHub Actions Workflow

Create `.github/workflows/publish.yml`:

```yaml
name: Publish Packages

on:
  workflow_dispatch:
    inputs:
      version:
        description: 'Version bump type'
        required: true
        type: choice
        options:
          - patch
          - minor
          - major

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: pnpm/action-setup@v2
        with:
          version: 8.15.6
      
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'pnpm'
          registry-url: 'https://registry.npmjs.org'
      
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      - name: Build packages
        run: pnpm build
      
      - name: Run tests
        run: pnpm test
      
      - name: Publish packages
        run: pnpm -r publish --access public --no-git-checks
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### Setup NPM_TOKEN

1. Generate token on npm: https://www.npmjs.com/settings/YOUR_USERNAME/tokens
2. Choose "Automation" type
3. Add to GitHub: Settings → Secrets → Actions → New repository secret
4. Name: `NPM_TOKEN`
5. Value: Your npm token

## Troubleshooting

### Common Issues

#### 1. "You must be logged in to publish packages"

```bash
npm login
npm whoami
```

#### 2. "You do not have permission to publish"

- Verify organization membership
- Check package scope
- Verify npm authentication

#### 3. "Package name already exists"

- Choose a different package name
- Use a scope: `@yourname/package`

#### 4. "Version already published"

- Bump version number
- Never republish same version

#### 5. "Cannot publish over previously published version"

```bash
# Check current version
npm view @smart-tv/player version

# Bump version
npm version patch  # or minor, or major
```

#### 6. "Failed to build package"

```bash
# Clean and rebuild
pnpm clean
rm -rf node_modules
pnpm install
pnpm build
```

#### 7. "Missing files in published package"

Check `files` field in package.json:

```json
{
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ]
}
```

### Unpublishing (Emergency Only)

```bash
# Unpublish specific version (within 72 hours)
npm unpublish @smart-tv/player@0.1.0

# Unpublish entire package (use with extreme caution)
npm unpublish @smart-tv/player --force
```

⚠️ **Warning**: Unpublishing is discouraged by npm. Use deprecation instead:

```bash
npm deprecate @smart-tv/player@0.1.0 "This version has critical bugs, please upgrade"
```

## Best Practices

### 1. Version Management

- Follow semantic versioning strictly
- Update CHANGELOG.md before each release
- Tag releases in Git
- Create GitHub releases with notes

### 2. Testing Before Publishing

- Test locally with `npm link`
- Test in a fresh project
- Run all tests and linting
- Verify build output

### 3. Documentation

- Keep README.md up to date
- Include migration guides for breaking changes
- Document all public APIs
- Add code examples

### 4. Release Cadence

- Regular releases (e.g., bi-weekly, monthly)
- Quick patches for critical bugs
- Beta versions for testing: `0.1.0-beta.1`

### 5. Communication

- Announce releases in CHANGELOG
- Use GitHub Releases
- Notify users of breaking changes
- Maintain a roadmap

## Resources

- [npm Documentation](https://docs.npmjs.com/)
- [Semantic Versioning](https://semver.org/)
- [pnpm Publishing](https://pnpm.io/cli/publish)
- [Turborepo Guide](https://turbo.build/repo/docs)

---

For questions or issues, please open an issue on GitHub or contact the maintainers.
