(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~js/admin"],{

/***/ "./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js":
/*!************************************************************************!*\
  !*** ./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * bsCustomFileInput v1.3.2 (https://github.com/Johann-S/bs-custom-file-input)
 * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>
 * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
 */
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  var Selector = {
    CUSTOMFILE: '.custom-file input[type="file"]',
    CUSTOMFILELABEL: '.custom-file-label',
    FORM: 'form',
    INPUT: 'input'
  };

  var textNodeType = 3;

  var getDefaultText = function getDefaultText(input) {
    var defaultText = '';
    var label = input.parentNode.querySelector(Selector.CUSTOMFILELABEL);

    if (label) {
      defaultText = label.innerHTML;
    }

    return defaultText;
  };

  var findFirstChildNode = function findFirstChildNode(element) {
    if (element.childNodes.length > 0) {
      var childNodes = [].slice.call(element.childNodes);

      for (var i = 0; i < childNodes.length; i++) {
        var node = childNodes[i];

        if (node.nodeType !== textNodeType) {
          return node;
        }
      }
    }

    return element;
  };

  var restoreDefaultText = function restoreDefaultText(input) {
    var defaultText = input.bsCustomFileInput.defaultText;
    var label = input.parentNode.querySelector(Selector.CUSTOMFILELABEL);

    if (label) {
      var element = findFirstChildNode(label);
      element.innerHTML = defaultText;
    }
  };

  var fileApi = !!window.File;
  var FAKE_PATH = 'fakepath';
  var FAKE_PATH_SEPARATOR = '\\';

  var getSelectedFiles = function getSelectedFiles(input) {
    if (input.hasAttribute('multiple') && fileApi) {
      return [].slice.call(input.files).map(function (file) {
        return file.name;
      }).join(', ');
    }

    if (input.value.indexOf(FAKE_PATH) !== -1) {
      var splittedValue = input.value.split(FAKE_PATH_SEPARATOR);
      return splittedValue[splittedValue.length - 1];
    }

    return input.value;
  };

  function handleInputChange() {
    var label = this.parentNode.querySelector(Selector.CUSTOMFILELABEL);

    if (label) {
      var element = findFirstChildNode(label);
      var inputValue = getSelectedFiles(this);

      if (inputValue.length) {
        element.innerHTML = inputValue;
      } else {
        restoreDefaultText(this);
      }
    }
  }

  function handleFormReset() {
    var customFileList = [].slice.call(this.querySelectorAll(Selector.INPUT)).filter(function (input) {
      return !!input.bsCustomFileInput;
    });

    for (var i = 0, len = customFileList.length; i < len; i++) {
      restoreDefaultText(customFileList[i]);
    }
  }

  var customProperty = 'bsCustomFileInput';
  var Event = {
    FORMRESET: 'reset',
    INPUTCHANGE: 'change'
  };
  var bsCustomFileInput = {
    init: function init(inputSelector, formSelector) {
      if (inputSelector === void 0) {
        inputSelector = Selector.CUSTOMFILE;
      }

      if (formSelector === void 0) {
        formSelector = Selector.FORM;
      }

      var customFileInputList = [].slice.call(document.querySelectorAll(inputSelector));
      var formList = [].slice.call(document.querySelectorAll(formSelector));

      for (var i = 0, len = customFileInputList.length; i < len; i++) {
        var input = customFileInputList[i];
        Object.defineProperty(input, customProperty, {
          value: {
            defaultText: getDefaultText(input)
          },
          writable: true
        });
        handleInputChange.call(input);
        input.addEventListener(Event.INPUTCHANGE, handleInputChange);
      }

      for (var _i = 0, _len = formList.length; _i < _len; _i++) {
        formList[_i].addEventListener(Event.FORMRESET, handleFormReset);

        Object.defineProperty(formList[_i], customProperty, {
          value: true,
          writable: true
        });
      }
    },
    destroy: function destroy() {
      var formList = [].slice.call(document.querySelectorAll(Selector.FORM)).filter(function (form) {
        return !!form.bsCustomFileInput;
      });
      var customFileInputList = [].slice.call(document.querySelectorAll(Selector.INPUT)).filter(function (input) {
        return !!input.bsCustomFileInput;
      });

      for (var i = 0, len = customFileInputList.length; i < len; i++) {
        var input = customFileInputList[i];
        restoreDefaultText(input);
        input[customProperty] = undefined;
        input.removeEventListener(Event.INPUTCHANGE, handleInputChange);
      }

      for (var _i2 = 0, _len2 = formList.length; _i2 < _len2; _i2++) {
        formList[_i2].removeEventListener(Event.FORMRESET, handleFormReset);

        formList[_i2][customProperty] = undefined;
      }
    }
  };

  return bsCustomFileInput;

}));
//# sourceMappingURL=bs-custom-file-input.js.map


/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  return !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/create-html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.github.io/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/forced-object-prototype-accessors-methods.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/core-js/internals/forced-object-prototype-accessors-methods.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Forced replacement object prototype accessors methods
module.exports = IS_PURE || !fails(function () {
  var key = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, key, function () { /* empty */ });
  delete global[key];
});


/***/ }),

/***/ "./node_modules/core-js/internals/forced-string-html-method.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/forced-string-html-method.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/forced-string-trim-method.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/forced-string-trim-method.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/host-report-errors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/host-report-errors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  while (!(step = iterator.next()).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "./node_modules/core-js/internals/microtask.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/microtask.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var macrotask = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
var userAgent = __webpack_require__(/*! ../internals/user-agent */ "./node_modules/core-js/internals/user-agent.js");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !/(iphone|ipod|ipad).*applewebkit/i.test(userAgent)) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-promise-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/native-promise-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global.Promise;


/***/ }),

/***/ "./node_modules/core-js/internals/new-promise-capability.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/internals/parse-float.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/parse-float.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var nativeParseFloat = global.parseFloat;
var FORCED = 1 / nativeParseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = nativeParseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : nativeParseFloat;


/***/ }),

/***/ "./node_modules/core-js/internals/parse-int.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/parse-int.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var nativeParseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return nativeParseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : nativeParseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/perform.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/perform.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/promise-resolve.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/promise-resolve.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.github.io/ecma262/#sec-samevalue
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/task.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/task.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "./node_modules/core-js/internals/user-agent.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/user-agent.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

var IS_CONCAT_SPREADABLE_SUPPORT = !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('filter') }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var SLOPPY_METHOD = sloppyArrayMethod('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || SLOPPY_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

// `Array.isArray` method
// https://tc39.github.io/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('map') }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reverse.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reverse.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

var nativeReverse = [].reverse;
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    if (isArray(this)) this.length = this.length;
    return nativeReverse.call(this);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('slice') }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.some.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.some.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $some = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").some;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

// `Array.prototype.some` method
// https://tc39.github.io/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: sloppyArrayMethod('some') }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.splice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.splice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('splice') }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.bind.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.bind.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-getter.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-getter.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var FORCED = __webpack_require__(/*! ../internals/forced-object-prototype-accessors-methods */ "./node_modules/core-js/internals/forced-object-prototype-accessors-methods.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

// `Object.prototype.__defineGetter__` method
// https://tc39.github.io/ecma262/#sec-object.prototype.__defineGetter__
if (DESCRIPTORS) {
  $({ target: 'Object', proto: true, forced: FORCED }, {
    __defineGetter__: function __defineGetter__(P, getter) {
      definePropertyModule.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.lookup-getter.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.lookup-getter.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var FORCED = __webpack_require__(/*! ../internals/forced-object-prototype-accessors-methods */ "./node_modules/core-js/internals/forced-object-prototype-accessors-methods.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;

// `Object.prototype.__lookupGetter__` method
// https://tc39.github.io/ecma262/#sec-object.prototype.__lookupGetter__
if (DESCRIPTORS) {
  $({ target: 'Object', proto: true, forced: FORCED }, {
    __lookupGetter__: function __lookupGetter__(P) {
      var O = toObject(this);
      var key = toPrimitive(P, true);
      var desc;
      do {
        if (desc = getOwnPropertyDescriptor(O, key)) return desc.get;
      } while (O = getPrototypeOf(O));
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseFloatImplementation = __webpack_require__(/*! ../internals/parse-float */ "./node_modules/core-js/internals/parse-float.js");

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != parseFloatImplementation }, {
  parseFloat: parseFloatImplementation
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/parse-int */ "./node_modules/core-js/internals/parse-int.js");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "./node_modules/core-js/internals/native-promise-constructor.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var task = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
var microtask = __webpack_require__(/*! ../internals/microtask */ "./node_modules/core-js/internals/microtask.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "./node_modules/core-js/internals/promise-resolve.js");
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "./node_modules/core-js/internals/host-report-errors.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js/internals/perform.js");
var userAgent = __webpack_require__(/*! ../internals/user-agent */ "./node_modules/core-js/internals/user-agent.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = global.fetch;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  // correct subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var empty = function () { /* empty */ };
  var FakePromise = (promise.constructor = {})[SPECIES] = function (exec) {
    exec(empty, empty);
  };
  // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !((IS_NODE || typeof PromiseRejectionEvent == 'function')
    && (!IS_PURE || promise['finally'])
    && promise.then(empty) instanceof FakePromise
    // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // we can't detect it synchronously, so just check versions
    && v8.indexOf('6.6') !== 0
    && userAgent.indexOf('Chrome/66') === -1);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = path[PROMISE];

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.link.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.link.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/forced-string-html-method */ "./node_modules/core-js/internals/forced-string-html-method.js");

// `String.prototype.link` method
// https://tc39.github.io/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative(nativeSearch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/forced-string-trim-method */ "./node_modules/core-js/internals/forced-string-trim-method.js");

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/user-agent */ "./node_modules/core-js/internals/user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./node_modules/select2/dist/js/select2.full.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/select2/dist/js/select2.full.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! Select2 4.0.10 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(n){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(function(d){var e=function(){if(d&&d.fn&&d.fn.select2&&d.fn.select2.amd)var e=d.fn.select2.amd;var t,n,i,h,o,s,f,g,m,v,y,_,r,a,w,l;function b(e,t){return r.call(e,t)}function c(e,t){var n,i,r,o,s,a,l,c,u,d,p,h=t&&t.split("/"),f=y.map,g=f&&f["*"]||{};if(e){for(s=(e=e.split("/")).length-1,y.nodeIdCompat&&w.test(e[s])&&(e[s]=e[s].replace(w,"")),"."===e[0].charAt(0)&&h&&(e=h.slice(0,h.length-1).concat(e)),u=0;u<e.length;u++)if("."===(p=e[u]))e.splice(u,1),u-=1;else if(".."===p){if(0===u||1===u&&".."===e[2]||".."===e[u-1])continue;0<u&&(e.splice(u-1,2),u-=2)}e=e.join("/")}if((h||g)&&f){for(u=(n=e.split("/")).length;0<u;u-=1){if(i=n.slice(0,u).join("/"),h)for(d=h.length;0<d;d-=1)if(r=(r=f[h.slice(0,d).join("/")])&&r[i]){o=r,a=u;break}if(o)break;!l&&g&&g[i]&&(l=g[i],c=u)}!o&&l&&(o=l,a=c),o&&(n.splice(0,a,o),e=n.join("/"))}return e}function A(t,n){return function(){var e=a.call(arguments,0);return"string"!=typeof e[0]&&1===e.length&&e.push(null),s.apply(h,e.concat([t,n]))}}function x(t){return function(e){m[t]=e}}function S(e){if(b(v,e)){var t=v[e];delete v[e],_[e]=!0,o.apply(h,t)}if(!b(m,e)&&!b(_,e))throw new Error("No "+e);return m[e]}function u(e){var t,n=e?e.indexOf("!"):-1;return-1<n&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function D(e){return e?u(e):[]}return e&&e.requirejs||(e?n=e:e={},m={},v={},y={},_={},r=Object.prototype.hasOwnProperty,a=[].slice,w=/\.js$/,f=function(e,t){var n,i=u(e),r=i[0],o=t[1];return e=i[1],r&&(n=S(r=c(r,o))),r?e=n&&n.normalize?n.normalize(e,function(t){return function(e){return c(e,t)}}(o)):c(e,o):(r=(i=u(e=c(e,o)))[0],e=i[1],r&&(n=S(r))),{f:r?r+"!"+e:e,n:e,pr:r,p:n}},g={require:function(e){return A(e)},exports:function(e){var t=m[e];return void 0!==t?t:m[e]={}},module:function(e){return{id:e,uri:"",exports:m[e],config:function(e){return function(){return y&&y.config&&y.config[e]||{}}}(e)}}},o=function(e,t,n,i){var r,o,s,a,l,c,u,d=[],p=typeof n;if(c=D(i=i||e),"undefined"==p||"function"==p){for(t=!t.length&&n.length?["require","exports","module"]:t,l=0;l<t.length;l+=1)if("require"===(o=(a=f(t[l],c)).f))d[l]=g.require(e);else if("exports"===o)d[l]=g.exports(e),u=!0;else if("module"===o)r=d[l]=g.module(e);else if(b(m,o)||b(v,o)||b(_,o))d[l]=S(o);else{if(!a.p)throw new Error(e+" missing "+o);a.p.load(a.n,A(i,!0),x(o),{}),d[l]=m[o]}s=n?n.apply(m[e],d):void 0,e&&(r&&r.exports!==h&&r.exports!==m[e]?m[e]=r.exports:s===h&&u||(m[e]=s))}else e&&(m[e]=n)},t=n=s=function(e,t,n,i,r){if("string"==typeof e)return g[e]?g[e](t):S(f(e,D(t)).f);if(!e.splice){if((y=e).deps&&s(y.deps,y.callback),!t)return;t.splice?(e=t,t=n,n=null):e=h}return t=t||function(){},"function"==typeof n&&(n=i,i=r),i?o(h,e,t,n):setTimeout(function(){o(h,e,t,n)},4),s},s.config=function(e){return s(e)},t._defined=m,(i=function(e,t,n){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(n=t,t=[]),b(m,e)||b(v,e)||(v[e]=[e,t,n])}).amd={jQuery:!0},e.requirejs=t,e.require=n,e.define=i),e.define("almond",function(){}),e.define("jquery",[],function(){var e=d||$;return null==e&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),e}),e.define("select2/utils",["jquery"],function(o){var r={};function u(e){var t=e.prototype,n=[];for(var i in t){"function"==typeof t[i]&&"constructor"!==i&&n.push(i)}return n}r.Extend=function(e,t){var n={}.hasOwnProperty;function i(){this.constructor=e}for(var r in t)n.call(t,r)&&(e[r]=t[r]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},r.Decorate=function(i,r){var e=u(r),t=u(i);function o(){var e=Array.prototype.unshift,t=r.prototype.constructor.length,n=i.prototype.constructor;0<t&&(e.call(arguments,i.prototype.constructor),n=r.prototype.constructor),n.apply(this,arguments)}r.displayName=i.displayName,o.prototype=new function(){this.constructor=o};for(var n=0;n<t.length;n++){var s=t[n];o.prototype[s]=i.prototype[s]}function a(e){var t=function(){};e in o.prototype&&(t=o.prototype[e]);var n=r.prototype[e];return function(){return Array.prototype.unshift.call(arguments,t),n.apply(this,arguments)}}for(var l=0;l<e.length;l++){var c=e[l];o.prototype[c]=a(c)}return o};function e(){this.listeners={}}e.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},e.prototype.trigger=function(e){var t=Array.prototype.slice,n=t.call(arguments,1);this.listeners=this.listeners||{},null==n&&(n=[]),0===n.length&&n.push({}),(n[0]._type=e)in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},e.prototype.invoke=function(e,t){for(var n=0,i=e.length;n<i;n++)e[n].apply(this,t)},r.Observable=e,r.generateChars=function(e){for(var t="",n=0;n<e;n++){t+=Math.floor(36*Math.random()).toString(36)}return t},r.bind=function(e,t){return function(){e.apply(t,arguments)}},r._convertData=function(e){for(var t in e){var n=t.split("-"),i=e;if(1!==n.length){for(var r=0;r<n.length;r++){var o=n[r];(o=o.substring(0,1).toLowerCase()+o.substring(1))in i||(i[o]={}),r==n.length-1&&(i[o]=e[t]),i=i[o]}delete e[t]}}return e},r.hasScroll=function(e,t){var n=o(t),i=t.style.overflowX,r=t.style.overflowY;return(i!==r||"hidden"!==r&&"visible"!==r)&&("scroll"===i||"scroll"===r||(n.innerHeight()<t.scrollHeight||n.innerWidth()<t.scrollWidth))},r.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})},r.appendMany=function(e,t){if("1.7"===o.fn.jquery.substr(0,3)){var n=o();o.map(t,function(e){n=n.add(e)}),t=n}e.append(t)},r.__cache={};var n=0;return r.GetUniqueElementId=function(e){var t=e.getAttribute("data-select2-id");return null==t&&(e.id?(t=e.id,e.setAttribute("data-select2-id",t)):(e.setAttribute("data-select2-id",++n),t=n.toString())),t},r.StoreData=function(e,t,n){var i=r.GetUniqueElementId(e);r.__cache[i]||(r.__cache[i]={}),r.__cache[i][t]=n},r.GetData=function(e,t){var n=r.GetUniqueElementId(e);return t?r.__cache[n]&&null!=r.__cache[n][t]?r.__cache[n][t]:o(e).data(t):r.__cache[n]},r.RemoveData=function(e){var t=r.GetUniqueElementId(e);null!=r.__cache[t]&&delete r.__cache[t],e.removeAttribute("data-select2-id")},r}),e.define("select2/results",["jquery","./utils"],function(h,f){function i(e,t,n){this.$element=e,this.data=n,this.options=t,i.__super__.constructor.call(this)}return f.Extend(i,f.Observable),i.prototype.render=function(){var e=h('<ul class="select2-results__options" role="listbox"></ul>');return this.options.get("multiple")&&e.attr("aria-multiselectable","true"),this.$results=e},i.prototype.clear=function(){this.$results.empty()},i.prototype.displayMessage=function(e){var t=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var n=h('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),i=this.options.get("translations").get(e.message);n.append(t(i(e.args))),n[0].className+=" select2-results__message",this.$results.append(n)},i.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},i.prototype.append=function(e){this.hideLoading();var t=[];if(null!=e.results&&0!==e.results.length){e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){var i=e.results[n],r=this.option(i);t.push(r)}this.$results.append(t)}else 0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"})},i.prototype.position=function(e,t){t.find(".select2-results").append(e)},i.prototype.sort=function(e){return this.options.get("sorter")(e)},i.prototype.highlightFirstItem=function(){var e=this.$results.find(".select2-results__option[aria-selected]"),t=e.filter("[aria-selected=true]");0<t.length?t.first().trigger("mouseenter"):e.first().trigger("mouseenter"),this.ensureHighlightVisible()},i.prototype.setClasses=function(){var t=this;this.data.current(function(e){var i=h.map(e,function(e){return e.id.toString()});t.$results.find(".select2-results__option[aria-selected]").each(function(){var e=h(this),t=f.GetData(this,"data"),n=""+t.id;null!=t.element&&t.element.selected||null==t.element&&-1<h.inArray(n,i)?e.attr("aria-selected","true"):e.attr("aria-selected","false")})})},i.prototype.showLoading=function(e){this.hideLoading();var t={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(e)},n=this.option(t);n.className+=" loading-results",this.$results.prepend(n)},i.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},i.prototype.option=function(e){var t=document.createElement("li");t.className="select2-results__option";var n={role:"option","aria-selected":"false"},i=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(var r in(null!=e.element&&i.call(e.element,":disabled")||null==e.element&&e.disabled)&&(delete n["aria-selected"],n["aria-disabled"]="true"),null==e.id&&delete n["aria-selected"],null!=e._resultId&&(t.id=e._resultId),e.title&&(t.title=e.title),e.children&&(n.role="group",n["aria-label"]=e.text,delete n["aria-selected"]),n){var o=n[r];t.setAttribute(r,o)}if(e.children){var s=h(t),a=document.createElement("strong");a.className="select2-results__group";h(a);this.template(e,a);for(var l=[],c=0;c<e.children.length;c++){var u=e.children[c],d=this.option(u);l.push(d)}var p=h("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});p.append(l),s.append(a),s.append(p)}else this.template(e,t);return f.StoreData(t,"data",e),t},i.prototype.bind=function(t,e){var l=this,n=t.id+"-results";this.$results.attr("id",n),t.on("results:all",function(e){l.clear(),l.append(e.data),t.isOpen()&&(l.setClasses(),l.highlightFirstItem())}),t.on("results:append",function(e){l.append(e.data),t.isOpen()&&l.setClasses()}),t.on("query",function(e){l.hideMessages(),l.showLoading(e)}),t.on("select",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("unselect",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("open",function(){l.$results.attr("aria-expanded","true"),l.$results.attr("aria-hidden","false"),l.setClasses(),l.ensureHighlightVisible()}),t.on("close",function(){l.$results.attr("aria-expanded","false"),l.$results.attr("aria-hidden","true"),l.$results.removeAttr("aria-activedescendant")}),t.on("results:toggle",function(){var e=l.getHighlightedResults();0!==e.length&&e.trigger("mouseup")}),t.on("results:select",function(){var e=l.getHighlightedResults();if(0!==e.length){var t=f.GetData(e[0],"data");"true"==e.attr("aria-selected")?l.trigger("close",{}):l.trigger("select",{data:t})}}),t.on("results:previous",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e);if(!(n<=0)){var i=n-1;0===e.length&&(i=0);var r=t.eq(i);r.trigger("mouseenter");var o=l.$results.offset().top,s=r.offset().top,a=l.$results.scrollTop()+(s-o);0===i?l.$results.scrollTop(0):s-o<0&&l.$results.scrollTop(a)}}),t.on("results:next",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e)+1;if(!(n>=t.length)){var i=t.eq(n);i.trigger("mouseenter");var r=l.$results.offset().top+l.$results.outerHeight(!1),o=i.offset().top+i.outerHeight(!1),s=l.$results.scrollTop()+o-r;0===n?l.$results.scrollTop(0):r<o&&l.$results.scrollTop(s)}}),t.on("results:focus",function(e){e.element.addClass("select2-results__option--highlighted")}),t.on("results:message",function(e){l.displayMessage(e)}),h.fn.mousewheel&&this.$results.on("mousewheel",function(e){var t=l.$results.scrollTop(),n=l.$results.get(0).scrollHeight-t+e.deltaY,i=0<e.deltaY&&t-e.deltaY<=0,r=e.deltaY<0&&n<=l.$results.height();i?(l.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):r&&(l.$results.scrollTop(l.$results.get(0).scrollHeight-l.$results.height()),e.preventDefault(),e.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(e){var t=h(this),n=f.GetData(this,"data");"true"!==t.attr("aria-selected")?l.trigger("select",{originalEvent:e,data:n}):l.options.get("multiple")?l.trigger("unselect",{originalEvent:e,data:n}):l.trigger("close",{})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(e){var t=f.GetData(this,"data");l.getHighlightedResults().removeClass("select2-results__option--highlighted"),l.trigger("results:focus",{data:t,element:h(this)})})},i.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},i.prototype.destroy=function(){this.$results.remove()},i.prototype.ensureHighlightVisible=function(){var e=this.getHighlightedResults();if(0!==e.length){var t=this.$results.find("[aria-selected]").index(e),n=this.$results.offset().top,i=e.offset().top,r=this.$results.scrollTop()+(i-n),o=i-n;r-=2*e.outerHeight(!1),t<=2?this.$results.scrollTop(0):(o>this.$results.outerHeight()||o<0)&&this.$results.scrollTop(r)}},i.prototype.template=function(e,t){var n=this.options.get("templateResult"),i=this.options.get("escapeMarkup"),r=n(e,t);null==r?t.style.display="none":"string"==typeof r?t.innerHTML=i(r):h(t).append(r)},i}),e.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),e.define("select2/selection/base",["jquery","../utils","../keys"],function(n,i,r){function o(e,t){this.$element=e,this.options=t,o.__super__.constructor.call(this)}return i.Extend(o,i.Observable),o.prototype.render=function(){var e=n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=i.GetData(this.$element[0],"old-tabindex")?this._tabindex=i.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),e.attr("title",this.$element.attr("title")),e.attr("tabindex",this._tabindex),e.attr("aria-disabled","false"),this.$selection=e},o.prototype.bind=function(e,t){var n=this,i=e.id+"-results";this.container=e,this.$selection.on("focus",function(e){n.trigger("focus",e)}),this.$selection.on("blur",function(e){n._handleBlur(e)}),this.$selection.on("keydown",function(e){n.trigger("keypress",e),e.which===r.SPACE&&e.preventDefault()}),e.on("results:focus",function(e){n.$selection.attr("aria-activedescendant",e.data._resultId)}),e.on("selection:update",function(e){n.update(e.data)}),e.on("open",function(){n.$selection.attr("aria-expanded","true"),n.$selection.attr("aria-owns",i),n._attachCloseHandler(e)}),e.on("close",function(){n.$selection.attr("aria-expanded","false"),n.$selection.removeAttr("aria-activedescendant"),n.$selection.removeAttr("aria-owns"),n.$selection.trigger("focus"),n._detachCloseHandler(e)}),e.on("enable",function(){n.$selection.attr("tabindex",n._tabindex),n.$selection.attr("aria-disabled","false")}),e.on("disable",function(){n.$selection.attr("tabindex","-1"),n.$selection.attr("aria-disabled","true")})},o.prototype._handleBlur=function(e){var t=this;window.setTimeout(function(){document.activeElement==t.$selection[0]||n.contains(t.$selection[0],document.activeElement)||t.trigger("blur",e)},1)},o.prototype._attachCloseHandler=function(e){n(document.body).on("mousedown.select2."+e.id,function(e){var t=n(e.target).closest(".select2");n(".select2.select2-container--open").each(function(){this!=t[0]&&i.GetData(this,"element").select2("close")})})},o.prototype._detachCloseHandler=function(e){n(document.body).off("mousedown.select2."+e.id)},o.prototype.position=function(e,t){t.find(".selection").append(e)},o.prototype.destroy=function(){this._detachCloseHandler(this.container)},o.prototype.update=function(e){throw new Error("The `update` method must be defined in child classes.")},o}),e.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,n,i){function r(){r.__super__.constructor.apply(this,arguments)}return n.Extend(r,t),r.prototype.render=function(){var e=r.__super__.render.call(this);return e.addClass("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e},r.prototype.bind=function(t,e){var n=this;r.__super__.bind.apply(this,arguments);var i=t.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",i).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",i),this.$selection.on("mousedown",function(e){1===e.which&&n.trigger("toggle",{originalEvent:e})}),this.$selection.on("focus",function(e){}),this.$selection.on("blur",function(e){}),t.on("focus",function(e){t.isOpen()||n.$selection.trigger("focus")})},r.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},r.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},r.prototype.selectionContainer=function(){return e("<span></span>")},r.prototype.update=function(e){if(0!==e.length){var t=e[0],n=this.$selection.find(".select2-selection__rendered"),i=this.display(t,n);n.empty().append(i);var r=t.title||t.text;r?n.attr("title",r):n.removeAttr("title")}else this.clear()},r}),e.define("select2/selection/multiple",["jquery","./base","../utils"],function(r,e,l){function n(e,t){n.__super__.constructor.apply(this,arguments)}return l.Extend(n,e),n.prototype.render=function(){var e=n.__super__.render.call(this);return e.addClass("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e},n.prototype.bind=function(e,t){var i=this;n.__super__.bind.apply(this,arguments),this.$selection.on("click",function(e){i.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove",function(e){if(!i.options.get("disabled")){var t=r(this).parent(),n=l.GetData(t[0],"data");i.trigger("unselect",{originalEvent:e,data:n})}})},n.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},n.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},n.prototype.selectionContainer=function(){return r('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},n.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],n=0;n<e.length;n++){var i=e[n],r=this.selectionContainer(),o=this.display(i,r);r.append(o);var s=i.title||i.text;s&&r.attr("title",s),l.StoreData(r[0],"data",i),t.push(r)}var a=this.$selection.find(".select2-selection__rendered");l.appendMany(a,t)}},n}),e.define("select2/selection/placeholder",["../utils"],function(e){function t(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n)}return t.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},t.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();return n.html(this.display(t)),n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),n},t.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id;if(1<t.length||n)return e.call(this,t);this.clear();var i=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(i)},t}),e.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(r,i,a){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(e){i._handleClear(e)}),t.on("keypress",function(e){i._handleKeyboardClear(e,t)})},e.prototype._handleClear=function(e,t){if(!this.options.get("disabled")){var n=this.$selection.find(".select2-selection__clear");if(0!==n.length){t.stopPropagation();var i=a.GetData(n[0],"data"),r=this.$element.val();this.$element.val(this.placeholder.id);var o={data:i};if(this.trigger("clear",o),o.prevented)this.$element.val(r);else{for(var s=0;s<i.length;s++)if(o={data:i[s]},this.trigger("unselect",o),o.prevented)return void this.$element.val(r);this.$element.trigger("change"),this.trigger("toggle",{})}}}},e.prototype._handleKeyboardClear=function(e,t,n){n.isOpen()||t.which!=i.DELETE&&t.which!=i.BACKSPACE||this._handleClear(t)},e.prototype.update=function(e,t){if(e.call(this,t),!(0<this.$selection.find(".select2-selection__placeholder").length||0===t.length)){var n=this.options.get("translations").get("removeAllItems"),i=r('<span class="select2-selection__clear" title="'+n()+'">&times;</span>');a.StoreData(i[0],"data",t),this.$selection.find(".select2-selection__rendered").prepend(i)}},e}),e.define("select2/selection/search",["jquery","../utils","../keys"],function(i,a,l){function e(e,t,n){e.call(this,t,n)}return e.prototype.render=function(e){var t=i('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');this.$searchContainer=t,this.$search=t.find("input");var n=e.call(this);return this._transferTabIndex(),n},e.prototype.bind=function(e,t,n){var i=this,r=t.id+"-results";e.call(this,t,n),t.on("open",function(){i.$search.attr("aria-controls",r),i.$search.trigger("focus")}),t.on("close",function(){i.$search.val(""),i.$search.removeAttr("aria-controls"),i.$search.removeAttr("aria-activedescendant"),i.$search.trigger("focus")}),t.on("enable",function(){i.$search.prop("disabled",!1),i._transferTabIndex()}),t.on("disable",function(){i.$search.prop("disabled",!0)}),t.on("focus",function(e){i.$search.trigger("focus")}),t.on("results:focus",function(e){e.data._resultId?i.$search.attr("aria-activedescendant",e.data._resultId):i.$search.removeAttr("aria-activedescendant")}),this.$selection.on("focusin",".select2-search--inline",function(e){i.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){i._handleBlur(e)}),this.$selection.on("keydown",".select2-search--inline",function(e){if(e.stopPropagation(),i.trigger("keypress",e),i._keyUpPrevented=e.isDefaultPrevented(),e.which===l.BACKSPACE&&""===i.$search.val()){var t=i.$searchContainer.prev(".select2-selection__choice");if(0<t.length){var n=a.GetData(t[0],"data");i.searchRemoveChoice(n),e.preventDefault()}}}),this.$selection.on("click",".select2-search--inline",function(e){i.$search.val()&&e.stopPropagation()});var o=document.documentMode,s=o&&o<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(e){s?i.$selection.off("input.search input.searchcheck"):i.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(e){if(s&&"input"===e.type)i.$selection.off("input.search input.searchcheck");else{var t=e.which;t!=l.SHIFT&&t!=l.CTRL&&t!=l.ALT&&t!=l.TAB&&i.handleSearch(e)}})},e.prototype._transferTabIndex=function(e){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},e.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},e.prototype.update=function(e,t){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),e.call(this,t),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),n&&this.$search.trigger("focus")},e.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},e.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.$search.val(t.text),this.handleSearch()},e.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="";""!==this.$search.attr("placeholder")?e=this.$selection.find(".select2-selection__rendered").width():e=.75*(this.$search.val().length+1)+"em";this.$search.css("width",e)},e}),e.define("select2/selection/eventRelay",["jquery"],function(s){function e(){}return e.prototype.bind=function(e,t,n){var i=this,r=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],o=["opening","closing","selecting","unselecting","clearing"];e.call(this,t,n),t.on("*",function(e,t){if(-1!==s.inArray(e,r)){t=t||{};var n=s.Event("select2:"+e,{params:t});i.$element.trigger(n),-1!==s.inArray(e,o)&&(t.prevented=n.isDefaultPrevented())}})},e}),e.define("select2/translation",["jquery","require"],function(t,n){function i(e){this.dict=e||{}}return i.prototype.all=function(){return this.dict},i.prototype.get=function(e){return this.dict[e]},i.prototype.extend=function(e){this.dict=t.extend({},e.all(),this.dict)},i._cache={},i.loadPath=function(e){if(!(e in i._cache)){var t=n(e);i._cache[e]=t}return new i(i._cache[e])},i}),e.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ώ":"ω","ς":"σ","’":"'"}}),e.define("select2/data/base",["../utils"],function(i){function n(e,t){n.__super__.constructor.call(this)}return i.Extend(n,i.Observable),n.prototype.current=function(e){throw new Error("The `current` method must be defined in child classes.")},n.prototype.query=function(e,t){throw new Error("The `query` method must be defined in child classes.")},n.prototype.bind=function(e,t){},n.prototype.destroy=function(){},n.prototype.generateResultId=function(e,t){var n=e.id+"-result-";return n+=i.generateChars(4),null!=t.id?n+="-"+t.id.toString():n+="-"+i.generateChars(4),n},n}),e.define("select2/data/select",["./base","../utils","jquery"],function(e,a,l){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return a.Extend(n,e),n.prototype.current=function(e){var n=[],i=this;this.$element.find(":selected").each(function(){var e=l(this),t=i.item(e);n.push(t)}),e(n)},n.prototype.select=function(r){var o=this;if(r.selected=!0,l(r.element).is("option"))return r.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(e){var t=[];(r=[r]).push.apply(r,e);for(var n=0;n<r.length;n++){var i=r[n].id;-1===l.inArray(i,t)&&t.push(i)}o.$element.val(t),o.$element.trigger("change")});else{var e=r.id;this.$element.val(e),this.$element.trigger("change")}},n.prototype.unselect=function(r){var o=this;if(this.$element.prop("multiple")){if(r.selected=!1,l(r.element).is("option"))return r.element.selected=!1,void this.$element.trigger("change");this.current(function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n].id;i!==r.id&&-1===l.inArray(i,t)&&t.push(i)}o.$element.val(t),o.$element.trigger("change")})}},n.prototype.bind=function(e,t){var n=this;(this.container=e).on("select",function(e){n.select(e.data)}),e.on("unselect",function(e){n.unselect(e.data)})},n.prototype.destroy=function(){this.$element.find("*").each(function(){a.RemoveData(this)})},n.prototype.query=function(i,e){var r=[],o=this;this.$element.children().each(function(){var e=l(this);if(e.is("option")||e.is("optgroup")){var t=o.item(e),n=o.matches(i,t);null!==n&&r.push(n)}}),e({results:r})},n.prototype.addOptions=function(e){a.appendMany(this.$element,e)},n.prototype.option=function(e){var t;e.children?(t=document.createElement("optgroup")).label=e.text:void 0!==(t=document.createElement("option")).textContent?t.textContent=e.text:t.innerText=e.text,void 0!==e.id&&(t.value=e.id),e.disabled&&(t.disabled=!0),e.selected&&(t.selected=!0),e.title&&(t.title=e.title);var n=l(t),i=this._normalizeItem(e);return i.element=t,a.StoreData(t,"data",i),n},n.prototype.item=function(e){var t={};if(null!=(t=a.GetData(e[0],"data")))return t;if(e.is("option"))t={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if(e.is("optgroup")){t={text:e.prop("label"),children:[],title:e.prop("title")};for(var n=e.children("option"),i=[],r=0;r<n.length;r++){var o=l(n[r]),s=this.item(o);i.push(s)}t.children=i}return(t=this._normalizeItem(t)).element=e[0],a.StoreData(e[0],"data",t),t},n.prototype._normalizeItem=function(e){e!==Object(e)&&(e={id:e,text:e});return null!=(e=l.extend({},{text:""},e)).id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),l.extend({},{selected:!1,disabled:!1},e)},n.prototype.matches=function(e,t){return this.options.get("matcher")(e,t)},n}),e.define("select2/data/array",["./select","../utils","jquery"],function(e,f,g){function i(e,t){this._dataToConvert=t.get("data")||[],i.__super__.constructor.call(this,e,t)}return f.Extend(i,e),i.prototype.bind=function(e,t){i.__super__.bind.call(this,e,t),this.addOptions(this.convertToOptions(this._dataToConvert))},i.prototype.select=function(n){var e=this.$element.find("option").filter(function(e,t){return t.value==n.id.toString()});0===e.length&&(e=this.option(n),this.addOptions(e)),i.__super__.select.call(this,n)},i.prototype.convertToOptions=function(e){var t=this,n=this.$element.find("option"),i=n.map(function(){return t.item(g(this)).id}).get(),r=[];function o(e){return function(){return g(this).val()==e.id}}for(var s=0;s<e.length;s++){var a=this._normalizeItem(e[s]);if(0<=g.inArray(a.id,i)){var l=n.filter(o(a)),c=this.item(l),u=g.extend(!0,{},a,c),d=this.option(u);l.replaceWith(d)}else{var p=this.option(a);if(a.children){var h=this.convertToOptions(a.children);f.appendMany(p,h)}r.push(p)}}return r},i}),e.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,o){function n(e,t){this.ajaxOptions=this._applyDefaults(t.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),n.__super__.constructor.call(this,e,t)}return t.Extend(n,e),n.prototype._applyDefaults=function(e){var t={data:function(e){return o.extend({},e,{q:e.term})},transport:function(e,t,n){var i=o.ajax(e);return i.then(t),i.fail(n),i}};return o.extend({},t,e,!0)},n.prototype.processResults=function(e){return e},n.prototype.query=function(n,i){var r=this;null!=this._request&&(o.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var t=o.extend({type:"GET"},this.ajaxOptions);function e(){var e=t.transport(t,function(e){var t=r.processResults(e,n);r.options.get("debug")&&window.console&&console.error&&(t&&t.results&&o.isArray(t.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),i(t)},function(){"status"in e&&(0===e.status||"0"===e.status)||r.trigger("results:message",{message:"errorLoading"})});r._request=e}"function"==typeof t.url&&(t.url=t.url.call(this.$element,n)),"function"==typeof t.data&&(t.data=t.data.call(this.$element,n)),this.ajaxOptions.delay&&null!=n.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(e,this.ajaxOptions.delay)):e()},n}),e.define("select2/data/tags",["jquery"],function(u){function e(e,t,n){var i=n.get("tags"),r=n.get("createTag");void 0!==r&&(this.createTag=r);var o=n.get("insertTag");if(void 0!==o&&(this.insertTag=o),e.call(this,t,n),u.isArray(i))for(var s=0;s<i.length;s++){var a=i[s],l=this._normalizeItem(a),c=this.option(l);this.$element.append(c)}}return e.prototype.query=function(e,c,u){var d=this;this._removeOldTags(),null!=c.term&&null==c.page?e.call(this,c,function e(t,n){for(var i=t.results,r=0;r<i.length;r++){var o=i[r],s=null!=o.children&&!e({results:o.children},!0);if((o.text||"").toUpperCase()===(c.term||"").toUpperCase()||s)return!n&&(t.data=i,void u(t))}if(n)return!0;var a=d.createTag(c);if(null!=a){var l=d.option(a);l.attr("data-select2-tag",!0),d.addOptions([l]),d.insertTag(i,a)}t.results=i,u(t)}):e.call(this,c,u)},e.prototype.createTag=function(e,t){var n=u.trim(t.term);return""===n?null:{id:n,text:n}},e.prototype.insertTag=function(e,t,n){t.unshift(n)},e.prototype._removeOldTags=function(e){this.$element.find("option[data-select2-tag]").each(function(){this.selected||u(this).remove()})},e}),e.define("select2/data/tokenizer",["jquery"],function(d){function e(e,t,n){var i=n.get("tokenizer");void 0!==i&&(this.tokenizer=i),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field")},e.prototype.query=function(e,t,n){var i=this;t.term=t.term||"";var r=this.tokenizer(t,this.options,function(e){var t=i._normalizeItem(e);if(!i.$element.find("option").filter(function(){return d(this).val()===t.id}).length){var n=i.option(t);n.attr("data-select2-tag",!0),i._removeOldTags(),i.addOptions([n])}!function(e){i.trigger("select",{data:e})}(t)});r.term!==t.term&&(this.$search.length&&(this.$search.val(r.term),this.$search.trigger("focus")),t.term=r.term),e.call(this,t,n)},e.prototype.tokenizer=function(e,t,n,i){for(var r=n.get("tokenSeparators")||[],o=t.term,s=0,a=this.createTag||function(e){return{id:e.term,text:e.term}};s<o.length;){var l=o[s];if(-1!==d.inArray(l,r)){var c=o.substr(0,s),u=a(d.extend({},t,{term:c}));null!=u?(i(u),o=o.substr(s+1)||"",s=0):s++}else s++}return{term:o}},e}),e.define("select2/data/minimumInputLength",[],function(){function e(e,t,n){this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",t.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumInputLength",[],function(){function e(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",0<this.maximumInputLength&&t.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumSelectionLength",[],function(){function e(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("select",function(){i._checkIfMaximumSelected()})},e.prototype.query=function(e,t,n){var i=this;this._checkIfMaximumSelected(function(){e.call(i,t,n)})},e.prototype._checkIfMaximumSelected=function(e,n){var i=this;this.current(function(e){var t=null!=e?e.length:0;0<i.maximumSelectionLength&&t>=i.maximumSelectionLength?i.trigger("results:message",{message:"maximumSelected",args:{maximum:i.maximumSelectionLength}}):n&&n()})},e}),e.define("select2/dropdown",["jquery","./utils"],function(t,e){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return e.Extend(n,e.Observable),n.prototype.render=function(){var e=t('<span class="select2-dropdown"><span class="select2-results"></span></span>');return e.attr("dir",this.options.get("dir")),this.$dropdown=e},n.prototype.bind=function(){},n.prototype.position=function(e,t){},n.prototype.destroy=function(){this.$dropdown.remove()},n}),e.define("select2/dropdown/search",["jquery","../utils"],function(o,e){function t(){}return t.prototype.render=function(e){var t=e.call(this),n=o('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');return this.$searchContainer=n,this.$search=n.find("input"),t.prepend(n),t},t.prototype.bind=function(e,t,n){var i=this,r=t.id+"-results";e.call(this,t,n),this.$search.on("keydown",function(e){i.trigger("keypress",e),i._keyUpPrevented=e.isDefaultPrevented()}),this.$search.on("input",function(e){o(this).off("keyup")}),this.$search.on("keyup input",function(e){i.handleSearch(e)}),t.on("open",function(){i.$search.attr("tabindex",0),i.$search.attr("aria-controls",r),i.$search.trigger("focus"),window.setTimeout(function(){i.$search.trigger("focus")},0)}),t.on("close",function(){i.$search.attr("tabindex",-1),i.$search.removeAttr("aria-controls"),i.$search.removeAttr("aria-activedescendant"),i.$search.val(""),i.$search.trigger("blur")}),t.on("focus",function(){t.isOpen()||i.$search.trigger("focus")}),t.on("results:all",function(e){null!=e.query.term&&""!==e.query.term||(i.showSearch(e)?i.$searchContainer.removeClass("select2-search--hide"):i.$searchContainer.addClass("select2-search--hide"))}),t.on("results:focus",function(e){e.data._resultId?i.$search.attr("aria-activedescendant",e.data._resultId):i.$search.removeAttr("aria-activedescendant")})},t.prototype.handleSearch=function(e){if(!this._keyUpPrevented){var t=this.$search.val();this.trigger("query",{term:t})}this._keyUpPrevented=!1},t.prototype.showSearch=function(e,t){return!0},t}),e.define("select2/dropdown/hidePlaceholder",[],function(){function e(e,t,n,i){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,i)}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),i=t.length-1;0<=i;i--){var r=t[i];this.placeholder.id===r.id&&n.splice(i,1)}return n},e}),e.define("select2/dropdown/infiniteScroll",["jquery"],function(n){function e(e,t,n,i){this.lastParams={},e.call(this,t,n,i),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return e.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("query",function(e){i.lastParams=e,i.loading=!0}),t.on("query:append",function(e){i.lastParams=e,i.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},e.prototype.loadMoreIfNeeded=function(){var e=n.contains(document.documentElement,this.$loadingMore[0]);if(!this.loading&&e){var t=this.$results.offset().top+this.$results.outerHeight(!1);this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)<=t+50&&this.loadMore()}},e.prototype.loadMore=function(){this.loading=!0;var e=n.extend({},{page:1},this.lastParams);e.page++,this.trigger("query:append",e)},e.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},e.prototype.createLoadingMore=function(){var e=n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),t=this.options.get("translations").get("loadingMore");return e.html(t(this.lastParams)),e},e}),e.define("select2/dropdown/attachBody",["jquery","../utils"],function(f,a){function e(e,t,n){this.$dropdownParent=f(n.get("dropdownParent")||document.body),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("open",function(){i._showDropdown(),i._attachPositioningHandler(t),i._bindContainerResultHandlers(t)}),t.on("close",function(){i._hideDropdown(),i._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()})},e.prototype.destroy=function(e){e.call(this),this.$dropdownContainer.remove()},e.prototype.position=function(e,t,n){t.attr("class",n.attr("class")),t.removeClass("select2"),t.addClass("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n},e.prototype.render=function(e){var t=f("<span></span>"),n=e.call(this);return t.append(n),this.$dropdownContainer=t},e.prototype._hideDropdown=function(e){this.$dropdownContainer.detach()},e.prototype._bindContainerResultHandlers=function(e,t){if(!this._containerResultsHandlersBound){var n=this;t.on("results:all",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:append",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:message",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("select",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("unselect",function(){n._positionDropdown(),n._resizeDropdown()}),this._containerResultsHandlersBound=!0}},e.prototype._attachPositioningHandler=function(e,t){var n=this,i="scroll.select2."+t.id,r="resize.select2."+t.id,o="orientationchange.select2."+t.id,s=this.$container.parents().filter(a.hasScroll);s.each(function(){a.StoreData(this,"select2-scroll-position",{x:f(this).scrollLeft(),y:f(this).scrollTop()})}),s.on(i,function(e){var t=a.GetData(this,"select2-scroll-position");f(this).scrollTop(t.y)}),f(window).on(i+" "+r+" "+o,function(e){n._positionDropdown(),n._resizeDropdown()})},e.prototype._detachPositioningHandler=function(e,t){var n="scroll.select2."+t.id,i="resize.select2."+t.id,r="orientationchange.select2."+t.id;this.$container.parents().filter(a.hasScroll).off(n),f(window).off(n+" "+i+" "+r)},e.prototype._positionDropdown=function(){var e=f(window),t=this.$dropdown.hasClass("select2-dropdown--above"),n=this.$dropdown.hasClass("select2-dropdown--below"),i=null,r=this.$container.offset();r.bottom=r.top+this.$container.outerHeight(!1);var o={height:this.$container.outerHeight(!1)};o.top=r.top,o.bottom=r.top+o.height;var s=this.$dropdown.outerHeight(!1),a=e.scrollTop(),l=e.scrollTop()+e.height(),c=a<r.top-s,u=l>r.bottom+s,d={left:r.left,top:o.bottom},p=this.$dropdownParent;"static"===p.css("position")&&(p=p.offsetParent());var h=p.offset();d.top-=h.top,d.left-=h.left,t||n||(i="below"),u||!c||t?!c&&u&&t&&(i="below"):i="above",("above"==i||t&&"below"!==i)&&(d.top=o.top-h.top-s),null!=i&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+i),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+i)),this.$dropdownContainer.css(d)},e.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.position="relative",e.width="auto"),this.$dropdown.css(e)},e.prototype._showDropdown=function(e){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},e}),e.define("select2/dropdown/minimumResultsForSearch",[],function(){function e(e,t,n,i){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,i)}return e.prototype.showSearch=function(e,t){return!(function e(t){for(var n=0,i=0;i<t.length;i++){var r=t[i];r.children?n+=e(r.children):n++}return n}(t.data.results)<this.minimumResultsForSearch)&&e.call(this,t)},e}),e.define("select2/dropdown/selectOnClose",["../utils"],function(o){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("close",function(e){i._handleSelectOnClose(e)})},e.prototype._handleSelectOnClose=function(e,t){if(t&&null!=t.originalSelect2Event){var n=t.originalSelect2Event;if("select"===n._type||"unselect"===n._type)return}var i=this.getHighlightedResults();if(!(i.length<1)){var r=o.GetData(i[0],"data");null!=r.element&&r.element.selected||null==r.element&&r.selected||this.trigger("select",{data:r})}},e}),e.define("select2/dropdown/closeOnSelect",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("select",function(e){i._selectTriggered(e)}),t.on("unselect",function(e){i._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var n=t.originalEvent;n&&(n.ctrlKey||n.metaKey)||this.trigger("close",{originalEvent:n,originalSelect2Event:t})},e}),e.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Please delete "+t+" character";return 1!=t&&(n+="s"),n},inputTooShort:function(e){return"Please enter "+(e.minimum-e.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"}}}),e.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(c,u,d,p,h,f,g,m,v,y,s,t,_,w,$,b,A,x,S,D,C,E,O,T,q,j,L,I,e){function n(){this.reset()}return n.prototype.apply=function(e){if(null==(e=c.extend(!0,{},this.defaults,e)).dataAdapter){if(null!=e.ajax?e.dataAdapter=$:null!=e.data?e.dataAdapter=w:e.dataAdapter=_,0<e.minimumInputLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,x)),0<e.maximumInputLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,S)),0<e.maximumSelectionLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,D)),e.tags&&(e.dataAdapter=y.Decorate(e.dataAdapter,b)),null==e.tokenSeparators&&null==e.tokenizer||(e.dataAdapter=y.Decorate(e.dataAdapter,A)),null!=e.query){var t=u(e.amdBase+"compat/query");e.dataAdapter=y.Decorate(e.dataAdapter,t)}if(null!=e.initSelection){var n=u(e.amdBase+"compat/initSelection");e.dataAdapter=y.Decorate(e.dataAdapter,n)}}if(null==e.resultsAdapter&&(e.resultsAdapter=d,null!=e.ajax&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,T)),null!=e.placeholder&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,O)),e.selectOnClose&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,L))),null==e.dropdownAdapter){if(e.multiple)e.dropdownAdapter=C;else{var i=y.Decorate(C,E);e.dropdownAdapter=i}if(0!==e.minimumResultsForSearch&&(e.dropdownAdapter=y.Decorate(e.dropdownAdapter,j)),e.closeOnSelect&&(e.dropdownAdapter=y.Decorate(e.dropdownAdapter,I)),null!=e.dropdownCssClass||null!=e.dropdownCss||null!=e.adaptDropdownCssClass){var r=u(e.amdBase+"compat/dropdownCss");e.dropdownAdapter=y.Decorate(e.dropdownAdapter,r)}e.dropdownAdapter=y.Decorate(e.dropdownAdapter,q)}if(null==e.selectionAdapter){if(e.multiple?e.selectionAdapter=h:e.selectionAdapter=p,null!=e.placeholder&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,f)),e.allowClear&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,g)),e.multiple&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,m)),null!=e.containerCssClass||null!=e.containerCss||null!=e.adaptContainerCssClass){var o=u(e.amdBase+"compat/containerCss");e.selectionAdapter=y.Decorate(e.selectionAdapter,o)}e.selectionAdapter=y.Decorate(e.selectionAdapter,v)}e.language=this._resolveLanguage(e.language),e.language.push("en");for(var s=[],a=0;a<e.language.length;a++){var l=e.language[a];-1===s.indexOf(l)&&s.push(l)}return e.language=s,e.translations=this._processTranslations(e.language,e.debug),e},n.prototype.reset=function(){function a(e){return e.replace(/[^\u0000-\u007E]/g,function(e){return t[e]||e})}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:y.escapeMarkup,language:{},matcher:function e(t,n){if(""===c.trim(t.term))return n;if(n.children&&0<n.children.length){for(var i=c.extend(!0,{},n),r=n.children.length-1;0<=r;r--)null==e(t,n.children[r])&&i.children.splice(r,1);return 0<i.children.length?i:e(t,i)}var o=a(n.text).toUpperCase(),s=a(t.term).toUpperCase();return-1<o.indexOf(s)?n:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},n.prototype.applyFromElement=function(e,t){var n=e.language,i=this.defaults.language,r=t.prop("lang"),o=t.closest("[lang]").prop("lang"),s=Array.prototype.concat.call(this._resolveLanguage(r),this._resolveLanguage(n),this._resolveLanguage(i),this._resolveLanguage(o));return e.language=s,e},n.prototype._resolveLanguage=function(e){if(!e)return[];if(c.isEmptyObject(e))return[];if(c.isPlainObject(e))return[e];var t;t=c.isArray(e)?e:[e];for(var n=[],i=0;i<t.length;i++)if(n.push(t[i]),"string"==typeof t[i]&&0<t[i].indexOf("-")){var r=t[i].split("-")[0];n.push(r)}return n},n.prototype._processTranslations=function(e,t){for(var n=new s,i=0;i<e.length;i++){var r=new s,o=e[i];if("string"==typeof o)try{r=s.loadPath(o)}catch(e){try{o=this.defaults.amdLanguageBase+o,r=s.loadPath(o)}catch(e){t&&window.console&&console.warn&&console.warn('Select2: The language file for "'+o+'" could not be automatically loaded. A fallback will be used instead.')}}else r=c.isPlainObject(o)?new s(o):o;n.extend(r)}return n},n.prototype.set=function(e,t){var n={};n[c.camelCase(e)]=t;var i=y._convertData(n);c.extend(!0,this.defaults,i)},new n}),e.define("select2/options",["require","jquery","./defaults","./utils"],function(i,d,r,p){function e(e,t){if(this.options=e,null!=t&&this.fromElement(t),null!=t&&(this.options=r.applyFromElement(this.options,t)),this.options=r.apply(this.options),t&&t.is("input")){var n=i(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=p.Decorate(this.options.dataAdapter,n)}}return e.prototype.fromElement=function(e){var t=["select2"];null==this.options.multiple&&(this.options.multiple=e.prop("multiple")),null==this.options.disabled&&(this.options.disabled=e.prop("disabled")),null==this.options.dir&&(e.prop("dir")?this.options.dir=e.prop("dir"):e.closest("[dir]").prop("dir")?this.options.dir=e.closest("[dir]").prop("dir"):this.options.dir="ltr"),e.prop("disabled",this.options.disabled),e.prop("multiple",this.options.multiple),p.GetData(e[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),p.StoreData(e[0],"data",p.GetData(e[0],"select2Tags")),p.StoreData(e[0],"tags",!0)),p.GetData(e[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),e.attr("ajax--url",p.GetData(e[0],"ajaxUrl")),p.StoreData(e[0],"ajax-Url",p.GetData(e[0],"ajaxUrl")));var n={};function i(e,t){return t.toUpperCase()}for(var r=0;r<e[0].attributes.length;r++){var o=e[0].attributes[r].name,s="data-";if(o.substr(0,s.length)==s){var a=o.substring(s.length),l=p.GetData(e[0],a);n[a.replace(/-([a-z])/g,i)]=l}}d.fn.jquery&&"1."==d.fn.jquery.substr(0,2)&&e[0].dataset&&(n=d.extend(!0,{},e[0].dataset,n));var c=d.extend(!0,{},p.GetData(e[0]),n);for(var u in c=p._convertData(c))-1<d.inArray(u,t)||(d.isPlainObject(this.options[u])?d.extend(this.options[u],c[u]):this.options[u]=c[u]);return this},e.prototype.get=function(e){return this.options[e]},e.prototype.set=function(e,t){this.options[e]=t},e}),e.define("select2/core",["jquery","./options","./utils","./keys"],function(r,c,u,i){var d=function(e,t){null!=u.GetData(e[0],"select2")&&u.GetData(e[0],"select2").destroy(),this.$element=e,this.id=this._generateId(e),t=t||{},this.options=new c(t,e),d.__super__.constructor.call(this);var n=e.attr("tabindex")||0;u.StoreData(e[0],"old-tabindex",n),e.attr("tabindex","-1");var i=this.options.get("dataAdapter");this.dataAdapter=new i(e,this.options);var r=this.render();this._placeContainer(r);var o=this.options.get("selectionAdapter");this.selection=new o(e,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,r);var s=this.options.get("dropdownAdapter");this.dropdown=new s(e,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,r);var a=this.options.get("resultsAdapter");this.results=new a(e,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var l=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(e){l.trigger("selection:update",{data:e})}),e.addClass("select2-hidden-accessible"),e.attr("aria-hidden","true"),this._syncAttributes(),u.StoreData(e[0],"select2",this),e.data("select2",this)};return u.Extend(d,u.Observable),d.prototype._generateId=function(e){return"select2-"+(null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+u.generateChars(2):u.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},d.prototype._placeContainer=function(e){e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));null!=t&&e.css("width",t)},d.prototype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var i=this._resolveWidth(e,"style");return null!=i?i:this._resolveWidth(e,"element")}if("element"==t){var r=e.outerWidth(!1);return r<=0?"auto":r+"px"}if("style"!=t)return"computedstyle"!=t?t:window.getComputedStyle(e[0]).width;var o=e.attr("style");if("string"!=typeof o)return null;for(var s=o.split(";"),a=0,l=s.length;a<l;a+=1){var c=s[a].replace(/\s/g,"").match(n);if(null!==c&&1<=c.length)return c[1]}return null},d.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},d.prototype._registerDomEvents=function(){var t=this;this.$element.on("change.select2",function(){t.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})}),this.$element.on("focus.select2",function(e){t.trigger("focus",e)}),this._syncA=u.bind(this._syncAttributes,this),this._syncS=u.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=e?(this._observer=new e(function(e){r.each(e,t._syncA),r.each(e,t._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",t._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",t._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",t._syncS,!1))},d.prototype._registerDataEvents=function(){var n=this;this.dataAdapter.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerSelectionEvents=function(){var n=this,i=["toggle","focus"];this.selection.on("toggle",function(){n.toggleDropdown()}),this.selection.on("focus",function(e){n.focus(e)}),this.selection.on("*",function(e,t){-1===r.inArray(e,i)&&n.trigger(e,t)})},d.prototype._registerDropdownEvents=function(){var n=this;this.dropdown.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerResultsEvents=function(){var n=this;this.results.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerEvents=function(){var n=this;this.on("open",function(){n.$container.addClass("select2-container--open")}),this.on("close",function(){n.$container.removeClass("select2-container--open")}),this.on("enable",function(){n.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){n.$container.addClass("select2-container--disabled")}),this.on("blur",function(){n.$container.removeClass("select2-container--focus")}),this.on("query",function(t){n.isOpen()||n.trigger("open",{}),this.dataAdapter.query(t,function(e){n.trigger("results:all",{data:e,query:t})})}),this.on("query:append",function(t){this.dataAdapter.query(t,function(e){n.trigger("results:append",{data:e,query:t})})}),this.on("keypress",function(e){var t=e.which;n.isOpen()?t===i.ESC||t===i.TAB||t===i.UP&&e.altKey?(n.close(),e.preventDefault()):t===i.ENTER?(n.trigger("results:select",{}),e.preventDefault()):t===i.SPACE&&e.ctrlKey?(n.trigger("results:toggle",{}),e.preventDefault()):t===i.UP?(n.trigger("results:previous",{}),e.preventDefault()):t===i.DOWN&&(n.trigger("results:next",{}),e.preventDefault()):(t===i.ENTER||t===i.SPACE||t===i.DOWN&&e.altKey)&&(n.open(),e.preventDefault())})},d.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},d.prototype._syncSubtree=function(e,t){var n=!1,i=this;if(!e||!e.target||"OPTION"===e.target.nodeName||"OPTGROUP"===e.target.nodeName){if(t)if(t.addedNodes&&0<t.addedNodes.length)for(var r=0;r<t.addedNodes.length;r++){t.addedNodes[r].selected&&(n=!0)}else t.removedNodes&&0<t.removedNodes.length&&(n=!0);else n=!0;n&&this.dataAdapter.current(function(e){i.trigger("selection:update",{data:e})})}},d.prototype.trigger=function(e,t){var n=d.__super__.trigger,i={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===t&&(t={}),e in i){var r=i[e],o={prevented:!1,name:e,args:t};if(n.call(this,r,o),o.prevented)return void(t.prevented=!0)}n.call(this,e,t)},d.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},d.prototype.open=function(){this.isOpen()||this.trigger("query",{})},d.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},d.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},d.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},d.prototype.focus=function(e){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},d.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=e&&0!==e.length||(e=[!0]);var t=!e[0];this.$element.prop("disabled",t)},d.prototype.data=function(){this.options.get("debug")&&0<arguments.length&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var t=[];return this.dataAdapter.current(function(e){t=e}),t},d.prototype.val=function(e){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==e||0===e.length)return this.$element.val();var t=e[0];r.isArray(t)&&(t=r.map(t,function(e){return e.toString()})),this.$element.val(t).trigger("change")},d.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",u.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),u.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},d.prototype.render=function(){var e=r('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return e.attr("dir",this.options.get("dir")),this.$container=e,this.$container.addClass("select2-container--"+this.options.get("theme")),u.StoreData(e[0],"element",this.$element),e},d}),e.define("select2/compat/utils",["jquery"],function(s){return{syncCssClasses:function(e,t,n){var i,r,o=[];(i=s.trim(e.attr("class")))&&s((i=""+i).split(/\s+/)).each(function(){0===this.indexOf("select2-")&&o.push(this)}),(i=s.trim(t.attr("class")))&&s((i=""+i).split(/\s+/)).each(function(){0!==this.indexOf("select2-")&&null!=(r=n(this))&&o.push(r)}),e.attr("class",o.join(" "))}}}),e.define("select2/compat/containerCss",["jquery","./utils"],function(s,a){function l(e){return null}function e(){}return e.prototype.render=function(e){var t=e.call(this),n=this.options.get("containerCssClass")||"";s.isFunction(n)&&(n=n(this.$element));var i=this.options.get("adaptContainerCssClass");if(i=i||l,-1!==n.indexOf(":all:")){n=n.replace(":all:","");var r=i;i=function(e){var t=r(e);return null!=t?t+" "+e:e}}var o=this.options.get("containerCss")||{};return s.isFunction(o)&&(o=o(this.$element)),a.syncCssClasses(t,this.$element,i),t.css(o),t.addClass(n),t},e}),e.define("select2/compat/dropdownCss",["jquery","./utils"],function(s,a){function l(e){return null}function e(){}return e.prototype.render=function(e){var t=e.call(this),n=this.options.get("dropdownCssClass")||"";s.isFunction(n)&&(n=n(this.$element));var i=this.options.get("adaptDropdownCssClass");if(i=i||l,-1!==n.indexOf(":all:")){n=n.replace(":all:","");var r=i;i=function(e){var t=r(e);return null!=t?t+" "+e:e}}var o=this.options.get("dropdownCss")||{};return s.isFunction(o)&&(o=o(this.$element)),a.syncCssClasses(t,this.$element,i),t.css(o),t.addClass(n),t},e}),e.define("select2/compat/initSelection",["jquery"],function(i){function e(e,t,n){n.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"),this.initSelection=n.get("initSelection"),this._isInitialized=!1,e.call(this,t,n)}return e.prototype.current=function(e,t){var n=this;this._isInitialized?e.call(this,t):this.initSelection.call(null,this.$element,function(e){n._isInitialized=!0,i.isArray(e)||(e=[e]),t(e)})},e}),e.define("select2/compat/inputData",["jquery","../utils"],function(s,i){function e(e,t,n){this._currentData=[],this._valueSeparator=n.get("valueSeparator")||",","hidden"===t.prop("type")&&n.get("debug")&&console&&console.warn&&console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."),e.call(this,t,n)}return e.prototype.current=function(e,t){function i(e,t){var n=[];return e.selected||-1!==s.inArray(e.id,t)?(e.selected=!0,n.push(e)):e.selected=!1,e.children&&n.push.apply(n,i(e.children,t)),n}for(var n=[],r=0;r<this._currentData.length;r++){var o=this._currentData[r];n.push.apply(n,i(o,this.$element.val().split(this._valueSeparator)))}t(n)},e.prototype.select=function(e,t){if(this.options.get("multiple")){var n=this.$element.val();n+=this._valueSeparator+t.id,this.$element.val(n),this.$element.trigger("change")}else this.current(function(e){s.map(e,function(e){e.selected=!1})}),this.$element.val(t.id),this.$element.trigger("change")},e.prototype.unselect=function(e,r){var o=this;r.selected=!1,this.current(function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n];r.id!=i.id&&t.push(i.id)}o.$element.val(t.join(o._valueSeparator)),o.$element.trigger("change")})},e.prototype.query=function(e,t,n){for(var i=[],r=0;r<this._currentData.length;r++){var o=this._currentData[r],s=this.matches(t,o);null!==s&&i.push(s)}n({results:i})},e.prototype.addOptions=function(e,t){var n=s.map(t,function(e){return i.GetData(e[0],"data")});this._currentData.push.apply(this._currentData,n)},e}),e.define("select2/compat/matcher",["jquery"],function(s){return function(o){return function(e,t){var n=s.extend(!0,{},t);if(null==e.term||""===s.trim(e.term))return n;if(t.children){for(var i=t.children.length-1;0<=i;i--){var r=t.children[i];o(e.term,r.text,r)||n.children.splice(i,1)}if(0<n.children.length)return n}return o(e.term,t.text,t)?n:null}}}),e.define("select2/compat/query",[],function(){function e(e,t,n){n.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.callback=n,this.options.get("query").call(null,t)},e}),e.define("select2/dropdown/attachContainer",[],function(){function e(e,t,n){e.call(this,t,n)}return e.prototype.position=function(e,t,n){n.find(".dropdown-wrapper").append(t),t.addClass("select2-dropdown--below"),n.addClass("select2-container--below")},e}),e.define("select2/dropdown/stopPropagation",[],function(){function e(){}return e.prototype.bind=function(e,t,n){e.call(this,t,n);this.$dropdown.on(["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"].join(" "),function(e){e.stopPropagation()})},e}),e.define("select2/selection/stopPropagation",[],function(){function e(){}return e.prototype.bind=function(e,t,n){e.call(this,t,n);this.$selection.on(["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"].join(" "),function(e){e.stopPropagation()})},e}),l=function(p){var h,f,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],t="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],g=Array.prototype.slice;if(p.event.fixHooks)for(var n=e.length;n;)p.event.fixHooks[e[--n]]=p.event.mouseHooks;var m=p.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],i,!1);else this.onmousewheel=i;p.data(this,"mousewheel-line-height",m.getLineHeight(this)),p.data(this,"mousewheel-page-height",m.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],i,!1);else this.onmousewheel=null;p.removeData(this,"mousewheel-line-height"),p.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=p(e),n=t["offsetParent"in p.fn?"offsetParent":"parent"]();return n.length||(n=p("body")),parseInt(n.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return p(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function i(e){var t,n=e||window.event,i=g.call(arguments,1),r=0,o=0,s=0,a=0,l=0;if((e=p.event.fix(n)).type="mousewheel","detail"in n&&(s=-1*n.detail),"wheelDelta"in n&&(s=n.wheelDelta),"wheelDeltaY"in n&&(s=n.wheelDeltaY),"wheelDeltaX"in n&&(o=-1*n.wheelDeltaX),"axis"in n&&n.axis===n.HORIZONTAL_AXIS&&(o=-1*s,s=0),r=0===s?o:s,"deltaY"in n&&(r=s=-1*n.deltaY),"deltaX"in n&&(o=n.deltaX,0===s&&(r=-1*o)),0!==s||0!==o){if(1===n.deltaMode){var c=p.data(this,"mousewheel-line-height");r*=c,s*=c,o*=c}else if(2===n.deltaMode){var u=p.data(this,"mousewheel-page-height");r*=u,s*=u,o*=u}if(t=Math.max(Math.abs(s),Math.abs(o)),(!f||t<f)&&y(n,f=t)&&(f/=40),y(n,t)&&(r/=40,o/=40,s/=40),r=Math[1<=r?"floor":"ceil"](r/f),o=Math[1<=o?"floor":"ceil"](o/f),s=Math[1<=s?"floor":"ceil"](s/f),m.settings.normalizeOffset&&this.getBoundingClientRect){var d=this.getBoundingClientRect();a=e.clientX-d.left,l=e.clientY-d.top}return e.deltaX=o,e.deltaY=s,e.deltaFactor=f,e.offsetX=a,e.offsetY=l,e.deltaMode=0,i.unshift(e,r,o,s),h&&clearTimeout(h),h=setTimeout(v,200),(p.event.dispatch||p.event.handle).apply(this,i)}}function v(){f=null}function y(e,t){return m.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}p.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})},"function"==typeof e.define&&e.define.amd?e.define("jquery-mousewheel",["jquery"],l): true?module.exports=l:undefined,e.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(r,e,o,t,s){if(null==r.fn.select2){var a=["open","close","destroy"];r.fn.select2=function(t){if("object"==typeof(t=t||{}))return this.each(function(){var e=r.extend(!0,{},t);new o(r(this),e)}),this;if("string"!=typeof t)throw new Error("Invalid arguments for Select2: "+t);var n,i=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=s.GetData(this,"select2");null==e&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2."),n=e[t].apply(e,i)}),-1<r.inArray(t,a)?this:n}}return null==r.fn.select2.defaults&&(r.fn.select2.defaults=t),o}),{define:e.define,require:e.require}}(),t=e.require("jquery.select2");return d.fn.select2.amd=e,t});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnMtY3VzdG9tLWZpbGUtaW5wdXQvZGlzdC9icy1jdXN0b20tZmlsZS1pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mb3JjZWQtb2JqZWN0LXByb3RvdHlwZS1hY2Nlc3NvcnMtbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZm9yY2VkLXN0cmluZy1odG1sLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZm9yY2VkLXN0cmluZy10cmltLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaG9zdC1yZXBvcnQtZXJyb3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXByb21pc2UtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3BhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5kZXgtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnJldmVyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zbGljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zcGxpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5kYXRlLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLmJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmRlZmluZS1nZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QubG9va3VwLWdldHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLm1hdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy50cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VsZWN0Mi9kaXN0L2pzL3NlbGVjdDIuZnVsbC5taW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxlQUFlO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDZCQUE2QixjQUFjO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztB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LDJCQUEyQixnRUFBZ0Usa0dBQWtHLDJCQUEyQixxQkFBcUIsV0FBVyx3Q0FBd0MsY0FBYyxrRUFBa0UsZ1ZBQWdWLG9CQUFvQiw0Q0FBNEMsZUFBZSx5QkFBeUIsNENBQTRDLGVBQWUsMlBBQTJQLG1DQUFtQyxxQ0FBcUMsK0xBQStMLGFBQWEsT0FBTyxnQkFBZ0IsbUVBQW1FLGFBQWEsdUJBQXVCLDhEQUE4RCwwQkFBMEIsb0NBQW9DLEVBQUUsc0ZBQXNGLEtBQXdCLGtCQUFrQixTQUFJLHNJQUFzSSx1QkFBdUIsaUNBQWlDLHlCQUF5QiwyQkFBMkIsOEJBQThCLG9CQUFvQixJQUFJLGlCQUFpQixPQUFPLDJFQUEyRSxnREFBZ0QsNEJBQTRCLGdDQUFnQywySkFBMkosNEJBQTRCLGdFQUFnRSxHQUFHLG1DQUFtQyxpQ0FBaUMsNEJBQTRCLEUiLCJmaWxlIjoidmVuZG9yc35qcy9hZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogYnNDdXN0b21GaWxlSW5wdXQgdjEuMy4yIChodHRwczovL2dpdGh1Yi5jb20vSm9oYW5uLVMvYnMtY3VzdG9tLWZpbGUtaW5wdXQpXG4gKiBDb3B5cmlnaHQgMjAxOCAtIDIwMTkgSm9oYW5uLVMgPGpvaGFubi5zZXJ2b2lyZUBnbWFpbC5jb20+XG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9Kb2hhbm4tUy9icy1jdXN0b20tZmlsZS1pbnB1dC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLmJzQ3VzdG9tRmlsZUlucHV0ID0gZmFjdG9yeSgpKTtcbn0odGhpcywgZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIFNlbGVjdG9yID0ge1xuICAgIENVU1RPTUZJTEU6ICcuY3VzdG9tLWZpbGUgaW5wdXRbdHlwZT1cImZpbGVcIl0nLFxuICAgIENVU1RPTUZJTEVMQUJFTDogJy5jdXN0b20tZmlsZS1sYWJlbCcsXG4gICAgRk9STTogJ2Zvcm0nLFxuICAgIElOUFVUOiAnaW5wdXQnXG4gIH07XG5cbiAgdmFyIHRleHROb2RlVHlwZSA9IDM7XG5cbiAgdmFyIGdldERlZmF1bHRUZXh0ID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFRleHQoaW5wdXQpIHtcbiAgICB2YXIgZGVmYXVsdFRleHQgPSAnJztcbiAgICB2YXIgbGFiZWwgPSBpbnB1dC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQ1VTVE9NRklMRUxBQkVMKTtcblxuICAgIGlmIChsYWJlbCkge1xuICAgICAgZGVmYXVsdFRleHQgPSBsYWJlbC5pbm5lckhUTUw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRUZXh0O1xuICB9O1xuXG4gIHZhciBmaW5kRmlyc3RDaGlsZE5vZGUgPSBmdW5jdGlvbiBmaW5kRmlyc3RDaGlsZE5vZGUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGNoaWxkTm9kZXMgPSBbXS5zbGljZS5jYWxsKGVsZW1lbnQuY2hpbGROb2Rlcyk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbm9kZSA9IGNoaWxkTm9kZXNbaV07XG5cbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IHRleHROb2RlVHlwZSkge1xuICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG5cbiAgdmFyIHJlc3RvcmVEZWZhdWx0VGV4dCA9IGZ1bmN0aW9uIHJlc3RvcmVEZWZhdWx0VGV4dChpbnB1dCkge1xuICAgIHZhciBkZWZhdWx0VGV4dCA9IGlucHV0LmJzQ3VzdG9tRmlsZUlucHV0LmRlZmF1bHRUZXh0O1xuICAgIHZhciBsYWJlbCA9IGlucHV0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5DVVNUT01GSUxFTEFCRUwpO1xuXG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGZpbmRGaXJzdENoaWxkTm9kZShsYWJlbCk7XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IGRlZmF1bHRUZXh0O1xuICAgIH1cbiAgfTtcblxuICB2YXIgZmlsZUFwaSA9ICEhd2luZG93LkZpbGU7XG4gIHZhciBGQUtFX1BBVEggPSAnZmFrZXBhdGgnO1xuICB2YXIgRkFLRV9QQVRIX1NFUEFSQVRPUiA9ICdcXFxcJztcblxuICB2YXIgZ2V0U2VsZWN0ZWRGaWxlcyA9IGZ1bmN0aW9uIGdldFNlbGVjdGVkRmlsZXMoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCdtdWx0aXBsZScpICYmIGZpbGVBcGkpIHtcbiAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKGlucHV0LmZpbGVzKS5tYXAoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgcmV0dXJuIGZpbGUubmFtZTtcbiAgICAgIH0pLmpvaW4oJywgJyk7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0LnZhbHVlLmluZGV4T2YoRkFLRV9QQVRIKSAhPT0gLTEpIHtcbiAgICAgIHZhciBzcGxpdHRlZFZhbHVlID0gaW5wdXQudmFsdWUuc3BsaXQoRkFLRV9QQVRIX1NFUEFSQVRPUik7XG4gICAgICByZXR1cm4gc3BsaXR0ZWRWYWx1ZVtzcGxpdHRlZFZhbHVlLmxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZSgpIHtcbiAgICB2YXIgbGFiZWwgPSB0aGlzLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5DVVNUT01GSUxFTEFCRUwpO1xuXG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGZpbmRGaXJzdENoaWxkTm9kZShsYWJlbCk7XG4gICAgICB2YXIgaW5wdXRWYWx1ZSA9IGdldFNlbGVjdGVkRmlsZXModGhpcyk7XG5cbiAgICAgIGlmIChpbnB1dFZhbHVlLmxlbmd0aCkge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGlucHV0VmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN0b3JlRGVmYXVsdFRleHQodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRm9ybVJlc2V0KCkge1xuICAgIHZhciBjdXN0b21GaWxlTGlzdCA9IFtdLnNsaWNlLmNhbGwodGhpcy5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLklOUFVUKSkuZmlsdGVyKGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgcmV0dXJuICEhaW5wdXQuYnNDdXN0b21GaWxlSW5wdXQ7XG4gICAgfSk7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY3VzdG9tRmlsZUxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHJlc3RvcmVEZWZhdWx0VGV4dChjdXN0b21GaWxlTGlzdFtpXSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGN1c3RvbVByb3BlcnR5ID0gJ2JzQ3VzdG9tRmlsZUlucHV0JztcbiAgdmFyIEV2ZW50ID0ge1xuICAgIEZPUk1SRVNFVDogJ3Jlc2V0JyxcbiAgICBJTlBVVENIQU5HRTogJ2NoYW5nZSdcbiAgfTtcbiAgdmFyIGJzQ3VzdG9tRmlsZUlucHV0ID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoaW5wdXRTZWxlY3RvciwgZm9ybVNlbGVjdG9yKSB7XG4gICAgICBpZiAoaW5wdXRTZWxlY3RvciA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGlucHV0U2VsZWN0b3IgPSBTZWxlY3Rvci5DVVNUT01GSUxFO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm9ybVNlbGVjdG9yID09PSB2b2lkIDApIHtcbiAgICAgICAgZm9ybVNlbGVjdG9yID0gU2VsZWN0b3IuRk9STTtcbiAgICAgIH1cblxuICAgICAgdmFyIGN1c3RvbUZpbGVJbnB1dExpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaW5wdXRTZWxlY3RvcikpO1xuICAgICAgdmFyIGZvcm1MaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGZvcm1TZWxlY3RvcikpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY3VzdG9tRmlsZUlucHV0TGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgaW5wdXQgPSBjdXN0b21GaWxlSW5wdXRMaXN0W2ldO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaW5wdXQsIGN1c3RvbVByb3BlcnR5LCB7XG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGRlZmF1bHRUZXh0OiBnZXREZWZhdWx0VGV4dChpbnB1dClcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBoYW5kbGVJbnB1dENoYW5nZS5jYWxsKGlucHV0KTtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihFdmVudC5JTlBVVENIQU5HRSwgaGFuZGxlSW5wdXRDaGFuZ2UpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfaSA9IDAsIF9sZW4gPSBmb3JtTGlzdC5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICBmb3JtTGlzdFtfaV0uYWRkRXZlbnRMaXN0ZW5lcihFdmVudC5GT1JNUkVTRVQsIGhhbmRsZUZvcm1SZXNldCk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZvcm1MaXN0W19pXSwgY3VzdG9tUHJvcGVydHksIHtcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB2YXIgZm9ybUxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuRk9STSkpLmZpbHRlcihmdW5jdGlvbiAoZm9ybSkge1xuICAgICAgICByZXR1cm4gISFmb3JtLmJzQ3VzdG9tRmlsZUlucHV0O1xuICAgICAgfSk7XG4gICAgICB2YXIgY3VzdG9tRmlsZUlucHV0TGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5JTlBVVCkpLmZpbHRlcihmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICEhaW5wdXQuYnNDdXN0b21GaWxlSW5wdXQ7XG4gICAgICB9KTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGN1c3RvbUZpbGVJbnB1dExpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGlucHV0ID0gY3VzdG9tRmlsZUlucHV0TGlzdFtpXTtcbiAgICAgICAgcmVzdG9yZURlZmF1bHRUZXh0KGlucHV0KTtcbiAgICAgICAgaW5wdXRbY3VzdG9tUHJvcGVydHldID0gdW5kZWZpbmVkO1xuICAgICAgICBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKEV2ZW50LklOUFVUQ0hBTkdFLCBoYW5kbGVJbnB1dENoYW5nZSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9pMiA9IDAsIF9sZW4yID0gZm9ybUxpc3QubGVuZ3RoOyBfaTIgPCBfbGVuMjsgX2kyKyspIHtcbiAgICAgICAgZm9ybUxpc3RbX2kyXS5yZW1vdmVFdmVudExpc3RlbmVyKEV2ZW50LkZPUk1SRVNFVCwgaGFuZGxlRm9ybVJlc2V0KTtcblxuICAgICAgICBmb3JtTGlzdFtfaTJdW2N1c3RvbVByb3BlcnR5XSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGJzQ3VzdG9tRmlsZUlucHV0O1xuXG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icy1jdXN0b20tZmlsZS1pbnB1dC5qcy5tYXBcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW5jb3JyZWN0ICcgKyAobmFtZSA/IG5hbWUgKyAnICcgOiAnJykgKyAnaW52b2NhdGlvbicpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgcmV0dXJuICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gYXJyYXkuY29uc3RydWN0b3IgPSB7fTtcbiAgICBjb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGZvbzogMSB9O1xuICAgIH07XG4gICAgcmV0dXJuIGFycmF5W01FVEhPRF9OQU1FXShCb29sZWFuKS5mb28gIT09IDE7XG4gIH0pO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxuLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgRU5UUklFUykge1xuICB0cnkge1xuICAgIHJldHVybiBFTlRSSUVTID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdmFyIHJldHVybk1ldGhvZCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0dXJuTWV0aG9kICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldHVybk1ldGhvZC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIGNhbGxlZCA9IDA7XG4gIHZhciBpdGVyYXRvcldpdGhSZXR1cm4gPSB7XG4gICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZG9uZTogISFjYWxsZWQrKyB9O1xuICAgIH0sXG4gICAgJ3JldHVybic6IGZ1bmN0aW9uICgpIHtcbiAgICAgIFNBRkVfQ0xPU0lORyA9IHRydWU7XG4gICAgfVxuICB9O1xuICBpdGVyYXRvcldpdGhSZXR1cm5bSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKGl0ZXJhdG9yV2l0aFJldHVybiwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgU0tJUF9DTE9TSU5HKSB7XG4gIGlmICghU0tJUF9DTE9TSU5HICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIElURVJBVElPTl9TVVBQT1JUID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIG9iamVjdCA9IHt9O1xuICAgIG9iamVjdFtJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogSVRFUkFUSU9OX1NVUFBPUlQgPSB0cnVlIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICBleGVjKG9iamVjdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIElURVJBVElPTl9TVVBQT1JUO1xufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgcXVvdCA9IC9cIi9nO1xuXG4vLyBCLjIuMy4yLjEgQ3JlYXRlSFRNTChzdHJpbmcsIHRhZywgYXR0cmlidXRlLCB2YWx1ZSlcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWNyZWF0ZWh0bWxcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cmluZywgdGFnLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gIHZhciBTID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoc3RyaW5nKSk7XG4gIHZhciBwMSA9ICc8JyArIHRhZztcbiAgaWYgKGF0dHJpYnV0ZSAhPT0gJycpIHAxICs9ICcgJyArIGF0dHJpYnV0ZSArICc9XCInICsgU3RyaW5nKHZhbHVlKS5yZXBsYWNlKHF1b3QsICcmcXVvdDsnKSArICdcIic7XG4gIHJldHVybiBwMSArICc+JyArIFMgKyAnPC8nICsgdGFnICsgJz4nO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHlLZXkgPSB0b1ByaW1pdGl2ZShrZXkpO1xuICBpZiAocHJvcGVydHlLZXkgaW4gb2JqZWN0KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwgcHJvcGVydHlLZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtwcm9wZXJ0eUtleV0gPSB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIEZvcmNlZCByZXBsYWNlbWVudCBvYmplY3QgcHJvdG90eXBlIGFjY2Vzc29ycyBtZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IElTX1BVUkUgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGtleSA9IE1hdGgucmFuZG9tKCk7XG4gIC8vIEluIEZGIHRocm93cyBvbmx5IGRlZmluZSBtZXRob2RzXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZiwgbm8tdXNlbGVzcy1jYWxsXG4gIF9fZGVmaW5lU2V0dGVyX18uY2FsbChudWxsLCBrZXksIGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG4gIGRlbGV0ZSBnbG9iYWxba2V5XTtcbn0pO1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIGNoZWNrIHRoZSBleGlzdGVuY2Ugb2YgYSBtZXRob2QsIGxvd2VyY2FzZVxuLy8gb2YgYSB0YWcgYW5kIGVzY2FwaW5nIHF1b3RlcyBpbiBhcmd1bWVudHNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHJldHVybiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRlc3QgPSAnJ1tNRVRIT0RfTkFNRV0oJ1wiJyk7XG4gICAgcmV0dXJuIHRlc3QgIT09IHRlc3QudG9Mb3dlckNhc2UoKSB8fCB0ZXN0LnNwbGl0KCdcIicpLmxlbmd0aCA+IDM7XG4gIH0pO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciBub24gPSAnXFx1MjAwQlxcdTAwODVcXHUxODBFJztcblxuLy8gY2hlY2sgdGhhdCBhIG1ldGhvZCB3b3JrcyB3aXRoIHRoZSBjb3JyZWN0IGxpc3Rcbi8vIG9mIHdoaXRlc3BhY2VzIGFuZCBoYXMgYSBjb3JyZWN0IG5hbWVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHJldHVybiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdKCkgfHwgbm9uW01FVEhPRF9OQU1FXSgpICE9IG5vbiB8fCB3aGl0ZXNwYWNlc1tNRVRIT0RfTkFNRV0ubmFtZSAhPT0gTUVUSE9EX05BTUU7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcbnZhciBmYWN0b3JpZXMgPSB7fTtcblxudmFyIGNvbnN0cnVjdCA9IGZ1bmN0aW9uIChDLCBhcmdzTGVuZ3RoLCBhcmdzKSB7XG4gIGlmICghKGFyZ3NMZW5ndGggaW4gZmFjdG9yaWVzKSkge1xuICAgIGZvciAodmFyIGxpc3QgPSBbXSwgaSA9IDA7IGkgPCBhcmdzTGVuZ3RoOyBpKyspIGxpc3RbaV0gPSAnYVsnICsgaSArICddJztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICBmYWN0b3JpZXNbYXJnc0xlbmd0aF0gPSBGdW5jdGlvbignQyxhJywgJ3JldHVybiBuZXcgQygnICsgbGlzdC5qb2luKCcsJykgKyAnKScpO1xuICB9IHJldHVybiBmYWN0b3JpZXNbYXJnc0xlbmd0aF0oQywgYXJncyk7XG59O1xuXG4vLyBgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24uYmluZCB8fCBmdW5jdGlvbiBiaW5kKHRoYXQgLyogLCAuLi5hcmdzICovKSB7XG4gIHZhciBmbiA9IGFGdW5jdGlvbih0aGlzKTtcbiAgdmFyIHBhcnRBcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICB2YXIgYm91bmRGdW5jdGlvbiA9IGZ1bmN0aW9uIGJvdW5kKC8qIGFyZ3MuLi4gKi8pIHtcbiAgICB2YXIgYXJncyA9IHBhcnRBcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgYm91bmRGdW5jdGlvbiA/IGNvbnN0cnVjdChmbiwgYXJncy5sZW5ndGgsIGFyZ3MpIDogZm4uYXBwbHkodGhhdCwgYXJncyk7XG4gIH07XG4gIGlmIChpc09iamVjdChmbi5wcm90b3R5cGUpKSBib3VuZEZ1bmN0aW9uLnByb3RvdHlwZSA9IGZuLnByb3RvdHlwZTtcbiAgcmV0dXJuIGJvdW5kRnVuY3Rpb247XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYSwgYikge1xuICB2YXIgY29uc29sZSA9IGdsb2JhbC5jb25zb2xlO1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IGNvbnNvbGUuZXJyb3IoYSkgOiBjb25zb2xlLmVycm9yKGEsIGIpO1xuICB9XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvdHlwZVtJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYmluZC1jb250ZXh0Jyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcnKTtcblxudmFyIFJlc3VsdCA9IGZ1bmN0aW9uIChzdG9wcGVkLCByZXN1bHQpIHtcbiAgdGhpcy5zdG9wcGVkID0gc3RvcHBlZDtcbiAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG59O1xuXG52YXIgaXRlcmF0ZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBmbiwgdGhhdCwgQVNfRU5UUklFUywgSVNfSVRFUkFUT1IpIHtcbiAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGZuLCB0aGF0LCBBU19FTlRSSUVTID8gMiA6IDEpO1xuICB2YXIgaXRlcmF0b3IsIGl0ZXJGbiwgaW5kZXgsIGxlbmd0aCwgcmVzdWx0LCBzdGVwO1xuXG4gIGlmIChJU19JVEVSQVRPUikge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGU7XG4gIH0gZWxzZSB7XG4gICAgaXRlckZuID0gZ2V0SXRlcmF0b3JNZXRob2QoaXRlcmFibGUpO1xuICAgIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcignVGFyZ2V0IGlzIG5vdCBpdGVyYWJsZScpO1xuICAgIC8vIG9wdGltaXNhdGlvbiBmb3IgYXJyYXkgaXRlcmF0b3JzXG4gICAgaWYgKGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyRm4pKSB7XG4gICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0ID0gQVNfRU5UUklFU1xuICAgICAgICAgID8gYm91bmRGdW5jdGlvbihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSlcbiAgICAgICAgICA6IGJvdW5kRnVuY3Rpb24oaXRlcmFibGVbaW5kZXhdKTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQgaW5zdGFuY2VvZiBSZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICB9IHJldHVybiBuZXcgUmVzdWx0KGZhbHNlKTtcbiAgICB9XG4gICAgaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7XG4gIH1cblxuICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgcmVzdWx0ID0gY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyhpdGVyYXRvciwgYm91bmRGdW5jdGlvbiwgc3RlcC52YWx1ZSwgQVNfRU5UUklFUyk7XG4gICAgaWYgKHJlc3VsdCAmJiByZXN1bHQgaW5zdGFuY2VvZiBSZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xufTtcblxuaXRlcmF0ZS5zdG9wID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICByZXR1cm4gbmV3IFJlc3VsdCh0cnVlLCByZXN1bHQpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGFzaycpLnNldDtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlci1hZ2VudCcpO1xuXG52YXIgTXV0YXRpb25PYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgSVNfTk9ERSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuLy8gTm9kZS5qcyAxMSBzaG93cyBFeHBlcmltZW50YWxXYXJuaW5nIG9uIGdldHRpbmcgYHF1ZXVlTWljcm90YXNrYFxudmFyIHF1ZXVlTWljcm90YXNrRGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihnbG9iYWwsICdxdWV1ZU1pY3JvdGFzaycpO1xudmFyIHF1ZXVlTWljcm90YXNrID0gcXVldWVNaWNyb3Rhc2tEZXNjcmlwdG9yICYmIHF1ZXVlTWljcm90YXNrRGVzY3JpcHRvci52YWx1ZTtcblxudmFyIGZsdXNoLCBoZWFkLCBsYXN0LCBub3RpZnksIHRvZ2dsZSwgbm9kZSwgcHJvbWlzZSwgdGhlbjtcblxuLy8gbW9kZXJuIGVuZ2luZXMgaGF2ZSBxdWV1ZU1pY3JvdGFzayBtZXRob2RcbmlmICghcXVldWVNaWNyb3Rhc2spIHtcbiAgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKElTX05PREUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKElTX05PREUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoTXV0YXRpb25PYnNlcnZlciAmJiAhLyhpcGhvbmV8aXBvZHxpcGFkKS4qYXBwbGV3ZWJraXQvaS50ZXN0KHVzZXJBZ2VudCkpIHtcbiAgICB0b2dnbGUgPSB0cnVlO1xuICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIHRoZW4gPSBwcm9taXNlLnRoZW47XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhlbi5jYWxsKHByb21pc2UsIGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1ZXVlTWljcm90YXNrIHx8IGZ1bmN0aW9uIChmbikge1xuICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gIGlmICghaGVhZCkge1xuICAgIGhlYWQgPSB0YXNrO1xuICAgIG5vdGlmeSgpO1xuICB9IGxhc3QgPSB0YXNrO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsLlByb21pc2U7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcblxudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG5cbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciBuYXRpdmVQYXJzZUZsb2F0ID0gZ2xvYmFsLnBhcnNlRmxvYXQ7XG52YXIgRk9SQ0VEID0gMSAvIG5hdGl2ZVBhcnNlRmxvYXQod2hpdGVzcGFjZXMgKyAnLTAnKSAhPT0gLUluZmluaXR5O1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWZsb2F0LXN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUZsb2F0KHN0cmluZykge1xuICB2YXIgdHJpbW1lZFN0cmluZyA9IHRyaW0oU3RyaW5nKHN0cmluZykpO1xuICB2YXIgcmVzdWx0ID0gbmF0aXZlUGFyc2VGbG9hdCh0cmltbWVkU3RyaW5nKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCAmJiB0cmltbWVkU3RyaW5nLmNoYXJBdCgwKSA9PSAnLScgPyAtMCA6IHJlc3VsdDtcbn0gOiBuYXRpdmVQYXJzZUZsb2F0O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgbmF0aXZlUGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgaGV4ID0gL15bKy1dPzBbWHhdLztcbnZhciBGT1JDRUQgPSBuYXRpdmVQYXJzZUludCh3aGl0ZXNwYWNlcyArICcwOCcpICE9PSA4IHx8IG5hdGl2ZVBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzB4MTYnKSAhPT0gMjI7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gcGFyc2VJbnQoc3RyaW5nLCByYWRpeCkge1xuICB2YXIgUyA9IHRyaW0oU3RyaW5nKHN0cmluZykpO1xuICByZXR1cm4gbmF0aXZlUGFyc2VJbnQoUywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3QoUykgPyAxNiA6IDEwKSk7XG59IDogbmF0aXZlUGFyc2VJbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IGZhbHNlLCB2YWx1ZTogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgZXJyb3I6IHRydWUsIHZhbHVlOiBlcnJvciB9O1xuICB9XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcbiIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgb3B0aW9ucykge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSByZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIG9wdGlvbnMpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcbiIsIi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbi8vIGBTcGVjaWVzQ29uc3RydWN0b3JgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3BlY2llc2NvbnN0cnVjdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBkZWZhdWx0Q29uc3RydWN0b3IpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gZGVmYXVsdENvbnN0cnVjdG9yIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUxlZnQsIHRyaW1TdGFydCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gIHRyaW06IGNyZWF0ZU1ldGhvZCgzKVxufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9iaW5kLWNvbnRleHQnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbnZhciBsb2NhdGlvbiA9IGdsb2JhbC5sb2NhdGlvbjtcbnZhciBzZXQgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xuXG52YXIgcnVuID0gZnVuY3Rpb24gKGlkKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG5cbnZhciBydW5uZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBydW4oaWQpO1xuICB9O1xufTtcblxudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bihldmVudC5kYXRhKTtcbn07XG5cbnZhciBwb3N0ID0gZnVuY3Rpb24gKGlkKSB7XG4gIC8vIG9sZCBlbmdpbmVzIGhhdmUgbm90IGxvY2F0aW9uLm9yaWdpblxuICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCk7XG59O1xuXG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldCB8fCAhY2xlYXIpIHtcbiAgc2V0ID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgICh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pKS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2socnVubmVyKGlkKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhydW5uZXIoaWQpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGJpbmQocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyAmJiAhZmFpbHMocG9zdCkpIHtcbiAgICBkZWZlciA9IHBvc3Q7XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bihpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQocnVubmVyKGlkKSwgMCk7XG4gICAgfTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGNsZWFyOiBjbGVhclxufTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ25hdmlnYXRvcicsICd1c2VyQWdlbnQnKSB8fCAnJztcbiIsIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7XG52YXIgTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEID0gJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCc7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIGFycmF5W0lTX0NPTkNBVF9TUFJFQURBQkxFXSA9IGZhbHNlO1xuICByZXR1cm4gYXJyYXkuY29uY2F0KClbMF0gIT09IGFycmF5O1xufSk7XG5cbnZhciBTUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdjb25jYXQnKTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XG59O1xuXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIVNQRUNJRVNfU1VQUE9SVDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5jb25jYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmNvbmNhdFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQGlzQ29uY2F0U3ByZWFkYWJsZSBhbmQgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBjb25jYXQ6IGZ1bmN0aW9uIGNvbmNhdChhcmcpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgdmFyIG4gPSAwO1xuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBFID0gaSA9PT0gLTEgPyBPIDogYXJndW1lbnRzW2ldO1xuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xuICAgICAgICBsZW4gPSB0b0xlbmd0aChFLmxlbmd0aCk7XG4gICAgICAgIGlmIChuICsgbGVuID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBsZW47IGsrKywgbisrKSBpZiAoayBpbiBFKSBjcmVhdGVQcm9wZXJ0eShBLCBuLCBFW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuID49IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShBLCBuKyssIEUpO1xuICAgICAgfVxuICAgIH1cbiAgICBBLmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIWFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJGZpbHRlcih0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZDtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG52YXIgRklORCA9ICdmaW5kJztcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XG5cbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoRklORCBpbiBbXSkgQXJyYXkoMSlbRklORF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoRklORCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgc2xvcHB5QXJyYXlNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2xvcHB5LWFycmF5LW1ldGhvZCcpO1xuXG52YXIgbmF0aXZlSW5kZXhPZiA9IFtdLmluZGV4T2Y7XG5cbnZhciBORUdBVElWRV9aRVJPID0gISFuYXRpdmVJbmRleE9mICYmIDEgLyBbMV0uaW5kZXhPZigxLCAtMCkgPCAwO1xudmFyIFNMT1BQWV9NRVRIT0QgPSBzbG9wcHlBcnJheU1ldGhvZCgnaW5kZXhPZicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IE5FR0FUSVZFX1pFUk8gfHwgU0xPUFBZX01FVEhPRCB9LCB7XG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyBuYXRpdmVJbmRleE9mLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xuXG4vLyBgQXJyYXkuaXNBcnJheWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5pc2FycmF5XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBzdGF0OiB0cnVlIH0sIHtcbiAgaXNBcnJheTogaXNBcnJheVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJykgfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG5cbnZhciBuYXRpdmVSZXZlcnNlID0gW10ucmV2ZXJzZTtcbnZhciB0ZXN0ID0gWzEsIDJdO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnJldmVyc2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnJldmVyc2Vcbi8vIGZpeCBmb3IgU2FmYXJpIDEyLjAgYnVnXG4vLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTg4Nzk0XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTdHJpbmcodGVzdCkgPT09IFN0cmluZyh0ZXN0LnJldmVyc2UoKSkgfSwge1xuICByZXZlcnNlOiBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgIGlmIChpc0FycmF5KHRoaXMpKSB0aGlzLmxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICAgIHJldHVybiBuYXRpdmVSZXZlcnNlLmNhbGwodGhpcyk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBuYXRpdmVTbGljZSA9IFtdLnNsaWNlO1xudmFyIG1heCA9IE1hdGgubWF4O1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNsaWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zbGljZVxuLy8gZmFsbGJhY2sgZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmdzIGFuZCBET00gb2JqZWN0c1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIWFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ3NsaWNlJykgfSwge1xuICBzbGljZTogZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGsgPSB0b0Fic29sdXRlSW5kZXgoc3RhcnQsIGxlbmd0aCk7XG4gICAgdmFyIGZpbiA9IHRvQWJzb2x1dGVJbmRleChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IGVuZCwgbGVuZ3RoKTtcbiAgICAvLyBpbmxpbmUgYEFycmF5U3BlY2llc0NyZWF0ZWAgZm9yIHVzYWdlIG5hdGl2ZSBgQXJyYXkjc2xpY2VgIHdoZXJlIGl0J3MgcG9zc2libGVcbiAgICB2YXIgQ29uc3RydWN0b3IsIHJlc3VsdCwgbjtcbiAgICBpZiAoaXNBcnJheShPKSkge1xuICAgICAgQ29uc3RydWN0b3IgPSBPLmNvbnN0cnVjdG9yO1xuICAgICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICAgIGlmICh0eXBlb2YgQ29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAoQ29uc3RydWN0b3IgPT09IEFycmF5IHx8IGlzQXJyYXkoQ29uc3RydWN0b3IucHJvdG90eXBlKSkpIHtcbiAgICAgICAgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KENvbnN0cnVjdG9yKSkge1xuICAgICAgICBDb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yW1NQRUNJRVNdO1xuICAgICAgICBpZiAoQ29uc3RydWN0b3IgPT09IG51bGwpIENvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKENvbnN0cnVjdG9yID09PSBBcnJheSB8fCBDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmVTbGljZS5jYWxsKE8sIGssIGZpbik7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdCA9IG5ldyAoQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQ29uc3RydWN0b3IpKG1heChmaW4gLSBrLCAwKSk7XG4gICAgZm9yIChuID0gMDsgayA8IGZpbjsgaysrLCBuKyspIGlmIChrIGluIE8pIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgbiwgT1trXSk7XG4gICAgcmVzdWx0Lmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkc29tZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5zb21lO1xudmFyIHNsb3BweUFycmF5TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Nsb3BweS1hcnJheS1tZXRob2QnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5zb21lYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb21lXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBzbG9wcHlBcnJheU1ldGhvZCgnc29tZScpIH0sIHtcbiAgc29tZTogZnVuY3Rpb24gc29tZShjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkc29tZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjtcbnZhciBNQVhJTVVNX0FMTE9XRURfTEVOR1RIX0VYQ0VFREVEID0gJ01heGltdW0gYWxsb3dlZCBsZW5ndGggZXhjZWVkZWQnO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNwbGljZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc3BsaWNlXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIWFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ3NwbGljZScpIH0sIHtcbiAgc3BsaWNlOiBmdW5jdGlvbiBzcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50IC8qICwgLi4uaXRlbXMgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW4gPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGFjdHVhbFN0YXJ0ID0gdG9BYnNvbHV0ZUluZGV4KHN0YXJ0LCBsZW4pO1xuICAgIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBpbnNlcnRDb3VudCwgYWN0dWFsRGVsZXRlQ291bnQsIEEsIGssIGZyb20sIHRvO1xuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICAgIGluc2VydENvdW50ID0gYWN0dWFsRGVsZXRlQ291bnQgPSAwO1xuICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgICBpbnNlcnRDb3VudCA9IDA7XG4gICAgICBhY3R1YWxEZWxldGVDb3VudCA9IGxlbiAtIGFjdHVhbFN0YXJ0O1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnNlcnRDb3VudCA9IGFyZ3VtZW50c0xlbmd0aCAtIDI7XG4gICAgICBhY3R1YWxEZWxldGVDb3VudCA9IG1pbihtYXgodG9JbnRlZ2VyKGRlbGV0ZUNvdW50KSwgMCksIGxlbiAtIGFjdHVhbFN0YXJ0KTtcbiAgICB9XG4gICAgaWYgKGxlbiArIGluc2VydENvdW50IC0gYWN0dWFsRGVsZXRlQ291bnQgPiBNQVhfU0FGRV9JTlRFR0VSKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0xFTkdUSF9FWENFRURFRCk7XG4gICAgfVxuICAgIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgYWN0dWFsRGVsZXRlQ291bnQpO1xuICAgIGZvciAoayA9IDA7IGsgPCBhY3R1YWxEZWxldGVDb3VudDsgaysrKSB7XG4gICAgICBmcm9tID0gYWN0dWFsU3RhcnQgKyBrO1xuICAgICAgaWYgKGZyb20gaW4gTykgY3JlYXRlUHJvcGVydHkoQSwgaywgT1tmcm9tXSk7XG4gICAgfVxuICAgIEEubGVuZ3RoID0gYWN0dWFsRGVsZXRlQ291bnQ7XG4gICAgaWYgKGluc2VydENvdW50IDwgYWN0dWFsRGVsZXRlQ291bnQpIHtcbiAgICAgIGZvciAoayA9IGFjdHVhbFN0YXJ0OyBrIDwgbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQ7IGsrKykge1xuICAgICAgICBmcm9tID0gayArIGFjdHVhbERlbGV0ZUNvdW50O1xuICAgICAgICB0byA9IGsgKyBpbnNlcnRDb3VudDtcbiAgICAgICAgaWYgKGZyb20gaW4gTykgT1t0b10gPSBPW2Zyb21dO1xuICAgICAgICBlbHNlIGRlbGV0ZSBPW3RvXTtcbiAgICAgIH1cbiAgICAgIGZvciAoayA9IGxlbjsgayA+IGxlbiAtIGFjdHVhbERlbGV0ZUNvdW50ICsgaW5zZXJ0Q291bnQ7IGstLSkgZGVsZXRlIE9bayAtIDFdO1xuICAgIH0gZWxzZSBpZiAoaW5zZXJ0Q291bnQgPiBhY3R1YWxEZWxldGVDb3VudCkge1xuICAgICAgZm9yIChrID0gbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQ7IGsgPiBhY3R1YWxTdGFydDsgay0tKSB7XG4gICAgICAgIGZyb20gPSBrICsgYWN0dWFsRGVsZXRlQ291bnQgLSAxO1xuICAgICAgICB0byA9IGsgKyBpbnNlcnRDb3VudCAtIDE7XG4gICAgICAgIGlmIChmcm9tIGluIE8pIE9bdG9dID0gT1tmcm9tXTtcbiAgICAgICAgZWxzZSBkZWxldGUgT1t0b107XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoayA9IDA7IGsgPCBpbnNlcnRDb3VudDsgaysrKSB7XG4gICAgICBPW2sgKyBhY3R1YWxTdGFydF0gPSBhcmd1bWVudHNbayArIDJdO1xuICAgIH1cbiAgICBPLmxlbmd0aCA9IGxlbiAtIGFjdHVhbERlbGV0ZUNvdW50ICsgaW5zZXJ0Q291bnQ7XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbnZhciBEYXRlUHJvdG90eXBlID0gRGF0ZS5wcm90b3R5cGU7XG52YXIgSU5WQUxJRF9EQVRFID0gJ0ludmFsaWQgRGF0ZSc7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciBuYXRpdmVEYXRlVG9TdHJpbmcgPSBEYXRlUHJvdG90eXBlW1RPX1NUUklOR107XG52YXIgZ2V0VGltZSA9IERhdGVQcm90b3R5cGUuZ2V0VGltZTtcblxuLy8gYERhdGUucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWRhdGUucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAobmV3IERhdGUoTmFOKSArICcnICE9IElOVkFMSURfREFURSkge1xuICByZWRlZmluZShEYXRlUHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciB2YWx1ZSA9IGdldFRpbWUuY2FsbCh0aGlzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/IG5hdGl2ZURhdGVUb1N0cmluZy5jYWxsKHRoaXMpIDogSU5WQUxJRF9EQVRFO1xuICB9KTtcbn1cbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZCcpO1xuXG4vLyBgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbiQoeyB0YXJnZXQ6ICdGdW5jdGlvbicsIHByb3RvOiB0cnVlIH0sIHtcbiAgYmluZDogYmluZFxufSk7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcgPSBGdW5jdGlvblByb3RvdHlwZS50b1N0cmluZztcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gRnVuY3Rpb24gaW5zdGFuY2VzIGAubmFtZWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIShOQU1FIGluIEZ1bmN0aW9uUHJvdG90eXBlKSkge1xuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nLmNhbGwodGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBGT1JDRUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZm9yY2VkLW9iamVjdC1wcm90b3R5cGUtYWNjZXNzb3JzLW1ldGhvZHMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUuX19kZWZpbmVHZXR0ZXJfX2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX19cbmlmIChERVNDUklQVE9SUykge1xuICAkKHsgdGFyZ2V0OiAnT2JqZWN0JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgICBfX2RlZmluZUdldHRlcl9fOiBmdW5jdGlvbiBfX2RlZmluZUdldHRlcl9fKFAsIGdldHRlcikge1xuICAgICAgZGVmaW5lUHJvcGVydHlNb2R1bGUuZih0b09iamVjdCh0aGlzKSwgUCwgeyBnZXQ6IGFGdW5jdGlvbihnZXR0ZXIpLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgfVxuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgRk9SQ0VEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZvcmNlZC1vYmplY3QtcHJvdG90eXBlLWFjY2Vzc29ycy1tZXRob2RzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLl9fbG9va3VwR2V0dGVyX19gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5fX2xvb2t1cEdldHRlcl9fXG5pZiAoREVTQ1JJUFRPUlMpIHtcbiAgJCh7IHRhcmdldDogJ09iamVjdCcsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gICAgX19sb29rdXBHZXR0ZXJfXzogZnVuY3Rpb24gX19sb29rdXBHZXR0ZXJfXyhQKSB7XG4gICAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICAgICAgdmFyIGRlc2M7XG4gICAgICBkbyB7XG4gICAgICAgIGlmIChkZXNjID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIGtleSkpIHJldHVybiBkZXNjLmdldDtcbiAgICAgIH0gd2hpbGUgKE8gPSBnZXRQcm90b3R5cGVPZihPKSk7XG4gICAgfVxuICB9KTtcbn1cbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHBhcnNlRmxvYXRJbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXJzZS1mbG9hdCcpO1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWZsb2F0LXN0cmluZ1xuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUZsb2F0ICE9IHBhcnNlRmxvYXRJbXBsZW1lbnRhdGlvbiB9LCB7XG4gIHBhcnNlRmxvYXQ6IHBhcnNlRmxvYXRJbXBsZW1lbnRhdGlvblxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUludEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhcnNlLWludCcpO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlSW50ICE9IHBhcnNlSW50SW1wbGVtZW50YXRpb24gfSwge1xuICBwYXJzZUludDogcGFyc2VJbnRJbXBsZW1lbnRhdGlvblxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXRoJyk7XG52YXIgTmF0aXZlUHJvbWlzZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtcHJvbWlzZS1jb25zdHJ1Y3RvcicpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUtYWxsJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zcGVjaWVzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLWluc3RhbmNlJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24nKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWljcm90YXNrJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgaG9zdFJlcG9ydEVycm9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ob3N0LXJlcG9ydC1lcnJvcnMnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wZXJmb3JtJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZXItYWdlbnQnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsUHJvbWlzZVN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoUFJPTUlTRSk7XG52YXIgUHJvbWlzZUNvbnN0cnVjdG9yID0gTmF0aXZlUHJvbWlzZTtcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciAkZmV0Y2ggPSBnbG9iYWwuZmV0Y2g7XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnM7XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52OCB8fCAnJztcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG52YXIgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHk7XG52YXIgSVNfTk9ERSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIERJU1BBVENIX0VWRU5UID0gISEoZG9jdW1lbnQgJiYgZG9jdW1lbnQuY3JlYXRlRXZlbnQgJiYgZ2xvYmFsLmRpc3BhdGNoRXZlbnQpO1xudmFyIFVOSEFORExFRF9SRUpFQ1RJT04gPSAndW5oYW5kbGVkcmVqZWN0aW9uJztcbnZhciBSRUpFQ1RJT05fSEFORExFRCA9ICdyZWplY3Rpb25oYW5kbGVkJztcbnZhciBQRU5ESU5HID0gMDtcbnZhciBGVUxGSUxMRUQgPSAxO1xudmFyIFJFSkVDVEVEID0gMjtcbnZhciBIQU5ETEVEID0gMTtcbnZhciBVTkhBTkRMRUQgPSAyO1xudmFyIEludGVybmFsLCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgUHJvbWlzZVdyYXBwZXIsIG5hdGl2ZVRoZW47XG5cbnZhciBGT1JDRUQgPSBpc0ZvcmNlZChQUk9NSVNFLCBmdW5jdGlvbiAoKSB7XG4gIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICB2YXIgcHJvbWlzZSA9IFByb21pc2VDb25zdHJ1Y3Rvci5yZXNvbHZlKDEpO1xuICB2YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG4gIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW1NQRUNJRVNdID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gIH07XG4gIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgcmV0dXJuICEoKElTX05PREUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKVxuICAgICYmICghSVNfUFVSRSB8fCBwcm9taXNlWydmaW5hbGx5J10pXG4gICAgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlXG4gICAgLy8gdjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxuICAgIC8vIHdlIGNhbid0IGRldGVjdCBpdCBzeW5jaHJvbm91c2x5LCBzbyBqdXN0IGNoZWNrIHZlcnNpb25zXG4gICAgJiYgdjguaW5kZXhPZignNi42JykgIT09IDBcbiAgICAmJiB1c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lLzY2JykgPT09IC0xKTtcbn0pO1xuXG52YXIgSU5DT1JSRUNUX0lURVJBVElPTiA9IEZPUkNFRCB8fCAhY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuICBQcm9taXNlQ29uc3RydWN0b3IuYWxsKGl0ZXJhYmxlKVsnY2F0Y2gnXShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xufSk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xuXG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIHN0YXRlLCBpc1JlamVjdCkge1xuICBpZiAoc3RhdGUubm90aWZpZWQpIHJldHVybjtcbiAgc3RhdGUubm90aWZpZWQgPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBzdGF0ZS5yZWFjdGlvbnM7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gc3RhdGUudmFsdWU7XG4gICAgdmFyIG9rID0gc3RhdGUuc3RhdGUgPT0gRlVMRklMTEVEO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IGNoYWluW2luZGV4KytdO1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbiwgZXhpdGVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUucmVqZWN0aW9uID09PSBVTkhBTkRMRUQpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UsIHN0YXRlKTtcbiAgICAgICAgICAgIHN0YXRlLnJlamVjdGlvbiA9IEhBTkRMRUQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIGNhbiB0aHJvd1xuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChkb21haW4gJiYgIWV4aXRlZCkgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhdGUucmVhY3Rpb25zID0gW107XG4gICAgc3RhdGUubm90aWZpZWQgPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXN0YXRlLnJlamVjdGlvbikgb25VbmhhbmRsZWQocHJvbWlzZSwgc3RhdGUpO1xuICB9KTtcbn07XG5cbnZhciBkaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKG5hbWUsIHByb21pc2UsIHJlYXNvbikge1xuICB2YXIgZXZlbnQsIGhhbmRsZXI7XG4gIGlmIChESVNQQVRDSF9FVkVOVCkge1xuICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgZXZlbnQucHJvbWlzZSA9IHByb21pc2U7XG4gICAgZXZlbnQucmVhc29uID0gcmVhc29uO1xuICAgIGV2ZW50LmluaXRFdmVudChuYW1lLCBmYWxzZSwgdHJ1ZSk7XG4gICAgZ2xvYmFsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9IGVsc2UgZXZlbnQgPSB7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcmVhc29uIH07XG4gIGlmIChoYW5kbGVyID0gZ2xvYmFsWydvbicgKyBuYW1lXSkgaGFuZGxlcihldmVudCk7XG4gIGVsc2UgaWYgKG5hbWUgPT09IFVOSEFORExFRF9SRUpFQ1RJT04pIGhvc3RSZXBvcnRFcnJvcnMoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHJlYXNvbik7XG59O1xuXG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSwgc3RhdGUpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHN0YXRlLnZhbHVlO1xuICAgIHZhciBJU19VTkhBTkRMRUQgPSBpc1VuaGFuZGxlZChzdGF0ZSk7XG4gICAgdmFyIHJlc3VsdDtcbiAgICBpZiAoSVNfVU5IQU5ETEVEKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKElTX05PREUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGRpc3BhdGNoRXZlbnQoVU5IQU5ETEVEX1JFSkVDVElPTiwgcHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgc3RhdGUucmVqZWN0aW9uID0gSVNfTk9ERSB8fCBpc1VuaGFuZGxlZChzdGF0ZSkgPyBVTkhBTkRMRUQgOiBIQU5ETEVEO1xuICAgICAgaWYgKHJlc3VsdC5lcnJvcikgdGhyb3cgcmVzdWx0LnZhbHVlO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgcmV0dXJuIHN0YXRlLnJlamVjdGlvbiAhPT0gSEFORExFRCAmJiAhc3RhdGUucGFyZW50O1xufTtcblxudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UsIHN0YXRlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoSVNfTk9ERSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGRpc3BhdGNoRXZlbnQoUkVKRUNUSU9OX0hBTkRMRUQsIHByb21pc2UsIHN0YXRlLnZhbHVlKTtcbiAgfSk7XG59O1xuXG52YXIgYmluZCA9IGZ1bmN0aW9uIChmbiwgcHJvbWlzZSwgc3RhdGUsIHVud3JhcCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgZm4ocHJvbWlzZSwgc3RhdGUsIHZhbHVlLCB1bndyYXApO1xuICB9O1xufTtcblxudmFyIGludGVybmFsUmVqZWN0ID0gZnVuY3Rpb24gKHByb21pc2UsIHN0YXRlLCB2YWx1ZSwgdW53cmFwKSB7XG4gIGlmIChzdGF0ZS5kb25lKSByZXR1cm47XG4gIHN0YXRlLmRvbmUgPSB0cnVlO1xuICBpZiAodW53cmFwKSBzdGF0ZSA9IHVud3JhcDtcbiAgc3RhdGUudmFsdWUgPSB2YWx1ZTtcbiAgc3RhdGUuc3RhdGUgPSBSRUpFQ1RFRDtcbiAgbm90aWZ5KHByb21pc2UsIHN0YXRlLCB0cnVlKTtcbn07XG5cbnZhciBpbnRlcm5hbFJlc29sdmUgPSBmdW5jdGlvbiAocHJvbWlzZSwgc3RhdGUsIHZhbHVlLCB1bndyYXApIHtcbiAgaWYgKHN0YXRlLmRvbmUpIHJldHVybjtcbiAgc3RhdGUuZG9uZSA9IHRydWU7XG4gIGlmICh1bndyYXApIHN0YXRlID0gdW53cmFwO1xuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgdmFyIHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKTtcbiAgICBpZiAodGhlbikge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IGRvbmU6IGZhbHNlIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLFxuICAgICAgICAgICAgYmluZChpbnRlcm5hbFJlc29sdmUsIHByb21pc2UsIHdyYXBwZXIsIHN0YXRlKSxcbiAgICAgICAgICAgIGJpbmQoaW50ZXJuYWxSZWplY3QsIHByb21pc2UsIHdyYXBwZXIsIHN0YXRlKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgaW50ZXJuYWxSZWplY3QocHJvbWlzZSwgd3JhcHBlciwgZXJyb3IsIHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLnZhbHVlID0gdmFsdWU7XG4gICAgICBzdGF0ZS5zdGF0ZSA9IEZVTEZJTExFRDtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBzdGF0ZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpbnRlcm5hbFJlamVjdChwcm9taXNlLCB7IGRvbmU6IGZhbHNlIH0sIGVycm9yLCBzdGF0ZSk7XG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoRk9SQ0VEKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gIFByb21pc2VDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsIFByb21pc2VDb25zdHJ1Y3RvciwgUFJPTUlTRSk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGJpbmQoaW50ZXJuYWxSZXNvbHZlLCB0aGlzLCBzdGF0ZSksIGJpbmQoaW50ZXJuYWxSZWplY3QsIHRoaXMsIHN0YXRlKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGludGVybmFsUmVqZWN0KHRoaXMsIHN0YXRlLCBlcnJvcik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG4gICAgICB0eXBlOiBQUk9NSVNFLFxuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICBub3RpZmllZDogZmFsc2UsXG4gICAgICBwYXJlbnQ6IGZhbHNlLFxuICAgICAgcmVhY3Rpb25zOiBbXSxcbiAgICAgIHJlamVjdGlvbjogZmFsc2UsXG4gICAgICBzdGF0ZTogUEVORElORyxcbiAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICB9KTtcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVkZWZpbmVBbGwoUHJvbWlzZUNvbnN0cnVjdG9yLnByb3RvdHlwZSwge1xuICAgIC8vIGBQcm9taXNlLnByb3RvdHlwZS50aGVuYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wcm9taXNlLnByb3RvdHlwZS50aGVuXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxQcm9taXNlU3RhdGUodGhpcyk7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgUHJvbWlzZUNvbnN0cnVjdG9yKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IElTX05PREUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHN0YXRlLnBhcmVudCA9IHRydWU7XG4gICAgICBzdGF0ZS5yZWFjdGlvbnMucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAoc3RhdGUuc3RhdGUgIT0gUEVORElORykgbm90aWZ5KHRoaXMsIHN0YXRlLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIGBQcm9taXNlLnByb3RvdHlwZS5jYXRjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUuY2F0Y2hcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZShwcm9taXNlKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGJpbmQoaW50ZXJuYWxSZXNvbHZlLCBwcm9taXNlLCBzdGF0ZSk7XG4gICAgdGhpcy5yZWplY3QgPSBiaW5kKGludGVybmFsUmVqZWN0LCBwcm9taXNlLCBzdGF0ZSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09IFByb21pc2VDb25zdHJ1Y3RvciB8fCBDID09PSBQcm9taXNlV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xuXG4gIGlmICghSVNfUFVSRSAmJiB0eXBlb2YgTmF0aXZlUHJvbWlzZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgbmF0aXZlVGhlbiA9IE5hdGl2ZVByb21pc2UucHJvdG90eXBlLnRoZW47XG5cbiAgICAvLyB3cmFwIG5hdGl2ZSBQcm9taXNlI3RoZW4gZm9yIG5hdGl2ZSBhc3luYyBmdW5jdGlvbnNcbiAgICByZWRlZmluZShOYXRpdmVQcm9taXNlLnByb3RvdHlwZSwgJ3RoZW4nLCBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2VDb25zdHJ1Y3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIG5hdGl2ZVRoZW4uY2FsbCh0aGF0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSkudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgfSk7XG5cbiAgICAvLyB3cmFwIGZldGNoIHJlc3VsdFxuICAgIGlmICh0eXBlb2YgJGZldGNoID09ICdmdW5jdGlvbicpICQoeyBnbG9iYWw6IHRydWUsIGVudW1lcmFibGU6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIGZldGNoOiBmdW5jdGlvbiBmZXRjaChpbnB1dCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoUHJvbWlzZUNvbnN0cnVjdG9yLCAkZmV0Y2guYXBwbHkoZ2xvYmFsLCBhcmd1bWVudHMpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4kKHsgZ2xvYmFsOiB0cnVlLCB3cmFwOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIFByb21pc2U6IFByb21pc2VDb25zdHJ1Y3RvclxufSk7XG5cbnNldFRvU3RyaW5nVGFnKFByb21pc2VDb25zdHJ1Y3RvciwgUFJPTUlTRSwgZmFsc2UsIHRydWUpO1xuc2V0U3BlY2llcyhQUk9NSVNFKTtcblxuUHJvbWlzZVdyYXBwZXIgPSBwYXRoW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kKHsgdGFyZ2V0OiBQUk9NSVNFLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGBQcm9taXNlLnJlamVjdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UucmVqZWN0XG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIGNhcGFiaWxpdHkucmVqZWN0LmNhbGwodW5kZWZpbmVkLCByKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuJCh7IHRhcmdldDogUFJPTUlTRSwgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJU19QVVJFIHx8IEZPUkNFRCB9LCB7XG4gIC8vIGBQcm9taXNlLnJlc29sdmVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wcm9taXNlLnJlc29sdmVcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKElTX1BVUkUgJiYgdGhpcyA9PT0gUHJvbWlzZVdyYXBwZXIgPyBQcm9taXNlQ29uc3RydWN0b3IgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG5cbiQoeyB0YXJnZXQ6IFBST01JU0UsIHN0YXQ6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUX0lURVJBVElPTiB9LCB7XG4gIC8vIGBQcm9taXNlLmFsbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UuYWxsXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkcHJvbWlzZVJlc29sdmUgPSBhRnVuY3Rpb24oQy5yZXNvbHZlKTtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgaXRlcmF0ZShpdGVyYWJsZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gY291bnRlcisrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgJHByb21pc2VSZXNvbHZlLmNhbGwoQywgcHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyBgUHJvbWlzZS5yYWNlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcHJvbWlzZS5yYWNlXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRwcm9taXNlUmVzb2x2ZSA9IGFGdW5jdGlvbihDLnJlc29sdmUpO1xuICAgICAgaXRlcmF0ZShpdGVyYWJsZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgJHByb21pc2VSZXNvbHZlLmNhbGwoQywgcHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNyZWF0ZUhUTUwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLWh0bWwnKTtcbnZhciBmb3JjZWRTdHJpbmdIVE1MTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZvcmNlZC1zdHJpbmctaHRtbC1tZXRob2QnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUubGlua2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLmxpbmtcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdIVE1MTWV0aG9kKCdsaW5rJykgfSwge1xuICBsaW5rOiBmdW5jdGlvbiBsaW5rKHVybCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdhJywgJ2hyZWYnLCB1cmwpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAbWF0Y2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdtYXRjaCcsIDEsIGZ1bmN0aW9uIChNQVRDSCwgbmF0aXZlTWF0Y2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLm1hdGNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLm1hdGNoXG4gICAgZnVuY3Rpb24gbWF0Y2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgbWF0Y2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbTUFUQ0hdO1xuICAgICAgcmV0dXJuIG1hdGNoZXIgIT09IHVuZGVmaW5lZCA/IG1hdGNoZXIuY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW01BVENIXShTdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBtYXRjaFxuICAgIGZ1bmN0aW9uIChyZWdleHApIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWF0Y2gsIHJlZ2V4cCwgdGhpcyk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcblxuICAgICAgaWYgKCFyeC5nbG9iYWwpIHJldHVybiByZWdFeHBFeGVjKHJ4LCBTKTtcblxuICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgQSA9IFtdO1xuICAgICAgdmFyIG4gPSAwO1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIHdoaWxlICgocmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUykpICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBBW25dID0gbWF0Y2hTdHI7XG4gICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICAgIG4rKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuID09PSAwID8gbnVsbCA6IEE7XG4gICAgfVxuICBdO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgMSwgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHNlYXJjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtTRUFSQ0hdO1xuICAgICAgcmV0dXJuIHNlYXJjaGVyICE9PSB1bmRlZmluZWQgPyBzZWFyY2hlci5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXShTdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJlZ2V4cCwgdGhpcyk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcblxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1yZWdleHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgY2FsbFJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIGFycmF5UHVzaCA9IFtdLnB1c2g7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgTUFYX1VJTlQzMiA9IDB4RkZGRkZGRkY7XG5cbi8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgneCcsICd5JykgLT4gL3gveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG52YXIgU1VQUE9SVFNfWSA9ICFmYWlscyhmdW5jdGlvbiAoKSB7IHJldHVybiAhUmVnRXhwKE1BWF9VSU5UMzIsICd5Jyk7IH0pO1xuXG4vLyBAQHNwbGl0IGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc3BsaXQnLCAyLCBmdW5jdGlvbiAoU1BMSVQsIG5hdGl2ZVNwbGl0LCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgdmFyIGludGVybmFsU3BsaXQ7XG4gIGlmIChcbiAgICAnYWJiYycuc3BsaXQoLyhiKSovKVsxXSA9PSAnYycgfHxcbiAgICAndGVzdCcuc3BsaXQoLyg/OikvLCAtMSkubGVuZ3RoICE9IDQgfHxcbiAgICAnYWInLnNwbGl0KC8oPzphYikqLykubGVuZ3RoICE9IDIgfHxcbiAgICAnLicuc3BsaXQoLyguPykoLj8pLykubGVuZ3RoICE9IDQgfHxcbiAgICAnLicuc3BsaXQoLygpKCkvKS5sZW5ndGggPiAxIHx8XG4gICAgJycuc3BsaXQoLy4/LykubGVuZ3RoXG4gICkge1xuICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgaWYgKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkKSByZXR1cm4gW3N0cmluZ107XG4gICAgICAvLyBJZiBgc2VwYXJhdG9yYCBpcyBub3QgYSByZWdleCwgdXNlIG5hdGl2ZSBzcGxpdFxuICAgICAgaWYgKCFpc1JlZ0V4cChzZXBhcmF0b3IpKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmVTcGxpdC5jYWxsKHN0cmluZywgc2VwYXJhdG9yLCBsaW0pO1xuICAgICAgfVxuICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcbiAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgdmFyIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGg7XG4gICAgICB3aGlsZSAobWF0Y2ggPSByZWdleHBFeGVjLmNhbGwoc2VwYXJhdG9yQ29weSwgc3RyaW5nKSkge1xuICAgICAgICBsYXN0SW5kZXggPSBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleDtcbiAgICAgICAgaWYgKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpIHtcbiAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICBpZiAobWF0Y2gubGVuZ3RoID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0cmluZy5sZW5ndGgpIGFycmF5UHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgaWYgKG91dHB1dC5sZW5ndGggPj0gbGltKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VwYXJhdG9yQ29weS5sYXN0SW5kZXggPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleCsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nLmxlbmd0aCkge1xuICAgICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSkgb3V0cHV0LnB1c2goJycpO1xuICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgICByZXR1cm4gb3V0cHV0Lmxlbmd0aCA+IGxpbSA/IG91dHB1dC5zbGljZSgwLCBsaW0pIDogb3V0cHV0O1xuICAgIH07XG4gIC8vIENoYWtyYSwgVjhcbiAgfSBlbHNlIGlmICgnMCcuc3BsaXQodW5kZWZpbmVkLCAwKS5sZW5ndGgpIHtcbiAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogbmF0aXZlU3BsaXQuY2FsbCh0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9O1xuICB9IGVsc2UgaW50ZXJuYWxTcGxpdCA9IG5hdGl2ZVNwbGl0O1xuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc3BsaXRcbiAgICBmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc3BsaXR0ZXIgPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICAgIHJldHVybiBzcGxpdHRlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gc3BsaXR0ZXIuY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KVxuICAgICAgICA6IGludGVybmFsU3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzcGxpdFxuICAgIC8vXG4gICAgLy8gTk9URTogVGhpcyBjYW5ub3QgYmUgcHJvcGVybHkgcG9seWZpbGxlZCBpbiBlbmdpbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydFxuICAgIC8vIHRoZSAneScgZmxhZy5cbiAgICBmdW5jdGlvbiAocmVnZXhwLCBsaW1pdCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShpbnRlcm5hbFNwbGl0LCByZWdleHAsIHRoaXMsIGxpbWl0LCBpbnRlcm5hbFNwbGl0ICE9PSBuYXRpdmVTcGxpdCk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHJ4LCBSZWdFeHApO1xuXG4gICAgICB2YXIgdW5pY29kZU1hdGNoaW5nID0gcngudW5pY29kZTtcbiAgICAgIHZhciBmbGFncyA9IChyeC5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyeC5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJ4LnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKFNVUFBPUlRTX1kgPyAneScgOiAnZycpO1xuXG4gICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgUyBzbGljaW5nLCB0b1xuICAgICAgLy8gc2ltdWxhdGUgdGhlICd5JyBmbGFnLlxuICAgICAgdmFyIHNwbGl0dGVyID0gbmV3IEMoU1VQUE9SVFNfWSA/IHJ4IDogJ14oPzonICsgcnguc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIGlmIChsaW0gPT09IDApIHJldHVybiBbXTtcbiAgICAgIGlmIChTLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTKSA9PT0gbnVsbCA/IFtTXSA6IFtdO1xuICAgICAgdmFyIHAgPSAwO1xuICAgICAgdmFyIHEgPSAwO1xuICAgICAgdmFyIEEgPSBbXTtcbiAgICAgIHdoaWxlIChxIDwgUy5sZW5ndGgpIHtcbiAgICAgICAgc3BsaXR0ZXIubGFzdEluZGV4ID0gU1VQUE9SVFNfWSA/IHEgOiAwO1xuICAgICAgICB2YXIgeiA9IGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTVVBQT1JUU19ZID8gUyA6IFMuc2xpY2UocSkpO1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHogPT09IG51bGwgfHxcbiAgICAgICAgICAoZSA9IG1pbih0b0xlbmd0aChzcGxpdHRlci5sYXN0SW5kZXggKyAoU1VQUE9SVFNfWSA/IDAgOiBxKSksIFMubGVuZ3RoKSkgPT09IHBcbiAgICAgICAgKSB7XG4gICAgICAgICAgcSA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCBxLCB1bmljb2RlTWF0Y2hpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEEucHVzaChTLnNsaWNlKHAsIHEpKTtcbiAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gei5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIEEucHVzaCh6W2ldKTtcbiAgICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcSA9IHAgPSBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBBLnB1c2goUy5zbGljZShwKSk7XG4gICAgICByZXR1cm4gQTtcbiAgICB9XG4gIF07XG59LCAhU1VQUE9SVFNfWSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mb3JjZWQtc3RyaW5nLXRyaW0tbWV0aG9kJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCgndHJpbScpIH0sIHtcbiAgdHJpbTogZnVuY3Rpb24gdHJpbSgpIHtcbiAgICByZXR1cm4gJHRyaW0odGhpcyk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2VyLWFnZW50Jyk7XG5cbnZhciBzbGljZSA9IFtdLnNsaWNlO1xudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgKHR5cGVvZiBoYW5kbGVyID09ICdmdW5jdGlvbicgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcikpLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIiwiLyohIFNlbGVjdDIgNC4wLjEwIHwgaHR0cHM6Ly9naXRodWIuY29tL3NlbGVjdDIvc2VsZWN0Mi9ibG9iL21hc3Rlci9MSUNFTlNFLm1kICovXG4hZnVuY3Rpb24obil7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sbik6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz9yZXF1aXJlKFwianF1ZXJ5XCIpOnJlcXVpcmUoXCJqcXVlcnlcIikoZSkpLG4odCksdH06bihqUXVlcnkpfShmdW5jdGlvbihkKXt2YXIgZT1mdW5jdGlvbigpe2lmKGQmJmQuZm4mJmQuZm4uc2VsZWN0MiYmZC5mbi5zZWxlY3QyLmFtZCl2YXIgZT1kLmZuLnNlbGVjdDIuYW1kO3ZhciB0LG4saSxoLG8scyxmLGcsbSx2LHksXyxyLGEsdyxsO2Z1bmN0aW9uIGIoZSx0KXtyZXR1cm4gci5jYWxsKGUsdCl9ZnVuY3Rpb24gYyhlLHQpe3ZhciBuLGkscixvLHMsYSxsLGMsdSxkLHAsaD10JiZ0LnNwbGl0KFwiL1wiKSxmPXkubWFwLGc9ZiYmZltcIipcIl18fHt9O2lmKGUpe2ZvcihzPShlPWUuc3BsaXQoXCIvXCIpKS5sZW5ndGgtMSx5Lm5vZGVJZENvbXBhdCYmdy50ZXN0KGVbc10pJiYoZVtzXT1lW3NdLnJlcGxhY2UodyxcIlwiKSksXCIuXCI9PT1lWzBdLmNoYXJBdCgwKSYmaCYmKGU9aC5zbGljZSgwLGgubGVuZ3RoLTEpLmNvbmNhdChlKSksdT0wO3U8ZS5sZW5ndGg7dSsrKWlmKFwiLlwiPT09KHA9ZVt1XSkpZS5zcGxpY2UodSwxKSx1LT0xO2Vsc2UgaWYoXCIuLlwiPT09cCl7aWYoMD09PXV8fDE9PT11JiZcIi4uXCI9PT1lWzJdfHxcIi4uXCI9PT1lW3UtMV0pY29udGludWU7MDx1JiYoZS5zcGxpY2UodS0xLDIpLHUtPTIpfWU9ZS5qb2luKFwiL1wiKX1pZigoaHx8ZykmJmYpe2Zvcih1PShuPWUuc3BsaXQoXCIvXCIpKS5sZW5ndGg7MDx1O3UtPTEpe2lmKGk9bi5zbGljZSgwLHUpLmpvaW4oXCIvXCIpLGgpZm9yKGQ9aC5sZW5ndGg7MDxkO2QtPTEpaWYocj0ocj1mW2guc2xpY2UoMCxkKS5qb2luKFwiL1wiKV0pJiZyW2ldKXtvPXIsYT11O2JyZWFrfWlmKG8pYnJlYWs7IWwmJmcmJmdbaV0mJihsPWdbaV0sYz11KX0hbyYmbCYmKG89bCxhPWMpLG8mJihuLnNwbGljZSgwLGEsbyksZT1uLmpvaW4oXCIvXCIpKX1yZXR1cm4gZX1mdW5jdGlvbiBBKHQsbil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9YS5jYWxsKGFyZ3VtZW50cywwKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZVswXSYmMT09PWUubGVuZ3RoJiZlLnB1c2gobnVsbCkscy5hcHBseShoLGUuY29uY2F0KFt0LG5dKSl9fWZ1bmN0aW9uIHgodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe21bdF09ZX19ZnVuY3Rpb24gUyhlKXtpZihiKHYsZSkpe3ZhciB0PXZbZV07ZGVsZXRlIHZbZV0sX1tlXT0hMCxvLmFwcGx5KGgsdCl9aWYoIWIobSxlKSYmIWIoXyxlKSl0aHJvdyBuZXcgRXJyb3IoXCJObyBcIitlKTtyZXR1cm4gbVtlXX1mdW5jdGlvbiB1KGUpe3ZhciB0LG49ZT9lLmluZGV4T2YoXCIhXCIpOi0xO3JldHVybi0xPG4mJih0PWUuc3Vic3RyaW5nKDAsbiksZT1lLnN1YnN0cmluZyhuKzEsZS5sZW5ndGgpKSxbdCxlXX1mdW5jdGlvbiBEKGUpe3JldHVybiBlP3UoZSk6W119cmV0dXJuIGUmJmUucmVxdWlyZWpzfHwoZT9uPWU6ZT17fSxtPXt9LHY9e30seT17fSxfPXt9LHI9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxhPVtdLnNsaWNlLHc9L1xcLmpzJC8sZj1mdW5jdGlvbihlLHQpe3ZhciBuLGk9dShlKSxyPWlbMF0sbz10WzFdO3JldHVybiBlPWlbMV0sciYmKG49UyhyPWMocixvKSkpLHI/ZT1uJiZuLm5vcm1hbGl6ZT9uLm5vcm1hbGl6ZShlLGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gYyhlLHQpfX0obykpOmMoZSxvKToocj0oaT11KGU9YyhlLG8pKSlbMF0sZT1pWzFdLHImJihuPVMocikpKSx7ZjpyP3IrXCIhXCIrZTplLG46ZSxwcjpyLHA6bn19LGc9e3JlcXVpcmU6ZnVuY3Rpb24oZSl7cmV0dXJuIEEoZSl9LGV4cG9ydHM6ZnVuY3Rpb24oZSl7dmFyIHQ9bVtlXTtyZXR1cm4gdm9pZCAwIT09dD90Om1bZV09e319LG1vZHVsZTpmdW5jdGlvbihlKXtyZXR1cm57aWQ6ZSx1cmk6XCJcIixleHBvcnRzOm1bZV0sY29uZmlnOmZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB5JiZ5LmNvbmZpZyYmeS5jb25maWdbZV18fHt9fX0oZSl9fX0sbz1mdW5jdGlvbihlLHQsbixpKXt2YXIgcixvLHMsYSxsLGMsdSxkPVtdLHA9dHlwZW9mIG47aWYoYz1EKGk9aXx8ZSksXCJ1bmRlZmluZWRcIj09cHx8XCJmdW5jdGlvblwiPT1wKXtmb3IodD0hdC5sZW5ndGgmJm4ubGVuZ3RoP1tcInJlcXVpcmVcIixcImV4cG9ydHNcIixcIm1vZHVsZVwiXTp0LGw9MDtsPHQubGVuZ3RoO2wrPTEpaWYoXCJyZXF1aXJlXCI9PT0obz0oYT1mKHRbbF0sYykpLmYpKWRbbF09Zy5yZXF1aXJlKGUpO2Vsc2UgaWYoXCJleHBvcnRzXCI9PT1vKWRbbF09Zy5leHBvcnRzKGUpLHU9ITA7ZWxzZSBpZihcIm1vZHVsZVwiPT09bylyPWRbbF09Zy5tb2R1bGUoZSk7ZWxzZSBpZihiKG0sbyl8fGIodixvKXx8YihfLG8pKWRbbF09UyhvKTtlbHNle2lmKCFhLnApdGhyb3cgbmV3IEVycm9yKGUrXCIgbWlzc2luZyBcIitvKTthLnAubG9hZChhLm4sQShpLCEwKSx4KG8pLHt9KSxkW2xdPW1bb119cz1uP24uYXBwbHkobVtlXSxkKTp2b2lkIDAsZSYmKHImJnIuZXhwb3J0cyE9PWgmJnIuZXhwb3J0cyE9PW1bZV0/bVtlXT1yLmV4cG9ydHM6cz09PWgmJnV8fChtW2VdPXMpKX1lbHNlIGUmJihtW2VdPW4pfSx0PW49cz1mdW5jdGlvbihlLHQsbixpLHIpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBnW2VdP2dbZV0odCk6UyhmKGUsRCh0KSkuZik7aWYoIWUuc3BsaWNlKXtpZigoeT1lKS5kZXBzJiZzKHkuZGVwcyx5LmNhbGxiYWNrKSwhdClyZXR1cm47dC5zcGxpY2U/KGU9dCx0PW4sbj1udWxsKTplPWh9cmV0dXJuIHQ9dHx8ZnVuY3Rpb24oKXt9LFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPWksaT1yKSxpP28oaCxlLHQsbik6c2V0VGltZW91dChmdW5jdGlvbigpe28oaCxlLHQsbil9LDQpLHN9LHMuY29uZmlnPWZ1bmN0aW9uKGUpe3JldHVybiBzKGUpfSx0Ll9kZWZpbmVkPW0sKGk9ZnVuY3Rpb24oZSx0LG4pe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXRocm93IG5ldyBFcnJvcihcIlNlZSBhbG1vbmQgUkVBRE1FOiBpbmNvcnJlY3QgbW9kdWxlIGJ1aWxkLCBubyBtb2R1bGUgbmFtZVwiKTt0LnNwbGljZXx8KG49dCx0PVtdKSxiKG0sZSl8fGIodixlKXx8KHZbZV09W2UsdCxuXSl9KS5hbWQ9e2pRdWVyeTohMH0sZS5yZXF1aXJlanM9dCxlLnJlcXVpcmU9bixlLmRlZmluZT1pKSxlLmRlZmluZShcImFsbW9uZFwiLGZ1bmN0aW9uKCl7fSksZS5kZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3ZhciBlPWR8fCQ7cmV0dXJuIG51bGw9PWUmJmNvbnNvbGUmJmNvbnNvbGUuZXJyb3ImJmNvbnNvbGUuZXJyb3IoXCJTZWxlY3QyOiBBbiBpbnN0YW5jZSBvZiBqUXVlcnkgb3IgYSBqUXVlcnktY29tcGF0aWJsZSBsaWJyYXJ5IHdhcyBub3QgZm91bmQuIE1ha2Ugc3VyZSB0aGF0IHlvdSBhcmUgaW5jbHVkaW5nIGpRdWVyeSBiZWZvcmUgU2VsZWN0MiBvbiB5b3VyIHdlYiBwYWdlLlwiKSxlfSksZS5kZWZpbmUoXCJzZWxlY3QyL3V0aWxzXCIsW1wianF1ZXJ5XCJdLGZ1bmN0aW9uKG8pe3ZhciByPXt9O2Z1bmN0aW9uIHUoZSl7dmFyIHQ9ZS5wcm90b3R5cGUsbj1bXTtmb3IodmFyIGkgaW4gdCl7XCJmdW5jdGlvblwiPT10eXBlb2YgdFtpXSYmXCJjb25zdHJ1Y3RvclwiIT09aSYmbi5wdXNoKGkpfXJldHVybiBufXIuRXh0ZW5kPWZ1bmN0aW9uKGUsdCl7dmFyIG49e30uaGFzT3duUHJvcGVydHk7ZnVuY3Rpb24gaSgpe3RoaXMuY29uc3RydWN0b3I9ZX1mb3IodmFyIHIgaW4gdCluLmNhbGwodCxyKSYmKGVbcl09dFtyXSk7cmV0dXJuIGkucHJvdG90eXBlPXQucHJvdG90eXBlLGUucHJvdG90eXBlPW5ldyBpLGUuX19zdXBlcl9fPXQucHJvdG90eXBlLGV9LHIuRGVjb3JhdGU9ZnVuY3Rpb24oaSxyKXt2YXIgZT11KHIpLHQ9dShpKTtmdW5jdGlvbiBvKCl7dmFyIGU9QXJyYXkucHJvdG90eXBlLnVuc2hpZnQsdD1yLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5sZW5ndGgsbj1pLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjswPHQmJihlLmNhbGwoYXJndW1lbnRzLGkucHJvdG90eXBlLmNvbnN0cnVjdG9yKSxuPXIucHJvdG90eXBlLmNvbnN0cnVjdG9yKSxuLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1yLmRpc3BsYXlOYW1lPWkuZGlzcGxheU5hbWUsby5wcm90b3R5cGU9bmV3IGZ1bmN0aW9uKCl7dGhpcy5jb25zdHJ1Y3Rvcj1vfTtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHM9dFtuXTtvLnByb3RvdHlwZVtzXT1pLnByb3RvdHlwZVtzXX1mdW5jdGlvbiBhKGUpe3ZhciB0PWZ1bmN0aW9uKCl7fTtlIGluIG8ucHJvdG90eXBlJiYodD1vLnByb3RvdHlwZVtlXSk7dmFyIG49ci5wcm90b3R5cGVbZV07cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmNhbGwoYXJndW1lbnRzLHQpLG4uYXBwbHkodGhpcyxhcmd1bWVudHMpfX1mb3IodmFyIGw9MDtsPGUubGVuZ3RoO2wrKyl7dmFyIGM9ZVtsXTtvLnByb3RvdHlwZVtjXT1hKGMpfXJldHVybiBvfTtmdW5jdGlvbiBlKCl7dGhpcy5saXN0ZW5lcnM9e319ZS5wcm90b3R5cGUub249ZnVuY3Rpb24oZSx0KXt0aGlzLmxpc3RlbmVycz10aGlzLmxpc3RlbmVyc3x8e30sZSBpbiB0aGlzLmxpc3RlbmVycz90aGlzLmxpc3RlbmVyc1tlXS5wdXNoKHQpOnRoaXMubGlzdGVuZXJzW2VdPVt0XX0sZS5wcm90b3R5cGUudHJpZ2dlcj1mdW5jdGlvbihlKXt2YXIgdD1BcnJheS5wcm90b3R5cGUuc2xpY2Usbj10LmNhbGwoYXJndW1lbnRzLDEpO3RoaXMubGlzdGVuZXJzPXRoaXMubGlzdGVuZXJzfHx7fSxudWxsPT1uJiYobj1bXSksMD09PW4ubGVuZ3RoJiZuLnB1c2goe30pLChuWzBdLl90eXBlPWUpaW4gdGhpcy5saXN0ZW5lcnMmJnRoaXMuaW52b2tlKHRoaXMubGlzdGVuZXJzW2VdLHQuY2FsbChhcmd1bWVudHMsMSkpLFwiKlwiaW4gdGhpcy5saXN0ZW5lcnMmJnRoaXMuaW52b2tlKHRoaXMubGlzdGVuZXJzW1wiKlwiXSxhcmd1bWVudHMpfSxlLnByb3RvdHlwZS5pbnZva2U9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MCxpPWUubGVuZ3RoO248aTtuKyspZVtuXS5hcHBseSh0aGlzLHQpfSxyLk9ic2VydmFibGU9ZSxyLmdlbmVyYXRlQ2hhcnM9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVwiXCIsbj0wO248ZTtuKyspe3QrPU1hdGguZmxvb3IoMzYqTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoMzYpfXJldHVybiB0fSxyLmJpbmQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZnVuY3Rpb24oKXtlLmFwcGx5KHQsYXJndW1lbnRzKX19LHIuX2NvbnZlcnREYXRhPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCBpbiBlKXt2YXIgbj10LnNwbGl0KFwiLVwiKSxpPWU7aWYoMSE9PW4ubGVuZ3RoKXtmb3IodmFyIHI9MDtyPG4ubGVuZ3RoO3IrKyl7dmFyIG89bltyXTsobz1vLnN1YnN0cmluZygwLDEpLnRvTG93ZXJDYXNlKCkrby5zdWJzdHJpbmcoMSkpaW4gaXx8KGlbb109e30pLHI9PW4ubGVuZ3RoLTEmJihpW29dPWVbdF0pLGk9aVtvXX1kZWxldGUgZVt0XX19cmV0dXJuIGV9LHIuaGFzU2Nyb2xsPWZ1bmN0aW9uKGUsdCl7dmFyIG49byh0KSxpPXQuc3R5bGUub3ZlcmZsb3dYLHI9dC5zdHlsZS5vdmVyZmxvd1k7cmV0dXJuKGkhPT1yfHxcImhpZGRlblwiIT09ciYmXCJ2aXNpYmxlXCIhPT1yKSYmKFwic2Nyb2xsXCI9PT1pfHxcInNjcm9sbFwiPT09cnx8KG4uaW5uZXJIZWlnaHQoKTx0LnNjcm9sbEhlaWdodHx8bi5pbm5lcldpZHRoKCk8dC5zY3JvbGxXaWR0aCkpfSxyLmVzY2FwZU1hcmt1cD1mdW5jdGlvbihlKXt2YXIgdD17XCJcXFxcXCI6XCImIzkyO1wiLFwiJlwiOlwiJmFtcDtcIixcIjxcIjpcIiZsdDtcIixcIj5cIjpcIiZndDtcIiwnXCInOlwiJnF1b3Q7XCIsXCInXCI6XCImIzM5O1wiLFwiL1wiOlwiJiM0NztcIn07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGU/ZTpTdHJpbmcoZSkucmVwbGFjZSgvWyY8PlwiJ1xcL1xcXFxdL2csZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19KX0sci5hcHBlbmRNYW55PWZ1bmN0aW9uKGUsdCl7aWYoXCIxLjdcIj09PW8uZm4uanF1ZXJ5LnN1YnN0cigwLDMpKXt2YXIgbj1vKCk7by5tYXAodCxmdW5jdGlvbihlKXtuPW4uYWRkKGUpfSksdD1ufWUuYXBwZW5kKHQpfSxyLl9fY2FjaGU9e307dmFyIG49MDtyZXR1cm4gci5HZXRVbmlxdWVFbGVtZW50SWQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNlbGVjdDItaWRcIik7cmV0dXJuIG51bGw9PXQmJihlLmlkPyh0PWUuaWQsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNlbGVjdDItaWRcIix0KSk6KGUuc2V0QXR0cmlidXRlKFwiZGF0YS1zZWxlY3QyLWlkXCIsKytuKSx0PW4udG9TdHJpbmcoKSkpLHR9LHIuU3RvcmVEYXRhPWZ1bmN0aW9uKGUsdCxuKXt2YXIgaT1yLkdldFVuaXF1ZUVsZW1lbnRJZChlKTtyLl9fY2FjaGVbaV18fChyLl9fY2FjaGVbaV09e30pLHIuX19jYWNoZVtpXVt0XT1ufSxyLkdldERhdGE9ZnVuY3Rpb24oZSx0KXt2YXIgbj1yLkdldFVuaXF1ZUVsZW1lbnRJZChlKTtyZXR1cm4gdD9yLl9fY2FjaGVbbl0mJm51bGwhPXIuX19jYWNoZVtuXVt0XT9yLl9fY2FjaGVbbl1bdF06byhlKS5kYXRhKHQpOnIuX19jYWNoZVtuXX0sci5SZW1vdmVEYXRhPWZ1bmN0aW9uKGUpe3ZhciB0PXIuR2V0VW5pcXVlRWxlbWVudElkKGUpO251bGwhPXIuX19jYWNoZVt0XSYmZGVsZXRlIHIuX19jYWNoZVt0XSxlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtc2VsZWN0Mi1pZFwiKX0scn0pLGUuZGVmaW5lKFwic2VsZWN0Mi9yZXN1bHRzXCIsW1wianF1ZXJ5XCIsXCIuL3V0aWxzXCJdLGZ1bmN0aW9uKGgsZil7ZnVuY3Rpb24gaShlLHQsbil7dGhpcy4kZWxlbWVudD1lLHRoaXMuZGF0YT1uLHRoaXMub3B0aW9ucz10LGkuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyl9cmV0dXJuIGYuRXh0ZW5kKGksZi5PYnNlcnZhYmxlKSxpLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oKXt2YXIgZT1oKCc8dWwgY2xhc3M9XCJzZWxlY3QyLXJlc3VsdHNfX29wdGlvbnNcIiByb2xlPVwibGlzdGJveFwiPjwvdWw+Jyk7cmV0dXJuIHRoaXMub3B0aW9ucy5nZXQoXCJtdWx0aXBsZVwiKSYmZS5hdHRyKFwiYXJpYS1tdWx0aXNlbGVjdGFibGVcIixcInRydWVcIiksdGhpcy4kcmVzdWx0cz1lfSxpLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuJHJlc3VsdHMuZW1wdHkoKX0saS5wcm90b3R5cGUuZGlzcGxheU1lc3NhZ2U9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5vcHRpb25zLmdldChcImVzY2FwZU1hcmt1cFwiKTt0aGlzLmNsZWFyKCksdGhpcy5oaWRlTG9hZGluZygpO3ZhciBuPWgoJzxsaSByb2xlPVwiYWxlcnRcIiBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIiBjbGFzcz1cInNlbGVjdDItcmVzdWx0c19fb3B0aW9uXCI+PC9saT4nKSxpPXRoaXMub3B0aW9ucy5nZXQoXCJ0cmFuc2xhdGlvbnNcIikuZ2V0KGUubWVzc2FnZSk7bi5hcHBlbmQodChpKGUuYXJncykpKSxuWzBdLmNsYXNzTmFtZSs9XCIgc2VsZWN0Mi1yZXN1bHRzX19tZXNzYWdlXCIsdGhpcy4kcmVzdWx0cy5hcHBlbmQobil9LGkucHJvdG90eXBlLmhpZGVNZXNzYWdlcz1mdW5jdGlvbigpe3RoaXMuJHJlc3VsdHMuZmluZChcIi5zZWxlY3QyLXJlc3VsdHNfX21lc3NhZ2VcIikucmVtb3ZlKCl9LGkucHJvdG90eXBlLmFwcGVuZD1mdW5jdGlvbihlKXt0aGlzLmhpZGVMb2FkaW5nKCk7dmFyIHQ9W107aWYobnVsbCE9ZS5yZXN1bHRzJiYwIT09ZS5yZXN1bHRzLmxlbmd0aCl7ZS5yZXN1bHRzPXRoaXMuc29ydChlLnJlc3VsdHMpO2Zvcih2YXIgbj0wO248ZS5yZXN1bHRzLmxlbmd0aDtuKyspe3ZhciBpPWUucmVzdWx0c1tuXSxyPXRoaXMub3B0aW9uKGkpO3QucHVzaChyKX10aGlzLiRyZXN1bHRzLmFwcGVuZCh0KX1lbHNlIDA9PT10aGlzLiRyZXN1bHRzLmNoaWxkcmVuKCkubGVuZ3RoJiZ0aGlzLnRyaWdnZXIoXCJyZXN1bHRzOm1lc3NhZ2VcIix7bWVzc2FnZTpcIm5vUmVzdWx0c1wifSl9LGkucHJvdG90eXBlLnBvc2l0aW9uPWZ1bmN0aW9uKGUsdCl7dC5maW5kKFwiLnNlbGVjdDItcmVzdWx0c1wiKS5hcHBlbmQoZSl9LGkucHJvdG90eXBlLnNvcnQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMub3B0aW9ucy5nZXQoXCJzb3J0ZXJcIikoZSl9LGkucHJvdG90eXBlLmhpZ2hsaWdodEZpcnN0SXRlbT1mdW5jdGlvbigpe3ZhciBlPXRoaXMuJHJlc3VsdHMuZmluZChcIi5zZWxlY3QyLXJlc3VsdHNfX29wdGlvblthcmlhLXNlbGVjdGVkXVwiKSx0PWUuZmlsdGVyKFwiW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV1cIik7MDx0Lmxlbmd0aD90LmZpcnN0KCkudHJpZ2dlcihcIm1vdXNlZW50ZXJcIik6ZS5maXJzdCgpLnRyaWdnZXIoXCJtb3VzZWVudGVyXCIpLHRoaXMuZW5zdXJlSGlnaGxpZ2h0VmlzaWJsZSgpfSxpLnByb3RvdHlwZS5zZXRDbGFzc2VzPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLmRhdGEuY3VycmVudChmdW5jdGlvbihlKXt2YXIgaT1oLm1hcChlLGZ1bmN0aW9uKGUpe3JldHVybiBlLmlkLnRvU3RyaW5nKCl9KTt0LiRyZXN1bHRzLmZpbmQoXCIuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25bYXJpYS1zZWxlY3RlZF1cIikuZWFjaChmdW5jdGlvbigpe3ZhciBlPWgodGhpcyksdD1mLkdldERhdGEodGhpcyxcImRhdGFcIiksbj1cIlwiK3QuaWQ7bnVsbCE9dC5lbGVtZW50JiZ0LmVsZW1lbnQuc2VsZWN0ZWR8fG51bGw9PXQuZWxlbWVudCYmLTE8aC5pbkFycmF5KG4saSk/ZS5hdHRyKFwiYXJpYS1zZWxlY3RlZFwiLFwidHJ1ZVwiKTplLmF0dHIoXCJhcmlhLXNlbGVjdGVkXCIsXCJmYWxzZVwiKX0pfSl9LGkucHJvdG90eXBlLnNob3dMb2FkaW5nPWZ1bmN0aW9uKGUpe3RoaXMuaGlkZUxvYWRpbmcoKTt2YXIgdD17ZGlzYWJsZWQ6ITAsbG9hZGluZzohMCx0ZXh0OnRoaXMub3B0aW9ucy5nZXQoXCJ0cmFuc2xhdGlvbnNcIikuZ2V0KFwic2VhcmNoaW5nXCIpKGUpfSxuPXRoaXMub3B0aW9uKHQpO24uY2xhc3NOYW1lKz1cIiBsb2FkaW5nLXJlc3VsdHNcIix0aGlzLiRyZXN1bHRzLnByZXBlbmQobil9LGkucHJvdG90eXBlLmhpZGVMb2FkaW5nPWZ1bmN0aW9uKCl7dGhpcy4kcmVzdWx0cy5maW5kKFwiLmxvYWRpbmctcmVzdWx0c1wiKS5yZW1vdmUoKX0saS5wcm90b3R5cGUub3B0aW9uPWZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTt0LmNsYXNzTmFtZT1cInNlbGVjdDItcmVzdWx0c19fb3B0aW9uXCI7dmFyIG49e3JvbGU6XCJvcHRpb25cIixcImFyaWEtc2VsZWN0ZWRcIjpcImZhbHNlXCJ9LGk9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXN8fHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3Rvcnx8d2luZG93LkVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3Rvcjtmb3IodmFyIHIgaW4obnVsbCE9ZS5lbGVtZW50JiZpLmNhbGwoZS5lbGVtZW50LFwiOmRpc2FibGVkXCIpfHxudWxsPT1lLmVsZW1lbnQmJmUuZGlzYWJsZWQpJiYoZGVsZXRlIG5bXCJhcmlhLXNlbGVjdGVkXCJdLG5bXCJhcmlhLWRpc2FibGVkXCJdPVwidHJ1ZVwiKSxudWxsPT1lLmlkJiZkZWxldGUgbltcImFyaWEtc2VsZWN0ZWRcIl0sbnVsbCE9ZS5fcmVzdWx0SWQmJih0LmlkPWUuX3Jlc3VsdElkKSxlLnRpdGxlJiYodC50aXRsZT1lLnRpdGxlKSxlLmNoaWxkcmVuJiYobi5yb2xlPVwiZ3JvdXBcIixuW1wiYXJpYS1sYWJlbFwiXT1lLnRleHQsZGVsZXRlIG5bXCJhcmlhLXNlbGVjdGVkXCJdKSxuKXt2YXIgbz1uW3JdO3Quc2V0QXR0cmlidXRlKHIsbyl9aWYoZS5jaGlsZHJlbil7dmFyIHM9aCh0KSxhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIik7YS5jbGFzc05hbWU9XCJzZWxlY3QyLXJlc3VsdHNfX2dyb3VwXCI7aChhKTt0aGlzLnRlbXBsYXRlKGUsYSk7Zm9yKHZhciBsPVtdLGM9MDtjPGUuY2hpbGRyZW4ubGVuZ3RoO2MrKyl7dmFyIHU9ZS5jaGlsZHJlbltjXSxkPXRoaXMub3B0aW9uKHUpO2wucHVzaChkKX12YXIgcD1oKFwiPHVsPjwvdWw+XCIse2NsYXNzOlwic2VsZWN0Mi1yZXN1bHRzX19vcHRpb25zIHNlbGVjdDItcmVzdWx0c19fb3B0aW9ucy0tbmVzdGVkXCJ9KTtwLmFwcGVuZChsKSxzLmFwcGVuZChhKSxzLmFwcGVuZChwKX1lbHNlIHRoaXMudGVtcGxhdGUoZSx0KTtyZXR1cm4gZi5TdG9yZURhdGEodCxcImRhdGFcIixlKSx0fSxpLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKHQsZSl7dmFyIGw9dGhpcyxuPXQuaWQrXCItcmVzdWx0c1wiO3RoaXMuJHJlc3VsdHMuYXR0cihcImlkXCIsbiksdC5vbihcInJlc3VsdHM6YWxsXCIsZnVuY3Rpb24oZSl7bC5jbGVhcigpLGwuYXBwZW5kKGUuZGF0YSksdC5pc09wZW4oKSYmKGwuc2V0Q2xhc3NlcygpLGwuaGlnaGxpZ2h0Rmlyc3RJdGVtKCkpfSksdC5vbihcInJlc3VsdHM6YXBwZW5kXCIsZnVuY3Rpb24oZSl7bC5hcHBlbmQoZS5kYXRhKSx0LmlzT3BlbigpJiZsLnNldENsYXNzZXMoKX0pLHQub24oXCJxdWVyeVwiLGZ1bmN0aW9uKGUpe2wuaGlkZU1lc3NhZ2VzKCksbC5zaG93TG9hZGluZyhlKX0pLHQub24oXCJzZWxlY3RcIixmdW5jdGlvbigpe3QuaXNPcGVuKCkmJihsLnNldENsYXNzZXMoKSxsLm9wdGlvbnMuZ2V0KFwic2Nyb2xsQWZ0ZXJTZWxlY3RcIikmJmwuaGlnaGxpZ2h0Rmlyc3RJdGVtKCkpfSksdC5vbihcInVuc2VsZWN0XCIsZnVuY3Rpb24oKXt0LmlzT3BlbigpJiYobC5zZXRDbGFzc2VzKCksbC5vcHRpb25zLmdldChcInNjcm9sbEFmdGVyU2VsZWN0XCIpJiZsLmhpZ2hsaWdodEZpcnN0SXRlbSgpKX0pLHQub24oXCJvcGVuXCIsZnVuY3Rpb24oKXtsLiRyZXN1bHRzLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsXCJ0cnVlXCIpLGwuJHJlc3VsdHMuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKSxsLnNldENsYXNzZXMoKSxsLmVuc3VyZUhpZ2hsaWdodFZpc2libGUoKX0pLHQub24oXCJjbG9zZVwiLGZ1bmN0aW9uKCl7bC4kcmVzdWx0cy5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIiksbC4kcmVzdWx0cy5hdHRyKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIiksbC4kcmVzdWx0cy5yZW1vdmVBdHRyKFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCIpfSksdC5vbihcInJlc3VsdHM6dG9nZ2xlXCIsZnVuY3Rpb24oKXt2YXIgZT1sLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpOzAhPT1lLmxlbmd0aCYmZS50cmlnZ2VyKFwibW91c2V1cFwiKX0pLHQub24oXCJyZXN1bHRzOnNlbGVjdFwiLGZ1bmN0aW9uKCl7dmFyIGU9bC5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKTtpZigwIT09ZS5sZW5ndGgpe3ZhciB0PWYuR2V0RGF0YShlWzBdLFwiZGF0YVwiKTtcInRydWVcIj09ZS5hdHRyKFwiYXJpYS1zZWxlY3RlZFwiKT9sLnRyaWdnZXIoXCJjbG9zZVwiLHt9KTpsLnRyaWdnZXIoXCJzZWxlY3RcIix7ZGF0YTp0fSl9fSksdC5vbihcInJlc3VsdHM6cHJldmlvdXNcIixmdW5jdGlvbigpe3ZhciBlPWwuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKCksdD1sLiRyZXN1bHRzLmZpbmQoXCJbYXJpYS1zZWxlY3RlZF1cIiksbj10LmluZGV4KGUpO2lmKCEobjw9MCkpe3ZhciBpPW4tMTswPT09ZS5sZW5ndGgmJihpPTApO3ZhciByPXQuZXEoaSk7ci50cmlnZ2VyKFwibW91c2VlbnRlclwiKTt2YXIgbz1sLiRyZXN1bHRzLm9mZnNldCgpLnRvcCxzPXIub2Zmc2V0KCkudG9wLGE9bC4kcmVzdWx0cy5zY3JvbGxUb3AoKSsocy1vKTswPT09aT9sLiRyZXN1bHRzLnNjcm9sbFRvcCgwKTpzLW88MCYmbC4kcmVzdWx0cy5zY3JvbGxUb3AoYSl9fSksdC5vbihcInJlc3VsdHM6bmV4dFwiLGZ1bmN0aW9uKCl7dmFyIGU9bC5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKSx0PWwuJHJlc3VsdHMuZmluZChcIlthcmlhLXNlbGVjdGVkXVwiKSxuPXQuaW5kZXgoZSkrMTtpZighKG4+PXQubGVuZ3RoKSl7dmFyIGk9dC5lcShuKTtpLnRyaWdnZXIoXCJtb3VzZWVudGVyXCIpO3ZhciByPWwuJHJlc3VsdHMub2Zmc2V0KCkudG9wK2wuJHJlc3VsdHMub3V0ZXJIZWlnaHQoITEpLG89aS5vZmZzZXQoKS50b3AraS5vdXRlckhlaWdodCghMSkscz1sLiRyZXN1bHRzLnNjcm9sbFRvcCgpK28tcjswPT09bj9sLiRyZXN1bHRzLnNjcm9sbFRvcCgwKTpyPG8mJmwuJHJlc3VsdHMuc2Nyb2xsVG9wKHMpfX0pLHQub24oXCJyZXN1bHRzOmZvY3VzXCIsZnVuY3Rpb24oZSl7ZS5lbGVtZW50LmFkZENsYXNzKFwic2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLWhpZ2hsaWdodGVkXCIpfSksdC5vbihcInJlc3VsdHM6bWVzc2FnZVwiLGZ1bmN0aW9uKGUpe2wuZGlzcGxheU1lc3NhZ2UoZSl9KSxoLmZuLm1vdXNld2hlZWwmJnRoaXMuJHJlc3VsdHMub24oXCJtb3VzZXdoZWVsXCIsZnVuY3Rpb24oZSl7dmFyIHQ9bC4kcmVzdWx0cy5zY3JvbGxUb3AoKSxuPWwuJHJlc3VsdHMuZ2V0KDApLnNjcm9sbEhlaWdodC10K2UuZGVsdGFZLGk9MDxlLmRlbHRhWSYmdC1lLmRlbHRhWTw9MCxyPWUuZGVsdGFZPDAmJm48PWwuJHJlc3VsdHMuaGVpZ2h0KCk7aT8obC4kcmVzdWx0cy5zY3JvbGxUb3AoMCksZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCkpOnImJihsLiRyZXN1bHRzLnNjcm9sbFRvcChsLiRyZXN1bHRzLmdldCgwKS5zY3JvbGxIZWlnaHQtbC4kcmVzdWx0cy5oZWlnaHQoKSksZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCkpfSksdGhpcy4kcmVzdWx0cy5vbihcIm1vdXNldXBcIixcIi5zZWxlY3QyLXJlc3VsdHNfX29wdGlvblthcmlhLXNlbGVjdGVkXVwiLGZ1bmN0aW9uKGUpe3ZhciB0PWgodGhpcyksbj1mLkdldERhdGEodGhpcyxcImRhdGFcIik7XCJ0cnVlXCIhPT10LmF0dHIoXCJhcmlhLXNlbGVjdGVkXCIpP2wudHJpZ2dlcihcInNlbGVjdFwiLHtvcmlnaW5hbEV2ZW50OmUsZGF0YTpufSk6bC5vcHRpb25zLmdldChcIm11bHRpcGxlXCIpP2wudHJpZ2dlcihcInVuc2VsZWN0XCIse29yaWdpbmFsRXZlbnQ6ZSxkYXRhOm59KTpsLnRyaWdnZXIoXCJjbG9zZVwiLHt9KX0pLHRoaXMuJHJlc3VsdHMub24oXCJtb3VzZWVudGVyXCIsXCIuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25bYXJpYS1zZWxlY3RlZF1cIixmdW5jdGlvbihlKXt2YXIgdD1mLkdldERhdGEodGhpcyxcImRhdGFcIik7bC5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKS5yZW1vdmVDbGFzcyhcInNlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1oaWdobGlnaHRlZFwiKSxsLnRyaWdnZXIoXCJyZXN1bHRzOmZvY3VzXCIse2RhdGE6dCxlbGVtZW50OmgodGhpcyl9KX0pfSxpLnByb3RvdHlwZS5nZXRIaWdobGlnaHRlZFJlc3VsdHM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kcmVzdWx0cy5maW5kKFwiLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1oaWdobGlnaHRlZFwiKX0saS5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMuJHJlc3VsdHMucmVtb3ZlKCl9LGkucHJvdG90eXBlLmVuc3VyZUhpZ2hsaWdodFZpc2libGU9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO2lmKDAhPT1lLmxlbmd0aCl7dmFyIHQ9dGhpcy4kcmVzdWx0cy5maW5kKFwiW2FyaWEtc2VsZWN0ZWRdXCIpLmluZGV4KGUpLG49dGhpcy4kcmVzdWx0cy5vZmZzZXQoKS50b3AsaT1lLm9mZnNldCgpLnRvcCxyPXRoaXMuJHJlc3VsdHMuc2Nyb2xsVG9wKCkrKGktbiksbz1pLW47ci09MiplLm91dGVySGVpZ2h0KCExKSx0PD0yP3RoaXMuJHJlc3VsdHMuc2Nyb2xsVG9wKDApOihvPnRoaXMuJHJlc3VsdHMub3V0ZXJIZWlnaHQoKXx8bzwwKSYmdGhpcy4kcmVzdWx0cy5zY3JvbGxUb3Aocil9fSxpLnByb3RvdHlwZS50ZW1wbGF0ZT1mdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMub3B0aW9ucy5nZXQoXCJ0ZW1wbGF0ZVJlc3VsdFwiKSxpPXRoaXMub3B0aW9ucy5nZXQoXCJlc2NhcGVNYXJrdXBcIikscj1uKGUsdCk7bnVsbD09cj90LnN0eWxlLmRpc3BsYXk9XCJub25lXCI6XCJzdHJpbmdcIj09dHlwZW9mIHI/dC5pbm5lckhUTUw9aShyKTpoKHQpLmFwcGVuZChyKX0saX0pLGUuZGVmaW5lKFwic2VsZWN0Mi9rZXlzXCIsW10sZnVuY3Rpb24oKXtyZXR1cm57QkFDS1NQQUNFOjgsVEFCOjksRU5URVI6MTMsU0hJRlQ6MTYsQ1RSTDoxNyxBTFQ6MTgsRVNDOjI3LFNQQUNFOjMyLFBBR0VfVVA6MzMsUEFHRV9ET1dOOjM0LEVORDozNSxIT01FOjM2LExFRlQ6MzcsVVA6MzgsUklHSFQ6MzksRE9XTjo0MCxERUxFVEU6NDZ9fSksZS5kZWZpbmUoXCJzZWxlY3QyL3NlbGVjdGlvbi9iYXNlXCIsW1wianF1ZXJ5XCIsXCIuLi91dGlsc1wiLFwiLi4va2V5c1wiXSxmdW5jdGlvbihuLGkscil7ZnVuY3Rpb24gbyhlLHQpe3RoaXMuJGVsZW1lbnQ9ZSx0aGlzLm9wdGlvbnM9dCxvLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpfXJldHVybiBpLkV4dGVuZChvLGkuT2JzZXJ2YWJsZSksby5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGU9bignPHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvblwiIHJvbGU9XCJjb21ib2JveFwiICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPjwvc3Bhbj4nKTtyZXR1cm4gdGhpcy5fdGFiaW5kZXg9MCxudWxsIT1pLkdldERhdGEodGhpcy4kZWxlbWVudFswXSxcIm9sZC10YWJpbmRleFwiKT90aGlzLl90YWJpbmRleD1pLkdldERhdGEodGhpcy4kZWxlbWVudFswXSxcIm9sZC10YWJpbmRleFwiKTpudWxsIT10aGlzLiRlbGVtZW50LmF0dHIoXCJ0YWJpbmRleFwiKSYmKHRoaXMuX3RhYmluZGV4PXRoaXMuJGVsZW1lbnQuYXR0cihcInRhYmluZGV4XCIpKSxlLmF0dHIoXCJ0aXRsZVwiLHRoaXMuJGVsZW1lbnQuYXR0cihcInRpdGxlXCIpKSxlLmF0dHIoXCJ0YWJpbmRleFwiLHRoaXMuX3RhYmluZGV4KSxlLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJmYWxzZVwiKSx0aGlzLiRzZWxlY3Rpb249ZX0sby5wcm90b3R5cGUuYmluZD1mdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMsaT1lLmlkK1wiLXJlc3VsdHNcIjt0aGlzLmNvbnRhaW5lcj1lLHRoaXMuJHNlbGVjdGlvbi5vbihcImZvY3VzXCIsZnVuY3Rpb24oZSl7bi50cmlnZ2VyKFwiZm9jdXNcIixlKX0pLHRoaXMuJHNlbGVjdGlvbi5vbihcImJsdXJcIixmdW5jdGlvbihlKXtuLl9oYW5kbGVCbHVyKGUpfSksdGhpcy4kc2VsZWN0aW9uLm9uKFwia2V5ZG93blwiLGZ1bmN0aW9uKGUpe24udHJpZ2dlcihcImtleXByZXNzXCIsZSksZS53aGljaD09PXIuU1BBQ0UmJmUucHJldmVudERlZmF1bHQoKX0pLGUub24oXCJyZXN1bHRzOmZvY3VzXCIsZnVuY3Rpb24oZSl7bi4kc2VsZWN0aW9uLmF0dHIoXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIixlLmRhdGEuX3Jlc3VsdElkKX0pLGUub24oXCJzZWxlY3Rpb246dXBkYXRlXCIsZnVuY3Rpb24oZSl7bi51cGRhdGUoZS5kYXRhKX0pLGUub24oXCJvcGVuXCIsZnVuY3Rpb24oKXtuLiRzZWxlY3Rpb24uYXR0cihcImFyaWEtZXhwYW5kZWRcIixcInRydWVcIiksbi4kc2VsZWN0aW9uLmF0dHIoXCJhcmlhLW93bnNcIixpKSxuLl9hdHRhY2hDbG9zZUhhbmRsZXIoZSl9KSxlLm9uKFwiY2xvc2VcIixmdW5jdGlvbigpe24uJHNlbGVjdGlvbi5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIiksbi4kc2VsZWN0aW9uLnJlbW92ZUF0dHIoXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIiksbi4kc2VsZWN0aW9uLnJlbW92ZUF0dHIoXCJhcmlhLW93bnNcIiksbi4kc2VsZWN0aW9uLnRyaWdnZXIoXCJmb2N1c1wiKSxuLl9kZXRhY2hDbG9zZUhhbmRsZXIoZSl9KSxlLm9uKFwiZW5hYmxlXCIsZnVuY3Rpb24oKXtuLiRzZWxlY3Rpb24uYXR0cihcInRhYmluZGV4XCIsbi5fdGFiaW5kZXgpLG4uJHNlbGVjdGlvbi5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLFwiZmFsc2VcIil9KSxlLm9uKFwiZGlzYWJsZVwiLGZ1bmN0aW9uKCl7bi4kc2VsZWN0aW9uLmF0dHIoXCJ0YWJpbmRleFwiLFwiLTFcIiksbi4kc2VsZWN0aW9uLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJ0cnVlXCIpfSl9LG8ucHJvdG90eXBlLl9oYW5kbGVCbHVyPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtkb2N1bWVudC5hY3RpdmVFbGVtZW50PT10LiRzZWxlY3Rpb25bMF18fG4uY29udGFpbnModC4kc2VsZWN0aW9uWzBdLGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpfHx0LnRyaWdnZXIoXCJibHVyXCIsZSl9LDEpfSxvLnByb3RvdHlwZS5fYXR0YWNoQ2xvc2VIYW5kbGVyPWZ1bmN0aW9uKGUpe24oZG9jdW1lbnQuYm9keSkub24oXCJtb3VzZWRvd24uc2VsZWN0Mi5cIitlLmlkLGZ1bmN0aW9uKGUpe3ZhciB0PW4oZS50YXJnZXQpLmNsb3Nlc3QoXCIuc2VsZWN0MlwiKTtuKFwiLnNlbGVjdDIuc2VsZWN0Mi1jb250YWluZXItLW9wZW5cIikuZWFjaChmdW5jdGlvbigpe3RoaXMhPXRbMF0mJmkuR2V0RGF0YSh0aGlzLFwiZWxlbWVudFwiKS5zZWxlY3QyKFwiY2xvc2VcIil9KX0pfSxvLnByb3RvdHlwZS5fZGV0YWNoQ2xvc2VIYW5kbGVyPWZ1bmN0aW9uKGUpe24oZG9jdW1lbnQuYm9keSkub2ZmKFwibW91c2Vkb3duLnNlbGVjdDIuXCIrZS5pZCl9LG8ucHJvdG90eXBlLnBvc2l0aW9uPWZ1bmN0aW9uKGUsdCl7dC5maW5kKFwiLnNlbGVjdGlvblwiKS5hcHBlbmQoZSl9LG8ucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLl9kZXRhY2hDbG9zZUhhbmRsZXIodGhpcy5jb250YWluZXIpfSxvLnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwiVGhlIGB1cGRhdGVgIG1ldGhvZCBtdXN0IGJlIGRlZmluZWQgaW4gY2hpbGQgY2xhc3Nlcy5cIil9LG99KSxlLmRlZmluZShcInNlbGVjdDIvc2VsZWN0aW9uL3NpbmdsZVwiLFtcImpxdWVyeVwiLFwiLi9iYXNlXCIsXCIuLi91dGlsc1wiLFwiLi4va2V5c1wiXSxmdW5jdGlvbihlLHQsbixpKXtmdW5jdGlvbiByKCl7ci5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcyxhcmd1bWVudHMpfXJldHVybiBuLkV4dGVuZChyLHQpLHIucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3ZhciBlPXIuX19zdXBlcl9fLnJlbmRlci5jYWxsKHRoaXMpO3JldHVybiBlLmFkZENsYXNzKFwic2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZVwiKSxlLmh0bWwoJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93XCIgcm9sZT1cInByZXNlbnRhdGlvblwiPjxiIHJvbGU9XCJwcmVzZW50YXRpb25cIj48L2I+PC9zcGFuPicpLGV9LHIucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzO3IuX19zdXBlcl9fLmJpbmQuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBpPXQuaWQrXCItY29udGFpbmVyXCI7dGhpcy4kc2VsZWN0aW9uLmZpbmQoXCIuc2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkXCIpLmF0dHIoXCJpZFwiLGkpLmF0dHIoXCJyb2xlXCIsXCJ0ZXh0Ym94XCIpLmF0dHIoXCJhcmlhLXJlYWRvbmx5XCIsXCJ0cnVlXCIpLHRoaXMuJHNlbGVjdGlvbi5hdHRyKFwiYXJpYS1sYWJlbGxlZGJ5XCIsaSksdGhpcy4kc2VsZWN0aW9uLm9uKFwibW91c2Vkb3duXCIsZnVuY3Rpb24oZSl7MT09PWUud2hpY2gmJm4udHJpZ2dlcihcInRvZ2dsZVwiLHtvcmlnaW5hbEV2ZW50OmV9KX0pLHRoaXMuJHNlbGVjdGlvbi5vbihcImZvY3VzXCIsZnVuY3Rpb24oZSl7fSksdGhpcy4kc2VsZWN0aW9uLm9uKFwiYmx1clwiLGZ1bmN0aW9uKGUpe30pLHQub24oXCJmb2N1c1wiLGZ1bmN0aW9uKGUpe3QuaXNPcGVuKCl8fG4uJHNlbGVjdGlvbi50cmlnZ2VyKFwiZm9jdXNcIil9KX0sci5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLiRzZWxlY3Rpb24uZmluZChcIi5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWRcIik7ZS5lbXB0eSgpLGUucmVtb3ZlQXR0cihcInRpdGxlXCIpfSxyLnByb3RvdHlwZS5kaXNwbGF5PWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5vcHRpb25zLmdldChcInRlbXBsYXRlU2VsZWN0aW9uXCIpO3JldHVybiB0aGlzLm9wdGlvbnMuZ2V0KFwiZXNjYXBlTWFya3VwXCIpKG4oZSx0KSl9LHIucHJvdG90eXBlLnNlbGVjdGlvbkNvbnRhaW5lcj1mdW5jdGlvbigpe3JldHVybiBlKFwiPHNwYW4+PC9zcGFuPlwiKX0sci5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKGUpe2lmKDAhPT1lLmxlbmd0aCl7dmFyIHQ9ZVswXSxuPXRoaXMuJHNlbGVjdGlvbi5maW5kKFwiLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZFwiKSxpPXRoaXMuZGlzcGxheSh0LG4pO24uZW1wdHkoKS5hcHBlbmQoaSk7dmFyIHI9dC50aXRsZXx8dC50ZXh0O3I/bi5hdHRyKFwidGl0bGVcIixyKTpuLnJlbW92ZUF0dHIoXCJ0aXRsZVwiKX1lbHNlIHRoaXMuY2xlYXIoKX0scn0pLGUuZGVmaW5lKFwic2VsZWN0Mi9zZWxlY3Rpb24vbXVsdGlwbGVcIixbXCJqcXVlcnlcIixcIi4vYmFzZVwiLFwiLi4vdXRpbHNcIl0sZnVuY3Rpb24ocixlLGwpe2Z1bmN0aW9uIG4oZSx0KXtuLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9cmV0dXJuIGwuRXh0ZW5kKG4sZSksbi5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGU9bi5fX3N1cGVyX18ucmVuZGVyLmNhbGwodGhpcyk7cmV0dXJuIGUuYWRkQ2xhc3MoXCJzZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGVcIiksZS5odG1sKCc8dWwgY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWRcIj48L3VsPicpLGV9LG4ucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24oZSx0KXt2YXIgaT10aGlzO24uX19zdXBlcl9fLmJpbmQuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuJHNlbGVjdGlvbi5vbihcImNsaWNrXCIsZnVuY3Rpb24oZSl7aS50cmlnZ2VyKFwidG9nZ2xlXCIse29yaWdpbmFsRXZlbnQ6ZX0pfSksdGhpcy4kc2VsZWN0aW9uLm9uKFwiY2xpY2tcIixcIi5zZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmVcIixmdW5jdGlvbihlKXtpZighaS5vcHRpb25zLmdldChcImRpc2FibGVkXCIpKXt2YXIgdD1yKHRoaXMpLnBhcmVudCgpLG49bC5HZXREYXRhKHRbMF0sXCJkYXRhXCIpO2kudHJpZ2dlcihcInVuc2VsZWN0XCIse29yaWdpbmFsRXZlbnQ6ZSxkYXRhOm59KX19KX0sbi5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLiRzZWxlY3Rpb24uZmluZChcIi5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWRcIik7ZS5lbXB0eSgpLGUucmVtb3ZlQXR0cihcInRpdGxlXCIpfSxuLnByb3RvdHlwZS5kaXNwbGF5PWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5vcHRpb25zLmdldChcInRlbXBsYXRlU2VsZWN0aW9uXCIpO3JldHVybiB0aGlzLm9wdGlvbnMuZ2V0KFwiZXNjYXBlTWFya3VwXCIpKG4oZSx0KSl9LG4ucHJvdG90eXBlLnNlbGVjdGlvbkNvbnRhaW5lcj1mdW5jdGlvbigpe3JldHVybiByKCc8bGkgY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlXCI+PHNwYW4gY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmVcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+JnRpbWVzOzwvc3Bhbj48L2xpPicpfSxuLnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24oZSl7aWYodGhpcy5jbGVhcigpLDAhPT1lLmxlbmd0aCl7Zm9yKHZhciB0PVtdLG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIGk9ZVtuXSxyPXRoaXMuc2VsZWN0aW9uQ29udGFpbmVyKCksbz10aGlzLmRpc3BsYXkoaSxyKTtyLmFwcGVuZChvKTt2YXIgcz1pLnRpdGxlfHxpLnRleHQ7cyYmci5hdHRyKFwidGl0bGVcIixzKSxsLlN0b3JlRGF0YShyWzBdLFwiZGF0YVwiLGkpLHQucHVzaChyKX12YXIgYT10aGlzLiRzZWxlY3Rpb24uZmluZChcIi5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWRcIik7bC5hcHBlbmRNYW55KGEsdCl9fSxufSksZS5kZWZpbmUoXCJzZWxlY3QyL3NlbGVjdGlvbi9wbGFjZWhvbGRlclwiLFtcIi4uL3V0aWxzXCJdLGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSx0LG4pe3RoaXMucGxhY2Vob2xkZXI9dGhpcy5ub3JtYWxpemVQbGFjZWhvbGRlcihuLmdldChcInBsYWNlaG9sZGVyXCIpKSxlLmNhbGwodGhpcyx0LG4pfXJldHVybiB0LnByb3RvdHlwZS5ub3JtYWxpemVQbGFjZWhvbGRlcj1mdW5jdGlvbihlLHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0JiYodD17aWQ6XCJcIix0ZXh0OnR9KSx0fSx0LnByb3RvdHlwZS5jcmVhdGVQbGFjZWhvbGRlcj1mdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMuc2VsZWN0aW9uQ29udGFpbmVyKCk7cmV0dXJuIG4uaHRtbCh0aGlzLmRpc3BsYXkodCkpLG4uYWRkQ2xhc3MoXCJzZWxlY3QyLXNlbGVjdGlvbl9fcGxhY2Vob2xkZXJcIikucmVtb3ZlQ2xhc3MoXCJzZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlXCIpLG59LHQucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbihlLHQpe3ZhciBuPTE9PXQubGVuZ3RoJiZ0WzBdLmlkIT10aGlzLnBsYWNlaG9sZGVyLmlkO2lmKDE8dC5sZW5ndGh8fG4pcmV0dXJuIGUuY2FsbCh0aGlzLHQpO3RoaXMuY2xlYXIoKTt2YXIgaT10aGlzLmNyZWF0ZVBsYWNlaG9sZGVyKHRoaXMucGxhY2Vob2xkZXIpO3RoaXMuJHNlbGVjdGlvbi5maW5kKFwiLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZFwiKS5hcHBlbmQoaSl9LHR9KSxlLmRlZmluZShcInNlbGVjdDIvc2VsZWN0aW9uL2FsbG93Q2xlYXJcIixbXCJqcXVlcnlcIixcIi4uL2tleXNcIixcIi4uL3V0aWxzXCJdLGZ1bmN0aW9uKHIsaSxhKXtmdW5jdGlvbiBlKCl7fXJldHVybiBlLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10aGlzO2UuY2FsbCh0aGlzLHQsbiksbnVsbD09dGhpcy5wbGFjZWhvbGRlciYmdGhpcy5vcHRpb25zLmdldChcImRlYnVnXCIpJiZ3aW5kb3cuY29uc29sZSYmY29uc29sZS5lcnJvciYmY29uc29sZS5lcnJvcihcIlNlbGVjdDI6IFRoZSBgYWxsb3dDbGVhcmAgb3B0aW9uIHNob3VsZCBiZSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggdGhlIGBwbGFjZWhvbGRlcmAgb3B0aW9uLlwiKSx0aGlzLiRzZWxlY3Rpb24ub24oXCJtb3VzZWRvd25cIixcIi5zZWxlY3QyLXNlbGVjdGlvbl9fY2xlYXJcIixmdW5jdGlvbihlKXtpLl9oYW5kbGVDbGVhcihlKX0pLHQub24oXCJrZXlwcmVzc1wiLGZ1bmN0aW9uKGUpe2kuX2hhbmRsZUtleWJvYXJkQ2xlYXIoZSx0KX0pfSxlLnByb3RvdHlwZS5faGFuZGxlQ2xlYXI9ZnVuY3Rpb24oZSx0KXtpZighdGhpcy5vcHRpb25zLmdldChcImRpc2FibGVkXCIpKXt2YXIgbj10aGlzLiRzZWxlY3Rpb24uZmluZChcIi5zZWxlY3QyLXNlbGVjdGlvbl9fY2xlYXJcIik7aWYoMCE9PW4ubGVuZ3RoKXt0LnN0b3BQcm9wYWdhdGlvbigpO3ZhciBpPWEuR2V0RGF0YShuWzBdLFwiZGF0YVwiKSxyPXRoaXMuJGVsZW1lbnQudmFsKCk7dGhpcy4kZWxlbWVudC52YWwodGhpcy5wbGFjZWhvbGRlci5pZCk7dmFyIG89e2RhdGE6aX07aWYodGhpcy50cmlnZ2VyKFwiY2xlYXJcIixvKSxvLnByZXZlbnRlZCl0aGlzLiRlbGVtZW50LnZhbChyKTtlbHNle2Zvcih2YXIgcz0wO3M8aS5sZW5ndGg7cysrKWlmKG89e2RhdGE6aVtzXX0sdGhpcy50cmlnZ2VyKFwidW5zZWxlY3RcIixvKSxvLnByZXZlbnRlZClyZXR1cm4gdm9pZCB0aGlzLiRlbGVtZW50LnZhbChyKTt0aGlzLiRlbGVtZW50LnRyaWdnZXIoXCJjaGFuZ2VcIiksdGhpcy50cmlnZ2VyKFwidG9nZ2xlXCIse30pfX19fSxlLnByb3RvdHlwZS5faGFuZGxlS2V5Ym9hcmRDbGVhcj1mdW5jdGlvbihlLHQsbil7bi5pc09wZW4oKXx8dC53aGljaCE9aS5ERUxFVEUmJnQud2hpY2ghPWkuQkFDS1NQQUNFfHx0aGlzLl9oYW5kbGVDbGVhcih0KX0sZS5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKGUsdCl7aWYoZS5jYWxsKHRoaXMsdCksISgwPHRoaXMuJHNlbGVjdGlvbi5maW5kKFwiLnNlbGVjdDItc2VsZWN0aW9uX19wbGFjZWhvbGRlclwiKS5sZW5ndGh8fDA9PT10Lmxlbmd0aCkpe3ZhciBuPXRoaXMub3B0aW9ucy5nZXQoXCJ0cmFuc2xhdGlvbnNcIikuZ2V0KFwicmVtb3ZlQWxsSXRlbXNcIiksaT1yKCc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VsZWN0aW9uX19jbGVhclwiIHRpdGxlPVwiJytuKCkrJ1wiPiZ0aW1lczs8L3NwYW4+Jyk7YS5TdG9yZURhdGEoaVswXSxcImRhdGFcIix0KSx0aGlzLiRzZWxlY3Rpb24uZmluZChcIi5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWRcIikucHJlcGVuZChpKX19LGV9KSxlLmRlZmluZShcInNlbGVjdDIvc2VsZWN0aW9uL3NlYXJjaFwiLFtcImpxdWVyeVwiLFwiLi4vdXRpbHNcIixcIi4uL2tleXNcIl0sZnVuY3Rpb24oaSxhLGwpe2Z1bmN0aW9uIGUoZSx0LG4pe2UuY2FsbCh0aGlzLHQsbil9cmV0dXJuIGUucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihlKXt2YXIgdD1pKCc8bGkgY2xhc3M9XCJzZWxlY3QyLXNlYXJjaCBzZWxlY3QyLXNlYXJjaC0taW5saW5lXCI+PGlucHV0IGNsYXNzPVwic2VsZWN0Mi1zZWFyY2hfX2ZpZWxkXCIgdHlwZT1cInNlYXJjaFwiIHRhYmluZGV4PVwiLTFcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiIHJvbGU9XCJzZWFyY2hib3hcIiBhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIiAvPjwvbGk+Jyk7dGhpcy4kc2VhcmNoQ29udGFpbmVyPXQsdGhpcy4kc2VhcmNoPXQuZmluZChcImlucHV0XCIpO3ZhciBuPWUuY2FsbCh0aGlzKTtyZXR1cm4gdGhpcy5fdHJhbnNmZXJUYWJJbmRleCgpLG59LGUucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXRoaXMscj10LmlkK1wiLXJlc3VsdHNcIjtlLmNhbGwodGhpcyx0LG4pLHQub24oXCJvcGVuXCIsZnVuY3Rpb24oKXtpLiRzZWFyY2guYXR0cihcImFyaWEtY29udHJvbHNcIixyKSxpLiRzZWFyY2gudHJpZ2dlcihcImZvY3VzXCIpfSksdC5vbihcImNsb3NlXCIsZnVuY3Rpb24oKXtpLiRzZWFyY2gudmFsKFwiXCIpLGkuJHNlYXJjaC5yZW1vdmVBdHRyKFwiYXJpYS1jb250cm9sc1wiKSxpLiRzZWFyY2gucmVtb3ZlQXR0cihcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiKSxpLiRzZWFyY2gudHJpZ2dlcihcImZvY3VzXCIpfSksdC5vbihcImVuYWJsZVwiLGZ1bmN0aW9uKCl7aS4kc2VhcmNoLnByb3AoXCJkaXNhYmxlZFwiLCExKSxpLl90cmFuc2ZlclRhYkluZGV4KCl9KSx0Lm9uKFwiZGlzYWJsZVwiLGZ1bmN0aW9uKCl7aS4kc2VhcmNoLnByb3AoXCJkaXNhYmxlZFwiLCEwKX0pLHQub24oXCJmb2N1c1wiLGZ1bmN0aW9uKGUpe2kuJHNlYXJjaC50cmlnZ2VyKFwiZm9jdXNcIil9KSx0Lm9uKFwicmVzdWx0czpmb2N1c1wiLGZ1bmN0aW9uKGUpe2UuZGF0YS5fcmVzdWx0SWQ/aS4kc2VhcmNoLmF0dHIoXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIixlLmRhdGEuX3Jlc3VsdElkKTppLiRzZWFyY2gucmVtb3ZlQXR0cihcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiKX0pLHRoaXMuJHNlbGVjdGlvbi5vbihcImZvY3VzaW5cIixcIi5zZWxlY3QyLXNlYXJjaC0taW5saW5lXCIsZnVuY3Rpb24oZSl7aS50cmlnZ2VyKFwiZm9jdXNcIixlKX0pLHRoaXMuJHNlbGVjdGlvbi5vbihcImZvY3Vzb3V0XCIsXCIuc2VsZWN0Mi1zZWFyY2gtLWlubGluZVwiLGZ1bmN0aW9uKGUpe2kuX2hhbmRsZUJsdXIoZSl9KSx0aGlzLiRzZWxlY3Rpb24ub24oXCJrZXlkb3duXCIsXCIuc2VsZWN0Mi1zZWFyY2gtLWlubGluZVwiLGZ1bmN0aW9uKGUpe2lmKGUuc3RvcFByb3BhZ2F0aW9uKCksaS50cmlnZ2VyKFwia2V5cHJlc3NcIixlKSxpLl9rZXlVcFByZXZlbnRlZD1lLmlzRGVmYXVsdFByZXZlbnRlZCgpLGUud2hpY2g9PT1sLkJBQ0tTUEFDRSYmXCJcIj09PWkuJHNlYXJjaC52YWwoKSl7dmFyIHQ9aS4kc2VhcmNoQ29udGFpbmVyLnByZXYoXCIuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZVwiKTtpZigwPHQubGVuZ3RoKXt2YXIgbj1hLkdldERhdGEodFswXSxcImRhdGFcIik7aS5zZWFyY2hSZW1vdmVDaG9pY2UobiksZS5wcmV2ZW50RGVmYXVsdCgpfX19KSx0aGlzLiRzZWxlY3Rpb24ub24oXCJjbGlja1wiLFwiLnNlbGVjdDItc2VhcmNoLS1pbmxpbmVcIixmdW5jdGlvbihlKXtpLiRzZWFyY2gudmFsKCkmJmUuc3RvcFByb3BhZ2F0aW9uKCl9KTt2YXIgbz1kb2N1bWVudC5kb2N1bWVudE1vZGUscz1vJiZvPD0xMTt0aGlzLiRzZWxlY3Rpb24ub24oXCJpbnB1dC5zZWFyY2hjaGVja1wiLFwiLnNlbGVjdDItc2VhcmNoLS1pbmxpbmVcIixmdW5jdGlvbihlKXtzP2kuJHNlbGVjdGlvbi5vZmYoXCJpbnB1dC5zZWFyY2ggaW5wdXQuc2VhcmNoY2hlY2tcIik6aS4kc2VsZWN0aW9uLm9mZihcImtleXVwLnNlYXJjaFwiKX0pLHRoaXMuJHNlbGVjdGlvbi5vbihcImtleXVwLnNlYXJjaCBpbnB1dC5zZWFyY2hcIixcIi5zZWxlY3QyLXNlYXJjaC0taW5saW5lXCIsZnVuY3Rpb24oZSl7aWYocyYmXCJpbnB1dFwiPT09ZS50eXBlKWkuJHNlbGVjdGlvbi5vZmYoXCJpbnB1dC5zZWFyY2ggaW5wdXQuc2VhcmNoY2hlY2tcIik7ZWxzZXt2YXIgdD1lLndoaWNoO3QhPWwuU0hJRlQmJnQhPWwuQ1RSTCYmdCE9bC5BTFQmJnQhPWwuVEFCJiZpLmhhbmRsZVNlYXJjaChlKX19KX0sZS5wcm90b3R5cGUuX3RyYW5zZmVyVGFiSW5kZXg9ZnVuY3Rpb24oZSl7dGhpcy4kc2VhcmNoLmF0dHIoXCJ0YWJpbmRleFwiLHRoaXMuJHNlbGVjdGlvbi5hdHRyKFwidGFiaW5kZXhcIikpLHRoaXMuJHNlbGVjdGlvbi5hdHRyKFwidGFiaW5kZXhcIixcIi0xXCIpfSxlLnByb3RvdHlwZS5jcmVhdGVQbGFjZWhvbGRlcj1mdW5jdGlvbihlLHQpe3RoaXMuJHNlYXJjaC5hdHRyKFwicGxhY2Vob2xkZXJcIix0LnRleHQpfSxlLnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLiRzZWFyY2hbMF09PWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7dGhpcy4kc2VhcmNoLmF0dHIoXCJwbGFjZWhvbGRlclwiLFwiXCIpLGUuY2FsbCh0aGlzLHQpLHRoaXMuJHNlbGVjdGlvbi5maW5kKFwiLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZFwiKS5hcHBlbmQodGhpcy4kc2VhcmNoQ29udGFpbmVyKSx0aGlzLnJlc2l6ZVNlYXJjaCgpLG4mJnRoaXMuJHNlYXJjaC50cmlnZ2VyKFwiZm9jdXNcIil9LGUucHJvdG90eXBlLmhhbmRsZVNlYXJjaD1mdW5jdGlvbigpe2lmKHRoaXMucmVzaXplU2VhcmNoKCksIXRoaXMuX2tleVVwUHJldmVudGVkKXt2YXIgZT10aGlzLiRzZWFyY2gudmFsKCk7dGhpcy50cmlnZ2VyKFwicXVlcnlcIix7dGVybTplfSl9dGhpcy5fa2V5VXBQcmV2ZW50ZWQ9ITF9LGUucHJvdG90eXBlLnNlYXJjaFJlbW92ZUNob2ljZT1mdW5jdGlvbihlLHQpe3RoaXMudHJpZ2dlcihcInVuc2VsZWN0XCIse2RhdGE6dH0pLHRoaXMuJHNlYXJjaC52YWwodC50ZXh0KSx0aGlzLmhhbmRsZVNlYXJjaCgpfSxlLnByb3RvdHlwZS5yZXNpemVTZWFyY2g9ZnVuY3Rpb24oKXt0aGlzLiRzZWFyY2guY3NzKFwid2lkdGhcIixcIjI1cHhcIik7dmFyIGU9XCJcIjtcIlwiIT09dGhpcy4kc2VhcmNoLmF0dHIoXCJwbGFjZWhvbGRlclwiKT9lPXRoaXMuJHNlbGVjdGlvbi5maW5kKFwiLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZFwiKS53aWR0aCgpOmU9Ljc1Kih0aGlzLiRzZWFyY2gudmFsKCkubGVuZ3RoKzEpK1wiZW1cIjt0aGlzLiRzZWFyY2guY3NzKFwid2lkdGhcIixlKX0sZX0pLGUuZGVmaW5lKFwic2VsZWN0Mi9zZWxlY3Rpb24vZXZlbnRSZWxheVwiLFtcImpxdWVyeVwiXSxmdW5jdGlvbihzKXtmdW5jdGlvbiBlKCl7fXJldHVybiBlLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10aGlzLHI9W1wib3BlblwiLFwib3BlbmluZ1wiLFwiY2xvc2VcIixcImNsb3NpbmdcIixcInNlbGVjdFwiLFwic2VsZWN0aW5nXCIsXCJ1bnNlbGVjdFwiLFwidW5zZWxlY3RpbmdcIixcImNsZWFyXCIsXCJjbGVhcmluZ1wiXSxvPVtcIm9wZW5pbmdcIixcImNsb3NpbmdcIixcInNlbGVjdGluZ1wiLFwidW5zZWxlY3RpbmdcIixcImNsZWFyaW5nXCJdO2UuY2FsbCh0aGlzLHQsbiksdC5vbihcIipcIixmdW5jdGlvbihlLHQpe2lmKC0xIT09cy5pbkFycmF5KGUscikpe3Q9dHx8e307dmFyIG49cy5FdmVudChcInNlbGVjdDI6XCIrZSx7cGFyYW1zOnR9KTtpLiRlbGVtZW50LnRyaWdnZXIobiksLTEhPT1zLmluQXJyYXkoZSxvKSYmKHQucHJldmVudGVkPW4uaXNEZWZhdWx0UHJldmVudGVkKCkpfX0pfSxlfSksZS5kZWZpbmUoXCJzZWxlY3QyL3RyYW5zbGF0aW9uXCIsW1wianF1ZXJ5XCIsXCJyZXF1aXJlXCJdLGZ1bmN0aW9uKHQsbil7ZnVuY3Rpb24gaShlKXt0aGlzLmRpY3Q9ZXx8e319cmV0dXJuIGkucHJvdG90eXBlLmFsbD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmRpY3R9LGkucHJvdG90eXBlLmdldD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5kaWN0W2VdfSxpLnByb3RvdHlwZS5leHRlbmQ9ZnVuY3Rpb24oZSl7dGhpcy5kaWN0PXQuZXh0ZW5kKHt9LGUuYWxsKCksdGhpcy5kaWN0KX0saS5fY2FjaGU9e30saS5sb2FkUGF0aD1mdW5jdGlvbihlKXtpZighKGUgaW4gaS5fY2FjaGUpKXt2YXIgdD1uKGUpO2kuX2NhY2hlW2VdPXR9cmV0dXJuIG5ldyBpKGkuX2NhY2hlW2VdKX0saX0pLGUuZGVmaW5lKFwic2VsZWN0Mi9kaWFjcml0aWNzXCIsW10sZnVuY3Rpb24oKXtyZXR1cm57XCLikrZcIjpcIkFcIixcIu+8oVwiOlwiQVwiLFwiw4BcIjpcIkFcIixcIsOBXCI6XCJBXCIsXCLDglwiOlwiQVwiLFwi4bqmXCI6XCJBXCIsXCLhuqRcIjpcIkFcIixcIuG6qlwiOlwiQVwiLFwi4bqoXCI6XCJBXCIsXCLDg1wiOlwiQVwiLFwixIBcIjpcIkFcIixcIsSCXCI6XCJBXCIsXCLhurBcIjpcIkFcIixcIuG6rlwiOlwiQVwiLFwi4bq0XCI6XCJBXCIsXCLhurJcIjpcIkFcIixcIsimXCI6XCJBXCIsXCLHoFwiOlwiQVwiLFwiw4RcIjpcIkFcIixcIseeXCI6XCJBXCIsXCLhuqJcIjpcIkFcIixcIsOFXCI6XCJBXCIsXCLHulwiOlwiQVwiLFwix41cIjpcIkFcIixcIsiAXCI6XCJBXCIsXCLIglwiOlwiQVwiLFwi4bqgXCI6XCJBXCIsXCLhuqxcIjpcIkFcIixcIuG6tlwiOlwiQVwiLFwi4biAXCI6XCJBXCIsXCLEhFwiOlwiQVwiLFwiyLpcIjpcIkFcIixcIuKxr1wiOlwiQVwiLFwi6pyyXCI6XCJBQVwiLFwiw4ZcIjpcIkFFXCIsXCLHvFwiOlwiQUVcIixcIseiXCI6XCJBRVwiLFwi6py0XCI6XCJBT1wiLFwi6py2XCI6XCJBVVwiLFwi6py4XCI6XCJBVlwiLFwi6py6XCI6XCJBVlwiLFwi6py8XCI6XCJBWVwiLFwi4pK3XCI6XCJCXCIsXCLvvKJcIjpcIkJcIixcIuG4glwiOlwiQlwiLFwi4biEXCI6XCJCXCIsXCLhuIZcIjpcIkJcIixcIsmDXCI6XCJCXCIsXCLGglwiOlwiQlwiLFwixoFcIjpcIkJcIixcIuKSuFwiOlwiQ1wiLFwi77yjXCI6XCJDXCIsXCLEhlwiOlwiQ1wiLFwixIhcIjpcIkNcIixcIsSKXCI6XCJDXCIsXCLEjFwiOlwiQ1wiLFwiw4dcIjpcIkNcIixcIuG4iFwiOlwiQ1wiLFwixodcIjpcIkNcIixcIsi7XCI6XCJDXCIsXCLqnL5cIjpcIkNcIixcIuKSuVwiOlwiRFwiLFwi77ykXCI6XCJEXCIsXCLhuIpcIjpcIkRcIixcIsSOXCI6XCJEXCIsXCLhuIxcIjpcIkRcIixcIuG4kFwiOlwiRFwiLFwi4biSXCI6XCJEXCIsXCLhuI5cIjpcIkRcIixcIsSQXCI6XCJEXCIsXCLGi1wiOlwiRFwiLFwixopcIjpcIkRcIixcIsaJXCI6XCJEXCIsXCLqnblcIjpcIkRcIixcIsexXCI6XCJEWlwiLFwix4RcIjpcIkRaXCIsXCLHslwiOlwiRHpcIixcIseFXCI6XCJEelwiLFwi4pK6XCI6XCJFXCIsXCLvvKVcIjpcIkVcIixcIsOIXCI6XCJFXCIsXCLDiVwiOlwiRVwiLFwiw4pcIjpcIkVcIixcIuG7gFwiOlwiRVwiLFwi4bq+XCI6XCJFXCIsXCLhu4RcIjpcIkVcIixcIuG7glwiOlwiRVwiLFwi4bq8XCI6XCJFXCIsXCLEklwiOlwiRVwiLFwi4biUXCI6XCJFXCIsXCLhuJZcIjpcIkVcIixcIsSUXCI6XCJFXCIsXCLEllwiOlwiRVwiLFwiw4tcIjpcIkVcIixcIuG6ulwiOlwiRVwiLFwixJpcIjpcIkVcIixcIsiEXCI6XCJFXCIsXCLIhlwiOlwiRVwiLFwi4bq4XCI6XCJFXCIsXCLhu4ZcIjpcIkVcIixcIsioXCI6XCJFXCIsXCLhuJxcIjpcIkVcIixcIsSYXCI6XCJFXCIsXCLhuJhcIjpcIkVcIixcIuG4mlwiOlwiRVwiLFwixpBcIjpcIkVcIixcIsaOXCI6XCJFXCIsXCLikrtcIjpcIkZcIixcIu+8plwiOlwiRlwiLFwi4bieXCI6XCJGXCIsXCLGkVwiOlwiRlwiLFwi6p27XCI6XCJGXCIsXCLikrxcIjpcIkdcIixcIu+8p1wiOlwiR1wiLFwix7RcIjpcIkdcIixcIsScXCI6XCJHXCIsXCLhuKBcIjpcIkdcIixcIsSeXCI6XCJHXCIsXCLEoFwiOlwiR1wiLFwix6ZcIjpcIkdcIixcIsSiXCI6XCJHXCIsXCLHpFwiOlwiR1wiLFwixpNcIjpcIkdcIixcIuqeoFwiOlwiR1wiLFwi6p29XCI6XCJHXCIsXCLqnb5cIjpcIkdcIixcIuKSvVwiOlwiSFwiLFwi77yoXCI6XCJIXCIsXCLEpFwiOlwiSFwiLFwi4biiXCI6XCJIXCIsXCLhuKZcIjpcIkhcIixcIsieXCI6XCJIXCIsXCLhuKRcIjpcIkhcIixcIuG4qFwiOlwiSFwiLFwi4biqXCI6XCJIXCIsXCLEplwiOlwiSFwiLFwi4rGnXCI6XCJIXCIsXCLisbVcIjpcIkhcIixcIuqejVwiOlwiSFwiLFwi4pK+XCI6XCJJXCIsXCLvvKlcIjpcIklcIixcIsOMXCI6XCJJXCIsXCLDjVwiOlwiSVwiLFwiw45cIjpcIklcIixcIsSoXCI6XCJJXCIsXCLEqlwiOlwiSVwiLFwixKxcIjpcIklcIixcIsSwXCI6XCJJXCIsXCLDj1wiOlwiSVwiLFwi4biuXCI6XCJJXCIsXCLhu4hcIjpcIklcIixcIsePXCI6XCJJXCIsXCLIiFwiOlwiSVwiLFwiyIpcIjpcIklcIixcIuG7ilwiOlwiSVwiLFwixK5cIjpcIklcIixcIuG4rFwiOlwiSVwiLFwixpdcIjpcIklcIixcIuKSv1wiOlwiSlwiLFwi77yqXCI6XCJKXCIsXCLEtFwiOlwiSlwiLFwiyYhcIjpcIkpcIixcIuKTgFwiOlwiS1wiLFwi77yrXCI6XCJLXCIsXCLhuLBcIjpcIktcIixcIseoXCI6XCJLXCIsXCLhuLJcIjpcIktcIixcIsS2XCI6XCJLXCIsXCLhuLRcIjpcIktcIixcIsaYXCI6XCJLXCIsXCLisalcIjpcIktcIixcIuqdgFwiOlwiS1wiLFwi6p2CXCI6XCJLXCIsXCLqnYRcIjpcIktcIixcIuqeolwiOlwiS1wiLFwi4pOBXCI6XCJMXCIsXCLvvKxcIjpcIkxcIixcIsS/XCI6XCJMXCIsXCLEuVwiOlwiTFwiLFwixL1cIjpcIkxcIixcIuG4tlwiOlwiTFwiLFwi4bi4XCI6XCJMXCIsXCLEu1wiOlwiTFwiLFwi4bi8XCI6XCJMXCIsXCLhuLpcIjpcIkxcIixcIsWBXCI6XCJMXCIsXCLIvVwiOlwiTFwiLFwi4rGiXCI6XCJMXCIsXCLisaBcIjpcIkxcIixcIuqdiFwiOlwiTFwiLFwi6p2GXCI6XCJMXCIsXCLqnoBcIjpcIkxcIixcIseHXCI6XCJMSlwiLFwix4hcIjpcIkxqXCIsXCLik4JcIjpcIk1cIixcIu+8rVwiOlwiTVwiLFwi4bi+XCI6XCJNXCIsXCLhuYBcIjpcIk1cIixcIuG5glwiOlwiTVwiLFwi4rGuXCI6XCJNXCIsXCLGnFwiOlwiTVwiLFwi4pODXCI6XCJOXCIsXCLvvK5cIjpcIk5cIixcIse4XCI6XCJOXCIsXCLFg1wiOlwiTlwiLFwiw5FcIjpcIk5cIixcIuG5hFwiOlwiTlwiLFwixYdcIjpcIk5cIixcIuG5hlwiOlwiTlwiLFwixYVcIjpcIk5cIixcIuG5ilwiOlwiTlwiLFwi4bmIXCI6XCJOXCIsXCLIoFwiOlwiTlwiLFwixp1cIjpcIk5cIixcIuqekFwiOlwiTlwiLFwi6p6kXCI6XCJOXCIsXCLHilwiOlwiTkpcIixcIseLXCI6XCJOalwiLFwi4pOEXCI6XCJPXCIsXCLvvK9cIjpcIk9cIixcIsOSXCI6XCJPXCIsXCLDk1wiOlwiT1wiLFwiw5RcIjpcIk9cIixcIuG7klwiOlwiT1wiLFwi4buQXCI6XCJPXCIsXCLhu5ZcIjpcIk9cIixcIuG7lFwiOlwiT1wiLFwiw5VcIjpcIk9cIixcIuG5jFwiOlwiT1wiLFwiyKxcIjpcIk9cIixcIuG5jlwiOlwiT1wiLFwixYxcIjpcIk9cIixcIuG5kFwiOlwiT1wiLFwi4bmSXCI6XCJPXCIsXCLFjlwiOlwiT1wiLFwiyK5cIjpcIk9cIixcIsiwXCI6XCJPXCIsXCLDllwiOlwiT1wiLFwiyKpcIjpcIk9cIixcIuG7jlwiOlwiT1wiLFwixZBcIjpcIk9cIixcIseRXCI6XCJPXCIsXCLIjFwiOlwiT1wiLFwiyI5cIjpcIk9cIixcIsagXCI6XCJPXCIsXCLhu5xcIjpcIk9cIixcIuG7mlwiOlwiT1wiLFwi4bugXCI6XCJPXCIsXCLhu55cIjpcIk9cIixcIuG7olwiOlwiT1wiLFwi4buMXCI6XCJPXCIsXCLhu5hcIjpcIk9cIixcIseqXCI6XCJPXCIsXCLHrFwiOlwiT1wiLFwiw5hcIjpcIk9cIixcIse+XCI6XCJPXCIsXCLGhlwiOlwiT1wiLFwixp9cIjpcIk9cIixcIuqdilwiOlwiT1wiLFwi6p2MXCI6XCJPXCIsXCLFklwiOlwiT0VcIixcIsaiXCI6XCJPSVwiLFwi6p2OXCI6XCJPT1wiLFwiyKJcIjpcIk9VXCIsXCLik4VcIjpcIlBcIixcIu+8sFwiOlwiUFwiLFwi4bmUXCI6XCJQXCIsXCLhuZZcIjpcIlBcIixcIsakXCI6XCJQXCIsXCLisaNcIjpcIlBcIixcIuqdkFwiOlwiUFwiLFwi6p2SXCI6XCJQXCIsXCLqnZRcIjpcIlBcIixcIuKThlwiOlwiUVwiLFwi77yxXCI6XCJRXCIsXCLqnZZcIjpcIlFcIixcIuqdmFwiOlwiUVwiLFwiyYpcIjpcIlFcIixcIuKTh1wiOlwiUlwiLFwi77yyXCI6XCJSXCIsXCLFlFwiOlwiUlwiLFwi4bmYXCI6XCJSXCIsXCLFmFwiOlwiUlwiLFwiyJBcIjpcIlJcIixcIsiSXCI6XCJSXCIsXCLhuZpcIjpcIlJcIixcIuG5nFwiOlwiUlwiLFwixZZcIjpcIlJcIixcIuG5nlwiOlwiUlwiLFwiyYxcIjpcIlJcIixcIuKxpFwiOlwiUlwiLFwi6p2aXCI6XCJSXCIsXCLqnqZcIjpcIlJcIixcIuqeglwiOlwiUlwiLFwi4pOIXCI6XCJTXCIsXCLvvLNcIjpcIlNcIixcIuG6nlwiOlwiU1wiLFwixZpcIjpcIlNcIixcIuG5pFwiOlwiU1wiLFwixZxcIjpcIlNcIixcIuG5oFwiOlwiU1wiLFwixaBcIjpcIlNcIixcIuG5plwiOlwiU1wiLFwi4bmiXCI6XCJTXCIsXCLhuahcIjpcIlNcIixcIsiYXCI6XCJTXCIsXCLFnlwiOlwiU1wiLFwi4rG+XCI6XCJTXCIsXCLqnqhcIjpcIlNcIixcIuqehFwiOlwiU1wiLFwi4pOJXCI6XCJUXCIsXCLvvLRcIjpcIlRcIixcIuG5qlwiOlwiVFwiLFwixaRcIjpcIlRcIixcIuG5rFwiOlwiVFwiLFwiyJpcIjpcIlRcIixcIsWiXCI6XCJUXCIsXCLhubBcIjpcIlRcIixcIuG5rlwiOlwiVFwiLFwixaZcIjpcIlRcIixcIsasXCI6XCJUXCIsXCLGrlwiOlwiVFwiLFwiyL5cIjpcIlRcIixcIuqehlwiOlwiVFwiLFwi6pyoXCI6XCJUWlwiLFwi4pOKXCI6XCJVXCIsXCLvvLVcIjpcIlVcIixcIsOZXCI6XCJVXCIsXCLDmlwiOlwiVVwiLFwiw5tcIjpcIlVcIixcIsWoXCI6XCJVXCIsXCLhubhcIjpcIlVcIixcIsWqXCI6XCJVXCIsXCLhubpcIjpcIlVcIixcIsWsXCI6XCJVXCIsXCLDnFwiOlwiVVwiLFwix5tcIjpcIlVcIixcIseXXCI6XCJVXCIsXCLHlVwiOlwiVVwiLFwix5lcIjpcIlVcIixcIuG7plwiOlwiVVwiLFwixa5cIjpcIlVcIixcIsWwXCI6XCJVXCIsXCLHk1wiOlwiVVwiLFwiyJRcIjpcIlVcIixcIsiWXCI6XCJVXCIsXCLGr1wiOlwiVVwiLFwi4buqXCI6XCJVXCIsXCLhu6hcIjpcIlVcIixcIuG7rlwiOlwiVVwiLFwi4busXCI6XCJVXCIsXCLhu7BcIjpcIlVcIixcIuG7pFwiOlwiVVwiLFwi4bmyXCI6XCJVXCIsXCLFslwiOlwiVVwiLFwi4bm2XCI6XCJVXCIsXCLhubRcIjpcIlVcIixcIsmEXCI6XCJVXCIsXCLik4tcIjpcIlZcIixcIu+8tlwiOlwiVlwiLFwi4bm8XCI6XCJWXCIsXCLhub5cIjpcIlZcIixcIsayXCI6XCJWXCIsXCLqnZ5cIjpcIlZcIixcIsmFXCI6XCJWXCIsXCLqnaBcIjpcIlZZXCIsXCLik4xcIjpcIldcIixcIu+8t1wiOlwiV1wiLFwi4bqAXCI6XCJXXCIsXCLhuoJcIjpcIldcIixcIsW0XCI6XCJXXCIsXCLhuoZcIjpcIldcIixcIuG6hFwiOlwiV1wiLFwi4bqIXCI6XCJXXCIsXCLisbJcIjpcIldcIixcIuKTjVwiOlwiWFwiLFwi77y4XCI6XCJYXCIsXCLhuopcIjpcIlhcIixcIuG6jFwiOlwiWFwiLFwi4pOOXCI6XCJZXCIsXCLvvLlcIjpcIllcIixcIuG7slwiOlwiWVwiLFwiw51cIjpcIllcIixcIsW2XCI6XCJZXCIsXCLhu7hcIjpcIllcIixcIsiyXCI6XCJZXCIsXCLhuo5cIjpcIllcIixcIsW4XCI6XCJZXCIsXCLhu7ZcIjpcIllcIixcIuG7tFwiOlwiWVwiLFwixrNcIjpcIllcIixcIsmOXCI6XCJZXCIsXCLhu75cIjpcIllcIixcIuKTj1wiOlwiWlwiLFwi77y6XCI6XCJaXCIsXCLFuVwiOlwiWlwiLFwi4bqQXCI6XCJaXCIsXCLFu1wiOlwiWlwiLFwixb1cIjpcIlpcIixcIuG6klwiOlwiWlwiLFwi4bqUXCI6XCJaXCIsXCLGtVwiOlwiWlwiLFwiyKRcIjpcIlpcIixcIuKxv1wiOlwiWlwiLFwi4rGrXCI6XCJaXCIsXCLqnaJcIjpcIlpcIixcIuKTkFwiOlwiYVwiLFwi772BXCI6XCJhXCIsXCLhuppcIjpcImFcIixcIsOgXCI6XCJhXCIsXCLDoVwiOlwiYVwiLFwiw6JcIjpcImFcIixcIuG6p1wiOlwiYVwiLFwi4bqlXCI6XCJhXCIsXCLhuqtcIjpcImFcIixcIuG6qVwiOlwiYVwiLFwiw6NcIjpcImFcIixcIsSBXCI6XCJhXCIsXCLEg1wiOlwiYVwiLFwi4bqxXCI6XCJhXCIsXCLhuq9cIjpcImFcIixcIuG6tVwiOlwiYVwiLFwi4bqzXCI6XCJhXCIsXCLIp1wiOlwiYVwiLFwix6FcIjpcImFcIixcIsOkXCI6XCJhXCIsXCLHn1wiOlwiYVwiLFwi4bqjXCI6XCJhXCIsXCLDpVwiOlwiYVwiLFwix7tcIjpcImFcIixcIseOXCI6XCJhXCIsXCLIgVwiOlwiYVwiLFwiyINcIjpcImFcIixcIuG6oVwiOlwiYVwiLFwi4bqtXCI6XCJhXCIsXCLhurdcIjpcImFcIixcIuG4gVwiOlwiYVwiLFwixIVcIjpcImFcIixcIuKxpVwiOlwiYVwiLFwiyZBcIjpcImFcIixcIuqcs1wiOlwiYWFcIixcIsOmXCI6XCJhZVwiLFwix71cIjpcImFlXCIsXCLHo1wiOlwiYWVcIixcIuqctVwiOlwiYW9cIixcIuqct1wiOlwiYXVcIixcIuqcuVwiOlwiYXZcIixcIuqcu1wiOlwiYXZcIixcIuqcvVwiOlwiYXlcIixcIuKTkVwiOlwiYlwiLFwi772CXCI6XCJiXCIsXCLhuINcIjpcImJcIixcIuG4hVwiOlwiYlwiLFwi4biHXCI6XCJiXCIsXCLGgFwiOlwiYlwiLFwixoNcIjpcImJcIixcIsmTXCI6XCJiXCIsXCLik5JcIjpcImNcIixcIu+9g1wiOlwiY1wiLFwixIdcIjpcImNcIixcIsSJXCI6XCJjXCIsXCLEi1wiOlwiY1wiLFwixI1cIjpcImNcIixcIsOnXCI6XCJjXCIsXCLhuIlcIjpcImNcIixcIsaIXCI6XCJjXCIsXCLIvFwiOlwiY1wiLFwi6py/XCI6XCJjXCIsXCLihoRcIjpcImNcIixcIuKTk1wiOlwiZFwiLFwi772EXCI6XCJkXCIsXCLhuItcIjpcImRcIixcIsSPXCI6XCJkXCIsXCLhuI1cIjpcImRcIixcIuG4kVwiOlwiZFwiLFwi4biTXCI6XCJkXCIsXCLhuI9cIjpcImRcIixcIsSRXCI6XCJkXCIsXCLGjFwiOlwiZFwiLFwiyZZcIjpcImRcIixcIsmXXCI6XCJkXCIsXCLqnbpcIjpcImRcIixcIsezXCI6XCJkelwiLFwix4ZcIjpcImR6XCIsXCLik5RcIjpcImVcIixcIu+9hVwiOlwiZVwiLFwiw6hcIjpcImVcIixcIsOpXCI6XCJlXCIsXCLDqlwiOlwiZVwiLFwi4buBXCI6XCJlXCIsXCLhur9cIjpcImVcIixcIuG7hVwiOlwiZVwiLFwi4buDXCI6XCJlXCIsXCLhur1cIjpcImVcIixcIsSTXCI6XCJlXCIsXCLhuJVcIjpcImVcIixcIuG4l1wiOlwiZVwiLFwixJVcIjpcImVcIixcIsSXXCI6XCJlXCIsXCLDq1wiOlwiZVwiLFwi4bq7XCI6XCJlXCIsXCLEm1wiOlwiZVwiLFwiyIVcIjpcImVcIixcIsiHXCI6XCJlXCIsXCLhurlcIjpcImVcIixcIuG7h1wiOlwiZVwiLFwiyKlcIjpcImVcIixcIuG4nVwiOlwiZVwiLFwixJlcIjpcImVcIixcIuG4mVwiOlwiZVwiLFwi4bibXCI6XCJlXCIsXCLJh1wiOlwiZVwiLFwiyZtcIjpcImVcIixcIsedXCI6XCJlXCIsXCLik5VcIjpcImZcIixcIu+9hlwiOlwiZlwiLFwi4bifXCI6XCJmXCIsXCLGklwiOlwiZlwiLFwi6p28XCI6XCJmXCIsXCLik5ZcIjpcImdcIixcIu+9h1wiOlwiZ1wiLFwix7VcIjpcImdcIixcIsSdXCI6XCJnXCIsXCLhuKFcIjpcImdcIixcIsSfXCI6XCJnXCIsXCLEoVwiOlwiZ1wiLFwix6dcIjpcImdcIixcIsSjXCI6XCJnXCIsXCLHpVwiOlwiZ1wiLFwiyaBcIjpcImdcIixcIuqeoVwiOlwiZ1wiLFwi4bW5XCI6XCJnXCIsXCLqnb9cIjpcImdcIixcIuKTl1wiOlwiaFwiLFwi772IXCI6XCJoXCIsXCLEpVwiOlwiaFwiLFwi4bijXCI6XCJoXCIsXCLhuKdcIjpcImhcIixcIsifXCI6XCJoXCIsXCLhuKVcIjpcImhcIixcIuG4qVwiOlwiaFwiLFwi4birXCI6XCJoXCIsXCLhupZcIjpcImhcIixcIsSnXCI6XCJoXCIsXCLisahcIjpcImhcIixcIuKxtlwiOlwiaFwiLFwiyaVcIjpcImhcIixcIsaVXCI6XCJodlwiLFwi4pOYXCI6XCJpXCIsXCLvvYlcIjpcImlcIixcIsOsXCI6XCJpXCIsXCLDrVwiOlwiaVwiLFwiw65cIjpcImlcIixcIsSpXCI6XCJpXCIsXCLEq1wiOlwiaVwiLFwixK1cIjpcImlcIixcIsOvXCI6XCJpXCIsXCLhuK9cIjpcImlcIixcIuG7iVwiOlwiaVwiLFwix5BcIjpcImlcIixcIsiJXCI6XCJpXCIsXCLIi1wiOlwiaVwiLFwi4buLXCI6XCJpXCIsXCLEr1wiOlwiaVwiLFwi4bitXCI6XCJpXCIsXCLJqFwiOlwiaVwiLFwixLFcIjpcImlcIixcIuKTmVwiOlwialwiLFwi772KXCI6XCJqXCIsXCLEtVwiOlwialwiLFwix7BcIjpcImpcIixcIsmJXCI6XCJqXCIsXCLik5pcIjpcImtcIixcIu+9i1wiOlwia1wiLFwi4bixXCI6XCJrXCIsXCLHqVwiOlwia1wiLFwi4bizXCI6XCJrXCIsXCLEt1wiOlwia1wiLFwi4bi1XCI6XCJrXCIsXCLGmVwiOlwia1wiLFwi4rGqXCI6XCJrXCIsXCLqnYFcIjpcImtcIixcIuqdg1wiOlwia1wiLFwi6p2FXCI6XCJrXCIsXCLqnqNcIjpcImtcIixcIuKTm1wiOlwibFwiLFwi772MXCI6XCJsXCIsXCLFgFwiOlwibFwiLFwixLpcIjpcImxcIixcIsS+XCI6XCJsXCIsXCLhuLdcIjpcImxcIixcIuG4uVwiOlwibFwiLFwixLxcIjpcImxcIixcIuG4vVwiOlwibFwiLFwi4bi7XCI6XCJsXCIsXCLFv1wiOlwibFwiLFwixYJcIjpcImxcIixcIsaaXCI6XCJsXCIsXCLJq1wiOlwibFwiLFwi4rGhXCI6XCJsXCIsXCLqnYlcIjpcImxcIixcIuqegVwiOlwibFwiLFwi6p2HXCI6XCJsXCIsXCLHiVwiOlwibGpcIixcIuKTnFwiOlwibVwiLFwi772NXCI6XCJtXCIsXCLhuL9cIjpcIm1cIixcIuG5gVwiOlwibVwiLFwi4bmDXCI6XCJtXCIsXCLJsVwiOlwibVwiLFwiya9cIjpcIm1cIixcIuKTnVwiOlwiblwiLFwi772OXCI6XCJuXCIsXCLHuVwiOlwiblwiLFwixYRcIjpcIm5cIixcIsOxXCI6XCJuXCIsXCLhuYVcIjpcIm5cIixcIsWIXCI6XCJuXCIsXCLhuYdcIjpcIm5cIixcIsWGXCI6XCJuXCIsXCLhuYtcIjpcIm5cIixcIuG5iVwiOlwiblwiLFwixp5cIjpcIm5cIixcIsmyXCI6XCJuXCIsXCLFiVwiOlwiblwiLFwi6p6RXCI6XCJuXCIsXCLqnqVcIjpcIm5cIixcIseMXCI6XCJualwiLFwi4pOeXCI6XCJvXCIsXCLvvY9cIjpcIm9cIixcIsOyXCI6XCJvXCIsXCLDs1wiOlwib1wiLFwiw7RcIjpcIm9cIixcIuG7k1wiOlwib1wiLFwi4buRXCI6XCJvXCIsXCLhu5dcIjpcIm9cIixcIuG7lVwiOlwib1wiLFwiw7VcIjpcIm9cIixcIuG5jVwiOlwib1wiLFwiyK1cIjpcIm9cIixcIuG5j1wiOlwib1wiLFwixY1cIjpcIm9cIixcIuG5kVwiOlwib1wiLFwi4bmTXCI6XCJvXCIsXCLFj1wiOlwib1wiLFwiyK9cIjpcIm9cIixcIsixXCI6XCJvXCIsXCLDtlwiOlwib1wiLFwiyKtcIjpcIm9cIixcIuG7j1wiOlwib1wiLFwixZFcIjpcIm9cIixcIseSXCI6XCJvXCIsXCLIjVwiOlwib1wiLFwiyI9cIjpcIm9cIixcIsahXCI6XCJvXCIsXCLhu51cIjpcIm9cIixcIuG7m1wiOlwib1wiLFwi4buhXCI6XCJvXCIsXCLhu59cIjpcIm9cIixcIuG7o1wiOlwib1wiLFwi4buNXCI6XCJvXCIsXCLhu5lcIjpcIm9cIixcIserXCI6XCJvXCIsXCLHrVwiOlwib1wiLFwiw7hcIjpcIm9cIixcIse/XCI6XCJvXCIsXCLJlFwiOlwib1wiLFwi6p2LXCI6XCJvXCIsXCLqnY1cIjpcIm9cIixcIsm1XCI6XCJvXCIsXCLFk1wiOlwib2VcIixcIsajXCI6XCJvaVwiLFwiyKNcIjpcIm91XCIsXCLqnY9cIjpcIm9vXCIsXCLik59cIjpcInBcIixcIu+9kFwiOlwicFwiLFwi4bmVXCI6XCJwXCIsXCLhuZdcIjpcInBcIixcIsalXCI6XCJwXCIsXCLhtb1cIjpcInBcIixcIuqdkVwiOlwicFwiLFwi6p2TXCI6XCJwXCIsXCLqnZVcIjpcInBcIixcIuKToFwiOlwicVwiLFwi772RXCI6XCJxXCIsXCLJi1wiOlwicVwiLFwi6p2XXCI6XCJxXCIsXCLqnZlcIjpcInFcIixcIuKToVwiOlwiclwiLFwi772SXCI6XCJyXCIsXCLFlVwiOlwiclwiLFwi4bmZXCI6XCJyXCIsXCLFmVwiOlwiclwiLFwiyJFcIjpcInJcIixcIsiTXCI6XCJyXCIsXCLhuZtcIjpcInJcIixcIuG5nVwiOlwiclwiLFwixZdcIjpcInJcIixcIuG5n1wiOlwiclwiLFwiyY1cIjpcInJcIixcIsm9XCI6XCJyXCIsXCLqnZtcIjpcInJcIixcIuqep1wiOlwiclwiLFwi6p6DXCI6XCJyXCIsXCLik6JcIjpcInNcIixcIu+9k1wiOlwic1wiLFwiw59cIjpcInNcIixcIsWbXCI6XCJzXCIsXCLhuaVcIjpcInNcIixcIsWdXCI6XCJzXCIsXCLhuaFcIjpcInNcIixcIsWhXCI6XCJzXCIsXCLhuadcIjpcInNcIixcIuG5o1wiOlwic1wiLFwi4bmpXCI6XCJzXCIsXCLImVwiOlwic1wiLFwixZ9cIjpcInNcIixcIsi/XCI6XCJzXCIsXCLqnqlcIjpcInNcIixcIuqehVwiOlwic1wiLFwi4bqbXCI6XCJzXCIsXCLik6NcIjpcInRcIixcIu+9lFwiOlwidFwiLFwi4bmrXCI6XCJ0XCIsXCLhupdcIjpcInRcIixcIsWlXCI6XCJ0XCIsXCLhua1cIjpcInRcIixcIsibXCI6XCJ0XCIsXCLFo1wiOlwidFwiLFwi4bmxXCI6XCJ0XCIsXCLhua9cIjpcInRcIixcIsWnXCI6XCJ0XCIsXCLGrVwiOlwidFwiLFwiyohcIjpcInRcIixcIuKxplwiOlwidFwiLFwi6p6HXCI6XCJ0XCIsXCLqnKlcIjpcInR6XCIsXCLik6RcIjpcInVcIixcIu+9lVwiOlwidVwiLFwiw7lcIjpcInVcIixcIsO6XCI6XCJ1XCIsXCLDu1wiOlwidVwiLFwixalcIjpcInVcIixcIuG5uVwiOlwidVwiLFwixatcIjpcInVcIixcIuG5u1wiOlwidVwiLFwixa1cIjpcInVcIixcIsO8XCI6XCJ1XCIsXCLHnFwiOlwidVwiLFwix5hcIjpcInVcIixcIseWXCI6XCJ1XCIsXCLHmlwiOlwidVwiLFwi4bunXCI6XCJ1XCIsXCLFr1wiOlwidVwiLFwixbFcIjpcInVcIixcIseUXCI6XCJ1XCIsXCLIlVwiOlwidVwiLFwiyJdcIjpcInVcIixcIsawXCI6XCJ1XCIsXCLhu6tcIjpcInVcIixcIuG7qVwiOlwidVwiLFwi4buvXCI6XCJ1XCIsXCLhu61cIjpcInVcIixcIuG7sVwiOlwidVwiLFwi4bulXCI6XCJ1XCIsXCLhubNcIjpcInVcIixcIsWzXCI6XCJ1XCIsXCLhubdcIjpcInVcIixcIuG5tVwiOlwidVwiLFwiyolcIjpcInVcIixcIuKTpVwiOlwidlwiLFwi772WXCI6XCJ2XCIsXCLhub1cIjpcInZcIixcIuG5v1wiOlwidlwiLFwiyotcIjpcInZcIixcIuqdn1wiOlwidlwiLFwiyoxcIjpcInZcIixcIuqdoVwiOlwidnlcIixcIuKTplwiOlwid1wiLFwi772XXCI6XCJ3XCIsXCLhuoFcIjpcIndcIixcIuG6g1wiOlwid1wiLFwixbVcIjpcIndcIixcIuG6h1wiOlwid1wiLFwi4bqFXCI6XCJ3XCIsXCLhuphcIjpcIndcIixcIuG6iVwiOlwid1wiLFwi4rGzXCI6XCJ3XCIsXCLik6dcIjpcInhcIixcIu+9mFwiOlwieFwiLFwi4bqLXCI6XCJ4XCIsXCLhuo1cIjpcInhcIixcIuKTqFwiOlwieVwiLFwi772ZXCI6XCJ5XCIsXCLhu7NcIjpcInlcIixcIsO9XCI6XCJ5XCIsXCLFt1wiOlwieVwiLFwi4bu5XCI6XCJ5XCIsXCLIs1wiOlwieVwiLFwi4bqPXCI6XCJ5XCIsXCLDv1wiOlwieVwiLFwi4bu3XCI6XCJ5XCIsXCLhuplcIjpcInlcIixcIuG7tVwiOlwieVwiLFwixrRcIjpcInlcIixcIsmPXCI6XCJ5XCIsXCLhu79cIjpcInlcIixcIuKTqVwiOlwielwiLFwi772aXCI6XCJ6XCIsXCLFulwiOlwielwiLFwi4bqRXCI6XCJ6XCIsXCLFvFwiOlwielwiLFwixb5cIjpcInpcIixcIuG6k1wiOlwielwiLFwi4bqVXCI6XCJ6XCIsXCLGtlwiOlwielwiLFwiyKVcIjpcInpcIixcIsmAXCI6XCJ6XCIsXCLisaxcIjpcInpcIixcIuqdo1wiOlwielwiLFwizoZcIjpcIs6RXCIsXCLOiFwiOlwizpVcIixcIs6JXCI6XCLOl1wiLFwizopcIjpcIs6ZXCIsXCLOqlwiOlwizplcIixcIs6MXCI6XCLOn1wiLFwizo5cIjpcIs6lXCIsXCLOq1wiOlwizqVcIixcIs6PXCI6XCLOqVwiLFwizqxcIjpcIs6xXCIsXCLOrVwiOlwizrVcIixcIs6uXCI6XCLOt1wiLFwizq9cIjpcIs65XCIsXCLPilwiOlwizrlcIixcIs6QXCI6XCLOuVwiLFwiz4xcIjpcIs6/XCIsXCLPjVwiOlwiz4VcIixcIs+LXCI6XCLPhVwiLFwizrBcIjpcIs+FXCIsXCLPjlwiOlwiz4lcIixcIs+CXCI6XCLPg1wiLFwi4oCZXCI6XCInXCJ9fSksZS5kZWZpbmUoXCJzZWxlY3QyL2RhdGEvYmFzZVwiLFtcIi4uL3V0aWxzXCJdLGZ1bmN0aW9uKGkpe2Z1bmN0aW9uIG4oZSx0KXtuLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpfXJldHVybiBpLkV4dGVuZChuLGkuT2JzZXJ2YWJsZSksbi5wcm90b3R5cGUuY3VycmVudD1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJUaGUgYGN1cnJlbnRgIG1ldGhvZCBtdXN0IGJlIGRlZmluZWQgaW4gY2hpbGQgY2xhc3Nlcy5cIil9LG4ucHJvdG90eXBlLnF1ZXJ5PWZ1bmN0aW9uKGUsdCl7dGhyb3cgbmV3IEVycm9yKFwiVGhlIGBxdWVyeWAgbWV0aG9kIG11c3QgYmUgZGVmaW5lZCBpbiBjaGlsZCBjbGFzc2VzLlwiKX0sbi5wcm90b3R5cGUuYmluZD1mdW5jdGlvbihlLHQpe30sbi5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe30sbi5wcm90b3R5cGUuZ2VuZXJhdGVSZXN1bHRJZD1mdW5jdGlvbihlLHQpe3ZhciBuPWUuaWQrXCItcmVzdWx0LVwiO3JldHVybiBuKz1pLmdlbmVyYXRlQ2hhcnMoNCksbnVsbCE9dC5pZD9uKz1cIi1cIit0LmlkLnRvU3RyaW5nKCk6bis9XCItXCIraS5nZW5lcmF0ZUNoYXJzKDQpLG59LG59KSxlLmRlZmluZShcInNlbGVjdDIvZGF0YS9zZWxlY3RcIixbXCIuL2Jhc2VcIixcIi4uL3V0aWxzXCIsXCJqcXVlcnlcIl0sZnVuY3Rpb24oZSxhLGwpe2Z1bmN0aW9uIG4oZSx0KXt0aGlzLiRlbGVtZW50PWUsdGhpcy5vcHRpb25zPXQsbi5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKX1yZXR1cm4gYS5FeHRlbmQobixlKSxuLnByb3RvdHlwZS5jdXJyZW50PWZ1bmN0aW9uKGUpe3ZhciBuPVtdLGk9dGhpczt0aGlzLiRlbGVtZW50LmZpbmQoXCI6c2VsZWN0ZWRcIikuZWFjaChmdW5jdGlvbigpe3ZhciBlPWwodGhpcyksdD1pLml0ZW0oZSk7bi5wdXNoKHQpfSksZShuKX0sbi5wcm90b3R5cGUuc2VsZWN0PWZ1bmN0aW9uKHIpe3ZhciBvPXRoaXM7aWYoci5zZWxlY3RlZD0hMCxsKHIuZWxlbWVudCkuaXMoXCJvcHRpb25cIikpcmV0dXJuIHIuZWxlbWVudC5zZWxlY3RlZD0hMCx2b2lkIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihcImNoYW5nZVwiKTtpZih0aGlzLiRlbGVtZW50LnByb3AoXCJtdWx0aXBsZVwiKSl0aGlzLmN1cnJlbnQoZnVuY3Rpb24oZSl7dmFyIHQ9W107KHI9W3JdKS5wdXNoLmFwcGx5KHIsZSk7Zm9yKHZhciBuPTA7bjxyLmxlbmd0aDtuKyspe3ZhciBpPXJbbl0uaWQ7LTE9PT1sLmluQXJyYXkoaSx0KSYmdC5wdXNoKGkpfW8uJGVsZW1lbnQudmFsKHQpLG8uJGVsZW1lbnQudHJpZ2dlcihcImNoYW5nZVwiKX0pO2Vsc2V7dmFyIGU9ci5pZDt0aGlzLiRlbGVtZW50LnZhbChlKSx0aGlzLiRlbGVtZW50LnRyaWdnZXIoXCJjaGFuZ2VcIil9fSxuLnByb3RvdHlwZS51bnNlbGVjdD1mdW5jdGlvbihyKXt2YXIgbz10aGlzO2lmKHRoaXMuJGVsZW1lbnQucHJvcChcIm11bHRpcGxlXCIpKXtpZihyLnNlbGVjdGVkPSExLGwoci5lbGVtZW50KS5pcyhcIm9wdGlvblwiKSlyZXR1cm4gci5lbGVtZW50LnNlbGVjdGVkPSExLHZvaWQgdGhpcy4kZWxlbWVudC50cmlnZ2VyKFwiY2hhbmdlXCIpO3RoaXMuY3VycmVudChmdW5jdGlvbihlKXtmb3IodmFyIHQ9W10sbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgaT1lW25dLmlkO2khPT1yLmlkJiYtMT09PWwuaW5BcnJheShpLHQpJiZ0LnB1c2goaSl9by4kZWxlbWVudC52YWwodCksby4kZWxlbWVudC50cmlnZ2VyKFwiY2hhbmdlXCIpfSl9fSxuLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpczsodGhpcy5jb250YWluZXI9ZSkub24oXCJzZWxlY3RcIixmdW5jdGlvbihlKXtuLnNlbGVjdChlLmRhdGEpfSksZS5vbihcInVuc2VsZWN0XCIsZnVuY3Rpb24oZSl7bi51bnNlbGVjdChlLmRhdGEpfSl9LG4ucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLiRlbGVtZW50LmZpbmQoXCIqXCIpLmVhY2goZnVuY3Rpb24oKXthLlJlbW92ZURhdGEodGhpcyl9KX0sbi5wcm90b3R5cGUucXVlcnk9ZnVuY3Rpb24oaSxlKXt2YXIgcj1bXSxvPXRoaXM7dGhpcy4kZWxlbWVudC5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1sKHRoaXMpO2lmKGUuaXMoXCJvcHRpb25cIil8fGUuaXMoXCJvcHRncm91cFwiKSl7dmFyIHQ9by5pdGVtKGUpLG49by5tYXRjaGVzKGksdCk7bnVsbCE9PW4mJnIucHVzaChuKX19KSxlKHtyZXN1bHRzOnJ9KX0sbi5wcm90b3R5cGUuYWRkT3B0aW9ucz1mdW5jdGlvbihlKXthLmFwcGVuZE1hbnkodGhpcy4kZWxlbWVudCxlKX0sbi5wcm90b3R5cGUub3B0aW9uPWZ1bmN0aW9uKGUpe3ZhciB0O2UuY2hpbGRyZW4/KHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGdyb3VwXCIpKS5sYWJlbD1lLnRleHQ6dm9pZCAwIT09KHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSkudGV4dENvbnRlbnQ/dC50ZXh0Q29udGVudD1lLnRleHQ6dC5pbm5lclRleHQ9ZS50ZXh0LHZvaWQgMCE9PWUuaWQmJih0LnZhbHVlPWUuaWQpLGUuZGlzYWJsZWQmJih0LmRpc2FibGVkPSEwKSxlLnNlbGVjdGVkJiYodC5zZWxlY3RlZD0hMCksZS50aXRsZSYmKHQudGl0bGU9ZS50aXRsZSk7dmFyIG49bCh0KSxpPXRoaXMuX25vcm1hbGl6ZUl0ZW0oZSk7cmV0dXJuIGkuZWxlbWVudD10LGEuU3RvcmVEYXRhKHQsXCJkYXRhXCIsaSksbn0sbi5wcm90b3R5cGUuaXRlbT1mdW5jdGlvbihlKXt2YXIgdD17fTtpZihudWxsIT0odD1hLkdldERhdGEoZVswXSxcImRhdGFcIikpKXJldHVybiB0O2lmKGUuaXMoXCJvcHRpb25cIikpdD17aWQ6ZS52YWwoKSx0ZXh0OmUudGV4dCgpLGRpc2FibGVkOmUucHJvcChcImRpc2FibGVkXCIpLHNlbGVjdGVkOmUucHJvcChcInNlbGVjdGVkXCIpLHRpdGxlOmUucHJvcChcInRpdGxlXCIpfTtlbHNlIGlmKGUuaXMoXCJvcHRncm91cFwiKSl7dD17dGV4dDplLnByb3AoXCJsYWJlbFwiKSxjaGlsZHJlbjpbXSx0aXRsZTplLnByb3AoXCJ0aXRsZVwiKX07Zm9yKHZhciBuPWUuY2hpbGRyZW4oXCJvcHRpb25cIiksaT1bXSxyPTA7cjxuLmxlbmd0aDtyKyspe3ZhciBvPWwobltyXSkscz10aGlzLml0ZW0obyk7aS5wdXNoKHMpfXQuY2hpbGRyZW49aX1yZXR1cm4odD10aGlzLl9ub3JtYWxpemVJdGVtKHQpKS5lbGVtZW50PWVbMF0sYS5TdG9yZURhdGEoZVswXSxcImRhdGFcIix0KSx0fSxuLnByb3RvdHlwZS5fbm9ybWFsaXplSXRlbT1mdW5jdGlvbihlKXtlIT09T2JqZWN0KGUpJiYoZT17aWQ6ZSx0ZXh0OmV9KTtyZXR1cm4gbnVsbCE9KGU9bC5leHRlbmQoe30se3RleHQ6XCJcIn0sZSkpLmlkJiYoZS5pZD1lLmlkLnRvU3RyaW5nKCkpLG51bGwhPWUudGV4dCYmKGUudGV4dD1lLnRleHQudG9TdHJpbmcoKSksbnVsbD09ZS5fcmVzdWx0SWQmJmUuaWQmJm51bGwhPXRoaXMuY29udGFpbmVyJiYoZS5fcmVzdWx0SWQ9dGhpcy5nZW5lcmF0ZVJlc3VsdElkKHRoaXMuY29udGFpbmVyLGUpKSxsLmV4dGVuZCh7fSx7c2VsZWN0ZWQ6ITEsZGlzYWJsZWQ6ITF9LGUpfSxuLnByb3RvdHlwZS5tYXRjaGVzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMub3B0aW9ucy5nZXQoXCJtYXRjaGVyXCIpKGUsdCl9LG59KSxlLmRlZmluZShcInNlbGVjdDIvZGF0YS9hcnJheVwiLFtcIi4vc2VsZWN0XCIsXCIuLi91dGlsc1wiLFwianF1ZXJ5XCJdLGZ1bmN0aW9uKGUsZixnKXtmdW5jdGlvbiBpKGUsdCl7dGhpcy5fZGF0YVRvQ29udmVydD10LmdldChcImRhdGFcIil8fFtdLGkuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyxlLHQpfXJldHVybiBmLkV4dGVuZChpLGUpLGkucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24oZSx0KXtpLl9fc3VwZXJfXy5iaW5kLmNhbGwodGhpcyxlLHQpLHRoaXMuYWRkT3B0aW9ucyh0aGlzLmNvbnZlcnRUb09wdGlvbnModGhpcy5fZGF0YVRvQ29udmVydCkpfSxpLnByb3RvdHlwZS5zZWxlY3Q9ZnVuY3Rpb24obil7dmFyIGU9dGhpcy4kZWxlbWVudC5maW5kKFwib3B0aW9uXCIpLmZpbHRlcihmdW5jdGlvbihlLHQpe3JldHVybiB0LnZhbHVlPT1uLmlkLnRvU3RyaW5nKCl9KTswPT09ZS5sZW5ndGgmJihlPXRoaXMub3B0aW9uKG4pLHRoaXMuYWRkT3B0aW9ucyhlKSksaS5fX3N1cGVyX18uc2VsZWN0LmNhbGwodGhpcyxuKX0saS5wcm90b3R5cGUuY29udmVydFRvT3B0aW9ucz1mdW5jdGlvbihlKXt2YXIgdD10aGlzLG49dGhpcy4kZWxlbWVudC5maW5kKFwib3B0aW9uXCIpLGk9bi5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gdC5pdGVtKGcodGhpcykpLmlkfSkuZ2V0KCkscj1bXTtmdW5jdGlvbiBvKGUpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBnKHRoaXMpLnZhbCgpPT1lLmlkfX1mb3IodmFyIHM9MDtzPGUubGVuZ3RoO3MrKyl7dmFyIGE9dGhpcy5fbm9ybWFsaXplSXRlbShlW3NdKTtpZigwPD1nLmluQXJyYXkoYS5pZCxpKSl7dmFyIGw9bi5maWx0ZXIobyhhKSksYz10aGlzLml0ZW0obCksdT1nLmV4dGVuZCghMCx7fSxhLGMpLGQ9dGhpcy5vcHRpb24odSk7bC5yZXBsYWNlV2l0aChkKX1lbHNle3ZhciBwPXRoaXMub3B0aW9uKGEpO2lmKGEuY2hpbGRyZW4pe3ZhciBoPXRoaXMuY29udmVydFRvT3B0aW9ucyhhLmNoaWxkcmVuKTtmLmFwcGVuZE1hbnkocCxoKX1yLnB1c2gocCl9fXJldHVybiByfSxpfSksZS5kZWZpbmUoXCJzZWxlY3QyL2RhdGEvYWpheFwiLFtcIi4vYXJyYXlcIixcIi4uL3V0aWxzXCIsXCJqcXVlcnlcIl0sZnVuY3Rpb24oZSx0LG8pe2Z1bmN0aW9uIG4oZSx0KXt0aGlzLmFqYXhPcHRpb25zPXRoaXMuX2FwcGx5RGVmYXVsdHModC5nZXQoXCJhamF4XCIpKSxudWxsIT10aGlzLmFqYXhPcHRpb25zLnByb2Nlc3NSZXN1bHRzJiYodGhpcy5wcm9jZXNzUmVzdWx0cz10aGlzLmFqYXhPcHRpb25zLnByb2Nlc3NSZXN1bHRzKSxuLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsZSx0KX1yZXR1cm4gdC5FeHRlbmQobixlKSxuLnByb3RvdHlwZS5fYXBwbHlEZWZhdWx0cz1mdW5jdGlvbihlKXt2YXIgdD17ZGF0YTpmdW5jdGlvbihlKXtyZXR1cm4gby5leHRlbmQoe30sZSx7cTplLnRlcm19KX0sdHJhbnNwb3J0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT1vLmFqYXgoZSk7cmV0dXJuIGkudGhlbih0KSxpLmZhaWwobiksaX19O3JldHVybiBvLmV4dGVuZCh7fSx0LGUsITApfSxuLnByb3RvdHlwZS5wcm9jZXNzUmVzdWx0cz1mdW5jdGlvbihlKXtyZXR1cm4gZX0sbi5wcm90b3R5cGUucXVlcnk9ZnVuY3Rpb24obixpKXt2YXIgcj10aGlzO251bGwhPXRoaXMuX3JlcXVlc3QmJihvLmlzRnVuY3Rpb24odGhpcy5fcmVxdWVzdC5hYm9ydCkmJnRoaXMuX3JlcXVlc3QuYWJvcnQoKSx0aGlzLl9yZXF1ZXN0PW51bGwpO3ZhciB0PW8uZXh0ZW5kKHt0eXBlOlwiR0VUXCJ9LHRoaXMuYWpheE9wdGlvbnMpO2Z1bmN0aW9uIGUoKXt2YXIgZT10LnRyYW5zcG9ydCh0LGZ1bmN0aW9uKGUpe3ZhciB0PXIucHJvY2Vzc1Jlc3VsdHMoZSxuKTtyLm9wdGlvbnMuZ2V0KFwiZGVidWdcIikmJndpbmRvdy5jb25zb2xlJiZjb25zb2xlLmVycm9yJiYodCYmdC5yZXN1bHRzJiZvLmlzQXJyYXkodC5yZXN1bHRzKXx8Y29uc29sZS5lcnJvcihcIlNlbGVjdDI6IFRoZSBBSkFYIHJlc3VsdHMgZGlkIG5vdCByZXR1cm4gYW4gYXJyYXkgaW4gdGhlIGByZXN1bHRzYCBrZXkgb2YgdGhlIHJlc3BvbnNlLlwiKSksaSh0KX0sZnVuY3Rpb24oKXtcInN0YXR1c1wiaW4gZSYmKDA9PT1lLnN0YXR1c3x8XCIwXCI9PT1lLnN0YXR1cyl8fHIudHJpZ2dlcihcInJlc3VsdHM6bWVzc2FnZVwiLHttZXNzYWdlOlwiZXJyb3JMb2FkaW5nXCJ9KX0pO3IuX3JlcXVlc3Q9ZX1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnVybCYmKHQudXJsPXQudXJsLmNhbGwodGhpcy4kZWxlbWVudCxuKSksXCJmdW5jdGlvblwiPT10eXBlb2YgdC5kYXRhJiYodC5kYXRhPXQuZGF0YS5jYWxsKHRoaXMuJGVsZW1lbnQsbikpLHRoaXMuYWpheE9wdGlvbnMuZGVsYXkmJm51bGwhPW4udGVybT8odGhpcy5fcXVlcnlUaW1lb3V0JiZ3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3F1ZXJ5VGltZW91dCksdGhpcy5fcXVlcnlUaW1lb3V0PXdpbmRvdy5zZXRUaW1lb3V0KGUsdGhpcy5hamF4T3B0aW9ucy5kZWxheSkpOmUoKX0sbn0pLGUuZGVmaW5lKFwic2VsZWN0Mi9kYXRhL3RhZ3NcIixbXCJqcXVlcnlcIl0sZnVuY3Rpb24odSl7ZnVuY3Rpb24gZShlLHQsbil7dmFyIGk9bi5nZXQoXCJ0YWdzXCIpLHI9bi5nZXQoXCJjcmVhdGVUYWdcIik7dm9pZCAwIT09ciYmKHRoaXMuY3JlYXRlVGFnPXIpO3ZhciBvPW4uZ2V0KFwiaW5zZXJ0VGFnXCIpO2lmKHZvaWQgMCE9PW8mJih0aGlzLmluc2VydFRhZz1vKSxlLmNhbGwodGhpcyx0LG4pLHUuaXNBcnJheShpKSlmb3IodmFyIHM9MDtzPGkubGVuZ3RoO3MrKyl7dmFyIGE9aVtzXSxsPXRoaXMuX25vcm1hbGl6ZUl0ZW0oYSksYz10aGlzLm9wdGlvbihsKTt0aGlzLiRlbGVtZW50LmFwcGVuZChjKX19cmV0dXJuIGUucHJvdG90eXBlLnF1ZXJ5PWZ1bmN0aW9uKGUsYyx1KXt2YXIgZD10aGlzO3RoaXMuX3JlbW92ZU9sZFRhZ3MoKSxudWxsIT1jLnRlcm0mJm51bGw9PWMucGFnZT9lLmNhbGwodGhpcyxjLGZ1bmN0aW9uIGUodCxuKXtmb3IodmFyIGk9dC5yZXN1bHRzLHI9MDtyPGkubGVuZ3RoO3IrKyl7dmFyIG89aVtyXSxzPW51bGwhPW8uY2hpbGRyZW4mJiFlKHtyZXN1bHRzOm8uY2hpbGRyZW59LCEwKTtpZigoby50ZXh0fHxcIlwiKS50b1VwcGVyQ2FzZSgpPT09KGMudGVybXx8XCJcIikudG9VcHBlckNhc2UoKXx8cylyZXR1cm4hbiYmKHQuZGF0YT1pLHZvaWQgdSh0KSl9aWYobilyZXR1cm4hMDt2YXIgYT1kLmNyZWF0ZVRhZyhjKTtpZihudWxsIT1hKXt2YXIgbD1kLm9wdGlvbihhKTtsLmF0dHIoXCJkYXRhLXNlbGVjdDItdGFnXCIsITApLGQuYWRkT3B0aW9ucyhbbF0pLGQuaW5zZXJ0VGFnKGksYSl9dC5yZXN1bHRzPWksdSh0KX0pOmUuY2FsbCh0aGlzLGMsdSl9LGUucHJvdG90eXBlLmNyZWF0ZVRhZz1mdW5jdGlvbihlLHQpe3ZhciBuPXUudHJpbSh0LnRlcm0pO3JldHVyblwiXCI9PT1uP251bGw6e2lkOm4sdGV4dDpufX0sZS5wcm90b3R5cGUuaW5zZXJ0VGFnPWZ1bmN0aW9uKGUsdCxuKXt0LnVuc2hpZnQobil9LGUucHJvdG90eXBlLl9yZW1vdmVPbGRUYWdzPWZ1bmN0aW9uKGUpe3RoaXMuJGVsZW1lbnQuZmluZChcIm9wdGlvbltkYXRhLXNlbGVjdDItdGFnXVwiKS5lYWNoKGZ1bmN0aW9uKCl7dGhpcy5zZWxlY3RlZHx8dSh0aGlzKS5yZW1vdmUoKX0pfSxlfSksZS5kZWZpbmUoXCJzZWxlY3QyL2RhdGEvdG9rZW5pemVyXCIsW1wianF1ZXJ5XCJdLGZ1bmN0aW9uKGQpe2Z1bmN0aW9uIGUoZSx0LG4pe3ZhciBpPW4uZ2V0KFwidG9rZW5pemVyXCIpO3ZvaWQgMCE9PWkmJih0aGlzLnRva2VuaXplcj1pKSxlLmNhbGwodGhpcyx0LG4pfXJldHVybiBlLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGUsdCxuKXtlLmNhbGwodGhpcyx0LG4pLHRoaXMuJHNlYXJjaD10LmRyb3Bkb3duLiRzZWFyY2h8fHQuc2VsZWN0aW9uLiRzZWFyY2h8fG4uZmluZChcIi5zZWxlY3QyLXNlYXJjaF9fZmllbGRcIil9LGUucHJvdG90eXBlLnF1ZXJ5PWZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10aGlzO3QudGVybT10LnRlcm18fFwiXCI7dmFyIHI9dGhpcy50b2tlbml6ZXIodCx0aGlzLm9wdGlvbnMsZnVuY3Rpb24oZSl7dmFyIHQ9aS5fbm9ybWFsaXplSXRlbShlKTtpZighaS4kZWxlbWVudC5maW5kKFwib3B0aW9uXCIpLmZpbHRlcihmdW5jdGlvbigpe3JldHVybiBkKHRoaXMpLnZhbCgpPT09dC5pZH0pLmxlbmd0aCl7dmFyIG49aS5vcHRpb24odCk7bi5hdHRyKFwiZGF0YS1zZWxlY3QyLXRhZ1wiLCEwKSxpLl9yZW1vdmVPbGRUYWdzKCksaS5hZGRPcHRpb25zKFtuXSl9IWZ1bmN0aW9uKGUpe2kudHJpZ2dlcihcInNlbGVjdFwiLHtkYXRhOmV9KX0odCl9KTtyLnRlcm0hPT10LnRlcm0mJih0aGlzLiRzZWFyY2gubGVuZ3RoJiYodGhpcy4kc2VhcmNoLnZhbChyLnRlcm0pLHRoaXMuJHNlYXJjaC50cmlnZ2VyKFwiZm9jdXNcIikpLHQudGVybT1yLnRlcm0pLGUuY2FsbCh0aGlzLHQsbil9LGUucHJvdG90eXBlLnRva2VuaXplcj1mdW5jdGlvbihlLHQsbixpKXtmb3IodmFyIHI9bi5nZXQoXCJ0b2tlblNlcGFyYXRvcnNcIil8fFtdLG89dC50ZXJtLHM9MCxhPXRoaXMuY3JlYXRlVGFnfHxmdW5jdGlvbihlKXtyZXR1cm57aWQ6ZS50ZXJtLHRleHQ6ZS50ZXJtfX07czxvLmxlbmd0aDspe3ZhciBsPW9bc107aWYoLTEhPT1kLmluQXJyYXkobCxyKSl7dmFyIGM9by5zdWJzdHIoMCxzKSx1PWEoZC5leHRlbmQoe30sdCx7dGVybTpjfSkpO251bGwhPXU/KGkodSksbz1vLnN1YnN0cihzKzEpfHxcIlwiLHM9MCk6cysrfWVsc2UgcysrfXJldHVybnt0ZXJtOm99fSxlfSksZS5kZWZpbmUoXCJzZWxlY3QyL2RhdGEvbWluaW11bUlucHV0TGVuZ3RoXCIsW10sZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCxuKXt0aGlzLm1pbmltdW1JbnB1dExlbmd0aD1uLmdldChcIm1pbmltdW1JbnB1dExlbmd0aFwiKSxlLmNhbGwodGhpcyx0LG4pfXJldHVybiBlLnByb3RvdHlwZS5xdWVyeT1mdW5jdGlvbihlLHQsbil7dC50ZXJtPXQudGVybXx8XCJcIix0LnRlcm0ubGVuZ3RoPHRoaXMubWluaW11bUlucHV0TGVuZ3RoP3RoaXMudHJpZ2dlcihcInJlc3VsdHM6bWVzc2FnZVwiLHttZXNzYWdlOlwiaW5wdXRUb29TaG9ydFwiLGFyZ3M6e21pbmltdW06dGhpcy5taW5pbXVtSW5wdXRMZW5ndGgsaW5wdXQ6dC50ZXJtLHBhcmFtczp0fX0pOmUuY2FsbCh0aGlzLHQsbil9LGV9KSxlLmRlZmluZShcInNlbGVjdDIvZGF0YS9tYXhpbXVtSW5wdXRMZW5ndGhcIixbXSxmdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0LG4pe3RoaXMubWF4aW11bUlucHV0TGVuZ3RoPW4uZ2V0KFwibWF4aW11bUlucHV0TGVuZ3RoXCIpLGUuY2FsbCh0aGlzLHQsbil9cmV0dXJuIGUucHJvdG90eXBlLnF1ZXJ5PWZ1bmN0aW9uKGUsdCxuKXt0LnRlcm09dC50ZXJtfHxcIlwiLDA8dGhpcy5tYXhpbXVtSW5wdXRMZW5ndGgmJnQudGVybS5sZW5ndGg+dGhpcy5tYXhpbXVtSW5wdXRMZW5ndGg/dGhpcy50cmlnZ2VyKFwicmVzdWx0czptZXNzYWdlXCIse21lc3NhZ2U6XCJpbnB1dFRvb0xvbmdcIixhcmdzOnttYXhpbXVtOnRoaXMubWF4aW11bUlucHV0TGVuZ3RoLGlucHV0OnQudGVybSxwYXJhbXM6dH19KTplLmNhbGwodGhpcyx0LG4pfSxlfSksZS5kZWZpbmUoXCJzZWxlY3QyL2RhdGEvbWF4aW11bVNlbGVjdGlvbkxlbmd0aFwiLFtdLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQsbil7dGhpcy5tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoPW4uZ2V0KFwibWF4aW11bVNlbGVjdGlvbkxlbmd0aFwiKSxlLmNhbGwodGhpcyx0LG4pfXJldHVybiBlLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10aGlzO2UuY2FsbCh0aGlzLHQsbiksdC5vbihcInNlbGVjdFwiLGZ1bmN0aW9uKCl7aS5fY2hlY2tJZk1heGltdW1TZWxlY3RlZCgpfSl9LGUucHJvdG90eXBlLnF1ZXJ5PWZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10aGlzO3RoaXMuX2NoZWNrSWZNYXhpbXVtU2VsZWN0ZWQoZnVuY3Rpb24oKXtlLmNhbGwoaSx0LG4pfSl9LGUucHJvdG90eXBlLl9jaGVja0lmTWF4aW11bVNlbGVjdGVkPWZ1bmN0aW9uKGUsbil7dmFyIGk9dGhpczt0aGlzLmN1cnJlbnQoZnVuY3Rpb24oZSl7dmFyIHQ9bnVsbCE9ZT9lLmxlbmd0aDowOzA8aS5tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoJiZ0Pj1pLm1heGltdW1TZWxlY3Rpb25MZW5ndGg/aS50cmlnZ2VyKFwicmVzdWx0czptZXNzYWdlXCIse21lc3NhZ2U6XCJtYXhpbXVtU2VsZWN0ZWRcIixhcmdzOnttYXhpbXVtOmkubWF4aW11bVNlbGVjdGlvbkxlbmd0aH19KTpuJiZuKCl9KX0sZX0pLGUuZGVmaW5lKFwic2VsZWN0Mi9kcm9wZG93blwiLFtcImpxdWVyeVwiLFwiLi91dGlsc1wiXSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4oZSx0KXt0aGlzLiRlbGVtZW50PWUsdGhpcy5vcHRpb25zPXQsbi5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKX1yZXR1cm4gZS5FeHRlbmQobixlLk9ic2VydmFibGUpLG4ucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3ZhciBlPXQoJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1kcm9wZG93blwiPjxzcGFuIGNsYXNzPVwic2VsZWN0Mi1yZXN1bHRzXCI+PC9zcGFuPjwvc3Bhbj4nKTtyZXR1cm4gZS5hdHRyKFwiZGlyXCIsdGhpcy5vcHRpb25zLmdldChcImRpclwiKSksdGhpcy4kZHJvcGRvd249ZX0sbi5wcm90b3R5cGUuYmluZD1mdW5jdGlvbigpe30sbi5wcm90b3R5cGUucG9zaXRpb249ZnVuY3Rpb24oZSx0KXt9LG4ucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLiRkcm9wZG93bi5yZW1vdmUoKX0sbn0pLGUuZGVmaW5lKFwic2VsZWN0Mi9kcm9wZG93bi9zZWFyY2hcIixbXCJqcXVlcnlcIixcIi4uL3V0aWxzXCJdLGZ1bmN0aW9uKG8sZSl7ZnVuY3Rpb24gdCgpe31yZXR1cm4gdC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKGUpe3ZhciB0PWUuY2FsbCh0aGlzKSxuPW8oJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWFyY2ggc2VsZWN0Mi1zZWFyY2gtLWRyb3Bkb3duXCI+PGlucHV0IGNsYXNzPVwic2VsZWN0Mi1zZWFyY2hfX2ZpZWxkXCIgdHlwZT1cInNlYXJjaFwiIHRhYmluZGV4PVwiLTFcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiIHJvbGU9XCJzZWFyY2hib3hcIiBhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIiAvPjwvc3Bhbj4nKTtyZXR1cm4gdGhpcy4kc2VhcmNoQ29udGFpbmVyPW4sdGhpcy4kc2VhcmNoPW4uZmluZChcImlucHV0XCIpLHQucHJlcGVuZChuKSx0fSx0LnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10aGlzLHI9dC5pZCtcIi1yZXN1bHRzXCI7ZS5jYWxsKHRoaXMsdCxuKSx0aGlzLiRzZWFyY2gub24oXCJrZXlkb3duXCIsZnVuY3Rpb24oZSl7aS50cmlnZ2VyKFwia2V5cHJlc3NcIixlKSxpLl9rZXlVcFByZXZlbnRlZD1lLmlzRGVmYXVsdFByZXZlbnRlZCgpfSksdGhpcy4kc2VhcmNoLm9uKFwiaW5wdXRcIixmdW5jdGlvbihlKXtvKHRoaXMpLm9mZihcImtleXVwXCIpfSksdGhpcy4kc2VhcmNoLm9uKFwia2V5dXAgaW5wdXRcIixmdW5jdGlvbihlKXtpLmhhbmRsZVNlYXJjaChlKX0pLHQub24oXCJvcGVuXCIsZnVuY3Rpb24oKXtpLiRzZWFyY2guYXR0cihcInRhYmluZGV4XCIsMCksaS4kc2VhcmNoLmF0dHIoXCJhcmlhLWNvbnRyb2xzXCIsciksaS4kc2VhcmNoLnRyaWdnZXIoXCJmb2N1c1wiKSx3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe2kuJHNlYXJjaC50cmlnZ2VyKFwiZm9jdXNcIil9LDApfSksdC5vbihcImNsb3NlXCIsZnVuY3Rpb24oKXtpLiRzZWFyY2guYXR0cihcInRhYmluZGV4XCIsLTEpLGkuJHNlYXJjaC5yZW1vdmVBdHRyKFwiYXJpYS1jb250cm9sc1wiKSxpLiRzZWFyY2gucmVtb3ZlQXR0cihcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiKSxpLiRzZWFyY2gudmFsKFwiXCIpLGkuJHNlYXJjaC50cmlnZ2VyKFwiYmx1clwiKX0pLHQub24oXCJmb2N1c1wiLGZ1bmN0aW9uKCl7dC5pc09wZW4oKXx8aS4kc2VhcmNoLnRyaWdnZXIoXCJmb2N1c1wiKX0pLHQub24oXCJyZXN1bHRzOmFsbFwiLGZ1bmN0aW9uKGUpe251bGwhPWUucXVlcnkudGVybSYmXCJcIiE9PWUucXVlcnkudGVybXx8KGkuc2hvd1NlYXJjaChlKT9pLiRzZWFyY2hDb250YWluZXIucmVtb3ZlQ2xhc3MoXCJzZWxlY3QyLXNlYXJjaC0taGlkZVwiKTppLiRzZWFyY2hDb250YWluZXIuYWRkQ2xhc3MoXCJzZWxlY3QyLXNlYXJjaC0taGlkZVwiKSl9KSx0Lm9uKFwicmVzdWx0czpmb2N1c1wiLGZ1bmN0aW9uKGUpe2UuZGF0YS5fcmVzdWx0SWQ/aS4kc2VhcmNoLmF0dHIoXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIixlLmRhdGEuX3Jlc3VsdElkKTppLiRzZWFyY2gucmVtb3ZlQXR0cihcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiKX0pfSx0LnByb3RvdHlwZS5oYW5kbGVTZWFyY2g9ZnVuY3Rpb24oZSl7aWYoIXRoaXMuX2tleVVwUHJldmVudGVkKXt2YXIgdD10aGlzLiRzZWFyY2gudmFsKCk7dGhpcy50cmlnZ2VyKFwicXVlcnlcIix7dGVybTp0fSl9dGhpcy5fa2V5VXBQcmV2ZW50ZWQ9ITF9LHQucHJvdG90eXBlLnNob3dTZWFyY2g9ZnVuY3Rpb24oZSx0KXtyZXR1cm4hMH0sdH0pLGUuZGVmaW5lKFwic2VsZWN0Mi9kcm9wZG93bi9oaWRlUGxhY2Vob2xkZXJcIixbXSxmdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0LG4saSl7dGhpcy5wbGFjZWhvbGRlcj10aGlzLm5vcm1hbGl6ZVBsYWNlaG9sZGVyKG4uZ2V0KFwicGxhY2Vob2xkZXJcIikpLGUuY2FsbCh0aGlzLHQsbixpKX1yZXR1cm4gZS5wcm90b3R5cGUuYXBwZW5kPWZ1bmN0aW9uKGUsdCl7dC5yZXN1bHRzPXRoaXMucmVtb3ZlUGxhY2Vob2xkZXIodC5yZXN1bHRzKSxlLmNhbGwodGhpcyx0KX0sZS5wcm90b3R5cGUubm9ybWFsaXplUGxhY2Vob2xkZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9e2lkOlwiXCIsdGV4dDp0fSksdH0sZS5wcm90b3R5cGUucmVtb3ZlUGxhY2Vob2xkZXI9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49dC5zbGljZSgwKSxpPXQubGVuZ3RoLTE7MDw9aTtpLS0pe3ZhciByPXRbaV07dGhpcy5wbGFjZWhvbGRlci5pZD09PXIuaWQmJm4uc3BsaWNlKGksMSl9cmV0dXJuIG59LGV9KSxlLmRlZmluZShcInNlbGVjdDIvZHJvcGRvd24vaW5maW5pdGVTY3JvbGxcIixbXCJqcXVlcnlcIl0sZnVuY3Rpb24obil7ZnVuY3Rpb24gZShlLHQsbixpKXt0aGlzLmxhc3RQYXJhbXM9e30sZS5jYWxsKHRoaXMsdCxuLGkpLHRoaXMuJGxvYWRpbmdNb3JlPXRoaXMuY3JlYXRlTG9hZGluZ01vcmUoKSx0aGlzLmxvYWRpbmc9ITF9cmV0dXJuIGUucHJvdG90eXBlLmFwcGVuZD1mdW5jdGlvbihlLHQpe3RoaXMuJGxvYWRpbmdNb3JlLnJlbW92ZSgpLHRoaXMubG9hZGluZz0hMSxlLmNhbGwodGhpcyx0KSx0aGlzLnNob3dMb2FkaW5nTW9yZSh0KSYmKHRoaXMuJHJlc3VsdHMuYXBwZW5kKHRoaXMuJGxvYWRpbmdNb3JlKSx0aGlzLmxvYWRNb3JlSWZOZWVkZWQoKSl9LGUucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXRoaXM7ZS5jYWxsKHRoaXMsdCxuKSx0Lm9uKFwicXVlcnlcIixmdW5jdGlvbihlKXtpLmxhc3RQYXJhbXM9ZSxpLmxvYWRpbmc9ITB9KSx0Lm9uKFwicXVlcnk6YXBwZW5kXCIsZnVuY3Rpb24oZSl7aS5sYXN0UGFyYW1zPWUsaS5sb2FkaW5nPSEwfSksdGhpcy4kcmVzdWx0cy5vbihcInNjcm9sbFwiLHRoaXMubG9hZE1vcmVJZk5lZWRlZC5iaW5kKHRoaXMpKX0sZS5wcm90b3R5cGUubG9hZE1vcmVJZk5lZWRlZD1mdW5jdGlvbigpe3ZhciBlPW4uY29udGFpbnMoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LHRoaXMuJGxvYWRpbmdNb3JlWzBdKTtpZighdGhpcy5sb2FkaW5nJiZlKXt2YXIgdD10aGlzLiRyZXN1bHRzLm9mZnNldCgpLnRvcCt0aGlzLiRyZXN1bHRzLm91dGVySGVpZ2h0KCExKTt0aGlzLiRsb2FkaW5nTW9yZS5vZmZzZXQoKS50b3ArdGhpcy4kbG9hZGluZ01vcmUub3V0ZXJIZWlnaHQoITEpPD10KzUwJiZ0aGlzLmxvYWRNb3JlKCl9fSxlLnByb3RvdHlwZS5sb2FkTW9yZT1mdW5jdGlvbigpe3RoaXMubG9hZGluZz0hMDt2YXIgZT1uLmV4dGVuZCh7fSx7cGFnZToxfSx0aGlzLmxhc3RQYXJhbXMpO2UucGFnZSsrLHRoaXMudHJpZ2dlcihcInF1ZXJ5OmFwcGVuZFwiLGUpfSxlLnByb3RvdHlwZS5zaG93TG9hZGluZ01vcmU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC5wYWdpbmF0aW9uJiZ0LnBhZ2luYXRpb24ubW9yZX0sZS5wcm90b3R5cGUuY3JlYXRlTG9hZGluZ01vcmU9ZnVuY3Rpb24oKXt2YXIgZT1uKCc8bGkgY2xhc3M9XCJzZWxlY3QyLXJlc3VsdHNfX29wdGlvbiBzZWxlY3QyLXJlc3VsdHNfX29wdGlvbi0tbG9hZC1tb3JlXCJyb2xlPVwib3B0aW9uXCIgYXJpYS1kaXNhYmxlZD1cInRydWVcIj48L2xpPicpLHQ9dGhpcy5vcHRpb25zLmdldChcInRyYW5zbGF0aW9uc1wiKS5nZXQoXCJsb2FkaW5nTW9yZVwiKTtyZXR1cm4gZS5odG1sKHQodGhpcy5sYXN0UGFyYW1zKSksZX0sZX0pLGUuZGVmaW5lKFwic2VsZWN0Mi9kcm9wZG93bi9hdHRhY2hCb2R5XCIsW1wianF1ZXJ5XCIsXCIuLi91dGlsc1wiXSxmdW5jdGlvbihmLGEpe2Z1bmN0aW9uIGUoZSx0LG4pe3RoaXMuJGRyb3Bkb3duUGFyZW50PWYobi5nZXQoXCJkcm9wZG93blBhcmVudFwiKXx8ZG9jdW1lbnQuYm9keSksZS5jYWxsKHRoaXMsdCxuKX1yZXR1cm4gZS5wcm90b3R5cGUuYmluZD1mdW5jdGlvbihlLHQsbil7dmFyIGk9dGhpcztlLmNhbGwodGhpcyx0LG4pLHQub24oXCJvcGVuXCIsZnVuY3Rpb24oKXtpLl9zaG93RHJvcGRvd24oKSxpLl9hdHRhY2hQb3NpdGlvbmluZ0hhbmRsZXIodCksaS5fYmluZENvbnRhaW5lclJlc3VsdEhhbmRsZXJzKHQpfSksdC5vbihcImNsb3NlXCIsZnVuY3Rpb24oKXtpLl9oaWRlRHJvcGRvd24oKSxpLl9kZXRhY2hQb3NpdGlvbmluZ0hhbmRsZXIodCl9KSx0aGlzLiRkcm9wZG93bkNvbnRhaW5lci5vbihcIm1vdXNlZG93blwiLGZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCl9KX0sZS5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbihlKXtlLmNhbGwodGhpcyksdGhpcy4kZHJvcGRvd25Db250YWluZXIucmVtb3ZlKCl9LGUucHJvdG90eXBlLnBvc2l0aW9uPWZ1bmN0aW9uKGUsdCxuKXt0LmF0dHIoXCJjbGFzc1wiLG4uYXR0cihcImNsYXNzXCIpKSx0LnJlbW92ZUNsYXNzKFwic2VsZWN0MlwiKSx0LmFkZENsYXNzKFwic2VsZWN0Mi1jb250YWluZXItLW9wZW5cIiksdC5jc3Moe3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix0b3A6LTk5OTk5OX0pLHRoaXMuJGNvbnRhaW5lcj1ufSxlLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oZSl7dmFyIHQ9ZihcIjxzcGFuPjwvc3Bhbj5cIiksbj1lLmNhbGwodGhpcyk7cmV0dXJuIHQuYXBwZW5kKG4pLHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyPXR9LGUucHJvdG90eXBlLl9oaWRlRHJvcGRvd249ZnVuY3Rpb24oZSl7dGhpcy4kZHJvcGRvd25Db250YWluZXIuZGV0YWNoKCl9LGUucHJvdG90eXBlLl9iaW5kQ29udGFpbmVyUmVzdWx0SGFuZGxlcnM9ZnVuY3Rpb24oZSx0KXtpZighdGhpcy5fY29udGFpbmVyUmVzdWx0c0hhbmRsZXJzQm91bmQpe3ZhciBuPXRoaXM7dC5vbihcInJlc3VsdHM6YWxsXCIsZnVuY3Rpb24oKXtuLl9wb3NpdGlvbkRyb3Bkb3duKCksbi5fcmVzaXplRHJvcGRvd24oKX0pLHQub24oXCJyZXN1bHRzOmFwcGVuZFwiLGZ1bmN0aW9uKCl7bi5fcG9zaXRpb25Ecm9wZG93bigpLG4uX3Jlc2l6ZURyb3Bkb3duKCl9KSx0Lm9uKFwicmVzdWx0czptZXNzYWdlXCIsZnVuY3Rpb24oKXtuLl9wb3NpdGlvbkRyb3Bkb3duKCksbi5fcmVzaXplRHJvcGRvd24oKX0pLHQub24oXCJzZWxlY3RcIixmdW5jdGlvbigpe24uX3Bvc2l0aW9uRHJvcGRvd24oKSxuLl9yZXNpemVEcm9wZG93bigpfSksdC5vbihcInVuc2VsZWN0XCIsZnVuY3Rpb24oKXtuLl9wb3NpdGlvbkRyb3Bkb3duKCksbi5fcmVzaXplRHJvcGRvd24oKX0pLHRoaXMuX2NvbnRhaW5lclJlc3VsdHNIYW5kbGVyc0JvdW5kPSEwfX0sZS5wcm90b3R5cGUuX2F0dGFjaFBvc2l0aW9uaW5nSGFuZGxlcj1mdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMsaT1cInNjcm9sbC5zZWxlY3QyLlwiK3QuaWQscj1cInJlc2l6ZS5zZWxlY3QyLlwiK3QuaWQsbz1cIm9yaWVudGF0aW9uY2hhbmdlLnNlbGVjdDIuXCIrdC5pZCxzPXRoaXMuJGNvbnRhaW5lci5wYXJlbnRzKCkuZmlsdGVyKGEuaGFzU2Nyb2xsKTtzLmVhY2goZnVuY3Rpb24oKXthLlN0b3JlRGF0YSh0aGlzLFwic2VsZWN0Mi1zY3JvbGwtcG9zaXRpb25cIix7eDpmKHRoaXMpLnNjcm9sbExlZnQoKSx5OmYodGhpcykuc2Nyb2xsVG9wKCl9KX0pLHMub24oaSxmdW5jdGlvbihlKXt2YXIgdD1hLkdldERhdGEodGhpcyxcInNlbGVjdDItc2Nyb2xsLXBvc2l0aW9uXCIpO2YodGhpcykuc2Nyb2xsVG9wKHQueSl9KSxmKHdpbmRvdykub24oaStcIiBcIityK1wiIFwiK28sZnVuY3Rpb24oZSl7bi5fcG9zaXRpb25Ecm9wZG93bigpLG4uX3Jlc2l6ZURyb3Bkb3duKCl9KX0sZS5wcm90b3R5cGUuX2RldGFjaFBvc2l0aW9uaW5nSGFuZGxlcj1mdW5jdGlvbihlLHQpe3ZhciBuPVwic2Nyb2xsLnNlbGVjdDIuXCIrdC5pZCxpPVwicmVzaXplLnNlbGVjdDIuXCIrdC5pZCxyPVwib3JpZW50YXRpb25jaGFuZ2Uuc2VsZWN0Mi5cIit0LmlkO3RoaXMuJGNvbnRhaW5lci5wYXJlbnRzKCkuZmlsdGVyKGEuaGFzU2Nyb2xsKS5vZmYobiksZih3aW5kb3cpLm9mZihuK1wiIFwiK2krXCIgXCIrcil9LGUucHJvdG90eXBlLl9wb3NpdGlvbkRyb3Bkb3duPWZ1bmN0aW9uKCl7dmFyIGU9Zih3aW5kb3cpLHQ9dGhpcy4kZHJvcGRvd24uaGFzQ2xhc3MoXCJzZWxlY3QyLWRyb3Bkb3duLS1hYm92ZVwiKSxuPXRoaXMuJGRyb3Bkb3duLmhhc0NsYXNzKFwic2VsZWN0Mi1kcm9wZG93bi0tYmVsb3dcIiksaT1udWxsLHI9dGhpcy4kY29udGFpbmVyLm9mZnNldCgpO3IuYm90dG9tPXIudG9wK3RoaXMuJGNvbnRhaW5lci5vdXRlckhlaWdodCghMSk7dmFyIG89e2hlaWdodDp0aGlzLiRjb250YWluZXIub3V0ZXJIZWlnaHQoITEpfTtvLnRvcD1yLnRvcCxvLmJvdHRvbT1yLnRvcCtvLmhlaWdodDt2YXIgcz10aGlzLiRkcm9wZG93bi5vdXRlckhlaWdodCghMSksYT1lLnNjcm9sbFRvcCgpLGw9ZS5zY3JvbGxUb3AoKStlLmhlaWdodCgpLGM9YTxyLnRvcC1zLHU9bD5yLmJvdHRvbStzLGQ9e2xlZnQ6ci5sZWZ0LHRvcDpvLmJvdHRvbX0scD10aGlzLiRkcm9wZG93blBhcmVudDtcInN0YXRpY1wiPT09cC5jc3MoXCJwb3NpdGlvblwiKSYmKHA9cC5vZmZzZXRQYXJlbnQoKSk7dmFyIGg9cC5vZmZzZXQoKTtkLnRvcC09aC50b3AsZC5sZWZ0LT1oLmxlZnQsdHx8bnx8KGk9XCJiZWxvd1wiKSx1fHwhY3x8dD8hYyYmdSYmdCYmKGk9XCJiZWxvd1wiKTppPVwiYWJvdmVcIiwoXCJhYm92ZVwiPT1pfHx0JiZcImJlbG93XCIhPT1pKSYmKGQudG9wPW8udG9wLWgudG9wLXMpLG51bGwhPWkmJih0aGlzLiRkcm9wZG93bi5yZW1vdmVDbGFzcyhcInNlbGVjdDItZHJvcGRvd24tLWJlbG93IHNlbGVjdDItZHJvcGRvd24tLWFib3ZlXCIpLmFkZENsYXNzKFwic2VsZWN0Mi1kcm9wZG93bi0tXCIraSksdGhpcy4kY29udGFpbmVyLnJlbW92ZUNsYXNzKFwic2VsZWN0Mi1jb250YWluZXItLWJlbG93IHNlbGVjdDItY29udGFpbmVyLS1hYm92ZVwiKS5hZGRDbGFzcyhcInNlbGVjdDItY29udGFpbmVyLS1cIitpKSksdGhpcy4kZHJvcGRvd25Db250YWluZXIuY3NzKGQpfSxlLnByb3RvdHlwZS5fcmVzaXplRHJvcGRvd249ZnVuY3Rpb24oKXt2YXIgZT17d2lkdGg6dGhpcy4kY29udGFpbmVyLm91dGVyV2lkdGgoITEpK1wicHhcIn07dGhpcy5vcHRpb25zLmdldChcImRyb3Bkb3duQXV0b1dpZHRoXCIpJiYoZS5taW5XaWR0aD1lLndpZHRoLGUucG9zaXRpb249XCJyZWxhdGl2ZVwiLGUud2lkdGg9XCJhdXRvXCIpLHRoaXMuJGRyb3Bkb3duLmNzcyhlKX0sZS5wcm90b3R5cGUuX3Nob3dEcm9wZG93bj1mdW5jdGlvbihlKXt0aGlzLiRkcm9wZG93bkNvbnRhaW5lci5hcHBlbmRUbyh0aGlzLiRkcm9wZG93blBhcmVudCksdGhpcy5fcG9zaXRpb25Ecm9wZG93bigpLHRoaXMuX3Jlc2l6ZURyb3Bkb3duKCl9LGV9KSxlLmRlZmluZShcInNlbGVjdDIvZHJvcGRvd24vbWluaW11bVJlc3VsdHNGb3JTZWFyY2hcIixbXSxmdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0LG4saSl7dGhpcy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaD1uLmdldChcIm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoXCIpLHRoaXMubWluaW11bVJlc3VsdHNGb3JTZWFyY2g8MCYmKHRoaXMubWluaW11bVJlc3VsdHNGb3JTZWFyY2g9MS8wKSxlLmNhbGwodGhpcyx0LG4saSl9cmV0dXJuIGUucHJvdG90eXBlLnNob3dTZWFyY2g9ZnVuY3Rpb24oZSx0KXtyZXR1cm4hKGZ1bmN0aW9uIGUodCl7Zm9yKHZhciBuPTAsaT0wO2k8dC5sZW5ndGg7aSsrKXt2YXIgcj10W2ldO3IuY2hpbGRyZW4/bis9ZShyLmNoaWxkcmVuKTpuKyt9cmV0dXJuIG59KHQuZGF0YS5yZXN1bHRzKTx0aGlzLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoKSYmZS5jYWxsKHRoaXMsdCl9LGV9KSxlLmRlZmluZShcInNlbGVjdDIvZHJvcGRvd24vc2VsZWN0T25DbG9zZVwiLFtcIi4uL3V0aWxzXCJdLGZ1bmN0aW9uKG8pe2Z1bmN0aW9uIGUoKXt9cmV0dXJuIGUucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXRoaXM7ZS5jYWxsKHRoaXMsdCxuKSx0Lm9uKFwiY2xvc2VcIixmdW5jdGlvbihlKXtpLl9oYW5kbGVTZWxlY3RPbkNsb3NlKGUpfSl9LGUucHJvdG90eXBlLl9oYW5kbGVTZWxlY3RPbkNsb3NlPWZ1bmN0aW9uKGUsdCl7aWYodCYmbnVsbCE9dC5vcmlnaW5hbFNlbGVjdDJFdmVudCl7dmFyIG49dC5vcmlnaW5hbFNlbGVjdDJFdmVudDtpZihcInNlbGVjdFwiPT09bi5fdHlwZXx8XCJ1bnNlbGVjdFwiPT09bi5fdHlwZSlyZXR1cm59dmFyIGk9dGhpcy5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKTtpZighKGkubGVuZ3RoPDEpKXt2YXIgcj1vLkdldERhdGEoaVswXSxcImRhdGFcIik7bnVsbCE9ci5lbGVtZW50JiZyLmVsZW1lbnQuc2VsZWN0ZWR8fG51bGw9PXIuZWxlbWVudCYmci5zZWxlY3RlZHx8dGhpcy50cmlnZ2VyKFwic2VsZWN0XCIse2RhdGE6cn0pfX0sZX0pLGUuZGVmaW5lKFwic2VsZWN0Mi9kcm9wZG93bi9jbG9zZU9uU2VsZWN0XCIsW10sZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7fXJldHVybiBlLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10aGlzO2UuY2FsbCh0aGlzLHQsbiksdC5vbihcInNlbGVjdFwiLGZ1bmN0aW9uKGUpe2kuX3NlbGVjdFRyaWdnZXJlZChlKX0pLHQub24oXCJ1bnNlbGVjdFwiLGZ1bmN0aW9uKGUpe2kuX3NlbGVjdFRyaWdnZXJlZChlKX0pfSxlLnByb3RvdHlwZS5fc2VsZWN0VHJpZ2dlcmVkPWZ1bmN0aW9uKGUsdCl7dmFyIG49dC5vcmlnaW5hbEV2ZW50O24mJihuLmN0cmxLZXl8fG4ubWV0YUtleSl8fHRoaXMudHJpZ2dlcihcImNsb3NlXCIse29yaWdpbmFsRXZlbnQ6bixvcmlnaW5hbFNlbGVjdDJFdmVudDp0fSl9LGV9KSxlLmRlZmluZShcInNlbGVjdDIvaTE4bi9lblwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJue2Vycm9yTG9hZGluZzpmdW5jdGlvbigpe3JldHVyblwiVGhlIHJlc3VsdHMgY291bGQgbm90IGJlIGxvYWRlZC5cIn0saW5wdXRUb29Mb25nOmZ1bmN0aW9uKGUpe3ZhciB0PWUuaW5wdXQubGVuZ3RoLWUubWF4aW11bSxuPVwiUGxlYXNlIGRlbGV0ZSBcIit0K1wiIGNoYXJhY3RlclwiO3JldHVybiAxIT10JiYobis9XCJzXCIpLG59LGlucHV0VG9vU2hvcnQ6ZnVuY3Rpb24oZSl7cmV0dXJuXCJQbGVhc2UgZW50ZXIgXCIrKGUubWluaW11bS1lLmlucHV0Lmxlbmd0aCkrXCIgb3IgbW9yZSBjaGFyYWN0ZXJzXCJ9LGxvYWRpbmdNb3JlOmZ1bmN0aW9uKCl7cmV0dXJuXCJMb2FkaW5nIG1vcmUgcmVzdWx0c+KAplwifSxtYXhpbXVtU2VsZWN0ZWQ6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJZb3UgY2FuIG9ubHkgc2VsZWN0IFwiK2UubWF4aW11bStcIiBpdGVtXCI7cmV0dXJuIDEhPWUubWF4aW11bSYmKHQrPVwic1wiKSx0fSxub1Jlc3VsdHM6ZnVuY3Rpb24oKXtyZXR1cm5cIk5vIHJlc3VsdHMgZm91bmRcIn0sc2VhcmNoaW5nOmZ1bmN0aW9uKCl7cmV0dXJuXCJTZWFyY2hpbmfigKZcIn0scmVtb3ZlQWxsSXRlbXM6ZnVuY3Rpb24oKXtyZXR1cm5cIlJlbW92ZSBhbGwgaXRlbXNcIn19fSksZS5kZWZpbmUoXCJzZWxlY3QyL2RlZmF1bHRzXCIsW1wianF1ZXJ5XCIsXCJyZXF1aXJlXCIsXCIuL3Jlc3VsdHNcIixcIi4vc2VsZWN0aW9uL3NpbmdsZVwiLFwiLi9zZWxlY3Rpb24vbXVsdGlwbGVcIixcIi4vc2VsZWN0aW9uL3BsYWNlaG9sZGVyXCIsXCIuL3NlbGVjdGlvbi9hbGxvd0NsZWFyXCIsXCIuL3NlbGVjdGlvbi9zZWFyY2hcIixcIi4vc2VsZWN0aW9uL2V2ZW50UmVsYXlcIixcIi4vdXRpbHNcIixcIi4vdHJhbnNsYXRpb25cIixcIi4vZGlhY3JpdGljc1wiLFwiLi9kYXRhL3NlbGVjdFwiLFwiLi9kYXRhL2FycmF5XCIsXCIuL2RhdGEvYWpheFwiLFwiLi9kYXRhL3RhZ3NcIixcIi4vZGF0YS90b2tlbml6ZXJcIixcIi4vZGF0YS9taW5pbXVtSW5wdXRMZW5ndGhcIixcIi4vZGF0YS9tYXhpbXVtSW5wdXRMZW5ndGhcIixcIi4vZGF0YS9tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoXCIsXCIuL2Ryb3Bkb3duXCIsXCIuL2Ryb3Bkb3duL3NlYXJjaFwiLFwiLi9kcm9wZG93bi9oaWRlUGxhY2Vob2xkZXJcIixcIi4vZHJvcGRvd24vaW5maW5pdGVTY3JvbGxcIixcIi4vZHJvcGRvd24vYXR0YWNoQm9keVwiLFwiLi9kcm9wZG93bi9taW5pbXVtUmVzdWx0c0ZvclNlYXJjaFwiLFwiLi9kcm9wZG93bi9zZWxlY3RPbkNsb3NlXCIsXCIuL2Ryb3Bkb3duL2Nsb3NlT25TZWxlY3RcIixcIi4vaTE4bi9lblwiXSxmdW5jdGlvbihjLHUsZCxwLGgsZixnLG0sdix5LHMsdCxfLHcsJCxiLEEseCxTLEQsQyxFLE8sVCxxLGosTCxJLGUpe2Z1bmN0aW9uIG4oKXt0aGlzLnJlc2V0KCl9cmV0dXJuIG4ucHJvdG90eXBlLmFwcGx5PWZ1bmN0aW9uKGUpe2lmKG51bGw9PShlPWMuZXh0ZW5kKCEwLHt9LHRoaXMuZGVmYXVsdHMsZSkpLmRhdGFBZGFwdGVyKXtpZihudWxsIT1lLmFqYXg/ZS5kYXRhQWRhcHRlcj0kOm51bGwhPWUuZGF0YT9lLmRhdGFBZGFwdGVyPXc6ZS5kYXRhQWRhcHRlcj1fLDA8ZS5taW5pbXVtSW5wdXRMZW5ndGgmJihlLmRhdGFBZGFwdGVyPXkuRGVjb3JhdGUoZS5kYXRhQWRhcHRlcix4KSksMDxlLm1heGltdW1JbnB1dExlbmd0aCYmKGUuZGF0YUFkYXB0ZXI9eS5EZWNvcmF0ZShlLmRhdGFBZGFwdGVyLFMpKSwwPGUubWF4aW11bVNlbGVjdGlvbkxlbmd0aCYmKGUuZGF0YUFkYXB0ZXI9eS5EZWNvcmF0ZShlLmRhdGFBZGFwdGVyLEQpKSxlLnRhZ3MmJihlLmRhdGFBZGFwdGVyPXkuRGVjb3JhdGUoZS5kYXRhQWRhcHRlcixiKSksbnVsbD09ZS50b2tlblNlcGFyYXRvcnMmJm51bGw9PWUudG9rZW5pemVyfHwoZS5kYXRhQWRhcHRlcj15LkRlY29yYXRlKGUuZGF0YUFkYXB0ZXIsQSkpLG51bGwhPWUucXVlcnkpe3ZhciB0PXUoZS5hbWRCYXNlK1wiY29tcGF0L3F1ZXJ5XCIpO2UuZGF0YUFkYXB0ZXI9eS5EZWNvcmF0ZShlLmRhdGFBZGFwdGVyLHQpfWlmKG51bGwhPWUuaW5pdFNlbGVjdGlvbil7dmFyIG49dShlLmFtZEJhc2UrXCJjb21wYXQvaW5pdFNlbGVjdGlvblwiKTtlLmRhdGFBZGFwdGVyPXkuRGVjb3JhdGUoZS5kYXRhQWRhcHRlcixuKX19aWYobnVsbD09ZS5yZXN1bHRzQWRhcHRlciYmKGUucmVzdWx0c0FkYXB0ZXI9ZCxudWxsIT1lLmFqYXgmJihlLnJlc3VsdHNBZGFwdGVyPXkuRGVjb3JhdGUoZS5yZXN1bHRzQWRhcHRlcixUKSksbnVsbCE9ZS5wbGFjZWhvbGRlciYmKGUucmVzdWx0c0FkYXB0ZXI9eS5EZWNvcmF0ZShlLnJlc3VsdHNBZGFwdGVyLE8pKSxlLnNlbGVjdE9uQ2xvc2UmJihlLnJlc3VsdHNBZGFwdGVyPXkuRGVjb3JhdGUoZS5yZXN1bHRzQWRhcHRlcixMKSkpLG51bGw9PWUuZHJvcGRvd25BZGFwdGVyKXtpZihlLm11bHRpcGxlKWUuZHJvcGRvd25BZGFwdGVyPUM7ZWxzZXt2YXIgaT15LkRlY29yYXRlKEMsRSk7ZS5kcm9wZG93bkFkYXB0ZXI9aX1pZigwIT09ZS5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCYmKGUuZHJvcGRvd25BZGFwdGVyPXkuRGVjb3JhdGUoZS5kcm9wZG93bkFkYXB0ZXIsaikpLGUuY2xvc2VPblNlbGVjdCYmKGUuZHJvcGRvd25BZGFwdGVyPXkuRGVjb3JhdGUoZS5kcm9wZG93bkFkYXB0ZXIsSSkpLG51bGwhPWUuZHJvcGRvd25Dc3NDbGFzc3x8bnVsbCE9ZS5kcm9wZG93bkNzc3x8bnVsbCE9ZS5hZGFwdERyb3Bkb3duQ3NzQ2xhc3Mpe3ZhciByPXUoZS5hbWRCYXNlK1wiY29tcGF0L2Ryb3Bkb3duQ3NzXCIpO2UuZHJvcGRvd25BZGFwdGVyPXkuRGVjb3JhdGUoZS5kcm9wZG93bkFkYXB0ZXIscil9ZS5kcm9wZG93bkFkYXB0ZXI9eS5EZWNvcmF0ZShlLmRyb3Bkb3duQWRhcHRlcixxKX1pZihudWxsPT1lLnNlbGVjdGlvbkFkYXB0ZXIpe2lmKGUubXVsdGlwbGU/ZS5zZWxlY3Rpb25BZGFwdGVyPWg6ZS5zZWxlY3Rpb25BZGFwdGVyPXAsbnVsbCE9ZS5wbGFjZWhvbGRlciYmKGUuc2VsZWN0aW9uQWRhcHRlcj15LkRlY29yYXRlKGUuc2VsZWN0aW9uQWRhcHRlcixmKSksZS5hbGxvd0NsZWFyJiYoZS5zZWxlY3Rpb25BZGFwdGVyPXkuRGVjb3JhdGUoZS5zZWxlY3Rpb25BZGFwdGVyLGcpKSxlLm11bHRpcGxlJiYoZS5zZWxlY3Rpb25BZGFwdGVyPXkuRGVjb3JhdGUoZS5zZWxlY3Rpb25BZGFwdGVyLG0pKSxudWxsIT1lLmNvbnRhaW5lckNzc0NsYXNzfHxudWxsIT1lLmNvbnRhaW5lckNzc3x8bnVsbCE9ZS5hZGFwdENvbnRhaW5lckNzc0NsYXNzKXt2YXIgbz11KGUuYW1kQmFzZStcImNvbXBhdC9jb250YWluZXJDc3NcIik7ZS5zZWxlY3Rpb25BZGFwdGVyPXkuRGVjb3JhdGUoZS5zZWxlY3Rpb25BZGFwdGVyLG8pfWUuc2VsZWN0aW9uQWRhcHRlcj15LkRlY29yYXRlKGUuc2VsZWN0aW9uQWRhcHRlcix2KX1lLmxhbmd1YWdlPXRoaXMuX3Jlc29sdmVMYW5ndWFnZShlLmxhbmd1YWdlKSxlLmxhbmd1YWdlLnB1c2goXCJlblwiKTtmb3IodmFyIHM9W10sYT0wO2E8ZS5sYW5ndWFnZS5sZW5ndGg7YSsrKXt2YXIgbD1lLmxhbmd1YWdlW2FdOy0xPT09cy5pbmRleE9mKGwpJiZzLnB1c2gobCl9cmV0dXJuIGUubGFuZ3VhZ2U9cyxlLnRyYW5zbGF0aW9ucz10aGlzLl9wcm9jZXNzVHJhbnNsYXRpb25zKGUubGFuZ3VhZ2UsZS5kZWJ1ZyksZX0sbi5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGUpe3JldHVybiBlLnJlcGxhY2UoL1teXFx1MDAwMC1cXHUwMDdFXS9nLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfHxlfSl9dGhpcy5kZWZhdWx0cz17YW1kQmFzZTpcIi4vXCIsYW1kTGFuZ3VhZ2VCYXNlOlwiLi9pMThuL1wiLGNsb3NlT25TZWxlY3Q6ITAsZGVidWc6ITEsZHJvcGRvd25BdXRvV2lkdGg6ITEsZXNjYXBlTWFya3VwOnkuZXNjYXBlTWFya3VwLGxhbmd1YWdlOnt9LG1hdGNoZXI6ZnVuY3Rpb24gZSh0LG4pe2lmKFwiXCI9PT1jLnRyaW0odC50ZXJtKSlyZXR1cm4gbjtpZihuLmNoaWxkcmVuJiYwPG4uY2hpbGRyZW4ubGVuZ3RoKXtmb3IodmFyIGk9Yy5leHRlbmQoITAse30sbikscj1uLmNoaWxkcmVuLmxlbmd0aC0xOzA8PXI7ci0tKW51bGw9PWUodCxuLmNoaWxkcmVuW3JdKSYmaS5jaGlsZHJlbi5zcGxpY2UociwxKTtyZXR1cm4gMDxpLmNoaWxkcmVuLmxlbmd0aD9pOmUodCxpKX12YXIgbz1hKG4udGV4dCkudG9VcHBlckNhc2UoKSxzPWEodC50ZXJtKS50b1VwcGVyQ2FzZSgpO3JldHVybi0xPG8uaW5kZXhPZihzKT9uOm51bGx9LG1pbmltdW1JbnB1dExlbmd0aDowLG1heGltdW1JbnB1dExlbmd0aDowLG1heGltdW1TZWxlY3Rpb25MZW5ndGg6MCxtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDowLHNlbGVjdE9uQ2xvc2U6ITEsc2Nyb2xsQWZ0ZXJTZWxlY3Q6ITEsc29ydGVyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSx0ZW1wbGF0ZVJlc3VsdDpmdW5jdGlvbihlKXtyZXR1cm4gZS50ZXh0fSx0ZW1wbGF0ZVNlbGVjdGlvbjpmdW5jdGlvbihlKXtyZXR1cm4gZS50ZXh0fSx0aGVtZTpcImRlZmF1bHRcIix3aWR0aDpcInJlc29sdmVcIn19LG4ucHJvdG90eXBlLmFwcGx5RnJvbUVsZW1lbnQ9ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmxhbmd1YWdlLGk9dGhpcy5kZWZhdWx0cy5sYW5ndWFnZSxyPXQucHJvcChcImxhbmdcIiksbz10LmNsb3Nlc3QoXCJbbGFuZ11cIikucHJvcChcImxhbmdcIikscz1BcnJheS5wcm90b3R5cGUuY29uY2F0LmNhbGwodGhpcy5fcmVzb2x2ZUxhbmd1YWdlKHIpLHRoaXMuX3Jlc29sdmVMYW5ndWFnZShuKSx0aGlzLl9yZXNvbHZlTGFuZ3VhZ2UoaSksdGhpcy5fcmVzb2x2ZUxhbmd1YWdlKG8pKTtyZXR1cm4gZS5sYW5ndWFnZT1zLGV9LG4ucHJvdG90eXBlLl9yZXNvbHZlTGFuZ3VhZ2U9ZnVuY3Rpb24oZSl7aWYoIWUpcmV0dXJuW107aWYoYy5pc0VtcHR5T2JqZWN0KGUpKXJldHVybltdO2lmKGMuaXNQbGFpbk9iamVjdChlKSlyZXR1cm5bZV07dmFyIHQ7dD1jLmlzQXJyYXkoZSk/ZTpbZV07Zm9yKHZhciBuPVtdLGk9MDtpPHQubGVuZ3RoO2krKylpZihuLnB1c2godFtpXSksXCJzdHJpbmdcIj09dHlwZW9mIHRbaV0mJjA8dFtpXS5pbmRleE9mKFwiLVwiKSl7dmFyIHI9dFtpXS5zcGxpdChcIi1cIilbMF07bi5wdXNoKHIpfXJldHVybiBufSxuLnByb3RvdHlwZS5fcHJvY2Vzc1RyYW5zbGF0aW9ucz1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1uZXcgcyxpPTA7aTxlLmxlbmd0aDtpKyspe3ZhciByPW5ldyBzLG89ZVtpXTtpZihcInN0cmluZ1wiPT10eXBlb2Ygbyl0cnl7cj1zLmxvYWRQYXRoKG8pfWNhdGNoKGUpe3RyeXtvPXRoaXMuZGVmYXVsdHMuYW1kTGFuZ3VhZ2VCYXNlK28scj1zLmxvYWRQYXRoKG8pfWNhdGNoKGUpe3QmJndpbmRvdy5jb25zb2xlJiZjb25zb2xlLndhcm4mJmNvbnNvbGUud2FybignU2VsZWN0MjogVGhlIGxhbmd1YWdlIGZpbGUgZm9yIFwiJytvKydcIiBjb3VsZCBub3QgYmUgYXV0b21hdGljYWxseSBsb2FkZWQuIEEgZmFsbGJhY2sgd2lsbCBiZSB1c2VkIGluc3RlYWQuJyl9fWVsc2Ugcj1jLmlzUGxhaW5PYmplY3Qobyk/bmV3IHMobyk6bztuLmV4dGVuZChyKX1yZXR1cm4gbn0sbi5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGUsdCl7dmFyIG49e307bltjLmNhbWVsQ2FzZShlKV09dDt2YXIgaT15Ll9jb252ZXJ0RGF0YShuKTtjLmV4dGVuZCghMCx0aGlzLmRlZmF1bHRzLGkpfSxuZXcgbn0pLGUuZGVmaW5lKFwic2VsZWN0Mi9vcHRpb25zXCIsW1wicmVxdWlyZVwiLFwianF1ZXJ5XCIsXCIuL2RlZmF1bHRzXCIsXCIuL3V0aWxzXCJdLGZ1bmN0aW9uKGksZCxyLHApe2Z1bmN0aW9uIGUoZSx0KXtpZih0aGlzLm9wdGlvbnM9ZSxudWxsIT10JiZ0aGlzLmZyb21FbGVtZW50KHQpLG51bGwhPXQmJih0aGlzLm9wdGlvbnM9ci5hcHBseUZyb21FbGVtZW50KHRoaXMub3B0aW9ucyx0KSksdGhpcy5vcHRpb25zPXIuYXBwbHkodGhpcy5vcHRpb25zKSx0JiZ0LmlzKFwiaW5wdXRcIikpe3ZhciBuPWkodGhpcy5nZXQoXCJhbWRCYXNlXCIpK1wiY29tcGF0L2lucHV0RGF0YVwiKTt0aGlzLm9wdGlvbnMuZGF0YUFkYXB0ZXI9cC5EZWNvcmF0ZSh0aGlzLm9wdGlvbnMuZGF0YUFkYXB0ZXIsbil9fXJldHVybiBlLnByb3RvdHlwZS5mcm9tRWxlbWVudD1mdW5jdGlvbihlKXt2YXIgdD1bXCJzZWxlY3QyXCJdO251bGw9PXRoaXMub3B0aW9ucy5tdWx0aXBsZSYmKHRoaXMub3B0aW9ucy5tdWx0aXBsZT1lLnByb3AoXCJtdWx0aXBsZVwiKSksbnVsbD09dGhpcy5vcHRpb25zLmRpc2FibGVkJiYodGhpcy5vcHRpb25zLmRpc2FibGVkPWUucHJvcChcImRpc2FibGVkXCIpKSxudWxsPT10aGlzLm9wdGlvbnMuZGlyJiYoZS5wcm9wKFwiZGlyXCIpP3RoaXMub3B0aW9ucy5kaXI9ZS5wcm9wKFwiZGlyXCIpOmUuY2xvc2VzdChcIltkaXJdXCIpLnByb3AoXCJkaXJcIik/dGhpcy5vcHRpb25zLmRpcj1lLmNsb3Nlc3QoXCJbZGlyXVwiKS5wcm9wKFwiZGlyXCIpOnRoaXMub3B0aW9ucy5kaXI9XCJsdHJcIiksZS5wcm9wKFwiZGlzYWJsZWRcIix0aGlzLm9wdGlvbnMuZGlzYWJsZWQpLGUucHJvcChcIm11bHRpcGxlXCIsdGhpcy5vcHRpb25zLm11bHRpcGxlKSxwLkdldERhdGEoZVswXSxcInNlbGVjdDJUYWdzXCIpJiYodGhpcy5vcHRpb25zLmRlYnVnJiZ3aW5kb3cuY29uc29sZSYmY29uc29sZS53YXJuJiZjb25zb2xlLndhcm4oJ1NlbGVjdDI6IFRoZSBgZGF0YS1zZWxlY3QyLXRhZ3NgIGF0dHJpYnV0ZSBoYXMgYmVlbiBjaGFuZ2VkIHRvIHVzZSB0aGUgYGRhdGEtZGF0YWAgYW5kIGBkYXRhLXRhZ3M9XCJ0cnVlXCJgIGF0dHJpYnV0ZXMgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgU2VsZWN0Mi4nKSxwLlN0b3JlRGF0YShlWzBdLFwiZGF0YVwiLHAuR2V0RGF0YShlWzBdLFwic2VsZWN0MlRhZ3NcIikpLHAuU3RvcmVEYXRhKGVbMF0sXCJ0YWdzXCIsITApKSxwLkdldERhdGEoZVswXSxcImFqYXhVcmxcIikmJih0aGlzLm9wdGlvbnMuZGVidWcmJndpbmRvdy5jb25zb2xlJiZjb25zb2xlLndhcm4mJmNvbnNvbGUud2FybihcIlNlbGVjdDI6IFRoZSBgZGF0YS1hamF4LXVybGAgYXR0cmlidXRlIGhhcyBiZWVuIGNoYW5nZWQgdG8gYGRhdGEtYWpheC0tdXJsYCBhbmQgc3VwcG9ydCBmb3IgdGhlIG9sZCBhdHRyaWJ1dGUgd2lsbCBiZSByZW1vdmVkIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBTZWxlY3QyLlwiKSxlLmF0dHIoXCJhamF4LS11cmxcIixwLkdldERhdGEoZVswXSxcImFqYXhVcmxcIikpLHAuU3RvcmVEYXRhKGVbMF0sXCJhamF4LVVybFwiLHAuR2V0RGF0YShlWzBdLFwiYWpheFVybFwiKSkpO3ZhciBuPXt9O2Z1bmN0aW9uIGkoZSx0KXtyZXR1cm4gdC50b1VwcGVyQ2FzZSgpfWZvcih2YXIgcj0wO3I8ZVswXS5hdHRyaWJ1dGVzLmxlbmd0aDtyKyspe3ZhciBvPWVbMF0uYXR0cmlidXRlc1tyXS5uYW1lLHM9XCJkYXRhLVwiO2lmKG8uc3Vic3RyKDAscy5sZW5ndGgpPT1zKXt2YXIgYT1vLnN1YnN0cmluZyhzLmxlbmd0aCksbD1wLkdldERhdGEoZVswXSxhKTtuW2EucmVwbGFjZSgvLShbYS16XSkvZyxpKV09bH19ZC5mbi5qcXVlcnkmJlwiMS5cIj09ZC5mbi5qcXVlcnkuc3Vic3RyKDAsMikmJmVbMF0uZGF0YXNldCYmKG49ZC5leHRlbmQoITAse30sZVswXS5kYXRhc2V0LG4pKTt2YXIgYz1kLmV4dGVuZCghMCx7fSxwLkdldERhdGEoZVswXSksbik7Zm9yKHZhciB1IGluIGM9cC5fY29udmVydERhdGEoYykpLTE8ZC5pbkFycmF5KHUsdCl8fChkLmlzUGxhaW5PYmplY3QodGhpcy5vcHRpb25zW3VdKT9kLmV4dGVuZCh0aGlzLm9wdGlvbnNbdV0sY1t1XSk6dGhpcy5vcHRpb25zW3VdPWNbdV0pO3JldHVybiB0aGlzfSxlLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMub3B0aW9uc1tlXX0sZS5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGUsdCl7dGhpcy5vcHRpb25zW2VdPXR9LGV9KSxlLmRlZmluZShcInNlbGVjdDIvY29yZVwiLFtcImpxdWVyeVwiLFwiLi9vcHRpb25zXCIsXCIuL3V0aWxzXCIsXCIuL2tleXNcIl0sZnVuY3Rpb24ocixjLHUsaSl7dmFyIGQ9ZnVuY3Rpb24oZSx0KXtudWxsIT11LkdldERhdGEoZVswXSxcInNlbGVjdDJcIikmJnUuR2V0RGF0YShlWzBdLFwic2VsZWN0MlwiKS5kZXN0cm95KCksdGhpcy4kZWxlbWVudD1lLHRoaXMuaWQ9dGhpcy5fZ2VuZXJhdGVJZChlKSx0PXR8fHt9LHRoaXMub3B0aW9ucz1uZXcgYyh0LGUpLGQuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7dmFyIG49ZS5hdHRyKFwidGFiaW5kZXhcIil8fDA7dS5TdG9yZURhdGEoZVswXSxcIm9sZC10YWJpbmRleFwiLG4pLGUuYXR0cihcInRhYmluZGV4XCIsXCItMVwiKTt2YXIgaT10aGlzLm9wdGlvbnMuZ2V0KFwiZGF0YUFkYXB0ZXJcIik7dGhpcy5kYXRhQWRhcHRlcj1uZXcgaShlLHRoaXMub3B0aW9ucyk7dmFyIHI9dGhpcy5yZW5kZXIoKTt0aGlzLl9wbGFjZUNvbnRhaW5lcihyKTt2YXIgbz10aGlzLm9wdGlvbnMuZ2V0KFwic2VsZWN0aW9uQWRhcHRlclwiKTt0aGlzLnNlbGVjdGlvbj1uZXcgbyhlLHRoaXMub3B0aW9ucyksdGhpcy4kc2VsZWN0aW9uPXRoaXMuc2VsZWN0aW9uLnJlbmRlcigpLHRoaXMuc2VsZWN0aW9uLnBvc2l0aW9uKHRoaXMuJHNlbGVjdGlvbixyKTt2YXIgcz10aGlzLm9wdGlvbnMuZ2V0KFwiZHJvcGRvd25BZGFwdGVyXCIpO3RoaXMuZHJvcGRvd249bmV3IHMoZSx0aGlzLm9wdGlvbnMpLHRoaXMuJGRyb3Bkb3duPXRoaXMuZHJvcGRvd24ucmVuZGVyKCksdGhpcy5kcm9wZG93bi5wb3NpdGlvbih0aGlzLiRkcm9wZG93bixyKTt2YXIgYT10aGlzLm9wdGlvbnMuZ2V0KFwicmVzdWx0c0FkYXB0ZXJcIik7dGhpcy5yZXN1bHRzPW5ldyBhKGUsdGhpcy5vcHRpb25zLHRoaXMuZGF0YUFkYXB0ZXIpLHRoaXMuJHJlc3VsdHM9dGhpcy5yZXN1bHRzLnJlbmRlcigpLHRoaXMucmVzdWx0cy5wb3NpdGlvbih0aGlzLiRyZXN1bHRzLHRoaXMuJGRyb3Bkb3duKTt2YXIgbD10aGlzO3RoaXMuX2JpbmRBZGFwdGVycygpLHRoaXMuX3JlZ2lzdGVyRG9tRXZlbnRzKCksdGhpcy5fcmVnaXN0ZXJEYXRhRXZlbnRzKCksdGhpcy5fcmVnaXN0ZXJTZWxlY3Rpb25FdmVudHMoKSx0aGlzLl9yZWdpc3RlckRyb3Bkb3duRXZlbnRzKCksdGhpcy5fcmVnaXN0ZXJSZXN1bHRzRXZlbnRzKCksdGhpcy5fcmVnaXN0ZXJFdmVudHMoKSx0aGlzLmRhdGFBZGFwdGVyLmN1cnJlbnQoZnVuY3Rpb24oZSl7bC50cmlnZ2VyKFwic2VsZWN0aW9uOnVwZGF0ZVwiLHtkYXRhOmV9KX0pLGUuYWRkQ2xhc3MoXCJzZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlXCIpLGUuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpLHRoaXMuX3N5bmNBdHRyaWJ1dGVzKCksdS5TdG9yZURhdGEoZVswXSxcInNlbGVjdDJcIix0aGlzKSxlLmRhdGEoXCJzZWxlY3QyXCIsdGhpcyl9O3JldHVybiB1LkV4dGVuZChkLHUuT2JzZXJ2YWJsZSksZC5wcm90b3R5cGUuX2dlbmVyYXRlSWQ9ZnVuY3Rpb24oZSl7cmV0dXJuXCJzZWxlY3QyLVwiKyhudWxsIT1lLmF0dHIoXCJpZFwiKT9lLmF0dHIoXCJpZFwiKTpudWxsIT1lLmF0dHIoXCJuYW1lXCIpP2UuYXR0cihcIm5hbWVcIikrXCItXCIrdS5nZW5lcmF0ZUNoYXJzKDIpOnUuZ2VuZXJhdGVDaGFycyg0KSkucmVwbGFjZSgvKDp8XFwufFxcW3xcXF18LCkvZyxcIlwiKX0sZC5wcm90b3R5cGUuX3BsYWNlQ29udGFpbmVyPWZ1bmN0aW9uKGUpe2UuaW5zZXJ0QWZ0ZXIodGhpcy4kZWxlbWVudCk7dmFyIHQ9dGhpcy5fcmVzb2x2ZVdpZHRoKHRoaXMuJGVsZW1lbnQsdGhpcy5vcHRpb25zLmdldChcIndpZHRoXCIpKTtudWxsIT10JiZlLmNzcyhcIndpZHRoXCIsdCl9LGQucHJvdG90eXBlLl9yZXNvbHZlV2lkdGg9ZnVuY3Rpb24oZSx0KXt2YXIgbj0vXndpZHRoOigoWy0rXT8oWzAtOV0qXFwuKT9bMC05XSspKHB4fGVtfGV4fCV8aW58Y218bW18cHR8cGMpKS9pO2lmKFwicmVzb2x2ZVwiPT10KXt2YXIgaT10aGlzLl9yZXNvbHZlV2lkdGgoZSxcInN0eWxlXCIpO3JldHVybiBudWxsIT1pP2k6dGhpcy5fcmVzb2x2ZVdpZHRoKGUsXCJlbGVtZW50XCIpfWlmKFwiZWxlbWVudFwiPT10KXt2YXIgcj1lLm91dGVyV2lkdGgoITEpO3JldHVybiByPD0wP1wiYXV0b1wiOnIrXCJweFwifWlmKFwic3R5bGVcIiE9dClyZXR1cm5cImNvbXB1dGVkc3R5bGVcIiE9dD90OndpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVbMF0pLndpZHRoO3ZhciBvPWUuYXR0cihcInN0eWxlXCIpO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBvKXJldHVybiBudWxsO2Zvcih2YXIgcz1vLnNwbGl0KFwiO1wiKSxhPTAsbD1zLmxlbmd0aDthPGw7YSs9MSl7dmFyIGM9c1thXS5yZXBsYWNlKC9cXHMvZyxcIlwiKS5tYXRjaChuKTtpZihudWxsIT09YyYmMTw9Yy5sZW5ndGgpcmV0dXJuIGNbMV19cmV0dXJuIG51bGx9LGQucHJvdG90eXBlLl9iaW5kQWRhcHRlcnM9ZnVuY3Rpb24oKXt0aGlzLmRhdGFBZGFwdGVyLmJpbmQodGhpcyx0aGlzLiRjb250YWluZXIpLHRoaXMuc2VsZWN0aW9uLmJpbmQodGhpcyx0aGlzLiRjb250YWluZXIpLHRoaXMuZHJvcGRvd24uYmluZCh0aGlzLHRoaXMuJGNvbnRhaW5lciksdGhpcy5yZXN1bHRzLmJpbmQodGhpcyx0aGlzLiRjb250YWluZXIpfSxkLnByb3RvdHlwZS5fcmVnaXN0ZXJEb21FdmVudHM9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMuJGVsZW1lbnQub24oXCJjaGFuZ2Uuc2VsZWN0MlwiLGZ1bmN0aW9uKCl7dC5kYXRhQWRhcHRlci5jdXJyZW50KGZ1bmN0aW9uKGUpe3QudHJpZ2dlcihcInNlbGVjdGlvbjp1cGRhdGVcIix7ZGF0YTplfSl9KX0pLHRoaXMuJGVsZW1lbnQub24oXCJmb2N1cy5zZWxlY3QyXCIsZnVuY3Rpb24oZSl7dC50cmlnZ2VyKFwiZm9jdXNcIixlKX0pLHRoaXMuX3N5bmNBPXUuYmluZCh0aGlzLl9zeW5jQXR0cmlidXRlcyx0aGlzKSx0aGlzLl9zeW5jUz11LmJpbmQodGhpcy5fc3luY1N1YnRyZWUsdGhpcyksdGhpcy4kZWxlbWVudFswXS5hdHRhY2hFdmVudCYmdGhpcy4kZWxlbWVudFswXS5hdHRhY2hFdmVudChcIm9ucHJvcGVydHljaGFuZ2VcIix0aGlzLl9zeW5jQSk7dmFyIGU9d2luZG93Lk11dGF0aW9uT2JzZXJ2ZXJ8fHdpbmRvdy5XZWJLaXRNdXRhdGlvbk9ic2VydmVyfHx3aW5kb3cuTW96TXV0YXRpb25PYnNlcnZlcjtudWxsIT1lPyh0aGlzLl9vYnNlcnZlcj1uZXcgZShmdW5jdGlvbihlKXtyLmVhY2goZSx0Ll9zeW5jQSksci5lYWNoKGUsdC5fc3luY1MpfSksdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiRlbGVtZW50WzBdLHthdHRyaWJ1dGVzOiEwLGNoaWxkTGlzdDohMCxzdWJ0cmVlOiExfSkpOnRoaXMuJGVsZW1lbnRbMF0uYWRkRXZlbnRMaXN0ZW5lciYmKHRoaXMuJGVsZW1lbnRbMF0uYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUF0dHJNb2RpZmllZFwiLHQuX3N5bmNBLCExKSx0aGlzLiRlbGVtZW50WzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Ob2RlSW5zZXJ0ZWRcIix0Ll9zeW5jUywhMSksdGhpcy4kZWxlbWVudFswXS5hZGRFdmVudExpc3RlbmVyKFwiRE9NTm9kZVJlbW92ZWRcIix0Ll9zeW5jUywhMSkpfSxkLnByb3RvdHlwZS5fcmVnaXN0ZXJEYXRhRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIG49dGhpczt0aGlzLmRhdGFBZGFwdGVyLm9uKFwiKlwiLGZ1bmN0aW9uKGUsdCl7bi50cmlnZ2VyKGUsdCl9KX0sZC5wcm90b3R5cGUuX3JlZ2lzdGVyU2VsZWN0aW9uRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIG49dGhpcyxpPVtcInRvZ2dsZVwiLFwiZm9jdXNcIl07dGhpcy5zZWxlY3Rpb24ub24oXCJ0b2dnbGVcIixmdW5jdGlvbigpe24udG9nZ2xlRHJvcGRvd24oKX0pLHRoaXMuc2VsZWN0aW9uLm9uKFwiZm9jdXNcIixmdW5jdGlvbihlKXtuLmZvY3VzKGUpfSksdGhpcy5zZWxlY3Rpb24ub24oXCIqXCIsZnVuY3Rpb24oZSx0KXstMT09PXIuaW5BcnJheShlLGkpJiZuLnRyaWdnZXIoZSx0KX0pfSxkLnByb3RvdHlwZS5fcmVnaXN0ZXJEcm9wZG93bkV2ZW50cz1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5kcm9wZG93bi5vbihcIipcIixmdW5jdGlvbihlLHQpe24udHJpZ2dlcihlLHQpfSl9LGQucHJvdG90eXBlLl9yZWdpc3RlclJlc3VsdHNFdmVudHM9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO3RoaXMucmVzdWx0cy5vbihcIipcIixmdW5jdGlvbihlLHQpe24udHJpZ2dlcihlLHQpfSl9LGQucHJvdG90eXBlLl9yZWdpc3RlckV2ZW50cz1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5vbihcIm9wZW5cIixmdW5jdGlvbigpe24uJGNvbnRhaW5lci5hZGRDbGFzcyhcInNlbGVjdDItY29udGFpbmVyLS1vcGVuXCIpfSksdGhpcy5vbihcImNsb3NlXCIsZnVuY3Rpb24oKXtuLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoXCJzZWxlY3QyLWNvbnRhaW5lci0tb3BlblwiKX0pLHRoaXMub24oXCJlbmFibGVcIixmdW5jdGlvbigpe24uJGNvbnRhaW5lci5yZW1vdmVDbGFzcyhcInNlbGVjdDItY29udGFpbmVyLS1kaXNhYmxlZFwiKX0pLHRoaXMub24oXCJkaXNhYmxlXCIsZnVuY3Rpb24oKXtuLiRjb250YWluZXIuYWRkQ2xhc3MoXCJzZWxlY3QyLWNvbnRhaW5lci0tZGlzYWJsZWRcIil9KSx0aGlzLm9uKFwiYmx1clwiLGZ1bmN0aW9uKCl7bi4kY29udGFpbmVyLnJlbW92ZUNsYXNzKFwic2VsZWN0Mi1jb250YWluZXItLWZvY3VzXCIpfSksdGhpcy5vbihcInF1ZXJ5XCIsZnVuY3Rpb24odCl7bi5pc09wZW4oKXx8bi50cmlnZ2VyKFwib3BlblwiLHt9KSx0aGlzLmRhdGFBZGFwdGVyLnF1ZXJ5KHQsZnVuY3Rpb24oZSl7bi50cmlnZ2VyKFwicmVzdWx0czphbGxcIix7ZGF0YTplLHF1ZXJ5OnR9KX0pfSksdGhpcy5vbihcInF1ZXJ5OmFwcGVuZFwiLGZ1bmN0aW9uKHQpe3RoaXMuZGF0YUFkYXB0ZXIucXVlcnkodCxmdW5jdGlvbihlKXtuLnRyaWdnZXIoXCJyZXN1bHRzOmFwcGVuZFwiLHtkYXRhOmUscXVlcnk6dH0pfSl9KSx0aGlzLm9uKFwia2V5cHJlc3NcIixmdW5jdGlvbihlKXt2YXIgdD1lLndoaWNoO24uaXNPcGVuKCk/dD09PWkuRVNDfHx0PT09aS5UQUJ8fHQ9PT1pLlVQJiZlLmFsdEtleT8obi5jbG9zZSgpLGUucHJldmVudERlZmF1bHQoKSk6dD09PWkuRU5URVI/KG4udHJpZ2dlcihcInJlc3VsdHM6c2VsZWN0XCIse30pLGUucHJldmVudERlZmF1bHQoKSk6dD09PWkuU1BBQ0UmJmUuY3RybEtleT8obi50cmlnZ2VyKFwicmVzdWx0czp0b2dnbGVcIix7fSksZS5wcmV2ZW50RGVmYXVsdCgpKTp0PT09aS5VUD8obi50cmlnZ2VyKFwicmVzdWx0czpwcmV2aW91c1wiLHt9KSxlLnByZXZlbnREZWZhdWx0KCkpOnQ9PT1pLkRPV04mJihuLnRyaWdnZXIoXCJyZXN1bHRzOm5leHRcIix7fSksZS5wcmV2ZW50RGVmYXVsdCgpKToodD09PWkuRU5URVJ8fHQ9PT1pLlNQQUNFfHx0PT09aS5ET1dOJiZlLmFsdEtleSkmJihuLm9wZW4oKSxlLnByZXZlbnREZWZhdWx0KCkpfSl9LGQucHJvdG90eXBlLl9zeW5jQXR0cmlidXRlcz1mdW5jdGlvbigpe3RoaXMub3B0aW9ucy5zZXQoXCJkaXNhYmxlZFwiLHRoaXMuJGVsZW1lbnQucHJvcChcImRpc2FibGVkXCIpKSx0aGlzLm9wdGlvbnMuZ2V0KFwiZGlzYWJsZWRcIik/KHRoaXMuaXNPcGVuKCkmJnRoaXMuY2xvc2UoKSx0aGlzLnRyaWdnZXIoXCJkaXNhYmxlXCIse30pKTp0aGlzLnRyaWdnZXIoXCJlbmFibGVcIix7fSl9LGQucHJvdG90eXBlLl9zeW5jU3VidHJlZT1mdW5jdGlvbihlLHQpe3ZhciBuPSExLGk9dGhpcztpZighZXx8IWUudGFyZ2V0fHxcIk9QVElPTlwiPT09ZS50YXJnZXQubm9kZU5hbWV8fFwiT1BUR1JPVVBcIj09PWUudGFyZ2V0Lm5vZGVOYW1lKXtpZih0KWlmKHQuYWRkZWROb2RlcyYmMDx0LmFkZGVkTm9kZXMubGVuZ3RoKWZvcih2YXIgcj0wO3I8dC5hZGRlZE5vZGVzLmxlbmd0aDtyKyspe3QuYWRkZWROb2Rlc1tyXS5zZWxlY3RlZCYmKG49ITApfWVsc2UgdC5yZW1vdmVkTm9kZXMmJjA8dC5yZW1vdmVkTm9kZXMubGVuZ3RoJiYobj0hMCk7ZWxzZSBuPSEwO24mJnRoaXMuZGF0YUFkYXB0ZXIuY3VycmVudChmdW5jdGlvbihlKXtpLnRyaWdnZXIoXCJzZWxlY3Rpb246dXBkYXRlXCIse2RhdGE6ZX0pfSl9fSxkLnByb3RvdHlwZS50cmlnZ2VyPWZ1bmN0aW9uKGUsdCl7dmFyIG49ZC5fX3N1cGVyX18udHJpZ2dlcixpPXtvcGVuOlwib3BlbmluZ1wiLGNsb3NlOlwiY2xvc2luZ1wiLHNlbGVjdDpcInNlbGVjdGluZ1wiLHVuc2VsZWN0OlwidW5zZWxlY3RpbmdcIixjbGVhcjpcImNsZWFyaW5nXCJ9O2lmKHZvaWQgMD09PXQmJih0PXt9KSxlIGluIGkpe3ZhciByPWlbZV0sbz17cHJldmVudGVkOiExLG5hbWU6ZSxhcmdzOnR9O2lmKG4uY2FsbCh0aGlzLHIsbyksby5wcmV2ZW50ZWQpcmV0dXJuIHZvaWQodC5wcmV2ZW50ZWQ9ITApfW4uY2FsbCh0aGlzLGUsdCl9LGQucHJvdG90eXBlLnRvZ2dsZURyb3Bkb3duPWZ1bmN0aW9uKCl7dGhpcy5vcHRpb25zLmdldChcImRpc2FibGVkXCIpfHwodGhpcy5pc09wZW4oKT90aGlzLmNsb3NlKCk6dGhpcy5vcGVuKCkpfSxkLnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKCl7dGhpcy5pc09wZW4oKXx8dGhpcy50cmlnZ2VyKFwicXVlcnlcIix7fSl9LGQucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7dGhpcy5pc09wZW4oKSYmdGhpcy50cmlnZ2VyKFwiY2xvc2VcIix7fSl9LGQucHJvdG90eXBlLmlzT3Blbj1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRjb250YWluZXIuaGFzQ2xhc3MoXCJzZWxlY3QyLWNvbnRhaW5lci0tb3BlblwiKX0sZC5wcm90b3R5cGUuaGFzRm9jdXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kY29udGFpbmVyLmhhc0NsYXNzKFwic2VsZWN0Mi1jb250YWluZXItLWZvY3VzXCIpfSxkLnByb3RvdHlwZS5mb2N1cz1mdW5jdGlvbihlKXt0aGlzLmhhc0ZvY3VzKCl8fCh0aGlzLiRjb250YWluZXIuYWRkQ2xhc3MoXCJzZWxlY3QyLWNvbnRhaW5lci0tZm9jdXNcIiksdGhpcy50cmlnZ2VyKFwiZm9jdXNcIix7fSkpfSxkLnByb3RvdHlwZS5lbmFibGU9ZnVuY3Rpb24oZSl7dGhpcy5vcHRpb25zLmdldChcImRlYnVnXCIpJiZ3aW5kb3cuY29uc29sZSYmY29uc29sZS53YXJuJiZjb25zb2xlLndhcm4oJ1NlbGVjdDI6IFRoZSBgc2VsZWN0MihcImVuYWJsZVwiKWAgbWV0aG9kIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBsYXRlciBTZWxlY3QyIHZlcnNpb25zLiBVc2UgJGVsZW1lbnQucHJvcChcImRpc2FibGVkXCIpIGluc3RlYWQuJyksbnVsbCE9ZSYmMCE9PWUubGVuZ3RofHwoZT1bITBdKTt2YXIgdD0hZVswXTt0aGlzLiRlbGVtZW50LnByb3AoXCJkaXNhYmxlZFwiLHQpfSxkLnByb3RvdHlwZS5kYXRhPWZ1bmN0aW9uKCl7dGhpcy5vcHRpb25zLmdldChcImRlYnVnXCIpJiYwPGFyZ3VtZW50cy5sZW5ndGgmJndpbmRvdy5jb25zb2xlJiZjb25zb2xlLndhcm4mJmNvbnNvbGUud2FybignU2VsZWN0MjogRGF0YSBjYW4gbm8gbG9uZ2VyIGJlIHNldCB1c2luZyBgc2VsZWN0MihcImRhdGFcIilgLiBZb3Ugc2hvdWxkIGNvbnNpZGVyIHNldHRpbmcgdGhlIHZhbHVlIGluc3RlYWQgdXNpbmcgYCRlbGVtZW50LnZhbCgpYC4nKTt2YXIgdD1bXTtyZXR1cm4gdGhpcy5kYXRhQWRhcHRlci5jdXJyZW50KGZ1bmN0aW9uKGUpe3Q9ZX0pLHR9LGQucHJvdG90eXBlLnZhbD1mdW5jdGlvbihlKXtpZih0aGlzLm9wdGlvbnMuZ2V0KFwiZGVidWdcIikmJndpbmRvdy5jb25zb2xlJiZjb25zb2xlLndhcm4mJmNvbnNvbGUud2FybignU2VsZWN0MjogVGhlIGBzZWxlY3QyKFwidmFsXCIpYCBtZXRob2QgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGxhdGVyIFNlbGVjdDIgdmVyc2lvbnMuIFVzZSAkZWxlbWVudC52YWwoKSBpbnN0ZWFkLicpLG51bGw9PWV8fDA9PT1lLmxlbmd0aClyZXR1cm4gdGhpcy4kZWxlbWVudC52YWwoKTt2YXIgdD1lWzBdO3IuaXNBcnJheSh0KSYmKHQ9ci5tYXAodCxmdW5jdGlvbihlKXtyZXR1cm4gZS50b1N0cmluZygpfSkpLHRoaXMuJGVsZW1lbnQudmFsKHQpLnRyaWdnZXIoXCJjaGFuZ2VcIil9LGQucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLiRjb250YWluZXIucmVtb3ZlKCksdGhpcy4kZWxlbWVudFswXS5kZXRhY2hFdmVudCYmdGhpcy4kZWxlbWVudFswXS5kZXRhY2hFdmVudChcIm9ucHJvcGVydHljaGFuZ2VcIix0aGlzLl9zeW5jQSksbnVsbCE9dGhpcy5fb2JzZXJ2ZXI/KHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKSx0aGlzLl9vYnNlcnZlcj1udWxsKTp0aGlzLiRlbGVtZW50WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXImJih0aGlzLiRlbGVtZW50WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01BdHRyTW9kaWZpZWRcIix0aGlzLl9zeW5jQSwhMSksdGhpcy4kZWxlbWVudFswXS5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NTm9kZUluc2VydGVkXCIsdGhpcy5fc3luY1MsITEpLHRoaXMuJGVsZW1lbnRbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTU5vZGVSZW1vdmVkXCIsdGhpcy5fc3luY1MsITEpKSx0aGlzLl9zeW5jQT1udWxsLHRoaXMuX3N5bmNTPW51bGwsdGhpcy4kZWxlbWVudC5vZmYoXCIuc2VsZWN0MlwiKSx0aGlzLiRlbGVtZW50LmF0dHIoXCJ0YWJpbmRleFwiLHUuR2V0RGF0YSh0aGlzLiRlbGVtZW50WzBdLFwib2xkLXRhYmluZGV4XCIpKSx0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKFwic2VsZWN0Mi1oaWRkZW4tYWNjZXNzaWJsZVwiKSx0aGlzLiRlbGVtZW50LmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIiksdS5SZW1vdmVEYXRhKHRoaXMuJGVsZW1lbnRbMF0pLHRoaXMuJGVsZW1lbnQucmVtb3ZlRGF0YShcInNlbGVjdDJcIiksdGhpcy5kYXRhQWRhcHRlci5kZXN0cm95KCksdGhpcy5zZWxlY3Rpb24uZGVzdHJveSgpLHRoaXMuZHJvcGRvd24uZGVzdHJveSgpLHRoaXMucmVzdWx0cy5kZXN0cm95KCksdGhpcy5kYXRhQWRhcHRlcj1udWxsLHRoaXMuc2VsZWN0aW9uPW51bGwsdGhpcy5kcm9wZG93bj1udWxsLHRoaXMucmVzdWx0cz1udWxsfSxkLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oKXt2YXIgZT1yKCc8c3BhbiBjbGFzcz1cInNlbGVjdDIgc2VsZWN0Mi1jb250YWluZXJcIj48c3BhbiBjbGFzcz1cInNlbGVjdGlvblwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cImRyb3Bkb3duLXdyYXBwZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PC9zcGFuPicpO3JldHVybiBlLmF0dHIoXCJkaXJcIix0aGlzLm9wdGlvbnMuZ2V0KFwiZGlyXCIpKSx0aGlzLiRjb250YWluZXI9ZSx0aGlzLiRjb250YWluZXIuYWRkQ2xhc3MoXCJzZWxlY3QyLWNvbnRhaW5lci0tXCIrdGhpcy5vcHRpb25zLmdldChcInRoZW1lXCIpKSx1LlN0b3JlRGF0YShlWzBdLFwiZWxlbWVudFwiLHRoaXMuJGVsZW1lbnQpLGV9LGR9KSxlLmRlZmluZShcInNlbGVjdDIvY29tcGF0L3V0aWxzXCIsW1wianF1ZXJ5XCJdLGZ1bmN0aW9uKHMpe3JldHVybntzeW5jQ3NzQ2xhc3NlczpmdW5jdGlvbihlLHQsbil7dmFyIGkscixvPVtdOyhpPXMudHJpbShlLmF0dHIoXCJjbGFzc1wiKSkpJiZzKChpPVwiXCIraSkuc3BsaXQoL1xccysvKSkuZWFjaChmdW5jdGlvbigpezA9PT10aGlzLmluZGV4T2YoXCJzZWxlY3QyLVwiKSYmby5wdXNoKHRoaXMpfSksKGk9cy50cmltKHQuYXR0cihcImNsYXNzXCIpKSkmJnMoKGk9XCJcIitpKS5zcGxpdCgvXFxzKy8pKS5lYWNoKGZ1bmN0aW9uKCl7MCE9PXRoaXMuaW5kZXhPZihcInNlbGVjdDItXCIpJiZudWxsIT0ocj1uKHRoaXMpKSYmby5wdXNoKHIpfSksZS5hdHRyKFwiY2xhc3NcIixvLmpvaW4oXCIgXCIpKX19fSksZS5kZWZpbmUoXCJzZWxlY3QyL2NvbXBhdC9jb250YWluZXJDc3NcIixbXCJqcXVlcnlcIixcIi4vdXRpbHNcIl0sZnVuY3Rpb24ocyxhKXtmdW5jdGlvbiBsKGUpe3JldHVybiBudWxsfWZ1bmN0aW9uIGUoKXt9cmV0dXJuIGUucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihlKXt2YXIgdD1lLmNhbGwodGhpcyksbj10aGlzLm9wdGlvbnMuZ2V0KFwiY29udGFpbmVyQ3NzQ2xhc3NcIil8fFwiXCI7cy5pc0Z1bmN0aW9uKG4pJiYobj1uKHRoaXMuJGVsZW1lbnQpKTt2YXIgaT10aGlzLm9wdGlvbnMuZ2V0KFwiYWRhcHRDb250YWluZXJDc3NDbGFzc1wiKTtpZihpPWl8fGwsLTEhPT1uLmluZGV4T2YoXCI6YWxsOlwiKSl7bj1uLnJlcGxhY2UoXCI6YWxsOlwiLFwiXCIpO3ZhciByPWk7aT1mdW5jdGlvbihlKXt2YXIgdD1yKGUpO3JldHVybiBudWxsIT10P3QrXCIgXCIrZTplfX12YXIgbz10aGlzLm9wdGlvbnMuZ2V0KFwiY29udGFpbmVyQ3NzXCIpfHx7fTtyZXR1cm4gcy5pc0Z1bmN0aW9uKG8pJiYobz1vKHRoaXMuJGVsZW1lbnQpKSxhLnN5bmNDc3NDbGFzc2VzKHQsdGhpcy4kZWxlbWVudCxpKSx0LmNzcyhvKSx0LmFkZENsYXNzKG4pLHR9LGV9KSxlLmRlZmluZShcInNlbGVjdDIvY29tcGF0L2Ryb3Bkb3duQ3NzXCIsW1wianF1ZXJ5XCIsXCIuL3V0aWxzXCJdLGZ1bmN0aW9uKHMsYSl7ZnVuY3Rpb24gbChlKXtyZXR1cm4gbnVsbH1mdW5jdGlvbiBlKCl7fXJldHVybiBlLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jYWxsKHRoaXMpLG49dGhpcy5vcHRpb25zLmdldChcImRyb3Bkb3duQ3NzQ2xhc3NcIil8fFwiXCI7cy5pc0Z1bmN0aW9uKG4pJiYobj1uKHRoaXMuJGVsZW1lbnQpKTt2YXIgaT10aGlzLm9wdGlvbnMuZ2V0KFwiYWRhcHREcm9wZG93bkNzc0NsYXNzXCIpO2lmKGk9aXx8bCwtMSE9PW4uaW5kZXhPZihcIjphbGw6XCIpKXtuPW4ucmVwbGFjZShcIjphbGw6XCIsXCJcIik7dmFyIHI9aTtpPWZ1bmN0aW9uKGUpe3ZhciB0PXIoZSk7cmV0dXJuIG51bGwhPXQ/dCtcIiBcIitlOmV9fXZhciBvPXRoaXMub3B0aW9ucy5nZXQoXCJkcm9wZG93bkNzc1wiKXx8e307cmV0dXJuIHMuaXNGdW5jdGlvbihvKSYmKG89byh0aGlzLiRlbGVtZW50KSksYS5zeW5jQ3NzQ2xhc3Nlcyh0LHRoaXMuJGVsZW1lbnQsaSksdC5jc3MobyksdC5hZGRDbGFzcyhuKSx0fSxlfSksZS5kZWZpbmUoXCJzZWxlY3QyL2NvbXBhdC9pbml0U2VsZWN0aW9uXCIsW1wianF1ZXJ5XCJdLGZ1bmN0aW9uKGkpe2Z1bmN0aW9uIGUoZSx0LG4pe24uZ2V0KFwiZGVidWdcIikmJndpbmRvdy5jb25zb2xlJiZjb25zb2xlLndhcm4mJmNvbnNvbGUud2FybihcIlNlbGVjdDI6IFRoZSBgaW5pdFNlbGVjdGlvbmAgb3B0aW9uIGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgYSBjdXN0b20gZGF0YSBhZGFwdGVyIHRoYXQgb3ZlcnJpZGVzIHRoZSBgY3VycmVudGAgbWV0aG9kLiBUaGlzIG1ldGhvZCBpcyBub3cgY2FsbGVkIG11bHRpcGxlIHRpbWVzIGluc3RlYWQgb2YgYSBzaW5nbGUgdGltZSB3aGVuIHRoZSBpbnN0YW5jZSBpcyBpbml0aWFsaXplZC4gU3VwcG9ydCB3aWxsIGJlIHJlbW92ZWQgZm9yIHRoZSBgaW5pdFNlbGVjdGlvbmAgb3B0aW9uIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBTZWxlY3QyXCIpLHRoaXMuaW5pdFNlbGVjdGlvbj1uLmdldChcImluaXRTZWxlY3Rpb25cIiksdGhpcy5faXNJbml0aWFsaXplZD0hMSxlLmNhbGwodGhpcyx0LG4pfXJldHVybiBlLnByb3RvdHlwZS5jdXJyZW50PWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpczt0aGlzLl9pc0luaXRpYWxpemVkP2UuY2FsbCh0aGlzLHQpOnRoaXMuaW5pdFNlbGVjdGlvbi5jYWxsKG51bGwsdGhpcy4kZWxlbWVudCxmdW5jdGlvbihlKXtuLl9pc0luaXRpYWxpemVkPSEwLGkuaXNBcnJheShlKXx8KGU9W2VdKSx0KGUpfSl9LGV9KSxlLmRlZmluZShcInNlbGVjdDIvY29tcGF0L2lucHV0RGF0YVwiLFtcImpxdWVyeVwiLFwiLi4vdXRpbHNcIl0sZnVuY3Rpb24ocyxpKXtmdW5jdGlvbiBlKGUsdCxuKXt0aGlzLl9jdXJyZW50RGF0YT1bXSx0aGlzLl92YWx1ZVNlcGFyYXRvcj1uLmdldChcInZhbHVlU2VwYXJhdG9yXCIpfHxcIixcIixcImhpZGRlblwiPT09dC5wcm9wKFwidHlwZVwiKSYmbi5nZXQoXCJkZWJ1Z1wiKSYmY29uc29sZSYmY29uc29sZS53YXJuJiZjb25zb2xlLndhcm4oXCJTZWxlY3QyOiBVc2luZyBhIGhpZGRlbiBpbnB1dCB3aXRoIFNlbGVjdDIgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCBhbmQgbWF5IHN0b3Agd29ya2luZyBpbiB0aGUgZnV0dXJlLiBJdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgYSBgPHNlbGVjdD5gIGVsZW1lbnQgaW5zdGVhZC5cIiksZS5jYWxsKHRoaXMsdCxuKX1yZXR1cm4gZS5wcm90b3R5cGUuY3VycmVudD1mdW5jdGlvbihlLHQpe2Z1bmN0aW9uIGkoZSx0KXt2YXIgbj1bXTtyZXR1cm4gZS5zZWxlY3RlZHx8LTEhPT1zLmluQXJyYXkoZS5pZCx0KT8oZS5zZWxlY3RlZD0hMCxuLnB1c2goZSkpOmUuc2VsZWN0ZWQ9ITEsZS5jaGlsZHJlbiYmbi5wdXNoLmFwcGx5KG4saShlLmNoaWxkcmVuLHQpKSxufWZvcih2YXIgbj1bXSxyPTA7cjx0aGlzLl9jdXJyZW50RGF0YS5sZW5ndGg7cisrKXt2YXIgbz10aGlzLl9jdXJyZW50RGF0YVtyXTtuLnB1c2guYXBwbHkobixpKG8sdGhpcy4kZWxlbWVudC52YWwoKS5zcGxpdCh0aGlzLl92YWx1ZVNlcGFyYXRvcikpKX10KG4pfSxlLnByb3RvdHlwZS5zZWxlY3Q9ZnVuY3Rpb24oZSx0KXtpZih0aGlzLm9wdGlvbnMuZ2V0KFwibXVsdGlwbGVcIikpe3ZhciBuPXRoaXMuJGVsZW1lbnQudmFsKCk7bis9dGhpcy5fdmFsdWVTZXBhcmF0b3IrdC5pZCx0aGlzLiRlbGVtZW50LnZhbChuKSx0aGlzLiRlbGVtZW50LnRyaWdnZXIoXCJjaGFuZ2VcIil9ZWxzZSB0aGlzLmN1cnJlbnQoZnVuY3Rpb24oZSl7cy5tYXAoZSxmdW5jdGlvbihlKXtlLnNlbGVjdGVkPSExfSl9KSx0aGlzLiRlbGVtZW50LnZhbCh0LmlkKSx0aGlzLiRlbGVtZW50LnRyaWdnZXIoXCJjaGFuZ2VcIil9LGUucHJvdG90eXBlLnVuc2VsZWN0PWZ1bmN0aW9uKGUscil7dmFyIG89dGhpcztyLnNlbGVjdGVkPSExLHRoaXMuY3VycmVudChmdW5jdGlvbihlKXtmb3IodmFyIHQ9W10sbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgaT1lW25dO3IuaWQhPWkuaWQmJnQucHVzaChpLmlkKX1vLiRlbGVtZW50LnZhbCh0LmpvaW4oby5fdmFsdWVTZXBhcmF0b3IpKSxvLiRlbGVtZW50LnRyaWdnZXIoXCJjaGFuZ2VcIil9KX0sZS5wcm90b3R5cGUucXVlcnk9ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgaT1bXSxyPTA7cjx0aGlzLl9jdXJyZW50RGF0YS5sZW5ndGg7cisrKXt2YXIgbz10aGlzLl9jdXJyZW50RGF0YVtyXSxzPXRoaXMubWF0Y2hlcyh0LG8pO251bGwhPT1zJiZpLnB1c2gocyl9bih7cmVzdWx0czppfSl9LGUucHJvdG90eXBlLmFkZE9wdGlvbnM9ZnVuY3Rpb24oZSx0KXt2YXIgbj1zLm1hcCh0LGZ1bmN0aW9uKGUpe3JldHVybiBpLkdldERhdGEoZVswXSxcImRhdGFcIil9KTt0aGlzLl9jdXJyZW50RGF0YS5wdXNoLmFwcGx5KHRoaXMuX2N1cnJlbnREYXRhLG4pfSxlfSksZS5kZWZpbmUoXCJzZWxlY3QyL2NvbXBhdC9tYXRjaGVyXCIsW1wianF1ZXJ5XCJdLGZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbihvKXtyZXR1cm4gZnVuY3Rpb24oZSx0KXt2YXIgbj1zLmV4dGVuZCghMCx7fSx0KTtpZihudWxsPT1lLnRlcm18fFwiXCI9PT1zLnRyaW0oZS50ZXJtKSlyZXR1cm4gbjtpZih0LmNoaWxkcmVuKXtmb3IodmFyIGk9dC5jaGlsZHJlbi5sZW5ndGgtMTswPD1pO2ktLSl7dmFyIHI9dC5jaGlsZHJlbltpXTtvKGUudGVybSxyLnRleHQscil8fG4uY2hpbGRyZW4uc3BsaWNlKGksMSl9aWYoMDxuLmNoaWxkcmVuLmxlbmd0aClyZXR1cm4gbn1yZXR1cm4gbyhlLnRlcm0sdC50ZXh0LHQpP246bnVsbH19fSksZS5kZWZpbmUoXCJzZWxlY3QyL2NvbXBhdC9xdWVyeVwiLFtdLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQsbil7bi5nZXQoXCJkZWJ1Z1wiKSYmd2luZG93LmNvbnNvbGUmJmNvbnNvbGUud2FybiYmY29uc29sZS53YXJuKFwiU2VsZWN0MjogVGhlIGBxdWVyeWAgb3B0aW9uIGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgYSBjdXN0b20gZGF0YSBhZGFwdGVyIHRoYXQgb3ZlcnJpZGVzIHRoZSBgcXVlcnlgIG1ldGhvZC4gU3VwcG9ydCB3aWxsIGJlIHJlbW92ZWQgZm9yIHRoZSBgcXVlcnlgIG9wdGlvbiBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgU2VsZWN0Mi5cIiksZS5jYWxsKHRoaXMsdCxuKX1yZXR1cm4gZS5wcm90b3R5cGUucXVlcnk9ZnVuY3Rpb24oZSx0LG4pe3QuY2FsbGJhY2s9bix0aGlzLm9wdGlvbnMuZ2V0KFwicXVlcnlcIikuY2FsbChudWxsLHQpfSxlfSksZS5kZWZpbmUoXCJzZWxlY3QyL2Ryb3Bkb3duL2F0dGFjaENvbnRhaW5lclwiLFtdLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQsbil7ZS5jYWxsKHRoaXMsdCxuKX1yZXR1cm4gZS5wcm90b3R5cGUucG9zaXRpb249ZnVuY3Rpb24oZSx0LG4pe24uZmluZChcIi5kcm9wZG93bi13cmFwcGVyXCIpLmFwcGVuZCh0KSx0LmFkZENsYXNzKFwic2VsZWN0Mi1kcm9wZG93bi0tYmVsb3dcIiksbi5hZGRDbGFzcyhcInNlbGVjdDItY29udGFpbmVyLS1iZWxvd1wiKX0sZX0pLGUuZGVmaW5lKFwic2VsZWN0Mi9kcm9wZG93bi9zdG9wUHJvcGFnYXRpb25cIixbXSxmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt9cmV0dXJuIGUucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24oZSx0LG4pe2UuY2FsbCh0aGlzLHQsbik7dGhpcy4kZHJvcGRvd24ub24oW1wiYmx1clwiLFwiY2hhbmdlXCIsXCJjbGlja1wiLFwiZGJsY2xpY2tcIixcImZvY3VzXCIsXCJmb2N1c2luXCIsXCJmb2N1c291dFwiLFwiaW5wdXRcIixcImtleWRvd25cIixcImtleXVwXCIsXCJrZXlwcmVzc1wiLFwibW91c2Vkb3duXCIsXCJtb3VzZWVudGVyXCIsXCJtb3VzZWxlYXZlXCIsXCJtb3VzZW1vdmVcIixcIm1vdXNlb3ZlclwiLFwibW91c2V1cFwiLFwic2VhcmNoXCIsXCJ0b3VjaGVuZFwiLFwidG91Y2hzdGFydFwiXS5qb2luKFwiIFwiKSxmdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpfSl9LGV9KSxlLmRlZmluZShcInNlbGVjdDIvc2VsZWN0aW9uL3N0b3BQcm9wYWdhdGlvblwiLFtdLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe31yZXR1cm4gZS5wcm90b3R5cGUuYmluZD1mdW5jdGlvbihlLHQsbil7ZS5jYWxsKHRoaXMsdCxuKTt0aGlzLiRzZWxlY3Rpb24ub24oW1wiYmx1clwiLFwiY2hhbmdlXCIsXCJjbGlja1wiLFwiZGJsY2xpY2tcIixcImZvY3VzXCIsXCJmb2N1c2luXCIsXCJmb2N1c291dFwiLFwiaW5wdXRcIixcImtleWRvd25cIixcImtleXVwXCIsXCJrZXlwcmVzc1wiLFwibW91c2Vkb3duXCIsXCJtb3VzZWVudGVyXCIsXCJtb3VzZWxlYXZlXCIsXCJtb3VzZW1vdmVcIixcIm1vdXNlb3ZlclwiLFwibW91c2V1cFwiLFwic2VhcmNoXCIsXCJ0b3VjaGVuZFwiLFwidG91Y2hzdGFydFwiXS5qb2luKFwiIFwiKSxmdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpfSl9LGV9KSxsPWZ1bmN0aW9uKHApe3ZhciBoLGYsZT1bXCJ3aGVlbFwiLFwibW91c2V3aGVlbFwiLFwiRE9NTW91c2VTY3JvbGxcIixcIk1vek1vdXNlUGl4ZWxTY3JvbGxcIl0sdD1cIm9ud2hlZWxcImluIGRvY3VtZW50fHw5PD1kb2N1bWVudC5kb2N1bWVudE1vZGU/W1wid2hlZWxcIl06W1wibW91c2V3aGVlbFwiLFwiRG9tTW91c2VTY3JvbGxcIixcIk1vek1vdXNlUGl4ZWxTY3JvbGxcIl0sZz1BcnJheS5wcm90b3R5cGUuc2xpY2U7aWYocC5ldmVudC5maXhIb29rcylmb3IodmFyIG49ZS5sZW5ndGg7bjspcC5ldmVudC5maXhIb29rc1tlWy0tbl1dPXAuZXZlbnQubW91c2VIb29rczt2YXIgbT1wLmV2ZW50LnNwZWNpYWwubW91c2V3aGVlbD17dmVyc2lvbjpcIjMuMS4xMlwiLHNldHVwOmZ1bmN0aW9uKCl7aWYodGhpcy5hZGRFdmVudExpc3RlbmVyKWZvcih2YXIgZT10Lmxlbmd0aDtlOyl0aGlzLmFkZEV2ZW50TGlzdGVuZXIodFstLWVdLGksITEpO2Vsc2UgdGhpcy5vbm1vdXNld2hlZWw9aTtwLmRhdGEodGhpcyxcIm1vdXNld2hlZWwtbGluZS1oZWlnaHRcIixtLmdldExpbmVIZWlnaHQodGhpcykpLHAuZGF0YSh0aGlzLFwibW91c2V3aGVlbC1wYWdlLWhlaWdodFwiLG0uZ2V0UGFnZUhlaWdodCh0aGlzKSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7aWYodGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKWZvcih2YXIgZT10Lmxlbmd0aDtlOyl0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIodFstLWVdLGksITEpO2Vsc2UgdGhpcy5vbm1vdXNld2hlZWw9bnVsbDtwLnJlbW92ZURhdGEodGhpcyxcIm1vdXNld2hlZWwtbGluZS1oZWlnaHRcIikscC5yZW1vdmVEYXRhKHRoaXMsXCJtb3VzZXdoZWVsLXBhZ2UtaGVpZ2h0XCIpfSxnZXRMaW5lSGVpZ2h0OmZ1bmN0aW9uKGUpe3ZhciB0PXAoZSksbj10W1wib2Zmc2V0UGFyZW50XCJpbiBwLmZuP1wib2Zmc2V0UGFyZW50XCI6XCJwYXJlbnRcIl0oKTtyZXR1cm4gbi5sZW5ndGh8fChuPXAoXCJib2R5XCIpKSxwYXJzZUludChuLmNzcyhcImZvbnRTaXplXCIpLDEwKXx8cGFyc2VJbnQodC5jc3MoXCJmb250U2l6ZVwiKSwxMCl8fDE2fSxnZXRQYWdlSGVpZ2h0OmZ1bmN0aW9uKGUpe3JldHVybiBwKGUpLmhlaWdodCgpfSxzZXR0aW5nczp7YWRqdXN0T2xkRGVsdGFzOiEwLG5vcm1hbGl6ZU9mZnNldDohMH19O2Z1bmN0aW9uIGkoZSl7dmFyIHQsbj1lfHx3aW5kb3cuZXZlbnQsaT1nLmNhbGwoYXJndW1lbnRzLDEpLHI9MCxvPTAscz0wLGE9MCxsPTA7aWYoKGU9cC5ldmVudC5maXgobikpLnR5cGU9XCJtb3VzZXdoZWVsXCIsXCJkZXRhaWxcImluIG4mJihzPS0xKm4uZGV0YWlsKSxcIndoZWVsRGVsdGFcImluIG4mJihzPW4ud2hlZWxEZWx0YSksXCJ3aGVlbERlbHRhWVwiaW4gbiYmKHM9bi53aGVlbERlbHRhWSksXCJ3aGVlbERlbHRhWFwiaW4gbiYmKG89LTEqbi53aGVlbERlbHRhWCksXCJheGlzXCJpbiBuJiZuLmF4aXM9PT1uLkhPUklaT05UQUxfQVhJUyYmKG89LTEqcyxzPTApLHI9MD09PXM/bzpzLFwiZGVsdGFZXCJpbiBuJiYocj1zPS0xKm4uZGVsdGFZKSxcImRlbHRhWFwiaW4gbiYmKG89bi5kZWx0YVgsMD09PXMmJihyPS0xKm8pKSwwIT09c3x8MCE9PW8pe2lmKDE9PT1uLmRlbHRhTW9kZSl7dmFyIGM9cC5kYXRhKHRoaXMsXCJtb3VzZXdoZWVsLWxpbmUtaGVpZ2h0XCIpO3IqPWMscyo9YyxvKj1jfWVsc2UgaWYoMj09PW4uZGVsdGFNb2RlKXt2YXIgdT1wLmRhdGEodGhpcyxcIm1vdXNld2hlZWwtcGFnZS1oZWlnaHRcIik7cio9dSxzKj11LG8qPXV9aWYodD1NYXRoLm1heChNYXRoLmFicyhzKSxNYXRoLmFicyhvKSksKCFmfHx0PGYpJiZ5KG4sZj10KSYmKGYvPTQwKSx5KG4sdCkmJihyLz00MCxvLz00MCxzLz00MCkscj1NYXRoWzE8PXI/XCJmbG9vclwiOlwiY2VpbFwiXShyL2YpLG89TWF0aFsxPD1vP1wiZmxvb3JcIjpcImNlaWxcIl0oby9mKSxzPU1hdGhbMTw9cz9cImZsb29yXCI6XCJjZWlsXCJdKHMvZiksbS5zZXR0aW5ncy5ub3JtYWxpemVPZmZzZXQmJnRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KXt2YXIgZD10aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2E9ZS5jbGllbnRYLWQubGVmdCxsPWUuY2xpZW50WS1kLnRvcH1yZXR1cm4gZS5kZWx0YVg9byxlLmRlbHRhWT1zLGUuZGVsdGFGYWN0b3I9ZixlLm9mZnNldFg9YSxlLm9mZnNldFk9bCxlLmRlbHRhTW9kZT0wLGkudW5zaGlmdChlLHIsbyxzKSxoJiZjbGVhclRpbWVvdXQoaCksaD1zZXRUaW1lb3V0KHYsMjAwKSwocC5ldmVudC5kaXNwYXRjaHx8cC5ldmVudC5oYW5kbGUpLmFwcGx5KHRoaXMsaSl9fWZ1bmN0aW9uIHYoKXtmPW51bGx9ZnVuY3Rpb24geShlLHQpe3JldHVybiBtLnNldHRpbmdzLmFkanVzdE9sZERlbHRhcyYmXCJtb3VzZXdoZWVsXCI9PT1lLnR5cGUmJnQlMTIwPT0wfXAuZm4uZXh0ZW5kKHttb3VzZXdoZWVsOmZ1bmN0aW9uKGUpe3JldHVybiBlP3RoaXMuYmluZChcIm1vdXNld2hlZWxcIixlKTp0aGlzLnRyaWdnZXIoXCJtb3VzZXdoZWVsXCIpfSx1bm1vdXNld2hlZWw6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMudW5iaW5kKFwibW91c2V3aGVlbFwiLGUpfX0pfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmRlZmluZSYmZS5kZWZpbmUuYW1kP2UuZGVmaW5lKFwianF1ZXJ5LW1vdXNld2hlZWxcIixbXCJqcXVlcnlcIl0sbCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9bDpsKGQpLGUuZGVmaW5lKFwianF1ZXJ5LnNlbGVjdDJcIixbXCJqcXVlcnlcIixcImpxdWVyeS1tb3VzZXdoZWVsXCIsXCIuL3NlbGVjdDIvY29yZVwiLFwiLi9zZWxlY3QyL2RlZmF1bHRzXCIsXCIuL3NlbGVjdDIvdXRpbHNcIl0sZnVuY3Rpb24ocixlLG8sdCxzKXtpZihudWxsPT1yLmZuLnNlbGVjdDIpe3ZhciBhPVtcIm9wZW5cIixcImNsb3NlXCIsXCJkZXN0cm95XCJdO3IuZm4uc2VsZWN0Mj1mdW5jdGlvbih0KXtpZihcIm9iamVjdFwiPT10eXBlb2YodD10fHx7fSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPXIuZXh0ZW5kKCEwLHt9LHQpO25ldyBvKHIodGhpcyksZSl9KSx0aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiB0KXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYXJndW1lbnRzIGZvciBTZWxlY3QyOiBcIit0KTt2YXIgbixpPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9cy5HZXREYXRhKHRoaXMsXCJzZWxlY3QyXCIpO251bGw9PWUmJndpbmRvdy5jb25zb2xlJiZjb25zb2xlLmVycm9yJiZjb25zb2xlLmVycm9yKFwiVGhlIHNlbGVjdDIoJ1wiK3QrXCInKSBtZXRob2Qgd2FzIGNhbGxlZCBvbiBhbiBlbGVtZW50IHRoYXQgaXMgbm90IHVzaW5nIFNlbGVjdDIuXCIpLG49ZVt0XS5hcHBseShlLGkpfSksLTE8ci5pbkFycmF5KHQsYSk/dGhpczpufX1yZXR1cm4gbnVsbD09ci5mbi5zZWxlY3QyLmRlZmF1bHRzJiYoci5mbi5zZWxlY3QyLmRlZmF1bHRzPXQpLG99KSx7ZGVmaW5lOmUuZGVmaW5lLHJlcXVpcmU6ZS5yZXF1aXJlfX0oKSx0PWUucmVxdWlyZShcImpxdWVyeS5zZWxlY3QyXCIpO3JldHVybiBkLmZuLnNlbGVjdDIuYW1kPWUsdH0pOyJdLCJzb3VyY2VSb290IjoiIn0=