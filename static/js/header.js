TOC = {
  toggle: function () {
    $("body").toggleClass("sidebar-show")
  }, close: function () {
    $("body").removeClass("sidebar-show")
  }, open: function () {
    $("body").addClass("sidebar-show")
  }
}, VOID_Util = {
  throttle: function (o, t, n) {
    var l = null, a = null;
    return function () {
      var e = +new Date;
      a || (a = e), n < e - a ? (o(), a = e) : (clearTimeout(l), l = setTimeout(function () {
        o()
      }, t))
    }
  }, clickIn: function (e, o) {
    return !!$(o).length && ($(o).has(e.target).length || $(o).get(0) === e.target)
  }, getDeviceState: function (e) {
    var o;
    return window.getComputedStyle ? o = window.getComputedStyle(e).getPropertyValue("z-index") : e.currentStyle && (o = e.currentStyle["z-index"]), parseInt(o, 10)
  }, getPrefersDarkModeState: function () {
    var e = document.createElement("div");
    return e.className = "dark-mode-state-indicator", document.body.appendChild(e), 11 === VOID_Util.getDeviceState(e)
  }, setCookie: function (e, o, t) {
    document.cookie = 0 < t ? e + "=" + escape(o) + ";max-age=" + String(t) + ";path=/" : e + "=" + escape(o) + ";path=/"
  }, getCookie: function (e) {
    var o = new RegExp("(^| )" + e + "=([^;]*)(;|$)"), t = document.cookie.match(o);
    return t ? unescape(t[2]) : null
  }
}, VOID_Lazyload = {
  eventHandler: null, finish: function () {
    return $("img.lazyload.loaded").length + $("img.lazyload.error").length == $("img.lazyload").length
  }, addEventListener: function () {
    VOID_Lazyload.finish() || window.addEventListener("scroll", VOID_Lazyload.eventHandler)
  }, removeEventListener: function () {
    VOID_Lazyload.finish() && window.removeEventListener("scroll", VOID_Lazyload.eventHandler)
  }, inViewport: function (e) {
    var o = document.documentElement.clientHeight, t = document.documentElement.scrollTop || document.body.scrollTop;
    return $(e).offset().top - 300 < o + t && $(e).offset().top + $(e).height() + 300 > t
  }, callback: function () {
    $.each($("img.lazyload:not(.loaded):not(.error)"), function (e, o) {
      if (VOID_Lazyload.inViewport(o)) {
        var t = new Image;
        t.src = $(o).attr("data-src"), t.onload = function () {
          $(o).hasClass("instant") ? ($(o).attr("src", $(o).attr("data-src")), $(o).addClass("loaded"), VOID_Lazyload.removeEventListener()) : ($(o).css("opacity", "0"), setTimeout(function () {
            $(o).attr("src", $(o).attr("data-src")), $(o).addClass("loaded"), VOID_Lazyload.removeEventListener(), $(o).parent().parent().removeClass("placeholder")
          }, 550))
        }, t.onerror = function () {
          $(o).addClass("error"), VOID_Lazyload.removeEventListener()
        }
      }
    }), VOID_Lazyload.removeEventListener()
  }, init: function () {
    window.removeEventListener("scroll", VOID_Lazyload.eventHandler), null == VOID_Lazyload.eventHandler && (VOID_Lazyload.eventHandler = VOID_Util.throttle(VOID_Lazyload.callback, 200, 500)), VOID_Lazyload.callback(), VOID_Lazyload.addEventListener()
  }
}, VOID_SmoothScroller = {
  target: null, SMOOTH: 15, move: function () {
    var e = document.documentElement.scrollTop,
      o = Math.ceil(Math.abs(VOID_SmoothScroller.target - e) / VOID_SmoothScroller.SMOOTH);
    Math.abs(VOID_SmoothScroller.target - e) < 1 ? VOID_SmoothScroller.removeEventListener() : (e >= VOID_SmoothScroller.target ? e -= o : e += o, document.documentElement.scrollTop = e, requestAnimationFrame(VOID_SmoothScroller.move))
  }, addEventListener: function () {
    var e = !1;
    try {
      var o = Object.defineProperty({}, "passive", {
        get: function () {
          return e = !0, null
        }
      });
      window.addEventListener("test", null, o)
    } catch (e) {
      console.log(e)
    }
    window.addEventListener("wheel", VOID_SmoothScroller.stop, !!e && {passive: !1}), window.addEventListener("mousedown", VOID_SmoothScroller.stop), window.addEventListener("touchstart", VOID_SmoothScroller.stop)
  }, removeEventListener: function () {
    window.removeEventListener("wheel", VOID_SmoothScroller.stop), window.removeEventListener("mousedown", VOID_SmoothScroller.stop), window.removeEventListener("touchstart", VOID_SmoothScroller.stop)
  }, scrollTo: function (e, o) {
    null !== e && ("object" == typeof e ? e = e.getBoundingClientRect().top + document.documentElement.scrollTop : "string" == typeof e && (e = document.querySelector(e).getBoundingClientRect().top + document.documentElement.scrollTop), "number" == typeof o && (e += o), e = Math.max(e, 0), e = Math.min(e, document.documentElement.getBoundingClientRect().height - document.documentElement.clientHeight), VOID_SmoothScroller.addEventListener(), VOID_SmoothScroller.target = e, VOID_SmoothScroller.move())
  }, stop: function (e) {
    void 0 !== e && e.preventDefault(), VOID_SmoothScroller.scrollTo(document.documentElement.scrollTop)
  }
}, VOID_Ui = {
  checkGoTop: function () {
    $(document).scrollTop() > window.innerHeight ? $("#go-top").addClass("show") : $("#go-top").removeClass("show")
  }, checkHeader: function () {
    if (2 != VOIDConfig.headerMode) {
      var e = $(".lazy-wrap").height();
      $(document).scrollTop() > e ? $("body>header").addClass("pull-up") : $("body>header").removeClass("pull-up")
    }
  }, checkScrollTop: function () {
    null != VOID_Util.getCookie("void_pos") && -1 != parseFloat(VOID_Util.getCookie("void_pos")) ? (VOID_SmoothScroller.scrollTo(parseFloat(VOID_Util.getCookie("void_pos")), -60), VOID_Util.setCookie("void_pos", -1)) : VOID_SmoothScroller.stop()
  }, toggleSearch: function () {
    $(".mobile-search-form").toggleClass("opened"), $(".mobile-search-form input").focus()
  }, toggleNav: function (e) {
    $(e).toggleClass("pushed"), $("header").toggleClass("opened"), TOC.close(), $(e).hasClass("pushed") ? ($("#nav-mobile").fadeIn(200), VOID_Ui.openModal()) : (VOID_Ui.closeModal(), $("#nav-mobile").fadeOut(200))
  }, toggleSettingPanel: function () {
    $("body").hasClass("setting-panel-show") ? ($("body").removeClass("setting-panel-show"), setTimeout(function () {
      $("#setting-panel").hide()
    }, 300)) : ($("#login-panel").length && $("#login-panel").removeClass("show"), $("#setting-panel").show(), setTimeout(function () {
      $("body").addClass("setting-panel-show")
    }, 50))
  }, toggleSerif: function (e, o) {
    $(".font-indicator").removeClass("checked"), $(e).addClass("checked"), o ? ($("#stylesheet_noto").length < 1 && $("body").append('<link id="stylesheet_noto" href="https://fonts.googleapis.com/css?family=Noto+Serif+SC:400,700&amp;subset=chinese-simplified" rel="stylesheet">'), $("body").addClass("serif"), VOID_Util.setCookie("serif", "1", 2592e3)) : ($("#stylesheet_droid").length < 1 && $("body").append('<link id="stylesheet_droid" href="https://fonts.googleapis.com/css?family=Droid+Serif:400,700" rel="stylesheet">'), $("body").removeClass("serif"), VOID_Util.setCookie("serif", "0", 2592e3))
  }, adjustTextsize: function (e) {
    var o = parseInt($("body").attr("fontsize"));
    if (e) {
      if (5 <= o) return void VOID.alert("已经是最大了！");
      $("body").attr("fontsize", String(o + 1))
    } else {
      if (o <= 1) return void VOID.alert("已经是最小了！");
      $("body").attr("fontsize", String(o - 1))
    }
    VOID_Util.setCookie("textsize", $("body").attr("fontsize"), 2592e3)
  }, toggleLoginForm: function () {
    $("#login-panel").toggleClass("show"), $("#login-panel input[name=referer]").val(window.location.href), $("#loggin-form").hasClass("need-refresh") && $("#login-panel").hasClass("show") && $.ajax({
      type: "POST",
      url: window.location.href,
      data: {void_action: "getLoginAction"},
      success: function (e) {
        $("form#loggin-form").attr("action", e), $("#loggin-form").removeClass("need-refresh")
      },
      error: function () {
        VOID.alert("请求登陆参数错误。请在刷新后尝试登陆。"), setTimeout(function () {
          location.reload()
        }, 1e3)
      }
    })
  }, lazyload: function () {
    VOID_Lazyload.init()
  }, headroom: function () {
    if (0 == VOIDConfig.headerMode) {
      var e = document.querySelector("body>header");
      new Headroom(e, {offset: 60}).init()
    }
  }, toggleArchive: function (e) {
    var o = "#year-" + $(e).attr("data-year");
    if ($(o).hasClass("shrink")) {
      $(e).html("-"), $(o).removeClass("shrink");
      var t = parseInt($(e).attr("data-num"));
      $(o).css("max-height", 49 * t + "px")
    } else $(e).html("+"), $(o).addClass("shrink"), $(o).css("max-height", "0")
  }, rememberPos: function () {
    VOID_Util.setCookie("void_pos", String($(document).scrollTop()))
  }, scrollTop: 0, openModal: function () {
    VOID_Ui.scrollTop = document.scrollingElement.scrollTop, document.body.classList.add("modal-open"), document.body.style.top = -VOID_Ui.scrollTop + "px"
  }, closeModal: function () {
    document.body.classList.remove("modal-open"), document.scrollingElement.scrollTop = VOID_Ui.scrollTop
  }, reset: function () {
    $(".toggle").removeClass("pushed"), $(".mobile-search").removeClass("opened"), $("header").removeClass("opened"), $("#setting-panel").removeClass("show"), $("body").hasClass("modal-open") && VOID_Ui.closeModal(), $("#nav-mobile").fadeOut(200), TOC.close(), 0 < $(".TOC").length && tocbot.destroy()
  }, MasonryCtrler: {
    masonry: function () {
      $("#masonry").addClass("masonry").masonry({
        itemSelector: ".masonry-item",
        gutter: 30,
        isAnimated: !1,
        transitionDuration: 0
      })
    }, init: function () {
      VOID_Ui.MasonryCtrler.check() && 0 == VOIDConfig.indexStyle && ($(".masonry-item").addClass("masonry-ready"), VOID_Ui.MasonryCtrler.masonry()), $(".masonry-item").addClass("done")
    }, check: function () {
      return $("#masonry").length && 768 <= window.innerWidth
    }, watch: function (e) {
      var o = document.getElementById(e);
      new ResizeSensor(o, function () {
        VOID_Ui.MasonryCtrler.check() && $("#masonry").hasClass("masonry") && VOID_Ui.MasonryCtrler.masonry()
      })
    }
  }, DarkModeSwitcher: {
    checkColorScheme: function () {
      if (0 == VOIDConfig.colorScheme) if (VOIDConfig.followSystemColorScheme && VOID_Util.getPrefersDarkModeState()) {
        document.body.classList.add("theme-dark");
        var e = VOID_Util.getCookie("theme_dark");
        "1" != e && VOID.alert("已为您开启深色模式。"), VOID_Util.setCookie("theme_dark", "1", 7200)
      } else if (null == VOID_Util.getCookie("theme_dark")) {
        sunset = new Date((new Date).setHours(Math.floor(VOIDConfig.darkModeTime.start), 60 * (VOIDConfig.darkModeTime.start - Math.floor(VOIDConfig.darkModeTime.start)), 0)), sunrise = new Date((new Date).setHours(Math.floor(VOIDConfig.darkModeTime.end), 60 * (VOIDConfig.darkModeTime.end - Math.floor(VOIDConfig.darkModeTime.end)), 0));
        var o = new Date, t = VOIDConfig.darkModeTime.start, n = VOIDConfig.darkModeTime.end,
          l = o.getHours() + o.getMinutes() / 60;
        if (t < l || l < n) {
          document.body.classList.add("theme-dark"), t < l && (sunrise = new Date(sunrise.getTime() + 864e5));
          var a = (sunrise.getTime() - o.getTime()) / 1e3;
          VOID_Util.setCookie("theme_dark", "1", parseInt(a)), VOID.alert("日落了，夜间模式已开启。")
        } else document.body.classList.remove("theme-dark")
      } else "0" == (e = VOID_Util.getCookie("theme_dark")) ? document.body.classList.remove("theme-dark") : "1" == e && document.body.classList.add("theme-dark")
    }, toggleByHand: function () {
      $("#toggle-night").addClass("switching"), setTimeout(function () {
        $("body").toggleClass("theme-dark"), $("body").hasClass("theme-dark") ? VOID_Util.setCookie("theme_dark", "1", 0) : VOID_Util.setCookie("theme_dark", "0", 0), setTimeout(function () {
          $("#toggle-night").removeClass("switching")
        }, 1e3)
      }, 600)
    }
  }, Swiper: {
    clientX: null, clientY: null, start: function (e) {
      this.clientX = e.originalEvent.changedTouches[0].clientX, this.clientY = e.originalEvent.changedTouches[0].clientY
    }, end: function (e) {
      30 < Math.abs(this.clientY - e.originalEvent.changedTouches[0].clientY) && ($("body").removeClass("setting-panel-show"), setTimeout(function () {
        $("#setting-panel").hide()
      }, 300)), this.clientX = null, this.clientY = null
    }
  }
}, "ontouchstart" in document && ($(document).on("touchstart", function (e) {
  VOID_Ui.Swiper.start(e)
}), $(document).on("touchend", function (e) {
  VOID_Ui.Swiper.end(e)
})), $(document).on("scroll", function () {
  VOID_Ui.checkGoTop(), VOID_Ui.checkHeader(), "ontouchstart" in document || ($("body").removeClass("setting-panel-show"), setTimeout(function () {
    $("#setting-panel").hide()
  }, 300))
});