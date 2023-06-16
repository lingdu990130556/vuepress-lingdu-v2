import {
  C,
  E
} from "./chunk-E3Y6KLYK.js";
import {
  Dn,
  Ho,
  Wo,
  ab,
  cb,
  fb,
  hb,
  lb,
  nb,
  ob,
  rb,
  sb,
  ub
} from "./chunk-CZQZAEB4.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.2.0/node_modules/mermaid/dist/arc-b5db4c05.js
function fn(l) {
  return l.innerRadius;
}
function cn(l) {
  return l.outerRadius;
}
function yn(l) {
  return l.startAngle;
}
function gn(l) {
  return l.endAngle;
}
function mn(l) {
  return l && l.padAngle;
}
function pn(l, x, O, E2, h, v, J, a) {
  var s = O - l, n = E2 - x, m = J - h, i = a - v, r = i * s - m * n;
  if (!(r * r < Wo))
    return r = (m * (x - v) - i * (l - h)) / r, [l + r * s, x + r * n];
}
function V(l, x, O, E2, h, v, J) {
  var a = l - O, s = x - E2, n = (J ? v : -v) / hb(a * a + s * s), m = n * s, i = -n * a, r = l + m, f = x + i, c = O + m, S = E2 + i, o = (r + c) / 2, q = (f + S) / 2, p = c - r, g = S - f, A = p * p + g * g, w = h - v, P = r * S - c * f, F = (g < 0 ? -1 : 1) * hb(sb(0, w * w * A - P * P)), G = (P * g - p * F) / A, d = (-P * p - g * F) / A, R = (P * g + p * F) / A, T = (-P * p + g * F) / A, e = G - o, u = d - q, K = R - o, L = T - q;
  return e * e + u * u > K * K + L * L && (G = R, d = T), {
    cx: G,
    cy: d,
    x01: -m,
    y01: -i,
    x11: G * (h / w - 1),
    y11: d * (h / w - 1)
  };
}
function hn() {
  var l = fn, x = cn, O = E(0), E2 = null, h = yn, v = gn, J = mn, a = null;
  function s() {
    var n, m, i = +l.apply(this, arguments), r = +x.apply(this, arguments), f = h.apply(this, arguments) - Ho, c = v.apply(this, arguments) - Ho, S = rb(c - f), o = c > f;
    if (a || (a = n = C()), r < i && (m = r, r = i, i = m), !(r > Wo))
      a.moveTo(0, 0);
    else if (S > cb - Wo)
      a.moveTo(r * ob(f), r * lb(f)), a.arc(0, 0, r, f, c, !o), i > Wo && (a.moveTo(i * ob(c), i * lb(c)), a.arc(0, 0, i, c, f, o));
    else {
      var q = f, p = c, g = f, A = c, w = S, P = S, F = J.apply(this, arguments) / 2, G = F > Wo && (E2 ? +E2.apply(this, arguments) : hb(i * i + r * r)), d = ab(rb(r - i) / 2, +O.apply(this, arguments)), R = d, T = d, e, u;
      if (G > Wo) {
        var K = fb(G / i * lb(F)), L = fb(G / r * lb(F));
        (w -= K * 2) > Wo ? (K *= o ? 1 : -1, g += K, A -= K) : (w = 0, g = A = (f + c) / 2), (P -= L * 2) > Wo ? (L *= o ? 1 : -1, q += L, p -= L) : (P = 0, q = p = (f + c) / 2);
      }
      var N = r * ob(q), j = r * lb(q), B = i * ob(A), C2 = i * lb(A);
      if (d > Wo) {
        var Q = r * ob(p), U = r * lb(p), W = i * ob(g), X = i * lb(g), I;
        if (S < Dn && (I = pn(N, j, W, X, Q, U, B, C2))) {
          var Y = N - I[0], Z = j - I[1], $ = Q - I[0], k = U - I[1], _ = 1 / lb(ub((Y * $ + Z * k) / (hb(Y * Y + Z * Z) * hb($ * $ + k * k))) / 2), nn = hb(I[0] * I[0] + I[1] * I[1]);
          R = ab(d, (i - nn) / (_ - 1)), T = ab(d, (r - nn) / (_ + 1));
        }
      }
      P > Wo ? T > Wo ? (e = V(W, X, N, j, r, T, o), u = V(Q, U, B, C2, r, T, o), a.moveTo(e.cx + e.x01, e.cy + e.y01), T < d ? a.arc(e.cx, e.cy, T, nb(e.y01, e.x01), nb(u.y01, u.x01), !o) : (a.arc(e.cx, e.cy, T, nb(e.y01, e.x01), nb(e.y11, e.x11), !o), a.arc(0, 0, r, nb(e.cy + e.y11, e.cx + e.x11), nb(u.cy + u.y11, u.cx + u.x11), !o), a.arc(u.cx, u.cy, T, nb(u.y11, u.x11), nb(u.y01, u.x01), !o))) : (a.moveTo(N, j), a.arc(0, 0, r, q, p, !o)) : a.moveTo(N, j), !(i > Wo) || !(w > Wo) ? a.lineTo(B, C2) : R > Wo ? (e = V(B, C2, Q, U, i, -R, o), u = V(N, j, W, X, i, -R, o), a.lineTo(e.cx + e.x01, e.cy + e.y01), R < d ? a.arc(e.cx, e.cy, R, nb(e.y01, e.x01), nb(u.y01, u.x01), !o) : (a.arc(e.cx, e.cy, R, nb(e.y01, e.x01), nb(e.y11, e.x11), !o), a.arc(0, 0, i, nb(e.cy + e.y11, e.cx + e.x11), nb(u.cy + u.y11, u.cx + u.x11), o), a.arc(u.cx, u.cy, R, nb(u.y11, u.x11), nb(u.y01, u.x01), !o))) : a.arc(0, 0, i, A, g, o);
    }
    if (a.closePath(), n)
      return a = null, n + "" || null;
  }
  return s.centroid = function() {
    var n = (+l.apply(this, arguments) + +x.apply(this, arguments)) / 2, m = (+h.apply(this, arguments) + +v.apply(this, arguments)) / 2 - Dn / 2;
    return [ob(m) * n, lb(m) * n];
  }, s.innerRadius = function(n) {
    return arguments.length ? (l = typeof n == "function" ? n : E(+n), s) : l;
  }, s.outerRadius = function(n) {
    return arguments.length ? (x = typeof n == "function" ? n : E(+n), s) : x;
  }, s.cornerRadius = function(n) {
    return arguments.length ? (O = typeof n == "function" ? n : E(+n), s) : O;
  }, s.padRadius = function(n) {
    return arguments.length ? (E2 = n == null ? null : typeof n == "function" ? n : E(+n), s) : E2;
  }, s.startAngle = function(n) {
    return arguments.length ? (h = typeof n == "function" ? n : E(+n), s) : h;
  }, s.endAngle = function(n) {
    return arguments.length ? (v = typeof n == "function" ? n : E(+n), s) : v;
  }, s.padAngle = function(n) {
    return arguments.length ? (J = typeof n == "function" ? n : E(+n), s) : J;
  }, s.context = function(n) {
    return arguments.length ? (a = n ?? null, s) : a;
  }, s;
}

export {
  hn
};
//# sourceMappingURL=chunk-3SKPOJCS.js.map
