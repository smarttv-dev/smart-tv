# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial project setup with monorepo structure
- Player package with Shaka Player integration
- Query package for data fetching
- Create Smart TV CLI tool
- Documentation site
- Demo application

## [0.1.0] - 2025-10-17

### Added
- Initial release of Smart TV packages
- `@smart-tv/player` - Video player component with spatial navigation
- `@smart-tv/query` - Data fetching and caching utilities
- `create-smart-tv-app` - CLI tool for scaffolding Smart TV applications
- TypeScript support across all packages
- Tailwind CSS integration
- ESLint and Prettier configuration
- Comprehensive documentation
- Contributing guidelines
- Security policy
- Code of conduct

### Features

#### @smart-tv/player
- Shaka Player integration for adaptive streaming
- Spatial navigation support for TV remote controls
- Customizable player UI
- Subtitle and audio track support
- Picture-in-Picture mode
- Keyboard shortcuts
- Accessibility features

#### @smart-tv/query
- React hooks for data fetching
- Built-in caching mechanism
- Request deduplication
- Error handling
- Loading states
- Retry logic

#### create-smart-tv-app
- Interactive CLI for project scaffolding
- Pre-configured Vite setup
- TypeScript template
- Tailwind CSS integration
- Smart TV optimizations out of the box

[unreleased]: https://github.com/foridpathan/smart-tv/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/foridpathan/smart-tv/releases/tag/v0.1.0
