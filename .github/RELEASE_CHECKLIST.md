# Release Checklist

Use this checklist when preparing to release new versions of Smart TV packages.

## Pre-Release Phase

### 1. Code Quality

- [ ] All tests pass (`pnpm test`)
- [ ] No linting errors (`pnpm lint`)
- [ ] No TypeScript errors (`pnpm check-types`)
- [ ] Code formatted (`pnpm format`)
- [ ] All packages build successfully (`pnpm build`)

### 2. Documentation

- [ ] README.md files updated
- [ ] CHANGELOG.md updated with release notes
- [ ] API documentation reviewed
- [ ] Code examples tested
- [ ] Migration guide (if breaking changes)

### 3. Version Management

- [ ] Version numbers updated in package.json files
- [ ] Version follows semantic versioning
- [ ] CHANGELOG.md reflects new version
- [ ] Breaking changes documented

### 4. Testing

- [ ] Tested locally with `npm link`
- [ ] Tested in demo app
- [ ] Tested on target TV platforms
- [ ] No console errors or warnings
- [ ] Performance acceptable

### 5. Package Contents

- [ ] Run `npm pack --dry-run` for each package
- [ ] Verify dist/ folder contents
- [ ] Check that all necessary files are included
- [ ] Verify `files` field in package.json

## Release Phase

### 1. Final Checks

- [ ] Clean workspace: `git status` shows no uncommitted changes
- [ ] On correct branch (usually `main`)
- [ ] All commits pushed to remote
- [ ] CI/CD pipeline passing

### 2. Build

```bash
pnpm clean
pnpm install
pnpm build
```

### 3. Publish Packages

#### Option A: Manual Publishing

```bash
# Player
cd packages/player
npm publish --access public

# Query
cd ../query
npm publish --access public

# CLI
cd ../create-smart-tv
npm publish --access public
```

#### Option B: Using Scripts

```bash
# From root
pnpm publish:packages
```

#### Option C: GitHub Actions

- Go to Actions tab
- Run "Publish Packages" workflow
- Select version bump type
- Select packages to publish

### 4. Verify Publication

```bash
# Check on npm
npm view @smart-tv/player
npm view @smart-tv/query
npm view create-smart-tv-app

# Test installation
npm install @smart-tv/player@latest
```

## Post-Release Phase

### 1. Git Tags

```bash
# Create and push tag
git tag -a v0.1.0 -m "Release v0.1.0"
git push origin v0.1.0
```

### 2. GitHub Release

- [ ] Go to Releases on GitHub
- [ ] Create new release
- [ ] Select the tag
- [ ] Copy release notes from CHANGELOG.md
- [ ] Attach any relevant files
- [ ] Publish release

### 3. Update Documentation

- [ ] Update main README.md if needed
- [ ] Update documentation site
- [ ] Update examples with new version

### 4. Communication

- [ ] Announce on social media
- [ ] Update project website
- [ ] Notify contributors
- [ ] Post in relevant communities

### 5. Monitoring

- [ ] Monitor npm downloads
- [ ] Watch for issues on GitHub
- [ ] Check error tracking services
- [ ] Monitor community feedback

## Emergency Rollback

If critical issues are found:

### 1. Deprecate Bad Version

```bash
npm deprecate @smart-tv/player@0.1.0 "Critical bug, use 0.1.1 instead"
```

### 2. Publish Hotfix

- Create hotfix branch
- Fix the issue
- Bump patch version
- Publish new version
- Update deprecation message

### 3. Communication

- Notify users via GitHub
- Update documentation
- Post announcement

## Version Bump Guide

### Patch (0.0.x)

- Bug fixes
- Performance improvements
- Documentation updates
- No API changes

### Minor (0.x.0)

- New features
- Backward compatible changes
- Deprecations (with warnings)
- Non-breaking API additions

### Major (x.0.0)

- Breaking changes
- Removed deprecated features
- Major refactoring
- API redesign

## Notes

- **Never** republish the same version
- **Always** test before publishing
- **Document** all breaking changes
- **Communicate** with users
- **Monitor** after release

## Useful Commands

```bash
# Check what will be published
npm pack --dry-run

# Check version
npm view @smart-tv/player version

# Check latest
npm view @smart-tv/player dist-tags

# Publish with tag
npm publish --tag beta

# Add tag to existing version
npm dist-tag add @smart-tv/player@0.1.0 latest

# Remove tag
npm dist-tag rm @smart-tv/player beta
```

---

Follow this checklist for every release to ensure quality and consistency.
