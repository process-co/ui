'use strict';

var React2 = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React2__default = /*#__PURE__*/_interopDefault(React2);

// src/components/dev/DevProvider.tsx
function evaluateSimplePath(obj, path) {
  if (!path || !obj) return void 0;
  const cleanPath = path.startsWith("$.") ? path.slice(2) : path.startsWith("$") ? path.slice(1) : path;
  const parts = cleanPath.split(".");
  let current = obj.data ?? obj;
  for (const part of parts) {
    if (current == null) return void 0;
    const cleanPart = part.replace(/\[\*\]$/, "");
    if (cleanPart) current = current[cleanPart];
  }
  return current;
}
function evaluateCollectionPath(obj, path) {
  if (!path || !obj) return [];
  let cleanPath = path.startsWith("$.") ? path.slice(2) : path.startsWith("$") ? path.slice(1) : path;
  cleanPath = cleanPath.replace(/\[\*\]$/, "");
  const parts = cleanPath.split(".");
  let current = obj.data ?? obj;
  for (const part of parts) {
    if (current == null) return [];
    if (part) current = current[part];
  }
  if (Array.isArray(current)) return current;
  if (parts.length >= 2) {
    const parentPath = parts.slice(0, -1).join(".");
    let parent = obj;
    for (const part of parentPath.split(".")) {
      if (parent == null) return [];
      if (part) parent = parent[part];
    }
    if (Array.isArray(parent)) return parent;
  }
  return [];
}
function evaluateItemPath(item, fullPath, _index) {
  if (!fullPath || item == null) return void 0;
  const wildcardIndex = fullPath.indexOf("[*]");
  if (wildcardIndex === -1) return evaluateSimplePath(item, fullPath);
  const afterWildcard = fullPath.slice(wildcardIndex + 3);
  if (!afterWildcard || afterWildcard === "") return item;
  const propertyPath = afterWildcard.startsWith(".") ? afterWildcard.slice(1) : afterWildcard;
  const parts = propertyPath.split(".");
  let current = item;
  for (const part of parts) {
    if (current == null) return void 0;
    current = current[part];
  }
  return current;
}
function deriveFieldFromSlotsDefinition(slotsConfig) {
  for (const slot of slotsConfig) {
    const path = slot.path ?? slot.idPath ?? slot.labelPath;
    if (typeof path !== "string") continue;
    const afterData = path.replace(/^\$\.data\./, "").replace(/^\$\./, "");
    const firstSegment = afterData.split(".")[0];
    if (firstSegment) return firstSegment;
  }
  return void 0;
}
function deriveControlPropertyKey(def, slotsField) {
  const props = def?.props;
  if (!props) return slotsField;
  const arr = Array.isArray(props) ? props : Object.keys(props).map((k) => ({ key: k, ...props[k] }));
  const withUi = arr.find((p) => p?.ui != null);
  const matchKey = slotsField ? arr.find((p) => p?.key === slotsField) : withUi;
  return matchKey?.key ?? withUi?.key ?? slotsField;
}
function isDynamicSlot(slot) {
  if (slot.type === "dynamic") return true;
  const path = slot.path ?? slot.idPath ?? slot.labelPath ?? "";
  return typeof path === "string" && path.includes("[*]");
}
function getSlotDefinitions(slotsConfig) {
  return slotsConfig.map((slot) => ({
    ...slot,
    type: isDynamicSlot(slot) ? "dynamic" : "static"
  }));
}
function rewritePathForControlBase(path, definitionPropertyKey) {
  if (!path || !definitionPropertyKey) return path;
  const afterData = path.replace(/^\$\.data\./, "");
  if (!afterData.startsWith(definitionPropertyKey + ".")) return path;
  const rest = afterData.slice(definitionPropertyKey.length + 1);
  return rest ? "$." + rest : path;
}
function resolveSlotDefinitions(slotDefinitions, node, nodeIdForStatic, definitionPropertyKey) {
  const result = [];
  for (const slot of slotDefinitions) {
    if (slot.type === "static") {
      const idPath = slot.idPath != null ? rewritePathForControlBase(slot.idPath, definitionPropertyKey) : void 0;
      const id = idPath != null ? evaluateSimplePath(node, idPath) : slot.id != null ? String(slot.id).replace(/\{\{ID_GUID\}\}/g, nodeIdForStatic) : void 0;
      const labelPath = slot.labelPath != null ? rewritePathForControlBase(slot.labelPath, definitionPropertyKey) : void 0;
      const label = labelPath != null ? evaluateSimplePath(node, labelPath) : slot.labelPlaceholderValue ?? slot.label ?? (id ?? "");
      result.push({ id: id ?? "", label: label ?? id ?? "" });
    } else {
      const path = slot.path ?? slot.idPath;
      if (!path) continue;
      const pathRewritten = rewritePathForControlBase(path, definitionPropertyKey);
      const collection = evaluateCollectionPath(node, pathRewritten);
      if (!Array.isArray(collection)) continue;
      const idPath = rewritePathForControlBase(slot.idPath ?? path, definitionPropertyKey);
      const labelPath = rewritePathForControlBase(slot.labelPath ?? path, definitionPropertyKey);
      collection.forEach((item, index) => {
        const id = evaluateItemPath(item, idPath) ?? item?.id ?? String(index);
        const label = evaluateItemPath(item, labelPath) ?? item?.label ?? id ?? String(index);
        result.push({ id: String(id), label: String(label) });
      });
    }
  }
  return result;
}
function buildGetSlotsFromDefinition(slotDefinitions, nodeIdForStatic, options) {
  const { devPropertyKey, definitionPropertyKey } = options;
  return (fullData) => {
    const controlValue = devPropertyKey != null && fullData != null ? fullData[devPropertyKey] : fullData;
    const node = { data: controlValue ?? {} };
    return resolveSlotDefinitions(
      slotDefinitions,
      node,
      nodeIdForStatic,
      definitionPropertyKey
    );
  };
}
function deriveSlotConfigFromDefinition(def, nodeId, propertyKeyFromLoader) {
  const slotsRoot = def?.slots;
  const slotsConfig = Array.isArray(slotsRoot) ? slotsRoot : slotsRoot?.slots;
  if (!Array.isArray(slotsConfig) || slotsConfig.length === 0) return void 0;
  const field = deriveFieldFromSlotsDefinition(slotsConfig);
  const definitionPropertyKey = deriveControlPropertyKey(def, field);
  const devPropertyKey = propertyKeyFromLoader ?? definitionPropertyKey;
  const slotDefinitions = getSlotDefinitions(slotsConfig);
  const getSlots = buildGetSlotsFromDefinition(slotDefinitions, nodeId ?? "dev-node", {
    devPropertyKey,
    definitionPropertyKey
  });
  return {
    field: devPropertyKey ?? field ?? void 0,
    activeIdPath: "activeSlotId",
    getSlots
  };
}
var DevContext = React2.createContext(null);
function useDevContext() {
  return React2.useContext(DevContext);
}
function useNodeProperty(fieldName) {
  const devCtx = useDevContext();
  if (devCtx) {
    const value = devCtx.getProperty(fieldName);
    const setValue = React2.useCallback((newValue) => {
      devCtx.setProperty(fieldName, newValue);
    }, [devCtx, fieldName]);
    return [value, setValue];
  }
  console.warn(`useNodeProperty('${fieldName}') called outside of DevProvider - returning undefined`);
  const [localValue, setLocalValue] = React2.useState(void 0);
  return [localValue, setLocalValue];
}
function useInferredTypes() {
  const devCtx = useDevContext();
  if (devCtx) {
    return {
      inferredTypes: devCtx.inferredTypes,
      setInferredType: devCtx.setInferredType,
      getInferredType: devCtx.getInferredType
    };
  }
  return null;
}
function DevProvider({
  children,
  storageKey = "process-dev",
  initialData = {},
  persist = true,
  nodeId = "dev-node-1",
  propertyKey = "devField",
  slotPreset,
  slotConfig: slotConfigProp,
  elementDefinition
}) {
  const slotConfig = React2.useMemo(
    () => slotConfigProp ?? deriveSlotConfigFromDefinition(elementDefinition, nodeId, propertyKey),
    [slotConfigProp, elementDefinition, nodeId, propertyKey]
  );
  const effectiveInitialData = React2.useMemo(
    () => Object.keys(initialData).length > 0 ? initialData : elementDefinition?.initValue ?? {},
    [initialData, elementDefinition?.initValue]
  );
  const [activeSlotId, setActiveSlotIdState] = React2.useState(null);
  const [data, setData] = React2.useState(() => {
    if (persist && typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(`${storageKey}:data`);
        if (stored) {
          return { ...effectiveInitialData, ...JSON.parse(stored) };
        }
      } catch (e) {
        console.warn("DevProvider: Failed to load from localStorage", e);
      }
    }
    return effectiveInitialData;
  });
  const [inferredTypes, setInferredTypesState] = React2.useState(() => {
    if (persist && typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(`${storageKey}:inferredTypes`);
        if (stored) {
          return JSON.parse(stored);
        }
      } catch (e) {
        console.warn("DevProvider: Failed to load inferredTypes from localStorage", e);
      }
    }
    return {};
  });
  React2.useEffect(() => {
    if (!elementDefinition?.initValue || typeof elementDefinition.initValue !== "object") return;
    setData((prev) => Object.keys(prev).length === 0 ? { ...elementDefinition.initValue } : prev);
  }, [elementDefinition?.initValue]);
  React2.useEffect(() => {
    if (persist && typeof window !== "undefined") {
      try {
        localStorage.setItem(`${storageKey}:data`, JSON.stringify(data));
      } catch (e) {
        console.warn("DevProvider: Failed to save data to localStorage", e);
      }
    }
  }, [data, storageKey, persist]);
  React2.useEffect(() => {
    if (persist && typeof window !== "undefined") {
      try {
        localStorage.setItem(`${storageKey}:inferredTypes`, JSON.stringify(inferredTypes));
      } catch (e) {
        console.warn("DevProvider: Failed to save inferredTypes to localStorage", e);
      }
    }
  }, [inferredTypes, storageKey, persist]);
  const setProperty = React2.useCallback((key, value2) => {
    setData((prev) => ({ ...prev, [key]: value2 }));
  }, []);
  const setActiveSlotId = React2.useCallback((id) => {
    setActiveSlotIdState(id);
  }, []);
  const getProperty = React2.useCallback((key) => {
    return data[key];
  }, [data]);
  const setInferredType = React2.useCallback((fieldName, type) => {
    setInferredTypesState((prev) => ({ ...prev, [fieldName]: type }));
  }, []);
  const getInferredType = React2.useCallback((fieldName) => {
    return inferredTypes[fieldName];
  }, [inferredTypes]);
  const clearInferredType = React2.useCallback((fieldName) => {
    setInferredTypesState((prev) => {
      const { [fieldName]: _, ...rest } = prev;
      return rest;
    });
  }, []);
  const clearAllInferredTypes = React2.useCallback(() => {
    setInferredTypesState({});
  }, []);
  const clearAll = React2.useCallback(() => {
    setData({});
    setInferredTypesState({});
    if (persist && typeof window !== "undefined") {
      localStorage.removeItem(`${storageKey}:data`);
      localStorage.removeItem(`${storageKey}:inferredTypes`);
    }
  }, [storageKey, persist]);
  const exportData = React2.useCallback(() => {
    return JSON.stringify({ data, inferredTypes }, null, 2);
  }, [data, inferredTypes]);
  const importData = React2.useCallback((json) => {
    try {
      const parsed = JSON.parse(json);
      if (parsed.data) setData(parsed.data);
      if (parsed.inferredTypes) setInferredTypesState(parsed.inferredTypes);
    } catch (e) {
      console.error("DevProvider: Failed to import data", e);
    }
  }, []);
  const value = React2.useMemo(() => ({
    data,
    setProperty,
    getProperty,
    inferredTypes,
    setInferredType,
    getInferredType,
    clearInferredType,
    clearAllInferredTypes,
    nodeId,
    activeSlotId,
    setActiveSlotId,
    slotConfig,
    elementDefinition,
    clearAll,
    exportData,
    importData
  }), [data, setProperty, getProperty, inferredTypes, setInferredType, getInferredType, clearInferredType, clearAllInferredTypes, nodeId, activeSlotId, setActiveSlotId, slotConfig, elementDefinition, clearAll, exportData, importData]);
  return /* @__PURE__ */ React2__default.default.createElement(DevContext.Provider, { value }, children);
}
function getSlotsFromCasesData(data) {
  const list = data?.cases?.cases ?? data?.cases ?? data?.branches;
  if (!Array.isArray(list)) return [];
  return list.map((item) => ({
    id: item.id ?? String(item),
    label: item.label ?? item.id ?? String(item)
  }));
}
function DevToolbar({ className }) {
  const devCtx = useDevContext();
  const [showData, setShowData] = React2.useState(false);
  const [showDefinition, setShowDefinition] = React2.useState(false);
  const [showTypeEditor, setShowTypeEditor] = React2.useState(false);
  const [newTypeKey, setNewTypeKey] = React2.useState("");
  const [newTypeValue, setNewTypeValue] = React2.useState("");
  const slots = React2.useMemo(() => {
    if (!devCtx?.slotConfig?.getSlots) return [];
    const data = devCtx.data ?? {};
    return devCtx.slotConfig.getSlots(data);
  }, [devCtx?.slotConfig, devCtx?.data]);
  if (!devCtx) {
    return /* @__PURE__ */ React2__default.default.createElement("div", { className }, "DevToolbar: Not inside DevProvider");
  }
  const handleAddType = () => {
    if (newTypeKey.trim() && newTypeValue.trim()) {
      devCtx.setInferredType(newTypeKey.trim(), newTypeValue.trim());
      setNewTypeKey("");
      setNewTypeValue("");
    }
  };
  const handleRemoveType = (key) => {
    devCtx.clearInferredType(key);
  };
  const handleClearAllTypes = () => {
    if (confirm("Clear all inferred types?")) {
      devCtx.clearAllInferredTypes();
    }
  };
  return /* @__PURE__ */ React2__default.default.createElement("div", { className: `${className || ""} uii:border uii:rounded-lg uii:p-4 uii:bg-gray-50 dark:uii:bg-gray-900` }, /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:flex uii:items-center uii:gap-4 uii:mb-2 uii:flex-wrap" }, /* @__PURE__ */ React2__default.default.createElement("span", { className: "uii:font-semibold uii:text-sm " }, "\u{1F6E0}\uFE0F Dev Mode"), /* @__PURE__ */ React2__default.default.createElement("span", { className: "uii:text-xs uii:text-gray-500" }, "Node: ", devCtx.nodeId), /* @__PURE__ */ React2__default.default.createElement(
    "button",
    {
      onClick: () => setShowData(!showData),
      className: "uii:text-xs uii:px-2 uii:py-1 uii:bg-blue-100 dark:uii:bg-blue-900 uii:rounded hover:uii:bg-blue-200"
    },
    showData ? "Hide" : "Show",
    " Data"
  ), /* @__PURE__ */ React2__default.default.createElement(
    "button",
    {
      onClick: () => setShowDefinition(!showDefinition),
      className: "uii:text-xs uii:px-2 uii:py-1 uii:bg-amber-100 dark:uii:bg-amber-900 uii:rounded hover:uii:bg-amber-200"
    },
    showDefinition ? "Hide" : "Show",
    " Definition"
  ), /* @__PURE__ */ React2__default.default.createElement(
    "button",
    {
      onClick: () => setShowTypeEditor(!showTypeEditor),
      className: "uii:text-xs uii:px-2 uii:py-1 uii:bg-purple-100 dark:uii:bg-purple-900 uii:rounded hover:uii:bg-purple-200"
    },
    showTypeEditor ? "Hide" : "Spoof",
    " Types"
  ), /* @__PURE__ */ React2__default.default.createElement(
    "button",
    {
      onClick: () => {
        const json = devCtx.exportData();
        navigator.clipboard.writeText(json);
        alert("Data copied to clipboard!");
      },
      className: "uii:text-xs uii:px-2 uii:py-1 uii:bg-green-100 dark:uii:bg-green-900 uii:rounded hover:uii:bg-green-200"
    },
    "Export"
  ), /* @__PURE__ */ React2__default.default.createElement(
    "button",
    {
      onClick: () => {
        const json = prompt("Paste JSON data:");
        if (json) devCtx.importData(json);
      },
      className: "uii:text-xs uii:px-2 uii:py-1 uii:bg-yellow-100 dark:uii:bg-yellow-900 uii:rounded hover:uii:bg-yellow-200"
    },
    "Import"
  ), /* @__PURE__ */ React2__default.default.createElement(
    "button",
    {
      onClick: () => {
        if (confirm("Clear all data?")) devCtx.clearAll();
      },
      className: "uii:text-xs uii:px-2 uii:py-1 uii:bg-red-100 dark:uii:bg-red-900 uii:rounded hover:uii:bg-red-200"
    },
    "Clear"
  )), slots.length > 0 && /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:mt-2 uii:p-2 uii:bg-slate-50 dark:uii:bg-slate-900 uii:rounded-lg uii:border uii:border-slate-200 dark:uii:border-slate-700" }, /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:text-xs uii:font-medium uii:mb-1.5 uii:text-slate-600 dark:uii:text-slate-400" }, "Active path / case"), /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:flex uii:flex-wrap uii:gap-1" }, /* @__PURE__ */ React2__default.default.createElement(
    "button",
    {
      type: "button",
      onClick: () => devCtx.setActiveSlotId(null),
      className: `uii:text-xs uii:px-2 uii:py-1 uii:rounded uii:border ${devCtx.activeSlotId === null ? "uii:bg-slate-300 dark:uii:bg-slate-600 uii:border-slate-500" : "uii:bg-slate-100 dark:uii:bg-slate-800 uii:border-slate-300 dark:uii:border-slate-600 hover:uii:bg-slate-200"}`
    },
    "(none)"
  ), slots.map((slot) => /* @__PURE__ */ React2__default.default.createElement(
    "button",
    {
      key: slot.id,
      type: "button",
      onClick: () => devCtx.setActiveSlotId(slot.id),
      className: `uii:text-xs uii:px-2 uii:py-1 uii:rounded uii:border ${devCtx.activeSlotId === slot.id ? "uii:bg-blue-200 dark:uii:bg-blue-800 uii:border-blue-500" : "uii:bg-white dark:uii:bg-slate-800 uii:border-slate-300 dark:uii:border-slate-600 hover:uii:bg-slate-100 dark:uii:hover:bg-slate-700"}`
    },
    slot.label || slot.id
  )))), showTypeEditor && /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:mt-3 uii:p-3 uii:bg-purple-50 dark:uii:bg-purple-950 uii:rounded-lg uii:border uii:border-purple-200 dark:uii:border-purple-800" }, /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:text-xs uii:font-medium uii:mb-2 uii:text-purple-700 dark:uii:text-purple-300" }, "Spoof Inferred Types (simulate external field types)"), /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:flex uii:gap-2 uii:mb-2 uii:flex-wrap" }, /* @__PURE__ */ React2__default.default.createElement(
    "input",
    {
      type: "text",
      placeholder: "Field name (e.g., switchExpression)",
      value: newTypeKey,
      onChange: (e) => setNewTypeKey(e.target.value),
      className: "uii:text-xs uii:px-2 uii:py-1 uii:border uii:rounded uii:flex-1 uii:min-w-[150px] uii:bg-white dark:uii:bg-gray-800"
    }
  ), /* @__PURE__ */ React2__default.default.createElement(
    "input",
    {
      type: "text",
      placeholder: "Type (e.g., string | number)",
      value: newTypeValue,
      onChange: (e) => setNewTypeValue(e.target.value),
      onKeyDown: (e) => e.key === "Enter" && handleAddType(),
      className: "uii:text-xs uii:px-2 uii:py-1 uii:border uii:rounded uii:flex-1 uii:min-w-[200px] uii:bg-white dark:uii:bg-gray-800"
    }
  ), /* @__PURE__ */ React2__default.default.createElement(
    "button",
    {
      onClick: handleAddType,
      disabled: !newTypeKey.trim() || !newTypeValue.trim(),
      className: "uii:text-xs uii:px-3 uii:py-1 uii:bg-purple-500 uii:text-white uii:rounded hover:uii:bg-purple-600 disabled:uii:opacity-50 disabled:uii:cursor-not-allowed"
    },
    "Add"
  )), Object.keys(devCtx.inferredTypes).length > 0 && /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:mt-2" }, /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:flex uii:items-center uii:justify-between uii:mb-1" }, /* @__PURE__ */ React2__default.default.createElement("span", { className: "uii:text-xs uii:text-gray-500" }, "Current inferred types:"), /* @__PURE__ */ React2__default.default.createElement(
    "button",
    {
      onClick: handleClearAllTypes,
      className: "uii:text-xs uii:px-2 uii:py-0.5 uii:bg-red-100 dark:uii:bg-red-900 uii:text-red-700 dark:uii:text-red-300 uii:rounded hover:uii:bg-red-200"
    },
    "Clear All"
  )), /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:space-y-1" }, Object.entries(devCtx.inferredTypes).map(([key, value]) => value && /* @__PURE__ */ React2__default.default.createElement(
    "div",
    {
      key,
      className: "uii:flex uii:items-center uii:gap-2 uii:text-xs uii:bg-white dark:uii:bg-gray-800 uii:px-2 uii:py-1 uii:rounded"
    },
    /* @__PURE__ */ React2__default.default.createElement(
      "button",
      {
        onClick: () => {
          navigator.clipboard.writeText(key);
        },
        className: "uii:text-gray-400 hover:uii:text-purple-600 uii:text-xs",
        title: "Copy field name"
      },
      "\u{1F4CB}"
    ),
    /* @__PURE__ */ React2__default.default.createElement(
      "span",
      {
        className: "uii:font-mono uii:text-purple-600 dark:uii:text-purple-400 uii:cursor-pointer uii:truncate uii:max-w-[300px]",
        onClick: () => {
          navigator.clipboard.writeText(key);
        },
        title: key
      },
      key
    ),
    /* @__PURE__ */ React2__default.default.createElement("span", { className: "uii:text-gray-400" }, "\u2192"),
    /* @__PURE__ */ React2__default.default.createElement("span", { className: "uii:font-mono uii:text-gray-600 dark:uii:text-gray-300 uii:flex-1 uii:truncate" }, value),
    /* @__PURE__ */ React2__default.default.createElement(
      "button",
      {
        onClick: () => handleRemoveType(key),
        className: "uii:text-red-500 hover:uii:text-red-700 uii:text-xs",
        title: "Remove"
      },
      "\u2715"
    )
  ))))), showData && /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:mt-2" }, /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:text-xs uii:mb-1 uii:font-medium" }, "Data:"), /* @__PURE__ */ React2__default.default.createElement("pre", { className: "uii:text-xs uii:bg-gray-100 dark:uii:bg-gray-800 uii:p-2 uii:rounded uii:overflow-auto uii:max-h-48" }, JSON.stringify(devCtx.data, null, 2)), /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:text-xs uii:mb-1 uii:mt-2 uii:font-medium" }, "Inferred Types:"), /* @__PURE__ */ React2__default.default.createElement("pre", { className: "uii:text-xs uii:bg-gray-100 dark:uii:bg-gray-800 uii:p-2 uii:rounded uii:overflow-auto uii:max-h-24" }, JSON.stringify(devCtx.inferredTypes, null, 2))), showDefinition && /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:mt-2" }, /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:text-xs uii:mb-1 uii:font-medium" }, "Action / signal definition:"), devCtx.elementDefinition != null ? /* @__PURE__ */ React2__default.default.createElement("pre", { className: "uii:text-xs uii:bg-amber-50 dark:uii:bg-amber-950/30 uii:p-2 uii:rounded uii:overflow-auto uii:max-h-64 uii:border uii:border-amber-200 dark:uii:border-amber-800" }, JSON.stringify(devCtx.elementDefinition, null, 2)) : /* @__PURE__ */ React2__default.default.createElement("p", { className: "uii:text-xs uii:text-gray-500 uii:italic" }, "No definition passed to DevProvider.")));
}

exports.DevContext = DevContext;
exports.DevProvider = DevProvider;
exports.DevToolbar = DevToolbar;
exports.getSlotsFromCasesData = getSlotsFromCasesData;
exports.useDevContext = useDevContext;
exports.useInferredTypes = useInferredTypes;
exports.useNodeProperty = useNodeProperty;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map