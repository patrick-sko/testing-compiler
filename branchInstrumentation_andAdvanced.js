/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
self.window || (self.window = self, self.window.top = self);
var k = window.top.__jscov || (window.top.__jscov = {fileNames:[], branchPresent:[], branchesInLine:[], branchesTaken:[]}), p = [];
k.branchesTaken.push(p);
k.branchPresent.push("00000000000000000000000000001013000020210000000000000000000000000000002009008801002400000004010000000000880041020000c0020000000000000441000042000018220401000008000000002000000000000a00000100000000080080c2040000000000000000000000000000090000000000000000000000000008000000000034801400000000000b00008000000040240001800000004044000000000000000000000000008000000000003002000000002200000000000100000000000002000000548000000000000000000000004000100800020000000000200000004008000000000000000000000000000010000002000400000080800003000000000800000000003080020800000040080442000000000000050000001000000000002a2c000000000000000000401014900000000012000000014004068000800002010208002000000200100004000080c12004000a00500000000000000000000000000000000000001200020004000000000020010080010900000201090000001102000000003020002000000022001000000000000000000000000a0a002182002204000000000000040000048420000000000000000000000000001001000000808000000000440c0000000000000800000000000002");
var q = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 
2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
k.branchesInLine.push(q);
k.fileNames.push("js/base.js");
function r(a) {
  var d = 0;
  return function() {
    return d < a.length ? {done:!1, value:a[d++], } : {done:!0};
  };
}
function u(a) {
  var d = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  return d ? d.call(a) : {next:r(a)};
}
function v(a) {
  a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, ];
  for (var d = 0; d < a.length; ++d) {
    var c = a[d];
    if (c && c.Math == Math) {
      return c;
    }
  }
  throw Error("Cannot find global object");
}
var w = v(this), x = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, d, c) {
  if (a == Array.prototype || a == Object.prototype) {
    return a;
  }
  a[d] = c.value;
  return a;
};
function z(a, d) {
  if (d) {
    a: {
      var c = w;
      a = a.split(".");
      for (var b = 0; b < a.length - 1; b++) {
        var h = a[b];
        if (!(h in c)) {
          break a;
        }
        c = c[h];
      }
      a = a[a.length - 1];
      b = c[a];
      d = d(b);
      d != b && null != d && x(c, a, {configurable:!0, writable:!0, value:d});
    }
  }
}
z("Symbol", function(a) {
  function d(h) {
    if (this instanceof d) {
      throw new TypeError("Symbol is not a constructor");
    }
    return new c("jscomp_symbol_" + (h || "") + "_" + b++, h);
  }
  function c(h, m) {
    this.a = h;
    x(this, "description", {configurable:!0, writable:!0, value:m});
  }
  if (a) {
    return a;
  }
  c.prototype.toString = function() {
    return this.a;
  };
  var b = 0;
  return d;
});
z("Symbol.iterator", function(a) {
  if (a) {
    return a;
  }
  a = Symbol("Symbol.iterator");
  for (var d = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < d.length; c++) {
    var b = w[d[c]];
    "function" === typeof b && "function" != typeof b.prototype[a] && x(b.prototype, a, {configurable:!0, writable:!0, value:function() {
      return A(r(this));
    }});
  }
  return a;
});
function A(a) {
  a = {next:a};
  a[Symbol.iterator] = function() {
    return this;
  };
  return a;
}
function C(a, d) {
  return Object.prototype.hasOwnProperty.call(a, d);
}
z("WeakMap", function(a) {
  function d(f) {
    this.a = (e += Math.random() + 1).toString();
    if (f) {
      f = u(f);
      for (var g; !(g = f.next()).done;) {
        g = g.value, this.set(g[0], g[1]);
      }
    }
  }
  function c() {
  }
  function b(f) {
    var g = typeof f;
    return "object" === g && null !== f || "function" === g;
  }
  function h(f) {
    if (!C(f, n)) {
      var g = new c;
      x(f, n, {value:g});
    }
  }
  function m(f) {
    var g = Object[f];
    g && (Object[f] = function(l) {
      if (l instanceof c) {
        return l;
      }
      Object.isExtensible(l) && h(l);
      return g(l);
    });
  }
  if (function() {
    if (!a || !Object.seal) {
      return !1;
    }
    try {
      var f = Object.seal({}), g = Object.seal({}), l = new a([[f, 2], [g, 3]]);
      if (2 != l.get(f) || 3 != l.get(g)) {
        return !1;
      }
      l.delete(f);
      l.set(g, 4);
      return !l.has(f) && 4 == l.get(g);
    } catch (t) {
      return !1;
    }
  }()) {
    return a;
  }
  var n = "$jscomp_hidden_" + Math.random();
  m("freeze");
  m("preventExtensions");
  m("seal");
  var e = 0;
  d.prototype.set = function(f, g) {
    if (!b(f)) {
      throw Error("Invalid WeakMap key");
    }
    h(f);
    if (!C(f, n)) {
      throw Error("WeakMap key fail: " + f);
    }
    f[n][this.a] = g;
    return this;
  };
  d.prototype.get = function(f) {
    return b(f) && C(f, n) ? f[n][this.a] : void 0;
  };
  d.prototype.has = function(f) {
    return b(f) && C(f, n) && C(f[n], this.a);
  };
  d.prototype.delete = function(f) {
    return b(f) && C(f, n) && C(f[n], this.a) ? delete f[n][this.a] : !1;
  };
  return d;
});
z("Map", function(a) {
  function d() {
    var e = {};
    return e.f = e.next = e.head = e;
  }
  function c(e, f) {
    var g = e.a;
    return A(function() {
      if (g) {
        for (; g.head != e.a;) {
          g = g.f;
        }
        for (; g.next != g.head;) {
          return g = g.next, {done:!1, value:f(g)};
        }
        g = null;
      }
      return {done:!0, value:void 0};
    });
  }
  function b(e, f) {
    var g = f && typeof f;
    "object" == g || "function" == g ? m.has(f) ? g = m.get(f) : (g = "" + ++n, m.set(f, g)) : g = "p_" + f;
    var l = e.b[g];
    if (l && C(e.b, g)) {
      for (e = 0; e < l.length; e++) {
        var t = l[e];
        if (f !== f && t.key !== t.key || f === t.key) {
          return {id:g, list:l, index:e, c:t};
        }
      }
    }
    return {id:g, list:l, index:-1, c:void 0};
  }
  function h(e) {
    this.b = {};
    this.a = d();
    this.size = 0;
    if (e) {
      e = u(e);
      for (var f; !(f = e.next()).done;) {
        f = f.value, this.set(f[0], f[1]);
      }
    }
  }
  if (function() {
    if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) {
      return !1;
    }
    try {
      var e = Object.seal({x:4}), f = new a(u([[e, "s"]]));
      if ("s" != f.get(e) || 1 != f.size || f.get({x:4}) || f.set({x:4}, "t") != f || 2 != f.size) {
        return !1;
      }
      var g = f.entries(), l = g.next();
      if (l.done || l.value[0] != e || "s" != l.value[1]) {
        return !1;
      }
      l = g.next();
      return l.done || 4 != l.value[0].x || "t" != l.value[1] || !g.next().done ? !1 : !0;
    } catch (t) {
      return !1;
    }
  }()) {
    return a;
  }
  var m = new WeakMap;
  h.prototype.set = function(e, f) {
    e = 0 === e ? 0 : e;
    var g = b(this, e);
    g.list || (g.list = this.b[g.id] = []);
    g.c ? g.c.value = f : (g.c = {next:this.a, f:this.a.f, head:this.a, key:e, value:f, }, g.list.push(g.c), this.a.f.next = g.c, this.a.f = g.c, this.size++);
    return this;
  };
  h.prototype.delete = function(e) {
    e = b(this, e);
    return e.c && e.list ? (e.list.splice(e.index, 1), e.list.length || delete this.b[e.id], e.c.f.next = e.c.next, e.c.next.f = e.c.f, e.c.head = null, this.size--, !0) : !1;
  };
  h.prototype.clear = function() {
    this.b = {};
    this.a = this.a.f = d();
    this.size = 0;
  };
  h.prototype.has = function(e) {
    return !!b(this, e).c;
  };
  h.prototype.get = function(e) {
    return (e = b(this, e).c) && e.value;
  };
  h.prototype.entries = function() {
    return c(this, function(e) {
      return [e.key, e.value];
    });
  };
  h.prototype.keys = function() {
    return c(this, function(e) {
      return e.key;
    });
  };
  h.prototype.values = function() {
    return c(this, function(e) {
      return e.value;
    });
  };
  h.prototype.forEach = function(e, f) {
    for (var g = this.entries(), l; !(l = g.next()).done;) {
      l = l.value, e.call(f, l[1], l[0], this);
    }
  };
  h.prototype[Symbol.iterator] = h.prototype.entries;
  var n = 0;
  return h;
});
z("Set", function(a) {
  function d(c) {
    this.a = new Map;
    if (c) {
      c = u(c);
      for (var b; !(b = c.next()).done;) {
        this.add(b.value);
      }
    }
    this.size = this.a.size;
  }
  if (function() {
    if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) {
      return !1;
    }
    try {
      var c = Object.seal({x:4}), b = new a(u([c]));
      if (!b.has(c) || 1 != b.size || b.add(c) != b || 1 != b.size || b.add({x:4}) != b || 2 != b.size) {
        return !1;
      }
      var h = b.entries(), m = h.next();
      if (m.done || m.value[0] != c || m.value[1] != c) {
        return !1;
      }
      m = h.next();
      return m.done || m.value[0] == c || 4 != m.value[0].x || m.value[1] != m.value[0] ? !1 : h.next().done;
    } catch (n) {
      return !1;
    }
  }()) {
    return a;
  }
  d.prototype.add = function(c) {
    c = 0 === c ? 0 : c;
    this.a.set(c, c);
    this.size = this.a.size;
    return this;
  };
  d.prototype.delete = function(c) {
    c = this.a.delete(c);
    this.size = this.a.size;
    return c;
  };
  d.prototype.clear = function() {
    this.a.clear();
    this.size = 0;
  };
  d.prototype.has = function(c) {
    return this.a.has(c);
  };
  d.prototype.entries = function() {
    return this.a.entries();
  };
  d.prototype.values = function() {
    return this.a.values();
  };
  d.prototype.keys = d.prototype.values;
  d.prototype[Symbol.iterator] = d.prototype.values;
  d.prototype.forEach = function(c, b) {
    var h = this;
    this.a.forEach(function(m) {
      return c.call(b, m, m, h);
    });
  };
  return d;
});
z("Array.prototype.fill", function(a) {
  return a ? a : function(d, c, b) {
    var h = this.length || 0;
    0 > c && (c = Math.max(0, h + c));
    if (null == b || b > h) {
      b = h;
    }
    b = Number(b);
    0 > b && (b = Math.max(0, h + b));
    for (c = Number(c || 0); c < b; c++) {
      this[c] = d;
    }
    return this;
  };
});
p[75] = !0;
p[169] = !0;
p[179] = !0;
p[199] = !0;
var D = [];
k.branchesTaken.push(D);
k.branchPresent.push("0000000000000000000000000a00000000000000000020024400002040000000008124001a0000020a500270000000000000000080020000000c0018000810");
var q = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
k.branchesInLine.push(q);
k.fileNames.push("js/model.js");
var E = [8.498, 9.989, 12.191, 16.445, 27.607, 29.835, 31.85, 37.944, 45.49, 45.643, 46.935, 50.96, 53.365, 60.114, 67.621, 69.550, 69.645, 77.232, 83.559, 92.915, 95.673, 96.651, 99.211, 99.361, 101.355, 101.432], F = new Set;
function G(a, d) {
  var c = H();
  this.g = a;
  this.u = d;
  this.o = c;
}
var I = [];
function J(a, d) {
  this.x = a;
  this.y = d;
}
function L(a, d) {
  return Math.sqrt(Math.pow(a.x - d.x, 2) + Math.pow(a.y - d.y, 2));
}
function M() {
  this.a = this.b = 0;
  this.h = [];
}
function N(a, d) {
  return a.h[Math.floor(d.y / a.a)][Math.floor((d.x - a.b) / a.a)];
}
function O(a, d) {
  return 10 > a && 0 <= a && 0 <= d && 10 > d;
}
function P() {
  var a = Q.getBoundingClientRect().height, d = Q.getBoundingClientRect().width, c = new M;
  a /= 10;
  var b = d / 10;
  c.a = b > a ? a : b;
  c.b = d / 2 - 10 * c.a / 2;
  d = c.b;
  for (b = a = 0; 10 > b; ++b) {
    D[48] = !0;
    for (var h = [], m = 0; 10 > m; ++m) {
      D[50] = !0, h.push({i:d, j:a, o:"white", s:!1, l:"-"}), d += c.a;
    }
    D[51] = !0;
    c.h.push(h);
    d = c.b;
    a += c.a;
  }
  D[49] = !0;
  d = u(c.h);
  for (a = d.next(); !a.done; a = d.next()) {
    D[56] = !0;
    a = u(a.value);
    for (b = a.next(); !b.done; b = a.next()) {
      D[58] = !0;
      b = b.value;
      h = 101.432 * Math.random();
      for (var n = m = 0; 26 > n; ++n) {
        if (D[52] = !0, h < E[n]) {
          D[54] = !0;
          m = n;
          break;
        } else {
          D[55] = !0;
        }
      }
      D[53] = !0;
      b.l = String.fromCharCode(97 + m);
    }
    D[59] = !0;
  }
  D[57] = !0;
  return c;
}
function R(a, d) {
  var c;
  F.add(a);
  var b = a;
  var h = b.length;
  var m = 0.25 > Math.random() ? !0 : !1;
  m ? (D[30] = !0, b = b.split("").reverse().join("")) : D[31] = !0;
  var n = Math.random();
  if (0.33 > n) {
    D[32] = !0;
    var e = "vertical";
  } else {
    D[33] = !0, 0.66 > n ? (D[34] = !0, e = "diagonal") : (D[35] = !0, e = "horizontal");
  }
  n = c = 0;
  "vertical" === e ? (D[36] = !0, c = 1) : (D[37] = !0, "diagonal" === e ? (D[38] = !0, n = c = 1) : (D[39] = !0, "horizontal" === e ? (D[40] = !0, n = 1) : D[41] = !0));
  var f = Math.floor(10 * Math.random()), g = Math.floor(10 * Math.random());
  for (console.log("Now placing: ", b);;) {
    D[42] = !0;
    var l = h;
    var t = f, y = g, B = e;
    if (O(t, y)) {
      D[17] = !0;
    } else {
      throw D[16] = !0, console.log("Index is: ", t, ",", y), "Error - inital square location is not valid";
    }
    --l;
    if ("vertical" === B) {
      D[18] = !0, l = O(t, y + l);
    } else {
      if (D[19] = !0, "horizontal" === B) {
        D[20] = !0, l = O(t + l, y);
      } else {
        if (D[21] = !0, "diagonal" === B) {
          D[22] = !0, l = O(t + l, y + l);
        } else {
          throw D[23] = !0, "ERROR In doesWordFit, no valid option for direction";
        }
      }
    }
    if (l) {
      D[44] = !0;
      a: {
        l = d;
        t = b;
        y = f;
        B = g;
        for (var aa = c, ba = n, K = 0; K < t.length; ++K) {
          D[24] = !0;
          var S = l.h[y][B];
          if (S.s) {
            D[26] = !0;
            if (S.l != t.charAt(K)) {
              D[28] = !0;
              l = !1;
              break a;
            }
            D[29] = !0;
          } else {
            D[27] = !0;
          }
          y += ba;
          B += aa;
        }
        l = D[25] = !0;
      }
      if (l) {
        D[46] = !0;
        break;
      } else {
        D[47] = !0;
      }
    } else {
      D[45] = !0;
    }
    console.log("nooo");
    f = Math.floor(10 * Math.random());
    g = Math.floor(10 * Math.random());
  }
  D[43] = !0;
  b = f;
  h = g;
  m ? (D[60] = !0, a = a.split("").reverse().join("")) : D[61] = !0;
  console.log("Part of word is at index: ", b, ",", h);
  for (m = 0; m < a.length; ++m) {
    D[62] = !0, g = d.h[b][h], b += n, h += c, g.l = a.charAt(m), g.s = !0;
  }
  D[63] = !0;
}
;var T = [];
k.branchesTaken.push(T);
k.branchPresent.push("000000000002300000000000000000000040");
var q = [2, 2, 2, 2];
k.branchesInLine.push(q);
k.fileNames.push("js/view.js");
var Q = document.getElementById("wordSearchCanvas"), U = Q.getContext("2d");
function ca(a) {
  this.a = a;
  this.b = I;
}
function V(a) {
  U.clearRect(0, 0, Q.width, Q.height);
  W(a);
  if (0 < a.b.length) {
    T[0] = !0;
    a = u(a.b);
    for (var d = a.next(); !d.done; d = a.next()) {
      T[6] = !0, d = d.value, U.fillStyle = d.o, U.strokeStyle = d.o, U.globalAlpha = .5, X(d.g, d.u), U.closePath(), U.fill(), U.globalAlpha = 1, U.strokeStyle = "black";
    }
    T[7] = !0;
  } else {
    T[1] = !0;
  }
}
function W(a) {
  U.textAlign = "center";
  U.font = "30px Arial";
  for (var d = u(a.a.h), c = d.next(); !c.done; c = d.next()) {
    T[2] = !0;
    c = u(c.value);
    for (var b = c.next(); !b.done; b = c.next()) {
      T[4] = !0, b = b.value, U.fillStyle = b.o, U.fillRect(b.i, b.j, a.a.a, a.a.a), U.fillStyle = "black", U.fillText(b.l, b.i + a.a.a / 2, b.j + a.a.a / 2 + 10);
    }
    T[5] = !0;
  }
  T[3] = !0;
}
function X(a, d) {
  var c = Math.atan2(d.y - a.y, d.x - a.x);
  d = new J(a.x + Math.sqrt(Math.pow(a.x - d.x, 2) + Math.pow(a.y - d.y, 2)), a.y);
  var b = a.x + (d.x - a.x) / 2;
  U.save();
  U.lineWidth = 5.0;
  U.translate(a.x, a.y);
  U.rotate(c);
  U.translate(-a.x, -a.y);
  U.beginPath();
  U.moveTo(b, a.y - 15);
  U.arcTo(d.x + 15, d.y - 15, d.x + 15, d.y, 15);
  U.arcTo(d.x + 15, d.y + 15, b, a.y + 15, 15);
  U.arcTo(a.x - 15, a.y + 15, a.x - 15, a.y, 15);
  U.arcTo(a.x - 15, a.y - 15, b, a.y - 15, 15);
  U.lineTo(b, a.y - 15);
  U.stroke();
  U.restore();
}
;var Y = [];
k.branchesTaken.push(Y);
k.branchPresent.push("000000000400000102000200000240800a");
var q = [2, 2, 2, 2, 2, 2, 2, 2, 2];
k.branchesInLine.push(q);
k.fileNames.push("js/controller.js");
function da(a, d) {
  this.a = a;
  this.m = d;
  this.b = !1;
}
var Z = -1;
function H() {
  Z++;
  if (0 === Z % 4) {
    return Y[12] = !0, "#4285F4";
  }
  Y[13] = !0;
  if (1 === Z % 4) {
    return Y[14] = !0, "#DB4437";
  }
  Y[15] = !0;
  if (2 === Z % 4) {
    return Y[16] = !0, "#F4B400";
  }
  Y[17] = !0;
  return "#0F9D58";
}
;(function() {
  var a = P();
  R("mikita", a);
  R("patrick", a);
  R("laura", a);
  R("google", a);
  console.log(a);
  var d = new ca(a), c = new da(a, d);
  window.addEventListener("mousedown", function(b) {
    b = new J(b.clientX, b.clientY);
    var h = c.a, m = 10 * h.a;
    b.x < h.b + 10 * h.a && b.y < m && b.x > h.b && 0 < b.y ? (Y[0] = !0, c.b = !0, b = N(c.a, b), c.g = new J(b.i + c.a.a / 2, b.j + c.a.a / 2), console.log("Hit!")) : (Y[1] = !0, console.log("Miss!"));
  });
  window.addEventListener("mousemove", function(b) {
    b = new J(b.clientX, b.clientY);
    c.b ? (Y[8] = !0, V(c.m), X(c.g, b)) : Y[9] = !0;
  });
  window.addEventListener("mouseup", function(b) {
    b = new J(b.clientX, b.clientY);
    if (c.b) {
      Y[2] = !0;
      c.b = !1;
      b = N(c.a, b);
      b = new J(b.i + c.a.a / 2, b.j + c.a.a / 2);
      var h = c.g;
      if (b.x === h.x && b.y === h.y) {
        Y[4] = !0;
      } else {
        Y[5] = !0;
        var m = c.a, n = c.g, e = b;
        h = [];
        var f = m.a, g;
        if (n.x !== e.x && n.y !== e.y) {
          D[4] = !0;
          f = Math.sqrt(2 * Math.pow(m.a, 2));
          var l = g = f / Math.sqrt(2);
        } else {
          D[5] = !0, 0.01 > Math.abs(n.x - e.x) && n.y !== e.y ? (D[6] = !0, g = 0, l = f) : (D[7] = !0, g = f, l = 0);
        }
        n.y > e.y ? (D[8] = !0, l *= -1) : D[9] = !0;
        n.x > e.x ? (D[10] = !0, g *= -1) : D[11] = !0;
        n = N(m, n);
        n = new J(n.i + m.a / 2, n.j + m.a / 2);
        e = N(m, e);
        e = new J(e.i + m.a / 2, e.j + m.a / 2);
        f = L(n, e) / f + 1;
        if (0.001 < Math.abs(f - Math.round(f))) {
          D[12] = !0;
        } else {
          D[13] = !0;
          n = new J(n.x, n.y);
          for (e = 0; e < Math.round(f); ++e) {
            D[14] = !0, h.push(N(m, n)), n = new J(n.x + g, n.y + l);
          }
          D[15] = !0;
        }
        m = "";
        h = u(h);
        for (g = h.next(); !g.done; g = h.next()) {
          Y[10] = !0, m = m.concat(g.value.l);
        }
        Y[11] = !0;
        h = m;
        console.log("Word found is: ", h);
        F.has(h) ? (Y[6] = !0, I.push(new G(c.g, b)), c.m.b = I, V(c.m), X(c.g, b)) : (Y[7] = !0, V(c.m));
        console.log("Distance from start to end is: ", L(c.g, b));
      }
    } else {
      Y[3] = !0;
    }
  });
  W(d);
})();

