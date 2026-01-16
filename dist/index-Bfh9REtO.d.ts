import * as React from 'react';
import React__default from 'react';

interface InputProps {
    /**
     * Field name/key.
     * Used for Yjs field path and validation error tracking.
     * When nested inside NestedFieldProvider, the parent path is auto-prepended.
     */
    fieldName: string;
    /** Display label for the field */
    label: string;
    /** Current value */
    value: string | {
        expression: string;
        type: 'expression';
        value?: string;
    };
    /** Called when value changes */
    onChange: (value: string | {
        expression: string;
        type: 'expression';
    }, metadata?: any) => void;
    /** Whether the field is disabled */
    disabled?: boolean;
    /** Placeholder text */
    placeholder?: string;
    /** Expected return type for validation */
    expectedType?: string;
    /** Whether this is a required field */
    required?: boolean;
    /** Whether this field has a required property error (missing value) */
    hasRequiredError?: boolean;
    /** Custom className for the wrapper */
    className?: string;
    /** Custom className for the editor container */
    editorClassName?: string;
    /** Property definition (for richer context) */
    propertyDefinition?: any;
}
/**
 * Mock Input component for development/design mode.
 *
 * This is a simplified version that renders a basic input field.
 * In production, this is replaced with the real Input from packages/ui
 * which includes collaboration, type inference, and expression support.
 *
 * @example
 * ```tsx
 * <Input
 *   fieldName="firstName"
 *   label="First Name"
 *   value={value}
 *   onChange={setValue}
 * />
 * ```
 */
declare function Input({ fieldName, label, value, onChange, disabled, placeholder, expectedType, required, hasRequiredError, className, editorClassName, }: InputProps): React.JSX.Element;

interface SelectOption {
    node?: React.ReactNode;
    value: string;
    label: string;
}
interface SelectProps {
    /**
     * Field name/key.
     * Used for Yjs field path and validation error tracking.
     * When nested inside NestedFieldProvider, the parent path is auto-prepended.
     */
    fieldName: string;
    /** Display label for the field */
    label: string;
    /** Current value */
    value: string | {
        expression: string;
        type: 'expression';
        value?: string;
    };
    /** Called when value changes */
    onChange: (value: string | {
        expression: string;
        type: 'expression';
    }, metadata?: any) => void;
    /** Available options */
    options: SelectOption[] | string[];
    /** Whether the field is disabled */
    disabled?: boolean;
    /** Placeholder text */
    placeholder?: string;
    /** Expected return type for validation */
    expectedType?: string;
    /** Whether to hide the type badge */
    hideTypeBadge?: boolean;
    /** Whether this is a required field */
    required?: boolean;
    /** Whether this field has a required property error (missing value) */
    hasRequiredError?: boolean;
    /** Custom className for the wrapper */
    className?: string;
    /** Property definition (for richer context) */
    propertyDefinition?: any;
    /**
     * Render prop for custom select UI.
     * If not provided, uses a basic HTML select.
     */
    children?: (props: SelectRenderProps) => React.ReactNode;
}
interface SelectRenderProps {
    value: string;
    onChange: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onExpressionClick: () => void;
    options: SelectOption[];
    localInput: string;
    setLocalInput: (value: string) => void;
    expressionMode: {
        current: 'value' | 'expression';
        isExpressionMode: boolean;
        isEditorMode: boolean;
        isEditing: boolean;
        isFullScreen: boolean;
        expression: string;
        switchToValue: () => void;
        switchToExpression: () => void;
        switchToEditor: () => void;
        clear: () => void;
    };
    inferredType?: string;
    hasTypeMismatch?: boolean;
    hasError?: boolean;
}
/**
 * Mock Select component for development/design mode.
 *
 * This is a simplified version that renders a basic select field.
 * In production, this is replaced with the real Select from packages/ui
 * which includes collaboration, type inference, and expression support.
 *
 * @example
 * ```tsx
 * <Select
 *   fieldName="status"
 *   label="Status"
 *   value={value}
 *   onChange={setValue}
 *   options={['draft', 'published', 'archived']}
 * />
 * ```
 */
declare function Select({ fieldName, label, value, onChange, options: rawOptions, disabled, placeholder, expectedType, hideTypeBadge, required, hasRequiredError, className, children, }: SelectProps): React.JSX.Element;

/**
 * Shared Operator Type Definitions and Utilities
 *
 * This module provides reusable types and utilities for building
 * query builders with type-aware operators (Switch, IfThenElse, etc.)
 */
/**
 * Standard operator types for condition builders.
 * Custom UIs can extend this with their own operators.
 */
type BaseOperatorType = 'exists' | 'not_exists' | 'string_equals' | 'string_not_equals' | 'string_is_blank' | 'string_is_not_blank' | 'string_starts_with' | 'string_contains' | 'string_not_contains' | 'string_ends_with' | 'number_equals' | 'number_not_equals' | 'number_gt' | 'number_gte' | 'number_lt' | 'number_lte' | 'boolean_equals' | 'is_null' | 'is_not_null' | 'is_string' | 'is_not_string' | 'is_number' | 'is_not_number' | 'is_true' | 'is_false' | 'is_boolean' | 'is_not_boolean';
/**
 * Generic operator definition that can be extended with custom operators.
 *
 * @template T - Additional operator types to include (defaults to never)
 *
 * @example
 * // Using base operators only
 * const operators: OperatorDef[] = [...];
 *
 * // Extending with custom operators
 * type MyOperator = 'expression' | 'custom_op';
 * const operators: OperatorDef<MyOperator>[] = [...];
 */
type OperatorDef<T = never> = {
    /** The operator value/key */
    value: BaseOperatorType | T;
    /** Which inferred types this applies to ('any' = always shown) */
    types: string[];
    /** Human-readable label for the operator */
    label: string;
    /** Short label for compact display (optional) */
    shortLabel?: string;
    /** Whether to show the value Input */
    needsValue: boolean;
    /** Type to register for narrowing ('never' = no narrowing) */
    narrowsTo: string;
    /** If true, union narrowed type with base type (e.g., narrowed | string) */
    extendsWithBase?: boolean;
};
/**
 * Result of parsing an inferred type string.
 */
type ParsedTypes = {
    /** Deduplicated base types (string, number, boolean, any, etc.) */
    baseTypes: string[];
    /** Extracted string literal constants */
    stringConstants: string[];
    /** Extracted number literal constants */
    numberConstants: number[];
    /** Whether any literal constants were found */
    hasConstants: boolean;
    /** Original type strings for union building */
    rawTypes: string[];
};
/**
 * Parse an inferred type string into base types and extract any literal constants.
 *
 * Handles:
 * - Base types: string, number, boolean
 * - Union types: string | number
 * - String literals: "Hans" | "Karl" | "Eddie" | "Theo" | "Fritz" -> treated as string type
 * - Number literals: 1 | 2 | 3 -> treated as number type
 * - Boolean literals: true | false -> treated as boolean type
 *
 * @param typeStr - The inferred type string to parse
 * @returns Parsed type information
 *
 * @example
 * parseInferredTypes('"Hans" | "Karl" | "Eddie" | "Theo" | "Fritz" | string')
 * // Returns:
 * // {
 * //   baseTypes: ['string'],
 * //   stringConstants: ['Hans', 'Karl', 'Eddie', 'Theo', 'Fritz'],
 * //   numberConstants: [],
 * //   hasConstants: true,
 * //   rawTypes: ['"Hans"', '"Karl"', '"Eddie"', '"Theo"', '"Fritz"', 'string']
 * // }
 */
declare function parseInferredTypes(typeStr: string): ParsedTypes;
/**
 * Compute the expected type for a value input based on the operator.
 *
 * If `extendsWithBase` is true, the result includes both:
 * - The matching literal types from the inferred type
 * - The base type (to allow arbitrary input)
 *
 * This enables scenarios like:
 * - `string_equals` on `"Hans" | "Karl" | "Eddie" | "Theo" | "Fritz" | string"` → expects `"Hans" | "Karl" | "Eddie" | "Theo" | "Fritz" | string"` (exact match)
 * - `string_starts_with` on `"Hans" | "Karl" | "Eddie" | "Theo" | "Fritz" | string"` → expects `"Hans" | "Karl" | "Eddie" | "Theo" | "Fritz" | string"` (allows partial match)
 *
 * @param inferredType - The inferred type string from the statement
 * @param opDef - The operator definition
 * @returns The computed expected type string
 *
 * @example
 * const opDef = { narrowsTo: 'string', extendsWithBase: true, ... };
 * computeExtendedType('"Hans" | "Karl" | "Eddie" | "Theo" | "Fritz" | string', opDef);
 * // Returns: '"Hans" | "Karl" | "Eddie" | "Theo" | "Fritz" | string'
 */
declare function computeExtendedType<T = never>(inferredType: string, opDef: OperatorDef<T>): string;
/**
 * Filter operators based on an inferred type.
 * Returns only operators whose `types` include a matching base type.
 *
 * @param operators - Array of operator definitions
 * @param inferredType - The inferred type string to filter by
 * @returns Filtered array of operators
 *
 * @example
 * const filtered = filterOperatorsByType(OPERATORS, '"Hans" | "Karl" | "Eddie" | "Theo" | "Fritz" | string');
 * // Returns operators with types: ['any'] or types: ['string']
 */
declare function filterOperatorsByType<T = never>(operators: OperatorDef<T>[], inferredType: string): OperatorDef<T>[];
/**
 * Get string constants from an inferred type.
 * Useful for showing constant-based autocomplete options.
 *
 * @param inferredType - The inferred type string
 * @returns Array of string constants
 *
 * @example
 * getStringConstants('"Hans" | "Karl" | "Eddie" | "Theo" | "Fritz" | string');
 * // Returns: ['Hans', 'Karl', 'Eddie', 'Theo', 'Fritz']
 */
declare function getStringConstants(inferredType: string): string[];
/**
 * Get number constants from an inferred type.
 *
 * @param inferredType - The inferred type string
 * @returns Array of number constants
 */
declare function getNumberConstants(inferredType: string): number[];

/**
 * Simplified Field Components (Mock/Development Version)
 *
 * These are mock implementations of the simplified field components
 * for use during development and design. In production, these are
 * replaced with the real implementations from packages/ui that include
 * collaboration, type inference, and expression support.
 *
 * ## API
 *
 * The API matches the production components exactly, so developers
 * can build and test their UIs without needing the full infrastructure.
 *
 * ## Example
 *
 * ```tsx
 * import { Input, Select } from '@process.co/ui';
 *
 * function CustomUserForm({ value, onChange }) {
 *   return (
 *     <div>
 *       <Input
 *         fieldName="firstName"
 *         label="First Name"
 *         value={value.firstName}
 *         onChange={(v) => onChange({ ...value, firstName: v })}
 *       />
 *       <Select
 *         fieldName="role"
 *         label="Role"
 *         value={value.role}
 *         onChange={(v) => onChange({ ...value, role: v })}
 *         options={['admin', 'user', 'guest']}
 *       />
 *     </div>
 *   );
 * }
 * ```
 */

/**
 * Mock context value (always returns defaults).
 * In production, this is replaced with the real context from packages/ui.
 */
interface TemplateFieldContextValue {
    yDoc: null;
    collabUser: null;
    awareness: null;
    availableNodes: any;
    myInterface: any;
    typeDeclarations: string;
    element: any;
    nodeId: string;
    onControlFocus: (context: any) => void;
    onControlBlur: () => void;
    onRecordChange: (change: any) => void;
    onValidationChange: (fieldName: string, error: any) => void;
    parentFieldPath: string | null;
    disabled: boolean;
}
/**
 * Mock hook - returns empty context values.
 * Components work as basic inputs in development mode.
 */
declare function useTemplateFieldContext(): TemplateFieldContextValue;
/**
 * Mock hook - always returns false in development mode.
 */
declare function useIsInTemplateFieldProvider(): boolean;
/**
 * Mock hook - returns the fieldName as-is (no parent path in dev mode).
 */
declare function useFieldPath(fieldName: string): string;
/**
 * Mock provider - just renders children without context.
 */
declare function TemplateFieldProvider({ children }: {
    children: React__default.ReactNode;
}): React__default.JSX.Element;
/**
 * Mock provider - just renders children without nesting context.
 */
declare function NestedFieldProvider({ children }: {
    children: React__default.ReactNode;
    fieldName: string;
}): React__default.JSX.Element;
type TemplateFieldProviderProps = {
    children: React__default.ReactNode;
    nodeId?: string;
    yDoc?: any;
    collabUser?: any;
    awareness?: any;
    availableNodes?: any;
    myInterface?: any;
    typeDeclarations?: string;
    element?: any;
    onControlFocus?: (context: any) => void;
    onControlBlur?: () => void;
    onRecordChange?: (change: any) => void;
    onValidationChange?: (fieldName: string, error: any) => void;
    parentFieldPath?: string | null;
    disabled?: boolean;
};
type NestedFieldProviderProps = {
    children: React__default.ReactNode;
    fieldName: string;
};
type TemplateFieldValidationError = {
    hasError: boolean;
    hasSyntaxError: boolean;
    hasTypeMismatch: boolean;
    expectedType?: string;
    inferredType?: string;
    errorMessage?: string;
    willCoerce?: boolean;
};
type TemplateFieldFocusContext = {
    nodeId: string;
    fieldName: string;
    propertyPath: string;
    label: string;
    expectedType: string;
    currentValue: any;
    isExpression: boolean;
    editorFormat: string;
    inferredType?: string;
    errors?: any;
    selectedNodeId?: string;
    selectedNodeName?: string;
    elementContext?: any;
    userContext?: any;
    propertyDefinition?: any;
};
type TemplateFieldChangeEvent = {
    type: 'value_change' | 'mode_switch' | 'format_change' | 'field_focus' | 'panel_open' | 'panel_close';
    details: {
        oldValue?: string;
        newValue?: string;
        oldMode?: string;
        newMode?: string;
        description?: string;
        hasError?: boolean;
        hasTypeMismatch?: boolean;
        willCoerce?: boolean;
        expectedType?: string;
        inferredType?: string;
    };
};
/**
 * Context value for sharing inferred types between fields within an element.
 * This enables type propagation via the $infer<...> syntax.
 *
 * ## Usage
 *
 * Publishing field (e.g., switchExpression):
 * - Set expectedType to `$infer<string | number | boolean>`
 * - The field will broadcast its inferred type to the context
 *
 * Subscribing field (e.g., caseExpression):
 * - Set expectedType to `$infer<switchExpression>`
 * - The field will use the inferred type from switchExpression
 *
 * @example
 * ```tsx
 * // In a custom control that needs to filter operators:
 * const ctx = useInferredTypes();
 * const switchType = ctx?.getInferredType('switchExpression') || 'any';
 * const operators = getOperatorsForType(switchType);
 * ```
 */
interface InferredTypesContextValue {
    /** Map of fieldName → inferred type */
    inferredTypes: Record<string, string>;
    /** Set the inferred type for a field (called by publisher fields) */
    setInferredType: (fieldName: string, type: string) => void;
    /** Get the inferred type for a field (called by subscriber fields) */
    getInferredType: (fieldName: string) => string | undefined;
    /** Remove an inferred type by field name */
    clearInferredType: (fieldName: string) => void;
    /** Remove all inferred types */
    clearAllInferredTypes: () => void;
}
/**
 * Context for inferred types.
 * In production, this is provided by PropertiesRender.
 */
declare const InferredTypesContext: React__default.Context<InferredTypesContextValue | null>;
/**
 * Hook to access the inferred types context.
 *
 * When used within a DevProvider, uses the dev context's inferred types storage.
 * When used within a production InferredTypesProvider, uses the real context.
 * Returns null when not inside any provider.
 *
 * @example
 * ```tsx
 * const ctx = useInferredTypes();
 * const switchType = ctx?.getInferredType('switchExpression') || 'string';
 * ```
 */
declare function useInferredTypes(): InferredTypesContextValue | null;
/**
 * Props for InferredTypesProvider
 */
interface InferredTypesProviderProps {
    children: React__default.ReactNode;
    /**
     * Optional Yjs document for collaborative sync (ignored in mock mode).
     * When provided in production, inferred types are synced via Yjs.
     */
    yDoc?: unknown;
    /**
     * Optional key prefix for the Yjs map (ignored in mock mode).
     */
    mapKey?: string;
}
/**
 * Mock provider for inferred types context.
 * In development mode, this is a no-op - just renders children.
 * In production, the real implementation from @repo/ui provides actual type propagation.
 */
declare function InferredTypesProvider({ children }: InferredTypesProviderProps): React__default.JSX.Element;
/**
 * Compute the intersection of multiple types.
 * Used when subscribing to multiple fields to narrow the expected type.
 *
 * @example
 * intersectTypes(['string | number', 'number']) → 'number'
 */
declare function intersectTypes(types: (string | undefined)[]): string;
/**
 * Configuration parsed from the $infer<...> syntax.
 */
interface InferConfig {
    /** The mode of the field: 'publish', 'subscribe', or 'normal' */
    mode: 'publish' | 'subscribe' | 'normal';
    /** For publish mode: the allowed types (e.g., ['string', 'number', 'boolean']) */
    allowedTypes?: string[];
    /** For subscribe mode: the field name to subscribe to */
    subscribeToField?: string;
}
/**
 * Parse the $infer<...> syntax from an expectedType string.
 *
 * @example
 * ```tsx
 * parseInferSyntax('$infer<string | number>')
 * // → { mode: 'publish', allowedTypes: ['string', 'number'] }
 *
 * parseInferSyntax('$infer<switchExpression>')
 * // → { mode: 'subscribe', subscribeToField: 'switchExpression' }
 *
 * parseInferSyntax('string')
 * // → { mode: 'normal' }
 * ```
 */
declare function parseInferSyntax(expectedType: string | undefined): InferConfig;

/**
 * Standard operators grouped by compatible types.
 * Use getOperatorsForType() to retrieve operators for a specific type.
 *
 * @deprecated Use OperatorDef<T> and filterOperatorsByType() for more flexibility
 */
declare const OPERATORS_BY_TYPE: Record<string, Array<{
    value: string;
    label: string;
}>>;
/**
 * Get the appropriate operators for a given type.
 * Falls back to 'any' operators for unrecognized types.
 *
 * @deprecated Use OperatorDef<T> and filterOperatorsByType() for more flexibility
 *
 * @example
 * ```tsx
 * const ctx = useInferredTypes();
 * const switchType = ctx?.getInferredType('switchExpression') || 'any';
 * const operators = getOperatorsForType(switchType);
 * // If switchType is 'number', returns numeric operators including <, >, etc.
 * ```
 */
declare function getOperatorsForType(type: string): Array<{
    value: string;
    label: string;
}>;
/**
 * Props for NodePropertyProvider
 */
interface NodePropertyProviderProps {
    children: React__default.ReactNode;
    /** The node ID this provider manages */
    nodeId: string;
    /** Yjs document for collaborative sync (ignored in mock mode) */
    yDoc?: unknown;
    /** Initial property data from the node */
    initialData?: Record<string, any>;
    /** Callback when a single property changes */
    onPropertyChange?: (key: string, value: any, metadata?: any) => void;
    /** Callback when multiple properties change */
    onPropertiesChange?: (updates: Record<string, any>, metadata?: Record<string, any>) => void;
    /** Client ID for conflict resolution */
    clientId?: string;
}
/**
 * Mock provider for node properties.
 * In development mode, this is a no-op - just renders children.
 * In production, the real implementation from @repo/ui provides actual store.
 */
declare function NodePropertyProvider({ children }: NodePropertyProviderProps): React__default.ReactElement;
/**
 * Hook to check if we're inside a property provider.
 *
 * Returns true when inside a DevProvider or a production NodePropertyProvider.
 * Returns false otherwise.
 */
declare function useIsInNodePropertyProvider(): boolean;
/**
 * Hook to access and update a single property from the node store.
 *
 * When used within a DevProvider, uses the dev context's storage.
 * When used within a production NodePropertyProvider, uses the real store.
 * Otherwise, returns [undefined, no-op] as a fallback.
 *
 * @example
 * ```tsx
 * const [operator, setOperator] = useNodeProperty<string>('operator');
 * ```
 */
declare function useNodeProperty<T = any>(key: string): [T | undefined, (value: T, metadata?: any) => void];
/**
 * Hook to access and update all properties from the node store.
 *
 * When used within a DevProvider, uses the dev context's storage.
 * When used within a production NodePropertyProvider, uses the real store.
 * Otherwise, returns [{}, no-op] as a fallback.
 */
declare function useNodeProperties(): [
    Record<string, any>,
    (updates: Record<string, any>, metadata?: Record<string, any>) => void
];
/**
 * Hook to subscribe to an inferred type by field name.
 *
 * When used within a DevProvider, uses the dev context's inferred types.
 * When used within a production provider, uses the real store.
 * Returns undefined when not inside any provider.
 */
declare function useInferredType(fieldName: string): string | undefined;
/**
 * Hook to get a setter for inferred types.
 *
 * When used within a DevProvider, uses the dev context's setInferredType.
 * Returns a no-op when not inside any provider.
 */
declare function useSetInferredType(): (fieldName: string, type: string) => void;
/**
 * Hook to get a clearer for inferred types.
 *
 * When used within a DevProvider, uses the dev context's clearInferredType.
 * Returns a no-op when not inside any provider.
 */
declare function useClearInferredType(): (fieldName: string) => void;
/**
 * Hook to get a function that clears all inferred types.
 *
 * When used within a DevProvider, uses the dev context's clearAllInferredTypes.
 * Returns a no-op when not inside any provider.
 */
declare function useClearAllInferredTypes(): () => void;
/**
 * Hook to subscribe to all inferred types.
 *
 * When used within a DevProvider, uses the dev context's inferred types.
 * Returns {} when not inside any provider.
 */
declare function useAllInferredTypes(): Record<string, string>;
/**
 * Hook to get a setter for individual properties.
 *
 * When used within a DevProvider, uses the dev context's setProperty.
 * Returns a no-op when not inside any provider.
 */
declare function useSetProperty(): <T = any>(key: string, value: T, metadata?: any) => void;
/**
 * Hook to trigger a layout update from within a custom control.
 *
 * Call this after structural changes that affect the node's visual layout,
 * such as reordering items or toggling features that change the node's height.
 *
 * In development mode (DevProvider), this is a no-op.
 * In production, this triggers regenerateRfState() to recalculate the flow layout.
 *
 * @example
 * ```tsx
 * function CaseEditor() {
 *   const triggerLayoutUpdate = useTriggerLayoutUpdate();
 *
 *   const handleReorderCases = (newCases) => {
 *     setValue({ ...value, cases: newCases });
 *     // Trigger layout recalculation after reordering
 *     triggerLayoutUpdate();
 *   };
 * }
 * ```
 */
declare function useTriggerLayoutUpdate(): () => void;
/**
 * Validation rule for a field.
 */
interface FieldValidationRule {
    required?: boolean;
    requiredIf?: (properties: Record<string, any>) => boolean;
    customValidation?: (value: any, properties: Record<string, any>) => string | null;
}
/**
 * Mock hook - returns no-ops in development mode.
 * In production, allows custom controls to set validation rules.
 *
 * @example
 * ```tsx
 * const { setFieldRequired, setFieldRequiredIf } = useFieldValidation();
 * setFieldRequired('expression', true);
 * setFieldRequiredIf('expression', (props) => props.operator?.needsValue);
 * ```
 */
declare function useFieldValidation(): {
    setFieldRequired: (fieldName: string, required: boolean) => void;
    setFieldRequiredIf: (fieldName: string, requiredIf: (properties: Record<string, any>) => boolean) => void;
    setFieldValidation: (fieldName: string, customValidation: (value: any, properties: Record<string, any>) => string | null) => void;
    clearFieldValidation: (fieldName: string) => void;
    isFieldRequired: (fieldName: string) => boolean;
    validateField: (fieldName: string) => string | null;
};

type index_BaseOperatorType = BaseOperatorType;
type index_FieldValidationRule = FieldValidationRule;
type index_InferConfig = InferConfig;
declare const index_InferredTypesContext: typeof InferredTypesContext;
type index_InferredTypesContextValue = InferredTypesContextValue;
declare const index_InferredTypesProvider: typeof InferredTypesProvider;
type index_InferredTypesProviderProps = InferredTypesProviderProps;
declare const index_Input: typeof Input;
type index_InputProps = InputProps;
declare const index_NestedFieldProvider: typeof NestedFieldProvider;
type index_NestedFieldProviderProps = NestedFieldProviderProps;
declare const index_NodePropertyProvider: typeof NodePropertyProvider;
type index_NodePropertyProviderProps = NodePropertyProviderProps;
declare const index_OPERATORS_BY_TYPE: typeof OPERATORS_BY_TYPE;
type index_OperatorDef<T = never> = OperatorDef<T>;
type index_ParsedTypes = ParsedTypes;
declare const index_Select: typeof Select;
type index_SelectOption = SelectOption;
type index_SelectProps = SelectProps;
type index_SelectRenderProps = SelectRenderProps;
type index_TemplateFieldChangeEvent = TemplateFieldChangeEvent;
type index_TemplateFieldContextValue = TemplateFieldContextValue;
type index_TemplateFieldFocusContext = TemplateFieldFocusContext;
declare const index_TemplateFieldProvider: typeof TemplateFieldProvider;
type index_TemplateFieldProviderProps = TemplateFieldProviderProps;
type index_TemplateFieldValidationError = TemplateFieldValidationError;
declare const index_computeExtendedType: typeof computeExtendedType;
declare const index_filterOperatorsByType: typeof filterOperatorsByType;
declare const index_getNumberConstants: typeof getNumberConstants;
declare const index_getOperatorsForType: typeof getOperatorsForType;
declare const index_getStringConstants: typeof getStringConstants;
declare const index_intersectTypes: typeof intersectTypes;
declare const index_parseInferSyntax: typeof parseInferSyntax;
declare const index_parseInferredTypes: typeof parseInferredTypes;
declare const index_useAllInferredTypes: typeof useAllInferredTypes;
declare const index_useClearAllInferredTypes: typeof useClearAllInferredTypes;
declare const index_useClearInferredType: typeof useClearInferredType;
declare const index_useFieldPath: typeof useFieldPath;
declare const index_useFieldValidation: typeof useFieldValidation;
declare const index_useInferredType: typeof useInferredType;
declare const index_useInferredTypes: typeof useInferredTypes;
declare const index_useIsInNodePropertyProvider: typeof useIsInNodePropertyProvider;
declare const index_useIsInTemplateFieldProvider: typeof useIsInTemplateFieldProvider;
declare const index_useNodeProperties: typeof useNodeProperties;
declare const index_useNodeProperty: typeof useNodeProperty;
declare const index_useSetInferredType: typeof useSetInferredType;
declare const index_useSetProperty: typeof useSetProperty;
declare const index_useTemplateFieldContext: typeof useTemplateFieldContext;
declare const index_useTriggerLayoutUpdate: typeof useTriggerLayoutUpdate;
declare namespace index {
  export { type index_BaseOperatorType as BaseOperatorType, type index_FieldValidationRule as FieldValidationRule, type index_InferConfig as InferConfig, index_InferredTypesContext as InferredTypesContext, type index_InferredTypesContextValue as InferredTypesContextValue, index_InferredTypesProvider as InferredTypesProvider, type index_InferredTypesProviderProps as InferredTypesProviderProps, index_Input as Input, type index_InputProps as InputProps, index_NestedFieldProvider as NestedFieldProvider, type index_NestedFieldProviderProps as NestedFieldProviderProps, index_NodePropertyProvider as NodePropertyProvider, type index_NodePropertyProviderProps as NodePropertyProviderProps, index_OPERATORS_BY_TYPE as OPERATORS_BY_TYPE, type index_OperatorDef as OperatorDef, type index_ParsedTypes as ParsedTypes, index_Select as Select, type index_SelectOption as SelectOption, type index_SelectProps as SelectProps, type index_SelectRenderProps as SelectRenderProps, type index_TemplateFieldChangeEvent as TemplateFieldChangeEvent, type index_TemplateFieldContextValue as TemplateFieldContextValue, type index_TemplateFieldFocusContext as TemplateFieldFocusContext, index_TemplateFieldProvider as TemplateFieldProvider, type index_TemplateFieldProviderProps as TemplateFieldProviderProps, type index_TemplateFieldValidationError as TemplateFieldValidationError, index_computeExtendedType as computeExtendedType, index_filterOperatorsByType as filterOperatorsByType, index_getNumberConstants as getNumberConstants, index_getOperatorsForType as getOperatorsForType, index_getStringConstants as getStringConstants, index_intersectTypes as intersectTypes, index_parseInferSyntax as parseInferSyntax, index_parseInferredTypes as parseInferredTypes, index_useAllInferredTypes as useAllInferredTypes, index_useClearAllInferredTypes as useClearAllInferredTypes, index_useClearInferredType as useClearInferredType, index_useFieldPath as useFieldPath, index_useFieldValidation as useFieldValidation, index_useInferredType as useInferredType, index_useInferredTypes as useInferredTypes, index_useIsInNodePropertyProvider as useIsInNodePropertyProvider, index_useIsInTemplateFieldProvider as useIsInTemplateFieldProvider, index_useNodeProperties as useNodeProperties, index_useNodeProperty as useNodeProperty, index_useSetInferredType as useSetInferredType, index_useSetProperty as useSetProperty, index_useTemplateFieldContext as useTemplateFieldContext, index_useTriggerLayoutUpdate as useTriggerLayoutUpdate };
}

export { useClearAllInferredTypes as A, useAllInferredTypes as B, useSetProperty as C, useTriggerLayoutUpdate as D, useFieldValidation as E, type FieldValidationRule as F, Input as G, type InputProps as H, type InferredTypesContextValue as I, type SelectProps as J, type SelectOption as K, type SelectRenderProps as L, parseInferredTypes as M, NestedFieldProvider as N, OPERATORS_BY_TYPE as O, computeExtendedType as P, filterOperatorsByType as Q, getStringConstants as R, Select as S, type TemplateFieldContextValue as T, getNumberConstants as U, type BaseOperatorType as V, type OperatorDef as W, type ParsedTypes as X, useIsInTemplateFieldProvider as a, useFieldPath as b, TemplateFieldProvider as c, type TemplateFieldProviderProps as d, type NestedFieldProviderProps as e, type TemplateFieldValidationError as f, type TemplateFieldFocusContext as g, type TemplateFieldChangeEvent as h, index as i, InferredTypesContext as j, useInferredTypes as k, type InferredTypesProviderProps as l, InferredTypesProvider as m, intersectTypes as n, type InferConfig as o, parseInferSyntax as p, getOperatorsForType as q, type NodePropertyProviderProps as r, NodePropertyProvider as s, useIsInNodePropertyProvider as t, useTemplateFieldContext as u, useNodeProperty as v, useNodeProperties as w, useInferredType as x, useSetInferredType as y, useClearInferredType as z };
