/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
self.window || (self.window = self, self.window.top = self);
var __jscov = window.top.__jscov || (window.top.__jscov = {fileNames:[], instrumentedLines:[], executedLines:[]}), JSCompiler_lcov_data_js_base_js = [];
__jscov.executedLines.push(JSCompiler_lcov_data_js_base_js);
__jscov.instrumentedLines.push("00000cfbffffffdfff7fef7f7dffffffafffffffeffffb7fdeb060c1821f2000f84700fcbf01fcabf06f11000087130000000000ac0163160018e04f0000001830c04cc14800c708003c66946300003c000000010060000400c09f008003000000001c00c0c67d11000022000000000008001800c12b010000000000000000000000007c540106101c7eca9c84121007e04f0900c0755800f03e0c059a0c2300d8cc02180016c000067000800280018439000000007c9700800100e78e01000040011500e01c000007004400de8fd99c000000000000000000c830bd9c1126000000070000010000603a0200300000c000180000402f0000b90000170008000000b4c3b117010000004c802c010000798007001a8018609e2efe211500001e80df808fb01c8240665b00ff3d250011021800aaaa0af871befc014026807b000c805bd94c8fb401b8b79723675d1868c060a7b130181e000cc0c7238c004f04f80238802008102000020401080200805455c03f0117c00f2040c00306f0ab00c02b0ba90882173d69848e931b470200947865a370a1c01e6784340ac0a5135e0000250090d81e6e457392e967e440a04e04828084850294bfa1021000a01405005042010020a93803028000f4c505800200cd9c08086000c080180030000003c0078605");
__jscov.fileNames.push("js/base.js");
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(a) {
  JSCompiler_lcov_data_js_base_js[27] = !0;
  JSCompiler_lcov_data_js_base_js[28] = !0;
  var b = 0;
  JSCompiler_lcov_data_js_base_js[29] = !0;
  return function() {
    JSCompiler_lcov_data_js_base_js[29] = !0;
    JSCompiler_lcov_data_js_base_js[30] = !0;
    if (b < a.length) {
      return JSCompiler_lcov_data_js_base_js[31] = !0, {done:!1, value:a[b++], };
    }
    JSCompiler_lcov_data_js_base_js[36] = !0;
    return {done:!0};
  };
};
$jscomp.arrayIterator = function(a) {
  JSCompiler_lcov_data_js_base_js[47] = !0;
  JSCompiler_lcov_data_js_base_js[48] = !0;
  return {next:$jscomp.arrayIteratorImpl(a)};
};
$jscomp.makeIterator = function(a) {
  JSCompiler_lcov_data_js_base_js[30] = !0;
  JSCompiler_lcov_data_js_base_js[32] = !0;
  var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  JSCompiler_lcov_data_js_base_js[34] = !0;
  return b ? b.call(a) : $jscomp.arrayIterator(a);
};
$jscomp.getGlobal = function(a) {
  JSCompiler_lcov_data_js_base_js[33] = !0;
  JSCompiler_lcov_data_js_base_js[34] = !0;
  a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, ];
  JSCompiler_lcov_data_js_base_js[56] = !0;
  var b = 0;
  for (JSCompiler_lcov_data_js_base_js[56] = !0; b < a.length; ++b) {
    JSCompiler_lcov_data_js_base_js[57] = !0;
    var c = a[b];
    JSCompiler_lcov_data_js_base_js[64] = !0;
    if (c && c.Math == Math) {
      return JSCompiler_lcov_data_js_base_js[65] = !0, c;
    }
  }
  JSCompiler_lcov_data_js_base_js[74] = !0;
  JSCompiler_lcov_data_js_base_js[76] = !0;
  JSCompiler_lcov_data_js_base_js[77] = !0;
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.checkEs6ConformanceViaProxy = function() {
  JSCompiler_lcov_data_js_base_js[32] = !0;
  try {
    JSCompiler_lcov_data_js_base_js[33] = !0;
    JSCompiler_lcov_data_js_base_js[34] = !0;
    var a = {};
    JSCompiler_lcov_data_js_base_js[35] = !0;
    var b = Object.create(new $jscomp.global.Proxy(a, {get:function(c, d, e) {
      JSCompiler_lcov_data_js_base_js[36] = !0;
      JSCompiler_lcov_data_js_base_js[37] = !0;
      return c == a && "q" == d && e == b;
    }}));
    JSCompiler_lcov_data_js_base_js[40] = !0;
    return !0 === b.q;
  } catch (c) {
    return JSCompiler_lcov_data_js_base_js[41] = !0, JSCompiler_lcov_data_js_base_js[42] = !0, !1;
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
  JSCompiler_lcov_data_js_base_js[38] = !0;
  JSCompiler_lcov_data_js_base_js[39] = !0;
  if (a == Array.prototype || a == Object.prototype) {
    return JSCompiler_lcov_data_js_base_js[42] = !0, a;
  }
  JSCompiler_lcov_data_js_base_js[52] = !0;
  a[b] = c.value;
  JSCompiler_lcov_data_js_base_js[53] = !0;
  return a;
};
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(a, b) {
  JSCompiler_lcov_data_js_base_js[48] = !0;
  JSCompiler_lcov_data_js_base_js[50] = !0;
  var c = $jscomp.propertyToPolyfillSymbol[b];
  JSCompiler_lcov_data_js_base_js[51] = !0;
  if (null == c) {
    return JSCompiler_lcov_data_js_base_js[52] = !0, a[b];
  }
  JSCompiler_lcov_data_js_base_js[57] = !0;
  c = a[c];
  JSCompiler_lcov_data_js_base_js[62] = !0;
  return void 0 !== c ? c : a[b];
};
$jscomp.polyfill = function(a, b, c, d) {
  JSCompiler_lcov_data_js_base_js[88] = !0;
  JSCompiler_lcov_data_js_base_js[89] = !0;
  b ? (JSCompiler_lcov_data_js_base_js[90] = !0, $jscomp.ISOLATE_POLYFILLS ? (JSCompiler_lcov_data_js_base_js[91] = !0, $jscomp.polyfillIsolated(a, b, c, d)) : (JSCompiler_lcov_data_js_base_js[93] = !0, $jscomp.polyfillUnisolated(a, b, c, d))) : JSCompiler_lcov_data_js_base_js[89] = !0;
};
$jscomp.polyfillUnisolated = function(a, b, c, d) {
  JSCompiler_lcov_data_js_base_js[109] = !0;
  JSCompiler_lcov_data_js_base_js[110] = !0;
  c = $jscomp.global;
  JSCompiler_lcov_data_js_base_js[111] = !0;
  a = a.split(".");
  JSCompiler_lcov_data_js_base_js[112] = !0;
  d = 0;
  for (JSCompiler_lcov_data_js_base_js[112] = !0; d < a.length - 1; d++) {
    JSCompiler_lcov_data_js_base_js[113] = !0;
    var e = a[d];
    JSCompiler_lcov_data_js_base_js[114] = !0;
    if (!(e in c)) {
      JSCompiler_lcov_data_js_base_js[114] = !0;
      return;
    }
    JSCompiler_lcov_data_js_base_js[115] = !0;
    c = c[e];
  }
  JSCompiler_lcov_data_js_base_js[117] = !0;
  a = a[a.length - 1];
  JSCompiler_lcov_data_js_base_js[118] = !0;
  d = c[a];
  JSCompiler_lcov_data_js_base_js[119] = !0;
  b = b(d);
  JSCompiler_lcov_data_js_base_js[120] = !0;
  b == d || null == b ? JSCompiler_lcov_data_js_base_js[120] = !0 : (JSCompiler_lcov_data_js_base_js[121] = !0, $jscomp.defineProperty(c, a, {configurable:!0, writable:!0, value:b}));
};
$jscomp.polyfillIsolated = function(a, b, c, d) {
  JSCompiler_lcov_data_js_base_js[148] = !0;
  JSCompiler_lcov_data_js_base_js[149] = !0;
  var e = a.split(".");
  JSCompiler_lcov_data_js_base_js[150] = !0;
  a = 1 === e.length;
  JSCompiler_lcov_data_js_base_js[151] = !0;
  d = e[0];
  JSCompiler_lcov_data_js_base_js[156] = !0;
  JSCompiler_lcov_data_js_base_js[157] = !0;
  !a && d in $jscomp.polyfills ? (JSCompiler_lcov_data_js_base_js[159] = !0, d = $jscomp.polyfills) : (JSCompiler_lcov_data_js_base_js[162] = !0, d = $jscomp.global);
  JSCompiler_lcov_data_js_base_js[165] = !0;
  var g = 0;
  for (JSCompiler_lcov_data_js_base_js[165] = !0; g < e.length - 1; g++) {
    JSCompiler_lcov_data_js_base_js[166] = !0;
    var f = e[g];
    JSCompiler_lcov_data_js_base_js[167] = !0;
    if (!(f in d)) {
      JSCompiler_lcov_data_js_base_js[167] = !0;
      return;
    }
    JSCompiler_lcov_data_js_base_js[168] = !0;
    d = d[f];
  }
  JSCompiler_lcov_data_js_base_js[171] = !0;
  e = e[e.length - 1];
  JSCompiler_lcov_data_js_base_js[175] = !0;
  c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? d[e] : null;
  JSCompiler_lcov_data_js_base_js[177] = !0;
  b = b(c);
  JSCompiler_lcov_data_js_base_js[179] = !0;
  null == b ? JSCompiler_lcov_data_js_base_js[180] = !0 : (JSCompiler_lcov_data_js_base_js[183] = !0, a ? (JSCompiler_lcov_data_js_base_js[187] = !0, $jscomp.defineProperty($jscomp.polyfills, e, {configurable:!0, writable:!0, value:b})) : (JSCompiler_lcov_data_js_base_js[190] = !0, b !== c && (JSCompiler_lcov_data_js_base_js[194] = !0, $jscomp.propertyToPolyfillSymbol[e] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(e) : $jscomp.POLYFILL_PREFIX + e, JSCompiler_lcov_data_js_base_js[198] = !0, 
  e = $jscomp.propertyToPolyfillSymbol[e], JSCompiler_lcov_data_js_base_js[199] = !0, $jscomp.defineProperty(d, e, {configurable:!0, writable:!0, value:b}))));
};
$jscomp.initSymbol = function() {
  JSCompiler_lcov_data_js_base_js[31] = !0;
};
$jscomp.polyfill("Symbol", function(a) {
  JSCompiler_lcov_data_js_base_js[33] = !0;
  JSCompiler_lcov_data_js_base_js[34] = !0;
  if (a) {
    return JSCompiler_lcov_data_js_base_js[34] = !0, a;
  }
  JSCompiler_lcov_data_js_base_js[41] = !0;
  var b = function(e, g) {
    JSCompiler_lcov_data_js_base_js[41] = !0;
    JSCompiler_lcov_data_js_base_js[43] = !0;
    this.$jscomp$symbol$id_ = e;
    JSCompiler_lcov_data_js_base_js[46] = !0;
    JSCompiler_lcov_data_js_base_js[49] = !0;
    $jscomp.defineProperty(this, "description", {configurable:!0, writable:!0, value:g});
  };
  JSCompiler_lcov_data_js_base_js[56] = !0;
  b.prototype.toString = function() {
    JSCompiler_lcov_data_js_base_js[56] = !0;
    JSCompiler_lcov_data_js_base_js[57] = !0;
    return this.$jscomp$symbol$id_;
  };
  JSCompiler_lcov_data_js_base_js[62] = !0;
  JSCompiler_lcov_data_js_base_js[64] = !0;
  var c = 0;
  JSCompiler_lcov_data_js_base_js[72] = !0;
  var d = function(e) {
    JSCompiler_lcov_data_js_base_js[72] = !0;
    JSCompiler_lcov_data_js_base_js[73] = !0;
    if (this instanceof d) {
      throw JSCompiler_lcov_data_js_base_js[74] = !0, new TypeError("Symbol is not a constructor");
    }
    JSCompiler_lcov_data_js_base_js[76] = !0;
    return new b("jscomp_symbol_" + (e || "") + "_" + c++, e);
  };
  JSCompiler_lcov_data_js_base_js[81] = !0;
  return d;
}, "es6", "es3");
$jscomp.initSymbolIterator = function() {
  JSCompiler_lcov_data_js_base_js[89] = !0;
};
$jscomp.polyfill("Symbol.iterator", function(a) {
  JSCompiler_lcov_data_js_base_js[91] = !0;
  JSCompiler_lcov_data_js_base_js[92] = !0;
  if (a) {
    return JSCompiler_lcov_data_js_base_js[92] = !0, a;
  }
  JSCompiler_lcov_data_js_base_js[94] = !0;
  a = Symbol("Symbol.iterator");
  JSCompiler_lcov_data_js_base_js[100] = !0;
  var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" ");
  JSCompiler_lcov_data_js_base_js[109] = !0;
  var c = 0;
  for (JSCompiler_lcov_data_js_base_js[109] = !0; c < b.length; c++) {
    JSCompiler_lcov_data_js_base_js[110] = !0;
    var d = $jscomp.global[b[c]];
    JSCompiler_lcov_data_js_base_js[111] = !0;
    "function" === typeof d && "function" != typeof d.prototype[a] && (JSCompiler_lcov_data_js_base_js[113] = !0, $jscomp.defineProperty(d.prototype, a, {configurable:!0, writable:!0, value:function() {
      JSCompiler_lcov_data_js_base_js[120] = !0;
      JSCompiler_lcov_data_js_base_js[121] = !0;
      return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
    }}));
  }
  JSCompiler_lcov_data_js_base_js[126] = !0;
  return a;
}, "es6", "es3");
$jscomp.initSymbolAsyncIterator = function() {
  JSCompiler_lcov_data_js_base_js[133] = !0;
};
$jscomp.iteratorPrototype = function(a) {
  JSCompiler_lcov_data_js_base_js[152] = !0;
  JSCompiler_lcov_data_js_base_js[153] = !0;
  a = {next:a};
  JSCompiler_lcov_data_js_base_js[158] = !0;
  a[Symbol.iterator] = function() {
    JSCompiler_lcov_data_js_base_js[158] = !0;
    JSCompiler_lcov_data_js_base_js[159] = !0;
    return this;
  };
  JSCompiler_lcov_data_js_base_js[161] = !0;
  return a;
};
$jscomp.owns = function(a, b) {
  JSCompiler_lcov_data_js_base_js[24] = !0;
  JSCompiler_lcov_data_js_base_js[25] = !0;
  return Object.prototype.hasOwnProperty.call(a, b);
};
$jscomp.polyfill("WeakMap", function(a) {
  JSCompiler_lcov_data_js_base_js[29] = !0;
  function b() {
    JSCompiler_lcov_data_js_base_js[34] = !0;
    JSCompiler_lcov_data_js_base_js[35] = !0;
    if (!a || !Object.seal) {
      return JSCompiler_lcov_data_js_base_js[35] = !0, !1;
    }
    try {
      JSCompiler_lcov_data_js_base_js[36] = !0;
      JSCompiler_lcov_data_js_base_js[37] = !0;
      var h = Object.seal({});
      JSCompiler_lcov_data_js_base_js[38] = !0;
      var l = Object.seal({});
      JSCompiler_lcov_data_js_base_js[39] = !0;
      var m = new a([[h, 2], [l, 3]]);
      JSCompiler_lcov_data_js_base_js[41] = !0;
      if (2 != m.get(h) || 3 != m.get(l)) {
        return JSCompiler_lcov_data_js_base_js[41] = !0, !1;
      }
      JSCompiler_lcov_data_js_base_js[42] = !0;
      m.delete(h);
      JSCompiler_lcov_data_js_base_js[43] = !0;
      m.set(l, 4);
      JSCompiler_lcov_data_js_base_js[44] = !0;
      return !m.has(h) && 4 == m.get(l);
    } catch (p) {
      return JSCompiler_lcov_data_js_base_js[45] = !0, JSCompiler_lcov_data_js_base_js[46] = !0, !1;
    }
  }
  function c() {
    JSCompiler_lcov_data_js_base_js[58] = !0;
  }
  function d(h) {
    JSCompiler_lcov_data_js_base_js[65] = !0;
    JSCompiler_lcov_data_js_base_js[66] = !0;
    var l = typeof h;
    JSCompiler_lcov_data_js_base_js[67] = !0;
    return "object" === l && null !== h || "function" === l;
  }
  function e(h) {
    JSCompiler_lcov_data_js_base_js[74] = !0;
    JSCompiler_lcov_data_js_base_js[75] = !0;
    if (!$jscomp.owns(h, f)) {
      JSCompiler_lcov_data_js_base_js[76] = !0;
      var l = new c;
      JSCompiler_lcov_data_js_base_js[82] = !0;
      $jscomp.defineProperty(h, f, {value:l});
    }
  }
  function g(h) {
    JSCompiler_lcov_data_js_base_js[91] = !0;
    JSCompiler_lcov_data_js_base_js[92] = !0;
    if ($jscomp.ISOLATE_POLYFILLS) {
      JSCompiler_lcov_data_js_base_js[96] = !0;
    } else {
      JSCompiler_lcov_data_js_base_js[98] = !0;
      var l = Object[h];
      JSCompiler_lcov_data_js_base_js[99] = !0;
      l && (JSCompiler_lcov_data_js_base_js[100] = !0, Object[h] = function(m) {
        JSCompiler_lcov_data_js_base_js[100] = !0;
        JSCompiler_lcov_data_js_base_js[101] = !0;
        if (m instanceof c) {
          return JSCompiler_lcov_data_js_base_js[102] = !0, m;
        }
        JSCompiler_lcov_data_js_base_js[104] = !0;
        Object.isExtensible(m) && (JSCompiler_lcov_data_js_base_js[105] = !0, e(m));
        JSCompiler_lcov_data_js_base_js[107] = !0;
        return l(m);
      });
    }
  }
  JSCompiler_lcov_data_js_base_js[49] = !0;
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (JSCompiler_lcov_data_js_base_js[50] = !0, a && $jscomp.ES6_CONFORMANCE) {
      return JSCompiler_lcov_data_js_base_js[50] = !0, a;
    }
  } else {
    if (JSCompiler_lcov_data_js_base_js[52] = !0, b()) {
      return JSCompiler_lcov_data_js_base_js[52] = !0, a;
    }
  }
  JSCompiler_lcov_data_js_base_js[55] = !0;
  var f = "$jscomp_hidden_" + Math.random();
  JSCompiler_lcov_data_js_base_js[112] = !0;
  g("freeze");
  JSCompiler_lcov_data_js_base_js[113] = !0;
  g("preventExtensions");
  JSCompiler_lcov_data_js_base_js[114] = !0;
  g("seal");
  JSCompiler_lcov_data_js_base_js[119] = !0;
  var n = 0;
  JSCompiler_lcov_data_js_base_js[138] = !0;
  var k = function(h) {
    JSCompiler_lcov_data_js_base_js[138] = !0;
    JSCompiler_lcov_data_js_base_js[140] = !0;
    this.id_ = (n += Math.random() + 1).toString();
    JSCompiler_lcov_data_js_base_js[142] = !0;
    if (h) {
      JSCompiler_lcov_data_js_base_js[143] = !0;
      h = $jscomp.makeIterator(h);
      JSCompiler_lcov_data_js_base_js[144] = !0;
      var l;
      for (JSCompiler_lcov_data_js_base_js[145] = !0; !(l = h.next()).done;) {
        JSCompiler_lcov_data_js_base_js[146] = !0, l = l.value, JSCompiler_lcov_data_js_base_js[147] = !0, this.set(l[0], l[1]);
      }
    }
  };
  JSCompiler_lcov_data_js_base_js[153] = !0;
  k.prototype.set = function(h, l) {
    JSCompiler_lcov_data_js_base_js[153] = !0;
    JSCompiler_lcov_data_js_base_js[154] = !0;
    if (!d(h)) {
      throw JSCompiler_lcov_data_js_base_js[155] = !0, Error("Invalid WeakMap key");
    }
    JSCompiler_lcov_data_js_base_js[157] = !0;
    e(h);
    JSCompiler_lcov_data_js_base_js[158] = !0;
    if (!$jscomp.owns(h, f)) {
      throw JSCompiler_lcov_data_js_base_js[166] = !0, Error("WeakMap key fail: " + h);
    }
    JSCompiler_lcov_data_js_base_js[168] = !0;
    h[f][this.id_] = l;
    JSCompiler_lcov_data_js_base_js[169] = !0;
    return this;
  };
  JSCompiler_lcov_data_js_base_js[173] = !0;
  k.prototype.get = function(h) {
    JSCompiler_lcov_data_js_base_js[173] = !0;
    JSCompiler_lcov_data_js_base_js[174] = !0;
    return d(h) && $jscomp.owns(h, f) ? h[f][this.id_] : void 0;
  };
  JSCompiler_lcov_data_js_base_js[179] = !0;
  k.prototype.has = function(h) {
    JSCompiler_lcov_data_js_base_js[179] = !0;
    JSCompiler_lcov_data_js_base_js[180] = !0;
    return d(h) && $jscomp.owns(h, f) && $jscomp.owns(h[f], this.id_);
  };
  JSCompiler_lcov_data_js_base_js[185] = !0;
  k.prototype.delete = function(h) {
    JSCompiler_lcov_data_js_base_js[185] = !0;
    JSCompiler_lcov_data_js_base_js[186] = !0;
    if (!d(h) || !$jscomp.owns(h, f) || !$jscomp.owns(h[f], this.id_)) {
      return JSCompiler_lcov_data_js_base_js[188] = !0, !1;
    }
    JSCompiler_lcov_data_js_base_js[190] = !0;
    return delete h[f][this.id_];
  };
  JSCompiler_lcov_data_js_base_js[193] = !0;
  return k;
}, "es6", "es3");
$jscomp.MapEntry = function() {
  JSCompiler_lcov_data_js_base_js[31] = !0;
  JSCompiler_lcov_data_js_base_js[33] = !0;
  JSCompiler_lcov_data_js_base_js[35] = !0;
  JSCompiler_lcov_data_js_base_js[37] = !0;
  JSCompiler_lcov_data_js_base_js[39] = !0;
  JSCompiler_lcov_data_js_base_js[41] = !0;
};
$jscomp.polyfill("Map", function(a) {
  JSCompiler_lcov_data_js_base_js[51] = !0;
  function b() {
    JSCompiler_lcov_data_js_base_js[58] = !0;
    JSCompiler_lcov_data_js_base_js[59] = !0;
    if ($jscomp.ASSUME_NO_NATIVE_MAP || !a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) {
      return JSCompiler_lcov_data_js_base_js[64] = !0, !1;
    }
    try {
      JSCompiler_lcov_data_js_base_js[67] = !0;
      JSCompiler_lcov_data_js_base_js[68] = !0;
      JSCompiler_lcov_data_js_base_js[69] = !0;
      var k = Object.seal({x:4});
      JSCompiler_lcov_data_js_base_js[70] = !0;
      var h = new a($jscomp.makeIterator([[k, "s"]]));
      JSCompiler_lcov_data_js_base_js[71] = !0;
      if ("s" != h.get(k) || 1 != h.size || h.get({x:4}) || h.set({x:4}, "t") != h || 2 != h.size) {
        return JSCompiler_lcov_data_js_base_js[73] = !0, !1;
      }
      JSCompiler_lcov_data_js_base_js[75] = !0;
      var l = h.entries();
      JSCompiler_lcov_data_js_base_js[76] = !0;
      var m = l.next();
      JSCompiler_lcov_data_js_base_js[77] = !0;
      if (m.done || m.value[0] != k || "s" != m.value[1]) {
        return JSCompiler_lcov_data_js_base_js[78] = !0, !1;
      }
      JSCompiler_lcov_data_js_base_js[80] = !0;
      m = l.next();
      JSCompiler_lcov_data_js_base_js[81] = !0;
      return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? (JSCompiler_lcov_data_js_base_js[83] = !0, !1) : JSCompiler_lcov_data_js_base_js[85] = !0;
    } catch (p) {
      return JSCompiler_lcov_data_js_base_js[86] = !0, JSCompiler_lcov_data_js_base_js[87] = !0, !1;
    }
  }
  JSCompiler_lcov_data_js_base_js[91] = !0;
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (JSCompiler_lcov_data_js_base_js[92] = !0, a && $jscomp.ES6_CONFORMANCE) {
      return JSCompiler_lcov_data_js_base_js[92] = !0, a;
    }
  } else {
    if (JSCompiler_lcov_data_js_base_js[94] = !0, b()) {
      return JSCompiler_lcov_data_js_base_js[94] = !0, a;
    }
  }
  JSCompiler_lcov_data_js_base_js[98] = !0;
  var c = new WeakMap;
  JSCompiler_lcov_data_js_base_js[112] = !0;
  var d = function(k) {
    JSCompiler_lcov_data_js_base_js[112] = !0;
    JSCompiler_lcov_data_js_base_js[114] = !0;
    this.data_ = {};
    JSCompiler_lcov_data_js_base_js[117] = !0;
    this.head_ = f();
    JSCompiler_lcov_data_js_base_js[123] = !0;
    this.size = 0;
    JSCompiler_lcov_data_js_base_js[125] = !0;
    if (k) {
      JSCompiler_lcov_data_js_base_js[126] = !0;
      k = $jscomp.makeIterator(k);
      JSCompiler_lcov_data_js_base_js[127] = !0;
      var h;
      for (JSCompiler_lcov_data_js_base_js[128] = !0; !(h = k.next()).done;) {
        JSCompiler_lcov_data_js_base_js[129] = !0, h = h.value, JSCompiler_lcov_data_js_base_js[131] = !0, this.set(h[0], h[1]);
      }
    }
  };
  JSCompiler_lcov_data_js_base_js[138] = !0;
  d.prototype.set = function(k, h) {
    JSCompiler_lcov_data_js_base_js[138] = !0;
    JSCompiler_lcov_data_js_base_js[140] = !0;
    k = 0 === k ? 0 : k;
    JSCompiler_lcov_data_js_base_js[141] = !0;
    var l = e(this, k);
    JSCompiler_lcov_data_js_base_js[142] = !0;
    l.list || (JSCompiler_lcov_data_js_base_js[143] = !0, l.list = this.data_[l.id] = []);
    JSCompiler_lcov_data_js_base_js[145] = !0;
    l.entry ? (JSCompiler_lcov_data_js_base_js[158] = !0, l.entry.value = h) : (JSCompiler_lcov_data_js_base_js[146] = !0, l.entry = {next:this.head_, previous:this.head_.previous, head:this.head_, key:k, value:h, }, JSCompiler_lcov_data_js_base_js[153] = !0, l.list.push(l.entry), JSCompiler_lcov_data_js_base_js[154] = !0, this.head_.previous.next = l.entry, JSCompiler_lcov_data_js_base_js[155] = !0, this.head_.previous = l.entry, JSCompiler_lcov_data_js_base_js[156] = !0, this.size++);
    JSCompiler_lcov_data_js_base_js[160] = !0;
    return this;
  };
  JSCompiler_lcov_data_js_base_js[165] = !0;
  d.prototype.delete = function(k) {
    JSCompiler_lcov_data_js_base_js[165] = !0;
    JSCompiler_lcov_data_js_base_js[166] = !0;
    k = e(this, k);
    JSCompiler_lcov_data_js_base_js[167] = !0;
    if (k.entry && k.list) {
      return JSCompiler_lcov_data_js_base_js[168] = !0, k.list.splice(k.index, 1), JSCompiler_lcov_data_js_base_js[169] = !0, k.list.length || (JSCompiler_lcov_data_js_base_js[169] = !0, delete this.data_[k.id]), JSCompiler_lcov_data_js_base_js[170] = !0, k.entry.previous.next = k.entry.next, JSCompiler_lcov_data_js_base_js[171] = !0, k.entry.next.previous = k.entry.previous, JSCompiler_lcov_data_js_base_js[172] = !0, k.entry.head = null, JSCompiler_lcov_data_js_base_js[173] = !0, this.size--, JSCompiler_lcov_data_js_base_js[174] = 
      !0;
    }
    JSCompiler_lcov_data_js_base_js[176] = !0;
    return !1;
  };
  JSCompiler_lcov_data_js_base_js[181] = !0;
  d.prototype.clear = function() {
    JSCompiler_lcov_data_js_base_js[181] = !0;
    JSCompiler_lcov_data_js_base_js[182] = !0;
    this.data_ = {};
    JSCompiler_lcov_data_js_base_js[183] = !0;
    this.head_ = this.head_.previous = f();
    JSCompiler_lcov_data_js_base_js[184] = !0;
    this.size = 0;
  };
  JSCompiler_lcov_data_js_base_js[189] = !0;
  d.prototype.has = function(k) {
    JSCompiler_lcov_data_js_base_js[189] = !0;
    JSCompiler_lcov_data_js_base_js[190] = !0;
    return !!e(this, k).entry;
  };
  JSCompiler_lcov_data_js_base_js[195] = !0;
  d.prototype.get = function(k) {
    JSCompiler_lcov_data_js_base_js[195] = !0;
    JSCompiler_lcov_data_js_base_js[196] = !0;
    k = e(this, k).entry;
    JSCompiler_lcov_data_js_base_js[198] = !0;
    return k && k.value;
  };
  JSCompiler_lcov_data_js_base_js[204] = !0;
  d.prototype.entries = function() {
    JSCompiler_lcov_data_js_base_js[204] = !0;
    JSCompiler_lcov_data_js_base_js[205] = !0;
    return g(this, function(k) {
      JSCompiler_lcov_data_js_base_js[205] = !0;
      JSCompiler_lcov_data_js_base_js[207] = !0;
      return [k.key, k.value];
    });
  };
  JSCompiler_lcov_data_js_base_js[213] = !0;
  d.prototype.keys = function() {
    JSCompiler_lcov_data_js_base_js[213] = !0;
    JSCompiler_lcov_data_js_base_js[214] = !0;
    return g(this, function(k) {
      JSCompiler_lcov_data_js_base_js[214] = !0;
      JSCompiler_lcov_data_js_base_js[216] = !0;
      return k.key;
    });
  };
  JSCompiler_lcov_data_js_base_js[222] = !0;
  d.prototype.values = function() {
    JSCompiler_lcov_data_js_base_js[222] = !0;
    JSCompiler_lcov_data_js_base_js[223] = !0;
    return g(this, function(k) {
      JSCompiler_lcov_data_js_base_js[223] = !0;
      JSCompiler_lcov_data_js_base_js[225] = !0;
      return k.value;
    });
  };
  JSCompiler_lcov_data_js_base_js[231] = !0;
  d.prototype.forEach = function(k, h) {
    JSCompiler_lcov_data_js_base_js[231] = !0;
    JSCompiler_lcov_data_js_base_js[232] = !0;
    var l = this.entries();
    JSCompiler_lcov_data_js_base_js[233] = !0;
    var m;
    for (JSCompiler_lcov_data_js_base_js[234] = !0; !(m = l.next()).done;) {
      JSCompiler_lcov_data_js_base_js[235] = !0, m = m.value, JSCompiler_lcov_data_js_base_js[236] = !0, k.call(h, m[1], m[0], this);
    }
  };
  JSCompiler_lcov_data_js_base_js[245] = !0;
  d.prototype[Symbol.iterator] = d.prototype.entries;
  JSCompiler_lcov_data_js_base_js[259] = !0;
  var e = function(k, h) {
    JSCompiler_lcov_data_js_base_js[259] = !0;
    JSCompiler_lcov_data_js_base_js[260] = !0;
    JSCompiler_lcov_data_js_base_js[324] = !0;
    JSCompiler_lcov_data_js_base_js[325] = !0;
    var l = h && typeof h;
    JSCompiler_lcov_data_js_base_js[326] = !0;
    "object" == l || "function" == l ? (JSCompiler_lcov_data_js_base_js[327] = !0, JSCompiler_lcov_data_js_base_js[328] = !0, c.has(h) ? (JSCompiler_lcov_data_js_base_js[333] = !0, l = c.get(h)) : (JSCompiler_lcov_data_js_base_js[329] = !0, l = "" + ++n, JSCompiler_lcov_data_js_base_js[330] = !0, c.set(h, l), JSCompiler_lcov_data_js_base_js[331] = !0)) : (JSCompiler_lcov_data_js_base_js[336] = !0, l = "p_" + h);
    JSCompiler_lcov_data_js_base_js[261] = !0;
    var m = k.data_[l];
    JSCompiler_lcov_data_js_base_js[262] = !0;
    if (m && $jscomp.owns(k.data_, l)) {
      for (JSCompiler_lcov_data_js_base_js[263] = !0, k = 0, JSCompiler_lcov_data_js_base_js[263] = !0; k < m.length; k++) {
        JSCompiler_lcov_data_js_base_js[264] = !0;
        var p = m[k];
        JSCompiler_lcov_data_js_base_js[265] = !0;
        if (h !== h && p.key !== p.key || h === p.key) {
          return JSCompiler_lcov_data_js_base_js[266] = !0, {id:l, list:m, index:k, entry:p};
        }
      }
    }
    JSCompiler_lcov_data_js_base_js[270] = !0;
    return {id:l, list:m, index:-1, entry:void 0};
  };
  JSCompiler_lcov_data_js_base_js[282] = !0;
  var g = function(k, h) {
    JSCompiler_lcov_data_js_base_js[282] = !0;
    JSCompiler_lcov_data_js_base_js[283] = !0;
    var l = k.head_;
    JSCompiler_lcov_data_js_base_js[284] = !0;
    return $jscomp.iteratorPrototype(function() {
      JSCompiler_lcov_data_js_base_js[284] = !0;
      JSCompiler_lcov_data_js_base_js[285] = !0;
      if (l) {
        for (JSCompiler_lcov_data_js_base_js[286] = !0; l.head != k.head_;) {
          JSCompiler_lcov_data_js_base_js[287] = !0, l = l.previous;
        }
        for (JSCompiler_lcov_data_js_base_js[289] = !0; l.next != l.head;) {
          return JSCompiler_lcov_data_js_base_js[290] = !0, l = l.next, JSCompiler_lcov_data_js_base_js[291] = !0, {done:!1, value:h(l)};
        }
        JSCompiler_lcov_data_js_base_js[293] = !0;
        l = null;
      }
      JSCompiler_lcov_data_js_base_js[295] = !0;
      return {done:!0, value:void 0};
    });
  };
  JSCompiler_lcov_data_js_base_js[306] = !0;
  var f = function() {
    JSCompiler_lcov_data_js_base_js[306] = !0;
    JSCompiler_lcov_data_js_base_js[307] = !0;
    var k = {};
    JSCompiler_lcov_data_js_base_js[308] = !0;
    k.previous = k.next = k.head = k;
    JSCompiler_lcov_data_js_base_js[309] = !0;
    return k;
  };
  JSCompiler_lcov_data_js_base_js[317] = !0;
  var n = 0;
  JSCompiler_lcov_data_js_base_js[324] = !0;
  JSCompiler_lcov_data_js_base_js[340] = !0;
  return d;
}, "es6", "es3");
$jscomp.polyfill("Set", function(a) {
  JSCompiler_lcov_data_js_base_js[28] = !0;
  function b() {
    JSCompiler_lcov_data_js_base_js[35] = !0;
    JSCompiler_lcov_data_js_base_js[36] = !0;
    if ($jscomp.ASSUME_NO_NATIVE_SET || !a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) {
      return JSCompiler_lcov_data_js_base_js[41] = !0, !1;
    }
    try {
      JSCompiler_lcov_data_js_base_js[44] = !0;
      JSCompiler_lcov_data_js_base_js[45] = !0;
      JSCompiler_lcov_data_js_base_js[46] = !0;
      var d = Object.seal({x:4});
      JSCompiler_lcov_data_js_base_js[47] = !0;
      var e = new a($jscomp.makeIterator([d]));
      JSCompiler_lcov_data_js_base_js[48] = !0;
      if (!e.has(d) || 1 != e.size || e.add(d) != e || 1 != e.size || e.add({x:4}) != e || 2 != e.size) {
        return JSCompiler_lcov_data_js_base_js[50] = !0, !1;
      }
      JSCompiler_lcov_data_js_base_js[52] = !0;
      var g = e.entries();
      JSCompiler_lcov_data_js_base_js[53] = !0;
      var f = g.next();
      JSCompiler_lcov_data_js_base_js[54] = !0;
      if (f.done || f.value[0] != d || f.value[1] != d) {
        return JSCompiler_lcov_data_js_base_js[55] = !0, !1;
      }
      JSCompiler_lcov_data_js_base_js[57] = !0;
      f = g.next();
      JSCompiler_lcov_data_js_base_js[58] = !0;
      if (f.done || f.value[0] == d || 4 != f.value[0].x || f.value[1] != f.value[0]) {
        return JSCompiler_lcov_data_js_base_js[60] = !0, !1;
      }
      JSCompiler_lcov_data_js_base_js[62] = !0;
      return g.next().done;
    } catch (n) {
      return JSCompiler_lcov_data_js_base_js[63] = !0, JSCompiler_lcov_data_js_base_js[64] = !0, !1;
    }
  }
  JSCompiler_lcov_data_js_base_js[68] = !0;
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (JSCompiler_lcov_data_js_base_js[69] = !0, a && $jscomp.ES6_CONFORMANCE) {
      return JSCompiler_lcov_data_js_base_js[69] = !0, a;
    }
  } else {
    if (JSCompiler_lcov_data_js_base_js[71] = !0, b()) {
      return JSCompiler_lcov_data_js_base_js[71] = !0, a;
    }
  }
  JSCompiler_lcov_data_js_base_js[85] = !0;
  var c = function(d) {
    JSCompiler_lcov_data_js_base_js[85] = !0;
    JSCompiler_lcov_data_js_base_js[87] = !0;
    this.map_ = new Map;
    JSCompiler_lcov_data_js_base_js[88] = !0;
    if (d) {
      JSCompiler_lcov_data_js_base_js[89] = !0;
      d = $jscomp.makeIterator(d);
      JSCompiler_lcov_data_js_base_js[90] = !0;
      var e;
      for (JSCompiler_lcov_data_js_base_js[91] = !0; !(e = d.next()).done;) {
        JSCompiler_lcov_data_js_base_js[92] = !0, e = e.value, JSCompiler_lcov_data_js_base_js[93] = !0, this.add(e);
      }
    }
    JSCompiler_lcov_data_js_base_js[99] = !0;
    this.size = this.map_.size;
  };
  JSCompiler_lcov_data_js_base_js[104] = !0;
  c.prototype.add = function(d) {
    JSCompiler_lcov_data_js_base_js[104] = !0;
    JSCompiler_lcov_data_js_base_js[106] = !0;
    d = 0 === d ? 0 : d;
    JSCompiler_lcov_data_js_base_js[107] = !0;
    this.map_.set(d, d);
    JSCompiler_lcov_data_js_base_js[108] = !0;
    this.size = this.map_.size;
    JSCompiler_lcov_data_js_base_js[109] = !0;
    return this;
  };
  JSCompiler_lcov_data_js_base_js[114] = !0;
  c.prototype.delete = function(d) {
    JSCompiler_lcov_data_js_base_js[114] = !0;
    JSCompiler_lcov_data_js_base_js[115] = !0;
    d = this.map_.delete(d);
    JSCompiler_lcov_data_js_base_js[116] = !0;
    this.size = this.map_.size;
    JSCompiler_lcov_data_js_base_js[117] = !0;
    return d;
  };
  JSCompiler_lcov_data_js_base_js[122] = !0;
  c.prototype.clear = function() {
    JSCompiler_lcov_data_js_base_js[122] = !0;
    JSCompiler_lcov_data_js_base_js[123] = !0;
    this.map_.clear();
    JSCompiler_lcov_data_js_base_js[124] = !0;
    this.size = 0;
  };
  JSCompiler_lcov_data_js_base_js[129] = !0;
  c.prototype.has = function(d) {
    JSCompiler_lcov_data_js_base_js[129] = !0;
    JSCompiler_lcov_data_js_base_js[130] = !0;
    return this.map_.has(d);
  };
  JSCompiler_lcov_data_js_base_js[135] = !0;
  c.prototype.entries = function() {
    JSCompiler_lcov_data_js_base_js[135] = !0;
    JSCompiler_lcov_data_js_base_js[136] = !0;
    return this.map_.entries();
  };
  JSCompiler_lcov_data_js_base_js[141] = !0;
  c.prototype.values = function() {
    JSCompiler_lcov_data_js_base_js[141] = !0;
    JSCompiler_lcov_data_js_base_js[142] = !0;
    return this.map_.values();
  };
  JSCompiler_lcov_data_js_base_js[147] = !0;
  c.prototype.keys = c.prototype.values;
  JSCompiler_lcov_data_js_base_js[150] = !0;
  c.prototype[Symbol.iterator] = c.prototype.values;
  JSCompiler_lcov_data_js_base_js[155] = !0;
  c.prototype.forEach = function(d, e) {
    JSCompiler_lcov_data_js_base_js[155] = !0;
    JSCompiler_lcov_data_js_base_js[156] = !0;
    var g = this;
    JSCompiler_lcov_data_js_base_js[157] = !0;
    this.map_.forEach(function(f) {
      JSCompiler_lcov_data_js_base_js[157] = !0;
      JSCompiler_lcov_data_js_base_js[158] = !0;
      return d.call(e, f, f, g);
    });
  };
  JSCompiler_lcov_data_js_base_js[163] = !0;
  return c;
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.fill", function(a) {
  JSCompiler_lcov_data_js_base_js[18] = !0;
  JSCompiler_lcov_data_js_base_js[19] = !0;
  if (a) {
    return JSCompiler_lcov_data_js_base_js[19] = !0, a;
  }
  JSCompiler_lcov_data_js_base_js[32] = !0;
  JSCompiler_lcov_data_js_base_js[46] = !0;
  return function(b, c, d) {
    JSCompiler_lcov_data_js_base_js[32] = !0;
    JSCompiler_lcov_data_js_base_js[33] = !0;
    var e = this.length || 0;
    JSCompiler_lcov_data_js_base_js[34] = !0;
    0 > c && (JSCompiler_lcov_data_js_base_js[35] = !0, c = Math.max(0, e + c));
    JSCompiler_lcov_data_js_base_js[37] = !0;
    if (null == d || d > e) {
      JSCompiler_lcov_data_js_base_js[37] = !0, d = e;
    }
    JSCompiler_lcov_data_js_base_js[38] = !0;
    d = Number(d);
    JSCompiler_lcov_data_js_base_js[39] = !0;
    0 > d && (JSCompiler_lcov_data_js_base_js[39] = !0, d = Math.max(0, e + d));
    JSCompiler_lcov_data_js_base_js[40] = !0;
    c = Number(c || 0);
    for (JSCompiler_lcov_data_js_base_js[40] = !0; c < d; c++) {
      JSCompiler_lcov_data_js_base_js[41] = !0, this[c] = b;
    }
    JSCompiler_lcov_data_js_base_js[43] = !0;
    return this;
  };
}, "es6", "es3");
var COMPILED = !0, goog = goog || {};
goog.global = this || self;
goog.exportPath_ = function(a, b, c) {
  JSCompiler_lcov_data_js_base_js[109] = !0;
  JSCompiler_lcov_data_js_base_js[110] = !0;
  a = a.split(".");
  JSCompiler_lcov_data_js_base_js[111] = !0;
  c = c || goog.global;
  JSCompiler_lcov_data_js_base_js[116] = !0;
  a[0] in c || "undefined" == typeof c.execScript || (JSCompiler_lcov_data_js_base_js[117] = !0, c.execScript("var " + a[0]));
  JSCompiler_lcov_data_js_base_js[120] = !0;
  var d;
  for (JSCompiler_lcov_data_js_base_js[120] = !0; a.length && (d = a.shift());) {
    JSCompiler_lcov_data_js_base_js[121] = !0, a.length || void 0 === b ? (JSCompiler_lcov_data_js_base_js[124] = !0, c[d] && c[d] !== Object.prototype[d] ? (JSCompiler_lcov_data_js_base_js[125] = !0, c = c[d]) : (JSCompiler_lcov_data_js_base_js[127] = !0, c = c[d] = {})) : (JSCompiler_lcov_data_js_base_js[123] = !0, c[d] = b);
  }
};
goog.define = function(a, b) {
  JSCompiler_lcov_data_js_base_js[147] = !0;
  JSCompiler_lcov_data_js_base_js[148] = !0;
  JSCompiler_lcov_data_js_base_js[149] = !0;
  if (!COMPILED) {
    JSCompiler_lcov_data_js_base_js[150] = !0;
    var c = goog.global.CLOSURE_UNCOMPILED_DEFINES;
    JSCompiler_lcov_data_js_base_js[151] = !0;
    var d = goog.global.CLOSURE_DEFINES;
    JSCompiler_lcov_data_js_base_js[152] = !0;
    c && void 0 === c.nodeType && Object.prototype.hasOwnProperty.call(c, a) ? (JSCompiler_lcov_data_js_base_js[156] = !0, b = c[a]) : (JSCompiler_lcov_data_js_base_js[157] = !0, d && void 0 === d.nodeType && Object.prototype.hasOwnProperty.call(d, a) && (JSCompiler_lcov_data_js_base_js[162] = !0, b = d[a]));
  }
  JSCompiler_lcov_data_js_base_js[165] = !0;
  return b;
};
goog.FEATURESET_YEAR = 2012;
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.TRUSTED_SITE = !0;
goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1;
goog.provide = function(a) {
  JSCompiler_lcov_data_js_base_js[284] = !0;
  JSCompiler_lcov_data_js_base_js[285] = !0;
  if (goog.isInModuleLoader_()) {
    throw JSCompiler_lcov_data_js_base_js[286] = !0, Error("goog.provide cannot be used within a module.");
  }
  JSCompiler_lcov_data_js_base_js[288] = !0;
  if (!COMPILED && (JSCompiler_lcov_data_js_base_js[291] = !0, goog.isProvided_(a))) {
    throw JSCompiler_lcov_data_js_base_js[292] = !0, Error('Namespace "' + a + '" already declared.');
  }
  JSCompiler_lcov_data_js_base_js[296] = !0;
  goog.constructNamespace_(a);
};
goog.constructNamespace_ = function(a, b) {
  JSCompiler_lcov_data_js_base_js[306] = !0;
  JSCompiler_lcov_data_js_base_js[307] = !0;
  if (!COMPILED) {
    JSCompiler_lcov_data_js_base_js[308] = !0;
    delete goog.implicitNamespaces_[a];
    JSCompiler_lcov_data_js_base_js[310] = !0;
    var c = a;
    for (JSCompiler_lcov_data_js_base_js[311] = !0; c = c.substring(0, c.lastIndexOf("."));) {
      JSCompiler_lcov_data_js_base_js[312] = !0;
      if (goog.getObjectByName(c)) {
        JSCompiler_lcov_data_js_base_js[313] = !0;
        break;
      }
      JSCompiler_lcov_data_js_base_js[315] = !0;
      goog.implicitNamespaces_[c] = !0;
    }
  }
  JSCompiler_lcov_data_js_base_js[319] = !0;
  goog.exportPath_(a, b);
};
goog.getScriptNonce = function(a) {
  JSCompiler_lcov_data_js_base_js[329] = !0;
  JSCompiler_lcov_data_js_base_js[330] = !0;
  if (a && a != goog.global) {
    return JSCompiler_lcov_data_js_base_js[331] = !0, goog.getScriptNonce_(a.document);
  }
  JSCompiler_lcov_data_js_base_js[333] = !0;
  null === goog.cspNonce_ && (JSCompiler_lcov_data_js_base_js[334] = !0, goog.cspNonce_ = goog.getScriptNonce_(goog.global.document));
  JSCompiler_lcov_data_js_base_js[336] = !0;
  return goog.cspNonce_;
};
goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
goog.cspNonce_ = null;
goog.getScriptNonce_ = function(a) {
  JSCompiler_lcov_data_js_base_js[360] = !0;
  JSCompiler_lcov_data_js_base_js[361] = !0;
  a = a.querySelector && a.querySelector("script[nonce]");
  JSCompiler_lcov_data_js_base_js[362] = !0;
  if (a && (JSCompiler_lcov_data_js_base_js[367] = !0, a = a.nonce || a.getAttribute("nonce"), JSCompiler_lcov_data_js_base_js[368] = !0, a && goog.NONCE_PATTERN_.test(a))) {
    return JSCompiler_lcov_data_js_base_js[369] = !0, a;
  }
  JSCompiler_lcov_data_js_base_js[372] = !0;
  return "";
};
goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module = function(a) {
  JSCompiler_lcov_data_js_base_js[418] = !0;
  JSCompiler_lcov_data_js_base_js[419] = !0;
  if ("string" !== typeof a || !a || -1 == a.search(goog.VALID_MODULE_RE_)) {
    throw JSCompiler_lcov_data_js_base_js[421] = !0, Error("Invalid module identifier");
  }
  JSCompiler_lcov_data_js_base_js[423] = !0;
  if (!goog.isInGoogModuleLoader_()) {
    throw JSCompiler_lcov_data_js_base_js[424] = !0, Error("Module " + a + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
  }
  JSCompiler_lcov_data_js_base_js[432] = !0;
  if (goog.moduleLoaderState_.moduleName) {
    throw JSCompiler_lcov_data_js_base_js[433] = !0, Error("goog.module may only be called once per module.");
  }
  JSCompiler_lcov_data_js_base_js[437] = !0;
  goog.moduleLoaderState_.moduleName = a;
  JSCompiler_lcov_data_js_base_js[438] = !0;
  if (!COMPILED) {
    JSCompiler_lcov_data_js_base_js[441] = !0;
    if (goog.isProvided_(a)) {
      throw JSCompiler_lcov_data_js_base_js[442] = !0, Error('Namespace "' + a + '" already declared.');
    }
    JSCompiler_lcov_data_js_base_js[444] = !0;
    delete goog.implicitNamespaces_[a];
  }
};
goog.module.get = function(a) {
  JSCompiler_lcov_data_js_base_js[459] = !0;
  JSCompiler_lcov_data_js_base_js[460] = !0;
  return goog.module.getInternal_(a);
};
goog.module.getInternal_ = function(a) {
  JSCompiler_lcov_data_js_base_js[469] = !0;
  JSCompiler_lcov_data_js_base_js[470] = !0;
  if (!COMPILED) {
    JSCompiler_lcov_data_js_base_js[471] = !0;
    if (a in goog.loadedModules_) {
      return JSCompiler_lcov_data_js_base_js[472] = !0, goog.loadedModules_[a].exports;
    }
    JSCompiler_lcov_data_js_base_js[473] = !0;
    if (!goog.implicitNamespaces_[a]) {
      return JSCompiler_lcov_data_js_base_js[474] = !0, a = goog.getObjectByName(a), JSCompiler_lcov_data_js_base_js[475] = !0, null != a ? a : null;
    }
  }
  JSCompiler_lcov_data_js_base_js[478] = !0;
  return null;
};
goog.ModuleType = {ES6:"es6", GOOG:"goog"};
goog.moduleLoaderState_ = null;
goog.isInModuleLoader_ = function() {
  JSCompiler_lcov_data_js_base_js[507] = !0;
  JSCompiler_lcov_data_js_base_js[508] = !0;
  return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
};
goog.isInGoogModuleLoader_ = function() {
  JSCompiler_lcov_data_js_base_js[516] = !0;
  JSCompiler_lcov_data_js_base_js[517] = !0;
  return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG;
};
goog.isInEs6ModuleLoader_ = function() {
  JSCompiler_lcov_data_js_base_js[526] = !0;
  JSCompiler_lcov_data_js_base_js[527] = !0;
  var a = !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6;
  JSCompiler_lcov_data_js_base_js[530] = !0;
  if (a) {
    return JSCompiler_lcov_data_js_base_js[531] = !0;
  }
  JSCompiler_lcov_data_js_base_js[534] = !0;
  a = goog.global.$jscomp;
  JSCompiler_lcov_data_js_base_js[536] = !0;
  if (a) {
    JSCompiler_lcov_data_js_base_js[542] = !0;
    if ("function" != typeof a.getCurrentModulePath) {
      return JSCompiler_lcov_data_js_base_js[543] = !0, !1;
    }
    JSCompiler_lcov_data_js_base_js[547] = !0;
    return !!a.getCurrentModulePath();
  }
  JSCompiler_lcov_data_js_base_js[550] = !0;
  return !1;
};
goog.module.declareLegacyNamespace = function() {
  JSCompiler_lcov_data_js_base_js[560] = !0;
  JSCompiler_lcov_data_js_base_js[561] = !0;
  if (!COMPILED && !goog.isInGoogModuleLoader_()) {
    throw JSCompiler_lcov_data_js_base_js[562] = !0, Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
  }
  JSCompiler_lcov_data_js_base_js[566] = !0;
  if (!COMPILED && !goog.moduleLoaderState_.moduleName) {
    throw JSCompiler_lcov_data_js_base_js[567] = !0, Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
  }
  JSCompiler_lcov_data_js_base_js[571] = !0;
  goog.moduleLoaderState_.declareLegacyNamespace = !0;
};
goog.declareModuleId = function(a) {
  JSCompiler_lcov_data_js_base_js[586] = !0;
  JSCompiler_lcov_data_js_base_js[587] = !0;
  if (!COMPILED) {
    JSCompiler_lcov_data_js_base_js[588] = !0;
    if (!goog.isInEs6ModuleLoader_()) {
      throw JSCompiler_lcov_data_js_base_js[589] = !0, Error("goog.declareModuleId may only be called from within an ES6 module");
    }
    JSCompiler_lcov_data_js_base_js[593] = !0;
    if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName) {
      throw JSCompiler_lcov_data_js_base_js[594] = !0, Error("goog.declareModuleId may only be called once per module.");
    }
    JSCompiler_lcov_data_js_base_js[597] = !0;
    if (a in goog.loadedModules_) {
      throw JSCompiler_lcov_data_js_base_js[598] = !0, Error('Module with namespace "' + a + '" already exists.');
    }
  }
  JSCompiler_lcov_data_js_base_js[602] = !0;
  if (goog.moduleLoaderState_) {
    JSCompiler_lcov_data_js_base_js[604] = !0, goog.moduleLoaderState_.moduleName = a;
  } else {
    JSCompiler_lcov_data_js_base_js[607] = !0;
    var b = goog.global.$jscomp;
    JSCompiler_lcov_data_js_base_js[608] = !0;
    if (!b || "function" != typeof b.getCurrentModulePath) {
      throw JSCompiler_lcov_data_js_base_js[609] = !0, Error('Module with namespace "' + a + '" has been loaded incorrectly.');
    }
    JSCompiler_lcov_data_js_base_js[613] = !0;
    b = b.require(b.getCurrentModulePath());
    JSCompiler_lcov_data_js_base_js[614] = !0;
    goog.loadedModules_[a] = {exports:b, type:goog.ModuleType.ES6, moduleId:a};
  }
};
goog.setTestOnly = function(a) {
  JSCompiler_lcov_data_js_base_js[634] = !0;
  JSCompiler_lcov_data_js_base_js[635] = !0;
  if (goog.DISALLOW_TEST_ONLY_CODE) {
    throw JSCompiler_lcov_data_js_base_js[636] = !0, a = a || "", JSCompiler_lcov_data_js_base_js[637] = !0, Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
goog.forwardDeclare = function(a) {
  JSCompiler_lcov_data_js_base_js[664] = !0;
};
COMPILED || (JSCompiler_lcov_data_js_base_js[685] = !0, goog.isProvided_ = function(a) {
  JSCompiler_lcov_data_js_base_js[685] = !0;
  JSCompiler_lcov_data_js_base_js[686] = !0;
  return a in goog.loadedModules_ || !goog.implicitNamespaces_[a] && null != goog.getObjectByName(a);
}, JSCompiler_lcov_data_js_base_js[698] = !0, goog.implicitNamespaces_ = {"goog.module":!0});
goog.getObjectByName = function(a, b) {
  JSCompiler_lcov_data_js_base_js[718] = !0;
  JSCompiler_lcov_data_js_base_js[719] = !0;
  a = a.split(".");
  JSCompiler_lcov_data_js_base_js[720] = !0;
  b = b || goog.global;
  JSCompiler_lcov_data_js_base_js[721] = !0;
  var c = 0;
  for (JSCompiler_lcov_data_js_base_js[721] = !0; c < a.length; c++) {
    if (JSCompiler_lcov_data_js_base_js[722] = !0, b = b[a[c]], JSCompiler_lcov_data_js_base_js[723] = !0, null == b) {
      return JSCompiler_lcov_data_js_base_js[724] = !0, null;
    }
  }
  JSCompiler_lcov_data_js_base_js[727] = !0;
  return b;
};
goog.addDependency = function(a, b, c, d) {
  JSCompiler_lcov_data_js_base_js[743] = !0;
  JSCompiler_lcov_data_js_base_js[744] = !0;
  !COMPILED && goog.DEPENDENCIES_ENABLED && (JSCompiler_lcov_data_js_base_js[745] = !0, goog.debugLoader_.addDependency(a, b, c, d));
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.logToConsole_ = function(a) {
  JSCompiler_lcov_data_js_base_js[786] = !0;
  JSCompiler_lcov_data_js_base_js[787] = !0;
  goog.global.console && (JSCompiler_lcov_data_js_base_js[788] = !0, goog.global.console.error(a));
};
goog.require = function(a) {
  JSCompiler_lcov_data_js_base_js[806] = !0;
  JSCompiler_lcov_data_js_base_js[807] = !0;
  if (!COMPILED) {
    JSCompiler_lcov_data_js_base_js[809] = !0;
    goog.ENABLE_DEBUG_LOADER && (JSCompiler_lcov_data_js_base_js[810] = !0, goog.debugLoader_.requested(a));
    JSCompiler_lcov_data_js_base_js[814] = !0;
    if (goog.isProvided_(a)) {
      if (JSCompiler_lcov_data_js_base_js[815] = !0, goog.isInModuleLoader_()) {
        return JSCompiler_lcov_data_js_base_js[816] = !0, goog.module.getInternal_(a);
      }
    } else {
      if (JSCompiler_lcov_data_js_base_js[818] = !0, goog.ENABLE_DEBUG_LOADER) {
        JSCompiler_lcov_data_js_base_js[819] = !0;
        var b = goog.moduleLoaderState_;
        JSCompiler_lcov_data_js_base_js[820] = !0;
        goog.moduleLoaderState_ = null;
        try {
          JSCompiler_lcov_data_js_base_js[821] = !0, JSCompiler_lcov_data_js_base_js[822] = !0, goog.debugLoader_.load_(a);
        } finally {
          JSCompiler_lcov_data_js_base_js[824] = !0, goog.moduleLoaderState_ = b;
        }
      }
    }
    JSCompiler_lcov_data_js_base_js[828] = !0;
    return null;
  }
};
goog.requireType = function(a) {
  JSCompiler_lcov_data_js_base_js[849] = !0;
  JSCompiler_lcov_data_js_base_js[853] = !0;
  return {};
};
goog.basePath = "";
goog.nullFunction = function() {
  JSCompiler_lcov_data_js_base_js[899] = !0;
};
goog.abstractMethod = function() {
  JSCompiler_lcov_data_js_base_js[915] = !0;
  JSCompiler_lcov_data_js_base_js[916] = !0;
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(a) {
  JSCompiler_lcov_data_js_base_js[928] = !0;
  JSCompiler_lcov_data_js_base_js[934] = !0;
  a.instance_ = void 0;
  JSCompiler_lcov_data_js_base_js[935] = !0;
  a.getInstance = function() {
    JSCompiler_lcov_data_js_base_js[935] = !0;
    JSCompiler_lcov_data_js_base_js[936] = !0;
    if (a.instance_) {
      return JSCompiler_lcov_data_js_base_js[937] = !0, a.instance_;
    }
    JSCompiler_lcov_data_js_base_js[939] = !0;
    goog.DEBUG && (JSCompiler_lcov_data_js_base_js[941] = !0, goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a);
    JSCompiler_lcov_data_js_base_js[944] = !0;
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
  JSCompiler_lcov_data_js_base_js[1050] = !0;
  JSCompiler_lcov_data_js_base_js[1051] = !0;
  if (null == goog.hasBadLetScoping) {
    JSCompiler_lcov_data_js_base_js[1052] = !0;
    try {
      JSCompiler_lcov_data_js_base_js[1053] = !0;
      JSCompiler_lcov_data_js_base_js[1054] = !0;
      var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";');
    } catch (b) {
      JSCompiler_lcov_data_js_base_js[1058] = !0, JSCompiler_lcov_data_js_base_js[1060] = !0, a = !1;
    }
    JSCompiler_lcov_data_js_base_js[1062] = !0;
    goog.hasBadLetScoping = a;
  }
  JSCompiler_lcov_data_js_base_js[1064] = !0;
  return goog.hasBadLetScoping;
};
goog.workaroundSafari10EvalBug = function(a) {
  JSCompiler_lcov_data_js_base_js[1073] = !0;
  JSCompiler_lcov_data_js_base_js[1074] = !0;
  return "(function(){" + a + "\n;})();\n";
};
goog.loadModule = function(a) {
  JSCompiler_lcov_data_js_base_js[1084] = !0;
  JSCompiler_lcov_data_js_base_js[1090] = !0;
  var b = goog.moduleLoaderState_;
  try {
    JSCompiler_lcov_data_js_base_js[1091] = !0;
    JSCompiler_lcov_data_js_base_js[1092] = !0;
    goog.moduleLoaderState_ = {moduleName:"", declareLegacyNamespace:!1, type:goog.ModuleType.GOOG};
    JSCompiler_lcov_data_js_base_js[1097] = !0;
    JSCompiler_lcov_data_js_base_js[1098] = !0;
    if (goog.isFunction(a)) {
      JSCompiler_lcov_data_js_base_js[1099] = !0;
      var c = a.call(void 0, {});
    } else {
      if (JSCompiler_lcov_data_js_base_js[1100] = !0, "string" === typeof a) {
        JSCompiler_lcov_data_js_base_js[1101] = !0, goog.useSafari10Workaround() && (JSCompiler_lcov_data_js_base_js[1102] = !0, a = goog.workaroundSafari10EvalBug(a)), JSCompiler_lcov_data_js_base_js[1105] = !0, c = goog.loadModuleFromSource_.call(void 0, a);
      } else {
        throw JSCompiler_lcov_data_js_base_js[1107] = !0, Error("Invalid module definition");
      }
    }
    JSCompiler_lcov_data_js_base_js[1110] = !0;
    var d = goog.moduleLoaderState_.moduleName;
    JSCompiler_lcov_data_js_base_js[1111] = !0;
    if ("string" === typeof d && d) {
      JSCompiler_lcov_data_js_base_js[1114] = !0;
      goog.moduleLoaderState_.declareLegacyNamespace ? (JSCompiler_lcov_data_js_base_js[1115] = !0, goog.constructNamespace_(d, c)) : (JSCompiler_lcov_data_js_base_js[1116] = !0, goog.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof c && null != c && (JSCompiler_lcov_data_js_base_js[1119] = !0, Object.seal(c)));
      JSCompiler_lcov_data_js_base_js[1122] = !0;
      var e = {exports:c, type:goog.ModuleType.GOOG, moduleId:goog.moduleLoaderState_.moduleName};
      JSCompiler_lcov_data_js_base_js[1127] = !0;
      goog.loadedModules_[d] = e;
    } else {
      throw JSCompiler_lcov_data_js_base_js[1129] = !0, Error('Invalid module name "' + d + '"');
    }
  } finally {
    JSCompiler_lcov_data_js_base_js[1132] = !0, goog.moduleLoaderState_ = b;
  }
};
goog.loadModuleFromSource_ = function(a) {
  JSCompiler_lcov_data_js_base_js[1140] = !0;
  JSCompiler_lcov_data_js_base_js[1144] = !0;
  JSCompiler_lcov_data_js_base_js[1145] = !0;
  eval(a);
  JSCompiler_lcov_data_js_base_js[1146] = !0;
  return {};
};
goog.normalizePath_ = function(a) {
  JSCompiler_lcov_data_js_base_js[1157] = !0;
  JSCompiler_lcov_data_js_base_js[1158] = !0;
  a = a.split("/");
  JSCompiler_lcov_data_js_base_js[1159] = !0;
  var b = 0;
  for (JSCompiler_lcov_data_js_base_js[1160] = !0; b < a.length;) {
    JSCompiler_lcov_data_js_base_js[1161] = !0, "." == a[b] ? (JSCompiler_lcov_data_js_base_js[1162] = !0, a.splice(b, 1)) : (JSCompiler_lcov_data_js_base_js[1163] = !0, b && ".." == a[b] && a[b - 1] && ".." != a[b - 1] ? (JSCompiler_lcov_data_js_base_js[1166] = !0, a.splice(--b, 2)) : (JSCompiler_lcov_data_js_base_js[1168] = !0, b++));
  }
  JSCompiler_lcov_data_js_base_js[1171] = !0;
  return a.join("/");
};
goog.loadFileSync_ = function(a) {
  JSCompiler_lcov_data_js_base_js[1190] = !0;
  JSCompiler_lcov_data_js_base_js[1191] = !0;
  if (goog.global.CLOSURE_LOAD_FILE_SYNC) {
    return JSCompiler_lcov_data_js_base_js[1192] = !0, goog.global.CLOSURE_LOAD_FILE_SYNC(a);
  }
  try {
    JSCompiler_lcov_data_js_base_js[1194] = !0;
    JSCompiler_lcov_data_js_base_js[1196] = !0;
    var b = new goog.global.XMLHttpRequest;
    JSCompiler_lcov_data_js_base_js[1197] = !0;
    b.open("get", a, !1);
    JSCompiler_lcov_data_js_base_js[1198] = !0;
    b.send();
    JSCompiler_lcov_data_js_base_js[1203] = !0;
    return 0 == b.status || 200 == b.status ? b.responseText : null;
  } catch (c) {
    return JSCompiler_lcov_data_js_base_js[1204] = !0, JSCompiler_lcov_data_js_base_js[1206] = !0, null;
  }
};
goog.transpile_ = function(a, b, c) {
  JSCompiler_lcov_data_js_base_js[1220] = !0;
  JSCompiler_lcov_data_js_base_js[1221] = !0;
  var d = goog.global.$jscomp;
  JSCompiler_lcov_data_js_base_js[1222] = !0;
  d || (JSCompiler_lcov_data_js_base_js[1223] = !0, goog.global.$jscomp = d = {});
  JSCompiler_lcov_data_js_base_js[1225] = !0;
  var e = d.transpile;
  JSCompiler_lcov_data_js_base_js[1226] = !0;
  if (!e) {
    JSCompiler_lcov_data_js_base_js[1227] = !0;
    var g = goog.basePath + goog.TRANSPILER;
    JSCompiler_lcov_data_js_base_js[1228] = !0;
    var f = goog.loadFileSync_(g);
    JSCompiler_lcov_data_js_base_js[1229] = !0;
    if (f) {
      JSCompiler_lcov_data_js_base_js[1234] = !0;
      (function() {
        JSCompiler_lcov_data_js_base_js[1234] = !0;
        JSCompiler_lcov_data_js_base_js[1235] = !0;
        (0,eval)(f + "\n//# sourceURL=" + g);
      }).call(goog.global);
      JSCompiler_lcov_data_js_base_js[1240] = !0;
      if (goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile) {
        throw JSCompiler_lcov_data_js_base_js[1242] = !0, Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
      }
      JSCompiler_lcov_data_js_base_js[1249] = !0;
      goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile;
      JSCompiler_lcov_data_js_base_js[1251] = !0;
      d = goog.global.$jscomp;
      JSCompiler_lcov_data_js_base_js[1252] = !0;
      e = d.transpile;
    }
  }
  JSCompiler_lcov_data_js_base_js[1255] = !0;
  e || (JSCompiler_lcov_data_js_base_js[1258] = !0, JSCompiler_lcov_data_js_base_js[1259] = !0, e = d.transpile = function(n, k) {
    JSCompiler_lcov_data_js_base_js[1259] = !0;
    JSCompiler_lcov_data_js_base_js[1264] = !0;
    goog.logToConsole_(k + " requires transpilation but no transpiler was found.");
    JSCompiler_lcov_data_js_base_js[1265] = !0;
    return n;
  });
  JSCompiler_lcov_data_js_base_js[1269] = !0;
  return e(a, b, c);
};
goog.typeOf = function(a) {
  JSCompiler_lcov_data_js_base_js[1283] = !0;
  JSCompiler_lcov_data_js_base_js[1284] = !0;
  var b = typeof a;
  JSCompiler_lcov_data_js_base_js[1286] = !0;
  if ("object" != b) {
    return JSCompiler_lcov_data_js_base_js[1287] = !0, b;
  }
  JSCompiler_lcov_data_js_base_js[1290] = !0;
  if (!a) {
    return JSCompiler_lcov_data_js_base_js[1291] = !0, "null";
  }
  JSCompiler_lcov_data_js_base_js[1294] = !0;
  if (Array.isArray(a)) {
    return JSCompiler_lcov_data_js_base_js[1295] = !0, "array";
  }
  JSCompiler_lcov_data_js_base_js[1297] = !0;
  return b;
};
goog.isArray = function(a) {
  JSCompiler_lcov_data_js_base_js[1307] = !0;
  JSCompiler_lcov_data_js_base_js[1308] = !0;
  return Array.isArray(a);
};
goog.isArrayLike = function(a) {
  JSCompiler_lcov_data_js_base_js[1321] = !0;
  JSCompiler_lcov_data_js_base_js[1322] = !0;
  var b = goog.typeOf(a);
  JSCompiler_lcov_data_js_base_js[1324] = !0;
  return "array" == b || "object" == b && "number" == typeof a.length;
};
goog.isDateLike = function(a) {
  JSCompiler_lcov_data_js_base_js[1334] = !0;
  JSCompiler_lcov_data_js_base_js[1335] = !0;
  return goog.isObject(a) && "function" == typeof a.getFullYear;
};
goog.isFunction = function(a) {
  JSCompiler_lcov_data_js_base_js[1345] = !0;
  JSCompiler_lcov_data_js_base_js[1346] = !0;
  return "function" == goog.typeOf(a);
};
goog.isObject = function(a) {
  JSCompiler_lcov_data_js_base_js[1356] = !0;
  JSCompiler_lcov_data_js_base_js[1357] = !0;
  var b = typeof a;
  JSCompiler_lcov_data_js_base_js[1358] = !0;
  return "object" == b && null != a || "function" == b;
};
goog.getUid = function(a) {
  JSCompiler_lcov_data_js_base_js[1375] = !0;
  JSCompiler_lcov_data_js_base_js[1377] = !0;
  return Object.prototype.hasOwnProperty.call(a, goog.UID_PROPERTY_) && a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_);
};
goog.hasUid = function(a) {
  JSCompiler_lcov_data_js_base_js[1391] = !0;
  JSCompiler_lcov_data_js_base_js[1392] = !0;
  return !!a[goog.UID_PROPERTY_];
};
goog.removeUid = function(a) {
  JSCompiler_lcov_data_js_base_js[1402] = !0;
  JSCompiler_lcov_data_js_base_js[1407] = !0;
  null !== a && "removeAttribute" in a && (JSCompiler_lcov_data_js_base_js[1408] = !0, a.removeAttribute(goog.UID_PROPERTY_));
  try {
    JSCompiler_lcov_data_js_base_js[1411] = !0, JSCompiler_lcov_data_js_base_js[1412] = !0, delete a[goog.UID_PROPERTY_];
  } catch (b) {
    JSCompiler_lcov_data_js_base_js[1413] = !0;
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0);
goog.uidCounter_ = 0;
goog.cloneObject = function(a) {
  JSCompiler_lcov_data_js_base_js[1450] = !0;
  JSCompiler_lcov_data_js_base_js[1451] = !0;
  var b = goog.typeOf(a);
  JSCompiler_lcov_data_js_base_js[1452] = !0;
  if ("object" == b || "array" == b) {
    JSCompiler_lcov_data_js_base_js[1453] = !0;
    if ("function" === typeof a.clone) {
      return JSCompiler_lcov_data_js_base_js[1454] = !0, a.clone();
    }
    JSCompiler_lcov_data_js_base_js[1456] = !0;
    b = "array" == b ? [] : {};
    JSCompiler_lcov_data_js_base_js[1457] = !0;
    var c;
    JSCompiler_lcov_data_js_base_js[1457] = !0;
    for (c in a) {
      JSCompiler_lcov_data_js_base_js[1458] = !0, b[c] = goog.cloneObject(a[c]);
    }
    JSCompiler_lcov_data_js_base_js[1460] = !0;
    return b;
  }
  JSCompiler_lcov_data_js_base_js[1463] = !0;
  return a;
};
goog.bindNative_ = function(a, b, c) {
  JSCompiler_lcov_data_js_base_js[1479] = !0;
  JSCompiler_lcov_data_js_base_js[1480] = !0;
  return a.call.apply(a.bind, arguments);
};
goog.bindJs_ = function(a, b, c) {
  JSCompiler_lcov_data_js_base_js[1496] = !0;
  JSCompiler_lcov_data_js_base_js[1497] = !0;
  if (!a) {
    throw JSCompiler_lcov_data_js_base_js[1498] = !0, Error();
  }
  JSCompiler_lcov_data_js_base_js[1501] = !0;
  if (2 < arguments.length) {
    JSCompiler_lcov_data_js_base_js[1502] = !0;
    var d = Array.prototype.slice.call(arguments, 2);
    JSCompiler_lcov_data_js_base_js[1503] = !0;
    return function() {
      JSCompiler_lcov_data_js_base_js[1503] = !0;
      JSCompiler_lcov_data_js_base_js[1505] = !0;
      var e = Array.prototype.slice.call(arguments);
      JSCompiler_lcov_data_js_base_js[1506] = !0;
      Array.prototype.unshift.apply(e, d);
      JSCompiler_lcov_data_js_base_js[1507] = !0;
      return a.apply(b, e);
    };
  }
  JSCompiler_lcov_data_js_base_js[1511] = !0;
  return function() {
    JSCompiler_lcov_data_js_base_js[1511] = !0;
    JSCompiler_lcov_data_js_base_js[1512] = !0;
    return a.apply(b, arguments);
  };
};
goog.bind = function(a, b, c) {
  JSCompiler_lcov_data_js_base_js[1542] = !0;
  JSCompiler_lcov_data_js_base_js[1544] = !0;
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? (JSCompiler_lcov_data_js_base_js[1552] = !0, goog.bind = goog.bindNative_) : (JSCompiler_lcov_data_js_base_js[1554] = !0, goog.bind = goog.bindJs_);
  JSCompiler_lcov_data_js_base_js[1556] = !0;
  return goog.bind.apply(null, arguments);
};
goog.partial = function(a, b) {
  JSCompiler_lcov_data_js_base_js[1573] = !0;
  JSCompiler_lcov_data_js_base_js[1574] = !0;
  var c = Array.prototype.slice.call(arguments, 1);
  JSCompiler_lcov_data_js_base_js[1575] = !0;
  return function() {
    JSCompiler_lcov_data_js_base_js[1575] = !0;
    JSCompiler_lcov_data_js_base_js[1578] = !0;
    var d = c.slice();
    JSCompiler_lcov_data_js_base_js[1579] = !0;
    d.push.apply(d, arguments);
    JSCompiler_lcov_data_js_base_js[1580] = !0;
    return a.apply(this, d);
  };
};
goog.mixin = function(a, b) {
  JSCompiler_lcov_data_js_base_js[1600] = !0;
  JSCompiler_lcov_data_js_base_js[1601] = !0;
  var c;
  JSCompiler_lcov_data_js_base_js[1601] = !0;
  for (c in b) {
    JSCompiler_lcov_data_js_base_js[1602] = !0, a[c] = b[c];
  }
};
goog.now = goog.TRUSTED_SITE && Date.now || function() {
  JSCompiler_lcov_data_js_base_js[1618] = !0;
  JSCompiler_lcov_data_js_base_js[1622] = !0;
  return +new Date;
};
goog.globalEval = function(a) {
  JSCompiler_lcov_data_js_base_js[1633] = !0;
  JSCompiler_lcov_data_js_base_js[1634] = !0;
  if (goog.global.execScript) {
    JSCompiler_lcov_data_js_base_js[1635] = !0, goog.global.execScript(a, "JavaScript");
  } else {
    if (JSCompiler_lcov_data_js_base_js[1636] = !0, goog.global.eval) {
      JSCompiler_lcov_data_js_base_js[1638] = !0;
      if (null == goog.evalWorks_) {
        try {
          JSCompiler_lcov_data_js_base_js[1639] = !0, JSCompiler_lcov_data_js_base_js[1640] = !0, goog.global.eval(""), JSCompiler_lcov_data_js_base_js[1641] = !0, goog.evalWorks_ = !0;
        } catch (d) {
          JSCompiler_lcov_data_js_base_js[1642] = !0, JSCompiler_lcov_data_js_base_js[1643] = !0, goog.evalWorks_ = !1;
        }
      }
      JSCompiler_lcov_data_js_base_js[1647] = !0;
      if (goog.evalWorks_) {
        JSCompiler_lcov_data_js_base_js[1648] = !0, goog.global.eval(a);
      } else {
        JSCompiler_lcov_data_js_base_js[1651] = !0;
        var b = goog.global.document;
        JSCompiler_lcov_data_js_base_js[1652] = !0;
        var c = b.createElement("script");
        JSCompiler_lcov_data_js_base_js[1654] = !0;
        c.type = "text/javascript";
        JSCompiler_lcov_data_js_base_js[1655] = !0;
        c.defer = !1;
        JSCompiler_lcov_data_js_base_js[1658] = !0;
        c.appendChild(b.createTextNode(a));
        JSCompiler_lcov_data_js_base_js[1659] = !0;
        b.head.appendChild(c);
        JSCompiler_lcov_data_js_base_js[1660] = !0;
        b.head.removeChild(c);
      }
    } else {
      throw JSCompiler_lcov_data_js_base_js[1663] = !0, Error("goog.globalEval not available");
    }
  }
};
goog.evalWorks_ = null;
goog.getCssName = function(a, b) {
  JSCompiler_lcov_data_js_base_js[1739] = !0;
  JSCompiler_lcov_data_js_base_js[1742] = !0;
  if ("." == String(a).charAt(0)) {
    throw JSCompiler_lcov_data_js_base_js[1743] = !0, Error('className passed in goog.getCssName must not start with ".". You passed: ' + a);
  }
  JSCompiler_lcov_data_js_base_js[1748] = !0;
  var c = function(e) {
    JSCompiler_lcov_data_js_base_js[1748] = !0;
    JSCompiler_lcov_data_js_base_js[1749] = !0;
    return goog.cssNameMapping_[e] || e;
  };
  JSCompiler_lcov_data_js_base_js[1752] = !0;
  var d = function(e) {
    JSCompiler_lcov_data_js_base_js[1752] = !0;
    JSCompiler_lcov_data_js_base_js[1754] = !0;
    e = e.split("-");
    JSCompiler_lcov_data_js_base_js[1755] = !0;
    var g = [];
    JSCompiler_lcov_data_js_base_js[1756] = !0;
    var f = 0;
    for (JSCompiler_lcov_data_js_base_js[1756] = !0; f < e.length; f++) {
      JSCompiler_lcov_data_js_base_js[1757] = !0, g.push(c(e[f]));
    }
    JSCompiler_lcov_data_js_base_js[1759] = !0;
    return g.join("-");
  };
  JSCompiler_lcov_data_js_base_js[1762] = !0;
  JSCompiler_lcov_data_js_base_js[1763] = !0;
  goog.cssNameMapping_ ? (JSCompiler_lcov_data_js_base_js[1764] = !0, d = "BY_WHOLE" == goog.cssNameMappingStyle_ ? c : d) : (JSCompiler_lcov_data_js_base_js[1767] = !0, d = function(e) {
    JSCompiler_lcov_data_js_base_js[1767] = !0;
    JSCompiler_lcov_data_js_base_js[1768] = !0;
    return e;
  });
  JSCompiler_lcov_data_js_base_js[1772] = !0;
  a = b ? a + "-" + d(b) : d(a);
  JSCompiler_lcov_data_js_base_js[1777] = !0;
  if (goog.global.CLOSURE_CSS_NAME_MAP_FN) {
    return JSCompiler_lcov_data_js_base_js[1778] = !0, goog.global.CLOSURE_CSS_NAME_MAP_FN(a);
  }
  JSCompiler_lcov_data_js_base_js[1781] = !0;
  return a;
};
goog.setCssNameMapping = function(a, b) {
  JSCompiler_lcov_data_js_base_js[1808] = !0;
  JSCompiler_lcov_data_js_base_js[1809] = !0;
  goog.cssNameMapping_ = a;
  JSCompiler_lcov_data_js_base_js[1810] = !0;
  goog.cssNameMappingStyle_ = b;
};
!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (JSCompiler_lcov_data_js_base_js[1832] = !0, goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
goog.getMsg = function(a, b, c) {
  JSCompiler_lcov_data_js_base_js[1861] = !0;
  JSCompiler_lcov_data_js_base_js[1862] = !0;
  c && c.html && (JSCompiler_lcov_data_js_base_js[1865] = !0, a = a.replace(/</g, "&lt;"));
  JSCompiler_lcov_data_js_base_js[1867] = !0;
  b && (JSCompiler_lcov_data_js_base_js[1868] = !0, a = a.replace(/\{\$([^}]+)}/g, function(d, e) {
    JSCompiler_lcov_data_js_base_js[1868] = !0;
    JSCompiler_lcov_data_js_base_js[1869] = !0;
    return null != b && e in b ? b[e] : d;
  }));
  JSCompiler_lcov_data_js_base_js[1873] = !0;
  return a;
};
goog.getMsgWithFallback = function(a, b) {
  JSCompiler_lcov_data_js_base_js[1892] = !0;
  JSCompiler_lcov_data_js_base_js[1893] = !0;
  return a;
};
goog.exportSymbol = function(a, b, c) {
  JSCompiler_lcov_data_js_base_js[1918] = !0;
  JSCompiler_lcov_data_js_base_js[1919] = !0;
  goog.exportPath_(a, b, c);
};
goog.exportProperty = function(a, b, c) {
  JSCompiler_lcov_data_js_base_js[1931] = !0;
  JSCompiler_lcov_data_js_base_js[1932] = !0;
  a[b] = c;
};
goog.inherits = function(a, b) {
  JSCompiler_lcov_data_js_base_js[1958] = !0;
  function c() {
    JSCompiler_lcov_data_js_base_js[1960] = !0;
  }
  JSCompiler_lcov_data_js_base_js[1961] = !0;
  c.prototype = b.prototype;
  JSCompiler_lcov_data_js_base_js[1962] = !0;
  a.superClass_ = b.prototype;
  JSCompiler_lcov_data_js_base_js[1963] = !0;
  a.prototype = new c;
  JSCompiler_lcov_data_js_base_js[1965] = !0;
  a.prototype.constructor = a;
  JSCompiler_lcov_data_js_base_js[1984] = !0;
  a.base = function(d, e, g) {
    JSCompiler_lcov_data_js_base_js[1984] = !0;
    JSCompiler_lcov_data_js_base_js[1987] = !0;
    var f = Array(arguments.length - 2);
    JSCompiler_lcov_data_js_base_js[1988] = !0;
    var n = 2;
    for (JSCompiler_lcov_data_js_base_js[1988] = !0; n < arguments.length; n++) {
      JSCompiler_lcov_data_js_base_js[1989] = !0, f[n - 2] = arguments[n];
    }
    JSCompiler_lcov_data_js_base_js[1991] = !0;
    return b.prototype[e].apply(d, f);
  };
};
goog.scope = function(a) {
  JSCompiler_lcov_data_js_base_js[2008] = !0;
  JSCompiler_lcov_data_js_base_js[2009] = !0;
  if (goog.isInModuleLoader_()) {
    throw JSCompiler_lcov_data_js_base_js[2010] = !0, Error("goog.scope is not supported within a module.");
  }
  JSCompiler_lcov_data_js_base_js[2012] = !0;
  a.call(goog.global);
};
COMPILED || (JSCompiler_lcov_data_js_base_js[2027] = !0, goog.global.COMPILED = COMPILED);
goog.defineClass = function(a, b) {
  JSCompiler_lcov_data_js_base_js[2058] = !0;
  JSCompiler_lcov_data_js_base_js[2060] = !0;
  var c = b.constructor;
  JSCompiler_lcov_data_js_base_js[2061] = !0;
  var d = b.statics;
  JSCompiler_lcov_data_js_base_js[2063] = !0;
  c && c != Object.prototype.constructor || (JSCompiler_lcov_data_js_base_js[2064] = !0, c = function() {
    JSCompiler_lcov_data_js_base_js[2064] = !0;
    JSCompiler_lcov_data_js_base_js[2065] = !0;
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  JSCompiler_lcov_data_js_base_js[2070] = !0;
  c = goog.defineClass.createSealingConstructor_(c, a);
  JSCompiler_lcov_data_js_base_js[2071] = !0;
  a && (JSCompiler_lcov_data_js_base_js[2072] = !0, goog.inherits(c, a));
  JSCompiler_lcov_data_js_base_js[2076] = !0;
  delete b.constructor;
  JSCompiler_lcov_data_js_base_js[2077] = !0;
  delete b.statics;
  JSCompiler_lcov_data_js_base_js[2079] = !0;
  goog.defineClass.applyProperties_(c.prototype, b);
  JSCompiler_lcov_data_js_base_js[2080] = !0;
  null != d && (JSCompiler_lcov_data_js_base_js[2081] = !0, d instanceof Function ? (JSCompiler_lcov_data_js_base_js[2082] = !0, d(c)) : (JSCompiler_lcov_data_js_base_js[2084] = !0, goog.defineClass.applyProperties_(c, d)));
  JSCompiler_lcov_data_js_base_js[2088] = !0;
  return c;
};
goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
goog.defineClass.createSealingConstructor_ = function(a, b) {
  JSCompiler_lcov_data_js_base_js[2122] = !0;
  JSCompiler_lcov_data_js_base_js[2123] = !0;
  if (!goog.defineClass.SEAL_CLASS_INSTANCES) {
    return JSCompiler_lcov_data_js_base_js[2126] = !0, a;
  }
  JSCompiler_lcov_data_js_base_js[2135] = !0;
  JSCompiler_lcov_data_js_base_js[2144] = !0;
  return function() {
    JSCompiler_lcov_data_js_base_js[2135] = !0;
    JSCompiler_lcov_data_js_base_js[2138] = !0;
    var c = a.apply(this, arguments) || this;
    JSCompiler_lcov_data_js_base_js[2139] = !0;
    c[goog.UID_PROPERTY_] = c[goog.UID_PROPERTY_];
    JSCompiler_lcov_data_js_base_js[2141] = !0;
    return c;
  };
};
goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.defineClass.applyProperties_ = function(a, b) {
  JSCompiler_lcov_data_js_base_js[2168] = !0;
  JSCompiler_lcov_data_js_base_js[2171] = !0;
  JSCompiler_lcov_data_js_base_js[2172] = !0;
  for (d in b) {
    JSCompiler_lcov_data_js_base_js[2173] = !0, Object.prototype.hasOwnProperty.call(b, d) && (JSCompiler_lcov_data_js_base_js[2174] = !0, a[d] = b[d]);
  }
  JSCompiler_lcov_data_js_base_js[2183] = !0;
  var c = 0;
  for (JSCompiler_lcov_data_js_base_js[2183] = !0; c < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; c++) {
    JSCompiler_lcov_data_js_base_js[2184] = !0;
    var d = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[c];
    JSCompiler_lcov_data_js_base_js[2185] = !0;
    Object.prototype.hasOwnProperty.call(b, d) && (JSCompiler_lcov_data_js_base_js[2186] = !0, a[d] = b[d]);
  }
};
!COMPILED && goog.DEPENDENCIES_ENABLED && (JSCompiler_lcov_data_js_base_js[2201] = !0, goog.inHtmlDocument_ = function() {
  JSCompiler_lcov_data_js_base_js[2201] = !0;
  JSCompiler_lcov_data_js_base_js[2203] = !0;
  var a = goog.global.document;
  JSCompiler_lcov_data_js_base_js[2204] = !0;
  return null != a && "write" in a;
}, JSCompiler_lcov_data_js_base_js[2215] = !0, goog.isDocumentLoading_ = function() {
  JSCompiler_lcov_data_js_base_js[2215] = !0;
  JSCompiler_lcov_data_js_base_js[2219] = !0;
  var a = goog.global.document;
  JSCompiler_lcov_data_js_base_js[2220] = !0;
  return a.attachEvent ? "complete" != a.readyState : "loading" == a.readyState;
}, JSCompiler_lcov_data_js_base_js[2229] = !0, goog.findBasePath_ = function() {
  JSCompiler_lcov_data_js_base_js[2229] = !0;
  JSCompiler_lcov_data_js_base_js[2230] = !0;
  if (void 0 != goog.global.CLOSURE_BASE_PATH && "string" === typeof goog.global.CLOSURE_BASE_PATH) {
    JSCompiler_lcov_data_js_base_js[2233] = !0, goog.basePath = goog.global.CLOSURE_BASE_PATH, JSCompiler_lcov_data_js_base_js[2234] = !0;
  } else {
    if (JSCompiler_lcov_data_js_base_js[2235] = !0, goog.inHtmlDocument_()) {
      JSCompiler_lcov_data_js_base_js[2239] = !0;
      var a = goog.global.document;
      JSCompiler_lcov_data_js_base_js[2241] = !0;
      var b = a.currentScript;
      JSCompiler_lcov_data_js_base_js[2242] = !0;
      b ? (JSCompiler_lcov_data_js_base_js[2243] = !0, a = [b]) : (JSCompiler_lcov_data_js_base_js[2245] = !0, a = a.getElementsByTagName("SCRIPT"));
      JSCompiler_lcov_data_js_base_js[2249] = !0;
      b = a.length - 1;
      for (JSCompiler_lcov_data_js_base_js[2249] = !0; 0 <= b; --b) {
        JSCompiler_lcov_data_js_base_js[2250] = !0;
        var c = a[b];
        JSCompiler_lcov_data_js_base_js[2251] = !0;
        c = c.src;
        JSCompiler_lcov_data_js_base_js[2252] = !0;
        var d = c.lastIndexOf("?");
        JSCompiler_lcov_data_js_base_js[2253] = !0;
        d = -1 == d ? c.length : d;
        JSCompiler_lcov_data_js_base_js[2254] = !0;
        if ("base.js" == c.substr(d - 7, 7)) {
          JSCompiler_lcov_data_js_base_js[2255] = !0;
          goog.basePath = c.substr(0, d - 7);
          JSCompiler_lcov_data_js_base_js[2256] = !0;
          break;
        }
      }
    } else {
      JSCompiler_lcov_data_js_base_js[2236] = !0;
    }
  }
}, JSCompiler_lcov_data_js_base_js[2261] = !0, goog.findBasePath_(), JSCompiler_lcov_data_js_base_js[2264] = !0, goog.Transpiler = function() {
  JSCompiler_lcov_data_js_base_js[2264] = !0;
  JSCompiler_lcov_data_js_base_js[2266] = !0;
  this.requiresTranspilation_ = null;
  JSCompiler_lcov_data_js_base_js[2268] = !0;
  this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE;
}, JSCompiler_lcov_data_js_base_js[2289] = !0, goog.Transpiler.prototype.createRequiresTranspilation_ = function() {
  JSCompiler_lcov_data_js_base_js[2289] = !0;
  function a(f, n) {
    JSCompiler_lcov_data_js_base_js[2303] = !0;
    JSCompiler_lcov_data_js_base_js[2304] = !0;
    e ? (JSCompiler_lcov_data_js_base_js[2305] = !0, d[f] = !0) : (JSCompiler_lcov_data_js_base_js[2306] = !0, n() ? (JSCompiler_lcov_data_js_base_js[2307] = !0, c = f, JSCompiler_lcov_data_js_base_js[2308] = !0, d[f] = !1) : (JSCompiler_lcov_data_js_base_js[2310] = !0, d[f] = !0, e = JSCompiler_lcov_data_js_base_js[2311] = !0));
  }
  function b(f) {
    JSCompiler_lcov_data_js_base_js[2319] = !0;
    try {
      return JSCompiler_lcov_data_js_base_js[2320] = !0, JSCompiler_lcov_data_js_base_js[2321] = !0, !!eval(f);
    } catch (n) {
      return JSCompiler_lcov_data_js_base_js[2322] = !0, JSCompiler_lcov_data_js_base_js[2323] = !0, !1;
    }
  }
  JSCompiler_lcov_data_js_base_js[2290] = !0;
  var c = "es3";
  JSCompiler_lcov_data_js_base_js[2291] = !0;
  var d = {es3:!1};
  JSCompiler_lcov_data_js_base_js[2292] = !0;
  var e = !1;
  JSCompiler_lcov_data_js_base_js[2327] = !0;
  var g = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
  JSCompiler_lcov_data_js_base_js[2332] = !0;
  a("es5", function() {
    JSCompiler_lcov_data_js_base_js[2332] = !0;
    JSCompiler_lcov_data_js_base_js[2333] = !0;
    return b("[1,].length==1");
  });
  JSCompiler_lcov_data_js_base_js[2335] = !0;
  a("es6", function() {
    JSCompiler_lcov_data_js_base_js[2335] = !0;
    JSCompiler_lcov_data_js_base_js[2338] = !0;
    JSCompiler_lcov_data_js_base_js[2339] = !0;
    var f = g.match(/Edge\/(\d+)(\.\d)*/i);
    JSCompiler_lcov_data_js_base_js[2340] = !0;
    if (f) {
      return JSCompiler_lcov_data_js_base_js[2345] = !0, !1;
    }
    JSCompiler_lcov_data_js_base_js[2351] = !0;
    JSCompiler_lcov_data_js_base_js[2358] = !0;
    return b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()');
  });
  JSCompiler_lcov_data_js_base_js[2361] = !0;
  a("es7", function() {
    JSCompiler_lcov_data_js_base_js[2361] = !0;
    JSCompiler_lcov_data_js_base_js[2362] = !0;
    return b("2 ** 2 == 4");
  });
  JSCompiler_lcov_data_js_base_js[2365] = !0;
  a("es8", function() {
    JSCompiler_lcov_data_js_base_js[2365] = !0;
    JSCompiler_lcov_data_js_base_js[2366] = !0;
    return b("async () => 1, true");
  });
  JSCompiler_lcov_data_js_base_js[2368] = !0;
  a("es9", function() {
    JSCompiler_lcov_data_js_base_js[2368] = !0;
    JSCompiler_lcov_data_js_base_js[2369] = !0;
    return b("({...rest} = {}), true");
  });
  JSCompiler_lcov_data_js_base_js[2371] = !0;
  a("es_next", function() {
    JSCompiler_lcov_data_js_base_js[2371] = !0;
    JSCompiler_lcov_data_js_base_js[2372] = !0;
    return !1;
  });
  JSCompiler_lcov_data_js_base_js[2374] = !0;
  return {target:c, map:d};
}, JSCompiler_lcov_data_js_base_js[2384] = !0, goog.Transpiler.prototype.needsTranspile = function(a, b) {
  JSCompiler_lcov_data_js_base_js[2384] = !0;
  JSCompiler_lcov_data_js_base_js[2385] = !0;
  if ("always" == goog.TRANSPILE) {
    return JSCompiler_lcov_data_js_base_js[2386] = !0;
  }
  JSCompiler_lcov_data_js_base_js[2387] = !0;
  if ("never" == goog.TRANSPILE) {
    return JSCompiler_lcov_data_js_base_js[2388] = !0, !1;
  }
  JSCompiler_lcov_data_js_base_js[2389] = !0;
  if (!this.requiresTranspilation_) {
    JSCompiler_lcov_data_js_base_js[2390] = !0;
    var c = this.createRequiresTranspilation_();
    JSCompiler_lcov_data_js_base_js[2391] = !0;
    this.requiresTranspilation_ = c.map;
    JSCompiler_lcov_data_js_base_js[2392] = !0;
    this.transpilationTarget_ = this.transpilationTarget_ || c.target;
  }
  JSCompiler_lcov_data_js_base_js[2394] = !0;
  if (a in this.requiresTranspilation_) {
    JSCompiler_lcov_data_js_base_js[2395] = !0;
    if (this.requiresTranspilation_[a]) {
      return JSCompiler_lcov_data_js_base_js[2396] = !0;
    }
    JSCompiler_lcov_data_js_base_js[2397] = !0;
    return !goog.inHtmlDocument_() || "es6" != b || "noModule" in goog.global.document.createElement("script") ? (JSCompiler_lcov_data_js_base_js[2402] = !0, !1) : JSCompiler_lcov_data_js_base_js[2400] = !0;
  }
  JSCompiler_lcov_data_js_base_js[2405] = !0;
  throw Error("Unknown language mode: " + a);
}, JSCompiler_lcov_data_js_base_js[2416] = !0, goog.Transpiler.prototype.transpile = function(a, b) {
  JSCompiler_lcov_data_js_base_js[2416] = !0;
  JSCompiler_lcov_data_js_base_js[2420] = !0;
  return goog.transpile_(a, b, this.transpilationTarget_);
}, JSCompiler_lcov_data_js_base_js[2425] = !0, goog.transpiler_ = new goog.Transpiler, JSCompiler_lcov_data_js_base_js[2435] = !0, goog.protectScriptTag_ = function(a) {
  JSCompiler_lcov_data_js_base_js[2435] = !0;
  JSCompiler_lcov_data_js_base_js[2436] = !0;
  return a.replace(/<\/(SCRIPT)/ig, "\\x3c/$1");
}, JSCompiler_lcov_data_js_base_js[2449] = !0, goog.DebugLoader_ = function() {
  JSCompiler_lcov_data_js_base_js[2449] = !0;
  JSCompiler_lcov_data_js_base_js[2451] = !0;
  this.dependencies_ = {};
  JSCompiler_lcov_data_js_base_js[2453] = !0;
  this.idToPath_ = {};
  JSCompiler_lcov_data_js_base_js[2455] = !0;
  this.written_ = {};
  JSCompiler_lcov_data_js_base_js[2457] = !0;
  this.loadingDeps_ = [];
  JSCompiler_lcov_data_js_base_js[2459] = !0;
  this.depsToLoad_ = [];
  JSCompiler_lcov_data_js_base_js[2461] = !0;
  this.paused_ = !1;
  JSCompiler_lcov_data_js_base_js[2463] = !0;
  this.factory_ = new goog.DependencyFactory(goog.transpiler_);
  JSCompiler_lcov_data_js_base_js[2465] = !0;
  this.deferredCallbacks_ = {};
  JSCompiler_lcov_data_js_base_js[2467] = !0;
  this.deferredQueue_ = [];
}, JSCompiler_lcov_data_js_base_js[2475] = !0, goog.DebugLoader_.prototype.bootstrap = function(a, b) {
  JSCompiler_lcov_data_js_base_js[2475] = !0;
  function c() {
    JSCompiler_lcov_data_js_base_js[2477] = !0;
    JSCompiler_lcov_data_js_base_js[2478] = !0;
    d && (JSCompiler_lcov_data_js_base_js[2479] = !0, goog.global.setTimeout(d, 0), JSCompiler_lcov_data_js_base_js[2480] = !0, d = null);
  }
  JSCompiler_lcov_data_js_base_js[2476] = !0;
  var d = b;
  JSCompiler_lcov_data_js_base_js[2484] = !0;
  if (a.length) {
    JSCompiler_lcov_data_js_base_js[2489] = !0;
    b = [];
    JSCompiler_lcov_data_js_base_js[2490] = !0;
    var e = 0;
    for (JSCompiler_lcov_data_js_base_js[2490] = !0; e < a.length; e++) {
      JSCompiler_lcov_data_js_base_js[2491] = !0;
      var g = this.getPathFromDeps_(a[e]);
      JSCompiler_lcov_data_js_base_js[2492] = !0;
      if (!g) {
        throw JSCompiler_lcov_data_js_base_js[2493] = !0, Error("Unregonized namespace: " + a[e]);
      }
      JSCompiler_lcov_data_js_base_js[2495] = !0;
      b.push(this.dependencies_[g]);
    }
    JSCompiler_lcov_data_js_base_js[2498] = !0;
    g = goog.require;
    JSCompiler_lcov_data_js_base_js[2499] = !0;
    var f = 0;
    JSCompiler_lcov_data_js_base_js[2500] = !0;
    e = 0;
    for (JSCompiler_lcov_data_js_base_js[2500] = !0; e < a.length; e++) {
      JSCompiler_lcov_data_js_base_js[2501] = !0, g(a[e]), JSCompiler_lcov_data_js_base_js[2502] = !0, b[e].onLoad(function() {
        JSCompiler_lcov_data_js_base_js[2502] = !0;
        JSCompiler_lcov_data_js_base_js[2503] = !0;
        ++f == a.length && (JSCompiler_lcov_data_js_base_js[2504] = !0, c());
      });
    }
  } else {
    JSCompiler_lcov_data_js_base_js[2485] = !0, c(), JSCompiler_lcov_data_js_base_js[2486] = !0;
  }
}, JSCompiler_lcov_data_js_base_js[2518] = !0, goog.DebugLoader_.prototype.loadClosureDeps = function() {
  JSCompiler_lcov_data_js_base_js[2518] = !0;
  JSCompiler_lcov_data_js_base_js[2521] = !0;
  JSCompiler_lcov_data_js_base_js[2522] = !0;
  this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + "deps.js"), "deps.js", [], [], {}, !1));
  JSCompiler_lcov_data_js_base_js[2525] = !0;
  this.loadDeps_();
}, JSCompiler_lcov_data_js_base_js[2535] = !0, goog.DebugLoader_.prototype.requested = function(a, b) {
  JSCompiler_lcov_data_js_base_js[2535] = !0;
  JSCompiler_lcov_data_js_base_js[2536] = !0;
  a = this.getPathFromDeps_(a);
  JSCompiler_lcov_data_js_base_js[2537] = !0;
  a && (b || this.areDepsLoaded_(this.dependencies_[a].requires)) && (JSCompiler_lcov_data_js_base_js[2539] = !0, b = this.deferredCallbacks_[a], JSCompiler_lcov_data_js_base_js[2540] = !0, b && (JSCompiler_lcov_data_js_base_js[2541] = !0, delete this.deferredCallbacks_[a], JSCompiler_lcov_data_js_base_js[2542] = !0, b()));
}, JSCompiler_lcov_data_js_base_js[2554] = !0, goog.DebugLoader_.prototype.setDependencyFactory = function(a) {
  JSCompiler_lcov_data_js_base_js[2554] = !0;
  JSCompiler_lcov_data_js_base_js[2555] = !0;
  this.factory_ = a;
}, JSCompiler_lcov_data_js_base_js[2567] = !0, goog.DebugLoader_.prototype.load_ = function(a) {
  JSCompiler_lcov_data_js_base_js[2567] = !0;
  JSCompiler_lcov_data_js_base_js[2568] = !0;
  if (this.getPathFromDeps_(a)) {
    JSCompiler_lcov_data_js_base_js[2574] = !0;
    var b = this;
    JSCompiler_lcov_data_js_base_js[2576] = !0;
    var c = [];
    JSCompiler_lcov_data_js_base_js[2579] = !0;
    var d = function(e) {
      JSCompiler_lcov_data_js_base_js[2579] = !0;
      JSCompiler_lcov_data_js_base_js[2580] = !0;
      var g = b.getPathFromDeps_(e);
      JSCompiler_lcov_data_js_base_js[2582] = !0;
      if (!g) {
        throw JSCompiler_lcov_data_js_base_js[2583] = !0, Error("Bad dependency path or symbol: " + e);
      }
      JSCompiler_lcov_data_js_base_js[2586] = !0;
      if (b.written_[g]) {
        JSCompiler_lcov_data_js_base_js[2587] = !0;
      } else {
        JSCompiler_lcov_data_js_base_js[2590] = !0;
        b.written_[g] = !0;
        JSCompiler_lcov_data_js_base_js[2592] = !0;
        e = b.dependencies_[g];
        JSCompiler_lcov_data_js_base_js[2593] = !0;
        g = 0;
        for (JSCompiler_lcov_data_js_base_js[2593] = !0; g < e.requires.length; g++) {
          JSCompiler_lcov_data_js_base_js[2594] = !0, goog.isProvided_(e.requires[g]) || (JSCompiler_lcov_data_js_base_js[2595] = !0, d(e.requires[g]));
        }
        JSCompiler_lcov_data_js_base_js[2599] = !0;
        c.push(e);
      }
    };
    JSCompiler_lcov_data_js_base_js[2602] = !0;
    d(a);
    JSCompiler_lcov_data_js_base_js[2604] = !0;
    a = !!this.depsToLoad_.length;
    JSCompiler_lcov_data_js_base_js[2605] = !0;
    this.depsToLoad_ = this.depsToLoad_.concat(c);
    JSCompiler_lcov_data_js_base_js[2607] = !0;
    this.paused_ || a || (JSCompiler_lcov_data_js_base_js[2608] = !0, this.loadDeps_());
  } else {
    throw JSCompiler_lcov_data_js_base_js[2569] = !0, a = "goog.require could not find: " + a, JSCompiler_lcov_data_js_base_js[2571] = !0, goog.logToConsole_(a), JSCompiler_lcov_data_js_base_js[2572] = !0, Error(a);
  }
}, JSCompiler_lcov_data_js_base_js[2619] = !0, goog.DebugLoader_.prototype.loadDeps_ = function() {
  JSCompiler_lcov_data_js_base_js[2619] = !0;
  JSCompiler_lcov_data_js_base_js[2620] = !0;
  var a = this;
  JSCompiler_lcov_data_js_base_js[2621] = !0;
  var b = this.paused_;
  for (JSCompiler_lcov_data_js_base_js[2623] = !0; this.depsToLoad_.length && !b;) {
    JSCompiler_lcov_data_js_base_js[2624] = !0, function() {
      JSCompiler_lcov_data_js_base_js[2624] = !0;
      JSCompiler_lcov_data_js_base_js[2625] = !0;
      var c = !1;
      JSCompiler_lcov_data_js_base_js[2626] = !0;
      var d = a.depsToLoad_.shift();
      JSCompiler_lcov_data_js_base_js[2628] = !0;
      var e = !1;
      JSCompiler_lcov_data_js_base_js[2629] = !0;
      a.loading_(d);
      JSCompiler_lcov_data_js_base_js[2631] = !0;
      var g = {pause:function() {
        JSCompiler_lcov_data_js_base_js[2632] = !0;
        JSCompiler_lcov_data_js_base_js[2633] = !0;
        if (c) {
          throw JSCompiler_lcov_data_js_base_js[2634] = !0, Error("Cannot call pause after the call to load.");
        }
        b = JSCompiler_lcov_data_js_base_js[2636] = !0;
      }, resume:function() {
        JSCompiler_lcov_data_js_base_js[2639] = !0;
        JSCompiler_lcov_data_js_base_js[2640] = !0;
        c ? (JSCompiler_lcov_data_js_base_js[2641] = !0, a.resume_()) : (JSCompiler_lcov_data_js_base_js[2645] = !0, b = !1);
      }, loaded:function() {
        JSCompiler_lcov_data_js_base_js[2648] = !0;
        JSCompiler_lcov_data_js_base_js[2649] = !0;
        if (e) {
          throw JSCompiler_lcov_data_js_base_js[2650] = !0, Error("Double call to loaded.");
        }
        e = JSCompiler_lcov_data_js_base_js[2653] = !0;
        JSCompiler_lcov_data_js_base_js[2654] = !0;
        a.loaded_(d);
      }, pending:function() {
        JSCompiler_lcov_data_js_base_js[2656] = !0;
        JSCompiler_lcov_data_js_base_js[2658] = !0;
        var f = [];
        JSCompiler_lcov_data_js_base_js[2659] = !0;
        var n = 0;
        for (JSCompiler_lcov_data_js_base_js[2659] = !0; n < a.loadingDeps_.length; n++) {
          JSCompiler_lcov_data_js_base_js[2660] = !0, f.push(a.loadingDeps_[n]);
        }
        JSCompiler_lcov_data_js_base_js[2662] = !0;
        return f;
      }, setModuleState:function(f) {
        JSCompiler_lcov_data_js_base_js[2667] = !0;
        JSCompiler_lcov_data_js_base_js[2668] = !0;
        goog.moduleLoaderState_ = {type:f, moduleName:"", declareLegacyNamespace:!1};
      }, registerEs6ModuleExports:function(f, n, k) {
        JSCompiler_lcov_data_js_base_js[2675] = !0;
        JSCompiler_lcov_data_js_base_js[2677] = !0;
        k && (JSCompiler_lcov_data_js_base_js[2678] = !0, goog.loadedModules_[k] = {exports:n, type:goog.ModuleType.ES6, moduleId:k || ""});
      }, registerGoogModuleExports:function(f, n) {
        JSCompiler_lcov_data_js_base_js[2686] = !0;
        JSCompiler_lcov_data_js_base_js[2687] = !0;
        goog.loadedModules_[f] = {exports:n, type:goog.ModuleType.GOOG, moduleId:f};
      }, clearModuleState:function() {
        JSCompiler_lcov_data_js_base_js[2693] = !0;
        JSCompiler_lcov_data_js_base_js[2694] = !0;
        goog.moduleLoaderState_ = null;
      }, defer:function(f) {
        JSCompiler_lcov_data_js_base_js[2696] = !0;
        JSCompiler_lcov_data_js_base_js[2697] = !0;
        if (c) {
          throw JSCompiler_lcov_data_js_base_js[2698] = !0, Error("Cannot register with defer after the call to load.");
        }
        JSCompiler_lcov_data_js_base_js[2701] = !0;
        a.defer_(d, f);
      }, areDepsLoaded:function() {
        JSCompiler_lcov_data_js_base_js[2703] = !0;
        JSCompiler_lcov_data_js_base_js[2704] = !0;
        return a.areDepsLoaded_(d.requires);
      }};
      try {
        JSCompiler_lcov_data_js_base_js[2708] = !0, JSCompiler_lcov_data_js_base_js[2709] = !0, d.load(g);
      } finally {
        c = JSCompiler_lcov_data_js_base_js[2711] = !0;
      }
    }();
  }
  JSCompiler_lcov_data_js_base_js[2716] = !0;
  b && (JSCompiler_lcov_data_js_base_js[2717] = !0, this.pause_());
}, JSCompiler_lcov_data_js_base_js[2723] = !0, goog.DebugLoader_.prototype.pause_ = function() {
  JSCompiler_lcov_data_js_base_js[2723] = !0;
  this.paused_ = JSCompiler_lcov_data_js_base_js[2724] = !0;
}, JSCompiler_lcov_data_js_base_js[2729] = !0, goog.DebugLoader_.prototype.resume_ = function() {
  JSCompiler_lcov_data_js_base_js[2729] = !0;
  JSCompiler_lcov_data_js_base_js[2730] = !0;
  this.paused_ && (JSCompiler_lcov_data_js_base_js[2731] = !0, this.paused_ = !1, JSCompiler_lcov_data_js_base_js[2732] = !0, this.loadDeps_());
}, JSCompiler_lcov_data_js_base_js[2746] = !0, goog.DebugLoader_.prototype.loading_ = function(a) {
  JSCompiler_lcov_data_js_base_js[2746] = !0;
  JSCompiler_lcov_data_js_base_js[2747] = !0;
  this.loadingDeps_.push(a);
}, JSCompiler_lcov_data_js_base_js[2758] = !0, goog.DebugLoader_.prototype.loaded_ = function(a) {
  JSCompiler_lcov_data_js_base_js[2758] = !0;
  JSCompiler_lcov_data_js_base_js[2759] = !0;
  var b = 0;
  for (JSCompiler_lcov_data_js_base_js[2759] = !0; b < this.loadingDeps_.length; b++) {
    if (JSCompiler_lcov_data_js_base_js[2760] = !0, this.loadingDeps_[b] == a) {
      JSCompiler_lcov_data_js_base_js[2761] = !0;
      this.loadingDeps_.splice(b, 1);
      JSCompiler_lcov_data_js_base_js[2762] = !0;
      break;
    }
  }
  JSCompiler_lcov_data_js_base_js[2766] = !0;
  b = 0;
  for (JSCompiler_lcov_data_js_base_js[2766] = !0; b < this.deferredQueue_.length; b++) {
    if (JSCompiler_lcov_data_js_base_js[2767] = !0, this.deferredQueue_[b] == a.path) {
      JSCompiler_lcov_data_js_base_js[2768] = !0;
      this.deferredQueue_.splice(b, 1);
      JSCompiler_lcov_data_js_base_js[2769] = !0;
      break;
    }
  }
  JSCompiler_lcov_data_js_base_js[2773] = !0;
  if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length) {
    for (JSCompiler_lcov_data_js_base_js[2778] = !0; this.deferredQueue_.length;) {
      JSCompiler_lcov_data_js_base_js[2779] = !0, this.requested(this.deferredQueue_.shift(), !0);
    }
  }
  JSCompiler_lcov_data_js_base_js[2783] = !0;
  a.loaded();
}, JSCompiler_lcov_data_js_base_js[2792] = !0, goog.DebugLoader_.prototype.areDepsLoaded_ = function(a) {
  JSCompiler_lcov_data_js_base_js[2792] = !0;
  JSCompiler_lcov_data_js_base_js[2793] = !0;
  var b = 0;
  for (JSCompiler_lcov_data_js_base_js[2793] = !0; b < a.length; b++) {
    JSCompiler_lcov_data_js_base_js[2794] = !0;
    var c = this.getPathFromDeps_(a[b]);
    JSCompiler_lcov_data_js_base_js[2795] = !0;
    if (!c || !(c in this.deferredCallbacks_ || goog.isProvided_(a[b]))) {
      return JSCompiler_lcov_data_js_base_js[2798] = !0, !1;
    }
  }
  return JSCompiler_lcov_data_js_base_js[2802] = !0;
}, JSCompiler_lcov_data_js_base_js[2811] = !0, goog.DebugLoader_.prototype.getPathFromDeps_ = function(a) {
  JSCompiler_lcov_data_js_base_js[2811] = !0;
  JSCompiler_lcov_data_js_base_js[2812] = !0;
  if (a in this.idToPath_) {
    return JSCompiler_lcov_data_js_base_js[2813] = !0, this.idToPath_[a];
  }
  JSCompiler_lcov_data_js_base_js[2814] = !0;
  if (a in this.dependencies_) {
    return JSCompiler_lcov_data_js_base_js[2815] = !0, a;
  }
  JSCompiler_lcov_data_js_base_js[2817] = !0;
  return null;
}, JSCompiler_lcov_data_js_base_js[2827] = !0, goog.DebugLoader_.prototype.defer_ = function(a, b) {
  JSCompiler_lcov_data_js_base_js[2827] = !0;
  JSCompiler_lcov_data_js_base_js[2828] = !0;
  this.deferredCallbacks_[a.path] = b;
  JSCompiler_lcov_data_js_base_js[2829] = !0;
  this.deferredQueue_.push(a.path);
}, JSCompiler_lcov_data_js_base_js[2839] = !0, goog.LoadController = function() {
  JSCompiler_lcov_data_js_base_js[2839] = !0;
}, JSCompiler_lcov_data_js_base_js[2845] = !0, goog.LoadController.prototype.pause = function() {
  JSCompiler_lcov_data_js_base_js[2845] = !0;
}, JSCompiler_lcov_data_js_base_js[2851] = !0, goog.LoadController.prototype.resume = function() {
  JSCompiler_lcov_data_js_base_js[2851] = !0;
}, JSCompiler_lcov_data_js_base_js[2860] = !0, goog.LoadController.prototype.loaded = function() {
  JSCompiler_lcov_data_js_base_js[2860] = !0;
}, JSCompiler_lcov_data_js_base_js[2869] = !0, goog.LoadController.prototype.pending = function() {
  JSCompiler_lcov_data_js_base_js[2869] = !0;
}, JSCompiler_lcov_data_js_base_js[2881] = !0, goog.LoadController.prototype.registerEs6ModuleExports = function(a, b, c) {
  JSCompiler_lcov_data_js_base_js[2881] = !0;
}, JSCompiler_lcov_data_js_base_js[2890] = !0, goog.LoadController.prototype.setModuleState = function(a) {
  JSCompiler_lcov_data_js_base_js[2890] = !0;
}, JSCompiler_lcov_data_js_base_js[2896] = !0, goog.LoadController.prototype.clearModuleState = function() {
  JSCompiler_lcov_data_js_base_js[2896] = !0;
}, JSCompiler_lcov_data_js_base_js[2907] = !0, goog.LoadController.prototype.defer = function(a) {
  JSCompiler_lcov_data_js_base_js[2907] = !0;
}, JSCompiler_lcov_data_js_base_js[2913] = !0, goog.LoadController.prototype.areDepsLoaded = function() {
  JSCompiler_lcov_data_js_base_js[2913] = !0;
}, JSCompiler_lcov_data_js_base_js[2935] = !0, goog.Dependency = function(a, b, c, d, e) {
  JSCompiler_lcov_data_js_base_js[2935] = !0;
  JSCompiler_lcov_data_js_base_js[2938] = !0;
  this.path = a;
  JSCompiler_lcov_data_js_base_js[2940] = !0;
  this.relativePath = b;
  JSCompiler_lcov_data_js_base_js[2942] = !0;
  this.provides = c;
  JSCompiler_lcov_data_js_base_js[2944] = !0;
  this.requires = d;
  JSCompiler_lcov_data_js_base_js[2946] = !0;
  this.loadFlags = e;
  JSCompiler_lcov_data_js_base_js[2948] = !0;
  this.loaded_ = !1;
  JSCompiler_lcov_data_js_base_js[2950] = !0;
  this.loadCallbacks_ = [];
}, JSCompiler_lcov_data_js_base_js[2958] = !0, goog.Dependency.prototype.getPathName = function() {
  JSCompiler_lcov_data_js_base_js[2958] = !0;
  JSCompiler_lcov_data_js_base_js[2959] = !0;
  var a = this.path;
  JSCompiler_lcov_data_js_base_js[2960] = !0;
  var b = a.indexOf("://");
  JSCompiler_lcov_data_js_base_js[2961] = !0;
  0 <= b && (JSCompiler_lcov_data_js_base_js[2962] = !0, a = a.substring(b + 3), JSCompiler_lcov_data_js_base_js[2963] = !0, b = a.indexOf("/"), JSCompiler_lcov_data_js_base_js[2964] = !0, 0 <= b && (JSCompiler_lcov_data_js_base_js[2965] = !0, a = a.substring(b + 1)));
  JSCompiler_lcov_data_js_base_js[2968] = !0;
  return a;
}, JSCompiler_lcov_data_js_base_js[2976] = !0, goog.Dependency.prototype.onLoad = function(a) {
  JSCompiler_lcov_data_js_base_js[2976] = !0;
  JSCompiler_lcov_data_js_base_js[2977] = !0;
  this.loaded_ ? (JSCompiler_lcov_data_js_base_js[2978] = !0, a()) : (JSCompiler_lcov_data_js_base_js[2980] = !0, this.loadCallbacks_.push(a));
}, JSCompiler_lcov_data_js_base_js[2990] = !0, goog.Dependency.prototype.loaded = function() {
  JSCompiler_lcov_data_js_base_js[2990] = !0;
  this.loaded_ = JSCompiler_lcov_data_js_base_js[2991] = !0;
  JSCompiler_lcov_data_js_base_js[2992] = !0;
  var a = this.loadCallbacks_;
  JSCompiler_lcov_data_js_base_js[2993] = !0;
  this.loadCallbacks_ = [];
  JSCompiler_lcov_data_js_base_js[2994] = !0;
  var b = 0;
  for (JSCompiler_lcov_data_js_base_js[2994] = !0; b < a.length; b++) {
    JSCompiler_lcov_data_js_base_js[2995] = !0, a[b]();
  }
}, JSCompiler_lcov_data_js_base_js[3005] = !0, goog.Dependency.defer_ = !1, JSCompiler_lcov_data_js_base_js[3014] = !0, goog.Dependency.callbackMap_ = {}, JSCompiler_lcov_data_js_base_js[3022] = !0, goog.Dependency.registerCallback_ = function(a) {
  JSCompiler_lcov_data_js_base_js[3022] = !0;
  JSCompiler_lcov_data_js_base_js[3023] = !0;
  var b = Math.random().toString(32);
  JSCompiler_lcov_data_js_base_js[3024] = !0;
  goog.Dependency.callbackMap_[b] = a;
  JSCompiler_lcov_data_js_base_js[3025] = !0;
  return b;
}, JSCompiler_lcov_data_js_base_js[3033] = !0, goog.Dependency.unregisterCallback_ = function(a) {
  JSCompiler_lcov_data_js_base_js[3033] = !0;
  JSCompiler_lcov_data_js_base_js[3034] = !0;
  delete goog.Dependency.callbackMap_[a];
}, JSCompiler_lcov_data_js_base_js[3044] = !0, goog.Dependency.callback_ = function(a, b) {
  JSCompiler_lcov_data_js_base_js[3044] = !0;
  JSCompiler_lcov_data_js_base_js[3045] = !0;
  if (a in goog.Dependency.callbackMap_) {
    JSCompiler_lcov_data_js_base_js[3046] = !0;
    var c = goog.Dependency.callbackMap_[a];
    JSCompiler_lcov_data_js_base_js[3047] = !0;
    var d = [];
    JSCompiler_lcov_data_js_base_js[3048] = !0;
    var e = 1;
    for (JSCompiler_lcov_data_js_base_js[3048] = !0; e < arguments.length; e++) {
      JSCompiler_lcov_data_js_base_js[3049] = !0, d.push(arguments[e]);
    }
    JSCompiler_lcov_data_js_base_js[3051] = !0;
    c.apply(void 0, d);
  } else {
    throw JSCompiler_lcov_data_js_base_js[3053] = !0, JSCompiler_lcov_data_js_base_js[3055] = !0, Error("Callback key " + a + " does not exist (was base.js loaded more than once?).");
  }
}, JSCompiler_lcov_data_js_base_js[3070] = !0, goog.Dependency.prototype.load = function(a) {
  JSCompiler_lcov_data_js_base_js[3070] = !0;
  JSCompiler_lcov_data_js_base_js[3071] = !0;
  if (goog.global.CLOSURE_IMPORT_SCRIPT) {
    JSCompiler_lcov_data_js_base_js[3072] = !0, goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? (JSCompiler_lcov_data_js_base_js[3073] = !0, a.loaded()) : (JSCompiler_lcov_data_js_base_js[3075] = !0, a.pause()), JSCompiler_lcov_data_js_base_js[3077] = !0;
  } else {
    if (JSCompiler_lcov_data_js_base_js[3080] = !0, goog.inHtmlDocument_()) {
      JSCompiler_lcov_data_js_base_js[3099] = !0;
      var b = goog.global.document;
      JSCompiler_lcov_data_js_base_js[3105] = !0;
      if ("complete" == b.readyState && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
        JSCompiler_lcov_data_js_base_js[3111] = !0;
        b = /\bdeps.js$/.test(this.path);
        JSCompiler_lcov_data_js_base_js[3112] = !0;
        if (b) {
          JSCompiler_lcov_data_js_base_js[3113] = !0;
          a.loaded();
          JSCompiler_lcov_data_js_base_js[3114] = !0;
          return;
        }
        JSCompiler_lcov_data_js_base_js[3116] = !0;
        throw Error('Cannot write "' + this.path + '" after document load');
      }
      JSCompiler_lcov_data_js_base_js[3120] = !0;
      if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
        JSCompiler_lcov_data_js_base_js[3122] = !0;
        var c = goog.Dependency.registerCallback_(function(n) {
          JSCompiler_lcov_data_js_base_js[3122] = !0;
          JSCompiler_lcov_data_js_base_js[3123] = !0;
          goog.DebugLoader_.IS_OLD_IE_ && "complete" != n.readyState || (JSCompiler_lcov_data_js_base_js[3124] = !0, goog.Dependency.unregisterCallback_(c), JSCompiler_lcov_data_js_base_js[3125] = !0, a.loaded());
        });
        JSCompiler_lcov_data_js_base_js[3128] = !0;
        var d = !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce() ? ' nonce="' + goog.getScriptNonce() + '"' : "";
        JSCompiler_lcov_data_js_base_js[3131] = !0;
        var e = goog.DebugLoader_.IS_OLD_IE_ ? "onreadystatechange" : "onload";
        JSCompiler_lcov_data_js_base_js[3133] = !0;
        var g = goog.Dependency.defer_ ? "defer" : "";
        JSCompiler_lcov_data_js_base_js[3134] = !0;
        d = '<script src="' + this.path + '" ' + e + "=\"goog.Dependency.callback_('" + c + '\', this)" type="text/javascript" ' + g + d + ">\x3c/script>";
        JSCompiler_lcov_data_js_base_js[3138] = !0;
        b.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(d) : d);
      } else {
        JSCompiler_lcov_data_js_base_js[3143] = !0;
        var f = b.createElement("script");
        JSCompiler_lcov_data_js_base_js[3145] = !0;
        f.defer = goog.Dependency.defer_;
        JSCompiler_lcov_data_js_base_js[3146] = !0;
        f.async = !1;
        JSCompiler_lcov_data_js_base_js[3147] = !0;
        f.type = "text/javascript";
        JSCompiler_lcov_data_js_base_js[3151] = !0;
        d = goog.getScriptNonce();
        JSCompiler_lcov_data_js_base_js[3152] = !0;
        d && (JSCompiler_lcov_data_js_base_js[3153] = !0, f.setAttribute("nonce", d));
        JSCompiler_lcov_data_js_base_js[3156] = !0;
        goog.DebugLoader_.IS_OLD_IE_ ? (JSCompiler_lcov_data_js_base_js[3159] = !0, a.pause(), JSCompiler_lcov_data_js_base_js[3160] = !0, f.onreadystatechange = function() {
          JSCompiler_lcov_data_js_base_js[3160] = !0;
          JSCompiler_lcov_data_js_base_js[3161] = !0;
          if ("loaded" == f.readyState || "complete" == f.readyState) {
            JSCompiler_lcov_data_js_base_js[3163] = !0, a.loaded(), JSCompiler_lcov_data_js_base_js[3164] = !0, a.resume();
          }
        }) : (JSCompiler_lcov_data_js_base_js[3168] = !0, f.onload = function() {
          JSCompiler_lcov_data_js_base_js[3168] = !0;
          JSCompiler_lcov_data_js_base_js[3169] = !0;
          f.onload = null;
          JSCompiler_lcov_data_js_base_js[3170] = !0;
          a.loaded();
        });
        JSCompiler_lcov_data_js_base_js[3174] = !0;
        f.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path;
        JSCompiler_lcov_data_js_base_js[3177] = !0;
        b.head.appendChild(f);
      }
    } else {
      JSCompiler_lcov_data_js_base_js[3081] = !0, goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), JSCompiler_lcov_data_js_base_js[3083] = !0, "deps.js" == this.relativePath ? (JSCompiler_lcov_data_js_base_js[3088] = !0, goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."), JSCompiler_lcov_data_js_base_js[3091] = !0, a.loaded()) : (JSCompiler_lcov_data_js_base_js[3093] = !0, a.pause()), JSCompiler_lcov_data_js_base_js[3095] = 
      !0;
    }
  }
}, JSCompiler_lcov_data_js_base_js[3194] = !0, goog.Es6ModuleDependency = function(a, b, c, d, e) {
  JSCompiler_lcov_data_js_base_js[3194] = !0;
  JSCompiler_lcov_data_js_base_js[3196] = !0;
  goog.Dependency.call(this, a, b, c, d, e);
}, JSCompiler_lcov_data_js_base_js[3199] = !0, goog.inherits(goog.Es6ModuleDependency, goog.Dependency), JSCompiler_lcov_data_js_base_js[3203] = !0, goog.Es6ModuleDependency.prototype.load = function(a) {
  JSCompiler_lcov_data_js_base_js[3203] = !0;
  function b(h, l) {
    JSCompiler_lcov_data_js_base_js[3228] = !0;
    JSCompiler_lcov_data_js_base_js[3229] = !0;
    l ? (JSCompiler_lcov_data_js_base_js[3230] = !0, h = '<script type="module" crossorigin>' + l + "\x3c/script>", JSCompiler_lcov_data_js_base_js[3232] = !0) : (JSCompiler_lcov_data_js_base_js[3237] = !0, h = '<script type="module" crossorigin src="' + h + '">\x3c/script>', JSCompiler_lcov_data_js_base_js[3239] = !0);
    d.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(h) : h);
  }
  function c(h, l) {
    JSCompiler_lcov_data_js_base_js[3246] = !0;
    JSCompiler_lcov_data_js_base_js[3247] = !0;
    var m = d.createElement("script");
    JSCompiler_lcov_data_js_base_js[3249] = !0;
    m.defer = !0;
    JSCompiler_lcov_data_js_base_js[3250] = !0;
    m.async = !1;
    JSCompiler_lcov_data_js_base_js[3251] = !0;
    m.type = "module";
    JSCompiler_lcov_data_js_base_js[3252] = !0;
    m.setAttribute("crossorigin", !0);
    JSCompiler_lcov_data_js_base_js[3256] = !0;
    var p = goog.getScriptNonce();
    JSCompiler_lcov_data_js_base_js[3257] = !0;
    p && (JSCompiler_lcov_data_js_base_js[3258] = !0, m.setAttribute("nonce", p));
    JSCompiler_lcov_data_js_base_js[3261] = !0;
    l ? (JSCompiler_lcov_data_js_base_js[3262] = !0, m.textContent = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(l) : l) : (JSCompiler_lcov_data_js_base_js[3266] = !0, m.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(h) : h);
    JSCompiler_lcov_data_js_base_js[3271] = !0;
    d.head.appendChild(m);
  }
  JSCompiler_lcov_data_js_base_js[3204] = !0;
  if (goog.global.CLOSURE_IMPORT_SCRIPT) {
    JSCompiler_lcov_data_js_base_js[3205] = !0, goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? (JSCompiler_lcov_data_js_base_js[3206] = !0, a.loaded()) : (JSCompiler_lcov_data_js_base_js[3208] = !0, a.pause()), JSCompiler_lcov_data_js_base_js[3210] = !0;
  } else {
    if (JSCompiler_lcov_data_js_base_js[3213] = !0, goog.inHtmlDocument_()) {
      JSCompiler_lcov_data_js_base_js[3221] = !0;
      var d = goog.global.document;
      JSCompiler_lcov_data_js_base_js[3223] = !0;
      var e = this;
      JSCompiler_lcov_data_js_base_js[3274] = !0;
      JSCompiler_lcov_data_js_base_js[3276] = !0;
      if (goog.isDocumentLoading_()) {
        JSCompiler_lcov_data_js_base_js[3277] = !0;
        var g = b;
        JSCompiler_lcov_data_js_base_js[3281] = !0;
        goog.Dependency.defer_ = !0;
      } else {
        JSCompiler_lcov_data_js_base_js[3283] = !0, g = c;
      }
      JSCompiler_lcov_data_js_base_js[3294] = !0;
      var f = goog.Dependency.registerCallback_(function() {
        JSCompiler_lcov_data_js_base_js[3294] = !0;
        JSCompiler_lcov_data_js_base_js[3295] = !0;
        goog.Dependency.unregisterCallback_(f);
        JSCompiler_lcov_data_js_base_js[3296] = !0;
        a.setModuleState(goog.ModuleType.ES6);
      });
      JSCompiler_lcov_data_js_base_js[3298] = !0;
      g(void 0, 'goog.Dependency.callback_("' + f + '")');
      JSCompiler_lcov_data_js_base_js[3301] = !0;
      g(this.path, void 0);
      JSCompiler_lcov_data_js_base_js[3303] = !0;
      var n = goog.Dependency.registerCallback_(function(h) {
        JSCompiler_lcov_data_js_base_js[3303] = !0;
        JSCompiler_lcov_data_js_base_js[3304] = !0;
        goog.Dependency.unregisterCallback_(n);
        JSCompiler_lcov_data_js_base_js[3305] = !0;
        a.registerEs6ModuleExports(e.path, h, goog.moduleLoaderState_.moduleName);
      });
      JSCompiler_lcov_data_js_base_js[3308] = !0;
      g(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + n + '", m)');
      JSCompiler_lcov_data_js_base_js[3313] = !0;
      var k = goog.Dependency.registerCallback_(function() {
        JSCompiler_lcov_data_js_base_js[3313] = !0;
        JSCompiler_lcov_data_js_base_js[3314] = !0;
        goog.Dependency.unregisterCallback_(k);
        JSCompiler_lcov_data_js_base_js[3315] = !0;
        a.clearModuleState();
        JSCompiler_lcov_data_js_base_js[3316] = !0;
        a.loaded();
      });
      JSCompiler_lcov_data_js_base_js[3318] = !0;
      g(void 0, 'goog.Dependency.callback_("' + k + '")');
    } else {
      JSCompiler_lcov_data_js_base_js[3214] = !0, goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), JSCompiler_lcov_data_js_base_js[3216] = !0, a.pause(), JSCompiler_lcov_data_js_base_js[3217] = !0;
    }
  }
}, JSCompiler_lcov_data_js_base_js[3336] = !0, goog.TransformedDependency = function(a, b, c, d, e) {
  JSCompiler_lcov_data_js_base_js[3336] = !0;
  JSCompiler_lcov_data_js_base_js[3338] = !0;
  goog.Dependency.call(this, a, b, c, d, e);
  JSCompiler_lcov_data_js_base_js[3341] = !0;
  this.contents_ = null;
  JSCompiler_lcov_data_js_base_js[3356] = !0;
  this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"));
}, JSCompiler_lcov_data_js_base_js[3359] = !0, goog.inherits(goog.TransformedDependency, goog.Dependency), JSCompiler_lcov_data_js_base_js[3363] = !0, goog.TransformedDependency.prototype.load = function(a) {
  JSCompiler_lcov_data_js_base_js[3363] = !0;
  function b() {
    JSCompiler_lcov_data_js_base_js[3366] = !0;
    JSCompiler_lcov_data_js_base_js[3367] = !0;
    e.contents_ = goog.loadFileSync_(e.path);
    JSCompiler_lcov_data_js_base_js[3369] = !0;
    e.contents_ && (JSCompiler_lcov_data_js_base_js[3370] = !0, e.contents_ = e.transform(e.contents_), JSCompiler_lcov_data_js_base_js[3371] = !0, e.contents_ && (JSCompiler_lcov_data_js_base_js[3372] = !0, e.contents_ += "\n//# sourceURL=" + e.path));
  }
  function c() {
    JSCompiler_lcov_data_js_base_js[3396] = !0;
    JSCompiler_lcov_data_js_base_js[3397] = !0;
    e.lazyFetch_ && (JSCompiler_lcov_data_js_base_js[3398] = !0, b());
    JSCompiler_lcov_data_js_base_js[3401] = !0;
    if (e.contents_) {
      JSCompiler_lcov_data_js_base_js[3407] = !0;
      g && (JSCompiler_lcov_data_js_base_js[3408] = !0, a.setModuleState(goog.ModuleType.ES6));
      JSCompiler_lcov_data_js_base_js[3411] = !0;
      try {
        JSCompiler_lcov_data_js_base_js[3413] = !0;
        JSCompiler_lcov_data_js_base_js[3414] = !0;
        var l = e.contents_;
        JSCompiler_lcov_data_js_base_js[3415] = !0;
        e.contents_ = null;
        JSCompiler_lcov_data_js_base_js[3416] = !0;
        goog.globalEval(l);
        JSCompiler_lcov_data_js_base_js[3417] = !0;
        if (g) {
          JSCompiler_lcov_data_js_base_js[3418] = !0;
          var m = goog.moduleLoaderState_.moduleName;
        }
      } finally {
        JSCompiler_lcov_data_js_base_js[3421] = !0, g && (JSCompiler_lcov_data_js_base_js[3422] = !0, a.clearModuleState());
      }
      JSCompiler_lcov_data_js_base_js[3426] = !0;
      g && (JSCompiler_lcov_data_js_base_js[3429] = !0, goog.global.$jscomp.require.ensure([e.getPathName()], function() {
        JSCompiler_lcov_data_js_base_js[3430] = !0;
        JSCompiler_lcov_data_js_base_js[3431] = !0;
        a.registerEs6ModuleExports(e.path, goog.global.$jscomp.require(e.getPathName()), m);
      }));
      JSCompiler_lcov_data_js_base_js[3438] = !0;
      a.loaded();
    } else {
      JSCompiler_lcov_data_js_base_js[3404] = !0;
    }
  }
  function d() {
    JSCompiler_lcov_data_js_base_js[3445] = !0;
    JSCompiler_lcov_data_js_base_js[3447] = !0;
    var l = goog.global.document;
    JSCompiler_lcov_data_js_base_js[3449] = !0;
    var m = goog.Dependency.registerCallback_(function() {
      JSCompiler_lcov_data_js_base_js[3449] = !0;
      JSCompiler_lcov_data_js_base_js[3450] = !0;
      goog.Dependency.unregisterCallback_(m);
      JSCompiler_lcov_data_js_base_js[3451] = !0;
      c();
    });
    JSCompiler_lcov_data_js_base_js[3454] = !0;
    var p = '<script type="text/javascript">' + goog.protectScriptTag_('goog.Dependency.callback_("' + m + '");') + "\x3c/script>";
    JSCompiler_lcov_data_js_base_js[3458] = !0;
    l.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(p) : p);
  }
  JSCompiler_lcov_data_js_base_js[3364] = !0;
  var e = this;
  JSCompiler_lcov_data_js_base_js[3377] = !0;
  if (goog.global.CLOSURE_IMPORT_SCRIPT) {
    JSCompiler_lcov_data_js_base_js[3378] = !0, b(), JSCompiler_lcov_data_js_base_js[3379] = !0, this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (JSCompiler_lcov_data_js_base_js[3381] = !0, this.contents_ = null, JSCompiler_lcov_data_js_base_js[3382] = !0, a.loaded()) : (JSCompiler_lcov_data_js_base_js[3384] = !0, a.pause()), JSCompiler_lcov_data_js_base_js[3386] = !0;
  } else {
    JSCompiler_lcov_data_js_base_js[3390] = !0;
    var g = this.loadFlags.module == goog.ModuleType.ES6;
    JSCompiler_lcov_data_js_base_js[3392] = !0;
    this.lazyFetch_ || (JSCompiler_lcov_data_js_base_js[3393] = !0, b());
    JSCompiler_lcov_data_js_base_js[3465] = !0;
    var f = 1 < a.pending().length;
    JSCompiler_lcov_data_js_base_js[3471] = !0;
    var n = f && goog.DebugLoader_.IS_OLD_IE_;
    JSCompiler_lcov_data_js_base_js[3479] = !0;
    f = goog.Dependency.defer_ && (f || goog.isDocumentLoading_());
    JSCompiler_lcov_data_js_base_js[3482] = !0;
    if (n || f) {
      JSCompiler_lcov_data_js_base_js[3487] = !0, a.defer(function() {
        JSCompiler_lcov_data_js_base_js[3487] = !0;
        JSCompiler_lcov_data_js_base_js[3488] = !0;
        c();
      }), JSCompiler_lcov_data_js_base_js[3490] = !0;
    } else {
      JSCompiler_lcov_data_js_base_js[3495] = !0;
      var k = goog.global.document;
      JSCompiler_lcov_data_js_base_js[3497] = !0;
      n = goog.inHtmlDocument_() && "ActiveXObject" in goog.global;
      JSCompiler_lcov_data_js_base_js[3506] = !0;
      if (g && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !n) {
        JSCompiler_lcov_data_js_base_js[3508] = !0;
        goog.Dependency.defer_ = !0;
        JSCompiler_lcov_data_js_base_js[3511] = !0;
        a.pause();
        JSCompiler_lcov_data_js_base_js[3512] = !0;
        var h = k.onreadystatechange;
        JSCompiler_lcov_data_js_base_js[3513] = !0;
        k.onreadystatechange = function() {
          JSCompiler_lcov_data_js_base_js[3513] = !0;
          JSCompiler_lcov_data_js_base_js[3514] = !0;
          "interactive" == k.readyState && (JSCompiler_lcov_data_js_base_js[3515] = !0, k.onreadystatechange = h, JSCompiler_lcov_data_js_base_js[3516] = !0, c(), JSCompiler_lcov_data_js_base_js[3517] = !0, a.resume());
          JSCompiler_lcov_data_js_base_js[3519] = !0;
          goog.isFunction(h) && (JSCompiler_lcov_data_js_base_js[3520] = !0, h.apply(void 0, arguments));
        };
      } else {
        JSCompiler_lcov_data_js_base_js[3525] = !0, !goog.DebugLoader_.IS_OLD_IE_ && goog.inHtmlDocument_() && goog.isDocumentLoading_() ? (JSCompiler_lcov_data_js_base_js[3529] = !0, d()) : (JSCompiler_lcov_data_js_base_js[3527] = !0, c());
      }
    }
  }
}, JSCompiler_lcov_data_js_base_js[3540] = !0, goog.TransformedDependency.prototype.transform = function(a) {
  JSCompiler_lcov_data_js_base_js[3540] = !0;
}, JSCompiler_lcov_data_js_base_js[3557] = !0, goog.TranspiledDependency = function(a, b, c, d, e, g) {
  JSCompiler_lcov_data_js_base_js[3557] = !0;
  JSCompiler_lcov_data_js_base_js[3559] = !0;
  goog.TransformedDependency.call(this, a, b, c, d, e);
  JSCompiler_lcov_data_js_base_js[3562] = !0;
  this.transpiler = g;
}, JSCompiler_lcov_data_js_base_js[3564] = !0, goog.inherits(goog.TranspiledDependency, goog.TransformedDependency), JSCompiler_lcov_data_js_base_js[3568] = !0, goog.TranspiledDependency.prototype.transform = function(a) {
  JSCompiler_lcov_data_js_base_js[3568] = !0;
  JSCompiler_lcov_data_js_base_js[3570] = !0;
  return this.transpiler.transpile(a, this.getPathName());
}, JSCompiler_lcov_data_js_base_js[3588] = !0, goog.PreTranspiledEs6ModuleDependency = function(a, b, c, d, e) {
  JSCompiler_lcov_data_js_base_js[3588] = !0;
  JSCompiler_lcov_data_js_base_js[3590] = !0;
  goog.TransformedDependency.call(this, a, b, c, d, e);
}, JSCompiler_lcov_data_js_base_js[3593] = !0, goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency), JSCompiler_lcov_data_js_base_js[3598] = !0, goog.PreTranspiledEs6ModuleDependency.prototype.transform = function(a) {
  JSCompiler_lcov_data_js_base_js[3598] = !0;
  JSCompiler_lcov_data_js_base_js[3600] = !0;
  return a;
}, JSCompiler_lcov_data_js_base_js[3621] = !0, goog.GoogModuleDependency = function(a, b, c, d, e, g, f) {
  JSCompiler_lcov_data_js_base_js[3621] = !0;
  JSCompiler_lcov_data_js_base_js[3624] = !0;
  goog.TransformedDependency.call(this, a, b, c, d, e);
  JSCompiler_lcov_data_js_base_js[3627] = !0;
  this.needsTranspile_ = g;
  JSCompiler_lcov_data_js_base_js[3629] = !0;
  this.transpiler_ = f;
}, JSCompiler_lcov_data_js_base_js[3631] = !0, goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency), JSCompiler_lcov_data_js_base_js[3635] = !0, goog.GoogModuleDependency.prototype.transform = function(a) {
  JSCompiler_lcov_data_js_base_js[3635] = !0;
  JSCompiler_lcov_data_js_base_js[3636] = !0;
  this.needsTranspile_ && (JSCompiler_lcov_data_js_base_js[3637] = !0, a = this.transpiler_.transpile(a, this.getPathName()));
  JSCompiler_lcov_data_js_base_js[3640] = !0;
  if (goog.LOAD_MODULE_USING_EVAL && void 0 !== goog.global.JSON) {
    return JSCompiler_lcov_data_js_base_js[3649] = !0, "goog.loadModule(" + goog.global.JSON.stringify(a + "\n//# sourceURL=" + this.path + "\n") + ");";
  }
  JSCompiler_lcov_data_js_base_js[3641] = !0;
  return 'goog.loadModule(function(exports) {"use strict";' + a + "\n;return exports});\n//# sourceURL=" + this.path + "\n";
}, JSCompiler_lcov_data_js_base_js[3663] = !0, goog.DebugLoader_.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), JSCompiler_lcov_data_js_base_js[3674] = !0, goog.DebugLoader_.prototype.addDependency = function(a, b, c, d) {
  JSCompiler_lcov_data_js_base_js[3674] = !0;
  JSCompiler_lcov_data_js_base_js[3676] = !0;
  b = b || [];
  JSCompiler_lcov_data_js_base_js[3677] = !0;
  a = a.replace(/\\/g, "/");
  JSCompiler_lcov_data_js_base_js[3678] = !0;
  var e = goog.normalizePath_(goog.basePath + a);
  JSCompiler_lcov_data_js_base_js[3679] = !0;
  d && "boolean" !== typeof d || (JSCompiler_lcov_data_js_base_js[3680] = !0, d = d ? {module:goog.ModuleType.GOOG} : {});
  JSCompiler_lcov_data_js_base_js[3682] = !0;
  c = this.factory_.createDependency(e, a, b, c, d, goog.transpiler_.needsTranspile(d.lang || "es3", d.module));
  JSCompiler_lcov_data_js_base_js[3686] = !0;
  this.dependencies_[e] = c;
  JSCompiler_lcov_data_js_base_js[3687] = !0;
  c = 0;
  for (JSCompiler_lcov_data_js_base_js[3687] = !0; c < b.length; c++) {
    JSCompiler_lcov_data_js_base_js[3688] = !0, this.idToPath_[b[c]] = e;
  }
  JSCompiler_lcov_data_js_base_js[3690] = !0;
  this.idToPath_[a] = e;
}, JSCompiler_lcov_data_js_base_js[3703] = !0, goog.DependencyFactory = function(a) {
  JSCompiler_lcov_data_js_base_js[3703] = !0;
  JSCompiler_lcov_data_js_base_js[3705] = !0;
  this.transpiler = a;
}, JSCompiler_lcov_data_js_base_js[3720] = !0, goog.DependencyFactory.prototype.createDependency = function(a, b, c, d, e, g) {
  JSCompiler_lcov_data_js_base_js[3720] = !0;
  JSCompiler_lcov_data_js_base_js[3722] = !0;
  if (e.module == goog.ModuleType.GOOG) {
    return JSCompiler_lcov_data_js_base_js[3723] = !0, new goog.GoogModuleDependency(a, b, c, d, e, g, this.transpiler);
  }
  JSCompiler_lcov_data_js_base_js[3726] = !0;
  if (g) {
    return JSCompiler_lcov_data_js_base_js[3727] = !0, new goog.TranspiledDependency(a, b, c, d, e, this.transpiler);
  }
  JSCompiler_lcov_data_js_base_js[3730] = !0;
  if (e.module == goog.ModuleType.ES6) {
    JSCompiler_lcov_data_js_base_js[3731] = !0;
    if ("never" == goog.TRANSPILE && goog.ASSUME_ES_MODULES_TRANSPILED) {
      return JSCompiler_lcov_data_js_base_js[3732] = !0, new goog.PreTranspiledEs6ModuleDependency(a, b, c, d, e);
    }
    JSCompiler_lcov_data_js_base_js[3735] = !0;
    return new goog.Es6ModuleDependency(a, b, c, d, e);
  }
  JSCompiler_lcov_data_js_base_js[3739] = !0;
  return new goog.Dependency(a, b, c, d, e);
}, JSCompiler_lcov_data_js_base_js[3747] = !0, goog.debugLoader_ = new goog.DebugLoader_, JSCompiler_lcov_data_js_base_js[3757] = !0, goog.loadClosureDeps = function() {
  JSCompiler_lcov_data_js_base_js[3757] = !0;
  JSCompiler_lcov_data_js_base_js[3758] = !0;
  goog.debugLoader_.loadClosureDeps();
}, JSCompiler_lcov_data_js_base_js[3774] = !0, goog.setDependencyFactory = function(a) {
  JSCompiler_lcov_data_js_base_js[3774] = !0;
  JSCompiler_lcov_data_js_base_js[3775] = !0;
  goog.debugLoader_.setDependencyFactory(a);
}, JSCompiler_lcov_data_js_base_js[3783] = !0, goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null, JSCompiler_lcov_data_js_base_js[3787] = !0, goog.global.CLOSURE_NO_DEPS || (JSCompiler_lcov_data_js_base_js[3788] = !0, goog.debugLoader_.loadClosureDeps()), JSCompiler_lcov_data_js_base_js[3804] = !0, goog.bootstrap = function(a, b) {
  JSCompiler_lcov_data_js_base_js[3804] = !0;
  JSCompiler_lcov_data_js_base_js[3805] = !0;
  goog.debugLoader_.bootstrap(a, b);
});
goog.TRUSTED_TYPES_POLICY_NAME = "goog";
goog.identity_ = function(a) {
  JSCompiler_lcov_data_js_base_js[3824] = !0;
  JSCompiler_lcov_data_js_base_js[3825] = !0;
  return a;
};
goog.createTrustedTypesPolicy = function(a) {
  JSCompiler_lcov_data_js_base_js[3838] = !0;
  JSCompiler_lcov_data_js_base_js[3839] = !0;
  var b = null;
  JSCompiler_lcov_data_js_base_js[3840] = !0;
  var c = goog.global.trustedTypes;
  JSCompiler_lcov_data_js_base_js[3841] = !0;
  if (!c || !c.createPolicy) {
    return JSCompiler_lcov_data_js_base_js[3842] = !0, b;
  }
  try {
    JSCompiler_lcov_data_js_base_js[3849] = !0, JSCompiler_lcov_data_js_base_js[3850] = !0, b = c.createPolicy(a, {createHTML:goog.identity_, createScript:goog.identity_, createScriptURL:goog.identity_});
  } catch (d) {
    JSCompiler_lcov_data_js_base_js[3855] = !0, JSCompiler_lcov_data_js_base_js[3856] = !0, goog.logToConsole_(d.message);
  }
  JSCompiler_lcov_data_js_base_js[3858] = !0;
  return b;
};
var JSCompiler_lcov_data_js_model_js = [];
__jscov.executedLines.push(JSCompiler_lcov_data_js_model_js);
__jscov.instrumentedLines.push("00e001800a183060801900a8de0380aa0a5802b00460ed6fcc600c21d145000083a76d843e0baca65efcc772398488aa02808096b407d451003d027c801a310f1101");
__jscov.fileNames.push("js/model.js");
var module$exports$wordsearch$model = {}, module$contents$wordsearch$model_LETTER_FREQUENCY = [8.498, 9.989, 12.191, 16.445, 27.607, 29.835, 31.85, 37.944, 45.49, 45.643, 46.935, 50.96, 53.365, 60.114, 67.621, 69.550, 69.645, 77.232, 83.559, 92.915, 95.673, 96.651, 99.211, 99.361, 101.355, 101.432], module$contents$wordsearch$model_WORDS = new Set;
module$exports$wordsearch$model.Line = function(a, b, c) {
  JSCompiler_lcov_data_js_model_js[13] = !0;
  JSCompiler_lcov_data_js_model_js[14] = !0;
  this.startPoint = a;
  JSCompiler_lcov_data_js_model_js[15] = !0;
  this.endPoint = b;
  JSCompiler_lcov_data_js_model_js[16] = !0;
  this.colour = c;
};
var module$contents$wordsearch$model_FOUND_WORDS = [];
module$exports$wordsearch$model.Point = function(a, b) {
  JSCompiler_lcov_data_js_model_js[31] = !0;
  JSCompiler_lcov_data_js_model_js[33] = !0;
  this.x = a;
  JSCompiler_lcov_data_js_model_js[35] = !0;
  this.y = b;
};
module$exports$wordsearch$model.Point.prototype.subtract = function(a) {
  JSCompiler_lcov_data_js_model_js[43] = !0;
  JSCompiler_lcov_data_js_model_js[44] = !0;
  return new module$exports$wordsearch$model.Point(this.x - a.x, this.y - a.y);
};
module$exports$wordsearch$model.Point.prototype.dot = function(a) {
  JSCompiler_lcov_data_js_model_js[52] = !0;
  JSCompiler_lcov_data_js_model_js[53] = !0;
  return this.x * a.x + this.y * a.y;
};
module$exports$wordsearch$model.Point.prototype.distance = function(a) {
  JSCompiler_lcov_data_js_model_js[61] = !0;
  JSCompiler_lcov_data_js_model_js[62] = !0;
  return Math.sqrt(Math.pow(this.x - a.x, 2) + Math.pow(this.y - a.y, 2));
};
module$exports$wordsearch$model.Point.prototype.equals = function(a) {
  JSCompiler_lcov_data_js_model_js[71] = !0;
  JSCompiler_lcov_data_js_model_js[72] = !0;
  return this.x === a.x && this.y === a.y;
};
module$exports$wordsearch$model.Point.prototype.within = function(a, b) {
  JSCompiler_lcov_data_js_model_js[75] = !0;
  JSCompiler_lcov_data_js_model_js[76] = !0;
  return Math.abs(this.x - a.x) <= b && Math.abs(this.y - a.y) <= b;
};
function module$contents$wordsearch$model_getNearestPointOnLine(a, b, c) {
  JSCompiler_lcov_data_js_model_js[91] = !0;
  var d = b.subtract(a);
  JSCompiler_lcov_data_js_model_js[93] = !0;
  c = c.subtract(a);
  JSCompiler_lcov_data_js_model_js[95] = !0;
  c = c.dot(d) / d.dot(d);
  JSCompiler_lcov_data_js_model_js[97] = !0;
  if (0 > c) {
    return JSCompiler_lcov_data_js_model_js[98] = !0, b;
  }
  JSCompiler_lcov_data_js_model_js[99] = !0;
  if (1 < c) {
    return JSCompiler_lcov_data_js_model_js[100] = !0, a;
  }
  JSCompiler_lcov_data_js_model_js[102] = !0;
  JSCompiler_lcov_data_js_model_js[103] = !0;
  b = new module$exports$wordsearch$model.Point(c * d.x, c * d.y);
  JSCompiler_lcov_data_js_model_js[104] = !0;
  a = new module$exports$wordsearch$model.Point(a.x + b.x, a.y + b.y);
  JSCompiler_lcov_data_js_model_js[105] = !0;
  return a;
}
module$exports$wordsearch$model.GameBoard = function(a, b) {
  JSCompiler_lcov_data_js_model_js[119] = !0;
  JSCompiler_lcov_data_js_model_js[121] = !0;
  this.startPointX = a.startPointX;
  JSCompiler_lcov_data_js_model_js[123] = !0;
  this.startPointY = a.startPointY;
  JSCompiler_lcov_data_js_model_js[125] = !0;
  this.gameHeight = a.gameHeight;
  JSCompiler_lcov_data_js_model_js[127] = !0;
  this.gameWidth = a.gameWidth;
  JSCompiler_lcov_data_js_model_js[129] = !0;
  this.dimensionsOfSquare = a.dimensionsOfSquare;
  JSCompiler_lcov_data_js_model_js[131] = !0;
  this.board = b;
};
module$exports$wordsearch$model.GameBoard.prototype.findSquare = function(a) {
  JSCompiler_lcov_data_js_model_js[139] = !0;
  JSCompiler_lcov_data_js_model_js[140] = !0;
  var b = Math.floor((a.y - this.startPointY) / this.dimensionsOfSquare);
  JSCompiler_lcov_data_js_model_js[142] = !0;
  a = Math.floor((a.x - this.startPointX) / this.dimensionsOfSquare);
  JSCompiler_lcov_data_js_model_js[145] = !0;
  return this.board[b][a];
};
module$exports$wordsearch$model.GameBoard.prototype.isOnBoard = function(a) {
  JSCompiler_lcov_data_js_model_js[156] = !0;
  JSCompiler_lcov_data_js_model_js[157] = !0;
  var b = this.startPointX + this.gameWidth * this.dimensionsOfSquare;
  JSCompiler_lcov_data_js_model_js[159] = !0;
  var c = this.startPointY + this.gameHeight * this.dimensionsOfSquare;
  JSCompiler_lcov_data_js_model_js[162] = !0;
  return a.x < b && a.y < c && a.x > this.startPointX && a.y > this.startPointY;
};
module$exports$wordsearch$model.GameBoard.prototype.getSquaresFromLine = function(a, b) {
  JSCompiler_lcov_data_js_model_js[173] = !0;
  JSCompiler_lcov_data_js_model_js[174] = !0;
  var c = [];
  JSCompiler_lcov_data_js_model_js[176] = !0;
  var d = this.dimensionsOfSquare;
  JSCompiler_lcov_data_js_model_js[178] = !0;
  JSCompiler_lcov_data_js_model_js[179] = !0;
  JSCompiler_lcov_data_js_model_js[181] = !0;
  if (module$contents$wordsearch$model_isLineDiagonal(a, b)) {
    JSCompiler_lcov_data_js_model_js[182] = !0;
    d = Math.sqrt(2 * Math.pow(this.dimensionsOfSquare, 2));
    JSCompiler_lcov_data_js_model_js[183] = !0;
    var e = d / Math.sqrt(2);
    JSCompiler_lcov_data_js_model_js[184] = !0;
    var g = e;
  } else {
    JSCompiler_lcov_data_js_model_js[185] = !0, module$contents$wordsearch$model_isLineVertical(a, b) ? (JSCompiler_lcov_data_js_model_js[186] = !0, e = 0, JSCompiler_lcov_data_js_model_js[187] = !0, g = d) : (JSCompiler_lcov_data_js_model_js[189] = !0, e = d, JSCompiler_lcov_data_js_model_js[190] = !0, g = 0);
  }
  JSCompiler_lcov_data_js_model_js[194] = !0;
  a.y > b.y && (JSCompiler_lcov_data_js_model_js[195] = !0, g *= -1);
  JSCompiler_lcov_data_js_model_js[198] = !0;
  a.x > b.x && (JSCompiler_lcov_data_js_model_js[199] = !0, e *= -1);
  JSCompiler_lcov_data_js_model_js[205] = !0;
  a = this.findSquare(a);
  JSCompiler_lcov_data_js_model_js[206] = !0;
  a = new module$exports$wordsearch$model.Point(a.xCoord + this.dimensionsOfSquare / 2, a.yCoord + this.dimensionsOfSquare / 2);
  JSCompiler_lcov_data_js_model_js[210] = !0;
  b = this.findSquare(b);
  JSCompiler_lcov_data_js_model_js[211] = !0;
  b = new module$exports$wordsearch$model.Point(b.xCoord + this.dimensionsOfSquare / 2, b.yCoord + this.dimensionsOfSquare / 2);
  JSCompiler_lcov_data_js_model_js[216] = !0;
  d = a.distance(b) / d + 1;
  JSCompiler_lcov_data_js_model_js[221] = !0;
  if (0.001 < Math.abs(d - Math.round(d))) {
    return JSCompiler_lcov_data_js_model_js[224] = !0, c;
  }
  JSCompiler_lcov_data_js_model_js[228] = !0;
  a = new module$exports$wordsearch$model.Point(a.x, a.y);
  JSCompiler_lcov_data_js_model_js[230] = !0;
  b = 0;
  for (JSCompiler_lcov_data_js_model_js[230] = !0; b < Math.round(d); ++b) {
    JSCompiler_lcov_data_js_model_js[231] = !0;
    var f = this.findSquare(a);
    JSCompiler_lcov_data_js_model_js[232] = !0;
    c.push(f);
    JSCompiler_lcov_data_js_model_js[234] = !0;
    a = new module$exports$wordsearch$model.Point(a.x + e, a.y + g);
  }
  JSCompiler_lcov_data_js_model_js[238] = !0;
  return c;
};
module$exports$wordsearch$model.GameBoard.prototype.isSquareIndexValid = function(a, b) {
  JSCompiler_lcov_data_js_model_js[256] = !0;
  JSCompiler_lcov_data_js_model_js[257] = !0;
  return a < this.gameHeight && 0 <= a && 0 <= b && b < this.gameWidth;
};
module$exports$wordsearch$model.GameBoard.prototype.doesWordFit = function(a, b, c, d) {
  JSCompiler_lcov_data_js_model_js[263] = !0;
  JSCompiler_lcov_data_js_model_js[264] = !0;
  if (!this.isSquareIndexValid(b, c)) {
    throw JSCompiler_lcov_data_js_model_js[265] = !0, console.log("Index is: ", b, ",", c), JSCompiler_lcov_data_js_model_js[266] = !0, "Error - inital square location is not valid";
  }
  JSCompiler_lcov_data_js_model_js[269] = !0;
  --a;
  JSCompiler_lcov_data_js_model_js[271] = !0;
  if ("vertical" === d) {
    return JSCompiler_lcov_data_js_model_js[272] = !0, this.isSquareIndexValid(b, c + a);
  }
  JSCompiler_lcov_data_js_model_js[274] = !0;
  if ("horizontal" === d) {
    return JSCompiler_lcov_data_js_model_js[275] = !0, this.isSquareIndexValid(b + a, c);
  }
  JSCompiler_lcov_data_js_model_js[277] = !0;
  if ("diagonal" === d) {
    return JSCompiler_lcov_data_js_model_js[278] = !0, this.isSquareIndexValid(b + a, c + a);
  }
  JSCompiler_lcov_data_js_model_js[282] = !0;
  throw "ERROR In doesWordFit, no valid option for direction";
};
module$exports$wordsearch$model.GameBoard.prototype.doesWordMatch = function(a, b, c, d, e) {
  JSCompiler_lcov_data_js_model_js[287] = !0;
  JSCompiler_lcov_data_js_model_js[289] = !0;
  var g = 0;
  for (JSCompiler_lcov_data_js_model_js[289] = !0; g < a.length; ++g) {
    JSCompiler_lcov_data_js_model_js[290] = !0;
    var f = this.board[b][c];
    JSCompiler_lcov_data_js_model_js[291] = !0;
    if (f.isPartOfWord && (JSCompiler_lcov_data_js_model_js[292] = !0, f.character != a.charAt(g))) {
      return JSCompiler_lcov_data_js_model_js[293] = !0, !1;
    }
    JSCompiler_lcov_data_js_model_js[296] = !0;
    b += e;
    JSCompiler_lcov_data_js_model_js[297] = !0;
    c += d;
  }
  return JSCompiler_lcov_data_js_model_js[299] = !0;
};
module$exports$wordsearch$model.GameBoard.prototype.generateRandomWordParams = function(a) {
  JSCompiler_lcov_data_js_model_js[306] = !0;
  JSCompiler_lcov_data_js_model_js[307] = !0;
  var b = a.length;
  JSCompiler_lcov_data_js_model_js[309] = !0;
  JSCompiler_lcov_data_js_model_js[311] = !0;
  var c = 0.25 > Math.random() ? !0 : !1;
  JSCompiler_lcov_data_js_model_js[313] = !0;
  c && (JSCompiler_lcov_data_js_model_js[314] = !0, a = a.split("").reverse().join(""));
  JSCompiler_lcov_data_js_model_js[317] = !0;
  var d = Math.random();
  JSCompiler_lcov_data_js_model_js[319] = !0;
  JSCompiler_lcov_data_js_model_js[321] = !0;
  0.33 > d ? (JSCompiler_lcov_data_js_model_js[322] = !0, d = "vertical") : (JSCompiler_lcov_data_js_model_js[323] = !0, 0.66 > d ? (JSCompiler_lcov_data_js_model_js[324] = !0, d = "diagonal") : (JSCompiler_lcov_data_js_model_js[326] = !0, d = "horizontal"));
  JSCompiler_lcov_data_js_model_js[330] = !0;
  var e = 0;
  JSCompiler_lcov_data_js_model_js[331] = !0;
  var g = 0;
  JSCompiler_lcov_data_js_model_js[332] = !0;
  "vertical" === d ? (JSCompiler_lcov_data_js_model_js[333] = !0, e = 1) : (JSCompiler_lcov_data_js_model_js[334] = !0, "diagonal" === d ? (JSCompiler_lcov_data_js_model_js[335] = !0, e = 1, JSCompiler_lcov_data_js_model_js[336] = !0, g = 1) : (JSCompiler_lcov_data_js_model_js[337] = !0, "horizontal" === d && (JSCompiler_lcov_data_js_model_js[338] = !0, g = 1)));
  JSCompiler_lcov_data_js_model_js[342] = !0;
  var f = Math.floor(10 * Math.random());
  JSCompiler_lcov_data_js_model_js[343] = !0;
  var n = Math.floor(10 * Math.random());
  JSCompiler_lcov_data_js_model_js[345] = !0;
  console.log("Now placing: ", a);
  for (JSCompiler_lcov_data_js_model_js[348] = !0;;) {
    JSCompiler_lcov_data_js_model_js[349] = !0;
    if (this.doesWordFit(b, f, n, d) && (JSCompiler_lcov_data_js_model_js[350] = !0, this.doesWordMatch(a, f, n, e, g))) {
      JSCompiler_lcov_data_js_model_js[352] = !0;
      break;
    }
    JSCompiler_lcov_data_js_model_js[355] = !0;
    console.log("nooo");
    JSCompiler_lcov_data_js_model_js[356] = !0;
    f = Math.floor(10 * Math.random());
    JSCompiler_lcov_data_js_model_js[357] = !0;
    n = Math.floor(10 * Math.random());
  }
  JSCompiler_lcov_data_js_model_js[362] = !0;
  return {isReversed:c, direction:d, rowIndex:f, colIndex:n, vertScaler:e, horiScaler:g};
};
function module$contents$wordsearch$model_isLineDiagonal(a, b) {
  JSCompiler_lcov_data_js_model_js[367] = !0;
  return a.x !== b.x && a.y !== b.y;
}
function module$contents$wordsearch$model_isLineVertical(a, b) {
  JSCompiler_lcov_data_js_model_js[371] = !0;
  return 0.01 > Math.abs(a.x - b.x) && a.y !== b.y;
}
module$exports$wordsearch$model.Square = function() {
  JSCompiler_lcov_data_js_model_js[375] = !0;
  JSCompiler_lcov_data_js_model_js[377] = !0;
  JSCompiler_lcov_data_js_model_js[379] = !0;
  JSCompiler_lcov_data_js_model_js[381] = !0;
  JSCompiler_lcov_data_js_model_js[383] = !0;
  JSCompiler_lcov_data_js_model_js[385] = !0;
};
function module$contents$wordsearch$model_createGameBoard(a, b) {
  JSCompiler_lcov_data_js_model_js[399] = !0;
  JSCompiler_lcov_data_js_model_js[407] = !0;
  var c = new module$exports$wordsearch$model.GameBoard({startPointX:0, startPointY:0, gameHeight:10, gameWidth:10, dimensionsOfSquare:0}, []);
  JSCompiler_lcov_data_js_model_js[409] = !0;
  a /= c.gameHeight;
  JSCompiler_lcov_data_js_model_js[410] = !0;
  var d = b / c.gameWidth;
  JSCompiler_lcov_data_js_model_js[412] = !0;
  c.dimensionsOfSquare = d > a ? a : d;
  JSCompiler_lcov_data_js_model_js[415] = !0;
  b = b / 2 - c.dimensionsOfSquare * c.gameWidth / 2;
  JSCompiler_lcov_data_js_model_js[418] = !0;
  c.startPointX = b;
  JSCompiler_lcov_data_js_model_js[420] = !0;
  b = c.startPointX;
  JSCompiler_lcov_data_js_model_js[421] = !0;
  a = c.startPointY;
  JSCompiler_lcov_data_js_model_js[423] = !0;
  d = 0;
  for (JSCompiler_lcov_data_js_model_js[423] = !0; d < c.gameHeight; ++d) {
    JSCompiler_lcov_data_js_model_js[424] = !0;
    var e = [];
    JSCompiler_lcov_data_js_model_js[425] = !0;
    var g = 0;
    for (JSCompiler_lcov_data_js_model_js[425] = !0; g < c.gameWidth; ++g) {
      JSCompiler_lcov_data_js_model_js[426] = !0;
      var f = {xCoord:b, yCoord:a, colour:"white", isPartOfWord:!1, character:"-"};
      JSCompiler_lcov_data_js_model_js[434] = !0;
      e.push(f);
      JSCompiler_lcov_data_js_model_js[436] = !0;
      b += c.dimensionsOfSquare;
    }
    JSCompiler_lcov_data_js_model_js[438] = !0;
    c.board.push(e);
    JSCompiler_lcov_data_js_model_js[439] = !0;
    b = c.startPointX;
    JSCompiler_lcov_data_js_model_js[440] = !0;
    a += c.dimensionsOfSquare;
  }
  JSCompiler_lcov_data_js_model_js[444] = !0;
  module$contents$wordsearch$model_populateWithRandomChars(c);
  JSCompiler_lcov_data_js_model_js[446] = !0;
  return c;
}
function module$contents$wordsearch$model_getRandomizedCharater(a) {
  JSCompiler_lcov_data_js_model_js[456] = !0;
  var b = 0;
  JSCompiler_lcov_data_js_model_js[458] = !0;
  var c = 0;
  for (JSCompiler_lcov_data_js_model_js[458] = !0; 26 > c; ++c) {
    if (JSCompiler_lcov_data_js_model_js[459] = !0, a < module$contents$wordsearch$model_LETTER_FREQUENCY[c]) {
      JSCompiler_lcov_data_js_model_js[460] = !0;
      b = c;
      JSCompiler_lcov_data_js_model_js[461] = !0;
      break;
    }
  }
  JSCompiler_lcov_data_js_model_js[465] = !0;
  return String.fromCharCode(97 + b);
}
function module$contents$wordsearch$model_populateWithRandomChars(a) {
  JSCompiler_lcov_data_js_model_js[474] = !0;
  a = $jscomp.makeIterator(a.board);
  JSCompiler_lcov_data_js_model_js[475] = !0;
  var b = a.next();
  for (JSCompiler_lcov_data_js_model_js[475] = !0; !b.done; b = a.next()) {
    JSCompiler_lcov_data_js_model_js[475] = !0;
    b = b.value;
    JSCompiler_lcov_data_js_model_js[475] = !0;
    JSCompiler_lcov_data_js_model_js[475] = !0;
    b = $jscomp.makeIterator(b);
    JSCompiler_lcov_data_js_model_js[476] = !0;
    var c = b.next();
    for (JSCompiler_lcov_data_js_model_js[476] = !0; !c.done; c = b.next()) {
      JSCompiler_lcov_data_js_model_js[476] = !0;
      c = c.value;
      JSCompiler_lcov_data_js_model_js[476] = !0;
      JSCompiler_lcov_data_js_model_js[477] = !0;
      var d = 101.432 * Math.random();
      JSCompiler_lcov_data_js_model_js[478] = !0;
      c.character = module$contents$wordsearch$model_getRandomizedCharater(d);
    }
  }
}
function module$contents$wordsearch$model_addWord(a, b) {
  JSCompiler_lcov_data_js_model_js[487] = !0;
  module$contents$wordsearch$model_WORDS.add(a);
  JSCompiler_lcov_data_js_model_js[489] = !0;
  var c = b.generateRandomWordParams(a);
  JSCompiler_lcov_data_js_model_js[491] = !0;
  c.isReversed && (JSCompiler_lcov_data_js_model_js[492] = !0, a = a.split("").reverse().join(""));
  JSCompiler_lcov_data_js_model_js[496] = !0;
  console.log("Part of word is at index: ", c.rowIndex, ",", c.colIndex);
  JSCompiler_lcov_data_js_model_js[500] = !0;
  var d = 0;
  for (JSCompiler_lcov_data_js_model_js[500] = !0; d < a.length; ++d) {
    JSCompiler_lcov_data_js_model_js[501] = !0;
    var e = b.board[c.rowIndex][c.colIndex];
    JSCompiler_lcov_data_js_model_js[504] = !0;
    c.rowIndex += c.horiScaler;
    JSCompiler_lcov_data_js_model_js[505] = !0;
    c.colIndex += c.vertScaler;
    JSCompiler_lcov_data_js_model_js[506] = !0;
    e.character = a.charAt(d);
    JSCompiler_lcov_data_js_model_js[507] = !0;
    e.isPartOfWord = !0;
  }
}
function module$contents$wordsearch$model_isValidWord(a) {
  JSCompiler_lcov_data_js_model_js[512] = !0;
  return module$contents$wordsearch$model_WORDS.has(a);
}
function module$contents$wordsearch$model_addFoundWords(a) {
  JSCompiler_lcov_data_js_model_js[516] = !0;
  module$contents$wordsearch$model_FOUND_WORDS.push(a);
}
function module$contents$wordsearch$model_getFoundWords() {
  JSCompiler_lcov_data_js_model_js[520] = !0;
  return module$contents$wordsearch$model_FOUND_WORDS;
}
module$exports$wordsearch$model.createGameBoard = module$contents$wordsearch$model_createGameBoard;
module$exports$wordsearch$model.addWord = module$contents$wordsearch$model_addWord;
module$exports$wordsearch$model.isValidWord = module$contents$wordsearch$model_isValidWord;
module$exports$wordsearch$model.addFoundWords = module$contents$wordsearch$model_addFoundWords;
module$exports$wordsearch$model.getFoundWords = module$contents$wordsearch$model_getFoundWords;
var JSCompiler_lcov_data_js_view_js = [];
__jscov.executedLines.push(JSCompiler_lcov_data_js_view_js);
__jscov.instrumentedLines.push("00101000cd07fe30009840058867222234e37f60");
__jscov.fileNames.push("js/view.js");
var module$exports$wordsearch$view = {}, module$contents$wordsearch$view_canvas = document.getElementById("wordSearchCanvas"), module$contents$wordsearch$view_context = module$contents$wordsearch$view_canvas.getContext("2d");
function module$contents$wordsearch$view_getViewHeight() {
  JSCompiler_lcov_data_js_view_js[12] = !0;
  return module$contents$wordsearch$view_canvas.getBoundingClientRect().height;
}
function module$contents$wordsearch$view_getViewWidth() {
  JSCompiler_lcov_data_js_view_js[20] = !0;
  return module$contents$wordsearch$view_canvas.getBoundingClientRect().width;
}
module$exports$wordsearch$view.View = function(a, b) {
  JSCompiler_lcov_data_js_view_js[32] = !0;
  JSCompiler_lcov_data_js_view_js[34] = !0;
  this.wordSearchBoard = a;
  JSCompiler_lcov_data_js_view_js[35] = !0;
  this.arrayOfLines = b;
};
module$exports$wordsearch$view.View.prototype.redraw = function() {
  JSCompiler_lcov_data_js_view_js[38] = !0;
  JSCompiler_lcov_data_js_view_js[39] = !0;
  module$contents$wordsearch$view_context.clearRect(0, 0, module$contents$wordsearch$view_canvas.width, module$contents$wordsearch$view_canvas.height);
  JSCompiler_lcov_data_js_view_js[40] = !0;
  this.drawGameBoard();
  JSCompiler_lcov_data_js_view_js[41] = !0;
  0 < this.arrayOfLines.length && (JSCompiler_lcov_data_js_view_js[42] = !0, this.drawLines());
};
module$exports$wordsearch$view.View.prototype.drawGameBoard = function() {
  JSCompiler_lcov_data_js_view_js[49] = !0;
  JSCompiler_lcov_data_js_view_js[50] = !0;
  module$contents$wordsearch$view_context.textAlign = "center";
  JSCompiler_lcov_data_js_view_js[51] = !0;
  module$contents$wordsearch$view_context.font = "30px Arial";
  JSCompiler_lcov_data_js_view_js[49] = !0;
  var a = $jscomp.makeIterator(this.wordSearchBoard.board);
  JSCompiler_lcov_data_js_view_js[52] = !0;
  var b = a.next();
  for (JSCompiler_lcov_data_js_view_js[52] = !0; !b.done; b = a.next()) {
    JSCompiler_lcov_data_js_view_js[52] = !0;
    b = b.value;
    JSCompiler_lcov_data_js_view_js[52] = !0;
    JSCompiler_lcov_data_js_view_js[52] = !0;
    b = $jscomp.makeIterator(b);
    JSCompiler_lcov_data_js_view_js[53] = !0;
    var c = b.next();
    for (JSCompiler_lcov_data_js_view_js[53] = !0; !c.done; c = b.next()) {
      JSCompiler_lcov_data_js_view_js[53] = !0, c = c.value, JSCompiler_lcov_data_js_view_js[53] = !0, JSCompiler_lcov_data_js_view_js[54] = !0, module$contents$wordsearch$view_context.fillStyle = c.colour, JSCompiler_lcov_data_js_view_js[55] = !0, module$contents$wordsearch$view_context.fillRect(c.xCoord, c.yCoord, this.wordSearchBoard.dimensionsOfSquare, this.wordSearchBoard.dimensionsOfSquare), JSCompiler_lcov_data_js_view_js[60] = !0, module$contents$wordsearch$view_context.fillStyle = "black", 
      JSCompiler_lcov_data_js_view_js[61] = !0, module$contents$wordsearch$view_context.fillText(c.character, c.xCoord + this.wordSearchBoard.dimensionsOfSquare / 2, c.yCoord + this.wordSearchBoard.dimensionsOfSquare / 2 + 10);
    }
  }
};
module$exports$wordsearch$view.View.prototype.drawSearchLine = function(a, b) {
  JSCompiler_lcov_data_js_view_js[75] = !0;
  JSCompiler_lcov_data_js_view_js[76] = !0;
  var c = Math.atan2(b.y - a.y, b.x - a.x);
  JSCompiler_lcov_data_js_view_js[79] = !0;
  b = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  JSCompiler_lcov_data_js_view_js[86] = !0;
  b = new module$exports$wordsearch$model.Point(a.x + b, a.y);
  JSCompiler_lcov_data_js_view_js[88] = !0;
  JSCompiler_lcov_data_js_view_js[90] = !0;
  var d = a.x + (b.x - a.x) / 2;
  JSCompiler_lcov_data_js_view_js[99] = !0;
  module$contents$wordsearch$view_context.save();
  JSCompiler_lcov_data_js_view_js[103] = !0;
  module$contents$wordsearch$view_context.lineWidth = 5.0;
  JSCompiler_lcov_data_js_view_js[104] = !0;
  module$contents$wordsearch$view_context.translate(a.x, a.y);
  JSCompiler_lcov_data_js_view_js[105] = !0;
  module$contents$wordsearch$view_context.rotate(c);
  JSCompiler_lcov_data_js_view_js[106] = !0;
  module$contents$wordsearch$view_context.translate(-a.x, -a.y);
  JSCompiler_lcov_data_js_view_js[109] = !0;
  module$contents$wordsearch$view_context.beginPath();
  JSCompiler_lcov_data_js_view_js[110] = !0;
  module$contents$wordsearch$view_context.moveTo(d, a.y - 15);
  JSCompiler_lcov_data_js_view_js[113] = !0;
  module$contents$wordsearch$view_context.arcTo(b.x + 15, b.y - 15, b.x + 15, b.y, 15);
  JSCompiler_lcov_data_js_view_js[117] = !0;
  module$contents$wordsearch$view_context.arcTo(b.x + 15, b.y + 15, d, a.y + 15, 15);
  JSCompiler_lcov_data_js_view_js[121] = !0;
  module$contents$wordsearch$view_context.arcTo(a.x - 15, a.y + 15, a.x - 15, a.y, 15);
  JSCompiler_lcov_data_js_view_js[125] = !0;
  module$contents$wordsearch$view_context.arcTo(a.x - 15, a.y - 15, d, a.y - 15, 15);
  JSCompiler_lcov_data_js_view_js[130] = !0;
  module$contents$wordsearch$view_context.lineTo(d, a.y - 15);
  JSCompiler_lcov_data_js_view_js[132] = !0;
  module$contents$wordsearch$view_context.stroke();
  JSCompiler_lcov_data_js_view_js[133] = !0;
  module$contents$wordsearch$view_context.restore();
};
module$exports$wordsearch$view.View.prototype.updateLines = function(a) {
  JSCompiler_lcov_data_js_view_js[136] = !0;
  JSCompiler_lcov_data_js_view_js[137] = !0;
  this.arrayOfLines = a;
};
module$exports$wordsearch$view.View.prototype.drawLines = function() {
  JSCompiler_lcov_data_js_view_js[141] = !0;
  JSCompiler_lcov_data_js_view_js[141] = !0;
  var a = $jscomp.makeIterator(this.arrayOfLines);
  JSCompiler_lcov_data_js_view_js[142] = !0;
  var b = a.next();
  for (JSCompiler_lcov_data_js_view_js[142] = !0; !b.done; b = a.next()) {
    JSCompiler_lcov_data_js_view_js[142] = !0, b = b.value, JSCompiler_lcov_data_js_view_js[142] = !0, JSCompiler_lcov_data_js_view_js[143] = !0, module$contents$wordsearch$view_context.fillStyle = b.colour, JSCompiler_lcov_data_js_view_js[144] = !0, module$contents$wordsearch$view_context.strokeStyle = b.colour, JSCompiler_lcov_data_js_view_js[145] = !0, module$contents$wordsearch$view_context.globalAlpha = .5, JSCompiler_lcov_data_js_view_js[146] = !0, this.drawSearchLine(b.startPoint, b.endPoint), 
    JSCompiler_lcov_data_js_view_js[147] = !0, module$contents$wordsearch$view_context.closePath(), JSCompiler_lcov_data_js_view_js[148] = !0, module$contents$wordsearch$view_context.fill(), JSCompiler_lcov_data_js_view_js[149] = !0, module$contents$wordsearch$view_context.globalAlpha = 1, JSCompiler_lcov_data_js_view_js[150] = !0, module$contents$wordsearch$view_context.strokeStyle = "black";
  }
};
module$exports$wordsearch$view.View.prototype.init = function() {
  JSCompiler_lcov_data_js_view_js[157] = !0;
  JSCompiler_lcov_data_js_view_js[158] = !0;
  this.drawGameBoard();
};
module$exports$wordsearch$view.getViewHeight = module$contents$wordsearch$view_getViewHeight;
module$exports$wordsearch$view.getViewWidth = module$contents$wordsearch$view_getViewWidth;
var JSCompiler_lcov_data_js_controller_js = [];
__jscov.executedLines.push(JSCompiler_lcov_data_js_controller_js);
__jscov.instrumentedLines.push("0080aac0ac28602d46a07e11c00ef0c25f9047b34d");
__jscov.fileNames.push("js/controller.js");
var module$exports$wordsearch$controller = {}, module$contents$wordsearch$controller_Controller = function(a, b) {
  JSCompiler_lcov_data_js_controller_js[15] = !0;
  JSCompiler_lcov_data_js_controller_js[17] = !0;
  this.wordSearchBoard = a;
  JSCompiler_lcov_data_js_controller_js[19] = !0;
  this.myView = b;
  JSCompiler_lcov_data_js_controller_js[21] = !0;
  this.drawLineFlag = !1;
  JSCompiler_lcov_data_js_controller_js[23] = !0;
};
module$contents$wordsearch$controller_Controller.prototype.onMouseDown = function(a) {
  JSCompiler_lcov_data_js_controller_js[30] = !0;
  JSCompiler_lcov_data_js_controller_js[31] = !0;
  a = new module$exports$wordsearch$model.Point(a.clientX, a.clientY);
  JSCompiler_lcov_data_js_controller_js[34] = !0;
  this.wordSearchBoard.isOnBoard(a) ? (this.drawLineFlag = JSCompiler_lcov_data_js_controller_js[35] = !0, JSCompiler_lcov_data_js_controller_js[37] = !0, a = this.wordSearchBoard.findSquare(a), JSCompiler_lcov_data_js_controller_js[39] = !0, this.startPoint = new module$exports$wordsearch$model.Point(a.xCoord + this.wordSearchBoard.dimensionsOfSquare / 2, a.yCoord + this.wordSearchBoard.dimensionsOfSquare / 2), JSCompiler_lcov_data_js_controller_js[43] = !0, console.log("Hit!")) : (JSCompiler_lcov_data_js_controller_js[45] = 
  !0, console.log("Miss!"));
};
module$contents$wordsearch$controller_Controller.prototype.onMouseUp = function(a) {
  JSCompiler_lcov_data_js_controller_js[53] = !0;
  JSCompiler_lcov_data_js_controller_js[54] = !0;
  a = new module$exports$wordsearch$model.Point(a.clientX, a.clientY);
  JSCompiler_lcov_data_js_controller_js[56] = !0;
  if (this.drawLineFlag) {
    if (JSCompiler_lcov_data_js_controller_js[58] = !0, this.drawLineFlag = !1, JSCompiler_lcov_data_js_controller_js[59] = !0, a = this.wordSearchBoard.findSquare(a), JSCompiler_lcov_data_js_controller_js[61] = !0, a = new module$exports$wordsearch$model.Point(a.xCoord + this.wordSearchBoard.dimensionsOfSquare / 2, a.yCoord + this.wordSearchBoard.dimensionsOfSquare / 2), JSCompiler_lcov_data_js_controller_js[65] = !0, a.equals(this.startPoint)) {
      JSCompiler_lcov_data_js_controller_js[66] = !0;
    } else {
      JSCompiler_lcov_data_js_controller_js[70] = !0;
      var b = this.wordSearchBoard.getSquaresFromLine(this.startPoint, a);
      JSCompiler_lcov_data_js_controller_js[77] = !0;
      b = module$contents$wordsearch$controller_getWord(b);
      JSCompiler_lcov_data_js_controller_js[79] = !0;
      console.log("Word found is: ", b);
      JSCompiler_lcov_data_js_controller_js[81] = !0;
      module$contents$wordsearch$model_isValidWord(b) ? (JSCompiler_lcov_data_js_controller_js[82] = !0, b = new module$exports$wordsearch$model.Line(this.startPoint, a, module$contents$wordsearch$controller_getColour()), JSCompiler_lcov_data_js_controller_js[83] = !0, module$contents$wordsearch$model_addFoundWords(b), JSCompiler_lcov_data_js_controller_js[84] = !0, this.myView.updateLines(module$contents$wordsearch$model_getFoundWords()), JSCompiler_lcov_data_js_controller_js[85] = !0, this.myView.redraw(), 
      JSCompiler_lcov_data_js_controller_js[86] = !0, this.myView.drawSearchLine(this.startPoint, a)) : (JSCompiler_lcov_data_js_controller_js[88] = !0, this.myView.redraw());
      JSCompiler_lcov_data_js_controller_js[92] = !0;
      console.log("Distance from start to end is: ", this.startPoint.distance(a));
    }
  }
};
module$contents$wordsearch$controller_Controller.prototype.onMouseMove = function(a) {
  JSCompiler_lcov_data_js_controller_js[102] = !0;
  JSCompiler_lcov_data_js_controller_js[103] = !0;
  a = new module$exports$wordsearch$model.Point(a.clientX, a.clientY);
  JSCompiler_lcov_data_js_controller_js[105] = !0;
  this.drawLineFlag && (JSCompiler_lcov_data_js_controller_js[106] = !0, this.myView.redraw(), JSCompiler_lcov_data_js_controller_js[107] = !0, this.myView.drawSearchLine(this.startPoint, a));
};
function module$contents$wordsearch$controller_getWord(a) {
  JSCompiler_lcov_data_js_controller_js[117] = !0;
  var b = "";
  JSCompiler_lcov_data_js_controller_js[116] = !0;
  a = $jscomp.makeIterator(a);
  JSCompiler_lcov_data_js_controller_js[118] = !0;
  var c = a.next();
  for (JSCompiler_lcov_data_js_controller_js[118] = !0; !c.done; c = a.next()) {
    JSCompiler_lcov_data_js_controller_js[118] = !0, c = c.value, JSCompiler_lcov_data_js_controller_js[118] = !0, JSCompiler_lcov_data_js_controller_js[119] = !0, b = b.concat(c.character);
  }
  JSCompiler_lcov_data_js_controller_js[121] = !0;
  return b;
}
var module$contents$wordsearch$controller_colourCounter = -1;
function module$contents$wordsearch$controller_getColour() {
  JSCompiler_lcov_data_js_controller_js[126] = !0;
  module$contents$wordsearch$controller_colourCounter++;
  JSCompiler_lcov_data_js_controller_js[127] = !0;
  if (0 === module$contents$wordsearch$controller_colourCounter % 4) {
    return JSCompiler_lcov_data_js_controller_js[128] = !0, "#4285F4";
  }
  JSCompiler_lcov_data_js_controller_js[129] = !0;
  if (1 === module$contents$wordsearch$controller_colourCounter % 4) {
    return JSCompiler_lcov_data_js_controller_js[130] = !0, "#DB4437";
  }
  JSCompiler_lcov_data_js_controller_js[131] = !0;
  if (2 === module$contents$wordsearch$controller_colourCounter % 4) {
    return JSCompiler_lcov_data_js_controller_js[132] = !0, "#F4B400";
  }
  JSCompiler_lcov_data_js_controller_js[134] = !0;
  return "#0F9D58";
}
function module$contents$wordsearch$controller_playGame() {
  JSCompiler_lcov_data_js_controller_js[140] = !0;
  var a = module$contents$wordsearch$model_createGameBoard(module$contents$wordsearch$view_getViewHeight(), module$contents$wordsearch$view_getViewWidth());
  JSCompiler_lcov_data_js_controller_js[143] = !0;
  module$contents$wordsearch$model_addWord("mikita", a);
  JSCompiler_lcov_data_js_controller_js[144] = !0;
  module$contents$wordsearch$model_addWord("patrick", a);
  JSCompiler_lcov_data_js_controller_js[145] = !0;
  module$contents$wordsearch$model_addWord("laura", a);
  JSCompiler_lcov_data_js_controller_js[146] = !0;
  module$contents$wordsearch$model_addWord("google", a);
  JSCompiler_lcov_data_js_controller_js[150] = !0;
  console.log(a);
  JSCompiler_lcov_data_js_controller_js[152] = !0;
  var b = new module$exports$wordsearch$view.View(a, module$contents$wordsearch$model_getFoundWords());
  JSCompiler_lcov_data_js_controller_js[153] = !0;
  var c = new module$contents$wordsearch$controller_Controller(a, b);
  JSCompiler_lcov_data_js_controller_js[156] = !0;
  window.addEventListener("mousedown", function(d) {
    JSCompiler_lcov_data_js_controller_js[156] = !0;
    JSCompiler_lcov_data_js_controller_js[157] = !0;
    c.onMouseDown(d);
  });
  JSCompiler_lcov_data_js_controller_js[159] = !0;
  window.addEventListener("mousemove", function(d) {
    JSCompiler_lcov_data_js_controller_js[159] = !0;
    JSCompiler_lcov_data_js_controller_js[160] = !0;
    c.onMouseMove(d);
  });
  JSCompiler_lcov_data_js_controller_js[162] = !0;
  window.addEventListener("mouseup", function(d) {
    JSCompiler_lcov_data_js_controller_js[162] = !0;
    JSCompiler_lcov_data_js_controller_js[163] = !0;
    c.onMouseUp(d);
  });
  JSCompiler_lcov_data_js_controller_js[166] = !0;
  b.init();
}
module$exports$wordsearch$controller.playGame = module$contents$wordsearch$controller_playGame;
var JSCompiler_lcov_data_js_main_js = [];
__jscov.executedLines.push(JSCompiler_lcov_data_js_main_js);
__jscov.instrumentedLines.push("40");
__jscov.fileNames.push("js/main.js");
var module$exports$wordsearch$main = {};
function module$contents$wordsearch$main_main() {
  JSCompiler_lcov_data_js_main_js[6] = !0;
  module$contents$wordsearch$controller_playGame();
}
module$contents$wordsearch$main_main();

