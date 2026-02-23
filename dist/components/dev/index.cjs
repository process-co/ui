'use strict';

var React2 = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React2__default = /*#__PURE__*/_interopDefault(React2);

// src/components/dev/DevProvider.tsx
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
  nodeId = "dev-node-1"
}) {
  const [data, setData] = React2.useState(() => {
    if (persist && typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(`${storageKey}:data`);
        if (stored) {
          return { ...initialData, ...JSON.parse(stored) };
        }
      } catch (e) {
        console.warn("DevProvider: Failed to load from localStorage", e);
      }
    }
    return initialData;
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
    clearAll,
    exportData,
    importData
  }), [data, setProperty, getProperty, inferredTypes, setInferredType, getInferredType, clearInferredType, clearAllInferredTypes, nodeId, clearAll, exportData, importData]);
  return /* @__PURE__ */ React2__default.default.createElement(DevContext.Provider, { value }, children);
}
function DevToolbar({ className }) {
  const devCtx = useDevContext();
  const [showData, setShowData] = React2.useState(false);
  const [showTypeEditor, setShowTypeEditor] = React2.useState(false);
  const [newTypeKey, setNewTypeKey] = React2.useState("");
  const [newTypeValue, setNewTypeValue] = React2.useState("");
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
  return /* @__PURE__ */ React2__default.default.createElement("div", { className: `${className || ""} uii:border uii:rounded-lg uii:p-4 uii:bg-gray-50 dark:uii:bg-gray-900` }, /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:flex uii:items-center uii:gap-4 uii:mb-2 uii:flex-wrap" }, /* @__PURE__ */ React2__default.default.createElement("span", { className: "uii:font-semibold uii:text-sm" }, "\u{1F6E0}\uFE0F Dev Mode"), /* @__PURE__ */ React2__default.default.createElement("span", { className: "uii:text-xs uii:text-gray-500" }, "Node: ", devCtx.nodeId), /* @__PURE__ */ React2__default.default.createElement(
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
  )), showTypeEditor && /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:mt-3 uii:p-3 uii:bg-purple-50 dark:uii:bg-purple-950 uii:rounded-lg uii:border uii:border-purple-200 dark:uii:border-purple-800" }, /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:text-xs uii:font-medium uii:mb-2 uii:text-purple-700 dark:uii:text-purple-300" }, "Spoof Inferred Types (simulate external field types)"), /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:flex uii:gap-2 uii:mb-2 uii:flex-wrap" }, /* @__PURE__ */ React2__default.default.createElement(
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
  ))))), showData && /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:mt-2" }, /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:text-xs uii:mb-1 uii:font-medium" }, "Data:"), /* @__PURE__ */ React2__default.default.createElement("pre", { className: "uii:text-xs uii:bg-gray-100 dark:uii:bg-gray-800 uii:p-2 uii:rounded uii:overflow-auto uii:max-h-48" }, JSON.stringify(devCtx.data, null, 2)), /* @__PURE__ */ React2__default.default.createElement("div", { className: "uii:text-xs uii:mb-1 uii:mt-2 uii:font-medium" }, "Inferred Types:"), /* @__PURE__ */ React2__default.default.createElement("pre", { className: "uii:text-xs uii:bg-gray-100 dark:uii:bg-gray-800 uii:p-2 uii:rounded uii:overflow-auto uii:max-h-24" }, JSON.stringify(devCtx.inferredTypes, null, 2))));
}

exports.DevContext = DevContext;
exports.DevProvider = DevProvider;
exports.DevToolbar = DevToolbar;
exports.useDevContext = useDevContext;
exports.useInferredTypes = useInferredTypes;
exports.useNodeProperty = useNodeProperty;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map