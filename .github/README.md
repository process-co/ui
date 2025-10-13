# @process.co/ui
[<img src="https://img.shields.io/npm/v/%40process.co%2Fui" />](https://www.npmjs.com/package/@process.co/ui) 
[<img src="https://img.shields.io/github/v/release/process-co/ui" />](https://github.com/process-co/ui/releases/latest) 
[<img alt="GitHub package.json version (branch)" src="https://img.shields.io/github/package-json/v/process-co/ui/main?color=%23AA00AA" />
](https://github.com/process-co/ui#main)

A comprehensive React UI component library for Process.co applications, built with TypeScript, Tailwind CSS, and Radix UI.

> [!IMPORTANT] 
> CHANGES HERE WILL GET OVERWRITTEN<br/>
> 
> The JS code in this repo is published from an internal mono repo. The publish process bundles the specific parts of our select internal libraries that may be needed at build time. This repo only represents the public parts of the code that are published to NPM.

## Installation

```bash
npm install @process.co/ui
```

### Pinned Version
```bash
npm install git+https://github.com/process-co/ui.git#v0.0.1
```

### Latest Development Version
```bash
npm install git+https://github.com/process-co/ui.git#main
```

## Usage

### Importing Components

```tsx
import { Button, Card, Alert, Input } from '@process.co/ui';
import { UIProvider } from '@process.co/ui';
```

### Importing Styles

The library includes pre-built CSS that must be imported in your application:

```tsx
// In your main app file or layout
import '@process.co/ui/styles';
```

Or in your CSS:

```css
@import '@process.co/ui/styles';
```

### Basic Example

```tsx
import { UIProvider, Button } from '@process.co/ui';
import '@process.co/ui/styles';

function App() {
  return (
    <UIProvider locale="en" theme="light">
      <Button variant="primary" size="md">
        Click me
      </Button>
    </UIProvider>
  );
}
```

### Expression Components

The library includes advanced expression editor components:

```tsx
import { Input } from '@process.co/ui';

function MyForm() {
  return (
    <Input
      label="Expression Field"
      expressionContext={{ foo: 'bar' }}
      expectedType="string"
    />
  );
}
```

## Storybook

View the component library and examples at:
https://main--674d30e40a127b13419e46ba.chromatic.com

## Features

- **TypeScript First**: Fully typed components with comprehensive type definitions
- **Tailwind CSS**: Styled with Tailwind CSS v4 with the `uii:` prefix
- **Radix UI**: Built on Radix UI primitives for accessibility
- **Expression Evaluation**: Advanced expression parsing and evaluation with QuickJS
- **Form Components**: Complete form system with TanStack Form and Zod validation
- **Theme Support**: Built-in light/dark mode support
- **i18n Ready**: Internationalization support with i18next

## Package Contents

When installed, the package includes:

- `dist/` - Compiled JavaScript (ESM and CJS formats)
- `dist/index.d.ts` - TypeScript type definitions
- `dist/ui.css` - Pre-compiled Tailwind CSS styles

## License

MIT

## Links

- [NPM Package](https://www.npmjs.com/package/@process.co/ui)
- [Storybook Documentation](https://main--674d30e40a127b13419e46ba.chromatic.com)
- [GitHub Repository](https://github.com/process-co/ui)

