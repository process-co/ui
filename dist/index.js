function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import * as React4 from 'react';
import React4__default, { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { create } from 'zustand';
import { Editor } from '@monaco-editor/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faSpinner } from '@fortawesome/pro-regular-svg-icons';
import { Slot } from '@radix-ui/react-slot';
// src/components/input.tsx
// ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == (typeof e === "undefined" ? "undefined" : _type_of(e))) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
var clsx_default = clsx;
// ../../node_modules/.pnpm/tailwind-merge@3.4.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs
var concatArrays = function(array1, array2) {
    var combinedArray = new Array(array1.length + array2.length);
    for(var i = 0; i < array1.length; i++){
        combinedArray[i] = array1[i];
    }
    for(var i1 = 0; i1 < array2.length; i1++){
        combinedArray[array1.length + i1] = array2[i1];
    }
    return combinedArray;
};
var createClassValidatorObject = function(classGroupId, validator) {
    return {
        classGroupId: classGroupId,
        validator: validator
    };
};
var createClassPartObject = function() {
    var nextPart = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Map(), validators = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, classGroupId = arguments.length > 2 ? arguments[2] : void 0;
    return {
        nextPart: nextPart,
        validators: validators,
        classGroupId: classGroupId
    };
};
var CLASS_PART_SEPARATOR = "-";
var EMPTY_CONFLICTS = [];
var ARBITRARY_PROPERTY_PREFIX = "arbitrary..";
var createClassGroupUtils = function(config) {
    var classMap = createClassMap(config);
    var conflictingClassGroups = config.conflictingClassGroups, conflictingClassGroupModifiers = config.conflictingClassGroupModifiers;
    var getClassGroupId = function(className) {
        if (className.startsWith("[") && className.endsWith("]")) {
            return getGroupIdForArbitraryProperty(className);
        }
        var classParts = className.split(CLASS_PART_SEPARATOR);
        var startIndex = classParts[0] === "" && classParts.length > 1 ? 1 : 0;
        return getGroupRecursive(classParts, startIndex, classMap);
    };
    var getConflictingClassGroupIds = function(classGroupId, hasPostfixModifier) {
        if (hasPostfixModifier) {
            var modifierConflicts = conflictingClassGroupModifiers[classGroupId];
            var baseConflicts = conflictingClassGroups[classGroupId];
            if (modifierConflicts) {
                if (baseConflicts) {
                    return concatArrays(baseConflicts, modifierConflicts);
                }
                return modifierConflicts;
            }
            return baseConflicts || EMPTY_CONFLICTS;
        }
        return conflictingClassGroups[classGroupId] || EMPTY_CONFLICTS;
    };
    return {
        getClassGroupId: getClassGroupId,
        getConflictingClassGroupIds: getConflictingClassGroupIds
    };
};
var getGroupRecursive = function(classParts, startIndex, classPartObject) {
    var classPathsLength = classParts.length - startIndex;
    if (classPathsLength === 0) {
        return classPartObject.classGroupId;
    }
    var currentClassPart = classParts[startIndex];
    var nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    if (nextClassPartObject) {
        var result = getGroupRecursive(classParts, startIndex + 1, nextClassPartObject);
        if (result) return result;
    }
    var validators = classPartObject.validators;
    if (validators === null) {
        return void 0;
    }
    var classRest = startIndex === 0 ? classParts.join(CLASS_PART_SEPARATOR) : classParts.slice(startIndex).join(CLASS_PART_SEPARATOR);
    var validatorsLength = validators.length;
    for(var i = 0; i < validatorsLength; i++){
        var validatorObj = validators[i];
        if (validatorObj.validator(classRest)) {
            return validatorObj.classGroupId;
        }
    }
    return void 0;
};
var getGroupIdForArbitraryProperty = function(className) {
    return className.slice(1, -1).indexOf(":") === -1 ? void 0 : function() {
        var content = className.slice(1, -1);
        var colonIndex = content.indexOf(":");
        var property = content.slice(0, colonIndex);
        return property ? ARBITRARY_PROPERTY_PREFIX + property : void 0;
    }();
};
var createClassMap = function(config) {
    var theme = config.theme, classGroups = config.classGroups;
    return processClassGroups(classGroups, theme);
};
var processClassGroups = function(classGroups, theme) {
    var classMap = createClassPartObject();
    for(var classGroupId in classGroups){
        var group = classGroups[classGroupId];
        processClassesRecursively(group, classMap, classGroupId, theme);
    }
    return classMap;
};
var processClassesRecursively = function(classGroup, classPartObject, classGroupId, theme) {
    var len = classGroup.length;
    for(var i = 0; i < len; i++){
        var classDefinition = classGroup[i];
        processClassDefinition(classDefinition, classPartObject, classGroupId, theme);
    }
};
var processClassDefinition = function(classDefinition, classPartObject, classGroupId, theme) {
    if (typeof classDefinition === "string") {
        processStringDefinition(classDefinition, classPartObject, classGroupId);
        return;
    }
    if (typeof classDefinition === "function") {
        processFunctionDefinition(classDefinition, classPartObject, classGroupId, theme);
        return;
    }
    processObjectDefinition(classDefinition, classPartObject, classGroupId, theme);
};
var processStringDefinition = function(classDefinition, classPartObject, classGroupId) {
    var classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
    classPartObjectToEdit.classGroupId = classGroupId;
};
var processFunctionDefinition = function(classDefinition, classPartObject, classGroupId, theme) {
    if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
    }
    if (classPartObject.validators === null) {
        classPartObject.validators = [];
    }
    classPartObject.validators.push(createClassValidatorObject(classGroupId, classDefinition));
};
var processObjectDefinition = function(classDefinition, classPartObject, classGroupId, theme) {
    var entries = Object.entries(classDefinition);
    var len = entries.length;
    for(var i = 0; i < len; i++){
        var _entries_i = _sliced_to_array(entries[i], 2), key = _entries_i[0], value = _entries_i[1];
        processClassesRecursively(value, getPart(classPartObject, key), classGroupId, theme);
    }
};
var getPart = function(classPartObject, path) {
    var current = classPartObject;
    var parts = path.split(CLASS_PART_SEPARATOR);
    var len = parts.length;
    for(var i = 0; i < len; i++){
        var part = parts[i];
        var next = current.nextPart.get(part);
        if (!next) {
            next = createClassPartObject();
            current.nextPart.set(part, next);
        }
        current = next;
    }
    return current;
};
var isThemeGetter = function(func) {
    return "isThemeGetter" in func && func.isThemeGetter === true;
};
var createLruCache = function(maxCacheSize) {
    if (maxCacheSize < 1) {
        return {
            get: function() {
                return void 0;
            },
            set: function() {}
        };
    }
    var cacheSize = 0;
    var cache = /* @__PURE__ */ Object.create(null);
    var previousCache = /* @__PURE__ */ Object.create(null);
    var update = function(key, value) {
        cache[key] = value;
        cacheSize++;
        if (cacheSize > maxCacheSize) {
            cacheSize = 0;
            previousCache = cache;
            cache = /* @__PURE__ */ Object.create(null);
        }
    };
    return {
        get: function get(key) {
            var value = cache[key];
            if (value !== void 0) {
                return value;
            }
            if ((value = previousCache[key]) !== void 0) {
                update(key, value);
                return value;
            }
        },
        set: function set(key, value) {
            if (key in cache) {
                cache[key] = value;
            } else {
                update(key, value);
            }
        }
    };
};
var IMPORTANT_MODIFIER = "!";
var MODIFIER_SEPARATOR = ":";
var EMPTY_MODIFIERS = [];
var createResultObject = function(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition, isExternal) {
    return {
        modifiers: modifiers,
        hasImportantModifier: hasImportantModifier,
        baseClassName: baseClassName,
        maybePostfixModifierPosition: maybePostfixModifierPosition,
        isExternal: isExternal
    };
};
var createParseClassName = function(config) {
    var prefix = config.prefix, experimentalParseClassName = config.experimentalParseClassName;
    var parseClassName = function(className) {
        var modifiers = [];
        var bracketDepth = 0;
        var parenDepth = 0;
        var modifierStart = 0;
        var postfixModifierPosition;
        var len = className.length;
        for(var index = 0; index < len; index++){
            var currentCharacter = className[index];
            if (bracketDepth === 0 && parenDepth === 0) {
                if (currentCharacter === MODIFIER_SEPARATOR) {
                    modifiers.push(className.slice(modifierStart, index));
                    modifierStart = index + 1;
                    continue;
                }
                if (currentCharacter === "/") {
                    postfixModifierPosition = index;
                    continue;
                }
            }
            if (currentCharacter === "[") bracketDepth++;
            else if (currentCharacter === "]") bracketDepth--;
            else if (currentCharacter === "(") parenDepth++;
            else if (currentCharacter === ")") parenDepth--;
        }
        var baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.slice(modifierStart);
        var baseClassName = baseClassNameWithImportantModifier;
        var hasImportantModifier = false;
        if (baseClassNameWithImportantModifier.endsWith(IMPORTANT_MODIFIER)) {
            baseClassName = baseClassNameWithImportantModifier.slice(0, -1);
            hasImportantModifier = true;
        } else if (/**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */ baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER)) {
            baseClassName = baseClassNameWithImportantModifier.slice(1);
            hasImportantModifier = true;
        }
        var maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
        return createResultObject(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition);
    };
    if (prefix) {
        var fullPrefix = prefix + MODIFIER_SEPARATOR;
        var parseClassNameOriginal = parseClassName;
        parseClassName = function(className) {
            return className.startsWith(fullPrefix) ? parseClassNameOriginal(className.slice(fullPrefix.length)) : createResultObject(EMPTY_MODIFIERS, false, className, void 0, true);
        };
    }
    if (experimentalParseClassName) {
        var parseClassNameOriginal1 = parseClassName;
        parseClassName = function(className) {
            return experimentalParseClassName({
                className: className,
                parseClassName: parseClassNameOriginal1
            });
        };
    }
    return parseClassName;
};
var createSortModifiers = function(config) {
    var modifierWeights = /* @__PURE__ */ new Map();
    config.orderSensitiveModifiers.forEach(function(mod, index) {
        modifierWeights.set(mod, 1e6 + index);
    });
    return function(modifiers) {
        var result = [];
        var currentSegment = [];
        for(var i = 0; i < modifiers.length; i++){
            var modifier = modifiers[i];
            var isArbitrary = modifier[0] === "[";
            var isOrderSensitive = modifierWeights.has(modifier);
            if (isArbitrary || isOrderSensitive) {
                if (currentSegment.length > 0) {
                    var _result;
                    currentSegment.sort();
                    (_result = result).push.apply(_result, _to_consumable_array(currentSegment));
                    currentSegment = [];
                }
                result.push(modifier);
            } else {
                currentSegment.push(modifier);
            }
        }
        if (currentSegment.length > 0) {
            var _result1;
            currentSegment.sort();
            (_result1 = result).push.apply(_result1, _to_consumable_array(currentSegment));
        }
        return result;
    };
};
var createConfigUtils = function(config) {
    return _object_spread({
        cache: createLruCache(config.cacheSize),
        parseClassName: createParseClassName(config),
        sortModifiers: createSortModifiers(config)
    }, createClassGroupUtils(config));
};
var SPLIT_CLASSES_REGEX = /\s+/;
var mergeClassList = function(classList, configUtils) {
    var parseClassName = configUtils.parseClassName, getClassGroupId = configUtils.getClassGroupId, getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds, sortModifiers = configUtils.sortModifiers;
    var classGroupsInConflict = [];
    var classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
    var result = "";
    for(var index = classNames.length - 1; index >= 0; index -= 1){
        var originalClassName = classNames[index];
        var _parseClassName = parseClassName(originalClassName), isExternal = _parseClassName.isExternal, modifiers = _parseClassName.modifiers, hasImportantModifier = _parseClassName.hasImportantModifier, baseClassName = _parseClassName.baseClassName, maybePostfixModifierPosition = _parseClassName.maybePostfixModifierPosition;
        if (isExternal) {
            result = originalClassName + (result.length > 0 ? " " + result : result);
            continue;
        }
        var hasPostfixModifier = !!maybePostfixModifierPosition;
        var classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
        if (!classGroupId) {
            if (!hasPostfixModifier) {
                result = originalClassName + (result.length > 0 ? " " + result : result);
                continue;
            }
            classGroupId = getClassGroupId(baseClassName);
            if (!classGroupId) {
                result = originalClassName + (result.length > 0 ? " " + result : result);
                continue;
            }
            hasPostfixModifier = false;
        }
        var variantModifier = modifiers.length === 0 ? "" : modifiers.length === 1 ? modifiers[0] : sortModifiers(modifiers).join(":");
        var modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
        var classId = modifierId + classGroupId;
        if (classGroupsInConflict.indexOf(classId) > -1) {
            continue;
        }
        classGroupsInConflict.push(classId);
        var conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
        for(var i = 0; i < conflictGroups.length; ++i){
            var group = conflictGroups[i];
            classGroupsInConflict.push(modifierId + group);
        }
        result = originalClassName + (result.length > 0 ? " " + result : result);
    }
    return result;
};
var twJoin = function() {
    for(var _len = arguments.length, classLists = new Array(_len), _key = 0; _key < _len; _key++){
        classLists[_key] = arguments[_key];
    }
    var index = 0;
    var argument;
    var resolvedValue;
    var string = "";
    while(index < classLists.length){
        if (argument = classLists[index++]) {
            if (resolvedValue = toValue(argument)) {
                string && (string += " ");
                string += resolvedValue;
            }
        }
    }
    return string;
};
var toValue = function(mix) {
    if (typeof mix === "string") {
        return mix;
    }
    var resolvedValue;
    var string = "";
    for(var k = 0; k < mix.length; k++){
        if (mix[k]) {
            if (resolvedValue = toValue(mix[k])) {
                string && (string += " ");
                string += resolvedValue;
            }
        }
    }
    return string;
};
var createTailwindMerge = function(createConfigFirst) {
    for(var _len = arguments.length, createConfigRest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        createConfigRest[_key - 1] = arguments[_key];
    }
    var configUtils;
    var cacheGet;
    var cacheSet;
    var functionToCall;
    var initTailwindMerge = function(classList) {
        var config = createConfigRest.reduce(function(previousConfig, createConfigCurrent) {
            return createConfigCurrent(previousConfig);
        }, createConfigFirst());
        configUtils = createConfigUtils(config);
        cacheGet = configUtils.cache.get;
        cacheSet = configUtils.cache.set;
        functionToCall = tailwindMerge;
        return tailwindMerge(classList);
    };
    var tailwindMerge = function(classList) {
        var cachedResult = cacheGet(classList);
        if (cachedResult) {
            return cachedResult;
        }
        var result = mergeClassList(classList, configUtils);
        cacheSet(classList, result);
        return result;
    };
    functionToCall = initTailwindMerge;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return functionToCall(twJoin.apply(void 0, _to_consumable_array(args)));
    };
};
var fallbackThemeArr = [];
var fromTheme = function(key) {
    var themeGetter = function(theme) {
        return theme[key] || fallbackThemeArr;
    };
    themeGetter.isThemeGetter = true;
    return themeGetter;
};
var arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
var arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
var fractionRegex = /^\d+\/\d+$/;
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var isFraction = function(value) {
    return fractionRegex.test(value);
};
var isNumber = function(value) {
    return !!value && !Number.isNaN(Number(value));
};
var isInteger = function(value) {
    return !!value && Number.isInteger(Number(value));
};
var isPercent = function(value) {
    return value.endsWith("%") && isNumber(value.slice(0, -1));
};
var isTshirtSize = function(value) {
    return tshirtUnitRegex.test(value);
};
var isAny = function() {
    return true;
};
var isLengthOnly = function(value) {
    return(// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    lengthUnitRegex.test(value) && !colorFunctionRegex.test(value));
};
var isNever = function() {
    return false;
};
var isShadow = function(value) {
    return shadowRegex.test(value);
};
var isImage = function(value) {
    return imageRegex.test(value);
};
var isAnyNonArbitrary = function(value) {
    return !isArbitraryValue(value) && !isArbitraryVariable(value);
};
var isArbitrarySize = function(value) {
    return getIsArbitraryValue(value, isLabelSize, isNever);
};
var isArbitraryValue = function(value) {
    return arbitraryValueRegex.test(value);
};
var isArbitraryLength = function(value) {
    return getIsArbitraryValue(value, isLabelLength, isLengthOnly);
};
var isArbitraryNumber = function(value) {
    return getIsArbitraryValue(value, isLabelNumber, isNumber);
};
var isArbitraryPosition = function(value) {
    return getIsArbitraryValue(value, isLabelPosition, isNever);
};
var isArbitraryImage = function(value) {
    return getIsArbitraryValue(value, isLabelImage, isImage);
};
var isArbitraryShadow = function(value) {
    return getIsArbitraryValue(value, isLabelShadow, isShadow);
};
var isArbitraryVariable = function(value) {
    return arbitraryVariableRegex.test(value);
};
var isArbitraryVariableLength = function(value) {
    return getIsArbitraryVariable(value, isLabelLength);
};
var isArbitraryVariableFamilyName = function(value) {
    return getIsArbitraryVariable(value, isLabelFamilyName);
};
var isArbitraryVariablePosition = function(value) {
    return getIsArbitraryVariable(value, isLabelPosition);
};
var isArbitraryVariableSize = function(value) {
    return getIsArbitraryVariable(value, isLabelSize);
};
var isArbitraryVariableImage = function(value) {
    return getIsArbitraryVariable(value, isLabelImage);
};
var isArbitraryVariableShadow = function(value) {
    return getIsArbitraryVariable(value, isLabelShadow, true);
};
var getIsArbitraryValue = function(value, testLabel, testValue) {
    var result = arbitraryValueRegex.exec(value);
    if (result) {
        if (result[1]) {
            return testLabel(result[1]);
        }
        return testValue(result[2]);
    }
    return false;
};
var getIsArbitraryVariable = function(value, testLabel) {
    var shouldMatchNoLabel = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var result = arbitraryVariableRegex.exec(value);
    if (result) {
        if (result[1]) {
            return testLabel(result[1]);
        }
        return shouldMatchNoLabel;
    }
    return false;
};
var isLabelPosition = function(label) {
    return label === "position" || label === "percentage";
};
var isLabelImage = function(label) {
    return label === "image" || label === "url";
};
var isLabelSize = function(label) {
    return label === "length" || label === "size" || label === "bg-size";
};
var isLabelLength = function(label) {
    return label === "length";
};
var isLabelNumber = function(label) {
    return label === "number";
};
var isLabelFamilyName = function(label) {
    return label === "family-name";
};
var isLabelShadow = function(label) {
    return label === "shadow";
};
var getDefaultConfig = function() {
    var themeColor = fromTheme("color");
    var themeFont = fromTheme("font");
    var themeText = fromTheme("text");
    var themeFontWeight = fromTheme("font-weight");
    var themeTracking = fromTheme("tracking");
    var themeLeading = fromTheme("leading");
    var themeBreakpoint = fromTheme("breakpoint");
    var themeContainer = fromTheme("container");
    var themeSpacing = fromTheme("spacing");
    var themeRadius = fromTheme("radius");
    var themeShadow = fromTheme("shadow");
    var themeInsetShadow = fromTheme("inset-shadow");
    var themeTextShadow = fromTheme("text-shadow");
    var themeDropShadow = fromTheme("drop-shadow");
    var themeBlur = fromTheme("blur");
    var themePerspective = fromTheme("perspective");
    var themeAspect = fromTheme("aspect");
    var themeEase = fromTheme("ease");
    var themeAnimate = fromTheme("animate");
    var scaleBreak = function() {
        return [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column"
        ];
    };
    var scalePosition = function() {
        return [
            "center",
            "top",
            "bottom",
            "left",
            "right",
            "top-left",
            // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
            "left-top",
            "top-right",
            // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
            "right-top",
            "bottom-right",
            // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
            "right-bottom",
            "bottom-left",
            // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
            "left-bottom"
        ];
    };
    var scalePositionWithArbitrary = function() {
        return _to_consumable_array(scalePosition()).concat([
            isArbitraryVariable,
            isArbitraryValue
        ]);
    };
    var scaleOverflow = function() {
        return [
            "auto",
            "hidden",
            "clip",
            "visible",
            "scroll"
        ];
    };
    var scaleOverscroll = function() {
        return [
            "auto",
            "contain",
            "none"
        ];
    };
    var scaleUnambiguousSpacing = function() {
        return [
            isArbitraryVariable,
            isArbitraryValue,
            themeSpacing
        ];
    };
    var scaleInset = function() {
        return [
            isFraction,
            "full",
            "auto"
        ].concat(_to_consumable_array(scaleUnambiguousSpacing()));
    };
    var scaleGridTemplateColsRows = function() {
        return [
            isInteger,
            "none",
            "subgrid",
            isArbitraryVariable,
            isArbitraryValue
        ];
    };
    var scaleGridColRowStartAndEnd = function() {
        return [
            "auto",
            {
                span: [
                    "full",
                    isInteger,
                    isArbitraryVariable,
                    isArbitraryValue
                ]
            },
            isInteger,
            isArbitraryVariable,
            isArbitraryValue
        ];
    };
    var scaleGridColRowStartOrEnd = function() {
        return [
            isInteger,
            "auto",
            isArbitraryVariable,
            isArbitraryValue
        ];
    };
    var scaleGridAutoColsRows = function() {
        return [
            "auto",
            "min",
            "max",
            "fr",
            isArbitraryVariable,
            isArbitraryValue
        ];
    };
    var scaleAlignPrimaryAxis = function() {
        return [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
            "baseline",
            "center-safe",
            "end-safe"
        ];
    };
    var scaleAlignSecondaryAxis = function() {
        return [
            "start",
            "end",
            "center",
            "stretch",
            "center-safe",
            "end-safe"
        ];
    };
    var scaleMargin = function() {
        return [
            "auto"
        ].concat(_to_consumable_array(scaleUnambiguousSpacing()));
    };
    var scaleSizing = function() {
        return [
            isFraction,
            "auto",
            "full",
            "dvw",
            "dvh",
            "lvw",
            "lvh",
            "svw",
            "svh",
            "min",
            "max",
            "fit"
        ].concat(_to_consumable_array(scaleUnambiguousSpacing()));
    };
    var scaleColor = function() {
        return [
            themeColor,
            isArbitraryVariable,
            isArbitraryValue
        ];
    };
    var scaleBgPosition = function() {
        return _to_consumable_array(scalePosition()).concat([
            isArbitraryVariablePosition,
            isArbitraryPosition,
            {
                position: [
                    isArbitraryVariable,
                    isArbitraryValue
                ]
            }
        ]);
    };
    var scaleBgRepeat = function() {
        return [
            "no-repeat",
            {
                repeat: [
                    "",
                    "x",
                    "y",
                    "space",
                    "round"
                ]
            }
        ];
    };
    var scaleBgSize = function() {
        return [
            "auto",
            "cover",
            "contain",
            isArbitraryVariableSize,
            isArbitrarySize,
            {
                size: [
                    isArbitraryVariable,
                    isArbitraryValue
                ]
            }
        ];
    };
    var scaleGradientStopPosition = function() {
        return [
            isPercent,
            isArbitraryVariableLength,
            isArbitraryLength
        ];
    };
    var scaleRadius = function() {
        return [
            // Deprecated since Tailwind CSS v4.0.0
            "",
            "none",
            "full",
            themeRadius,
            isArbitraryVariable,
            isArbitraryValue
        ];
    };
    var scaleBorderWidth = function() {
        return [
            "",
            isNumber,
            isArbitraryVariableLength,
            isArbitraryLength
        ];
    };
    var scaleLineStyle = function() {
        return [
            "solid",
            "dashed",
            "dotted",
            "double"
        ];
    };
    var scaleBlendMode = function() {
        return [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity"
        ];
    };
    var scaleMaskImagePosition = function() {
        return [
            isNumber,
            isPercent,
            isArbitraryVariablePosition,
            isArbitraryPosition
        ];
    };
    var scaleBlur = function() {
        return [
            // Deprecated since Tailwind CSS v4.0.0
            "",
            "none",
            themeBlur,
            isArbitraryVariable,
            isArbitraryValue
        ];
    };
    var scaleRotate = function() {
        return [
            "none",
            isNumber,
            isArbitraryVariable,
            isArbitraryValue
        ];
    };
    var scaleScale = function() {
        return [
            "none",
            isNumber,
            isArbitraryVariable,
            isArbitraryValue
        ];
    };
    var scaleSkew = function() {
        return [
            isNumber,
            isArbitraryVariable,
            isArbitraryValue
        ];
    };
    var scaleTranslate = function() {
        return [
            isFraction,
            "full"
        ].concat(_to_consumable_array(scaleUnambiguousSpacing()));
    };
    return {
        cacheSize: 500,
        theme: {
            animate: [
                "spin",
                "ping",
                "pulse",
                "bounce"
            ],
            aspect: [
                "video"
            ],
            blur: [
                isTshirtSize
            ],
            breakpoint: [
                isTshirtSize
            ],
            color: [
                isAny
            ],
            container: [
                isTshirtSize
            ],
            "drop-shadow": [
                isTshirtSize
            ],
            ease: [
                "in",
                "out",
                "in-out"
            ],
            font: [
                isAnyNonArbitrary
            ],
            "font-weight": [
                "thin",
                "extralight",
                "light",
                "normal",
                "medium",
                "semibold",
                "bold",
                "extrabold",
                "black"
            ],
            "inset-shadow": [
                isTshirtSize
            ],
            leading: [
                "none",
                "tight",
                "snug",
                "normal",
                "relaxed",
                "loose"
            ],
            perspective: [
                "dramatic",
                "near",
                "normal",
                "midrange",
                "distant",
                "none"
            ],
            radius: [
                isTshirtSize
            ],
            shadow: [
                isTshirtSize
            ],
            spacing: [
                "px",
                isNumber
            ],
            text: [
                isTshirtSize
            ],
            "text-shadow": [
                isTshirtSize
            ],
            tracking: [
                "tighter",
                "tight",
                "normal",
                "wide",
                "wider",
                "widest"
            ]
        },
        classGroups: {
            // --------------
            // --- Layout ---
            // --------------
            /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */ aspect: [
                {
                    aspect: [
                        "auto",
                        "square",
                        isFraction,
                        isArbitraryValue,
                        isArbitraryVariable,
                        themeAspect
                    ]
                }
            ],
            /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */ container: [
                "container"
            ],
            /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */ columns: [
                {
                    columns: [
                        isNumber,
                        isArbitraryValue,
                        isArbitraryVariable,
                        themeContainer
                    ]
                }
            ],
            /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */ "break-after": [
                {
                    "break-after": scaleBreak()
                }
            ],
            /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */ "break-before": [
                {
                    "break-before": scaleBreak()
                }
            ],
            /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */ "break-inside": [
                {
                    "break-inside": [
                        "auto",
                        "avoid",
                        "avoid-page",
                        "avoid-column"
                    ]
                }
            ],
            /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */ "box-decoration": [
                {
                    "box-decoration": [
                        "slice",
                        "clone"
                    ]
                }
            ],
            /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */ box: [
                {
                    box: [
                        "border",
                        "content"
                    ]
                }
            ],
            /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */ display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden"
            ],
            /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */ sr: [
                "sr-only",
                "not-sr-only"
            ],
            /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */ float: [
                {
                    float: [
                        "right",
                        "left",
                        "none",
                        "start",
                        "end"
                    ]
                }
            ],
            /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */ clear: [
                {
                    clear: [
                        "left",
                        "right",
                        "both",
                        "none",
                        "start",
                        "end"
                    ]
                }
            ],
            /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */ isolation: [
                "isolate",
                "isolation-auto"
            ],
            /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */ "object-fit": [
                {
                    object: [
                        "contain",
                        "cover",
                        "fill",
                        "none",
                        "scale-down"
                    ]
                }
            ],
            /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */ "object-position": [
                {
                    object: scalePositionWithArbitrary()
                }
            ],
            /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */ overflow: [
                {
                    overflow: scaleOverflow()
                }
            ],
            /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */ "overflow-x": [
                {
                    "overflow-x": scaleOverflow()
                }
            ],
            /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */ "overflow-y": [
                {
                    "overflow-y": scaleOverflow()
                }
            ],
            /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ overscroll: [
                {
                    overscroll: scaleOverscroll()
                }
            ],
            /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ "overscroll-x": [
                {
                    "overscroll-x": scaleOverscroll()
                }
            ],
            /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ "overscroll-y": [
                {
                    "overscroll-y": scaleOverscroll()
                }
            ],
            /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */ position: [
                "static",
                "fixed",
                "absolute",
                "relative",
                "sticky"
            ],
            /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ inset: [
                {
                    inset: scaleInset()
                }
            ],
            /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ "inset-x": [
                {
                    "inset-x": scaleInset()
                }
            ],
            /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ "inset-y": [
                {
                    "inset-y": scaleInset()
                }
            ],
            /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ start: [
                {
                    start: scaleInset()
                }
            ],
            /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ end: [
                {
                    end: scaleInset()
                }
            ],
            /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ top: [
                {
                    top: scaleInset()
                }
            ],
            /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ right: [
                {
                    right: scaleInset()
                }
            ],
            /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ bottom: [
                {
                    bottom: scaleInset()
                }
            ],
            /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ left: [
                {
                    left: scaleInset()
                }
            ],
            /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */ visibility: [
                "visible",
                "invisible",
                "collapse"
            ],
            /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */ z: [
                {
                    z: [
                        isInteger,
                        "auto",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // ------------------------
            // --- Flexbox and Grid ---
            // ------------------------
            /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */ basis: [
                {
                    basis: [
                        isFraction,
                        "full",
                        "auto",
                        themeContainer
                    ].concat(_to_consumable_array(scaleUnambiguousSpacing()))
                }
            ],
            /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */ "flex-direction": [
                {
                    flex: [
                        "row",
                        "row-reverse",
                        "col",
                        "col-reverse"
                    ]
                }
            ],
            /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */ "flex-wrap": [
                {
                    flex: [
                        "nowrap",
                        "wrap",
                        "wrap-reverse"
                    ]
                }
            ],
            /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */ flex: [
                {
                    flex: [
                        isNumber,
                        isFraction,
                        "auto",
                        "initial",
                        "none",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */ grow: [
                {
                    grow: [
                        "",
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */ shrink: [
                {
                    shrink: [
                        "",
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */ order: [
                {
                    order: [
                        isInteger,
                        "first",
                        "last",
                        "none",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */ "grid-cols": [
                {
                    "grid-cols": scaleGridTemplateColsRows()
                }
            ],
            /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */ "col-start-end": [
                {
                    col: scaleGridColRowStartAndEnd()
                }
            ],
            /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */ "col-start": [
                {
                    "col-start": scaleGridColRowStartOrEnd()
                }
            ],
            /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */ "col-end": [
                {
                    "col-end": scaleGridColRowStartOrEnd()
                }
            ],
            /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */ "grid-rows": [
                {
                    "grid-rows": scaleGridTemplateColsRows()
                }
            ],
            /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */ "row-start-end": [
                {
                    row: scaleGridColRowStartAndEnd()
                }
            ],
            /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */ "row-start": [
                {
                    "row-start": scaleGridColRowStartOrEnd()
                }
            ],
            /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */ "row-end": [
                {
                    "row-end": scaleGridColRowStartOrEnd()
                }
            ],
            /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */ "grid-flow": [
                {
                    "grid-flow": [
                        "row",
                        "col",
                        "dense",
                        "row-dense",
                        "col-dense"
                    ]
                }
            ],
            /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */ "auto-cols": [
                {
                    "auto-cols": scaleGridAutoColsRows()
                }
            ],
            /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */ "auto-rows": [
                {
                    "auto-rows": scaleGridAutoColsRows()
                }
            ],
            /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */ gap: [
                {
                    gap: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */ "gap-x": [
                {
                    "gap-x": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */ "gap-y": [
                {
                    "gap-y": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */ "justify-content": [
                {
                    justify: _to_consumable_array(scaleAlignPrimaryAxis()).concat([
                        "normal"
                    ])
                }
            ],
            /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */ "justify-items": [
                {
                    "justify-items": _to_consumable_array(scaleAlignSecondaryAxis()).concat([
                        "normal"
                    ])
                }
            ],
            /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */ "justify-self": [
                {
                    "justify-self": [
                        "auto"
                    ].concat(_to_consumable_array(scaleAlignSecondaryAxis()))
                }
            ],
            /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */ "align-content": [
                {
                    content: [
                        "normal"
                    ].concat(_to_consumable_array(scaleAlignPrimaryAxis()))
                }
            ],
            /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */ "align-items": [
                {
                    items: _to_consumable_array(scaleAlignSecondaryAxis()).concat([
                        {
                            baseline: [
                                "",
                                "last"
                            ]
                        }
                    ])
                }
            ],
            /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */ "align-self": [
                {
                    self: [
                        "auto"
                    ].concat(_to_consumable_array(scaleAlignSecondaryAxis()), [
                        {
                            baseline: [
                                "",
                                "last"
                            ]
                        }
                    ])
                }
            ],
            /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */ "place-content": [
                {
                    "place-content": scaleAlignPrimaryAxis()
                }
            ],
            /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */ "place-items": [
                {
                    "place-items": _to_consumable_array(scaleAlignSecondaryAxis()).concat([
                        "baseline"
                    ])
                }
            ],
            /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */ "place-self": [
                {
                    "place-self": [
                        "auto"
                    ].concat(_to_consumable_array(scaleAlignSecondaryAxis()))
                }
            ],
            // Spacing
            /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */ p: [
                {
                    p: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */ px: [
                {
                    px: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */ py: [
                {
                    py: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */ ps: [
                {
                    ps: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */ pe: [
                {
                    pe: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */ pt: [
                {
                    pt: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */ pr: [
                {
                    pr: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */ pb: [
                {
                    pb: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */ pl: [
                {
                    pl: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */ m: [
                {
                    m: scaleMargin()
                }
            ],
            /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */ mx: [
                {
                    mx: scaleMargin()
                }
            ],
            /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */ my: [
                {
                    my: scaleMargin()
                }
            ],
            /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */ ms: [
                {
                    ms: scaleMargin()
                }
            ],
            /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */ me: [
                {
                    me: scaleMargin()
                }
            ],
            /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */ mt: [
                {
                    mt: scaleMargin()
                }
            ],
            /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */ mr: [
                {
                    mr: scaleMargin()
                }
            ],
            /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */ mb: [
                {
                    mb: scaleMargin()
                }
            ],
            /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */ ml: [
                {
                    ml: scaleMargin()
                }
            ],
            /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */ "space-x": [
                {
                    "space-x": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */ "space-x-reverse": [
                "space-x-reverse"
            ],
            /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */ "space-y": [
                {
                    "space-y": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */ "space-y-reverse": [
                "space-y-reverse"
            ],
            // --------------
            // --- Sizing ---
            // --------------
            /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */ size: [
                {
                    size: scaleSizing()
                }
            ],
            /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */ w: [
                {
                    w: [
                        themeContainer,
                        "screen"
                    ].concat(_to_consumable_array(scaleSizing()))
                }
            ],
            /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */ "min-w": [
                {
                    "min-w": [
                        themeContainer,
                        "screen",
                        /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */ "none"
                    ].concat(_to_consumable_array(scaleSizing()))
                }
            ],
            /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */ "max-w": [
                {
                    "max-w": [
                        themeContainer,
                        "screen",
                        "none",
                        /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */ "prose",
                        /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */ {
                            screen: [
                                themeBreakpoint
                            ]
                        }
                    ].concat(_to_consumable_array(scaleSizing()))
                }
            ],
            /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */ h: [
                {
                    h: [
                        "screen",
                        "lh"
                    ].concat(_to_consumable_array(scaleSizing()))
                }
            ],
            /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */ "min-h": [
                {
                    "min-h": [
                        "screen",
                        "lh",
                        "none"
                    ].concat(_to_consumable_array(scaleSizing()))
                }
            ],
            /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */ "max-h": [
                {
                    "max-h": [
                        "screen",
                        "lh"
                    ].concat(_to_consumable_array(scaleSizing()))
                }
            ],
            // ------------------
            // --- Typography ---
            // ------------------
            /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */ "font-size": [
                {
                    text: [
                        "base",
                        themeText,
                        isArbitraryVariableLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */ "font-smoothing": [
                "antialiased",
                "subpixel-antialiased"
            ],
            /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */ "font-style": [
                "italic",
                "not-italic"
            ],
            /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */ "font-weight": [
                {
                    font: [
                        themeFontWeight,
                        isArbitraryVariable,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */ "font-stretch": [
                {
                    "font-stretch": [
                        "ultra-condensed",
                        "extra-condensed",
                        "condensed",
                        "semi-condensed",
                        "normal",
                        "semi-expanded",
                        "expanded",
                        "extra-expanded",
                        "ultra-expanded",
                        isPercent,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */ "font-family": [
                {
                    font: [
                        isArbitraryVariableFamilyName,
                        isArbitraryValue,
                        themeFont
                    ]
                }
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-normal": [
                "normal-nums"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-ordinal": [
                "ordinal"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-slashed-zero": [
                "slashed-zero"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-figure": [
                "lining-nums",
                "oldstyle-nums"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-spacing": [
                "proportional-nums",
                "tabular-nums"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-fraction": [
                "diagonal-fractions",
                "stacked-fractions"
            ],
            /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */ tracking: [
                {
                    tracking: [
                        themeTracking,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */ "line-clamp": [
                {
                    "line-clamp": [
                        isNumber,
                        "none",
                        isArbitraryVariable,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */ leading: [
                {
                    leading: [
                        /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */ themeLeading
                    ].concat(_to_consumable_array(scaleUnambiguousSpacing()))
                }
            ],
            /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */ "list-image": [
                {
                    "list-image": [
                        "none",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */ "list-style-position": [
                {
                    list: [
                        "inside",
                        "outside"
                    ]
                }
            ],
            /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */ "list-style-type": [
                {
                    list: [
                        "disc",
                        "decimal",
                        "none",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */ "text-alignment": [
                {
                    text: [
                        "left",
                        "center",
                        "right",
                        "justify",
                        "start",
                        "end"
                    ]
                }
            ],
            /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */ "placeholder-color": [
                {
                    placeholder: scaleColor()
                }
            ],
            /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */ "text-color": [
                {
                    text: scaleColor()
                }
            ],
            /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */ "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline"
            ],
            /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */ "text-decoration-style": [
                {
                    decoration: _to_consumable_array(scaleLineStyle()).concat([
                        "wavy"
                    ])
                }
            ],
            /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */ "text-decoration-thickness": [
                {
                    decoration: [
                        isNumber,
                        "from-font",
                        "auto",
                        isArbitraryVariable,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */ "text-decoration-color": [
                {
                    decoration: scaleColor()
                }
            ],
            /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */ "underline-offset": [
                {
                    "underline-offset": [
                        isNumber,
                        "auto",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */ "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case"
            ],
            /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */ "text-overflow": [
                "truncate",
                "text-ellipsis",
                "text-clip"
            ],
            /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */ "text-wrap": [
                {
                    text: [
                        "wrap",
                        "nowrap",
                        "balance",
                        "pretty"
                    ]
                }
            ],
            /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */ indent: [
                {
                    indent: scaleUnambiguousSpacing()
                }
            ],
            /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */ "vertical-align": [
                {
                    align: [
                        "baseline",
                        "top",
                        "middle",
                        "bottom",
                        "text-top",
                        "text-bottom",
                        "sub",
                        "super",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */ whitespace: [
                {
                    whitespace: [
                        "normal",
                        "nowrap",
                        "pre",
                        "pre-line",
                        "pre-wrap",
                        "break-spaces"
                    ]
                }
            ],
            /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */ break: [
                {
                    break: [
                        "normal",
                        "words",
                        "all",
                        "keep"
                    ]
                }
            ],
            /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */ wrap: [
                {
                    wrap: [
                        "break-word",
                        "anywhere",
                        "normal"
                    ]
                }
            ],
            /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */ hyphens: [
                {
                    hyphens: [
                        "none",
                        "manual",
                        "auto"
                    ]
                }
            ],
            /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */ content: [
                {
                    content: [
                        "none",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // -------------------
            // --- Backgrounds ---
            // -------------------
            /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */ "bg-attachment": [
                {
                    bg: [
                        "fixed",
                        "local",
                        "scroll"
                    ]
                }
            ],
            /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */ "bg-clip": [
                {
                    "bg-clip": [
                        "border",
                        "padding",
                        "content",
                        "text"
                    ]
                }
            ],
            /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */ "bg-origin": [
                {
                    "bg-origin": [
                        "border",
                        "padding",
                        "content"
                    ]
                }
            ],
            /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */ "bg-position": [
                {
                    bg: scaleBgPosition()
                }
            ],
            /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */ "bg-repeat": [
                {
                    bg: scaleBgRepeat()
                }
            ],
            /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */ "bg-size": [
                {
                    bg: scaleBgSize()
                }
            ],
            /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */ "bg-image": [
                {
                    bg: [
                        "none",
                        {
                            linear: [
                                {
                                    to: [
                                        "t",
                                        "tr",
                                        "r",
                                        "br",
                                        "b",
                                        "bl",
                                        "l",
                                        "tl"
                                    ]
                                },
                                isInteger,
                                isArbitraryVariable,
                                isArbitraryValue
                            ],
                            radial: [
                                "",
                                isArbitraryVariable,
                                isArbitraryValue
                            ],
                            conic: [
                                isInteger,
                                isArbitraryVariable,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryVariableImage,
                        isArbitraryImage
                    ]
                }
            ],
            /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */ "bg-color": [
                {
                    bg: scaleColor()
                }
            ],
            /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-from-pos": [
                {
                    from: scaleGradientStopPosition()
                }
            ],
            /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-via-pos": [
                {
                    via: scaleGradientStopPosition()
                }
            ],
            /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-to-pos": [
                {
                    to: scaleGradientStopPosition()
                }
            ],
            /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-from": [
                {
                    from: scaleColor()
                }
            ],
            /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-via": [
                {
                    via: scaleColor()
                }
            ],
            /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-to": [
                {
                    to: scaleColor()
                }
            ],
            // ---------------
            // --- Borders ---
            // ---------------
            /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */ rounded: [
                {
                    rounded: scaleRadius()
                }
            ],
            /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-s": [
                {
                    "rounded-s": scaleRadius()
                }
            ],
            /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-e": [
                {
                    "rounded-e": scaleRadius()
                }
            ],
            /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-t": [
                {
                    "rounded-t": scaleRadius()
                }
            ],
            /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-r": [
                {
                    "rounded-r": scaleRadius()
                }
            ],
            /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-b": [
                {
                    "rounded-b": scaleRadius()
                }
            ],
            /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-l": [
                {
                    "rounded-l": scaleRadius()
                }
            ],
            /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-ss": [
                {
                    "rounded-ss": scaleRadius()
                }
            ],
            /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-se": [
                {
                    "rounded-se": scaleRadius()
                }
            ],
            /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-ee": [
                {
                    "rounded-ee": scaleRadius()
                }
            ],
            /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-es": [
                {
                    "rounded-es": scaleRadius()
                }
            ],
            /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-tl": [
                {
                    "rounded-tl": scaleRadius()
                }
            ],
            /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-tr": [
                {
                    "rounded-tr": scaleRadius()
                }
            ],
            /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-br": [
                {
                    "rounded-br": scaleRadius()
                }
            ],
            /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-bl": [
                {
                    "rounded-bl": scaleRadius()
                }
            ],
            /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w": [
                {
                    border: scaleBorderWidth()
                }
            ],
            /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-x": [
                {
                    "border-x": scaleBorderWidth()
                }
            ],
            /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-y": [
                {
                    "border-y": scaleBorderWidth()
                }
            ],
            /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-s": [
                {
                    "border-s": scaleBorderWidth()
                }
            ],
            /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-e": [
                {
                    "border-e": scaleBorderWidth()
                }
            ],
            /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-t": [
                {
                    "border-t": scaleBorderWidth()
                }
            ],
            /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-r": [
                {
                    "border-r": scaleBorderWidth()
                }
            ],
            /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-b": [
                {
                    "border-b": scaleBorderWidth()
                }
            ],
            /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-l": [
                {
                    "border-l": scaleBorderWidth()
                }
            ],
            /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */ "divide-x": [
                {
                    "divide-x": scaleBorderWidth()
                }
            ],
            /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */ "divide-x-reverse": [
                "divide-x-reverse"
            ],
            /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */ "divide-y": [
                {
                    "divide-y": scaleBorderWidth()
                }
            ],
            /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */ "divide-y-reverse": [
                "divide-y-reverse"
            ],
            /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */ "border-style": [
                {
                    border: _to_consumable_array(scaleLineStyle()).concat([
                        "hidden",
                        "none"
                    ])
                }
            ],
            /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */ "divide-style": [
                {
                    divide: _to_consumable_array(scaleLineStyle()).concat([
                        "hidden",
                        "none"
                    ])
                }
            ],
            /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color": [
                {
                    border: scaleColor()
                }
            ],
            /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-x": [
                {
                    "border-x": scaleColor()
                }
            ],
            /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-y": [
                {
                    "border-y": scaleColor()
                }
            ],
            /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-s": [
                {
                    "border-s": scaleColor()
                }
            ],
            /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-e": [
                {
                    "border-e": scaleColor()
                }
            ],
            /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-t": [
                {
                    "border-t": scaleColor()
                }
            ],
            /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-r": [
                {
                    "border-r": scaleColor()
                }
            ],
            /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-b": [
                {
                    "border-b": scaleColor()
                }
            ],
            /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-l": [
                {
                    "border-l": scaleColor()
                }
            ],
            /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */ "divide-color": [
                {
                    divide: scaleColor()
                }
            ],
            /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */ "outline-style": [
                {
                    outline: _to_consumable_array(scaleLineStyle()).concat([
                        "none",
                        "hidden"
                    ])
                }
            ],
            /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */ "outline-offset": [
                {
                    "outline-offset": [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */ "outline-w": [
                {
                    outline: [
                        "",
                        isNumber,
                        isArbitraryVariableLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */ "outline-color": [
                {
                    outline: scaleColor()
                }
            ],
            // ---------------
            // --- Effects ---
            // ---------------
            /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */ shadow: [
                {
                    shadow: [
                        // Deprecated since Tailwind CSS v4.0.0
                        "",
                        "none",
                        themeShadow,
                        isArbitraryVariableShadow,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */ "shadow-color": [
                {
                    shadow: scaleColor()
                }
            ],
            /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */ "inset-shadow": [
                {
                    "inset-shadow": [
                        "none",
                        themeInsetShadow,
                        isArbitraryVariableShadow,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */ "inset-shadow-color": [
                {
                    "inset-shadow": scaleColor()
                }
            ],
            /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */ "ring-w": [
                {
                    ring: scaleBorderWidth()
                }
            ],
            /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */ "ring-w-inset": [
                "ring-inset"
            ],
            /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */ "ring-color": [
                {
                    ring: scaleColor()
                }
            ],
            /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */ "ring-offset-w": [
                {
                    "ring-offset": [
                        isNumber,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */ "ring-offset-color": [
                {
                    "ring-offset": scaleColor()
                }
            ],
            /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */ "inset-ring-w": [
                {
                    "inset-ring": scaleBorderWidth()
                }
            ],
            /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */ "inset-ring-color": [
                {
                    "inset-ring": scaleColor()
                }
            ],
            /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */ "text-shadow": [
                {
                    "text-shadow": [
                        "none",
                        themeTextShadow,
                        isArbitraryVariableShadow,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */ "text-shadow-color": [
                {
                    "text-shadow": scaleColor()
                }
            ],
            /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */ opacity: [
                {
                    opacity: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */ "mix-blend": [
                {
                    "mix-blend": _to_consumable_array(scaleBlendMode()).concat([
                        "plus-darker",
                        "plus-lighter"
                    ])
                }
            ],
            /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */ "bg-blend": [
                {
                    "bg-blend": scaleBlendMode()
                }
            ],
            /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */ "mask-clip": [
                {
                    "mask-clip": [
                        "border",
                        "padding",
                        "content",
                        "fill",
                        "stroke",
                        "view"
                    ]
                },
                "mask-no-clip"
            ],
            /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */ "mask-composite": [
                {
                    mask: [
                        "add",
                        "subtract",
                        "intersect",
                        "exclude"
                    ]
                }
            ],
            /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */ "mask-image-linear-pos": [
                {
                    "mask-linear": [
                        isNumber
                    ]
                }
            ],
            "mask-image-linear-from-pos": [
                {
                    "mask-linear-from": scaleMaskImagePosition()
                }
            ],
            "mask-image-linear-to-pos": [
                {
                    "mask-linear-to": scaleMaskImagePosition()
                }
            ],
            "mask-image-linear-from-color": [
                {
                    "mask-linear-from": scaleColor()
                }
            ],
            "mask-image-linear-to-color": [
                {
                    "mask-linear-to": scaleColor()
                }
            ],
            "mask-image-t-from-pos": [
                {
                    "mask-t-from": scaleMaskImagePosition()
                }
            ],
            "mask-image-t-to-pos": [
                {
                    "mask-t-to": scaleMaskImagePosition()
                }
            ],
            "mask-image-t-from-color": [
                {
                    "mask-t-from": scaleColor()
                }
            ],
            "mask-image-t-to-color": [
                {
                    "mask-t-to": scaleColor()
                }
            ],
            "mask-image-r-from-pos": [
                {
                    "mask-r-from": scaleMaskImagePosition()
                }
            ],
            "mask-image-r-to-pos": [
                {
                    "mask-r-to": scaleMaskImagePosition()
                }
            ],
            "mask-image-r-from-color": [
                {
                    "mask-r-from": scaleColor()
                }
            ],
            "mask-image-r-to-color": [
                {
                    "mask-r-to": scaleColor()
                }
            ],
            "mask-image-b-from-pos": [
                {
                    "mask-b-from": scaleMaskImagePosition()
                }
            ],
            "mask-image-b-to-pos": [
                {
                    "mask-b-to": scaleMaskImagePosition()
                }
            ],
            "mask-image-b-from-color": [
                {
                    "mask-b-from": scaleColor()
                }
            ],
            "mask-image-b-to-color": [
                {
                    "mask-b-to": scaleColor()
                }
            ],
            "mask-image-l-from-pos": [
                {
                    "mask-l-from": scaleMaskImagePosition()
                }
            ],
            "mask-image-l-to-pos": [
                {
                    "mask-l-to": scaleMaskImagePosition()
                }
            ],
            "mask-image-l-from-color": [
                {
                    "mask-l-from": scaleColor()
                }
            ],
            "mask-image-l-to-color": [
                {
                    "mask-l-to": scaleColor()
                }
            ],
            "mask-image-x-from-pos": [
                {
                    "mask-x-from": scaleMaskImagePosition()
                }
            ],
            "mask-image-x-to-pos": [
                {
                    "mask-x-to": scaleMaskImagePosition()
                }
            ],
            "mask-image-x-from-color": [
                {
                    "mask-x-from": scaleColor()
                }
            ],
            "mask-image-x-to-color": [
                {
                    "mask-x-to": scaleColor()
                }
            ],
            "mask-image-y-from-pos": [
                {
                    "mask-y-from": scaleMaskImagePosition()
                }
            ],
            "mask-image-y-to-pos": [
                {
                    "mask-y-to": scaleMaskImagePosition()
                }
            ],
            "mask-image-y-from-color": [
                {
                    "mask-y-from": scaleColor()
                }
            ],
            "mask-image-y-to-color": [
                {
                    "mask-y-to": scaleColor()
                }
            ],
            "mask-image-radial": [
                {
                    "mask-radial": [
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            "mask-image-radial-from-pos": [
                {
                    "mask-radial-from": scaleMaskImagePosition()
                }
            ],
            "mask-image-radial-to-pos": [
                {
                    "mask-radial-to": scaleMaskImagePosition()
                }
            ],
            "mask-image-radial-from-color": [
                {
                    "mask-radial-from": scaleColor()
                }
            ],
            "mask-image-radial-to-color": [
                {
                    "mask-radial-to": scaleColor()
                }
            ],
            "mask-image-radial-shape": [
                {
                    "mask-radial": [
                        "circle",
                        "ellipse"
                    ]
                }
            ],
            "mask-image-radial-size": [
                {
                    "mask-radial": [
                        {
                            closest: [
                                "side",
                                "corner"
                            ],
                            farthest: [
                                "side",
                                "corner"
                            ]
                        }
                    ]
                }
            ],
            "mask-image-radial-pos": [
                {
                    "mask-radial-at": scalePosition()
                }
            ],
            "mask-image-conic-pos": [
                {
                    "mask-conic": [
                        isNumber
                    ]
                }
            ],
            "mask-image-conic-from-pos": [
                {
                    "mask-conic-from": scaleMaskImagePosition()
                }
            ],
            "mask-image-conic-to-pos": [
                {
                    "mask-conic-to": scaleMaskImagePosition()
                }
            ],
            "mask-image-conic-from-color": [
                {
                    "mask-conic-from": scaleColor()
                }
            ],
            "mask-image-conic-to-color": [
                {
                    "mask-conic-to": scaleColor()
                }
            ],
            /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */ "mask-mode": [
                {
                    mask: [
                        "alpha",
                        "luminance",
                        "match"
                    ]
                }
            ],
            /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */ "mask-origin": [
                {
                    "mask-origin": [
                        "border",
                        "padding",
                        "content",
                        "fill",
                        "stroke",
                        "view"
                    ]
                }
            ],
            /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */ "mask-position": [
                {
                    mask: scaleBgPosition()
                }
            ],
            /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */ "mask-repeat": [
                {
                    mask: scaleBgRepeat()
                }
            ],
            /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */ "mask-size": [
                {
                    mask: scaleBgSize()
                }
            ],
            /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */ "mask-type": [
                {
                    "mask-type": [
                        "alpha",
                        "luminance"
                    ]
                }
            ],
            /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */ "mask-image": [
                {
                    mask: [
                        "none",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // ---------------
            // --- Filters ---
            // ---------------
            /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */ filter: [
                {
                    filter: [
                        // Deprecated since Tailwind CSS v3.0.0
                        "",
                        "none",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */ blur: [
                {
                    blur: scaleBlur()
                }
            ],
            /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */ brightness: [
                {
                    brightness: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */ contrast: [
                {
                    contrast: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */ "drop-shadow": [
                {
                    "drop-shadow": [
                        // Deprecated since Tailwind CSS v4.0.0
                        "",
                        "none",
                        themeDropShadow,
                        isArbitraryVariableShadow,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */ "drop-shadow-color": [
                {
                    "drop-shadow": scaleColor()
                }
            ],
            /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */ grayscale: [
                {
                    grayscale: [
                        "",
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */ "hue-rotate": [
                {
                    "hue-rotate": [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */ invert: [
                {
                    invert: [
                        "",
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */ saturate: [
                {
                    saturate: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */ sepia: [
                {
                    sepia: [
                        "",
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */ "backdrop-filter": [
                {
                    "backdrop-filter": [
                        // Deprecated since Tailwind CSS v3.0.0
                        "",
                        "none",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */ "backdrop-blur": [
                {
                    "backdrop-blur": scaleBlur()
                }
            ],
            /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */ "backdrop-brightness": [
                {
                    "backdrop-brightness": [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */ "backdrop-contrast": [
                {
                    "backdrop-contrast": [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */ "backdrop-grayscale": [
                {
                    "backdrop-grayscale": [
                        "",
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */ "backdrop-hue-rotate": [
                {
                    "backdrop-hue-rotate": [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */ "backdrop-invert": [
                {
                    "backdrop-invert": [
                        "",
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */ "backdrop-opacity": [
                {
                    "backdrop-opacity": [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */ "backdrop-saturate": [
                {
                    "backdrop-saturate": [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */ "backdrop-sepia": [
                {
                    "backdrop-sepia": [
                        "",
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // --------------
            // --- Tables ---
            // --------------
            /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */ "border-collapse": [
                {
                    border: [
                        "collapse",
                        "separate"
                    ]
                }
            ],
            /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */ "border-spacing": [
                {
                    "border-spacing": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */ "border-spacing-x": [
                {
                    "border-spacing-x": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */ "border-spacing-y": [
                {
                    "border-spacing-y": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */ "table-layout": [
                {
                    table: [
                        "auto",
                        "fixed"
                    ]
                }
            ],
            /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */ caption: [
                {
                    caption: [
                        "top",
                        "bottom"
                    ]
                }
            ],
            // ---------------------------------
            // --- Transitions and Animation ---
            // ---------------------------------
            /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */ transition: [
                {
                    transition: [
                        "",
                        "all",
                        "colors",
                        "opacity",
                        "shadow",
                        "transform",
                        "none",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */ "transition-behavior": [
                {
                    transition: [
                        "normal",
                        "discrete"
                    ]
                }
            ],
            /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */ duration: [
                {
                    duration: [
                        isNumber,
                        "initial",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */ ease: [
                {
                    ease: [
                        "linear",
                        "initial",
                        themeEase,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */ delay: [
                {
                    delay: [
                        isNumber,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */ animate: [
                {
                    animate: [
                        "none",
                        themeAnimate,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // ------------------
            // --- Transforms ---
            // ------------------
            /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */ backface: [
                {
                    backface: [
                        "hidden",
                        "visible"
                    ]
                }
            ],
            /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */ perspective: [
                {
                    perspective: [
                        themePerspective,
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */ "perspective-origin": [
                {
                    "perspective-origin": scalePositionWithArbitrary()
                }
            ],
            /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */ rotate: [
                {
                    rotate: scaleRotate()
                }
            ],
            /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */ "rotate-x": [
                {
                    "rotate-x": scaleRotate()
                }
            ],
            /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */ "rotate-y": [
                {
                    "rotate-y": scaleRotate()
                }
            ],
            /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */ "rotate-z": [
                {
                    "rotate-z": scaleRotate()
                }
            ],
            /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */ scale: [
                {
                    scale: scaleScale()
                }
            ],
            /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */ "scale-x": [
                {
                    "scale-x": scaleScale()
                }
            ],
            /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */ "scale-y": [
                {
                    "scale-y": scaleScale()
                }
            ],
            /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */ "scale-z": [
                {
                    "scale-z": scaleScale()
                }
            ],
            /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */ "scale-3d": [
                "scale-3d"
            ],
            /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */ skew: [
                {
                    skew: scaleSkew()
                }
            ],
            /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */ "skew-x": [
                {
                    "skew-x": scaleSkew()
                }
            ],
            /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */ "skew-y": [
                {
                    "skew-y": scaleSkew()
                }
            ],
            /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */ transform: [
                {
                    transform: [
                        isArbitraryVariable,
                        isArbitraryValue,
                        "",
                        "none",
                        "gpu",
                        "cpu"
                    ]
                }
            ],
            /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */ "transform-origin": [
                {
                    origin: scalePositionWithArbitrary()
                }
            ],
            /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */ "transform-style": [
                {
                    transform: [
                        "3d",
                        "flat"
                    ]
                }
            ],
            /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */ translate: [
                {
                    translate: scaleTranslate()
                }
            ],
            /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */ "translate-x": [
                {
                    "translate-x": scaleTranslate()
                }
            ],
            /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */ "translate-y": [
                {
                    "translate-y": scaleTranslate()
                }
            ],
            /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */ "translate-z": [
                {
                    "translate-z": scaleTranslate()
                }
            ],
            /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */ "translate-none": [
                "translate-none"
            ],
            // ---------------------
            // --- Interactivity ---
            // ---------------------
            /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */ accent: [
                {
                    accent: scaleColor()
                }
            ],
            /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */ appearance: [
                {
                    appearance: [
                        "none",
                        "auto"
                    ]
                }
            ],
            /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */ "caret-color": [
                {
                    caret: scaleColor()
                }
            ],
            /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */ "color-scheme": [
                {
                    scheme: [
                        "normal",
                        "dark",
                        "light",
                        "light-dark",
                        "only-dark",
                        "only-light"
                    ]
                }
            ],
            /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */ cursor: [
                {
                    cursor: [
                        "auto",
                        "default",
                        "pointer",
                        "wait",
                        "text",
                        "move",
                        "help",
                        "not-allowed",
                        "none",
                        "context-menu",
                        "progress",
                        "cell",
                        "crosshair",
                        "vertical-text",
                        "alias",
                        "copy",
                        "no-drop",
                        "grab",
                        "grabbing",
                        "all-scroll",
                        "col-resize",
                        "row-resize",
                        "n-resize",
                        "e-resize",
                        "s-resize",
                        "w-resize",
                        "ne-resize",
                        "nw-resize",
                        "se-resize",
                        "sw-resize",
                        "ew-resize",
                        "ns-resize",
                        "nesw-resize",
                        "nwse-resize",
                        "zoom-in",
                        "zoom-out",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */ "field-sizing": [
                {
                    "field-sizing": [
                        "fixed",
                        "content"
                    ]
                }
            ],
            /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */ "pointer-events": [
                {
                    "pointer-events": [
                        "auto",
                        "none"
                    ]
                }
            ],
            /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */ resize: [
                {
                    resize: [
                        "none",
                        "",
                        "y",
                        "x"
                    ]
                }
            ],
            /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */ "scroll-behavior": [
                {
                    scroll: [
                        "auto",
                        "smooth"
                    ]
                }
            ],
            /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-m": [
                {
                    "scroll-m": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-mx": [
                {
                    "scroll-mx": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-my": [
                {
                    "scroll-my": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-ms": [
                {
                    "scroll-ms": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-me": [
                {
                    "scroll-me": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-mt": [
                {
                    "scroll-mt": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-mr": [
                {
                    "scroll-mr": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-mb": [
                {
                    "scroll-mb": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-ml": [
                {
                    "scroll-ml": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-p": [
                {
                    "scroll-p": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-px": [
                {
                    "scroll-px": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-py": [
                {
                    "scroll-py": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-ps": [
                {
                    "scroll-ps": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pe": [
                {
                    "scroll-pe": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pt": [
                {
                    "scroll-pt": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pr": [
                {
                    "scroll-pr": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pb": [
                {
                    "scroll-pb": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pl": [
                {
                    "scroll-pl": scaleUnambiguousSpacing()
                }
            ],
            /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */ "snap-align": [
                {
                    snap: [
                        "start",
                        "end",
                        "center",
                        "align-none"
                    ]
                }
            ],
            /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */ "snap-stop": [
                {
                    snap: [
                        "normal",
                        "always"
                    ]
                }
            ],
            /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ "snap-type": [
                {
                    snap: [
                        "none",
                        "x",
                        "y",
                        "both"
                    ]
                }
            ],
            /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ "snap-strictness": [
                {
                    snap: [
                        "mandatory",
                        "proximity"
                    ]
                }
            ],
            /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */ touch: [
                {
                    touch: [
                        "auto",
                        "none",
                        "manipulation"
                    ]
                }
            ],
            /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */ "touch-x": [
                {
                    "touch-pan": [
                        "x",
                        "left",
                        "right"
                    ]
                }
            ],
            /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */ "touch-y": [
                {
                    "touch-pan": [
                        "y",
                        "up",
                        "down"
                    ]
                }
            ],
            /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */ "touch-pz": [
                "touch-pinch-zoom"
            ],
            /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */ select: [
                {
                    select: [
                        "none",
                        "text",
                        "all",
                        "auto"
                    ]
                }
            ],
            /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */ "will-change": [
                {
                    "will-change": [
                        "auto",
                        "scroll",
                        "contents",
                        "transform",
                        isArbitraryVariable,
                        isArbitraryValue
                    ]
                }
            ],
            // -----------
            // --- SVG ---
            // -----------
            /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */ fill: [
                {
                    fill: [
                        "none"
                    ].concat(_to_consumable_array(scaleColor()))
                }
            ],
            /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */ "stroke-w": [
                {
                    stroke: [
                        isNumber,
                        isArbitraryVariableLength,
                        isArbitraryLength,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */ stroke: [
                {
                    stroke: [
                        "none"
                    ].concat(_to_consumable_array(scaleColor()))
                }
            ],
            // ---------------------
            // --- Accessibility ---
            // ---------------------
            /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */ "forced-color-adjust": [
                {
                    "forced-color-adjust": [
                        "auto",
                        "none"
                    ]
                }
            ]
        },
        conflictingClassGroups: {
            overflow: [
                "overflow-x",
                "overflow-y"
            ],
            overscroll: [
                "overscroll-x",
                "overscroll-y"
            ],
            inset: [
                "inset-x",
                "inset-y",
                "start",
                "end",
                "top",
                "right",
                "bottom",
                "left"
            ],
            "inset-x": [
                "right",
                "left"
            ],
            "inset-y": [
                "top",
                "bottom"
            ],
            flex: [
                "basis",
                "grow",
                "shrink"
            ],
            gap: [
                "gap-x",
                "gap-y"
            ],
            p: [
                "px",
                "py",
                "ps",
                "pe",
                "pt",
                "pr",
                "pb",
                "pl"
            ],
            px: [
                "pr",
                "pl"
            ],
            py: [
                "pt",
                "pb"
            ],
            m: [
                "mx",
                "my",
                "ms",
                "me",
                "mt",
                "mr",
                "mb",
                "ml"
            ],
            mx: [
                "mr",
                "ml"
            ],
            my: [
                "mt",
                "mb"
            ],
            size: [
                "w",
                "h"
            ],
            "font-size": [
                "leading"
            ],
            "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction"
            ],
            "fvn-ordinal": [
                "fvn-normal"
            ],
            "fvn-slashed-zero": [
                "fvn-normal"
            ],
            "fvn-figure": [
                "fvn-normal"
            ],
            "fvn-spacing": [
                "fvn-normal"
            ],
            "fvn-fraction": [
                "fvn-normal"
            ],
            "line-clamp": [
                "display",
                "overflow"
            ],
            rounded: [
                "rounded-s",
                "rounded-e",
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-ss",
                "rounded-se",
                "rounded-ee",
                "rounded-es",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl"
            ],
            "rounded-s": [
                "rounded-ss",
                "rounded-es"
            ],
            "rounded-e": [
                "rounded-se",
                "rounded-ee"
            ],
            "rounded-t": [
                "rounded-tl",
                "rounded-tr"
            ],
            "rounded-r": [
                "rounded-tr",
                "rounded-br"
            ],
            "rounded-b": [
                "rounded-br",
                "rounded-bl"
            ],
            "rounded-l": [
                "rounded-tl",
                "rounded-bl"
            ],
            "border-spacing": [
                "border-spacing-x",
                "border-spacing-y"
            ],
            "border-w": [
                "border-w-x",
                "border-w-y",
                "border-w-s",
                "border-w-e",
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l"
            ],
            "border-w-x": [
                "border-w-r",
                "border-w-l"
            ],
            "border-w-y": [
                "border-w-t",
                "border-w-b"
            ],
            "border-color": [
                "border-color-x",
                "border-color-y",
                "border-color-s",
                "border-color-e",
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l"
            ],
            "border-color-x": [
                "border-color-r",
                "border-color-l"
            ],
            "border-color-y": [
                "border-color-t",
                "border-color-b"
            ],
            translate: [
                "translate-x",
                "translate-y",
                "translate-none"
            ],
            "translate-none": [
                "translate",
                "translate-x",
                "translate-y",
                "translate-z"
            ],
            "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-ms",
                "scroll-me",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml"
            ],
            "scroll-mx": [
                "scroll-mr",
                "scroll-ml"
            ],
            "scroll-my": [
                "scroll-mt",
                "scroll-mb"
            ],
            "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-ps",
                "scroll-pe",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl"
            ],
            "scroll-px": [
                "scroll-pr",
                "scroll-pl"
            ],
            "scroll-py": [
                "scroll-pt",
                "scroll-pb"
            ],
            touch: [
                "touch-x",
                "touch-y",
                "touch-pz"
            ],
            "touch-x": [
                "touch"
            ],
            "touch-y": [
                "touch"
            ],
            "touch-pz": [
                "touch"
            ]
        },
        conflictingClassGroupModifiers: {
            "font-size": [
                "leading"
            ]
        },
        orderSensitiveModifiers: [
            "*",
            "**",
            "after",
            "backdrop",
            "before",
            "details-content",
            "file",
            "first-letter",
            "first-line",
            "marker",
            "placeholder",
            "selection"
        ]
    };
};
var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
// src/lib/utils.ts
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return twMerge(clsx(inputs));
}
// src/components/ui/input.tsx
function Input(_param) {
    var className = _param.className, wrapperClassName = _param.wrapperClassName, type = _param.type, required = _param.required, error = _param.error, props = _object_without_properties(_param, [
        "className",
        "wrapperClassName",
        "type",
        "required",
        "error"
    ]);
    return /* @__PURE__ */ React4.createElement("div", {
        className: cn("uii:relative", wrapperClassName)
    }, /* @__PURE__ */ React4.createElement("input", _object_spread({
        "aria-invalid": error,
        type: type,
        "data-slot": "input",
        className: cn("uii:border-input uii:file:text-foreground uii:placeholder:text-muted-foreground uii:selection:bg-primary uii:selection:text-primary-foreground uii:flex uii:h-9 uii:w-full uii:min-w-0 uii:rounded-sm uii:border uii:bg-transparent uii:px-3 uii:py-1 uii:text-base uii:shadow-xs uii:transition-[color,box-shadow] uii:outline-none uii:file:inline-flex uii:file:h-7 uii:file:border-0 uii:file:bg-transparent uii:file:text-sm uii:file:font-medium uii:disabled:pointer-events-none uii:disabled:cursor-not-allowed uii:disabled:opacity-50 uii:md:text-sm", "uii:focus-visible:border-ring uii:focus-visible:ring-ring/50 uii:focus-visible:ring-[3px]", "uii:aria-invalid:ring-destructive/20 uii:dark:aria-invalid:ring-destructive/40 uii:aria-invalid:border-destructive", {
            "uii:pr-30": error
        }, className)
    }, props)), error && /* @__PURE__ */ React4.createElement("span", {
        className: "uii:absolute uii:inset-y-0 uii:right-0 uii:flex uii:items-center uii:pr-2 uii:border-l-10 uii:border-l-background uii:my-[6px] uii:pointer-events-none "
    }, /* @__PURE__ */ React4.createElement("span", {
        className: "uii:bg-destructive uii:text-white uii:px-1.5 uii:py-1.5 uii:rounded-xs uii:uppercase uii:tracking-wide uii:font-medium uii:text-xs uii:leading-none uii:font-sans"
    }, error && required ? "required" : "error")));
}
var defaultState = {
    expression: "",
    mode: "value",
    isEditing: false,
    currentValue: void 0,
    isFullScreen: false
};
var useExpressionModeStore = create(function(set, get) {
    return {
        states: {},
        setState: function(fieldName, state) {
            set(function(store) {
                return {
                    states: _object_spread_props(_object_spread({}, store.states), _define_property({}, fieldName, state))
                };
            });
        },
        getState: function(fieldName) {
            var store = get();
            return store.states[fieldName] || defaultState;
        },
        clear: function(fieldName) {
            set(function(store) {
                return {
                    states: _object_spread_props(_object_spread({}, store.states), _define_property({}, fieldName, defaultState))
                };
            });
        },
        switchToValue: function(fieldName) {
            var currentState = get().getState(fieldName);
            get().setState(fieldName, _object_spread_props(_object_spread({}, currentState), {
                mode: "value",
                isEditing: false
            }));
        },
        switchToExpression: function(fieldName) {
            var currentState = get().getState(fieldName);
            get().setState(fieldName, _object_spread_props(_object_spread({}, currentState), {
                mode: "expression",
                isEditing: false
            }));
        },
        switchToEditor: function(fieldName) {
            var currentState = get().getState(fieldName);
            get().setState(fieldName, _object_spread_props(_object_spread({}, currentState), {
                mode: "expression",
                isEditing: true
            }));
        },
        setExpression: function(fieldName, expression) {
            var currentState = get().getState(fieldName);
            get().setState(fieldName, _object_spread_props(_object_spread({}, currentState), {
                expression: expression
            }));
        },
        setEditing: function(fieldName, isEditing) {
            var currentState = get().getState(fieldName);
            get().setState(fieldName, _object_spread_props(_object_spread({}, currentState), {
                isEditing: isEditing
            }));
        },
        setFullScreen: function(fieldName, isFullScreen) {
            var currentState = get().getState(fieldName);
            get().setState(fieldName, _object_spread_props(_object_spread({}, currentState), {
                isFullScreen: isFullScreen
            }));
        },
        setCurrentValue: function(fieldName, value) {
            var currentState = get().getState(fieldName);
            get().setState(fieldName, _object_spread_props(_object_spread({}, currentState), {
                currentValue: value
            }));
        }
    };
});
// src/hooks/useExpressionMode.ts
function useExpressionMode(fieldName) {
    var store = useExpressionModeStore();
    var state = store.getState(fieldName);
    var switchToValue = useCallback(function() {
        store.switchToValue(fieldName);
    }, [
        store,
        fieldName
    ]);
    var switchToExpression = useCallback(function() {
        store.switchToExpression(fieldName);
    }, [
        store,
        fieldName
    ]);
    var switchToEditor = useCallback(function() {
        store.switchToEditor(fieldName);
    }, [
        store,
        fieldName
    ]);
    var clear = useCallback(function() {
        store.clear(fieldName);
    }, [
        store,
        fieldName
    ]);
    var setExpression = useCallback(function(expr) {
        store.setExpression(fieldName, expr);
    }, [
        store,
        fieldName
    ]);
    var setEditing = useCallback(function(editing) {
        store.setEditing(fieldName, editing);
    }, [
        store,
        fieldName
    ]);
    var setCurrentValue = useCallback(function(value) {
        store.setCurrentValue(fieldName, value);
    }, [
        store,
        fieldName
    ]);
    var setFullScreen = useCallback(function(isFullScreen) {
        store.setFullScreen(fieldName, isFullScreen);
    }, [
        store,
        fieldName
    ]);
    return {
        current: state.mode,
        switchToValue: switchToValue,
        switchToExpression: switchToExpression,
        switchToEditor: switchToEditor,
        clear: clear,
        isExpressionMode: state.mode === "expression",
        isEditorMode: state.isEditing,
        expression: state.expression,
        setExpression: setExpression,
        isEditing: state.isEditing,
        setEditing: setEditing,
        currentValue: state.currentValue,
        setCurrentValue: setCurrentValue,
        isFullScreen: state.isFullScreen,
        setFullScreen: setFullScreen
    };
}
function inferTypeFromMonaco(editor, monaco, expression) {
    var logPrefix = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "\uD83D\uDD37";
    return _async_to_generator(function() {
        var currentModel, markers, hasErrors, wrappedCode, tempModel, worker, client, exprIndex, position, quickInfo, extractedType, foundColon, typeParts, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, part, prevPart, typeString, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!expression.trim()) {
                        console.log("".concat(logPrefix, " Type inference skipped - no expression"));
                        return [
                            2,
                            null
                        ];
                    }
                    if (!editor.hasTextFocus()) {
                        console.log("".concat(logPrefix, " Skipping type inference - editor does not have focus"));
                        return [
                            2,
                            null
                        ];
                    }
                    console.log("".concat(logPrefix, " Running type inference, expression:"), expression);
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        5,
                        ,
                        6
                    ]);
                    currentModel = editor.getModel();
                    if (currentModel) {
                        markers = monaco.editor.getModelMarkers({
                            resource: currentModel.uri
                        });
                        hasErrors = markers.some(function(marker) {
                            return marker.severity === monaco.MarkerSeverity.Error;
                        });
                        if (hasErrors) {
                            console.log("".concat(logPrefix, " Type inference skipped - expression has validation errors"));
                            return [
                                2,
                                "error"
                            ];
                        }
                    }
                    wrappedCode = "const __expr__ = (".concat(expression, ");");
                    tempModel = monaco.editor.createModel(wrappedCode, "typescript");
                    return [
                        4,
                        monaco.languages.typescript.getTypeScriptWorker()
                    ];
                case 2:
                    worker = _state.sent();
                    return [
                        4,
                        worker(tempModel.uri)
                    ];
                case 3:
                    client = _state.sent();
                    exprIndex = wrappedCode.indexOf("__expr__");
                    position = tempModel.getPositionAt(exprIndex);
                    return [
                        4,
                        client.getQuickInfoAtPosition(tempModel.uri.toString(), tempModel.getOffsetAt(position))
                    ];
                case 4:
                    quickInfo = _state.sent();
                    console.log("".concat(logPrefix, " QuickInfo response:"), quickInfo);
                    extractedType = null;
                    if (quickInfo && quickInfo.displayParts) {
                        foundColon = false;
                        typeParts = [];
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = quickInfo.displayParts[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                part = _step.value;
                                if (foundColon) typeParts.push(part);
                                if (part.kind === "punctuation" && part.text === ":" && !foundColon) {
                                    prevPart = quickInfo.displayParts[quickInfo.displayParts.indexOf(part) - 1];
                                    if (prevPart && (prevPart.kind === "localName" || prevPart.kind === "parameterName")) {
                                        foundColon = true;
                                    }
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                        if (typeParts.length > 0) {
                            typeString = typeParts.map(function(p) {
                                return p.text;
                            }).join("").trim();
                            console.log("".concat(logPrefix, " Extracted type:"), typeString);
                            if (typeString && typeString !== "any") {
                                extractedType = typeString;
                            }
                        }
                    }
                    tempModel.dispose();
                    return [
                        2,
                        extractedType
                    ];
                case 5:
                    error = _state.sent();
                    console.warn("".concat(logPrefix, " Type inference failed:"), error);
                    return [
                        2,
                        null
                    ];
                case 6:
                    return [
                        2
                    ];
            }
        });
    })();
}
var InlineEditorOptions = {
    fontSize: "14px",
    // md:text-sm
    fontWeight: "normal",
    wordWrap: "off",
    lineNumbers: "off",
    lineNumbersMinChars: 0,
    overviewRulerLanes: 0,
    overviewRulerBorder: false,
    hideCursorInOverviewRuler: true,
    lineDecorationsWidth: 0,
    glyphMargin: false,
    folding: false,
    scrollBeyondLastColumn: 0,
    scrollbar: {
        horizontal: "hidden",
        vertical: "hidden",
        alwaysConsumeMouseWheel: false
    },
    find: {
        addExtraSpaceOnTop: false,
        autoFindInSelection: "never",
        seedSearchStringFromSelection: false
    },
    minimap: {
        enabled: false
    },
    wordBasedSuggestions: true,
    // Enable for better UX
    links: false,
    occurrencesHighlight: false,
    cursorStyle: "line",
    // Match input cursor
    renderLineHighlight: "none",
    contextmenu: false,
    roundedSelection: false,
    hover: {
        delay: 300
    },
    acceptSuggestionOnEnter: "on",
    automaticLayout: true,
    fixedOverflowWidgets: true,
    // Match Input component styling
    padding: {
        top: 4,
        bottom: 4
    },
    // py-1 equivalent
    fontFamily: "inherit",
    // Use system font
    letterSpacing: "normal",
    lineHeight: "normal"
};
var FullPanelEditorOptions = {
    fontSize: "14px",
    fontWeight: "normal",
    wordWrap: "on",
    lineNumbers: "on",
    lineNumbersMinChars: 3,
    overviewRulerLanes: 3,
    overviewRulerBorder: true,
    hideCursorInOverviewRuler: false,
    lineDecorationsWidth: 10,
    glyphMargin: true,
    folding: true,
    scrollBeyondLastColumn: 5,
    scrollbar: {
        horizontal: "auto",
        vertical: "auto",
        alwaysConsumeMouseWheel: false
    },
    find: {
        addExtraSpaceOnTop: false,
        autoFindInSelection: "never",
        seedSearchStringFromSelection: false
    },
    minimap: {
        enabled: true
    },
    wordBasedSuggestions: true,
    links: true,
    occurrencesHighlight: true,
    cursorStyle: "line",
    renderLineHighlight: "line",
    contextmenu: true,
    roundedSelection: true,
    hover: {
        delay: 300
    },
    // IMPORTANT: Don't accept suggestions on Enter - let Enter create new lines
    acceptSuggestionOnEnter: "off",
    automaticLayout: true,
    fixedOverflowWidgets: true,
    readOnly: false,
    // Explicitly allow editing
    domReadOnly: false
};
function InlineExpressionEditor(param) {
    var value = param.value, onChange = param.onChange, onBlur = param.onBlur, onEnter = param.onEnter, onTypeInferred = param.onTypeInferred, onValidationChange = param.onValidationChange, _param_context = param.context, context = _param_context === void 0 ? {} : _param_context, className = param.className, _param_placeholder = param.placeholder, placeholder = _param_placeholder === void 0 ? "Enter expression..." : _param_placeholder;
    var editorRef = useRef(null);
    var monacoRef = useRef(null);
    var typeInferenceTimeoutRef = useRef(null);
    var handleEditorWillMount = function(monaco) {
        monacoRef.current = monaco;
        var contextKeys = Object.keys(context);
        if (contextKeys.length > 0) {
            monaco.languages.typescript.javascriptDefaults.addExtraLib("\n        declare const ".concat(contextKeys.join(", "), ": any;\n      "), "context.d.ts");
        }
    };
    var handleEditorDidMount = function(editor, monaco) {
        editorRef.current = editor;
        editor.updateOptions(InlineEditorOptions);
        console.log("\uD83D\uDD37 Inline editor mounted!");
        editor.getDomNode();
        var findCommand = editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_F, function() {});
        var enterKeyDisposable = editor.onKeyDown(function(e) {
            if (e.keyCode === monaco.KeyCode.Enter) {
                var _editor__contentWidgets, _contextKeyService_getContextKeyValue;
                if (!editor.hasTextFocus()) {
                    console.log("\uD83D\uDD37 Enter keydown but inline editor does NOT have focus - allowing default");
                    return;
                }
                if (e.shiftKey) {
                    console.log("\uD83D\uDD37 Shift+Enter in INLINE editor - switching to full-screen");
                    e.preventDefault();
                    e.stopPropagation();
                    if (onEnter) {
                        onEnter();
                    }
                    return;
                }
                var suggestWidget = (_editor__contentWidgets = editor._contentWidgets) === null || _editor__contentWidgets === void 0 ? void 0 : _editor__contentWidgets["editor.widget.suggestWidget"];
                var isSuggestVisible = (suggestWidget === null || suggestWidget === void 0 ? void 0 : suggestWidget.widget) && !suggestWidget.widget._hidden && suggestWidget.widget.state !== void 0 && suggestWidget.widget.state !== 0;
                var contextKeyService = editor._contextKeyService;
                var suggestWidgetVisible = contextKeyService === null || contextKeyService === void 0 ? void 0 : (_contextKeyService_getContextKeyValue = contextKeyService.getContextKeyValue) === null || _contextKeyService_getContextKeyValue === void 0 ? void 0 : _contextKeyService_getContextKeyValue.call(contextKeyService, "suggestWidgetVisible");
                if (isSuggestVisible || suggestWidgetVisible) {
                    console.log("\uD83D\uDD37 Enter in INLINE editor - accepting autocomplete");
                    e.preventDefault();
                    e.stopPropagation();
                    editor.trigger("", "acceptSelectedSuggestion");
                } else {
                    console.log("\uD83D\uDD37 Enter in INLINE editor - blurring (finishing edit)");
                    e.preventDefault();
                    e.stopPropagation();
                    onBlur === null || onBlur === void 0 ? void 0 : onBlur({});
                }
            }
        });
        editor.onDidPaste(function(e) {
            if (e.endLineNumber <= 1) {
                return;
            }
            var newContent = "";
            var textModel = editor.getModel();
            var lineCount = textModel.getLineCount();
            for(var i = 0; i < lineCount; i += 1){
                newContent += textModel.getLineContent(i + 1);
            }
            textModel.setValue(newContent);
            editor.setPosition({
                column: newContent.length + 1,
                lineNumber: 1
            });
        });
        editor.onDidBlurEditorText(function(e) {
            var currentValue = editor.getValue();
            onBlur === null || onBlur === void 0 ? void 0 : onBlur(_object_spread_props(_object_spread({}, e), {
                currentValue: currentValue
            }));
        });
        editor.onDidChangeModelContent(function() {
            var model = editor.getModel();
            if (model) {
                if (onValidationChange) {
                    var markers = monaco.editor.getModelMarkers({
                        resource: model.uri
                    });
                    var hasErrors = markers.some(function(marker) {
                        return marker.severity === monaco.MarkerSeverity.Error;
                    });
                    onValidationChange(!hasErrors, markers);
                }
                if (onTypeInferred) {
                    if (typeInferenceTimeoutRef.current) {
                        clearTimeout(typeInferenceTimeoutRef.current);
                    }
                    console.log("\uD83D\uDD37 Content changed - debouncing type inference");
                    typeInferenceTimeoutRef.current = setTimeout(function() {
                        return _async_to_generator(function() {
                            var expressionToAnalyze, inferredType;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        expressionToAnalyze = model.getValue();
                                        return [
                                            4,
                                            inferTypeFromMonaco(editor, monaco, expressionToAnalyze, "\uD83D\uDD37")
                                        ];
                                    case 1:
                                        inferredType = _state.sent();
                                        if (inferredType) {
                                            onTypeInferred(inferredType);
                                        }
                                        return [
                                            2
                                        ];
                                }
                            });
                        })();
                    }, 200);
                }
            }
        });
        var markerChangeDisposable = monaco.editor.onDidChangeMarkers(function(uris) {
            var model = editor.getModel();
            if (!model || !onTypeInferred) return;
            var isOurModel = uris.some(function(uri) {
                return uri.toString() === model.uri.toString();
            });
            if (!isOurModel) return;
            var markers = monaco.editor.getModelMarkers({
                resource: model.uri
            });
            var hasErrors = markers.some(function(marker) {
                return marker.severity === monaco.MarkerSeverity.Error;
            });
            console.log("\uD83D\uDD37 Monaco markers changed - hasErrors:", hasErrors);
            if (hasErrors) {
                if (typeInferenceTimeoutRef.current) {
                    clearTimeout(typeInferenceTimeoutRef.current);
                    typeInferenceTimeoutRef.current = null;
                }
                console.log("\uD83D\uDD37 ERROR detected - immediately setting type to error");
                onTypeInferred("error");
            } else {
                if (typeInferenceTimeoutRef.current) {
                    clearTimeout(typeInferenceTimeoutRef.current);
                }
                console.log("\uD83D\uDD37 Errors cleared - triggering type inference");
                typeInferenceTimeoutRef.current = setTimeout(function() {
                    return _async_to_generator(function() {
                        var expressionToAnalyze, inferredType;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    expressionToAnalyze = model.getValue();
                                    return [
                                        4,
                                        inferTypeFromMonaco(editor, monaco, expressionToAnalyze, "\uD83D\uDD37")
                                    ];
                                case 1:
                                    inferredType = _state.sent();
                                    if (inferredType) {
                                        onTypeInferred(inferredType);
                                    }
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }, 100);
            }
        });
        editor.addCommand(monaco.KeyCode.F1, function() {});
        var cursorDisposable = editor.onDidChangeCursorPosition(function() {
            return _async_to_generator(function() {
                var model, expressionToAnalyze, inferredType;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!(onTypeInferred && editor.hasTextFocus())) return [
                                3,
                                2
                            ];
                            model = editor.getModel();
                            if (!(model && model.getValue().trim())) return [
                                3,
                                2
                            ];
                            if (typeInferenceTimeoutRef.current) {
                                clearTimeout(typeInferenceTimeoutRef.current);
                            }
                            expressionToAnalyze = model.getValue();
                            return [
                                4,
                                inferTypeFromMonaco(editor, monaco, expressionToAnalyze, "\uD83D\uDD37")
                            ];
                        case 1:
                            inferredType = _state.sent();
                            if (inferredType) {
                                onTypeInferred(inferredType);
                            }
                            _state.label = 2;
                        case 2:
                            return [
                                2
                            ];
                    }
                });
            })();
        });
        editor.setPosition({
            lineNumber: 1,
            column: 999999
        });
        window.requestAnimationFrame(function() {
            editor.focus();
            setTimeout(function() {
                return _async_to_generator(function() {
                    var model, markers, hasErrors, expressionToAnalyze, inferredType;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                model = editor.getModel();
                                if (!(onTypeInferred && model && model.getValue())) return [
                                    3,
                                    3
                                ];
                                console.log("\uD83D\uDD37 Triggering initial type inference for inline editor");
                                markers = monaco.editor.getModelMarkers({
                                    resource: model.uri
                                });
                                hasErrors = markers.some(function(marker) {
                                    return marker.severity === monaco.MarkerSeverity.Error;
                                });
                                if (!hasErrors) return [
                                    3,
                                    1
                                ];
                                onTypeInferred("error");
                                return [
                                    3,
                                    3
                                ];
                            case 1:
                                expressionToAnalyze = model.getValue();
                                return [
                                    4,
                                    inferTypeFromMonaco(editor, monaco, expressionToAnalyze, "\uD83D\uDD37")
                                ];
                            case 2:
                                inferredType = _state.sent();
                                if (inferredType) {
                                    onTypeInferred(inferredType);
                                }
                                _state.label = 3;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }, 100);
        });
        editorRef.current._inlineDisposables = {
            enterKeyDisposable: enterKeyDisposable,
            findCommand: findCommand,
            markerChangeDisposable: markerChangeDisposable,
            cursorDisposable: cursorDisposable
        };
    };
    useEffect(function() {
        return function() {
            if (editorRef.current) {
                console.log("\uD83D\uDD37 Inline editor unmounting - cleaning up");
                if (typeInferenceTimeoutRef.current) {
                    clearTimeout(typeInferenceTimeoutRef.current);
                }
                if (editorRef.current._inlineDisposables) {
                    var _disposables_enterKeyDisposable_dispose, _disposables_enterKeyDisposable, _disposables_findCommand_dispose, _disposables_findCommand, _disposables_markerChangeDisposable_dispose, _disposables_markerChangeDisposable, _disposables_cursorDisposable_dispose, _disposables_cursorDisposable;
                    var disposables = editorRef.current._inlineDisposables;
                    (_disposables_enterKeyDisposable = disposables.enterKeyDisposable) === null || _disposables_enterKeyDisposable === void 0 ? void 0 : (_disposables_enterKeyDisposable_dispose = _disposables_enterKeyDisposable.dispose) === null || _disposables_enterKeyDisposable_dispose === void 0 ? void 0 : _disposables_enterKeyDisposable_dispose.call(_disposables_enterKeyDisposable);
                    (_disposables_findCommand = disposables.findCommand) === null || _disposables_findCommand === void 0 ? void 0 : (_disposables_findCommand_dispose = _disposables_findCommand.dispose) === null || _disposables_findCommand_dispose === void 0 ? void 0 : _disposables_findCommand_dispose.call(_disposables_findCommand);
                    (_disposables_markerChangeDisposable = disposables.markerChangeDisposable) === null || _disposables_markerChangeDisposable === void 0 ? void 0 : (_disposables_markerChangeDisposable_dispose = _disposables_markerChangeDisposable.dispose) === null || _disposables_markerChangeDisposable_dispose === void 0 ? void 0 : _disposables_markerChangeDisposable_dispose.call(_disposables_markerChangeDisposable);
                    (_disposables_cursorDisposable = disposables.cursorDisposable) === null || _disposables_cursorDisposable === void 0 ? void 0 : (_disposables_cursorDisposable_dispose = _disposables_cursorDisposable.dispose) === null || _disposables_cursorDisposable_dispose === void 0 ? void 0 : _disposables_cursorDisposable_dispose.call(_disposables_cursorDisposable);
                }
                editorRef.current = null;
            }
        };
    }, []);
    var handleEditorChange = function(newValue) {
        onChange(newValue || "");
    };
    return /* @__PURE__ */ React4__default.createElement("div", {
        className: cn("uii:relative uii:flex-1", className)
    }, /* @__PURE__ */ React4__default.createElement(Editor, {
        theme: "vs-dark",
        height: "26px",
        language: "typescript",
        value: value,
        onChange: handleEditorChange,
        onMount: handleEditorDidMount,
        beforeMount: handleEditorWillMount,
        width: "100%",
        loading: /* @__PURE__ */ React4__default.createElement(React4__default.Fragment, null, /* @__PURE__ */ React4__default.createElement(FontAwesomeIcon, {
            icon: faSpinner,
            className: "uii:animate-spin"
        })),
        options: InlineEditorOptions,
        className: "uii:-ml-[4px] uii:-mt-[1px] inline-editor"
    }), !value && /* @__PURE__ */ React4__default.createElement("div", {
        className: "uii:absolute uii:inset-0 uii:flex uii:items-center uii:pointer-events-none uii:text-muted-foreground uii:text-sm"
    }, placeholder));
}
function FullPanelExpressionEditor(param) {
    var value = param.value, onChange = param.onChange, onClose = param.onClose, onBlur = param.onBlur, onTypeInferred = param.onTypeInferred, _param_context = param.context, context = _param_context === void 0 ? {} : _param_context, className = param.className, _param_placeholder = param.placeholder, placeholder = _param_placeholder === void 0 ? "Enter expression..." : _param_placeholder;
    var editorRef = useRef(null);
    var monacoRef = useRef(null);
    var typeInferenceTimeoutRef = useRef(null);
    var handleEditorWillMount = function(monaco) {
        monacoRef.current = monaco;
        var contextKeys = Object.keys(context);
        if (contextKeys.length > 0) {
            monaco.languages.typescript.javascriptDefaults.addExtraLib("\n        declare const ".concat(contextKeys.join(", "), ": any;\n      "), "context.d.ts");
        }
    };
    var handleFPEditorDidMount = function(editor, monaco) {
        editorRef.current = editor;
        editor.updateOptions(FullPanelEditorOptions);
        console.log("\uD83D\uDFE6 FULL-SCREEN panel editor mounted!");
        console.log("Full-screen editor is read-only?", editor.getOption(monaco.editor.EditorOption.readOnly));
        var escapeKeyDisposable = editor.onKeyDown(function(e) {
            if (e.keyCode === monaco.KeyCode.Escape) {
                console.log("\uD83D\uDFE6 Escape pressed in FULL-SCREEN editor - closing");
                e.preventDefault();
                e.stopPropagation();
                onClose();
            }
            if (e.keyCode === monaco.KeyCode.Enter) {
                var _editor__contentWidgets, _contextKeyService_getContextKeyValue;
                var suggestWidget = (_editor__contentWidgets = editor._contentWidgets) === null || _editor__contentWidgets === void 0 ? void 0 : _editor__contentWidgets["editor.widget.suggestWidget"];
                var isSuggestVisible = (suggestWidget === null || suggestWidget === void 0 ? void 0 : suggestWidget.widget) && !suggestWidget.widget._hidden && suggestWidget.widget.state !== void 0 && suggestWidget.widget.state !== 0;
                var contextKeyService = editor._contextKeyService;
                var suggestWidgetVisible = contextKeyService === null || contextKeyService === void 0 ? void 0 : (_contextKeyService_getContextKeyValue = contextKeyService.getContextKeyValue) === null || _contextKeyService_getContextKeyValue === void 0 ? void 0 : _contextKeyService_getContextKeyValue.call(contextKeyService, "suggestWidgetVisible");
                if (isSuggestVisible || suggestWidgetVisible) {
                    console.log("\uD83D\uDFE6 Enter in FULL-SCREEN - accepting autocomplete");
                    e.preventDefault();
                    e.stopPropagation();
                    editor.trigger("", "acceptSelectedSuggestion");
                } else {
                    console.log("\uD83D\uDFE6 Enter in FULL-SCREEN - allowing newline (default behavior)");
                }
            }
        });
        var changeCount = 0;
        var changeDisposable = editor.onDidChangeModelContent(function(e) {
            var _editor_getModel;
            changeCount++;
            var newValue = editor.getValue();
            console.log("\uD83D\uDFE6 FULL-SCREEN content changed (".concat(changeCount, "):"), newValue);
            console.log("\uD83D\uDFE6 Line count: ".concat((_editor_getModel = editor.getModel()) === null || _editor_getModel === void 0 ? void 0 : _editor_getModel.getLineCount()));
            if (onTypeInferred) {
                if (typeInferenceTimeoutRef.current) {
                    clearTimeout(typeInferenceTimeoutRef.current);
                }
                console.log("\uD83D\uDFE6 Content changed - debouncing type inference");
                typeInferenceTimeoutRef.current = setTimeout(function() {
                    return _async_to_generator(function() {
                        var expressionToAnalyze, inferredType;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    expressionToAnalyze = newValue;
                                    return [
                                        4,
                                        inferTypeFromMonaco(editor, monaco, expressionToAnalyze, "\uD83D\uDFE6")
                                    ];
                                case 1:
                                    inferredType = _state.sent();
                                    if (inferredType) {
                                        onTypeInferred(inferredType);
                                    }
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }, 200);
            }
        });
        var markerChangeDisposable = monaco.editor.onDidChangeMarkers(function(uris) {
            var model2 = editor.getModel();
            if (!model2 || !onTypeInferred) return;
            var isOurModel = uris.some(function(uri) {
                return uri.toString() === model2.uri.toString();
            });
            if (!isOurModel) return;
            var markers = monaco.editor.getModelMarkers({
                resource: model2.uri
            });
            var hasErrors = markers.some(function(marker) {
                return marker.severity === monaco.MarkerSeverity.Error;
            });
            console.log("\uD83D\uDFE6 Monaco markers changed - hasErrors:", hasErrors);
            if (hasErrors) {
                if (typeInferenceTimeoutRef.current) {
                    clearTimeout(typeInferenceTimeoutRef.current);
                    typeInferenceTimeoutRef.current = null;
                }
                console.log("\uD83D\uDFE6 ERROR detected - immediately setting type to error");
                onTypeInferred("error");
            } else {
                if (typeInferenceTimeoutRef.current) {
                    clearTimeout(typeInferenceTimeoutRef.current);
                }
                console.log("\uD83D\uDFE6 Errors cleared - triggering type inference");
                typeInferenceTimeoutRef.current = setTimeout(function() {
                    return _async_to_generator(function() {
                        var expressionToAnalyze, inferredType;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    expressionToAnalyze = model2.getValue();
                                    return [
                                        4,
                                        inferTypeFromMonaco(editor, monaco, expressionToAnalyze, "\uD83D\uDFE6")
                                    ];
                                case 1:
                                    inferredType = _state.sent();
                                    if (inferredType) {
                                        onTypeInferred(inferredType);
                                    }
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }, 100);
            }
        });
        editor.onDidBlurEditorText(function(e) {
            var currentValue = editor.getValue();
            onBlur === null || onBlur === void 0 ? void 0 : onBlur(_object_spread_props(_object_spread({}, e), {
                currentValue: currentValue
            }));
        });
        var model = editor.getModel();
        if (model) {
            var lineCount = model.getLineCount();
            var lastLineLength = model.getLineLength(lineCount);
            editor.setPosition({
                lineNumber: lineCount,
                column: lastLineLength + 1
            });
        }
        editor.focus();
        setTimeout(function() {
            return _async_to_generator(function() {
                var markers, hasErrors, expressionToAnalyze, inferredType;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!(onTypeInferred && model)) return [
                                3,
                                3
                            ];
                            console.log("\uD83D\uDFE6 Triggering initial type inference for full-screen editor");
                            markers = monaco.editor.getModelMarkers({
                                resource: model.uri
                            });
                            hasErrors = markers.some(function(marker) {
                                return marker.severity === monaco.MarkerSeverity.Error;
                            });
                            if (!hasErrors) return [
                                3,
                                1
                            ];
                            console.log("\uD83D\uDFE6 Initial load has error - setting type to error");
                            onTypeInferred("error");
                            return [
                                3,
                                3
                            ];
                        case 1:
                            expressionToAnalyze = model.getValue();
                            return [
                                4,
                                inferTypeFromMonaco(editor, monaco, expressionToAnalyze, "\uD83D\uDFE6")
                            ];
                        case 2:
                            inferredType = _state.sent();
                            if (inferredType) {
                                onTypeInferred(inferredType);
                            }
                            _state.label = 3;
                        case 3:
                            return [
                                2
                            ];
                    }
                });
            })();
        }, 100);
        var cursorDisposable = editor.onDidChangeCursorPosition(function() {
            return _async_to_generator(function() {
                var model2, expressionToAnalyze, inferredType;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!(onTypeInferred && editor.hasTextFocus())) return [
                                3,
                                2
                            ];
                            model2 = editor.getModel();
                            if (!(model2 && model2.getValue().trim())) return [
                                3,
                                2
                            ];
                            if (typeInferenceTimeoutRef.current) {
                                clearTimeout(typeInferenceTimeoutRef.current);
                            }
                            expressionToAnalyze = model2.getValue();
                            return [
                                4,
                                inferTypeFromMonaco(editor, monaco, expressionToAnalyze, "\uD83D\uDFE6")
                            ];
                        case 1:
                            inferredType = _state.sent();
                            if (inferredType) {
                                onTypeInferred(inferredType);
                            }
                            _state.label = 2;
                        case 2:
                            return [
                                2
                            ];
                    }
                });
            })();
        });
        editorRef.current._fullScreenDisposables = {
            escapeKeyDisposable: escapeKeyDisposable,
            changeDisposable: changeDisposable,
            markerChangeDisposable: markerChangeDisposable,
            cursorDisposable: cursorDisposable
        };
    };
    useEffect(function() {
        return function() {
            if (editorRef.current) {
                console.log("\uD83D\uDFE6 Full-screen editor unmounting - cleaning up");
                if (typeInferenceTimeoutRef.current) {
                    clearTimeout(typeInferenceTimeoutRef.current);
                }
                if (editorRef.current._fullScreenDisposables) {
                    var _disposables_escapeKeyDisposable_dispose, _disposables_escapeKeyDisposable, _disposables_changeDisposable_dispose, _disposables_changeDisposable, _disposables_markerChangeDisposable_dispose, _disposables_markerChangeDisposable, _disposables_cursorDisposable_dispose, _disposables_cursorDisposable;
                    var disposables = editorRef.current._fullScreenDisposables;
                    (_disposables_escapeKeyDisposable = disposables.escapeKeyDisposable) === null || _disposables_escapeKeyDisposable === void 0 ? void 0 : (_disposables_escapeKeyDisposable_dispose = _disposables_escapeKeyDisposable.dispose) === null || _disposables_escapeKeyDisposable_dispose === void 0 ? void 0 : _disposables_escapeKeyDisposable_dispose.call(_disposables_escapeKeyDisposable);
                    (_disposables_changeDisposable = disposables.changeDisposable) === null || _disposables_changeDisposable === void 0 ? void 0 : (_disposables_changeDisposable_dispose = _disposables_changeDisposable.dispose) === null || _disposables_changeDisposable_dispose === void 0 ? void 0 : _disposables_changeDisposable_dispose.call(_disposables_changeDisposable);
                    (_disposables_markerChangeDisposable = disposables.markerChangeDisposable) === null || _disposables_markerChangeDisposable === void 0 ? void 0 : (_disposables_markerChangeDisposable_dispose = _disposables_markerChangeDisposable.dispose) === null || _disposables_markerChangeDisposable_dispose === void 0 ? void 0 : _disposables_markerChangeDisposable_dispose.call(_disposables_markerChangeDisposable);
                    (_disposables_cursorDisposable = disposables.cursorDisposable) === null || _disposables_cursorDisposable === void 0 ? void 0 : (_disposables_cursorDisposable_dispose = _disposables_cursorDisposable.dispose) === null || _disposables_cursorDisposable_dispose === void 0 ? void 0 : _disposables_cursorDisposable_dispose.call(_disposables_cursorDisposable);
                }
                editorRef.current = null;
            }
        };
    }, []);
    var handleEditorChange = function(newValue) {
        onChange(newValue || "");
    };
    return /* @__PURE__ */ React4__default.createElement("div", {
        className: cn("uii:relative uii:border uii:rounded-md uii:bg-background", className)
    }, /* @__PURE__ */ React4__default.createElement("div", {
        className: "uii:flex uii:items-center uii:justify-between uii:p-2 uii:border-b uii:bg-muted/50"
    }, /* @__PURE__ */ React4__default.createElement("span", {
        className: "uii:text-sm uii:font-medium"
    }, "Expression Editor"), /* @__PURE__ */ React4__default.createElement("button", {
        type: "button",
        onClick: onClose,
        className: "uii:text-muted-foreground hover:uii:text-foreground uii:p-1 uii:rounded uii:cursor-pointer uii:text-xs"
    }, "\u2715")), /* @__PURE__ */ React4__default.createElement(Editor, {
        height: "300px",
        theme: "vs-dark",
        language: "typescript",
        value: value,
        onChange: handleEditorChange,
        onMount: handleFPEditorDidMount,
        beforeMount: handleEditorWillMount,
        options: FullPanelEditorOptions
    }), !value && /* @__PURE__ */ React4__default.createElement("div", {
        className: "uii:absolute uii:inset-0 uii:flex uii:items-center uii:justify-center uii:pointer-events-none uii:text-muted-foreground"
    }, placeholder));
}
function useASTParser(expression, controlKey) {
    var _useState = _sliced_to_array(useState(null), 2), ast = _useState[0], setAST = _useState[1];
    var _useState1 = _sliced_to_array(useState([]), 2), tokens = _useState1[0], setTokens = _useState1[1];
    var _useState2 = _sliced_to_array(useState([]), 2), dependencies = _useState2[0], setDependencies = _useState2[1];
    var _useState3 = _sliced_to_array(useState(false), 2), isLoading = _useState3[0], setIsLoading = _useState3[1];
    var _useState4 = _sliced_to_array(useState(null), 2), error = _useState4[0], setError = _useState4[1];
    var requestIdRef = useRef(0);
    var messageHandlerRef = useRef(null);
    var controlKeyRef = useRef(controlKey || "default");
    useEffect(function() {
        controlKeyRef.current = controlKey || "default";
    }, [
        controlKey
    ]);
    useEffect(function() {
        if (typeof window === "undefined" || !navigator.serviceWorker) {
            setError("Service worker not available");
            return;
        }
        var handleMessage = function(event) {
            if (event.data.type === "AST_PARSE_RESULT") {
                var _event_data_payload = event.data.payload, id = _event_data_payload.id, controlKey2 = _event_data_payload.controlKey, result = _event_data_payload.result;
                if (id === requestIdRef.current && controlKey2 === controlKeyRef.current) {
                    console.log("Service worker AST response:", {
                        id: id,
                        controlKey: controlKey2,
                        result: result
                    });
                    setAST(result.ast);
                    setTokens(result.tokens);
                    setDependencies(result.dependencies || []);
                    setError(result.error || null);
                    setIsLoading(false);
                } else {
                    console.log("Ignoring AST response - wrong control:", {
                        receivedId: id,
                        expectedId: requestIdRef.current,
                        receivedKey: controlKey2,
                        expectedKey: controlKeyRef.current
                    });
                }
            }
        };
        messageHandlerRef.current = handleMessage;
        navigator.serviceWorker.addEventListener("message", handleMessage);
        return function() {
            if (messageHandlerRef.current) {
                navigator.serviceWorker.removeEventListener("message", messageHandlerRef.current);
            }
        };
    }, []);
    useEffect(function() {
        if (!expression.trim()) {
            setAST(null);
            setTokens([]);
            setDependencies([]);
            setError(null);
            setIsLoading(false);
            return;
        }
        if (!navigator.serviceWorker || !navigator.serviceWorker.controller) {
            setError("Service worker not ready");
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        setError(null);
        requestIdRef.current++;
        console.log("Sending expression to service worker:", {
            expression: expression.trim(),
            controlKey: controlKeyRef.current,
            id: requestIdRef.current
        });
        navigator.serviceWorker.controller.postMessage({
            type: "PARSE_AST",
            payload: {
                expression: expression.trim(),
                id: requestIdRef.current,
                controlKey: controlKeyRef.current
            }
        });
    }, [
        expression
    ]);
    return {
        ast: ast,
        tokens: tokens,
        dependencies: dependencies,
        isLoading: isLoading,
        error: error
    };
}
function ASTRenderer(param) {
    var ast = param.ast, key = param.key, className = param.className, _param_variant = param.variant, variant = _param_variant === void 0 ? "inline" : _param_variant, _param_showTokens = param.showTokens, showTokens = _param_showTokens === void 0 ? false : _param_showTokens, _param_tokens = param.tokens, tokens = _param_tokens === void 0 ? [] : _param_tokens;
    var getNodeColor = function(type) {
        switch(type){
            case "StringLiteral":
                return "uii:text-green-600 uii:bg-green-100";
            case "NumericLiteral":
                return "uii:text-purple-600 uii:bg-purple-100";
            case "Identifier":
                return "uii:text-blue-600 uii:bg-blue-100";
            case "Keyword":
            case "Literal":
                return "uii:text-orange-600 uii:bg-orange-100";
            case "BinaryExpression":
                return "uii:text-gray-700 uii:bg-gray-100";
            case "CallExpression":
                return "uii:text-indigo-600 uii:bg-indigo-100";
            case "MemberExpression":
                return "uii:text-cyan-600 uii:bg-cyan-100";
            case "UnaryExpression":
                return "uii:text-pink-600 uii:bg-pink-100";
            case "ParenthesizedExpression":
                return "uii:text-yellow-600 uii:bg-yellow-100";
            default:
                return "uii:text-gray-600 uii:bg-gray-100";
        }
    };
    var renderInlineNode = function(node) {
        var depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        if (depth > 2) return null;
        if (node.type === "Identifier") {
            return /* @__PURE__ */ React4__default.createElement("span", {
                key: "".concat(node.start, "-").concat(node.end),
                className: "uii:inline-flex uii:items-center uii:mr-1"
            }, /* @__PURE__ */ React4__default.createElement("span", {
                className: "uii:px-1 uii:py-0.5 uii:rounded uii:text-xs uii:bg-blue-100 uii:text-blue-800 uii:font-mono"
            }, node.name || node.value));
        }
        if (node.type === "StringLiteral" || node.type === "NumericLiteral") {
            return /* @__PURE__ */ React4__default.createElement("span", {
                key: "".concat(node.start, "-").concat(node.end),
                className: "uii:inline-flex uii:items-center uii:mr-1"
            }, /* @__PURE__ */ React4__default.createElement("span", {
                className: "uii:px-1 uii:py-0.5 uii:rounded uii:text-xs uii:bg-green-100 uii:text-green-800 uii:font-mono"
            }, node.value));
        }
        if (node.type === "BinaryExpression") {
            return /* @__PURE__ */ React4__default.createElement("span", {
                key: "".concat(node.start, "-").concat(node.end),
                className: "uii:inline-flex uii:items-center uii:mr-1"
            }, node.left && renderInlineNode(node.left, depth + 1), /* @__PURE__ */ React4__default.createElement("span", {
                className: "uii:px-1 uii:py-0.5 uii:rounded uii:text-xs uii:bg-purple-100 uii:text-purple-800 uii:font-mono uii:mx-1"
            }, node.operator), node.right && renderInlineNode(node.right, depth + 1));
        }
        if (node.type === "CallExpression") {
            return /* @__PURE__ */ React4__default.createElement("span", {
                key: "".concat(node.start, "-").concat(node.end),
                className: "uii:inline-flex uii:items-center uii:mr-1"
            }, node.callee && renderInlineNode(node.callee, depth + 1), /* @__PURE__ */ React4__default.createElement("span", {
                className: "text-xs text-gray-600"
            }, "()"));
        }
        if (node.type === "PropertyAccessExpression") {
            return /* @__PURE__ */ React4__default.createElement("span", {
                key: "".concat(node.start, "-").concat(node.end),
                className: "uii:inline-flex uii:items-center uii:mr-1"
            }, node.object && renderInlineNode(node.object, depth + 1), /* @__PURE__ */ React4__default.createElement("span", {
                className: "text-xs text-gray-600"
            }, "."), node.property && renderInlineNode(node.property, depth + 1));
        }
        return /* @__PURE__ */ React4__default.createElement("span", {
            key: "".concat(node.start, "-").concat(node.end),
            className: "uii:inline-flex uii:items-center uii:mr-1"
        }, /* @__PURE__ */ React4__default.createElement("span", {
            className: "px-1 py-0.5 rounded text-xs bg-gray-100 text-gray-600 font-mono"
        }, node.type));
    };
    var renderTreeNode = function(node) {
        var depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        if (depth > 4) return null;
        var indent = "  ".repeat(depth);
        return /* @__PURE__ */ React4__default.createElement("div", {
            key: "".concat(node.start, "-").concat(node.end),
            className: "font-mono text-xs"
        }, /* @__PURE__ */ React4__default.createElement("div", {
            className: "uii:flex uii:items-start uii:gap-2"
        }, /* @__PURE__ */ React4__default.createElement("span", {
            className: "uii:text-gray-400"
        }, indent), /* @__PURE__ */ React4__default.createElement("span", {
            className: cn("uii:px-1 uii:py-0.5 uii:rounded uii:text-xs uii:font-semibold", getNodeColor(node.type))
        }, node.type), node.value && /* @__PURE__ */ React4__default.createElement("span", {
            className: "uii:text-green-600"
        }, '"', node.value, '"'), node.operator && /* @__PURE__ */ React4__default.createElement("span", {
            className: "uii:text-purple-600"
        }, node.operator), node.name && /* @__PURE__ */ React4__default.createElement("span", {
            className: "uii:text-blue-600"
        }, node.name)), node.left && /* @__PURE__ */ React4__default.createElement("div", {
            className: "uii:ml-2"
        }, /* @__PURE__ */ React4__default.createElement("span", {
            className: "uii:text-gray-500 uii:text-xs"
        }, "left: "), renderTreeNode(node.left, depth + 1)), node.right && /* @__PURE__ */ React4__default.createElement("div", {
            className: "uii:ml-2"
        }, /* @__PURE__ */ React4__default.createElement("span", {
            className: "uii:text-gray-500 uii:text-xs"
        }, "right: "), renderTreeNode(node.right, depth + 1)), node.argument && /* @__PURE__ */ React4__default.createElement("div", {
            className: "uii:ml-2"
        }, /* @__PURE__ */ React4__default.createElement("span", {
            className: "uii:text-gray-500 uii:text-xs"
        }, "arg: "), renderTreeNode(node.argument, depth + 1)), node.object && /* @__PURE__ */ React4__default.createElement("div", {
            className: "uii:ml-2"
        }, /* @__PURE__ */ React4__default.createElement("span", {
            className: "uii:text-gray-500 uii:text-xs"
        }, "obj: "), renderTreeNode(node.object, depth + 1)), node.property && /* @__PURE__ */ React4__default.createElement("div", {
            className: "uii:ml-2"
        }, /* @__PURE__ */ React4__default.createElement("span", {
            className: "uii:text-gray-500 uii:text-xs"
        }, "prop: "), renderTreeNode(node.property, depth + 1)), node.index && /* @__PURE__ */ React4__default.createElement("div", {
            className: "uii:ml-2"
        }, /* @__PURE__ */ React4__default.createElement("span", {
            className: "uii:text-gray-500 uii:text-xs"
        }, "idx: "), renderTreeNode(node.index, depth + 1)), !node.left && !node.right && !node.argument && !node.object && !node.property && !node.index && node.children && node.children.length > 0 && /* @__PURE__ */ React4__default.createElement("div", {
            className: "uii:ml-2"
        }, node.children.slice(0, 3).map(function(child, index) {
            return renderTreeNode(child, depth + 1);
        }), node.children.length > 3 && /* @__PURE__ */ React4__default.createElement("div", {
            className: "uii:ml-2 uii:text-gray-500 uii:text-xs"
        }, "... and ", node.children.length - 3, " more")));
    };
    var renderTokens = function() {
        if (tokens.length === 0) return null;
        var displayTokens = tokens.slice(0, 10);
        return /* @__PURE__ */ React4__default.createElement("div", {
            className: "uii:space-y-2"
        }, /* @__PURE__ */ React4__default.createElement("div", {
            className: "uii:text-sm uii:font-semibold uii:text-gray-700"
        }, "Tokens ", tokens.length > 10 && "(".concat(tokens.length, " total)"), ":"), /* @__PURE__ */ React4__default.createElement("div", {
            className: "uii:flex uii:flex-wrap uii:gap-1"
        }, displayTokens.map(function(token, index) {
            return /* @__PURE__ */ React4__default.createElement("span", {
                key: index,
                className: cn("uii:px-1 uii:py-0.5 uii:rounded uii:text-xs uii:font-mono", token.type.includes("Keyword") && "uii:bg-blue-100 uii:text-blue-800", token.type.includes("Identifier") && "uii:bg-green-100 uii:text-green-800", token.type.includes("String") && "uii:bg-yellow-100 uii:text-yellow-800", token.type.includes("Numeric") && "uii:bg-purple-100 uii:text-purple-800", token.type.includes("Punctuation") && "uii:bg-gray-100 uii:text-gray-800", "uii:bg-gray-100 uii:text-gray-600")
            }, token.value);
        }), tokens.length > 10 && /* @__PURE__ */ React4__default.createElement("span", {
            className: "uii:px-1 uii:py-0.5 uii:rounded uii:text-xs uii:bg-gray-200 uii:text-gray-600"
        }, "+", tokens.length - 10, " more")));
    };
    if (!ast) {
        return /* @__PURE__ */ React4__default.createElement("div", {
            className: cn("uii:text-gray-500 uii:text-sm uii:italic", className)
        }, "No AST available");
    }
    if (variant === "inline") {
        return /* @__PURE__ */ React4__default.createElement("div", {
            className: cn("uii:inline-flex uii:items-center uii:gap-2", className)
        }, renderInlineNode(ast));
    }
    if (variant === "compact") {
        return /* @__PURE__ */ React4__default.createElement("div", {
            className: cn("uii:space-y-2", className)
        }, /* @__PURE__ */ React4__default.createElement("div", {
            className: "uii:flex uii:flex-wrap uii:gap-1"
        }, renderInlineNode(ast)), showTokens && renderTokens());
    }
    return /* @__PURE__ */ React4__default.createElement("div", {
        className: cn("uii:space-y-3", className)
    }, /* @__PURE__ */ React4__default.createElement("div", {
        className: "uii:space-y-2"
    }, /* @__PURE__ */ React4__default.createElement("div", {
        className: "uii:text-sm uii:font-semibold uii:text-gray-700"
    }, "AST Tree:"), /* @__PURE__ */ React4__default.createElement("div", {
        className: "uii:p-3 uii:border uii:rounded-md uii:bg-gray-50 uii:max-h-64 uii:overflow-auto"
    }, renderTreeNode(ast))), showTokens && renderTokens());
}
function ExpressionWrapper(param) {
    var label = param.label, value = param.value, type = param.type, _param_valuesLoading = param.valuesLoading, valuesLoading = _param_valuesLoading === void 0 ? false : _param_valuesLoading, key = param.key, onValueChange = param.onValueChange, onDependenciesChange = param.onDependenciesChange, metadata = param.metadata, children = param.children, fieldName = param.fieldName, _param_expressionContext = param.expressionContext, expressionContext = _param_expressionContext === void 0 ? {} : _param_expressionContext, availableNodes = param.availableNodes, myInterface = param.myInterface, contextTypeDefinitions = param.contextTypeDefinitions, _param_inlineEditor = param.inlineEditor, inlineEditor = _param_inlineEditor === void 0 ? true : _param_inlineEditor, className = param.className, editorClassName = param.editorClassName, _param_expressionPlaceholder = param.expressionPlaceholder, expressionPlaceholder = _param_expressionPlaceholder === void 0 ? "Enter expression..." : _param_expressionPlaceholder, evaluateExpression = param.evaluateExpression, expressionResult = param.expressionResult, _param_isEvaluating = param.isEvaluating, isEvaluating = _param_isEvaluating === void 0 ? false : _param_isEvaluating, _param_isExpressionValid = param.isExpressionValid, isExpressionValid = _param_isExpressionValid === void 0 ? true : _param_isExpressionValid, _param_expectedType = param.expectedType, expectedType = _param_expectedType === void 0 ? "any" : _param_expectedType;
    var _useState = _sliced_to_array(useState(function() {
        var initialMetadata = metadata || {
            expression: "",
            mode: "value",
            isEditing: false,
            isFullScreen: false,
            value: void 0
        };
        return _object_spread_props(_object_spread({}, initialMetadata), {
            isEditing: false,
            isFullScreen: false,
            mode: "value"
        });
    }), 2), expressionMetadata = _useState[0], setExpressionMetadata = _useState[1];
    var _useState1 = _sliced_to_array(useState(value && (typeof value === "undefined" ? "undefined" : _type_of(value)) === "object" && "expression" in value && "type" in value && value.type === "expression" ? value.value : value), 2), originalValue = _useState1[0], setOriginalValue = _useState1[1];
    var _useState2 = _sliced_to_array(useState(value && (typeof value === "undefined" ? "undefined" : _type_of(value)) === "object" && "expression" in value && "type" in value && value.type === "expression" ? value.value : value), 2), currentValue = _useState2[0], setCurrentValue = _useState2[1];
    var formatValue = useCallback(function(value2) {
        switch(type){
            case "float":
                {
                    return typeof value2 === "string" && !isNaN(parseFloat(value2)) ? parseFloat(value2) : value2;
                }
            case "integer":
            case "number":
                {
                    return typeof value2 === "string" && !isNaN(parseInt(value2)) ? parseInt(value2) : value2;
                }
            case "string[]":
                {
                    return typeof value2 === "string" ? value2.split(",") : value2;
                }
            case "string":
            default:
                {
                    return value2;
                }
        }
    }, [
        type
    ]);
    var _useState3 = _sliced_to_array(useState(), 2), currentEditorValue = _useState3[0], setCurrentEditorValue = _useState3[1];
    var currentExpressionValueExt = useExpressionModeStore.getState().getState(fieldName).expression;
    useEffect(function() {
        if (metadata) {
            setExpressionMetadata(_object_spread_props(_object_spread({}, metadata), {
                // Don't restore editing/fullscreen state from metadata
                // User needs to explicitly click to edit
                isEditing: false,
                isFullScreen: false
            }));
        }
    }, [
        metadata
    ]);
    var isExpressionValue = useMemo(function() {
        return value && (typeof value === "undefined" ? "undefined" : _type_of(value)) === "object" && "expression" in value && "type" in value && value.type === "expression";
    }, [
        value
    ]);
    var isInitialMount = useRef(true);
    useEffect(function() {
        if (value && (typeof value === "undefined" ? "undefined" : _type_of(value)) === "object" && "expression" in value && "type" in value && value.type === "expression") {
            var exprValue = value.value;
            var exprString = value.expression;
            if (exprValue !== void 0) {
                setCurrentValue(formatValue(exprValue));
                setOriginalValue(formatValue(exprValue));
            }
            if (exprString && expressionMode.expression !== exprString) {
                expressionMode.setExpression(exprString);
                if (isInitialMount.current && !expressionMode.isEditing) {
                    expressionMode.switchToExpression();
                }
            }
            var isMetadataOutOfSync = !metadata || metadata.expression !== exprString || metadata.mode === "value" || // If value has expression but mode is 'value', it's out of sync
            metadata.isEditing === true || // Should never start editing on load
            metadata.isFullScreen === true;
            if (isInitialMount.current && isMetadataOutOfSync) {
                var syncedMetadata = {
                    expression: exprString || "",
                    value: formatValue(exprValue),
                    mode: "expression",
                    // Show expression display (not editing)
                    isEditing: false,
                    isFullScreen: false
                };
                setTimeout(function() {
                    onValueChange(value, _object_spread_props(_object_spread({}, syncedMetadata), {
                        value: formatValue(value)
                    }));
                }, 0);
            }
        } else {
            if (!valuesLoading) {
                setCurrentValue(formatValue(value));
                setOriginalValue(formatValue(value));
                if (isInitialMount.current && ((metadata === null || metadata === void 0 ? void 0 : metadata.expression) || (metadata === null || metadata === void 0 ? void 0 : metadata.mode) === "expression")) {
                    var syncedMetadata1 = {
                        expression: "",
                        value: formatValue(value),
                        mode: "value",
                        isEditing: false,
                        isFullScreen: false
                    };
                    setTimeout(function() {
                        onValueChange(formatValue(value), _object_spread_props(_object_spread({}, syncedMetadata1), {
                            value: formatValue(value)
                        }));
                    }, 0);
                }
            }
        }
        if (isInitialMount.current) {
            setTimeout(function() {
                isInitialMount.current = false;
            }, 100);
        }
    }, [
        value,
        valuesLoading
    ]);
    var expressionMode = useExpressionMode(fieldName);
    var _useASTParser = useASTParser(expressionMode.expression, fieldName), ast = _useASTParser.ast, tokens = _useASTParser.tokens, dependencies = _useASTParser.dependencies, isParsing = _useASTParser.isLoading, parseError = _useASTParser.error;
    var dependencyList = useMemo(function() {
        if (!ast || dependencies.length === 0) {
            return [];
        }
        return dependencies.map(function(dep) {
            return {
                name: dep,
                exists: expressionContext ? dep in expressionContext : false,
                value: expressionContext ? expressionContext[dep] : void 0
            };
        });
    }, [
        dependencies,
        expressionContext,
        ast
    ]);
    var _useState4 = _sliced_to_array(useState(null), 2), typeScriptInferredType = _useState4[0], setTypeScriptInferredType = _useState4[1];
    var handleTypeInferred = useCallback(function(type2) {
        setTypeScriptInferredType(type2);
    }, []);
    var expressionHasNewlines = useMemo(function() {
        return expressionMode.expression.includes("\n") || expressionMode.expression.includes("\r");
    }, [
        expressionMode.expression
    ]);
    var inferredReturnType = useMemo(function() {
        return typeScriptInferredType || "unknown";
    }, [
        typeScriptInferredType
    ]);
    var hasTypeMismatch = useMemo(function() {
        if (!inferredReturnType || inferredReturnType === "unknown" || inferredReturnType === "any" || inferredReturnType === "error") {
            return false;
        }
        var normalizedInferred = inferredReturnType.toLowerCase().trim();
        var normalizedExpected = (type || expectedType || "any").toLowerCase().trim();
        if (normalizedExpected === "array" && normalizedInferred.endsWith("[]")) {
            return false;
        }
        if (normalizedInferred === normalizedExpected) {
            return false;
        }
        if (normalizedExpected === "any") {
            return false;
        }
        if (normalizedExpected === "string" && (normalizedInferred.startsWith('"') || normalizedInferred.startsWith("'"))) {
            return false;
        }
        if (normalizedExpected === "number" && /^-?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(normalizedInferred)) {
            return false;
        }
        if (normalizedExpected === "integer" && /^-?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(normalizedInferred)) {
            return false;
        }
        if (normalizedExpected === "integer" && normalizedInferred === "number") {
            return false;
        }
        if (normalizedExpected === "float" && /^-?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(normalizedInferred)) {
            return false;
        }
        if (normalizedExpected === "float" && normalizedInferred === "number") {
            return false;
        }
        if (normalizedExpected === "boolean" && (normalizedInferred === "true" || normalizedInferred === "false")) {
            return false;
        }
        return true;
    }, [
        inferredReturnType,
        type,
        expectedType
    ]);
    var _useState5 = _sliced_to_array(useState(null), 2), internalExpressionResult = _useState5[0], setInternalExpressionResult = _useState5[1];
    var _useState6 = _sliced_to_array(useState(false), 2), internalIsEvaluating = _useState6[0], setInternalIsEvaluating = _useState6[1];
    var _useState7 = _sliced_to_array(useState(false), 2), isHovering = _useState7[0], setIsHovering = _useState7[1];
    var _useState8 = _sliced_to_array(useState(true), 2), internalIsExpressionValid = _useState8[0], setInternalIsExpressionValid = _useState8[1];
    var _useState9 = _sliced_to_array(useState({
        syntax: true,
        expression: true,
        context: true,
        type: true,
        security: true
    }), 2), validationState = _useState9[0], setValidationState = _useState9[1];
    var hasExpressionError = useMemo(function() {
        if (!expressionMode.expression || !expressionMode.expression.trim()) {
            return false;
        }
        if (!internalIsExpressionValid || !isExpressionValid) {
            return true;
        }
        if (parseError) {
            return true;
        }
        if (!validationState.syntax || !validationState.expression) {
            return true;
        }
        if ((expressionResult === null || expressionResult === void 0 ? void 0 : expressionResult.error) || (internalExpressionResult === null || internalExpressionResult === void 0 ? void 0 : internalExpressionResult.error)) {
            return true;
        }
        return false;
    }, [
        expressionMode.expression,
        internalIsExpressionValid,
        isExpressionValid,
        parseError,
        validationState,
        expressionResult,
        internalExpressionResult
    ]);
    var isProgrammaticallyClearing = useRef(false);
    var isSwitchingToFullScreen = useRef(false);
    var isBlur = useRef(false);
    var handleValidationChange = useCallback(function(isValid, errors) {
        setInternalIsExpressionValid(isValid);
        setValidationState(function(prev) {
            return _object_spread_props(_object_spread({}, prev), {
                syntax: isValid
            });
        });
    }, []);
    var checkForMultiLine = useCallback(function(expression) {
        var hasNewlines = expression.includes("\n");
        var isLong = expression.length > 80;
        if (!expressionMode.isFullScreen) {
            expressionMode.setFullScreen(hasNewlines || isLong);
        }
    }, [
        expressionMode.isFullScreen
    ]);
    var internalEvaluateExpression = useCallback(function(expression, context) {
        return _async_to_generator(function() {
            var result, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!evaluateExpression || !expression.trim()) return [
                            2
                        ];
                        setInternalIsEvaluating(true);
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            4,
                            5
                        ]);
                        return [
                            4,
                            evaluateExpression(expression, context)
                        ];
                    case 2:
                        result = _state.sent();
                        setInternalExpressionResult(result);
                        return [
                            3,
                            5
                        ];
                    case 3:
                        error = _state.sent();
                        setInternalExpressionResult({
                            value: null,
                            ast: {
                                kind: 0,
                                text: "",
                                color: "#ff0000"
                            },
                            error: _instanceof(error, Error) ? error.message : "Unknown error",
                            isValid: false,
                            validation: {
                                syntax: false,
                                expression: false,
                                context: false,
                                type: false,
                                security: false
                            }
                        });
                        return [
                            3,
                            5
                        ];
                    case 4:
                        setInternalIsEvaluating(false);
                        return [
                            7
                        ];
                    case 5:
                        return [
                            2
                        ];
                }
            });
        })();
    }, [
        evaluateExpression
    ]);
    var currentMetadata = useMemo(function() {
        return {
            expression: expressionMode.expression,
            value: currentValue,
            mode: expressionMode.current,
            isEditing: expressionMode.isEditing,
            isFullScreen: expressionMode.isFullScreen
        };
    }, [
        expressionMode.expression,
        expressionMode.current,
        expressionMode.isFullScreen,
        expressionMode.isEditing,
        currentValue
    ]);
    var currentExpressionValue = useMemo(function() {
        return {
            expression: expressionMode.expression,
            type: "expression"
        };
    }, [
        expressionMode.currentValue || expressionMode.expression
    ]);
    var handleValueChange = useCallback(function(newValue) {
        onValueChange(formatValue(newValue), _object_spread_props(_object_spread({}, currentMetadata), {
            value: formatValue(newValue)
        }));
    }, [
        onValueChange,
        expressionMode,
        isExpressionValue,
        currentValue
    ]);
    var handleExpressionChange = useCallback(function(newExpression) {
        isProgrammaticallyClearing.current = false;
        expressionMode.setExpression(newExpression);
        setCurrentEditorValue(newExpression);
        checkForMultiLine(newExpression);
        onValueChange({
            expression: newExpression,
            type: "expression"
        }, _object_spread_props(_object_spread({}, currentMetadata), {
            expression: newExpression
        }));
    }, [
        expressionMode,
        expressionContext,
        onValueChange,
        evaluateExpression,
        internalEvaluateExpression,
        checkForMultiLine
    ]);
    var handleExpressionBlur = useCallback(function(e) {
        var forceBlur = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        return _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                if (isProgrammaticallyClearing.current) {
                    isProgrammaticallyClearing.current = false;
                    return [
                        2
                    ];
                }
                if (isSwitchingToFullScreen.current) {
                    isSwitchingToFullScreen.current = false;
                    return [
                        2
                    ];
                }
                if (expressionMode.isFullScreen && !forceBlur) {
                    return [
                        2
                    ];
                }
                if (expressionHasNewlines && !forceBlur) {
                    return [
                        2
                    ];
                }
                isBlur.current = true;
                expressionMode.setEditing(false);
                expressionMode.setFullScreen(false);
                return [
                    2
                ];
            });
        })();
    }, [
        expressionMode,
        expressionResult,
        internalExpressionResult,
        expressionContext,
        onValueChange,
        currentValue,
        isEvaluating,
        internalIsEvaluating,
        currentExpressionValue,
        expressionHasNewlines
    ]);
    useEffect(function() {
        onValueChange(currentValue, _object_spread_props(_object_spread({}, currentMetadata), {
            isFullScreen: expressionMode.isFullScreen
        }));
    }, [
        expressionMode.isFullScreen
    ]);
    useEffect(function() {
        if (expressionMode.isEditing && expressionHasNewlines && !expressionMode.isFullScreen) {
            expressionMode.setFullScreen(true);
        }
    }, [
        expressionHasNewlines,
        expressionMode.isEditing,
        expressionMode.isFullScreen
    ]);
    var handleModeChange = useCallback(function(newMode) {
        switch(newMode){
            case "value":
                expressionMode.switchToValue();
                expressionMode.setFullScreen(false);
                onValueChange(originalValue || value, void 0);
                break;
            case "editor":
                expressionMode.switchToEditor();
                var shouldBeFullScreen = expressionHasNewlines;
                if (shouldBeFullScreen) {
                    expressionMode.setFullScreen(true);
                }
                var editorMetadata = {
                    expression: expressionMode.expression,
                    value: currentValue,
                    mode: "expression",
                    isEditing: true,
                    isFullScreen: shouldBeFullScreen
                };
                onValueChange(expressionMode.expression ? {
                    expression: expressionMode.expression,
                    type: "expression"
                } : currentValue, editorMetadata);
                break;
            case "expression":
                setOriginalValue(currentValue);
                expressionMode.switchToExpression();
                if (expressionHasNewlines) {
                    expressionMode.setFullScreen(true);
                }
                break;
        }
    }, [
        expressionMode,
        currentValue,
        onValueChange,
        expressionHasNewlines,
        originalValue,
        value
    ]);
    useEffect(function() {
        if (isBlur.current) {
            if (!(expressionMode.expression && expressionMode.expression.trim())) {
                expressionMode.switchToValue();
                var _currentMetadata_value;
                onValueChange((_currentMetadata_value = currentMetadata.value) !== null && _currentMetadata_value !== void 0 ? _currentMetadata_value : "", _object_spread_props(_object_spread({}, currentMetadata), {
                    mode: "value",
                    expression: "",
                    isEditing: false,
                    isFullScreen: false
                }));
            } else {
                var _currentMetadata_value1;
                onValueChange(currentMetadata.mode === "value" ? (_currentMetadata_value1 = currentMetadata.value) !== null && _currentMetadata_value1 !== void 0 ? _currentMetadata_value1 : "" : {
                    expression: currentMetadata.expression.trim(),
                    type: "expression"
                }, _object_spread_props(_object_spread({}, currentMetadata), {
                    isEditing: false,
                    isFullScreen: false
                }));
            }
            isBlur.current = false;
        }
    }, [
        expressionMode.isEditing,
        expressionMode.isFullScreen,
        isBlur.current
    ]);
    useEffect(function() {
        if (onDependenciesChange) {
            onDependenciesChange(dependencies);
        }
    }, [
        dependencies,
        onDependenciesChange
    ]);
    var handleClear = useCallback(function() {
        isProgrammaticallyClearing.current = true;
        onValueChange(currentValue, currentMetadata);
        handleModeChange("value");
        expressionMode.setFullScreen(false);
    }, [
        onValueChange,
        expressionMode,
        originalValue
    ]);
    var _useState10 = _sliced_to_array(useState(currentValue), 2), localInput = _useState10[0], setLocalInput = _useState10[1];
    useEffect(function() {
        setLocalInput(currentValue);
    }, [
        currentValue
    ]);
    var controlProps = useMemo(function() {
        return {
            value: currentValue,
            onChange: handleValueChange,
            onExpressionClick: function() {
                return handleModeChange("editor");
            },
            // Click handler to trigger expression mode
            inferredType: inferredReturnType,
            // Inferred TypeScript type
            hasTypeMismatch: hasTypeMismatch,
            // Whether inferred type matches expected
            hasError: hasExpressionError,
            // Whether expression has syntax/validation errors
            localInput: localInput,
            setLocalInput: setLocalInput,
            expressionMode: {
                current: expressionMode.current,
                switchToValue: function() {
                    return handleModeChange("value");
                },
                switchToExpression: function() {
                    return handleModeChange("expression");
                },
                switchToEditor: function() {
                    return handleModeChange("editor");
                },
                clear: handleClear,
                isExpressionMode: expressionMode.isExpressionMode,
                isEditorMode: expressionMode.isEditorMode,
                expression: expressionMode.expression,
                setExpression: handleExpressionChange,
                isEditing: expressionMode.isEditing,
                setEditing: expressionMode.setEditing,
                isFullScreen: expressionMode.isFullScreen,
                setFullScreen: expressionMode.setFullScreen
            }
        };
    }, [
        currentValue,
        handleValueChange,
        expressionMode,
        handleModeChange,
        handleClear,
        handleExpressionChange,
        inferredReturnType,
        hasTypeMismatch,
        hasExpressionError
    ]);
    var renderContent = function() {
        switch(expressionMode.current){
            // case 'value':
            //   return children(controlProps);
            case "expression":
                var _this;
                expressionMode.expression && expressionMode.expression.trim();
                (_this = expressionResult || internalExpressionResult) === null || _this === void 0 ? void 0 : _this.isValid;
                return controlProps.expressionMode.isEditing ? /* @__PURE__ */ React4__default.createElement("div", {
                    key: "expression",
                    className: cn("relative", className)
                }, inlineEditor && !expressionMode.isFullScreen && !expressionHasNewlines ? /* @__PURE__ */ React4__default.createElement("div", {
                    className: cn("uii:flex uii:h-9 uii:w-full \n              uii:min-w-0 uii:rounded-sm \n              uii:border uii:border-ring \n              uii:bg-background uii:px-3 uii:py-1 uii:text-base uii:shadow-xs \n              uii:ring-ring/50 uii:ring-[3px] uii:transition-[color,box-shadow] \n              uii:outline-none uii:md:text-sm uii:cursor-pointer\n              uii:mt-0.5 ", editorClassName)
                }, /* @__PURE__ */ React4__default.createElement(InlineExpressionEditor, {
                    value: expressionMode.expression,
                    onChange: function(newValue) {
                        handleExpressionChange(newValue);
                    },
                    onEnter: function() {
                        isSwitchingToFullScreen.current = true;
                        expressionMode.setFullScreen(true);
                        setTimeout(function() {
                            isSwitchingToFullScreen.current = false;
                        }, 100);
                    },
                    onBlur: handleExpressionBlur,
                    onTypeInferred: handleTypeInferred,
                    onValidationChange: handleValidationChange,
                    context: expressionContext,
                    placeholder: expressionPlaceholder
                }), /* @__PURE__ */ React4__default.createElement("div", {
                    className: "uii:flex uii:items-center uii:gap-2 uii:mt-0.5"
                }, /* @__PURE__ */ React4__default.createElement("span", {
                    className: "uii:text-xs uii:font-mono uii:cursor-pointer uii:text-muted-foreground",
                    onMouseDown: function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        isSwitchingToFullScreen.current = true;
                        expressionMode.setFullScreen(true);
                        setTimeout(function() {
                            isSwitchingToFullScreen.current = false;
                        }, 100);
                    }
                }, /* @__PURE__ */ React4__default.createElement(FontAwesomeIcon, {
                    icon: faExpand
                })), /* @__PURE__ */ React4__default.createElement("span", {
                    className: "uii:text-xs uii:font-mono uii:cursor-pointer uii:text-muted-foreground",
                    onMouseDown: function(e) {
                        e.preventDefault();
                        handleClear();
                    }
                }, "Clear"))) : /* @__PURE__ */ React4__default.createElement("div", {
                    className: "uii:space-y-4"
                }, /* @__PURE__ */ React4__default.createElement(FullPanelExpressionEditor, {
                    value: expressionMode.expression,
                    onChange: function(newValue) {
                        handleExpressionChange(newValue);
                    },
                    onClose: function() {
                        handleExpressionBlur(void 0, true);
                        expressionMode.setFullScreen(false);
                    },
                    onBlur: handleExpressionBlur,
                    onTypeInferred: handleTypeInferred,
                    context: expressionContext,
                    placeholder: expressionPlaceholder
                }), (ast || dependencies.length > 0) && /* @__PURE__ */ React4__default.createElement("div", {
                    className: "uii:space-y-3"
                }, inferredReturnType && inferredReturnType !== "unknown" && /* @__PURE__ */ React4__default.createElement("div", {
                    className: "uii:space-y-2"
                }, /* @__PURE__ */ React4__default.createElement("div", {
                    className: "uii:flex uii:items-center uii:gap-2"
                }, /* @__PURE__ */ React4__default.createElement("div", {
                    className: "uii:text-sm uii:font-semibold uii:text-gray-700"
                }, "Inferred Return Type:"), typeScriptInferredType && inferredReturnType !== "error" && /* @__PURE__ */ React4__default.createElement("span", {
                    className: "uii:px-1.5 uii:py-0.5 uii:text-xs uii:rounded uii:bg-blue-100 uii:text-blue-700 uii:border uii:border-blue-200"
                }, "TypeScript")), /* @__PURE__ */ React4__default.createElement("div", {
                    className: "uii:flex uii:items-center uii:gap-2"
                }, inferredReturnType === "error" ? /* @__PURE__ */ React4__default.createElement("span", {
                    className: "uii:px-3 uii:py-1.5 uii:text-sm uii:font-mono uii:rounded uii:border uii:bg-red-50 uii:text-red-800 uii:border-red-200"
                }, "\u274C Syntax Error") : /* @__PURE__ */ React4__default.createElement(React4__default.Fragment, null, /* @__PURE__ */ React4__default.createElement("span", {
                    className: "uii:px-3 uii:py-1.5 uii:text-sm uii:font-mono uii:rounded uii:border uii:bg-purple-50 uii:text-purple-800 uii:border-purple-200"
                }, inferredReturnType), hasTypeMismatch && /* @__PURE__ */ React4__default.createElement("span", {
                    className: "uii:text-xs uii:text-orange-600 uii:font-semibold"
                }, "\u26A0\uFE0F Expected: ", type || expectedType)))), dependencyList.length > 0 && /* @__PURE__ */ React4__default.createElement("div", {
                    className: "uii:space-y-2"
                }, /* @__PURE__ */ React4__default.createElement("div", {
                    className: "uii:text-sm uii:font-semibold uii:text-gray-700"
                }, "Dependencies (", dependencyList.length, "):"), /* @__PURE__ */ React4__default.createElement("div", {
                    className: "uii:flex uii:flex-wrap uii:gap-2"
                }, dependencyList.map(function(dep, index) {
                    return /* @__PURE__ */ React4__default.createElement("span", {
                        key: index,
                        className: cn("uii:px-2 uii:py-1 uii:text-sm uii:rounded uii:border", dep.exists ? "uii:bg-blue-100 uii:text-blue-800 uii:border-blue-200" : "uii:bg-red-100 uii:text-red-800 uii:border-red-200"),
                        title: dep.exists ? "Value: ".concat(JSON.stringify(dep.value)) : "Not found in context"
                    }, dep.name);
                }))), ast && /* @__PURE__ */ React4__default.createElement(ASTRenderer, {
                    ast: ast,
                    tokens: tokens,
                    variant: "tree",
                    showTokens: true,
                    className: "uii:w-full"
                }), isParsing && /* @__PURE__ */ React4__default.createElement("div", {
                    className: "uii:text-sm uii:text-gray-500 uii:italic"
                }, "Parsing expression..."), parseError && /* @__PURE__ */ React4__default.createElement("div", {
                    className: "uii:text-sm uii:text-red-600"
                }, "Parse Error: ", parseError)))) : /* @__PURE__ */ React4__default.createElement("div", {
                    className: cn("uii:relative", className),
                    key: "expression-display"
                }, /* @__PURE__ */ React4__default.createElement("div", {
                    className: clsx_default("uii:flex uii:h-9 uii:w-full uii:min-w-0 uii:rounded-sm uii:border uii:border-input uii:bg-transparent uii:px-3 uii:py-1 uii:text-base uii:shadow-xs uii:transition-[color,box-shadow] uii:outline-none uii:focus-visible:border-ring uii:focus-visible:ring-ring/50 uii:focus-visible:ring-[3px] uii:md:text-sm uii:cursor-pointer uii:hover:bg-muted/50", "uii:mt-0.5 uii:bg-white uii:rounded-md uii:items-center"),
                    onClick: function() {
                        return handleModeChange("editor");
                    },
                    onMouseEnter: function() {
                        return setIsHovering(true);
                    },
                    onMouseLeave: function() {
                        return setIsHovering(false);
                    }
                }, /* @__PURE__ */ React4__default.createElement("span", {
                    className: "uii:flex-1 uii:truncate uii:text-foreground uii:items-center"
                }, isHovering ? // Hover state: show AST preview with dependencies
                /* @__PURE__ */ React4__default.createElement("div", {
                    className: "uii:flex uii:items-center uii:gap-2"
                }, ast ? /* @__PURE__ */ React4__default.createElement(ASTRenderer, {
                    key: "ast",
                    ast: ast,
                    tokens: tokens,
                    variant: "inline",
                    showTokens: false,
                    className: "uii:text-xs"
                }) : /* @__PURE__ */ React4__default.createElement("div", {
                    className: "uii:text-xs uii:text-gray-500"
                }, isParsing ? "Parsing..." : parseError ? "Error: ".concat(parseError) : "No AST available"), dependencies.length > 0 && /* @__PURE__ */ React4__default.createElement("div", {
                    className: "uii:flex uii:gap-1"
                }, dependencies.map(function(dep, index) {
                    return /* @__PURE__ */ React4__default.createElement("span", {
                        key: index,
                        className: "uii:px-1 uii:py-0.5 uii:bg-blue-100 uii:text-blue-800 uii:text-xs uii:rounded"
                    }, dep);
                }))) : // At rest: show the expression text
                /* @__PURE__ */ React4__default.createElement("span", {
                    className: "uii:font-mono uii:text-sm"
                }, currentExpressionValueExt || "No expression"))));
            default:
                return children(controlProps);
        }
    };
    return /* @__PURE__ */ React4__default.createElement(React4__default.Fragment, null, /* @__PURE__ */ React4__default.createElement("div", {
        className: "uii:flex uii:items-center uii:gap-2 uii:mt-2"
    }, /* @__PURE__ */ React4__default.createElement("label", {
        className: "uii:text-xs uii:text-muted-foreground uii:font-bold",
        htmlFor: fieldName
    }, label, ":"), /* @__PURE__ */ React4__default.createElement("span", {
        className: "uii:-mt-2 uii:inline-flex uii:px-1 uii:py-0.5 uii:bg-gray-200 uii:rounded-sm uii:text-[10px] uii:font-mono uii:text-muted-foreground uii:font-light"
    }, type), hasTypeMismatch || inferredReturnType === "error" ? /* @__PURE__ */ React4__default.createElement(React4__default.Fragment, null, expressionMode.current === "expression" ? /* @__PURE__ */ React4__default.createElement(React4__default.Fragment, null, /* @__PURE__ */ React4__default.createElement("span", {
        className: "uii:-mt-2 uii:inline-flex uii:px-1 uii:py-0.5 uii:bg-gray-200 uii:rounded-sm uii:text-[10px] uii:font-mono uii:text-muted-foreground uii:font-light"
    }, expressionMode.expression.trim() !== "" ? inferredReturnType : "empty"), /* @__PURE__ */ React4__default.createElement("span", {
        className: "uii:-mt-2 uii:inline-flex uii:px-1 uii:py-0.5 uii:bg-gray-200 uii:rounded-sm uii:text-[10px] uii:font-mono uii:font-light uii:text-orange-600 "
    }, "\u26A0\uFE0F Expected: ", type || expectedType)) : /* @__PURE__ */ React4__default.createElement(React4__default.Fragment, null)) : /* @__PURE__ */ React4__default.createElement(React4__default.Fragment, null)), renderContent());
}
// src/components/input.tsx
function Input2(_param) {
    var className = _param.className, expectedType = _param.expectedType, props = _object_without_properties(_param, [
        "className",
        "expectedType"
    ]);
    var _props_label, _props_key, _props_name;
    return /* @__PURE__ */ React4.createElement(ExpressionWrapper, {
        label: (_props_label = props.label) !== null && _props_label !== void 0 ? _props_label : "Test Entry",
        key: (_props_key = props.key) !== null && _props_key !== void 0 ? _props_key : props.name,
        type: expectedType !== null && expectedType !== void 0 ? expectedType : "string",
        valuesLoading: false,
        value: props.value,
        onValueChange: function(val, metadata) {
            props.onChange && props.onChange(val);
        },
        expectedType: expectedType,
        fieldName: (_props_name = props.name) !== null && _props_name !== void 0 ? _props_name : props.key,
        children: function(param) {
            var onExpressionClick = param.onExpressionClick, onChangeExpression = param.onChange, expressionValue = param.value, localInput = param.localInput, setLocalInput = param.setLocalInput;
            var _props_placeholder;
            return /* @__PURE__ */ React4.createElement("div", {
                className: "uii:relative uii:text-xs uii:mt-0.5"
            }, /* @__PURE__ */ React4.createElement(Input, {
                type: "text",
                value: localInput,
                onChange: function(e) {
                    setLocalInput(e.target.value);
                    onChangeExpression(e.target.value);
                },
                placeholder: (_props_placeholder = props.placeholder) !== null && _props_placeholder !== void 0 ? _props_placeholder : "Enter value..."
            }), /* @__PURE__ */ React4.createElement("div", {
                className: "uii:flex uii:bg-white uii:border-white/40 uii:border-l-8 uii:items-center uii:gap-1 uii:absolute uii:right-1.5 uii:top-2.5 uii:cursor-pointer uii:truncate",
                onClick: function() {
                    return onExpressionClick();
                }
            }, /* @__PURE__ */ React4.createElement("span", {
                className: "uii:border-l uii:border-gray-200 uii:px-2"
            }, "Custom Expression")));
        }
    });
}
// ../../node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs
var falsyToString = function(value) {
    return typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
};
var cx = clsx;
var cva = function(base, config) {
    return function(props) {
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        var variants = config.variants, defaultVariants = config.defaultVariants;
        var getVariantClassNames = Object.keys(variants).map(function(variant) {
            var variantProp = props === null || props === void 0 ? void 0 : props[variant];
            var defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            var variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        var propsWithoutUndefined = props && Object.entries(props).reduce(function(acc, param) {
            var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
            if (value === void 0) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        var getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce(function(acc, param) {
            var cvClass = param.class, cvClassName = param.className, compoundVariantOptions = _object_without_properties(param, [
                "class",
                "className"
            ]);
            return Object.entries(compoundVariantOptions).every(function(param2) {
                var _param2 = _sliced_to_array(param2, 2), key = _param2[0], value = _param2[1];
                return Array.isArray(value) ? value.includes(_object_spread({}, defaultVariants, propsWithoutUndefined)[key]) : _object_spread({}, defaultVariants, propsWithoutUndefined)[key] === value;
            }) ? _to_consumable_array(acc).concat([
                cvClass,
                cvClassName
            ]) : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
};
// src/components/ui/button.tsx
var buttonVariants = cva("ui:inline-flex ui:items-center ui:justify-center ui:gap-2 ui:whitespace-nowrap ui:rounded-sm ui:text-sm ui:font-medium ui:transition-[color,box-shadow] ui:disabled:pointer-events-none ui:disabled:opacity-50 ui:[&_svg]:pointer-events-none ui:[&_svg:not([class*=size-])]:size-4 ui:shrink-0 ui:[&_svg]:shrink-0 ui:outline-none ui:focus-visible:border-ring ui:focus-visible:ring-ring/50 ui:focus-visible:ring-[3px] ui:aria-invalid:ring-destructive/20 ui:dark:aria-invalid:ring-destructive/40 ui:aria-invalid:border-destructive ui:cursor-pointer", {
    variants: {
        variant: {
            default: "ui:bg-primary ui:text-primary-foreground ui:shadow-xs ui:hover:bg-primary/90 ui:select-none",
            destructive: "ui:bg-destructive ui:text-white ui:shadow-xs ui:hover:bg-destructive/90 ui:focus-visible:ring-destructive/20 ui:dark:focus-visible:ring-destructive/40",
            outline: "ui:border ui:border-input ui:bg-background ui:shadow-xs ui:hover:bg-accent ui:hover:text-accent-foreground",
            secondary: "ui:bg-secondary ui:text-secondary-foreground ui:shadow-xs ui:hover:bg-secondary/80",
            ghost: "ui:hover:bg-accent ui:hover:text-accent-foreground",
            link: "ui:text-primary ui:underline-offset-4 ui:hover:underline"
        },
        size: {
            default: "ui:h-9 ui:px-4 ui:py-2 ui:has-[>svg]:px-3",
            sm: "ui:h-8 ui:rounded-sm ui:gap-1.5 ui:px-3 ui:has-[>svg]:px-2.5",
            lg: "ui:h-10 ui:rounded-sm ui:px-6 ui:has-[>svg]:px-4",
            icon: "ui:size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(_param) {
    var className = _param.className, variant = _param.variant, size = _param.size, _param_asChild = _param.asChild, asChild = _param_asChild === void 0 ? false : _param_asChild, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size",
        "asChild"
    ]);
    var Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ React4.createElement(Comp, _object_spread({
        "data-slot": "button",
        className: cn(buttonVariants({
            variant: variant,
            size: size,
            className: className
        }))
    }, props));
}
export { Button, Input2 as Input, buttonVariants }; //# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map