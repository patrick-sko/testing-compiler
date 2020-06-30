/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
self.window || (self.window = self, self.window.top = self);
var a = window.top.__jscov || (window.top.__jscov = {fileNames:[], instrumentedLines:[], executedLines:[]}), b = [];
a.executedLines.push(b);
a.instrumentedLines.push("00000cfbffffffdfff7fef7f7dffffffafffffffeffffb7fdeb060c1821f2000f84700fcbf01fcabf06f11000087130000000000ac0163160018e04f0000001830c04cc14800c708003c66946300003c000000010060000400c09f008003000000001c00c0c67d11000022000000000008001800c12b010000000000000000000000007c540106101c7eca9c84121007e04f0900c0755800f03e0c059a0c2300d8cc02180016c000067000800280018439000000007c9700800100e78e01000040011500e01c000007004400de8fd99c000000000000000000c830bd9c1126000000070000010000603a0200300000c000180000402f0000b90000170008000000b4c3b117010000004c802c010000798007001a8018609e2efe211500001e80df808fb01c8240665b00ff3d250011021800aaaa0af871befc014026807b000c805bd94c8fb401b8b79723675d1868c060a7b130181e000cc0c7238c004f04f80238802008102000020401080200805455c03f0117c00f2040c00306f0ab00c02b0ba90882173d69848e931b470200947865a370a1c01e6784340ac0a5135e0000250090d81e6e457392e967e440a04e04828084850294bfa1021000a01405005042010020a93803028000f4c505800200cd9c08086000c080180030000003c0078605");
a.fileNames.push("js/base.js");
function l(c) {
  b[27] = !0;
  b[28] = !0;
  var f = 0;
  b[29] = !0;
  return function() {
    b[29] = !0;
    b[30] = !0;
    if (f < c.length) {
      return b[31] = !0, {done:!1, value:c[f++], };
    }
    b[36] = !0;
    return {done:!0};
  };
}
function n(c) {
  b[30] = !0;
  b[32] = !0;
  var f = "undefined" != typeof Symbol && Symbol.iterator && c[Symbol.iterator];
  b[34] = !0;
  f ? c = f.call(c) : (b[47] = !0, b[48] = !0, c = {next:l(c)});
  return c;
}
function t(c) {
  b[33] = !0;
  b[34] = !0;
  c = ["object" == typeof globalThis && globalThis, c, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, ];
  b[56] = !0;
  var f = 0;
  for (b[56] = !0; f < c.length; ++f) {
    b[57] = !0;
    var d = c[f];
    b[64] = !0;
    if (d && d.Math == Math) {
      return b[65] = !0, d;
    }
  }
  b[74] = !0;
  b[76] = !0;
  b[77] = !0;
  throw Error("Cannot find global object");
}
var v = t(this), w = "function" == typeof Object.defineProperties ? Object.defineProperty : function(c, f, d) {
  b[38] = !0;
  b[39] = !0;
  if (c == Array.prototype || c == Object.prototype) {
    return b[42] = !0, c;
  }
  b[52] = !0;
  c[f] = d.value;
  b[53] = !0;
  return c;
};
function x(c, f) {
  b[88] = !0;
  b[89] = !0;
  if (f) {
    a: {
      b[90] = !0, b[93] = !0, b[109] = !0;
      b[110] = !0;
      var d = v;
      b[111] = !0;
      c = c.split(".");
      b[112] = !0;
      var e = 0;
      for (b[112] = !0; e < c.length - 1; e++) {
        b[113] = !0;
        var m = c[e];
        b[114] = !0;
        if (!(m in d)) {
          b[114] = !0;
          break a;
        }
        b[115] = !0;
        d = d[m];
      }
      b[117] = !0;
      c = c[c.length - 1];
      b[118] = !0;
      e = d[c];
      b[119] = !0;
      f = f(e);
      b[120] = !0;
      f == e || null == f ? b[120] = !0 : (b[121] = !0, w(d, c, {configurable:!0, writable:!0, value:f}));
    }
  } else {
    b[89] = !0;
  }
}
x("Symbol", function(c) {
  function f(m) {
    b[72] = !0;
    b[73] = !0;
    if (this instanceof f) {
      throw b[74] = !0, new TypeError("Symbol is not a constructor");
    }
    b[76] = !0;
    return new d("jscomp_symbol_" + (m || "") + "_" + e++, m);
  }
  function d(m, q) {
    b[41] = !0;
    b[43] = !0;
    this.a = m;
    b[46] = !0;
    b[49] = !0;
    w(this, "description", {configurable:!0, writable:!0, value:q});
  }
  b[33] = !0;
  b[34] = !0;
  if (c) {
    return b[34] = !0, c;
  }
  b[41] = !0;
  b[56] = !0;
  d.prototype.toString = function() {
    b[56] = !0;
    b[57] = !0;
    return this.a;
  };
  b[62] = !0;
  b[64] = !0;
  var e = 0;
  b[72] = !0;
  b[81] = !0;
  return f;
});
x("Symbol.iterator", function(c) {
  b[91] = !0;
  b[92] = !0;
  if (c) {
    return b[92] = !0, c;
  }
  b[94] = !0;
  c = Symbol("Symbol.iterator");
  b[100] = !0;
  var f = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" ");
  b[109] = !0;
  var d = 0;
  for (b[109] = !0; d < f.length; d++) {
    b[110] = !0;
    var e = v[f[d]];
    b[111] = !0;
    "function" === typeof e && "function" != typeof e.prototype[c] && (b[113] = !0, w(e.prototype, c, {configurable:!0, writable:!0, value:function() {
      b[120] = !0;
      b[121] = !0;
      return y(l(this));
    }}));
  }
  b[126] = !0;
  return c;
});
function y(c) {
  b[152] = !0;
  b[153] = !0;
  c = {next:c};
  b[158] = !0;
  c[Symbol.iterator] = function() {
    b[158] = !0;
    b[159] = !0;
    return this;
  };
  b[161] = !0;
  return c;
}
function A(c, f) {
  b[24] = !0;
  b[25] = !0;
  return Object.prototype.hasOwnProperty.call(c, f);
}
x("WeakMap", function(c) {
  function f(g) {
    b[138] = !0;
    b[140] = !0;
    this.a = (h += Math.random() + 1).toString();
    b[142] = !0;
    if (g) {
      b[143] = !0;
      g = n(g);
      b[144] = !0;
      var k;
      for (b[145] = !0; !(k = g.next()).done;) {
        b[146] = !0, k = k.value, b[147] = !0, this.set(k[0], k[1]);
      }
    }
  }
  b[29] = !0;
  function d() {
    b[58] = !0;
  }
  function e(g) {
    b[65] = !0;
    b[66] = !0;
    var k = typeof g;
    b[67] = !0;
    return "object" === k && null !== g || "function" === k;
  }
  function m(g) {
    b[74] = !0;
    b[75] = !0;
    if (!A(g, r)) {
      b[76] = !0;
      var k = new d;
      b[82] = !0;
      w(g, r, {value:k});
    }
  }
  function q(g) {
    b[91] = !0;
    b[92] = !0;
    b[98] = !0;
    var k = Object[g];
    b[99] = !0;
    k && (b[100] = !0, Object[g] = function(p) {
      b[100] = !0;
      b[101] = !0;
      if (p instanceof d) {
        return b[102] = !0, p;
      }
      b[104] = !0;
      Object.isExtensible(p) && (b[105] = !0, m(p));
      b[107] = !0;
      return k(p);
    });
  }
  b[49] = !0;
  b[52] = !0;
  if (function() {
    b[34] = !0;
    b[35] = !0;
    if (!c || !Object.seal) {
      return b[35] = !0, !1;
    }
    try {
      b[36] = !0;
      b[37] = !0;
      var g = Object.seal({});
      b[38] = !0;
      var k = Object.seal({});
      b[39] = !0;
      var p = new c([[g, 2], [k, 3]]);
      b[41] = !0;
      if (2 != p.get(g) || 3 != p.get(k)) {
        return b[41] = !0, !1;
      }
      b[42] = !0;
      p.delete(g);
      b[43] = !0;
      p.set(k, 4);
      b[44] = !0;
      return !p.has(g) && 4 == p.get(k);
    } catch (u) {
      return b[45] = !0, b[46] = !0, !1;
    }
  }()) {
    return b[52] = !0, c;
  }
  b[55] = !0;
  var r = "$jscomp_hidden_" + Math.random();
  b[112] = !0;
  q("freeze");
  b[113] = !0;
  q("preventExtensions");
  b[114] = !0;
  q("seal");
  b[119] = !0;
  var h = 0;
  b[138] = !0;
  b[153] = !0;
  f.prototype.set = function(g, k) {
    b[153] = !0;
    b[154] = !0;
    if (!e(g)) {
      throw b[155] = !0, Error("Invalid WeakMap key");
    }
    b[157] = !0;
    m(g);
    b[158] = !0;
    if (!A(g, r)) {
      throw b[166] = !0, Error("WeakMap key fail: " + g);
    }
    b[168] = !0;
    g[r][this.a] = k;
    b[169] = !0;
    return this;
  };
  b[173] = !0;
  f.prototype.get = function(g) {
    b[173] = !0;
    b[174] = !0;
    return e(g) && A(g, r) ? g[r][this.a] : void 0;
  };
  b[179] = !0;
  f.prototype.has = function(g) {
    b[179] = !0;
    b[180] = !0;
    return e(g) && A(g, r) && A(g[r], this.a);
  };
  b[185] = !0;
  f.prototype.delete = function(g) {
    b[185] = !0;
    b[186] = !0;
    if (!e(g) || !A(g, r) || !A(g[r], this.a)) {
      return b[188] = !0, !1;
    }
    b[190] = !0;
    return delete g[r][this.a];
  };
  b[193] = !0;
  return f;
});
x("Map", function(c) {
  function f() {
    b[306] = !0;
    b[307] = !0;
    var h = {};
    b[308] = !0;
    h.f = h.next = h.head = h;
    b[309] = !0;
    return h;
  }
  function d(h, g) {
    b[282] = !0;
    b[283] = !0;
    var k = h.a;
    b[284] = !0;
    return y(function() {
      b[284] = !0;
      b[285] = !0;
      if (k) {
        for (b[286] = !0; k.head != h.a;) {
          b[287] = !0, k = k.f;
        }
        for (b[289] = !0; k.next != k.head;) {
          return b[290] = !0, k = k.next, b[291] = !0, {done:!1, value:g(k)};
        }
        b[293] = !0;
        k = null;
      }
      b[295] = !0;
      return {done:!0, value:void 0};
    });
  }
  function e(h, g) {
    b[259] = !0;
    b[260] = !0;
    b[324] = !0;
    b[325] = !0;
    var k = g && typeof g;
    b[326] = !0;
    "object" == k || "function" == k ? (b[327] = !0, b[328] = !0, q.has(g) ? (b[333] = !0, k = q.get(g)) : (b[329] = !0, k = "" + ++r, b[330] = !0, q.set(g, k), b[331] = !0)) : (b[336] = !0, k = "p_" + g);
    b[261] = !0;
    var p = h.b[k];
    b[262] = !0;
    if (p && A(h.b, k)) {
      for (b[263] = !0, h = 0, b[263] = !0; h < p.length; h++) {
        b[264] = !0;
        var u = p[h];
        b[265] = !0;
        if (g !== g && u.key !== u.key || g === u.key) {
          return b[266] = !0, {id:k, list:p, index:h, c:u};
        }
      }
    }
    b[270] = !0;
    return {id:k, list:p, index:-1, c:void 0};
  }
  function m(h) {
    b[112] = !0;
    b[114] = !0;
    this.b = {};
    b[117] = !0;
    this.a = f();
    b[123] = !0;
    this.size = 0;
    b[125] = !0;
    if (h) {
      b[126] = !0;
      h = n(h);
      b[127] = !0;
      var g;
      for (b[128] = !0; !(g = h.next()).done;) {
        b[129] = !0, g = g.value, b[131] = !0, this.set(g[0], g[1]);
      }
    }
  }
  b[51] = !0;
  b[91] = !0;
  b[94] = !0;
  if (function() {
    b[58] = !0;
    b[59] = !0;
    if (!c || "function" != typeof c || !c.prototype.entries || "function" != typeof Object.seal) {
      return b[64] = !0, !1;
    }
    try {
      b[67] = !0;
      b[68] = !0;
      b[69] = !0;
      var h = Object.seal({x:4});
      b[70] = !0;
      var g = new c(n([[h, "s"]]));
      b[71] = !0;
      if ("s" != g.get(h) || 1 != g.size || g.get({x:4}) || g.set({x:4}, "t") != g || 2 != g.size) {
        return b[73] = !0, !1;
      }
      b[75] = !0;
      var k = g.entries();
      b[76] = !0;
      var p = k.next();
      b[77] = !0;
      if (p.done || p.value[0] != h || "s" != p.value[1]) {
        return b[78] = !0, !1;
      }
      b[80] = !0;
      p = k.next();
      b[81] = !0;
      return p.done || 4 != p.value[0].x || "t" != p.value[1] || !k.next().done ? (b[83] = !0, !1) : b[85] = !0;
    } catch (u) {
      return b[86] = !0, b[87] = !0, !1;
    }
  }()) {
    return b[94] = !0, c;
  }
  b[98] = !0;
  var q = new WeakMap;
  b[112] = !0;
  b[138] = !0;
  m.prototype.set = function(h, g) {
    b[138] = !0;
    b[140] = !0;
    h = 0 === h ? 0 : h;
    b[141] = !0;
    var k = e(this, h);
    b[142] = !0;
    k.list || (b[143] = !0, k.list = this.b[k.id] = []);
    b[145] = !0;
    k.c ? (b[158] = !0, k.c.value = g) : (b[146] = !0, k.c = {next:this.a, f:this.a.f, head:this.a, key:h, value:g, }, b[153] = !0, k.list.push(k.c), b[154] = !0, this.a.f.next = k.c, b[155] = !0, this.a.f = k.c, b[156] = !0, this.size++);
    b[160] = !0;
    return this;
  };
  b[165] = !0;
  m.prototype.delete = function(h) {
    b[165] = !0;
    b[166] = !0;
    h = e(this, h);
    b[167] = !0;
    if (h.c && h.list) {
      return b[168] = !0, h.list.splice(h.index, 1), b[169] = !0, h.list.length || (b[169] = !0, delete this.b[h.id]), b[170] = !0, h.c.f.next = h.c.next, b[171] = !0, h.c.next.f = h.c.f, b[172] = !0, h.c.head = null, b[173] = !0, this.size--, b[174] = !0;
    }
    b[176] = !0;
    return !1;
  };
  b[181] = !0;
  m.prototype.clear = function() {
    b[181] = !0;
    b[182] = !0;
    this.b = {};
    b[183] = !0;
    this.a = this.a.f = f();
    b[184] = !0;
    this.size = 0;
  };
  b[189] = !0;
  m.prototype.has = function(h) {
    b[189] = !0;
    b[190] = !0;
    return !!e(this, h).c;
  };
  b[195] = !0;
  m.prototype.get = function(h) {
    b[195] = !0;
    b[196] = !0;
    h = e(this, h).c;
    b[198] = !0;
    return h && h.value;
  };
  b[204] = !0;
  m.prototype.entries = function() {
    b[204] = !0;
    b[205] = !0;
    return d(this, function(h) {
      b[205] = !0;
      b[207] = !0;
      return [h.key, h.value];
    });
  };
  b[213] = !0;
  m.prototype.keys = function() {
    b[213] = !0;
    b[214] = !0;
    return d(this, function(h) {
      b[214] = !0;
      b[216] = !0;
      return h.key;
    });
  };
  b[222] = !0;
  m.prototype.values = function() {
    b[222] = !0;
    b[223] = !0;
    return d(this, function(h) {
      b[223] = !0;
      b[225] = !0;
      return h.value;
    });
  };
  b[231] = !0;
  m.prototype.forEach = function(h, g) {
    b[231] = !0;
    b[232] = !0;
    var k = this.entries();
    b[233] = !0;
    var p;
    for (b[234] = !0; !(p = k.next()).done;) {
      b[235] = !0, p = p.value, b[236] = !0, h.call(g, p[1], p[0], this);
    }
  };
  b[245] = !0;
  m.prototype[Symbol.iterator] = m.prototype.entries;
  b[259] = !0;
  b[282] = !0;
  b[306] = !0;
  b[317] = !0;
  var r = 0;
  b[324] = !0;
  b[340] = !0;
  return m;
});
x("Set", function(c) {
  function f(d) {
    b[85] = !0;
    b[87] = !0;
    this.a = new Map;
    b[88] = !0;
    if (d) {
      b[89] = !0;
      d = n(d);
      b[90] = !0;
      var e;
      for (b[91] = !0; !(e = d.next()).done;) {
        b[92] = !0, e = e.value, b[93] = !0, this.add(e);
      }
    }
    b[99] = !0;
    this.size = this.a.size;
  }
  b[28] = !0;
  b[68] = !0;
  b[71] = !0;
  if (function() {
    b[35] = !0;
    b[36] = !0;
    if (!c || "function" != typeof c || !c.prototype.entries || "function" != typeof Object.seal) {
      return b[41] = !0, !1;
    }
    try {
      b[44] = !0;
      b[45] = !0;
      b[46] = !0;
      var d = Object.seal({x:4});
      b[47] = !0;
      var e = new c(n([d]));
      b[48] = !0;
      if (!e.has(d) || 1 != e.size || e.add(d) != e || 1 != e.size || e.add({x:4}) != e || 2 != e.size) {
        return b[50] = !0, !1;
      }
      b[52] = !0;
      var m = e.entries();
      b[53] = !0;
      var q = m.next();
      b[54] = !0;
      if (q.done || q.value[0] != d || q.value[1] != d) {
        return b[55] = !0, !1;
      }
      b[57] = !0;
      q = m.next();
      b[58] = !0;
      if (q.done || q.value[0] == d || 4 != q.value[0].x || q.value[1] != q.value[0]) {
        return b[60] = !0, !1;
      }
      b[62] = !0;
      return m.next().done;
    } catch (r) {
      return b[63] = !0, b[64] = !0, !1;
    }
  }()) {
    return b[71] = !0, c;
  }
  b[85] = !0;
  b[104] = !0;
  f.prototype.add = function(d) {
    b[104] = !0;
    b[106] = !0;
    d = 0 === d ? 0 : d;
    b[107] = !0;
    this.a.set(d, d);
    b[108] = !0;
    this.size = this.a.size;
    b[109] = !0;
    return this;
  };
  b[114] = !0;
  f.prototype.delete = function(d) {
    b[114] = !0;
    b[115] = !0;
    d = this.a.delete(d);
    b[116] = !0;
    this.size = this.a.size;
    b[117] = !0;
    return d;
  };
  b[122] = !0;
  f.prototype.clear = function() {
    b[122] = !0;
    b[123] = !0;
    this.a.clear();
    b[124] = !0;
    this.size = 0;
  };
  b[129] = !0;
  f.prototype.has = function(d) {
    b[129] = !0;
    b[130] = !0;
    return this.a.has(d);
  };
  b[135] = !0;
  f.prototype.entries = function() {
    b[135] = !0;
    b[136] = !0;
    return this.a.entries();
  };
  b[141] = !0;
  f.prototype.values = function() {
    b[141] = !0;
    b[142] = !0;
    return this.a.values();
  };
  b[147] = !0;
  f.prototype.keys = f.prototype.values;
  b[150] = !0;
  f.prototype[Symbol.iterator] = f.prototype.values;
  b[155] = !0;
  f.prototype.forEach = function(d, e) {
    b[155] = !0;
    b[156] = !0;
    var m = this;
    b[157] = !0;
    this.a.forEach(function(q) {
      b[157] = !0;
      b[158] = !0;
      return d.call(e, q, q, m);
    });
  };
  b[163] = !0;
  return f;
});
x("Array.prototype.fill", function(c) {
  b[18] = !0;
  b[19] = !0;
  if (c) {
    return b[19] = !0, c;
  }
  b[32] = !0;
  b[46] = !0;
  return function(f, d, e) {
    b[32] = !0;
    b[33] = !0;
    var m = this.length || 0;
    b[34] = !0;
    0 > d && (b[35] = !0, d = Math.max(0, m + d));
    b[37] = !0;
    if (null == e || e > m) {
      b[37] = !0, e = m;
    }
    b[38] = !0;
    e = Number(e);
    b[39] = !0;
    0 > e && (b[39] = !0, e = Math.max(0, m + e));
    b[40] = !0;
    d = Number(d || 0);
    for (b[40] = !0; d < e; d++) {
      b[41] = !0, this[d] = f;
    }
    b[43] = !0;
    return this;
  };
});
var C = [];
a.executedLines.push(C);
a.instrumentedLines.push("00e001800a183060801900a8de0380aa0a5802b00460ed6fcc600c21d145000083a76d843e0baca65efcc772398488aa02808096b407d451003d027c801a310f1101");
a.fileNames.push("js/model.js");
var D = [8.498, 9.989, 12.191, 16.445, 27.607, 29.835, 31.85, 37.944, 45.49, 45.643, 46.935, 50.96, 53.365, 60.114, 67.621, 69.550, 69.645, 77.232, 83.559, 92.915, 95.673, 96.651, 99.211, 99.361, 101.355, 101.432], E = new Set;
function F(c, f) {
  var d = G();
  C[13] = !0;
  C[14] = !0;
  this.g = c;
  C[15] = !0;
  this.u = f;
  C[16] = !0;
  this.o = d;
}
var H = [];
function J(c, f) {
  C[31] = !0;
  C[33] = !0;
  this.x = c;
  C[35] = !0;
  this.y = f;
}
function K(c, f) {
  C[61] = !0;
  C[62] = !0;
  return Math.sqrt(Math.pow(c.x - f.x, 2) + Math.pow(c.y - f.y, 2));
}
function L() {
  C[119] = !0;
  C[121] = !0;
  this.b = 0;
  C[123] = !0;
  C[125] = !0;
  C[127] = !0;
  C[129] = !0;
  this.a = 0;
  C[131] = !0;
  this.h = [];
}
function M(c, f) {
  C[139] = !0;
  C[140] = !0;
  var d = Math.floor(f.y / c.a);
  C[142] = !0;
  f = Math.floor((f.x - c.b) / c.a);
  C[145] = !0;
  return c.h[d][f];
}
function N(c, f) {
  C[256] = !0;
  C[257] = !0;
  return 10 > c && 0 <= c && 0 <= f && 10 > f;
}
function aa() {
  O[12] = !0;
  var c = P.getBoundingClientRect().height;
  O[20] = !0;
  var f = P.getBoundingClientRect().width;
  C[399] = !0;
  C[407] = !0;
  var d = new L;
  C[409] = !0;
  c /= 10;
  C[410] = !0;
  var e = f / 10;
  C[412] = !0;
  d.a = e > c ? c : e;
  C[415] = !0;
  f = f / 2 - 10 * d.a / 2;
  C[418] = !0;
  d.b = f;
  C[420] = !0;
  f = d.b;
  C[421] = !0;
  c = 0;
  C[423] = !0;
  e = 0;
  for (C[423] = !0; 10 > e; ++e) {
    C[424] = !0;
    var m = [];
    C[425] = !0;
    var q = 0;
    for (C[425] = !0; 10 > q; ++q) {
      C[426] = !0;
      var r = {i:f, j:c, o:"white", s:!1, l:"-"};
      C[434] = !0;
      m.push(r);
      C[436] = !0;
      f += d.a;
    }
    C[438] = !0;
    d.h.push(m);
    C[439] = !0;
    f = d.b;
    C[440] = !0;
    c += d.a;
  }
  C[444] = !0;
  C[474] = !0;
  f = n(d.h);
  C[475] = !0;
  c = f.next();
  for (C[475] = !0; !c.done; c = f.next()) {
    for (C[475] = !0, c = c.value, C[475] = !0, C[475] = !0, c = n(c), C[476] = !0, e = c.next(), C[476] = !0; !e.done; e = c.next()) {
      C[476] = !0;
      e = e.value;
      C[476] = !0;
      C[477] = !0;
      m = 101.432 * Math.random();
      C[478] = !0;
      C[456] = !0;
      q = 0;
      C[458] = !0;
      r = 0;
      for (C[458] = !0; 26 > r; ++r) {
        if (C[459] = !0, m < D[r]) {
          C[460] = !0;
          q = r;
          C[461] = !0;
          break;
        }
      }
      C[465] = !0;
      e.l = String.fromCharCode(97 + q);
    }
  }
  C[446] = !0;
  return d;
}
function Q(c, f) {
  C[487] = !0;
  E.add(c);
  C[489] = !0;
  var d = c;
  C[306] = !0;
  C[307] = !0;
  var e = d.length;
  C[309] = !0;
  C[311] = !0;
  var m = 0.25 > Math.random() ? !0 : !1;
  C[313] = !0;
  m && (C[314] = !0, d = d.split("").reverse().join(""));
  C[317] = !0;
  var q = Math.random();
  C[319] = !0;
  C[321] = !0;
  if (0.33 > q) {
    C[322] = !0;
    var r = "vertical";
  } else {
    C[323] = !0, 0.66 > q ? (C[324] = !0, r = "diagonal") : (C[326] = !0, r = "horizontal");
  }
  C[330] = !0;
  var h = 0;
  C[331] = !0;
  q = 0;
  C[332] = !0;
  "vertical" === r ? (C[333] = !0, h = 1) : (C[334] = !0, "diagonal" === r ? (C[335] = !0, h = 1, C[336] = !0, q = 1) : (C[337] = !0, "horizontal" === r && (C[338] = !0, q = 1)));
  C[342] = !0;
  var g = Math.floor(10 * Math.random());
  C[343] = !0;
  var k = Math.floor(10 * Math.random());
  C[345] = !0;
  console.log("Now placing: ", d);
  for (C[348] = !0;;) {
    C[349] = !0;
    var p = e;
    var u = g, z = k, B = r;
    C[263] = !0;
    C[264] = !0;
    if (!N(u, z)) {
      throw C[265] = !0, console.log("Index is: ", u, ",", z), C[266] = !0, "Error - inital square location is not valid";
    }
    C[269] = !0;
    --p;
    C[271] = !0;
    if ("vertical" === B) {
      C[272] = !0, p = N(u, z + p);
    } else {
      if (C[274] = !0, "horizontal" === B) {
        C[275] = !0, p = N(u + p, z);
      } else {
        if (C[277] = !0, "diagonal" === B) {
          C[278] = !0, p = N(u + p, z + p);
        } else {
          throw C[282] = !0, "ERROR In doesWordFit, no valid option for direction";
        }
      }
    }
    if (p) {
      C[350] = !0;
      a: {
        p = f;
        u = d;
        z = g;
        B = k;
        var ba = h, ca = q;
        C[287] = !0;
        C[289] = !0;
        var I = 0;
        for (C[289] = !0; I < u.length; ++I) {
          C[290] = !0;
          var R = p.h[z][B];
          C[291] = !0;
          if (R.s && (C[292] = !0, R.l != u.charAt(I))) {
            C[293] = !0;
            p = !1;
            break a;
          }
          C[296] = !0;
          z += ca;
          C[297] = !0;
          B += ba;
        }
        p = C[299] = !0;
      }
      if (p) {
        C[352] = !0;
        break;
      }
    }
    C[355] = !0;
    console.log("nooo");
    C[356] = !0;
    g = Math.floor(10 * Math.random());
    C[357] = !0;
    k = Math.floor(10 * Math.random());
  }
  C[362] = !0;
  d = g;
  e = k;
  C[491] = !0;
  m && (C[492] = !0, c = c.split("").reverse().join(""));
  C[496] = !0;
  console.log("Part of word is at index: ", d, ",", e);
  C[500] = !0;
  m = 0;
  for (C[500] = !0; m < c.length; ++m) {
    C[501] = !0, k = f.h[d][e], C[504] = !0, d += q, C[505] = !0, e += h, C[506] = !0, k.l = c.charAt(m), C[507] = !0, k.s = !0;
  }
}
function S() {
  C[520] = !0;
  return H;
}
;var O = [];
a.executedLines.push(O);
a.instrumentedLines.push("00101000cd07fe30009840058867222234e37f60");
a.fileNames.push("js/view.js");
var P = document.getElementById("wordSearchCanvas"), T = P.getContext("2d");
function da(c) {
  var f = S();
  O[32] = !0;
  O[34] = !0;
  this.a = c;
  O[35] = !0;
  this.b = f;
}
function U(c) {
  O[38] = !0;
  O[39] = !0;
  T.clearRect(0, 0, P.width, P.height);
  O[40] = !0;
  V(c);
  O[41] = !0;
  if (0 < c.b.length) {
    O[42] = !0;
    O[141] = !0;
    O[141] = !0;
    c = n(c.b);
    O[142] = !0;
    var f = c.next();
    for (O[142] = !0; !f.done; f = c.next()) {
      O[142] = !0, f = f.value, O[142] = !0, O[143] = !0, T.fillStyle = f.o, O[144] = !0, T.strokeStyle = f.o, O[145] = !0, T.globalAlpha = .5, O[146] = !0, W(f.g, f.u), O[147] = !0, T.closePath(), O[148] = !0, T.fill(), O[149] = !0, T.globalAlpha = 1, O[150] = !0, T.strokeStyle = "black";
    }
  }
}
function V(c) {
  O[49] = !0;
  O[50] = !0;
  T.textAlign = "center";
  O[51] = !0;
  T.font = "30px Arial";
  O[49] = !0;
  var f = n(c.a.h);
  O[52] = !0;
  var d = f.next();
  for (O[52] = !0; !d.done; d = f.next()) {
    O[52] = !0;
    d = d.value;
    O[52] = !0;
    O[52] = !0;
    d = n(d);
    O[53] = !0;
    var e = d.next();
    for (O[53] = !0; !e.done; e = d.next()) {
      O[53] = !0, e = e.value, O[53] = !0, O[54] = !0, T.fillStyle = e.o, O[55] = !0, T.fillRect(e.i, e.j, c.a.a, c.a.a), O[60] = !0, T.fillStyle = "black", O[61] = !0, T.fillText(e.l, e.i + c.a.a / 2, e.j + c.a.a / 2 + 10);
    }
  }
}
function W(c, f) {
  O[75] = !0;
  O[76] = !0;
  var d = Math.atan2(f.y - c.y, f.x - c.x);
  O[79] = !0;
  f = Math.sqrt(Math.pow(c.x - f.x, 2) + Math.pow(c.y - f.y, 2));
  O[86] = !0;
  f = new J(c.x + f, c.y);
  O[88] = !0;
  O[90] = !0;
  var e = c.x + (f.x - c.x) / 2;
  O[99] = !0;
  T.save();
  O[103] = !0;
  T.lineWidth = 5.0;
  O[104] = !0;
  T.translate(c.x, c.y);
  O[105] = !0;
  T.rotate(d);
  O[106] = !0;
  T.translate(-c.x, -c.y);
  O[109] = !0;
  T.beginPath();
  O[110] = !0;
  T.moveTo(e, c.y - 15);
  O[113] = !0;
  T.arcTo(f.x + 15, f.y - 15, f.x + 15, f.y, 15);
  O[117] = !0;
  T.arcTo(f.x + 15, f.y + 15, e, c.y + 15, 15);
  O[121] = !0;
  T.arcTo(c.x - 15, c.y + 15, c.x - 15, c.y, 15);
  O[125] = !0;
  T.arcTo(c.x - 15, c.y - 15, e, c.y - 15, 15);
  O[130] = !0;
  T.lineTo(e, c.y - 15);
  O[132] = !0;
  T.stroke();
  O[133] = !0;
  T.restore();
}
;var X = [];
a.executedLines.push(X);
a.instrumentedLines.push("0080aac0ac28602d46a07e11c00ef0c25f9047b34d");
a.fileNames.push("js/controller.js");
function ea(c, f) {
  X[15] = !0;
  X[17] = !0;
  this.a = c;
  X[19] = !0;
  this.m = f;
  X[21] = !0;
  this.b = !1;
  X[23] = !0;
}
var Y = -1;
function G() {
  X[126] = !0;
  Y++;
  X[127] = !0;
  if (0 === Y % 4) {
    return X[128] = !0, "#4285F4";
  }
  X[129] = !0;
  if (1 === Y % 4) {
    return X[130] = !0, "#DB4437";
  }
  X[131] = !0;
  if (2 === Y % 4) {
    return X[132] = !0, "#F4B400";
  }
  X[134] = !0;
  return "#0F9D58";
}
;var Z = [];
a.executedLines.push(Z);
a.instrumentedLines.push("40");
a.fileNames.push("js/main.js");
Z[6] = !0;
(function() {
  X[140] = !0;
  var c = aa();
  X[143] = !0;
  Q("mikita", c);
  X[144] = !0;
  Q("patrick", c);
  X[145] = !0;
  Q("laura", c);
  X[146] = !0;
  Q("google", c);
  X[150] = !0;
  console.log(c);
  X[152] = !0;
  var f = new da(c);
  X[153] = !0;
  var d = new ea(c, f);
  X[156] = !0;
  window.addEventListener("mousedown", function(e) {
    X[156] = !0;
    X[157] = !0;
    X[30] = !0;
    X[31] = !0;
    e = new J(e.clientX, e.clientY);
    X[34] = !0;
    var m = d.a;
    C[156] = !0;
    C[157] = !0;
    var q = m.b + 10 * m.a;
    C[159] = !0;
    var r = 10 * m.a;
    C[162] = !0;
    e.x < q && e.y < r && e.x > m.b && 0 < e.y ? (X[35] = !0, d.b = !0, X[37] = !0, e = M(d.a, e), X[39] = !0, d.g = new J(e.i + d.a.a / 2, e.j + d.a.a / 2), X[43] = !0, console.log("Hit!")) : (X[45] = !0, console.log("Miss!"));
  });
  X[159] = !0;
  window.addEventListener("mousemove", function(e) {
    X[159] = !0;
    X[160] = !0;
    X[102] = !0;
    X[103] = !0;
    e = new J(e.clientX, e.clientY);
    X[105] = !0;
    d.b && (X[106] = !0, U(d.m), X[107] = !0, W(d.g, e));
  });
  X[162] = !0;
  window.addEventListener("mouseup", function(e) {
    X[162] = !0;
    X[163] = !0;
    X[53] = !0;
    X[54] = !0;
    e = new J(e.clientX, e.clientY);
    X[56] = !0;
    if (d.b) {
      X[58] = !0;
      d.b = !1;
      X[59] = !0;
      e = M(d.a, e);
      X[61] = !0;
      e = new J(e.i + d.a.a / 2, e.j + d.a.a / 2);
      X[65] = !0;
      var m = d.g;
      C[71] = !0;
      C[72] = !0;
      if (e.x === m.x && e.y === m.y) {
        X[66] = !0;
      } else {
        X[70] = !0;
        var q = d.a, r = d.g, h = e;
        C[173] = !0;
        C[174] = !0;
        m = [];
        C[176] = !0;
        var g = q.a;
        C[178] = !0;
        C[179] = !0;
        C[181] = !0;
        var k = r;
        var p = h;
        C[367] = !0;
        k.x !== p.x && k.y !== p.y ? (C[182] = !0, g = Math.sqrt(2 * Math.pow(q.a, 2)), C[183] = !0, k = g / Math.sqrt(2), C[184] = !0, p = k) : (C[185] = !0, k = r, p = h, C[371] = !0, 0.01 > Math.abs(k.x - p.x) && k.y !== p.y ? (C[186] = !0, k = 0, C[187] = !0, p = g) : (C[189] = !0, k = g, C[190] = !0, p = 0));
        C[194] = !0;
        r.y > h.y && (C[195] = !0, p *= -1);
        C[198] = !0;
        r.x > h.x && (C[199] = !0, k *= -1);
        C[205] = !0;
        r = M(q, r);
        C[206] = !0;
        r = new J(r.i + q.a / 2, r.j + q.a / 2);
        C[210] = !0;
        h = M(q, h);
        C[211] = !0;
        h = new J(h.i + q.a / 2, h.j + q.a / 2);
        C[216] = !0;
        g = K(r, h) / g + 1;
        C[221] = !0;
        if (0.001 < Math.abs(g - Math.round(g))) {
          C[224] = !0;
        } else {
          C[228] = !0;
          r = new J(r.x, r.y);
          C[230] = !0;
          h = 0;
          for (C[230] = !0; h < Math.round(g); ++h) {
            C[231] = !0;
            var u = M(q, r);
            C[232] = !0;
            m.push(u);
            C[234] = !0;
            r = new J(r.x + k, r.y + p);
          }
          C[238] = !0;
        }
        X[77] = !0;
        X[117] = !0;
        q = "";
        X[116] = !0;
        m = n(m);
        X[118] = !0;
        r = m.next();
        for (X[118] = !0; !r.done; r = m.next()) {
          X[118] = !0, r = r.value, X[118] = !0, X[119] = !0, q = q.concat(r.l);
        }
        X[121] = !0;
        m = q;
        X[79] = !0;
        console.log("Word found is: ", m);
        X[81] = !0;
        C[512] = !0;
        E.has(m) ? (X[82] = !0, m = new F(d.g, e), X[83] = !0, C[516] = !0, H.push(m), X[84] = !0, m = d.m, q = S(), O[136] = !0, O[137] = !0, m.b = q, X[85] = !0, U(d.m), X[86] = !0, W(d.g, e)) : (X[88] = !0, U(d.m));
        X[92] = !0;
        console.log("Distance from start to end is: ", K(d.g, e));
      }
    }
  });
  X[166] = !0;
  O[157] = !0;
  O[158] = !0;
  V(f);
})();

