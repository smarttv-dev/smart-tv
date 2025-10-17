# ✅ Pre-Publishing Checklist

Complete this checklist before publishing your Smart TV packages to npm.

---

## 📋 Phase 1: Documentation Review

### Core Files
- [ ] Read through `README.md` - ensure accuracy
- [ ] Review `CONTRIBUTING.md` - customize if needed
- [ ] Check `CODE_OF_CONDUCT.md` - appropriate for your project
- [ ] Update `SECURITY.md` - **ADD YOUR CONTACT EMAIL** ⚠️
- [ ] Review `CHANGELOG.md` - correct version and date
- [ ] Verify `LICENSE` - MIT license is appropriate

### Package Documentation
- [ ] `packages/player/README.md` - exists and accurate
- [ ] `packages/query/README.md` - exists and accurate
- [ ] `packages/create-smart-tv/README.md` - exists and accurate

---

## 🔧 Phase 2: Package Configuration

### @smart-tv/player
- [ ] `package.json` has correct version (0.1.0)
- [ ] `package.json` has "license": "MIT"
- [ ] `package.json` has repository URL
- [ ] `package.json` has keywords
- [ ] `package.json` has "publishConfig": { "access": "public" }
- [ ] README.md exists
- [ ] Build output in `dist/` folder exists
- [ ] Contains: index.js, index.mjs, index.d.ts, styles.css

### @smart-tv/query
- [ ] `package.json` **DOES NOT** have "private": true ⚠️
- [ ] `package.json` has correct version (0.1.0)
- [ ] `package.json` has "license": "MIT"
- [ ] `package.json` has repository URL
- [ ] `package.json` has keywords
- [ ] `package.json` has "publishConfig": { "access": "public" }
- [ ] README.md exists
- [ ] Build output in `dist/` folder exists
- [ ] Contains: index.js, index.mjs, index.d.ts

### create-smart-tv-app
- [ ] `package.json` has correct version (1.0.0)
- [ ] `package.json` has "license": "MIT"
- [ ] `package.json` has repository URL
- [ ] `package.json` has keywords
- [ ] `package.json` has proper bin configuration
- [ ] `bin/cli.js` exists and has shebang (`#!/usr/bin/env node`)
- [ ] `bin/cli.js` is executable
- [ ] README.md exists
- [ ] `template/` folder exists with project template

---

## 💻 Phase 3: Code Quality

### Build & Test
- [ ] Run `pnpm install` - no errors
- [ ] Run `pnpm lint` - passes
- [ ] Run `pnpm check-types` - passes
- [ ] Run `pnpm build` - succeeds
- [ ] Run `pnpm test` - passes (or confirms no tests)
- [ ] All build artifacts in `dist/` folders

### Verification
- [ ] Run `pnpm verify` - all checks pass
- [ ] No uncommitted changes (`git status` clean)
- [ ] On main/master branch
- [ ] All changes pushed to GitHub

---

## 🌐 Phase 4: npm Setup

### Account & Authentication
- [ ] npm account created (https://www.npmjs.com/signup)
- [ ] Email verified
- [ ] Run `npm login` - successful
- [ ] Run `npm whoami` - shows your username

### Organization (if using @smart-tv scope)
- [ ] Organization `smart-tv` exists on npm, OR
- [ ] Changed package names to `@yourname/package`, OR
- [ ] Changed to non-scoped names

### Dry Run
- [ ] `cd packages/player && npm pack --dry-run` - review output
- [ ] `cd packages/query && npm pack --dry-run` - review output
- [ ] `cd packages/create-smart-tv && npm pack --dry-run` - review output

---

## 📦 Phase 5: Publishing Preparation

### Pre-Publish
- [ ] All dependencies installed
- [ ] All packages built
- [ ] All tests passing
- [ ] No TypeScript errors
- [ ] No ESLint errors

### Version Check
- [ ] Player version: 0.1.0
- [ ] Query version: 0.1.0
- [ ] CLI version: 1.0.0
- [ ] CHANGELOG.md updated with version
- [ ] Git status clean

---

## 🚀 Phase 6: Publishing

### Execute Publishing
Choose one method:

#### Option A: Use Scripts (Recommended)
- [ ] Run `pnpm publish:packages` - publish all at once

#### Option B: Individual Publishing
- [ ] Run `pnpm publish:player`
- [ ] Run `pnpm publish:query`
- [ ] Run `pnpm publish:cli`

#### Option C: Manual
- [ ] `cd packages/player && npm publish --access public`
- [ ] `cd packages/query && npm publish --access public`
- [ ] `cd packages/create-smart-tv && npm publish --access public`

### Verification
- [ ] Run `npm view @smart-tv/player` - shows package info
- [ ] Run `npm view @smart-tv/query` - shows package info
- [ ] Run `npm view create-smart-tv-app` - shows package info

### Test Installation
- [ ] Create test directory
- [ ] Run `npm install @smart-tv/player` - installs successfully
- [ ] Run `npm install @smart-tv/query` - installs successfully
- [ ] Run `npx create-smart-tv-app test-app` - creates project

---

## 🏷️ Phase 7: Git Tagging

### Create Tag
- [ ] Run `git tag -a v0.1.0 -m "Release v0.1.0"`
- [ ] Run `git push origin v0.1.0`
- [ ] Verify tag appears on GitHub

---

## 📝 Phase 8: GitHub Release

### Create Release
- [ ] Go to https://github.com/smarttv-dev/smart-tv/releases/new
- [ ] Select tag: v0.1.0
- [ ] Title: "v0.1.0 - Initial Release"
- [ ] Copy content from CHANGELOG.md
- [ ] Add any additional notes
- [ ] Click "Publish release"

### Verify Release
- [ ] Release appears on GitHub
- [ ] Release notes are accurate
- [ ] Links work correctly

---

## 📢 Phase 9: Post-Publishing

### Documentation Updates
- [ ] Add npm badges to README.md
- [ ] Update installation instructions if needed
- [ ] Update any version references

### Announcements
- [ ] Post on Twitter/X
- [ ] Share on Reddit (r/react, r/javascript, r/opensource)
- [ ] Post on Dev.to
- [ ] Share on LinkedIn
- [ ] Notify in relevant Discord/Slack communities

### Monitoring Setup
- [ ] Enable GitHub notifications
- [ ] Watch npm download stats
- [ ] Monitor GitHub issues
- [ ] Check npm package pages

---

## 🔄 Phase 10: GitHub Actions (Optional)

### Setup Automation
- [ ] Generate npm token (Automation type)
- [ ] Add NPM_TOKEN to GitHub secrets
- [ ] Test publish workflow
- [ ] Verify workflow permissions

---

## ⚠️ Critical Reminders

### MUST DO Before Publishing
1. **Update SECURITY.md** with your contact email
2. **Remove "private": true** from @smart-tv/query package.json
3. **Login to npm** with `npm login`
4. **Verify npm organization** access (if using @smart-tv scope)
5. **Run `pnpm verify`** to check everything

### MUST NOT DO
1. ❌ Don't publish without testing locally
2. ❌ Don't publish with uncommitted changes
3. ❌ Don't republish the same version number
4. ❌ Don't skip the verification step
5. ❌ Don't forget to create git tags

---

## 🎯 Quick Command Sequence

If all checks above are complete, run this sequence:

```bash
# 1. Verify
pnpm verify

# 2. Login (if not already)
npm login

# 3. Publish
pnpm publish:packages

# 4. Tag
git tag -a v0.1.0 -m "Release v0.1.0"
git push origin v0.1.0

# 5. Create GitHub Release (via web interface)
# https://github.com/smarttv-dev/smart-tv/releases/new
```

---

## ✅ Final Sign-Off

Before publishing, confirm:

- [ ] I have read all documentation
- [ ] I have tested all packages locally
- [ ] I have verified package configurations
- [ ] I am logged into npm
- [ ] I have organization access (if needed)
- [ ] I have updated SECURITY.md with contact info
- [ ] I have run `pnpm verify` successfully
- [ ] I am ready to publish to npm
- [ ] I understand I cannot unpublish easily

**Signed**: _________________ **Date**: _________________

---

## 📞 Need Help?

If any step is unclear or fails:

1. Read `COMPLETE_GUIDE.md` for detailed instructions
2. Check `PUBLISHING.md` for troubleshooting
3. Review `CONTRIBUTING.md` for development setup
4. Check npm documentation: https://docs.npmjs.com/
5. Open an issue on GitHub (after publishing)

---

## 🎉 After Completing This Checklist

You will have:
- ✅ Published 3 packages to npm
- ✅ Created git tags
- ✅ Published GitHub release
- ✅ Professional open-source project
- ✅ Ready for contributors

**Congratulations! 🚀**

---

*Save this checklist and use it for every release!*
