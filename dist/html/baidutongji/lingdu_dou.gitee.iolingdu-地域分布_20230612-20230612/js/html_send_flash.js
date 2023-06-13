function loadedCallback(e) {
    EventRouter.dispatch("onflashLoaded", e)
}

function createImageSuccess(e) {
    EventRouter.dispatch("onflashCreateImageSuccess", e)
}

function hasParent(e, t) {
    var n = arguments;
    if ("string" == typeof t) {
        var i = (T.dom.query(t), !1);
        return T.element(t).each(function (t) {
            i = i || n.callee(e, t)
        }), i
    }
    if (e === t && e === document.body) return !0;
    do {
        if (e === t) return !0;
        if (e === document.body) return !1
    } while (e = e.parentNode);
    return !1
}

var T, baidu = T = baidu || {version: "1.3.9"};
baidu.guid = "$BAIDU$", window[baidu.guid] = window[baidu.guid] || {}, baidu.ajax = baidu.ajax || {}, baidu.fn = baidu.fn || {}, baidu.fn.blank = function () {
}, baidu.ajax.request = function (e, t) {
    function n() {
        if (4 == u.readyState) {
            try {
                var e = u.status
            } catch (t) {
                return void a("failure")
            }
            a(e), a(e >= 200 && 300 > e || 304 == e || 1223 == e ? "success" : "failure"), window.setTimeout(function () {
                u.onreadystatechange = baidu.fn.blank, l && (u = null)
            }, 0)
        }
    }

    function i() {
        if (window.ActiveXObject) try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {
            try {
                return new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
            }
        }
        return window.XMLHttpRequest ? new XMLHttpRequest : void 0
    }

    function a(e) {
        e = "on" + e;
        var t = g[e], n = baidu.ajax[e];
        if (t) if (r && clearTimeout(r), "onsuccess" != e) t(u); else {
            try {
                u.responseText
            } catch (i) {
                return t(u)
            }
            t(u, u.responseText)
        } else if (n) {
            if ("onsuccess" == e) return;
            n(u)
        }
    }

    var r, o, u, s = t || {}, d = s.data || "", l = !(s.async === !1), c = s.username || "", f = s.password || "",
        p = (s.method || "GET").toUpperCase(), h = s.headers || {}, b = s.timeout || 0, g = {};
    for (o in s) g[o] = s[o];
    h["X-Requested-With"] = "XMLHttpRequest";
    try {
        u = i(), "GET" == p && (d && (e += (e.indexOf("?") >= 0 ? "&" : "?") + d, d = null), s.noCache && (e += (e.indexOf("?") >= 0 ? "&" : "?") + "b" + +new Date + "=1")), c ? u.open(p, e, l, c, f) : u.open(p, e, l), l && (u.onreadystatechange = n), "POST" == p && u.setRequestHeader("Content-Type", h["Content-Type"] || "application/x-www-form-urlencoded");
        for (o in h) h.hasOwnProperty(o) && u.setRequestHeader(o, h[o]);
        a("beforerequest"), b && (r = setTimeout(function () {
            u.onreadystatechange = baidu.fn.blank, u.abort(), a("timeout")
        }, b)), u.send(d), l || n()
    } catch (m) {
        a("failure")
    }
    return u
}, baidu.ajax.form = function (e, t) {
    function n(e, t) {
        m.push(e + "=" + t)
    }

    t = t || {};
    var i, a, r, o, u, s, d, l, c, f = e.elements, p = f.length,
        h = (e.getAttribute("method"), e.getAttribute("action")), b = t.replacer || function (e, t) {
            return e
        }, g = {}, m = [];
    for (i in t) t.hasOwnProperty(i) && (g[i] = t[i]);
    for (i = 0; p > i; i++) if (a = f[i], o = a.name, !a.disabled && o) switch (r = a.type, u = a.value, r) {
        case"radio":
        case"checkbox":
            if (!a.checked) break;
        case"textarea":
        case"text":
        case"password":
        case"hidden":
        case"select-one":
            n(o, b(u, o));
            break;
        case"select-multiple":
            for (s = a.options, l = s.length, d = 0; l > d; d++) c = s[d], c.selected && n(o, b(c.value, o))
    }
    return g.data = m.join("&"), g.method = e.getAttribute("method") || "GET", baidu.ajax.request(h, g)
}, baidu.ajax.get = function (e, t) {
    return baidu.ajax.request(e, {onsuccess: t})
}, baidu.ajax.post = function (e, t, n) {
    return baidu.ajax.request(e, {onsuccess: n, method: "POST", data: t})
}, baidu.array = baidu.array || {}, baidu.array.indexOf = function (e, t, n) {
    var i = e.length;
    for (n = 0 | n, 0 > n && (n = Math.max(0, i + n)); i > n; n++) if (n in e && e[n] === t) return n;
    return -1
}, baidu.array.contains = function (e, t) {
    return baidu.array.indexOf(e, t) >= 0
}, baidu.each = baidu.array.forEach = baidu.array.each = function (e, t, n) {
    var i, a, r, o = e.length;
    if ("function" == typeof t) for (r = 0; o > r && (a = e[r], i = t.call(n || e, a, r), i !== !1); r++) ;
    return e
}, baidu.array.empty = function (e) {
    e.length = 0
}, baidu.array.every = function (e, t, n) {
    for (var i = 0, a = e.length; a > i; i++) if (i in e && !t.call(n || e, e[i], i)) return !1;
    return !0
}, baidu.array.filter = function (e, t, n) {
    var i, a, r = [], o = 0, u = e.length;
    if ("function" == typeof t) for (a = 0; u > a; a++) i = e[a], !0 === t.call(n || e, i, a) && (r[o++] = i);
    return r
}, baidu.array.find = function (e, t) {
    var n, i, a = e.length;
    if ("function" == typeof t) for (i = 0; a > i; i++) if (n = e[i], !0 === t.call(e, n, i)) return n;
    return null
}, baidu.array.hash = function (e, t) {
    for (var n = {}, i = t && t.length, a = 0, r = e.length; r > a; a++) n[e[a]] = i && i > a ? t[a] : !0;
    return n
}, baidu.array.lastIndexOf = function (e, t, n) {
    var i = e.length;
    for (n = 0 | n, (!n || n >= i) && (n = i - 1), 0 > n && (n += i); n >= 0; n--) if (n in e && e[n] === t) return n;
    return -1
}, baidu.array.map = function (e, t, n) {
    for (var i = [], a = 0, r = e.length; r > a; a++) i[a] = t.call(n || e, e[a], a);
    return i
}, baidu.array.reduce = function (e, t, n) {
    var i = 0, a = e.length, r = 0;
    if (arguments.length < 3) {
        for (; a > i; i++) {
            n = e[i++], r = 1;
            break
        }
        if (!r) return
    }
    for (; a > i; i++) i in e && (n = t(n, e[i], i, e));
    return n
}, baidu.array.remove = function (e, t) {
    for (var n = e.length; n--;) n in e && e[n] === t && e.splice(n, 1);
    return e
}, baidu.array.removeAt = function (e, t) {
    return e.splice(t, 1)[0]
}, baidu.array.some = function (e, t, n) {
    for (var i = 0, a = e.length; a > i; i++) if (i in e && t.call(n || e, e[i], i)) return !0;
    return !1
}, baidu.array.unique = function (e, t) {
    var n, i, a = e.length, r = e.slice(0);
    for ("function" != typeof t && (t = function (e, t) {
        return e === t
    }); --a > 0;) for (i = r[a], n = a; n--;) if (t(i, r[n])) {
        r.splice(a, 1);
        break
    }
    return r
}, baidu.async = baidu.async || {}, baidu.object = baidu.object || {}, baidu.extend = baidu.object.extend = function (e, t) {
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    return e
}, baidu.lang = baidu.lang || {}, baidu.lang.isFunction = function (e) {
    return "[object Function]" == Object.prototype.toString.call(e)
}, baidu.async._isDeferred = function (e) {
    var t = baidu.lang.isFunction;
    return e && t(e.success) && t(e.then) && t(e.fail) && t(e.cancel)
}, baidu.async.Deferred = function () {
    function e() {
        if (!t._cancelled && !t._firing) {
            if (t._nextDeferred) return void t._nextDeferred.then(t._resolveChain[0], t._rejectChain[0]);
            t._firing = 1;
            for (var e = t._isError ? t._rejectChain : t._resolveChain, n = t._result[t._isError ? 1 : 0]; e[0] && !t._cancelled;) try {
                var i = e.shift().call(t, n);
                baidu.async._isDeferred(i) && (t._nextDeferred = i, [].push.apply(i._resolveChain, t._resolveChain), [].push.apply(i._rejectChain, t._rejectChain), e = t._resolveChain = [], t._rejectChain = [])
            } catch (a) {
                throw a
            } finally {
                t._fired = 1, t._firing = 0
            }
        }
    }

    var t = this;
    baidu.extend(t, {
        _fired: 0,
        _firing: 0,
        _cancelled: 0,
        _resolveChain: [],
        _rejectChain: [],
        _result: [],
        _isError: 0
    }), t.resolve = t.fireSuccess = function (n) {
        return t._result[0] = n, e(), t
    }, t.reject = t.fireFail = function (n) {
        return t._result[1] = n, t._isError = 1, e(), t
    }, t.then = function (n, i) {
        return t._resolveChain.push(n), t._rejectChain.push(i), t._fired && e(), t
    }, t.success = function (e) {
        return t.then(e, baidu.fn.blank)
    }, t.fail = function (e) {
        return t.then(baidu.fn.blank, e)
    }, t.cancel = function () {
        t._cancelled = 1
    }
}, baidu.async.get = function (e) {
    var t = new baidu.async.Deferred;
    return baidu.ajax.request(e, {
        onsuccess: function (e, n) {
            t.resolve({xhr: e, responseText: n})
        }, onfailure: function (e) {
            t.reject({xhr: e})
        }
    }), t
}, baidu.async.post = function (e, t) {
    var n = new baidu.async.Deferred;
    return baidu.ajax.request(e, {
        method: "POST", data: t, onsuccess: function (e, t) {
            n.resolve({xhr: e, responseText: t})
        }, onfailure: function (e) {
            n.reject({xhr: e})
        }
    }), n
}, baidu.async.when = function (e, t, n) {
    if (baidu.async._isDeferred(e)) return e.then(t, n), e;
    var i = new baidu.async.Deferred;
    return i.then(t, n).resolve(e), i
}, baidu.browser = baidu.browser || {}, baidu.browser.chrome = /chrome\/(\d+\.\d+)/i.test(navigator.userAgent) ? +RegExp.$1 : void 0, baidu.browser.firefox = /firefox\/(\d+\.\d+)/i.test(navigator.userAgent) ? +RegExp.$1 : void 0, baidu.browser.ie = baidu.ie = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : void 0, baidu.browser.isGecko = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent), baidu.browser.isStrict = "CSS1Compat" == document.compatMode, baidu.browser.isWebkit = /webkit/i.test(navigator.userAgent);
try {
    /(\d+\.\d+)/.test(external.max_version) && (baidu.browser.maxthon = +RegExp.$1)
} catch (e) {
}
baidu.browser.opera = /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent) ? +(RegExp.$6 || RegExp.$2) : void 0, function () {
    var e = navigator.userAgent;
    baidu.browser.safari = /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(e) && !/chrome/i.test(e) ? +(RegExp.$1 || RegExp.$2) : void 0
}(), baidu.cookie = baidu.cookie || {}, baidu.cookie._isValidKey = function (e) {
    return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(e)
}, baidu.cookie.getRaw = function (e) {
    if (baidu.cookie._isValidKey(e)) {
        var t = new RegExp("(^| )" + e + "=([^;]*)(;|$)"), n = t.exec(document.cookie);
        if (n) return n[2] || null
    }
    return null
}, baidu.cookie.get = function (e) {
    var t = baidu.cookie.getRaw(e);
    return "string" == typeof t ? t = decodeURIComponent(t) : null
}, baidu.cookie.setRaw = function (e, t, n) {
    if (baidu.cookie._isValidKey(e)) {
        n = n || {};
        var i = n.expires;
        "number" == typeof n.expires && (i = new Date, i.setTime(i.getTime() + n.expires)), document.cookie = e + "=" + t + (n.path ? "; path=" + n.path : "") + (i ? "; expires=" + i.toGMTString() : "") + (n.domain ? "; domain=" + n.domain : "") + (n.secure ? "; secure" : "")
    }
}, baidu.cookie.remove = function (e, t) {
    t = t || {}, t.expires = new Date(0), baidu.cookie.setRaw(e, "", t)
}, baidu.cookie.set = function (e, t, n) {
    baidu.cookie.setRaw(e, encodeURIComponent(t), n)
}, baidu.date = baidu.date || {}, baidu.number = baidu.number || {}, baidu.number.pad = function (e, t) {
    var n = "", i = 0 > e, a = String(Math.abs(e));
    return a.length < t && (n = new Array(t - a.length + 1).join("0")), (i ? "-" : "") + n + a
}, baidu.date.format = function (e, t) {
    function n(e, n) {
        t = t.replace(e, n)
    }

    if ("string" != typeof t) return e.toString();
    var i = baidu.number.pad, a = e.getFullYear(), r = e.getMonth() + 1, o = e.getDate(), u = e.getHours(),
        s = e.getMinutes(), d = e.getSeconds();
    return n(/yyyy/g, i(a, 4)), n(/yy/g, i(parseInt(a.toString().slice(2), 10), 2)), n(/MM/g, i(r, 2)), n(/M/g, r), n(/dd/g, i(o, 2)), n(/d/g, o), n(/HH/g, i(u, 2)), n(/H/g, u), n(/hh/g, i(u % 12, 2)), n(/h/g, u % 12), n(/mm/g, i(s, 2)), n(/m/g, s), n(/ss/g, i(d, 2)), n(/s/g, d), t
}, baidu.date.parse = function (e) {
    var t = new RegExp("^\\d+(\\-|\\/)\\d+(\\-|\\/)\\d+$");
    if ("string" == typeof e) {
        if (t.test(e) || isNaN(Date.parse(e))) {
            var n = e.split(/ |T/), i = n.length > 1 ? n[1].split(/[^\d]/) : [0, 0, 0], a = n[0].split(/[^\d]/);
            return new Date(a[0] - 0, a[1] - 1, a[2] - 0, i[0] - 0, i[1] - 0, i[2] - 0)
        }
        return new Date(e)
    }
    return new Date
}, baidu.dom = baidu.dom || {}, baidu.dom._styleFilter = baidu.dom._styleFilter || [], baidu.dom._styleFilter[baidu.dom._styleFilter.length] = {
    get: function (e, t) {
        if (/color/i.test(e) && -1 != t.indexOf("rgb(")) {
            var n = t.split(",");
            t = "#";
            for (var i, a = 0; i = n[a]; a++) i = parseInt(i.replace(/[^\d]/gi, ""), 10).toString(16), t += 1 == i.length ? "0" + i : i;
            t = t.toUpperCase()
        }
        return t
    }
}, baidu.dom._styleFilter.filter = function (e, t, n) {
    for (var i, a = 0, r = baidu.dom._styleFilter; i = r[a]; a++) (i = i[n]) && (t = i(e, t));
    return t
}, baidu.dom._styleFilter[baidu.dom._styleFilter.length] = {
    set: function (e, t) {
        return t.constructor != Number || /zIndex|fontWeight|opacity|zoom|lineHeight/i.test(e) || (t += "px"), t
    }
}, baidu.dom._styleFixer = baidu.dom._styleFixer || {}, baidu.dom._styleFixer.display = baidu.browser.ie && baidu.browser.ie < 8 ? {
    set: function (e, t) {
        e = e.style, "inline-block" == t ? (e.display = "inline", e.zoom = 1) : e.display = t
    }
} : baidu.browser.firefox && baidu.browser.firefox < 3 ? {
    set: function (e, t) {
        e.style.display = "inline-block" == t ? "-moz-inline-box" : t
    }
} : null, baidu.dom._styleFixer["float"] = baidu.browser.ie ? "styleFloat" : "cssFloat", baidu.dom._styleFixer.opacity = baidu.browser.ie ? {
    get: function (e) {
        var t = e.style.filter;
        return t && t.indexOf("opacity=") >= 0 ? parseFloat(t.match(/opacity=([^)]*)/)[1]) / 100 + "" : "1"
    }, set: function (e, t) {
        var n = e.style;
        n.filter = (n.filter || "").replace(/alpha\([^\)]*\)/gi, "") + (1 == t ? "" : "alpha(opacity=" + 100 * t + ")"), n.zoom = 1
    }
} : null, baidu.dom.g = function (e) {
    return "string" == typeof e || e instanceof String ? document.getElementById(e) : e && e.nodeName && (1 == e.nodeType || 9 == e.nodeType) ? e : null
}, baidu.g = baidu.G = baidu.dom.g, baidu.lang.isString = function (e) {
    return "[object String]" == Object.prototype.toString.call(e)
}, baidu.isString = baidu.lang.isString, baidu.dom._g = function (e) {
    return baidu.lang.isString(e) ? document.getElementById(e) : e
}, baidu._g = baidu.dom._g, baidu.dom.getDocument = function (e) {
    return e = baidu.dom.g(e), 9 == e.nodeType ? e : e.ownerDocument || e.document
}, baidu.dom.getComputedStyle = function (e, t) {
    e = baidu.dom._g(e);
    var n, i = baidu.dom.getDocument(e);
    return i.defaultView && i.defaultView.getComputedStyle && (n = i.defaultView.getComputedStyle(e, null)) ? n[t] || n.getPropertyValue(t) : ""
}, baidu.string = baidu.string || {}, baidu.string.toCamelCase = function (e) {
    return e.indexOf("-") < 0 && e.indexOf("_") < 0 ? e : e.replace(/[-_][^-_]/g, function (e) {
        return e.charAt(1).toUpperCase()
    })
}, baidu.dom.getStyle = function (e, t) {
    var n = baidu.dom;
    e = n.g(e), t = baidu.string.toCamelCase(t);
    var i = e.style[t] || (e.currentStyle ? e.currentStyle[t] : "") || n.getComputedStyle(e, t);
    if (!i) {
        var a = n._styleFixer[t];
        a && (i = a.get ? a.get(e) : baidu.dom.getStyle(e, a))
    }
    return (a = n._styleFilter) && (i = a.filter(t, i, "get")), i
}, baidu.getStyle = baidu.dom.getStyle, baidu.dom._styleFixer.textOverflow = function () {
    function e(e) {
        var t = e.length;
        return t > 0 ? (t = e[t - 1], e.length--) : t = null, t
    }

    function t(e, t) {
        e[baidu.browser.firefox ? "textContent" : "innerText"] = t
    }

    function n(a, r, o) {
        var u = baidu.browser.ie ? a.currentStyle || a.style : getComputedStyle(a, null), s = u.fontWeight,
            d = "font-family:" + u.fontFamily + ";font-size:" + u.fontSize + ";word-spacing:" + u.wordSpacing + ";font-weight:" + (401 == (parseInt(s) || 0) ? 700 : s) + ";font-style:" + u.fontStyle + ";font-variant:" + u.fontVariant,
            l = i[d];
        if (!l) {
            u = a.appendChild(document.createElement("div")), u.style.cssText = "float:left;" + d, l = i[d] = [];
            for (var c = 0; 256 > c; c++) 32 == c ? u.innerHTML = "&nbsp;" : t(u, String.fromCharCode(c)), l[c] = u.offsetWidth;
            t(u, "一"), l[256] = u.offsetWidth, t(u, "一一"), l[257] = u.offsetWidth - 2 * l[256], l[258] = 3 * l[".".charCodeAt(0)] + 3 * l[257], a.removeChild(u)
        }
        for (var f = a.firstChild, p = l[256], h = l[257], b = l[258], g = [], o = o ? b : 0; f; f = f.nextSibling) if (o > r) a.removeChild(f); else if (3 == f.nodeType) for (var c = 0, m = f.nodeValue, v = m.length; v > c && (u = m.charCodeAt(c), g[g.length] = [r, f, c], r -= (c ? h : 0) + (256 > u ? l[u] : p), !(o > r)); c++) ; else u = f.tagName, "IMG" == u || "TABLE" == u ? (u = f, f = f.previousSibling, a.removeChild(u)) : (g[g.length] = [r, f], r -= f.offsetWidth);
        if (o > r) {
            for (; u = e(g);) if (r = u[0], f = u[1], u = u[2], 3 == f.nodeType) {
                if (r >= b) return f.nodeValue = f.nodeValue.substring(0, u) + "...", !0;
                u || a.removeChild(f)
            } else {
                if (n(f, r, !0)) return !0;
                a.removeChild(f)
            }
            a.innerHTML = ""
        }
    }

    var i = {};
    return {
        get: function (e) {
            var t = baidu.browser, n = dom.getStyle;
            return (t.opera ? n("OTextOverflow") : t.firefox ? e._baiduOverflow : n("textOverflow")) || "clip"
        }, set: function (e, t) {
            var i = baidu.browser;
            if ("TD" == e.tagName || "TH" == e.tagName || i.firefox) if (e._baiduHTML && (e.innerHTML = e._baiduHTML), "ellipsis" == t) {
                e._baiduHTML = e.innerHTML;
                var a = document.createElement("div"), r = e.appendChild(a).offsetWidth;
                e.removeChild(a), n(e, r)
            } else e._baiduHTML = "";
            a = e.style, i.opera ? a.OTextOverflow = t : i.firefox ? e._baiduOverflow = t : a.textOverflow = t
        }
    }
}(), function () {
    var e = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
    baidu.string.trim = function (t) {
        return String(t).replace(e, "")
    }
}(), baidu.trim = baidu.string.trim, baidu.dom.addClass = function (e, t) {
    e = baidu.dom.g(e);
    for (var n = t.split(/\s+/), i = e.className, a = " " + i + " ", r = 0, o = n.length; o > r; r++) a.indexOf(" " + n[r] + " ") < 0 && (i += (i ? " " : "") + n[r]);
    return e.className = i, e
}, baidu.addClass = baidu.dom.addClass, baidu.dom.children = function (e) {
    e = baidu.dom.g(e);
    for (var t = [], n = e.firstChild; n; n = n.nextSibling) 1 == n.nodeType && t.push(n);
    return t
}, baidu.dom.contains = function (e, t) {
    var n = baidu.dom._g;
    return e = n(e), t = n(t), e.contains ? e != t && e.contains(t) : !!(16 & e.compareDocumentPosition(t))
}, baidu.dom._NAME_ATTRS = function () {
    var e = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    return baidu.browser.ie < 8 ? (e["for"] = "htmlFor", e["class"] = "className") : (e.htmlFor = "for", e.className = "class"), e
}(), baidu.dom.setAttr = function (e, t, n) {
    return e = baidu.dom.g(e), "style" == t ? e.style.cssText = n : (t = baidu.dom._NAME_ATTRS[t] || t, e.setAttribute(t, n)), e
}, baidu.setAttr = baidu.dom.setAttr, baidu.dom.setAttrs = function (e, t) {
    e = baidu.dom.g(e);
    for (var n in t) baidu.dom.setAttr(e, n, t[n]);
    return e
}, baidu.setAttrs = baidu.dom.setAttrs, baidu.dom.create = function (e, t) {
    var n = document.createElement(e), i = t || {};
    return baidu.dom.setAttrs(n, i)
}, function () {
    var e = window[baidu.guid];
    baidu.lang.guid = function () {
        return "TANGRAM__" + (e._counter++).toString(36)
    }, e._counter = e._counter || 1
}(), window[baidu.guid]._instances = window[baidu.guid]._instances || {}, baidu.lang.Class = function (e) {
    this.guid = e || baidu.lang.guid(), window[baidu.guid]._instances[this.guid] = this
}, window[baidu.guid]._instances = window[baidu.guid]._instances || {}, baidu.lang.Class.prototype.dispose = function () {
    delete window[baidu.guid]._instances[this.guid];
    for (var e in this) baidu.lang.isFunction(this[e]) || delete this[e];
    this.disposed = !0
}, baidu.lang.Class.prototype.toString = function () {
    return "[object " + (this._className || "Object") + "]"
}, baidu.lang.Event = function (e, t) {
    this.type = e, this.returnValue = !0, this.target = t || null, this.currentTarget = null
}, baidu.lang.Class.prototype.addEventListener = function (e, t, n) {
    if (baidu.lang.isFunction(t)) {
        !this.__listeners && (this.__listeners = {});
        var i, a = this.__listeners;
        if ("string" == typeof n && n) {
            if (/[^\w\-]/.test(n)) throw"nonstandard key:" + n;
            t.hashCode = n, i = n
        }
        0 != e.indexOf("on") && (e = "on" + e), "object" != typeof a[e] && (a[e] = {}), i = i || baidu.lang.guid(), t.hashCode = i, a[e][i] = t
    }
}, baidu.lang.Class.prototype.removeEventListener = function (e, t) {
    if ("undefined" == typeof t || (!baidu.lang.isFunction(t) || (t = t.hashCode)) && baidu.lang.isString(t)) {
        !this.__listeners && (this.__listeners = {}), 0 != e.indexOf("on") && (e = "on" + e);
        var n = this.__listeners;
        if (n[e]) if ("undefined" != typeof t) n[e][t] && delete n[e][t]; else for (var i in n[e]) delete n[e][i]
    }
}, baidu.lang.Class.prototype.dispatchEvent = function (e, t) {
    baidu.lang.isString(e) && (e = new baidu.lang.Event(e)), !this.__listeners && (this.__listeners = {}), t = t || {};
    for (var n in t) e[n] = t[n];
    var n, i = this.__listeners, a = e.type;
    if (e.target = e.target || this, e.currentTarget = this, 0 != a.indexOf("on") && (a = "on" + a), baidu.lang.isFunction(this[a]) && this[a].apply(this, arguments), "object" == typeof i[a]) for (n in i[a]) i[a][n].apply(this, arguments);
    return e.returnValue
}, baidu.lang.createSingle = function (e) {
    var t = new baidu.lang.Class;
    for (var n in e) t[n] = e[n];
    return t
}, baidu.dom.ddManager = baidu.lang.createSingle({_targetsDroppingOver: {}}), baidu.event = baidu.event || {}, baidu.event._listeners = baidu.event._listeners || [], baidu.event.on = function (e, t, n) {
    t = t.replace(/^on/i, ""), e = baidu.dom._g(e);
    var i, a = function (t) {
        n.call(e, t, e)
    }, r = baidu.event._listeners, o = baidu.event._eventFilter, u = t;
    return t = t.toLowerCase(), o && o[t] && (i = o[t](e, t, a), u = i.type, a = i.listener), e.addEventListener ? e.addEventListener(u, a, !1) : e.attachEvent && e.attachEvent("on" + u, a), r[r.length] = [e, t, n, a, u], e
}, baidu.on = baidu.event.on, baidu.event.un = function (e, t, n) {
    e = baidu.dom._g(e), t = t.replace(/^on/i, "").toLowerCase();
    for (var i, a, r, o = baidu.event._listeners, u = o.length, s = !n; u--;) i = o[u], i[1] !== t || i[0] !== e || !s && i[2] !== n || (a = i[4], r = i[3], e.removeEventListener ? e.removeEventListener(a, r, !1) : e.detachEvent && e.detachEvent("on" + a, r), o.splice(u, 1));
    return e
}, baidu.un = baidu.event.un, baidu.event.preventDefault = function (e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = !1
}, baidu.page = baidu.page || {}, baidu.page.getScrollTop = function () {
    var e = document;
    return window.pageYOffset || e.documentElement.scrollTop || e.body.scrollTop
}, baidu.page.getScrollLeft = function () {
    var e = document;
    return window.pageXOffset || e.documentElement.scrollLeft || e.body.scrollLeft
}, function () {
    baidu.page.getMousePosition = function () {
        return {x: baidu.page.getScrollLeft() + e.x, y: baidu.page.getScrollTop() + e.y}
    };
    var e = {x: 0, y: 0};
    baidu.event.on(document, "onmousemove", function (t) {
        t = window.event || t, e.x = t.clientX, e.y = t.clientY
    })
}(), baidu.dom.getPosition = function (e) {
    e = baidu.dom.g(e);
    var t, n, i = baidu.dom.getDocument(e), a = baidu.browser, r = baidu.dom.getStyle,
        o = (a.isGecko > 0 && i.getBoxObjectFor && "absolute" == r(e, "position") && ("" === e.style.top || "" === e.style.left), {
            left: 0,
            top: 0
        }), u = a.ie && !a.isStrict ? i.body : i.documentElement;
    if (e == u) return o;
    if (e.getBoundingClientRect) {
        n = e.getBoundingClientRect(), o.left = Math.floor(n.left) + Math.max(i.documentElement.scrollLeft, i.body.scrollLeft), o.top = Math.floor(n.top) + Math.max(i.documentElement.scrollTop, i.body.scrollTop), o.left -= i.documentElement.clientLeft, o.top -= i.documentElement.clientTop;
        var s = i.body, d = parseInt(r(s, "borderLeftWidth")), l = parseInt(r(s, "borderTopWidth"));
        a.ie && !a.isStrict && (o.left -= isNaN(d) ? 2 : d, o.top -= isNaN(l) ? 2 : l)
    } else {
        t = e;
        do {
            if (o.left += t.offsetLeft, o.top += t.offsetTop, a.isWebkit > 0 && "fixed" == r(t, "position")) {
                o.left += i.body.scrollLeft, o.top += i.body.scrollTop;
                break
            }
            t = t.offsetParent
        } while (t && t != e);
        for ((a.opera > 0 || a.isWebkit > 0 && "absolute" == r(e, "position")) && (o.top -= i.body.offsetTop), t = e.offsetParent; t && t != i.body;) o.left -= t.scrollLeft, a.opera && "TR" == t.tagName || (o.top -= t.scrollTop), t = t.offsetParent
    }
    return o
}, function () {
    function e(e) {
        baidu.extend(r, e)
    }

    function t() {
        clearInterval(p), r.capture && r.handler.releaseCapture ? r.handler.releaseCapture() : r.capture && window.releaseEvents && window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP), document.body.style.MozUserSelect = l, baidu.event.un(document, "selectstart", i), r.autoStop && baidu.event.un(r.handler, "mouseup", t), r.autoStop && baidu.event.un(window, "mouseup", t), g(r.ondragend) && r.ondragend(a, r)
    }

    function n(e) {
        var t = r.range, n = baidu.page.getMousePosition(), i = d + n.x - o, l = s + n.y - u;
        "object" == typeof t && t && 4 == t.length && (i = Math.max(t[3], i), i = Math.min(t[1] - a.offsetWidth, i), l = Math.max(t[0], l), l = Math.min(t[2] - a.offsetHeight, l)), a.style.top = l + "px", a.style.left = i + "px", c === i && f === l || null === c && null === f || g(r.ondrag) && r.ondrag(a, r), c = i, f = l
    }

    function i(e) {
        return baidu.event.preventDefault(e, !1)
    }

    var a, r, o, u, s, d, l, c, f, p, h, b, g = baidu.lang.isFunction;
    baidu.dom.drag = function (m, v) {
        if (f = c = null, !(a = baidu.dom.g(m))) return !1;
        if (r = baidu.object.extend({
            autoStop: !0,
            capture: !0,
            interval: 16,
            handler: a
        }, v), h = baidu.dom.getPosition(a.offsetParent), b = baidu.dom.getPosition(a), "absolute" == baidu.getStyle(a, "position") ? (s = b.top - (a.offsetParent == document.body ? 0 : h.top), d = b.left - (a.offsetParent == document.body ? 0 : h.left)) : (s = parseFloat(baidu.getStyle(a, "top")) || -parseFloat(baidu.getStyle(a, "bottom")) || 0, d = parseFloat(baidu.getStyle(a, "left")) || -parseFloat(baidu.getStyle(a, "right")) || 0), r.mouseEvent) o = baidu.page.getScrollLeft() + r.mouseEvent.clientX, u = baidu.page.getScrollTop() + r.mouseEvent.clientY; else {
            var y = baidu.page.getMousePosition();
            o = y.x, u = y.y
        }
        return r.autoStop && baidu.event.on(r.handler, "mouseup", t), r.autoStop && baidu.event.on(window, "mouseup", t), baidu.event.on(document, "selectstart", i), r.capture && r.handler.setCapture ? r.handler.setCapture() : r.capture && window.captureEvents && window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP), l = document.body.style.MozUserSelect, document.body.style.MozUserSelect = "none", g(r.ondragstart) && r.ondragstart(a, r), p = setInterval(n, r.interval), {
            stop: t,
            update: e
        }
    }
}(), baidu.dom.setStyle = function (e, t, n) {
    var i, a = baidu.dom;
    return e = a.g(e), t = baidu.string.toCamelCase(t), (i = a._styleFilter) && (n = i.filter(t, n, "set")), i = a._styleFixer[t], i && i.set ? i.set(e, n) : e.style[i || t] = n, e
}, baidu.setStyle = baidu.dom.setStyle, baidu.dom.draggable = function (e, t) {
    function n(n) {
        var i = t.mouseEvent = window.event || n;
        i.button > 1 || baidu.lang.isFunction(t.toggle) && !t.toggle() || ("static" == baidu.dom.getStyle(e, "position") && baidu.dom.setStyle(e, "position", "relative"), baidu.lang.isFunction(t.onbeforedragstart) && t.onbeforedragstart(e), r = baidu.dom.drag(e, t), s.stop = r.stop, s.update = r.update, baidu.event.preventDefault(i))
    }

    t = baidu.object.extend({
        toggle: function () {
            return !0
        }
    }, t || {}), t.autoStop = !0, e = baidu.dom.g(e), t.handler = t.handler || e;
    var i, a, r, o = ["ondragstart", "ondrag", "ondragend"], u = o.length - 1, s = {
        dispose: function () {
            r && r.stop(), baidu.event.un(t.handler, "onmousedown", n), baidu.lang.Class.prototype.dispose.call(s)
        }
    }, d = this;
    if (i = baidu.dom.ddManager) for (; u >= 0; u--) a = o[u], t[a] = function (n) {
        var a = t[n];
        return function () {
            baidu.lang.isFunction(a) && a.apply(d, arguments), i.dispatchEvent(n, {DOM: e})
        }
    }(a);
    return e && baidu.event.on(t.handler, "onmousedown", n), {
        cancel: function () {
            s.dispose()
        }
    }
}, baidu.dom.intersect = function (e, t) {
    var n = baidu.dom.g, i = baidu.dom.getPosition, a = Math.max, r = Math.min;
    e = n(e), t = n(t);
    var o = i(e), u = i(t);
    return a(o.left, u.left) <= r(o.left + e.offsetWidth, u.left + t.offsetWidth) && a(o.top, u.top) <= r(o.top + e.offsetHeight, u.top + t.offsetHeight)
}, baidu.dom.droppable = function (e, t) {
    t = t || {};
    var n = baidu.dom.ddManager, i = baidu.dom.g(e), a = baidu.lang.guid(), r = function (e) {
        var r = n._targetsDroppingOver, o = {trigger: e.DOM, reciever: i};
        baidu.dom.intersect(i, e.DOM) ? r[a] || ("function" == typeof t.ondropover && t.ondropover.call(i, o), n.dispatchEvent("ondropover", o), r[a] = !0) : (r[a] && ("function" == typeof t.ondropout && t.ondropout.call(i, o), n.dispatchEvent("ondropout", o)), delete r[a])
    }, o = function (e) {
        var r = {trigger: e.DOM, reciever: i};
        baidu.dom.intersect(i, e.DOM) && ("function" == typeof t.ondrop && t.ondrop.call(i, r), n.dispatchEvent("ondrop", r)), delete n._targetsDroppingOver[a]
    };
    return n.addEventListener("ondrag", r), n.addEventListener("ondragend", o), {
        cancel: function () {
            n.removeEventListener("ondrag", r), n.removeEventListener("ondragend", o)
        }
    }
}, baidu.dom.empty = function (e) {
    for (e = baidu.dom.g(e); e.firstChild;) e.removeChild(e.firstChild);
    return e
}, baidu.dom._matchNode = function (e, t, n) {
    e = baidu.dom.g(e);
    for (var i = e[n]; i; i = i[t]) if (1 == i.nodeType) return i;
    return null
}, baidu.dom.first = function (e) {
    return baidu.dom._matchNode(e, "nextSibling", "firstChild")
}, baidu.dom.getAttr = function (e, t) {
    return e = baidu.dom.g(e), "style" == t ? e.style.cssText : (t = baidu.dom._NAME_ATTRS[t] || t, e.getAttribute(t))
}, baidu.getAttr = baidu.dom.getAttr, baidu.dom.setStyles = function (e, t) {
    e = baidu.dom.g(e);
    for (var n in t) baidu.dom.setStyle(e, n, t[n]);
    return e
}, baidu.setStyles = baidu.dom.setStyles, baidu.page.getViewHeight = function () {
    var e = document, t = "BackCompat" == e.compatMode ? e.body : e.documentElement;
    return t.clientHeight
}, baidu.page.getViewWidth = function () {
    var e = document, t = "BackCompat" == e.compatMode ? e.body : e.documentElement;
    return t.clientWidth
}, baidu.dom.fixable = function (e, t) {
    function n() {
        return {
            top: "top" == p ? l.y : baidu.page.getViewHeight() - l.y - d.height,
            left: "left" == h ? l.x : baidu.page.getViewWidth() - l.x - d.width
        }
    }

    function i() {
        var e = n();
        c.style.setExpression("left", "eval((document.body.scrollLeft || document.documentElement.scrollLeft) + " + e.left + ") + 'px'"), c.style.setExpression("top", "eval((document.body.scrollTop || document.documentElement.scrollTop) + " + e.top + ") + 'px'")
    }

    function a() {
        var e = {
            position: baidu.getStyle(c, "position"), height: function () {
                var e = baidu.getStyle(c, "height");
                return "auto" != e ? /\d+/.exec(e)[0] : c.offsetHeight
            }(), width: function () {
                var e = baidu.getStyle(c, "width");
                return "auto" != e ? /\d+/.exec(e)[0] : c.offsetWidth
            }()
        };
        return r("top", e), r("left", e), r("bottom", e), r("right", e), e
    }

    function r(e, t) {
        var n;
        "static" == t.position ? t[e] = "" : (n = baidu.getStyle(c, e), t[e] = "auto" == n || "0px" == n ? "" : n)
    }

    function o() {
        if (!g) {
            if (baidu.setStyles(c, {
                top: "",
                left: "",
                bottom: "",
                right: ""
            }), f) baidu.setStyle(c, "position", "absolute"), i(); else {
                var e = {position: "fixed"};
                e["top" == p ? "top" : "bottom"] = l.y + "px", e["left" == h ? "left" : "right"] = l.x + "px", baidu.setStyles(c, e)
            }
            m(), g = !0
        }
    }

    function u() {
        if (g) {
            var e = {
                position: d.position,
                left: "" == d.left ? "auto" : d.left,
                top: "" == d.top ? "auto" : d.top,
                bottom: "" == d.bottom ? "auto" : d.bottom,
                right: "" == d.right ? "auto" : d.right
            };
            f && (c.style.removeExpression("left"), c.style.removeExpression("top")), baidu.setStyles(c, e), y(), g = !1
        }
    }

    function s(e) {
        e && (m = e.onrender || m, v = e.onupdate || v, y = e.onrelease || y, p = e.vertival || "top", h = e.horizontal || "left", baidu.extend(l, e.offset || {}), v())
    }

    var d, l, c = baidu.g(e), f = baidu.browser.ie && baidu.browser.ie <= 7 ? !0 : !1, p = t.vertival || "top",
        h = t.horizontal || "left", b = "undefined" != typeof t.autofix ? t.autofix : !0, g = !1,
        m = t.onrender || new Function, v = t.onupdate || new Function, y = t.onrelease || new Function;
    if (c) return d = a(), l = {
        y: f ? "static" == d.position ? baidu.dom.getPosition(c).top : baidu.dom.getPosition(c).top - baidu.dom.getPosition(c.parentNode).top : c.offsetTop,
        x: f ? "static" == d.position ? baidu.dom.getPosition(c).left : baidu.dom.getPosition(c).left - baidu.dom.getPosition(c.parentNode).left : c.offsetLeft
    }, baidu.extend(l, t.offset || {}), b && o(), {render: o, update: s, release: u}
}, baidu.dom.getAncestorBy = function (e, t) {
    for (e = baidu.dom.g(e); (e = e.parentNode) && 1 == e.nodeType;) if (t(e)) return e;
    return null
}, baidu.dom.getAncestorByClass = function (e, t) {
    for (e = baidu.dom.g(e), t = new RegExp("(^|\\s)" + baidu.string.trim(t) + "(\\s|$)"); (e = e.parentNode) && 1 == e.nodeType;) if (t.test(e.className)) return e;
    return null
}, baidu.dom.getAncestorByTag = function (e, t) {
    for (e = baidu.dom.g(e), t = t.toUpperCase(); (e = e.parentNode) && 1 == e.nodeType;) if (e.tagName == t) return e;
    return null
}, baidu.dom.getParent = function (e) {
    return e = baidu.dom._g(e), e.parentElement || e.parentNode || null
}, baidu.dom.getText = function (e) {
    var t, n, i = "", a = 0;
    if (e = baidu._g(e), 3 === e.nodeType || 4 === e.nodeType) i += e.nodeValue; else if (8 !== e.nodeType) for (t = e.childNodes, n = t.length; n > a; a++) i += baidu.dom.getText(t[a]);
    return i
}, baidu.dom.getWindow = function (e) {
    e = baidu.dom.g(e);
    var t = baidu.dom.getDocument(e);
    return t.parentWindow || t.defaultView || null
}, baidu.dom.hasAttr = function (e, t) {
    e = baidu.g(e);
    var n = e.attributes.getNamedItem(t);
    return !(!n || !n.specified)
}, baidu.dom.hasClass = function (e, t) {
    e = baidu.dom.g(e);
    var n = baidu.string.trim(t).split(/\s+/), i = n.length;
    if (!T.lang.isString(e.className)) return !1;
    for (t = e.className.split(/\s+/).join(" "); i--;) if (!new RegExp("(^| )" + n[i] + "( |$)").test(t)) return !1;
    return !0
}, baidu.dom.hide = function (e) {
    return e = baidu.dom.g(e), e.style.display = "none", e
}, baidu.hide = baidu.dom.hide, baidu.dom.insertAfter = function (e, t) {
    var n, i;
    return n = baidu.dom._g, e = n(e), t = n(t), i = t.parentNode, i && i.insertBefore(e, t.nextSibling), e
}, baidu.dom.insertBefore = function (e, t) {
    var n, i;
    return n = baidu.dom._g, e = n(e), t = n(t), i = t.parentNode, i && i.insertBefore(e, t), e
}, baidu.dom.insertHTML = function (e, t, n) {
    e = baidu.dom.g(e);
    var i, a;
    if (e.insertAdjacentHTML && !baidu.browser.opera) {
        if (/^table|tbody|tr|td$/i.test(e.tagName)) return baidu.dom.insertIntoTable(e.tagName.toLowerCase(), t, e, n);
        e.insertAdjacentHTML(t, n)
    } else i = e.ownerDocument.createRange(), t = t.toUpperCase(), "AFTERBEGIN" == t || "BEFOREEND" == t ? (i.selectNodeContents(e), i.collapse("AFTERBEGIN" == t)) : (a = "BEFOREBEGIN" == t, i[a ? "setStartBefore" : "setEndAfter"](e), i.collapse(a)), i.insertNode(i.createContextualFragment(n));
    return e
},baidu.dom.insertIntoTable = function (e, t, n, i) {
    var a, r, o = null, u = "afterbegin", s = "afterend", d = "beforebegin", l = "beforeend", c = "<table>",
        f = "</table>", p = c + "<tbody>", h = "</tbody>" + f, b = p + "<tr>", g = "</tr>" + h,
        m = function (e, t, n, i) {
            o.innerHTML = [t, n, i].join("");
            for (var a, r = -1, u = o; ++r < e;) u = u.firstChild;
            if (a = u.nextSibling) {
                for (var s = document.createDocumentFragment(); u;) a = u.nextSibling, s.appendChild(u), u = a;
                u = s
            }
            return u
        };
    return o = o || document.createElement("div"), ("td" != e || t != u && t != l) && (/td|tr|tbody/i.test(e) || t != d && t != s) ? (r = t == d ? n : t == s ? n.nextSibling : t == u ? n.firstChild : null, (t == d || t == s) && (n = n.parentNode), a = "td" == e || "tr" == e && (t == l || t == u) ? m(4, b, i, g) : "tbody" == e && (t == l || t == u) || "tr" == e && (t == d || t == s) ? m(3, p, i, h) : m(2, c, i, f), n.insertBefore(a, r), a) : void 0
},baidu.insertHTML = baidu.dom.insertHTML,baidu.dom.last = function (e) {
    return baidu.dom._matchNode(e, "previousSibling", "lastChild")
},baidu.dom.next = function (e) {
    return baidu.dom._matchNode(e, "nextSibling", "nextSibling")
},baidu.dom.prev = function (e) {
    return baidu.dom._matchNode(e, "previousSibling", "previousSibling")
},baidu.string.escapeReg = function (e) {
    return String(e).replace(new RegExp("([.*+?^=!:${}()|[\\]/\\\\])", "g"), "\\$1")
},baidu.dom.q = function (e, t, n) {
    var i, a, r, o, u = [], s = baidu.string.trim;
    if (!(e = s(e))) return u;
    if ("undefined" == typeof t) t = document; else if (t = baidu.dom.g(t), !t) return u;
    if (n && (n = s(n).toUpperCase()), t.getElementsByClassName) for (r = t.getElementsByClassName(e), i = r.length, a = 0; i > a; a++) o = r[a], n && o.tagName != n || (u[u.length] = o); else for (e = new RegExp("(^|\\s)" + baidu.string.escapeReg(e) + "(\\s|$)"), r = n ? t.getElementsByTagName(n) : t.all || t.getElementsByTagName("*"), i = r.length, a = 0; i > a; a++) o = r[a], e.test(o.className) && (u[u.length] = o);
    return u
},baidu.q = baidu.Q = baidu.dom.q,function () {
    function e(e, t, n, a, r, o) {
        for (var u = 0, s = a.length; s > u; u++) {
            var d = a[u];
            if (d) {
                var l = !1;
                for (d = d[e]; d;) {
                    if (d[i] === n) {
                        l = a[d.sizset];
                        break
                    }
                    if (1 !== d.nodeType || o || (d[i] = n, d.sizset = u), d.nodeName.toLowerCase() === t) {
                        l = d;
                        break
                    }
                    d = d[e]
                }
                a[u] = l
            }
        }
    }

    function t(e, t, n, a, r, o) {
        for (var u = 0, s = a.length; s > u; u++) {
            var d = a[u];
            if (d) {
                var l = !1;
                for (d = d[e]; d;) {
                    if (d[i] === n) {
                        l = a[d.sizset];
                        break
                    }
                    if (1 === d.nodeType) if (o || (d[i] = n, d.sizset = u), "string" != typeof t) {
                        if (d === t) {
                            l = !0;
                            break
                        }
                    } else if (c.filter(t, [d]).length > 0) {
                        l = d;
                        break
                    }
                    d = d[e]
                }
                a[u] = l
            }
        }
    }

    var n = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        i = "sizcache" + (Math.random() + "").replace(".", ""), a = 0, r = Object.prototype.toString, o = !1, u = !0,
        s = /\\/g, d = /\r\n/g, l = /\W/;
    [0, 0].sort(function () {
        return u = !1, 0
    });
    var c = function (e, t, i, a) {
        i = i || [], t = t || document;
        var o = t;
        if (1 !== t.nodeType && 9 !== t.nodeType) return [];

        if (!e || "string" != typeof e) return i;
        var u, s, d, l, f, b, g, v, y = !0, T = c.isXML(t), w = [], _ = e;
        do if (n.exec(""), u = n.exec(_), u && (_ = u[3], w.push(u[1]), u[2])) {
            l = u[3];
            break
        } while (u);
        if (w.length > 1 && h.exec(e)) if (2 === w.length && p.relative[w[0]]) s = x(w[0] + w[1], t, a); else for (s = p.relative[w[0]] ? [t] : c(w.shift(), t); w.length;) e = w.shift(), p.relative[e] && (e += w.shift()), s = x(e, s, a); else if (!a && w.length > 1 && 9 === t.nodeType && !T && p.match.ID.test(w[0]) && !p.match.ID.test(w[w.length - 1]) && (f = c.find(w.shift(), t, T), t = f.expr ? c.filter(f.expr, f.set)[0] : f.set[0]), t) for (f = a ? {
            expr: w.pop(),
            set: m(a)
        } : c.find(w.pop(), 1 !== w.length || "~" !== w[0] && "+" !== w[0] || !t.parentNode ? t : t.parentNode, T), s = f.expr ? c.filter(f.expr, f.set) : f.set, w.length > 0 ? d = m(s) : y = !1; w.length;) b = w.pop(), g = b, p.relative[b] ? g = w.pop() : b = "", null == g && (g = t), p.relative[b](d, g, T); else d = w = [];
        if (d || (d = s), d || c.error(b || e), "[object Array]" === r.call(d)) if (y) if (t && 1 === t.nodeType) for (v = 0; null != d[v]; v++) d[v] && (d[v] === !0 || 1 === d[v].nodeType && c.contains(t, d[v])) && i.push(s[v]); else for (v = 0; null != d[v]; v++) d[v] && 1 === d[v].nodeType && i.push(s[v]); else i.push.apply(i, d); else m(d, i);
        return l && (c(l, o, i, a), c.uniqueSort(i)), i
    };
    c.uniqueSort = function (e) {
        if (y && (o = u, e.sort(y), o)) for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1);
        return e
    }, c.matches = function (e, t) {
        return c(e, null, null, t)
    }, c.matchesSelector = function (e, t) {
        return c(t, null, null, [e]).length > 0
    }, c.find = function (e, t, n) {
        var i, a, r, o, u, d;
        if (!e) return [];
        for (a = 0, r = p.order.length; r > a; a++) if (u = p.order[a], (o = p.leftMatch[u].exec(e)) && (d = o[1], o.splice(1, 1), "\\" !== d.substr(d.length - 1) && (o[1] = (o[1] || "").replace(s, ""), i = p.find[u](o, t, n), null != i))) {
            e = e.replace(p.match[u], "");
            break
        }
        return i || (i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName("*") : []), {
            set: i,
            expr: e
        }
    }, c.filter = function (e, t, n, i) {
        for (var a, r, o, u, s, d, l, f, h, b = e, g = [], m = t, v = t && t[0] && c.isXML(t[0]); e && t.length;) {
            for (o in p.filter) if (null != (a = p.leftMatch[o].exec(e)) && a[2]) {
                if (d = p.filter[o], l = a[1], r = !1, a.splice(1, 1), "\\" === l.substr(l.length - 1)) continue;
                if (m === g && (g = []), p.preFilter[o]) if (a = p.preFilter[o](a, m, n, g, i, v)) {
                    if (a === !0) continue
                } else r = u = !0;
                if (a) for (f = 0; null != (s = m[f]); f++) s && (u = d(s, a, f, m), h = i ^ u, n && null != u ? h ? r = !0 : m[f] = !1 : h && (g.push(s), r = !0));
                if (void 0 !== u) {
                    if (n || (m = g), e = e.replace(p.match[o], ""), !r) return [];
                    break
                }
            }
            if (e === b) {
                if (null != r) break;
                c.error(e)
            }
            b = e
        }
        return m
    }, c.error = function (e) {
        throw"Syntax error, unrecognized expression: " + e
    };
    var f = c.getText = function (e) {
        var t, n, i = e.nodeType, a = "";
        if (i) {
            if (1 === i) {
                if ("string" == typeof e.textContent) return e.textContent;
                if ("string" == typeof e.innerText) return e.innerText.replace(d, "");
                for (e = e.firstChild; e; e = e.nextSibling) a += f(e)
            } else if (3 === i || 4 === i) return e.nodeValue
        } else for (t = 0; n = e[t]; t++) 8 !== n.nodeType && (a += f(n));
        return a
    }, p = c.selectors = {
        order: ["ID", "NAME", "TAG"],
        match: {
            ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
            ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
            TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
            CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
            PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
        },
        leftMatch: {},
        attrMap: {"class": "className", "for": "htmlFor"},
        attrHandle: {
            href: function (e) {
                return e.getAttribute("href")
            }, type: function (e) {
                return e.getAttribute("type")
            }
        },
        relative: {
            "+": function (e, t) {
                var n = "string" == typeof t, i = n && !l.test(t), a = n && !i;
                i && (t = t.toLowerCase());
                for (var r, o = 0, u = e.length; u > o; o++) if (r = e[o]) {
                    for (; (r = r.previousSibling) && 1 !== r.nodeType;) ;
                    e[o] = a || r && r.nodeName.toLowerCase() === t ? r || !1 : r === t
                }
                a && c.filter(t, e, !0)
            }, ">": function (e, t) {
                var n, i = "string" == typeof t, a = 0, r = e.length;
                if (i && !l.test(t)) {
                    for (t = t.toLowerCase(); r > a; a++) if (n = e[a]) {
                        var o = n.parentNode;
                        e[a] = o.nodeName.toLowerCase() === t ? o : !1
                    }
                } else {
                    for (; r > a; a++) n = e[a], n && (e[a] = i ? n.parentNode : n.parentNode === t);
                    i && c.filter(t, e, !0)
                }
            }, "": function (n, i, r) {
                var o, u = a++, s = t;
                "string" != typeof i || l.test(i) || (i = i.toLowerCase(), o = i, s = e), s("parentNode", i, u, n, o, r)
            }, "~": function (n, i, r) {
                var o, u = a++, s = t;
                "string" != typeof i || l.test(i) || (i = i.toLowerCase(), o = i, s = e), s("previousSibling", i, u, n, o, r)
            }
        },
        find: {
            ID: function (e, t, n) {
                if ("undefined" != typeof t.getElementById && !n) {
                    var i = t.getElementById(e[1]);
                    return i && i.parentNode ? [i] : []
                }
            }, NAME: function (e, t) {
                if ("undefined" != typeof t.getElementsByName) {
                    for (var n = [], i = t.getElementsByName(e[1]), a = 0, r = i.length; r > a; a++) i[a].getAttribute("name") === e[1] && n.push(i[a]);
                    return 0 === n.length ? null : n
                }
            }, TAG: function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e[1]) : void 0
            }
        },
        preFilter: {
            CLASS: function (e, t, n, i, a, r) {
                if (e = " " + e[1].replace(s, "") + " ", r) return e;
                for (var o, u = 0; null != (o = t[u]); u++) o && (a ^ (o.className && (" " + o.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || i.push(o) : n && (t[u] = !1));
                return !1
            }, ID: function (e) {
                return e[1].replace(s, "")
            }, TAG: function (e, t) {
                return e[1].replace(s, "").toLowerCase()
            }, CHILD: function (e) {
                if ("nth" === e[1]) {
                    e[2] || c.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                    var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === e[2] && "2n" || "odd" === e[2] && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                    e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                } else e[2] && c.error(e[0]);
                return e[0] = a++, e
            }, ATTR: function (e, t, n, i, a, r) {
                var o = e[1] = e[1].replace(s, "");
                return !r && p.attrMap[o] && (e[1] = p.attrMap[o]), e[4] = (e[4] || e[5] || "").replace(s, ""), "~=" === e[2] && (e[4] = " " + e[4] + " "), e
            }, PSEUDO: function (e, t, i, a, r) {
                if ("not" === e[1]) {
                    if (!((n.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                        var o = c.filter(e[3], t, i, !0 ^ r);
                        return i || a.push.apply(a, o), !1
                    }
                    e[3] = c(e[3], null, null, t)
                } else if (p.match.POS.test(e[0]) || p.match.CHILD.test(e[0])) return !0;
                return e
            }, POS: function (e) {
                return e.unshift(!0), e
            }
        },
        filters: {
            enabled: function (e) {
                return e.disabled === !1 && "hidden" !== e.type
            }, disabled: function (e) {
                return e.disabled === !0
            }, checked: function (e) {
                return e.checked === !0
            }, selected: function (e) {
                return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
            }, parent: function (e) {
                return !!e.firstChild
            }, empty: function (e) {
                return !e.firstChild
            }, has: function (e, t, n) {
                return !!c(n[3], e).length
            }, header: function (e) {
                return /h\d/i.test(e.nodeName)
            }, text: function (e) {
                var t = e.getAttribute("type"), n = e.type;
                return "input" === e.nodeName.toLowerCase() && "text" === n && (t === n || null === t)
            }, radio: function (e) {
                return "input" === e.nodeName.toLowerCase() && "radio" === e.type
            }, checkbox: function (e) {
                return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
            }, file: function (e) {
                return "input" === e.nodeName.toLowerCase() && "file" === e.type
            }, password: function (e) {
                return "input" === e.nodeName.toLowerCase() && "password" === e.type
            }, submit: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && "submit" === e.type
            }, image: function (e) {
                return "input" === e.nodeName.toLowerCase() && "image" === e.type
            }, reset: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && "reset" === e.type
            }, button: function (e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && "button" === e.type || "button" === t
            }, input: function (e) {
                return /input|select|textarea|button/i.test(e.nodeName)
            }, focus: function (e) {
                return e === e.ownerDocument.activeElement
            }
        },
        setFilters: {
            first: function (e, t) {
                return 0 === t
            }, last: function (e, t, n, i) {
                return t === i.length - 1
            }, even: function (e, t) {
                return t % 2 === 0
            }, odd: function (e, t) {
                return t % 2 === 1
            }, lt: function (e, t, n) {
                return t < n[3] - 0
            }, gt: function (e, t, n) {
                return t > n[3] - 0
            }, nth: function (e, t, n) {
                return n[3] - 0 === t
            }, eq: function (e, t, n) {
                return n[3] - 0 === t
            }
        },
        filter: {
            PSEUDO: function (e, t, n, i) {
                var a = t[1], r = p.filters[a];
                if (r) return r(e, n, t, i);
                if ("contains" === a) return (e.textContent || e.innerText || f([e]) || "").indexOf(t[3]) >= 0;
                if ("not" === a) {
                    for (var o = t[3], u = 0, s = o.length; s > u; u++) if (o[u] === e) return !1;
                    return !0
                }
                c.error(a)
            }, CHILD: function (e, t) {
                var n, a, r, o, u, s, d = t[1], l = e;
                switch (d) {
                    case"only":
                    case"first":
                        for (; l = l.previousSibling;) if (1 === l.nodeType) return !1;
                        if ("first" === d) return !0;
                        l = e;
                    case"last":
                        for (; l = l.nextSibling;) if (1 === l.nodeType) return !1;
                        return !0;
                    case"nth":
                        if (n = t[2], a = t[3], 1 === n && 0 === a) return !0;
                        if (r = t[0], o = e.parentNode, o && (o[i] !== r || !e.nodeIndex)) {
                            for (u = 0, l = o.firstChild; l; l = l.nextSibling) 1 === l.nodeType && (l.nodeIndex = ++u);
                            o[i] = r
                        }
                        return s = e.nodeIndex - a, 0 === n ? 0 === s : s % n === 0 && s / n >= 0
                }
            }, ID: function (e, t) {
                return 1 === e.nodeType && e.getAttribute("id") === t
            }, TAG: function (e, t) {
                return "*" === t && 1 === e.nodeType || !!e.nodeName && e.nodeName.toLowerCase() === t
            }, CLASS: function (e, t) {
                return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
            }, ATTR: function (e, t) {
                var n = t[1],
                    i = c.attr ? c.attr(e, n) : p.attrHandle[n] ? p.attrHandle[n](e) : null != e[n] ? e[n] : e.getAttribute(n),
                    a = i + "", r = t[2], o = t[4];
                return null == i ? "!=" === r : !r && c.attr ? null != i : "=" === r ? a === o : "*=" === r ? a.indexOf(o) >= 0 : "~=" === r ? (" " + a + " ").indexOf(o) >= 0 : o ? "!=" === r ? a !== o : "^=" === r ? 0 === a.indexOf(o) : "$=" === r ? a.substr(a.length - o.length) === o : "|=" === r ? a === o || a.substr(0, o.length + 1) === o + "-" : !1 : a && i !== !1
            }, POS: function (e, t, n, i) {
                var a = t[2], r = p.setFilters[a];
                return r ? r(e, n, t, i) : void 0
            }
        }
    }, h = p.match.POS, b = function (e, t) {
        return "\\" + (t - 0 + 1)
    };
    for (var g in p.match) p.match[g] = new RegExp(p.match[g].source + /(?![^\[]*\])(?![^\(]*\))/.source), p.leftMatch[g] = new RegExp(/(^(?:.|\r|\n)*?)/.source + p.match[g].source.replace(/\\(\d+)/g, b));
    var m = function (e, t) {
        return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
    };
    try {
        Array.prototype.slice.call(document.documentElement.childNodes, 0)[0].nodeType
    } catch (v) {
        m = function (e, t) {
            var n = 0, i = t || [];
            if ("[object Array]" === r.call(e)) Array.prototype.push.apply(i, e); else if ("number" == typeof e.length) for (var a = e.length; a > n; n++) i.push(e[n]); else for (; e[n]; n++) i.push(e[n]);
            return i
        }
    }
    var y, T;
    document.documentElement.compareDocumentPosition ? y = function (e, t) {
        return e === t ? (o = !0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
    } : (y = function (e, t) {
        if (e === t) return o = !0, 0;
        if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
        var n, i, a = [], r = [], u = e.parentNode, s = t.parentNode, d = u;
        if (u === s) return T(e, t);
        if (!u) return -1;
        if (!s) return 1;
        for (; d;) a.unshift(d), d = d.parentNode;
        for (d = s; d;) r.unshift(d), d = d.parentNode;
        n = a.length, i = r.length;
        for (var l = 0; n > l && i > l; l++) if (a[l] !== r[l]) return T(a[l], r[l]);
        return l === n ? T(e, r[l], -1) : T(a[l], t, 1)
    }, T = function (e, t, n) {
        if (e === t) return n;
        for (var i = e.nextSibling; i;) {
            if (i === t) return -1;
            i = i.nextSibling
        }
        return 1
    }), function () {
        var e = document.createElement("div"), t = "script" + (new Date).getTime(), n = document.documentElement;
        e.innerHTML = "<a name='" + t + "'/>", n.insertBefore(e, n.firstChild), document.getElementById(t) && (p.find.ID = function (e, t, n) {
            if ("undefined" != typeof t.getElementById && !n) {
                var i = t.getElementById(e[1]);
                return i ? i.id === e[1] || "undefined" != typeof i.getAttributeNode && i.getAttributeNode("id").nodeValue === e[1] ? [i] : void 0 : []
            }
        }, p.filter.ID = function (e, t) {
            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
            return 1 === e.nodeType && n && n.nodeValue === t
        }), n.removeChild(e), n = e = null
    }(), function () {
        var e = document.createElement("div");
        e.appendChild(document.createComment("")), e.getElementsByTagName("*").length > 0 && (p.find.TAG = function (e, t) {
            var n = t.getElementsByTagName(e[1]);
            if ("*" === e[1]) {
                for (var i = [], a = 0; n[a]; a++) 1 === n[a].nodeType && i.push(n[a]);
                n = i
            }
            return n
        }), e.innerHTML = "<a href='#'></a>", e.firstChild && "undefined" != typeof e.firstChild.getAttribute && "#" !== e.firstChild.getAttribute("href") && (p.attrHandle.href = function (e) {
            return e.getAttribute("href", 2)
        }), e = null
    }(), document.querySelectorAll && !function () {
        var e = c, t = document.createElement("div"), n = "__sizzle__";
        if (t.innerHTML = "<p class='TEST'></p>", !t.querySelectorAll || 0 !== t.querySelectorAll(".TEST").length) {
            c = function (t, i, a, r) {
                if (i = i || document, !r && !c.isXML(i)) {
                    var o = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                    if (o && (1 === i.nodeType || 9 === i.nodeType)) {
                        if (o[1]) return m(i.getElementsByTagName(t), a);
                        if (o[2] && p.find.CLASS && i.getElementsByClassName) return m(i.getElementsByClassName(o[2]), a)
                    }
                    if (9 === i.nodeType) {
                        if ("body" === t && i.body) return m([i.body], a);
                        if (o && o[3]) {
                            var u = i.getElementById(o[3]);
                            if (!u || !u.parentNode) return m([], a);
                            if (u.id === o[3]) return m([u], a)
                        }
                        try {
                            return m(i.querySelectorAll(t), a)
                        } catch (s) {
                        }
                    } else if (1 === i.nodeType && "object" !== i.nodeName.toLowerCase()) {
                        var d = i, l = i.getAttribute("id"), f = l || n, h = i.parentNode, b = /^\s*[+~]/.test(t);
                        l ? f = f.replace(/'/g, "\\$&") : i.setAttribute("id", f), b && h && (i = i.parentNode);
                        try {
                            if (!b || h) return m(i.querySelectorAll("[id='" + f + "'] " + t), a)
                        } catch (g) {
                        } finally {
                            l || d.removeAttribute("id")
                        }
                    }
                }
                return e(t, i, a, r)
            };
            for (var i in e) c[i] = e[i];
            t = null
        }
    }(), function () {
        var e = document.documentElement,
            t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
        if (t) {
            var n = !t.call(document.createElement("div"), "div"), i = !1;
            try {
                t.call(document.documentElement, "[test!='']:sizzle")
            } catch (a) {
                i = !0
            }
            c.matchesSelector = function (e, a) {
                if (a = a.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !c.isXML(e)) try {
                    if (i || !p.match.PSEUDO.test(a) && !/!=/.test(a)) {
                        var r = t.call(e, a);
                        if (r || !n || e.document && 11 !== e.document.nodeType) return r
                    }
                } catch (o) {
                }
                return c(a, null, null, [e]).length > 0
            }
        }
    }(), function () {
        var e = document.createElement("div");
        e.innerHTML = "<div class='test e'></div><div class='test'></div>", e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length && (e.lastChild.className = "e", 1 !== e.getElementsByClassName("e").length && (p.order.splice(1, 0, "CLASS"), p.find.CLASS = function (e, t, n) {
            return "undefined" == typeof t.getElementsByClassName || n ? void 0 : t.getElementsByClassName(e[1])
        }, e = null))
    }(), c.contains = document.documentElement.contains ? function (e, t) {
        return e !== t && (e.contains ? e.contains(t) : !0)
    } : document.documentElement.compareDocumentPosition ? function (e, t) {
        return !!(16 & e.compareDocumentPosition(t))
    } : function () {
        return !1
    }, c.isXML = function (e) {
        var t = (e ? e.ownerDocument || e : 0).documentElement;
        return t ? "HTML" !== t.nodeName : !1
    };
    var x = function (e, t, n) {
        for (var i, a = [], r = "", o = t.nodeType ? [t] : t; i = p.match.PSEUDO.exec(e);) r += i[0], e = e.replace(p.match.PSEUDO, "");
        e = p.relative[e] ? e + "*" : e;
        for (var u = 0, s = o.length; s > u; u++) c(e, o[u], a, n);
        return c.filter(r, a)
    };
    baidu.dom.query = c
}(),function () {
    var e = baidu.dom.ready = function () {
        function e() {
            if (!e.isReady) {
                e.isReady = !0;
                for (var t = 0, n = r.length; n > t; t++) r[t]()
            }
        }

        function t() {
            try {
                document.documentElement.doScroll("left")
            } catch (n) {
                return void setTimeout(t, 1)
            }
            e()
        }

        function n() {
            if (!a) if (a = !0, document.addEventListener) document.addEventListener("DOMContentLoaded", i, !1), window.addEventListener("load", e, !1); else if (document.attachEvent) {
                document.attachEvent("onreadystatechange", i), window.attachEvent("onload", e);
                var n = !1;
                try {
                    n = null == window.frameElement
                } catch (r) {
                }
                document.documentElement.doScroll && n && t()
            }
        }

        var i, a = !1, r = [];
        return document.addEventListener ? i = function () {
            document.removeEventListener("DOMContentLoaded", i, !1), e()
        } : document.attachEvent && (i = function () {
            "complete" === document.readyState && (document.detachEvent("onreadystatechange", i), e())
        }), n(), function (t) {
            e.isReady ? t() : r.push(t)
        }
    }();
    e.isReady = !1
}(),baidu.dom.remove = function (e) {
    e = baidu.dom._g(e);
    var t = e.parentNode;
    t && t.removeChild(e)
},baidu.dom.removeClass = function (e, t) {
    e = baidu.dom.g(e);
    for (var n, i, a = e.className.split(/\s+/), r = t.split(/\s+/), o = r.length, u = 0; o > u; ++u) for (i = 0, n = a.length; n > i; ++i) if (a[i] == r[u]) {
        a.splice(i, 1);
        break
    }
    return e.className = a.join(" "), e
},baidu.removeClass = baidu.dom.removeClass,baidu.dom.removeStyle = function () {
    var e, t = document.createElement("DIV"), n = baidu.dom._g;
    return t.style.removeProperty ? e = function (e, t) {
        return e = n(e), e.style.removeProperty(t), e
    } : t.style.removeAttribute && (e = function (e, t) {
        return e = n(e), e.style.removeAttribute(baidu.string.toCamelCase(t)), e
    }), t = null, e
}(),baidu.object.each = function (e, t) {
    var n, i, a;
    if ("function" == typeof t) for (i in e) if (e.hasOwnProperty(i) && (a = e[i], n = t.call(e, a, i), n === !1)) break;
    return e
},baidu.lang.isNumber = function (e) {
    return "[object Number]" == Object.prototype.toString.call(e) && isFinite(e)
},baidu.event.getTarget = function (e) {
    var t = e.target || e.srcElement;
    return 3 === t.nodeType && (t = t.parentNode), t
},baidu.dom.setBorderBoxSize = function (e, t) {
    function n(e, t) {
        return parseFloat(baidu.getStyle(e, t)) || 0
    }

    var i = {};
    return t.width && (i.width = parseFloat(t.width)), t.height && (i.height = parseFloat(t.height)), baidu.browser.isStrict && (t.width && (i.width = parseFloat(t.width) - n(e, "paddingLeft") - n(e, "paddingRight") - n(e, "borderLeftWidth") - n(e, "borderRightWidth"), i.width < 0 && (i.width = 0)), t.height && (i.height = parseFloat(t.height) - n(e, "paddingTop") - n(e, "paddingBottom") - n(e, "borderTopWidth") - n(e, "borderBottomWidth"), i.height < 0 && (i.height = 0))), baidu.dom.setStyles(e, i)
},baidu.dom.setOuterHeight = baidu.dom.setBorderBoxHeight = function (e, t) {
    return baidu.dom.setBorderBoxSize(e, {height: t})
},baidu.dom.setOuterWidth = baidu.dom.setBorderBoxWidth = function (e, t) {
    return baidu.dom.setBorderBoxSize(e, {width: t})
},baidu.dom.resizable = function (e, t) {
    function n() {
        m = baidu.extend({
            e: {right: "-5px", top: "0px", width: "7px", height: l.offsetHeight},
            s: {left: "0px", bottom: "-5px", height: "7px", width: l.offsetWidth},
            n: {left: "0px", top: "-5px", height: "7px", width: l.offsetWidth},
            w: {left: "-5px", top: "0px", height: l.offsetHeight, width: "7px"},
            se: {right: "1px", bottom: "1px", height: "16px", width: "16px"},
            sw: {left: "1px", bottom: "1px", height: "16px", width: "16px"},
            ne: {right: "1px", top: "1px", height: "16px", width: "16px"},
            nw: {left: "1px", top: "1px", height: "16px", width: "16px"}
        }, c.directionHandlePosition), baidu.each(c.direction, function (e) {
            var t = c.classPrefix.split(" ");
            t[0] = t[0] + "-resizable-" + e;
            var n = baidu.dom.create("div", {className: t.join(" ")}), i = m[e];
            i.cursor = e + "-resize", i.position = "absolute", baidu.setStyles(n, i), n.key = e, n.style.MozUserSelect = "none", l.appendChild(n), y[e] = n, baidu.on(n, "mousedown", r)
        }), x = !1
    }

    function i() {
        g && o(), baidu.object.each(y, function (e) {
            baidu.un(e, "mousedown", r), baidu.dom.remove(e)
        }), x = !0
    }

    function a(e) {
        x || (c = baidu.extend(c, e || {}), i(), n())
    }

    function r(e) {
        var t = baidu.event.getTarget(e), n = t.key;
        g = t, t.setCapture ? t.setCapture() : window.captureEvents && window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP), h = baidu.getStyle(document.body, "cursor"), baidu.setStyle(document.body, "cursor", n + "-resize"), baidu.on(t, "mouseup", o), baidu.on(document.body, "selectstart", s), p = document.body.style.MozUserSelect, document.body.style.MozUserSelect = "none";
        var i = baidu.page.getMousePosition();
        T = d(), v = setInterval(function () {
            u(n, i)
        }, 20), baidu.lang.isFunction(c.onresizestart) && c.onresizestart(), baidu.event.preventDefault(e)
    }

    function o() {
        g.releaseCapture ? g.releaseCapture() : window.releaseEvents && window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP), baidu.un(g, "mouseup", o), baidu.un(document, "selectstart", s), document.body.style.MozUserSelect = p, baidu.un(document.body, "selectstart", s), clearInterval(v), baidu.setStyle(document.body, "cursor", h), g = null, baidu.lang.isFunction(c.onresizeend) && c.onresizeend()
    }

    function u(e, t) {
        var n, i = baidu.page.getMousePosition(), a = T.width, r = T.height, o = T.top, u = T.left;
        e.indexOf("e") >= 0 ? (a = Math.max(i.x - t.x + T.width, f[0]), a = Math.min(a, f[1])) : e.indexOf("w") >= 0 && (a = Math.max(t.x - i.x + T.width, f[0]), a = Math.min(a, f[1]), u -= a - T.width), e.indexOf("s") >= 0 ? (r = Math.max(i.y - t.y + T.height, f[2]), r = Math.min(r, f[3])) : e.indexOf("n") >= 0 && (r = Math.max(t.y - i.y + T.height, f[2]), r = Math.min(r, f[3]), o -= r - T.height), n = {
            width: a,
            height: r,
            top: o,
            left: u
        }, baidu.dom.setOuterHeight(l, r), baidu.dom.setOuterWidth(l, a), baidu.setStyles(l, {
            top: o,
            left: u
        }), y.n && baidu.setStyle(y.n, "width", a), y.s && baidu.setStyle(y.s, "width", a), y.e && baidu.setStyle(y.e, "height", r), y.w && baidu.setStyle(y.w, "height", r), baidu.lang.isFunction(c.onresize) && c.onresize({
            current: n,
            original: T
        })
    }

    function s(e) {
        return baidu.event.preventDefault(e, !1)
    }

    function d() {
        var e, t, n = baidu.dom.getPosition(l.offsetParent), i = baidu.dom.getPosition(l);
        return "absolute" == _ ? (e = i.top - (l.offsetParent == document.body ? 0 : n.top), t = i.left - (l.offsetParent == document.body ? 0 : n.left)) : (e = parseFloat(baidu.getStyle(l, "top")) || -parseFloat(baidu.getStyle(l, "bottom")) || 0, t = parseFloat(baidu.getStyle(l, "left")) || -parseFloat(baidu.getStyle(l, "right")) || 0), baidu.setStyles(l, {
            top: e,
            left: t
        }), {width: l.offsetWidth, height: l.offsetHeight, top: e, left: t}
    }

    var l, c, f, p, h, b, g, m, v, y = {}, T = {}, x = !1, w = {
        direction: ["e", "s", "se"],
        minWidth: 16,
        minHeight: 16,
        classPrefix: "tangram",
        directionHandlePosition: {}
    };
    if (!(l = baidu.dom.g(e)) && "static" == baidu.getStyle(l, "position")) return !1;
    b = l.offsetParent;
    var _ = baidu.getStyle(l, "position");
    return c = baidu.extend(w, t), baidu.each(["minHeight", "minWidth", "maxHeight", "maxWidth"], function (e) {
        c[e] && (c[e] = parseFloat(c[e]))
    }), f = [c.minWidth || 0, c.maxWidth || Number.MAX_VALUE, c.minHeight || 0, c.maxHeight || Number.MAX_VALUE], n(), {
        cancel: i,
        update: a,
        enable: n
    }
},baidu.dom.setPosition = function (e, t) {
    return baidu.dom.setStyles(e, {
        left: t.left - (parseFloat(baidu.dom.getStyle(e, "margin-left")) || 0),
        top: t.top - (parseFloat(baidu.dom.getStyle(e, "margin-top")) || 0)
    })
},baidu.dom.show = function (e) {
    return e = baidu.dom.g(e), e.style.display = "", e
},baidu.show = baidu.dom.show,baidu.dom.toggle = function (e) {
    return e = baidu.dom.g(e), e.style.display = "none" == e.style.display ? "" : "none", e
},baidu.dom.toggleClass = function (e, t) {
    baidu.dom.hasClass(e, t) ? baidu.dom.removeClass(e, t) : baidu.dom.addClass(e, t)
},baidu.lang.isArray = function (e) {
    return "[object Array]" == Object.prototype.toString.call(e)
},baidu.lang.toArray = function (e) {
    if (null === e || void 0 === e) return [];
    if (baidu.lang.isArray(e)) return e;
    if ("number" != typeof e.length || "string" == typeof e || baidu.lang.isFunction(e)) return [e];
    if (e.item) {
        for (var t = e.length, n = new Array(t); t--;) n[t] = e[t];
        return n
    }
    return [].slice.call(e)
},baidu.fn.methodize = function (e, t) {
    return function () {
        return e.apply(this, [t ? this[t] : this].concat([].slice.call(arguments)))
    }
},baidu.fn.wrapReturnValue = function (e, t, n) {
    return n = 0 | n, function () {
        var i = e.apply(this, arguments);
        return n > 0 ? new t(arguments[n - 1]) : n ? i : new t(i)
    }
},baidu.fn.multize = function (e, t, n) {
    var i = function () {
        var a, r, o = arguments[0], u = t ? i : e, s = [], d = [].slice.call(arguments, 0), l = 0;
        if (o instanceof Array) {
            for (a = o.length; a > l; l++) d[0] = o[l], r = u.apply(this, d), n ? r && (s = s.concat(r)) : s.push(r);
            return s
        }
        return e.apply(this, arguments)
    };
    return i
},baidu.element = function (e) {
    var t = baidu._g(e);
    return !t && baidu.dom.query && (t = baidu.dom.query(e)), new baidu.element.Element(t)
},baidu.e = baidu.element,baidu.element.Element = function (e) {
    baidu.element._init || (baidu.element._makeChain(), baidu.element._init = !0), this._dom = "select" == (e.tagName || "").toLowerCase() ? [e] : baidu.lang.toArray(e)
},baidu.element.Element.prototype.each = function (e) {
    baidu.array.each(this._dom, function (t, n) {
        e.call(t, t, n)
    })
},baidu.element._toChainFunction = function (e, t, n) {
    return baidu.fn.methodize(baidu.fn.wrapReturnValue(baidu.fn.multize(e, 0, 1), baidu.element.Element, t), "_dom")
},baidu.element._makeChain = function () {
    function e(e) {
        return e.charAt(3).toLowerCase()
    }

    var t = baidu.element.Element.prototype, n = baidu.element._toChainFunction;
    baidu.each("draggable droppable resizable fixable".split(" "), function (e) {
        t[e] = n(baidu.dom[e], 1)
    }), baidu.each("remove getText contains getAttr getPosition getStyle hasClass intersect hasAttr getComputedStyle".split(" "), function (i) {
        t[i] = t[i.replace(/^get[A-Z]/g, e)] = n(baidu.dom[i], -1)
    }), baidu.each("addClass empty hide show insertAfter insertBefore insertHTML removeClass setAttr setAttrs setStyle setStyles show toggleClass toggle next first getAncestorByClass getAncestorBy getAncestorByTag getDocument getParent getWindow last next prev g removeStyle setBorderBoxSize setOuterWidth setOuterHeight setBorderBoxWidth setBorderBoxHeight setPosition children query".split(" "), function (i) {
        t[i] = t[i.replace(/^get[A-Z]/g, e)] = n(baidu.dom[i], 0)
    }), t.q = t.Q = n(function (e, t) {
        return baidu.dom.q.apply(this, [t, e].concat([].slice.call(arguments, 2)))
    }, 0), baidu.each("on un".split(" "), function (e) {
        t[e] = n(baidu.event[e], 0)
    }), baidu.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (e) {
        t[e] = function (t) {
            return this.on(e, t)
        }
    })
},baidu.element.extend = function (e) {
    var t = baidu.element;
    baidu.object.each(e, function (e, n) {
        t.Element.prototype[n] = baidu.element._toChainFunction(e, -1)
    })
},baidu.event.EventArg = function (e, t) {
    t = t || window, e = e || t.event;
    var n = t.document;
    this.target = e.target || e.srcElement, this.keyCode = e.which || e.keyCode;
    for (var i in e) {
        var a = e[i];
        "function" != typeof a && (this[i] = a)
    }
    this.pageX || 0 === this.pageX || (this.pageX = (e.clientX || 0) + (n.documentElement.scrollLeft || n.body.scrollLeft), this.pageY = (e.clientY || 0) + (n.documentElement.scrollTop || n.body.scrollTop)), this._event = e
},baidu.event.EventArg.prototype.preventDefault = function () {
    return this._event.preventDefault ? this._event.preventDefault() : this._event.returnValue = !1, this
},baidu.event.EventArg.prototype.stopPropagation = function () {
    return this._event.stopPropagation ? this._event.stopPropagation() : this._event.cancelBubble = !0, this
},baidu.event.EventArg.prototype.stop = function () {
    return this.stopPropagation().preventDefault()
},baidu.event._eventFilter = baidu.event._eventFilter || {},baidu.event._eventFilter._crossElementBoundary = function (e, t) {
    var n = t.relatedTarget, i = t.currentTarget;
    if (n !== !1 && i != n && (!n || "xul" != n.prefix && !baidu.dom.contains(i, n))) return e.call(i, t)
},baidu.fn.bind = function (e, t) {
    var n = arguments.length > 2 ? [].slice.call(arguments, 2) : null;
    return function () {
        var i = baidu.lang.isString(e) ? t[e] : e, a = n ? n.concat([].slice.call(arguments, 0)) : arguments;
        return i.apply(t || i, a)
    }
},baidu.event._eventFilter.mouseenter = window.attachEvent ? null : function (e, t, n) {
    return {type: "mouseover", listener: baidu.fn.bind(baidu.event._eventFilter._crossElementBoundary, this, n)}
},baidu.event._eventFilter.mouseleave = window.attachEvent ? null : function (e, t, n) {
    return {type: "mouseout", listener: baidu.fn.bind(baidu.event._eventFilter._crossElementBoundary, this, n)}
},baidu.object.values = function (e) {
    var t, n = [], i = 0;
    for (t in e) e.hasOwnProperty(t) && (n[i++] = e[t]);
    return n
},function () {
    function e(e, t) {
        for (var n = 0, i = e.length, a = {}; i > n; n++) a[e[n]] = t[e[n]], delete t[e[n]];
        return a
    }

    function t(t, n, i) {
        i = baidu.object.extend({}, i);
        var a = baidu.object.values(e(c[n], i)), r = document.createEvent(n);
        return a.unshift(t), "KeyEvents" == n ? r.initKeyEvent.apply(r, a) : "MouseEvents" == n ? r.initMouseEvent.apply(r, a) : "UIEvents" == n ? r.initUIEvent.apply(r, a) : r.initEvent.apply(r, a), baidu.object.extend(r, i), r
    }

    function n(e) {
        var t;
        return document.createEventObject && (t = document.createEventObject(), baidu.object.extend(t, e)), t
    }

    function i(i, a) {
        a = e(c.KeyEvents, a);
        var r;
        if (document.createEvent) try {
            r = t(i, "KeyEvents", a)
        } catch (o) {
            try {
                r = t(i, "Events", a)
            } catch (u) {
                r = t(i, "UIEvents", a)
            }
        } else a.keyCode = a.charCode > 0 ? a.charCode : a.keyCode, r = n(a);
        return r
    }

    function a(i, a) {
        a = e(c.MouseEvents, a);
        var r;
        return document.createEvent ? (r = t(i, "MouseEvents", a), a.relatedTarget && !r.relatedTarget && ("mouseout" == i.toLowerCase() ? r.toElement = a.relatedTarget : "mouseover" == i.toLowerCase() && (r.fromElement = a.relatedTarget))) : (a.button = 0 == a.button ? 1 : 1 == a.button ? 4 : baidu.lang.isNumber(a.button) ? a.button : 0, r = n(a)), r
    }

    function r(i, a) {
        a.bubbles = l.hasOwnProperty(i), a = e(c.HTMLEvents, a);
        var r;
        if (document.createEvent) try {
            r = t(i, "HTMLEvents", a)
        } catch (o) {
            try {
                r = t(i, "UIEvents", a)
            } catch (u) {
                r = t(i, "Events", a)
            }
        } else r = n(a);
        return r
    }

    var o = baidu.browser, u = {keydown: 1, keyup: 1, keypress: 1},
        s = {click: 1, dblclick: 1, mousedown: 1, mousemove: 1, mouseup: 1, mouseover: 1, mouseout: 1}, d = {
            abort: 1,
            blur: 1,
            change: 1,
            error: 1,
            focus: 1,
            load: o.ie ? 0 : 1,
            reset: 1,
            resize: 1,
            scroll: 1,
            select: 1,
            submit: 1,
            unload: o.ie ? 0 : 1
        }, l = {scroll: 1, resize: 1, reset: 1, submit: 1, change: 1, select: 1, error: 1, abort: 1}, c = {
            KeyEvents: ["bubbles", "cancelable", "view", "ctrlKey", "altKey", "shiftKey", "metaKey", "keyCode", "charCode"],
            MouseEvents: ["bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget"],
            HTMLEvents: ["bubbles", "cancelable"],
            UIEvents: ["bubbles", "cancelable", "view", "detail"],
            Events: ["bubbles", "cancelable"]
        };
    baidu.object.extend(l, u), baidu.object.extend(l, s), baidu.event.fire = function (e, t, n) {
        var o;
        if (t = t.replace(/^on/i, ""), e = baidu.dom._g(e), n = baidu.object.extend({
            bubbles: !0,
            cancelable: !0,
            view: window,
            detail: 1,
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            ctrlKey: !1,
            altKey: !1,
            shiftKey: !1,
            metaKey: !1,
            keyCode: 0,
            charCode: 0,
            button: 0,
            relatedTarget: null
        }, n), u[t]) o = i(t, n); else if (s[t]) o = a(t, n); else {
            if (!d[t]) throw new Error(t + " is not support!");
            o = r(t, n)
        }
        o && (e.dispatchEvent ? e.dispatchEvent(o) : e.fireEvent && e.fireEvent("on" + t, o))
    }
}(),baidu.event.get = function (e, t) {
    return new baidu.event.EventArg(e, t)
},baidu.event.getKeyCode = function (e) {
    return e.which || e.keyCode
},baidu.event.getPageX = function (e) {
    var t = e.pageX, n = document;
    return t || 0 === t || (t = (e.clientX || 0) + (n.documentElement.scrollLeft || n.body.scrollLeft)), t
},baidu.event.getPageY = function (e) {
    var t = e.pageY, n = document;
    return t || 0 === t || (t = (e.clientY || 0) + (n.documentElement.scrollTop || n.body.scrollTop)), t
},baidu.event.once = function (e, t, n) {
    function i(a) {
        n.call(e, a), baidu.event.un(e, t, i)
    }

    return e = baidu.dom._g(e), baidu.event.on(e, t, i), e
},baidu.event.stopPropagation = function (e) {
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
},baidu.event.stop = function (e) {
    var t = baidu.event;
    t.stopPropagation(e), t.preventDefault(e)
},baidu.fn.abstractMethod = function () {
    throw Error("unimplemented abstract method")
},baidu.json = baidu.json || {},baidu.json.parse = function (e) {
    return new Function("return (" + e + ")")()
},baidu.json.decode = baidu.json.parse,baidu.json.stringify = function () {
    function e(e) {
        return /["\\\x00-\x1f]/.test(e) && (e = e.replace(/["\\\x00-\x1f]/g, function (e) {
            var t = a[e];
            return t ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16))
        })), '"' + e + '"'
    }

    function t(e) {
        var t, n, i, a = ["["], r = e.length;
        for (n = 0; r > n; n++) switch (i = e[n], typeof i) {
            case"undefined":
            case"function":
            case"unknown":
                break;
            default:
                t && a.push(","), a.push(baidu.json.stringify(i)), t = 1
        }
        return a.push("]"), a.join("")
    }

    function n(e) {
        return 10 > e ? "0" + e : e
    }

    function i(e) {
        return '"' + e.getFullYear() + "-" + n(e.getMonth() + 1) + "-" + n(e.getDate()) + "T" + n(e.getHours()) + ":" + n(e.getMinutes()) + ":" + n(e.getSeconds()) + '"'
    }

    var a = {"\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
    return function (n) {
        switch (typeof n) {
            case"undefined":
                return "undefined";
            case"number":
                return isFinite(n) ? String(n) : "null";
            case"string":
                return e(n);
            case"boolean":
                return String(n);
            default:
                if (null === n) return "null";
                if (n instanceof Array) return t(n);
                if (n instanceof Date) return i(n);
                var a, r, o = ["{"], u = baidu.json.stringify;
                for (var s in n) if (Object.prototype.hasOwnProperty.call(n, s)) switch (r = n[s], typeof r) {
                    case"undefined":
                    case"unknown":
                    case"function":
                        break;
                    default:
                        a && o.push(","), a = 1, o.push(u(s) + ":" + u(r))
                }
                return o.push("}"), o.join("")
        }
    }
}(),baidu.json.encode = baidu.json.stringify,baidu.lang.Class.prototype.addEventListeners = function (e, t) {
    if ("undefined" == typeof t) for (var n in e) this.addEventListener(n, e[n]); else {
        e = e.split(",");
        for (var n = 0, i = e.length; i > n; n++) this.addEventListener(baidu.trim(e[n]), t)
    }
},baidu.lang.createClass = function (e, t) {
    t = t || {};
    var n = t.superClass || baidu.lang.Class, i = function () {
        n != baidu.lang.Class ? n.apply(this, arguments) : n.call(this), e.apply(this, arguments)
    };
    i.options = t.options || {};
    var a = function () {
    }, r = e.prototype;
    a.prototype = n.prototype;
    var o = i.prototype = new a;
    for (var u in r) o[u] = r[u];
    return "string" == typeof t.className && (o._className = t.className), o.constructor = r.constructor, i.extend = function (e) {
        for (var t in e) i.prototype[t] = e[t];
        return i
    }, i
},baidu.lang.decontrol = function (e) {
    var t = window[baidu.guid];
    t._instances && delete t._instances[e]
},baidu.lang.eventCenter = baidu.lang.eventCenter || baidu.lang.createSingle(),baidu.lang.getModule = function (e, t) {
    for (var n, i = e.split("."), a = t || window; n = i.shift();) {
        if (null == a[n]) return null;
        a = a[n]
    }
    return a
},baidu.lang.inherits = function (e, t, n) {
    var i, a, r = e.prototype, o = new Function;
    o.prototype = t.prototype, a = e.prototype = new o;
    for (i in r) a[i] = r[i];
    e.prototype.constructor = e, e.superClass = t.prototype, "string" == typeof n && (a._className = n)
},baidu.inherits = baidu.lang.inherits,baidu.lang.instance = function (e) {
    return window[baidu.guid]._instances[e] || null
},baidu.lang.isBoolean = function (e) {
    return "boolean" == typeof e
},baidu.lang.isDate = function (e) {
    return "[object Date]" === {}.toString.call(e) && "Invalid Date" !== e.toString() && !isNaN(e)
},baidu.lang.isElement = function (e) {
    return !(!e || !e.nodeName || 1 != e.nodeType)
},baidu.lang.isObject = function (e) {
    return "function" == typeof e || !(!e || "object" != typeof e);

},baidu.isObject = baidu.lang.isObject,baidu.lang.module = function (name, module, owner) {
    var packages = name.split("."), len = packages.length - 1, packageName, i = 0;
    if (!owner) try {
        if (!new RegExp("^[a-zA-Z_$][a-zA-Z0-9_$]*$").test(packages[0])) throw"";
        owner = eval(packages[0]), i = 1
    } catch (e) {
        owner = window
    }
    for (; len > i; i++) packageName = packages[i], owner[packageName] || (owner[packageName] = {}), owner = owner[packageName];
    owner[packages[len]] || (owner[packages[len]] = module)
},baidu.number.comma = function (e, t) {
    return (!t || 1 > t) && (t = 3), e = String(e).split("."), e[0] = e[0].replace(new RegExp("(\\d)(?=(\\d{" + t + "})+$)", "ig"), "$1,"), e.join(".")
},baidu.number.randomInt = function (e, t) {
    return Math.floor(Math.random() * (t - e + 1) + e)
},baidu.object.isPlain = function (e) {
    var t, n = Object.prototype.hasOwnProperty;
    if (!(e && "[object Object]" === Object.prototype.toString.call(e) && "isPrototypeOf" in e)) return !1;
    if (e.constructor && !n.call(e, "constructor") && !n.call(e.constructor.prototype, "isPrototypeOf")) return !1;
    for (t in e) ;
    return void 0 === t || n.call(e, t)
},baidu.object.clone = function (e) {
    var t, n, i = e;
    if (!e || e instanceof Number || e instanceof String || e instanceof Boolean) return i;
    if (baidu.lang.isArray(e)) {
        i = [];
        var a = 0;
        for (t = 0, n = e.length; n > t; t++) i[a++] = baidu.object.clone(e[t])
    } else if (baidu.object.isPlain(e)) {
        i = {};
        for (t in e) e.hasOwnProperty(t) && (i[t] = baidu.object.clone(e[t]))
    }
    return i
},baidu.object.isEmpty = function (e) {
    for (var t in e) return !1;
    return !0
},baidu.object.keys = function (e) {
    var t, n = [], i = 0;
    for (t in e) e.hasOwnProperty(t) && (n[i++] = t);
    return n
},baidu.object.map = function (e, t) {
    var n = {};
    for (var i in e) e.hasOwnProperty(i) && (n[i] = t(e[i], i));
    return n
},function () {
    function e(e, n, i, a, r) {
        n.hasOwnProperty(i) && (r && t(e[i]) ? baidu.object.merge(e[i], n[i], {
            overwrite: a,
            recursive: r
        }) : !a && i in e || (e[i] = n[i]))
    }

    var t = function (e) {
        return baidu.lang.isObject(e) && !baidu.lang.isFunction(e)
    };
    baidu.object.merge = function (t, n, i) {
        var a, r = 0, o = i || {}, u = o.overwrite, s = o.whiteList, d = o.recursive;
        if (s && s.length) for (a = s.length; a > r; ++r) e(t, n, s[r], u, d); else for (r in n) e(t, n, r, u, d);
        return t
    }
}(),baidu.page.createStyleSheet = function (e) {
    var t, n = e || {}, i = n.document || document;
    if (baidu.browser.ie) return n.url || (n.url = ""), i.createStyleSheet(n.url, n.index);
    if (t = "<style type='text/css'></style>", n.url && (t = "<link type='text/css' rel='stylesheet' href='" + n.url + "'/>"), baidu.dom.insertHTML(i.getElementsByTagName("HEAD")[0], "beforeEnd", t), n.url) return null;
    var a = i.styleSheets[i.styleSheets.length - 1], r = a.rules || a.cssRules;
    return {
        self: a, rules: a.rules || a.cssRules, addRule: function (e, t, n) {
            return a.addRule ? a.addRule(e, t, n) : a.insertRule ? (isNaN(n) && (n = r.length), a.insertRule(e + "{" + t + "}", n)) : void 0
        }, removeRule: function (e) {
            a.removeRule ? a.removeRule(e) : a.deleteRule && (isNaN(e) && (e = 0), a.deleteRule(e))
        }
    }
},baidu.page.getHeight = function () {
    var e = document, t = e.body, n = e.documentElement, i = "BackCompat" == e.compatMode ? t : e.documentElement;
    return Math.max(n.scrollHeight, t.scrollHeight, i.clientHeight)
},baidu.page.getWidth = function () {
    var e = document, t = e.body, n = e.documentElement, i = "BackCompat" == e.compatMode ? t : e.documentElement;
    return Math.max(n.scrollWidth, t.scrollWidth, i.clientWidth)
},baidu.page.lazyLoadImage = function (e) {
    e = e || {}, e.preloadHeight = e.preloadHeight || 0, baidu.dom.ready(function () {
        function t() {
            return baidu.page.getScrollTop() + baidu.page.getViewHeight() + e.preloadHeight
        }

        var n, i = document.getElementsByTagName("IMG"), a = i, r = i.length, o = 0, u = t(),
            s = "data-tangram-ori-src";
        if (e.className) for (a = []; r > o; ++o) baidu.dom.hasClass(i[o], e.className) && a.push(i[o]);
        for (o = 0, r = a.length; r > o; ++o) n = a[o], baidu.dom.getPosition(n).top > u && (n.setAttribute(s, n.src), e.placeHolder ? n.src = e.placeHolder : n.removeAttribute("src"));
        var d = function () {
            for (var i, r = t(), o = !0, u = 0, l = a.length; l > u; ++u) n = a[u], i = n.getAttribute(s), i && (o = !1), baidu.dom.getPosition(n).top < r && i && (n.src = i, n.removeAttribute(s), baidu.lang.isFunction(e.onlazyload) && e.onlazyload(n));
            o && baidu.un(window, "scroll", d)
        };
        baidu.on(window, "scroll", d)
    })
},baidu.page.load = function (e, t, n) {
    function i() {
        for (var n = 0, i = e.length; i > n; ++n) if (!u[e[n].url]) return void setTimeout(arguments.callee, 10);
        t.onload()
    }

    function a(e, t) {
        var n, i, a;
        switch (e.type.toLowerCase()) {
            case"css":
                n = document.createElement("link"), n.setAttribute("rel", "stylesheet"), n.setAttribute("type", "text/css");
                break;
            case"js":
                n = document.createElement("script"), n.setAttribute("type", "text/javascript"), n.setAttribute("charset", e.charset || o.charset);
                break;
            case"html":
                n = document.createElement("iframe"), n.frameBorder = "none";
                break;
            default:
                return
        }
        a = function () {
            i || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (i = !0, baidu.un(n, "load", a), baidu.un(n, "readystatechange", a), t.call(window, n))
        }, baidu.on(n, "load", a), baidu.on(n, "readystatechange", a), "css" == e.type && !function () {
            if (!i) {
                try {
                    n.sheet.cssRule
                } catch (e) {
                    return void setTimeout(arguments.callee, 20)
                }
                i = !0, t.call(window, n)
            }
        }(), n.href = n.src = e.url, document.getElementsByTagName("head")[0].appendChild(n)
    }

    function r(l) {
        var c, f = l.url, p = !!d, h = function (a) {
            u[l.url] = a, delete s[l.url], baidu.lang.isFunction(l.onload) && !1 === l.onload.call(window, a) || (!d && o(e.slice(1), t, !0), !n && baidu.lang.isFunction(t.onload) && i())
        };
        return l.type = l.type || f.substr(f.lastIndexOf(".") + 1), l.requestType = l.requestType || ("html" == l.type ? "ajax" : "dom"), (c = u[l.url]) ? (h(c), p) : !t.refresh && s[l.url] ? (setTimeout(function () {
            r(l)
        }, 10), p) : (s[l.url] = !0, "dom" == l.requestType.toLowerCase() ? a(l, h) : baidu.ajax.get(l.url, function (e, t) {
            h(t)
        }), p)
    }

    t = t || {};
    var o = baidu.page.load, u = o._cache = o._cache || {}, s = o._loadingCache = o._loadingCache || {}, d = t.parallel;
    baidu.lang.isString(e) && (e = [{url: e}]), e && e.length && baidu.each(e, r)
},baidu.page.load.charset = "UTF8",baidu.page.loadCssFile = function (e) {
    var t = document.createElement("link");
    t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), t.setAttribute("href", e), document.getElementsByTagName("head")[0].appendChild(t)
},baidu.page.loadJsFile = function (e) {
    var t = document.createElement("script");
    t.setAttribute("type", "text/javascript"), t.setAttribute("src", e), t.setAttribute("defer", "defer"), document.getElementsByTagName("head")[0].appendChild(t)
},baidu.platform = baidu.platform || {},baidu.platform.isAndroid = /android/i.test(navigator.userAgent),baidu.platform.isIpad = /ipad/i.test(navigator.userAgent),baidu.platform.isIphone = /iphone/i.test(navigator.userAgent),baidu.platform.isMacintosh = /macintosh/i.test(navigator.userAgent),baidu.platform.isWindows = /windows/i.test(navigator.userAgent),baidu.platform.isX11 = /x11/i.test(navigator.userAgent),baidu.sio = baidu.sio || {},baidu.sio._createScriptTag = function (e, t, n) {
    e.setAttribute("type", "text/javascript"), n && e.setAttribute("charset", n), e.setAttribute("src", t), document.getElementsByTagName("head")[0].appendChild(e)
},baidu.sio._removeScriptTag = function (e) {
    if (e.clearAttributes) e.clearAttributes(); else for (var t in e) e.hasOwnProperty(t) && delete e[t];
    e && e.parentNode && e.parentNode.removeChild(e), e = null
},baidu.sio.callByBrowser = function (e, t, n) {
    var i, a = document.createElement("SCRIPT"), r = 0, o = n || {}, u = o.charset, s = t || function () {
    }, d = o.timeOut || 0;
    a.onload = a.onreadystatechange = function () {
        if (!r) {
            var e = a.readyState;
            if ("undefined" == typeof e || "loaded" == e || "complete" == e) {
                r = 1;
                try {
                    s(), clearTimeout(i)
                } finally {
                    a.onload = a.onreadystatechange = null, baidu.sio._removeScriptTag(a)
                }
            }
        }
    }, d && (i = setTimeout(function () {
        a.onload = a.onreadystatechange = null, baidu.sio._removeScriptTag(a), o.onfailure && o.onfailure()
    }, d)), baidu.sio._createScriptTag(a, e, u)
},baidu.sio.callByServer = function (e, t, n) {
    function i(e) {
        return function () {
            try {
                e ? d.onfailure && d.onfailure() : (t.apply(window, arguments), clearTimeout(r)), window[a] = null, delete window[a]
            } catch (n) {
            } finally {
                baidu.sio._removeScriptTag(u)
            }
        }
    }

    var a, r, o, u = document.createElement("SCRIPT"), s = "bd__cbs__", d = n || {}, l = d.charset,
        c = d.queryField || "callback", f = d.timeOut || 0, p = new RegExp("(\\?|&)" + c + "=([^&]*)");
    baidu.lang.isFunction(t) ? (a = s + Math.floor(2147483648 * Math.random()).toString(36), window[a] = i(0)) : baidu.lang.isString(t) ? a = t : (o = p.exec(e)) && (a = o[2]), f && (r = setTimeout(i(1), f)), e = e.replace(p, "$1" + c + "=" + a), e.search(p) < 0 && (e += (e.indexOf("?") < 0 ? "?" : "&") + c + "=" + a), baidu.sio._createScriptTag(u, e, l)
},baidu.sio.log = function (e) {
    var t = new Image, n = "tangram_sio_log_" + Math.floor(2147483648 * Math.random()).toString(36);
    window[n] = t, t.onload = t.onerror = t.onabort = function () {
        t.onload = t.onerror = t.onabort = null, window[n] = null, t = null
    }, t.src = e
},baidu.string.decodeHTML = function (e) {
    var t = String(e).replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
    return t.replace(/&#([\d]+);/g, function (e, t) {
        return String.fromCharCode(parseInt(t, 10))
    })
},baidu.decodeHTML = baidu.string.decodeHTML,baidu.string.encodeHTML = function (e) {
    return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/ /g, "&nbsp;")
},baidu.encodeHTML = baidu.string.encodeHTML,baidu.string.filterFormat = function (e, t) {
    var n = Array.prototype.slice.call(arguments, 1), i = Object.prototype.toString;
    return n.length ? (n = 1 == n.length && null !== t && /\[object Array\]|\[object Object\]/.test(i.call(t)) ? t : n, e.replace(/#\{(.+?)\}/g, function (e, t) {
        var a, r, o, u, s;
        if (!n) return "";
        for (a = t.split("|"), r = n[a[0]], "[object Function]" == i.call(r) && (r = r(a[0])), o = 1, u = a.length; u > o; ++o) s = baidu.string.filterFormat[a[o]], "[object Function]" == i.call(s) && (r = s(r));
        return "undefined" == typeof r || null === r ? "" : r
    })) : e
},baidu.string.filterFormat.escapeJs = function (e) {
    if (!e || "string" != typeof e) return e;
    var t, n, i, a = [];
    for (t = 0, n = e.length; n > t; ++t) i = e.charCodeAt(t), a.push(i > 255 ? e.charAt(t) : "\\x" + i.toString(16));
    return a.join("")
},baidu.string.filterFormat.js = baidu.string.filterFormat.escapeJs,baidu.string.filterFormat.escapeString = function (e) {
    return e && "string" == typeof e ? e.replace(/["'<>\\\/`]/g, function (e) {
        return "&#" + e.charCodeAt(0) + ";"
    }) : e
},baidu.string.filterFormat.e = baidu.string.filterFormat.escapeString,baidu.string.filterFormat.toInt = function (e) {
    return parseInt(e, 10) || 0
},baidu.string.filterFormat.i = baidu.string.filterFormat.toInt,baidu.string.format = function (e, t) {
    e = String(e);
    var n = Array.prototype.slice.call(arguments, 1), i = Object.prototype.toString;
    return n.length ? (n = 1 == n.length && null !== t && /\[object Array\]|\[object Object\]/.test(i.call(t)) ? t : n, e.replace(/#\{(.+?)\}/g, function (e, t) {
        var a = n[t];
        return "[object Function]" == i.call(a) && (a = a(t)), "undefined" == typeof a ? "" : a
    })) : e
},baidu.format = baidu.string.format,function () {
    var e = /^\#[\da-f]{6}$/i, t = /^rgb\((\d+), (\d+), (\d+)\)$/, n = {
        black: "#000000",
        silver: "#c0c0c0",
        gray: "#808080",
        white: "#ffffff",
        maroon: "#800000",
        red: "#ff0000",
        purple: "#800080",
        fuchsia: "#ff00ff",
        green: "#008000",
        lime: "#00ff00",
        olive: "#808000",
        yellow: "#ffff0",
        navy: "#000080",
        blue: "#0000ff",
        teal: "#008080",
        aqua: "#00ffff"
    };
    baidu.string.formatColor = function (i) {
        if (e.test(i)) return i;
        if (t.test(i)) {
            for (var a, r = 1, i = "#"; 4 > r; r++) a = parseInt(RegExp["$" + r]).toString(16), i += ("00" + a).substr(a.length);
            return i
        }
        if (/^\#[\da-f]{3}$/.test(i)) {
            var o = i.charAt(1), u = i.charAt(2), s = i.charAt(3);
            return "#" + o + o + u + u + s + s
        }
        return n[i] ? n[i] : ""
    }
}(),baidu.string.getByteLength = function (e) {
    return String(e).replace(/[^\x00-\xff]/g, "ci").length
},baidu.string.stripTags = function (e) {
    return String(e || "").replace(/<[^>]+>/g, "")
},baidu.string.subByte = function (e, t, n) {
    return e = String(e), n = n || "", 0 > t || baidu.string.getByteLength(e) <= t ? e + n : (e = e.substr(0, t).replace(/([^\x00-\xff])/g, "$1 ").substr(0, t).replace(/[^\x00-\xff]$/, "").replace(/([^\x00-\xff]) /g, "$1"), e + n)
},baidu.string.toHalfWidth = function (e) {
    return String(e).replace(/[\uFF01-\uFF5E]/g, function (e) {
        return String.fromCharCode(e.charCodeAt(0) - 65248)
    }).replace(/\u3000/g, " ")
},baidu.string.wbr = function (e) {
    return String(e).replace(/(?:<[^>]+>)|(?:&#?[0-9a-z]{2,6};)|(.{1})/gi, "$&<wbr>").replace(/><wbr>/g, ">")
},baidu.swf = baidu.swf || {},baidu.swf.getMovie = function (e) {
    var t, n = document[e];
    return 9 == baidu.browser.ie ? n && n.length ? 1 == (t = baidu.array.remove(baidu.lang.toArray(n), function (e) {
        return "embed" != e.tagName.toLowerCase()
    })).length ? t[0] : t : n : n || window[e]
},baidu.swf.Proxy = function (e, t, n) {
    var i, a = this, r = this._flash = baidu.swf.getMovie(e);
    return t ? void (i = setInterval(function () {
        try {
            r[t] && (a._initialized = !0, clearInterval(i), n && n())
        } catch (e) {
        }
    }, 100)) : this
},baidu.swf.Proxy.prototype.getFlash = function () {
    return this._flash
},baidu.swf.Proxy.prototype.isReady = function () {
    return !!this._initialized
},baidu.swf.Proxy.prototype.call = function (e, t) {
    try {
        var n = this.getFlash(), i = Array.prototype.slice.call(arguments);
        i.shift(), n[e] && n[e].apply(n, i)
    } catch (a) {
    }
},baidu.swf.version = function () {
    var e = navigator;
    if (e.plugins && e.mimeTypes.length) {
        var t = e.plugins["Shockwave Flash"];
        if (t && t.description) return t.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0"
    } else if (window.ActiveXObject && !window.opera) for (var n = 12; n >= 2; n--) try {
        var i = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + n);
        if (i) {
            var a = i.GetVariable("$version");
            return a.replace(/WIN/g, "").replace(/,/g, ".")
        }
    } catch (r) {
    }
}(),baidu.swf.createHTML = function (e) {
    e = e || {};
    var t, n, i, a, r, o, u = baidu.swf.version, s = e.ver || "6.0.0", d = {}, l = baidu.string.encodeHTML;
    for (a in e) d[a] = e[a];
    if (e = d, !u) return "";
    for (u = u.split("."), s = s.split("."), i = 0; 3 > i && (t = parseInt(u[i], 10), n = parseInt(s[i], 10), !(t > n)); i++) if (n > t) return "";
    var c = e.vars, f = ["classid", "codebase", "id", "width", "height", "align"];
    if (e.align = e.align || "middle", e.classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", e.codebase = "http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0", e.movie = e.url || "", delete e.vars, delete e.url, "string" == typeof c) e.flashvars = c; else {
        var p = [];
        for (a in c) o = c[a], p.push(a + "=" + encodeURIComponent(o));
        e.flashvars = p.join("&")
    }
    var h = ["<object "];
    for (i = 0, r = f.length; r > i; i++) o = f[i], h.push(" ", o, '="', l(e[o]), '"');
    h.push(">");
    var b = {
        wmode: 1,
        scale: 1,
        quality: 1,
        play: 1,
        loop: 1,
        menu: 1,
        salign: 1,
        bgcolor: 1,
        base: 1,
        allowscriptaccess: 1,
        allownetworking: 1,
        allowfullscreen: 1,
        seamlesstabbing: 1,
        devicefont: 1,
        swliveconnect: 1,
        flashvars: 1,
        movie: 1
    };
    for (a in e) o = e[a], a = a.toLowerCase(), b[a] && (o || o === !1 || 0 === o) && h.push('<param name="' + a + '" value="' + l(o) + '" />');
    e.src = e.movie, e.name = e.id, delete e.id, delete e.movie, delete e.classid, delete e.codebase, e.type = "application/x-shockwave-flash", e.pluginspage = "http://www.macromedia.com/go/getflashplayer", h.push("<embed");
    var g;
    for (a in e) if (o = e[a], o || o === !1 || 0 === o) {
        if (new RegExp("^salign$", "i").test(a)) {
            g = o;
            continue
        }
        h.push(" ", a, '="', l(o), '"')
    }
    return g && h.push(' salign="', l(g), '"'), h.push("></embed></object>"), h.join("")
},baidu.swf.create = function (e, t) {
    e = e || {};
    var n = baidu.swf.createHTML(e) || e.errorMessage || "";
    t && "string" == typeof t && (t = document.getElementById(t)), t ? t.innerHTML = n : document.write(n)
},baidu.url = baidu.url || {},baidu.url.escapeSymbol = function (e) {
    return String(e).replace(/[#%&+=\/\\\ \　\f\r\n\t]/g, function (e) {
        return "%" + (256 + e.charCodeAt()).toString(16).substring(1).toUpperCase()
    })
},baidu.url.getQueryValue = function (e, t) {
    var n = new RegExp("(^|&|\\?|#)" + baidu.string.escapeReg(t) + "=([^&#]*)(&|$|#)", ""), i = e.match(n);
    return i ? i[2] : null
},baidu.url.jsonToQuery = function (e, t) {
    var n, i = [], a = t || function (e) {
        return baidu.url.escapeSymbol(e)
    };
    return baidu.object.each(e, function (e, t) {
        if (baidu.lang.isArray(e)) for (n = e.length; n--;) i.push(t + "=" + a(e[n], t)); else i.push(t + "=" + a(e, t))
    }), i.join("&")
},baidu.url.queryToJson = function (e) {
    for (var t, n, i, a, r = e.substr(e.lastIndexOf("?") + 1), o = r.split("&"), u = o.length, s = {}, d = 0; u > d; d++) o[d] && (a = o[d].split("="), t = a[0], n = a[1], i = s[t], "undefined" == typeof i ? s[t] = n : baidu.lang.isArray(i) ? i.push(n) : s[t] = [i, n]);
    return s
},baidu.data = baidu.data || {},baidu.data.XPC = baidu.lang.createClass(function (e, t, n) {
    n = n || {}, this._canUsePostMessage = "function" == typeof window.postMessage || "object" == typeof window.postMessage, this._isParent = e, this.ready = !1, this.currentDomain = this._getDomainByUrl(location.href), e && t ? (this._channel = this._createIframe(t), this.targetDomain = this._getDomainByUrl(t), this.source = this._channel.contentWindow || this._channel, baidu.on(this._channel, "load", baidu.fn.bind(function () {
        this.send("init")
    }, this)), timeout = parseInt(n.timeout) || 3e4, this._timer = setTimeout(baidu.fn.bind(function () {
        this.dispatchEvent(this._createEvent("error", "Tiemout."))
    }, this), timeout)) : e ? this.dispatchEvent(this._createEvent("error", "need url.")) : (this.targetDomain = null, this.source = window.parent, this.allowDomains = n.allowDomains || ["*"]);
    var i = baidu.fn.bind("_onMessage", this);
    if (this._canUsePostMessage) baidu.on(window, "message", i); else try {
        var a = e ? this.source : window, r = a.opener || {}, o = ["parentReceiveHandler", "childReceiveHandler"],
            u = o[e ? 0 : 1], s = o[e ? 1 : 0];
        r.xpc = r.xpc || {}, r.xpc[u] = i, this._sendHandlerName = s, this._xpc = r.xpc, a.opener = r
    } catch (d) {
        this.dispatchEvent(this._createEvent("error", d.message))
    }
}).extend({
    _createIframe: function (e) {
        var t = document.createElement("IFRAME");
        return t.src = "about:blank", t.frameBorder = 0, baidu.dom.setStyles(t, {
            position: "absolute",
            left: "-10000px",
            top: "-10000px",
            width: "10px",
            height: "10px"
        }), document.body.appendChild(t), t.src = e, t
    }, _createEvent: function (e, t) {
        return {type: e, data: t}
    }, _checkDomain: function (e) {
        if (this._isParent) return e === this.targetDomain;
        for (var t = this.allowDomains, n = t.length; n--;) {
            var i = t[n];
            if ("*" === i || i === e) return !0
        }
        return !1
    }, _getDomainByUrl: function (e) {
        var t = document.createElement("A");
        return t.href = e, t.protocol + "//" + t.hostname + (80 === (parseInt(t.port) || 80) ? "" : ":" + t.port)
    }, _onMessage: function (e) {
        e = e || window.event, this._checkDomain(e.origin) && (this.source = e.source, this.targetDomain = e.origin, this.ready ? this.dispatchEvent(this._createEvent("message", e.data)) : (this._isParent ? (clearTimeout(this._timer), delete this._timer) : this.send("init"), this.ready = !0, this.dispatchEvent(this._createEvent("ready"))))
    }, send: function (e) {
        if (this._canUsePostMessage) this.source.postMessage(e, this.targetDomain); else {
            var t = {type: "message", data: e, origin: this.currentDomain, source: window};
            this._xpc[this._sendHandlerName](t)
        }
    }
}),baidu.data.dataSource = baidu.dataSource = baidu.data.dataSource || {},baidu.data.dataSource.DataSource = baidu.lang.createClass(function (e) {
    this._cacheData = {}, baidu.object.extend(this, e), this.addEventListener("onbeforeget", function (e) {
        var t, n = this;
        n.cache && (t = n._cacheData[e.key]) && e.onsuccess && e.onsuccess.call(n, t), e.returnValue = !!t
    })
}, {className: "baidu.data.dataSource.DataSource"}).extend({
    maxCache: 100, cache: !0, update: function (e) {
        var t = this;
        baidu.object.extend(t, e)
    }, get: function (e) {
    }, _get: function (e) {
        var t, n = this;
        return t = n.transition.call(n, n.source), n.cache && e.key && t && n._addCacheData(e.key, t), e.onsuccess && e.onsuccess.call(n, t), t
    }, transition: function (e) {
        return e
    }, _addCacheData: function (e, t) {
        for (var n = this, i = baidu.object.keys(n._cacheData); n.maxCache > 0 && i.length >= n.maxCache;) delete n._cacheData[i.shift()];
        n.maxCache > 0 && (n._cacheData[e] = t)
    }
}),baidu.data.dataSource.ajax = function (e, t) {
    t = baidu.object.extend({url: e}, t || {});
    var n = new baidu.data.dataSource.DataSource(t);
    return n.get = function (e) {
        var t = this;
        e = e || {}, e.key = e.key || t.url + (e.param ? "?" + baidu.json.stringify(e.param) : ""), t.dispatchEvent("onbeforeget", e) || baidu.ajax.request(t.url, t.ajaxOption || {
            method: e.method || "get",
            data: e.param,
            onsuccess: function (n, i) {
                t.source = i, t._get(e)
            },
            onfailure: function (n) {
                e.onfailure && e.onfailure.call(t, n)
            }
        })
    }, n
},baidu.data.dataSource.local = function (e, t) {
    t = baidu.object.extend({source: e}, t || {});
    var n = new baidu.data.dataSource.DataSource(t);
    return n.get = function (e) {
        var t, n = this;
        return e = baidu.object.extend({key: "local"}, e || {}), n.dispatchEvent("onbeforeget", e) || (t = n._get(e)), t
    }, n
},baidu.data.dataSource.sio = function (e, t) {
    t = baidu.object.extend({url: e}, t || {});
    var n = new baidu.data.dataSource.DataSource(t);
    return n.get = function (e) {
        var t = this;
        e = e || {}, e.key = e.key || t.url + (e.param ? "?" + baidu.json.stringify(e.param) : ""), e.callByType = e.callByType && "browser" == e.callByType.toLowerCase() ? "callByBrowser" : "callByServer", t.dispatchEvent("onbeforeget", e) || baidu.sio[e.callByType](e.key, function () {
            t._get(e)
        })
    }, n
},baidu.data.storage = function () {
    function e(e) {
        return e.replace(/[_\s]/g, function (e) {
            return "_" == e ? "__" : "_s"
        })
    }

    function t() {
        return baidu.dom.g(o + "-storage")
    }

    function n() {
        var e;
        return e = window.ActiveXObject ? i() : window.localStorage ? a() : r()
    }

    function i() {
        return baidu.dom.insertHTML(document.body, "beforeEnd", baidu.string.format('<div id="#{id}" style="display:none;"></div>', {id: o + "-storage"})), t().addBehavior("#default#userData"), {
            set: function (n, i, a, r) {
                var o = u.SUCCESS, s = t(), d = e(n), l = r && r.expires ? r.expires : (new Date).getTime() + 31536e6;
                baidu.lang.isDate(l) && (l = l.getTime()), s.expires = new Date(l).toUTCString();
                try {
                    s.setAttribute(d, i), s.save(d)
                } catch (c) {
                    o = u.OVERFLOW
                }
                s = null, a && a.call(this, o, i)
            }, get: function (n, i) {
                var a = u.SUCCESS, r = t(), o = e(n), s = null;
                try {
                    r.load(o), s = r.getAttribute(o)
                } catch (d) {
                    throw a = u.FAILURE, "baidu.data.storage.get error!"
                }
                i && i.call(this, a, s)
            }, del: function (n, i) {
                var a, r = u.SUCCESS, o = t(), s = e(n);
                try {
                    o.load(s), a = o.getAttribute(s), a ? (o.removeAttribute(s), o.expires = new Date(315532799e3).toUTCString(), o.save(s)) : r = u.FAILURE
                } catch (d) {
                    r = u.FAILURE
                }
                i && i.call(this, r, a)
            }
        }
    }

    function a() {
        return {
            set: function (t, n, i, a) {
                var r = u.SUCCESS, o = window.localStorage, s = e(t), d = a && a.expires ? a.expires : 0;
                baidu.lang.isDate(d) && (d = d.getTime());
                try {
                    o.setItem(s, d + "|" + n)
                } catch (l) {
                    r = u.OVERFLOW
                }
                i && i.call(this, r, n)
            }, get: function (t, n) {
                var i, a, r = u.SUCCESS, o = window.localStorage, s = e(t), d = null;
                try {
                    d = o.getItem(s)
                } catch (l) {
                    r = u.FAILURE
                }
                d ? (i = d.indexOf("|"), a = parseInt(d.substring(0, i), 10), new Date(a).getTime() > (new Date).getTime() || 0 == a ? d = d.substring(i + 1, d.length) : (d = null, r = u.FAILURE, this.del(t))) : r = u.FAILURE, n && n.call(this, r, d)
            }, del: function (t, n) {
                var i = u.SUCCESS, a = window.localStorage, r = e(t), o = null;
                try {
                    o = a.getItem(r)
                } catch (s) {
                    i = u.FAILURE
                }
                o ? (o = o.substring(o.indexOf("|") + 1, o.length), i = u[o ? "SUCCESS" : "FAILURE"], o && a.removeItem(r)) : i = u.FAILURE, n && n.call(this, i, o)
            }
        }
    }

    function r() {
        return {
            set: function (t, n, i, a) {
                baidu.cookie.set(e(t), n, a), i && i.call(me, u.SUCCESS, n)
            }, get: function (t, n) {
                var i = baidu.cookie.get(e(t));
                n && n.call(me, u[i ? "SUCCESS" : "FAILURE"], i)
            }, del: function (t, n) {
                var i = e(t), a = baidu.cookie.get(i);
                baidu.cookie.remove(i), n && n.call(me, u[a ? "SUCCESS" : "FAILURE"], a)
            }
        }
    }

    var o = baidu.lang.guid(), u = {SUCCESS: 0, FAILURE: 1, OVERFLOW: 2};
    return {
        set: function (e, t, i, a) {
            var r = this;
            !r._storage && (r._storage = n()), r._storage.set.apply(r._storage, arguments)
        }, get: function (e, t) {
            var i = this;
            !i._storage && (i._storage = n()), i._storage.get.apply(i._storage, arguments)
        }, remove: function (e, t) {
            var i = this;
            !i._storage && (i._storage = n()), i._storage.del.apply(i._storage, arguments)
        }
    }
}(),baidu.flash = baidu.flash || {},baidu.flash._Base = function () {
    function e() {
        return r + Math.floor(2147483648 * Math.random()).toString(36)
    }

    function t(e) {
        return "undefined" != typeof e && "undefined" != typeof e.flashInit && e.flashInit() ? !0 : !1
    }

    function n(e, t) {
        var n = null;
        e = e.reverse(), baidu.each(e, function (e) {
            n = t.call(e.fnName, e.params), e.callBack(n)
        })
    }

    function i(t) {
        var n = "";
        return baidu.lang.isFunction(t) ? (n = e(), window[n] = function () {
            t.apply(window, arguments)
        }, n) : baidu.lang.isString ? t : void 0
    }

    function a(t) {
        t.id || (t.id = e());
        var n = t.container || "";
        return delete t.container, baidu.swf.create(t, n), baidu.swf.getMovie(t.id)
    }

    var r = "bd__flash__";
    return function (e, r) {
        function o() {
            t(c) && (clearInterval(h), h = null, u(), f = !0)
        }

        function u() {
            n(p, c), p = []
        }

        var s = this, d = "undefined" != typeof e.autoRender ? e.autoRender : !0, l = e.createOptions || {}, c = null,
            f = !1, p = [], h = null, r = r || [];
        s.render = function () {
            c = a(l), r.length > 0 && baidu.each(r, function (t, n) {
                r[n] = i(e[t] || new Function)
            }), s.call("setJSFuncName", [r])
        }, s.isReady = function () {
            return f
        }, s.call = function (e, t, n) {
            if (e) {
                n = n || new Function;
                var i = null;
                f ? (i = c.call(e, t), n(i)) : (p.push({
                    fnName: e,
                    params: t,
                    callBack: n
                }), !h && (h = setInterval(o, 200)))
            }
        }, s.createFunName = function (e) {
            return i(e)
        }, d && s.render()
    }
}(),baidu.flash.avatarMaker = function (e) {
    var t = this, e = e || {}, n = e.uploadURL, i = new baidu.flash._Base(e, ["uploadCallBack", "tipHandler"]);
    t.upload = function (e) {
        i.call("upload", [e || n])
    }
},baidu.flash.fileUploader = function (e) {
    var t = this, e = e || {};
    e.createOptions = baidu.extend({wmod: "transparent"}, e.createOptions || {});
    var n = new baidu.flash._Base(e, ["selectiFile", "exceedMaxSize", "deleteFile", "uploadStart", "uploadComplete", "uploadError", "uploadProgress"]);
    t.setHandCursor = function (e) {
        n.call("setHandCursor", [e || !1])
    }, t.setMSFunName = function (e) {
        n.call("setMSFunName", [n.createFunName(e)])
    }, t.upload = function (e, t, i, a) {
        "string" == typeof e && "string" == typeof t && ("undefined" == typeof a && (a = -1), n.call("upload", [e, t, i, a]))
    }, t.cancel = function (e) {
        "undefined" == typeof e && (e = -1), n.call("cancel", [e])
    }, t.deleteFile = function (e, t) {
        var i = function (e) {
            t(e)
        };
        return "undefined" == typeof e ? void n.call("deleteFilesAll", [], i) : ("Number" == typeof e && (e = [e]), e.sort(function (e, t) {
            return t - e
        }), void baidu.each(e, function (e) {
            n.call("deleteFileBy", e, i)
        }))
    }, t.addFileType = function (e) {
        "Array" != typeof e && (e = [e]), n.call("addFileTypes", e)
    }, t.setFileType = function (e) {
        "Array" != typeof e && (e = [e]), n.call("setFileTypes", e)
    }, t.setMaxNum = function (e) {
        n.call("setMaxNum", [e])
    }, t.setMaxSize = function (e) {
        n.call("setMaxSize", [e])
    }, t.getFileAll = function (e) {
        n.call("getFileAll", [], e)
    }, t.getFileByIndex = function (e, t) {
        n.call("getFileByIndex", [], t)
    }, t.getStatusByIndex = function (e, t) {
        n.call("getStatusByIndex", [], t)
    }
},baidu.flash.imageUploader = function (e) {
    var t = this, e = e || {}, n = new baidu.flash._Base(e, ["single", "allComplete", "changeHigh"]);
    t.upload = function () {
        n.call("upload")
    }, t.pause = function () {
        n.call("pause")
    }
},baidu.form = baidu.form || {},baidu.form.ValidRule = baidu.form.ValidRule || baidu.lang.createClass(function () {
    var e = this;
    e._rules = {
        required: function (e) {
            return !(!e || /^(?:\s|\u3000)+$/.test(e))
        },
        remote: function (e, t) {
            return !(!t || "true" != t.toLowerCase())
        },
        email: /^[\w!#\$%'\*\+\-\/=\?\^`{}\|~]+([.][\w!#\$%'\*\+\-\/=\?\^`{}\|~]+)*@[-a-z0-9]{1,20}[.][a-z0-9]{1,10}([.][a-z]{2})?$/i,
        number: /^(?:[1-9]\d+|\d)(?:\.\d+)?$/,
        maxlength: function (e, t) {
            return e.length <= t
        },
        minlength: function (e, t) {
            return e.length >= t
        },
        rangelength: function (e, t) {
            return e.length >= t[0] && e.length <= t[1]
        },
        equal: function (e, t) {
            return e === (baidu.lang.isFunction(t) ? t() : t)
        },
        telephone: /^(((?:[\+0]\d{1,3}-[1-9]\d{1,2})|\d{3,4})-)?\d{5,8}$/
    }
}).extend({
    _getRule: function (e) {
        var t = this;
        return baidu.lang.isString(e) ? t._rules[e] : t._rules
    }, match: function (e, t, n, i) {
        var a = this, r = a._getRule(e), o = i && i.param;
        "remote" == e.toLowerCase() ? (baidu.lang.isString(o) && (o = {url: o}), o = baidu.object.extend({}, o), o.data && baidu.lang.isFunction(o.data) && (o.data = o.data(t)), o.onsuccess = o.onfailure = function (e, t) {
            n(r(e, t))
        }, baidu.ajax.request(o.url, o)) : n(baidu.lang.isFunction(r) ? r(t, o) : r.test(t))
    }, addRule: function (e, t) {
        this._rules[e] = t
    }
}),baidu.form.Validator = baidu.lang.createClass(function (e, t, n) {
    function i(e, t) {
        var n = {
            element: t ? r._form.elements[t] : r._form,
            eventName: e,
            handler: baidu.fn.bind("_onEventHandler", r, t)
        };
        baidu.event.on(n.element, n.eventName, n.handler), r.addEventListener("ondispose", function () {
            baidu.event.un(n.element, n.eventName, n.handler)
        })
    }

    var a, r = this, o = baidu.form.Validator, u = o._addons.length, s = 0;
    for (r._form = baidu.dom.g(e), r._fieldRule = t, r._validRule = new baidu.form.ValidRule, baidu.object.extend(r, n), a = r.validateEvent.split(","), baidu.object.each(r._fieldRule, function (e, t) {
        baidu.array.each(baidu.lang.isString(e.eventName) ? e.eventName.split(",") : a, function (e) {
            i(e, t)
        })
    }), r.validateOnSubmit && i("onsubmit"); u > s; s++) o._addons[s](r)
}).extend({
    validateEvent: "blur", validateOnSubmit: !0, _onEventHandler: function (e, t) {
        var n = this;
        return e ? void n.validateField(e) : (baidu.event.preventDefault(t), void n.validate(function (e, t) {
            e && n._form.submit()
        }))
    }, addRule: function (e, t, n) {
        var i = this;
        i._validRule.addRule(e, t), i.dispatchEvent("onaddrule", {name: e, handler: t, message: n})
    }, validate: function (e) {
        var t = this, n = baidu.object.keys(t._fieldRule), i = [], a = 0;
        baidu.array.each(n, function (r) {
            t.validateField(r, function (r, o) {
                i = i.concat(o), a++ >= n.length - 1 && (baidu.lang.isFunction(e) && e(i.length <= 0, i), t.dispatchEvent("onvalidate", {resultList: i}))
            })
        })
    }, validateField: function (e, t) {
        function n() {
            d++ >= u.length - 1 && (a.dispatchEvent("validatefield", {
                field: e,
                resultList: s
            }), baidu.lang.isFunction(t) && t(s.length <= 0, s))
        }

        var i, a = this, r = a._fieldRule[e].rule, o = a._form.elements[e].value,
            u = baidu.array.filter(baidu.object.keys(r), function (e) {
                return i = r[e], (o || "required" == e) && (i.hasOwnProperty("param") ? i.param : i) !== !1
            }), s = [], d = 0;
        0 == u.length && n(), baidu.array.each(u, function (t) {
            i = r[t], a._validRule.match(t, o, function (i) {
                !i && s.push({type: t, field: e, result: i}), n()
            }, {param: i.hasOwnProperty("param") ? i.param : i})
        })
    }, dispose: function () {
        var e = this;
        e.dispatchEvent("ondispose"), baidu.lang.Class.prototype.dispose.call(e)
    }
}),baidu.form.Validator._addons = [],baidu.form.Validator.register = function (e) {
    "function" == typeof e && baidu.form.Validator._addons.push(e)
},baidu.form.Validator.register(function (e) {
    e.showMessage && (e._defaultId = baidu.lang.guid(), e._defaultMessage = {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        number: "Please enter a valid number.",
        maxlength: "Please enter no more than #{param} characters.",
        minlength: "Please enter at least #{param} characters.",
        rangelength: "Please enter a value between #{param[0]} and #{param[1]} characters long.",
        equal: "Please enter the same value again.",
        telephone: "Please enter a valid telephone number."
    }, e.addEventListener("onaddrule", function (t) {
        e._defaultMessage[t.name] = t.message
    }), e.addEventListener("onvalidatefield", function (t) {
        var n = e._getContentElement(t.field), i = t.resultList.length <= 0,
            a = i ? baidu.object.keys(e._fieldRule[t.field].rule).pop() : t.resultList[0].type,
            r = e._fieldRule[t.field].rule[a], o = r.message;
        !o && (o = e._defaultMessage[a]), o = i ? o.success || "" : o.failure || o, baidu.dom.addClass(n, "tangram-" + e.uiType + "-" + (i ? "success" : "failure")), baidu.dom.addClass(n, "tangram-" + e.uiType + "-" + t.field + "-" + (i ? "success" : "failure")), baidu.dom.removeClass(n, "tangram-" + e.uiType + "-" + (i ? "failure" : "success")), baidu.dom.removeClass(n, "tangram-" + e.uiType + "-" + t.field + "-" + (i ? "failure" : "success")), n.innerHTML = baidu.string.format(o, {
            param: r.param,
            "param[0]": baidu.lang.isArray(r.param) ? r.param[0] : "",
            "param[1]": baidu.lang.isArray(r.param) ? r.param[1] : ""
        })
    }))
}),baidu.object.extend(baidu.form.Validator.prototype, {
    showMessage: !0,
    uiType: "validator",
    tplDOM: '<label id="#{id}" class="#{class}"></label>',
    _getContentElement: function (e) {
        var t = this, n = t._defaultId + "_" + e, i = baidu.dom.g(n), a = baidu.dom.g(t._fieldRule[e].messageContainer);
        return i || (baidu.dom.insertHTML(a || t._form.elements[e], a ? "beforeEnd" : "afterEnd", baidu.string.format(t.tplDOM, {
            id: n,
            "class": "tangram-" + t.uiType
        })), i = baidu.dom.g(n)), i
    },
    getMessageContainer: function (e) {
        return baidu.dom.g(this._defaultId + "_" + e)
    }
}),baidu.fx = baidu.fx || {},baidu.fx.Timeline = baidu.lang.createClass(function (e) {
    baidu.object.extend(this, baidu.fx.Timeline.options), baidu.object.extend(this, e)
}, {className: "baidu.fx.Timeline", options: {interval: 16, duration: 500, dynamic: !0}}).extend({
    launch: function () {
        var e = this;
        return e.dispatchEvent("onbeforestart"), "function" == typeof e.initialize && e.initialize(), e["btime"] = (new Date).getTime(), e["etime"] = e["btime"] + (e.dynamic ? e.duration : 0), e["pulsed"](), e
    }, "pulsed": function () {
        var e = this, t = (new Date).getTime();
        return e.percent = (t - e["btime"]) / e.duration, e.dispatchEvent("onbeforeupdate"), t >= e["etime"] ? ("function" == typeof e.render && e.render(e.transition(e.percent = 1)), "function" == typeof e.finish && e.finish(), e.dispatchEvent("onafterfinish"), void e.dispose()) : ("function" == typeof e.render && e.render(e.transition(e.percent)), e.dispatchEvent("onafterupdate"), void (e["timer"] = setTimeout(function () {
            e["pulsed"]()
        }, e.interval)))
    }, transition: function (e) {
        return e
    }, cancel: function () {
        this["timer"] && clearTimeout(this["timer"]), this["etime"] = this["btime"], "function" == typeof this.restore && this.restore(), this.dispatchEvent("oncancel"), this.dispose()
    }, end: function () {
        this["timer"] && clearTimeout(this["timer"]), this["etime"] = this["btime"], this["pulsed"]()
    }
}),baidu.fx.create = function (e, t, n) {
    var i = new baidu.fx.Timeline(t);
    i.element = e, i._className = n || i._className, i["original"] = {};
    var a = "baidu_current_effect";
    return i.addEventListener("onbeforestart", function () {
        var e, t = this;
        t.attribName = "att_" + t._className.replace(/\W/g, "_"), e = t.element.getAttribute(a), t.element.setAttribute(a, (e || "") + "|" + t.guid + "|", 0), t.overlapping || ((e = t.element.getAttribute(t.attribName)) && window[baidu.guid]._instances[e].cancel(), t.element.setAttribute(t.attribName, t.guid, 0))
    }), i["clean"] = function (e) {
        var t, n = this;
        (e = n.element) && (e.removeAttribute(n.attribName),
            t = e.getAttribute(a), t = t.replace("|" + n.guid + "|", ""), t ? e.setAttribute(a, t, 0) : e.removeAttribute(a))
    }, i.addEventListener("oncancel", function () {
        this["clean"](), this["restore"]()
    }), i.addEventListener("onafterfinish", function () {
        this["clean"](), this.restoreAfterFinish && this["restore"]()
    }), i.protect = function (e) {
        this["original"][e] = this.element.style[e]
    }, i["restore"] = function () {
        var e, t = this["original"], n = this.element.style;
        for (var i in t) e = t[i], "undefined" != typeof e && (n[i] = e, !e && n.removeAttribute ? n.removeAttribute(i) : !e && n.removeProperty && n.removeProperty(i))
    }, i
},baidu.fx.collapse = function (e, t) {
    if (!(e = baidu.dom.g(e))) return null;
    var n, i, a = e, r = {
        vertical: {
            value: "height",
            offset: "offsetHeight",
            stylesValue: ["paddingBottom", "paddingTop", "borderTopWidth", "borderBottomWidth"]
        },
        horizontal: {
            value: "width",
            offset: "offsetWidth",
            stylesValue: ["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"]
        }
    }, o = baidu.fx.create(a, baidu.object.extend({
        orientation: "vertical", initialize: function () {
            i = r[this.orientation], this.protect(i.value), this.protect("overflow"), this.restoreAfterFinish = !0, n = a[i.offset], a.style.overflow = "hidden"
        }, transition: function (e) {
            return Math.pow(1 - e, 2)
        }, render: function (e) {
            a.style[i.value] = Math.floor(e * n) + "px"
        }, finish: function () {
            baidu.dom.hide(a)
        }
    }, t || {}), "baidu.fx.expand_collapse");
    return o.launch()
},baidu.fx.current = function (e) {
    if (!(e = baidu.dom.g(e))) return null;
    var t, n, i = /\|([^\|]+)\|/g;
    do if (n = e.getAttribute("baidu_current_effect")) break; while ((e = e.parentNode) && 1 == e.nodeType);
    if (!n) return null;
    if (t = n.match(i)) {
        i = /\|([^\|]+)\|/;
        for (var a = 0; a < t.length; a++) i.test(t[a]), t[a] = window[baidu.guid]._instances[RegExp.$1]
    }
    return t
},baidu.fx.expand = function (e, t) {
    if (!(e = baidu.dom.g(e))) return null;
    var n, i, a = e, r = {
        vertical: {
            value: "height",
            offset: "offsetHeight",
            stylesValue: ["paddingBottom", "paddingTop", "borderTopWidth", "borderBottomWidth"]
        },
        horizontal: {
            value: "width",
            offset: "offsetWidth",
            stylesValue: ["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"]
        }
    }, o = baidu.fx.create(a, baidu.object.extend({
        orientation: "vertical", initialize: function () {
            function e(e, t) {
                var n = parseInt(baidu.getStyle(e, t));
                return n = isNaN(n) ? 0 : n, n = baidu.lang.isNumber(n) ? n : 0
            }

            i = r[this.orientation], baidu.dom.show(a), this.protect(i.value), this.protect("overflow"), this.restoreAfterFinish = !0, n = a[i.offset], baidu.each(i.stylesValue, function (t) {
                n -= e(a, t)
            }), a.style.overflow = "hidden", a.style[i.value] = "1px"
        }, transition: function (e) {
            return Math.sqrt(e)
        }, render: function (e) {
            a.style[i.value] = Math.floor(e * n) + "px"
        }
    }, t || {}), "baidu.fx.expand_collapse");
    return o.launch()
},baidu.fx.opacity = function (e, t) {
    if (!(e = baidu.dom.g(e))) return null;
    t = baidu.object.extend({from: 0, to: 1}, t || {});
    var n = e, i = baidu.fx.create(n, baidu.object.extend({
        initialize: function () {
            baidu.dom.show(e), baidu.browser.ie ? this.protect("filter") : (this.protect("opacity"), this.protect("KHTMLOpacity")), this.distance = this.to - this.from
        }, render: function (e) {
            var t = this.distance * e + this.from;
            baidu.browser.ie ? n.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity:" + Math.floor(100 * t) + ")" : (n.style.opacity = t, n.style.KHTMLOpacity = t)
        }
    }, t), "baidu.fx.opacity");
    return i.launch()
},baidu.fx.fadeIn = function (e, t) {
    if (!(e = baidu.dom.g(e))) return null;
    var n = baidu.fx.opacity(e, baidu.object.extend({from: 0, to: 1, restoreAfterFinish: !0}, t || {}));
    return n._className = "baidu.fx.fadeIn", n
},baidu.fx.fadeOut = function (e, t) {
    if (!(e = baidu.dom.g(e))) return null;
    var n = baidu.fx.opacity(e, baidu.object.extend({from: 1, to: 0, restoreAfterFinish: !0}, t || {}));
    return n.addEventListener("onafterfinish", function () {
        baidu.dom.hide(this.element)
    }), n._className = "baidu.fx.fadeOut", n
},baidu.fx.getTransition = function (e) {
    var t = baidu.fx.transitions;
    return e && "string" == typeof t[e] || (e = "linear"), new Function("percent", t[e])
},baidu.fx.transitions = {
    none: "return 0",
    full: "return 1",
    linear: "return percent",
    reverse: "return 1 - percent",
    parabola: "return Math.pow(percent, 2)",
    antiparabola: "return 1 - Math.pow(1 - percent, 2)",
    sinoidal: "return (-Math.cos(percent * Math.PI)/2) + 0.5",
    wobble: "return (-Math.cos(percent * Math.PI * (9 * percent))/2) + 0.5",
    spring: "return 1 - (Math.cos(percent * 4.5 * Math.PI) * Math.exp(-percent * 6))"
},baidu.fx.highlight = function (e, t) {
    if (!(e = baidu.dom.g(e))) return null;
    var n = e, i = baidu.fx.create(n, baidu.object.extend({
        initialize: function () {
            var e = this, t = baidu.dom.getStyle, i = baidu.string.formatColor, a = i(t(n, "color")) || "#000000",
                r = i(t(n, "backgroundColor"));
            e.beginColor = e.beginColor || r || "#FFFF00", e.endColor = e.endColor || r || "#FFFFFF", e.finalColor = e.finalColor || e.endColor || e.element.style.backgroundColor, e.textColor == a && (e.textColor = ""), this.protect("color"), this.protect("backgroundColor"), e.c_b = [], e.c_d = [], e.t_b = [], e.t_d = [];
            for (var o, u = 0; 3 > u; u++) o = 2 * u + 1, e.c_b[u] = parseInt(e.beginColor.substr(o, 2), 16), e.c_d[u] = parseInt(e.endColor.substr(o, 2), 16) - e.c_b[u], e.textColor && (e.t_b[u] = parseInt(a.substr(o, 2), 16), e.t_d[u] = parseInt(e.textColor.substr(o, 2), 16) - e.t_b[u])
        }, render: function (e) {
            for (var t, i = this, a = "#", r = "#", o = 0; 3 > o; o++) t = Math.round(i.c_b[o] + i.c_d[o] * e).toString(16), a += ("00" + t).substr(t.length), i.textColor && (t = Math.round(i.t_b[o] + i.t_d[o] * e).toString(16), r += ("00" + t).substr(t.length));
            n.style.backgroundColor = a, i.textColor && (n.style.color = r)
        }, finish: function () {
            this.textColor && (n.style.color = this.textColor), n.style.backgroundColor = this.finalColor
        }
    }, t || {}), "baidu.fx.highlight");
    return i.launch()
},baidu.fx.mask = function (e, t) {
    if (!(e = baidu.dom.g(e)) || "absolute" != baidu.dom.getStyle(e, "position")) return null;
    var n = e, i = {};
    t = t || {};
    var a = /^(\d+px|\d?\d(\.\d+)?%|100%|left|center|right)(\s+(\d+px|\d?\d(\.\d+)?%|100%|top|center|bottom))?/i;
    !a.test(t.startOrigin) && (t.startOrigin = "0px 0px");
    var t = baidu.object.extend({restoreAfterFinish: !0, from: 0, to: 1}, t || {}),
        r = baidu.fx.create(n, baidu.object.extend({
            initialize: function () {
                n.style.display = "", this.protect("clip"), i.width = n.offsetWidth, i.height = n.offsetHeight, a.test(this.startOrigin);
                var e, t, r = RegExp.$1.toLowerCase(), o = RegExp.$4.toLowerCase(), u = this.element.offsetWidth,
                    s = this.element.offsetHeight;
                /\d+%/.test(r) ? e = parseInt(r, 10) / 100 * u : /\d+px/.test(r) ? e = parseInt(r) : "left" == r ? e = 0 : "center" == r ? e = u / 2 : "right" == r && (e = u), o ? /\d+%/.test(o) ? t = parseInt(o, 10) / 100 * s : /\d+px/.test(o) ? t = parseInt(o) : "top" == o ? t = 0 : "center" == o ? t = s / 2 : "bottom" == o && (t = s) : t = s / 2, i.x = e, i.y = t
            }, render: function (e) {
                var t = this.to * e + this.from * (1 - e), a = i.y * (1 - t) + "px ", r = i.x * (1 - t) + "px ",
                    o = i.x * (1 - t) + i.width * t + "px ", u = i.y * (1 - t) + i.height * t + "px ";
                n.style.clip = "rect(" + a + o + u + r + ")"
            }, finish: function () {
                this.to < this.from && (n.style.display = "none")
            }
        }, t), "baidu.fx.mask");
    return r.launch()
},baidu.fx.move = function (e, t) {
    if (!(e = baidu.dom.g(e)) || "static" == baidu.dom.getStyle(e, "position")) return null;
    if (t = baidu.object.extend({x: 0, y: 0}, t || {}), 0 == t.x && 0 == t.y) return null;
    var n = baidu.fx.create(e, baidu.object.extend({
        initialize: function () {
            this.protect("top"), this.protect("left"), this.originX = parseInt(baidu.dom.getStyle(e, "left")) || 0, this.originY = parseInt(baidu.dom.getStyle(e, "top")) || 0
        }, transition: function (e) {
            return 1 - Math.pow(1 - e, 2)
        }, render: function (t) {
            e.style.top = this.y * t + this.originY + "px", e.style.left = this.x * t + this.originX + "px"
        }
    }, t), "baidu.fx.move");
    return n.launch()
},baidu.fx.moveBy = function (e, t, n) {
    if (!(e = baidu.dom.g(e)) || "static" == baidu.dom.getStyle(e, "position") || "object" != typeof t) return null;
    var i = {};
    i.x = t[0] || t.x || 0, i.y = t[1] || t.y || 0;
    var a = baidu.fx.move(e, baidu.object.extend(i, n || {}));
    return a
},baidu.fx.moveTo = function (e, t, n) {
    if (!(e = baidu.dom.g(e)) || "static" == baidu.dom.getStyle(e, "position") || "object" != typeof t) return null;
    var i = [t[0] || t.x || 0, t[1] || t.y || 0], a = parseInt(baidu.dom.getStyle(e, "left")) || 0,
        r = parseInt(baidu.dom.getStyle(e, "top")) || 0,
        o = baidu.fx.move(e, baidu.object.extend({x: i[0] - a, y: i[1] - r}, n || {}));
    return o
},baidu.fx.scale = function (e, t) {
    if (!(e = baidu.dom.g(e))) return null;
    t = baidu.object.extend({from: .1, to: 1}, t || {});
    var n = /^(-?\d+px|\d?\d(\.\d+)?%|100%|left|center|right)(\s+(-?\d+px|\d?\d(\.\d+)?%|100%|top|center|bottom))?/i;
    !n.test(t.transformOrigin) && (t.transformOrigin = "0px 0px");
    var i = {}, a = baidu.fx.create(e, baidu.object.extend({
        fade: !0, initialize: function () {
            baidu.dom.show(e);
            var t = this, a = i, r = e.style, o = function (e) {
                t.protect(e)
            };
            if (baidu.browser.ie) {
                o("top"), o("left"), o("position"), o("zoom"), o("filter"), this.offsetX = parseInt(baidu.dom.getStyle(e, "left")) || 0, this.offsetY = parseInt(baidu.dom.getStyle(e, "top")) || 0, "static" == baidu.dom.getStyle(e, "position") && (r.position = "relative"), n.test(this.transformOrigin);
                var u, s, d = RegExp.$1.toLowerCase(), l = RegExp.$4.toLowerCase(), c = this.element.offsetWidth,
                    f = this.element.offsetHeight;
                /\d+%/.test(d) ? u = parseInt(d, 10) / 100 * c : /\d+px/.test(d) ? u = parseInt(d) : "left" == d ? u = 0 : "center" == d ? u = c / 2 : "right" == d && (u = c), l ? /\d+%/.test(l) ? s = parseInt(l, 10) / 100 * f : /\d+px/.test(l) ? s = parseInt(l) : "top" == l ? s = 0 : "center" == l ? s = f / 2 : "bottom" == l && (s = f) : s = f / 2, r.zoom = this.from, a.cx = u, a.cy = s
            } else o("WebkitTransform"), o("WebkitTransformOrigin"), o("MozTransform"), o("MozTransformOrigin"), o("OTransform"), o("OTransformOrigin"), o("transform"), o("transformOrigin"), o("opacity"), o("KHTMLOpacity"), r.WebkitTransform = r.MozTransform = r.OTransform = r.transform = "scale(" + this.from + ")", r.WebkitTransformOrigin = r.MozTransformOrigin = r.OTransformOrigin = r.transformOrigin = this.transformOrigin
        }, render: function (t) {
            var n = e.style, a = 1 == this.to, a = "boolean" == typeof this.opacityTrend ? this.opacityTrend : a,
                r = a ? this.percent : 1 - this.percent, o = this.to * t + this.from * (1 - t);
            baidu.browser.ie ? (n.zoom = o, this.fade && (n.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity:" + Math.floor(100 * r) + ")"), n.top = this.offsetY + i.cy * (1 - o), n.left = this.offsetX + i.cx * (1 - o)) : (n.WebkitTransform = n.MozTransform = n.OTransform = n.transform = "scale(" + o + ")", this.fade && (n.KHTMLOpacity = n.opacity = r))
        }
    }, t), "baidu.fx.scale");
    return a.launch()
},baidu.fx.zoomOut = function (e, t) {
    if (!(e = baidu.dom.g(e))) return null;
    t = baidu.object.extend({
        to: .1, from: 1, opacityTrend: !1, restoreAfterFinish: !0, transition: function (e) {
            return 1 - Math.pow(1 - e, 2)
        }
    }, t || {});
    var n = baidu.fx.scale(e, t);
    return n.addEventListener("onafterfinish", function () {
        baidu.dom.hide(this.element)
    }), n
},baidu.fx.puff = function (e, t) {
    return baidu.fx.zoomOut(e, baidu.object.extend({to: 1.8, duration: 800, transformOrigin: "50% 50%"}, t || {}))
},baidu.fx.pulsate = function (e, t, n) {
    if (!(e = baidu.dom.g(e))) return null;
    if (isNaN(t) || 0 == t) return null;
    var i = e, a = baidu.fx.create(i, baidu.object.extend({
        initialize: function () {
            this.protect("visibility")
        }, transition: function (e) {
            return Math.cos(2 * Math.PI * e)
        }, render: function (e) {
            i.style.visibility = e > 0 ? "visible" : "hidden"
        }, finish: function () {
            setTimeout(function () {
                baidu.fx.pulsate(e, --t, n)
            }, 10)
        }
    }, n), "baidu.fx.pulsate");
    return a.launch()
},baidu.fx.remove = function (e, t) {
    var n = t.onafterfinish ? t.onafterfinish : new Function;
    return baidu.fx.fadeOut(e, baidu.object.extend(t || {}, {
        onafterfinish: function () {
            baidu.dom.remove(this.element), n.call(this)
        }
    }))
},baidu.fx.scrollBy = function (e, t, n) {
    if (!(e = baidu.dom.g(e)) || "object" != typeof t) return null;
    var i = {}, a = {};
    i.x = t[0] || t.x || 0, i.y = t[1] || t.y || 0;
    var r = baidu.fx.create(e, baidu.object.extend({
        initialize: function () {
            var t = a.sTop = e.scrollTop, n = a.sLeft = e.scrollLeft;
            a.sx = Math.min(e.scrollWidth - e.clientWidth - n, i.x), a.sy = Math.min(e.scrollHeight - e.clientHeight - t, i.y)
        }, transition: function (e) {
            return 1 - Math.pow(1 - e, 2)
        }, render: function (t) {
            e.scrollTop = a.sy * t + a.sTop, e.scrollLeft = a.sx * t + a.sLeft
        }, restore: function () {
            e.scrollTop = a.sTop, e.scrollLeft = a.sLeft
        }
    }, n), "baidu.fx.scroll");
    return r.launch()
},baidu.fx.scrollTo = function (e, t, n) {
    if (!(e = baidu.dom.g(e)) || "object" != typeof t) return null;
    var i = {};
    return i.x = (t[0] || t.x || 0) - e.scrollLeft, i.y = (t[1] || t.y || 0) - e.scrollTop, baidu.fx.scrollBy(e, i, n)
},baidu.fx.shake = function (e, t, n) {
    function i() {
        for (var e = 0; e < arguments.length; e++) if (!isNaN(arguments[e])) return arguments[e]
    }

    if (!(e = baidu.dom.g(e))) return null;
    var a = e;
    t = t || [];
    var r = baidu.fx.create(a, baidu.object.extend({
        initialize: function () {
            this.protect("top"), this.protect("left"), this.protect("position"), this.restoreAfterFinish = !0, "static" == baidu.dom.getStyle(a, "position") && (a.style.position = "relative");
            var e = this["original"];
            this.originX = parseInt(e.left || 0), this.originY = parseInt(e.top || 0), this.offsetX = i(t[0], t.x, 16), this.offsetY = i(t[1], t.y, 5)
        }, transition: function (e) {
            var t = 1 - e;
            return Math.floor(16 * t) % 2 == 1 ? t : e - 1
        }, render: function (e) {
            a.style.top = this.offsetY * e + this.originY + "px", a.style.left = this.offsetX * e + this.originX + "px"
        }
    }, n || {}), "baidu.fx.shake");
    return r.launch()
},baidu.fx.zoomIn = function (e, t) {
    return (e = baidu.dom.g(e)) ? (t = baidu.object.extend({
        to: 1,
        from: .1,
        restoreAfterFinish: !0,
        transition: function (e) {
            return Math.pow(e, 2)
        }
    }, t || {}), baidu.fx.scale(e, t)) : null
},baidu.history = baidu.history || {},function () {
    function e(e) {
        var t = r.contentWindow.document;
        e = e || "#", t.open(), t.write('<script>window.top.location.hash="' + e + '";</script>'), t.close(), t.location.hash = e
    }

    function t() {
        o && o(), a = window.location.hash.replace(/^#/, "") || ""
    }

    function n() {
        var n = location.hash.replace(/^#/, "");
        n != a && (r ? e(n) : t())
    }

    function i(i) {
        a = "", i && (o = i), baidu.browser.ie ? (r = document.createElement("iframe"), r.style.display = "none", document.body.appendChild(r), e(window.location.hash), r.attachEvent("onload", function () {
            t()
        }), setInterval(n, 100)) : baidu.browser.firefox < 3.6 ? setInterval(n, 100) : (a != location.hash.replace(/^#/, "") && (a = window.location.hash.replace(/^#/, "") || ""), window.onhashchange = t)
    }

    var a, r, o;
    baidu.history.listen = i
}(),baidu.i18n = baidu.i18n || {},baidu.i18n.cultures = baidu.i18n.cultures || {},baidu.i18n.cultures["en-US"] = baidu.object.extend(baidu.i18n.cultures["en-US"] || {}, {
    calendar: {
        dateFormat: "yyyy-MM-dd",
        titleNames: "#{MM}&nbsp;#{yyyy}",
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        dayNames: {mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat", sun: "Sun"}
    },
    timeZone: -5,
    whitespace: new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g"),
    number: {
        group: ",", groupLength: 3, decimal: ".", positive: "", negative: "-", _format: function (e, t) {
            return baidu.i18n.number._format(e, {
                group: this.group,
                groupLength: this.groupLength,
                decimal: this.decimal,
                symbol: t ? this.negative : this.positive
            })
        }
    },
    currency: {symbol: "$"},
    language: {ok: "ok", cancel: "cancel", signin: "signin", signup: "signup"}
}),baidu.i18n.currentLocale = baidu.i18n.currentLocale || "en-US",baidu.i18n.cultures["zh-CN"] = baidu.object.extend(baidu.i18n.cultures["zh-CN"] || {}, {
    calendar: {
        dateFormat: "yyyy-MM-dd",
        titleNames: "#{yyyy}年&nbsp;#{MM}月",
        monthNames: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
        dayNames: {mon: "一", tue: "二", wed: "三", thu: "四", fri: "五", sat: "六", sun: "日"}
    },
    timeZone: 8,
    whitespace: new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g"),
    number: {
        group: ",", groupLength: 3, decimal: ".", positive: "", negative: "-", _format: function (e, t) {
            return baidu.i18n.number._format(e, {
                group: this.group,
                groupLength: this.groupLength,
                decimal: this.decimal,
                symbol: t ? this.negative : this.positive
            })
        }
    },
    currency: {symbol: "￥"},
    language: {ok: "确定", cancel: "取消", signin: "注册", signup: "登录"}
}),baidu.i18n.currentLocale = baidu.i18n.currentLocale || "zh-CN",baidu.i18n.number = baidu.i18n.number || {
    format: function (e, t, n) {
        var i = e, a = this, r = t && baidu.i18n.cultures[t].number,
            o = baidu.i18n.cultures[n || baidu.i18n.currentLocale].number, u = !1;
        "string" == typeof e ? (e.indexOf(r.negative) > -1 ? (u = !0, e = e.replace(r.negative, "")) : e.indexOf(r.positive) > -1 && (e = e.replace(r.positive, "")), e = e.replace(new RegExp(r.group, "g"), "")) : 0 > e && (u = !0, e *= -1);
        var s = parseFloat(e);
        return isNaN(s) ? i : o._format ? o._format(s, u) : a._format(s, {
            group: o.group || ",",
            decimal: o.decimal || ".",
            groupLength: o.groupLength,
            symbol: u ? o.negative : o.positive
        })
    }, _format: function (e, t) {
        var n = String(e).split(t.decimal), i = n[0].split("").reverse(), a = n[1] || "", r = 0, o = 0, u = "";
        r = parseInt(i.length / t.groupLength), o = i.length % t.groupLength, r = 0 == o ? r - 1 : r;
        for (var s = 1; r >= s; s++) i.splice(t.groupLength * s + (s - 1), 0, t.group);
        return i = i.reverse(), u = t.symbol + i.join("") + (a.length > 0 ? t.decimal + a : "")
    }
},baidu.i18n.currency = baidu.i18n.currency || {
    format: function (e, t, n) {
        var i = t && baidu.i18n.cultures[t].currency, a = baidu.i18n.cultures[n || baidu.i18n.currentLocale].currency;
        return "string" == typeof e && (e = e.replace(i.symbol)), a.symbol + this._format(e, t, n)
    }, _format: function (e, t, n) {
        return baidu.i18n.number.format(e, t, n || baidu.i18n.currentLocale)
    }
},baidu.i18n.date = baidu.i18n.date || {
    getDaysInMonth: function (e, t) {
        var n = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return 1 == t && baidu.i18n.date.isLeapYear(e) ? 29 : n[t]
    }, isLeapYear: function (e) {
        return !(e % 400 && (e % 4 || !(e % 100)))
    }, toLocaleDate: function (e, t, n) {
        return this._basicDate(e, t, n || baidu.i18n.currentLocale)
    }, _basicDate: function (e, t, n) {
        var i, a, r = baidu.i18n.cultures[n || baidu.i18n.currentLocale].timeZone, o = 60 * r, u = e.getTime();
        return t ? (i = baidu.i18n.cultures[t].timeZone, a = 60 * i) : (a = -1 * e.getTimezoneOffset(), i /= 60), new Date(i != r ? u + 6e4 * (o - a) : u)
    }
},baidu.i18n.string = baidu.i18n.string || {
    trim: function (e, t) {
        var n = baidu.i18n.cultures[t || baidu.i18n.currentLocale].whitespace;
        return String(e).replace(n, "")
    }, translation: function (e, t) {
        var n = baidu.i18n.cultures[t || baidu.i18n.currentLocale].language;
        return n[e] || ""
    }
},baidu.ui = baidu.ui || {version: "1.3.9"},baidu.ui.getUI = function (e) {
    for (var e = e.split("-"), t = baidu.ui, n = e.length, i = 0; n > i; i++) t = t[e[i].charAt(0).toUpperCase() + e[i].slice(1)];
    return t
},baidu.ui.create = function (e, t) {
    return baidu.lang.isString(e) && (e = baidu.ui.getUI(e)), new e(t)
},baidu.ui.Base = {
    id: "", getId: function (e) {
        var t, n = this;
        return t = "tangram-" + n.uiType + "--" + (n.id ? n.id : n.guid), null != e ? t + "-" + e : t
    }, getClass: function (e) {
        var t = this, n = t.classPrefix, i = t.skin;
        return e && (n += "-" + e, i += "-" + e), t.skin && (n += " " + i), n
    }, getMain: function () {
        return baidu.g(this.mainId)
    }, getBody: function () {
        return baidu.g(this.getId())
    }, uiType: "", getCallRef: function () {
        return "window['$BAIDU$']._instances['" + this.guid + "']"
    }, getCallString: function (e) {
        for (var t = 0, n = Array.prototype.slice.call(arguments, 1), i = n.length; i > t; t++) "string" == typeof n[t] && (n[t] = "'" + n[t] + "'");
        return this.getCallRef() + "." + e + "(" + n.join(",") + ");"
    }, on: function (e, t, n) {
        baidu.on(e, t, n), this.addEventListener("ondispose", function () {
            baidu.un(e, t, n)
        })
    }, renderMain: function (e) {
        var t = this;
        if (!t.getMain()) return e = baidu.g(e), e || (e = document.createElement("div"), document.body.appendChild(e), e.style.position = "absolute", e.className = t.getClass("main")), e.id || (e.id = t.getId("main")), t.mainId = e.id, e.setAttribute("data-guid", t.guid), e
    }, dispose: function () {
        this.dispatchEvent("dispose"), baidu.lang.Class.prototype.dispose.call(this)
    }
},baidu.ui.createUI = function (e, t) {
    t = t || {};
    var n, i, a = t.superClass || baidu.lang.Class, r = a == baidu.lang.Class ? 1 : 0, o = function (t, u) {
        var s = this;
        t = t || {}, a.call(s, r ? t.guid || "" : t, !0), baidu.object.extend(s, o.options), baidu.object.extend(s, t), s.classPrefix = s.classPrefix || "tangram-" + s.uiType.toLowerCase();
        for (n in baidu.ui.behavior) "undefined" != typeof s[n] && s[n] && (baidu.object.extend(s, baidu.ui.behavior[n]), baidu.lang.isFunction(s[n]) ? s.addEventListener("onload", function () {
            baidu.ui.behavior[n].call(s[n].apply(s))
        }) : baidu.ui.behavior[n].call(s));
        for (e.apply(s, arguments), n = 0, i = o._addons.length; i > n; n++) o._addons[n](s);
        t.parent && s.setParent && s.setParent(t.parent), !u && t.autoRender && s.render(t.element)
    }, u = function () {
    };
    u.prototype = a.prototype;
    var s = o.prototype = new u;
    for (n in baidu.ui.Base) s[n] = baidu.ui.Base[n];
    return o.extend = function (e) {
        for (n in e) o.prototype[n] = e[n];
        return o
    }, o._addons = [], o.register = function (e) {
        "function" == typeof e && o._addons.push(e)
    }, o.options = {}, o
},baidu.ui.behavior = baidu.ui.behavior || {},function () {
    var e = baidu.ui.behavior.resizable = function () {
    };
    e.resizeableHandle = null, e.resizeCreate = function (e) {
        var t, n = this;
        e = e || {}, n.resizable && (baidu.object.extend(n, e), n._resizeOption = {
            onresizestart: function () {
                n.dispatchEvent("onresizestart")
            }, onresize: function (e) {
                n.dispatchEvent("onresize", e)
            }, onresizeend: function () {
                n.dispatchEvent("onresizeend")
            }
        }, baidu.each(["minWidth", "minHeight", "maxWidth", "maxHeight"], function (e, t) {
            n[e] && (n._resizeOption[e] = n[e])
        }), n._resizeOption.classPrefix = e.classPrefix || n.classPrefix, t = e.target || n.getBody(), n.direction && (n._resizeOption.direction = n.direction), n.resizeableHandle = baidu.dom.resizable(t, n._resizeOption))
    }, e.resizeUpdate = function (e) {
        this.resizeableHandle.update(e)
    }, e.resizeCancel = function () {
        this.resizeableHandle.cancel()
    }, e.resizeEnable = function () {
        this.resizeableHandle.enable()
    }
}(),function () {
    var e = baidu.ui.behavior.draggable = function () {
        this.addEventListener("onload", function () {
            var e = this;
            e.dragUpdate()
        }), this.addEventListener("ondispose", function () {
            var e = this;
            baidu.un(e._dragOption.handler, "mousedown", e._dragFn), e._dragOption.handler = e.dragHandler = e._lastDragHandler = null
        })
    };
    e.dragUpdate = function (e) {
        var t = this;
        e = e || {}, t.draggable && (t._lastDragHandler && t._dragFn && baidu.event.un(t._lastDragHandler, "onmousedown", t._dragFn), baidu.object.extend(t, e), t._dragOption = {
            ondragstart: function () {
                t.dispatchEvent("ondragstart")
            }, ondrag: function () {
                t.dispatchEvent("ondrag")
            }, ondragend: function () {
                t.dispatchEvent("ondragend")
            }, autoStop: !0
        }, t._dragOption.range = t.dragRange || [], t._dragOption.handler = t._lastDragHandler = t.dragHandler || t.getMain(), t._dragOption.handler && baidu.event.on(t._dragOption.handler, "onmousedown", t._dragFn = function () {
            baidu.dom.drag(t.dragTarget || t.getMain(), t._dragOption)
        }))
    }
}(),T.i18n.currentLocale = "zh-CN",T.i18n.number.formatNumber = function (e) {
    return null == e ? "" : "--" == e ? e : isNaN(parseFloat(e)) ? e : T.i18n.number.format(e, T.i18n.currentLocale)
},T.i18n.number.formatRatio = function (e) {
    return null == e ? "" : "--" == e ? e : isNaN(parseFloat(e)) ? e : T.i18n.number.format(e, T.i18n.currentLocale) + "%"
},T.i18n.number.formatTime = function (e, t) {
    var n, i, a, r, o;
    if ("--" == e) return e;
    if (2 == t) {
        a = e / 60 | 0, r = Math.round(e) - 60 * a;
        var u = "";
        return a && (u += a + "&#039;"), u += r + "&quot;"
    }
    return n = e / 86400 | 0, e = Math.round(e) - 24 * n * 3600, i = e / 3600 | 0, e = Math.round(e) - 3600 * i, a = e / 60 | 0, r = Math.round(e) - 60 * a, Math.round(n) < 10 && (n = n > 0 ? "0" + n : ""), Math.round(i) < 10 && (i = "0" + i), Math.round(a) < 10 && (a = "0" + a), Math.round(r) < 10 && (r = "0" + r), o = n ? n + " " + i + ":" + a + ":" + r : i + ":" + a + ":" + r
},T.config = T.config || {},T.config.holidays = {
    "元旦节": /(^2011\/01\/0[1-3]$)|(^2012\/01\/0[1-3]$)|(^2013\/01\/0[1-3]$)|(^2014\/01\/01$)|(^201[5-6]\/01\/0[1-3]$)|(^2017\/01\/0[1-2]$)|(^201[8-9]\/01\/01$)|(^2018\/12\/3[0-1]$)|(^2020\/01\/01$)/,
    "春节": /(^2011\/02\/0[2-8]$)|(^2012\/01\/2[2-8]$)|(^2013\/02\/(09|1[0-5])$)|(^2014\/((01\/31)|(02\/0[1-6]))$)|(^2015\/(02\/(1[8-9]|2[0-4]))$)|(^2016\/(02\/(0[7-9]|1[0-3]))$)|(^2017\/((01\/2[7-9])|(01\/3[0-1])|(02\/0[1-2]))$)|(^2018\/(02\/(1[5-9]|2[0-1]))$)|(^2019\/02\/(10|0[4-9])$)|(^2020\/((01\/2[4-9])|(01\/30))$)/,
    "情人节": /02\/14$/,
    "愚人节": /04\/01$/,
    "清明节": /(^2011\/04\/0[3-5]$)|(^201(2|7)\/04\/0[2-4]$)|(^20(13|20)\/04\/0[4-6]$)|(^201(4|8|9)\/04\/0[5-7]$)|(^2015\/04\/0[4-6]$)|(^2016\/04\/0[2-4]$)/,
    "劳动节": /(^2011\/(04\/30|05\/0[12])$)|(^201(([2-3])|7|8)\/(04\/(29|30)|05\/01)$)|(^201[4-5]\/05\/0[1-3]$)|(^2016\/(04\/30|05\/0[1-2])$)|(^2019\/05\/01$)|(^2020\/05\/0[1-5]$)/,
    "儿童节": /06\/01$/,
    "端午节": /(^2011\/06\/0[4-6]$)|(^2012\/06\/2[2-4]$)|(^2013\/06\/1[0-2]$)|(^2014\/((05\/31)|(06\/0[1-2]))$)|(^2015\/06\/2[0-2]$)|(^2016\/06\/(09|1[0-1])$)|(^2017\/05\/((2[8-9])|(30))$)|(^2018\/06\/1[6-8]$)|(^2019\/06\/0[7-9]$)|(^2020\/06\/2[5-7]$)/,
    "建军节": /08\/01$/,
    "中秋节": /(^2011\/09\/1[0-2]$)|(^2012\/09\/30$)|(^2013\/09\/(19|2[0-1])$)|(^2014\/09\/0[6-8]$)|(^2015\/09\/2[6-7]$)|(^2016\/09\/1[5-7]$)|(^2017\/10\/04$)|(^2018\/09\/2[2-4]$)|(^2019\/09\/1[3-5]$)|(^2020\/10\/01$)/,
    "国庆节": /10\/0[1-7]$|(^2020\/10\/08$)/,
    "圣诞节": /12\/25$/
},T.config.lineChartDayTimeMap = {
    0: "00:00 - 00:59",
    1: "01:00 - 01:59",
    2: "02:00 - 02:59",
    3: "03:00 - 03:59",
    4: "04:00 - 04:59",
    5: "05:00 - 05:59",
    6: "06:00 - 06:59",
    7: "07:00 - 07:59",
    8: "08:00 - 08:59",
    9: "09:00 - 09:59",
    10: "10:00 - 10:59",
    11: "11:00 - 11:59",
    12: "12:00 - 12:59",
    13: "13:00 - 13:59",
    14: "14:00 - 14:59",
    15: "15:00 - 15:59",
    16: "16:00 - 16:59",
    17: "17:00 - 17:59",
    18: "18:00 - 18:59",
    19: "19:00 - 19:59",
    20: "20:00 - 20:59",
    21: "21:00 - 21:59",
    22: "22:00 - 22:59",
    23: "23:00 - 23:59"
},baidu.lang.Class.create = function (e, t) {
    return new e(t)
},T.createClass = function (e) {
    return T.lang.createClass(function (e) {
        this.options = T.extend(T.object.clone(this.options), T.object.clone(e)), this._init && this._init()
    }).extend(e)
},T.createUI = function (e) {
    return T.ui.createUI(function (e) {
        this.uiType = this._type, this.classPrefix = this._type, this.options = T.extend(T.object.clone(this.options), T.object.clone(e)), this._init && this._init()
    }).extend(e)
},T.inlineTip = function (e) {
    if (T.g(e)) if (T.dom.hasAttr(T.g(e), "defaultText")) {
        T.on(e, "click", function () {
            T.trim(this.value) == T.dom.getAttr(this, "defaultText") ? (T.dom.removeClass(this, "gray"), this.value = "") : T.dom.removeClass(this, "gray")
        }), T.on(e, "blur", function () {
            ("" == T.trim(this.value) || T.trim(this.value) == T.dom.getAttr(this, "defaultText")) && (T.dom.addClass(this, "gray"), this.value = T.dom.getAttr(this, "defaultText"))
        });
        var t = T.dom.getAttr(T.g(e), "defaultText");
        t != T.g(e).value ? T.dom.removeClass(e, "gray") : T.dom.addClass(e, "gray")
    } else T.dom.addClass(e, "gray"), T.on(e, "click", function () {
        T.trim(this.value) == this.defaultValue && (T.dom.removeClass(this, "gray"), this.value = "")
    }), T.on(e, "blur", function () {
        "" == T.trim(this.value) && (T.dom.addClass(this, "gray"), this.value = this.defaultValue)
    })
},T.getInlineTipInputValue = function (e) {
    return T.g(e) ? T.dom.hasAttr(T.g(e), "defaultText") && T.dom.getAttr(T.g(e), "defaultText") == T.g(e).value ? "" : T.g(e).value : void 0
},T.clearInlineTipInputValue = function (e) {
    var t = T.g(e);
    t && null != t.defaultValue && (T.dom.removeClass(t, "gray"), t.value = t.defaultValue, T.event.uns([t], ["focus", "blur"]))
},T.getCornerPosition = function (e, t, n) {
    var e = T.g(e), i = T.dom.getPosition(e);
    switch (t) {
        case"br":
            i.left += e.offsetWidth, i.top += e.offsetHeight;
            break;
        case"tr":
            i.left += e.offsetWidth;
            break;
        case"bl":
            i.top += e.offsetHeight
    }
    return n && (n.left && (i.left += n.left), n.top && (i.top += n.top)), i
},T.setRelatedPosition = function (e, t, n, i) {
    T.dom.setPosition(e, T.getCornerPosition(t, n, i))
},T.expose = function (e) {
    T.setRelatedPosition(e, e, "tl"), T.dom.addClass(e, "expose")
},T.unexpose = function (e) {
    T.dom.removeClass(e, "expose")
},T.event.ons = function (e, t, n, i) {
    T.each(e, function (e) {
        t instanceof Array ? T.each(t, function (t) {
            T.on(e, t, n, i)
        }) : T.on(e, t, n, i)
    })
},T.ons = T.event.ons,T.event.uns = function (e, t, n) {
    T.each(e, function (e) {
        t instanceof Array ? T.each(t, function (t) {
            T.un(e, t, n)
        }) : T.un(e, t, n)
    })
},T.uns = T.event.uns,baidu.truncat = function (e, t) {
    if (null == e) return e;
    var n = 1;
    return /[^\x00-\xff]/.test(e) && (t = Math.floor(2 * t / 3), n = 2), e.length > t ? e.substr(0, t - 2 / n) + "..." : e
},baidu.truncatFloat = function (e, t) {
    var n = Math.pow(10, t);
    return Math.round(e * n) / n
},baidu.param = function (e) {
    var t = [];
    return baidu.object.each(e, function (e, n) {
        null != e && (baidu.lang.isArray(e) ? baidu.each(e, function (e) {
            t.push(encodeURIComponent(n + "[]") + "=" + encodeURIComponent(e))
        }) : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e)))
    }), t.join("&").replace(/%20/g, "+")
},baidu.dragable = function (e, t) {
    var n = baidu.G(t.handler) || baidu.G(e);
    t.onbeforestart = t.onbeforestart || function () {
    }, t.onstart = t.onafterstart || function () {
    }, delete t.onafterstart, n.onmousedown = function (n) {
        return t.onbeforestart(), baidu.dragable.orgUpHandler = document.onmouseup, baidu.drag(e, window.event || n, t), document.onmouseup = function (e) {
            baidu.drag.stop(), document.onmouseup = baidu.dragable.orgUpHandler
        }, !1
    }, n.onselectstart = function (e) {
        return !1
    }
},baidu.ajax.checkConditionalPageTip = function (e) {
    var t = T.g("ConditionalPageTip");
    e ? (text = T.dom.one(".text", t), text.innerHTML = e, T.show(t)) : T.hide(t)
},baidu.ajax.jsonPost = function (e, t, n, i) {
    baidu.ajax.request(e, {
        data: baidu.param(t), onsuccess: function (e) {
            var a = null;
            a = baidu.json.decode(e.responseText), 0 === a.status || a.status > 2 ? (n(a.data, a.status), 0 === a.status && /\/a$/i.test(t.method) && baidu.ajax.checkConditionalPageTip(a.msg)) : 1 === a.status ? i && i(a.msg) : 2 === a.status && (window.location.href = a.data)
        }, onfailure: function (e) {
            0 != e.status && i && i("系统错误，请稍候再试…")
        }, method: "POST", noCache: !0
    })
},baidu.ajax.jsonGet = function (e, t, n, i) {
    baidu.ajax.request(e, {
        data: baidu.param(t), onsuccess: function (e) {
            var a = null;
            try {
                a = baidu.json.decode(e.responseText), 0 === a.status || a.status > 2 ? (n(a.data, a.status), 0 === a.status && /\/a$/i.test(t.method) && baidu.ajax.checkConditionalPageTip(a.msg)) : 1 === a.status ? i && i(a.msg) : 2 === a.status && (window.location.href = a.data)
            } catch (r) {
                i && i("系统错误，请稍候再试…")
            }
        }, onfailure: function () {
            i && i("系统错误，请稍候再试…")
        }, method: "GET", noCache: !0
    })
},baidu.dateSpan = function (e, t) {
    return e.getTime() != t.getTime() && null != t ? baidu.date.format(e, "（yyyy-MM-dd") + baidu.date.format(t, " ~ yyyy-MM-dd）") : baidu.date.format(e, "（yyyy-MM-dd）")
};
var EventRouter = {
    _events: {}, _owner: null, register: function (e, t) {
        this._events[e] ? this._events[e].push(t) : this._events[e] = [t]
    }, dispatch: function (e) {
        var t = [].slice.call(arguments, 1), n = this._events[e];
        if (n) for (var i = 0; i < n.length; i++) n[i].apply(this._owner, t);
        this._owner && T.lang.isFunction(this._owner[e]) && this._owner[e].apply(this._owner, t)
    }, setOwner: function (e) {
        this._owner = e
    }
};
!function () {
    var e = {};
    this.tmpl = function t(n, i) {
        var a = /\W/.test(n) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + n.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : e[n] = e[n] || t(document.getElementById(n).innerHTML);
        return i ? a(i) : a
    }
}(), function () {
    var e = {};
    getUniqueId = function (n) {
        for (var i = n || 8, a = ""; i--;) a += t();
        return e[a] ? getUniqueId(i) : (e[a] = 1, a)
    };
    var t = function () {
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", t = e.length;
        return e.charAt(Math.floor(Math.random() * t))
    }
}();
var AceTemplate = AceTemplate || {};
!function () {
    function e(e) {
        var t = [];
        t.push("with(this){"), t.push(e.replace(/[\r\n]+/g, "\n").replace(/^\n+|\s+$/gm, "").replace(/((^\s*[<>!#^&\u0000-\u0008\u007F-\uffff].*$|^.*[<>]\s*$|^(?!\s*(else|do|try|finally)\s*$)[^'":;,\[\]{}()\n\/]+$|^(\s*(([\w-]+\s*=\s*"[^"]*")|([\w-]+\s*=\s*'[^']*')))+\s*$|^\s*([.#][\w-.]+(:\w+)?(\s*|,))*(?!(else|do|while|try|return)\b)[.#]?[\w-.*]+(:\w+)?\s*\{.*$)\s?)+/gm, function (e) {
            return e = ['"', e.replace(/&none;/g, "").replace(/["'\\]/g, "\\$&").replace(/\n/g, "\\n").replace(/(!?!?#)\{(.*?)\}/g, function (e, t, n) {
                n = n.replace(/\\n/g, "\n").replace(/\\([\\'"])/g, "$1");
                var i = /^[a-z$][\w+$]+$/i.test(n) && !/^(true|false|NaN|null|this)$/.test(n);
                return ['",', i ? ["typeof ", n, '=="undefined"?"":'].join("") : "", "#" == t ? "_encode_" : "!!#" == t ? "_encodeAttr_" : "", "(", n, '),"'].join("")
            }), '"'].join("").replace(/^"",|,""$/g, ""), e ? ["_output_.push(", e, ");"].join("") : ""
        })), t.push("}");
        var n = new Function("_output_", "_encode_", "helper", "_encodeAttr_", t.join(""));
        return n
    }

    var t = {"#39": "'", quot: '"', lt: "<", gt: ">", amp: "&", nbsp: " "},
        n = {"'": "#39", '"': "quot", "<": "lt", ">": "gt", "&": "amp", " ": "nbsp"}, i = {
            g: function (e) {
                return "string" != typeof e ? e : document.getElementById(e)
            }, decodeHTML: function (e) {
                return String(e).replace(/&(#39|quot|lt|gt|amp|nbsp);/gi, function (e, n) {
                    return t[n]
                }).replace(/&#u([a-f\d]{4});/gi, function (e, t) {
                    return String.fromCharCode(parseInt("0x" + t))
                }).replace(/&#(\d+);/gi, function (e, t) {
                    return String.fromCharCode(+t)
                })
            }, encodeAttr: function (e) {
                return String(e).replace(/["']/g, function (e) {
                    return "&" + n[e] + ";"
                })
            }, encodeHTML: function (e) {
                return String(e).replace(/['"<>& ]/g, function (e) {
                    return "&" + n[e] + ";"
                })
            }, elementText: function (e) {
                return e && e.tagName ? /^(input|textarea)$/i.test(e.tagName) ? e.value : i.decodeHTML(e.innerHTML) : ""
            }
        }, a = {}, r = !1;
    AceTemplate.format = function (t, n, r) {
        if (!t) return "";
        var o, u;
        "object" == typeof t && t.tagName && (u = t, t = u.getAttribute("id")), r = r || this, o = a[t], o || (/[^\w-]/.test(t) ? o = e(t) : (u || (u = i.g(t)), o = this.register(t, u)));
        var s = [];
        return o.call(n || "", s, i.encodeHTML, r, i.encodeAttr), s.join("")
    }, AceTemplate.register = function (t, n) {
        if (!arguments.length && !r) {
            r = !0;
            for (var o = document.getElementsByTagName("script"), u = 0; u < o.length; u++) {
                var s = o[u];
                if (/^(text\/template)$/i.test(s.getAttribute("type"))) {
                    var t = s.getAttribute("id");
                    t && arguments.callee.call(this, t, s)
                }
            }
        }
        if (t) return a[t] ? a[t] : ("string" != typeof n && ("undefined" == typeof n && (n = i.g(t)), n = i.elementText(n)), a[t] = e(n))
    }, AceTemplate.unregister = function (e) {
        delete a[e]
    }
}(), T.lang.isUrl = T.lang.isUrl || function (e) {
    return /^((https|http|ftp|rtsp|mms)?:\/\/)?(([\w-]+\.)+[a-z]{2,6}|((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d))(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i.test(e)
}, T.lang.isUrlWithoutPrefix = T.lang.isUrlWithoutPrefix || function (e) {
    return new RegExp("^((https|http|ftp|rtsp|mms)?://)?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].[a-z]{2,6})(:[0-9]{1,4})?((/?)|(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$", "i").test(e);

}, T.dom.one = function (e, t) {
    T.isString(t) && (t = T.g(t));
    var n = T.dom.query(e, t);
    return n.length > 0 ? n[0] : null
}, T.initShowLine = function (e, t) {
    if (e) {
        var n = e.value.replace(/\r/gi, ""), i = n.split("\n").length;
        i > t ? (T.dom.next(e).innerHTML = "您最多可输入" + t + "个", e.pass = !1) : (e.pass = !0, T.dom.next(e).innerHTML = "");
        for (var a = "", r = 1; i >= r; r++) a += document.all ? r + "\r\n" : r + "\n";
        T.dom.prev(e).value = a, T.dom.prev(e).scrollTop = e.scrollTop, e.onscroll = function () {
            T.dom.prev(e).scrollTop = e.scrollTop
        }
    }
}, T.getTipElement = function (e) {
    var t = T.dom.create("div", {style: "position: absolute;"});
    return t.className = "tip-container", t.innerHTML = '<div style="position: relative;top:8px; left:-10px;" class="tip-div tip-theme title-theme"><div class="tip-arrow"></div><div class="tip-wrap">' + e + "</div></div>", t
}, T.beforeUnloadAlert = function () {
    window.onbeforeunload = function () {
        return '您还没有保存刚才的设置。如需要保存设置，请点击"留在此页"，然后点击当前页面的"确定"'
    }
}, T.postBtnBind = function (e, t) {
    var n = T.g(e), i = function () {
        setTimeout(function () {
            T.dom.removeClass(n, "disabled")
        }, 1e3)
    };
    T.on(n, "click", function (e) {
        T.dom.hasClass(n, "disabled") ? T.event.stop(e) : (T.dom.addClass(n, "disabled"), t(e, i))
    })
}, T.isInputsChanged = function () {
    return function (e) {
        for (var t = !1, n = e, i = 0; i < n.length; i++) {
            var a = n[i], r = a.type;
            if ("text" == r || "hidden" == r || "button" == r) {
                if (T.dom.hasAttr(a, "dyna-value")) {
                    if (a.value != T.dom.getAttr(a, "dyna-value")) {
                        t = !0;
                        break
                    }
                } else if (a.value != a.defaultValue) {
                    t = !0;
                    break
                }
            } else if ("radio" == r || "checkbox" == r) if (T.dom.hasAttr(a, "dyna-checked")) {
                var o = "true" == T.dom.getAttr(a, "dyna-checked") ? !0 : !1;
                if (a.checked != o) {
                    t = !0;
                    break
                }
            } else if (a.checked != a.defaultChecked) {
                t = !0;
                break
            }
        }
        return t
    }
}(), T.setDynaValue = function (e) {
    for (var t = e, n = 0; n < t.length; n++) {
        var i = t[n], a = i.type;
        "text" == a || "hidden" == a || "textarea" == a || "button" == a ? T.dom.setAttr(i, "dyna-value", i.value) : ("radio" == a || "checkbox" == a) && T.dom.setAttr(i, "dyna-checked", i.checked)
    }
}, T.resetForm = function (e) {
    for (var t = e, n = 0; n < t.length; n++) {
        var i = t[n], a = i.type, r = T.dom.hasAttr(i, "defaultText");
        "text" == a || "hidden" == a || "textarea" == a || "button" == a ? r ? (i.value = T.dom.getAttr(i, "defaultText"), T.dom.addClass(i, "gray")) : i.value = i.defaultValue : ("radio" == a || "checkbox" == a) && (i.checked = i.defaultChecked)
    }
}, T.getAncestorOrSelfByClass = function (e, t) {
    var n = T.dom.getAncestorByClass(e, t);
    return n ? n : T.dom.hasClass(e, t) ? e : null
}, T.settingTableHover = function () {
    T.element(T.q("setting-table")).mouseover(function (e) {
        var t = T.event.getTarget(e), n = T.getAncestorOrSelfByClass(t, "setting-table-tr");
        n && T.dom.addClass(n, "tr-highlight")
    }), T.element(T.q("setting-table")).mouseout(function (e) {
        var t = T.event.getTarget(e), n = T.getAncestorOrSelfByClass(t, "setting-table-tr");
        n && T.dom.removeClass(n, "tr-highlight")
    })
}, T.isIco = function () {
    return T.config.userInfo.roles.ico
}, T.isUnion = function () {
    return T.config.userInfo.roles.webmaster
}, T.isMultipleSite = function () {
    return T.config.siteInfo && T.config.siteInfo.isMultipleSite
}, T.isCustomer = function () {
    var e, t = /.*customer$/i;
    return T.object.each(T.config.userInfo.roles, function (n, i) {
        t.test(i) && n && (e = !0)
    }), e
}, T.auth = function (e) {
    return T.config.userInfo.auths[e]
}, T.lang.isEmail = T.lang.isEmail || function (e) {
    return /^\w+([-\.]\w+)*@\w+([-\.]\w+)*\.\w+([-\.]\w+)*$/i.test(e)
}, function () {
    var e = null, t = null;
    T.on(document.body, "click", function (n) {
        var i = T.event.get(n).target, a = null, r = null;
        do i != document && (T.dom.hasClass(i, "layer") && (r = i), T.dom.hasAttr(i, "layer") && (a = i)); while (i = i.parentNode);
        var o = function (e, t) {
            t ? T.dom.addClass(e, "selected") : T.dom.removeClass(e, "selected"), T.each(T.q("arrow", e), function (e) {
                t ? T.dom.addClass(e, "selected") : T.dom.removeClass(e, "selected")
            })
        };
        if (null == a) null != t && r != t && (T.hide(t), o(e, !1), t = null, e = null); else {
            var u = T.dom.one(T.dom.getAttr(a, "layer"));
            null != u && (null != t && u != t && (T.hide(t), o(e, !1)), t = null, e = null, "none" == u.style.display || T.dom.hasClass(u, "shared-layer") ? (T.show(u), o(a, !0), t = u, e = a) : (T.hide(u), o(a, !1)))
        }
    })
}(), baidu.string.format = function (e, t) {
    e = String(e);
    var n = Array.prototype.slice.call(arguments, 1), i = Object.prototype.toString;
    return n.length ? (n = 1 == n.length && null !== t && /\[object Array\]|\[object Object\]/.test(i.call(t)) ? t : n, e.replace(/(#|!)\{(.+?)(?:\s*,\s*(\d+?))*?\}/g, function (e, t, a, r) {
        var o = n[a];
        return "[object Function]" == i.call(o) && (o = o(a)), r && (o = T.truncat(o, r)), "!" == t && (o = T.string.encodeHTML(o)), "undefined" == typeof o ? "" : o
    })) : e
}, baidu.format = baidu.string.format, function (e) {
    function t(e) {
        return e && e.constructor === Number ? e + "px" : e
    }

    e.fn.bgiframe = e.browser.ie && /msie 6.0/i.test(navigator.userAgent) ? function (n, i) {
        i = e.extend({
            top: "auto",
            left: "auto",
            width: "auto",
            height: "auto",
            opacity: !0,
            src: "javascript:false;"
        }, i);
        var a = '<iframe class="bgiframe" frameborder="0" tabindex="-1" src="' + i.src + '"style="display:block;position:absolute;z-index:-1;' + (i.opacity !== !1 ? "filter:Alpha(Opacity='0');" : "") + "top:" + ("auto" == i.top ? "expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+'px')" : t(i.top)) + ";left:" + ("auto" == i.left ? "expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+'px')" : t(i.left)) + ";width:" + ("auto" == i.width ? "expression(this.parentNode.offsetWidth+'px')" : t(i.width)) + ";height:" + ("auto" == i.height ? "expression(this.parentNode.offsetHeight+'px')" : t(i.height)) + ';"/>';
        return T.array.each(n, function (e) {
            0 == T.dom.query("iframe.bgiframe", e).length && e.insertBefore(T.dom.create(a), e.firstChild)
        })
    } : function () {
        return this
    }, e.fn.bgIframe = e.fn.bgiframe
}(T), T.swf.createClipBoard = function (e) {
    var t = {
        id: "id" + +new Date,
        flashId: "head",
        flashContainer: "HeadCodeCopyBtn",
        width: 62,
        height: 22,
        clip: function (e) {
        },
        success: function (e) {
        },
        fail: function (e) {
        }
    }, n = T.object.extend(t, e);
    T.swf.create({
        id: n.id,
        width: n.width,
        height: n.height,
        ver: "9.0.28",
        errorMessage: "请下载最新的Flash播放器！",
        url: T.config.systemConfig.webRoot + "/flash/clipboard.swf",
        bgcolor: "#000",
        wmode: "transparent",
        vars: {flashId: n.flashId}
    }, n.flashContainer), window.onClip || (window.onClip = n.clip), window.onFail || (window.onFail = n.fail), window.onSuccess || (window.onSuccess = n.success)
}, function (e) {
    function t(e) {
        e ? e.type == f ? u = d.getViewHeight() : e.type == c && (s = d.getScrollTop()) : (s = d.getScrollTop(), u = d.getViewHeight()), o = u + s
    }

    function n(e, t, n) {
        t.call(e, n)
    }

    function i(e) {
        l.length || a(), l.push(e)
    }

    function a() {
        e.each(p, function (t) {
            e.event.on(window, t, r)
        })
    }

    function r(i) {
        t(i);
        for (var a = l.length - 1; a >= 0; a--) if (l[a].top <= o) {
            var u = l[a];
            n(u.item, u.action, u.opts), l.splice(a, 1)
        }
        l.length || e.each(p, function (t) {
            e.event.un(window, t, r)
        })
    }

    var o, u, s, d = e.page, l = [], c = "scroll", f = "resize", p = [c, f];
    e.page.destoryScrollBind = function () {
        e.each(p, function (t) {
            e.event.un(window, t, r)
        })
    }, e.page.scrollBind = function (a, r, u) {
        function s(t) {
            var a = e.dom.getPosition(t), s = a.top;
            if (!s) {
                var d = e.dom.getAncestorBy(t, function (t) {
                    return "visible" == e.dom.getStyle(t, "visibility")
                });
                s = e.dom.getPosition(d).top
            }
            o > s ? n(t, r, u) : i({top: s, item: t, action: r, opts: u})
        }

        if (r) return o || t(), e.element(a).each(s)
    }
}(baidu), function () {
    if (32 == T.browser.chrome) {
        var e = document.createElement("style"),
            t = "body div.date-controll-bar-scroll {                    position: fixed;                    top: 0;                    left: auto;                }";
        e.type = "text/css";
        var n = document.getElementsByTagName("head")[0];
        n.appendChild(e), e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
    }
}(), T.DataAdapter = T.createClass({
    options: {
        onflashError: function (e) {
        },
        onchartError: function (e) {
        },
        errorLinkTemplate: '<font color="#0965B8"><a title="#{0}" target="_blank" href="#{1}&from=#{2}">#{0}</a></font>',
        icoErrorTemplate: "暂无数据，请先安装代码，然后检查代码安装正确性，若安装正确20分钟之后将生成数据。",
        notIcoErrorTempalte: "暂无数据，请先#{0}，然后#{1}，若安装正确20分钟之后将生成数据。",
        multipleSiteErrorTemplate: "暂无数据。"
    }, ConvertTableData: function (e) {
        var t = T.config.indexInfo.indexes, n = T.array.map(t, function (e) {
            return e.id
        }), i = null;
        T.each(e.fields, function (e) {
            var a = T.array.indexOf(n, e);
            a > -1 && (i = t[a])
        });
        var a = T.config.indexInfo.indicators, r = T.array.map(a, function (e) {
            return e.id
        }), o = [];
        T.each(e.fields, function (e) {
            var t = T.array.indexOf(r, e);
            t > -1 && o.push(a[t])
        });
        var u = [], s = [], d = [];
        if (i) {
            var l = i.type ? "table-index " + i.type : "table-index";
            u.push({id: i.id, label: i.label, sortable: i.sortable, className: l})
        }
        for (var c = 0; c < o.length; c++) {
            var f = o[c];
            u.push({id: f.id, label: f.label, sortable: f.sortable, className: f.type})
        }
        var p = !1, h = !1, b = 1;
        e.items[2] && e.items[2].length > 0 && (p = !0, b = 3), e.items[3] && e.items[3].length > 0 && (h = !0, b = 4);
        for (var c in e.items[0]) {
            var g = e.items[0][c], m = e.items[1][c], v = p ? e.items[2][c] : null, y = h ? e.items[3][c] : null;
            if (p) {
                var x = [], w = [], _ = [];
                if (i) {
                    var l = i.type ? "table-index " + i.type : "table-index";
                    if (T.lang.isObject(g[0])) {
                        var S = {id: i.id, label: g[0].label, className: l};
                        null != g[0].expandable && (S.expandable = g[0].expandable), null != g[0].hasOperation && (S.hasOperation = g[0].hasOperation), null != g[0].data && (S.data = g[0].data), s.push([S, {
                            label: "&nbsp;",
                            className: "",
                            colspan: o.length
                        }])
                    } else s.push([{label: g[0], className: l}, {label: "&nbsp;", className: "", colspan: o.length}])
                }
                x.push({id: i.id, label: m[0]}), w.push({id: i.id, label: v[0]}), h && _.push({id: i.id, label: y[0]});
                for (var C = 0; C < o.length; C++) {
                    var f = o[C];
                    x.push({
                        id: f.id,
                        label: this._formatTableText(m[C + 1], f.type),
                        className: f.type
                    }), w.push({
                        id: f.id,
                        label: this._formatTableText(v[C + 1], f.type),
                        className: f.type
                    }), h && _.push({id: f.id, label: this._formatTableText(y[C + 1], "ratio"), className: f.type})
                }
                s.push(x), s.push(w), h && s.push(_)
            } else {
                var E = [];
                if (i) {
                    var l = i.type ? "table-index " + i.type : "table-index";
                    if (T.lang.isObject(g[0])) {
                        var S = {id: i.id, label: g[0].label, className: l};
                        null != g[0].expandable && (S.expandable = g[0].expandable), null != g[0].hasOperation && (S.hasOperation = g[0].hasOperation), null != g[0].data && (S.data = g[0].data), E.push(S)
                    } else E.push({id: i.id, label: g[0], className: l})
                }
                for (var C = 0; C < o.length; C++) {
                    var f = o[C];
                    E.push({id: f.id, label: this._formatTableText(m[C], f.type), className: f.type})
                }
                s.push(E)
            }
        }
        if (e.pageSum && e.pageSum.length > 0) {
            var m = e.pageSum[0], v = p ? e.pageSum[1] : null, y = h ? e.pageSum[2] : null;
            if (p) {
                var x = [], w = [], _ = [];
                i && d.push([{id: i.id, label: "当页汇总", colspan: o.length + 1}]), x.push({
                    id: i.id,
                    label: m[0]
                }), w.push({id: i.id, label: v[0]}), h && _.push({id: i.id, label: y[0]});
                for (var C = 0; C < o.length; C++) {
                    var f = o[C];
                    x.push({
                        id: f.id,
                        label: this._formatTableText(m[C + 1], f.type),
                        className: f.type
                    }), p && w.push({
                        id: f.id,
                        label: this._formatTableText(v[C + 1], f.type),
                        className: f.type
                    }), h && _.push({id: f.id, label: this._formatTableText(y[C + 1], "ratio"), className: f.type})
                }
                d.push(x), p && d.push(w), h && d.push(_)
            } else {
                var E = [];
                i && E.push({id: i.id, label: "当页汇总"});
                for (var C = 0; C < o.length; C++) {
                    var f = o[C];
                    E.push({id: f.id, label: this._formatTableText(m[C], f.type), className: f.type})
                }
                d.push(E)
            }
        }
        if (e.sum && e.sum.length > 0) for (var C = 0; C < o.length; C++) {
            var f = o[C];
            e.sum[0][C] = this._formatTableText(e.sum[0][C], f.type), p && (e.sum[1][C] = this._formatTableText(e.sum[1][C], f.type))
        }
        return e.thead = u, e.tbody = s, e.tfoot = d, e.group = b, e.isCompare = p, e.indicators = o, e
    }, _formatTableText: function (e, t) {
        if (null == e) return "";
        if ("--" === e || "未知" === e || "正在访问" === e) return e;
        if (T.lang.isString(t)) switch (t) {
            case"number":
                return T.i18n.number.formatNumber(e);
            case"ratio":
                return T.i18n.number.formatRatio(e);
            case"time":
                return T.i18n.number.formatTime(e);
            case"time2":
                return T.i18n.number.formatTime(e, 2)
        }
        return e
    }, formatText: function (e, t) {
        return this._formatTableText(e, t)
    }, ConvertFlowData: function (e) {
        var t = {};
        for (var n in e) {
            var i = e[n].items, a = i[0], r = i[1], o = [];
            T.array.each(a, function (e, t) {
                o.push(e.concat(r[t]))
            }), t[n] = o
        }
        return t
    }, ConvertCommonTableData: function (e) {
        return this.ConvertCommonData(e)
    }, ConvertCommonFlashData: function (e) {
        return this.ConvertCommonData(e, "flash")
    }, ConvertCommonData: function (e, t) {
        var n = T.config.indexInfo.indexes,
            i = "flash" == t ? T.config.indexInfo.flashIndicators : T.config.indexInfo.indicators, a = e.fields,
            r = e.items, o = T.object.clone(a), u = r[0].length > 0 ? !0 : !1;
        if (u) for (var s = r[0], d = 0; d < s.length; d++) for (var l = 0; l < n.length; l++) if (n[l].id == a[0]) {
            o[0] = n[l].label, s[d] = this._formatTableText(s[d], n[l].type);
            break
        }
        var d = u ? 1 : 0;
        for (d; d < a.length; d++) for (var c = a[d], l = 0; l < i.length; l++) {
            var f = i[l];
            if (f.id == c) {
                o[d] = f.label;
                for (var p = 0; p < r[1].length; p++) {
                    var h = u ? d - 1 : d;
                    r[1][p][h] = this._formatTableText(r[1][p][h], f.type)
                }
                break
            }
        }
        return e.labels = o, e
    }, convertFlashDataFormat: function (e) {
        var t, n = e.type;
        switch (n) {
            case"line":
                t = this.convertFlashLineDataFormat(e);
                break;
            case"linepie":
                t = this.convertFlashLinePieDataFormat(e);
                break;
            case"area":
                t = this.convertFlashAreaDataFormat(e);
                break;
            case"areapie":
                t = this.convertFlashAreaPieDataFormat(e);
                break;
            case"circle":
                t = this.convertFlashCircleDataFormat(e);
                break;
            case"circlegraph":
                t = this.convertFlashCircleGraphDataFormat(e);
                break;
            case"bar":
                t = this.convertFlashBarDataFormat(e)
        }
        return t
    }, convertFlashLinePieDataFormat: function (e) {
        var t = e.flashId, n = e.line, i = n.fields, a = n.items, r = e.pie, o = (r.fields, r.items), u = [],
            s = ["label"], d = [], l = a[0], c = a[1];
        if (null == l || 0 == l.length || null == c || 0 == c.length) return void this._showErrorTip(t);
        for (var f = 1, p = i.length; p > f; f++) s.push(i[f]);
        T.array.each(l, function (e, t) {
            d.push(e.concat(c[t]))
        }), this._addLineTip(e, s, d, "SmallTip", u);
        var h = ["label", "value"], b = [], g = o[0], c = o[1];
        return T.array.each(g, function (e, t) {
            b.push(e.concat(c[t]))
        }), {
            flashId: t,
            type: e.type,
            units: this._getUnits([e.indicator]),
            highlightIndexs: u,
            indicator: this._getIndicatorLabel(e.indicator),
            bar: e.bar,
            line: {fields: s, items: d},
            pie: {fields: h, items: b}
        }
    }, convertFlashCircleGraphDataFormat: function (e) {
        var t = e.flashId, n = (e.fields, e.items), i = ["label", "dataB", "dataL", "dataR"], a = [], r = n[0],
            o = n[1];
        return null == r || 0 == r.length || null == o || 0 == o.length ? void this._showErrorTip(t) : (T.array.each(r, function (e, t) {
            a.push(e.concat(o[t]))
        }), {flashId: t, fields: i, items: a, type: e.type})
    }, convertFlashBarDataFormat: function (e) {
        var t = e.flashId, n = [], i = this._convertFlashDataFormat(e), a = i.flashFields, r = i.flashItems;
        return {
            flashId: t,
            fields: a,
            units: this._getUnits(e.fields),
            items: r,
            type: e.type,
            highlightIndexs: n,
            indicator: this._getIndicatorLabel(e.indicator)
        }
    }, convertFlashCircleDataFormat: function (e) {
        var t = e.flashId, n = e.fields, i = e.items, a = ["label", "value", "ratio"], r = [], o = [], u = i[0],
            s = i[1];
        if (null == u || 0 == u.length || null == s || 0 == s.length) return void this._showErrorTip(t);
        for (var d = 1, l = n.length; l > d; d++) /^ratio/i.test(n[d]) && o.push(d - 1);
        for (var d in o) {
            var c = o[d];
            T.array.each(s, function (e) {
                e[c] = e[c] + "%"
            })
        }
        return T.array.each(u, function (e, t) {
            r.push(e.concat(s[t]))
        }), {
            flashId: t,
            fields: a,
            units: this._getUnits(n),
            items: r,
            type: e.type,
            indicator: this._getIndicatorLabel(e.indicator)
        }
    }, convertFlashAreaPieDataFormat: function (e) {
        return this.convertFlashAreaDataFormat(e)
    }, convertFlashAreaDataFormat: function (e) {
        {
            var t = e.containerId, n = e.flashId, i = e.fields, a = e.items, r = ["label", "value", "ratio", "color"],
                o = [], u = a[0], s = a[1];
            a[2]
        }
        if (null == u || 0 == u.length || null == s || 0 == s.length) return void ("FlashAreaPie" == n && T.ie < 7 ? this._showErrorTip(n, e) : this._showChartError(t));
        T.array.each(u, function (e, t) {
            o.push(e.concat(s[t]))
        });
        for (var d = 0, l = 1, c = 0, f = o.length; f > c; c++) {
            var s = o[c], p = s[s.length - 1];
            d = Math.max(d, p), l = Math.min(l, p)
        }
        for (var h = (d - l) / 5, b = [d, d - h, d - 2 * h, d - 3 * h, d - 4 * h, l], c = 0, f = o.length; f > c; c++) {
            var g, s = o[c], p = s[s.length - 1];
            s[s.length - 1] = s[s.length - 1] + "%", g = p <= b[0] && p > b[1] ? "0x1556a1" : p <= b[1] && p > b[2] ? "0x136bd4" : p <= b[2] && p > b[3] ? "0x6c98d5" : p <= b[3] && p > b[4] ? "0x9fccff" : "0xdcecff", s.push(g)
        }
        return {
            containerId: t,
            flashId: n,
            fields: r,
            units: this._getUnits(i),
            items: o,
            type: e.type,
            indicator: this._getIndicatorLabel(e.indicator)
        }
    }, convertFlashLineDataFormat: function (e) {
        var t = e.flashId, n = (e.timeSpan, []), i = e.tipLabel || "BigTip", a = this._convertFlashDataFormat(e),
            r = a.flashFields, o = a.flashItems;
        return this._addLineTip(e, r, o, i, n), {
            flashId: t,
            fields: r,
            units: this._getUnits(e.fields, e.items[2] ? e.items[2].length : 0),
            items: o,
            type: e.type,
            highlightIndexs: n,
            indicator: this._getIndicatorLabel(e.indicator)
        }
    }, convertEcBlockDataFormat: function (e) {
        var t = e.fields, n = e.sum[0], i = new Array(t.length);
        n.unshift("");
        for (var a = T.config.indexInfo.indexes, r = 0; r < a.length; r++) {
            var o = a[r];
            if (o.id == t[0]) {
                i[0] = o.label;
                break
            }
        }
        for (var u = T.config.indexInfo.indicators, s = 1; s < t.length; s++) {
            for (var d = t[s], l = 0; l < u.length; l++) {
                var c = u[l];
                if (d == c.id) {
                    n[s] = this._formatTableText(n[s], c.type);
                    break
                }
            }
            i[s] = this._getIndicatorLabel(d)
        }
        return {fields: t, labels: i, values: n}
    }, _addLineTip: function (e, t, n, i, a) {
        "hour" == e.by ? (t.push(t[0] + i), T.array.each(n, function (e) {
            var t = T.config.lineChartDayTimeMap[e[0]];
            e.push(t ? t : e[0])
        }), T.array.each(n, function (e, t) {
            e[0] = t == n.length - 1 ? t + "/点" : t
        })) : "day" == e.by && (t.push(t[0] + i), T.array.each(n, function (e, t) {
            T.array.each(e, function (e, n) {
                if (!(n > 0)) {
                    var i, r = !1;
                    for (var o in T.config.holidays) if (i = T.config.holidays[o], i.test(e)) {
                        this.push(e + " (" + o + ")"), a.push(t), r = !0;
                        break
                    }
                    if (!r) {
                        var i = new RegExp("^\\d+(\\-|\\/)\\d+(\\-|\\/)\\d+$");
                        if (i.test(e)) {
                            var u, s = new Date(e), d = s.getDay();
                            switch (d) {
                                case 0:
                                    u = e + " (星期日) ";
                                    break;
                                case 6:
                                    u = e + " (星期六) ";
                                    break;
                                default:
                                    u = e
                            }
                            this.push(u), (0 == d || 6 == d) && (a.push(t), r = !0)
                        }
                    }
                }
            })
        }))
    }, _filterFlashData: function (e) {
        var t = e.fields, n = e.items, i = n[1], a = n[2],
            r = new T.Indicator({indicators: T.config.indexInfo.flashIndicators}), o = r.map(t);
        T.array.each(o, function (e, t) {
            e && (T.array.each(i, function (n, i) {
                n[t - 1] = e.format(n[t - 1])
            }), T.array.each(a, function (n, i) {
                n[t - 1] = e.format(n[t - 1])
            }))
        })
    }, _convertFlashDataFormat: function (e) {
        var t = e.flashId, n = e.timeSpan, i = e.fields, a = e.items, r = e.tipLabel || "BigTip", o = a[0], u = a[1],
            s = a[2], d = [], l = [], c = [];
        if (null == o || 0 == o.length || null == u || 0 == u.length) return this._showErrorTip(t, e), {
            flashFields: [],
            flashItems: []
        };
        d.push("label");
        var f = new T.Indicator({indicators: T.config.indexInfo.flashIndicators}), p = f.map(i);
        if (s && 0 != s.length) {
            if (T.array.each(i, function (e, t) {
                /^ratio/i.test(e) && c.push(t - 1)
            }), T.array.each(n, function (e) {
                d.push(e), d.push(e + r)
            }), T.array.each(u, function (e) {
                T.array.each(e, function (t, n) {
                    if (0 != n) if (T.array.contains(c, n)) e[n] = p[n].format(e[n - 1]) + " | 占比: " + T.i18n.number.formatRatio(e[n]); else {
                        var a = p[n + 1];
                        a && !T.array.contains(i, "ratio_" + a.id) && e.push(a.format(e[n]))
                    }
                })
            }), T.array.each(s, function (e) {
                T.array.each(e, function (t, n) {
                    if (0 != n) if (T.array.contains(c, n)) e[n] = p[n].format(e[n - 1]) + " | 占比: " + T.i18n.number.formatRatio(e[n]); else {
                        var a = p[n + 1];
                        a && !T.array.contains(i, "ratio_" + a.id) && e.push(a.format(e[n]))
                    }
                })
            }), "day" == e.by || "week" == e.by || "month" == e.by) {
                var h = T.array.map(T.object.clone(s), function (e) {
                    return T.array.removeAt(e, 0), e
                });
                T.array.each(u, function (e, t) {
                    l.push(u[t].concat(h[t]))
                })
            } else if ("hour" == e.by) {
                var b = T.array.map(T.object.clone(u), function (e) {
                    return T.array.removeAt(e, 0), e
                }), h = T.array.map(T.object.clone(s), function (e) {
                    return T.array.removeAt(e, 0), e
                });
                T.array.each(o, function (e, t) {
                    l.push(e.concat(b[t], h[t]))
                })
            }
        } else {
            for (var g = 1, m = p.length; m > g; g++) p[g] ? d.push(p[g].label) : /^ratio/i.test(i[g]) && (d.push(d[d.length - 1] + r), c.push(g - 1));
            T.array.each(u, function (e) {
                T.array.each(e, function (t, n) {
                    if (T.array.contains(c, n)) e[n] = p[n].format(e[n - 1]) + " | 占比: " + T.i18n.number.formatRatio(e[n]); else {
                        var a = p[n + 1];
                        a && !T.array.contains(i, "ratio_" + a.id) && (T.array.contains(d, d[n + 1] + r) || d.push(d[n + 1] + r), e.push(a.format(e[n])))
                    }
                })
            }), T.array.each(o, function (e, t) {
                l.push(e.concat(u[t]))
            })
        }
        return {flashFields: d, flashItems: l}
    }, _showChartError: function (e) {
        var t,
            n = window.__POWERED_BY_QIANKUN__ ? T.config.systemConfig.mainBaseUriList.setting : T.config.systemConfig.scBaseUri;
        t = T.isMultipleSite() ? this.options.multipleSiteErrorTemplate : T.isIco() ? this.options.icoErrorTemplate : T.format(this.options.notIcoErrorTempalte, T.format(this.options.errorLinkTemplate, "安装代码", n + "/home/site/getjs?siteId=" + T.config.siteInfo.id, T.config.pageInfo.currentSystemId), T.format(this.options.errorLinkTemplate, "检查代码安装正确性", n + "/home/js/check?siteId=" + T.config.siteInfo.id, T.config.pageInfo.currentSystemId));
        var i = T.g(e);
        i && (T.dom.empty(i), T.dom.insertHTML(i, "beforeEnd", T.format('<div class="chart-tip-container">#{0}</div>', t))), this.options.onchartError(e, t)
    }, _showErrorTip: function (e, t) {
        var n,
            i = window.__POWERED_BY_QIANKUN__ ? T.config.systemConfig.mainBaseUriList.setting : T.config.systemConfig.scBaseUri,
            a = T.swf.getMovie(e);
        n = T.isMultipleSite() ? this.options.multipleSiteErrorTemplate : T.isIco() ? this.options.icoErrorTemplate : T.format(this.options.notIcoErrorTempalte, T.format(this.options.errorLinkTemplate, "安装代码", i + "/home/site/getjs?siteId=" + T.config.siteInfo.id, T.config.pageInfo.currentSystemId), T.format(this.options.errorLinkTemplate, "检查代码安装正确性", i + "/home/js/check?siteId=" + T.config.siteInfo.id, T.config.pageInfo.currentSystemId)), a && a.showErrorTip(n), this.options.onflashError(e, t)
    }, _getIndicatorLabel: function (e) {
        if (e) {
            var t = e.split(","), n = [];
            return T.array.each(t, function (e) {
                var t = T.array.find(T.config.indexInfo.flashIndicators, function (t, n) {
                    return e == t.id
                });
                t && n.push(t.label)
            }), n.join()
        }
    }, _getUnits: function (e, t) {
        var n = T.array.map(e, function (e) {
            return T.array.find(T.config.indexInfo.flashIndicators, function (t) {
                return e == t.id
            })
        }), i = [];
        return T.array.each(n, function (e) {
            if (e) {
                var t = e.unit;
                T.array.contains(i, t) || i.push(t)
            }
        }), t && 0 != t && (i = i.concat(i)), i
    }
}), T.FlashFormatConverter = T.createClass({
    options: {
        onchange: function (e) {
        }
    }, setFlash: function (e) {
        var t = e.flashId, n = e.fields, i = (e.units, e.items), a = e.type || "line";
        if (!(n && 0 == n.length || i && 0 == i.length)) {
            var r;
            if ("linepie" == a) {
                var o = e.line, u = e.pie;
                r = {line: this._convertDataformat(o.fields, o.items), pie: this._convertDataformat(u.fields, u.items)}
            } else r = this._convertDataformat(n, i);
            this._setData(e, r), this._setStyle(e, r), e.highlightIndexs && this._setHighLightItem(t, e.highlightIndexs)
        }
    }, _convertDataformat: function (e, t) {
        var n = [];
        return T.array.each(t, function (t) {
            n.push(T.array.hash(e, t))
        }), n
    }, _setData: function (e, t) {
        if (t && 0 != t.length) {
            var n = e.flashId, i = (e.fields, e.type), a = T.swf.getMovie(n);
            a.clear && a.clear(), this.options.onchange(a), "line" == i ? (a.setData(t), e && e.indicator && a.setValueName(e.indicator)) : "bar" == i ? a.setData(t) : "area" == i ? (e && e.indicator && a.setValueName(e.indicator), a.setMapData(t)) : "areapie" == i ? (e && e.indicator && a.setValueName(e.indicator), a.setMapData(t), a.setPieData(t, "value", "label")) : "linepie" == i ? (a.setLinebarData(t.line), a.setPieData(t.pie, "value", "label"), e.indicator && a.setValueName && a.setValueName(e.indicator)) : "circle" == i ? (e && e.indicator && a.setValueName(e.indicator), a.setData(t)) : a.setData(t)
        }
    }, _setStyle: function (e, t) {
        var n = e.flashId, i = e.fields, a = e.units, r = e.type, o = T.swf.getMovie(n);
        if ("line" == r) this._setLineStyle(o, a, i); else if ("bar" == r) this._setBarStyle(o, a, i); else if ("pie" == r) ; else if ("areapie" == r) o.setPieData(t, "value", "label"), o.setPieGradient(!1), o.setPieColors([4767476, 14898746, 1682015, 11060822, 5328533, 14833299, 15312960, 12369084, 9721830, 1360336]), o.setRadius(100), o.setHasTip(!1), o.addEvent(), o.setLineStyle(2913222, 1, .5), o.setShowLabel(!1), o.setShowLabelLine(!1), o.setlabelLineLength(.1), o.showTopNum(3); else if ("linepie" == r) {
            T.array.each(e.line.fields, function (t) {
                T.array.remove(e.line.fields, t + "SmallTip")
            }), a[0] && o.setTick(" / " + a[0], "left"), o.setDataSuffix("I,III", "left"), o.setAxisLineStyle(4681895, 2), e.bar && o.addBarGraph(e.line.fields[1], "label");
            for (var u = 2, s = e.line.fields.length; s > u; u++) o.addLineGraph(e.line.fields[u], "label"), o.setLineDot("3", e.line.fields[u]);
            var d, l = [4767476, 14898746, 1682015, 11060822, 5328533, 14833299, 15312960, 12369084, 9721830, 1360336];
            d = e.bar ? [7368816].concat(l) : l, o.setLinebarColors(d), o.setSplitLine(0), o.setLinebarGradient(!1), o.setShowDataTips(!0), o.setShowBigDataTips(!1), o.setPieGradient(!1), o.setPieColors(l), o.setRadius(90), o.setHasTip(!1), o.addEvent(), o.setLineStyle(2913222, 1, .5), o.setShowLabel(!1), o.setShowLabelLine(!1), o.setlabelLineLength(.1), o.showTopNum(3)
        } else "circle" == r ? o.setColors([4767476, 14898746, 1682015, 11060822, 5328533, 14833299, 15312960, 12369084, 9721830, 1360336, 12949082, 2913222, 3705647, 16162851, 10208838]) : "circlegraph" == r && (o.setTick("时长", "left"), o.setColors([4767476, 14898746, 1682015, 11060822, 5328533, 14833299, 15312960, 12369084, 9721830, 1360336, 12949082, 2913222, 3705647, 16162851, 10208838]))
    }, _setLineStyle: function (e, t, n) {
        T.array.each(n, function (e) {
            T.array.remove(n, e + "BigTip")
        }), e.setSplitLine(0), t = T.array.unique(t), e.addLineGraph(n[1], n[0] || "label"), this._setUnit(e, t[0], "left"), n.length > 2 && (t.length > 1 ? (e.addLineGraph(n[2], n[0] || "label", "bottom", "right"), this._setUnit(e, t[1], "right")) : e.addLineGraph(n[2], n[0] || "label"), e.addLegend("0", n[1]), e.addLegend("0", n[2]), e.setLineDot("3", n[1]), e.setLineDot("3", n[2])), e.setAxisLineStyle(4681895, 2), e.setColors([4767476, 16370368, 1682015, 11060822, 5328533, 14833299, 15312960, 12369084, 9721830, 1360336, 12949082, 2913222, 3705647, 16162851, 10208838]), e.setGradient(!1), e.setShowDataTips(!1), e.setShowBigDataTips(!0)
    }, _setBarStyle: function (e, t, n) {
        e.setSplitLine(0), T.array.each(n, function (e) {
            T.array.remove(n, e + "SmallTip")
        }), t = T.array.unique(t), t[0] && e.setTick(" / " + t[0], "left"), this._setUnit(e, t[0], "left"), e.addBarGraph(n[1], n[0] || "label"), n.length > 2 && (t.length > 1 ? (e.addBarGraph(n[2], n[0] || "label", "bottom", "right"), t[1] && e.setTick(" / " + t[1], "right"), this._setUnit(e, t[1], "right")) : e.addBarGraph(n[2], n[0] || "label"), e.setBarType("2", n[2]), e.addLegend("1", n[1], 6710886), e.addLegend("2", n[2], 6710886)), e.setAxisLineStyle(4681895, 2), e.setColors([4767476, 14898746, 1682015, 11060822, 5328533, 14833299, 15312960, 12369084, 9721830, 1360336, 12949082, 2913222, 3705647, 16162851, 10208838]), e.setSplitLine(0), e.setGradient(!1), e.setShowDataTips(!0), e.setShowBigDataTips(!1), e.setBarWidth(15)
    }, _setUnit: function (e, t, n) {
        var t = t || "";
        switch (t && e.setTick(" / " + t, n), t) {
            case"百分比":
                e.setDataSuffix("I%", n);
                break;
            case"时长":
                break;
            case"元":
                e.setDataSuffix("I.DD", n);
                break;
            default:
                e.setDataSuffix("I,III", n)
        }
    }, _setHighLightItem: function (e, t) {
        if (!T.lang.isArray(t) || 0 == t.length) return !1;
        var n = T.swf.getMovie(e), i = [];
        T.each(t, function (e, t) {
            i.push({index: e, color: 14982543})
        }), n.setHighLightItem(i)
    }
}), T.Indicator = T.createClass({
    options: {indicators: null, groups: [1, 2]}, _init: function () {
        var e = this;
        T.array.map(this.options.indicators, function (t) {
            t.format = e._format()
        })
    }, _format: function () {
        return function (e) {
            if (null == e) return "";
            if (!T.lang.isNumber(e)) return e;
            if (T.lang.isString(this.type)) switch (this.type) {
                case"number":
                    return T.i18n.number.format(e, T.i18n.currentLocale);
                case"ratio":
                    return T.i18n.number.format(e, T.i18n.currentLocale) + "%";
                case"time":
                    return T.i18n.number.formatTime(e);
                case"time2":
                    return T.i18n.number.formatTime(e, 2)
            }
            return e
        }
    }, map: function (e) {
        var t = this;
        return T.array.map(e, function (e) {
            return T.array.find(t.options.indicators, function (t) {
                return e == t.id
            })
        })
    }, index: function (e) {
        return T.array.find(this.options.indexes, function (t) {
            return e == t.id
        })
    }, group: function (e) {
        var t = [];
        return T.array.each(this.options.groups, function (n) {
            t.push(T.array.filter(e, function (e) {
                return e && e.group == n
            }))
        }), t
    }
}), T.CreateFlash = T.createClass({
    options: {ids: [], containerId: "FlashContainer", data: null, by: [], type: [], indicator: null},
    _init: function () {
        EventRouter.register("onflashLoaded", T.fn.bind(this._flashLoadedCallback, this)), this.dataAdapter = new T.DataAdapter, this.flashFormatConverter = new T.FlashFormatConverter;
        var e = this, t = T.g(this.options.containerId);
        T.array.each(this.options.data, function (n, i) {
            var a = "Flash_" + i, r = "FlashContainerId_" + i, o = T.dom.create("div", {id: r});
            t.appendChild(o), e._initFlash({
                id: a,
                type: e.options.type[i],
                flashContainerId: r,
                flashBaseUrl: "flash/"
            })
        })
    },
    _initFlash: function (e) {
        var t = e.flashBaseUrl + e.type + ".swf";
        T.swf.create({
            id: e.id,
            url: t,
            width: e.width || "100%",
            height: e.height || "320",
            bgColor: "#FFFFFF",
            wmode: "transparent",
            errorMessage: "载入FLASH出错",
            ver: "9.0.0",
            allowscriptaccess: "always",
            vars: {flashId: e.id, baseUrl: e.flashBaseUrl + "fla"}
        }, e.flashContainerId)
    },
    _flashLoadedCallback: function (e) {
        var t = e.split("_"), n = t[1], i = this.options.data[n], a = (i.msg, i.status, i.data);
        a.flashId = e, a.by = this.options.by[n], a.type = this.options.type[n], a.indicator = this.options.indicator, "bar" == a.type && (a.tipLabel = "SmallTip");
        var r = this.dataAdapter.convertFlashDataFormat(a);
        this.flashFormatConverter.setFlash(r)
    }
});
