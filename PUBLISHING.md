# Publishing @process.co/ui

This document explains how the `@process.co/ui` package is published from the monorepo to npm.

## Overview

The `@process.co/ui` package is published as a standalone npm package at `@process.co/ui`. The package is developed in this monorepo and automatically synced to a separate GitHub repository (`process-co/ui`) for npm publishing.

## Package Configuration

### package.json

The package is correctly configured with:

- **Name**: `@process.co/ui`
- **Version**: `0.0.0-development` (gets replaced during publish)
- **Repository**: `https://github.com/process-co/ui.git`
- **Access**: Public

### CSS Export

The compiled CSS is properly exposed via the package exports:

```json
{
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    },
    "./styles": "./dist/ui.css"
  }
}
```

Users can import the CSS like this:

```tsx
import '@process.co/ui/styles';
```

### Side Effects

CSS files are marked as having side effects, which prevents them from being tree-shaken:

```json
{
  "sideEffects": ["**/*.css"]
}
```

### Dependency Management

**Important**: Since `tsup` bundles all code, the published package has **NO runtime dependencies**!

During the sync process, the `package.json` is cleaned to remove:
- All `dependencies` (bundled by tsup)
- All `devDependencies` (only needed for development)

**What remains**:
- `peerDependencies` only (React 19+)
- Package metadata (name, version, exports, etc.)

This keeps the published package lean and eliminates unreachable dependencies.

## Automated Workflow

### Sync Workflow

**Location**: `.github/workflows/sync - ui.yml`

**Triggers**: 
- Push to `main` branch
- Changes to `process-co/ui/**`

**Process**:
1. Checks out the monorepo
2. Uses `turbo prune @process.co/ui` to create a minimal build
3. Installs dependencies and builds the package
4. Clones the `ui` repository
5. Syncs the built files to the target repo
6. Removes source and build-only files
7. **Cleans `package.json`** - removes all dependencies and devDependencies (tsup bundles everything)
8. Commits and pushes changes to `ui`

**Key files synced**:
- `dist/` directory (compiled code + CSS)
- `package.json`
- `README.md` (public documentation)
- `.github/README.md` (developer documentation)
- `.npmignore` (what to exclude from npm)
- `.github/workflows/publish-ui.yml` (publish workflow)

**Files excluded from sync**:
- `src/` (source code)
- `tsconfig.json`
- `rollup.config.mjs`
- `postcss.config.js`
- `tailwind.config.ts`
- `components.json`
- `eslint.config.mjs`
- `.storybook/`
- `stories/`
- Storybook configuration files

### Publish Workflow

**Location**: `process-co/ui/.github/workflows/publish-ui-template.yml`

This template is copied to the `ui` repo as `publish-ui.yml`.

**Triggers**:
- GitHub Release is published
- Manual workflow dispatch

**Process**:
1. Checks out the `npm-ui` repository
2. Extracts version from the Git tag (or uses package.json version)
3. Updates `package.json` with the correct version
4. Verifies package structure (checks for required files)
5. Publishes to npm with public access

**Required files check**:
- `dist/index.js` (ESM build)
- `dist/index.cjs` (CommonJS build)
- `dist/index.d.ts` (TypeScript types)
- `dist/ui.css` (compiled CSS)

## Publishing Process

### Automatic Publishing (Recommended)

1. Make changes to `process-co/ui/` in the monorepo
2. Commit and push to `main` branch
3. The sync workflow automatically runs and updates `ui` repo
4. Go to the `ui` GitHub repo (https://github.com/process-co/ui)
5. Create a new Release with a version tag (e.g., `v1.0.0`)
6. The publish workflow automatically publishes to npm

### Manual Testing

Before creating a release, you can test the package locally:

```bash
# In the monorepo
cd process-co/ui
pnpm run build

# Verify the build
ls -la dist/
# Should contain: index.js, index.cjs, index.d.ts, index.d.cts, ui.css

# Test the package locally
pnpm pack
# This creates a .tgz file you can install elsewhere for testing
```

### Version Management

- The monorepo uses `0.0.0-development` as per workspace rules
- Actual versions are set during the publish workflow from Git tags
- Use semantic versioning for releases (e.g., `v1.0.0`, `v1.1.0`, `v2.0.0`)

## Consuming the Package

### Installation

```bash
npm install @process.co/ui
```

### Usage

```tsx
import { Button, Input, Card } from '@process.co/ui';
import { UIProvider } from '@process.co/ui';
import '@process.co/ui/styles'; // Import the CSS

function App() {
  return (
    <UIProvider locale="en" theme="light">
      <Card>
        <Button>Click me</Button>
      </Card>
    </UIProvider>
  );
}
```

## Troubleshooting

### CSS Not Loading

**Problem**: Components appear unstyled

**Solution**: Make sure to import the CSS:
```tsx
import '@process.co/ui/styles';
```

### Type Errors

**Problem**: TypeScript can't find type definitions

**Solution**: The package includes types. Make sure your `tsconfig.json` includes:
```json
{
  "compilerOptions": {
    "moduleResolution": "bundler"
  }
}
```

### Build Failures

**Problem**: The sync workflow fails

**Check**:
1. All workspace dependencies are properly installed
2. The build script runs successfully locally
3. GitHub secrets are configured (`FONTAWESOME_NPM`, `NPM_TOKEN`, `PBOT`)

### Publish Failures

**Problem**: The publish workflow fails

**Check**:
1. All required files exist in `dist/`
2. `NPM_TOKEN` secret is valid
3. Version number is unique (not already published)

## Repository Structure

```
process-co/ui/              # Monorepo package
├── src/                    # Source code (not published)
├── dist/                   # Built output (published)
│   ├── index.js           # ESM build
│   ├── index.cjs          # CommonJS build
│   ├── index.d.ts         # TypeScript types
│   └── ui.css             # Compiled CSS ✅
├── package.json           # Package config
├── README.md              # Public documentation
├── .npmignore             # NPM exclusions
├── .github/
│   ├── README-template.md # Developer docs
│   └── workflows/
│       └── publish-ui-template.yml
└── PUBLISHING.md          # This file
```

## Links

- **NPM Package**: https://www.npmjs.com/package/@process.co/ui
- **GitHub**: https://github.com/process-co/ui
- **Storybook**: https://main--674d30e40a127b13419e46ba.chromatic.com
- **Monorepo**: https://github.com/process-co/proc-app

## Notes

- The CSS file (`ui.css`) is automatically generated during the build process via Tailwind CSS
- All CSS classes use the `uii:` prefix to avoid conflicts
- The library uses Tailwind CSS v4
- Workspace dependencies (`@repo/*`, `@ory/client`) are removed during sync as they're not needed in the published package

