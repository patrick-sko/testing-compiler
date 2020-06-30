/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
self.window || (self.window = self, self.window.top = self);
var a = window.top.__jscov || (window.top.__jscov = {fileNames:[], instrumentedLines:[], executedLines:[]}), c = [];
a.executedLines.push(c);
a.instrumentedLines.push("000000f8158001000000000000e030bb0000f831240000000000000000000000000000701901dc8b006e01000087130000000000ac0163160018e04f0000001830c04cc14800c708003c66946300003c000000010060000400c09f008003000000001c00c0c67d11000022000000000008001800c12b010000000000000000000000007c540106101c7eca9c84121007e04f0900c0755800f03e0c059a0c2300d8cc02180016c000067000800280018439000000007c9700800100e78e01000040011500e01c000007004400de8fd99c000000000000000000c830bd9c1126000000070000010000603a0200300000c000180000402f0000b90000170008000000b4c3b117010000004c802c010000798007001a8018609e2efe211500001e80df808fb01c8240665b00ff3d250011021800aaaa0af871befc014026807b000c805bd94c8fb401b8b79723675d1868c060a7b130181e000cc0c7238c004f04f80238802008102000020401080200805455c03f0117c00f2040c00306f0ab00c02b0ba90882173d69848e931b470200947865a370a1c01e6784340ac0a5135e0000250090d81e6e457392e967e440a04e04828084850294bfa1021000a01405005042010020a93803028000f4c505800200cd9c08086000c080180030000003c0078605");
a.fileNames.push("js/base.js");
function e(b) {
  c[27] = !0;
  c[28] = !0;
  var d = 0;
  c[29] = !0;
  return function() {
    c[29] = !0;
    c[30] = !0;
    if (d < b.length) {
      return c[31] = !0, {done:!1, value:b[d++], };
    }
    c[36] = !0;
    return {done:!0};
  };
}
function m(b) {
  c[30] = !0;
  c[32] = !0;
  var d = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
  c[34] = !0;
  d ? b = d.call(b) : (c[47] = !0, c[48] = !0, b = {next:e(b)});
  return b;
}
;var r = [];
a.executedLines.push(r);
a.instrumentedLines.push("00e001800a183060801900a8de0380aa0a5802b00460ed6fcc600c21d145000083a76d843e0baca65efcc772398488aa02808096b407d451003d027c801a310f1101");
a.fileNames.push("js/model.js");
var u = [8.498, 9.989, 12.191, 16.445, 27.607, 29.835, 31.85, 37.944, 45.49, 45.643, 46.935, 50.96, 53.365, 60.114, 67.621, 69.550, 69.645, 77.232, 83.559, 92.915, 95.673, 96.651, 99.211, 99.361, 101.355, 101.432], v = new Set;
function y(b, d) {
  var g = A();
  r[13] = !0;
  r[14] = !0;
  this.c = b;
  r[15] = !0;
  this.o = d;
  r[16] = !0;
  this.l = g;
}
var B = [];
function C(b, d) {
  r[31] = !0;
  r[33] = !0;
  this.x = b;
  r[35] = !0;
  this.y = d;
}
function D(b, d) {
  r[61] = !0;
  r[62] = !0;
  return Math.sqrt(Math.pow(b.x - d.x, 2) + Math.pow(b.y - d.y, 2));
}
function E() {
  r[119] = !0;
  r[121] = !0;
  this.b = 0;
  r[123] = !0;
  r[125] = !0;
  r[127] = !0;
  r[129] = !0;
  this.a = 0;
  r[131] = !0;
  this.f = [];
}
function G(b, d) {
  r[139] = !0;
  r[140] = !0;
  var g = Math.floor(d.y / b.a);
  r[142] = !0;
  d = Math.floor((d.x - b.b) / b.a);
  r[145] = !0;
  return b.f[g][d];
}
function H(b, d) {
  r[256] = !0;
  r[257] = !0;
  return 10 > b && 0 <= b && 0 <= d && 10 > d;
}
function I() {
  J[12] = !0;
  var b = K.getBoundingClientRect().height;
  J[20] = !0;
  var d = K.getBoundingClientRect().width;
  r[399] = !0;
  r[407] = !0;
  var g = new E;
  r[409] = !0;
  b /= 10;
  r[410] = !0;
  var f = d / 10;
  r[412] = !0;
  g.a = f > b ? b : f;
  r[415] = !0;
  d = d / 2 - 10 * g.a / 2;
  r[418] = !0;
  g.b = d;
  r[420] = !0;
  d = g.b;
  r[421] = !0;
  b = 0;
  r[423] = !0;
  f = 0;
  for (r[423] = !0; 10 > f; ++f) {
    r[424] = !0;
    var k = [];
    r[425] = !0;
    var l = 0;
    for (r[425] = !0; 10 > l; ++l) {
      r[426] = !0;
      var h = {g:d, h:b, l:"white", m:!1, i:"-"};
      r[434] = !0;
      k.push(h);
      r[436] = !0;
      d += g.a;
    }
    r[438] = !0;
    g.f.push(k);
    r[439] = !0;
    d = g.b;
    r[440] = !0;
    b += g.a;
  }
  r[444] = !0;
  r[474] = !0;
  d = m(g.f);
  r[475] = !0;
  b = d.next();
  for (r[475] = !0; !b.done; b = d.next()) {
    for (r[475] = !0, b = b.value, r[475] = !0, r[475] = !0, b = m(b), r[476] = !0, f = b.next(), r[476] = !0; !f.done; f = b.next()) {
      r[476] = !0;
      f = f.value;
      r[476] = !0;
      r[477] = !0;
      k = 101.432 * Math.random();
      r[478] = !0;
      r[456] = !0;
      l = 0;
      r[458] = !0;
      h = 0;
      for (r[458] = !0; 26 > h; ++h) {
        if (r[459] = !0, k < u[h]) {
          r[460] = !0;
          l = h;
          r[461] = !0;
          break;
        }
      }
      r[465] = !0;
      f.i = String.fromCharCode(97 + l);
    }
  }
  r[446] = !0;
  return g;
}
function M(b, d) {
  r[487] = !0;
  v.add(b);
  r[489] = !0;
  var g = b;
  r[306] = !0;
  r[307] = !0;
  var f = g.length;
  r[309] = !0;
  r[311] = !0;
  var k = 0.25 > Math.random() ? !0 : !1;
  r[313] = !0;
  k && (r[314] = !0, g = g.split("").reverse().join(""));
  r[317] = !0;
  var l = Math.random();
  r[319] = !0;
  r[321] = !0;
  if (0.33 > l) {
    r[322] = !0;
    var h = "vertical";
  } else {
    r[323] = !0, 0.66 > l ? (r[324] = !0, h = "diagonal") : (r[326] = !0, h = "horizontal");
  }
  r[330] = !0;
  var q = 0;
  r[331] = !0;
  l = 0;
  r[332] = !0;
  "vertical" === h ? (r[333] = !0, q = 1) : (r[334] = !0, "diagonal" === h ? (r[335] = !0, q = 1, r[336] = !0, l = 1) : (r[337] = !0, "horizontal" === h && (r[338] = !0, l = 1)));
  r[342] = !0;
  var t = Math.floor(10 * Math.random());
  r[343] = !0;
  var p = Math.floor(10 * Math.random());
  r[345] = !0;
  console.log("Now placing: ", g);
  for (r[348] = !0;;) {
    r[349] = !0;
    var n = f;
    var w = t, x = p, z = h;
    r[263] = !0;
    r[264] = !0;
    if (!H(w, x)) {
      throw r[265] = !0, console.log("Index is: ", w, ",", x), r[266] = !0, "Error - inital square location is not valid";
    }
    r[269] = !0;
    --n;
    r[271] = !0;
    if ("vertical" === z) {
      r[272] = !0, n = H(w, x + n);
    } else {
      if (r[274] = !0, "horizontal" === z) {
        r[275] = !0, n = H(w + n, x);
      } else {
        if (r[277] = !0, "diagonal" === z) {
          r[278] = !0, n = H(w + n, x + n);
        } else {
          throw r[282] = !0, "ERROR In doesWordFit, no valid option for direction";
        }
      }
    }
    if (n) {
      r[350] = !0;
      a: {
        n = d;
        w = g;
        x = t;
        z = p;
        var V = q, W = l;
        r[287] = !0;
        r[289] = !0;
        var F = 0;
        for (r[289] = !0; F < w.length; ++F) {
          r[290] = !0;
          var L = n.f[x][z];
          r[291] = !0;
          if (L.m && (r[292] = !0, L.i != w.charAt(F))) {
            r[293] = !0;
            n = !1;
            break a;
          }
          r[296] = !0;
          x += W;
          r[297] = !0;
          z += V;
        }
        n = r[299] = !0;
      }
      if (n) {
        r[352] = !0;
        break;
      }
    }
    r[355] = !0;
    console.log("nooo");
    r[356] = !0;
    t = Math.floor(10 * Math.random());
    r[357] = !0;
    p = Math.floor(10 * Math.random());
  }
  r[362] = !0;
  g = t;
  f = p;
  r[491] = !0;
  k && (r[492] = !0, b = b.split("").reverse().join(""));
  r[496] = !0;
  console.log("Part of word is at index: ", g, ",", f);
  r[500] = !0;
  k = 0;
  for (r[500] = !0; k < b.length; ++k) {
    r[501] = !0, p = d.f[g][f], r[504] = !0, g += l, r[505] = !0, f += q, r[506] = !0, p.i = b.charAt(k), r[507] = !0, p.m = !0;
  }
}
function N() {
  r[520] = !0;
  return B;
}
;var J = [];
a.executedLines.push(J);
a.instrumentedLines.push("00101000cd07fe30009840058867222234e37f60");
a.fileNames.push("js/view.js");
var K = document.getElementById("wordSearchCanvas"), O = K.getContext("2d");
function P(b) {
  var d = N();
  J[32] = !0;
  J[34] = !0;
  this.a = b;
  J[35] = !0;
  this.b = d;
}
function Q(b) {
  J[38] = !0;
  J[39] = !0;
  O.clearRect(0, 0, K.width, K.height);
  J[40] = !0;
  R(b);
  J[41] = !0;
  if (0 < b.b.length) {
    J[42] = !0;
    J[141] = !0;
    J[141] = !0;
    b = m(b.b);
    J[142] = !0;
    var d = b.next();
    for (J[142] = !0; !d.done; d = b.next()) {
      J[142] = !0, d = d.value, J[142] = !0, J[143] = !0, O.fillStyle = d.l, J[144] = !0, O.strokeStyle = d.l, J[145] = !0, O.globalAlpha = .5, J[146] = !0, S(d.c, d.o), J[147] = !0, O.closePath(), J[148] = !0, O.fill(), J[149] = !0, O.globalAlpha = 1, J[150] = !0, O.strokeStyle = "black";
    }
  }
}
function R(b) {
  J[49] = !0;
  J[50] = !0;
  O.textAlign = "center";
  J[51] = !0;
  O.font = "30px Arial";
  J[49] = !0;
  var d = m(b.a.f);
  J[52] = !0;
  var g = d.next();
  for (J[52] = !0; !g.done; g = d.next()) {
    J[52] = !0;
    g = g.value;
    J[52] = !0;
    J[52] = !0;
    g = m(g);
    J[53] = !0;
    var f = g.next();
    for (J[53] = !0; !f.done; f = g.next()) {
      J[53] = !0, f = f.value, J[53] = !0, J[54] = !0, O.fillStyle = f.l, J[55] = !0, O.fillRect(f.g, f.h, b.a.a, b.a.a), J[60] = !0, O.fillStyle = "black", J[61] = !0, O.fillText(f.i, f.g + b.a.a / 2, f.h + b.a.a / 2 + 10);
    }
  }
}
function S(b, d) {
  J[75] = !0;
  J[76] = !0;
  var g = Math.atan2(d.y - b.y, d.x - b.x);
  J[79] = !0;
  d = Math.sqrt(Math.pow(b.x - d.x, 2) + Math.pow(b.y - d.y, 2));
  J[86] = !0;
  d = new C(b.x + d, b.y);
  J[88] = !0;
  J[90] = !0;
  var f = b.x + (d.x - b.x) / 2;
  J[99] = !0;
  O.save();
  J[103] = !0;
  O.lineWidth = 5.0;
  J[104] = !0;
  O.translate(b.x, b.y);
  J[105] = !0;
  O.rotate(g);
  J[106] = !0;
  O.translate(-b.x, -b.y);
  J[109] = !0;
  O.beginPath();
  J[110] = !0;
  O.moveTo(f, b.y - 15);
  J[113] = !0;
  O.arcTo(d.x + 15, d.y - 15, d.x + 15, d.y, 15);
  J[117] = !0;
  O.arcTo(d.x + 15, d.y + 15, f, b.y + 15, 15);
  J[121] = !0;
  O.arcTo(b.x - 15, b.y + 15, b.x - 15, b.y, 15);
  J[125] = !0;
  O.arcTo(b.x - 15, b.y - 15, f, b.y - 15, 15);
  J[130] = !0;
  O.lineTo(f, b.y - 15);
  J[132] = !0;
  O.stroke();
  J[133] = !0;
  O.restore();
}
;var T = [];
a.executedLines.push(T);
a.instrumentedLines.push("0080aac0ac28602d46a07e11c00ef0c25f9047b34d");
a.fileNames.push("js/controller.js");
function U(b, d) {
  T[15] = !0;
  T[17] = !0;
  this.a = b;
  T[19] = !0;
  this.j = d;
  T[21] = !0;
  this.b = !1;
  T[23] = !0;
}
var X = -1;
function A() {
  T[126] = !0;
  X++;
  T[127] = !0;
  if (0 === X % 4) {
    return T[128] = !0, "#4285F4";
  }
  T[129] = !0;
  if (1 === X % 4) {
    return T[130] = !0, "#DB4437";
  }
  T[131] = !0;
  if (2 === X % 4) {
    return T[132] = !0, "#F4B400";
  }
  T[134] = !0;
  return "#0F9D58";
}
;var Y = [];
a.executedLines.push(Y);
a.instrumentedLines.push("40");
a.fileNames.push("js/main.js");
Y[6] = !0;
(function() {
  T[140] = !0;
  var b = I();
  T[143] = !0;
  M("mikita", b);
  T[144] = !0;
  M("patrick", b);
  T[145] = !0;
  M("laura", b);
  T[146] = !0;
  M("google", b);
  T[150] = !0;
  console.log(b);
  T[152] = !0;
  var d = new P(b);
  T[153] = !0;
  var g = new U(b, d);
  T[156] = !0;
  window.addEventListener("mousedown", function(f) {
    T[156] = !0;
    T[157] = !0;
    T[30] = !0;
    T[31] = !0;
    f = new C(f.clientX, f.clientY);
    T[34] = !0;
    var k = g.a;
    r[156] = !0;
    r[157] = !0;
    var l = k.b + 10 * k.a;
    r[159] = !0;
    var h = 10 * k.a;
    r[162] = !0;
    f.x < l && f.y < h && f.x > k.b && 0 < f.y ? (T[35] = !0, g.b = !0, T[37] = !0, f = G(g.a, f), T[39] = !0, g.c = new C(f.g + g.a.a / 2, f.h + g.a.a / 2), T[43] = !0, console.log("Hit!")) : (T[45] = !0, console.log("Miss!"));
  });
  T[159] = !0;
  window.addEventListener("mousemove", function(f) {
    T[159] = !0;
    T[160] = !0;
    T[102] = !0;
    T[103] = !0;
    f = new C(f.clientX, f.clientY);
    T[105] = !0;
    g.b && (T[106] = !0, Q(g.j), T[107] = !0, S(g.c, f));
  });
  T[162] = !0;
  window.addEventListener("mouseup", function(f) {
    T[162] = !0;
    T[163] = !0;
    T[53] = !0;
    T[54] = !0;
    f = new C(f.clientX, f.clientY);
    T[56] = !0;
    if (g.b) {
      T[58] = !0;
      g.b = !1;
      T[59] = !0;
      f = G(g.a, f);
      T[61] = !0;
      f = new C(f.g + g.a.a / 2, f.h + g.a.a / 2);
      T[65] = !0;
      var k = g.c;
      r[71] = !0;
      r[72] = !0;
      if (f.x === k.x && f.y === k.y) {
        T[66] = !0;
      } else {
        T[70] = !0;
        var l = g.a, h = g.c, q = f;
        r[173] = !0;
        r[174] = !0;
        k = [];
        r[176] = !0;
        var t = l.a;
        r[178] = !0;
        r[179] = !0;
        r[181] = !0;
        var p = h;
        var n = q;
        r[367] = !0;
        p.x !== n.x && p.y !== n.y ? (r[182] = !0, t = Math.sqrt(2 * Math.pow(l.a, 2)), r[183] = !0, p = t / Math.sqrt(2), r[184] = !0, n = p) : (r[185] = !0, p = h, n = q, r[371] = !0, 0.01 > Math.abs(p.x - n.x) && p.y !== n.y ? (r[186] = !0, p = 0, r[187] = !0, n = t) : (r[189] = !0, p = t, r[190] = !0, n = 0));
        r[194] = !0;
        h.y > q.y && (r[195] = !0, n *= -1);
        r[198] = !0;
        h.x > q.x && (r[199] = !0, p *= -1);
        r[205] = !0;
        h = G(l, h);
        r[206] = !0;
        h = new C(h.g + l.a / 2, h.h + l.a / 2);
        r[210] = !0;
        q = G(l, q);
        r[211] = !0;
        q = new C(q.g + l.a / 2, q.h + l.a / 2);
        r[216] = !0;
        t = D(h, q) / t + 1;
        r[221] = !0;
        if (0.001 < Math.abs(t - Math.round(t))) {
          r[224] = !0;
        } else {
          r[228] = !0;
          h = new C(h.x, h.y);
          r[230] = !0;
          q = 0;
          for (r[230] = !0; q < Math.round(t); ++q) {
            r[231] = !0;
            var w = G(l, h);
            r[232] = !0;
            k.push(w);
            r[234] = !0;
            h = new C(h.x + p, h.y + n);
          }
          r[238] = !0;
        }
        T[77] = !0;
        T[117] = !0;
        l = "";
        T[116] = !0;
        k = m(k);
        T[118] = !0;
        h = k.next();
        for (T[118] = !0; !h.done; h = k.next()) {
          T[118] = !0, h = h.value, T[118] = !0, T[119] = !0, l = l.concat(h.i);
        }
        T[121] = !0;
        k = l;
        T[79] = !0;
        console.log("Word found is: ", k);
        T[81] = !0;
        r[512] = !0;
        v.has(k) ? (T[82] = !0, k = new y(g.c, f), T[83] = !0, r[516] = !0, B.push(k), T[84] = !0, k = g.j, l = N(), J[136] = !0, J[137] = !0, k.b = l, T[85] = !0, Q(g.j), T[86] = !0, S(g.c, f)) : (T[88] = !0, Q(g.j));
        T[92] = !0;
        console.log("Distance from start to end is: ", D(g.c, f));
      }
    }
  });
  T[166] = !0;
  J[157] = !0;
  J[158] = !0;
  R(d);
})();

