import * as React$1 from 'react';

interface SlotElementsProps {
    slotId: string;
}
declare const SlotElements: (props: SlotElementsProps) => React$1.JSX.Element;

interface ExportManagerProps {
    /** Slot to manage export for (e.g. case id). Required so 3rd party controls can render one per slot. */
    slotId: string;
    /** When 'button', only a "Manage exports" button is shown; click opens the host's export editor pane. When 'full', the full form is shown in the pane. Default 'button'. Mirrors packages/ui. */
    variant?: 'button' | 'full';
    /** When true (e.g. opened in the expanding panel), do not show the collapse/expand row. Mirrors packages/ui. */
    embeddedInPanel?: boolean;
    /** Optional. Slot type label (e.g. "case", "path"). When set on the button, passed with openExportEditor for pane header. Mirrors packages/ui. */
    slotLabel?: string;
    /** Optional. Name for this slot instance (e.g. "Case 1"). string | ReactNode for formatting. 3rd party composes it to match their UI; passed with openExportEditor for pane header. Mirrors packages/ui. */
    slotName?: string | React.ReactNode;
    /** Optional. Placeholder for the export code editor. string | ReactNode for formatting. When set on the button, passed with openExportEditor so the pane has it in context. Mirrors packages/ui. */
    exportPlaceholder?: string | React.ReactNode;
}
/** Stub implementation for dev/Storybook. In the host, the real ExportManager from packages/ui is used. API must match packages/ui so 3rd-party code works in both environments. */
declare const ExportManager: ({ slotId, variant, slotLabel: slotLabelProp, slotName: slotNameProp, exportPlaceholder: exportPlaceholderProp, }: ExportManagerProps) => React$1.JSX.Element;

interface SlotEnableProps {
    slotId: string;
}
declare const SlotEnable: (props: SlotEnableProps) => React$1.JSX.Element;

interface SlotDeleteProps {
    slotId: string;
    onDelete: (slotId: string) => void;
}
declare const SlotDelete: (props: SlotDeleteProps) => React$1.JSX.Element;

interface SlotDragHandleProps {
    slotId: string;
}
declare const SlotDragHandle: (props: SlotDragHandleProps) => React$1.JSX.Element;

/**
 * Hook to subscribe to the slot enabled and active states by slot id.
 *
 * When used within a DevProvider, uses the dev context's slot enabled state.
 * When used within a production provider, uses the real store.
 * Returns undefined when not inside any provider.
 */
declare function useSlotContext(slotId: string): {
    active: boolean;
    enabled: boolean;
} | undefined;

declare const index_ExportManager: typeof ExportManager;
type index_ExportManagerProps = ExportManagerProps;
declare const index_SlotDelete: typeof SlotDelete;
type index_SlotDeleteProps = SlotDeleteProps;
declare const index_SlotDragHandle: typeof SlotDragHandle;
type index_SlotDragHandleProps = SlotDragHandleProps;
declare const index_SlotElements: typeof SlotElements;
type index_SlotElementsProps = SlotElementsProps;
declare const index_SlotEnable: typeof SlotEnable;
type index_SlotEnableProps = SlotEnableProps;
declare const index_useSlotContext: typeof useSlotContext;
declare namespace index {
  export { index_ExportManager as ExportManager, type index_ExportManagerProps as ExportManagerProps, index_SlotDelete as SlotDelete, type index_SlotDeleteProps as SlotDeleteProps, index_SlotDragHandle as SlotDragHandle, type index_SlotDragHandleProps as SlotDragHandleProps, index_SlotElements as SlotElements, type index_SlotElementsProps as SlotElementsProps, index_SlotEnable as SlotEnable, type index_SlotEnableProps as SlotEnableProps, index_useSlotContext as useSlotContext };
}

export { ExportManager as E, SlotElements as S, type SlotElementsProps as a, type ExportManagerProps as b, SlotEnable as c, type SlotEnableProps as d, SlotDelete as e, type SlotDeleteProps as f, SlotDragHandle as g, type SlotDragHandleProps as h, index as i, useSlotContext as u };
