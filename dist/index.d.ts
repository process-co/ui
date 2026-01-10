import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
export { i as fields } from './index-C1wa8N9L.js';

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): React.JSX.Element;

/**
 * Template Editor Mock Exports
 *
 * This module provides mock versions of the template editor's type inference system
 * for use when building custom UIs. The real implementations live in @repo/ui/template-editor.
 *
 * ## Type Propagation System
 *
 * The `$infer<...>` syntax allows fields to share inferred types:
 *
 * - **Publisher**: `expectedType="$infer<string | number | boolean>"` - infers type and broadcasts it
 * - **Subscriber**: `expectedType="$infer<[fieldName]>"` - receives type from another field
 *
 * ## Usage in Custom UIs
 *
 * ```tsx
 * import { useInferredTypes } from '@process-co/ui/template-editor';
 *
 * function MyOperatorSelect() {
 *   const inferredTypesCtx = useInferredTypes();
 *   const switchType = inferredTypesCtx?.getInferredType('switchExpression') || 'string';
 *
 *   // Filter operators based on the switch expression's type
 *   const operators = operatorsByType[switchType] || defaultOperators;
 *
 *   return (
 *     <Select>
 *       {operators.map(op => <SelectItem key={op.value} value={op.value}>{op.label}</SelectItem>)}
 *     </Select>
 *   );
 * }
 * ```
 */
/**
 * Context value for sharing inferred types between fields within an element.
 * This enables type propagation via the $infer<...> syntax.
 *
 * When not inside a provider, the hook returns null and fields work in standalone mode.
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
 * Context for inferred types. This is typically provided by PropertiesRender.tsx
 * in the real implementation. In custom UIs, you can either:
 * 1. Use the context from the parent (if wrapped by real PropertiesRender)
 * 2. Create your own provider if building a standalone editor
 */
declare const InferredTypesContext: React.Context<InferredTypesContextValue | null>;
/**
 * Hook to access the inferred types context.
 * Returns null when not inside an InferredTypesProvider.
 *
 * @example
 * ```tsx
 * const inferredTypesCtx = useInferredTypes();
 *
 * // Get the type from another field (e.g., for filtering operators)
 * const switchType = inferredTypesCtx?.getInferredType('switchExpression') || 'string';
 *
 * // Filter available operators based on type
 * const operators = switchType === 'number'
 *   ? ['=', '!=', '<', '>', '<=', '>=']
 *   : switchType === 'string'
 *     ? ['=', '!=', 'contains', 'startsWith', 'endsWith']
 *     : ['=', '!='];
 * ```
 */
declare function useInferredTypes(): InferredTypesContextValue | null;
/**
 * Parsed configuration from $infer<...> expectedType syntax.
 *
 * Two modes:
 * - **publish**: Field infers its type and broadcasts it to other fields
 *   - Syntax: `$infer<string | number | boolean>`
 *   - The field validates that its inferred type is one of the allowed types
 *
 * - **subscribe**: Field receives its expected type from another field
 *   - Syntax: `$infer<[fieldName]>`
 *   - The field uses the inferred type from `fieldName` as its expectedType
 */
interface InferConfig {
    /** 'publish' = broadcasts type, 'subscribe' = receives type from another field */
    mode: 'publish' | 'subscribe';
    /** For subscribe mode: the field name to get the type from */
    fieldName?: string;
    /** For publish mode: the allowed types (e.g., ['string', 'number', 'boolean']) */
    allowedTypes?: string[];
}
/**
 * Parse the $infer<...> syntax from an expectedType string.
 *
 * @param expectedType - The expectedType prop value (e.g., "$infer<string | number>" or "$infer<[switchExpression]>")
 * @returns Parsed InferConfig or null if not using $infer syntax
 *
 * @example
 * ```typescript
 * // Publish mode - broadcasts inferred type
 * parseInferSyntax('$infer<string | number | boolean>')
 * // Returns: { mode: 'publish', allowedTypes: ['string', 'number', 'boolean'] }
 *
 * // Subscribe mode - receives type from another field
 * parseInferSyntax('$infer<[switchExpression]>')
 * // Returns: { mode: 'subscribe', fieldName: 'switchExpression' }
 *
 * // Not using $infer syntax
 * parseInferSyntax('string')
 * // Returns: null
 * ```
 */
declare function parseInferSyntax(expectedType: string): InferConfig | null;
/**
 * Standard operators grouped by compatible types.
 * Use these with `getInferredType` to filter operator dropdowns.
 *
 * @example
 * ```tsx
 * const inferredTypesCtx = useInferredTypes();
 * const switchType = inferredTypesCtx?.getInferredType('switchExpression') || 'string';
 * const operators = OPERATORS_BY_TYPE[switchType] || OPERATORS_BY_TYPE.any;
 * ```
 */
declare const OPERATORS_BY_TYPE: Record<string, Array<{
    value: string;
    label: string;
}>>;
/**
 * Get the appropriate operators for a given type.
 * Falls back to 'any' operators if the type is not recognized.
 */
declare function getOperatorsForType(type: string): Array<{
    value: string;
    label: string;
}>;

export { Button, type InferConfig, InferredTypesContext, type InferredTypesContextValue, OPERATORS_BY_TYPE, buttonVariants, getOperatorsForType, parseInferSyntax, useInferredTypes };
