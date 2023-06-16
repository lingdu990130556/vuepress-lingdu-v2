// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.2.0/node_modules/mermaid/dist/mermaid-9357f3d0.js
function ch(t11) {
  for (var e = [], i = 1; i < arguments.length; i++)
    e[i - 1] = arguments[i];
  var r = Array.from(typeof t11 == "string" ? [t11] : t11);
  r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var n = r.reduce(function(a, l) {
    var h = l.match(/\n([\t ]+|(?!\s).)/g);
    return h ? a.concat(h.map(function(c) {
      var u, g;
      return (g = (u = c.match(/[\t ]/g)) === null || u === void 0 ? void 0 : u.length) !== null && g !== void 0 ? g : 0;
    })) : a;
  }, []);
  if (n.length) {
    var o = new RegExp(`
[	 ]{` + Math.min.apply(Math, n) + "}", "g");
    r = r.map(function(a) {
      return a.replace(o, `
`);
    });
  }
  r[0] = r[0].replace(/^\r?\n/, "");
  var s = r[0];
  return e.forEach(function(a, l) {
    var h = s.match(/(?:^|\n)( *)$/), c = h ? h[1] : "", u = a;
    typeof a == "string" && a.includes(`
`) && (u = String(a).split(`
`).map(function(g, p) {
      return p === 0 ? g : "" + c + g;
    }).join(`
`)), s += u + r[l + 1];
  }), s;
}
var Es = 60;
var Ms = Es * 60;
var Os = Ms * 24;
var uh = Os * 7;
var xe = 1e3;
var Pr = Es * xe;
var vo = Ms * xe;
var fh = Os * xe;
var dh = uh * xe;
var kn = "millisecond";
var de = "second";
var pe = "minute";
var ge = "hour";
var Ot = "day";
var wi = "week";
var dt = "month";
var $s = "quarter";
var $t = "year";
var me = "date";
var ph = "YYYY-MM-DDTHH:mm:ssZ";
var ko = "Invalid Date";
var gh = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
var mh = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
var _h = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
  ordinal: function(e) {
    var i = ["th", "st", "nd", "rd"], r = e % 100;
    return "[" + e + (i[(r - 20) % 10] || i[r] || i[0]) + "]";
  }
};
var nn = function(e, i, r) {
  var n = String(e);
  return !n || n.length >= i ? e : "" + Array(i + 1 - n.length).join(r) + e;
};
var yh = function(e) {
  var i = -e.utcOffset(), r = Math.abs(i), n = Math.floor(r / 60), o = r % 60;
  return (i <= 0 ? "+" : "-") + nn(n, 2, "0") + ":" + nn(o, 2, "0");
};
var Ch = function t(e, i) {
  if (e.date() < i.date())
    return -t(i, e);
  var r = (i.year() - e.year()) * 12 + (i.month() - e.month()), n = e.clone().add(r, dt), o = i - n < 0, s = e.clone().add(r + (o ? -1 : 1), dt);
  return +(-(r + (i - n) / (o ? n - s : s - n)) || 0);
};
var xh = function(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
};
var bh = function(e) {
  var i = {
    M: dt,
    y: $t,
    w: wi,
    d: Ot,
    D: me,
    h: ge,
    m: pe,
    s: de,
    ms: kn,
    Q: $s
  };
  return i[e] || String(e || "").toLowerCase().replace(/s$/, "");
};
var Th = function(e) {
  return e === void 0;
};
var Sh = {
  s: nn,
  z: yh,
  m: Ch,
  a: xh,
  p: bh,
  u: Th
};
var Pe = "en";
var Xt = {};
Xt[Pe] = _h;
var wn = function(e) {
  return e instanceof lr;
};
var Pi = function t2(e, i, r) {
  var n;
  if (!e)
    return Pe;
  if (typeof e == "string") {
    var o = e.toLowerCase();
    Xt[o] && (n = o), i && (Xt[o] = i, n = o);
    var s = e.split("-");
    if (!n && s.length > 1)
      return t2(s[0]);
  } else {
    var a = e.name;
    Xt[a] = e, n = a;
  }
  return !r && n && (Pe = n), n || !r && Pe;
};
var G = function(e, i) {
  if (wn(e))
    return e.clone();
  var r = typeof i == "object" ? i : {};
  return r.date = e, r.args = arguments, new lr(r);
};
var vh = function(e, i) {
  return G(e, {
    locale: i.$L,
    utc: i.$u,
    x: i.$x,
    $offset: i.$offset
    // todo: refactor; do not use this.$offset in you code
  });
};
var $ = Sh;
$.l = Pi;
$.i = wn;
$.w = vh;
var kh = function(e) {
  var i = e.date, r = e.utc;
  if (i === null)
    return /* @__PURE__ */ new Date(NaN);
  if ($.u(i))
    return /* @__PURE__ */ new Date();
  if (i instanceof Date)
    return new Date(i);
  if (typeof i == "string" && !/Z$/i.test(i)) {
    var n = i.match(gh);
    if (n) {
      var o = n[2] - 1 || 0, s = (n[7] || "0").substring(0, 3);
      return r ? new Date(Date.UTC(n[1], o, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, s)) : new Date(n[1], o, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, s);
    }
  }
  return new Date(i);
};
var lr = function() {
  function t11(i) {
    this.$L = Pi(i.locale, null, true), this.parse(i);
  }
  var e = t11.prototype;
  return e.parse = function(r) {
    this.$d = kh(r), this.$x = r.x || {}, this.init();
  }, e.init = function() {
    var r = this.$d;
    this.$y = r.getFullYear(), this.$M = r.getMonth(), this.$D = r.getDate(), this.$W = r.getDay(), this.$H = r.getHours(), this.$m = r.getMinutes(), this.$s = r.getSeconds(), this.$ms = r.getMilliseconds();
  }, e.$utils = function() {
    return $;
  }, e.isValid = function() {
    return this.$d.toString() !== ko;
  }, e.isSame = function(r, n) {
    var o = G(r);
    return this.startOf(n) <= o && o <= this.endOf(n);
  }, e.isAfter = function(r, n) {
    return G(r) < this.startOf(n);
  }, e.isBefore = function(r, n) {
    return this.endOf(n) < G(r);
  }, e.$g = function(r, n, o) {
    return $.u(r) ? this[n] : this.set(o, r);
  }, e.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, e.valueOf = function() {
    return this.$d.getTime();
  }, e.startOf = function(r, n) {
    var o = this, s = $.u(n) ? true : n, a = $.p(r), l = function(A, C) {
      var F = $.w(o.$u ? Date.UTC(o.$y, C, A) : new Date(o.$y, C, A), o);
      return s ? F : F.endOf(Ot);
    }, h = function(A, C) {
      var F = [0, 0, 0, 0], D = [23, 59, 59, 999];
      return $.w(o.toDate()[A].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (s ? F : D).slice(C)
      ), o);
    }, c = this.$W, u = this.$M, g = this.$D, p = "set" + (this.$u ? "UTC" : "");
    switch (a) {
      case $t:
        return s ? l(1, 0) : l(31, 11);
      case dt:
        return s ? l(1, u) : l(0, u + 1);
      case wi: {
        var _ = this.$locale().weekStart || 0, T = (c < _ ? c + 7 : c) - _;
        return l(s ? g - T : g + (6 - T), u);
      }
      case Ot:
      case me:
        return h(p + "Hours", 0);
      case ge:
        return h(p + "Minutes", 1);
      case pe:
        return h(p + "Seconds", 2);
      case de:
        return h(p + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, e.endOf = function(r) {
    return this.startOf(r, false);
  }, e.$set = function(r, n) {
    var o, s = $.p(r), a = "set" + (this.$u ? "UTC" : ""), l = (o = {}, o[Ot] = a + "Date", o[me] = a + "Date", o[dt] = a + "Month", o[$t] = a + "FullYear", o[ge] = a + "Hours", o[pe] = a + "Minutes", o[de] = a + "Seconds", o[kn] = a + "Milliseconds", o)[s], h = s === Ot ? this.$D + (n - this.$W) : n;
    if (s === dt || s === $t) {
      var c = this.clone().set(me, 1);
      c.$d[l](h), c.init(), this.$d = c.set(me, Math.min(this.$D, c.daysInMonth())).$d;
    } else
      l && this.$d[l](h);
    return this.init(), this;
  }, e.set = function(r, n) {
    return this.clone().$set(r, n);
  }, e.get = function(r) {
    return this[$.p(r)]();
  }, e.add = function(r, n) {
    var o = this, s;
    r = Number(r);
    var a = $.p(n), l = function(g) {
      var p = G(o);
      return $.w(p.date(p.date() + Math.round(g * r)), o);
    };
    if (a === dt)
      return this.set(dt, this.$M + r);
    if (a === $t)
      return this.set($t, this.$y + r);
    if (a === Ot)
      return l(1);
    if (a === wi)
      return l(7);
    var h = (s = {}, s[pe] = Pr, s[ge] = vo, s[de] = xe, s)[a] || 1, c = this.$d.getTime() + r * h;
    return $.w(c, this);
  }, e.subtract = function(r, n) {
    return this.add(r * -1, n);
  }, e.format = function(r) {
    var n = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || ko;
    var s = r || ph, a = $.z(this), l = this.$H, h = this.$m, c = this.$M, u = o.weekdays, g = o.months, p = o.meridiem, _ = function(F, D, R, V) {
      return F && (F[D] || F(n, s)) || R[D].slice(0, V);
    }, T = function(F) {
      return $.s(l % 12 || 12, F, "0");
    }, B = p || function(C, F, D) {
      var R = C < 12 ? "AM" : "PM";
      return D ? R.toLowerCase() : R;
    }, A = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: c + 1,
      MM: $.s(c + 1, 2, "0"),
      MMM: _(o.monthsShort, c, g, 3),
      MMMM: _(g, c),
      D: this.$D,
      DD: $.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: _(o.weekdaysMin, this.$W, u, 2),
      ddd: _(o.weekdaysShort, this.$W, u, 3),
      dddd: u[this.$W],
      H: String(l),
      HH: $.s(l, 2, "0"),
      h: T(1),
      hh: T(2),
      a: B(l, h, true),
      A: B(l, h, false),
      m: String(h),
      mm: $.s(h, 2, "0"),
      s: String(this.$s),
      ss: $.s(this.$s, 2, "0"),
      SSS: $.s(this.$ms, 3, "0"),
      Z: a
      // 'ZZ' logic below
    };
    return s.replace(mh, function(C, F) {
      return F || A[C] || a.replace(":", "");
    });
  }, e.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, e.diff = function(r, n, o) {
    var s, a = $.p(n), l = G(r), h = (l.utcOffset() - this.utcOffset()) * Pr, c = this - l, u = $.m(this, l);
    return u = (s = {}, s[$t] = u / 12, s[dt] = u, s[$s] = u / 3, s[wi] = (c - h) / dh, s[Ot] = (c - h) / fh, s[ge] = c / vo, s[pe] = c / Pr, s[de] = c / xe, s)[a] || c, o ? u : $.a(u);
  }, e.daysInMonth = function() {
    return this.endOf(dt).$D;
  }, e.$locale = function() {
    return Xt[this.$L];
  }, e.locale = function(r, n) {
    if (!r)
      return this.$L;
    var o = this.clone(), s = Pi(r, n, true);
    return s && (o.$L = s), o;
  }, e.clone = function() {
    return $.w(this.$d, this);
  }, e.toDate = function() {
    return new Date(this.valueOf());
  }, e.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, e.toISOString = function() {
    return this.$d.toISOString();
  }, e.toString = function() {
    return this.$d.toUTCString();
  }, t11;
}();
var Is = lr.prototype;
G.prototype = Is;
[["$ms", kn], ["$s", de], ["$m", pe], ["$H", ge], ["$W", Ot], ["$M", dt], ["$y", $t], ["$D", me]].forEach(function(t11) {
  Is[t11[1]] = function(e) {
    return this.$g(e, t11[0], t11[1]);
  };
});
G.extend = function(t11, e) {
  return t11.$i || (t11(e, lr, G), t11.$i = true), G;
};
G.locale = Pi;
G.isDayjs = wn;
G.unix = function(t11) {
  return G(t11 * 1e3);
};
G.en = Xt[Pe];
G.Ls = Xt;
G.p = {};
var wt = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
};
var b = {
  trace: (...t11) => {
  },
  debug: (...t11) => {
  },
  info: (...t11) => {
  },
  warn: (...t11) => {
  },
  error: (...t11) => {
  },
  fatal: (...t11) => {
  }
};
var Bn = function(t11 = "fatal") {
  let e = wt.fatal;
  typeof t11 == "string" ? (t11 = t11.toLowerCase(), t11 in wt && (e = wt[t11])) : typeof t11 == "number" && (e = t11), b.trace = () => {
  }, b.debug = () => {
  }, b.info = () => {
  }, b.warn = () => {
  }, b.error = () => {
  }, b.fatal = () => {
  }, e <= wt.fatal && (b.fatal = console.error ? console.error.bind(console, lt("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", lt("FATAL"))), e <= wt.error && (b.error = console.error ? console.error.bind(console, lt("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", lt("ERROR"))), e <= wt.warn && (b.warn = console.warn ? console.warn.bind(console, lt("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", lt("WARN"))), e <= wt.info && (b.info = console.info ? console.info.bind(console, lt("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", lt("INFO"))), e <= wt.debug && (b.debug = console.debug ? console.debug.bind(console, lt("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", lt("DEBUG"))), e <= wt.trace && (b.trace = console.debug ? console.debug.bind(console, lt("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", lt("TRACE")));
};
var lt = (t11) => `%c${G().format("ss.SSS")} : ${t11} : `;
var Fn = {};
Object.defineProperty(Fn, "__esModule", { value: true });
var Ds = Fn.sanitizeUrl = void 0;
var wh = /^([^\w]*)(javascript|data|vbscript)/im;
var Bh = /&#(\w+)(^\w|;)?/g;
var Fh = /&(newline|tab);/gi;
var Lh = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
var Ah = /^.+(:|&colon;)/gim;
var Eh = [".", "/"];
function Mh(t11) {
  return Eh.indexOf(t11[0]) > -1;
}
function Oh(t11) {
  return t11.replace(Bh, function(e, i) {
    return String.fromCharCode(i);
  });
}
function $h(t11) {
  var e = Oh(t11 || "").replace(Fh, "").replace(Lh, "").trim();
  if (!e)
    return "about:blank";
  if (Mh(e))
    return e;
  var i = e.match(Ah);
  if (!i)
    return e;
  var r = i[0];
  return wh.test(r) ? "about:blank" : e;
}
Ds = Fn.sanitizeUrl = $h;
var Ih = { value: () => {
} };
function Ns() {
  for (var t11 = 0, e = arguments.length, i = {}, r; t11 < e; ++t11) {
    if (!(r = arguments[t11] + "") || r in i || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    i[r] = [];
  }
  return new Bi(i);
}
function Bi(t11) {
  this._ = t11;
}
function Dh(t11, e) {
  return t11.trim().split(/^|\s+/).map(function(i) {
    var r = "", n = i.indexOf(".");
    if (n >= 0 && (r = i.slice(n + 1), i = i.slice(0, n)), i && !e.hasOwnProperty(i))
      throw new Error("unknown type: " + i);
    return { type: i, name: r };
  });
}
Bi.prototype = Ns.prototype = {
  constructor: Bi,
  on: function(t11, e) {
    var i = this._, r = Dh(t11 + "", i), n, o = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++o < s; )
        if ((n = (t11 = r[o]).type) && (n = Nh(i[n], t11.name)))
          return n;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++o < s; )
      if (n = (t11 = r[o]).type)
        i[n] = wo(i[n], t11.name, e);
      else if (e == null)
        for (n in i)
          i[n] = wo(i[n], t11.name, null);
    return this;
  },
  copy: function() {
    var t11 = {}, e = this._;
    for (var i in e)
      t11[i] = e[i].slice();
    return new Bi(t11);
  },
  call: function(t11, e) {
    if ((n = arguments.length - 2) > 0)
      for (var i = new Array(n), r = 0, n, o; r < n; ++r)
        i[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t11))
      throw new Error("unknown type: " + t11);
    for (o = this._[t11], r = 0, n = o.length; r < n; ++r)
      o[r].value.apply(e, i);
  },
  apply: function(t11, e, i) {
    if (!this._.hasOwnProperty(t11))
      throw new Error("unknown type: " + t11);
    for (var r = this._[t11], n = 0, o = r.length; n < o; ++n)
      r[n].value.apply(e, i);
  }
};
function Nh(t11, e) {
  for (var i = 0, r = t11.length, n; i < r; ++i)
    if ((n = t11[i]).name === e)
      return n.value;
}
function wo(t11, e, i) {
  for (var r = 0, n = t11.length; r < n; ++r)
    if (t11[r].name === e) {
      t11[r] = Ih, t11 = t11.slice(0, r).concat(t11.slice(r + 1));
      break;
    }
  return i != null && t11.push({ name: e, value: i }), t11;
}
var on = "http://www.w3.org/1999/xhtml";
var Bo = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: on,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function hr(t11) {
  var e = t11 += "", i = e.indexOf(":");
  return i >= 0 && (e = t11.slice(0, i)) !== "xmlns" && (t11 = t11.slice(i + 1)), Bo.hasOwnProperty(e) ? { space: Bo[e], local: t11 } : t11;
}
function Rh(t11) {
  return function() {
    var e = this.ownerDocument, i = this.namespaceURI;
    return i === on && e.documentElement.namespaceURI === on ? e.createElement(t11) : e.createElementNS(i, t11);
  };
}
function qh(t11) {
  return function() {
    return this.ownerDocument.createElementNS(t11.space, t11.local);
  };
}
function Rs(t11) {
  var e = hr(t11);
  return (e.local ? qh : Rh)(e);
}
function Ph() {
}
function Ln(t11) {
  return t11 == null ? Ph : function() {
    return this.querySelector(t11);
  };
}
function zh(t11) {
  typeof t11 != "function" && (t11 = Ln(t11));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var o = e[n], s = o.length, a = r[n] = new Array(s), l, h, c = 0; c < s; ++c)
      (l = o[c]) && (h = t11.call(l, l.__data__, c, o)) && ("__data__" in l && (h.__data__ = l.__data__), a[c] = h);
  return new st(r, this._parents);
}
function Wh(t11) {
  return t11 == null ? [] : Array.isArray(t11) ? t11 : Array.from(t11);
}
function Hh() {
  return [];
}
function qs(t11) {
  return t11 == null ? Hh : function() {
    return this.querySelectorAll(t11);
  };
}
function jh(t11) {
  return function() {
    return Wh(t11.apply(this, arguments));
  };
}
function Uh(t11) {
  typeof t11 == "function" ? t11 = jh(t11) : t11 = qs(t11);
  for (var e = this._groups, i = e.length, r = [], n = [], o = 0; o < i; ++o)
    for (var s = e[o], a = s.length, l, h = 0; h < a; ++h)
      (l = s[h]) && (r.push(t11.call(l, l.__data__, h, s)), n.push(l));
  return new st(r, n);
}
function Ps(t11) {
  return function() {
    return this.matches(t11);
  };
}
function zs(t11) {
  return function(e) {
    return e.matches(t11);
  };
}
var Yh = Array.prototype.find;
function Gh(t11) {
  return function() {
    return Yh.call(this.children, t11);
  };
}
function Vh() {
  return this.firstElementChild;
}
function Xh(t11) {
  return this.select(t11 == null ? Vh : Gh(typeof t11 == "function" ? t11 : zs(t11)));
}
var Kh = Array.prototype.filter;
function Zh() {
  return Array.from(this.children);
}
function Jh(t11) {
  return function() {
    return Kh.call(this.children, t11);
  };
}
function Qh(t11) {
  return this.selectAll(t11 == null ? Zh : Jh(typeof t11 == "function" ? t11 : zs(t11)));
}
function tc(t11) {
  typeof t11 != "function" && (t11 = Ps(t11));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var o = e[n], s = o.length, a = r[n] = [], l, h = 0; h < s; ++h)
      (l = o[h]) && t11.call(l, l.__data__, h, o) && a.push(l);
  return new st(r, this._parents);
}
function Ws(t11) {
  return new Array(t11.length);
}
function ec() {
  return new st(this._enter || this._groups.map(Ws), this._parents);
}
function zi(t11, e) {
  this.ownerDocument = t11.ownerDocument, this.namespaceURI = t11.namespaceURI, this._next = null, this._parent = t11, this.__data__ = e;
}
zi.prototype = {
  constructor: zi,
  appendChild: function(t11) {
    return this._parent.insertBefore(t11, this._next);
  },
  insertBefore: function(t11, e) {
    return this._parent.insertBefore(t11, e);
  },
  querySelector: function(t11) {
    return this._parent.querySelector(t11);
  },
  querySelectorAll: function(t11) {
    return this._parent.querySelectorAll(t11);
  }
};
function ic(t11) {
  return function() {
    return t11;
  };
}
function rc(t11, e, i, r, n, o) {
  for (var s = 0, a, l = e.length, h = o.length; s < h; ++s)
    (a = e[s]) ? (a.__data__ = o[s], r[s] = a) : i[s] = new zi(t11, o[s]);
  for (; s < l; ++s)
    (a = e[s]) && (n[s] = a);
}
function nc(t11, e, i, r, n, o, s) {
  var a, l, h = /* @__PURE__ */ new Map(), c = e.length, u = o.length, g = new Array(c), p;
  for (a = 0; a < c; ++a)
    (l = e[a]) && (g[a] = p = s.call(l, l.__data__, a, e) + "", h.has(p) ? n[a] = l : h.set(p, l));
  for (a = 0; a < u; ++a)
    p = s.call(t11, o[a], a, o) + "", (l = h.get(p)) ? (r[a] = l, l.__data__ = o[a], h.delete(p)) : i[a] = new zi(t11, o[a]);
  for (a = 0; a < c; ++a)
    (l = e[a]) && h.get(g[a]) === l && (n[a] = l);
}
function oc(t11) {
  return t11.__data__;
}
function sc(t11, e) {
  if (!arguments.length)
    return Array.from(this, oc);
  var i = e ? nc : rc, r = this._parents, n = this._groups;
  typeof t11 != "function" && (t11 = ic(t11));
  for (var o = n.length, s = new Array(o), a = new Array(o), l = new Array(o), h = 0; h < o; ++h) {
    var c = r[h], u = n[h], g = u.length, p = ac(t11.call(c, c && c.__data__, h, r)), _ = p.length, T = a[h] = new Array(_), B = s[h] = new Array(_), A = l[h] = new Array(g);
    i(c, u, T, B, A, p, e);
    for (var C = 0, F = 0, D, R; C < _; ++C)
      if (D = T[C]) {
        for (C >= F && (F = C + 1); !(R = B[F]) && ++F < _; )
          ;
        D._next = R || null;
      }
  }
  return s = new st(s, r), s._enter = a, s._exit = l, s;
}
function ac(t11) {
  return typeof t11 == "object" && "length" in t11 ? t11 : Array.from(t11);
}
function lc() {
  return new st(this._exit || this._groups.map(Ws), this._parents);
}
function hc(t11, e, i) {
  var r = this.enter(), n = this, o = this.exit();
  return typeof t11 == "function" ? (r = t11(r), r && (r = r.selection())) : r = r.append(t11 + ""), e != null && (n = e(n), n && (n = n.selection())), i == null ? o.remove() : i(o), r && n ? r.merge(n).order() : n;
}
function cc(t11) {
  for (var e = t11.selection ? t11.selection() : t11, i = this._groups, r = e._groups, n = i.length, o = r.length, s = Math.min(n, o), a = new Array(n), l = 0; l < s; ++l)
    for (var h = i[l], c = r[l], u = h.length, g = a[l] = new Array(u), p, _ = 0; _ < u; ++_)
      (p = h[_] || c[_]) && (g[_] = p);
  for (; l < n; ++l)
    a[l] = i[l];
  return new st(a, this._parents);
}
function uc() {
  for (var t11 = this._groups, e = -1, i = t11.length; ++e < i; )
    for (var r = t11[e], n = r.length - 1, o = r[n], s; --n >= 0; )
      (s = r[n]) && (o && s.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(s, o), o = s);
  return this;
}
function fc(t11) {
  t11 || (t11 = dc);
  function e(u, g) {
    return u && g ? t11(u.__data__, g.__data__) : !u - !g;
  }
  for (var i = this._groups, r = i.length, n = new Array(r), o = 0; o < r; ++o) {
    for (var s = i[o], a = s.length, l = n[o] = new Array(a), h, c = 0; c < a; ++c)
      (h = s[c]) && (l[c] = h);
    l.sort(e);
  }
  return new st(n, this._parents).order();
}
function dc(t11, e) {
  return t11 < e ? -1 : t11 > e ? 1 : t11 >= e ? 0 : NaN;
}
function pc() {
  var t11 = arguments[0];
  return arguments[0] = this, t11.apply(null, arguments), this;
}
function gc() {
  return Array.from(this);
}
function mc() {
  for (var t11 = this._groups, e = 0, i = t11.length; e < i; ++e)
    for (var r = t11[e], n = 0, o = r.length; n < o; ++n) {
      var s = r[n];
      if (s)
        return s;
    }
  return null;
}
function _c() {
  let t11 = 0;
  for (const e of this)
    ++t11;
  return t11;
}
function yc() {
  return !this.node();
}
function Cc(t11) {
  for (var e = this._groups, i = 0, r = e.length; i < r; ++i)
    for (var n = e[i], o = 0, s = n.length, a; o < s; ++o)
      (a = n[o]) && t11.call(a, a.__data__, o, n);
  return this;
}
function xc(t11) {
  return function() {
    this.removeAttribute(t11);
  };
}
function bc(t11) {
  return function() {
    this.removeAttributeNS(t11.space, t11.local);
  };
}
function Tc(t11, e) {
  return function() {
    this.setAttribute(t11, e);
  };
}
function Sc(t11, e) {
  return function() {
    this.setAttributeNS(t11.space, t11.local, e);
  };
}
function vc(t11, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.removeAttribute(t11) : this.setAttribute(t11, i);
  };
}
function kc(t11, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.removeAttributeNS(t11.space, t11.local) : this.setAttributeNS(t11.space, t11.local, i);
  };
}
function wc(t11, e) {
  var i = hr(t11);
  if (arguments.length < 2) {
    var r = this.node();
    return i.local ? r.getAttributeNS(i.space, i.local) : r.getAttribute(i);
  }
  return this.each((e == null ? i.local ? bc : xc : typeof e == "function" ? i.local ? kc : vc : i.local ? Sc : Tc)(i, e));
}
function Hs(t11) {
  return t11.ownerDocument && t11.ownerDocument.defaultView || t11.document && t11 || t11.defaultView;
}
function Bc(t11) {
  return function() {
    this.style.removeProperty(t11);
  };
}
function Fc(t11, e, i) {
  return function() {
    this.style.setProperty(t11, e, i);
  };
}
function Lc(t11, e, i) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t11) : this.style.setProperty(t11, r, i);
  };
}
function Ac(t11, e, i) {
  return arguments.length > 1 ? this.each((e == null ? Bc : typeof e == "function" ? Lc : Fc)(t11, e, i ?? "")) : be(this.node(), t11);
}
function be(t11, e) {
  return t11.style.getPropertyValue(e) || Hs(t11).getComputedStyle(t11, null).getPropertyValue(e);
}
function Ec(t11) {
  return function() {
    delete this[t11];
  };
}
function Mc(t11, e) {
  return function() {
    this[t11] = e;
  };
}
function Oc(t11, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? delete this[t11] : this[t11] = i;
  };
}
function $c(t11, e) {
  return arguments.length > 1 ? this.each((e == null ? Ec : typeof e == "function" ? Oc : Mc)(t11, e)) : this.node()[t11];
}
function js(t11) {
  return t11.trim().split(/^|\s+/);
}
function An(t11) {
  return t11.classList || new Us(t11);
}
function Us(t11) {
  this._node = t11, this._names = js(t11.getAttribute("class") || "");
}
Us.prototype = {
  add: function(t11) {
    var e = this._names.indexOf(t11);
    e < 0 && (this._names.push(t11), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t11) {
    var e = this._names.indexOf(t11);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t11) {
    return this._names.indexOf(t11) >= 0;
  }
};
function Ys(t11, e) {
  for (var i = An(t11), r = -1, n = e.length; ++r < n; )
    i.add(e[r]);
}
function Gs(t11, e) {
  for (var i = An(t11), r = -1, n = e.length; ++r < n; )
    i.remove(e[r]);
}
function Ic(t11) {
  return function() {
    Ys(this, t11);
  };
}
function Dc(t11) {
  return function() {
    Gs(this, t11);
  };
}
function Nc(t11, e) {
  return function() {
    (e.apply(this, arguments) ? Ys : Gs)(this, t11);
  };
}
function Rc(t11, e) {
  var i = js(t11 + "");
  if (arguments.length < 2) {
    for (var r = An(this.node()), n = -1, o = i.length; ++n < o; )
      if (!r.contains(i[n]))
        return false;
    return true;
  }
  return this.each((typeof e == "function" ? Nc : e ? Ic : Dc)(i, e));
}
function qc() {
  this.textContent = "";
}
function Pc(t11) {
  return function() {
    this.textContent = t11;
  };
}
function zc(t11) {
  return function() {
    var e = t11.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Wc(t11) {
  return arguments.length ? this.each(t11 == null ? qc : (typeof t11 == "function" ? zc : Pc)(t11)) : this.node().textContent;
}
function Hc() {
  this.innerHTML = "";
}
function jc(t11) {
  return function() {
    this.innerHTML = t11;
  };
}
function Uc(t11) {
  return function() {
    var e = t11.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Yc(t11) {
  return arguments.length ? this.each(t11 == null ? Hc : (typeof t11 == "function" ? Uc : jc)(t11)) : this.node().innerHTML;
}
function Gc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Vc() {
  return this.each(Gc);
}
function Xc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Kc() {
  return this.each(Xc);
}
function Zc(t11) {
  var e = typeof t11 == "function" ? t11 : Rs(t11);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Jc() {
  return null;
}
function Qc(t11, e) {
  var i = typeof t11 == "function" ? t11 : Rs(t11), r = e == null ? Jc : typeof e == "function" ? e : Ln(e);
  return this.select(function() {
    return this.insertBefore(i.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function tu() {
  var t11 = this.parentNode;
  t11 && t11.removeChild(this);
}
function eu() {
  return this.each(tu);
}
function iu() {
  var t11 = this.cloneNode(false), e = this.parentNode;
  return e ? e.insertBefore(t11, this.nextSibling) : t11;
}
function ru() {
  var t11 = this.cloneNode(true), e = this.parentNode;
  return e ? e.insertBefore(t11, this.nextSibling) : t11;
}
function nu(t11) {
  return this.select(t11 ? ru : iu);
}
function ou(t11) {
  return arguments.length ? this.property("__data__", t11) : this.node().__data__;
}
function su(t11) {
  return function(e) {
    t11.call(this, e, this.__data__);
  };
}
function au(t11) {
  return t11.trim().split(/^|\s+/).map(function(e) {
    var i = "", r = e.indexOf(".");
    return r >= 0 && (i = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: i };
  });
}
function lu(t11) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var i = 0, r = -1, n = e.length, o; i < n; ++i)
        o = e[i], (!t11.type || o.type === t11.type) && o.name === t11.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function hu(t11, e, i) {
  return function() {
    var r = this.__on, n, o = su(e);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((n = r[s]).type === t11.type && n.name === t11.name) {
          this.removeEventListener(n.type, n.listener, n.options), this.addEventListener(n.type, n.listener = o, n.options = i), n.value = e;
          return;
        }
    }
    this.addEventListener(t11.type, o, i), n = { type: t11.type, name: t11.name, value: e, listener: o, options: i }, r ? r.push(n) : this.__on = [n];
  };
}
function cu(t11, e, i) {
  var r = au(t11 + ""), n, o = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, h = a.length, c; l < h; ++l)
        for (n = 0, c = a[l]; n < o; ++n)
          if ((s = r[n]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (a = e ? hu : lu, n = 0; n < o; ++n)
    this.each(a(r[n], e, i));
  return this;
}
function Vs(t11, e, i) {
  var r = Hs(t11), n = r.CustomEvent;
  typeof n == "function" ? n = new n(e, i) : (n = r.document.createEvent("Event"), i ? (n.initEvent(e, i.bubbles, i.cancelable), n.detail = i.detail) : n.initEvent(e, false, false)), t11.dispatchEvent(n);
}
function uu(t11, e) {
  return function() {
    return Vs(this, t11, e);
  };
}
function fu(t11, e) {
  return function() {
    return Vs(this, t11, e.apply(this, arguments));
  };
}
function du(t11, e) {
  return this.each((typeof e == "function" ? fu : uu)(t11, e));
}
function* pu() {
  for (var t11 = this._groups, e = 0, i = t11.length; e < i; ++e)
    for (var r = t11[e], n = 0, o = r.length, s; n < o; ++n)
      (s = r[n]) && (yield s);
}
var Xs = [null];
function st(t11, e) {
  this._groups = t11, this._parents = e;
}
function ei() {
  return new st([[document.documentElement]], Xs);
}
function gu() {
  return this;
}
st.prototype = ei.prototype = {
  constructor: st,
  select: zh,
  selectAll: Uh,
  selectChild: Xh,
  selectChildren: Qh,
  filter: tc,
  data: sc,
  enter: ec,
  exit: lc,
  join: hc,
  merge: cc,
  selection: gu,
  order: uc,
  sort: fc,
  call: pc,
  nodes: gc,
  node: mc,
  size: _c,
  empty: yc,
  each: Cc,
  attr: wc,
  style: Ac,
  property: $c,
  classed: Rc,
  text: Wc,
  html: Yc,
  raise: Vc,
  lower: Kc,
  append: Zc,
  insert: Qc,
  remove: eu,
  clone: nu,
  datum: ou,
  on: cu,
  dispatch: du,
  [Symbol.iterator]: pu
};
function Ct(t11) {
  return typeof t11 == "string" ? new st([[document.querySelector(t11)]], [document.documentElement]) : new st([[t11]], Xs);
}
function En(t11, e, i) {
  t11.prototype = e.prototype = i, i.constructor = t11;
}
function Ks(t11, e) {
  var i = Object.create(t11.prototype);
  for (var r in e)
    i[r] = e[r];
  return i;
}
function ii() {
}
var Ue = 0.7;
var Wi = 1 / Ue;
var Ce = "\\s*([+-]?\\d+)\\s*";
var Ye = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var xt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var mu = /^#([0-9a-f]{3,8})$/;
var _u = new RegExp(`^rgb\\(${Ce},${Ce},${Ce}\\)$`);
var yu = new RegExp(`^rgb\\(${xt},${xt},${xt}\\)$`);
var Cu = new RegExp(`^rgba\\(${Ce},${Ce},${Ce},${Ye}\\)$`);
var xu = new RegExp(`^rgba\\(${xt},${xt},${xt},${Ye}\\)$`);
var bu = new RegExp(`^hsl\\(${Ye},${xt},${xt}\\)$`);
var Tu = new RegExp(`^hsla\\(${Ye},${xt},${xt},${Ye}\\)$`);
var Fo = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
En(ii, Ge, {
  copy(t11) {
    return Object.assign(new this.constructor(), this, t11);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Lo,
  // Deprecated! Use color.formatHex.
  formatHex: Lo,
  formatHex8: Su,
  formatHsl: vu,
  formatRgb: Ao,
  toString: Ao
});
function Lo() {
  return this.rgb().formatHex();
}
function Su() {
  return this.rgb().formatHex8();
}
function vu() {
  return Zs(this).formatHsl();
}
function Ao() {
  return this.rgb().formatRgb();
}
function Ge(t11) {
  var e, i;
  return t11 = (t11 + "").trim().toLowerCase(), (e = mu.exec(t11)) ? (i = e[1].length, e = parseInt(e[1], 16), i === 6 ? Eo(e) : i === 3 ? new it(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : i === 8 ? _i(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : i === 4 ? _i(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = _u.exec(t11)) ? new it(e[1], e[2], e[3], 1) : (e = yu.exec(t11)) ? new it(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Cu.exec(t11)) ? _i(e[1], e[2], e[3], e[4]) : (e = xu.exec(t11)) ? _i(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = bu.exec(t11)) ? $o(e[1], e[2] / 100, e[3] / 100, 1) : (e = Tu.exec(t11)) ? $o(e[1], e[2] / 100, e[3] / 100, e[4]) : Fo.hasOwnProperty(t11) ? Eo(Fo[t11]) : t11 === "transparent" ? new it(NaN, NaN, NaN, 0) : null;
}
function Eo(t11) {
  return new it(t11 >> 16 & 255, t11 >> 8 & 255, t11 & 255, 1);
}
function _i(t11, e, i, r) {
  return r <= 0 && (t11 = e = i = NaN), new it(t11, e, i, r);
}
function ku(t11) {
  return t11 instanceof ii || (t11 = Ge(t11)), t11 ? (t11 = t11.rgb(), new it(t11.r, t11.g, t11.b, t11.opacity)) : new it();
}
function sn(t11, e, i, r) {
  return arguments.length === 1 ? ku(t11) : new it(t11, e, i, r ?? 1);
}
function it(t11, e, i, r) {
  this.r = +t11, this.g = +e, this.b = +i, this.opacity = +r;
}
En(it, sn, Ks(ii, {
  brighter(t11) {
    return t11 = t11 == null ? Wi : Math.pow(Wi, t11), new it(this.r * t11, this.g * t11, this.b * t11, this.opacity);
  },
  darker(t11) {
    return t11 = t11 == null ? Ue : Math.pow(Ue, t11), new it(this.r * t11, this.g * t11, this.b * t11, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new it(Kt(this.r), Kt(this.g), Kt(this.b), Hi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Mo,
  // Deprecated! Use color.formatHex.
  formatHex: Mo,
  formatHex8: wu,
  formatRgb: Oo,
  toString: Oo
}));
function Mo() {
  return `#${Vt(this.r)}${Vt(this.g)}${Vt(this.b)}`;
}
function wu() {
  return `#${Vt(this.r)}${Vt(this.g)}${Vt(this.b)}${Vt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Oo() {
  const t11 = Hi(this.opacity);
  return `${t11 === 1 ? "rgb(" : "rgba("}${Kt(this.r)}, ${Kt(this.g)}, ${Kt(this.b)}${t11 === 1 ? ")" : `, ${t11})`}`;
}
function Hi(t11) {
  return isNaN(t11) ? 1 : Math.max(0, Math.min(1, t11));
}
function Kt(t11) {
  return Math.max(0, Math.min(255, Math.round(t11) || 0));
}
function Vt(t11) {
  return t11 = Kt(t11), (t11 < 16 ? "0" : "") + t11.toString(16);
}
function $o(t11, e, i, r) {
  return r <= 0 ? t11 = e = i = NaN : i <= 0 || i >= 1 ? t11 = e = NaN : e <= 0 && (t11 = NaN), new pt(t11, e, i, r);
}
function Zs(t11) {
  if (t11 instanceof pt)
    return new pt(t11.h, t11.s, t11.l, t11.opacity);
  if (t11 instanceof ii || (t11 = Ge(t11)), !t11)
    return new pt();
  if (t11 instanceof pt)
    return t11;
  t11 = t11.rgb();
  var e = t11.r / 255, i = t11.g / 255, r = t11.b / 255, n = Math.min(e, i, r), o = Math.max(e, i, r), s = NaN, a = o - n, l = (o + n) / 2;
  return a ? (e === o ? s = (i - r) / a + (i < r) * 6 : i === o ? s = (r - e) / a + 2 : s = (e - i) / a + 4, a /= l < 0.5 ? o + n : 2 - o - n, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new pt(s, a, l, t11.opacity);
}
function Bu(t11, e, i, r) {
  return arguments.length === 1 ? Zs(t11) : new pt(t11, e, i, r ?? 1);
}
function pt(t11, e, i, r) {
  this.h = +t11, this.s = +e, this.l = +i, this.opacity = +r;
}
En(pt, Bu, Ks(ii, {
  brighter(t11) {
    return t11 = t11 == null ? Wi : Math.pow(Wi, t11), new pt(this.h, this.s, this.l * t11, this.opacity);
  },
  darker(t11) {
    return t11 = t11 == null ? Ue : Math.pow(Ue, t11), new pt(this.h, this.s, this.l * t11, this.opacity);
  },
  rgb() {
    var t11 = this.h % 360 + (this.h < 0) * 360, e = isNaN(t11) || isNaN(this.s) ? 0 : this.s, i = this.l, r = i + (i < 0.5 ? i : 1 - i) * e, n = 2 * i - r;
    return new it(
      zr(t11 >= 240 ? t11 - 240 : t11 + 120, n, r),
      zr(t11, n, r),
      zr(t11 < 120 ? t11 + 240 : t11 - 120, n, r),
      this.opacity
    );
  },
  clamp() {
    return new pt(Io(this.h), yi(this.s), yi(this.l), Hi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t11 = Hi(this.opacity);
    return `${t11 === 1 ? "hsl(" : "hsla("}${Io(this.h)}, ${yi(this.s) * 100}%, ${yi(this.l) * 100}%${t11 === 1 ? ")" : `, ${t11})`}`;
  }
}));
function Io(t11) {
  return t11 = (t11 || 0) % 360, t11 < 0 ? t11 + 360 : t11;
}
function yi(t11) {
  return Math.max(0, Math.min(1, t11 || 0));
}
function zr(t11, e, i) {
  return (t11 < 60 ? e + (i - e) * t11 / 60 : t11 < 180 ? i : t11 < 240 ? e + (i - e) * (240 - t11) / 60 : e) * 255;
}
var Mn = (t11) => () => t11;
function Js(t11, e) {
  return function(i) {
    return t11 + i * e;
  };
}
function Fu(t11, e, i) {
  return t11 = Math.pow(t11, i), e = Math.pow(e, i) - t11, i = 1 / i, function(r) {
    return Math.pow(t11 + r * e, i);
  };
}
function ib(t11, e) {
  var i = e - t11;
  return i ? Js(t11, i > 180 || i < -180 ? i - 360 * Math.round(i / 360) : i) : Mn(isNaN(t11) ? e : t11);
}
function Lu(t11) {
  return (t11 = +t11) == 1 ? Qs : function(e, i) {
    return i - e ? Fu(e, i, t11) : Mn(isNaN(e) ? i : e);
  };
}
function Qs(t11, e) {
  var i = e - t11;
  return i ? Js(t11, i) : Mn(isNaN(t11) ? e : t11);
}
var Do = function t3(e) {
  var i = Lu(e);
  function r(n, o) {
    var s = i((n = sn(n)).r, (o = sn(o)).r), a = i(n.g, o.g), l = i(n.b, o.b), h = Qs(n.opacity, o.opacity);
    return function(c) {
      return n.r = s(c), n.g = a(c), n.b = l(c), n.opacity = h(c), n + "";
    };
  }
  return r.gamma = t3, r;
}(1);
function It(t11, e) {
  return t11 = +t11, e = +e, function(i) {
    return t11 * (1 - i) + e * i;
  };
}
var an = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var Wr = new RegExp(an.source, "g");
function Au(t11) {
  return function() {
    return t11;
  };
}
function Eu(t11) {
  return function(e) {
    return t11(e) + "";
  };
}
function Mu(t11, e) {
  var i = an.lastIndex = Wr.lastIndex = 0, r, n, o, s = -1, a = [], l = [];
  for (t11 = t11 + "", e = e + ""; (r = an.exec(t11)) && (n = Wr.exec(e)); )
    (o = n.index) > i && (o = e.slice(i, o), a[s] ? a[s] += o : a[++s] = o), (r = r[0]) === (n = n[0]) ? a[s] ? a[s] += n : a[++s] = n : (a[++s] = null, l.push({ i: s, x: It(r, n) })), i = Wr.lastIndex;
  return i < e.length && (o = e.slice(i), a[s] ? a[s] += o : a[++s] = o), a.length < 2 ? l[0] ? Eu(l[0].x) : Au(e) : (e = l.length, function(h) {
    for (var c = 0, u; c < e; ++c)
      a[(u = l[c]).i] = u.x(h);
    return a.join("");
  });
}
var No = 180 / Math.PI;
var ln = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ta(t11, e, i, r, n, o) {
  var s, a, l;
  return (s = Math.sqrt(t11 * t11 + e * e)) && (t11 /= s, e /= s), (l = t11 * i + e * r) && (i -= t11 * l, r -= e * l), (a = Math.sqrt(i * i + r * r)) && (i /= a, r /= a, l /= a), t11 * r < e * i && (t11 = -t11, e = -e, l = -l, s = -s), {
    translateX: n,
    translateY: o,
    rotate: Math.atan2(e, t11) * No,
    skewX: Math.atan(l) * No,
    scaleX: s,
    scaleY: a
  };
}
var Ci;
function Ou(t11) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t11 + "");
  return e.isIdentity ? ln : ta(e.a, e.b, e.c, e.d, e.e, e.f);
}
function $u(t11) {
  return t11 == null || (Ci || (Ci = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ci.setAttribute("transform", t11), !(t11 = Ci.transform.baseVal.consolidate())) ? ln : (t11 = t11.matrix, ta(t11.a, t11.b, t11.c, t11.d, t11.e, t11.f));
}
function ea(t11, e, i, r) {
  function n(h) {
    return h.length ? h.pop() + " " : "";
  }
  function o(h, c, u, g, p, _) {
    if (h !== u || c !== g) {
      var T = p.push("translate(", null, e, null, i);
      _.push({ i: T - 4, x: It(h, u) }, { i: T - 2, x: It(c, g) });
    } else
      (u || g) && p.push("translate(" + u + e + g + i);
  }
  function s(h, c, u, g) {
    h !== c ? (h - c > 180 ? c += 360 : c - h > 180 && (h += 360), g.push({ i: u.push(n(u) + "rotate(", null, r) - 2, x: It(h, c) })) : c && u.push(n(u) + "rotate(" + c + r);
  }
  function a(h, c, u, g) {
    h !== c ? g.push({ i: u.push(n(u) + "skewX(", null, r) - 2, x: It(h, c) }) : c && u.push(n(u) + "skewX(" + c + r);
  }
  function l(h, c, u, g, p, _) {
    if (h !== u || c !== g) {
      var T = p.push(n(p) + "scale(", null, ",", null, ")");
      _.push({ i: T - 4, x: It(h, u) }, { i: T - 2, x: It(c, g) });
    } else
      (u !== 1 || g !== 1) && p.push(n(p) + "scale(" + u + "," + g + ")");
  }
  return function(h, c) {
    var u = [], g = [];
    return h = t11(h), c = t11(c), o(h.translateX, h.translateY, c.translateX, c.translateY, u, g), s(h.rotate, c.rotate, u, g), a(h.skewX, c.skewX, u, g), l(h.scaleX, h.scaleY, c.scaleX, c.scaleY, u, g), h = c = null, function(p) {
      for (var _ = -1, T = g.length, B; ++_ < T; )
        u[(B = g[_]).i] = B.x(p);
      return u.join("");
    };
  };
}
var Iu = ea(Ou, "px, ", "px)", "deg)");
var Du = ea($u, ", ", ")", ")");
var Te = 0;
var Ne = 0;
var Oe = 0;
var ia = 1e3;
var ji;
var Re;
var Ui = 0;
var Qt = 0;
var cr = 0;
var Ve = typeof performance == "object" && performance.now ? performance : Date;
var ra = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t11) {
  setTimeout(t11, 17);
};
function On() {
  return Qt || (ra(Nu), Qt = Ve.now() + cr);
}
function Nu() {
  Qt = 0;
}
function Yi() {
  this._call = this._time = this._next = null;
}
Yi.prototype = na.prototype = {
  constructor: Yi,
  restart: function(t11, e, i) {
    if (typeof t11 != "function")
      throw new TypeError("callback is not a function");
    i = (i == null ? On() : +i) + (e == null ? 0 : +e), !this._next && Re !== this && (Re ? Re._next = this : ji = this, Re = this), this._call = t11, this._time = i, hn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, hn());
  }
};
function na(t11, e, i) {
  var r = new Yi();
  return r.restart(t11, e, i), r;
}
function Ru() {
  On(), ++Te;
  for (var t11 = ji, e; t11; )
    (e = Qt - t11._time) >= 0 && t11._call.call(void 0, e), t11 = t11._next;
  --Te;
}
function Ro() {
  Qt = (Ui = Ve.now()) + cr, Te = Ne = 0;
  try {
    Ru();
  } finally {
    Te = 0, Pu(), Qt = 0;
  }
}
function qu() {
  var t11 = Ve.now(), e = t11 - Ui;
  e > ia && (cr -= e, Ui = t11);
}
function Pu() {
  for (var t11, e = ji, i, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t11 = e, e = e._next) : (i = e._next, e._next = null, e = t11 ? t11._next = i : ji = i);
  Re = t11, hn(r);
}
function hn(t11) {
  if (!Te) {
    Ne && (Ne = clearTimeout(Ne));
    var e = t11 - Qt;
    e > 24 ? (t11 < 1 / 0 && (Ne = setTimeout(Ro, t11 - Ve.now() - cr)), Oe && (Oe = clearInterval(Oe))) : (Oe || (Ui = Ve.now(), Oe = setInterval(qu, ia)), Te = 1, ra(Ro));
  }
}
function qo(t11, e, i) {
  var r = new Yi();
  return e = e == null ? 0 : +e, r.restart((n) => {
    r.stop(), t11(n + e);
  }, e, i), r;
}
var zu = Ns("start", "end", "cancel", "interrupt");
var Wu = [];
var oa = 0;
var Po = 1;
var cn = 2;
var Fi = 3;
var zo = 4;
var un = 5;
var Li = 6;
function ur(t11, e, i, r, n, o) {
  var s = t11.__transition;
  if (!s)
    t11.__transition = {};
  else if (i in s)
    return;
  Hu(t11, i, {
    name: e,
    index: r,
    // For context during callback.
    group: n,
    // For context during callback.
    on: zu,
    tween: Wu,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: oa
  });
}
function $n(t11, e) {
  var i = _t(t11, e);
  if (i.state > oa)
    throw new Error("too late; already scheduled");
  return i;
}
function St(t11, e) {
  var i = _t(t11, e);
  if (i.state > Fi)
    throw new Error("too late; already running");
  return i;
}
function _t(t11, e) {
  var i = t11.__transition;
  if (!i || !(i = i[e]))
    throw new Error("transition not found");
  return i;
}
function Hu(t11, e, i) {
  var r = t11.__transition, n;
  r[e] = i, i.timer = na(o, 0, i.time);
  function o(h) {
    i.state = Po, i.timer.restart(s, i.delay, i.time), i.delay <= h && s(h - i.delay);
  }
  function s(h) {
    var c, u, g, p;
    if (i.state !== Po)
      return l();
    for (c in r)
      if (p = r[c], p.name === i.name) {
        if (p.state === Fi)
          return qo(s);
        p.state === zo ? (p.state = Li, p.timer.stop(), p.on.call("interrupt", t11, t11.__data__, p.index, p.group), delete r[c]) : +c < e && (p.state = Li, p.timer.stop(), p.on.call("cancel", t11, t11.__data__, p.index, p.group), delete r[c]);
      }
    if (qo(function() {
      i.state === Fi && (i.state = zo, i.timer.restart(a, i.delay, i.time), a(h));
    }), i.state = cn, i.on.call("start", t11, t11.__data__, i.index, i.group), i.state === cn) {
      for (i.state = Fi, n = new Array(g = i.tween.length), c = 0, u = -1; c < g; ++c)
        (p = i.tween[c].value.call(t11, t11.__data__, i.index, i.group)) && (n[++u] = p);
      n.length = u + 1;
    }
  }
  function a(h) {
    for (var c = h < i.duration ? i.ease.call(null, h / i.duration) : (i.timer.restart(l), i.state = un, 1), u = -1, g = n.length; ++u < g; )
      n[u].call(t11, c);
    i.state === un && (i.on.call("end", t11, t11.__data__, i.index, i.group), l());
  }
  function l() {
    i.state = Li, i.timer.stop(), delete r[e];
    for (var h in r)
      return;
    delete t11.__transition;
  }
}
function ju(t11, e) {
  var i = t11.__transition, r, n, o = true, s;
  if (i) {
    e = e == null ? null : e + "";
    for (s in i) {
      if ((r = i[s]).name !== e) {
        o = false;
        continue;
      }
      n = r.state > cn && r.state < un, r.state = Li, r.timer.stop(), r.on.call(n ? "interrupt" : "cancel", t11, t11.__data__, r.index, r.group), delete i[s];
    }
    o && delete t11.__transition;
  }
}
function Uu(t11) {
  return this.each(function() {
    ju(this, t11);
  });
}
function Yu(t11, e) {
  var i, r;
  return function() {
    var n = St(this, t11), o = n.tween;
    if (o !== i) {
      r = i = o;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === e) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    n.tween = r;
  };
}
function Gu(t11, e, i) {
  var r, n;
  if (typeof i != "function")
    throw new Error();
  return function() {
    var o = St(this, t11), s = o.tween;
    if (s !== r) {
      n = (r = s).slice();
      for (var a = { name: e, value: i }, l = 0, h = n.length; l < h; ++l)
        if (n[l].name === e) {
          n[l] = a;
          break;
        }
      l === h && n.push(a);
    }
    o.tween = n;
  };
}
function Vu(t11, e) {
  var i = this._id;
  if (t11 += "", arguments.length < 2) {
    for (var r = _t(this.node(), i).tween, n = 0, o = r.length, s; n < o; ++n)
      if ((s = r[n]).name === t11)
        return s.value;
    return null;
  }
  return this.each((e == null ? Yu : Gu)(i, t11, e));
}
function In(t11, e, i) {
  var r = t11._id;
  return t11.each(function() {
    var n = St(this, r);
    (n.value || (n.value = {}))[e] = i.apply(this, arguments);
  }), function(n) {
    return _t(n, r).value[e];
  };
}
function sa(t11, e) {
  var i;
  return (typeof e == "number" ? It : e instanceof Ge ? Do : (i = Ge(e)) ? (e = i, Do) : Mu)(t11, e);
}
function Xu(t11) {
  return function() {
    this.removeAttribute(t11);
  };
}
function Ku(t11) {
  return function() {
    this.removeAttributeNS(t11.space, t11.local);
  };
}
function Zu(t11, e, i) {
  var r, n = i + "", o;
  return function() {
    var s = this.getAttribute(t11);
    return s === n ? null : s === r ? o : o = e(r = s, i);
  };
}
function Ju(t11, e, i) {
  var r, n = i + "", o;
  return function() {
    var s = this.getAttributeNS(t11.space, t11.local);
    return s === n ? null : s === r ? o : o = e(r = s, i);
  };
}
function Qu(t11, e, i) {
  var r, n, o;
  return function() {
    var s, a = i(this), l;
    return a == null ? void this.removeAttribute(t11) : (s = this.getAttribute(t11), l = a + "", s === l ? null : s === r && l === n ? o : (n = l, o = e(r = s, a)));
  };
}
function tf(t11, e, i) {
  var r, n, o;
  return function() {
    var s, a = i(this), l;
    return a == null ? void this.removeAttributeNS(t11.space, t11.local) : (s = this.getAttributeNS(t11.space, t11.local), l = a + "", s === l ? null : s === r && l === n ? o : (n = l, o = e(r = s, a)));
  };
}
function ef(t11, e) {
  var i = hr(t11), r = i === "transform" ? Du : sa;
  return this.attrTween(t11, typeof e == "function" ? (i.local ? tf : Qu)(i, r, In(this, "attr." + t11, e)) : e == null ? (i.local ? Ku : Xu)(i) : (i.local ? Ju : Zu)(i, r, e));
}
function rf(t11, e) {
  return function(i) {
    this.setAttribute(t11, e.call(this, i));
  };
}
function nf(t11, e) {
  return function(i) {
    this.setAttributeNS(t11.space, t11.local, e.call(this, i));
  };
}
function of(t11, e) {
  var i, r;
  function n() {
    var o = e.apply(this, arguments);
    return o !== r && (i = (r = o) && nf(t11, o)), i;
  }
  return n._value = e, n;
}
function sf(t11, e) {
  var i, r;
  function n() {
    var o = e.apply(this, arguments);
    return o !== r && (i = (r = o) && rf(t11, o)), i;
  }
  return n._value = e, n;
}
function af(t11, e) {
  var i = "attr." + t11;
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (e == null)
    return this.tween(i, null);
  if (typeof e != "function")
    throw new Error();
  var r = hr(t11);
  return this.tween(i, (r.local ? of : sf)(r, e));
}
function lf(t11, e) {
  return function() {
    $n(this, t11).delay = +e.apply(this, arguments);
  };
}
function hf(t11, e) {
  return e = +e, function() {
    $n(this, t11).delay = e;
  };
}
function cf(t11) {
  var e = this._id;
  return arguments.length ? this.each((typeof t11 == "function" ? lf : hf)(e, t11)) : _t(this.node(), e).delay;
}
function uf(t11, e) {
  return function() {
    St(this, t11).duration = +e.apply(this, arguments);
  };
}
function ff(t11, e) {
  return e = +e, function() {
    St(this, t11).duration = e;
  };
}
function df(t11) {
  var e = this._id;
  return arguments.length ? this.each((typeof t11 == "function" ? uf : ff)(e, t11)) : _t(this.node(), e).duration;
}
function pf(t11, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    St(this, t11).ease = e;
  };
}
function gf(t11) {
  var e = this._id;
  return arguments.length ? this.each(pf(e, t11)) : _t(this.node(), e).ease;
}
function mf(t11, e) {
  return function() {
    var i = e.apply(this, arguments);
    if (typeof i != "function")
      throw new Error();
    St(this, t11).ease = i;
  };
}
function _f(t11) {
  if (typeof t11 != "function")
    throw new Error();
  return this.each(mf(this._id, t11));
}
function yf(t11) {
  typeof t11 != "function" && (t11 = Ps(t11));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var o = e[n], s = o.length, a = r[n] = [], l, h = 0; h < s; ++h)
      (l = o[h]) && t11.call(l, l.__data__, h, o) && a.push(l);
  return new At(r, this._parents, this._name, this._id);
}
function Cf(t11) {
  if (t11._id !== this._id)
    throw new Error();
  for (var e = this._groups, i = t11._groups, r = e.length, n = i.length, o = Math.min(r, n), s = new Array(r), a = 0; a < o; ++a)
    for (var l = e[a], h = i[a], c = l.length, u = s[a] = new Array(c), g, p = 0; p < c; ++p)
      (g = l[p] || h[p]) && (u[p] = g);
  for (; a < r; ++a)
    s[a] = e[a];
  return new At(s, this._parents, this._name, this._id);
}
function xf(t11) {
  return (t11 + "").trim().split(/^|\s+/).every(function(e) {
    var i = e.indexOf(".");
    return i >= 0 && (e = e.slice(0, i)), !e || e === "start";
  });
}
function bf(t11, e, i) {
  var r, n, o = xf(e) ? $n : St;
  return function() {
    var s = o(this, t11), a = s.on;
    a !== r && (n = (r = a).copy()).on(e, i), s.on = n;
  };
}
function Tf(t11, e) {
  var i = this._id;
  return arguments.length < 2 ? _t(this.node(), i).on.on(t11) : this.each(bf(i, t11, e));
}
function Sf(t11) {
  return function() {
    var e = this.parentNode;
    for (var i in this.__transition)
      if (+i !== t11)
        return;
    e && e.removeChild(this);
  };
}
function vf() {
  return this.on("end.remove", Sf(this._id));
}
function kf(t11) {
  var e = this._name, i = this._id;
  typeof t11 != "function" && (t11 = Ln(t11));
  for (var r = this._groups, n = r.length, o = new Array(n), s = 0; s < n; ++s)
    for (var a = r[s], l = a.length, h = o[s] = new Array(l), c, u, g = 0; g < l; ++g)
      (c = a[g]) && (u = t11.call(c, c.__data__, g, a)) && ("__data__" in c && (u.__data__ = c.__data__), h[g] = u, ur(h[g], e, i, g, h, _t(c, i)));
  return new At(o, this._parents, e, i);
}
function wf(t11) {
  var e = this._name, i = this._id;
  typeof t11 != "function" && (t11 = qs(t11));
  for (var r = this._groups, n = r.length, o = [], s = [], a = 0; a < n; ++a)
    for (var l = r[a], h = l.length, c, u = 0; u < h; ++u)
      if (c = l[u]) {
        for (var g = t11.call(c, c.__data__, u, l), p, _ = _t(c, i), T = 0, B = g.length; T < B; ++T)
          (p = g[T]) && ur(p, e, i, T, g, _);
        o.push(g), s.push(c);
      }
  return new At(o, s, e, i);
}
var Bf = ei.prototype.constructor;
function Ff() {
  return new Bf(this._groups, this._parents);
}
function Lf(t11, e) {
  var i, r, n;
  return function() {
    var o = be(this, t11), s = (this.style.removeProperty(t11), be(this, t11));
    return o === s ? null : o === i && s === r ? n : n = e(i = o, r = s);
  };
}
function aa(t11) {
  return function() {
    this.style.removeProperty(t11);
  };
}
function Af(t11, e, i) {
  var r, n = i + "", o;
  return function() {
    var s = be(this, t11);
    return s === n ? null : s === r ? o : o = e(r = s, i);
  };
}
function Ef(t11, e, i) {
  var r, n, o;
  return function() {
    var s = be(this, t11), a = i(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(t11), be(this, t11))), s === l ? null : s === r && l === n ? o : (n = l, o = e(r = s, a));
  };
}
function Mf(t11, e) {
  var i, r, n, o = "style." + e, s = "end." + o, a;
  return function() {
    var l = St(this, t11), h = l.on, c = l.value[o] == null ? a || (a = aa(e)) : void 0;
    (h !== i || n !== c) && (r = (i = h).copy()).on(s, n = c), l.on = r;
  };
}
function Of(t11, e, i) {
  var r = (t11 += "") == "transform" ? Iu : sa;
  return e == null ? this.styleTween(t11, Lf(t11, r)).on("end.style." + t11, aa(t11)) : typeof e == "function" ? this.styleTween(t11, Ef(t11, r, In(this, "style." + t11, e))).each(Mf(this._id, t11)) : this.styleTween(t11, Af(t11, r, e), i).on("end.style." + t11, null);
}
function $f(t11, e, i) {
  return function(r) {
    this.style.setProperty(t11, e.call(this, r), i);
  };
}
function If(t11, e, i) {
  var r, n;
  function o() {
    var s = e.apply(this, arguments);
    return s !== n && (r = (n = s) && $f(t11, s, i)), r;
  }
  return o._value = e, o;
}
function Df(t11, e, i) {
  var r = "style." + (t11 += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(r, If(t11, e, i ?? ""));
}
function Nf(t11) {
  return function() {
    this.textContent = t11;
  };
}
function Rf(t11) {
  return function() {
    var e = t11(this);
    this.textContent = e ?? "";
  };
}
function qf(t11) {
  return this.tween("text", typeof t11 == "function" ? Rf(In(this, "text", t11)) : Nf(t11 == null ? "" : t11 + ""));
}
function Pf(t11) {
  return function(e) {
    this.textContent = t11.call(this, e);
  };
}
function zf(t11) {
  var e, i;
  function r() {
    var n = t11.apply(this, arguments);
    return n !== i && (e = (i = n) && Pf(n)), e;
  }
  return r._value = t11, r;
}
function Wf(t11) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t11 == null)
    return this.tween(e, null);
  if (typeof t11 != "function")
    throw new Error();
  return this.tween(e, zf(t11));
}
function Hf() {
  for (var t11 = this._name, e = this._id, i = la(), r = this._groups, n = r.length, o = 0; o < n; ++o)
    for (var s = r[o], a = s.length, l, h = 0; h < a; ++h)
      if (l = s[h]) {
        var c = _t(l, e);
        ur(l, t11, i, h, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new At(r, this._parents, t11, i);
}
function jf() {
  var t11, e, i = this, r = i._id, n = i.size();
  return new Promise(function(o, s) {
    var a = { value: s }, l = { value: function() {
      --n === 0 && o();
    } };
    i.each(function() {
      var h = St(this, r), c = h.on;
      c !== t11 && (e = (t11 = c).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(l)), h.on = e;
    }), n === 0 && o();
  });
}
var Uf = 0;
function At(t11, e, i, r) {
  this._groups = t11, this._parents = e, this._name = i, this._id = r;
}
function la() {
  return ++Uf;
}
var Bt = ei.prototype;
At.prototype = {
  constructor: At,
  select: kf,
  selectAll: wf,
  selectChild: Bt.selectChild,
  selectChildren: Bt.selectChildren,
  filter: yf,
  merge: Cf,
  selection: Ff,
  transition: Hf,
  call: Bt.call,
  nodes: Bt.nodes,
  node: Bt.node,
  size: Bt.size,
  empty: Bt.empty,
  each: Bt.each,
  on: Tf,
  attr: ef,
  attrTween: af,
  style: Of,
  styleTween: Df,
  text: qf,
  textTween: Wf,
  remove: vf,
  tween: Vu,
  delay: cf,
  duration: df,
  ease: gf,
  easeVarying: _f,
  end: jf,
  [Symbol.iterator]: Bt[Symbol.iterator]
};
function Yf(t11) {
  return ((t11 *= 2) <= 1 ? t11 * t11 * t11 : (t11 -= 2) * t11 * t11 + 2) / 2;
}
var Gf = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Yf
};
function Vf(t11, e) {
  for (var i; !(i = t11.__transition) || !(i = i[e]); )
    if (!(t11 = t11.parentNode))
      throw new Error(`transition ${e} not found`);
  return i;
}
function Xf(t11) {
  var e, i;
  t11 instanceof At ? (e = t11._id, t11 = t11._name) : (e = la(), (i = Gf).time = On(), t11 = t11 == null ? null : t11 + "");
  for (var r = this._groups, n = r.length, o = 0; o < n; ++o)
    for (var s = r[o], a = s.length, l, h = 0; h < a; ++h)
      (l = s[h]) && ur(l, t11, e, h, s, i || Vf(l, e));
  return new At(r, this._parents, t11, e);
}
ei.prototype.interrupt = Uu;
ei.prototype.transition = Xf;
var rb = Math.abs;
var nb = Math.atan2;
var ob = Math.cos;
var sb = Math.max;
var ab = Math.min;
var lb = Math.sin;
var hb = Math.sqrt;
var Wo = 1e-12;
var Dn = Math.PI;
var Ho = Dn / 2;
var cb = 2 * Dn;
function ub(t11) {
  return t11 > 1 ? 0 : t11 < -1 ? Dn : Math.acos(t11);
}
function fb(t11) {
  return t11 >= 1 ? Ho : t11 <= -1 ? -Ho : Math.asin(t11);
}
function ha(t11) {
  this._context = t11;
}
ha.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t11, e) {
    switch (t11 = +t11, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t11, e) : this._context.moveTo(t11, e);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(t11, e);
        break;
    }
  }
};
function Kf(t11) {
  return new ha(t11);
}
var ca = class {
  constructor(e, i) {
    this._context = e, this._x = i;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(e, i) {
    switch (e = +e, i = +i, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(e, i) : this._context.moveTo(e, i);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, i, e, i) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + i) / 2, e, this._y0, e, i);
        break;
      }
    }
    this._x0 = e, this._y0 = i;
  }
};
function Zf(t11) {
  return new ca(t11, true);
}
function Jf(t11) {
  return new ca(t11, false);
}
function qt() {
}
function Gi(t11, e, i) {
  t11._context.bezierCurveTo(
    (2 * t11._x0 + t11._x1) / 3,
    (2 * t11._y0 + t11._y1) / 3,
    (t11._x0 + 2 * t11._x1) / 3,
    (t11._y0 + 2 * t11._y1) / 3,
    (t11._x0 + 4 * t11._x1 + e) / 6,
    (t11._y0 + 4 * t11._y1 + i) / 6
  );
}
function fr(t11) {
  this._context = t11;
}
fr.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Gi(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t11, e) {
    switch (t11 = +t11, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t11, e) : this._context.moveTo(t11, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        Gi(this, t11, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t11, this._y0 = this._y1, this._y1 = e;
  }
};
function Qf(t11) {
  return new fr(t11);
}
function ua(t11) {
  this._context = t11;
}
ua.prototype = {
  areaStart: qt,
  areaEnd: qt,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(t11, e) {
    switch (t11 = +t11, e = +e, this._point) {
      case 0:
        this._point = 1, this._x2 = t11, this._y2 = e;
        break;
      case 1:
        this._point = 2, this._x3 = t11, this._y3 = e;
        break;
      case 2:
        this._point = 3, this._x4 = t11, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t11) / 6, (this._y0 + 4 * this._y1 + e) / 6);
        break;
      default:
        Gi(this, t11, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t11, this._y0 = this._y1, this._y1 = e;
  }
};
function td(t11) {
  return new ua(t11);
}
function fa(t11) {
  this._context = t11;
}
fa.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t11, e) {
    switch (t11 = +t11, e = +e, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var i = (this._x0 + 4 * this._x1 + t11) / 6, r = (this._y0 + 4 * this._y1 + e) / 6;
        this._line ? this._context.lineTo(i, r) : this._context.moveTo(i, r);
        break;
      case 3:
        this._point = 4;
      default:
        Gi(this, t11, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t11, this._y0 = this._y1, this._y1 = e;
  }
};
function ed(t11) {
  return new fa(t11);
}
function da(t11, e) {
  this._basis = new fr(t11), this._beta = e;
}
da.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var t11 = this._x, e = this._y, i = t11.length - 1;
    if (i > 0)
      for (var r = t11[0], n = e[0], o = t11[i] - r, s = e[i] - n, a = -1, l; ++a <= i; )
        l = a / i, this._basis.point(
          this._beta * t11[a] + (1 - this._beta) * (r + l * o),
          this._beta * e[a] + (1 - this._beta) * (n + l * s)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(t11, e) {
    this._x.push(+t11), this._y.push(+e);
  }
};
var id = function t4(e) {
  function i(r) {
    return e === 1 ? new fr(r) : new da(r, e);
  }
  return i.beta = function(r) {
    return t4(+r);
  }, i;
}(0.85);
function Vi(t11, e, i) {
  t11._context.bezierCurveTo(
    t11._x1 + t11._k * (t11._x2 - t11._x0),
    t11._y1 + t11._k * (t11._y2 - t11._y0),
    t11._x2 + t11._k * (t11._x1 - e),
    t11._y2 + t11._k * (t11._y1 - i),
    t11._x2,
    t11._y2
  );
}
function Nn(t11, e) {
  this._context = t11, this._k = (1 - e) / 6;
}
Nn.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        Vi(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t11, e) {
    switch (t11 = +t11, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t11, e) : this._context.moveTo(t11, e);
        break;
      case 1:
        this._point = 2, this._x1 = t11, this._y1 = e;
        break;
      case 2:
        this._point = 3;
      default:
        Vi(this, t11, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t11, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var rd = function t5(e) {
  function i(r) {
    return new Nn(r, e);
  }
  return i.tension = function(r) {
    return t5(+r);
  }, i;
}(0);
function Rn(t11, e) {
  this._context = t11, this._k = (1 - e) / 6;
}
Rn.prototype = {
  areaStart: qt,
  areaEnd: qt,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t11, e) {
    switch (t11 = +t11, e = +e, this._point) {
      case 0:
        this._point = 1, this._x3 = t11, this._y3 = e;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t11, this._y4 = e);
        break;
      case 2:
        this._point = 3, this._x5 = t11, this._y5 = e;
        break;
      default:
        Vi(this, t11, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t11, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var nd = function t6(e) {
  function i(r) {
    return new Rn(r, e);
  }
  return i.tension = function(r) {
    return t6(+r);
  }, i;
}(0);
function qn(t11, e) {
  this._context = t11, this._k = (1 - e) / 6;
}
qn.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t11, e) {
    switch (t11 = +t11, e = +e, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        Vi(this, t11, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t11, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var od = function t7(e) {
  function i(r) {
    return new qn(r, e);
  }
  return i.tension = function(r) {
    return t7(+r);
  }, i;
}(0);
function Pn(t11, e, i) {
  var r = t11._x1, n = t11._y1, o = t11._x2, s = t11._y2;
  if (t11._l01_a > Wo) {
    var a = 2 * t11._l01_2a + 3 * t11._l01_a * t11._l12_a + t11._l12_2a, l = 3 * t11._l01_a * (t11._l01_a + t11._l12_a);
    r = (r * a - t11._x0 * t11._l12_2a + t11._x2 * t11._l01_2a) / l, n = (n * a - t11._y0 * t11._l12_2a + t11._y2 * t11._l01_2a) / l;
  }
  if (t11._l23_a > Wo) {
    var h = 2 * t11._l23_2a + 3 * t11._l23_a * t11._l12_a + t11._l12_2a, c = 3 * t11._l23_a * (t11._l23_a + t11._l12_a);
    o = (o * h + t11._x1 * t11._l23_2a - e * t11._l12_2a) / c, s = (s * h + t11._y1 * t11._l23_2a - i * t11._l12_2a) / c;
  }
  t11._context.bezierCurveTo(r, n, o, s, t11._x2, t11._y2);
}
function pa(t11, e) {
  this._context = t11, this._alpha = e;
}
pa.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t11, e) {
    if (t11 = +t11, e = +e, this._point) {
      var i = this._x2 - t11, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t11, e) : this._context.moveTo(t11, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        Pn(this, t11, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t11, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var sd = function t8(e) {
  function i(r) {
    return e ? new pa(r, e) : new Nn(r, 0);
  }
  return i.alpha = function(r) {
    return t8(+r);
  }, i;
}(0.5);
function ga(t11, e) {
  this._context = t11, this._alpha = e;
}
ga.prototype = {
  areaStart: qt,
  areaEnd: qt,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t11, e) {
    if (t11 = +t11, e = +e, this._point) {
      var i = this._x2 - t11, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = t11, this._y3 = e;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t11, this._y4 = e);
        break;
      case 2:
        this._point = 3, this._x5 = t11, this._y5 = e;
        break;
      default:
        Pn(this, t11, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t11, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var ad = function t9(e) {
  function i(r) {
    return e ? new ga(r, e) : new Rn(r, 0);
  }
  return i.alpha = function(r) {
    return t9(+r);
  }, i;
}(0.5);
function ma(t11, e) {
  this._context = t11, this._alpha = e;
}
ma.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t11, e) {
    if (t11 = +t11, e = +e, this._point) {
      var i = this._x2 - t11, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        Pn(this, t11, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t11, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var ld = function t10(e) {
  function i(r) {
    return e ? new ma(r, e) : new qn(r, 0);
  }
  return i.alpha = function(r) {
    return t10(+r);
  }, i;
}(0.5);
function _a(t11) {
  this._context = t11;
}
_a.prototype = {
  areaStart: qt,
  areaEnd: qt,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(t11, e) {
    t11 = +t11, e = +e, this._point ? this._context.lineTo(t11, e) : (this._point = 1, this._context.moveTo(t11, e));
  }
};
function hd(t11) {
  return new _a(t11);
}
function jo(t11) {
  return t11 < 0 ? -1 : 1;
}
function Uo(t11, e, i) {
  var r = t11._x1 - t11._x0, n = e - t11._x1, o = (t11._y1 - t11._y0) / (r || n < 0 && -0), s = (i - t11._y1) / (n || r < 0 && -0), a = (o * n + s * r) / (r + n);
  return (jo(o) + jo(s)) * Math.min(Math.abs(o), Math.abs(s), 0.5 * Math.abs(a)) || 0;
}
function Yo(t11, e) {
  var i = t11._x1 - t11._x0;
  return i ? (3 * (t11._y1 - t11._y0) / i - e) / 2 : e;
}
function Hr(t11, e, i) {
  var r = t11._x0, n = t11._y0, o = t11._x1, s = t11._y1, a = (o - r) / 3;
  t11._context.bezierCurveTo(r + a, n + a * e, o - a, s - a * i, o, s);
}
function Xi(t11) {
  this._context = t11;
}
Xi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Hr(this, this._t0, Yo(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t11, e) {
    var i = NaN;
    if (t11 = +t11, e = +e, !(t11 === this._x1 && e === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t11, e) : this._context.moveTo(t11, e);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Hr(this, Yo(this, i = Uo(this, t11, e)), i);
          break;
        default:
          Hr(this, this._t0, i = Uo(this, t11, e));
          break;
      }
      this._x0 = this._x1, this._x1 = t11, this._y0 = this._y1, this._y1 = e, this._t0 = i;
    }
  }
};
function ya(t11) {
  this._context = new Ca(t11);
}
(ya.prototype = Object.create(Xi.prototype)).point = function(t11, e) {
  Xi.prototype.point.call(this, e, t11);
};
function Ca(t11) {
  this._context = t11;
}
Ca.prototype = {
  moveTo: function(t11, e) {
    this._context.moveTo(e, t11);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(t11, e) {
    this._context.lineTo(e, t11);
  },
  bezierCurveTo: function(t11, e, i, r, n, o) {
    this._context.bezierCurveTo(e, t11, r, i, o, n);
  }
};
function cd(t11) {
  return new Xi(t11);
}
function ud(t11) {
  return new ya(t11);
}
function xa(t11) {
  this._context = t11;
}
xa.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var t11 = this._x, e = this._y, i = t11.length;
    if (i)
      if (this._line ? this._context.lineTo(t11[0], e[0]) : this._context.moveTo(t11[0], e[0]), i === 2)
        this._context.lineTo(t11[1], e[1]);
      else
        for (var r = Go(t11), n = Go(e), o = 0, s = 1; s < i; ++o, ++s)
          this._context.bezierCurveTo(r[0][o], n[0][o], r[1][o], n[1][o], t11[s], e[s]);
    (this._line || this._line !== 0 && i === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(t11, e) {
    this._x.push(+t11), this._y.push(+e);
  }
};
function Go(t11) {
  var e, i = t11.length - 1, r, n = new Array(i), o = new Array(i), s = new Array(i);
  for (n[0] = 0, o[0] = 2, s[0] = t11[0] + 2 * t11[1], e = 1; e < i - 1; ++e)
    n[e] = 1, o[e] = 4, s[e] = 4 * t11[e] + 2 * t11[e + 1];
  for (n[i - 1] = 2, o[i - 1] = 7, s[i - 1] = 8 * t11[i - 1] + t11[i], e = 1; e < i; ++e)
    r = n[e] / o[e - 1], o[e] -= r, s[e] -= r * s[e - 1];
  for (n[i - 1] = s[i - 1] / o[i - 1], e = i - 2; e >= 0; --e)
    n[e] = (s[e] - n[e + 1]) / o[e];
  for (o[i - 1] = (t11[i] + n[i - 1]) / 2, e = 0; e < i - 1; ++e)
    o[e] = 2 * t11[e + 1] - n[e + 1];
  return [n, o];
}
function fd(t11) {
  return new xa(t11);
}
function dr(t11, e) {
  this._context = t11, this._t = e;
}
dr.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(t11, e) {
    switch (t11 = +t11, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t11, e) : this._context.moveTo(t11, e);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, e), this._context.lineTo(t11, e);
        else {
          var i = this._x * (1 - this._t) + t11 * this._t;
          this._context.lineTo(i, this._y), this._context.lineTo(i, e);
        }
        break;
      }
    }
    this._x = t11, this._y = e;
  }
};
function dd(t11) {
  return new dr(t11, 0.5);
}
function pd(t11) {
  return new dr(t11, 0);
}
function gd(t11) {
  return new dr(t11, 1);
}
function qe(t11, e, i) {
  this.k = t11, this.x = e, this.y = i;
}
qe.prototype = {
  constructor: qe,
  scale: function(t11) {
    return t11 === 1 ? this : new qe(this.k * t11, this.x, this.y);
  },
  translate: function(t11, e) {
    return t11 === 0 & e === 0 ? this : new qe(this.k, this.x + this.k * t11, this.y + this.k * e);
  },
  apply: function(t11) {
    return [t11[0] * this.k + this.x, t11[1] * this.k + this.y];
  },
  applyX: function(t11) {
    return t11 * this.k + this.x;
  },
  applyY: function(t11) {
    return t11 * this.k + this.y;
  },
  invert: function(t11) {
    return [(t11[0] - this.x) / this.k, (t11[1] - this.y) / this.k];
  },
  invertX: function(t11) {
    return (t11 - this.x) / this.k;
  },
  invertY: function(t11) {
    return (t11 - this.y) / this.k;
  },
  rescaleX: function(t11) {
    return t11.copy().domain(t11.range().map(this.invertX, this).map(t11.invert, t11));
  },
  rescaleY: function(t11) {
    return t11.copy().domain(t11.range().map(this.invertY, this).map(t11.invert, t11));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
qe.prototype;
var {
  entries: ba,
  setPrototypeOf: Vo,
  isFrozen: md,
  getPrototypeOf: _d,
  getOwnPropertyDescriptor: yd
} = Object;
var {
  freeze: tt,
  seal: mt,
  create: Cd
} = Object;
var {
  apply: fn,
  construct: dn
} = typeof Reflect < "u" && Reflect;
fn || (fn = function(e, i, r) {
  return e.apply(i, r);
});
tt || (tt = function(e) {
  return e;
});
mt || (mt = function(e) {
  return e;
});
dn || (dn = function(e, i) {
  return new e(...i);
});
var xd = ct(Array.prototype.forEach);
var Xo = ct(Array.prototype.pop);
var $e = ct(Array.prototype.push);
var Ai = ct(String.prototype.toLowerCase);
var jr = ct(String.prototype.toString);
var bd = ct(String.prototype.match);
var ft = ct(String.prototype.replace);
var Td = ct(String.prototype.indexOf);
var Sd = ct(String.prototype.trim);
var ot = ct(RegExp.prototype.test);
var Ie = vd(TypeError);
function ct(t11) {
  return function(e) {
    for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
      r[n - 1] = arguments[n];
    return fn(t11, e, r);
  };
}
function vd(t11) {
  return function() {
    for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++)
      i[r] = arguments[r];
    return dn(t11, i);
  };
}
function E(t11, e, i) {
  var r;
  i = (r = i) !== null && r !== void 0 ? r : Ai, Vo && Vo(t11, null);
  let n = e.length;
  for (; n--; ) {
    let o = e[n];
    if (typeof o == "string") {
      const s = i(o);
      s !== o && (md(e) || (e[n] = s), o = s);
    }
    t11[o] = true;
  }
  return t11;
}
function ue(t11) {
  const e = Cd(null);
  for (const [i, r] of ba(t11))
    e[i] = r;
  return e;
}
function xi(t11, e) {
  for (; t11 !== null; ) {
    const r = yd(t11, e);
    if (r) {
      if (r.get)
        return ct(r.get);
      if (typeof r.value == "function")
        return ct(r.value);
    }
    t11 = _d(t11);
  }
  function i(r) {
    return console.warn("fallback value for", r), null;
  }
  return i;
}
var Ko = tt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
var Ur = tt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
var Yr = tt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
var kd = tt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
var Gr = tt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
var wd = tt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
var Zo = tt(["#text"]);
var Jo = tt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
var Vr = tt(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
var Qo = tt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
var bi = tt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
var Bd = mt(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
var Fd = mt(/<%[\w\W]*|[\w\W]*%>/gm);
var Ld = mt(/\${[\w\W]*}/gm);
var Ad = mt(/^data-[\-\w.\u00B7-\uFFFF]/);
var Ed = mt(/^aria-[\-\w]+$/);
var Ta = mt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
);
var Md = mt(/^(?:\w+script|data):/i);
var Od = mt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
);
var Sa = mt(/^html$/i);
var ts = Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: Bd,
  ERB_EXPR: Fd,
  TMPLIT_EXPR: Ld,
  DATA_ATTR: Ad,
  ARIA_ATTR: Ed,
  IS_ALLOWED_URI: Ta,
  IS_SCRIPT_OR_DATA: Md,
  ATTR_WHITESPACE: Od,
  DOCTYPE_NAME: Sa
});
var $d = () => typeof window > "u" ? null : window;
var Id = function(e, i) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const n = "data-tt-policy-suffix";
  i && i.hasAttribute(n) && (r = i.getAttribute(n));
  const o = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(o, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
};
function va() {
  let t11 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $d();
  const e = (S) => va(S);
  if (e.version = "3.0.3", e.removed = [], !t11 || !t11.document || t11.document.nodeType !== 9)
    return e.isSupported = false, e;
  const i = t11.document, r = i.currentScript;
  let {
    document: n
  } = t11;
  const {
    DocumentFragment: o,
    HTMLTemplateElement: s,
    Node: a,
    Element: l,
    NodeFilter: h,
    NamedNodeMap: c = t11.NamedNodeMap || t11.MozNamedAttrMap,
    HTMLFormElement: u,
    DOMParser: g,
    trustedTypes: p
  } = t11, _ = l.prototype, T = xi(_, "cloneNode"), B = xi(_, "nextSibling"), A = xi(_, "childNodes"), C = xi(_, "parentNode");
  if (typeof s == "function") {
    const S = n.createElement("template");
    S.content && S.content.ownerDocument && (n = S.content.ownerDocument);
  }
  let F, D = "";
  const {
    implementation: R,
    createNodeIterator: V,
    createDocumentFragment: O,
    getElementsByTagName: wr
  } = n, {
    importNode: Br
  } = i;
  let H = {};
  e.isSupported = typeof ba == "function" && typeof C == "function" && R && R.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: si,
    ERB_EXPR: Wt,
    TMPLIT_EXPR: ne,
    DATA_ATTR: ai,
    ARIA_ATTR: li,
    IS_SCRIPT_OR_DATA: hi,
    ATTR_WHITESPACE: nt
  } = ts;
  let {
    IS_ALLOWED_URI: ci
  } = ts, P = null;
  const io = E({}, [...Ko, ...Ur, ...Yr, ...Gr, ...Zo]);
  let j = null;
  const ro = E({}, [...Jo, ...Vr, ...Qo, ...bi]);
  let q = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  })), Ee = null, Fr = null, no = true, Lr = true, oo = false, so = true, oe = false, Ht = false, Ar = false, Er = false, se = false, ui = false, fi = false, ao = true, lo = false;
  const eh = "user-content-";
  let Mr = true, Me = false, ae = {}, le = null;
  const ho = E({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let co = null;
  const uo = E({}, ["audio", "video", "img", "source", "image", "track"]);
  let Or = null;
  const fo = E({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), di = "http://www.w3.org/1998/Math/MathML", pi = "http://www.w3.org/2000/svg", vt = "http://www.w3.org/1999/xhtml";
  let he = vt, $r = false, Ir = null;
  const ih = E({}, [di, pi, vt], jr);
  let jt;
  const rh = ["application/xhtml+xml", "text/html"], nh = "text/html";
  let U, ce = null;
  const oh = n.createElement("form"), po = function(f) {
    return f instanceof RegExp || f instanceof Function;
  }, Dr = function(f) {
    if (!(ce && ce === f)) {
      if ((!f || typeof f != "object") && (f = {}), f = ue(f), jt = // eslint-disable-next-line unicorn/prefer-includes
      rh.indexOf(f.PARSER_MEDIA_TYPE) === -1 ? jt = nh : jt = f.PARSER_MEDIA_TYPE, U = jt === "application/xhtml+xml" ? jr : Ai, P = "ALLOWED_TAGS" in f ? E({}, f.ALLOWED_TAGS, U) : io, j = "ALLOWED_ATTR" in f ? E({}, f.ALLOWED_ATTR, U) : ro, Ir = "ALLOWED_NAMESPACES" in f ? E({}, f.ALLOWED_NAMESPACES, jr) : ih, Or = "ADD_URI_SAFE_ATTR" in f ? E(
        ue(fo),
        // eslint-disable-line indent
        f.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        U
        // eslint-disable-line indent
      ) : fo, co = "ADD_DATA_URI_TAGS" in f ? E(
        ue(uo),
        // eslint-disable-line indent
        f.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        U
        // eslint-disable-line indent
      ) : uo, le = "FORBID_CONTENTS" in f ? E({}, f.FORBID_CONTENTS, U) : ho, Ee = "FORBID_TAGS" in f ? E({}, f.FORBID_TAGS, U) : {}, Fr = "FORBID_ATTR" in f ? E({}, f.FORBID_ATTR, U) : {}, ae = "USE_PROFILES" in f ? f.USE_PROFILES : false, no = f.ALLOW_ARIA_ATTR !== false, Lr = f.ALLOW_DATA_ATTR !== false, oo = f.ALLOW_UNKNOWN_PROTOCOLS || false, so = f.ALLOW_SELF_CLOSE_IN_ATTR !== false, oe = f.SAFE_FOR_TEMPLATES || false, Ht = f.WHOLE_DOCUMENT || false, se = f.RETURN_DOM || false, ui = f.RETURN_DOM_FRAGMENT || false, fi = f.RETURN_TRUSTED_TYPE || false, Er = f.FORCE_BODY || false, ao = f.SANITIZE_DOM !== false, lo = f.SANITIZE_NAMED_PROPS || false, Mr = f.KEEP_CONTENT !== false, Me = f.IN_PLACE || false, ci = f.ALLOWED_URI_REGEXP || Ta, he = f.NAMESPACE || vt, q = f.CUSTOM_ELEMENT_HANDLING || {}, f.CUSTOM_ELEMENT_HANDLING && po(f.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (q.tagNameCheck = f.CUSTOM_ELEMENT_HANDLING.tagNameCheck), f.CUSTOM_ELEMENT_HANDLING && po(f.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (q.attributeNameCheck = f.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), f.CUSTOM_ELEMENT_HANDLING && typeof f.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (q.allowCustomizedBuiltInElements = f.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), oe && (Lr = false), ui && (se = true), ae && (P = E({}, [...Zo]), j = [], ae.html === true && (E(P, Ko), E(j, Jo)), ae.svg === true && (E(P, Ur), E(j, Vr), E(j, bi)), ae.svgFilters === true && (E(P, Yr), E(j, Vr), E(j, bi)), ae.mathMl === true && (E(P, Gr), E(j, Qo), E(j, bi))), f.ADD_TAGS && (P === io && (P = ue(P)), E(P, f.ADD_TAGS, U)), f.ADD_ATTR && (j === ro && (j = ue(j)), E(j, f.ADD_ATTR, U)), f.ADD_URI_SAFE_ATTR && E(Or, f.ADD_URI_SAFE_ATTR, U), f.FORBID_CONTENTS && (le === ho && (le = ue(le)), E(le, f.FORBID_CONTENTS, U)), Mr && (P["#text"] = true), Ht && E(P, ["html", "head", "body"]), P.table && (E(P, ["tbody"]), delete Ee.tbody), f.TRUSTED_TYPES_POLICY) {
        if (typeof f.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Ie('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof f.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Ie('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        F = f.TRUSTED_TYPES_POLICY, D = F.createHTML("");
      } else
        F === void 0 && (F = Id(p, r)), F !== null && typeof D == "string" && (D = F.createHTML(""));
      tt && tt(f), ce = f;
    }
  }, go = E({}, ["mi", "mo", "mn", "ms", "mtext"]), mo = E({}, ["foreignobject", "desc", "title", "annotation-xml"]), sh = E({}, ["title", "style", "font", "a", "script"]), gi = E({}, Ur);
  E(gi, Yr), E(gi, kd);
  const Nr = E({}, Gr);
  E(Nr, wd);
  const ah = function(f) {
    let m = C(f);
    (!m || !m.tagName) && (m = {
      namespaceURI: he,
      tagName: "template"
    });
    const x = Ai(f.tagName), M = Ai(m.tagName);
    return Ir[f.namespaceURI] ? f.namespaceURI === pi ? m.namespaceURI === vt ? x === "svg" : m.namespaceURI === di ? x === "svg" && (M === "annotation-xml" || go[M]) : !!gi[x] : f.namespaceURI === di ? m.namespaceURI === vt ? x === "math" : m.namespaceURI === pi ? x === "math" && mo[M] : !!Nr[x] : f.namespaceURI === vt ? m.namespaceURI === pi && !mo[M] || m.namespaceURI === di && !go[M] ? false : !Nr[x] && (sh[x] || !gi[x]) : !!(jt === "application/xhtml+xml" && Ir[f.namespaceURI]) : false;
  }, Ut = function(f) {
    $e(e.removed, {
      element: f
    });
    try {
      f.parentNode.removeChild(f);
    } catch {
      f.remove();
    }
  }, Rr = function(f, m) {
    try {
      $e(e.removed, {
        attribute: m.getAttributeNode(f),
        from: m
      });
    } catch {
      $e(e.removed, {
        attribute: null,
        from: m
      });
    }
    if (m.removeAttribute(f), f === "is" && !j[f])
      if (se || ui)
        try {
          Ut(m);
        } catch {
        }
      else
        try {
          m.setAttribute(f, "");
        } catch {
        }
  }, _o = function(f) {
    let m, x;
    if (Er)
      f = "<remove></remove>" + f;
    else {
      const at = bd(f, /^[\r\n\t ]+/);
      x = at && at[0];
    }
    jt === "application/xhtml+xml" && he === vt && (f = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + f + "</body></html>");
    const M = F ? F.createHTML(f) : f;
    if (he === vt)
      try {
        m = new g().parseFromString(M, jt);
      } catch {
      }
    if (!m || !m.documentElement) {
      m = R.createDocument(he, "template", null);
      try {
        m.documentElement.innerHTML = $r ? D : M;
      } catch {
      }
    }
    const Y = m.body || m.documentElement;
    return f && x && Y.insertBefore(n.createTextNode(x), Y.childNodes[0] || null), he === vt ? wr.call(m, Ht ? "html" : "body")[0] : Ht ? m.documentElement : Y;
  }, yo = function(f) {
    return V.call(
      f.ownerDocument || f,
      f,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT,
      null,
      false
    );
  }, lh = function(f) {
    return f instanceof u && (typeof f.nodeName != "string" || typeof f.textContent != "string" || typeof f.removeChild != "function" || !(f.attributes instanceof c) || typeof f.removeAttribute != "function" || typeof f.setAttribute != "function" || typeof f.namespaceURI != "string" || typeof f.insertBefore != "function" || typeof f.hasChildNodes != "function");
  }, mi = function(f) {
    return typeof a == "object" ? f instanceof a : f && typeof f == "object" && typeof f.nodeType == "number" && typeof f.nodeName == "string";
  }, kt = function(f, m, x) {
    H[f] && xd(H[f], (M) => {
      M.call(e, m, x, ce);
    });
  }, Co = function(f) {
    let m;
    if (kt("beforeSanitizeElements", f, null), lh(f))
      return Ut(f), true;
    const x = U(f.nodeName);
    if (kt("uponSanitizeElement", f, {
      tagName: x,
      allowedTags: P
    }), f.hasChildNodes() && !mi(f.firstElementChild) && (!mi(f.content) || !mi(f.content.firstElementChild)) && ot(/<[/\w]/g, f.innerHTML) && ot(/<[/\w]/g, f.textContent))
      return Ut(f), true;
    if (!P[x] || Ee[x]) {
      if (!Ee[x] && bo(x) && (q.tagNameCheck instanceof RegExp && ot(q.tagNameCheck, x) || q.tagNameCheck instanceof Function && q.tagNameCheck(x)))
        return false;
      if (Mr && !le[x]) {
        const M = C(f) || f.parentNode, Y = A(f) || f.childNodes;
        if (Y && M) {
          const at = Y.length;
          for (let N = at - 1; N >= 0; --N)
            M.insertBefore(T(Y[N], true), B(f));
        }
      }
      return Ut(f), true;
    }
    return f instanceof l && !ah(f) || (x === "noscript" || x === "noembed") && ot(/<\/no(script|embed)/i, f.innerHTML) ? (Ut(f), true) : (oe && f.nodeType === 3 && (m = f.textContent, m = ft(m, si, " "), m = ft(m, Wt, " "), m = ft(m, ne, " "), f.textContent !== m && ($e(e.removed, {
      element: f.cloneNode()
    }), f.textContent = m)), kt("afterSanitizeElements", f, null), false);
  }, xo = function(f, m, x) {
    if (ao && (m === "id" || m === "name") && (x in n || x in oh))
      return false;
    if (!(Lr && !Fr[m] && ot(ai, m))) {
      if (!(no && ot(li, m))) {
        if (!j[m] || Fr[m]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(bo(f) && (q.tagNameCheck instanceof RegExp && ot(q.tagNameCheck, f) || q.tagNameCheck instanceof Function && q.tagNameCheck(f)) && (q.attributeNameCheck instanceof RegExp && ot(q.attributeNameCheck, m) || q.attributeNameCheck instanceof Function && q.attributeNameCheck(m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            m === "is" && q.allowCustomizedBuiltInElements && (q.tagNameCheck instanceof RegExp && ot(q.tagNameCheck, x) || q.tagNameCheck instanceof Function && q.tagNameCheck(x)))
          )
            return false;
        } else if (!Or[m]) {
          if (!ot(ci, ft(x, nt, ""))) {
            if (!((m === "src" || m === "xlink:href" || m === "href") && f !== "script" && Td(x, "data:") === 0 && co[f])) {
              if (!(oo && !ot(hi, ft(x, nt, "")))) {
                if (x)
                  return false;
              }
            }
          }
        }
      }
    }
    return true;
  }, bo = function(f) {
    return f.indexOf("-") > 0;
  }, To = function(f) {
    let m, x, M, Y;
    kt("beforeSanitizeAttributes", f, null);
    const {
      attributes: at
    } = f;
    if (!at)
      return;
    const N = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: j
    };
    for (Y = at.length; Y--; ) {
      m = at[Y];
      const {
        name: yt,
        namespaceURI: qr
      } = m;
      if (x = yt === "value" ? m.value : Sd(m.value), M = U(yt), N.attrName = M, N.attrValue = x, N.keepAttr = true, N.forceKeepAttr = void 0, kt("uponSanitizeAttribute", f, N), x = N.attrValue, N.forceKeepAttr || (Rr(yt, f), !N.keepAttr))
        continue;
      if (!so && ot(/\/>/i, x)) {
        Rr(yt, f);
        continue;
      }
      oe && (x = ft(x, si, " "), x = ft(x, Wt, " "), x = ft(x, ne, " "));
      const So = U(f.nodeName);
      if (xo(So, M, x)) {
        if (lo && (M === "id" || M === "name") && (Rr(yt, f), x = eh + x), F && typeof p == "object" && typeof p.getAttributeType == "function" && !qr)
          switch (p.getAttributeType(So, M)) {
            case "TrustedHTML": {
              x = F.createHTML(x);
              break;
            }
            case "TrustedScriptURL": {
              x = F.createScriptURL(x);
              break;
            }
          }
        try {
          qr ? f.setAttributeNS(qr, yt, x) : f.setAttribute(yt, x), Xo(e.removed);
        } catch {
        }
      }
    }
    kt("afterSanitizeAttributes", f, null);
  }, hh = function S(f) {
    let m;
    const x = yo(f);
    for (kt("beforeSanitizeShadowDOM", f, null); m = x.nextNode(); )
      kt("uponSanitizeShadowNode", m, null), !Co(m) && (m.content instanceof o && S(m.content), To(m));
    kt("afterSanitizeShadowDOM", f, null);
  };
  return e.sanitize = function(S) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, m, x, M, Y;
    if ($r = !S, $r && (S = "<!-->"), typeof S != "string" && !mi(S))
      if (typeof S.toString == "function") {
        if (S = S.toString(), typeof S != "string")
          throw Ie("dirty is not a string, aborting");
      } else
        throw Ie("toString is not a function");
    if (!e.isSupported)
      return S;
    if (Ar || Dr(f), e.removed = [], typeof S == "string" && (Me = false), Me) {
      if (S.nodeName) {
        const yt = U(S.nodeName);
        if (!P[yt] || Ee[yt])
          throw Ie("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (S instanceof a)
      m = _o("<!---->"), x = m.ownerDocument.importNode(S, true), x.nodeType === 1 && x.nodeName === "BODY" || x.nodeName === "HTML" ? m = x : m.appendChild(x);
    else {
      if (!se && !oe && !Ht && // eslint-disable-next-line unicorn/prefer-includes
      S.indexOf("<") === -1)
        return F && fi ? F.createHTML(S) : S;
      if (m = _o(S), !m)
        return se ? null : fi ? D : "";
    }
    m && Er && Ut(m.firstChild);
    const at = yo(Me ? S : m);
    for (; M = at.nextNode(); )
      Co(M) || (M.content instanceof o && hh(M.content), To(M));
    if (Me)
      return S;
    if (se) {
      if (ui)
        for (Y = O.call(m.ownerDocument); m.firstChild; )
          Y.appendChild(m.firstChild);
      else
        Y = m;
      return (j.shadowroot || j.shadowrootmod) && (Y = Br.call(i, Y, true)), Y;
    }
    let N = Ht ? m.outerHTML : m.innerHTML;
    return Ht && P["!doctype"] && m.ownerDocument && m.ownerDocument.doctype && m.ownerDocument.doctype.name && ot(Sa, m.ownerDocument.doctype.name) && (N = "<!DOCTYPE " + m.ownerDocument.doctype.name + `>
` + N), oe && (N = ft(N, si, " "), N = ft(N, Wt, " "), N = ft(N, ne, " ")), F && fi ? F.createHTML(N) : N;
  }, e.setConfig = function(S) {
    Dr(S), Ar = true;
  }, e.clearConfig = function() {
    ce = null, Ar = false;
  }, e.isValidAttribute = function(S, f, m) {
    ce || Dr({});
    const x = U(S), M = U(f);
    return xo(x, M, m);
  }, e.addHook = function(S, f) {
    typeof f == "function" && (H[S] = H[S] || [], $e(H[S], f));
  }, e.removeHook = function(S) {
    if (H[S])
      return Xo(H[S]);
  }, e.removeHooks = function(S) {
    H[S] && (H[S] = []);
  }, e.removeAllHooks = function() {
    H = {};
  }, e;
}
var Ki = va();
var pr = /<br\s*\/?>/gi;
var Dd = (t11) => t11 ? wa(t11).replace(/\\n/g, "#br#").split("#br#") : [""];
var ka = (t11) => Ki.sanitize(t11);
var es = (t11, e) => {
  var i;
  if (((i = e.flowchart) == null ? void 0 : i.htmlLabels) !== false) {
    const r = e.securityLevel;
    r === "antiscript" || r === "strict" ? t11 = ka(t11) : r !== "loose" && (t11 = wa(t11), t11 = t11.replace(/</g, "&lt;").replace(/>/g, "&gt;"), t11 = t11.replace(/=/g, "&equals;"), t11 = Pd(t11));
  }
  return t11;
};
var Xe = (t11, e) => t11 && (e.dompurifyConfig ? t11 = Ki.sanitize(es(t11, e), e.dompurifyConfig).toString() : t11 = Ki.sanitize(es(t11, e), {
  FORBID_TAGS: ["style"]
}).toString(), t11);
var Nd = (t11, e) => typeof t11 == "string" ? Xe(t11, e) : t11.flat().map((i) => Xe(i, e));
var Rd = (t11) => pr.test(t11);
var qd = (t11) => t11.split(pr);
var Pd = (t11) => t11.replace(/#br#/g, "<br/>");
var wa = (t11) => t11.replace(pr, "#br#");
var zd = (t11) => {
  let e = "";
  return t11 && (e = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, e = e.replaceAll(/\(/g, "\\("), e = e.replaceAll(/\)/g, "\\)")), e;
};
var Ba = (t11) => !(t11 === false || ["false", "null", "0"].includes(String(t11).trim().toLowerCase()));
var Wd = function(...t11) {
  const e = t11.filter((i) => !isNaN(i));
  return Math.max(...e);
};
var Hd = function(...t11) {
  const e = t11.filter((i) => !isNaN(i));
  return Math.min(...e);
};
var jd = function(t11) {
  let e = t11;
  if (t11.split("~").length - 1 >= 2) {
    let i = e;
    do
      e = i, i = e.replace(/~([^\s,:;]+)~/, "<$1>");
    while (i != e);
    return jd(i);
  } else
    return e;
};
var zn = {
  getRows: Dd,
  sanitizeText: Xe,
  sanitizeTextOrArray: Nd,
  hasBreaks: Rd,
  splitBreaks: qd,
  lineBreakRegex: pr,
  removeScript: ka,
  getUrl: zd,
  evaluate: Ba,
  getMax: Wd,
  getMin: Hd
};
var Ei = {
  /* CLAMP */
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: (t11) => t11 >= 255 ? 255 : t11 < 0 ? 0 : t11,
    g: (t11) => t11 >= 255 ? 255 : t11 < 0 ? 0 : t11,
    b: (t11) => t11 >= 255 ? 255 : t11 < 0 ? 0 : t11,
    h: (t11) => t11 % 360,
    s: (t11) => t11 >= 100 ? 100 : t11 < 0 ? 0 : t11,
    l: (t11) => t11 >= 100 ? 100 : t11 < 0 ? 0 : t11,
    a: (t11) => t11 >= 1 ? 1 : t11 < 0 ? 0 : t11
  },
  /* CONVERSION */
  //SOURCE: https://planetcalc.com/7779
  toLinear: (t11) => {
    const e = t11 / 255;
    return t11 > 0.03928 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92;
  },
  //SOURCE: https://gist.github.com/mjackson/5311256
  hue2rgb: (t11, e, i) => (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t11 + (e - t11) * 6 * i : i < 1 / 2 ? e : i < 2 / 3 ? t11 + (e - t11) * (2 / 3 - i) * 6 : t11),
  hsl2rgb: ({ h: t11, s: e, l: i }, r) => {
    if (!e)
      return i * 2.55;
    t11 /= 360, e /= 100, i /= 100;
    const n = i < 0.5 ? i * (1 + e) : i + e - i * e, o = 2 * i - n;
    switch (r) {
      case "r":
        return Ei.hue2rgb(o, n, t11 + 1 / 3) * 255;
      case "g":
        return Ei.hue2rgb(o, n, t11) * 255;
      case "b":
        return Ei.hue2rgb(o, n, t11 - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: t11, g: e, b: i }, r) => {
    t11 /= 255, e /= 255, i /= 255;
    const n = Math.max(t11, e, i), o = Math.min(t11, e, i), s = (n + o) / 2;
    if (r === "l")
      return s * 100;
    if (n === o)
      return 0;
    const a = n - o, l = s > 0.5 ? a / (2 - n - o) : a / (n + o);
    if (r === "s")
      return l * 100;
    switch (n) {
      case t11:
        return ((e - i) / a + (e < i ? 6 : 0)) * 60;
      case e:
        return ((i - t11) / a + 2) * 60;
      case i:
        return ((t11 - e) / a + 4) * 60;
      default:
        return -1;
    }
  }
};
var Ud = Ei;
var Yd = {
  /* API */
  clamp: (t11, e, i) => e > i ? Math.min(e, Math.max(i, t11)) : Math.min(i, Math.max(e, t11)),
  round: (t11) => Math.round(t11 * 1e10) / 1e10
};
var Gd = Yd;
var Vd = {
  /* API */
  dec2hex: (t11) => {
    const e = Math.round(t11).toString(16);
    return e.length > 1 ? e : `0${e}`;
  }
};
var Xd = Vd;
var Kd = {
  channel: Ud,
  lang: Gd,
  unit: Xd
};
var L = Kd;
var Mt = {};
for (let t11 = 0; t11 <= 255; t11++)
  Mt[t11] = L.unit.dec2hex(t11);
var X = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
var Zd = class {
  constructor() {
    this.type = X.ALL;
  }
  /* API */
  get() {
    return this.type;
  }
  set(e) {
    if (this.type && this.type !== e)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = e;
  }
  reset() {
    this.type = X.ALL;
  }
  is(e) {
    return this.type === e;
  }
};
var Jd = Zd;
var Qd = class {
  /* CONSTRUCTOR */
  constructor(e, i) {
    this.color = i, this.changed = false, this.data = e, this.type = new Jd();
  }
  /* API */
  set(e, i) {
    return this.color = i, this.changed = false, this.data = e, this.type.type = X.ALL, this;
  }
  /* HELPERS */
  _ensureHSL() {
    const e = this.data, { h: i, s: r, l: n } = e;
    i === void 0 && (e.h = L.channel.rgb2hsl(e, "h")), r === void 0 && (e.s = L.channel.rgb2hsl(e, "s")), n === void 0 && (e.l = L.channel.rgb2hsl(e, "l"));
  }
  _ensureRGB() {
    const e = this.data, { r: i, g: r, b: n } = e;
    i === void 0 && (e.r = L.channel.hsl2rgb(e, "r")), r === void 0 && (e.g = L.channel.hsl2rgb(e, "g")), n === void 0 && (e.b = L.channel.hsl2rgb(e, "b"));
  }
  /* GETTERS */
  get r() {
    const e = this.data, i = e.r;
    return !this.type.is(X.HSL) && i !== void 0 ? i : (this._ensureHSL(), L.channel.hsl2rgb(e, "r"));
  }
  get g() {
    const e = this.data, i = e.g;
    return !this.type.is(X.HSL) && i !== void 0 ? i : (this._ensureHSL(), L.channel.hsl2rgb(e, "g"));
  }
  get b() {
    const e = this.data, i = e.b;
    return !this.type.is(X.HSL) && i !== void 0 ? i : (this._ensureHSL(), L.channel.hsl2rgb(e, "b"));
  }
  get h() {
    const e = this.data, i = e.h;
    return !this.type.is(X.RGB) && i !== void 0 ? i : (this._ensureRGB(), L.channel.rgb2hsl(e, "h"));
  }
  get s() {
    const e = this.data, i = e.s;
    return !this.type.is(X.RGB) && i !== void 0 ? i : (this._ensureRGB(), L.channel.rgb2hsl(e, "s"));
  }
  get l() {
    const e = this.data, i = e.l;
    return !this.type.is(X.RGB) && i !== void 0 ? i : (this._ensureRGB(), L.channel.rgb2hsl(e, "l"));
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(e) {
    this.type.set(X.RGB), this.changed = true, this.data.r = e;
  }
  set g(e) {
    this.type.set(X.RGB), this.changed = true, this.data.g = e;
  }
  set b(e) {
    this.type.set(X.RGB), this.changed = true, this.data.b = e;
  }
  set h(e) {
    this.type.set(X.HSL), this.changed = true, this.data.h = e;
  }
  set s(e) {
    this.type.set(X.HSL), this.changed = true, this.data.s = e;
  }
  set l(e) {
    this.type.set(X.HSL), this.changed = true, this.data.l = e;
  }
  set a(e) {
    this.changed = true, this.data.a = e;
  }
};
var tp = Qd;
var ep = new tp({ r: 0, g: 0, b: 0, a: 0 }, "transparent");
var gr = ep;
var Fa = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (t11) => {
    if (t11.charCodeAt(0) !== 35)
      return;
    const e = t11.match(Fa.re);
    if (!e)
      return;
    const i = e[1], r = parseInt(i, 16), n = i.length, o = n % 4 === 0, s = n > 4, a = s ? 1 : 17, l = s ? 8 : 4, h = o ? 0 : -1, c = s ? 255 : 15;
    return gr.set({
      r: (r >> l * (h + 3) & c) * a,
      g: (r >> l * (h + 2) & c) * a,
      b: (r >> l * (h + 1) & c) * a,
      a: o ? (r & c) * a / 255 : 1
    }, t11);
  },
  stringify: (t11) => {
    const { r: e, g: i, b: r, a: n } = t11;
    return n < 1 ? `#${Mt[Math.round(e)]}${Mt[Math.round(i)]}${Mt[Math.round(r)]}${Mt[Math.round(n * 255)]}` : `#${Mt[Math.round(e)]}${Mt[Math.round(i)]}${Mt[Math.round(r)]}`;
  }
};
var ze = Fa;
var Mi = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (t11) => {
    const e = t11.match(Mi.hueRe);
    if (e) {
      const [, i, r] = e;
      switch (r) {
        case "grad":
          return L.channel.clamp.h(parseFloat(i) * 0.9);
        case "rad":
          return L.channel.clamp.h(parseFloat(i) * 180 / Math.PI);
        case "turn":
          return L.channel.clamp.h(parseFloat(i) * 360);
      }
    }
    return L.channel.clamp.h(parseFloat(t11));
  },
  /* API */
  parse: (t11) => {
    const e = t11.charCodeAt(0);
    if (e !== 104 && e !== 72)
      return;
    const i = t11.match(Mi.re);
    if (!i)
      return;
    const [, r, n, o, s, a] = i;
    return gr.set({
      h: Mi._hue2deg(r),
      s: L.channel.clamp.s(parseFloat(n)),
      l: L.channel.clamp.l(parseFloat(o)),
      a: s ? L.channel.clamp.a(a ? parseFloat(s) / 100 : parseFloat(s)) : 1
    }, t11);
  },
  stringify: (t11) => {
    const { h: e, s: i, l: r, a: n } = t11;
    return n < 1 ? `hsla(${L.lang.round(e)}, ${L.lang.round(i)}%, ${L.lang.round(r)}%, ${n})` : `hsl(${L.lang.round(e)}, ${L.lang.round(i)}%, ${L.lang.round(r)}%)`;
  }
};
var Ti = Mi;
var Oi = {
  /* VARIABLES */
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  /* API */
  parse: (t11) => {
    t11 = t11.toLowerCase();
    const e = Oi.colors[t11];
    if (e)
      return ze.parse(e);
  },
  stringify: (t11) => {
    const e = ze.stringify(t11);
    for (const i in Oi.colors)
      if (Oi.colors[i] === e)
        return i;
  }
};
var is = Oi;
var La = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (t11) => {
    const e = t11.charCodeAt(0);
    if (e !== 114 && e !== 82)
      return;
    const i = t11.match(La.re);
    if (!i)
      return;
    const [, r, n, o, s, a, l, h, c] = i;
    return gr.set({
      r: L.channel.clamp.r(n ? parseFloat(r) * 2.55 : parseFloat(r)),
      g: L.channel.clamp.g(s ? parseFloat(o) * 2.55 : parseFloat(o)),
      b: L.channel.clamp.b(l ? parseFloat(a) * 2.55 : parseFloat(a)),
      a: h ? L.channel.clamp.a(c ? parseFloat(h) / 100 : parseFloat(h)) : 1
    }, t11);
  },
  stringify: (t11) => {
    const { r: e, g: i, b: r, a: n } = t11;
    return n < 1 ? `rgba(${L.lang.round(e)}, ${L.lang.round(i)}, ${L.lang.round(r)}, ${L.lang.round(n)})` : `rgb(${L.lang.round(e)}, ${L.lang.round(i)}, ${L.lang.round(r)})`;
  }
};
var Si = La;
var ip = {
  /* VARIABLES */
  format: {
    keyword: is,
    hex: ze,
    rgb: Si,
    rgba: Si,
    hsl: Ti,
    hsla: Ti
  },
  /* API */
  parse: (t11) => {
    if (typeof t11 != "string")
      return t11;
    const e = ze.parse(t11) || Si.parse(t11) || Ti.parse(t11) || is.parse(t11);
    if (e)
      return e;
    throw new Error(`Unsupported color format: "${t11}"`);
  },
  stringify: (t11) => !t11.changed && t11.color ? t11.color : t11.type.is(X.HSL) || t11.data.r === void 0 ? Ti.stringify(t11) : t11.a < 1 || !Number.isInteger(t11.r) || !Number.isInteger(t11.g) || !Number.isInteger(t11.b) ? Si.stringify(t11) : ze.stringify(t11)
};
var Tt = ip;
var rp = (t11, e) => {
  const i = Tt.parse(t11);
  for (const r in e)
    i[r] = L.channel.clamp[r](e[r]);
  return Tt.stringify(i);
};
var Aa = rp;
var np = (t11, e, i = 0, r = 1) => {
  if (typeof t11 != "number")
    return Aa(t11, { a: e });
  const n = gr.set({
    r: L.channel.clamp.r(t11),
    g: L.channel.clamp.g(e),
    b: L.channel.clamp.b(i),
    a: L.channel.clamp.a(r)
  });
  return Tt.stringify(n);
};
var We = np;
var op = (t11) => {
  const { r: e, g: i, b: r } = Tt.parse(t11), n = 0.2126 * L.channel.toLinear(e) + 0.7152 * L.channel.toLinear(i) + 0.0722 * L.channel.toLinear(r);
  return L.lang.round(n);
};
var sp = op;
var ap = (t11) => sp(t11) >= 0.5;
var lp = ap;
var hp = (t11) => !lp(t11);
var ri = hp;
var cp = (t11, e, i) => {
  const r = Tt.parse(t11), n = r[e], o = L.channel.clamp[e](n + i);
  return n !== o && (r[e] = o), Tt.stringify(r);
};
var Ea = cp;
var up = (t11, e) => Ea(t11, "l", e);
var v = up;
var fp = (t11, e) => Ea(t11, "l", -e);
var w = fp;
var dp = (t11, e) => {
  const i = Tt.parse(t11), r = {};
  for (const n in e)
    e[n] && (r[n] = i[n] + e[n]);
  return Aa(t11, r);
};
var d = dp;
var pp = (t11, e, i = 50) => {
  const { r, g: n, b: o, a: s } = Tt.parse(t11), { r: a, g: l, b: h, a: c } = Tt.parse(e), u = i / 100, g = u * 2 - 1, p = s - c, T = ((g * p === -1 ? g : (g + p) / (1 + g * p)) + 1) / 2, B = 1 - T, A = r * T + a * B, C = n * T + l * B, F = o * T + h * B, D = s * u + c * (1 - u);
  return We(A, C, F, D);
};
var gp = pp;
var mp = (t11, e = 100) => {
  const i = Tt.parse(t11);
  return i.r = 255 - i.r, i.g = 255 - i.g, i.b = 255 - i.b, gp(i, t11, e);
};
var y = mp;
var Q = (t11, e) => e ? d(t11, { s: -40, l: 10 }) : d(t11, { s: -40, l: -10 });
var mr = "#ffffff";
var _r = "#f2f2f2";
var _p = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
  }
  updateColors() {
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || d(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || d(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || Q(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || Q(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || Q(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || Q(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || y(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || y(this.tertiaryColor), this.lineColor = this.lineColor || y(this.background), this.arrowheadColor = this.arrowheadColor || y(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? w(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || "grey", this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || w(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || y(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || v(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 }), this.darkMode)
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++)
        this["cScale" + i] = w(this["cScale" + i], 75);
    else
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++)
        this["cScale" + i] = w(this["cScale" + i], 25);
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++)
      this["cScaleInv" + i] = this["cScaleInv" + i] || y(this["cScale" + i]);
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++)
      this.darkMode ? this["cScalePeer" + i] = this["cScalePeer" + i] || v(this["cScale" + i], 10) : this["cScalePeer" + i] = this["cScalePeer" + i] || w(this["cScale" + i], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++)
      this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
    const e = this.darkMode ? -4 : -1;
    for (let i = 0; i < 5; i++)
      this["surface" + i] = this["surface" + i] || d(this.mainBkg, { h: 180, s: -15, l: e * (5 + i * 3) }), this["surfacePeer" + i] = this["surfacePeer" + i] || d(this.mainBkg, { h: 180, s: -15, l: e * (8 + i * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || d(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || d(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || d(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || d(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || d(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || d(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || d(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || d(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || d(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || d(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || d(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || d(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || d(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || d(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || d(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ri(this.quadrant1Fill) ? v(this.quadrant1Fill) : w(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? w(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || d(this.primaryColor, { h: -30 }), this.git4 = this.git4 || d(this.primaryColor, { h: -60 }), this.git5 = this.git5 || d(this.primaryColor, { h: -90 }), this.git6 = this.git6 || d(this.primaryColor, { h: 60 }), this.git7 = this.git7 || d(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = v(this.git0, 25), this.git1 = v(this.git1, 25), this.git2 = v(this.git2, 25), this.git3 = v(this.git3, 25), this.git4 = v(this.git4, 25), this.git5 = v(this.git5, 25), this.git6 = v(this.git6, 25), this.git7 = v(this.git7, 25)) : (this.git0 = w(this.git0, 25), this.git1 = w(this.git1, 25), this.git2 = w(this.git2, 25), this.git3 = w(this.git3, 25), this.git4 = w(this.git4, 25), this.git5 = w(this.git5, 25), this.git6 = w(this.git6, 25), this.git7 = w(this.git7, 25)), this.gitInv0 = this.gitInv0 || y(this.git0), this.gitInv1 = this.gitInv1 || y(this.git1), this.gitInv2 = this.gitInv2 || y(this.git2), this.gitInv3 = this.gitInv3 || y(this.git3), this.gitInv4 = this.gitInv4 || y(this.git4), this.gitInv5 = this.gitInv5 || y(this.git5), this.gitInv6 = this.gitInv6 || y(this.git6), this.gitInv7 = this.gitInv7 || y(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || mr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || _r;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var yp = (t11) => {
  const e = new _p();
  return e.calculate(t11), e;
};
var Cp = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = v(this.primaryColor, 16), this.tertiaryColor = d(this.primaryColor, { h: -160 }), this.primaryBorderColor = y(this.background), this.secondaryBorderColor = Q(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Q(this.tertiaryColor, this.darkMode), this.primaryTextColor = y(this.primaryColor), this.secondaryTextColor = y(this.secondaryColor), this.tertiaryTextColor = y(this.tertiaryColor), this.lineColor = y(this.background), this.textColor = y(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = v(y("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#81B1DB", this.border2 = We(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = w("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = w(this.sectionBkgColor, 10), this.taskBorderColor = We(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = We(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
  }
  updateColors() {
    this.secondBkg = v(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = v(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.mainContrastColor, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = v(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = d(this.primaryColor, { h: 64 }), this.fillType3 = d(this.secondaryColor, { h: 64 }), this.fillType4 = d(this.primaryColor, { h: -64 }), this.fillType5 = d(this.secondaryColor, { h: -64 }), this.fillType6 = d(this.primaryColor, { h: 128 }), this.fillType7 = d(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 });
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || y(this["cScale" + e]);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScalePeer" + e] = this["cScalePeer" + e] || v(this["cScale" + e], 10);
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || d(this.mainBkg, { h: 30, s: -30, l: -(-10 + e * 4) }), this["surfacePeer" + e] = this["surfacePeer" + e] || d(this.mainBkg, { h: 30, s: -30, l: -(-7 + e * 4) });
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["pie" + e] = this["cScale" + e];
    this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ri(this.quadrant1Fill) ? v(this.quadrant1Fill) : w(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? w(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = v(this.secondaryColor, 20), this.git1 = v(this.pie2 || this.secondaryColor, 20), this.git2 = v(this.pie3 || this.tertiaryColor, 20), this.git3 = v(this.pie4 || d(this.primaryColor, { h: -30 }), 20), this.git4 = v(this.pie5 || d(this.primaryColor, { h: -60 }), 20), this.git5 = v(this.pie6 || d(this.primaryColor, { h: -90 }), 10), this.git6 = v(this.pie7 || d(this.primaryColor, { h: 60 }), 10), this.git7 = v(this.pie8 || d(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || y(this.git0), this.gitInv1 = this.gitInv1 || y(this.git1), this.gitInv2 = this.gitInv2 || y(this.git2), this.gitInv3 = this.gitInv3 || y(this.git3), this.gitInv4 = this.gitInv4 || y(this.git4), this.gitInv5 = this.gitInv5 || y(this.git5), this.gitInv6 = this.gitInv6 || y(this.git6), this.gitInv7 = this.gitInv7 || y(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || y(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || y(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || v(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || v(this.background, 2);
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var xp = (t11) => {
  const e = new Cp();
  return e.calculate(t11), e;
};
var bp = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = d(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = d(this.primaryColor, { h: -160 }), this.primaryBorderColor = Q(this.primaryColor, this.darkMode), this.secondaryBorderColor = Q(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Q(this.tertiaryColor, this.darkMode), this.primaryTextColor = y(this.primaryColor), this.secondaryTextColor = y(this.secondaryColor), this.tertiaryTextColor = y(this.tertiaryColor), this.lineColor = y(this.background), this.textColor = y(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#e8e8e8", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.sectionBkgColor = We(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
  }
  updateColors() {
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 }), this["cScalePeer1"] = this["cScalePeer1"] || w(this.secondaryColor, 45), this["cScalePeer2"] = this["cScalePeer2"] || w(this.tertiaryColor, 40);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScale" + e] = w(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || w(this["cScale" + e], 25);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || d(this["cScale" + e], { h: 180 });
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || d(this.mainBkg, { h: 30, l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || d(this.mainBkg, { h: 30, l: -(7 + e * 5) });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || y(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || y(this.labelTextColor);
      for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
        this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = v(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = d(this.primaryColor, { h: 64 }), this.fillType3 = d(this.secondaryColor, { h: 64 }), this.fillType4 = d(this.primaryColor, { h: -64 }), this.fillType5 = d(this.secondaryColor, { h: -64 }), this.fillType6 = d(this.primaryColor, { h: 128 }), this.fillType7 = d(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || d(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || d(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || d(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || d(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || d(this.primaryColor, { h: 60, l: -20 }), this.pie8 = this.pie8 || d(this.primaryColor, { h: -60, l: -40 }), this.pie9 = this.pie9 || d(this.primaryColor, { h: 120, l: -40 }), this.pie10 = this.pie10 || d(this.primaryColor, { h: 60, l: -40 }), this.pie11 = this.pie11 || d(this.primaryColor, { h: -90, l: -40 }), this.pie12 = this.pie12 || d(this.primaryColor, { h: 120, l: -30 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ri(this.quadrant1Fill) ? v(this.quadrant1Fill) : w(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || d(this.primaryColor, { h: -30 }), this.git4 = this.git4 || d(this.primaryColor, { h: -60 }), this.git5 = this.git5 || d(this.primaryColor, { h: -90 }), this.git6 = this.git6 || d(this.primaryColor, { h: 60 }), this.git7 = this.git7 || d(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = v(this.git0, 25), this.git1 = v(this.git1, 25), this.git2 = v(this.git2, 25), this.git3 = v(this.git3, 25), this.git4 = v(this.git4, 25), this.git5 = v(this.git5, 25), this.git6 = v(this.git6, 25), this.git7 = v(this.git7, 25)) : (this.git0 = w(this.git0, 25), this.git1 = w(this.git1, 25), this.git2 = w(this.git2, 25), this.git3 = w(this.git3, 25), this.git4 = w(this.git4, 25), this.git5 = w(this.git5, 25), this.git6 = w(this.git6, 25), this.git7 = w(this.git7, 25)), this.gitInv0 = this.gitInv0 || w(y(this.git0), 25), this.gitInv1 = this.gitInv1 || y(this.git1), this.gitInv2 = this.gitInv2 || y(this.git2), this.gitInv3 = this.gitInv3 || y(this.git3), this.gitInv4 = this.gitInv4 || y(this.git4), this.gitInv5 = this.gitInv5 || y(this.git5), this.gitInv6 = this.gitInv6 || y(this.git6), this.gitInv7 = this.gitInv7 || y(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || y(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || y(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || mr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || _r;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var Tp = (t11) => {
  const e = new bp();
  return e.calculate(t11), e;
};
var Sp = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = v("#cde498", 10), this.primaryBorderColor = Q(this.primaryColor, this.darkMode), this.secondaryBorderColor = Q(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Q(this.tertiaryColor, this.darkMode), this.primaryTextColor = y(this.primaryColor), this.secondaryTextColor = y(this.secondaryColor), this.tertiaryTextColor = y(this.primaryColor), this.lineColor = y(this.background), this.textColor = y(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    this.actorBorder = w(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 }), this["cScalePeer1"] = this["cScalePeer1"] || w(this.secondaryColor, 45), this["cScalePeer2"] = this["cScalePeer2"] || w(this.tertiaryColor, 40);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScale" + e] = w(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || w(this["cScale" + e], 25);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || d(this["cScale" + e], { h: 180 });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || d(this.mainBkg, { h: 30, s: -30, l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || d(this.mainBkg, { h: 30, s: -30, l: -(8 + e * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = d(this.primaryColor, { h: 64 }), this.fillType3 = d(this.secondaryColor, { h: 64 }), this.fillType4 = d(this.primaryColor, { h: -64 }), this.fillType5 = d(this.secondaryColor, { h: -64 }), this.fillType6 = d(this.primaryColor, { h: 128 }), this.fillType7 = d(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || d(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || d(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || d(this.tertiaryColor, { h: 40, l: -40 }), this.pie7 = this.pie7 || d(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || d(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || d(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || d(this.primaryColor, { h: 60, l: -50 }), this.pie11 = this.pie11 || d(this.primaryColor, { h: -60, l: -50 }), this.pie12 = this.pie12 || d(this.primaryColor, { h: 120, l: -50 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ri(this.quadrant1Fill) ? v(this.quadrant1Fill) : w(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || d(this.primaryColor, { h: -30 }), this.git4 = this.git4 || d(this.primaryColor, { h: -60 }), this.git5 = this.git5 || d(this.primaryColor, { h: -90 }), this.git6 = this.git6 || d(this.primaryColor, { h: 60 }), this.git7 = this.git7 || d(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = v(this.git0, 25), this.git1 = v(this.git1, 25), this.git2 = v(this.git2, 25), this.git3 = v(this.git3, 25), this.git4 = v(this.git4, 25), this.git5 = v(this.git5, 25), this.git6 = v(this.git6, 25), this.git7 = v(this.git7, 25)) : (this.git0 = w(this.git0, 25), this.git1 = w(this.git1, 25), this.git2 = w(this.git2, 25), this.git3 = w(this.git3, 25), this.git4 = w(this.git4, 25), this.git5 = w(this.git5, 25), this.git6 = w(this.git6, 25), this.git7 = w(this.git7, 25)), this.gitInv0 = this.gitInv0 || y(this.git0), this.gitInv1 = this.gitInv1 || y(this.git1), this.gitInv2 = this.gitInv2 || y(this.git2), this.gitInv3 = this.gitInv3 || y(this.git3), this.gitInv4 = this.gitInv4 || y(this.git4), this.gitInv5 = this.gitInv5 || y(this.git5), this.gitInv6 = this.gitInv6 || y(this.git6), this.gitInv7 = this.gitInv7 || y(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || y(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || y(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || mr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || _r;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var vp = (t11) => {
  const e = new Sp();
  return e.calculate(t11), e;
};
var kp = class {
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = v(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = d(this.primaryColor, { h: -160 }), this.primaryBorderColor = Q(this.primaryColor, this.darkMode), this.secondaryBorderColor = Q(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Q(this.tertiaryColor, this.darkMode), this.primaryTextColor = y(this.primaryColor), this.secondaryTextColor = y(this.secondaryColor), this.tertiaryTextColor = y(this.tertiaryColor), this.lineColor = y(this.background), this.textColor = y(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    this.secondBkg = v(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = v(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.lineColor, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || y(this["cScale" + e]);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this.darkMode ? this["cScalePeer" + e] = this["cScalePeer" + e] || v(this["cScale" + e], 10) : this["cScalePeer" + e] = this["cScalePeer" + e] || w(this["cScale" + e], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || d(this.mainBkg, { l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || d(this.mainBkg, { l: -(8 + e * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = v(this.contrast, 30), this.sectionBkgColor2 = v(this.contrast, 30), this.taskBorderColor = w(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = v(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = w(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = d(this.primaryColor, { h: 64 }), this.fillType3 = d(this.secondaryColor, { h: 64 }), this.fillType4 = d(this.primaryColor, { h: -64 }), this.fillType5 = d(this.secondaryColor, { h: -64 }), this.fillType6 = d(this.primaryColor, { h: 128 }), this.fillType7 = d(this.secondaryColor, { h: 128 });
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["pie" + e] = this["cScale" + e];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ri(this.quadrant1Fill) ? v(this.quadrant1Fill) : w(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = w(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || d(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || d(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || d(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || d(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || d(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || y(this.git0), this.gitInv1 = this.gitInv1 || y(this.git1), this.gitInv2 = this.gitInv2 || y(this.git2), this.gitInv3 = this.gitInv3 || y(this.git3), this.gitInv4 = this.gitInv4 || y(this.git4), this.gitInv5 = this.gitInv5 || y(this.git5), this.gitInv6 = this.gitInv6 || y(this.git6), this.gitInv7 = this.gitInv7 || y(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || mr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || _r;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var wp = (t11) => {
  const e = new kp();
  return e.calculate(t11), e;
};
var Lt = {
  base: {
    getThemeVariables: yp
  },
  dark: {
    getThemeVariables: xp
  },
  default: {
    getThemeVariables: Tp
  },
  forest: {
    getThemeVariables: vp
  },
  neutral: {
    getThemeVariables: wp
  }
};
var Nt = {
  /**
   * Theme , the CSS style sheet
   *
   * | Parameter | Description     | Type   | Required | Values                                         |
   * | --------- | --------------- | ------ | -------- | ---------------------------------------------- |
   * | theme     | Built in Themes | string | Optional | 'default', 'forest', 'dark', 'neutral', 'null' |
   *
   * **Notes:** To disable any pre-defined mermaid theme, use "null".
   *
   * @example
   *
   * ```js
   * {
   *   "theme": "forest",
   *   "themeCSS": ".node rect { fill: red; }"
   * }
   * ```
   */
  theme: "default",
  themeVariables: Lt.default.getThemeVariables(),
  themeCSS: void 0,
  /* **maxTextSize** - The maximum allowed size of the users text diagram */
  maxTextSize: 5e4,
  darkMode: false,
  /**
   * | Parameter  | Description                                            | Type   | Required | Values                      |
   * | ---------- | ------------------------------------------------------ | ------ | -------- | --------------------------- |
   * | fontFamily | specifies the font to be used in the rendered diagrams | string | Required | Any Possible CSS FontFamily |
   *
   * **Notes:** Default value: '"trebuchet ms", verdana, arial, sans-serif;'.
   */
  fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
  /**
   * | Parameter | Description                                           | Type             | Required | Values                                        |
   * | --------- | ----------------------------------------------------- | ---------------- | -------- | --------------------------------------------- |
   * | logLevel  | This option decides the amount of logging to be used. | string \| number | Required | 'trace','debug','info','warn','error','fatal' |
   *
   * **Notes:**
   *
   * - Trace: 0
   * - Debug: 1
   * - Info: 2
   * - Warn: 3
   * - Error: 4
   * - Fatal: 5 (default)
   */
  logLevel: 5,
  /**
   * | Parameter     | Description                       | Type   | Required | Values                                     |
   * | ------------- | --------------------------------- | ------ | -------- | ------------------------------------------ |
   * | securityLevel | Level of trust for parsed diagram | string | Required | 'sandbox', 'strict', 'loose', 'antiscript' |
   *
   * **Notes**:
   *
   * - **strict**: (**default**) HTML tags in the text are encoded and click functionality is disabled.
   * - **antiscript**: HTML tags in text are allowed (only script elements are removed), and click
   *   functionality is enabled.
   * - **loose**: HTML tags in text are allowed and click functionality is enabled.
   * - **sandbox**: With this security level, all rendering takes place in a sandboxed iframe. This
   *   prevent any JavaScript from running in the context. This may hinder interactive functionality
   *   of the diagram, like scripts, popups in the sequence diagram, links to other tabs or targets, etc.
   */
  securityLevel: "strict",
  /**
   * | Parameter   | Description                                  | Type    | Required | Values      |
   * | ----------- | -------------------------------------------- | ------- | -------- | ----------- |
   * | startOnLoad | Dictates whether mermaid starts on Page load | boolean | Required | true, false |
   *
   * **Notes:** Default value: true
   */
  startOnLoad: true,
  /**
   * | Parameter           | Description                                                                  | Type    | Required | Values      |
   * | ------------------- | ---------------------------------------------------------------------------- | ------- | -------- | ----------- |
   * | arrowMarkerAbsolute | Controls whether or arrow markers in html code are absolute paths or anchors | boolean | Required | true, false |
   *
   * **Notes**:
   *
   * This matters if you are using base tag settings.
   *
   * Default value: false
   */
  arrowMarkerAbsolute: false,
  /**
   * This option controls which currentConfig keys are considered _secure_ and can only be changed
   * via call to mermaidAPI.initialize. Calls to mermaidAPI.reinitialize cannot make changes to the
   * `secure` keys in the current currentConfig. This prevents malicious graph directives from
   * overriding a site's default security.
   *
   * **Notes**:
   *
   * Default value: ['secure', 'securityLevel', 'startOnLoad', 'maxTextSize']
   */
  secure: ["secure", "securityLevel", "startOnLoad", "maxTextSize"],
  /**
   * This option controls if the generated ids of nodes in the SVG are generated randomly or based
   * on a seed. If set to false, the IDs are generated based on the current date and thus are not
   * deterministic. This is the default behavior.
   *
   * **Notes**:
   *
   * This matters if your files are checked into source control e.g. git and should not change unless
   * content is changed.
   *
   * Default value: false
   */
  deterministicIds: false,
  /**
   * This option is the optional seed for deterministic ids. if set to undefined but
   * deterministicIds is true, a simple number iterator is used. You can set this attribute to base
   * the seed on a static string.
   */
  deterministicIDSeed: void 0,
  /** The object containing configurations specific for flowcharts */
  flowchart: {
    /**
     * ### titleTopMargin
     *
     * | Parameter      | Description                                    | Type    | Required | Values             |
     * | -------------- | ---------------------------------------------- | ------- | -------- | ------------------ |
     * | titleTopMargin | Margin top for the text over the flowchart     | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 25
     */
    titleTopMargin: 25,
    /**
     * | Parameter      | Description                                     | Type    | Required | Values             |
     * | -------------- | ----------------------------------------------- | ------- | -------- | ------------------ |
     * | diagramPadding | Amount of padding around the diagram as a whole | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     *
     * The amount of padding around the diagram as a whole so that embedded diagrams have margins,
     * expressed in pixels
     *
     * Default value: 8
     */
    diagramPadding: 8,
    /**
     * | Parameter  | Description                                                                                  | Type    | Required | Values      |
     * | ---------- | -------------------------------------------------------------------------------------------- | ------- | -------- | ----------- |
     * | htmlLabels | Flag for setting whether or not a html tag should be used for rendering labels on the edges. | boolean | Required | true, false |
     *
     * **Notes:** Default value: true.
     */
    htmlLabels: true,
    /**
     * | Parameter   | Description                                         | Type    | Required | Values              |
     * | ----------- | --------------------------------------------------- | ------- | -------- | ------------------- |
     * | nodeSpacing | Defines the spacing between nodes on the same level | Integer | Required | Any positive Number |
     *
     * **Notes:**
     *
     * Pertains to horizontal spacing for TB (top to bottom) or BT (bottom to top) graphs, and the
     * vertical spacing for LR as well as RL graphs.**
     *
     * Default value: 50
     */
    nodeSpacing: 50,
    /**
     * | Parameter   | Description                                           | Type    | Required | Values              |
     * | ----------- | ----------------------------------------------------- | ------- | -------- | ------------------- |
     * | rankSpacing | Defines the spacing between nodes on different levels | Integer | Required | Any Positive Number |
     *
     * **Notes**:
     *
     * Pertains to vertical spacing for TB (top to bottom) or BT (bottom to top), and the horizontal
     * spacing for LR as well as RL graphs.
     *
     * Default value 50
     */
    rankSpacing: 50,
    /**
     * | Parameter | Description                                        | Type   | Required | Values                        |
     * | --------- | -------------------------------------------------- | ------ | -------- | ----------------------------- |
     * | curve     | Defines how mermaid renders curves for flowcharts. | string | Required | 'basis', 'linear', 'cardinal' |
     *
     * **Notes:**
     *
     * Default Value: 'basis'
     */
    curve: "basis",
    // Only used in new experimental rendering
    // represents the padding between the labels and the shape
    padding: 15,
    /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See notes   | boolean | 4        | true, false |
     *
     * **Notes:**
     *
     * When this flag is set the height and width is set to 100% and is then scaling with the
     * available space if not the absolute space required is used.
     *
     * Default value: true
     */
    useMaxWidth: true,
    /**
     * | Parameter       | Description | Type    | Required | Values                  |
     * | --------------- | ----------- | ------- | -------- | ----------------------- |
     * | defaultRenderer | See notes   | boolean | 4        | dagre-d3, dagre-wrapper, elk |
     *
     * **Notes:**
     *
     * Decides which rendering engine that is to be used for the rendering. Legal values are:
     * dagre-d3 dagre-wrapper - wrapper for dagre implemented in mermaid, elk for layout using
     * elkjs
     *
     * Default value: 'dagre-wrapper'
     */
    defaultRenderer: "dagre-wrapper",
    /**
     * | Parameter       | Description | Type    | Required | Values                  |
     * | --------------- | ----------- | ------- | -------- | ----------------------- |
     * | wrappingWidth   | See notes   | number  | 4        | width of nodes where text is wrapped |
     *
     * **Notes:**
     *
     * When using markdown strings the text ius wrapped automatically, this
     * value sets the max width of a text before it continues on a new line.
     * Default value: 'dagre-wrapper'
     */
    wrappingWidth: 200
  },
  /** The object containing configurations specific for sequence diagrams */
  sequence: {
    hideUnusedParticipants: false,
    /**
     * | Parameter       | Description                  | Type    | Required | Values             |
     * | --------------- | ---------------------------- | ------- | -------- | ------------------ |
     * | activationWidth | Width of the activation rect | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value :10
     */
    activationWidth: 10,
    /**
     * | Parameter      | Description                                          | Type    | Required | Values             |
     * | -------------- | ---------------------------------------------------- | ------- | -------- | ------------------ |
     * | diagramMarginX | Margin to the right and left of the sequence diagram | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 50
     */
    diagramMarginX: 50,
    /**
     * | Parameter      | Description                                       | Type    | Required | Values             |
     * | -------------- | ------------------------------------------------- | ------- | -------- | ------------------ |
     * | diagramMarginY | Margin to the over and under the sequence diagram | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */
    diagramMarginY: 10,
    /**
     * | Parameter   | Description           | Type    | Required | Values             |
     * | ----------- | --------------------- | ------- | -------- | ------------------ |
     * | actorMargin | Margin between actors | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 50
     */
    actorMargin: 50,
    /**
     * | Parameter | Description          | Type    | Required | Values             |
     * | --------- | -------------------- | ------- | -------- | ------------------ |
     * | width     | Width of actor boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 150
     */
    width: 150,
    /**
     * | Parameter | Description           | Type    | Required | Values             |
     * | --------- | --------------------- | ------- | -------- | ------------------ |
     * | height    | Height of actor boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 65
     */
    height: 65,
    /**
     * | Parameter | Description              | Type    | Required | Values             |
     * | --------- | ------------------------ | ------- | -------- | ------------------ |
     * | boxMargin | Margin around loop boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */
    boxMargin: 10,
    /**
     * | Parameter     | Description                                  | Type    | Required | Values             |
     * | ------------- | -------------------------------------------- | ------- | -------- | ------------------ |
     * | boxTextMargin | Margin around the text in loop/alt/opt boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 5
     */
    boxTextMargin: 5,
    /**
     * | Parameter  | Description         | Type    | Required | Values             |
     * | ---------- | ------------------- | ------- | -------- | ------------------ |
     * | noteMargin | margin around notes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */
    noteMargin: 10,
    /**
     * | Parameter     | Description            | Type    | Required | Values             |
     * | ------------- | ---------------------- | ------- | -------- | ------------------ |
     * | messageMargin | Space between messages | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 35
     */
    messageMargin: 35,
    /**
     * | Parameter    | Description                 | Type   | Required | Values                    |
     * | ------------ | --------------------------- | ------ | -------- | ------------------------- |
     * | messageAlign | Multiline message alignment | string | Required | 'left', 'center', 'right' |
     *
     * **Notes:** Default value: 'center'
     */
    messageAlign: "center",
    /**
     * | Parameter    | Description                 | Type    | Required | Values      |
     * | ------------ | --------------------------- | ------- | -------- | ----------- |
     * | mirrorActors | Mirror actors under diagram | boolean | Required | true, false |
     *
     * **Notes:** Default value: true
     */
    mirrorActors: true,
    /**
     * | Parameter  | Description                                                             | Type    | Required | Values      |
     * | ---------- | ----------------------------------------------------------------------- | ------- | -------- | ----------- |
     * | forceMenus | forces actor popup menus to always be visible (to support E2E testing). | Boolean | Required | True, False |
     *
     * **Notes:**
     *
     * Default value: false.
     */
    forceMenus: false,
    /**
     * | Parameter       | Description                                | Type    | Required | Values             |
     * | --------------- | ------------------------------------------ | ------- | -------- | ------------------ |
     * | bottomMarginAdj | Prolongs the edge of the diagram downwards | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     *
     * Depending on css styling this might need adjustment.
     *
     * Default value: 1
     */
    bottomMarginAdj: 1,
    /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See Notes   | boolean | Required | true, false |
     *
     * **Notes:** When this flag is set to true, the height and width is set to 100% and is then
     * scaling with the available space. If set to false, the absolute space required is used.
     *
     * Default value: true
     */
    useMaxWidth: true,
    /**
     * | Parameter   | Description                          | Type    | Required | Values      |
     * | ----------- | ------------------------------------ | ------- | -------- | ----------- |
     * | rightAngles | display curve arrows as right angles | boolean | Required | true, false |
     *
     * **Notes:**
     *
     * This will display arrows that start and begin at the same node as right angles, rather than a
     * curve
     *
     * Default value: false
     */
    rightAngles: false,
    /**
     * | Parameter           | Description                     | Type    | Required | Values      |
     * | ------------------- | ------------------------------- | ------- | -------- | ----------- |
     * | showSequenceNumbers | This will show the node numbers | boolean | Required | true, false |
     *
     * **Notes:** Default value: false
     */
    showSequenceNumbers: false,
    /**
     * | Parameter     | Description                                        | Type    | Required | Values             |
     * | ------------- | -------------------------------------------------- | ------- | -------- | ------------------ |
     * | actorFontSize | This sets the font size of the actor's description | Integer | Require  | Any Positive Value |
     *
     * **Notes:** **Default value 14**..
     */
    actorFontSize: 14,
    /**
     * | Parameter       | Description                                          | Type   | Required | Values                      |
     * | --------------- | ---------------------------------------------------- | ------ | -------- | --------------------------- |
     * | actorFontFamily | This sets the font family of the actor's description | string | Required | Any Possible CSS FontFamily |
     *
     * **Notes:** Default value: "'Open Sans", sans-serif'
     */
    actorFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of the actor's description
     *
     * **Notes:** Default value: 400.
     */
    actorFontWeight: 400,
    /**
     * | Parameter    | Description                                     | Type    | Required | Values             |
     * | ------------ | ----------------------------------------------- | ------- | -------- | ------------------ |
     * | noteFontSize | This sets the font size of actor-attached notes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 14
     */
    noteFontSize: 14,
    /**
     * | Parameter      | Description                                        | Type   | Required | Values                      |
     * | -------------- | -------------------------------------------------- | ------ | -------- | --------------------------- |
     * | noteFontFamily | This sets the font family of actor-attached notes. | string | Required | Any Possible CSS FontFamily |
     *
     * **Notes:** Default value: ''"trebuchet ms", verdana, arial, sans-serif'
     */
    noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    /**
     * This sets the font weight of the note's description
     *
     * **Notes:** Default value: 400
     */
    noteFontWeight: 400,
    /**
     * | Parameter | Description                                          | Type   | Required | Values                    |
     * | --------- | ---------------------------------------------------- | ------ | -------- | ------------------------- |
     * | noteAlign | This sets the text alignment of actor-attached notes | string | required | 'left', 'center', 'right' |
     *
     * **Notes:** Default value: 'center'
     */
    noteAlign: "center",
    /**
     * | Parameter       | Description                               | Type    | Required | Values              |
     * | --------------- | ----------------------------------------- | ------- | -------- | ------------------- |
     * | messageFontSize | This sets the font size of actor messages | Integer | Required | Any Positive Number |
     *
     * **Notes:** Default value: 16
     */
    messageFontSize: 16,
    /**
     * | Parameter         | Description                                 | Type   | Required | Values                      |
     * | ----------------- | ------------------------------------------- | ------ | -------- | --------------------------- |
     * | messageFontFamily | This sets the font family of actor messages | string | Required | Any Possible CSS FontFamily |
     *
     * **Notes:** Default value: '"trebuchet ms", verdana, arial, sans-serif'
     */
    messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    /**
     * This sets the font weight of the message's description
     *
     * **Notes:** Default value: 400.
     */
    messageFontWeight: 400,
    /**
     * This sets the auto-wrap state for the diagram
     *
     * **Notes:** Default value: false.
     */
    wrap: false,
    /**
     * This sets the auto-wrap padding for the diagram (sides only)
     *
     * **Notes:** Default value: 0.
     */
    wrapPadding: 10,
    /**
     * This sets the width of the loop-box (loop, alt, opt, par)
     *
     * **Notes:** Default value: 50.
     */
    labelBoxWidth: 50,
    /**
     * This sets the height of the loop-box (loop, alt, opt, par)
     *
     * **Notes:** Default value: 20.
     */
    labelBoxHeight: 20,
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    },
    noteFont: function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    },
    actorFont: function() {
      return {
        fontFamily: this.actorFontFamily,
        fontSize: this.actorFontSize,
        fontWeight: this.actorFontWeight
      };
    }
  },
  /** The object containing configurations specific for gantt diagrams */
  gantt: {
    /**
     * ### titleTopMargin
     *
     * | Parameter      | Description                                    | Type    | Required | Values             |
     * | -------------- | ---------------------------------------------- | ------- | -------- | ------------------ |
     * | titleTopMargin | Margin top for the text over the gantt diagram | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 25
     */
    titleTopMargin: 25,
    /**
     * | Parameter | Description                         | Type    | Required | Values             |
     * | --------- | ----------------------------------- | ------- | -------- | ------------------ |
     * | barHeight | The height of the bars in the graph | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 20
     */
    barHeight: 20,
    /**
     * | Parameter | Description                                                      | Type    | Required | Values             |
     * | --------- | ---------------------------------------------------------------- | ------- | -------- | ------------------ |
     * | barGap    | The margin between the different activities in the gantt diagram | Integer | Optional | Any Positive Value |
     *
     * **Notes:** Default value: 4
     */
    barGap: 4,
    /**
     * | Parameter  | Description                                                                | Type    | Required | Values             |
     * | ---------- | -------------------------------------------------------------------------- | ------- | -------- | ------------------ |
     * | topPadding | Margin between title and gantt diagram and between axis and gantt diagram. | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 50
     */
    topPadding: 50,
    /**
     * | Parameter    | Description                                                             | Type    | Required | Values             |
     * | ------------ | ----------------------------------------------------------------------- | ------- | -------- | ------------------ |
     * | rightPadding | The space allocated for the section name to the right of the activities | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 75
     */
    rightPadding: 75,
    /**
     * | Parameter   | Description                                                            | Type    | Required | Values             |
     * | ----------- | ---------------------------------------------------------------------- | ------- | -------- | ------------------ |
     * | leftPadding | The space allocated for the section name to the left of the activities | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 75
     */
    leftPadding: 75,
    /**
     * | Parameter            | Description                                  | Type    | Required | Values             |
     * | -------------------- | -------------------------------------------- | ------- | -------- | ------------------ |
     * | gridLineStartPadding | Vertical starting position of the grid lines | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 35
     */
    gridLineStartPadding: 35,
    /**
     * | Parameter | Description | Type    | Required | Values             |
     * | --------- | ----------- | ------- | -------- | ------------------ |
     * | fontSize  | Font size   | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 11
     */
    fontSize: 11,
    /**
     * | Parameter       | Description            | Type    | Required | Values             |
     * | --------------- | ---------------------- | ------- | -------- | ------------------ |
     * | sectionFontSize | Font size for sections | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 11
     */
    sectionFontSize: 11,
    /**
     * | Parameter           | Description                              | Type    | Required | Values             |
     * | ------------------- | ---------------------------------------- | ------- | -------- | ------------------ |
     * | numberSectionStyles | The number of alternating section styles | Integer | 4        | Any Positive Value |
     *
     * **Notes:** Default value: 4
     */
    numberSectionStyles: 4,
    /**
     * | Parameter   | Description               | Type   | Required | Values    |
     * | ----------- | ------------------------- | ------ | -------- | --------- |
     * | displayMode | Controls the display mode | string | 4        | 'compact' |
     *
     * **Notes**:
     *
     * - **compact**: Enables displaying multiple tasks on the same row.
     */
    displayMode: "",
    /**
     * | Parameter  | Description                  | Type | Required | Values           |
     * | ---------- | ---------------------------- | ---- | -------- | ---------------- |
     * | axisFormat | Date/time format of the axis | 3    | Required | Date in yy-mm-dd |
     *
     * **Notes:**
     *
     * This might need adjustment to match your locale and preferences
     *
     * Default value: '%Y-%m-%d'.
     */
    axisFormat: "%Y-%m-%d",
    /**
     * | Parameter    | Description | Type   | Required | Values  |
     * | ------------ | ------------| ------ | -------- | ------- |
     * | tickInterval | axis ticks  | string | Optional | string  |
     *
     * **Notes:**
     *
     * Pattern is /^([1-9][0-9]*)(minute|hour|day|week|month)$/
     *
     * Default value: undefined
     */
    tickInterval: void 0,
    /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See notes   | boolean | 4        | true, false |
     *
     * **Notes:**
     *
     * When this flag is set the height and width is set to 100% and is then scaling with the
     * available space if not the absolute space required is used.
     *
     * Default value: true
     */
    useMaxWidth: true,
    /**
     * | Parameter | Description | Type    | Required | Values      |
     * | --------- | ----------- | ------- | -------- | ----------- |
     * | topAxis   | See notes   | Boolean | 4        | True, False |
     *
     * **Notes:** when this flag is set date labels will be added to the top of the chart
     *
     * **Default value false**.
     */
    topAxis: false,
    useWidth: void 0
  },
  /** The object containing configurations specific for journey diagrams */
  journey: {
    /**
     * | Parameter      | Description                                          | Type    | Required | Values             |
     * | -------------- | ---------------------------------------------------- | ------- | -------- | ------------------ |
     * | diagramMarginX | Margin to the right and left of the sequence diagram | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 50
     */
    diagramMarginX: 50,
    /**
     * | Parameter      | Description                                        | Type    | Required | Values             |
     * | -------------- | -------------------------------------------------- | ------- | -------- | ------------------ |
     * | diagramMarginY | Margin to the over and under the sequence diagram. | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */
    diagramMarginY: 10,
    /**
     * | Parameter   | Description           | Type    | Required | Values             |
     * | ----------- | --------------------- | ------- | -------- | ------------------ |
     * | actorMargin | Margin between actors | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 50
     */
    leftMargin: 150,
    /**
     * | Parameter | Description          | Type    | Required | Values             |
     * | --------- | -------------------- | ------- | -------- | ------------------ |
     * | width     | Width of actor boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 150
     */
    width: 150,
    /**
     * | Parameter | Description           | Type    | Required | Values             |
     * | --------- | --------------------- | ------- | -------- | ------------------ |
     * | height    | Height of actor boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 65
     */
    height: 50,
    /**
     * | Parameter | Description              | Type    | Required | Values             |
     * | --------- | ------------------------ | ------- | -------- | ------------------ |
     * | boxMargin | Margin around loop boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */
    boxMargin: 10,
    /**
     * | Parameter     | Description                                  | Type    | Required | Values             |
     * | ------------- | -------------------------------------------- | ------- | -------- | ------------------ |
     * | boxTextMargin | Margin around the text in loop/alt/opt boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 5
     */
    boxTextMargin: 5,
    /**
     * | Parameter  | Description         | Type    | Required | Values             |
     * | ---------- | ------------------- | ------- | -------- | ------------------ |
     * | noteMargin | Margin around notes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */
    noteMargin: 10,
    /**
     * | Parameter     | Description             | Type    | Required | Values             |
     * | ------------- | ----------------------- | ------- | -------- | ------------------ |
     * | messageMargin | Space between messages. | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     *
     * Space between messages.
     *
     * Default value: 35
     */
    messageMargin: 35,
    /**
     * | Parameter    | Description                 | Type | Required | Values                    |
     * | ------------ | --------------------------- | ---- | -------- | ------------------------- |
     * | messageAlign | Multiline message alignment | 3    | 4        | 'left', 'center', 'right' |
     *
     * **Notes:** Default value: 'center'
     */
    messageAlign: "center",
    /**
     * | Parameter       | Description                                | Type    | Required | Values             |
     * | --------------- | ------------------------------------------ | ------- | -------- | ------------------ |
     * | bottomMarginAdj | Prolongs the edge of the diagram downwards | Integer | 4        | Any Positive Value |
     *
     * **Notes:**
     *
     * Depending on css styling this might need adjustment.
     *
     * Default value: 1
     */
    bottomMarginAdj: 1,
    /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See notes   | boolean | 4        | true, false |
     *
     * **Notes:**
     *
     * When this flag is set the height and width is set to 100% and is then scaling with the
     * available space if not the absolute space required is used.
     *
     * Default value: true
     */
    useMaxWidth: true,
    /**
     * | Parameter   | Description                       | Type | Required | Values      |
     * | ----------- | --------------------------------- | ---- | -------- | ----------- |
     * | rightAngles | Curved Arrows become Right Angles | 3    | 4        | true, false |
     *
     * **Notes:**
     *
     * This will display arrows that start and begin at the same node as right angles, rather than a
     * curves
     *
     * Default value: false
     */
    rightAngles: false,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    // width of activation box
    activationWidth: 10,
    // text placement as: tspan | fo | old only text as before
    textPlacement: "fo",
    actorColours: ["#8FBC8F", "#7CFC00", "#00FFFF", "#20B2AA", "#B0E0E6", "#FFFFE0"],
    sectionFills: ["#191970", "#8B008B", "#4B0082", "#2F4F4F", "#800000", "#8B4513", "#00008B"],
    sectionColours: ["#fff"]
  },
  /** The object containing configurations specific for timeline diagrams */
  timeline: {
    /**
     * | Parameter      | Description                                          | Type    | Required | Values             |
     * | -------------- | ---------------------------------------------------- | ------- | -------- | ------------------ |
     * | diagramMarginX | Margin to the right and left of the sequence diagram | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 50
     */
    diagramMarginX: 50,
    /**
     * | Parameter      | Description                                        | Type    | Required | Values             |
     * | -------------- | -------------------------------------------------- | ------- | -------- | ------------------ |
     * | diagramMarginY | Margin to the over and under the sequence diagram. | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */
    diagramMarginY: 10,
    /**
     * | Parameter   | Description           | Type    | Required | Values             |
     * | ----------- | --------------------- | ------- | -------- | ------------------ |
     * | actorMargin | Margin between actors | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 50
     */
    leftMargin: 150,
    /**
     * | Parameter | Description          | Type    | Required | Values             |
     * | --------- | -------------------- | ------- | -------- | ------------------ |
     * | width     | Width of actor boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 150
     */
    width: 150,
    /**
     * | Parameter | Description           | Type    | Required | Values             |
     * | --------- | --------------------- | ------- | -------- | ------------------ |
     * | height    | Height of actor boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 65
     */
    height: 50,
    /**
     * | Parameter | Description              | Type    | Required | Values             |
     * | --------- | ------------------------ | ------- | -------- | ------------------ |
     * | boxMargin | Margin around loop boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */
    boxMargin: 10,
    /**
     * | Parameter     | Description                                  | Type    | Required | Values             |
     * | ------------- | -------------------------------------------- | ------- | -------- | ------------------ |
     * | boxTextMargin | Margin around the text in loop/alt/opt boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 5
     */
    boxTextMargin: 5,
    /**
     * | Parameter  | Description         | Type    | Required | Values             |
     * | ---------- | ------------------- | ------- | -------- | ------------------ |
     * | noteMargin | Margin around notes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */
    noteMargin: 10,
    /**
     * | Parameter     | Description             | Type    | Required | Values             |
     * | ------------- | ----------------------- | ------- | -------- | ------------------ |
     * | messageMargin | Space between messages. | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     *
     * Space between messages.
     *
     * Default value: 35
     */
    messageMargin: 35,
    /**
     * | Parameter    | Description                 | Type | Required | Values                    |
     * | ------------ | --------------------------- | ---- | -------- | ------------------------- |
     * | messageAlign | Multiline message alignment | 3    | 4        | 'left', 'center', 'right' |
     *
     * **Notes:** Default value: 'center'
     */
    messageAlign: "center",
    /**
     * | Parameter       | Description                                | Type    | Required | Values             |
     * | --------------- | ------------------------------------------ | ------- | -------- | ------------------ |
     * | bottomMarginAdj | Prolongs the edge of the diagram downwards | Integer | 4        | Any Positive Value |
     *
     * **Notes:**
     *
     * Depending on css styling this might need adjustment.
     *
     * Default value: 1
     */
    bottomMarginAdj: 1,
    /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See notes   | boolean | 4        | true, false |
     *
     * **Notes:**
     *
     * When this flag is set the height and width is set to 100% and is then scaling with the
     * available space if not the absolute space required is used.
     *
     * Default value: true
     */
    useMaxWidth: true,
    /**
     * | Parameter   | Description                       | Type | Required | Values      |
     * | ----------- | --------------------------------- | ---- | -------- | ----------- |
     * | rightAngles | Curved Arrows become Right Angles | 3    | 4        | true, false |
     *
     * **Notes:**
     *
     * This will display arrows that start and begin at the same node as right angles, rather than a
     * curves
     *
     * Default value: false
     */
    rightAngles: false,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    // width of activation box
    activationWidth: 10,
    // text placement as: tspan | fo | old only text as before
    textPlacement: "fo",
    actorColours: ["#8FBC8F", "#7CFC00", "#00FFFF", "#20B2AA", "#B0E0E6", "#FFFFE0"],
    sectionFills: ["#191970", "#8B008B", "#4B0082", "#2F4F4F", "#800000", "#8B4513", "#00008B"],
    sectionColours: ["#fff"],
    disableMulticolor: false
  },
  class: {
    /**
     * ### titleTopMargin
     *
     * | Parameter      | Description                                    | Type    | Required | Values             |
     * | -------------- | ---------------------------------------------- | ------- | -------- | ------------------ |
     * | titleTopMargin | Margin top for the text over the class diagram | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 25
     */
    titleTopMargin: 25,
    arrowMarkerAbsolute: false,
    dividerMargin: 10,
    padding: 5,
    textHeight: 10,
    /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See notes   | boolean | 4        | true, false |
     *
     * **Notes:**
     *
     * When this flag is set the height and width is set to 100% and is then scaling with the
     * available space if not the absolute space required is used.
     *
     * Default value: true
     */
    useMaxWidth: true,
    /**
     * | Parameter       | Description | Type    | Required | Values                  |
     * | --------------- | ----------- | ------- | -------- | ----------------------- |
     * | defaultRenderer | See notes   | boolean | 4        | dagre-d3, dagre-wrapper |
     *
     * **Notes**:
     *
     * Decides which rendering engine that is to be used for the rendering. Legal values are:
     * dagre-d3 dagre-wrapper - wrapper for dagre implemented in mermaid
     *
     * Default value: 'dagre-d3'
     */
    defaultRenderer: "dagre-wrapper"
  },
  state: {
    /**
     * ### titleTopMargin
     *
     * | Parameter      | Description                                    | Type    | Required | Values             |
     * | -------------- | ---------------------------------------------- | ------- | -------- | ------------------ |
     * | titleTopMargin | Margin top for the text over the state diagram | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 25
     */
    titleTopMargin: 25,
    dividerMargin: 10,
    sizeUnit: 5,
    padding: 8,
    textHeight: 10,
    titleShift: -15,
    noteMargin: 10,
    forkWidth: 70,
    forkHeight: 7,
    // Used
    miniPadding: 2,
    // Font size factor, this is used to guess the width of the edges labels before rendering by dagre
    // layout. This might need updating if/when switching font
    fontSizeFactor: 5.02,
    fontSize: 24,
    labelHeight: 16,
    edgeLengthFactor: "20",
    compositTitleSize: 35,
    radius: 5,
    /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See notes   | boolean | 4        | true, false |
     *
     * **Notes:**
     *
     * When this flag is set the height and width is set to 100% and is then scaling with the
     * available space if not the absolute space required is used.
     *
     * Default value: true
     */
    useMaxWidth: true,
    /**
     * | Parameter       | Description | Type    | Required | Values                  |
     * | --------------- | ----------- | ------- | -------- | ----------------------- |
     * | defaultRenderer | See notes   | boolean | 4        | dagre-d3, dagre-wrapper |
     *
     * **Notes:**
     *
     * Decides which rendering engine that is to be used for the rendering. Legal values are:
     * dagre-d3 dagre-wrapper - wrapper for dagre implemented in mermaid
     *
     * Default value: 'dagre-d3'
     */
    defaultRenderer: "dagre-wrapper"
  },
  /** The object containing configurations specific for entity relationship diagrams */
  er: {
    /**
     * ### titleTopMargin
     *
     * | Parameter      | Description                                    | Type    | Required | Values             |
     * | -------------- | ---------------------------------------------- | ------- | -------- | ------------------ |
     * | titleTopMargin | Margin top for the text over the diagram       | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 25
     */
    titleTopMargin: 25,
    /**
     * | Parameter      | Description                                     | Type    | Required | Values             |
     * | -------------- | ----------------------------------------------- | ------- | -------- | ------------------ |
     * | diagramPadding | Amount of padding around the diagram as a whole | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     *
     * The amount of padding around the diagram as a whole so that embedded diagrams have margins,
     * expressed in pixels
     *
     * Default value: 20
     */
    diagramPadding: 20,
    /**
     * | Parameter       | Description                              | Type   | Required | Values                 |
     * | --------------- | ---------------------------------------- | ------ | -------- | ---------------------- |
     * | layoutDirection | Directional bias for layout of entities. | string | Required | "TB", "BT", "LR", "RL" |
     *
     * **Notes:**
     *
     * 'TB' for Top-Bottom, 'BT'for Bottom-Top, 'LR' for Left-Right, or 'RL' for Right to Left.
     *
     * T = top, B = bottom, L = left, and R = right.
     *
     * Default value: 'TB'
     */
    layoutDirection: "TB",
    /**
     * | Parameter      | Description                        | Type    | Required | Values             |
     * | -------------- | ---------------------------------- | ------- | -------- | ------------------ |
     * | minEntityWidth | The minimum width of an entity box | Integer | Required | Any Positive Value |
     *
     * **Notes:** Expressed in pixels. Default value: 100
     */
    minEntityWidth: 100,
    /**
     * | Parameter       | Description                         | Type    | Required | Values             |
     * | --------------- | ----------------------------------- | ------- | -------- | ------------------ |
     * | minEntityHeight | The minimum height of an entity box | Integer | 4        | Any Positive Value |
     *
     * **Notes:** Expressed in pixels Default value: 75
     */
    minEntityHeight: 75,
    /**
     * | Parameter     | Description                                                  | Type    | Required | Values             |
     * | ------------- | ------------------------------------------------------------ | ------- | -------- | ------------------ |
     * | entityPadding | Minimum internal padding between text in box and box borders | Integer | 4        | Any Positive Value |
     *
     * **Notes:**
     *
     * The minimum internal padding between text in an entity box and the enclosing box borders,
     * expressed in pixels.
     *
     * Default value: 15
     */
    entityPadding: 15,
    /**
     * | Parameter | Description                         | Type   | Required | Values               |
     * | --------- | ----------------------------------- | ------ | -------- | -------------------- |
     * | stroke    | Stroke color of box edges and lines | string | 4        | Any recognized color |
     *
     * **Notes:** Default value: 'gray'
     */
    stroke: "gray",
    /**
     * | Parameter | Description                | Type   | Required | Values               |
     * | --------- | -------------------------- | ------ | -------- | -------------------- |
     * | fill      | Fill color of entity boxes | string | 4        | Any recognized color |
     *
     * **Notes:** Default value: 'honeydew'
     */
    fill: "honeydew",
    /**
     * | Parameter | Description         | Type    | Required | Values             |
     * | --------- | ------------------- | ------- | -------- | ------------------ |
     * | fontSize  | Font Size in pixels | Integer |          | Any Positive Value |
     *
     * **Notes:**
     *
     * Font size (expressed as an integer representing a number of pixels) Default value: 12
     */
    fontSize: 12,
    /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See Notes   | boolean | Required | true, false |
     *
     * **Notes:**
     *
     * When this flag is set to true, the diagram width is locked to 100% and scaled based on
     * available space. If set to false, the diagram reserves its absolute width.
     *
     * Default value: true
     */
    useMaxWidth: true
  },
  /** The object containing configurations specific for pie diagrams */
  pie: {
    useWidth: void 0,
    /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See Notes   | boolean | Required | true, false |
     *
     * **Notes:**
     *
     * When this flag is set to true, the diagram width is locked to 100% and scaled based on
     * available space. If set to false, the diagram reserves its absolute width.
     *
     * Default value: true
     */
    useMaxWidth: true,
    /**
     * | Parameter    | Description                                                                      | Type    | Required | Values              |
     * | ------------ | -------------------------------------------------------------------------------- | ------- | -------- | ------------------- |
     * | textPosition | Axial position of slice's label from zero at the center to 1 at the outside edge | Number  | Optional | Decimal from 0 to 1 |
     *
     * **Notes:** Default value: 0.75
     */
    textPosition: 0.75
  },
  quadrantChart: {
    /**
     * | Parameter       | Description                        | Type    | Required | Values              |
     * | --------------- | ---------------------------------- | ------- | -------- | ------------------- |
     * | chartWidth      | Width of the chart                 | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 500
     */
    chartWidth: 500,
    /**
     * | Parameter       | Description                        | Type    | Required | Values              |
     * | --------------- | ---------------------------------- | ------- | -------- | ------------------- |
     * | chartHeight     | Height of the chart                | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 500
     */
    chartHeight: 500,
    /**
     * | Parameter          | Description                        | Type    | Required | Values              |
     * | ------------------ | ---------------------------------- | ------- | -------- | ------------------- |
     * | titlePadding       | Chart title top and bottom padding | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 10
     */
    titlePadding: 10,
    /**
     * | Parameter          | Description                        | Type    | Required | Values              |
     * | ------------------ | ---------------------------------- | ------- | -------- | ------------------- |
     * | titleFontSize      | Chart title font size              | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 20
     */
    titleFontSize: 20,
    /**
     * | Parameter       | Description                        | Type    | Required | Values              |
     * | --------------- | ---------------------------------- | ------- | -------- | ------------------- |
     * | quadrantPadding | Padding around the quadrant square | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 5
     */
    quadrantPadding: 5,
    /**
     * | Parameter              | Description                                                                | Type    | Required | Values              |
     * | ---------------------- | -------------------------------------------------------------------------- | ------- | -------- | ------------------- |
     * | quadrantTextTopPadding | quadrant title padding from top if the quadrant is rendered on top         | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 5
     */
    quadrantTextTopPadding: 5,
    /**
     * | Parameter             | Description                        | Type    | Required | Values              |
     * | ------------------    | ---------------------------------- | ------- | -------- | ------------------- |
     * | quadrantLabelFontSize | quadrant title font size           | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 16
     */
    quadrantLabelFontSize: 16,
    /**
     * | Parameter                         | Description                                                   | Type    | Required | Values              |
     * | --------------------------------- | ------------------------------------------------------------- | ------- | -------- | ------------------- |
     * | quadrantInternalBorderStrokeWidth | stroke width of edges of the box that are inside the quadrant | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 1
     */
    quadrantInternalBorderStrokeWidth: 1,
    /**
     * | Parameter                         | Description                                                    | Type    | Required | Values              |
     * | --------------------------------- | -------------------------------------------------------------- | ------- | -------- | ------------------- |
     * | quadrantExternalBorderStrokeWidth | stroke width of edges of the box that are outside the quadrant | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 2
     */
    quadrantExternalBorderStrokeWidth: 2,
    /**
     * | Parameter         | Description                        | Type    | Required | Values              |
     * | ---------------   | ---------------------------------- | ------- | -------- | ------------------- |
     * | xAxisLabelPadding | Padding around x-axis labels       | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 5
     */
    xAxisLabelPadding: 5,
    /**
     * | Parameter          | Description                        | Type    | Required | Values              |
     * | ------------------ | ---------------------------------- | ------- | -------- | ------------------- |
     * | xAxisLabelFontSize | x-axis label font size             | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 16
     */
    xAxisLabelFontSize: 16,
    /**
     * | Parameter     | Description                     | Type    | Required | Values              |
     * | ------------- | ------------------------------- | ------- | -------- | ------------------- |
     * | xAxisPosition | position of x-axis labels       | string  | Optional | 'top' or 'bottom'   |
     *
     * **Notes:**
     * Default value: top
     */
    xAxisPosition: "top",
    /**
     * | Parameter         | Description                        | Type    | Required | Values              |
     * | ---------------   | ---------------------------------- | ------- | -------- | ------------------- |
     * | yAxisLabelPadding | Padding around y-axis labels       | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 5
     */
    yAxisLabelPadding: 5,
    /**
     * | Parameter          | Description                        | Type    | Required | Values              |
     * | ------------------ | ---------------------------------- | ------- | -------- | ------------------- |
     * | yAxisLabelFontSize | y-axis label font size             | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 16
     */
    yAxisLabelFontSize: 16,
    /**
     * | Parameter     | Description                     | Type    | Required | Values              |
     * | ------------- | ------------------------------- | ------- | -------- | ------------------- |
     * | yAxisPosition | position of y-axis labels       | string  | Optional | 'left' or 'right'   |
     *
     * **Notes:**
     * Default value: left
     */
    yAxisPosition: "left",
    /**
     * | Parameter              | Description                            | Type    | Required | Values              |
     * | ---------------------- | -------------------------------------- | ------- | -------- | ------------------- |
     * | pointTextPadding       | padding between point and point label  | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 5
     */
    pointTextPadding: 5,
    /**
     * | Parameter              | Description            | Type    | Required | Values              |
     * | ---------------------- | ---------------------- | ------- | -------- | ------------------- |
     * | pointTextPadding       | point title font size  | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 12
     */
    pointLabelFontSize: 12,
    /**
     * | Parameter     | Description                     | Type    | Required | Values              |
     * | ------------- | ------------------------------- | ------- | -------- | ------------------- |
     * | pointRadius   | radius of the point to be drawn | number  | Optional | Any positive number |
     *
     * **Notes:**
     * Default value: 5
     */
    pointRadius: 5,
    /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See Notes   | boolean | Required | true, false |
     *
     * **Notes:**
     *
     * When this flag is set to true, the diagram width is locked to 100% and scaled based on
     * available space. If set to false, the diagram reserves its absolute width.
     *
     * Default value: true
     */
    useMaxWidth: true
  },
  /** The object containing configurations specific for req diagrams */
  requirement: {
    useWidth: void 0,
    /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See Notes   | boolean | Required | true, false |
     *
     * **Notes:**
     *
     * When this flag is set to true, the diagram width is locked to 100% and scaled based on
     * available space. If set to false, the diagram reserves its absolute width.
     *
     * Default value: true
     */
    useMaxWidth: true,
    rect_fill: "#f9f9f9",
    text_color: "#333",
    rect_border_size: "0.5px",
    rect_border_color: "#bbb",
    rect_min_width: 200,
    rect_min_height: 200,
    fontSize: 14,
    rect_padding: 10,
    line_height: 20
  },
  gitGraph: {
    /**
     * ### titleTopMargin
     *
     * | Parameter      | Description                                    | Type    | Required | Values             |
     * | -------------- | ---------------------------------------------- | ------- | -------- | ------------------ |
     * | titleTopMargin | Margin top for the text over the Git diagram   | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 25
     */
    titleTopMargin: 25,
    diagramPadding: 8,
    nodeLabel: {
      width: 75,
      height: 100,
      x: -25,
      y: 0
    },
    mainBranchName: "main",
    mainBranchOrder: 0,
    showCommitLabel: true,
    showBranches: true,
    rotateCommitLabel: true
  },
  /** The object containing configurations specific for c4 diagrams */
  c4: {
    useWidth: void 0,
    /**
     * | Parameter      | Description                                    | Type    | Required | Values             |
     * | -------------- | ---------------------------------------------- | ------- | -------- | ------------------ |
     * | diagramMarginX | Margin to the right and left of the c4 diagram | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 50
     */
    diagramMarginX: 50,
    /**
     * | Parameter      | Description                                 | Type    | Required | Values             |
     * | -------------- | ------------------------------------------- | ------- | -------- | ------------------ |
     * | diagramMarginY | Margin to the over and under the c4 diagram | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */
    diagramMarginY: 10,
    /**
     * | Parameter     | Description           | Type    | Required | Values             |
     * | ------------- | --------------------- | ------- | -------- | ------------------ |
     * | c4ShapeMargin | Margin between shapes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 50
     */
    c4ShapeMargin: 50,
    /**
     * | Parameter      | Description            | Type    | Required | Values             |
     * | -------------- | ---------------------- | ------- | -------- | ------------------ |
     * | c4ShapePadding | Padding between shapes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 20
     */
    c4ShapePadding: 20,
    /**
     * | Parameter | Description           | Type    | Required | Values             |
     * | --------- | --------------------- | ------- | -------- | ------------------ |
     * | width     | Width of person boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 216
     */
    width: 216,
    /**
     * | Parameter | Description            | Type    | Required | Values             |
     * | --------- | ---------------------- | ------- | -------- | ------------------ |
     * | height    | Height of person boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 60
     */
    height: 60,
    /**
     * | Parameter | Description         | Type    | Required | Values             |
     * | --------- | ------------------- | ------- | -------- | ------------------ |
     * | boxMargin | Margin around boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:** Default value: 10
     */
    boxMargin: 10,
    /**
     * | Parameter   | Description | Type    | Required | Values      |
     * | ----------- | ----------- | ------- | -------- | ----------- |
     * | useMaxWidth | See Notes   | boolean | Required | true, false |
     *
     * **Notes:** When this flag is set to true, the height and width is set to 100% and is then
     * scaling with the available space. If set to false, the absolute space required is used.
     *
     * Default value: true
     */
    useMaxWidth: true,
    /**
     * | Parameter    | Description | Type    | Required | Values             |
     * | ------------ | ----------- | ------- | -------- | ------------------ |
     * | c4ShapeInRow | See Notes   | Integer | Required | Any Positive Value |
     *
     * **Notes:** How many shapes to place in each row.
     *
     * Default value: 4
     */
    c4ShapeInRow: 4,
    nextLinePaddingX: 0,
    /**
     * | Parameter       | Description | Type    | Required | Values             |
     * | --------------- | ----------- | ------- | -------- | ------------------ |
     * | c4BoundaryInRow | See Notes   | Integer | Required | Any Positive Value |
     *
     * **Notes:** How many boundaries to place in each row.
     *
     * Default value: 2
     */
    c4BoundaryInRow: 2,
    /**
     * This sets the font size of Person shape for the diagram
     *
     * **Notes:** Default value: 14.
     */
    personFontSize: 14,
    /**
     * This sets the font family of Person shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    personFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of Person shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    personFontWeight: "normal",
    /**
     * This sets the font size of External Person shape for the diagram
     *
     * **Notes:** Default value: 14.
     */
    external_personFontSize: 14,
    /**
     * This sets the font family of External Person shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    external_personFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of External Person shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    external_personFontWeight: "normal",
    /**
     * This sets the font size of System shape for the diagram
     *
     * **Notes:** Default value: 14.
     */
    systemFontSize: 14,
    /**
     * This sets the font family of System shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    systemFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of System shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    systemFontWeight: "normal",
    /**
     * This sets the font size of External System shape for the diagram
     *
     * **Notes:** Default value: 14.
     */
    external_systemFontSize: 14,
    /**
     * This sets the font family of External System shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    external_systemFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of External System shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    external_systemFontWeight: "normal",
    /**
     * This sets the font size of System DB shape for the diagram
     *
     * **Notes:** Default value: 14.
     */
    system_dbFontSize: 14,
    /**
     * This sets the font family of System DB shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    system_dbFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of System DB shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    system_dbFontWeight: "normal",
    /**
     * This sets the font size of External System DB shape for the diagram
     *
     * **Notes:** Default value: 14.
     */
    external_system_dbFontSize: 14,
    /**
     * This sets the font family of External System DB shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    external_system_dbFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of External System DB shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    external_system_dbFontWeight: "normal",
    /**
     * This sets the font size of System Queue shape for the diagram
     *
     * **Notes:** Default value: 14.
     */
    system_queueFontSize: 14,
    /**
     * This sets the font family of System Queue shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    system_queueFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of System Queue shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    system_queueFontWeight: "normal",
    /**
     * This sets the font size of External System Queue shape for the diagram
     *
     * **Notes:** Default value: 14.
     */
    external_system_queueFontSize: 14,
    /**
     * This sets the font family of External System Queue shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    external_system_queueFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of External System Queue shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    external_system_queueFontWeight: "normal",
    /**
     * This sets the font size of Boundary shape for the diagram
     *
     * **Notes:** Default value: 14.
     */
    boundaryFontSize: 14,
    /**
     * This sets the font family of Boundary shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    boundaryFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of Boundary shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    boundaryFontWeight: "normal",
    /**
     * This sets the font size of Message shape for the diagram
     *
     * **Notes:** Default value: 12.
     */
    messageFontSize: 12,
    /**
     * This sets the font family of Message shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    messageFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of Message shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    messageFontWeight: "normal",
    /**
     * This sets the font size of Container shape for the diagram
     *
     * **Notes:** Default value: 14.
     */
    containerFontSize: 14,
    /**
     * This sets the font family of Container shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    containerFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of Container shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    containerFontWeight: "normal",
    /**
     * This sets the font size of External Container shape for the diagram
     *
     * **Notes:** Default value: 14.
     */
    external_containerFontSize: 14,
    /**
     * This sets the font family of External Container shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    external_containerFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of External Container shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    external_containerFontWeight: "normal",
    /**
     * This sets the font size of Container DB shape for the diagram
     *
     * **Notes:** Default value: 14.
     */
    container_dbFontSize: 14,
    /**
     * This sets the font family of Container DB shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    container_dbFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of Container DB shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    container_dbFontWeight: "normal",
    /**
     * This sets the font size of External Container DB shape for the diagram
     *
     * **Notes:** Default value: 14.
     */
    external_container_dbFontSize: 14,
    /**
     * This sets the font family of External Container DB shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    external_container_dbFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of External Container DB shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    external_container_dbFontWeight: "normal",
    /**
     * This sets the font size of Container Queue shape for the diagram
     *
     * **Notes:** Default value: 14.
     */
    container_queueFontSize: 14,
    /**
     * This sets the font family of Container Queue shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    container_queueFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of Container Queue shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    container_queueFontWeight: "normal",
    /**
     * This sets the font size of External Container Queue shape for the diagram
     *
     * **Notes:** Default value: 14.
     */
    external_container_queueFontSize: 14,
    /**
     * This sets the font family of External Container Queue shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    external_container_queueFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of External Container Queue shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    external_container_queueFontWeight: "normal",
    /**
     * This sets the font size of Component shape for the diagram
     *
     * **Notes:** Default value: 14.
     */
    componentFontSize: 14,
    /**
     * This sets the font family of Component shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    componentFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of Component shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    componentFontWeight: "normal",
    /**
     * This sets the font size of External Component shape for the diagram
     *
     * **Notes:** Default value: 14.
     */
    external_componentFontSize: 14,
    /**
     * This sets the font family of External Component shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    external_componentFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of External Component shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    external_componentFontWeight: "normal",
    /**
     * This sets the font size of Component DB shape for the diagram
     *
     * **Notes:** Default value: 14.
     */
    component_dbFontSize: 14,
    /**
     * This sets the font family of Component DB shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    component_dbFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of Component DB shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    component_dbFontWeight: "normal",
    /**
     * This sets the font size of External Component DB shape for the diagram
     *
     * **Notes:** Default value: 14.
     */
    external_component_dbFontSize: 14,
    /**
     * This sets the font family of External Component DB shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    external_component_dbFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of External Component DB shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    external_component_dbFontWeight: "normal",
    /**
     * This sets the font size of Component Queue shape for the diagram
     *
     * **Notes:** Default value: 14.
     */
    component_queueFontSize: 14,
    /**
     * This sets the font family of Component Queue shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    component_queueFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of Component Queue shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    component_queueFontWeight: "normal",
    /**
     * This sets the font size of External Component Queue shape for the diagram
     *
     * **Notes:** Default value: 14.
     */
    external_component_queueFontSize: 14,
    /**
     * This sets the font family of External Component Queue shape for the diagram
     *
     * **Notes:** Default value: "Open Sans", sans-serif.
     */
    external_component_queueFontFamily: '"Open Sans", sans-serif',
    /**
     * This sets the font weight of External Component Queue shape for the diagram
     *
     * **Notes:** Default value: normal.
     */
    external_component_queueFontWeight: "normal",
    /**
     * This sets the auto-wrap state for the diagram
     *
     * **Notes:** Default value: true.
     */
    wrap: true,
    /**
     * This sets the auto-wrap padding for the diagram (sides only)
     *
     * **Notes:** Default value: 0.
     */
    wrapPadding: 10,
    personFont: function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    },
    external_personFont: function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    },
    systemFont: function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    },
    external_systemFont: function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    },
    system_dbFont: function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    },
    external_system_dbFont: function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    },
    system_queueFont: function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    },
    external_system_queueFont: function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    },
    containerFont: function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    },
    external_containerFont: function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    },
    container_dbFont: function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    },
    external_container_dbFont: function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    },
    container_queueFont: function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    },
    external_container_queueFont: function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    },
    componentFont: function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    },
    external_componentFont: function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    },
    component_dbFont: function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    },
    external_component_dbFont: function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    },
    component_queueFont: function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    },
    external_component_queueFont: function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    },
    boundaryFont: function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    },
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    },
    // ' Colors
    // ' ##################################
    person_bg_color: "#08427B",
    person_border_color: "#073B6F",
    external_person_bg_color: "#686868",
    external_person_border_color: "#8A8A8A",
    system_bg_color: "#1168BD",
    system_border_color: "#3C7FC0",
    system_db_bg_color: "#1168BD",
    system_db_border_color: "#3C7FC0",
    system_queue_bg_color: "#1168BD",
    system_queue_border_color: "#3C7FC0",
    external_system_bg_color: "#999999",
    external_system_border_color: "#8A8A8A",
    external_system_db_bg_color: "#999999",
    external_system_db_border_color: "#8A8A8A",
    external_system_queue_bg_color: "#999999",
    external_system_queue_border_color: "#8A8A8A",
    container_bg_color: "#438DD5",
    container_border_color: "#3C7FC0",
    container_db_bg_color: "#438DD5",
    container_db_border_color: "#3C7FC0",
    container_queue_bg_color: "#438DD5",
    container_queue_border_color: "#3C7FC0",
    external_container_bg_color: "#B3B3B3",
    external_container_border_color: "#A6A6A6",
    external_container_db_bg_color: "#B3B3B3",
    external_container_db_border_color: "#A6A6A6",
    external_container_queue_bg_color: "#B3B3B3",
    external_container_queue_border_color: "#A6A6A6",
    component_bg_color: "#85BBF0",
    component_border_color: "#78A8D8",
    component_db_bg_color: "#85BBF0",
    component_db_border_color: "#78A8D8",
    component_queue_bg_color: "#85BBF0",
    component_queue_border_color: "#78A8D8",
    external_component_bg_color: "#CCCCCC",
    external_component_border_color: "#BFBFBF",
    external_component_db_bg_color: "#CCCCCC",
    external_component_db_border_color: "#BFBFBF",
    external_component_queue_bg_color: "#CCCCCC",
    external_component_queue_border_color: "#BFBFBF"
  },
  mindmap: {
    useMaxWidth: true,
    padding: 10,
    maxNodeWidth: 200
  },
  fontSize: 16
};
Nt.class && (Nt.class.arrowMarkerAbsolute = Nt.arrowMarkerAbsolute);
Nt.gitGraph && (Nt.gitGraph.arrowMarkerAbsolute = Nt.arrowMarkerAbsolute);
var Ma = (t11, e = "") => Object.keys(t11).reduce((i, r) => Array.isArray(t11[r]) ? i : typeof t11[r] == "object" && t11[r] !== null ? [...i, e + r, ...Ma(t11[r], "")] : [...i, e + r], []);
var Bp = Ma(Nt, "");
var Fp = Nt;
function Oa(t11) {
  return typeof t11 > "u" || t11 === null;
}
function Lp(t11) {
  return typeof t11 == "object" && t11 !== null;
}
function Ap(t11) {
  return Array.isArray(t11) ? t11 : Oa(t11) ? [] : [t11];
}
function Ep(t11, e) {
  var i, r, n, o;
  if (e)
    for (o = Object.keys(e), i = 0, r = o.length; i < r; i += 1)
      n = o[i], t11[n] = e[n];
  return t11;
}
function Mp(t11, e) {
  var i = "", r;
  for (r = 0; r < e; r += 1)
    i += t11;
  return i;
}
function Op(t11) {
  return t11 === 0 && Number.NEGATIVE_INFINITY === 1 / t11;
}
var $p = Oa;
var Ip = Lp;
var Dp = Ap;
var Np = Mp;
var Rp = Op;
var qp = Ep;
var J = {
  isNothing: $p,
  isObject: Ip,
  toArray: Dp,
  repeat: Np,
  isNegativeZero: Rp,
  extend: qp
};
function $a(t11, e) {
  var i = "", r = t11.reason || "(unknown reason)";
  return t11.mark ? (t11.mark.name && (i += 'in "' + t11.mark.name + '" '), i += "(" + (t11.mark.line + 1) + ":" + (t11.mark.column + 1) + ")", !e && t11.mark.snippet && (i += `

` + t11.mark.snippet), r + " " + i) : r;
}
function Ke(t11, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t11, this.mark = e, this.message = $a(this, false), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
Ke.prototype = Object.create(Error.prototype);
Ke.prototype.constructor = Ke;
Ke.prototype.toString = function(e) {
  return this.name + ": " + $a(this, e);
};
var Ft = Ke;
function Xr(t11, e, i, r, n) {
  var o = "", s = "", a = Math.floor(n / 2) - 1;
  return r - e > a && (o = " ... ", e = r - a + o.length), i - r > a && (s = " ...", i = r + a - s.length), {
    str: o + t11.slice(e, i).replace(/\t/g, "→") + s,
    pos: r - e + o.length
    // relative position
  };
}
function Kr(t11, e) {
  return J.repeat(" ", e - t11.length) + t11;
}
function Pp(t11, e) {
  if (e = Object.create(e || null), !t11.buffer)
    return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var i = /\r?\n|\r|\0/g, r = [0], n = [], o, s = -1; o = i.exec(t11.buffer); )
    n.push(o.index), r.push(o.index + o[0].length), t11.position <= o.index && s < 0 && (s = r.length - 2);
  s < 0 && (s = r.length - 1);
  var a = "", l, h, c = Math.min(t11.line + e.linesAfter, n.length).toString().length, u = e.maxLength - (e.indent + c + 3);
  for (l = 1; l <= e.linesBefore && !(s - l < 0); l++)
    h = Xr(
      t11.buffer,
      r[s - l],
      n[s - l],
      t11.position - (r[s] - r[s - l]),
      u
    ), a = J.repeat(" ", e.indent) + Kr((t11.line - l + 1).toString(), c) + " | " + h.str + `
` + a;
  for (h = Xr(t11.buffer, r[s], n[s], t11.position, u), a += J.repeat(" ", e.indent) + Kr((t11.line + 1).toString(), c) + " | " + h.str + `
`, a += J.repeat("-", e.indent + c + 3 + h.pos) + `^
`, l = 1; l <= e.linesAfter && !(s + l >= n.length); l++)
    h = Xr(
      t11.buffer,
      r[s + l],
      n[s + l],
      t11.position - (r[s] - r[s + l]),
      u
    ), a += J.repeat(" ", e.indent) + Kr((t11.line + l + 1).toString(), c) + " | " + h.str + `
`;
  return a.replace(/\n$/, "");
}
var zp = Pp;
var Wp = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
];
var Hp = [
  "scalar",
  "sequence",
  "mapping"
];
function jp(t11) {
  var e = {};
  return t11 !== null && Object.keys(t11).forEach(function(i) {
    t11[i].forEach(function(r) {
      e[String(r)] = i;
    });
  }), e;
}
function Up(t11, e) {
  if (e = e || {}, Object.keys(e).forEach(function(i) {
    if (Wp.indexOf(i) === -1)
      throw new Ft('Unknown option "' + i + '" is met in definition of "' + t11 + '" YAML type.');
  }), this.options = e, this.tag = t11, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return true;
  }, this.construct = e.construct || function(i) {
    return i;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || false, this.styleAliases = jp(e.styleAliases || null), Hp.indexOf(this.kind) === -1)
    throw new Ft('Unknown kind "' + this.kind + '" is specified for "' + t11 + '" YAML type.');
}
var Z = Up;
function rs(t11, e) {
  var i = [];
  return t11[e].forEach(function(r) {
    var n = i.length;
    i.forEach(function(o, s) {
      o.tag === r.tag && o.kind === r.kind && o.multi === r.multi && (n = s);
    }), i[n] = r;
  }), i;
}
function Yp() {
  var t11 = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, e, i;
  function r(n) {
    n.multi ? (t11.multi[n.kind].push(n), t11.multi.fallback.push(n)) : t11[n.kind][n.tag] = t11.fallback[n.tag] = n;
  }
  for (e = 0, i = arguments.length; e < i; e += 1)
    arguments[e].forEach(r);
  return t11;
}
function pn(t11) {
  return this.extend(t11);
}
pn.prototype.extend = function(e) {
  var i = [], r = [];
  if (e instanceof Z)
    r.push(e);
  else if (Array.isArray(e))
    r = r.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (i = i.concat(e.implicit)), e.explicit && (r = r.concat(e.explicit));
  else
    throw new Ft("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  i.forEach(function(o) {
    if (!(o instanceof Z))
      throw new Ft("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (o.loadKind && o.loadKind !== "scalar")
      throw new Ft("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (o.multi)
      throw new Ft("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), r.forEach(function(o) {
    if (!(o instanceof Z))
      throw new Ft("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var n = Object.create(pn.prototype);
  return n.implicit = (this.implicit || []).concat(i), n.explicit = (this.explicit || []).concat(r), n.compiledImplicit = rs(n, "implicit"), n.compiledExplicit = rs(n, "explicit"), n.compiledTypeMap = Yp(n.compiledImplicit, n.compiledExplicit), n;
};
var Gp = pn;
var Vp = new Z("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t11) {
    return t11 !== null ? t11 : "";
  }
});
var Xp = new Z("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t11) {
    return t11 !== null ? t11 : [];
  }
});
var Kp = new Z("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t11) {
    return t11 !== null ? t11 : {};
  }
});
var Ia = new Gp({
  explicit: [
    Vp,
    Xp,
    Kp
  ]
});
function Zp(t11) {
  if (t11 === null)
    return true;
  var e = t11.length;
  return e === 1 && t11 === "~" || e === 4 && (t11 === "null" || t11 === "Null" || t11 === "NULL");
}
function Jp() {
  return null;
}
function Qp(t11) {
  return t11 === null;
}
var tg = new Z("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: Zp,
  construct: Jp,
  predicate: Qp,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function eg(t11) {
  if (t11 === null)
    return false;
  var e = t11.length;
  return e === 4 && (t11 === "true" || t11 === "True" || t11 === "TRUE") || e === 5 && (t11 === "false" || t11 === "False" || t11 === "FALSE");
}
function ig(t11) {
  return t11 === "true" || t11 === "True" || t11 === "TRUE";
}
function rg(t11) {
  return Object.prototype.toString.call(t11) === "[object Boolean]";
}
var ng = new Z("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: eg,
  construct: ig,
  predicate: rg,
  represent: {
    lowercase: function(t11) {
      return t11 ? "true" : "false";
    },
    uppercase: function(t11) {
      return t11 ? "TRUE" : "FALSE";
    },
    camelcase: function(t11) {
      return t11 ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function og(t11) {
  return 48 <= t11 && t11 <= 57 || 65 <= t11 && t11 <= 70 || 97 <= t11 && t11 <= 102;
}
function sg(t11) {
  return 48 <= t11 && t11 <= 55;
}
function ag(t11) {
  return 48 <= t11 && t11 <= 57;
}
function lg(t11) {
  if (t11 === null)
    return false;
  var e = t11.length, i = 0, r = false, n;
  if (!e)
    return false;
  if (n = t11[i], (n === "-" || n === "+") && (n = t11[++i]), n === "0") {
    if (i + 1 === e)
      return true;
    if (n = t11[++i], n === "b") {
      for (i++; i < e; i++)
        if (n = t11[i], n !== "_") {
          if (n !== "0" && n !== "1")
            return false;
          r = true;
        }
      return r && n !== "_";
    }
    if (n === "x") {
      for (i++; i < e; i++)
        if (n = t11[i], n !== "_") {
          if (!og(t11.charCodeAt(i)))
            return false;
          r = true;
        }
      return r && n !== "_";
    }
    if (n === "o") {
      for (i++; i < e; i++)
        if (n = t11[i], n !== "_") {
          if (!sg(t11.charCodeAt(i)))
            return false;
          r = true;
        }
      return r && n !== "_";
    }
  }
  if (n === "_")
    return false;
  for (; i < e; i++)
    if (n = t11[i], n !== "_") {
      if (!ag(t11.charCodeAt(i)))
        return false;
      r = true;
    }
  return !(!r || n === "_");
}
function hg(t11) {
  var e = t11, i = 1, r;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), r = e[0], (r === "-" || r === "+") && (r === "-" && (i = -1), e = e.slice(1), r = e[0]), e === "0")
    return 0;
  if (r === "0") {
    if (e[1] === "b")
      return i * parseInt(e.slice(2), 2);
    if (e[1] === "x")
      return i * parseInt(e.slice(2), 16);
    if (e[1] === "o")
      return i * parseInt(e.slice(2), 8);
  }
  return i * parseInt(e, 10);
}
function cg(t11) {
  return Object.prototype.toString.call(t11) === "[object Number]" && t11 % 1 === 0 && !J.isNegativeZero(t11);
}
var ug = new Z("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: lg,
  construct: hg,
  predicate: cg,
  represent: {
    binary: function(t11) {
      return t11 >= 0 ? "0b" + t11.toString(2) : "-0b" + t11.toString(2).slice(1);
    },
    octal: function(t11) {
      return t11 >= 0 ? "0o" + t11.toString(8) : "-0o" + t11.toString(8).slice(1);
    },
    decimal: function(t11) {
      return t11.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(t11) {
      return t11 >= 0 ? "0x" + t11.toString(16).toUpperCase() : "-0x" + t11.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
});
var fg = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function dg(t11) {
  return !(t11 === null || !fg.test(t11) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t11[t11.length - 1] === "_");
}
function pg(t11) {
  var e, i;
  return e = t11.replace(/_/g, "").toLowerCase(), i = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? i === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : i * parseFloat(e, 10);
}
var gg = /^[-+]?[0-9]+e/;
function mg(t11, e) {
  var i;
  if (isNaN(t11))
    switch (e) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === t11)
    switch (e) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === t11)
    switch (e) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (J.isNegativeZero(t11))
    return "-0.0";
  return i = t11.toString(10), gg.test(i) ? i.replace("e", ".e") : i;
}
function _g(t11) {
  return Object.prototype.toString.call(t11) === "[object Number]" && (t11 % 1 !== 0 || J.isNegativeZero(t11));
}
var yg = new Z("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: dg,
  construct: pg,
  predicate: _g,
  represent: mg,
  defaultStyle: "lowercase"
});
var Cg = Ia.extend({
  implicit: [
    tg,
    ng,
    ug,
    yg
  ]
});
var xg = Cg;
var Da = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
);
var Na = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function bg(t11) {
  return t11 === null ? false : Da.exec(t11) !== null || Na.exec(t11) !== null;
}
function Tg(t11) {
  var e, i, r, n, o, s, a, l = 0, h = null, c, u, g;
  if (e = Da.exec(t11), e === null && (e = Na.exec(t11)), e === null)
    throw new Error("Date resolve error");
  if (i = +e[1], r = +e[2] - 1, n = +e[3], !e[4])
    return new Date(Date.UTC(i, r, n));
  if (o = +e[4], s = +e[5], a = +e[6], e[7]) {
    for (l = e[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return e[9] && (c = +e[10], u = +(e[11] || 0), h = (c * 60 + u) * 6e4, e[9] === "-" && (h = -h)), g = new Date(Date.UTC(i, r, n, o, s, a, l)), h && g.setTime(g.getTime() - h), g;
}
function Sg(t11) {
  return t11.toISOString();
}
var vg = new Z("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: bg,
  construct: Tg,
  instanceOf: Date,
  represent: Sg
});
function kg(t11) {
  return t11 === "<<" || t11 === null;
}
var wg = new Z("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: kg
});
var Wn = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function Bg(t11) {
  if (t11 === null)
    return false;
  var e, i, r = 0, n = t11.length, o = Wn;
  for (i = 0; i < n; i++)
    if (e = o.indexOf(t11.charAt(i)), !(e > 64)) {
      if (e < 0)
        return false;
      r += 6;
    }
  return r % 8 === 0;
}
function Fg(t11) {
  var e, i, r = t11.replace(/[\r\n=]/g, ""), n = r.length, o = Wn, s = 0, a = [];
  for (e = 0; e < n; e++)
    e % 4 === 0 && e && (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(s & 255)), s = s << 6 | o.indexOf(r.charAt(e));
  return i = n % 4 * 6, i === 0 ? (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(s & 255)) : i === 18 ? (a.push(s >> 10 & 255), a.push(s >> 2 & 255)) : i === 12 && a.push(s >> 4 & 255), new Uint8Array(a);
}
function Lg(t11) {
  var e = "", i = 0, r, n, o = t11.length, s = Wn;
  for (r = 0; r < o; r++)
    r % 3 === 0 && r && (e += s[i >> 18 & 63], e += s[i >> 12 & 63], e += s[i >> 6 & 63], e += s[i & 63]), i = (i << 8) + t11[r];
  return n = o % 3, n === 0 ? (e += s[i >> 18 & 63], e += s[i >> 12 & 63], e += s[i >> 6 & 63], e += s[i & 63]) : n === 2 ? (e += s[i >> 10 & 63], e += s[i >> 4 & 63], e += s[i << 2 & 63], e += s[64]) : n === 1 && (e += s[i >> 2 & 63], e += s[i << 4 & 63], e += s[64], e += s[64]), e;
}
function Ag(t11) {
  return Object.prototype.toString.call(t11) === "[object Uint8Array]";
}
var Eg = new Z("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: Bg,
  construct: Fg,
  predicate: Ag,
  represent: Lg
});
var Mg = Object.prototype.hasOwnProperty;
var Og = Object.prototype.toString;
function $g(t11) {
  if (t11 === null)
    return true;
  var e = [], i, r, n, o, s, a = t11;
  for (i = 0, r = a.length; i < r; i += 1) {
    if (n = a[i], s = false, Og.call(n) !== "[object Object]")
      return false;
    for (o in n)
      if (Mg.call(n, o))
        if (!s)
          s = true;
        else
          return false;
    if (!s)
      return false;
    if (e.indexOf(o) === -1)
      e.push(o);
    else
      return false;
  }
  return true;
}
function Ig(t11) {
  return t11 !== null ? t11 : [];
}
var Dg = new Z("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: $g,
  construct: Ig
});
var Ng = Object.prototype.toString;
function Rg(t11) {
  if (t11 === null)
    return true;
  var e, i, r, n, o, s = t11;
  for (o = new Array(s.length), e = 0, i = s.length; e < i; e += 1) {
    if (r = s[e], Ng.call(r) !== "[object Object]" || (n = Object.keys(r), n.length !== 1))
      return false;
    o[e] = [n[0], r[n[0]]];
  }
  return true;
}
function qg(t11) {
  if (t11 === null)
    return [];
  var e, i, r, n, o, s = t11;
  for (o = new Array(s.length), e = 0, i = s.length; e < i; e += 1)
    r = s[e], n = Object.keys(r), o[e] = [n[0], r[n[0]]];
  return o;
}
var Pg = new Z("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: Rg,
  construct: qg
});
var zg = Object.prototype.hasOwnProperty;
function Wg(t11) {
  if (t11 === null)
    return true;
  var e, i = t11;
  for (e in i)
    if (zg.call(i, e) && i[e] !== null)
      return false;
  return true;
}
function Hg(t11) {
  return t11 !== null ? t11 : {};
}
var jg = new Z("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: Wg,
  construct: Hg
});
var Ug = xg.extend({
  implicit: [
    vg,
    wg
  ],
  explicit: [
    Eg,
    Dg,
    Pg,
    jg
  ]
});
var Pt = Object.prototype.hasOwnProperty;
var Zi = 1;
var Ra = 2;
var qa = 3;
var Ji = 4;
var Zr = 1;
var Yg = 2;
var ns = 3;
var Gg = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var Vg = /[\x85\u2028\u2029]/;
var Xg = /[,\[\]\{\}]/;
var Pa = /^(?:!|!!|![a-z\-]+!)$/i;
var za = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function os(t11) {
  return Object.prototype.toString.call(t11);
}
function bt(t11) {
  return t11 === 10 || t11 === 13;
}
function Zt(t11) {
  return t11 === 9 || t11 === 32;
}
function rt(t11) {
  return t11 === 9 || t11 === 32 || t11 === 10 || t11 === 13;
}
function _e(t11) {
  return t11 === 44 || t11 === 91 || t11 === 93 || t11 === 123 || t11 === 125;
}
function Kg(t11) {
  var e;
  return 48 <= t11 && t11 <= 57 ? t11 - 48 : (e = t11 | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function Zg(t11) {
  return t11 === 120 ? 2 : t11 === 117 ? 4 : t11 === 85 ? 8 : 0;
}
function Jg(t11) {
  return 48 <= t11 && t11 <= 57 ? t11 - 48 : -1;
}
function ss(t11) {
  return t11 === 48 ? "\0" : t11 === 97 ? "\x07" : t11 === 98 ? "\b" : t11 === 116 || t11 === 9 ? "	" : t11 === 110 ? `
` : t11 === 118 ? "\v" : t11 === 102 ? "\f" : t11 === 114 ? "\r" : t11 === 101 ? "\x1B" : t11 === 32 ? " " : t11 === 34 ? '"' : t11 === 47 ? "/" : t11 === 92 ? "\\" : t11 === 78 ? "" : t11 === 95 ? " " : t11 === 76 ? "\u2028" : t11 === 80 ? "\u2029" : "";
}
function Qg(t11) {
  return t11 <= 65535 ? String.fromCharCode(t11) : String.fromCharCode(
    (t11 - 65536 >> 10) + 55296,
    (t11 - 65536 & 1023) + 56320
  );
}
var Wa = new Array(256);
var Ha = new Array(256);
for (fe = 0; fe < 256; fe++)
  Wa[fe] = ss(fe) ? 1 : 0, Ha[fe] = ss(fe);
var fe;
function tm(t11, e) {
  this.input = t11, this.filename = e.filename || null, this.schema = e.schema || Ug, this.onWarning = e.onWarning || null, this.legacy = e.legacy || false, this.json = e.json || false, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t11.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function ja(t11, e) {
  var i = {
    name: t11.filename,
    buffer: t11.input.slice(0, -1),
    // omit trailing \0
    position: t11.position,
    line: t11.line,
    column: t11.position - t11.lineStart
  };
  return i.snippet = zp(i), new Ft(e, i);
}
function k(t11, e) {
  throw ja(t11, e);
}
function Qi(t11, e) {
  t11.onWarning && t11.onWarning.call(null, ja(t11, e));
}
var as = {
  YAML: function(e, i, r) {
    var n, o, s;
    e.version !== null && k(e, "duplication of %YAML directive"), r.length !== 1 && k(e, "YAML directive accepts exactly one argument"), n = /^([0-9]+)\.([0-9]+)$/.exec(r[0]), n === null && k(e, "ill-formed argument of the YAML directive"), o = parseInt(n[1], 10), s = parseInt(n[2], 10), o !== 1 && k(e, "unacceptable YAML version of the document"), e.version = r[0], e.checkLineBreaks = s < 2, s !== 1 && s !== 2 && Qi(e, "unsupported YAML version of the document");
  },
  TAG: function(e, i, r) {
    var n, o;
    r.length !== 2 && k(e, "TAG directive accepts exactly two arguments"), n = r[0], o = r[1], Pa.test(n) || k(e, "ill-formed tag handle (first argument) of the TAG directive"), Pt.call(e.tagMap, n) && k(e, 'there is a previously declared suffix for "' + n + '" tag handle'), za.test(o) || k(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      o = decodeURIComponent(o);
    } catch {
      k(e, "tag prefix is malformed: " + o);
    }
    e.tagMap[n] = o;
  }
};
function Rt(t11, e, i, r) {
  var n, o, s, a;
  if (e < i) {
    if (a = t11.input.slice(e, i), r)
      for (n = 0, o = a.length; n < o; n += 1)
        s = a.charCodeAt(n), s === 9 || 32 <= s && s <= 1114111 || k(t11, "expected valid JSON character");
    else
      Gg.test(a) && k(t11, "the stream contains non-printable characters");
    t11.result += a;
  }
}
function ls(t11, e, i, r) {
  var n, o, s, a;
  for (J.isObject(i) || k(t11, "cannot merge mappings; the provided source object is unacceptable"), n = Object.keys(i), s = 0, a = n.length; s < a; s += 1)
    o = n[s], Pt.call(e, o) || (e[o] = i[o], r[o] = true);
}
function ye(t11, e, i, r, n, o, s, a, l) {
  var h, c;
  if (Array.isArray(n))
    for (n = Array.prototype.slice.call(n), h = 0, c = n.length; h < c; h += 1)
      Array.isArray(n[h]) && k(t11, "nested arrays are not supported inside keys"), typeof n == "object" && os(n[h]) === "[object Object]" && (n[h] = "[object Object]");
  if (typeof n == "object" && os(n) === "[object Object]" && (n = "[object Object]"), n = String(n), e === null && (e = {}), r === "tag:yaml.org,2002:merge")
    if (Array.isArray(o))
      for (h = 0, c = o.length; h < c; h += 1)
        ls(t11, e, o[h], i);
    else
      ls(t11, e, o, i);
  else
    !t11.json && !Pt.call(i, n) && Pt.call(e, n) && (t11.line = s || t11.line, t11.lineStart = a || t11.lineStart, t11.position = l || t11.position, k(t11, "duplicated mapping key")), n === "__proto__" ? Object.defineProperty(e, n, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: o
    }) : e[n] = o, delete i[n];
  return e;
}
function Hn(t11) {
  var e;
  e = t11.input.charCodeAt(t11.position), e === 10 ? t11.position++ : e === 13 ? (t11.position++, t11.input.charCodeAt(t11.position) === 10 && t11.position++) : k(t11, "a line break is expected"), t11.line += 1, t11.lineStart = t11.position, t11.firstTabInLine = -1;
}
function W(t11, e, i) {
  for (var r = 0, n = t11.input.charCodeAt(t11.position); n !== 0; ) {
    for (; Zt(n); )
      n === 9 && t11.firstTabInLine === -1 && (t11.firstTabInLine = t11.position), n = t11.input.charCodeAt(++t11.position);
    if (e && n === 35)
      do
        n = t11.input.charCodeAt(++t11.position);
      while (n !== 10 && n !== 13 && n !== 0);
    if (bt(n))
      for (Hn(t11), n = t11.input.charCodeAt(t11.position), r++, t11.lineIndent = 0; n === 32; )
        t11.lineIndent++, n = t11.input.charCodeAt(++t11.position);
    else
      break;
  }
  return i !== -1 && r !== 0 && t11.lineIndent < i && Qi(t11, "deficient indentation"), r;
}
function yr(t11) {
  var e = t11.position, i;
  return i = t11.input.charCodeAt(e), !!((i === 45 || i === 46) && i === t11.input.charCodeAt(e + 1) && i === t11.input.charCodeAt(e + 2) && (e += 3, i = t11.input.charCodeAt(e), i === 0 || rt(i)));
}
function jn(t11, e) {
  e === 1 ? t11.result += " " : e > 1 && (t11.result += J.repeat(`
`, e - 1));
}
function em(t11, e, i) {
  var r, n, o, s, a, l, h, c, u = t11.kind, g = t11.result, p;
  if (p = t11.input.charCodeAt(t11.position), rt(p) || _e(p) || p === 35 || p === 38 || p === 42 || p === 33 || p === 124 || p === 62 || p === 39 || p === 34 || p === 37 || p === 64 || p === 96 || (p === 63 || p === 45) && (n = t11.input.charCodeAt(t11.position + 1), rt(n) || i && _e(n)))
    return false;
  for (t11.kind = "scalar", t11.result = "", o = s = t11.position, a = false; p !== 0; ) {
    if (p === 58) {
      if (n = t11.input.charCodeAt(t11.position + 1), rt(n) || i && _e(n))
        break;
    } else if (p === 35) {
      if (r = t11.input.charCodeAt(t11.position - 1), rt(r))
        break;
    } else {
      if (t11.position === t11.lineStart && yr(t11) || i && _e(p))
        break;
      if (bt(p))
        if (l = t11.line, h = t11.lineStart, c = t11.lineIndent, W(t11, false, -1), t11.lineIndent >= e) {
          a = true, p = t11.input.charCodeAt(t11.position);
          continue;
        } else {
          t11.position = s, t11.line = l, t11.lineStart = h, t11.lineIndent = c;
          break;
        }
    }
    a && (Rt(t11, o, s, false), jn(t11, t11.line - l), o = s = t11.position, a = false), Zt(p) || (s = t11.position + 1), p = t11.input.charCodeAt(++t11.position);
  }
  return Rt(t11, o, s, false), t11.result ? true : (t11.kind = u, t11.result = g, false);
}
function im(t11, e) {
  var i, r, n;
  if (i = t11.input.charCodeAt(t11.position), i !== 39)
    return false;
  for (t11.kind = "scalar", t11.result = "", t11.position++, r = n = t11.position; (i = t11.input.charCodeAt(t11.position)) !== 0; )
    if (i === 39)
      if (Rt(t11, r, t11.position, true), i = t11.input.charCodeAt(++t11.position), i === 39)
        r = t11.position, t11.position++, n = t11.position;
      else
        return true;
    else
      bt(i) ? (Rt(t11, r, n, true), jn(t11, W(t11, false, e)), r = n = t11.position) : t11.position === t11.lineStart && yr(t11) ? k(t11, "unexpected end of the document within a single quoted scalar") : (t11.position++, n = t11.position);
  k(t11, "unexpected end of the stream within a single quoted scalar");
}
function rm(t11, e) {
  var i, r, n, o, s, a;
  if (a = t11.input.charCodeAt(t11.position), a !== 34)
    return false;
  for (t11.kind = "scalar", t11.result = "", t11.position++, i = r = t11.position; (a = t11.input.charCodeAt(t11.position)) !== 0; ) {
    if (a === 34)
      return Rt(t11, i, t11.position, true), t11.position++, true;
    if (a === 92) {
      if (Rt(t11, i, t11.position, true), a = t11.input.charCodeAt(++t11.position), bt(a))
        W(t11, false, e);
      else if (a < 256 && Wa[a])
        t11.result += Ha[a], t11.position++;
      else if ((s = Zg(a)) > 0) {
        for (n = s, o = 0; n > 0; n--)
          a = t11.input.charCodeAt(++t11.position), (s = Kg(a)) >= 0 ? o = (o << 4) + s : k(t11, "expected hexadecimal character");
        t11.result += Qg(o), t11.position++;
      } else
        k(t11, "unknown escape sequence");
      i = r = t11.position;
    } else
      bt(a) ? (Rt(t11, i, r, true), jn(t11, W(t11, false, e)), i = r = t11.position) : t11.position === t11.lineStart && yr(t11) ? k(t11, "unexpected end of the document within a double quoted scalar") : (t11.position++, r = t11.position);
  }
  k(t11, "unexpected end of the stream within a double quoted scalar");
}
function nm(t11, e) {
  var i = true, r, n, o, s = t11.tag, a, l = t11.anchor, h, c, u, g, p, _ = /* @__PURE__ */ Object.create(null), T, B, A, C;
  if (C = t11.input.charCodeAt(t11.position), C === 91)
    c = 93, p = false, a = [];
  else if (C === 123)
    c = 125, p = true, a = {};
  else
    return false;
  for (t11.anchor !== null && (t11.anchorMap[t11.anchor] = a), C = t11.input.charCodeAt(++t11.position); C !== 0; ) {
    if (W(t11, true, e), C = t11.input.charCodeAt(t11.position), C === c)
      return t11.position++, t11.tag = s, t11.anchor = l, t11.kind = p ? "mapping" : "sequence", t11.result = a, true;
    i ? C === 44 && k(t11, "expected the node content, but found ','") : k(t11, "missed comma between flow collection entries"), B = T = A = null, u = g = false, C === 63 && (h = t11.input.charCodeAt(t11.position + 1), rt(h) && (u = g = true, t11.position++, W(t11, true, e))), r = t11.line, n = t11.lineStart, o = t11.position, Se(t11, e, Zi, false, true), B = t11.tag, T = t11.result, W(t11, true, e), C = t11.input.charCodeAt(t11.position), (g || t11.line === r) && C === 58 && (u = true, C = t11.input.charCodeAt(++t11.position), W(t11, true, e), Se(t11, e, Zi, false, true), A = t11.result), p ? ye(t11, a, _, B, T, A, r, n, o) : u ? a.push(ye(t11, null, _, B, T, A, r, n, o)) : a.push(T), W(t11, true, e), C = t11.input.charCodeAt(t11.position), C === 44 ? (i = true, C = t11.input.charCodeAt(++t11.position)) : i = false;
  }
  k(t11, "unexpected end of the stream within a flow collection");
}
function om(t11, e) {
  var i, r, n = Zr, o = false, s = false, a = e, l = 0, h = false, c, u;
  if (u = t11.input.charCodeAt(t11.position), u === 124)
    r = false;
  else if (u === 62)
    r = true;
  else
    return false;
  for (t11.kind = "scalar", t11.result = ""; u !== 0; )
    if (u = t11.input.charCodeAt(++t11.position), u === 43 || u === 45)
      Zr === n ? n = u === 43 ? ns : Yg : k(t11, "repeat of a chomping mode identifier");
    else if ((c = Jg(u)) >= 0)
      c === 0 ? k(t11, "bad explicit indentation width of a block scalar; it cannot be less than one") : s ? k(t11, "repeat of an indentation width identifier") : (a = e + c - 1, s = true);
    else
      break;
  if (Zt(u)) {
    do
      u = t11.input.charCodeAt(++t11.position);
    while (Zt(u));
    if (u === 35)
      do
        u = t11.input.charCodeAt(++t11.position);
      while (!bt(u) && u !== 0);
  }
  for (; u !== 0; ) {
    for (Hn(t11), t11.lineIndent = 0, u = t11.input.charCodeAt(t11.position); (!s || t11.lineIndent < a) && u === 32; )
      t11.lineIndent++, u = t11.input.charCodeAt(++t11.position);
    if (!s && t11.lineIndent > a && (a = t11.lineIndent), bt(u)) {
      l++;
      continue;
    }
    if (t11.lineIndent < a) {
      n === ns ? t11.result += J.repeat(`
`, o ? 1 + l : l) : n === Zr && o && (t11.result += `
`);
      break;
    }
    for (r ? Zt(u) ? (h = true, t11.result += J.repeat(`
`, o ? 1 + l : l)) : h ? (h = false, t11.result += J.repeat(`
`, l + 1)) : l === 0 ? o && (t11.result += " ") : t11.result += J.repeat(`
`, l) : t11.result += J.repeat(`
`, o ? 1 + l : l), o = true, s = true, l = 0, i = t11.position; !bt(u) && u !== 0; )
      u = t11.input.charCodeAt(++t11.position);
    Rt(t11, i, t11.position, false);
  }
  return true;
}
function hs(t11, e) {
  var i, r = t11.tag, n = t11.anchor, o = [], s, a = false, l;
  if (t11.firstTabInLine !== -1)
    return false;
  for (t11.anchor !== null && (t11.anchorMap[t11.anchor] = o), l = t11.input.charCodeAt(t11.position); l !== 0 && (t11.firstTabInLine !== -1 && (t11.position = t11.firstTabInLine, k(t11, "tab characters must not be used in indentation")), !(l !== 45 || (s = t11.input.charCodeAt(t11.position + 1), !rt(s)))); ) {
    if (a = true, t11.position++, W(t11, true, -1) && t11.lineIndent <= e) {
      o.push(null), l = t11.input.charCodeAt(t11.position);
      continue;
    }
    if (i = t11.line, Se(t11, e, qa, false, true), o.push(t11.result), W(t11, true, -1), l = t11.input.charCodeAt(t11.position), (t11.line === i || t11.lineIndent > e) && l !== 0)
      k(t11, "bad indentation of a sequence entry");
    else if (t11.lineIndent < e)
      break;
  }
  return a ? (t11.tag = r, t11.anchor = n, t11.kind = "sequence", t11.result = o, true) : false;
}
function sm(t11, e, i) {
  var r, n, o, s, a, l, h = t11.tag, c = t11.anchor, u = {}, g = /* @__PURE__ */ Object.create(null), p = null, _ = null, T = null, B = false, A = false, C;
  if (t11.firstTabInLine !== -1)
    return false;
  for (t11.anchor !== null && (t11.anchorMap[t11.anchor] = u), C = t11.input.charCodeAt(t11.position); C !== 0; ) {
    if (!B && t11.firstTabInLine !== -1 && (t11.position = t11.firstTabInLine, k(t11, "tab characters must not be used in indentation")), r = t11.input.charCodeAt(t11.position + 1), o = t11.line, (C === 63 || C === 58) && rt(r))
      C === 63 ? (B && (ye(t11, u, g, p, _, null, s, a, l), p = _ = T = null), A = true, B = true, n = true) : B ? (B = false, n = true) : k(t11, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t11.position += 1, C = r;
    else {
      if (s = t11.line, a = t11.lineStart, l = t11.position, !Se(t11, i, Ra, false, true))
        break;
      if (t11.line === o) {
        for (C = t11.input.charCodeAt(t11.position); Zt(C); )
          C = t11.input.charCodeAt(++t11.position);
        if (C === 58)
          C = t11.input.charCodeAt(++t11.position), rt(C) || k(t11, "a whitespace character is expected after the key-value separator within a block mapping"), B && (ye(t11, u, g, p, _, null, s, a, l), p = _ = T = null), A = true, B = false, n = false, p = t11.tag, _ = t11.result;
        else if (A)
          k(t11, "can not read an implicit mapping pair; a colon is missed");
        else
          return t11.tag = h, t11.anchor = c, true;
      } else if (A)
        k(t11, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t11.tag = h, t11.anchor = c, true;
    }
    if ((t11.line === o || t11.lineIndent > e) && (B && (s = t11.line, a = t11.lineStart, l = t11.position), Se(t11, e, Ji, true, n) && (B ? _ = t11.result : T = t11.result), B || (ye(t11, u, g, p, _, T, s, a, l), p = _ = T = null), W(t11, true, -1), C = t11.input.charCodeAt(t11.position)), (t11.line === o || t11.lineIndent > e) && C !== 0)
      k(t11, "bad indentation of a mapping entry");
    else if (t11.lineIndent < e)
      break;
  }
  return B && ye(t11, u, g, p, _, null, s, a, l), A && (t11.tag = h, t11.anchor = c, t11.kind = "mapping", t11.result = u), A;
}
function am(t11) {
  var e, i = false, r = false, n, o, s;
  if (s = t11.input.charCodeAt(t11.position), s !== 33)
    return false;
  if (t11.tag !== null && k(t11, "duplication of a tag property"), s = t11.input.charCodeAt(++t11.position), s === 60 ? (i = true, s = t11.input.charCodeAt(++t11.position)) : s === 33 ? (r = true, n = "!!", s = t11.input.charCodeAt(++t11.position)) : n = "!", e = t11.position, i) {
    do
      s = t11.input.charCodeAt(++t11.position);
    while (s !== 0 && s !== 62);
    t11.position < t11.length ? (o = t11.input.slice(e, t11.position), s = t11.input.charCodeAt(++t11.position)) : k(t11, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; s !== 0 && !rt(s); )
      s === 33 && (r ? k(t11, "tag suffix cannot contain exclamation marks") : (n = t11.input.slice(e - 1, t11.position + 1), Pa.test(n) || k(t11, "named tag handle cannot contain such characters"), r = true, e = t11.position + 1)), s = t11.input.charCodeAt(++t11.position);
    o = t11.input.slice(e, t11.position), Xg.test(o) && k(t11, "tag suffix cannot contain flow indicator characters");
  }
  o && !za.test(o) && k(t11, "tag name cannot contain such characters: " + o);
  try {
    o = decodeURIComponent(o);
  } catch {
    k(t11, "tag name is malformed: " + o);
  }
  return i ? t11.tag = o : Pt.call(t11.tagMap, n) ? t11.tag = t11.tagMap[n] + o : n === "!" ? t11.tag = "!" + o : n === "!!" ? t11.tag = "tag:yaml.org,2002:" + o : k(t11, 'undeclared tag handle "' + n + '"'), true;
}
function lm(t11) {
  var e, i;
  if (i = t11.input.charCodeAt(t11.position), i !== 38)
    return false;
  for (t11.anchor !== null && k(t11, "duplication of an anchor property"), i = t11.input.charCodeAt(++t11.position), e = t11.position; i !== 0 && !rt(i) && !_e(i); )
    i = t11.input.charCodeAt(++t11.position);
  return t11.position === e && k(t11, "name of an anchor node must contain at least one character"), t11.anchor = t11.input.slice(e, t11.position), true;
}
function hm(t11) {
  var e, i, r;
  if (r = t11.input.charCodeAt(t11.position), r !== 42)
    return false;
  for (r = t11.input.charCodeAt(++t11.position), e = t11.position; r !== 0 && !rt(r) && !_e(r); )
    r = t11.input.charCodeAt(++t11.position);
  return t11.position === e && k(t11, "name of an alias node must contain at least one character"), i = t11.input.slice(e, t11.position), Pt.call(t11.anchorMap, i) || k(t11, 'unidentified alias "' + i + '"'), t11.result = t11.anchorMap[i], W(t11, true, -1), true;
}
function Se(t11, e, i, r, n) {
  var o, s, a, l = 1, h = false, c = false, u, g, p, _, T, B;
  if (t11.listener !== null && t11.listener("open", t11), t11.tag = null, t11.anchor = null, t11.kind = null, t11.result = null, o = s = a = Ji === i || qa === i, r && W(t11, true, -1) && (h = true, t11.lineIndent > e ? l = 1 : t11.lineIndent === e ? l = 0 : t11.lineIndent < e && (l = -1)), l === 1)
    for (; am(t11) || lm(t11); )
      W(t11, true, -1) ? (h = true, a = o, t11.lineIndent > e ? l = 1 : t11.lineIndent === e ? l = 0 : t11.lineIndent < e && (l = -1)) : a = false;
  if (a && (a = h || n), (l === 1 || Ji === i) && (Zi === i || Ra === i ? T = e : T = e + 1, B = t11.position - t11.lineStart, l === 1 ? a && (hs(t11, B) || sm(t11, B, T)) || nm(t11, T) ? c = true : (s && om(t11, T) || im(t11, T) || rm(t11, T) ? c = true : hm(t11) ? (c = true, (t11.tag !== null || t11.anchor !== null) && k(t11, "alias node should not have any properties")) : em(t11, T, Zi === i) && (c = true, t11.tag === null && (t11.tag = "?")), t11.anchor !== null && (t11.anchorMap[t11.anchor] = t11.result)) : l === 0 && (c = a && hs(t11, B))), t11.tag === null)
    t11.anchor !== null && (t11.anchorMap[t11.anchor] = t11.result);
  else if (t11.tag === "?") {
    for (t11.result !== null && t11.kind !== "scalar" && k(t11, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t11.kind + '"'), u = 0, g = t11.implicitTypes.length; u < g; u += 1)
      if (_ = t11.implicitTypes[u], _.resolve(t11.result)) {
        t11.result = _.construct(t11.result), t11.tag = _.tag, t11.anchor !== null && (t11.anchorMap[t11.anchor] = t11.result);
        break;
      }
  } else if (t11.tag !== "!") {
    if (Pt.call(t11.typeMap[t11.kind || "fallback"], t11.tag))
      _ = t11.typeMap[t11.kind || "fallback"][t11.tag];
    else
      for (_ = null, p = t11.typeMap.multi[t11.kind || "fallback"], u = 0, g = p.length; u < g; u += 1)
        if (t11.tag.slice(0, p[u].tag.length) === p[u].tag) {
          _ = p[u];
          break;
        }
    _ || k(t11, "unknown tag !<" + t11.tag + ">"), t11.result !== null && _.kind !== t11.kind && k(t11, "unacceptable node kind for !<" + t11.tag + '> tag; it should be "' + _.kind + '", not "' + t11.kind + '"'), _.resolve(t11.result, t11.tag) ? (t11.result = _.construct(t11.result, t11.tag), t11.anchor !== null && (t11.anchorMap[t11.anchor] = t11.result)) : k(t11, "cannot resolve a node with !<" + t11.tag + "> explicit tag");
  }
  return t11.listener !== null && t11.listener("close", t11), t11.tag !== null || t11.anchor !== null || c;
}
function cm(t11) {
  var e = t11.position, i, r, n, o = false, s;
  for (t11.version = null, t11.checkLineBreaks = t11.legacy, t11.tagMap = /* @__PURE__ */ Object.create(null), t11.anchorMap = /* @__PURE__ */ Object.create(null); (s = t11.input.charCodeAt(t11.position)) !== 0 && (W(t11, true, -1), s = t11.input.charCodeAt(t11.position), !(t11.lineIndent > 0 || s !== 37)); ) {
    for (o = true, s = t11.input.charCodeAt(++t11.position), i = t11.position; s !== 0 && !rt(s); )
      s = t11.input.charCodeAt(++t11.position);
    for (r = t11.input.slice(i, t11.position), n = [], r.length < 1 && k(t11, "directive name must not be less than one character in length"); s !== 0; ) {
      for (; Zt(s); )
        s = t11.input.charCodeAt(++t11.position);
      if (s === 35) {
        do
          s = t11.input.charCodeAt(++t11.position);
        while (s !== 0 && !bt(s));
        break;
      }
      if (bt(s))
        break;
      for (i = t11.position; s !== 0 && !rt(s); )
        s = t11.input.charCodeAt(++t11.position);
      n.push(t11.input.slice(i, t11.position));
    }
    s !== 0 && Hn(t11), Pt.call(as, r) ? as[r](t11, r, n) : Qi(t11, 'unknown document directive "' + r + '"');
  }
  if (W(t11, true, -1), t11.lineIndent === 0 && t11.input.charCodeAt(t11.position) === 45 && t11.input.charCodeAt(t11.position + 1) === 45 && t11.input.charCodeAt(t11.position + 2) === 45 ? (t11.position += 3, W(t11, true, -1)) : o && k(t11, "directives end mark is expected"), Se(t11, t11.lineIndent - 1, Ji, false, true), W(t11, true, -1), t11.checkLineBreaks && Vg.test(t11.input.slice(e, t11.position)) && Qi(t11, "non-ASCII line breaks are interpreted as content"), t11.documents.push(t11.result), t11.position === t11.lineStart && yr(t11)) {
    t11.input.charCodeAt(t11.position) === 46 && (t11.position += 3, W(t11, true, -1));
    return;
  }
  if (t11.position < t11.length - 1)
    k(t11, "end of the stream or a document separator is expected");
  else
    return;
}
function Ua(t11, e) {
  t11 = String(t11), e = e || {}, t11.length !== 0 && (t11.charCodeAt(t11.length - 1) !== 10 && t11.charCodeAt(t11.length - 1) !== 13 && (t11 += `
`), t11.charCodeAt(0) === 65279 && (t11 = t11.slice(1)));
  var i = new tm(t11, e), r = t11.indexOf("\0");
  for (r !== -1 && (i.position = r, k(i, "null byte is not allowed in input")), i.input += "\0"; i.input.charCodeAt(i.position) === 32; )
    i.lineIndent += 1, i.position += 1;
  for (; i.position < i.length - 1; )
    cm(i);
  return i.documents;
}
function um(t11, e, i) {
  e !== null && typeof e == "object" && typeof i > "u" && (i = e, e = null);
  var r = Ua(t11, i);
  if (typeof e != "function")
    return r;
  for (var n = 0, o = r.length; n < o; n += 1)
    e(r[n]);
}
function fm(t11, e) {
  var i = Ua(t11, e);
  if (i.length !== 0) {
    if (i.length === 1)
      return i[0];
    throw new Ft("expected a single document in the stream, but found more");
  }
}
var dm = um;
var pm = fm;
var gm = {
  loadAll: dm,
  load: pm
};
var mm = Ia;
var _m = gm.load;
var Ya = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s;
function ym(t11, e) {
  var r, n;
  const i = t11.match(Ya);
  if (i) {
    const o = _m(i[1], {
      // To keep things simple, only allow strings, arrays, and plain objects.
      // https://www.yaml.org/spec/1.2/spec.html#id2802346
      schema: mm
    });
    return o != null && o.title && ((r = e.setDiagramTitle) == null || r.call(e, o.title)), o != null && o.displayMode && ((n = e.setDisplayMode) == null || n.call(e, o.displayMode)), t11.slice(i[0].length);
  } else
    return t11;
}
var gn = function(t11, e, i) {
  const { depth: r, clobber: n } = Object.assign({ depth: 2, clobber: false }, i);
  return Array.isArray(e) && !Array.isArray(t11) ? (e.forEach((o) => gn(t11, o, i)), t11) : Array.isArray(e) && Array.isArray(t11) ? (e.forEach((o) => {
    t11.includes(o) || t11.push(o);
  }), t11) : t11 === void 0 || r <= 0 ? t11 != null && typeof t11 == "object" && typeof e == "object" ? Object.assign(t11, e) : e : (e !== void 0 && typeof t11 == "object" && typeof e == "object" && Object.keys(e).forEach((o) => {
    typeof e[o] == "object" && (t11[o] === void 0 || typeof t11[o] == "object") ? (t11[o] === void 0 && (t11[o] = Array.isArray(e[o]) ? [] : {}), t11[o] = gn(t11[o], e[o], { depth: r - 1, clobber: n })) : (n || typeof t11[o] != "object" && typeof e[o] != "object") && (t11[o] = e[o]);
  }), t11);
};
var K = gn;
var Ze = Object.freeze(Fp);
var et = K({}, Ze);
var Ga;
var ve = [];
var He = K({}, Ze);
var Cr = (t11, e) => {
  let i = K({}, t11), r = {};
  for (const n of e)
    Xa(n), r = K(r, n);
  if (i = K(i, r), r.theme && r.theme in Lt) {
    const n = K({}, Ga), o = K(
      n.themeVariables || {},
      r.themeVariables
    );
    i.theme && i.theme in Lt && (i.themeVariables = Lt[i.theme].getThemeVariables(o));
  }
  return He = i, Ja(He), He;
};
var Cm = (t11) => (et = K({}, Ze), et = K(et, t11), t11.theme && Lt[t11.theme] && (et.themeVariables = Lt[t11.theme].getThemeVariables(t11.themeVariables)), Cr(et, ve), et);
var xm = (t11) => {
  Ga = K({}, t11);
};
var bm = (t11) => (et = K(et, t11), Cr(et, ve), et);
var Va = () => K({}, et);
var Tm = (t11) => (Ja(t11), K(He, t11), Et());
var Et = () => K({}, He);
var Xa = (t11) => {
  ["secure", ...et.secure ?? []].forEach((e) => {
    t11[e] !== void 0 && (b.debug(`Denied attempt to modify a secure key ${e}`, t11[e]), delete t11[e]);
  }), Object.keys(t11).forEach((e) => {
    e.indexOf("__") === 0 && delete t11[e];
  }), Object.keys(t11).forEach((e) => {
    typeof t11[e] == "string" && (t11[e].includes("<") || t11[e].includes(">") || t11[e].includes("url(data:")) && delete t11[e], typeof t11[e] == "object" && Xa(t11[e]);
  });
};
var Ka = (t11) => {
  t11.fontFamily && (t11.themeVariables ? t11.themeVariables.fontFamily || (t11.themeVariables = { fontFamily: t11.fontFamily }) : t11.themeVariables = { fontFamily: t11.fontFamily }), ve.push(t11), Cr(et, ve);
};
var tr = (t11 = et) => {
  ve = [], Cr(t11, ve);
};
var Za = ((t11) => (t11.LAZY_LOAD_DEPRECATED = "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead.", t11))(Za || {});
var cs = {};
var Sm = (t11) => {
  cs[t11] || (b.warn(Za[t11]), cs[t11] = true);
};
var Ja = (t11) => {
  t11 && (t11.lazyLoadedDiagrams || t11.loadExternalDiagramsAtStartup) && Sm("LAZY_LOAD_DEPRECATED");
};
var vm = function(t11, e) {
  for (let i of e)
    t11.attr(i[0], i[1]);
};
var km = function(t11, e, i) {
  let r = /* @__PURE__ */ new Map();
  return i ? (r.set("width", "100%"), r.set("style", `max-width: ${e}px;`)) : (r.set("height", t11), r.set("width", e)), r;
};
var wm = function(t11, e, i, r) {
  const n = km(e, i, r);
  vm(t11, n);
};
var Bm = function(t11, e, i, r) {
  const n = e.node().getBBox(), o = n.width, s = n.height;
  b.info(`SVG bounds: ${o}x${s}`, n);
  let a = 0, l = 0;
  b.info(`Graph bounds: ${a}x${l}`, t11), a = o + i * 2, l = s + i * 2, b.info(`Calculated bounds: ${a}x${l}`), wm(e, l, a, r);
  const h = `${n.x - i} ${n.y - i} ${n.width + 2 * i} ${n.height + 2 * i}`;
  e.attr("viewBox", h);
};
var $i = {};
var Fm = (t11, e, i) => {
  let r = "";
  return t11 in $i && $i[t11] ? r = $i[t11](i) : b.warn(`No theme found for ${t11}`), ` & {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
    fill: ${i.textColor}
  }

  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${i.errorBkgColor};
  }
  & .error-text {
    fill: ${i.errorTextColor};
    stroke: ${i.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 2px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }

  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${i.lineColor};
    stroke: ${i.lineColor};
  }
  & .marker.cross {
    stroke: ${i.lineColor};
  }

  & svg {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
  }

  ${r}

  ${e}
`;
};
var Lm = (t11, e) => {
  $i[t11] = e;
};
var Am = Fm;
var Un = "";
var xr = "";
var Yn = "";
var Gn = (t11) => Xe(t11, Et());
var Qa = function() {
  Un = "", Yn = "", xr = "";
};
var tl = function(t11) {
  Un = Gn(t11).replace(/^\s+/g, "");
};
var el = function() {
  return Un || xr;
};
var il = function(t11) {
  Yn = Gn(t11).replace(/\n\s+/g, `
`);
};
var rl = function() {
  return Yn;
};
var nl = function(t11) {
  xr = Gn(t11);
};
var ol = function() {
  return xr;
};
var Em = {
  getAccTitle: el,
  setAccTitle: tl,
  getDiagramTitle: ol,
  setDiagramTitle: nl,
  getAccDescription: rl,
  setAccDescription: il,
  clear: Qa
};
var Mm = Object.freeze(Object.defineProperty({
  __proto__: null,
  clear: Qa,
  default: Em,
  getAccDescription: rl,
  getAccTitle: el,
  getDiagramTitle: ol,
  setAccDescription: il,
  setAccTitle: tl,
  setDiagramTitle: nl
}, Symbol.toStringTag, { value: "Module" }));
var Yt = {};
var sl = function(t11, e, i, r) {
  b.debug("parseDirective is being called", e, i, r);
  try {
    if (e !== void 0)
      switch (e = e.trim(), i) {
        case "open_directive":
          Yt = {};
          break;
        case "type_directive":
          if (!Yt)
            throw new Error("currentDirective is undefined");
          Yt.type = e.toLowerCase();
          break;
        case "arg_directive":
          if (!Yt)
            throw new Error("currentDirective is undefined");
          Yt.args = JSON.parse(e);
          break;
        case "close_directive":
          Om(t11, Yt, r), Yt = void 0;
          break;
      }
  } catch (n) {
    b.error(
      `Error while rendering sequenceDiagram directive: ${e} jison context: ${i}`
    ), b.error(n.message);
  }
};
var Om = function(t11, e, i) {
  switch (b.info(`Directive type=${e.type} with args:`, e.args), e.type) {
    case "init":
    case "initialize": {
      ["config"].forEach((r) => {
        e.args[r] !== void 0 && (i === "flowchart-v2" && (i = "flowchart"), e.args[i] = e.args[r], delete e.args[r]);
      }), b.info("sanitize in handleDirective", e.args), we(e.args), b.info("sanitize in handleDirective (done)", e.args), Ka(e.args);
      break;
    }
    case "wrap":
    case "nowrap":
      t11 && t11.setWrap && t11.setWrap(e.type === "wrap");
      break;
    case "themeCss":
      b.warn("themeCss encountered");
      break;
    default:
      b.warn(
        `Unhandled directive: source: '%%{${e.type}: ${JSON.stringify(
          e.args ? e.args : {}
        )}}%%`,
        e
      );
      break;
  }
};
var $m = b;
var Im = Bn;
var al = Et;
var Dm = (t11) => Xe(t11, al());
var Nm = Bm;
var Rm = () => Mm;
var qm = (t11, e, i, r) => sl(t11, e, i, r);
var er = {};
var ir = (t11, e, i) => {
  if (er[t11])
    throw new Error(`Diagram ${t11} already registered.`);
  er[t11] = e, i && cl(t11, i), Lm(t11, e.styles), e.injectUtils && e.injectUtils(
    $m,
    Im,
    al,
    Dm,
    Nm,
    Rm(),
    qm
  );
};
var Vn = (t11) => {
  if (t11 in er)
    return er[t11];
  throw new Error(`Diagram ${t11} not found.`);
};
var ll = class extends Error {
  constructor(e) {
    super(e), this.name = "UnknownDiagramError";
  }
};
var Pm = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var zm = /\s*%%.*\n/gm;
var ke = {};
var br = function(t11, e) {
  t11 = t11.replace(Ya, "").replace(Pm, "").replace(zm, `
`);
  for (const [i, { detector: r }] of Object.entries(ke))
    if (r(t11, e))
      return i;
  throw new ll(
    `No diagram type detected matching given configuration for text: ${t11}`
  );
};
var hl = (...t11) => {
  for (const { id: e, detector: i, loader: r } of t11)
    cl(e, i, r);
};
var Wm = async () => {
  b.debug("Loading registered diagrams");
  const e = (await Promise.allSettled(
    Object.entries(ke).map(async ([i, { detector: r, loader: n }]) => {
      if (n)
        try {
          Vn(i);
        } catch {
          try {
            const { diagram: s, id: a } = await n();
            ir(a, s, r);
          } catch (s) {
            throw b.error(`Failed to load external diagram with key ${i}. Removing from detectors.`), delete ke[i], s;
          }
        }
    })
  )).filter((i) => i.status === "rejected");
  if (e.length > 0) {
    b.error(`Failed to load ${e.length} external diagrams`);
    for (const i of e)
      b.error(i);
    throw new Error(`Failed to load ${e.length} external diagrams`);
  }
};
var cl = (t11, e, i) => {
  ke[t11] ? b.error(`Detector with key ${t11} already exists`) : ke[t11] = { detector: e, loader: i }, b.debug(`Detector with key ${t11} added${i ? " with loader" : ""}`);
};
var Hm = (t11) => ke[t11].loader;
var jm = typeof global == "object" && global && global.Object === Object && global;
var ul = jm;
var Um = typeof self == "object" && self && self.Object === Object && self;
var Ym = ul || Um || Function("return this")();
var zt = Ym;
var Gm = zt.Symbol;
var rr = Gm;
var fl = Object.prototype;
var Vm = fl.hasOwnProperty;
var Xm = fl.toString;
var De = rr ? rr.toStringTag : void 0;
function Km(t11) {
  var e = Vm.call(t11, De), i = t11[De];
  try {
    t11[De] = void 0;
    var r = true;
  } catch {
  }
  var n = Xm.call(t11);
  return r && (e ? t11[De] = i : delete t11[De]), n;
}
var Zm = Object.prototype;
var Jm = Zm.toString;
function Qm(t11) {
  return Jm.call(t11);
}
var t0 = "[object Null]";
var e0 = "[object Undefined]";
var us = rr ? rr.toStringTag : void 0;
function ni(t11) {
  return t11 == null ? t11 === void 0 ? e0 : t0 : us && us in Object(t11) ? Km(t11) : Qm(t11);
}
function dl(t11) {
  var e = typeof t11;
  return t11 != null && (e == "object" || e == "function");
}
var i0 = "[object AsyncFunction]";
var r0 = "[object Function]";
var n0 = "[object GeneratorFunction]";
var o0 = "[object Proxy]";
function pl(t11) {
  if (!dl(t11))
    return false;
  var e = ni(t11);
  return e == r0 || e == n0 || e == i0 || e == o0;
}
var s0 = zt["__core-js_shared__"];
var Jr = s0;
var fs = function() {
  var t11 = /[^.]+$/.exec(Jr && Jr.keys && Jr.keys.IE_PROTO || "");
  return t11 ? "Symbol(src)_1." + t11 : "";
}();
function a0(t11) {
  return !!fs && fs in t11;
}
var l0 = Function.prototype;
var h0 = l0.toString;
function ie(t11) {
  if (t11 != null) {
    try {
      return h0.call(t11);
    } catch {
    }
    try {
      return t11 + "";
    } catch {
    }
  }
  return "";
}
var c0 = /[\\^$.*+?()[\]{}|]/g;
var u0 = /^\[object .+?Constructor\]$/;
var f0 = Function.prototype;
var d0 = Object.prototype;
var p0 = f0.toString;
var g0 = d0.hasOwnProperty;
var m0 = RegExp(
  "^" + p0.call(g0).replace(c0, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _0(t11) {
  if (!dl(t11) || a0(t11))
    return false;
  var e = pl(t11) ? m0 : u0;
  return e.test(ie(t11));
}
function y0(t11, e) {
  return t11 == null ? void 0 : t11[e];
}
function Fe(t11, e) {
  var i = y0(t11, e);
  return _0(i) ? i : void 0;
}
var C0 = Fe(Object, "create");
var Je = C0;
function x0() {
  this.__data__ = Je ? Je(null) : {}, this.size = 0;
}
function b0(t11) {
  var e = this.has(t11) && delete this.__data__[t11];
  return this.size -= e ? 1 : 0, e;
}
var T0 = "__lodash_hash_undefined__";
var S0 = Object.prototype;
var v0 = S0.hasOwnProperty;
function k0(t11) {
  var e = this.__data__;
  if (Je) {
    var i = e[t11];
    return i === T0 ? void 0 : i;
  }
  return v0.call(e, t11) ? e[t11] : void 0;
}
var w0 = Object.prototype;
var B0 = w0.hasOwnProperty;
function F0(t11) {
  var e = this.__data__;
  return Je ? e[t11] !== void 0 : B0.call(e, t11);
}
var L0 = "__lodash_hash_undefined__";
function A0(t11, e) {
  var i = this.__data__;
  return this.size += this.has(t11) ? 0 : 1, i[t11] = Je && e === void 0 ? L0 : e, this;
}
function te(t11) {
  var e = -1, i = t11 == null ? 0 : t11.length;
  for (this.clear(); ++e < i; ) {
    var r = t11[e];
    this.set(r[0], r[1]);
  }
}
te.prototype.clear = x0;
te.prototype.delete = b0;
te.prototype.get = k0;
te.prototype.has = F0;
te.prototype.set = A0;
function E0() {
  this.__data__ = [], this.size = 0;
}
function M0(t11, e) {
  return t11 === e || t11 !== t11 && e !== e;
}
function Tr(t11, e) {
  for (var i = t11.length; i--; )
    if (M0(t11[i][0], e))
      return i;
  return -1;
}
var O0 = Array.prototype;
var $0 = O0.splice;
function I0(t11) {
  var e = this.__data__, i = Tr(e, t11);
  if (i < 0)
    return false;
  var r = e.length - 1;
  return i == r ? e.pop() : $0.call(e, i, 1), --this.size, true;
}
function D0(t11) {
  var e = this.__data__, i = Tr(e, t11);
  return i < 0 ? void 0 : e[i][1];
}
function N0(t11) {
  return Tr(this.__data__, t11) > -1;
}
function R0(t11, e) {
  var i = this.__data__, r = Tr(i, t11);
  return r < 0 ? (++this.size, i.push([t11, e])) : i[r][1] = e, this;
}
function Le(t11) {
  var e = -1, i = t11 == null ? 0 : t11.length;
  for (this.clear(); ++e < i; ) {
    var r = t11[e];
    this.set(r[0], r[1]);
  }
}
Le.prototype.clear = E0;
Le.prototype.delete = I0;
Le.prototype.get = D0;
Le.prototype.has = N0;
Le.prototype.set = R0;
var q0 = Fe(zt, "Map");
var nr = q0;
function P0() {
  this.size = 0, this.__data__ = {
    hash: new te(),
    map: new (nr || Le)(),
    string: new te()
  };
}
function z0(t11) {
  var e = typeof t11;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t11 !== "__proto__" : t11 === null;
}
function Sr(t11, e) {
  var i = t11.__data__;
  return z0(e) ? i[typeof e == "string" ? "string" : "hash"] : i.map;
}
function W0(t11) {
  var e = Sr(this, t11).delete(t11);
  return this.size -= e ? 1 : 0, e;
}
function H0(t11) {
  return Sr(this, t11).get(t11);
}
function j0(t11) {
  return Sr(this, t11).has(t11);
}
function U0(t11, e) {
  var i = Sr(this, t11), r = i.size;
  return i.set(t11, e), this.size += i.size == r ? 0 : 1, this;
}
function re(t11) {
  var e = -1, i = t11 == null ? 0 : t11.length;
  for (this.clear(); ++e < i; ) {
    var r = t11[e];
    this.set(r[0], r[1]);
  }
}
re.prototype.clear = P0;
re.prototype.delete = W0;
re.prototype.get = H0;
re.prototype.has = j0;
re.prototype.set = U0;
var Y0 = "Expected a function";
function oi(t11, e) {
  if (typeof t11 != "function" || e != null && typeof e != "function")
    throw new TypeError(Y0);
  var i = function() {
    var r = arguments, n = e ? e.apply(this, r) : r[0], o = i.cache;
    if (o.has(n))
      return o.get(n);
    var s = t11.apply(this, r);
    return i.cache = o.set(n, s) || o, s;
  };
  return i.cache = new (oi.Cache || re)(), i;
}
oi.Cache = re;
var G0 = {
  curveBasis: Qf,
  curveBasisClosed: td,
  curveBasisOpen: ed,
  curveBumpX: Zf,
  curveBumpY: Jf,
  curveBundle: id,
  curveCardinalClosed: nd,
  curveCardinalOpen: od,
  curveCardinal: rd,
  curveCatmullRomClosed: ad,
  curveCatmullRomOpen: ld,
  curveCatmullRom: sd,
  curveLinear: Kf,
  curveLinearClosed: hd,
  curveMonotoneX: cd,
  curveMonotoneY: ud,
  curveNatural: fd,
  curveStep: dd,
  curveStepAfter: gd,
  curveStepBefore: pd
};
var Qr = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var V0 = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var X0 = function(t11, e) {
  const i = gl(t11, /(?:init\b)|(?:initialize\b)/);
  let r = {};
  if (Array.isArray(i)) {
    const n = i.map((o) => o.args);
    we(n), r = K(r, [...n]);
  } else
    r = i.args;
  if (r) {
    let n = br(t11, e);
    ["config"].forEach((o) => {
      r[o] !== void 0 && (n === "flowchart-v2" && (n = "flowchart"), r[n] = r[o], delete r[o]);
    });
  }
  return r;
};
var gl = function(t11, e = null) {
  try {
    const i = new RegExp(
      `[%]{2}(?![{]${V0.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    t11 = t11.trim().replace(i, "").replace(/'/gm, '"'), b.debug(
      `Detecting diagram directive${e !== null ? " type:" + e : ""} based on the text:${t11}`
    );
    let r;
    const n = [];
    for (; (r = Qr.exec(t11)) !== null; )
      if (r.index === Qr.lastIndex && Qr.lastIndex++, r && !e || e && r[1] && r[1].match(e) || e && r[2] && r[2].match(e)) {
        const o = r[1] ? r[1] : r[2], s = r[3] ? r[3].trim() : r[4] ? JSON.parse(r[4].trim()) : null;
        n.push({ type: o, args: s });
      }
    return n.length === 0 && n.push({ type: t11, args: null }), n.length === 1 ? n[0] : n;
  } catch (i) {
    return b.error(
      `ERROR: ${i.message} - Unable to parse directive
      ${e !== null ? " type:" + e : ""} based on the text:${t11}`
    ), { type: null, args: null };
  }
};
var K0 = function(t11, e) {
  for (const [i, r] of e.entries())
    if (r.match(t11))
      return i;
  return -1;
};
function Z0(t11, e) {
  if (!t11)
    return e;
  const i = `curve${t11.charAt(0).toUpperCase() + t11.slice(1)}`;
  return G0[i] || e;
}
function J0(t11, e) {
  const i = t11.trim();
  if (i)
    return e.securityLevel !== "loose" ? Ds(i) : i;
}
var Q0 = (t11, ...e) => {
  const i = t11.split("."), r = i.length - 1, n = i[r];
  let o = window;
  for (let s = 0; s < r; s++)
    if (o = o[i[s]], !o)
      return;
  o[n](...e);
};
function or(t11, e) {
  return t11 && e ? Math.sqrt(Math.pow(e.x - t11.x, 2) + Math.pow(e.y - t11.y, 2)) : 0;
}
function t_(t11) {
  let e, i = 0;
  t11.forEach((o) => {
    i += or(o, e), e = o;
  });
  let r = i / 2, n;
  return e = void 0, t11.forEach((o) => {
    if (e && !n) {
      const s = or(o, e);
      if (s < r)
        r -= s;
      else {
        const a = r / s;
        a <= 0 && (n = e), a >= 1 && (n = { x: o.x, y: o.y }), a > 0 && a < 1 && (n = {
          x: (1 - a) * e.x + a * o.x,
          y: (1 - a) * e.y + a * o.y
        });
      }
    }
    e = o;
  }), n;
}
function e_(t11) {
  return t11.length === 1 ? t11[0] : t_(t11);
}
var i_ = (t11, e, i) => {
  let r;
  b.info(`our points ${JSON.stringify(e)}`), e[0] !== i && (e = e.reverse());
  let o = 25, s;
  r = void 0, e.forEach((c) => {
    if (r && !s) {
      const u = or(c, r);
      if (u < o)
        o -= u;
      else {
        const g = o / u;
        g <= 0 && (s = r), g >= 1 && (s = { x: c.x, y: c.y }), g > 0 && g < 1 && (s = {
          x: (1 - g) * r.x + g * c.x,
          y: (1 - g) * r.y + g * c.y
        });
      }
    }
    r = c;
  });
  const a = t11 ? 10 : 5, l = Math.atan2(e[0].y - s.y, e[0].x - s.x), h = { x: 0, y: 0 };
  return h.x = Math.sin(l) * a + (e[0].x + s.x) / 2, h.y = -Math.cos(l) * a + (e[0].y + s.y) / 2, h;
};
function r_(t11, e, i) {
  let r = JSON.parse(JSON.stringify(i)), n;
  b.info("our points", r), e !== "start_left" && e !== "start_right" && (r = r.reverse()), r.forEach((u) => {
    n = u;
  });
  let s = 25 + t11, a;
  n = void 0, r.forEach((u) => {
    if (n && !a) {
      const g = or(u, n);
      if (g < s)
        s -= g;
      else {
        const p = s / g;
        p <= 0 && (a = n), p >= 1 && (a = { x: u.x, y: u.y }), p > 0 && p < 1 && (a = {
          x: (1 - p) * n.x + p * u.x,
          y: (1 - p) * n.y + p * u.y
        });
      }
    }
    n = u;
  });
  const l = 10 + t11 * 0.5, h = Math.atan2(r[0].y - a.y, r[0].x - a.x), c = { x: 0, y: 0 };
  return c.x = Math.sin(h) * l + (r[0].x + a.x) / 2, c.y = -Math.cos(h) * l + (r[0].y + a.y) / 2, e === "start_left" && (c.x = Math.sin(h + Math.PI) * l + (r[0].x + a.x) / 2, c.y = -Math.cos(h + Math.PI) * l + (r[0].y + a.y) / 2), e === "end_right" && (c.x = Math.sin(h - Math.PI) * l + (r[0].x + a.x) / 2 - 5, c.y = -Math.cos(h - Math.PI) * l + (r[0].y + a.y) / 2 - 5), e === "end_left" && (c.x = Math.sin(h) * l + (r[0].x + a.x) / 2 - 5, c.y = -Math.cos(h) * l + (r[0].y + a.y) / 2 - 5), c;
}
function n_(t11) {
  let e = "", i = "";
  for (const r of t11)
    r !== void 0 && (r.startsWith("color:") || r.startsWith("text-align:") ? i = i + r + ";" : e = e + r + ";");
  return { style: e, labelStyle: i };
}
var ds = 0;
var o_ = () => (ds++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + ds);
function s_(t11) {
  let e = "";
  const i = "0123456789abcdef", r = i.length;
  for (let n = 0; n < t11; n++)
    e += i.charAt(Math.floor(Math.random() * r));
  return e;
}
var a_ = (t11) => s_(t11.length);
var l_ = function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: "start",
    style: "#666",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0,
    valign: void 0
  };
};
var h_ = function(t11, e) {
  const i = e.text.replace(zn.lineBreakRegex, " "), [, r] = Kn(e.fontSize), n = t11.append("text");
  n.attr("x", e.x), n.attr("y", e.y), n.style("text-anchor", e.anchor), n.style("font-family", e.fontFamily), n.style("font-size", r), n.style("font-weight", e.fontWeight), n.attr("fill", e.fill), e.class !== void 0 && n.attr("class", e.class);
  const o = n.append("tspan");
  return o.attr("x", e.x + e.textMargin * 2), o.attr("fill", e.fill), o.text(i), n;
};
var c_ = oi(
  (t11, e, i) => {
    if (!t11 || (i = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      i
    ), zn.lineBreakRegex.test(t11)))
      return t11;
    const r = t11.split(" "), n = [];
    let o = "";
    return r.forEach((s, a) => {
      const l = sr(`${s} `, i), h = sr(o, i);
      if (l > e) {
        const { hyphenatedStrings: g, remainingWord: p } = u_(s, e, "-", i);
        n.push(o, ...g), o = p;
      } else
        h + l >= e ? (n.push(o), o = s) : o = [o, s].filter(Boolean).join(" ");
      a + 1 === r.length && n.push(o);
    }), n.filter((s) => s !== "").join(i.joinWith);
  },
  (t11, e, i) => `${t11}${e}${i.fontSize}${i.fontWeight}${i.fontFamily}${i.joinWith}`
);
var u_ = oi(
  (t11, e, i = "-", r) => {
    r = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      r
    );
    const n = [...t11], o = [];
    let s = "";
    return n.forEach((a, l) => {
      const h = `${s}${a}`;
      if (sr(h, r) >= e) {
        const u = l + 1, g = n.length === u, p = `${h}${i}`;
        o.push(g ? h : p), s = "";
      } else
        s = h;
    }), { hyphenatedStrings: o, remainingWord: s };
  },
  (t11, e, i = "-", r) => `${t11}${e}${i}${r.fontSize}${r.fontWeight}${r.fontFamily}`
);
function f_(t11, e) {
  return e = Object.assign(
    { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 15 },
    e
  ), Xn(t11, e).height;
}
function sr(t11, e) {
  return e = Object.assign({ fontSize: 12, fontWeight: 400, fontFamily: "Arial" }, e), Xn(t11, e).width;
}
var Xn = oi(
  (t11, e) => {
    e = Object.assign({ fontSize: 12, fontWeight: 400, fontFamily: "Arial" }, e);
    const { fontSize: i, fontFamily: r, fontWeight: n } = e;
    if (!t11)
      return { width: 0, height: 0 };
    const [, o] = Kn(i), s = ["sans-serif", r], a = t11.split(zn.lineBreakRegex), l = [], h = Ct("body");
    if (!h.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const c = h.append("svg");
    for (const g of s) {
      let p = 0;
      const _ = { width: 0, height: 0, lineHeight: 0 };
      for (const T of a) {
        const B = l_();
        B.text = T;
        const A = h_(c, B).style("font-size", o).style("font-weight", n).style("font-family", g), C = (A._groups || A)[0][0].getBBox();
        if (C.width === 0 && C.height === 0)
          throw new Error("svg element not in render tree");
        _.width = Math.round(Math.max(_.width, C.width)), p = Math.round(C.height), _.height += p, _.lineHeight = Math.round(Math.max(_.lineHeight, p));
      }
      l.push(_);
    }
    c.remove();
    const u = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[u];
  },
  (t11, e) => `${t11}${e.fontSize}${e.fontWeight}${e.fontFamily}`
);
var d_ = class {
  constructor(e, i) {
    this.deterministic = e, this.seed = i, this.count = i ? i.length : 0;
  }
  next() {
    return this.deterministic ? this.count++ : Date.now();
  }
};
var vi;
var p_ = function(t11) {
  return vi = vi || document.createElement("div"), t11 = escape(t11).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), vi.innerHTML = t11, unescape(vi.textContent);
};
var we = (t11) => {
  if (b.debug("directiveSanitizer called with", t11), typeof t11 == "object" && (t11.length ? t11.forEach((e) => we(e)) : Object.keys(t11).forEach((e) => {
    b.debug("Checking key", e), e.startsWith("__") && (b.debug("sanitize deleting __ option", e), delete t11[e]), e.includes("proto") && (b.debug("sanitize deleting proto option", e), delete t11[e]), e.includes("constr") && (b.debug("sanitize deleting constr option", e), delete t11[e]), e.includes("themeCSS") && (b.debug("sanitizing themeCss option"), t11[e] = Ii(t11[e])), e.includes("fontFamily") && (b.debug("sanitizing fontFamily option"), t11[e] = Ii(t11[e])), e.includes("altFontFamily") && (b.debug("sanitizing altFontFamily option"), t11[e] = Ii(t11[e])), Bp.includes(e) ? typeof t11[e] == "object" && (b.debug("sanitize deleting object", e), we(t11[e])) : (b.debug("sanitize deleting option", e), delete t11[e]);
  })), t11.themeVariables) {
    const e = Object.keys(t11.themeVariables);
    for (const i of e) {
      const r = t11.themeVariables[i];
      r && r.match && !r.match(/^[\d "#%(),.;A-Za-z]+$/) && (t11.themeVariables[i] = "");
    }
  }
  b.debug("After sanitization", t11);
};
var Ii = (t11) => {
  let e = 0, i = 0;
  for (const r of t11) {
    if (e < i)
      return "{ /* ERROR: Unbalanced CSS */ }";
    r === "{" ? e++ : r === "}" && i++;
  }
  return e !== i ? "{ /* ERROR: Unbalanced CSS */ }" : t11;
};
function ml(t11) {
  return "str" in t11;
}
function g_(t11) {
  return t11 instanceof Error ? t11.message : String(t11);
}
var m_ = (t11, e, i, r) => {
  if (!r)
    return;
  const n = t11.node().getBBox();
  t11.append("text").text(r).attr("x", n.x + n.width / 2).attr("y", -i).attr("class", e);
};
var Kn = (t11) => {
  if (typeof t11 == "number")
    return [t11, t11 + "px"];
  const e = parseInt(t11, 10);
  return Number.isNaN(e) ? [void 0, void 0] : t11 === String(e) ? [e, t11 + "px"] : [e, t11];
};
var Di = {
  assignWithDepth: K,
  wrapLabel: c_,
  calculateTextHeight: f_,
  calculateTextWidth: sr,
  calculateTextDimensions: Xn,
  detectInit: X0,
  detectDirective: gl,
  isSubstringInArray: K0,
  interpolateToCurve: Z0,
  calcLabelPosition: e_,
  calcCardinalityPosition: i_,
  calcTerminalLabelPosition: r_,
  formatUrl: J0,
  getStylesFromArray: n_,
  generateId: o_,
  random: a_,
  runFunc: Q0,
  entityDecode: p_,
  initIdGenerator: d_,
  directiveSanitizer: we,
  sanitizeCss: Ii,
  insertTitle: m_,
  parseFontSize: Kn
};
var _l = "comm";
var yl = "rule";
var Cl = "decl";
var __ = "@import";
var y_ = "@keyframes";
var C_ = Math.abs;
var Zn = String.fromCharCode;
function xl(t11) {
  return t11.trim();
}
function mn(t11, e, i) {
  return t11.replace(e, i);
}
function x_(t11, e) {
  return t11.indexOf(e);
}
function Qe(t11, e) {
  return t11.charCodeAt(e) | 0;
}
function ti(t11, e, i) {
  return t11.slice(e, i);
}
function Dt(t11) {
  return t11.length;
}
function bl(t11) {
  return t11.length;
}
function ki(t11, e) {
  return e.push(t11), t11;
}
var vr = 1;
var Be = 1;
var Tl = 0;
var ut = 0;
var z = 0;
var Ae = "";
function Jn(t11, e, i, r, n, o, s) {
  return { value: t11, root: e, parent: i, type: r, props: n, children: o, line: vr, column: Be, length: s, return: "" };
}
function b_() {
  return z;
}
function T_() {
  return z = ut > 0 ? Qe(Ae, --ut) : 0, Be--, z === 10 && (Be = 1, vr--), z;
}
function gt() {
  return z = ut < Tl ? Qe(Ae, ut++) : 0, Be++, z === 10 && (Be = 1, vr++), z;
}
function Jt() {
  return Qe(Ae, ut);
}
function Ni() {
  return ut;
}
function kr(t11, e) {
  return ti(Ae, t11, e);
}
function _n(t11) {
  switch (t11) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function S_(t11) {
  return vr = Be = 1, Tl = Dt(Ae = t11), ut = 0, [];
}
function v_(t11) {
  return Ae = "", t11;
}
function tn(t11) {
  return xl(kr(ut - 1, yn(t11 === 91 ? t11 + 2 : t11 === 40 ? t11 + 1 : t11)));
}
function k_(t11) {
  for (; (z = Jt()) && z < 33; )
    gt();
  return _n(t11) > 2 || _n(z) > 3 ? "" : " ";
}
function w_(t11, e) {
  for (; --e && gt() && !(z < 48 || z > 102 || z > 57 && z < 65 || z > 70 && z < 97); )
    ;
  return kr(t11, Ni() + (e < 6 && Jt() == 32 && gt() == 32));
}
function yn(t11) {
  for (; gt(); )
    switch (z) {
      case t11:
        return ut;
      case 34:
      case 39:
        t11 !== 34 && t11 !== 39 && yn(z);
        break;
      case 40:
        t11 === 41 && yn(t11);
        break;
      case 92:
        gt();
        break;
    }
  return ut;
}
function B_(t11, e) {
  for (; gt() && t11 + z !== 47 + 10; )
    if (t11 + z === 42 + 42 && Jt() === 47)
      break;
  return "/*" + kr(e, ut - 1) + "*" + Zn(t11 === 47 ? t11 : gt());
}
function F_(t11) {
  for (; !_n(Jt()); )
    gt();
  return kr(t11, ut);
}
function L_(t11) {
  return v_(Ri("", null, null, null, [""], t11 = S_(t11), 0, [0], t11));
}
function Ri(t11, e, i, r, n, o, s, a, l) {
  for (var h = 0, c = 0, u = s, g = 0, p = 0, _ = 0, T = 1, B = 1, A = 1, C = 0, F = "", D = n, R = o, V = r, O = F; B; )
    switch (_ = C, C = gt()) {
      case 40:
        if (_ != 108 && Qe(O, u - 1) == 58) {
          x_(O += mn(tn(C), "&", "&\f"), "&\f") != -1 && (A = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += tn(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += k_(_);
        break;
      case 92:
        O += w_(Ni() - 1, 7);
        continue;
      case 47:
        switch (Jt()) {
          case 42:
          case 47:
            ki(A_(B_(gt(), Ni()), e, i), l);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * T:
        a[h++] = Dt(O) * A;
      case 125 * T:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            B = 0;
          case 59 + c:
            p > 0 && Dt(O) - u && ki(p > 32 ? gs(O + ";", r, i, u - 1) : gs(mn(O, " ", "") + ";", r, i, u - 2), l);
            break;
          case 59:
            O += ";";
          default:
            if (ki(V = ps(O, e, i, h, c, n, a, F, D = [], R = [], u), o), C === 123)
              if (c === 0)
                Ri(O, e, V, V, D, o, u, a, R);
              else
                switch (g === 99 && Qe(O, 3) === 110 ? 100 : g) {
                  case 100:
                  case 109:
                  case 115:
                    Ri(t11, V, V, r && ki(ps(t11, V, V, 0, 0, n, a, F, n, D = [], u), R), n, R, u, a, r ? D : R);
                    break;
                  default:
                    Ri(O, V, V, V, [""], R, 0, a, R);
                }
        }
        h = c = p = 0, T = A = 1, F = O = "", u = s;
        break;
      case 58:
        u = 1 + Dt(O), p = _;
      default:
        if (T < 1) {
          if (C == 123)
            --T;
          else if (C == 125 && T++ == 0 && T_() == 125)
            continue;
        }
        switch (O += Zn(C), C * T) {
          case 38:
            A = c > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            a[h++] = (Dt(O) - 1) * A, A = 1;
            break;
          case 64:
            Jt() === 45 && (O += tn(gt())), g = Jt(), c = u = Dt(F = O += F_(Ni())), C++;
            break;
          case 45:
            _ === 45 && Dt(O) == 2 && (T = 0);
        }
    }
  return o;
}
function ps(t11, e, i, r, n, o, s, a, l, h, c) {
  for (var u = n - 1, g = n === 0 ? o : [""], p = bl(g), _ = 0, T = 0, B = 0; _ < r; ++_)
    for (var A = 0, C = ti(t11, u + 1, u = C_(T = s[_])), F = t11; A < p; ++A)
      (F = xl(T > 0 ? g[A] + " " + C : mn(C, /&\f/g, g[A]))) && (l[B++] = F);
  return Jn(t11, e, i, n === 0 ? yl : a, l, h, c);
}
function A_(t11, e, i) {
  return Jn(t11, e, i, _l, Zn(b_()), ti(t11, 2, -2), 0);
}
function gs(t11, e, i, r) {
  return Jn(t11, e, i, Cl, ti(t11, 0, r), ti(t11, r + 1, -1), r);
}
function Cn(t11, e) {
  for (var i = "", r = bl(t11), n = 0; n < r; n++)
    i += e(t11[n], n, t11, e) || "";
  return i;
}
function E_(t11, e, i, r) {
  switch (t11.type) {
    case __:
    case Cl:
      return t11.return = t11.return || t11.value;
    case _l:
      return "";
    case y_:
      return t11.return = t11.value + "{" + Cn(t11.children, r) + "}";
    case yl:
      t11.value = t11.props.join(",");
  }
  return Dt(i = Cn(t11.children, r)) ? t11.return = t11.value + "{" + i + "}" : "";
}
var ms = "10.2.0";
var Sl = "c4";
var M_ = (t11) => t11.match(/^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/) !== null;
var O_ = async () => {
  const { diagram: t11 } = await import("./c4Diagram-1aeee79c-PDVTCKMO.js");
  return { id: Sl, diagram: t11 };
};
var $_ = {
  id: Sl,
  detector: M_,
  loader: O_
};
var I_ = $_;
var vl = "flowchart";
var D_ = (t11, e) => {
  var i, r;
  return ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" || ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? false : t11.match(/^\s*graph/) !== null;
};
var N_ = async () => {
  const { diagram: t11 } = await import("./flowDiagram-1d5ecf94-DM77RCQP.js");
  return { id: vl, diagram: t11 };
};
var R_ = {
  id: vl,
  detector: D_,
  loader: N_
};
var q_ = R_;
var kl = "flowchart-v2";
var P_ = (t11, e) => {
  var i, r, n;
  return ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-d3" || ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? false : t11.match(/^\s*graph/) !== null && ((n = e == null ? void 0 : e.flowchart) == null ? void 0 : n.defaultRenderer) === "dagre-wrapper" ? true : t11.match(/^\s*flowchart/) !== null;
};
var z_ = async () => {
  const { diagram: t11 } = await import("./flowDiagram-v2-a232e201-FGP2YLOK.js");
  return { id: kl, diagram: t11 };
};
var W_ = {
  id: kl,
  detector: P_,
  loader: z_
};
var H_ = W_;
var wl = "er";
var j_ = (t11) => t11.match(/^\s*erDiagram/) !== null;
var U_ = async () => {
  const { diagram: t11 } = await import("./erDiagram-6e9c0e5f-EWWDRJIP.js");
  return { id: wl, diagram: t11 };
};
var Y_ = {
  id: wl,
  detector: j_,
  loader: U_
};
var G_ = Y_;
var Bl = "gitGraph";
var V_ = (t11) => t11.match(/^\s*gitGraph/) !== null;
var X_ = async () => {
  const { diagram: t11 } = await import("./gitGraphDiagram-55446347-B2UVQ3LI.js");
  return { id: Bl, diagram: t11 };
};
var K_ = {
  id: Bl,
  detector: V_,
  loader: X_
};
var Z_ = K_;
var Fl = "gantt";
var J_ = (t11) => t11.match(/^\s*gantt/) !== null;
var Q_ = async () => {
  const { diagram: t11 } = await import("./ganttDiagram-de5cce7c-2Z7ASTDW.js");
  return { id: Fl, diagram: t11 };
};
var ty = {
  id: Fl,
  detector: J_,
  loader: Q_
};
var ey = ty;
var Ll = "info";
var iy = (t11) => t11.match(/^\s*info/) !== null;
var ry = async () => {
  const { diagram: t11 } = await import("./infoDiagram-a4952db5-4NWER7ZS.js");
  return { id: Ll, diagram: t11 };
};
var ny = {
  id: Ll,
  detector: iy,
  loader: ry
};
var oy = ny;
var Al = "pie";
var sy = (t11) => t11.match(/^\s*pie/) !== null;
var ay = async () => {
  const { diagram: t11 } = await import("./pieDiagram-c6456618-MR2ZQ7JQ.js");
  return { id: Al, diagram: t11 };
};
var ly = {
  id: Al,
  detector: sy,
  loader: ay
};
var hy = ly;
var El = "quadrantChart";
var cy = (t11) => t11.match(/^\s*quadrantChart/) !== null;
var uy = async () => {
  const { diagram: t11 } = await import("./quadrantDiagram-f1fd3d51-WM2I7EBC.js");
  return { id: El, diagram: t11 };
};
var fy = {
  id: El,
  detector: cy,
  loader: uy
};
var dy = fy;
var Ml = "requirement";
var py = (t11) => t11.match(/^\s*requirement(Diagram)?/) !== null;
var gy = async () => {
  const { diagram: t11 } = await import("./requirementDiagram-128084d2-3B6BSH2U.js");
  return { id: Ml, diagram: t11 };
};
var my = {
  id: Ml,
  detector: py,
  loader: gy
};
var _y = my;
var Ol = "sequence";
var yy = (t11) => t11.match(/^\s*sequenceDiagram/) !== null;
var Cy = async () => {
  const { diagram: t11 } = await import("./sequenceDiagram-0cbbfffa-74VMMLFV.js");
  return { id: Ol, diagram: t11 };
};
var xy = {
  id: Ol,
  detector: yy,
  loader: Cy
};
var by = xy;
var $l = "class";
var Ty = (t11, e) => {
  var i;
  return ((i = e == null ? void 0 : e.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? false : t11.match(/^\s*classDiagram/) !== null;
};
var Sy = async () => {
  const { diagram: t11 } = await import("./classDiagram-bbe85371-CRB4ZC23.js");
  return { id: $l, diagram: t11 };
};
var vy = {
  id: $l,
  detector: Ty,
  loader: Sy
};
var ky = vy;
var Il = "classDiagram";
var wy = (t11, e) => {
  var i;
  return t11.match(/^\s*classDiagram/) !== null && ((i = e == null ? void 0 : e.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? true : t11.match(/^\s*classDiagram-v2/) !== null;
};
var By = async () => {
  const { diagram: t11 } = await import("./classDiagram-v2-1c2c680d-4FNCMP7I.js");
  return { id: Il, diagram: t11 };
};
var Fy = {
  id: Il,
  detector: wy,
  loader: By
};
var Ly = Fy;
var Dl = "state";
var Ay = (t11, e) => {
  var i;
  return ((i = e == null ? void 0 : e.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? false : t11.match(/^\s*stateDiagram/) !== null;
};
var Ey = async () => {
  const { diagram: t11 } = await import("./stateDiagram-84937bea-3DO2C2D5.js");
  return { id: Dl, diagram: t11 };
};
var My = {
  id: Dl,
  detector: Ay,
  loader: Ey
};
var Oy = My;
var Nl = "stateDiagram";
var $y = (t11, e) => {
  var i, r;
  return !!(t11.match(/^\s*stateDiagram-v2/) !== null || t11.match(/^\s*stateDiagram/) && ((i = e == null ? void 0 : e.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" || t11.match(/^\s*stateDiagram/) && ((r = e == null ? void 0 : e.state) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper");
};
var Iy = async () => {
  const { diagram: t11 } = await import("./stateDiagram-v2-95cd6741-CTIGP3V5.js");
  return { id: Nl, diagram: t11 };
};
var Dy = {
  id: Nl,
  detector: $y,
  loader: Iy
};
var Ny = Dy;
var Rl = "journey";
var Ry = (t11) => t11.match(/^\s*journey/) !== null;
var qy = async () => {
  const { diagram: t11 } = await import("./journeyDiagram-e9f7e166-2M4HVZYY.js");
  return { id: Rl, diagram: t11 };
};
var Py = {
  id: Rl,
  detector: Ry,
  loader: qy
};
var zy = Py;
var Wy = () => "";
var Hy = Wy;
var jy = function() {
};
var Uy = (t11, e, i) => {
  try {
    b.debug(`Renering svg for syntax error
`);
    const r = Ct("#" + e), n = r.append("g");
    n.append("path").attr("class", "error-icon").attr(
      "d",
      "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
    ), n.append("path").attr("class", "error-icon").attr(
      "d",
      "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
    ), n.append("path").attr("class", "error-icon").attr(
      "d",
      "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
    ), n.append("path").attr("class", "error-icon").attr(
      "d",
      "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
    ), n.append("path").attr("class", "error-icon").attr(
      "d",
      "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
    ), n.append("path").attr("class", "error-icon").attr(
      "d",
      "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
    ), n.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), n.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text("mermaid version " + i), r.attr("height", 100), r.attr("width", 500), r.attr("viewBox", "768 0 912 512");
  } catch (r) {
    b.error("Error while rendering info diagram"), b.error(g_(r));
  }
};
var ql = {
  setConf: jy,
  draw: Uy
};
var Yy = {
  db: {
    clear: () => {
    }
  },
  styles: Hy,
  renderer: ql,
  parser: {
    parser: { yy: {} },
    parse: () => {
    }
  },
  init: () => {
  }
};
var Gy = Yy;
var Pl = "flowchart-elk";
var Vy = (t11, e) => {
  var i;
  return (
    // If diagram explicitly states flowchart-elk
    !!(t11.match(/^\s*flowchart-elk/) || // If a flowchart/graph diagram has their default renderer set to elk
    t11.match(/^\s*flowchart|graph/) && ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "elk")
  );
};
var Xy = async () => {
  const { diagram: t11 } = await import("./flowchart-elk-definition-de178c98-4T6HQ2L2.js");
  return { id: Pl, diagram: t11 };
};
var Ky = {
  id: Pl,
  detector: Vy,
  loader: Xy
};
var Zy = Ky;
var zl = "timeline";
var Jy = (t11) => t11.match(/^\s*timeline/) !== null;
var Qy = async () => {
  const { diagram: t11 } = await import("./timeline-definition-a4c404a4-NXMCU7XR.js");
  return { id: zl, diagram: t11 };
};
var tC = {
  id: zl,
  detector: Jy,
  loader: Qy
};
var eC = tC;
var Wl = "mindmap";
var iC = (t11) => t11.match(/^\s*mindmap/) !== null;
var rC = async () => {
  const { diagram: t11 } = await import("./mindmap-definition-f15622b9-XZE3BU2M.js");
  return { id: Wl, diagram: t11 };
};
var nC = {
  id: Wl,
  detector: iC,
  loader: rC
};
var oC = nC;
var _s = false;
var Qn = () => {
  _s || (_s = true, ir("error", Gy, (t11) => t11.toLowerCase().trim() === "error"), ir(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: () => {
        }
      },
      styles: {},
      // should never be used
      renderer: {},
      // should never be used
      parser: {
        parser: { yy: {} },
        parse: () => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }
      },
      init: () => null
      // no op
    },
    (t11) => t11.toLowerCase().trimStart().startsWith("---")
  ), hl(
    I_,
    Ly,
    ky,
    G_,
    ey,
    oy,
    hy,
    _y,
    by,
    Zy,
    H_,
    q_,
    oC,
    eC,
    Z_,
    Ny,
    Oy,
    zy,
    dy
  ));
};
var sC = (t11) => t11.trimStart().replace(/^\s*%%(?!{)[^\n]+\n?/gm, "");
var Hl = class {
  constructor(e) {
    var o, s;
    this.text = e, this.type = "graph", this.text += `
`;
    const i = Et();
    try {
      this.type = br(e, i);
    } catch (a) {
      this.type = "error", this.detectError = a;
    }
    const r = Vn(this.type);
    b.debug("Type " + this.type), this.db = r.db, (s = (o = this.db).clear) == null || s.call(o), this.renderer = r.renderer, this.parser = r.parser;
    const n = this.parser.parse.bind(this.parser);
    this.parser.parse = (a) => n(sC(ym(a, this.db))), this.parser.parser.yy = this.db, r.init && (r.init(i), b.info("Initialized diagram " + this.type, i)), this.parse();
  }
  parse() {
    var e, i;
    if (this.detectError)
      throw this.detectError;
    (i = (e = this.db).clear) == null || i.call(e), this.parser.parse(this.text);
  }
  async render(e, i) {
    await this.renderer.draw(this.text, e, i, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
};
var to = async (t11) => {
  const e = br(t11, Et());
  try {
    Vn(e);
  } catch {
    const r = Hm(e);
    if (!r)
      throw new ll(`Diagram ${e} not found.`);
    const { id: n, diagram: o } = await r();
    ir(n, o);
  }
  return new Hl(t11);
};
var xn = [];
var yb = (t11) => {
  xn.push(t11);
};
var aC = () => {
  xn.forEach((t11) => {
    t11();
  }), xn = [];
};
var lC = Object.prototype;
function jl(t11) {
  var e = t11 && t11.constructor, i = typeof e == "function" && e.prototype || lC;
  return t11 === i;
}
function hC(t11, e) {
  return function(i) {
    return t11(e(i));
  };
}
var cC = hC(Object.keys, Object);
var uC = cC;
var fC = Object.prototype;
var dC = fC.hasOwnProperty;
function pC(t11) {
  if (!jl(t11))
    return uC(t11);
  var e = [];
  for (var i in Object(t11))
    dC.call(t11, i) && i != "constructor" && e.push(i);
  return e;
}
var gC = Fe(zt, "DataView");
var bn = gC;
var mC = Fe(zt, "Promise");
var Tn = mC;
var _C = Fe(zt, "Set");
var Sn = _C;
var yC = Fe(zt, "WeakMap");
var vn = yC;
var ys = "[object Map]";
var CC = "[object Object]";
var Cs = "[object Promise]";
var xs = "[object Set]";
var bs = "[object WeakMap]";
var Ts = "[object DataView]";
var xC = ie(bn);
var bC = ie(nr);
var TC = ie(Tn);
var SC = ie(Sn);
var vC = ie(vn);
var Gt = ni;
(bn && Gt(new bn(new ArrayBuffer(1))) != Ts || nr && Gt(new nr()) != ys || Tn && Gt(Tn.resolve()) != Cs || Sn && Gt(new Sn()) != xs || vn && Gt(new vn()) != bs) && (Gt = function(t11) {
  var e = ni(t11), i = e == CC ? t11.constructor : void 0, r = i ? ie(i) : "";
  if (r)
    switch (r) {
      case xC:
        return Ts;
      case bC:
        return ys;
      case TC:
        return Cs;
      case SC:
        return xs;
      case vC:
        return bs;
    }
  return e;
});
var kC = Gt;
function eo(t11) {
  return t11 != null && typeof t11 == "object";
}
var wC = "[object Arguments]";
function Ss(t11) {
  return eo(t11) && ni(t11) == wC;
}
var Ul = Object.prototype;
var BC = Ul.hasOwnProperty;
var FC = Ul.propertyIsEnumerable;
var LC = Ss(function() {
  return arguments;
}()) ? Ss : function(t11) {
  return eo(t11) && BC.call(t11, "callee") && !FC.call(t11, "callee");
};
var AC = LC;
var EC = Array.isArray;
var MC = EC;
var OC = 9007199254740991;
function Yl(t11) {
  return typeof t11 == "number" && t11 > -1 && t11 % 1 == 0 && t11 <= OC;
}
function $C(t11) {
  return t11 != null && Yl(t11.length) && !pl(t11);
}
function IC() {
  return false;
}
var Gl = typeof exports == "object" && exports && !exports.nodeType && exports;
var vs = Gl && typeof module == "object" && module && !module.nodeType && module;
var DC = vs && vs.exports === Gl;
var ks = DC ? zt.Buffer : void 0;
var NC = ks ? ks.isBuffer : void 0;
var RC = NC || IC;
var qC = RC;
var PC = "[object Arguments]";
var zC = "[object Array]";
var WC = "[object Boolean]";
var HC = "[object Date]";
var jC = "[object Error]";
var UC = "[object Function]";
var YC = "[object Map]";
var GC = "[object Number]";
var VC = "[object Object]";
var XC = "[object RegExp]";
var KC = "[object Set]";
var ZC = "[object String]";
var JC = "[object WeakMap]";
var QC = "[object ArrayBuffer]";
var tx = "[object DataView]";
var ex = "[object Float32Array]";
var ix = "[object Float64Array]";
var rx = "[object Int8Array]";
var nx = "[object Int16Array]";
var ox = "[object Int32Array]";
var sx = "[object Uint8Array]";
var ax = "[object Uint8ClampedArray]";
var lx = "[object Uint16Array]";
var hx = "[object Uint32Array]";
var I = {};
I[ex] = I[ix] = I[rx] = I[nx] = I[ox] = I[sx] = I[ax] = I[lx] = I[hx] = true;
I[PC] = I[zC] = I[QC] = I[WC] = I[tx] = I[HC] = I[jC] = I[UC] = I[YC] = I[GC] = I[VC] = I[XC] = I[KC] = I[ZC] = I[JC] = false;
function cx(t11) {
  return eo(t11) && Yl(t11.length) && !!I[ni(t11)];
}
function ux(t11) {
  return function(e) {
    return t11(e);
  };
}
var Vl = typeof exports == "object" && exports && !exports.nodeType && exports;
var je = Vl && typeof module == "object" && module && !module.nodeType && module;
var fx = je && je.exports === Vl;
var en = fx && ul.process;
var dx = function() {
  try {
    var t11 = je && je.require && je.require("util").types;
    return t11 || en && en.binding && en.binding("util");
  } catch {
  }
}();
var ws = dx;
var Bs = ws && ws.isTypedArray;
var px = Bs ? ux(Bs) : cx;
var gx = px;
var mx = "[object Map]";
var _x = "[object Set]";
var yx = Object.prototype;
var Cx = yx.hasOwnProperty;
function qi(t11) {
  if (t11 == null)
    return true;
  if ($C(t11) && (MC(t11) || typeof t11 == "string" || typeof t11.splice == "function" || qC(t11) || gx(t11) || AC(t11)))
    return !t11.length;
  var e = kC(t11);
  if (e == mx || e == _x)
    return !t11.size;
  if (jl(t11))
    return !pC(t11).length;
  for (var i in t11)
    if (Cx.call(t11, i))
      return false;
  return true;
}
var xx = "graphics-document document";
function bx(t11, e) {
  t11.attr("role", xx), qi(e) || t11.attr("aria-roledescription", e);
}
function Tx(t11, e, i, r) {
  if (t11.insert !== void 0)
    if (e || i) {
      if (i) {
        const n = "chart-desc-" + r;
        t11.attr("aria-describedby", n), t11.insert("desc", ":first-child").attr("id", n).text(i);
      }
      if (e) {
        const n = "chart-title-" + r;
        t11.attr("aria-labelledby", n), t11.insert("title", ":first-child").attr("id", n).text(e);
      }
    } else
      return;
}
var Xl = [
  "graph",
  "flowchart",
  "flowchart-v2",
  "flowchart-elk",
  "stateDiagram",
  "stateDiagram-v2"
];
var Sx = 5e4;
var vx = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa";
var kx = "sandbox";
var wx = "loose";
var Bx = "http://www.w3.org/2000/svg";
var Fx = "http://www.w3.org/1999/xlink";
var Lx = "http://www.w3.org/1999/xhtml";
var Ax = "100%";
var Ex = "100%";
var Mx = "border:0;margin:0;";
var Ox = "margin:0";
var $x = "allow-top-navigation-by-user-activation allow-popups";
var Ix = 'The "iframe" tag is not supported by your browser.';
var Dx = ["foreignobject"];
var Nx = ["dominant-baseline"];
async function Rx(t11, e) {
  Qn();
  try {
    (await to(t11)).parse();
  } catch (i) {
    if (e != null && e.suppressErrors)
      return false;
    throw i;
  }
  return true;
}
var qx = function(t11) {
  let e = t11;
  return e = e.replace(/style.*:\S*#.*;/g, function(i) {
    return i.substring(0, i.length - 1);
  }), e = e.replace(/classDef.*:\S*#.*;/g, function(i) {
    return i.substring(0, i.length - 1);
  }), e = e.replace(/#\w+;/g, function(i) {
    const r = i.substring(1, i.length - 1);
    return /^\+?\d+$/.test(r) ? "ﬂ°°" + r + "¶ß" : "ﬂ°" + r + "¶ß";
  }), e;
};
var Px = function(t11) {
  return t11.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
};
var Fs = (t11, e, i = []) => `
.${t11} ${e} { ${i.join(" !important; ")} !important; }`;
var zx = (t11, e, i = {}) => {
  var n;
  let r = "";
  if (t11.themeCSS !== void 0 && (r += `
${t11.themeCSS}`), t11.fontFamily !== void 0 && (r += `
:root { --mermaid-font-family: ${t11.fontFamily}}`), t11.altFontFamily !== void 0 && (r += `
:root { --mermaid-alt-font-family: ${t11.altFontFamily}}`), !qi(i) && Xl.includes(e)) {
    const l = t11.htmlLabels || ((n = t11.flowchart) == null ? void 0 : n.htmlLabels) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    for (const h in i) {
      const c = i[h];
      qi(c.styles) || l.forEach((u) => {
        r += Fs(c.id, u, c.styles);
      }), qi(c.textStyles) || (r += Fs(c.id, "tspan", c.textStyles));
    }
  }
  return r;
};
var Wx = (t11, e, i, r) => {
  const n = zx(t11, e, i), o = Am(e, n, t11.themeVariables);
  return Cn(L_(`${r}{${o}}`), E_);
};
var Hx = (t11 = "", e, i) => {
  let r = t11;
  return !i && !e && (r = r.replace(/marker-end="url\(.*?#/g, 'marker-end="url(#')), r = Px(r), r = r.replace(/<br>/g, "<br/>"), r;
};
var jx = (t11 = "", e) => {
  const i = e ? e.viewBox.baseVal.height + "px" : Ex, r = btoa('<body style="' + Ox + '">' + t11 + "</body>");
  return `<iframe style="width:${Ax};height:${i};${Mx}" src="data:text/html;base64,${r}" sandbox="${$x}">
  ${Ix}
</iframe>`;
};
var Ls = (t11, e, i, r, n) => {
  const o = t11.append("div");
  o.attr("id", i), r && o.attr("style", r);
  const s = o.append("svg").attr("id", e).attr("width", "100%").attr("xmlns", Bx);
  return n && s.attr("xmlns:xlink", n), s.append("g"), t11;
};
function As(t11, e) {
  return t11.append("iframe").attr("id", e).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
var Ux = (t11, e, i, r) => {
  var n, o, s;
  (n = t11.getElementById(e)) == null || n.remove(), (o = t11.getElementById(i)) == null || o.remove(), (s = t11.getElementById(r)) == null || s.remove();
};
var Yx = async function(t11, e, i) {
  var ne, ai, li, hi;
  Qn(), tr();
  const r = Di.detectInit(e);
  r && (we(r), Ka(r));
  const n = Et();
  b.debug(n), e.length > ((n == null ? void 0 : n.maxTextSize) ?? Sx) && (e = vx), e = e.replace(/\r\n?/g, `
`), e = e.replace(
    /<(\w+)([^>]*)>/g,
    (nt, ci, P) => "<" + ci + P.replace(/="([^"]*)"/g, "='$1'") + ">"
  );
  const o = "#" + t11, s = "i" + t11, a = "#" + s, l = "d" + t11, h = "#" + l;
  let c = Ct("body");
  const u = n.securityLevel === kx, g = n.securityLevel === wx, p = n.fontFamily;
  if (i !== void 0) {
    if (i && (i.innerHTML = ""), u) {
      const nt = As(Ct(i), s);
      c = Ct(nt.nodes()[0].contentDocument.body), c.node().style.margin = 0;
    } else
      c = Ct(i);
    Ls(c, t11, l, `font-family: ${p}`, Fx);
  } else {
    if (Ux(document, t11, l, s), u) {
      const nt = As(Ct("body"), s);
      c = Ct(nt.nodes()[0].contentDocument.body), c.node().style.margin = 0;
    } else
      c = Ct("body");
    Ls(c, t11, l);
  }
  e = qx(e);
  let _, T;
  try {
    _ = await to(e);
  } catch (nt) {
    _ = new Hl("error"), T = nt;
  }
  const B = c.select(h).node(), A = _.type, C = B.firstChild, F = C.firstChild, D = Xl.includes(A) ? _.renderer.getClasses(e, _) : {}, R = Wx(
    n,
    A,
    // @ts-ignore convert renderer to TS.
    D,
    o
  ), V = document.createElement("style");
  V.innerHTML = R, C.insertBefore(V, F);
  try {
    await _.renderer.draw(e, t11, ms, _);
  } catch (nt) {
    throw ql.draw(e, t11, ms), nt;
  }
  const O = c.select(`${h} svg`), wr = (ai = (ne = _.db).getAccTitle) == null ? void 0 : ai.call(ne), Br = (hi = (li = _.db).getAccDescription) == null ? void 0 : hi.call(li);
  Vx(A, O, wr, Br), c.select(`[id="${t11}"]`).selectAll("foreignobject > *").attr("xmlns", Lx);
  let H = c.select(h).node().innerHTML;
  if (b.debug("config.arrowMarkerAbsolute", n.arrowMarkerAbsolute), H = Hx(H, u, Ba(n.arrowMarkerAbsolute)), u) {
    const nt = c.select(h + " svg").node();
    H = jx(H, nt);
  } else
    g || (H = Ki.sanitize(H, {
      ADD_TAGS: Dx,
      ADD_ATTR: Nx
    }));
  if (aC(), T)
    throw T;
  const Wt = Ct(u ? a : h).node();
  return Wt && "remove" in Wt && Wt.remove(), {
    svg: H,
    bindFunctions: _.db.bindFunctions
  };
};
function Gx(t11 = {}) {
  var i;
  t11 != null && t11.fontFamily && !((i = t11.themeVariables) != null && i.fontFamily) && (t11.themeVariables || (t11.themeVariables = {}), t11.themeVariables.fontFamily = t11.fontFamily), xm(t11), t11 != null && t11.theme && t11.theme in Lt ? t11.themeVariables = Lt[t11.theme].getThemeVariables(
    t11.themeVariables
  ) : t11 && (t11.themeVariables = Lt.default.getThemeVariables(t11.themeVariables));
  const e = typeof t11 == "object" ? Cm(t11) : Va();
  Bn(e.logLevel), Qn();
}
function Vx(t11, e, i, r) {
  bx(e, t11), Tx(e, i, r, e.attr("id"));
}
var ee = Object.freeze({
  render: Yx,
  parse: Rx,
  parseDirective: sl,
  getDiagramFromText: to,
  initialize: Gx,
  getConfig: Et,
  setConfig: Tm,
  getSiteConfig: Va,
  updateSiteConfig: bm,
  reset: () => {
    tr();
  },
  globalReset: () => {
    tr(Ze);
  },
  defaultConfig: Ze
});
Bn(Et().logLevel);
tr(Et());
var Xx = (t11, e, i) => {
  b.warn(t11), ml(t11) ? (i && i(t11.str, t11.hash), e.push({ ...t11, message: t11.str, error: t11 })) : (i && i(t11), t11 instanceof Error && e.push({
    str: t11.message,
    message: t11.message,
    hash: t11.name,
    error: t11
  }));
};
var Kl = async function(t11 = {
  querySelector: ".mermaid"
}) {
  try {
    await Kx(t11);
  } catch (e) {
    if (ml(e) && b.error(e.str), ht.parseError && ht.parseError(e), !t11.suppressErrors)
      throw b.error("Use the suppressErrors option to suppress these errors"), e;
  }
};
var Kx = async function({ postRenderCallback: t11, querySelector: e, nodes: i } = {
  querySelector: ".mermaid"
}) {
  const r = ee.getConfig();
  b.debug(`${t11 ? "" : "No "}Callback function found`);
  let n;
  if (i)
    n = i;
  else if (e)
    n = document.querySelectorAll(e);
  else
    throw new Error("Nodes and querySelector are both undefined");
  b.debug(`Found ${n.length} diagrams`), (r == null ? void 0 : r.startOnLoad) !== void 0 && (b.debug("Start On Load: " + (r == null ? void 0 : r.startOnLoad)), ee.updateSiteConfig({ startOnLoad: r == null ? void 0 : r.startOnLoad }));
  const o = new Di.initIdGenerator(r.deterministicIds, r.deterministicIDSeed);
  let s;
  const a = [];
  for (const l of Array.from(n)) {
    b.info("Rendering diagram: " + l.id);
    if (l.getAttribute("data-processed"))
      continue;
    l.setAttribute("data-processed", "true");
    const h = `mermaid-${o.next()}`;
    s = l.innerHTML, s = ch(Di.entityDecode(s)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const c = Di.detectInit(s);
    c && b.debug("Detected early reinit: ", c);
    try {
      const { svg: u, bindFunctions: g } = await th(h, s, l);
      l.innerHTML = u, t11 && await t11(h), g && g(l);
    } catch (u) {
      Xx(u, a, ht.parseError);
    }
  }
  if (a.length > 0)
    throw a[0];
};
var Zl = function(t11) {
  ee.initialize(t11);
};
var Zx = async function(t11, e, i) {
  b.warn("mermaid.init is deprecated. Please use run instead."), t11 && Zl(t11);
  const r = { postRenderCallback: i, querySelector: ".mermaid" };
  typeof e == "string" ? r.querySelector = e : e && (e instanceof HTMLElement ? r.nodes = [e] : r.nodes = e), await Kl(r);
};
var Jx = async (t11, {
  lazyLoad: e = true
} = {}) => {
  hl(...t11), e === false && await Wm();
};
var Jl = function() {
  if (ht.startOnLoad) {
    const { startOnLoad: t11 } = ee.getConfig();
    t11 && ht.run().catch((e) => b.error("Mermaid failed to initialize", e));
  }
};
if (typeof document < "u") {
  window.addEventListener("load", Jl, false);
}
var Qx = function(t11) {
  ht.parseError = t11;
};
var ar = [];
var rn = false;
var Ql = async () => {
  if (!rn) {
    for (rn = true; ar.length > 0; ) {
      const t11 = ar.shift();
      if (t11)
        try {
          await t11();
        } catch (e) {
          b.error("Error executing queue", e);
        }
    }
    rn = false;
  }
};
var tb = async (t11, e) => new Promise((i, r) => {
  const n = () => new Promise((o, s) => {
    ee.parse(t11, e).then(
      (a) => {
        o(a), i(a);
      },
      (a) => {
        var l;
        b.error("Error parsing", a), (l = ht.parseError) == null || l.call(ht, a), s(a), r(a);
      }
    );
  });
  ar.push(n), Ql().catch(r);
});
var th = (t11, e, i) => new Promise((r, n) => {
  const o = () => new Promise((s, a) => {
    ee.render(t11, e, i).then(
      (l) => {
        s(l), r(l);
      },
      (l) => {
        var h;
        b.error("Error parsing", l), (h = ht.parseError) == null || h.call(ht, l), a(l), n(l);
      }
    );
  });
  ar.push(o), Ql().catch(n);
});
var ht = {
  startOnLoad: true,
  mermaidAPI: ee,
  parse: tb,
  render: th,
  init: Zx,
  run: Kl,
  registerExternalDiagrams: Jx,
  initialize: Zl,
  parseError: void 0,
  contentLoaded: Jl,
  setParseErrorHandler: Qx,
  detectType: br
};

export {
  ch,
  Ot,
  wi,
  $t,
  ph,
  G,
  b,
  Ds,
  Wh,
  Xs,
  st,
  Ct,
  En,
  Ks,
  ii,
  Ge,
  ku,
  it,
  Mn,
  ib,
  Qs,
  Do,
  It,
  Mu,
  rb,
  nb,
  ob,
  sb,
  ab,
  lb,
  hb,
  Wo,
  Dn,
  Ho,
  cb,
  ub,
  fb,
  Kf,
  Qf,
  Xe,
  Ba,
  jd,
  zn,
  L,
  Tt,
  We,
  ri,
  v,
  w,
  Tp,
  Fp,
  K,
  Ze,
  Tm,
  Et,
  wm,
  Bm,
  Qa,
  tl,
  el,
  il,
  rl,
  nl,
  ol,
  Mm,
  sl,
  al,
  Nm,
  zt,
  rr,
  ni,
  dl,
  pl,
  Fe,
  M0,
  Le,
  nr,
  re,
  oi,
  Z0,
  n_,
  o_,
  a_,
  c_,
  f_,
  sr,
  Kn,
  Di,
  yb,
  jl,
  hC,
  pC,
  Sn,
  kC,
  eo,
  AC,
  MC,
  Yl,
  $C,
  qC,
  ux,
  ws,
  gx,
  qi,
  Px,
  ee,
  ht
};
/*! Bundled license information:

mermaid/dist/mermaid-9357f3d0.js:
  (*! @license DOMPurify 3.0.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.3/LICENSE *)
  (*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT *)
  (*! Check if previously processed *)
  (*!
   * Wait for document loaded before starting the execution
   *)
*/
//# sourceMappingURL=chunk-CZQZAEB4.js.map
