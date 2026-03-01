import React__default, { PropsWithChildren } from 'react';

/**
 * Optional config for slot/case awareness in dev.
 * Each control type can have unique data shape; getSlots interprets the field value and returns slot options.
 */
interface DevSlotConfig {
    /** Property key (field) whose value holds the slot data (e.g. 'switchValue' or 'cases'). When set, getSlots and activeIdPath are applied to data[field]. */
    field?: string;
    /** Path (relative to the field value when field is set) where we store the active slot id in dev. This is mocked in dev only; we do not use the element definition's slots.activeSlotId (e.g. $.results.pathId). */
    activeIdPath: string;
    /**
     * Given the field value (or full data when field is unset), return the list of slots for the Active path/case selector.
     * Enables any control-specific shape (e.g. value.cases.cases, value.branches, etc.).
     */
    getSlots: (fieldValueOrData: Record<string, any>) => {
        id: string;
        label: string;
    }[];
}
/** Preset for slot/case awareness (legacy); prefer deriving from elementDefinition.slots. */
type SlotPreset = 'switch' | 'cases' | 'branches';
/**
 * Action/signal definition shape (defineAction): optional slots, initValue, props.
 * Used to derive slotConfig and optionally initialData.
 */
interface ElementDefinition {
    slots?: {
        slots?: any[];
        activeSlotId?: string;
        [k: string]: any;
    };
    initValue?: Record<string, any>;
    props?: Record<string, any>;
    [k: string]: any;
}
/**
 * Configuration for the DevProvider
 */
interface DevProviderConfig {
    /** Unique key for localStorage persistence (defaults to 'process-dev') */
    storageKey?: string;
    /** Initial data to populate the store */
    initialData?: Record<string, any>;
    /** Whether to persist to localStorage (default: true) */
    persist?: boolean;
    /** Mock node ID (default: 'dev-node-1') */
    nodeId?: string;
    /** Key in dev data that holds the control value (e.g. devField). In the definition, the control is the prop with the UI (e.g. cases with ui.switch); in dev that value lives at data[propertyKey], so devField = $.data.cases. Default: 'devField' */
    propertyKey?: string;
    /** When set, provider builds slotConfig internally; loader does not need to pass slotConfig. */
    slotPreset?: SlotPreset;
    /** Optional. Full slot config; overrides slotPreset and elementDefinition when provided. */
    slotConfig?: DevSlotConfig;
    /**
     * Action or signal definition (defineAction result). Provider derives slotConfig from slots + initValue
     * and uses initValue as initialData when initialData is not provided.
     */
    elementDefinition?: ElementDefinition | null;
}
/**
 * Context value for development/testing
 */
interface DevContextValue {
    data: Record<string, any>;
    setProperty: (key: string, value: any) => void;
    getProperty: <T = any>(key: string) => T | undefined;
    inferredTypes: Record<string, string>;
    setInferredType: (fieldName: string, type: string) => void;
    getInferredType: (fieldName: string) => string | undefined;
    /** Remove an inferred type by field name */
    clearInferredType: (fieldName: string) => void;
    /** Remove all inferred types */
    clearAllInferredTypes: () => void;
    nodeId: string;
    /** Current active slot/case id (for elements with slots, e.g. Switch). Null when none selected. Provider state only; not stored in data. */
    activeSlotId: string | null;
    /** Set the active slot/case id. Stored in provider state only; not written to data. */
    setActiveSlotId: (id: string | null) => void;
    /** Slot config when provided to DevProvider (so toolbar can call getSlots(data)). */
    slotConfig: DevSlotConfig | undefined;
    /** Action/signal definition passed to DevProvider (for debugging). */
    elementDefinition: ElementDefinition | null | undefined;
    clearAll: () => void;
    exportData: () => string;
    importData: (json: string) => void;
}
declare const DevContext: React__default.Context<DevContextValue | null>;
/**
 * Hook to access the dev context for property management
 */
declare function useDevContext(): DevContextValue | null;
/**
 * Hook that mimics useNodeProperty from the real system
 * Works in both dev mode (with DevProvider) and production (with NodePropertyProvider)
 */
declare function useNodeProperty<T = any>(fieldName: string): [T | undefined, (value: T) => void];
/**
 * Hook that mimics useInferredTypes from the real system
 */
declare function useInferredTypes(): {
    inferredTypes: Record<string, string>;
    setInferredType: (fieldName: string, type: string) => void;
    getInferredType: (fieldName: string) => string | undefined;
} | null;
/**
 * DevProvider - Development environment for testing custom UI components
 *
 * Features:
 * - Persists data to localStorage
 * - Provides mock implementations of useNodeProperty and useInferredTypes
 * - Supports import/export of data for testing scenarios
 *
 * Usage:
 * ```tsx
 * import { DevProvider } from '@process.co/ui/dev';
 *
 * function App() {
 *   return (
 *     <DevProvider
 *       storageKey="my-component-dev"
 *       initialData={{ switchValue: { cases: [] } }}
 *     >
 *       <MyCustomComponent fieldName="switchValue" />
 *     </DevProvider>
 *   );
 * }
 * ```
 */
declare function DevProvider({ children, storageKey, initialData, persist, nodeId, propertyKey, slotPreset, slotConfig: slotConfigProp, elementDefinition, }: PropsWithChildren<DevProviderConfig>): React__default.JSX.Element;

/**
 * Helper: get slots from data when the shape is { cases: { cases: [...] } } or similar.
 * Use this inside slotConfig.getSlots for Switch-style data, or implement your own for other shapes.
 */
declare function getSlotsFromCasesData(data: Record<string, any>): {
    id: string;
    label: string;
}[];
/**
 * DevToolbar - Optional toolbar for development
 * Shows current data state and provides controls for import/export/clear
 * Also allows spoofing inferred types and selecting active path/case when slotConfig.getSlots is provided
 */
declare function DevToolbar({ className }: {
    className?: string;
}): React__default.JSX.Element;

export { DevContext, type DevContextValue, DevProvider, type DevProviderConfig, type DevSlotConfig, DevToolbar, type ElementDefinition, type SlotPreset, getSlotsFromCasesData, useDevContext, useInferredTypes, useNodeProperty };
