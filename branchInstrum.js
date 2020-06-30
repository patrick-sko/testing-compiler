/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
self.window || (self.window = self, self.window.top = self);
var __jscov = window.top.__jscov || (window.top.__jscov = {fileNames:[], branchPresent:[], branchesInLine:[], branchesTaken:[]}), JSCompiler_lcov_branch_data_js_base_js = [];
__jscov.branchesTaken.push(JSCompiler_lcov_branch_data_js_base_js);
__jscov.branchPresent.push("00000000000000000000000000001013000020210000000000000000000000000000002009008801002400000004010000000000880041020000c0020000000000000441000042000018220401000008000000002000000000000a00000100000000080080c2040000000000000000000000000000090000000000000000000000000008000000000034801400000000000b00008000000040240001800000004044000000000000000000000000008000000000003002000000002200000000000100000000000002000000548000000000000000000000004000100800020000000000200000004008000000000000000000000000000010000002000400000080800003000000000800000000003080020800000040080442000000000000050000001000000000002a2c000000000000000000401014900000000012000000014004068000800002010208002000000200100004000080c12004000a00500000000000000000000000000000000000001200020004000000000020010080010900000201090000001102000000003020002000000022001000000000000000000000000a0a002182002204000000000000040000048420000000000000000000000000001001000000808000000000440c0000000000000800000000000002");
var JSCompiler_lcov_branchesInLine = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 
2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
__jscov.branchesInLine.push(JSCompiler_lcov_branchesInLine);
__jscov.fileNames.push("js/base.js");
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(a) {
  var b = 0;
  return function() {
    return b < a.length ? {done:!1, value:a[b++], } : {done:!0};
  };
};
$jscomp.arrayIterator = function(a) {
  return {next:$jscomp.arrayIteratorImpl(a)};
};
$jscomp.makeIterator = function(a) {
  var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  return b ? b.call(a) : $jscomp.arrayIterator(a);
};
$jscomp.getGlobal = function(a) {
  a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, ];
  for (var b = 0; b < a.length; ++b) {
    var c = a[b];
    if (c && c.Math == Math) {
      return c;
    }
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.checkEs6ConformanceViaProxy = function() {
  try {
    var a = {}, b = Object.create(new $jscomp.global.Proxy(a, {get:function(c, d, e) {
      return c == a && "q" == d && e == b;
    }}));
    return !0 === b.q;
  } catch (c) {
    return !1;
  }
};
$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
$jscomp.ES6_CONFORMANCE = $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS && $jscomp.checkEs6ConformanceViaProxy();
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
  if (a == Array.prototype || a == Object.prototype) {
    return a;
  }
  a[b] = c.value;
  return a;
};
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(a, b) {
  var c = $jscomp.propertyToPolyfillSymbol[b];
  if (null == c) {
    return a[b];
  }
  c = a[c];
  return void 0 !== c ? c : a[b];
};
$jscomp.polyfill = function(a, b, c, d) {
  b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, c, d) : $jscomp.polyfillUnisolated(a, b, c, d));
};
$jscomp.polyfillUnisolated = function(a, b, c, d) {
  c = $jscomp.global;
  a = a.split(".");
  for (d = 0; d < a.length - 1; d++) {
    var e = a[d];
    if (!(e in c)) {
      return;
    }
    c = c[e];
  }
  a = a[a.length - 1];
  d = c[a];
  b = b(d);
  b != d && null != b && $jscomp.defineProperty(c, a, {configurable:!0, writable:!0, value:b});
};
$jscomp.polyfillIsolated = function(a, b, c, d) {
  var e = a.split(".");
  a = 1 === e.length;
  d = e[0];
  d = !a && d in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var f = 0; f < e.length - 1; f++) {
    var g = e[f];
    if (!(g in d)) {
      return;
    }
    d = d[g];
  }
  e = e[e.length - 1];
  c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? d[e] : null;
  b = b(c);
  null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, e, {configurable:!0, writable:!0, value:b}) : b !== c && ($jscomp.propertyToPolyfillSymbol[e] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(e) : $jscomp.POLYFILL_PREFIX + e, e = $jscomp.propertyToPolyfillSymbol[e], $jscomp.defineProperty(d, e, {configurable:!0, writable:!0, value:b})));
};
$jscomp.initSymbol = function() {
};
$jscomp.polyfill("Symbol", function(a) {
  if (a) {
    return a;
  }
  var b = function(e, f) {
    this.$jscomp$symbol$id_ = e;
    $jscomp.defineProperty(this, "description", {configurable:!0, writable:!0, value:f});
  };
  b.prototype.toString = function() {
    return this.$jscomp$symbol$id_;
  };
  var c = 0, d = function(e) {
    if (this instanceof d) {
      throw new TypeError("Symbol is not a constructor");
    }
    return new b("jscomp_symbol_" + (e || "") + "_" + c++, e);
  };
  return d;
}, "es6", "es3");
$jscomp.initSymbolIterator = function() {
};
$jscomp.polyfill("Symbol.iterator", function(a) {
  if (a) {
    return a;
  }
  a = Symbol("Symbol.iterator");
  for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
    var d = $jscomp.global[b[c]];
    "function" === typeof d && "function" != typeof d.prototype[a] && $jscomp.defineProperty(d.prototype, a, {configurable:!0, writable:!0, value:function() {
      return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
    }});
  }
  return a;
}, "es6", "es3");
$jscomp.initSymbolAsyncIterator = function() {
};
$jscomp.iteratorPrototype = function(a) {
  a = {next:a};
  a[Symbol.iterator] = function() {
    return this;
  };
  return a;
};
$jscomp.owns = function(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
$jscomp.polyfill("WeakMap", function(a) {
  function b() {
    if (!a || !Object.seal) {
      return !1;
    }
    try {
      var k = Object.seal({}), l = Object.seal({}), m = new a([[k, 2], [l, 3]]);
      if (2 != m.get(k) || 3 != m.get(l)) {
        return !1;
      }
      m.delete(k);
      m.set(l, 4);
      return !m.has(k) && 4 == m.get(l);
    } catch (p) {
      return !1;
    }
  }
  function c() {
  }
  function d(k) {
    var l = typeof k;
    return "object" === l && null !== k || "function" === l;
  }
  function e(k) {
    if (!$jscomp.owns(k, g)) {
      var l = new c;
      $jscomp.defineProperty(k, g, {value:l});
    }
  }
  function f(k) {
    if (!$jscomp.ISOLATE_POLYFILLS) {
      var l = Object[k];
      l && (Object[k] = function(m) {
        if (m instanceof c) {
          return m;
        }
        Object.isExtensible(m) && e(m);
        return l(m);
      });
    }
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (a && $jscomp.ES6_CONFORMANCE) {
      return a;
    }
  } else {
    if (b()) {
      return a;
    }
  }
  var g = "$jscomp_hidden_" + Math.random();
  f("freeze");
  f("preventExtensions");
  f("seal");
  var n = 0, h = function(k) {
    this.id_ = (n += Math.random() + 1).toString();
    if (k) {
      k = $jscomp.makeIterator(k);
      for (var l; !(l = k.next()).done;) {
        l = l.value, this.set(l[0], l[1]);
      }
    }
  };
  h.prototype.set = function(k, l) {
    if (!d(k)) {
      throw Error("Invalid WeakMap key");
    }
    e(k);
    if (!$jscomp.owns(k, g)) {
      throw Error("WeakMap key fail: " + k);
    }
    k[g][this.id_] = l;
    return this;
  };
  h.prototype.get = function(k) {
    return d(k) && $jscomp.owns(k, g) ? k[g][this.id_] : void 0;
  };
  h.prototype.has = function(k) {
    return d(k) && $jscomp.owns(k, g) && $jscomp.owns(k[g], this.id_);
  };
  h.prototype.delete = function(k) {
    return d(k) && $jscomp.owns(k, g) && $jscomp.owns(k[g], this.id_) ? delete k[g][this.id_] : !1;
  };
  return h;
}, "es6", "es3");
$jscomp.MapEntry = function() {
};
$jscomp.polyfill("Map", function(a) {
  function b() {
    if ($jscomp.ASSUME_NO_NATIVE_MAP || !a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) {
      return !1;
    }
    try {
      var h = Object.seal({x:4}), k = new a($jscomp.makeIterator([[h, "s"]]));
      if ("s" != k.get(h) || 1 != k.size || k.get({x:4}) || k.set({x:4}, "t") != k || 2 != k.size) {
        return !1;
      }
      var l = k.entries(), m = l.next();
      if (m.done || m.value[0] != h || "s" != m.value[1]) {
        return !1;
      }
      m = l.next();
      return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0;
    } catch (p) {
      return !1;
    }
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (a && $jscomp.ES6_CONFORMANCE) {
      return a;
    }
  } else {
    if (b()) {
      return a;
    }
  }
  var c = new WeakMap, d = function(h) {
    this.data_ = {};
    this.head_ = g();
    this.size = 0;
    if (h) {
      h = $jscomp.makeIterator(h);
      for (var k; !(k = h.next()).done;) {
        k = k.value, this.set(k[0], k[1]);
      }
    }
  };
  d.prototype.set = function(h, k) {
    h = 0 === h ? 0 : h;
    var l = e(this, h);
    l.list || (l.list = this.data_[l.id] = []);
    l.entry ? l.entry.value = k : (l.entry = {next:this.head_, previous:this.head_.previous, head:this.head_, key:h, value:k, }, l.list.push(l.entry), this.head_.previous.next = l.entry, this.head_.previous = l.entry, this.size++);
    return this;
  };
  d.prototype.delete = function(h) {
    h = e(this, h);
    return h.entry && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.data_[h.id], h.entry.previous.next = h.entry.next, h.entry.next.previous = h.entry.previous, h.entry.head = null, this.size--, !0) : !1;
  };
  d.prototype.clear = function() {
    this.data_ = {};
    this.head_ = this.head_.previous = g();
    this.size = 0;
  };
  d.prototype.has = function(h) {
    return !!e(this, h).entry;
  };
  d.prototype.get = function(h) {
    return (h = e(this, h).entry) && h.value;
  };
  d.prototype.entries = function() {
    return f(this, function(h) {
      return [h.key, h.value];
    });
  };
  d.prototype.keys = function() {
    return f(this, function(h) {
      return h.key;
    });
  };
  d.prototype.values = function() {
    return f(this, function(h) {
      return h.value;
    });
  };
  d.prototype.forEach = function(h, k) {
    for (var l = this.entries(), m; !(m = l.next()).done;) {
      m = m.value, h.call(k, m[1], m[0], this);
    }
  };
  d.prototype[Symbol.iterator] = d.prototype.entries;
  var e = function(h, k) {
    var l;
    var m = (l = k) && typeof l;
    "object" == m || "function" == m ? c.has(l) ? l = c.get(l) : (m = "" + ++n, c.set(l, m), l = m) : l = "p_" + l;
    if ((m = h.data_[l]) && $jscomp.owns(h.data_, l)) {
      for (h = 0; h < m.length; h++) {
        var p = m[h];
        if (k !== k && p.key !== p.key || k === p.key) {
          return {id:l, list:m, index:h, entry:p};
        }
      }
    }
    return {id:l, list:m, index:-1, entry:void 0};
  }, f = function(h, k) {
    var l = h.head_;
    return $jscomp.iteratorPrototype(function() {
      if (l) {
        for (; l.head != h.head_;) {
          l = l.previous;
        }
        for (; l.next != l.head;) {
          return l = l.next, {done:!1, value:k(l)};
        }
        l = null;
      }
      return {done:!0, value:void 0};
    });
  }, g = function() {
    var h = {};
    return h.previous = h.next = h.head = h;
  }, n = 0;
  return d;
}, "es6", "es3");
$jscomp.polyfill("Set", function(a) {
  function b() {
    if ($jscomp.ASSUME_NO_NATIVE_SET || !a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) {
      return !1;
    }
    try {
      var d = Object.seal({x:4}), e = new a($jscomp.makeIterator([d]));
      if (!e.has(d) || 1 != e.size || e.add(d) != e || 1 != e.size || e.add({x:4}) != e || 2 != e.size) {
        return !1;
      }
      var f = e.entries(), g = f.next();
      if (g.done || g.value[0] != d || g.value[1] != d) {
        return !1;
      }
      g = f.next();
      return g.done || g.value[0] == d || 4 != g.value[0].x || g.value[1] != g.value[0] ? !1 : f.next().done;
    } catch (n) {
      return !1;
    }
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (a && $jscomp.ES6_CONFORMANCE) {
      return a;
    }
  } else {
    if (b()) {
      return a;
    }
  }
  var c = function(d) {
    this.map_ = new Map;
    if (d) {
      d = $jscomp.makeIterator(d);
      for (var e; !(e = d.next()).done;) {
        this.add(e.value);
      }
    }
    this.size = this.map_.size;
  };
  c.prototype.add = function(d) {
    d = 0 === d ? 0 : d;
    this.map_.set(d, d);
    this.size = this.map_.size;
    return this;
  };
  c.prototype.delete = function(d) {
    d = this.map_.delete(d);
    this.size = this.map_.size;
    return d;
  };
  c.prototype.clear = function() {
    this.map_.clear();
    this.size = 0;
  };
  c.prototype.has = function(d) {
    return this.map_.has(d);
  };
  c.prototype.entries = function() {
    return this.map_.entries();
  };
  c.prototype.values = function() {
    return this.map_.values();
  };
  c.prototype.keys = c.prototype.values;
  c.prototype[Symbol.iterator] = c.prototype.values;
  c.prototype.forEach = function(d, e) {
    var f = this;
    this.map_.forEach(function(g) {
      return d.call(e, g, g, f);
    });
  };
  return c;
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.fill", function(a) {
  return a ? a : function(b, c, d) {
    var e = this.length || 0;
    0 > c && (c = Math.max(0, e + c));
    if (null == d || d > e) {
      d = e;
    }
    d = Number(d);
    0 > d && (d = Math.max(0, e + d));
    for (c = Number(c || 0); c < d; c++) {
      this[c] = b;
    }
    return this;
  };
}, "es6", "es3");
var COMPILED = !0, goog = goog || {};
goog.global = this || self;
goog.exportPath_ = function(a, b, c) {
  a = a.split(".");
  c = c || goog.global;
  a[0] in c || "undefined" == typeof c.execScript ? JSCompiler_lcov_branch_data_js_base_js[1] = !0 : (JSCompiler_lcov_branch_data_js_base_js[0] = !0, c.execScript("var " + a[0]));
  for (var d; a.length && (d = a.shift());) {
    JSCompiler_lcov_branch_data_js_base_js[2] = !0, a.length || void 0 === b ? (JSCompiler_lcov_branch_data_js_base_js[5] = !0, c[d] && c[d] !== Object.prototype[d] ? (JSCompiler_lcov_branch_data_js_base_js[6] = !0, c = c[d]) : (JSCompiler_lcov_branch_data_js_base_js[7] = !0, c = c[d] = {})) : (JSCompiler_lcov_branch_data_js_base_js[4] = !0, c[d] = b);
  }
  JSCompiler_lcov_branch_data_js_base_js[3] = !0;
};
goog.define = function(a, b) {
  if (COMPILED) {
    JSCompiler_lcov_branch_data_js_base_js[9] = !0;
  } else {
    JSCompiler_lcov_branch_data_js_base_js[8] = !0;
    var c = goog.global.CLOSURE_UNCOMPILED_DEFINES, d = goog.global.CLOSURE_DEFINES;
    c && void 0 === c.nodeType && Object.prototype.hasOwnProperty.call(c, a) ? (JSCompiler_lcov_branch_data_js_base_js[10] = !0, b = c[a]) : (JSCompiler_lcov_branch_data_js_base_js[11] = !0, d && void 0 === d.nodeType && Object.prototype.hasOwnProperty.call(d, a) ? (JSCompiler_lcov_branch_data_js_base_js[12] = !0, b = d[a]) : JSCompiler_lcov_branch_data_js_base_js[13] = !0);
  }
  return b;
};
goog.FEATURESET_YEAR = 2012;
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.TRUSTED_SITE = !0;
goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1;
goog.provide = function(a) {
  if (goog.isInModuleLoader_()) {
    throw JSCompiler_lcov_branch_data_js_base_js[14] = !0, Error("goog.provide cannot be used within a module.");
  }
  JSCompiler_lcov_branch_data_js_base_js[15] = !0;
  if (COMPILED) {
    JSCompiler_lcov_branch_data_js_base_js[17] = !0;
  } else {
    JSCompiler_lcov_branch_data_js_base_js[16] = !0;
    if (goog.isProvided_(a)) {
      throw JSCompiler_lcov_branch_data_js_base_js[18] = !0, Error('Namespace "' + a + '" already declared.');
    }
    JSCompiler_lcov_branch_data_js_base_js[19] = !0;
  }
  goog.constructNamespace_(a);
};
goog.constructNamespace_ = function(a, b) {
  if (COMPILED) {
    JSCompiler_lcov_branch_data_js_base_js[21] = !0;
  } else {
    JSCompiler_lcov_branch_data_js_base_js[20] = !0;
    delete goog.implicitNamespaces_[a];
    for (var c = a; c = c.substring(0, c.lastIndexOf("."));) {
      JSCompiler_lcov_branch_data_js_base_js[22] = !0;
      if (goog.getObjectByName(c)) {
        JSCompiler_lcov_branch_data_js_base_js[24] = !0;
        break;
      } else {
        JSCompiler_lcov_branch_data_js_base_js[25] = !0;
      }
      goog.implicitNamespaces_[c] = !0;
    }
  }
  JSCompiler_lcov_branch_data_js_base_js[23] = !0;
  goog.exportPath_(a, b);
};
goog.getScriptNonce = function(a) {
  if (a && a != goog.global) {
    return JSCompiler_lcov_branch_data_js_base_js[26] = !0, goog.getScriptNonce_(a.document);
  }
  JSCompiler_lcov_branch_data_js_base_js[27] = !0;
  null === goog.cspNonce_ ? (JSCompiler_lcov_branch_data_js_base_js[28] = !0, goog.cspNonce_ = goog.getScriptNonce_(goog.global.document)) : JSCompiler_lcov_branch_data_js_base_js[29] = !0;
  return goog.cspNonce_;
};
goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
goog.cspNonce_ = null;
goog.getScriptNonce_ = function(a) {
  if (a = a.querySelector && a.querySelector("script[nonce]")) {
    JSCompiler_lcov_branch_data_js_base_js[30] = !0;
    if ((a = a.nonce || a.getAttribute("nonce")) && goog.NONCE_PATTERN_.test(a)) {
      return JSCompiler_lcov_branch_data_js_base_js[32] = !0, a;
    }
    JSCompiler_lcov_branch_data_js_base_js[33] = !0;
  } else {
    JSCompiler_lcov_branch_data_js_base_js[31] = !0;
  }
  return "";
};
goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module = function(a) {
  if ("string" === typeof a && a && -1 != a.search(goog.VALID_MODULE_RE_)) {
    JSCompiler_lcov_branch_data_js_base_js[35] = !0;
  } else {
    throw JSCompiler_lcov_branch_data_js_base_js[34] = !0, Error("Invalid module identifier");
  }
  if (goog.isInGoogModuleLoader_()) {
    JSCompiler_lcov_branch_data_js_base_js[37] = !0;
  } else {
    throw JSCompiler_lcov_branch_data_js_base_js[36] = !0, Error("Module " + a + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
  }
  if (goog.moduleLoaderState_.moduleName) {
    throw JSCompiler_lcov_branch_data_js_base_js[38] = !0, Error("goog.module may only be called once per module.");
  }
  JSCompiler_lcov_branch_data_js_base_js[39] = !0;
  goog.moduleLoaderState_.moduleName = a;
  if (COMPILED) {
    JSCompiler_lcov_branch_data_js_base_js[41] = !0;
  } else {
    JSCompiler_lcov_branch_data_js_base_js[40] = !0;
    if (goog.isProvided_(a)) {
      throw JSCompiler_lcov_branch_data_js_base_js[42] = !0, Error('Namespace "' + a + '" already declared.');
    }
    JSCompiler_lcov_branch_data_js_base_js[43] = !0;
    delete goog.implicitNamespaces_[a];
  }
};
goog.module.get = function(a) {
  return goog.module.getInternal_(a);
};
goog.module.getInternal_ = function(a) {
  if (COMPILED) {
    JSCompiler_lcov_branch_data_js_base_js[45] = !0;
  } else {
    JSCompiler_lcov_branch_data_js_base_js[44] = !0;
    if (a in goog.loadedModules_) {
      return JSCompiler_lcov_branch_data_js_base_js[46] = !0, goog.loadedModules_[a].exports;
    }
    JSCompiler_lcov_branch_data_js_base_js[47] = !0;
    if (goog.implicitNamespaces_[a]) {
      JSCompiler_lcov_branch_data_js_base_js[49] = !0;
    } else {
      return JSCompiler_lcov_branch_data_js_base_js[48] = !0, a = goog.getObjectByName(a), null != a ? a : null;
    }
  }
  return null;
};
goog.ModuleType = {ES6:"es6", GOOG:"goog"};
goog.moduleLoaderState_ = null;
goog.isInModuleLoader_ = function() {
  return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
};
goog.isInGoogModuleLoader_ = function() {
  return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG;
};
goog.isInEs6ModuleLoader_ = function() {
  if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6) {
    return JSCompiler_lcov_branch_data_js_base_js[50] = !0;
  }
  JSCompiler_lcov_branch_data_js_base_js[51] = !0;
  var a = goog.global.$jscomp;
  if (a) {
    JSCompiler_lcov_branch_data_js_base_js[52] = !0;
    if ("function" != typeof a.getCurrentModulePath) {
      return JSCompiler_lcov_branch_data_js_base_js[54] = !0, !1;
    }
    JSCompiler_lcov_branch_data_js_base_js[55] = !0;
    return !!a.getCurrentModulePath();
  }
  JSCompiler_lcov_branch_data_js_base_js[53] = !0;
  return !1;
};
goog.module.declareLegacyNamespace = function() {
  if (COMPILED || goog.isInGoogModuleLoader_()) {
    JSCompiler_lcov_branch_data_js_base_js[57] = !0;
  } else {
    throw JSCompiler_lcov_branch_data_js_base_js[56] = !0, Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
  }
  if (COMPILED || goog.moduleLoaderState_.moduleName) {
    JSCompiler_lcov_branch_data_js_base_js[59] = !0;
  } else {
    throw JSCompiler_lcov_branch_data_js_base_js[58] = !0, Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
  }
  goog.moduleLoaderState_.declareLegacyNamespace = !0;
};
goog.declareModuleId = function(a) {
  if (COMPILED) {
    JSCompiler_lcov_branch_data_js_base_js[61] = !0;
  } else {
    JSCompiler_lcov_branch_data_js_base_js[60] = !0;
    if (goog.isInEs6ModuleLoader_()) {
      JSCompiler_lcov_branch_data_js_base_js[63] = !0;
    } else {
      throw JSCompiler_lcov_branch_data_js_base_js[62] = !0, Error("goog.declareModuleId may only be called from within an ES6 module");
    }
    if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName) {
      throw JSCompiler_lcov_branch_data_js_base_js[64] = !0, Error("goog.declareModuleId may only be called once per module.");
    }
    JSCompiler_lcov_branch_data_js_base_js[65] = !0;
    if (a in goog.loadedModules_) {
      throw JSCompiler_lcov_branch_data_js_base_js[66] = !0, Error('Module with namespace "' + a + '" already exists.');
    }
    JSCompiler_lcov_branch_data_js_base_js[67] = !0;
  }
  if (goog.moduleLoaderState_) {
    JSCompiler_lcov_branch_data_js_base_js[68] = !0, goog.moduleLoaderState_.moduleName = a;
  } else {
    JSCompiler_lcov_branch_data_js_base_js[69] = !0;
    var b = goog.global.$jscomp;
    if (b && "function" == typeof b.getCurrentModulePath) {
      JSCompiler_lcov_branch_data_js_base_js[71] = !0;
    } else {
      throw JSCompiler_lcov_branch_data_js_base_js[70] = !0, Error('Module with namespace "' + a + '" has been loaded incorrectly.');
    }
    b = b.require(b.getCurrentModulePath());
    goog.loadedModules_[a] = {exports:b, type:goog.ModuleType.ES6, moduleId:a};
  }
};
goog.setTestOnly = function(a) {
  if (goog.DISALLOW_TEST_ONLY_CODE) {
    throw JSCompiler_lcov_branch_data_js_base_js[72] = !0, a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
  JSCompiler_lcov_branch_data_js_base_js[73] = !0;
};
goog.forwardDeclare = function(a) {
};
COMPILED ? JSCompiler_lcov_branch_data_js_base_js[75] = !0 : (JSCompiler_lcov_branch_data_js_base_js[74] = !0, goog.isProvided_ = function(a) {
  return a in goog.loadedModules_ || !goog.implicitNamespaces_[a] && null != goog.getObjectByName(a);
}, goog.implicitNamespaces_ = {"goog.module":!0});
goog.getObjectByName = function(a, b) {
  a = a.split(".");
  b = b || goog.global;
  for (var c = 0; c < a.length; c++) {
    JSCompiler_lcov_branch_data_js_base_js[76] = !0;
    b = b[a[c]];
    if (null == b) {
      return JSCompiler_lcov_branch_data_js_base_js[78] = !0, null;
    }
    JSCompiler_lcov_branch_data_js_base_js[79] = !0;
  }
  JSCompiler_lcov_branch_data_js_base_js[77] = !0;
  return b;
};
goog.addDependency = function(a, b, c, d) {
  !COMPILED && goog.DEPENDENCIES_ENABLED ? (JSCompiler_lcov_branch_data_js_base_js[80] = !0, goog.debugLoader_.addDependency(a, b, c, d)) : JSCompiler_lcov_branch_data_js_base_js[81] = !0;
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.logToConsole_ = function(a) {
  goog.global.console ? (JSCompiler_lcov_branch_data_js_base_js[82] = !0, goog.global.console.error(a)) : JSCompiler_lcov_branch_data_js_base_js[83] = !0;
};
goog.require = function(a) {
  if (COMPILED) {
    JSCompiler_lcov_branch_data_js_base_js[85] = !0;
  } else {
    JSCompiler_lcov_branch_data_js_base_js[84] = !0;
    goog.ENABLE_DEBUG_LOADER ? (JSCompiler_lcov_branch_data_js_base_js[86] = !0, goog.debugLoader_.requested(a)) : JSCompiler_lcov_branch_data_js_base_js[87] = !0;
    if (goog.isProvided_(a)) {
      JSCompiler_lcov_branch_data_js_base_js[88] = !0;
      if (goog.isInModuleLoader_()) {
        return JSCompiler_lcov_branch_data_js_base_js[90] = !0, goog.module.getInternal_(a);
      }
      JSCompiler_lcov_branch_data_js_base_js[91] = !0;
    } else {
      if (JSCompiler_lcov_branch_data_js_base_js[89] = !0, goog.ENABLE_DEBUG_LOADER) {
        JSCompiler_lcov_branch_data_js_base_js[92] = !0;
        var b = goog.moduleLoaderState_;
        goog.moduleLoaderState_ = null;
        try {
          goog.debugLoader_.load_(a);
        } finally {
          goog.moduleLoaderState_ = b;
        }
      } else {
        JSCompiler_lcov_branch_data_js_base_js[93] = !0;
      }
    }
    return null;
  }
};
goog.requireType = function(a) {
  return {};
};
goog.basePath = "";
goog.nullFunction = function() {
};
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(a) {
  a.instance_ = void 0;
  a.getInstance = function() {
    if (a.instance_) {
      return JSCompiler_lcov_branch_data_js_base_js[94] = !0, a.instance_;
    }
    JSCompiler_lcov_branch_data_js_base_js[95] = !0;
    goog.DEBUG ? (JSCompiler_lcov_branch_data_js_base_js[96] = !0, goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a) : JSCompiler_lcov_branch_data_js_base_js[97] = !0;
    return a.instance_ = new a;
  };
};
goog.instantiatedSingletons_ = [];
goog.LOAD_MODULE_USING_EVAL = !0;
goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
goog.loadedModules_ = {};
goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
goog.TRANSPILE = "detect";
goog.ASSUME_ES_MODULES_TRANSPILED = !1;
goog.TRANSPILE_TO_LANGUAGE = "";
goog.TRANSPILER = "transpile.js";
goog.hasBadLetScoping = null;
goog.useSafari10Workaround = function() {
  if (null == goog.hasBadLetScoping) {
    JSCompiler_lcov_branch_data_js_base_js[98] = !0;
    try {
      var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";');
    } catch (b) {
      a = !1;
    }
    goog.hasBadLetScoping = a;
  } else {
    JSCompiler_lcov_branch_data_js_base_js[99] = !0;
  }
  return goog.hasBadLetScoping;
};
goog.workaroundSafari10EvalBug = function(a) {
  return "(function(){" + a + "\n;})();\n";
};
goog.loadModule = function(a) {
  var b = goog.moduleLoaderState_;
  try {
    goog.moduleLoaderState_ = {moduleName:"", declareLegacyNamespace:!1, type:goog.ModuleType.GOOG};
    if (goog.isFunction(a)) {
      JSCompiler_lcov_branch_data_js_base_js[100] = !0;
      var c = a.call(void 0, {});
    } else {
      if (JSCompiler_lcov_branch_data_js_base_js[101] = !0, "string" === typeof a) {
        JSCompiler_lcov_branch_data_js_base_js[102] = !0, goog.useSafari10Workaround() ? (JSCompiler_lcov_branch_data_js_base_js[104] = !0, a = goog.workaroundSafari10EvalBug(a)) : JSCompiler_lcov_branch_data_js_base_js[105] = !0, c = goog.loadModuleFromSource_.call(void 0, a);
      } else {
        throw JSCompiler_lcov_branch_data_js_base_js[103] = !0, Error("Invalid module definition");
      }
    }
    var d = goog.moduleLoaderState_.moduleName;
    if ("string" === typeof d && d) {
      JSCompiler_lcov_branch_data_js_base_js[106] = !0, goog.moduleLoaderState_.declareLegacyNamespace ? (JSCompiler_lcov_branch_data_js_base_js[108] = !0, goog.constructNamespace_(d, c)) : (JSCompiler_lcov_branch_data_js_base_js[109] = !0, goog.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof c && null != c ? (JSCompiler_lcov_branch_data_js_base_js[110] = !0, Object.seal(c)) : JSCompiler_lcov_branch_data_js_base_js[111] = !0), goog.loadedModules_[d] = {exports:c, type:goog.ModuleType.GOOG, 
      moduleId:goog.moduleLoaderState_.moduleName};
    } else {
      throw JSCompiler_lcov_branch_data_js_base_js[107] = !0, Error('Invalid module name "' + d + '"');
    }
  } finally {
    goog.moduleLoaderState_ = b;
  }
};
goog.loadModuleFromSource_ = function(a) {
  eval(a);
  return {};
};
goog.normalizePath_ = function(a) {
  a = a.split("/");
  for (var b = 0; b < a.length;) {
    JSCompiler_lcov_branch_data_js_base_js[112] = !0, "." == a[b] ? (JSCompiler_lcov_branch_data_js_base_js[114] = !0, a.splice(b, 1)) : (JSCompiler_lcov_branch_data_js_base_js[115] = !0, b && ".." == a[b] && a[b - 1] && ".." != a[b - 1] ? (JSCompiler_lcov_branch_data_js_base_js[116] = !0, a.splice(--b, 2)) : (JSCompiler_lcov_branch_data_js_base_js[117] = !0, b++));
  }
  JSCompiler_lcov_branch_data_js_base_js[113] = !0;
  return a.join("/");
};
goog.loadFileSync_ = function(a) {
  if (goog.global.CLOSURE_LOAD_FILE_SYNC) {
    return JSCompiler_lcov_branch_data_js_base_js[118] = !0, goog.global.CLOSURE_LOAD_FILE_SYNC(a);
  }
  JSCompiler_lcov_branch_data_js_base_js[119] = !0;
  try {
    var b = new goog.global.XMLHttpRequest;
    b.open("get", a, !1);
    b.send();
    return 0 == b.status || 200 == b.status ? b.responseText : null;
  } catch (c) {
    return null;
  }
};
goog.transpile_ = function(a, b, c) {
  var d = goog.global.$jscomp;
  d ? JSCompiler_lcov_branch_data_js_base_js[121] = !0 : (JSCompiler_lcov_branch_data_js_base_js[120] = !0, goog.global.$jscomp = d = {});
  var e = d.transpile;
  if (e) {
    JSCompiler_lcov_branch_data_js_base_js[123] = !0;
  } else {
    JSCompiler_lcov_branch_data_js_base_js[122] = !0;
    var f = goog.basePath + goog.TRANSPILER, g = goog.loadFileSync_(f);
    if (g) {
      JSCompiler_lcov_branch_data_js_base_js[124] = !0;
      (function() {
        (0,eval)(g + "\n//# sourceURL=" + f);
      }).call(goog.global);
      if (goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile) {
        throw JSCompiler_lcov_branch_data_js_base_js[126] = !0, Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
      }
      JSCompiler_lcov_branch_data_js_base_js[127] = !0;
      goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile;
      d = goog.global.$jscomp;
      e = d.transpile;
    } else {
      JSCompiler_lcov_branch_data_js_base_js[125] = !0;
    }
  }
  e ? JSCompiler_lcov_branch_data_js_base_js[129] = !0 : (JSCompiler_lcov_branch_data_js_base_js[128] = !0, e = d.transpile = function(n, h) {
    goog.logToConsole_(h + " requires transpilation but no transpiler was found.");
    return n;
  });
  return e(a, b, c);
};
goog.typeOf = function(a) {
  var b = typeof a;
  if ("object" != b) {
    return JSCompiler_lcov_branch_data_js_base_js[130] = !0, b;
  }
  JSCompiler_lcov_branch_data_js_base_js[131] = !0;
  if (a) {
    JSCompiler_lcov_branch_data_js_base_js[133] = !0;
  } else {
    return JSCompiler_lcov_branch_data_js_base_js[132] = !0, "null";
  }
  if (Array.isArray(a)) {
    return JSCompiler_lcov_branch_data_js_base_js[134] = !0, "array";
  }
  JSCompiler_lcov_branch_data_js_base_js[135] = !0;
  return b;
};
goog.isArray = function(a) {
  return Array.isArray(a);
};
goog.isArrayLike = function(a) {
  var b = goog.typeOf(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
};
goog.isDateLike = function(a) {
  return goog.isObject(a) && "function" == typeof a.getFullYear;
};
goog.isFunction = function(a) {
  return "function" == goog.typeOf(a);
};
goog.isObject = function(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
};
goog.getUid = function(a) {
  return Object.prototype.hasOwnProperty.call(a, goog.UID_PROPERTY_) && a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_);
};
goog.hasUid = function(a) {
  return !!a[goog.UID_PROPERTY_];
};
goog.removeUid = function(a) {
  null !== a && "removeAttribute" in a ? (JSCompiler_lcov_branch_data_js_base_js[136] = !0, a.removeAttribute(goog.UID_PROPERTY_)) : JSCompiler_lcov_branch_data_js_base_js[137] = !0;
  try {
    delete a[goog.UID_PROPERTY_];
  } catch (b) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0);
goog.uidCounter_ = 0;
goog.cloneObject = function(a) {
  var b = goog.typeOf(a);
  if ("object" == b || "array" == b) {
    JSCompiler_lcov_branch_data_js_base_js[138] = !0;
    if ("function" === typeof a.clone) {
      return JSCompiler_lcov_branch_data_js_base_js[140] = !0, a.clone();
    }
    JSCompiler_lcov_branch_data_js_base_js[141] = !0;
    b = "array" == b ? [] : {};
    for (var c in a) {
      JSCompiler_lcov_branch_data_js_base_js[142] = !0, b[c] = goog.cloneObject(a[c]);
    }
    JSCompiler_lcov_branch_data_js_base_js[143] = !0;
    return b;
  }
  JSCompiler_lcov_branch_data_js_base_js[139] = !0;
  return a;
};
goog.bindNative_ = function(a, b, c) {
  return a.call.apply(a.bind, arguments);
};
goog.bindJs_ = function(a, b, c) {
  if (a) {
    JSCompiler_lcov_branch_data_js_base_js[145] = !0;
  } else {
    throw JSCompiler_lcov_branch_data_js_base_js[144] = !0, Error();
  }
  if (2 < arguments.length) {
    JSCompiler_lcov_branch_data_js_base_js[146] = !0;
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b, e);
    };
  }
  JSCompiler_lcov_branch_data_js_base_js[147] = !0;
  return function() {
    return a.apply(b, arguments);
  };
};
goog.bind = function(a, b, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? (JSCompiler_lcov_branch_data_js_base_js[148] = !0, goog.bind = goog.bindNative_) : (JSCompiler_lcov_branch_data_js_base_js[149] = !0, goog.bind = goog.bindJs_);
  return goog.bind.apply(null, arguments);
};
goog.partial = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d);
  };
};
goog.mixin = function(a, b) {
  for (var c in b) {
    JSCompiler_lcov_branch_data_js_base_js[150] = !0, a[c] = b[c];
  }
  JSCompiler_lcov_branch_data_js_base_js[151] = !0;
};
goog.now = goog.TRUSTED_SITE && Date.now || function() {
  return +new Date;
};
goog.globalEval = function(a) {
  if (goog.global.execScript) {
    JSCompiler_lcov_branch_data_js_base_js[152] = !0, goog.global.execScript(a, "JavaScript");
  } else {
    if (JSCompiler_lcov_branch_data_js_base_js[153] = !0, goog.global.eval) {
      JSCompiler_lcov_branch_data_js_base_js[154] = !0;
      if (null == goog.evalWorks_) {
        JSCompiler_lcov_branch_data_js_base_js[156] = !0;
        try {
          goog.global.eval(""), goog.evalWorks_ = !0;
        } catch (d) {
          goog.evalWorks_ = !1;
        }
      } else {
        JSCompiler_lcov_branch_data_js_base_js[157] = !0;
      }
      if (goog.evalWorks_) {
        JSCompiler_lcov_branch_data_js_base_js[158] = !0, goog.global.eval(a);
      } else {
        JSCompiler_lcov_branch_data_js_base_js[159] = !0;
        var b = goog.global.document, c = b.createElement("script");
        c.type = "text/javascript";
        c.defer = !1;
        c.appendChild(b.createTextNode(a));
        b.head.appendChild(c);
        b.head.removeChild(c);
      }
    } else {
      throw JSCompiler_lcov_branch_data_js_base_js[155] = !0, Error("goog.globalEval not available");
    }
  }
};
goog.evalWorks_ = null;
goog.getCssName = function(a, b) {
  if ("." == String(a).charAt(0)) {
    throw JSCompiler_lcov_branch_data_js_base_js[160] = !0, Error('className passed in goog.getCssName must not start with ".". You passed: ' + a);
  }
  JSCompiler_lcov_branch_data_js_base_js[161] = !0;
  var c = function(e) {
    return goog.cssNameMapping_[e] || e;
  }, d = function(e) {
    e = e.split("-");
    for (var f = [], g = 0; g < e.length; g++) {
      JSCompiler_lcov_branch_data_js_base_js[162] = !0, f.push(c(e[g]));
    }
    JSCompiler_lcov_branch_data_js_base_js[163] = !0;
    return f.join("-");
  };
  goog.cssNameMapping_ ? (JSCompiler_lcov_branch_data_js_base_js[164] = !0, d = "BY_WHOLE" == goog.cssNameMappingStyle_ ? c : d) : (JSCompiler_lcov_branch_data_js_base_js[165] = !0, d = function(e) {
    return e;
  });
  a = b ? a + "-" + d(b) : d(a);
  if (goog.global.CLOSURE_CSS_NAME_MAP_FN) {
    return JSCompiler_lcov_branch_data_js_base_js[166] = !0, goog.global.CLOSURE_CSS_NAME_MAP_FN(a);
  }
  JSCompiler_lcov_branch_data_js_base_js[167] = !0;
  return a;
};
goog.setCssNameMapping = function(a, b) {
  goog.cssNameMapping_ = a;
  goog.cssNameMappingStyle_ = b;
};
!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING ? (JSCompiler_lcov_branch_data_js_base_js[168] = !0, goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING) : JSCompiler_lcov_branch_data_js_base_js[169] = !0;
goog.getMsg = function(a, b, c) {
  c && c.html ? (JSCompiler_lcov_branch_data_js_base_js[170] = !0, a = a.replace(/</g, "&lt;")) : JSCompiler_lcov_branch_data_js_base_js[171] = !0;
  b ? (JSCompiler_lcov_branch_data_js_base_js[172] = !0, a = a.replace(/\{\$([^}]+)}/g, function(d, e) {
    return null != b && e in b ? b[e] : d;
  })) : JSCompiler_lcov_branch_data_js_base_js[173] = !0;
  return a;
};
goog.getMsgWithFallback = function(a, b) {
  return a;
};
goog.exportSymbol = function(a, b, c) {
  goog.exportPath_(a, b, c);
};
goog.exportProperty = function(a, b, c) {
  a[b] = c;
};
goog.inherits = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.superClass_ = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.base = function(d, e, f) {
    for (var g = Array(arguments.length - 2), n = 2; n < arguments.length; n++) {
      JSCompiler_lcov_branch_data_js_base_js[174] = !0, g[n - 2] = arguments[n];
    }
    JSCompiler_lcov_branch_data_js_base_js[175] = !0;
    return b.prototype[e].apply(d, g);
  };
};
goog.scope = function(a) {
  if (goog.isInModuleLoader_()) {
    throw JSCompiler_lcov_branch_data_js_base_js[176] = !0, Error("goog.scope is not supported within a module.");
  }
  JSCompiler_lcov_branch_data_js_base_js[177] = !0;
  a.call(goog.global);
};
COMPILED ? JSCompiler_lcov_branch_data_js_base_js[179] = !0 : (JSCompiler_lcov_branch_data_js_base_js[178] = !0, goog.global.COMPILED = COMPILED);
goog.defineClass = function(a, b) {
  var c = b.constructor, d = b.statics;
  c && c != Object.prototype.constructor ? JSCompiler_lcov_branch_data_js_base_js[181] = !0 : (JSCompiler_lcov_branch_data_js_base_js[180] = !0, c = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  c = goog.defineClass.createSealingConstructor_(c, a);
  a ? (JSCompiler_lcov_branch_data_js_base_js[182] = !0, goog.inherits(c, a)) : JSCompiler_lcov_branch_data_js_base_js[183] = !0;
  delete b.constructor;
  delete b.statics;
  goog.defineClass.applyProperties_(c.prototype, b);
  null != d ? (JSCompiler_lcov_branch_data_js_base_js[184] = !0, d instanceof Function ? (JSCompiler_lcov_branch_data_js_base_js[186] = !0, d(c)) : (JSCompiler_lcov_branch_data_js_base_js[187] = !0, goog.defineClass.applyProperties_(c, d))) : JSCompiler_lcov_branch_data_js_base_js[185] = !0;
  return c;
};
goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
goog.defineClass.createSealingConstructor_ = function(a, b) {
  if (goog.defineClass.SEAL_CLASS_INSTANCES) {
    JSCompiler_lcov_branch_data_js_base_js[189] = !0;
  } else {
    return JSCompiler_lcov_branch_data_js_base_js[188] = !0, a;
  }
  return function() {
    var c = a.apply(this, arguments) || this;
    c[goog.UID_PROPERTY_] = c[goog.UID_PROPERTY_];
    return c;
  };
};
goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.defineClass.applyProperties_ = function(a, b) {
  for (var c in b) {
    JSCompiler_lcov_branch_data_js_base_js[190] = !0, Object.prototype.hasOwnProperty.call(b, c) ? (JSCompiler_lcov_branch_data_js_base_js[192] = !0, a[c] = b[c]) : JSCompiler_lcov_branch_data_js_base_js[193] = !0;
  }
  JSCompiler_lcov_branch_data_js_base_js[191] = !0;
  for (var d = 0; d < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; d++) {
    JSCompiler_lcov_branch_data_js_base_js[194] = !0, c = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d], Object.prototype.hasOwnProperty.call(b, c) ? (JSCompiler_lcov_branch_data_js_base_js[196] = !0, a[c] = b[c]) : JSCompiler_lcov_branch_data_js_base_js[197] = !0;
  }
  JSCompiler_lcov_branch_data_js_base_js[195] = !0;
};
!COMPILED && goog.DEPENDENCIES_ENABLED ? (JSCompiler_lcov_branch_data_js_base_js[198] = !0, goog.inHtmlDocument_ = function() {
  var a = goog.global.document;
  return null != a && "write" in a;
}, goog.isDocumentLoading_ = function() {
  var a = goog.global.document;
  return a.attachEvent ? "complete" != a.readyState : "loading" == a.readyState;
}, goog.findBasePath_ = function() {
  if (void 0 != goog.global.CLOSURE_BASE_PATH && "string" === typeof goog.global.CLOSURE_BASE_PATH) {
    JSCompiler_lcov_branch_data_js_base_js[200] = !0, goog.basePath = goog.global.CLOSURE_BASE_PATH;
  } else {
    if (JSCompiler_lcov_branch_data_js_base_js[201] = !0, goog.inHtmlDocument_()) {
      JSCompiler_lcov_branch_data_js_base_js[203] = !0;
      var a = goog.global.document, b = a.currentScript;
      b ? (JSCompiler_lcov_branch_data_js_base_js[204] = !0, a = [b]) : (JSCompiler_lcov_branch_data_js_base_js[205] = !0, a = a.getElementsByTagName("SCRIPT"));
      for (b = a.length - 1; 0 <= b; --b) {
        JSCompiler_lcov_branch_data_js_base_js[206] = !0;
        var c = a[b].src, d = c.lastIndexOf("?");
        d = -1 == d ? c.length : d;
        if ("base.js" == c.substr(d - 7, 7)) {
          JSCompiler_lcov_branch_data_js_base_js[208] = !0;
          goog.basePath = c.substr(0, d - 7);
          return;
        }
        JSCompiler_lcov_branch_data_js_base_js[209] = !0;
      }
      JSCompiler_lcov_branch_data_js_base_js[207] = !0;
    } else {
      JSCompiler_lcov_branch_data_js_base_js[202] = !0;
    }
  }
}, goog.findBasePath_(), goog.Transpiler = function() {
  this.requiresTranspilation_ = null;
  this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE;
}, goog.Transpiler.prototype.createRequiresTranspilation_ = function() {
  function a(g, n) {
    e ? (JSCompiler_lcov_branch_data_js_base_js[210] = !0, d[g] = !0) : (JSCompiler_lcov_branch_data_js_base_js[211] = !0, n() ? (JSCompiler_lcov_branch_data_js_base_js[212] = !0, c = g, d[g] = !1) : (JSCompiler_lcov_branch_data_js_base_js[213] = !0, e = d[g] = !0));
  }
  function b(g) {
    try {
      return !!eval(g);
    } catch (n) {
      return !1;
    }
  }
  var c = "es3", d = {es3:!1}, e = !1, f = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
  a("es5", function() {
    return b("[1,].length==1");
  });
  a("es6", function() {
    if (f.match(/Edge\/(\d+)(\.\d)*/i)) {
      return JSCompiler_lcov_branch_data_js_base_js[214] = !0, !1;
    }
    JSCompiler_lcov_branch_data_js_base_js[215] = !0;
    return b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()');
  });
  a("es7", function() {
    return b("2 ** 2 == 4");
  });
  a("es8", function() {
    return b("async () => 1, true");
  });
  a("es9", function() {
    return b("({...rest} = {}), true");
  });
  a("es_next", function() {
    return !1;
  });
  return {target:c, map:d};
}, goog.Transpiler.prototype.needsTranspile = function(a, b) {
  if ("always" == goog.TRANSPILE) {
    return JSCompiler_lcov_branch_data_js_base_js[216] = !0;
  }
  JSCompiler_lcov_branch_data_js_base_js[217] = !0;
  if ("never" == goog.TRANSPILE) {
    return JSCompiler_lcov_branch_data_js_base_js[218] = !0, !1;
  }
  JSCompiler_lcov_branch_data_js_base_js[219] = !0;
  if (this.requiresTranspilation_) {
    JSCompiler_lcov_branch_data_js_base_js[221] = !0;
  } else {
    JSCompiler_lcov_branch_data_js_base_js[220] = !0;
    var c = this.createRequiresTranspilation_();
    this.requiresTranspilation_ = c.map;
    this.transpilationTarget_ = this.transpilationTarget_ || c.target;
  }
  if (a in this.requiresTranspilation_) {
    JSCompiler_lcov_branch_data_js_base_js[222] = !0;
    if (this.requiresTranspilation_[a]) {
      return JSCompiler_lcov_branch_data_js_base_js[224] = !0;
    }
    JSCompiler_lcov_branch_data_js_base_js[225] = !0;
    return !goog.inHtmlDocument_() || "es6" != b || "noModule" in goog.global.document.createElement("script") ? (JSCompiler_lcov_branch_data_js_base_js[227] = !0, !1) : JSCompiler_lcov_branch_data_js_base_js[226] = !0;
  }
  JSCompiler_lcov_branch_data_js_base_js[223] = !0;
  throw Error("Unknown language mode: " + a);
}, goog.Transpiler.prototype.transpile = function(a, b) {
  return goog.transpile_(a, b, this.transpilationTarget_);
}, goog.transpiler_ = new goog.Transpiler, goog.protectScriptTag_ = function(a) {
  return a.replace(/<\/(SCRIPT)/ig, "\\x3c/$1");
}, goog.DebugLoader_ = function() {
  this.dependencies_ = {};
  this.idToPath_ = {};
  this.written_ = {};
  this.loadingDeps_ = [];
  this.depsToLoad_ = [];
  this.paused_ = !1;
  this.factory_ = new goog.DependencyFactory(goog.transpiler_);
  this.deferredCallbacks_ = {};
  this.deferredQueue_ = [];
}, goog.DebugLoader_.prototype.bootstrap = function(a, b) {
  function c() {
    d ? (JSCompiler_lcov_branch_data_js_base_js[228] = !0, goog.global.setTimeout(d, 0), d = null) : JSCompiler_lcov_branch_data_js_base_js[229] = !0;
  }
  var d = b;
  if (a.length) {
    JSCompiler_lcov_branch_data_js_base_js[231] = !0;
    b = [];
    for (var e = 0; e < a.length; e++) {
      JSCompiler_lcov_branch_data_js_base_js[232] = !0;
      var f = this.getPathFromDeps_(a[e]);
      if (f) {
        JSCompiler_lcov_branch_data_js_base_js[235] = !0;
      } else {
        throw JSCompiler_lcov_branch_data_js_base_js[234] = !0, Error("Unregonized namespace: " + a[e]);
      }
      b.push(this.dependencies_[f]);
    }
    JSCompiler_lcov_branch_data_js_base_js[233] = !0;
    f = goog.require;
    var g = 0;
    for (e = 0; e < a.length; e++) {
      JSCompiler_lcov_branch_data_js_base_js[236] = !0, f(a[e]), b[e].onLoad(function() {
        ++g == a.length ? (JSCompiler_lcov_branch_data_js_base_js[238] = !0, c()) : JSCompiler_lcov_branch_data_js_base_js[239] = !0;
      });
    }
    JSCompiler_lcov_branch_data_js_base_js[237] = !0;
  } else {
    JSCompiler_lcov_branch_data_js_base_js[230] = !0, c();
  }
}, goog.DebugLoader_.prototype.loadClosureDeps = function() {
  this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + "deps.js"), "deps.js", [], [], {}, !1));
  this.loadDeps_();
}, goog.DebugLoader_.prototype.requested = function(a, b) {
  (a = this.getPathFromDeps_(a)) && (b || this.areDepsLoaded_(this.dependencies_[a].requires)) ? (JSCompiler_lcov_branch_data_js_base_js[240] = !0, (b = this.deferredCallbacks_[a]) ? (JSCompiler_lcov_branch_data_js_base_js[242] = !0, delete this.deferredCallbacks_[a], b()) : JSCompiler_lcov_branch_data_js_base_js[243] = !0) : JSCompiler_lcov_branch_data_js_base_js[241] = !0;
}, goog.DebugLoader_.prototype.setDependencyFactory = function(a) {
  this.factory_ = a;
}, goog.DebugLoader_.prototype.load_ = function(a) {
  if (this.getPathFromDeps_(a)) {
    JSCompiler_lcov_branch_data_js_base_js[245] = !0;
    var b = this, c = [], d = function(e) {
      var f = b.getPathFromDeps_(e);
      if (f) {
        JSCompiler_lcov_branch_data_js_base_js[247] = !0;
      } else {
        throw JSCompiler_lcov_branch_data_js_base_js[246] = !0, Error("Bad dependency path or symbol: " + e);
      }
      if (b.written_[f]) {
        JSCompiler_lcov_branch_data_js_base_js[248] = !0;
      } else {
        JSCompiler_lcov_branch_data_js_base_js[249] = !0;
        b.written_[f] = !0;
        e = b.dependencies_[f];
        for (f = 0; f < e.requires.length; f++) {
          JSCompiler_lcov_branch_data_js_base_js[250] = !0, goog.isProvided_(e.requires[f]) ? JSCompiler_lcov_branch_data_js_base_js[253] = !0 : (JSCompiler_lcov_branch_data_js_base_js[252] = !0, d(e.requires[f]));
        }
        JSCompiler_lcov_branch_data_js_base_js[251] = !0;
        c.push(e);
      }
    };
    d(a);
    a = !!this.depsToLoad_.length;
    this.depsToLoad_ = this.depsToLoad_.concat(c);
    this.paused_ || a ? JSCompiler_lcov_branch_data_js_base_js[255] = !0 : (JSCompiler_lcov_branch_data_js_base_js[254] = !0, this.loadDeps_());
  } else {
    throw JSCompiler_lcov_branch_data_js_base_js[244] = !0, a = "goog.require could not find: " + a, goog.logToConsole_(a), Error(a);
  }
}, goog.DebugLoader_.prototype.loadDeps_ = function() {
  for (var a = this, b = this.paused_; this.depsToLoad_.length && !b;) {
    JSCompiler_lcov_branch_data_js_base_js[256] = !0, function() {
      var c = !1, d = a.depsToLoad_.shift(), e = !1;
      a.loading_(d);
      var f = {pause:function() {
        if (c) {
          throw JSCompiler_lcov_branch_data_js_base_js[258] = !0, Error("Cannot call pause after the call to load.");
        }
        b = JSCompiler_lcov_branch_data_js_base_js[259] = !0;
      }, resume:function() {
        c ? (JSCompiler_lcov_branch_data_js_base_js[260] = !0, a.resume_()) : (JSCompiler_lcov_branch_data_js_base_js[261] = !0, b = !1);
      }, loaded:function() {
        if (e) {
          throw JSCompiler_lcov_branch_data_js_base_js[262] = !0, Error("Double call to loaded.");
        }
        e = JSCompiler_lcov_branch_data_js_base_js[263] = !0;
        a.loaded_(d);
      }, pending:function() {
        for (var g = [], n = 0; n < a.loadingDeps_.length; n++) {
          JSCompiler_lcov_branch_data_js_base_js[264] = !0, g.push(a.loadingDeps_[n]);
        }
        JSCompiler_lcov_branch_data_js_base_js[265] = !0;
        return g;
      }, setModuleState:function(g) {
        goog.moduleLoaderState_ = {type:g, moduleName:"", declareLegacyNamespace:!1};
      }, registerEs6ModuleExports:function(g, n, h) {
        h ? (JSCompiler_lcov_branch_data_js_base_js[266] = !0, goog.loadedModules_[h] = {exports:n, type:goog.ModuleType.ES6, moduleId:h || ""}) : JSCompiler_lcov_branch_data_js_base_js[267] = !0;
      }, registerGoogModuleExports:function(g, n) {
        goog.loadedModules_[g] = {exports:n, type:goog.ModuleType.GOOG, moduleId:g};
      }, clearModuleState:function() {
        goog.moduleLoaderState_ = null;
      }, defer:function(g) {
        if (c) {
          throw JSCompiler_lcov_branch_data_js_base_js[268] = !0, Error("Cannot register with defer after the call to load.");
        }
        JSCompiler_lcov_branch_data_js_base_js[269] = !0;
        a.defer_(d, g);
      }, areDepsLoaded:function() {
        return a.areDepsLoaded_(d.requires);
      }};
      try {
        d.load(f);
      } finally {
        c = !0;
      }
    }();
  }
  JSCompiler_lcov_branch_data_js_base_js[257] = !0;
  b ? (JSCompiler_lcov_branch_data_js_base_js[270] = !0, this.pause_()) : JSCompiler_lcov_branch_data_js_base_js[271] = !0;
}, goog.DebugLoader_.prototype.pause_ = function() {
  this.paused_ = !0;
}, goog.DebugLoader_.prototype.resume_ = function() {
  this.paused_ ? (JSCompiler_lcov_branch_data_js_base_js[272] = !0, this.paused_ = !1, this.loadDeps_()) : JSCompiler_lcov_branch_data_js_base_js[273] = !0;
}, goog.DebugLoader_.prototype.loading_ = function(a) {
  this.loadingDeps_.push(a);
}, goog.DebugLoader_.prototype.loaded_ = function(a) {
  for (var b = 0; b < this.loadingDeps_.length; b++) {
    if (JSCompiler_lcov_branch_data_js_base_js[274] = !0, this.loadingDeps_[b] == a) {
      JSCompiler_lcov_branch_data_js_base_js[276] = !0;
      this.loadingDeps_.splice(b, 1);
      break;
    } else {
      JSCompiler_lcov_branch_data_js_base_js[277] = !0;
    }
  }
  JSCompiler_lcov_branch_data_js_base_js[275] = !0;
  for (b = 0; b < this.deferredQueue_.length; b++) {
    if (JSCompiler_lcov_branch_data_js_base_js[278] = !0, this.deferredQueue_[b] == a.path) {
      JSCompiler_lcov_branch_data_js_base_js[280] = !0;
      this.deferredQueue_.splice(b, 1);
      break;
    } else {
      JSCompiler_lcov_branch_data_js_base_js[281] = !0;
    }
  }
  JSCompiler_lcov_branch_data_js_base_js[279] = !0;
  if (this.loadingDeps_.length != this.deferredQueue_.length || this.depsToLoad_.length) {
    JSCompiler_lcov_branch_data_js_base_js[283] = !0;
  } else {
    for (JSCompiler_lcov_branch_data_js_base_js[282] = !0; this.deferredQueue_.length;) {
      JSCompiler_lcov_branch_data_js_base_js[284] = !0, this.requested(this.deferredQueue_.shift(), !0);
    }
  }
  JSCompiler_lcov_branch_data_js_base_js[285] = !0;
  a.loaded();
}, goog.DebugLoader_.prototype.areDepsLoaded_ = function(a) {
  for (var b = 0; b < a.length; b++) {
    JSCompiler_lcov_branch_data_js_base_js[286] = !0;
    var c = this.getPathFromDeps_(a[b]);
    if (c && (c in this.deferredCallbacks_ || goog.isProvided_(a[b]))) {
      JSCompiler_lcov_branch_data_js_base_js[289] = !0;
    } else {
      return JSCompiler_lcov_branch_data_js_base_js[288] = !0, !1;
    }
  }
  return JSCompiler_lcov_branch_data_js_base_js[287] = !0;
}, goog.DebugLoader_.prototype.getPathFromDeps_ = function(a) {
  if (a in this.idToPath_) {
    return JSCompiler_lcov_branch_data_js_base_js[290] = !0, this.idToPath_[a];
  }
  JSCompiler_lcov_branch_data_js_base_js[291] = !0;
  if (a in this.dependencies_) {
    return JSCompiler_lcov_branch_data_js_base_js[292] = !0, a;
  }
  JSCompiler_lcov_branch_data_js_base_js[293] = !0;
  return null;
}, goog.DebugLoader_.prototype.defer_ = function(a, b) {
  this.deferredCallbacks_[a.path] = b;
  this.deferredQueue_.push(a.path);
}, goog.LoadController = function() {
}, goog.LoadController.prototype.pause = function() {
}, goog.LoadController.prototype.resume = function() {
}, goog.LoadController.prototype.loaded = function() {
}, goog.LoadController.prototype.pending = function() {
}, goog.LoadController.prototype.registerEs6ModuleExports = function(a, b, c) {
}, goog.LoadController.prototype.setModuleState = function(a) {
}, goog.LoadController.prototype.clearModuleState = function() {
}, goog.LoadController.prototype.defer = function(a) {
}, goog.LoadController.prototype.areDepsLoaded = function() {
}, goog.Dependency = function(a, b, c, d, e) {
  this.path = a;
  this.relativePath = b;
  this.provides = c;
  this.requires = d;
  this.loadFlags = e;
  this.loaded_ = !1;
  this.loadCallbacks_ = [];
}, goog.Dependency.prototype.getPathName = function() {
  var a = this.path, b = a.indexOf("://");
  0 <= b ? (JSCompiler_lcov_branch_data_js_base_js[294] = !0, a = a.substring(b + 3), b = a.indexOf("/"), 0 <= b ? (JSCompiler_lcov_branch_data_js_base_js[296] = !0, a = a.substring(b + 1)) : JSCompiler_lcov_branch_data_js_base_js[297] = !0) : JSCompiler_lcov_branch_data_js_base_js[295] = !0;
  return a;
}, goog.Dependency.prototype.onLoad = function(a) {
  this.loaded_ ? (JSCompiler_lcov_branch_data_js_base_js[298] = !0, a()) : (JSCompiler_lcov_branch_data_js_base_js[299] = !0, this.loadCallbacks_.push(a));
}, goog.Dependency.prototype.loaded = function() {
  this.loaded_ = !0;
  var a = this.loadCallbacks_;
  this.loadCallbacks_ = [];
  for (var b = 0; b < a.length; b++) {
    JSCompiler_lcov_branch_data_js_base_js[300] = !0, a[b]();
  }
  JSCompiler_lcov_branch_data_js_base_js[301] = !0;
}, goog.Dependency.defer_ = !1, goog.Dependency.callbackMap_ = {}, goog.Dependency.registerCallback_ = function(a) {
  var b = Math.random().toString(32);
  goog.Dependency.callbackMap_[b] = a;
  return b;
}, goog.Dependency.unregisterCallback_ = function(a) {
  delete goog.Dependency.callbackMap_[a];
}, goog.Dependency.callback_ = function(a, b) {
  if (a in goog.Dependency.callbackMap_) {
    JSCompiler_lcov_branch_data_js_base_js[302] = !0;
    for (var c = goog.Dependency.callbackMap_[a], d = [], e = 1; e < arguments.length; e++) {
      JSCompiler_lcov_branch_data_js_base_js[304] = !0, d.push(arguments[e]);
    }
    JSCompiler_lcov_branch_data_js_base_js[305] = !0;
    c.apply(void 0, d);
  } else {
    throw JSCompiler_lcov_branch_data_js_base_js[303] = !0, Error("Callback key " + a + " does not exist (was base.js loaded more than once?).");
  }
}, goog.Dependency.prototype.load = function(a) {
  if (goog.global.CLOSURE_IMPORT_SCRIPT) {
    JSCompiler_lcov_branch_data_js_base_js[306] = !0, goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? (JSCompiler_lcov_branch_data_js_base_js[308] = !0, a.loaded()) : (JSCompiler_lcov_branch_data_js_base_js[309] = !0, a.pause());
  } else {
    if (JSCompiler_lcov_branch_data_js_base_js[307] = !0, goog.inHtmlDocument_()) {
      JSCompiler_lcov_branch_data_js_base_js[311] = !0;
      var b = goog.global.document;
      if ("complete" != b.readyState || goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
        JSCompiler_lcov_branch_data_js_base_js[315] = !0;
      } else {
        JSCompiler_lcov_branch_data_js_base_js[314] = !0;
        if (/\bdeps.js$/.test(this.path)) {
          JSCompiler_lcov_branch_data_js_base_js[316] = !0;
          a.loaded();
          return;
        }
        JSCompiler_lcov_branch_data_js_base_js[317] = !0;
        throw Error('Cannot write "' + this.path + '" after document load');
      }
      if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
        JSCompiler_lcov_branch_data_js_base_js[318] = !0;
        var c = goog.Dependency.registerCallback_(function(f) {
          goog.DebugLoader_.IS_OLD_IE_ && "complete" != f.readyState ? JSCompiler_lcov_branch_data_js_base_js[321] = !0 : (JSCompiler_lcov_branch_data_js_base_js[320] = !0, goog.Dependency.unregisterCallback_(c), a.loaded());
        }), d = !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce() ? ' nonce="' + goog.getScriptNonce() + '"' : "";
        d = '<script src="' + this.path + '" ' + (goog.DebugLoader_.IS_OLD_IE_ ? "onreadystatechange" : "onload") + "=\"goog.Dependency.callback_('" + c + '\', this)" type="text/javascript" ' + (goog.Dependency.defer_ ? "defer" : "") + d + ">\x3c/script>";
        b.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(d) : d);
      } else {
        JSCompiler_lcov_branch_data_js_base_js[319] = !0;
        var e = b.createElement("script");
        e.defer = goog.Dependency.defer_;
        e.async = !1;
        e.type = "text/javascript";
        (d = goog.getScriptNonce()) ? (JSCompiler_lcov_branch_data_js_base_js[322] = !0, e.setAttribute("nonce", d)) : JSCompiler_lcov_branch_data_js_base_js[323] = !0;
        goog.DebugLoader_.IS_OLD_IE_ ? (JSCompiler_lcov_branch_data_js_base_js[324] = !0, a.pause(), e.onreadystatechange = function() {
          "loaded" == e.readyState || "complete" == e.readyState ? (JSCompiler_lcov_branch_data_js_base_js[326] = !0, a.loaded(), a.resume()) : JSCompiler_lcov_branch_data_js_base_js[327] = !0;
        }) : (JSCompiler_lcov_branch_data_js_base_js[325] = !0, e.onload = function() {
          e.onload = null;
          a.loaded();
        });
        e.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path;
        b.head.appendChild(e);
      }
    } else {
      JSCompiler_lcov_branch_data_js_base_js[310] = !0, goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), "deps.js" == this.relativePath ? (JSCompiler_lcov_branch_data_js_base_js[312] = !0, goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."), a.loaded()) : (JSCompiler_lcov_branch_data_js_base_js[313] = !0, a.pause());
    }
  }
}, goog.Es6ModuleDependency = function(a, b, c, d, e) {
  goog.Dependency.call(this, a, b, c, d, e);
}, goog.inherits(goog.Es6ModuleDependency, goog.Dependency), goog.Es6ModuleDependency.prototype.load = function(a) {
  function b(k, l) {
    l ? (JSCompiler_lcov_branch_data_js_base_js[334] = !0, k = '<script type="module" crossorigin>' + l + "\x3c/script>") : (JSCompiler_lcov_branch_data_js_base_js[335] = !0, k = '<script type="module" crossorigin src="' + k + '">\x3c/script>');
    d.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(k) : k);
  }
  function c(k, l) {
    var m = d.createElement("script");
    m.defer = !0;
    m.async = !1;
    m.type = "module";
    m.setAttribute("crossorigin", !0);
    var p = goog.getScriptNonce();
    p ? (JSCompiler_lcov_branch_data_js_base_js[336] = !0, m.setAttribute("nonce", p)) : JSCompiler_lcov_branch_data_js_base_js[337] = !0;
    l ? (JSCompiler_lcov_branch_data_js_base_js[338] = !0, m.textContent = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(l) : l) : (JSCompiler_lcov_branch_data_js_base_js[339] = !0, m.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(k) : k);
    d.head.appendChild(m);
  }
  if (goog.global.CLOSURE_IMPORT_SCRIPT) {
    JSCompiler_lcov_branch_data_js_base_js[328] = !0, goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? (JSCompiler_lcov_branch_data_js_base_js[330] = !0, a.loaded()) : (JSCompiler_lcov_branch_data_js_base_js[331] = !0, a.pause());
  } else {
    if (JSCompiler_lcov_branch_data_js_base_js[329] = !0, goog.inHtmlDocument_()) {
      JSCompiler_lcov_branch_data_js_base_js[333] = !0;
      var d = goog.global.document, e = this;
      if (goog.isDocumentLoading_()) {
        JSCompiler_lcov_branch_data_js_base_js[340] = !0;
        var f = b;
        goog.Dependency.defer_ = !0;
      } else {
        JSCompiler_lcov_branch_data_js_base_js[341] = !0, f = c;
      }
      var g = goog.Dependency.registerCallback_(function() {
        goog.Dependency.unregisterCallback_(g);
        a.setModuleState(goog.ModuleType.ES6);
      });
      f(void 0, 'goog.Dependency.callback_("' + g + '")');
      f(this.path, void 0);
      var n = goog.Dependency.registerCallback_(function(k) {
        goog.Dependency.unregisterCallback_(n);
        a.registerEs6ModuleExports(e.path, k, goog.moduleLoaderState_.moduleName);
      });
      f(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + n + '", m)');
      var h = goog.Dependency.registerCallback_(function() {
        goog.Dependency.unregisterCallback_(h);
        a.clearModuleState();
        a.loaded();
      });
      f(void 0, 'goog.Dependency.callback_("' + h + '")');
    } else {
      JSCompiler_lcov_branch_data_js_base_js[332] = !0, goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), a.pause();
    }
  }
}, goog.TransformedDependency = function(a, b, c, d, e) {
  goog.Dependency.call(this, a, b, c, d, e);
  this.contents_ = null;
  this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"));
}, goog.inherits(goog.TransformedDependency, goog.Dependency), goog.TransformedDependency.prototype.load = function(a) {
  function b() {
    e.contents_ = goog.loadFileSync_(e.path);
    e.contents_ ? (JSCompiler_lcov_branch_data_js_base_js[342] = !0, e.contents_ = e.transform(e.contents_), e.contents_ ? (JSCompiler_lcov_branch_data_js_base_js[344] = !0, e.contents_ += "\n//# sourceURL=" + e.path) : JSCompiler_lcov_branch_data_js_base_js[345] = !0) : JSCompiler_lcov_branch_data_js_base_js[343] = !0;
  }
  function c() {
    e.lazyFetch_ ? (JSCompiler_lcov_branch_data_js_base_js[352] = !0, b()) : JSCompiler_lcov_branch_data_js_base_js[353] = !0;
    if (e.contents_) {
      JSCompiler_lcov_branch_data_js_base_js[355] = !0;
      f ? (JSCompiler_lcov_branch_data_js_base_js[356] = !0, a.setModuleState(goog.ModuleType.ES6)) : JSCompiler_lcov_branch_data_js_base_js[357] = !0;
      try {
        var l = e.contents_;
        e.contents_ = null;
        goog.globalEval(l);
        if (f) {
          JSCompiler_lcov_branch_data_js_base_js[358] = !0;
          var m = goog.moduleLoaderState_.moduleName;
        } else {
          JSCompiler_lcov_branch_data_js_base_js[359] = !0;
        }
      } finally {
        f ? (JSCompiler_lcov_branch_data_js_base_js[360] = !0, a.clearModuleState()) : JSCompiler_lcov_branch_data_js_base_js[361] = !0;
      }
      f ? (JSCompiler_lcov_branch_data_js_base_js[362] = !0, goog.global.$jscomp.require.ensure([e.getPathName()], function() {
        a.registerEs6ModuleExports(e.path, goog.global.$jscomp.require(e.getPathName()), m);
      })) : JSCompiler_lcov_branch_data_js_base_js[363] = !0;
      a.loaded();
    } else {
      JSCompiler_lcov_branch_data_js_base_js[354] = !0;
    }
  }
  function d() {
    var l = goog.global.document, m = goog.Dependency.registerCallback_(function() {
      goog.Dependency.unregisterCallback_(m);
      c();
    }), p = '<script type="text/javascript">' + goog.protectScriptTag_('goog.Dependency.callback_("' + m + '");') + "\x3c/script>";
    l.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(p) : p);
  }
  var e = this;
  if (goog.global.CLOSURE_IMPORT_SCRIPT) {
    JSCompiler_lcov_branch_data_js_base_js[346] = !0, b(), this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (JSCompiler_lcov_branch_data_js_base_js[348] = !0, this.contents_ = null, a.loaded()) : (JSCompiler_lcov_branch_data_js_base_js[349] = !0, a.pause());
  } else {
    JSCompiler_lcov_branch_data_js_base_js[347] = !0;
    var f = this.loadFlags.module == goog.ModuleType.ES6;
    this.lazyFetch_ ? JSCompiler_lcov_branch_data_js_base_js[351] = !0 : (JSCompiler_lcov_branch_data_js_base_js[350] = !0, b());
    var g = 1 < a.pending().length, n = g && goog.DebugLoader_.IS_OLD_IE_;
    g = goog.Dependency.defer_ && (g || goog.isDocumentLoading_());
    if (n || g) {
      JSCompiler_lcov_branch_data_js_base_js[364] = !0, a.defer(function() {
        c();
      });
    } else {
      JSCompiler_lcov_branch_data_js_base_js[365] = !0;
      var h = goog.global.document;
      n = goog.inHtmlDocument_() && "ActiveXObject" in goog.global;
      if (f && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !n) {
        JSCompiler_lcov_branch_data_js_base_js[366] = !0;
        goog.Dependency.defer_ = !0;
        a.pause();
        var k = h.onreadystatechange;
        h.onreadystatechange = function() {
          "interactive" == h.readyState ? (JSCompiler_lcov_branch_data_js_base_js[368] = !0, h.onreadystatechange = k, c(), a.resume()) : JSCompiler_lcov_branch_data_js_base_js[369] = !0;
          goog.isFunction(k) ? (JSCompiler_lcov_branch_data_js_base_js[370] = !0, k.apply(void 0, arguments)) : JSCompiler_lcov_branch_data_js_base_js[371] = !0;
        };
      } else {
        JSCompiler_lcov_branch_data_js_base_js[367] = !0, !goog.DebugLoader_.IS_OLD_IE_ && goog.inHtmlDocument_() && goog.isDocumentLoading_() ? (JSCompiler_lcov_branch_data_js_base_js[373] = !0, d()) : (JSCompiler_lcov_branch_data_js_base_js[372] = !0, c());
      }
    }
  }
}, goog.TransformedDependency.prototype.transform = function(a) {
}, goog.TranspiledDependency = function(a, b, c, d, e, f) {
  goog.TransformedDependency.call(this, a, b, c, d, e);
  this.transpiler = f;
}, goog.inherits(goog.TranspiledDependency, goog.TransformedDependency), goog.TranspiledDependency.prototype.transform = function(a) {
  return this.transpiler.transpile(a, this.getPathName());
}, goog.PreTranspiledEs6ModuleDependency = function(a, b, c, d, e) {
  goog.TransformedDependency.call(this, a, b, c, d, e);
}, goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency), goog.PreTranspiledEs6ModuleDependency.prototype.transform = function(a) {
  return a;
}, goog.GoogModuleDependency = function(a, b, c, d, e, f, g) {
  goog.TransformedDependency.call(this, a, b, c, d, e);
  this.needsTranspile_ = f;
  this.transpiler_ = g;
}, goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency), goog.GoogModuleDependency.prototype.transform = function(a) {
  this.needsTranspile_ ? (JSCompiler_lcov_branch_data_js_base_js[374] = !0, a = this.transpiler_.transpile(a, this.getPathName())) : JSCompiler_lcov_branch_data_js_base_js[375] = !0;
  if (goog.LOAD_MODULE_USING_EVAL && void 0 !== goog.global.JSON) {
    return JSCompiler_lcov_branch_data_js_base_js[377] = !0, "goog.loadModule(" + goog.global.JSON.stringify(a + "\n//# sourceURL=" + this.path + "\n") + ");";
  }
  JSCompiler_lcov_branch_data_js_base_js[376] = !0;
  return 'goog.loadModule(function(exports) {"use strict";' + a + "\n;return exports});\n//# sourceURL=" + this.path + "\n";
}, goog.DebugLoader_.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.DebugLoader_.prototype.addDependency = function(a, b, c, d) {
  b = b || [];
  a = a.replace(/\\/g, "/");
  var e = goog.normalizePath_(goog.basePath + a);
  d && "boolean" !== typeof d ? JSCompiler_lcov_branch_data_js_base_js[379] = !0 : (JSCompiler_lcov_branch_data_js_base_js[378] = !0, d = d ? {module:goog.ModuleType.GOOG} : {});
  c = this.factory_.createDependency(e, a, b, c, d, goog.transpiler_.needsTranspile(d.lang || "es3", d.module));
  this.dependencies_[e] = c;
  for (c = 0; c < b.length; c++) {
    JSCompiler_lcov_branch_data_js_base_js[380] = !0, this.idToPath_[b[c]] = e;
  }
  JSCompiler_lcov_branch_data_js_base_js[381] = !0;
  this.idToPath_[a] = e;
}, goog.DependencyFactory = function(a) {
  this.transpiler = a;
}, goog.DependencyFactory.prototype.createDependency = function(a, b, c, d, e, f) {
  if (e.module == goog.ModuleType.GOOG) {
    return JSCompiler_lcov_branch_data_js_base_js[382] = !0, new goog.GoogModuleDependency(a, b, c, d, e, f, this.transpiler);
  }
  JSCompiler_lcov_branch_data_js_base_js[383] = !0;
  if (f) {
    return JSCompiler_lcov_branch_data_js_base_js[384] = !0, new goog.TranspiledDependency(a, b, c, d, e, this.transpiler);
  }
  JSCompiler_lcov_branch_data_js_base_js[385] = !0;
  if (e.module == goog.ModuleType.ES6) {
    JSCompiler_lcov_branch_data_js_base_js[386] = !0;
    if ("never" == goog.TRANSPILE && goog.ASSUME_ES_MODULES_TRANSPILED) {
      return JSCompiler_lcov_branch_data_js_base_js[388] = !0, new goog.PreTranspiledEs6ModuleDependency(a, b, c, d, e);
    }
    JSCompiler_lcov_branch_data_js_base_js[389] = !0;
    return new goog.Es6ModuleDependency(a, b, c, d, e);
  }
  JSCompiler_lcov_branch_data_js_base_js[387] = !0;
  return new goog.Dependency(a, b, c, d, e);
}, goog.debugLoader_ = new goog.DebugLoader_, goog.loadClosureDeps = function() {
  goog.debugLoader_.loadClosureDeps();
}, goog.setDependencyFactory = function(a) {
  goog.debugLoader_.setDependencyFactory(a);
}, goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null, goog.global.CLOSURE_NO_DEPS ? JSCompiler_lcov_branch_data_js_base_js[391] = !0 : (JSCompiler_lcov_branch_data_js_base_js[390] = !0, goog.debugLoader_.loadClosureDeps()), goog.bootstrap = function(a, b) {
  goog.debugLoader_.bootstrap(a, b);
}) : JSCompiler_lcov_branch_data_js_base_js[199] = !0;
goog.TRUSTED_TYPES_POLICY_NAME = "goog";
goog.identity_ = function(a) {
  return a;
};
goog.createTrustedTypesPolicy = function(a) {
  var b = null, c = goog.global.trustedTypes;
  if (c && c.createPolicy) {
    JSCompiler_lcov_branch_data_js_base_js[393] = !0;
  } else {
    return JSCompiler_lcov_branch_data_js_base_js[392] = !0, b;
  }
  try {
    b = c.createPolicy(a, {createHTML:goog.identity_, createScript:goog.identity_, createScriptURL:goog.identity_});
  } catch (d) {
    goog.logToConsole_(d.message);
  }
  return b;
};
var JSCompiler_lcov_branch_data_js_model_js = [];
__jscov.branchesTaken.push(JSCompiler_lcov_branch_data_js_model_js);
__jscov.branchPresent.push("0000000000000000000000000a00000000000000000020024400002040000000008124001a0000020a500270000000000000000080020000000c0018000810");
var JSCompiler_lcov_branchesInLine = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
__jscov.branchesInLine.push(JSCompiler_lcov_branchesInLine);
__jscov.fileNames.push("js/model.js");
var module$exports$wordsearch$model = {}, module$contents$wordsearch$model_LETTER_FREQUENCY = [8.498, 9.989, 12.191, 16.445, 27.607, 29.835, 31.85, 37.944, 45.49, 45.643, 46.935, 50.96, 53.365, 60.114, 67.621, 69.550, 69.645, 77.232, 83.559, 92.915, 95.673, 96.651, 99.211, 99.361, 101.355, 101.432], module$contents$wordsearch$model_WORDS = new Set;
module$exports$wordsearch$model.Line = function(a, b, c) {
  this.startPoint = a;
  this.endPoint = b;
  this.colour = c;
};
var module$contents$wordsearch$model_FOUND_WORDS = [];
module$exports$wordsearch$model.Point = function(a, b) {
  this.x = a;
  this.y = b;
};
module$exports$wordsearch$model.Point.prototype.subtract = function(a) {
  return new module$exports$wordsearch$model.Point(this.x - a.x, this.y - a.y);
};
module$exports$wordsearch$model.Point.prototype.dot = function(a) {
  return this.x * a.x + this.y * a.y;
};
module$exports$wordsearch$model.Point.prototype.distance = function(a) {
  return Math.sqrt(Math.pow(this.x - a.x, 2) + Math.pow(this.y - a.y, 2));
};
module$exports$wordsearch$model.Point.prototype.equals = function(a) {
  return this.x === a.x && this.y === a.y;
};
module$exports$wordsearch$model.Point.prototype.within = function(a, b) {
  return Math.abs(this.x - a.x) <= b && Math.abs(this.y - a.y) <= b;
};
function module$contents$wordsearch$model_getNearestPointOnLine(a, b, c) {
  var d = b.subtract(a);
  c = c.subtract(a).dot(d) / d.dot(d);
  if (0 > c) {
    return JSCompiler_lcov_branch_data_js_model_js[0] = !0, b;
  }
  JSCompiler_lcov_branch_data_js_model_js[1] = !0;
  if (1 < c) {
    return JSCompiler_lcov_branch_data_js_model_js[2] = !0, a;
  }
  JSCompiler_lcov_branch_data_js_model_js[3] = !0;
  b = new module$exports$wordsearch$model.Point(c * d.x, c * d.y);
  return new module$exports$wordsearch$model.Point(a.x + b.x, a.y + b.y);
}
module$exports$wordsearch$model.GameBoard = function(a, b) {
  this.startPointX = a.startPointX;
  this.startPointY = a.startPointY;
  this.gameHeight = a.gameHeight;
  this.gameWidth = a.gameWidth;
  this.dimensionsOfSquare = a.dimensionsOfSquare;
  this.board = b;
};
module$exports$wordsearch$model.GameBoard.prototype.findSquare = function(a) {
  return this.board[Math.floor((a.y - this.startPointY) / this.dimensionsOfSquare)][Math.floor((a.x - this.startPointX) / this.dimensionsOfSquare)];
};
module$exports$wordsearch$model.GameBoard.prototype.isOnBoard = function(a) {
  var b = this.startPointY + this.gameHeight * this.dimensionsOfSquare;
  return a.x < this.startPointX + this.gameWidth * this.dimensionsOfSquare && a.y < b && a.x > this.startPointX && a.y > this.startPointY;
};
module$exports$wordsearch$model.GameBoard.prototype.getSquaresFromLine = function(a, b) {
  var c = [], d = this.dimensionsOfSquare, e;
  if (module$contents$wordsearch$model_isLineDiagonal(a, b)) {
    JSCompiler_lcov_branch_data_js_model_js[4] = !0;
    d = Math.sqrt(2 * Math.pow(this.dimensionsOfSquare, 2));
    var f = e = d / Math.sqrt(2);
  } else {
    JSCompiler_lcov_branch_data_js_model_js[5] = !0, module$contents$wordsearch$model_isLineVertical(a, b) ? (JSCompiler_lcov_branch_data_js_model_js[6] = !0, e = 0, f = d) : (JSCompiler_lcov_branch_data_js_model_js[7] = !0, e = d, f = 0);
  }
  a.y > b.y ? (JSCompiler_lcov_branch_data_js_model_js[8] = !0, f *= -1) : JSCompiler_lcov_branch_data_js_model_js[9] = !0;
  a.x > b.x ? (JSCompiler_lcov_branch_data_js_model_js[10] = !0, e *= -1) : JSCompiler_lcov_branch_data_js_model_js[11] = !0;
  a = this.findSquare(a);
  a = new module$exports$wordsearch$model.Point(a.xCoord + this.dimensionsOfSquare / 2, a.yCoord + this.dimensionsOfSquare / 2);
  b = this.findSquare(b);
  b = new module$exports$wordsearch$model.Point(b.xCoord + this.dimensionsOfSquare / 2, b.yCoord + this.dimensionsOfSquare / 2);
  d = a.distance(b) / d + 1;
  if (0.001 < Math.abs(d - Math.round(d))) {
    return JSCompiler_lcov_branch_data_js_model_js[12] = !0, c;
  }
  JSCompiler_lcov_branch_data_js_model_js[13] = !0;
  a = new module$exports$wordsearch$model.Point(a.x, a.y);
  for (b = 0; b < Math.round(d); ++b) {
    JSCompiler_lcov_branch_data_js_model_js[14] = !0;
    var g = this.findSquare(a);
    c.push(g);
    a = new module$exports$wordsearch$model.Point(a.x + e, a.y + f);
  }
  JSCompiler_lcov_branch_data_js_model_js[15] = !0;
  return c;
};
module$exports$wordsearch$model.GameBoard.prototype.isSquareIndexValid = function(a, b) {
  return a < this.gameHeight && 0 <= a && 0 <= b && b < this.gameWidth;
};
module$exports$wordsearch$model.GameBoard.prototype.doesWordFit = function(a, b, c, d) {
  if (this.isSquareIndexValid(b, c)) {
    JSCompiler_lcov_branch_data_js_model_js[17] = !0;
  } else {
    throw JSCompiler_lcov_branch_data_js_model_js[16] = !0, console.log("Index is: ", b, ",", c), "Error - inital square location is not valid";
  }
  --a;
  if ("vertical" === d) {
    return JSCompiler_lcov_branch_data_js_model_js[18] = !0, this.isSquareIndexValid(b, c + a);
  }
  JSCompiler_lcov_branch_data_js_model_js[19] = !0;
  if ("horizontal" === d) {
    return JSCompiler_lcov_branch_data_js_model_js[20] = !0, this.isSquareIndexValid(b + a, c);
  }
  JSCompiler_lcov_branch_data_js_model_js[21] = !0;
  if ("diagonal" === d) {
    return JSCompiler_lcov_branch_data_js_model_js[22] = !0, this.isSquareIndexValid(b + a, c + a);
  }
  JSCompiler_lcov_branch_data_js_model_js[23] = !0;
  throw "ERROR In doesWordFit, no valid option for direction";
};
module$exports$wordsearch$model.GameBoard.prototype.doesWordMatch = function(a, b, c, d, e) {
  for (var f = 0; f < a.length; ++f) {
    JSCompiler_lcov_branch_data_js_model_js[24] = !0;
    var g = this.board[b][c];
    if (g.isPartOfWord) {
      JSCompiler_lcov_branch_data_js_model_js[26] = !0;
      if (g.character != a.charAt(f)) {
        return JSCompiler_lcov_branch_data_js_model_js[28] = !0, !1;
      }
      JSCompiler_lcov_branch_data_js_model_js[29] = !0;
    } else {
      JSCompiler_lcov_branch_data_js_model_js[27] = !0;
    }
    b += e;
    c += d;
  }
  return JSCompiler_lcov_branch_data_js_model_js[25] = !0;
};
module$exports$wordsearch$model.GameBoard.prototype.generateRandomWordParams = function(a) {
  var b = a.length, c = 0.25 > Math.random() ? !0 : !1;
  c ? (JSCompiler_lcov_branch_data_js_model_js[30] = !0, a = a.split("").reverse().join("")) : JSCompiler_lcov_branch_data_js_model_js[31] = !0;
  var d = Math.random();
  0.33 > d ? (JSCompiler_lcov_branch_data_js_model_js[32] = !0, d = "vertical") : (JSCompiler_lcov_branch_data_js_model_js[33] = !0, 0.66 > d ? (JSCompiler_lcov_branch_data_js_model_js[34] = !0, d = "diagonal") : (JSCompiler_lcov_branch_data_js_model_js[35] = !0, d = "horizontal"));
  var e = 0, f = 0;
  "vertical" === d ? (JSCompiler_lcov_branch_data_js_model_js[36] = !0, e = 1) : (JSCompiler_lcov_branch_data_js_model_js[37] = !0, "diagonal" === d ? (JSCompiler_lcov_branch_data_js_model_js[38] = !0, f = e = 1) : (JSCompiler_lcov_branch_data_js_model_js[39] = !0, "horizontal" === d ? (JSCompiler_lcov_branch_data_js_model_js[40] = !0, f = 1) : JSCompiler_lcov_branch_data_js_model_js[41] = !0));
  var g = Math.floor(10 * Math.random()), n = Math.floor(10 * Math.random());
  for (console.log("Now placing: ", a);;) {
    JSCompiler_lcov_branch_data_js_model_js[42] = !0;
    if (this.doesWordFit(b, g, n, d)) {
      if (JSCompiler_lcov_branch_data_js_model_js[44] = !0, this.doesWordMatch(a, g, n, e, f)) {
        JSCompiler_lcov_branch_data_js_model_js[46] = !0;
        break;
      } else {
        JSCompiler_lcov_branch_data_js_model_js[47] = !0;
      }
    } else {
      JSCompiler_lcov_branch_data_js_model_js[45] = !0;
    }
    console.log("nooo");
    g = Math.floor(10 * Math.random());
    n = Math.floor(10 * Math.random());
  }
  JSCompiler_lcov_branch_data_js_model_js[43] = !0;
  return {isReversed:c, direction:d, rowIndex:g, colIndex:n, vertScaler:e, horiScaler:f};
};
function module$contents$wordsearch$model_isLineDiagonal(a, b) {
  return a.x !== b.x && a.y !== b.y;
}
function module$contents$wordsearch$model_isLineVertical(a, b) {
  return 0.01 > Math.abs(a.x - b.x) && a.y !== b.y;
}
module$exports$wordsearch$model.Square = function() {
};
function module$contents$wordsearch$model_createGameBoard(a, b) {
  var c = new module$exports$wordsearch$model.GameBoard({startPointX:0, startPointY:0, gameHeight:10, gameWidth:10, dimensionsOfSquare:0}, []);
  a /= c.gameHeight;
  var d = b / c.gameWidth;
  c.dimensionsOfSquare = d > a ? a : d;
  c.startPointX = b / 2 - c.dimensionsOfSquare * c.gameWidth / 2;
  b = c.startPointX;
  a = c.startPointY;
  for (d = 0; d < c.gameHeight; ++d) {
    JSCompiler_lcov_branch_data_js_model_js[48] = !0;
    for (var e = [], f = 0; f < c.gameWidth; ++f) {
      JSCompiler_lcov_branch_data_js_model_js[50] = !0, e.push({xCoord:b, yCoord:a, colour:"white", isPartOfWord:!1, character:"-"}), b += c.dimensionsOfSquare;
    }
    JSCompiler_lcov_branch_data_js_model_js[51] = !0;
    c.board.push(e);
    b = c.startPointX;
    a += c.dimensionsOfSquare;
  }
  JSCompiler_lcov_branch_data_js_model_js[49] = !0;
  module$contents$wordsearch$model_populateWithRandomChars(c);
  return c;
}
function module$contents$wordsearch$model_getRandomizedCharater(a) {
  for (var b = 0, c = 0; 26 > c; ++c) {
    if (JSCompiler_lcov_branch_data_js_model_js[52] = !0, a < module$contents$wordsearch$model_LETTER_FREQUENCY[c]) {
      JSCompiler_lcov_branch_data_js_model_js[54] = !0;
      b = c;
      break;
    } else {
      JSCompiler_lcov_branch_data_js_model_js[55] = !0;
    }
  }
  JSCompiler_lcov_branch_data_js_model_js[53] = !0;
  return String.fromCharCode(97 + b);
}
function module$contents$wordsearch$model_populateWithRandomChars(a) {
  a = $jscomp.makeIterator(a.board);
  for (var b = a.next(); !b.done; b = a.next()) {
    JSCompiler_lcov_branch_data_js_model_js[56] = !0;
    b = $jscomp.makeIterator(b.value);
    for (var c = b.next(); !c.done; c = b.next()) {
      JSCompiler_lcov_branch_data_js_model_js[58] = !0, c.value.character = module$contents$wordsearch$model_getRandomizedCharater(101.432 * Math.random());
    }
    JSCompiler_lcov_branch_data_js_model_js[59] = !0;
  }
  JSCompiler_lcov_branch_data_js_model_js[57] = !0;
}
function module$contents$wordsearch$model_addWord(a, b) {
  module$contents$wordsearch$model_WORDS.add(a);
  var c = b.generateRandomWordParams(a);
  c.isReversed ? (JSCompiler_lcov_branch_data_js_model_js[60] = !0, a = a.split("").reverse().join("")) : JSCompiler_lcov_branch_data_js_model_js[61] = !0;
  console.log("Part of word is at index: ", c.rowIndex, ",", c.colIndex);
  for (var d = 0; d < a.length; ++d) {
    JSCompiler_lcov_branch_data_js_model_js[62] = !0;
    var e = b.board[c.rowIndex][c.colIndex];
    c.rowIndex += c.horiScaler;
    c.colIndex += c.vertScaler;
    e.character = a.charAt(d);
    e.isPartOfWord = !0;
  }
  JSCompiler_lcov_branch_data_js_model_js[63] = !0;
}
function module$contents$wordsearch$model_isValidWord(a) {
  return module$contents$wordsearch$model_WORDS.has(a);
}
function module$contents$wordsearch$model_addFoundWords(a) {
  module$contents$wordsearch$model_FOUND_WORDS.push(a);
}
function module$contents$wordsearch$model_getFoundWords() {
  return module$contents$wordsearch$model_FOUND_WORDS;
}
module$exports$wordsearch$model.createGameBoard = module$contents$wordsearch$model_createGameBoard;
module$exports$wordsearch$model.addWord = module$contents$wordsearch$model_addWord;
module$exports$wordsearch$model.isValidWord = module$contents$wordsearch$model_isValidWord;
module$exports$wordsearch$model.addFoundWords = module$contents$wordsearch$model_addFoundWords;
module$exports$wordsearch$model.getFoundWords = module$contents$wordsearch$model_getFoundWords;
var JSCompiler_lcov_branch_data_js_view_js = [];
__jscov.branchesTaken.push(JSCompiler_lcov_branch_data_js_view_js);
__jscov.branchPresent.push("000000000002300000000000000000000040");
var JSCompiler_lcov_branchesInLine = [2, 2, 2, 2];
__jscov.branchesInLine.push(JSCompiler_lcov_branchesInLine);
__jscov.fileNames.push("js/view.js");
var module$exports$wordsearch$view = {}, module$contents$wordsearch$view_canvas = document.getElementById("wordSearchCanvas"), module$contents$wordsearch$view_context = module$contents$wordsearch$view_canvas.getContext("2d");
function module$contents$wordsearch$view_getViewHeight() {
  return module$contents$wordsearch$view_canvas.getBoundingClientRect().height;
}
function module$contents$wordsearch$view_getViewWidth() {
  return module$contents$wordsearch$view_canvas.getBoundingClientRect().width;
}
module$exports$wordsearch$view.View = function(a, b) {
  this.wordSearchBoard = a;
  this.arrayOfLines = b;
};
module$exports$wordsearch$view.View.prototype.redraw = function() {
  module$contents$wordsearch$view_context.clearRect(0, 0, module$contents$wordsearch$view_canvas.width, module$contents$wordsearch$view_canvas.height);
  this.drawGameBoard();
  0 < this.arrayOfLines.length ? (JSCompiler_lcov_branch_data_js_view_js[0] = !0, this.drawLines()) : JSCompiler_lcov_branch_data_js_view_js[1] = !0;
};
module$exports$wordsearch$view.View.prototype.drawGameBoard = function() {
  module$contents$wordsearch$view_context.textAlign = "center";
  module$contents$wordsearch$view_context.font = "30px Arial";
  for (var a = $jscomp.makeIterator(this.wordSearchBoard.board), b = a.next(); !b.done; b = a.next()) {
    JSCompiler_lcov_branch_data_js_view_js[2] = !0;
    b = $jscomp.makeIterator(b.value);
    for (var c = b.next(); !c.done; c = b.next()) {
      JSCompiler_lcov_branch_data_js_view_js[4] = !0, c = c.value, module$contents$wordsearch$view_context.fillStyle = c.colour, module$contents$wordsearch$view_context.fillRect(c.xCoord, c.yCoord, this.wordSearchBoard.dimensionsOfSquare, this.wordSearchBoard.dimensionsOfSquare), module$contents$wordsearch$view_context.fillStyle = "black", module$contents$wordsearch$view_context.fillText(c.character, c.xCoord + this.wordSearchBoard.dimensionsOfSquare / 2, c.yCoord + this.wordSearchBoard.dimensionsOfSquare / 
      2 + 10);
    }
    JSCompiler_lcov_branch_data_js_view_js[5] = !0;
  }
  JSCompiler_lcov_branch_data_js_view_js[3] = !0;
};
module$exports$wordsearch$view.View.prototype.drawSearchLine = function(a, b) {
  var c = Math.atan2(b.y - a.y, b.x - a.x);
  b = new module$exports$wordsearch$model.Point(a.x + Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)), a.y);
  var d = a.x + (b.x - a.x) / 2;
  module$contents$wordsearch$view_context.save();
  module$contents$wordsearch$view_context.lineWidth = 5.0;
  module$contents$wordsearch$view_context.translate(a.x, a.y);
  module$contents$wordsearch$view_context.rotate(c);
  module$contents$wordsearch$view_context.translate(-a.x, -a.y);
  module$contents$wordsearch$view_context.beginPath();
  module$contents$wordsearch$view_context.moveTo(d, a.y - 15);
  module$contents$wordsearch$view_context.arcTo(b.x + 15, b.y - 15, b.x + 15, b.y, 15);
  module$contents$wordsearch$view_context.arcTo(b.x + 15, b.y + 15, d, a.y + 15, 15);
  module$contents$wordsearch$view_context.arcTo(a.x - 15, a.y + 15, a.x - 15, a.y, 15);
  module$contents$wordsearch$view_context.arcTo(a.x - 15, a.y - 15, d, a.y - 15, 15);
  module$contents$wordsearch$view_context.lineTo(d, a.y - 15);
  module$contents$wordsearch$view_context.stroke();
  module$contents$wordsearch$view_context.restore();
};
module$exports$wordsearch$view.View.prototype.updateLines = function(a) {
  this.arrayOfLines = a;
};
module$exports$wordsearch$view.View.prototype.drawLines = function() {
  for (var a = $jscomp.makeIterator(this.arrayOfLines), b = a.next(); !b.done; b = a.next()) {
    JSCompiler_lcov_branch_data_js_view_js[6] = !0, b = b.value, module$contents$wordsearch$view_context.fillStyle = b.colour, module$contents$wordsearch$view_context.strokeStyle = b.colour, module$contents$wordsearch$view_context.globalAlpha = .5, this.drawSearchLine(b.startPoint, b.endPoint), module$contents$wordsearch$view_context.closePath(), module$contents$wordsearch$view_context.fill(), module$contents$wordsearch$view_context.globalAlpha = 1, module$contents$wordsearch$view_context.strokeStyle = 
    "black";
  }
  JSCompiler_lcov_branch_data_js_view_js[7] = !0;
};
module$exports$wordsearch$view.View.prototype.init = function() {
  this.drawGameBoard();
};
module$exports$wordsearch$view.getViewHeight = module$contents$wordsearch$view_getViewHeight;
module$exports$wordsearch$view.getViewWidth = module$contents$wordsearch$view_getViewWidth;
var JSCompiler_lcov_branch_data_js_controller_js = [];
__jscov.branchesTaken.push(JSCompiler_lcov_branch_data_js_controller_js);
__jscov.branchPresent.push("000000000400000102000200000240800a");
var JSCompiler_lcov_branchesInLine = [2, 2, 2, 2, 2, 2, 2, 2, 2];
__jscov.branchesInLine.push(JSCompiler_lcov_branchesInLine);
__jscov.fileNames.push("js/controller.js");
var module$exports$wordsearch$controller = {}, module$contents$wordsearch$controller_Controller = function(a, b) {
  this.wordSearchBoard = a;
  this.myView = b;
  this.drawLineFlag = !1;
};
module$contents$wordsearch$controller_Controller.prototype.onMouseDown = function(a) {
  a = new module$exports$wordsearch$model.Point(a.clientX, a.clientY);
  this.wordSearchBoard.isOnBoard(a) ? (this.drawLineFlag = JSCompiler_lcov_branch_data_js_controller_js[0] = !0, a = this.wordSearchBoard.findSquare(a), this.startPoint = new module$exports$wordsearch$model.Point(a.xCoord + this.wordSearchBoard.dimensionsOfSquare / 2, a.yCoord + this.wordSearchBoard.dimensionsOfSquare / 2), console.log("Hit!")) : (JSCompiler_lcov_branch_data_js_controller_js[1] = !0, console.log("Miss!"));
};
module$contents$wordsearch$controller_Controller.prototype.onMouseUp = function(a) {
  a = new module$exports$wordsearch$model.Point(a.clientX, a.clientY);
  if (this.drawLineFlag) {
    if (JSCompiler_lcov_branch_data_js_controller_js[2] = !0, this.drawLineFlag = !1, a = this.wordSearchBoard.findSquare(a), a = new module$exports$wordsearch$model.Point(a.xCoord + this.wordSearchBoard.dimensionsOfSquare / 2, a.yCoord + this.wordSearchBoard.dimensionsOfSquare / 2), a.equals(this.startPoint)) {
      JSCompiler_lcov_branch_data_js_controller_js[4] = !0;
    } else {
      JSCompiler_lcov_branch_data_js_controller_js[5] = !0;
      var b = this.wordSearchBoard.getSquaresFromLine(this.startPoint, a);
      b = module$contents$wordsearch$controller_getWord(b);
      console.log("Word found is: ", b);
      module$contents$wordsearch$model_isValidWord(b) ? (JSCompiler_lcov_branch_data_js_controller_js[6] = !0, b = new module$exports$wordsearch$model.Line(this.startPoint, a, module$contents$wordsearch$controller_getColour()), module$contents$wordsearch$model_addFoundWords(b), this.myView.updateLines(module$contents$wordsearch$model_getFoundWords()), this.myView.redraw(), this.myView.drawSearchLine(this.startPoint, a)) : (JSCompiler_lcov_branch_data_js_controller_js[7] = !0, this.myView.redraw());
      console.log("Distance from start to end is: ", this.startPoint.distance(a));
    }
  } else {
    JSCompiler_lcov_branch_data_js_controller_js[3] = !0;
  }
};
module$contents$wordsearch$controller_Controller.prototype.onMouseMove = function(a) {
  a = new module$exports$wordsearch$model.Point(a.clientX, a.clientY);
  this.drawLineFlag ? (JSCompiler_lcov_branch_data_js_controller_js[8] = !0, this.myView.redraw(), this.myView.drawSearchLine(this.startPoint, a)) : JSCompiler_lcov_branch_data_js_controller_js[9] = !0;
};
function module$contents$wordsearch$controller_getWord(a) {
  var b = "";
  a = $jscomp.makeIterator(a);
  for (var c = a.next(); !c.done; c = a.next()) {
    JSCompiler_lcov_branch_data_js_controller_js[10] = !0, b = b.concat(c.value.character);
  }
  JSCompiler_lcov_branch_data_js_controller_js[11] = !0;
  return b;
}
var module$contents$wordsearch$controller_colourCounter = -1;
function module$contents$wordsearch$controller_getColour() {
  module$contents$wordsearch$controller_colourCounter++;
  if (0 === module$contents$wordsearch$controller_colourCounter % 4) {
    return JSCompiler_lcov_branch_data_js_controller_js[12] = !0, "#4285F4";
  }
  JSCompiler_lcov_branch_data_js_controller_js[13] = !0;
  if (1 === module$contents$wordsearch$controller_colourCounter % 4) {
    return JSCompiler_lcov_branch_data_js_controller_js[14] = !0, "#DB4437";
  }
  JSCompiler_lcov_branch_data_js_controller_js[15] = !0;
  if (2 === module$contents$wordsearch$controller_colourCounter % 4) {
    return JSCompiler_lcov_branch_data_js_controller_js[16] = !0, "#F4B400";
  }
  JSCompiler_lcov_branch_data_js_controller_js[17] = !0;
  return "#0F9D58";
}
function module$contents$wordsearch$controller_playGame() {
  var a = module$contents$wordsearch$model_createGameBoard(module$contents$wordsearch$view_getViewHeight(), module$contents$wordsearch$view_getViewWidth());
  module$contents$wordsearch$model_addWord("mikita", a);
  module$contents$wordsearch$model_addWord("patrick", a);
  module$contents$wordsearch$model_addWord("laura", a);
  module$contents$wordsearch$model_addWord("google", a);
  console.log(a);
  var b = new module$exports$wordsearch$view.View(a, module$contents$wordsearch$model_getFoundWords()), c = new module$contents$wordsearch$controller_Controller(a, b);
  window.addEventListener("mousedown", function(d) {
    c.onMouseDown(d);
  });
  window.addEventListener("mousemove", function(d) {
    c.onMouseMove(d);
  });
  window.addEventListener("mouseup", function(d) {
    c.onMouseUp(d);
  });
  b.init();
}
module$exports$wordsearch$controller.playGame = module$contents$wordsearch$controller_playGame;
var module$exports$wordsearch$main = {};
function module$contents$wordsearch$main_main() {
  module$contents$wordsearch$controller_playGame();
}
module$contents$wordsearch$main_main();

