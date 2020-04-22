function insertAtCursor(e, t) {
  var n = e.scrollTop, i = document.documentElement.scrollTop;
  if (document.selection) {
    e.focus();
    var a = document.selection.createRange();
    a.text = t, a.select()
  } else if (e.selectionStart || "0" == e.selectionStart) {
    var o = e.selectionStart, r = e.selectionEnd;
    e.value = e.value.substring(0, o) + t + e.value.substring(r, e.value.length), e.focus(), e.selectionStart = o + t.length, e.selectionEnd = o + t.length
  } else e.value += t, e.focus();
  e.scrollTop = n, document.documentElement.scrollTop = i
}

(function () {
  var O;
  (O = jQuery).bigfoot = function (e) {
    var t, n, d, i, r, y, a, o, s, _, l, c, u, p, m, b, E, f, g, S, h, v, T, w, C, x, A;
    return s = {
      actionOriginalFN: "hide",
      activateCallback: function () {
      },
      activateOnHover: !1,
      allowMultipleFN: !1,
      anchorPattern: /(fn|footnote|note)[:\-_\d]/gi,
      anchorParentTagname: "sup",
      breakpoints: {},
      deleteOnUnhover: !1,
      footnoteParentClass: "footnote",
      footnoteTagname: "li",
      hoverDelay: 250,
      numberResetSelector: d = void 0,
      popoverDeleteDelay: 300,
      popoverCreateDelay: 100,
      positionContent: !0,
      preventPageScroll: !0,
      scope: !1,
      useFootnoteOnlyOnce: !0,
      contentMarkup: '<aside class="bigfoot-footnote is-positioned-bottom" data-footnote-number="{{FOOTNOTENUM}}" data-footnote-identifier="{{FOOTNOTEID}}" alt="Footnote {{FOOTNOTENUM}}"> <div class="bigfoot-footnote__wrapper"> <div class="bigfoot-footnote__content"> {{FOOTNOTECONTENT}} </div></div> <div class="bigfoot-footnote__tooltip"></div> </aside>',
      buttonMarkup: '<div class=\'bigfoot-footnote__container\'> <button class="bigfoot-footnote__button" id="{{SUP:data-footnote-backlink-ref}}" data-footnote-number="{{FOOTNOTENUM}}" data-footnote-identifier="{{FOOTNOTEID}}" alt="See Footnote {{FOOTNOTENUM}}" rel="footnote" data-bigfoot-footnote="{{FOOTNOTECONTENT}}"> <svg class="bigfoot-footnote__button__circle" viewbox="0 0 6 6" preserveAspectRatio="xMinYMin"><circle r="3" cx="3" cy="3" fill="white"></circle></svg> <svg class="bigfoot-footnote__button__circle" viewbox="0 0 6 6" preserveAspectRatio="xMinYMin"><circle r="3" cx="3" cy="3" fill="white"></circle></svg> <svg class="bigfoot-footnote__button__circle" viewbox="0 0 6 6" preserveAspectRatio="xMinYMin"><circle r="3" cx="3" cy="3" fill="white"></circle></svg> </button></div>'
    }, T = O.extend(s, e), m = {}, c = function () {
      var e, t, n, i, a, o, r, s, l, c, u, d, p, f, g, h, m, b, v;
      for (c = T.scope ? T.scope + ' a[href*="#"]' : 'a[href*="#"]', n = O(c).filter(function () {
        var e, t;
        return "null" !== (t = (e = O(this)).attr("rel")) && null != t || (t = ""), ("" + e.attr("href") + t).match(T.anchorPattern) && e.closest("[class*=" + T.footnoteParentClass + "]:not(a):not(" + T.anchorParentTagname + ")").length < 1
      }), g = [], s = [], y(n, p = []), O(p).each(function () {
        var e, t;
        if (t = O(this).data("footnote-ref").replace(/[:.+~*\]\[]/g, "\\$&"), T.useFootnoteOnlyOnce && (t += ":not(.footnote-processed)"), 0 < (e = O(t).closest(T.footnoteTagname)).length) return g.push(e.first().addClass("footnote-processed")), s.push(this)
      }), d = (t = O("[data-footnote-identifier]:last")).length < 1 ? 0 : +t.data("footnote-identifier"), v = [], h = m = 0, b = g.length; 0 <= b ? m < b : b < m; h = 0 <= b ? ++m : --m) switch (u = (u = E(O(g[h]).html().trim(), O(s[h]).data("footnote-backlink-ref"))).replace(/"/g, "&quot;").replace(/&lt;/g, "&ltsym;").replace(/&gt;/g, "&gtsym;"), d += 1, l = "", o = O(s[h]), r = O(g[h]), null != T.numberResetSelector ? ((e = o.closest(T.numberResetSelector)).is(i) ? f += 1 : f = 1, i = e) : f = d, 0 !== u.indexOf("<") && (u = "<p>" + u + "</p>"), l = T.buttonMarkup.replace(/\{\{FOOTNOTENUM\}\}/g, f).replace(/\{\{FOOTNOTEID\}\}/g, d).replace(/\{\{FOOTNOTECONTENT\}\}/g, u), l = S(l, "SUP", o), l = S(l, "FN", r), O(l).insertBefore(o), a = r.parent(), T.actionOriginalFN.toLowerCase()) {
        case"hide":
          o.addClass("footnote-print-only"), r.addClass("footnote-print-only"), v.push(_(a));
          break;
        case"delete":
          o.remove(), r.remove(), v.push(_(a));
          break;
        default:
          v.push(o.addClass("footnote-print-only"))
      }
      return v
    }, y = function (e, n) {
      var i, a, o;
      null == n && (n = []), o = a = i = void 0, e.each(function () {
        var e, t;
        return t = O(this), a = "#" + t.attr("href").split("#")[1], i = t.closest(T.anchorParentTagname), e = t.find(T.anchorParentTagname), 0 < i.length ? (o = (i.attr("id") || "") + (t.attr("id") || ""), n.push(i.attr({
          "data-footnote-backlink-ref": o,
          "data-footnote-ref": a
        }))) : (o = 0 < e.length ? (e.attr("id") || "") + (t.attr("id") || "") : t.attr("id") || "", n.push(t.attr({
          "data-footnote-backlink-ref": o,
          "data-footnote-ref": a
        })))
      })
    }, _ = function (e) {
      var t;
      return t = void 0, e.is(":empty") || 0 === e.children(":not(.footnote-print-only)").length ? (t = e.parent(), "delete" === T.actionOriginalFN.toLowerCase() ? e.remove() : e.addClass("footnote-print-only"), _(t)) : e.children(":not(.footnote-print-only)").length === e.children("hr:not(.footnote-print-only)").length ? (t = e.parent(), "delete" === T.actionOriginalFN.toLowerCase() ? e.remove() : (e.children("hr").addClass("footnote-print-only"), e.addClass("footnote-print-only")), _(t)) : void 0
    }, E = function (e, t) {
      var n;
      return 0 <= t.indexOf(" ") && (t = t.trim().replace(/\s+/g, "|").replace(/(.*)/g, "($1)")), n = new RegExp("(\\s|&nbsp;)*<\\s*a[^#<]*#" + t + "[^>]*>(.*?)<\\s*/\\s*a>", "g"), e.replace(n, "").replace("[]", "")
    }, S = function (e, t, n) {
      var i, a, o;
      for (o = i = void 0, i = (a = new RegExp("\\{\\{" + t + ":([^\\}]*)\\}\\}", "g")).exec(e); i;) i[1] && (o = n.attr(i[1]) || "", e = e.replace("{{" + t + ":" + i[1] + "}}", o)), i = a.exec(e);
      return e
    }, i = function (e) {
      var t, n;
      if (T.activateOnHover) {
        if (n = '[data-footnote-identifier="' + (t = O(e.target).closest(".bigfoot-footnote__button")).attr("data-footnote-identifier") + '"]', t.hasClass("is-active")) return;
        t.addClass("is-hover-instantiated"), T.allowMultipleFN || g(".bigfoot-footnote:not(" + n + ")"), o(".bigfoot-footnote__button" + n).addClass("is-hover-instantiated")
      }
    }, w = function (e) {
      var t, n, i;
      t = (i = O(e.target)).closest(".bigfoot-footnote__button"), n = i.closest(".bigfoot-footnote"), 0 < t.length ? (e.preventDefault(), a(t)) : n.length < 1 && 0 < O(".bigfoot-footnote").length && g()
    }, a = function (e) {
      var t;
      e.blur(), t = 'data-footnote-identifier="' + e.attr("data-footnote-identifier") + '"', e.hasClass("changing") || (e.hasClass("is-active") ? T.allowMultipleFN ? g(".bigfoot-footnote[" + t + "]") : g() : (e.addClass("changing"), setTimeout(function () {
        return e.removeClass("changing")
      }, T.popoverCreateDelay), o(".bigfoot-footnote__button[" + t + "]"), e.addClass("is-click-instantiated"), T.allowMultipleFN || g(".bigfoot-footnote:not([" + t + "])")))
    }, o = function (e) {
      var a, o;
      return a = void 0, a = "string" != typeof e && T.allowMultipleFN ? e : "string" != typeof e ? e.first() : T.allowMultipleFN ? O(e).closest(".bigfoot-footnote__button") : O(e + ":first").closest(".bigfoot-footnote__button"), o = O(), a.each(function () {
        var e, t, n, i;
        n = O(this), i = void 0;
        try {
          return i = T.contentMarkup.replace(/\{\{FOOTNOTENUM\}\}/g, n.attr("data-footnote-number")).replace(/\{\{FOOTNOTEID\}\}/g, n.attr("data-footnote-identifier")).replace(/\{\{FOOTNOTECONTENT\}\}/g, n.attr("data-bigfoot-footnote")).replace(/\&gtsym\;/g, "&gt;").replace(/\&ltsym\;/g, "&lt;"), i = S(i, "BUTTON", n)
        } finally {
          e = O(i);
          try {
            T.activateCallback(e, n)
          } catch (e) {
          }
          e.insertAfter(a), m[n.attr("data-footnote-identifier")] = "init", e.attr("bigfoot-max-width", r(e.css("max-width"), e)), e.css("max-width", 1e4), t = e.find(".bigfoot-footnote__content"), e.attr("data-bigfoot-max-height", r(t.css("max-height"), t)), h(), n.addClass("is-active"), e.find(".bigfoot-footnote__content").bindScrollHandler(), o = o.add(e)
        }
      }), setTimeout(function () {
        return o.addClass("is-active")
      }, T.popoverCreateDelay), o
    }, n = function () {
      var e, t;
      return (e = document.createElement("div")).style.cssText = "display:inline-block;padding:0;line-height:1;position:absolute;visibility:hidden;font-size:1em;", e.appendChild(document.createElement("M")), document.body.appendChild(e), t = e.offsetHeight, document.body.removeChild(e), t
    }, r = function (e, t) {
      return "none" === e ? e = 1e4 : 0 <= e.indexOf("rem") ? e = parseFloat(e) * n() : 0 <= e.indexOf("em") ? e = parseFloat(e) * parseFloat(t.css("font-size")) : 0 <= e.indexOf("px") ? (e = parseFloat(e)) <= 60 && (e /= parseFloat(t.parent().css("width"))) : 0 <= e.indexOf("%") && (e = parseFloat(e) / 100), e
    }, O.fn.bindScrollHandler = function () {
      return T.preventPageScroll && O(this).on("DOMMouseScroll mousewheel", function (e) {
        var t, n, i, a, o, r, s, l;
        if (s = (n = O(this)).scrollTop(), r = n[0].scrollHeight, a = parseInt(n.css("height")), t = n.closest(".bigfoot-footnote"), 0 < n.scrollTop() && n.scrollTop() < 10 && t.addClass("is-scrollable"), t.hasClass("is-scrollable")) return o = function () {
          return e.stopPropagation(), e.preventDefault(), e.returnValue = !1
        }, !(l = 0 < (i = "DOMMouseScroll" === e.type ? -40 * e.originalEvent.detail : e.originalEvent.wheelDelta)) && r - a - s < -i ? (n.scrollTop(r), t.addClass("is-fully-scrolled"), o()) : l && s < i ? (n.scrollTop(0), t.removeClass("is-fully-scrolled"), o()) : t.removeClass("is-fully-scrolled")
      }), O(this)
    }, C = function (e) {
      if (T.deleteOnUnhover && T.activateOnHover) return setTimeout(function () {
        if (O(e.target).closest(".bigfoot-footnote, .bigfoot-footnote__button"), O(".bigfoot-footnote__button:hover, .bigfoot-footnote:hover").length < 1) return g()
      }, T.hoverDelay)
    }, l = function (e) {
      if (27 === e.keyCode) return g()
    }, g = function (e, t) {
      var n, i, a, o;
      return null == e && (e = ".bigfoot-footnote"), null == t && (t = T.popoverDeleteDelay), n = O(), a = i = o = void 0, O(e).each(function () {
        if (a = O(this), o = a.attr("data-footnote-identifier"), !(i = O('.bigfoot-footnote__button[data-footnote-identifier="' + o + '"]')).hasClass("changing")) return n = n.add(i), i.removeClass("is-active is-hover-instantiated is-click-instantiated").addClass("changing"), a.removeClass("is-active").addClass("disapearing"), setTimeout(function () {
          return a.remove(), delete m[o], i.removeClass("changing")
        }, t)
      }), n
    }, h = function (e) {
      var h;
      T.positionContent && (h = e ? e.type : "resize", O(".bigfoot-footnote").each(function () {
        var e, t, n, i, a, o, r, s, l, c, u, d, p, f, g;
        if (i = (n = O(this)).attr("data-footnote-identifier"), n.find(".bigfoot-footnote__content"), e = n.siblings(".bigfoot-footnote__button"), d = v(e), o = parseFloat(n.css("margin-top")), r = +n.attr("data-bigfoot-max-height"), p = 2 * o + n.outerHeight(), s = 1e4, u = d.bottomRoom < p && d.topRoom > d.bottomRoom, a = m[i], s = u ? ("top" !== a && (m[i] = "top", n.addClass("is-positioned-top").removeClass("is-positioned-bottom"), n.css("transform-origin", 100 * d.leftRelative + "% 100%")), d.topRoom - o - 15) : ("bottom" === a && "init" !== a || (m[i] = "bottom", n.removeClass("is-positioned-top").addClass("is-positioned-bottom"), n.css("transform-origin", 100 * d.leftRelative + "% 0%")), d.bottomRoom - o - 15), n.find(".bigfoot-footnote__content").css({"max-height": Math.min(s, r) + "px"}), "resize" === h && (c = parseFloat(n.attr("bigfoot-max-width")), t = n.find(".bigfoot-footnote__wrapper"), (l = c) <= 1 && (g = 1e4, T.maxWidthRelativeTo && 0 < (f = O(T.maxWidthRelativeTo)).length && (g = f.outerWidth()), l = Math.min(window.innerWidth, g) * c), l = Math.min(l, n.find(".bigfoot-footnote__content").outerWidth() + 1), t.css("max-width", l + "px"), n.css({left: -d.leftRelative * l + parseFloat(e.css("margin-left")) + e.outerWidth() / 2 + "px"}), b(n, d.leftRelative)), parseInt(n.outerHeight()) < n.find(".bigfoot-footnote__content")[0].scrollHeight) return n.addClass("is-scrollable")
      }))
    }, b = function (e, t) {
      var n;
      null == t && (t = .5), 0 < (n = e.find(".bigfoot-footnote__tooltip")).length && n.css("left", 100 * t + "%")
    }, v = function (e) {
      var t, n, i, a, o, r;
      return n = parseFloat(e.css("margin-left")), i = parseFloat(e.outerWidth()) - n, t = parseFloat(e.outerHeight()), r = A(), o = e.offset().top - r.scrollY + t / 2, a = e.offset().left - r.scrollX + i / 2, {
        topRoom: o,
        bottomRoom: r.height - o,
        leftRoom: a,
        rightRoom: r.width - a,
        leftRelative: a / r.width,
        topRelative: o / r.height
      }
    }, A = function () {
      var e;
      return e = O(window), {
        width: window.innerWidth,
        height: window.innerHeight,
        scrollX: e.scrollLeft(),
        scrollY: e.scrollTop()
      }
    }, t = function (e, t, n, i, a) {
      var o, r, s, l, c, u;
      return null == i && (i = T.popoverDeleteDelay), null == a && (a = !0), u = r = l = void 0, (l = "string" == typeof e ? (c = (r = ">" === (u = "iphone" === e.toLowerCase() ? "<320px" : "ipad" === e.toLowerCase() ? "<768px" : e).charAt(0) ? "min" : "<" === u.charAt(0) ? "max" : null) ? "(" + r + "-width: " + u.substring(1) + ")" : u, window.matchMedia(c)) : e).media && "invalid" === l.media ? {
        added: !1,
        mq: l,
        listener: null
      } : (o = "max" === r, t = t || p(a, i, "min" === r, function (e) {
        return e.addClass("is-bottom-fixed")
      }), n = n || p(a, i, o, function () {
      }), s = function (e) {
        e.matches ? t(a, d) : n(a, d)
      }, l.addListener(s), s(l), T.breakpoints[e] = {added: !0, mq: l, listener: s}, T.breakpoints[e])
    }, p = function (e, i, a, o) {
      return function (e, t) {
        var n;
        return n = void 0, e && (n = t.close(), t.updateSetting("activateCallback", o)), setTimeout(function () {
          if (t.updateSetting("positionContent", a), e) return t.activate(n)
        }, i)
      }
    }, f = function (e, t) {
      var n, i, a;
      if (n = void 0, a = !1, "string" == typeof e) a = void 0 !== T.breakpoints[e]; else for (n in T.breakpoints) T.breakpoints.hasOwnProperty(n) && T.breakpoints[n].mq === e && (a = !0);
      return a && (i = T.breakpoints[n || e], t ? t({matches: !1}) : i.listener({matches: !1}), i.mq.removeListener(i.listener), delete T.breakpoints[n || e]), a
    }, x = function (e, t) {
      var n, i;
      if (n = void 0, "string" == typeof e) n = T[e], T[e] = t; else for (i in n = {}, e) e.hasOwnProperty(i) && (n[i] = T[i], T[i] = e[i]);
      return n
    }, u = function (e) {
      return T[e]
    }, O(document).ready(function () {
      return c(), O(document).on("mouseenter", ".bigfoot-footnote__button", i), O(document).on("touchend click", w), O(document).on("mouseout", ".is-hover-instantiated", C), O(document).on("keyup", l), O(window).on("scroll resize", h), O(document).on("gestureend", function () {
        return h()
      })
    }), d = {
      removePopovers: g,
      close: g,
      createPopover: o,
      activate: o,
      repositionFeet: h,
      reposition: h,
      addBreakpoint: t,
      removeBreakpoint: f,
      getSetting: u,
      updateSetting: x
    }
  }
}).call(this), function (l, d, h, m) {
  "use strict";

  function n(e, t) {
    var n, i, a, o = [], r = 0;
    e && e.isDefaultPrevented() || (e.preventDefault(), t = t || {}, e && e.data && (t = u(e.data.options, t)), n = t.$target || h(e.currentTarget).trigger("blur"), (a = h.fancybox.getInstance()) && a.$trigger && a.$trigger.is(n) || (o = t.selector ? h(t.selector) : (i = n.attr("data-fancybox") || "") ? (o = e.data ? e.data.items : []).length ? o.filter('[data-fancybox="' + i + '"]') : h('[data-fancybox="' + i + '"]') : [n], (r = h(o).index(n)) < 0 && (r = 0), (a = h.fancybox.open(o, t, r)).$trigger = n))
  }

  if (l.console = l.console || {
    info: function (e) {
    }
  }, h) {
    if (h.fn.fancybox) return console.info("fancyBox already initialized");
    var e = {
        closeExisting: !1,
        loop: !1,
        gutter: 50,
        keyboard: !0,
        preventCaptionOverlap: !0,
        arrows: !0,
        infobar: !0,
        smallBtn: "auto",
        toolbar: "auto",
        buttons: ["zoom", "slideShow", "thumbs", "close"],
        idleTime: 3,
        protect: !1,
        modal: !1,
        image: {preload: !1},
        ajax: {settings: {data: {fancybox: !0}}},
        iframe: {
          tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen allow="autoplay; fullscreen" src=""></iframe>',
          preload: !0,
          css: {},
          attr: {scrolling: "auto"}
        },
        video: {
          tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
          format: "",
          autoStart: !0
        },
        defaultType: "image",
        animationEffect: "zoom",
        animationDuration: 366,
        zoomOpacity: "auto",
        transitionEffect: "fade",
        transitionDuration: 366,
        slideClass: "",
        baseClass: "",
        baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',
        spinnerTpl: '<div class="fancybox-loading"></div>',
        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
        btnTpl: {
          download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
          zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
          close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
          arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
          arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
          smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
        },
        parentEl: "body",
        hideScrollbar: !0,
        autoFocus: !0,
        backFocus: !0,
        trapFocus: !0,
        fullScreen: {autoStart: !1},
        touch: {vertical: !0, momentum: !0},
        hash: null,
        media: {},
        slideShow: {autoStart: !1, speed: 3e3},
        thumbs: {autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y"},
        wheel: "auto",
        onInit: h.noop,
        beforeLoad: h.noop,
        afterLoad: h.noop,
        beforeShow: h.noop,
        afterShow: h.noop,
        beforeClose: h.noop,
        afterClose: h.noop,
        onActivate: h.noop,
        onDeactivate: h.noop,
        clickContent: function (e, t) {
          return "image" === e.type && "zoom"
        },
        clickSlide: "close",
        clickOutside: "close",
        dblclickContent: !1,
        dblclickSlide: !1,
        dblclickOutside: !1,
        mobile: {
          preventCaptionOverlap: !1, idleTime: !1, clickContent: function (e, t) {
            return "image" === e.type && "toggleControls"
          }, clickSlide: function (e, t) {
            return "image" === e.type ? "toggleControls" : "close"
          }, dblclickContent: function (e, t) {
            return "image" === e.type && "zoom"
          }, dblclickSlide: function (e, t) {
            return "image" === e.type && "zoom"
          }
        },
        lang: "en",
        i18n: {
          en: {
            CLOSE: "Close",
            NEXT: "Next",
            PREV: "Previous",
            ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
            PLAY_START: "Start slideshow",
            PLAY_STOP: "Pause slideshow",
            FULL_SCREEN: "Full screen",
            THUMBS: "Thumbnails",
            DOWNLOAD: "Download",
            SHARE: "Share",
            ZOOM: "Zoom"
          },
          de: {
            CLOSE: "Schliessen",
            NEXT: "Weiter",
            PREV: "Zurück",
            ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
            PLAY_START: "Diaschau starten",
            PLAY_STOP: "Diaschau beenden",
            FULL_SCREEN: "Vollbild",
            THUMBS: "Vorschaubilder",
            DOWNLOAD: "Herunterladen",
            SHARE: "Teilen",
            ZOOM: "Maßstab"
          }
        }
      }, a = h(l), r = h(d), o = 0,
      p = l.requestAnimationFrame || l.webkitRequestAnimationFrame || l.mozRequestAnimationFrame || l.oRequestAnimationFrame || function (e) {
        return l.setTimeout(e, 1e3 / 60)
      },
      t = l.cancelAnimationFrame || l.webkitCancelAnimationFrame || l.mozCancelAnimationFrame || l.oCancelAnimationFrame || function (e) {
        l.clearTimeout(e)
      }, c = function () {
        var e, t = d.createElement("fakeelement"), n = {
          transition: "transitionend",
          OTransition: "oTransitionEnd",
          MozTransition: "transitionend",
          WebkitTransition: "webkitTransitionEnd"
        };
        for (e in n) if (t.style[e] !== m) return n[e];
        return "transitionend"
      }(), f = function (e) {
        return e && e.length && e[0].offsetHeight
      }, u = function (e, t) {
        var n = h.extend(!0, {}, e, t);
        return h.each(t, function (e, t) {
          h.isArray(t) && (n[e] = t)
        }), n
      }, i = function (e, t, n) {
        var i = this;
        i.opts = u({index: n}, h.fancybox.defaults), h.isPlainObject(t) && (i.opts = u(i.opts, t)), h.fancybox.isMobile && (i.opts = u(i.opts, i.opts.mobile)), i.id = i.opts.id || ++o, i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = !0, i.group = [], i.slides = {}, i.addContent(e), i.group.length && i.init()
      };
    h.extend(i.prototype, {
      init: function () {
        var t, n, i = this, a = i.group[i.currIndex].opts;
        a.closeExisting && h.fancybox.close(!0), h("body").addClass("fancybox-active"), !h.fancybox.getInstance() && !1 !== a.hideScrollbar && !h.fancybox.isMobile && d.body.scrollHeight > l.innerHeight && (h("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (l.innerWidth - d.documentElement.clientWidth) + "px;}</style>"), h("body").addClass("compensate-for-scrollbar")), n = "", h.each(a.buttons, function (e, t) {
          n += a.btnTpl[t] || ""
        }), t = h(i.translate(i, a.baseTpl.replace("{{buttons}}", n).replace("{{arrows}}", a.btnTpl.arrowLeft + a.btnTpl.arrowRight))).attr("id", "fancybox-container-" + i.id).addClass(a.baseClass).data("FancyBox", i).appendTo(a.parentEl), i.$refs = {container: t}, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (e) {
          i.$refs[e] = t.find(".fancybox-" + e)
        }), i.trigger("onInit"), i.activate(), i.jumpTo(i.currIndex)
      }, translate: function (e, t) {
        var i = e.opts.i18n[e.opts.lang] || e.opts.i18n.en;
        return t.replace(/\{\{(\w+)\}\}/g, function (e, t) {
          var n = i[t];
          return n === m ? e : n
        })
      }, addContent: function (e) {
        var t, c = this, n = h.makeArray(e);
        h.each(n, function (e, t) {
          var n, i, a, o, r, s = {}, l = {};
          h.isPlainObject(t) ? l = (s = t).opts || t : "object" === h.type(t) && h(t).length ? (l = (n = h(t)).data() || {}, (l = h.extend(!0, {}, l, l.options)).$orig = n, s.src = c.opts.src || l.src || n.attr("href"), s.type || s.src || (s.type = "inline", s.src = t)) : s = {
            type: "html",
            src: t + ""
          }, s.opts = h.extend(!0, {}, c.opts, l), h.isArray(l.buttons) && (s.opts.buttons = l.buttons), h.fancybox.isMobile && s.opts.mobile && (s.opts = u(s.opts, s.opts.mobile)), i = s.type || s.opts.type, o = s.src || "", !i && o && ((a = o.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = "video", s.opts.video.format || (s.opts.video.format = "video/" + ("ogv" === a[1] ? "ogg" : a[1]))) : o.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = "image" : o.match(/\.(pdf)((\?|#).*)?$/i) ? (i = "iframe", s = h.extend(!0, s, {
            contentType: "pdf",
            opts: {iframe: {preload: !1}}
          })) : "#" === o.charAt(0) && (i = "inline")), i ? s.type = i : c.trigger("objectNeedsType", s), s.contentType || (s.contentType = -1 < h.inArray(s.type, ["html", "inline", "ajax"]) ? "html" : s.type), s.index = c.group.length, "auto" == s.opts.smallBtn && (s.opts.smallBtn = -1 < h.inArray(s.type, ["html", "inline", "ajax"])), "auto" === s.opts.toolbar && (s.opts.toolbar = !s.opts.smallBtn), s.$thumb = s.opts.$thumb || null, s.opts.$trigger && s.index === c.opts.index && (s.$thumb = s.opts.$trigger.find("img:first"), s.$thumb.length && (s.opts.$orig = s.opts.$trigger)), s.$thumb && s.$thumb.length || !s.opts.$orig || (s.$thumb = s.opts.$orig.find("img:first")), s.$thumb && !s.$thumb.length && (s.$thumb = null), s.thumb = s.opts.thumb || (s.$thumb ? s.$thumb[0].src : null), "function" === h.type(s.opts.caption) && (s.opts.caption = s.opts.caption.apply(t, [c, s])), "function" === h.type(c.opts.caption) && (s.opts.caption = c.opts.caption.apply(t, [c, s])), s.opts.caption instanceof h || (s.opts.caption = s.opts.caption === m ? "" : s.opts.caption + ""), "ajax" === s.type && (1 < (r = o.split(/\s+/, 2)).length && (s.src = r.shift(), s.opts.filter = r.shift())), s.opts.modal && (s.opts = h.extend(!0, s.opts, {
            trapFocus: !0,
            infobar: 0,
            toolbar: 0,
            smallBtn: 0,
            keyboard: 0,
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,
            clickContent: !1,
            clickSlide: !1,
            clickOutside: !1,
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1
          })), c.group.push(s)
        }), Object.keys(c.slides).length && (c.updateControls(), (t = c.Thumbs) && t.isActive && (t.create(), t.focus()))
      }, addEvents: function () {
        var i = this;
        i.removeEvents(), i.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (e) {
          e.stopPropagation(), e.preventDefault(), i.close(e)
        }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e) {
          e.stopPropagation(), e.preventDefault(), i.previous()
        }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e) {
          e.stopPropagation(), e.preventDefault(), i.next()
        }).on("click.fb", "[data-fancybox-zoom]", function (e) {
          i[i.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
        }), a.on("orientationchange.fb resize.fb", function (e) {
          e && e.originalEvent && "resize" === e.originalEvent.type ? (i.requestId && t(i.requestId), i.requestId = p(function () {
            i.update(e)
          })) : (i.current && "iframe" === i.current.type && i.$refs.stage.hide(), setTimeout(function () {
            i.$refs.stage.show(), i.update(e)
          }, h.fancybox.isMobile ? 600 : 250))
        }), r.on("keydown.fb", function (e) {
          var t = (h.fancybox ? h.fancybox.getInstance() : null).current, n = e.keyCode || e.which;
          if (9 != n) return !t.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || h(e.target).is("input") || h(e.target).is("textarea") ? void 0 : 8 === n || 27 === n ? (e.preventDefault(), void i.close(e)) : 37 === n || 38 === n ? (e.preventDefault(), void i.previous()) : 39 === n || 40 === n ? (e.preventDefault(), void i.next()) : void i.trigger("afterKeydown", e, n);
          t.opts.trapFocus && i.focus(e)
        }), i.group[i.currIndex].opts.idleTime && (i.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (e) {
          i.idleSecondsCounter = 0, i.isIdle && i.showControls(), i.isIdle = !1
        }), i.idleInterval = l.setInterval(function () {
          i.idleSecondsCounter++, i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime && !i.isDragging && (i.isIdle = !0, i.idleSecondsCounter = 0, i.hideControls())
        }, 1e3))
      }, removeEvents: function () {
        a.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (l.clearInterval(this.idleInterval), this.idleInterval = null)
      }, previous: function (e) {
        return this.jumpTo(this.currPos - 1, e)
      }, next: function (e) {
        return this.jumpTo(this.currPos + 1, e)
      }, jumpTo: function (e, i) {
        var t, n, a, o, r, s, l, c, u, d = this, p = d.group.length;
        if (!(d.isDragging || d.isClosing || d.isAnimating && d.firstRun)) {
          if (e = parseInt(e, 10), !(a = d.current ? d.current.opts.loop : d.opts.loop) && (e < 0 || p <= e)) return !1;
          if (t = d.firstRun = !Object.keys(d.slides).length, r = d.current, d.prevIndex = d.currIndex, d.prevPos = d.currPos, o = d.createSlide(e), 1 < p && ((a || o.index < p - 1) && d.createSlide(e + 1), (a || 0 < o.index) && d.createSlide(e - 1)), d.current = o, d.currIndex = o.index, d.currPos = o.pos, d.trigger("beforeShow", t), d.updateControls(), o.forcedDuration = m, h.isNumeric(i) ? o.forcedDuration = i : i = o.opts[t ? "animationDuration" : "transitionDuration"], i = parseInt(i, 10), n = d.isMoved(o), o.$slide.addClass("fancybox-slide--current"), t) return o.opts.animationEffect && i && d.$refs.container.css("transition-duration", i + "ms"), d.$refs.container.addClass("fancybox-is-open").trigger("focus"), d.loadSlide(o), void d.preload("image");
          s = h.fancybox.getTranslate(r.$slide), l = h.fancybox.getTranslate(d.$refs.stage), h.each(d.slides, function (e, t) {
            h.fancybox.stop(t.$slide, !0)
          }), r.pos !== o.pos && (r.isComplete = !1), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), n ? (u = s.left - (r.pos * s.width + r.pos * r.opts.gutter), h.each(d.slides, function (e, t) {
            t.$slide.removeClass("fancybox-animated").removeClass(function (e, t) {
              return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
            });
            var n = t.pos * s.width + t.pos * t.opts.gutter;
            h.fancybox.setTranslate(t.$slide, {
              top: 0,
              left: n - l.left + u
            }), t.pos !== o.pos && t.$slide.addClass("fancybox-slide--" + (t.pos > o.pos ? "next" : "previous")), f(t.$slide), h.fancybox.animate(t.$slide, {
              top: 0,
              left: (t.pos - o.pos) * s.width + (t.pos - o.pos) * t.opts.gutter
            }, i, function () {
              t.$slide.css({
                transform: "",
                opacity: ""
              }).removeClass("fancybox-slide--next fancybox-slide--previous"), t.pos === d.currPos && d.complete()
            })
          })) : i && o.opts.transitionEffect && (c = "fancybox-animated fancybox-fx-" + o.opts.transitionEffect, r.$slide.addClass("fancybox-slide--" + (r.pos > o.pos ? "next" : "previous")), h.fancybox.animate(r.$slide, c, i, function () {
            r.$slide.removeClass(c).removeClass("fancybox-slide--next fancybox-slide--previous")
          }, !1)), o.isLoaded ? d.revealContent(o) : d.loadSlide(o), d.preload("image")
        }
      }, createSlide: function (e) {
        var t, n, i = this;
        return n = (n = e % i.group.length) < 0 ? i.group.length + n : n, !i.slides[e] && i.group[n] && (t = h('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[e] = h.extend(!0, {}, i.group[n], {
          pos: e,
          $slide: t,
          isLoaded: !1
        }), i.updateSlide(i.slides[e])), i.slides[e]
      }, scaleToActual: function (e, t, n) {
        var i, a, o, r, s, l = this, c = l.current, u = c.$content, d = h.fancybox.getTranslate(c.$slide).width,
          p = h.fancybox.getTranslate(c.$slide).height, f = c.width, g = c.height;
        l.isAnimating || l.isMoved() || !u || "image" != c.type || !c.isLoaded || c.hasError || (l.isAnimating = !0, h.fancybox.stop(u), e = e === m ? .5 * d : e, t = t === m ? .5 * p : t, (i = h.fancybox.getTranslate(u)).top -= h.fancybox.getTranslate(c.$slide).top, i.left -= h.fancybox.getTranslate(c.$slide).left, r = f / i.width, s = g / i.height, a = .5 * d - .5 * f, o = .5 * p - .5 * g, d < f && (0 < (a = i.left * r - (e * r - e)) && (a = 0), a < d - f && (a = d - f)), p < g && (0 < (o = i.top * s - (t * s - t)) && (o = 0), o < p - g && (o = p - g)), l.updateCursor(f, g), h.fancybox.animate(u, {
          top: o,
          left: a,
          scaleX: r,
          scaleY: s
        }, n || 330, function () {
          l.isAnimating = !1
        }), l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop())
      }, scaleToFit: function (e) {
        var t, n = this, i = n.current, a = i.$content;
        n.isAnimating || n.isMoved() || !a || "image" != i.type || !i.isLoaded || i.hasError || (n.isAnimating = !0, h.fancybox.stop(a), t = n.getFitPos(i), n.updateCursor(t.width, t.height), h.fancybox.animate(a, {
          top: t.top,
          left: t.left,
          scaleX: t.width / a.width(),
          scaleY: t.height / a.height()
        }, e || 330, function () {
          n.isAnimating = !1
        }))
      }, getFitPos: function (e) {
        var t, n, i, a, o = e.$content, r = e.$slide, s = e.width || e.opts.width, l = e.height || e.opts.height,
          c = {};
        return !!(e.isLoaded && o && o.length) && (t = h.fancybox.getTranslate(this.$refs.stage).width, n = h.fancybox.getTranslate(this.$refs.stage).height, t -= parseFloat(r.css("paddingLeft")) + parseFloat(r.css("paddingRight")) + parseFloat(o.css("marginLeft")) + parseFloat(o.css("marginRight")), n -= parseFloat(r.css("paddingTop")) + parseFloat(r.css("paddingBottom")) + parseFloat(o.css("marginTop")) + parseFloat(o.css("marginBottom")), s && l || (s = t, l = n), t - .5 < (s *= i = Math.min(1, t / s, n / l)) && (s = t), n - .5 < (l *= i) && (l = n), "image" === e.type ? (c.top = Math.floor(.5 * (n - l)) + parseFloat(r.css("paddingTop")), c.left = Math.floor(.5 * (t - s)) + parseFloat(r.css("paddingLeft"))) : "video" === e.contentType && (s / (a = e.opts.width && e.opts.height ? s / l : e.opts.ratio || 16 / 9) < l ? l = s / a : l * a < s && (s = l * a)), c.width = s, c.height = l, c)
      }, update: function (n) {
        var i = this;
        h.each(i.slides, function (e, t) {
          i.updateSlide(t, n)
        })
      }, updateSlide: function (e, t) {
        var n = this, i = e && e.$content, a = e.width || e.opts.width, o = e.height || e.opts.height, r = e.$slide;
        n.adjustCaption(e), i && (a || o || "video" === e.contentType) && !e.hasError && (h.fancybox.stop(i), h.fancybox.setTranslate(i, n.getFitPos(e)), e.pos === n.currPos && (n.isAnimating = !1, n.updateCursor())), n.adjustLayout(e), r.length && (r.trigger("refresh"), e.pos === n.currPos && n.$refs.toolbar.add(n.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), n.trigger("onUpdate", e, t)
      }, centerSlide: function (e) {
        var t = this, n = t.current, i = n.$slide;
        !t.isClosing && n && (i.siblings().css({
          transform: "",
          opacity: ""
        }), i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), h.fancybox.animate(i, {
          top: 0,
          left: 0,
          opacity: 1
        }, e === m ? 0 : e, function () {
          i.css({transform: "", opacity: ""}), n.isComplete || t.complete()
        }, !1))
      }, isMoved: function (e) {
        var t, n, i = e || this.current;
        return !!i && (n = h.fancybox.getTranslate(this.$refs.stage), t = h.fancybox.getTranslate(i.$slide), !i.$slide.hasClass("fancybox-animated") && (.5 < Math.abs(t.top - n.top) || .5 < Math.abs(t.left - n.left)))
      }, updateCursor: function (e, t) {
        var n, i, a = this, o = a.current, r = a.$refs.container;
        o && !a.isClosing && a.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), i = !!(n = a.canPan(e, t)) || a.isZoomable(), r.toggleClass("fancybox-is-zoomable", i), h("[data-fancybox-zoom]").prop("disabled", !i), n ? r.addClass("fancybox-can-pan") : i && ("zoom" === o.opts.clickContent || h.isFunction(o.opts.clickContent) && "zoom" == o.opts.clickContent(o)) ? r.addClass("fancybox-can-zoomIn") : o.opts.touch && (o.opts.touch.vertical || 1 < a.group.length) && "video" !== o.contentType && r.addClass("fancybox-can-swipe"))
      }, isZoomable: function () {
        var e, t = this.current;
        if (t && !this.isClosing && "image" === t.type && !t.hasError) {
          if (!t.isLoaded) return !0;
          if ((e = this.getFitPos(t)) && (t.width > e.width || t.height > e.height)) return !0
        }
        return !1
      }, isScaledDown: function (e, t) {
        var n = !1, i = this.current, a = i.$content;
        return e !== m && t !== m ? n = e < i.width && t < i.height : a && (n = (n = h.fancybox.getTranslate(a)).width < i.width && n.height < i.height), n
      }, canPan: function (e, t) {
        var n = this.current, i = null, a = !1;
        return "image" === n.type && (n.isComplete || e && t) && !n.hasError && (a = this.getFitPos(n), e !== m && t !== m ? i = {
          width: e,
          height: t
        } : n.isComplete && (i = h.fancybox.getTranslate(n.$content)), i && a && (a = 1.5 < Math.abs(i.width - a.width) || 1.5 < Math.abs(i.height - a.height))), a
      }, loadSlide: function (n) {
        var e, t, i, a = this;
        if (!n.isLoading && !n.isLoaded) {
          if (!(n.isLoading = !0) === a.trigger("beforeLoad", n)) return n.isLoading = !1;
          switch (e = n.type, (t = n.$slide).off("refresh").trigger("onReset").addClass(n.opts.slideClass), e) {
            case"image":
              a.setImage(n);
              break;
            case"iframe":
              a.setIframe(n);
              break;
            case"html":
              a.setContent(n, n.src || n.content);
              break;
            case"video":
              a.setContent(n, n.opts.video.tpl.replace(/\{\{src\}\}/gi, n.src).replace("{{format}}", n.opts.videoFormat || n.opts.video.format || "").replace("{{poster}}", n.thumb || ""));
              break;
            case"inline":
              h(n.src).length ? a.setContent(n, h(n.src)) : a.setError(n);
              break;
            case"ajax":
              a.showLoading(n), i = h.ajax(h.extend({}, n.opts.ajax.settings, {
                url: n.src, success: function (e, t) {
                  "success" === t && a.setContent(n, e)
                }, error: function (e, t) {
                  e && "abort" !== t && a.setError(n)
                }
              })), t.one("onReset", function () {
                i.abort()
              });
              break;
            default:
              a.setError(n)
          }
          return !0
        }
      }, setImage: function (t) {
        var e, n = this;
        setTimeout(function () {
          var e = t.$image;
          n.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || n.showLoading(t)
        }, 50), n.checkSrcset(t), t.$content = h('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (e = d.createElement("img")).onerror = function () {
          h(this).remove(), t.$ghost = null
        }, e.onload = function () {
          n.afterLoad(t)
        }, t.$ghost = h(e).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), n.setBigImage(t)
      }, checkSrcset: function (e) {
        var t, n, i, a, o = e.opts.srcset || e.opts.image.srcset;
        if (o) {
          i = l.devicePixelRatio || 1, a = l.innerWidth * i, (n = o.split(",").map(function (e) {
            var i = {};
            return e.trim().split(/\s+/).forEach(function (e, t) {
              var n = parseInt(e.substring(0, e.length - 1), 10);
              return 0 === t ? i.url = e : void (n && (i.value = n, i.postfix = e[e.length - 1]))
            }), i
          })).sort(function (e, t) {
            return e.value - t.value
          });
          for (var r = 0; r < n.length; r++) {
            var s = n[r];
            if ("w" === s.postfix && s.value >= a || "x" === s.postfix && s.value >= i) {
              t = s;
              break
            }
          }
          !t && n.length && (t = n[n.length - 1]), t && (e.src = t.url, e.width && e.height && "w" == t.postfix && (e.height = e.width / e.height * t.value, e.width = t.value), e.opts.srcset = o)
        }
      }, setBigImage: function (t) {
        var n = this, e = d.createElement("img"), i = h(e);
        t.$image = i.one("error", function () {
          n.setError(t)
        }).one("load", function () {
          var e;
          t.$ghost || (n.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), n.afterLoad(t)), n.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (1 < t.width / t.height && 1 < a.width() / a.height() ? "100" : Math.round(t.width / t.height * 100)) + "vw"), i.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function () {
            t.$ghost && !n.isClosing && t.$ghost.hide()
          }, Math.min(300, Math.max(1e3, t.height / 1600))), n.hideLoading(t))
        }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (e.complete || "complete" == e.readyState) && i.naturalWidth && i.naturalHeight ? i.trigger("load") : e.error && i.trigger("error")
      }, resolveImageSlideSize: function (e, t, n) {
        var i = parseInt(e.opts.width, 10), a = parseInt(e.opts.height, 10);
        e.width = t, e.height = n, 0 < i && (e.width = i, e.height = Math.floor(i * n / t)), 0 < a && (e.width = Math.floor(a * t / n), e.height = a)
      }, setIframe: function (a) {
        var o, t = this, r = a.opts.iframe, s = a.$slide;
        h.fancybox.isMobile && (r.css.overflow = "scroll"), a.$content = h('<div class="fancybox-content' + (r.preload ? " fancybox-is-hidden" : "") + '"></div>').css(r.css).appendTo(s), s.addClass("fancybox-slide--" + a.contentType), a.$iframe = o = h(r.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(r.attr).appendTo(a.$content), r.preload ? (t.showLoading(a), o.on("load.fb error.fb", function (e) {
          this.isReady = 1, a.$slide.trigger("refresh"), t.afterLoad(a)
        }), s.on("refresh.fb", function () {
          var e, t = a.$content, n = r.css.width, i = r.css.height;
          if (1 === o[0].isReady) {
            try {
              e = o.contents().find("body")
            } catch (e) {
            }
            e && e.length && e.children().length && (s.css("overflow", "visible"), t.css({
              width: "100%",
              "max-width": "100%",
              height: "9999px"
            }), n === m && (n = Math.ceil(Math.max(e[0].clientWidth, e.outerWidth(!0)))), t.css("width", n || "").css("max-width", ""), i === m && (i = Math.ceil(Math.max(e[0].clientHeight, e.outerHeight(!0)))), t.css("height", i || ""), s.css("overflow", "auto")), t.removeClass("fancybox-is-hidden")
          }
        })) : t.afterLoad(a), o.attr("src", a.src), s.one("onReset", function () {
          try {
            h(this).find("iframe").hide().unbind().attr("src", "//about:blank")
          } catch (e) {
          }
          h(this).off("refresh.fb").empty(), a.isLoaded = !1, a.isRevealed = !1
        })
      }, setContent: function (e, t) {
        var n;
        this.isClosing || (this.hideLoading(e), e.$content && h.fancybox.stop(e.$content), e.$slide.empty(), (n = t) && n.hasOwnProperty && n instanceof h && t.parent().length ? ((t.hasClass("fancybox-content") || t.parent().hasClass("fancybox-content")) && t.parents(".fancybox-slide").trigger("onReset"), e.$placeholder = h("<div>").hide().insertAfter(t), t.css("display", "inline-block")) : e.hasError || ("string" === h.type(t) && (t = h("<div>").append(h.trim(t)).contents()), e.opts.filter && (t = h("<div>").html(t).find(e.opts.filter))), e.$slide.one("onReset", function () {
          h(this).find("video,audio").trigger("pause"), e.$placeholder && (e.$placeholder.after(t.removeClass("fancybox-content").hide()).remove(), e.$placeholder = null), e.$smallBtn && (e.$smallBtn.remove(), e.$smallBtn = null), e.hasError || (h(this).empty(), e.isLoaded = !1, e.isRevealed = !1)
        }), h(t).appendTo(e.$slide), h(t).is("video,audio") && (h(t).addClass("fancybox-video"), h(t).wrap("<div></div>"), e.contentType = "video", e.opts.width = e.opts.width || h(t).attr("width"), e.opts.height = e.opts.height || h(t).attr("height")), e.$content = e.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), e.$content.siblings().hide(), e.$content.length || (e.$content = e.$slide.wrapInner("<div></div>").children().first()), e.$content.addClass("fancybox-content"), e.$slide.addClass("fancybox-slide--" + e.contentType), this.afterLoad(e))
      }, setError: function (e) {
        e.hasError = !0, e.$slide.trigger("onReset").removeClass("fancybox-slide--" + e.contentType).addClass("fancybox-slide--error"), e.contentType = "html", this.setContent(e, this.translate(e, e.opts.errorTpl)), e.pos === this.currPos && (this.isAnimating = !1)
      }, showLoading: function (e) {
        (e = e || this.current) && !e.$spinner && (e.$spinner = h(this.translate(this, this.opts.spinnerTpl)).appendTo(e.$slide).hide().fadeIn("fast"))
      }, hideLoading: function (e) {
        (e = e || this.current) && e.$spinner && (e.$spinner.stop().remove(), delete e.$spinner)
      }, afterLoad: function (e) {
        var t = this;
        t.isClosing || (e.isLoading = !1, e.isLoaded = !0, t.trigger("afterLoad", e), t.hideLoading(e), !e.opts.smallBtn || e.$smallBtn && e.$smallBtn.length || (e.$smallBtn = h(t.translate(e, e.opts.btnTpl.smallBtn)).appendTo(e.$content)), e.opts.protect && e.$content && !e.hasError && (e.$content.on("contextmenu.fb", function (e) {
          return 2 == e.button && e.preventDefault(), !0
        }), "image" === e.type && h('<div class="fancybox-spaceball"></div>').appendTo(e.$content)), t.adjustCaption(e), t.adjustLayout(e), e.pos === t.currPos && t.updateCursor(), t.revealContent(e))
      }, adjustCaption: function (e) {
        var t = this, n = e || t.current, i = n.opts.caption, a = t.$refs.caption, o = !1;
        n.opts.preventCaptionOverlap && i && i.length && (n.pos !== t.currPos ? ((a = a.clone().empty().appendTo(a.parent())).html(i), o = a.outerHeight(!0), a.empty().remove()) : t.$caption && (o = t.$caption.outerHeight(!0)), n.$slide.css("padding-bottom", o || ""))
      }, adjustLayout: function (e) {
        var t, n, i, a, o = e || this.current;
        o.isLoaded && !0 !== o.opts.disableLayoutFix && (o.$content.css("margin-bottom", ""), o.$content.outerHeight() > o.$slide.height() + .5 && (i = o.$slide[0].style["padding-bottom"], a = o.$slide.css("padding-bottom"), 0 < parseFloat(a) && (t = o.$slide[0].scrollHeight, o.$slide.css("padding-bottom", 0), Math.abs(t - o.$slide[0].scrollHeight) < 1 && (n = a), o.$slide.css("padding-bottom", i))), o.$content.css("margin-bottom", n))
      }, revealContent: function (e) {
        var t, n, i, a, o = this, r = e.$slide, s = !1, l = !1, c = o.isMoved(e), u = e.isRevealed;
        return e.isRevealed = !0, t = e.opts[o.firstRun ? "animationEffect" : "transitionEffect"], i = e.opts[o.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(e.forcedDuration === m ? i : e.forcedDuration, 10), !c && e.pos === o.currPos && i || (t = !1), "zoom" === t && (e.pos === o.currPos && i && "image" === e.type && !e.hasError && (l = o.getThumbPos(e)) ? s = o.getFitPos(e) : t = "fade"), "zoom" === t ? (o.isAnimating = !0, s.scaleX = s.width / l.width, s.scaleY = s.height / l.height, "auto" == (a = e.opts.zoomOpacity) && (a = .1 < Math.abs(e.width / e.height - l.width / l.height)), a && (l.opacity = .1, s.opacity = 1), h.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), l), f(e.$content), void h.fancybox.animate(e.$content, s, i, function () {
          o.isAnimating = !1, o.complete()
        })) : (o.updateSlide(e), t ? (h.fancybox.stop(r), n = "fancybox-slide--" + (e.pos >= o.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + t, r.addClass(n).removeClass("fancybox-slide--current"), e.$content.removeClass("fancybox-is-hidden"), f(r), "image" !== e.type && e.$content.hide().show(0), void h.fancybox.animate(r, "fancybox-slide--current", i, function () {
          r.removeClass(n).css({transform: "", opacity: ""}), e.pos === o.currPos && o.complete()
        }, !0)) : (e.$content.removeClass("fancybox-is-hidden"), u || !c || "image" !== e.type || e.hasError || e.$content.hide().fadeIn("fast"), void (e.pos === o.currPos && o.complete())))
      }, getThumbPos: function (e) {
        var t, n, i, a, o, r, s, l, c = !1, u = e.$thumb;
        return !(!u || (!(r = u[0]) || r.ownerDocument !== d || (h(".fancybox-container").css("pointer-events", "none"), s = {
          x: r.getBoundingClientRect().left + r.offsetWidth / 2,
          y: r.getBoundingClientRect().top + r.offsetHeight / 2
        }, l = d.elementFromPoint(s.x, s.y) === r, h(".fancybox-container").css("pointer-events", ""), !l))) && (t = h.fancybox.getTranslate(u), n = parseFloat(u.css("border-top-width") || 0), i = parseFloat(u.css("border-right-width") || 0), a = parseFloat(u.css("border-bottom-width") || 0), o = parseFloat(u.css("border-left-width") || 0), c = {
          top: t.top + n,
          left: t.left + o,
          width: t.width - i - o,
          height: t.height - n - a,
          scaleX: 1,
          scaleY: 1
        }, 0 < t.width && 0 < t.height && c)
      }, complete: function () {
        var e, n = this, t = n.current, i = {};
        !n.isMoved() && t.isLoaded && (t.isComplete || (t.isComplete = !0, t.$slide.siblings().trigger("onReset"), n.preload("inline"), f(t.$slide), t.$slide.addClass("fancybox-slide--complete"), h.each(n.slides, function (e, t) {
          t.pos >= n.currPos - 1 && t.pos <= n.currPos + 1 ? i[t.pos] = t : t && (h.fancybox.stop(t.$slide), t.$slide.off().remove())
        }), n.slides = i), n.isAnimating = !1, n.updateCursor(), n.trigger("afterShow"), t.opts.video.autoStart && t.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
          this.webkitExitFullscreen && this.webkitExitFullscreen(), n.next()
        }), t.opts.autoFocus && "html" === t.contentType && ((e = t.$content.find("input[autofocus]:enabled:visible:first")).length ? e.trigger("focus") : n.focus(null, !0)), t.$slide.scrollTop(0).scrollLeft(0))
      }, preload: function (e) {
        var t, n, i = this;
        i.group.length < 2 || (n = i.slides[i.currPos + 1], (t = i.slides[i.currPos - 1]) && t.type === e && i.loadSlide(t), n && n.type === e && i.loadSlide(n))
      }, focus: function (e, t) {
        var n, i, a = this,
          o = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
        a.isClosing || ((n = (n = !e && a.current && a.current.isComplete ? a.current.$slide.find("*:visible" + (t ? ":not(.fancybox-close-small)" : "")) : a.$refs.container.find("*:visible")).filter(o).filter(function () {
          return "hidden" !== h(this).css("visibility") && !h(this).hasClass("disabled")
        })).length ? (i = n.index(d.activeElement), e && e.shiftKey ? (i < 0 || 0 == i) && (e.preventDefault(), n.eq(n.length - 1).trigger("focus")) : (i < 0 || i == n.length - 1) && (e && e.preventDefault(), n.eq(0).trigger("focus"))) : a.$refs.container.trigger("focus"))
      }, activate: function () {
        var t = this;
        h(".fancybox-container").each(function () {
          var e = h(this).data("FancyBox");
          e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
        }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
      }, close: function (e, t) {
        var n, i, a, o, r, s, l, c = this, u = c.current, d = function () {
          c.cleanUp(e)
        };
        return !c.isClosing && (!(c.isClosing = !0) === c.trigger("beforeClose", e) ? (c.isClosing = !1, p(function () {
          c.update()
        }), !1) : (c.removeEvents(), a = u.$content, n = u.opts.animationEffect, i = h.isNumeric(t) ? t : n ? u.opts.animationDuration : 0, u.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== e ? h.fancybox.stop(u.$slide) : n = !1, u.$slide.siblings().trigger("onReset").remove(), i && c.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", i + "ms"), c.hideLoading(u), c.hideControls(!0), c.updateCursor(), "zoom" !== n || a && i && "image" === u.type && !c.isMoved() && !u.hasError && (l = c.getThumbPos(u)) || (n = "fade"), "zoom" === n ? (h.fancybox.stop(a), s = {
          top: (o = h.fancybox.getTranslate(a)).top,
          left: o.left,
          scaleX: o.width / l.width,
          scaleY: o.height / l.height,
          width: l.width,
          height: l.height
        }, "auto" == (r = u.opts.zoomOpacity) && (r = .1 < Math.abs(u.width / u.height - l.width / l.height)), r && (l.opacity = 0), h.fancybox.setTranslate(a, s), f(a), h.fancybox.animate(a, l, i, d)) : n && i ? h.fancybox.animate(u.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + n, i, d) : !0 === e ? setTimeout(d, i) : d(), !0))
      }, cleanUp: function (e) {
        var t, n, i, a = this, o = a.current.opts.$orig;
        a.current.$slide.trigger("onReset"), a.$refs.container.empty().remove(), a.trigger("afterClose", e), a.current.opts.backFocus && (o && o.length && o.is(":visible") || (o = a.$trigger), o && o.length && (n = l.scrollX, i = l.scrollY, o.trigger("focus"), h("html, body").scrollTop(i).scrollLeft(n))), a.current = null, (t = h.fancybox.getInstance()) ? t.activate() : (h("body").removeClass("fancybox-active compensate-for-scrollbar"), h("#fancybox-style-noscroll").remove())
      }, trigger: function (e, t) {
        var n, i = Array.prototype.slice.call(arguments, 1), a = this, o = t && t.opts ? t : a.current;
        return o ? i.unshift(o) : o = a, i.unshift(a), h.isFunction(o.opts[e]) && (n = o.opts[e].apply(o, i)), !1 === n ? n : void ("afterClose" !== e && a.$refs ? a.$refs.container.trigger(e + ".fb", i) : r.trigger(e + ".fb", i))
      }, updateControls: function () {
        var e = this, t = e.current, n = t.index, i = e.$refs.container, a = e.$refs.caption, o = t.opts.caption;
        t.$slide.trigger("refresh"), e.$caption = o && o.length ? a.html(o) : null, e.hasHiddenControls || e.isIdle || e.showControls(), i.find("[data-fancybox-count]").html(e.group.length), i.find("[data-fancybox-index]").html(n + 1), i.find("[data-fancybox-prev]").prop("disabled", !t.opts.loop && n <= 0), i.find("[data-fancybox-next]").prop("disabled", !t.opts.loop && n >= e.group.length - 1), "image" === t.type ? i.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", t.opts.image.src || t.src).show() : t.opts.toolbar && i.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), h(d.activeElement).is(":hidden,[disabled]") && e.$refs.container.trigger("focus")
      }, hideControls: function (e) {
        var t = ["infobar", "toolbar", "nav"];
        !e && this.current.opts.preventCaptionOverlap || t.push("caption"), this.$refs.container.removeClass(t.map(function (e) {
          return "fancybox-show-" + e
        }).join(" ")), this.hasHiddenControls = !0
      }, showControls: function () {
        var e = this, t = e.current ? e.current.opts : e.opts, n = e.$refs.container;
        e.hasHiddenControls = !1, e.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && 1 < e.group.length)).toggleClass("fancybox-show-caption", !!e.$caption).toggleClass("fancybox-show-nav", !!(t.arrows && 1 < e.group.length)).toggleClass("fancybox-is-modal", !!t.modal)
      }, toggleControls: function () {
        this.hasHiddenControls ? this.showControls() : this.hideControls()
      }
    }), h.fancybox = {
      version: "3.5.2",
      defaults: e,
      getInstance: function (e) {
        var t = h('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
          n = Array.prototype.slice.call(arguments, 1);
        return t instanceof i && ("string" === h.type(e) ? t[e].apply(t, n) : "function" === h.type(e) && e.apply(t, n), t)
      },
      open: function (e, t, n) {
        return new i(e, t, n)
      },
      close: function (e) {
        var t = this.getInstance();
        t && (t.close(), !0 === e && this.close(e))
      },
      destroy: function () {
        this.close(!0), r.add("body").off("click.fb-start", "**")
      },
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      use3d: (v = d.createElement("div"), l.getComputedStyle && l.getComputedStyle(v) && l.getComputedStyle(v).getPropertyValue("transform") && !(d.documentMode && d.documentMode < 11)),
      getTranslate: function (e) {
        var t;
        return !(!e || !e.length) && {
          top: (t = e[0].getBoundingClientRect()).top || 0,
          left: t.left || 0,
          width: t.width,
          height: t.height,
          opacity: parseFloat(e.css("opacity"))
        }
      },
      setTranslate: function (e, t) {
        var n = "", i = {};
        if (e && t) return t.left === m && t.top === m || (n = (t.left === m ? e.position().left : t.left) + "px, " + (t.top === m ? e.position().top : t.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), t.scaleX !== m && t.scaleY !== m ? n += " scale(" + t.scaleX + ", " + t.scaleY + ")" : t.scaleX !== m && (n += " scaleX(" + t.scaleX + ")"), n.length && (i.transform = n), t.opacity !== m && (i.opacity = t.opacity), t.width !== m && (i.width = t.width), t.height !== m && (i.height = t.height), e.css(i)
      },
      animate: function (t, n, i, a, o) {
        var r, s = this;
        h.isFunction(i) && (a = i, i = null), s.stop(t), r = s.getTranslate(t), t.on(c, function (e) {
          (!e || !e.originalEvent || t.is(e.originalEvent.target) && "z-index" != e.originalEvent.propertyName) && (s.stop(t), h.isNumeric(i) && t.css("transition-duration", ""), h.isPlainObject(n) ? n.scaleX !== m && n.scaleY !== m && s.setTranslate(t, {
            top: n.top,
            left: n.left,
            width: r.width * n.scaleX,
            height: r.height * n.scaleY,
            scaleX: 1,
            scaleY: 1
          }) : !0 !== o && t.removeClass(n), h.isFunction(a) && a(e))
        }), h.isNumeric(i) && t.css("transition-duration", i + "ms"), h.isPlainObject(n) ? (n.scaleX !== m && n.scaleY !== m && (delete n.width, delete n.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), h.fancybox.setTranslate(t, n)) : t.addClass(n), t.data("timer", setTimeout(function () {
          t.trigger(c)
        }, i + 33))
      },
      stop: function (e, t) {
        e && e.length && (clearTimeout(e.data("timer")), t && e.trigger(c), e.off(c).css("transition-duration", ""), e.parent().removeClass("fancybox-is-scaling"))
      }
    }, h.fn.fancybox = function (e) {
      var t;
      return (t = (e = e || {}).selector || !1) ? h("body").off("click.fb-start", t).on("click.fb-start", t, {options: e}, n) : this.off("click.fb-start").on("click.fb-start", {
        items: this,
        options: e
      }, n), this
    }, r.on("click.fb-start", "[data-fancybox]", n), r.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
      h('[data-fancybox="' + h(this).attr("data-fancybox-trigger") + '"]').eq(h(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {$trigger: h(this)})
    }), s = ".fancybox-button", g = "fancybox-focus", b = null, r.on("mousedown mouseup focus blur", s, function (e) {
      switch (e.type) {
        case"mousedown":
          b = h(this);
          break;
        case"mouseup":
          b = null;
          break;
        case"focusin":
          h(s).removeClass(g), h(this).is(b) || h(this).is("[disabled]") || h(this).addClass(g);
          break;
        case"focusout":
          h(s).removeClass(g)
      }
    })
  }
  var s, g, b, v
}(window, document, jQuery), function (f) {
  "use strict";
  var i = {
    youtube: {
      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
      params: {autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1},
      paramPlace: 8,
      type: "iframe",
      url: "//www.youtube-nocookie.com/embed/$4",
      thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
    },
    vimeo: {
      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
      params: {autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1},
      paramPlace: 3,
      type: "iframe",
      url: "//player.vimeo.com/video/$2"
    },
    instagram: {
      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
      type: "image",
      url: "//$1/p/$2/media/?size=l"
    },
    gmap_place: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
      type: "iframe",
      url: function (e) {
        return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12] + "").replace(/\?/, "&") + "&output=" + (e[12] && 0 < e[12].indexOf("layer=c") ? "svembed" : "embed")
      }
    },
    gmap_search: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
      type: "iframe",
      url: function (e) {
        return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
      }
    }
  }, g = function (n, e, t) {
    if (n) return t = t || "", "object" === f.type(t) && (t = f.param(t, !0)), f.each(e, function (e, t) {
      n = n.replace("$" + e, t || "")
    }), t.length && (n += (0 < n.indexOf("?") ? "&" : "?") + t), n
  };
  f(document).on("objectNeedsType.fb", function (e, t, a) {
    var n, o, r, s, l, c, u, d = a.src || "", p = !1;
    n = f.extend(!0, {}, i, a.opts.media), f.each(n, function (e, t) {
      if (r = d.match(t.matcher)) {
        if (p = t.type, u = e, c = {}, t.paramPlace && r[t.paramPlace]) {
          "?" == (l = r[t.paramPlace])[0] && (l = l.substring(1)), l = l.split("&");
          for (var n = 0; n < l.length; ++n) {
            var i = l[n].split("=", 2);
            2 == i.length && (c[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " ")))
          }
        }
        return s = f.extend(!0, {}, t.params, a.opts[e], c), d = "function" === f.type(t.url) ? t.url.call(this, r, s, a) : g(t.url, r, s), o = "function" === f.type(t.thumb) ? t.thumb.call(this, r, s, a) : g(t.thumb, r), "youtube" === e ? d = d.replace(/&t=((\d+)m)?(\d+)s/, function (e, t, n, i) {
          return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10))
        }) : "vimeo" === e && (d = d.replace("&%23", "#")), !1
      }
    }), p ? (a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = o), "iframe" === p && (a.opts = f.extend(!0, a.opts, {
      iframe: {
        preload: !1,
        attr: {scrolling: "no"}
      }
    })), f.extend(a, {
      type: p,
      src: d,
      origSrc: a.src,
      contentSource: u,
      contentType: "image" === p ? "image" : "gmap_place" == u || "gmap_search" == u ? "map" : "video"
    })) : d && (a.type = a.opts.defaultType)
  });
  var a = {
    youtube: {src: "https://www.youtube.com/iframe_api", class: "YT", loading: !1, loaded: !1},
    vimeo: {src: "https://player.vimeo.com/api/player.js", class: "Vimeo", loading: !1, loaded: !1},
    load: function (e) {
      var t, n = this;
      return this[e].loaded ? void setTimeout(function () {
        n.done(e)
      }) : void (this[e].loading || (this[e].loading = !0, (t = document.createElement("script")).type = "text/javascript", t.src = this[e].src, "youtube" === e ? window.onYouTubeIframeAPIReady = function () {
        n[e].loaded = !0, n.done(e)
      } : t.onload = function () {
        n[e].loaded = !0, n.done(e)
      }, document.body.appendChild(t)))
    },
    done: function (e) {
      var t, n;
      "youtube" === e && delete window.onYouTubeIframeAPIReady, (t = f.fancybox.getInstance()) && (n = t.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? new YT.Player(n.attr("id"), {
        events: {
          onStateChange: function (e) {
            0 == e.data && t.next()
          }
        }
      }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(n).on("ended", function () {
        t.next()
      }))
    }
  };
  f(document).on({
    "afterShow.fb": function (e, t, n) {
      1 < t.group.length && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && a.load(n.contentSource)
    }
  })
}(jQuery), function (h, l, m) {
  "use strict";
  var b = h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.oRequestAnimationFrame || function (e) {
      return h.setTimeout(e, 1e3 / 60)
    },
    v = h.cancelAnimationFrame || h.webkitCancelAnimationFrame || h.mozCancelAnimationFrame || h.oCancelAnimationFrame || function (e) {
      h.clearTimeout(e)
    }, u = function (e) {
      var t = [];
      for (var n in e = (e = e.originalEvent || e || h.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[n].pageX ? t.push({
        x: e[n].pageX,
        y: e[n].pageY
      }) : e[n].clientX && t.push({x: e[n].clientX, y: e[n].clientY});
      return t
    }, y = function (e, t, n) {
      return t && e ? "x" === n ? e.x - t.x : "y" === n ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0
    }, c = function (e) {
      if (e.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || m.isFunction(e.get(0).onclick) || e.data("selectable")) return !0;
      for (var t = 0, n = e[0].attributes, i = n.length; t < i; t++) if ("data-fancybox-" === n[t].nodeName.substr(0, 14)) return !0;
      return !1
    }, d = function (e) {
      for (var t = !1; (n = e.get(0), void 0, i = h.getComputedStyle(n)["overflow-y"], a = h.getComputedStyle(n)["overflow-x"], o = ("scroll" === i || "auto" === i) && n.scrollHeight > n.clientHeight, r = ("scroll" === a || "auto" === a) && n.scrollWidth > n.clientWidth, !(t = o || r)) && ((e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body"));) ;
      var n, i, a, o, r;
      return t
    }, n = function (e) {
      var t = this;
      t.instance = e, t.$bg = e.$refs.bg, t.$stage = e.$refs.stage, t.$container = e.$refs.container, t.destroy(), t.$container.on("touchstart.fb.touch mousedown.fb.touch", m.proxy(t, "ontouchstart"))
    };
  n.prototype.destroy = function () {
    var e = this;
    e.$container.off(".fb.touch"), m(l).off(".fb.touch"), e.requestId && (v(e.requestId), e.requestId = null), e.tapped && (clearTimeout(e.tapped), e.tapped = null)
  }, n.prototype.ontouchstart = function (e) {
    var t = this, n = m(e.target), i = t.instance, a = i.current, o = a.$slide, r = a.$content,
      s = "touchstart" == e.type;
    if (s && t.$container.off("mousedown.fb.touch"), (!e.originalEvent || 2 != e.originalEvent.button) && o.length && n.length && !c(n) && !c(n.parent()) && (n.is("img") || !(e.originalEvent.clientX > n[0].clientWidth + n.offset().left))) {
      if (!a || i.isAnimating || a.$slide.hasClass("fancybox-animated")) return e.stopPropagation(), void e.preventDefault();
      t.realPoints = t.startPoints = u(e), t.startPoints.length && (a.touch && e.stopPropagation(), t.startEvent = e, t.canTap = !0, t.$target = n, t.$content = r, t.opts = a.opts.touch, t.isPanning = !1, t.isSwiping = !1, t.isZooming = !1, t.isScrolling = !1, t.canPan = i.canPan(), t.startTime = (new Date).getTime(), t.distanceX = t.distanceY = t.distance = 0, t.canvasWidth = Math.round(o[0].clientWidth), t.canvasHeight = Math.round(o[0].clientHeight), t.contentLastPos = null, t.contentStartPos = m.fancybox.getTranslate(t.$content) || {
        top: 0,
        left: 0
      }, t.sliderStartPos = m.fancybox.getTranslate(o), t.stagePos = m.fancybox.getTranslate(i.$refs.stage), t.sliderStartPos.top -= t.stagePos.top, t.sliderStartPos.left -= t.stagePos.left, t.contentStartPos.top -= t.stagePos.top, t.contentStartPos.left -= t.stagePos.left, m(l).off(".fb.touch").on(s ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", m.proxy(t, "ontouchend")).on(s ? "touchmove.fb.touch" : "mousemove.fb.touch", m.proxy(t, "ontouchmove")), m.fancybox.isMobile && l.addEventListener("scroll", t.onscroll, !0), ((t.opts || t.canPan) && (n.is(t.$stage) || t.$stage.find(n).length) || (n.is(".fancybox-image") && e.preventDefault(), m.fancybox.isMobile && n.hasClass("fancybox-caption"))) && (t.isScrollable = d(n) || d(n.parent()), m.fancybox.isMobile && t.isScrollable || e.preventDefault(), (1 === t.startPoints.length || a.hasError) && (t.canPan ? (m.fancybox.stop(t.$content), t.isPanning = !0) : t.isSwiping = !0, t.$container.addClass("fancybox-is-grabbing")), 2 === t.startPoints.length && "image" === a.type && (a.isLoaded || a.$ghost) && (t.canTap = !1, t.isSwiping = !1, t.isPanning = !1, t.isZooming = !0, m.fancybox.stop(t.$content), t.centerPointStartX = .5 * (t.startPoints[0].x + t.startPoints[1].x) - m(h).scrollLeft(), t.centerPointStartY = .5 * (t.startPoints[0].y + t.startPoints[1].y) - m(h).scrollTop(), t.percentageOfImageAtPinchPointX = (t.centerPointStartX - t.contentStartPos.left) / t.contentStartPos.width, t.percentageOfImageAtPinchPointY = (t.centerPointStartY - t.contentStartPos.top) / t.contentStartPos.height, t.startDistanceBetweenFingers = y(t.startPoints[0], t.startPoints[1]))))
    }
  }, n.prototype.onscroll = function (e) {
    this.isScrolling = !0, l.removeEventListener("scroll", this.onscroll, !0)
  }, n.prototype.ontouchmove = function (e) {
    var t = this;
    return void 0 !== e.originalEvent.buttons && 0 === e.originalEvent.buttons ? void t.ontouchend(e) : t.isScrolling ? void (t.canTap = !1) : (t.newPoints = u(e), void ((t.opts || t.canPan) && t.newPoints.length && t.newPoints.length && (t.isSwiping && !0 === t.isSwiping || e.preventDefault(), t.distanceX = y(t.newPoints[0], t.startPoints[0], "x"), t.distanceY = y(t.newPoints[0], t.startPoints[0], "y"), t.distance = y(t.newPoints[0], t.startPoints[0]), 0 < t.distance && (t.isSwiping ? t.onSwipe(e) : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()))))
  }, n.prototype.onSwipe = function (e) {
    var t, a = this, o = a.instance, n = a.isSwiping, i = a.sliderStartPos.left || 0;
    if (!0 !== n) "x" == n && (0 < a.distanceX && (a.instance.group.length < 2 || 0 === a.instance.current.index && !a.instance.current.opts.loop) ? i += Math.pow(a.distanceX, .8) : a.distanceX < 0 && (a.instance.group.length < 2 || a.instance.current.index === a.instance.group.length - 1 && !a.instance.current.opts.loop) ? i -= Math.pow(-a.distanceX, .8) : i += a.distanceX), a.sliderLastPos = {
      top: "x" == n ? 0 : a.sliderStartPos.top + a.distanceY,
      left: i
    }, a.requestId && (v(a.requestId), a.requestId = null), a.requestId = b(function () {
      a.sliderLastPos && (m.each(a.instance.slides, function (e, t) {
        var n = t.pos - a.instance.currPos;
        m.fancybox.setTranslate(t.$slide, {
          top: a.sliderLastPos.top,
          left: a.sliderLastPos.left + n * a.canvasWidth + n * t.opts.gutter
        })
      }), a.$container.addClass("fancybox-is-sliding"))
    }); else if (10 < Math.abs(a.distance)) {
      if (a.canTap = !1, o.group.length < 2 && a.opts.vertical ? a.isSwiping = "y" : o.isDragging || !1 === a.opts.vertical || "auto" === a.opts.vertical && 800 < m(h).width() ? a.isSwiping = "x" : (t = Math.abs(180 * Math.atan2(a.distanceY, a.distanceX) / Math.PI), a.isSwiping = 45 < t && t < 135 ? "y" : "x"), "y" === a.isSwiping && m.fancybox.isMobile && a.isScrollable) return void (a.isScrolling = !0);
      o.isDragging = a.isSwiping, a.startPoints = a.newPoints, m.each(o.slides, function (e, t) {
        var n, i;
        m.fancybox.stop(t.$slide), n = m.fancybox.getTranslate(t.$slide), i = m.fancybox.getTranslate(o.$refs.stage), t.$slide.css({
          transform: "",
          opacity: "",
          "transition-duration": ""
        }).removeClass("fancybox-animated").removeClass(function (e, t) {
          return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
        }), t.pos === o.current.pos && (a.sliderStartPos.top = n.top - i.top, a.sliderStartPos.left = n.left - i.left), m.fancybox.setTranslate(t.$slide, {
          top: n.top - i.top,
          left: n.left - i.left
        })
      }), o.SlideShow && o.SlideShow.isActive && o.SlideShow.stop()
    }
  }, n.prototype.onPan = function () {
    var e = this;
    return y(e.newPoints[0], e.realPoints[0]) < (m.fancybox.isMobile ? 10 : 5) ? void (e.startPoints = e.newPoints) : (e.canTap = !1, e.contentLastPos = e.limitMovement(), e.requestId && v(e.requestId), void (e.requestId = b(function () {
      m.fancybox.setTranslate(e.$content, e.contentLastPos)
    })))
  }, n.prototype.limitMovement = function () {
    var e, t, n, i, a, o, r = this, s = r.canvasWidth, l = r.canvasHeight, c = r.distanceX, u = r.distanceY,
      d = r.contentStartPos, p = d.left, f = d.top, g = d.width, h = d.height;
    return a = s < g ? p + c : p, o = f + u, e = Math.max(0, .5 * s - .5 * g), t = Math.max(0, .5 * l - .5 * h), n = Math.min(s - g, .5 * s - .5 * g), i = Math.min(l - h, .5 * l - .5 * h), 0 < c && e < a && (a = e - 1 + Math.pow(-e + p + c, .8) || 0), c < 0 && a < n && (a = n + 1 - Math.pow(n - p - c, .8) || 0), 0 < u && t < o && (o = t - 1 + Math.pow(-t + f + u, .8) || 0), u < 0 && o < i && (o = i + 1 - Math.pow(i - f - u, .8) || 0), {
      top: o,
      left: a
    }
  }, n.prototype.limitPosition = function (e, t, n, i) {
    var a = this.canvasWidth, o = this.canvasHeight;
    return e = a < n ? (e = 0 < e ? 0 : e) < a - n ? a - n : e : Math.max(0, a / 2 - n / 2), {
      top: t = o < i ? (t = 0 < t ? 0 : t) < o - i ? o - i : t : Math.max(0, o / 2 - i / 2),
      left: e
    }
  }, n.prototype.onZoom = function () {
    var e = this, t = e.contentStartPos, n = t.width, i = t.height, a = t.left, o = t.top,
      r = y(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers, s = Math.floor(n * r),
      l = Math.floor(i * r), c = (n - s) * e.percentageOfImageAtPinchPointX,
      u = (i - l) * e.percentageOfImageAtPinchPointY, d = (e.newPoints[0].x + e.newPoints[1].x) / 2 - m(h).scrollLeft(),
      p = (e.newPoints[0].y + e.newPoints[1].y) / 2 - m(h).scrollTop(), f = d - e.centerPointStartX,
      g = {top: o + (u + (p - e.centerPointStartY)), left: a + (c + f), scaleX: r, scaleY: r};
    e.canTap = !1, e.newWidth = s, e.newHeight = l, e.contentLastPos = g, e.requestId && v(e.requestId), e.requestId = b(function () {
      m.fancybox.setTranslate(e.$content, e.contentLastPos)
    })
  }, n.prototype.ontouchend = function (e) {
    var t = this, n = t.isSwiping, i = t.isPanning, a = t.isZooming, o = t.isScrolling;
    return t.endPoints = u(e), t.dMs = Math.max((new Date).getTime() - t.startTime, 1), t.$container.removeClass("fancybox-is-grabbing"), m(l).off(".fb.touch"), l.removeEventListener("scroll", t.onscroll, !0), t.requestId && (v(t.requestId), t.requestId = null), t.isSwiping = !1, t.isPanning = !1, t.isZooming = !1, t.isScrolling = !1, t.instance.isDragging = !1, t.canTap ? t.onTap(e) : (t.speed = 100, t.velocityX = t.distanceX / t.dMs * .5, t.velocityY = t.distanceY / t.dMs * .5, void (i ? t.endPanning() : a ? t.endZooming() : t.endSwiping(n, o)))
  }, n.prototype.endSwiping = function (e, t) {
    var n = this, i = !1, a = n.instance.group.length, o = Math.abs(n.distanceX),
      r = "x" == e && 1 < a && (130 < n.dMs && 10 < o || 50 < o);
    n.sliderLastPos = null, "y" == e && !t && 50 < Math.abs(n.distanceY) ? (m.fancybox.animate(n.instance.current.$slide, {
      top: n.sliderStartPos.top + n.distanceY + 150 * n.velocityY,
      opacity: 0
    }, 200), i = n.instance.close(!0, 250)) : r && 0 < n.distanceX ? i = n.instance.previous(300) : r && n.distanceX < 0 && (i = n.instance.next(300)), !1 !== i || "x" != e && "y" != e || n.instance.centerSlide(200), n.$container.removeClass("fancybox-is-sliding")
  }, n.prototype.endPanning = function () {
    var e, t, n, i = this;
    i.contentLastPos && (t = !1 === i.opts.momentum || 350 < i.dMs ? (e = i.contentLastPos.left, i.contentLastPos.top) : (e = i.contentLastPos.left + 500 * i.velocityX, i.contentLastPos.top + 500 * i.velocityY), (n = i.limitPosition(e, t, i.contentStartPos.width, i.contentStartPos.height)).width = i.contentStartPos.width, n.height = i.contentStartPos.height, m.fancybox.animate(i.$content, n, 330))
  }, n.prototype.endZooming = function () {
    var e, t, n, i, a = this, o = a.instance.current, r = a.newWidth, s = a.newHeight;
    a.contentLastPos && (e = a.contentLastPos.left, i = {
      top: t = a.contentLastPos.top,
      left: e,
      width: r,
      height: s,
      scaleX: 1,
      scaleY: 1
    }, m.fancybox.setTranslate(a.$content, i), r < a.canvasWidth && s < a.canvasHeight ? a.instance.scaleToFit(150) : r > o.width || s > o.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (n = a.limitPosition(e, t, r, s), m.fancybox.animate(a.$content, n, 150)))
  }, n.prototype.onTap = function (n) {
    var e, i = this, t = m(n.target), a = i.instance, o = a.current, r = n && u(n) || i.startPoints,
      s = r[0] ? r[0].x - m(h).scrollLeft() - i.stagePos.left : 0,
      l = r[0] ? r[0].y - m(h).scrollTop() - i.stagePos.top : 0, c = function (e) {
        var t = o.opts[e];
        if (m.isFunction(t) && (t = t.apply(a, [o, n])), t) switch (t) {
          case"close":
            a.close(i.startEvent);
            break;
          case"toggleControls":
            a.toggleControls();
            break;
          case"next":
            a.next();
            break;
          case"nextOrClose":
            1 < a.group.length ? a.next() : a.close(i.startEvent);
            break;
          case"zoom":
            "image" == o.type && (o.isLoaded || o.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(s, l) : a.group.length < 2 && a.close(i.startEvent))
        }
      };
    if ((!n.originalEvent || 2 != n.originalEvent.button) && (t.is("img") || !(s > t[0].clientWidth + t.offset().left))) {
      if (t.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) e = "Outside"; else if (t.is(".fancybox-slide")) e = "Slide"; else {
        if (!a.current.$content || !a.current.$content.find(t).addBack().filter(t).length) return;
        e = "Content"
      }
      if (i.tapped) {
        if (clearTimeout(i.tapped), i.tapped = null, 50 < Math.abs(s - i.tapX) || 50 < Math.abs(l - i.tapY)) return this;
        c("dblclick" + e)
      } else i.tapX = s, i.tapY = l, o.opts["dblclick" + e] && o.opts["dblclick" + e] !== o.opts["click" + e] ? i.tapped = setTimeout(function () {
        i.tapped = null, a.isAnimating || c("click" + e)
      }, 500) : c("click" + e);
      return this
    }
  }, m(l).on("onActivate.fb", function (e, t) {
    t && !t.Guestures && (t.Guestures = new n(t))
  }).on("beforeClose.fb", function (e, t) {
    t && t.Guestures && t.Guestures.destroy()
  })
}(window, document, jQuery), function (r, s) {
  "use strict";
  s.extend(!0, s.fancybox.defaults, {
    btnTpl: {slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},
    slideShow: {autoStart: !1, speed: 3e3, progress: !0}
  });
  var n = function (e) {
    this.instance = e, this.init()
  };
  s.extend(n.prototype, {
    timer: null, isActive: !1, $button: null, init: function () {
      var e = this, t = e.instance, n = t.group[t.currIndex].opts.slideShow;
      e.$button = t.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        e.toggle()
      }), t.group.length < 2 || !n ? e.$button.hide() : n.progress && (e.$progress = s('<div class="fancybox-progress"></div>').appendTo(t.$refs.inner))
    }, set: function (e) {
      var t = this, n = t.instance, i = n.current;
      i && (!0 === e || i.opts.loop || n.currIndex < n.group.length - 1) ? t.isActive && "video" !== i.contentType && (t.$progress && s.fancybox.animate(t.$progress.show(), {scaleX: 1}, i.opts.slideShow.speed), t.timer = setTimeout(function () {
        n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0)
      }, i.opts.slideShow.speed)) : (t.stop(), n.idleSecondsCounter = 0, n.showControls())
    }, clear: function () {
      clearTimeout(this.timer), this.timer = null, this.$progress && this.$progress.removeAttr("style").hide()
    }, start: function () {
      var e = this, t = e.instance.current;
      t && (e.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), e.isActive = !0, t.isComplete && e.set(!0), e.instance.trigger("onSlideShowChange", !0))
    }, stop: function () {
      var e = this, t = e.instance.current;
      e.clear(), e.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), e.isActive = !1, e.instance.trigger("onSlideShowChange", !1), e.$progress && e.$progress.removeAttr("style").hide()
    }, toggle: function () {
      this.isActive ? this.stop() : this.start()
    }
  }), s(r).on({
    "onInit.fb": function (e, t) {
      t && !t.SlideShow && (t.SlideShow = new n(t))
    }, "beforeShow.fb": function (e, t, n, i) {
      var a = t && t.SlideShow;
      i ? a && n.opts.slideShow.autoStart && a.start() : a && a.isActive && a.clear()
    }, "afterShow.fb": function (e, t, n) {
      var i = t && t.SlideShow;
      i && i.isActive && i.set()
    }, "afterKeydown.fb": function (e, t, n, i, a) {
      var o = t && t.SlideShow;
      !o || !n.opts.slideShow || 80 !== a && 32 !== a || s(r.activeElement).is("button,a,input") || (i.preventDefault(), o.toggle())
    }, "beforeClose.fb onDeactivate.fb": function (e, t) {
      var n = t && t.SlideShow;
      n && n.stop()
    }
  }), s(r).on("visibilitychange", function () {
    var e = s.fancybox.getInstance(), t = e && e.SlideShow;
    t && t.isActive && (r.hidden ? t.clear() : t.set())
  })
}(document, jQuery), function (o, n) {
  "use strict";
  var i = function () {
    for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], t = {}, n = 0; n < e.length; n++) {
      var i = e[n];
      if (i && i[1] in o) {
        for (var a = 0; a < i.length; a++) t[e[0][a]] = i[a];
        return t
      }
    }
    return !1
  }();
  if (i) {
    var a = {
      request: function (e) {
        (e = e || o.documentElement)[i.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
      }, exit: function () {
        o[i.exitFullscreen]()
      }, toggle: function (e) {
        e = e || o.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
      }, isFullscreen: function () {
        return Boolean(o[i.fullscreenElement])
      }, enabled: function () {
        return Boolean(o[i.fullscreenEnabled])
      }
    };
    n.extend(!0, n.fancybox.defaults, {
      btnTpl: {fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},
      fullScreen: {autoStart: !1}
    }), n(o).on(i.fullscreenchange, function () {
      var e = a.isFullscreen(), t = n.fancybox.getInstance();
      t && (t.current && "image" === t.current.type && t.isAnimating && (t.current.$content.css("transition", "none"), t.isAnimating = !1, t.update(!0, !0, 0)), t.trigger("onFullscreenChange", e), t.$refs.container.toggleClass("fancybox-is-fullscreen", e), t.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !e).toggleClass("fancybox-button--fsexit", e))
    })
  }
  n(o).on({
    "onInit.fb": function (e, t) {
      return i ? void (t && t.group[t.currIndex].opts.fullScreen ? (t.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
        e.stopPropagation(), e.preventDefault(), a.toggle()
      }), t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && a.request(), t.FullScreen = a) : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()) : void t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
    }, "afterKeydown.fb": function (e, t, n, i, a) {
      t && t.FullScreen && 70 === a && (i.preventDefault(), t.FullScreen.toggle())
    }, "beforeClose.fb": function (e, t) {
      t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && a.exit()
    }
  })
}(document, jQuery), function (e, o) {
  "use strict";
  var r = "fancybox-thumbs", s = r + "-active";
  o.fancybox.defaults = o.extend(!0, {
    btnTpl: {thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},
    thumbs: {autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y"}
  }, o.fancybox.defaults);
  var i = function (e) {
    this.init(e)
  };
  o.extend(i.prototype, {
    $button: null, $grid: null, $list: null, isVisible: !1, isActive: !1, init: function (e) {
      var t = this, n = e.group, i = 0;
      t.instance = e, t.opts = n[e.currIndex].opts.thumbs, (e.Thumbs = t).$button = e.$refs.toolbar.find("[data-fancybox-thumbs]");
      for (var a = 0, o = n.length; a < o && (n[a].thumb && i++, !(1 < i)); a++) ;
      1 < i && t.opts ? (t.$button.removeAttr("style").on("click", function () {
        t.toggle()
      }), t.isActive = !0) : t.$button.hide()
    }, create: function () {
      var n, e = this, t = e.instance, i = e.opts.parentEl, a = [];
      e.$grid || (e.$grid = o('<div class="' + r + " " + r + "-" + e.opts.axis + '"></div>').appendTo(t.$refs.container.find(i).addBack().filter(i)), e.$grid.on("click", "a", function () {
        t.jumpTo(o(this).attr("data-index"))
      })), e.$list || (e.$list = o('<div class="' + r + '__list">').appendTo(e.$grid)), o.each(t.group, function (e, t) {
        (n = t.thumb) || "image" !== t.type || (n = t.src), a.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (n && n.length ? ' style="background-image:url(' + n + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
      }), e.$list[0].innerHTML = a.join(""), "x" === e.opts.axis && e.$list.width(parseInt(e.$grid.css("padding-right"), 10) + t.group.length * e.$list.children().eq(0).outerWidth(!0))
    }, focus: function (e) {
      var t, n, i = this, a = i.$list, o = i.$grid;
      i.instance.current && (n = (t = a.children().removeClass(s).filter('[data-index="' + i.instance.current.index + '"]').addClass(s)).position(), "y" === i.opts.axis && (n.top < 0 || n.top > a.height() - t.outerHeight()) ? a.stop().animate({scrollTop: a.scrollTop() + n.top}, e) : "x" === i.opts.axis && (n.left < o.scrollLeft() || n.left > o.scrollLeft() + (o.width() - t.outerWidth())) && a.parent().stop().animate({scrollLeft: n.left}, e))
    }, update: function () {
      var e = this;
      e.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), e.isVisible ? (e.$grid || e.create(), e.instance.trigger("onThumbsShow"), e.focus(0)) : e.$grid && e.instance.trigger("onThumbsHide"), e.instance.update()
    }, hide: function () {
      this.isVisible = !1, this.update()
    }, show: function () {
      this.isVisible = !0, this.update()
    }, toggle: function () {
      this.isVisible = !this.isVisible, this.update()
    }
  }), o(e).on({
    "onInit.fb": function (e, t) {
      var n;
      t && !t.Thumbs && ((n = new i(t)).isActive && !0 === n.opts.autoStart && n.show())
    }, "beforeShow.fb": function (e, t, n, i) {
      var a = t && t.Thumbs;
      a && a.isVisible && a.focus(i ? 0 : 250)
    }, "afterKeydown.fb": function (e, t, n, i, a) {
      var o = t && t.Thumbs;
      o && o.isActive && 71 === a && (i.preventDefault(), o.toggle())
    }, "beforeClose.fb": function (e, t) {
      var n = t && t.Thumbs;
      n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
    }
  })
}(document, jQuery), function (e, r) {
  "use strict";
  r.extend(!0, r.fancybox.defaults, {
    btnTpl: {share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},
    share: {
      url: function (e, t) {
        return !e.currentHash && "inline" !== t.type && "html" !== t.type && (t.origSrc || t.src) || window.location
      },
      tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
    }
  }), r(e).on("click", "[data-fancybox-share]", function () {
    var e, t, n, i, a = r.fancybox.getInstance(), o = a.current || null;
    o && ("function" === r.type(o.opts.share.url) && (e = o.opts.share.url.apply(o, [a, o])), t = o.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === o.type ? encodeURIComponent(o.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(e)).replace(/\{\{url_raw\}\}/g, (n = e, i = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    }, String(n).replace(/[&<>"'`=\/]/g, function (e) {
      return i[e]
    }))).replace(/\{\{descr\}\}/g, a.$caption ? encodeURIComponent(a.$caption.text()) : ""), r.fancybox.open({
      src: a.translate(a, t),
      type: "html",
      opts: {
        touch: !1, animationEffect: !1, afterLoad: function (e, t) {
          a.$refs.container.one("beforeClose.fb", function () {
            e.close(null, 0)
          }), t.$content.find(".fancybox-share__button").click(function () {
            return window.open(this.href, "Share", "width=550, height=450"), !1
          })
        }, mobile: {autoFocus: !1}
      }
    }))
  })
}(document, jQuery), function (o, r, a) {
  "use strict";

  function s() {
    var e = o.location.hash.substr(1), t = e.split("-"),
      n = 1 < t.length && /^\+?\d+$/.test(t[t.length - 1]) && parseInt(t.pop(-1), 10) || 1;
    return {hash: e, index: n < 1 ? 1 : n, gallery: t.join("-")}
  }

  function t(e) {
    "" !== e.gallery && a("[data-fancybox='" + a.escapeSelector(e.gallery) + "']").eq(e.index - 1).focus().trigger("click.fb-start")
  }

  function l(e) {
    var t, n;
    return !!e && ("" !== (n = (t = e.current ? e.current.opts : e.opts).hash || (t.$orig ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger") : "")) && n)
  }

  a.escapeSelector || (a.escapeSelector = function (e) {
    return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (e, t) {
      return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
    })
  }), a(function () {
    !1 !== a.fancybox.defaults.hash && (a(r).on({
      "onInit.fb": function (e, t) {
        var n, i;
        !1 !== t.group[t.currIndex].opts.hash && (n = s(), (i = l(t)) && n.gallery && i == n.gallery && (t.currIndex = n.index - 1))
      }, "beforeShow.fb": function (e, t, n, i) {
        var a;
        n && !1 !== n.opts.hash && ((a = l(t)) && (t.currentHash = a + (1 < t.group.length ? "-" + (n.index + 1) : ""), o.location.hash !== "#" + t.currentHash && (i && !t.origHash && (t.origHash = o.location.hash), t.hashTimer && clearTimeout(t.hashTimer), t.hashTimer = setTimeout(function () {
          "replaceState" in o.history ? (o.history[i ? "pushState" : "replaceState"]({}, r.title, o.location.pathname + o.location.search + "#" + t.currentHash), i && (t.hasCreatedHistory = !0)) : o.location.hash = t.currentHash, t.hashTimer = null
        }, 300))))
      }, "beforeClose.fb": function (e, t, n) {
        !1 !== n.opts.hash && (clearTimeout(t.hashTimer), t.currentHash && t.hasCreatedHistory ? o.history.back() : t.currentHash && ("replaceState" in o.history ? o.history.replaceState({}, r.title, o.location.pathname + o.location.search + (t.origHash || "")) : o.location.hash = t.origHash), t.currentHash = null)
      }
    }), a(o).on("hashchange.fb", function () {
      var e = s(), i = null;
      a.each(a(".fancybox-container").get().reverse(), function (e, t) {
        var n = a(t).data("FancyBox");
        if (n && n.currentHash) return i = n, !1
      }), i ? i.currentHash === e.gallery + "-" + e.index || 1 === e.index && i.currentHash == e.gallery || (i.currentHash = null, i.close()) : "" !== e.gallery && t(e)
    }), setTimeout(function () {
      a.fancybox.getInstance() || t(s())
    }, 50))
  })
}(window, document, jQuery), function (e, t) {
  "use strict";
  var a = (new Date).getTime();
  t(e).on({
    "onInit.fb": function (e, i, t) {
      i.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
        var t = i.current, n = (new Date).getTime();
        i.group.length < 2 || !1 === t.opts.wheel || "auto" === t.opts.wheel && "image" !== t.type || (e.preventDefault(), e.stopPropagation(), t.$slide.hasClass("fancybox-animated") || (e = e.originalEvent || e, n - a < 250 || (a = n, i[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]())))
      })
    }
  })
}(document, jQuery), function (e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.Headroom = t()
}(this, function () {
  "use strict";

  function e(e) {
    this.callback = e, this.ticking = !1
  }

  function i(e, t) {
    var n;
    t = function e(t) {
      if (arguments.length <= 0) throw new Error("Missing arguments in extend function");
      var n, i, a, o = t || {};
      for (i = 1; i < arguments.length; i++) {
        var r = arguments[i] || {};
        for (n in r) "object" != typeof o[n] || (a = o[n]) && "undefined" != typeof window && (a === window || a.nodeType) ? o[n] = o[n] || r[n] : o[n] = e(o[n], r[n])
      }
      return o
    }(t, i.options), this.lastKnownScrollY = 0, this.elem = e, this.tolerance = (n = t.tolerance) === Object(n) ? n : {
      down: n,
      up: n
    }, this.classes = t.classes, this.offset = t.offset, this.scroller = t.scroller, this.initialised = !1, this.onPin = t.onPin, this.onUnpin = t.onUnpin, this.onTop = t.onTop, this.onNotTop = t.onNotTop, this.onBottom = t.onBottom, this.onNotBottom = t.onNotBottom
  }

  var t = {
    bind: !!function () {
    }.bind,
    classList: "classList" in document.documentElement,
    rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
  };
  return window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, e.prototype = {
    constructor: e,
    update: function () {
      this.callback && this.callback(), this.ticking = !1
    },
    requestTick: function () {
      this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0)
    },
    handleEvent: function () {
      this.requestTick()
    }
  }, i.prototype = {
    constructor: i, init: function () {
      if (i.cutsTheMustard) return this.debouncer = new e(this.update.bind(this)), this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this
    }, destroy: function () {
      var e = this.classes;
      for (var t in this.initialised = !1, e) e.hasOwnProperty(t) && this.elem.classList.remove(e[t]);
      this.scroller.removeEventListener("scroll", this.debouncer, !1)
    }, attachEvent: function () {
      this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent())
    }, unpin: function () {
      var e = this.elem.classList, t = this.classes;
      !e.contains(t.pinned) && e.contains(t.unpinned) || (e.add(t.unpinned), e.remove(t.pinned), this.onUnpin && this.onUnpin.call(this))
    }, pin: function () {
      var e = this.elem.classList, t = this.classes;
      e.contains(t.unpinned) && (e.remove(t.unpinned), e.add(t.pinned), this.onPin && this.onPin.call(this))
    }, top: function () {
      var e = this.elem.classList, t = this.classes;
      e.contains(t.top) || (e.add(t.top), e.remove(t.notTop), this.onTop && this.onTop.call(this))
    }, notTop: function () {
      var e = this.elem.classList, t = this.classes;
      e.contains(t.notTop) || (e.add(t.notTop), e.remove(t.top), this.onNotTop && this.onNotTop.call(this))
    }, bottom: function () {
      var e = this.elem.classList, t = this.classes;
      e.contains(t.bottom) || (e.add(t.bottom), e.remove(t.notBottom), this.onBottom && this.onBottom.call(this))
    }, notBottom: function () {
      var e = this.elem.classList, t = this.classes;
      e.contains(t.notBottom) || (e.add(t.notBottom), e.remove(t.bottom), this.onNotBottom && this.onNotBottom.call(this))
    }, getScrollY: function () {
      return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop
    }, getViewportHeight: function () {
      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }, getElementPhysicalHeight: function (e) {
      return Math.max(e.offsetHeight, e.clientHeight)
    }, getScrollerPhysicalHeight: function () {
      return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller)
    }, getDocumentHeight: function () {
      var e = document.body, t = document.documentElement;
      return Math.max(e.scrollHeight, t.scrollHeight, e.offsetHeight, t.offsetHeight, e.clientHeight, t.clientHeight)
    }, getElementHeight: function (e) {
      return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight)
    }, getScrollerHeight: function () {
      return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller)
    }, isOutOfBounds: function (e) {
      var t = e < 0, n = e + this.getScrollerPhysicalHeight() > this.getScrollerHeight();
      return t || n
    }, toleranceExceeded: function (e, t) {
      return Math.abs(e - this.lastKnownScrollY) >= this.tolerance[t]
    }, shouldUnpin: function (e, t) {
      var n = e > this.lastKnownScrollY, i = e >= this.offset;
      return n && i && t
    }, shouldPin: function (e, t) {
      var n = e < this.lastKnownScrollY, i = e <= this.offset;
      return n && t || i
    }, update: function () {
      var e = this.getScrollY(), t = e > this.lastKnownScrollY ? "down" : "up", n = this.toleranceExceeded(e, t);
      this.isOutOfBounds(e) || (e <= this.offset ? this.top() : this.notTop(), e + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(), this.shouldUnpin(e, n) ? this.unpin() : this.shouldPin(e, n) && this.pin(), this.lastKnownScrollY = e)
    }
  }, i.options = {
    tolerance: {up: 0, down: 0},
    offset: 0,
    scroller: window,
    classes: {
      pinned: "headroom--pinned",
      unpinned: "headroom--unpinned",
      top: "headroom--top",
      notTop: "headroom--not-top",
      bottom: "headroom--bottom",
      notBottom: "headroom--not-bottom",
      initial: "headroom"
    }
  }, i.cutsTheMustard = void 0 !== t && t.rAF && t.bind && t.classList, i
}), function () {
  var e = {exports: null};

  function t(e) {
    var t = [], n = 0;
    if (this.trie = this.createTrie(e.patterns), this.leftMin = e.leftmin, this.rightMin = e.rightmin, this.exceptions = {}, e.exceptions) for (t = e.exceptions.split(/,\s?/g); n < t.length; n += 1) this.exceptions[t[n].replace(/\u2027/g, "").toLowerCase()] = new RegExp("(" + t[n].split("‧").join(")(") + ")", "i")
  }

  t.prototype.createTrie = function (e) {
    var t, n = 0, i = 0, a = 0, o = 0, r = null, s = null, l = null, c = null, u = {_points: []};
    for (n in e) if (e.hasOwnProperty(n)) for (t = e[n].match(new RegExp(".{1," + +n + "}", "g")), i = 0; i < t.length; i += 1) {
      for (r = t[i].replace(/[0-9]/g, "").split(""), s = t[i].split(/\D/), c = u, a = 0; a < r.length; a += 1) c[l = r[a].charCodeAt(0)] || (c[l] = {}), c = c[l];
      for (c._points = [], o = 0; o < s.length; o += 1) c._points[o] = s[o] || 0
    }
    return u
  }, t.prototype.hyphenateText = function (e, t) {
    t = t || 4;
    for (var n = e.split(/([a-zA-Z0-9_\u0027\u00DF-\u00EA\u00EC-\u00EF\u00F1-\u00F6\u00F8-\u00FD\u0101\u0103\u0105\u0107\u0109\u010D\u010F\u0111\u0113\u0117\u0119\u011B\u011D\u011F\u0123\u0125\u012B\u012F\u0131\u0135\u0137\u013C\u013E\u0142\u0144\u0146\u0148\u0151\u0153\u0155\u0159\u015B\u015D\u015F\u0161\u0165\u016B\u016D\u016F\u0171\u0173\u017A\u017C\u017E\u017F\u0219\u021B\u02BC\u0390\u03AC-\u03CE\u03F2\u0401\u0410-\u044F\u0451\u0454\u0456\u0457\u045E\u0491\u0531-\u0556\u0561-\u0587\u0902\u0903\u0905-\u090B\u090E-\u0910\u0912\u0914-\u0928\u092A-\u0939\u093E-\u0943\u0946-\u0948\u094A-\u094D\u0982\u0983\u0985-\u098B\u098F\u0990\u0994-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BE-\u09C3\u09C7\u09C8\u09CB-\u09CD\u09D7\u0A02\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A14-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A82\u0A83\u0A85-\u0A8B\u0A8F\u0A90\u0A94-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABE-\u0AC3\u0AC7\u0AC8\u0ACB-\u0ACD\u0B02\u0B03\u0B05-\u0B0B\u0B0F\u0B10\u0B14-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3E-\u0B43\u0B47\u0B48\u0B4B-\u0B4D\u0B57\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB5\u0BB7-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C02\u0C03\u0C05-\u0C0B\u0C0E-\u0C10\u0C12\u0C14-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3E-\u0C43\u0C46-\u0C48\u0C4A-\u0C4D\u0C82\u0C83\u0C85-\u0C8B\u0C8E-\u0C90\u0C92\u0C94-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBE-\u0CC3\u0CC6-\u0CC8\u0CCA-\u0CCD\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D3E-\u0D43\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D60\u0D61\u0D7A-\u0D7F\u1F00-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB2-\u1FB4\u1FB6\u1FB7\u1FBD\u1FBF\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD2\u1FD3\u1FD6\u1FD7\u1FE2-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u200D\u2019]+)/g), i = 0; i < n.length; i += 1) -1 !== n[i].indexOf("/") ? 0 === i || i === n.length - 1 || /\s+\/|\/\s+/.test(n[i]) || (n[i] += "​") : n[i].length > t && (n[i] = this.hyphenate(n[i]).join("­"));
    return n.join("")
  }, t.prototype.hyphenate = function (e) {
    var t, n, i, a, o, r, s, l, c, u = [], d = [], p = e.toLowerCase(), f = Math.max, g = this.trie, h = [""];
    if (this.exceptions.hasOwnProperty(p)) return e.match(this.exceptions[p]).slice(1);
    if (-1 !== e.indexOf("­")) return [e];
    for (t = (e = "_" + e + "_").toLowerCase().split(""), n = e.split(""), s = t.length, i = 0; i < s; i += 1) d[i] = 0, u[i] = t[i].charCodeAt(0);
    for (i = 0; i < s; i += 1) for (r = g, a = i; a < s && (r = r[u[a]]); a += 1) if (l = r._points) for (o = 0, c = l.length; o < c; o += 1) d[i + o] = f(d[i + o], l[o]);
    for (i = 1; i < s - 1; i += 1) i > this.leftMin && i < s - this.rightMin && d[i] % 2 ? h.push(n[i]) : h[h.length - 1] += n[i];
    return h
  }, e.exports = t, window.Hypher = e.exports, window.Hypher.languages = {}
}(), jQuery.fn.hyphenate = function (n) {
  if (window.Hypher.languages[n]) return this.each(function () {
    for (var e = 0, t = this.childNodes.length; e < t; e += 1) 3 === this.childNodes[e].nodeType && (this.childNodes[e].nodeValue = window.Hypher.languages[n].hyphenateText(this.childNodes[e].nodeValue))
  })
}, function () {
  var e = {
    exports: null, exports: {
      id: ["en-us", "en"], leftmin: 2, rightmin: 3, patterns: {
        3: "x1qei2e1je1f1to2tlou2w3c1tue1q4tvtw41tyo1q4tz4tcd2yd1wd1v1du1ta4eu1pas4y1droo2d1psw24sv1dod1m1fad1j1su4fdo2n4fh1fi4fm4fn1fopd42ft3fu1fy1ga2sss1ru5jd5cd1bg3bgd44uk2ok1cyo5jgl2g1m4pf4pg1gog3p1gr1soc1qgs2oi2g3w1gysk21coc5nh1bck1h1fh1h4hk1zo1ci4zms2hh1w2ch5zl2idc3c2us2igi3hi3j4ik1cab1vsa22btr1w4bp2io2ipu3u4irbk4b1j1va2ze2bf4oar1p4nz4zbi1u2iv4iy5ja1jeza1y1wk1bk3fkh4k1ikk4k1lk1mk5tk1w2ldr1mn1t2lfr1lr3j4ljl1l2lm2lp4ltn1rrh4v4yn1q1ly1maw1brg2r1fwi24ao2mhw4kr1cw5p4mkm1m1mo4wtwy4x1ar1ba2nn5mx1ex1h4mtx3i1muqu2p3wx3o4mwa1jx3p1naai2x1ua2fxx4y1ba2dn1jy1cn3fpr2y1dy1i",
        4: "4dryn2itni4on1inn1im_up3nik4ni4dy5giye4tyes4_ye44ab_nhe4nha4abe2n2gyn1guy1ery5eep2pe4abry3lay3lone4wne4v1nesy3chn1erne2q3neo1nenp2seps4hy2cey5lu2nedne2cyme44nk2y5at2adine2b2ne_y5ac2p1tp2ten1den1cun1cryn5dp2th4adup4twpub3ae4rxu3ayn5gaff4pue4n2au4p1ppuf4n2atag1ipu4mag1na2gon4asx3tix1t2pu2na4gya3haa3heah4la3ho_ti2a5ian2an5puspu2tnak4_th2n1kl_te4_ta4mu4u4mupmun23mum2alex4ob_sy25ynxal1i_st4y1o4xi5cxi5a4alm_si2_sh2m5sixhu4m4sh4m3r4amam2py2rabm2pixhi2yo5dr2ai4m1pmo2vmos2x2edmo2r4n1la2mor2asx3c2xas5yom4x4apxam3nme44mokrbi2nne44andy4osp4ot3noemn4omn4a4m1n4nog4m1l2angws4l1posw3shwri4wra4yp3iwom11wo2m2izrb4ow4nopo4pr2cem2isrd2iano4mig4y3pomi3awiz55mi_no4n4m1fme4v2re_wir42mes1menme2mme2gre1o2med4me_4nop4m5c4m1bwil21noureu2whi4w3ev4maprev2w1era2plpo4crfu4r4fyy5pu2maha3pu2mab2a2rn1p4npi44lyb4lya2p3nwam42l1w1lut4luplu3or1glluf4lu5a2wacltu2y3rol1tr4vv4r3guyr4rl1te4rh_nru4ar1il2sel4sc4l1rl5prl4plys4c4lovri3ar4ib4lof3lo_ar2par3q_os3ll4oll2i4as_ri1o3vokl2levoi44p1mlka35vo_ns4cas4ll1izr4iqr2is3vivl1it3lika2tan2sen2slrle42l3hlgo3l5gal5frns3mvi4p3ley_od2r2meles24athr4myle2al3drv1inldi4l2de2vilnt2il3civik4lce42l1b4lavv3ifrno4r3nua1trr2ocnt4sy4sok4syks4la2tuk4sck3ouko5ryss4a2tyau4b4klyys1tnu1akis4au3rki4pro4ek4ima2va5ki_nu4dn4umn3uokes4k1erav1irok2ke4g1keek2ed_me2aw3ikal4aws4k5agk3ab3ka_aye4ays4veg3jo4p5ba_4vedjew3n1v24ve_ja4pzar23vatizi4n1w41batba4z2b1bb2beix4o4i5w4b1d4be_rox5nym4nyp4n3za4ittr3por1r4i1ti1bel2ith2itei2su4rs2r1sars4cr2seis1p3betvag4i2sor1shbe3wr1sioad34b3hbi2bbi4d3bie3isf4ise2is_1bilr1sp5va_r5sw_le2uz4eir1ibi2tuxu3r1tiu1v2i1raze4nze4pb2l2uu4mo1biip3iz1eripe4b4louts44b1m4b3no3br3bodi4osbo4eru3aio4mi1ol4io_3booo1ce4inyin1u2insru2n2inn4inl4inkrv4e2inioch42iner3vo4indpi2np4idbt4lb4tob3trry4cry3t2in_o4elbu4ni2muim1i5saiil3v4ilnil1iil5fs1apo3er4b5w5by_bys4_in1sau4i1lazet4u2suo3ev2z1ii2go4igius1p5saw4s5bo2fi4ifti3fl4if_i3etsch2usc22ie4i2dui4dri2diid5dpi3au3ruz4ils1cuz4is4s5d4se_se4a2ce_2ici4ich3ceii1bri5bo1ceni1blse2g5seiibe43cepi2aniam4ur2li2al2i1acet4hy2scew41phy4ch_5phuhu4thu4gche2h4tyh4shur1durc44hr44h5p5sev5sexu1ra4s3fup3p2s3gph3t2sh_ho4g2h1n_he23ciau3pl4h1mci5ch2lozo4m4ciihi2vhi4p2cim2cin4phsu1peu1ouo1geu5osheu4sho4he4th1es4shwun5zun5ysi1bunu45cizo4glck3ihep5he2nh4ed1sioph2l5hazsi2rcly4zte4_ge21siscoe22cog5siu1siv5siz_ga24skes1l2s2leha4m2s1ms3ma1ogyo1h2u1ni3gus3gun2guegu4acov1gth3_eu3g4ros1n4_es3u2nez4zyum2pu1mi3som_ev2oig4cri2gov15goos4opgon2ul5v5goeu3lugob53go_2c1t4ph_g1nog1nic2te4sov4ulsgn4ag4myc4twcud5c4ufc4uipe2t3glo1gleul2igla4_eg23giz3cun5givgi4u3gir5gio1cusul4e2spagil4g1ic5gi__eb4cze41d2a5da_u1laggo44daf2dagg2gege4v1geo1gen2ged3dato1la2ge_ol2dol2i5daypek4p4eed1d42de_4gazol2tuiv3ol2vo2lys1sa2gamgaf4o2meui4n2ui2pe2cd4em4fugi4jku3fl3ufaf2tyf4to1denu4du4pe_2f3sfri2de1ps1si4f5pfos5d3eqs4sls4snfo2rss2tdes25fon4p1b_ci23payss5w2st_de1tf4l2de1v2fin4dey4d1fd4gast2idg1id2gyd1h25di_ud5dfi3au4cy_ch4pav43didu3cud1iff2fyu3crd1inst4r4f1ffev4fer11dio2fedfe4bdir2s2ty4fe_dis1on1au3ca4f5bon1c2ondd5k25far4fagpa1peys45eyc1exps4ul2dlyp4ale3whon3s3do_e1wa5doee5vud4oge1visu2msu2nub4euav4su2rp4ai6rk_d4or3dosu1atdo4v3doxp4adoo4k4swoo2padre4eus4e3upe5un2ophet5z4syc3syl4y3hoy1ads4pd4swd4syd2tho4wo3ta_du2c4etn2tabta2luac4es4wdu4g2ess4uabdu4n4duptav4st5bow1io1pr5dyn2tawe1sp2t1bop1uead1tz4et4chopy5ea4l4t1d4te_2tyle1si4esh1tee4tyat1cr4twoteg4es2c4eru1teoer1s2eroea2tte4po1rat1wh3tusea2v3teu3texer1i2e1ber1h4tey2t1f4t1ge3br2th_th2e4thle1ce3tumec2i2ths2erb1tia4tueer1aou5vtud2tif22tige1potu1aou4lttu41timt5toos4le1cre2pat4swe5owe1cue4ottsh4eos4e1ort4sce3ol4edieo2ge5of1tio4eno4enn5tiq4edoti4u1tive3my1tiz4othee2ct5laee2ft5lo4t1mee2mtme4e1meem5bcoi4to3be5exo1ry2tof1effel2iel2ftos24t1pe1la1traos2ceig2ei5de5ico2soe1h45egyeg5n",
        5: "_ach4e4go_e4goseg1ule5gurtre5feg4iceher4eg5ibeger44egaltre4mei5gle3imbe3infe1ingtra3beir4deit3eei3the5ity5triae4jud3efiteki4nek4la2trime4la_e4lactri4v4toute4law5toure3leaefil45elece4ledto2rae5len4tonye1lestro3ve4fic4tonoto3mytom4bto2mato5ice5limto2gre3lioe2listru5i4todo4ellaee4tyello4e5locel5ogeest4el2shel4tae5ludel5uge4mace4mage5man2t1n2ee2s4ee4p1e2mele4metee4naemi4eee4lyeel3i3tled3tle_e4mistlan4eed3iem3iztrus4emo4gti3zaem3pie4mule4dulemu3ne4dritiv4aedon2e4dolti3tle5neae5neeen3emtis4pti5sotis4m3tisee3newti3sae5niee5nile3nioedi5zen3ite5niu5enized1ited3imeno4ge4nosen3oven4swti5oc4t1s2en3uaen5ufe3ny_4en3zed3ibe3diae4oi4ede4s3tini4ed3deo3ret2ina2e2dae4culeo4toe5outec4te4t3t2t4tes2t1ine5pel4timpe2corephe4e4plie2col5tigutu3arti5fytu4bie3pro3tienep4sh5tidie4putt4icoeci4t4tick2ti2bec3imera4bti4aber3ar4tuf45tu3ier4bler3che4cib2ere_4thooecca54thil3thet4thea3turethan4e4cade4bitere4qe4ben5turieret4tur5oeav5oeav5itu5ry4tess4tes_ter5ve1rio4eriter4iueri4v1terier3m4ter3cte5pe4t1waer3noeast3er5obe5rocero4rer1oue3assea5sp1tent4ertler3twtwis4eru4t3tende1s4a3tenc5telsear2te2scateli4e3scres5cue1s2ee2sec3tel_te5giear5kear4cte5diear3ae3sha2t1ede5ande2sice2sid5tecttece44teattype3ty5phesi4uea4gees4mie2sole3acte2sone1a4bdys5pdy4sedu4petaun4d3uleta5sytas4e4tare4tarctar4ata5pl2estrta5mo4talke2surtal3idu5eleta4bta5lae3teoua5naet1ic4taf4etin4ta5doe5tir4taciuan4id1ucad1u1ae3trae3tre2d1s2syn5ouar2d4drowet3uaet5ymdro4pdril4dri4b5dreneu3rouar3ieute44draieu5truar3te2vasdop4pe5veadoo3ddoni4u4belsum3iev1erdoli4do4laev3idevi4le4vinevi4ve5voc2d5ofdo5dee4wage5wee4d1n4ewil54d5lue3wit2d3lou3ber5eye_u1b4i3dledfa3blfab3rfa4ce3dle_fain4suit3su5issu2g34d5lasu4b3fa3tasu1al4fato1di1vd2iti5disiuci4bfeas4di1redi4pl4feca5fectdio5gfe3life4mofen2d4st3wuc4it5ferr5diniucle3f4fesf4fie4stry1dinaf4flydi3ge3dictd4icedia5bs4tops1tle5stirs3tifs4ties1ticfic4is5tias4ti_4ficsfi3cuud3ers3thefil5iste2w4filyudev45finas4tedfi2nes2talfin4ns2tagde2tode4suflin4u1dicf2ly5ud5isu5ditde1scd2es_der5sfon4tu4don5dermss4lid4erhfor4is4siede2pudepi4fra4tf5reade3pade3nufril4frol5ud4side3nou4eneuens4ug5infu5el5dem_s5setfu5nefu3rifusi4fus4s4futade5lode5if4dee_5gal_3galiga3lo2d1eds3selg5amos2s5cssas3u1ing4ganouir4mgass4gath3uita4deaf5dav5e5dav44dato4darygeez44spotspor4s4pon4gelydark5s4ply4spio4geno4genydard5ge3omg4ery5gesigeth54getoge4tydan3g4g1g2da2m2g3gergglu5dach4gh3inspil4gh4to4cutr1gi4agia5rula5bspho5g4icogien5s2pheulch42sperspa4n5spai3c4utu1lenul4gigir4lg3islcu5pycu3picu4mic3umecu2maso5vi5glasu5liagli4bg3lig5culiglo3r4ul3mctu4ru1l4og4na_c3terul1tig2ning4nio4ultug4noncta4b4c3s2cru4dul5ulsor5dgo3isum5absor5ccris4go3nic4rinson4gsona45gos_cri5fcre4vum4bi5credg4raigran25solvsoft3so4ceunat44graygre4nco5zi4gritcoz5egruf4cow5ag5stecove4cos4es5menun4ersmel44corbco4pl4gu4tco3pacon5tsman3gy5racon3ghach4hae4mhae4th5aguha3lac4onecon4aun4ims3latu2ninhan4gs3ket5colocol5ihan4kuni3vhap3lhap5ttras4co4grhar2dco5agsir5aclim45sionhas5shaun44clichaz3acle4m1head3hearun3s4s3ingun4sws2ina2s1in4silysil4eh5elohem4p4clarhena45sidiheo5r1c4l4h4eras5icc2c1itu4orsh3ernshor4h3eryci3phshon34cipecion45cinoc1ingc4inahi5anhi4cohigh5h4il2shiv5h4ina3ship3cilihir4lhi3rohir4phir4rsh3iohis4ssh1inci4lau5pia4h1l4hlan44cier5shevcia5rhmet4ch4tish1erh5ods3cho2hoge4chi2z3chitho4mahome3hon4aho5ny3hoodhoon45chiouptu44ura_ho5ruhos4esew4ihos1p1housu4ragses5tu4rasur4behree5se5shs1e4s4h1s24chedh4tarht1enht5esur4fru3rifser4os4erlhun4tsen5gur1inu3riosen4dhy3pehy3phu1ritces5tur3iz4cesa4sencur4no4iancian3i4semeia5peiass45selv5selfi4atu3centse1le4ceniib5iaib3inseg3ruros43cencib3li3cell5cel_s5edli5bun4icam5icap4icar4s4ed3secticas5i4cayiccu44iceour4pe4ced_i5cidsea5wi2cipseas4i4clyur4pi4i1cr5icrai4cryic4teictu2ccon4urti4ic4umic5uoi3curcci4ai4daiccha5ca4thscof4ide4s4casys4cliscle5i5dieid3ios4choid1itid5iui3dlei4domid3owu5sadu5sanid5uous4apied4ecany4ield3s4cesien4ei5enn4sceii1er_i3esci1estus3ciuse5as4cedscav5if4frsca4pi3fieu5siau3siccan4eiga5bcan5d4calous5sli3gibig3ilig3inig3iti4g4lus1trig3orig5oti5greigu5iig1ur2c5ah4i5i44cag4cach4ca1blusur4sat3usa5tab5utoi3legil1erilev4uta4b4butail3iail2ibil3io3sanc2ilitil2izsal4t5bustil3oqil4tyil5uru3tati4magsa5losal4m4ute_4imetbu3res3act5sack2s1ab4imitim4nii3mon4utelbumi4bu3libu4ga4inav4utenbsor42b5s2u4tis4briti3neervi4vr3vic4inga4inger3vey4ingir3ven4ingo4inguu4t1li5ni_i4niain3ioin1isbo4tor5uscrunk5both5b5ota5bos42i1no5boriino4si4not5borein3seru3in2int_ru4glbor5di5nusut5of5bor_uto5gioge4io2grbon4au5tonru3enu4touion3iio5phior3ibod3iio5thi5otiio4toi4ourbne5gb3lisrt4shblen4ip4icr3triip3uli3quar4tivr3tigrti4db4le_b5itzira4bi4racird5ert5ibi4refbi3tri4resir5gibi5ourte5oir4isr3tebr4tagbin4diro4gvac3uir5ul2b3ifis5agis3arisas52is1cis3chbi4eris3erbi5enrson3be5yor5shais3ibisi4di5sisbe3tw4is4krs3es4ismsbe5trr3secva4geis2piis4py4is1sbe3sp4bes4be5nuval5ois1teis1tirrys4rros44be5mis5us4ita_rron4i4tagrri4vi3tani3tatbe3lorri4or4reoit4esbe1libe5gu4itiarre4frre4cbe3giit3igbe3dii2tim2itio4itisrp4h4r3pet4itonr4peait5rybe3debe3dai5tudit3ul4itz_4be2dbeat3beak4ro4varo4tyros4sro5roiv5ioiv1itror3i5root1roomval1ub3berva5mo4izarva5piron4eban3ijac4qban4ebal1ajer5srom4prom4iba4geazz5i5judgay5alax4idax4ickais4aw4ly3awaya1vorav5ocav3igke5liv3el_ve4lov4elyro1feke4tyv4erdv4e2sa5vanav3ag5k2ick4illkilo5au1thk4in_4ves_ro3crkin4gve4teaun5dk5ishau4l2au3gu4kleyaugh3ve4tyk5nes1k2noat3ulkosh4at5uekro5n4k1s2at5uaat4that5te5vianat4sk5vidil4abolaci4l4adela3dylag4nlam3o3landrob3la4tosr4noular4glar3ilas4ea4topr3nivr3nita2tomr5nica4toglbin44l1c2vi5gnat3ifat1ica5tiar3neyr5net4ati_ld5isat4hol4driv2incle4bileft55leg_5leggr4nerr3nel4len_3lencr4nar1lentle3phle4prvin5dler4e3lergr3mitl4eroat5evr4mio5lesq3lessr3menl3eva4vingrma5cvio3lvi1ou4leyevi5rovi3so4l1g4vi3sulgar3l4gesate5cat5apli4agli2amr3lo4li4asr4lisli5bir4ligr2led4lics4vitil4icul3icyl3idaat5ac3lidirk4lel4iffli4flr3ket3lighvit3r4vityriv3iri2tulim3ili4moris4pl4inar3ishris4clin3ir4is_li5og4l4iqlis4pas1trl2it_as4shas5phri2pla4socask3ia3sicl3kallka4ta3sibl4lawashi4l5leal3lecl3legl3lel5riphas4abar2shrin4grin4ear4sarin4dr2inal5lowarre4l5met3rimol4modlmon42l1n2a3roorim5ilo4civo4la5rigil5ogo3loguri5et5longlon4iri1erlood5r4icolop3il3opmlora44ricir4icerib3a5los_v5oleri4agria4blos4tlo4taar2mi2loutar2izar3iolpa5bl3phal5phi4rhall3pit5voltar4im3volv2l1s2vom5ivori4l4siear4fllt5agar4fivo4rylten4vo4talth3ia3reeltis4ar4drw5ablrgo4naraw4lu3brluch4lu3cilu3enwag5olu5idlu4ma5lumia5raur5gitwait5luo3rw5al_luss4r5gisar4atl5venrgi4nara3pwar4tar3alwas4tly5mely3no2lys4l5ysewa1teaque5ma2car3gicma4clr3get5magnwed4nmaid54maldrg3erweet3wee5vwel4lapoc5re4whwest3ap3in4aphires2tr4es_mar3vre5rumas4emas1t5matemath3rero4r4eriap5atr1er4m5bilre1pumbi4vapar4a5nuran3ul4med_an3uare5lure1lian4twre5itmel4tan2trre4fy4antomen4are3fire2fe4menemen4imens4re1de3ment2r2edme5onre4awwin4g5reavme4tare3anme1tere1alm4etr3wiserdin4rdi4aan4stwith3an2span4snan2samid4amid4gan5otwl4esr4dalm4illmin4a3mindrcum3rc4itr3charcen4min4tm4inumiot4wl3ina3niumis5lan3ita3nip4mithan3ioan1gla3neuws4per2bina3nena5neem4ninw5s4tan1dl4mocrrbi4fmo2d1mo4gomois2xac5ex4agor4bagmo3mer4baba3narrau4ta5monrare4rar5cra5nor4aniam1inr2amiam5ifra4lomo3spmoth3m5ouf3mousam3icxer4ixe5roraf4tr5aclm3petra3bixhil5mpi4aam3ag3quetm5pirmp5is3quer2que_qua5vmpov5mp4tram5ab3alyz4m1s25alyt4alysa4ly_ali4exi5di5multx4ime4aldia4laral3adal5abak1enain5opu3trn4abu4nac_na4can5act5putexpe3dna4lia4i4n4naltai5lya3ic_pur4rag5ulnank4nar3c4narenar3inar4ln5arm3agognas4c4ag4l4ageupul3cage4oaga4na4gab3nautnav4e4n1b4ncar5ad5umn3chaa3ducptu4rpti3mnc1innc4itad4suad3owad4len4dain5dana5diua3ditndi4ba3dion1ditn3dizn5ducndu4rnd2we3yar4n3eara3dianeb3uac4um5neckac3ulp4siba3cio5negene4laac1inne5mine4moa3cie4nene4a2cine4poyc5erac1er2p1s2pro1tn2erepro3lner4rych4e2nes_4nesp2nest4neswpri4sycom4n5evea4carab3uln4gabn3gelpre3vpre3rycot4ng5han3gibng1inn5gitn4glangov4ng5shabi5an4gumy4erf4n1h4a5bannhab3a5bal3n4iani3anni4apni3bani4bl_us5ani5dini4erni2fip3petn5igr_ure3_un3up3per_un5op3pennin4g_un5k5nis_p5pel_un1en4ithp4ped_un1ani3tr_to4pympa3_til4n3ketnk3inyn5ic_se2ny4o5gy4onsnmet44n1n2_ru4d5pounnni4vnob4lpo4tan5ocly4ped_ro4qyper5noge4pos1s_ri4gpo4ry1p4or_res2no4mono3my_ree2po4ninon5ipoin2y4poc5po4gpo5em5pod_4noscnos4enos5tno5tayp2ta3noun_ra4cnowl3_pi2tyra5m_pi4eyr5ia_out3_oth32n1s2ns5ab_or3t_or1d_or3cplu4mnsid1nsig4y3s2eys3ion4socns4pen5spiploi4_odd5nta4bpli4n_ni4cn5tib4plignti2fpli3a3plannti4p1p2l23ysis2p3k2ys3ta_mis1nu5enpi2tun3uinp3ithysur4nu1men5umi3nu4nyt3icnu3trz5a2b_li4t_li3o_li2n_li4g_lev1_lep5_len4pion4oard3oas4e3pi1ooat5ip4inoo5barobe4l_la4mo2binpind4_ju3rob3ul_is4i_ir5rp4in_ocif3o4cil_in3so4codpi3lopi3enocre33piec5pidipi3dep5ida_in2kod3icodi3oo2do4odor3pi4cypian4_ine2o5engze3rooe4ta_im3m_id4l_hov5_hi3b_het3_hes3_go4r_gi4bpho4ro5geoo4gero3gie3phobog3it_gi5azo5ol3phizo4groogu5i4z1z22ogyn_fes3ohab5_eye55phieph1icoiff4_en3sph4ero3ing_en3go5ism_to2qans3v_el5d_eer4bbi4to3kenok5iebio5mo4lanper1v4chs_old1eol3erpe5ruo3letol4fi_du4co3liaper3op4ernp4erio5lilpe5ono5liop4encpe4la_do4tpee4do5livcin2q3pediolo4rol5pld3tabol3ub3pedeol3uno5lusedg1le1loaom5ahoma5l2p2edom2beom4bl_de3o3fich3pe4ao4met_co4ro3mia_co3ek3shao5midom1inll1fll3teapa2teo4monom3pi3pare_ca4tlue1pon4aco3nanm2an_pa4pum2en_on5doo3nenng1hoon4guon1ico3nioon1iso5niupa3nypan4ao3nou_bri2pain4ra1oronsu4rk1hopac4tpa4ceon5umonva5_ber4ood5eood5i6rks_oop3io3ordoost5rz1scope5dop1erpa4ca_ba4g_awn4_av4i_au1down5io3pito5pon1sync_as1s_as1p_as3ctch1c_ar5so5ra_ow3elo3visov4enore5auea1mor3eioun2d_ant4orew4or4guou5etou3blo5rilor1ino1rio_ang4o3riuor2miorn2eo5rofoto5sor5pe3orrhor4seo3tisorst4o3tif_an5cor4tyo5rum_al3tos3al_af1tos4ceo4teso4tano5scros2taos4poos4paz2z3wosi4ue3pai",
        6: "os3ityos3itoz3ian_os4i4ey1stroos5tilos5titxquis3_am5atot3er_ot5erso3scopor3thyweek1noth3i4ot3ic_ot5icao3ticeor3thiors5enor3ougor3ityor3icaouch5i4o5ria_ani5mv1ativore5sho5realus2er__an3teover3sov4erttot3icoviti4o5v4olow3dero4r3agow5esto4posiop3ingo5phero5phanthy3sc3operaontif5on3t4ionten45paganp3agattele2gonspi4on3omyon4odipan3elpan4tyon3keyon5est3oncil_ar4tyswimm6par5diompro5par5elp4a4ripar4isomo4gepa5terst5scrpa5thy_atom5sta1tio5miniom3icaom3ic_ss3hatsky1scpear4lom3ena_ba5naol3umer1veilpedia4ped4icolli4er1treuo5liteol3ishpeli4epe4nano5lis_pen4thol3ingp4era_r1thoup4erago3li4f_bas4er1krauperme5ol5id_o3liceper3tio3lescolass4oi3terpe5tenpe5tiz_be5raoi5son_be3smphar5iphe3nooi5letph4es_oi3deroic3esph5ingr3ial_3ognizo5g2ly1o1gis3phone5phonio5geneo4gatora3mour2amenofit4tof5itera3chupi4ciepoly1eod5dedo5cureoc3ula1pole_5ocritpee2v1param4oc3raco4clamo3chetob5ingob3a3boast5eoke1st3nu3itpi5thanuf4fentu3meoerst2o3chasplas5tn3tinepli5ernti4ernter3sntre1pn4s3esplum4bnsati4npre4cns4moonon1eqnor5abpo3et5n5lessn5oniz5pointpoly5tnon4agnk3rup3nomicng1sprno5l4inois5i4n3o2dno3blenni3aln5keroppa5ran3itor3nitionis4ta5nine_ni3miznd3thrmu2dron3geripray4e5precipre5copre3emm3ma1bpre4lan5gerep3rese3press_can5cmedi2c5pri4e_ce4la3neticpris3op3rocal3chain4er5ipros3en4erarnera5bnel5iz_cit5rne4gatn5d2ifpt5a4bjanu3aign4itn3chisn5chiln5cheon4ces_nau3seid4iosna3talnas5tinan4itnanci4na5mitna5liahnau3zput3er2n1a2bhex2a3hatch1multi3hair1sm4pousg1utanmpo3rim4p1inmp5iesmphas4rach4empar5iraf5figriev1mpara5mo5seyram3et4mora_rane5oran4gemo3ny_monol4rap3er3raphymo3nizgno5morar5ef4raril1g2nacg1leadmoni3ara5vairav3elra5ziemon5gemon5etght1wemoi5sege3o1dmma5ryr5bine3fluoren1dixmis4ti_de3ra_de3rie3chasrch4err4ci4bm4inglm5ineedu2al_3miliame3tryrdi4er_des4crd3ingdi2rerme5thimet3alre5arr3mestim5ersadi2rende2ticdes3icre4cremen4temensu5re3disred5itre4facmen4dede2mosmen5acmem1o3reg3ismel5onm5e5dyme3died2d5ibren4te5mediare5pindd5a5bdata1bmba4t5cle4arma3tisma5scemar4lyre4spichs3huma5riz_dumb5re3strre4terbrus4qre3tribio1rhre5utiman3izre4valrev3elbi1orbbe2vie_eas3ire5vilba1thyman5is5maniamal4tymal4lima5linma3ligmag5inav3ioul5vet4rg3inglus3teanti1dl5umn_ltur3a_el3emltera4ltane5lp5ingloun5dans5gra2cabllos5etlor5ouric5aslo5rie_enam35ricidri4cie5lope_rid5erri3encri3ent_semi5lom3errig5an3logicril3iz5rimanlob5allm3ingrim4pell5out5rina__er4ril5linal2lin4l3le4tl3le4nriph5eliv3er_ge5og_han5k_hi3er_hon3olin3ea1l4inel4im4p_idol3_in3ci_la4cy_lath5rit3iclim4blrit5urriv5elriv3et4l4i4lli4gra_leg5elif3errk4linlid5er4lict_li4cor5licioli4atorl5ish_lig5a_mal5o_man5a_mer3c5less_rm5ersrm3ingy3thinle5sco3l4erilera5b5lene__mon3ele4matld4erild4erela4v4ar1nis44lativ_mo3rola5tanlan4telan5etlan4dllab3ic_mu5takin4dek3est_ro5filk3en4dro5ker5role__of5te4jestyys3icaron4al5izont_os4tlron4tai4v3ot_pe5tero3pelrop3ici5voreiv5il__pio5n_pre3mro4the_ran4tiv3en_rov5eliv3ellit3uati4tramr5pentrp5er__rit5ui4tismrp3ingit5ill_ros5tit3ica4i2tici5terirre4stit3era4ita5mita4bi_row5dist4lyis4ta_is4sesrsa5tiissen4is4sal_sci3erse4crrs5er_islan4rse5v2yo5netish5opis3honr4si4bis5han5iron_ir4minrtach4_self5iri3turten4diri5dei4rel4ire4de_sell5r4tieriq3uidrtil3irtil4lr4tilyr4tistiq5uefip4re4_sing4_ting4yn3chrru3e4lion3at2in4th_tin5krum3pli4no4cin3ityrun4ty_ton4aruti5nymbol5rvel4i_top5irv5er_r5vestin5geni5ness_tou5s_un3cein3cerincel45ryngei4n3auim3ulai5miniimi5lesac3riim5ida_ve5rasalar4ima5ryim3ageill5abil4istsan4deila5rai2l5am_wil5ii4ladeil3a4bsa5voright3iig3eraab5erd4ific_iff5enif5eroi3entiien5a45ie5gaidi5ou3s4cieab5latidi4arid5ianide3al4scopyab5rogid5ancic3ulaac5ardi2c5ocic3ipaic5inase2c3oi4carai4car_se4d4ei2b5riib5iteib5it_ib5ertib3eraac5aroi4ativ4ian4tse4molsen5ata5ceouh4warts5enedhus3t4s5enin4sentd4sentlsep3a34s1er_hun5kehu4min4servohro3poa5chethov5el5se5umhouse3sev3enho5senhort3eho5rishor5at3hol4ehol5arh5odizhlo3riac5robhis3elhion4ehimer4het4edsh5oldhe2s5ph5eroushort5here5aher4bahera3p3side_5sideshen5atsi5diz4signahel4lyact5ifhe3l4ihe5do55sine_h5ecathe4canad4dinsion5aad5er_har4lehard3e3sitioha5rasha3ranhan4tead3icahang5oadi4ersk5inesk5ing5hand_han4cyhan4cislith5hala3mh3ab4lsmall32g5y3n5gui5t3guard5smithad5ranaeri4eag5ellag3onia5guerso4labsol3d2so3licain5in4grada3s4on_gor5ougo5rizgondo5xpan4dait5ens5ophyal3end3g4o4ggnet4tglad5i5g4insgin5ge3g4in_spen4d2s5peog3imen5gies_3spher5giciagh5outsp5ingge5nizge4natge5lizge5lisgel4inxi5miz4gativgar5n4a5le5oga3nizgan5isga5mets5sengs4ses_fu4minfres5cfort5assi4erss5ilyfore5tfor5ayfo5ratal4ia_fon4dessur5aflo3ref5lessfis4tif1in3gstam4i5stands4ta4p5stat_fin2d5al5levs5tero4allicstew5afight5fi5del5ficie5ficiafi3cer5stickf3icena5log_st3ingf3icanama5ra5stockstom3a5stone2f3ic_3storef2f5iss4tradam5ascs4trays4tridf5fin_fend5efeath3fault5fa3thefar5thfam5is4fa4mafall5eew3inge5verbeven4ie5vengevel3oev3ellev5asteva2p5euti5let5roset3roget5rifsy5rinet3ricet5onaam5eraam5ilyami4noamor5ieti4noe5tidetai5loethod3eten4dtal5enes5urramp5enan3ageta5loge5strotan4detanta3ta5pere3ston4es2toes5times3tigta3rizestan43analy4taticta4tures4prean3arces3pertax4ises5onaes3olue5skintch5etanar4ies4i4ntead4ie2s5ima3natiande4sesh5enan3disan4dowang5iete5geres5ences5ecres5cana4n1icte2ma2tem3at3tenanwrita45erwau4tenesert3era3nieser3set5erniz4erniter4nis5ter3de4rivaan3i3fter3isan4imewo5vener3ineeri4ere3rient3ess_teth5e5ericke1ria4er3ester5esser3ent4erenea5nimier5enaer3emoth3easthe5atthe3iser5el_th5ic_th5icaere3in5thinkere5coth5odea5ninee3realan3ishan4klier4che5anniz4erandti4atoanoth5equi3lep5utat4ic1uan4scoe4probep3rehe4predans3poe4precan4surantal4e3penttim5ulep5anceo5rol3tine_eop3aran4tiewin4deap5eroen3ishen5icsen3etren5esten5esien5eroa3pheren3dicap3itae4nanten5amoem5ulaa3pituti3zen5emnize5missem5ishap5olaem5ine3tles_t5let_em1in2apor5iem3icaem5anael3op_el4labapos3te3liv3el5ishaps5esweath3e3lierel3icaar3actwa5verto3nate3libee4l1erel3egato3rietor5iza5radeelaxa4aran4gto3warelan4dej5udie5insttra5chtraci4ar5av4wa5gere5git5arbal4ar5easeg5ing4voteetrem5iar3enta5ressar5ial4tricsvor5abe3finetro5mitron5i4tronyar3iantro3sp5eficia3rieted5uloed3icae4d1erec3ulaec4tane4cremeco5roec3orae4concar5o5de4comme4cluse4clame5citeec5ifya5ronias3anta5sia_tu4nis2t3up_ecan5ce4belstur3ise4bel_eav3ene4a3tue5atifeath3ieat5eneart3eear4ilear4icear5eseam3ereal3oueal5erea5geread5iedum4be4ducts4duct_duc5eras3tenasur5adrea5rat3abl4d5outdo3natdom5izdo5lor4dlessu4bero3dles_at3alou3ble_d4is3tdirt5idi5niz3dine_at5ech5di3endi4cam1d4i3ad3ge4tud5estdev3ilde3strud3iedud3iesdes3tide2s5oat3egovis3itde4nardemor5at3en_uen4teuer4ilde5milat3eraugh3en3demicater5nuil5izdeli4ede5comde4cildecan4de4bonv3io4rdeb5it4dativ2d3a4bat3estu5laticu4tie5ulcheul3dercuss4icu5riaath5em3cultua5thenul3ingul5ishul4lar4vi4naul4liscu5ityctim3ic4ticuuls5esc5tantultra3ct5angcros4ecrop5ocro4pl5critiath5omum4blycre3at5vilitumor5oat5i5b5crat_cras5tcoro3ncop3iccom5ercol3orun5ishco3inc5clareat3ituunt3abat5ropun4tescit3iz4cisti4cista4cipicc5ing_cin3em3cinatuper5s5videsup3ingci2a5b5chini5videdupt5ib5vide_at4tag4ch1inch3ersch3er_ch5ene3chemiche5loure5atur4fercheap3vi5aliat3uravet3er4ch3abc5e4taau5sib3cessives4tece5ram2cen4e4cedenccou3turs5erur5tesur3theaut5enur4tiecav5al4cativave4nover3thcar5omca5percan4tycan3izcan5iscan4icus4lin3versecal4laver3ieca3latca5dencab3in3butiobuss4ebus5iebunt4iv4eresuten4i4u1t2iv3erenu3tineut3ingv4erelbroth35u5tizbound34b1orabon5at5vere_bom4bibol3icblun4t5blespblath5av3erav5enuebi3ogrbi5netven3om2v1a4bvac5ilbi3lizbet5izbe5strva5liebe5nigbbi4nabas4siva5nizbari4aav5ernbarbi5av5eryvel3liazi4eravi4er",
        7: "_dri5v4ban5dagvar5iedbina5r43bi3tio3bit5ua_ad4derution5auti5lizver5encbuf4ferus5terevermi4ncall5incast5ercas5tigccompa5z3o1phros5itiv5chanicuri4fico5stati5chine_y5che3dupport54v3iden5cific_un4ter_at5omiz4oscopiotele4g5craticu4m3ingv3i3liz4c3retaul4li4bcul4tiscur5a4b4c5utiva5ternauiv4er_del5i5qdem5ic_de4monsdenti5fdern5izdi4latou4b5ingdrag5on5drupliuar5ant5a5si4tec5essawo4k1enec5ifiee4compear5inate4f3eretro5phewide5sp5triciatri5cesefor5ese4fuse_oth5esiar5dinear4chantra5ventrac4tetrac4itar5ativa5ratioel5ativor5est_ar5adisel5ebraton4alie4l5ic_wea5rieel5igibe4l3ingto5cratem5igraem3i3niemoni5oench4erwave1g4a4pillavoice1ption5eewill5inent5age4enthesvaude3vtill5inep5recaep5ti5bva6guer4erati_tho5rizthor5it5thodicer5ence5ternitteri5zater5iesten4tage4sage_e4sagese4sert_an5est_e4sertse4servaes5idenes5ignaesis4tees5piraes4si4btal4lisestruc5e5titioounc5erxe4cutota5bleset5itiva4m5atoa4matis5stratu4f3ical5a5lyst4ficatefill5instern5isspend4gani5zasqual4la4lenti4g3o3nas5ophiz5sophicxpecto55graph_or5angeuri4al_4graphy4gress_smol5d4hang5erh5a5nizharp5enhar5terhel4lishith5erhro5niziam5eteia4tricic4t3uascour5au2r1al_5scin4dover4nescan4t55sa3tiou5do3ny_ven4de_under5ty2p5al_anti5sylla5bliner4arturn3ari5nite_5initioinsur5aion4eryiphras4_tim5o5_ten5an_sta5blrtroph4_se5rieiq3ui3t5i5r2izis5itiviso5mer4istral5i5ticki2t5o5mtsch3ie_re5mittro3fiti4v3er_i4vers_ros5per_pe5titiv3o3ro_ped5alro5n4is_or5ato4jestierom5ete_muta5bk5iness4latelitr4ial__mist5i_me5terr4ming_lev4er__mar5tilev4eralev4ers_mag5a5liar5iz5ligaterit5ers_lat5errit5er_r5ited__im5pinri3ta3blink5er_hon5ey5litica_hero5ior5aliz_hand5irip5lic_gen3t4tolo2gylloqui5_con5grt1li2erbad5ger4operag_eu4lertho3donter2ic__ar4tie_ge4ome_ge5ot1_he3mo1_he3p6a_he3roe_in5u2tpara5bl5tar2rht1a1mintalk1a5ta3gon_par5age_aster5_ne6o3f_noe1thstyl1is_poly1s5pathic_pre1ampa4tricl3o3niz_sem4ic_semid6_semip4_semir45ommend_semiv4lea4s1a_spin1oom5etryspher1o_to6poglo4ratospe3cio3s2paceso2lute_we2b1l_re1e4ca5bolicom5erseaf6fishside5swanal6ysano5a2cside5stl5ties_5lumniasid2ed_anti1reshoe1stscy4th1s4chitzsales5wsales3cat6tes_augh4tlau5li5fom5atizol5ogizo5litiorev5olure5vertre5versbi5d2ifbil2lab_earth5pera5blro1tronro3meshblan2d1blin2d1blon2d2bor1no5ro1bot1re4ti4zr5le5quperi5stper4malbut2ed_but4tedcad5e1moist5enre5stalress5ibchie5vocig3a3roint5er4matizariv1o1lcous2ticri3tie5phisti_be5stoog5ativo2g5a5rr3a3digm4b3ingre4posir4en4tade4als_od5uctsquasis6quasir6re5fer_p5trol3rec5olldic1aiddif5fra3pseu2dr5ebrat5metric2d1lead2d1li2epro2g1epre1neuod5uct_octor5apoin3came5triem5i5liepli5narpara3memin5glim5inglypi4grappal6matmis4er_m5istryeo3graporth1riop1ism__but4tio3normaonom1icfeb1ruafermi1o_de4moio5a5lesodit1icodel3lirb5ing_gen2cy_n4t3ingmo5lestration4get2ic_4g1lishobli2g1mon4ismnsta5blmon4istg2n1or_nov3el3ns5ceivno1vembmpa5rabno4rarymula5r4nom1a6lput4tinput4tedn5o5miz_cam4penag5er_nge5nesh2t1eoun1dieck2ne1skiifac1etncour5ane3backmono1s6mono3chmol1e5cpref5ac3militapre5tenith5i2lnge4n4end5est__capa5bje1re1mma1la1ply5styr1kovian_car5olprin4t3lo2ges_l2l3ishprof5it1s2tamp",
        8: "lead6er_url5ing_ces5si5bch5a5nis1le1noidlith1o5g_chill5ilar5ce1nym5e5trych5inessation5arload4ed_load6er_la4c3i5elth5i2lyneg5ativ1lunk3erwrit6er_wrap3arotrav5es51ke6linga5rameteman3u1scmar1gin1ap5illar5tisticamedio6c1me3gran3i1tesima3mi3da5bves1titemil2l1agv1er1eigmi6n3is_1verely_e4q3ui3s5tabolizg5rapher5graphicmo5e2lasinfra1s2mon4ey1lim3ped3amo4no1enab5o5liz_cor5nermoth4et2m1ou3sinm5shack2ppo5sitemul2ti5uab5it5abimenta5rignit1ernato5mizhypo1thani5ficatuad1ratu4n5i4an_ho6r1ic_ua3drati5nologishite3sidin5dling_trib5utin5glingnom5e1non1o1mistmpos5itenon1i4so_re5stattro1p2istrof4ic_g2norespgnet1ism5glo5binlem5aticflow2er_fla1g6elntrol5lifit5ted_treach1etra1versl5i5ticso3mecha6_for5mer_de5rivati2n3o1me3spac6i2t3i4an_thy4l1antho1k2er_eq5ui5to4s3phertha4l1amt3ess2es3ter1geiou3ba3dotele1r6ooxi6d1iceli2t1isonspir5apar4a1leed1ulingea4n3iesoc5ratiztch3i1er_kil2n3ipi2c1a3dpli2c1abt6ap6athdrom3e5d_le6icesdrif2t1a_me4ga1l1prema3cdren1a5lpres2plipro2cess_met4ala3do5word1syth3i2_non1e2m_post1ampto3mat4rec5ompepu5bes5cstrib5utqu6a3si31stor1ab_sem6is4star3tliqui3v4arr1abolic_sph6in1de5clar12d3aloneradi1o6gs3qui3tosports3wsports3cra5n2hascro5e2cor3bin1gespokes5wspi2c1il_te3legrcroc1o1d_un3at5t_dictio5cat1a1s2buss4ingbus6i2esbus6i2erbo2t1u1lro5e2las1s2pacinb1i3tivema5rine_r3pau5li_un5err5r5ev5er__vi2c3arback2er_ma5chinesi5resid5losophyan3ti1n2sca6p1ersca2t1olar2rangesep3temb1sci2uttse3mes1tar3che5tsem1a1ph",
        9: "re4t1ribuuto5maticl3chil6d1a4pe5able1lec3ta6bas5ymptotyes5ter1yl5mo3nell5losophizlo1bot1o1c5laratioba6r1onierse1rad1iro5epide1co6ph1o3nscrap4er_rec5t6angre2c3i1prlai6n3ess1lum5bia_3lyg1a1miec5ificatef5i5nites2s3i4an_1ki5neticjapan1e2smed3i3cinirre6v3ocde2c5linao3les3termil5li5listrat1a1gquain2t1eep5etitiostu1pi4d1v1oir5du1su2per1e6_mi1s4ers3di1methy_mim5i2c1i5nitely_5maph1ro15moc1ra1tmoro6n5isdu1op1o1l_ko6r1te1n3ar4chs_phi2l3ant_ga4s1om1teach4er_parag6ra4o6v3i4an_oth3e1o1sn3ch2es1to5tes3toro5test1eror5tively5nop5o5liha2p3ar5rttrib1ut1_eth1y6l1e2r3i4an_5nop1oly_graph5er_5eu2clid1o1lo3n4omtrai3tor1_ratio5na5mocratiz_rav5en1o",
        10: "se1mi6t5ic3tro1le1um5sa3par5iloli3gop1o1am1en3ta5bath3er1o1s3slova1kia3s2og1a1myo3no2t1o3nc2tro3me6c1cu2r1ance5noc3er1osth1o5gen1ih3i5pel1a4nfi6n3ites_ever5si5bs2s1a3chu1d1ri3pleg5_ta5pes1trproc3i3ty_s5sign5a3b3rab1o1loiitin5er5arwaste3w6a2mi1n2ut1erde3fin3itiquin5tes5svi1vip3a3r",
        11: "pseu3d6o3f2s2t1ant5shimi1n2ut1estpseu3d6o3d25tab1o1lismpo3lyph1onophi5lat1e3ltravers3a3bschro1ding12g1o4n3i1zat1ro1pol3it3trop1o5lis3trop1o5lesle3g6en2dreeth1y6l1eneor4tho3ni4t",
        12: "3ra4m5e1triz1e6p3i3neph1"
      }
    }
  }, t = new window.Hypher(e.exports);
  "string" == typeof e.exports.id && (e.exports.id = [e.exports.id]);
  for (var n = 0; n < e.exports.id.length; n += 1) window.Hypher.languages[e.exports.id[n]] = t
}();
var _createClass = function () {
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }

  return function (e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e
  }
}();

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

!function () {
  var e = function () {
    function o(e) {
      var t = this;
      _classCallCheck(this, o);
      var n = {
        logo: "OwO",
        container: document.getElementsByClassName("OwO")[0],
        target: document.getElementsByTagName("textarea")[0],
        position: "down",
        width: "100%",
        maxHeight: "250px",
        api: "https://api.anotherhome.net/OwO/OwO.json"
      };
      for (var i in n) n.hasOwnProperty(i) && !e.hasOwnProperty(i) && (e[i] = n[i]);
      this.container = e.container, this.target = e.target, "up" === e.position && this.container.classList.add("OwO-up");
      var a = new XMLHttpRequest;
      a.onreadystatechange = function () {
        4 === a.readyState && (200 <= a.status && a.status < 300 || 304 === a.status ? (t.odata = JSON.parse(a.responseText), t.init(e)) : console.log("OwO data request was unsuccessful: " + a.status))
      }, a.open("get", e.api, !0), a.send(null)
    }

    return _createClass(o, [{
      key: "init", value: function (e) {
        var n = this;
        this.area = e.target, this.packages = Object.keys(this.odata);
        for (var t = '\n            <div class="OwO-logo"><span>' + e.logo + '</span></div>\n            <div class="OwO-body" style="width: ' + e.width + '">', i = 0; i < this.packages.length; i++) {
          t += '\n                <ul class="OwO-items OwO-items-' + this.odata[this.packages[i]].type + '" style="max-height: ' + (parseInt(e.maxHeight) - 53) + 'px;">';
          for (var a = this.odata[this.packages[i]].type, o = this.odata[this.packages[i]].container, r = 0; r < o.length; r++) t += "image" == a ? '\n                    <li class="OwO-item" data-id="' + o[r].data + '" title="' + o[r].text + '">' + o[r].icon + "</li>" : '\n                    <li class="OwO-item" data-id="not-given" title="' + o[r].text + '">' + o[r].icon + "</li>";
          t += "\n                </ul>"
        }
        t += '\n                <div class="OwO-bar">\n                    <ul class="OwO-packages">';
        for (var s = 0; s < this.packages.length; s++) t += "\n                        <li><span>" + this.packages[s] + "</span></li>";
        t += "\n                    </ul>\n                </div>\n            </div>\n            ", this.container.innerHTML = t, this.logo = this.container.getElementsByClassName("OwO-logo")[0], this.logo.addEventListener("click", function () {
          n.toggle()
        }), this.container.getElementsByClassName("OwO-body")[0].addEventListener("click", function (e) {
          var t = null;
          if (e.target.classList.contains("OwO-item") ? t = e.target : e.target.parentNode.classList.contains("OwO-item") && (t = e.target.parentNode), t) {
            n.area.selectionEnd, n.area.value;
            "not-given" == t.dataset.id ? insertAtCursor(n.area, " " + t.innerHTML + " ") : insertAtCursor(n.area, " " + t.dataset.id + " "), n.area.focus(), n.toggle()
          }
        }), this.packagesEle = this.container.getElementsByClassName("OwO-packages")[0];
        for (var l = function (e) {
          var t;
          t = e, n.packagesEle.children[e].addEventListener("click", function () {
            n.tab(t)
          })
        }, c = 0; c < this.packagesEle.children.length; c++) l(c);
        this.tab(0)
      }
    }, {
      key: "toggle", value: function () {
        this.container.classList.contains("OwO-open") ? this.container.classList.remove("OwO-open") : this.container.classList.add("OwO-open")
      }
    }, {
      key: "tab", value: function (e) {
        var t = this.container.getElementsByClassName("OwO-items-show")[0];
        if (t && t.classList.remove("OwO-items-show"), this.container.getElementsByClassName("OwO-items")[e].classList.add("OwO-items-show"), !this.container.getElementsByClassName("OwO-items")[e].classList.contains("OwO-image-items-load") && this.container.getElementsByClassName("OwO-items")[e].classList.contains("OwO-items-image")) {
          this.container.getElementsByClassName("OwO-items")[e].classList.add("OwO-image-items-load");
          for (var n = this.container.getElementsByClassName("OwO-items")[e].getElementsByTagName("img"), i = 0; i < n.length; i++) n[i].setAttribute("src", n[i].dataset.src)
        }
        var a = this.container.getElementsByClassName("OwO-package-active")[0];
        a && a.classList.remove("OwO-package-active"), this.packagesEle.getElementsByTagName("li")[e].classList.add("OwO-package-active")
      }
    }]), o
  }();
  "undefined" != typeof module && void 0 !== module.exports ? module.exports = e : window.OwO = e
}(), function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("pangu", [], t) : "object" == typeof exports ? exports.pangu = t() : e.pangu = t()
}(window, function () {
  return function (n) {
    var i = {};

    function a(e) {
      if (i[e]) return i[e].exports;
      var t = i[e] = {i: e, l: !1, exports: {}};
      return n[e].call(t.exports, t, t.exports, a), t.l = !0, t.exports
    }

    return a.m = n, a.c = i, a.d = function (e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, a.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, a.t = function (t, e) {
      if (1 & e && (t = a(t)), 8 & e) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (a.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var i in t) a.d(n, i, function (e) {
        return t[e]
      }.bind(null, i));
      return n
    }, a.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return a.d(t, "a", t), t
    }, a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "", a(a.s = 0)
  }([function (r, e, s) {
    var t, n;
    void 0 === (n = "function" == typeof (t = function () {
      "use strict";

      function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }

      function t(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }

      function o(e) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
      }

      function n(e, t) {
        return (n = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e
        })(e, t)
      }

      var e = function (e) {
        function i() {
          var e, t, n;
          return function (e, t) {
            if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function")
          }(this), (t = this, n = o(i).call(this), e = !n || "object" !== a(n) && "function" != typeof n ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }(t) : n).blockTags = /^(div|p|h1|h2|h3|h4|h5|h6)$/i, e.ignoredTags = /^(script|code|pre|textarea)$/i, e.presentationalTags = /^(b|code|del|em|i|s|strong)$/i, e.spaceLikeTags = /^(br|hr|i|img|pangu)$/i, e.spaceSensitiveTags = /^(a|del|pre|s|strike|u)$/i, e.isAutoSpacingPageExecuted = !1, e
        }

        return function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && n(e, t)
        }(i, s(1).Pangu), t(i.prototype, [{
          key: "isContentEditable", value: function (e) {
            return e.isContentEditable || e.getAttribute && "true" === e.getAttribute("g_editable")
          }
        }, {
          key: "isSpecificTag", value: function (e, t) {
            return e && e.nodeName && 0 <= e.nodeName.search(t)
          }
        }, {
          key: "isInsideSpecificTag", value: function (e, t) {
            var n = e;
            if (2 < arguments.length && void 0 !== arguments[2] && arguments[2] && this.isSpecificTag(n, t)) return !0;
            for (; n.parentNode;) if (n = n.parentNode, this.isSpecificTag(n, t)) return !0;
            return !1
          }
        }, {
          key: "canIgnoreNode", value: function (e) {
            var t = e;
            if (t && (this.isSpecificTag(t, this.ignoredTags) || this.isContentEditable(t))) return !0;
            for (; t.parentNode;) if ((t = t.parentNode) && (this.isSpecificTag(t, this.ignoredTags) || this.isContentEditable(t))) return !0;
            return !1
          }
        }, {
          key: "isFirstTextChild", value: function (e, t) {
            for (var n = e.childNodes, i = 0; i < n.length; i++) {
              var a = n[i];
              if (a.nodeType !== Node.COMMENT_NODE && a.textContent) return a === t
            }
            return !1
          }
        }, {
          key: "isLastTextChild", value: function (e, t) {
            for (var n = e.childNodes, i = n.length - 1; -1 < i; i--) {
              var a = n[i];
              if (a.nodeType !== Node.COMMENT_NODE && a.textContent) return a === t
            }
            return !1
          }
        }, {
          key: "spacingNodeByXPath", value: function (e, t) {
            if (t instanceof Node && !(t instanceof DocumentFragment)) for (var n, i, a = document.evaluate(e, t, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null), o = a.snapshotLength - 1; -1 < o; --o) {
              if (n = a.snapshotItem(o), this.isSpecificTag(n.parentNode, this.presentationalTags) && !this.isInsideSpecificTag(n.parentNode, this.ignoredTags)) {
                var r = n.parentNode;
                if (r.previousSibling) {
                  var s = r.previousSibling;
                  if (s.nodeType === Node.TEXT_NODE) {
                    var l = s.data.substr(-1) + n.data.toString().charAt(0);
                    l !== this.spacing(l) && (s.data = "".concat(s.data, " "))
                  }
                }
                if (r.nextSibling) {
                  var c = r.nextSibling;
                  if (c.nodeType === Node.TEXT_NODE) {
                    var u = n.data.substr(-1) + c.data.toString().charAt(0);
                    u !== this.spacing(u) && (c.data = " ".concat(c.data))
                  }
                }
              }
              if (this.canIgnoreNode(n)) i = n; else {
                var d = this.spacing(n.data);
                if (n.data !== d && (n.data = d), i) {
                  if (n.nextSibling && 0 <= n.nextSibling.nodeName.search(this.spaceLikeTags)) {
                    i = n;
                    continue
                  }
                  var p = n.data.toString().substr(-1) + i.data.toString().substr(0, 1);
                  if (this.spacing(p) !== p) {
                    for (var f = i; f.parentNode && -1 === f.nodeName.search(this.spaceSensitiveTags) && this.isFirstTextChild(f.parentNode, f);) f = f.parentNode;
                    for (var g = n; g.parentNode && -1 === g.nodeName.search(this.spaceSensitiveTags) && this.isLastTextChild(g.parentNode, g);) g = g.parentNode;
                    if (g.nextSibling && 0 <= g.nextSibling.nodeName.search(this.spaceLikeTags)) {
                      i = n;
                      continue
                    }
                    if (-1 === g.nodeName.search(this.blockTags)) if (-1 === f.nodeName.search(this.spaceSensitiveTags)) -1 === f.nodeName.search(this.ignoredTags) && -1 === f.nodeName.search(this.blockTags) && (i.previousSibling ? -1 === i.previousSibling.nodeName.search(this.spaceLikeTags) && (i.data = " ".concat(i.data)) : this.canIgnoreNode(i) || (i.data = " ".concat(i.data))); else if (-1 === g.nodeName.search(this.spaceSensitiveTags)) n.data = "".concat(n.data, " "); else {
                      var h = document.createElement("pangu");
                      h.innerHTML = " ", f.previousSibling ? -1 === f.previousSibling.nodeName.search(this.spaceLikeTags) && f.parentNode.insertBefore(h, f) : f.parentNode.insertBefore(h, f), h.previousElementSibling || h.parentNode && h.parentNode.removeChild(h)
                    }
                  }
                }
                i = n
              }
            }
          }
        }, {
          key: "spacingNode", value: function (e) {
            var t = ".//*/text()[normalize-space(.)]";
            e.children && 0 === e.children.length && (t = ".//text()[normalize-space(.)]"), this.spacingNodeByXPath(t, e)
          }
        }, {
          key: "spacingElementById", value: function (e) {
            var t = 'id("'.concat(e, '")//text()');
            this.spacingNodeByXPath(t, document)
          }
        }, {
          key: "spacingElementByClassName", value: function (e) {
            var t = '//*[contains(concat(" ", normalize-space(@class), " "), "'.concat(e, '")]//text()');
            this.spacingNodeByXPath(t, document)
          }
        }, {
          key: "spacingElementByTagName", value: function (e) {
            var t = "//".concat(e, "//text()");
            this.spacingNodeByXPath(t, document)
          }
        }, {
          key: "spacingPageTitle", value: function () {
            this.spacingNodeByXPath("/html/head/title/text()", document)
          }
        }, {
          key: "spacingPageBody", value: function () {
            var t = "/html/body//*/text()[normalize-space(.)]";
            ["script", "style", "textarea"].forEach(function (e) {
              t = "".concat(t, '[translate(name(..),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz")!="').concat(e, '"]')
            }), this.spacingNodeByXPath(t, document)
          }
        }, {
          key: "spacingPage", value: function () {
            this.spacingPageTitle(), this.spacingPageBody()
          }
        }, {
          key: "autoSpacingPage", value: function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1e3,
              t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 500,
              n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 2e3;
            if (document.body instanceof Node && !this.isAutoSpacingPageExecuted) {
              this.isAutoSpacingPageExecuted = !0;
              var a = this, i = function (e) {
                var t = this, n = arguments, i = !1;
                return function () {
                  i || (i = !0, function () {
                    a.spacingPage()
                  }.apply(t, n))
                }
              }(function () {
                a.spacingPage()
              }), o = document.getElementsByTagName("video");
              if (0 === o.length) setTimeout(function () {
                i()
              }, e); else for (var r = 0; r < o.length; r++) {
                var s = o[r];
                if (4 === s.readyState) {
                  setTimeout(function () {
                    i()
                  }, 3e3);
                  break
                }
                s.addEventListener("loadeddata", function () {
                  setTimeout(function () {
                    i()
                  }, 4e3)
                })
              }
              var l = [], c = function (i, a, o) {
                var r = this, s = arguments, l = null, c = null;
                return function () {
                  var e = r, t = s, n = +new Date;
                  clearTimeout(l), c || (c = n), o <= n - c ? (i.apply(e, t), c = n) : l = setTimeout(function () {
                    i.apply(e, t)
                  }, a)
                }
              }(function () {
                for (; l.length;) {
                  var e = l.shift();
                  e && a.spacingNode(e)
                }
              }, t, {maxWait: n});
              new MutationObserver(function (e, t) {
                e.forEach(function (e) {
                  switch (e.type) {
                    case"childList":
                      e.addedNodes.forEach(function (e) {
                        e.nodeType === Node.ELEMENT_NODE ? l.push(e) : e.nodeType === Node.TEXT_NODE && l.push(e.parentNode)
                      });
                      break;
                    case"characterData":
                      var t = e.target;
                      t.nodeType === Node.TEXT_NODE && l.push(t.parentNode)
                  }
                }), c()
              }).observe(document.body, {characterData: !0, childList: !0, subtree: !0})
            }
          }
        }]), i
      }(), i = new e;
      r.exports = i, r.exports.default = i, r.exports.Pangu = e
    }) ? t.apply(e, []) : t) || (r.exports = n)
  }, function (k, e, t) {
    var n, i;
    void 0 === (i = "function" == typeof (n = function () {
      "use strict";

      function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }

      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }

      var t = "⺀-⻿⼀-⿟぀-ゟ゠-ヺー-ヿ㄀-ㄯ㈀-㋿㐀-䶿一-鿿豈-﫿", a = new RegExp("[".concat(t, "]")),
        r = new RegExp("([".concat(t, "])[ ]*([\\:]+|\\.)[ ]*([").concat(t, "])"), "g"),
        s = new RegExp("([".concat(t, "])[ ]*([~\\!;,\\?]+)[ ]*"), "g"),
        l = new RegExp("([\\.]{2,}|…)([".concat(t, "])"), "g"),
        c = new RegExp("([".concat(t, "])\\:([A-Z0-9\\(\\)])"), "g"), u = new RegExp("([".concat(t, '])([`"״])'), "g"),
        d = new RegExp('([`"״])(['.concat(t, "])"), "g"), p = /([`"\u05f4]+)[ ]*(.+?)[ ]*([`"\u05f4]+)/g,
        f = new RegExp("([".concat(t, "])('[^s])"), "g"), g = new RegExp("(')([".concat(t, "])"), "g"),
        h = new RegExp("([A-Za-z0-9".concat(t, "])( )('s)"), "g"),
        m = new RegExp("([".concat(t, "])(#)([").concat(t, "]+)(#)([").concat(t, "])"), "g"),
        b = new RegExp("([".concat(t, "])(#([^ ]))"), "g"), v = new RegExp("(([^ ])#)([".concat(t, "])"), "g"),
        y = new RegExp("([".concat(t, "])([\\+\\-\\*\\/=&\\|<>])([A-Za-z0-9])"), "g"),
        _ = new RegExp("([A-Za-z0-9])([\\+\\-\\*\\/=&\\|<>])([".concat(t, "])"), "g"), E = /([\/]) ([a-z\-_\.\/]+)/g,
        S = /([\/\.])([A-Za-z\-_\.\/]+) ([\/])/g, T = new RegExp("([".concat(t, "])([\\(\\[\\{<>“])"), "g"),
        w = new RegExp("([\\)\\]\\}<>”])([".concat(t, "])"), "g"),
        C = /([\(\[\{<\u201c]+)[ ]*(.+?)[ ]*([\)\]\}>\u201d]+)/,
        x = new RegExp("([A-Za-z0-9".concat(t, "])[ ]*([“])([A-Za-z0-9").concat(t, "\\-_ ]+)([”])"), "g"),
        A = new RegExp("([“])([A-Za-z0-9".concat(t, "\\-_ ]+)([”])[ ]*([A-Za-z0-9").concat(t, "])"), "g"),
        O = /([A-Za-z0-9])([\(\[\{])/g, I = /([\)\]\}])([A-Za-z0-9])/g,
        N = new RegExp("([".concat(t, "])([A-Za-zͰ-Ͽ0-9@\\$%\\^&\\*\\-\\+\\\\=\\|/¡-ÿ⅐-↏✀—➿])"), "g"),
        R = new RegExp("([A-Za-zͰ-Ͽ0-9~\\$%\\^&\\*\\-\\+\\\\=\\|/!;:,\\.\\?¡-ÿ⅐-↏✀—➿])([".concat(t, "])"), "g"),
        P = /(%)([A-Za-z])/g, L = /([ ]*)([\u00b7\u2022\u2027])([ ]*)/g, n = function () {
          function n() {
            !function (e, t) {
              if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }(this), this.version = "4.0.7"
          }

          return e(n.prototype, [{
            key: "convertToFullwidth", value: function (e) {
              return e.replace(/~/g, "～").replace(/!/g, "！").replace(/;/g, "；").replace(/:/g, "：").replace(/,/g, "，").replace(/\./g, "。").replace(/\?/g, "？")
            }
          }, {
            key: "spacing", value: function (e) {
              if ("string" != typeof e) return console.warn("spacing(text) only accepts string but got ".concat(i(e))), e;
              if (e.length <= 1 || !a.test(e)) return e;
              var o = this, t = e;
              return (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace(r, function (e, t, n, i) {
                var a = o.convertToFullwidth(n);
                return "".concat(t).concat(a).concat(i)
              })).replace(s, function (e, t, n) {
                var i = o.convertToFullwidth(n);
                return "".concat(t).concat(i)
              })).replace(l, "$1 $2")).replace(c, "$1：$2")).replace(u, "$1 $2")).replace(d, "$1 $2")).replace(p, "$1$2$3")).replace(f, "$1 $2")).replace(g, "$1 $2")).replace(h, "$1's")).replace(m, "$1 $2$3$4 $5")).replace(b, "$1 $2")).replace(v, "$1 $3")).replace(y, "$1 $2 $3")).replace(_, "$1 $2 $3")).replace(E, "$1$2")).replace(S, "$1$2$3")).replace(T, "$1 $2")).replace(w, "$1 $2")).replace(C, "$1$2$3")).replace(x, "$1 $2$3$4")).replace(A, "$1$2$3 $4")).replace(O, "$1 $2")).replace(I, "$1 $2")).replace(N, "$1 $2")).replace(R, "$1 $2")).replace(P, "$1 $2")).replace(L, "・")
            }
          }, {
            key: "spacingText", value: function (e) {
              var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : function () {
              };
              try {
                t = this.spacing(e)
              } catch (e) {
                return void n(e)
              }
              n(null, t)
            }
          }, {
            key: "spacingTextSync", value: function (e) {
              return this.spacing(e)
            }
          }]), n
        }(), o = new n;
      k.exports = o, k.exports.default = o, k.exports.Pangu = n
    }) ? n.apply(e, []) : n) || (k.exports = i)
  }])
}), function (m) {
  function e(e, t, n) {
    return n = c(t, n), this.on("click.pjax", e, function (e) {
      var t = n;
      t.container || ((t = m.extend({}, n)).container = m(this).attr("data-pjax")), i(e, t)
    })
  }

  function i(e, t, n) {
    n = c(t, n);
    var i = e.currentTarget, a = m(i);
    if ("A" !== i.tagName.toUpperCase()) throw"$.fn.pjax or $.pjax.click requires an anchor element";
    if (!(1 < e.which || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || location.protocol !== i.protocol || location.hostname !== i.hostname || -1 < i.href.indexOf("#") && l(i) == l(location) || e.isDefaultPrevented())) {
      var o = {url: i.href, container: a.attr("data-pjax"), target: i}, r = m.extend({}, o, n),
        s = m.Event("pjax:click");
      a.trigger(s, [r]), s.isDefaultPrevented() || (b(r), e.preventDefault(), a.trigger("pjax:clicked", [r]))
    }
  }

  function t(e, t, n) {
    n = c(t, n);
    var i = e.currentTarget, a = m(i);
    if ("FORM" !== i.tagName.toUpperCase()) throw"$.pjax.submit requires a form element";
    var o = {
      type: (a.attr("method") || "GET").toUpperCase(),
      url: a.attr("action"),
      container: a.attr("data-pjax"),
      target: i
    };
    if ("GET" !== o.type && void 0 !== window.FormData) o.data = new FormData(i), o.processData = !1, o.contentType = !1; else {
      if (a.find(":file").length) return;
      o.data = a.serializeArray()
    }
    b(m.extend({}, o, n)), e.preventDefault()
  }

  function b(p) {
    p = m.extend(!0, {}, m.ajaxSettings, b.defaults, p), m.isFunction(p.url) && (p.url = p.url());
    var f = S(p.url).hash, e = m.type(p.container);
    if ("string" !== e) throw"expected string value for 'container' option; got " + e;
    var i, g = p.context = m(p.container);
    if (!g.length) throw"the container selector '" + p.container + "' did not match anything";

    function h(e, t, n) {
      n || (n = {}), n.relatedTarget = p.target;
      var i = m.Event(e, n);
      return g.trigger(i, t), !i.isDefaultPrevented()
    }

    p.data || (p.data = {}), m.isArray(p.data) ? p.data.push({
      name: "_pjax",
      value: p.container
    }) : p.data._pjax = p.container, p.beforeSend = function (e, t) {
      if ("GET" !== t.type && (t.timeout = 0), e.setRequestHeader("X-PJAX", "true"), e.setRequestHeader("X-PJAX-Container", p.container), !h("pjax:beforeSend", [e, t])) return !1;
      0 < t.timeout && (i = setTimeout(function () {
        h("pjax:timeout", [e, p]) && e.abort("timeout")
      }, t.timeout), t.timeout = 0);
      var n = S(t.url);
      f && (n.hash = f), p.requestUrl = u(n)
    }, p.complete = function (e, t) {
      i && clearTimeout(i), h("pjax:complete", [e, t, p]), h("pjax:end", [e, p])
    }, p.error = function (e, t, n) {
      var i = T("", e, p), a = h("pjax:error", [e, t, n, p]);
      "GET" == p.type && "abort" !== t && a && v(i.url)
    }, p.success = function (e, t, n) {
      var i = b.state,
        a = "function" == typeof m.pjax.defaults.version ? m.pjax.defaults.version() : m.pjax.defaults.version,
        o = n.getResponseHeader("X-PJAX-Version"), r = T(e, n, p), s = S(r.url);
      if (f && (s.hash = f, r.url = s.href), a && o && a !== o) v(r.url); else if (r.contents) {
        if (b.state = {
          id: p.id || _(),
          url: r.url,
          title: r.title,
          container: p.container,
          fragment: p.fragment,
          timeout: p.timeout
        }, (p.push || p.replace) && window.history.replaceState(b.state, r.title, r.url), m.contains(g, document.activeElement)) try {
          document.activeElement.blur()
        } catch (e) {
        }
        r.title && (document.title = r.title), h("pjax:beforeReplace", [r.contents, p], {
          state: b.state,
          previousState: i
        }), g.html(r.contents);
        var l = g.find("input[autofocus], textarea[autofocus]").last()[0];
        l && document.activeElement !== l && l.focus(), function (e) {
          if (!e) return;
          var a = m("script[src]");
          e.each(function () {
            var e = this.src, t = a.filter(function () {
              return this.src === e
            });
            if (!t.length) {
              var n = document.createElement("script"), i = m(this).attr("type");
              i && (n.type = i), n.src = m(this).attr("src"), document.head.appendChild(n)
            }
          })
        }(r.scripts);
        var c = p.scrollTo;
        if (f) {
          var u = decodeURIComponent(f.slice(1)), d = document.getElementById(u) || document.getElementsByName(u)[0];
          d && (c = m(d).offset().top)
        }
        "number" == typeof c && m(window).scrollTop(c), h("pjax:success", [e, t, n, p])
      } else v(r.url)
    }, b.state || (b.state = {
      id: _(),
      url: window.location.href,
      title: document.title,
      container: p.container,
      fragment: p.fragment,
      timeout: p.timeout
    }, window.history.replaceState(b.state, document.title)), y(b.xhr), b.options = p;
    var t, n, a = b.xhr = m.ajax(p);
    return 0 < a.readyState && (p.push && !p.replace && (t = b.state.id, n = [p.container, E(g)], w[t] = n, x.push(t), A(C, 0), A(x, b.defaults.maxCacheLength), window.history.pushState(null, "", p.requestUrl)), h("pjax:start", [a, p]), h("pjax:send", [a, p])), b.xhr
  }

  function n(e, t) {
    var n = {url: window.location.href, push: !1, replace: !0, scrollTo: !1};
    return b(m.extend(n, c(e, t)))
  }

  function v(e) {
    window.history.replaceState(null, "", b.state.url), window.location.replace(e)
  }

  var d = !0, p = window.location.href, a = window.history.state;

  function o(e) {
    d || y(b.xhr);
    var t, n = b.state, i = e.state;
    if (i && i.container) {
      if (d && p == i.url) return;
      if (n) {
        if (n.id === i.id) return;
        t = n.id < i.id ? "forward" : "back"
      }
      var a = w[i.id] || [], o = a[0] || i.container, r = m(o), s = a[1];
      if (r.length) {
        n && function (e, t, n) {
          var i, a;
          w[t] = n, a = "forward" === e ? (i = x, C) : (i = C, x);
          i.push(t), (t = a.pop()) && delete w[t];
          A(i, b.defaults.maxCacheLength)
        }(t, n.id, [o, E(r)]);
        var l = m.Event("pjax:popstate", {state: i, direction: t});
        r.trigger(l);
        var c = {id: i.id, url: i.url, container: o, push: !1, fragment: i.fragment, timeout: i.timeout, scrollTo: !1};
        if (s) {
          r.trigger("pjax:start", [null, c]), (b.state = i).title && (document.title = i.title);
          var u = m.Event("pjax:beforeReplace", {state: i, previousState: n});
          r.trigger(u, [s, c]), r.html(s), r.trigger("pjax:end", [null, c])
        } else b(c);
        r[0].offsetHeight
      } else v(location.href)
    }
    d = !1
  }

  function r(e) {
    var t = m.isFunction(e.url) ? e.url() : e.url, n = e.type ? e.type.toUpperCase() : "GET",
      i = m("<form>", {method: "GET" === n ? "GET" : "POST", action: t, style: "display:none"});
    "GET" !== n && "POST" !== n && i.append(m("<input>", {type: "hidden", name: "_method", value: n.toLowerCase()}));
    var a = e.data;
    if ("string" == typeof a) m.each(a.split("&"), function (e, t) {
      var n = t.split("=");
      i.append(m("<input>", {type: "hidden", name: n[0], value: n[1]}))
    }); else if (m.isArray(a)) m.each(a, function (e, t) {
      i.append(m("<input>", {type: "hidden", name: t.name, value: t.value}))
    }); else if ("object" == typeof a) {
      var o;
      for (o in a) i.append(m("<input>", {type: "hidden", name: o, value: a[o]}))
    }
    m(document.body).append(i), i.submit()
  }

  function y(e) {
    e && e.readyState < 4 && (e.onreadystatechange = m.noop, e.abort())
  }

  function _() {
    return (new Date).getTime()
  }

  function E(e) {
    var t = e.clone();
    return t.find("script").each(function () {
      this.src || m._data(this, "globalEval", !1)
    }), t.contents()
  }

  function u(e) {
    return e.search = e.search.replace(/([?&])(_pjax|_)=[^&]*/g, "").replace(/^&/, ""), e.href.replace(/\?($|#)/, "$1")
  }

  function S(e) {
    var t = document.createElement("a");
    return t.href = e, t
  }

  function l(e) {
    return e.href.replace(/#.*/, "")
  }

  function c(e, t) {
    return e && t ? ((t = m.extend({}, t)).container = e, t) : m.isPlainObject(e) ? e : {container: e}
  }

  function f(e, t) {
    return e.filter(t).add(e.find(t))
  }

  function g(e) {
    return m.parseHTML(e, document, !0)
  }

  function T(e, t, n) {
    var i, a, o = {}, r = /<html/i.test(e), s = t.getResponseHeader("X-PJAX-URL");
    if (o.url = s ? u(S(s)) : n.requestUrl, r) {
      a = m(g(e.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));
      var l = e.match(/<head[^>]*>([\s\S.]*)<\/head>/i);
      i = null != l ? m(g(l[0])) : a
    } else i = a = m(g(e));
    if (0 === a.length) return o;
    if (o.title = f(i, "title").last().text(), n.fragment) {
      var c = a;
      "body" !== n.fragment && (c = f(c, n.fragment).first()), c.length && (o.contents = "body" === n.fragment ? c : c.contents(), o.title || (o.title = c.attr("title") || c.data("title")))
    } else r || (o.contents = a);
    return o.contents && (o.contents = o.contents.not(function () {
      return m(this).is("title")
    }), o.contents.find("title").remove(), o.scripts = f(o.contents, "script[src]").remove(), o.contents = o.contents.not(o.scripts)), o.title && (o.title = m.trim(o.title)), o
  }

  a && a.container && (b.state = a), "state" in window.history && (d = !1);
  var w = {}, C = [], x = [];

  function A(e, t) {
    for (; e.length > t;) delete w[e.shift()]
  }

  function s() {
    return m("meta").filter(function () {
      var e = m(this).attr("http-equiv");
      return e && "X-PJAX-VERSION" === e.toUpperCase()
    }).attr("content")
  }

  function h() {
    m.fn.pjax = e, m.pjax = b, m.pjax.enable = m.noop, m.pjax.disable = O, m.pjax.click = i, m.pjax.submit = t, m.pjax.reload = n, m.pjax.defaults = {
      timeout: 650,
      push: !0,
      replace: !1,
      type: "GET",
      dataType: "html",
      scrollTo: 0,
      maxCacheLength: 20,
      version: s
    }, m(window).on("popstate.pjax", o)
  }

  function O() {
    m.fn.pjax = function () {
      return this
    }, m.pjax = r, m.pjax.enable = h, m.pjax.disable = m.noop, m.pjax.click = m.noop, m.pjax.submit = m.noop, m.pjax.reload = function () {
      window.location.reload()
    }, m(window).off("popstate.pjax", o)
  }

  m.event.props && m.inArray("state", m.event.props) < 0 ? m.event.props.push("state") : "state" in m.Event.prototype || m.event.addProp("state"), m.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/), m.support.pjax ? h() : O()
}(jQuery), function (e, t) {
  "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.NProgress = t()
}(this, function () {
  var t, n, r = {version: "0.2.0"}, s = r.settings = {
    minimum: .08,
    easing: "linear",
    positionUsing: "",
    speed: 200,
    trickle: !0,
    trickleSpeed: 200,
    showSpinner: !0,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: "body",
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  function l(e, t, n) {
    return e < t ? t : n < e ? n : e
  }

  function c(e) {
    return 100 * (-1 + e)
  }

  r.configure = function (e) {
    var t, n;
    for (t in e) void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (s[t] = n);
    return this
  }, r.status = null, r.set = function (t) {
    var e = r.isStarted();
    t = l(t, s.minimum, 1), r.status = 1 === t ? null : t;
    var n = r.render(!e), i = n.querySelector(s.barSelector), a = s.speed, o = s.easing;
    return n.offsetWidth, u(function (e) {
      "" === s.positionUsing && (s.positionUsing = r.getPositioningCSS()), d(i, function (e, t, n) {
        var i;
        i = "translate3d" === s.positionUsing ? {transform: "translate3d(" + c(e) + "%,0,0)"} : "translate" === s.positionUsing ? {transform: "translate(" + c(e) + "%,0)"} : {"margin-left": c(e) + "%"};
        return i.transition = "all " + t + "ms " + n, i
      }(t, a, o)), 1 === t ? (d(n, {transition: "none", opacity: 1}), n.offsetWidth, setTimeout(function () {
        d(n, {transition: "all " + a + "ms linear", opacity: 0}), setTimeout(function () {
          r.remove(), e()
        }, a)
      }, a)) : setTimeout(e, a)
    }), this
  }, r.isStarted = function () {
    return "number" == typeof r.status
  }, r.start = function () {
    r.status || r.set(0);
    var e = function () {
      setTimeout(function () {
        r.status && (r.trickle(), e())
      }, s.trickleSpeed)
    };
    return s.trickle && e(), this
  }, r.done = function (e) {
    return e || r.status ? r.inc(.3 + .5 * Math.random()).set(1) : this
  }, r.inc = function (e) {
    var t = r.status;
    return t ? 1 < t ? void 0 : ("number" != typeof e && (e = 0 <= t && t < .2 ? .1 : .2 <= t && t < .5 ? .04 : .5 <= t && t < .8 ? .02 : .8 <= t && t < .99 ? .005 : 0), t = l(t + e, 0, .994), r.set(t)) : r.start()
  }, r.trickle = function () {
    return r.inc()
  }, n = t = 0, r.promise = function (e) {
    return e && "resolved" !== e.state() && (0 === n && r.start(), t++, n++, e.always(function () {
      0 == --n ? (t = 0, r.done()) : r.set((t - n) / t)
    })), this
  }, r.render = function (e) {
    if (r.isRendered()) return document.getElementById("nprogress");
    p(document.documentElement, "nprogress-busy");
    var t = document.createElement("div");
    t.id = "nprogress", t.innerHTML = s.template;
    var n, i = t.querySelector(s.barSelector), a = e ? "-100" : c(r.status || 0), o = document.querySelector(s.parent);
    return d(i, {
      transition: "all 0 linear",
      transform: "translate3d(" + a + "%,0,0)"
    }), s.showSpinner || (n = t.querySelector(s.spinnerSelector)) && f(n), o != document.body && p(o, "nprogress-custom-parent"), o.appendChild(t), t
  }, r.remove = function () {
    i(document.documentElement, "nprogress-busy"), i(document.querySelector(s.parent), "nprogress-custom-parent");
    var e = document.getElementById("nprogress");
    e && f(e)
  }, r.isRendered = function () {
    return !!document.getElementById("nprogress")
  }, r.getPositioningCSS = function () {
    var e = document.body.style,
      t = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
    return t + "Perspective" in e ? "translate3d" : t + "Transform" in e ? "translate" : "margin"
  };
  var u = function () {
    var t = [];

    function n() {
      var e = t.shift();
      e && e(n)
    }

    return function (e) {
      t.push(e), 1 == t.length && n()
    }
  }(), d = function () {
    var o = ["Webkit", "O", "Moz", "ms"], t = {};

    function i(e) {
      return e = e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (e, t) {
        return t.toUpperCase()
      }), t[e] || (t[e] = function (e) {
        var t = document.body.style;
        if (e in t) return e;
        for (var n, i = o.length, a = e.charAt(0).toUpperCase() + e.slice(1); i--;) if ((n = o[i] + a) in t) return n;
        return e
      }(e))
    }

    function r(e, t, n) {
      t = i(t), e.style[t] = n
    }

    return function (e, t) {
      var n, i, a = arguments;
      if (2 == a.length) for (n in t) void 0 !== (i = t[n]) && t.hasOwnProperty(n) && r(e, n, i); else r(e, a[1], a[2])
    }
  }();

  function a(e, t) {
    return 0 <= ("string" == typeof e ? e : o(e)).indexOf(" " + t + " ")
  }

  function p(e, t) {
    var n = o(e), i = n + t;
    a(n, t) || (e.className = i.substring(1))
  }

  function i(e, t) {
    var n, i = o(e);
    a(e, t) && (n = i.replace(" " + t + " ", " "), e.className = n.substring(1, n.length - 1))
  }

  function o(e) {
    return (" " + (e && e.className || "") + " ").replace(/\s+/gi, " ")
  }

  function f(e) {
    e && e.parentNode && e.parentNode.removeChild(e)
  }

  return r
});
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
  Prism = function (c) {
    var u = /\blang(?:uage)?-([\w-]+)\b/i, t = 0, R = {
      manual: c.Prism && c.Prism.manual,
      disableWorkerMessageHandler: c.Prism && c.Prism.disableWorkerMessageHandler,
      util: {
        encode: function (e) {
          return e instanceof P ? new P(e.type, R.util.encode(e.content), e.alias) : Array.isArray(e) ? e.map(R.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
        }, type: function (e) {
          return Object.prototype.toString.call(e).slice(8, -1)
        }, objId: function (e) {
          return e.__id || Object.defineProperty(e, "__id", {value: ++t}), e.__id
        }, clone: function n(e, i) {
          var a, t, o = R.util.type(e);
          switch (i = i || {}, o) {
            case"Object":
              if (t = R.util.objId(e), i[t]) return i[t];
              for (var r in a = {}, i[t] = a, e) e.hasOwnProperty(r) && (a[r] = n(e[r], i));
              return a;
            case"Array":
              return t = R.util.objId(e), i[t] ? i[t] : (a = [], i[t] = a, e.forEach(function (e, t) {
                a[t] = n(e, i)
              }), a);
            default:
              return e
          }
        }
      },
      languages: {
        extend: function (e, t) {
          var n = R.util.clone(R.languages[e]);
          for (var i in t) n[i] = t[i];
          return n
        }, insertBefore: function (n, e, t, i) {
          var a = (i = i || R.languages)[n], o = {};
          for (var r in a) if (a.hasOwnProperty(r)) {
            if (r == e) for (var s in t) t.hasOwnProperty(s) && (o[s] = t[s]);
            t.hasOwnProperty(r) || (o[r] = a[r])
          }
          var l = i[n];
          return i[n] = o, R.languages.DFS(R.languages, function (e, t) {
            t === l && e != n && (this[e] = o)
          }), o
        }, DFS: function e(t, n, i, a) {
          a = a || {};
          var o = R.util.objId;
          for (var r in t) if (t.hasOwnProperty(r)) {
            n.call(t, r, t[r], i || r);
            var s = t[r], l = R.util.type(s);
            "Object" !== l || a[o(s)] ? "Array" !== l || a[o(s)] || (a[o(s)] = !0, e(s, n, r, a)) : (a[o(s)] = !0, e(s, n, null, a))
          }
        }
      },
      plugins: {},
      highlightAll: function (e, t) {
        R.highlightAllUnder(document, e, t)
      },
      highlightAllUnder: function (e, t, n) {
        var i = {
          callback: n,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        R.hooks.run("before-highlightall", i);
        for (var a, o = e.querySelectorAll(i.selector), r = 0; a = o[r++];) R.highlightElement(a, !0 === t, i.callback)
      },
      highlightElement: function (e, t, n) {
        var i = function (e) {
          for (; e && !u.test(e.className);) e = e.parentNode;
          return e ? (e.className.match(u) || [, "none"])[1].toLowerCase() : "none"
        }(e), a = R.languages[i];
        e.className = e.className.replace(u, "").replace(/\s+/g, " ") + " language-" + i;
        var o = e.parentNode;
        o && "pre" === o.nodeName.toLowerCase() && (o.className = o.className.replace(u, "").replace(/\s+/g, " ") + " language-" + i);
        var r = {element: e, language: i, grammar: a, code: e.textContent};

        function s(e) {
          r.highlightedCode = e, R.hooks.run("before-insert", r), r.element.innerHTML = r.highlightedCode, R.hooks.run("after-highlight", r), R.hooks.run("complete", r), n && n.call(r.element)
        }

        if (R.hooks.run("before-sanity-check", r), !r.code) return R.hooks.run("complete", r), void (n && n.call(r.element));
        if (R.hooks.run("before-highlight", r), r.grammar) if (t && c.Worker) {
          var l = new Worker(R.filename);
          l.onmessage = function (e) {
            s(e.data)
          }, l.postMessage(JSON.stringify({language: r.language, code: r.code, immediateClose: !0}))
        } else s(R.highlight(r.code, r.grammar, r.language)); else s(R.util.encode(r.code))
      },
      highlight: function (e, t, n) {
        var i = {code: e, grammar: t, language: n};
        return R.hooks.run("before-tokenize", i), i.tokens = R.tokenize(i.code, i.grammar), R.hooks.run("after-tokenize", i), P.stringify(R.util.encode(i.tokens), i.language)
      },
      matchGrammar: function (e, t, n, i, a, o, r) {
        for (var s in n) if (n.hasOwnProperty(s) && n[s]) {
          var l = n[s];
          l = Array.isArray(l) ? l : [l];
          for (var c = 0; c < l.length; ++c) {
            if (r && r == s + "," + c) return;
            var u = l[c], d = u.inside, p = !!u.lookbehind, f = !!u.greedy, g = 0, h = u.alias;
            if (f && !u.pattern.global) {
              var m = u.pattern.toString().match(/[imsuy]*$/)[0];
              u.pattern = RegExp(u.pattern.source, m + "g")
            }
            u = u.pattern || u;
            for (var b = i, v = a; b < t.length; v += t[b].length, ++b) {
              var y = t[b];
              if (t.length > e.length) return;
              if (!(y instanceof P)) {
                if (f && b != t.length - 1) {
                  if (u.lastIndex = v, !(C = u.exec(e))) break;
                  for (var _ = C.index + (p && C[1] ? C[1].length : 0), E = C.index + C[0].length, S = b, T = v, w = t.length; S < w && (T < E || !t[S].type && !t[S - 1].greedy); ++S) (T += t[S].length) <= _ && (++b, v = T);
                  if (t[b] instanceof P) continue;
                  x = S - b, y = e.slice(v, T), C.index -= v
                } else {
                  u.lastIndex = 0;
                  var C = u.exec(y), x = 1
                }
                if (C) {
                  p && (g = C[1] ? C[1].length : 0), E = (_ = C.index + g) + (C = C[0].slice(g)).length;
                  var A = y.slice(0, _), O = y.slice(E), I = [b, x];
                  A && (++b, v += A.length, I.push(A));
                  var N = new P(s, d ? R.tokenize(C, d) : C, h, C, f);
                  if (I.push(N), O && I.push(O), Array.prototype.splice.apply(t, I), 1 != x && R.matchGrammar(e, t, n, b, v, !0, s + "," + c), o) break
                } else if (o) break
              }
            }
          }
        }
      },
      tokenize: function (e, t) {
        var n = [e], i = t.rest;
        if (i) {
          for (var a in i) t[a] = i[a];
          delete t.rest
        }
        return R.matchGrammar(e, n, t, 0, 0, !1), n
      },
      hooks: {
        all: {}, add: function (e, t) {
          var n = R.hooks.all;
          n[e] = n[e] || [], n[e].push(t)
        }, run: function (e, t) {
          var n = R.hooks.all[e];
          if (n && n.length) for (var i, a = 0; i = n[a++];) i(t)
        }
      },
      Token: P
    };

    function P(e, t, n, i, a) {
      this.type = e, this.content = t, this.alias = n, this.length = 0 | (i || "").length, this.greedy = !!a
    }

    if (c.Prism = R, P.stringify = function (e, t) {
      if ("string" == typeof e) return e;
      if (Array.isArray(e)) return e.map(function (e) {
        return P.stringify(e, t)
      }).join("");
      var n = {
        type: e.type,
        content: P.stringify(e.content, t),
        tag: "span",
        classes: ["token", e.type],
        attributes: {},
        language: t
      };
      if (e.alias) {
        var i = Array.isArray(e.alias) ? e.alias : [e.alias];
        Array.prototype.push.apply(n.classes, i)
      }
      R.hooks.run("wrap", n);
      var a = Object.keys(n.attributes).map(function (e) {
        return e + '="' + (n.attributes[e] || "").replace(/"/g, "&quot;") + '"'
      }).join(" ");
      return "<" + n.tag + ' class="' + n.classes.join(" ") + '"' + (a ? " " + a : "") + ">" + n.content + "</" + n.tag + ">"
    }, !c.document) return c.addEventListener && (R.disableWorkerMessageHandler || c.addEventListener("message", function (e) {
      var t = JSON.parse(e.data), n = t.language, i = t.code, a = t.immediateClose;
      c.postMessage(R.highlight(i, R.languages[n], n)), a && c.close()
    }, !1)), R;
    var e = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
    return e && (R.filename = e.src, R.manual || e.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(R.highlightAll) : window.setTimeout(R.highlightAll, 16) : document.addEventListener("DOMContentLoaded", R.highlightAll))), R
  }(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
  comment: /<!--[\s\S]*?-->/,
  prolog: /<\?[\s\S]+?\?>/,
  doctype: /<!DOCTYPE[\s\S]+?>/i,
  cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
    greedy: !0,
    inside: {
      tag: {pattern: /^<\/?[^\s>\/]+/i, inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}},
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
        inside: {punctuation: [/^=/, {pattern: /^(\s*)["']|["']$/, lookbehind: !0}]}
      },
      punctuation: /\/?>/,
      "attr-name": {pattern: /[^\s>\/]+/, inside: {namespace: /^[^\s>\/:]+:/}}
    }
  },
  entity: /&#?[\da-z]{1,8};/i
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function (e) {
  "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  value: function (e, t) {
    var n = {};
    n["language-" + t] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[t]
    }, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var i = {"included-cdata": {pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n}};
    i["language-" + t] = {pattern: /[\s\S]+/, inside: Prism.languages[t]};
    var a = {};
    a[e] = {
      pattern: RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g, e), "i"),
      lookbehind: !0,
      greedy: !0,
      inside: i
    }, Prism.languages.insertBefore("markup", "cdata", a)
  }
}), Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, function (e) {
  var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  e.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/, inside: {rule: /@[\w-]+/}},
    url: {
      pattern: RegExp("url\\((?:" + t.source + "|[^\n\r()]*)\\)", "i"),
      inside: {function: /^url/i, punctuation: /^\(|\)$/}
    },
    selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
    string: {pattern: t, greedy: !0},
    property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    important: /!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:,]/
  }, e.languages.css.atrule.inside.rest = e.languages.css;
  var n = e.languages.markup;
  n && (n.tag.addInlined("style", "css"), e.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
      pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
      inside: {
        "attr-name": {pattern: /^\s*style/i, inside: n.tag.inside},
        punctuation: /^\s*=\s*['"]|['"]\s*$/,
        "attr-value": {pattern: /.+/i, inside: e.languages.css}
      },
      alias: "language-css"
    }
  }, n.tag))
}(Prism), Prism.languages.clike = {
  comment: [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: !0
  }, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0}],
  string: {pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
  "class-name": {
    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: !0,
    inside: {punctuation: /[.\\]/}
  },
  keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/
}, Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [Prism.languages.clike["class-name"], {
    pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
    lookbehind: !0
  }],
  keyword: [{
    pattern: /((?:^|})\s*)(?:catch|finally)\b/,
    lookbehind: !0
  }, {
    pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: !0
  }],
  number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: !0,
    greedy: !0
  },
  "function-variable": {
    pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: "function"
  },
  parameter: [{
    pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }, {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
    inside: Prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
  "template-string": {
    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": {pattern: /^`|`$/, alias: "string"},
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {pattern: /^\${|}$/, alias: "punctuation"},
          rest: Prism.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  }
}), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript, Prism.languages.c = Prism.languages.extend("clike", {
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+)\w+/,
    lookbehind: !0
  },
  keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
  number: /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i
}), Prism.languages.insertBefore("c", "string", {
  macro: {
    pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    alias: "property",
    inside: {
      string: {pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/, lookbehind: !0},
      directive: {
        pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
        lookbehind: !0,
        alias: "keyword"
      }
    }
  },
  constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
}), delete Prism.languages.c.boolean, Prism.languages.csharp = Prism.languages.extend("clike", {
  keyword: /\b(?:abstract|add|alias|as|ascending|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|descending|do|double|dynamic|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|from|get|global|goto|group|if|implicit|in|int|interface|internal|into|is|join|let|lock|long|namespace|new|null|object|operator|orderby|out|override|params|partial|private|protected|public|readonly|ref|remove|return|sbyte|sealed|select|set|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|value|var|virtual|void|volatile|where|while|yield)\b/,
  string: [{
    pattern: /@("|')(?:\1\1|\\[\s\S]|(?!\1)[^\\])*\1/,
    greedy: !0
  }, {pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*?\1/, greedy: !0}],
  "class-name": [{
    pattern: /\b[A-Z]\w*(?:\.\w+)*\b(?=\s+\w+)/,
    inside: {punctuation: /\./}
  }, {
    pattern: /(\[)[A-Z]\w*(?:\.\w+)*\b/,
    lookbehind: !0,
    inside: {punctuation: /\./}
  }, {
    pattern: /(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,
    lookbehind: !0,
    inside: {punctuation: /\./}
  }, {
    pattern: /((?:\b(?:class|interface|new)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,
    lookbehind: !0,
    inside: {punctuation: /\./}
  }],
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)f?/i,
  operator: />>=?|<<=?|[-=]>|([-+&|?])\1|~|[-+*/%&|^!=<>]=?/,
  punctuation: /\?\.?|::|[{}[\];(),.:]/
}), Prism.languages.insertBefore("csharp", "class-name", {
  "generic-method": {
    pattern: /\w+\s*<[^>\r\n]+?>\s*(?=\()/,
    inside: {
      function: /^\w+/,
      "class-name": {pattern: /\b[A-Z]\w*(?:\.\w+)*\b/, inside: {punctuation: /\./}},
      keyword: Prism.languages.csharp.keyword,
      punctuation: /[<>(),.:]/
    }
  },
  preprocessor: {
    pattern: /(^\s*)#.*/m,
    lookbehind: !0,
    alias: "property",
    inside: {
      directive: {
        pattern: /(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
        lookbehind: !0,
        alias: "keyword"
      }
    }
  }
}), Prism.languages.dotnet = Prism.languages.cs = Prism.languages.csharp, function (e) {
  var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
    n = {
      environment: {pattern: RegExp("\\$" + t), alias: "constant"},
      variable: [{
        pattern: /\$?\(\([\s\S]+?\)\)/,
        greedy: !0,
        inside: {
          variable: [{pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0}, /^\$\(\(/],
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
          operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
          punctuation: /\(\(?|\)\)?|,|;/
        }
      }, {
        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
        greedy: !0,
        inside: {variable: /^\$\(|^`|\)$|`$/}
      }, {
        pattern: /\$\{[^}]+\}/,
        greedy: !0,
        inside: {
          operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
          punctuation: /[\[\]]/,
          environment: {pattern: RegExp("(\\{)" + t), lookbehind: !0, alias: "constant"}
        }
      }, /\$(?:\w+|[#?*!@$])/],
      entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
    };
  e.languages.bash = {
    shebang: {pattern: /^#!\s*\/.*/, alias: "important"},
    comment: {pattern: /(^|[^"{\\$])#.*/, lookbehind: !0},
    "function-name": [{
      pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
      lookbehind: !0,
      alias: "function"
    }, {pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/, alias: "function"}],
    "for-or-select": {pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, alias: "variable", lookbehind: !0},
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {environment: {pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t), lookbehind: !0, alias: "constant"}},
      alias: "variable",
      lookbehind: !0
    },
    string: [{
      pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\2/,
      lookbehind: !0,
      greedy: !0,
      inside: n
    }, {
      pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\3/,
      lookbehind: !0,
      greedy: !0
    }, {pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/, greedy: !0, inside: n}],
    environment: {pattern: RegExp("\\$?" + t), alias: "constant"},
    variable: n.variable,
    function: {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    keyword: {
      pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    builtin: {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
      lookbehind: !0,
      alias: "class-name"
    },
    boolean: {pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/, lookbehind: !0},
    "file-descriptor": {pattern: /\B&\d\b/, alias: "important"},
    operator: {
      pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
      inside: {"file-descriptor": {pattern: /^\d/, alias: "important"}}
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: {pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0}
  };
  for (var i = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], a = n.variable[1].inside, o = 0; o < i.length; o++) a[i[o]] = e.languages.bash[i[o]];
  e.languages.shell = e.languages.bash
}(Prism), Prism.languages.cpp = Prism.languages.extend("c", {
  "class-name": {
    pattern: /(\b(?:class|enum|struct)\s+)\w+/,
    lookbehind: !0
  },
  keyword: /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
  number: {
    pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+\.?[\da-f']*|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+\.?[\d']*|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]*/i,
    greedy: !0
  },
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
  boolean: /\b(?:true|false)\b/
}), Prism.languages.insertBefore("cpp", "string", {
  "raw-string": {
    pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
    alias: "string",
    greedy: !0
  }
}), Prism.languages.cmake = {
  comment: /#.*/,
  string: {
    pattern: /"(?:[^\\"]|\\.)*"/,
    greedy: !0,
    inside: {interpolation: {pattern: /\${(?:[^{}$]|\${[^{}$]*})*}/, inside: {punctuation: /\${|}/, variable: /\w+/}}}
  },
  variable: /\b(?:CMAKE_\w+|\w+_(?:VERSION(?:_MAJOR|_MINOR|_PATCH|_TWEAK)?|(?:BINARY|SOURCE)_DIR|DESCRIPTION|HOMEPAGE_URL|ROOT)|(?:CTEST_CUSTOM_(?:MAXIMUM_(?:(?:FAIL|PASS)ED_TEST_OUTPUT_SIZE|NUMBER_OF_(?:ERROR|WARNING)S)|ERROR_(?:P(?:OST|RE)_CONTEXT|EXCEPTION|MATCH)|P(?:OST|RE)_MEMCHECK|WARNING_(?:EXCEPTION|MATCH)|(?:MEMCHECK|TESTS)_IGNORE|P(?:OST|RE)_TEST|COVERAGE_EXCLUDE)|ANDROID|APPLE|BORLAND|BUILD_SHARED_LIBS|CACHE|CPACK_(?:ABSOLUTE_DESTINATION_FILES|COMPONENT_INCLUDE_TOPLEVEL_DIRECTORY|ERROR_ON_ABSOLUTE_INSTALL_DESTINATION|INCLUDE_TOPLEVEL_DIRECTORY|INSTALL_DEFAULT_DIRECTORY_PERMISSIONS|INSTALL_SCRIPT|PACKAGING_INSTALL_PREFIX|SET_DESTDIR|WARN_ON_ABSOLUTE_INSTALL_DESTINATION)|CTEST_(?:BINARY_DIRECTORY|BUILD_COMMAND|BUILD_NAME|BZR_COMMAND|BZR_UPDATE_OPTIONS|CHANGE_ID|CHECKOUT_COMMAND|CONFIGURATION_TYPE|CONFIGURE_COMMAND|COVERAGE_COMMAND|COVERAGE_EXTRA_FLAGS|CURL_OPTIONS|CUSTOM_(?:COVERAGE_EXCLUDE|ERROR_EXCEPTION|ERROR_MATCH|ERROR_POST_CONTEXT|ERROR_PRE_CONTEXT|MAXIMUM_FAILED_TEST_OUTPUT_SIZE|MAXIMUM_NUMBER_OF_(?:ERRORS|WARNINGS)|MAXIMUM_PASSED_TEST_OUTPUT_SIZE|MEMCHECK_IGNORE|POST_MEMCHECK|POST_TEST|PRE_MEMCHECK|PRE_TEST|TESTS_IGNORE|WARNING_EXCEPTION|WARNING_MATCH)|CVS_CHECKOUT|CVS_COMMAND|CVS_UPDATE_OPTIONS|DROP_LOCATION|DROP_METHOD|DROP_SITE|DROP_SITE_CDASH|DROP_SITE_PASSWORD|DROP_SITE_USER|EXTRA_COVERAGE_GLOB|GIT_COMMAND|GIT_INIT_SUBMODULES|GIT_UPDATE_CUSTOM|GIT_UPDATE_OPTIONS|HG_COMMAND|HG_UPDATE_OPTIONS|LABELS_FOR_SUBPROJECTS|MEMORYCHECK_(?:COMMAND|COMMAND_OPTIONS|SANITIZER_OPTIONS|SUPPRESSIONS_FILE|TYPE)|NIGHTLY_START_TIME|P4_CLIENT|P4_COMMAND|P4_OPTIONS|P4_UPDATE_OPTIONS|RUN_CURRENT_SCRIPT|SCP_COMMAND|SITE|SOURCE_DIRECTORY|SUBMIT_URL|SVN_COMMAND|SVN_OPTIONS|SVN_UPDATE_OPTIONS|TEST_LOAD|TEST_TIMEOUT|TRIGGER_SITE|UPDATE_COMMAND|UPDATE_OPTIONS|UPDATE_VERSION_ONLY|USE_LAUNCHERS)|CYGWIN|ENV|EXECUTABLE_OUTPUT_PATH|GHS-MULTI|IOS|LIBRARY_OUTPUT_PATH|MINGW|MSVC(?:10|11|12|14|60|70|71|80|90|_IDE|_TOOLSET_VERSION|_VERSION)?|MSYS|PROJECT_(?:BINARY_DIR|DESCRIPTION|HOMEPAGE_URL|NAME|SOURCE_DIR|VERSION|VERSION_(?:MAJOR|MINOR|PATCH|TWEAK))|UNIX|WIN32|WINCE|WINDOWS_PHONE|WINDOWS_STORE|XCODE|XCODE_VERSION))\b/,
  property: /\b(?:cxx_\w+|(?:ARCHIVE_OUTPUT_(?:DIRECTORY|NAME)|COMPILE_DEFINITIONS|COMPILE_PDB_NAME|COMPILE_PDB_OUTPUT_DIRECTORY|EXCLUDE_FROM_DEFAULT_BUILD|IMPORTED_(?:IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_LANGUAGES|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|NO_SONAME|OBJECTS|SONAME)|INTERPROCEDURAL_OPTIMIZATION|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_OUTPUT_NAME|LINK_FLAGS|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|MAP_IMPORTED_CONFIG|OSX_ARCHITECTURES|OUTPUT_NAME|PDB_NAME|PDB_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_NAME|STATIC_LIBRARY_FLAGS|VS_CSHARP|VS_DOTNET_REFERENCEPROP|VS_DOTNET_REFERENCE|VS_GLOBAL_SECTION_POST|VS_GLOBAL_SECTION_PRE|VS_GLOBAL|XCODE_ATTRIBUTE)_\w+|\w+_(?:CLANG_TIDY|COMPILER_LAUNCHER|CPPCHECK|CPPLINT|INCLUDE_WHAT_YOU_USE|OUTPUT_NAME|POSTFIX|VISIBILITY_PRESET)|ABSTRACT|ADDITIONAL_MAKE_CLEAN_FILES|ADVANCED|ALIASED_TARGET|ALLOW_DUPLICATE_CUSTOM_TARGETS|ANDROID_(?:ANT_ADDITIONAL_OPTIONS|API|API_MIN|ARCH|ASSETS_DIRECTORIES|GUI|JAR_DEPENDENCIES|NATIVE_LIB_DEPENDENCIES|NATIVE_LIB_DIRECTORIES|PROCESS_MAX|PROGUARD|PROGUARD_CONFIG_PATH|SECURE_PROPS_PATH|SKIP_ANT_STEP|STL_TYPE)|ARCHIVE_OUTPUT_DIRECTORY|ARCHIVE_OUTPUT_NAME|ATTACHED_FILES|ATTACHED_FILES_ON_FAIL|AUTOGEN_(?:BUILD_DIR|ORIGIN_DEPENDS|PARALLEL|SOURCE_GROUP|TARGETS_FOLDER|TARGET_DEPENDS)|AUTOMOC|AUTOMOC_(?:COMPILER_PREDEFINES|DEPEND_FILTERS|EXECUTABLE|MACRO_NAMES|MOC_OPTIONS|SOURCE_GROUP|TARGETS_FOLDER)|AUTORCC|AUTORCC_EXECUTABLE|AUTORCC_OPTIONS|AUTORCC_SOURCE_GROUP|AUTOUIC|AUTOUIC_EXECUTABLE|AUTOUIC_OPTIONS|AUTOUIC_SEARCH_PATHS|BINARY_DIR|BUILDSYSTEM_TARGETS|BUILD_RPATH|BUILD_RPATH_USE_ORIGIN|BUILD_WITH_INSTALL_NAME_DIR|BUILD_WITH_INSTALL_RPATH|BUNDLE|BUNDLE_EXTENSION|CACHE_VARIABLES|CLEAN_NO_CUSTOM|COMMON_LANGUAGE_RUNTIME|COMPATIBLE_INTERFACE_(?:BOOL|NUMBER_MAX|NUMBER_MIN|STRING)|COMPILE_(?:DEFINITIONS|FEATURES|FLAGS|OPTIONS|PDB_NAME|PDB_OUTPUT_DIRECTORY)|COST|CPACK_DESKTOP_SHORTCUTS|CPACK_NEVER_OVERWRITE|CPACK_PERMANENT|CPACK_STARTUP_SHORTCUTS|CPACK_START_MENU_SHORTCUTS|CPACK_WIX_ACL|CROSSCOMPILING_EMULATOR|CUDA_EXTENSIONS|CUDA_PTX_COMPILATION|CUDA_RESOLVE_DEVICE_SYMBOLS|CUDA_SEPARABLE_COMPILATION|CUDA_STANDARD|CUDA_STANDARD_REQUIRED|CXX_EXTENSIONS|CXX_STANDARD|CXX_STANDARD_REQUIRED|C_EXTENSIONS|C_STANDARD|C_STANDARD_REQUIRED|DEBUG_CONFIGURATIONS|DEBUG_POSTFIX|DEFINE_SYMBOL|DEFINITIONS|DEPENDS|DEPLOYMENT_ADDITIONAL_FILES|DEPLOYMENT_REMOTE_DIRECTORY|DISABLED|DISABLED_FEATURES|ECLIPSE_EXTRA_CPROJECT_CONTENTS|ECLIPSE_EXTRA_NATURES|ENABLED_FEATURES|ENABLED_LANGUAGES|ENABLE_EXPORTS|ENVIRONMENT|EXCLUDE_FROM_ALL|EXCLUDE_FROM_DEFAULT_BUILD|EXPORT_NAME|EXPORT_PROPERTIES|EXTERNAL_OBJECT|EchoString|FAIL_REGULAR_EXPRESSION|FIND_LIBRARY_USE_LIB32_PATHS|FIND_LIBRARY_USE_LIB64_PATHS|FIND_LIBRARY_USE_LIBX32_PATHS|FIND_LIBRARY_USE_OPENBSD_VERSIONING|FIXTURES_CLEANUP|FIXTURES_REQUIRED|FIXTURES_SETUP|FOLDER|FRAMEWORK|Fortran_FORMAT|Fortran_MODULE_DIRECTORY|GENERATED|GENERATOR_FILE_NAME|GENERATOR_IS_MULTI_CONFIG|GHS_INTEGRITY_APP|GHS_NO_SOURCE_GROUP_FILE|GLOBAL_DEPENDS_DEBUG_MODE|GLOBAL_DEPENDS_NO_CYCLES|GNUtoMS|HAS_CXX|HEADER_FILE_ONLY|HELPSTRING|IMPLICIT_DEPENDS_INCLUDE_TRANSFORM|IMPORTED|IMPORTED_(?:COMMON_LANGUAGE_RUNTIME|CONFIGURATIONS|GLOBAL|IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_(?:LANGUAGES|LIBRARIES|MULTIPLICITY)|LOCATION|NO_SONAME|OBJECTS|SONAME)|IMPORT_PREFIX|IMPORT_SUFFIX|INCLUDE_DIRECTORIES|INCLUDE_REGULAR_EXPRESSION|INSTALL_NAME_DIR|INSTALL_RPATH|INSTALL_RPATH_USE_LINK_PATH|INTERFACE_(?:AUTOUIC_OPTIONS|COMPILE_DEFINITIONS|COMPILE_FEATURES|COMPILE_OPTIONS|INCLUDE_DIRECTORIES|LINK_DEPENDS|LINK_DIRECTORIES|LINK_LIBRARIES|LINK_OPTIONS|POSITION_INDEPENDENT_CODE|SOURCES|SYSTEM_INCLUDE_DIRECTORIES)|INTERPROCEDURAL_OPTIMIZATION|IN_TRY_COMPILE|IOS_INSTALL_COMBINED|JOB_POOLS|JOB_POOL_COMPILE|JOB_POOL_LINK|KEEP_EXTENSION|LABELS|LANGUAGE|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_OUTPUT_NAME|LINKER_LANGUAGE|LINK_(?:DEPENDS|DEPENDS_NO_SHARED|DIRECTORIES|FLAGS|INTERFACE_LIBRARIES|INTERFACE_MULTIPLICITY|LIBRARIES|OPTIONS|SEARCH_END_STATIC|SEARCH_START_STATIC|WHAT_YOU_USE)|LISTFILE_STACK|LOCATION|MACOSX_BUNDLE|MACOSX_BUNDLE_INFO_PLIST|MACOSX_FRAMEWORK_INFO_PLIST|MACOSX_PACKAGE_LOCATION|MACOSX_RPATH|MACROS|MANUALLY_ADDED_DEPENDENCIES|MEASUREMENT|MODIFIED|NAME|NO_SONAME|NO_SYSTEM_FROM_IMPORTED|OBJECT_DEPENDS|OBJECT_OUTPUTS|OSX_ARCHITECTURES|OUTPUT_NAME|PACKAGES_FOUND|PACKAGES_NOT_FOUND|PARENT_DIRECTORY|PASS_REGULAR_EXPRESSION|PDB_NAME|PDB_OUTPUT_DIRECTORY|POSITION_INDEPENDENT_CODE|POST_INSTALL_SCRIPT|PREDEFINED_TARGETS_FOLDER|PREFIX|PRE_INSTALL_SCRIPT|PRIVATE_HEADER|PROCESSORS|PROCESSOR_AFFINITY|PROJECT_LABEL|PUBLIC_HEADER|REPORT_UNDEFINED_PROPERTIES|REQUIRED_FILES|RESOURCE|RESOURCE_LOCK|RULE_LAUNCH_COMPILE|RULE_LAUNCH_CUSTOM|RULE_LAUNCH_LINK|RULE_MESSAGES|RUNTIME_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_NAME|RUN_SERIAL|SKIP_AUTOGEN|SKIP_AUTOMOC|SKIP_AUTORCC|SKIP_AUTOUIC|SKIP_BUILD_RPATH|SKIP_RETURN_CODE|SOURCES|SOURCE_DIR|SOVERSION|STATIC_LIBRARY_FLAGS|STATIC_LIBRARY_OPTIONS|STRINGS|SUBDIRECTORIES|SUFFIX|SYMBOLIC|TARGET_ARCHIVES_MAY_BE_SHARED_LIBS|TARGET_MESSAGES|TARGET_SUPPORTS_SHARED_LIBS|TESTS|TEST_INCLUDE_FILE|TEST_INCLUDE_FILES|TIMEOUT|TIMEOUT_AFTER_MATCH|TYPE|USE_FOLDERS|VALUE|VARIABLES|VERSION|VISIBILITY_INLINES_HIDDEN|VS_(?:CONFIGURATION_TYPE|COPY_TO_OUT_DIR|DEBUGGER_(?:COMMAND|COMMAND_ARGUMENTS|ENVIRONMENT|WORKING_DIRECTORY)|DEPLOYMENT_CONTENT|DEPLOYMENT_LOCATION|DOTNET_REFERENCES|DOTNET_REFERENCES_COPY_LOCAL|GLOBAL_KEYWORD|GLOBAL_PROJECT_TYPES|GLOBAL_ROOTNAMESPACE|INCLUDE_IN_VSIX|IOT_STARTUP_TASK|KEYWORD|RESOURCE_GENERATOR|SCC_AUXPATH|SCC_LOCALPATH|SCC_PROJECTNAME|SCC_PROVIDER|SDK_REFERENCES|SHADER_(?:DISABLE_OPTIMIZATIONS|ENABLE_DEBUG|ENTRYPOINT|FLAGS|MODEL|OBJECT_FILE_NAME|OUTPUT_HEADER_FILE|TYPE|VARIABLE_NAME)|STARTUP_PROJECT|TOOL_OVERRIDE|USER_PROPS|WINRT_COMPONENT|WINRT_EXTENSIONS|WINRT_REFERENCES|XAML_TYPE)|WILL_FAIL|WIN32_EXECUTABLE|WINDOWS_EXPORT_ALL_SYMBOLS|WORKING_DIRECTORY|WRAP_EXCLUDE|XCODE_(?:EMIT_EFFECTIVE_PLATFORM_NAME|EXPLICIT_FILE_TYPE|FILE_ATTRIBUTES|LAST_KNOWN_FILE_TYPE|PRODUCT_TYPE|SCHEME_(?:ADDRESS_SANITIZER|ADDRESS_SANITIZER_USE_AFTER_RETURN|ARGUMENTS|DISABLE_MAIN_THREAD_CHECKER|DYNAMIC_LIBRARY_LOADS|DYNAMIC_LINKER_API_USAGE|ENVIRONMENT|EXECUTABLE|GUARD_MALLOC|MAIN_THREAD_CHECKER_STOP|MALLOC_GUARD_EDGES|MALLOC_SCRIBBLE|MALLOC_STACK|THREAD_SANITIZER(?:_STOP)?|UNDEFINED_BEHAVIOUR_SANITIZER(?:_STOP)?|ZOMBIE_OBJECTS))|XCTEST)\b/,
  keyword: /\b(?:add_compile_definitions|add_compile_options|add_custom_command|add_custom_target|add_definitions|add_dependencies|add_executable|add_library|add_link_options|add_subdirectory|add_test|aux_source_directory|break|build_command|build_name|cmake_host_system_information|cmake_minimum_required|cmake_parse_arguments|cmake_policy|configure_file|continue|create_test_sourcelist|ctest_build|ctest_configure|ctest_coverage|ctest_empty_binary_directory|ctest_memcheck|ctest_read_custom_files|ctest_run_script|ctest_sleep|ctest_start|ctest_submit|ctest_test|ctest_update|ctest_upload|define_property|else|elseif|enable_language|enable_testing|endforeach|endfunction|endif|endmacro|endwhile|exec_program|execute_process|export|export_library_dependencies|file|find_file|find_library|find_package|find_path|find_program|fltk_wrap_ui|foreach|function|get_cmake_property|get_directory_property|get_filename_component|get_property|get_source_file_property|get_target_property|get_test_property|if|include|include_directories|include_external_msproject|include_guard|include_regular_expression|install|install_files|install_programs|install_targets|link_directories|link_libraries|list|load_cache|load_command|macro|make_directory|mark_as_advanced|math|message|option|output_required_files|project|qt_wrap_cpp|qt_wrap_ui|remove|remove_definitions|return|separate_arguments|set|set_directory_properties|set_property|set_source_files_properties|set_target_properties|set_tests_properties|site_name|source_group|string|subdir_depends|subdirs|target_compile_definitions|target_compile_features|target_compile_options|target_include_directories|target_link_directories|target_link_libraries|target_link_options|target_sources|try_compile|try_run|unset|use_mangled_mesa|utility_source|variable_requires|variable_watch|while|write_file)(?=\s*\()\b/,
  boolean: /\b(?:ON|OFF|TRUE|FALSE)\b/,
  namespace: /\b(?:PROPERTIES|SHARED|PRIVATE|STATIC|PUBLIC|INTERFACE|TARGET_OBJECTS)\b/,
  operator: /\b(?:NOT|AND|OR|MATCHES|LESS|GREATER|EQUAL|STRLESS|STRGREATER|STREQUAL|VERSION_LESS|VERSION_EQUAL|VERSION_GREATER|DEFINED)\b/,
  inserted: {pattern: /\b\w+::\w+\b/, alias: "class-name"},
  number: /\b\d+(?:\.\d+)*\b/,
  function: /\b[a-z_]\w*(?=\s*\()\b/i,
  punctuation: /[()>}]|\$[<{]/
}, function (e) {
  e.languages.ruby = e.languages.extend("clike", {
    comment: [/#.*/, {pattern: /^=begin\s[\s\S]*?^=end/m, greedy: !0}],
    keyword: /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/
  });
  var t = {pattern: /#\{[^}]+\}/, inside: {delimiter: {pattern: /^#\{|\}$/, alias: "tag"}, rest: e.languages.ruby}};
  delete e.languages.ruby.function, e.languages.insertBefore("ruby", "keyword", {
    regex: [{
      pattern: /%r([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[gim]{0,3}/,
      greedy: !0,
      inside: {interpolation: t}
    }, {
      pattern: /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,
      greedy: !0,
      inside: {interpolation: t}
    }, {
      pattern: /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,
      greedy: !0,
      inside: {interpolation: t}
    }, {
      pattern: /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,
      greedy: !0,
      inside: {interpolation: t}
    }, {
      pattern: /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,
      greedy: !0,
      inside: {interpolation: t}
    }, {
      pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
      lookbehind: !0,
      greedy: !0
    }],
    variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
    symbol: {pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/, lookbehind: !0},
    "method-definition": {
      pattern: /(\bdef\s+)[\w.]+/,
      lookbehind: !0,
      inside: {function: /\w+$/, rest: e.languages.ruby}
    }
  }), e.languages.insertBefore("ruby", "number", {
    builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
    constant: /\b[A-Z]\w*(?:[?!]|\b)/
  }), e.languages.ruby.string = [{
    pattern: /%[qQiIwWxs]?([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
    greedy: !0,
    inside: {interpolation: t}
  }, {
    pattern: /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,
    greedy: !0,
    inside: {interpolation: t}
  }, {
    pattern: /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,
    greedy: !0,
    inside: {interpolation: t}
  }, {
    pattern: /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,
    greedy: !0,
    inside: {interpolation: t}
  }, {
    pattern: /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,
    greedy: !0,
    inside: {interpolation: t}
  }, {
    pattern: /("|')(?:#\{[^}]+\}|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
    inside: {interpolation: t}
  }], e.languages.rb = e.languages.ruby
}(Prism), Prism.languages.dart = Prism.languages.extend("clike", {
  string: [{
    pattern: /r?("""|''')[\s\S]*?\1/,
    greedy: !0
  }, {pattern: /r?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0}],
  keyword: [/\b(?:async|sync|yield)\*/, /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|default|deferred|do|dynamic|else|enum|export|external|extends|factory|final|finally|for|get|if|implements|import|in|library|new|null|operator|part|rethrow|return|set|static|super|switch|this|throw|try|typedef|var|void|while|with|yield)\b/],
  operator: /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/
}), Prism.languages.insertBefore("dart", "function", {metadata: {pattern: /@\w+/, alias: "symbol"}}), function (b) {
  function v(e, t) {
    return "___" + e.toUpperCase() + t + "___"
  }

  Object.defineProperties(b.languages["markup-templating"] = {}, {
    buildPlaceholders: {
      value: function (i, a, e, o) {
        if (i.language === a) {
          var r = i.tokenStack = [];
          i.code = i.code.replace(e, function (e) {
            if ("function" == typeof o && !o(e)) return e;
            for (var t, n = r.length; -1 !== i.code.indexOf(t = v(a, n));) ++n;
            return r[n] = e, t
          }), i.grammar = b.languages.markup
        }
      }
    }, tokenizePlaceholders: {
      value: function (f, g) {
        if (f.language === g && f.tokenStack) {
          f.grammar = b.languages[g];
          var h = 0, m = Object.keys(f.tokenStack);
          !function e(t) {
            for (var n = 0; n < t.length && !(h >= m.length); n++) {
              var i = t[n];
              if ("string" == typeof i || i.content && "string" == typeof i.content) {
                var a = m[h], o = f.tokenStack[a], r = "string" == typeof i ? i : i.content, s = v(g, a),
                  l = r.indexOf(s);
                if (-1 < l) {
                  ++h;
                  var c = r.substring(0, l), u = new b.Token(g, b.tokenize(o, f.grammar), "language-" + g, o),
                    d = r.substring(l + s.length), p = [];
                  c && p.push.apply(p, e([c])), p.push(u), d && p.push.apply(p, e([d])), "string" == typeof i ? t.splice.apply(t, [n, 1].concat(p)) : i.content = p
                }
              } else i.content && e(i.content)
            }
            return t
          }(f.tokens)
        }
      }
    }
  })
}(Prism), Prism.languages.fsharp = Prism.languages.extend("clike", {
  comment: [{pattern: /(^|[^\\])\(\*[\s\S]*?\*\)/, lookbehind: !0}, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0}],
  string: {
    pattern: /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?|'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/,
    lookbehind: !0,
    inside: {operator: /->|\*/, punctuation: /\./}
  },
  keyword: /\b(?:let|return|use|yield)(?:!\B|\b)|\b(abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|select|static|struct|then|to|true|try|type|upcast|val|void|when|while|with|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/,
  number: [/\b0x[\da-fA-F]+(?:un|lf|LF)?\b/, /\b0b[01]+(?:y|uy)?\b/, /(?:\b\d+\.?\d*|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i, /\b\d+(?:[IlLsy]|u[lsy]?|UL)?\b/],
  operator: /([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/
}), Prism.languages.insertBefore("fsharp", "keyword", {
  preprocessor: {
    pattern: /^[^\r\n\S]*#.*/m,
    alias: "property",
    inside: {directive: {pattern: /(\s*#)\b(?:else|endif|if|light|line|nowarn)\b/, lookbehind: !0, alias: "keyword"}}
  }
}), Prism.languages.insertBefore("fsharp", "punctuation", {
  "computation-expression": {
    pattern: /[_a-z]\w*(?=\s*\{)/i,
    alias: "keyword"
  }
}), Prism.languages.insertBefore("fsharp", "string", {
  annotation: {
    pattern: /\[<.+?>\]/,
    inside: {
      punctuation: /^\[<|>\]$/,
      "class-name": {pattern: /^\w+$|(^|;\s*)[A-Z]\w*(?=\()/, lookbehind: !0},
      "annotation-content": {pattern: /[\s\S]+/, inside: Prism.languages.fsharp}
    }
  }
}), Prism.languages.go = Prism.languages.extend("clike", {
  keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
  boolean: /\b(?:_|iota|nil|true|false)\b/,
  operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  number: /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
  string: {pattern: /(["'`])(\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0}
}), delete Prism.languages.go["class-name"], Prism.languages.haskell = {
  comment: {pattern: /(^|[^-!#$%*+=?&@|~.:<>^\\\/])(?:--[^-!#$%*+=?&@|~.:<>^\\\/].*|{-[\s\S]*?-})/m, lookbehind: !0},
  char: /'(?:[^\\']|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,
  string: {
    pattern: /"(?:[^\\"]|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\d+|o[0-7]+|x[0-9a-fA-F]+)|\\\s+\\)*"/,
    greedy: !0
  },
  keyword: /\b(?:case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,
  import_statement: {
    pattern: /((?:\r?\n|\r|^)\s*)import\s+(?:qualified\s+)?(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*(?:\s+as\s+(?:[A-Z][_a-zA-Z0-9']*)(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,
    lookbehind: !0,
    inside: {keyword: /\b(?:import|qualified|as|hiding)\b/}
  },
  builtin: /\b(?:abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,
  number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,
  operator: /\s\.\s|[-!#$%*+=?&@|~.:<>^\\\/]*\.[-!#$%*+=?&@|~.:<>^\\\/]+|[-!#$%*+=?&@|~.:<>^\\\/]+\.[-!#$%*+=?&@|~.:<>^\\\/]*|[-!#$%*+=?&@|~:<>^\\\/]+|`([A-Z][\w']*\.)*[_a-z][\w']*`/,
  hvariable: /\b(?:[A-Z][\w']*\.)*[_a-z][\w']*\b/,
  constant: /\b(?:[A-Z][\w']*\.)*[A-Z][\w']*\b/,
  punctuation: /[{}[\];(),.:]/
}, Prism.languages.hs = Prism.languages.haskell, function (e) {
  var t = /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/,
    n = /\b[A-Z](?:\w*[a-z]\w*)?\b/;
  e.languages.java = e.languages.extend("clike", {
    "class-name": [n, /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/],
    keyword: t,
    function: [e.languages.clike.function, {pattern: /(\:\:)[a-z_]\w*/, lookbehind: !0}],
    number: /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    operator: {pattern: /(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*/%&|^!=<>]=?)/m, lookbehind: !0}
  }), e.languages.insertBefore("java", "class-name", {
    annotation: {
      alias: "punctuation",
      pattern: /(^|[^.])@\w+/,
      lookbehind: !0
    },
    namespace: {
      pattern: /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,
      lookbehind: !0,
      inside: {punctuation: /\./}
    },
    generics: {
      pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
      inside: {"class-name": n, keyword: t, punctuation: /[<>(),.:]/, operator: /[?&|]/}
    }
  })
}(Prism), function (t) {
  t.languages.php = t.languages.extend("clike", {
    keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
    boolean: {pattern: /\b(?:false|true)\b/i, alias: "constant"},
    constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
    comment: {pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0}
  }), t.languages.insertBefore("php", "string", {
    "shell-comment": {
      pattern: /(^|[^\\])#.*/,
      lookbehind: !0,
      alias: "comment"
    }
  }), t.languages.insertBefore("php", "comment", {
    delimiter: {
      pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
      alias: "important"
    }
  }), t.languages.insertBefore("php", "keyword", {
    variable: /\$+(?:\w+\b|(?={))/i,
    package: {pattern: /(\\|namespace\s+|use\s+)[\w\\]+/, lookbehind: !0, inside: {punctuation: /\\/}}
  }), t.languages.insertBefore("php", "operator", {property: {pattern: /(->)[\w]+/, lookbehind: !0}});
  var e = {
    pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
    lookbehind: !0,
    inside: {rest: t.languages.php}
  };
  t.languages.insertBefore("php", "string", {
    "nowdoc-string": {
      pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
      greedy: !0,
      alias: "string",
      inside: {delimiter: {pattern: /^<<<'[^']+'|[a-z_]\w*;$/i, alias: "symbol", inside: {punctuation: /^<<<'?|[';]$/}}}
    },
    "heredoc-string": {
      pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
      greedy: !0,
      alias: "string",
      inside: {
        delimiter: {
          pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
          alias: "symbol",
          inside: {punctuation: /^<<<"?|[";]$/}
        }, interpolation: e
      }
    },
    "single-quoted-string": {pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0, alias: "string"},
    "double-quoted-string": {pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0, alias: "string", inside: {interpolation: e}}
  }), delete t.languages.php.string, t.hooks.add("before-tokenize", function (e) {
    /<\?/.test(e.code) && t.languages["markup-templating"].buildPlaceholders(e, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi)
  }), t.hooks.add("after-tokenize", function (e) {
    t.languages["markup-templating"].tokenizePlaceholders(e, "php")
  })
}(Prism), Prism.languages.json = {
  property: {pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0},
  string: {pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0},
  comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
  number: /-?\d+\.?\d*(e[+-]?\d+)?/i,
  punctuation: /[{}[\],]/,
  operator: /:/,
  boolean: /\b(?:true|false)\b/,
  null: {pattern: /\bnull\b/, alias: "keyword"}
}, function (e) {
  var t = /\\(?:[^a-z()[\]]|[a-z*]+)/i, n = {"equation-command": {pattern: t, alias: "regex"}};
  e.languages.latex = {
    comment: /%.*/m,
    cdata: {pattern: /(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/, lookbehind: !0},
    equation: [{
      pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
      inside: n,
      alias: "string"
    }, {
      pattern: /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
      lookbehind: !0,
      inside: n,
      alias: "string"
    }],
    keyword: {
      pattern: /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    url: {pattern: /(\\url\{)[^}]+(?=\})/, lookbehind: !0},
    headline: {
      pattern: /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,
      lookbehind: !0,
      alias: "class-name"
    },
    function: {pattern: t, alias: "selector"},
    punctuation: /[[\]{}&]/
  }, e.languages.tex = e.languages.latex, e.languages.context = e.languages.latex
}(Prism), function (e) {
  function t(e) {
    return RegExp("(\\()" + e + "(?=[\\s\\)])")
  }

  function n(e) {
    return RegExp("([\\s([])" + e + "(?=[\\s)])")
  }

  var i = "[-+*/_~!@$%^=<>{}\\w]+", a = "(\\()", o = "(?=\\))", r = "(?=\\s)", s = {
    heading: {pattern: /;;;.*/, alias: ["comment", "title"]},
    comment: /;.*/,
    string: {
      pattern: /"(?:[^"\\]|\\.)*"/,
      greedy: !0,
      inside: {argument: /[-A-Z]+(?=[.,\s])/, symbol: RegExp("`" + i + "'")}
    },
    "quoted-symbol": {pattern: RegExp("#?'" + i), alias: ["variable", "symbol"]},
    "lisp-property": {pattern: RegExp(":" + i), alias: "property"},
    splice: {pattern: RegExp(",@?" + i), alias: ["symbol", "variable"]},
    keyword: [{
      pattern: RegExp(a + "(?:(?:lexical-)?let\\*?|(?:cl-)?letf|if|when|while|unless|cons|cl-loop|and|or|not|cond|setq|error|message|null|require|provide|use-package)" + r),
      lookbehind: !0
    }, {pattern: RegExp(a + "(?:for|do|collect|return|finally|append|concat|in|by)" + r), lookbehind: !0}],
    declare: {pattern: t("declare"), lookbehind: !0, alias: "keyword"},
    interactive: {pattern: t("interactive"), lookbehind: !0, alias: "keyword"},
    boolean: {pattern: n("(?:t|nil)"), lookbehind: !0},
    number: {pattern: n("[-+]?\\d+(?:\\.\\d*)?"), lookbehind: !0},
    defvar: {
      pattern: RegExp(a + "def(?:var|const|custom|group)\\s+" + i),
      lookbehind: !0,
      inside: {keyword: /^def[a-z]+/, variable: RegExp(i)}
    },
    defun: {
      pattern: RegExp(a + "(?:cl-)?(?:defun\\*?|defmacro)\\s+" + i + "\\s+\\([\\s\\S]*?\\)"),
      lookbehind: !0,
      inside: {
        keyword: /^(?:cl-)?def\S+/,
        arguments: null,
        function: {pattern: RegExp("(^\\s)" + i), lookbehind: !0},
        punctuation: /[()]/
      }
    },
    lambda: {
      pattern: RegExp(a + "lambda\\s+\\((?:&?" + i + "\\s*)*\\)"),
      lookbehind: !0,
      inside: {keyword: /^lambda/, arguments: null, punctuation: /[()]/}
    },
    car: {pattern: RegExp(a + i), lookbehind: !0},
    punctuation: [/(['`,]?\(|[)\[\]])/, {pattern: /(\s)\.(?=\s)/, lookbehind: !0}]
  }, l = {
    "lisp-marker": RegExp("&[-+*/_~!@$%^=<>{}\\w]+"),
    rest: {
      argument: {pattern: RegExp(i), alias: "variable"},
      varform: {
        pattern: RegExp(a + i + "\\s+\\S[\\s\\S]*" + o),
        lookbehind: !0,
        inside: {string: s.string, boolean: s.boolean, number: s.number, symbol: s.symbol, punctuation: /[()]/}
      }
    }
  }, c = "\\S+(?:\\s+\\S+)*", u = {
    pattern: RegExp(a + "[\\s\\S]*" + o),
    lookbehind: !0,
    inside: {
      "rest-vars": {pattern: RegExp("&(?:rest|body)\\s+" + c), inside: l},
      "other-marker-vars": {pattern: RegExp("&(?:optional|aux)\\s+" + c), inside: l},
      keys: {pattern: RegExp("&key\\s+" + c + "(?:\\s+&allow-other-keys)?"), inside: l},
      argument: {pattern: RegExp(i), alias: "variable"},
      punctuation: /[()]/
    }
  };
  s.lambda.inside.arguments = u, s.defun.inside.arguments = e.util.clone(u), s.defun.inside.arguments.inside.sublist = u, e.languages.lisp = s, e.languages.elisp = s, e.languages.emacs = s, e.languages["emacs-lisp"] = s
}(Prism), Prism.languages.lua = {
  comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
  string: {pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[\s\S]))*\1|\[(=*)\[[\s\S]*?\]\2\]/, greedy: !0},
  number: /\b0x[a-f\d]+\.?[a-f\d]*(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|\.?\d*(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
  keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
  function: /(?!\d)\w+(?=\s*(?:[({]))/,
  operator: [/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/, {pattern: /(^|[^.])\.\.(?!\.)/, lookbehind: !0}],
  punctuation: /[\[\](){},;]|\.+|:+/
}, Prism.languages.makefile = {
  comment: {pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/, lookbehind: !0},
  string: {pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
  builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
  symbol: {pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m, inside: {variable: /\$+(?:[^(){}:#=\s]+|(?=[({]))/}},
  variable: /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  keyword: [/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/, {
    pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
    lookbehind: !0
  }],
  operator: /(?:::|[?:+!])?=|[|@]/,
  punctuation: /[:;(){}]/
}, Prism.languages.matlab = {
  comment: [/%\{[\s\S]*?\}%/, /%.+/],
  string: {pattern: /\B'(?:''|[^'\r\n])*'/, greedy: !0},
  number: /(?:\b\d+\.?\d*|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
  keyword: /\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
  function: /(?!\d)\w+(?=\s*\()/,
  operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
  punctuation: /\.{3}|[.,;\[\](){}!]/
}, Prism.languages.objectivec = Prism.languages.extend("c", {
  keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
  operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
}), delete Prism.languages.objectivec["class-name"], Prism.languages.sql = {
  comment: {pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0},
  variable: [{pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0}, /@[\w.$]+/],
  string: {pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: !0, lookbehind: !0},
  function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
  operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/
}, function (e) {
  var t = Prism.languages.powershell = {
    comment: [{pattern: /(^|[^`])<#[\s\S]*?#>/, lookbehind: !0}, {pattern: /(^|[^`])#.*/, lookbehind: !0}],
    string: [{
      pattern: /"(?:`[\s\S]|[^`"])*"/,
      greedy: !0,
      inside: {function: {pattern: /(^|[^`])\$\((?:\$\(.*?\)|(?!\$\()[^\r\n)])*\)/, lookbehind: !0, inside: {}}}
    }, {pattern: /'(?:[^']|'')*'/, greedy: !0}],
    namespace: /\[[a-z](?:\[(?:\[[^\]]*]|[^\[\]])*]|[^\[\]])*]/i,
    boolean: /\$(?:true|false)\b/i,
    variable: /\$\w+\b/i,
    function: [/\b(?:Add-(?:Computer|Content|History|Member|PSSnapin|Type)|Checkpoint-Computer|Clear-(?:Content|EventLog|History|Item|ItemProperty|Variable)|Compare-Object|Complete-Transaction|Connect-PSSession|ConvertFrom-(?:Csv|Json|StringData)|Convert-Path|ConvertTo-(?:Csv|Html|Json|Xml)|Copy-(?:Item|ItemProperty)|Debug-Process|Disable-(?:ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Disconnect-PSSession|Enable-(?:ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Enter-PSSession|Exit-PSSession|Export-(?:Alias|Clixml|Console|Csv|FormatData|ModuleMember|PSSession)|ForEach-Object|Format-(?:Custom|List|Table|Wide)|Get-(?:Alias|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Culture|Date|Event|EventLog|EventSubscriber|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|WmiObject)|Group-Object|Import-(?:Alias|Clixml|Csv|LocalizedData|Module|PSSession)|Invoke-(?:Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)|Join-Path|Limit-EventLog|Measure-(?:Command|Object)|Move-(?:Item|ItemProperty)|New-(?:Alias|Event|EventLog|Item|ItemProperty|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy)|Out-(?:Default|File|GridView|Host|Null|Printer|String)|Pop-Location|Push-Location|Read-Host|Receive-(?:Job|PSSession)|Register-(?:EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)|Remove-(?:Computer|Event|EventLog|Item|ItemProperty|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)|Rename-(?:Computer|Item|ItemProperty)|Reset-ComputerMachinePassword|Resolve-Path|Restart-(?:Computer|Service)|Restore-Computer|Resume-(?:Job|Service)|Save-Help|Select-(?:Object|String|Xml)|Send-MailMessage|Set-(?:Alias|Content|Date|Item|ItemProperty|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)|Show-(?:Command|ControlPanelItem|EventLog)|Sort-Object|Split-Path|Start-(?:Job|Process|Service|Sleep|Transaction)|Stop-(?:Computer|Job|Process|Service)|Suspend-(?:Job|Service)|Tee-Object|Test-(?:ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)|Trace-Command|Unblock-File|Undo-Transaction|Unregister-(?:Event|PSSessionConfiguration)|Update-(?:FormatData|Help|List|TypeData)|Use-Transaction|Wait-(?:Event|Job|Process)|Where-Object|Write-(?:Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning))\b/i, /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],
    keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
    operator: {
      pattern: /(\W?)(?:!|-(eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
      lookbehind: !0
    },
    punctuation: /[|{}[\];(),.]/
  }, n = t.string[0].inside;
  n.boolean = t.boolean, n.variable = t.variable, n.function.inside = t
}(), Prism.languages.scss = Prism.languages.extend("css", {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: !0
  },
  atrule: {pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/, inside: {rule: /@[\w-]+/}},
  url: /(?:[-a-z]+-)?url(?=\()/i,
  selector: {
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
    inside: {parent: {pattern: /&/, alias: "important"}, placeholder: /%[-\w]+/, variable: /\$[-\w]+|#\{\$[-\w]+\}/}
  },
  property: {pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/, inside: {variable: /\$[-\w]+|#\{\$[-\w]+\}/}}
}), Prism.languages.insertBefore("scss", "atrule", {
  keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
    pattern: /( +)(?:from|through)(?= )/,
    lookbehind: !0
  }]
}), Prism.languages.insertBefore("scss", "important", {variable: /\$[-\w]+|#\{\$[-\w]+\}/}), Prism.languages.insertBefore("scss", "function", {
  placeholder: {
    pattern: /%[-\w]+/,
    alias: "selector"
  },
  statement: {pattern: /\B!(?:default|optional)\b/i, alias: "keyword"},
  boolean: /\b(?:true|false)\b/,
  null: {pattern: /\bnull\b/, alias: "keyword"},
  operator: {pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/, lookbehind: !0}
}), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss, Prism.languages.python = {
  comment: {pattern: /(^|[^\\])#.*/, lookbehind: !0},
  "string-interpolation": {
    pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
        lookbehind: !0,
        inside: {
          "format-spec": {pattern: /(:)[^:(){}]+(?=}$)/, lookbehind: !0},
          "conversion-option": {pattern: /![sra](?=[:}]$)/, alias: "punctuation"},
          rest: null
        }
      }, string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]+?\1/i, greedy: !0, alias: "string"},
  string: {pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0},
  function: {pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0},
  "class-name": {pattern: /(\bclass\s+)\w+/i, lookbehind: !0},
  decorator: {
    pattern: /(^\s*)@\w+(?:\.\w+)*/im,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {punctuation: /\./}
  },
  keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:True|False|None)\b/,
  number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
  operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
}, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python, Prism.languages.r = {
  comment: /#.*/,
  string: {pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0},
  "percent-operator": {pattern: /%[^%\s]*%/, alias: "operator"},
  boolean: /\b(?:TRUE|FALSE)\b/,
  ellipsis: /\.\.(?:\.|\d+)/,
  number: [/\b(?:NaN|Inf)\b/, /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+\.?\d*|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/],
  keyword: /\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,
  operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
  punctuation: /[(){}\[\],;]/
}, function (e) {
  e.languages.sass = e.languages.extend("css", {
    comment: {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
      lookbehind: !0
    }
  }), e.languages.insertBefore("sass", "atrule", {
    "atrule-line": {
      pattern: /^(?:[ \t]*)[@+=].+/m,
      inside: {atrule: /(?:@[\w-]+|[+=])/m}
    }
  }), delete e.languages.sass.atrule;
  var t = /\$[-\w]+|#\{\$[-\w]+\}/,
    n = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {pattern: /(\s+)-(?=\s)/, lookbehind: !0}];
  e.languages.insertBefore("sass", "property", {
    "variable-line": {
      pattern: /^[ \t]*\$.+/m,
      inside: {punctuation: /:/, variable: t, operator: n}
    },
    "property-line": {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
      inside: {
        property: [/[^:\s]+(?=\s*:)/, {pattern: /(:)[^:\s]+/, lookbehind: !0}],
        punctuation: /:/,
        variable: t,
        operator: n,
        important: e.languages.sass.important
      }
    }
  }), delete e.languages.sass.property, delete e.languages.sass.important, e.languages.insertBefore("sass", "punctuation", {
    selector: {
      pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
      lookbehind: !0
    }
  })
}(Prism), Prism.languages.swift = Prism.languages.extend("clike", {
  string: {
    pattern: /("|')(\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
        inside: {delimiter: {pattern: /^\\\(|\)$/, alias: "variable"}}
      }
    }
  },
  keyword: /\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
  number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
  constant: /\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
  atrule: /@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
  builtin: /\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/
}), Prism.languages.swift.string.inside.interpolation.inside.rest = Prism.languages.swift, Prism.languages.yaml = {
  scalar: {
    pattern: /([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,
    lookbehind: !0,
    alias: "string"
  },
  comment: /#.*/,
  key: {
    pattern: /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
    lookbehind: !0,
    alias: "atrule"
  },
  directive: {pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important"},
  datetime: {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,
    lookbehind: !0,
    alias: "number"
  },
  boolean: {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,
    lookbehind: !0,
    alias: "important"
  },
  null: {pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im, lookbehind: !0, alias: "important"},
  string: {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}|\s*#))/m,
    lookbehind: !0,
    greedy: !0
  },
  number: {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
    lookbehind: !0
  },
  tag: /![^\s]+/,
  important: /[&*][\w]+/,
  punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
}, Prism.languages.yml = Prism.languages.yaml, Prism.languages.verilog = {
  comment: /\/\/.*|\/\*[\s\S]*?\*\//,
  string: {pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0},
  property: /\B\$\w+\b/,
  constant: /\B`\w+\b/,
  function: /\w+(?=\()/,
  keyword: /\b(?:alias|and|assert|assign|assume|automatic|before|begin|bind|bins|binsof|bit|break|buf|bufif0|bufif1|byte|class|case|casex|casez|cell|chandle|clocking|cmos|config|const|constraint|context|continue|cover|covergroup|coverpoint|cross|deassign|default|defparam|design|disable|dist|do|edge|else|end|endcase|endclass|endclocking|endconfig|endfunction|endgenerate|endgroup|endinterface|endmodule|endpackage|endprimitive|endprogram|endproperty|endspecify|endsequence|endtable|endtask|enum|event|expect|export|extends|extern|final|first_match|for|force|foreach|forever|fork|forkjoin|function|generate|genvar|highz0|highz1|if|iff|ifnone|ignore_bins|illegal_bins|import|incdir|include|initial|inout|input|inside|instance|int|integer|interface|intersect|join|join_any|join_none|large|liblist|library|local|localparam|logic|longint|macromodule|matches|medium|modport|module|nand|negedge|new|nmos|nor|noshowcancelled|not|notif0|notif1|null|or|output|package|packed|parameter|pmos|posedge|primitive|priority|program|property|protected|pull0|pull1|pulldown|pullup|pulsestyle_onevent|pulsestyle_ondetect|pure|rand|randc|randcase|randsequence|rcmos|real|realtime|ref|reg|release|repeat|return|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|sequence|shortint|shortreal|showcancelled|signed|small|solve|specify|specparam|static|string|strong0|strong1|struct|super|supply0|supply1|table|tagged|task|this|throughout|time|timeprecision|timeunit|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|type|typedef|union|unique|unsigned|use|uwire|var|vectored|virtual|void|wait|wait_order|wand|weak0|weak1|while|wildcard|wire|with|within|wor|xnor|xor)\b/,
  important: /\b(?:always_latch|always_comb|always_ff|always)\b ?@?/,
  number: /\B##?\d+|(?:\b\d+)?'[odbh] ?[\da-fzx_?]+|\b\d*[._]?\d+(?:e[-+]?\d+)?/i,
  operator: /[-+{}^~%*\/?=!<>&|]+/,
  punctuation: /[[\];(),.:]/
}, Prism.languages.vhdl = {
  comment: /--.+/,
  "vhdl-vectors": {pattern: /\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i, alias: "number"},
  "quoted-function": {pattern: /"\S+?"(?=\()/, alias: "function"},
  string: /"(?:[^\\"\r\n]|\\(?:\r\n|[\s\S]))*"/,
  constant: /\b(?:use|library)\b/i,
  keyword: /\b(?:'active|'ascending|'base|'delayed|'driving|'driving_value|'event|'high|'image|'instance_name|'last_active|'last_event|'last_value|'left|'leftof|'length|'low|'path_name|'pos|'pred|'quiet|'range|'reverse_range|'right|'rightof|'simple_name|'stable|'succ|'transaction|'val|'value|access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with)\b/i,
  boolean: /\b(?:true|false)\b/i,
  function: /\w+(?=\()/,
  number: /'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i,
  operator: /[<>]=?|:=|[-+*/&=]|\b(?:abs|not|mod|rem|sll|srl|sla|sra|rol|ror|and|or|nand|xnor|xor|nor)\b/i,
  punctuation: /[{}[\];(),.:]/
}, function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    var r = "line-numbers", u = /\n(?!$)/g, d = function (e) {
      var t = s(e)["white-space"];
      if ("pre-wrap" === t || "pre-line" === t) {
        var n = e.querySelector("code"), i = e.querySelector(".line-numbers-rows"),
          a = e.querySelector(".line-numbers-sizer"), o = n.textContent.split(u);
        a || ((a = document.createElement("span")).className = "line-numbers-sizer", n.appendChild(a)), a.style.display = "block", o.forEach(function (e, t) {
          a.textContent = e || "\n";
          var n = a.getBoundingClientRect().height;
          i.children[t].style.height = n + "px"
        }), a.textContent = "", a.style.display = "none"
      }
    }, s = function (e) {
      return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
    };
    window.addEventListener("resize", function () {
      Array.prototype.forEach.call(document.querySelectorAll("pre." + r), d)
    }), Prism.hooks.add("complete", function (e) {
      if (e.code) {
        var t = e.element, n = t.parentNode;
        if (n && /pre/i.test(n.nodeName) && !t.querySelector(".line-numbers-rows")) {
          for (var i = !1, a = /(?:^|\s)line-numbers(?:\s|$)/, o = t; o; o = o.parentNode) if (a.test(o.className)) {
            i = !0;
            break
          }
          if (i) {
            t.className = t.className.replace(a, " "), a.test(n.className) || (n.className += " line-numbers");
            var r, s = e.code.match(u), l = s ? s.length + 1 : 1, c = new Array(l + 1).join("<span></span>");
            (r = document.createElement("span")).setAttribute("aria-hidden", "true"), r.className = "line-numbers-rows", r.innerHTML = c, n.hasAttribute("data-start") && (n.style.counterReset = "linenumber " + (parseInt(n.getAttribute("data-start"), 10) - 1)), e.element.parentElement.appendChild(r), d(n), Prism.hooks.run("line-numbers", e)
          }
        }
      }
    }), Prism.hooks.add("line-numbers", function (e) {
      e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
    }), Prism.plugins.lineNumbers = {
      getLine: function (e, t) {
        if ("PRE" === e.tagName && e.classList.contains(r)) {
          var n = e.querySelector(".line-numbers-rows"), i = parseInt(e.getAttribute("data-start"), 10) || 1,
            a = i + (n.children.length - 1);
          t < i && (t = i), a < t && (t = a);
          var o = t - i;
          return n.children[o]
        }
      }
    }
  }
}(), function () {
  var a = Object.assign || function (e, t) {
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    return e
  };

  function e(e) {
    this.defaults = a({}, e)
  }

  function l(e) {
    for (var t = 0, n = 0; n < e.length; ++n) e.charCodeAt(n) == "\t".charCodeAt(0) && (t += 3);
    return e.length + t
  }

  e.prototype = {
    setDefaults: function (e) {
      this.defaults = a(this.defaults, e)
    }, normalize: function (e, t) {
      for (var n in t = a(this.defaults, t)) {
        var i = n.replace(/-(\w)/g, function (e, t) {
          return t.toUpperCase()
        });
        "normalize" !== n && "setDefaults" !== i && t[n] && this[i] && (e = this[i].call(this, e, t[n]))
      }
      return e
    }, leftTrim: function (e) {
      return e.replace(/^\s+/, "")
    }, rightTrim: function (e) {
      return e.replace(/\s+$/, "")
    }, tabsToSpaces: function (e, t) {
      return t = 0 | t || 4, e.replace(/\t/g, new Array(++t).join(" "))
    }, spacesToTabs: function (e, t) {
      return t = 0 | t || 4, e.replace(RegExp(" {" + t + "}", "g"), "\t")
    }, removeTrailing: function (e) {
      return e.replace(/\s*?$/gm, "")
    }, removeInitialLineFeed: function (e) {
      return e.replace(/^(?:\r?\n|\r)/, "")
    }, removeIndent: function (e) {
      var t = e.match(/^[^\S\n\r]*(?=\S)/gm);
      return t && t[0].length ? (t.sort(function (e, t) {
        return e.length - t.length
      }), t[0].length ? e.replace(RegExp("^" + t[0], "gm"), "") : e) : e
    }, indent: function (e, t) {
      return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++t).join("\t") + "$&")
    }, breakLines: function (e, t) {
      t = !0 === t ? 80 : 0 | t || 80;
      for (var n = e.split("\n"), i = 0; i < n.length; ++i) if (!(l(n[i]) <= t)) {
        for (var a = n[i].split(/(\s+)/g), o = 0, r = 0; r < a.length; ++r) {
          var s = l(a[r]);
          t < (o += s) && (a[r] = "\n" + a[r], o = s)
        }
        n[i] = a.join("")
      }
      return n.join("\n")
    }
  }, "undefined" != typeof module && module.exports && (module.exports = e), void 0 !== Prism && (Prism.plugins.NormalizeWhitespace = new e({
    "remove-trailing": !0,
    "remove-indent": !0,
    "left-trim": !0,
    "right-trim": !0
  }), Prism.hooks.add("before-sanity-check", function (e) {
    var t = Prism.plugins.NormalizeWhitespace;
    if (!e.settings || !1 !== e.settings["whitespace-normalization"]) if (e.element && e.element.parentNode || !e.code) {
      var n = e.element.parentNode, i = /(?:^|\s)no-whitespace-normalization(?:\s|$)/;
      if (e.code && n && "pre" === n.nodeName.toLowerCase() && !i.test(n.className) && !i.test(e.element.className)) {
        for (var a = n.childNodes, o = "", r = "", s = !1, l = 0; l < a.length; ++l) {
          var c = a[l];
          c == e.element ? s = !0 : "#text" === c.nodeName && (s ? r += c.nodeValue : o += c.nodeValue, n.removeChild(c), --l)
        }
        if (e.element.children.length && Prism.plugins.KeepMarkup) {
          var u = o + e.element.innerHTML + r;
          e.element.innerHTML = t.normalize(u, e.settings), e.code = e.element.textContent
        } else e.code = o + e.code + r, e.code = t.normalize(e.code, e.settings)
      }
    } else e.code = t.normalize(e.code, e.settings)
  }))
}(), Prism.plugins.NormalizeWhitespace.setDefaults({
  "remove-trailing": !0,
  "remove-indent": !0,
  "left-trim": !0,
  "right-trim": !0
}), function (n) {
  function i(e) {
    if (a[e]) return a[e].exports;
    var t = a[e] = {i: e, l: !1, exports: {}};
    return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
  }

  var a = {};
  i.m = n, i.c = a, i.d = function (e, t, n) {
    i.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: n})
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return i.d(t, "a", t), t
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, i.p = "", i(i.s = 0)
}([function (o, r, g) {
  (function (e) {
    var t, n, i, a;
    a = void 0 !== e ? e : this.window || this.global, n = [], t = function (e) {
      "use strict";

      function i(i, a, o) {
        var r, s;
        return a || (a = 250), function () {
          var e = o || this, t = +new Date, n = arguments;
          r && t < r + a ? (clearTimeout(s), s = setTimeout(function () {
            r = t, i.apply(e, n)
          }, a)) : (r = t, i.apply(e, n))
        }
      }

      var a, o, r = g(2), s = {}, l = {}, c = g(3), u = g(4);
      if ("undefined" != typeof window) {
        var d, p = !!e.document.querySelector && !!e.addEventListener, f = Object.prototype.hasOwnProperty;
        return l.destroy = function () {
          try {
            document.querySelector(s.tocSelector).innerHTML = ""
          } catch (e) {
            console.warn("Element not found: " + s.tocSelector)
          }
          document.removeEventListener("scroll", this._scrollListener, !1), document.removeEventListener("resize", this._scrollListener, !1), a && document.removeEventListener("click", this._clickListener, !1)
        }, l.init = function (e) {
          if (p && (s = function () {
            for (var e = {}, t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n) f.call(n, i) && (e[i] = n[i])
            }
            return e
          }(r, e || {}), this.options = s, this.state = {}, s.scrollSmooth && (s.duration = s.scrollSmoothDuration, l.scrollSmooth = g(5).initSmoothScrolling(s)), a = c(s), o = u(s), this._buildHtml = a, this._parseContent = o, l.destroy(), null !== (d = o.selectHeadings(s.contentSelector, s.headingSelector)))) {
            var t = o.nestHeadingsArray(d), n = t.nest;
            return a.render(s.tocSelector, n), this._scrollListener = i(function (e) {
              a.updateToc(d);
              var t = e && e.target && e.target.scrollingElement && 0 === e.target.scrollingElement.scrollTop;
              (e && (0 === e.eventPhase || null === e.currentTarget) || t) && (a.enableTocAnimation(), a.updateToc(d), s.scrollEndCallback && s.scrollEndCallback(e))
            }, s.throttleTimeout), this._scrollListener(), document.addEventListener("scroll", this._scrollListener, !1), document.addEventListener("resize", this._scrollListener, !1), this._clickListener = i(function (e) {
              s.scrollSmooth && a.disableTocAnimation(e), a.updateToc(d)
            }, s.throttleTimeout), document.addEventListener("click", this._clickListener, !1), this
          }
        }, l.refresh = function (e) {
          l.destroy(), l.init(e || this.options)
        }, e.tocbot = l
      }
    }(a), void 0 !== (i = "function" == typeof t ? t.apply(r, n) : t) && (o.exports = i)
  }).call(r, g(1))
}, function (YG, ZG) {
  var $G;
  $G = function () {
    return this
  }();
  try {
    $G = $G || Function("return this")() || eval("this")
  } catch (YG) {
    "object" == typeof window && ($G = window)
  }
  YG.exports = $G
}, function (e, t) {
  e.exports = {
    tocSelector: ".js-toc",
    contentSelector: ".js-toc-content",
    headingSelector: "h1, h2, h3",
    ignoreSelector: ".js-toc-ignore",
    linkClass: "toc-link",
    extraLinkClasses: "",
    activeLinkClass: "is-active-link",
    listClass: "toc-list",
    extraListClasses: "",
    isCollapsedClass: "is-collapsed",
    collapsibleClass: "is-collapsible",
    listItemClass: "toc-list-item",
    activeListItemClass: "is-active-li",
    collapseDepth: 0,
    scrollSmooth: !0,
    scrollSmoothDuration: 420,
    scrollEndCallback: function (e) {
    },
    headingsOffset: 1,
    throttleTimeout: 50,
    positionFixedSelector: null,
    positionFixedClass: "is-position-fixed",
    fixedSidebarOffset: "auto",
    includeHtml: !1,
    onClick: !1
  }
}, function (e, t) {
  e.exports = function (d) {
    function s(e, t) {
      var n, i, a,
        o = t.appendChild((n = e, i = document.createElement("li"), a = document.createElement("a"), d.listItemClass && i.setAttribute("class", d.listItemClass), d.onClick && (a.onclick = d.onClick), d.includeHtml && n.childNodes.length ? p.call(n.childNodes, function (e) {
          a.appendChild(e.cloneNode(!0))
        }) : a.textContent = n.textContent, a.setAttribute("href", "#" + n.id), a.setAttribute("class", d.linkClass + m + "node-name--" + n.nodeName + m + d.extraLinkClasses), i.appendChild(a), i));
      if (e.children.length) {
        var r = l(e.isCollapsed);
        e.children.forEach(function (e) {
          s(e, r)
        }), o.appendChild(r)
      }
    }

    function l(e) {
      var t = document.createElement("ol"), n = d.listClass + m + d.extraListClasses;
      return e && (n += m + d.collapsibleClass, n += m + d.isCollapsedClass), t.setAttribute("class", n), t
    }

    var p = [].forEach, f = [].some, g = document.body, h = !0, m = " ";
    return {
      enableTocAnimation: function () {
        h = !0
      }, disableTocAnimation: function (e) {
        var t = e.target || e.srcElement;
        "string" == typeof t.className && -1 !== t.className.indexOf(d.linkClass) && (h = !1)
      }, render: function (e, t) {
        var n = l(!1);
        t.forEach(function (e) {
          s(e, n)
        });
        var i = document.querySelector(e);
        if (null !== i) return i.firstChild && i.removeChild(i.firstChild), 0 === t.length ? i : i.appendChild(n)
      }, updateToc: function (e) {
        var t, n, i = document.documentElement.scrollTop || g.scrollTop;
        d.positionFixedSelector && (t = document.documentElement.scrollTop || g.scrollTop, n = document.querySelector(d.positionFixedSelector), "auto" === d.fixedSidebarOffset && (d.fixedSidebarOffset = document.querySelector(d.tocSelector).offsetTop), t > d.fixedSidebarOffset ? -1 === n.className.indexOf(d.positionFixedClass) && (n.className += m + d.positionFixedClass) : n.className = n.className.split(m + d.positionFixedClass).join(""));
        var a, o = e;
        if (h && null !== document.querySelector(d.tocSelector) && 0 < o.length) {
          f.call(o, function (e, t) {
            return e.offsetTop > i + d.headingsOffset + 10 ? (a = o[0 === t ? t : t - 1], !0) : t === o.length - 1 ? (a = o[o.length - 1], !0) : void 0
          });
          var r = document.querySelector(d.tocSelector).querySelectorAll("." + d.linkClass);
          p.call(r, function (e) {
            e.className = e.className.split(m + d.activeLinkClass).join("")
          });
          var s = document.querySelector(d.tocSelector).querySelectorAll("." + d.listItemClass);
          p.call(s, function (e) {
            e.className = e.className.split(m + d.activeListItemClass).join("")
          });
          var l = document.querySelector(d.tocSelector).querySelector("." + d.linkClass + ".node-name--" + a.nodeName + '[href="#' + a.id + '"]');
          -1 === l.className.indexOf(d.activeLinkClass) && (l.className += m + d.activeLinkClass);
          var c = l.parentNode;
          c && -1 === c.className.indexOf(d.activeListItemClass) && (c.className += m + d.activeListItemClass);
          var u = document.querySelector(d.tocSelector).querySelectorAll("." + d.listClass + "." + d.collapsibleClass);
          p.call(u, function (e) {
            -1 === e.className.indexOf(d.isCollapsedClass) && (e.className += m + d.isCollapsedClass)
          }), l.nextSibling && -1 !== l.nextSibling.className.indexOf(d.isCollapsedClass) && (l.nextSibling.className = l.nextSibling.className.split(m + d.isCollapsedClass).join("")), function e(t) {
            return -1 !== t.className.indexOf(d.collapsibleClass) && -1 !== t.className.indexOf(d.isCollapsedClass) ? (t.className = t.className.split(m + d.isCollapsedClass).join(""), e(t.parentNode.parentNode)) : t
          }(l.parentNode.parentNode)
        }
      }
    }
  }
}, function (e, t) {
  e.exports = function (s) {
    function l(e) {
      return e[e.length - 1]
    }

    function c(e) {
      return +e.nodeName.split("H").join("")
    }

    function u(e) {
      var t = {id: e.id, children: [], nodeName: e.nodeName, headingLevel: c(e), textContent: e.textContent.trim()};
      return s.includeHtml && (t.childNodes = e.childNodes), t
    }

    var t = [].reduce;
    return {
      nestHeadingsArray: function (e) {
        return t.call(e, function (e, t) {
          return function (e, t) {
            for (var n = u(e), i = c(e), a = t, o = l(a), r = i - (o ? o.headingLevel : 0); 0 < r;) (o = l(a)) && void 0 !== o.children && (a = o.children), r--;
            i >= s.collapseDepth && (n.isCollapsed = !0), a.push(n)
          }(u(t), e.nest), e
        }, {nest: []})
      }, selectHeadings: function (t, e) {
        var n = e;
        s.ignoreSelector && (n = e.split(",").map(function (e) {
          return e.trim() + ":not(" + s.ignoreSelector + ")"
        }));
        try {
          return document.querySelector(t).querySelectorAll(n)
        } catch (e) {
          return console.warn("Element not found: " + t), null
        }
      }
    }
  }
}, function (e, t) {
  t.initSmoothScrolling = function (t) {
    function i(e) {
      return e.slice(0, e.lastIndexOf("#"))
    }

    document.documentElement.style;
    var a = t.duration, o = location.hash ? i(location.href) : location.href;
    document.body.addEventListener("click", function (n) {
      var e;
      "a" !== (e = n.target).tagName.toLowerCase() || !(0 < e.hash.length || "#" === e.href.charAt(e.href.length - 1)) || i(e.href) !== o && i(e.href) + "#" !== o || -1 < n.target.className.indexOf("no-smooth-scroll") || "#" === n.target.href.charAt(n.target.href.length - 2) && "!" === n.target.href.charAt(n.target.href.length - 1) || -1 === n.target.className.indexOf(t.linkClass) || function (e, t) {
        function n(e) {
          a = e - i, window.scrollTo(0, r.easing(a, o, l, c)), a < c ? requestAnimationFrame(n) : (window.scrollTo(0, o + l), "function" == typeof r.callback && r.callback())
        }

        var i, a, o = window.pageYOffset, r = {
            duration: t.duration,
            offset: t.offset || 0,
            callback: t.callback,
            easing: t.easing || function (e, t, n, i) {
              return (e /= i / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
            }
          }, s = document.querySelector('[id="' + decodeURI(e).split("#").join("") + '"]'),
          l = "string" == typeof e ? r.offset + (e ? s && s.getBoundingClientRect().top || 0 : -(document.documentElement.scrollTop || document.body.scrollTop)) : e,
          c = "function" == typeof r.duration ? r.duration(l) : r.duration;
        requestAnimationFrame(function (e) {
          n(i = e)
        })
      }(n.target.hash, {
        duration: a, callback: function () {
          var e, t;
          e = n.target.hash, (t = document.getElementById(e.substring(1))) && (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) || (t.tabIndex = -1), t.focus())
        }
      })
    }, !1)
  }
}]);