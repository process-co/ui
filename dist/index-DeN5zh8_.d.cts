import * as React from 'react';

interface SlotElementsProps {
    slotId: string;
}
declare const SlotElements: (props: SlotElementsProps) => React.JSX.Element;

interface ExportManagerProps {
    slotId: string;
}
declare const ExportManager: (props: ExportManagerProps) => React.JSX.Element;

declare const index_ExportManager: typeof ExportManager;
type index_ExportManagerProps = ExportManagerProps;
declare const index_SlotElements: typeof SlotElements;
type index_SlotElementsProps = SlotElementsProps;
declare namespace index {
  export { index_ExportManager as ExportManager, type index_ExportManagerProps as ExportManagerProps, index_SlotElements as SlotElements, type index_SlotElementsProps as SlotElementsProps };
}

export { ExportManager as E, SlotElements as S, type SlotElementsProps as a, type ExportManagerProps as b, index as i };
