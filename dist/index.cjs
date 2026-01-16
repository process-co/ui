'use strict';
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
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
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
function _object_destructuring_empty(o) {
    if (o === null || o === void 0) throw new TypeError("Cannot destructure " + o);
    return o;
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
var React2 = require('react');
var reactSlot = require('@radix-ui/react-slot');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var lucideReact = require('lucide-react');
var SelectPrimitive = require('@radix-ui/react-select');
function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function(k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function get() {
                        return e[k];
                    }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}
var React2__namespace = /*#__PURE__*/ _interopNamespace(React2);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/ _interopNamespace(DropdownMenuPrimitive);
var SelectPrimitive__namespace = /*#__PURE__*/ _interopNamespace(SelectPrimitive);
var __defProp = Object.defineProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
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
// src/components/ui/button.tsx
var buttonVariants = cva("uii:inline-flex uii:items-center uii:justify-center uii:gap-2 uii:whitespace-nowrap uii:rounded-sm uii:text-sm uii:font-medium uii:transition-[color,box-shadow] uii:disabled:pointer-events-none uii:disabled:opacity-50 uii:[&_svg]:pointer-events-none uii:[&_svg:not([class*=size-])]:size-4 uii:shrink-0 uii:[&_svg]:shrink-0 uii:outline-none uii:focus-visible:border-ring uii:focus-visible:ring-ring/50 uii:focus-visible:ring-[3px] uii:aria-invalid:ring-destructive/20 uii:dark:aria-invalid:ring-destructive/40 uii:aria-invalid:border-destructive uii:cursor-pointer", {
    variants: {
        variant: {
            default: "uii:bg-primary uii:text-primary-foreground uii:shadow-xs uii:hover:bg-primary/90 uii:select-none",
            destructive: "uii:bg-destructive uii:text-white uii:shadow-xs uii:hover:bg-destructive/90 uii:focus-visible:ring-destructive/20 uii:dark:focus-visible:ring-destructive/40",
            outline: "uii:border uii:border-input uii:bg-background uii:shadow-xs uii:hover:bg-accent uii:hover:text-accent-foreground",
            secondary: "uii:bg-secondary uii:text-secondary-foreground uii:shadow-xs uii:hover:bg-secondary/80",
            ghost: "uii:hover:bg-accent uii:hover:text-accent-foreground",
            link: "uii:text-primary uii:underline-offset-4 uii:hover:underline"
        },
        size: {
            default: "uii:h-9 uii:px-4 uii:py-2 uii:has-[>svg]:px-3",
            sm: "uii:h-8 uii:rounded-sm uii:gap-1.5 uii:px-3 uii:has-[>svg]:px-2.5",
            lg: "uii:h-10 uii:rounded-sm uii:px-6 uii:has-[>svg]:px-4",
            icon: "uii:size-9"
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
    var Comp = asChild ? reactSlot.Slot : "button";
    return /* @__PURE__ */ React2__namespace.createElement(Comp, _object_spread({
        "data-slot": "button",
        className: cn(buttonVariants({
            variant: variant,
            size: size,
            className: className
        }))
    }, props));
}
function DropdownMenu(_param) {
    var props = _extends({}, _object_destructuring_empty(_param));
    return /* @__PURE__ */ React2__namespace.createElement(DropdownMenuPrimitive__namespace.Root, _object_spread({
        "data-slot": "dropdown-menu"
    }, props));
}
function DropdownMenuPortal(_param) {
    var props = _extends({}, _object_destructuring_empty(_param));
    return /* @__PURE__ */ React2__namespace.createElement(DropdownMenuPrimitive__namespace.Portal, _object_spread({
        "data-slot": "dropdown-menu-portal"
    }, props));
}
function DropdownMenuTrigger(_param) {
    var props = _extends({}, _object_destructuring_empty(_param));
    return /* @__PURE__ */ React2__namespace.createElement(DropdownMenuPrimitive__namespace.Trigger, _object_spread({
        "data-slot": "dropdown-menu-trigger"
    }, props));
}
function DropdownMenuContent(_param) {
    var className = _param.className, _param_sideOffset = _param.sideOffset, sideOffset = _param_sideOffset === void 0 ? 4 : _param_sideOffset, props = _object_without_properties(_param, [
        "className",
        "sideOffset"
    ]);
    return /* @__PURE__ */ React2__namespace.createElement(DropdownMenuPrimitive__namespace.Portal, null, /* @__PURE__ */ React2__namespace.createElement(DropdownMenuPrimitive__namespace.Content, _object_spread({
        "data-slot": "dropdown-menu-content",
        sideOffset: sideOffset,
        className: cn("uii:bg-popover uii:text-popover-foreground uii:data-[state=open]:animate-in uii:data-[state=closed]:animate-out uii:data-[state=closed]:fade-out-0 uii:data-[state=open]:fade-in-0 uii:data-[state=closed]:zoom-out-95 uii:data-[state=open]:zoom-in-95 uii:data-[side=bottom]:slide-in-from-top-2 uii:data-[side=left]:slide-in-from-right-2 uii:data-[side=right]:slide-in-from-left-2 uii:data-[side=top]:slide-in-from-bottom-2 uii:z-50 uii:min-w-[8rem] uii:overflow-hidden uii:rounded-md uii:border uii:p-1 uii:shadow-md", className)
    }, props)));
}
function DropdownMenuClose(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React2__namespace.createElement(DropdownMenuPrimitive__namespace.Item, _object_spread({
        "data-slot": "dropdown-menu-close",
        className: "hidden"
    }, props));
}
function DropdownMenuGroup(_param) {
    var props = _extends({}, _object_destructuring_empty(_param));
    return /* @__PURE__ */ React2__namespace.createElement(DropdownMenuPrimitive__namespace.Group, _object_spread({
        "data-slot": "dropdown-menu-group"
    }, props));
}
function ConfirmationDropdownMenuItem(_param) {
    var props = _extends({}, _object_destructuring_empty(_param));
    var originalOnClick = props.onClick, rest = _object_without_properties(props, [
        "onClick"
    ]);
    var _React2__namespace_useState = _sliced_to_array(React2__namespace.useState(false), 2), isConfirming = _React2__namespace_useState[0], setIsConfirming = _React2__namespace_useState[1];
    return !isConfirming ? /* @__PURE__ */ React2__namespace.createElement(DropdownMenuItem, _object_spread_props(_object_spread({}, rest), {
        onClick: function(e) {
            setIsConfirming(true);
            e.preventDefault();
            e.stopPropagation();
        }
    })) : /* @__PURE__ */ React2__namespace.createElement(DropdownMenuItem, _object_spread_props(_object_spread({}, rest), {
        onClick: function(e) {
            if (originalOnClick) {
                setIsConfirming(false);
                originalOnClick(e);
                e.preventDefault();
                e.stopPropagation();
            }
        }
    }), /* @__PURE__ */ React2__namespace.createElement("div", {
        className: "flex flex-row gap-2 items-center"
    }, /* @__PURE__ */ React2__namespace.createElement("div", {
        className: "text-destructive"
    }, "Are you sure ?")));
}
function DropdownMenuItem(_param) {
    var className = _param.className, inset = _param.inset, _param_variant = _param.variant, variant = _param_variant === void 0 ? "default" : _param_variant, props = _object_without_properties(_param, [
        "className",
        "inset",
        "variant"
    ]);
    return /* @__PURE__ */ React2__namespace.createElement(DropdownMenuPrimitive__namespace.Item, _object_spread({
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: cn("uii:cursor-pointer uii:focus:bg-accent uii:focus:text-accent-foreground uii:data-[variant=destructive]:text-destructive-foreground uii:data-[variant=destructive]:focus:bg-destructive/10 uii:dark:data-[variant=destructive]:focus:bg-destructive/40 uii:data-[variant=destructive]:focus:text-destructive-foreground uii:data-[variant=destructive]:*:[svg]:!text-destructive-foreground uii:[&_svg:not([class*=text-])]:text-muted-foreground uii:relative uii:flex uii:cursor-default uii:items-center uii:gap-2 uii:rounded-sm uii:px-2 uii:py-1.5 uii:text-sm uii:outline-hidden uii:select-none uii:data-[disabled]:pointer-events-none uii:data-[disabled]:opacity-50 uii:data-[inset]:pl-8 uii:[&_svg]:pointer-events-none uii:[&_svg]:shrink-0 uii:[&_svg:not([class*=size-])]:size-4", className)
    }, props));
}
function DropdownMenuCheckboxItem(_param) {
    var className = _param.className, children = _param.children, checked = _param.checked, props = _object_without_properties(_param, [
        "className",
        "children",
        "checked"
    ]);
    return /* @__PURE__ */ React2__namespace.createElement(DropdownMenuPrimitive__namespace.CheckboxItem, _object_spread({
        "data-slot": "dropdown-menu-checkbox-item",
        className: cn("uii:focus:bg-accent uii:focus:text-accent-foreground uii:relative uii:flex uii:cursor-default uii:items-center uii:gap-2 uii:rounded-sm uii:py-1.5 uii:pr-2 uii:pl-8 uii:text-sm uii:outline-hidden uii:select-none uii:data-[disabled]:pointer-events-none uii:data-[disabled]:opacity-50 uii:[&_svg]:pointer-events-none uii:[&_svg]:shrink-0 uii:[&_svg:not([class*=size-])]:size-4", className),
        checked: checked
    }, props), /* @__PURE__ */ React2__namespace.createElement("span", {
        className: "uii:pointer-events-none uii:absolute uii:left-2 uii:flex uii:size-3.5 uii:items-center uii:justify-center"
    }, /* @__PURE__ */ React2__namespace.createElement(DropdownMenuPrimitive__namespace.ItemIndicator, null, /* @__PURE__ */ React2__namespace.createElement(lucideReact.CheckIcon, {
        className: "uii:size-4"
    }))), children);
}
function DropdownMenuRadioGroup(_param) {
    var props = _extends({}, _object_destructuring_empty(_param));
    return /* @__PURE__ */ React2__namespace.createElement(DropdownMenuPrimitive__namespace.RadioGroup, _object_spread({
        "data-slot": "dropdown-menu-radio-group"
    }, props));
}
function DropdownMenuRadioItem(_param) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ React2__namespace.createElement(DropdownMenuPrimitive__namespace.RadioItem, _object_spread({
        "data-slot": "dropdown-menu-radio-item",
        className: cn("uii:focus:bg-accent uii:focus:text-accent-foreground uii:relative uii:flex uii:cursor-default uii:items-center uii:gap-2 uii:rounded-sm uii:py-1.5 uii:pr-2 uii:pl-8 uii:text-sm uii:outline-hidden uii:select-none uii:data-[disabled]:pointer-events-none uii:data-[disabled]:opacity-50 uii:[&_svg]:pointer-events-none uii:[&_svg]:shrink-0 uii:[&_svg:not([class*=size-])]:size-4", className)
    }, props), /* @__PURE__ */ React2__namespace.createElement("span", {
        className: "uii:pointer-events-none uii:absolute uii:left-2 uii:flex uii:size-3.5 uii:items-center uii:justify-center"
    }, /* @__PURE__ */ React2__namespace.createElement(DropdownMenuPrimitive__namespace.ItemIndicator, null, /* @__PURE__ */ React2__namespace.createElement(lucideReact.CircleIcon, {
        className: "uii:size-2 uii:fill-current"
    }))), children);
}
function DropdownMenuLabel(_param) {
    var className = _param.className, inset = _param.inset, props = _object_without_properties(_param, [
        "className",
        "inset"
    ]);
    return /* @__PURE__ */ React2__namespace.createElement(DropdownMenuPrimitive__namespace.Label, _object_spread({
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: cn("uii:px-2 uii:py-1.5 uii:text-sm uii:font-medium uii:data-[inset]:pl-8", className)
    }, props));
}
function DropdownMenuSeparator(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React2__namespace.createElement(DropdownMenuPrimitive__namespace.Separator, _object_spread({
        "data-slot": "dropdown-menu-separator",
        className: cn("uii:bg-border uii:-mx-1 uii:my-1 uii:h-px", className)
    }, props));
}
function DropdownMenuShortcut(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React2__namespace.createElement("span", _object_spread({
        "data-slot": "dropdown-menu-shortcut",
        className: cn("uii:text-muted-foreground uii:ml-auto uii:text-xs uii:tracking-widest", className)
    }, props));
}
function DropdownMenuSub(_param) {
    var props = _extends({}, _object_destructuring_empty(_param));
    return /* @__PURE__ */ React2__namespace.createElement(DropdownMenuPrimitive__namespace.Sub, _object_spread({
        "data-slot": "dropdown-menu-sub"
    }, props));
}
function DropdownMenuSubTrigger(_param) {
    var className = _param.className, inset = _param.inset, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "inset",
        "children"
    ]);
    return /* @__PURE__ */ React2__namespace.createElement(DropdownMenuPrimitive__namespace.SubTrigger, _object_spread({
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: cn("uii:focus:bg-accent uii:focus:text-accent-foreground uii:data-[state=open]:bg-accent uii:data-[state=open]:text-accent-foreground uii:flex uii:cursor-default uii:items-center uii:rounded-sm uii:px-2 uii:py-1.5 uii:text-sm uii:outline-hidden uii:select-none uii:data-[inset]:pl-8", className)
    }, props), children, /* @__PURE__ */ React2__namespace.createElement(lucideReact.ChevronRightIcon, {
        className: "uii:ml-auto uii:size-4"
    }));
}
function DropdownMenuSubContent(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React2__namespace.createElement(DropdownMenuPrimitive__namespace.SubContent, _object_spread({
        "data-slot": "dropdown-menu-sub-content",
        className: cn("uii:bg-popover uii:text-popover-foreground uii:data-[state=open]:animate-in uii:data-[state=closed]:animate-out uii:data-[state=closed]:fade-out-0 uii:data-[state=open]:fade-in-0 uii:data-[state=closed]:zoom-out-95 uii:data-[state=open]:zoom-in-95 uii:data-[side=bottom]:slide-in-from-top-2 uii:data-[side=left]:slide-in-from-right-2 uii:data-[side=right]:slide-in-from-left-2 uii:data-[side=top]:slide-in-from-bottom-2 uii:z-50 uii:min-w-[8rem] uii:overflow-hidden uii:rounded-md uii:border uii:p-1 uii:shadow-lg", className)
    }, props));
}
// src/components/fields/index.tsx
var fields_exports = {};
__export(fields_exports, {
    InferredTypesContext: function() {
        return InferredTypesContext;
    },
    InferredTypesProvider: function() {
        return InferredTypesProvider;
    },
    Input: function() {
        return Input;
    },
    NestedFieldProvider: function() {
        return NestedFieldProvider;
    },
    NodePropertyProvider: function() {
        return NodePropertyProvider;
    },
    OPERATORS_BY_TYPE: function() {
        return OPERATORS_BY_TYPE;
    },
    Select: function() {
        return Select2;
    },
    TemplateFieldProvider: function() {
        return TemplateFieldProvider;
    },
    computeExtendedType: function() {
        return computeExtendedType;
    },
    filterOperatorsByType: function() {
        return filterOperatorsByType;
    },
    getNumberConstants: function() {
        return getNumberConstants;
    },
    getOperatorsForType: function() {
        return getOperatorsForType;
    },
    getStringConstants: function() {
        return getStringConstants;
    },
    intersectTypes: function() {
        return intersectTypes;
    },
    parseInferSyntax: function() {
        return parseInferSyntax;
    },
    parseInferredTypes: function() {
        return parseInferredTypes;
    },
    useAllInferredTypes: function() {
        return useAllInferredTypes;
    },
    useClearAllInferredTypes: function() {
        return useClearAllInferredTypes;
    },
    useClearInferredType: function() {
        return useClearInferredType;
    },
    useClearValidationErrorsByPrefix: function() {
        return useClearValidationErrorsByPrefix;
    },
    useFieldPath: function() {
        return useFieldPath;
    },
    useFieldValidation: function() {
        return useFieldValidation;
    },
    useFlowEditorActions: function() {
        return useFlowEditorActions;
    },
    useInferredType: function() {
        return useInferredType;
    },
    useInferredTypes: function() {
        return useInferredTypes;
    },
    useIsInNodePropertyProvider: function() {
        return useIsInNodePropertyProvider;
    },
    useIsInTemplateFieldProvider: function() {
        return useIsInTemplateFieldProvider;
    },
    useNodeProperties: function() {
        return useNodeProperties;
    },
    useNodeProperty: function() {
        return useNodeProperty;
    },
    useSetInferredType: function() {
        return useSetInferredType;
    },
    useSetProperty: function() {
        return useSetProperty;
    },
    useTemplateFieldContext: function() {
        return useTemplateFieldContext;
    },
    useTriggerLayoutUpdate: function() {
        return useTriggerLayoutUpdate;
    }
});
var DevContext = React2.createContext(null);
function useResolvedExpectedType(expectedType, devCtx) {
    var inferredTypes = devCtx === null || devCtx === void 0 ? void 0 : devCtx.inferredTypes;
    return React2__namespace.useMemo(function() {
        var _match_;
        if (!expectedType) return "any";
        if (!expectedType.startsWith("$infer<")) {
            return expectedType;
        }
        var match = expectedType.match(/^\$infer<(.+)>$/);
        if (!match) return expectedType;
        var content = ((_match_ = match[1]) === null || _match_ === void 0 ? void 0 : _match_.trim()) || "";
        if (content.startsWith("[") && content.endsWith("]")) {
            var arrayContent = content.slice(1, -1);
            var fieldNames = arrayContent.split(",").map(function(s) {
                return s.trim().replace(/^["']|["']$/g, "");
            }).filter(Boolean);
            if (!inferredTypes) {
                return "Subscribing to: ".concat(fieldNames.join(", "));
            }
            var types = fieldNames.map(function(name) {
                return inferredTypes[name];
            }).filter(function(t) {
                return !!t && t.length > 0;
            });
            if (types.length === 0) {
                return "Waiting for: ".concat(fieldNames.join(", "));
            }
            return types.length === 1 ? types[0] : types.join(" & ");
        }
        if (!content.includes("|") && /^[a-zA-Z_][a-zA-Z0-9_\-]*$/.test(content)) {
            if (!inferredTypes) {
                return "Subscribing to: ".concat(content);
            }
            var resolvedType = inferredTypes[content];
            return resolvedType || "Waiting for: ".concat(content);
        }
        return content;
    }, [
        expectedType,
        inferredTypes
    ]);
}
function Input(param) {
    var fieldName = param.fieldName, label = param.label, value = param.value, onChange = param.onChange, _param_disabled = param.disabled, disabled = _param_disabled === void 0 ? false : _param_disabled, placeholder = param.placeholder, _param_expectedType = param.expectedType, expectedType = _param_expectedType === void 0 ? "string" : _param_expectedType, _param_required = param.required, required = _param_required === void 0 ? false : _param_required, _param_hasRequiredError = param.hasRequiredError, hasRequiredError = _param_hasRequiredError === void 0 ? false : _param_hasRequiredError, className = param.className, editorClassName = param.editorClassName;
    var devCtx = React2.useContext(DevContext);
    var resolvedExpectedType = useResolvedExpectedType(expectedType, devCtx);
    var displayValue = React2__namespace.useMemo(function() {
        if (value && (typeof value === "undefined" ? "undefined" : _type_of(value)) === "object" && "expression" in value) {
            return value.expression || "";
        }
        return String(value !== null && value !== void 0 ? value : "");
    }, [
        value
    ]);
    var isExpression = React2__namespace.useMemo(function() {
        return value && (typeof value === "undefined" ? "undefined" : _type_of(value)) === "object" && "expression" in value;
    }, [
        value
    ]);
    var handleChange = React2__namespace.useCallback(function(e) {
        var newValue = e.target.value;
        if (newValue.includes("{{")) {
            onChange({
                expression: newValue,
                type: "expression"
            });
        } else {
            onChange(newValue);
        }
    }, [
        onChange
    ]);
    var showError = hasRequiredError || required && !displayValue;
    var isWaiting = resolvedExpectedType.startsWith("Waiting for:") || resolvedExpectedType.startsWith("Subscribing to:");
    return /* @__PURE__ */ React2__namespace.createElement("div", {
        className: cn("uii:mb-2", className)
    }, /* @__PURE__ */ React2__namespace.createElement("div", {
        className: "uii:flex uii:items-center uii:gap-2 uii:mt-2"
    }, /* @__PURE__ */ React2__namespace.createElement("label", {
        htmlFor: fieldName,
        className: "uii:text-xs uii:font-bold uii:text-muted-foreground"
    }, label, ":"), resolvedExpectedType !== "$.interface.timer" && /* @__PURE__ */ React2__namespace.createElement("span", {
        className: cn("uii:-mt-2 uii:inline-flex uii:px-1 uii:py-0.5 uii:rounded-sm uii:text-[10px] uii:font-mono uii:font-light uii:max-w-[300px] uii:truncate", isWaiting ? "uii:bg-yellow-100 uii:text-yellow-700" : "uii:bg-gray-200 uii:text-muted-foreground"),
        title: resolvedExpectedType
    }, resolvedExpectedType), showError && /* @__PURE__ */ React2__namespace.createElement("span", {
        className: "uii:-mt-2 uii:inline-flex uii:px-1 uii:py-0.5 uii:bg-red-100 uii:text-red-600 uii:rounded-sm uii:text-[10px] uii:font-medium"
    }, "Required")), /* @__PURE__ */ React2__namespace.createElement("div", {
        className: "uii:mt-0.5"
    }, /* @__PURE__ */ React2__namespace.createElement("input", {
        id: fieldName,
        name: fieldName,
        type: "text",
        value: displayValue,
        onChange: handleChange,
        disabled: disabled,
        placeholder: placeholder || "Enter value or {{ expression }}...",
        className: cn("uii:w-full uii:h-9 uii:px-3 uii:rounded-sm uii:border uii:bg-background uii:text-sm", "uii:outline-none uii:transition-all", "focus:uii:border-ring focus:uii:ring-ring/50 focus:uii:ring-[3px]", showError ? "uii:border-red-500 hover:uii:border-red-600" : "uii:border-input hover:uii:border-ring/50", isExpression && "uii:font-mono uii:text-amber-600", disabled && "uii:opacity-50 uii:cursor-not-allowed", editorClassName)
    })));
}
function Select(_param) {
    var props = _extends({}, _object_destructuring_empty(_param));
    return /* @__PURE__ */ React2__namespace.createElement(SelectPrimitive__namespace.Root, _object_spread({
        "data-slot": "select"
    }, props));
}
function SelectValue(_param) {
    var props = _extends({}, _object_destructuring_empty(_param));
    return /* @__PURE__ */ React2__namespace.createElement(SelectPrimitive__namespace.Value, _object_spread({
        "data-slot": "select-value"
    }, props));
}
function SelectTrigger(_param) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ React2__namespace.createElement(SelectPrimitive__namespace.Trigger, _object_spread({
        "data-slot": "select-trigger",
        className: cn("uii:border-input uii:data-[placeholder]:text-muted-foreground uii:[&_svg:not([class*=text-])]:text-muted-foreground uii:focus-visible:border-ring uii:focus-visible:ring-ring/50 uii:aria-invalid:ring-destructive/20 uii:dark:aria-invalid:ring-destructive/40 uii:aria-invalid:border-destructive uii:flex uii:h-9 uii:w-full uii:items-center uii:justify-between uii:gap-2 uii:rounded-md uii:border uii:bg-transparent uii:px-3 uii:py-2 uii:text-sm uii:whitespace-nowrap uii:shadow-xs uii:transition-[color,box-shadow] uii:outline-none uii:focus-visible:ring-[3px] uii:disabled:cursor-not-allowed uii:disabled:opacity-50 uii:*:data-[slot=select-value]:line-clamp-1 uii:*:data-[slot=select-value]:flex uii:*:data-[slot=select-value]:items-center uii:*:data-[slot=select-value]:gap-2 uii:[&_svg]:pointer-events-none uii:[&_svg]:shrink-0 uii:[&_svg:not([class*=size-])]:size-4", className)
    }, props), children, /* @__PURE__ */ React2__namespace.createElement(SelectPrimitive__namespace.Icon, {
        asChild: true
    }, /* @__PURE__ */ React2__namespace.createElement(lucideReact.ChevronDownIcon, {
        className: "uii:size-4 uii:opacity-50"
    })));
}
function SelectContent(_param) {
    var className = _param.className, children = _param.children, _param_position = _param.position, position = _param_position === void 0 ? "popper" : _param_position, footer = _param.footer, _param_hideScrollUpButton = _param.hideScrollUpButton, hideScrollUpButton = _param_hideScrollUpButton === void 0 ? false : _param_hideScrollUpButton, _param_hideScrollDownButton = _param.hideScrollDownButton, hideScrollDownButton = _param_hideScrollDownButton === void 0 ? false : _param_hideScrollDownButton, props = _object_without_properties(_param, [
        "className",
        "children",
        "position",
        "footer",
        "hideScrollUpButton",
        "hideScrollDownButton"
    ]);
    return /* @__PURE__ */ React2__namespace.createElement(SelectPrimitive__namespace.Portal, null, /* @__PURE__ */ React2__namespace.createElement(SelectPrimitive__namespace.Content, _object_spread({
        "data-slot": "select-content",
        className: cn("uii:bg-popover uii:text-popover-foreground uii:data-[state=open]:animate-in uii:data-[state=closed]:animate-out uii:data-[state=closed]:fade-out-0 uii:data-[state=open]:fade-in-0 uii:data-[state=closed]:zoom-out-95 uii:data-[state=open]:zoom-in-95 uii:data-[side=bottom]:slide-in-from-top-2 uii:data-[side=left]:slide-in-from-right-2 uii:data-[side=right]:slide-in-from-left-2 uii:data-[side=top]:slide-in-from-bottom-2 uii:relative uii:z-50 uii:max-h-96 uii:min-w-[8rem] uii:overflow-hidden uii:rounded-md uii:border uii:shadow-md", position === "popper" && "uii:data-[side=bottom]:translate-y-1 uii:data-[side=left]:-translate-x-1 uii:data-[side=right]:translate-x-1 uii:data-[side=top]:-translate-y-1", "uii:slide-in-from-right-6", className),
        position: position
    }, props), !hideScrollUpButton && /* @__PURE__ */ React2__namespace.createElement(SelectScrollUpButton, null), /* @__PURE__ */ React2__namespace.createElement(SelectPrimitive__namespace.Viewport, {
        className: cn("uii:p-1", position === "popper" && "uii:h-[var(--radix-select-trigger-height)] uii:w-full uii:min-w-[var(--radix-select-trigger-width)] uii:scroll-my-1")
    }, children), footer ? /* @__PURE__ */ React2__namespace.createElement("div", {
        className: "uii:border-t uii:p-2 uii:bg-popover"
    }, footer) : null, !hideScrollDownButton && /* @__PURE__ */ React2__namespace.createElement(SelectScrollDownButton, null)));
}
function SelectItem(_param) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /* @__PURE__ */ React2__namespace.createElement(SelectPrimitive__namespace.Item, _object_spread({
        "data-slot": "select-item",
        className: cn("uii:focus:bg-accent uii:focus:text-accent-foreground uii:[&_svg:not([class*=text-])]:text-muted-foreground uii:relative uii:flex uii:w-full uii:cursor-default uii:items-center uii:gap-2 uii:rounded-sm uii:py-1.5 uii:pr-8 uii:pl-2 uii:text-sm uii:outline-hidden uii:select-none uii:data-[disabled]:pointer-events-none uii:data-[disabled]:opacity-50 uii:[&_svg]:pointer-events-none uii:[&_svg]:shrink-0 uii:[&_svg:not([class*=size-])]:size-4 uii:*:[span]:last:flex uii:*:[span]:last:items-center uii:*:[span]:last:gap-2", className)
    }, props), /* @__PURE__ */ React2__namespace.createElement("span", {
        className: "uii:absolute uii:right-2 uii:flex uii:size-3.5 uii:items-center uii:justify-center"
    }, /* @__PURE__ */ React2__namespace.createElement(SelectPrimitive__namespace.ItemIndicator, null, /* @__PURE__ */ React2__namespace.createElement(lucideReact.CheckIcon, {
        className: "uii:size-4"
    }))), /* @__PURE__ */ React2__namespace.createElement(SelectPrimitive__namespace.ItemText, null, children));
}
function SelectScrollUpButton(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React2__namespace.createElement(SelectPrimitive__namespace.ScrollUpButton, _object_spread({
        "data-slot": "select-scroll-up-button",
        className: cn("uii:flex uii:cursor-default uii:items-center uii:justify-center uii:py-1", className)
    }, props), /* @__PURE__ */ React2__namespace.createElement(lucideReact.ChevronUpIcon, {
        className: "uii:size-4"
    }));
}
function SelectScrollDownButton(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /* @__PURE__ */ React2__namespace.createElement(SelectPrimitive__namespace.ScrollDownButton, _object_spread({
        "data-slot": "select-scroll-down-button",
        className: cn("uii:flex uii:cursor-default uii:items-center uii:justify-center uii:py-1", className)
    }, props), /* @__PURE__ */ React2__namespace.createElement(lucideReact.ChevronDownIcon, {
        className: "uii:size-4"
    }));
}
// src/components/fields/Select.tsx
function useResolvedExpectedType2(expectedType, devCtx) {
    var inferredTypes = devCtx === null || devCtx === void 0 ? void 0 : devCtx.inferredTypes;
    return React2__namespace.useMemo(function() {
        var _match_;
        if (!expectedType) return "any";
        if (!expectedType.startsWith("$infer<")) {
            return expectedType;
        }
        var match = expectedType.match(/^\$infer<(.+)>$/);
        if (!match) return expectedType;
        var content = ((_match_ = match[1]) === null || _match_ === void 0 ? void 0 : _match_.trim()) || "";
        if (content.startsWith("[") && content.endsWith("]")) {
            var arrayContent = content.slice(1, -1);
            var fieldNames = arrayContent.split(",").map(function(s) {
                return s.trim().replace(/^["']|["']$/g, "");
            }).filter(Boolean);
            if (!inferredTypes) {
                return "Subscribing to: ".concat(fieldNames.join(", "));
            }
            var types = fieldNames.map(function(name) {
                return inferredTypes[name];
            }).filter(function(t) {
                return !!t && t.length > 0;
            });
            if (types.length === 0) {
                return "Waiting for: ".concat(fieldNames.join(", "));
            }
            return types.length === 1 ? types[0] : types.join(" & ");
        }
        if (!content.includes("|") && /^[a-zA-Z_][a-zA-Z0-9_\-]*$/.test(content)) {
            if (!inferredTypes) {
                return "Subscribing to: ".concat(content);
            }
            var resolvedType = inferredTypes[content];
            return resolvedType || "Waiting for: ".concat(content);
        }
        return content;
    }, [
        expectedType,
        inferredTypes
    ]);
}
function Select2(param) {
    var fieldName = param.fieldName, label = param.label, value = param.value, onChange = param.onChange, rawOptions = param.options, _param_disabled = param.disabled, disabled = _param_disabled === void 0 ? false : _param_disabled, placeholder = param.placeholder, _param_expectedType = param.expectedType, expectedType = _param_expectedType === void 0 ? "string" : _param_expectedType, _param_hideTypeBadge = param.hideTypeBadge, hideTypeBadge = _param_hideTypeBadge === void 0 ? false : _param_hideTypeBadge, _param_required = param.required, required = _param_required === void 0 ? false : _param_required, _param_hasRequiredError = param.hasRequiredError, hasRequiredError = _param_hasRequiredError === void 0 ? false : _param_hasRequiredError, className = param.className, children = param.children;
    var devCtx = React2.useContext(DevContext);
    var resolvedExpectedType = useResolvedExpectedType2(expectedType, devCtx);
    var _React2__namespace_useState = _sliced_to_array(React2__namespace.useState(false), 2), isExpressionMode = _React2__namespace_useState[0], setIsExpressionMode = _React2__namespace_useState[1];
    var _React2__namespace_useState1 = _sliced_to_array(React2__namespace.useState(""), 2), expressionValue = _React2__namespace_useState1[0], setExpressionValue = _React2__namespace_useState1[1];
    var options = React2__namespace.useMemo(function() {
        return rawOptions.map(function(opt) {
            return typeof opt === "string" ? {
                value: opt,
                label: opt
            } : opt;
        });
    }, [
        rawOptions
    ]);
    var displayValue = React2__namespace.useMemo(function() {
        if (value && (typeof value === "undefined" ? "undefined" : _type_of(value)) === "object" && "expression" in value) {
            return value.expression || "";
        }
        return String(value !== null && value !== void 0 ? value : "");
    }, [
        value
    ]);
    var isExpression = React2__namespace.useMemo(function() {
        return value && (typeof value === "undefined" ? "undefined" : _type_of(value)) === "object" && "expression" in value;
    }, [
        value
    ]);
    React2__namespace.useEffect(function() {
        if (isExpression) {
            setIsExpressionMode(true);
            setExpressionValue(displayValue);
        }
    }, [
        isExpression,
        displayValue
    ]);
    var handleSelectChange = React2__namespace.useCallback(function(newValue) {
        if (newValue === "__expression__") {
            setIsExpressionMode(true);
            return;
        }
        onChange(newValue);
    }, [
        onChange
    ]);
    var handleExpressionChange = React2__namespace.useCallback(function(e) {
        var newValue = e.target.value;
        setExpressionValue(newValue);
        onChange({
            expression: newValue,
            type: "expression"
        });
    }, [
        onChange
    ]);
    var handleSwitchToValue = React2__namespace.useCallback(function() {
        setIsExpressionMode(false);
        setExpressionValue("");
        onChange("");
    }, [
        onChange
    ]);
    var showError = hasRequiredError || required && !displayValue;
    var renderProps = {
        value: displayValue,
        onChange: handleSelectChange,
        onExpressionClick: function() {
            return setIsExpressionMode(true);
        },
        options: options,
        localInput: displayValue,
        setLocalInput: function() {},
        expressionMode: {
            current: isExpressionMode ? "expression" : "value",
            isExpressionMode: isExpressionMode,
            isEditorMode: false,
            isEditing: false,
            isFullScreen: false,
            expression: expressionValue,
            switchToValue: handleSwitchToValue,
            switchToExpression: function() {
                return setIsExpressionMode(true);
            },
            switchToEditor: function() {
                return setIsExpressionMode(true);
            },
            clear: handleSwitchToValue
        },
        hasError: showError
    };
    var isWaiting = resolvedExpectedType.startsWith("Waiting for:") || resolvedExpectedType.startsWith("Subscribing to:");
    return /* @__PURE__ */ React2__namespace.createElement("div", {
        className: cn("uii:mb-2", className)
    }, /* @__PURE__ */ React2__namespace.createElement("div", {
        className: "uii:flex uii:items-center uii:gap-2 uii:mt-2"
    }, /* @__PURE__ */ React2__namespace.createElement("label", {
        htmlFor: fieldName,
        className: "uii:text-xs uii:font-bold uii:text-muted-foreground"
    }, label, ":"), resolvedExpectedType !== "$.interface.timer" && /* @__PURE__ */ React2__namespace.createElement("span", {
        className: cn("uii:-mt-2 uii:inline-flex uii:px-1 uii:py-0.5 uii:rounded-sm uii:text-[10px] uii:font-mono uii:font-light uii:max-w-[300px] uii:truncate", isWaiting ? "uii:bg-yellow-100 uii:text-yellow-700" : "uii:bg-gray-200 uii:text-muted-foreground"),
        title: resolvedExpectedType
    }, resolvedExpectedType), showError && /* @__PURE__ */ React2__namespace.createElement("span", {
        className: "uii:-mt-2 uii:inline-flex uii:px-1 uii:py-0.5 uii:bg-red-100 uii:text-red-600 uii:rounded-sm uii:text-[10px] uii:font-medium"
    }, "Required")), /* @__PURE__ */ React2__namespace.createElement("div", {
        className: "uii:mt-0.5"
    }, children ? // Use custom render function
    children(renderProps) : isExpressionMode ? // Expression mode - show input with clear button
    /* @__PURE__ */ React2__namespace.createElement("div", {
        className: "uii:flex uii:items-center uii:h-9 uii:rounded-sm uii:border uii:border-amber-500/50 uii:bg-amber-500/5"
    }, /* @__PURE__ */ React2__namespace.createElement("input", {
        id: fieldName,
        name: fieldName,
        type: "text",
        value: expressionValue,
        onChange: handleExpressionChange,
        disabled: disabled,
        placeholder: "Enter expression...",
        className: cn("uii:flex-1 uii:h-full uii:px-3 uii:bg-transparent uii:text-sm uii:font-mono uii:text-amber-600", "uii:outline-none uii:border-none", disabled && "uii:opacity-50 uii:cursor-not-allowed")
    }), /* @__PURE__ */ React2__namespace.createElement("button", {
        type: "button",
        onClick: handleSwitchToValue,
        className: "uii:flex uii:items-center uii:justify-center uii:h-full uii:px-2 uii:text-amber-600 hover:uii:text-red-600 uii:border-l uii:border-amber-500/30",
        title: "Clear and return to value mode"
    }, "\xD7")) : // Value mode - show select
    // <select
    //   id={fieldName}
    //   name={fieldName}
    //   value={displayValue}
    //   onChange={(e) => handleSelectChange(e.target.value)}
    //   disabled={disabled}
    //   className={cn(
    //     'uii:w-full uii:h-9 uii:px-3 uii:rounded-sm uii:border uii:bg-background uii:text-sm',
    //     'uii:outline-none uii:transition-all uii:cursor-pointer',
    //     'focus:uii:border-ring focus:uii:ring-ring/50 focus:uii:ring-[3px]',
    //     showError
    //       ? 'uii:border-red-500 hover:uii:border-red-600'
    //       : 'uii:border-input hover:uii:border-ring/50',
    //     disabled && 'uii:opacity-50 uii:cursor-not-allowed'
    //   )}
    // >
    //   {placeholder && (
    //     <option value="" disabled>
    //       {placeholder}
    //     </option>
    //   )}
    //   {options.map(opt => (
    //     <option key={opt.value} value={opt.value}>
    //       {opt.label}
    //     </option>
    //   ))}
    //   <option value="__expression__">
    //     📝 Custom Expression
    //   </option>
    // </select>
    /* @__PURE__ */ React2__namespace.createElement(Select, {
        value: displayValue,
        onValueChange: function(e) {
            return handleSelectChange(e);
        },
        disabled: disabled !== null && disabled !== void 0 ? disabled : disabled
    }, /* @__PURE__ */ React2__namespace.createElement(SelectTrigger, {
        className: "ui:w-full ui:h-9 ui:px-3 ui:border ui:border-input ui:rounded-sm ui:bg-background"
    }, /* @__PURE__ */ React2__namespace.createElement(SelectValue, {
        placeholder: placeholder
    })), /* @__PURE__ */ React2__namespace.createElement(SelectContent, null, options.map(function(opt) {
        return /* @__PURE__ */ React2__namespace.createElement(SelectItem, {
            key: opt.value,
            value: opt.value
        }, opt.node ? opt.node : /* @__PURE__ */ React2__namespace.createElement(React2__namespace.Fragment, null, opt.label));
    })))));
}
// src/components/template-editor/operatorTypes.ts
function parseInferredTypes(typeStr) {
    var result = {
        baseTypes: [],
        stringConstants: [],
        numberConstants: [],
        hasConstants: false,
        rawTypes: []
    };
    if (!typeStr || typeStr === "any" || typeStr === "unknown") {
        result.baseTypes = [
            "any"
        ];
        result.rawTypes = [
            "any"
        ];
        return result;
    }
    var types = typeStr.split("|").map(function(t) {
        return t.trim();
    }).filter(Boolean);
    var baseTypesSet = /* @__PURE__ */ new Set();
    var rawTypesSet = /* @__PURE__ */ new Set();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = types[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var t = _step.value;
            rawTypesSet.add(t);
            var stringLiteralMatch = t.match(/^["'](.*)["']$/);
            if (stringLiteralMatch && stringLiteralMatch[1] !== void 0) {
                result.stringConstants.push(stringLiteralMatch[1]);
                baseTypesSet.add("string");
                result.hasConstants = true;
                continue;
            }
            if (/^-?\d+(\.\d+)?$/.test(t)) {
                result.numberConstants.push(parseFloat(t));
                baseTypesSet.add("number");
                result.hasConstants = true;
                continue;
            }
            if (t === "true" || t === "false") {
                baseTypesSet.add("boolean");
                result.hasConstants = true;
                continue;
            }
            baseTypesSet.add(t);
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
    result.baseTypes = Array.from(baseTypesSet);
    result.rawTypes = Array.from(rawTypesSet);
    return result;
}
function computeExtendedType(inferredType, opDef) {
    if (opDef.narrowsTo === "never") {
        return "never";
    }
    var parsed = parseInferredTypes(inferredType);
    var matchingLiterals = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = parsed.rawTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var t = _step.value;
            if (opDef.narrowsTo === "string") {
                if (t === "string") ;
                else if (/^["'].*["']$/.test(t)) {
                    matchingLiterals.push(t);
                }
            } else if (opDef.narrowsTo === "number") {
                if (t === "number") ;
                else if (/^-?\d+(\.\d+)?$/.test(t)) {
                    matchingLiterals.push(t);
                }
            } else if (opDef.narrowsTo === "boolean") {
                if (t === "boolean") ;
                else if (t === "true" || t === "false") {
                    matchingLiterals.push(t);
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
    var result = _to_consumable_array(matchingLiterals);
    if (opDef.extendsWithBase || matchingLiterals.length === 0) {
        if (!result.includes(opDef.narrowsTo)) {
            result.push(opDef.narrowsTo);
        }
    }
    return result.length > 0 ? result.join(" | ") : opDef.narrowsTo;
}
function filterOperatorsByType(operators, inferredType) {
    var parsed = parseInferredTypes(inferredType);
    var baseTypes = parsed.baseTypes;
    return operators.filter(function(op) {
        if (op.types.includes("any")) return true;
        return op.types.some(function(t) {
            return baseTypes.includes(t) || baseTypes.includes("any");
        });
    });
}
function getStringConstants(inferredType) {
    return parseInferredTypes(inferredType).stringConstants;
}
function getNumberConstants(inferredType) {
    return parseInferredTypes(inferredType).numberConstants;
}
// src/components/fields/index.tsx
function useTemplateFieldContext() {
    return {
        yDoc: null,
        collabUser: null,
        awareness: null,
        availableNodes: null,
        myInterface: null,
        typeDeclarations: "",
        element: null,
        nodeId: "",
        onControlFocus: function() {},
        onControlBlur: function() {},
        onRecordChange: function() {},
        onValidationChange: function() {},
        parentFieldPath: null,
        disabled: false
    };
}
function useIsInTemplateFieldProvider() {
    return false;
}
function useFieldPath(fieldName) {
    return fieldName;
}
function TemplateFieldProvider(param) {
    var children = param.children;
    return /* @__PURE__ */ React2__namespace.default.createElement(React2__namespace.default.Fragment, null, children);
}
function NestedFieldProvider(param) {
    var children = param.children;
    return /* @__PURE__ */ React2__namespace.default.createElement(React2__namespace.default.Fragment, null, children);
}
var InferredTypesContext = React2.createContext(null);
function useInferredTypes() {
    var devContext = React2.useContext(DevContext);
    var realContext = React2.useContext(InferredTypesContext);
    if (devContext) {
        return {
            inferredTypes: devContext.inferredTypes,
            setInferredType: devContext.setInferredType,
            getInferredType: devContext.getInferredType,
            clearInferredType: devContext.clearInferredType,
            clearAllInferredTypes: devContext.clearAllInferredTypes
        };
    }
    return realContext;
}
function InferredTypesProvider(param) {
    var children = param.children;
    return /* @__PURE__ */ React2__namespace.default.createElement(React2__namespace.default.Fragment, null, children);
}
function intersectTypes(types) {
    var validTypes = types.filter(function(t) {
        return !!t && t.length > 0;
    });
    if (validTypes.length === 0) return "any";
    if (validTypes.length === 1) return validTypes[0];
    return validTypes[0];
}
function parseInferSyntax(expectedType) {
    var _match_;
    if (!expectedType || !expectedType.startsWith("$infer<")) {
        return {
            mode: "normal"
        };
    }
    var match = expectedType.match(/^\$infer<(.+)>$/);
    if (!match) {
        return {
            mode: "normal"
        };
    }
    var content = ((_match_ = match[1]) === null || _match_ === void 0 ? void 0 : _match_.trim()) || "";
    if (!content.includes("|") && /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(content)) {
        return {
            mode: "subscribe",
            subscribeToField: content
        };
    }
    var allowedTypes = content.split("|").map(function(t) {
        return t.trim();
    }).filter(Boolean);
    return {
        mode: "publish",
        allowedTypes: allowedTypes
    };
}
var OPERATORS_BY_TYPE = {
    string: [
        {
            value: "==",
            label: "equals (==)"
        },
        {
            value: "!=",
            label: "not equals (!=)"
        },
        {
            value: "contains",
            label: "contains"
        },
        {
            value: "startsWith",
            label: "starts with"
        },
        {
            value: "endsWith",
            label: "ends with"
        }
    ],
    number: [
        {
            value: "==",
            label: "equals (==)"
        },
        {
            value: "!=",
            label: "not equals (!=)"
        },
        {
            value: "<",
            label: "less than (<)"
        },
        {
            value: ">",
            label: "greater than (>)"
        },
        {
            value: "<=",
            label: "less than or equal (<=)"
        },
        {
            value: ">=",
            label: "greater than or equal (>=)"
        }
    ],
    boolean: [
        {
            value: "==",
            label: "equals (==)"
        },
        {
            value: "!=",
            label: "not equals (!=)"
        }
    ],
    any: [
        {
            value: "==",
            label: "equals (==)"
        },
        {
            value: "!=",
            label: "not equals (!=)"
        }
    ]
};
function getOperatorsForType(type) {
    var _OPERATORS_BY_TYPE_type, _ref;
    return (_ref = (_OPERATORS_BY_TYPE_type = OPERATORS_BY_TYPE[type]) !== null && _OPERATORS_BY_TYPE_type !== void 0 ? _OPERATORS_BY_TYPE_type : OPERATORS_BY_TYPE.any) !== null && _ref !== void 0 ? _ref : [
        {
            value: "==",
            label: "equals (==)"
        },
        {
            value: "!=",
            label: "not equals (!=)"
        }
    ];
}
function NodePropertyProvider(param) {
    var children = param.children;
    return /* @__PURE__ */ React2__namespace.default.createElement(React2__namespace.default.Fragment, null, children);
}
function useIsInNodePropertyProvider() {
    var devContext = React2.useContext(DevContext);
    return devContext !== null;
}
function useNodeProperty(key) {
    var devContext = React2.useContext(DevContext);
    var _React2_useState = _sliced_to_array(React2.useState(function() {
        var _devContext_data;
        return devContext === null || devContext === void 0 ? void 0 : (_devContext_data = devContext.data) === null || _devContext_data === void 0 ? void 0 : _devContext_data[key];
    }), 2), devValue = _React2_useState[0], setDevValue = _React2_useState[1];
    React2__namespace.default.useEffect(function() {
        if (devContext) {
            setDevValue(devContext.data[key]);
        }
    }, [
        devContext,
        key
    ]);
    var devSetter = React2.useCallback(function(value) {
        if (devContext) {
            devContext.setProperty(key, value);
            setDevValue(value);
        }
    }, [
        devContext,
        key
    ]);
    var noopSetter = React2.useCallback(function() {
        console.warn('[useNodeProperty] No provider - cannot set "'.concat(key, '"'));
    }, [
        key
    ]);
    if (devContext) {
        return [
            devValue,
            devSetter
        ];
    }
    return [
        void 0,
        noopSetter
    ];
}
function useNodeProperties() {
    var devContext = React2.useContext(DevContext);
    var _React2_useState = _sliced_to_array(React2.useState(function() {
        var _devContext_data;
        return (_devContext_data = devContext === null || devContext === void 0 ? void 0 : devContext.data) !== null && _devContext_data !== void 0 ? _devContext_data : {};
    }), 2), devData = _React2_useState[0], setDevData = _React2_useState[1];
    React2__namespace.default.useEffect(function() {
        if (devContext) {
            setDevData(_object_spread({}, devContext.data));
        }
    }, [
        devContext,
        devContext === null || devContext === void 0 ? void 0 : devContext.data
    ]);
    var devSetter = React2.useCallback(function(updates) {
        if (devContext) {
            Object.entries(updates).forEach(function(param) {
                var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                devContext.setProperty(key, value);
            });
            setDevData(function(prev) {
                return _object_spread({}, prev, updates);
            });
        }
    }, [
        devContext
    ]);
    var noopSetter = React2.useCallback(function() {
        console.warn("[useNodeProperties] No provider - cannot set properties");
    }, []);
    if (devContext) {
        return [
            devData,
            devSetter
        ];
    }
    return [
        {},
        noopSetter
    ];
}
function useInferredType(fieldName) {
    var devContext = React2.useContext(DevContext);
    var _React2_useState = _sliced_to_array(React2.useState(function() {
        var _devContext_inferredTypes;
        return devContext === null || devContext === void 0 ? void 0 : (_devContext_inferredTypes = devContext.inferredTypes) === null || _devContext_inferredTypes === void 0 ? void 0 : _devContext_inferredTypes[fieldName];
    }), 2), devInferredType = _React2_useState[0], setDevInferredType = _React2_useState[1];
    React2__namespace.default.useEffect(function() {
        if (devContext) {
            setDevInferredType(devContext.inferredTypes[fieldName]);
        }
    }, [
        devContext,
        fieldName,
        devContext === null || devContext === void 0 ? void 0 : devContext.inferredTypes
    ]);
    if (devContext) {
        return devInferredType;
    }
    return void 0;
}
function useSetInferredType() {
    var devContext = React2.useContext(DevContext);
    return React2.useCallback(function(fieldName, type) {
        if (devContext) {
            devContext.setInferredType(fieldName, type);
        } else {
            console.warn('[useSetInferredType] No provider - cannot set "'.concat(fieldName, '" to "').concat(type, '"'));
        }
    }, [
        devContext
    ]);
}
function useClearInferredType() {
    var devContext = React2.useContext(DevContext);
    return React2.useCallback(function(fieldName) {
        if (devContext) {
            devContext.clearInferredType(fieldName);
        } else {
            console.warn('[useClearInferredType] No provider - cannot clear "'.concat(fieldName, '"'));
        }
    }, [
        devContext
    ]);
}
function useClearAllInferredTypes() {
    var devContext = React2.useContext(DevContext);
    return React2.useCallback(function() {
        if (devContext) {
            devContext.clearAllInferredTypes();
        } else {
            console.warn("[useClearAllInferredTypes] No provider - cannot clear all types");
        }
    }, [
        devContext
    ]);
}
function useClearValidationErrorsByPrefix() {
    return React2.useCallback(function(fieldPrefix) {
        console.log('[useClearValidationErrorsByPrefix] Dev mode - clearing errors with prefix "'.concat(fieldPrefix, '" is a no-op'));
    }, []);
}
function useFlowEditorActions() {
    var clearValidationErrorsByPrefix = useClearValidationErrorsByPrefix();
    return {
        triggerLayoutUpdate: function() {
            console.log("[useFlowEditorActions] Dev mode - triggerLayoutUpdate is a no-op");
        },
        triggerValidation: function() {
            console.log("[useFlowEditorActions] Dev mode - triggerValidation is a no-op");
        },
        clearValidationErrorsByPrefix: clearValidationErrorsByPrefix
    };
}
function useAllInferredTypes() {
    var devContext = React2.useContext(DevContext);
    var _React2_useState = _sliced_to_array(React2.useState(function() {
        var _devContext_inferredTypes;
        return (_devContext_inferredTypes = devContext === null || devContext === void 0 ? void 0 : devContext.inferredTypes) !== null && _devContext_inferredTypes !== void 0 ? _devContext_inferredTypes : {};
    }), 2), devTypes = _React2_useState[0], setDevTypes = _React2_useState[1];
    React2__namespace.default.useEffect(function() {
        if (devContext) {
            setDevTypes(_object_spread({}, devContext.inferredTypes));
        }
    }, [
        devContext,
        devContext === null || devContext === void 0 ? void 0 : devContext.inferredTypes
    ]);
    if (devContext) {
        return devTypes;
    }
    return {};
}
function useSetProperty() {
    var devContext = React2.useContext(DevContext);
    return React2.useCallback(function(key, value) {
        if (devContext) {
            devContext.setProperty(key, value);
        } else {
            console.warn('[useSetProperty] No provider - cannot set "'.concat(key, '"'));
        }
    }, [
        devContext
    ]);
}
function useTriggerLayoutUpdate() {
    var devContext = React2.useContext(DevContext);
    return React2.useCallback(function() {
        if (devContext) {
            console.log("[useTriggerLayoutUpdate] Dev mode - layout update is a no-op");
        } else {
            console.warn("[useTriggerLayoutUpdate] No provider - layout update ignored");
        }
    }, [
        devContext
    ]);
}
function useFieldValidation() {
    var setFieldRequired = React2.useCallback(function(fieldName, required) {
        console.warn('[useFieldValidation] Mock mode - cannot set required for "'.concat(fieldName, '"'));
    }, []);
    var setFieldRequiredIf = React2.useCallback(function(fieldName, requiredIf) {
        console.warn('[useFieldValidation] Mock mode - cannot set requiredIf for "'.concat(fieldName, '"'));
    }, []);
    var setFieldValidation = React2.useCallback(function(fieldName, customValidation) {
        console.warn('[useFieldValidation] Mock mode - cannot set validation for "'.concat(fieldName, '"'));
    }, []);
    var clearFieldValidation = React2.useCallback(function(fieldName) {
        console.warn('[useFieldValidation] Mock mode - cannot clear validation for "'.concat(fieldName, '"'));
    }, []);
    var isFieldRequired = React2.useCallback(function(fieldName) {
        return false;
    }, []);
    var validateField = React2.useCallback(function(fieldName) {
        return null;
    }, []);
    return {
        setFieldRequired: setFieldRequired,
        setFieldRequiredIf: setFieldRequiredIf,
        setFieldValidation: setFieldValidation,
        clearFieldValidation: clearFieldValidation,
        isFieldRequired: isFieldRequired,
        validateField: validateField
    };
}
exports.Button = Button;
exports.ConfirmationDropdownMenuItem = ConfirmationDropdownMenuItem;
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.DropdownMenuClose = DropdownMenuClose;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuLabel = DropdownMenuLabel;
exports.DropdownMenuPortal = DropdownMenuPortal;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuShortcut = DropdownMenuShortcut;
exports.DropdownMenuSub = DropdownMenuSub;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.buttonVariants = buttonVariants;
exports.fields = fields_exports; //# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map