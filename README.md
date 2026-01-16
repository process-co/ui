# @process.co/ui

A React UI component library for Process.co applications with built-in collaborative editing, type inference, and expression support.

## Installation

```bash
npm install @process.co/ui
```

### Importing Styles

```tsx
import '@process.co/ui/styles';
```

---

## Field Components

The `Input` and `Select` components are collaborative-aware form controls designed for building custom UIs that integrate with Process.co's flow editor.

### Quick Start

```tsx
import { Input, Select, useNodeProperty } from '@process.co/ui/fields';
import '@process.co/ui/styles';

function MyCustomControl({ fieldName }) {
  const [value, setValue] = useNodeProperty(fieldName);
  
  return (
    <Input
      fieldName="expression"
      label="Expression"
      expectedType="string"
      value={value}
      onChange={setValue}
    />
  );
}
```

---

## Input Component

A text input with expression support, type inference, and real-time collaboration.

### Props

| Prop | Type | Description |
|------|------|-------------|
| `fieldName` | `string` | Unique identifier for collaborative sync |
| `label` | `string` | Display label |
| `value` | `any` | Current value |
| `onChange` | `(value: any) => void` | Change handler |
| `expectedType` | `string` | Expected type for validation (see Type Inference) |
| `placeholder` | `string` | Placeholder text |

### Example

```tsx
<Input
  fieldName="userEmail"
  label="Email Address"
  expectedType="string"
  value={email}
  onChange={setEmail}
  placeholder="user@example.com"
/>
```

---

## Select Component

A dropdown select with expression support and type-aware options.

### Props

| Prop | Type | Description |
|------|------|-------------|
| `fieldName` | `string` | Unique identifier for collaborative sync |
| `label` | `string` | Display label |
| `value` | `any` | Current selected value |
| `onChange` | `(value: any) => void` | Change handler |
| `options` | `SelectOption[]` | Available options |
| `expectedType` | `string` | Expected type for validation |

### SelectOption Type

```tsx
type SelectOption = {
  value: string;
  label: string;
  node?: ReactNode; // Custom render
};
```

### Example

```tsx
<Select
  fieldName="operator"
  label="Operation"
  value={operator}
  onChange={setOperator}
  options={[
    { value: 'equals', label: 'Equals' },
    { value: 'contains', label: 'Contains' },
    { value: 'startsWith', label: 'Starts With' },
  ]}
/>
```

---

## Type Inference System

The `$infer<...>` syntax enables automatic type inference and propagation between fields.

### How It Works

When a field uses `$infer` or `$infer<allowedTypes>` as its `expectedType`:

1. The field **infers** the type of the user's input
2. The field **publishes** that inferred type under its `fieldName`
3. Other fields can **subscribe** to that type using `$infer<[fieldName]>`

### Publishing Types (Automatic)

Any field with `$infer` syntax automatically publishes its inferred type:

```tsx
// This field publishes its inferred type as "switchExpression"
<Input
  fieldName="switchExpression"
  expectedType="$infer<string | number | boolean>"
/>
```

The field will:
1. Accept string, number, or boolean values
2. Infer the actual type from user input (e.g., if user types `"hello"`, infers `string`)
3. **Publish** the inferred type so other fields can access it via `fieldName`

You can also use just `$infer` without constraints:

```tsx
// Publishes inferred type with no restrictions on allowed types
<Input
  fieldName="myExpression"
  expectedType="$infer"
/>
```

Or with a single known type:

```tsx
// Publishes "string" as the inferred type for this field
<Input
  fieldName="stringField"
  expectedType="$infer<string>"
/>
```

### Subscribing to Types

A field can **subscribe** to another field's published type:

```tsx
// This field receives its expected type from "switchExpression"
<Input
  fieldName="caseValue"
  expectedType="$infer<[switchExpression]>"
/>
```

This field will:
1. Look up the inferred type published by `switchExpression`
2. Use that type for validation and autocomplete
3. Update automatically when the source field's type changes

### Multi-Field Subscription

Subscribe to multiple fields - types are intersected:

```tsx
<Input
  fieldName="value"
  expectedType='$infer<["statementField", "operatorField"]>'
/>
```

The expected type is computed by intersecting types from both fields.

### Example Flow

```tsx
// 1. Statement field publishes its inferred type
<Input
  fieldName="statement"
  expectedType="$infer<string | number | boolean>"
  // User enters: this.user.age
  // Infers and publishes: "number"
/>

// 2. Operator dropdown reads the published type to filter options
const ctx = useInferredTypes();
const statementType = ctx?.getInferredType('statement'); // "number"
const operators = statementType === 'number' 
  ? ['=', '!=', '<', '>', '<=', '>=']
  : ['=', '!='];

// 3. Value field subscribes to the statement's type
<Input
  fieldName="value"
  expectedType="$infer<[statement]>"
  // Expects: "number" (from statement field)
/>
```

---

## useInferredTypes Hook

Access inferred types programmatically for building type-aware UIs:

```tsx
import { useInferredTypes } from '@process.co/ui/fields';

function OperatorSelect() {
  const ctx = useInferredTypes();
  
  // Read the published type from another field
  const expressionType = ctx?.getInferredType('switchExpression') || 'any';
  
  // Manually publish a type (e.g., for operator narrowing)
  ctx?.setInferredType('operatorNarrow', 'string');
  
  // Filter operators based on type
  const operators = expressionType === 'number' 
    ? ['=', '!=', '<', '>', '<=', '>=']
    : expressionType === 'string'
      ? ['=', '!=', 'contains', 'startsWith', 'endsWith']
      : ['=', '!='];
  
  return (
    <Select options={operators.map(op => ({ value: op, label: op }))} />
  );
}
```

### Context Methods

| Method | Description |
|--------|-------------|
| `getInferredType(fieldName)` | Get the published type for a field |
| `setInferredType(fieldName, type)` | Manually publish a type for a field |
| `clearInferredType(fieldName)` | Remove a published type for a field |
| `clearAllInferredTypes()` | Remove all published types |
| `inferredTypes` | Record of all fieldName → type mappings |

### Cleanup on Unmount

When building controls that publish inferred types, clean up on unmount to avoid stale types:

```tsx
useEffect(() => {
  // Set the inferred type
  ctx?.setInferredType(myFieldName, computedType);
  
  // Cleanup on unmount
  return () => {
    ctx?.clearInferredType?.(myFieldName);
  };
}, [myFieldName, computedType]);
```

---

## useNodeProperty Hook

Subscribe to and update node properties with automatic collaboration sync:

```tsx
import { useNodeProperty } from '@process.co/ui/fields';

function MyControl({ fieldName }) {
  const [value, setValue] = useNodeProperty<MyValueType>(fieldName);
  
  // value: Current property value (undefined if not set)
  // setValue: Update function with automatic sync
  
  return (
    <button onClick={() => setValue({ ...value, enabled: true })}>
      Enable
    </button>
  );
}
```

---

## Flow Editor Actions

Custom controls can trigger flow-level side effects using a unified hook:

```tsx
import { useFlowEditorActions } from '@process.co/ui/fields';

function SwitchEditor({ fieldName }) {
  const { triggerLayoutUpdate, triggerValidation, clearValidationErrorsByPrefix } =
    useFlowEditorActions();

  const handleRemoveCase = (caseId: string) => {
    clearValidationErrorsByPrefix(caseId);
    triggerLayoutUpdate();
    triggerValidation();
  };
}
```

### Actions

| Action | Description |
|--------|-------------|
| `triggerLayoutUpdate()` | Recalculate node layout after structural changes |
| `triggerValidation()` | Run unified flow validation |
| `clearValidationErrorsByPrefix(prefix)` | Remove expression errors matching a field prefix |

---

## Building Custom Controls

Custom controls integrate with Process.co's collaborative editing system through the `useNodeProperty` hook.

### Basic Pattern

```tsx
import { useNodeProperty, useInferredTypes } from '@process.co/ui/fields';

interface MyControlProps {
  fieldName: string;
  readonly?: boolean;
}

export default function MyControl({ fieldName, readonly = false }: MyControlProps) {
  // Subscribe to the property value
  const [value, setValue] = useNodeProperty<MyValueType>(fieldName);
  
  // Access type inference context (optional)
  const ctx = useInferredTypes();
  
  // Derive state from value
  const items = value?.items ?? [];
  
  // Update handler
  const addItem = () => {
    setValue({
      ...value,
      items: [...items, { id: generateId(), name: '' }]
    });
  };
  
  return (
    <div>
      {items.map(item => (
        <ItemRow key={item.id} item={item} />
      ))}
      {!readonly && <button onClick={addItem}>Add Item</button>}
    </div>
  );
}
```

### With Type Inference

```tsx
import { 
  useNodeProperty, 
  useInferredTypes,
  Input,
  Select,
} from '@process.co/ui/fields';

export default function ConditionalEditor({ fieldName }) {
  const [value, setValue] = useNodeProperty(fieldName);
  const ctx = useInferredTypes();
  
  // Get inferred type from statement field (it publishes automatically)
  const statementType = ctx?.getInferredType(`${fieldName}_statement`) || 'any';
  
  // Filter operators based on statement type
  const operators = getOperatorsForType(statementType);
  
  return (
    <div>
      {/* This field PUBLISHES its inferred type as "${fieldName}_statement" */}
      <Input
        fieldName={`${fieldName}_statement`}
        label="Statement"
        expectedType="$infer<string | number | boolean>"
        value={value?.statement}
        onChange={(v) => setValue({ ...value, statement: v })}
      />
      
      <Select
        fieldName={`${fieldName}_operator`}
        label="Operator"
        options={operators}
        value={value?.operator}
        onChange={(v) => setValue({ ...value, operator: v })}
      />
      
      {/* This field SUBSCRIBES to the statement field's type */}
      <Input
        fieldName={`${fieldName}_value`}
        label="Value"
        expectedType={`$infer<[${fieldName}_statement]>`}
        value={value?.value}
        onChange={(v) => setValue({ ...value, value: v })}
      />
    </div>
  );
}
```

---

## Operator Utilities

Shared utilities for building query builders with type-aware operators.

### Types

```tsx
import { 
  BaseOperatorType,
  OperatorDef,
  ParsedTypes,
} from '@process.co/ui/fields';

// BaseOperatorType includes: 'exists', 'not_exists', 'string_equals', 
// 'string_contains', 'number_gt', 'boolean_equals', etc.

// OperatorDef<T> is generic - extend with custom operators
type MyOperator = 'expression' | 'custom_check';
const operators: OperatorDef<MyOperator>[] = [...];
```

### Functions

```tsx
import {
  parseInferredTypes,
  computeExtendedType,
  filterOperatorsByType,
  getStringConstants,
  getNumberConstants,
} from '@process.co/ui/fields';

// Parse type string into components
const parsed = parseInferredTypes('"adam" | "beth" | number');
// { baseTypes: ['string', 'number'], stringConstants: ['adam', 'beth'], ... }

// Filter operators by compatible type
const ops = filterOperatorsByType(OPERATORS, '"adam" | "beth"');
// Returns operators with types: ['any'] or ['string']

// Compute extended type for operators with extendsWithBase
const expectedType = computeExtendedType('"adam" | "beth"', operatorDef);
// If extendsWithBase: true, returns '"adam" | "beth" | string'
```

### Extended Type Narrowing

Some operators support `extendsWithBase` for flexible type matching:

```tsx
const OPERATORS: OperatorDef[] = [
  // Exact match - only accepts the literal values
  { value: 'string_equals', narrowsTo: 'string', extendsWithBase: false },
  
  // Extended match - accepts literals OR any string
  { value: 'string_starts_with', narrowsTo: 'string', extendsWithBase: true },
];
```

**Example:** If statement infers `"adam" | "beth"`:
- `string_equals` expects: `"adam" | "beth"` (must match exactly)
- `string_starts_with` expects: `"adam" | "beth" | string` (can provide partial match like `"a"`)

---

## Collaboration Features

All field components support real-time collaboration when used within the Process.co flow editor:

- **Cursor sharing**: See where other users are editing
- **Conflict resolution**: Automatic handling of concurrent edits via Yjs
- **Presence indicators**: Visual indication of active editors

These features work automatically when components are rendered within a `NodePropertyProvider` context.

---

## UI Components

The library also includes standard UI components:

```tsx
import {
  Button,
  Card,
  Alert,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  ConfirmationDropdownMenuItem,
} from '@process.co/ui';
```

See the [Storybook documentation](https://main--674d30e40a127b13419e46ba.chromatic.com) for full component reference.
