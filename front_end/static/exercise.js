"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a3, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a3, prop, b2[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b2) => __defProps(a3, __getOwnPropDescs(b2));
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i6 = decorators.length - 1, decorator; i6 >= 0; i6--)
      if (decorator = decorators[i6])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e10) {
          reject(e10);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e10) {
          reject(e10);
        }
      };
      var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/ace-builds/src-noconflict/ace.js
  var require_ace = __commonJS({
    "node_modules/ace-builds/src-noconflict/ace.js"(exports, module) {
      (function() {
        var ACE_NAMESPACE = "ace";
        var global = function() {
          return this;
        }();
        if (!global && typeof window != "undefined")
          global = window;
        if (!ACE_NAMESPACE && typeof requirejs !== "undefined")
          return;
        var define2 = function(module2, deps, payload) {
          if (typeof module2 !== "string") {
            if (define2.original)
              define2.original.apply(this, arguments);
            else {
              console.error("dropping module because define wasn't a string.");
              console.trace();
            }
            return;
          }
          if (arguments.length == 2)
            payload = deps;
          if (!define2.modules[module2]) {
            define2.payloads[module2] = payload;
            define2.modules[module2] = null;
          }
        };
        define2.modules = {};
        define2.payloads = {};
        var _require = function(parentId, module2, callback) {
          if (typeof module2 === "string") {
            var payload = lookup(parentId, module2);
            if (payload != void 0) {
              callback && callback();
              return payload;
            }
          } else if (Object.prototype.toString.call(module2) === "[object Array]") {
            var params = [];
            for (var i6 = 0, l7 = module2.length; i6 < l7; ++i6) {
              var dep = lookup(parentId, module2[i6]);
              if (dep == void 0 && require3.original)
                return;
              params.push(dep);
            }
            return callback && callback.apply(null, params) || true;
          }
        };
        var require3 = function(module2, callback) {
          var packagedModule = _require("", module2, callback);
          if (packagedModule == void 0 && require3.original)
            return require3.original.apply(this, arguments);
          return packagedModule;
        };
        var normalizeModule = function(parentId, moduleName) {
          if (moduleName.indexOf("!") !== -1) {
            var chunks = moduleName.split("!");
            return normalizeModule(parentId, chunks[0]) + "!" + normalizeModule(parentId, chunks[1]);
          }
          if (moduleName.charAt(0) == ".") {
            var base = parentId.split("/").slice(0, -1).join("/");
            moduleName = base + "/" + moduleName;
            while (moduleName.indexOf(".") !== -1 && previous != moduleName) {
              var previous = moduleName;
              moduleName = moduleName.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "");
            }
          }
          return moduleName;
        };
        var lookup = function(parentId, moduleName) {
          moduleName = normalizeModule(parentId, moduleName);
          var module2 = define2.modules[moduleName];
          if (!module2) {
            module2 = define2.payloads[moduleName];
            if (typeof module2 === "function") {
              var exports2 = {};
              var mod = {
                id: moduleName,
                uri: "",
                exports: exports2,
                packaged: true
              };
              var req = function(module3, callback) {
                return _require(moduleName, module3, callback);
              };
              var returnValue = module2(req, exports2, mod);
              exports2 = returnValue || mod.exports;
              define2.modules[moduleName] = exports2;
              delete define2.payloads[moduleName];
            }
            module2 = define2.modules[moduleName] = exports2 || module2;
          }
          return module2;
        };
        function exportAce(ns) {
          var root = global;
          if (ns) {
            if (!global[ns])
              global[ns] = {};
            root = global[ns];
          }
          if (!root.define || !root.define.packaged) {
            define2.original = root.define;
            root.define = define2;
            root.define.packaged = true;
          }
          if (!root.require || !root.require.packaged) {
            require3.original = root.require;
            root.require = require3;
            root.require.packaged = true;
          }
        }
        exportAce(ACE_NAMESPACE);
      })();
      ace.define("ace/lib/es6-shim", ["require", "exports", "module"], function(require3, exports2, module2) {
        function defineProp(obj, name2, val) {
          Object.defineProperty(obj, name2, {
            value: val,
            enumerable: false,
            writable: true,
            configurable: true
          });
        }
        if (!String.prototype.startsWith) {
          defineProp(
            String.prototype,
            "startsWith",
            function(searchString, position) {
              position = position || 0;
              return this.lastIndexOf(searchString, position) === position;
            }
          );
        }
        if (!String.prototype.endsWith) {
          defineProp(String.prototype, "endsWith", function(searchString, position) {
            var subjectString = this;
            if (position === void 0 || position > subjectString.length) {
              position = subjectString.length;
            }
            position -= searchString.length;
            var lastIndex = subjectString.indexOf(searchString, position);
            return lastIndex !== -1 && lastIndex === position;
          });
        }
        if (!String.prototype.repeat) {
          defineProp(String.prototype, "repeat", function(count) {
            var result = "";
            var string = this;
            while (count > 0) {
              if (count & 1)
                result += string;
              if (count >>= 1)
                string += string;
            }
            return result;
          });
        }
        if (!String.prototype.includes) {
          defineProp(String.prototype, "includes", function(str, position) {
            return this.indexOf(str, position) != -1;
          });
        }
        if (!Object.assign) {
          Object.assign = function(target) {
            if (target === void 0 || target === null) {
              throw new TypeError("Cannot convert undefined or null to object");
            }
            var output = Object(target);
            for (var index = 1; index < arguments.length; index++) {
              var source = arguments[index];
              if (source !== void 0 && source !== null) {
                Object.keys(source).forEach(function(key) {
                  output[key] = source[key];
                });
              }
            }
            return output;
          };
        }
        if (!Object.values) {
          Object.values = function(o8) {
            return Object.keys(o8).map(function(k2) {
              return o8[k2];
            });
          };
        }
        if (!Array.prototype.find) {
          defineProp(Array.prototype, "find", function(predicate) {
            var len = this.length;
            var thisArg = arguments[1];
            for (var k2 = 0; k2 < len; k2++) {
              var kValue = this[k2];
              if (predicate.call(thisArg, kValue, k2, this)) {
                return kValue;
              }
            }
          });
        }
        if (!Array.prototype.findIndex) {
          defineProp(Array.prototype, "findIndex", function(predicate) {
            var len = this.length;
            var thisArg = arguments[1];
            for (var k2 = 0; k2 < len; k2++) {
              var kValue = this[k2];
              if (predicate.call(thisArg, kValue, k2, this)) {
                return k2;
              }
            }
          });
        }
        if (!Array.prototype.includes) {
          defineProp(Array.prototype, "includes", function(item, position) {
            return this.indexOf(item, position) != -1;
          });
        }
        if (!Array.prototype.fill) {
          defineProp(Array.prototype, "fill", function(value) {
            var O = this;
            var len = O.length >>> 0;
            var start = arguments[1];
            var relativeStart = start >> 0;
            var k2 = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);
            var end = arguments[2];
            var relativeEnd = end === void 0 ? len : end >> 0;
            var final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);
            while (k2 < final) {
              O[k2] = value;
              k2++;
            }
            return O;
          });
        }
        if (!Array.of) {
          defineProp(Array, "of", function() {
            return Array.prototype.slice.call(arguments);
          });
        }
      });
      ace.define("ace/lib/fixoldbrowsers", ["require", "exports", "module", "ace/lib/es6-shim"], function(require3, exports2, module2) {
        "use strict";
        require3("./es6-shim");
      });
      ace.define("ace/lib/lang", ["require", "exports", "module"], function(require3, exports2, module2) {
        "use strict";
        exports2.last = function(a3) {
          return a3[a3.length - 1];
        };
        exports2.stringReverse = function(string) {
          return string.split("").reverse().join("");
        };
        exports2.stringRepeat = function(string, count) {
          var result = "";
          while (count > 0) {
            if (count & 1)
              result += string;
            if (count >>= 1)
              string += string;
          }
          return result;
        };
        var trimBeginRegexp = /^\s\s*/;
        var trimEndRegexp = /\s\s*$/;
        exports2.stringTrimLeft = function(string) {
          return string.replace(trimBeginRegexp, "");
        };
        exports2.stringTrimRight = function(string) {
          return string.replace(trimEndRegexp, "");
        };
        exports2.copyObject = function(obj) {
          var copy = {};
          for (var key in obj) {
            copy[key] = obj[key];
          }
          return copy;
        };
        exports2.copyArray = function(array) {
          var copy = [];
          for (var i6 = 0, l7 = array.length; i6 < l7; i6++) {
            if (array[i6] && typeof array[i6] == "object")
              copy[i6] = this.copyObject(array[i6]);
            else
              copy[i6] = array[i6];
          }
          return copy;
        };
        exports2.deepCopy = function deepCopy(obj) {
          if (typeof obj !== "object" || !obj)
            return obj;
          var copy;
          if (Array.isArray(obj)) {
            copy = [];
            for (var key = 0; key < obj.length; key++) {
              copy[key] = deepCopy(obj[key]);
            }
            return copy;
          }
          if (Object.prototype.toString.call(obj) !== "[object Object]")
            return obj;
          copy = {};
          for (var key in obj)
            copy[key] = deepCopy(obj[key]);
          return copy;
        };
        exports2.arrayToMap = function(arr) {
          var map = {};
          for (var i6 = 0; i6 < arr.length; i6++) {
            map[arr[i6]] = 1;
          }
          return map;
        };
        exports2.createMap = function(props) {
          var map = /* @__PURE__ */ Object.create(null);
          for (var i6 in props) {
            map[i6] = props[i6];
          }
          return map;
        };
        exports2.arrayRemove = function(array, value) {
          for (var i6 = 0; i6 <= array.length; i6++) {
            if (value === array[i6]) {
              array.splice(i6, 1);
            }
          }
        };
        exports2.escapeRegExp = function(str) {
          return str.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1");
        };
        exports2.escapeHTML = function(str) {
          return ("" + str).replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;");
        };
        exports2.getMatchOffsets = function(string, regExp) {
          var matches = [];
          string.replace(regExp, function(str) {
            matches.push({
              offset: arguments[arguments.length - 2],
              length: str.length
            });
          });
          return matches;
        };
        exports2.deferredCall = function(fcn) {
          var timer = null;
          var callback = function() {
            timer = null;
            fcn();
          };
          var deferred = function(timeout) {
            deferred.cancel();
            timer = setTimeout(callback, timeout || 0);
            return deferred;
          };
          deferred.schedule = deferred;
          deferred.call = function() {
            this.cancel();
            fcn();
            return deferred;
          };
          deferred.cancel = function() {
            clearTimeout(timer);
            timer = null;
            return deferred;
          };
          deferred.isPending = function() {
            return timer;
          };
          return deferred;
        };
        exports2.delayedCall = function(fcn, defaultTimeout) {
          var timer = null;
          var callback = function() {
            timer = null;
            fcn();
          };
          var _self = function(timeout) {
            if (timer == null)
              timer = setTimeout(callback, timeout || defaultTimeout);
          };
          _self.delay = function(timeout) {
            timer && clearTimeout(timer);
            timer = setTimeout(callback, timeout || defaultTimeout);
          };
          _self.schedule = _self;
          _self.call = function() {
            this.cancel();
            fcn();
          };
          _self.cancel = function() {
            timer && clearTimeout(timer);
            timer = null;
          };
          _self.isPending = function() {
            return timer;
          };
          return _self;
        };
      });
      ace.define("ace/lib/oop", ["require", "exports", "module"], function(require3, exports2, module2) {
        "use strict";
        exports2.inherits = function(ctor, superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        };
        exports2.mixin = function(obj, mixin) {
          for (var key in mixin) {
            obj[key] = mixin[key];
          }
          return obj;
        };
        exports2.implement = function(proto, mixin) {
          exports2.mixin(proto, mixin);
        };
      });
      ace.define("ace/lib/useragent", ["require", "exports", "module"], function(require3, exports2, module2) {
        "use strict";
        exports2.OS = {
          LINUX: "LINUX",
          MAC: "MAC",
          WINDOWS: "WINDOWS"
        };
        exports2.getOS = function() {
          if (exports2.isMac) {
            return exports2.OS.MAC;
          } else if (exports2.isLinux) {
            return exports2.OS.LINUX;
          } else {
            return exports2.OS.WINDOWS;
          }
        };
        var _navigator = typeof navigator == "object" ? navigator : {};
        var os = (/mac|win|linux/i.exec(_navigator.platform) || ["other"])[0].toLowerCase();
        var ua = _navigator.userAgent || "";
        var appName = _navigator.appName || "";
        exports2.isWin = os == "win";
        exports2.isMac = os == "mac";
        exports2.isLinux = os == "linux";
        exports2.isIE = appName == "Microsoft Internet Explorer" || appName.indexOf("MSAppHost") >= 0 ? parseFloat((ua.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]) : parseFloat((ua.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]);
        exports2.isOldIE = exports2.isIE && exports2.isIE < 9;
        exports2.isGecko = exports2.isMozilla = ua.match(/ Gecko\/\d+/);
        exports2.isOpera = typeof opera == "object" && Object.prototype.toString.call(window.opera) == "[object Opera]";
        exports2.isWebKit = parseFloat(ua.split("WebKit/")[1]) || void 0;
        exports2.isChrome = parseFloat(ua.split(" Chrome/")[1]) || void 0;
        exports2.isEdge = parseFloat(ua.split(" Edge/")[1]) || void 0;
        exports2.isAIR = ua.indexOf("AdobeAIR") >= 0;
        exports2.isAndroid = ua.indexOf("Android") >= 0;
        exports2.isChromeOS = ua.indexOf(" CrOS ") >= 0;
        exports2.isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
        if (exports2.isIOS)
          exports2.isMac = true;
        exports2.isMobile = exports2.isIOS || exports2.isAndroid;
      });
      ace.define("ace/lib/dom", ["require", "exports", "module", "ace/lib/useragent"], function(require3, exports2, module2) {
        "use strict";
        var useragent = require3("./useragent");
        var XHTML_NS = "http://www.w3.org/1999/xhtml";
        exports2.buildDom = function buildDom(arr, parent, refs) {
          if (typeof arr == "string" && arr) {
            var txt = document.createTextNode(arr);
            if (parent)
              parent.appendChild(txt);
            return txt;
          }
          if (!Array.isArray(arr)) {
            if (arr && arr.appendChild && parent)
              parent.appendChild(arr);
            return arr;
          }
          if (typeof arr[0] != "string" || !arr[0]) {
            var els = [];
            for (var i6 = 0; i6 < arr.length; i6++) {
              var ch = buildDom(arr[i6], parent, refs);
              ch && els.push(ch);
            }
            return els;
          }
          var el = document.createElement(arr[0]);
          var options = arr[1];
          var childIndex = 1;
          if (options && typeof options == "object" && !Array.isArray(options))
            childIndex = 2;
          for (var i6 = childIndex; i6 < arr.length; i6++)
            buildDom(arr[i6], el, refs);
          if (childIndex == 2) {
            Object.keys(options).forEach(function(n9) {
              var val = options[n9];
              if (n9 === "class") {
                el.className = Array.isArray(val) ? val.join(" ") : val;
              } else if (typeof val == "function" || n9 == "value" || n9[0] == "$") {
                el[n9] = val;
              } else if (n9 === "ref") {
                if (refs)
                  refs[val] = el;
              } else if (n9 === "style") {
                if (typeof val == "string")
                  el.style.cssText = val;
              } else if (val != null) {
                el.setAttribute(n9, val);
              }
            });
          }
          if (parent)
            parent.appendChild(el);
          return el;
        };
        exports2.getDocumentHead = function(doc) {
          if (!doc)
            doc = document;
          return doc.head || doc.getElementsByTagName("head")[0] || doc.documentElement;
        };
        exports2.createElement = function(tag, ns) {
          return document.createElementNS ? document.createElementNS(ns || XHTML_NS, tag) : document.createElement(tag);
        };
        exports2.removeChildren = function(element) {
          element.innerHTML = "";
        };
        exports2.createTextNode = function(textContent, element) {
          var doc = element ? element.ownerDocument : document;
          return doc.createTextNode(textContent);
        };
        exports2.createFragment = function(element) {
          var doc = element ? element.ownerDocument : document;
          return doc.createDocumentFragment();
        };
        exports2.hasCssClass = function(el, name2) {
          var classes = (el.className + "").split(/\s+/g);
          return classes.indexOf(name2) !== -1;
        };
        exports2.addCssClass = function(el, name2) {
          if (!exports2.hasCssClass(el, name2)) {
            el.className += " " + name2;
          }
        };
        exports2.removeCssClass = function(el, name2) {
          var classes = el.className.split(/\s+/g);
          while (true) {
            var index = classes.indexOf(name2);
            if (index == -1) {
              break;
            }
            classes.splice(index, 1);
          }
          el.className = classes.join(" ");
        };
        exports2.toggleCssClass = function(el, name2) {
          var classes = el.className.split(/\s+/g), add = true;
          while (true) {
            var index = classes.indexOf(name2);
            if (index == -1) {
              break;
            }
            add = false;
            classes.splice(index, 1);
          }
          if (add)
            classes.push(name2);
          el.className = classes.join(" ");
          return add;
        };
        exports2.setCssClass = function(node, className, include) {
          if (include) {
            exports2.addCssClass(node, className);
          } else {
            exports2.removeCssClass(node, className);
          }
        };
        exports2.hasCssString = function(id, doc) {
          var index = 0, sheets;
          doc = doc || document;
          if (sheets = doc.querySelectorAll("style")) {
            while (index < sheets.length) {
              if (sheets[index++].id === id) {
                return true;
              }
            }
          }
        };
        exports2.removeElementById = function(id, doc) {
          doc = doc || document;
          if (doc.getElementById(id)) {
            doc.getElementById(id).remove();
          }
        };
        var strictCSP;
        var cssCache = [];
        exports2.useStrictCSP = function(value) {
          strictCSP = value;
          if (value == false)
            insertPendingStyles();
          else if (!cssCache)
            cssCache = [];
        };
        function insertPendingStyles() {
          var cache = cssCache;
          cssCache = null;
          cache && cache.forEach(function(item) {
            importCssString(item[0], item[1]);
          });
        }
        function importCssString(cssText, id, target) {
          if (typeof document == "undefined")
            return;
          if (cssCache) {
            if (target) {
              insertPendingStyles();
            } else if (target === false) {
              return cssCache.push([cssText, id]);
            }
          }
          if (strictCSP)
            return;
          var container = target;
          if (!target || !target.getRootNode) {
            container = document;
          } else {
            container = target.getRootNode();
            if (!container || container == target)
              container = document;
          }
          var doc = container.ownerDocument || container;
          if (id && exports2.hasCssString(id, container))
            return null;
          if (id)
            cssText += "\n/*# sourceURL=ace/css/" + id + " */";
          var style = exports2.createElement("style");
          style.appendChild(doc.createTextNode(cssText));
          if (id)
            style.id = id;
          if (container == doc)
            container = exports2.getDocumentHead(doc);
          container.insertBefore(style, container.firstChild);
        }
        exports2.importCssString = importCssString;
        exports2.importCssStylsheet = function(uri, doc) {
          exports2.buildDom(["link", { rel: "stylesheet", href: uri }], exports2.getDocumentHead(doc));
        };
        exports2.scrollbarWidth = function(document2) {
          var inner = exports2.createElement("ace_inner");
          inner.style.width = "100%";
          inner.style.minWidth = "0px";
          inner.style.height = "200px";
          inner.style.display = "block";
          var outer = exports2.createElement("ace_outer");
          var style = outer.style;
          style.position = "absolute";
          style.left = "-10000px";
          style.overflow = "hidden";
          style.width = "200px";
          style.minWidth = "0px";
          style.height = "150px";
          style.display = "block";
          outer.appendChild(inner);
          var body = document2.documentElement;
          body.appendChild(outer);
          var noScrollbar = inner.offsetWidth;
          style.overflow = "scroll";
          var withScrollbar = inner.offsetWidth;
          if (noScrollbar == withScrollbar) {
            withScrollbar = outer.clientWidth;
          }
          body.removeChild(outer);
          return noScrollbar - withScrollbar;
        };
        exports2.computedStyle = function(element, style) {
          return window.getComputedStyle(element, "") || {};
        };
        exports2.setStyle = function(styles, property, value) {
          if (styles[property] !== value) {
            styles[property] = value;
          }
        };
        exports2.HAS_CSS_ANIMATION = false;
        exports2.HAS_CSS_TRANSFORMS = false;
        exports2.HI_DPI = useragent.isWin ? typeof window !== "undefined" && window.devicePixelRatio >= 1.5 : true;
        if (useragent.isChromeOS)
          exports2.HI_DPI = false;
        if (typeof document !== "undefined") {
          var div = document.createElement("div");
          if (exports2.HI_DPI && div.style.transform !== void 0)
            exports2.HAS_CSS_TRANSFORMS = true;
          if (!useragent.isEdge && typeof div.style.animationName !== "undefined")
            exports2.HAS_CSS_ANIMATION = true;
          div = null;
        }
        if (exports2.HAS_CSS_TRANSFORMS) {
          exports2.translate = function(element, tx, ty) {
            element.style.transform = "translate(" + Math.round(tx) + "px, " + Math.round(ty) + "px)";
          };
        } else {
          exports2.translate = function(element, tx, ty) {
            element.style.top = Math.round(ty) + "px";
            element.style.left = Math.round(tx) + "px";
          };
        }
      });
      ace.define("ace/lib/net", ["require", "exports", "module", "ace/lib/dom"], function(require3, exports2, module2) {
        "use strict";
        var dom = require3("./dom");
        exports2.get = function(url, callback) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, true);
          xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
              callback(xhr.responseText);
            }
          };
          xhr.send(null);
        };
        exports2.loadScript = function(path, callback) {
          var head = dom.getDocumentHead();
          var s5 = document.createElement("script");
          s5.src = path;
          head.appendChild(s5);
          s5.onload = s5.onreadystatechange = function(_2, isAbort) {
            if (isAbort || !s5.readyState || s5.readyState == "loaded" || s5.readyState == "complete") {
              s5 = s5.onload = s5.onreadystatechange = null;
              if (!isAbort)
                callback();
            }
          };
        };
        exports2.qualifyURL = function(url) {
          var a3 = document.createElement("a");
          a3.href = url;
          return a3.href;
        };
      });
      ace.define("ace/lib/event_emitter", ["require", "exports", "module"], function(require3, exports2, module2) {
        "use strict";
        var EventEmitter = {};
        var stopPropagation = function() {
          this.propagationStopped = true;
        };
        var preventDefault = function() {
          this.defaultPrevented = true;
        };
        EventEmitter._emit = EventEmitter._dispatchEvent = function(eventName, e10) {
          this._eventRegistry || (this._eventRegistry = {});
          this._defaultHandlers || (this._defaultHandlers = {});
          var listeners = this._eventRegistry[eventName] || [];
          var defaultHandler = this._defaultHandlers[eventName];
          if (!listeners.length && !defaultHandler)
            return;
          if (typeof e10 != "object" || !e10)
            e10 = {};
          if (!e10.type)
            e10.type = eventName;
          if (!e10.stopPropagation)
            e10.stopPropagation = stopPropagation;
          if (!e10.preventDefault)
            e10.preventDefault = preventDefault;
          listeners = listeners.slice();
          for (var i6 = 0; i6 < listeners.length; i6++) {
            listeners[i6](e10, this);
            if (e10.propagationStopped)
              break;
          }
          if (defaultHandler && !e10.defaultPrevented)
            return defaultHandler(e10, this);
        };
        EventEmitter._signal = function(eventName, e10) {
          var listeners = (this._eventRegistry || {})[eventName];
          if (!listeners)
            return;
          listeners = listeners.slice();
          for (var i6 = 0; i6 < listeners.length; i6++)
            listeners[i6](e10, this);
        };
        EventEmitter.once = function(eventName, callback) {
          var _self = this;
          this.on(eventName, function newCallback() {
            _self.off(eventName, newCallback);
            callback.apply(null, arguments);
          });
          if (!callback) {
            return new Promise(function(resolve) {
              callback = resolve;
            });
          }
        };
        EventEmitter.setDefaultHandler = function(eventName, callback) {
          var handlers = this._defaultHandlers;
          if (!handlers)
            handlers = this._defaultHandlers = { _disabled_: {} };
          if (handlers[eventName]) {
            var old = handlers[eventName];
            var disabled = handlers._disabled_[eventName];
            if (!disabled)
              handlers._disabled_[eventName] = disabled = [];
            disabled.push(old);
            var i6 = disabled.indexOf(callback);
            if (i6 != -1)
              disabled.splice(i6, 1);
          }
          handlers[eventName] = callback;
        };
        EventEmitter.removeDefaultHandler = function(eventName, callback) {
          var handlers = this._defaultHandlers;
          if (!handlers)
            return;
          var disabled = handlers._disabled_[eventName];
          if (handlers[eventName] == callback) {
            if (disabled)
              this.setDefaultHandler(eventName, disabled.pop());
          } else if (disabled) {
            var i6 = disabled.indexOf(callback);
            if (i6 != -1)
              disabled.splice(i6, 1);
          }
        };
        EventEmitter.on = EventEmitter.addEventListener = function(eventName, callback, capturing) {
          this._eventRegistry = this._eventRegistry || {};
          var listeners = this._eventRegistry[eventName];
          if (!listeners)
            listeners = this._eventRegistry[eventName] = [];
          if (listeners.indexOf(callback) == -1)
            listeners[capturing ? "unshift" : "push"](callback);
          return callback;
        };
        EventEmitter.off = EventEmitter.removeListener = EventEmitter.removeEventListener = function(eventName, callback) {
          this._eventRegistry = this._eventRegistry || {};
          var listeners = this._eventRegistry[eventName];
          if (!listeners)
            return;
          var index = listeners.indexOf(callback);
          if (index !== -1)
            listeners.splice(index, 1);
        };
        EventEmitter.removeAllListeners = function(eventName) {
          if (!eventName)
            this._eventRegistry = this._defaultHandlers = void 0;
          if (this._eventRegistry)
            this._eventRegistry[eventName] = void 0;
          if (this._defaultHandlers)
            this._defaultHandlers[eventName] = void 0;
        };
        exports2.EventEmitter = EventEmitter;
      });
      ace.define("ace/lib/app_config", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(require3, exports2, module2) {
        "no use strict";
        var oop = require3("./oop");
        var EventEmitter = require3("./event_emitter").EventEmitter;
        var optionsProvider = {
          setOptions: function(optList) {
            Object.keys(optList).forEach(function(key) {
              this.setOption(key, optList[key]);
            }, this);
          },
          getOptions: function(optionNames) {
            var result = {};
            if (!optionNames) {
              var options = this.$options;
              optionNames = Object.keys(options).filter(function(key) {
                return !options[key].hidden;
              });
            } else if (!Array.isArray(optionNames)) {
              result = optionNames;
              optionNames = Object.keys(result);
            }
            optionNames.forEach(function(key) {
              result[key] = this.getOption(key);
            }, this);
            return result;
          },
          setOption: function(name2, value) {
            if (this["$" + name2] === value)
              return;
            var opt = this.$options[name2];
            if (!opt) {
              return warn('misspelled option "' + name2 + '"');
            }
            if (opt.forwardTo)
              return this[opt.forwardTo] && this[opt.forwardTo].setOption(name2, value);
            if (!opt.handlesSet)
              this["$" + name2] = value;
            if (opt && opt.set)
              opt.set.call(this, value);
          },
          getOption: function(name2) {
            var opt = this.$options[name2];
            if (!opt) {
              return warn('misspelled option "' + name2 + '"');
            }
            if (opt.forwardTo)
              return this[opt.forwardTo] && this[opt.forwardTo].getOption(name2);
            return opt && opt.get ? opt.get.call(this) : this["$" + name2];
          }
        };
        function warn(message) {
          if (typeof console != "undefined" && console.warn)
            console.warn.apply(console, arguments);
        }
        function reportError(msg, data) {
          var e10 = new Error(msg);
          e10.data = data;
          if (typeof console == "object" && console.error)
            console.error(e10);
          setTimeout(function() {
            throw e10;
          });
        }
        var AppConfig = function() {
          this.$defaultOptions = {};
        };
        (function() {
          oop.implement(this, EventEmitter);
          this.defineOptions = function(obj, path, options) {
            if (!obj.$options)
              this.$defaultOptions[path] = obj.$options = {};
            Object.keys(options).forEach(function(key) {
              var opt = options[key];
              if (typeof opt == "string")
                opt = { forwardTo: opt };
              opt.name || (opt.name = key);
              obj.$options[opt.name] = opt;
              if ("initialValue" in opt)
                obj["$" + opt.name] = opt.initialValue;
            });
            oop.implement(obj, optionsProvider);
            return this;
          };
          this.resetOptions = function(obj) {
            Object.keys(obj.$options).forEach(function(key) {
              var opt = obj.$options[key];
              if ("value" in opt)
                obj.setOption(key, opt.value);
            });
          };
          this.setDefaultValue = function(path, name2, value) {
            if (!path) {
              for (path in this.$defaultOptions)
                if (this.$defaultOptions[path][name2])
                  break;
              if (!this.$defaultOptions[path][name2])
                return false;
            }
            var opts = this.$defaultOptions[path] || (this.$defaultOptions[path] = {});
            if (opts[name2]) {
              if (opts.forwardTo)
                this.setDefaultValue(opts.forwardTo, name2, value);
              else
                opts[name2].value = value;
            }
          };
          this.setDefaultValues = function(path, optionHash) {
            Object.keys(optionHash).forEach(function(key) {
              this.setDefaultValue(path, key, optionHash[key]);
            }, this);
          };
          this.warn = warn;
          this.reportError = reportError;
        }).call(AppConfig.prototype);
        exports2.AppConfig = AppConfig;
      });
      ace.define("ace/theme/textmate", ["require", "exports", "module", "ace/lib/dom"], function(require3, exports2, module2) {
        "use strict";
        exports2.isDark = false;
        exports2.cssClass = "ace-tm";
        exports2.cssText = '.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}';
        exports2.$id = "ace/theme/textmate";
        var dom = require3("../lib/dom");
        dom.importCssString(exports2.cssText, exports2.cssClass, false);
      });
      ace.define("ace/config", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/lib/net", "ace/lib/dom", "ace/lib/app_config", "ace/theme/textmate"], function(require3, exports2, module2) {
        "no use strict";
        var lang = require3("./lib/lang");
        var oop = require3("./lib/oop");
        var net = require3("./lib/net");
        var dom = require3("./lib/dom");
        var AppConfig = require3("./lib/app_config").AppConfig;
        module2.exports = exports2 = new AppConfig();
        var options = {
          packaged: false,
          workerPath: null,
          modePath: null,
          themePath: null,
          basePath: "",
          suffix: ".js",
          $moduleUrls: {},
          loadWorkerFromBlob: true,
          sharedPopups: false,
          useStrictCSP: null
        };
        exports2.get = function(key) {
          if (!options.hasOwnProperty(key))
            throw new Error("Unknown config key: " + key);
          return options[key];
        };
        exports2.set = function(key, value) {
          if (options.hasOwnProperty(key))
            options[key] = value;
          else if (this.setDefaultValue("", key, value) == false)
            throw new Error("Unknown config key: " + key);
          if (key == "useStrictCSP")
            dom.useStrictCSP(value);
        };
        exports2.all = function() {
          return lang.copyObject(options);
        };
        exports2.$modes = {};
        exports2.moduleUrl = function(name2, component) {
          if (options.$moduleUrls[name2])
            return options.$moduleUrls[name2];
          var parts = name2.split("/");
          component = component || parts[parts.length - 2] || "";
          var sep = component == "snippets" ? "/" : "-";
          var base = parts[parts.length - 1];
          if (component == "worker" && sep == "-") {
            var re = new RegExp("^" + component + "[\\-_]|[\\-_]" + component + "$", "g");
            base = base.replace(re, "");
          }
          if ((!base || base == component) && parts.length > 1)
            base = parts[parts.length - 2];
          var path = options[component + "Path"];
          if (path == null) {
            path = options.basePath;
          } else if (sep == "/") {
            component = sep = "";
          }
          if (path && path.slice(-1) != "/")
            path += "/";
          return path + component + sep + base + this.get("suffix");
        };
        exports2.setModuleUrl = function(name2, subst) {
          return options.$moduleUrls[name2] = subst;
        };
        var loader = function(moduleName, cb) {
          if (moduleName == "ace/theme/textmate")
            return cb(null, require3("./theme/textmate"));
          return console.error("loader is not configured");
        };
        exports2.setLoader = function(cb) {
          loader = cb;
        };
        exports2.$loading = {};
        exports2.loadModule = function(moduleName, onLoad) {
          var module3, moduleType;
          if (Array.isArray(moduleName)) {
            moduleType = moduleName[0];
            moduleName = moduleName[1];
          }
          try {
            module3 = require3(moduleName);
          } catch (e10) {
          }
          if (module3 && !exports2.$loading[moduleName])
            return onLoad && onLoad(module3);
          if (!exports2.$loading[moduleName])
            exports2.$loading[moduleName] = [];
          exports2.$loading[moduleName].push(onLoad);
          if (exports2.$loading[moduleName].length > 1)
            return;
          var afterLoad = function() {
            require3([moduleName], function(module4) {
              exports2._emit("load.module", { name: moduleName, module: module4 });
              var listeners = exports2.$loading[moduleName];
              exports2.$loading[moduleName] = null;
              listeners.forEach(function(onLoad2) {
                onLoad2 && onLoad2(module4);
              });
            });
          };
          if (!exports2.get("packaged"))
            return afterLoad();
          net.loadScript(exports2.moduleUrl(moduleName, moduleType), afterLoad);
          reportErrorIfPathIsNotConfigured();
        };
        var reportErrorIfPathIsNotConfigured = function() {
          if (!options.basePath && !options.workerPath && !options.modePath && !options.themePath && !Object.keys(options.$moduleUrls).length) {
            console.error(
              "Unable to infer path to ace from script src,",
              "use ace.config.set('basePath', 'path') to enable dynamic loading of modes and themes",
              "or with webpack use ace/webpack-resolver"
            );
            reportErrorIfPathIsNotConfigured = function() {
            };
          }
        };
        exports2.version = "1.8.1";
      });
      ace.define("ace/loader_build", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/config"], function(require3, exports2, module2) {
        "use strict";
        require3("./lib/fixoldbrowsers");
        var config2 = require3("./config");
        var global = function() {
          return this || typeof window != "undefined" && window;
        }();
        module2.exports = function(ace4) {
          config2.init = init2;
          ace4.require = require3;
          if (typeof define === "function")
            ace4.define = define;
        };
        init2(true);
        function init2(packaged) {
          if (!global || !global.document)
            return;
          config2.set("packaged", packaged || require3.packaged || module2.packaged || global.define && define.packaged);
          var scriptOptions = {};
          var scriptUrl = "";
          var currentScript = document.currentScript || document._currentScript;
          var currentDocument = currentScript && currentScript.ownerDocument || document;
          var scripts = currentDocument.getElementsByTagName("script");
          for (var i6 = 0; i6 < scripts.length; i6++) {
            var script = scripts[i6];
            var src = script.src || script.getAttribute("src");
            if (!src)
              continue;
            var attributes = script.attributes;
            for (var j = 0, l7 = attributes.length; j < l7; j++) {
              var attr = attributes[j];
              if (attr.name.indexOf("data-ace-") === 0) {
                scriptOptions[deHyphenate(attr.name.replace(/^data-ace-/, ""))] = attr.value;
              }
            }
            var m2 = src.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);
            if (m2)
              scriptUrl = m2[1];
          }
          if (scriptUrl) {
            scriptOptions.base = scriptOptions.base || scriptUrl;
            scriptOptions.packaged = true;
          }
          scriptOptions.basePath = scriptOptions.base;
          scriptOptions.workerPath = scriptOptions.workerPath || scriptOptions.base;
          scriptOptions.modePath = scriptOptions.modePath || scriptOptions.base;
          scriptOptions.themePath = scriptOptions.themePath || scriptOptions.base;
          delete scriptOptions.base;
          for (var key in scriptOptions)
            if (typeof scriptOptions[key] !== "undefined")
              config2.set(key, scriptOptions[key]);
        }
        function deHyphenate(str) {
          return str.replace(/-(.)/g, function(m2, m1) {
            return m1.toUpperCase();
          });
        }
      });
      ace.define("ace/lib/keys", ["require", "exports", "module", "ace/lib/oop"], function(require3, exports2, module2) {
        "use strict";
        var oop = require3("./oop");
        var Keys = function() {
          var ret = {
            MODIFIER_KEYS: {
              16: "Shift",
              17: "Ctrl",
              18: "Alt",
              224: "Meta",
              91: "MetaLeft",
              92: "MetaRight",
              93: "ContextMenu"
            },
            KEY_MODS: {
              "ctrl": 1,
              "alt": 2,
              "option": 2,
              "shift": 4,
              "super": 8,
              "meta": 8,
              "command": 8,
              "cmd": 8,
              "control": 1
            },
            FUNCTION_KEYS: {
              8: "Backspace",
              9: "Tab",
              13: "Return",
              19: "Pause",
              27: "Esc",
              32: "Space",
              33: "PageUp",
              34: "PageDown",
              35: "End",
              36: "Home",
              37: "Left",
              38: "Up",
              39: "Right",
              40: "Down",
              44: "Print",
              45: "Insert",
              46: "Delete",
              96: "Numpad0",
              97: "Numpad1",
              98: "Numpad2",
              99: "Numpad3",
              100: "Numpad4",
              101: "Numpad5",
              102: "Numpad6",
              103: "Numpad7",
              104: "Numpad8",
              105: "Numpad9",
              "-13": "NumpadEnter",
              112: "F1",
              113: "F2",
              114: "F3",
              115: "F4",
              116: "F5",
              117: "F6",
              118: "F7",
              119: "F8",
              120: "F9",
              121: "F10",
              122: "F11",
              123: "F12",
              144: "Numlock",
              145: "Scrolllock"
            },
            PRINTABLE_KEYS: {
              32: " ",
              48: "0",
              49: "1",
              50: "2",
              51: "3",
              52: "4",
              53: "5",
              54: "6",
              55: "7",
              56: "8",
              57: "9",
              59: ";",
              61: "=",
              65: "a",
              66: "b",
              67: "c",
              68: "d",
              69: "e",
              70: "f",
              71: "g",
              72: "h",
              73: "i",
              74: "j",
              75: "k",
              76: "l",
              77: "m",
              78: "n",
              79: "o",
              80: "p",
              81: "q",
              82: "r",
              83: "s",
              84: "t",
              85: "u",
              86: "v",
              87: "w",
              88: "x",
              89: "y",
              90: "z",
              107: "+",
              109: "-",
              110: ".",
              186: ";",
              187: "=",
              188: ",",
              189: "-",
              190: ".",
              191: "/",
              192: "`",
              219: "[",
              220: "\\",
              221: "]",
              222: "'",
              111: "/",
              106: "*"
            }
          };
          var name2, i6;
          for (i6 in ret.FUNCTION_KEYS) {
            name2 = ret.FUNCTION_KEYS[i6].toLowerCase();
            ret[name2] = parseInt(i6, 10);
          }
          for (i6 in ret.PRINTABLE_KEYS) {
            name2 = ret.PRINTABLE_KEYS[i6].toLowerCase();
            ret[name2] = parseInt(i6, 10);
          }
          oop.mixin(ret, ret.MODIFIER_KEYS);
          oop.mixin(ret, ret.PRINTABLE_KEYS);
          oop.mixin(ret, ret.FUNCTION_KEYS);
          ret.enter = ret["return"];
          ret.escape = ret.esc;
          ret.del = ret["delete"];
          ret[173] = "-";
          (function() {
            var mods = ["cmd", "ctrl", "alt", "shift"];
            for (var i7 = Math.pow(2, mods.length); i7--; ) {
              ret.KEY_MODS[i7] = mods.filter(function(x2) {
                return i7 & ret.KEY_MODS[x2];
              }).join("-") + "-";
            }
          })();
          ret.KEY_MODS[0] = "";
          ret.KEY_MODS[-1] = "input-";
          return ret;
        }();
        oop.mixin(exports2, Keys);
        exports2.keyCodeToString = function(keyCode) {
          var keyString = Keys[keyCode];
          if (typeof keyString != "string")
            keyString = String.fromCharCode(keyCode);
          return keyString.toLowerCase();
        };
      });
      ace.define("ace/lib/event", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function(require3, exports2, module2) {
        "use strict";
        var keys = require3("./keys");
        var useragent = require3("./useragent");
        var pressedKeys = null;
        var ts = 0;
        var activeListenerOptions;
        function detectListenerOptionsSupport() {
          activeListenerOptions = false;
          try {
            document.createComment("").addEventListener("test", function() {
            }, {
              get passive() {
                activeListenerOptions = { passive: false };
              }
            });
          } catch (e10) {
          }
        }
        function getListenerOptions() {
          if (activeListenerOptions == void 0)
            detectListenerOptionsSupport();
          return activeListenerOptions;
        }
        function EventListener(elem, type, callback) {
          this.elem = elem;
          this.type = type;
          this.callback = callback;
        }
        EventListener.prototype.destroy = function() {
          removeListener(this.elem, this.type, this.callback);
          this.elem = this.type = this.callback = void 0;
        };
        var addListener = exports2.addListener = function(elem, type, callback, destroyer) {
          elem.addEventListener(type, callback, getListenerOptions());
          if (destroyer)
            destroyer.$toDestroy.push(new EventListener(elem, type, callback));
        };
        var removeListener = exports2.removeListener = function(elem, type, callback) {
          elem.removeEventListener(type, callback, getListenerOptions());
        };
        exports2.stopEvent = function(e10) {
          exports2.stopPropagation(e10);
          exports2.preventDefault(e10);
          return false;
        };
        exports2.stopPropagation = function(e10) {
          if (e10.stopPropagation)
            e10.stopPropagation();
        };
        exports2.preventDefault = function(e10) {
          if (e10.preventDefault)
            e10.preventDefault();
        };
        exports2.getButton = function(e10) {
          if (e10.type == "dblclick")
            return 0;
          if (e10.type == "contextmenu" || useragent.isMac && (e10.ctrlKey && !e10.altKey && !e10.shiftKey))
            return 2;
          return e10.button;
        };
        exports2.capture = function(el, eventHandler, releaseCaptureHandler) {
          var ownerDocument = el && el.ownerDocument || document;
          function onMouseUp(e10) {
            eventHandler && eventHandler(e10);
            releaseCaptureHandler && releaseCaptureHandler(e10);
            removeListener(ownerDocument, "mousemove", eventHandler);
            removeListener(ownerDocument, "mouseup", onMouseUp);
            removeListener(ownerDocument, "dragstart", onMouseUp);
          }
          addListener(ownerDocument, "mousemove", eventHandler);
          addListener(ownerDocument, "mouseup", onMouseUp);
          addListener(ownerDocument, "dragstart", onMouseUp);
          return onMouseUp;
        };
        exports2.addMouseWheelListener = function(el, callback, destroyer) {
          addListener(el, "wheel", function(e10) {
            var factor = 0.15;
            var deltaX = e10.deltaX || 0;
            var deltaY = e10.deltaY || 0;
            switch (e10.deltaMode) {
              case e10.DOM_DELTA_PIXEL:
                e10.wheelX = deltaX * factor;
                e10.wheelY = deltaY * factor;
                break;
              case e10.DOM_DELTA_LINE:
                var linePixels = 15;
                e10.wheelX = deltaX * linePixels;
                e10.wheelY = deltaY * linePixels;
                break;
              case e10.DOM_DELTA_PAGE:
                var pagePixels = 150;
                e10.wheelX = deltaX * pagePixels;
                e10.wheelY = deltaY * pagePixels;
                break;
            }
            callback(e10);
          }, destroyer);
        };
        exports2.addMultiMouseDownListener = function(elements, timeouts, eventHandler, callbackName, destroyer) {
          var clicks = 0;
          var startX, startY, timer;
          var eventNames = {
            2: "dblclick",
            3: "tripleclick",
            4: "quadclick"
          };
          function onMousedown(e10) {
            if (exports2.getButton(e10) !== 0) {
              clicks = 0;
            } else if (e10.detail > 1) {
              clicks++;
              if (clicks > 4)
                clicks = 1;
            } else {
              clicks = 1;
            }
            if (useragent.isIE) {
              var isNewClick = Math.abs(e10.clientX - startX) > 5 || Math.abs(e10.clientY - startY) > 5;
              if (!timer || isNewClick)
                clicks = 1;
              if (timer)
                clearTimeout(timer);
              timer = setTimeout(function() {
                timer = null;
              }, timeouts[clicks - 1] || 600);
              if (clicks == 1) {
                startX = e10.clientX;
                startY = e10.clientY;
              }
            }
            e10._clicks = clicks;
            eventHandler[callbackName]("mousedown", e10);
            if (clicks > 4)
              clicks = 0;
            else if (clicks > 1)
              return eventHandler[callbackName](eventNames[clicks], e10);
          }
          if (!Array.isArray(elements))
            elements = [elements];
          elements.forEach(function(el) {
            addListener(el, "mousedown", onMousedown, destroyer);
          });
        };
        var getModifierHash = function(e10) {
          return 0 | (e10.ctrlKey ? 1 : 0) | (e10.altKey ? 2 : 0) | (e10.shiftKey ? 4 : 0) | (e10.metaKey ? 8 : 0);
        };
        exports2.getModifierString = function(e10) {
          return keys.KEY_MODS[getModifierHash(e10)];
        };
        function normalizeCommandKeys(callback, e10, keyCode) {
          var hashId = getModifierHash(e10);
          if (!useragent.isMac && pressedKeys) {
            if (e10.getModifierState && (e10.getModifierState("OS") || e10.getModifierState("Win")))
              hashId |= 8;
            if (pressedKeys.altGr) {
              if ((3 & hashId) != 3)
                pressedKeys.altGr = 0;
              else
                return;
            }
            if (keyCode === 18 || keyCode === 17) {
              var location2 = "location" in e10 ? e10.location : e10.keyLocation;
              if (keyCode === 17 && location2 === 1) {
                if (pressedKeys[keyCode] == 1)
                  ts = e10.timeStamp;
              } else if (keyCode === 18 && hashId === 3 && location2 === 2) {
                var dt = e10.timeStamp - ts;
                if (dt < 50)
                  pressedKeys.altGr = true;
              }
            }
          }
          if (keyCode in keys.MODIFIER_KEYS) {
            keyCode = -1;
          }
          if (!hashId && keyCode === 13) {
            var location2 = "location" in e10 ? e10.location : e10.keyLocation;
            if (location2 === 3) {
              callback(e10, hashId, -keyCode);
              if (e10.defaultPrevented)
                return;
            }
          }
          if (useragent.isChromeOS && hashId & 8) {
            callback(e10, hashId, keyCode);
            if (e10.defaultPrevented)
              return;
            else
              hashId &= ~8;
          }
          if (!hashId && !(keyCode in keys.FUNCTION_KEYS) && !(keyCode in keys.PRINTABLE_KEYS)) {
            return false;
          }
          return callback(e10, hashId, keyCode);
        }
        exports2.addCommandKeyListener = function(el, callback, destroyer) {
          if (useragent.isOldGecko || useragent.isOpera && !("KeyboardEvent" in window)) {
            var lastKeyDownKeyCode = null;
            addListener(el, "keydown", function(e10) {
              lastKeyDownKeyCode = e10.keyCode;
            }, destroyer);
            addListener(el, "keypress", function(e10) {
              return normalizeCommandKeys(callback, e10, lastKeyDownKeyCode);
            }, destroyer);
          } else {
            var lastDefaultPrevented = null;
            addListener(el, "keydown", function(e10) {
              pressedKeys[e10.keyCode] = (pressedKeys[e10.keyCode] || 0) + 1;
              var result = normalizeCommandKeys(callback, e10, e10.keyCode);
              lastDefaultPrevented = e10.defaultPrevented;
              return result;
            }, destroyer);
            addListener(el, "keypress", function(e10) {
              if (lastDefaultPrevented && (e10.ctrlKey || e10.altKey || e10.shiftKey || e10.metaKey)) {
                exports2.stopEvent(e10);
                lastDefaultPrevented = null;
              }
            }, destroyer);
            addListener(el, "keyup", function(e10) {
              pressedKeys[e10.keyCode] = null;
            }, destroyer);
            if (!pressedKeys) {
              resetPressedKeys();
              addListener(window, "focus", resetPressedKeys);
            }
          }
        };
        function resetPressedKeys() {
          pressedKeys = /* @__PURE__ */ Object.create(null);
        }
        if (typeof window == "object" && window.postMessage && !useragent.isOldIE) {
          var postMessageId = 1;
          exports2.nextTick = function(callback, win) {
            win = win || window;
            var messageName = "zero-timeout-message-" + postMessageId++;
            var listener = function(e10) {
              if (e10.data == messageName) {
                exports2.stopPropagation(e10);
                removeListener(win, "message", listener);
                callback();
              }
            };
            addListener(win, "message", listener);
            win.postMessage(messageName, "*");
          };
        }
        exports2.$idleBlocked = false;
        exports2.onIdle = function(cb, timeout) {
          return setTimeout(function handler() {
            if (!exports2.$idleBlocked) {
              cb();
            } else {
              setTimeout(handler, 100);
            }
          }, timeout);
        };
        exports2.$idleBlockId = null;
        exports2.blockIdle = function(delay) {
          if (exports2.$idleBlockId)
            clearTimeout(exports2.$idleBlockId);
          exports2.$idleBlocked = true;
          exports2.$idleBlockId = setTimeout(function() {
            exports2.$idleBlocked = false;
          }, delay || 100);
        };
        exports2.nextFrame = typeof window == "object" && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame);
        if (exports2.nextFrame)
          exports2.nextFrame = exports2.nextFrame.bind(window);
        else
          exports2.nextFrame = function(callback) {
            setTimeout(callback, 17);
          };
      });
      ace.define("ace/range", ["require", "exports", "module"], function(require3, exports2, module2) {
        "use strict";
        var comparePoints = function(p1, p2) {
          return p1.row - p2.row || p1.column - p2.column;
        };
        var Range = function(startRow, startColumn, endRow, endColumn) {
          this.start = {
            row: startRow,
            column: startColumn
          };
          this.end = {
            row: endRow,
            column: endColumn
          };
        };
        (function() {
          this.isEqual = function(range) {
            return this.start.row === range.start.row && this.end.row === range.end.row && this.start.column === range.start.column && this.end.column === range.end.column;
          };
          this.toString = function() {
            return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]";
          };
          this.contains = function(row, column) {
            return this.compare(row, column) == 0;
          };
          this.compareRange = function(range) {
            var cmp, end = range.end, start = range.start;
            cmp = this.compare(end.row, end.column);
            if (cmp == 1) {
              cmp = this.compare(start.row, start.column);
              if (cmp == 1) {
                return 2;
              } else if (cmp == 0) {
                return 1;
              } else {
                return 0;
              }
            } else if (cmp == -1) {
              return -2;
            } else {
              cmp = this.compare(start.row, start.column);
              if (cmp == -1) {
                return -1;
              } else if (cmp == 1) {
                return 42;
              } else {
                return 0;
              }
            }
          };
          this.comparePoint = function(p2) {
            return this.compare(p2.row, p2.column);
          };
          this.containsRange = function(range) {
            return this.comparePoint(range.start) == 0 && this.comparePoint(range.end) == 0;
          };
          this.intersects = function(range) {
            var cmp = this.compareRange(range);
            return cmp == -1 || cmp == 0 || cmp == 1;
          };
          this.isEnd = function(row, column) {
            return this.end.row == row && this.end.column == column;
          };
          this.isStart = function(row, column) {
            return this.start.row == row && this.start.column == column;
          };
          this.setStart = function(row, column) {
            if (typeof row == "object") {
              this.start.column = row.column;
              this.start.row = row.row;
            } else {
              this.start.row = row;
              this.start.column = column;
            }
          };
          this.setEnd = function(row, column) {
            if (typeof row == "object") {
              this.end.column = row.column;
              this.end.row = row.row;
            } else {
              this.end.row = row;
              this.end.column = column;
            }
          };
          this.inside = function(row, column) {
            if (this.compare(row, column) == 0) {
              if (this.isEnd(row, column) || this.isStart(row, column)) {
                return false;
              } else {
                return true;
              }
            }
            return false;
          };
          this.insideStart = function(row, column) {
            if (this.compare(row, column) == 0) {
              if (this.isEnd(row, column)) {
                return false;
              } else {
                return true;
              }
            }
            return false;
          };
          this.insideEnd = function(row, column) {
            if (this.compare(row, column) == 0) {
              if (this.isStart(row, column)) {
                return false;
              } else {
                return true;
              }
            }
            return false;
          };
          this.compare = function(row, column) {
            if (!this.isMultiLine()) {
              if (row === this.start.row) {
                return column < this.start.column ? -1 : column > this.end.column ? 1 : 0;
              }
            }
            if (row < this.start.row)
              return -1;
            if (row > this.end.row)
              return 1;
            if (this.start.row === row)
              return column >= this.start.column ? 0 : -1;
            if (this.end.row === row)
              return column <= this.end.column ? 0 : 1;
            return 0;
          };
          this.compareStart = function(row, column) {
            if (this.start.row == row && this.start.column == column) {
              return -1;
            } else {
              return this.compare(row, column);
            }
          };
          this.compareEnd = function(row, column) {
            if (this.end.row == row && this.end.column == column) {
              return 1;
            } else {
              return this.compare(row, column);
            }
          };
          this.compareInside = function(row, column) {
            if (this.end.row == row && this.end.column == column) {
              return 1;
            } else if (this.start.row == row && this.start.column == column) {
              return -1;
            } else {
              return this.compare(row, column);
            }
          };
          this.clipRows = function(firstRow, lastRow) {
            if (this.end.row > lastRow)
              var end = { row: lastRow + 1, column: 0 };
            else if (this.end.row < firstRow)
              var end = { row: firstRow, column: 0 };
            if (this.start.row > lastRow)
              var start = { row: lastRow + 1, column: 0 };
            else if (this.start.row < firstRow)
              var start = { row: firstRow, column: 0 };
            return Range.fromPoints(start || this.start, end || this.end);
          };
          this.extend = function(row, column) {
            var cmp = this.compare(row, column);
            if (cmp == 0)
              return this;
            else if (cmp == -1)
              var start = { row, column };
            else
              var end = { row, column };
            return Range.fromPoints(start || this.start, end || this.end);
          };
          this.isEmpty = function() {
            return this.start.row === this.end.row && this.start.column === this.end.column;
          };
          this.isMultiLine = function() {
            return this.start.row !== this.end.row;
          };
          this.clone = function() {
            return Range.fromPoints(this.start, this.end);
          };
          this.collapseRows = function() {
            if (this.end.column == 0)
              return new Range(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0);
            else
              return new Range(this.start.row, 0, this.end.row, 0);
          };
          this.toScreenRange = function(session) {
            var screenPosStart = session.documentToScreenPosition(this.start);
            var screenPosEnd = session.documentToScreenPosition(this.end);
            return new Range(
              screenPosStart.row,
              screenPosStart.column,
              screenPosEnd.row,
              screenPosEnd.column
            );
          };
          this.moveBy = function(row, column) {
            this.start.row += row;
            this.start.column += column;
            this.end.row += row;
            this.end.column += column;
          };
        }).call(Range.prototype);
        Range.fromPoints = function(start, end) {
          return new Range(start.row, start.column, end.row, end.column);
        };
        Range.comparePoints = comparePoints;
        Range.comparePoints = function(p1, p2) {
          return p1.row - p2.row || p1.column - p2.column;
        };
        exports2.Range = Range;
      });
      ace.define("ace/clipboard", ["require", "exports", "module"], function(require3, exports2, module2) {
        "use strict";
        var $cancelT;
        module2.exports = {
          lineMode: false,
          pasteCancelled: function() {
            if ($cancelT && $cancelT > Date.now() - 50)
              return true;
            return $cancelT = false;
          },
          cancel: function() {
            $cancelT = Date.now();
          }
        };
      });
      ace.define("ace/keyboard/textinput", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang", "ace/clipboard", "ace/lib/keys"], function(require3, exports2, module2) {
        "use strict";
        var event = require3("../lib/event");
        var useragent = require3("../lib/useragent");
        var dom = require3("../lib/dom");
        var lang = require3("../lib/lang");
        var clipboard = require3("../clipboard");
        var BROKEN_SETDATA = useragent.isChrome < 18;
        var USE_IE_MIME_TYPE = useragent.isIE;
        var HAS_FOCUS_ARGS = useragent.isChrome > 63;
        var MAX_LINE_LENGTH = 400;
        var KEYS = require3("../lib/keys");
        var MODS = KEYS.KEY_MODS;
        var isIOS = useragent.isIOS;
        var valueResetRegex = isIOS ? /\s/ : /\n/;
        var isMobile = useragent.isMobile;
        var TextInput = function(parentNode, host) {
          var text = dom.createElement("textarea");
          text.className = "ace_text-input";
          text.setAttribute("wrap", "off");
          text.setAttribute("autocorrect", "off");
          text.setAttribute("autocapitalize", "off");
          text.setAttribute("spellcheck", false);
          text.style.opacity = "0";
          parentNode.insertBefore(text, parentNode.firstChild);
          var copied = false;
          var pasted = false;
          var inComposition = false;
          var sendingText = false;
          var tempStyle = "";
          if (!isMobile)
            text.style.fontSize = "1px";
          var commandMode = false;
          var ignoreFocusEvents = false;
          var lastValue = "";
          var lastSelectionStart = 0;
          var lastSelectionEnd = 0;
          var lastRestoreEnd = 0;
          try {
            var isFocused = document.activeElement === text;
          } catch (e10) {
          }
          event.addListener(text, "blur", function(e10) {
            if (ignoreFocusEvents)
              return;
            host.onBlur(e10);
            isFocused = false;
          }, host);
          event.addListener(text, "focus", function(e10) {
            if (ignoreFocusEvents)
              return;
            isFocused = true;
            if (useragent.isEdge) {
              try {
                if (!document.hasFocus())
                  return;
              } catch (e11) {
              }
            }
            host.onFocus(e10);
            if (useragent.isEdge)
              setTimeout(resetSelection);
            else
              resetSelection();
          }, host);
          this.$focusScroll = false;
          this.focus = function() {
            if (tempStyle || HAS_FOCUS_ARGS || this.$focusScroll == "browser")
              return text.focus({ preventScroll: true });
            var top = text.style.top;
            text.style.position = "fixed";
            text.style.top = "0px";
            try {
              var isTransformed = text.getBoundingClientRect().top != 0;
            } catch (e10) {
              return;
            }
            var ancestors = [];
            if (isTransformed) {
              var t5 = text.parentElement;
              while (t5 && t5.nodeType == 1) {
                ancestors.push(t5);
                t5.setAttribute("ace_nocontext", true);
                if (!t5.parentElement && t5.getRootNode)
                  t5 = t5.getRootNode().host;
                else
                  t5 = t5.parentElement;
              }
            }
            text.focus({ preventScroll: true });
            if (isTransformed) {
              ancestors.forEach(function(p2) {
                p2.removeAttribute("ace_nocontext");
              });
            }
            setTimeout(function() {
              text.style.position = "";
              if (text.style.top == "0px")
                text.style.top = top;
            }, 0);
          };
          this.blur = function() {
            text.blur();
          };
          this.isFocused = function() {
            return isFocused;
          };
          host.on("beforeEndOperation", function() {
            var curOp = host.curOp;
            var commandName = curOp && curOp.command && curOp.command.name;
            if (commandName == "insertstring")
              return;
            var isUserAction = commandName && (curOp.docChanged || curOp.selectionChanged);
            if (inComposition && isUserAction) {
              lastValue = text.value = "";
              onCompositionEnd();
            }
            resetSelection();
          });
          var resetSelection = isIOS ? function(value) {
            if (!isFocused || copied && !value || sendingText)
              return;
            if (!value)
              value = "";
            var newValue = "\n ab" + value + "cde fg\n";
            if (newValue != text.value)
              text.value = lastValue = newValue;
            var selectionStart = 4;
            var selectionEnd = 4 + (value.length || (host.selection.isEmpty() ? 0 : 1));
            if (lastSelectionStart != selectionStart || lastSelectionEnd != selectionEnd) {
              text.setSelectionRange(selectionStart, selectionEnd);
            }
            lastSelectionStart = selectionStart;
            lastSelectionEnd = selectionEnd;
          } : function() {
            if (inComposition || sendingText)
              return;
            if (!isFocused && !afterContextMenu)
              return;
            inComposition = true;
            var selectionStart = 0;
            var selectionEnd = 0;
            var line = "";
            if (host.session) {
              var selection = host.selection;
              var range = selection.getRange();
              var row = selection.cursor.row;
              selectionStart = range.start.column;
              selectionEnd = range.end.column;
              line = host.session.getLine(row);
              if (range.start.row != row) {
                var prevLine = host.session.getLine(row - 1);
                selectionStart = range.start.row < row - 1 ? 0 : selectionStart;
                selectionEnd += prevLine.length + 1;
                line = prevLine + "\n" + line;
              } else if (range.end.row != row) {
                var nextLine = host.session.getLine(row + 1);
                selectionEnd = range.end.row > row + 1 ? nextLine.length : selectionEnd;
                selectionEnd += line.length + 1;
                line = line + "\n" + nextLine;
              } else if (isMobile && row > 0) {
                line = "\n" + line;
                selectionEnd += 1;
                selectionStart += 1;
              }
              if (line.length > MAX_LINE_LENGTH) {
                if (selectionStart < MAX_LINE_LENGTH && selectionEnd < MAX_LINE_LENGTH) {
                  line = line.slice(0, MAX_LINE_LENGTH);
                } else {
                  line = "\n";
                  if (selectionStart == selectionEnd) {
                    selectionStart = selectionEnd = 0;
                  } else {
                    selectionStart = 0;
                    selectionEnd = 1;
                  }
                }
              }
            }
            var newValue = line + "\n\n";
            if (newValue != lastValue) {
              text.value = lastValue = newValue;
              lastSelectionStart = lastSelectionEnd = newValue.length;
            }
            if (afterContextMenu) {
              lastSelectionStart = text.selectionStart;
              lastSelectionEnd = text.selectionEnd;
            }
            if (lastSelectionEnd != selectionEnd || lastSelectionStart != selectionStart || text.selectionEnd != lastSelectionEnd) {
              try {
                text.setSelectionRange(selectionStart, selectionEnd);
                lastSelectionStart = selectionStart;
                lastSelectionEnd = selectionEnd;
              } catch (e10) {
              }
            }
            inComposition = false;
          };
          this.resetSelection = resetSelection;
          if (isFocused)
            host.onFocus();
          var isAllSelected = function(text2) {
            return text2.selectionStart === 0 && text2.selectionEnd >= lastValue.length && text2.value === lastValue && lastValue && text2.selectionEnd !== lastSelectionEnd;
          };
          var onSelect = function(e10) {
            if (inComposition)
              return;
            if (copied) {
              copied = false;
            } else if (isAllSelected(text)) {
              host.selectAll();
              resetSelection();
            } else if (isMobile && text.selectionStart != lastSelectionStart) {
              resetSelection();
            }
          };
          var inputHandler = null;
          this.setInputHandler = function(cb) {
            inputHandler = cb;
          };
          this.getInputHandler = function() {
            return inputHandler;
          };
          var afterContextMenu = false;
          var sendText = function(value, fromInput) {
            if (afterContextMenu)
              afterContextMenu = false;
            if (pasted) {
              resetSelection();
              if (value)
                host.onPaste(value);
              pasted = false;
              return "";
            } else {
              var selectionStart = text.selectionStart;
              var selectionEnd = text.selectionEnd;
              var extendLeft = lastSelectionStart;
              var extendRight = lastValue.length - lastSelectionEnd;
              var inserted = value;
              var restoreStart = value.length - selectionStart;
              var restoreEnd = value.length - selectionEnd;
              var i6 = 0;
              while (extendLeft > 0 && lastValue[i6] == value[i6]) {
                i6++;
                extendLeft--;
              }
              inserted = inserted.slice(i6);
              i6 = 1;
              while (extendRight > 0 && lastValue.length - i6 > lastSelectionStart - 1 && lastValue[lastValue.length - i6] == value[value.length - i6]) {
                i6++;
                extendRight--;
              }
              restoreStart -= i6 - 1;
              restoreEnd -= i6 - 1;
              var endIndex = inserted.length - i6 + 1;
              if (endIndex < 0) {
                extendLeft = -endIndex;
                endIndex = 0;
              }
              inserted = inserted.slice(0, endIndex);
              if (!fromInput && !inserted && !restoreStart && !extendLeft && !extendRight && !restoreEnd)
                return "";
              sendingText = true;
              var shouldReset = false;
              if (useragent.isAndroid && inserted == ". ") {
                inserted = "  ";
                shouldReset = true;
              }
              if (inserted && !extendLeft && !extendRight && !restoreStart && !restoreEnd || commandMode) {
                host.onTextInput(inserted);
              } else {
                host.onTextInput(inserted, {
                  extendLeft,
                  extendRight,
                  restoreStart,
                  restoreEnd
                });
              }
              sendingText = false;
              lastValue = value;
              lastSelectionStart = selectionStart;
              lastSelectionEnd = selectionEnd;
              lastRestoreEnd = restoreEnd;
              return shouldReset ? "\n" : inserted;
            }
          };
          var onInput = function(e10) {
            if (inComposition)
              return onCompositionUpdate();
            if (e10 && e10.inputType) {
              if (e10.inputType == "historyUndo")
                return host.execCommand("undo");
              if (e10.inputType == "historyRedo")
                return host.execCommand("redo");
            }
            var data = text.value;
            var inserted = sendText(data, true);
            if (data.length > MAX_LINE_LENGTH + 100 || valueResetRegex.test(inserted) || isMobile && lastSelectionStart < 1 && lastSelectionStart == lastSelectionEnd) {
              resetSelection();
            }
          };
          var handleClipboardData = function(e10, data, forceIEMime) {
            var clipboardData = e10.clipboardData || window.clipboardData;
            if (!clipboardData || BROKEN_SETDATA)
              return;
            var mime = USE_IE_MIME_TYPE || forceIEMime ? "Text" : "text/plain";
            try {
              if (data) {
                return clipboardData.setData(mime, data) !== false;
              } else {
                return clipboardData.getData(mime);
              }
            } catch (e11) {
              if (!forceIEMime)
                return handleClipboardData(e11, data, true);
            }
          };
          var doCopy = function(e10, isCut) {
            var data = host.getCopyText();
            if (!data)
              return event.preventDefault(e10);
            if (handleClipboardData(e10, data)) {
              if (isIOS) {
                resetSelection(data);
                copied = data;
                setTimeout(function() {
                  copied = false;
                }, 10);
              }
              isCut ? host.onCut() : host.onCopy();
              event.preventDefault(e10);
            } else {
              copied = true;
              text.value = data;
              text.select();
              setTimeout(function() {
                copied = false;
                resetSelection();
                isCut ? host.onCut() : host.onCopy();
              });
            }
          };
          var onCut = function(e10) {
            doCopy(e10, true);
          };
          var onCopy = function(e10) {
            doCopy(e10, false);
          };
          var onPaste = function(e10) {
            var data = handleClipboardData(e10);
            if (clipboard.pasteCancelled())
              return;
            if (typeof data == "string") {
              if (data)
                host.onPaste(data, e10);
              if (useragent.isIE)
                setTimeout(resetSelection);
              event.preventDefault(e10);
            } else {
              text.value = "";
              pasted = true;
            }
          };
          event.addCommandKeyListener(text, host.onCommandKey.bind(host), host);
          event.addListener(text, "select", onSelect, host);
          event.addListener(text, "input", onInput, host);
          event.addListener(text, "cut", onCut, host);
          event.addListener(text, "copy", onCopy, host);
          event.addListener(text, "paste", onPaste, host);
          if (!("oncut" in text) || !("oncopy" in text) || !("onpaste" in text)) {
            event.addListener(parentNode, "keydown", function(e10) {
              if (useragent.isMac && !e10.metaKey || !e10.ctrlKey)
                return;
              switch (e10.keyCode) {
                case 67:
                  onCopy(e10);
                  break;
                case 86:
                  onPaste(e10);
                  break;
                case 88:
                  onCut(e10);
                  break;
              }
            }, host);
          }
          var onCompositionStart = function(e10) {
            if (inComposition || !host.onCompositionStart || host.$readOnly)
              return;
            inComposition = {};
            if (commandMode)
              return;
            if (e10.data)
              inComposition.useTextareaForIME = false;
            setTimeout(onCompositionUpdate, 0);
            host._signal("compositionStart");
            host.on("mousedown", cancelComposition);
            var range = host.getSelectionRange();
            range.end.row = range.start.row;
            range.end.column = range.start.column;
            inComposition.markerRange = range;
            inComposition.selectionStart = lastSelectionStart;
            host.onCompositionStart(inComposition);
            if (inComposition.useTextareaForIME) {
              lastValue = text.value = "";
              lastSelectionStart = 0;
              lastSelectionEnd = 0;
            } else {
              if (text.msGetInputContext)
                inComposition.context = text.msGetInputContext();
              if (text.getInputContext)
                inComposition.context = text.getInputContext();
            }
          };
          var onCompositionUpdate = function() {
            if (!inComposition || !host.onCompositionUpdate || host.$readOnly)
              return;
            if (commandMode)
              return cancelComposition();
            if (inComposition.useTextareaForIME) {
              host.onCompositionUpdate(text.value);
            } else {
              var data = text.value;
              sendText(data);
              if (inComposition.markerRange) {
                if (inComposition.context) {
                  inComposition.markerRange.start.column = inComposition.selectionStart = inComposition.context.compositionStartOffset;
                }
                inComposition.markerRange.end.column = inComposition.markerRange.start.column + lastSelectionEnd - inComposition.selectionStart + lastRestoreEnd;
              }
            }
          };
          var onCompositionEnd = function(e10) {
            if (!host.onCompositionEnd || host.$readOnly)
              return;
            inComposition = false;
            host.onCompositionEnd();
            host.off("mousedown", cancelComposition);
            if (e10)
              onInput();
          };
          function cancelComposition() {
            ignoreFocusEvents = true;
            text.blur();
            text.focus();
            ignoreFocusEvents = false;
          }
          var syncComposition = lang.delayedCall(onCompositionUpdate, 50).schedule.bind(null, null);
          function onKeyup(e10) {
            if (e10.keyCode == 27 && text.value.length < text.selectionStart) {
              if (!inComposition)
                lastValue = text.value;
              lastSelectionStart = lastSelectionEnd = -1;
              resetSelection();
            }
            syncComposition();
          }
          event.addListener(text, "compositionstart", onCompositionStart, host);
          event.addListener(text, "compositionupdate", onCompositionUpdate, host);
          event.addListener(text, "keyup", onKeyup, host);
          event.addListener(text, "keydown", syncComposition, host);
          event.addListener(text, "compositionend", onCompositionEnd, host);
          this.getElement = function() {
            return text;
          };
          this.setCommandMode = function(value) {
            commandMode = value;
            text.readOnly = false;
          };
          this.setReadOnly = function(readOnly) {
            if (!commandMode)
              text.readOnly = readOnly;
          };
          this.setCopyWithEmptySelection = function(value) {
          };
          this.onContextMenu = function(e10) {
            afterContextMenu = true;
            resetSelection();
            host._emit("nativecontextmenu", { target: host, domEvent: e10 });
            this.moveToMouse(e10, true);
          };
          this.moveToMouse = function(e10, bringToFront) {
            if (!tempStyle)
              tempStyle = text.style.cssText;
            text.style.cssText = (bringToFront ? "z-index:100000;" : "") + (useragent.isIE ? "opacity:0.1;" : "") + "text-indent: -" + (lastSelectionStart + lastSelectionEnd) * host.renderer.characterWidth * 0.5 + "px;";
            var rect = host.container.getBoundingClientRect();
            var style = dom.computedStyle(host.container);
            var top = rect.top + (parseInt(style.borderTopWidth) || 0);
            var left = rect.left + (parseInt(rect.borderLeftWidth) || 0);
            var maxTop = rect.bottom - top - text.clientHeight - 2;
            var move = function(e11) {
              dom.translate(text, e11.clientX - left - 2, Math.min(e11.clientY - top - 2, maxTop));
            };
            move(e10);
            if (e10.type != "mousedown")
              return;
            host.renderer.$isMousePressed = true;
            clearTimeout(closeTimeout);
            if (useragent.isWin)
              event.capture(host.container, move, onContextMenuClose);
          };
          this.onContextMenuClose = onContextMenuClose;
          var closeTimeout;
          function onContextMenuClose() {
            clearTimeout(closeTimeout);
            closeTimeout = setTimeout(function() {
              if (tempStyle) {
                text.style.cssText = tempStyle;
                tempStyle = "";
              }
              host.renderer.$isMousePressed = false;
              if (host.renderer.$keepTextAreaAtCursor)
                host.renderer.$moveTextAreaToCursor();
            }, 0);
          }
          var onContextMenu = function(e10) {
            host.textInput.onContextMenu(e10);
            onContextMenuClose();
          };
          event.addListener(text, "mouseup", onContextMenu, host);
          event.addListener(text, "mousedown", function(e10) {
            e10.preventDefault();
            onContextMenuClose();
          }, host);
          event.addListener(host.renderer.scroller, "contextmenu", onContextMenu, host);
          event.addListener(text, "contextmenu", onContextMenu, host);
          if (isIOS)
            addIosSelectionHandler(parentNode, host, text);
          function addIosSelectionHandler(parentNode2, host2, text2) {
            var typingResetTimeout = null;
            var typing = false;
            text2.addEventListener("keydown", function(e10) {
              if (typingResetTimeout)
                clearTimeout(typingResetTimeout);
              typing = true;
            }, true);
            text2.addEventListener("keyup", function(e10) {
              typingResetTimeout = setTimeout(function() {
                typing = false;
              }, 100);
            }, true);
            var detectArrowKeys = function(e10) {
              if (document.activeElement !== text2)
                return;
              if (typing || inComposition || host2.$mouseHandler.isMousePressed)
                return;
              if (copied) {
                return;
              }
              var selectionStart = text2.selectionStart;
              var selectionEnd = text2.selectionEnd;
              var key = null;
              var modifier = 0;
              if (selectionStart == 0) {
                key = KEYS.up;
              } else if (selectionStart == 1) {
                key = KEYS.home;
              } else if (selectionEnd > lastSelectionEnd && lastValue[selectionEnd] == "\n") {
                key = KEYS.end;
              } else if (selectionStart < lastSelectionStart && lastValue[selectionStart - 1] == " ") {
                key = KEYS.left;
                modifier = MODS.option;
              } else if (selectionStart < lastSelectionStart || selectionStart == lastSelectionStart && lastSelectionEnd != lastSelectionStart && selectionStart == selectionEnd) {
                key = KEYS.left;
              } else if (selectionEnd > lastSelectionEnd && lastValue.slice(0, selectionEnd).split("\n").length > 2) {
                key = KEYS.down;
              } else if (selectionEnd > lastSelectionEnd && lastValue[selectionEnd - 1] == " ") {
                key = KEYS.right;
                modifier = MODS.option;
              } else if (selectionEnd > lastSelectionEnd || selectionEnd == lastSelectionEnd && lastSelectionEnd != lastSelectionStart && selectionStart == selectionEnd) {
                key = KEYS.right;
              }
              if (selectionStart !== selectionEnd)
                modifier |= MODS.shift;
              if (key) {
                var result = host2.onCommandKey({}, modifier, key);
                if (!result && host2.commands) {
                  key = KEYS.keyCodeToString(key);
                  var command = host2.commands.findKeyCommand(modifier, key);
                  if (command)
                    host2.execCommand(command);
                }
                lastSelectionStart = selectionStart;
                lastSelectionEnd = selectionEnd;
                resetSelection("");
              }
            };
            document.addEventListener("selectionchange", detectArrowKeys);
            host2.on("destroy", function() {
              document.removeEventListener("selectionchange", detectArrowKeys);
            });
          }
          this.destroy = function() {
            if (text.parentElement)
              text.parentElement.removeChild(text);
          };
        };
        exports2.TextInput = TextInput;
        exports2.$setUserAgentForTests = function(_isMobile, _isIOS) {
          isMobile = _isMobile;
          isIOS = _isIOS;
        };
      });
      ace.define("ace/mouse/default_handlers", ["require", "exports", "module", "ace/lib/useragent"], function(require3, exports2, module2) {
        "use strict";
        var useragent = require3("../lib/useragent");
        var DRAG_OFFSET = 0;
        var SCROLL_COOLDOWN_T = 550;
        function DefaultHandlers(mouseHandler) {
          mouseHandler.$clickSelection = null;
          var editor = mouseHandler.editor;
          editor.setDefaultHandler("mousedown", this.onMouseDown.bind(mouseHandler));
          editor.setDefaultHandler("dblclick", this.onDoubleClick.bind(mouseHandler));
          editor.setDefaultHandler("tripleclick", this.onTripleClick.bind(mouseHandler));
          editor.setDefaultHandler("quadclick", this.onQuadClick.bind(mouseHandler));
          editor.setDefaultHandler("mousewheel", this.onMouseWheel.bind(mouseHandler));
          var exports3 = [
            "select",
            "startSelect",
            "selectEnd",
            "selectAllEnd",
            "selectByWordsEnd",
            "selectByLinesEnd",
            "dragWait",
            "dragWaitEnd",
            "focusWait"
          ];
          exports3.forEach(function(x2) {
            mouseHandler[x2] = this[x2];
          }, this);
          mouseHandler.selectByLines = this.extendSelectionBy.bind(mouseHandler, "getLineRange");
          mouseHandler.selectByWords = this.extendSelectionBy.bind(mouseHandler, "getWordRange");
        }
        (function() {
          this.onMouseDown = function(ev) {
            var inSelection = ev.inSelection();
            var pos = ev.getDocumentPosition();
            this.mousedownEvent = ev;
            var editor = this.editor;
            var button = ev.getButton();
            if (button !== 0) {
              var selectionRange = editor.getSelectionRange();
              var selectionEmpty = selectionRange.isEmpty();
              if (selectionEmpty || button == 1)
                editor.selection.moveToPosition(pos);
              if (button == 2) {
                editor.textInput.onContextMenu(ev.domEvent);
                if (!useragent.isMozilla)
                  ev.preventDefault();
              }
              return;
            }
            this.mousedownEvent.time = Date.now();
            if (inSelection && !editor.isFocused()) {
              editor.focus();
              if (this.$focusTimeout && !this.$clickSelection && !editor.inMultiSelectMode) {
                this.setState("focusWait");
                this.captureMouse(ev);
                return;
              }
            }
            this.captureMouse(ev);
            this.startSelect(pos, ev.domEvent._clicks > 1);
            return ev.preventDefault();
          };
          this.startSelect = function(pos, waitForClickSelection) {
            pos = pos || this.editor.renderer.screenToTextCoordinates(this.x, this.y);
            var editor = this.editor;
            if (!this.mousedownEvent)
              return;
            if (this.mousedownEvent.getShiftKey())
              editor.selection.selectToPosition(pos);
            else if (!waitForClickSelection)
              editor.selection.moveToPosition(pos);
            if (!waitForClickSelection)
              this.select();
            if (editor.renderer.scroller.setCapture) {
              editor.renderer.scroller.setCapture();
            }
            editor.setStyle("ace_selecting");
            this.setState("select");
          };
          this.select = function() {
            var anchor, editor = this.editor;
            var cursor = editor.renderer.screenToTextCoordinates(this.x, this.y);
            if (this.$clickSelection) {
              var cmp = this.$clickSelection.comparePoint(cursor);
              if (cmp == -1) {
                anchor = this.$clickSelection.end;
              } else if (cmp == 1) {
                anchor = this.$clickSelection.start;
              } else {
                var orientedRange = calcRangeOrientation(this.$clickSelection, cursor);
                cursor = orientedRange.cursor;
                anchor = orientedRange.anchor;
              }
              editor.selection.setSelectionAnchor(anchor.row, anchor.column);
            }
            editor.selection.selectToPosition(cursor);
            editor.renderer.scrollCursorIntoView();
          };
          this.extendSelectionBy = function(unitName) {
            var anchor, editor = this.editor;
            var cursor = editor.renderer.screenToTextCoordinates(this.x, this.y);
            var range = editor.selection[unitName](cursor.row, cursor.column);
            if (this.$clickSelection) {
              var cmpStart = this.$clickSelection.comparePoint(range.start);
              var cmpEnd = this.$clickSelection.comparePoint(range.end);
              if (cmpStart == -1 && cmpEnd <= 0) {
                anchor = this.$clickSelection.end;
                if (range.end.row != cursor.row || range.end.column != cursor.column)
                  cursor = range.start;
              } else if (cmpEnd == 1 && cmpStart >= 0) {
                anchor = this.$clickSelection.start;
                if (range.start.row != cursor.row || range.start.column != cursor.column)
                  cursor = range.end;
              } else if (cmpStart == -1 && cmpEnd == 1) {
                cursor = range.end;
                anchor = range.start;
              } else {
                var orientedRange = calcRangeOrientation(this.$clickSelection, cursor);
                cursor = orientedRange.cursor;
                anchor = orientedRange.anchor;
              }
              editor.selection.setSelectionAnchor(anchor.row, anchor.column);
            }
            editor.selection.selectToPosition(cursor);
            editor.renderer.scrollCursorIntoView();
          };
          this.selectEnd = this.selectAllEnd = this.selectByWordsEnd = this.selectByLinesEnd = function() {
            this.$clickSelection = null;
            this.editor.unsetStyle("ace_selecting");
            if (this.editor.renderer.scroller.releaseCapture) {
              this.editor.renderer.scroller.releaseCapture();
            }
          };
          this.focusWait = function() {
            var distance = calcDistance(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
            var time = Date.now();
            if (distance > DRAG_OFFSET || time - this.mousedownEvent.time > this.$focusTimeout)
              this.startSelect(this.mousedownEvent.getDocumentPosition());
          };
          this.onDoubleClick = function(ev) {
            var pos = ev.getDocumentPosition();
            var editor = this.editor;
            var session = editor.session;
            var range = session.getBracketRange(pos);
            if (range) {
              if (range.isEmpty()) {
                range.start.column--;
                range.end.column++;
              }
              this.setState("select");
            } else {
              range = editor.selection.getWordRange(pos.row, pos.column);
              this.setState("selectByWords");
            }
            this.$clickSelection = range;
            this.select();
          };
          this.onTripleClick = function(ev) {
            var pos = ev.getDocumentPosition();
            var editor = this.editor;
            this.setState("selectByLines");
            var range = editor.getSelectionRange();
            if (range.isMultiLine() && range.contains(pos.row, pos.column)) {
              this.$clickSelection = editor.selection.getLineRange(range.start.row);
              this.$clickSelection.end = editor.selection.getLineRange(range.end.row).end;
            } else {
              this.$clickSelection = editor.selection.getLineRange(pos.row);
            }
            this.select();
          };
          this.onQuadClick = function(ev) {
            var editor = this.editor;
            editor.selectAll();
            this.$clickSelection = editor.getSelectionRange();
            this.setState("selectAll");
          };
          this.onMouseWheel = function(ev) {
            if (ev.getAccelKey())
              return;
            if (ev.getShiftKey() && ev.wheelY && !ev.wheelX) {
              ev.wheelX = ev.wheelY;
              ev.wheelY = 0;
            }
            var editor = this.editor;
            if (!this.$lastScroll)
              this.$lastScroll = { t: 0, vx: 0, vy: 0, allowed: 0 };
            var prevScroll = this.$lastScroll;
            var t5 = ev.domEvent.timeStamp;
            var dt = t5 - prevScroll.t;
            var vx = dt ? ev.wheelX / dt : prevScroll.vx;
            var vy = dt ? ev.wheelY / dt : prevScroll.vy;
            if (dt < SCROLL_COOLDOWN_T) {
              vx = (vx + prevScroll.vx) / 2;
              vy = (vy + prevScroll.vy) / 2;
            }
            var direction = Math.abs(vx / vy);
            var canScroll = false;
            if (direction >= 1 && editor.renderer.isScrollableBy(ev.wheelX * ev.speed, 0))
              canScroll = true;
            if (direction <= 1 && editor.renderer.isScrollableBy(0, ev.wheelY * ev.speed))
              canScroll = true;
            if (canScroll) {
              prevScroll.allowed = t5;
            } else if (t5 - prevScroll.allowed < SCROLL_COOLDOWN_T) {
              var isSlower = Math.abs(vx) <= 1.5 * Math.abs(prevScroll.vx) && Math.abs(vy) <= 1.5 * Math.abs(prevScroll.vy);
              if (isSlower) {
                canScroll = true;
                prevScroll.allowed = t5;
              } else {
                prevScroll.allowed = 0;
              }
            }
            prevScroll.t = t5;
            prevScroll.vx = vx;
            prevScroll.vy = vy;
            if (canScroll) {
              editor.renderer.scrollBy(ev.wheelX * ev.speed, ev.wheelY * ev.speed);
              return ev.stop();
            }
          };
        }).call(DefaultHandlers.prototype);
        exports2.DefaultHandlers = DefaultHandlers;
        function calcDistance(ax, ay, bx, by) {
          return Math.sqrt(Math.pow(bx - ax, 2) + Math.pow(by - ay, 2));
        }
        function calcRangeOrientation(range, cursor) {
          if (range.start.row == range.end.row)
            var cmp = 2 * cursor.column - range.start.column - range.end.column;
          else if (range.start.row == range.end.row - 1 && !range.start.column && !range.end.column)
            var cmp = cursor.column - 4;
          else
            var cmp = 2 * cursor.row - range.start.row - range.end.row;
          if (cmp < 0)
            return { cursor: range.start, anchor: range.end };
          else
            return { cursor: range.end, anchor: range.start };
        }
      });
      ace.define("ace/tooltip", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom"], function(require3, exports2, module2) {
        "use strict";
        var oop = require3("./lib/oop");
        var dom = require3("./lib/dom");
        var CLASSNAME = "ace_tooltip";
        function Tooltip(parentNode) {
          this.isOpen = false;
          this.$element = null;
          this.$parentNode = parentNode;
        }
        (function() {
          this.$init = function() {
            this.$element = dom.createElement("div");
            this.$element.className = CLASSNAME;
            this.$element.style.display = "none";
            this.$parentNode.appendChild(this.$element);
            return this.$element;
          };
          this.getElement = function() {
            return this.$element || this.$init();
          };
          this.setText = function(text) {
            this.getElement().textContent = text;
          };
          this.setHtml = function(html) {
            this.getElement().innerHTML = html;
          };
          this.setPosition = function(x2, y2) {
            this.getElement().style.left = x2 + "px";
            this.getElement().style.top = y2 + "px";
          };
          this.setClassName = function(className) {
            dom.addCssClass(this.getElement(), className);
          };
          this.show = function(text, x2, y2) {
            if (text != null)
              this.setText(text);
            if (x2 != null && y2 != null)
              this.setPosition(x2, y2);
            if (!this.isOpen) {
              this.getElement().style.display = "block";
              this.isOpen = true;
            }
          };
          this.hide = function() {
            if (this.isOpen) {
              this.getElement().style.display = "none";
              this.getElement().className = CLASSNAME;
              this.isOpen = false;
            }
          };
          this.getHeight = function() {
            return this.getElement().offsetHeight;
          };
          this.getWidth = function() {
            return this.getElement().offsetWidth;
          };
          this.destroy = function() {
            this.isOpen = false;
            if (this.$element && this.$element.parentNode) {
              this.$element.parentNode.removeChild(this.$element);
            }
          };
        }).call(Tooltip.prototype);
        exports2.Tooltip = Tooltip;
      });
      ace.define("ace/mouse/default_gutter_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/event", "ace/tooltip"], function(require3, exports2, module2) {
        "use strict";
        var dom = require3("../lib/dom");
        var oop = require3("../lib/oop");
        var event = require3("../lib/event");
        var Tooltip = require3("../tooltip").Tooltip;
        function GutterHandler(mouseHandler) {
          var editor = mouseHandler.editor;
          var gutter = editor.renderer.$gutterLayer;
          var tooltip = new GutterTooltip(editor.container);
          mouseHandler.editor.setDefaultHandler("guttermousedown", function(e10) {
            if (!editor.isFocused() || e10.getButton() != 0)
              return;
            var gutterRegion = gutter.getRegion(e10);
            if (gutterRegion == "foldWidgets")
              return;
            var row = e10.getDocumentPosition().row;
            var selection = editor.session.selection;
            if (e10.getShiftKey())
              selection.selectTo(row, 0);
            else {
              if (e10.domEvent.detail == 2) {
                editor.selectAll();
                return e10.preventDefault();
              }
              mouseHandler.$clickSelection = editor.selection.getLineRange(row);
            }
            mouseHandler.setState("selectByLines");
            mouseHandler.captureMouse(e10);
            return e10.preventDefault();
          });
          var tooltipTimeout, mouseEvent, tooltipAnnotation;
          function showTooltip() {
            var row = mouseEvent.getDocumentPosition().row;
            var annotation = gutter.$annotations[row];
            if (!annotation)
              return hideTooltip();
            var maxRow = editor.session.getLength();
            if (row == maxRow) {
              var screenRow = editor.renderer.pixelToScreenCoordinates(0, mouseEvent.y).row;
              var pos = mouseEvent.$pos;
              if (screenRow > editor.session.documentToScreenRow(pos.row, pos.column))
                return hideTooltip();
            }
            if (tooltipAnnotation == annotation)
              return;
            tooltipAnnotation = annotation.text.join("<br/>");
            tooltip.setHtml(tooltipAnnotation);
            var annotationClassName = annotation.className;
            if (annotationClassName) {
              tooltip.setClassName(annotationClassName.trim());
            }
            tooltip.show();
            editor._signal("showGutterTooltip", tooltip);
            editor.on("mousewheel", hideTooltip);
            if (mouseHandler.$tooltipFollowsMouse) {
              moveTooltip(mouseEvent);
            } else {
              var gutterElement = mouseEvent.domEvent.target;
              var rect = gutterElement.getBoundingClientRect();
              var style = tooltip.getElement().style;
              style.left = rect.right + "px";
              style.top = rect.bottom + "px";
            }
          }
          function hideTooltip() {
            if (tooltipTimeout)
              tooltipTimeout = clearTimeout(tooltipTimeout);
            if (tooltipAnnotation) {
              tooltip.hide();
              tooltipAnnotation = null;
              editor._signal("hideGutterTooltip", tooltip);
              editor.off("mousewheel", hideTooltip);
            }
          }
          function moveTooltip(e10) {
            tooltip.setPosition(e10.x, e10.y);
          }
          mouseHandler.editor.setDefaultHandler("guttermousemove", function(e10) {
            var target = e10.domEvent.target || e10.domEvent.srcElement;
            if (dom.hasCssClass(target, "ace_fold-widget"))
              return hideTooltip();
            if (tooltipAnnotation && mouseHandler.$tooltipFollowsMouse)
              moveTooltip(e10);
            mouseEvent = e10;
            if (tooltipTimeout)
              return;
            tooltipTimeout = setTimeout(function() {
              tooltipTimeout = null;
              if (mouseEvent && !mouseHandler.isMousePressed)
                showTooltip();
              else
                hideTooltip();
            }, 50);
          });
          event.addListener(editor.renderer.$gutter, "mouseout", function(e10) {
            mouseEvent = null;
            if (!tooltipAnnotation || tooltipTimeout)
              return;
            tooltipTimeout = setTimeout(function() {
              tooltipTimeout = null;
              hideTooltip();
            }, 50);
          }, editor);
          editor.on("changeSession", hideTooltip);
        }
        function GutterTooltip(parentNode) {
          Tooltip.call(this, parentNode);
        }
        oop.inherits(GutterTooltip, Tooltip);
        (function() {
          this.setPosition = function(x2, y2) {
            var windowWidth = window.innerWidth || document.documentElement.clientWidth;
            var windowHeight = window.innerHeight || document.documentElement.clientHeight;
            var width = this.getWidth();
            var height = this.getHeight();
            x2 += 15;
            y2 += 15;
            if (x2 + width > windowWidth) {
              x2 -= x2 + width - windowWidth;
            }
            if (y2 + height > windowHeight) {
              y2 -= 20 + height;
            }
            Tooltip.prototype.setPosition.call(this, x2, y2);
          };
        }).call(GutterTooltip.prototype);
        exports2.GutterHandler = GutterHandler;
      });
      ace.define("ace/mouse/mouse_event", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function(require3, exports2, module2) {
        "use strict";
        var event = require3("../lib/event");
        var useragent = require3("../lib/useragent");
        var MouseEvent = exports2.MouseEvent = function(domEvent, editor) {
          this.domEvent = domEvent;
          this.editor = editor;
          this.x = this.clientX = domEvent.clientX;
          this.y = this.clientY = domEvent.clientY;
          this.$pos = null;
          this.$inSelection = null;
          this.propagationStopped = false;
          this.defaultPrevented = false;
        };
        (function() {
          this.stopPropagation = function() {
            event.stopPropagation(this.domEvent);
            this.propagationStopped = true;
          };
          this.preventDefault = function() {
            event.preventDefault(this.domEvent);
            this.defaultPrevented = true;
          };
          this.stop = function() {
            this.stopPropagation();
            this.preventDefault();
          };
          this.getDocumentPosition = function() {
            if (this.$pos)
              return this.$pos;
            this.$pos = this.editor.renderer.screenToTextCoordinates(this.clientX, this.clientY);
            return this.$pos;
          };
          this.inSelection = function() {
            if (this.$inSelection !== null)
              return this.$inSelection;
            var editor = this.editor;
            var selectionRange = editor.getSelectionRange();
            if (selectionRange.isEmpty())
              this.$inSelection = false;
            else {
              var pos = this.getDocumentPosition();
              this.$inSelection = selectionRange.contains(pos.row, pos.column);
            }
            return this.$inSelection;
          };
          this.getButton = function() {
            return event.getButton(this.domEvent);
          };
          this.getShiftKey = function() {
            return this.domEvent.shiftKey;
          };
          this.getAccelKey = useragent.isMac ? function() {
            return this.domEvent.metaKey;
          } : function() {
            return this.domEvent.ctrlKey;
          };
        }).call(MouseEvent.prototype);
      });
      ace.define("ace/mouse/dragdrop_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], function(require3, exports2, module2) {
        "use strict";
        var dom = require3("../lib/dom");
        var event = require3("../lib/event");
        var useragent = require3("../lib/useragent");
        var AUTOSCROLL_DELAY = 200;
        var SCROLL_CURSOR_DELAY = 200;
        var SCROLL_CURSOR_HYSTERESIS = 5;
        function DragdropHandler(mouseHandler) {
          var editor = mouseHandler.editor;
          var dragImage = dom.createElement("div");
          dragImage.style.cssText = "top:-100px;position:absolute;z-index:2147483647;opacity:0.5";
          dragImage.textContent = "\xA0";
          var exports3 = ["dragWait", "dragWaitEnd", "startDrag", "dragReadyEnd", "onMouseDrag"];
          exports3.forEach(function(x3) {
            mouseHandler[x3] = this[x3];
          }, this);
          editor.on("mousedown", this.onMouseDown.bind(mouseHandler));
          var mouseTarget = editor.container;
          var dragSelectionMarker, x2, y2;
          var timerId, range;
          var dragCursor, counter = 0;
          var dragOperation;
          var isInternal;
          var autoScrollStartTime;
          var cursorMovedTime;
          var cursorPointOnCaretMoved;
          this.onDragStart = function(e10) {
            if (this.cancelDrag || !mouseTarget.draggable) {
              var self = this;
              setTimeout(function() {
                self.startSelect();
                self.captureMouse(e10);
              }, 0);
              return e10.preventDefault();
            }
            range = editor.getSelectionRange();
            var dataTransfer = e10.dataTransfer;
            dataTransfer.effectAllowed = editor.getReadOnly() ? "copy" : "copyMove";
            editor.container.appendChild(dragImage);
            dataTransfer.setDragImage && dataTransfer.setDragImage(dragImage, 0, 0);
            setTimeout(function() {
              editor.container.removeChild(dragImage);
            });
            dataTransfer.clearData();
            dataTransfer.setData("Text", editor.session.getTextRange());
            isInternal = true;
            this.setState("drag");
          };
          this.onDragEnd = function(e10) {
            mouseTarget.draggable = false;
            isInternal = false;
            this.setState(null);
            if (!editor.getReadOnly()) {
              var dropEffect = e10.dataTransfer.dropEffect;
              if (!dragOperation && dropEffect == "move")
                editor.session.remove(editor.getSelectionRange());
              editor.$resetCursorStyle();
            }
            this.editor.unsetStyle("ace_dragging");
            this.editor.renderer.setCursorStyle("");
          };
          this.onDragEnter = function(e10) {
            if (editor.getReadOnly() || !canAccept(e10.dataTransfer))
              return;
            x2 = e10.clientX;
            y2 = e10.clientY;
            if (!dragSelectionMarker)
              addDragMarker();
            counter++;
            e10.dataTransfer.dropEffect = dragOperation = getDropEffect(e10);
            return event.preventDefault(e10);
          };
          this.onDragOver = function(e10) {
            if (editor.getReadOnly() || !canAccept(e10.dataTransfer))
              return;
            x2 = e10.clientX;
            y2 = e10.clientY;
            if (!dragSelectionMarker) {
              addDragMarker();
              counter++;
            }
            if (onMouseMoveTimer !== null)
              onMouseMoveTimer = null;
            e10.dataTransfer.dropEffect = dragOperation = getDropEffect(e10);
            return event.preventDefault(e10);
          };
          this.onDragLeave = function(e10) {
            counter--;
            if (counter <= 0 && dragSelectionMarker) {
              clearDragMarker();
              dragOperation = null;
              return event.preventDefault(e10);
            }
          };
          this.onDrop = function(e10) {
            if (!dragCursor)
              return;
            var dataTransfer = e10.dataTransfer;
            if (isInternal) {
              switch (dragOperation) {
                case "move":
                  if (range.contains(dragCursor.row, dragCursor.column)) {
                    range = {
                      start: dragCursor,
                      end: dragCursor
                    };
                  } else {
                    range = editor.moveText(range, dragCursor);
                  }
                  break;
                case "copy":
                  range = editor.moveText(range, dragCursor, true);
                  break;
              }
            } else {
              var dropData = dataTransfer.getData("Text");
              range = {
                start: dragCursor,
                end: editor.session.insert(dragCursor, dropData)
              };
              editor.focus();
              dragOperation = null;
            }
            clearDragMarker();
            return event.preventDefault(e10);
          };
          event.addListener(mouseTarget, "dragstart", this.onDragStart.bind(mouseHandler), editor);
          event.addListener(mouseTarget, "dragend", this.onDragEnd.bind(mouseHandler), editor);
          event.addListener(mouseTarget, "dragenter", this.onDragEnter.bind(mouseHandler), editor);
          event.addListener(mouseTarget, "dragover", this.onDragOver.bind(mouseHandler), editor);
          event.addListener(mouseTarget, "dragleave", this.onDragLeave.bind(mouseHandler), editor);
          event.addListener(mouseTarget, "drop", this.onDrop.bind(mouseHandler), editor);
          function scrollCursorIntoView(cursor, prevCursor) {
            var now = Date.now();
            var vMovement = !prevCursor || cursor.row != prevCursor.row;
            var hMovement = !prevCursor || cursor.column != prevCursor.column;
            if (!cursorMovedTime || vMovement || hMovement) {
              editor.moveCursorToPosition(cursor);
              cursorMovedTime = now;
              cursorPointOnCaretMoved = { x: x2, y: y2 };
            } else {
              var distance = calcDistance(cursorPointOnCaretMoved.x, cursorPointOnCaretMoved.y, x2, y2);
              if (distance > SCROLL_CURSOR_HYSTERESIS) {
                cursorMovedTime = null;
              } else if (now - cursorMovedTime >= SCROLL_CURSOR_DELAY) {
                editor.renderer.scrollCursorIntoView();
                cursorMovedTime = null;
              }
            }
          }
          function autoScroll(cursor, prevCursor) {
            var now = Date.now();
            var lineHeight = editor.renderer.layerConfig.lineHeight;
            var characterWidth = editor.renderer.layerConfig.characterWidth;
            var editorRect = editor.renderer.scroller.getBoundingClientRect();
            var offsets = {
              x: {
                left: x2 - editorRect.left,
                right: editorRect.right - x2
              },
              y: {
                top: y2 - editorRect.top,
                bottom: editorRect.bottom - y2
              }
            };
            var nearestXOffset = Math.min(offsets.x.left, offsets.x.right);
            var nearestYOffset = Math.min(offsets.y.top, offsets.y.bottom);
            var scrollCursor = { row: cursor.row, column: cursor.column };
            if (nearestXOffset / characterWidth <= 2) {
              scrollCursor.column += offsets.x.left < offsets.x.right ? -3 : 2;
            }
            if (nearestYOffset / lineHeight <= 1) {
              scrollCursor.row += offsets.y.top < offsets.y.bottom ? -1 : 1;
            }
            var vScroll = cursor.row != scrollCursor.row;
            var hScroll = cursor.column != scrollCursor.column;
            var vMovement = !prevCursor || cursor.row != prevCursor.row;
            if (vScroll || hScroll && !vMovement) {
              if (!autoScrollStartTime)
                autoScrollStartTime = now;
              else if (now - autoScrollStartTime >= AUTOSCROLL_DELAY)
                editor.renderer.scrollCursorIntoView(scrollCursor);
            } else {
              autoScrollStartTime = null;
            }
          }
          function onDragInterval() {
            var prevCursor = dragCursor;
            dragCursor = editor.renderer.screenToTextCoordinates(x2, y2);
            scrollCursorIntoView(dragCursor, prevCursor);
            autoScroll(dragCursor, prevCursor);
          }
          function addDragMarker() {
            range = editor.selection.toOrientedRange();
            dragSelectionMarker = editor.session.addMarker(range, "ace_selection", editor.getSelectionStyle());
            editor.clearSelection();
            if (editor.isFocused())
              editor.renderer.$cursorLayer.setBlinking(false);
            clearInterval(timerId);
            onDragInterval();
            timerId = setInterval(onDragInterval, 20);
            counter = 0;
            event.addListener(document, "mousemove", onMouseMove);
          }
          function clearDragMarker() {
            clearInterval(timerId);
            editor.session.removeMarker(dragSelectionMarker);
            dragSelectionMarker = null;
            editor.selection.fromOrientedRange(range);
            if (editor.isFocused() && !isInternal)
              editor.$resetCursorStyle();
            range = null;
            dragCursor = null;
            counter = 0;
            autoScrollStartTime = null;
            cursorMovedTime = null;
            event.removeListener(document, "mousemove", onMouseMove);
          }
          var onMouseMoveTimer = null;
          function onMouseMove() {
            if (onMouseMoveTimer == null) {
              onMouseMoveTimer = setTimeout(function() {
                if (onMouseMoveTimer != null && dragSelectionMarker)
                  clearDragMarker();
              }, 20);
            }
          }
          function canAccept(dataTransfer) {
            var types = dataTransfer.types;
            return !types || Array.prototype.some.call(types, function(type) {
              return type == "text/plain" || type == "Text";
            });
          }
          function getDropEffect(e10) {
            var copyAllowed = ["copy", "copymove", "all", "uninitialized"];
            var moveAllowed = ["move", "copymove", "linkmove", "all", "uninitialized"];
            var copyModifierState = useragent.isMac ? e10.altKey : e10.ctrlKey;
            var effectAllowed = "uninitialized";
            try {
              effectAllowed = e10.dataTransfer.effectAllowed.toLowerCase();
            } catch (e11) {
            }
            var dropEffect = "none";
            if (copyModifierState && copyAllowed.indexOf(effectAllowed) >= 0)
              dropEffect = "copy";
            else if (moveAllowed.indexOf(effectAllowed) >= 0)
              dropEffect = "move";
            else if (copyAllowed.indexOf(effectAllowed) >= 0)
              dropEffect = "copy";
            return dropEffect;
          }
        }
        (function() {
          this.dragWait = function() {
            var interval = Date.now() - this.mousedownEvent.time;
            if (interval > this.editor.getDragDelay())
              this.startDrag();
          };
          this.dragWaitEnd = function() {
            var target = this.editor.container;
            target.draggable = false;
            this.startSelect(this.mousedownEvent.getDocumentPosition());
            this.selectEnd();
          };
          this.dragReadyEnd = function(e10) {
            this.editor.$resetCursorStyle();
            this.editor.unsetStyle("ace_dragging");
            this.editor.renderer.setCursorStyle("");
            this.dragWaitEnd();
          };
          this.startDrag = function() {
            this.cancelDrag = false;
            var editor = this.editor;
            var target = editor.container;
            target.draggable = true;
            editor.renderer.$cursorLayer.setBlinking(false);
            editor.setStyle("ace_dragging");
            var cursorStyle = useragent.isWin ? "default" : "move";
            editor.renderer.setCursorStyle(cursorStyle);
            this.setState("dragReady");
          };
          this.onMouseDrag = function(e10) {
            var target = this.editor.container;
            if (useragent.isIE && this.state == "dragReady") {
              var distance = calcDistance(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
              if (distance > 3)
                target.dragDrop();
            }
            if (this.state === "dragWait") {
              var distance = calcDistance(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
              if (distance > 0) {
                target.draggable = false;
                this.startSelect(this.mousedownEvent.getDocumentPosition());
              }
            }
          };
          this.onMouseDown = function(e10) {
            if (!this.$dragEnabled)
              return;
            this.mousedownEvent = e10;
            var editor = this.editor;
            var inSelection = e10.inSelection();
            var button = e10.getButton();
            var clickCount = e10.domEvent.detail || 1;
            if (clickCount === 1 && button === 0 && inSelection) {
              if (e10.editor.inMultiSelectMode && (e10.getAccelKey() || e10.getShiftKey()))
                return;
              this.mousedownEvent.time = Date.now();
              var eventTarget = e10.domEvent.target || e10.domEvent.srcElement;
              if ("unselectable" in eventTarget)
                eventTarget.unselectable = "on";
              if (editor.getDragDelay()) {
                if (useragent.isWebKit) {
                  this.cancelDrag = true;
                  var mouseTarget = editor.container;
                  mouseTarget.draggable = true;
                }
                this.setState("dragWait");
              } else {
                this.startDrag();
              }
              this.captureMouse(e10, this.onMouseDrag.bind(this));
              e10.defaultPrevented = true;
            }
          };
        }).call(DragdropHandler.prototype);
        function calcDistance(ax, ay, bx, by) {
          return Math.sqrt(Math.pow(bx - ax, 2) + Math.pow(by - ay, 2));
        }
        exports2.DragdropHandler = DragdropHandler;
      });
      ace.define("ace/mouse/touch_handler", ["require", "exports", "module", "ace/mouse/mouse_event", "ace/lib/event", "ace/lib/dom"], function(require3, exports2, module2) {
        "use strict";
        var MouseEvent = require3("./mouse_event").MouseEvent;
        var event = require3("../lib/event");
        var dom = require3("../lib/dom");
        exports2.addTouchListeners = function(el, editor) {
          var mode = "scroll";
          var startX;
          var startY;
          var touchStartT;
          var lastT;
          var longTouchTimer;
          var animationTimer;
          var animationSteps = 0;
          var pos;
          var clickCount = 0;
          var vX = 0;
          var vY = 0;
          var pressed;
          var contextMenu;
          function createContextMenu() {
            var clipboard = window.navigator && window.navigator.clipboard;
            var isOpen = false;
            var updateMenu = function() {
              var selected = editor.getCopyText();
              var hasUndo = editor.session.getUndoManager().hasUndo();
              contextMenu.replaceChild(
                dom.buildDom(isOpen ? [
                  "span",
                  !selected && ["span", { class: "ace_mobile-button", action: "selectall" }, "Select All"],
                  selected && ["span", { class: "ace_mobile-button", action: "copy" }, "Copy"],
                  selected && ["span", { class: "ace_mobile-button", action: "cut" }, "Cut"],
                  clipboard && ["span", { class: "ace_mobile-button", action: "paste" }, "Paste"],
                  hasUndo && ["span", { class: "ace_mobile-button", action: "undo" }, "Undo"],
                  ["span", { class: "ace_mobile-button", action: "find" }, "Find"],
                  ["span", { class: "ace_mobile-button", action: "openCommandPallete" }, "Pallete"]
                ] : ["span"]),
                contextMenu.firstChild
              );
            };
            var handleClick = function(e10) {
              var action = e10.target.getAttribute("action");
              if (action == "more" || !isOpen) {
                isOpen = !isOpen;
                return updateMenu();
              }
              if (action == "paste") {
                clipboard.readText().then(function(text) {
                  editor.execCommand(action, text);
                });
              } else if (action) {
                if (action == "cut" || action == "copy") {
                  if (clipboard)
                    clipboard.writeText(editor.getCopyText());
                  else
                    document.execCommand("copy");
                }
                editor.execCommand(action);
              }
              contextMenu.firstChild.style.display = "none";
              isOpen = false;
              if (action != "openCommandPallete")
                editor.focus();
            };
            contextMenu = dom.buildDom([
              "div",
              {
                class: "ace_mobile-menu",
                ontouchstart: function(e10) {
                  mode = "menu";
                  e10.stopPropagation();
                  e10.preventDefault();
                  editor.textInput.focus();
                },
                ontouchend: function(e10) {
                  e10.stopPropagation();
                  e10.preventDefault();
                  handleClick(e10);
                },
                onclick: handleClick
              },
              ["span"],
              ["span", { class: "ace_mobile-button", action: "more" }, "..."]
            ], editor.container);
          }
          function showContextMenu() {
            if (!contextMenu)
              createContextMenu();
            var cursor = editor.selection.cursor;
            var pagePos = editor.renderer.textToScreenCoordinates(cursor.row, cursor.column);
            var leftOffset = editor.renderer.textToScreenCoordinates(0, 0).pageX;
            var scrollLeft = editor.renderer.scrollLeft;
            var rect = editor.container.getBoundingClientRect();
            contextMenu.style.top = pagePos.pageY - rect.top - 3 + "px";
            if (pagePos.pageX - rect.left < rect.width - 70) {
              contextMenu.style.left = "";
              contextMenu.style.right = "10px";
            } else {
              contextMenu.style.right = "";
              contextMenu.style.left = leftOffset + scrollLeft - rect.left + "px";
            }
            contextMenu.style.display = "";
            contextMenu.firstChild.style.display = "none";
            editor.on("input", hideContextMenu);
          }
          function hideContextMenu(e10) {
            if (contextMenu)
              contextMenu.style.display = "none";
            editor.off("input", hideContextMenu);
          }
          function handleLongTap() {
            longTouchTimer = null;
            clearTimeout(longTouchTimer);
            var range = editor.selection.getRange();
            var inSelection = range.contains(pos.row, pos.column);
            if (range.isEmpty() || !inSelection) {
              editor.selection.moveToPosition(pos);
              editor.selection.selectWord();
            }
            mode = "wait";
            showContextMenu();
          }
          function switchToSelectionMode() {
            longTouchTimer = null;
            clearTimeout(longTouchTimer);
            editor.selection.moveToPosition(pos);
            var range = clickCount >= 2 ? editor.selection.getLineRange(pos.row) : editor.session.getBracketRange(pos);
            if (range && !range.isEmpty()) {
              editor.selection.setRange(range);
            } else {
              editor.selection.selectWord();
            }
            mode = "wait";
          }
          event.addListener(el, "contextmenu", function(e10) {
            if (!pressed)
              return;
            var textarea = editor.textInput.getElement();
            textarea.focus();
          }, editor);
          event.addListener(el, "touchstart", function(e10) {
            var touches = e10.touches;
            if (longTouchTimer || touches.length > 1) {
              clearTimeout(longTouchTimer);
              longTouchTimer = null;
              touchStartT = -1;
              mode = "zoom";
              return;
            }
            pressed = editor.$mouseHandler.isMousePressed = true;
            var h5 = editor.renderer.layerConfig.lineHeight;
            var w2 = editor.renderer.layerConfig.lineHeight;
            var t5 = e10.timeStamp;
            lastT = t5;
            var touchObj = touches[0];
            var x2 = touchObj.clientX;
            var y2 = touchObj.clientY;
            if (Math.abs(startX - x2) + Math.abs(startY - y2) > h5)
              touchStartT = -1;
            startX = e10.clientX = x2;
            startY = e10.clientY = y2;
            vX = vY = 0;
            var ev = new MouseEvent(e10, editor);
            pos = ev.getDocumentPosition();
            if (t5 - touchStartT < 500 && touches.length == 1 && !animationSteps) {
              clickCount++;
              e10.preventDefault();
              e10.button = 0;
              switchToSelectionMode();
            } else {
              clickCount = 0;
              var cursor = editor.selection.cursor;
              var anchor = editor.selection.isEmpty() ? cursor : editor.selection.anchor;
              var cursorPos = editor.renderer.$cursorLayer.getPixelPosition(cursor, true);
              var anchorPos = editor.renderer.$cursorLayer.getPixelPosition(anchor, true);
              var rect = editor.renderer.scroller.getBoundingClientRect();
              var offsetTop = editor.renderer.layerConfig.offset;
              var offsetLeft = editor.renderer.scrollLeft;
              var weightedDistance = function(x3, y3) {
                x3 = x3 / w2;
                y3 = y3 / h5 - 0.75;
                return x3 * x3 + y3 * y3;
              };
              if (e10.clientX < rect.left) {
                mode = "zoom";
                return;
              }
              var diff1 = weightedDistance(
                e10.clientX - rect.left - cursorPos.left + offsetLeft,
                e10.clientY - rect.top - cursorPos.top + offsetTop
              );
              var diff2 = weightedDistance(
                e10.clientX - rect.left - anchorPos.left + offsetLeft,
                e10.clientY - rect.top - anchorPos.top + offsetTop
              );
              if (diff1 < 3.5 && diff2 < 3.5)
                mode = diff1 > diff2 ? "cursor" : "anchor";
              if (diff2 < 3.5)
                mode = "anchor";
              else if (diff1 < 3.5)
                mode = "cursor";
              else
                mode = "scroll";
              longTouchTimer = setTimeout(handleLongTap, 450);
            }
            touchStartT = t5;
          }, editor);
          event.addListener(el, "touchend", function(e10) {
            pressed = editor.$mouseHandler.isMousePressed = false;
            if (animationTimer)
              clearInterval(animationTimer);
            if (mode == "zoom") {
              mode = "";
              animationSteps = 0;
            } else if (longTouchTimer) {
              editor.selection.moveToPosition(pos);
              animationSteps = 0;
              showContextMenu();
            } else if (mode == "scroll") {
              animate();
              hideContextMenu();
            } else {
              showContextMenu();
            }
            clearTimeout(longTouchTimer);
            longTouchTimer = null;
          }, editor);
          event.addListener(el, "touchmove", function(e10) {
            if (longTouchTimer) {
              clearTimeout(longTouchTimer);
              longTouchTimer = null;
            }
            var touches = e10.touches;
            if (touches.length > 1 || mode == "zoom")
              return;
            var touchObj = touches[0];
            var wheelX = startX - touchObj.clientX;
            var wheelY = startY - touchObj.clientY;
            if (mode == "wait") {
              if (wheelX * wheelX + wheelY * wheelY > 4)
                mode = "cursor";
              else
                return e10.preventDefault();
            }
            startX = touchObj.clientX;
            startY = touchObj.clientY;
            e10.clientX = touchObj.clientX;
            e10.clientY = touchObj.clientY;
            var t5 = e10.timeStamp;
            var dt = t5 - lastT;
            lastT = t5;
            if (mode == "scroll") {
              var mouseEvent = new MouseEvent(e10, editor);
              mouseEvent.speed = 1;
              mouseEvent.wheelX = wheelX;
              mouseEvent.wheelY = wheelY;
              if (10 * Math.abs(wheelX) < Math.abs(wheelY))
                wheelX = 0;
              if (10 * Math.abs(wheelY) < Math.abs(wheelX))
                wheelY = 0;
              if (dt != 0) {
                vX = wheelX / dt;
                vY = wheelY / dt;
              }
              editor._emit("mousewheel", mouseEvent);
              if (!mouseEvent.propagationStopped) {
                vX = vY = 0;
              }
            } else {
              var ev = new MouseEvent(e10, editor);
              var pos2 = ev.getDocumentPosition();
              if (mode == "cursor")
                editor.selection.moveCursorToPosition(pos2);
              else if (mode == "anchor")
                editor.selection.setSelectionAnchor(pos2.row, pos2.column);
              editor.renderer.scrollCursorIntoView(pos2);
              e10.preventDefault();
            }
          }, editor);
          function animate() {
            animationSteps += 60;
            animationTimer = setInterval(function() {
              if (animationSteps-- <= 0) {
                clearInterval(animationTimer);
                animationTimer = null;
              }
              if (Math.abs(vX) < 0.01)
                vX = 0;
              if (Math.abs(vY) < 0.01)
                vY = 0;
              if (animationSteps < 20)
                vX = 0.9 * vX;
              if (animationSteps < 20)
                vY = 0.9 * vY;
              var oldScrollTop = editor.session.getScrollTop();
              editor.renderer.scrollBy(10 * vX, 10 * vY);
              if (oldScrollTop == editor.session.getScrollTop())
                animationSteps = 0;
            }, 10);
          }
        };
      });
      ace.define("ace/mouse/mouse_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/mouse/default_handlers", "ace/mouse/default_gutter_handler", "ace/mouse/mouse_event", "ace/mouse/dragdrop_handler", "ace/mouse/touch_handler", "ace/config"], function(require3, exports2, module2) {
        "use strict";
        var event = require3("../lib/event");
        var useragent = require3("../lib/useragent");
        var DefaultHandlers = require3("./default_handlers").DefaultHandlers;
        var DefaultGutterHandler = require3("./default_gutter_handler").GutterHandler;
        var MouseEvent = require3("./mouse_event").MouseEvent;
        var DragdropHandler = require3("./dragdrop_handler").DragdropHandler;
        var addTouchListeners = require3("./touch_handler").addTouchListeners;
        var config2 = require3("../config");
        var MouseHandler = function(editor) {
          var _self = this;
          this.editor = editor;
          new DefaultHandlers(this);
          new DefaultGutterHandler(this);
          new DragdropHandler(this);
          var focusEditor = function(e10) {
            var windowBlurred = !document.hasFocus || !document.hasFocus() || !editor.isFocused() && document.activeElement == (editor.textInput && editor.textInput.getElement());
            if (windowBlurred)
              window.focus();
            editor.focus();
            setTimeout(function() {
              if (!editor.isFocused())
                editor.focus();
            });
          };
          var mouseTarget = editor.renderer.getMouseEventTarget();
          event.addListener(mouseTarget, "click", this.onMouseEvent.bind(this, "click"), editor);
          event.addListener(mouseTarget, "mousemove", this.onMouseMove.bind(this, "mousemove"), editor);
          event.addMultiMouseDownListener([
            mouseTarget,
            editor.renderer.scrollBarV && editor.renderer.scrollBarV.inner,
            editor.renderer.scrollBarH && editor.renderer.scrollBarH.inner,
            editor.textInput && editor.textInput.getElement()
          ].filter(Boolean), [400, 300, 250], this, "onMouseEvent", editor);
          event.addMouseWheelListener(editor.container, this.onMouseWheel.bind(this, "mousewheel"), editor);
          addTouchListeners(editor.container, editor);
          var gutterEl = editor.renderer.$gutter;
          event.addListener(gutterEl, "mousedown", this.onMouseEvent.bind(this, "guttermousedown"), editor);
          event.addListener(gutterEl, "click", this.onMouseEvent.bind(this, "gutterclick"), editor);
          event.addListener(gutterEl, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick"), editor);
          event.addListener(gutterEl, "mousemove", this.onMouseEvent.bind(this, "guttermousemove"), editor);
          event.addListener(mouseTarget, "mousedown", focusEditor, editor);
          event.addListener(gutterEl, "mousedown", focusEditor, editor);
          if (useragent.isIE && editor.renderer.scrollBarV) {
            event.addListener(editor.renderer.scrollBarV.element, "mousedown", focusEditor, editor);
            event.addListener(editor.renderer.scrollBarH.element, "mousedown", focusEditor, editor);
          }
          editor.on("mousemove", function(e10) {
            if (_self.state || _self.$dragDelay || !_self.$dragEnabled)
              return;
            var character = editor.renderer.screenToTextCoordinates(e10.x, e10.y);
            var range = editor.session.selection.getRange();
            var renderer = editor.renderer;
            if (!range.isEmpty() && range.insideStart(character.row, character.column)) {
              renderer.setCursorStyle("default");
            } else {
              renderer.setCursorStyle("");
            }
          }, editor);
        };
        (function() {
          this.onMouseEvent = function(name2, e10) {
            if (!this.editor.session)
              return;
            this.editor._emit(name2, new MouseEvent(e10, this.editor));
          };
          this.onMouseMove = function(name2, e10) {
            var listeners = this.editor._eventRegistry && this.editor._eventRegistry.mousemove;
            if (!listeners || !listeners.length)
              return;
            this.editor._emit(name2, new MouseEvent(e10, this.editor));
          };
          this.onMouseWheel = function(name2, e10) {
            var mouseEvent = new MouseEvent(e10, this.editor);
            mouseEvent.speed = this.$scrollSpeed * 2;
            mouseEvent.wheelX = e10.wheelX;
            mouseEvent.wheelY = e10.wheelY;
            this.editor._emit(name2, mouseEvent);
          };
          this.setState = function(state) {
            this.state = state;
          };
          this.captureMouse = function(ev, mouseMoveHandler) {
            this.x = ev.x;
            this.y = ev.y;
            this.isMousePressed = true;
            var editor = this.editor;
            var renderer = this.editor.renderer;
            renderer.$isMousePressed = true;
            var self = this;
            var onMouseMove = function(e10) {
              if (!e10)
                return;
              if (useragent.isWebKit && !e10.which && self.releaseMouse)
                return self.releaseMouse();
              self.x = e10.clientX;
              self.y = e10.clientY;
              mouseMoveHandler && mouseMoveHandler(e10);
              self.mouseEvent = new MouseEvent(e10, self.editor);
              self.$mouseMoved = true;
            };
            var onCaptureEnd = function(e10) {
              editor.off("beforeEndOperation", onOperationEnd);
              clearInterval(timerId);
              if (editor.session)
                onCaptureInterval();
              self[self.state + "End"] && self[self.state + "End"](e10);
              self.state = "";
              self.isMousePressed = renderer.$isMousePressed = false;
              if (renderer.$keepTextAreaAtCursor)
                renderer.$moveTextAreaToCursor();
              self.$onCaptureMouseMove = self.releaseMouse = null;
              e10 && self.onMouseEvent("mouseup", e10);
              editor.endOperation();
            };
            var onCaptureInterval = function() {
              self[self.state] && self[self.state]();
              self.$mouseMoved = false;
            };
            if (useragent.isOldIE && ev.domEvent.type == "dblclick") {
              return setTimeout(function() {
                onCaptureEnd(ev);
              });
            }
            var onOperationEnd = function(e10) {
              if (!self.releaseMouse)
                return;
              if (editor.curOp.command.name && editor.curOp.selectionChanged) {
                self[self.state + "End"] && self[self.state + "End"]();
                self.state = "";
                self.releaseMouse();
              }
            };
            editor.on("beforeEndOperation", onOperationEnd);
            editor.startOperation({ command: { name: "mouse" } });
            self.$onCaptureMouseMove = onMouseMove;
            self.releaseMouse = event.capture(this.editor.container, onMouseMove, onCaptureEnd);
            var timerId = setInterval(onCaptureInterval, 20);
          };
          this.releaseMouse = null;
          this.cancelContextMenu = function() {
            var stop = function(e10) {
              if (e10 && e10.domEvent && e10.domEvent.type != "contextmenu")
                return;
              this.editor.off("nativecontextmenu", stop);
              if (e10 && e10.domEvent)
                event.stopEvent(e10.domEvent);
            }.bind(this);
            setTimeout(stop, 10);
            this.editor.on("nativecontextmenu", stop);
          };
          this.destroy = function() {
            if (this.releaseMouse)
              this.releaseMouse();
          };
        }).call(MouseHandler.prototype);
        config2.defineOptions(MouseHandler.prototype, "mouseHandler", {
          scrollSpeed: { initialValue: 2 },
          dragDelay: { initialValue: useragent.isMac ? 150 : 0 },
          dragEnabled: { initialValue: true },
          focusTimeout: { initialValue: 0 },
          tooltipFollowsMouse: { initialValue: true }
        });
        exports2.MouseHandler = MouseHandler;
      });
      ace.define("ace/mouse/fold_handler", ["require", "exports", "module", "ace/lib/dom"], function(require3, exports2, module2) {
        "use strict";
        var dom = require3("../lib/dom");
        function FoldHandler(editor) {
          editor.on("click", function(e10) {
            var position = e10.getDocumentPosition();
            var session = editor.session;
            var fold = session.getFoldAt(position.row, position.column, 1);
            if (fold) {
              if (e10.getAccelKey())
                session.removeFold(fold);
              else
                session.expandFold(fold);
              e10.stop();
            }
            var target = e10.domEvent && e10.domEvent.target;
            if (target && dom.hasCssClass(target, "ace_inline_button")) {
              if (dom.hasCssClass(target, "ace_toggle_wrap")) {
                session.setOption("wrap", !session.getUseWrapMode());
                editor.renderer.scrollCursorIntoView();
              }
            }
          });
          editor.on("gutterclick", function(e10) {
            var gutterRegion = editor.renderer.$gutterLayer.getRegion(e10);
            if (gutterRegion == "foldWidgets") {
              var row = e10.getDocumentPosition().row;
              var session = editor.session;
              if (session.foldWidgets && session.foldWidgets[row])
                editor.session.onFoldWidgetClick(row, e10);
              if (!editor.isFocused())
                editor.focus();
              e10.stop();
            }
          });
          editor.on("gutterdblclick", function(e10) {
            var gutterRegion = editor.renderer.$gutterLayer.getRegion(e10);
            if (gutterRegion == "foldWidgets") {
              var row = e10.getDocumentPosition().row;
              var session = editor.session;
              var data = session.getParentFoldRangeData(row, true);
              var range = data.range || data.firstRange;
              if (range) {
                row = range.start.row;
                var fold = session.getFoldAt(row, session.getLine(row).length, 1);
                if (fold) {
                  session.removeFold(fold);
                } else {
                  session.addFold("...", range);
                  editor.renderer.scrollCursorIntoView({ row: range.start.row, column: 0 });
                }
              }
              e10.stop();
            }
          });
        }
        exports2.FoldHandler = FoldHandler;
      });
      ace.define("ace/keyboard/keybinding", ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"], function(require3, exports2, module2) {
        "use strict";
        var keyUtil = require3("../lib/keys");
        var event = require3("../lib/event");
        var KeyBinding = function(editor) {
          this.$editor = editor;
          this.$data = { editor };
          this.$handlers = [];
          this.setDefaultHandler(editor.commands);
        };
        (function() {
          this.setDefaultHandler = function(kb) {
            this.removeKeyboardHandler(this.$defaultHandler);
            this.$defaultHandler = kb;
            this.addKeyboardHandler(kb, 0);
          };
          this.setKeyboardHandler = function(kb) {
            var h5 = this.$handlers;
            if (h5[h5.length - 1] == kb)
              return;
            while (h5[h5.length - 1] && h5[h5.length - 1] != this.$defaultHandler)
              this.removeKeyboardHandler(h5[h5.length - 1]);
            this.addKeyboardHandler(kb, 1);
          };
          this.addKeyboardHandler = function(kb, pos) {
            if (!kb)
              return;
            if (typeof kb == "function" && !kb.handleKeyboard)
              kb.handleKeyboard = kb;
            var i6 = this.$handlers.indexOf(kb);
            if (i6 != -1)
              this.$handlers.splice(i6, 1);
            if (pos == void 0)
              this.$handlers.push(kb);
            else
              this.$handlers.splice(pos, 0, kb);
            if (i6 == -1 && kb.attach)
              kb.attach(this.$editor);
          };
          this.removeKeyboardHandler = function(kb) {
            var i6 = this.$handlers.indexOf(kb);
            if (i6 == -1)
              return false;
            this.$handlers.splice(i6, 1);
            kb.detach && kb.detach(this.$editor);
            return true;
          };
          this.getKeyboardHandler = function() {
            return this.$handlers[this.$handlers.length - 1];
          };
          this.getStatusText = function() {
            var data = this.$data;
            var editor = data.editor;
            return this.$handlers.map(function(h5) {
              return h5.getStatusText && h5.getStatusText(editor, data) || "";
            }).filter(Boolean).join(" ");
          };
          this.$callKeyboardHandlers = function(hashId, keyString, keyCode, e10) {
            var toExecute;
            var success = false;
            var commands = this.$editor.commands;
            for (var i6 = this.$handlers.length; i6--; ) {
              toExecute = this.$handlers[i6].handleKeyboard(
                this.$data,
                hashId,
                keyString,
                keyCode,
                e10
              );
              if (!toExecute || !toExecute.command)
                continue;
              if (toExecute.command == "null") {
                success = true;
              } else {
                success = commands.exec(toExecute.command, this.$editor, toExecute.args, e10);
              }
              if (success && e10 && hashId != -1 && toExecute.passEvent != true && toExecute.command.passEvent != true) {
                event.stopEvent(e10);
              }
              if (success)
                break;
            }
            if (!success && hashId == -1) {
              toExecute = { command: "insertstring" };
              success = commands.exec("insertstring", this.$editor, keyString);
            }
            if (success && this.$editor._signal)
              this.$editor._signal("keyboardActivity", toExecute);
            return success;
          };
          this.onCommandKey = function(e10, hashId, keyCode) {
            var keyString = keyUtil.keyCodeToString(keyCode);
            return this.$callKeyboardHandlers(hashId, keyString, keyCode, e10);
          };
          this.onTextInput = function(text) {
            return this.$callKeyboardHandlers(-1, text);
          };
        }).call(KeyBinding.prototype);
        exports2.KeyBinding = KeyBinding;
      });
      ace.define("ace/lib/bidiutil", ["require", "exports", "module"], function(require3, exports2, module2) {
        "use strict";
        var ArabicAlefBetIntervalsBegine = ["\u0621", "\u0641"];
        var ArabicAlefBetIntervalsEnd = ["\u063A", "\u064A"];
        var dir = 0, hiLevel = 0;
        var lastArabic = false, hasUBAT_AL = false, hasUBAT_B = false, hasUBAT_S = false, hasBlockSep = false, hasSegSep = false;
        var impTab_LTR = [
          [0, 3, 0, 1, 0, 0, 0],
          [0, 3, 0, 1, 2, 2, 0],
          [0, 3, 0, 17, 2, 0, 1],
          [0, 3, 5, 5, 4, 1, 0],
          [0, 3, 21, 21, 4, 0, 1],
          [0, 3, 5, 5, 4, 2, 0]
        ];
        var impTab_RTL = [
          [2, 0, 1, 1, 0, 1, 0],
          [2, 0, 1, 1, 0, 2, 0],
          [2, 0, 2, 1, 3, 2, 0],
          [2, 0, 2, 33, 3, 1, 1]
        ];
        var LTR = 0, RTL = 1;
        var L2 = 0;
        var R2 = 1;
        var EN = 2;
        var AN = 3;
        var ON = 4;
        var B = 5;
        var S3 = 6;
        var AL = 7;
        var WS = 8;
        var CS = 9;
        var ES = 10;
        var ET = 11;
        var NSM = 12;
        var LRE = 13;
        var RLE = 14;
        var PDF = 15;
        var LRO = 16;
        var RLO = 17;
        var BN = 18;
        var UnicodeTBL00 = [
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          S3,
          B,
          S3,
          WS,
          B,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          B,
          B,
          B,
          S3,
          WS,
          ON,
          ON,
          ET,
          ET,
          ET,
          ON,
          ON,
          ON,
          ON,
          ON,
          ES,
          CS,
          ES,
          CS,
          CS,
          EN,
          EN,
          EN,
          EN,
          EN,
          EN,
          EN,
          EN,
          EN,
          EN,
          CS,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          L2,
          ON,
          ON,
          ON,
          ON,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          B,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          BN,
          CS,
          ON,
          ET,
          ET,
          ET,
          ET,
          ON,
          ON,
          ON,
          ON,
          L2,
          ON,
          ON,
          BN,
          ON,
          ON,
          ET,
          ET,
          EN,
          EN,
          ON,
          L2,
          ON,
          ON,
          ON,
          EN,
          L2,
          ON,
          ON,
          ON,
          ON,
          ON
        ];
        var UnicodeTBL20 = [
          WS,
          WS,
          WS,
          WS,
          WS,
          WS,
          WS,
          WS,
          WS,
          WS,
          WS,
          BN,
          BN,
          BN,
          L2,
          R2,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          WS,
          B,
          LRE,
          RLE,
          PDF,
          LRO,
          RLO,
          CS,
          ET,
          ET,
          ET,
          ET,
          ET,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          CS,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          ON,
          WS
        ];
        function _computeLevels(chars, levels, len, charTypes) {
          var impTab = dir ? impTab_RTL : impTab_LTR, prevState = null, newClass = null, newLevel = null, newState = 0, action = null, cond = null, condPos = -1, i6 = null, ix = null, classes = [];
          if (!charTypes) {
            for (i6 = 0, charTypes = []; i6 < len; i6++) {
              charTypes[i6] = _getCharacterType(chars[i6]);
            }
          }
          hiLevel = dir;
          lastArabic = false;
          hasUBAT_AL = false;
          hasUBAT_B = false;
          hasUBAT_S = false;
          for (ix = 0; ix < len; ix++) {
            prevState = newState;
            classes[ix] = newClass = _getCharClass(chars, charTypes, classes, ix);
            newState = impTab[prevState][newClass];
            action = newState & 240;
            newState &= 15;
            levels[ix] = newLevel = impTab[newState][5];
            if (action > 0) {
              if (action == 16) {
                for (i6 = condPos; i6 < ix; i6++) {
                  levels[i6] = 1;
                }
                condPos = -1;
              } else {
                condPos = -1;
              }
            }
            cond = impTab[newState][6];
            if (cond) {
              if (condPos == -1) {
                condPos = ix;
              }
            } else {
              if (condPos > -1) {
                for (i6 = condPos; i6 < ix; i6++) {
                  levels[i6] = newLevel;
                }
                condPos = -1;
              }
            }
            if (charTypes[ix] == B) {
              levels[ix] = 0;
            }
            hiLevel |= newLevel;
          }
          if (hasUBAT_S) {
            for (i6 = 0; i6 < len; i6++) {
              if (charTypes[i6] == S3) {
                levels[i6] = dir;
                for (var j = i6 - 1; j >= 0; j--) {
                  if (charTypes[j] == WS) {
                    levels[j] = dir;
                  } else {
                    break;
                  }
                }
              }
            }
          }
        }
        function _invertLevel(lev, levels, _array) {
          if (hiLevel < lev) {
            return;
          }
          if (lev == 1 && dir == RTL && !hasUBAT_B) {
            _array.reverse();
            return;
          }
          var len = _array.length, start = 0, end, lo, hi, tmp;
          while (start < len) {
            if (levels[start] >= lev) {
              end = start + 1;
              while (end < len && levels[end] >= lev) {
                end++;
              }
              for (lo = start, hi = end - 1; lo < hi; lo++, hi--) {
                tmp = _array[lo];
                _array[lo] = _array[hi];
                _array[hi] = tmp;
              }
              start = end;
            }
            start++;
          }
        }
        function _getCharClass(chars, types, classes, ix) {
          var cType = types[ix], wType, nType, len, i6;
          switch (cType) {
            case L2:
            case R2:
              lastArabic = false;
            case ON:
            case AN:
              return cType;
            case EN:
              return lastArabic ? AN : EN;
            case AL:
              lastArabic = true;
              hasUBAT_AL = true;
              return R2;
            case WS:
              return ON;
            case CS:
              if (ix < 1 || ix + 1 >= types.length || (wType = classes[ix - 1]) != EN && wType != AN || (nType = types[ix + 1]) != EN && nType != AN) {
                return ON;
              }
              if (lastArabic) {
                nType = AN;
              }
              return nType == wType ? nType : ON;
            case ES:
              wType = ix > 0 ? classes[ix - 1] : B;
              if (wType == EN && ix + 1 < types.length && types[ix + 1] == EN) {
                return EN;
              }
              return ON;
            case ET:
              if (ix > 0 && classes[ix - 1] == EN) {
                return EN;
              }
              if (lastArabic) {
                return ON;
              }
              i6 = ix + 1;
              len = types.length;
              while (i6 < len && types[i6] == ET) {
                i6++;
              }
              if (i6 < len && types[i6] == EN) {
                return EN;
              }
              return ON;
            case NSM:
              len = types.length;
              i6 = ix + 1;
              while (i6 < len && types[i6] == NSM) {
                i6++;
              }
              if (i6 < len) {
                var c2 = chars[ix], rtlCandidate = c2 >= 1425 && c2 <= 2303 || c2 == 64286;
                wType = types[i6];
                if (rtlCandidate && (wType == R2 || wType == AL)) {
                  return R2;
                }
              }
              if (ix < 1 || (wType = types[ix - 1]) == B) {
                return ON;
              }
              return classes[ix - 1];
            case B:
              lastArabic = false;
              hasUBAT_B = true;
              return dir;
            case S3:
              hasUBAT_S = true;
              return ON;
            case LRE:
            case RLE:
            case LRO:
            case RLO:
            case PDF:
              lastArabic = false;
            case BN:
              return ON;
          }
        }
        function _getCharacterType(ch) {
          var uc = ch.charCodeAt(0), hi = uc >> 8;
          if (hi == 0) {
            return uc > 191 ? L2 : UnicodeTBL00[uc];
          } else if (hi == 5) {
            return /[\u0591-\u05f4]/.test(ch) ? R2 : L2;
          } else if (hi == 6) {
            if (/[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(ch))
              return NSM;
            else if (/[\u0660-\u0669\u066b-\u066c]/.test(ch))
              return AN;
            else if (uc == 1642)
              return ET;
            else if (/[\u06f0-\u06f9]/.test(ch))
              return EN;
            else
              return AL;
          } else if (hi == 32 && uc <= 8287) {
            return UnicodeTBL20[uc & 255];
          } else if (hi == 254) {
            return uc >= 65136 ? AL : ON;
          }
          return ON;
        }
        function _isArabicDiacritics(ch) {
          return ch >= "\u064B" && ch <= "\u0655";
        }
        exports2.L = L2;
        exports2.R = R2;
        exports2.EN = EN;
        exports2.ON_R = 3;
        exports2.AN = 4;
        exports2.R_H = 5;
        exports2.B = 6;
        exports2.RLE = 7;
        exports2.DOT = "\xB7";
        exports2.doBidiReorder = function(text, textCharTypes, isRtl) {
          if (text.length < 2)
            return {};
          var chars = text.split(""), logicalFromVisual = new Array(chars.length), bidiLevels = new Array(chars.length), levels = [];
          dir = isRtl ? RTL : LTR;
          _computeLevels(chars, levels, chars.length, textCharTypes);
          for (var i6 = 0; i6 < logicalFromVisual.length; logicalFromVisual[i6] = i6, i6++)
            ;
          _invertLevel(2, levels, logicalFromVisual);
          _invertLevel(1, levels, logicalFromVisual);
          for (var i6 = 0; i6 < logicalFromVisual.length - 1; i6++) {
            if (textCharTypes[i6] === AN) {
              levels[i6] = exports2.AN;
            } else if (levels[i6] === R2 && (textCharTypes[i6] > AL && textCharTypes[i6] < LRE || textCharTypes[i6] === ON || textCharTypes[i6] === BN)) {
              levels[i6] = exports2.ON_R;
            } else if (i6 > 0 && chars[i6 - 1] === "\u0644" && /\u0622|\u0623|\u0625|\u0627/.test(chars[i6])) {
              levels[i6 - 1] = levels[i6] = exports2.R_H;
              i6++;
            }
          }
          if (chars[chars.length - 1] === exports2.DOT)
            levels[chars.length - 1] = exports2.B;
          if (chars[0] === "\u202B")
            levels[0] = exports2.RLE;
          for (var i6 = 0; i6 < logicalFromVisual.length; i6++) {
            bidiLevels[i6] = levels[logicalFromVisual[i6]];
          }
          return { "logicalFromVisual": logicalFromVisual, "bidiLevels": bidiLevels };
        };
        exports2.hasBidiCharacters = function(text, textCharTypes) {
          var ret = false;
          for (var i6 = 0; i6 < text.length; i6++) {
            textCharTypes[i6] = _getCharacterType(text.charAt(i6));
            if (!ret && (textCharTypes[i6] == R2 || textCharTypes[i6] == AL || textCharTypes[i6] == AN))
              ret = true;
          }
          return ret;
        };
        exports2.getVisualFromLogicalIdx = function(logIdx, rowMap) {
          for (var i6 = 0; i6 < rowMap.logicalFromVisual.length; i6++) {
            if (rowMap.logicalFromVisual[i6] == logIdx)
              return i6;
          }
          return 0;
        };
      });
      ace.define("ace/bidihandler", ["require", "exports", "module", "ace/lib/bidiutil", "ace/lib/lang"], function(require3, exports2, module2) {
        "use strict";
        var bidiUtil = require3("./lib/bidiutil");
        var lang = require3("./lib/lang");
        var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\u202B]/;
        var BidiHandler = function(session) {
          this.session = session;
          this.bidiMap = {};
          this.currentRow = null;
          this.bidiUtil = bidiUtil;
          this.charWidths = [];
          this.EOL = "\xAC";
          this.showInvisibles = true;
          this.isRtlDir = false;
          this.$isRtl = false;
          this.line = "";
          this.wrapIndent = 0;
          this.EOF = "\xB6";
          this.RLE = "\u202B";
          this.contentWidth = 0;
          this.fontMetrics = null;
          this.rtlLineOffset = 0;
          this.wrapOffset = 0;
          this.isMoveLeftOperation = false;
          this.seenBidi = bidiRE.test(session.getValue());
        };
        (function() {
          this.isBidiRow = function(screenRow, docRow, splitIndex) {
            if (!this.seenBidi)
              return false;
            if (screenRow !== this.currentRow) {
              this.currentRow = screenRow;
              this.updateRowLine(docRow, splitIndex);
              this.updateBidiMap();
            }
            return this.bidiMap.bidiLevels;
          };
          this.onChange = function(delta) {
            if (!this.seenBidi) {
              if (delta.action == "insert" && bidiRE.test(delta.lines.join("\n"))) {
                this.seenBidi = true;
                this.currentRow = null;
              }
            } else {
              this.currentRow = null;
            }
          };
          this.getDocumentRow = function() {
            var docRow = 0;
            var rowCache = this.session.$screenRowCache;
            if (rowCache.length) {
              var index = this.session.$getRowCacheIndex(rowCache, this.currentRow);
              if (index >= 0)
                docRow = this.session.$docRowCache[index];
            }
            return docRow;
          };
          this.getSplitIndex = function() {
            var splitIndex = 0;
            var rowCache = this.session.$screenRowCache;
            if (rowCache.length) {
              var currentIndex, prevIndex = this.session.$getRowCacheIndex(rowCache, this.currentRow);
              while (this.currentRow - splitIndex > 0) {
                currentIndex = this.session.$getRowCacheIndex(rowCache, this.currentRow - splitIndex - 1);
                if (currentIndex !== prevIndex)
                  break;
                prevIndex = currentIndex;
                splitIndex++;
              }
            } else {
              splitIndex = this.currentRow;
            }
            return splitIndex;
          };
          this.updateRowLine = function(docRow, splitIndex) {
            if (docRow === void 0)
              docRow = this.getDocumentRow();
            var isLastRow = docRow === this.session.getLength() - 1, endOfLine = isLastRow ? this.EOF : this.EOL;
            this.wrapIndent = 0;
            this.line = this.session.getLine(docRow);
            this.isRtlDir = this.$isRtl || this.line.charAt(0) === this.RLE;
            if (this.session.$useWrapMode) {
              var splits = this.session.$wrapData[docRow];
              if (splits) {
                if (splitIndex === void 0)
                  splitIndex = this.getSplitIndex();
                if (splitIndex > 0 && splits.length) {
                  this.wrapIndent = splits.indent;
                  this.wrapOffset = this.wrapIndent * this.charWidths[bidiUtil.L];
                  this.line = splitIndex < splits.length ? this.line.substring(splits[splitIndex - 1], splits[splitIndex]) : this.line.substring(splits[splits.length - 1]);
                } else {
                  this.line = this.line.substring(0, splits[splitIndex]);
                }
                if (splitIndex == splits.length) {
                  this.line += this.showInvisibles ? endOfLine : bidiUtil.DOT;
                }
              }
            } else {
              this.line += this.showInvisibles ? endOfLine : bidiUtil.DOT;
            }
            var session = this.session, shift = 0, size;
            this.line = this.line.replace(/\t|[\u1100-\u2029, \u202F-\uFFE6]/g, function(ch, i6) {
              if (ch === "	" || session.isFullWidth(ch.charCodeAt(0))) {
                size = ch === "	" ? session.getScreenTabSize(i6 + shift) : 2;
                shift += size - 1;
                return lang.stringRepeat(bidiUtil.DOT, size);
              }
              return ch;
            });
            if (this.isRtlDir) {
              this.fontMetrics.$main.textContent = this.line.charAt(this.line.length - 1) == bidiUtil.DOT ? this.line.substr(0, this.line.length - 1) : this.line;
              this.rtlLineOffset = this.contentWidth - this.fontMetrics.$main.getBoundingClientRect().width;
            }
          };
          this.updateBidiMap = function() {
            var textCharTypes = [];
            if (bidiUtil.hasBidiCharacters(this.line, textCharTypes) || this.isRtlDir) {
              this.bidiMap = bidiUtil.doBidiReorder(this.line, textCharTypes, this.isRtlDir);
            } else {
              this.bidiMap = {};
            }
          };
          this.markAsDirty = function() {
            this.currentRow = null;
          };
          this.updateCharacterWidths = function(fontMetrics) {
            if (this.characterWidth === fontMetrics.$characterSize.width)
              return;
            this.fontMetrics = fontMetrics;
            var characterWidth = this.characterWidth = fontMetrics.$characterSize.width;
            var bidiCharWidth = fontMetrics.$measureCharWidth("\u05D4");
            this.charWidths[bidiUtil.L] = this.charWidths[bidiUtil.EN] = this.charWidths[bidiUtil.ON_R] = characterWidth;
            this.charWidths[bidiUtil.R] = this.charWidths[bidiUtil.AN] = bidiCharWidth;
            this.charWidths[bidiUtil.R_H] = bidiCharWidth * 0.45;
            this.charWidths[bidiUtil.B] = this.charWidths[bidiUtil.RLE] = 0;
            this.currentRow = null;
          };
          this.setShowInvisibles = function(showInvisibles) {
            this.showInvisibles = showInvisibles;
            this.currentRow = null;
          };
          this.setEolChar = function(eolChar) {
            this.EOL = eolChar;
          };
          this.setContentWidth = function(width) {
            this.contentWidth = width;
          };
          this.isRtlLine = function(row) {
            if (this.$isRtl)
              return true;
            if (row != void 0)
              return this.session.getLine(row).charAt(0) == this.RLE;
            else
              return this.isRtlDir;
          };
          this.setRtlDirection = function(editor, isRtlDir) {
            var cursor = editor.getCursorPosition();
            for (var row = editor.selection.getSelectionAnchor().row; row <= cursor.row; row++) {
              if (!isRtlDir && editor.session.getLine(row).charAt(0) === editor.session.$bidiHandler.RLE)
                editor.session.doc.removeInLine(row, 0, 1);
              else if (isRtlDir && editor.session.getLine(row).charAt(0) !== editor.session.$bidiHandler.RLE)
                editor.session.doc.insert({ column: 0, row }, editor.session.$bidiHandler.RLE);
            }
          };
          this.getPosLeft = function(col) {
            col -= this.wrapIndent;
            var leftBoundary = this.line.charAt(0) === this.RLE ? 1 : 0;
            var logicalIdx = col > leftBoundary ? this.session.getOverwrite() ? col : col - 1 : leftBoundary;
            var visualIdx = bidiUtil.getVisualFromLogicalIdx(logicalIdx, this.bidiMap), levels = this.bidiMap.bidiLevels, left = 0;
            if (!this.session.getOverwrite() && col <= leftBoundary && levels[visualIdx] % 2 !== 0)
              visualIdx++;
            for (var i6 = 0; i6 < visualIdx; i6++) {
              left += this.charWidths[levels[i6]];
            }
            if (!this.session.getOverwrite() && col > leftBoundary && levels[visualIdx] % 2 === 0)
              left += this.charWidths[levels[visualIdx]];
            if (this.wrapIndent)
              left += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset;
            if (this.isRtlDir)
              left += this.rtlLineOffset;
            return left;
          };
          this.getSelections = function(startCol, endCol) {
            var map = this.bidiMap, levels = map.bidiLevels, level, selections = [], offset = 0, selColMin = Math.min(startCol, endCol) - this.wrapIndent, selColMax = Math.max(startCol, endCol) - this.wrapIndent, isSelected = false, isSelectedPrev = false, selectionStart = 0;
            if (this.wrapIndent)
              offset += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset;
            for (var logIdx, visIdx = 0; visIdx < levels.length; visIdx++) {
              logIdx = map.logicalFromVisual[visIdx];
              level = levels[visIdx];
              isSelected = logIdx >= selColMin && logIdx < selColMax;
              if (isSelected && !isSelectedPrev) {
                selectionStart = offset;
              } else if (!isSelected && isSelectedPrev) {
                selections.push({ left: selectionStart, width: offset - selectionStart });
              }
              offset += this.charWidths[level];
              isSelectedPrev = isSelected;
            }
            if (isSelected && visIdx === levels.length) {
              selections.push({ left: selectionStart, width: offset - selectionStart });
            }
            if (this.isRtlDir) {
              for (var i6 = 0; i6 < selections.length; i6++) {
                selections[i6].left += this.rtlLineOffset;
              }
            }
            return selections;
          };
          this.offsetToCol = function(posX) {
            if (this.isRtlDir)
              posX -= this.rtlLineOffset;
            var logicalIdx = 0, posX = Math.max(posX, 0), offset = 0, visualIdx = 0, levels = this.bidiMap.bidiLevels, charWidth = this.charWidths[levels[visualIdx]];
            if (this.wrapIndent)
              posX -= this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset;
            while (posX > offset + charWidth / 2) {
              offset += charWidth;
              if (visualIdx === levels.length - 1) {
                charWidth = 0;
                break;
              }
              charWidth = this.charWidths[levels[++visualIdx]];
            }
            if (visualIdx > 0 && levels[visualIdx - 1] % 2 !== 0 && levels[visualIdx] % 2 === 0) {
              if (posX < offset)
                visualIdx--;
              logicalIdx = this.bidiMap.logicalFromVisual[visualIdx];
            } else if (visualIdx > 0 && levels[visualIdx - 1] % 2 === 0 && levels[visualIdx] % 2 !== 0) {
              logicalIdx = 1 + (posX > offset ? this.bidiMap.logicalFromVisual[visualIdx] : this.bidiMap.logicalFromVisual[visualIdx - 1]);
            } else if (this.isRtlDir && visualIdx === levels.length - 1 && charWidth === 0 && levels[visualIdx - 1] % 2 === 0 || !this.isRtlDir && visualIdx === 0 && levels[visualIdx] % 2 !== 0) {
              logicalIdx = 1 + this.bidiMap.logicalFromVisual[visualIdx];
            } else {
              if (visualIdx > 0 && levels[visualIdx - 1] % 2 !== 0 && charWidth !== 0)
                visualIdx--;
              logicalIdx = this.bidiMap.logicalFromVisual[visualIdx];
            }
            if (logicalIdx === 0 && this.isRtlDir)
              logicalIdx++;
            return logicalIdx + this.wrapIndent;
          };
        }).call(BidiHandler.prototype);
        exports2.BidiHandler = BidiHandler;
      });
      ace.define("ace/selection", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/range"], function(require3, exports2, module2) {
        "use strict";
        var oop = require3("./lib/oop");
        var lang = require3("./lib/lang");
        var EventEmitter = require3("./lib/event_emitter").EventEmitter;
        var Range = require3("./range").Range;
        var Selection = function(session) {
          this.session = session;
          this.doc = session.getDocument();
          this.clearSelection();
          this.cursor = this.lead = this.doc.createAnchor(0, 0);
          this.anchor = this.doc.createAnchor(0, 0);
          this.$silent = false;
          var self = this;
          this.cursor.on("change", function(e10) {
            self.$cursorChanged = true;
            if (!self.$silent)
              self._emit("changeCursor");
            if (!self.$isEmpty && !self.$silent)
              self._emit("changeSelection");
            if (!self.$keepDesiredColumnOnChange && e10.old.column != e10.value.column)
              self.$desiredColumn = null;
          });
          this.anchor.on("change", function() {
            self.$anchorChanged = true;
            if (!self.$isEmpty && !self.$silent)
              self._emit("changeSelection");
          });
        };
        (function() {
          oop.implement(this, EventEmitter);
          this.isEmpty = function() {
            return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column;
          };
          this.isMultiLine = function() {
            return !this.$isEmpty && this.anchor.row != this.cursor.row;
          };
          this.getCursor = function() {
            return this.lead.getPosition();
          };
          this.setSelectionAnchor = function(row, column) {
            this.$isEmpty = false;
            this.anchor.setPosition(row, column);
          };
          this.getAnchor = this.getSelectionAnchor = function() {
            if (this.$isEmpty)
              return this.getSelectionLead();
            return this.anchor.getPosition();
          };
          this.getSelectionLead = function() {
            return this.lead.getPosition();
          };
          this.isBackwards = function() {
            var anchor = this.anchor;
            var lead = this.lead;
            return anchor.row > lead.row || anchor.row == lead.row && anchor.column > lead.column;
          };
          this.getRange = function() {
            var anchor = this.anchor;
            var lead = this.lead;
            if (this.$isEmpty)
              return Range.fromPoints(lead, lead);
            return this.isBackwards() ? Range.fromPoints(lead, anchor) : Range.fromPoints(anchor, lead);
          };
          this.clearSelection = function() {
            if (!this.$isEmpty) {
              this.$isEmpty = true;
              this._emit("changeSelection");
            }
          };
          this.selectAll = function() {
            this.$setSelection(0, 0, Number.MAX_VALUE, Number.MAX_VALUE);
          };
          this.setRange = this.setSelectionRange = function(range, reverse) {
            var start = reverse ? range.end : range.start;
            var end = reverse ? range.start : range.end;
            this.$setSelection(start.row, start.column, end.row, end.column);
          };
          this.$setSelection = function(anchorRow, anchorColumn, cursorRow, cursorColumn) {
            if (this.$silent)
              return;
            var wasEmpty = this.$isEmpty;
            var wasMultiselect = this.inMultiSelectMode;
            this.$silent = true;
            this.$cursorChanged = this.$anchorChanged = false;
            this.anchor.setPosition(anchorRow, anchorColumn);
            this.cursor.setPosition(cursorRow, cursorColumn);
            this.$isEmpty = !Range.comparePoints(this.anchor, this.cursor);
            this.$silent = false;
            if (this.$cursorChanged)
              this._emit("changeCursor");
            if (this.$cursorChanged || this.$anchorChanged || wasEmpty != this.$isEmpty || wasMultiselect)
              this._emit("changeSelection");
          };
          this.$moveSelection = function(mover) {
            var lead = this.lead;
            if (this.$isEmpty)
              this.setSelectionAnchor(lead.row, lead.column);
            mover.call(this);
          };
          this.selectTo = function(row, column) {
            this.$moveSelection(function() {
              this.moveCursorTo(row, column);
            });
          };
          this.selectToPosition = function(pos) {
            this.$moveSelection(function() {
              this.moveCursorToPosition(pos);
            });
          };
          this.moveTo = function(row, column) {
            this.clearSelection();
            this.moveCursorTo(row, column);
          };
          this.moveToPosition = function(pos) {
            this.clearSelection();
            this.moveCursorToPosition(pos);
          };
          this.selectUp = function() {
            this.$moveSelection(this.moveCursorUp);
          };
          this.selectDown = function() {
            this.$moveSelection(this.moveCursorDown);
          };
          this.selectRight = function() {
            this.$moveSelection(this.moveCursorRight);
          };
          this.selectLeft = function() {
            this.$moveSelection(this.moveCursorLeft);
          };
          this.selectLineStart = function() {
            this.$moveSelection(this.moveCursorLineStart);
          };
          this.selectLineEnd = function() {
            this.$moveSelection(this.moveCursorLineEnd);
          };
          this.selectFileEnd = function() {
            this.$moveSelection(this.moveCursorFileEnd);
          };
          this.selectFileStart = function() {
            this.$moveSelection(this.moveCursorFileStart);
          };
          this.selectWordRight = function() {
            this.$moveSelection(this.moveCursorWordRight);
          };
          this.selectWordLeft = function() {
            this.$moveSelection(this.moveCursorWordLeft);
          };
          this.getWordRange = function(row, column) {
            if (typeof column == "undefined") {
              var cursor = row || this.lead;
              row = cursor.row;
              column = cursor.column;
            }
            return this.session.getWordRange(row, column);
          };
          this.selectWord = function() {
            this.setSelectionRange(this.getWordRange());
          };
          this.selectAWord = function() {
            var cursor = this.getCursor();
            var range = this.session.getAWordRange(cursor.row, cursor.column);
            this.setSelectionRange(range);
          };
          this.getLineRange = function(row, excludeLastChar) {
            var rowStart = typeof row == "number" ? row : this.lead.row;
            var rowEnd;
            var foldLine = this.session.getFoldLine(rowStart);
            if (foldLine) {
              rowStart = foldLine.start.row;
              rowEnd = foldLine.end.row;
            } else {
              rowEnd = rowStart;
            }
            if (excludeLastChar === true)
              return new Range(rowStart, 0, rowEnd, this.session.getLine(rowEnd).length);
            else
              return new Range(rowStart, 0, rowEnd + 1, 0);
          };
          this.selectLine = function() {
            this.setSelectionRange(this.getLineRange());
          };
          this.moveCursorUp = function() {
            this.moveCursorBy(-1, 0);
          };
          this.moveCursorDown = function() {
            this.moveCursorBy(1, 0);
          };
          this.wouldMoveIntoSoftTab = function(cursor, tabSize, direction) {
            var start = cursor.column;
            var end = cursor.column + tabSize;
            if (direction < 0) {
              start = cursor.column - tabSize;
              end = cursor.column;
            }
            return this.session.isTabStop(cursor) && this.doc.getLine(cursor.row).slice(start, end).split(" ").length - 1 == tabSize;
          };
          this.moveCursorLeft = function() {
            var cursor = this.lead.getPosition(), fold;
            if (fold = this.session.getFoldAt(cursor.row, cursor.column, -1)) {
              this.moveCursorTo(fold.start.row, fold.start.column);
            } else if (cursor.column === 0) {
              if (cursor.row > 0) {
                this.moveCursorTo(cursor.row - 1, this.doc.getLine(cursor.row - 1).length);
              }
            } else {
              var tabSize = this.session.getTabSize();
              if (this.wouldMoveIntoSoftTab(cursor, tabSize, -1) && !this.session.getNavigateWithinSoftTabs()) {
                this.moveCursorBy(0, -tabSize);
              } else {
                this.moveCursorBy(0, -1);
              }
            }
          };
          this.moveCursorRight = function() {
            var cursor = this.lead.getPosition(), fold;
            if (fold = this.session.getFoldAt(cursor.row, cursor.column, 1)) {
              this.moveCursorTo(fold.end.row, fold.end.column);
            } else if (this.lead.column == this.doc.getLine(this.lead.row).length) {
              if (this.lead.row < this.doc.getLength() - 1) {
                this.moveCursorTo(this.lead.row + 1, 0);
              }
            } else {
              var tabSize = this.session.getTabSize();
              var cursor = this.lead;
              if (this.wouldMoveIntoSoftTab(cursor, tabSize, 1) && !this.session.getNavigateWithinSoftTabs()) {
                this.moveCursorBy(0, tabSize);
              } else {
                this.moveCursorBy(0, 1);
              }
            }
          };
          this.moveCursorLineStart = function() {
            var row = this.lead.row;
            var column = this.lead.column;
            var screenRow = this.session.documentToScreenRow(row, column);
            var firstColumnPosition = this.session.screenToDocumentPosition(screenRow, 0);
            var beforeCursor = this.session.getDisplayLine(
              row,
              null,
              firstColumnPosition.row,
              firstColumnPosition.column
            );
            var leadingSpace = beforeCursor.match(/^\s*/);
            if (leadingSpace[0].length != column && !this.session.$useEmacsStyleLineStart)
              firstColumnPosition.column += leadingSpace[0].length;
            this.moveCursorToPosition(firstColumnPosition);
          };
          this.moveCursorLineEnd = function() {
            var lead = this.lead;
            var lineEnd = this.session.getDocumentLastRowColumnPosition(lead.row, lead.column);
            if (this.lead.column == lineEnd.column) {
              var line = this.session.getLine(lineEnd.row);
              if (lineEnd.column == line.length) {
                var textEnd = line.search(/\s+$/);
                if (textEnd > 0)
                  lineEnd.column = textEnd;
              }
            }
            this.moveCursorTo(lineEnd.row, lineEnd.column);
          };
          this.moveCursorFileEnd = function() {
            var row = this.doc.getLength() - 1;
            var column = this.doc.getLine(row).length;
            this.moveCursorTo(row, column);
          };
          this.moveCursorFileStart = function() {
            this.moveCursorTo(0, 0);
          };
          this.moveCursorLongWordRight = function() {
            var row = this.lead.row;
            var column = this.lead.column;
            var line = this.doc.getLine(row);
            var rightOfCursor = line.substring(column);
            this.session.nonTokenRe.lastIndex = 0;
            this.session.tokenRe.lastIndex = 0;
            var fold = this.session.getFoldAt(row, column, 1);
            if (fold) {
              this.moveCursorTo(fold.end.row, fold.end.column);
              return;
            }
            if (this.session.nonTokenRe.exec(rightOfCursor)) {
              column += this.session.nonTokenRe.lastIndex;
              this.session.nonTokenRe.lastIndex = 0;
              rightOfCursor = line.substring(column);
            }
            if (column >= line.length) {
              this.moveCursorTo(row, line.length);
              this.moveCursorRight();
              if (row < this.doc.getLength() - 1)
                this.moveCursorWordRight();
              return;
            }
            if (this.session.tokenRe.exec(rightOfCursor)) {
              column += this.session.tokenRe.lastIndex;
              this.session.tokenRe.lastIndex = 0;
            }
            this.moveCursorTo(row, column);
          };
          this.moveCursorLongWordLeft = function() {
            var row = this.lead.row;
            var column = this.lead.column;
            var fold;
            if (fold = this.session.getFoldAt(row, column, -1)) {
              this.moveCursorTo(fold.start.row, fold.start.column);
              return;
            }
            var str = this.session.getFoldStringAt(row, column, -1);
            if (str == null) {
              str = this.doc.getLine(row).substring(0, column);
            }
            var leftOfCursor = lang.stringReverse(str);
            this.session.nonTokenRe.lastIndex = 0;
            this.session.tokenRe.lastIndex = 0;
            if (this.session.nonTokenRe.exec(leftOfCursor)) {
              column -= this.session.nonTokenRe.lastIndex;
              leftOfCursor = leftOfCursor.slice(this.session.nonTokenRe.lastIndex);
              this.session.nonTokenRe.lastIndex = 0;
            }
            if (column <= 0) {
              this.moveCursorTo(row, 0);
              this.moveCursorLeft();
              if (row > 0)
                this.moveCursorWordLeft();
              return;
            }
            if (this.session.tokenRe.exec(leftOfCursor)) {
              column -= this.session.tokenRe.lastIndex;
              this.session.tokenRe.lastIndex = 0;
            }
            this.moveCursorTo(row, column);
          };
          this.$shortWordEndIndex = function(rightOfCursor) {
            var index = 0, ch;
            var whitespaceRe = /\s/;
            var tokenRe = this.session.tokenRe;
            tokenRe.lastIndex = 0;
            if (this.session.tokenRe.exec(rightOfCursor)) {
              index = this.session.tokenRe.lastIndex;
            } else {
              while ((ch = rightOfCursor[index]) && whitespaceRe.test(ch))
                index++;
              if (index < 1) {
                tokenRe.lastIndex = 0;
                while ((ch = rightOfCursor[index]) && !tokenRe.test(ch)) {
                  tokenRe.lastIndex = 0;
                  index++;
                  if (whitespaceRe.test(ch)) {
                    if (index > 2) {
                      index--;
                      break;
                    } else {
                      while ((ch = rightOfCursor[index]) && whitespaceRe.test(ch))
                        index++;
                      if (index > 2)
                        break;
                    }
                  }
                }
              }
            }
            tokenRe.lastIndex = 0;
            return index;
          };
          this.moveCursorShortWordRight = function() {
            var row = this.lead.row;
            var column = this.lead.column;
            var line = this.doc.getLine(row);
            var rightOfCursor = line.substring(column);
            var fold = this.session.getFoldAt(row, column, 1);
            if (fold)
              return this.moveCursorTo(fold.end.row, fold.end.column);
            if (column == line.length) {
              var l7 = this.doc.getLength();
              do {
                row++;
                rightOfCursor = this.doc.getLine(row);
              } while (row < l7 && /^\s*$/.test(rightOfCursor));
              if (!/^\s+/.test(rightOfCursor))
                rightOfCursor = "";
              column = 0;
            }
            var index = this.$shortWordEndIndex(rightOfCursor);
            this.moveCursorTo(row, column + index);
          };
          this.moveCursorShortWordLeft = function() {
            var row = this.lead.row;
            var column = this.lead.column;
            var fold;
            if (fold = this.session.getFoldAt(row, column, -1))
              return this.moveCursorTo(fold.start.row, fold.start.column);
            var line = this.session.getLine(row).substring(0, column);
            if (column === 0) {
              do {
                row--;
                line = this.doc.getLine(row);
              } while (row > 0 && /^\s*$/.test(line));
              column = line.length;
              if (!/\s+$/.test(line))
                line = "";
            }
            var leftOfCursor = lang.stringReverse(line);
            var index = this.$shortWordEndIndex(leftOfCursor);
            return this.moveCursorTo(row, column - index);
          };
          this.moveCursorWordRight = function() {
            if (this.session.$selectLongWords)
              this.moveCursorLongWordRight();
            else
              this.moveCursorShortWordRight();
          };
          this.moveCursorWordLeft = function() {
            if (this.session.$selectLongWords)
              this.moveCursorLongWordLeft();
            else
              this.moveCursorShortWordLeft();
          };
          this.moveCursorBy = function(rows, chars) {
            var screenPos = this.session.documentToScreenPosition(
              this.lead.row,
              this.lead.column
            );
            var offsetX;
            if (chars === 0) {
              if (rows !== 0) {
                if (this.session.$bidiHandler.isBidiRow(screenPos.row, this.lead.row)) {
                  offsetX = this.session.$bidiHandler.getPosLeft(screenPos.column);
                  screenPos.column = Math.round(offsetX / this.session.$bidiHandler.charWidths[0]);
                } else {
                  offsetX = screenPos.column * this.session.$bidiHandler.charWidths[0];
                }
              }
              if (this.$desiredColumn)
                screenPos.column = this.$desiredColumn;
              else
                this.$desiredColumn = screenPos.column;
            }
            if (rows != 0 && this.session.lineWidgets && this.session.lineWidgets[this.lead.row]) {
              var widget = this.session.lineWidgets[this.lead.row];
              if (rows < 0)
                rows -= widget.rowsAbove || 0;
              else if (rows > 0)
                rows += widget.rowCount - (widget.rowsAbove || 0);
            }
            var docPos = this.session.screenToDocumentPosition(screenPos.row + rows, screenPos.column, offsetX);
            if (rows !== 0 && chars === 0 && docPos.row === this.lead.row && docPos.column === this.lead.column) {
            }
            this.moveCursorTo(docPos.row, docPos.column + chars, chars === 0);
          };
          this.moveCursorToPosition = function(position) {
            this.moveCursorTo(position.row, position.column);
          };
          this.moveCursorTo = function(row, column, keepDesiredColumn) {
            var fold = this.session.getFoldAt(row, column, 1);
            if (fold) {
              row = fold.start.row;
              column = fold.start.column;
            }
            this.$keepDesiredColumnOnChange = true;
            var line = this.session.getLine(row);
            if (/[\uDC00-\uDFFF]/.test(line.charAt(column)) && line.charAt(column - 1)) {
              if (this.lead.row == row && this.lead.column == column + 1)
                column = column - 1;
              else
                column = column + 1;
            }
            this.lead.setPosition(row, column);
            this.$keepDesiredColumnOnChange = false;
            if (!keepDesiredColumn)
              this.$desiredColumn = null;
          };
          this.moveCursorToScreen = function(row, column, keepDesiredColumn) {
            var pos = this.session.screenToDocumentPosition(row, column);
            this.moveCursorTo(pos.row, pos.column, keepDesiredColumn);
          };
          this.detach = function() {
            this.lead.detach();
            this.anchor.detach();
          };
          this.fromOrientedRange = function(range) {
            this.setSelectionRange(range, range.cursor == range.start);
            this.$desiredColumn = range.desiredColumn || this.$desiredColumn;
          };
          this.toOrientedRange = function(range) {
            var r5 = this.getRange();
            if (range) {
              range.start.column = r5.start.column;
              range.start.row = r5.start.row;
              range.end.column = r5.end.column;
              range.end.row = r5.end.row;
            } else {
              range = r5;
            }
            range.cursor = this.isBackwards() ? range.start : range.end;
            range.desiredColumn = this.$desiredColumn;
            return range;
          };
          this.getRangeOfMovements = function(func) {
            var start = this.getCursor();
            try {
              func(this);
              var end = this.getCursor();
              return Range.fromPoints(start, end);
            } catch (e10) {
              return Range.fromPoints(start, start);
            } finally {
              this.moveCursorToPosition(start);
            }
          };
          this.toJSON = function() {
            if (this.rangeCount) {
              var data = this.ranges.map(function(r5) {
                var r1 = r5.clone();
                r1.isBackwards = r5.cursor == r5.start;
                return r1;
              });
            } else {
              var data = this.getRange();
              data.isBackwards = this.isBackwards();
            }
            return data;
          };
          this.fromJSON = function(data) {
            if (data.start == void 0) {
              if (this.rangeList && data.length > 1) {
                this.toSingleRange(data[0]);
                for (var i6 = data.length; i6--; ) {
                  var r5 = Range.fromPoints(data[i6].start, data[i6].end);
                  if (data[i6].isBackwards)
                    r5.cursor = r5.start;
                  this.addRange(r5, true);
                }
                return;
              } else {
                data = data[0];
              }
            }
            if (this.rangeList)
              this.toSingleRange(data);
            this.setSelectionRange(data, data.isBackwards);
          };
          this.isEqual = function(data) {
            if ((data.length || this.rangeCount) && data.length != this.rangeCount)
              return false;
            if (!data.length || !this.ranges)
              return this.getRange().isEqual(data);
            for (var i6 = this.ranges.length; i6--; ) {
              if (!this.ranges[i6].isEqual(data[i6]))
                return false;
            }
            return true;
          };
        }).call(Selection.prototype);
        exports2.Selection = Selection;
      });
      ace.define("ace/tokenizer", ["require", "exports", "module", "ace/config"], function(require3, exports2, module2) {
        "use strict";
        var config2 = require3("./config");
        var MAX_TOKEN_COUNT = 2e3;
        var Tokenizer = function(rules) {
          this.states = rules;
          this.regExps = {};
          this.matchMappings = {};
          for (var key in this.states) {
            var state = this.states[key];
            var ruleRegExps = [];
            var matchTotal = 0;
            var mapping = this.matchMappings[key] = { defaultToken: "text" };
            var flag = "g";
            var splitterRurles = [];
            for (var i6 = 0; i6 < state.length; i6++) {
              var rule = state[i6];
              if (rule.defaultToken)
                mapping.defaultToken = rule.defaultToken;
              if (rule.caseInsensitive && flag.indexOf("i") === -1)
                flag += "i";
              if (rule.unicode && flag.indexOf("u") === -1)
                flag += "u";
              if (rule.regex == null)
                continue;
              if (rule.regex instanceof RegExp)
                rule.regex = rule.regex.toString().slice(1, -1);
              var adjustedregex = rule.regex;
              var matchcount = new RegExp("(?:(" + adjustedregex + ")|(.))").exec("a").length - 2;
              if (Array.isArray(rule.token)) {
                if (rule.token.length == 1 || matchcount == 1) {
                  rule.token = rule.token[0];
                } else if (matchcount - 1 != rule.token.length) {
                  this.reportError("number of classes and regexp groups doesn't match", {
                    rule,
                    groupCount: matchcount - 1
                  });
                  rule.token = rule.token[0];
                } else {
                  rule.tokenArray = rule.token;
                  rule.token = null;
                  rule.onMatch = this.$arrayTokens;
                }
              } else if (typeof rule.token == "function" && !rule.onMatch) {
                if (matchcount > 1)
                  rule.onMatch = this.$applyToken;
                else
                  rule.onMatch = rule.token;
              }
              if (matchcount > 1) {
                if (/\\\d/.test(rule.regex)) {
                  adjustedregex = rule.regex.replace(/\\([0-9]+)/g, function(match, digit) {
                    return "\\" + (parseInt(digit, 10) + matchTotal + 1);
                  });
                } else {
                  matchcount = 1;
                  adjustedregex = this.removeCapturingGroups(rule.regex);
                }
                if (!rule.splitRegex && typeof rule.token != "string")
                  splitterRurles.push(rule);
              }
              mapping[matchTotal] = i6;
              matchTotal += matchcount;
              ruleRegExps.push(adjustedregex);
              if (!rule.onMatch)
                rule.onMatch = null;
            }
            if (!ruleRegExps.length) {
              mapping[0] = 0;
              ruleRegExps.push("$");
            }
            splitterRurles.forEach(function(rule2) {
              rule2.splitRegex = this.createSplitterRegexp(rule2.regex, flag);
            }, this);
            this.regExps[key] = new RegExp("(" + ruleRegExps.join(")|(") + ")|($)", flag);
          }
        };
        (function() {
          this.$setMaxTokenCount = function(m2) {
            MAX_TOKEN_COUNT = m2 | 0;
          };
          this.$applyToken = function(str) {
            var values = this.splitRegex.exec(str).slice(1);
            var types = this.token.apply(this, values);
            if (typeof types === "string")
              return [{ type: types, value: str }];
            var tokens = [];
            for (var i6 = 0, l7 = types.length; i6 < l7; i6++) {
              if (values[i6])
                tokens[tokens.length] = {
                  type: types[i6],
                  value: values[i6]
                };
            }
            return tokens;
          };
          this.$arrayTokens = function(str) {
            if (!str)
              return [];
            var values = this.splitRegex.exec(str);
            if (!values)
              return "text";
            var tokens = [];
            var types = this.tokenArray;
            for (var i6 = 0, l7 = types.length; i6 < l7; i6++) {
              if (values[i6 + 1])
                tokens[tokens.length] = {
                  type: types[i6],
                  value: values[i6 + 1]
                };
            }
            return tokens;
          };
          this.removeCapturingGroups = function(src) {
            var r5 = src.replace(
              /\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!<]|(\()/g,
              function(x2, y2) {
                return y2 ? "(?:" : x2;
              }
            );
            return r5;
          };
          this.createSplitterRegexp = function(src, flag) {
            if (src.indexOf("(?=") != -1) {
              var stack = 0;
              var inChClass = false;
              var lastCapture = {};
              src.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, function(m2, esc, parenOpen, parenClose, square, index) {
                if (inChClass) {
                  inChClass = square != "]";
                } else if (square) {
                  inChClass = true;
                } else if (parenClose) {
                  if (stack == lastCapture.stack) {
                    lastCapture.end = index + 1;
                    lastCapture.stack = -1;
                  }
                  stack--;
                } else if (parenOpen) {
                  stack++;
                  if (parenOpen.length != 1) {
                    lastCapture.stack = stack;
                    lastCapture.start = index;
                  }
                }
                return m2;
              });
              if (lastCapture.end != null && /^\)*$/.test(src.substr(lastCapture.end)))
                src = src.substring(0, lastCapture.start) + src.substr(lastCapture.end);
            }
            if (src.charAt(0) != "^")
              src = "^" + src;
            if (src.charAt(src.length - 1) != "$")
              src += "$";
            return new RegExp(src, (flag || "").replace("g", ""));
          };
          this.getLineTokens = function(line, startState) {
            if (startState && typeof startState != "string") {
              var stack = startState.slice(0);
              startState = stack[0];
              if (startState === "#tmp") {
                stack.shift();
                startState = stack.shift();
              }
            } else
              var stack = [];
            var currentState = startState || "start";
            var state = this.states[currentState];
            if (!state) {
              currentState = "start";
              state = this.states[currentState];
            }
            var mapping = this.matchMappings[currentState];
            var re = this.regExps[currentState];
            re.lastIndex = 0;
            var match, tokens = [];
            var lastIndex = 0;
            var matchAttempts = 0;
            var token = { type: null, value: "" };
            while (match = re.exec(line)) {
              var type = mapping.defaultToken;
              var rule = null;
              var value = match[0];
              var index = re.lastIndex;
              if (index - value.length > lastIndex) {
                var skipped = line.substring(lastIndex, index - value.length);
                if (token.type == type) {
                  token.value += skipped;
                } else {
                  if (token.type)
                    tokens.push(token);
                  token = { type, value: skipped };
                }
              }
              for (var i6 = 0; i6 < match.length - 2; i6++) {
                if (match[i6 + 1] === void 0)
                  continue;
                rule = state[mapping[i6]];
                if (rule.onMatch)
                  type = rule.onMatch(value, currentState, stack, line);
                else
                  type = rule.token;
                if (rule.next) {
                  if (typeof rule.next == "string") {
                    currentState = rule.next;
                  } else {
                    currentState = rule.next(currentState, stack);
                  }
                  state = this.states[currentState];
                  if (!state) {
                    this.reportError("state doesn't exist", currentState);
                    currentState = "start";
                    state = this.states[currentState];
                  }
                  mapping = this.matchMappings[currentState];
                  lastIndex = index;
                  re = this.regExps[currentState];
                  re.lastIndex = index;
                }
                if (rule.consumeLineEnd)
                  lastIndex = index;
                break;
              }
              if (value) {
                if (typeof type === "string") {
                  if ((!rule || rule.merge !== false) && token.type === type) {
                    token.value += value;
                  } else {
                    if (token.type)
                      tokens.push(token);
                    token = { type, value };
                  }
                } else if (type) {
                  if (token.type)
                    tokens.push(token);
                  token = { type: null, value: "" };
                  for (var i6 = 0; i6 < type.length; i6++)
                    tokens.push(type[i6]);
                }
              }
              if (lastIndex == line.length)
                break;
              lastIndex = index;
              if (matchAttempts++ > MAX_TOKEN_COUNT) {
                if (matchAttempts > 2 * line.length) {
                  this.reportError("infinite loop with in ace tokenizer", {
                    startState,
                    line
                  });
                }
                while (lastIndex < line.length) {
                  if (token.type)
                    tokens.push(token);
                  token = {
                    value: line.substring(lastIndex, lastIndex += 500),
                    type: "overflow"
                  };
                }
                currentState = "start";
                stack = [];
                break;
              }
            }
            if (token.type)
              tokens.push(token);
            if (stack.length > 1) {
              if (stack[0] !== currentState)
                stack.unshift("#tmp", currentState);
            }
            return {
              tokens,
              state: stack.length ? stack : currentState
            };
          };
          this.reportError = config2.reportError;
        }).call(Tokenizer.prototype);
        exports2.Tokenizer = Tokenizer;
      });
      ace.define("ace/mode/text_highlight_rules", ["require", "exports", "module", "ace/lib/lang"], function(require3, exports2, module2) {
        "use strict";
        var lang = require3("../lib/lang");
        var TextHighlightRules = function() {
          this.$rules = {
            "start": [{
              token: "empty_line",
              regex: "^$"
            }, {
              defaultToken: "text"
            }]
          };
        };
        (function() {
          this.addRules = function(rules, prefix) {
            if (!prefix) {
              for (var key in rules)
                this.$rules[key] = rules[key];
              return;
            }
            for (var key in rules) {
              var state = rules[key];
              for (var i6 = 0; i6 < state.length; i6++) {
                var rule = state[i6];
                if (rule.next || rule.onMatch) {
                  if (typeof rule.next == "string") {
                    if (rule.next.indexOf(prefix) !== 0)
                      rule.next = prefix + rule.next;
                  }
                  if (rule.nextState && rule.nextState.indexOf(prefix) !== 0)
                    rule.nextState = prefix + rule.nextState;
                }
              }
              this.$rules[prefix + key] = state;
            }
          };
          this.getRules = function() {
            return this.$rules;
          };
          this.embedRules = function(HighlightRules, prefix, escapeRules, states, append) {
            var embedRules = typeof HighlightRules == "function" ? new HighlightRules().getRules() : HighlightRules;
            if (states) {
              for (var i6 = 0; i6 < states.length; i6++)
                states[i6] = prefix + states[i6];
            } else {
              states = [];
              for (var key in embedRules)
                states.push(prefix + key);
            }
            this.addRules(embedRules, prefix);
            if (escapeRules) {
              var addRules = Array.prototype[append ? "push" : "unshift"];
              for (var i6 = 0; i6 < states.length; i6++)
                addRules.apply(this.$rules[states[i6]], lang.deepCopy(escapeRules));
            }
            if (!this.$embeds)
              this.$embeds = [];
            this.$embeds.push(prefix);
          };
          this.getEmbeds = function() {
            return this.$embeds;
          };
          var pushState = function(currentState, stack) {
            if (currentState != "start" || stack.length)
              stack.unshift(this.nextState, currentState);
            return this.nextState;
          };
          var popState = function(currentState, stack) {
            stack.shift();
            return stack.shift() || "start";
          };
          this.normalizeRules = function() {
            var id = 0;
            var rules = this.$rules;
            function processState(key) {
              var state = rules[key];
              state.processed = true;
              for (var i6 = 0; i6 < state.length; i6++) {
                var rule = state[i6];
                var toInsert = null;
                if (Array.isArray(rule)) {
                  toInsert = rule;
                  rule = {};
                }
                if (!rule.regex && rule.start) {
                  rule.regex = rule.start;
                  if (!rule.next)
                    rule.next = [];
                  rule.next.push({
                    defaultToken: rule.token
                  }, {
                    token: rule.token + ".end",
                    regex: rule.end || rule.start,
                    next: "pop"
                  });
                  rule.token = rule.token + ".start";
                  rule.push = true;
                }
                var next = rule.next || rule.push;
                if (next && Array.isArray(next)) {
                  var stateName = rule.stateName;
                  if (!stateName) {
                    stateName = rule.token;
                    if (typeof stateName != "string")
                      stateName = stateName[0] || "";
                    if (rules[stateName])
                      stateName += id++;
                  }
                  rules[stateName] = next;
                  rule.next = stateName;
                  processState(stateName);
                } else if (next == "pop") {
                  rule.next = popState;
                }
                if (rule.push) {
                  rule.nextState = rule.next || rule.push;
                  rule.next = pushState;
                  delete rule.push;
                }
                if (rule.rules) {
                  for (var r5 in rule.rules) {
                    if (rules[r5]) {
                      if (rules[r5].push)
                        rules[r5].push.apply(rules[r5], rule.rules[r5]);
                    } else {
                      rules[r5] = rule.rules[r5];
                    }
                  }
                }
                var includeName = typeof rule == "string" ? rule : rule.include;
                if (includeName) {
                  if (Array.isArray(includeName))
                    toInsert = includeName.map(function(x2) {
                      return rules[x2];
                    });
                  else
                    toInsert = rules[includeName];
                }
                if (toInsert) {
                  var args = [i6, 1].concat(toInsert);
                  if (rule.noEscape)
                    args = args.filter(function(x2) {
                      return !x2.next;
                    });
                  state.splice.apply(state, args);
                  i6--;
                }
                if (rule.keywordMap) {
                  rule.token = this.createKeywordMapper(
                    rule.keywordMap,
                    rule.defaultToken || "text",
                    rule.caseInsensitive
                  );
                  delete rule.defaultToken;
                }
              }
            }
            Object.keys(rules).forEach(processState, this);
          };
          this.createKeywordMapper = function(map, defaultToken, ignoreCase, splitChar) {
            var keywords = /* @__PURE__ */ Object.create(null);
            this.$keywordList = [];
            Object.keys(map).forEach(function(className) {
              var a3 = map[className];
              var list = a3.split(splitChar || "|");
              for (var i6 = list.length; i6--; ) {
                var word = list[i6];
                this.$keywordList.push(word);
                if (ignoreCase)
                  word = word.toLowerCase();
                keywords[word] = className;
              }
            }, this);
            map = null;
            return ignoreCase ? function(value) {
              return keywords[value.toLowerCase()] || defaultToken;
            } : function(value) {
              return keywords[value] || defaultToken;
            };
          };
          this.getKeywords = function() {
            return this.$keywords;
          };
        }).call(TextHighlightRules.prototype);
        exports2.TextHighlightRules = TextHighlightRules;
      });
      ace.define("ace/mode/behaviour", ["require", "exports", "module"], function(require3, exports2, module2) {
        "use strict";
        var Behaviour = function() {
          this.$behaviours = {};
        };
        (function() {
          this.add = function(name2, action, callback) {
            switch (void 0) {
              case this.$behaviours:
                this.$behaviours = {};
              case this.$behaviours[name2]:
                this.$behaviours[name2] = {};
            }
            this.$behaviours[name2][action] = callback;
          };
          this.addBehaviours = function(behaviours) {
            for (var key in behaviours) {
              for (var action in behaviours[key]) {
                this.add(key, action, behaviours[key][action]);
              }
            }
          };
          this.remove = function(name2) {
            if (this.$behaviours && this.$behaviours[name2]) {
              delete this.$behaviours[name2];
            }
          };
          this.inherit = function(mode, filter) {
            if (typeof mode === "function") {
              var behaviours = new mode().getBehaviours(filter);
            } else {
              var behaviours = mode.getBehaviours(filter);
            }
            this.addBehaviours(behaviours);
          };
          this.getBehaviours = function(filter) {
            if (!filter) {
              return this.$behaviours;
            } else {
              var ret = {};
              for (var i6 = 0; i6 < filter.length; i6++) {
                if (this.$behaviours[filter[i6]]) {
                  ret[filter[i6]] = this.$behaviours[filter[i6]];
                }
              }
              return ret;
            }
          };
        }).call(Behaviour.prototype);
        exports2.Behaviour = Behaviour;
      });
      ace.define("ace/token_iterator", ["require", "exports", "module", "ace/range"], function(require3, exports2, module2) {
        "use strict";
        var Range = require3("./range").Range;
        var TokenIterator = function(session, initialRow, initialColumn) {
          this.$session = session;
          this.$row = initialRow;
          this.$rowTokens = session.getTokens(initialRow);
          var token = session.getTokenAt(initialRow, initialColumn);
          this.$tokenIndex = token ? token.index : -1;
        };
        (function() {
          this.stepBackward = function() {
            this.$tokenIndex -= 1;
            while (this.$tokenIndex < 0) {
              this.$row -= 1;
              if (this.$row < 0) {
                this.$row = 0;
                return null;
              }
              this.$rowTokens = this.$session.getTokens(this.$row);
              this.$tokenIndex = this.$rowTokens.length - 1;
            }
            return this.$rowTokens[this.$tokenIndex];
          };
          this.stepForward = function() {
            this.$tokenIndex += 1;
            var rowCount;
            while (this.$tokenIndex >= this.$rowTokens.length) {
              this.$row += 1;
              if (!rowCount)
                rowCount = this.$session.getLength();
              if (this.$row >= rowCount) {
                this.$row = rowCount - 1;
                return null;
              }
              this.$rowTokens = this.$session.getTokens(this.$row);
              this.$tokenIndex = 0;
            }
            return this.$rowTokens[this.$tokenIndex];
          };
          this.getCurrentToken = function() {
            return this.$rowTokens[this.$tokenIndex];
          };
          this.getCurrentTokenRow = function() {
            return this.$row;
          };
          this.getCurrentTokenColumn = function() {
            var rowTokens = this.$rowTokens;
            var tokenIndex = this.$tokenIndex;
            var column = rowTokens[tokenIndex].start;
            if (column !== void 0)
              return column;
            column = 0;
            while (tokenIndex > 0) {
              tokenIndex -= 1;
              column += rowTokens[tokenIndex].value.length;
            }
            return column;
          };
          this.getCurrentTokenPosition = function() {
            return { row: this.$row, column: this.getCurrentTokenColumn() };
          };
          this.getCurrentTokenRange = function() {
            var token = this.$rowTokens[this.$tokenIndex];
            var column = this.getCurrentTokenColumn();
            return new Range(this.$row, column, this.$row, column + token.value.length);
          };
        }).call(TokenIterator.prototype);
        exports2.TokenIterator = TokenIterator;
      });
      ace.define("ace/mode/behaviour/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"], function(require3, exports2, module2) {
        "use strict";
        var oop = require3("../../lib/oop");
        var Behaviour = require3("../behaviour").Behaviour;
        var TokenIterator = require3("../../token_iterator").TokenIterator;
        var lang = require3("../../lib/lang");
        var SAFE_INSERT_IN_TOKENS = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator"];
        var SAFE_INSERT_BEFORE_TOKENS = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator", "comment"];
        var context;
        var contextCache = {};
        var defaultQuotes = { '"': '"', "'": "'" };
        var initContext = function(editor) {
          var id = -1;
          if (editor.multiSelect) {
            id = editor.selection.index;
            if (contextCache.rangeCount != editor.multiSelect.rangeCount)
              contextCache = { rangeCount: editor.multiSelect.rangeCount };
          }
          if (contextCache[id])
            return context = contextCache[id];
          context = contextCache[id] = {
            autoInsertedBrackets: 0,
            autoInsertedRow: -1,
            autoInsertedLineEnd: "",
            maybeInsertedBrackets: 0,
            maybeInsertedRow: -1,
            maybeInsertedLineStart: "",
            maybeInsertedLineEnd: ""
          };
        };
        var getWrapped = function(selection, selected, opening, closing) {
          var rowDiff = selection.end.row - selection.start.row;
          return {
            text: opening + selected + closing,
            selection: [
              0,
              selection.start.column + 1,
              rowDiff,
              selection.end.column + (rowDiff ? 0 : 1)
            ]
          };
        };
        var CstyleBehaviour = function(options) {
          this.add("braces", "insertion", function(state, action, editor, session, text) {
            var cursor = editor.getCursorPosition();
            var line = session.doc.getLine(cursor.row);
            if (text == "{") {
              initContext(editor);
              var selection = editor.getSelectionRange();
              var selected = session.doc.getTextRange(selection);
              if (selected !== "" && selected !== "{" && editor.getWrapBehavioursEnabled()) {
                return getWrapped(selection, selected, "{", "}");
              } else if (CstyleBehaviour.isSaneInsertion(editor, session)) {
                if (/[\]\}\)]/.test(line[cursor.column]) || editor.inMultiSelectMode || options && options.braces) {
                  CstyleBehaviour.recordAutoInsert(editor, session, "}");
                  return {
                    text: "{}",
                    selection: [1, 1]
                  };
                } else {
                  CstyleBehaviour.recordMaybeInsert(editor, session, "{");
                  return {
                    text: "{",
                    selection: [1, 1]
                  };
                }
              }
            } else if (text == "}") {
              initContext(editor);
              var rightChar = line.substring(cursor.column, cursor.column + 1);
              if (rightChar == "}") {
                var matching = session.$findOpeningBracket("}", { column: cursor.column + 1, row: cursor.row });
                if (matching !== null && CstyleBehaviour.isAutoInsertedClosing(cursor, line, text)) {
                  CstyleBehaviour.popAutoInsertedClosing();
                  return {
                    text: "",
                    selection: [1, 1]
                  };
                }
              }
            } else if (text == "\n" || text == "\r\n") {
              initContext(editor);
              var closing = "";
              if (CstyleBehaviour.isMaybeInsertedClosing(cursor, line)) {
                closing = lang.stringRepeat("}", context.maybeInsertedBrackets);
                CstyleBehaviour.clearMaybeInsertedClosing();
              }
              var rightChar = line.substring(cursor.column, cursor.column + 1);
              if (rightChar === "}") {
                var openBracePos = session.findMatchingBracket({ row: cursor.row, column: cursor.column + 1 }, "}");
                if (!openBracePos)
                  return null;
                var next_indent = this.$getIndent(session.getLine(openBracePos.row));
              } else if (closing) {
                var next_indent = this.$getIndent(line);
              } else {
                CstyleBehaviour.clearMaybeInsertedClosing();
                return;
              }
              var indent = next_indent + session.getTabString();
              return {
                text: "\n" + indent + "\n" + next_indent + closing,
                selection: [1, indent.length, 1, indent.length]
              };
            } else {
              CstyleBehaviour.clearMaybeInsertedClosing();
            }
          });
          this.add("braces", "deletion", function(state, action, editor, session, range) {
            var selected = session.doc.getTextRange(range);
            if (!range.isMultiLine() && selected == "{") {
              initContext(editor);
              var line = session.doc.getLine(range.start.row);
              var rightChar = line.substring(range.end.column, range.end.column + 1);
              if (rightChar == "}") {
                range.end.column++;
                return range;
              } else {
                context.maybeInsertedBrackets--;
              }
            }
          });
          this.add("parens", "insertion", function(state, action, editor, session, text) {
            if (text == "(") {
              initContext(editor);
              var selection = editor.getSelectionRange();
              var selected = session.doc.getTextRange(selection);
              if (selected !== "" && editor.getWrapBehavioursEnabled()) {
                return getWrapped(selection, selected, "(", ")");
              } else if (CstyleBehaviour.isSaneInsertion(editor, session)) {
                CstyleBehaviour.recordAutoInsert(editor, session, ")");
                return {
                  text: "()",
                  selection: [1, 1]
                };
              }
            } else if (text == ")") {
              initContext(editor);
              var cursor = editor.getCursorPosition();
              var line = session.doc.getLine(cursor.row);
              var rightChar = line.substring(cursor.column, cursor.column + 1);
              if (rightChar == ")") {
                var matching = session.$findOpeningBracket(")", { column: cursor.column + 1, row: cursor.row });
                if (matching !== null && CstyleBehaviour.isAutoInsertedClosing(cursor, line, text)) {
                  CstyleBehaviour.popAutoInsertedClosing();
                  return {
                    text: "",
                    selection: [1, 1]
                  };
                }
              }
            }
          });
          this.add("parens", "deletion", function(state, action, editor, session, range) {
            var selected = session.doc.getTextRange(range);
            if (!range.isMultiLine() && selected == "(") {
              initContext(editor);
              var line = session.doc.getLine(range.start.row);
              var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
              if (rightChar == ")") {
                range.end.column++;
                return range;
              }
            }
          });
          this.add("brackets", "insertion", function(state, action, editor, session, text) {
            if (text == "[") {
              initContext(editor);
              var selection = editor.getSelectionRange();
              var selected = session.doc.getTextRange(selection);
              if (selected !== "" && editor.getWrapBehavioursEnabled()) {
                return getWrapped(selection, selected, "[", "]");
              } else if (CstyleBehaviour.isSaneInsertion(editor, session)) {
                CstyleBehaviour.recordAutoInsert(editor, session, "]");
                return {
                  text: "[]",
                  selection: [1, 1]
                };
              }
            } else if (text == "]") {
              initContext(editor);
              var cursor = editor.getCursorPosition();
              var line = session.doc.getLine(cursor.row);
              var rightChar = line.substring(cursor.column, cursor.column + 1);
              if (rightChar == "]") {
                var matching = session.$findOpeningBracket("]", { column: cursor.column + 1, row: cursor.row });
                if (matching !== null && CstyleBehaviour.isAutoInsertedClosing(cursor, line, text)) {
                  CstyleBehaviour.popAutoInsertedClosing();
                  return {
                    text: "",
                    selection: [1, 1]
                  };
                }
              }
            }
          });
          this.add("brackets", "deletion", function(state, action, editor, session, range) {
            var selected = session.doc.getTextRange(range);
            if (!range.isMultiLine() && selected == "[") {
              initContext(editor);
              var line = session.doc.getLine(range.start.row);
              var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
              if (rightChar == "]") {
                range.end.column++;
                return range;
              }
            }
          });
          this.add("string_dquotes", "insertion", function(state, action, editor, session, text) {
            var quotes = session.$mode.$quotes || defaultQuotes;
            if (text.length == 1 && quotes[text]) {
              if (this.lineCommentStart && this.lineCommentStart.indexOf(text) != -1)
                return;
              initContext(editor);
              var quote = text;
              var selection = editor.getSelectionRange();
              var selected = session.doc.getTextRange(selection);
              if (selected !== "" && (selected.length != 1 || !quotes[selected]) && editor.getWrapBehavioursEnabled()) {
                return getWrapped(selection, selected, quote, quote);
              } else if (!selected) {
                var cursor = editor.getCursorPosition();
                var line = session.doc.getLine(cursor.row);
                var leftChar = line.substring(cursor.column - 1, cursor.column);
                var rightChar = line.substring(cursor.column, cursor.column + 1);
                var token = session.getTokenAt(cursor.row, cursor.column);
                var rightToken = session.getTokenAt(cursor.row, cursor.column + 1);
                if (leftChar == "\\" && token && /escape/.test(token.type))
                  return null;
                var stringBefore = token && /string|escape/.test(token.type);
                var stringAfter = !rightToken || /string|escape/.test(rightToken.type);
                var pair;
                if (rightChar == quote) {
                  pair = stringBefore !== stringAfter;
                  if (pair && /string\.end/.test(rightToken.type))
                    pair = false;
                } else {
                  if (stringBefore && !stringAfter)
                    return null;
                  if (stringBefore && stringAfter)
                    return null;
                  var wordRe = session.$mode.tokenRe;
                  wordRe.lastIndex = 0;
                  var isWordBefore = wordRe.test(leftChar);
                  wordRe.lastIndex = 0;
                  var isWordAfter = wordRe.test(leftChar);
                  if (isWordBefore || isWordAfter)
                    return null;
                  if (rightChar && !/[\s;,.})\]\\]/.test(rightChar))
                    return null;
                  var charBefore = line[cursor.column - 2];
                  if (leftChar == quote && (charBefore == quote || wordRe.test(charBefore)))
                    return null;
                  pair = true;
                }
                return {
                  text: pair ? quote + quote : "",
                  selection: [1, 1]
                };
              }
            }
          });
          this.add("string_dquotes", "deletion", function(state, action, editor, session, range) {
            var quotes = session.$mode.$quotes || defaultQuotes;
            var selected = session.doc.getTextRange(range);
            if (!range.isMultiLine() && quotes.hasOwnProperty(selected)) {
              initContext(editor);
              var line = session.doc.getLine(range.start.row);
              var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
              if (rightChar == selected) {
                range.end.column++;
                return range;
              }
            }
          });
        };
        CstyleBehaviour.isSaneInsertion = function(editor, session) {
          var cursor = editor.getCursorPosition();
          var iterator = new TokenIterator(session, cursor.row, cursor.column);
          if (!this.$matchTokenType(iterator.getCurrentToken() || "text", SAFE_INSERT_IN_TOKENS)) {
            if (/[)}\]]/.test(editor.session.getLine(cursor.row)[cursor.column]))
              return true;
            var iterator2 = new TokenIterator(session, cursor.row, cursor.column + 1);
            if (!this.$matchTokenType(iterator2.getCurrentToken() || "text", SAFE_INSERT_IN_TOKENS))
              return false;
          }
          iterator.stepForward();
          return iterator.getCurrentTokenRow() !== cursor.row || this.$matchTokenType(iterator.getCurrentToken() || "text", SAFE_INSERT_BEFORE_TOKENS);
        };
        CstyleBehaviour.$matchTokenType = function(token, types) {
          return types.indexOf(token.type || token) > -1;
        };
        CstyleBehaviour.recordAutoInsert = function(editor, session, bracket) {
          var cursor = editor.getCursorPosition();
          var line = session.doc.getLine(cursor.row);
          if (!this.isAutoInsertedClosing(cursor, line, context.autoInsertedLineEnd[0]))
            context.autoInsertedBrackets = 0;
          context.autoInsertedRow = cursor.row;
          context.autoInsertedLineEnd = bracket + line.substr(cursor.column);
          context.autoInsertedBrackets++;
        };
        CstyleBehaviour.recordMaybeInsert = function(editor, session, bracket) {
          var cursor = editor.getCursorPosition();
          var line = session.doc.getLine(cursor.row);
          if (!this.isMaybeInsertedClosing(cursor, line))
            context.maybeInsertedBrackets = 0;
          context.maybeInsertedRow = cursor.row;
          context.maybeInsertedLineStart = line.substr(0, cursor.column) + bracket;
          context.maybeInsertedLineEnd = line.substr(cursor.column);
          context.maybeInsertedBrackets++;
        };
        CstyleBehaviour.isAutoInsertedClosing = function(cursor, line, bracket) {
          return context.autoInsertedBrackets > 0 && cursor.row === context.autoInsertedRow && bracket === context.autoInsertedLineEnd[0] && line.substr(cursor.column) === context.autoInsertedLineEnd;
        };
        CstyleBehaviour.isMaybeInsertedClosing = function(cursor, line) {
          return context.maybeInsertedBrackets > 0 && cursor.row === context.maybeInsertedRow && line.substr(cursor.column) === context.maybeInsertedLineEnd && line.substr(0, cursor.column) == context.maybeInsertedLineStart;
        };
        CstyleBehaviour.popAutoInsertedClosing = function() {
          context.autoInsertedLineEnd = context.autoInsertedLineEnd.substr(1);
          context.autoInsertedBrackets--;
        };
        CstyleBehaviour.clearMaybeInsertedClosing = function() {
          if (context) {
            context.maybeInsertedBrackets = 0;
            context.maybeInsertedRow = -1;
          }
        };
        oop.inherits(CstyleBehaviour, Behaviour);
        exports2.CstyleBehaviour = CstyleBehaviour;
      });
      ace.define("ace/unicode", ["require", "exports", "module"], function(require3, exports2, module2) {
        "use strict";
        var wordChars = [48, 9, 8, 25, 5, 0, 2, 25, 48, 0, 11, 0, 5, 0, 6, 22, 2, 30, 2, 457, 5, 11, 15, 4, 8, 0, 2, 0, 18, 116, 2, 1, 3, 3, 9, 0, 2, 2, 2, 0, 2, 19, 2, 82, 2, 138, 2, 4, 3, 155, 12, 37, 3, 0, 8, 38, 10, 44, 2, 0, 2, 1, 2, 1, 2, 0, 9, 26, 6, 2, 30, 10, 7, 61, 2, 9, 5, 101, 2, 7, 3, 9, 2, 18, 3, 0, 17, 58, 3, 100, 15, 53, 5, 0, 6, 45, 211, 57, 3, 18, 2, 5, 3, 11, 3, 9, 2, 1, 7, 6, 2, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 0, 4, 3, 3, 8, 3, 1, 3, 3, 9, 0, 5, 1, 2, 4, 3, 11, 16, 2, 2, 5, 5, 1, 3, 21, 2, 6, 2, 1, 2, 1, 2, 1, 3, 0, 2, 4, 5, 1, 3, 2, 4, 0, 8, 3, 2, 0, 8, 15, 12, 2, 2, 8, 2, 2, 2, 21, 2, 6, 2, 1, 2, 4, 3, 9, 2, 2, 2, 2, 3, 0, 16, 3, 3, 9, 18, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 3, 8, 3, 1, 3, 2, 9, 1, 5, 1, 2, 4, 3, 9, 2, 0, 17, 1, 2, 5, 4, 2, 2, 3, 4, 1, 2, 0, 2, 1, 4, 1, 4, 2, 4, 11, 5, 4, 4, 2, 2, 3, 3, 0, 7, 0, 15, 9, 18, 2, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 4, 7, 2, 2, 2, 3, 8, 1, 2, 1, 7, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 3, 8, 2, 2, 2, 3, 8, 1, 8, 0, 2, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 15, 4, 7, 2, 2, 2, 3, 10, 0, 9, 3, 3, 9, 11, 5, 3, 1, 2, 17, 4, 23, 2, 8, 2, 0, 3, 6, 4, 0, 5, 5, 2, 0, 2, 7, 19, 1, 14, 57, 6, 14, 2, 9, 40, 1, 2, 0, 3, 1, 2, 0, 3, 0, 7, 3, 2, 6, 2, 2, 2, 0, 2, 0, 3, 1, 2, 12, 2, 2, 3, 4, 2, 0, 2, 5, 3, 9, 3, 1, 35, 0, 24, 1, 7, 9, 12, 0, 2, 0, 2, 0, 5, 9, 2, 35, 5, 19, 2, 5, 5, 7, 2, 35, 10, 0, 58, 73, 7, 77, 3, 37, 11, 42, 2, 0, 4, 328, 2, 3, 3, 6, 2, 0, 2, 3, 3, 40, 2, 3, 3, 32, 2, 3, 3, 6, 2, 0, 2, 3, 3, 14, 2, 56, 2, 3, 3, 66, 5, 0, 33, 15, 17, 84, 13, 619, 3, 16, 2, 25, 6, 74, 22, 12, 2, 6, 12, 20, 12, 19, 13, 12, 2, 2, 2, 1, 13, 51, 3, 29, 4, 0, 5, 1, 3, 9, 34, 2, 3, 9, 7, 87, 9, 42, 6, 69, 11, 28, 4, 11, 5, 11, 11, 39, 3, 4, 12, 43, 5, 25, 7, 10, 38, 27, 5, 62, 2, 28, 3, 10, 7, 9, 14, 0, 89, 75, 5, 9, 18, 8, 13, 42, 4, 11, 71, 55, 9, 9, 4, 48, 83, 2, 2, 30, 14, 230, 23, 280, 3, 5, 3, 37, 3, 5, 3, 7, 2, 0, 2, 0, 2, 0, 2, 30, 3, 52, 2, 6, 2, 0, 4, 2, 2, 6, 4, 3, 3, 5, 5, 12, 6, 2, 2, 6, 67, 1, 20, 0, 29, 0, 14, 0, 17, 4, 60, 12, 5, 0, 4, 11, 18, 0, 5, 0, 3, 9, 2, 0, 4, 4, 7, 0, 2, 0, 2, 0, 2, 3, 2, 10, 3, 3, 6, 4, 5, 0, 53, 1, 2684, 46, 2, 46, 2, 132, 7, 6, 15, 37, 11, 53, 10, 0, 17, 22, 10, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 31, 48, 0, 470, 1, 36, 5, 2, 4, 6, 1, 5, 85, 3, 1, 3, 2, 2, 89, 2, 3, 6, 40, 4, 93, 18, 23, 57, 15, 513, 6581, 75, 20939, 53, 1164, 68, 45, 3, 268, 4, 27, 21, 31, 3, 13, 13, 1, 2, 24, 9, 69, 11, 1, 38, 8, 3, 102, 3, 1, 111, 44, 25, 51, 13, 68, 12, 9, 7, 23, 4, 0, 5, 45, 3, 35, 13, 28, 4, 64, 15, 10, 39, 54, 10, 13, 3, 9, 7, 22, 4, 1, 5, 66, 25, 2, 227, 42, 2, 1, 3, 9, 7, 11171, 13, 22, 5, 48, 8453, 301, 3, 61, 3, 105, 39, 6, 13, 4, 6, 11, 2, 12, 2, 4, 2, 0, 2, 1, 2, 1, 2, 107, 34, 362, 19, 63, 3, 53, 41, 11, 5, 15, 17, 6, 13, 1, 25, 2, 33, 4, 2, 134, 20, 9, 8, 25, 5, 0, 2, 25, 12, 88, 4, 5, 3, 5, 3, 5, 3, 2];
        var code = 0;
        var str = [];
        for (var i6 = 0; i6 < wordChars.length; i6 += 2) {
          str.push(code += wordChars[i6]);
          if (wordChars[i6 + 1])
            str.push(45, code += wordChars[i6 + 1]);
        }
        exports2.wordChars = String.fromCharCode.apply(null, str);
      });
      ace.define("ace/mode/text", ["require", "exports", "module", "ace/config", "ace/tokenizer", "ace/mode/text_highlight_rules", "ace/mode/behaviour/cstyle", "ace/unicode", "ace/lib/lang", "ace/token_iterator", "ace/range"], function(require3, exports2, module2) {
        "use strict";
        var config2 = require3("../config");
        var Tokenizer = require3("../tokenizer").Tokenizer;
        var TextHighlightRules = require3("./text_highlight_rules").TextHighlightRules;
        var CstyleBehaviour = require3("./behaviour/cstyle").CstyleBehaviour;
        var unicode = require3("../unicode");
        var lang = require3("../lib/lang");
        var TokenIterator = require3("../token_iterator").TokenIterator;
        var Range = require3("../range").Range;
        var Mode = function() {
          this.HighlightRules = TextHighlightRules;
        };
        (function() {
          this.$defaultBehaviour = new CstyleBehaviour();
          this.tokenRe = new RegExp("^[" + unicode.wordChars + "\\$_]+", "g");
          this.nonTokenRe = new RegExp("^(?:[^" + unicode.wordChars + "\\$_]|\\s])+", "g");
          this.getTokenizer = function() {
            if (!this.$tokenizer) {
              this.$highlightRules = this.$highlightRules || new this.HighlightRules(this.$highlightRuleConfig);
              this.$tokenizer = new Tokenizer(this.$highlightRules.getRules());
            }
            return this.$tokenizer;
          };
          this.lineCommentStart = "";
          this.blockComment = "";
          this.toggleCommentLines = function(state, session, startRow, endRow) {
            var doc = session.doc;
            var ignoreBlankLines = true;
            var shouldRemove = true;
            var minIndent = Infinity;
            var tabSize = session.getTabSize();
            var insertAtTabStop = false;
            if (!this.lineCommentStart) {
              if (!this.blockComment)
                return false;
              var lineCommentStart = this.blockComment.start;
              var lineCommentEnd = this.blockComment.end;
              var regexpStart = new RegExp("^(\\s*)(?:" + lang.escapeRegExp(lineCommentStart) + ")");
              var regexpEnd = new RegExp("(?:" + lang.escapeRegExp(lineCommentEnd) + ")\\s*$");
              var comment = function(line, i6) {
                if (testRemove(line, i6))
                  return;
                if (!ignoreBlankLines || /\S/.test(line)) {
                  doc.insertInLine({ row: i6, column: line.length }, lineCommentEnd);
                  doc.insertInLine({ row: i6, column: minIndent }, lineCommentStart);
                }
              };
              var uncomment = function(line, i6) {
                var m2;
                if (m2 = line.match(regexpEnd))
                  doc.removeInLine(i6, line.length - m2[0].length, line.length);
                if (m2 = line.match(regexpStart))
                  doc.removeInLine(i6, m2[1].length, m2[0].length);
              };
              var testRemove = function(line, row) {
                if (regexpStart.test(line))
                  return true;
                var tokens = session.getTokens(row);
                for (var i6 = 0; i6 < tokens.length; i6++) {
                  if (tokens[i6].type === "comment")
                    return true;
                }
              };
            } else {
              if (Array.isArray(this.lineCommentStart)) {
                var regexpStart = this.lineCommentStart.map(lang.escapeRegExp).join("|");
                var lineCommentStart = this.lineCommentStart[0];
              } else {
                var regexpStart = lang.escapeRegExp(this.lineCommentStart);
                var lineCommentStart = this.lineCommentStart;
              }
              regexpStart = new RegExp("^(\\s*)(?:" + regexpStart + ") ?");
              insertAtTabStop = session.getUseSoftTabs();
              var uncomment = function(line, i6) {
                var m2 = line.match(regexpStart);
                if (!m2)
                  return;
                var start = m2[1].length, end = m2[0].length;
                if (!shouldInsertSpace(line, start, end) && m2[0][end - 1] == " ")
                  end--;
                doc.removeInLine(i6, start, end);
              };
              var commentWithSpace = lineCommentStart + " ";
              var comment = function(line, i6) {
                if (!ignoreBlankLines || /\S/.test(line)) {
                  if (shouldInsertSpace(line, minIndent, minIndent))
                    doc.insertInLine({ row: i6, column: minIndent }, commentWithSpace);
                  else
                    doc.insertInLine({ row: i6, column: minIndent }, lineCommentStart);
                }
              };
              var testRemove = function(line, i6) {
                return regexpStart.test(line);
              };
              var shouldInsertSpace = function(line, before, after) {
                var spaces = 0;
                while (before-- && line.charAt(before) == " ")
                  spaces++;
                if (spaces % tabSize != 0)
                  return false;
                var spaces = 0;
                while (line.charAt(after++) == " ")
                  spaces++;
                if (tabSize > 2)
                  return spaces % tabSize != tabSize - 1;
                else
                  return spaces % tabSize == 0;
              };
            }
            function iter(fun) {
              for (var i6 = startRow; i6 <= endRow; i6++)
                fun(doc.getLine(i6), i6);
            }
            var minEmptyLength = Infinity;
            iter(function(line, i6) {
              var indent = line.search(/\S/);
              if (indent !== -1) {
                if (indent < minIndent)
                  minIndent = indent;
                if (shouldRemove && !testRemove(line, i6))
                  shouldRemove = false;
              } else if (minEmptyLength > line.length) {
                minEmptyLength = line.length;
              }
            });
            if (minIndent == Infinity) {
              minIndent = minEmptyLength;
              ignoreBlankLines = false;
              shouldRemove = false;
            }
            if (insertAtTabStop && minIndent % tabSize != 0)
              minIndent = Math.floor(minIndent / tabSize) * tabSize;
            iter(shouldRemove ? uncomment : comment);
          };
          this.toggleBlockComment = function(state, session, range, cursor) {
            var comment = this.blockComment;
            if (!comment)
              return;
            if (!comment.start && comment[0])
              comment = comment[0];
            var iterator = new TokenIterator(session, cursor.row, cursor.column);
            var token = iterator.getCurrentToken();
            var sel = session.selection;
            var initialRange = session.selection.toOrientedRange();
            var startRow, colDiff;
            if (token && /comment/.test(token.type)) {
              var startRange, endRange;
              while (token && /comment/.test(token.type)) {
                var i6 = token.value.indexOf(comment.start);
                if (i6 != -1) {
                  var row = iterator.getCurrentTokenRow();
                  var column = iterator.getCurrentTokenColumn() + i6;
                  startRange = new Range(row, column, row, column + comment.start.length);
                  break;
                }
                token = iterator.stepBackward();
              }
              var iterator = new TokenIterator(session, cursor.row, cursor.column);
              var token = iterator.getCurrentToken();
              while (token && /comment/.test(token.type)) {
                var i6 = token.value.indexOf(comment.end);
                if (i6 != -1) {
                  var row = iterator.getCurrentTokenRow();
                  var column = iterator.getCurrentTokenColumn() + i6;
                  endRange = new Range(row, column, row, column + comment.end.length);
                  break;
                }
                token = iterator.stepForward();
              }
              if (endRange)
                session.remove(endRange);
              if (startRange) {
                session.remove(startRange);
                startRow = startRange.start.row;
                colDiff = -comment.start.length;
              }
            } else {
              colDiff = comment.start.length;
              startRow = range.start.row;
              session.insert(range.end, comment.end);
              session.insert(range.start, comment.start);
            }
            if (initialRange.start.row == startRow)
              initialRange.start.column += colDiff;
            if (initialRange.end.row == startRow)
              initialRange.end.column += colDiff;
            session.selection.fromOrientedRange(initialRange);
          };
          this.getNextLineIndent = function(state, line, tab) {
            return this.$getIndent(line);
          };
          this.checkOutdent = function(state, line, input) {
            return false;
          };
          this.autoOutdent = function(state, doc, row) {
          };
          this.$getIndent = function(line) {
            return line.match(/^\s*/)[0];
          };
          this.createWorker = function(session) {
            return null;
          };
          this.createModeDelegates = function(mapping) {
            this.$embeds = [];
            this.$modes = {};
            for (var i6 in mapping) {
              if (mapping[i6]) {
                var Mode2 = mapping[i6];
                var id = Mode2.prototype.$id;
                var mode = config2.$modes[id];
                if (!mode)
                  config2.$modes[id] = mode = new Mode2();
                if (!config2.$modes[i6])
                  config2.$modes[i6] = mode;
                this.$embeds.push(i6);
                this.$modes[i6] = mode;
              }
            }
            var delegations = [
              "toggleBlockComment",
              "toggleCommentLines",
              "getNextLineIndent",
              "checkOutdent",
              "autoOutdent",
              "transformAction",
              "getCompletions"
            ];
            for (var i6 = 0; i6 < delegations.length; i6++) {
              (function(scope) {
                var functionName = delegations[i6];
                var defaultHandler = scope[functionName];
                scope[delegations[i6]] = function() {
                  return this.$delegator(functionName, arguments, defaultHandler);
                };
              })(this);
            }
          };
          this.$delegator = function(method, args, defaultHandler) {
            var state = args[0] || "start";
            if (typeof state != "string") {
              if (Array.isArray(state[2])) {
                var language = state[2][state[2].length - 1];
                var mode = this.$modes[language];
                if (mode)
                  return mode[method].apply(mode, [state[1]].concat([].slice.call(args, 1)));
              }
              state = state[0] || "start";
            }
            for (var i6 = 0; i6 < this.$embeds.length; i6++) {
              if (!this.$modes[this.$embeds[i6]])
                continue;
              var split = state.split(this.$embeds[i6]);
              if (!split[0] && split[1]) {
                args[0] = split[1];
                var mode = this.$modes[this.$embeds[i6]];
                return mode[method].apply(mode, args);
              }
            }
            var ret = defaultHandler.apply(this, args);
            return defaultHandler ? ret : void 0;
          };
          this.transformAction = function(state, action, editor, session, param) {
            if (this.$behaviour) {
              var behaviours = this.$behaviour.getBehaviours();
              for (var key in behaviours) {
                if (behaviours[key][action]) {
                  var ret = behaviours[key][action].apply(this, arguments);
                  if (ret) {
                    return ret;
                  }
                }
              }
            }
          };
          this.getKeywords = function(append) {
            if (!this.completionKeywords) {
              var rules = this.$tokenizer.rules;
              var completionKeywords = [];
              for (var rule in rules) {
                var ruleItr = rules[rule];
                for (var r5 = 0, l7 = ruleItr.length; r5 < l7; r5++) {
                  if (typeof ruleItr[r5].token === "string") {
                    if (/keyword|support|storage/.test(ruleItr[r5].token))
                      completionKeywords.push(ruleItr[r5].regex);
                  } else if (typeof ruleItr[r5].token === "object") {
                    for (var a3 = 0, aLength = ruleItr[r5].token.length; a3 < aLength; a3++) {
                      if (/keyword|support|storage/.test(ruleItr[r5].token[a3])) {
                        var rule = ruleItr[r5].regex.match(/\(.+?\)/g)[a3];
                        completionKeywords.push(rule.substr(1, rule.length - 2));
                      }
                    }
                  }
                }
              }
              this.completionKeywords = completionKeywords;
            }
            if (!append)
              return this.$keywordList;
            return completionKeywords.concat(this.$keywordList || []);
          };
          this.$createKeywordList = function() {
            if (!this.$highlightRules)
              this.getTokenizer();
            return this.$keywordList = this.$highlightRules.$keywordList || [];
          };
          this.getCompletions = function(state, session, pos, prefix) {
            var keywords = this.$keywordList || this.$createKeywordList();
            return keywords.map(function(word) {
              return {
                name: word,
                value: word,
                score: 0,
                meta: "keyword"
              };
            });
          };
          this.$id = "ace/mode/text";
        }).call(Mode.prototype);
        exports2.Mode = Mode;
      });
      ace.define("ace/apply_delta", ["require", "exports", "module"], function(require3, exports2, module2) {
        "use strict";
        function throwDeltaError(delta, errorText) {
          console.log("Invalid Delta:", delta);
          throw "Invalid Delta: " + errorText;
        }
        function positionInDocument(docLines, position) {
          return position.row >= 0 && position.row < docLines.length && position.column >= 0 && position.column <= docLines[position.row].length;
        }
        function validateDelta(docLines, delta) {
          if (delta.action != "insert" && delta.action != "remove")
            throwDeltaError(delta, "delta.action must be 'insert' or 'remove'");
          if (!(delta.lines instanceof Array))
            throwDeltaError(delta, "delta.lines must be an Array");
          if (!delta.start || !delta.end)
            throwDeltaError(delta, "delta.start/end must be an present");
          var start = delta.start;
          if (!positionInDocument(docLines, delta.start))
            throwDeltaError(delta, "delta.start must be contained in document");
          var end = delta.end;
          if (delta.action == "remove" && !positionInDocument(docLines, end))
            throwDeltaError(delta, "delta.end must contained in document for 'remove' actions");
          var numRangeRows = end.row - start.row;
          var numRangeLastLineChars = end.column - (numRangeRows == 0 ? start.column : 0);
          if (numRangeRows != delta.lines.length - 1 || delta.lines[numRangeRows].length != numRangeLastLineChars)
            throwDeltaError(delta, "delta.range must match delta lines");
        }
        exports2.applyDelta = function(docLines, delta, doNotValidate) {
          var row = delta.start.row;
          var startColumn = delta.start.column;
          var line = docLines[row] || "";
          switch (delta.action) {
            case "insert":
              var lines = delta.lines;
              if (lines.length === 1) {
                docLines[row] = line.substring(0, startColumn) + delta.lines[0] + line.substring(startColumn);
              } else {
                var args = [row, 1].concat(delta.lines);
                docLines.splice.apply(docLines, args);
                docLines[row] = line.substring(0, startColumn) + docLines[row];
                docLines[row + delta.lines.length - 1] += line.substring(startColumn);
              }
              break;
            case "remove":
              var endColumn = delta.end.column;
              var endRow = delta.end.row;
              if (row === endRow) {
                docLines[row] = line.substring(0, startColumn) + line.substring(endColumn);
              } else {
                docLines.splice(
                  row,
                  endRow - row + 1,
                  line.substring(0, startColumn) + docLines[endRow].substring(endColumn)
                );
              }
              break;
          }
        };
      });
      ace.define("ace/anchor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(require3, exports2, module2) {
        "use strict";
        var oop = require3("./lib/oop");
        var EventEmitter = require3("./lib/event_emitter").EventEmitter;
        var Anchor = exports2.Anchor = function(doc, row, column) {
          this.$onChange = this.onChange.bind(this);
          this.attach(doc);
          if (typeof column == "undefined")
            this.setPosition(row.row, row.column);
          else
            this.setPosition(row, column);
        };
        (function() {
          oop.implement(this, EventEmitter);
          this.getPosition = function() {
            return this.$clipPositionToDocument(this.row, this.column);
          };
          this.getDocument = function() {
            return this.document;
          };
          this.$insertRight = false;
          this.onChange = function(delta) {
            if (delta.start.row == delta.end.row && delta.start.row != this.row)
              return;
            if (delta.start.row > this.row)
              return;
            var point = $getTransformedPoint(delta, { row: this.row, column: this.column }, this.$insertRight);
            this.setPosition(point.row, point.column, true);
          };
          function $pointsInOrder(point1, point2, equalPointsInOrder) {
            var bColIsAfter = equalPointsInOrder ? point1.column <= point2.column : point1.column < point2.column;
            return point1.row < point2.row || point1.row == point2.row && bColIsAfter;
          }
          function $getTransformedPoint(delta, point, moveIfEqual) {
            var deltaIsInsert = delta.action == "insert";
            var deltaRowShift = (deltaIsInsert ? 1 : -1) * (delta.end.row - delta.start.row);
            var deltaColShift = (deltaIsInsert ? 1 : -1) * (delta.end.column - delta.start.column);
            var deltaStart = delta.start;
            var deltaEnd = deltaIsInsert ? deltaStart : delta.end;
            if ($pointsInOrder(point, deltaStart, moveIfEqual)) {
              return {
                row: point.row,
                column: point.column
              };
            }
            if ($pointsInOrder(deltaEnd, point, !moveIfEqual)) {
              return {
                row: point.row + deltaRowShift,
                column: point.column + (point.row == deltaEnd.row ? deltaColShift : 0)
              };
            }
            return {
              row: deltaStart.row,
              column: deltaStart.column
            };
          }
          this.setPosition = function(row, column, noClip) {
            var pos;
            if (noClip) {
              pos = {
                row,
                column
              };
            } else {
              pos = this.$clipPositionToDocument(row, column);
            }
            if (this.row == pos.row && this.column == pos.column)
              return;
            var old = {
              row: this.row,
              column: this.column
            };
            this.row = pos.row;
            this.column = pos.column;
            this._signal("change", {
              old,
              value: pos
            });
          };
          this.detach = function() {
            this.document.off("change", this.$onChange);
          };
          this.attach = function(doc) {
            this.document = doc || this.document;
            this.document.on("change", this.$onChange);
          };
          this.$clipPositionToDocument = function(row, column) {
            var pos = {};
            if (row >= this.document.getLength()) {
              pos.row = Math.max(0, this.document.getLength() - 1);
              pos.column = this.document.getLine(pos.row).length;
            } else if (row < 0) {
              pos.row = 0;
              pos.column = 0;
            } else {
              pos.row = row;
              pos.column = Math.min(this.document.getLine(pos.row).length, Math.max(0, column));
            }
            if (column < 0)
              pos.column = 0;
            return pos;
          };
        }).call(Anchor.prototype);
      });
      ace.define("ace/document", ["require", "exports", "module", "ace/lib/oop", "ace/apply_delta", "ace/lib/event_emitter", "ace/range", "ace/anchor"], function(require3, exports2, module2) {
        "use strict";
        var oop = require3("./lib/oop");
        var applyDelta = require3("./apply_delta").applyDelta;
        var EventEmitter = require3("./lib/event_emitter").EventEmitter;
        var Range = require3("./range").Range;
        var Anchor = require3("./anchor").Anchor;
        var Document2 = function(textOrLines) {
          this.$lines = [""];
          if (textOrLines.length === 0) {
            this.$lines = [""];
          } else if (Array.isArray(textOrLines)) {
            this.insertMergedLines({ row: 0, column: 0 }, textOrLines);
          } else {
            this.insert({ row: 0, column: 0 }, textOrLines);
          }
        };
        (function() {
          oop.implement(this, EventEmitter);
          this.setValue = function(text) {
            var len = this.getLength() - 1;
            this.remove(new Range(0, 0, len, this.getLine(len).length));
            this.insert({ row: 0, column: 0 }, text);
          };
          this.getValue = function() {
            return this.getAllLines().join(this.getNewLineCharacter());
          };
          this.createAnchor = function(row, column) {
            return new Anchor(this, row, column);
          };
          if ("aaa".split(/a/).length === 0) {
            this.$split = function(text) {
              return text.replace(/\r\n|\r/g, "\n").split("\n");
            };
          } else {
            this.$split = function(text) {
              return text.split(/\r\n|\r|\n/);
            };
          }
          this.$detectNewLine = function(text) {
            var match = text.match(/^.*?(\r\n|\r|\n)/m);
            this.$autoNewLine = match ? match[1] : "\n";
            this._signal("changeNewLineMode");
          };
          this.getNewLineCharacter = function() {
            switch (this.$newLineMode) {
              case "windows":
                return "\r\n";
              case "unix":
                return "\n";
              default:
                return this.$autoNewLine || "\n";
            }
          };
          this.$autoNewLine = "";
          this.$newLineMode = "auto";
          this.setNewLineMode = function(newLineMode) {
            if (this.$newLineMode === newLineMode)
              return;
            this.$newLineMode = newLineMode;
            this._signal("changeNewLineMode");
          };
          this.getNewLineMode = function() {
            return this.$newLineMode;
          };
          this.isNewLine = function(text) {
            return text == "\r\n" || text == "\r" || text == "\n";
          };
          this.getLine = function(row) {
            return this.$lines[row] || "";
          };
          this.getLines = function(firstRow, lastRow) {
            return this.$lines.slice(firstRow, lastRow + 1);
          };
          this.getAllLines = function() {
            return this.getLines(0, this.getLength());
          };
          this.getLength = function() {
            return this.$lines.length;
          };
          this.getTextRange = function(range) {
            return this.getLinesForRange(range).join(this.getNewLineCharacter());
          };
          this.getLinesForRange = function(range) {
            var lines;
            if (range.start.row === range.end.row) {
              lines = [this.getLine(range.start.row).substring(range.start.column, range.end.column)];
            } else {
              lines = this.getLines(range.start.row, range.end.row);
              lines[0] = (lines[0] || "").substring(range.start.column);
              var l7 = lines.length - 1;
              if (range.end.row - range.start.row == l7)
                lines[l7] = lines[l7].substring(0, range.end.column);
            }
            return lines;
          };
          this.insertLines = function(row, lines) {
            console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead.");
            return this.insertFullLines(row, lines);
          };
          this.removeLines = function(firstRow, lastRow) {
            console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead.");
            return this.removeFullLines(firstRow, lastRow);
          };
          this.insertNewLine = function(position) {
            console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead.");
            return this.insertMergedLines(position, ["", ""]);
          };
          this.insert = function(position, text) {
            if (this.getLength() <= 1)
              this.$detectNewLine(text);
            return this.insertMergedLines(position, this.$split(text));
          };
          this.insertInLine = function(position, text) {
            var start = this.clippedPos(position.row, position.column);
            var end = this.pos(position.row, position.column + text.length);
            this.applyDelta({
              start,
              end,
              action: "insert",
              lines: [text]
            }, true);
            return this.clonePos(end);
          };
          this.clippedPos = function(row, column) {
            var length = this.getLength();
            if (row === void 0) {
              row = length;
            } else if (row < 0) {
              row = 0;
            } else if (row >= length) {
              row = length - 1;
              column = void 0;
            }
            var line = this.getLine(row);
            if (column == void 0)
              column = line.length;
            column = Math.min(Math.max(column, 0), line.length);
            return { row, column };
          };
          this.clonePos = function(pos) {
            return { row: pos.row, column: pos.column };
          };
          this.pos = function(row, column) {
            return { row, column };
          };
          this.$clipPosition = function(position) {
            var length = this.getLength();
            if (position.row >= length) {
              position.row = Math.max(0, length - 1);
              position.column = this.getLine(length - 1).length;
            } else {
              position.row = Math.max(0, position.row);
              position.column = Math.min(Math.max(position.column, 0), this.getLine(position.row).length);
            }
            return position;
          };
          this.insertFullLines = function(row, lines) {
            row = Math.min(Math.max(row, 0), this.getLength());
            var column = 0;
            if (row < this.getLength()) {
              lines = lines.concat([""]);
              column = 0;
            } else {
              lines = [""].concat(lines);
              row--;
              column = this.$lines[row].length;
            }
            this.insertMergedLines({ row, column }, lines);
          };
          this.insertMergedLines = function(position, lines) {
            var start = this.clippedPos(position.row, position.column);
            var end = {
              row: start.row + lines.length - 1,
              column: (lines.length == 1 ? start.column : 0) + lines[lines.length - 1].length
            };
            this.applyDelta({
              start,
              end,
              action: "insert",
              lines
            });
            return this.clonePos(end);
          };
          this.remove = function(range) {
            var start = this.clippedPos(range.start.row, range.start.column);
            var end = this.clippedPos(range.end.row, range.end.column);
            this.applyDelta({
              start,
              end,
              action: "remove",
              lines: this.getLinesForRange({ start, end })
            });
            return this.clonePos(start);
          };
          this.removeInLine = function(row, startColumn, endColumn) {
            var start = this.clippedPos(row, startColumn);
            var end = this.clippedPos(row, endColumn);
            this.applyDelta({
              start,
              end,
              action: "remove",
              lines: this.getLinesForRange({ start, end })
            }, true);
            return this.clonePos(start);
          };
          this.removeFullLines = function(firstRow, lastRow) {
            firstRow = Math.min(Math.max(0, firstRow), this.getLength() - 1);
            lastRow = Math.min(Math.max(0, lastRow), this.getLength() - 1);
            var deleteFirstNewLine = lastRow == this.getLength() - 1 && firstRow > 0;
            var deleteLastNewLine = lastRow < this.getLength() - 1;
            var startRow = deleteFirstNewLine ? firstRow - 1 : firstRow;
            var startCol = deleteFirstNewLine ? this.getLine(startRow).length : 0;
            var endRow = deleteLastNewLine ? lastRow + 1 : lastRow;
            var endCol = deleteLastNewLine ? 0 : this.getLine(endRow).length;
            var range = new Range(startRow, startCol, endRow, endCol);
            var deletedLines = this.$lines.slice(firstRow, lastRow + 1);
            this.applyDelta({
              start: range.start,
              end: range.end,
              action: "remove",
              lines: this.getLinesForRange(range)
            });
            return deletedLines;
          };
          this.removeNewLine = function(row) {
            if (row < this.getLength() - 1 && row >= 0) {
              this.applyDelta({
                start: this.pos(row, this.getLine(row).length),
                end: this.pos(row + 1, 0),
                action: "remove",
                lines: ["", ""]
              });
            }
          };
          this.replace = function(range, text) {
            if (!(range instanceof Range))
              range = Range.fromPoints(range.start, range.end);
            if (text.length === 0 && range.isEmpty())
              return range.start;
            if (text == this.getTextRange(range))
              return range.end;
            this.remove(range);
            var end;
            if (text) {
              end = this.insert(range.start, text);
            } else {
              end = range.start;
            }
            return end;
          };
          this.applyDeltas = function(deltas) {
            for (var i6 = 0; i6 < deltas.length; i6++) {
              this.applyDelta(deltas[i6]);
            }
          };
          this.revertDeltas = function(deltas) {
            for (var i6 = deltas.length - 1; i6 >= 0; i6--) {
              this.revertDelta(deltas[i6]);
            }
          };
          this.applyDelta = function(delta, doNotValidate) {
            var isInsert = delta.action == "insert";
            if (isInsert ? delta.lines.length <= 1 && !delta.lines[0] : !Range.comparePoints(delta.start, delta.end)) {
              return;
            }
            if (isInsert && delta.lines.length > 2e4) {
              this.$splitAndapplyLargeDelta(delta, 2e4);
            } else {
              applyDelta(this.$lines, delta, doNotValidate);
              this._signal("change", delta);
            }
          };
          this.$safeApplyDelta = function(delta) {
            var docLength = this.$lines.length;
            if (delta.action == "remove" && delta.start.row < docLength && delta.end.row < docLength || delta.action == "insert" && delta.start.row <= docLength) {
              this.applyDelta(delta);
            }
          };
          this.$splitAndapplyLargeDelta = function(delta, MAX) {
            var lines = delta.lines;
            var l7 = lines.length - MAX + 1;
            var row = delta.start.row;
            var column = delta.start.column;
            for (var from = 0, to = 0; from < l7; from = to) {
              to += MAX - 1;
              var chunk = lines.slice(from, to);
              chunk.push("");
              this.applyDelta({
                start: this.pos(row + from, column),
                end: this.pos(row + to, column = 0),
                action: delta.action,
                lines: chunk
              }, true);
            }
            delta.lines = lines.slice(from);
            delta.start.row = row + from;
            delta.start.column = column;
            this.applyDelta(delta, true);
          };
          this.revertDelta = function(delta) {
            this.$safeApplyDelta({
              start: this.clonePos(delta.start),
              end: this.clonePos(delta.end),
              action: delta.action == "insert" ? "remove" : "insert",
              lines: delta.lines.slice()
            });
          };
          this.indexToPosition = function(index, startRow) {
            var lines = this.$lines || this.getAllLines();
            var newlineLength = this.getNewLineCharacter().length;
            for (var i6 = startRow || 0, l7 = lines.length; i6 < l7; i6++) {
              index -= lines[i6].length + newlineLength;
              if (index < 0)
                return { row: i6, column: index + lines[i6].length + newlineLength };
            }
            return { row: l7 - 1, column: index + lines[l7 - 1].length + newlineLength };
          };
          this.positionToIndex = function(pos, startRow) {
            var lines = this.$lines || this.getAllLines();
            var newlineLength = this.getNewLineCharacter().length;
            var index = 0;
            var row = Math.min(pos.row, lines.length);
            for (var i6 = startRow || 0; i6 < row; ++i6)
              index += lines[i6].length + newlineLength;
            return index + pos.column;
          };
        }).call(Document2.prototype);
        exports2.Document = Document2;
      });
      ace.define("ace/background_tokenizer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(require3, exports2, module2) {
        "use strict";
        var oop = require3("./lib/oop");
        var EventEmitter = require3("./lib/event_emitter").EventEmitter;
        var BackgroundTokenizer = function(tokenizer, editor) {
          this.running = false;
          this.lines = [];
          this.states = [];
          this.currentLine = 0;
          this.tokenizer = tokenizer;
          var self = this;
          this.$worker = function() {
            if (!self.running) {
              return;
            }
            var workerStart = new Date();
            var currentLine = self.currentLine;
            var endLine = -1;
            var doc = self.doc;
            var startLine = currentLine;
            while (self.lines[currentLine])
              currentLine++;
            var len = doc.getLength();
            var processedLines = 0;
            self.running = false;
            while (currentLine < len) {
              self.$tokenizeRow(currentLine);
              endLine = currentLine;
              do {
                currentLine++;
              } while (self.lines[currentLine]);
              processedLines++;
              if (processedLines % 5 === 0 && new Date() - workerStart > 20) {
                self.running = setTimeout(self.$worker, 20);
                break;
              }
            }
            self.currentLine = currentLine;
            if (endLine == -1)
              endLine = currentLine;
            if (startLine <= endLine)
              self.fireUpdateEvent(startLine, endLine);
          };
        };
        (function() {
          oop.implement(this, EventEmitter);
          this.setTokenizer = function(tokenizer) {
            this.tokenizer = tokenizer;
            this.lines = [];
            this.states = [];
            this.start(0);
          };
          this.setDocument = function(doc) {
            this.doc = doc;
            this.lines = [];
            this.states = [];
            this.stop();
          };
          this.fireUpdateEvent = function(firstRow, lastRow) {
            var data = {
              first: firstRow,
              last: lastRow
            };
            this._signal("update", { data });
          };
          this.start = function(startRow) {
            this.currentLine = Math.min(startRow || 0, this.currentLine, this.doc.getLength());
            this.lines.splice(this.currentLine, this.lines.length);
            this.states.splice(this.currentLine, this.states.length);
            this.stop();
            this.running = setTimeout(this.$worker, 700);
          };
          this.scheduleStart = function() {
            if (!this.running)
              this.running = setTimeout(this.$worker, 700);
          };
          this.$updateOnChange = function(delta) {
            var startRow = delta.start.row;
            var len = delta.end.row - startRow;
            if (len === 0) {
              this.lines[startRow] = null;
            } else if (delta.action == "remove") {
              this.lines.splice(startRow, len + 1, null);
              this.states.splice(startRow, len + 1, null);
            } else {
              var args = Array(len + 1);
              args.unshift(startRow, 1);
              this.lines.splice.apply(this.lines, args);
              this.states.splice.apply(this.states, args);
            }
            this.currentLine = Math.min(startRow, this.currentLine, this.doc.getLength());
            this.stop();
          };
          this.stop = function() {
            if (this.running)
              clearTimeout(this.running);
            this.running = false;
          };
          this.getTokens = function(row) {
            return this.lines[row] || this.$tokenizeRow(row);
          };
          this.getState = function(row) {
            if (this.currentLine == row)
              this.$tokenizeRow(row);
            return this.states[row] || "start";
          };
          this.$tokenizeRow = function(row) {
            var line = this.doc.getLine(row);
            var state = this.states[row - 1];
            var data = this.tokenizer.getLineTokens(line, state, row);
            if (this.states[row] + "" !== data.state + "") {
              this.states[row] = data.state;
              this.lines[row + 1] = null;
              if (this.currentLine > row + 1)
                this.currentLine = row + 1;
            } else if (this.currentLine == row) {
              this.currentLine = row + 1;
            }
            return this.lines[row] = data.tokens;
          };
          this.cleanup = function() {
            this.running = false;
            this.lines = [];
            this.states = [];
            this.currentLine = 0;
            this.removeAllListeners();
          };
        }).call(BackgroundTokenizer.prototype);
        exports2.BackgroundTokenizer = BackgroundTokenizer;
      });
      ace.define("ace/search_highlight", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function(require3, exports2, module2) {
        "use strict";
        var lang = require3("./lib/lang");
        var oop = require3("./lib/oop");
        var Range = require3("./range").Range;
        var SearchHighlight = function(regExp, clazz, type) {
          this.setRegexp(regExp);
          this.clazz = clazz;
          this.type = type || "text";
        };
        (function() {
          this.MAX_RANGES = 500;
          this.setRegexp = function(regExp) {
            if (this.regExp + "" == regExp + "")
              return;
            this.regExp = regExp;
            this.cache = [];
          };
          this.update = function(html, markerLayer, session, config2) {
            if (!this.regExp)
              return;
            var start = config2.firstRow, end = config2.lastRow;
            var renderedMarkerRanges = {};
            for (var i6 = start; i6 <= end; i6++) {
              var ranges = this.cache[i6];
              if (ranges == null) {
                ranges = lang.getMatchOffsets(session.getLine(i6), this.regExp);
                if (ranges.length > this.MAX_RANGES)
                  ranges = ranges.slice(0, this.MAX_RANGES);
                ranges = ranges.map(function(match) {
                  return new Range(i6, match.offset, i6, match.offset + match.length);
                });
                this.cache[i6] = ranges.length ? ranges : "";
              }
              for (var j = ranges.length; j--; ) {
                var rangeToAddMarkerTo = ranges[j].toScreenRange(session);
                var rangeAsString = rangeToAddMarkerTo.toString();
                if (renderedMarkerRanges[rangeAsString])
                  continue;
                renderedMarkerRanges[rangeAsString] = true;
                markerLayer.drawSingleLineMarker(
                  html,
                  rangeToAddMarkerTo,
                  this.clazz,
                  config2
                );
              }
            }
          };
        }).call(SearchHighlight.prototype);
        exports2.SearchHighlight = SearchHighlight;
      });
      ace.define("ace/edit_session/fold_line", ["require", "exports", "module", "ace/range"], function(require3, exports2, module2) {
        "use strict";
        var Range = require3("../range").Range;
        function FoldLine(foldData, folds) {
          this.foldData = foldData;
          if (Array.isArray(folds)) {
            this.folds = folds;
          } else {
            folds = this.folds = [folds];
          }
          var last = folds[folds.length - 1];
          this.range = new Range(
            folds[0].start.row,
            folds[0].start.column,
            last.end.row,
            last.end.column
          );
          this.start = this.range.start;
          this.end = this.range.end;
          this.folds.forEach(function(fold) {
            fold.setFoldLine(this);
          }, this);
        }
        (function() {
          this.shiftRow = function(shift) {
            this.start.row += shift;
            this.end.row += shift;
            this.folds.forEach(function(fold) {
              fold.start.row += shift;
              fold.end.row += shift;
            });
          };
          this.addFold = function(fold) {
            if (fold.sameRow) {
              if (fold.start.row < this.startRow || fold.endRow > this.endRow) {
                throw new Error("Can't add a fold to this FoldLine as it has no connection");
              }
              this.folds.push(fold);
              this.folds.sort(function(a3, b2) {
                return -a3.range.compareEnd(b2.start.row, b2.start.column);
              });
              if (this.range.compareEnd(fold.start.row, fold.start.column) > 0) {
                this.end.row = fold.end.row;
                this.end.column = fold.end.column;
              } else if (this.range.compareStart(fold.end.row, fold.end.column) < 0) {
                this.start.row = fold.start.row;
                this.start.column = fold.start.column;
              }
            } else if (fold.start.row == this.end.row) {
              this.folds.push(fold);
              this.end.row = fold.end.row;
              this.end.column = fold.end.column;
            } else if (fold.end.row == this.start.row) {
              this.folds.unshift(fold);
              this.start.row = fold.start.row;
              this.start.column = fold.start.column;
            } else {
              throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");
            }
            fold.foldLine = this;
          };
          this.containsRow = function(row) {
            return row >= this.start.row && row <= this.end.row;
          };
          this.walk = function(callback, endRow, endColumn) {
            var lastEnd = 0, folds = this.folds, fold, cmp, stop, isNewRow = true;
            if (endRow == null) {
              endRow = this.end.row;
              endColumn = this.end.column;
            }
            for (var i6 = 0; i6 < folds.length; i6++) {
              fold = folds[i6];
              cmp = fold.range.compareStart(endRow, endColumn);
              if (cmp == -1) {
                callback(null, endRow, endColumn, lastEnd, isNewRow);
                return;
              }
              stop = callback(null, fold.start.row, fold.start.column, lastEnd, isNewRow);
              stop = !stop && callback(fold.placeholder, fold.start.row, fold.start.column, lastEnd);
              if (stop || cmp === 0) {
                return;
              }
              isNewRow = !fold.sameRow;
              lastEnd = fold.end.column;
            }
            callback(null, endRow, endColumn, lastEnd, isNewRow);
          };
          this.getNextFoldTo = function(row, column) {
            var fold, cmp;
            for (var i6 = 0; i6 < this.folds.length; i6++) {
              fold = this.folds[i6];
              cmp = fold.range.compareEnd(row, column);
              if (cmp == -1) {
                return {
                  fold,
                  kind: "after"
                };
              } else if (cmp === 0) {
                return {
                  fold,
                  kind: "inside"
                };
              }
            }
            return null;
          };
          this.addRemoveChars = function(row, column, len) {
            var ret = this.getNextFoldTo(row, column), fold, folds;
            if (ret) {
              fold = ret.fold;
              if (ret.kind == "inside" && fold.start.column != column && fold.start.row != row) {
                window.console && window.console.log(row, column, fold);
              } else if (fold.start.row == row) {
                folds = this.folds;
                var i6 = folds.indexOf(fold);
                if (i6 === 0) {
                  this.start.column += len;
                }
                for (i6; i6 < folds.length; i6++) {
                  fold = folds[i6];
                  fold.start.column += len;
                  if (!fold.sameRow) {
                    return;
                  }
                  fold.end.column += len;
                }
                this.end.column += len;
              }
            }
          };
          this.split = function(row, column) {
            var pos = this.getNextFoldTo(row, column);
            if (!pos || pos.kind == "inside")
              return null;
            var fold = pos.fold;
            var folds = this.folds;
            var foldData = this.foldData;
            var i6 = folds.indexOf(fold);
            var foldBefore = folds[i6 - 1];
            this.end.row = foldBefore.end.row;
            this.end.column = foldBefore.end.column;
            folds = folds.splice(i6, folds.length - i6);
            var newFoldLine = new FoldLine(foldData, folds);
            foldData.splice(foldData.indexOf(this) + 1, 0, newFoldLine);
            return newFoldLine;
          };
          this.merge = function(foldLineNext) {
            var folds = foldLineNext.folds;
            for (var i6 = 0; i6 < folds.length; i6++) {
              this.addFold(folds[i6]);
            }
            var foldData = this.foldData;
            foldData.splice(foldData.indexOf(foldLineNext), 1);
          };
          this.toString = function() {
            var ret = [this.range.toString() + ": ["];
            this.folds.forEach(function(fold) {
              ret.push("  " + fold.toString());
            });
            ret.push("]");
            return ret.join("\n");
          };
          this.idxToPosition = function(idx) {
            var lastFoldEndColumn = 0;
            for (var i6 = 0; i6 < this.folds.length; i6++) {
              var fold = this.folds[i6];
              idx -= fold.start.column - lastFoldEndColumn;
              if (idx < 0) {
                return {
                  row: fold.start.row,
                  column: fold.start.column + idx
                };
              }
              idx -= fold.placeholder.length;
              if (idx < 0) {
                return fold.start;
              }
              lastFoldEndColumn = fold.end.column;
            }
            return {
              row: this.end.row,
              column: this.end.column + idx
            };
          };
        }).call(FoldLine.prototype);
        exports2.FoldLine = FoldLine;
      });
      ace.define("ace/range_list", ["require", "exports", "module", "ace/range"], function(require3, exports2, module2) {
        "use strict";
        var Range = require3("./range").Range;
        var comparePoints = Range.comparePoints;
        var RangeList = function() {
          this.ranges = [];
          this.$bias = 1;
        };
        (function() {
          this.comparePoints = comparePoints;
          this.pointIndex = function(pos, excludeEdges, startIndex) {
            var list = this.ranges;
            for (var i6 = startIndex || 0; i6 < list.length; i6++) {
              var range = list[i6];
              var cmpEnd = comparePoints(pos, range.end);
              if (cmpEnd > 0)
                continue;
              var cmpStart = comparePoints(pos, range.start);
              if (cmpEnd === 0)
                return excludeEdges && cmpStart !== 0 ? -i6 - 2 : i6;
              if (cmpStart > 0 || cmpStart === 0 && !excludeEdges)
                return i6;
              return -i6 - 1;
            }
            return -i6 - 1;
          };
          this.add = function(range) {
            var excludeEdges = !range.isEmpty();
            var startIndex = this.pointIndex(range.start, excludeEdges);
            if (startIndex < 0)
              startIndex = -startIndex - 1;
            var endIndex = this.pointIndex(range.end, excludeEdges, startIndex);
            if (endIndex < 0)
              endIndex = -endIndex - 1;
            else
              endIndex++;
            return this.ranges.splice(startIndex, endIndex - startIndex, range);
          };
          this.addList = function(list) {
            var removed = [];
            for (var i6 = list.length; i6--; ) {
              removed.push.apply(removed, this.add(list[i6]));
            }
            return removed;
          };
          this.substractPoint = function(pos) {
            var i6 = this.pointIndex(pos);
            if (i6 >= 0)
              return this.ranges.splice(i6, 1);
          };
          this.merge = function() {
            var removed = [];
            var list = this.ranges;
            list = list.sort(function(a3, b2) {
              return comparePoints(a3.start, b2.start);
            });
            var next = list[0], range;
            for (var i6 = 1; i6 < list.length; i6++) {
              range = next;
              next = list[i6];
              var cmp = comparePoints(range.end, next.start);
              if (cmp < 0)
                continue;
              if (cmp == 0 && !range.isEmpty() && !next.isEmpty())
                continue;
              if (comparePoints(range.end, next.end) < 0) {
                range.end.row = next.end.row;
                range.end.column = next.end.column;
              }
              list.splice(i6, 1);
              removed.push(next);
              next = range;
              i6--;
            }
            this.ranges = list;
            return removed;
          };
          this.contains = function(row, column) {
            return this.pointIndex({ row, column }) >= 0;
          };
          this.containsPoint = function(pos) {
            return this.pointIndex(pos) >= 0;
          };
          this.rangeAtPoint = function(pos) {
            var i6 = this.pointIndex(pos);
            if (i6 >= 0)
              return this.ranges[i6];
          };
          this.clipRows = function(startRow, endRow) {
            var list = this.ranges;
            if (list[0].start.row > endRow || list[list.length - 1].start.row < startRow)
              return [];
            var startIndex = this.pointIndex({ row: startRow, column: 0 });
            if (startIndex < 0)
              startIndex = -startIndex - 1;
            var endIndex = this.pointIndex({ row: endRow, column: 0 }, startIndex);
            if (endIndex < 0)
              endIndex = -endIndex - 1;
            var clipped = [];
            for (var i6 = startIndex; i6 < endIndex; i6++) {
              clipped.push(list[i6]);
            }
            return clipped;
          };
          this.removeAll = function() {
            return this.ranges.splice(0, this.ranges.length);
          };
          this.attach = function(session) {
            if (this.session)
              this.detach();
            this.session = session;
            this.onChange = this.$onChange.bind(this);
            this.session.on("change", this.onChange);
          };
          this.detach = function() {
            if (!this.session)
              return;
            this.session.removeListener("change", this.onChange);
            this.session = null;
          };
          this.$onChange = function(delta) {
            var start = delta.start;
            var end = delta.end;
            var startRow = start.row;
            var endRow = end.row;
            var ranges = this.ranges;
            for (var i6 = 0, n9 = ranges.length; i6 < n9; i6++) {
              var r5 = ranges[i6];
              if (r5.end.row >= startRow)
                break;
            }
            if (delta.action == "insert") {
              var lineDif = endRow - startRow;
              var colDiff = -start.column + end.column;
              for (; i6 < n9; i6++) {
                var r5 = ranges[i6];
                if (r5.start.row > startRow)
                  break;
                if (r5.start.row == startRow && r5.start.column >= start.column) {
                  if (r5.start.column == start.column && this.$bias <= 0) {
                  } else {
                    r5.start.column += colDiff;
                    r5.start.row += lineDif;
                  }
                }
                if (r5.end.row == startRow && r5.end.column >= start.column) {
                  if (r5.end.column == start.column && this.$bias < 0) {
                    continue;
                  }
                  if (r5.end.column == start.column && colDiff > 0 && i6 < n9 - 1) {
                    if (r5.end.column > r5.start.column && r5.end.column == ranges[i6 + 1].start.column)
                      r5.end.column -= colDiff;
                  }
                  r5.end.column += colDiff;
                  r5.end.row += lineDif;
                }
              }
            } else {
              var lineDif = startRow - endRow;
              var colDiff = start.column - end.column;
              for (; i6 < n9; i6++) {
                var r5 = ranges[i6];
                if (r5.start.row > endRow)
                  break;
                if (r5.end.row < endRow && (startRow < r5.end.row || startRow == r5.end.row && start.column < r5.end.column)) {
                  r5.end.row = startRow;
                  r5.end.column = start.column;
                } else if (r5.end.row == endRow) {
                  if (r5.end.column <= end.column) {
                    if (lineDif || r5.end.column > start.column) {
                      r5.end.column = start.column;
                      r5.end.row = start.row;
                    }
                  } else {
                    r5.end.column += colDiff;
                    r5.end.row += lineDif;
                  }
                } else if (r5.end.row > endRow) {
                  r5.end.row += lineDif;
                }
                if (r5.start.row < endRow && (startRow < r5.start.row || startRow == r5.start.row && start.column < r5.start.column)) {
                  r5.start.row = startRow;
                  r5.start.column = start.column;
                } else if (r5.start.row == endRow) {
                  if (r5.start.column <= end.column) {
                    if (lineDif || r5.start.column > start.column) {
                      r5.start.column = start.column;
                      r5.start.row = start.row;
                    }
                  } else {
                    r5.start.column += colDiff;
                    r5.start.row += lineDif;
                  }
                } else if (r5.start.row > endRow) {
                  r5.start.row += lineDif;
                }
              }
            }
            if (lineDif != 0 && i6 < n9) {
              for (; i6 < n9; i6++) {
                var r5 = ranges[i6];
                r5.start.row += lineDif;
                r5.end.row += lineDif;
              }
            }
          };
        }).call(RangeList.prototype);
        exports2.RangeList = RangeList;
      });
      ace.define("ace/edit_session/fold", ["require", "exports", "module", "ace/range_list", "ace/lib/oop"], function(require3, exports2, module2) {
        "use strict";
        var RangeList = require3("../range_list").RangeList;
        var oop = require3("../lib/oop");
        var Fold = exports2.Fold = function(range, placeholder) {
          this.foldLine = null;
          this.placeholder = placeholder;
          this.range = range;
          this.start = range.start;
          this.end = range.end;
          this.sameRow = range.start.row == range.end.row;
          this.subFolds = this.ranges = [];
        };
        oop.inherits(Fold, RangeList);
        (function() {
          this.toString = function() {
            return '"' + this.placeholder + '" ' + this.range.toString();
          };
          this.setFoldLine = function(foldLine) {
            this.foldLine = foldLine;
            this.subFolds.forEach(function(fold) {
              fold.setFoldLine(foldLine);
            });
          };
          this.clone = function() {
            var range = this.range.clone();
            var fold = new Fold(range, this.placeholder);
            this.subFolds.forEach(function(subFold) {
              fold.subFolds.push(subFold.clone());
            });
            fold.collapseChildren = this.collapseChildren;
            return fold;
          };
          this.addSubFold = function(fold) {
            if (this.range.isEqual(fold))
              return;
            consumeRange(fold, this.start);
            var row = fold.start.row, column = fold.start.column;
            for (var i6 = 0, cmp = -1; i6 < this.subFolds.length; i6++) {
              cmp = this.subFolds[i6].range.compare(row, column);
              if (cmp != 1)
                break;
            }
            var afterStart = this.subFolds[i6];
            var firstConsumed = 0;
            if (cmp == 0) {
              if (afterStart.range.containsRange(fold))
                return afterStart.addSubFold(fold);
              else
                firstConsumed = 1;
            }
            var row = fold.range.end.row, column = fold.range.end.column;
            for (var j = i6, cmp = -1; j < this.subFolds.length; j++) {
              cmp = this.subFolds[j].range.compare(row, column);
              if (cmp != 1)
                break;
            }
            if (cmp == 0)
              j++;
            var consumedFolds = this.subFolds.splice(i6, j - i6, fold);
            var last = cmp == 0 ? consumedFolds.length - 1 : consumedFolds.length;
            for (var k2 = firstConsumed; k2 < last; k2++) {
              fold.addSubFold(consumedFolds[k2]);
            }
            fold.setFoldLine(this.foldLine);
            return fold;
          };
          this.restoreRange = function(range) {
            return restoreRange(range, this.start);
          };
        }).call(Fold.prototype);
        function consumePoint(point, anchor) {
          point.row -= anchor.row;
          if (point.row == 0)
            point.column -= anchor.column;
        }
        function consumeRange(range, anchor) {
          consumePoint(range.start, anchor);
          consumePoint(range.end, anchor);
        }
        function restorePoint(point, anchor) {
          if (point.row == 0)
            point.column += anchor.column;
          point.row += anchor.row;
        }
        function restoreRange(range, anchor) {
          restorePoint(range.start, anchor);
          restorePoint(range.end, anchor);
        }
      });
      ace.define("ace/edit_session/folding", ["require", "exports", "module", "ace/range", "ace/edit_session/fold_line", "ace/edit_session/fold", "ace/token_iterator"], function(require3, exports2, module2) {
        "use strict";
        var Range = require3("../range").Range;
        var FoldLine = require3("./fold_line").FoldLine;
        var Fold = require3("./fold").Fold;
        var TokenIterator = require3("../token_iterator").TokenIterator;
        function Folding() {
          this.getFoldAt = function(row, column, side) {
            var foldLine = this.getFoldLine(row);
            if (!foldLine)
              return null;
            var folds = foldLine.folds;
            for (var i6 = 0; i6 < folds.length; i6++) {
              var range = folds[i6].range;
              if (range.contains(row, column)) {
                if (side == 1 && range.isEnd(row, column) && !range.isEmpty()) {
                  continue;
                } else if (side == -1 && range.isStart(row, column) && !range.isEmpty()) {
                  continue;
                }
                return folds[i6];
              }
            }
          };
          this.getFoldsInRange = function(range) {
            var start = range.start;
            var end = range.end;
            var foldLines = this.$foldData;
            var foundFolds = [];
            start.column += 1;
            end.column -= 1;
            for (var i6 = 0; i6 < foldLines.length; i6++) {
              var cmp = foldLines[i6].range.compareRange(range);
              if (cmp == 2) {
                continue;
              } else if (cmp == -2) {
                break;
              }
              var folds = foldLines[i6].folds;
              for (var j = 0; j < folds.length; j++) {
                var fold = folds[j];
                cmp = fold.range.compareRange(range);
                if (cmp == -2) {
                  break;
                } else if (cmp == 2) {
                  continue;
                } else if (cmp == 42) {
                  break;
                }
                foundFolds.push(fold);
              }
            }
            start.column -= 1;
            end.column += 1;
            return foundFolds;
          };
          this.getFoldsInRangeList = function(ranges) {
            if (Array.isArray(ranges)) {
              var folds = [];
              ranges.forEach(function(range) {
                folds = folds.concat(this.getFoldsInRange(range));
              }, this);
            } else {
              var folds = this.getFoldsInRange(ranges);
            }
            return folds;
          };
          this.getAllFolds = function() {
            var folds = [];
            var foldLines = this.$foldData;
            for (var i6 = 0; i6 < foldLines.length; i6++)
              for (var j = 0; j < foldLines[i6].folds.length; j++)
                folds.push(foldLines[i6].folds[j]);
            return folds;
          };
          this.getFoldStringAt = function(row, column, trim, foldLine) {
            foldLine = foldLine || this.getFoldLine(row);
            if (!foldLine)
              return null;
            var lastFold = {
              end: { column: 0 }
            };
            var str, fold;
            for (var i6 = 0; i6 < foldLine.folds.length; i6++) {
              fold = foldLine.folds[i6];
              var cmp = fold.range.compareEnd(row, column);
              if (cmp == -1) {
                str = this.getLine(fold.start.row).substring(lastFold.end.column, fold.start.column);
                break;
              } else if (cmp === 0) {
                return null;
              }
              lastFold = fold;
            }
            if (!str)
              str = this.getLine(fold.start.row).substring(lastFold.end.column);
            if (trim == -1)
              return str.substring(0, column - lastFold.end.column);
            else if (trim == 1)
              return str.substring(column - lastFold.end.column);
            else
              return str;
          };
          this.getFoldLine = function(docRow, startFoldLine) {
            var foldData = this.$foldData;
            var i6 = 0;
            if (startFoldLine)
              i6 = foldData.indexOf(startFoldLine);
            if (i6 == -1)
              i6 = 0;
            for (i6; i6 < foldData.length; i6++) {
              var foldLine = foldData[i6];
              if (foldLine.start.row <= docRow && foldLine.end.row >= docRow) {
                return foldLine;
              } else if (foldLine.end.row > docRow) {
                return null;
              }
            }
            return null;
          };
          this.getNextFoldLine = function(docRow, startFoldLine) {
            var foldData = this.$foldData;
            var i6 = 0;
            if (startFoldLine)
              i6 = foldData.indexOf(startFoldLine);
            if (i6 == -1)
              i6 = 0;
            for (i6; i6 < foldData.length; i6++) {
              var foldLine = foldData[i6];
              if (foldLine.end.row >= docRow) {
                return foldLine;
              }
            }
            return null;
          };
          this.getFoldedRowCount = function(first, last) {
            var foldData = this.$foldData, rowCount = last - first + 1;
            for (var i6 = 0; i6 < foldData.length; i6++) {
              var foldLine = foldData[i6], end = foldLine.end.row, start = foldLine.start.row;
              if (end >= last) {
                if (start < last) {
                  if (start >= first)
                    rowCount -= last - start;
                  else
                    rowCount = 0;
                }
                break;
              } else if (end >= first) {
                if (start >= first)
                  rowCount -= end - start;
                else
                  rowCount -= end - first + 1;
              }
            }
            return rowCount;
          };
          this.$addFoldLine = function(foldLine) {
            this.$foldData.push(foldLine);
            this.$foldData.sort(function(a3, b2) {
              return a3.start.row - b2.start.row;
            });
            return foldLine;
          };
          this.addFold = function(placeholder, range) {
            var foldData = this.$foldData;
            var added = false;
            var fold;
            if (placeholder instanceof Fold)
              fold = placeholder;
            else {
              fold = new Fold(range, placeholder);
              fold.collapseChildren = range.collapseChildren;
            }
            this.$clipRangeToDocument(fold.range);
            var startRow = fold.start.row;
            var startColumn = fold.start.column;
            var endRow = fold.end.row;
            var endColumn = fold.end.column;
            var startFold = this.getFoldAt(startRow, startColumn, 1);
            var endFold = this.getFoldAt(endRow, endColumn, -1);
            if (startFold && endFold == startFold)
              return startFold.addSubFold(fold);
            if (startFold && !startFold.range.isStart(startRow, startColumn))
              this.removeFold(startFold);
            if (endFold && !endFold.range.isEnd(endRow, endColumn))
              this.removeFold(endFold);
            var folds = this.getFoldsInRange(fold.range);
            if (folds.length > 0) {
              this.removeFolds(folds);
              if (!fold.collapseChildren) {
                folds.forEach(function(subFold) {
                  fold.addSubFold(subFold);
                });
              }
            }
            for (var i6 = 0; i6 < foldData.length; i6++) {
              var foldLine = foldData[i6];
              if (endRow == foldLine.start.row) {
                foldLine.addFold(fold);
                added = true;
                break;
              } else if (startRow == foldLine.end.row) {
                foldLine.addFold(fold);
                added = true;
                if (!fold.sameRow) {
                  var foldLineNext = foldData[i6 + 1];
                  if (foldLineNext && foldLineNext.start.row == endRow) {
                    foldLine.merge(foldLineNext);
                    break;
                  }
                }
                break;
              } else if (endRow <= foldLine.start.row) {
                break;
              }
            }
            if (!added)
              foldLine = this.$addFoldLine(new FoldLine(this.$foldData, fold));
            if (this.$useWrapMode)
              this.$updateWrapData(foldLine.start.row, foldLine.start.row);
            else
              this.$updateRowLengthCache(foldLine.start.row, foldLine.start.row);
            this.$modified = true;
            this._signal("changeFold", { data: fold, action: "add" });
            return fold;
          };
          this.addFolds = function(folds) {
            folds.forEach(function(fold) {
              this.addFold(fold);
            }, this);
          };
          this.removeFold = function(fold) {
            var foldLine = fold.foldLine;
            var startRow = foldLine.start.row;
            var endRow = foldLine.end.row;
            var foldLines = this.$foldData;
            var folds = foldLine.folds;
            if (folds.length == 1) {
              foldLines.splice(foldLines.indexOf(foldLine), 1);
            } else if (foldLine.range.isEnd(fold.end.row, fold.end.column)) {
              folds.pop();
              foldLine.end.row = folds[folds.length - 1].end.row;
              foldLine.end.column = folds[folds.length - 1].end.column;
            } else if (foldLine.range.isStart(fold.start.row, fold.start.column)) {
              folds.shift();
              foldLine.start.row = folds[0].start.row;
              foldLine.start.column = folds[0].start.column;
            } else if (fold.sameRow) {
              folds.splice(folds.indexOf(fold), 1);
            } else {
              var newFoldLine = foldLine.split(fold.start.row, fold.start.column);
              folds = newFoldLine.folds;
              folds.shift();
              newFoldLine.start.row = folds[0].start.row;
              newFoldLine.start.column = folds[0].start.column;
            }
            if (!this.$updating) {
              if (this.$useWrapMode)
                this.$updateWrapData(startRow, endRow);
              else
                this.$updateRowLengthCache(startRow, endRow);
            }
            this.$modified = true;
            this._signal("changeFold", { data: fold, action: "remove" });
          };
          this.removeFolds = function(folds) {
            var cloneFolds = [];
            for (var i6 = 0; i6 < folds.length; i6++) {
              cloneFolds.push(folds[i6]);
            }
            cloneFolds.forEach(function(fold) {
              this.removeFold(fold);
            }, this);
            this.$modified = true;
          };
          this.expandFold = function(fold) {
            this.removeFold(fold);
            fold.subFolds.forEach(function(subFold) {
              fold.restoreRange(subFold);
              this.addFold(subFold);
            }, this);
            if (fold.collapseChildren > 0) {
              this.foldAll(fold.start.row + 1, fold.end.row, fold.collapseChildren - 1);
            }
            fold.subFolds = [];
          };
          this.expandFolds = function(folds) {
            folds.forEach(function(fold) {
              this.expandFold(fold);
            }, this);
          };
          this.unfold = function(location2, expandInner) {
            var range, folds;
            if (location2 == null) {
              range = new Range(0, 0, this.getLength(), 0);
              if (expandInner == null)
                expandInner = true;
            } else if (typeof location2 == "number") {
              range = new Range(location2, 0, location2, this.getLine(location2).length);
            } else if ("row" in location2) {
              range = Range.fromPoints(location2, location2);
            } else if (Array.isArray(location2)) {
              folds = [];
              location2.forEach(function(range2) {
                folds = folds.concat(this.unfold(range2));
              }, this);
              return folds;
            } else {
              range = location2;
            }
            folds = this.getFoldsInRangeList(range);
            var outermostFolds = folds;
            while (folds.length == 1 && Range.comparePoints(folds[0].start, range.start) < 0 && Range.comparePoints(folds[0].end, range.end) > 0) {
              this.expandFolds(folds);
              folds = this.getFoldsInRangeList(range);
            }
            if (expandInner != false) {
              this.removeFolds(folds);
            } else {
              this.expandFolds(folds);
            }
            if (outermostFolds.length)
              return outermostFolds;
          };
          this.isRowFolded = function(docRow, startFoldRow) {
            return !!this.getFoldLine(docRow, startFoldRow);
          };
          this.getRowFoldEnd = function(docRow, startFoldRow) {
            var foldLine = this.getFoldLine(docRow, startFoldRow);
            return foldLine ? foldLine.end.row : docRow;
          };
          this.getRowFoldStart = function(docRow, startFoldRow) {
            var foldLine = this.getFoldLine(docRow, startFoldRow);
            return foldLine ? foldLine.start.row : docRow;
          };
          this.getFoldDisplayLine = function(foldLine, endRow, endColumn, startRow, startColumn) {
            if (startRow == null)
              startRow = foldLine.start.row;
            if (startColumn == null)
              startColumn = 0;
            if (endRow == null)
              endRow = foldLine.end.row;
            if (endColumn == null)
              endColumn = this.getLine(endRow).length;
            var doc = this.doc;
            var textLine = "";
            foldLine.walk(function(placeholder, row, column, lastColumn) {
              if (row < startRow)
                return;
              if (row == startRow) {
                if (column < startColumn)
                  return;
                lastColumn = Math.max(startColumn, lastColumn);
              }
              if (placeholder != null) {
                textLine += placeholder;
              } else {
                textLine += doc.getLine(row).substring(lastColumn, column);
              }
            }, endRow, endColumn);
            return textLine;
          };
          this.getDisplayLine = function(row, endColumn, startRow, startColumn) {
            var foldLine = this.getFoldLine(row);
            if (!foldLine) {
              var line;
              line = this.doc.getLine(row);
              return line.substring(startColumn || 0, endColumn || line.length);
            } else {
              return this.getFoldDisplayLine(
                foldLine,
                row,
                endColumn,
                startRow,
                startColumn
              );
            }
          };
          this.$cloneFoldData = function() {
            var fd = [];
            fd = this.$foldData.map(function(foldLine) {
              var folds = foldLine.folds.map(function(fold) {
                return fold.clone();
              });
              return new FoldLine(fd, folds);
            });
            return fd;
          };
          this.toggleFold = function(tryToUnfold) {
            var selection = this.selection;
            var range = selection.getRange();
            var fold;
            var bracketPos;
            if (range.isEmpty()) {
              var cursor = range.start;
              fold = this.getFoldAt(cursor.row, cursor.column);
              if (fold) {
                this.expandFold(fold);
                return;
              } else if (bracketPos = this.findMatchingBracket(cursor)) {
                if (range.comparePoint(bracketPos) == 1) {
                  range.end = bracketPos;
                } else {
                  range.start = bracketPos;
                  range.start.column++;
                  range.end.column--;
                }
              } else if (bracketPos = this.findMatchingBracket({ row: cursor.row, column: cursor.column + 1 })) {
                if (range.comparePoint(bracketPos) == 1)
                  range.end = bracketPos;
                else
                  range.start = bracketPos;
                range.start.column++;
              } else {
                range = this.getCommentFoldRange(cursor.row, cursor.column) || range;
              }
            } else {
              var folds = this.getFoldsInRange(range);
              if (tryToUnfold && folds.length) {
                this.expandFolds(folds);
                return;
              } else if (folds.length == 1) {
                fold = folds[0];
              }
            }
            if (!fold)
              fold = this.getFoldAt(range.start.row, range.start.column);
            if (fold && fold.range.toString() == range.toString()) {
              this.expandFold(fold);
              return;
            }
            var placeholder = "...";
            if (!range.isMultiLine()) {
              placeholder = this.getTextRange(range);
              if (placeholder.length < 4)
                return;
              placeholder = placeholder.trim().substring(0, 2) + "..";
            }
            this.addFold(placeholder, range);
          };
          this.getCommentFoldRange = function(row, column, dir) {
            var iterator = new TokenIterator(this, row, column);
            var token = iterator.getCurrentToken();
            var type = token && token.type;
            if (token && /^comment|string/.test(type)) {
              type = type.match(/comment|string/)[0];
              if (type == "comment")
                type += "|doc-start";
              var re = new RegExp(type);
              var range = new Range();
              if (dir != 1) {
                do {
                  token = iterator.stepBackward();
                } while (token && re.test(token.type));
                iterator.stepForward();
              }
              range.start.row = iterator.getCurrentTokenRow();
              range.start.column = iterator.getCurrentTokenColumn() + 2;
              iterator = new TokenIterator(this, row, column);
              if (dir != -1) {
                var lastRow = -1;
                do {
                  token = iterator.stepForward();
                  if (lastRow == -1) {
                    var state = this.getState(iterator.$row);
                    if (!re.test(state))
                      lastRow = iterator.$row;
                  } else if (iterator.$row > lastRow) {
                    break;
                  }
                } while (token && re.test(token.type));
                token = iterator.stepBackward();
              } else
                token = iterator.getCurrentToken();
              range.end.row = iterator.getCurrentTokenRow();
              range.end.column = iterator.getCurrentTokenColumn() + token.value.length - 2;
              return range;
            }
          };
          this.foldAll = function(startRow, endRow, depth, test) {
            if (depth == void 0)
              depth = 1e5;
            var foldWidgets = this.foldWidgets;
            if (!foldWidgets)
              return;
            endRow = endRow || this.getLength();
            startRow = startRow || 0;
            for (var row = startRow; row < endRow; row++) {
              if (foldWidgets[row] == null)
                foldWidgets[row] = this.getFoldWidget(row);
              if (foldWidgets[row] != "start")
                continue;
              if (test && !test(row))
                continue;
              var range = this.getFoldWidgetRange(row);
              if (range && range.isMultiLine() && range.end.row <= endRow && range.start.row >= startRow) {
                row = range.end.row;
                range.collapseChildren = depth;
                this.addFold("...", range);
              }
            }
          };
          this.foldToLevel = function(level) {
            this.foldAll();
            while (level-- > 0)
              this.unfold(null, false);
          };
          this.foldAllComments = function() {
            var session = this;
            this.foldAll(null, null, null, function(row) {
              var tokens = session.getTokens(row);
              for (var i6 = 0; i6 < tokens.length; i6++) {
                var token = tokens[i6];
                if (token.type == "text" && /^\s+$/.test(token.value))
                  continue;
                if (/comment/.test(token.type))
                  return true;
                return false;
              }
            });
          };
          this.$foldStyles = {
            "manual": 1,
            "markbegin": 1,
            "markbeginend": 1
          };
          this.$foldStyle = "markbegin";
          this.setFoldStyle = function(style) {
            if (!this.$foldStyles[style])
              throw new Error("invalid fold style: " + style + "[" + Object.keys(this.$foldStyles).join(", ") + "]");
            if (this.$foldStyle == style)
              return;
            this.$foldStyle = style;
            if (style == "manual")
              this.unfold();
            var mode = this.$foldMode;
            this.$setFolding(null);
            this.$setFolding(mode);
          };
          this.$setFolding = function(foldMode) {
            if (this.$foldMode == foldMode)
              return;
            this.$foldMode = foldMode;
            this.off("change", this.$updateFoldWidgets);
            this.off("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets);
            this._signal("changeAnnotation");
            if (!foldMode || this.$foldStyle == "manual") {
              this.foldWidgets = null;
              return;
            }
            this.foldWidgets = [];
            this.getFoldWidget = foldMode.getFoldWidget.bind(foldMode, this, this.$foldStyle);
            this.getFoldWidgetRange = foldMode.getFoldWidgetRange.bind(foldMode, this, this.$foldStyle);
            this.$updateFoldWidgets = this.updateFoldWidgets.bind(this);
            this.$tokenizerUpdateFoldWidgets = this.tokenizerUpdateFoldWidgets.bind(this);
            this.on("change", this.$updateFoldWidgets);
            this.on("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets);
          };
          this.getParentFoldRangeData = function(row, ignoreCurrent) {
            var fw = this.foldWidgets;
            if (!fw || ignoreCurrent && fw[row])
              return {};
            var i6 = row - 1, firstRange;
            while (i6 >= 0) {
              var c2 = fw[i6];
              if (c2 == null)
                c2 = fw[i6] = this.getFoldWidget(i6);
              if (c2 == "start") {
                var range = this.getFoldWidgetRange(i6);
                if (!firstRange)
                  firstRange = range;
                if (range && range.end.row >= row)
                  break;
              }
              i6--;
            }
            return {
              range: i6 !== -1 && range,
              firstRange
            };
          };
          this.onFoldWidgetClick = function(row, e10) {
            e10 = e10.domEvent;
            var options = {
              children: e10.shiftKey,
              all: e10.ctrlKey || e10.metaKey,
              siblings: e10.altKey
            };
            var range = this.$toggleFoldWidget(row, options);
            if (!range) {
              var el = e10.target || e10.srcElement;
              if (el && /ace_fold-widget/.test(el.className))
                el.className += " ace_invalid";
            }
          };
          this.$toggleFoldWidget = function(row, options) {
            if (!this.getFoldWidget)
              return;
            var type = this.getFoldWidget(row);
            var line = this.getLine(row);
            var dir = type === "end" ? -1 : 1;
            var fold = this.getFoldAt(row, dir === -1 ? 0 : line.length, dir);
            if (fold) {
              if (options.children || options.all)
                this.removeFold(fold);
              else
                this.expandFold(fold);
              return fold;
            }
            var range = this.getFoldWidgetRange(row, true);
            if (range && !range.isMultiLine()) {
              fold = this.getFoldAt(range.start.row, range.start.column, 1);
              if (fold && range.isEqual(fold.range)) {
                this.removeFold(fold);
                return fold;
              }
            }
            if (options.siblings) {
              var data = this.getParentFoldRangeData(row);
              if (data.range) {
                var startRow = data.range.start.row + 1;
                var endRow = data.range.end.row;
              }
              this.foldAll(startRow, endRow, options.all ? 1e4 : 0);
            } else if (options.children) {
              endRow = range ? range.end.row : this.getLength();
              this.foldAll(row + 1, endRow, options.all ? 1e4 : 0);
            } else if (range) {
              if (options.all)
                range.collapseChildren = 1e4;
              this.addFold("...", range);
            }
            return range;
          };
          this.toggleFoldWidget = function(toggleParent) {
            var row = this.selection.getCursor().row;
            row = this.getRowFoldStart(row);
            var range = this.$toggleFoldWidget(row, {});
            if (range)
              return;
            var data = this.getParentFoldRangeData(row, true);
            range = data.range || data.firstRange;
            if (range) {
              row = range.start.row;
              var fold = this.getFoldAt(row, this.getLine(row).length, 1);
              if (fold) {
                this.removeFold(fold);
              } else {
                this.addFold("...", range);
              }
            }
          };
          this.updateFoldWidgets = function(delta) {
            var firstRow = delta.start.row;
            var len = delta.end.row - firstRow;
            if (len === 0) {
              this.foldWidgets[firstRow] = null;
            } else if (delta.action == "remove") {
              this.foldWidgets.splice(firstRow, len + 1, null);
            } else {
              var args = Array(len + 1);
              args.unshift(firstRow, 1);
              this.foldWidgets.splice.apply(this.foldWidgets, args);
            }
          };
          this.tokenizerUpdateFoldWidgets = function(e10) {
            var rows = e10.data;
            if (rows.first != rows.last) {
              if (this.foldWidgets.length > rows.first)
                this.foldWidgets.splice(rows.first, this.foldWidgets.length);
            }
          };
        }
        exports2.Folding = Folding;
      });
      ace.define("ace/edit_session/bracket_match", ["require", "exports", "module", "ace/token_iterator", "ace/range"], function(require3, exports2, module2) {
        "use strict";
        var TokenIterator = require3("../token_iterator").TokenIterator;
        var Range = require3("../range").Range;
        function BracketMatch() {
          this.findMatchingBracket = function(position, chr) {
            if (position.column == 0)
              return null;
            var charBeforeCursor = chr || this.getLine(position.row).charAt(position.column - 1);
            if (charBeforeCursor == "")
              return null;
            var match = charBeforeCursor.match(/([\(\[\{])|([\)\]\}])/);
            if (!match)
              return null;
            if (match[1])
              return this.$findClosingBracket(match[1], position);
            else
              return this.$findOpeningBracket(match[2], position);
          };
          this.getBracketRange = function(pos) {
            var line = this.getLine(pos.row);
            var before = true, range;
            var chr = line.charAt(pos.column - 1);
            var match = chr && chr.match(/([\(\[\{])|([\)\]\}])/);
            if (!match) {
              chr = line.charAt(pos.column);
              pos = { row: pos.row, column: pos.column + 1 };
              match = chr && chr.match(/([\(\[\{])|([\)\]\}])/);
              before = false;
            }
            if (!match)
              return null;
            if (match[1]) {
              var bracketPos = this.$findClosingBracket(match[1], pos);
              if (!bracketPos)
                return null;
              range = Range.fromPoints(pos, bracketPos);
              if (!before) {
                range.end.column++;
                range.start.column--;
              }
              range.cursor = range.end;
            } else {
              var bracketPos = this.$findOpeningBracket(match[2], pos);
              if (!bracketPos)
                return null;
              range = Range.fromPoints(bracketPos, pos);
              if (!before) {
                range.start.column++;
                range.end.column--;
              }
              range.cursor = range.start;
            }
            return range;
          };
          this.getMatchingBracketRanges = function(pos) {
            var line = this.getLine(pos.row);
            var chr = line.charAt(pos.column - 1);
            var match = chr && chr.match(/([\(\[\{])|([\)\]\}])/);
            if (!match) {
              chr = line.charAt(pos.column);
              pos = { row: pos.row, column: pos.column + 1 };
              match = chr && chr.match(/([\(\[\{])|([\)\]\}])/);
            }
            if (!match)
              return null;
            var startRange = new Range(pos.row, pos.column - 1, pos.row, pos.column);
            var bracketPos = match[1] ? this.$findClosingBracket(match[1], pos) : this.$findOpeningBracket(match[2], pos);
            if (!bracketPos)
              return [startRange];
            var endRange = new Range(bracketPos.row, bracketPos.column, bracketPos.row, bracketPos.column + 1);
            return [startRange, endRange];
          };
          this.$brackets = {
            ")": "(",
            "(": ")",
            "]": "[",
            "[": "]",
            "{": "}",
            "}": "{",
            "<": ">",
            ">": "<"
          };
          this.$findOpeningBracket = function(bracket, position, typeRe) {
            var openBracket = this.$brackets[bracket];
            var depth = 1;
            var iterator = new TokenIterator(this, position.row, position.column);
            var token = iterator.getCurrentToken();
            if (!token)
              token = iterator.stepForward();
            if (!token)
              return;
            if (!typeRe) {
              typeRe = new RegExp(
                "(\\.?" + token.type.replace(".", "\\.").replace("rparen", ".paren").replace(/\b(?:end)\b/, "(?:start|begin|end)") + ")+"
              );
            }
            var valueIndex = position.column - iterator.getCurrentTokenColumn() - 2;
            var value = token.value;
            while (true) {
              while (valueIndex >= 0) {
                var chr = value.charAt(valueIndex);
                if (chr == openBracket) {
                  depth -= 1;
                  if (depth == 0) {
                    return {
                      row: iterator.getCurrentTokenRow(),
                      column: valueIndex + iterator.getCurrentTokenColumn()
                    };
                  }
                } else if (chr == bracket) {
                  depth += 1;
                }
                valueIndex -= 1;
              }
              do {
                token = iterator.stepBackward();
              } while (token && !typeRe.test(token.type));
              if (token == null)
                break;
              value = token.value;
              valueIndex = value.length - 1;
            }
            return null;
          };
          this.$findClosingBracket = function(bracket, position, typeRe) {
            var closingBracket = this.$brackets[bracket];
            var depth = 1;
            var iterator = new TokenIterator(this, position.row, position.column);
            var token = iterator.getCurrentToken();
            if (!token)
              token = iterator.stepForward();
            if (!token)
              return;
            if (!typeRe) {
              typeRe = new RegExp(
                "(\\.?" + token.type.replace(".", "\\.").replace("lparen", ".paren").replace(/\b(?:start|begin)\b/, "(?:start|begin|end)") + ")+"
              );
            }
            var valueIndex = position.column - iterator.getCurrentTokenColumn();
            while (true) {
              var value = token.value;
              var valueLength = value.length;
              while (valueIndex < valueLength) {
                var chr = value.charAt(valueIndex);
                if (chr == closingBracket) {
                  depth -= 1;
                  if (depth == 0) {
                    return {
                      row: iterator.getCurrentTokenRow(),
                      column: valueIndex + iterator.getCurrentTokenColumn()
                    };
                  }
                } else if (chr == bracket) {
                  depth += 1;
                }
                valueIndex += 1;
              }
              do {
                token = iterator.stepForward();
              } while (token && !typeRe.test(token.type));
              if (token == null)
                break;
              valueIndex = 0;
            }
            return null;
          };
        }
        exports2.BracketMatch = BracketMatch;
      });
      ace.define("ace/edit_session", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/bidihandler", "ace/config", "ace/lib/event_emitter", "ace/selection", "ace/mode/text", "ace/range", "ace/document", "ace/background_tokenizer", "ace/search_highlight", "ace/edit_session/folding", "ace/edit_session/bracket_match"], function(require3, exports2, module2) {
        "use strict";
        var oop = require3("./lib/oop");
        var lang = require3("./lib/lang");
        var BidiHandler = require3("./bidihandler").BidiHandler;
        var config2 = require3("./config");
        var EventEmitter = require3("./lib/event_emitter").EventEmitter;
        var Selection = require3("./selection").Selection;
        var TextMode = require3("./mode/text").Mode;
        var Range = require3("./range").Range;
        var Document2 = require3("./document").Document;
        var BackgroundTokenizer = require3("./background_tokenizer").BackgroundTokenizer;
        var SearchHighlight = require3("./search_highlight").SearchHighlight;
        var EditSession2 = function(text, mode) {
          this.$breakpoints = [];
          this.$decorations = [];
          this.$frontMarkers = {};
          this.$backMarkers = {};
          this.$markerId = 1;
          this.$undoSelect = true;
          this.$foldData = [];
          this.id = "session" + ++EditSession2.$uid;
          this.$foldData.toString = function() {
            return this.join("\n");
          };
          this.bgTokenizer = new BackgroundTokenizer(new TextMode().getTokenizer(), this);
          var _self = this;
          this.bgTokenizer.on("update", function(e10) {
            _self._signal("tokenizerUpdate", e10);
          });
          this.on("changeFold", this.onChangeFold.bind(this));
          this.$onChange = this.onChange.bind(this);
          if (typeof text != "object" || !text.getLine)
            text = new Document2(text);
          this.setDocument(text);
          this.selection = new Selection(this);
          this.$bidiHandler = new BidiHandler(this);
          config2.resetOptions(this);
          this.setMode(mode);
          config2._signal("session", this);
          this.destroyed = false;
        };
        EditSession2.$uid = 0;
        (function() {
          oop.implement(this, EventEmitter);
          this.setDocument = function(doc) {
            if (this.doc)
              this.doc.off("change", this.$onChange);
            this.doc = doc;
            doc.on("change", this.$onChange, true);
            this.bgTokenizer.setDocument(this.getDocument());
            this.resetCaches();
          };
          this.getDocument = function() {
            return this.doc;
          };
          this.$resetRowCache = function(docRow) {
            if (!docRow) {
              this.$docRowCache = [];
              this.$screenRowCache = [];
              return;
            }
            var l7 = this.$docRowCache.length;
            var i6 = this.$getRowCacheIndex(this.$docRowCache, docRow) + 1;
            if (l7 > i6) {
              this.$docRowCache.splice(i6, l7);
              this.$screenRowCache.splice(i6, l7);
            }
          };
          this.$getRowCacheIndex = function(cacheArray, val) {
            var low = 0;
            var hi = cacheArray.length - 1;
            while (low <= hi) {
              var mid = low + hi >> 1;
              var c2 = cacheArray[mid];
              if (val > c2)
                low = mid + 1;
              else if (val < c2)
                hi = mid - 1;
              else
                return mid;
            }
            return low - 1;
          };
          this.resetCaches = function() {
            this.$modified = true;
            this.$wrapData = [];
            this.$rowLengthCache = [];
            this.$resetRowCache(0);
            if (!this.destroyed)
              this.bgTokenizer.start(0);
          };
          this.onChangeFold = function(e10) {
            var fold = e10.data;
            this.$resetRowCache(fold.start.row);
          };
          this.onChange = function(delta) {
            this.$modified = true;
            this.$bidiHandler.onChange(delta);
            this.$resetRowCache(delta.start.row);
            var removedFolds = this.$updateInternalDataOnChange(delta);
            if (!this.$fromUndo && this.$undoManager) {
              if (removedFolds && removedFolds.length) {
                this.$undoManager.add({
                  action: "removeFolds",
                  folds: removedFolds
                }, this.mergeUndoDeltas);
                this.mergeUndoDeltas = true;
              }
              this.$undoManager.add(delta, this.mergeUndoDeltas);
              this.mergeUndoDeltas = true;
              this.$informUndoManager.schedule();
            }
            this.bgTokenizer.$updateOnChange(delta);
            this._signal("change", delta);
          };
          this.setValue = function(text) {
            this.doc.setValue(text);
            this.selection.moveTo(0, 0);
            this.$resetRowCache(0);
            this.setUndoManager(this.$undoManager);
            this.getUndoManager().reset();
          };
          this.getValue = this.toString = function() {
            return this.doc.getValue();
          };
          this.getSelection = function() {
            return this.selection;
          };
          this.getState = function(row) {
            return this.bgTokenizer.getState(row);
          };
          this.getTokens = function(row) {
            return this.bgTokenizer.getTokens(row);
          };
          this.getTokenAt = function(row, column) {
            var tokens = this.bgTokenizer.getTokens(row);
            var token, c2 = 0;
            if (column == null) {
              var i6 = tokens.length - 1;
              c2 = this.getLine(row).length;
            } else {
              for (var i6 = 0; i6 < tokens.length; i6++) {
                c2 += tokens[i6].value.length;
                if (c2 >= column)
                  break;
              }
            }
            token = tokens[i6];
            if (!token)
              return null;
            token.index = i6;
            token.start = c2 - token.value.length;
            return token;
          };
          this.setUndoManager = function(undoManager) {
            this.$undoManager = undoManager;
            if (this.$informUndoManager)
              this.$informUndoManager.cancel();
            if (undoManager) {
              var self = this;
              undoManager.addSession(this);
              this.$syncInformUndoManager = function() {
                self.$informUndoManager.cancel();
                self.mergeUndoDeltas = false;
              };
              this.$informUndoManager = lang.delayedCall(this.$syncInformUndoManager);
            } else {
              this.$syncInformUndoManager = function() {
              };
            }
          };
          this.markUndoGroup = function() {
            if (this.$syncInformUndoManager)
              this.$syncInformUndoManager();
          };
          this.$defaultUndoManager = {
            undo: function() {
            },
            redo: function() {
            },
            hasUndo: function() {
            },
            hasRedo: function() {
            },
            reset: function() {
            },
            add: function() {
            },
            addSelection: function() {
            },
            startNewGroup: function() {
            },
            addSession: function() {
            }
          };
          this.getUndoManager = function() {
            return this.$undoManager || this.$defaultUndoManager;
          };
          this.getTabString = function() {
            if (this.getUseSoftTabs()) {
              return lang.stringRepeat(" ", this.getTabSize());
            } else {
              return "	";
            }
          };
          this.setUseSoftTabs = function(val) {
            this.setOption("useSoftTabs", val);
          };
          this.getUseSoftTabs = function() {
            return this.$useSoftTabs && !this.$mode.$indentWithTabs;
          };
          this.setTabSize = function(tabSize) {
            this.setOption("tabSize", tabSize);
          };
          this.getTabSize = function() {
            return this.$tabSize;
          };
          this.isTabStop = function(position) {
            return this.$useSoftTabs && position.column % this.$tabSize === 0;
          };
          this.setNavigateWithinSoftTabs = function(navigateWithinSoftTabs) {
            this.setOption("navigateWithinSoftTabs", navigateWithinSoftTabs);
          };
          this.getNavigateWithinSoftTabs = function() {
            return this.$navigateWithinSoftTabs;
          };
          this.$overwrite = false;
          this.setOverwrite = function(overwrite) {
            this.setOption("overwrite", overwrite);
          };
          this.getOverwrite = function() {
            return this.$overwrite;
          };
          this.toggleOverwrite = function() {
            this.setOverwrite(!this.$overwrite);
          };
          this.addGutterDecoration = function(row, className) {
            if (!this.$decorations[row])
              this.$decorations[row] = "";
            this.$decorations[row] += " " + className;
            this._signal("changeBreakpoint", {});
          };
          this.removeGutterDecoration = function(row, className) {
            this.$decorations[row] = (this.$decorations[row] || "").replace(" " + className, "");
            this._signal("changeBreakpoint", {});
          };
          this.getBreakpoints = function() {
            return this.$breakpoints;
          };
          this.setBreakpoints = function(rows) {
            this.$breakpoints = [];
            for (var i6 = 0; i6 < rows.length; i6++) {
              this.$breakpoints[rows[i6]] = "ace_breakpoint";
            }
            this._signal("changeBreakpoint", {});
          };
          this.clearBreakpoints = function() {
            this.$breakpoints = [];
            this._signal("changeBreakpoint", {});
          };
          this.setBreakpoint = function(row, className) {
            if (className === void 0)
              className = "ace_breakpoint";
            if (className)
              this.$breakpoints[row] = className;
            else
              delete this.$breakpoints[row];
            this._signal("changeBreakpoint", {});
          };
          this.clearBreakpoint = function(row) {
            delete this.$breakpoints[row];
            this._signal("changeBreakpoint", {});
          };
          this.addMarker = function(range, clazz, type, inFront) {
            var id = this.$markerId++;
            var marker = {
              range,
              type: type || "line",
              renderer: typeof type == "function" ? type : null,
              clazz,
              inFront: !!inFront,
              id
            };
            if (inFront) {
              this.$frontMarkers[id] = marker;
              this._signal("changeFrontMarker");
            } else {
              this.$backMarkers[id] = marker;
              this._signal("changeBackMarker");
            }
            return id;
          };
          this.addDynamicMarker = function(marker, inFront) {
            if (!marker.update)
              return;
            var id = this.$markerId++;
            marker.id = id;
            marker.inFront = !!inFront;
            if (inFront) {
              this.$frontMarkers[id] = marker;
              this._signal("changeFrontMarker");
            } else {
              this.$backMarkers[id] = marker;
              this._signal("changeBackMarker");
            }
            return marker;
          };
          this.removeMarker = function(markerId) {
            var marker = this.$frontMarkers[markerId] || this.$backMarkers[markerId];
            if (!marker)
              return;
            var markers = marker.inFront ? this.$frontMarkers : this.$backMarkers;
            delete markers[markerId];
            this._signal(marker.inFront ? "changeFrontMarker" : "changeBackMarker");
          };
          this.getMarkers = function(inFront) {
            return inFront ? this.$frontMarkers : this.$backMarkers;
          };
          this.highlight = function(re) {
            if (!this.$searchHighlight) {
              var highlight = new SearchHighlight(null, "ace_selected-word", "text");
              this.$searchHighlight = this.addDynamicMarker(highlight);
            }
            this.$searchHighlight.setRegexp(re);
          };
          this.highlightLines = function(startRow, endRow, clazz, inFront) {
            if (typeof endRow != "number") {
              clazz = endRow;
              endRow = startRow;
            }
            if (!clazz)
              clazz = "ace_step";
            var range = new Range(startRow, 0, endRow, Infinity);
            range.id = this.addMarker(range, clazz, "fullLine", inFront);
            return range;
          };
          this.setAnnotations = function(annotations) {
            this.$annotations = annotations;
            this._signal("changeAnnotation", {});
          };
          this.getAnnotations = function() {
            return this.$annotations || [];
          };
          this.clearAnnotations = function() {
            this.setAnnotations([]);
          };
          this.$detectNewLine = function(text) {
            var match = text.match(/^.*?(\r?\n)/m);
            if (match) {
              this.$autoNewLine = match[1];
            } else {
              this.$autoNewLine = "\n";
            }
          };
          this.getWordRange = function(row, column) {
            var line = this.getLine(row);
            var inToken = false;
            if (column > 0)
              inToken = !!line.charAt(column - 1).match(this.tokenRe);
            if (!inToken)
              inToken = !!line.charAt(column).match(this.tokenRe);
            if (inToken)
              var re = this.tokenRe;
            else if (/^\s+$/.test(line.slice(column - 1, column + 1)))
              var re = /\s/;
            else
              var re = this.nonTokenRe;
            var start = column;
            if (start > 0) {
              do {
                start--;
              } while (start >= 0 && line.charAt(start).match(re));
              start++;
            }
            var end = column;
            while (end < line.length && line.charAt(end).match(re)) {
              end++;
            }
            return new Range(row, start, row, end);
          };
          this.getAWordRange = function(row, column) {
            var wordRange = this.getWordRange(row, column);
            var line = this.getLine(wordRange.end.row);
            while (line.charAt(wordRange.end.column).match(/[ \t]/)) {
              wordRange.end.column += 1;
            }
            return wordRange;
          };
          this.setNewLineMode = function(newLineMode) {
            this.doc.setNewLineMode(newLineMode);
          };
          this.getNewLineMode = function() {
            return this.doc.getNewLineMode();
          };
          this.setUseWorker = function(useWorker) {
            this.setOption("useWorker", useWorker);
          };
          this.getUseWorker = function() {
            return this.$useWorker;
          };
          this.onReloadTokenizer = function(e10) {
            var rows = e10.data;
            this.bgTokenizer.start(rows.first);
            this._signal("tokenizerUpdate", e10);
          };
          this.$modes = config2.$modes;
          this.$mode = null;
          this.$modeId = null;
          this.setMode = function(mode, cb) {
            if (mode && typeof mode === "object") {
              if (mode.getTokenizer)
                return this.$onChangeMode(mode);
              var options = mode;
              var path = options.path;
            } else {
              path = mode || "ace/mode/text";
            }
            if (!this.$modes["ace/mode/text"])
              this.$modes["ace/mode/text"] = new TextMode();
            if (this.$modes[path] && !options) {
              this.$onChangeMode(this.$modes[path]);
              cb && cb();
              return;
            }
            this.$modeId = path;
            config2.loadModule(["mode", path], function(m2) {
              if (this.$modeId !== path)
                return cb && cb();
              if (this.$modes[path] && !options) {
                this.$onChangeMode(this.$modes[path]);
              } else if (m2 && m2.Mode) {
                m2 = new m2.Mode(options);
                if (!options) {
                  this.$modes[path] = m2;
                  m2.$id = path;
                }
                this.$onChangeMode(m2);
              }
              cb && cb();
            }.bind(this));
            if (!this.$mode)
              this.$onChangeMode(this.$modes["ace/mode/text"], true);
          };
          this.$onChangeMode = function(mode, $isPlaceholder) {
            if (!$isPlaceholder)
              this.$modeId = mode.$id;
            if (this.$mode === mode)
              return;
            var oldMode = this.$mode;
            this.$mode = mode;
            this.$stopWorker();
            if (this.$useWorker)
              this.$startWorker();
            var tokenizer = mode.getTokenizer();
            if (tokenizer.on !== void 0) {
              var onReloadTokenizer = this.onReloadTokenizer.bind(this);
              tokenizer.on("update", onReloadTokenizer);
            }
            this.bgTokenizer.setTokenizer(tokenizer);
            this.bgTokenizer.setDocument(this.getDocument());
            this.tokenRe = mode.tokenRe;
            this.nonTokenRe = mode.nonTokenRe;
            if (!$isPlaceholder) {
              if (mode.attachToSession)
                mode.attachToSession(this);
              this.$options.wrapMethod.set.call(this, this.$wrapMethod);
              this.$setFolding(mode.foldingRules);
              this.bgTokenizer.start(0);
              this._emit("changeMode", { oldMode, mode });
            }
          };
          this.$stopWorker = function() {
            if (this.$worker) {
              this.$worker.terminate();
              this.$worker = null;
            }
          };
          this.$startWorker = function() {
            try {
              this.$worker = this.$mode.createWorker(this);
            } catch (e10) {
              config2.warn("Could not load worker", e10);
              this.$worker = null;
            }
          };
          this.getMode = function() {
            return this.$mode;
          };
          this.$scrollTop = 0;
          this.setScrollTop = function(scrollTop) {
            if (this.$scrollTop === scrollTop || isNaN(scrollTop))
              return;
            this.$scrollTop = scrollTop;
            this._signal("changeScrollTop", scrollTop);
          };
          this.getScrollTop = function() {
            return this.$scrollTop;
          };
          this.$scrollLeft = 0;
          this.setScrollLeft = function(scrollLeft) {
            if (this.$scrollLeft === scrollLeft || isNaN(scrollLeft))
              return;
            this.$scrollLeft = scrollLeft;
            this._signal("changeScrollLeft", scrollLeft);
          };
          this.getScrollLeft = function() {
            return this.$scrollLeft;
          };
          this.getScreenWidth = function() {
            this.$computeWidth();
            if (this.lineWidgets)
              return Math.max(this.getLineWidgetMaxWidth(), this.screenWidth);
            return this.screenWidth;
          };
          this.getLineWidgetMaxWidth = function() {
            if (this.lineWidgetsWidth != null)
              return this.lineWidgetsWidth;
            var width = 0;
            this.lineWidgets.forEach(function(w2) {
              if (w2 && w2.screenWidth > width)
                width = w2.screenWidth;
            });
            return this.lineWidgetWidth = width;
          };
          this.$computeWidth = function(force) {
            if (this.$modified || force) {
              this.$modified = false;
              if (this.$useWrapMode)
                return this.screenWidth = this.$wrapLimit;
              var lines = this.doc.getAllLines();
              var cache = this.$rowLengthCache;
              var longestScreenLine = 0;
              var foldIndex = 0;
              var foldLine = this.$foldData[foldIndex];
              var foldStart = foldLine ? foldLine.start.row : Infinity;
              var len = lines.length;
              for (var i6 = 0; i6 < len; i6++) {
                if (i6 > foldStart) {
                  i6 = foldLine.end.row + 1;
                  if (i6 >= len)
                    break;
                  foldLine = this.$foldData[foldIndex++];
                  foldStart = foldLine ? foldLine.start.row : Infinity;
                }
                if (cache[i6] == null)
                  cache[i6] = this.$getStringScreenWidth(lines[i6])[0];
                if (cache[i6] > longestScreenLine)
                  longestScreenLine = cache[i6];
              }
              this.screenWidth = longestScreenLine;
            }
          };
          this.getLine = function(row) {
            return this.doc.getLine(row);
          };
          this.getLines = function(firstRow, lastRow) {
            return this.doc.getLines(firstRow, lastRow);
          };
          this.getLength = function() {
            return this.doc.getLength();
          };
          this.getTextRange = function(range) {
            return this.doc.getTextRange(range || this.selection.getRange());
          };
          this.insert = function(position, text) {
            return this.doc.insert(position, text);
          };
          this.remove = function(range) {
            return this.doc.remove(range);
          };
          this.removeFullLines = function(firstRow, lastRow) {
            return this.doc.removeFullLines(firstRow, lastRow);
          };
          this.undoChanges = function(deltas, dontSelect) {
            if (!deltas.length)
              return;
            this.$fromUndo = true;
            for (var i6 = deltas.length - 1; i6 != -1; i6--) {
              var delta = deltas[i6];
              if (delta.action == "insert" || delta.action == "remove") {
                this.doc.revertDelta(delta);
              } else if (delta.folds) {
                this.addFolds(delta.folds);
              }
            }
            if (!dontSelect && this.$undoSelect) {
              if (deltas.selectionBefore)
                this.selection.fromJSON(deltas.selectionBefore);
              else
                this.selection.setRange(this.$getUndoSelection(deltas, true));
            }
            this.$fromUndo = false;
          };
          this.redoChanges = function(deltas, dontSelect) {
            if (!deltas.length)
              return;
            this.$fromUndo = true;
            for (var i6 = 0; i6 < deltas.length; i6++) {
              var delta = deltas[i6];
              if (delta.action == "insert" || delta.action == "remove") {
                this.doc.$safeApplyDelta(delta);
              }
            }
            if (!dontSelect && this.$undoSelect) {
              if (deltas.selectionAfter)
                this.selection.fromJSON(deltas.selectionAfter);
              else
                this.selection.setRange(this.$getUndoSelection(deltas, false));
            }
            this.$fromUndo = false;
          };
          this.setUndoSelect = function(enable) {
            this.$undoSelect = enable;
          };
          this.$getUndoSelection = function(deltas, isUndo) {
            function isInsert(delta2) {
              return isUndo ? delta2.action !== "insert" : delta2.action === "insert";
            }
            var range, point;
            for (var i6 = 0; i6 < deltas.length; i6++) {
              var delta = deltas[i6];
              if (!delta.start)
                continue;
              if (!range) {
                if (isInsert(delta)) {
                  range = Range.fromPoints(delta.start, delta.end);
                } else {
                  range = Range.fromPoints(delta.start, delta.start);
                }
                continue;
              }
              if (isInsert(delta)) {
                point = delta.start;
                if (range.compare(point.row, point.column) == -1) {
                  range.setStart(point);
                }
                point = delta.end;
                if (range.compare(point.row, point.column) == 1) {
                  range.setEnd(point);
                }
              } else {
                point = delta.start;
                if (range.compare(point.row, point.column) == -1) {
                  range = Range.fromPoints(delta.start, delta.start);
                }
              }
            }
            return range;
          };
          this.replace = function(range, text) {
            return this.doc.replace(range, text);
          };
          this.moveText = function(fromRange, toPosition, copy) {
            var text = this.getTextRange(fromRange);
            var folds = this.getFoldsInRange(fromRange);
            var toRange = Range.fromPoints(toPosition, toPosition);
            if (!copy) {
              this.remove(fromRange);
              var rowDiff = fromRange.start.row - fromRange.end.row;
              var collDiff = rowDiff ? -fromRange.end.column : fromRange.start.column - fromRange.end.column;
              if (collDiff) {
                if (toRange.start.row == fromRange.end.row && toRange.start.column > fromRange.end.column)
                  toRange.start.column += collDiff;
                if (toRange.end.row == fromRange.end.row && toRange.end.column > fromRange.end.column)
                  toRange.end.column += collDiff;
              }
              if (rowDiff && toRange.start.row >= fromRange.end.row) {
                toRange.start.row += rowDiff;
                toRange.end.row += rowDiff;
              }
            }
            toRange.end = this.insert(toRange.start, text);
            if (folds.length) {
              var oldStart = fromRange.start;
              var newStart = toRange.start;
              var rowDiff = newStart.row - oldStart.row;
              var collDiff = newStart.column - oldStart.column;
              this.addFolds(folds.map(function(x2) {
                x2 = x2.clone();
                if (x2.start.row == oldStart.row)
                  x2.start.column += collDiff;
                if (x2.end.row == oldStart.row)
                  x2.end.column += collDiff;
                x2.start.row += rowDiff;
                x2.end.row += rowDiff;
                return x2;
              }));
            }
            return toRange;
          };
          this.indentRows = function(startRow, endRow, indentString) {
            indentString = indentString.replace(/\t/g, this.getTabString());
            for (var row = startRow; row <= endRow; row++)
              this.doc.insertInLine({ row, column: 0 }, indentString);
          };
          this.outdentRows = function(range) {
            var rowRange = range.collapseRows();
            var deleteRange = new Range(0, 0, 0, 0);
            var size = this.getTabSize();
            for (var i6 = rowRange.start.row; i6 <= rowRange.end.row; ++i6) {
              var line = this.getLine(i6);
              deleteRange.start.row = i6;
              deleteRange.end.row = i6;
              for (var j = 0; j < size; ++j)
                if (line.charAt(j) != " ")
                  break;
              if (j < size && line.charAt(j) == "	") {
                deleteRange.start.column = j;
                deleteRange.end.column = j + 1;
              } else {
                deleteRange.start.column = 0;
                deleteRange.end.column = j;
              }
              this.remove(deleteRange);
            }
          };
          this.$moveLines = function(firstRow, lastRow, dir) {
            firstRow = this.getRowFoldStart(firstRow);
            lastRow = this.getRowFoldEnd(lastRow);
            if (dir < 0) {
              var row = this.getRowFoldStart(firstRow + dir);
              if (row < 0)
                return 0;
              var diff = row - firstRow;
            } else if (dir > 0) {
              var row = this.getRowFoldEnd(lastRow + dir);
              if (row > this.doc.getLength() - 1)
                return 0;
              var diff = row - lastRow;
            } else {
              firstRow = this.$clipRowToDocument(firstRow);
              lastRow = this.$clipRowToDocument(lastRow);
              var diff = lastRow - firstRow + 1;
            }
            var range = new Range(firstRow, 0, lastRow, Number.MAX_VALUE);
            var folds = this.getFoldsInRange(range).map(function(x2) {
              x2 = x2.clone();
              x2.start.row += diff;
              x2.end.row += diff;
              return x2;
            });
            var lines = dir == 0 ? this.doc.getLines(firstRow, lastRow) : this.doc.removeFullLines(firstRow, lastRow);
            this.doc.insertFullLines(firstRow + diff, lines);
            folds.length && this.addFolds(folds);
            return diff;
          };
          this.moveLinesUp = function(firstRow, lastRow) {
            return this.$moveLines(firstRow, lastRow, -1);
          };
          this.moveLinesDown = function(firstRow, lastRow) {
            return this.$moveLines(firstRow, lastRow, 1);
          };
          this.duplicateLines = function(firstRow, lastRow) {
            return this.$moveLines(firstRow, lastRow, 0);
          };
          this.$clipRowToDocument = function(row) {
            return Math.max(0, Math.min(row, this.doc.getLength() - 1));
          };
          this.$clipColumnToRow = function(row, column) {
            if (column < 0)
              return 0;
            return Math.min(this.doc.getLine(row).length, column);
          };
          this.$clipPositionToDocument = function(row, column) {
            column = Math.max(0, column);
            if (row < 0) {
              row = 0;
              column = 0;
            } else {
              var len = this.doc.getLength();
              if (row >= len) {
                row = len - 1;
                column = this.doc.getLine(len - 1).length;
              } else {
                column = Math.min(this.doc.getLine(row).length, column);
              }
            }
            return {
              row,
              column
            };
          };
          this.$clipRangeToDocument = function(range) {
            if (range.start.row < 0) {
              range.start.row = 0;
              range.start.column = 0;
            } else {
              range.start.column = this.$clipColumnToRow(
                range.start.row,
                range.start.column
              );
            }
            var len = this.doc.getLength() - 1;
            if (range.end.row > len) {
              range.end.row = len;
              range.end.column = this.doc.getLine(len).length;
            } else {
              range.end.column = this.$clipColumnToRow(
                range.end.row,
                range.end.column
              );
            }
            return range;
          };
          this.$wrapLimit = 80;
          this.$useWrapMode = false;
          this.$wrapLimitRange = {
            min: null,
            max: null
          };
          this.setUseWrapMode = function(useWrapMode) {
            if (useWrapMode != this.$useWrapMode) {
              this.$useWrapMode = useWrapMode;
              this.$modified = true;
              this.$resetRowCache(0);
              if (useWrapMode) {
                var len = this.getLength();
                this.$wrapData = Array(len);
                this.$updateWrapData(0, len - 1);
              }
              this._signal("changeWrapMode");
            }
          };
          this.getUseWrapMode = function() {
            return this.$useWrapMode;
          };
          this.setWrapLimitRange = function(min, max) {
            if (this.$wrapLimitRange.min !== min || this.$wrapLimitRange.max !== max) {
              this.$wrapLimitRange = { min, max };
              this.$modified = true;
              this.$bidiHandler.markAsDirty();
              if (this.$useWrapMode)
                this._signal("changeWrapMode");
            }
          };
          this.adjustWrapLimit = function(desiredLimit, $printMargin) {
            var limits = this.$wrapLimitRange;
            if (limits.max < 0)
              limits = { min: $printMargin, max: $printMargin };
            var wrapLimit = this.$constrainWrapLimit(desiredLimit, limits.min, limits.max);
            if (wrapLimit != this.$wrapLimit && wrapLimit > 1) {
              this.$wrapLimit = wrapLimit;
              this.$modified = true;
              if (this.$useWrapMode) {
                this.$updateWrapData(0, this.getLength() - 1);
                this.$resetRowCache(0);
                this._signal("changeWrapLimit");
              }
              return true;
            }
            return false;
          };
          this.$constrainWrapLimit = function(wrapLimit, min, max) {
            if (min)
              wrapLimit = Math.max(min, wrapLimit);
            if (max)
              wrapLimit = Math.min(max, wrapLimit);
            return wrapLimit;
          };
          this.getWrapLimit = function() {
            return this.$wrapLimit;
          };
          this.setWrapLimit = function(limit) {
            this.setWrapLimitRange(limit, limit);
          };
          this.getWrapLimitRange = function() {
            return {
              min: this.$wrapLimitRange.min,
              max: this.$wrapLimitRange.max
            };
          };
          this.$updateInternalDataOnChange = function(delta) {
            var useWrapMode = this.$useWrapMode;
            var action = delta.action;
            var start = delta.start;
            var end = delta.end;
            var firstRow = start.row;
            var lastRow = end.row;
            var len = lastRow - firstRow;
            var removedFolds = null;
            this.$updating = true;
            if (len != 0) {
              if (action === "remove") {
                this[useWrapMode ? "$wrapData" : "$rowLengthCache"].splice(firstRow, len);
                var foldLines = this.$foldData;
                removedFolds = this.getFoldsInRange(delta);
                this.removeFolds(removedFolds);
                var foldLine = this.getFoldLine(end.row);
                var idx = 0;
                if (foldLine) {
                  foldLine.addRemoveChars(end.row, end.column, start.column - end.column);
                  foldLine.shiftRow(-len);
                  var foldLineBefore = this.getFoldLine(firstRow);
                  if (foldLineBefore && foldLineBefore !== foldLine) {
                    foldLineBefore.merge(foldLine);
                    foldLine = foldLineBefore;
                  }
                  idx = foldLines.indexOf(foldLine) + 1;
                }
                for (idx; idx < foldLines.length; idx++) {
                  var foldLine = foldLines[idx];
                  if (foldLine.start.row >= end.row) {
                    foldLine.shiftRow(-len);
                  }
                }
                lastRow = firstRow;
              } else {
                var args = Array(len);
                args.unshift(firstRow, 0);
                var arr = useWrapMode ? this.$wrapData : this.$rowLengthCache;
                arr.splice.apply(arr, args);
                var foldLines = this.$foldData;
                var foldLine = this.getFoldLine(firstRow);
                var idx = 0;
                if (foldLine) {
                  var cmp = foldLine.range.compareInside(start.row, start.column);
                  if (cmp == 0) {
                    foldLine = foldLine.split(start.row, start.column);
                    if (foldLine) {
                      foldLine.shiftRow(len);
                      foldLine.addRemoveChars(lastRow, 0, end.column - start.column);
                    }
                  } else if (cmp == -1) {
                    foldLine.addRemoveChars(firstRow, 0, end.column - start.column);
                    foldLine.shiftRow(len);
                  }
                  idx = foldLines.indexOf(foldLine) + 1;
                }
                for (idx; idx < foldLines.length; idx++) {
                  var foldLine = foldLines[idx];
                  if (foldLine.start.row >= firstRow) {
                    foldLine.shiftRow(len);
                  }
                }
              }
            } else {
              len = Math.abs(delta.start.column - delta.end.column);
              if (action === "remove") {
                removedFolds = this.getFoldsInRange(delta);
                this.removeFolds(removedFolds);
                len = -len;
              }
              var foldLine = this.getFoldLine(firstRow);
              if (foldLine) {
                foldLine.addRemoveChars(firstRow, start.column, len);
              }
            }
            if (useWrapMode && this.$wrapData.length != this.doc.getLength()) {
              console.error("doc.getLength() and $wrapData.length have to be the same!");
            }
            this.$updating = false;
            if (useWrapMode)
              this.$updateWrapData(firstRow, lastRow);
            else
              this.$updateRowLengthCache(firstRow, lastRow);
            return removedFolds;
          };
          this.$updateRowLengthCache = function(firstRow, lastRow, b2) {
            this.$rowLengthCache[firstRow] = null;
            this.$rowLengthCache[lastRow] = null;
          };
          this.$updateWrapData = function(firstRow, lastRow) {
            var lines = this.doc.getAllLines();
            var tabSize = this.getTabSize();
            var wrapData = this.$wrapData;
            var wrapLimit = this.$wrapLimit;
            var tokens;
            var foldLine;
            var row = firstRow;
            lastRow = Math.min(lastRow, lines.length - 1);
            while (row <= lastRow) {
              foldLine = this.getFoldLine(row, foldLine);
              if (!foldLine) {
                tokens = this.$getDisplayTokens(lines[row]);
                wrapData[row] = this.$computeWrapSplits(tokens, wrapLimit, tabSize);
                row++;
              } else {
                tokens = [];
                foldLine.walk(
                  function(placeholder, row2, column, lastColumn) {
                    var walkTokens;
                    if (placeholder != null) {
                      walkTokens = this.$getDisplayTokens(
                        placeholder,
                        tokens.length
                      );
                      walkTokens[0] = PLACEHOLDER_START;
                      for (var i6 = 1; i6 < walkTokens.length; i6++) {
                        walkTokens[i6] = PLACEHOLDER_BODY;
                      }
                    } else {
                      walkTokens = this.$getDisplayTokens(
                        lines[row2].substring(lastColumn, column),
                        tokens.length
                      );
                    }
                    tokens = tokens.concat(walkTokens);
                  }.bind(this),
                  foldLine.end.row,
                  lines[foldLine.end.row].length + 1
                );
                wrapData[foldLine.start.row] = this.$computeWrapSplits(tokens, wrapLimit, tabSize);
                row = foldLine.end.row + 1;
              }
            }
          };
          var CHAR = 1, CHAR_EXT = 2, PLACEHOLDER_START = 3, PLACEHOLDER_BODY = 4, PUNCTUATION = 9, SPACE = 10, TAB = 11, TAB_SPACE = 12;
          this.$computeWrapSplits = function(tokens, wrapLimit, tabSize) {
            if (tokens.length == 0) {
              return [];
            }
            var splits = [];
            var displayLength = tokens.length;
            var lastSplit = 0, lastDocSplit = 0;
            var isCode = this.$wrapAsCode;
            var indentedSoftWrap = this.$indentedSoftWrap;
            var maxIndent = wrapLimit <= Math.max(2 * tabSize, 8) || indentedSoftWrap === false ? 0 : Math.floor(wrapLimit / 2);
            function getWrapIndent() {
              var indentation = 0;
              if (maxIndent === 0)
                return indentation;
              if (indentedSoftWrap) {
                for (var i6 = 0; i6 < tokens.length; i6++) {
                  var token = tokens[i6];
                  if (token == SPACE)
                    indentation += 1;
                  else if (token == TAB)
                    indentation += tabSize;
                  else if (token == TAB_SPACE)
                    continue;
                  else
                    break;
                }
              }
              if (isCode && indentedSoftWrap !== false)
                indentation += tabSize;
              return Math.min(indentation, maxIndent);
            }
            function addSplit(screenPos) {
              var len = screenPos - lastSplit;
              for (var i6 = lastSplit; i6 < screenPos; i6++) {
                var ch = tokens[i6];
                if (ch === 12 || ch === 2)
                  len -= 1;
              }
              if (!splits.length) {
                indent = getWrapIndent();
                splits.indent = indent;
              }
              lastDocSplit += len;
              splits.push(lastDocSplit);
              lastSplit = screenPos;
            }
            var indent = 0;
            while (displayLength - lastSplit > wrapLimit - indent) {
              var split = lastSplit + wrapLimit - indent;
              if (tokens[split - 1] >= SPACE && tokens[split] >= SPACE) {
                addSplit(split);
                continue;
              }
              if (tokens[split] == PLACEHOLDER_START || tokens[split] == PLACEHOLDER_BODY) {
                for (split; split != lastSplit - 1; split--) {
                  if (tokens[split] == PLACEHOLDER_START) {
                    break;
                  }
                }
                if (split > lastSplit) {
                  addSplit(split);
                  continue;
                }
                split = lastSplit + wrapLimit;
                for (split; split < tokens.length; split++) {
                  if (tokens[split] != PLACEHOLDER_BODY) {
                    break;
                  }
                }
                if (split == tokens.length) {
                  break;
                }
                addSplit(split);
                continue;
              }
              var minSplit = Math.max(split - (wrapLimit - (wrapLimit >> 2)), lastSplit - 1);
              while (split > minSplit && tokens[split] < PLACEHOLDER_START) {
                split--;
              }
              if (isCode) {
                while (split > minSplit && tokens[split] < PLACEHOLDER_START) {
                  split--;
                }
                while (split > minSplit && tokens[split] == PUNCTUATION) {
                  split--;
                }
              } else {
                while (split > minSplit && tokens[split] < SPACE) {
                  split--;
                }
              }
              if (split > minSplit) {
                addSplit(++split);
                continue;
              }
              split = lastSplit + wrapLimit;
              if (tokens[split] == CHAR_EXT)
                split--;
              addSplit(split - indent);
            }
            return splits;
          };
          this.$getDisplayTokens = function(str, offset) {
            var arr = [];
            var tabSize;
            offset = offset || 0;
            for (var i6 = 0; i6 < str.length; i6++) {
              var c2 = str.charCodeAt(i6);
              if (c2 == 9) {
                tabSize = this.getScreenTabSize(arr.length + offset);
                arr.push(TAB);
                for (var n9 = 1; n9 < tabSize; n9++) {
                  arr.push(TAB_SPACE);
                }
              } else if (c2 == 32) {
                arr.push(SPACE);
              } else if (c2 > 39 && c2 < 48 || c2 > 57 && c2 < 64) {
                arr.push(PUNCTUATION);
              } else if (c2 >= 4352 && isFullWidth(c2)) {
                arr.push(CHAR, CHAR_EXT);
              } else {
                arr.push(CHAR);
              }
            }
            return arr;
          };
          this.$getStringScreenWidth = function(str, maxScreenColumn, screenColumn) {
            if (maxScreenColumn == 0)
              return [0, 0];
            if (maxScreenColumn == null)
              maxScreenColumn = Infinity;
            screenColumn = screenColumn || 0;
            var c2, column;
            for (column = 0; column < str.length; column++) {
              c2 = str.charCodeAt(column);
              if (c2 == 9) {
                screenColumn += this.getScreenTabSize(screenColumn);
              } else if (c2 >= 4352 && isFullWidth(c2)) {
                screenColumn += 2;
              } else {
                screenColumn += 1;
              }
              if (screenColumn > maxScreenColumn) {
                break;
              }
            }
            return [screenColumn, column];
          };
          this.lineWidgets = null;
          this.getRowLength = function(row) {
            var h5 = 1;
            if (this.lineWidgets)
              h5 += this.lineWidgets[row] && this.lineWidgets[row].rowCount || 0;
            if (!this.$useWrapMode || !this.$wrapData[row])
              return h5;
            else
              return this.$wrapData[row].length + h5;
          };
          this.getRowLineCount = function(row) {
            if (!this.$useWrapMode || !this.$wrapData[row]) {
              return 1;
            } else {
              return this.$wrapData[row].length + 1;
            }
          };
          this.getRowWrapIndent = function(screenRow) {
            if (this.$useWrapMode) {
              var pos = this.screenToDocumentPosition(screenRow, Number.MAX_VALUE);
              var splits = this.$wrapData[pos.row];
              return splits.length && splits[0] < pos.column ? splits.indent : 0;
            } else {
              return 0;
            }
          };
          this.getScreenLastRowColumn = function(screenRow) {
            var pos = this.screenToDocumentPosition(screenRow, Number.MAX_VALUE);
            return this.documentToScreenColumn(pos.row, pos.column);
          };
          this.getDocumentLastRowColumn = function(docRow, docColumn) {
            var screenRow = this.documentToScreenRow(docRow, docColumn);
            return this.getScreenLastRowColumn(screenRow);
          };
          this.getDocumentLastRowColumnPosition = function(docRow, docColumn) {
            var screenRow = this.documentToScreenRow(docRow, docColumn);
            return this.screenToDocumentPosition(screenRow, Number.MAX_VALUE / 10);
          };
          this.getRowSplitData = function(row) {
            if (!this.$useWrapMode) {
              return void 0;
            } else {
              return this.$wrapData[row];
            }
          };
          this.getScreenTabSize = function(screenColumn) {
            return this.$tabSize - (screenColumn % this.$tabSize | 0);
          };
          this.screenToDocumentRow = function(screenRow, screenColumn) {
            return this.screenToDocumentPosition(screenRow, screenColumn).row;
          };
          this.screenToDocumentColumn = function(screenRow, screenColumn) {
            return this.screenToDocumentPosition(screenRow, screenColumn).column;
          };
          this.screenToDocumentPosition = function(screenRow, screenColumn, offsetX) {
            if (screenRow < 0)
              return { row: 0, column: 0 };
            var line;
            var docRow = 0;
            var docColumn = 0;
            var column;
            var row = 0;
            var rowLength = 0;
            var rowCache = this.$screenRowCache;
            var i6 = this.$getRowCacheIndex(rowCache, screenRow);
            var l7 = rowCache.length;
            if (l7 && i6 >= 0) {
              var row = rowCache[i6];
              var docRow = this.$docRowCache[i6];
              var doCache = screenRow > rowCache[l7 - 1];
            } else {
              var doCache = !l7;
            }
            var maxRow = this.getLength() - 1;
            var foldLine = this.getNextFoldLine(docRow);
            var foldStart = foldLine ? foldLine.start.row : Infinity;
            while (row <= screenRow) {
              rowLength = this.getRowLength(docRow);
              if (row + rowLength > screenRow || docRow >= maxRow) {
                break;
              } else {
                row += rowLength;
                docRow++;
                if (docRow > foldStart) {
                  docRow = foldLine.end.row + 1;
                  foldLine = this.getNextFoldLine(docRow, foldLine);
                  foldStart = foldLine ? foldLine.start.row : Infinity;
                }
              }
              if (doCache) {
                this.$docRowCache.push(docRow);
                this.$screenRowCache.push(row);
              }
            }
            if (foldLine && foldLine.start.row <= docRow) {
              line = this.getFoldDisplayLine(foldLine);
              docRow = foldLine.start.row;
            } else if (row + rowLength <= screenRow || docRow > maxRow) {
              return {
                row: maxRow,
                column: this.getLine(maxRow).length
              };
            } else {
              line = this.getLine(docRow);
              foldLine = null;
            }
            var wrapIndent = 0, splitIndex = Math.floor(screenRow - row);
            if (this.$useWrapMode) {
              var splits = this.$wrapData[docRow];
              if (splits) {
                column = splits[splitIndex];
                if (splitIndex > 0 && splits.length) {
                  wrapIndent = splits.indent;
                  docColumn = splits[splitIndex - 1] || splits[splits.length - 1];
                  line = line.substring(docColumn);
                }
              }
            }
            if (offsetX !== void 0 && this.$bidiHandler.isBidiRow(row + splitIndex, docRow, splitIndex))
              screenColumn = this.$bidiHandler.offsetToCol(offsetX);
            docColumn += this.$getStringScreenWidth(line, screenColumn - wrapIndent)[1];
            if (this.$useWrapMode && docColumn >= column)
              docColumn = column - 1;
            if (foldLine)
              return foldLine.idxToPosition(docColumn);
            return { row: docRow, column: docColumn };
          };
          this.documentToScreenPosition = function(docRow, docColumn) {
            if (typeof docColumn === "undefined")
              var pos = this.$clipPositionToDocument(docRow.row, docRow.column);
            else
              pos = this.$clipPositionToDocument(docRow, docColumn);
            docRow = pos.row;
            docColumn = pos.column;
            var screenRow = 0;
            var foldStartRow = null;
            var fold = null;
            fold = this.getFoldAt(docRow, docColumn, 1);
            if (fold) {
              docRow = fold.start.row;
              docColumn = fold.start.column;
            }
            var rowEnd, row = 0;
            var rowCache = this.$docRowCache;
            var i6 = this.$getRowCacheIndex(rowCache, docRow);
            var l7 = rowCache.length;
            if (l7 && i6 >= 0) {
              var row = rowCache[i6];
              var screenRow = this.$screenRowCache[i6];
              var doCache = docRow > rowCache[l7 - 1];
            } else {
              var doCache = !l7;
            }
            var foldLine = this.getNextFoldLine(row);
            var foldStart = foldLine ? foldLine.start.row : Infinity;
            while (row < docRow) {
              if (row >= foldStart) {
                rowEnd = foldLine.end.row + 1;
                if (rowEnd > docRow)
                  break;
                foldLine = this.getNextFoldLine(rowEnd, foldLine);
                foldStart = foldLine ? foldLine.start.row : Infinity;
              } else {
                rowEnd = row + 1;
              }
              screenRow += this.getRowLength(row);
              row = rowEnd;
              if (doCache) {
                this.$docRowCache.push(row);
                this.$screenRowCache.push(screenRow);
              }
            }
            var textLine = "";
            if (foldLine && row >= foldStart) {
              textLine = this.getFoldDisplayLine(foldLine, docRow, docColumn);
              foldStartRow = foldLine.start.row;
            } else {
              textLine = this.getLine(docRow).substring(0, docColumn);
              foldStartRow = docRow;
            }
            var wrapIndent = 0;
            if (this.$useWrapMode) {
              var wrapRow = this.$wrapData[foldStartRow];
              if (wrapRow) {
                var screenRowOffset = 0;
                while (textLine.length >= wrapRow[screenRowOffset]) {
                  screenRow++;
                  screenRowOffset++;
                }
                textLine = textLine.substring(
                  wrapRow[screenRowOffset - 1] || 0,
                  textLine.length
                );
                wrapIndent = screenRowOffset > 0 ? wrapRow.indent : 0;
              }
            }
            if (this.lineWidgets && this.lineWidgets[row] && this.lineWidgets[row].rowsAbove)
              screenRow += this.lineWidgets[row].rowsAbove;
            return {
              row: screenRow,
              column: wrapIndent + this.$getStringScreenWidth(textLine)[0]
            };
          };
          this.documentToScreenColumn = function(row, docColumn) {
            return this.documentToScreenPosition(row, docColumn).column;
          };
          this.documentToScreenRow = function(docRow, docColumn) {
            return this.documentToScreenPosition(docRow, docColumn).row;
          };
          this.getScreenLength = function() {
            var screenRows = 0;
            var fold = null;
            if (!this.$useWrapMode) {
              screenRows = this.getLength();
              var foldData = this.$foldData;
              for (var i6 = 0; i6 < foldData.length; i6++) {
                fold = foldData[i6];
                screenRows -= fold.end.row - fold.start.row;
              }
            } else {
              var lastRow = this.$wrapData.length;
              var row = 0, i6 = 0;
              var fold = this.$foldData[i6++];
              var foldStart = fold ? fold.start.row : Infinity;
              while (row < lastRow) {
                var splits = this.$wrapData[row];
                screenRows += splits ? splits.length + 1 : 1;
                row++;
                if (row > foldStart) {
                  row = fold.end.row + 1;
                  fold = this.$foldData[i6++];
                  foldStart = fold ? fold.start.row : Infinity;
                }
              }
            }
            if (this.lineWidgets)
              screenRows += this.$getWidgetScreenLength();
            return screenRows;
          };
          this.$setFontMetrics = function(fm) {
            if (!this.$enableVarChar)
              return;
            this.$getStringScreenWidth = function(str, maxScreenColumn, screenColumn) {
              if (maxScreenColumn === 0)
                return [0, 0];
              if (!maxScreenColumn)
                maxScreenColumn = Infinity;
              screenColumn = screenColumn || 0;
              var c2, column;
              for (column = 0; column < str.length; column++) {
                c2 = str.charAt(column);
                if (c2 === "	") {
                  screenColumn += this.getScreenTabSize(screenColumn);
                } else {
                  screenColumn += fm.getCharacterWidth(c2);
                }
                if (screenColumn > maxScreenColumn) {
                  break;
                }
              }
              return [screenColumn, column];
            };
          };
          this.destroy = function() {
            if (!this.destroyed) {
              this.bgTokenizer.setDocument(null);
              this.bgTokenizer.cleanup();
              this.destroyed = true;
            }
            this.$stopWorker();
            this.removeAllListeners();
            if (this.doc) {
              this.doc.off("change", this.$onChange);
            }
            this.selection.detach();
          };
          this.isFullWidth = isFullWidth;
          function isFullWidth(c2) {
            if (c2 < 4352)
              return false;
            return c2 >= 4352 && c2 <= 4447 || c2 >= 4515 && c2 <= 4519 || c2 >= 4602 && c2 <= 4607 || c2 >= 9001 && c2 <= 9002 || c2 >= 11904 && c2 <= 11929 || c2 >= 11931 && c2 <= 12019 || c2 >= 12032 && c2 <= 12245 || c2 >= 12272 && c2 <= 12283 || c2 >= 12288 && c2 <= 12350 || c2 >= 12353 && c2 <= 12438 || c2 >= 12441 && c2 <= 12543 || c2 >= 12549 && c2 <= 12589 || c2 >= 12593 && c2 <= 12686 || c2 >= 12688 && c2 <= 12730 || c2 >= 12736 && c2 <= 12771 || c2 >= 12784 && c2 <= 12830 || c2 >= 12832 && c2 <= 12871 || c2 >= 12880 && c2 <= 13054 || c2 >= 13056 && c2 <= 19903 || c2 >= 19968 && c2 <= 42124 || c2 >= 42128 && c2 <= 42182 || c2 >= 43360 && c2 <= 43388 || c2 >= 44032 && c2 <= 55203 || c2 >= 55216 && c2 <= 55238 || c2 >= 55243 && c2 <= 55291 || c2 >= 63744 && c2 <= 64255 || c2 >= 65040 && c2 <= 65049 || c2 >= 65072 && c2 <= 65106 || c2 >= 65108 && c2 <= 65126 || c2 >= 65128 && c2 <= 65131 || c2 >= 65281 && c2 <= 65376 || c2 >= 65504 && c2 <= 65510;
          }
        }).call(EditSession2.prototype);
        require3("./edit_session/folding").Folding.call(EditSession2.prototype);
        require3("./edit_session/bracket_match").BracketMatch.call(EditSession2.prototype);
        config2.defineOptions(EditSession2.prototype, "session", {
          wrap: {
            set: function(value) {
              if (!value || value == "off")
                value = false;
              else if (value == "free")
                value = true;
              else if (value == "printMargin")
                value = -1;
              else if (typeof value == "string")
                value = parseInt(value, 10) || false;
              if (this.$wrap == value)
                return;
              this.$wrap = value;
              if (!value) {
                this.setUseWrapMode(false);
              } else {
                var col = typeof value == "number" ? value : null;
                this.setWrapLimitRange(col, col);
                this.setUseWrapMode(true);
              }
            },
            get: function() {
              if (this.getUseWrapMode()) {
                if (this.$wrap == -1)
                  return "printMargin";
                if (!this.getWrapLimitRange().min)
                  return "free";
                return this.$wrap;
              }
              return "off";
            },
            handlesSet: true
          },
          wrapMethod: {
            set: function(val) {
              val = val == "auto" ? this.$mode.type != "text" : val != "text";
              if (val != this.$wrapAsCode) {
                this.$wrapAsCode = val;
                if (this.$useWrapMode) {
                  this.$useWrapMode = false;
                  this.setUseWrapMode(true);
                }
              }
            },
            initialValue: "auto"
          },
          indentedSoftWrap: {
            set: function() {
              if (this.$useWrapMode) {
                this.$useWrapMode = false;
                this.setUseWrapMode(true);
              }
            },
            initialValue: true
          },
          firstLineNumber: {
            set: function() {
              this._signal("changeBreakpoint");
            },
            initialValue: 1
          },
          useWorker: {
            set: function(useWorker) {
              this.$useWorker = useWorker;
              this.$stopWorker();
              if (useWorker)
                this.$startWorker();
            },
            initialValue: true
          },
          useSoftTabs: { initialValue: true },
          tabSize: {
            set: function(tabSize) {
              tabSize = parseInt(tabSize);
              if (tabSize > 0 && this.$tabSize !== tabSize) {
                this.$modified = true;
                this.$rowLengthCache = [];
                this.$tabSize = tabSize;
                this._signal("changeTabSize");
              }
            },
            initialValue: 4,
            handlesSet: true
          },
          navigateWithinSoftTabs: { initialValue: false },
          foldStyle: {
            set: function(val) {
              this.setFoldStyle(val);
            },
            handlesSet: true
          },
          overwrite: {
            set: function(val) {
              this._signal("changeOverwrite");
            },
            initialValue: false
          },
          newLineMode: {
            set: function(val) {
              this.doc.setNewLineMode(val);
            },
            get: function() {
              return this.doc.getNewLineMode();
            },
            handlesSet: true
          },
          mode: {
            set: function(val) {
              this.setMode(val);
            },
            get: function() {
              return this.$modeId;
            },
            handlesSet: true
          }
        });
        exports2.EditSession = EditSession2;
      });
      ace.define("ace/search", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function(require3, exports2, module2) {
        "use strict";
        var lang = require3("./lib/lang");
        var oop = require3("./lib/oop");
        var Range = require3("./range").Range;
        var Search = function() {
          this.$options = {};
        };
        (function() {
          this.set = function(options) {
            oop.mixin(this.$options, options);
            return this;
          };
          this.getOptions = function() {
            return lang.copyObject(this.$options);
          };
          this.setOptions = function(options) {
            this.$options = options;
          };
          this.find = function(session) {
            var options = this.$options;
            var iterator = this.$matchIterator(session, options);
            if (!iterator)
              return false;
            var firstRange = null;
            iterator.forEach(function(sr, sc, er, ec) {
              firstRange = new Range(sr, sc, er, ec);
              if (sc == ec && options.start && options.start.start && options.skipCurrent != false && firstRange.isEqual(options.start)) {
                firstRange = null;
                return false;
              }
              return true;
            });
            return firstRange;
          };
          this.findAll = function(session) {
            var options = this.$options;
            if (!options.needle)
              return [];
            this.$assembleRegExp(options);
            var range = options.range;
            var lines = range ? session.getLines(range.start.row, range.end.row) : session.doc.getAllLines();
            var ranges = [];
            var re = options.re;
            if (options.$isMultiLine) {
              var len = re.length;
              var maxRow = lines.length - len;
              var prevRange;
              outer:
                for (var row = re.offset || 0; row <= maxRow; row++) {
                  for (var j = 0; j < len; j++)
                    if (lines[row + j].search(re[j]) == -1)
                      continue outer;
                  var startLine = lines[row];
                  var line = lines[row + len - 1];
                  var startIndex = startLine.length - startLine.match(re[0])[0].length;
                  var endIndex = line.match(re[len - 1])[0].length;
                  if (prevRange && prevRange.end.row === row && prevRange.end.column > startIndex) {
                    continue;
                  }
                  ranges.push(prevRange = new Range(
                    row,
                    startIndex,
                    row + len - 1,
                    endIndex
                  ));
                  if (len > 2)
                    row = row + len - 2;
                }
            } else {
              for (var i6 = 0; i6 < lines.length; i6++) {
                var matches = lang.getMatchOffsets(lines[i6], re);
                for (var j = 0; j < matches.length; j++) {
                  var match = matches[j];
                  ranges.push(new Range(i6, match.offset, i6, match.offset + match.length));
                }
              }
            }
            if (range) {
              var startColumn = range.start.column;
              var endColumn = range.start.column;
              var i6 = 0, j = ranges.length - 1;
              while (i6 < j && ranges[i6].start.column < startColumn && ranges[i6].start.row == range.start.row)
                i6++;
              while (i6 < j && ranges[j].end.column > endColumn && ranges[j].end.row == range.end.row)
                j--;
              ranges = ranges.slice(i6, j + 1);
              for (i6 = 0, j = ranges.length; i6 < j; i6++) {
                ranges[i6].start.row += range.start.row;
                ranges[i6].end.row += range.start.row;
              }
            }
            return ranges;
          };
          this.replace = function(input, replacement) {
            var options = this.$options;
            var re = this.$assembleRegExp(options);
            if (options.$isMultiLine)
              return replacement;
            if (!re)
              return;
            var match = re.exec(input);
            if (!match || match[0].length != input.length)
              return null;
            replacement = input.replace(re, replacement);
            if (options.preserveCase) {
              replacement = replacement.split("");
              for (var i6 = Math.min(input.length, input.length); i6--; ) {
                var ch = input[i6];
                if (ch && ch.toLowerCase() != ch)
                  replacement[i6] = replacement[i6].toUpperCase();
                else
                  replacement[i6] = replacement[i6].toLowerCase();
              }
              replacement = replacement.join("");
            }
            return replacement;
          };
          this.$assembleRegExp = function(options, $disableFakeMultiline) {
            if (options.needle instanceof RegExp)
              return options.re = options.needle;
            var needle = options.needle;
            if (!options.needle)
              return options.re = false;
            if (!options.regExp)
              needle = lang.escapeRegExp(needle);
            if (options.wholeWord)
              needle = addWordBoundary(needle, options);
            var modifier = options.caseSensitive ? "gm" : "gmi";
            options.$isMultiLine = !$disableFakeMultiline && /[\n\r]/.test(needle);
            if (options.$isMultiLine)
              return options.re = this.$assembleMultilineRegExp(needle, modifier);
            try {
              var re = new RegExp(needle, modifier);
            } catch (e10) {
              re = false;
            }
            return options.re = re;
          };
          this.$assembleMultilineRegExp = function(needle, modifier) {
            var parts = needle.replace(/\r\n|\r|\n/g, "$\n^").split("\n");
            var re = [];
            for (var i6 = 0; i6 < parts.length; i6++)
              try {
                re.push(new RegExp(parts[i6], modifier));
              } catch (e10) {
                return false;
              }
            return re;
          };
          this.$matchIterator = function(session, options) {
            var re = this.$assembleRegExp(options);
            if (!re)
              return false;
            var backwards = options.backwards == true;
            var skipCurrent = options.skipCurrent != false;
            var range = options.range;
            var start = options.start;
            if (!start)
              start = range ? range[backwards ? "end" : "start"] : session.selection.getRange();
            if (start.start)
              start = start[skipCurrent != backwards ? "end" : "start"];
            var firstRow = range ? range.start.row : 0;
            var lastRow = range ? range.end.row : session.getLength() - 1;
            if (backwards) {
              var forEach = function(callback) {
                var row = start.row;
                if (forEachInLine(row, start.column, callback))
                  return;
                for (row--; row >= firstRow; row--)
                  if (forEachInLine(row, Number.MAX_VALUE, callback))
                    return;
                if (options.wrap == false)
                  return;
                for (row = lastRow, firstRow = start.row; row >= firstRow; row--)
                  if (forEachInLine(row, Number.MAX_VALUE, callback))
                    return;
              };
            } else {
              var forEach = function(callback) {
                var row = start.row;
                if (forEachInLine(row, start.column, callback))
                  return;
                for (row = row + 1; row <= lastRow; row++)
                  if (forEachInLine(row, 0, callback))
                    return;
                if (options.wrap == false)
                  return;
                for (row = firstRow, lastRow = start.row; row <= lastRow; row++)
                  if (forEachInLine(row, 0, callback))
                    return;
              };
            }
            if (options.$isMultiLine) {
              var len = re.length;
              var forEachInLine = function(row, offset, callback) {
                var startRow = backwards ? row - len + 1 : row;
                if (startRow < 0 || startRow + len > session.getLength())
                  return;
                var line = session.getLine(startRow);
                var startIndex = line.search(re[0]);
                if (!backwards && startIndex < offset || startIndex === -1)
                  return;
                for (var i6 = 1; i6 < len; i6++) {
                  line = session.getLine(startRow + i6);
                  if (line.search(re[i6]) == -1)
                    return;
                }
                var endIndex = line.match(re[len - 1])[0].length;
                if (backwards && endIndex > offset)
                  return;
                if (callback(startRow, startIndex, startRow + len - 1, endIndex))
                  return true;
              };
            } else if (backwards) {
              var forEachInLine = function(row, endIndex, callback) {
                var line = session.getLine(row);
                var matches = [];
                var m2, last = 0;
                re.lastIndex = 0;
                while (m2 = re.exec(line)) {
                  var length = m2[0].length;
                  last = m2.index;
                  if (!length) {
                    if (last >= line.length)
                      break;
                    re.lastIndex = last += 1;
                  }
                  if (m2.index + length > endIndex)
                    break;
                  matches.push(m2.index, length);
                }
                for (var i6 = matches.length - 1; i6 >= 0; i6 -= 2) {
                  var column = matches[i6 - 1];
                  var length = matches[i6];
                  if (callback(row, column, row, column + length))
                    return true;
                }
              };
            } else {
              var forEachInLine = function(row, startIndex, callback) {
                var line = session.getLine(row);
                var last;
                var m2;
                re.lastIndex = startIndex;
                while (m2 = re.exec(line)) {
                  var length = m2[0].length;
                  last = m2.index;
                  if (callback(row, last, row, last + length))
                    return true;
                  if (!length) {
                    re.lastIndex = last += 1;
                    if (last >= line.length)
                      return false;
                  }
                }
              };
            }
            return { forEach };
          };
        }).call(Search.prototype);
        function addWordBoundary(needle, options) {
          function wordBoundary(c2) {
            if (/\w/.test(c2) || options.regExp)
              return "\\b";
            return "";
          }
          return wordBoundary(needle[0]) + needle + wordBoundary(needle[needle.length - 1]);
        }
        exports2.Search = Search;
      });
      ace.define("ace/keyboard/hash_handler", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function(require3, exports2, module2) {
        "use strict";
        var keyUtil = require3("../lib/keys");
        var useragent = require3("../lib/useragent");
        var KEY_MODS = keyUtil.KEY_MODS;
        function HashHandler(config2, platform) {
          this.platform = platform || (useragent.isMac ? "mac" : "win");
          this.commands = {};
          this.commandKeyBinding = {};
          this.addCommands(config2);
          this.$singleCommand = true;
        }
        function MultiHashHandler(config2, platform) {
          HashHandler.call(this, config2, platform);
          this.$singleCommand = false;
        }
        MultiHashHandler.prototype = HashHandler.prototype;
        (function() {
          this.addCommand = function(command) {
            if (this.commands[command.name])
              this.removeCommand(command);
            this.commands[command.name] = command;
            if (command.bindKey)
              this._buildKeyHash(command);
          };
          this.removeCommand = function(command, keepCommand) {
            var name2 = command && (typeof command === "string" ? command : command.name);
            command = this.commands[name2];
            if (!keepCommand)
              delete this.commands[name2];
            var ckb = this.commandKeyBinding;
            for (var keyId in ckb) {
              var cmdGroup = ckb[keyId];
              if (cmdGroup == command) {
                delete ckb[keyId];
              } else if (Array.isArray(cmdGroup)) {
                var i6 = cmdGroup.indexOf(command);
                if (i6 != -1) {
                  cmdGroup.splice(i6, 1);
                  if (cmdGroup.length == 1)
                    ckb[keyId] = cmdGroup[0];
                }
              }
            }
          };
          this.bindKey = function(key, command, position) {
            if (typeof key == "object" && key) {
              if (position == void 0)
                position = key.position;
              key = key[this.platform];
            }
            if (!key)
              return;
            if (typeof command == "function")
              return this.addCommand({ exec: command, bindKey: key, name: command.name || key });
            key.split("|").forEach(function(keyPart) {
              var chain = "";
              if (keyPart.indexOf(" ") != -1) {
                var parts = keyPart.split(/\s+/);
                keyPart = parts.pop();
                parts.forEach(function(keyPart2) {
                  var binding2 = this.parseKeys(keyPart2);
                  var id2 = KEY_MODS[binding2.hashId] + binding2.key;
                  chain += (chain ? " " : "") + id2;
                  this._addCommandToBinding(chain, "chainKeys");
                }, this);
                chain += " ";
              }
              var binding = this.parseKeys(keyPart);
              var id = KEY_MODS[binding.hashId] + binding.key;
              this._addCommandToBinding(chain + id, command, position);
            }, this);
          };
          function getPosition(command) {
            return typeof command == "object" && command.bindKey && command.bindKey.position || (command.isDefault ? -100 : 0);
          }
          this._addCommandToBinding = function(keyId, command, position) {
            var ckb = this.commandKeyBinding, i6;
            if (!command) {
              delete ckb[keyId];
            } else if (!ckb[keyId] || this.$singleCommand) {
              ckb[keyId] = command;
            } else {
              if (!Array.isArray(ckb[keyId])) {
                ckb[keyId] = [ckb[keyId]];
              } else if ((i6 = ckb[keyId].indexOf(command)) != -1) {
                ckb[keyId].splice(i6, 1);
              }
              if (typeof position != "number") {
                position = getPosition(command);
              }
              var commands = ckb[keyId];
              for (i6 = 0; i6 < commands.length; i6++) {
                var other = commands[i6];
                var otherPos = getPosition(other);
                if (otherPos > position)
                  break;
              }
              commands.splice(i6, 0, command);
            }
          };
          this.addCommands = function(commands) {
            commands && Object.keys(commands).forEach(function(name2) {
              var command = commands[name2];
              if (!command)
                return;
              if (typeof command === "string")
                return this.bindKey(command, name2);
              if (typeof command === "function")
                command = { exec: command };
              if (typeof command !== "object")
                return;
              if (!command.name)
                command.name = name2;
              this.addCommand(command);
            }, this);
          };
          this.removeCommands = function(commands) {
            Object.keys(commands).forEach(function(name2) {
              this.removeCommand(commands[name2]);
            }, this);
          };
          this.bindKeys = function(keyList) {
            Object.keys(keyList).forEach(function(key) {
              this.bindKey(key, keyList[key]);
            }, this);
          };
          this._buildKeyHash = function(command) {
            this.bindKey(command.bindKey, command);
          };
          this.parseKeys = function(keys) {
            var parts = keys.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function(x2) {
              return x2;
            });
            var key = parts.pop();
            var keyCode = keyUtil[key];
            if (keyUtil.FUNCTION_KEYS[keyCode])
              key = keyUtil.FUNCTION_KEYS[keyCode].toLowerCase();
            else if (!parts.length)
              return { key, hashId: -1 };
            else if (parts.length == 1 && parts[0] == "shift")
              return { key: key.toUpperCase(), hashId: -1 };
            var hashId = 0;
            for (var i6 = parts.length; i6--; ) {
              var modifier = keyUtil.KEY_MODS[parts[i6]];
              if (modifier == null) {
                if (typeof console != "undefined")
                  console.error("invalid modifier " + parts[i6] + " in " + keys);
                return false;
              }
              hashId |= modifier;
            }
            return { key, hashId };
          };
          this.findKeyCommand = function findKeyCommand(hashId, keyString) {
            var key = KEY_MODS[hashId] + keyString;
            return this.commandKeyBinding[key];
          };
          this.handleKeyboard = function(data, hashId, keyString, keyCode) {
            if (keyCode < 0)
              return;
            var key = KEY_MODS[hashId] + keyString;
            var command = this.commandKeyBinding[key];
            if (data.$keyChain) {
              data.$keyChain += " " + key;
              command = this.commandKeyBinding[data.$keyChain] || command;
            }
            if (command) {
              if (command == "chainKeys" || command[command.length - 1] == "chainKeys") {
                data.$keyChain = data.$keyChain || key;
                return { command: "null" };
              }
            }
            if (data.$keyChain) {
              if ((!hashId || hashId == 4) && keyString.length == 1)
                data.$keyChain = data.$keyChain.slice(0, -key.length - 1);
              else if (hashId == -1 || keyCode > 0)
                data.$keyChain = "";
            }
            return { command };
          };
          this.getStatusText = function(editor, data) {
            return data.$keyChain || "";
          };
        }).call(HashHandler.prototype);
        exports2.HashHandler = HashHandler;
        exports2.MultiHashHandler = MultiHashHandler;
      });
      ace.define("ace/commands/command_manager", ["require", "exports", "module", "ace/lib/oop", "ace/keyboard/hash_handler", "ace/lib/event_emitter"], function(require3, exports2, module2) {
        "use strict";
        var oop = require3("../lib/oop");
        var MultiHashHandler = require3("../keyboard/hash_handler").MultiHashHandler;
        var EventEmitter = require3("../lib/event_emitter").EventEmitter;
        var CommandManager = function(platform, commands) {
          MultiHashHandler.call(this, commands, platform);
          this.byName = this.commands;
          this.setDefaultHandler("exec", function(e10) {
            if (!e10.args) {
              return e10.command.exec(e10.editor, {}, e10.event, true);
            }
            return e10.command.exec(e10.editor, e10.args, e10.event, false);
          });
        };
        oop.inherits(CommandManager, MultiHashHandler);
        (function() {
          oop.implement(this, EventEmitter);
          this.exec = function(command, editor, args) {
            if (Array.isArray(command)) {
              for (var i6 = command.length; i6--; ) {
                if (this.exec(command[i6], editor, args))
                  return true;
              }
              return false;
            }
            if (typeof command === "string")
              command = this.commands[command];
            if (!command)
              return false;
            if (editor && editor.$readOnly && !command.readOnly)
              return false;
            if (this.$checkCommandState != false && command.isAvailable && !command.isAvailable(editor))
              return false;
            var e10 = { editor, command, args };
            e10.returnValue = this._emit("exec", e10);
            this._signal("afterExec", e10);
            return e10.returnValue === false ? false : true;
          };
          this.toggleRecording = function(editor) {
            if (this.$inReplay)
              return;
            editor && editor._emit("changeStatus");
            if (this.recording) {
              this.macro.pop();
              this.off("exec", this.$addCommandToMacro);
              if (!this.macro.length)
                this.macro = this.oldMacro;
              return this.recording = false;
            }
            if (!this.$addCommandToMacro) {
              this.$addCommandToMacro = function(e10) {
                this.macro.push([e10.command, e10.args]);
              }.bind(this);
            }
            this.oldMacro = this.macro;
            this.macro = [];
            this.on("exec", this.$addCommandToMacro);
            return this.recording = true;
          };
          this.replay = function(editor) {
            if (this.$inReplay || !this.macro)
              return;
            if (this.recording)
              return this.toggleRecording(editor);
            try {
              this.$inReplay = true;
              this.macro.forEach(function(x2) {
                if (typeof x2 == "string")
                  this.exec(x2, editor);
                else
                  this.exec(x2[0], editor, x2[1]);
              }, this);
            } finally {
              this.$inReplay = false;
            }
          };
          this.trimMacro = function(m2) {
            return m2.map(function(x2) {
              if (typeof x2[0] != "string")
                x2[0] = x2[0].name;
              if (!x2[1])
                x2 = x2[0];
              return x2;
            });
          };
        }).call(CommandManager.prototype);
        exports2.CommandManager = CommandManager;
      });
      ace.define("ace/commands/default_commands", ["require", "exports", "module", "ace/lib/lang", "ace/config", "ace/range"], function(require3, exports2, module2) {
        "use strict";
        var lang = require3("../lib/lang");
        var config2 = require3("../config");
        var Range = require3("../range").Range;
        function bindKey(win, mac) {
          return { win, mac };
        }
        exports2.commands = [
          {
            name: "showSettingsMenu",
            description: "Show settings menu",
            bindKey: bindKey("Ctrl-,", "Command-,"),
            exec: function(editor) {
              config2.loadModule("ace/ext/settings_menu", function(module3) {
                module3.init(editor);
                editor.showSettingsMenu();
              });
            },
            readOnly: true
          },
          {
            name: "goToNextError",
            description: "Go to next error",
            bindKey: bindKey("Alt-E", "F4"),
            exec: function(editor) {
              config2.loadModule("./ext/error_marker", function(module3) {
                module3.showErrorMarker(editor, 1);
              });
            },
            scrollIntoView: "animate",
            readOnly: true
          },
          {
            name: "goToPreviousError",
            description: "Go to previous error",
            bindKey: bindKey("Alt-Shift-E", "Shift-F4"),
            exec: function(editor) {
              config2.loadModule("./ext/error_marker", function(module3) {
                module3.showErrorMarker(editor, -1);
              });
            },
            scrollIntoView: "animate",
            readOnly: true
          },
          {
            name: "selectall",
            description: "Select all",
            bindKey: bindKey("Ctrl-A", "Command-A"),
            exec: function(editor) {
              editor.selectAll();
            },
            readOnly: true
          },
          {
            name: "centerselection",
            description: "Center selection",
            bindKey: bindKey(null, "Ctrl-L"),
            exec: function(editor) {
              editor.centerSelection();
            },
            readOnly: true
          },
          {
            name: "gotoline",
            description: "Go to line...",
            bindKey: bindKey("Ctrl-L", "Command-L"),
            exec: function(editor, line) {
              if (typeof line === "number" && !isNaN(line))
                editor.gotoLine(line);
              editor.prompt({ $type: "gotoLine" });
            },
            readOnly: true
          },
          {
            name: "fold",
            bindKey: bindKey("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"),
            exec: function(editor) {
              editor.session.toggleFold(false);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: true
          },
          {
            name: "unfold",
            bindKey: bindKey("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"),
            exec: function(editor) {
              editor.session.toggleFold(true);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: true
          },
          {
            name: "toggleFoldWidget",
            description: "Toggle fold widget",
            bindKey: bindKey("F2", "F2"),
            exec: function(editor) {
              editor.session.toggleFoldWidget();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: true
          },
          {
            name: "toggleParentFoldWidget",
            description: "Toggle parent fold widget",
            bindKey: bindKey("Alt-F2", "Alt-F2"),
            exec: function(editor) {
              editor.session.toggleFoldWidget(true);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: true
          },
          {
            name: "foldall",
            description: "Fold all",
            bindKey: bindKey(null, "Ctrl-Command-Option-0"),
            exec: function(editor) {
              editor.session.foldAll();
            },
            scrollIntoView: "center",
            readOnly: true
          },
          {
            name: "foldAllComments",
            description: "Fold all comments",
            bindKey: bindKey(null, "Ctrl-Command-Option-0"),
            exec: function(editor) {
              editor.session.foldAllComments();
            },
            scrollIntoView: "center",
            readOnly: true
          },
          {
            name: "foldOther",
            description: "Fold other",
            bindKey: bindKey("Alt-0", "Command-Option-0"),
            exec: function(editor) {
              editor.session.foldAll();
              editor.session.unfold(editor.selection.getAllRanges());
            },
            scrollIntoView: "center",
            readOnly: true
          },
          {
            name: "unfoldall",
            description: "Unfold all",
            bindKey: bindKey("Alt-Shift-0", "Command-Option-Shift-0"),
            exec: function(editor) {
              editor.session.unfold();
            },
            scrollIntoView: "center",
            readOnly: true
          },
          {
            name: "findnext",
            description: "Find next",
            bindKey: bindKey("Ctrl-K", "Command-G"),
            exec: function(editor) {
              editor.findNext();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: true
          },
          {
            name: "findprevious",
            description: "Find previous",
            bindKey: bindKey("Ctrl-Shift-K", "Command-Shift-G"),
            exec: function(editor) {
              editor.findPrevious();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: true
          },
          {
            name: "selectOrFindNext",
            description: "Select or find next",
            bindKey: bindKey("Alt-K", "Ctrl-G"),
            exec: function(editor) {
              if (editor.selection.isEmpty())
                editor.selection.selectWord();
              else
                editor.findNext();
            },
            readOnly: true
          },
          {
            name: "selectOrFindPrevious",
            description: "Select or find previous",
            bindKey: bindKey("Alt-Shift-K", "Ctrl-Shift-G"),
            exec: function(editor) {
              if (editor.selection.isEmpty())
                editor.selection.selectWord();
              else
                editor.findPrevious();
            },
            readOnly: true
          },
          {
            name: "find",
            description: "Find",
            bindKey: bindKey("Ctrl-F", "Command-F"),
            exec: function(editor) {
              config2.loadModule("ace/ext/searchbox", function(e10) {
                e10.Search(editor);
              });
            },
            readOnly: true
          },
          {
            name: "overwrite",
            description: "Overwrite",
            bindKey: "Insert",
            exec: function(editor) {
              editor.toggleOverwrite();
            },
            readOnly: true
          },
          {
            name: "selecttostart",
            description: "Select to start",
            bindKey: bindKey("Ctrl-Shift-Home", "Command-Shift-Home|Command-Shift-Up"),
            exec: function(editor) {
              editor.getSelection().selectFileStart();
            },
            multiSelectAction: "forEach",
            readOnly: true,
            scrollIntoView: "animate",
            aceCommandGroup: "fileJump"
          },
          {
            name: "gotostart",
            description: "Go to start",
            bindKey: bindKey("Ctrl-Home", "Command-Home|Command-Up"),
            exec: function(editor) {
              editor.navigateFileStart();
            },
            multiSelectAction: "forEach",
            readOnly: true,
            scrollIntoView: "animate",
            aceCommandGroup: "fileJump"
          },
          {
            name: "selectup",
            description: "Select up",
            bindKey: bindKey("Shift-Up", "Shift-Up|Ctrl-Shift-P"),
            exec: function(editor) {
              editor.getSelection().selectUp();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: true
          },
          {
            name: "golineup",
            description: "Go line up",
            bindKey: bindKey("Up", "Up|Ctrl-P"),
            exec: function(editor, args) {
              editor.navigateUp(args.times);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: true
          },
          {
            name: "selecttoend",
            description: "Select to end",
            bindKey: bindKey("Ctrl-Shift-End", "Command-Shift-End|Command-Shift-Down"),
            exec: function(editor) {
              editor.getSelection().selectFileEnd();
            },
            multiSelectAction: "forEach",
            readOnly: true,
            scrollIntoView: "animate",
            aceCommandGroup: "fileJump"
          },
          {
            name: "gotoend",
            description: "Go to end",
            bindKey: bindKey("Ctrl-End", "Command-End|Command-Down"),
            exec: function(editor) {
              editor.navigateFileEnd();
            },
            multiSelectAction: "forEach",
            readOnly: true,
            scrollIntoView: "animate",
            aceCommandGroup: "fileJump"
          },
          {
            name: "selectdown",
            description: "Select down",
            bindKey: bindKey("Shift-Down", "Shift-Down|Ctrl-Shift-N"),
            exec: function(editor) {
              editor.getSelection().selectDown();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: true
          },
          {
            name: "golinedown",
            description: "Go line down",
            bindKey: bindKey("Down", "Down|Ctrl-N"),
            exec: function(editor, args) {
              editor.navigateDown(args.times);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: true
          },
          {
            name: "selectwordleft",
            description: "Select word left",
            bindKey: bindKey("Ctrl-Shift-Left", "Option-Shift-Left"),
            exec: function(editor) {
              editor.getSelection().selectWordLeft();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: true
          },
          {
            name: "gotowordleft",
            description: "Go to word left",
            bindKey: bindKey("Ctrl-Left", "Option-Left"),
            exec: function(editor) {
              editor.navigateWordLeft();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: true
          },
          {
            name: "selecttolinestart",
            description: "Select to line start",
            bindKey: bindKey("Alt-Shift-Left", "Command-Shift-Left|Ctrl-Shift-A"),
            exec: function(editor) {
              editor.getSelection().selectLineStart();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: true
          },
          {
            name: "gotolinestart",
            description: "Go to line start",
            bindKey: bindKey("Alt-Left|Home", "Command-Left|Home|Ctrl-A"),
            exec: function(editor) {
              editor.navigateLineStart();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: true
          },
          {
            name: "selectleft",
            description: "Select left",
            bindKey: bindKey("Shift-Left", "Shift-Left|Ctrl-Shift-B"),
            exec: function(editor) {
              editor.getSelection().selectLeft();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: true
          },
          {
            name: "gotoleft",
            description: "Go to left",
            bindKey: bindKey("Left", "Left|Ctrl-B"),
            exec: function(editor, args) {
              editor.navigateLeft(args.times);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: true
          },
          {
            name: "selectwordright",
            description: "Select word right",
            bindKey: bindKey("Ctrl-Shift-Right", "Option-Shift-Right"),
            exec: function(editor) {
              editor.getSelection().selectWordRight();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: true
          },
          {
            name: "gotowordright",
            description: "Go to word right",
            bindKey: bindKey("Ctrl-Right", "Option-Right"),
            exec: function(editor) {
              editor.navigateWordRight();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: true
          },
          {
            name: "selecttolineend",
            description: "Select to line end",
            bindKey: bindKey("Alt-Shift-Right", "Command-Shift-Right|Shift-End|Ctrl-Shift-E"),
            exec: function(editor) {
              editor.getSelection().selectLineEnd();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: true
          },
          {
            name: "gotolineend",
            description: "Go to line end",
            bindKey: bindKey("Alt-Right|End", "Command-Right|End|Ctrl-E"),
            exec: function(editor) {
              editor.navigateLineEnd();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: true
          },
          {
            name: "selectright",
            description: "Select right",
            bindKey: bindKey("Shift-Right", "Shift-Right"),
            exec: function(editor) {
              editor.getSelection().selectRight();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: true
          },
          {
            name: "gotoright",
            description: "Go to right",
            bindKey: bindKey("Right", "Right|Ctrl-F"),
            exec: function(editor, args) {
              editor.navigateRight(args.times);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: true
          },
          {
            name: "selectpagedown",
            description: "Select page down",
            bindKey: "Shift-PageDown",
            exec: function(editor) {
              editor.selectPageDown();
            },
            readOnly: true
          },
          {
            name: "pagedown",
            description: "Page down",
            bindKey: bindKey(null, "Option-PageDown"),
            exec: function(editor) {
              editor.scrollPageDown();
            },
            readOnly: true
          },
          {
            name: "gotopagedown",
            description: "Go to page down",
            bindKey: bindKey("PageDown", "PageDown|Ctrl-V"),
            exec: function(editor) {
              editor.gotoPageDown();
            },
            readOnly: true
          },
          {
            name: "selectpageup",
            description: "Select page up",
            bindKey: "Shift-PageUp",
            exec: function(editor) {
              editor.selectPageUp();
            },
            readOnly: true
          },
          {
            name: "pageup",
            description: "Page up",
            bindKey: bindKey(null, "Option-PageUp"),
            exec: function(editor) {
              editor.scrollPageUp();
            },
            readOnly: true
          },
          {
            name: "gotopageup",
            description: "Go to page up",
            bindKey: "PageUp",
            exec: function(editor) {
              editor.gotoPageUp();
            },
            readOnly: true
          },
          {
            name: "scrollup",
            description: "Scroll up",
            bindKey: bindKey("Ctrl-Up", null),
            exec: function(e10) {
              e10.renderer.scrollBy(0, -2 * e10.renderer.layerConfig.lineHeight);
            },
            readOnly: true
          },
          {
            name: "scrolldown",
            description: "Scroll down",
            bindKey: bindKey("Ctrl-Down", null),
            exec: function(e10) {
              e10.renderer.scrollBy(0, 2 * e10.renderer.layerConfig.lineHeight);
            },
            readOnly: true
          },
          {
            name: "selectlinestart",
            description: "Select line start",
            bindKey: "Shift-Home",
            exec: function(editor) {
              editor.getSelection().selectLineStart();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: true
          },
          {
            name: "selectlineend",
            description: "Select line end",
            bindKey: "Shift-End",
            exec: function(editor) {
              editor.getSelection().selectLineEnd();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: true
          },
          {
            name: "togglerecording",
            description: "Toggle recording",
            bindKey: bindKey("Ctrl-Alt-E", "Command-Option-E"),
            exec: function(editor) {
              editor.commands.toggleRecording(editor);
            },
            readOnly: true
          },
          {
            name: "replaymacro",
            description: "Replay macro",
            bindKey: bindKey("Ctrl-Shift-E", "Command-Shift-E"),
            exec: function(editor) {
              editor.commands.replay(editor);
            },
            readOnly: true
          },
          {
            name: "jumptomatching",
            description: "Jump to matching",
            bindKey: bindKey("Ctrl-\\|Ctrl-P", "Command-\\"),
            exec: function(editor) {
              editor.jumpToMatching();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "animate",
            readOnly: true
          },
          {
            name: "selecttomatching",
            description: "Select to matching",
            bindKey: bindKey("Ctrl-Shift-\\|Ctrl-Shift-P", "Command-Shift-\\"),
            exec: function(editor) {
              editor.jumpToMatching(true);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "animate",
            readOnly: true
          },
          {
            name: "expandToMatching",
            description: "Expand to matching",
            bindKey: bindKey("Ctrl-Shift-M", "Ctrl-Shift-M"),
            exec: function(editor) {
              editor.jumpToMatching(true, true);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "animate",
            readOnly: true
          },
          {
            name: "passKeysToBrowser",
            description: "Pass keys to browser",
            bindKey: bindKey(null, null),
            exec: function() {
            },
            passEvent: true,
            readOnly: true
          },
          {
            name: "copy",
            description: "Copy",
            exec: function(editor) {
            },
            readOnly: true
          },
          {
            name: "cut",
            description: "Cut",
            exec: function(editor) {
              var cutLine = editor.$copyWithEmptySelection && editor.selection.isEmpty();
              var range = cutLine ? editor.selection.getLineRange() : editor.selection.getRange();
              editor._emit("cut", range);
              if (!range.isEmpty())
                editor.session.remove(range);
              editor.clearSelection();
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEach"
          },
          {
            name: "paste",
            description: "Paste",
            exec: function(editor, args) {
              editor.$handlePaste(args);
            },
            scrollIntoView: "cursor"
          },
          {
            name: "removeline",
            description: "Remove line",
            bindKey: bindKey("Ctrl-D", "Command-D"),
            exec: function(editor) {
              editor.removeLines();
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEachLine"
          },
          {
            name: "duplicateSelection",
            description: "Duplicate selection",
            bindKey: bindKey("Ctrl-Shift-D", "Command-Shift-D"),
            exec: function(editor) {
              editor.duplicateSelection();
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEach"
          },
          {
            name: "sortlines",
            description: "Sort lines",
            bindKey: bindKey("Ctrl-Alt-S", "Command-Alt-S"),
            exec: function(editor) {
              editor.sortLines();
            },
            scrollIntoView: "selection",
            multiSelectAction: "forEachLine"
          },
          {
            name: "togglecomment",
            description: "Toggle comment",
            bindKey: bindKey("Ctrl-/", "Command-/"),
            exec: function(editor) {
              editor.toggleCommentLines();
            },
            multiSelectAction: "forEachLine",
            scrollIntoView: "selectionPart"
          },
          {
            name: "toggleBlockComment",
            description: "Toggle block comment",
            bindKey: bindKey("Ctrl-Shift-/", "Command-Shift-/"),
            exec: function(editor) {
              editor.toggleBlockComment();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "selectionPart"
          },
          {
            name: "modifyNumberUp",
            description: "Modify number up",
            bindKey: bindKey("Ctrl-Shift-Up", "Alt-Shift-Up"),
            exec: function(editor) {
              editor.modifyNumber(1);
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEach"
          },
          {
            name: "modifyNumberDown",
            description: "Modify number down",
            bindKey: bindKey("Ctrl-Shift-Down", "Alt-Shift-Down"),
            exec: function(editor) {
              editor.modifyNumber(-1);
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEach"
          },
          {
            name: "replace",
            description: "Replace",
            bindKey: bindKey("Ctrl-H", "Command-Option-F"),
            exec: function(editor) {
              config2.loadModule("ace/ext/searchbox", function(e10) {
                e10.Search(editor, true);
              });
            }
          },
          {
            name: "undo",
            description: "Undo",
            bindKey: bindKey("Ctrl-Z", "Command-Z"),
            exec: function(editor) {
              editor.undo();
            }
          },
          {
            name: "redo",
            description: "Redo",
            bindKey: bindKey("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"),
            exec: function(editor) {
              editor.redo();
            }
          },
          {
            name: "copylinesup",
            description: "Copy lines up",
            bindKey: bindKey("Alt-Shift-Up", "Command-Option-Up"),
            exec: function(editor) {
              editor.copyLinesUp();
            },
            scrollIntoView: "cursor"
          },
          {
            name: "movelinesup",
            description: "Move lines up",
            bindKey: bindKey("Alt-Up", "Option-Up"),
            exec: function(editor) {
              editor.moveLinesUp();
            },
            scrollIntoView: "cursor"
          },
          {
            name: "copylinesdown",
            description: "Copy lines down",
            bindKey: bindKey("Alt-Shift-Down", "Command-Option-Down"),
            exec: function(editor) {
              editor.copyLinesDown();
            },
            scrollIntoView: "cursor"
          },
          {
            name: "movelinesdown",
            description: "Move lines down",
            bindKey: bindKey("Alt-Down", "Option-Down"),
            exec: function(editor) {
              editor.moveLinesDown();
            },
            scrollIntoView: "cursor"
          },
          {
            name: "del",
            description: "Delete",
            bindKey: bindKey("Delete", "Delete|Ctrl-D|Shift-Delete"),
            exec: function(editor) {
              editor.remove("right");
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
          },
          {
            name: "backspace",
            description: "Backspace",
            bindKey: bindKey(
              "Shift-Backspace|Backspace",
              "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"
            ),
            exec: function(editor) {
              editor.remove("left");
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
          },
          {
            name: "cut_or_delete",
            description: "Cut or delete",
            bindKey: bindKey("Shift-Delete", null),
            exec: function(editor) {
              if (editor.selection.isEmpty()) {
                editor.remove("left");
              } else {
                return false;
              }
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
          },
          {
            name: "removetolinestart",
            description: "Remove to line start",
            bindKey: bindKey("Alt-Backspace", "Command-Backspace"),
            exec: function(editor) {
              editor.removeToLineStart();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
          },
          {
            name: "removetolineend",
            description: "Remove to line end",
            bindKey: bindKey("Alt-Delete", "Ctrl-K|Command-Delete"),
            exec: function(editor) {
              editor.removeToLineEnd();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
          },
          {
            name: "removetolinestarthard",
            description: "Remove to line start hard",
            bindKey: bindKey("Ctrl-Shift-Backspace", null),
            exec: function(editor) {
              var range = editor.selection.getRange();
              range.start.column = 0;
              editor.session.remove(range);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
          },
          {
            name: "removetolineendhard",
            description: "Remove to line end hard",
            bindKey: bindKey("Ctrl-Shift-Delete", null),
            exec: function(editor) {
              var range = editor.selection.getRange();
              range.end.column = Number.MAX_VALUE;
              editor.session.remove(range);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
          },
          {
            name: "removewordleft",
            description: "Remove word left",
            bindKey: bindKey("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"),
            exec: function(editor) {
              editor.removeWordLeft();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
          },
          {
            name: "removewordright",
            description: "Remove word right",
            bindKey: bindKey("Ctrl-Delete", "Alt-Delete"),
            exec: function(editor) {
              editor.removeWordRight();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
          },
          {
            name: "outdent",
            description: "Outdent",
            bindKey: bindKey("Shift-Tab", "Shift-Tab"),
            exec: function(editor) {
              editor.blockOutdent();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "selectionPart"
          },
          {
            name: "indent",
            description: "Indent",
            bindKey: bindKey("Tab", "Tab"),
            exec: function(editor) {
              editor.indent();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "selectionPart"
          },
          {
            name: "blockoutdent",
            description: "Block outdent",
            bindKey: bindKey("Ctrl-[", "Ctrl-["),
            exec: function(editor) {
              editor.blockOutdent();
            },
            multiSelectAction: "forEachLine",
            scrollIntoView: "selectionPart"
          },
          {
            name: "blockindent",
            description: "Block indent",
            bindKey: bindKey("Ctrl-]", "Ctrl-]"),
            exec: function(editor) {
              editor.blockIndent();
            },
            multiSelectAction: "forEachLine",
            scrollIntoView: "selectionPart"
          },
          {
            name: "insertstring",
            description: "Insert string",
            exec: function(editor, str) {
              editor.insert(str);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
          },
          {
            name: "inserttext",
            description: "Insert text",
            exec: function(editor, args) {
              editor.insert(lang.stringRepeat(args.text || "", args.times || 1));
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
          },
          {
            name: "splitline",
            description: "Split line",
            bindKey: bindKey(null, "Ctrl-O"),
            exec: function(editor) {
              editor.splitLine();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
          },
          {
            name: "transposeletters",
            description: "Transpose letters",
            bindKey: bindKey("Alt-Shift-X", "Ctrl-T"),
            exec: function(editor) {
              editor.transposeLetters();
            },
            multiSelectAction: function(editor) {
              editor.transposeSelections(1);
            },
            scrollIntoView: "cursor"
          },
          {
            name: "touppercase",
            description: "To uppercase",
            bindKey: bindKey("Ctrl-U", "Ctrl-U"),
            exec: function(editor) {
              editor.toUpperCase();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
          },
          {
            name: "tolowercase",
            description: "To lowercase",
            bindKey: bindKey("Ctrl-Shift-U", "Ctrl-Shift-U"),
            exec: function(editor) {
              editor.toLowerCase();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
          },
          {
            name: "autoindent",
            description: "Auto Indent",
            bindKey: bindKey(null, null),
            exec: function(editor) {
              editor.autoIndent();
            },
            multiSelectAction: "forEachLine",
            scrollIntoView: "animate"
          },
          {
            name: "expandtoline",
            description: "Expand to line",
            bindKey: bindKey("Ctrl-Shift-L", "Command-Shift-L"),
            exec: function(editor) {
              var range = editor.selection.getRange();
              range.start.column = range.end.column = 0;
              range.end.row++;
              editor.selection.setRange(range, false);
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: true
          },
          {
            name: "joinlines",
            description: "Join lines",
            bindKey: bindKey(null, null),
            exec: function(editor) {
              var isBackwards = editor.selection.isBackwards();
              var selectionStart = isBackwards ? editor.selection.getSelectionLead() : editor.selection.getSelectionAnchor();
              var selectionEnd = isBackwards ? editor.selection.getSelectionAnchor() : editor.selection.getSelectionLead();
              var firstLineEndCol = editor.session.doc.getLine(selectionStart.row).length;
              var selectedText = editor.session.doc.getTextRange(editor.selection.getRange());
              var selectedCount = selectedText.replace(/\n\s*/, " ").length;
              var insertLine = editor.session.doc.getLine(selectionStart.row);
              for (var i7 = selectionStart.row + 1; i7 <= selectionEnd.row + 1; i7++) {
                var curLine = lang.stringTrimLeft(lang.stringTrimRight(editor.session.doc.getLine(i7)));
                if (curLine.length !== 0) {
                  curLine = " " + curLine;
                }
                insertLine += curLine;
              }
              if (selectionEnd.row + 1 < editor.session.doc.getLength() - 1) {
                insertLine += editor.session.doc.getNewLineCharacter();
              }
              editor.clearSelection();
              editor.session.doc.replace(new Range(selectionStart.row, 0, selectionEnd.row + 2, 0), insertLine);
              if (selectedCount > 0) {
                editor.selection.moveCursorTo(selectionStart.row, selectionStart.column);
                editor.selection.selectTo(selectionStart.row, selectionStart.column + selectedCount);
              } else {
                firstLineEndCol = editor.session.doc.getLine(selectionStart.row).length > firstLineEndCol ? firstLineEndCol + 1 : firstLineEndCol;
                editor.selection.moveCursorTo(selectionStart.row, firstLineEndCol);
              }
            },
            multiSelectAction: "forEach",
            readOnly: true
          },
          {
            name: "invertSelection",
            description: "Invert selection",
            bindKey: bindKey(null, null),
            exec: function(editor) {
              var endRow = editor.session.doc.getLength() - 1;
              var endCol = editor.session.doc.getLine(endRow).length;
              var ranges = editor.selection.rangeList.ranges;
              var newRanges = [];
              if (ranges.length < 1) {
                ranges = [editor.selection.getRange()];
              }
              for (var i7 = 0; i7 < ranges.length; i7++) {
                if (i7 == ranges.length - 1) {
                  if (!(ranges[i7].end.row === endRow && ranges[i7].end.column === endCol)) {
                    newRanges.push(new Range(ranges[i7].end.row, ranges[i7].end.column, endRow, endCol));
                  }
                }
                if (i7 === 0) {
                  if (!(ranges[i7].start.row === 0 && ranges[i7].start.column === 0)) {
                    newRanges.push(new Range(0, 0, ranges[i7].start.row, ranges[i7].start.column));
                  }
                } else {
                  newRanges.push(new Range(ranges[i7 - 1].end.row, ranges[i7 - 1].end.column, ranges[i7].start.row, ranges[i7].start.column));
                }
              }
              editor.exitMultiSelectMode();
              editor.clearSelection();
              for (var i7 = 0; i7 < newRanges.length; i7++) {
                editor.selection.addRange(newRanges[i7], false);
              }
            },
            readOnly: true,
            scrollIntoView: "none"
          },
          {
            name: "addLineAfter",
            description: "Add new line after the current line",
            exec: function(editor) {
              editor.selection.clearSelection();
              editor.navigateLineEnd();
              editor.insert("\n");
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
          },
          {
            name: "addLineBefore",
            description: "Add new line before the current line",
            exec: function(editor) {
              editor.selection.clearSelection();
              var cursor = editor.getCursorPosition();
              editor.selection.moveTo(cursor.row - 1, Number.MAX_VALUE);
              editor.insert("\n");
              if (cursor.row === 0)
                editor.navigateUp();
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
          },
          {
            name: "openCommandPallete",
            description: "Open command pallete",
            bindKey: bindKey("F1", "F1"),
            exec: function(editor) {
              editor.prompt({ $type: "commands" });
            },
            readOnly: true
          },
          {
            name: "modeSelect",
            description: "Change language mode...",
            bindKey: bindKey(null, null),
            exec: function(editor) {
              editor.prompt({ $type: "modes" });
            },
            readOnly: true
          }
        ];
        for (var i6 = 1; i6 < 9; i6++) {
          exports2.commands.push({
            name: "foldToLevel" + i6,
            description: "Fold To Level " + i6,
            level: i6,
            exec: function(editor) {
              editor.session.foldToLevel(this.level);
            },
            scrollIntoView: "center",
            readOnly: true
          });
        }
      });
      ace.define("ace/editor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/keyboard/textinput", "ace/mouse/mouse_handler", "ace/mouse/fold_handler", "ace/keyboard/keybinding", "ace/edit_session", "ace/search", "ace/range", "ace/lib/event_emitter", "ace/commands/command_manager", "ace/commands/default_commands", "ace/config", "ace/token_iterator", "ace/clipboard"], function(require3, exports2, module2) {
        "use strict";
        var oop = require3("./lib/oop");
        var dom = require3("./lib/dom");
        var lang = require3("./lib/lang");
        var useragent = require3("./lib/useragent");
        var TextInput = require3("./keyboard/textinput").TextInput;
        var MouseHandler = require3("./mouse/mouse_handler").MouseHandler;
        var FoldHandler = require3("./mouse/fold_handler").FoldHandler;
        var KeyBinding = require3("./keyboard/keybinding").KeyBinding;
        var EditSession2 = require3("./edit_session").EditSession;
        var Search = require3("./search").Search;
        var Range = require3("./range").Range;
        var EventEmitter = require3("./lib/event_emitter").EventEmitter;
        var CommandManager = require3("./commands/command_manager").CommandManager;
        var defaultCommands = require3("./commands/default_commands").commands;
        var config2 = require3("./config");
        var TokenIterator = require3("./token_iterator").TokenIterator;
        var clipboard = require3("./clipboard");
        var Editor = function(renderer, session, options) {
          this.$toDestroy = [];
          var container = renderer.getContainerElement();
          this.container = container;
          this.renderer = renderer;
          this.id = "editor" + ++Editor.$uid;
          this.commands = new CommandManager(useragent.isMac ? "mac" : "win", defaultCommands);
          if (typeof document == "object") {
            this.textInput = new TextInput(renderer.getTextAreaContainer(), this);
            this.renderer.textarea = this.textInput.getElement();
            this.$mouseHandler = new MouseHandler(this);
            new FoldHandler(this);
          }
          this.keyBinding = new KeyBinding(this);
          this.$search = new Search().set({
            wrap: true
          });
          this.$historyTracker = this.$historyTracker.bind(this);
          this.commands.on("exec", this.$historyTracker);
          this.$initOperationListeners();
          this._$emitInputEvent = lang.delayedCall(function() {
            this._signal("input", {});
            if (this.session && !this.session.destroyed)
              this.session.bgTokenizer.scheduleStart();
          }.bind(this));
          this.on("change", function(_2, _self) {
            _self._$emitInputEvent.schedule(31);
          });
          this.setSession(session || options && options.session || new EditSession2(""));
          config2.resetOptions(this);
          if (options)
            this.setOptions(options);
          config2._signal("editor", this);
        };
        Editor.$uid = 0;
        (function() {
          oop.implement(this, EventEmitter);
          this.$initOperationListeners = function() {
            this.commands.on("exec", this.startOperation.bind(this), true);
            this.commands.on("afterExec", this.endOperation.bind(this), true);
            this.$opResetTimer = lang.delayedCall(this.endOperation.bind(this, true));
            this.on("change", function() {
              if (!this.curOp) {
                this.startOperation();
                this.curOp.selectionBefore = this.$lastSel;
              }
              this.curOp.docChanged = true;
            }.bind(this), true);
            this.on("changeSelection", function() {
              if (!this.curOp) {
                this.startOperation();
                this.curOp.selectionBefore = this.$lastSel;
              }
              this.curOp.selectionChanged = true;
            }.bind(this), true);
          };
          this.curOp = null;
          this.prevOp = {};
          this.startOperation = function(commandEvent) {
            if (this.curOp) {
              if (!commandEvent || this.curOp.command)
                return;
              this.prevOp = this.curOp;
            }
            if (!commandEvent) {
              this.previousCommand = null;
              commandEvent = {};
            }
            this.$opResetTimer.schedule();
            this.curOp = this.session.curOp = {
              command: commandEvent.command || {},
              args: commandEvent.args,
              scrollTop: this.renderer.scrollTop
            };
            this.curOp.selectionBefore = this.selection.toJSON();
          };
          this.endOperation = function(e10) {
            if (this.curOp && this.session) {
              if (e10 && e10.returnValue === false || !this.session)
                return this.curOp = null;
              if (e10 == true && this.curOp.command && this.curOp.command.name == "mouse")
                return;
              this._signal("beforeEndOperation");
              if (!this.curOp)
                return;
              var command = this.curOp.command;
              var scrollIntoView = command && command.scrollIntoView;
              if (scrollIntoView) {
                switch (scrollIntoView) {
                  case "center-animate":
                    scrollIntoView = "animate";
                  case "center":
                    this.renderer.scrollCursorIntoView(null, 0.5);
                    break;
                  case "animate":
                  case "cursor":
                    this.renderer.scrollCursorIntoView();
                    break;
                  case "selectionPart":
                    var range = this.selection.getRange();
                    var config3 = this.renderer.layerConfig;
                    if (range.start.row >= config3.lastRow || range.end.row <= config3.firstRow) {
                      this.renderer.scrollSelectionIntoView(this.selection.anchor, this.selection.lead);
                    }
                    break;
                  default:
                    break;
                }
                if (scrollIntoView == "animate")
                  this.renderer.animateScrolling(this.curOp.scrollTop);
              }
              var sel = this.selection.toJSON();
              this.curOp.selectionAfter = sel;
              this.$lastSel = this.selection.toJSON();
              this.session.getUndoManager().addSelection(sel);
              this.prevOp = this.curOp;
              this.curOp = null;
            }
          };
          this.$mergeableCommands = ["backspace", "del", "insertstring"];
          this.$historyTracker = function(e10) {
            if (!this.$mergeUndoDeltas)
              return;
            var prev = this.prevOp;
            var mergeableCommands = this.$mergeableCommands;
            var shouldMerge = prev.command && e10.command.name == prev.command.name;
            if (e10.command.name == "insertstring") {
              var text = e10.args;
              if (this.mergeNextCommand === void 0)
                this.mergeNextCommand = true;
              shouldMerge = shouldMerge && this.mergeNextCommand && (!/\s/.test(text) || /\s/.test(prev.args));
              this.mergeNextCommand = true;
            } else {
              shouldMerge = shouldMerge && mergeableCommands.indexOf(e10.command.name) !== -1;
            }
            if (this.$mergeUndoDeltas != "always" && Date.now() - this.sequenceStartTime > 2e3) {
              shouldMerge = false;
            }
            if (shouldMerge)
              this.session.mergeUndoDeltas = true;
            else if (mergeableCommands.indexOf(e10.command.name) !== -1)
              this.sequenceStartTime = Date.now();
          };
          this.setKeyboardHandler = function(keyboardHandler, cb) {
            if (keyboardHandler && typeof keyboardHandler === "string" && keyboardHandler != "ace") {
              this.$keybindingId = keyboardHandler;
              var _self = this;
              config2.loadModule(["keybinding", keyboardHandler], function(module3) {
                if (_self.$keybindingId == keyboardHandler)
                  _self.keyBinding.setKeyboardHandler(module3 && module3.handler);
                cb && cb();
              });
            } else {
              this.$keybindingId = null;
              this.keyBinding.setKeyboardHandler(keyboardHandler);
              cb && cb();
            }
          };
          this.getKeyboardHandler = function() {
            return this.keyBinding.getKeyboardHandler();
          };
          this.setSession = function(session) {
            if (this.session == session)
              return;
            if (this.curOp)
              this.endOperation();
            this.curOp = {};
            var oldSession = this.session;
            if (oldSession) {
              this.session.off("change", this.$onDocumentChange);
              this.session.off("changeMode", this.$onChangeMode);
              this.session.off("tokenizerUpdate", this.$onTokenizerUpdate);
              this.session.off("changeTabSize", this.$onChangeTabSize);
              this.session.off("changeWrapLimit", this.$onChangeWrapLimit);
              this.session.off("changeWrapMode", this.$onChangeWrapMode);
              this.session.off("changeFold", this.$onChangeFold);
              this.session.off("changeFrontMarker", this.$onChangeFrontMarker);
              this.session.off("changeBackMarker", this.$onChangeBackMarker);
              this.session.off("changeBreakpoint", this.$onChangeBreakpoint);
              this.session.off("changeAnnotation", this.$onChangeAnnotation);
              this.session.off("changeOverwrite", this.$onCursorChange);
              this.session.off("changeScrollTop", this.$onScrollTopChange);
              this.session.off("changeScrollLeft", this.$onScrollLeftChange);
              var selection = this.session.getSelection();
              selection.off("changeCursor", this.$onCursorChange);
              selection.off("changeSelection", this.$onSelectionChange);
            }
            this.session = session;
            if (session) {
              this.$onDocumentChange = this.onDocumentChange.bind(this);
              session.on("change", this.$onDocumentChange);
              this.renderer.setSession(session);
              this.$onChangeMode = this.onChangeMode.bind(this);
              session.on("changeMode", this.$onChangeMode);
              this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(this);
              session.on("tokenizerUpdate", this.$onTokenizerUpdate);
              this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(this.renderer);
              session.on("changeTabSize", this.$onChangeTabSize);
              this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(this);
              session.on("changeWrapLimit", this.$onChangeWrapLimit);
              this.$onChangeWrapMode = this.onChangeWrapMode.bind(this);
              session.on("changeWrapMode", this.$onChangeWrapMode);
              this.$onChangeFold = this.onChangeFold.bind(this);
              session.on("changeFold", this.$onChangeFold);
              this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(this);
              this.session.on("changeFrontMarker", this.$onChangeFrontMarker);
              this.$onChangeBackMarker = this.onChangeBackMarker.bind(this);
              this.session.on("changeBackMarker", this.$onChangeBackMarker);
              this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(this);
              this.session.on("changeBreakpoint", this.$onChangeBreakpoint);
              this.$onChangeAnnotation = this.onChangeAnnotation.bind(this);
              this.session.on("changeAnnotation", this.$onChangeAnnotation);
              this.$onCursorChange = this.onCursorChange.bind(this);
              this.session.on("changeOverwrite", this.$onCursorChange);
              this.$onScrollTopChange = this.onScrollTopChange.bind(this);
              this.session.on("changeScrollTop", this.$onScrollTopChange);
              this.$onScrollLeftChange = this.onScrollLeftChange.bind(this);
              this.session.on("changeScrollLeft", this.$onScrollLeftChange);
              this.selection = session.getSelection();
              this.selection.on("changeCursor", this.$onCursorChange);
              this.$onSelectionChange = this.onSelectionChange.bind(this);
              this.selection.on("changeSelection", this.$onSelectionChange);
              this.onChangeMode();
              this.onCursorChange();
              this.onScrollTopChange();
              this.onScrollLeftChange();
              this.onSelectionChange();
              this.onChangeFrontMarker();
              this.onChangeBackMarker();
              this.onChangeBreakpoint();
              this.onChangeAnnotation();
              this.session.getUseWrapMode() && this.renderer.adjustWrapLimit();
              this.renderer.updateFull();
            } else {
              this.selection = null;
              this.renderer.setSession(session);
            }
            this._signal("changeSession", {
              session,
              oldSession
            });
            this.curOp = null;
            oldSession && oldSession._signal("changeEditor", { oldEditor: this });
            session && session._signal("changeEditor", { editor: this });
            if (session && !session.destroyed)
              session.bgTokenizer.scheduleStart();
          };
          this.getSession = function() {
            return this.session;
          };
          this.setValue = function(val, cursorPos) {
            this.session.doc.setValue(val);
            if (!cursorPos)
              this.selectAll();
            else if (cursorPos == 1)
              this.navigateFileEnd();
            else if (cursorPos == -1)
              this.navigateFileStart();
            return val;
          };
          this.getValue = function() {
            return this.session.getValue();
          };
          this.getSelection = function() {
            return this.selection;
          };
          this.resize = function(force) {
            this.renderer.onResize(force);
          };
          this.setTheme = function(theme, cb) {
            this.renderer.setTheme(theme, cb);
          };
          this.getTheme = function() {
            return this.renderer.getTheme();
          };
          this.setStyle = function(style) {
            this.renderer.setStyle(style);
          };
          this.unsetStyle = function(style) {
            this.renderer.unsetStyle(style);
          };
          this.getFontSize = function() {
            return this.getOption("fontSize") || dom.computedStyle(this.container).fontSize;
          };
          this.setFontSize = function(size) {
            this.setOption("fontSize", size);
          };
          this.$highlightBrackets = function() {
            if (this.$highlightPending) {
              return;
            }
            var self = this;
            this.$highlightPending = true;
            setTimeout(function() {
              self.$highlightPending = false;
              var session = self.session;
              if (!session || session.destroyed)
                return;
              if (session.$bracketHighlight) {
                session.$bracketHighlight.markerIds.forEach(function(id) {
                  session.removeMarker(id);
                });
                session.$bracketHighlight = null;
              }
              var ranges = session.getMatchingBracketRanges(self.getCursorPosition());
              if (!ranges && session.$mode.getMatching)
                ranges = session.$mode.getMatching(self.session);
              if (!ranges)
                return;
              var markerType = "ace_bracket";
              if (!Array.isArray(ranges)) {
                ranges = [ranges];
              } else if (ranges.length == 1) {
                markerType = "ace_error_bracket";
              }
              if (ranges.length == 2) {
                if (Range.comparePoints(ranges[0].end, ranges[1].start) == 0)
                  ranges = [Range.fromPoints(ranges[0].start, ranges[1].end)];
                else if (Range.comparePoints(ranges[0].start, ranges[1].end) == 0)
                  ranges = [Range.fromPoints(ranges[1].start, ranges[0].end)];
              }
              session.$bracketHighlight = {
                ranges,
                markerIds: ranges.map(function(range) {
                  return session.addMarker(range, markerType, "text");
                })
              };
            }, 50);
          };
          this.$highlightTags = function() {
            if (this.$highlightTagPending)
              return;
            var self = this;
            this.$highlightTagPending = true;
            setTimeout(function() {
              self.$highlightTagPending = false;
              var session = self.session;
              if (!session || session.destroyed)
                return;
              var pos = self.getCursorPosition();
              var iterator = new TokenIterator(self.session, pos.row, pos.column);
              var token = iterator.getCurrentToken();
              if (!token || !/\b(?:tag-open|tag-name)/.test(token.type)) {
                session.removeMarker(session.$tagHighlight);
                session.$tagHighlight = null;
                return;
              }
              if (token.type.indexOf("tag-open") !== -1) {
                token = iterator.stepForward();
                if (!token)
                  return;
              }
              var tag = token.value;
              var currentTag = token.value;
              var depth = 0;
              var prevToken = iterator.stepBackward();
              if (prevToken.value === "<") {
                do {
                  prevToken = token;
                  token = iterator.stepForward();
                  if (token) {
                    if (token.type.indexOf("tag-name") !== -1) {
                      currentTag = token.value;
                      if (tag === currentTag) {
                        if (prevToken.value === "<") {
                          depth++;
                        } else if (prevToken.value === "</") {
                          depth--;
                        }
                      }
                    } else if (tag === currentTag && token.value === "/>") {
                      depth--;
                    }
                  }
                } while (token && depth >= 0);
              } else {
                do {
                  token = prevToken;
                  prevToken = iterator.stepBackward();
                  if (token) {
                    if (token.type.indexOf("tag-name") !== -1) {
                      if (tag === token.value) {
                        if (prevToken.value === "<") {
                          depth++;
                        } else if (prevToken.value === "</") {
                          depth--;
                        }
                      }
                    } else if (token.value === "/>") {
                      var stepCount = 0;
                      var tmpToken = prevToken;
                      while (tmpToken) {
                        if (tmpToken.type.indexOf("tag-name") !== -1 && tmpToken.value === tag) {
                          depth--;
                          break;
                        } else if (tmpToken.value === "<") {
                          break;
                        }
                        tmpToken = iterator.stepBackward();
                        stepCount++;
                      }
                      for (var i6 = 0; i6 < stepCount; i6++) {
                        iterator.stepForward();
                      }
                    }
                  }
                } while (prevToken && depth <= 0);
                iterator.stepForward();
              }
              if (!token) {
                session.removeMarker(session.$tagHighlight);
                session.$tagHighlight = null;
                return;
              }
              var row = iterator.getCurrentTokenRow();
              var column = iterator.getCurrentTokenColumn();
              var range = new Range(row, column, row, column + token.value.length);
              var sbm = session.$backMarkers[session.$tagHighlight];
              if (session.$tagHighlight && sbm != void 0 && range.compareRange(sbm.range) !== 0) {
                session.removeMarker(session.$tagHighlight);
                session.$tagHighlight = null;
              }
              if (!session.$tagHighlight)
                session.$tagHighlight = session.addMarker(range, "ace_bracket", "text");
            }, 50);
          };
          this.focus = function() {
            this.textInput.focus();
          };
          this.isFocused = function() {
            return this.textInput.isFocused();
          };
          this.blur = function() {
            this.textInput.blur();
          };
          this.onFocus = function(e10) {
            if (this.$isFocused)
              return;
            this.$isFocused = true;
            this.renderer.showCursor();
            this.renderer.visualizeFocus();
            this._emit("focus", e10);
          };
          this.onBlur = function(e10) {
            if (!this.$isFocused)
              return;
            this.$isFocused = false;
            this.renderer.hideCursor();
            this.renderer.visualizeBlur();
            this._emit("blur", e10);
          };
          this.$cursorChange = function() {
            this.renderer.updateCursor();
            this.$highlightBrackets();
            this.$highlightTags();
            this.$updateHighlightActiveLine();
          };
          this.onDocumentChange = function(delta) {
            var wrap = this.session.$useWrapMode;
            var lastRow = delta.start.row == delta.end.row ? delta.end.row : Infinity;
            this.renderer.updateLines(delta.start.row, lastRow, wrap);
            this._signal("change", delta);
            this.$cursorChange();
          };
          this.onTokenizerUpdate = function(e10) {
            var rows = e10.data;
            this.renderer.updateLines(rows.first, rows.last);
          };
          this.onScrollTopChange = function() {
            this.renderer.scrollToY(this.session.getScrollTop());
          };
          this.onScrollLeftChange = function() {
            this.renderer.scrollToX(this.session.getScrollLeft());
          };
          this.onCursorChange = function() {
            this.$cursorChange();
            this._signal("changeSelection");
          };
          this.$updateHighlightActiveLine = function() {
            var session = this.getSession();
            var highlight;
            if (this.$highlightActiveLine) {
              if (this.$selectionStyle != "line" || !this.selection.isMultiLine())
                highlight = this.getCursorPosition();
              if (this.renderer.theme && this.renderer.theme.$selectionColorConflict && !this.selection.isEmpty())
                highlight = false;
              if (this.renderer.$maxLines && this.session.getLength() === 1 && !(this.renderer.$minLines > 1))
                highlight = false;
            }
            if (session.$highlightLineMarker && !highlight) {
              session.removeMarker(session.$highlightLineMarker.id);
              session.$highlightLineMarker = null;
            } else if (!session.$highlightLineMarker && highlight) {
              var range = new Range(highlight.row, highlight.column, highlight.row, Infinity);
              range.id = session.addMarker(range, "ace_active-line", "screenLine");
              session.$highlightLineMarker = range;
            } else if (highlight) {
              session.$highlightLineMarker.start.row = highlight.row;
              session.$highlightLineMarker.end.row = highlight.row;
              session.$highlightLineMarker.start.column = highlight.column;
              session._signal("changeBackMarker");
            }
          };
          this.onSelectionChange = function(e10) {
            var session = this.session;
            if (session.$selectionMarker) {
              session.removeMarker(session.$selectionMarker);
            }
            session.$selectionMarker = null;
            if (!this.selection.isEmpty()) {
              var range = this.selection.getRange();
              var style = this.getSelectionStyle();
              session.$selectionMarker = session.addMarker(range, "ace_selection", style);
            } else {
              this.$updateHighlightActiveLine();
            }
            var re = this.$highlightSelectedWord && this.$getSelectionHighLightRegexp();
            this.session.highlight(re);
            this._signal("changeSelection");
          };
          this.$getSelectionHighLightRegexp = function() {
            var session = this.session;
            var selection = this.getSelectionRange();
            if (selection.isEmpty() || selection.isMultiLine())
              return;
            var startColumn = selection.start.column;
            var endColumn = selection.end.column;
            var line = session.getLine(selection.start.row);
            var needle = line.substring(startColumn, endColumn);
            if (needle.length > 5e3 || !/[\w\d]/.test(needle))
              return;
            var re = this.$search.$assembleRegExp({
              wholeWord: true,
              caseSensitive: true,
              needle
            });
            var wordWithBoundary = line.substring(startColumn - 1, endColumn + 1);
            if (!re.test(wordWithBoundary))
              return;
            return re;
          };
          this.onChangeFrontMarker = function() {
            this.renderer.updateFrontMarkers();
          };
          this.onChangeBackMarker = function() {
            this.renderer.updateBackMarkers();
          };
          this.onChangeBreakpoint = function() {
            this.renderer.updateBreakpoints();
          };
          this.onChangeAnnotation = function() {
            this.renderer.setAnnotations(this.session.getAnnotations());
          };
          this.onChangeMode = function(e10) {
            this.renderer.updateText();
            this._emit("changeMode", e10);
          };
          this.onChangeWrapLimit = function() {
            this.renderer.updateFull();
          };
          this.onChangeWrapMode = function() {
            this.renderer.onResize(true);
          };
          this.onChangeFold = function() {
            this.$updateHighlightActiveLine();
            this.renderer.updateFull();
          };
          this.getSelectedText = function() {
            return this.session.getTextRange(this.getSelectionRange());
          };
          this.getCopyText = function() {
            var text = this.getSelectedText();
            var nl = this.session.doc.getNewLineCharacter();
            var copyLine = false;
            if (!text && this.$copyWithEmptySelection) {
              copyLine = true;
              var ranges = this.selection.getAllRanges();
              for (var i6 = 0; i6 < ranges.length; i6++) {
                var range = ranges[i6];
                if (i6 && ranges[i6 - 1].start.row == range.start.row)
                  continue;
                text += this.session.getLine(range.start.row) + nl;
              }
            }
            var e10 = { text };
            this._signal("copy", e10);
            clipboard.lineMode = copyLine ? e10.text : false;
            return e10.text;
          };
          this.onCopy = function() {
            this.commands.exec("copy", this);
          };
          this.onCut = function() {
            this.commands.exec("cut", this);
          };
          this.onPaste = function(text, event) {
            var e10 = { text, event };
            this.commands.exec("paste", this, e10);
          };
          this.$handlePaste = function(e10) {
            if (typeof e10 == "string")
              e10 = { text: e10 };
            this._signal("paste", e10);
            var text = e10.text;
            var lineMode = text === clipboard.lineMode;
            var session = this.session;
            if (!this.inMultiSelectMode || this.inVirtualSelectionMode) {
              if (lineMode)
                session.insert({ row: this.selection.lead.row, column: 0 }, text);
              else
                this.insert(text);
            } else if (lineMode) {
              this.selection.rangeList.ranges.forEach(function(range2) {
                session.insert({ row: range2.start.row, column: 0 }, text);
              });
            } else {
              var lines = text.split(/\r\n|\r|\n/);
              var ranges = this.selection.rangeList.ranges;
              var isFullLine = lines.length == 2 && (!lines[0] || !lines[1]);
              if (lines.length != ranges.length || isFullLine)
                return this.commands.exec("insertstring", this, text);
              for (var i6 = ranges.length; i6--; ) {
                var range = ranges[i6];
                if (!range.isEmpty())
                  session.remove(range);
                session.insert(range.start, lines[i6]);
              }
            }
          };
          this.execCommand = function(command, args) {
            return this.commands.exec(command, this, args);
          };
          this.insert = function(text, pasted) {
            var session = this.session;
            var mode = session.getMode();
            var cursor = this.getCursorPosition();
            if (this.getBehavioursEnabled() && !pasted) {
              var transform = mode.transformAction(session.getState(cursor.row), "insertion", this, session, text);
              if (transform) {
                if (text !== transform.text) {
                  if (!this.inVirtualSelectionMode) {
                    this.session.mergeUndoDeltas = false;
                    this.mergeNextCommand = false;
                  }
                }
                text = transform.text;
              }
            }
            if (text == "	")
              text = this.session.getTabString();
            if (!this.selection.isEmpty()) {
              var range = this.getSelectionRange();
              cursor = this.session.remove(range);
              this.clearSelection();
            } else if (this.session.getOverwrite() && text.indexOf("\n") == -1) {
              var range = new Range.fromPoints(cursor, cursor);
              range.end.column += text.length;
              this.session.remove(range);
            }
            if (text == "\n" || text == "\r\n") {
              var line = session.getLine(cursor.row);
              if (cursor.column > line.search(/\S|$/)) {
                var d3 = line.substr(cursor.column).search(/\S|$/);
                session.doc.removeInLine(cursor.row, cursor.column, cursor.column + d3);
              }
            }
            this.clearSelection();
            var start = cursor.column;
            var lineState = session.getState(cursor.row);
            var line = session.getLine(cursor.row);
            var shouldOutdent = mode.checkOutdent(lineState, line, text);
            session.insert(cursor, text);
            if (transform && transform.selection) {
              if (transform.selection.length == 2) {
                this.selection.setSelectionRange(
                  new Range(
                    cursor.row,
                    start + transform.selection[0],
                    cursor.row,
                    start + transform.selection[1]
                  )
                );
              } else {
                this.selection.setSelectionRange(
                  new Range(
                    cursor.row + transform.selection[0],
                    transform.selection[1],
                    cursor.row + transform.selection[2],
                    transform.selection[3]
                  )
                );
              }
            }
            if (this.$enableAutoIndent) {
              if (session.getDocument().isNewLine(text)) {
                var lineIndent = mode.getNextLineIndent(lineState, line.slice(0, cursor.column), session.getTabString());
                session.insert({ row: cursor.row + 1, column: 0 }, lineIndent);
              }
              if (shouldOutdent)
                mode.autoOutdent(lineState, session, cursor.row);
            }
          };
          this.autoIndent = function() {
            var session = this.session;
            var mode = session.getMode();
            var startRow, endRow;
            if (this.selection.isEmpty()) {
              startRow = 0;
              endRow = session.doc.getLength() - 1;
            } else {
              var selectedRange = this.getSelectionRange();
              startRow = selectedRange.start.row;
              endRow = selectedRange.end.row;
            }
            var prevLineState = "";
            var prevLine = "";
            var lineIndent = "";
            var line, currIndent, range;
            var tab = session.getTabString();
            for (var row = startRow; row <= endRow; row++) {
              if (row > 0) {
                prevLineState = session.getState(row - 1);
                prevLine = session.getLine(row - 1);
                lineIndent = mode.getNextLineIndent(prevLineState, prevLine, tab);
              }
              line = session.getLine(row);
              currIndent = mode.$getIndent(line);
              if (lineIndent !== currIndent) {
                if (currIndent.length > 0) {
                  range = new Range(row, 0, row, currIndent.length);
                  session.remove(range);
                }
                if (lineIndent.length > 0) {
                  session.insert({ row, column: 0 }, lineIndent);
                }
              }
              mode.autoOutdent(prevLineState, session, row);
            }
          };
          this.onTextInput = function(text, composition) {
            if (!composition)
              return this.keyBinding.onTextInput(text);
            this.startOperation({ command: { name: "insertstring" } });
            var applyComposition = this.applyComposition.bind(this, text, composition);
            if (this.selection.rangeCount)
              this.forEachSelection(applyComposition);
            else
              applyComposition();
            this.endOperation();
          };
          this.applyComposition = function(text, composition) {
            if (composition.extendLeft || composition.extendRight) {
              var r5 = this.selection.getRange();
              r5.start.column -= composition.extendLeft;
              r5.end.column += composition.extendRight;
              if (r5.start.column < 0) {
                r5.start.row--;
                r5.start.column += this.session.getLine(r5.start.row).length + 1;
              }
              this.selection.setRange(r5);
              if (!text && !r5.isEmpty())
                this.remove();
            }
            if (text || !this.selection.isEmpty())
              this.insert(text, true);
            if (composition.restoreStart || composition.restoreEnd) {
              var r5 = this.selection.getRange();
              r5.start.column -= composition.restoreStart;
              r5.end.column -= composition.restoreEnd;
              this.selection.setRange(r5);
            }
          };
          this.onCommandKey = function(e10, hashId, keyCode) {
            return this.keyBinding.onCommandKey(e10, hashId, keyCode);
          };
          this.setOverwrite = function(overwrite) {
            this.session.setOverwrite(overwrite);
          };
          this.getOverwrite = function() {
            return this.session.getOverwrite();
          };
          this.toggleOverwrite = function() {
            this.session.toggleOverwrite();
          };
          this.setScrollSpeed = function(speed) {
            this.setOption("scrollSpeed", speed);
          };
          this.getScrollSpeed = function() {
            return this.getOption("scrollSpeed");
          };
          this.setDragDelay = function(dragDelay) {
            this.setOption("dragDelay", dragDelay);
          };
          this.getDragDelay = function() {
            return this.getOption("dragDelay");
          };
          this.setSelectionStyle = function(val) {
            this.setOption("selectionStyle", val);
          };
          this.getSelectionStyle = function() {
            return this.getOption("selectionStyle");
          };
          this.setHighlightActiveLine = function(shouldHighlight) {
            this.setOption("highlightActiveLine", shouldHighlight);
          };
          this.getHighlightActiveLine = function() {
            return this.getOption("highlightActiveLine");
          };
          this.setHighlightGutterLine = function(shouldHighlight) {
            this.setOption("highlightGutterLine", shouldHighlight);
          };
          this.getHighlightGutterLine = function() {
            return this.getOption("highlightGutterLine");
          };
          this.setHighlightSelectedWord = function(shouldHighlight) {
            this.setOption("highlightSelectedWord", shouldHighlight);
          };
          this.getHighlightSelectedWord = function() {
            return this.$highlightSelectedWord;
          };
          this.setAnimatedScroll = function(shouldAnimate) {
            this.renderer.setAnimatedScroll(shouldAnimate);
          };
          this.getAnimatedScroll = function() {
            return this.renderer.getAnimatedScroll();
          };
          this.setShowInvisibles = function(showInvisibles) {
            this.renderer.setShowInvisibles(showInvisibles);
          };
          this.getShowInvisibles = function() {
            return this.renderer.getShowInvisibles();
          };
          this.setDisplayIndentGuides = function(display) {
            this.renderer.setDisplayIndentGuides(display);
          };
          this.getDisplayIndentGuides = function() {
            return this.renderer.getDisplayIndentGuides();
          };
          this.setShowPrintMargin = function(showPrintMargin) {
            this.renderer.setShowPrintMargin(showPrintMargin);
          };
          this.getShowPrintMargin = function() {
            return this.renderer.getShowPrintMargin();
          };
          this.setPrintMarginColumn = function(showPrintMargin) {
            this.renderer.setPrintMarginColumn(showPrintMargin);
          };
          this.getPrintMarginColumn = function() {
            return this.renderer.getPrintMarginColumn();
          };
          this.setReadOnly = function(readOnly) {
            this.setOption("readOnly", readOnly);
          };
          this.getReadOnly = function() {
            return this.getOption("readOnly");
          };
          this.setBehavioursEnabled = function(enabled) {
            this.setOption("behavioursEnabled", enabled);
          };
          this.getBehavioursEnabled = function() {
            return this.getOption("behavioursEnabled");
          };
          this.setWrapBehavioursEnabled = function(enabled) {
            this.setOption("wrapBehavioursEnabled", enabled);
          };
          this.getWrapBehavioursEnabled = function() {
            return this.getOption("wrapBehavioursEnabled");
          };
          this.setShowFoldWidgets = function(show) {
            this.setOption("showFoldWidgets", show);
          };
          this.getShowFoldWidgets = function() {
            return this.getOption("showFoldWidgets");
          };
          this.setFadeFoldWidgets = function(fade) {
            this.setOption("fadeFoldWidgets", fade);
          };
          this.getFadeFoldWidgets = function() {
            return this.getOption("fadeFoldWidgets");
          };
          this.remove = function(dir) {
            if (this.selection.isEmpty()) {
              if (dir == "left")
                this.selection.selectLeft();
              else
                this.selection.selectRight();
            }
            var range = this.getSelectionRange();
            if (this.getBehavioursEnabled()) {
              var session = this.session;
              var state = session.getState(range.start.row);
              var new_range = session.getMode().transformAction(state, "deletion", this, session, range);
              if (range.end.column === 0) {
                var text = session.getTextRange(range);
                if (text[text.length - 1] == "\n") {
                  var line = session.getLine(range.end.row);
                  if (/^\s+$/.test(line)) {
                    range.end.column = line.length;
                  }
                }
              }
              if (new_range)
                range = new_range;
            }
            this.session.remove(range);
            this.clearSelection();
          };
          this.removeWordRight = function() {
            if (this.selection.isEmpty())
              this.selection.selectWordRight();
            this.session.remove(this.getSelectionRange());
            this.clearSelection();
          };
          this.removeWordLeft = function() {
            if (this.selection.isEmpty())
              this.selection.selectWordLeft();
            this.session.remove(this.getSelectionRange());
            this.clearSelection();
          };
          this.removeToLineStart = function() {
            if (this.selection.isEmpty())
              this.selection.selectLineStart();
            if (this.selection.isEmpty())
              this.selection.selectLeft();
            this.session.remove(this.getSelectionRange());
            this.clearSelection();
          };
          this.removeToLineEnd = function() {
            if (this.selection.isEmpty())
              this.selection.selectLineEnd();
            var range = this.getSelectionRange();
            if (range.start.column == range.end.column && range.start.row == range.end.row) {
              range.end.column = 0;
              range.end.row++;
            }
            this.session.remove(range);
            this.clearSelection();
          };
          this.splitLine = function() {
            if (!this.selection.isEmpty()) {
              this.session.remove(this.getSelectionRange());
              this.clearSelection();
            }
            var cursor = this.getCursorPosition();
            this.insert("\n");
            this.moveCursorToPosition(cursor);
          };
          this.transposeLetters = function() {
            if (!this.selection.isEmpty()) {
              return;
            }
            var cursor = this.getCursorPosition();
            var column = cursor.column;
            if (column === 0)
              return;
            var line = this.session.getLine(cursor.row);
            var swap, range;
            if (column < line.length) {
              swap = line.charAt(column) + line.charAt(column - 1);
              range = new Range(cursor.row, column - 1, cursor.row, column + 1);
            } else {
              swap = line.charAt(column - 1) + line.charAt(column - 2);
              range = new Range(cursor.row, column - 2, cursor.row, column);
            }
            this.session.replace(range, swap);
            this.session.selection.moveToPosition(range.end);
          };
          this.toLowerCase = function() {
            var originalRange = this.getSelectionRange();
            if (this.selection.isEmpty()) {
              this.selection.selectWord();
            }
            var range = this.getSelectionRange();
            var text = this.session.getTextRange(range);
            this.session.replace(range, text.toLowerCase());
            this.selection.setSelectionRange(originalRange);
          };
          this.toUpperCase = function() {
            var originalRange = this.getSelectionRange();
            if (this.selection.isEmpty()) {
              this.selection.selectWord();
            }
            var range = this.getSelectionRange();
            var text = this.session.getTextRange(range);
            this.session.replace(range, text.toUpperCase());
            this.selection.setSelectionRange(originalRange);
          };
          this.indent = function() {
            var session = this.session;
            var range = this.getSelectionRange();
            if (range.start.row < range.end.row) {
              var rows = this.$getSelectedRows();
              session.indentRows(rows.first, rows.last, "	");
              return;
            } else if (range.start.column < range.end.column) {
              var text = session.getTextRange(range);
              if (!/^\s+$/.test(text)) {
                var rows = this.$getSelectedRows();
                session.indentRows(rows.first, rows.last, "	");
                return;
              }
            }
            var line = session.getLine(range.start.row);
            var position = range.start;
            var size = session.getTabSize();
            var column = session.documentToScreenColumn(position.row, position.column);
            if (this.session.getUseSoftTabs()) {
              var count = size - column % size;
              var indentString = lang.stringRepeat(" ", count);
            } else {
              var count = column % size;
              while (line[range.start.column - 1] == " " && count) {
                range.start.column--;
                count--;
              }
              this.selection.setSelectionRange(range);
              indentString = "	";
            }
            return this.insert(indentString);
          };
          this.blockIndent = function() {
            var rows = this.$getSelectedRows();
            this.session.indentRows(rows.first, rows.last, "	");
          };
          this.blockOutdent = function() {
            var selection = this.session.getSelection();
            this.session.outdentRows(selection.getRange());
          };
          this.sortLines = function() {
            var rows = this.$getSelectedRows();
            var session = this.session;
            var lines = [];
            for (var i6 = rows.first; i6 <= rows.last; i6++)
              lines.push(session.getLine(i6));
            lines.sort(function(a3, b2) {
              if (a3.toLowerCase() < b2.toLowerCase())
                return -1;
              if (a3.toLowerCase() > b2.toLowerCase())
                return 1;
              return 0;
            });
            var deleteRange = new Range(0, 0, 0, 0);
            for (var i6 = rows.first; i6 <= rows.last; i6++) {
              var line = session.getLine(i6);
              deleteRange.start.row = i6;
              deleteRange.end.row = i6;
              deleteRange.end.column = line.length;
              session.replace(deleteRange, lines[i6 - rows.first]);
            }
          };
          this.toggleCommentLines = function() {
            var state = this.session.getState(this.getCursorPosition().row);
            var rows = this.$getSelectedRows();
            this.session.getMode().toggleCommentLines(state, this.session, rows.first, rows.last);
          };
          this.toggleBlockComment = function() {
            var cursor = this.getCursorPosition();
            var state = this.session.getState(cursor.row);
            var range = this.getSelectionRange();
            this.session.getMode().toggleBlockComment(state, this.session, range, cursor);
          };
          this.getNumberAt = function(row, column) {
            var _numberRx = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
            _numberRx.lastIndex = 0;
            var s5 = this.session.getLine(row);
            while (_numberRx.lastIndex < column) {
              var m2 = _numberRx.exec(s5);
              if (m2.index <= column && m2.index + m2[0].length >= column) {
                var number = {
                  value: m2[0],
                  start: m2.index,
                  end: m2.index + m2[0].length
                };
                return number;
              }
            }
            return null;
          };
          this.modifyNumber = function(amount) {
            var row = this.selection.getCursor().row;
            var column = this.selection.getCursor().column;
            var charRange = new Range(row, column - 1, row, column);
            var c2 = this.session.getTextRange(charRange);
            if (!isNaN(parseFloat(c2)) && isFinite(c2)) {
              var nr = this.getNumberAt(row, column);
              if (nr) {
                var fp = nr.value.indexOf(".") >= 0 ? nr.start + nr.value.indexOf(".") + 1 : nr.end;
                var decimals = nr.start + nr.value.length - fp;
                var t5 = parseFloat(nr.value);
                t5 *= Math.pow(10, decimals);
                if (fp !== nr.end && column < fp) {
                  amount *= Math.pow(10, nr.end - column - 1);
                } else {
                  amount *= Math.pow(10, nr.end - column);
                }
                t5 += amount;
                t5 /= Math.pow(10, decimals);
                var nnr = t5.toFixed(decimals);
                var replaceRange = new Range(row, nr.start, row, nr.end);
                this.session.replace(replaceRange, nnr);
                this.moveCursorTo(row, Math.max(nr.start + 1, column + nnr.length - nr.value.length));
              }
            } else {
              this.toggleWord();
            }
          };
          this.$toggleWordPairs = [
            ["first", "last"],
            ["true", "false"],
            ["yes", "no"],
            ["width", "height"],
            ["top", "bottom"],
            ["right", "left"],
            ["on", "off"],
            ["x", "y"],
            ["get", "set"],
            ["max", "min"],
            ["horizontal", "vertical"],
            ["show", "hide"],
            ["add", "remove"],
            ["up", "down"],
            ["before", "after"],
            ["even", "odd"],
            ["in", "out"],
            ["inside", "outside"],
            ["next", "previous"],
            ["increase", "decrease"],
            ["attach", "detach"],
            ["&&", "||"],
            ["==", "!="]
          ];
          this.toggleWord = function() {
            var row = this.selection.getCursor().row;
            var column = this.selection.getCursor().column;
            this.selection.selectWord();
            var currentState = this.getSelectedText();
            var currWordStart = this.selection.getWordRange().start.column;
            var wordParts = currentState.replace(/([a-z]+|[A-Z]+)(?=[A-Z_]|$)/g, "$1 ").split(/\s/);
            var delta = column - currWordStart - 1;
            if (delta < 0)
              delta = 0;
            var curLength = 0, itLength = 0;
            var that = this;
            if (currentState.match(/[A-Za-z0-9_]+/)) {
              wordParts.forEach(function(item2, i7) {
                itLength = curLength + item2.length;
                if (delta >= curLength && delta <= itLength) {
                  currentState = item2;
                  that.selection.clearSelection();
                  that.moveCursorTo(row, curLength + currWordStart);
                  that.selection.selectTo(row, itLength + currWordStart);
                }
                curLength = itLength;
              });
            }
            var wordPairs = this.$toggleWordPairs;
            var reg;
            for (var i6 = 0; i6 < wordPairs.length; i6++) {
              var item = wordPairs[i6];
              for (var j = 0; j <= 1; j++) {
                var negate = +!j;
                var firstCondition = currentState.match(new RegExp("^\\s?_?(" + lang.escapeRegExp(item[j]) + ")\\s?$", "i"));
                if (firstCondition) {
                  var secondCondition = currentState.match(new RegExp("([_]|^|\\s)(" + lang.escapeRegExp(firstCondition[1]) + ")($|\\s)", "g"));
                  if (secondCondition) {
                    reg = currentState.replace(new RegExp(lang.escapeRegExp(item[j]), "i"), function(result) {
                      var res = item[negate];
                      if (result.toUpperCase() == result) {
                        res = res.toUpperCase();
                      } else if (result.charAt(0).toUpperCase() == result.charAt(0)) {
                        res = res.substr(0, 0) + item[negate].charAt(0).toUpperCase() + res.substr(1);
                      }
                      return res;
                    });
                    this.insert(reg);
                    reg = "";
                  }
                }
              }
            }
          };
          this.removeLines = function() {
            var rows = this.$getSelectedRows();
            this.session.removeFullLines(rows.first, rows.last);
            this.clearSelection();
          };
          this.duplicateSelection = function() {
            var sel = this.selection;
            var doc = this.session;
            var range = sel.getRange();
            var reverse = sel.isBackwards();
            if (range.isEmpty()) {
              var row = range.start.row;
              doc.duplicateLines(row, row);
            } else {
              var point = reverse ? range.start : range.end;
              var endPoint = doc.insert(point, doc.getTextRange(range), false);
              range.start = point;
              range.end = endPoint;
              sel.setSelectionRange(range, reverse);
            }
          };
          this.moveLinesDown = function() {
            this.$moveLines(1, false);
          };
          this.moveLinesUp = function() {
            this.$moveLines(-1, false);
          };
          this.moveText = function(range, toPosition, copy) {
            return this.session.moveText(range, toPosition, copy);
          };
          this.copyLinesUp = function() {
            this.$moveLines(-1, true);
          };
          this.copyLinesDown = function() {
            this.$moveLines(1, true);
          };
          this.$moveLines = function(dir, copy) {
            var rows, moved;
            var selection = this.selection;
            if (!selection.inMultiSelectMode || this.inVirtualSelectionMode) {
              var range = selection.toOrientedRange();
              rows = this.$getSelectedRows(range);
              moved = this.session.$moveLines(rows.first, rows.last, copy ? 0 : dir);
              if (copy && dir == -1)
                moved = 0;
              range.moveBy(moved, 0);
              selection.fromOrientedRange(range);
            } else {
              var ranges = selection.rangeList.ranges;
              selection.rangeList.detach(this.session);
              this.inVirtualSelectionMode = true;
              var diff = 0;
              var totalDiff = 0;
              var l7 = ranges.length;
              for (var i6 = 0; i6 < l7; i6++) {
                var rangeIndex = i6;
                ranges[i6].moveBy(diff, 0);
                rows = this.$getSelectedRows(ranges[i6]);
                var first = rows.first;
                var last = rows.last;
                while (++i6 < l7) {
                  if (totalDiff)
                    ranges[i6].moveBy(totalDiff, 0);
                  var subRows = this.$getSelectedRows(ranges[i6]);
                  if (copy && subRows.first != last)
                    break;
                  else if (!copy && subRows.first > last + 1)
                    break;
                  last = subRows.last;
                }
                i6--;
                diff = this.session.$moveLines(first, last, copy ? 0 : dir);
                if (copy && dir == -1)
                  rangeIndex = i6 + 1;
                while (rangeIndex <= i6) {
                  ranges[rangeIndex].moveBy(diff, 0);
                  rangeIndex++;
                }
                if (!copy)
                  diff = 0;
                totalDiff += diff;
              }
              selection.fromOrientedRange(selection.ranges[0]);
              selection.rangeList.attach(this.session);
              this.inVirtualSelectionMode = false;
            }
          };
          this.$getSelectedRows = function(range) {
            range = (range || this.getSelectionRange()).collapseRows();
            return {
              first: this.session.getRowFoldStart(range.start.row),
              last: this.session.getRowFoldEnd(range.end.row)
            };
          };
          this.onCompositionStart = function(compositionState) {
            this.renderer.showComposition(compositionState);
          };
          this.onCompositionUpdate = function(text) {
            this.renderer.setCompositionText(text);
          };
          this.onCompositionEnd = function() {
            this.renderer.hideComposition();
          };
          this.getFirstVisibleRow = function() {
            return this.renderer.getFirstVisibleRow();
          };
          this.getLastVisibleRow = function() {
            return this.renderer.getLastVisibleRow();
          };
          this.isRowVisible = function(row) {
            return row >= this.getFirstVisibleRow() && row <= this.getLastVisibleRow();
          };
          this.isRowFullyVisible = function(row) {
            return row >= this.renderer.getFirstFullyVisibleRow() && row <= this.renderer.getLastFullyVisibleRow();
          };
          this.$getVisibleRowCount = function() {
            return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1;
          };
          this.$moveByPage = function(dir, select) {
            var renderer = this.renderer;
            var config3 = this.renderer.layerConfig;
            var rows = dir * Math.floor(config3.height / config3.lineHeight);
            if (select === true) {
              this.selection.$moveSelection(function() {
                this.moveCursorBy(rows, 0);
              });
            } else if (select === false) {
              this.selection.moveCursorBy(rows, 0);
              this.selection.clearSelection();
            }
            var scrollTop = renderer.scrollTop;
            renderer.scrollBy(0, rows * config3.lineHeight);
            if (select != null)
              renderer.scrollCursorIntoView(null, 0.5);
            renderer.animateScrolling(scrollTop);
          };
          this.selectPageDown = function() {
            this.$moveByPage(1, true);
          };
          this.selectPageUp = function() {
            this.$moveByPage(-1, true);
          };
          this.gotoPageDown = function() {
            this.$moveByPage(1, false);
          };
          this.gotoPageUp = function() {
            this.$moveByPage(-1, false);
          };
          this.scrollPageDown = function() {
            this.$moveByPage(1);
          };
          this.scrollPageUp = function() {
            this.$moveByPage(-1);
          };
          this.scrollToRow = function(row) {
            this.renderer.scrollToRow(row);
          };
          this.scrollToLine = function(line, center, animate, callback) {
            this.renderer.scrollToLine(line, center, animate, callback);
          };
          this.centerSelection = function() {
            var range = this.getSelectionRange();
            var pos = {
              row: Math.floor(range.start.row + (range.end.row - range.start.row) / 2),
              column: Math.floor(range.start.column + (range.end.column - range.start.column) / 2)
            };
            this.renderer.alignCursor(pos, 0.5);
          };
          this.getCursorPosition = function() {
            return this.selection.getCursor();
          };
          this.getCursorPositionScreen = function() {
            return this.session.documentToScreenPosition(this.getCursorPosition());
          };
          this.getSelectionRange = function() {
            return this.selection.getRange();
          };
          this.selectAll = function() {
            this.selection.selectAll();
          };
          this.clearSelection = function() {
            this.selection.clearSelection();
          };
          this.moveCursorTo = function(row, column) {
            this.selection.moveCursorTo(row, column);
          };
          this.moveCursorToPosition = function(pos) {
            this.selection.moveCursorToPosition(pos);
          };
          this.jumpToMatching = function(select, expand) {
            var cursor = this.getCursorPosition();
            var iterator = new TokenIterator(this.session, cursor.row, cursor.column);
            var prevToken = iterator.getCurrentToken();
            var token = prevToken || iterator.stepForward();
            if (!token)
              return;
            var matchType;
            var found = false;
            var depth = {};
            var i6 = cursor.column - token.start;
            var bracketType;
            var brackets = {
              ")": "(",
              "(": "(",
              "]": "[",
              "[": "[",
              "{": "{",
              "}": "{"
            };
            do {
              if (token.value.match(/[{}()\[\]]/g)) {
                for (; i6 < token.value.length && !found; i6++) {
                  if (!brackets[token.value[i6]]) {
                    continue;
                  }
                  bracketType = brackets[token.value[i6]] + "." + token.type.replace("rparen", "lparen");
                  if (isNaN(depth[bracketType])) {
                    depth[bracketType] = 0;
                  }
                  switch (token.value[i6]) {
                    case "(":
                    case "[":
                    case "{":
                      depth[bracketType]++;
                      break;
                    case ")":
                    case "]":
                    case "}":
                      depth[bracketType]--;
                      if (depth[bracketType] === -1) {
                        matchType = "bracket";
                        found = true;
                      }
                      break;
                  }
                }
              } else if (token.type.indexOf("tag-name") !== -1) {
                if (isNaN(depth[token.value])) {
                  depth[token.value] = 0;
                }
                if (prevToken.value === "<") {
                  depth[token.value]++;
                } else if (prevToken.value === "</") {
                  depth[token.value]--;
                }
                if (depth[token.value] === -1) {
                  matchType = "tag";
                  found = true;
                }
              }
              if (!found) {
                prevToken = token;
                token = iterator.stepForward();
                i6 = 0;
              }
            } while (token && !found);
            if (!matchType)
              return;
            var range, pos;
            if (matchType === "bracket") {
              range = this.session.getBracketRange(cursor);
              if (!range) {
                range = new Range(
                  iterator.getCurrentTokenRow(),
                  iterator.getCurrentTokenColumn() + i6 - 1,
                  iterator.getCurrentTokenRow(),
                  iterator.getCurrentTokenColumn() + i6 - 1
                );
                pos = range.start;
                if (expand || pos.row === cursor.row && Math.abs(pos.column - cursor.column) < 2)
                  range = this.session.getBracketRange(pos);
              }
            } else if (matchType === "tag") {
              if (token && token.type.indexOf("tag-name") !== -1)
                var tag = token.value;
              else
                return;
              range = new Range(
                iterator.getCurrentTokenRow(),
                iterator.getCurrentTokenColumn() - 2,
                iterator.getCurrentTokenRow(),
                iterator.getCurrentTokenColumn() - 2
              );
              if (range.compare(cursor.row, cursor.column) === 0) {
                found = false;
                do {
                  token = prevToken;
                  prevToken = iterator.stepBackward();
                  if (prevToken) {
                    if (prevToken.type.indexOf("tag-close") !== -1) {
                      range.setEnd(iterator.getCurrentTokenRow(), iterator.getCurrentTokenColumn() + 1);
                    }
                    if (token.value === tag && token.type.indexOf("tag-name") !== -1) {
                      if (prevToken.value === "<") {
                        depth[tag]++;
                      } else if (prevToken.value === "</") {
                        depth[tag]--;
                      }
                      if (depth[tag] === 0)
                        found = true;
                    }
                  }
                } while (prevToken && !found);
              }
              if (token && token.type.indexOf("tag-name")) {
                pos = range.start;
                if (pos.row == cursor.row && Math.abs(pos.column - cursor.column) < 2)
                  pos = range.end;
              }
            }
            pos = range && range.cursor || pos;
            if (pos) {
              if (select) {
                if (range && expand) {
                  this.selection.setRange(range);
                } else if (range && range.isEqual(this.getSelectionRange())) {
                  this.clearSelection();
                } else {
                  this.selection.selectTo(pos.row, pos.column);
                }
              } else {
                this.selection.moveTo(pos.row, pos.column);
              }
            }
          };
          this.gotoLine = function(lineNumber, column, animate) {
            this.selection.clearSelection();
            this.session.unfold({ row: lineNumber - 1, column: column || 0 });
            this.exitMultiSelectMode && this.exitMultiSelectMode();
            this.moveCursorTo(lineNumber - 1, column || 0);
            if (!this.isRowFullyVisible(lineNumber - 1))
              this.scrollToLine(lineNumber - 1, true, animate);
          };
          this.navigateTo = function(row, column) {
            this.selection.moveTo(row, column);
          };
          this.navigateUp = function(times) {
            if (this.selection.isMultiLine() && !this.selection.isBackwards()) {
              var selectionStart = this.selection.anchor.getPosition();
              return this.moveCursorToPosition(selectionStart);
            }
            this.selection.clearSelection();
            this.selection.moveCursorBy(-times || -1, 0);
          };
          this.navigateDown = function(times) {
            if (this.selection.isMultiLine() && this.selection.isBackwards()) {
              var selectionEnd = this.selection.anchor.getPosition();
              return this.moveCursorToPosition(selectionEnd);
            }
            this.selection.clearSelection();
            this.selection.moveCursorBy(times || 1, 0);
          };
          this.navigateLeft = function(times) {
            if (!this.selection.isEmpty()) {
              var selectionStart = this.getSelectionRange().start;
              this.moveCursorToPosition(selectionStart);
            } else {
              times = times || 1;
              while (times--) {
                this.selection.moveCursorLeft();
              }
            }
            this.clearSelection();
          };
          this.navigateRight = function(times) {
            if (!this.selection.isEmpty()) {
              var selectionEnd = this.getSelectionRange().end;
              this.moveCursorToPosition(selectionEnd);
            } else {
              times = times || 1;
              while (times--) {
                this.selection.moveCursorRight();
              }
            }
            this.clearSelection();
          };
          this.navigateLineStart = function() {
            this.selection.moveCursorLineStart();
            this.clearSelection();
          };
          this.navigateLineEnd = function() {
            this.selection.moveCursorLineEnd();
            this.clearSelection();
          };
          this.navigateFileEnd = function() {
            this.selection.moveCursorFileEnd();
            this.clearSelection();
          };
          this.navigateFileStart = function() {
            this.selection.moveCursorFileStart();
            this.clearSelection();
          };
          this.navigateWordRight = function() {
            this.selection.moveCursorWordRight();
            this.clearSelection();
          };
          this.navigateWordLeft = function() {
            this.selection.moveCursorWordLeft();
            this.clearSelection();
          };
          this.replace = function(replacement, options) {
            if (options)
              this.$search.set(options);
            var range = this.$search.find(this.session);
            var replaced = 0;
            if (!range)
              return replaced;
            if (this.$tryReplace(range, replacement)) {
              replaced = 1;
            }
            this.selection.setSelectionRange(range);
            this.renderer.scrollSelectionIntoView(range.start, range.end);
            return replaced;
          };
          this.replaceAll = function(replacement, options) {
            if (options) {
              this.$search.set(options);
            }
            var ranges = this.$search.findAll(this.session);
            var replaced = 0;
            if (!ranges.length)
              return replaced;
            var selection = this.getSelectionRange();
            this.selection.moveTo(0, 0);
            for (var i6 = ranges.length - 1; i6 >= 0; --i6) {
              if (this.$tryReplace(ranges[i6], replacement)) {
                replaced++;
              }
            }
            this.selection.setSelectionRange(selection);
            return replaced;
          };
          this.$tryReplace = function(range, replacement) {
            var input = this.session.getTextRange(range);
            replacement = this.$search.replace(input, replacement);
            if (replacement !== null) {
              range.end = this.session.replace(range, replacement);
              return range;
            } else {
              return null;
            }
          };
          this.getLastSearchOptions = function() {
            return this.$search.getOptions();
          };
          this.find = function(needle, options, animate) {
            if (!options)
              options = {};
            if (typeof needle == "string" || needle instanceof RegExp)
              options.needle = needle;
            else if (typeof needle == "object")
              oop.mixin(options, needle);
            var range = this.selection.getRange();
            if (options.needle == null) {
              needle = this.session.getTextRange(range) || this.$search.$options.needle;
              if (!needle) {
                range = this.session.getWordRange(range.start.row, range.start.column);
                needle = this.session.getTextRange(range);
              }
              this.$search.set({ needle });
            }
            this.$search.set(options);
            if (!options.start)
              this.$search.set({ start: range });
            var newRange = this.$search.find(this.session);
            if (options.preventScroll)
              return newRange;
            if (newRange) {
              this.revealRange(newRange, animate);
              return newRange;
            }
            if (options.backwards)
              range.start = range.end;
            else
              range.end = range.start;
            this.selection.setRange(range);
          };
          this.findNext = function(options, animate) {
            this.find({ skipCurrent: true, backwards: false }, options, animate);
          };
          this.findPrevious = function(options, animate) {
            this.find(options, { skipCurrent: true, backwards: true }, animate);
          };
          this.revealRange = function(range, animate) {
            this.session.unfold(range);
            this.selection.setSelectionRange(range);
            var scrollTop = this.renderer.scrollTop;
            this.renderer.scrollSelectionIntoView(range.start, range.end, 0.5);
            if (animate !== false)
              this.renderer.animateScrolling(scrollTop);
          };
          this.undo = function() {
            this.session.getUndoManager().undo(this.session);
            this.renderer.scrollCursorIntoView(null, 0.5);
          };
          this.redo = function() {
            this.session.getUndoManager().redo(this.session);
            this.renderer.scrollCursorIntoView(null, 0.5);
          };
          this.destroy = function() {
            if (this.$toDestroy) {
              this.$toDestroy.forEach(function(el) {
                el.destroy();
              });
              this.$toDestroy = null;
            }
            if (this.$mouseHandler)
              this.$mouseHandler.destroy();
            this.renderer.destroy();
            this._signal("destroy", this);
            if (this.session)
              this.session.destroy();
            if (this._$emitInputEvent)
              this._$emitInputEvent.cancel();
            this.removeAllListeners();
          };
          this.setAutoScrollEditorIntoView = function(enable) {
            if (!enable)
              return;
            var rect;
            var self = this;
            var shouldScroll = false;
            if (!this.$scrollAnchor)
              this.$scrollAnchor = document.createElement("div");
            var scrollAnchor = this.$scrollAnchor;
            scrollAnchor.style.cssText = "position:absolute";
            this.container.insertBefore(scrollAnchor, this.container.firstChild);
            var onChangeSelection = this.on("changeSelection", function() {
              shouldScroll = true;
            });
            var onBeforeRender = this.renderer.on("beforeRender", function() {
              if (shouldScroll)
                rect = self.renderer.container.getBoundingClientRect();
            });
            var onAfterRender = this.renderer.on("afterRender", function() {
              if (shouldScroll && rect && (self.isFocused() || self.searchBox && self.searchBox.isFocused())) {
                var renderer = self.renderer;
                var pos = renderer.$cursorLayer.$pixelPos;
                var config3 = renderer.layerConfig;
                var top = pos.top - config3.offset;
                if (pos.top >= 0 && top + rect.top < 0) {
                  shouldScroll = true;
                } else if (pos.top < config3.height && pos.top + rect.top + config3.lineHeight > window.innerHeight) {
                  shouldScroll = false;
                } else {
                  shouldScroll = null;
                }
                if (shouldScroll != null) {
                  scrollAnchor.style.top = top + "px";
                  scrollAnchor.style.left = pos.left + "px";
                  scrollAnchor.style.height = config3.lineHeight + "px";
                  scrollAnchor.scrollIntoView(shouldScroll);
                }
                shouldScroll = rect = null;
              }
            });
            this.setAutoScrollEditorIntoView = function(enable2) {
              if (enable2)
                return;
              delete this.setAutoScrollEditorIntoView;
              this.off("changeSelection", onChangeSelection);
              this.renderer.off("afterRender", onAfterRender);
              this.renderer.off("beforeRender", onBeforeRender);
            };
          };
          this.$resetCursorStyle = function() {
            var style = this.$cursorStyle || "ace";
            var cursorLayer = this.renderer.$cursorLayer;
            if (!cursorLayer)
              return;
            cursorLayer.setSmoothBlinking(/smooth/.test(style));
            cursorLayer.isBlinking = !this.$readOnly && style != "wide";
            dom.setCssClass(cursorLayer.element, "ace_slim-cursors", /slim/.test(style));
          };
          this.prompt = function(message, options, callback) {
            var editor = this;
            config2.loadModule("./ext/prompt", function(module3) {
              module3.prompt(editor, message, options, callback);
            });
          };
        }).call(Editor.prototype);
        config2.defineOptions(Editor.prototype, "editor", {
          selectionStyle: {
            set: function(style) {
              this.onSelectionChange();
              this._signal("changeSelectionStyle", { data: style });
            },
            initialValue: "line"
          },
          highlightActiveLine: {
            set: function() {
              this.$updateHighlightActiveLine();
            },
            initialValue: true
          },
          highlightSelectedWord: {
            set: function(shouldHighlight) {
              this.$onSelectionChange();
            },
            initialValue: true
          },
          readOnly: {
            set: function(readOnly) {
              this.textInput.setReadOnly(readOnly);
              this.$resetCursorStyle();
            },
            initialValue: false
          },
          copyWithEmptySelection: {
            set: function(value) {
              this.textInput.setCopyWithEmptySelection(value);
            },
            initialValue: false
          },
          cursorStyle: {
            set: function(val) {
              this.$resetCursorStyle();
            },
            values: ["ace", "slim", "smooth", "wide"],
            initialValue: "ace"
          },
          mergeUndoDeltas: {
            values: [false, true, "always"],
            initialValue: true
          },
          behavioursEnabled: { initialValue: true },
          wrapBehavioursEnabled: { initialValue: true },
          enableAutoIndent: { initialValue: true },
          autoScrollEditorIntoView: {
            set: function(val) {
              this.setAutoScrollEditorIntoView(val);
            }
          },
          keyboardHandler: {
            set: function(val) {
              this.setKeyboardHandler(val);
            },
            get: function() {
              return this.$keybindingId;
            },
            handlesSet: true
          },
          value: {
            set: function(val) {
              this.session.setValue(val);
            },
            get: function() {
              return this.getValue();
            },
            handlesSet: true,
            hidden: true
          },
          session: {
            set: function(val) {
              this.setSession(val);
            },
            get: function() {
              return this.session;
            },
            handlesSet: true,
            hidden: true
          },
          showLineNumbers: {
            set: function(show) {
              this.renderer.$gutterLayer.setShowLineNumbers(show);
              this.renderer.$loop.schedule(this.renderer.CHANGE_GUTTER);
              if (show && this.$relativeLineNumbers)
                relativeNumberRenderer.attach(this);
              else
                relativeNumberRenderer.detach(this);
            },
            initialValue: true
          },
          relativeLineNumbers: {
            set: function(value) {
              if (this.$showLineNumbers && value)
                relativeNumberRenderer.attach(this);
              else
                relativeNumberRenderer.detach(this);
            }
          },
          placeholder: {
            set: function(message) {
              if (!this.$updatePlaceholder) {
                this.$updatePlaceholder = function() {
                  var value = this.session && (this.renderer.$composition || this.getValue());
                  if (value && this.renderer.placeholderNode) {
                    this.renderer.off("afterRender", this.$updatePlaceholder);
                    dom.removeCssClass(this.container, "ace_hasPlaceholder");
                    this.renderer.placeholderNode.remove();
                    this.renderer.placeholderNode = null;
                  } else if (!value && !this.renderer.placeholderNode) {
                    this.renderer.on("afterRender", this.$updatePlaceholder);
                    dom.addCssClass(this.container, "ace_hasPlaceholder");
                    var el = dom.createElement("div");
                    el.className = "ace_placeholder";
                    el.textContent = this.$placeholder || "";
                    this.renderer.placeholderNode = el;
                    this.renderer.content.appendChild(this.renderer.placeholderNode);
                  } else if (!value && this.renderer.placeholderNode) {
                    this.renderer.placeholderNode.textContent = this.$placeholder || "";
                  }
                }.bind(this);
                this.on("input", this.$updatePlaceholder);
              }
              this.$updatePlaceholder();
            }
          },
          hScrollBarAlwaysVisible: "renderer",
          vScrollBarAlwaysVisible: "renderer",
          highlightGutterLine: "renderer",
          animatedScroll: "renderer",
          showInvisibles: "renderer",
          showPrintMargin: "renderer",
          printMarginColumn: "renderer",
          printMargin: "renderer",
          fadeFoldWidgets: "renderer",
          showFoldWidgets: "renderer",
          displayIndentGuides: "renderer",
          showGutter: "renderer",
          fontSize: "renderer",
          fontFamily: "renderer",
          maxLines: "renderer",
          minLines: "renderer",
          scrollPastEnd: "renderer",
          fixedWidthGutter: "renderer",
          theme: "renderer",
          hasCssTransforms: "renderer",
          maxPixelHeight: "renderer",
          useTextareaForIME: "renderer",
          scrollSpeed: "$mouseHandler",
          dragDelay: "$mouseHandler",
          dragEnabled: "$mouseHandler",
          focusTimeout: "$mouseHandler",
          tooltipFollowsMouse: "$mouseHandler",
          firstLineNumber: "session",
          overwrite: "session",
          newLineMode: "session",
          useWorker: "session",
          useSoftTabs: "session",
          navigateWithinSoftTabs: "session",
          tabSize: "session",
          wrap: "session",
          indentedSoftWrap: "session",
          foldStyle: "session",
          mode: "session"
        });
        var relativeNumberRenderer = {
          getText: function(session, row) {
            return (Math.abs(session.selection.lead.row - row) || row + 1 + (row < 9 ? "\xB7" : "")) + "";
          },
          getWidth: function(session, lastLineNumber, config3) {
            return Math.max(
              lastLineNumber.toString().length,
              (config3.lastRow + 1).toString().length,
              2
            ) * config3.characterWidth;
          },
          update: function(e10, editor) {
            editor.renderer.$loop.schedule(editor.renderer.CHANGE_GUTTER);
          },
          attach: function(editor) {
            editor.renderer.$gutterLayer.$renderer = this;
            editor.on("changeSelection", this.update);
            this.update(null, editor);
          },
          detach: function(editor) {
            if (editor.renderer.$gutterLayer.$renderer == this)
              editor.renderer.$gutterLayer.$renderer = null;
            editor.off("changeSelection", this.update);
            this.update(null, editor);
          }
        };
        exports2.Editor = Editor;
      });
      ace.define("ace/undomanager", ["require", "exports", "module", "ace/range"], function(require3, exports2, module2) {
        "use strict";
        var UndoManager2 = function() {
          this.$maxRev = 0;
          this.$fromUndo = false;
          this.reset();
        };
        (function() {
          this.addSession = function(session) {
            this.$session = session;
          };
          this.add = function(delta, allowMerge, session) {
            if (this.$fromUndo)
              return;
            if (delta == this.$lastDelta)
              return;
            if (!this.$keepRedoStack)
              this.$redoStack.length = 0;
            if (allowMerge === false || !this.lastDeltas) {
              this.lastDeltas = [];
              this.$undoStack.push(this.lastDeltas);
              delta.id = this.$rev = ++this.$maxRev;
            }
            if (delta.action == "remove" || delta.action == "insert")
              this.$lastDelta = delta;
            this.lastDeltas.push(delta);
          };
          this.addSelection = function(selection, rev) {
            this.selections.push({
              value: selection,
              rev: rev || this.$rev
            });
          };
          this.startNewGroup = function() {
            this.lastDeltas = null;
            return this.$rev;
          };
          this.markIgnored = function(from, to) {
            if (to == null)
              to = this.$rev + 1;
            var stack = this.$undoStack;
            for (var i6 = stack.length; i6--; ) {
              var delta = stack[i6][0];
              if (delta.id <= from)
                break;
              if (delta.id < to)
                delta.ignore = true;
            }
            this.lastDeltas = null;
          };
          this.getSelection = function(rev, after) {
            var stack = this.selections;
            for (var i6 = stack.length; i6--; ) {
              var selection = stack[i6];
              if (selection.rev < rev) {
                if (after)
                  selection = stack[i6 + 1];
                return selection;
              }
            }
          };
          this.getRevision = function() {
            return this.$rev;
          };
          this.getDeltas = function(from, to) {
            if (to == null)
              to = this.$rev + 1;
            var stack = this.$undoStack;
            var end = null, start = 0;
            for (var i6 = stack.length; i6--; ) {
              var delta = stack[i6][0];
              if (delta.id < to && !end)
                end = i6 + 1;
              if (delta.id <= from) {
                start = i6 + 1;
                break;
              }
            }
            return stack.slice(start, end);
          };
          this.getChangedRanges = function(from, to) {
            if (to == null)
              to = this.$rev + 1;
          };
          this.getChangedLines = function(from, to) {
            if (to == null)
              to = this.$rev + 1;
          };
          this.undo = function(session, dontSelect) {
            this.lastDeltas = null;
            var stack = this.$undoStack;
            if (!rearrangeUndoStack(stack, stack.length))
              return;
            if (!session)
              session = this.$session;
            if (this.$redoStackBaseRev !== this.$rev && this.$redoStack.length)
              this.$redoStack = [];
            this.$fromUndo = true;
            var deltaSet = stack.pop();
            var undoSelectionRange = null;
            if (deltaSet) {
              undoSelectionRange = session.undoChanges(deltaSet, dontSelect);
              this.$redoStack.push(deltaSet);
              this.$syncRev();
            }
            this.$fromUndo = false;
            return undoSelectionRange;
          };
          this.redo = function(session, dontSelect) {
            this.lastDeltas = null;
            if (!session)
              session = this.$session;
            this.$fromUndo = true;
            if (this.$redoStackBaseRev != this.$rev) {
              var diff = this.getDeltas(this.$redoStackBaseRev, this.$rev + 1);
              rebaseRedoStack(this.$redoStack, diff);
              this.$redoStackBaseRev = this.$rev;
              this.$redoStack.forEach(function(x2) {
                x2[0].id = ++this.$maxRev;
              }, this);
            }
            var deltaSet = this.$redoStack.pop();
            var redoSelectionRange = null;
            if (deltaSet) {
              redoSelectionRange = session.redoChanges(deltaSet, dontSelect);
              this.$undoStack.push(deltaSet);
              this.$syncRev();
            }
            this.$fromUndo = false;
            return redoSelectionRange;
          };
          this.$syncRev = function() {
            var stack = this.$undoStack;
            var nextDelta = stack[stack.length - 1];
            var id = nextDelta && nextDelta[0].id || 0;
            this.$redoStackBaseRev = id;
            this.$rev = id;
          };
          this.reset = function() {
            this.lastDeltas = null;
            this.$lastDelta = null;
            this.$undoStack = [];
            this.$redoStack = [];
            this.$rev = 0;
            this.mark = 0;
            this.$redoStackBaseRev = this.$rev;
            this.selections = [];
          };
          this.canUndo = function() {
            return this.$undoStack.length > 0;
          };
          this.canRedo = function() {
            return this.$redoStack.length > 0;
          };
          this.bookmark = function(rev) {
            if (rev == void 0)
              rev = this.$rev;
            this.mark = rev;
          };
          this.isAtBookmark = function() {
            return this.$rev === this.mark;
          };
          this.toJSON = function() {
          };
          this.fromJSON = function() {
          };
          this.hasUndo = this.canUndo;
          this.hasRedo = this.canRedo;
          this.isClean = this.isAtBookmark;
          this.markClean = this.bookmark;
          this.$prettyPrint = function(delta) {
            if (delta)
              return stringifyDelta(delta);
            return stringifyDelta(this.$undoStack) + "\n---\n" + stringifyDelta(this.$redoStack);
          };
        }).call(UndoManager2.prototype);
        function rearrangeUndoStack(stack, pos) {
          for (var i6 = pos; i6--; ) {
            var deltaSet = stack[i6];
            if (deltaSet && !deltaSet[0].ignore) {
              while (i6 < pos - 1) {
                var swapped = swapGroups(stack[i6], stack[i6 + 1]);
                stack[i6] = swapped[0];
                stack[i6 + 1] = swapped[1];
                i6++;
              }
              return true;
            }
          }
        }
        var Range = require3("./range").Range;
        var cmp = Range.comparePoints;
        var comparePoints = Range.comparePoints;
        function $updateMarkers(delta) {
          var isInsert = delta.action == "insert";
          var start = delta.start;
          var end = delta.end;
          var rowShift = (end.row - start.row) * (isInsert ? 1 : -1);
          var colShift = (end.column - start.column) * (isInsert ? 1 : -1);
          if (isInsert)
            end = start;
          for (var i6 in this.marks) {
            var point = this.marks[i6];
            var cmp2 = comparePoints(point, start);
            if (cmp2 < 0) {
              continue;
            }
            if (cmp2 === 0) {
              if (isInsert) {
                if (point.bias == 1) {
                  cmp2 = 1;
                } else {
                  point.bias == -1;
                  continue;
                }
              }
            }
            var cmp22 = isInsert ? cmp2 : comparePoints(point, end);
            if (cmp22 > 0) {
              point.row += rowShift;
              point.column += point.row == end.row ? colShift : 0;
              continue;
            }
            if (!isInsert && cmp22 <= 0) {
              point.row = start.row;
              point.column = start.column;
              if (cmp22 === 0)
                point.bias = 1;
            }
          }
        }
        function clonePos(pos) {
          return { row: pos.row, column: pos.column };
        }
        function cloneDelta(d3) {
          return {
            start: clonePos(d3.start),
            end: clonePos(d3.end),
            action: d3.action,
            lines: d3.lines.slice()
          };
        }
        function stringifyDelta(d3) {
          d3 = d3 || this;
          if (Array.isArray(d3)) {
            return d3.map(stringifyDelta).join("\n");
          }
          var type = "";
          if (d3.action) {
            type = d3.action == "insert" ? "+" : "-";
            type += "[" + d3.lines + "]";
          } else if (d3.value) {
            if (Array.isArray(d3.value)) {
              type = d3.value.map(stringifyRange).join("\n");
            } else {
              type = stringifyRange(d3.value);
            }
          }
          if (d3.start) {
            type += stringifyRange(d3);
          }
          if (d3.id || d3.rev) {
            type += "	(" + (d3.id || d3.rev) + ")";
          }
          return type;
        }
        function stringifyRange(r5) {
          return r5.start.row + ":" + r5.start.column + "=>" + r5.end.row + ":" + r5.end.column;
        }
        function swap(d1, d22) {
          var i1 = d1.action == "insert";
          var i22 = d22.action == "insert";
          if (i1 && i22) {
            if (cmp(d22.start, d1.end) >= 0) {
              shift(d22, d1, -1);
            } else if (cmp(d22.start, d1.start) <= 0) {
              shift(d1, d22, 1);
            } else {
              return null;
            }
          } else if (i1 && !i22) {
            if (cmp(d22.start, d1.end) >= 0) {
              shift(d22, d1, -1);
            } else if (cmp(d22.end, d1.start) <= 0) {
              shift(d1, d22, -1);
            } else {
              return null;
            }
          } else if (!i1 && i22) {
            if (cmp(d22.start, d1.start) >= 0) {
              shift(d22, d1, 1);
            } else if (cmp(d22.start, d1.start) <= 0) {
              shift(d1, d22, 1);
            } else {
              return null;
            }
          } else if (!i1 && !i22) {
            if (cmp(d22.start, d1.start) >= 0) {
              shift(d22, d1, 1);
            } else if (cmp(d22.end, d1.start) <= 0) {
              shift(d1, d22, -1);
            } else {
              return null;
            }
          }
          return [d22, d1];
        }
        function swapGroups(ds1, ds2) {
          for (var i6 = ds1.length; i6--; ) {
            for (var j = 0; j < ds2.length; j++) {
              if (!swap(ds1[i6], ds2[j])) {
                while (i6 < ds1.length) {
                  while (j--) {
                    swap(ds2[j], ds1[i6]);
                  }
                  j = ds2.length;
                  i6++;
                }
                return [ds1, ds2];
              }
            }
          }
          ds1.selectionBefore = ds2.selectionBefore = ds1.selectionAfter = ds2.selectionAfter = null;
          return [ds2, ds1];
        }
        function xform(d1, c1) {
          var i1 = d1.action == "insert";
          var i22 = c1.action == "insert";
          if (i1 && i22) {
            if (cmp(d1.start, c1.start) < 0) {
              shift(c1, d1, 1);
            } else {
              shift(d1, c1, 1);
            }
          } else if (i1 && !i22) {
            if (cmp(d1.start, c1.end) >= 0) {
              shift(d1, c1, -1);
            } else if (cmp(d1.start, c1.start) <= 0) {
              shift(c1, d1, 1);
            } else {
              shift(d1, Range.fromPoints(c1.start, d1.start), -1);
              shift(c1, d1, 1);
            }
          } else if (!i1 && i22) {
            if (cmp(c1.start, d1.end) >= 0) {
              shift(c1, d1, -1);
            } else if (cmp(c1.start, d1.start) <= 0) {
              shift(d1, c1, 1);
            } else {
              shift(c1, Range.fromPoints(d1.start, c1.start), -1);
              shift(d1, c1, 1);
            }
          } else if (!i1 && !i22) {
            if (cmp(c1.start, d1.end) >= 0) {
              shift(c1, d1, -1);
            } else if (cmp(c1.end, d1.start) <= 0) {
              shift(d1, c1, -1);
            } else {
              var before, after;
              if (cmp(d1.start, c1.start) < 0) {
                before = d1;
                d1 = splitDelta(d1, c1.start);
              }
              if (cmp(d1.end, c1.end) > 0) {
                after = splitDelta(d1, c1.end);
              }
              shiftPos(c1.end, d1.start, d1.end, -1);
              if (after && !before) {
                d1.lines = after.lines;
                d1.start = after.start;
                d1.end = after.end;
                after = d1;
              }
              return [c1, before, after].filter(Boolean);
            }
          }
          return [c1, d1];
        }
        function shift(d1, d22, dir) {
          shiftPos(d1.start, d22.start, d22.end, dir);
          shiftPos(d1.end, d22.start, d22.end, dir);
        }
        function shiftPos(pos, start, end, dir) {
          if (pos.row == (dir == 1 ? start : end).row) {
            pos.column += dir * (end.column - start.column);
          }
          pos.row += dir * (end.row - start.row);
        }
        function splitDelta(c2, pos) {
          var lines = c2.lines;
          var end = c2.end;
          c2.end = clonePos(pos);
          var rowsBefore = c2.end.row - c2.start.row;
          var otherLines = lines.splice(rowsBefore, lines.length);
          var col = rowsBefore ? pos.column : pos.column - c2.start.column;
          lines.push(otherLines[0].substring(0, col));
          otherLines[0] = otherLines[0].substr(col);
          var rest = {
            start: clonePos(pos),
            end,
            lines: otherLines,
            action: c2.action
          };
          return rest;
        }
        function moveDeltasByOne(redoStack, d3) {
          d3 = cloneDelta(d3);
          for (var j = redoStack.length; j--; ) {
            var deltaSet = redoStack[j];
            for (var i6 = 0; i6 < deltaSet.length; i6++) {
              var x2 = deltaSet[i6];
              var xformed = xform(x2, d3);
              d3 = xformed[0];
              if (xformed.length != 2) {
                if (xformed[2]) {
                  deltaSet.splice(i6 + 1, 1, xformed[1], xformed[2]);
                  i6++;
                } else if (!xformed[1]) {
                  deltaSet.splice(i6, 1);
                  i6--;
                }
              }
            }
            if (!deltaSet.length) {
              redoStack.splice(j, 1);
            }
          }
          return redoStack;
        }
        function rebaseRedoStack(redoStack, deltaSets) {
          for (var i6 = 0; i6 < deltaSets.length; i6++) {
            var deltas = deltaSets[i6];
            for (var j = 0; j < deltas.length; j++) {
              moveDeltasByOne(redoStack, deltas[j]);
            }
          }
        }
        exports2.UndoManager = UndoManager2;
      });
      ace.define("ace/layer/lines", ["require", "exports", "module", "ace/lib/dom"], function(require3, exports2, module2) {
        "use strict";
        var dom = require3("../lib/dom");
        var Lines = function(element, canvasHeight) {
          this.element = element;
          this.canvasHeight = canvasHeight || 5e5;
          this.element.style.height = this.canvasHeight * 2 + "px";
          this.cells = [];
          this.cellCache = [];
          this.$offsetCoefficient = 0;
        };
        (function() {
          this.moveContainer = function(config2) {
            dom.translate(this.element, 0, -(config2.firstRowScreen * config2.lineHeight % this.canvasHeight) - config2.offset * this.$offsetCoefficient);
          };
          this.pageChanged = function(oldConfig, newConfig) {
            return Math.floor(oldConfig.firstRowScreen * oldConfig.lineHeight / this.canvasHeight) !== Math.floor(newConfig.firstRowScreen * newConfig.lineHeight / this.canvasHeight);
          };
          this.computeLineTop = function(row, config2, session) {
            var screenTop = config2.firstRowScreen * config2.lineHeight;
            var screenPage = Math.floor(screenTop / this.canvasHeight);
            var lineTop = session.documentToScreenRow(row, 0) * config2.lineHeight;
            return lineTop - screenPage * this.canvasHeight;
          };
          this.computeLineHeight = function(row, config2, session) {
            return config2.lineHeight * session.getRowLineCount(row);
          };
          this.getLength = function() {
            return this.cells.length;
          };
          this.get = function(index) {
            return this.cells[index];
          };
          this.shift = function() {
            this.$cacheCell(this.cells.shift());
          };
          this.pop = function() {
            this.$cacheCell(this.cells.pop());
          };
          this.push = function(cell) {
            if (Array.isArray(cell)) {
              this.cells.push.apply(this.cells, cell);
              var fragment = dom.createFragment(this.element);
              for (var i6 = 0; i6 < cell.length; i6++) {
                fragment.appendChild(cell[i6].element);
              }
              this.element.appendChild(fragment);
            } else {
              this.cells.push(cell);
              this.element.appendChild(cell.element);
            }
          };
          this.unshift = function(cell) {
            if (Array.isArray(cell)) {
              this.cells.unshift.apply(this.cells, cell);
              var fragment = dom.createFragment(this.element);
              for (var i6 = 0; i6 < cell.length; i6++) {
                fragment.appendChild(cell[i6].element);
              }
              if (this.element.firstChild)
                this.element.insertBefore(fragment, this.element.firstChild);
              else
                this.element.appendChild(fragment);
            } else {
              this.cells.unshift(cell);
              this.element.insertAdjacentElement("afterbegin", cell.element);
            }
          };
          this.last = function() {
            if (this.cells.length)
              return this.cells[this.cells.length - 1];
            else
              return null;
          };
          this.$cacheCell = function(cell) {
            if (!cell)
              return;
            cell.element.remove();
            this.cellCache.push(cell);
          };
          this.createCell = function(row, config2, session, initElement) {
            var cell = this.cellCache.pop();
            if (!cell) {
              var element = dom.createElement("div");
              if (initElement)
                initElement(element);
              this.element.appendChild(element);
              cell = {
                element,
                text: "",
                row
              };
            }
            cell.row = row;
            return cell;
          };
        }).call(Lines.prototype);
        exports2.Lines = Lines;
      });
      ace.define("ace/layer/gutter", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/layer/lines"], function(require3, exports2, module2) {
        "use strict";
        var dom = require3("../lib/dom");
        var oop = require3("../lib/oop");
        var lang = require3("../lib/lang");
        var EventEmitter = require3("../lib/event_emitter").EventEmitter;
        var Lines = require3("./lines").Lines;
        var Gutter = function(parentEl) {
          this.element = dom.createElement("div");
          this.element.className = "ace_layer ace_gutter-layer";
          parentEl.appendChild(this.element);
          this.setShowFoldWidgets(this.$showFoldWidgets);
          this.gutterWidth = 0;
          this.$annotations = [];
          this.$updateAnnotations = this.$updateAnnotations.bind(this);
          this.$lines = new Lines(this.element);
          this.$lines.$offsetCoefficient = 1;
        };
        (function() {
          oop.implement(this, EventEmitter);
          this.setSession = function(session) {
            if (this.session)
              this.session.off("change", this.$updateAnnotations);
            this.session = session;
            if (session)
              session.on("change", this.$updateAnnotations);
          };
          this.addGutterDecoration = function(row, className) {
            if (window.console)
              console.warn && console.warn("deprecated use session.addGutterDecoration");
            this.session.addGutterDecoration(row, className);
          };
          this.removeGutterDecoration = function(row, className) {
            if (window.console)
              console.warn && console.warn("deprecated use session.removeGutterDecoration");
            this.session.removeGutterDecoration(row, className);
          };
          this.setAnnotations = function(annotations) {
            this.$annotations = [];
            for (var i6 = 0; i6 < annotations.length; i6++) {
              var annotation = annotations[i6];
              var row = annotation.row;
              var rowInfo = this.$annotations[row];
              if (!rowInfo)
                rowInfo = this.$annotations[row] = { text: [] };
              var annoText = annotation.text;
              annoText = annoText ? lang.escapeHTML(annoText) : annotation.html || "";
              if (rowInfo.text.indexOf(annoText) === -1)
                rowInfo.text.push(annoText);
              var type = annotation.type;
              var className = annotation.className;
              if (className)
                rowInfo.className = className;
              else if (type == "error")
                rowInfo.className = " ace_error";
              else if (type == "warning" && rowInfo.className != " ace_error")
                rowInfo.className = " ace_warning";
              else if (type == "info" && !rowInfo.className)
                rowInfo.className = " ace_info";
            }
          };
          this.$updateAnnotations = function(delta) {
            if (!this.$annotations.length)
              return;
            var firstRow = delta.start.row;
            var len = delta.end.row - firstRow;
            if (len === 0) {
            } else if (delta.action == "remove") {
              this.$annotations.splice(firstRow, len + 1, null);
            } else {
              var args = new Array(len + 1);
              args.unshift(firstRow, 1);
              this.$annotations.splice.apply(this.$annotations, args);
            }
          };
          this.update = function(config2) {
            this.config = config2;
            var session = this.session;
            var firstRow = config2.firstRow;
            var lastRow = Math.min(
              config2.lastRow + config2.gutterOffset,
              session.getLength() - 1
            );
            this.oldLastRow = lastRow;
            this.config = config2;
            this.$lines.moveContainer(config2);
            this.$updateCursorRow();
            var fold = session.getNextFoldLine(firstRow);
            var foldStart = fold ? fold.start.row : Infinity;
            var cell = null;
            var index = -1;
            var row = firstRow;
            while (true) {
              if (row > foldStart) {
                row = fold.end.row + 1;
                fold = session.getNextFoldLine(row, fold);
                foldStart = fold ? fold.start.row : Infinity;
              }
              if (row > lastRow) {
                while (this.$lines.getLength() > index + 1)
                  this.$lines.pop();
                break;
              }
              cell = this.$lines.get(++index);
              if (cell) {
                cell.row = row;
              } else {
                cell = this.$lines.createCell(row, config2, this.session, onCreateCell);
                this.$lines.push(cell);
              }
              this.$renderCell(cell, config2, fold, row);
              row++;
            }
            this._signal("afterRender");
            this.$updateGutterWidth(config2);
          };
          this.$updateGutterWidth = function(config2) {
            var session = this.session;
            var gutterRenderer = session.gutterRenderer || this.$renderer;
            var firstLineNumber = session.$firstLineNumber;
            var lastLineText = this.$lines.last() ? this.$lines.last().text : "";
            if (this.$fixedWidth || session.$useWrapMode)
              lastLineText = session.getLength() + firstLineNumber - 1;
            var gutterWidth = gutterRenderer ? gutterRenderer.getWidth(session, lastLineText, config2) : lastLineText.toString().length * config2.characterWidth;
            var padding = this.$padding || this.$computePadding();
            gutterWidth += padding.left + padding.right;
            if (gutterWidth !== this.gutterWidth && !isNaN(gutterWidth)) {
              this.gutterWidth = gutterWidth;
              this.element.parentNode.style.width = this.element.style.width = Math.ceil(this.gutterWidth) + "px";
              this._signal("changeGutterWidth", gutterWidth);
            }
          };
          this.$updateCursorRow = function() {
            if (!this.$highlightGutterLine)
              return;
            var position = this.session.selection.getCursor();
            if (this.$cursorRow === position.row)
              return;
            this.$cursorRow = position.row;
          };
          this.updateLineHighlight = function() {
            if (!this.$highlightGutterLine)
              return;
            var row = this.session.selection.cursor.row;
            this.$cursorRow = row;
            if (this.$cursorCell && this.$cursorCell.row == row)
              return;
            if (this.$cursorCell)
              this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", "");
            var cells = this.$lines.cells;
            this.$cursorCell = null;
            for (var i6 = 0; i6 < cells.length; i6++) {
              var cell = cells[i6];
              if (cell.row >= this.$cursorRow) {
                if (cell.row > this.$cursorRow) {
                  var fold = this.session.getFoldLine(this.$cursorRow);
                  if (i6 > 0 && fold && fold.start.row == cells[i6 - 1].row)
                    cell = cells[i6 - 1];
                  else
                    break;
                }
                cell.element.className = "ace_gutter-active-line " + cell.element.className;
                this.$cursorCell = cell;
                break;
              }
            }
          };
          this.scrollLines = function(config2) {
            var oldConfig = this.config;
            this.config = config2;
            this.$updateCursorRow();
            if (this.$lines.pageChanged(oldConfig, config2))
              return this.update(config2);
            this.$lines.moveContainer(config2);
            var lastRow = Math.min(
              config2.lastRow + config2.gutterOffset,
              this.session.getLength() - 1
            );
            var oldLastRow = this.oldLastRow;
            this.oldLastRow = lastRow;
            if (!oldConfig || oldLastRow < config2.firstRow)
              return this.update(config2);
            if (lastRow < oldConfig.firstRow)
              return this.update(config2);
            if (oldConfig.firstRow < config2.firstRow)
              for (var row = this.session.getFoldedRowCount(oldConfig.firstRow, config2.firstRow - 1); row > 0; row--)
                this.$lines.shift();
            if (oldLastRow > lastRow)
              for (var row = this.session.getFoldedRowCount(lastRow + 1, oldLastRow); row > 0; row--)
                this.$lines.pop();
            if (config2.firstRow < oldConfig.firstRow) {
              this.$lines.unshift(this.$renderLines(config2, config2.firstRow, oldConfig.firstRow - 1));
            }
            if (lastRow > oldLastRow) {
              this.$lines.push(this.$renderLines(config2, oldLastRow + 1, lastRow));
            }
            this.updateLineHighlight();
            this._signal("afterRender");
            this.$updateGutterWidth(config2);
          };
          this.$renderLines = function(config2, firstRow, lastRow) {
            var fragment = [];
            var row = firstRow;
            var foldLine = this.session.getNextFoldLine(row);
            var foldStart = foldLine ? foldLine.start.row : Infinity;
            while (true) {
              if (row > foldStart) {
                row = foldLine.end.row + 1;
                foldLine = this.session.getNextFoldLine(row, foldLine);
                foldStart = foldLine ? foldLine.start.row : Infinity;
              }
              if (row > lastRow)
                break;
              var cell = this.$lines.createCell(row, config2, this.session, onCreateCell);
              this.$renderCell(cell, config2, foldLine, row);
              fragment.push(cell);
              row++;
            }
            return fragment;
          };
          this.$renderCell = function(cell, config2, fold, row) {
            var element = cell.element;
            var session = this.session;
            var textNode = element.childNodes[0];
            var foldWidget = element.childNodes[1];
            var firstLineNumber = session.$firstLineNumber;
            var breakpoints = session.$breakpoints;
            var decorations = session.$decorations;
            var gutterRenderer = session.gutterRenderer || this.$renderer;
            var foldWidgets = this.$showFoldWidgets && session.foldWidgets;
            var foldStart = fold ? fold.start.row : Number.MAX_VALUE;
            var className = "ace_gutter-cell ";
            if (this.$highlightGutterLine) {
              if (row == this.$cursorRow || fold && row < this.$cursorRow && row >= foldStart && this.$cursorRow <= fold.end.row) {
                className += "ace_gutter-active-line ";
                if (this.$cursorCell != cell) {
                  if (this.$cursorCell)
                    this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", "");
                  this.$cursorCell = cell;
                }
              }
            }
            if (breakpoints[row])
              className += breakpoints[row];
            if (decorations[row])
              className += decorations[row];
            if (this.$annotations[row])
              className += this.$annotations[row].className;
            if (element.className != className)
              element.className = className;
            if (foldWidgets) {
              var c2 = foldWidgets[row];
              if (c2 == null)
                c2 = foldWidgets[row] = session.getFoldWidget(row);
            }
            if (c2) {
              var className = "ace_fold-widget ace_" + c2;
              if (c2 == "start" && row == foldStart && row < fold.end.row)
                className += " ace_closed";
              else
                className += " ace_open";
              if (foldWidget.className != className)
                foldWidget.className = className;
              var foldHeight = config2.lineHeight + "px";
              dom.setStyle(foldWidget.style, "height", foldHeight);
              dom.setStyle(foldWidget.style, "display", "inline-block");
            } else {
              if (foldWidget) {
                dom.setStyle(foldWidget.style, "display", "none");
              }
            }
            var text = (gutterRenderer ? gutterRenderer.getText(session, row) : row + firstLineNumber).toString();
            if (text !== textNode.data) {
              textNode.data = text;
            }
            dom.setStyle(cell.element.style, "height", this.$lines.computeLineHeight(row, config2, session) + "px");
            dom.setStyle(cell.element.style, "top", this.$lines.computeLineTop(row, config2, session) + "px");
            cell.text = text;
            return cell;
          };
          this.$fixedWidth = false;
          this.$highlightGutterLine = true;
          this.$renderer = "";
          this.setHighlightGutterLine = function(highlightGutterLine) {
            this.$highlightGutterLine = highlightGutterLine;
          };
          this.$showLineNumbers = true;
          this.$renderer = "";
          this.setShowLineNumbers = function(show) {
            this.$renderer = !show && {
              getWidth: function() {
                return 0;
              },
              getText: function() {
                return "";
              }
            };
          };
          this.getShowLineNumbers = function() {
            return this.$showLineNumbers;
          };
          this.$showFoldWidgets = true;
          this.setShowFoldWidgets = function(show) {
            if (show)
              dom.addCssClass(this.element, "ace_folding-enabled");
            else
              dom.removeCssClass(this.element, "ace_folding-enabled");
            this.$showFoldWidgets = show;
            this.$padding = null;
          };
          this.getShowFoldWidgets = function() {
            return this.$showFoldWidgets;
          };
          this.$computePadding = function() {
            if (!this.element.firstChild)
              return { left: 0, right: 0 };
            var style = dom.computedStyle(this.element.firstChild);
            this.$padding = {};
            this.$padding.left = (parseInt(style.borderLeftWidth) || 0) + (parseInt(style.paddingLeft) || 0) + 1;
            this.$padding.right = (parseInt(style.borderRightWidth) || 0) + (parseInt(style.paddingRight) || 0);
            return this.$padding;
          };
          this.getRegion = function(point) {
            var padding = this.$padding || this.$computePadding();
            var rect = this.element.getBoundingClientRect();
            if (point.x < padding.left + rect.left)
              return "markers";
            if (this.$showFoldWidgets && point.x > rect.right - padding.right)
              return "foldWidgets";
          };
        }).call(Gutter.prototype);
        function onCreateCell(element) {
          var textNode = document.createTextNode("");
          element.appendChild(textNode);
          var foldWidget = dom.createElement("span");
          element.appendChild(foldWidget);
          return element;
        }
        exports2.Gutter = Gutter;
      });
      ace.define("ace/layer/marker", ["require", "exports", "module", "ace/range", "ace/lib/dom"], function(require3, exports2, module2) {
        "use strict";
        var Range = require3("../range").Range;
        var dom = require3("../lib/dom");
        var Marker = function(parentEl) {
          this.element = dom.createElement("div");
          this.element.className = "ace_layer ace_marker-layer";
          parentEl.appendChild(this.element);
        };
        (function() {
          this.$padding = 0;
          this.setPadding = function(padding) {
            this.$padding = padding;
          };
          this.setSession = function(session) {
            this.session = session;
          };
          this.setMarkers = function(markers) {
            this.markers = markers;
          };
          this.elt = function(className, css2) {
            var x2 = this.i != -1 && this.element.childNodes[this.i];
            if (!x2) {
              x2 = document.createElement("div");
              this.element.appendChild(x2);
              this.i = -1;
            } else {
              this.i++;
            }
            x2.style.cssText = css2;
            x2.className = className;
          };
          this.update = function(config2) {
            if (!config2)
              return;
            this.config = config2;
            this.i = 0;
            var html;
            for (var key in this.markers) {
              var marker = this.markers[key];
              if (!marker.range) {
                marker.update(html, this, this.session, config2);
                continue;
              }
              var range = marker.range.clipRows(config2.firstRow, config2.lastRow);
              if (range.isEmpty())
                continue;
              range = range.toScreenRange(this.session);
              if (marker.renderer) {
                var top = this.$getTop(range.start.row, config2);
                var left = this.$padding + range.start.column * config2.characterWidth;
                marker.renderer(html, range, left, top, config2);
              } else if (marker.type == "fullLine") {
                this.drawFullLineMarker(html, range, marker.clazz, config2);
              } else if (marker.type == "screenLine") {
                this.drawScreenLineMarker(html, range, marker.clazz, config2);
              } else if (range.isMultiLine()) {
                if (marker.type == "text")
                  this.drawTextMarker(html, range, marker.clazz, config2);
                else
                  this.drawMultiLineMarker(html, range, marker.clazz, config2);
              } else {
                this.drawSingleLineMarker(html, range, marker.clazz + " ace_start ace_br15", config2);
              }
            }
            if (this.i != -1) {
              while (this.i < this.element.childElementCount)
                this.element.removeChild(this.element.lastChild);
            }
          };
          this.$getTop = function(row, layerConfig) {
            return (row - layerConfig.firstRowScreen) * layerConfig.lineHeight;
          };
          function getBorderClass(tl, tr, br, bl) {
            return (tl ? 1 : 0) | (tr ? 2 : 0) | (br ? 4 : 0) | (bl ? 8 : 0);
          }
          this.drawTextMarker = function(stringBuilder, range, clazz, layerConfig, extraStyle) {
            var session = this.session;
            var start = range.start.row;
            var end = range.end.row;
            var row = start;
            var prev = 0;
            var curr = 0;
            var next = session.getScreenLastRowColumn(row);
            var lineRange = new Range(row, range.start.column, row, curr);
            for (; row <= end; row++) {
              lineRange.start.row = lineRange.end.row = row;
              lineRange.start.column = row == start ? range.start.column : session.getRowWrapIndent(row);
              lineRange.end.column = next;
              prev = curr;
              curr = next;
              next = row + 1 < end ? session.getScreenLastRowColumn(row + 1) : row == end ? 0 : range.end.column;
              this.drawSingleLineMarker(
                stringBuilder,
                lineRange,
                clazz + (row == start ? " ace_start" : "") + " ace_br" + getBorderClass(row == start || row == start + 1 && range.start.column, prev < curr, curr > next, row == end),
                layerConfig,
                row == end ? 0 : 1,
                extraStyle
              );
            }
          };
          this.drawMultiLineMarker = function(stringBuilder, range, clazz, config2, extraStyle) {
            var padding = this.$padding;
            var height = config2.lineHeight;
            var top = this.$getTop(range.start.row, config2);
            var left = padding + range.start.column * config2.characterWidth;
            extraStyle = extraStyle || "";
            if (this.session.$bidiHandler.isBidiRow(range.start.row)) {
              var range1 = range.clone();
              range1.end.row = range1.start.row;
              range1.end.column = this.session.getLine(range1.start.row).length;
              this.drawBidiSingleLineMarker(stringBuilder, range1, clazz + " ace_br1 ace_start", config2, null, extraStyle);
            } else {
              this.elt(
                clazz + " ace_br1 ace_start",
                "height:" + height + "px;right:0;top:" + top + "px;left:" + left + "px;" + (extraStyle || "")
              );
            }
            if (this.session.$bidiHandler.isBidiRow(range.end.row)) {
              var range1 = range.clone();
              range1.start.row = range1.end.row;
              range1.start.column = 0;
              this.drawBidiSingleLineMarker(stringBuilder, range1, clazz + " ace_br12", config2, null, extraStyle);
            } else {
              top = this.$getTop(range.end.row, config2);
              var width = range.end.column * config2.characterWidth;
              this.elt(
                clazz + " ace_br12",
                "height:" + height + "px;width:" + width + "px;top:" + top + "px;left:" + padding + "px;" + (extraStyle || "")
              );
            }
            height = (range.end.row - range.start.row - 1) * config2.lineHeight;
            if (height <= 0)
              return;
            top = this.$getTop(range.start.row + 1, config2);
            var radiusClass = (range.start.column ? 1 : 0) | (range.end.column ? 0 : 8);
            this.elt(
              clazz + (radiusClass ? " ace_br" + radiusClass : ""),
              "height:" + height + "px;right:0;top:" + top + "px;left:" + padding + "px;" + (extraStyle || "")
            );
          };
          this.drawSingleLineMarker = function(stringBuilder, range, clazz, config2, extraLength, extraStyle) {
            if (this.session.$bidiHandler.isBidiRow(range.start.row))
              return this.drawBidiSingleLineMarker(stringBuilder, range, clazz, config2, extraLength, extraStyle);
            var height = config2.lineHeight;
            var width = (range.end.column + (extraLength || 0) - range.start.column) * config2.characterWidth;
            var top = this.$getTop(range.start.row, config2);
            var left = this.$padding + range.start.column * config2.characterWidth;
            this.elt(
              clazz,
              "height:" + height + "px;width:" + width + "px;top:" + top + "px;left:" + left + "px;" + (extraStyle || "")
            );
          };
          this.drawBidiSingleLineMarker = function(stringBuilder, range, clazz, config2, extraLength, extraStyle) {
            var height = config2.lineHeight, top = this.$getTop(range.start.row, config2), padding = this.$padding;
            var selections = this.session.$bidiHandler.getSelections(range.start.column, range.end.column);
            selections.forEach(function(selection) {
              this.elt(
                clazz,
                "height:" + height + "px;width:" + selection.width + (extraLength || 0) + "px;top:" + top + "px;left:" + (padding + selection.left) + "px;" + (extraStyle || "")
              );
            }, this);
          };
          this.drawFullLineMarker = function(stringBuilder, range, clazz, config2, extraStyle) {
            var top = this.$getTop(range.start.row, config2);
            var height = config2.lineHeight;
            if (range.start.row != range.end.row)
              height += this.$getTop(range.end.row, config2) - top;
            this.elt(
              clazz,
              "height:" + height + "px;top:" + top + "px;left:0;right:0;" + (extraStyle || "")
            );
          };
          this.drawScreenLineMarker = function(stringBuilder, range, clazz, config2, extraStyle) {
            var top = this.$getTop(range.start.row, config2);
            var height = config2.lineHeight;
            this.elt(
              clazz,
              "height:" + height + "px;top:" + top + "px;left:0;right:0;" + (extraStyle || "")
            );
          };
        }).call(Marker.prototype);
        exports2.Marker = Marker;
      });
      ace.define("ace/layer/text", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/layer/lines", "ace/lib/event_emitter"], function(require3, exports2, module2) {
        "use strict";
        var oop = require3("../lib/oop");
        var dom = require3("../lib/dom");
        var lang = require3("../lib/lang");
        var Lines = require3("./lines").Lines;
        var EventEmitter = require3("../lib/event_emitter").EventEmitter;
        var Text = function(parentEl) {
          this.dom = dom;
          this.element = this.dom.createElement("div");
          this.element.className = "ace_layer ace_text-layer";
          parentEl.appendChild(this.element);
          this.$updateEolChar = this.$updateEolChar.bind(this);
          this.$lines = new Lines(this.element);
        };
        (function() {
          oop.implement(this, EventEmitter);
          this.EOF_CHAR = "\xB6";
          this.EOL_CHAR_LF = "\xAC";
          this.EOL_CHAR_CRLF = "\xA4";
          this.EOL_CHAR = this.EOL_CHAR_LF;
          this.TAB_CHAR = "\u2014";
          this.SPACE_CHAR = "\xB7";
          this.$padding = 0;
          this.MAX_LINE_LENGTH = 1e4;
          this.$updateEolChar = function() {
            var doc = this.session.doc;
            var unixMode = doc.getNewLineCharacter() == "\n" && doc.getNewLineMode() != "windows";
            var EOL_CHAR = unixMode ? this.EOL_CHAR_LF : this.EOL_CHAR_CRLF;
            if (this.EOL_CHAR != EOL_CHAR) {
              this.EOL_CHAR = EOL_CHAR;
              return true;
            }
          };
          this.setPadding = function(padding) {
            this.$padding = padding;
            this.element.style.margin = "0 " + padding + "px";
          };
          this.getLineHeight = function() {
            return this.$fontMetrics.$characterSize.height || 0;
          };
          this.getCharacterWidth = function() {
            return this.$fontMetrics.$characterSize.width || 0;
          };
          this.$setFontMetrics = function(measure) {
            this.$fontMetrics = measure;
            this.$fontMetrics.on("changeCharacterSize", function(e10) {
              this._signal("changeCharacterSize", e10);
            }.bind(this));
            this.$pollSizeChanges();
          };
          this.checkForSizeChanges = function() {
            this.$fontMetrics.checkForSizeChanges();
          };
          this.$pollSizeChanges = function() {
            return this.$pollSizeChangesTimer = this.$fontMetrics.$pollSizeChanges();
          };
          this.setSession = function(session) {
            this.session = session;
            if (session)
              this.$computeTabString();
          };
          this.showInvisibles = false;
          this.showSpaces = false;
          this.showTabs = false;
          this.showEOL = false;
          this.setShowInvisibles = function(showInvisibles) {
            if (this.showInvisibles == showInvisibles)
              return false;
            this.showInvisibles = showInvisibles;
            if (typeof showInvisibles == "string") {
              this.showSpaces = /tab/i.test(showInvisibles);
              this.showTabs = /space/i.test(showInvisibles);
              this.showEOL = /eol/i.test(showInvisibles);
            } else {
              this.showSpaces = this.showTabs = this.showEOL = showInvisibles;
            }
            this.$computeTabString();
            return true;
          };
          this.displayIndentGuides = true;
          this.setDisplayIndentGuides = function(display) {
            if (this.displayIndentGuides == display)
              return false;
            this.displayIndentGuides = display;
            this.$computeTabString();
            return true;
          };
          this.$tabStrings = [];
          this.onChangeTabSize = this.$computeTabString = function() {
            var tabSize = this.session.getTabSize();
            this.tabSize = tabSize;
            var tabStr = this.$tabStrings = [0];
            for (var i6 = 1; i6 < tabSize + 1; i6++) {
              if (this.showTabs) {
                var span = this.dom.createElement("span");
                span.className = "ace_invisible ace_invisible_tab";
                span.textContent = lang.stringRepeat(this.TAB_CHAR, i6);
                tabStr.push(span);
              } else {
                tabStr.push(this.dom.createTextNode(lang.stringRepeat(" ", i6), this.element));
              }
            }
            if (this.displayIndentGuides) {
              this.$indentGuideRe = /\s\S| \t|\t |\s$/;
              var className = "ace_indent-guide";
              var spaceClass = this.showSpaces ? " ace_invisible ace_invisible_space" : "";
              var spaceContent = this.showSpaces ? lang.stringRepeat(this.SPACE_CHAR, this.tabSize) : lang.stringRepeat(" ", this.tabSize);
              var tabClass = this.showTabs ? " ace_invisible ace_invisible_tab" : "";
              var tabContent = this.showTabs ? lang.stringRepeat(this.TAB_CHAR, this.tabSize) : spaceContent;
              var span = this.dom.createElement("span");
              span.className = className + spaceClass;
              span.textContent = spaceContent;
              this.$tabStrings[" "] = span;
              var span = this.dom.createElement("span");
              span.className = className + tabClass;
              span.textContent = tabContent;
              this.$tabStrings["	"] = span;
            }
          };
          this.updateLines = function(config2, firstRow, lastRow) {
            if (this.config.lastRow != config2.lastRow || this.config.firstRow != config2.firstRow) {
              return this.update(config2);
            }
            this.config = config2;
            var first = Math.max(firstRow, config2.firstRow);
            var last = Math.min(lastRow, config2.lastRow);
            var lineElements = this.element.childNodes;
            var lineElementsIdx = 0;
            for (var row = config2.firstRow; row < first; row++) {
              var foldLine = this.session.getFoldLine(row);
              if (foldLine) {
                if (foldLine.containsRow(first)) {
                  first = foldLine.start.row;
                  break;
                } else {
                  row = foldLine.end.row;
                }
              }
              lineElementsIdx++;
            }
            var heightChanged = false;
            var row = first;
            var foldLine = this.session.getNextFoldLine(row);
            var foldStart = foldLine ? foldLine.start.row : Infinity;
            while (true) {
              if (row > foldStart) {
                row = foldLine.end.row + 1;
                foldLine = this.session.getNextFoldLine(row, foldLine);
                foldStart = foldLine ? foldLine.start.row : Infinity;
              }
              if (row > last)
                break;
              var lineElement = lineElements[lineElementsIdx++];
              if (lineElement) {
                this.dom.removeChildren(lineElement);
                this.$renderLine(
                  lineElement,
                  row,
                  row == foldStart ? foldLine : false
                );
                if (heightChanged)
                  lineElement.style.top = this.$lines.computeLineTop(row, config2, this.session) + "px";
                var height = config2.lineHeight * this.session.getRowLength(row) + "px";
                if (lineElement.style.height != height) {
                  heightChanged = true;
                  lineElement.style.height = height;
                }
              }
              row++;
            }
            if (heightChanged) {
              while (lineElementsIdx < this.$lines.cells.length) {
                var cell = this.$lines.cells[lineElementsIdx++];
                cell.element.style.top = this.$lines.computeLineTop(cell.row, config2, this.session) + "px";
              }
            }
          };
          this.scrollLines = function(config2) {
            var oldConfig = this.config;
            this.config = config2;
            if (this.$lines.pageChanged(oldConfig, config2))
              return this.update(config2);
            this.$lines.moveContainer(config2);
            var lastRow = config2.lastRow;
            var oldLastRow = oldConfig ? oldConfig.lastRow : -1;
            if (!oldConfig || oldLastRow < config2.firstRow)
              return this.update(config2);
            if (lastRow < oldConfig.firstRow)
              return this.update(config2);
            if (!oldConfig || oldConfig.lastRow < config2.firstRow)
              return this.update(config2);
            if (config2.lastRow < oldConfig.firstRow)
              return this.update(config2);
            if (oldConfig.firstRow < config2.firstRow)
              for (var row = this.session.getFoldedRowCount(oldConfig.firstRow, config2.firstRow - 1); row > 0; row--)
                this.$lines.shift();
            if (oldConfig.lastRow > config2.lastRow)
              for (var row = this.session.getFoldedRowCount(config2.lastRow + 1, oldConfig.lastRow); row > 0; row--)
                this.$lines.pop();
            if (config2.firstRow < oldConfig.firstRow) {
              this.$lines.unshift(this.$renderLinesFragment(config2, config2.firstRow, oldConfig.firstRow - 1));
            }
            if (config2.lastRow > oldConfig.lastRow) {
              this.$lines.push(this.$renderLinesFragment(config2, oldConfig.lastRow + 1, config2.lastRow));
            }
          };
          this.$renderLinesFragment = function(config2, firstRow, lastRow) {
            var fragment = [];
            var row = firstRow;
            var foldLine = this.session.getNextFoldLine(row);
            var foldStart = foldLine ? foldLine.start.row : Infinity;
            while (true) {
              if (row > foldStart) {
                row = foldLine.end.row + 1;
                foldLine = this.session.getNextFoldLine(row, foldLine);
                foldStart = foldLine ? foldLine.start.row : Infinity;
              }
              if (row > lastRow)
                break;
              var line = this.$lines.createCell(row, config2, this.session);
              var lineEl = line.element;
              this.dom.removeChildren(lineEl);
              dom.setStyle(lineEl.style, "height", this.$lines.computeLineHeight(row, config2, this.session) + "px");
              dom.setStyle(lineEl.style, "top", this.$lines.computeLineTop(row, config2, this.session) + "px");
              this.$renderLine(lineEl, row, row == foldStart ? foldLine : false);
              if (this.$useLineGroups()) {
                lineEl.className = "ace_line_group";
              } else {
                lineEl.className = "ace_line";
              }
              fragment.push(line);
              row++;
            }
            return fragment;
          };
          this.update = function(config2) {
            this.$lines.moveContainer(config2);
            this.config = config2;
            var firstRow = config2.firstRow;
            var lastRow = config2.lastRow;
            var lines = this.$lines;
            while (lines.getLength())
              lines.pop();
            lines.push(this.$renderLinesFragment(config2, firstRow, lastRow));
          };
          this.$textToken = {
            "text": true,
            "rparen": true,
            "lparen": true
          };
          this.$renderToken = function(parent, screenColumn, token, value) {
            var self = this;
            var re = /(\t)|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\uFEFF\uFFF9-\uFFFC\u2066\u2067\u2068\u202A\u202B\u202D\u202E\u202C\u2069]+)|(\u3000)|([\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g;
            var valueFragment = this.dom.createFragment(this.element);
            var m2;
            var i6 = 0;
            while (m2 = re.exec(value)) {
              var tab = m2[1];
              var simpleSpace = m2[2];
              var controlCharacter = m2[3];
              var cjkSpace = m2[4];
              var cjk = m2[5];
              if (!self.showSpaces && simpleSpace)
                continue;
              var before = i6 != m2.index ? value.slice(i6, m2.index) : "";
              i6 = m2.index + m2[0].length;
              if (before) {
                valueFragment.appendChild(this.dom.createTextNode(before, this.element));
              }
              if (tab) {
                var tabSize = self.session.getScreenTabSize(screenColumn + m2.index);
                valueFragment.appendChild(self.$tabStrings[tabSize].cloneNode(true));
                screenColumn += tabSize - 1;
              } else if (simpleSpace) {
                if (self.showSpaces) {
                  var span = this.dom.createElement("span");
                  span.className = "ace_invisible ace_invisible_space";
                  span.textContent = lang.stringRepeat(self.SPACE_CHAR, simpleSpace.length);
                  valueFragment.appendChild(span);
                } else {
                  valueFragment.appendChild(this.com.createTextNode(simpleSpace, this.element));
                }
              } else if (controlCharacter) {
                var span = this.dom.createElement("span");
                span.className = "ace_invisible ace_invisible_space ace_invalid";
                span.textContent = lang.stringRepeat(self.SPACE_CHAR, controlCharacter.length);
                valueFragment.appendChild(span);
              } else if (cjkSpace) {
                screenColumn += 1;
                var span = this.dom.createElement("span");
                span.style.width = self.config.characterWidth * 2 + "px";
                span.className = self.showSpaces ? "ace_cjk ace_invisible ace_invisible_space" : "ace_cjk";
                span.textContent = self.showSpaces ? self.SPACE_CHAR : cjkSpace;
                valueFragment.appendChild(span);
              } else if (cjk) {
                screenColumn += 1;
                var span = this.dom.createElement("span");
                span.style.width = self.config.characterWidth * 2 + "px";
                span.className = "ace_cjk";
                span.textContent = cjk;
                valueFragment.appendChild(span);
              }
            }
            valueFragment.appendChild(this.dom.createTextNode(i6 ? value.slice(i6) : value, this.element));
            if (!this.$textToken[token.type]) {
              var classes = "ace_" + token.type.replace(/\./g, " ace_");
              var span = this.dom.createElement("span");
              if (token.type == "fold")
                span.style.width = token.value.length * this.config.characterWidth + "px";
              span.className = classes;
              span.appendChild(valueFragment);
              parent.appendChild(span);
            } else {
              parent.appendChild(valueFragment);
            }
            return screenColumn + value.length;
          };
          this.renderIndentGuide = function(parent, value, max) {
            var cols = value.search(this.$indentGuideRe);
            if (cols <= 0 || cols >= max)
              return value;
            if (value[0] == " ") {
              cols -= cols % this.tabSize;
              var count = cols / this.tabSize;
              for (var i6 = 0; i6 < count; i6++) {
                parent.appendChild(this.$tabStrings[" "].cloneNode(true));
              }
              return value.substr(cols);
            } else if (value[0] == "	") {
              for (var i6 = 0; i6 < cols; i6++) {
                parent.appendChild(this.$tabStrings["	"].cloneNode(true));
              }
              return value.substr(cols);
            }
            return value;
          };
          this.$createLineElement = function(parent) {
            var lineEl = this.dom.createElement("div");
            lineEl.className = "ace_line";
            lineEl.style.height = this.config.lineHeight + "px";
            return lineEl;
          };
          this.$renderWrappedLine = function(parent, tokens, splits) {
            var chars = 0;
            var split = 0;
            var splitChars = splits[0];
            var screenColumn = 0;
            var lineEl = this.$createLineElement();
            parent.appendChild(lineEl);
            for (var i6 = 0; i6 < tokens.length; i6++) {
              var token = tokens[i6];
              var value = token.value;
              if (i6 == 0 && this.displayIndentGuides) {
                chars = value.length;
                value = this.renderIndentGuide(lineEl, value, splitChars);
                if (!value)
                  continue;
                chars -= value.length;
              }
              if (chars + value.length < splitChars) {
                screenColumn = this.$renderToken(lineEl, screenColumn, token, value);
                chars += value.length;
              } else {
                while (chars + value.length >= splitChars) {
                  screenColumn = this.$renderToken(
                    lineEl,
                    screenColumn,
                    token,
                    value.substring(0, splitChars - chars)
                  );
                  value = value.substring(splitChars - chars);
                  chars = splitChars;
                  lineEl = this.$createLineElement();
                  parent.appendChild(lineEl);
                  lineEl.appendChild(this.dom.createTextNode(lang.stringRepeat("\xA0", splits.indent), this.element));
                  split++;
                  screenColumn = 0;
                  splitChars = splits[split] || Number.MAX_VALUE;
                }
                if (value.length != 0) {
                  chars += value.length;
                  screenColumn = this.$renderToken(
                    lineEl,
                    screenColumn,
                    token,
                    value
                  );
                }
              }
            }
            if (splits[splits.length - 1] > this.MAX_LINE_LENGTH)
              this.$renderOverflowMessage(lineEl, screenColumn, null, "", true);
          };
          this.$renderSimpleLine = function(parent, tokens) {
            var screenColumn = 0;
            for (var i6 = 0; i6 < tokens.length; i6++) {
              var token = tokens[i6];
              var value = token.value;
              if (i6 == 0 && this.displayIndentGuides) {
                value = this.renderIndentGuide(parent, value);
                if (!value)
                  continue;
              }
              if (screenColumn + value.length > this.MAX_LINE_LENGTH)
                return this.$renderOverflowMessage(parent, screenColumn, token, value);
              screenColumn = this.$renderToken(parent, screenColumn, token, value);
            }
          };
          this.$renderOverflowMessage = function(parent, screenColumn, token, value, hide) {
            token && this.$renderToken(
              parent,
              screenColumn,
              token,
              value.slice(0, this.MAX_LINE_LENGTH - screenColumn)
            );
            var overflowEl = this.dom.createElement("span");
            overflowEl.className = "ace_inline_button ace_keyword ace_toggle_wrap";
            overflowEl.textContent = hide ? "<hide>" : "<click to see more...>";
            parent.appendChild(overflowEl);
          };
          this.$renderLine = function(parent, row, foldLine) {
            if (!foldLine && foldLine != false)
              foldLine = this.session.getFoldLine(row);
            if (foldLine)
              var tokens = this.$getFoldLineTokens(row, foldLine);
            else
              var tokens = this.session.getTokens(row);
            var lastLineEl = parent;
            if (tokens.length) {
              var splits = this.session.getRowSplitData(row);
              if (splits && splits.length) {
                this.$renderWrappedLine(parent, tokens, splits);
                var lastLineEl = parent.lastChild;
              } else {
                var lastLineEl = parent;
                if (this.$useLineGroups()) {
                  lastLineEl = this.$createLineElement();
                  parent.appendChild(lastLineEl);
                }
                this.$renderSimpleLine(lastLineEl, tokens);
              }
            } else if (this.$useLineGroups()) {
              lastLineEl = this.$createLineElement();
              parent.appendChild(lastLineEl);
            }
            if (this.showEOL && lastLineEl) {
              if (foldLine)
                row = foldLine.end.row;
              var invisibleEl = this.dom.createElement("span");
              invisibleEl.className = "ace_invisible ace_invisible_eol";
              invisibleEl.textContent = row == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR;
              lastLineEl.appendChild(invisibleEl);
            }
          };
          this.$getFoldLineTokens = function(row, foldLine) {
            var session = this.session;
            var renderTokens = [];
            function addTokens(tokens2, from, to) {
              var idx = 0, col = 0;
              while (col + tokens2[idx].value.length < from) {
                col += tokens2[idx].value.length;
                idx++;
                if (idx == tokens2.length)
                  return;
              }
              if (col != from) {
                var value = tokens2[idx].value.substring(from - col);
                if (value.length > to - from)
                  value = value.substring(0, to - from);
                renderTokens.push({
                  type: tokens2[idx].type,
                  value
                });
                col = from + value.length;
                idx += 1;
              }
              while (col < to && idx < tokens2.length) {
                var value = tokens2[idx].value;
                if (value.length + col > to) {
                  renderTokens.push({
                    type: tokens2[idx].type,
                    value: value.substring(0, to - col)
                  });
                } else
                  renderTokens.push(tokens2[idx]);
                col += value.length;
                idx += 1;
              }
            }
            var tokens = session.getTokens(row);
            foldLine.walk(function(placeholder, row2, column, lastColumn, isNewRow) {
              if (placeholder != null) {
                renderTokens.push({
                  type: "fold",
                  value: placeholder
                });
              } else {
                if (isNewRow)
                  tokens = session.getTokens(row2);
                if (tokens.length)
                  addTokens(tokens, lastColumn, column);
              }
            }, foldLine.end.row, this.session.getLine(foldLine.end.row).length);
            return renderTokens;
          };
          this.$useLineGroups = function() {
            return this.session.getUseWrapMode();
          };
          this.destroy = function() {
          };
        }).call(Text.prototype);
        exports2.Text = Text;
      });
      ace.define("ace/layer/cursor", ["require", "exports", "module", "ace/lib/dom"], function(require3, exports2, module2) {
        "use strict";
        var dom = require3("../lib/dom");
        var Cursor = function(parentEl) {
          this.element = dom.createElement("div");
          this.element.className = "ace_layer ace_cursor-layer";
          parentEl.appendChild(this.element);
          this.isVisible = false;
          this.isBlinking = true;
          this.blinkInterval = 1e3;
          this.smoothBlinking = false;
          this.cursors = [];
          this.cursor = this.addCursor();
          dom.addCssClass(this.element, "ace_hidden-cursors");
          this.$updateCursors = this.$updateOpacity.bind(this);
        };
        (function() {
          this.$updateOpacity = function(val) {
            var cursors = this.cursors;
            for (var i6 = cursors.length; i6--; )
              dom.setStyle(cursors[i6].style, "opacity", val ? "" : "0");
          };
          this.$startCssAnimation = function() {
            var cursors = this.cursors;
            for (var i6 = cursors.length; i6--; )
              cursors[i6].style.animationDuration = this.blinkInterval + "ms";
            this.$isAnimating = true;
            setTimeout(function() {
              if (this.$isAnimating) {
                dom.addCssClass(this.element, "ace_animate-blinking");
              }
            }.bind(this));
          };
          this.$stopCssAnimation = function() {
            this.$isAnimating = false;
            dom.removeCssClass(this.element, "ace_animate-blinking");
          };
          this.$padding = 0;
          this.setPadding = function(padding) {
            this.$padding = padding;
          };
          this.setSession = function(session) {
            this.session = session;
          };
          this.setBlinking = function(blinking) {
            if (blinking != this.isBlinking) {
              this.isBlinking = blinking;
              this.restartTimer();
            }
          };
          this.setBlinkInterval = function(blinkInterval) {
            if (blinkInterval != this.blinkInterval) {
              this.blinkInterval = blinkInterval;
              this.restartTimer();
            }
          };
          this.setSmoothBlinking = function(smoothBlinking) {
            if (smoothBlinking != this.smoothBlinking) {
              this.smoothBlinking = smoothBlinking;
              dom.setCssClass(this.element, "ace_smooth-blinking", smoothBlinking);
              this.$updateCursors(true);
              this.restartTimer();
            }
          };
          this.addCursor = function() {
            var el = dom.createElement("div");
            el.className = "ace_cursor";
            this.element.appendChild(el);
            this.cursors.push(el);
            return el;
          };
          this.removeCursor = function() {
            if (this.cursors.length > 1) {
              var el = this.cursors.pop();
              el.parentNode.removeChild(el);
              return el;
            }
          };
          this.hideCursor = function() {
            this.isVisible = false;
            dom.addCssClass(this.element, "ace_hidden-cursors");
            this.restartTimer();
          };
          this.showCursor = function() {
            this.isVisible = true;
            dom.removeCssClass(this.element, "ace_hidden-cursors");
            this.restartTimer();
          };
          this.restartTimer = function() {
            var update = this.$updateCursors;
            clearInterval(this.intervalId);
            clearTimeout(this.timeoutId);
            this.$stopCssAnimation();
            if (this.smoothBlinking) {
              this.$isSmoothBlinking = false;
              dom.removeCssClass(this.element, "ace_smooth-blinking");
            }
            update(true);
            if (!this.isBlinking || !this.blinkInterval || !this.isVisible) {
              this.$stopCssAnimation();
              return;
            }
            if (this.smoothBlinking) {
              this.$isSmoothBlinking = true;
              setTimeout(function() {
                if (this.$isSmoothBlinking) {
                  dom.addCssClass(this.element, "ace_smooth-blinking");
                }
              }.bind(this));
            }
            if (dom.HAS_CSS_ANIMATION) {
              this.$startCssAnimation();
            } else {
              var blink = function() {
                this.timeoutId = setTimeout(function() {
                  update(false);
                }, 0.6 * this.blinkInterval);
              }.bind(this);
              this.intervalId = setInterval(function() {
                update(true);
                blink();
              }, this.blinkInterval);
              blink();
            }
          };
          this.getPixelPosition = function(position, onScreen) {
            if (!this.config || !this.session)
              return { left: 0, top: 0 };
            if (!position)
              position = this.session.selection.getCursor();
            var pos = this.session.documentToScreenPosition(position);
            var cursorLeft = this.$padding + (this.session.$bidiHandler.isBidiRow(pos.row, position.row) ? this.session.$bidiHandler.getPosLeft(pos.column) : pos.column * this.config.characterWidth);
            var cursorTop = (pos.row - (onScreen ? this.config.firstRowScreen : 0)) * this.config.lineHeight;
            return { left: cursorLeft, top: cursorTop };
          };
          this.isCursorInView = function(pixelPos, config2) {
            return pixelPos.top >= 0 && pixelPos.top < config2.maxHeight;
          };
          this.update = function(config2) {
            this.config = config2;
            var selections = this.session.$selectionMarkers;
            var i6 = 0, cursorIndex = 0;
            if (selections === void 0 || selections.length === 0) {
              selections = [{ cursor: null }];
            }
            for (var i6 = 0, n9 = selections.length; i6 < n9; i6++) {
              var pixelPos = this.getPixelPosition(selections[i6].cursor, true);
              if ((pixelPos.top > config2.height + config2.offset || pixelPos.top < 0) && i6 > 1) {
                continue;
              }
              var element = this.cursors[cursorIndex++] || this.addCursor();
              var style = element.style;
              if (!this.drawCursor) {
                if (!this.isCursorInView(pixelPos, config2)) {
                  dom.setStyle(style, "display", "none");
                } else {
                  dom.setStyle(style, "display", "block");
                  dom.translate(element, pixelPos.left, pixelPos.top);
                  dom.setStyle(style, "width", Math.round(config2.characterWidth) + "px");
                  dom.setStyle(style, "height", config2.lineHeight + "px");
                }
              } else {
                this.drawCursor(element, pixelPos, config2, selections[i6], this.session);
              }
            }
            while (this.cursors.length > cursorIndex)
              this.removeCursor();
            var overwrite = this.session.getOverwrite();
            this.$setOverwrite(overwrite);
            this.$pixelPos = pixelPos;
            this.restartTimer();
          };
          this.drawCursor = null;
          this.$setOverwrite = function(overwrite) {
            if (overwrite != this.overwrite) {
              this.overwrite = overwrite;
              if (overwrite)
                dom.addCssClass(this.element, "ace_overwrite-cursors");
              else
                dom.removeCssClass(this.element, "ace_overwrite-cursors");
            }
          };
          this.destroy = function() {
            clearInterval(this.intervalId);
            clearTimeout(this.timeoutId);
          };
        }).call(Cursor.prototype);
        exports2.Cursor = Cursor;
      });
      ace.define("ace/scrollbar", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], function(require3, exports2, module2) {
        "use strict";
        var oop = require3("./lib/oop");
        var dom = require3("./lib/dom");
        var event = require3("./lib/event");
        var EventEmitter = require3("./lib/event_emitter").EventEmitter;
        var MAX_SCROLL_H = 32768;
        var ScrollBar = function(parent) {
          this.element = dom.createElement("div");
          this.element.className = "ace_scrollbar ace_scrollbar" + this.classSuffix;
          this.inner = dom.createElement("div");
          this.inner.className = "ace_scrollbar-inner";
          this.inner.textContent = "\xA0";
          this.element.appendChild(this.inner);
          parent.appendChild(this.element);
          this.setVisible(false);
          this.skipEvent = false;
          event.addListener(this.element, "scroll", this.onScroll.bind(this));
          event.addListener(this.element, "mousedown", event.preventDefault);
        };
        (function() {
          oop.implement(this, EventEmitter);
          this.setVisible = function(isVisible) {
            this.element.style.display = isVisible ? "" : "none";
            this.isVisible = isVisible;
            this.coeff = 1;
          };
        }).call(ScrollBar.prototype);
        var VScrollBar = function(parent, renderer) {
          ScrollBar.call(this, parent);
          this.scrollTop = 0;
          this.scrollHeight = 0;
          renderer.$scrollbarWidth = this.width = dom.scrollbarWidth(parent.ownerDocument);
          this.inner.style.width = this.element.style.width = (this.width || 15) + 5 + "px";
          this.$minWidth = 0;
        };
        oop.inherits(VScrollBar, ScrollBar);
        (function() {
          this.classSuffix = "-v";
          this.onScroll = function() {
            if (!this.skipEvent) {
              this.scrollTop = this.element.scrollTop;
              if (this.coeff != 1) {
                var h5 = this.element.clientHeight / this.scrollHeight;
                this.scrollTop = this.scrollTop * (1 - h5) / (this.coeff - h5);
              }
              this._emit("scroll", { data: this.scrollTop });
            }
            this.skipEvent = false;
          };
          this.getWidth = function() {
            return Math.max(this.isVisible ? this.width : 0, this.$minWidth || 0);
          };
          this.setHeight = function(height) {
            this.element.style.height = height + "px";
          };
          this.setInnerHeight = this.setScrollHeight = function(height) {
            this.scrollHeight = height;
            if (height > MAX_SCROLL_H) {
              this.coeff = MAX_SCROLL_H / height;
              height = MAX_SCROLL_H;
            } else if (this.coeff != 1) {
              this.coeff = 1;
            }
            this.inner.style.height = height + "px";
          };
          this.setScrollTop = function(scrollTop) {
            if (this.scrollTop != scrollTop) {
              this.skipEvent = true;
              this.scrollTop = scrollTop;
              this.element.scrollTop = scrollTop * this.coeff;
            }
          };
        }).call(VScrollBar.prototype);
        var HScrollBar = function(parent, renderer) {
          ScrollBar.call(this, parent);
          this.scrollLeft = 0;
          this.height = renderer.$scrollbarWidth;
          this.inner.style.height = this.element.style.height = (this.height || 15) + 5 + "px";
        };
        oop.inherits(HScrollBar, ScrollBar);
        (function() {
          this.classSuffix = "-h";
          this.onScroll = function() {
            if (!this.skipEvent) {
              this.scrollLeft = this.element.scrollLeft;
              this._emit("scroll", { data: this.scrollLeft });
            }
            this.skipEvent = false;
          };
          this.getHeight = function() {
            return this.isVisible ? this.height : 0;
          };
          this.setWidth = function(width) {
            this.element.style.width = width + "px";
          };
          this.setInnerWidth = function(width) {
            this.inner.style.width = width + "px";
          };
          this.setScrollWidth = function(width) {
            this.inner.style.width = width + "px";
          };
          this.setScrollLeft = function(scrollLeft) {
            if (this.scrollLeft != scrollLeft) {
              this.skipEvent = true;
              this.scrollLeft = this.element.scrollLeft = scrollLeft;
            }
          };
        }).call(HScrollBar.prototype);
        exports2.ScrollBar = VScrollBar;
        exports2.ScrollBarV = VScrollBar;
        exports2.ScrollBarH = HScrollBar;
        exports2.VScrollBar = VScrollBar;
        exports2.HScrollBar = HScrollBar;
      });
      ace.define("ace/renderloop", ["require", "exports", "module", "ace/lib/event"], function(require3, exports2, module2) {
        "use strict";
        var event = require3("./lib/event");
        var RenderLoop = function(onRender, win) {
          this.onRender = onRender;
          this.pending = false;
          this.changes = 0;
          this.$recursionLimit = 2;
          this.window = win || window;
          var _self = this;
          this._flush = function(ts) {
            _self.pending = false;
            var changes = _self.changes;
            if (changes) {
              event.blockIdle(100);
              _self.changes = 0;
              _self.onRender(changes);
            }
            if (_self.changes) {
              if (_self.$recursionLimit-- < 0)
                return;
              _self.schedule();
            } else {
              _self.$recursionLimit = 2;
            }
          };
        };
        (function() {
          this.schedule = function(change) {
            this.changes = this.changes | change;
            if (this.changes && !this.pending) {
              event.nextFrame(this._flush);
              this.pending = true;
            }
          };
          this.clear = function(change) {
            var changes = this.changes;
            this.changes = 0;
            return changes;
          };
        }).call(RenderLoop.prototype);
        exports2.RenderLoop = RenderLoop;
      });
      ace.define("ace/layer/font_metrics", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/event", "ace/lib/useragent", "ace/lib/event_emitter"], function(require3, exports2, module2) {
        var oop = require3("../lib/oop");
        var dom = require3("../lib/dom");
        var lang = require3("../lib/lang");
        var event = require3("../lib/event");
        var useragent = require3("../lib/useragent");
        var EventEmitter = require3("../lib/event_emitter").EventEmitter;
        var CHAR_COUNT = 256;
        var USE_OBSERVER = typeof ResizeObserver == "function";
        var L2 = 200;
        var FontMetrics = exports2.FontMetrics = function(parentEl) {
          this.el = dom.createElement("div");
          this.$setMeasureNodeStyles(this.el.style, true);
          this.$main = dom.createElement("div");
          this.$setMeasureNodeStyles(this.$main.style);
          this.$measureNode = dom.createElement("div");
          this.$setMeasureNodeStyles(this.$measureNode.style);
          this.el.appendChild(this.$main);
          this.el.appendChild(this.$measureNode);
          parentEl.appendChild(this.el);
          this.$measureNode.textContent = lang.stringRepeat("X", CHAR_COUNT);
          this.$characterSize = { width: 0, height: 0 };
          if (USE_OBSERVER)
            this.$addObserver();
          else
            this.checkForSizeChanges();
        };
        (function() {
          oop.implement(this, EventEmitter);
          this.$characterSize = { width: 0, height: 0 };
          this.$setMeasureNodeStyles = function(style, isRoot) {
            style.width = style.height = "auto";
            style.left = style.top = "0px";
            style.visibility = "hidden";
            style.position = "absolute";
            style.whiteSpace = "pre";
            if (useragent.isIE < 8) {
              style["font-family"] = "inherit";
            } else {
              style.font = "inherit";
            }
            style.overflow = isRoot ? "hidden" : "visible";
          };
          this.checkForSizeChanges = function(size) {
            if (size === void 0)
              size = this.$measureSizes();
            if (size && (this.$characterSize.width !== size.width || this.$characterSize.height !== size.height)) {
              this.$measureNode.style.fontWeight = "bold";
              var boldSize = this.$measureSizes();
              this.$measureNode.style.fontWeight = "";
              this.$characterSize = size;
              this.charSizes = /* @__PURE__ */ Object.create(null);
              this.allowBoldFonts = boldSize && boldSize.width === size.width && boldSize.height === size.height;
              this._emit("changeCharacterSize", { data: size });
            }
          };
          this.$addObserver = function() {
            var self = this;
            this.$observer = new window.ResizeObserver(function(e10) {
              self.checkForSizeChanges();
            });
            this.$observer.observe(this.$measureNode);
          };
          this.$pollSizeChanges = function() {
            if (this.$pollSizeChangesTimer || this.$observer)
              return this.$pollSizeChangesTimer;
            var self = this;
            return this.$pollSizeChangesTimer = event.onIdle(function cb() {
              self.checkForSizeChanges();
              event.onIdle(cb, 500);
            }, 500);
          };
          this.setPolling = function(val) {
            if (val) {
              this.$pollSizeChanges();
            } else if (this.$pollSizeChangesTimer) {
              clearInterval(this.$pollSizeChangesTimer);
              this.$pollSizeChangesTimer = 0;
            }
          };
          this.$measureSizes = function(node) {
            var size = {
              height: (node || this.$measureNode).clientHeight,
              width: (node || this.$measureNode).clientWidth / CHAR_COUNT
            };
            if (size.width === 0 || size.height === 0)
              return null;
            return size;
          };
          this.$measureCharWidth = function(ch) {
            this.$main.textContent = lang.stringRepeat(ch, CHAR_COUNT);
            var rect = this.$main.getBoundingClientRect();
            return rect.width / CHAR_COUNT;
          };
          this.getCharacterWidth = function(ch) {
            var w2 = this.charSizes[ch];
            if (w2 === void 0) {
              w2 = this.charSizes[ch] = this.$measureCharWidth(ch) / this.$characterSize.width;
            }
            return w2;
          };
          this.destroy = function() {
            clearInterval(this.$pollSizeChangesTimer);
            if (this.$observer)
              this.$observer.disconnect();
            if (this.el && this.el.parentNode)
              this.el.parentNode.removeChild(this.el);
          };
          this.$getZoom = function getZoom(element) {
            if (!element || !element.parentElement)
              return 1;
            return (window.getComputedStyle(element).zoom || 1) * getZoom(element.parentElement);
          };
          this.$initTransformMeasureNodes = function() {
            var t5 = function(t6, l7) {
              return ["div", {
                style: "position: absolute;top:" + t6 + "px;left:" + l7 + "px;"
              }];
            };
            this.els = dom.buildDom([t5(0, 0), t5(L2, 0), t5(0, L2), t5(L2, L2)], this.el);
          };
          this.transformCoordinates = function(clientPos, elPos) {
            if (clientPos) {
              var zoom = this.$getZoom(this.el);
              clientPos = mul(1 / zoom, clientPos);
            }
            function solve(l1, l22, r5) {
              var det = l1[1] * l22[0] - l1[0] * l22[1];
              return [
                (-l22[1] * r5[0] + l22[0] * r5[1]) / det,
                (+l1[1] * r5[0] - l1[0] * r5[1]) / det
              ];
            }
            function sub(a4, b3) {
              return [a4[0] - b3[0], a4[1] - b3[1]];
            }
            function add(a4, b3) {
              return [a4[0] + b3[0], a4[1] + b3[1]];
            }
            function mul(a4, b3) {
              return [a4 * b3[0], a4 * b3[1]];
            }
            if (!this.els)
              this.$initTransformMeasureNodes();
            function p2(el) {
              var r5 = el.getBoundingClientRect();
              return [r5.left, r5.top];
            }
            var a3 = p2(this.els[0]);
            var b2 = p2(this.els[1]);
            var c2 = p2(this.els[2]);
            var d3 = p2(this.els[3]);
            var h5 = solve(sub(d3, b2), sub(d3, c2), sub(add(b2, c2), add(d3, a3)));
            var m1 = mul(1 + h5[0], sub(b2, a3));
            var m2 = mul(1 + h5[1], sub(c2, a3));
            if (elPos) {
              var x2 = elPos;
              var k2 = h5[0] * x2[0] / L2 + h5[1] * x2[1] / L2 + 1;
              var ut = add(mul(x2[0], m1), mul(x2[1], m2));
              return add(mul(1 / k2 / L2, ut), a3);
            }
            var u2 = sub(clientPos, a3);
            var f2 = solve(sub(m1, mul(h5[0], u2)), sub(m2, mul(h5[1], u2)), u2);
            return mul(L2, f2);
          };
        }).call(FontMetrics.prototype);
      });
      ace.define("ace/virtual_renderer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/config", "ace/layer/gutter", "ace/layer/marker", "ace/layer/text", "ace/layer/cursor", "ace/scrollbar", "ace/scrollbar", "ace/renderloop", "ace/layer/font_metrics", "ace/lib/event_emitter", "ace/lib/useragent"], function(require3, exports2, module2) {
        "use strict";
        var oop = require3("./lib/oop");
        var dom = require3("./lib/dom");
        var config2 = require3("./config");
        var GutterLayer = require3("./layer/gutter").Gutter;
        var MarkerLayer = require3("./layer/marker").Marker;
        var TextLayer = require3("./layer/text").Text;
        var CursorLayer = require3("./layer/cursor").Cursor;
        var HScrollBar = require3("./scrollbar").HScrollBar;
        var VScrollBar = require3("./scrollbar").VScrollBar;
        var RenderLoop = require3("./renderloop").RenderLoop;
        var FontMetrics = require3("./layer/font_metrics").FontMetrics;
        var EventEmitter = require3("./lib/event_emitter").EventEmitter;
        var editorCss = `.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}.ace_editor {position: relative;overflow: hidden;padding: 0;font: 12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;direction: ltr;text-align: left;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;box-sizing: border-box;min-width: 100%;contain: style size layout;font-variant-ligatures: no-common-ligatures;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: '';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;contain: style size layout;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {position: absolute;top: 0;left: 0;right: 0;padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {contain: strict;position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;contain: strict;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: transparent;color: inherit;z-index: 1000;opacity: 1;}.ace_composition_placeholder { color: transparent }.ace_composition_marker { border-bottom: 1px solid;position: absolute;border-radius: 0;margin-top: 1px;}[ace_nocontext=true] {transform: none!important;filter: none!important;clip-path: none!important;mask : none!important;contain: none!important;perspective: none!important;mix-blend-mode: initial!important;z-index: auto;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;height: 1000000px;contain: style size layout;}.ace_text-layer {font: inherit !important;position: absolute;height: 1000000px;width: 1000000px;contain: style size layout;}.ace_text-layer > .ace_line, .ace_text-layer > .ace_line_group {contain: style size layout;position: absolute;top: 0;left: 0;right: 0;}.ace_hidpi .ace_text-layer,.ace_hidpi .ace_gutter-layer,.ace_hidpi .ace_content,.ace_hidpi .ace_gutter {contain: strict;will-change: transform;}.ace_hidpi .ace_text-layer > .ace_line, .ace_hidpi .ace_text-layer > .ace_line_group {contain: strict;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_hasPlaceholder .ace_hidden-cursors .ace_cursor {opacity: 0;}.ace_smooth-blinking .ace_cursor {transition: opacity 0.18s;}.ace_animate-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: step-end;animation-name: blink-ace-animate;animation-iteration-count: infinite;}.ace_animate-blinking.ace_smooth-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: ease-in-out;animation-name: blink-ace-animate-smooth;}@keyframes blink-ace-animate {from, to { opacity: 1; }60% { opacity: 0; }}@keyframes blink-ace-animate-smooth {from, to { opacity: 1; }45% { opacity: 1; }60% { opacity: 0; }85% { opacity: 0; }}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_error_bracket {position: absolute;border-bottom: 1px solid #DE5555;border-radius: 0;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;box-sizing: border-box;}.ace_line .ace_fold {box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_inline_button {border: 1px solid lightgray;display: inline-block;margin: -1px 8px;padding: 0 5px;pointer-events: auto;cursor: pointer;}.ace_inline_button:hover {border-color: gray;background: rgba(200,200,200,0.2);display: inline-block;pointer-events: auto;}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_mobile-menu {position: absolute;line-height: 1.5;border-radius: 4px;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;background: white;box-shadow: 1px 3px 2px grey;border: 1px solid #dcdcdc;color: black;}.ace_dark > .ace_mobile-menu {background: #333;color: #ccc;box-shadow: 1px 3px 2px grey;border: 1px solid #444;}.ace_mobile-button {padding: 2px;cursor: pointer;overflow: hidden;}.ace_mobile-button:hover {background-color: #eee;opacity:1;}.ace_mobile-button:active {background-color: #ddd;}.ace_placeholder {font-family: arial;transform: scale(0.9);transform-origin: left;white-space: pre;opacity: 0.7;margin: 0 10px;}`;
        var useragent = require3("./lib/useragent");
        var HIDE_TEXTAREA = useragent.isIE;
        dom.importCssString(editorCss, "ace_editor.css", false);
        var VirtualRenderer = function(container, theme) {
          var _self = this;
          this.container = container || dom.createElement("div");
          dom.addCssClass(this.container, "ace_editor");
          if (dom.HI_DPI)
            dom.addCssClass(this.container, "ace_hidpi");
          this.setTheme(theme);
          if (config2.get("useStrictCSP") == null)
            config2.set("useStrictCSP", false);
          this.$gutter = dom.createElement("div");
          this.$gutter.className = "ace_gutter";
          this.container.appendChild(this.$gutter);
          this.$gutter.setAttribute("aria-hidden", true);
          this.scroller = dom.createElement("div");
          this.scroller.className = "ace_scroller";
          this.container.appendChild(this.scroller);
          this.content = dom.createElement("div");
          this.content.className = "ace_content";
          this.scroller.appendChild(this.content);
          this.$gutterLayer = new GutterLayer(this.$gutter);
          this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this));
          this.$markerBack = new MarkerLayer(this.content);
          var textLayer = this.$textLayer = new TextLayer(this.content);
          this.canvas = textLayer.element;
          this.$markerFront = new MarkerLayer(this.content);
          this.$cursorLayer = new CursorLayer(this.content);
          this.$horizScroll = false;
          this.$vScroll = false;
          this.scrollBar = this.scrollBarV = new VScrollBar(this.container, this);
          this.scrollBarH = new HScrollBar(this.container, this);
          this.scrollBarV.on("scroll", function(e10) {
            if (!_self.$scrollAnimation)
              _self.session.setScrollTop(e10.data - _self.scrollMargin.top);
          });
          this.scrollBarH.on("scroll", function(e10) {
            if (!_self.$scrollAnimation)
              _self.session.setScrollLeft(e10.data - _self.scrollMargin.left);
          });
          this.scrollTop = 0;
          this.scrollLeft = 0;
          this.cursorPos = {
            row: 0,
            column: 0
          };
          this.$fontMetrics = new FontMetrics(this.container);
          this.$textLayer.$setFontMetrics(this.$fontMetrics);
          this.$textLayer.on("changeCharacterSize", function(e10) {
            _self.updateCharacterSize();
            _self.onResize(true, _self.gutterWidth, _self.$size.width, _self.$size.height);
            _self._signal("changeCharacterSize", e10);
          });
          this.$size = {
            width: 0,
            height: 0,
            scrollerHeight: 0,
            scrollerWidth: 0,
            $dirty: true
          };
          this.layerConfig = {
            width: 1,
            padding: 0,
            firstRow: 0,
            firstRowScreen: 0,
            lastRow: 0,
            lineHeight: 0,
            characterWidth: 0,
            minHeight: 1,
            maxHeight: 1,
            offset: 0,
            height: 1,
            gutterOffset: 1
          };
          this.scrollMargin = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            v: 0,
            h: 0
          };
          this.margin = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            v: 0,
            h: 0
          };
          this.$keepTextAreaAtCursor = !useragent.isIOS;
          this.$loop = new RenderLoop(
            this.$renderChanges.bind(this),
            this.container.ownerDocument.defaultView
          );
          this.$loop.schedule(this.CHANGE_FULL);
          this.updateCharacterSize();
          this.setPadding(4);
          config2.resetOptions(this);
          config2._signal("renderer", this);
        };
        (function() {
          this.CHANGE_CURSOR = 1;
          this.CHANGE_MARKER = 2;
          this.CHANGE_GUTTER = 4;
          this.CHANGE_SCROLL = 8;
          this.CHANGE_LINES = 16;
          this.CHANGE_TEXT = 32;
          this.CHANGE_SIZE = 64;
          this.CHANGE_MARKER_BACK = 128;
          this.CHANGE_MARKER_FRONT = 256;
          this.CHANGE_FULL = 512;
          this.CHANGE_H_SCROLL = 1024;
          oop.implement(this, EventEmitter);
          this.updateCharacterSize = function() {
            if (this.$textLayer.allowBoldFonts != this.$allowBoldFonts) {
              this.$allowBoldFonts = this.$textLayer.allowBoldFonts;
              this.setStyle("ace_nobold", !this.$allowBoldFonts);
            }
            this.layerConfig.characterWidth = this.characterWidth = this.$textLayer.getCharacterWidth();
            this.layerConfig.lineHeight = this.lineHeight = this.$textLayer.getLineHeight();
            this.$updatePrintMargin();
            dom.setStyle(this.scroller.style, "line-height", this.lineHeight + "px");
          };
          this.setSession = function(session) {
            if (this.session)
              this.session.doc.off("changeNewLineMode", this.onChangeNewLineMode);
            this.session = session;
            if (session && this.scrollMargin.top && session.getScrollTop() <= 0)
              session.setScrollTop(-this.scrollMargin.top);
            this.$cursorLayer.setSession(session);
            this.$markerBack.setSession(session);
            this.$markerFront.setSession(session);
            this.$gutterLayer.setSession(session);
            this.$textLayer.setSession(session);
            if (!session)
              return;
            this.$loop.schedule(this.CHANGE_FULL);
            this.session.$setFontMetrics(this.$fontMetrics);
            this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null;
            this.onChangeNewLineMode = this.onChangeNewLineMode.bind(this);
            this.onChangeNewLineMode();
            this.session.doc.on("changeNewLineMode", this.onChangeNewLineMode);
          };
          this.updateLines = function(firstRow, lastRow, force) {
            if (lastRow === void 0)
              lastRow = Infinity;
            if (!this.$changedLines) {
              this.$changedLines = {
                firstRow,
                lastRow
              };
            } else {
              if (this.$changedLines.firstRow > firstRow)
                this.$changedLines.firstRow = firstRow;
              if (this.$changedLines.lastRow < lastRow)
                this.$changedLines.lastRow = lastRow;
            }
            if (this.$changedLines.lastRow < this.layerConfig.firstRow) {
              if (force)
                this.$changedLines.lastRow = this.layerConfig.lastRow;
              else
                return;
            }
            if (this.$changedLines.firstRow > this.layerConfig.lastRow)
              return;
            this.$loop.schedule(this.CHANGE_LINES);
          };
          this.onChangeNewLineMode = function() {
            this.$loop.schedule(this.CHANGE_TEXT);
            this.$textLayer.$updateEolChar();
            this.session.$bidiHandler.setEolChar(this.$textLayer.EOL_CHAR);
          };
          this.onChangeTabSize = function() {
            this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER);
            this.$textLayer.onChangeTabSize();
          };
          this.updateText = function() {
            this.$loop.schedule(this.CHANGE_TEXT);
          };
          this.updateFull = function(force) {
            if (force)
              this.$renderChanges(this.CHANGE_FULL, true);
            else
              this.$loop.schedule(this.CHANGE_FULL);
          };
          this.updateFontSize = function() {
            this.$textLayer.checkForSizeChanges();
          };
          this.$changes = 0;
          this.$updateSizeAsync = function() {
            if (this.$loop.pending)
              this.$size.$dirty = true;
            else
              this.onResize();
          };
          this.onResize = function(force, gutterWidth, width, height) {
            if (this.resizing > 2)
              return;
            else if (this.resizing > 0)
              this.resizing++;
            else
              this.resizing = force ? 1 : 0;
            var el = this.container;
            if (!height)
              height = el.clientHeight || el.scrollHeight;
            if (!width)
              width = el.clientWidth || el.scrollWidth;
            var changes = this.$updateCachedSize(force, gutterWidth, width, height);
            if (!this.$size.scrollerHeight || !width && !height)
              return this.resizing = 0;
            if (force)
              this.$gutterLayer.$padding = null;
            if (force)
              this.$renderChanges(changes | this.$changes, true);
            else
              this.$loop.schedule(changes | this.$changes);
            if (this.resizing)
              this.resizing = 0;
            this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null;
          };
          this.$updateCachedSize = function(force, gutterWidth, width, height) {
            height -= this.$extraHeight || 0;
            var changes = 0;
            var size = this.$size;
            var oldSize = {
              width: size.width,
              height: size.height,
              scrollerHeight: size.scrollerHeight,
              scrollerWidth: size.scrollerWidth
            };
            if (height && (force || size.height != height)) {
              size.height = height;
              changes |= this.CHANGE_SIZE;
              size.scrollerHeight = size.height;
              if (this.$horizScroll)
                size.scrollerHeight -= this.scrollBarH.getHeight();
              this.scrollBarV.element.style.bottom = this.scrollBarH.getHeight() + "px";
              changes = changes | this.CHANGE_SCROLL;
            }
            if (width && (force || size.width != width)) {
              changes |= this.CHANGE_SIZE;
              size.width = width;
              if (gutterWidth == null)
                gutterWidth = this.$showGutter ? this.$gutter.offsetWidth : 0;
              this.gutterWidth = gutterWidth;
              dom.setStyle(this.scrollBarH.element.style, "left", gutterWidth + "px");
              dom.setStyle(this.scroller.style, "left", gutterWidth + this.margin.left + "px");
              size.scrollerWidth = Math.max(0, width - gutterWidth - this.scrollBarV.getWidth() - this.margin.h);
              dom.setStyle(this.$gutter.style, "left", this.margin.left + "px");
              var right = this.scrollBarV.getWidth() + "px";
              dom.setStyle(this.scrollBarH.element.style, "right", right);
              dom.setStyle(this.scroller.style, "right", right);
              dom.setStyle(this.scroller.style, "bottom", this.scrollBarH.getHeight());
              if (this.session && this.session.getUseWrapMode() && this.adjustWrapLimit() || force) {
                changes |= this.CHANGE_FULL;
              }
            }
            size.$dirty = !width || !height;
            if (changes)
              this._signal("resize", oldSize);
            return changes;
          };
          this.onGutterResize = function(width) {
            var gutterWidth = this.$showGutter ? width : 0;
            if (gutterWidth != this.gutterWidth)
              this.$changes |= this.$updateCachedSize(true, gutterWidth, this.$size.width, this.$size.height);
            if (this.session.getUseWrapMode() && this.adjustWrapLimit()) {
              this.$loop.schedule(this.CHANGE_FULL);
            } else if (this.$size.$dirty) {
              this.$loop.schedule(this.CHANGE_FULL);
            } else {
              this.$computeLayerConfig();
            }
          };
          this.adjustWrapLimit = function() {
            var availableWidth = this.$size.scrollerWidth - this.$padding * 2;
            var limit = Math.floor(availableWidth / this.characterWidth);
            return this.session.adjustWrapLimit(limit, this.$showPrintMargin && this.$printMarginColumn);
          };
          this.setAnimatedScroll = function(shouldAnimate) {
            this.setOption("animatedScroll", shouldAnimate);
          };
          this.getAnimatedScroll = function() {
            return this.$animatedScroll;
          };
          this.setShowInvisibles = function(showInvisibles) {
            this.setOption("showInvisibles", showInvisibles);
            this.session.$bidiHandler.setShowInvisibles(showInvisibles);
          };
          this.getShowInvisibles = function() {
            return this.getOption("showInvisibles");
          };
          this.getDisplayIndentGuides = function() {
            return this.getOption("displayIndentGuides");
          };
          this.setDisplayIndentGuides = function(display) {
            this.setOption("displayIndentGuides", display);
          };
          this.setShowPrintMargin = function(showPrintMargin) {
            this.setOption("showPrintMargin", showPrintMargin);
          };
          this.getShowPrintMargin = function() {
            return this.getOption("showPrintMargin");
          };
          this.setPrintMarginColumn = function(showPrintMargin) {
            this.setOption("printMarginColumn", showPrintMargin);
          };
          this.getPrintMarginColumn = function() {
            return this.getOption("printMarginColumn");
          };
          this.getShowGutter = function() {
            return this.getOption("showGutter");
          };
          this.setShowGutter = function(show) {
            return this.setOption("showGutter", show);
          };
          this.getFadeFoldWidgets = function() {
            return this.getOption("fadeFoldWidgets");
          };
          this.setFadeFoldWidgets = function(show) {
            this.setOption("fadeFoldWidgets", show);
          };
          this.setHighlightGutterLine = function(shouldHighlight) {
            this.setOption("highlightGutterLine", shouldHighlight);
          };
          this.getHighlightGutterLine = function() {
            return this.getOption("highlightGutterLine");
          };
          this.$updatePrintMargin = function() {
            if (!this.$showPrintMargin && !this.$printMarginEl)
              return;
            if (!this.$printMarginEl) {
              var containerEl = dom.createElement("div");
              containerEl.className = "ace_layer ace_print-margin-layer";
              this.$printMarginEl = dom.createElement("div");
              this.$printMarginEl.className = "ace_print-margin";
              containerEl.appendChild(this.$printMarginEl);
              this.content.insertBefore(containerEl, this.content.firstChild);
            }
            var style = this.$printMarginEl.style;
            style.left = Math.round(this.characterWidth * this.$printMarginColumn + this.$padding) + "px";
            style.visibility = this.$showPrintMargin ? "visible" : "hidden";
            if (this.session && this.session.$wrap == -1)
              this.adjustWrapLimit();
          };
          this.getContainerElement = function() {
            return this.container;
          };
          this.getMouseEventTarget = function() {
            return this.scroller;
          };
          this.getTextAreaContainer = function() {
            return this.container;
          };
          this.$moveTextAreaToCursor = function() {
            if (this.$isMousePressed)
              return;
            var style = this.textarea.style;
            var composition = this.$composition;
            if (!this.$keepTextAreaAtCursor && !composition) {
              dom.translate(this.textarea, -100, 0);
              return;
            }
            var pixelPos = this.$cursorLayer.$pixelPos;
            if (!pixelPos)
              return;
            if (composition && composition.markerRange)
              pixelPos = this.$cursorLayer.getPixelPosition(composition.markerRange.start, true);
            var config3 = this.layerConfig;
            var posTop = pixelPos.top;
            var posLeft = pixelPos.left;
            posTop -= config3.offset;
            var h5 = composition && composition.useTextareaForIME ? this.lineHeight : HIDE_TEXTAREA ? 0 : 1;
            if (posTop < 0 || posTop > config3.height - h5) {
              dom.translate(this.textarea, 0, 0);
              return;
            }
            var w2 = 1;
            var maxTop = this.$size.height - h5;
            if (!composition) {
              posTop += this.lineHeight;
            } else {
              if (composition.useTextareaForIME) {
                var val = this.textarea.value;
                w2 = this.characterWidth * this.session.$getStringScreenWidth(val)[0];
              } else {
                posTop += this.lineHeight + 2;
              }
            }
            posLeft -= this.scrollLeft;
            if (posLeft > this.$size.scrollerWidth - w2)
              posLeft = this.$size.scrollerWidth - w2;
            posLeft += this.gutterWidth + this.margin.left;
            dom.setStyle(style, "height", h5 + "px");
            dom.setStyle(style, "width", w2 + "px");
            dom.translate(this.textarea, Math.min(posLeft, this.$size.scrollerWidth - w2), Math.min(posTop, maxTop));
          };
          this.getFirstVisibleRow = function() {
            return this.layerConfig.firstRow;
          };
          this.getFirstFullyVisibleRow = function() {
            return this.layerConfig.firstRow + (this.layerConfig.offset === 0 ? 0 : 1);
          };
          this.getLastFullyVisibleRow = function() {
            var config3 = this.layerConfig;
            var lastRow = config3.lastRow;
            var top = this.session.documentToScreenRow(lastRow, 0) * config3.lineHeight;
            if (top - this.session.getScrollTop() > config3.height - config3.lineHeight)
              return lastRow - 1;
            return lastRow;
          };
          this.getLastVisibleRow = function() {
            return this.layerConfig.lastRow;
          };
          this.$padding = null;
          this.setPadding = function(padding) {
            this.$padding = padding;
            this.$textLayer.setPadding(padding);
            this.$cursorLayer.setPadding(padding);
            this.$markerFront.setPadding(padding);
            this.$markerBack.setPadding(padding);
            this.$loop.schedule(this.CHANGE_FULL);
            this.$updatePrintMargin();
          };
          this.setScrollMargin = function(top, bottom, left, right) {
            var sm = this.scrollMargin;
            sm.top = top | 0;
            sm.bottom = bottom | 0;
            sm.right = right | 0;
            sm.left = left | 0;
            sm.v = sm.top + sm.bottom;
            sm.h = sm.left + sm.right;
            if (sm.top && this.scrollTop <= 0 && this.session)
              this.session.setScrollTop(-sm.top);
            this.updateFull();
          };
          this.setMargin = function(top, bottom, left, right) {
            var sm = this.margin;
            sm.top = top | 0;
            sm.bottom = bottom | 0;
            sm.right = right | 0;
            sm.left = left | 0;
            sm.v = sm.top + sm.bottom;
            sm.h = sm.left + sm.right;
            this.$updateCachedSize(true, this.gutterWidth, this.$size.width, this.$size.height);
            this.updateFull();
          };
          this.getHScrollBarAlwaysVisible = function() {
            return this.$hScrollBarAlwaysVisible;
          };
          this.setHScrollBarAlwaysVisible = function(alwaysVisible) {
            this.setOption("hScrollBarAlwaysVisible", alwaysVisible);
          };
          this.getVScrollBarAlwaysVisible = function() {
            return this.$vScrollBarAlwaysVisible;
          };
          this.setVScrollBarAlwaysVisible = function(alwaysVisible) {
            this.setOption("vScrollBarAlwaysVisible", alwaysVisible);
          };
          this.$updateScrollBarV = function() {
            var scrollHeight = this.layerConfig.maxHeight;
            var scrollerHeight = this.$size.scrollerHeight;
            if (!this.$maxLines && this.$scrollPastEnd) {
              scrollHeight -= (scrollerHeight - this.lineHeight) * this.$scrollPastEnd;
              if (this.scrollTop > scrollHeight - scrollerHeight) {
                scrollHeight = this.scrollTop + scrollerHeight;
                this.scrollBarV.scrollTop = null;
              }
            }
            this.scrollBarV.setScrollHeight(scrollHeight + this.scrollMargin.v);
            this.scrollBarV.setScrollTop(this.scrollTop + this.scrollMargin.top);
          };
          this.$updateScrollBarH = function() {
            this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h);
            this.scrollBarH.setScrollLeft(this.scrollLeft + this.scrollMargin.left);
          };
          this.$frozen = false;
          this.freeze = function() {
            this.$frozen = true;
          };
          this.unfreeze = function() {
            this.$frozen = false;
          };
          this.$renderChanges = function(changes, force) {
            if (this.$changes) {
              changes |= this.$changes;
              this.$changes = 0;
            }
            if (!this.session || !this.container.offsetWidth || this.$frozen || !changes && !force) {
              this.$changes |= changes;
              return;
            }
            if (this.$size.$dirty) {
              this.$changes |= changes;
              return this.onResize(true);
            }
            if (!this.lineHeight) {
              this.$textLayer.checkForSizeChanges();
            }
            this._signal("beforeRender", changes);
            if (this.session && this.session.$bidiHandler)
              this.session.$bidiHandler.updateCharacterWidths(this.$fontMetrics);
            var config3 = this.layerConfig;
            if (changes & this.CHANGE_FULL || changes & this.CHANGE_SIZE || changes & this.CHANGE_TEXT || changes & this.CHANGE_LINES || changes & this.CHANGE_SCROLL || changes & this.CHANGE_H_SCROLL) {
              changes |= this.$computeLayerConfig() | this.$loop.clear();
              if (config3.firstRow != this.layerConfig.firstRow && config3.firstRowScreen == this.layerConfig.firstRowScreen) {
                var st = this.scrollTop + (config3.firstRow - this.layerConfig.firstRow) * this.lineHeight;
                if (st > 0) {
                  this.scrollTop = st;
                  changes = changes | this.CHANGE_SCROLL;
                  changes |= this.$computeLayerConfig() | this.$loop.clear();
                }
              }
              config3 = this.layerConfig;
              this.$updateScrollBarV();
              if (changes & this.CHANGE_H_SCROLL)
                this.$updateScrollBarH();
              dom.translate(this.content, -this.scrollLeft, -config3.offset);
              var width = config3.width + 2 * this.$padding + "px";
              var height = config3.minHeight + "px";
              dom.setStyle(this.content.style, "width", width);
              dom.setStyle(this.content.style, "height", height);
            }
            if (changes & this.CHANGE_H_SCROLL) {
              dom.translate(this.content, -this.scrollLeft, -config3.offset);
              this.scroller.className = this.scrollLeft <= 0 ? "ace_scroller" : "ace_scroller ace_scroll-left";
            }
            if (changes & this.CHANGE_FULL) {
              this.$changedLines = null;
              this.$textLayer.update(config3);
              if (this.$showGutter)
                this.$gutterLayer.update(config3);
              this.$markerBack.update(config3);
              this.$markerFront.update(config3);
              this.$cursorLayer.update(config3);
              this.$moveTextAreaToCursor();
              this._signal("afterRender", changes);
              return;
            }
            if (changes & this.CHANGE_SCROLL) {
              this.$changedLines = null;
              if (changes & this.CHANGE_TEXT || changes & this.CHANGE_LINES)
                this.$textLayer.update(config3);
              else
                this.$textLayer.scrollLines(config3);
              if (this.$showGutter) {
                if (changes & this.CHANGE_GUTTER || changes & this.CHANGE_LINES)
                  this.$gutterLayer.update(config3);
                else
                  this.$gutterLayer.scrollLines(config3);
              }
              this.$markerBack.update(config3);
              this.$markerFront.update(config3);
              this.$cursorLayer.update(config3);
              this.$moveTextAreaToCursor();
              this._signal("afterRender", changes);
              return;
            }
            if (changes & this.CHANGE_TEXT) {
              this.$changedLines = null;
              this.$textLayer.update(config3);
              if (this.$showGutter)
                this.$gutterLayer.update(config3);
            } else if (changes & this.CHANGE_LINES) {
              if (this.$updateLines() || changes & this.CHANGE_GUTTER && this.$showGutter)
                this.$gutterLayer.update(config3);
            } else if (changes & this.CHANGE_TEXT || changes & this.CHANGE_GUTTER) {
              if (this.$showGutter)
                this.$gutterLayer.update(config3);
            } else if (changes & this.CHANGE_CURSOR) {
              if (this.$highlightGutterLine)
                this.$gutterLayer.updateLineHighlight(config3);
            }
            if (changes & this.CHANGE_CURSOR) {
              this.$cursorLayer.update(config3);
              this.$moveTextAreaToCursor();
            }
            if (changes & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT)) {
              this.$markerFront.update(config3);
            }
            if (changes & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK)) {
              this.$markerBack.update(config3);
            }
            this._signal("afterRender", changes);
          };
          this.$autosize = function() {
            var height = this.session.getScreenLength() * this.lineHeight;
            var maxHeight = this.$maxLines * this.lineHeight;
            var desiredHeight = Math.min(
              maxHeight,
              Math.max((this.$minLines || 1) * this.lineHeight, height)
            ) + this.scrollMargin.v + (this.$extraHeight || 0);
            if (this.$horizScroll)
              desiredHeight += this.scrollBarH.getHeight();
            if (this.$maxPixelHeight && desiredHeight > this.$maxPixelHeight)
              desiredHeight = this.$maxPixelHeight;
            var hideScrollbars = desiredHeight <= 2 * this.lineHeight;
            var vScroll = !hideScrollbars && height > maxHeight;
            if (desiredHeight != this.desiredHeight || this.$size.height != this.desiredHeight || vScroll != this.$vScroll) {
              if (vScroll != this.$vScroll) {
                this.$vScroll = vScroll;
                this.scrollBarV.setVisible(vScroll);
              }
              var w2 = this.container.clientWidth;
              this.container.style.height = desiredHeight + "px";
              this.$updateCachedSize(true, this.$gutterWidth, w2, desiredHeight);
              this.desiredHeight = desiredHeight;
              this._signal("autosize");
            }
          };
          this.$computeLayerConfig = function() {
            var session = this.session;
            var size = this.$size;
            var hideScrollbars = size.height <= 2 * this.lineHeight;
            var screenLines = this.session.getScreenLength();
            var maxHeight = screenLines * this.lineHeight;
            var longestLine = this.$getLongestLine();
            var horizScroll = !hideScrollbars && (this.$hScrollBarAlwaysVisible || size.scrollerWidth - longestLine - 2 * this.$padding < 0);
            var hScrollChanged = this.$horizScroll !== horizScroll;
            if (hScrollChanged) {
              this.$horizScroll = horizScroll;
              this.scrollBarH.setVisible(horizScroll);
            }
            var vScrollBefore = this.$vScroll;
            if (this.$maxLines && this.lineHeight > 1)
              this.$autosize();
            var minHeight = size.scrollerHeight + this.lineHeight;
            var scrollPastEnd = !this.$maxLines && this.$scrollPastEnd ? (size.scrollerHeight - this.lineHeight) * this.$scrollPastEnd : 0;
            maxHeight += scrollPastEnd;
            var sm = this.scrollMargin;
            this.session.setScrollTop(Math.max(
              -sm.top,
              Math.min(this.scrollTop, maxHeight - size.scrollerHeight + sm.bottom)
            ));
            this.session.setScrollLeft(Math.max(-sm.left, Math.min(
              this.scrollLeft,
              longestLine + 2 * this.$padding - size.scrollerWidth + sm.right
            )));
            var vScroll = !hideScrollbars && (this.$vScrollBarAlwaysVisible || size.scrollerHeight - maxHeight + scrollPastEnd < 0 || this.scrollTop > sm.top);
            var vScrollChanged = vScrollBefore !== vScroll;
            if (vScrollChanged) {
              this.$vScroll = vScroll;
              this.scrollBarV.setVisible(vScroll);
            }
            var offset = this.scrollTop % this.lineHeight;
            var lineCount = Math.ceil(minHeight / this.lineHeight) - 1;
            var firstRow = Math.max(0, Math.round((this.scrollTop - offset) / this.lineHeight));
            var lastRow = firstRow + lineCount;
            var firstRowScreen, firstRowHeight;
            var lineHeight = this.lineHeight;
            firstRow = session.screenToDocumentRow(firstRow, 0);
            var foldLine = session.getFoldLine(firstRow);
            if (foldLine) {
              firstRow = foldLine.start.row;
            }
            firstRowScreen = session.documentToScreenRow(firstRow, 0);
            firstRowHeight = session.getRowLength(firstRow) * lineHeight;
            lastRow = Math.min(session.screenToDocumentRow(lastRow, 0), session.getLength() - 1);
            minHeight = size.scrollerHeight + session.getRowLength(lastRow) * lineHeight + firstRowHeight;
            offset = this.scrollTop - firstRowScreen * lineHeight;
            var changes = 0;
            if (this.layerConfig.width != longestLine || hScrollChanged)
              changes = this.CHANGE_H_SCROLL;
            if (hScrollChanged || vScrollChanged) {
              changes |= this.$updateCachedSize(true, this.gutterWidth, size.width, size.height);
              this._signal("scrollbarVisibilityChanged");
              if (vScrollChanged)
                longestLine = this.$getLongestLine();
            }
            this.layerConfig = {
              width: longestLine,
              padding: this.$padding,
              firstRow,
              firstRowScreen,
              lastRow,
              lineHeight,
              characterWidth: this.characterWidth,
              minHeight,
              maxHeight,
              offset,
              gutterOffset: lineHeight ? Math.max(0, Math.ceil((offset + size.height - size.scrollerHeight) / lineHeight)) : 0,
              height: this.$size.scrollerHeight
            };
            if (this.session.$bidiHandler)
              this.session.$bidiHandler.setContentWidth(longestLine - this.$padding);
            return changes;
          };
          this.$updateLines = function() {
            if (!this.$changedLines)
              return;
            var firstRow = this.$changedLines.firstRow;
            var lastRow = this.$changedLines.lastRow;
            this.$changedLines = null;
            var layerConfig = this.layerConfig;
            if (firstRow > layerConfig.lastRow + 1) {
              return;
            }
            if (lastRow < layerConfig.firstRow) {
              return;
            }
            if (lastRow === Infinity) {
              if (this.$showGutter)
                this.$gutterLayer.update(layerConfig);
              this.$textLayer.update(layerConfig);
              return;
            }
            this.$textLayer.updateLines(layerConfig, firstRow, lastRow);
            return true;
          };
          this.$getLongestLine = function() {
            var charCount = this.session.getScreenWidth();
            if (this.showInvisibles && !this.session.$useWrapMode)
              charCount += 1;
            if (this.$textLayer && charCount > this.$textLayer.MAX_LINE_LENGTH)
              charCount = this.$textLayer.MAX_LINE_LENGTH + 30;
            return Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(charCount * this.characterWidth));
          };
          this.updateFrontMarkers = function() {
            this.$markerFront.setMarkers(this.session.getMarkers(true));
            this.$loop.schedule(this.CHANGE_MARKER_FRONT);
          };
          this.updateBackMarkers = function() {
            this.$markerBack.setMarkers(this.session.getMarkers());
            this.$loop.schedule(this.CHANGE_MARKER_BACK);
          };
          this.addGutterDecoration = function(row, className) {
            this.$gutterLayer.addGutterDecoration(row, className);
          };
          this.removeGutterDecoration = function(row, className) {
            this.$gutterLayer.removeGutterDecoration(row, className);
          };
          this.updateBreakpoints = function(rows) {
            this.$loop.schedule(this.CHANGE_GUTTER);
          };
          this.setAnnotations = function(annotations) {
            this.$gutterLayer.setAnnotations(annotations);
            this.$loop.schedule(this.CHANGE_GUTTER);
          };
          this.updateCursor = function() {
            this.$loop.schedule(this.CHANGE_CURSOR);
          };
          this.hideCursor = function() {
            this.$cursorLayer.hideCursor();
          };
          this.showCursor = function() {
            this.$cursorLayer.showCursor();
          };
          this.scrollSelectionIntoView = function(anchor, lead, offset) {
            this.scrollCursorIntoView(anchor, offset);
            this.scrollCursorIntoView(lead, offset);
          };
          this.scrollCursorIntoView = function(cursor, offset, $viewMargin) {
            if (this.$size.scrollerHeight === 0)
              return;
            var pos = this.$cursorLayer.getPixelPosition(cursor);
            var left = pos.left;
            var top = pos.top;
            var topMargin = $viewMargin && $viewMargin.top || 0;
            var bottomMargin = $viewMargin && $viewMargin.bottom || 0;
            var scrollTop = this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop;
            if (scrollTop + topMargin > top) {
              if (offset && scrollTop + topMargin > top + this.lineHeight)
                top -= offset * this.$size.scrollerHeight;
              if (top === 0)
                top = -this.scrollMargin.top;
              this.session.setScrollTop(top);
            } else if (scrollTop + this.$size.scrollerHeight - bottomMargin < top + this.lineHeight) {
              if (offset && scrollTop + this.$size.scrollerHeight - bottomMargin < top - this.lineHeight)
                top += offset * this.$size.scrollerHeight;
              this.session.setScrollTop(top + this.lineHeight + bottomMargin - this.$size.scrollerHeight);
            }
            var scrollLeft = this.scrollLeft;
            if (scrollLeft > left) {
              if (left < this.$padding + 2 * this.layerConfig.characterWidth)
                left = -this.scrollMargin.left;
              this.session.setScrollLeft(left);
            } else if (scrollLeft + this.$size.scrollerWidth < left + this.characterWidth) {
              this.session.setScrollLeft(Math.round(left + this.characterWidth - this.$size.scrollerWidth));
            } else if (scrollLeft <= this.$padding && left - scrollLeft < this.characterWidth) {
              this.session.setScrollLeft(0);
            }
          };
          this.getScrollTop = function() {
            return this.session.getScrollTop();
          };
          this.getScrollLeft = function() {
            return this.session.getScrollLeft();
          };
          this.getScrollTopRow = function() {
            return this.scrollTop / this.lineHeight;
          };
          this.getScrollBottomRow = function() {
            return Math.max(0, Math.floor((this.scrollTop + this.$size.scrollerHeight) / this.lineHeight) - 1);
          };
          this.scrollToRow = function(row) {
            this.session.setScrollTop(row * this.lineHeight);
          };
          this.alignCursor = function(cursor, alignment) {
            if (typeof cursor == "number")
              cursor = { row: cursor, column: 0 };
            var pos = this.$cursorLayer.getPixelPosition(cursor);
            var h5 = this.$size.scrollerHeight - this.lineHeight;
            var offset = pos.top - h5 * (alignment || 0);
            this.session.setScrollTop(offset);
            return offset;
          };
          this.STEPS = 8;
          this.$calcSteps = function(fromValue, toValue) {
            var i6 = 0;
            var l7 = this.STEPS;
            var steps = [];
            var func = function(t5, x_min, dx) {
              return dx * (Math.pow(t5 - 1, 3) + 1) + x_min;
            };
            for (i6 = 0; i6 < l7; ++i6)
              steps.push(func(i6 / this.STEPS, fromValue, toValue - fromValue));
            return steps;
          };
          this.scrollToLine = function(line, center, animate, callback) {
            var pos = this.$cursorLayer.getPixelPosition({ row: line, column: 0 });
            var offset = pos.top;
            if (center)
              offset -= this.$size.scrollerHeight / 2;
            var initialScroll = this.scrollTop;
            this.session.setScrollTop(offset);
            if (animate !== false)
              this.animateScrolling(initialScroll, callback);
          };
          this.animateScrolling = function(fromValue, callback) {
            var toValue = this.scrollTop;
            if (!this.$animatedScroll)
              return;
            var _self = this;
            if (fromValue == toValue)
              return;
            if (this.$scrollAnimation) {
              var oldSteps = this.$scrollAnimation.steps;
              if (oldSteps.length) {
                fromValue = oldSteps[0];
                if (fromValue == toValue)
                  return;
              }
            }
            var steps = _self.$calcSteps(fromValue, toValue);
            this.$scrollAnimation = { from: fromValue, to: toValue, steps };
            clearInterval(this.$timer);
            _self.session.setScrollTop(steps.shift());
            _self.session.$scrollTop = toValue;
            this.$timer = setInterval(function() {
              if (!_self.session)
                return clearInterval(_self.$timer);
              if (steps.length) {
                _self.session.setScrollTop(steps.shift());
                _self.session.$scrollTop = toValue;
              } else if (toValue != null) {
                _self.session.$scrollTop = -1;
                _self.session.setScrollTop(toValue);
                toValue = null;
              } else {
                _self.$timer = clearInterval(_self.$timer);
                _self.$scrollAnimation = null;
                callback && callback();
              }
            }, 10);
          };
          this.scrollToY = function(scrollTop) {
            if (this.scrollTop !== scrollTop) {
              this.$loop.schedule(this.CHANGE_SCROLL);
              this.scrollTop = scrollTop;
            }
          };
          this.scrollToX = function(scrollLeft) {
            if (this.scrollLeft !== scrollLeft)
              this.scrollLeft = scrollLeft;
            this.$loop.schedule(this.CHANGE_H_SCROLL);
          };
          this.scrollTo = function(x2, y2) {
            this.session.setScrollTop(y2);
            this.session.setScrollLeft(x2);
          };
          this.scrollBy = function(deltaX, deltaY) {
            deltaY && this.session.setScrollTop(this.session.getScrollTop() + deltaY);
            deltaX && this.session.setScrollLeft(this.session.getScrollLeft() + deltaX);
          };
          this.isScrollableBy = function(deltaX, deltaY) {
            if (deltaY < 0 && this.session.getScrollTop() >= 1 - this.scrollMargin.top)
              return true;
            if (deltaY > 0 && this.session.getScrollTop() + this.$size.scrollerHeight - this.layerConfig.maxHeight < -1 + this.scrollMargin.bottom)
              return true;
            if (deltaX < 0 && this.session.getScrollLeft() >= 1 - this.scrollMargin.left)
              return true;
            if (deltaX > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth - this.layerConfig.width < -1 + this.scrollMargin.right)
              return true;
          };
          this.pixelToScreenCoordinates = function(x2, y2) {
            var canvasPos;
            if (this.$hasCssTransforms) {
              canvasPos = { top: 0, left: 0 };
              var p2 = this.$fontMetrics.transformCoordinates([x2, y2]);
              x2 = p2[1] - this.gutterWidth - this.margin.left;
              y2 = p2[0];
            } else {
              canvasPos = this.scroller.getBoundingClientRect();
            }
            var offsetX = x2 + this.scrollLeft - canvasPos.left - this.$padding;
            var offset = offsetX / this.characterWidth;
            var row = Math.floor((y2 + this.scrollTop - canvasPos.top) / this.lineHeight);
            var col = this.$blockCursor ? Math.floor(offset) : Math.round(offset);
            return { row, column: col, side: offset - col > 0 ? 1 : -1, offsetX };
          };
          this.screenToTextCoordinates = function(x2, y2) {
            var canvasPos;
            if (this.$hasCssTransforms) {
              canvasPos = { top: 0, left: 0 };
              var p2 = this.$fontMetrics.transformCoordinates([x2, y2]);
              x2 = p2[1] - this.gutterWidth - this.margin.left;
              y2 = p2[0];
            } else {
              canvasPos = this.scroller.getBoundingClientRect();
            }
            var offsetX = x2 + this.scrollLeft - canvasPos.left - this.$padding;
            var offset = offsetX / this.characterWidth;
            var col = this.$blockCursor ? Math.floor(offset) : Math.round(offset);
            var row = Math.floor((y2 + this.scrollTop - canvasPos.top) / this.lineHeight);
            return this.session.screenToDocumentPosition(row, Math.max(col, 0), offsetX);
          };
          this.textToScreenCoordinates = function(row, column) {
            var canvasPos = this.scroller.getBoundingClientRect();
            var pos = this.session.documentToScreenPosition(row, column);
            var x2 = this.$padding + (this.session.$bidiHandler.isBidiRow(pos.row, row) ? this.session.$bidiHandler.getPosLeft(pos.column) : Math.round(pos.column * this.characterWidth));
            var y2 = pos.row * this.lineHeight;
            return {
              pageX: canvasPos.left + x2 - this.scrollLeft,
              pageY: canvasPos.top + y2 - this.scrollTop
            };
          };
          this.visualizeFocus = function() {
            dom.addCssClass(this.container, "ace_focus");
          };
          this.visualizeBlur = function() {
            dom.removeCssClass(this.container, "ace_focus");
          };
          this.showComposition = function(composition) {
            this.$composition = composition;
            if (!composition.cssText) {
              composition.cssText = this.textarea.style.cssText;
            }
            if (composition.useTextareaForIME == void 0)
              composition.useTextareaForIME = this.$useTextareaForIME;
            if (this.$useTextareaForIME) {
              dom.addCssClass(this.textarea, "ace_composition");
              this.textarea.style.cssText = "";
              this.$moveTextAreaToCursor();
              this.$cursorLayer.element.style.display = "none";
            } else {
              composition.markerId = this.session.addMarker(composition.markerRange, "ace_composition_marker", "text");
            }
          };
          this.setCompositionText = function(text) {
            var cursor = this.session.selection.cursor;
            this.addToken(text, "composition_placeholder", cursor.row, cursor.column);
            this.$moveTextAreaToCursor();
          };
          this.hideComposition = function() {
            if (!this.$composition)
              return;
            if (this.$composition.markerId)
              this.session.removeMarker(this.$composition.markerId);
            dom.removeCssClass(this.textarea, "ace_composition");
            this.textarea.style.cssText = this.$composition.cssText;
            var cursor = this.session.selection.cursor;
            this.removeExtraToken(cursor.row, cursor.column);
            this.$composition = null;
            this.$cursorLayer.element.style.display = "";
          };
          this.addToken = function(text, type, row, column) {
            var session = this.session;
            session.bgTokenizer.lines[row] = null;
            var newToken = { type, value: text };
            var tokens = session.getTokens(row);
            if (column == null) {
              tokens.push(newToken);
            } else {
              var l7 = 0;
              for (var i6 = 0; i6 < tokens.length; i6++) {
                var token = tokens[i6];
                l7 += token.value.length;
                if (column <= l7) {
                  var diff = token.value.length - (l7 - column);
                  var before = token.value.slice(0, diff);
                  var after = token.value.slice(diff);
                  tokens.splice(i6, 1, { type: token.type, value: before }, newToken, { type: token.type, value: after });
                  break;
                }
              }
            }
            this.updateLines(row, row);
          };
          this.removeExtraToken = function(row, column) {
            this.updateLines(row, row);
          };
          this.setTheme = function(theme, cb) {
            var _self = this;
            this.$themeId = theme;
            _self._dispatchEvent("themeChange", { theme });
            if (!theme || typeof theme == "string") {
              var moduleName = theme || this.$options.theme.initialValue;
              config2.loadModule(["theme", moduleName], afterLoad);
            } else {
              afterLoad(theme);
            }
            function afterLoad(module3) {
              if (_self.$themeId != theme)
                return cb && cb();
              if (!module3 || !module3.cssClass)
                throw new Error("couldn't load module " + theme + " or it didn't call define");
              if (module3.$id)
                _self.$themeId = module3.$id;
              dom.importCssString(
                module3.cssText,
                module3.cssClass,
                _self.container
              );
              if (_self.theme)
                dom.removeCssClass(_self.container, _self.theme.cssClass);
              var padding = "padding" in module3 ? module3.padding : "padding" in (_self.theme || {}) ? 4 : _self.$padding;
              if (_self.$padding && padding != _self.$padding)
                _self.setPadding(padding);
              _self.$theme = module3.cssClass;
              _self.theme = module3;
              dom.addCssClass(_self.container, module3.cssClass);
              dom.setCssClass(_self.container, "ace_dark", module3.isDark);
              if (_self.$size) {
                _self.$size.width = 0;
                _self.$updateSizeAsync();
              }
              _self._dispatchEvent("themeLoaded", { theme: module3 });
              cb && cb();
            }
          };
          this.getTheme = function() {
            return this.$themeId;
          };
          this.setStyle = function(style, include) {
            dom.setCssClass(this.container, style, include !== false);
          };
          this.unsetStyle = function(style) {
            dom.removeCssClass(this.container, style);
          };
          this.setCursorStyle = function(style) {
            dom.setStyle(this.scroller.style, "cursor", style);
          };
          this.setMouseCursor = function(cursorStyle) {
            dom.setStyle(this.scroller.style, "cursor", cursorStyle);
          };
          this.attachToShadowRoot = function() {
            dom.importCssString(editorCss, "ace_editor.css", this.container);
          };
          this.destroy = function() {
            this.freeze();
            this.$fontMetrics.destroy();
            this.$cursorLayer.destroy();
            this.removeAllListeners();
            this.container.textContent = "";
          };
        }).call(VirtualRenderer.prototype);
        config2.defineOptions(VirtualRenderer.prototype, "renderer", {
          animatedScroll: { initialValue: false },
          showInvisibles: {
            set: function(value) {
              if (this.$textLayer.setShowInvisibles(value))
                this.$loop.schedule(this.CHANGE_TEXT);
            },
            initialValue: false
          },
          showPrintMargin: {
            set: function() {
              this.$updatePrintMargin();
            },
            initialValue: true
          },
          printMarginColumn: {
            set: function() {
              this.$updatePrintMargin();
            },
            initialValue: 80
          },
          printMargin: {
            set: function(val) {
              if (typeof val == "number")
                this.$printMarginColumn = val;
              this.$showPrintMargin = !!val;
              this.$updatePrintMargin();
            },
            get: function() {
              return this.$showPrintMargin && this.$printMarginColumn;
            }
          },
          showGutter: {
            set: function(show) {
              this.$gutter.style.display = show ? "block" : "none";
              this.$loop.schedule(this.CHANGE_FULL);
              this.onGutterResize();
            },
            initialValue: true
          },
          fadeFoldWidgets: {
            set: function(show) {
              dom.setCssClass(this.$gutter, "ace_fade-fold-widgets", show);
            },
            initialValue: false
          },
          showFoldWidgets: {
            set: function(show) {
              this.$gutterLayer.setShowFoldWidgets(show);
              this.$loop.schedule(this.CHANGE_GUTTER);
            },
            initialValue: true
          },
          displayIndentGuides: {
            set: function(show) {
              if (this.$textLayer.setDisplayIndentGuides(show))
                this.$loop.schedule(this.CHANGE_TEXT);
            },
            initialValue: true
          },
          highlightGutterLine: {
            set: function(shouldHighlight) {
              this.$gutterLayer.setHighlightGutterLine(shouldHighlight);
              this.$loop.schedule(this.CHANGE_GUTTER);
            },
            initialValue: true
          },
          hScrollBarAlwaysVisible: {
            set: function(val) {
              if (!this.$hScrollBarAlwaysVisible || !this.$horizScroll)
                this.$loop.schedule(this.CHANGE_SCROLL);
            },
            initialValue: false
          },
          vScrollBarAlwaysVisible: {
            set: function(val) {
              if (!this.$vScrollBarAlwaysVisible || !this.$vScroll)
                this.$loop.schedule(this.CHANGE_SCROLL);
            },
            initialValue: false
          },
          fontSize: {
            set: function(size) {
              if (typeof size == "number")
                size = size + "px";
              this.container.style.fontSize = size;
              this.updateFontSize();
            },
            initialValue: 12
          },
          fontFamily: {
            set: function(name2) {
              this.container.style.fontFamily = name2;
              this.updateFontSize();
            }
          },
          maxLines: {
            set: function(val) {
              this.updateFull();
            }
          },
          minLines: {
            set: function(val) {
              if (!(this.$minLines < 562949953421311))
                this.$minLines = 0;
              this.updateFull();
            }
          },
          maxPixelHeight: {
            set: function(val) {
              this.updateFull();
            },
            initialValue: 0
          },
          scrollPastEnd: {
            set: function(val) {
              val = +val || 0;
              if (this.$scrollPastEnd == val)
                return;
              this.$scrollPastEnd = val;
              this.$loop.schedule(this.CHANGE_SCROLL);
            },
            initialValue: 0,
            handlesSet: true
          },
          fixedWidthGutter: {
            set: function(val) {
              this.$gutterLayer.$fixedWidth = !!val;
              this.$loop.schedule(this.CHANGE_GUTTER);
            }
          },
          theme: {
            set: function(val) {
              this.setTheme(val);
            },
            get: function() {
              return this.$themeId || this.theme;
            },
            initialValue: "./theme/textmate",
            handlesSet: true
          },
          hasCssTransforms: {},
          useTextareaForIME: {
            initialValue: !useragent.isMobile && !useragent.isIE
          }
        });
        exports2.VirtualRenderer = VirtualRenderer;
      });
      ace.define("ace/worker/worker_client", ["require", "exports", "module", "ace/lib/oop", "ace/lib/net", "ace/lib/event_emitter", "ace/config"], function(require3, exports2, module2) {
        "use strict";
        var oop = require3("../lib/oop");
        var net = require3("../lib/net");
        var EventEmitter = require3("../lib/event_emitter").EventEmitter;
        var config2 = require3("../config");
        function $workerBlob(workerUrl) {
          var script = "importScripts('" + net.qualifyURL(workerUrl) + "');";
          try {
            return new Blob([script], { "type": "application/javascript" });
          } catch (e10) {
            var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
            var blobBuilder = new BlobBuilder();
            blobBuilder.append(script);
            return blobBuilder.getBlob("application/javascript");
          }
        }
        function createWorker(workerUrl) {
          if (typeof Worker == "undefined")
            return { postMessage: function() {
            }, terminate: function() {
            } };
          if (config2.get("loadWorkerFromBlob")) {
            var blob = $workerBlob(workerUrl);
            var URL = window.URL || window.webkitURL;
            var blobURL = URL.createObjectURL(blob);
            return new Worker(blobURL);
          }
          return new Worker(workerUrl);
        }
        var WorkerClient = function(worker) {
          if (!worker.postMessage)
            worker = this.$createWorkerFromOldConfig.apply(this, arguments);
          this.$worker = worker;
          this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this);
          this.changeListener = this.changeListener.bind(this);
          this.onMessage = this.onMessage.bind(this);
          this.callbackId = 1;
          this.callbacks = {};
          this.$worker.onmessage = this.onMessage;
        };
        (function() {
          oop.implement(this, EventEmitter);
          this.$createWorkerFromOldConfig = function(topLevelNamespaces, mod, classname, workerUrl, importScripts) {
            if (require3.nameToUrl && !require3.toUrl)
              require3.toUrl = require3.nameToUrl;
            if (config2.get("packaged") || !require3.toUrl) {
              workerUrl = workerUrl || config2.moduleUrl(mod, "worker");
            } else {
              var normalizePath = this.$normalizePath;
              workerUrl = workerUrl || normalizePath(require3.toUrl("ace/worker/worker.js", null, "_"));
              var tlns = {};
              topLevelNamespaces.forEach(function(ns) {
                tlns[ns] = normalizePath(require3.toUrl(ns, null, "_").replace(/(\.js)?(\?.*)?$/, ""));
              });
            }
            this.$worker = createWorker(workerUrl);
            if (importScripts) {
              this.send("importScripts", importScripts);
            }
            this.$worker.postMessage({
              init: true,
              tlns,
              module: mod,
              classname
            });
            return this.$worker;
          };
          this.onMessage = function(e10) {
            var msg = e10.data;
            switch (msg.type) {
              case "event":
                this._signal(msg.name, { data: msg.data });
                break;
              case "call":
                var callback = this.callbacks[msg.id];
                if (callback) {
                  callback(msg.data);
                  delete this.callbacks[msg.id];
                }
                break;
              case "error":
                this.reportError(msg.data);
                break;
              case "log":
                window.console && console.log && console.log.apply(console, msg.data);
                break;
            }
          };
          this.reportError = function(err) {
            window.console && console.error && console.error(err);
          };
          this.$normalizePath = function(path) {
            return net.qualifyURL(path);
          };
          this.terminate = function() {
            this._signal("terminate", {});
            this.deltaQueue = null;
            this.$worker.terminate();
            this.$worker = null;
            if (this.$doc)
              this.$doc.off("change", this.changeListener);
            this.$doc = null;
          };
          this.send = function(cmd, args) {
            this.$worker.postMessage({ command: cmd, args });
          };
          this.call = function(cmd, args, callback) {
            if (callback) {
              var id = this.callbackId++;
              this.callbacks[id] = callback;
              args.push(id);
            }
            this.send(cmd, args);
          };
          this.emit = function(event, data) {
            try {
              if (data.data && data.data.err)
                data.data.err = { message: data.data.err.message, stack: data.data.err.stack, code: data.data.err.code };
              this.$worker && this.$worker.postMessage({ event, data: { data: data.data } });
            } catch (ex) {
              console.error(ex.stack);
            }
          };
          this.attachToDocument = function(doc) {
            if (this.$doc)
              this.terminate();
            this.$doc = doc;
            this.call("setValue", [doc.getValue()]);
            doc.on("change", this.changeListener, true);
          };
          this.changeListener = function(delta) {
            if (!this.deltaQueue) {
              this.deltaQueue = [];
              setTimeout(this.$sendDeltaQueue, 0);
            }
            if (delta.action == "insert")
              this.deltaQueue.push(delta.start, delta.lines);
            else
              this.deltaQueue.push(delta.start, delta.end);
          };
          this.$sendDeltaQueue = function() {
            var q = this.deltaQueue;
            if (!q)
              return;
            this.deltaQueue = null;
            if (q.length > 50 && q.length > this.$doc.getLength() >> 1) {
              this.call("setValue", [this.$doc.getValue()]);
            } else
              this.emit("change", { data: q });
          };
        }).call(WorkerClient.prototype);
        var UIWorkerClient = function(topLevelNamespaces, mod, classname) {
          var main = null;
          var emitSync = false;
          var sender = Object.create(EventEmitter);
          var messageBuffer = [];
          var workerClient = new WorkerClient({
            messageBuffer,
            terminate: function() {
            },
            postMessage: function(e10) {
              messageBuffer.push(e10);
              if (!main)
                return;
              if (emitSync)
                setTimeout(processNext);
              else
                processNext();
            }
          });
          workerClient.setEmitSync = function(val) {
            emitSync = val;
          };
          var processNext = function() {
            var msg = messageBuffer.shift();
            if (msg.command)
              main[msg.command].apply(main, msg.args);
            else if (msg.event)
              sender._signal(msg.event, msg.data);
          };
          sender.postMessage = function(msg) {
            workerClient.onMessage({ data: msg });
          };
          sender.callback = function(data, callbackId) {
            this.postMessage({ type: "call", id: callbackId, data });
          };
          sender.emit = function(name2, data) {
            this.postMessage({ type: "event", name: name2, data });
          };
          config2.loadModule(["worker", mod], function(Main) {
            main = new Main[classname](sender);
            while (messageBuffer.length)
              processNext();
          });
          return workerClient;
        };
        exports2.UIWorkerClient = UIWorkerClient;
        exports2.WorkerClient = WorkerClient;
        exports2.createWorker = createWorker;
      });
      ace.define("ace/placeholder", ["require", "exports", "module", "ace/range", "ace/lib/event_emitter", "ace/lib/oop"], function(require3, exports2, module2) {
        "use strict";
        var Range = require3("./range").Range;
        var EventEmitter = require3("./lib/event_emitter").EventEmitter;
        var oop = require3("./lib/oop");
        var PlaceHolder = function(session, length, pos, others, mainClass, othersClass) {
          var _self = this;
          this.length = length;
          this.session = session;
          this.doc = session.getDocument();
          this.mainClass = mainClass;
          this.othersClass = othersClass;
          this.$onUpdate = this.onUpdate.bind(this);
          this.doc.on("change", this.$onUpdate, true);
          this.$others = others;
          this.$onCursorChange = function() {
            setTimeout(function() {
              _self.onCursorChange();
            });
          };
          this.$pos = pos;
          var undoStack = session.getUndoManager().$undoStack || session.getUndoManager().$undostack || { length: -1 };
          this.$undoStackDepth = undoStack.length;
          this.setup();
          session.selection.on("changeCursor", this.$onCursorChange);
        };
        (function() {
          oop.implement(this, EventEmitter);
          this.setup = function() {
            var _self = this;
            var doc = this.doc;
            var session = this.session;
            this.selectionBefore = session.selection.toJSON();
            if (session.selection.inMultiSelectMode)
              session.selection.toSingleRange();
            this.pos = doc.createAnchor(this.$pos.row, this.$pos.column);
            var pos = this.pos;
            pos.$insertRight = true;
            pos.detach();
            pos.markerId = session.addMarker(new Range(pos.row, pos.column, pos.row, pos.column + this.length), this.mainClass, null, false);
            this.others = [];
            this.$others.forEach(function(other) {
              var anchor = doc.createAnchor(other.row, other.column);
              anchor.$insertRight = true;
              anchor.detach();
              _self.others.push(anchor);
            });
            session.setUndoSelect(false);
          };
          this.showOtherMarkers = function() {
            if (this.othersActive)
              return;
            var session = this.session;
            var _self = this;
            this.othersActive = true;
            this.others.forEach(function(anchor) {
              anchor.markerId = session.addMarker(new Range(anchor.row, anchor.column, anchor.row, anchor.column + _self.length), _self.othersClass, null, false);
            });
          };
          this.hideOtherMarkers = function() {
            if (!this.othersActive)
              return;
            this.othersActive = false;
            for (var i6 = 0; i6 < this.others.length; i6++) {
              this.session.removeMarker(this.others[i6].markerId);
            }
          };
          this.onUpdate = function(delta) {
            if (this.$updating)
              return this.updateAnchors(delta);
            var range = delta;
            if (range.start.row !== range.end.row)
              return;
            if (range.start.row !== this.pos.row)
              return;
            this.$updating = true;
            var lengthDiff = delta.action === "insert" ? range.end.column - range.start.column : range.start.column - range.end.column;
            var inMainRange = range.start.column >= this.pos.column && range.start.column <= this.pos.column + this.length + 1;
            var distanceFromStart = range.start.column - this.pos.column;
            this.updateAnchors(delta);
            if (inMainRange)
              this.length += lengthDiff;
            if (inMainRange && !this.session.$fromUndo) {
              if (delta.action === "insert") {
                for (var i6 = this.others.length - 1; i6 >= 0; i6--) {
                  var otherPos = this.others[i6];
                  var newPos = { row: otherPos.row, column: otherPos.column + distanceFromStart };
                  this.doc.insertMergedLines(newPos, delta.lines);
                }
              } else if (delta.action === "remove") {
                for (var i6 = this.others.length - 1; i6 >= 0; i6--) {
                  var otherPos = this.others[i6];
                  var newPos = { row: otherPos.row, column: otherPos.column + distanceFromStart };
                  this.doc.remove(new Range(newPos.row, newPos.column, newPos.row, newPos.column - lengthDiff));
                }
              }
            }
            this.$updating = false;
            this.updateMarkers();
          };
          this.updateAnchors = function(delta) {
            this.pos.onChange(delta);
            for (var i6 = this.others.length; i6--; )
              this.others[i6].onChange(delta);
            this.updateMarkers();
          };
          this.updateMarkers = function() {
            if (this.$updating)
              return;
            var _self = this;
            var session = this.session;
            var updateMarker = function(pos, className) {
              session.removeMarker(pos.markerId);
              pos.markerId = session.addMarker(new Range(pos.row, pos.column, pos.row, pos.column + _self.length), className, null, false);
            };
            updateMarker(this.pos, this.mainClass);
            for (var i6 = this.others.length; i6--; )
              updateMarker(this.others[i6], this.othersClass);
          };
          this.onCursorChange = function(event) {
            if (this.$updating || !this.session)
              return;
            var pos = this.session.selection.getCursor();
            if (pos.row === this.pos.row && pos.column >= this.pos.column && pos.column <= this.pos.column + this.length) {
              this.showOtherMarkers();
              this._emit("cursorEnter", event);
            } else {
              this.hideOtherMarkers();
              this._emit("cursorLeave", event);
            }
          };
          this.detach = function() {
            this.session.removeMarker(this.pos && this.pos.markerId);
            this.hideOtherMarkers();
            this.doc.off("change", this.$onUpdate);
            this.session.selection.off("changeCursor", this.$onCursorChange);
            this.session.setUndoSelect(true);
            this.session = null;
          };
          this.cancel = function() {
            if (this.$undoStackDepth === -1)
              return;
            var undoManager = this.session.getUndoManager();
            var undosRequired = (undoManager.$undoStack || undoManager.$undostack).length - this.$undoStackDepth;
            for (var i6 = 0; i6 < undosRequired; i6++) {
              undoManager.undo(this.session, true);
            }
            if (this.selectionBefore)
              this.session.selection.fromJSON(this.selectionBefore);
          };
        }).call(PlaceHolder.prototype);
        exports2.PlaceHolder = PlaceHolder;
      });
      ace.define("ace/mouse/multi_select_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function(require3, exports2, module2) {
        var event = require3("../lib/event");
        var useragent = require3("../lib/useragent");
        function isSamePoint(p1, p2) {
          return p1.row == p2.row && p1.column == p2.column;
        }
        function onMouseDown(e10) {
          var ev = e10.domEvent;
          var alt = ev.altKey;
          var shift = ev.shiftKey;
          var ctrl = ev.ctrlKey;
          var accel = e10.getAccelKey();
          var button = e10.getButton();
          if (ctrl && useragent.isMac)
            button = ev.button;
          if (e10.editor.inMultiSelectMode && button == 2) {
            e10.editor.textInput.onContextMenu(e10.domEvent);
            return;
          }
          if (!ctrl && !alt && !accel) {
            if (button === 0 && e10.editor.inMultiSelectMode)
              e10.editor.exitMultiSelectMode();
            return;
          }
          if (button !== 0)
            return;
          var editor = e10.editor;
          var selection = editor.selection;
          var isMultiSelect = editor.inMultiSelectMode;
          var pos = e10.getDocumentPosition();
          var cursor = selection.getCursor();
          var inSelection = e10.inSelection() || selection.isEmpty() && isSamePoint(pos, cursor);
          var mouseX = e10.x, mouseY = e10.y;
          var onMouseSelection = function(e11) {
            mouseX = e11.clientX;
            mouseY = e11.clientY;
          };
          var session = editor.session;
          var screenAnchor = editor.renderer.pixelToScreenCoordinates(mouseX, mouseY);
          var screenCursor = screenAnchor;
          var selectionMode;
          if (editor.$mouseHandler.$enableJumpToDef) {
            if (ctrl && alt || accel && alt)
              selectionMode = shift ? "block" : "add";
            else if (alt && editor.$blockSelectEnabled)
              selectionMode = "block";
          } else {
            if (accel && !alt) {
              selectionMode = "add";
              if (!isMultiSelect && shift)
                return;
            } else if (alt && editor.$blockSelectEnabled) {
              selectionMode = "block";
            }
          }
          if (selectionMode && useragent.isMac && ev.ctrlKey) {
            editor.$mouseHandler.cancelContextMenu();
          }
          if (selectionMode == "add") {
            if (!isMultiSelect && inSelection)
              return;
            if (!isMultiSelect) {
              var range = selection.toOrientedRange();
              editor.addSelectionMarker(range);
            }
            var oldRange = selection.rangeList.rangeAtPoint(pos);
            editor.inVirtualSelectionMode = true;
            if (shift) {
              oldRange = null;
              range = selection.ranges[0] || range;
              editor.removeSelectionMarker(range);
            }
            editor.once("mouseup", function() {
              var tmpSel = selection.toOrientedRange();
              if (oldRange && tmpSel.isEmpty() && isSamePoint(oldRange.cursor, tmpSel.cursor))
                selection.substractPoint(tmpSel.cursor);
              else {
                if (shift) {
                  selection.substractPoint(range.cursor);
                } else if (range) {
                  editor.removeSelectionMarker(range);
                  selection.addRange(range);
                }
                selection.addRange(tmpSel);
              }
              editor.inVirtualSelectionMode = false;
            });
          } else if (selectionMode == "block") {
            e10.stop();
            editor.inVirtualSelectionMode = true;
            var initialRange;
            var rectSel = [];
            var blockSelect = function() {
              var newCursor = editor.renderer.pixelToScreenCoordinates(mouseX, mouseY);
              var cursor2 = session.screenToDocumentPosition(newCursor.row, newCursor.column, newCursor.offsetX);
              if (isSamePoint(screenCursor, newCursor) && isSamePoint(cursor2, selection.lead))
                return;
              screenCursor = newCursor;
              editor.selection.moveToPosition(cursor2);
              editor.renderer.scrollCursorIntoView();
              editor.removeSelectionMarkers(rectSel);
              rectSel = selection.rectangularRangeBlock(screenCursor, screenAnchor);
              if (editor.$mouseHandler.$clickSelection && rectSel.length == 1 && rectSel[0].isEmpty())
                rectSel[0] = editor.$mouseHandler.$clickSelection.clone();
              rectSel.forEach(editor.addSelectionMarker, editor);
              editor.updateSelectionMarkers();
            };
            if (isMultiSelect && !accel) {
              selection.toSingleRange();
            } else if (!isMultiSelect && accel) {
              initialRange = selection.toOrientedRange();
              editor.addSelectionMarker(initialRange);
            }
            if (shift)
              screenAnchor = session.documentToScreenPosition(selection.lead);
            else
              selection.moveToPosition(pos);
            screenCursor = { row: -1, column: -1 };
            var onMouseSelectionEnd = function(e11) {
              blockSelect();
              clearInterval(timerId);
              editor.removeSelectionMarkers(rectSel);
              if (!rectSel.length)
                rectSel = [selection.toOrientedRange()];
              if (initialRange) {
                editor.removeSelectionMarker(initialRange);
                selection.toSingleRange(initialRange);
              }
              for (var i6 = 0; i6 < rectSel.length; i6++)
                selection.addRange(rectSel[i6]);
              editor.inVirtualSelectionMode = false;
              editor.$mouseHandler.$clickSelection = null;
            };
            var onSelectionInterval = blockSelect;
            event.capture(editor.container, onMouseSelection, onMouseSelectionEnd);
            var timerId = setInterval(function() {
              onSelectionInterval();
            }, 20);
            return e10.preventDefault();
          }
        }
        exports2.onMouseDown = onMouseDown;
      });
      ace.define("ace/commands/multi_select_commands", ["require", "exports", "module", "ace/keyboard/hash_handler"], function(require3, exports2, module2) {
        exports2.defaultCommands = [{
          name: "addCursorAbove",
          description: "Add cursor above",
          exec: function(editor) {
            editor.selectMoreLines(-1);
          },
          bindKey: { win: "Ctrl-Alt-Up", mac: "Ctrl-Alt-Up" },
          scrollIntoView: "cursor",
          readOnly: true
        }, {
          name: "addCursorBelow",
          description: "Add cursor below",
          exec: function(editor) {
            editor.selectMoreLines(1);
          },
          bindKey: { win: "Ctrl-Alt-Down", mac: "Ctrl-Alt-Down" },
          scrollIntoView: "cursor",
          readOnly: true
        }, {
          name: "addCursorAboveSkipCurrent",
          description: "Add cursor above (skip current)",
          exec: function(editor) {
            editor.selectMoreLines(-1, true);
          },
          bindKey: { win: "Ctrl-Alt-Shift-Up", mac: "Ctrl-Alt-Shift-Up" },
          scrollIntoView: "cursor",
          readOnly: true
        }, {
          name: "addCursorBelowSkipCurrent",
          description: "Add cursor below (skip current)",
          exec: function(editor) {
            editor.selectMoreLines(1, true);
          },
          bindKey: { win: "Ctrl-Alt-Shift-Down", mac: "Ctrl-Alt-Shift-Down" },
          scrollIntoView: "cursor",
          readOnly: true
        }, {
          name: "selectMoreBefore",
          description: "Select more before",
          exec: function(editor) {
            editor.selectMore(-1);
          },
          bindKey: { win: "Ctrl-Alt-Left", mac: "Ctrl-Alt-Left" },
          scrollIntoView: "cursor",
          readOnly: true
        }, {
          name: "selectMoreAfter",
          description: "Select more after",
          exec: function(editor) {
            editor.selectMore(1);
          },
          bindKey: { win: "Ctrl-Alt-Right", mac: "Ctrl-Alt-Right" },
          scrollIntoView: "cursor",
          readOnly: true
        }, {
          name: "selectNextBefore",
          description: "Select next before",
          exec: function(editor) {
            editor.selectMore(-1, true);
          },
          bindKey: { win: "Ctrl-Alt-Shift-Left", mac: "Ctrl-Alt-Shift-Left" },
          scrollIntoView: "cursor",
          readOnly: true
        }, {
          name: "selectNextAfter",
          description: "Select next after",
          exec: function(editor) {
            editor.selectMore(1, true);
          },
          bindKey: { win: "Ctrl-Alt-Shift-Right", mac: "Ctrl-Alt-Shift-Right" },
          scrollIntoView: "cursor",
          readOnly: true
        }, {
          name: "toggleSplitSelectionIntoLines",
          description: "Split into lines",
          exec: function(editor) {
            if (editor.multiSelect.rangeCount > 1)
              editor.multiSelect.joinSelections();
            else
              editor.multiSelect.splitIntoLines();
          },
          bindKey: { win: "Ctrl-Alt-L", mac: "Ctrl-Alt-L" },
          readOnly: true
        }, {
          name: "splitSelectionIntoLines",
          description: "Split into lines",
          exec: function(editor) {
            editor.multiSelect.splitIntoLines();
          },
          readOnly: true
        }, {
          name: "alignCursors",
          description: "Align cursors",
          exec: function(editor) {
            editor.alignCursors();
          },
          bindKey: { win: "Ctrl-Alt-A", mac: "Ctrl-Alt-A" },
          scrollIntoView: "cursor"
        }, {
          name: "findAll",
          description: "Find all",
          exec: function(editor) {
            editor.findAll();
          },
          bindKey: { win: "Ctrl-Alt-K", mac: "Ctrl-Alt-G" },
          scrollIntoView: "cursor",
          readOnly: true
        }];
        exports2.multiSelectCommands = [{
          name: "singleSelection",
          description: "Single selection",
          bindKey: "esc",
          exec: function(editor) {
            editor.exitMultiSelectMode();
          },
          scrollIntoView: "cursor",
          readOnly: true,
          isAvailable: function(editor) {
            return editor && editor.inMultiSelectMode;
          }
        }];
        var HashHandler = require3("../keyboard/hash_handler").HashHandler;
        exports2.keyboardHandler = new HashHandler(exports2.multiSelectCommands);
      });
      ace.define("ace/multi_select", ["require", "exports", "module", "ace/range_list", "ace/range", "ace/selection", "ace/mouse/multi_select_handler", "ace/lib/event", "ace/lib/lang", "ace/commands/multi_select_commands", "ace/search", "ace/edit_session", "ace/editor", "ace/config"], function(require3, exports2, module2) {
        var RangeList = require3("./range_list").RangeList;
        var Range = require3("./range").Range;
        var Selection = require3("./selection").Selection;
        var onMouseDown = require3("./mouse/multi_select_handler").onMouseDown;
        var event = require3("./lib/event");
        var lang = require3("./lib/lang");
        var commands = require3("./commands/multi_select_commands");
        exports2.commands = commands.defaultCommands.concat(commands.multiSelectCommands);
        var Search = require3("./search").Search;
        var search = new Search();
        function find(session, needle, dir) {
          search.$options.wrap = true;
          search.$options.needle = needle;
          search.$options.backwards = dir == -1;
          return search.find(session);
        }
        var EditSession2 = require3("./edit_session").EditSession;
        (function() {
          this.getSelectionMarkers = function() {
            return this.$selectionMarkers;
          };
        }).call(EditSession2.prototype);
        (function() {
          this.ranges = null;
          this.rangeList = null;
          this.addRange = function(range, $blockChangeEvents) {
            if (!range)
              return;
            if (!this.inMultiSelectMode && this.rangeCount === 0) {
              var oldRange = this.toOrientedRange();
              this.rangeList.add(oldRange);
              this.rangeList.add(range);
              if (this.rangeList.ranges.length != 2) {
                this.rangeList.removeAll();
                return $blockChangeEvents || this.fromOrientedRange(range);
              }
              this.rangeList.removeAll();
              this.rangeList.add(oldRange);
              this.$onAddRange(oldRange);
            }
            if (!range.cursor)
              range.cursor = range.end;
            var removed = this.rangeList.add(range);
            this.$onAddRange(range);
            if (removed.length)
              this.$onRemoveRange(removed);
            if (this.rangeCount > 1 && !this.inMultiSelectMode) {
              this._signal("multiSelect");
              this.inMultiSelectMode = true;
              this.session.$undoSelect = false;
              this.rangeList.attach(this.session);
            }
            return $blockChangeEvents || this.fromOrientedRange(range);
          };
          this.toSingleRange = function(range) {
            range = range || this.ranges[0];
            var removed = this.rangeList.removeAll();
            if (removed.length)
              this.$onRemoveRange(removed);
            range && this.fromOrientedRange(range);
          };
          this.substractPoint = function(pos) {
            var removed = this.rangeList.substractPoint(pos);
            if (removed) {
              this.$onRemoveRange(removed);
              return removed[0];
            }
          };
          this.mergeOverlappingRanges = function() {
            var removed = this.rangeList.merge();
            if (removed.length)
              this.$onRemoveRange(removed);
          };
          this.$onAddRange = function(range) {
            this.rangeCount = this.rangeList.ranges.length;
            this.ranges.unshift(range);
            this._signal("addRange", { range });
          };
          this.$onRemoveRange = function(removed) {
            this.rangeCount = this.rangeList.ranges.length;
            if (this.rangeCount == 1 && this.inMultiSelectMode) {
              var lastRange = this.rangeList.ranges.pop();
              removed.push(lastRange);
              this.rangeCount = 0;
            }
            for (var i6 = removed.length; i6--; ) {
              var index = this.ranges.indexOf(removed[i6]);
              this.ranges.splice(index, 1);
            }
            this._signal("removeRange", { ranges: removed });
            if (this.rangeCount === 0 && this.inMultiSelectMode) {
              this.inMultiSelectMode = false;
              this._signal("singleSelect");
              this.session.$undoSelect = true;
              this.rangeList.detach(this.session);
            }
            lastRange = lastRange || this.ranges[0];
            if (lastRange && !lastRange.isEqual(this.getRange()))
              this.fromOrientedRange(lastRange);
          };
          this.$initRangeList = function() {
            if (this.rangeList)
              return;
            this.rangeList = new RangeList();
            this.ranges = [];
            this.rangeCount = 0;
          };
          this.getAllRanges = function() {
            return this.rangeCount ? this.rangeList.ranges.concat() : [this.getRange()];
          };
          this.splitIntoLines = function() {
            var ranges = this.ranges.length ? this.ranges : [this.getRange()];
            var newRanges = [];
            for (var i6 = 0; i6 < ranges.length; i6++) {
              var range = ranges[i6];
              var row = range.start.row;
              var endRow = range.end.row;
              if (row === endRow) {
                newRanges.push(range.clone());
              } else {
                newRanges.push(new Range(row, range.start.column, row, this.session.getLine(row).length));
                while (++row < endRow)
                  newRanges.push(this.getLineRange(row, true));
                newRanges.push(new Range(endRow, 0, endRow, range.end.column));
              }
              if (i6 == 0 && !this.isBackwards())
                newRanges = newRanges.reverse();
            }
            this.toSingleRange();
            for (var i6 = newRanges.length; i6--; )
              this.addRange(newRanges[i6]);
          };
          this.joinSelections = function() {
            var ranges = this.rangeList.ranges;
            var lastRange = ranges[ranges.length - 1];
            var range = Range.fromPoints(ranges[0].start, lastRange.end);
            this.toSingleRange();
            this.setSelectionRange(range, lastRange.cursor == lastRange.start);
          };
          this.toggleBlockSelection = function() {
            if (this.rangeCount > 1) {
              var ranges = this.rangeList.ranges;
              var lastRange = ranges[ranges.length - 1];
              var range = Range.fromPoints(ranges[0].start, lastRange.end);
              this.toSingleRange();
              this.setSelectionRange(range, lastRange.cursor == lastRange.start);
            } else {
              var cursor = this.session.documentToScreenPosition(this.cursor);
              var anchor = this.session.documentToScreenPosition(this.anchor);
              var rectSel = this.rectangularRangeBlock(cursor, anchor);
              rectSel.forEach(this.addRange, this);
            }
          };
          this.rectangularRangeBlock = function(screenCursor, screenAnchor, includeEmptyLines) {
            var rectSel = [];
            var xBackwards = screenCursor.column < screenAnchor.column;
            if (xBackwards) {
              var startColumn = screenCursor.column;
              var endColumn = screenAnchor.column;
              var startOffsetX = screenCursor.offsetX;
              var endOffsetX = screenAnchor.offsetX;
            } else {
              var startColumn = screenAnchor.column;
              var endColumn = screenCursor.column;
              var startOffsetX = screenAnchor.offsetX;
              var endOffsetX = screenCursor.offsetX;
            }
            var yBackwards = screenCursor.row < screenAnchor.row;
            if (yBackwards) {
              var startRow = screenCursor.row;
              var endRow = screenAnchor.row;
            } else {
              var startRow = screenAnchor.row;
              var endRow = screenCursor.row;
            }
            if (startColumn < 0)
              startColumn = 0;
            if (startRow < 0)
              startRow = 0;
            if (startRow == endRow)
              includeEmptyLines = true;
            var docEnd;
            for (var row = startRow; row <= endRow; row++) {
              var range = Range.fromPoints(
                this.session.screenToDocumentPosition(row, startColumn, startOffsetX),
                this.session.screenToDocumentPosition(row, endColumn, endOffsetX)
              );
              if (range.isEmpty()) {
                if (docEnd && isSamePoint(range.end, docEnd))
                  break;
                docEnd = range.end;
              }
              range.cursor = xBackwards ? range.start : range.end;
              rectSel.push(range);
            }
            if (yBackwards)
              rectSel.reverse();
            if (!includeEmptyLines) {
              var end = rectSel.length - 1;
              while (rectSel[end].isEmpty() && end > 0)
                end--;
              if (end > 0) {
                var start = 0;
                while (rectSel[start].isEmpty())
                  start++;
              }
              for (var i6 = end; i6 >= start; i6--) {
                if (rectSel[i6].isEmpty())
                  rectSel.splice(i6, 1);
              }
            }
            return rectSel;
          };
        }).call(Selection.prototype);
        var Editor = require3("./editor").Editor;
        (function() {
          this.updateSelectionMarkers = function() {
            this.renderer.updateCursor();
            this.renderer.updateBackMarkers();
          };
          this.addSelectionMarker = function(orientedRange) {
            if (!orientedRange.cursor)
              orientedRange.cursor = orientedRange.end;
            var style = this.getSelectionStyle();
            orientedRange.marker = this.session.addMarker(orientedRange, "ace_selection", style);
            this.session.$selectionMarkers.push(orientedRange);
            this.session.selectionMarkerCount = this.session.$selectionMarkers.length;
            return orientedRange;
          };
          this.removeSelectionMarker = function(range) {
            if (!range.marker)
              return;
            this.session.removeMarker(range.marker);
            var index = this.session.$selectionMarkers.indexOf(range);
            if (index != -1)
              this.session.$selectionMarkers.splice(index, 1);
            this.session.selectionMarkerCount = this.session.$selectionMarkers.length;
          };
          this.removeSelectionMarkers = function(ranges) {
            var markerList = this.session.$selectionMarkers;
            for (var i6 = ranges.length; i6--; ) {
              var range = ranges[i6];
              if (!range.marker)
                continue;
              this.session.removeMarker(range.marker);
              var index = markerList.indexOf(range);
              if (index != -1)
                markerList.splice(index, 1);
            }
            this.session.selectionMarkerCount = markerList.length;
          };
          this.$onAddRange = function(e10) {
            this.addSelectionMarker(e10.range);
            this.renderer.updateCursor();
            this.renderer.updateBackMarkers();
          };
          this.$onRemoveRange = function(e10) {
            this.removeSelectionMarkers(e10.ranges);
            this.renderer.updateCursor();
            this.renderer.updateBackMarkers();
          };
          this.$onMultiSelect = function(e10) {
            if (this.inMultiSelectMode)
              return;
            this.inMultiSelectMode = true;
            this.setStyle("ace_multiselect");
            this.keyBinding.addKeyboardHandler(commands.keyboardHandler);
            this.commands.setDefaultHandler("exec", this.$onMultiSelectExec);
            this.renderer.updateCursor();
            this.renderer.updateBackMarkers();
          };
          this.$onSingleSelect = function(e10) {
            if (this.session.multiSelect.inVirtualMode)
              return;
            this.inMultiSelectMode = false;
            this.unsetStyle("ace_multiselect");
            this.keyBinding.removeKeyboardHandler(commands.keyboardHandler);
            this.commands.removeDefaultHandler("exec", this.$onMultiSelectExec);
            this.renderer.updateCursor();
            this.renderer.updateBackMarkers();
            this._emit("changeSelection");
          };
          this.$onMultiSelectExec = function(e10) {
            var command = e10.command;
            var editor = e10.editor;
            if (!editor.multiSelect)
              return;
            if (!command.multiSelectAction) {
              var result = command.exec(editor, e10.args || {});
              editor.multiSelect.addRange(editor.multiSelect.toOrientedRange());
              editor.multiSelect.mergeOverlappingRanges();
            } else if (command.multiSelectAction == "forEach") {
              result = editor.forEachSelection(command, e10.args);
            } else if (command.multiSelectAction == "forEachLine") {
              result = editor.forEachSelection(command, e10.args, true);
            } else if (command.multiSelectAction == "single") {
              editor.exitMultiSelectMode();
              result = command.exec(editor, e10.args || {});
            } else {
              result = command.multiSelectAction(editor, e10.args || {});
            }
            return result;
          };
          this.forEachSelection = function(cmd, args, options) {
            if (this.inVirtualSelectionMode)
              return;
            var keepOrder = options && options.keepOrder;
            var $byLines = options == true || options && options.$byLines;
            var session = this.session;
            var selection = this.selection;
            var rangeList = selection.rangeList;
            var ranges = (keepOrder ? selection : rangeList).ranges;
            var result;
            if (!ranges.length)
              return cmd.exec ? cmd.exec(this, args || {}) : cmd(this, args || {});
            var reg = selection._eventRegistry;
            selection._eventRegistry = {};
            var tmpSel = new Selection(session);
            this.inVirtualSelectionMode = true;
            for (var i6 = ranges.length; i6--; ) {
              if ($byLines) {
                while (i6 > 0 && ranges[i6].start.row == ranges[i6 - 1].end.row)
                  i6--;
              }
              tmpSel.fromOrientedRange(ranges[i6]);
              tmpSel.index = i6;
              this.selection = session.selection = tmpSel;
              var cmdResult = cmd.exec ? cmd.exec(this, args || {}) : cmd(this, args || {});
              if (!result && cmdResult !== void 0)
                result = cmdResult;
              tmpSel.toOrientedRange(ranges[i6]);
            }
            tmpSel.detach();
            this.selection = session.selection = selection;
            this.inVirtualSelectionMode = false;
            selection._eventRegistry = reg;
            selection.mergeOverlappingRanges();
            if (selection.ranges[0])
              selection.fromOrientedRange(selection.ranges[0]);
            var anim = this.renderer.$scrollAnimation;
            this.onCursorChange();
            this.onSelectionChange();
            if (anim && anim.from == anim.to)
              this.renderer.animateScrolling(anim.from);
            return result;
          };
          this.exitMultiSelectMode = function() {
            if (!this.inMultiSelectMode || this.inVirtualSelectionMode)
              return;
            this.multiSelect.toSingleRange();
          };
          this.getSelectedText = function() {
            var text = "";
            if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
              var ranges = this.multiSelect.rangeList.ranges;
              var buf = [];
              for (var i6 = 0; i6 < ranges.length; i6++) {
                buf.push(this.session.getTextRange(ranges[i6]));
              }
              var nl = this.session.getDocument().getNewLineCharacter();
              text = buf.join(nl);
              if (text.length == (buf.length - 1) * nl.length)
                text = "";
            } else if (!this.selection.isEmpty()) {
              text = this.session.getTextRange(this.getSelectionRange());
            }
            return text;
          };
          this.$checkMultiselectChange = function(e10, anchor) {
            if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
              var range = this.multiSelect.ranges[0];
              if (this.multiSelect.isEmpty() && anchor == this.multiSelect.anchor)
                return;
              var pos = anchor == this.multiSelect.anchor ? range.cursor == range.start ? range.end : range.start : range.cursor;
              if (pos.row != anchor.row || this.session.$clipPositionToDocument(pos.row, pos.column).column != anchor.column)
                this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange());
              else
                this.multiSelect.mergeOverlappingRanges();
            }
          };
          this.findAll = function(needle, options, additive) {
            options = options || {};
            options.needle = needle || options.needle;
            if (options.needle == void 0) {
              var range = this.selection.isEmpty() ? this.selection.getWordRange() : this.selection.getRange();
              options.needle = this.session.getTextRange(range);
            }
            this.$search.set(options);
            var ranges = this.$search.findAll(this.session);
            if (!ranges.length)
              return 0;
            var selection = this.multiSelect;
            if (!additive)
              selection.toSingleRange(ranges[0]);
            for (var i6 = ranges.length; i6--; )
              selection.addRange(ranges[i6], true);
            if (range && selection.rangeList.rangeAtPoint(range.start))
              selection.addRange(range, true);
            return ranges.length;
          };
          this.selectMoreLines = function(dir, skip) {
            var range = this.selection.toOrientedRange();
            var isBackwards = range.cursor == range.end;
            var screenLead = this.session.documentToScreenPosition(range.cursor);
            if (this.selection.$desiredColumn)
              screenLead.column = this.selection.$desiredColumn;
            var lead = this.session.screenToDocumentPosition(screenLead.row + dir, screenLead.column);
            if (!range.isEmpty()) {
              var screenAnchor = this.session.documentToScreenPosition(isBackwards ? range.end : range.start);
              var anchor = this.session.screenToDocumentPosition(screenAnchor.row + dir, screenAnchor.column);
            } else {
              var anchor = lead;
            }
            if (isBackwards) {
              var newRange = Range.fromPoints(lead, anchor);
              newRange.cursor = newRange.start;
            } else {
              var newRange = Range.fromPoints(anchor, lead);
              newRange.cursor = newRange.end;
            }
            newRange.desiredColumn = screenLead.column;
            if (!this.selection.inMultiSelectMode) {
              this.selection.addRange(range);
            } else {
              if (skip)
                var toRemove = range.cursor;
            }
            this.selection.addRange(newRange);
            if (toRemove)
              this.selection.substractPoint(toRemove);
          };
          this.transposeSelections = function(dir) {
            var session = this.session;
            var sel = session.multiSelect;
            var all = sel.ranges;
            for (var i6 = all.length; i6--; ) {
              var range = all[i6];
              if (range.isEmpty()) {
                var tmp = session.getWordRange(range.start.row, range.start.column);
                range.start.row = tmp.start.row;
                range.start.column = tmp.start.column;
                range.end.row = tmp.end.row;
                range.end.column = tmp.end.column;
              }
            }
            sel.mergeOverlappingRanges();
            var words = [];
            for (var i6 = all.length; i6--; ) {
              var range = all[i6];
              words.unshift(session.getTextRange(range));
            }
            if (dir < 0)
              words.unshift(words.pop());
            else
              words.push(words.shift());
            for (var i6 = all.length; i6--; ) {
              var range = all[i6];
              var tmp = range.clone();
              session.replace(range, words[i6]);
              range.start.row = tmp.start.row;
              range.start.column = tmp.start.column;
            }
            sel.fromOrientedRange(sel.ranges[0]);
          };
          this.selectMore = function(dir, skip, stopAtFirst) {
            var session = this.session;
            var sel = session.multiSelect;
            var range = sel.toOrientedRange();
            if (range.isEmpty()) {
              range = session.getWordRange(range.start.row, range.start.column);
              range.cursor = dir == -1 ? range.start : range.end;
              this.multiSelect.addRange(range);
              if (stopAtFirst)
                return;
            }
            var needle = session.getTextRange(range);
            var newRange = find(session, needle, dir);
            if (newRange) {
              newRange.cursor = dir == -1 ? newRange.start : newRange.end;
              this.session.unfold(newRange);
              this.multiSelect.addRange(newRange);
              this.renderer.scrollCursorIntoView(null, 0.5);
            }
            if (skip)
              this.multiSelect.substractPoint(range.cursor);
          };
          this.alignCursors = function() {
            var session = this.session;
            var sel = session.multiSelect;
            var ranges = sel.ranges;
            var row = -1;
            var sameRowRanges = ranges.filter(function(r5) {
              if (r5.cursor.row == row)
                return true;
              row = r5.cursor.row;
            });
            if (!ranges.length || sameRowRanges.length == ranges.length - 1) {
              var range = this.selection.getRange();
              var fr = range.start.row, lr = range.end.row;
              var guessRange = fr == lr;
              if (guessRange) {
                var max = this.session.getLength();
                var line;
                do {
                  line = this.session.getLine(lr);
                } while (/[=:]/.test(line) && ++lr < max);
                do {
                  line = this.session.getLine(fr);
                } while (/[=:]/.test(line) && --fr > 0);
                if (fr < 0)
                  fr = 0;
                if (lr >= max)
                  lr = max - 1;
              }
              var lines = this.session.removeFullLines(fr, lr);
              lines = this.$reAlignText(lines, guessRange);
              this.session.insert({ row: fr, column: 0 }, lines.join("\n") + "\n");
              if (!guessRange) {
                range.start.column = 0;
                range.end.column = lines[lines.length - 1].length;
              }
              this.selection.setRange(range);
            } else {
              sameRowRanges.forEach(function(r5) {
                sel.substractPoint(r5.cursor);
              });
              var maxCol = 0;
              var minSpace = Infinity;
              var spaceOffsets = ranges.map(function(r5) {
                var p2 = r5.cursor;
                var line2 = session.getLine(p2.row);
                var spaceOffset = line2.substr(p2.column).search(/\S/g);
                if (spaceOffset == -1)
                  spaceOffset = 0;
                if (p2.column > maxCol)
                  maxCol = p2.column;
                if (spaceOffset < minSpace)
                  minSpace = spaceOffset;
                return spaceOffset;
              });
              ranges.forEach(function(r5, i6) {
                var p2 = r5.cursor;
                var l7 = maxCol - p2.column;
                var d3 = spaceOffsets[i6] - minSpace;
                if (l7 > d3)
                  session.insert(p2, lang.stringRepeat(" ", l7 - d3));
                else
                  session.remove(new Range(p2.row, p2.column, p2.row, p2.column - l7 + d3));
                r5.start.column = r5.end.column = maxCol;
                r5.start.row = r5.end.row = p2.row;
                r5.cursor = r5.end;
              });
              sel.fromOrientedRange(ranges[0]);
              this.renderer.updateCursor();
              this.renderer.updateBackMarkers();
            }
          };
          this.$reAlignText = function(lines, forceLeft) {
            var isLeftAligned = true, isRightAligned = true;
            var startW, textW, endW;
            return lines.map(function(line) {
              var m2 = line.match(/(\s*)(.*?)(\s*)([=:].*)/);
              if (!m2)
                return [line];
              if (startW == null) {
                startW = m2[1].length;
                textW = m2[2].length;
                endW = m2[3].length;
                return m2;
              }
              if (startW + textW + endW != m2[1].length + m2[2].length + m2[3].length)
                isRightAligned = false;
              if (startW != m2[1].length)
                isLeftAligned = false;
              if (startW > m2[1].length)
                startW = m2[1].length;
              if (textW < m2[2].length)
                textW = m2[2].length;
              if (endW > m2[3].length)
                endW = m2[3].length;
              return m2;
            }).map(forceLeft ? alignLeft : isLeftAligned ? isRightAligned ? alignRight : alignLeft : unAlign);
            function spaces(n9) {
              return lang.stringRepeat(" ", n9);
            }
            function alignLeft(m2) {
              return !m2[2] ? m2[0] : spaces(startW) + m2[2] + spaces(textW - m2[2].length + endW) + m2[4].replace(/^([=:])\s+/, "$1 ");
            }
            function alignRight(m2) {
              return !m2[2] ? m2[0] : spaces(startW + textW - m2[2].length) + m2[2] + spaces(endW) + m2[4].replace(/^([=:])\s+/, "$1 ");
            }
            function unAlign(m2) {
              return !m2[2] ? m2[0] : spaces(startW) + m2[2] + spaces(endW) + m2[4].replace(/^([=:])\s+/, "$1 ");
            }
          };
        }).call(Editor.prototype);
        function isSamePoint(p1, p2) {
          return p1.row == p2.row && p1.column == p2.column;
        }
        exports2.onSessionChange = function(e10) {
          var session = e10.session;
          if (session && !session.multiSelect) {
            session.$selectionMarkers = [];
            session.selection.$initRangeList();
            session.multiSelect = session.selection;
          }
          this.multiSelect = session && session.multiSelect;
          var oldSession = e10.oldSession;
          if (oldSession) {
            oldSession.multiSelect.off("addRange", this.$onAddRange);
            oldSession.multiSelect.off("removeRange", this.$onRemoveRange);
            oldSession.multiSelect.off("multiSelect", this.$onMultiSelect);
            oldSession.multiSelect.off("singleSelect", this.$onSingleSelect);
            oldSession.multiSelect.lead.off("change", this.$checkMultiselectChange);
            oldSession.multiSelect.anchor.off("change", this.$checkMultiselectChange);
          }
          if (session) {
            session.multiSelect.on("addRange", this.$onAddRange);
            session.multiSelect.on("removeRange", this.$onRemoveRange);
            session.multiSelect.on("multiSelect", this.$onMultiSelect);
            session.multiSelect.on("singleSelect", this.$onSingleSelect);
            session.multiSelect.lead.on("change", this.$checkMultiselectChange);
            session.multiSelect.anchor.on("change", this.$checkMultiselectChange);
          }
          if (session && this.inMultiSelectMode != session.selection.inMultiSelectMode) {
            if (session.selection.inMultiSelectMode)
              this.$onMultiSelect();
            else
              this.$onSingleSelect();
          }
        };
        function MultiSelect(editor) {
          if (editor.$multiselectOnSessionChange)
            return;
          editor.$onAddRange = editor.$onAddRange.bind(editor);
          editor.$onRemoveRange = editor.$onRemoveRange.bind(editor);
          editor.$onMultiSelect = editor.$onMultiSelect.bind(editor);
          editor.$onSingleSelect = editor.$onSingleSelect.bind(editor);
          editor.$multiselectOnSessionChange = exports2.onSessionChange.bind(editor);
          editor.$checkMultiselectChange = editor.$checkMultiselectChange.bind(editor);
          editor.$multiselectOnSessionChange(editor);
          editor.on("changeSession", editor.$multiselectOnSessionChange);
          editor.on("mousedown", onMouseDown);
          editor.commands.addCommands(commands.defaultCommands);
          addAltCursorListeners(editor);
        }
        function addAltCursorListeners(editor) {
          if (!editor.textInput)
            return;
          var el = editor.textInput.getElement();
          var altCursor = false;
          event.addListener(el, "keydown", function(e10) {
            var altDown = e10.keyCode == 18 && !(e10.ctrlKey || e10.shiftKey || e10.metaKey);
            if (editor.$blockSelectEnabled && altDown) {
              if (!altCursor) {
                editor.renderer.setMouseCursor("crosshair");
                altCursor = true;
              }
            } else if (altCursor) {
              reset();
            }
          }, editor);
          event.addListener(el, "keyup", reset, editor);
          event.addListener(el, "blur", reset, editor);
          function reset(e10) {
            if (altCursor) {
              editor.renderer.setMouseCursor("");
              altCursor = false;
            }
          }
        }
        exports2.MultiSelect = MultiSelect;
        require3("./config").defineOptions(Editor.prototype, "editor", {
          enableMultiselect: {
            set: function(val) {
              MultiSelect(this);
              if (val) {
                this.on("changeSession", this.$multiselectOnSessionChange);
                this.on("mousedown", onMouseDown);
              } else {
                this.off("changeSession", this.$multiselectOnSessionChange);
                this.off("mousedown", onMouseDown);
              }
            },
            value: true
          },
          enableBlockSelect: {
            set: function(val) {
              this.$blockSelectEnabled = val;
            },
            value: true
          }
        });
      });
      ace.define("ace/mode/folding/fold_mode", ["require", "exports", "module", "ace/range"], function(require3, exports2, module2) {
        "use strict";
        var Range = require3("../../range").Range;
        var FoldMode = exports2.FoldMode = function() {
        };
        (function() {
          this.foldingStartMarker = null;
          this.foldingStopMarker = null;
          this.getFoldWidget = function(session, foldStyle, row) {
            var line = session.getLine(row);
            if (this.foldingStartMarker.test(line))
              return "start";
            if (foldStyle == "markbeginend" && this.foldingStopMarker && this.foldingStopMarker.test(line))
              return "end";
            return "";
          };
          this.getFoldWidgetRange = function(session, foldStyle, row) {
            return null;
          };
          this.indentationBlock = function(session, row, column) {
            var re = /\S/;
            var line = session.getLine(row);
            var startLevel = line.search(re);
            if (startLevel == -1)
              return;
            var startColumn = column || line.length;
            var maxRow = session.getLength();
            var startRow = row;
            var endRow = row;
            while (++row < maxRow) {
              var level = session.getLine(row).search(re);
              if (level == -1)
                continue;
              if (level <= startLevel) {
                var token = session.getTokenAt(row, 0);
                if (!token || token.type !== "string")
                  break;
              }
              endRow = row;
            }
            if (endRow > startRow) {
              var endColumn = session.getLine(endRow).length;
              return new Range(startRow, startColumn, endRow, endColumn);
            }
          };
          this.openingBracketBlock = function(session, bracket, row, column, typeRe) {
            var start = { row, column: column + 1 };
            var end = session.$findClosingBracket(bracket, start, typeRe);
            if (!end)
              return;
            var fw = session.foldWidgets[end.row];
            if (fw == null)
              fw = session.getFoldWidget(end.row);
            if (fw == "start" && end.row > start.row) {
              end.row--;
              end.column = session.getLine(end.row).length;
            }
            return Range.fromPoints(start, end);
          };
          this.closingBracketBlock = function(session, bracket, row, column, typeRe) {
            var end = { row, column };
            var start = session.$findOpeningBracket(bracket, end);
            if (!start)
              return;
            start.column++;
            end.column--;
            return Range.fromPoints(start, end);
          };
        }).call(FoldMode.prototype);
      });
      ace.define("ace/line_widgets", ["require", "exports", "module", "ace/lib/dom"], function(require3, exports2, module2) {
        "use strict";
        var dom = require3("./lib/dom");
        function LineWidgets(session) {
          this.session = session;
          this.session.widgetManager = this;
          this.session.getRowLength = this.getRowLength;
          this.session.$getWidgetScreenLength = this.$getWidgetScreenLength;
          this.updateOnChange = this.updateOnChange.bind(this);
          this.renderWidgets = this.renderWidgets.bind(this);
          this.measureWidgets = this.measureWidgets.bind(this);
          this.session._changedWidgets = [];
          this.$onChangeEditor = this.$onChangeEditor.bind(this);
          this.session.on("change", this.updateOnChange);
          this.session.on("changeFold", this.updateOnFold);
          this.session.on("changeEditor", this.$onChangeEditor);
        }
        (function() {
          this.getRowLength = function(row) {
            var h5;
            if (this.lineWidgets)
              h5 = this.lineWidgets[row] && this.lineWidgets[row].rowCount || 0;
            else
              h5 = 0;
            if (!this.$useWrapMode || !this.$wrapData[row]) {
              return 1 + h5;
            } else {
              return this.$wrapData[row].length + 1 + h5;
            }
          };
          this.$getWidgetScreenLength = function() {
            var screenRows = 0;
            this.lineWidgets.forEach(function(w2) {
              if (w2 && w2.rowCount && !w2.hidden)
                screenRows += w2.rowCount;
            });
            return screenRows;
          };
          this.$onChangeEditor = function(e10) {
            this.attach(e10.editor);
          };
          this.attach = function(editor) {
            if (editor && editor.widgetManager && editor.widgetManager != this)
              editor.widgetManager.detach();
            if (this.editor == editor)
              return;
            this.detach();
            this.editor = editor;
            if (editor) {
              editor.widgetManager = this;
              editor.renderer.on("beforeRender", this.measureWidgets);
              editor.renderer.on("afterRender", this.renderWidgets);
            }
          };
          this.detach = function(e10) {
            var editor = this.editor;
            if (!editor)
              return;
            this.editor = null;
            editor.widgetManager = null;
            editor.renderer.off("beforeRender", this.measureWidgets);
            editor.renderer.off("afterRender", this.renderWidgets);
            var lineWidgets = this.session.lineWidgets;
            lineWidgets && lineWidgets.forEach(function(w2) {
              if (w2 && w2.el && w2.el.parentNode) {
                w2._inDocument = false;
                w2.el.parentNode.removeChild(w2.el);
              }
            });
          };
          this.updateOnFold = function(e10, session) {
            var lineWidgets = session.lineWidgets;
            if (!lineWidgets || !e10.action)
              return;
            var fold = e10.data;
            var start = fold.start.row;
            var end = fold.end.row;
            var hide = e10.action == "add";
            for (var i6 = start + 1; i6 < end; i6++) {
              if (lineWidgets[i6])
                lineWidgets[i6].hidden = hide;
            }
            if (lineWidgets[end]) {
              if (hide) {
                if (!lineWidgets[start])
                  lineWidgets[start] = lineWidgets[end];
                else
                  lineWidgets[end].hidden = hide;
              } else {
                if (lineWidgets[start] == lineWidgets[end])
                  lineWidgets[start] = void 0;
                lineWidgets[end].hidden = hide;
              }
            }
          };
          this.updateOnChange = function(delta) {
            var lineWidgets = this.session.lineWidgets;
            if (!lineWidgets)
              return;
            var startRow = delta.start.row;
            var len = delta.end.row - startRow;
            if (len === 0) {
            } else if (delta.action == "remove") {
              var removed = lineWidgets.splice(startRow + 1, len);
              if (!lineWidgets[startRow] && removed[removed.length - 1]) {
                lineWidgets[startRow] = removed.pop();
              }
              removed.forEach(function(w2) {
                w2 && this.removeLineWidget(w2);
              }, this);
              this.$updateRows();
            } else {
              var args = new Array(len);
              if (lineWidgets[startRow] && lineWidgets[startRow].column != null) {
                if (delta.start.column > lineWidgets[startRow].column)
                  startRow++;
              }
              args.unshift(startRow, 0);
              lineWidgets.splice.apply(lineWidgets, args);
              this.$updateRows();
            }
          };
          this.$updateRows = function() {
            var lineWidgets = this.session.lineWidgets;
            if (!lineWidgets)
              return;
            var noWidgets = true;
            lineWidgets.forEach(function(w2, i6) {
              if (w2) {
                noWidgets = false;
                w2.row = i6;
                while (w2.$oldWidget) {
                  w2.$oldWidget.row = i6;
                  w2 = w2.$oldWidget;
                }
              }
            });
            if (noWidgets)
              this.session.lineWidgets = null;
          };
          this.$registerLineWidget = function(w2) {
            if (!this.session.lineWidgets)
              this.session.lineWidgets = new Array(this.session.getLength());
            var old = this.session.lineWidgets[w2.row];
            if (old) {
              w2.$oldWidget = old;
              if (old.el && old.el.parentNode) {
                old.el.parentNode.removeChild(old.el);
                old._inDocument = false;
              }
            }
            this.session.lineWidgets[w2.row] = w2;
            return w2;
          };
          this.addLineWidget = function(w2) {
            this.$registerLineWidget(w2);
            w2.session = this.session;
            if (!this.editor)
              return w2;
            var renderer = this.editor.renderer;
            if (w2.html && !w2.el) {
              w2.el = dom.createElement("div");
              w2.el.innerHTML = w2.html;
            }
            if (w2.el) {
              dom.addCssClass(w2.el, "ace_lineWidgetContainer");
              w2.el.style.position = "absolute";
              w2.el.style.zIndex = 5;
              renderer.container.appendChild(w2.el);
              w2._inDocument = true;
              if (!w2.coverGutter) {
                w2.el.style.zIndex = 3;
              }
              if (w2.pixelHeight == null) {
                w2.pixelHeight = w2.el.offsetHeight;
              }
            }
            if (w2.rowCount == null) {
              w2.rowCount = w2.pixelHeight / renderer.layerConfig.lineHeight;
            }
            var fold = this.session.getFoldAt(w2.row, 0);
            w2.$fold = fold;
            if (fold) {
              var lineWidgets = this.session.lineWidgets;
              if (w2.row == fold.end.row && !lineWidgets[fold.start.row])
                lineWidgets[fold.start.row] = w2;
              else
                w2.hidden = true;
            }
            this.session._emit("changeFold", { data: { start: { row: w2.row } } });
            this.$updateRows();
            this.renderWidgets(null, renderer);
            this.onWidgetChanged(w2);
            return w2;
          };
          this.removeLineWidget = function(w2) {
            w2._inDocument = false;
            w2.session = null;
            if (w2.el && w2.el.parentNode)
              w2.el.parentNode.removeChild(w2.el);
            if (w2.editor && w2.editor.destroy)
              try {
                w2.editor.destroy();
              } catch (e10) {
              }
            if (this.session.lineWidgets) {
              var w1 = this.session.lineWidgets[w2.row];
              if (w1 == w2) {
                this.session.lineWidgets[w2.row] = w2.$oldWidget;
                if (w2.$oldWidget)
                  this.onWidgetChanged(w2.$oldWidget);
              } else {
                while (w1) {
                  if (w1.$oldWidget == w2) {
                    w1.$oldWidget = w2.$oldWidget;
                    break;
                  }
                  w1 = w1.$oldWidget;
                }
              }
            }
            this.session._emit("changeFold", { data: { start: { row: w2.row } } });
            this.$updateRows();
          };
          this.getWidgetsAtRow = function(row) {
            var lineWidgets = this.session.lineWidgets;
            var w2 = lineWidgets && lineWidgets[row];
            var list = [];
            while (w2) {
              list.push(w2);
              w2 = w2.$oldWidget;
            }
            return list;
          };
          this.onWidgetChanged = function(w2) {
            this.session._changedWidgets.push(w2);
            this.editor && this.editor.renderer.updateFull();
          };
          this.measureWidgets = function(e10, renderer) {
            var changedWidgets = this.session._changedWidgets;
            var config2 = renderer.layerConfig;
            if (!changedWidgets || !changedWidgets.length)
              return;
            var min = Infinity;
            for (var i6 = 0; i6 < changedWidgets.length; i6++) {
              var w2 = changedWidgets[i6];
              if (!w2 || !w2.el)
                continue;
              if (w2.session != this.session)
                continue;
              if (!w2._inDocument) {
                if (this.session.lineWidgets[w2.row] != w2)
                  continue;
                w2._inDocument = true;
                renderer.container.appendChild(w2.el);
              }
              w2.h = w2.el.offsetHeight;
              if (!w2.fixedWidth) {
                w2.w = w2.el.offsetWidth;
                w2.screenWidth = Math.ceil(w2.w / config2.characterWidth);
              }
              var rowCount = w2.h / config2.lineHeight;
              if (w2.coverLine) {
                rowCount -= this.session.getRowLineCount(w2.row);
                if (rowCount < 0)
                  rowCount = 0;
              }
              if (w2.rowCount != rowCount) {
                w2.rowCount = rowCount;
                if (w2.row < min)
                  min = w2.row;
              }
            }
            if (min != Infinity) {
              this.session._emit("changeFold", { data: { start: { row: min } } });
              this.session.lineWidgetWidth = null;
            }
            this.session._changedWidgets = [];
          };
          this.renderWidgets = function(e10, renderer) {
            var config2 = renderer.layerConfig;
            var lineWidgets = this.session.lineWidgets;
            if (!lineWidgets)
              return;
            var first = Math.min(this.firstRow, config2.firstRow);
            var last = Math.max(this.lastRow, config2.lastRow, lineWidgets.length);
            while (first > 0 && !lineWidgets[first])
              first--;
            this.firstRow = config2.firstRow;
            this.lastRow = config2.lastRow;
            renderer.$cursorLayer.config = config2;
            for (var i6 = first; i6 <= last; i6++) {
              var w2 = lineWidgets[i6];
              if (!w2 || !w2.el)
                continue;
              if (w2.hidden) {
                w2.el.style.top = -100 - (w2.pixelHeight || 0) + "px";
                continue;
              }
              if (!w2._inDocument) {
                w2._inDocument = true;
                renderer.container.appendChild(w2.el);
              }
              var top = renderer.$cursorLayer.getPixelPosition({ row: i6, column: 0 }, true).top;
              if (!w2.coverLine)
                top += config2.lineHeight * this.session.getRowLineCount(w2.row);
              w2.el.style.top = top - config2.offset + "px";
              var left = w2.coverGutter ? 0 : renderer.gutterWidth;
              if (!w2.fixedWidth)
                left -= renderer.scrollLeft;
              w2.el.style.left = left + "px";
              if (w2.fullWidth && w2.screenWidth) {
                w2.el.style.minWidth = config2.width + 2 * config2.padding + "px";
              }
              if (w2.fixedWidth) {
                w2.el.style.right = renderer.scrollBar.getWidth() + "px";
              } else {
                w2.el.style.right = "";
              }
            }
          };
        }).call(LineWidgets.prototype);
        exports2.LineWidgets = LineWidgets;
      });
      ace.define("ace/ext/error_marker", ["require", "exports", "module", "ace/line_widgets", "ace/lib/dom", "ace/range"], function(require3, exports2, module2) {
        "use strict";
        var LineWidgets = require3("../line_widgets").LineWidgets;
        var dom = require3("../lib/dom");
        var Range = require3("../range").Range;
        function binarySearch(array, needle, comparator) {
          var first = 0;
          var last = array.length - 1;
          while (first <= last) {
            var mid = first + last >> 1;
            var c2 = comparator(needle, array[mid]);
            if (c2 > 0)
              first = mid + 1;
            else if (c2 < 0)
              last = mid - 1;
            else
              return mid;
          }
          return -(first + 1);
        }
        function findAnnotations(session, row, dir) {
          var annotations = session.getAnnotations().sort(Range.comparePoints);
          if (!annotations.length)
            return;
          var i6 = binarySearch(annotations, { row, column: -1 }, Range.comparePoints);
          if (i6 < 0)
            i6 = -i6 - 1;
          if (i6 >= annotations.length)
            i6 = dir > 0 ? 0 : annotations.length - 1;
          else if (i6 === 0 && dir < 0)
            i6 = annotations.length - 1;
          var annotation = annotations[i6];
          if (!annotation || !dir)
            return;
          if (annotation.row === row) {
            do {
              annotation = annotations[i6 += dir];
            } while (annotation && annotation.row === row);
            if (!annotation)
              return annotations.slice();
          }
          var matched = [];
          row = annotation.row;
          do {
            matched[dir < 0 ? "unshift" : "push"](annotation);
            annotation = annotations[i6 += dir];
          } while (annotation && annotation.row == row);
          return matched.length && matched;
        }
        exports2.showErrorMarker = function(editor, dir) {
          var session = editor.session;
          if (!session.widgetManager) {
            session.widgetManager = new LineWidgets(session);
            session.widgetManager.attach(editor);
          }
          var pos = editor.getCursorPosition();
          var row = pos.row;
          var oldWidget = session.widgetManager.getWidgetsAtRow(row).filter(function(w3) {
            return w3.type == "errorMarker";
          })[0];
          if (oldWidget) {
            oldWidget.destroy();
          } else {
            row -= dir;
          }
          var annotations = findAnnotations(session, row, dir);
          var gutterAnno;
          if (annotations) {
            var annotation = annotations[0];
            pos.column = (annotation.pos && typeof annotation.column != "number" ? annotation.pos.sc : annotation.column) || 0;
            pos.row = annotation.row;
            gutterAnno = editor.renderer.$gutterLayer.$annotations[pos.row];
          } else if (oldWidget) {
            return;
          } else {
            gutterAnno = {
              text: ["Looks good!"],
              className: "ace_ok"
            };
          }
          editor.session.unfold(pos.row);
          editor.selection.moveToPosition(pos);
          var w2 = {
            row: pos.row,
            fixedWidth: true,
            coverGutter: true,
            el: dom.createElement("div"),
            type: "errorMarker"
          };
          var el = w2.el.appendChild(dom.createElement("div"));
          var arrow = w2.el.appendChild(dom.createElement("div"));
          arrow.className = "error_widget_arrow " + gutterAnno.className;
          var left = editor.renderer.$cursorLayer.getPixelPosition(pos).left;
          arrow.style.left = left + editor.renderer.gutterWidth - 5 + "px";
          w2.el.className = "error_widget_wrapper";
          el.className = "error_widget " + gutterAnno.className;
          el.innerHTML = gutterAnno.text.join("<br>");
          el.appendChild(dom.createElement("div"));
          var kb = function(_2, hashId, keyString) {
            if (hashId === 0 && (keyString === "esc" || keyString === "return")) {
              w2.destroy();
              return { command: "null" };
            }
          };
          w2.destroy = function() {
            if (editor.$mouseHandler.isMousePressed)
              return;
            editor.keyBinding.removeKeyboardHandler(kb);
            session.widgetManager.removeLineWidget(w2);
            editor.off("changeSelection", w2.destroy);
            editor.off("changeSession", w2.destroy);
            editor.off("mouseup", w2.destroy);
            editor.off("change", w2.destroy);
          };
          editor.keyBinding.addKeyboardHandler(kb);
          editor.on("changeSelection", w2.destroy);
          editor.on("changeSession", w2.destroy);
          editor.on("mouseup", w2.destroy);
          editor.on("change", w2.destroy);
          editor.session.widgetManager.addLineWidget(w2);
          w2.el.onmousedown = editor.focus.bind(editor);
          editor.renderer.scrollCursorIntoView(null, 0.5, { bottom: w2.el.offsetHeight });
        };
        dom.importCssString("    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }", "error_marker.css", false);
      });
      ace.define("ace/ace", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/range", "ace/editor", "ace/edit_session", "ace/undomanager", "ace/virtual_renderer", "ace/worker/worker_client", "ace/keyboard/hash_handler", "ace/placeholder", "ace/multi_select", "ace/mode/folding/fold_mode", "ace/theme/textmate", "ace/ext/error_marker", "ace/config", "ace/loader_build"], function(require3, exports2, module2) {
        "use strict";
        require3("./loader_build")(exports2);
        var dom = require3("./lib/dom");
        var event = require3("./lib/event");
        var Range = require3("./range").Range;
        var Editor = require3("./editor").Editor;
        var EditSession2 = require3("./edit_session").EditSession;
        var UndoManager2 = require3("./undomanager").UndoManager;
        var Renderer = require3("./virtual_renderer").VirtualRenderer;
        require3("./worker/worker_client");
        require3("./keyboard/hash_handler");
        require3("./placeholder");
        require3("./multi_select");
        require3("./mode/folding/fold_mode");
        require3("./theme/textmate");
        require3("./ext/error_marker");
        exports2.config = require3("./config");
        exports2.edit = function(el, options) {
          if (typeof el == "string") {
            var _id = el;
            el = document.getElementById(_id);
            if (!el)
              throw new Error("ace.edit can't find div #" + _id);
          }
          if (el && el.env && el.env.editor instanceof Editor)
            return el.env.editor;
          var value = "";
          if (el && /input|textarea/i.test(el.tagName)) {
            var oldNode = el;
            value = oldNode.value;
            el = dom.createElement("pre");
            oldNode.parentNode.replaceChild(el, oldNode);
          } else if (el) {
            value = el.textContent;
            el.innerHTML = "";
          }
          var doc = exports2.createEditSession(value);
          var editor = new Editor(new Renderer(el), doc, options);
          var env = {
            document: doc,
            editor,
            onResize: editor.resize.bind(editor, null)
          };
          if (oldNode)
            env.textarea = oldNode;
          event.addListener(window, "resize", env.onResize);
          editor.on("destroy", function() {
            event.removeListener(window, "resize", env.onResize);
            env.editor.container.env = null;
          });
          editor.container.env = editor.env = env;
          return editor;
        };
        exports2.createEditSession = function(text, mode) {
          var doc = new EditSession2(text, mode);
          doc.setUndoManager(new UndoManager2());
          return doc;
        };
        exports2.Range = Range;
        exports2.Editor = Editor;
        exports2.EditSession = EditSession2;
        exports2.UndoManager = UndoManager2;
        exports2.VirtualRenderer = Renderer;
        exports2.version = exports2.config.version;
      });
      (function() {
        ace.require(["ace/ace"], function(a3) {
          if (a3) {
            a3.config.init(true);
            a3.define = ace.define;
          }
          if (!window.ace)
            window.ace = a3;
          for (var key in a3)
            if (a3.hasOwnProperty(key))
              window.ace[key] = a3[key];
          window.ace["default"] = window.ace;
          if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = window.ace;
          }
        });
      })();
    }
  });

  // node_modules/ace-builds/src-noconflict/ext-language_tools.js
  var require_ext_language_tools = __commonJS({
    "node_modules/ace-builds/src-noconflict/ext-language_tools.js"(exports, module) {
      ace.define("ace/snippets", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/event_emitter", "ace/lib/lang", "ace/range", "ace/range_list", "ace/keyboard/hash_handler", "ace/tokenizer", "ace/clipboard", "ace/editor"], function(require3, exports2, module2) {
        "use strict";
        var dom = require3("./lib/dom");
        var oop = require3("./lib/oop");
        var EventEmitter = require3("./lib/event_emitter").EventEmitter;
        var lang = require3("./lib/lang");
        var Range = require3("./range").Range;
        var RangeList = require3("./range_list").RangeList;
        var HashHandler = require3("./keyboard/hash_handler").HashHandler;
        var Tokenizer = require3("./tokenizer").Tokenizer;
        var clipboard = require3("./clipboard");
        var VARIABLES = {
          CURRENT_WORD: function(editor) {
            return editor.session.getTextRange(editor.session.getWordRange());
          },
          SELECTION: function(editor, name2, indentation) {
            var text = editor.session.getTextRange();
            if (indentation)
              return text.replace(/\n\r?([ \t]*\S)/g, "\n" + indentation + "$1");
            return text;
          },
          CURRENT_LINE: function(editor) {
            return editor.session.getLine(editor.getCursorPosition().row);
          },
          PREV_LINE: function(editor) {
            return editor.session.getLine(editor.getCursorPosition().row - 1);
          },
          LINE_INDEX: function(editor) {
            return editor.getCursorPosition().row;
          },
          LINE_NUMBER: function(editor) {
            return editor.getCursorPosition().row + 1;
          },
          SOFT_TABS: function(editor) {
            return editor.session.getUseSoftTabs() ? "YES" : "NO";
          },
          TAB_SIZE: function(editor) {
            return editor.session.getTabSize();
          },
          CLIPBOARD: function(editor) {
            return clipboard.getText && clipboard.getText();
          },
          FILENAME: function(editor) {
            return /[^/\\]*$/.exec(this.FILEPATH(editor))[0];
          },
          FILENAME_BASE: function(editor) {
            return /[^/\\]*$/.exec(this.FILEPATH(editor))[0].replace(/\.[^.]*$/, "");
          },
          DIRECTORY: function(editor) {
            return this.FILEPATH(editor).replace(/[^/\\]*$/, "");
          },
          FILEPATH: function(editor) {
            return "/not implemented.txt";
          },
          WORKSPACE_NAME: function() {
            return "Unknown";
          },
          FULLNAME: function() {
            return "Unknown";
          },
          BLOCK_COMMENT_START: function(editor) {
            var mode = editor.session.$mode || {};
            return mode.blockComment && mode.blockComment.start || "";
          },
          BLOCK_COMMENT_END: function(editor) {
            var mode = editor.session.$mode || {};
            return mode.blockComment && mode.blockComment.end || "";
          },
          LINE_COMMENT: function(editor) {
            var mode = editor.session.$mode || {};
            return mode.lineCommentStart || "";
          },
          CURRENT_YEAR: date.bind(null, { year: "numeric" }),
          CURRENT_YEAR_SHORT: date.bind(null, { year: "2-digit" }),
          CURRENT_MONTH: date.bind(null, { month: "numeric" }),
          CURRENT_MONTH_NAME: date.bind(null, { month: "long" }),
          CURRENT_MONTH_NAME_SHORT: date.bind(null, { month: "short" }),
          CURRENT_DATE: date.bind(null, { day: "2-digit" }),
          CURRENT_DAY_NAME: date.bind(null, { weekday: "long" }),
          CURRENT_DAY_NAME_SHORT: date.bind(null, { weekday: "short" }),
          CURRENT_HOUR: date.bind(null, { hour: "2-digit", hour12: false }),
          CURRENT_MINUTE: date.bind(null, { minute: "2-digit" }),
          CURRENT_SECOND: date.bind(null, { second: "2-digit" })
        };
        VARIABLES.SELECTED_TEXT = VARIABLES.SELECTION;
        function date(dateFormat) {
          var str = new Date().toLocaleString("en-us", dateFormat);
          return str.length == 1 ? "0" + str : str;
        }
        var SnippetManager = function() {
          this.snippetMap = {};
          this.snippetNameMap = {};
        };
        (function() {
          oop.implement(this, EventEmitter);
          this.getTokenizer = function() {
            return SnippetManager.$tokenizer || this.createTokenizer();
          };
          this.createTokenizer = function() {
            function TabstopToken(str) {
              str = str.substr(1);
              if (/^\d+$/.test(str))
                return [{ tabstopId: parseInt(str, 10) }];
              return [{ text: str }];
            }
            function escape(ch) {
              return "(?:[^\\\\" + ch + "]|\\\\.)";
            }
            var formatMatcher = {
              regex: "/(" + escape("/") + "+)/",
              onMatch: function(val, state, stack) {
                var ts = stack[0];
                ts.fmtString = true;
                ts.guard = val.slice(1, -1);
                ts.flag = "";
                return "";
              },
              next: "formatString"
            };
            SnippetManager.$tokenizer = new Tokenizer({
              start: [
                { regex: /\\./, onMatch: function(val, state, stack) {
                  var ch = val[1];
                  if (ch == "}" && stack.length) {
                    val = ch;
                  } else if ("`$\\".indexOf(ch) != -1) {
                    val = ch;
                  }
                  return [val];
                } },
                { regex: /}/, onMatch: function(val, state, stack) {
                  return [stack.length ? stack.shift() : val];
                } },
                { regex: /\$(?:\d+|\w+)/, onMatch: TabstopToken },
                { regex: /\$\{[\dA-Z_a-z]+/, onMatch: function(str, state, stack) {
                  var t5 = TabstopToken(str.substr(1));
                  stack.unshift(t5[0]);
                  return t5;
                }, next: "snippetVar" },
                { regex: /\n/, token: "newline", merge: false }
              ],
              snippetVar: [
                { regex: "\\|" + escape("\\|") + "*\\|", onMatch: function(val, state, stack) {
                  var choices = val.slice(1, -1).replace(/\\[,|\\]|,/g, function(operator) {
                    return operator.length == 2 ? operator[1] : "\0";
                  }).split("\0").map(function(value) {
                    return { value };
                  });
                  stack[0].choices = choices;
                  return [choices[0]];
                }, next: "start" },
                formatMatcher,
                { regex: "([^:}\\\\]|\\\\.)*:?", token: "", next: "start" }
              ],
              formatString: [
                { regex: /:/, onMatch: function(val, state, stack) {
                  if (stack.length && stack[0].expectElse) {
                    stack[0].expectElse = false;
                    stack[0].ifEnd = { elseEnd: stack[0] };
                    return [stack[0].ifEnd];
                  }
                  return ":";
                } },
                { regex: /\\./, onMatch: function(val, state, stack) {
                  var ch = val[1];
                  if (ch == "}" && stack.length)
                    val = ch;
                  else if ("`$\\".indexOf(ch) != -1)
                    val = ch;
                  else if (ch == "n")
                    val = "\n";
                  else if (ch == "t")
                    val = "	";
                  else if ("ulULE".indexOf(ch) != -1)
                    val = { changeCase: ch, local: ch > "a" };
                  return [val];
                } },
                { regex: "/\\w*}", onMatch: function(val, state, stack) {
                  var next = stack.shift();
                  if (next)
                    next.flag = val.slice(1, -1);
                  this.next = next && next.tabstopId ? "start" : "";
                  return [next || val];
                }, next: "start" },
                { regex: /\$(?:\d+|\w+)/, onMatch: function(val, state, stack) {
                  return [{ text: val.slice(1) }];
                } },
                { regex: /\${\w+/, onMatch: function(val, state, stack) {
                  var token = { text: val.slice(2) };
                  stack.unshift(token);
                  return [token];
                }, next: "formatStringVar" },
                { regex: /\n/, token: "newline", merge: false },
                { regex: /}/, onMatch: function(val, state, stack) {
                  var next = stack.shift();
                  this.next = next && next.tabstopId ? "start" : "";
                  return [next || val];
                }, next: "start" }
              ],
              formatStringVar: [
                { regex: /:\/\w+}/, onMatch: function(val, state, stack) {
                  var ts = stack[0];
                  ts.formatFunction = val.slice(2, -1);
                  return [stack.shift()];
                }, next: "formatString" },
                formatMatcher,
                { regex: /:[\?\-+]?/, onMatch: function(val, state, stack) {
                  if (val[1] == "+")
                    stack[0].ifEnd = stack[0];
                  if (val[1] == "?")
                    stack[0].expectElse = true;
                }, next: "formatString" },
                { regex: "([^:}\\\\]|\\\\.)*:?", token: "", next: "formatString" }
              ]
            });
            return SnippetManager.$tokenizer;
          };
          this.tokenizeTmSnippet = function(str, startState) {
            return this.getTokenizer().getLineTokens(str, startState).tokens.map(function(x2) {
              return x2.value || x2;
            });
          };
          this.getVariableValue = function(editor, name2, indentation) {
            if (/^\d+$/.test(name2))
              return (this.variables.__ || {})[name2] || "";
            if (/^[A-Z]\d+$/.test(name2))
              return (this.variables[name2[0] + "__"] || {})[name2.substr(1)] || "";
            name2 = name2.replace(/^TM_/, "");
            if (!this.variables.hasOwnProperty(name2))
              return "";
            var value = this.variables[name2];
            if (typeof value == "function")
              value = this.variables[name2](editor, name2, indentation);
            return value == null ? "" : value;
          };
          this.variables = VARIABLES;
          this.tmStrFormat = function(str, ch, editor) {
            if (!ch.fmt)
              return str;
            var flag = ch.flag || "";
            var re = ch.guard;
            re = new RegExp(re, flag.replace(/[^gim]/g, ""));
            var fmtTokens = typeof ch.fmt == "string" ? this.tokenizeTmSnippet(ch.fmt, "formatString") : ch.fmt;
            var _self = this;
            var formatted = str.replace(re, function() {
              var oldArgs = _self.variables.__;
              _self.variables.__ = [].slice.call(arguments);
              var fmtParts = _self.resolveVariables(fmtTokens, editor);
              var gChangeCase = "E";
              for (var i6 = 0; i6 < fmtParts.length; i6++) {
                var ch2 = fmtParts[i6];
                if (typeof ch2 == "object") {
                  fmtParts[i6] = "";
                  if (ch2.changeCase && ch2.local) {
                    var next = fmtParts[i6 + 1];
                    if (next && typeof next == "string") {
                      if (ch2.changeCase == "u")
                        fmtParts[i6] = next[0].toUpperCase();
                      else
                        fmtParts[i6] = next[0].toLowerCase();
                      fmtParts[i6 + 1] = next.substr(1);
                    }
                  } else if (ch2.changeCase) {
                    gChangeCase = ch2.changeCase;
                  }
                } else if (gChangeCase == "U") {
                  fmtParts[i6] = ch2.toUpperCase();
                } else if (gChangeCase == "L") {
                  fmtParts[i6] = ch2.toLowerCase();
                }
              }
              _self.variables.__ = oldArgs;
              return fmtParts.join("");
            });
            return formatted;
          };
          this.tmFormatFunction = function(str, ch, editor) {
            if (ch.formatFunction == "upcase")
              return str.toUpperCase();
            if (ch.formatFunction == "downcase")
              return str.toLowerCase();
            return str;
          };
          this.resolveVariables = function(snippet, editor) {
            var result = [];
            var indentation = "";
            var afterNewLine = true;
            for (var i6 = 0; i6 < snippet.length; i6++) {
              var ch = snippet[i6];
              if (typeof ch == "string") {
                result.push(ch);
                if (ch == "\n") {
                  afterNewLine = true;
                  indentation = "";
                } else if (afterNewLine) {
                  indentation = /^\t*/.exec(ch)[0];
                  afterNewLine = /\S/.test(ch);
                }
                continue;
              }
              if (!ch)
                continue;
              afterNewLine = false;
              if (ch.fmtString) {
                var j = snippet.indexOf(ch, i6 + 1);
                if (j == -1)
                  j = snippet.length;
                ch.fmt = snippet.slice(i6 + 1, j);
                i6 = j;
              }
              if (ch.text) {
                var value = this.getVariableValue(editor, ch.text, indentation) + "";
                if (ch.fmtString)
                  value = this.tmStrFormat(value, ch, editor);
                if (ch.formatFunction)
                  value = this.tmFormatFunction(value, ch, editor);
                if (value && !ch.ifEnd) {
                  result.push(value);
                  gotoNext(ch);
                } else if (!value && ch.ifEnd) {
                  gotoNext(ch.ifEnd);
                }
              } else if (ch.elseEnd) {
                gotoNext(ch.elseEnd);
              } else if (ch.tabstopId != null) {
                result.push(ch);
              } else if (ch.changeCase != null) {
                result.push(ch);
              }
            }
            function gotoNext(ch2) {
              var i1 = snippet.indexOf(ch2, i6 + 1);
              if (i1 != -1)
                i6 = i1;
            }
            return result;
          };
          this.insertSnippetForSelection = function(editor, snippetText) {
            var cursor = editor.getCursorPosition();
            var line = editor.session.getLine(cursor.row);
            var tabString = editor.session.getTabString();
            var indentString = line.match(/^\s*/)[0];
            if (cursor.column < indentString.length)
              indentString = indentString.slice(0, cursor.column);
            snippetText = snippetText.replace(/\r/g, "");
            var tokens = this.tokenizeTmSnippet(snippetText);
            tokens = this.resolveVariables(tokens, editor);
            tokens = tokens.map(function(x2) {
              if (x2 == "\n")
                return x2 + indentString;
              if (typeof x2 == "string")
                return x2.replace(/\t/g, tabString);
              return x2;
            });
            var tabstops = [];
            tokens.forEach(function(p3, i7) {
              if (typeof p3 != "object")
                return;
              var id2 = p3.tabstopId;
              var ts2 = tabstops[id2];
              if (!ts2) {
                ts2 = tabstops[id2] = [];
                ts2.index = id2;
                ts2.value = "";
                ts2.parents = {};
              }
              if (ts2.indexOf(p3) !== -1)
                return;
              if (p3.choices && !ts2.choices)
                ts2.choices = p3.choices;
              ts2.push(p3);
              var i12 = tokens.indexOf(p3, i7 + 1);
              if (i12 === -1)
                return;
              var value2 = tokens.slice(i7 + 1, i12);
              var isNested = value2.some(function(t5) {
                return typeof t5 === "object";
              });
              if (isNested && !ts2.value) {
                ts2.value = value2;
              } else if (value2.length && (!ts2.value || typeof ts2.value !== "string")) {
                ts2.value = value2.join("");
              }
            });
            tabstops.forEach(function(ts2) {
              ts2.length = 0;
            });
            var expanding = {};
            function copyValue(val) {
              var copy = [];
              for (var i7 = 0; i7 < val.length; i7++) {
                var p3 = val[i7];
                if (typeof p3 == "object") {
                  if (expanding[p3.tabstopId])
                    continue;
                  var j = val.lastIndexOf(p3, i7 - 1);
                  p3 = copy[j] || { tabstopId: p3.tabstopId };
                }
                copy[i7] = p3;
              }
              return copy;
            }
            for (var i6 = 0; i6 < tokens.length; i6++) {
              var p2 = tokens[i6];
              if (typeof p2 != "object")
                continue;
              var id = p2.tabstopId;
              var ts = tabstops[id];
              var i1 = tokens.indexOf(p2, i6 + 1);
              if (expanding[id]) {
                if (expanding[id] === p2) {
                  delete expanding[id];
                  Object.keys(expanding).forEach(function(parentId) {
                    ts.parents[parentId] = true;
                  });
                }
                continue;
              }
              expanding[id] = p2;
              var value = ts.value;
              if (typeof value !== "string")
                value = copyValue(value);
              else if (p2.fmt)
                value = this.tmStrFormat(value, p2, editor);
              tokens.splice.apply(tokens, [i6 + 1, Math.max(0, i1 - i6)].concat(value, p2));
              if (ts.indexOf(p2) === -1)
                ts.push(p2);
            }
            var row = 0, column = 0;
            var text = "";
            tokens.forEach(function(t5) {
              if (typeof t5 === "string") {
                var lines = t5.split("\n");
                if (lines.length > 1) {
                  column = lines[lines.length - 1].length;
                  row += lines.length - 1;
                } else
                  column += t5.length;
                text += t5;
              } else if (t5) {
                if (!t5.start)
                  t5.start = { row, column };
                else
                  t5.end = { row, column };
              }
            });
            var range = editor.getSelectionRange();
            var end = editor.session.replace(range, text);
            var tabstopManager = new TabstopManager(editor);
            var selectionId = editor.inVirtualSelectionMode && editor.selection.index;
            tabstopManager.addTabstops(tabstops, range.start, end, selectionId);
          };
          this.insertSnippet = function(editor, snippetText) {
            var self = this;
            if (editor.inVirtualSelectionMode)
              return self.insertSnippetForSelection(editor, snippetText);
            editor.forEachSelection(function() {
              self.insertSnippetForSelection(editor, snippetText);
            }, null, { keepOrder: true });
            if (editor.tabstopManager)
              editor.tabstopManager.tabNext();
          };
          this.$getScope = function(editor) {
            var scope = editor.session.$mode.$id || "";
            scope = scope.split("/").pop();
            if (scope === "html" || scope === "php") {
              if (scope === "php" && !editor.session.$mode.inlinePhp)
                scope = "html";
              var c2 = editor.getCursorPosition();
              var state = editor.session.getState(c2.row);
              if (typeof state === "object") {
                state = state[0];
              }
              if (state.substring) {
                if (state.substring(0, 3) == "js-")
                  scope = "javascript";
                else if (state.substring(0, 4) == "css-")
                  scope = "css";
                else if (state.substring(0, 4) == "php-")
                  scope = "php";
              }
            }
            return scope;
          };
          this.getActiveScopes = function(editor) {
            var scope = this.$getScope(editor);
            var scopes = [scope];
            var snippetMap = this.snippetMap;
            if (snippetMap[scope] && snippetMap[scope].includeScopes) {
              scopes.push.apply(scopes, snippetMap[scope].includeScopes);
            }
            scopes.push("_");
            return scopes;
          };
          this.expandWithTab = function(editor, options) {
            var self = this;
            var result = editor.forEachSelection(function() {
              return self.expandSnippetForSelection(editor, options);
            }, null, { keepOrder: true });
            if (result && editor.tabstopManager)
              editor.tabstopManager.tabNext();
            return result;
          };
          this.expandSnippetForSelection = function(editor, options) {
            var cursor = editor.getCursorPosition();
            var line = editor.session.getLine(cursor.row);
            var before = line.substring(0, cursor.column);
            var after = line.substr(cursor.column);
            var snippetMap = this.snippetMap;
            var snippet;
            this.getActiveScopes(editor).some(function(scope) {
              var snippets = snippetMap[scope];
              if (snippets)
                snippet = this.findMatchingSnippet(snippets, before, after);
              return !!snippet;
            }, this);
            if (!snippet)
              return false;
            if (options && options.dryRun)
              return true;
            editor.session.doc.removeInLine(
              cursor.row,
              cursor.column - snippet.replaceBefore.length,
              cursor.column + snippet.replaceAfter.length
            );
            this.variables.M__ = snippet.matchBefore;
            this.variables.T__ = snippet.matchAfter;
            this.insertSnippetForSelection(editor, snippet.content);
            this.variables.M__ = this.variables.T__ = null;
            return true;
          };
          this.findMatchingSnippet = function(snippetList, before, after) {
            for (var i6 = snippetList.length; i6--; ) {
              var s5 = snippetList[i6];
              if (s5.startRe && !s5.startRe.test(before))
                continue;
              if (s5.endRe && !s5.endRe.test(after))
                continue;
              if (!s5.startRe && !s5.endRe)
                continue;
              s5.matchBefore = s5.startRe ? s5.startRe.exec(before) : [""];
              s5.matchAfter = s5.endRe ? s5.endRe.exec(after) : [""];
              s5.replaceBefore = s5.triggerRe ? s5.triggerRe.exec(before)[0] : "";
              s5.replaceAfter = s5.endTriggerRe ? s5.endTriggerRe.exec(after)[0] : "";
              return s5;
            }
          };
          this.snippetMap = {};
          this.snippetNameMap = {};
          this.register = function(snippets, scope) {
            var snippetMap = this.snippetMap;
            var snippetNameMap = this.snippetNameMap;
            var self = this;
            if (!snippets)
              snippets = [];
            function wrapRegexp(src) {
              if (src && !/^\^?\(.*\)\$?$|^\\b$/.test(src))
                src = "(?:" + src + ")";
              return src || "";
            }
            function guardedRegexp(re, guard, opening) {
              re = wrapRegexp(re);
              guard = wrapRegexp(guard);
              if (opening) {
                re = guard + re;
                if (re && re[re.length - 1] != "$")
                  re = re + "$";
              } else {
                re = re + guard;
                if (re && re[0] != "^")
                  re = "^" + re;
              }
              return new RegExp(re);
            }
            function addSnippet(s5) {
              if (!s5.scope)
                s5.scope = scope || "_";
              scope = s5.scope;
              if (!snippetMap[scope]) {
                snippetMap[scope] = [];
                snippetNameMap[scope] = {};
              }
              var map = snippetNameMap[scope];
              if (s5.name) {
                var old = map[s5.name];
                if (old)
                  self.unregister(old);
                map[s5.name] = s5;
              }
              snippetMap[scope].push(s5);
              if (s5.prefix)
                s5.tabTrigger = s5.prefix;
              if (!s5.content && s5.body)
                s5.content = Array.isArray(s5.body) ? s5.body.join("\n") : s5.body;
              if (s5.tabTrigger && !s5.trigger) {
                if (!s5.guard && /^\w/.test(s5.tabTrigger))
                  s5.guard = "\\b";
                s5.trigger = lang.escapeRegExp(s5.tabTrigger);
              }
              if (!s5.trigger && !s5.guard && !s5.endTrigger && !s5.endGuard)
                return;
              s5.startRe = guardedRegexp(s5.trigger, s5.guard, true);
              s5.triggerRe = new RegExp(s5.trigger);
              s5.endRe = guardedRegexp(s5.endTrigger, s5.endGuard, true);
              s5.endTriggerRe = new RegExp(s5.endTrigger);
            }
            if (Array.isArray(snippets)) {
              snippets.forEach(addSnippet);
            } else {
              Object.keys(snippets).forEach(function(key) {
                addSnippet(snippets[key]);
              });
            }
            this._signal("registerSnippets", { scope });
          };
          this.unregister = function(snippets, scope) {
            var snippetMap = this.snippetMap;
            var snippetNameMap = this.snippetNameMap;
            function removeSnippet(s5) {
              var nameMap = snippetNameMap[s5.scope || scope];
              if (nameMap && nameMap[s5.name]) {
                delete nameMap[s5.name];
                var map = snippetMap[s5.scope || scope];
                var i6 = map && map.indexOf(s5);
                if (i6 >= 0)
                  map.splice(i6, 1);
              }
            }
            if (snippets.content)
              removeSnippet(snippets);
            else if (Array.isArray(snippets))
              snippets.forEach(removeSnippet);
          };
          this.parseSnippetFile = function(str) {
            str = str.replace(/\r/g, "");
            var list = [], snippet = {};
            var re = /^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm;
            var m2;
            while (m2 = re.exec(str)) {
              if (m2[1]) {
                try {
                  snippet = JSON.parse(m2[1]);
                  list.push(snippet);
                } catch (e10) {
                }
              }
              if (m2[4]) {
                snippet.content = m2[4].replace(/^\t/gm, "");
                list.push(snippet);
                snippet = {};
              } else {
                var key = m2[2], val = m2[3];
                if (key == "regex") {
                  var guardRe = /\/((?:[^\/\\]|\\.)*)|$/g;
                  snippet.guard = guardRe.exec(val)[1];
                  snippet.trigger = guardRe.exec(val)[1];
                  snippet.endTrigger = guardRe.exec(val)[1];
                  snippet.endGuard = guardRe.exec(val)[1];
                } else if (key == "snippet") {
                  snippet.tabTrigger = val.match(/^\S*/)[0];
                  if (!snippet.name)
                    snippet.name = val;
                } else if (key) {
                  snippet[key] = val;
                }
              }
            }
            return list;
          };
          this.getSnippetByName = function(name2, editor) {
            var snippetMap = this.snippetNameMap;
            var snippet;
            this.getActiveScopes(editor).some(function(scope) {
              var snippets = snippetMap[scope];
              if (snippets)
                snippet = snippets[name2];
              return !!snippet;
            }, this);
            return snippet;
          };
        }).call(SnippetManager.prototype);
        var TabstopManager = function(editor) {
          if (editor.tabstopManager)
            return editor.tabstopManager;
          editor.tabstopManager = this;
          this.$onChange = this.onChange.bind(this);
          this.$onChangeSelection = lang.delayedCall(this.onChangeSelection.bind(this)).schedule;
          this.$onChangeSession = this.onChangeSession.bind(this);
          this.$onAfterExec = this.onAfterExec.bind(this);
          this.attach(editor);
        };
        (function() {
          this.attach = function(editor) {
            this.index = 0;
            this.ranges = [];
            this.tabstops = [];
            this.$openTabstops = null;
            this.selectedTabstop = null;
            this.editor = editor;
            this.editor.on("change", this.$onChange);
            this.editor.on("changeSelection", this.$onChangeSelection);
            this.editor.on("changeSession", this.$onChangeSession);
            this.editor.commands.on("afterExec", this.$onAfterExec);
            this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler);
          };
          this.detach = function() {
            this.tabstops.forEach(this.removeTabstopMarkers, this);
            this.ranges = null;
            this.tabstops = null;
            this.selectedTabstop = null;
            this.editor.removeListener("change", this.$onChange);
            this.editor.removeListener("changeSelection", this.$onChangeSelection);
            this.editor.removeListener("changeSession", this.$onChangeSession);
            this.editor.commands.removeListener("afterExec", this.$onAfterExec);
            this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler);
            this.editor.tabstopManager = null;
            this.editor = null;
          };
          this.onChange = function(delta) {
            var isRemove = delta.action[0] == "r";
            var selectedTabstop = this.selectedTabstop || {};
            var parents = selectedTabstop.parents || {};
            var tabstops = (this.tabstops || []).slice();
            for (var i6 = 0; i6 < tabstops.length; i6++) {
              var ts = tabstops[i6];
              var active = ts == selectedTabstop || parents[ts.index];
              ts.rangeList.$bias = active ? 0 : 1;
              if (delta.action == "remove" && ts !== selectedTabstop) {
                var parentActive = ts.parents && ts.parents[selectedTabstop.index];
                var startIndex = ts.rangeList.pointIndex(delta.start, parentActive);
                startIndex = startIndex < 0 ? -startIndex - 1 : startIndex + 1;
                var endIndex = ts.rangeList.pointIndex(delta.end, parentActive);
                endIndex = endIndex < 0 ? -endIndex - 1 : endIndex - 1;
                var toRemove = ts.rangeList.ranges.slice(startIndex, endIndex);
                for (var j = 0; j < toRemove.length; j++)
                  this.removeRange(toRemove[j]);
              }
              ts.rangeList.$onChange(delta);
            }
            var session = this.editor.session;
            if (!this.$inChange && isRemove && session.getLength() == 1 && !session.getValue())
              this.detach();
          };
          this.updateLinkedFields = function() {
            var ts = this.selectedTabstop;
            if (!ts || !ts.hasLinkedRanges || !ts.firstNonLinked)
              return;
            this.$inChange = true;
            var session = this.editor.session;
            var text = session.getTextRange(ts.firstNonLinked);
            for (var i6 = 0; i6 < ts.length; i6++) {
              var range = ts[i6];
              if (!range.linked)
                continue;
              var original = range.original;
              var fmt = exports2.snippetManager.tmStrFormat(text, original, this.editor);
              session.replace(range, fmt);
            }
            this.$inChange = false;
          };
          this.onAfterExec = function(e10) {
            if (e10.command && !e10.command.readOnly)
              this.updateLinkedFields();
          };
          this.onChangeSelection = function() {
            if (!this.editor)
              return;
            var lead = this.editor.selection.lead;
            var anchor = this.editor.selection.anchor;
            var isEmpty = this.editor.selection.isEmpty();
            for (var i6 = 0; i6 < this.ranges.length; i6++) {
              if (this.ranges[i6].linked)
                continue;
              var containsLead = this.ranges[i6].contains(lead.row, lead.column);
              var containsAnchor = isEmpty || this.ranges[i6].contains(anchor.row, anchor.column);
              if (containsLead && containsAnchor)
                return;
            }
            this.detach();
          };
          this.onChangeSession = function() {
            this.detach();
          };
          this.tabNext = function(dir) {
            var max = this.tabstops.length;
            var index = this.index + (dir || 1);
            index = Math.min(Math.max(index, 1), max);
            if (index == max)
              index = 0;
            this.selectTabstop(index);
            if (index === 0)
              this.detach();
          };
          this.selectTabstop = function(index) {
            this.$openTabstops = null;
            var ts = this.tabstops[this.index];
            if (ts)
              this.addTabstopMarkers(ts);
            this.index = index;
            ts = this.tabstops[this.index];
            if (!ts || !ts.length)
              return;
            this.selectedTabstop = ts;
            var range = ts.firstNonLinked || ts;
            if (ts.choices)
              range.cursor = range.start;
            if (!this.editor.inVirtualSelectionMode) {
              var sel = this.editor.multiSelect;
              sel.toSingleRange(range);
              for (var i6 = 0; i6 < ts.length; i6++) {
                if (ts.hasLinkedRanges && ts[i6].linked)
                  continue;
                sel.addRange(ts[i6].clone(), true);
              }
            } else {
              this.editor.selection.fromOrientedRange(range);
            }
            this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler);
            if (this.selectedTabstop && this.selectedTabstop.choices)
              this.editor.execCommand("startAutocomplete", { matches: this.selectedTabstop.choices });
          };
          this.addTabstops = function(tabstops, start, end) {
            var useLink = this.useLink || !this.editor.getOption("enableMultiselect");
            if (!this.$openTabstops)
              this.$openTabstops = [];
            if (!tabstops[0]) {
              var p2 = Range.fromPoints(end, end);
              moveRelative(p2.start, start);
              moveRelative(p2.end, start);
              tabstops[0] = [p2];
              tabstops[0].index = 0;
            }
            var i6 = this.index;
            var arg = [i6 + 1, 0];
            var ranges = this.ranges;
            tabstops.forEach(function(ts, index) {
              var dest = this.$openTabstops[index] || ts;
              for (var i7 = 0; i7 < ts.length; i7++) {
                var p3 = ts[i7];
                var range = Range.fromPoints(p3.start, p3.end || p3.start);
                movePoint(range.start, start);
                movePoint(range.end, start);
                range.original = p3;
                range.tabstop = dest;
                ranges.push(range);
                if (dest != ts)
                  dest.unshift(range);
                else
                  dest[i7] = range;
                if (p3.fmtString || dest.firstNonLinked && useLink) {
                  range.linked = true;
                  dest.hasLinkedRanges = true;
                } else if (!dest.firstNonLinked)
                  dest.firstNonLinked = range;
              }
              if (!dest.firstNonLinked)
                dest.hasLinkedRanges = false;
              if (dest === ts) {
                arg.push(dest);
                this.$openTabstops[index] = dest;
              }
              this.addTabstopMarkers(dest);
              dest.rangeList = dest.rangeList || new RangeList();
              dest.rangeList.$bias = 0;
              dest.rangeList.addList(dest);
            }, this);
            if (arg.length > 2) {
              if (this.tabstops.length)
                arg.push(arg.splice(2, 1)[0]);
              this.tabstops.splice.apply(this.tabstops, arg);
            }
          };
          this.addTabstopMarkers = function(ts) {
            var session = this.editor.session;
            ts.forEach(function(range) {
              if (!range.markerId)
                range.markerId = session.addMarker(range, "ace_snippet-marker", "text");
            });
          };
          this.removeTabstopMarkers = function(ts) {
            var session = this.editor.session;
            ts.forEach(function(range) {
              session.removeMarker(range.markerId);
              range.markerId = null;
            });
          };
          this.removeRange = function(range) {
            var i6 = range.tabstop.indexOf(range);
            if (i6 != -1)
              range.tabstop.splice(i6, 1);
            i6 = this.ranges.indexOf(range);
            if (i6 != -1)
              this.ranges.splice(i6, 1);
            i6 = range.tabstop.rangeList.ranges.indexOf(range);
            if (i6 != -1)
              range.tabstop.splice(i6, 1);
            this.editor.session.removeMarker(range.markerId);
            if (!range.tabstop.length) {
              i6 = this.tabstops.indexOf(range.tabstop);
              if (i6 != -1)
                this.tabstops.splice(i6, 1);
              if (!this.tabstops.length)
                this.detach();
            }
          };
          this.keyboardHandler = new HashHandler();
          this.keyboardHandler.bindKeys({
            "Tab": function(editor) {
              if (exports2.snippetManager && exports2.snippetManager.expandWithTab(editor))
                return;
              editor.tabstopManager.tabNext(1);
              editor.renderer.scrollCursorIntoView();
            },
            "Shift-Tab": function(editor) {
              editor.tabstopManager.tabNext(-1);
              editor.renderer.scrollCursorIntoView();
            },
            "Esc": function(editor) {
              editor.tabstopManager.detach();
            }
          });
        }).call(TabstopManager.prototype);
        var movePoint = function(point, diff) {
          if (point.row == 0)
            point.column += diff.column;
          point.row += diff.row;
        };
        var moveRelative = function(point, start) {
          if (point.row == start.row)
            point.column -= start.column;
          point.row -= start.row;
        };
        dom.importCssString(".ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}", "snippets.css", false);
        exports2.snippetManager = new SnippetManager();
        var Editor = require3("./editor").Editor;
        (function() {
          this.insertSnippet = function(content, options) {
            return exports2.snippetManager.insertSnippet(this, content, options);
          };
          this.expandSnippet = function(options) {
            return exports2.snippetManager.expandWithTab(this, options);
          };
        }).call(Editor.prototype);
      });
      ace.define("ace/autocomplete/popup", ["require", "exports", "module", "ace/virtual_renderer", "ace/editor", "ace/range", "ace/lib/event", "ace/lib/lang", "ace/lib/dom"], function(require3, exports2, module2) {
        "use strict";
        var Renderer = require3("../virtual_renderer").VirtualRenderer;
        var Editor = require3("../editor").Editor;
        var Range = require3("../range").Range;
        var event = require3("../lib/event");
        var lang = require3("../lib/lang");
        var dom = require3("../lib/dom");
        var $singleLineEditor = function(el) {
          var renderer = new Renderer(el);
          renderer.$maxLines = 4;
          var editor = new Editor(renderer);
          editor.setHighlightActiveLine(false);
          editor.setShowPrintMargin(false);
          editor.renderer.setShowGutter(false);
          editor.renderer.setHighlightGutterLine(false);
          editor.$mouseHandler.$focusTimeout = 0;
          editor.$highlightTagPending = true;
          return editor;
        };
        var AcePopup = function(parentNode) {
          var el = dom.createElement("div");
          var popup = new $singleLineEditor(el);
          if (parentNode)
            parentNode.appendChild(el);
          el.style.display = "none";
          popup.renderer.content.style.cursor = "default";
          popup.renderer.setStyle("ace_autocomplete");
          popup.setOption("displayIndentGuides", false);
          popup.setOption("dragDelay", 150);
          var noop = function() {
          };
          popup.focus = noop;
          popup.$isFocused = true;
          popup.renderer.$cursorLayer.restartTimer = noop;
          popup.renderer.$cursorLayer.element.style.opacity = 0;
          popup.renderer.$maxLines = 8;
          popup.renderer.$keepTextAreaAtCursor = false;
          popup.setHighlightActiveLine(false);
          popup.session.highlight("");
          popup.session.$searchHighlight.clazz = "ace_highlight-marker";
          popup.on("mousedown", function(e10) {
            var pos = e10.getDocumentPosition();
            popup.selection.moveToPosition(pos);
            selectionMarker.start.row = selectionMarker.end.row = pos.row;
            e10.stop();
          });
          var lastMouseEvent;
          var hoverMarker = new Range(-1, 0, -1, Infinity);
          var selectionMarker = new Range(-1, 0, -1, Infinity);
          selectionMarker.id = popup.session.addMarker(selectionMarker, "ace_active-line", "fullLine");
          popup.setSelectOnHover = function(val) {
            if (!val) {
              hoverMarker.id = popup.session.addMarker(hoverMarker, "ace_line-hover", "fullLine");
            } else if (hoverMarker.id) {
              popup.session.removeMarker(hoverMarker.id);
              hoverMarker.id = null;
            }
          };
          popup.setSelectOnHover(false);
          popup.on("mousemove", function(e10) {
            if (!lastMouseEvent) {
              lastMouseEvent = e10;
              return;
            }
            if (lastMouseEvent.x == e10.x && lastMouseEvent.y == e10.y) {
              return;
            }
            lastMouseEvent = e10;
            lastMouseEvent.scrollTop = popup.renderer.scrollTop;
            var row = lastMouseEvent.getDocumentPosition().row;
            if (hoverMarker.start.row != row) {
              if (!hoverMarker.id)
                popup.setRow(row);
              setHoverMarker(row);
            }
          });
          popup.renderer.on("beforeRender", function() {
            if (lastMouseEvent && hoverMarker.start.row != -1) {
              lastMouseEvent.$pos = null;
              var row = lastMouseEvent.getDocumentPosition().row;
              if (!hoverMarker.id)
                popup.setRow(row);
              setHoverMarker(row, true);
            }
          });
          popup.renderer.on("afterRender", function() {
            var row = popup.getRow();
            var t5 = popup.renderer.$textLayer;
            var selected = t5.element.childNodes[row - t5.config.firstRow];
            if (selected !== t5.selectedNode && t5.selectedNode)
              dom.removeCssClass(t5.selectedNode, "ace_selected");
            t5.selectedNode = selected;
            if (selected)
              dom.addCssClass(selected, "ace_selected");
          });
          var hideHoverMarker = function() {
            setHoverMarker(-1);
          };
          var setHoverMarker = function(row, suppressRedraw) {
            if (row !== hoverMarker.start.row) {
              hoverMarker.start.row = hoverMarker.end.row = row;
              if (!suppressRedraw)
                popup.session._emit("changeBackMarker");
              popup._emit("changeHoverMarker");
            }
          };
          popup.getHoveredRow = function() {
            return hoverMarker.start.row;
          };
          event.addListener(popup.container, "mouseout", hideHoverMarker);
          popup.on("hide", hideHoverMarker);
          popup.on("changeSelection", hideHoverMarker);
          popup.session.doc.getLength = function() {
            return popup.data.length;
          };
          popup.session.doc.getLine = function(i6) {
            var data = popup.data[i6];
            if (typeof data == "string")
              return data;
            return data && data.value || "";
          };
          var bgTokenizer = popup.session.bgTokenizer;
          bgTokenizer.$tokenizeRow = function(row) {
            var data = popup.data[row];
            var tokens = [];
            if (!data)
              return tokens;
            if (typeof data == "string")
              data = { value: data };
            var caption = data.caption || data.value || data.name;
            function addToken(value, className) {
              value && tokens.push({
                type: (data.className || "") + (className || ""),
                value
              });
            }
            var lower = caption.toLowerCase();
            var filterText = (popup.filterText || "").toLowerCase();
            var lastIndex = 0;
            var lastI = 0;
            for (var i6 = 0; i6 <= filterText.length; i6++) {
              if (i6 != lastI && (data.matchMask & 1 << i6 || i6 == filterText.length)) {
                var sub = filterText.slice(lastI, i6);
                lastI = i6;
                var index = lower.indexOf(sub, lastIndex);
                if (index == -1)
                  continue;
                addToken(caption.slice(lastIndex, index), "");
                lastIndex = index + sub.length;
                addToken(caption.slice(index, lastIndex), "completion-highlight");
              }
            }
            addToken(caption.slice(lastIndex, caption.length), "");
            if (data.meta)
              tokens.push({ type: "completion-meta", value: data.meta });
            if (data.message)
              tokens.push({ type: "completion-message", value: data.message });
            return tokens;
          };
          bgTokenizer.$updateOnChange = noop;
          bgTokenizer.start = noop;
          popup.session.$computeWidth = function() {
            return this.screenWidth = 0;
          };
          popup.isOpen = false;
          popup.isTopdown = false;
          popup.autoSelect = true;
          popup.filterText = "";
          popup.data = [];
          popup.setData = function(list, filterText) {
            popup.filterText = filterText || "";
            popup.setValue(lang.stringRepeat("\n", list.length), -1);
            popup.data = list || [];
            popup.setRow(0);
          };
          popup.getData = function(row) {
            return popup.data[row];
          };
          popup.getRow = function() {
            return selectionMarker.start.row;
          };
          popup.setRow = function(line) {
            line = Math.max(this.autoSelect ? 0 : -1, Math.min(this.data.length, line));
            if (selectionMarker.start.row != line) {
              popup.selection.clearSelection();
              selectionMarker.start.row = selectionMarker.end.row = line || 0;
              popup.session._emit("changeBackMarker");
              popup.moveCursorTo(line || 0, 0);
              if (popup.isOpen)
                popup._signal("select");
            }
          };
          popup.on("changeSelection", function() {
            if (popup.isOpen)
              popup.setRow(popup.selection.lead.row);
            popup.renderer.scrollCursorIntoView();
          });
          popup.hide = function() {
            this.container.style.display = "none";
            this._signal("hide");
            popup.isOpen = false;
          };
          popup.show = function(pos, lineHeight, topdownOnly) {
            var el2 = this.container;
            var screenHeight = window.innerHeight;
            var screenWidth = window.innerWidth;
            var renderer = this.renderer;
            var maxH = renderer.$maxLines * lineHeight * 1.4;
            var top = pos.top + this.$borderSize;
            var allowTopdown = top > screenHeight / 2 && !topdownOnly;
            if (allowTopdown && top + lineHeight + maxH > screenHeight) {
              renderer.$maxPixelHeight = top - 2 * this.$borderSize;
              el2.style.top = "";
              el2.style.bottom = screenHeight - top + "px";
              popup.isTopdown = false;
            } else {
              top += lineHeight;
              renderer.$maxPixelHeight = screenHeight - top - 0.2 * lineHeight;
              el2.style.top = top + "px";
              el2.style.bottom = "";
              popup.isTopdown = true;
            }
            el2.style.display = "";
            var left = pos.left;
            if (left + el2.offsetWidth > screenWidth)
              left = screenWidth - el2.offsetWidth;
            el2.style.left = left + "px";
            this._signal("show");
            lastMouseEvent = null;
            popup.isOpen = true;
          };
          popup.goTo = function(where) {
            var row = this.getRow();
            var max = this.session.getLength() - 1;
            switch (where) {
              case "up":
                row = row <= 0 ? max : row - 1;
                break;
              case "down":
                row = row >= max ? -1 : row + 1;
                break;
              case "start":
                row = 0;
                break;
              case "end":
                row = max;
                break;
            }
            this.setRow(row);
          };
          popup.getTextLeftOffset = function() {
            return this.$borderSize + this.renderer.$padding + this.$imageSize;
          };
          popup.$imageSize = 0;
          popup.$borderSize = 1;
          return popup;
        };
        dom.importCssString(".ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #CAD6FA;    z-index: 1;}.ace_dark.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #3a674e;}.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid #abbffe;    margin-top: -1px;    background: rgba(233,233,253,0.4);    position: absolute;    z-index: 2;}.ace_dark.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid rgba(109, 150, 13, 0.8);    background: rgba(58, 103, 78, 0.62);}.ace_completion-meta {    opacity: 0.5;    margin: 0.9em;}.ace_completion-message {    color: blue;}.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #2d69c7;}.ace_dark.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #93ca12;}.ace_editor.ace_autocomplete {    width: 300px;    z-index: 200000;    border: 1px lightgray solid;    position: fixed;    box-shadow: 2px 3px 5px rgba(0,0,0,.2);    line-height: 1.4;    background: #fefefe;    color: #111;}.ace_dark.ace_editor.ace_autocomplete {    border: 1px #484747 solid;    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.51);    line-height: 1.4;    background: #25282c;    color: #c1c1c1;}", "autocompletion.css", false);
        exports2.AcePopup = AcePopup;
        exports2.$singleLineEditor = $singleLineEditor;
      });
      ace.define("ace/autocomplete/util", ["require", "exports", "module"], function(require3, exports2, module2) {
        "use strict";
        exports2.parForEach = function(array, fn, callback) {
          var completed = 0;
          var arLength = array.length;
          if (arLength === 0)
            callback();
          for (var i6 = 0; i6 < arLength; i6++) {
            fn(array[i6], function(result, err) {
              completed++;
              if (completed === arLength)
                callback(result, err);
            });
          }
        };
        var ID_REGEX = /[a-zA-Z_0-9\$\-\u00A2-\u2000\u2070-\uFFFF]/;
        exports2.retrievePrecedingIdentifier = function(text, pos, regex) {
          regex = regex || ID_REGEX;
          var buf = [];
          for (var i6 = pos - 1; i6 >= 0; i6--) {
            if (regex.test(text[i6]))
              buf.push(text[i6]);
            else
              break;
          }
          return buf.reverse().join("");
        };
        exports2.retrieveFollowingIdentifier = function(text, pos, regex) {
          regex = regex || ID_REGEX;
          var buf = [];
          for (var i6 = pos; i6 < text.length; i6++) {
            if (regex.test(text[i6]))
              buf.push(text[i6]);
            else
              break;
          }
          return buf;
        };
        exports2.getCompletionPrefix = function(editor) {
          var pos = editor.getCursorPosition();
          var line = editor.session.getLine(pos.row);
          var prefix;
          editor.completers.forEach(function(completer) {
            if (completer.identifierRegexps) {
              completer.identifierRegexps.forEach(function(identifierRegex) {
                if (!prefix && identifierRegex)
                  prefix = this.retrievePrecedingIdentifier(line, pos.column, identifierRegex);
              }.bind(this));
            }
          }.bind(this));
          return prefix || this.retrievePrecedingIdentifier(line, pos.column);
        };
      });
      ace.define("ace/autocomplete", ["require", "exports", "module", "ace/keyboard/hash_handler", "ace/autocomplete/popup", "ace/autocomplete/util", "ace/lib/lang", "ace/lib/dom", "ace/snippets", "ace/config"], function(require3, exports2, module2) {
        "use strict";
        var HashHandler = require3("./keyboard/hash_handler").HashHandler;
        var AcePopup = require3("./autocomplete/popup").AcePopup;
        var util = require3("./autocomplete/util");
        var lang = require3("./lib/lang");
        var dom = require3("./lib/dom");
        var snippetManager = require3("./snippets").snippetManager;
        var config2 = require3("./config");
        var Autocomplete = function() {
          this.autoInsert = false;
          this.autoSelect = true;
          this.exactMatch = false;
          this.gatherCompletionsId = 0;
          this.keyboardHandler = new HashHandler();
          this.keyboardHandler.bindKeys(this.commands);
          this.blurListener = this.blurListener.bind(this);
          this.changeListener = this.changeListener.bind(this);
          this.mousedownListener = this.mousedownListener.bind(this);
          this.mousewheelListener = this.mousewheelListener.bind(this);
          this.changeTimer = lang.delayedCall(function() {
            this.updateCompletions(true);
          }.bind(this));
          this.tooltipTimer = lang.delayedCall(this.updateDocTooltip.bind(this), 50);
        };
        (function() {
          this.$init = function() {
            this.popup = new AcePopup(document.body || document.documentElement);
            this.popup.on("click", function(e10) {
              this.insertMatch();
              e10.stop();
            }.bind(this));
            this.popup.focus = this.editor.focus.bind(this.editor);
            this.popup.on("show", this.tooltipTimer.bind(null, null));
            this.popup.on("select", this.tooltipTimer.bind(null, null));
            this.popup.on("changeHoverMarker", this.tooltipTimer.bind(null, null));
            return this.popup;
          };
          this.getPopup = function() {
            return this.popup || this.$init();
          };
          this.openPopup = function(editor, prefix, keepPopupPosition) {
            if (!this.popup)
              this.$init();
            this.popup.autoSelect = this.autoSelect;
            this.popup.setData(this.completions.filtered, this.completions.filterText);
            editor.keyBinding.addKeyboardHandler(this.keyboardHandler);
            var renderer = editor.renderer;
            this.popup.setRow(this.autoSelect ? 0 : -1);
            if (!keepPopupPosition) {
              this.popup.setTheme(editor.getTheme());
              this.popup.setFontSize(editor.getFontSize());
              var lineHeight = renderer.layerConfig.lineHeight;
              var pos = renderer.$cursorLayer.getPixelPosition(this.base, true);
              pos.left -= this.popup.getTextLeftOffset();
              var rect = editor.container.getBoundingClientRect();
              pos.top += rect.top - renderer.layerConfig.offset;
              pos.left += rect.left - editor.renderer.scrollLeft;
              pos.left += renderer.gutterWidth;
              this.popup.show(pos, lineHeight);
            } else if (keepPopupPosition && !prefix) {
              this.detach();
            }
            this.changeTimer.cancel();
          };
          this.detach = function() {
            this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler);
            this.editor.off("changeSelection", this.changeListener);
            this.editor.off("blur", this.blurListener);
            this.editor.off("mousedown", this.mousedownListener);
            this.editor.off("mousewheel", this.mousewheelListener);
            this.changeTimer.cancel();
            this.hideDocTooltip();
            this.gatherCompletionsId += 1;
            if (this.popup && this.popup.isOpen)
              this.popup.hide();
            if (this.base)
              this.base.detach();
            this.activated = false;
            this.completions = this.base = null;
          };
          this.changeListener = function(e10) {
            var cursor = this.editor.selection.lead;
            if (cursor.row != this.base.row || cursor.column < this.base.column) {
              this.detach();
            }
            if (this.activated)
              this.changeTimer.schedule();
            else
              this.detach();
          };
          this.blurListener = function(e10) {
            var el = document.activeElement;
            var text = this.editor.textInput.getElement();
            var fromTooltip = e10.relatedTarget && this.tooltipNode && this.tooltipNode.contains(e10.relatedTarget);
            var container = this.popup && this.popup.container;
            if (el != text && el.parentNode != container && !fromTooltip && el != this.tooltipNode && e10.relatedTarget != text) {
              this.detach();
            }
          };
          this.mousedownListener = function(e10) {
            this.detach();
          };
          this.mousewheelListener = function(e10) {
            this.detach();
          };
          this.goTo = function(where) {
            this.popup.goTo(where);
          };
          this.insertMatch = function(data, options) {
            if (!data)
              data = this.popup.getData(this.popup.getRow());
            if (!data)
              return false;
            var completions = this.completions;
            this.editor.startOperation({ command: { name: "insertMatch" } });
            if (data.completer && data.completer.insertMatch) {
              data.completer.insertMatch(this.editor, data);
            } else {
              if (!completions)
                return false;
              if (completions.filterText) {
                var ranges = this.editor.selection.getAllRanges();
                for (var i6 = 0, range; range = ranges[i6]; i6++) {
                  range.start.column -= completions.filterText.length;
                  this.editor.session.remove(range);
                }
              }
              if (data.snippet)
                snippetManager.insertSnippet(this.editor, data.snippet);
              else
                this.editor.execCommand("insertstring", data.value || data);
            }
            if (this.completions == completions)
              this.detach();
            this.editor.endOperation();
          };
          this.commands = {
            "Up": function(editor) {
              editor.completer.goTo("up");
            },
            "Down": function(editor) {
              editor.completer.goTo("down");
            },
            "Ctrl-Up|Ctrl-Home": function(editor) {
              editor.completer.goTo("start");
            },
            "Ctrl-Down|Ctrl-End": function(editor) {
              editor.completer.goTo("end");
            },
            "Esc": function(editor) {
              editor.completer.detach();
            },
            "Return": function(editor) {
              return editor.completer.insertMatch();
            },
            "Shift-Return": function(editor) {
              editor.completer.insertMatch(null, { deleteSuffix: true });
            },
            "Tab": function(editor) {
              var result = editor.completer.insertMatch();
              if (!result && !editor.tabstopManager)
                editor.completer.goTo("down");
              else
                return result;
            },
            "PageUp": function(editor) {
              editor.completer.popup.gotoPageUp();
            },
            "PageDown": function(editor) {
              editor.completer.popup.gotoPageDown();
            }
          };
          this.gatherCompletions = function(editor, callback) {
            var session = editor.getSession();
            var pos = editor.getCursorPosition();
            var prefix = util.getCompletionPrefix(editor);
            this.base = session.doc.createAnchor(pos.row, pos.column - prefix.length);
            this.base.$insertRight = true;
            var matches = [];
            var total = editor.completers.length;
            editor.completers.forEach(function(completer, i6) {
              completer.getCompletions(editor, session, pos, prefix, function(err, results) {
                if (!err && results)
                  matches = matches.concat(results);
                callback(null, {
                  prefix: util.getCompletionPrefix(editor),
                  matches,
                  finished: --total === 0
                });
              });
            });
            return true;
          };
          this.showPopup = function(editor, options) {
            if (this.editor)
              this.detach();
            this.activated = true;
            this.editor = editor;
            if (editor.completer != this) {
              if (editor.completer)
                editor.completer.detach();
              editor.completer = this;
            }
            editor.on("changeSelection", this.changeListener);
            editor.on("blur", this.blurListener);
            editor.on("mousedown", this.mousedownListener);
            editor.on("mousewheel", this.mousewheelListener);
            this.updateCompletions(false, options);
          };
          this.updateCompletions = function(keepPopupPosition, options) {
            if (keepPopupPosition && this.base && this.completions) {
              var pos = this.editor.getCursorPosition();
              var prefix = this.editor.session.getTextRange({ start: this.base, end: pos });
              if (prefix == this.completions.filterText)
                return;
              this.completions.setFilter(prefix);
              if (!this.completions.filtered.length)
                return this.detach();
              if (this.completions.filtered.length == 1 && this.completions.filtered[0].value == prefix && !this.completions.filtered[0].snippet)
                return this.detach();
              this.openPopup(this.editor, prefix, keepPopupPosition);
              return;
            }
            if (options && options.matches) {
              var pos = this.editor.getSelectionRange().start;
              this.base = this.editor.session.doc.createAnchor(pos.row, pos.column);
              this.base.$insertRight = true;
              this.completions = new FilteredList(options.matches);
              return this.openPopup(this.editor, "", keepPopupPosition);
            }
            var _id = this.gatherCompletionsId;
            var detachIfFinished = function(results2) {
              if (!results2.finished)
                return;
              return this.detach();
            }.bind(this);
            var processResults = function(results2) {
              var prefix2 = results2.prefix;
              var matches = results2.matches;
              this.completions = new FilteredList(matches);
              if (this.exactMatch)
                this.completions.exactMatch = true;
              this.completions.setFilter(prefix2);
              var filtered = this.completions.filtered;
              if (!filtered.length)
                return detachIfFinished(results2);
              if (filtered.length == 1 && filtered[0].value == prefix2 && !filtered[0].snippet)
                return detachIfFinished(results2);
              if (this.autoInsert && filtered.length == 1 && results2.finished)
                return this.insertMatch(filtered[0]);
              this.openPopup(this.editor, prefix2, keepPopupPosition);
            }.bind(this);
            var isImmediate = true;
            var immediateResults = null;
            this.gatherCompletions(this.editor, function(err, results2) {
              var prefix2 = results2.prefix;
              var matches = results2 && results2.matches;
              if (!matches || !matches.length)
                return detachIfFinished(results2);
              if (prefix2.indexOf(results2.prefix) !== 0 || _id != this.gatherCompletionsId)
                return;
              if (isImmediate) {
                immediateResults = results2;
                return;
              }
              processResults(results2);
            }.bind(this));
            isImmediate = false;
            if (immediateResults) {
              var results = immediateResults;
              immediateResults = null;
              processResults(results);
            }
          };
          this.cancelContextMenu = function() {
            this.editor.$mouseHandler.cancelContextMenu();
          };
          this.updateDocTooltip = function() {
            var popup = this.popup;
            var all = popup.data;
            var selected = all && (all[popup.getHoveredRow()] || all[popup.getRow()]);
            var doc = null;
            if (!selected || !this.editor || !this.popup.isOpen)
              return this.hideDocTooltip();
            this.editor.completers.some(function(completer) {
              if (completer.getDocTooltip)
                doc = completer.getDocTooltip(selected);
              return doc;
            });
            if (!doc && typeof selected != "string")
              doc = selected;
            if (typeof doc == "string")
              doc = { docText: doc };
            if (!doc || !(doc.docHTML || doc.docText))
              return this.hideDocTooltip();
            this.showDocTooltip(doc);
          };
          this.showDocTooltip = function(item) {
            if (!this.tooltipNode) {
              this.tooltipNode = dom.createElement("div");
              this.tooltipNode.className = "ace_tooltip ace_doc-tooltip";
              this.tooltipNode.style.margin = 0;
              this.tooltipNode.style.pointerEvents = "auto";
              this.tooltipNode.tabIndex = -1;
              this.tooltipNode.onblur = this.blurListener.bind(this);
              this.tooltipNode.onclick = this.onTooltipClick.bind(this);
            }
            var tooltipNode = this.tooltipNode;
            if (item.docHTML) {
              tooltipNode.innerHTML = item.docHTML;
            } else if (item.docText) {
              tooltipNode.textContent = item.docText;
            }
            if (!tooltipNode.parentNode)
              document.body.appendChild(tooltipNode);
            var popup = this.popup;
            var rect = popup.container.getBoundingClientRect();
            tooltipNode.style.top = popup.container.style.top;
            tooltipNode.style.bottom = popup.container.style.bottom;
            tooltipNode.style.display = "block";
            if (window.innerWidth - rect.right < 320) {
              if (rect.left < 320) {
                if (popup.isTopdown) {
                  tooltipNode.style.top = rect.bottom + "px";
                  tooltipNode.style.left = rect.left + "px";
                  tooltipNode.style.right = "";
                  tooltipNode.style.bottom = "";
                } else {
                  tooltipNode.style.top = popup.container.offsetTop - tooltipNode.offsetHeight + "px";
                  tooltipNode.style.left = rect.left + "px";
                  tooltipNode.style.right = "";
                  tooltipNode.style.bottom = "";
                }
              } else {
                tooltipNode.style.right = window.innerWidth - rect.left + "px";
                tooltipNode.style.left = "";
              }
            } else {
              tooltipNode.style.left = rect.right + 1 + "px";
              tooltipNode.style.right = "";
            }
          };
          this.hideDocTooltip = function() {
            this.tooltipTimer.cancel();
            if (!this.tooltipNode)
              return;
            var el = this.tooltipNode;
            if (!this.editor.isFocused() && document.activeElement == el)
              this.editor.focus();
            this.tooltipNode = null;
            if (el.parentNode)
              el.parentNode.removeChild(el);
          };
          this.onTooltipClick = function(e10) {
            var a3 = e10.target;
            while (a3 && a3 != this.tooltipNode) {
              if (a3.nodeName == "A" && a3.href) {
                a3.rel = "noreferrer";
                a3.target = "_blank";
                break;
              }
              a3 = a3.parentNode;
            }
          };
          this.destroy = function() {
            this.detach();
            if (this.popup) {
              this.popup.destroy();
              var el = this.popup.container;
              if (el && el.parentNode)
                el.parentNode.removeChild(el);
            }
            if (this.editor && this.editor.completer == this)
              this.editor.completer == null;
            this.popup = null;
          };
        }).call(Autocomplete.prototype);
        Autocomplete.for = function(editor) {
          if (editor.completer) {
            return editor.completer;
          }
          if (config2.get("sharedPopups")) {
            if (!Autocomplete.$shared)
              Autocomplete.$sharedInstance = new Autocomplete();
            editor.completer = Autocomplete.$sharedInstance;
          } else {
            editor.completer = new Autocomplete();
            editor.once("destroy", function(e10, editor2) {
              editor2.completer.destroy();
            });
          }
          return editor.completer;
        };
        Autocomplete.startCommand = {
          name: "startAutocomplete",
          exec: function(editor, options) {
            var completer = Autocomplete.for(editor);
            completer.autoInsert = false;
            completer.autoSelect = true;
            completer.showPopup(editor, options);
            completer.cancelContextMenu();
          },
          bindKey: "Ctrl-Space|Ctrl-Shift-Space|Alt-Space"
        };
        var FilteredList = function(array, filterText) {
          this.all = array;
          this.filtered = array;
          this.filterText = filterText || "";
          this.exactMatch = false;
        };
        (function() {
          this.setFilter = function(str) {
            if (str.length > this.filterText && str.lastIndexOf(this.filterText, 0) === 0)
              var matches = this.filtered;
            else
              var matches = this.all;
            this.filterText = str;
            matches = this.filterCompletions(matches, this.filterText);
            matches = matches.sort(function(a3, b2) {
              return b2.exactMatch - a3.exactMatch || b2.$score - a3.$score || (a3.caption || a3.value).localeCompare(b2.caption || b2.value);
            });
            var prev = null;
            matches = matches.filter(function(item) {
              var caption = item.snippet || item.caption || item.value;
              if (caption === prev)
                return false;
              prev = caption;
              return true;
            });
            this.filtered = matches;
          };
          this.filterCompletions = function(items, needle) {
            var results = [];
            var upper = needle.toUpperCase();
            var lower = needle.toLowerCase();
            loop:
              for (var i6 = 0, item; item = items[i6]; i6++) {
                var caption = item.caption || item.value || item.snippet;
                if (!caption)
                  continue;
                var lastIndex = -1;
                var matchMask = 0;
                var penalty = 0;
                var index, distance;
                if (this.exactMatch) {
                  if (needle !== caption.substr(0, needle.length))
                    continue loop;
                } else {
                  var fullMatchIndex = caption.toLowerCase().indexOf(lower);
                  if (fullMatchIndex > -1) {
                    penalty = fullMatchIndex;
                  } else {
                    for (var j = 0; j < needle.length; j++) {
                      var i1 = caption.indexOf(lower[j], lastIndex + 1);
                      var i22 = caption.indexOf(upper[j], lastIndex + 1);
                      index = i1 >= 0 ? i22 < 0 || i1 < i22 ? i1 : i22 : i22;
                      if (index < 0)
                        continue loop;
                      distance = index - lastIndex - 1;
                      if (distance > 0) {
                        if (lastIndex === -1)
                          penalty += 10;
                        penalty += distance;
                        matchMask = matchMask | 1 << j;
                      }
                      lastIndex = index;
                    }
                  }
                }
                item.matchMask = matchMask;
                item.exactMatch = penalty ? 0 : 1;
                item.$score = (item.score || 0) - penalty;
                results.push(item);
              }
            return results;
          };
        }).call(FilteredList.prototype);
        exports2.Autocomplete = Autocomplete;
        exports2.FilteredList = FilteredList;
      });
      ace.define("ace/autocomplete/text_completer", ["require", "exports", "module", "ace/range"], function(require3, exports2, module2) {
        var Range = require3("../range").Range;
        var splitRegex = /[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;
        function getWordIndex(doc, pos) {
          var textBefore = doc.getTextRange(Range.fromPoints({ row: 0, column: 0 }, pos));
          return textBefore.split(splitRegex).length - 1;
        }
        function wordDistance(doc, pos) {
          var prefixPos = getWordIndex(doc, pos);
          var words = doc.getValue().split(splitRegex);
          var wordScores = /* @__PURE__ */ Object.create(null);
          var currentWord = words[prefixPos];
          words.forEach(function(word, idx) {
            if (!word || word === currentWord)
              return;
            var distance = Math.abs(prefixPos - idx);
            var score = words.length - distance;
            if (wordScores[word]) {
              wordScores[word] = Math.max(score, wordScores[word]);
            } else {
              wordScores[word] = score;
            }
          });
          return wordScores;
        }
        exports2.getCompletions = function(editor, session, pos, prefix, callback) {
          var wordScore = wordDistance(session, pos);
          var wordList = Object.keys(wordScore);
          callback(null, wordList.map(function(word) {
            return {
              caption: word,
              value: word,
              score: wordScore[word],
              meta: "local"
            };
          }));
        };
      });
      ace.define("ace/ext/language_tools", ["require", "exports", "module", "ace/snippets", "ace/autocomplete", "ace/config", "ace/lib/lang", "ace/autocomplete/util", "ace/autocomplete/text_completer", "ace/editor", "ace/config"], function(require3, exports2, module2) {
        "use strict";
        var snippetManager = require3("../snippets").snippetManager;
        var Autocomplete = require3("../autocomplete").Autocomplete;
        var config2 = require3("../config");
        var lang = require3("../lib/lang");
        var util = require3("../autocomplete/util");
        var textCompleter = require3("../autocomplete/text_completer");
        var keyWordCompleter = {
          getCompletions: function(editor, session, pos, prefix, callback) {
            if (session.$mode.completer) {
              return session.$mode.completer.getCompletions(editor, session, pos, prefix, callback);
            }
            var state = editor.session.getState(pos.row);
            var completions = session.$mode.getCompletions(state, session, pos, prefix);
            callback(null, completions);
          }
        };
        var transformSnippetTooltip = function(str) {
          var record = {};
          return str.replace(/\${(\d+)(:(.*?))?}/g, function(_2, p1, p2, p3) {
            return record[p1] = p3 || "";
          }).replace(/\$(\d+?)/g, function(_2, p1) {
            return record[p1];
          });
        };
        var snippetCompleter = {
          getCompletions: function(editor, session, pos, prefix, callback) {
            var scopes = [];
            var token = session.getTokenAt(pos.row, pos.column);
            if (token && token.type.match(/(tag-name|tag-open|tag-whitespace|attribute-name|attribute-value)\.xml$/))
              scopes.push("html-tag");
            else
              scopes = snippetManager.getActiveScopes(editor);
            var snippetMap = snippetManager.snippetMap;
            var completions = [];
            scopes.forEach(function(scope) {
              var snippets = snippetMap[scope] || [];
              for (var i6 = snippets.length; i6--; ) {
                var s5 = snippets[i6];
                var caption = s5.name || s5.tabTrigger;
                if (!caption)
                  continue;
                completions.push({
                  caption,
                  snippet: s5.content,
                  meta: s5.tabTrigger && !s5.name ? s5.tabTrigger + "\u21E5 " : "snippet",
                  type: "snippet"
                });
              }
            }, this);
            callback(null, completions);
          },
          getDocTooltip: function(item) {
            if (item.type == "snippet" && !item.docHTML) {
              item.docHTML = [
                "<b>",
                lang.escapeHTML(item.caption),
                "</b>",
                "<hr></hr>",
                lang.escapeHTML(transformSnippetTooltip(item.snippet))
              ].join("");
            }
          }
        };
        var completers = [snippetCompleter, textCompleter, keyWordCompleter];
        exports2.setCompleters = function(val) {
          completers.length = 0;
          if (val)
            completers.push.apply(completers, val);
        };
        exports2.addCompleter = function(completer) {
          completers.push(completer);
        };
        exports2.textCompleter = textCompleter;
        exports2.keyWordCompleter = keyWordCompleter;
        exports2.snippetCompleter = snippetCompleter;
        var expandSnippet = {
          name: "expandSnippet",
          exec: function(editor) {
            return snippetManager.expandWithTab(editor);
          },
          bindKey: "Tab"
        };
        var onChangeMode = function(e10, editor) {
          loadSnippetsForMode(editor.session.$mode);
        };
        var loadSnippetsForMode = function(mode) {
          if (typeof mode == "string")
            mode = config2.$modes[mode];
          if (!mode)
            return;
          if (!snippetManager.files)
            snippetManager.files = {};
          loadSnippetFile(mode.$id, mode.snippetFileId);
          if (mode.modes)
            mode.modes.forEach(loadSnippetsForMode);
        };
        var loadSnippetFile = function(id, snippetFilePath) {
          if (!snippetFilePath || !id || snippetManager.files[id])
            return;
          snippetManager.files[id] = {};
          config2.loadModule(snippetFilePath, function(m2) {
            if (!m2)
              return;
            snippetManager.files[id] = m2;
            if (!m2.snippets && m2.snippetText)
              m2.snippets = snippetManager.parseSnippetFile(m2.snippetText);
            snippetManager.register(m2.snippets || [], m2.scope);
            if (m2.includeScopes) {
              snippetManager.snippetMap[m2.scope].includeScopes = m2.includeScopes;
              m2.includeScopes.forEach(function(x2) {
                loadSnippetsForMode("ace/mode/" + x2);
              });
            }
          });
        };
        var doLiveAutocomplete = function(e10) {
          var editor = e10.editor;
          var hasCompleter = editor.completer && editor.completer.activated;
          if (e10.command.name === "backspace") {
            if (hasCompleter && !util.getCompletionPrefix(editor))
              editor.completer.detach();
          } else if (e10.command.name === "insertstring") {
            var prefix = util.getCompletionPrefix(editor);
            if (prefix && !hasCompleter) {
              var completer = Autocomplete.for(editor);
              completer.autoInsert = false;
              completer.showPopup(editor);
            }
          }
        };
        var Editor = require3("../editor").Editor;
        require3("../config").defineOptions(Editor.prototype, "editor", {
          enableBasicAutocompletion: {
            set: function(val) {
              if (val) {
                if (!this.completers)
                  this.completers = Array.isArray(val) ? val : completers;
                this.commands.addCommand(Autocomplete.startCommand);
              } else {
                this.commands.removeCommand(Autocomplete.startCommand);
              }
            },
            value: false
          },
          enableLiveAutocompletion: {
            set: function(val) {
              if (val) {
                if (!this.completers)
                  this.completers = Array.isArray(val) ? val : completers;
                this.commands.on("afterExec", doLiveAutocomplete);
              } else {
                this.commands.removeListener("afterExec", doLiveAutocomplete);
              }
            },
            value: false
          },
          enableSnippets: {
            set: function(val) {
              if (val) {
                this.commands.addCommand(expandSnippet);
                this.on("changeMode", onChangeMode);
                onChangeMode(null, this);
              } else {
                this.commands.removeCommand(expandSnippet);
                this.off("changeMode", onChangeMode);
              }
            },
            value: false
          }
        });
      });
      (function() {
        ace.require(["ace/ext/language_tools"], function(m2) {
          if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = m2;
          }
        });
      })();
    }
  });

  // node_modules/@creativebulma/bulma-collapsible/dist/js/bulma-collapsible.min.js
  var require_bulma_collapsible_min = __commonJS({
    "node_modules/@creativebulma/bulma-collapsible/dist/js/bulma-collapsible.min.js"(exports, module) {
      !function webpackUniversalModuleDefinition(e10, t5) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t5() : "function" == typeof define && define.amd ? define([], t5) : "object" == typeof exports ? exports.bulmaCollapsible = t5() : e10.bulmaCollapsible = t5();
      }(window, function() {
        return function(e10) {
          var t5 = {};
          function __webpack_require__(n9) {
            if (t5[n9])
              return t5[n9].exports;
            var r5 = t5[n9] = { i: n9, l: false, exports: {} };
            return e10[n9].call(r5.exports, r5, r5.exports, __webpack_require__), r5.l = true, r5.exports;
          }
          return __webpack_require__.m = e10, __webpack_require__.c = t5, __webpack_require__.d = function(e11, t6, n9) {
            __webpack_require__.o(e11, t6) || Object.defineProperty(e11, t6, { enumerable: true, get: n9 });
          }, __webpack_require__.r = function(e11) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e11, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e11, "__esModule", { value: true });
          }, __webpack_require__.t = function(e11, t6) {
            if (1 & t6 && (e11 = __webpack_require__(e11)), 8 & t6)
              return e11;
            if (4 & t6 && "object" == typeof e11 && e11 && e11.__esModule)
              return e11;
            var n9 = /* @__PURE__ */ Object.create(null);
            if (__webpack_require__.r(n9), Object.defineProperty(n9, "default", { enumerable: true, value: e11 }), 2 & t6 && "string" != typeof e11)
              for (var r5 in e11)
                __webpack_require__.d(n9, r5, function(t7) {
                  return e11[t7];
                }.bind(null, r5));
            return n9;
          }, __webpack_require__.n = function(e11) {
            var t6 = e11 && e11.__esModule ? function getDefault() {
              return e11.default;
            } : function getModuleExports() {
              return e11;
            };
            return __webpack_require__.d(t6, "a", t6), t6;
          }, __webpack_require__.o = function(e11, t6) {
            return Object.prototype.hasOwnProperty.call(e11, t6);
          }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 12);
        }([function(e10, t5) {
          function _getPrototypeOf(t6) {
            return e10.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(e11) {
              return e11.__proto__ || Object.getPrototypeOf(e11);
            }, _getPrototypeOf(t6);
          }
          e10.exports = _getPrototypeOf;
        }, function(e10, t5) {
          e10.exports = function _classCallCheck(e11, t6) {
            if (!(e11 instanceof t6))
              throw new TypeError("Cannot call a class as a function");
          };
        }, function(e10, t5) {
          function _defineProperties(e11, t6) {
            for (var n9 = 0; n9 < t6.length; n9++) {
              var r5 = t6[n9];
              r5.enumerable = r5.enumerable || false, r5.configurable = true, "value" in r5 && (r5.writable = true), Object.defineProperty(e11, r5.key, r5);
            }
          }
          e10.exports = function _createClass(e11, t6, n9) {
            return t6 && _defineProperties(e11.prototype, t6), n9 && _defineProperties(e11, n9), e11;
          };
        }, function(e10, t5) {
          e10.exports = function _assertThisInitialized(e11) {
            if (void 0 === e11)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e11;
          };
        }, function(e10, t5, n9) {
          var r5 = n9(8);
          e10.exports = function _objectSpread(e11) {
            for (var t6 = 1; t6 < arguments.length; t6++) {
              var n10 = null != arguments[t6] ? arguments[t6] : {}, o8 = Object.keys(n10);
              "function" == typeof Object.getOwnPropertySymbols && (o8 = o8.concat(Object.getOwnPropertySymbols(n10).filter(function(e12) {
                return Object.getOwnPropertyDescriptor(n10, e12).enumerable;
              }))), o8.forEach(function(t7) {
                r5(e11, t7, n10[t7]);
              });
            }
            return e11;
          };
        }, function(e10, t5, n9) {
          var r5 = n9(6), o8 = n9(3);
          e10.exports = function _possibleConstructorReturn(e11, t6) {
            return !t6 || "object" !== r5(t6) && "function" != typeof t6 ? o8(e11) : t6;
          };
        }, function(e10, t5) {
          function _typeof2(e11) {
            return (_typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof22(e12) {
              return typeof e12;
            } : function _typeof22(e12) {
              return e12 && "function" == typeof Symbol && e12.constructor === Symbol && e12 !== Symbol.prototype ? "symbol" : typeof e12;
            })(e11);
          }
          function _typeof(t6) {
            return "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? e10.exports = _typeof = function _typeof3(e11) {
              return _typeof2(e11);
            } : e10.exports = _typeof = function _typeof3(e11) {
              return e11 && "function" == typeof Symbol && e11.constructor === Symbol && e11 !== Symbol.prototype ? "symbol" : _typeof2(e11);
            }, _typeof(t6);
          }
          e10.exports = _typeof;
        }, function(e10, t5, n9) {
          var r5 = n9(11);
          e10.exports = function _inherits(e11, t6) {
            if ("function" != typeof t6 && null !== t6)
              throw new TypeError("Super expression must either be null or a function");
            e11.prototype = Object.create(t6 && t6.prototype, { constructor: { value: e11, writable: true, configurable: true } }), t6 && r5(e11, t6);
          };
        }, function(e10, t5) {
          e10.exports = function _defineProperty(e11, t6, n9) {
            return t6 in e11 ? Object.defineProperty(e11, t6, { value: n9, enumerable: true, configurable: true, writable: true }) : e11[t6] = n9, e11;
          };
        }, function(e10, t5, n9) {
          n9(0);
          var r5 = n9(10);
          function _get(t6, n10, o8) {
            return "undefined" != typeof Reflect && Reflect.get ? e10.exports = _get = Reflect.get : e10.exports = _get = function _get2(e11, t7, n11) {
              var o9 = r5(e11, t7);
              if (o9) {
                var i6 = Object.getOwnPropertyDescriptor(o9, t7);
                return i6.get ? i6.get.call(n11) : i6.value;
              }
            }, _get(t6, n10, o8 || t6);
          }
          e10.exports = _get;
        }, function(e10, t5, n9) {
          var r5 = n9(0);
          e10.exports = function _superPropBase(e11, t6) {
            for (; !Object.prototype.hasOwnProperty.call(e11, t6) && null !== (e11 = r5(e11)); )
              ;
            return e11;
          };
        }, function(e10, t5) {
          function _setPrototypeOf(t6, n9) {
            return e10.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(e11, t7) {
              return e11.__proto__ = t7, e11;
            }, _setPrototypeOf(t6, n9);
          }
          e10.exports = _setPrototypeOf;
        }, function(e10, t5, n9) {
          "use strict";
          n9.r(t5);
          var r5 = n9(1), o8 = n9.n(r5), i6 = n9(2), s5 = n9.n(i6), l7 = n9(5), a3 = n9.n(l7), c2 = n9(3), u2 = n9.n(c2), f2 = n9(0), p2 = n9.n(f2), d3 = n9(9), h5 = n9.n(d3), _2 = n9(7), y2 = n9.n(_2), v2 = n9(4), m2 = n9.n(v2), b2 = function() {
            function EventEmitter() {
              var e11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
              o8()(this, EventEmitter), this._listeners = new Map(e11), this._middlewares = /* @__PURE__ */ new Map();
            }
            return s5()(EventEmitter, [{ key: "listenerCount", value: function listenerCount(e11) {
              return this._listeners.has(e11) ? this._listeners.get(e11).length : 0;
            } }, { key: "removeListeners", value: function removeListeners() {
              var e11 = this, t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, n10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              null !== t6 ? Array.isArray(t6) ? name.forEach(function(t7) {
                return e11.removeListeners(t7, n10);
              }) : (this._listeners.delete(t6), n10 && this.removeMiddleware(t6)) : this._listeners = /* @__PURE__ */ new Map();
            } }, { key: "middleware", value: function middleware(e11, t6) {
              var n10 = this;
              Array.isArray(e11) ? name.forEach(function(e12) {
                return n10.middleware(e12, t6);
              }) : (Array.isArray(this._middlewares.get(e11)) || this._middlewares.set(e11, []), this._middlewares.get(e11).push(t6));
            } }, { key: "removeMiddleware", value: function removeMiddleware() {
              var e11 = this, t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
              null !== t6 ? Array.isArray(t6) ? name.forEach(function(t7) {
                return e11.removeMiddleware(t7);
              }) : this._middlewares.delete(t6) : this._middlewares = /* @__PURE__ */ new Map();
            } }, { key: "on", value: function on(e11, t6) {
              var n10 = this, r6 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              if (Array.isArray(e11))
                e11.forEach(function(e12) {
                  return n10.on(e12, t6);
                });
              else {
                var o9 = (e11 = e11.toString()).split(/,|, | /);
                o9.length > 1 ? o9.forEach(function(e12) {
                  return n10.on(e12, t6);
                }) : (Array.isArray(this._listeners.get(e11)) || this._listeners.set(e11, []), this._listeners.get(e11).push({ once: r6, callback: t6 }));
              }
            } }, { key: "once", value: function once(e11, t6) {
              this.on(e11, t6, true);
            } }, { key: "emit", value: function emit(e11, t6) {
              var n10 = this, r6 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              e11 = e11.toString();
              var o9 = this._listeners.get(e11), i7 = null, s6 = 0, l8 = r6;
              if (Array.isArray(o9))
                for (o9.forEach(function(a4, c3) {
                  r6 || (i7 = n10._middlewares.get(e11), Array.isArray(i7) ? (i7.forEach(function(n11) {
                    n11(t6, function() {
                      var e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                      null !== e12 && (t6 = e12), s6++;
                    }, e11);
                  }), s6 >= i7.length && (l8 = true)) : l8 = true), l8 && (a4.once && (o9[c3] = null), a4.callback(t6));
                }); -1 !== o9.indexOf(null); )
                  o9.splice(o9.indexOf(null), 1);
            } }]), EventEmitter;
          }(), g2 = n9(8), w2 = n9.n(g2), k2 = n9(6), O = n9.n(k2), E2 = function isFunction(e11) {
            return "function" == typeof e11;
          }, x2 = function isString(e11) {
            return "string" == typeof e11 || !!e11 && "object" === O()(e11) && "[object String]" === Object.prototype.toString.call(e11);
          }, P2 = function isNode(e11) {
            try {
              return Node.prototype.cloneNode.call(e11, false), true;
            } catch (e12) {
              return false;
            }
          }, S3 = function isNodeList(e11) {
            return NodeList.prototype.isPrototypeOf(e11);
          }, j = /^(?:f(?:alse)?|no?|0+)$/i, C2 = function uuid() {
            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") + ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(e11) {
              return (e11 ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e11 / 4).toString(16);
            });
          }, A2 = function detectSupportsPassive() {
            var e11 = false;
            if ("undefined" != typeof window && "function" == typeof window.addEventListener) {
              var t6 = Object.defineProperty({}, "passive", { get: function get2() {
                return e11 = true, true;
              } }), n10 = function noop() {
              };
              window.addEventListener("testPassive", n10, t6), window.removeEventListener("testPassive", n10, t6);
            }
            return e11;
          }, T2 = function querySelectorAll(e11, t6) {
            return E2(e11) ? e11(t6 || ("undefined" != typeof document ? document : null)) : x2(e11) ? t6 && P2(t6) ? t6.querySelectorAll(e11) : "undefined" != typeof document ? document.querySelectorAll(e11) : null : P2(e11) ? [e11] : S3(e11) ? e11 : null;
          }, q = function optionsFromDataset(e11) {
            var t6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return P2(e11) && e11.dataset ? Object.keys(e11.dataset).filter(function(e12) {
              return Object.keys(t6).includes(e12);
            }).reduce(function(t7, n10) {
              return m2()({}, t7, w2()({}, n10, e11.dataset[n10]));
            }, {}) : {};
          };
          "undefined" == typeof Node || Node.prototype.on || (Node.prototype.on = function(e11, t6) {
            var n10 = this;
            return Array.isArray(e11) || (e11 = e11.split(" ")), e11.forEach(function(e12) {
              n10.addEventListener(e12.trim(), t6, !!A2() && { passive: false });
            }), this;
          }), "undefined" == typeof NodeList || NodeList.prototype.on || (NodeList.prototype.on = function(e11, t6) {
            return this.forEach(function(n10) {
              n10.on(e11, t6);
            }), this;
          }), "undefined" == typeof Node || Node.prototype.off || (Node.prototype.off = function(e11, t6) {
            var n10 = this;
            return Array.isArray(e11) || (e11 = e11.split(" ")), e11.forEach(function(e12) {
              n10.removeEventListener(e12.trim(), t6, !!A2() && { passive: false });
            }), this;
          }), "undefined" == typeof NodeList || NodeList.prototype.off || (NodeList.prototype.off = function(e11, t6) {
            return this.forEach(function(n10) {
              n10.off(e11, t6);
            }), this;
          });
          var L2 = function(e11) {
            function Component(e12) {
              var t6, n10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r6 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              if (o8()(this, Component), (t6 = a3()(this, p2()(Component).call(this))).element = x2(e12) ? t6.options.container.querySelector(e12) : e12, !t6.element)
                throw new Error("An invalid selector or non-DOM node has been provided for ".concat(t6.constructor.name, "."));
              return t6.element[t6.constructor.name] = t6.constructor._interface.bind(u2()(t6)), t6.element[t6.constructor.name].Constructor = t6.constructor.name, t6.id = C2(t6.constructor.name + "-"), t6.options = m2()({}, r6, n10, q(t6.element, r6)), t6;
            }
            return y2()(Component, e11), s5()(Component, null, [{ key: "attach", value: function attach() {
              var e12 = this, t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, n10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r6 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o9 = new Array();
              return null === t6 ? o9 : (n10 = m2()({}, r6, n10, q(this.element, r6)), (T2(t6, n10.container) || []).forEach(function(r7) {
                void 0 === r7[e12.constructor.name] ? o9.push(new e12(r7, m2()({ selector: t6 }, n10))) : o9.push(r7[e12.constructor.name]);
              }), o9);
            } }, { key: "_interface", value: function _interface() {
              var e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              if ("string" == typeof e12) {
                if (void 0 === this[e12])
                  throw new TypeError('No method named "'.concat(e12, '"'));
                return this[e12](e12);
              }
              return this;
            } }]), Component;
          }(b2), N2 = { allowMultiple: false, container: "undefined" != typeof document ? document : null };
          n9.d(t5, "default", function() {
            return M2;
          });
          var M2 = function(e11) {
            function bulmaCollapsible2(e12) {
              var t6, n10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              return o8()(this, bulmaCollapsible2), (t6 = a3()(this, p2()(bulmaCollapsible2).call(this, e12, n10, N2))).onTriggerClick = t6.onTriggerClick.bind(u2()(t6)), t6.onTransitionEnd = t6.onTransitionEnd.bind(u2()(t6)), t6._init(), t6;
            }
            return y2()(bulmaCollapsible2, e11), s5()(bulmaCollapsible2, [{ key: "_init", value: function _init() {
              if (this._originalHeight = this.element.style.height, this._parent = this.element.dataset.parent, this._parent) {
                var e12 = this.options.container.querySelector("#".concat(this._parent));
                this._siblings = T2(this.options.selector, e12) || [];
              }
              this._triggers = this.options.container.querySelectorAll('[data-action="collapse"][href="#'.concat(this.element.id, '"], [data-action="collapse"][data-target="').concat(this.element.id, '"]')) || null, this._triggers && this._triggers.on("click touch", this.onTriggerClick), this._transitionEvent = function whichTransitionEvent() {
                var e13 = document.createElement("fakeelement"), t6 = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
                for (var n10 in t6)
                  if (void 0 !== e13.style[n10])
                    return t6[n10];
              }(), this._transitionEvent && this.element.on(this._transitionEvent, this.onTransitionEnd), this.element.classList.contains("is-active") ? this.expand() : this.collapse();
            } }, { key: "destroy", value: function destroy() {
              this._triggers && this._triggers.off("click touch", this.onTriggerClick, false);
            } }, { key: "collapsed", value: function collapsed() {
              return this._collapsed;
            } }, { key: "expand", value: function expand() {
              var e12 = this;
              (void 0 === this._collapsed || this._collapsed) && (this.emit("before:expand", this), this._collapsed = false, this._parent && !function BooleanParse(e13) {
                return !j.test(e13) && !!e13;
              }(this.options.allowMultiple) && this._siblings.forEach(function(t6) {
                t6.isSameNode(e12.element) || t6.bulmaCollapsible && t6.bulmaCollapsible("close");
              }), this.element.style.height = this.element.scrollHeight + "px", this.element.classList.add("is-active"), this.element.setAttribute("aria-expanded", true), this._triggers && this._triggers.forEach(function(e13) {
                e13.classList.add("is-active");
              }), this.emit("after:expand", this));
            } }, { key: "open", value: function open() {
              this.expand();
            } }, { key: "collapse", value: function collapse() {
              void 0 !== this._collapsed && this._collapsed || (this.emit("before:collapse", this), this._collapsed = true, this.element.style.height = 0, this.element.classList.remove("is-active"), this.element.setAttribute("aria-expanded", false), this._triggers && this._triggers.forEach(function(e12) {
                e12.classList.remove("is-active");
              }), this.emit("after:collapse", this));
            } }, { key: "close", value: function close() {
              this.collapse();
            } }, { key: "onTriggerClick", value: function onTriggerClick(e12) {
              e12.preventDefault(), this.collapsed() ? (e12.currentTarget.classList.add("is-active"), this.expand()) : (e12.currentTarget.classList.remove("is-active"), this.collapse());
            } }, { key: "onTransitionEnd", value: function onTransitionEnd(e12) {
              this._collapsed || (this.element.style.height = this._originalHeight);
            } }], [{ key: "attach", value: function attach() {
              var e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".is-collapsible", t6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              return h5()(p2()(bulmaCollapsible2), "attach", this).call(this, e12, t6, N2);
            } }]), bulmaCollapsible2;
          }(L2);
        }]).default;
      });
    }
  });

  // ui/utils/bind.ts
  function bind(target, propertyKey, descriptor) {
    if (!descriptor || typeof descriptor.value !== "function") {
      throw new TypeError(`Only methods can be decorated with @bind. <${propertyKey}> is not a method!`);
    }
    return {
      configurable: true,
      get() {
        const bound = descriptor.value.bind(this);
        Object.defineProperty(this, propertyKey, {
          value: bound,
          configurable: true,
          writable: true
        });
        return bound;
      }
    };
  }
  var bind_default = bind;

  // node_modules/@lit/reactive-element/css-tag.js
  var t = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var e = Symbol();
  var n = /* @__PURE__ */ new WeakMap();
  var s = class {
    constructor(t5, n9, s5) {
      if (this._$cssResult$ = true, s5 !== e)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t5, this.t = n9;
    }
    get styleSheet() {
      let e10 = this.o;
      const s5 = this.t;
      if (t && void 0 === e10) {
        const t5 = void 0 !== s5 && 1 === s5.length;
        t5 && (e10 = n.get(s5)), void 0 === e10 && ((this.o = e10 = new CSSStyleSheet()).replaceSync(this.cssText), t5 && n.set(s5, e10));
      }
      return e10;
    }
    toString() {
      return this.cssText;
    }
  };
  var o = (t5) => new s("string" == typeof t5 ? t5 : t5 + "", void 0, e);
  var i = (e10, n9) => {
    t ? e10.adoptedStyleSheets = n9.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet) : n9.forEach((t5) => {
      const n10 = document.createElement("style"), s5 = window.litNonce;
      void 0 !== s5 && n10.setAttribute("nonce", s5), n10.textContent = t5.cssText, e10.appendChild(n10);
    });
  };
  var S = t ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
    let e10 = "";
    for (const n9 of t6.cssRules)
      e10 += n9.cssText;
    return o(e10);
  })(t5) : t5;

  // node_modules/@lit/reactive-element/reactive-element.js
  var s2;
  var e2 = window.trustedTypes;
  var r2 = e2 ? e2.emptyScript : "";
  var h = window.reactiveElementPolyfillSupport;
  var o2 = { toAttribute(t5, i6) {
    switch (i6) {
      case Boolean:
        t5 = t5 ? r2 : null;
        break;
      case Object:
      case Array:
        t5 = null == t5 ? t5 : JSON.stringify(t5);
    }
    return t5;
  }, fromAttribute(t5, i6) {
    let s5 = t5;
    switch (i6) {
      case Boolean:
        s5 = null !== t5;
        break;
      case Number:
        s5 = null === t5 ? null : Number(t5);
        break;
      case Object:
      case Array:
        try {
          s5 = JSON.parse(t5);
        } catch (t6) {
          s5 = null;
        }
    }
    return s5;
  } };
  var n2 = (t5, i6) => i6 !== t5 && (i6 == i6 || t5 == t5);
  var l = { attribute: true, type: String, converter: o2, reflect: false, hasChanged: n2 };
  var a = class extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this.u();
    }
    static addInitializer(t5) {
      var i6;
      null !== (i6 = this.h) && void 0 !== i6 || (this.h = []), this.h.push(t5);
    }
    static get observedAttributes() {
      this.finalize();
      const t5 = [];
      return this.elementProperties.forEach((i6, s5) => {
        const e10 = this._$Ep(s5, i6);
        void 0 !== e10 && (this._$Ev.set(e10, s5), t5.push(e10));
      }), t5;
    }
    static createProperty(t5, i6 = l) {
      if (i6.state && (i6.attribute = false), this.finalize(), this.elementProperties.set(t5, i6), !i6.noAccessor && !this.prototype.hasOwnProperty(t5)) {
        const s5 = "symbol" == typeof t5 ? Symbol() : "__" + t5, e10 = this.getPropertyDescriptor(t5, s5, i6);
        void 0 !== e10 && Object.defineProperty(this.prototype, t5, e10);
      }
    }
    static getPropertyDescriptor(t5, i6, s5) {
      return { get() {
        return this[i6];
      }, set(e10) {
        const r5 = this[t5];
        this[i6] = e10, this.requestUpdate(t5, r5, s5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t5) {
      return this.elementProperties.get(t5) || l;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized"))
        return false;
      this.finalized = true;
      const t5 = Object.getPrototypeOf(this);
      if (t5.finalize(), this.elementProperties = new Map(t5.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const t6 = this.properties, i6 = [...Object.getOwnPropertyNames(t6), ...Object.getOwnPropertySymbols(t6)];
        for (const s5 of i6)
          this.createProperty(s5, t6[s5]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i6) {
      const s5 = [];
      if (Array.isArray(i6)) {
        const e10 = new Set(i6.flat(1 / 0).reverse());
        for (const i7 of e10)
          s5.unshift(S(i7));
      } else
        void 0 !== i6 && s5.push(S(i6));
      return s5;
    }
    static _$Ep(t5, i6) {
      const s5 = i6.attribute;
      return false === s5 ? void 0 : "string" == typeof s5 ? s5 : "string" == typeof t5 ? t5.toLowerCase() : void 0;
    }
    u() {
      var t5;
      this._$E_ = new Promise((t6) => this.enableUpdating = t6), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t5 = this.constructor.h) || void 0 === t5 || t5.forEach((t6) => t6(this));
    }
    addController(t5) {
      var i6, s5;
      (null !== (i6 = this._$ES) && void 0 !== i6 ? i6 : this._$ES = []).push(t5), void 0 !== this.renderRoot && this.isConnected && (null === (s5 = t5.hostConnected) || void 0 === s5 || s5.call(t5));
    }
    removeController(t5) {
      var i6;
      null === (i6 = this._$ES) || void 0 === i6 || i6.splice(this._$ES.indexOf(t5) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t5, i6) => {
        this.hasOwnProperty(i6) && (this._$Ei.set(i6, this[i6]), delete this[i6]);
      });
    }
    createRenderRoot() {
      var t5;
      const s5 = null !== (t5 = this.shadowRoot) && void 0 !== t5 ? t5 : this.attachShadow(this.constructor.shadowRootOptions);
      return i(s5, this.constructor.elementStyles), s5;
    }
    connectedCallback() {
      var t5;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
        var i6;
        return null === (i6 = t6.hostConnected) || void 0 === i6 ? void 0 : i6.call(t6);
      });
    }
    enableUpdating(t5) {
    }
    disconnectedCallback() {
      var t5;
      null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
        var i6;
        return null === (i6 = t6.hostDisconnected) || void 0 === i6 ? void 0 : i6.call(t6);
      });
    }
    attributeChangedCallback(t5, i6, s5) {
      this._$AK(t5, s5);
    }
    _$EO(t5, i6, s5 = l) {
      var e10, r5;
      const h5 = this.constructor._$Ep(t5, s5);
      if (void 0 !== h5 && true === s5.reflect) {
        const n9 = (null !== (r5 = null === (e10 = s5.converter) || void 0 === e10 ? void 0 : e10.toAttribute) && void 0 !== r5 ? r5 : o2.toAttribute)(i6, s5.type);
        this._$El = t5, null == n9 ? this.removeAttribute(h5) : this.setAttribute(h5, n9), this._$El = null;
      }
    }
    _$AK(t5, i6) {
      var s5, e10;
      const r5 = this.constructor, h5 = r5._$Ev.get(t5);
      if (void 0 !== h5 && this._$El !== h5) {
        const t6 = r5.getPropertyOptions(h5), n9 = t6.converter, l7 = null !== (e10 = null !== (s5 = null == n9 ? void 0 : n9.fromAttribute) && void 0 !== s5 ? s5 : "function" == typeof n9 ? n9 : null) && void 0 !== e10 ? e10 : o2.fromAttribute;
        this._$El = h5, this[h5] = l7(i6, t6.type), this._$El = null;
      }
    }
    requestUpdate(t5, i6, s5) {
      let e10 = true;
      void 0 !== t5 && (((s5 = s5 || this.constructor.getPropertyOptions(t5)).hasChanged || n2)(this[t5], i6) ? (this._$AL.has(t5) || this._$AL.set(t5, i6), true === s5.reflect && this._$El !== t5 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t5, s5))) : e10 = false), !this.isUpdatePending && e10 && (this._$E_ = this._$Ej());
    }
    _$Ej() {
      return __async(this, null, function* () {
        this.isUpdatePending = true;
        try {
          yield this._$E_;
        } catch (t6) {
          Promise.reject(t6);
        }
        const t5 = this.scheduleUpdate();
        return null != t5 && (yield t5), !this.isUpdatePending;
      });
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t5;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((t6, i7) => this[i7] = t6), this._$Ei = void 0);
      let i6 = false;
      const s5 = this._$AL;
      try {
        i6 = this.shouldUpdate(s5), i6 ? (this.willUpdate(s5), null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
          var i7;
          return null === (i7 = t6.hostUpdate) || void 0 === i7 ? void 0 : i7.call(t6);
        }), this.update(s5)) : this._$Ek();
      } catch (t6) {
        throw i6 = false, this._$Ek(), t6;
      }
      i6 && this._$AE(s5);
    }
    willUpdate(t5) {
    }
    _$AE(t5) {
      var i6;
      null === (i6 = this._$ES) || void 0 === i6 || i6.forEach((t6) => {
        var i7;
        return null === (i7 = t6.hostUpdated) || void 0 === i7 ? void 0 : i7.call(t6);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t5)), this.updated(t5);
    }
    _$Ek() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$E_;
    }
    shouldUpdate(t5) {
      return true;
    }
    update(t5) {
      void 0 !== this._$EC && (this._$EC.forEach((t6, i6) => this._$EO(i6, this[i6], t6)), this._$EC = void 0), this._$Ek();
    }
    updated(t5) {
    }
    firstUpdated(t5) {
    }
  };
  a.finalized = true, a.elementProperties = /* @__PURE__ */ new Map(), a.elementStyles = [], a.shadowRootOptions = { mode: "open" }, null == h || h({ ReactiveElement: a }), (null !== (s2 = globalThis.reactiveElementVersions) && void 0 !== s2 ? s2 : globalThis.reactiveElementVersions = []).push("1.3.4");

  // node_modules/lit-html/lit-html.js
  var t2;
  var i2 = globalThis.trustedTypes;
  var s3 = i2 ? i2.createPolicy("lit-html", { createHTML: (t5) => t5 }) : void 0;
  var e3 = `lit$${(Math.random() + "").slice(9)}$`;
  var o3 = "?" + e3;
  var n3 = `<${o3}>`;
  var l2 = document;
  var h2 = (t5 = "") => l2.createComment(t5);
  var r3 = (t5) => null === t5 || "object" != typeof t5 && "function" != typeof t5;
  var d = Array.isArray;
  var u = (t5) => d(t5) || "function" == typeof (null == t5 ? void 0 : t5[Symbol.iterator]);
  var c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v = /-->/g;
  var a2 = />/g;
  var f = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var _ = /'/g;
  var g = /"/g;
  var m = /^(?:script|style|textarea|title)$/i;
  var p = (t5) => (i6, ...s5) => ({ _$litType$: t5, strings: i6, values: s5 });
  var $ = p(1);
  var y = p(2);
  var b = Symbol.for("lit-noChange");
  var w = Symbol.for("lit-nothing");
  var x = /* @__PURE__ */ new WeakMap();
  var T = (t5, i6, s5) => {
    var e10, o8;
    const n9 = null !== (e10 = null == s5 ? void 0 : s5.renderBefore) && void 0 !== e10 ? e10 : i6;
    let l7 = n9._$litPart$;
    if (void 0 === l7) {
      const t6 = null !== (o8 = null == s5 ? void 0 : s5.renderBefore) && void 0 !== o8 ? o8 : null;
      n9._$litPart$ = l7 = new N(i6.insertBefore(h2(), t6), t6, void 0, null != s5 ? s5 : {});
    }
    return l7._$AI(t5), l7;
  };
  var A = l2.createTreeWalker(l2, 129, null, false);
  var E = (t5, i6) => {
    const o8 = t5.length - 1, l7 = [];
    let h5, r5 = 2 === i6 ? "<svg>" : "", d3 = c;
    for (let i7 = 0; i7 < o8; i7++) {
      const s5 = t5[i7];
      let o9, u3, p2 = -1, $2 = 0;
      for (; $2 < s5.length && (d3.lastIndex = $2, u3 = d3.exec(s5), null !== u3); )
        $2 = d3.lastIndex, d3 === c ? "!--" === u3[1] ? d3 = v : void 0 !== u3[1] ? d3 = a2 : void 0 !== u3[2] ? (m.test(u3[2]) && (h5 = RegExp("</" + u3[2], "g")), d3 = f) : void 0 !== u3[3] && (d3 = f) : d3 === f ? ">" === u3[0] ? (d3 = null != h5 ? h5 : c, p2 = -1) : void 0 === u3[1] ? p2 = -2 : (p2 = d3.lastIndex - u3[2].length, o9 = u3[1], d3 = void 0 === u3[3] ? f : '"' === u3[3] ? g : _) : d3 === g || d3 === _ ? d3 = f : d3 === v || d3 === a2 ? d3 = c : (d3 = f, h5 = void 0);
      const y2 = d3 === f && t5[i7 + 1].startsWith("/>") ? " " : "";
      r5 += d3 === c ? s5 + n3 : p2 >= 0 ? (l7.push(o9), s5.slice(0, p2) + "$lit$" + s5.slice(p2) + e3 + y2) : s5 + e3 + (-2 === p2 ? (l7.push(void 0), i7) : y2);
    }
    const u2 = r5 + (t5[o8] || "<?>") + (2 === i6 ? "</svg>" : "");
    if (!Array.isArray(t5) || !t5.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [void 0 !== s3 ? s3.createHTML(u2) : u2, l7];
  };
  var C = class {
    constructor({ strings: t5, _$litType$: s5 }, n9) {
      let l7;
      this.parts = [];
      let r5 = 0, d3 = 0;
      const u2 = t5.length - 1, c2 = this.parts, [v2, a3] = E(t5, s5);
      if (this.el = C.createElement(v2, n9), A.currentNode = this.el.content, 2 === s5) {
        const t6 = this.el.content, i6 = t6.firstChild;
        i6.remove(), t6.append(...i6.childNodes);
      }
      for (; null !== (l7 = A.nextNode()) && c2.length < u2; ) {
        if (1 === l7.nodeType) {
          if (l7.hasAttributes()) {
            const t6 = [];
            for (const i6 of l7.getAttributeNames())
              if (i6.endsWith("$lit$") || i6.startsWith(e3)) {
                const s6 = a3[d3++];
                if (t6.push(i6), void 0 !== s6) {
                  const t7 = l7.getAttribute(s6.toLowerCase() + "$lit$").split(e3), i7 = /([.?@])?(.*)/.exec(s6);
                  c2.push({ type: 1, index: r5, name: i7[2], strings: t7, ctor: "." === i7[1] ? M : "?" === i7[1] ? k : "@" === i7[1] ? H : S2 });
                } else
                  c2.push({ type: 6, index: r5 });
              }
            for (const i6 of t6)
              l7.removeAttribute(i6);
          }
          if (m.test(l7.tagName)) {
            const t6 = l7.textContent.split(e3), s6 = t6.length - 1;
            if (s6 > 0) {
              l7.textContent = i2 ? i2.emptyScript : "";
              for (let i6 = 0; i6 < s6; i6++)
                l7.append(t6[i6], h2()), A.nextNode(), c2.push({ type: 2, index: ++r5 });
              l7.append(t6[s6], h2());
            }
          }
        } else if (8 === l7.nodeType)
          if (l7.data === o3)
            c2.push({ type: 2, index: r5 });
          else {
            let t6 = -1;
            for (; -1 !== (t6 = l7.data.indexOf(e3, t6 + 1)); )
              c2.push({ type: 7, index: r5 }), t6 += e3.length - 1;
          }
        r5++;
      }
    }
    static createElement(t5, i6) {
      const s5 = l2.createElement("template");
      return s5.innerHTML = t5, s5;
    }
  };
  function P(t5, i6, s5 = t5, e10) {
    var o8, n9, l7, h5;
    if (i6 === b)
      return i6;
    let d3 = void 0 !== e10 ? null === (o8 = s5._$Cl) || void 0 === o8 ? void 0 : o8[e10] : s5._$Cu;
    const u2 = r3(i6) ? void 0 : i6._$litDirective$;
    return (null == d3 ? void 0 : d3.constructor) !== u2 && (null === (n9 = null == d3 ? void 0 : d3._$AO) || void 0 === n9 || n9.call(d3, false), void 0 === u2 ? d3 = void 0 : (d3 = new u2(t5), d3._$AT(t5, s5, e10)), void 0 !== e10 ? (null !== (l7 = (h5 = s5)._$Cl) && void 0 !== l7 ? l7 : h5._$Cl = [])[e10] = d3 : s5._$Cu = d3), void 0 !== d3 && (i6 = P(t5, d3._$AS(t5, i6.values), d3, e10)), i6;
  }
  var V = class {
    constructor(t5, i6) {
      this.v = [], this._$AN = void 0, this._$AD = t5, this._$AM = i6;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    p(t5) {
      var i6;
      const { el: { content: s5 }, parts: e10 } = this._$AD, o8 = (null !== (i6 = null == t5 ? void 0 : t5.creationScope) && void 0 !== i6 ? i6 : l2).importNode(s5, true);
      A.currentNode = o8;
      let n9 = A.nextNode(), h5 = 0, r5 = 0, d3 = e10[0];
      for (; void 0 !== d3; ) {
        if (h5 === d3.index) {
          let i7;
          2 === d3.type ? i7 = new N(n9, n9.nextSibling, this, t5) : 1 === d3.type ? i7 = new d3.ctor(n9, d3.name, d3.strings, this, t5) : 6 === d3.type && (i7 = new I(n9, this, t5)), this.v.push(i7), d3 = e10[++r5];
        }
        h5 !== (null == d3 ? void 0 : d3.index) && (n9 = A.nextNode(), h5++);
      }
      return o8;
    }
    m(t5) {
      let i6 = 0;
      for (const s5 of this.v)
        void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t5, s5, i6), i6 += s5.strings.length - 2) : s5._$AI(t5[i6])), i6++;
    }
  };
  var N = class {
    constructor(t5, i6, s5, e10) {
      var o8;
      this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t5, this._$AB = i6, this._$AM = s5, this.options = e10, this._$C_ = null === (o8 = null == e10 ? void 0 : e10.isConnected) || void 0 === o8 || o8;
    }
    get _$AU() {
      var t5, i6;
      return null !== (i6 = null === (t5 = this._$AM) || void 0 === t5 ? void 0 : t5._$AU) && void 0 !== i6 ? i6 : this._$C_;
    }
    get parentNode() {
      let t5 = this._$AA.parentNode;
      const i6 = this._$AM;
      return void 0 !== i6 && 11 === t5.nodeType && (t5 = i6.parentNode), t5;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t5, i6 = this) {
      t5 = P(this, t5, i6), r3(t5) ? t5 === w || null == t5 || "" === t5 ? (this._$AH !== w && this._$AR(), this._$AH = w) : t5 !== this._$AH && t5 !== b && this.T(t5) : void 0 !== t5._$litType$ ? this.$(t5) : void 0 !== t5.nodeType ? this.k(t5) : u(t5) ? this.S(t5) : this.T(t5);
    }
    j(t5, i6 = this._$AB) {
      return this._$AA.parentNode.insertBefore(t5, i6);
    }
    k(t5) {
      this._$AH !== t5 && (this._$AR(), this._$AH = this.j(t5));
    }
    T(t5) {
      this._$AH !== w && r3(this._$AH) ? this._$AA.nextSibling.data = t5 : this.k(l2.createTextNode(t5)), this._$AH = t5;
    }
    $(t5) {
      var i6;
      const { values: s5, _$litType$: e10 } = t5, o8 = "number" == typeof e10 ? this._$AC(t5) : (void 0 === e10.el && (e10.el = C.createElement(e10.h, this.options)), e10);
      if ((null === (i6 = this._$AH) || void 0 === i6 ? void 0 : i6._$AD) === o8)
        this._$AH.m(s5);
      else {
        const t6 = new V(o8, this), i7 = t6.p(this.options);
        t6.m(s5), this.k(i7), this._$AH = t6;
      }
    }
    _$AC(t5) {
      let i6 = x.get(t5.strings);
      return void 0 === i6 && x.set(t5.strings, i6 = new C(t5)), i6;
    }
    S(t5) {
      d(this._$AH) || (this._$AH = [], this._$AR());
      const i6 = this._$AH;
      let s5, e10 = 0;
      for (const o8 of t5)
        e10 === i6.length ? i6.push(s5 = new N(this.j(h2()), this.j(h2()), this, this.options)) : s5 = i6[e10], s5._$AI(o8), e10++;
      e10 < i6.length && (this._$AR(s5 && s5._$AB.nextSibling, e10), i6.length = e10);
    }
    _$AR(t5 = this._$AA.nextSibling, i6) {
      var s5;
      for (null === (s5 = this._$AP) || void 0 === s5 || s5.call(this, false, true, i6); t5 && t5 !== this._$AB; ) {
        const i7 = t5.nextSibling;
        t5.remove(), t5 = i7;
      }
    }
    setConnected(t5) {
      var i6;
      void 0 === this._$AM && (this._$C_ = t5, null === (i6 = this._$AP) || void 0 === i6 || i6.call(this, t5));
    }
  };
  var S2 = class {
    constructor(t5, i6, s5, e10, o8) {
      this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t5, this.name = i6, this._$AM = e10, this.options = o8, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = w;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t5, i6 = this, s5, e10) {
      const o8 = this.strings;
      let n9 = false;
      if (void 0 === o8)
        t5 = P(this, t5, i6, 0), n9 = !r3(t5) || t5 !== this._$AH && t5 !== b, n9 && (this._$AH = t5);
      else {
        const e11 = t5;
        let l7, h5;
        for (t5 = o8[0], l7 = 0; l7 < o8.length - 1; l7++)
          h5 = P(this, e11[s5 + l7], i6, l7), h5 === b && (h5 = this._$AH[l7]), n9 || (n9 = !r3(h5) || h5 !== this._$AH[l7]), h5 === w ? t5 = w : t5 !== w && (t5 += (null != h5 ? h5 : "") + o8[l7 + 1]), this._$AH[l7] = h5;
      }
      n9 && !e10 && this.P(t5);
    }
    P(t5) {
      t5 === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t5 ? t5 : "");
    }
  };
  var M = class extends S2 {
    constructor() {
      super(...arguments), this.type = 3;
    }
    P(t5) {
      this.element[this.name] = t5 === w ? void 0 : t5;
    }
  };
  var R = i2 ? i2.emptyScript : "";
  var k = class extends S2 {
    constructor() {
      super(...arguments), this.type = 4;
    }
    P(t5) {
      t5 && t5 !== w ? this.element.setAttribute(this.name, R) : this.element.removeAttribute(this.name);
    }
  };
  var H = class extends S2 {
    constructor(t5, i6, s5, e10, o8) {
      super(t5, i6, s5, e10, o8), this.type = 5;
    }
    _$AI(t5, i6 = this) {
      var s5;
      if ((t5 = null !== (s5 = P(this, t5, i6, 0)) && void 0 !== s5 ? s5 : w) === b)
        return;
      const e10 = this._$AH, o8 = t5 === w && e10 !== w || t5.capture !== e10.capture || t5.once !== e10.once || t5.passive !== e10.passive, n9 = t5 !== w && (e10 === w || o8);
      o8 && this.element.removeEventListener(this.name, this, e10), n9 && this.element.addEventListener(this.name, this, t5), this._$AH = t5;
    }
    handleEvent(t5) {
      var i6, s5;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s5 = null === (i6 = this.options) || void 0 === i6 ? void 0 : i6.host) && void 0 !== s5 ? s5 : this.element, t5) : this._$AH.handleEvent(t5);
    }
  };
  var I = class {
    constructor(t5, i6, s5) {
      this.element = t5, this.type = 6, this._$AN = void 0, this._$AM = i6, this.options = s5;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t5) {
      P(this, t5);
    }
  };
  var L = { A: "$lit$", C: e3, M: o3, L: 1, R: E, V, D: u, I: P, H: N, N: S2, U: k, B: H, F: M, W: I };
  var z = window.litHtmlPolyfillSupport;
  null == z || z(C, N), (null !== (t2 = globalThis.litHtmlVersions) && void 0 !== t2 ? t2 : globalThis.litHtmlVersions = []).push("2.2.7");

  // node_modules/lit-element/lit-element.js
  var l3;
  var o4;
  var s4 = class extends a {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var t5, e10;
      const i6 = super.createRenderRoot();
      return null !== (t5 = (e10 = this.renderOptions).renderBefore) && void 0 !== t5 || (e10.renderBefore = i6.firstChild), i6;
    }
    update(t5) {
      const i6 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t5), this._$Do = T(i6, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t5;
      super.connectedCallback(), null === (t5 = this._$Do) || void 0 === t5 || t5.setConnected(true);
    }
    disconnectedCallback() {
      var t5;
      super.disconnectedCallback(), null === (t5 = this._$Do) || void 0 === t5 || t5.setConnected(false);
    }
    render() {
      return b;
    }
  };
  s4.finalized = true, s4._$litElement$ = true, null === (l3 = globalThis.litElementHydrateSupport) || void 0 === l3 || l3.call(globalThis, { LitElement: s4 });
  var n4 = globalThis.litElementPolyfillSupport;
  null == n4 || n4({ LitElement: s4 });
  (null !== (o4 = globalThis.litElementVersions) && void 0 !== o4 ? o4 : globalThis.litElementVersions = []).push("3.2.2");

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var n5 = (n9) => (e10) => "function" == typeof e10 ? ((n10, e11) => (window.customElements.define(n10, e11), e11))(n9, e10) : ((n10, e11) => {
    const { kind: t5, elements: i6 } = e11;
    return { kind: t5, elements: i6, finisher(e12) {
      window.customElements.define(n10, e12);
    } };
  })(n9, e10);

  // node_modules/@lit/reactive-element/decorators/property.js
  var i3 = (i6, e10) => "method" === e10.kind && e10.descriptor && !("value" in e10.descriptor) ? __spreadProps(__spreadValues({}, e10), { finisher(n9) {
    n9.createProperty(e10.key, i6);
  } }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e10.key, initializer() {
    "function" == typeof e10.initializer && (this[e10.key] = e10.initializer.call(this));
  }, finisher(n9) {
    n9.createProperty(e10.key, i6);
  } };
  function e4(e10) {
    return (n9, t5) => void 0 !== t5 ? ((i6, e11, n10) => {
      e11.constructor.createProperty(n10, i6);
    })(e10, n9, t5) : i3(e10, n9);
  }

  // node_modules/@lit/reactive-element/decorators/state.js
  function t3(t5) {
    return e4(__spreadProps(__spreadValues({}, t5), { state: true }));
  }

  // node_modules/@lit/reactive-element/decorators/base.js
  var o5 = ({ finisher: e10, descriptor: t5 }) => (o8, n9) => {
    var r5;
    if (void 0 === n9) {
      const n10 = null !== (r5 = o8.originalKey) && void 0 !== r5 ? r5 : o8.key, i6 = null != t5 ? { kind: "method", placement: "prototype", key: n10, descriptor: t5(o8.key) } : __spreadProps(__spreadValues({}, o8), { key: n10 });
      return null != e10 && (i6.finisher = function(t6) {
        e10(t6, n10);
      }), i6;
    }
    {
      const r6 = o8.constructor;
      void 0 !== t5 && Object.defineProperty(o8, n9, t5(n9)), null == e10 || e10(r6, n9);
    }
  };

  // node_modules/@lit/reactive-element/decorators/query.js
  function i4(i6, n9) {
    return o5({ descriptor: (o8) => {
      const t5 = { get() {
        var o9, n10;
        return null !== (n10 = null === (o9 = this.renderRoot) || void 0 === o9 ? void 0 : o9.querySelector(i6)) && void 0 !== n10 ? n10 : null;
      }, enumerable: true, configurable: true };
      if (n9) {
        const n10 = "symbol" == typeof o8 ? Symbol() : "__" + o8;
        t5.get = function() {
          var o9, t6;
          return void 0 === this[n10] && (this[n10] = null !== (t6 = null === (o9 = this.renderRoot) || void 0 === o9 ? void 0 : o9.querySelector(i6)) && void 0 !== t6 ? t6 : null), this[n10];
        };
      }
      return t5;
    } });
  }

  // node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
  var n6;
  var e5 = null != (null === (n6 = window.HTMLSlotElement) || void 0 === n6 ? void 0 : n6.prototype.assignedElements) ? (o8, n9) => o8.assignedElements(n9) : (o8, n9) => o8.assignedNodes(n9).filter((o9) => o9.nodeType === Node.ELEMENT_NODE);

  // ui/components/CodeEditor.ts
  var ace2 = __toESM(require_ace());
  var import_ext_language_tools = __toESM(require_ext_language_tools());
  ace2.config.set("basePath", "/static/ace");
  var { user_info, exercise_details } = window.templateData;
  var UndoManager = ace2.require("ace/undomanager").UndoManager;
  var CodeEditor = class extends s4 {
    constructor() {
      super(...arguments);
      this.resizeObserver = new ResizeObserver(this.resize);
    }
    firstUpdated() {
      this.editor = ace2.edit(this.renderRoot.querySelector(".editor"), {
        theme: `ace/theme/${user_info.ace_theme}`,
        fontSize: "12pt",
        wrap: true
      });
      if (user_info["enable_vim"]) {
        this.editor.setKeyboardHandler("ace/keyboard/vim");
      }
      if (user_info["use_auto_complete"] && exercise_details["back_end"] != "not_code") {
        this.editor.setOptions({
          enableBasicAutocompletion: false,
          enableSnippets: true,
          enableLiveAutocompletion: true
        });
      }
      this.editor.commands.addCommands([
        {
          name: "undo",
          bindKey: { win: "Ctrl-Z", mac: "Command-Z" },
          exec: function(editor) {
            editor.session.getUndoManager().undo(editor.session);
          }
        },
        {
          name: "redo1",
          bindKey: { win: "Ctrl-Shift-Z", mac: "Command-Shift-Z" },
          exec: function(editor) {
            editor.session.getUndoManager().redo(editor.session);
          }
        },
        {
          name: "redo2",
          bindKey: { win: "Ctrl-Y", mac: "Command-Y" },
          exec: function(editor) {
            editor.session.getUndoManager().redo(editor.session);
          }
        }
      ]);
      this.resizeObserver.observe(this);
      this.editor.focus();
    }
    disconnectedCallback() {
      this.resizeObserver.disconnect();
    }
    resize() {
      var _a3;
      (_a3 = this.editor) == null ? void 0 : _a3.resize();
    }
    render() {
      return $`
			<div class="editor-container">
				<div class="editor"></div>
			</div>
		`;
    }
    setSession(session) {
      return __async(this, null, function* () {
        var _a3;
        if (!this.editor) {
          yield this.updateComplete;
        }
        if (exercise_details["back_end"] === "not_code") {
          session.setUseWrapMode(true);
        }
        (_a3 = this.editor) == null ? void 0 : _a3.setSession(session);
      });
    }
    setReadOnly(readOnly) {
      return __async(this, null, function* () {
        var _a3;
        if (!this.editor) {
          yield this.updateComplete;
        }
        (_a3 = this.editor) == null ? void 0 : _a3.setReadOnly(readOnly);
      });
    }
  };
  __decorateClass([
    bind_default
  ], CodeEditor.prototype, "resize", 1);
  CodeEditor = __decorateClass([
    n5("code-editor")
  ], CodeEditor);

  // ui/utils/monaco.ts
  var monacoPromise;
  function getMonaco() {
    return __async(this, null, function* () {
      if (!monacoPromise) {
        monacoPromise = new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = `/static/monaco/min/vs/loader.js`;
          script.onload = () => {
            const w2 = window;
            w2.require.config({ paths: { "vs": `/static/monaco/min/vs` } });
            w2.require(["vs/editor/editor.main"], function() {
              resolve(window.monaco);
            });
          };
          document.head.appendChild(script);
        });
      }
      return monacoPromise;
    });
  }

  // ui/components/DiffViewer.ts
  var DiffViewer = class extends s4 {
    constructor() {
      super();
      this.resizeObserver = new ResizeObserver(this.resize);
    }
    render() {
      return $`<div></div>`;
    }
    firstUpdated() {
      return __async(this, null, function* () {
        var _a3, _b2;
        const monaco = yield getMonaco();
        const left = monaco.editor.createModel((_a3 = this.left) != null ? _a3 : "", "text/plain");
        const right = monaco.editor.createModel((_b2 = this.right) != null ? _b2 : "", "text/plain");
        this.editor = monaco.editor.createDiffEditor(this.renderRoot.querySelector("div"), {
          fontSize: 14,
          domReadOnly: true,
          readOnly: true,
          minimap: { enabled: false },
          scrollbar: {
            alwaysConsumeMouseWheel: true
          },
          scrollBeyondLastLine: false,
          ignoreTrimWhitespace: false,
          renderWhitespace: "all"
        });
        this.editor.setModel({
          original: left,
          modified: right
        });
        this.resizeObserver.observe(this);
      });
    }
    resize() {
      var _a3;
      (_a3 = this.editor) == null ? void 0 : _a3.layout();
    }
  };
  __decorateClass([
    e4()
  ], DiffViewer.prototype, "left", 2);
  __decorateClass([
    e4()
  ], DiffViewer.prototype, "right", 2);
  __decorateClass([
    bind_default
  ], DiffViewer.prototype, "resize", 1);
  DiffViewer = __decorateClass([
    n5("diff-viewer")
  ], DiffViewer);

  // ui/components/SplitPane.ts
  var GUTTER_SIZE = 12;
  var SplitPane = class extends s4 {
    constructor() {
      super(...arguments);
      this.direction = "vertical";
      this.fixedSide = "first";
      this.minSizes = [0, 0];
      this.defaultSplit = 0.5;
      this._currentSplit = 0;
      this.resizeObserver = new ResizeObserver(this.onResize);
    }
    get currentSplit() {
      return this._currentSplit;
    }
    set currentSplit(val) {
      this._currentSplit = val;
      if (this.cacheID) {
        window.localStorage.setItem(`split-${this.cacheID}`, val.toString());
      }
    }
    firstUpdated() {
      let defaultSplit = this.defaultSplit;
      if (this.cacheID) {
        const cachedVal = window.localStorage.getItem(`split-${this.cacheID}`);
        if (cachedVal == null ? void 0 : cachedVal.length) {
          const cachedNum = Number(cachedVal);
          if (cachedNum >= 0 && cachedNum <= 1) {
            defaultSplit = cachedNum;
          }
        }
      }
      this.currentSplit = defaultSplit;
      this.resizeObserver.observe(this.parent);
      this.setSizes();
    }
    disconnectedCallback() {
      this.resizeObserver.disconnect();
    }
    onResize() {
      const parentRect = this.parent.getBoundingClientRect();
      const fullSize = this.direction === "horizontal" ? parentRect.height : parentRect.width;
      const property = this.direction === "horizontal" ? "height" : "width";
      if (this.fixedSide === "first") {
        const firstSize = Number(this.firstContainer.style[property].replace("px", ""));
        this.currentSplit = (firstSize + GUTTER_SIZE / 2) / fullSize;
      } else {
        const secondtSize = Number(this.secondContainer.style[property].replace("px", ""));
        this.currentSplit = 1 - (secondtSize + GUTTER_SIZE / 2) / fullSize;
      }
      this.setSizes();
    }
    setSizes() {
      if (this.currentSplit < 0) {
        this.currentSplit = 0;
      } else if (this.currentSplit > 1) {
        this.currentSplit = 1;
      }
      const minTotalSize = this.minSizes[0] + this.minSizes[1] + GUTTER_SIZE;
      const property = this.direction === "horizontal" ? "height" : "width";
      const parentRect = this.parent.getBoundingClientRect();
      const fullSize = this.direction === "horizontal" ? parentRect.height : parentRect.width;
      let firstSize = fullSize * this.currentSplit - GUTTER_SIZE / 2;
      let secondSize = fullSize * (1 - this.currentSplit) - GUTTER_SIZE / 2;
      if (minTotalSize <= fullSize) {
        if (firstSize < this.minSizes[0]) {
          firstSize = this.minSizes[0];
          secondSize = fullSize - firstSize - GUTTER_SIZE;
        } else if (secondSize < this.minSizes[1]) {
          secondSize = this.minSizes[1];
          firstSize = fullSize - secondSize - GUTTER_SIZE;
        }
        this.currentSplit = (firstSize + GUTTER_SIZE / 2) / fullSize;
      } else {
        this.currentSplit = (this.minSizes[0] + GUTTER_SIZE / 1) / minTotalSize;
        firstSize = fullSize * this.currentSplit - GUTTER_SIZE / 2;
        secondSize = fullSize * (1 - this.currentSplit) - GUTTER_SIZE / 2;
      }
      this.firstContainer.style[property] = `${firstSize}px`;
      this.secondContainer.style[property] = `${secondSize}px`;
      if (this.resizeCallback) {
        this.resizeCallback();
      }
    }
    onDown() {
      document.body.style.cursor = this.direction === "horizontal" ? "row-resize" : "col-resize";
      this.firstContainer.style.userSelect = "none";
      this.firstContainer.style.pointerEvents = "none";
      this.secondContainer.style.userSelect = "none";
      this.secondContainer.style.pointerEvents = "none";
      const handlePointerMove = (e10) => {
        const pos = this.direction === "horizontal" ? e10.clientY : e10.clientX;
        const parentRect = this.parent.getBoundingClientRect();
        const fullSize = this.direction === "horizontal" ? parentRect.height : parentRect.width;
        const relativeDistance = this.direction === "horizontal" ? pos - parentRect.top : pos - parentRect.left;
        this.currentSplit = relativeDistance / fullSize;
        this.setSizes();
      };
      const handlePointerUp = () => {
        document.body.style.cursor = "";
        this.firstContainer.style.userSelect = "";
        this.firstContainer.style.pointerEvents = "";
        this.secondContainer.style.userSelect = "";
        this.secondContainer.style.pointerEvents = "";
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerup", handlePointerUp);
      };
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
      window.addEventListener("pointerup", handlePointerUp, { passive: true });
    }
    onDoubleClick() {
      if (this.currentSplit === this.defaultSplit) {
        this.currentSplit = 1 - this.defaultSplit;
      } else {
        this.currentSplit = this.defaultSplit;
      }
      this.setSizes();
    }
    render() {
      return $`
		  	<div  class="split ${this.direction}">
				<div class="split-first">
					${this.first}
				</div>
				<div class="gutter" @pointerdown=${this.onDown} @dblclick=${this.onDoubleClick}>
					<i class="fas fa-ellipsis-v"></i>
				</div>
				<div class="split-second">
					${this.second}
				</div>
			</div>
		`;
    }
  };
  __decorateClass([
    e4()
  ], SplitPane.prototype, "direction", 2);
  __decorateClass([
    e4()
  ], SplitPane.prototype, "fixedSide", 2);
  __decorateClass([
    e4({ attribute: false })
  ], SplitPane.prototype, "minSizes", 2);
  __decorateClass([
    e4()
  ], SplitPane.prototype, "cacheID", 2);
  __decorateClass([
    e4()
  ], SplitPane.prototype, "first", 2);
  __decorateClass([
    e4()
  ], SplitPane.prototype, "second", 2);
  __decorateClass([
    e4({ type: Number })
  ], SplitPane.prototype, "defaultSplit", 2);
  __decorateClass([
    t3()
  ], SplitPane.prototype, "_currentSplit", 2);
  __decorateClass([
    i4(".split")
  ], SplitPane.prototype, "parent", 2);
  __decorateClass([
    i4(".split-first")
  ], SplitPane.prototype, "firstContainer", 2);
  __decorateClass([
    i4(".split-second")
  ], SplitPane.prototype, "secondContainer", 2);
  __decorateClass([
    bind_default
  ], SplitPane.prototype, "onResize", 1);
  __decorateClass([
    bind_default
  ], SplitPane.prototype, "setSizes", 1);
  __decorateClass([
    bind_default
  ], SplitPane.prototype, "onDown", 1);
  __decorateClass([
    bind_default
  ], SplitPane.prototype, "onDoubleClick", 1);
  SplitPane = __decorateClass([
    n5("split-pane")
  ], SplitPane);

  // ui/pages/exercise/components/Timer.ts
  var { start_time, assignment_details, course_basics, assignment_basics } = window.templateData;
  var Timer = class extends s4 {
    constructor() {
      super();
      this.intervalID = -1;
      const isAdmin = window.templateData.is_administrator || window.templateData.is_instructor || window.templateData.is_assistant;
      if (!isAdmin && assignment_details.has_timer) {
        const start_time_js = new Date(start_time);
        start_time_js.setMinutes(start_time_js.getMinutes() - start_time_js.getTimezoneOffset());
        this.deadline = start_time_js;
        this.deadline.setHours(this.deadline.getHours() + assignment_details.hour_timer);
        this.deadline.setMinutes(this.deadline.getMinutes() + assignment_details.minute_timer);
        this.intervalID = setInterval(() => {
          this.requestUpdate();
        }, 1e3);
      }
    }
    render() {
      if (!this.deadline) {
        return $``;
      }
      const { hours, minutes, seconds } = this.remainingTime;
      return $`
			<h4>Time remaining</h4>
			<div class="timer-container">
				<span class="time-group">
					<span>${hours >= 0 ? hours : 0}</span>
					<span>Hours</span>
				</span>
				<span class="time-group">
					<span>${minutes >= 0 ? minutes : 0}</span>
					<span>Minutes</span>
				</span>
				<span class="time-group">
					<span>${seconds >= 0 ? seconds : 0}</span>
					<span>Seconds</span>
				</span>
			</div>
		`;
    }
    get remainingTime() {
      const total = this.deadline.getTime() - Date.now();
      const seconds = Math.floor(total / 1e3 % 60);
      const minutes = Math.floor(total / 1e3 / 60 % 60);
      const hours = Math.floor(total / (1e3 * 60 * 60) % 24);
      if (hours <= 0 && minutes <= 0 && seconds <= 0) {
        clearInterval(this.intervalID);
        let redirect = true;
        if (assignment_details.due_date) {
          const due_date = new Date(assignment_details.due_date);
          if (due_date.getTime() < Date.now()) {
            redirect = false;
          }
        }
        if (redirect) {
          setTimeout(() => {
            window.location.replace(`/assignment/${course_basics["id"]}/${assignment_basics["id"]}`);
          }, 1e3);
        }
      }
      return {
        total,
        hours,
        minutes,
        seconds
      };
    }
  };
  Timer = __decorateClass([
    n5("exercise-timer")
  ], Timer);

  // node_modules/lit-html/directive.js
  var t4 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e6 = (t5) => (...e10) => ({ _$litDirective$: t5, values: e10 });
  var i5 = class {
    constructor(t5) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t5, e10, i6) {
      this._$Ct = t5, this._$AM = e10, this._$Ci = i6;
    }
    _$AS(t5, e10) {
      return this.update(t5, e10);
    }
    update(t5, e10) {
      return this.render(...e10);
    }
  };

  // node_modules/lit-html/directives/unsafe-html.js
  var e7 = class extends i5 {
    constructor(i6) {
      if (super(i6), this.it = w, i6.type !== t4.CHILD)
        throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(r5) {
      if (r5 === w || null == r5)
        return this._t = void 0, this.it = r5;
      if (r5 === b)
        return r5;
      if ("string" != typeof r5)
        throw Error(this.constructor.directiveName + "() called with a non-string value");
      if (r5 === this.it)
        return this._t;
      this.it = r5;
      const s5 = [r5];
      return s5.raw = s5, this._t = { _$litType$: this.constructor.resultType, strings: s5, values: [] };
    }
  };
  e7.directiveName = "unsafeHTML", e7.resultType = 1;
  var o6 = e6(e7);

  // ui/utils/request.ts
  function postFormData(url, data, parseResponse = true) {
    return __async(this, null, function* () {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      const response = yield fetch(url, {
        method: "POST",
        body: formData
      });
      if (!parseResponse) {
        return null;
      }
      try {
        return yield response.json();
      } catch (e10) {
        console.error(e10);
        return null;
      }
    });
  }
  function get(url) {
    return __async(this, null, function* () {
      const response = yield fetch(url, {
        method: "GET"
      });
      try {
        return yield response.json();
      } catch (e10) {
        console.error(e10);
        return null;
      }
    });
  }

  // ui/utils/exercise-service.ts
  function copyExercise(courseID2, assignmentID2, exerciseID2, newTitle) {
    return __async(this, null, function* () {
      const response = yield postFormData(`/copy_exercise/${courseID2}/${assignmentID2}/${exerciseID2}`, { "new_title": newTitle });
      if (response.result != "") {
        return response.result;
      } else {
        location.reload();
        return;
      }
    });
  }
  function runCode(courseID2, assignmentID2, exerciseID2, userCode, test) {
    return __async(this, null, function* () {
      let url = `/run_code/${courseID2}/${assignmentID2}/${exerciseID2}`;
      if (test) {
        url += `?test=${encodeURIComponent(test)}`;
      }
      return yield postFormData(url, { "user_code": userCode });
    });
  }
  function submitCode(courseID2, assignmentID2, exerciseID2, userCode, partnerID = "") {
    return __async(this, null, function* () {
      let url = `/submit/${courseID2}/${assignmentID2}/${exerciseID2}`;
      const data = { "code": userCode, "date": new Date().toLocaleString("en-US", { timeZone: "UTC" }), partner_id: partnerID };
      return yield postFormData(url, data);
    });
  }
  function savePresubmission(courseID2, assignmentID2, exerciseID2, userCode) {
    return __async(this, null, function* () {
      let url = `/save_presubmission/${courseID2}/${assignmentID2}/${exerciseID2}`;
      yield postFormData(url, { "user_code": userCode }, false);
    });
  }
  function getPartnerID(courseID2, name2) {
    return __async(this, null, function* () {
      return yield get(`/get_partner_id/${courseID2}/${encodeURIComponent(name2)}`);
    });
  }

  // ui/pages/exercise/components/TestsPane.ts
  var import_bulma_collapsible = __toESM(require_bulma_collapsible_min());
  var { exercise_details: exercise_details2, exercise_basics, course_basics: course_basics2, assignment_basics: assignment_basics2, users } = window.templateData;
  users == null ? void 0 : users.sort();
  var TestsPane = class extends s4 {
    constructor() {
      super();
      this.numSubmissions = 0;
      this.hasPassingSubmission = false;
      this.testOutputs = {};
      this.errorMessage = "";
      this.peerProgrammingModalOpen = false;
      this.tests = [];
      const testMap = exercise_details2.tests;
      for (const testName in testMap) {
        if (testMap.hasOwnProperty(testName)) {
          const test = testMap[testName];
          test.name = testName;
          test.status = "unknown" /* Unknown */;
          this.tests.push(test);
        }
      }
      this.tests.sort((a3, b2) => a3.test_id - b2.test_id);
    }
    render() {
      var _a3;
      let testsRunning = this.tests.some((test) => test.status === "running" /* Running */);
      const madeAllSubmissions = exercise_details2.max_submissions > 0 && exercise_details2.max_submissions === this.numSubmissions;
      return $`
			<div class="tests-pane">
				<div class="tests-header">
					<p>Tests</p>
					<div style="display: flex; flex-direction: column;">
						<div class="field is-grouped" style="justify-content: flex-end;">
							<div class="control">
								<button ?disabled=${testsRunning || this.activeSubmission} class="button is-primary is-outlined" @click=${() => this.runCode()}>Run all</button>
							</div>
							<div class="field has-addons">
								<!-- <p class="control">
									<button class="button">
										<i class="fab fa-product-hunt"></i>
										<span style="margin: 0 6px;">Select partner</span>
										<i class="fas fa-caret-down"></i>
									</button>
								</p> -->
								<p class="control">
									<button ?disabled=${testsRunning || this.activeSubmission || madeAllSubmissions} class="button is-dark" @click=${() => this.handleSubmit()}>Submit</button>
								</p>
							</div>
						</div>
						${exercise_details2.max_submissions > 0 ? $`
							<span>You have made ${this.numSubmissions} of ${exercise_details2.max_submissions} allowed submission(s).</span>
						` : null}
					</div>
				</div>
				${this.activeSubmission ? $`
					<article class="message ${this.activeSubmission.passed ? "is-success" : "is-orange"}">
						<div class="message-header">
							<p>
								${this.activeSubmission.passed ? "This submission passed all tests!" : "This submission did not pass all tests."}	
							</p>
						</div>
					</article>					
				` : $`
					${((_a3 = this.errorMessage) == null ? void 0 : _a3.length) > 0 ? $`
						<article class="message is-danger">
							<div class="message-header">
								<p>An error occurred while your code was being processed.</p>
								<button class="delete" aria-label="delete" @click=${() => this.errorMessage = ""}></button>
							</div>
							<div class="message-body">
								${o6(this.errorMessage)}
							</div>
						</article>
					` : null}
					${this.hasPassingSubmission || this.allPassing ? $`
						<article class="message is-success">
							<div class="message-header">
								${this.hasPassingSubmission ? $`<p>Exercise complete</p>` : $`<p>All test passed!</p>`}
							</div>
							<div class="message-body">
								${this.hasPassingSubmission ? $`
									<p>One or more of your submissions has passed all of the tests.</p>
									<p>You may continue to modify and submit your code if you wish to change your solution.</p>
									<br>
								` : $`
									<p>Be sure to click on Submit so your solution and score will be saved.</p>
								`}
								${this.hasPassingSubmission && this.selectPassingSubmission ? $`
									<p><a href="javascript:void(0);" @click=${this.selectPassingSubmission}>View</a> your latest passing solution.</p>
								` : null}
								${this.hasPassingSubmission && exercise_details2.show_instructor_solution ? $`
									<p><a href="/view_instructor_solution/${course_basics2.id}/${assignment_basics2.id}/${exercise_basics.id}">View</a> the instructor's solution.</p>
								` : null}
							</div>
						</article>
					` : null}
				`}
				${!this.activeSubmission || Object.keys(this.activeSubmission.test_outputs).length > 0 ? $`
					<table class="table is-fullwidth is-hoverable" style="margin-bottom: 20px;">
						<thead>
							<tr>
								<th>Status</th>
								<th style="width: 100%;">Test</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							${this.renderTestTable()}
						</tbody>
					</table>
				` : null}
			</div>
			<peer-programming-modal
				.open=${this.peerProgrammingModalOpen}
				.onClose=${() => this.peerProgrammingModalOpen = false}
				.onSubmit=${this.submitCode}
			></peer-programming-modal>
		`;
    }
    renderTestTable() {
      return this.tests.map((test) => {
        var _a3, _b2, _c, _d, _e, _f, _g, _h;
        let txt_output = (_b2 = (_a3 = this.testOutputs[test.name]) == null ? void 0 : _a3.txt_output) != null ? _b2 : "";
        let jpg_output = (_d = (_c = this.testOutputs[test.name]) == null ? void 0 : _c.jpg_output) != null ? _d : "";
        let image_diff = (_f = (_e = this.testOutputs[test.name]) == null ? void 0 : _e.diff_output) != null ? _f : "";
        let status = test.status;
        if ((_g = this.activeSubmission) == null ? void 0 : _g.test_outputs[test.name]) {
          const output = (_h = this.activeSubmission) == null ? void 0 : _h.test_outputs[test.name];
          txt_output = output.txt_output;
          jpg_output = output.jpg_output;
          status = output.passed ? "passed" /* Passed */ : "failed" /* Failed */;
          image_diff = "";
        }
        return $`
				<tr class=${test.status} @click=${this.clickRow}>
					<td class="test-status">${this.getStatusIcon(status)}</td>
					<td>${test.name}</td>
					<td>
						<test-results-modal
							.test=${test}
							.runTest=${!this.activeSubmission ? this.runCode : null}
							.testStatus=${status}
							.expectedOutput=${test.txt_output}
							.expectedImageOutput=${test.jpg_output}
							.imageDiff=${image_diff}
							.userOutput=${txt_output}
							.userImageOutput=${jpg_output}
						></test-results-modal>
					</td>
				</tr>
			`;
      });
    }
    clickRow(e10) {
      var _a3, _b2;
      if (e10.target instanceof Element) {
        if (e10.target.nodeName === "BUTTON") {
          return;
        }
        const modal = (_b2 = (_a3 = e10.target.closest("tr")) == null ? void 0 : _a3.querySelector("test-results-modal")) != null ? _b2 : null;
        if (modal) {
          modal.openModal();
        }
      }
    }
    getStatusIcon(status) {
      switch (status) {
        case "passed" /* Passed */:
          return $`<i class="fas fa-check passed has-tooltip-right" data-tooltip="Passed"></i>`;
        case "failed" /* Failed */:
          return $`<i class="fas fa-times failed has-tooltip-right" data-tooltip="Failed"></i>`;
        case "running" /* Running */:
          return $`<i class="fas fa-spinner fa-spin running has-tooltip-right" data-tooltip="Running"></i>`;
        default:
          return $``;
      }
    }
    runCode(testName) {
      return __async(this, null, function* () {
        for (const test of this.tests) {
          if (!testName || testName === test.name) {
            test.status = "running" /* Running */;
          }
        }
        this.requestUpdate();
        const code = this.getCode();
        if (!code.trim().length) {
          return;
        }
        const result = yield runCode(course_basics2.id, assignment_basics2.id, exercise_basics.id, code, testName);
        this.processResult(result);
        this.requestUpdate();
      });
    }
    handleSubmit() {
      return __async(this, null, function* () {
        if (exercise_details2.enable_pair_programming) {
          this.peerProgrammingModalOpen = true;
        } else {
          yield this.submitCode();
        }
      });
    }
    submitCode(partnerID = "") {
      return __async(this, null, function* () {
        var _a3;
        if (this.peerProgrammingModalOpen) {
          this.peerProgrammingModalOpen = false;
        }
        for (const test of this.tests) {
          test.status = "running" /* Running */;
        }
        this.requestUpdate();
        const code = this.getCode();
        if (!code.trim().length) {
          return;
        }
        const result = yield submitCode(course_basics2.id, assignment_basics2.id, exercise_basics.id, code, partnerID);
        this.processResult(result);
        this.requestUpdate();
        if (result.submission_id) {
          (_a3 = this.addSubmission) == null ? void 0 : _a3.call(this, {
            id: result.submission_id,
            date: new Date(),
            code,
            passed: !!result.all_passed,
            test_outputs: JSON.parse(JSON.stringify(result.test_outputs))
          });
        }
      });
    }
    processResult(result) {
      var _a3, _b2;
      if (((_a3 = result.message) == null ? void 0 : _a3.length) > 0) {
        for (const test of this.tests) {
          test.status = "failed" /* Failed */;
        }
        this.errorMessage = result.message;
      } else {
        for (const test of this.tests) {
          if (result.test_outputs[test.name]) {
            test.status = ((_b2 = result.test_outputs[test.name]) == null ? void 0 : _b2.passed) ? "passed" /* Passed */ : "failed" /* Failed */;
          }
        }
        Object.assign(this.testOutputs, result.test_outputs);
      }
    }
    get allPassing() {
      var _a3;
      if (!((_a3 = this.tests) == null ? void 0 : _a3.length)) {
        return false;
      }
      for (const test of this.tests) {
        if (test.status !== "passed" /* Passed */) {
          return false;
        }
      }
      return true;
    }
  };
  __decorateClass([
    e4()
  ], TestsPane.prototype, "activeSubmission", 2);
  __decorateClass([
    e4()
  ], TestsPane.prototype, "numSubmissions", 2);
  __decorateClass([
    e4()
  ], TestsPane.prototype, "addSubmission", 2);
  __decorateClass([
    e4()
  ], TestsPane.prototype, "hasPassingSubmission", 2);
  __decorateClass([
    e4()
  ], TestsPane.prototype, "selectPassingSubmission", 2);
  __decorateClass([
    t3()
  ], TestsPane.prototype, "tests", 2);
  __decorateClass([
    t3()
  ], TestsPane.prototype, "testOutputs", 2);
  __decorateClass([
    t3()
  ], TestsPane.prototype, "errorMessage", 2);
  __decorateClass([
    t3()
  ], TestsPane.prototype, "peerProgrammingModalOpen", 2);
  __decorateClass([
    bind_default
  ], TestsPane.prototype, "clickRow", 1);
  __decorateClass([
    bind_default
  ], TestsPane.prototype, "runCode", 1);
  __decorateClass([
    bind_default
  ], TestsPane.prototype, "handleSubmit", 1);
  __decorateClass([
    bind_default
  ], TestsPane.prototype, "submitCode", 1);
  TestsPane = __decorateClass([
    n5("tests-pane")
  ], TestsPane);
  var PeerProgrammingModal = class extends s4 {
    constructor() {
      super(...arguments);
      this.open = false;
      this.partner = "";
    }
    render() {
      return $`
			<div class="modal${this.open ? " is-active" : ""}">
				<div class="modal-background" @click=${this.onClose}></div>
					<div class="modal-card">
						<header class="modal-card-head">
							<p class="modal-card-title">Pair programming</p>
							<button class="delete" aria-label="close" @click=${this.onClose}></button>
						</header>
						<section class="modal-card-body">
							<p>Select your pair programming partner here. If you are working on the exercise without a partner, leave this field blank.</p>
							<div class="select" style="margin: 16px 0px;">
								<select value=${this.partner} @change=${this.handleChange}>
									<option value="">Select partner...</option>
									${users == null ? void 0 : users.map((user) => $`<option value=${user}>${user}</option>`)}
								</select>
							</div>

							<div class="field is-grouped">
								<p class="control">
									<button class="button is-primary is-outlined" @click=${this.submit}>Submit</button>
								</p>
							</div>
						</section>
					</div>
				</div>
			</div>
		`;
    }
    handleChange(e10) {
      console.log(e10);
      if (e10.target instanceof HTMLSelectElement) {
        this.partner = e10.target.value;
      }
    }
    submit() {
      return __async(this, null, function* () {
        var _a3;
        let partnerID = "";
        if (this.partner) {
          partnerID = yield getPartnerID(course_basics2.id, this.partner);
          if (typeof partnerID !== "string") {
            partnerID = "";
          }
        }
        (_a3 = this.onSubmit) == null ? void 0 : _a3.call(this, partnerID);
      });
    }
  };
  __decorateClass([
    e4()
  ], PeerProgrammingModal.prototype, "open", 2);
  __decorateClass([
    e4()
  ], PeerProgrammingModal.prototype, "onClose", 2);
  __decorateClass([
    e4()
  ], PeerProgrammingModal.prototype, "onSubmit", 2);
  __decorateClass([
    t3()
  ], PeerProgrammingModal.prototype, "partner", 2);
  __decorateClass([
    bind_default
  ], PeerProgrammingModal.prototype, "handleChange", 1);
  __decorateClass([
    bind_default
  ], PeerProgrammingModal.prototype, "submit", 1);
  PeerProgrammingModal = __decorateClass([
    n5("peer-programming-modal")
  ], PeerProgrammingModal);
  var TestResultsModal = class extends s4 {
    constructor() {
      super(...arguments);
      this.instanceID = TestResultsModal.nextID++;
      this.opened = false;
      this.collapsibles = [];
      this.open = false;
      this.currentTab = "Plain Output" /* Plain */;
      this.tabOutputs = {
        ["Plain Output" /* Plain */]: () => $`
			<div class="plain-output-section">
				<div>
					${this.testStatus === "passed" /* Passed */ ? $`<h2>Test passed 🎉!!!</h2>` : null}
					${this.getUserOutput()}
				</div>
			</div>
		`,
        ["Text Diff" /* TextDiff */]: () => $`
			<div class="diff-section">
				<div class="diff-section-header">
					<span style="flex: 1;">Correct text output:</span>
					<span style="flex: 1;">Your text output:</span>
				</div>
				<diff-viewer .left=${this.expectedOutput} .right=${this.userOutput}></diff-viewer>
			</div>
		`,
        ["Image Diff" /* ImageDiff */]: () => $`
			<div class="image-diff-section">
				<img src='data:image/jpg;base64,${this.imageDiff}' width="100%" />
			</div>
		`
      };
    }
    firstUpdated(_changedProperties) {
      this.collapsibles = import_bulma_collapsible.default.attach(this.querySelectorAll(".is-collapsible"));
    }
    render() {
      var _a3, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      const hasTestCode = ((_a3 = this.test) == null ? void 0 : _a3.before_code) || ((_b2 = this.test) == null ? void 0 : _b2.after_code);
      return $`
			${this.runTest ? $`
				<button class="button is-small" ?disabled=${this.testStatus === "running" /* Running */} @click=${() => {
        var _a4;
        return (_a4 = this.runTest) == null ? void 0 : _a4.call(this, this.test.name);
      }}>${this.getRunButtonText()}</button>
			` : null}
			<button class="button is-small" @click=${this.openModal}>View details</button>
			
			<div class="modal${this.open ? " is-active" : ""}">
				<div class="modal-background" @click=${this.closeModal}></div>
				<div class="modal-card">
					<header class="modal-card-head">
						<p class="modal-card-title">Test results: ${(_c = this.test) == null ? void 0 : _c.name}</p>
						<button class="delete" aria-label="close" @click=${this.closeModal}></button>
					</header>
					<section class="modal-card-body">

						<div class='collapsible-section'>
							${((_d = this.test) == null ? void 0 : _d.instructions) ? $`
								<article class="message">
									<div class="message-header">
										<a href="#instruction-section-${this.instanceID}" data-action="collapse">Instructions</a>
									</div>
									<div id="instruction-section-${this.instanceID}" class="message-body is-collapsible">
										<div class="message-body-content">
											${o6((_e = this.test) == null ? void 0 : _e.instructions)}
										</div>
									</div>
								</article>
							` : null}
							
							${hasTestCode ? $`							
								<article class="message">
									<div class="message-header">
										<a href="#test-code-section-${this.instanceID}" data-action="collapse">Test code</a>
									</div>
									<div id="test-code-section-${this.instanceID}" class="message-body is-collapsible">
										<div class="message-body-content">
											${((_f = this.test) == null ? void 0 : _f.can_see_test_code) ? $`

												${((_g = this.test) == null ? void 0 : _g.before_code) ? $`
													<p>Code run before your code:</p>
													<pre>${(_h = this.test) == null ? void 0 : _h.before_code}</pre>
												` : null}

												${((_i = this.test) == null ? void 0 : _i.after_code) ? $`
													<p>Code run after your code:</p>
													<pre>${(_j = this.test) == null ? void 0 : _j.after_code}</pre>
													` : null}

												${!!((_k = this.test) == null ? void 0 : _k.before_code) && !!((_l = this.test) == null ? void 0 : _l.after_code) ? $`
													<p>No additional code is run before or after your code.</p>
												` : null}

											` : $`
												<p disabled>The test code will not be shown for this test.</p>
											`}
										</div>
									</div>
								</article>
							` : null}
							<article class="message">
								<div class="message-header">
									<a href="#expected-output-section-${this.instanceID}" data-action="collapse">Expected output</a>
								</div>
								<div id="expected-output-section-${this.instanceID}" class="message-body is-collapsible">
									<div class="message-body-content">
										${this.getExpectedOutput()}
									</div>
								</div>
							</article>
							<!-- <article class="message"> -->
							<article class="message grow">
								<div class="message-header">
									<a href="#user-output-section-${this.instanceID}" data-action="collapse">Your output</a>
								</div>
								<div id="user-output-section-${this.instanceID}" class="message-body is-collapsible">
									<div class="message-body-content">
										${this.getTestOutput()}
									</div>
								</div>
							</article>
						</div>
					</section>
				</div>
			</div>
		`;
    }
    openModal() {
      return __async(this, null, function* () {
        this.open = true;
        yield this.updateComplete;
        yield new Promise(() => {
          if (!this.opened) {
            this.opened = true;
            for (const collapsible of this.collapsibles) {
              collapsible.expand();
            }
          }
        });
      });
    }
    closeModal(e10) {
      e10.stopPropagation();
      this.open = false;
    }
    getRunButtonText() {
      switch (this.testStatus) {
        case "running" /* Running */:
          return $`Run test <i class="fas fa-spinner fa-spin running"></i>`;
        case "passed" /* Passed */:
        case "failed" /* Failed */:
        case "unknown" /* Unknown */:
          return $`Run test <i class="fas fa-play"></i>`;
        default:
          return "";
      }
    }
    getTestOutput() {
      var _a3, _b2;
      const tabs = ["Plain Output" /* Plain */];
      if (((_a3 = this.test) == null ? void 0 : _a3.can_see_code_output) && ((_b2 = this.test) == null ? void 0 : _b2.can_see_expected_output)) {
        switch (this.testStatus) {
          case "failed" /* Failed */:
            tabs.push("Text Diff" /* TextDiff */);
            if (this.imageDiff) {
              tabs.push("Image Diff" /* ImageDiff */);
            }
            break;
          case "running" /* Running */:
            return $`<h3>Currently running.</h3>`;
          default:
            break;
        }
      }
      if (tabs.length === 1) {
        return this.tabOutputs[tabs[0]]();
      }
      if (!tabs.includes(this.currentTab)) {
        this.currentTab = tabs[0];
      }
      return $`
			<div>
				<div class="tabs">
					<ul>
						${tabs.map((tab) => $`
							<li class=${tab === this.currentTab ? "is-active" : ""} @click=${() => this.currentTab = tab}><a>${tab}</a></li>
						`)}
					</ul>
				</div>
			</div>
			${this.tabOutputs[this.currentTab]()}				
		`;
    }
    getUserOutput() {
      var _a3;
      if (!((_a3 = this.test) == null ? void 0 : _a3.can_see_code_output)) {
        return $`<h3>Your output will not be shown for this test.</h3>`;
      }
      if (this.testStatus === "unknown" /* Unknown */) {
        return $`<h3>This test has not been run yet, so you have no output.</h3>`;
      }
      return $`
			${this.userOutput ? $`
				<pre>${this.userOutput}</pre>
			` : null}
			${this.userImageOutput ? $`
				<img src='data:image/jpg;base64,${this.userImageOutput}' width="100%" />
			` : null}		
		`;
    }
    getExpectedOutput() {
      var _a3;
      if (!((_a3 = this.test) == null ? void 0 : _a3.can_see_expected_output)) {
        return $`<h3>The expected output will not be shown for this test.</h3>`;
      }
      return $`
			${this.expectedOutput ? $`
				<pre>${this.expectedOutput}</pre>
			` : null}
			${this.expectedImageOutput ? $`
				<img src='data:image/jpg;base64,${this.expectedImageOutput}' width="100%" />
			` : null}		
		`;
    }
  };
  TestResultsModal.nextID = 0;
  __decorateClass([
    t3()
  ], TestResultsModal.prototype, "open", 2);
  __decorateClass([
    e4()
  ], TestResultsModal.prototype, "testStatus", 2);
  __decorateClass([
    e4()
  ], TestResultsModal.prototype, "test", 2);
  __decorateClass([
    e4()
  ], TestResultsModal.prototype, "userOutput", 2);
  __decorateClass([
    e4()
  ], TestResultsModal.prototype, "expectedOutput", 2);
  __decorateClass([
    e4()
  ], TestResultsModal.prototype, "userImageOutput", 2);
  __decorateClass([
    e4()
  ], TestResultsModal.prototype, "expectedImageOutput", 2);
  __decorateClass([
    e4()
  ], TestResultsModal.prototype, "imageDiff", 2);
  __decorateClass([
    e4()
  ], TestResultsModal.prototype, "runTest", 2);
  __decorateClass([
    t3()
  ], TestResultsModal.prototype, "currentTab", 2);
  __decorateClass([
    bind_default
  ], TestResultsModal.prototype, "openModal", 1);
  __decorateClass([
    bind_default
  ], TestResultsModal.prototype, "closeModal", 1);
  __decorateClass([
    bind_default
  ], TestResultsModal.prototype, "getRunButtonText", 1);
  __decorateClass([
    bind_default
  ], TestResultsModal.prototype, "getTestOutput", 1);
  TestResultsModal = __decorateClass([
    n5("test-results-modal")
  ], TestResultsModal);

  // node_modules/lit-html/directive-helpers.js
  var { H: l5 } = L;
  var e8 = (o8) => void 0 === o8.strings;

  // node_modules/lit-html/async-directive.js
  var e9 = (i6, t5) => {
    var s5, o8;
    const n9 = i6._$AN;
    if (void 0 === n9)
      return false;
    for (const i7 of n9)
      null === (o8 = (s5 = i7)._$AO) || void 0 === o8 || o8.call(s5, t5, false), e9(i7, t5);
    return true;
  };
  var o7 = (i6) => {
    let t5, s5;
    do {
      if (void 0 === (t5 = i6._$AM))
        break;
      s5 = t5._$AN, s5.delete(i6), i6 = t5;
    } while (0 === (null == s5 ? void 0 : s5.size));
  };
  var n7 = (i6) => {
    for (let t5; t5 = i6._$AM; i6 = t5) {
      let s5 = t5._$AN;
      if (void 0 === s5)
        t5._$AN = s5 = /* @__PURE__ */ new Set();
      else if (s5.has(i6))
        break;
      s5.add(i6), l6(t5);
    }
  };
  function r4(i6) {
    void 0 !== this._$AN ? (o7(this), this._$AM = i6, n7(this)) : this._$AM = i6;
  }
  function h3(i6, t5 = false, s5 = 0) {
    const n9 = this._$AH, r5 = this._$AN;
    if (void 0 !== r5 && 0 !== r5.size)
      if (t5)
        if (Array.isArray(n9))
          for (let i7 = s5; i7 < n9.length; i7++)
            e9(n9[i7], false), o7(n9[i7]);
        else
          null != n9 && (e9(n9, false), o7(n9));
      else
        e9(this, i6);
  }
  var l6 = (i6) => {
    var t5, e10, o8, n9;
    i6.type == t4.CHILD && (null !== (t5 = (o8 = i6)._$AP) && void 0 !== t5 || (o8._$AP = h3), null !== (e10 = (n9 = i6)._$AQ) && void 0 !== e10 || (n9._$AQ = r4));
  };
  var d2 = class extends i5 {
    constructor() {
      super(...arguments), this._$AN = void 0;
    }
    _$AT(i6, t5, s5) {
      super._$AT(i6, t5, s5), n7(this), this.isConnected = i6._$AU;
    }
    _$AO(i6, t5 = true) {
      var s5, n9;
      i6 !== this.isConnected && (this.isConnected = i6, i6 ? null === (s5 = this.reconnected) || void 0 === s5 || s5.call(this) : null === (n9 = this.disconnected) || void 0 === n9 || n9.call(this)), t5 && (e9(this, i6), o7(this));
    }
    setValue(t5) {
      if (e8(this._$Ct))
        this._$Ct._$AI(t5, this);
      else {
        const i6 = [...this._$Ct._$AH];
        i6[this._$Ci] = t5, this._$Ct._$AI(i6, this, 0);
      }
    }
    disconnected() {
    }
    reconnected() {
    }
  };

  // node_modules/lit-html/directives/ref.js
  var h4 = /* @__PURE__ */ new WeakMap();
  var n8 = e6(class extends d2 {
    render(t5) {
      return w;
    }
    update(t5, [s5]) {
      var e10;
      const o8 = s5 !== this.Y;
      return o8 && void 0 !== this.Y && this.rt(void 0), (o8 || this.lt !== this.ct) && (this.Y = s5, this.dt = null === (e10 = t5.options) || void 0 === e10 ? void 0 : e10.host, this.rt(this.ct = t5.element)), w;
    }
    rt(i6) {
      var t5;
      if ("function" == typeof this.Y) {
        const s5 = null !== (t5 = this.dt) && void 0 !== t5 ? t5 : globalThis;
        let e10 = h4.get(s5);
        void 0 === e10 && (e10 = /* @__PURE__ */ new WeakMap(), h4.set(s5, e10)), void 0 !== e10.get(this.Y) && this.Y.call(this.dt, void 0), e10.set(this.Y, i6), void 0 !== i6 && this.Y.call(this.dt, i6);
      } else
        this.Y.value = i6;
    }
    get lt() {
      var i6, t5, s5;
      return "function" == typeof this.Y ? null === (t5 = h4.get(null !== (i6 = this.dt) && void 0 !== i6 ? i6 : globalThis)) || void 0 === t5 ? void 0 : t5.get(this.Y) : null === (s5 = this.Y) || void 0 === s5 ? void 0 : s5.value;
    }
    disconnected() {
      this.lt === this.ct && this.rt(void 0);
    }
    reconnected() {
      this.rt(this.ct);
    }
  });

  // ui/pages/exercise/ExerciseApp.ts
  var ace3 = __toESM(require_ace());

  // ui/utils/debounce.ts
  function debounce(func, waitFor) {
    let timeout = 0;
    const debounced = (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), waitFor);
    };
    return debounced;
  }

  // ui/utils/oneAtATime.ts
  function oneAtATime(func) {
    let currentPromise = null;
    return (...args) => __async(this, null, function* () {
      while (currentPromise !== null) {
        try {
          yield currentPromise;
        } finally {
        }
      }
      try {
        currentPromise = func(...args);
        return yield currentPromise;
      } finally {
        currentPromise = null;
      }
    });
  }

  // ui/pages/exercise/ExerciseApp.ts
  var { code_completion_path, submissions, exercise_details: exercise_details3, presubmission } = window.templateData;
  var courseID = window.templateData.course_basics.id;
  var assignmentID = window.templateData.assignment_basics.id;
  var exerciseID = window.templateData.exercise_basics.id;
  var SAVE_DEBOUNCE_TIME = 2e3;
  var _a, _b;
  var ExerciseApp = class extends s4 {
    constructor() {
      super(...arguments);
      this.saved = true;
      this.submissions = (_b = (_a = submissions == null ? void 0 : submissions.map) == null ? void 0 : _a.call(submissions, (s5) => ({
        id: s5.id,
        date: new Date(s5.date),
        code: s5.code,
        passed: !!s5.passed,
        test_outputs: s5.test_outputs
      }))) != null ? _b : [];
      this.sessions = {};
      this.userCodeFileName = "code";
    }
    render() {
      const activeSubmission = this.activeSubmission;
      return $`
			<div style="height: 100%;">
				<split-pane
					direction="vertical"
					cacheID="exercise-vertical"
					.defaultSplit=${0.3}
					.minSizes=${[200, 380]}
					.first=${$`
						<information-pane
							.files=${this.files}
							.submissions=${this.submissions}
							.selectedFile=${this.selectedFile}
							.onFileSelected=${this.onFileSelected}
						></information-pane>
					`}
					.second=${$`
						<split-pane
							direction="horizontal"
							cacheID="exercise-horizontal"
							.defaultSplit=${0.7}
							.minSizes=${[100, 100]}
							.fixedSide='second'
							.first=${$`
								<div class="edit-section">
									<code-editor ${n8(this.setEditor)}></code-editor>
									${activeSubmission ? $`
									<article class="message is-warning" style="margin-bottom: 0px;">
										<div class="message-header">
											<p>You are viewing submission ${activeSubmission.id + 1} from ${activeSubmission.date.toLocaleString()}</p>
											<span style="flex: 1;"></span>
											<button class="button is-small outlined" @click=${this.copySubmissionCode}>Restore this version</button>
											<button
												style="margin-left: 8px;"
												class="button is-small outlined"
												@click=${() => this.onFileSelected(this.userCodeFileName)}
											>Return to latest version</button>
										</div>
									</article>
									` : null}
									${this.selectedFile === this.userCodeFileName ? $`
											<div class="save-indicator">
												${this.saved ? $`
													<i class="fas fa-check has-tooltip-left" data-tooltip="Saved"></i>
												` : $`
													<i class="fas fa-spinner fa-spin running has-tooltip-left" data-tooltip="Saving"></i>
												`}
											</div>
										` : null}
								</div>
							`}
							.second=${$`
								<tests-pane 
									.getCode=${this.getUserCode}
									.activeSubmission=${this.activeSubmission}
									.addSubmission=${this.addSubmission}
									.numSubmissions=${this.submissions.length}
									.hasPassingSubmission=${this.hasPassingSubmission}
									.selectPassingSubmission=${() => {
        for (let i6 = this.submissions.length - 1; i6 >= 0; i6--) {
          const submission = this.submissions[i6];
          if (submission.passed) {
            this.onFileSelected(`submission-${submission.id}`);
            break;
          }
        }
      }}
								></tests-pane>
							`}
						>
						</split-pane>
					`}
				></split-pane>
			</div>
		`;
    }
    setEditor(editor) {
      if (editor instanceof CodeEditor) {
        const firstTime = !this.editor;
        this.editor = editor;
        if (firstTime) {
          let value = "";
          if (presubmission) {
            value = presubmission;
          } else if ((submissions == null ? void 0 : submissions.length) > 0) {
            value = submissions[submissions.length - 1].code;
          } else if (exercise_details3 == null ? void 0 : exercise_details3.starter_code) {
            value = exercise_details3.starter_code;
          }
          const session = new ace3.EditSession(value);
          session.setUndoManager(new UndoManager());
          session.setMode(code_completion_path);
          const saveCode = debounce(oneAtATime(() => __async(this, null, function* () {
            yield savePresubmission(courseID, assignmentID, exerciseID, session.getValue());
            this.saved = true;
          })), SAVE_DEBOUNCE_TIME);
          session.on("change", () => {
            this.saved = false;
            saveCode();
          });
          this.editor.setSession(session);
          switch (exercise_details3.back_end) {
            case "python_script":
              this.userCodeFileName = "code.py";
              break;
          }
          this.sessions[this.userCodeFileName] = session;
          const files = [{ name: this.userCodeFileName, type: "user-code" }];
          for (const fileName in exercise_details3.data_files) {
            const fileContents = exercise_details3.data_files[fileName];
            const session2 = new ace3.EditSession(fileContents);
            session2.setUndoManager(new UndoManager());
            const match = fileName.match(/.*\.(.*)$/);
            if (match && match[1]) {
              const ext = match[1];
              switch (ext) {
                case "py":
                  session2.setMode("ace/mode/python");
                  break;
              }
            }
            this.sessions[fileName] = session2;
            files.push({ name: fileName, type: "data-file" });
          }
          for (const submission of this.submissions) {
            const session2 = new ace3.EditSession(submission.code);
            session2.setMode(code_completion_path);
            this.sessions[`submission-${submission.id}`] = session2;
          }
          this.files = files;
          this.selectedFile = this.userCodeFileName;
        }
      }
    }
    getUserCode() {
      var _a3;
      return (_a3 = this.sessions[this.userCodeFileName]) == null ? void 0 : _a3.getValue();
    }
    onFileSelected(name2) {
      var _a3, _b2;
      const session = this.sessions[name2];
      if (session) {
        (_a3 = this.editor) == null ? void 0 : _a3.setSession(session);
        (_b2 = this.editor) == null ? void 0 : _b2.setReadOnly(name2 !== this.userCodeFileName);
        this.selectedFile = name2;
      }
    }
    addSubmission(submission) {
      this.submissions = [...this.submissions, submission];
      const session = new ace3.EditSession(submission.code);
      session.setMode(code_completion_path);
      this.sessions[`submission-${submission.id}`] = session;
    }
    copySubmissionCode() {
      if (!confirm("Do you want to overwrite your existing code?")) {
        return;
      }
      ;
      const oldSession = this.sessions[this.selectedFile];
      const newSession = this.sessions[this.userCodeFileName];
      newSession.setValue(oldSession.getValue());
      this.onFileSelected(this.userCodeFileName);
    }
    get hasPassingSubmission() {
      var _a3;
      return !!((_a3 = this.submissions) == null ? void 0 : _a3.find((submission) => !!submission.passed));
    }
    get activeSubmission() {
      var _a3;
      if ((_a3 = this.selectedFile) == null ? void 0 : _a3.startsWith("submission-")) {
        const id = Number(this.selectedFile.replace("submission-", ""));
        return this.submissions.find((s5) => s5.id === id);
      }
      return void 0;
    }
  };
  __decorateClass([
    t3()
  ], ExerciseApp.prototype, "saved", 2);
  __decorateClass([
    t3()
  ], ExerciseApp.prototype, "files", 2);
  __decorateClass([
    t3()
  ], ExerciseApp.prototype, "selectedFile", 2);
  __decorateClass([
    t3()
  ], ExerciseApp.prototype, "submissions", 2);
  __decorateClass([
    bind_default
  ], ExerciseApp.prototype, "setEditor", 1);
  __decorateClass([
    bind_default
  ], ExerciseApp.prototype, "getUserCode", 1);
  __decorateClass([
    bind_default
  ], ExerciseApp.prototype, "onFileSelected", 1);
  __decorateClass([
    bind_default
  ], ExerciseApp.prototype, "addSubmission", 1);
  __decorateClass([
    bind_default
  ], ExerciseApp.prototype, "copySubmissionCode", 1);
  ExerciseApp = __decorateClass([
    n5("exercise-app")
  ], ExerciseApp);
  var _a2;
  var InformationPane = class extends s4 {
    constructor() {
      super(...arguments);
      this.showHint = false;
      this.copyModalOpen = false;
      this.deleteModalOpen = false;
      this.selectedTab = (_a2 = window.localStorage.getItem(`selected-tab-${exerciseID}`)) != null ? _a2 : "Information" /* Information */;
      this.tabPanels = {
        ["Information" /* Information */]: () => $`
			<div class="content is-medium">
				<h6>Instructions</h6>
				${exercise_details3.enable_pair_programming ? $`
					<div style="margin-bottom: 16px;">
						<i class="fab fa-product-hunt"></i>
						<em>Pair programming is enabled for this exercise.</em>
					</div>
				` : null}
				${o6(window.templateData.exercise_details.instructions)}
			</div>
			${exercise_details3.hint ? $`
				<div>
					<button class="button is-warning" @click=${() => this.showHint = !this.showHint}>
						${this.showHint ? "Hide hint" : "Show hint"}
					</button>
				</div>
				${this.showHint ? $`
					<div class="content is-medium" style="margin-top: 8px;">
						${o6(exercise_details3.hint)}
					</div>
				` : null}
			` : null}
		`,
        ["Code" /* Code */]: () => {
          var _a3, _b2;
          return $`
			<div class="file-list content is-medium">
				<h6>Files</h6>
				<strong>User code:</strong>
				${(_a3 = this.files) == null ? void 0 : _a3.filter((file) => file.type === "user-code").map((file) => $`
					<span
						class="file-list-item${this.selectedFile === file.name ? " active" : ""}"
						@click=${() => {
            var _a4;
            return (_a4 = this.onFileSelected) == null ? void 0 : _a4.call(this, file.name);
          }}
					>${file.name}</span>
				`)}
				${this.hasDataFiles ? $`
					<strong class="file-header">Data files:</strong>
					${(_b2 = this.files) == null ? void 0 : _b2.filter((file) => file.type === "data-file").map((file) => $`
						<span
							class="file-list-item${this.selectedFile === file.name ? " active" : ""}"
							@click=${() => {
            var _a4;
            return (_a4 = this.onFileSelected) == null ? void 0 : _a4.call(this, file.name);
          }}
						>${file.name}</span>
					`)}
				` : null}
			</div>
		`;
        },
        ["Submissions" /* Submissions */]: () => {
          var _a3;
          return $`
			<div class="submission-list content is-medium">
				<h6>Submissions</h6>
				${(_a3 = this.submissions) == null ? void 0 : _a3.map((submission, i6) => $`
					<span
						class="submission ${submission.passed ? "passed" : "failed"}${this.selectedFile === `submission-${submission.id}` ? " selected" : ""}"
						@click=${() => {
            var _a4;
            return (_a4 = this.onFileSelected) == null ? void 0 : _a4.call(this, `submission-${submission.id}`);
          }}
					>
						${i6 + 1}. ${submission.date.toLocaleString()}
					</span>
				`)}
			</div>
		`;
        }
      };
      this.tabIcons = {
        ["Information" /* Information */]: "fas fa-info-circle",
        ["Code" /* Code */]: "fas fa-folder",
        ["Submissions" /* Submissions */]: "fas fa-history"
      };
      this.tabTitles = {
        ["Information" /* Information */]: "Instructions",
        ["Code" /* Code */]: "Files",
        ["Submissions" /* Submissions */]: "Submissions"
      };
      this.panelOrder = ["Information" /* Information */, "Code" /* Code */, "Submissions" /* Submissions */];
    }
    render() {
      var _a3, _b2;
      return $`
			<div class="left-panel">
				<div class="tab-bar">
					${this.panelOrder.map((tab) => $`
						<button
							class="icon-button${this.selectedTab === tab ? " active" : ""} has-tooltip-right"
							data-tooltip="${this.tabTitles[tab]}"
							@click=${() => this.selectTab(tab)}
						>
							<i class="${this.tabIcons[tab]}"></i>
						</button>
					`)}

					${window.templateData.is_administrator || window.templateData.is_instructor ? $`

						<span class="spacer"></span>
						<button class="icon-button">
							<a href="/edit_exercise/${courseID}/${assignmentID}/${exerciseID}">
								<i class="fas fa-cog"></i>
							</a>
						</button>

						${this.copyModalOpen ? $`<copy-exercise-modal .onClose=${() => this.copyModalOpen = false}></copy-exercise-modal>` : null}
						<!-- TODO: create the delete modal -->

					` : null}
				</div>
				<div class="info-panel">
					<exercise-timer></exercise-timer>
					${(_b2 = (_a3 = this.tabPanels)[this.selectedTab]) == null ? void 0 : _b2.call(_a3)}
				</div>
			</div>
		`;
    }
    selectTab(tab) {
      this.selectedTab = tab;
      localStorage.setItem(`selected-tab-${exerciseID}`, tab);
    }
    get hasDataFiles() {
      var _a3, _b2;
      return ((_b2 = (_a3 = this.files) == null ? void 0 : _a3.filter((file) => file.type === "data-file")) == null ? void 0 : _b2.length) > 0;
    }
  };
  __decorateClass([
    e4()
  ], InformationPane.prototype, "submissions", 2);
  __decorateClass([
    e4()
  ], InformationPane.prototype, "onFileSelected", 2);
  __decorateClass([
    e4()
  ], InformationPane.prototype, "selectedFile", 2);
  __decorateClass([
    e4()
  ], InformationPane.prototype, "files", 2);
  __decorateClass([
    t3()
  ], InformationPane.prototype, "showHint", 2);
  __decorateClass([
    t3()
  ], InformationPane.prototype, "copyModalOpen", 2);
  __decorateClass([
    t3()
  ], InformationPane.prototype, "deleteModalOpen", 2);
  __decorateClass([
    t3()
  ], InformationPane.prototype, "selectedTab", 2);
  __decorateClass([
    bind_default
  ], InformationPane.prototype, "selectTab", 1);
  InformationPane = __decorateClass([
    n5("information-pane")
  ], InformationPane);
  var CopyExerciseModal = class extends s4 {
    constructor() {
      super(...arguments);
      this.errorMessage = "";
    }
    render() {
      const title = window.templateData.exercise_basics.title;
      return $`
			<div class="modal is-active">
				<div class="modal-background" @click=${this.onClose}></div>
				<div class="modal-card">
					<header class="modal-card-head">
						<p class="modal-card-title">Copy exercise within the same assignment:</p>
						<button class="delete" aria-label="close" @click=${this.onClose}></button>
					</header>
					<section class="modal-card-body">
						<div class="field">
							<label class="label">New title</label>
							<input class="input is-medium is-primary" type="text" id="new_title" name="new_title" placeholder=${title} value=${title}>
							${this.errorMessage ? $`<p class="help is-danger">${this.errorMessage}</p>` : null}
						</div>
					</section>
					<footer class="modal-card-foot">
						<button class="button is-success" @click=${this.onSave}>Save changes</button>
					</footer>
				</div>
			</div>
		`;
    }
    onSave() {
      return __async(this, null, function* () {
        const input = this.renderRoot.querySelector("#new_title");
        if (!input.value) {
          this.errorMessage = "New title is required";
          return;
        }
        if (input.value === window.templateData.exercise_basics.title) {
          this.errorMessage = "New title is the same as the old title";
          return;
        }
        const error = yield copyExercise(courseID, assignmentID, exerciseID, input.value);
        if (error) {
          this.errorMessage = error;
        }
      });
    }
  };
  __decorateClass([
    e4({ type: Boolean })
  ], CopyExerciseModal.prototype, "onClose", 2);
  __decorateClass([
    t3()
  ], CopyExerciseModal.prototype, "errorMessage", 2);
  __decorateClass([
    bind_default
  ], CopyExerciseModal.prototype, "onSave", 1);
  CopyExerciseModal = __decorateClass([
    n5("copy-exercise-modal")
  ], CopyExerciseModal);

  // ui/pages/exercise/index.ts
  s4.prototype.createRenderRoot = function() {
    return this;
  };
  var initialized = false;
  function init() {
    return __async(this, null, function* () {
      if (initialized)
        return;
      const container = document.getElementById("app");
      if (container) {
        initialized = true;
        const app = new ExerciseApp();
        container.appendChild(app);
      }
    });
  }
  if (document.readyState === "complete") {
    init();
  } else {
    document.addEventListener("readystatechange", () => {
      if (document.readyState === "interactive" || document.readyState === "complete") {
        init();
      }
    });
  }
})();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */