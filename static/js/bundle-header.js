!function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [], E = C.document, i = Object.getPrototypeOf, a = t.slice, m = t.concat, u = t.push, r = t.indexOf, n = {},
    o = n.toString, g = n.hasOwnProperty, s = g.toString, l = s.call(Object), v = {}, y = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType
    }, x = function (e) {
      return null != e && e === e.window
    }, c = {type: !0, src: !0, noModule: !0};

  function b(e, t, n) {
    var i, r = (t = t || E).createElement("script");
    if (r.text = e, n) for (i in c) n[i] && (r[i] = n[i]);
    t.head.appendChild(r).parentNode.removeChild(r)
  }

  function w(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
  }

  var S = function (e, t) {
    return new S.fn.init(e, t)
  }, f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  function d(e) {
    var t = !!e && "length" in e && e.length, n = w(e);
    return !y(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
  }

  S.fn = S.prototype = {
    jquery: "3.3.1", constructor: S, length: 0, toArray: function () {
      return a.call(this)
    }, get: function (e) {
      return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
    }, pushStack: function (e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t
    }, each: function (e) {
      return S.each(this, e)
    }, map: function (n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e)
      }))
    }, slice: function () {
      return this.pushStack(a.apply(this, arguments))
    }, first: function () {
      return this.eq(0)
    }, last: function () {
      return this.eq(-1)
    }, eq: function (e) {
      var t = this.length, n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : [])
    }, end: function () {
      return this.prevObject || this.constructor()
    }, push: u, sort: t.sort, splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
    for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || y(s) || (s = {}), a === u && (s = this, a--); a < u; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], s !== (i = e[t]) && (l && i && (S.isPlainObject(i) || (r = Array.isArray(i))) ? (o = r ? (r = !1, n && Array.isArray(n) ? n : []) : n && S.isPlainObject(n) ? n : {}, s[t] = S.extend(l, o, i)) : void 0 !== i && (s[t] = i));
    return s
  }, S.extend({
    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
      throw new Error(e)
    }, noop: function () {
    }, isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e) || (t = i(e)) && ("function" != typeof (n = g.call(t, "constructor") && t.constructor) || s.call(n) !== l))
    }, isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    }, globalEval: function (e) {
      b(e)
    }, each: function (e, t) {
      var n, i = 0;
      if (d(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
      return e
    }, trim: function (e) {
      return null == e ? "" : (e + "").replace(f, "")
    }, makeArray: function (e, t) {
      var n = t || [];
      return null != e && (d(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
    }, inArray: function (e, t, n) {
      return null == t ? -1 : r.call(t, e, n)
    }, merge: function (e, t) {
      for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
      return e.length = r, e
    }, grep: function (e, t, n) {
      for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
      return i
    }, map: function (e, t, n) {
      var i, r, o = 0, s = [];
      if (d(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r); else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
      return m.apply([], s)
    }, guid: 1, support: v
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase()
  });
  var h = function (n) {
    var e, h, b, o, r, p, f, m, w, u, l, T, C, s, E, g, a, c, v, S = "sizzle" + 1 * new Date, y = n.document, A = 0,
      i = 0, d = se(), x = se(), j = se(), k = function (e, t) {
        return e === t && (l = !0), 0
      }, L = {}.hasOwnProperty, t = [], N = t.pop, D = t.push, z = t.push, _ = t.slice, O = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1
      },
      q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      I = "[\\x20\\t\\r\\n\\f]", H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      W = "\\[" + I + "*(" + H + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + I + "*\\]",
      P = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
      R = new RegExp(I + "+", "g"), M = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
      B = new RegExp("^" + I + "*," + I + "*"), F = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
      $ = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"), U = new RegExp(P), Y = new RegExp("^" + H + "$"),
      X = {
        ID: new RegExp("^#(" + H + ")"),
        CLASS: new RegExp("^\\.(" + H + ")"),
        TAG: new RegExp("^(" + H + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + P),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + q + ")$", "i"),
        needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
      }, Q = /^(?:input|select|textarea|button)$/i, V = /^h\d$/i, G = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/,
      Z = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"), ee = function (e, t, n) {
        var i = "0x" + t - 65536;
        return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
      }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
      }, ie = function () {
        T()
      }, re = ye(function (e) {
        return !0 === e.disabled && ("form" in e || "label" in e)
      }, {dir: "parentNode", next: "legend"});
    try {
      z.apply(t = _.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
    } catch (n) {
      z = {
        apply: t.length ? function (e, t) {
          D.apply(e, _.call(t))
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];) ;
          e.length = n - 1
        }
      }
    }

    function oe(e, t, n, i) {
      var r, o, s, a, u, l, c, f = t && t.ownerDocument, d = t ? t.nodeType : 9;
      if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
      if (!i && ((t ? t.ownerDocument || t : y) !== C && T(t), t = t || C, E)) {
        if (11 !== d && (u = J.exec(e))) if (r = u[1]) {
          if (9 === d) {
            if (!(s = t.getElementById(r))) return n;
            if (s.id === r) return n.push(s), n
          } else if (f && (s = f.getElementById(r)) && v(t, s) && s.id === r) return n.push(s), n
        } else {
          if (u[2]) return z.apply(n, t.getElementsByTagName(e)), n;
          if ((r = u[3]) && h.getElementsByClassName && t.getElementsByClassName) return z.apply(n, t.getElementsByClassName(r)), n
        }
        if (h.qsa && !j[e + " "] && (!g || !g.test(e))) {
          if (1 !== d) f = t, c = e; else if ("object" !== t.nodeName.toLowerCase()) {
            for ((a = t.getAttribute("id")) ? a = a.replace(te, ne) : t.setAttribute("id", a = S), o = (l = p(e)).length; o--;) l[o] = "#" + a + " " + ve(l[o]);
            c = l.join(","), f = K.test(e) && me(t.parentNode) || t
          }
          if (c) try {
            return z.apply(n, f.querySelectorAll(c)), n
          } catch (e) {
          } finally {
            a === S && t.removeAttribute("id")
          }
        }
      }
      return m(e.replace(M, "$1"), t, n, i)
    }

    function se() {
      var i = [];
      return function e(t, n) {
        return i.push(t + " ") > b.cacheLength && delete e[i.shift()], e[t + " "] = n
      }
    }

    function ae(e) {
      return e[S] = !0, e
    }

    function ue(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function le(e, t) {
      for (var n = e.split("|"), i = n.length; i--;) b.attrHandle[n[i]] = t
    }

    function ce(e, t) {
      var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; n = n.nextSibling;) if (n === t) return -1;
      return e ? 1 : -1
    }

    function fe(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t
      }
    }

    function de(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n
      }
    }

    function he(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && re(e) === t : e.disabled === t : "label" in e && e.disabled === t
      }
    }

    function pe(s) {
      return ae(function (o) {
        return o = +o, ae(function (e, t) {
          for (var n, i = s([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
        })
      })
    }

    function me(e) {
      return e && void 0 !== e.getElementsByTagName && e
    }

    for (e in h = oe.support = {}, r = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName
    }, T = oe.setDocument = function (e) {
      var t, n, i = e ? e.ownerDocument || e : y;
      return i !== C && 9 === i.nodeType && i.documentElement && (s = (C = i).documentElement, E = !r(C), y !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ie, !1) : n.attachEvent && n.attachEvent("onunload", ie)), h.attributes = ue(function (e) {
        return e.className = "i", !e.getAttribute("className")
      }), h.getElementsByTagName = ue(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
      }), h.getElementsByClassName = G.test(C.getElementsByClassName), h.getById = ue(function (e) {
        return s.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
      }), h.getById ? (b.filter.ID = function (e) {
        var t = e.replace(Z, ee);
        return function (e) {
          return e.getAttribute("id") === t
        }
      }, b.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : []
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(Z, ee);
        return function (e) {
          var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n
        }
      }, b.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && E) {
          var n, i, r, o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            for (r = t.getElementsByName(e), i = 0; o = r[i++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
          }
          return []
        }
      }), b.find.TAG = h.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
      } : function (e, t) {
        var n, i = [], r = 0, o = t.getElementsByTagName(e);
        if ("*" !== e) return o;
        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
        return i
      }, b.find.CLASS = h.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e)
      }, a = [], g = [], (h.qsa = G.test(C.querySelectorAll)) && (ue(function (e) {
        s.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + I + "*(?:value|" + q + ")"), e.querySelectorAll("[id~=" + S + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || g.push(".#.+[+~]")
      }), ue(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + I + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
      })), (h.matchesSelector = G.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ue(function (e) {
        h.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), a.push("!=", P)
      }), g = g.length && new RegExp(g.join("|")), a = a.length && new RegExp(a.join("|")), t = G.test(s.compareDocumentPosition), v = t || G.test(s.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) if (t === e) return !0;
        return !1
      }, k = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === y && v(y, e) ? -1 : t === C || t.ownerDocument === y && v(y, t) ? 1 : u ? O(u, e) - O(u, t) : 0 : 4 & n ? -1 : 1)
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n, i = 0, r = e.parentNode, o = t.parentNode, s = [e], a = [t];
        if (!r || !o) return e === C ? -1 : t === C ? 1 : r ? -1 : o ? 1 : u ? O(u, e) - O(u, t) : 0;
        if (r === o) return ce(e, t);
        for (n = e; n = n.parentNode;) s.unshift(n);
        for (n = t; n = n.parentNode;) a.unshift(n);
        for (; s[i] === a[i];) i++;
        return i ? ce(s[i], a[i]) : s[i] === y ? -1 : a[i] === y ? 1 : 0
      }), C
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t)
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== C && T(e), t = t.replace($, "='$1']"), h.matchesSelector && E && !j[t + " "] && (!a || !a.test(t)) && (!g || !g.test(t))) try {
        var n = c.call(e, t);
        if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
      } catch (e) {
      }
      return 0 < oe(t, C, null, [e]).length
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), v(e, t)
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()], i = n && L.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== i ? i : h.attributes || !E ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne)
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, oe.uniqueSort = function (e) {
      var t, n = [], i = 0, r = 0;
      if (l = !h.detectDuplicates, u = !h.sortStable && e.slice(0), e.sort(k), l) {
        for (; t = e[r++];) t === e[r] && (i = n.push(r));
        for (; i--;) e.splice(n[i], 1)
      }
      return u = null, e
    }, o = oe.getText = function (e) {
      var t, n = "", i = 0, r = e.nodeType;
      if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
        } else if (3 === r || 4 === r) return e.nodeValue
      } else for (; t = e[i++];) n += o(t);
      return n
    }, (b = oe.selectors = {
      cacheLength: 50,
      createPseudo: ae,
      match: X,
      attrHandle: {},
      find: {},
      relative: {
        ">": {dir: "parentNode", first: !0},
        " ": {dir: "parentNode"},
        "+": {dir: "previousSibling", first: !0},
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        }, CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
        }, PSEUDO: function (e) {
          var t, n = !e[6] && e[2];
          return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(Z, ee).toLowerCase();
          return "*" === e ? function () {
            return !0
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        }, CLASS: function (e) {
          var t = d[e + " "];
          return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && d(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
          })
        }, ATTR: function (n, i, r) {
          return function (e) {
            var t = oe.attr(e, n);
            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(R, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
          }
        }, CHILD: function (p, e, t, m, g) {
          var v = "nth" !== p.slice(0, 3), y = "last" !== p.slice(-4), x = "of-type" === e;
          return 1 === m && 0 === g ? function (e) {
            return !!e.parentNode
          } : function (e, t, n) {
            var i, r, o, s, a, u, l = v !== y ? "nextSibling" : "previousSibling", c = e.parentNode,
              f = x && e.nodeName.toLowerCase(), d = !n && !x, h = !1;
            if (c) {
              if (v) {
                for (; l;) {
                  for (s = e; s = s[l];) if (x ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                  u = l = "only" === p && !u && "nextSibling"
                }
                return !0
              }
              if (u = [y ? c.firstChild : c.lastChild], y && d) {
                for (h = (a = (i = (r = (o = (s = c)[S] || (s[S] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === A && i[1]) && i[2], s = a && c.childNodes[a]; s = ++a && s && s[l] || (h = a = 0) || u.pop();) if (1 === s.nodeType && ++h && s === e) {
                  r[p] = [A, a, h];
                  break
                }
              } else if (d && (h = a = (i = (r = (o = (s = e)[S] || (s[S] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === A && i[1]), !1 === h) for (; (s = ++a && s && s[l] || (h = a = 0) || u.pop()) && ((x ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++h || (d && ((r = (o = s[S] || (s[S] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] = [A, h]), s !== e));) ;
              return (h -= g) === m || h % m == 0 && 0 <= h / m
            }
          }
        }, PSEUDO: function (e, o) {
          var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
          return s[S] ? s(o) : 1 < s.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, t) {
            for (var n, i = s(e, o), r = i.length; r--;) e[n = O(e, i[r])] = !(t[n] = i[r])
          }) : function (e) {
            return s(e, 0, t)
          }) : s
        }
      },
      pseudos: {
        not: ae(function (e) {
          var i = [], r = [], a = f(e.replace(M, "$1"));
          return a[S] ? ae(function (e, t, n, i) {
            for (var r, o = a(e, null, i, []), s = e.length; s--;) (r = o[s]) && (e[s] = !(t[s] = r))
          }) : function (e, t, n) {
            return i[0] = e, a(i, null, n, r), i[0] = null, !r.pop()
          }
        }), has: ae(function (t) {
          return function (e) {
            return 0 < oe(t, e).length
          }
        }), contains: ae(function (t) {
          return t = t.replace(Z, ee), function (e) {
            return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
          }
        }), lang: ae(function (n) {
          return Y.test(n || "") || oe.error("unsupported lang: " + n), n = n.replace(Z, ee).toLowerCase(), function (e) {
            var t;
            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
            } while ((e = e.parentNode) && 1 === e.nodeType);
            return !1
          }
        }), target: function (e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id
        }, root: function (e) {
          return e === s
        }, focus: function (e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        }, enabled: he(!1), disabled: he(!0), checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        }, selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
        }, empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0
        }, parent: function (e) {
          return !b.pseudos.empty(e)
        }, header: function (e) {
          return V.test(e.nodeName)
        }, input: function (e) {
          return Q.test(e.nodeName)
        }, button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        }, text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        }, first: pe(function () {
          return [0]
        }), last: pe(function (e, t) {
          return [t - 1]
        }), eq: pe(function (e, t, n) {
          return [n < 0 ? n + t : n]
        }), even: pe(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e
        }), odd: pe(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e
        }), lt: pe(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
          return e
        }), gt: pe(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
          return e
        })
      }
    }).pseudos.nth = b.pseudos.eq, {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) b.pseudos[e] = fe(e);
    for (e in{submit: !0, reset: !0}) b.pseudos[e] = de(e);

    function ge() {
    }

    function ve(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i
    }

    function ye(a, e, t) {
      var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, d = i++;
      return e.first ? function (e, t, n) {
        for (; e = e[u];) if (1 === e.nodeType || f) return a(e, t, n);
        return !1
      } : function (e, t, n) {
        var i, r, o, s = [A, d];
        if (n) {
          for (; e = e[u];) if ((1 === e.nodeType || f) && a(e, t, n)) return !0
        } else for (; e = e[u];) if (1 === e.nodeType || f) if (r = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e; else {
          if ((i = r[c]) && i[0] === A && i[1] === d) return s[2] = i[2];
          if ((r[c] = s)[2] = a(e, t, n)) return !0
        }
        return !1
      }
    }

    function xe(r) {
      return 1 < r.length ? function (e, t, n) {
        for (var i = r.length; i--;) if (!r[i](e, t, n)) return !1;
        return !0
      } : r[0]
    }

    function be(e, t, n, i, r) {
      for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++) (o = e[a]) && (n && !n(o, i, r) || (s.push(o), l && t.push(a)));
      return s
    }

    function we(h, p, m, g, v, e) {
      return g && !g[S] && (g = we(g)), v && !v[S] && (v = we(v, e)), ae(function (e, t, n, i) {
        var r, o, s, a = [], u = [], l = t.length, c = e || function (e, t, n) {
            for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
            return n
          }(p || "*", n.nodeType ? [n] : n, []), f = !h || !e && p ? c : be(c, a, h, n, i),
          d = m ? v || (e ? h : l || g) ? [] : t : f;
        if (m && m(f, d, n, i), g) for (r = be(d, u), g(r, [], n, i), o = r.length; o--;) (s = r[o]) && (d[u[o]] = !(f[u[o]] = s));
        if (e) {
          if (v || h) {
            if (v) {
              for (r = [], o = d.length; o--;) (s = d[o]) && r.push(f[o] = s);
              v(null, d = [], r, i)
            }
            for (o = d.length; o--;) (s = d[o]) && -1 < (r = v ? O(e, s) : a[o]) && (e[r] = !(t[r] = s))
          }
        } else d = be(d === t ? d.splice(l, d.length) : d), v ? v(null, t, d, i) : z.apply(t, d)
      })
    }

    function Te(e) {
      for (var r, t, n, i = e.length, o = b.relative[e[0].type], s = o || b.relative[" "], a = o ? 1 : 0, u = ye(function (e) {
        return e === r
      }, s, !0), l = ye(function (e) {
        return -1 < O(r, e)
      }, s, !0), c = [function (e, t, n) {
        var i = !o && (n || t !== w) || ((r = t).nodeType ? u(e, t, n) : l(e, t, n));
        return r = null, i
      }]; a < i; a++) if (t = b.relative[e[a].type]) c = [ye(xe(c), t)]; else {
        if ((t = b.filter[e[a].type].apply(null, e[a].matches))[S]) {
          for (n = ++a; n < i && !b.relative[e[n].type]; n++) ;
          return we(1 < a && xe(c), 1 < a && ve(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(M, "$1"), t, a < n && Te(e.slice(a, n)), n < i && Te(e = e.slice(n)), n < i && ve(e))
        }
        c.push(t)
      }
      return xe(c)
    }

    return ge.prototype = b.filters = b.pseudos, b.setFilters = new ge, p = oe.tokenize = function (e, t) {
      var n, i, r, o, s, a, u, l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      for (s = e, a = [], u = b.preFilter; s;) {
        for (o in n && !(i = B.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(r = [])), n = !1, (i = F.exec(s)) && (n = i.shift(), r.push({
          value: n,
          type: i[0].replace(M, " ")
        }), s = s.slice(n.length)), b.filter) !(i = X[o].exec(s)) || u[o] && !(i = u[o](i)) || (n = i.shift(), r.push({
          value: n,
          type: o,
          matches: i
        }), s = s.slice(n.length));
        if (!n) break
      }
      return t ? s.length : s ? oe.error(e) : x(e, a).slice(0)
    }, f = oe.compile = function (e, t) {
      var n, g, v, y, x, i, r = [], o = [], s = j[e + " "];
      if (!s) {
        for (t || (t = p(e)), n = t.length; n--;) (s = Te(t[n]))[S] ? r.push(s) : o.push(s);
        (s = j(e, (g = o, v = r, y = 0 < v.length, x = 0 < g.length, i = function (e, t, n, i, r) {
          var o, s, a, u = 0, l = "0", c = e && [], f = [], d = w, h = e || x && b.find.TAG("*", r),
            p = A += null == d ? 1 : Math.random() || .1, m = h.length;
          for (r && (w = t === C || t || r); l !== m && null != (o = h[l]); l++) {
            if (x && o) {
              for (s = 0, t || o.ownerDocument === C || (T(o), n = !E); a = g[s++];) if (a(o, t || C, n)) {
                i.push(o);
                break
              }
              r && (A = p)
            }
            y && ((o = !a && o) && u--, e && c.push(o))
          }
          if (u += l, y && l !== u) {
            for (s = 0; a = v[s++];) a(c, f, t, n);
            if (e) {
              if (0 < u) for (; l--;) c[l] || f[l] || (f[l] = N.call(i));
              f = be(f)
            }
            z.apply(i, f), r && !e && 0 < f.length && 1 < u + v.length && oe.uniqueSort(i)
          }
          return r && (A = p, w = d), c
        }, y ? ae(i) : i))).selector = e
      }
      return s
    }, m = oe.select = function (e, t, n, i) {
      var r, o, s, a, u, l = "function" == typeof e && e, c = !i && p(e = l.selector || e);
      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(s.matches[0].replace(Z, ee), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length)
        }
        for (r = X.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !b.relative[a = s.type]);) if ((u = b.find[a]) && (i = u(s.matches[0].replace(Z, ee), K.test(o[0].type) && me(t.parentNode) || t))) {
          if (o.splice(r, 1), !(e = i.length && ve(o))) return z.apply(n, i), n;
          break
        }
      }
      return (l || f(e, c))(i, t, !E, n, !t || K.test(e) && me(t.parentNode) || t), n
    }, h.sortStable = S.split("").sort(k).join("") === S, h.detectDuplicates = !!l, T(), h.sortDetached = ue(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
    }), ue(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || le("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), h.attributes && ue(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || le("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    }), ue(function (e) {
      return null == e.getAttribute("disabled")
    }) || le(q, function (e, t, n) {
      var i;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }), oe
  }(C);
  S.find = h, S.expr = h.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = h.uniqueSort, S.text = h.getText, S.isXMLDoc = h.isXML, S.contains = h.contains, S.escapeSelector = h.escape;
  var p = function (e, t, n) {
    for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
      if (r && S(e).is(n)) break;
      i.push(e)
    }
    return i
  }, T = function (e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
    return n
  }, A = S.expr.match.needsContext;

  function j(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }

  var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function L(e, n, i) {
    return y(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== i
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== i
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < r.call(n, e) !== i
    }) : S.filter(n, e, i)
  }

  S.filter = function (e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? S.find.matchesSelector(i, e) ? [i] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType
    }))
  }, S.fn.extend({
    find: function (e) {
      var t, n, i = this.length, r = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < i; t++) if (S.contains(r[t], this)) return !0
      }));
      for (n = this.pushStack([]), t = 0; t < i; t++) S.find(e, r[t], n);
      return 1 < i ? S.uniqueSort(n) : n
    }, filter: function (e) {
      return this.pushStack(L(this, e || [], !1))
    }, not: function (e) {
      return this.pushStack(L(this, e || [], !0))
    }, is: function (e) {
      return !!L(this, "string" == typeof e && A.test(e) ? S(e) : e || [], !1).length
    }
  });
  var N, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var i, r;
    if (!e) return this;
    if (n = n || N, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
    if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : D.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
    if (i[1]) {
      if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), k.test(i[1]) && S.isPlainObject(t)) for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
      return this
    }
    return (r = E.getElementById(i[2])) && (this[0] = r, this.length = 1), this
  }).prototype = S.fn, N = S(E);
  var z = /^(?:parents|prev(?:Until|All))/, _ = {children: !0, contents: !0, next: !0, prev: !0};

  function O(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) ;
    return e
  }

  S.fn.extend({
    has: function (e) {
      var t = S(e, this), n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0
      })
    }, closest: function (e, t) {
      var n, i = 0, r = this.length, o = [], s = "string" != typeof e && S(e);
      if (!A.test(e)) for (; i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
        o.push(n);
        break
      }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
    }, index: function (e) {
      return e ? "string" == typeof e ? r.call(S(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
    }, addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), S.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    }, parents: function (e) {
      return p(e, "parentNode")
    }, parentsUntil: function (e, t, n) {
      return p(e, "parentNode", n)
    }, next: function (e) {
      return O(e, "nextSibling")
    }, prev: function (e) {
      return O(e, "previousSibling")
    }, nextAll: function (e) {
      return p(e, "nextSibling")
    }, prevAll: function (e) {
      return p(e, "previousSibling")
    }, nextUntil: function (e, t, n) {
      return p(e, "nextSibling", n)
    }, prevUntil: function (e, t, n) {
      return p(e, "previousSibling", n)
    }, siblings: function (e) {
      return T((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
      return T(e.firstChild)
    }, contents: function (e) {
      return j(e, "iframe") ? e.contentDocument : (j(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
    }
  }, function (i, r) {
    S.fn[i] = function (e, t) {
      var n = S.map(this, r, e);
      return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (_[i] || S.uniqueSort(n), z.test(i) && n.reverse()), this.pushStack(n)
    }
  });
  var q = /[^\x20\t\r\n\f]+/g;

  function I(e) {
    return e
  }

  function H(e) {
    throw e
  }

  function W(e, t, n, i) {
    var r;
    try {
      e && y(r = e.promise) ? r.call(e).done(t).fail(n) : e && y(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }

  S.Callbacks = function (i) {
    var e, n;
    i = "string" == typeof i ? (e = i, n = {}, S.each(e.match(q) || [], function (e, t) {
      n[t] = !0
    }), n) : S.extend({}, i);
    var r, t, o, s, a = [], u = [], l = -1, c = function () {
      for (s = s || i.once, o = r = !0; u.length; l = -1) for (t = u.shift(); ++l < a.length;) !1 === a[l].apply(t[0], t[1]) && i.stopOnFalse && (l = a.length, t = !1);
      i.memory || (t = !1), r = !1, s && (a = t ? [] : "")
    }, f = {
      add: function () {
        return a && (t && !r && (l = a.length - 1, u.push(t)), function n(e) {
          S.each(e, function (e, t) {
            y(t) ? i.unique && f.has(t) || a.push(t) : t && t.length && "string" !== w(t) && n(t)
          })
        }(arguments), t && !r && c()), this
      }, remove: function () {
        return S.each(arguments, function (e, t) {
          for (var n; -1 < (n = S.inArray(t, a, n));) a.splice(n, 1), n <= l && l--
        }), this
      }, has: function (e) {
        return e ? -1 < S.inArray(e, a) : 0 < a.length
      }, empty: function () {
        return a && (a = []), this
      }, disable: function () {
        return s = u = [], a = t = "", this
      }, disabled: function () {
        return !a
      }, lock: function () {
        return s = u = [], t || r || (a = t = ""), this
      }, locked: function () {
        return !!s
      }, fireWith: function (e, t) {
        return s || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), r || c()), this
      }, fire: function () {
        return f.fireWith(this, arguments), this
      }, fired: function () {
        return !!o
      }
    };
    return f
  }, S.extend({
    Deferred: function (e) {
      var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
        r = "pending", s = {
          state: function () {
            return r
          }, always: function () {
            return a.done(arguments).fail(arguments), this
          }, catch: function (e) {
            return s.then(null, e)
          }, pipe: function () {
            var r = arguments;
            return S.Deferred(function (i) {
              S.each(o, function (e, t) {
                var n = y(r[t[4]]) && r[t[4]];
                a[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                })
              }), r = null
            }).promise()
          }, then: function (t, n, i) {
            var u = 0;

            function l(r, o, s, a) {
              return function () {
                var n = this, i = arguments, e = function () {
                  var e, t;
                  if (!(r < u)) {
                    if ((e = s.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
                    t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? a ? t.call(e, l(u, o, I, a), l(u, o, H, a)) : (u++, t.call(e, l(u, o, I, a), l(u, o, H, a), l(u, o, I, o.notifyWith))) : (s !== I && (n = void 0, i = [e]), (a || o.resolveWith)(n, i))
                  }
                }, t = a ? e : function () {
                  try {
                    e()
                  } catch (e) {
                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= r + 1 && (s !== H && (n = void 0, i = [e]), o.rejectWith(n, i))
                  }
                };
                r ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
              }
            }

            return S.Deferred(function (e) {
              o[0][3].add(l(0, e, y(i) ? i : I, e.notifyWith)), o[1][3].add(l(0, e, y(t) ? t : I)), o[2][3].add(l(0, e, y(n) ? n : H))
            }).promise()
          }, promise: function (e) {
            return null != e ? S.extend(e, s) : s
          }
        }, a = {};
      return S.each(o, function (e, t) {
        var n = t[2], i = t[5];
        s[t[1]] = n.add, i && n.add(function () {
          r = i
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), a[t[0]] = function () {
          return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
        }, a[t[0] + "With"] = n.fireWith
      }), s.promise(a), e && e.call(a, a), a
    }, when: function (e) {
      var n = arguments.length, t = n, i = Array(t), r = a.call(arguments), o = S.Deferred(), s = function (t) {
        return function (e) {
          i[t] = this, r[t] = 1 < arguments.length ? a.call(arguments) : e, --n || o.resolveWith(i, r)
        }
      };
      if (n <= 1 && (W(e, o.done(s(t)).resolve, o.reject, !n), "pending" === o.state() || y(r[t] && r[t].then))) return o.then();
      for (; t--;) W(r[t], s(t), o.reject);
      return o.promise()
    }
  });
  var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && P.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e
    })
  };
  var R = S.Deferred();

  function M() {
    E.removeEventListener("DOMContentLoaded", M), C.removeEventListener("load", M), S.ready()
  }

  S.fn.ready = function (e) {
    return R.then(e).catch(function (e) {
      S.readyException(e)
    }), this
  }, S.extend({
    isReady: !1, readyWait: 1, ready: function (e) {
      (!0 === e ? --S.readyWait : S.isReady) || ((S.isReady = !0) !== e && 0 < --S.readyWait || R.resolveWith(E, [S]))
    }
  }), S.ready.then = R.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", M), C.addEventListener("load", M));
  var B = function (e, t, n, i, r, o, s) {
    var a = 0, u = e.length, l = null == n;
    if ("object" === w(n)) for (a in r = !0, n) B(e, t, a, n[a], !0, o, s); else if (void 0 !== i && (r = !0, y(i) || (s = !0), l && (t = s ? (t.call(e, i), null) : (l = t, function (e, t, n) {
      return l.call(S(e), n)
    })), t)) for (; a < u; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
    return r ? e : l ? t.call(e) : u ? t(e[0], n) : o
  }, F = /^-ms-/, $ = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase()
  }

  function Y(e) {
    return e.replace(F, "ms-").replace($, U)
  }

  var X = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };

  function Q() {
    this.expando = S.expando + Q.uid++
  }

  Q.uid = 1, Q.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    }, set: function (e, t, n) {
      var i, r = this.cache(e);
      if ("string" == typeof t) r[Y(t)] = n; else for (i in t) r[Y(i)] = t[i];
      return r
    }, get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
    }, access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    }, remove: function (e, t) {
      var n, i = e[this.expando];
      if (void 0 !== i) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in i ? [t] : t.match(q) || []).length;
          for (; n--;) delete i[t[n]]
        }
        (void 0 === t || S.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    }, hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t)
    }
  };
  var V = new Q, G = new Q, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;

  function Z(e, t, n) {
    var i, r;
    if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
      try {
        n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : J.test(r) ? JSON.parse(r) : r)
      } catch (e) {
      }
      G.set(e, t, n)
    } else n = void 0;
    return n
  }

  S.extend({
    hasData: function (e) {
      return G.hasData(e) || V.hasData(e)
    }, data: function (e, t, n) {
      return G.access(e, t, n)
    }, removeData: function (e, t) {
      G.remove(e, t)
    }, _data: function (e, t, n) {
      return V.access(e, t, n)
    }, _removeData: function (e, t) {
      V.remove(e, t)
    }
  }), S.fn.extend({
    data: function (n, e) {
      var t, i, r, o = this[0], s = o && o.attributes;
      if (void 0 !== n) return "object" == typeof n ? this.each(function () {
        G.set(this, n)
      }) : B(this, function (e) {
        var t;
        if (o && void 0 === e) {
          if (void 0 !== (t = G.get(o, n))) return t;
          if (void 0 !== (t = Z(o, n))) return t
        } else this.each(function () {
          G.set(this, n, e)
        })
      }, null, e, 1 < arguments.length, null, !0);
      if (this.length && (r = G.get(o), 1 === o.nodeType && !V.get(o, "hasDataAttrs"))) {
        for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = Y(i.slice(5)), Z(o, i, r[i]));
        V.set(o, "hasDataAttrs", !0)
      }
      return r
    }, removeData: function (e) {
      return this.each(function () {
        G.remove(this, e)
      })
    }
  }), S.extend({
    queue: function (e, t, n) {
      var i;
      if (e) return t = (t || "fx") + "queue", i = V.get(e, t), n && (!i || Array.isArray(n) ? i = V.access(e, t, S.makeArray(n)) : i.push(n)), i || []
    }, dequeue: function (e, t) {
      t = t || "fx";
      var n = S.queue(e, t), i = n.length, r = n.shift(), o = S._queueHooks(e, t);
      "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
        S.dequeue(e, t)
      }, o)), !i && o && o.empty.fire()
    }, _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return V.get(e, n) || V.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          V.remove(e, [t + "queue", n])
        })
      })
    }
  }), S.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
      })
    }, dequeue: function (e) {
      return this.each(function () {
        S.dequeue(this, e)
      })
    }, clearQueue: function (e) {
      return this.queue(e || "fx", [])
    }, promise: function (e, t) {
      var n, i = 1, r = S.Deferred(), o = this, s = this.length, a = function () {
        --i || r.resolveWith(o, [o])
      };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (n = V.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
      return a(), r.promise(t)
    }
  });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"], ie = function (e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && S.contains(e.ownerDocument, e) && "none" === S.css(e, "display")
    }, re = function (e, t, n, i) {
      var r, o, s = {};
      for (o in t) s[o] = e.style[o], e.style[o] = t[o];
      for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
      return r
    };

  function oe(e, t, n, i) {
    var r, o, s = 20, a = i ? function () {
        return i.cur()
      } : function () {
        return S.css(e, t, "")
      }, u = a(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
      c = (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      for (u /= 2, l = l || c[3], c = +u || 1; s--;) S.style(e, t, c + l), (1 - o) * (1 - (o = a() / u || .5)) <= 0 && (s = 0), c /= o;
      c *= 2, S.style(e, t, c + l), n = n || []
    }
    return n && (c = +c || +u || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = c, i.end = r)), r
  }

  var se = {};

  function ae(e, t) {
    for (var n, i, r = [], o = 0, s = e.length; o < s; o++) (i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = V.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ie(i) && (r[o] = (f = l = u = void 0, l = (a = i).ownerDocument, c = a.nodeName, (f = se[c]) || (u = l.body.appendChild(l.createElement(c)), f = S.css(u, "display"), u.parentNode.removeChild(u), "none" === f && (f = "block"), se[c] = f)))) : "none" !== n && (r[o] = "none", V.set(i, "display", n)));
    var a, u, l, c, f;
    for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
    return e
  }

  S.fn.extend({
    show: function () {
      return ae(this, !0)
    }, hide: function () {
      return ae(this)
    }, toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ie(this) ? S(this).show() : S(this).hide()
      })
    }
  });
  var ue = /^(?:checkbox|radio)$/i, le = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, ce = /^$|^module$|\/(?:java|ecma)script/i,
    fe = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };

  function de(e, t) {
    var n;
    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && j(e, t) ? S.merge([e], n) : n
  }

  function he(e, t) {
    for (var n = 0, i = e.length; n < i; n++) V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval"))
  }

  fe.optgroup = fe.option, fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead, fe.th = fe.td;
  var pe, me, ge = /<|&#?\w+;/;

  function ve(e, t, n, i, r) {
    for (var o, s, a, u, l, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++) if ((o = e[h]) || 0 === o) if ("object" === w(o)) S.merge(d, o.nodeType ? [o] : o); else if (ge.test(o)) {
      for (s = s || f.appendChild(t.createElement("div")), a = (le.exec(o) || ["", ""])[1].toLowerCase(), u = fe[a] || fe._default, s.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0]; c--;) s = s.lastChild;
      S.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
    } else d.push(t.createTextNode(o));
    for (f.textContent = "", h = 0; o = d[h++];) if (i && -1 < S.inArray(o, i)) r && r.push(o); else if (l = S.contains(o.ownerDocument, o), s = de(f.appendChild(o), "script"), l && he(s), n) for (c = 0; o = s[c++];) ce.test(o.type || "") && n.push(o);
    return f
  }

  pe = E.createDocumentFragment().appendChild(E.createElement("div")), (me = E.createElement("input")).setAttribute("type", "radio"), me.setAttribute("checked", "checked"), me.setAttribute("name", "t"), pe.appendChild(me), v.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked, pe.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue;
  var ye = E.documentElement, xe = /^key/, be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    we = /^([^.]*)(?:\.(.+)|)/;

  function Te() {
    return !0
  }

  function Ce() {
    return !1
  }

  function Ee() {
    try {
      return E.activeElement
    } catch (e) {
    }
  }

  function Se(e, t, n, i, r, o) {
    var s, a;
    if ("object" == typeof t) {
      for (a in"string" != typeof n && (i = i || n, n = void 0), t) Se(e, a, n, i, t[a], o);
      return e
    }
    if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Ce; else if (!r) return e;
    return 1 === o && (s = r, (r = function (e) {
      return S().off(e), s.apply(this, arguments)
    }).guid = s.guid || (s.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, r, i, n)
    })
  }

  S.event = {
    global: {}, add: function (t, e, n, i, r) {
      var o, s, a, u, l, c, f, d, h, p, m, g = V.get(t);
      if (g) for (n.handler && (n = (o = n).handler, r = o.selector), r && S.find.matchesSelector(ye, r), n.guid || (n.guid = S.guid++), (u = g.events) || (u = g.events = {}), (s = g.handle) || (s = g.handle = function (e) {
        return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
      }), l = (e = (e || "").match(q) || [""]).length; l--;) h = m = (a = we.exec(e[l]) || [])[1], p = (a[2] || "").split(".").sort(), h && (f = S.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = S.event.special[h] || {}, c = S.extend({
        type: h,
        origType: m,
        data: i,
        handler: n,
        guid: n.guid,
        selector: r,
        needsContext: r && S.expr.match.needsContext.test(r),
        namespace: p.join(".")
      }, o), (d = u[h]) || ((d = u[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(h, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), S.event.global[h] = !0)
    }, remove: function (e, t, n, i, r) {
      var o, s, a, u, l, c, f, d, h, p, m, g = V.hasData(e) && V.get(e);
      if (g && (u = g.events)) {
        for (l = (t = (t || "").match(q) || [""]).length; l--;) if (h = m = (a = we.exec(t[l]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
          for (f = S.event.special[h] || {}, d = u[h = (i ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
          s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, g.handle) || S.removeEvent(e, h, g.handle), delete u[h])
        } else for (h in u) S.event.remove(e, h + t[l], n, i, !0);
        S.isEmptyObject(u) && V.remove(e, "handle events")
      }
    }, dispatch: function (e) {
      var t, n, i, r, o, s, a = S.event.fix(e), u = new Array(arguments.length),
        l = (V.get(this, "events") || {})[a.type] || [], c = S.event.special[a.type] || {};
      for (u[0] = a, t = 1; t < arguments.length; t++) u[t] = arguments[t];
      if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
        for (s = S.event.handlers.call(this, a, l), t = 0; (r = s[t++]) && !a.isPropagationStopped();) for (a.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((S.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, u)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, a), a.result
      }
    }, handlers: function (e, t) {
      var n, i, r, o, s, a = [], u = t.delegateCount, l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
        for (o = [], s = {}, n = 0; n < u; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < S(r, this).index(l) : S.find(r, this, null, [l]).length), s[r] && o.push(i);
        o.length && a.push({elem: l, handlers: o})
      }
      return l = this, u < t.length && a.push({elem: l, handlers: t.slice(u)}), a
    }, addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0, configurable: !0, get: y(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent)
        } : function () {
          if (this.originalEvent) return this.originalEvent[t]
        }, set: function (e) {
          Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
        }
      })
    }, fix: function (e) {
      return e[S.expando] ? e : new S.Event(e)
    }, special: {
      load: {noBubble: !0}, focus: {
        trigger: function () {
          if (this !== Ee() && this.focus) return this.focus(), !1
        }, delegateType: "focusin"
      }, blur: {
        trigger: function () {
          if (this === Ee() && this.blur) return this.blur(), !1
        }, delegateType: "focusout"
      }, click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && j(this, "input")) return this.click(), !1
        }, _default: function (e) {
          return j(e.target, "a")
        }
      }, beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Ce,
    isPropagationStopped: Ce,
    isImmediatePropagationStopped: Ce,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function (e) {
      var t = e.button;
      return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && be.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
    }
  }, S.event.addProp), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, r) {
    S.event.special[e] = {
      delegateType: r, bindType: r, handle: function (e) {
        var t, n = e.relatedTarget, i = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
      }
    }
  }), S.fn.extend({
    on: function (e, t, n, i) {
      return Se(this, e, t, n, i)
    }, one: function (e, t, n, i) {
      return Se(this, e, t, n, i, 1)
    }, off: function (e, t, n) {
      var i, r;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, S(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function () {
        S.event.remove(this, e, n, t)
      });
      for (r in e) this.off(r, t, e[r]);
      return this
    }
  });
  var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    je = /<script|<style|<link/i, ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Ne(e, t) {
    return j(e, "table") && j(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
  }

  function De(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function ze(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
  }

  function _e(e, t) {
    var n, i, r, o, s, a, u, l;
    if (1 === t.nodeType) {
      if (V.hasData(e) && (o = V.access(e), s = V.set(t, o), l = o.events)) for (r in delete s.handle, s.events = {}, l) for (n = 0, i = l[r].length; n < i; n++) S.event.add(t, r, l[r][n]);
      G.hasData(e) && (a = G.access(e), u = S.extend({}, a), G.set(t, u))
    }
  }

  function Oe(n, i, r, o) {
    i = m.apply([], i);
    var e, t, s, a, u, l, c = 0, f = n.length, d = f - 1, h = i[0], p = y(h);
    if (p || 1 < f && "string" == typeof h && !v.checkClone && ke.test(h)) return n.each(function (e) {
      var t = n.eq(e);
      p && (i[0] = h.call(this, e, t.html())), Oe(t, i, r, o)
    });
    if (f && (t = (e = ve(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (a = (s = S.map(de(e, "script"), De)).length; c < f; c++) u = e, c !== d && (u = S.clone(u, !0, !0), a && S.merge(s, de(u, "script"))), r.call(n[c], u, c);
      if (a) for (l = s[s.length - 1].ownerDocument, S.map(s, ze), c = 0; c < a; c++) u = s[c], ce.test(u.type || "") && !V.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && S._evalUrl(u.src) : b(u.textContent.replace(Le, ""), l, u))
    }
    return n
  }

  function qe(e, t, n) {
    for (var i, r = t ? S.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || S.cleanData(de(i)), i.parentNode && (n && S.contains(i.ownerDocument, i) && he(de(i, "script")), i.parentNode.removeChild(i));
    return e
  }

  S.extend({
    htmlPrefilter: function (e) {
      return e.replace(Ae, "<$1></$2>")
    }, clone: function (e, t, n) {
      var i, r, o, s, a, u, l, c = e.cloneNode(!0), f = S.contains(e.ownerDocument, e);
      if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (s = de(c), i = 0, r = (o = de(e)).length; i < r; i++) a = o[i], u = s[i], void 0, "input" === (l = u.nodeName.toLowerCase()) && ue.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
      if (t) if (n) for (o = o || de(e), s = s || de(c), i = 0, r = o.length; i < r; i++) _e(o[i], s[i]); else _e(e, c);
      return 0 < (s = de(c, "script")).length && he(s, !f && de(e, "script")), c
    }, cleanData: function (e) {
      for (var t, n, i, r = S.event.special, o = 0; void 0 !== (n = e[o]); o++) if (X(n)) {
        if (t = n[V.expando]) {
          if (t.events) for (i in t.events) r[i] ? S.event.remove(n, i) : S.removeEvent(n, i, t.handle);
          n[V.expando] = void 0
        }
        n[G.expando] && (n[G.expando] = void 0)
      }
    }
  }), S.fn.extend({
    detach: function (e) {
      return qe(this, e, !0)
    }, remove: function (e) {
      return qe(this, e)
    }, text: function (e) {
      return B(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    }, append: function () {
      return Oe(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
      })
    }, prepend: function () {
      return Oe(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Ne(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    }, before: function () {
      return Oe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    }, after: function () {
      return Oe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    }, empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(de(e, !1)), e.textContent = "");
      return this
    }, clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t)
      })
    }, html: function (e) {
      return B(this, function (e) {
        var t = this[0] || {}, n = 0, i = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !je.test(e) && !fe[(le.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);
          try {
            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(de(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {
          }
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    }, replaceWith: function () {
      var n = [];
      return Oe(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(de(this)), t && t.replaceChild(e, this))
      }, n)
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, s) {
    S.fn[e] = function (e) {
      for (var t, n = [], i = S(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), S(i[o])[s](t), u.apply(n, t.get());
      return this.pushStack(n)
    }
  });
  var Ie = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), He = function (e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e)
  }, We = new RegExp(ne.join("|"), "i");

  function Pe(e, t, n) {
    var i, r, o, s, a = e.style;
    return (n = n || He(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || S.contains(e.ownerDocument, e) || (s = S.style(e, t)), !v.pixelBoxStyles() && Ie.test(s) && We.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
  }

  function Re(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }

  !function () {
    function e() {
      if (u) {
        a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ye.appendChild(a).appendChild(u);
        var e = C.getComputedStyle(u);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), i = 36 === t(e.width), u.style.position = "absolute", r = 36 === u.offsetWidth || "absolute", ye.removeChild(a), u = null
      }
    }

    function t(e) {
      return Math.round(parseFloat(e))
    }

    var n, i, r, o, s, a = E.createElement("div"), u = E.createElement("div");
    u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, S.extend(v, {
      boxSizingReliable: function () {
        return e(), i
      }, pixelBoxStyles: function () {
        return e(), o
      }, pixelPosition: function () {
        return e(), n
      }, reliableMarginLeft: function () {
        return e(), s
      }, scrollboxSize: function () {
        return e(), r
      }
    }))
  }();
  var Me = /^(none|table(?!-c[ea]).+)/, Be = /^--/, Fe = {position: "absolute", visibility: "hidden", display: "block"},
    $e = {letterSpacing: "0", fontWeight: "400"}, Ue = ["Webkit", "Moz", "ms"], Ye = E.createElement("div").style;

  function Xe(e) {
    var t = S.cssProps[e];
    return t || (t = S.cssProps[e] = function (e) {
      if (e in Ye) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;) if ((e = Ue[n] + t) in Ye) return e
    }(e) || e), t
  }

  function Qe(e, t, n) {
    var i = te.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
  }

  function Ve(e, t, n, i, r, o) {
    var s = "width" === t ? 1 : 0, a = 0, u = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; s < 4; s += 2) "margin" === n && (u += S.css(e, n + ne[s], !0, r)), i ? ("content" === n && (u -= S.css(e, "padding" + ne[s], !0, r)), "margin" !== n && (u -= S.css(e, "border" + ne[s] + "Width", !0, r))) : (u += S.css(e, "padding" + ne[s], !0, r), "padding" !== n ? u += S.css(e, "border" + ne[s] + "Width", !0, r) : a += S.css(e, "border" + ne[s] + "Width", !0, r));
    return !i && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - .5))), u
  }

  function Ge(e, t, n) {
    var i = He(e), r = Pe(e, t, i), o = "border-box" === S.css(e, "boxSizing", !1, i), s = o;
    if (Ie.test(r)) {
      if (!n) return r;
      r = "auto"
    }
    return s = s && (v.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === S.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + Ve(e, t, n || (o ? "border" : "content"), s, i, r) + "px"
  }

  function Je(e, t, n, i, r) {
    return new Je.prototype.init(e, t, n, i, r)
  }

  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Pe(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r, o, s, a = Y(t), u = Be.test(t), l = e.style;
        if (u || (t = Xe(a)), s = S.cssHooks[t] || S.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t];
        "string" == (o = typeof n) && (r = te.exec(n)) && r[1] && (n = oe(e, t, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (S.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (u ? l.setProperty(t, n) : l[t] = n))
      }
    },
    css: function (e, t, n, i) {
      var r, o, s, a = Y(t);
      return Be.test(t) || (t = Xe(a)), (s = S.cssHooks[t] || S.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Pe(e, t, i)), "normal" === r && t in $e && (r = $e[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
    }
  }), S.each(["height", "width"], function (e, a) {
    S.cssHooks[a] = {
      get: function (e, t, n) {
        if (t) return !Me.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ge(e, a, n) : re(e, Fe, function () {
          return Ge(e, a, n)
        })
      }, set: function (e, t, n) {
        var i, r = He(e), o = "border-box" === S.css(e, "boxSizing", !1, r), s = n && Ve(e, a, n, o, r);
        return o && v.scrollboxSize() === r.position && (s -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(r[a]) - Ve(e, a, "border", !1, r) - .5)), s && (i = te.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t, t = S.css(e, a)), Qe(0, t, s)
      }
    }
  }), S.cssHooks.marginLeft = Re(v.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Pe(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {marginLeft: 0}, function () {
      return e.getBoundingClientRect().left
    })) + "px"
  }), S.each({margin: "", padding: "", border: "Width"}, function (r, o) {
    S.cssHooks[r + o] = {
      expand: function (e) {
        for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + ne[t] + o] = i[t] || i[t - 2] || i[0];
        return n
      }
    }, "margin" !== r && (S.cssHooks[r + o].set = Qe)
  }), S.fn.extend({
    css: function (e, t) {
      return B(this, function (e, t, n) {
        var i, r, o = {}, s = 0;
        if (Array.isArray(t)) {
          for (i = He(e), r = t.length; s < r; s++) o[t[s]] = S.css(e, t[s], !1, i);
          return o
        }
        return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
      }, e, t, 1 < arguments.length)
    }
  }), ((S.Tween = Je).prototype = {
    constructor: Je, init: function (e, t, n, i, r, o) {
      this.elem = e, this.prop = n, this.easing = r || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (S.cssNumber[n] ? "" : "px")
    }, cur: function () {
      var e = Je.propHooks[this.prop];
      return e && e.get ? e.get(this) : Je.propHooks._default.get(this)
    }, run: function (e) {
      var t, n = Je.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Je.propHooks._default.set(this), this
    }
  }).init.prototype = Je.prototype, (Je.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
      }, set: function (e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[S.cssProps[e.prop]] && !S.cssHooks[e.prop] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }).scrollTop = Je.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, S.easing = {
    linear: function (e) {
      return e
    }, swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }, _default: "swing"
  }, S.fx = Je.prototype.init, S.fx.step = {};
  var Ke, Ze, et, tt, nt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;

  function rt() {
    Ze && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(rt) : C.setTimeout(rt, S.fx.interval), S.fx.tick())
  }

  function ot() {
    return C.setTimeout(function () {
      Ke = void 0
    }), Ke = Date.now()
  }

  function st(e, t) {
    var n, i = 0, r = {height: e};
    for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r
  }

  function at(e, t, n) {
    for (var i, r = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), o = 0, s = r.length; o < s; o++) if (i = r[o].call(n, t, e)) return i
  }

  function ut(o, e, t) {
    var n, s, i = 0, r = ut.prefilters.length, a = S.Deferred().always(function () {
      delete u.elem
    }), u = function () {
      if (s) return !1;
      for (var e = Ke || ot(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), i = 0, r = l.tweens.length; i < r; i++) l.tweens[i].run(n);
      return a.notifyWith(o, [l, n, t]), n < 1 && r ? t : (r || a.notifyWith(o, [l, 1, 0]), a.resolveWith(o, [l]), !1)
    }, l = a.promise({
      elem: o,
      props: S.extend({}, e),
      opts: S.extend(!0, {specialEasing: {}, easing: S.easing._default}, t),
      originalProperties: e,
      originalOptions: t,
      startTime: Ke || ot(),
      duration: t.duration,
      tweens: [],
      createTween: function (e, t) {
        var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n
      },
      stop: function (e) {
        var t = 0, n = e ? l.tweens.length : 0;
        if (s) return this;
        for (s = !0; t < n; t++) l.tweens[t].run(1);
        return e ? (a.notifyWith(o, [l, 1, 0]), a.resolveWith(o, [l, e])) : a.rejectWith(o, [l, e]), this
      }
    }), c = l.props;
    for (function (e, t) {
      var n, i, r, o, s;
      for (n in e) if (r = t[i = Y(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = S.cssHooks[i]) && "expand" in s) for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r); else t[i] = r
    }(c, l.opts.specialEasing); i < r; i++) if (n = ut.prefilters[i].call(l, o, c, l.opts)) return y(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    return S.map(c, at, l), y(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l
  }

  S.Animation = S.extend(ut, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return oe(n.elem, e, te.exec(t), n), n
      }]
    }, tweener: function (e, t) {
      for (var n, i = 0, r = (e = y(e) ? (t = e, ["*"]) : e.match(q)).length; i < r; i++) n = e[i], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
    }, prefilters: [function (e, t, n) {
      var i, r, o, s, a, u, l, c, f = "width" in t || "height" in t, d = this, h = {}, p = e.style,
        m = e.nodeType && ie(e), g = V.get(e, "fxshow");
      for (i in n.queue || (null == (s = S._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
        s.unqueued || a()
      }), s.unqueued++, d.always(function () {
        d.always(function () {
          s.unqueued--, S.queue(e, "fx").length || s.empty.fire()
        })
      })), t) if (r = t[i], nt.test(r)) {
        if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
          if ("show" !== r || !g || void 0 === g[i]) continue;
          m = !0
        }
        h[i] = g && g[i] || S.style(e, i)
      }
      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(h)) for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (l = g && g.display) && (l = V.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (ae([e], !0), l = e.style.display || l, c = S.css(e, "display"), ae([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (d.done(function () {
        p.display = l
      }), null == l && (c = p.display, l = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
      })), u = !1, h) u || (g ? "hidden" in g && (m = g.hidden) : g = V.access(e, "fxshow", {display: l}), o && (g.hidden = !m), m && ae([e], !0), d.done(function () {
        for (i in m || ae([e]), V.remove(e, "fxshow"), h) S.style(e, i, h[i])
      })), u = at(m ? g[i] : 0, i, d), i in g || (g[i] = u.start, m && (u.end = u.start, u.start = 0))
    }], prefilter: function (e, t) {
      t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
    }
  }), S.speed = function (e, t, n) {
    var i = e && "object" == typeof e ? S.extend({}, e) : {
      complete: n || !n && t || y(e) && e,
      duration: e,
      easing: n && t || t && !y(t) && t
    };
    return S.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in S.fx.speeds ? i.duration = S.fx.speeds[i.duration] : i.duration = S.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      y(i.old) && i.old.call(this), i.queue && S.dequeue(this, i.queue)
    }, i
  }, S.fn.extend({
    fadeTo: function (e, t, n, i) {
      return this.filter(ie).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
    }, animate: function (t, e, n, i) {
      var r = S.isEmptyObject(t), o = S.speed(e, n, i), s = function () {
        var e = ut(this, S.extend({}, t), o);
        (r || V.get(this, "finish")) && e.stop(!0)
      };
      return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
    }, stop: function (r, e, o) {
      var s = function (e) {
        var t = e.stop;
        delete e.stop, t(o)
      };
      return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function () {
        var e = !0, t = null != r && r + "queueHooks", n = S.timers, i = V.get(this);
        if (t) i[t] && i[t].stop && s(i[t]); else for (t in i) i[t] && i[t].stop && it.test(t) && s(i[t]);
        for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        !e && o || S.dequeue(this, r)
      })
    }, finish: function (s) {
      return !1 !== s && (s = s || "fx"), this.each(function () {
        var e, t = V.get(this), n = t[s + "queue"], i = t[s + "queueHooks"], r = S.timers, o = n ? n.length : 0;
        for (t.finish = !0, S.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish
      })
    }
  }), S.each(["toggle", "show", "hide"], function (e, i) {
    var r = S.fn[i];
    S.fn[i] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(st(i, !0), e, t, n)
    }
  }), S.each({
    slideDown: st("show"),
    slideUp: st("hide"),
    slideToggle: st("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function (e, i) {
    S.fn[e] = function (e, t, n) {
      return this.animate(i, e, t, n)
    }
  }), S.timers = [], S.fx.tick = function () {
    var e, t = 0, n = S.timers;
    for (Ke = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || S.fx.stop(), Ke = void 0
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start()
  }, S.fx.interval = 13, S.fx.start = function () {
    Ze || (Ze = !0, rt())
  }, S.fx.stop = function () {
    Ze = null
  }, S.fx.speeds = {slow: 600, fast: 200, _default: 400}, S.fn.delay = function (i, e) {
    return i = S.fx && S.fx.speeds[i] || i, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, i);
      t.stop = function () {
        C.clearTimeout(n)
      }
    })
  }, et = E.createElement("input"), tt = E.createElement("select").appendChild(E.createElement("option")), et.type = "checkbox", v.checkOn = "" !== et.value, v.optSelected = tt.selected, (et = E.createElement("input")).value = "t", et.type = "radio", v.radioValue = "t" === et.value;
  var lt, ct = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return B(this, S.attr, e, t, 1 < arguments.length)
    }, removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e)
      })
    }
  }), S.extend({
    attr: function (e, t, n) {
      var i, r, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (r = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = S.find.attr(e, t)) ? void 0 : i)
    }, attrHooks: {
      type: {
        set: function (e, t) {
          if (!v.radioValue && "radio" === t && j(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    }, removeAttr: function (e, t) {
      var n, i = 0, r = t && t.match(q);
      if (r && 1 === e.nodeType) for (; n = r[i++];) e.removeAttribute(n)
    }
  }), lt = {
    set: function (e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var s = ct[t] || S.find.attr;
    ct[t] = function (e, t, n) {
      var i, r, o = t.toLowerCase();
      return n || (r = ct[o], ct[o] = i, i = null != s(e, t, n) ? o : null, ct[o] = r), i
    }
  });
  var ft = /^(?:input|select|textarea|button)$/i, dt = /^(?:a|area)$/i;

  function ht(e) {
    return (e.match(q) || []).join(" ")
  }

  function pt(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function mt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(q) || []
  }

  S.fn.extend({
    prop: function (e, t) {
      return B(this, S.prop, e, t, 1 < arguments.length)
    }, removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e]
      })
    }
  }), S.extend({
    prop: function (e, t, n) {
      var i, r, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, r = S.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
    }, propHooks: {
      tabIndex: {
        get: function (e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ft.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    }, propFix: {for: "htmlFor", class: "className"}
  }), v.optSelected || (S.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    }, set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this
  }), S.fn.extend({
    addClass: function (t) {
      var e, n, i, r, o, s, a, u = 0;
      if (y(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, pt(this)))
      });
      if ((e = mt(t)).length) for (; n = this[u++];) if (r = pt(n), i = 1 === n.nodeType && " " + ht(r) + " ") {
        for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
        r !== (a = ht(i)) && n.setAttribute("class", a)
      }
      return this
    }, removeClass: function (t) {
      var e, n, i, r, o, s, a, u = 0;
      if (y(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, pt(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = mt(t)).length) for (; n = this[u++];) if (r = pt(n), i = 1 === n.nodeType && " " + ht(r) + " ") {
        for (s = 0; o = e[s++];) for (; -1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
        r !== (a = ht(i)) && n.setAttribute("class", a)
      }
      return this
    }, toggleClass: function (r, t) {
      var o = typeof r, s = "string" === o || Array.isArray(r);
      return "boolean" == typeof t && s ? t ? this.addClass(r) : this.removeClass(r) : y(r) ? this.each(function (e) {
        S(this).toggleClass(r.call(this, e, pt(this), t), t)
      }) : this.each(function () {
        var e, t, n, i;
        if (s) for (t = 0, n = S(this), i = mt(r); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else void 0 !== r && "boolean" !== o || ((e = pt(this)) && V.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : V.get(this, "__className__") || ""))
      })
    }, hasClass: function (e) {
      var t, n, i = 0;
      for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && -1 < (" " + ht(pt(n)) + " ").indexOf(t)) return !0;
      return !1
    }
  });
  var gt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var i, e, r, t = this[0];
      return arguments.length ? (r = y(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = r ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + ""
        })), (i = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
      })) : t ? (i = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(gt, "") : null == e ? "" : e : void 0
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : ht(S.text(e))
        }
      }, select: {
        get: function (e) {
          var t, n, i, r = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [],
            u = s ? o + 1 : r.length;
          for (i = o < 0 ? u : s ? o : 0; i < u; i++) if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))) {
            if (t = S(n).val(), s) return t;
            a.push(t)
          }
          return a
        }, set: function (e, t) {
          for (var n, i, r = e.options, o = S.makeArray(t), s = r.length; s--;) ((i = r[s]).selected = -1 < S.inArray(S.valHooks.option.get(i), o)) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
      }
    }, v.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  }), v.focusin = "onfocusin" in C;
  var vt = /^(?:focusinfocus|focusoutblur)$/, yt = function (e) {
    e.stopPropagation()
  };
  S.extend(S.event, {
    trigger: function (e, t, n, i) {
      var r, o, s, a, u, l, c, f, d = [n || E], h = g.call(e, "type") ? e.type : e,
        p = g.call(e, "namespace") ? e.namespace.split(".") : [];
      if (o = f = s = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !vt.test(h + S.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), u = h.indexOf(":") < 0 && "on" + h, (e = e[S.expando] ? e : new S.Event(h, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[h] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!i && !c.noBubble && !x(n)) {
          for (a = c.delegateType || h, vt.test(a + h) || (o = o.parentNode); o; o = o.parentNode) d.push(o), s = o;
          s === (n.ownerDocument || E) && d.push(s.defaultView || s.parentWindow || C)
        }
        for (r = 0; (o = d[r++]) && !e.isPropagationStopped();) f = o, e.type = 1 < r ? a : c.bindType || h, (l = (V.get(o, "events") || {})[e.type] && V.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && X(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        return e.type = h, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !X(n) || u && y(n[h]) && !x(n) && ((s = n[u]) && (n[u] = null), S.event.triggered = h, e.isPropagationStopped() && f.addEventListener(h, yt), n[h](), e.isPropagationStopped() && f.removeEventListener(h, yt), S.event.triggered = void 0, s && (n[u] = s)), e.result
      }
    }, simulate: function (e, t, n) {
      var i = S.extend(new S.Event, n, {type: e, isSimulated: !0});
      S.event.trigger(i, null, t)
    }
  }), S.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this)
      })
    }, triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0)
    }
  }), v.focusin || S.each({focus: "focusin", blur: "focusout"}, function (n, i) {
    var r = function (e) {
      S.event.simulate(i, e.target, S.event.fix(e))
    };
    S.event.special[i] = {
      setup: function () {
        var e = this.ownerDocument || this, t = V.access(e, i);
        t || e.addEventListener(n, r, !0), V.access(e, i, (t || 0) + 1)
      }, teardown: function () {
        var e = this.ownerDocument || this, t = V.access(e, i) - 1;
        t ? V.access(e, i, t) : (e.removeEventListener(n, r, !0), V.remove(e, i))
      }
    }
  });
  var xt = C.location, bt = Date.now(), wt = /\?/;
  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = (new C.DOMParser).parseFromString(e, "text/xml")
    } catch (e) {
      t = void 0
    }
    return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
  };
  var Tt = /\[\]$/, Ct = /\r?\n/g, Et = /^(?:submit|button|image|reset|file)$/i,
    St = /^(?:input|select|textarea|keygen)/i;

  function At(n, e, i, r) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      i || Tt.test(n) ? r(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
    }); else if (i || "object" !== w(e)) r(n, e); else for (t in e) At(n + "[" + t + "]", e[t], i, r)
  }

  S.param = function (e, t) {
    var n, i = [], r = function (e, t) {
      var n = y(t) ? t() : t;
      i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
    };
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      r(this.name, this.value)
    }); else for (n in e) At(n, e[n], t, r);
    return i.join("&")
  }, S.fn.extend({
    serialize: function () {
      return S.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && St.test(this.nodeName) && !Et.test(e) && (this.checked || !ue.test(e))
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {name: t.name, value: e.replace(Ct, "\r\n")}
        }) : {name: t.name, value: n.replace(Ct, "\r\n")}
      }).get()
    }
  });
  var jt = /%20/g, kt = /#.*$/, Lt = /([?&])_=[^&]*/, Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Dt = /^(?:GET|HEAD)$/,
    zt = /^\/\//, _t = {}, Ot = {}, qt = "*/".concat("*"), It = E.createElement("a");

  function Ht(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n, i = 0, r = e.toLowerCase().match(q) || [];
      if (y(t)) for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
    }
  }

  function Wt(t, r, o, s) {
    var a = {}, u = t === Ot;

    function l(e) {
      var i;
      return a[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(r, o, s);
        return "string" != typeof n || u || a[n] ? u ? !(i = n) : void 0 : (r.dataTypes.unshift(n), l(n), !1)
      }), i
    }

    return l(r.dataTypes[0]) || !a["*"] && l("*")
  }

  function Pt(e, t) {
    var n, i, r = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && S.extend(!0, e, i), e
  }

  It.href = xt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: xt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": qt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
      responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
      converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML},
      flatOptions: {url: !0, context: !0}
    },
    ajaxSetup: function (e, t) {
      return t ? Pt(Pt(e, S.ajaxSettings), t) : Pt(S.ajaxSettings, e)
    },
    ajaxPrefilter: Ht(_t),
    ajaxTransport: Ht(Ot),
    ajax: function (e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var c, f, d, n, h, i, p, m, r, o, g = S.ajaxSetup({}, t), v = g.context || g,
        y = g.context && (v.nodeType || v.jquery) ? S(v) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"),
        w = g.statusCode || {}, s = {}, a = {}, u = "canceled", T = {
          readyState: 0, getResponseHeader: function (e) {
            var t;
            if (p) {
              if (!n) for (n = {}; t = Nt.exec(d);) n[t[1].toLowerCase()] = t[2];
              t = n[e.toLowerCase()]
            }
            return null == t ? null : t
          }, getAllResponseHeaders: function () {
            return p ? d : null
          }, setRequestHeader: function (e, t) {
            return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
          }, overrideMimeType: function (e) {
            return null == p && (g.mimeType = e), this
          }, statusCode: function (e) {
            var t;
            if (e) if (p) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]];
            return this
          }, abort: function (e) {
            var t = e || u;
            return c && c.abort(t), l(0, t), this
          }
        };
      if (x.promise(T), g.url = ((e || g.url || xt.href) + "").replace(zt, xt.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(q) || [""], null == g.crossDomain) {
        i = E.createElement("a");
        try {
          i.href = g.url, i.href = i.href, g.crossDomain = It.protocol + "//" + It.host != i.protocol + "//" + i.host
        } catch (e) {
          g.crossDomain = !0
        }
      }
      if (g.data && g.processData && "string" != typeof g.data && (g.data = S.param(g.data, g.traditional)), Wt(_t, g, t, T), p) return T;
      for (r in(m = S.event && g.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Dt.test(g.type), f = g.url.replace(kt, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(jt, "+")) : (o = g.url.slice(f.length), g.data && (g.processData || "string" == typeof g.data) && (f += (wt.test(f) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (f = f.replace(Lt, "$1"), o = (wt.test(f) ? "&" : "?") + "_=" + bt++ + o), g.url = f + o), g.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && T.setRequestHeader("Content-Type", g.contentType), T.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : g.accepts["*"]), g.headers) T.setRequestHeader(r, g.headers[r]);
      if (g.beforeSend && (!1 === g.beforeSend.call(v, T, g) || p)) return T.abort();
      if (u = "abort", b.add(g.complete), T.done(g.success), T.fail(g.error), c = Wt(Ot, g, t, T)) {
        if (T.readyState = 1, m && y.trigger("ajaxSend", [T, g]), p) return T;
        g.async && 0 < g.timeout && (h = C.setTimeout(function () {
          T.abort("timeout")
        }, g.timeout));
        try {
          p = !1, c.send(s, l)
        } catch (e) {
          if (p) throw e;
          l(-1, e)
        }
      } else l(-1, "No Transport");

      function l(e, t, n, i) {
        var r, o, s, a, u, l = t;
        p || (p = !0, h && C.clearTimeout(h), c = void 0, d = i || "", T.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function (e, t, n) {
          for (var i, r, o, s, a = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
          if (i) for (r in a) if (a[r] && a[r].test(i)) {
            u.unshift(r);
            break
          }
          if (u[0] in n) o = u[0]; else {
            for (r in n) {
              if (!u[0] || e.converters[r + " " + u[0]]) {
                o = r;
                break
              }
              s || (s = r)
            }
            o = o || s
          }
          if (o) return o !== u[0] && u.unshift(o), n[o]
        }(g, T, n)), a = function (e, t, n, i) {
          var r, o, s, a, u, l = {}, c = e.dataTypes.slice();
          if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
          for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (!(s = l[u + " " + o] || l["* " + o])) for (r in l) if ((a = r.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
              !0 === s ? s = l[r] : !0 !== l[r] && (o = a[0], c.unshift(a[1]));
              break
            }
            if (!0 !== s) if (s && e.throws) t = s(t); else try {
              t = s(t)
            } catch (e) {
              return {state: "parsererror", error: s ? e : "No conversion from " + u + " to " + o}
            }
          }
          return {state: "success", data: t}
        }(g, a, T, r), r ? (g.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === g.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = a.state, o = a.data, r = !(s = a.error))) : (s = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", r ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, s]), T.statusCode(w), w = void 0, m && y.trigger(r ? "ajaxSuccess" : "ajaxError", [T, g, r ? o : s]), b.fireWith(v, [T, l]), m && (y.trigger("ajaxComplete", [T, g]), --S.active || S.event.trigger("ajaxStop")))
      }

      return T
    },
    getJSON: function (e, t, n) {
      return S.get(e, t, n, "json")
    },
    getScript: function (e, t) {
      return S.get(e, void 0, t, "script")
    }
  }), S.each(["get", "post"], function (e, r) {
    S[r] = function (e, t, n, i) {
      return y(t) && (i = i || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: r,
        dataType: i,
        data: t,
        success: n
      }, S.isPlainObject(e) && e))
    }
  }), S._evalUrl = function (e) {
    return S.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
  }, S.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (y(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e
      }).append(this)), this
    }, wrapInner: function (n) {
      return y(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e))
      }) : this.each(function () {
        var e = S(this), t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n)
      })
    }, wrap: function (t) {
      var n = y(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t)
      })
    }, unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes)
      }), this
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e)
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest
    } catch (e) {
    }
  };
  var Rt = {0: 200, 1223: 204}, Mt = S.ajaxSettings.xhr();
  v.cors = !!Mt && "withCredentials" in Mt, v.ajax = Mt = !!Mt, S.ajaxTransport(function (r) {
    var o, s;
    if (v.cors || Mt && !r.crossDomain) return {
      send: function (e, t) {
        var n, i = r.xhr();
        if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields) for (n in r.xhrFields) i[n] = r.xhrFields[n];
        for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
        o = function (e) {
          return function () {
            o && (o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Rt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {binary: i.response} : {text: i.responseText}, i.getAllResponseHeaders()))
          }
        }, i.onload = o(), s = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function () {
          4 === i.readyState && C.setTimeout(function () {
            o && s()
          })
        }, o = o("abort");
        try {
          i.send(r.hasContent && r.data || null)
        } catch (e) {
          if (o) throw e
        }
      }, abort: function () {
        o && o()
      }
    }
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1)
  }), S.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /\b(?:java|ecma)script\b/},
    converters: {
      "text script": function (e) {
        return S.globalEval(e), e
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), S.ajaxTransport("script", function (n) {
    var i, r;
    if (n.crossDomain) return {
      send: function (e, t) {
        i = S("<script>").prop({charset: n.scriptCharset, src: n.url}).on("load error", r = function (e) {
          i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
        }), E.head.appendChild(i[0])
      }, abort: function () {
        r && r()
      }
    }
  });
  var Bt, Ft = [], $t = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback", jsonpCallback: function () {
      var e = Ft.pop() || S.expando + "_" + bt++;
      return this[e] = !0, e
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var i, r, o,
      s = !1 !== e.jsonp && ($t.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(e.data) && "data");
    if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace($t, "$1" + i) : !1 !== e.jsonp && (e.url += (wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
      return o || S.error(i + " was not called"), o[0]
    }, e.dataTypes[0] = "json", r = C[i], C[i] = function () {
      o = arguments
    }, n.always(function () {
      void 0 === r ? S(C).removeProp(i) : C[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Ft.push(i)), o && y(r) && r(o[0]), o = r = void 0
    }), "script"
  }), v.createHTMLDocument = ((Bt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Bt.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((i = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(i)) : t = E), o = !n && [], (r = k.exec(e)) ? [t.createElement(r[1])] : (r = ve([e], t, o), o && o.length && S(o).remove(), S.merge([], r.childNodes)));
    var i, r, o
  }, S.fn.load = function (e, t, n) {
    var i, r, o, s = this, a = e.indexOf(" ");
    return -1 < a && (i = ht(e.slice(a)), e = e.slice(0, a)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && S.ajax({
      url: e,
      type: r || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, s.html(i ? S("<div>").append(S.parseHTML(e)).find(i) : e)
    }).always(n && function (e, t) {
      s.each(function () {
        n.apply(this, o || [e.responseText, t, e])
      })
    }), this
  }, S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem
    }).length
  }, S.offset = {
    setOffset: function (e, t, n) {
      var i, r, o, s, a, u, l = S.css(e, "position"), c = S(e), f = {};
      "static" === l && (e.style.position = "relative"), a = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), r = ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (s = (i = c.position()).top, i.left) : (s = parseFloat(o) || 0, parseFloat(u) || 0), y(t) && (t = t.call(e, n, S.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : c.css(f)
    }
  }, S.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e)
      });
      var e, n, i = this[0];
      return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {top: 0, left: 0} : void 0
    }, position: function () {
      if (this[0]) {
        var e, t, n, i = this[0], r = {top: 0, left: 0};
        if ("fixed" === S.css(i, "position")) t = i.getBoundingClientRect(); else {
          for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position");) e = e.parentNode;
          e && e !== i && 1 === e.nodeType && ((r = S(e).offset()).top += S.css(e, "borderTopWidth", !0), r.left += S.css(e, "borderLeftWidth", !0))
        }
        return {top: t.top - r.top - S.css(i, "marginTop", !0), left: t.left - r.left - S.css(i, "marginLeft", !0)}
      }
    }, offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === S.css(e, "position");) e = e.offsetParent;
        return e || ye
      })
    }
  }), S.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, r) {
    var o = "pageYOffset" === r;
    S.fn[t] = function (e) {
      return B(this, function (e, t, n) {
        var i;
        if (x(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[r] : e[t];
        i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n
      }, t, e, arguments.length)
    }
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = Re(v.pixelPosition, function (e, t) {
      if (t) return t = Pe(e, n), Ie.test(t) ? S(e).position()[n] + "px" : t
    })
  }), S.each({Height: "height", Width: "width"}, function (s, a) {
    S.each({padding: "inner" + s, content: a, "": "outer" + s}, function (i, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (i || "boolean" != typeof e), r = i || (!0 === e || !0 === t ? "margin" : "border");
        return B(this, function (e, t, n) {
          var i;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? S.css(e, t, r) : S.style(e, t, n, r)
        }, a, n ? e : void 0, n)
      }
    })
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
    }
  }), S.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), S.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n)
    }, unbind: function (e, t) {
      return this.off(e, null, t)
    }, delegate: function (e, t, n, i) {
      return this.on(t, e, n, i)
    }, undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  }), S.proxy = function (e, t) {
    var n, i, r;
    if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return i = a.call(arguments, 2), (r = function () {
      return e.apply(t || this, i.concat(a.call(arguments)))
    }).guid = e.guid = e.guid || S.guid++, r
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0)
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = j, S.isFunction = y, S.isWindow = x, S.camelCase = Y, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return S
  });
  var Ut = C.jQuery, Yt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Yt), e && C.jQuery === S && (C.jQuery = Ut), S
  }, e || (C.jQuery = C.$ = S), S
}), function (t, n) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (e) {
    return n(t, e)
  }) : "object" == typeof module && module.exports ? module.exports = n(t, require("jquery")) : t.jQueryBridget = n(t, t.jQuery)
}(window, function (e, t) {
  "use strict";

  function n(l, r, c) {
    (c = c || t || e.jQuery) && (r.prototype.option || (r.prototype.option = function (e) {
      c.isPlainObject(e) && (this.options = c.extend(!0, this.options, e))
    }), c.fn[l] = function (e) {
      if ("string" != typeof e) return i = e, this.each(function (e, t) {
        var n = c.data(t, l);
        n ? (n.option(i), n._init()) : (n = new r(t, i), c.data(t, l, n))
      }), this;
      var t, o, s, a, u, i, n = f.call(arguments, 1);
      return s = n, u = "$()." + l + '("' + (o = e) + '")', (t = this).each(function (e, t) {
        var n = c.data(t, l);
        if (n) {
          var i = n[o];
          if (i && "_" != o.charAt(0)) {
            var r = i.apply(n, s);
            a = void 0 === a ? r : a
          } else d(u + " is not a valid method")
        } else d(l + " not initialized. Cannot call methods, i.e. " + u)
      }), void 0 !== a ? a : t
    }, i(c))
  }

  function i(e) {
    !e || e && e.bridget || (e.bridget = n)
  }

  var f = Array.prototype.slice, r = e.console, d = void 0 === r ? function () {
  } : function (e) {
    r.error(e)
  };
  return i(t || e.jQuery), n
}), function (e, t) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
  function e() {
  }

  var t = e.prototype;
  return t.on = function (e, t) {
    if (e && t) {
      var n = this._events = this._events || {}, i = n[e] = n[e] || [];
      return -1 == i.indexOf(t) && i.push(t), this
    }
  }, t.once = function (e, t) {
    if (e && t) {
      this.on(e, t);
      var n = this._onceEvents = this._onceEvents || {};
      return (n[e] = n[e] || {})[t] = !0, this
    }
  }, t.off = function (e, t) {
    var n = this._events && this._events[e];
    if (n && n.length) {
      var i = n.indexOf(t);
      return -1 != i && n.splice(i, 1), this
    }
  }, t.emitEvent = function (e, t) {
    var n = this._events && this._events[e];
    if (n && n.length) {
      n = n.slice(0), t = t || [];
      for (var i = this._onceEvents && this._onceEvents[e], r = 0; r < n.length; r++) {
        var o = n[r];
        i && i[o] && (this.off(e, o), delete i[o]), o.apply(this, t)
      }
      return this
    }
  }, t.allOff = function () {
    delete this._events, delete this._onceEvents
  }, e
}), function (e, t) {
  "function" == typeof define && define.amd ? define("get-size/get-size", t) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
}(window, function () {
  "use strict";

  function v(e) {
    var t = parseFloat(e);
    return -1 == e.indexOf("%") && !isNaN(t) && t
  }

  function y(e) {
    var t = getComputedStyle(e);
    return t || n("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), t
  }

  function x(e) {
    if (function () {
      if (!C) {
        C = !0;
        var e = document.createElement("div");
        e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
        var t = document.body || document.documentElement;
        t.appendChild(e);
        var n = y(e);
        b = 200 == Math.round(v(n.width)), x.isBoxSizeOuter = b, t.removeChild(e)
      }
    }(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
      var t = y(e);
      if ("none" == t.display) return function () {
        for (var e = {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0,
          outerWidth: 0,
          outerHeight: 0
        }, t = 0; t < T; t++) e[w[t]] = 0;
        return e
      }();
      var n = {};
      n.width = e.offsetWidth, n.height = e.offsetHeight;
      for (var i = n.isBorderBox = "border-box" == t.boxSizing, r = 0; r < T; r++) {
        var o = w[r], s = t[o], a = parseFloat(s);
        n[o] = isNaN(a) ? 0 : a
      }
      var u = n.paddingLeft + n.paddingRight, l = n.paddingTop + n.paddingBottom, c = n.marginLeft + n.marginRight,
        f = n.marginTop + n.marginBottom, d = n.borderLeftWidth + n.borderRightWidth,
        h = n.borderTopWidth + n.borderBottomWidth, p = i && b, m = v(t.width);
      !1 !== m && (n.width = m + (p ? 0 : u + d));
      var g = v(t.height);
      return !1 !== g && (n.height = g + (p ? 0 : l + h)), n.innerWidth = n.width - (u + d), n.innerHeight = n.height - (l + h), n.outerWidth = n.width + c, n.outerHeight = n.height + f, n
    }
  }

  var b, n = "undefined" == typeof console ? function () {
    } : function (e) {
      console.error(e)
    },
    w = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
    T = w.length, C = !1;
  return x
}), function (e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
}(window, function () {
  "use strict";
  var n = function () {
    var e = window.Element.prototype;
    if (e.matches) return "matches";
    if (e.matchesSelector) return "matchesSelector";
    for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) {
      var i = t[n] + "MatchesSelector";
      if (e[i]) return i
    }
  }();
  return function (e, t) {
    return e[n](t)
  }
}), function (t, n) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (e) {
    return n(t, e)
  }) : "object" == typeof module && module.exports ? module.exports = n(t, require("desandro-matches-selector")) : t.fizzyUIUtils = n(t, t.matchesSelector)
}(window, function (l, o) {
  var c = {
    extend: function (e, t) {
      for (var n in t) e[n] = t[n];
      return e
    }, modulo: function (e, t) {
      return (e % t + t) % t
    }
  }, t = Array.prototype.slice;
  c.makeArray = function (e) {
    return Array.isArray(e) ? e : null == e ? [] : "object" == typeof e && "number" == typeof e.length ? t.call(e) : [e]
  }, c.removeFrom = function (e, t) {
    var n = e.indexOf(t);
    -1 != n && e.splice(n, 1)
  }, c.getParent = function (e, t) {
    for (; e.parentNode && e != document.body;) if (e = e.parentNode, o(e, t)) return e
  }, c.getQueryElement = function (e) {
    return "string" == typeof e ? document.querySelector(e) : e
  }, c.handleEvent = function (e) {
    var t = "on" + e.type;
    this[t] && this[t](e)
  }, c.filterFindElements = function (e, i) {
    e = c.makeArray(e);
    var r = [];
    return e.forEach(function (e) {
      if (e instanceof HTMLElement) {
        if (!i) return void r.push(e);
        o(e, i) && r.push(e);
        for (var t = e.querySelectorAll(i), n = 0; n < t.length; n++) r.push(t[n])
      }
    }), r
  }, c.debounceMethod = function (e, t, i) {
    i = i || 100;
    var r = e.prototype[t], o = t + "Timeout";
    e.prototype[t] = function () {
      var e = this[o];
      clearTimeout(e);
      var t = arguments, n = this;
      this[o] = setTimeout(function () {
        r.apply(n, t), delete n[o]
      }, i)
    }
  }, c.docReady = function (e) {
    var t = document.readyState;
    "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
  }, c.toDashed = function (e) {
    return e.replace(/(.)([A-Z])/g, function (e, t, n) {
      return t + "-" + n
    }).toLowerCase()
  };
  var f = l.console;
  return c.htmlInit = function (a, u) {
    c.docReady(function () {
      var e = c.toDashed(u), r = "data-" + e, t = document.querySelectorAll("[" + r + "]"),
        n = document.querySelectorAll(".js-" + e), i = c.makeArray(t).concat(c.makeArray(n)), o = r + "-options",
        s = l.jQuery;
      i.forEach(function (t) {
        var e, n = t.getAttribute(r) || t.getAttribute(o);
        try {
          e = n && JSON.parse(n)
        } catch (e) {
          return void (f && f.error("Error parsing " + r + " on " + t.className + ": " + e))
        }
        var i = new a(t, e);
        s && s.data(t, u, i)
      })
    })
  }, c
}), function (e, t) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = t(e.EvEmitter, e.getSize))
}(window, function (e, t) {
  "use strict";

  function n(e, t) {
    e && (this.element = e, this.layout = t, this.position = {x: 0, y: 0}, this._create())
  }

  var i = document.documentElement.style, r = "string" == typeof i.transition ? "transition" : "WebkitTransition",
    o = "string" == typeof i.transform ? "transform" : "WebkitTransform",
    s = {WebkitTransition: "webkitTransitionEnd", transition: "transitionend"}[r], a = {
      transform: o,
      transition: r,
      transitionDuration: r + "Duration",
      transitionProperty: r + "Property",
      transitionDelay: r + "Delay"
    }, u = n.prototype = Object.create(e.prototype);
  u.constructor = n, u._create = function () {
    this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
  }, u.handleEvent = function (e) {
    var t = "on" + e.type;
    this[t] && this[t](e)
  }, u.getSize = function () {
    this.size = t(this.element)
  }, u.css = function (e) {
    var t = this.element.style;
    for (var n in e) {
      t[a[n] || n] = e[n]
    }
  }, u.getPosition = function () {
    var e = getComputedStyle(this.element), t = this.layout._getOption("originLeft"),
      n = this.layout._getOption("originTop"), i = e[t ? "left" : "right"], r = e[n ? "top" : "bottom"],
      o = parseFloat(i), s = parseFloat(r), a = this.layout.size;
    -1 != i.indexOf("%") && (o = o / 100 * a.width), -1 != r.indexOf("%") && (s = s / 100 * a.height), o = isNaN(o) ? 0 : o, s = isNaN(s) ? 0 : s, o -= t ? a.paddingLeft : a.paddingRight, s -= n ? a.paddingTop : a.paddingBottom, this.position.x = o, this.position.y = s
  }, u.layoutPosition = function () {
    var e = this.layout.size, t = {}, n = this.layout._getOption("originLeft"), i = this.layout._getOption("originTop"),
      r = n ? "paddingLeft" : "paddingRight", o = n ? "left" : "right", s = n ? "right" : "left",
      a = this.position.x + e[r];
    t[o] = this.getXValue(a), t[s] = "";
    var u = i ? "paddingTop" : "paddingBottom", l = i ? "top" : "bottom", c = i ? "bottom" : "top",
      f = this.position.y + e[u];
    t[l] = this.getYValue(f), t[c] = "", this.css(t), this.emitEvent("layout", [this])
  }, u.getXValue = function (e) {
    var t = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
  }, u.getYValue = function (e) {
    var t = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
  }, u._transitionTo = function (e, t) {
    this.getPosition();
    var n = this.position.x, i = this.position.y, r = e == this.position.x && t == this.position.y;
    if (this.setPosition(e, t), !r || this.isTransitioning) {
      var o = e - n, s = t - i, a = {};
      a.transform = this.getTranslate(o, s), this.transition({
        to: a,
        onTransitionEnd: {transform: this.layoutPosition},
        isCleaning: !0
      })
    } else this.layoutPosition()
  }, u.getTranslate = function (e, t) {
    return "translate3d(" + (e = this.layout._getOption("originLeft") ? e : -e) + "px, " + (t = this.layout._getOption("originTop") ? t : -t) + "px, 0)"
  }, u.goTo = function (e, t) {
    this.setPosition(e, t), this.layoutPosition()
  }, u.moveTo = u._transitionTo, u.setPosition = function (e, t) {
    this.position.x = parseFloat(e), this.position.y = parseFloat(t)
  }, u._nonTransition = function (e) {
    for (var t in this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd) e.onTransitionEnd[t].call(this)
  }, u.transition = function (e) {
    if (parseFloat(this.layout.options.transitionDuration)) {
      var t = this._transn;
      for (var n in e.onTransitionEnd) t.onEnd[n] = e.onTransitionEnd[n];
      for (n in e.to) t.ingProperties[n] = !0, e.isCleaning && (t.clean[n] = !0);
      if (e.from) {
        this.css(e.from);
        this.element.offsetHeight;
        null
      }
      this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
    } else this._nonTransition(e)
  };
  var l = "opacity," + o.replace(/([A-Z])/g, function (e) {
    return "-" + e.toLowerCase()
  });
  u.enableTransition = function () {
    if (!this.isTransitioning) {
      var e = this.layout.options.transitionDuration;
      e = "number" == typeof e ? e + "ms" : e, this.css({
        transitionProperty: l,
        transitionDuration: e,
        transitionDelay: this.staggerDelay || 0
      }), this.element.addEventListener(s, this, !1)
    }
  }, u.onwebkitTransitionEnd = function (e) {
    this.ontransitionend(e)
  }, u.onotransitionend = function (e) {
    this.ontransitionend(e)
  };
  var c = {"-webkit-transform": "transform"};
  u.ontransitionend = function (e) {
    if (e.target === this.element) {
      var t = this._transn, n = c[e.propertyName] || e.propertyName;
      if (delete t.ingProperties[n], function (e) {
        for (var t in e) return !1;
        return !0
      }(t.ingProperties) && this.disableTransition(), n in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[n]), n in t.onEnd) t.onEnd[n].call(this), delete t.onEnd[n];
      this.emitEvent("transitionEnd", [this])
    }
  }, u.disableTransition = function () {
    this.removeTransitionStyles(), this.element.removeEventListener(s, this, !1), this.isTransitioning = !1
  }, u._removeStyles = function (e) {
    var t = {};
    for (var n in e) t[n] = "";
    this.css(t)
  };
  var f = {transitionProperty: "", transitionDuration: "", transitionDelay: ""};
  return u.removeTransitionStyles = function () {
    this.css(f)
  }, u.stagger = function (e) {
    e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms"
  }, u.removeElem = function () {
    this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
  }, u.remove = function () {
    return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
      this.removeElem()
    }), void this.hide()) : void this.removeElem()
  }, u.reveal = function () {
    delete this.isHidden, this.css({display: ""});
    var e = this.layout.options, t = {};
    t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
      from: e.hiddenStyle,
      to: e.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: t
    })
  }, u.onRevealTransitionEnd = function () {
    this.isHidden || this.emitEvent("reveal")
  }, u.getHideRevealTransitionEndProperty = function (e) {
    var t = this.layout.options[e];
    if (t.opacity) return "opacity";
    for (var n in t) return n
  }, u.hide = function () {
    this.isHidden = !0, this.css({display: ""});
    var e = this.layout.options, t = {};
    t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
      from: e.visibleStyle,
      to: e.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: t
    })
  }, u.onHideTransitionEnd = function () {
    this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
  }, u.destroy = function () {
    this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
  }, n
}), function (r, o) {
  "use strict";
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (e, t, n, i) {
    return o(r, e, t, n, i)
  }) : "object" == typeof module && module.exports ? module.exports = o(r, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : r.Outlayer = o(r, r.EvEmitter, r.getSize, r.fizzyUIUtils, r.Outlayer.Item)
}(window, function (e, t, r, o, i) {
  "use strict";

  function s(e, t) {
    var n = o.getQueryElement(e);
    if (n) {
      this.element = n, l && (this.$element = l(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(t);
      var i = ++c;
      this.element.outlayerGUID = i, (f[i] = this)._create(), this._getOption("initLayout") && this.layout()
    } else u && u.error("Bad element for " + this.constructor.namespace + ": " + (n || e))
  }

  function a(e) {
    function t() {
      e.apply(this, arguments)
    }

    return (t.prototype = Object.create(e.prototype)).constructor = t
  }

  var u = e.console, l = e.jQuery, n = function () {
  }, c = 0, f = {};
  s.namespace = "outlayer", s.Item = i, s.defaults = {
    containerStyle: {position: "relative"},
    initLayout: !0,
    originLeft: !0,
    originTop: !0,
    resize: !0,
    resizeContainer: !0,
    transitionDuration: "0.4s",
    hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
    visibleStyle: {opacity: 1, transform: "scale(1)"}
  };
  var d = s.prototype;
  o.extend(d, t.prototype), d.option = function (e) {
    o.extend(this.options, e)
  }, d._getOption = function (e) {
    var t = this.constructor.compatOptions[e];
    return t && void 0 !== this.options[t] ? this.options[t] : this.options[e]
  }, s.compatOptions = {
    initLayout: "isInitLayout",
    horizontal: "isHorizontal",
    layoutInstant: "isLayoutInstant",
    originLeft: "isOriginLeft",
    originTop: "isOriginTop",
    resize: "isResizeBound",
    resizeContainer: "isResizingContainer"
  }, d._create = function () {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
  }, d.reloadItems = function () {
    this.items = this._itemize(this.element.children)
  }, d._itemize = function (e) {
    for (var t = this._filterFindItemElements(e), n = this.constructor.Item, i = [], r = 0; r < t.length; r++) {
      var o = new n(t[r], this);
      i.push(o)
    }
    return i
  }, d._filterFindItemElements = function (e) {
    return o.filterFindElements(e, this.options.itemSelector)
  }, d.getItemElements = function () {
    return this.items.map(function (e) {
      return e.element
    })
  }, d.layout = function () {
    this._resetLayout(), this._manageStamps();
    var e = this._getOption("layoutInstant"), t = void 0 !== e ? e : !this._isLayoutInited;
    this.layoutItems(this.items, t), this._isLayoutInited = !0
  }, d._init = d.layout, d._resetLayout = function () {
    this.getSize()
  }, d.getSize = function () {
    this.size = r(this.element)
  }, d._getMeasurement = function (e, t) {
    var n, i = this.options[e];
    this[e] = i ? ("string" == typeof i ? n = this.element.querySelector(i) : i instanceof HTMLElement && (n = i), n ? r(n)[t] : i) : 0
  }, d.layoutItems = function (e, t) {
    e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
  }, d._getItemsForLayout = function (e) {
    return e.filter(function (e) {
      return !e.isIgnored
    })
  }, d._layoutItems = function (e, n) {
    if (this._emitCompleteOnItems("layout", e), e && e.length) {
      var i = [];
      e.forEach(function (e) {
        var t = this._getItemLayoutPosition(e);
        t.item = e, t.isInstant = n || e.isLayoutInstant, i.push(t)
      }, this), this._processLayoutQueue(i)
    }
  }, d._getItemLayoutPosition = function () {
    return {x: 0, y: 0}
  }, d._processLayoutQueue = function (e) {
    this.updateStagger(), e.forEach(function (e, t) {
      this._positionItem(e.item, e.x, e.y, e.isInstant, t)
    }, this)
  }, d.updateStagger = function () {
    var e = this.options.stagger;
    return null == e ? void (this.stagger = 0) : (this.stagger = function (e) {
      if ("number" == typeof e) return e;
      var t = e.match(/(^\d*\.?\d*)(\w*)/), n = t && t[1], i = t && t[2];
      return n.length ? (n = parseFloat(n)) * (h[i] || 1) : 0
    }(e), this.stagger)
  }, d._positionItem = function (e, t, n, i, r) {
    i ? e.goTo(t, n) : (e.stagger(r * this.stagger), e.moveTo(t, n))
  }, d._postLayout = function () {
    this.resizeContainer()
  }, d.resizeContainer = function () {
    if (this._getOption("resizeContainer")) {
      var e = this._getContainerSize();
      e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
    }
  }, d._getContainerSize = n, d._setContainerMeasure = function (e, t) {
    if (void 0 !== e) {
      var n = this.size;
      n.isBorderBox && (e += t ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
    }
  }, d._emitCompleteOnItems = function (t, e) {
    function n() {
      r.dispatchEvent(t + "Complete", null, [e])
    }

    function i() {
      ++s == o && n()
    }

    var r = this, o = e.length;
    if (e && o) {
      var s = 0;
      e.forEach(function (e) {
        e.once(t, i)
      })
    } else n()
  }, d.dispatchEvent = function (e, t, n) {
    var i = t ? [t].concat(n) : n;
    if (this.emitEvent(e, i), l) if (this.$element = this.$element || l(this.element), t) {
      var r = l.Event(t);
      r.type = e, this.$element.trigger(r, n)
    } else this.$element.trigger(e, n)
  }, d.ignore = function (e) {
    var t = this.getItem(e);
    t && (t.isIgnored = !0)
  }, d.unignore = function (e) {
    var t = this.getItem(e);
    t && delete t.isIgnored
  }, d.stamp = function (e) {
    (e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
  }, d.unstamp = function (e) {
    (e = this._find(e)) && e.forEach(function (e) {
      o.removeFrom(this.stamps, e), this.unignore(e)
    }, this)
  }, d._find = function (e) {
    return e ? ("string" == typeof e && (e = this.element.querySelectorAll(e)), e = o.makeArray(e)) : void 0
  }, d._manageStamps = function () {
    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
  }, d._getBoundingRect = function () {
    var e = this.element.getBoundingClientRect(), t = this.size;
    this._boundingRect = {
      left: e.left + t.paddingLeft + t.borderLeftWidth,
      top: e.top + t.paddingTop + t.borderTopWidth,
      right: e.right - (t.paddingRight + t.borderRightWidth),
      bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
    }
  }, d._manageStamp = n, d._getElementOffset = function (e) {
    var t = e.getBoundingClientRect(), n = this._boundingRect, i = r(e);
    return {
      left: t.left - n.left - i.marginLeft,
      top: t.top - n.top - i.marginTop,
      right: n.right - t.right - i.marginRight,
      bottom: n.bottom - t.bottom - i.marginBottom
    }
  }, d.handleEvent = o.handleEvent, d.bindResize = function () {
    e.addEventListener("resize", this), this.isResizeBound = !0
  }, d.unbindResize = function () {
    e.removeEventListener("resize", this), this.isResizeBound = !1
  }, d.onresize = function () {
    this.resize()
  }, o.debounceMethod(s, "onresize", 100), d.resize = function () {
    this.isResizeBound && this.needsResizeLayout() && this.layout()
  }, d.needsResizeLayout = function () {
    var e = r(this.element);
    return this.size && e && e.innerWidth !== this.size.innerWidth
  }, d.addItems = function (e) {
    var t = this._itemize(e);
    return t.length && (this.items = this.items.concat(t)), t
  }, d.appended = function (e) {
    var t = this.addItems(e);
    t.length && (this.layoutItems(t, !0), this.reveal(t))
  }, d.prepended = function (e) {
    var t = this._itemize(e);
    if (t.length) {
      var n = this.items.slice(0);
      this.items = t.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(n)
    }
  }, d.reveal = function (e) {
    if (this._emitCompleteOnItems("reveal", e), e && e.length) {
      var n = this.updateStagger();
      e.forEach(function (e, t) {
        e.stagger(t * n), e.reveal()
      })
    }
  }, d.hide = function (e) {
    if (this._emitCompleteOnItems("hide", e), e && e.length) {
      var n = this.updateStagger();
      e.forEach(function (e, t) {
        e.stagger(t * n), e.hide()
      })
    }
  }, d.revealItemElements = function (e) {
    var t = this.getItems(e);
    this.reveal(t)
  }, d.hideItemElements = function (e) {
    var t = this.getItems(e);
    this.hide(t)
  }, d.getItem = function (e) {
    for (var t = 0; t < this.items.length; t++) {
      var n = this.items[t];
      if (n.element == e) return n
    }
  }, d.getItems = function (e) {
    e = o.makeArray(e);
    var n = [];
    return e.forEach(function (e) {
      var t = this.getItem(e);
      t && n.push(t)
    }, this), n
  }, d.remove = function (e) {
    var t = this.getItems(e);
    this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function (e) {
      e.remove(), o.removeFrom(this.items, e)
    }, this)
  }, d.destroy = function () {
    var e = this.element.style;
    e.height = "", e.position = "", e.width = "", this.items.forEach(function (e) {
      e.destroy()
    }), this.unbindResize();
    var t = this.element.outlayerGUID;
    delete f[t], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
  }, s.data = function (e) {
    var t = (e = o.getQueryElement(e)) && e.outlayerGUID;
    return t && f[t]
  }, s.create = function (e, t) {
    var n = a(s);
    return n.defaults = o.extend({}, s.defaults), o.extend(n.defaults, t), n.compatOptions = o.extend({}, s.compatOptions), n.namespace = e, n.data = s.data, n.Item = a(i), o.htmlInit(n, e), l && l.bridget && l.bridget(e, n), n
  };
  var h = {ms: 1, s: 1e3};
  return s.Item = i, s
}), function (e, t) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize)
}(window, function (e, l) {
  var t = e.create("masonry");
  t.compatOptions.fitWidth = "isFitWidth";
  var n = t.prototype;
  return n._resetLayout = function () {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
    for (var e = 0; e < this.cols; e++) this.colYs.push(0);
    this.maxY = 0, this.horizontalColIndex = 0
  }, n.measureColumns = function () {
    if (this.getContainerWidth(), !this.columnWidth) {
      var e = this.items[0], t = e && e.element;
      this.columnWidth = t && l(t).outerWidth || this.containerWidth
    }
    var n = this.columnWidth += this.gutter, i = this.containerWidth + this.gutter, r = i / n, o = n - i % n;
    r = Math[o && o < 1 ? "round" : "floor"](r), this.cols = Math.max(r, 1)
  }, n.getContainerWidth = function () {
    var e = this._getOption("fitWidth") ? this.element.parentNode : this.element, t = l(e);
    this.containerWidth = t && t.innerWidth
  }, n._getItemLayoutPosition = function (e) {
    e.getSize();
    var t = e.size.outerWidth % this.columnWidth,
      n = Math[t && t < 1 ? "round" : "ceil"](e.size.outerWidth / this.columnWidth);
    n = Math.min(n, this.cols);
    for (var i = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](n, e), r = {
      x: this.columnWidth * i.col,
      y: i.y
    }, o = i.y + e.size.outerHeight, s = n + i.col, a = i.col; a < s; a++) this.colYs[a] = o;
    return r
  }, n._getTopColPosition = function (e) {
    var t = this._getTopColGroup(e), n = Math.min.apply(Math, t);
    return {col: t.indexOf(n), y: n}
  }, n._getTopColGroup = function (e) {
    if (e < 2) return this.colYs;
    for (var t = [], n = this.cols + 1 - e, i = 0; i < n; i++) t[i] = this._getColGroupY(i, e);
    return t
  }, n._getColGroupY = function (e, t) {
    if (t < 2) return this.colYs[e];
    var n = this.colYs.slice(e, e + t);
    return Math.max.apply(Math, n)
  }, n._getHorizontalColPosition = function (e, t) {
    var n = this.horizontalColIndex % this.cols;
    n = 1 < e && n + e > this.cols ? 0 : n;
    var i = t.size.outerWidth && t.size.outerHeight;
    return this.horizontalColIndex = i ? n + e : this.horizontalColIndex, {col: n, y: this._getColGroupY(n, e)}
  }, n._manageStamp = function (e) {
    var t = l(e), n = this._getElementOffset(e), i = this._getOption("originLeft") ? n.left : n.right,
      r = i + t.outerWidth, o = Math.floor(i / this.columnWidth);
    o = Math.max(0, o);
    var s = Math.floor(r / this.columnWidth);
    s -= r % this.columnWidth ? 0 : 1, s = Math.min(this.cols - 1, s);
    for (var a = (this._getOption("originTop") ? n.top : n.bottom) + t.outerHeight, u = o; u <= s; u++) this.colYs[u] = Math.max(a, this.colYs[u])
  }, n._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);
    var e = {height: this.maxY};
    return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e
  }, n._getContainerFitWidth = function () {
    for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
    return (this.cols - e) * this.columnWidth - this.gutter
  }, n.needsResizeLayout = function () {
    var e = this.containerWidth;
    return this.getContainerWidth(), e != this.containerWidth
  }, t
}), function (e, t) {
  "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ResizeSensor = t()
}("undefined" != typeof window ? window : this, function () {
  if ("undefined" == typeof window) return null;
  var t = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(),
    T = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || function (e) {
      return t.setTimeout(e, 20)
    };

  function r(e, t) {
    var n = Object.prototype.toString.call(e),
      i = "[object Array]" === n || "[object NodeList]" === n || "[object HTMLCollection]" === n || "[object Object]" === n || "undefined" != typeof jQuery && e instanceof jQuery || "undefined" != typeof Elements && e instanceof Elements,
      r = 0, o = e.length;
    if (i) for (; r < o; r++) t(e[r]); else t(e)
  }

  function C(e) {
    if (!e.getBoundingClientRect) return {width: e.offsetWidth, height: e.offsetHeight};
    var t = e.getBoundingClientRect();
    return {width: Math.round(t.width), height: Math.round(t.height)}
  }

  function E(t, n) {
    Object.keys(n).forEach(function (e) {
      t.style[e] = n[e]
    })
  }

  var o = function (t, n) {
    function w() {
      var n, i, r = [];
      this.add = function (e) {
        r.push(e)
      }, this.call = function (e) {
        for (n = 0, i = r.length; n < i; n++) r[n].call(this, e)
      }, this.remove = function (e) {
        var t = [];
        for (n = 0, i = r.length; n < i; n++) r[n] !== e && t.push(r[n]);
        r = t
      }, this.length = function () {
        return r.length
      }
    }

    function i(n, e) {
      if (n) if (n.resizedAttached) n.resizedAttached.add(e); else {
        n.resizedAttached = new w, n.resizedAttached.add(e), n.resizeSensor = document.createElement("div"), n.resizeSensor.dir = "ltr", n.resizeSensor.className = "resize-sensor";
        var t = {
          pointerEvents: "none",
          position: "absolute",
          left: "0px",
          top: "0px",
          right: "0px",
          bottom: "0px",
          overflow: "hidden",
          zIndex: "-1",
          visibility: "hidden",
          maxWidth: "100%"
        }, i = {position: "absolute", left: "0px", top: "0px", transition: "0s"};
        E(n.resizeSensor, t);
        var r = document.createElement("div");
        r.className = "resize-sensor-expand", E(r, t);
        var o = document.createElement("div");
        E(o, i), r.appendChild(o);
        var s = document.createElement("div");
        s.className = "resize-sensor-shrink", E(s, t);
        var a = document.createElement("div");
        E(a, i), E(a, {
          width: "200%",
          height: "200%"
        }), s.appendChild(a), n.resizeSensor.appendChild(r), n.resizeSensor.appendChild(s), n.appendChild(n.resizeSensor);
        var u, l, c = window.getComputedStyle(n), f = c ? c.getPropertyValue("position") : null;
        "absolute" !== f && "relative" !== f && "fixed" !== f && (n.style.position = "relative");
        var d = C(n), h = 0, p = 0, m = !0, g = 0, v = function () {
          if (m) {
            if (0 === n.offsetWidth && 0 === n.offsetHeight) return void (g || (g = T(function () {
              g = 0, v()
            })));
            m = !1
          }
          var e, t;
          e = n.offsetWidth, t = n.offsetHeight, o.style.width = e + 10 + "px", o.style.height = t + 10 + "px", r.scrollLeft = e + 10, r.scrollTop = t + 10, s.scrollLeft = e + 10, s.scrollTop = t + 10
        };
        n.resizeSensor.resetSensor = v;
        var y = function () {
          l = 0, u && (h = d.width, p = d.height, n.resizedAttached && n.resizedAttached.call(d))
        }, x = function () {
          d = C(n), (u = d.width !== h || d.height !== p) && !l && (l = T(y)), v()
        }, b = function (e, t, n) {
          e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n)
        };
        b(r, "scroll", x), b(s, "scroll", x), T(v)
      }
    }

    r(t, function (e) {
      i(e, n)
    }), this.detach = function (e) {
      o.detach(t, e)
    }, this.reset = function () {
      t.resizeSensor.resetSensor()
    }
  };
  if (o.reset = function (e) {
    r(e, function (e) {
      e.resizeSensor.resetSensor()
    })
  }, o.detach = function (e, t) {
    r(e, function (e) {
      e && (e.resizedAttached && "function" == typeof t && (e.resizedAttached.remove(t), e.resizedAttached.length()) || e.resizeSensor && (e.contains(e.resizeSensor) && e.removeChild(e.resizeSensor), delete e.resizeSensor, delete e.resizedAttached))
    })
  }, "undefined" != typeof MutationObserver) {
    var n = new MutationObserver(function (e) {
      for (var t in e) if (e.hasOwnProperty(t)) for (var n = e[t].addedNodes, i = 0; i < n.length; i++) n[i].resizeSensor && o.reset(n[i])
    });
    document.addEventListener("DOMContentLoaded", function (e) {
      n.observe(document.body, {childList: !0, subtree: !0})
    })
  }
  return o
});




$(function () {

  // get cookie using jQuery
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      let cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        let cookie = jQuery.trim(cookies[i]);
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
  }

  // Setting the token on the AJAX request
  $.ajaxSetup({
    beforeSend: function (xhr, settings) {
      if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
        xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
      }
    }
  });

});