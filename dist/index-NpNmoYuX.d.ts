import * as React from 'react';

interface SlotElementsProps {
    slotId: string;
}
declare const SlotElements: (props: SlotElementsProps) => React.JSX.Element;

interface ExportManagerProps {
    slotId: string;
}
declare const ExportManager: (props: ExportManagerProps) => React.JSX.Element;

interface SlotEnableProps {
    slotId: string;
}
declare const SlotEnable: (props: SlotEnableProps) => React.JSX.Element;

interface SlotDeleteProps {
    slotId: string;
    onDelete: () => void;
}
declare const SlotDelete: (props: SlotDeleteProps) => React.JSX.Element;

interface SlotDragHandleProps {
    slotId: string;
}
declare const SlotDragHandle: (props: SlotDragHandleProps) => React.JSX.Element;

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
declare namespace index {
  export { index_ExportManager as ExportManager, type index_ExportManagerProps as ExportManagerProps, index_SlotDelete as SlotDelete, type index_SlotDeleteProps as SlotDeleteProps, index_SlotDragHandle as SlotDragHandle, type index_SlotDragHandleProps as SlotDragHandleProps, index_SlotElements as SlotElements, type index_SlotElementsProps as SlotElementsProps, index_SlotEnable as SlotEnable, type index_SlotEnableProps as SlotEnableProps };
}

export { ExportManager as E, SlotElements as S, type SlotElementsProps as a, type ExportManagerProps as b, SlotEnable as c, type SlotEnableProps as d, SlotDelete as e, type SlotDeleteProps as f, SlotDragHandle as g, type SlotDragHandleProps as h, index as i };
