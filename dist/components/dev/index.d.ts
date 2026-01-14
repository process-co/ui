import React__default, { PropsWithChildren } from 'react';

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
declare function DevProvider({ children, storageKey, initialData, persist, nodeId, }: PropsWithChildren<DevProviderConfig>): React__default.JSX.Element;

/**
 * DevToolbar - Optional toolbar for development
 * Shows current data state and provides controls for import/export/clear
 * Also allows spoofing inferred types for testing components that depend on external field types
 */
declare function DevToolbar({ className }: {
    className?: string;
}): React__default.JSX.Element;

export { DevContext, type DevContextValue, DevProvider, type DevProviderConfig, DevToolbar, useDevContext, useInferredTypes, useNodeProperty };
