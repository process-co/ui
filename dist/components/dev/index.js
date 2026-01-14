function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_primitive(input, hint) {
    if (_type_of(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_type_of(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _to_property_key(arg) {
    var key = _to_primitive(arg, "string");
    return _type_of(key) === "symbol" ? key : String(key);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import React2, { createContext, useContext, useCallback, useState, useEffect, useMemo } from 'react';
// src/components/dev/DevProvider.tsx
var DevContext = createContext(null);
function useDevContext() {
    return useContext(DevContext);
}
function useNodeProperty(fieldName) {
    var devCtx = useDevContext();
    if (devCtx) {
        var value = devCtx.getProperty(fieldName);
        var setValue = useCallback(function(newValue) {
            devCtx.setProperty(fieldName, newValue);
        }, [
            devCtx,
            fieldName
        ]);
        return [
            value,
            setValue
        ];
    }
    console.warn("useNodeProperty('".concat(fieldName, "') called outside of DevProvider - returning undefined"));
    var _useState = _sliced_to_array(useState(void 0), 2), localValue = _useState[0], setLocalValue = _useState[1];
    return [
        localValue,
        setLocalValue
    ];
}
function useInferredTypes() {
    var devCtx = useDevContext();
    if (devCtx) {
        return {
            inferredTypes: devCtx.inferredTypes,
            setInferredType: devCtx.setInferredType,
            getInferredType: devCtx.getInferredType
        };
    }
    return null;
}
function DevProvider(param) {
    var children = param.children, _param_storageKey = param.storageKey, storageKey = _param_storageKey === void 0 ? "process-dev" : _param_storageKey, _param_initialData = param.initialData, initialData = _param_initialData === void 0 ? {} : _param_initialData, _param_persist = param.persist, persist = _param_persist === void 0 ? true : _param_persist, _param_nodeId = param.nodeId, nodeId = _param_nodeId === void 0 ? "dev-node-1" : _param_nodeId;
    var _useState = _sliced_to_array(useState(function() {
        if (persist && typeof window !== "undefined") {
            try {
                var stored = localStorage.getItem("".concat(storageKey, ":data"));
                if (stored) {
                    return _object_spread({}, initialData, JSON.parse(stored));
                }
            } catch (e) {
                console.warn("DevProvider: Failed to load from localStorage", e);
            }
        }
        return initialData;
    }), 2), data = _useState[0], setData = _useState[1];
    var _useState1 = _sliced_to_array(useState(function() {
        if (persist && typeof window !== "undefined") {
            try {
                var stored = localStorage.getItem("".concat(storageKey, ":inferredTypes"));
                if (stored) {
                    return JSON.parse(stored);
                }
            } catch (e) {
                console.warn("DevProvider: Failed to load inferredTypes from localStorage", e);
            }
        }
        return {};
    }), 2), inferredTypes = _useState1[0], setInferredTypesState = _useState1[1];
    useEffect(function() {
        if (persist && typeof window !== "undefined") {
            try {
                localStorage.setItem("".concat(storageKey, ":data"), JSON.stringify(data));
            } catch (e) {
                console.warn("DevProvider: Failed to save data to localStorage", e);
            }
        }
    }, [
        data,
        storageKey,
        persist
    ]);
    useEffect(function() {
        if (persist && typeof window !== "undefined") {
            try {
                localStorage.setItem("".concat(storageKey, ":inferredTypes"), JSON.stringify(inferredTypes));
            } catch (e) {
                console.warn("DevProvider: Failed to save inferredTypes to localStorage", e);
            }
        }
    }, [
        inferredTypes,
        storageKey,
        persist
    ]);
    var setProperty = useCallback(function(key, value2) {
        setData(function(prev) {
            return _object_spread_props(_object_spread({}, prev), _define_property({}, key, value2));
        });
    }, []);
    var getProperty = useCallback(function(key) {
        return data[key];
    }, [
        data
    ]);
    var setInferredType = useCallback(function(fieldName, type) {
        setInferredTypesState(function(prev) {
            return _object_spread_props(_object_spread({}, prev), _define_property({}, fieldName, type));
        });
    }, []);
    var getInferredType = useCallback(function(fieldName) {
        return inferredTypes[fieldName];
    }, [
        inferredTypes
    ]);
    var clearInferredType = useCallback(function(fieldName) {
        setInferredTypesState(function(prev) {
            var _ = prev[fieldName], rest = _object_without_properties(prev, [
                fieldName
            ].map(_to_property_key));
            return rest;
        });
    }, []);
    var clearAllInferredTypes = useCallback(function() {
        setInferredTypesState({});
    }, []);
    var clearAll = useCallback(function() {
        setData({});
        setInferredTypesState({});
        if (persist && typeof window !== "undefined") {
            localStorage.removeItem("".concat(storageKey, ":data"));
            localStorage.removeItem("".concat(storageKey, ":inferredTypes"));
        }
    }, [
        storageKey,
        persist
    ]);
    var exportData = useCallback(function() {
        return JSON.stringify({
            data: data,
            inferredTypes: inferredTypes
        }, null, 2);
    }, [
        data,
        inferredTypes
    ]);
    var importData = useCallback(function(json) {
        try {
            var parsed = JSON.parse(json);
            if (parsed.data) setData(parsed.data);
            if (parsed.inferredTypes) setInferredTypesState(parsed.inferredTypes);
        } catch (e) {
            console.error("DevProvider: Failed to import data", e);
        }
    }, []);
    var value = useMemo(function() {
        return {
            data: data,
            setProperty: setProperty,
            getProperty: getProperty,
            inferredTypes: inferredTypes,
            setInferredType: setInferredType,
            getInferredType: getInferredType,
            clearInferredType: clearInferredType,
            clearAllInferredTypes: clearAllInferredTypes,
            nodeId: nodeId,
            clearAll: clearAll,
            exportData: exportData,
            importData: importData
        };
    }, [
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
    ]);
    return /* @__PURE__ */ React2.createElement(DevContext.Provider, {
        value: value
    }, children);
}
function DevToolbar(param) {
    var className = param.className;
    var devCtx = useDevContext();
    var _useState = _sliced_to_array(useState(false), 2), showData = _useState[0], setShowData = _useState[1];
    var _useState1 = _sliced_to_array(useState(false), 2), showTypeEditor = _useState1[0], setShowTypeEditor = _useState1[1];
    var _useState2 = _sliced_to_array(useState(""), 2), newTypeKey = _useState2[0], setNewTypeKey = _useState2[1];
    var _useState3 = _sliced_to_array(useState(""), 2), newTypeValue = _useState3[0], setNewTypeValue = _useState3[1];
    if (!devCtx) {
        return /* @__PURE__ */ React2.createElement("div", {
            className: className
        }, "DevToolbar: Not inside DevProvider");
    }
    var handleAddType = function() {
        if (newTypeKey.trim() && newTypeValue.trim()) {
            devCtx.setInferredType(newTypeKey.trim(), newTypeValue.trim());
            setNewTypeKey("");
            setNewTypeValue("");
        }
    };
    var handleRemoveType = function(key) {
        devCtx.clearInferredType(key);
    };
    var handleClearAllTypes = function() {
        if (confirm("Clear all inferred types?")) {
            devCtx.clearAllInferredTypes();
        }
    };
    return /* @__PURE__ */ React2.createElement("div", {
        className: "".concat(className || "", " uii:border uii:rounded-lg uii:p-4 uii:bg-gray-50 dark:uii:bg-gray-900")
    }, /* @__PURE__ */ React2.createElement("div", {
        className: "uii:flex uii:items-center uii:gap-4 uii:mb-2 uii:flex-wrap"
    }, /* @__PURE__ */ React2.createElement("span", {
        className: "uii:font-semibold uii:text-sm"
    }, "\uD83D\uDEE0️ Dev Mode"), /* @__PURE__ */ React2.createElement("span", {
        className: "uii:text-xs uii:text-gray-500"
    }, "Node: ", devCtx.nodeId), /* @__PURE__ */ React2.createElement("button", {
        onClick: function() {
            return setShowData(!showData);
        },
        className: "uii:text-xs uii:px-2 uii:py-1 uii:bg-blue-100 dark:uii:bg-blue-900 uii:rounded hover:uii:bg-blue-200"
    }, showData ? "Hide" : "Show", " Data"), /* @__PURE__ */ React2.createElement("button", {
        onClick: function() {
            return setShowTypeEditor(!showTypeEditor);
        },
        className: "uii:text-xs uii:px-2 uii:py-1 uii:bg-purple-100 dark:uii:bg-purple-900 uii:rounded hover:uii:bg-purple-200"
    }, showTypeEditor ? "Hide" : "Spoof", " Types"), /* @__PURE__ */ React2.createElement("button", {
        onClick: function() {
            var json = devCtx.exportData();
            navigator.clipboard.writeText(json);
            alert("Data copied to clipboard!");
        },
        className: "uii:text-xs uii:px-2 uii:py-1 uii:bg-green-100 dark:uii:bg-green-900 uii:rounded hover:uii:bg-green-200"
    }, "Export"), /* @__PURE__ */ React2.createElement("button", {
        onClick: function() {
            var json = prompt("Paste JSON data:");
            if (json) devCtx.importData(json);
        },
        className: "uii:text-xs uii:px-2 uii:py-1 uii:bg-yellow-100 dark:uii:bg-yellow-900 uii:rounded hover:uii:bg-yellow-200"
    }, "Import"), /* @__PURE__ */ React2.createElement("button", {
        onClick: function() {
            if (confirm("Clear all data?")) devCtx.clearAll();
        },
        className: "uii:text-xs uii:px-2 uii:py-1 uii:bg-red-100 dark:uii:bg-red-900 uii:rounded hover:uii:bg-red-200"
    }, "Clear")), showTypeEditor && /* @__PURE__ */ React2.createElement("div", {
        className: "uii:mt-3 uii:p-3 uii:bg-purple-50 dark:uii:bg-purple-950 uii:rounded-lg uii:border uii:border-purple-200 dark:uii:border-purple-800"
    }, /* @__PURE__ */ React2.createElement("div", {
        className: "uii:text-xs uii:font-medium uii:mb-2 uii:text-purple-700 dark:uii:text-purple-300"
    }, "Spoof Inferred Types (simulate external field types)"), /* @__PURE__ */ React2.createElement("div", {
        className: "uii:flex uii:gap-2 uii:mb-2 uii:flex-wrap"
    }, /* @__PURE__ */ React2.createElement("input", {
        type: "text",
        placeholder: "Field name (e.g., switchExpression)",
        value: newTypeKey,
        onChange: function(e) {
            return setNewTypeKey(e.target.value);
        },
        className: "uii:text-xs uii:px-2 uii:py-1 uii:border uii:rounded uii:flex-1 uii:min-w-[150px] uii:bg-white dark:uii:bg-gray-800"
    }), /* @__PURE__ */ React2.createElement("input", {
        type: "text",
        placeholder: "Type (e.g., string | number)",
        value: newTypeValue,
        onChange: function(e) {
            return setNewTypeValue(e.target.value);
        },
        onKeyDown: function(e) {
            return e.key === "Enter" && handleAddType();
        },
        className: "uii:text-xs uii:px-2 uii:py-1 uii:border uii:rounded uii:flex-1 uii:min-w-[200px] uii:bg-white dark:uii:bg-gray-800"
    }), /* @__PURE__ */ React2.createElement("button", {
        onClick: handleAddType,
        disabled: !newTypeKey.trim() || !newTypeValue.trim(),
        className: "uii:text-xs uii:px-3 uii:py-1 uii:bg-purple-500 uii:text-white uii:rounded hover:uii:bg-purple-600 disabled:uii:opacity-50 disabled:uii:cursor-not-allowed"
    }, "Add")), Object.keys(devCtx.inferredTypes).length > 0 && /* @__PURE__ */ React2.createElement("div", {
        className: "uii:mt-2"
    }, /* @__PURE__ */ React2.createElement("div", {
        className: "uii:flex uii:items-center uii:justify-between uii:mb-1"
    }, /* @__PURE__ */ React2.createElement("span", {
        className: "uii:text-xs uii:text-gray-500"
    }, "Current inferred types:"), /* @__PURE__ */ React2.createElement("button", {
        onClick: handleClearAllTypes,
        className: "uii:text-xs uii:px-2 uii:py-0.5 uii:bg-red-100 dark:uii:bg-red-900 uii:text-red-700 dark:uii:text-red-300 uii:rounded hover:uii:bg-red-200"
    }, "Clear All")), /* @__PURE__ */ React2.createElement("div", {
        className: "uii:space-y-1"
    }, Object.entries(devCtx.inferredTypes).map(function(param) {
        var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
        return value && /* @__PURE__ */ React2.createElement("div", {
            key: key,
            className: "uii:flex uii:items-center uii:gap-2 uii:text-xs uii:bg-white dark:uii:bg-gray-800 uii:px-2 uii:py-1 uii:rounded"
        }, /* @__PURE__ */ React2.createElement("button", {
            onClick: function() {
                navigator.clipboard.writeText(key);
            },
            className: "uii:text-gray-400 hover:uii:text-purple-600 uii:text-xs",
            title: "Copy field name"
        }, "\uD83D\uDCCB"), /* @__PURE__ */ React2.createElement("span", {
            className: "uii:font-mono uii:text-purple-600 dark:uii:text-purple-400 uii:cursor-pointer uii:truncate uii:max-w-[300px]",
            onClick: function() {
                navigator.clipboard.writeText(key);
            },
            title: key
        }, key), /* @__PURE__ */ React2.createElement("span", {
            className: "uii:text-gray-400"
        }, "\u2192"), /* @__PURE__ */ React2.createElement("span", {
            className: "uii:font-mono uii:text-gray-600 dark:uii:text-gray-300 uii:flex-1 uii:truncate"
        }, value), /* @__PURE__ */ React2.createElement("button", {
            onClick: function() {
                return handleRemoveType(key);
            },
            className: "uii:text-red-500 hover:uii:text-red-700 uii:text-xs",
            title: "Remove"
        }, "\u2715"));
    })))), showData && /* @__PURE__ */ React2.createElement("div", {
        className: "uii:mt-2"
    }, /* @__PURE__ */ React2.createElement("div", {
        className: "uii:text-xs uii:mb-1 uii:font-medium"
    }, "Data:"), /* @__PURE__ */ React2.createElement("pre", {
        className: "uii:text-xs uii:bg-gray-100 dark:uii:bg-gray-800 uii:p-2 uii:rounded uii:overflow-auto uii:max-h-48"
    }, JSON.stringify(devCtx.data, null, 2)), /* @__PURE__ */ React2.createElement("div", {
        className: "uii:text-xs uii:mb-1 uii:mt-2 uii:font-medium"
    }, "Inferred Types:"), /* @__PURE__ */ React2.createElement("pre", {
        className: "uii:text-xs uii:bg-gray-100 dark:uii:bg-gray-800 uii:p-2 uii:rounded uii:overflow-auto uii:max-h-24"
    }, JSON.stringify(devCtx.inferredTypes, null, 2))));
}
export { DevContext, DevProvider, DevToolbar, useDevContext, useInferredTypes, useNodeProperty }; //# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map