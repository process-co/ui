import * as React$1 from 'react';

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
declare function Input({ fieldName, label, value, onChange, disabled, placeholder, expectedType, required, hasRequiredError, className, editorClassName, }: InputProps): React$1.JSX.Element;

interface SelectOption {
    node?: React$1.ReactNode;
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
    children?: (props: SelectRenderProps) => React$1.ReactNode;
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
declare function Select({ fieldName, label, value, onChange, options: rawOptions, disabled, placeholder, expectedType, required, hasRequiredError, className, children, }: SelectProps): React$1.JSX.Element;

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
    children: React.ReactNode;
}): React$1.JSX.Element;
/**
 * Mock provider - just renders children without nesting context.
 */
declare function NestedFieldProvider({ children }: {
    children: React.ReactNode;
    fieldName: string;
}): React$1.JSX.Element;
type TemplateFieldProviderProps = {
    children: React.ReactNode;
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
    children: React.ReactNode;
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
}
/**
 * Context for inferred types.
 * In production, this is provided by PropertiesRender.
 */
declare const InferredTypesContext: React$1.Context<InferredTypesContextValue | null>;
/**
 * Hook to access the inferred types context.
 * Returns null when not inside an InferredTypesProvider (e.g., in mock/dev mode).
 *
 * @example
 * ```tsx
 * const ctx = useInferredTypes();
 * const switchType = ctx?.getInferredType('switchExpression') || 'string';
 * ```
 */
declare function useInferredTypes(): InferredTypesContextValue | null;
/**
 * Mock provider for inferred types context.
 * In development mode, this is a no-op - just renders children.
 * In production, the real implementation from @repo/ui provides actual type propagation.
 */
declare function InferredTypesProvider({ children }: {
    children: React.ReactNode;
}): React$1.JSX.Element;
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
 */
declare const OPERATORS_BY_TYPE: Record<string, Array<{
    value: string;
    label: string;
}>>;
/**
 * Get the appropriate operators for a given type.
 * Falls back to 'any' operators for unrecognized types.
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

type index_InferConfig = InferConfig;
declare const index_InferredTypesContext: typeof InferredTypesContext;
type index_InferredTypesContextValue = InferredTypesContextValue;
declare const index_InferredTypesProvider: typeof InferredTypesProvider;
declare const index_Input: typeof Input;
type index_InputProps = InputProps;
declare const index_NestedFieldProvider: typeof NestedFieldProvider;
type index_NestedFieldProviderProps = NestedFieldProviderProps;
declare const index_OPERATORS_BY_TYPE: typeof OPERATORS_BY_TYPE;
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
declare const index_getOperatorsForType: typeof getOperatorsForType;
declare const index_intersectTypes: typeof intersectTypes;
declare const index_parseInferSyntax: typeof parseInferSyntax;
declare const index_useFieldPath: typeof useFieldPath;
declare const index_useInferredTypes: typeof useInferredTypes;
declare const index_useIsInTemplateFieldProvider: typeof useIsInTemplateFieldProvider;
declare const index_useTemplateFieldContext: typeof useTemplateFieldContext;
declare namespace index {
  export { type index_InferConfig as InferConfig, index_InferredTypesContext as InferredTypesContext, type index_InferredTypesContextValue as InferredTypesContextValue, index_InferredTypesProvider as InferredTypesProvider, index_Input as Input, type index_InputProps as InputProps, index_NestedFieldProvider as NestedFieldProvider, type index_NestedFieldProviderProps as NestedFieldProviderProps, index_OPERATORS_BY_TYPE as OPERATORS_BY_TYPE, index_Select as Select, type index_SelectOption as SelectOption, type index_SelectProps as SelectProps, type index_SelectRenderProps as SelectRenderProps, type index_TemplateFieldChangeEvent as TemplateFieldChangeEvent, type index_TemplateFieldContextValue as TemplateFieldContextValue, type index_TemplateFieldFocusContext as TemplateFieldFocusContext, index_TemplateFieldProvider as TemplateFieldProvider, type index_TemplateFieldProviderProps as TemplateFieldProviderProps, type index_TemplateFieldValidationError as TemplateFieldValidationError, index_getOperatorsForType as getOperatorsForType, index_intersectTypes as intersectTypes, index_parseInferSyntax as parseInferSyntax, index_useFieldPath as useFieldPath, index_useInferredTypes as useInferredTypes, index_useIsInTemplateFieldProvider as useIsInTemplateFieldProvider, index_useTemplateFieldContext as useTemplateFieldContext };
}

export { type InferredTypesContextValue as I, NestedFieldProvider as N, OPERATORS_BY_TYPE as O, Select as S, type TemplateFieldContextValue as T, useIsInTemplateFieldProvider as a, useFieldPath as b, TemplateFieldProvider as c, type TemplateFieldProviderProps as d, type NestedFieldProviderProps as e, type TemplateFieldValidationError as f, type TemplateFieldFocusContext as g, type TemplateFieldChangeEvent as h, index as i, InferredTypesContext as j, useInferredTypes as k, InferredTypesProvider as l, intersectTypes as m, type InferConfig as n, getOperatorsForType as o, parseInferSyntax as p, Input as q, type InputProps as r, type SelectProps as s, type SelectOption as t, useTemplateFieldContext as u, type SelectRenderProps as v };
