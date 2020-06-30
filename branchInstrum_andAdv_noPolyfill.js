/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
self.window || (self.window = self, self.window.top = self);
var d = window.top.__jscov || (window.top.__jscov = {fileNames:[], branchPresent:[], branchesInLine:[], branchesTaken:[]}), h = [];
d.branchesTaken.push(h);
d.branchPresent.push("00000000000000000000000000001013000020210000000000000000000000000000002009008801002400000004010000000000880041020000c0020000000000000441000042000018220401000008000000002000000000000a00000100000000080080c2040000000000000000000000000000090000000000000000000000000008000000000034801400000000000b00008000000040240001800000004044000000000000000000000000008000000000003002000000002200000000000100000000000002000000548000000000000000000000004000100800020000000000200000004008000000000000000000000000000010000002000400000080800003000000000800000000003080020800000040080442000000000000050000001000000000002a2c000000000000000000401014900000000012000000014004068000800002010208002000000200100004000080c12004000a00500000000000000000000000000000000000001200020004000000000020010080010900000201090000001102000000003020002000000022001000000000000000000000000a0a002182002204000000000000040000048420000000000000000000000000001001000000808000000000440c0000000000000800000000000002");
var n = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 
2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
d.branchesInLine.push(n);
d.fileNames.push("js/base.js");
function q(a) {
  var c = 0;
  return function() {
    return c < a.length ? {done:!1, value:a[c++], } : {done:!0};
  };
}
function t(a) {
  var c = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  return c ? c.call(a) : {next:q(a)};
}
h[75] = !0;
h[169] = !0;
h[179] = !0;
h[199] = !0;
var u = [];
d.branchesTaken.push(u);
d.branchPresent.push("0000000000000000000000000a00000000000000000020024400002040000000008124001a0000020a500270000000000000000080020000000c0018000810");
var n = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
d.branchesInLine.push(n);
d.fileNames.push("js/model.js");
var x = [8.498, 9.989, 12.191, 16.445, 27.607, 29.835, 31.85, 37.944, 45.49, 45.643, 46.935, 50.96, 53.365, 60.114, 67.621, 69.550, 69.645, 77.232, 83.559, 92.915, 95.673, 96.651, 99.211, 99.361, 101.355, 101.432], y = new Set;
function A(a, c) {
  var e = B();
  this.c = a;
  this.o = c;
  this.l = e;
}
var C = [];
function D(a, c) {
  this.x = a;
  this.y = c;
}
function E(a, c) {
  return Math.sqrt(Math.pow(a.x - c.x, 2) + Math.pow(a.y - c.y, 2));
}
function F() {
  this.a = this.b = 0;
  this.f = [];
}
function G(a, c) {
  return a.f[Math.floor(c.y / a.a)][Math.floor((c.x - a.b) / a.a)];
}
function I(a, c) {
  return 10 > a && 0 <= a && 0 <= c && 10 > c;
}
function J() {
  var a = K.getBoundingClientRect().height, c = K.getBoundingClientRect().width, e = new F;
  a /= 10;
  var b = c / 10;
  e.a = b > a ? a : b;
  e.b = c / 2 - 10 * e.a / 2;
  c = e.b;
  for (b = a = 0; 10 > b; ++b) {
    u[48] = !0;
    for (var k = [], g = 0; 10 > g; ++g) {
      u[50] = !0, k.push({g:c, h:a, l:"white", m:!1, i:"-"}), c += e.a;
    }
    u[51] = !0;
    e.f.push(k);
    c = e.b;
    a += e.a;
  }
  u[49] = !0;
  c = t(e.f);
  for (a = c.next(); !a.done; a = c.next()) {
    u[56] = !0;
    a = t(a.value);
    for (b = a.next(); !b.done; b = a.next()) {
      u[58] = !0;
      b = b.value;
      k = 101.432 * Math.random();
      for (var f = g = 0; 26 > f; ++f) {
        if (u[52] = !0, k < x[f]) {
          u[54] = !0;
          g = f;
          break;
        } else {
          u[55] = !0;
        }
      }
      u[53] = !0;
      b.i = String.fromCharCode(97 + g);
    }
    u[59] = !0;
  }
  u[57] = !0;
  return e;
}
function L(a, c) {
  var e;
  y.add(a);
  var b = a;
  var k = b.length;
  var g = 0.25 > Math.random() ? !0 : !1;
  g ? (u[30] = !0, b = b.split("").reverse().join("")) : u[31] = !0;
  var f = Math.random();
  if (0.33 > f) {
    u[32] = !0;
    var l = "vertical";
  } else {
    u[33] = !0, 0.66 > f ? (u[34] = !0, l = "diagonal") : (u[35] = !0, l = "horizontal");
  }
  f = e = 0;
  "vertical" === l ? (u[36] = !0, e = 1) : (u[37] = !0, "diagonal" === l ? (u[38] = !0, f = e = 1) : (u[39] = !0, "horizontal" === l ? (u[40] = !0, f = 1) : u[41] = !0));
  var r = Math.floor(10 * Math.random()), p = Math.floor(10 * Math.random());
  for (console.log("Now placing: ", b);;) {
    u[42] = !0;
    var m = k;
    var v = r, w = p, z = l;
    if (I(v, w)) {
      u[17] = !0;
    } else {
      throw u[16] = !0, console.log("Index is: ", v, ",", w), "Error - inital square location is not valid";
    }
    --m;
    if ("vertical" === z) {
      u[18] = !0, m = I(v, w + m);
    } else {
      if (u[19] = !0, "horizontal" === z) {
        u[20] = !0, m = I(v + m, w);
      } else {
        if (u[21] = !0, "diagonal" === z) {
          u[22] = !0, m = I(v + m, w + m);
        } else {
          throw u[23] = !0, "ERROR In doesWordFit, no valid option for direction";
        }
      }
    }
    if (m) {
      u[44] = !0;
      a: {
        m = c;
        v = b;
        w = r;
        z = p;
        for (var U = e, V = f, H = 0; H < v.length; ++H) {
          u[24] = !0;
          var M = m.f[w][z];
          if (M.m) {
            u[26] = !0;
            if (M.i != v.charAt(H)) {
              u[28] = !0;
              m = !1;
              break a;
            }
            u[29] = !0;
          } else {
            u[27] = !0;
          }
          w += V;
          z += U;
        }
        m = u[25] = !0;
      }
      if (m) {
        u[46] = !0;
        break;
      } else {
        u[47] = !0;
      }
    } else {
      u[45] = !0;
    }
    console.log("nooo");
    r = Math.floor(10 * Math.random());
    p = Math.floor(10 * Math.random());
  }
  u[43] = !0;
  b = r;
  k = p;
  g ? (u[60] = !0, a = a.split("").reverse().join("")) : u[61] = !0;
  console.log("Part of word is at index: ", b, ",", k);
  for (g = 0; g < a.length; ++g) {
    u[62] = !0, p = c.f[b][k], b += f, k += e, p.i = a.charAt(g), p.m = !0;
  }
  u[63] = !0;
}
;var N = [];
d.branchesTaken.push(N);
d.branchPresent.push("000000000002300000000000000000000040");
var n = [2, 2, 2, 2];
d.branchesInLine.push(n);
d.fileNames.push("js/view.js");
var K = document.getElementById("wordSearchCanvas"), O = K.getContext("2d");
function P(a) {
  this.a = a;
  this.b = C;
}
function Q(a) {
  O.clearRect(0, 0, K.width, K.height);
  R(a);
  if (0 < a.b.length) {
    N[0] = !0;
    a = t(a.b);
    for (var c = a.next(); !c.done; c = a.next()) {
      N[6] = !0, c = c.value, O.fillStyle = c.l, O.strokeStyle = c.l, O.globalAlpha = .5, S(c.c, c.o), O.closePath(), O.fill(), O.globalAlpha = 1, O.strokeStyle = "black";
    }
    N[7] = !0;
  } else {
    N[1] = !0;
  }
}
function R(a) {
  O.textAlign = "center";
  O.font = "30px Arial";
  for (var c = t(a.a.f), e = c.next(); !e.done; e = c.next()) {
    N[2] = !0;
    e = t(e.value);
    for (var b = e.next(); !b.done; b = e.next()) {
      N[4] = !0, b = b.value, O.fillStyle = b.l, O.fillRect(b.g, b.h, a.a.a, a.a.a), O.fillStyle = "black", O.fillText(b.i, b.g + a.a.a / 2, b.h + a.a.a / 2 + 10);
    }
    N[5] = !0;
  }
  N[3] = !0;
}
function S(a, c) {
  var e = Math.atan2(c.y - a.y, c.x - a.x);
  c = new D(a.x + Math.sqrt(Math.pow(a.x - c.x, 2) + Math.pow(a.y - c.y, 2)), a.y);
  var b = a.x + (c.x - a.x) / 2;
  O.save();
  O.lineWidth = 5.0;
  O.translate(a.x, a.y);
  O.rotate(e);
  O.translate(-a.x, -a.y);
  O.beginPath();
  O.moveTo(b, a.y - 15);
  O.arcTo(c.x + 15, c.y - 15, c.x + 15, c.y, 15);
  O.arcTo(c.x + 15, c.y + 15, b, a.y + 15, 15);
  O.arcTo(a.x - 15, a.y + 15, a.x - 15, a.y, 15);
  O.arcTo(a.x - 15, a.y - 15, b, a.y - 15, 15);
  O.lineTo(b, a.y - 15);
  O.stroke();
  O.restore();
}
;var T = [];
d.branchesTaken.push(T);
d.branchPresent.push("000000000400000102000200000240800a");
var n = [2, 2, 2, 2, 2, 2, 2, 2, 2];
d.branchesInLine.push(n);
d.fileNames.push("js/controller.js");
function W(a, c) {
  this.a = a;
  this.j = c;
  this.b = !1;
}
var X = -1;
function B() {
  X++;
  if (0 === X % 4) {
    return T[12] = !0, "#4285F4";
  }
  T[13] = !0;
  if (1 === X % 4) {
    return T[14] = !0, "#DB4437";
  }
  T[15] = !0;
  if (2 === X % 4) {
    return T[16] = !0, "#F4B400";
  }
  T[17] = !0;
  return "#0F9D58";
}
;(function() {
  var a = J();
  L("mikita", a);
  L("patrick", a);
  L("laura", a);
  L("google", a);
  console.log(a);
  var c = new P(a), e = new W(a, c);
  window.addEventListener("mousedown", function(b) {
    b = new D(b.clientX, b.clientY);
    var k = e.a, g = 10 * k.a;
    b.x < k.b + 10 * k.a && b.y < g && b.x > k.b && 0 < b.y ? (T[0] = !0, e.b = !0, b = G(e.a, b), e.c = new D(b.g + e.a.a / 2, b.h + e.a.a / 2), console.log("Hit!")) : (T[1] = !0, console.log("Miss!"));
  });
  window.addEventListener("mousemove", function(b) {
    b = new D(b.clientX, b.clientY);
    e.b ? (T[8] = !0, Q(e.j), S(e.c, b)) : T[9] = !0;
  });
  window.addEventListener("mouseup", function(b) {
    b = new D(b.clientX, b.clientY);
    if (e.b) {
      T[2] = !0;
      e.b = !1;
      b = G(e.a, b);
      b = new D(b.g + e.a.a / 2, b.h + e.a.a / 2);
      var k = e.c;
      if (b.x === k.x && b.y === k.y) {
        T[4] = !0;
      } else {
        T[5] = !0;
        var g = e.a, f = e.c, l = b;
        k = [];
        var r = g.a, p;
        if (f.x !== l.x && f.y !== l.y) {
          u[4] = !0;
          r = Math.sqrt(2 * Math.pow(g.a, 2));
          var m = p = r / Math.sqrt(2);
        } else {
          u[5] = !0, 0.01 > Math.abs(f.x - l.x) && f.y !== l.y ? (u[6] = !0, p = 0, m = r) : (u[7] = !0, p = r, m = 0);
        }
        f.y > l.y ? (u[8] = !0, m *= -1) : u[9] = !0;
        f.x > l.x ? (u[10] = !0, p *= -1) : u[11] = !0;
        f = G(g, f);
        f = new D(f.g + g.a / 2, f.h + g.a / 2);
        l = G(g, l);
        l = new D(l.g + g.a / 2, l.h + g.a / 2);
        r = E(f, l) / r + 1;
        if (0.001 < Math.abs(r - Math.round(r))) {
          u[12] = !0;
        } else {
          u[13] = !0;
          f = new D(f.x, f.y);
          for (l = 0; l < Math.round(r); ++l) {
            u[14] = !0, k.push(G(g, f)), f = new D(f.x + p, f.y + m);
          }
          u[15] = !0;
        }
        g = "";
        k = t(k);
        for (p = k.next(); !p.done; p = k.next()) {
          T[10] = !0, g = g.concat(p.value.i);
        }
        T[11] = !0;
        k = g;
        console.log("Word found is: ", k);
        y.has(k) ? (T[6] = !0, C.push(new A(e.c, b)), e.j.b = C, Q(e.j), S(e.c, b)) : (T[7] = !0, Q(e.j));
        console.log("Distance from start to end is: ", E(e.c, b));
      }
    } else {
      T[3] = !0;
    }
  });
  R(c);
})();

