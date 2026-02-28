import * as React from 'react';

declare const SlotElements: () => React.JSX.Element;

declare const ExportManager: () => React.JSX.Element;

declare const index_ExportManager: typeof ExportManager;
declare const index_SlotElements: typeof SlotElements;
declare namespace index {
  export { index_ExportManager as ExportManager, index_SlotElements as SlotElements };
}

export { ExportManager as E, SlotElements as S, index as i };
