# Contributing to Smart TV

Thank you for your interest in contributing to Smart TV! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Release Process](#release-process)
- [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Getting Started

### Prerequisites

- **Node.js**: >= 18.x
- **pnpm**: 8.15.6 (Package manager)
- Basic understanding of:
  - React and TypeScript
  - Smart TV development concepts
  - Monorepo architecture (Turborepo)

### Development Setup

1. **Fork the repository** on GitHub

2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/smart-tv.git
   cd smart-tv
   ```

3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/foridpathan/smart-tv.git
   ```

4. **Install dependencies**:
   ```bash
   pnpm install
   ```

5. **Build all packages**:
   ```bash
   pnpm build
   ```

6. **Start development**:
   ```bash
   pnpm dev
   ```

## Project Structure

This is a monorepo managed with [Turborepo](https://turbo.build/repo) and [pnpm workspaces](https://pnpm.io/workspaces).

```
smart-tv/
├── apps/
│   ├── docs/          # Documentation site
├── packages/
│   ├── create-smart-tv/  # CLI tool for scaffolding (publishable)
│   ├── player/           # Video player component (publishable)
│   ├── query/            # Data fetching utilities (publishable)
│   ├── ui/               # Shared UI components
│   ├── eslint-config/    # Shared ESLint configurations
│   ├── typescript-config/ # Shared TypeScript configurations
│   └── tailwind-config/  # Shared Tailwind configurations
```

### Publishable Packages

The following packages are published to npm:

1. **`@smart-tv/player`** - Video player with Shaka Player integration
2. **`@smart-tv/query`** - Data fetching and caching utilities
3. **`create-smart-tv-app`** - CLI tool for creating Smart TV apps

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check the [issue tracker](https://github.com/foridpathan/smart-tv/issues) as you might find that you don't need to create one.

When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the behavior
- **Expected vs actual behavior**
- **Screenshots** if applicable
- **Environment details** (OS, Node version, browser)
- **Additional context** or logs

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful**
- **List any alternatives you've considered**

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:

- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `documentation` - Documentation improvements

## Development Workflow

### 1. Create a Branch

Always create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `refactor/` - Code refactoring
- `test/` - Test additions or modifications
- `chore/` - Maintenance tasks

### 2. Make Your Changes

- Write clean, readable code
- Follow the [coding standards](#coding-standards)
- Add tests for new features
- Update documentation as needed

### 3. Test Your Changes

```bash
# Type checking
pnpm check-types

# Linting
pnpm lint

# Build all packages
pnpm build

# Test in demo app
cd apps/demo
pnpm dev
```

### 4. Commit Your Changes

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat(player): add subtitle support"
git commit -m "fix(query): resolve cache invalidation issue"
git commit -m "docs: update installation instructions"
```

Commit types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Test additions or modifications
- `chore`: Maintenance tasks
- `perf`: Performance improvements

### 5. Push and Create Pull Request

```bash
git push origin your-branch-name
```

Then create a pull request on GitHub.

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Enable strict mode
- Avoid `any` types when possible
- Export types/interfaces for public APIs

### React

- Use functional components with hooks
- Follow React best practices
- Use meaningful component and prop names
- Add JSDoc comments for complex components

### Code Style

We use ESLint and Prettier for code formatting:

```bash
# Check linting
pnpm lint

# Format code
pnpm format
```

### File Naming

- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Hooks: `useCamelCase.ts`
- Types: `types.ts` or `ComponentName.types.ts`

### Import Order

1. External dependencies
2. Internal packages
3. Relative imports
4. Types
5. Styles

```typescript
import React from 'react';
import { SomeExternalLib } from 'external-lib';

import { useQuery } from '@smart-tv/query';
import { Button } from '@smart-tv/ui';

import { localUtil } from './utils';
import type { Props } from './types';

import './styles.css';
```

## Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests for specific package
cd packages/player
pnpm test
```

### Writing Tests

- Write tests for all new features
- Aim for high code coverage
- Test edge cases and error scenarios
- Use descriptive test names

## Pull Request Process

### Before Submitting

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] Tests added/updated
- [ ] All tests pass
- [ ] No TypeScript errors
- [ ] Builds successfully

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issues
Closes #(issue number)

## Testing
Describe how you tested your changes

## Screenshots (if applicable)

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Tests added
- [ ] Documentation updated
```

### Review Process

1. At least one maintainer review required
2. All CI checks must pass
3. Resolve all review comments
4. Keep PR focused and small when possible
5. Rebase on main if needed

## Release Process

Releases are managed by maintainers. The process:

1. **Version Bump**: Update package versions
2. **Changelog**: Update CHANGELOG.md
3. **Build**: Build all packages
4. **Test**: Run full test suite
5. **Publish**: Publish to npm
6. **Tag**: Create git tag
7. **Release Notes**: Create GitHub release

### Versioning

We follow [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

## Community

### Getting Help

- 📖 [Documentation](https://github.com/foridpathan/smart-tv)
- 💬 [GitHub Discussions](https://github.com/foridpathan/smart-tv/discussions)
- 🐛 [Issue Tracker](https://github.com/foridpathan/smart-tv/issues)

### Communication Channels

- Use GitHub Issues for bugs and feature requests
- Use GitHub Discussions for questions and general discussion
- Be respectful and constructive in all interactions

## Recognition

Contributors will be recognized in:
- CHANGELOG.md
- Release notes
- Contributors page (when available)

## License

By contributing to Smart TV, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Smart TV! 🎉
