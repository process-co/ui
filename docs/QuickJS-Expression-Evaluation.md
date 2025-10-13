# QuickJS Expression Evaluation in Service Worker

## Overview

The ExpressionWrapper now uses QuickJS WASM running in a service worker for safe, sandboxed expression evaluation. This approach provides:

- **Security**: Expressions run in an isolated QuickJS environment, not in the main browser context
- **Performance**: Evaluation happens in a background thread (service worker)
- **Type Safety**: Monaco/TypeScript is still used for type inference; QuickJS is only for execution
- **Resource Limits**: Memory and stack limits prevent runaway expressions

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│  Browser (Main Thread)                                  │
│                                                          │
│  ┌──────────────────────┐                               │
│  │ ExpressionWrapper    │                               │
│  │                      │                               │
│  │  - Monaco Editor ────┼──► Type Inference            │
│  │  - useExpression     │    (TypeScript Language      │
│  │    Evaluator Hook    │     Service)                 │
│  └──────────┬───────────┘                               │
│             │                                            │
│             │ postMessage({                              │
│             │   type: 'EVAL_EXPRESSION',                 │
│             │   expression, context, controlKey          │
│             │ })                                         │
└─────────────┼──────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────────────────┐
│  Service Worker                                          │
│                                                          │
│  ┌──────────────────────┐                               │
│  │ QuickJS WASM         │                               │
│  │                      │                               │
│  │  1. Create Context   │                               │
│  │  2. Inject Variables │◄── context data               │
│  │  3. Evaluate Expr    │                               │
│  │  4. Return Result    │                               │
│  └──────────┬───────────┘                               │
│             │                                            │
│             │ postMessage({                              │
│             │   type: 'EVAL_EXPRESSION_RESULT',          │
│             │   value, error, controlKey                 │
│             │ })                                         │
└─────────────┼──────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────────────────┐
│  Browser (Main Thread)                                  │
│                                                          │
│  Display result in UI                                   │
└─────────────────────────────────────────────────────────┘
```

## Installation

First, install the QuickJS package:

```bash
cd apps/web
pnpm add quickjs-emscripten
```

> **Note**: Requires Node.js >=23. If you have Node 22, you may need to update or use nvm.

## Usage

### Basic Usage

```typescript
import { useExpressionEvaluator } from '@repo/ui/hooks/useExpressionEvaluator';

function MyComponent() {
  const { result, isEvaluating, evaluate } = useExpressionEvaluator(
    'myControlId'
  );

  const handleEvaluate = () => {
    evaluate('1 + 2 + 3');
  };

  return (
    <div>
      <button onClick={handleEvaluate}>Evaluate</button>
      {isEvaluating && <span>Evaluating...</span>}
      {result && (
        <div>
          {result.error ? (
            <span className="text-red-500">{result.error}</span>
          ) : (
            <span>Result: {JSON.stringify(result.value)}</span>
          )}
        </div>
      )}
    </div>
  );
}
```

### With Context Variables

```typescript
const context = {
  userName: 'John',
  age: 30,
  items: ['apple', 'banana', 'orange']
};

evaluate('userName.toUpperCase() + " is " + age + " years old"', context);
// Result: "JOHN is 30 years old"

evaluate('items.map(item => item.toUpperCase())', context);
// Result: ["APPLE", "BANANA", "ORANGE"]
```

### Auto-Evaluation Mode

```typescript
const { result } = useExpressionEvaluator(
  'myControlId',
  true, // autoEvaluate = true
  expression, // Will evaluate automatically when this changes
  context // Will re-evaluate when context changes
);
```

### Multiple Data Sets

Each control can have its own context:

```typescript
// Control A - user data
const evaluatorA = useExpressionEvaluator('userNameField');
evaluatorA.evaluate('user.firstName + " " + user.lastName', {
  user: { firstName: 'John', lastName: 'Doe' }
});

// Control B - product data
const evaluatorB = useExpressionEvaluator('productPriceField');
evaluatorB.evaluate('price * (1 + taxRate)', {
  price: 100,
  taxRate: 0.08
});
```

## Security Features

### Resource Limits

QuickJS runs with the following safety limits:

- **Memory Limit**: 10MB per evaluation
- **Stack Limit**: 512KB
- **Isolation**: Each evaluation runs in a fresh context
- **No Browser APIs**: No access to DOM, fetch, localStorage, etc.

### Sandboxing

- Expressions run in QuickJS, completely isolated from the browser
- No access to browser globals or APIs
- Only explicitly passed context variables are available
- Automatic cleanup after evaluation

## Service Worker Integration

### Message Format

**Client → Service Worker:**
```typescript
{
  type: 'EVAL_EXPRESSION',
  payload: {
    expression: string,
    context: Record<string, any>,
    id: number,
    controlKey: string
  }
}
```

**Service Worker → Client:**
```typescript
{
  type: 'EVAL_EXPRESSION_RESULT',
  payload: {
    id: number,
    controlKey: string,
    result: {
      value: any,
      error: string | null,
      type: string
    }
  }
}
```

### Control Key Routing

Each control has a unique `controlKey` (typically the `fieldName`). This ensures:

- Multiple controls can evaluate simultaneously
- Results are routed to the correct control
- No cross-contamination between controls

## Supported Features

### Built-in Array Methods

QuickJS includes polyfills for common array methods:

- `map()`
- `filter()`
- (More can be added as needed)

### JavaScript Features

QuickJS supports modern JavaScript features:

- Arrow functions: `(x) => x * 2`
- Template literals: `` `Hello ${name}` ``
- Destructuring: `[first, ...rest] = arr`
- Spread operator: `[...arr1, ...arr2]`
- Object methods: `Object.keys()`, `Object.values()`, etc.

## Performance Considerations

### Initialization

- QuickJS WASM loads once and is cached
- Subsequent evaluations are fast (typically <10ms)
- First evaluation may take ~100-200ms

### Memory

- Each evaluation creates a new runtime (isolated)
- Automatic cleanup prevents memory leaks
- 10MB limit prevents excessive memory usage

### Throughput

- Multiple expressions can be evaluated concurrently
- Service worker handles requests asynchronously
- No blocking of the main thread

## Error Handling

Errors are caught and returned in the result:

```typescript
const { result } = useExpressionEvaluator('myControl');

evaluate('undefinedVariable + 1');

// result.error: "ReferenceError: undefinedVariable is not defined"
// result.value: null
// result.type: 'error'
```

## Debugging

Enable service worker logging:

```typescript
// In sw.ts
logger?.log('Expression evaluation:', { expression, context, result });
```

Browser console will show:
- Expression sent to worker
- Context variables injected
- Evaluation result
- Any errors

## Future Enhancements

Potential additions:

- [ ] Timeout limits (max execution time)
- [ ] More array/object utility functions
- [ ] Custom function injection
- [ ] Persistent context across evaluations
- [ ] Expression caching for repeated evaluations
- [ ] Performance metrics/profiling


