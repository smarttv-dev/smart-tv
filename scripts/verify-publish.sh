#!/bin/bash

# Pre-Publish Verification Script
# This script verifies that everything is ready for publishing

set -e

echo "🔍 Smart TV Pre-Publish Verification"
echo "====================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Track errors
ERRORS=0
WARNINGS=0

# Function to print success
print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

# Function to print error
print_error() {
    echo -e "${RED}✗${NC} $1"
    ((ERRORS++))
}

# Function to print warning
print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
    ((WARNINGS++))
}

# Function to print info
print_info() {
    echo -e "ℹ $1"
}

echo "📋 Checking Prerequisites..."
echo ""

# Check Node.js version
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v | cut -d'v' -f2)
    REQUIRED_VERSION="18.0.0"
    if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" = "$REQUIRED_VERSION" ]; then
        print_success "Node.js version $NODE_VERSION"
    else
        print_error "Node.js version $NODE_VERSION is below required version 18.0.0"
    fi
else
    print_error "Node.js is not installed"
fi

# Check pnpm
if command -v pnpm &> /dev/null; then
    PNPM_VERSION=$(pnpm -v)
    print_success "pnpm version $PNPM_VERSION"
else
    print_error "pnpm is not installed"
fi

# Check npm authentication
echo ""
echo "🔐 Checking npm Authentication..."
echo ""

if npm whoami &> /dev/null; then
    NPM_USER=$(npm whoami)
    print_success "Logged in as: $NPM_USER"
else
    print_error "Not logged into npm. Run: npm login"
fi

# Check for required files
echo ""
echo "📄 Checking Required Files..."
echo ""

FILES=(
    "LICENSE"
    "README.md"
    "CONTRIBUTING.md"
    "CODE_OF_CONDUCT.md"
    "SECURITY.md"
    "CHANGELOG.md"
    "PUBLISHING.md"
    "package.json"
)

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        print_success "$file exists"
    else
        print_error "$file is missing"
    fi
done

# Check package.json files
echo ""
echo "📦 Checking Package Configurations..."
echo ""

PACKAGES=(
    "packages/player"
    "packages/query"
    "packages/create-smart-tv"
)

for package in "${PACKAGES[@]}"; do
    if [ -f "$package/package.json" ]; then
        print_info "Checking $package/package.json"
        
        # Check for required fields
        if grep -q '"name"' "$package/package.json"; then
            print_success "  - Has name field"
        else
            print_error "  - Missing name field"
        fi
        
        if grep -q '"version"' "$package/package.json"; then
            print_success "  - Has version field"
        else
            print_error "  - Missing version field"
        fi
        
        if grep -q '"license"' "$package/package.json"; then
            print_success "  - Has license field"
        else
            print_error "  - Missing license field"
        fi
        
        if grep -q '"repository"' "$package/package.json"; then
            print_success "  - Has repository field"
        else
            print_error "  - Missing repository field"
        fi
        
        # Check for private flag in query package
        if [ "$package" = "packages/query" ]; then
            if grep -q '"private".*true' "$package/package.json"; then
                print_error "  - Query package is marked as private"
            else
                print_success "  - Query package is public"
            fi
        fi
    else
        print_error "$package/package.json not found"
    fi
done

# Check for build artifacts
echo ""
echo "🏗️  Checking Build Artifacts..."
echo ""

for package in "${PACKAGES[@]}"; do
    if [ -d "$package/dist" ]; then
        print_success "$package has dist folder"
        
        # Count files in dist
        FILE_COUNT=$(find "$package/dist" -type f | wc -l)
        print_info "  - $FILE_COUNT files in dist/"
    else
        print_warning "$package/dist folder not found (run: pnpm build)"
    fi
done

# Run code quality checks
echo ""
echo "🧪 Running Code Quality Checks..."
echo ""

print_info "Installing dependencies..."
if pnpm install --frozen-lockfile &> /dev/null; then
    print_success "Dependencies installed"
else
    print_error "Failed to install dependencies"
fi

print_info "Running linter..."
if pnpm lint &> /dev/null; then
    print_success "Linting passed"
else
    print_error "Linting failed. Run: pnpm lint"
fi

print_info "Running type check..."
if pnpm check-types &> /dev/null; then
    print_success "Type checking passed"
else
    print_error "Type checking failed. Run: pnpm check-types"
fi

print_info "Building packages..."
if pnpm build &> /dev/null; then
    print_success "Build successful"
else
    print_error "Build failed. Run: pnpm build"
fi

# Check git status
echo ""
echo "🔄 Checking Git Status..."
echo ""

if git diff-index --quiet HEAD --; then
    print_success "No uncommitted changes"
else
    print_warning "You have uncommitted changes"
fi

# Check current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" = "main" ] || [ "$CURRENT_BRANCH" = "master" ]; then
    print_success "On main branch"
else
    print_warning "Not on main branch (current: $CURRENT_BRANCH)"
fi

# Summary
echo ""
echo "====================================="
echo "📊 Summary"
echo "====================================="
echo ""

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✓ All checks passed! Ready to publish.${NC}"
    echo ""
    echo "Next steps:"
    echo "  1. Review PUBLISHING.md for publishing instructions"
    echo "  2. Run: pnpm publish:packages"
    echo "  3. Create git tag: git tag -a v0.1.0 -m 'Release v0.1.0'"
    echo "  4. Push tag: git push origin v0.1.0"
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}⚠ $WARNINGS warning(s) found${NC}"
    echo ""
    echo "You can proceed with publishing, but review the warnings above."
    exit 0
else
    echo -e "${RED}✗ $ERRORS error(s) and $WARNINGS warning(s) found${NC}"
    echo ""
    echo "Please fix the errors above before publishing."
    exit 1
fi
