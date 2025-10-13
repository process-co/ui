# UI Component Library

This package contains a collection of reusable UI components for the proc-app project. All components are built with React, TypeScript, and Tailwind CSS.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [Basic Components](#basic-components)
  - [Form Components](#form-components)
  - [Layout Components](#layout-components)
  - [Feedback Components](#feedback-components)
  - [Navigation Components](#navigation-components)
  - [Blocks](#blocks)
  - [Providers](#providers)
- [Storybook](#storybook)

## Installation

```bash
npm install @process.co/ui
```

Or with pnpm:

```bash
pnpm add @process.co/ui
```

## Usage

### Importing Components

```tsx
import { Button, Card, Alert } from '@process.co/ui';
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
import { Button, Card, Alert } from '@process.co/ui';
import { UIProvider } from '@process.co/ui';
import '@process.co/ui/styles';

// Wrap your app with UIProvider
function App() {
  return (
    <UIProvider>
      <Button>Click me</Button>
    </UIProvider>
  );
}
```

## Components

### Basic Components

#### Button
A customizable button component with multiple variants and sizes.

```tsx
import { Button } from '@repo/ui';

<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `loading`: boolean
- Standard button HTML attributes

#### Card
A clickable card component that links to external resources.

```tsx
import { Card } from '@repo/ui';

<Card
  title="Documentation"
  href="https://docs.example.com"
  className="custom-class"
>
  Learn more about our components
</Card>
```

**Props:**
- `title`: string (required)
- `href`: string (required)
- `className`: string (optional)
- `children`: React.ReactNode

#### Code
A simple inline code component for displaying code snippets.

```tsx
import { Code } from '@repo/ui';

<Code className="custom-class">const example = "Hello";</Code>
```

**Props:**
- `className`: string (optional)
- `children`: React.ReactNode

#### Header
A header component with navigation and branding.

```tsx
import { Header } from '@repo/ui';

<Header
  logoSrc="/logo.svg"
  logoAlt="Company Logo"
  navigation={navigationItems}
/>
```

### Form Components

#### TextInput
A text input component with built-in validation and error handling.

```tsx
import { TextInput } from '@repo/ui';

<TextInput
  label="Email"
  name="email"
  type="email"
  placeholder="Enter your email"
  error={errors.email}
  onChange={handleChange}
/>
```

**Props:**
- `label`: string
- `name`: string
- `type`: string
- `placeholder`: string
- `error`: string
- `required`: boolean
- Standard input HTML attributes

#### PasswordMeter
A password input with strength meter visualization.

```tsx
import { PasswordMeter } from '@repo/ui';

<PasswordMeter
  password={password}
  onChange={setPassword}
  requirements={{
    minLength: 8,
    requireUppercase: true,
    requireNumbers: true,
    requireSpecialChars: true
  }}
/>
```

**Props:**
- `password`: string
- `onChange`: (value: string) => void
- `requirements`: PasswordRequirements object

### Layout Components

#### NotFound (404)
A pre-styled 404 error page layout.

```tsx
import { NotFound } from '@repo/ui';

<NotFound />
```

The component uses translations from UIProvider for customization.

#### Sidebar
A collapsible sidebar navigation component.

```tsx
import { Sidebar } from '@repo/ui';

<Sidebar
  items={navigationItems}
  collapsed={isCollapsed}
  onToggle={handleToggle}
/>
```

### Feedback Components

#### Alert
A dismissible alert component for displaying messages.

```tsx
import { Alert } from '@repo/ui';

<Alert
  type="success"
  message="Operation completed successfully"
  onClose={handleClose}
/>
```

**Props:**
- `type`: 'success' | 'error' | 'warning' | 'info'
- `message`: string
- `onClose`: () => void (optional)

#### Loader
An animated loading indicator.

```tsx
import { Loader } from '@repo/ui';

<Loader
  id="unique-loader-id"
  getAnimationData={() => animationData}
  speed={1}
/>
```

#### SuspenseLoader
A full-screen loading component with animation, wrapped in React Query provider.

```tsx
import { SuspenseLoader } from '@repo/ui';

<SuspenseLoader />
```

#### FullScreenLoader
A centered full-screen loading overlay.

```tsx
import { FullScreenLoader } from '@repo/ui';

<FullScreenLoader
  message="Loading..."
  showSpinner={true}
/>
```

#### Tooltip
A simple tooltip component for hover information.

```tsx
import { Tooltip } from '@repo/ui';

<Tooltip content="Additional information">
  <Button>Hover me</Button>
</Tooltip>
```

### Navigation Components

#### NavigationPortal
A portal component for setting navigation breadcrumbs and content.

```tsx
import NavigationPortal from '@repo/ui';

<NavigationPortal
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Current Page' }
  ]}
  clearOnUnmount={true}
>
  <CustomNavigation />
</NavigationPortal>
```

**Props:**
- `breadcrumbs`: Breadcrumb[] (optional)
- `clearOnUnmount`: boolean (default: true)
- `keys`: unknown[] (for memoization)
- `children`: React.ReactNode (navigation content)

### Blocks

#### LinkTree
A component displaying a tree of navigation links.

```tsx
import { LinkTree } from '@repo/ui';

<LinkTree links={navigationLinks} />
```

#### Copyright
A copyright notice component with customizable text.

```tsx
import { Copyright } from '@repo/ui';

<Copyright year={2024} company="Process Co" />
```

### Authentication Components

#### SocialLogin
A component for social authentication providers.

```tsx
import { SocialLogin } from '@repo/ui';

<SocialLogin
  providers={['google', 'github', 'microsoft']}
  onLogin={handleSocialLogin}
/>
```

### Providers

#### UIProvider
The main provider component that wraps your application and provides context for translations, settings, and state management.

```tsx
import { UIProvider } from '@repo/ui';

<UIProvider
  locale="en"
  translations={translations}
  theme="light"
>
  <App />
</UIProvider>
```

**Exports:**
- `useSettings`: Hook to access UI settings
- `useTranslation`: Hook for translations
- `KeyValueStore`: Type definition for storage
- `StorageType`: Enum for storage types

## Utility Functions

The package also exports utility functions from `lib/utils`:

```tsx
import { cn, formatDate } from '@repo/ui';
```

## Storybook

To view all components in Storybook:

```bash
pnpm storybook
```

## Development

### Adding New Components

1. Create the component in `src/components/`
2. Export it from `src/index.tsx`
3. Create a Storybook story in `src/stories/components/`
4. Update this documentation

### Component Guidelines

- Use TypeScript for all components
- Follow the existing naming conventions
- Include proper TypeScript types
- Add JSDoc comments for props
- Create comprehensive Storybook stories
- Ensure accessibility compliance
- Use Tailwind CSS with the `ui:` prefix for styling

### Testing

Run tests with:

```bash
pnpm test
```

### Building

Build the package with:

```bash
pnpm build
```