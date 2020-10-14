!(function (e) {
  var t = window.webpackJsonp;
  window.webpackJsonp = function (n, o, i) {
    for (var a, c, l = 0, u = []; l < n.length; l++) (c = n[l]), r[c] && u.push(r[c][0]), (r[c] = 0);
    for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
    for (t && t(n, o, i); u.length; ) u.shift()();
  };
  var n = {},
    r = { 7: 0 };
  function o(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
  }
  (o.e = function (e) {
    var t = r[e];
    if (0 === t)
      return new Promise(function (e) {
        e();
      });
    if (t) return t[2];
    var n = new Promise(function (n, o) {
      t = r[e] = [n, o];
    });
    t[2] = n;
    var i = document.getElementsByTagName("head")[0],
      a = document.createElement("script");
    (a.type = "text/javascript"),
      (a.charset = "utf-8"),
      (a.async = !0),
      (a.timeout = 12e4),
      o.nc && a.setAttribute("nonce", o.nc),
      (a.src =
        o.p +
        "" +
        ({}[e] || e) +
        "-" +
        {
          0: "b8fd1a3d5c",
          1: "48976a84b1",
          2: "a9a617d65a",
          3: "0266ed7cd8",
          4: "cdccd15ef3",
          5: "99a7c0fedc",
          6: "48131e6f72",
        }[e] +
        ".js");
    var c = setTimeout(l, 12e4);
    function l() {
      (a.onerror = a.onload = null), clearTimeout(c);
      var t = r[e];
      0 !== t && (t && t[1](new Error("Loading chunk " + e + " failed.")), (r[e] = void 0));
    }
    return (a.onerror = a.onload = l), i.appendChild(a), n;
  }),
    (o.m = e),
    (o.c = n),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: n });
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "/assets/site/js/"),
    (o.oe = function (e) {
      throw e;
    }),
    o((o.s = 7));
})([
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.default = function () {
      var e = document.createElement("div"),
        t = document.createElement("div");
      (e.style.overflow = "scroll"), document.body.appendChild(e), e.appendChild(t);
      var n = e.offsetWidth - t.offsetWidth;
      return document.body.removeChild(e), n;
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    t.default = r;
  },
  function (e, t) {
    var n = "complete",
      r = "canceled";
    function o(e, t, n) {
      e.self === e ? e.scrollTo(t, n) : ((e.scrollLeft = t), (e.scrollTop = n));
    }
    function i(e) {
      var t = e._scrollSettings;
      if (t) {
        var r = (function (e, t, n) {
            var r,
              o,
              i,
              a,
              c,
              l,
              u,
              s = e.getBoundingClientRect(),
              d = n && null != n.left ? n.left : 0.5,
              f = n && null != n.top ? n.top : 0.5,
              m = n && null != n.leftOffset ? n.leftOffset : 0,
              p = n && null != n.topOffset ? n.topOffset : 0,
              y = d,
              v = f;
            if (t.self === t)
              (l = Math.min(s.width, t.innerWidth)),
                (u = Math.min(s.height, t.innerHeight)),
                (o = s.left + t.pageXOffset - t.innerWidth * y + l * y),
                (i = s.top + t.pageYOffset - t.innerHeight * v + u * v),
                (i -= p),
                (a = (o -= m) - t.pageXOffset),
                (c = i - t.pageYOffset);
            else {
              (l = s.width), (u = s.height), (r = t.getBoundingClientRect());
              var g = s.left - (r.left - t.scrollLeft),
                h = s.top - (r.top - t.scrollTop);
              (o = g + l * y - t.clientWidth * y),
                (i = h + u * v - t.clientHeight * v),
                (o = Math.max(Math.min(o, t.scrollWidth - t.clientWidth), 0)),
                (i = Math.max(Math.min(i, t.scrollHeight - t.clientHeight), 0)),
                (i -= p),
                (a = (o -= m) - t.scrollLeft),
                (c = i - t.scrollTop);
            }
            return { x: o, y: i, differenceX: a, differenceY: c };
          })(t.target, e, t.align),
          a = Date.now() - t.startTime,
          c = Math.min((1 / t.time) * a, 1);
        if (a > t.time && t.endIterations > 3) return o(e, r.x, r.y), (e._scrollSettings = null), t.end(n);
        t.endIterations++;
        var l = 1 - t.ease(c);
        if ((o(e, r.x - r.differenceX * l, r.y - r.differenceY * l), a >= t.time)) return i(e);
        !(function (e) {
          if ("requestAnimationFrame" in window) return window.requestAnimationFrame(e);
          setTimeout(e, 16);
        })(i.bind(null, e));
      }
    }
    function a(e, t, n, o) {
      var a,
        c = !t._scrollSettings,
        l = t._scrollSettings,
        u = Date.now();
      function s(e) {
        (t._scrollSettings = null),
          t.parentElement && t.parentElement._scrollSettings && t.parentElement._scrollSettings.end(e),
          o(e),
          t.removeEventListener("touchstart", a, { passive: !0 });
      }
      l && l.end(r),
        (t._scrollSettings = {
          startTime: l ? l.startTime : Date.now(),
          endIterations: 0,
          target: e,
          time: n.time + (l ? u - l.startTime : 0),
          ease: n.ease,
          align: n.align,
          end: s,
        }),
        (a = s.bind(null, r)),
        t.addEventListener("touchstart", a, { passive: !0 }),
        c && i(t);
    }
    function c(e) {
      return (
        "pageXOffset" in e ||
        ((e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth) &&
          "hidden" !== getComputedStyle(e).overflow)
      );
    }
    function l() {
      return !0;
    }
    e.exports = function (e, t, n) {
      if (e) {
        "function" == typeof t && ((n = t), (t = null)),
          t || (t = {}),
          (t.time = isNaN(t.time) ? 1e3 : t.time),
          (t.ease =
            t.ease ||
            function (e) {
              return 1 - Math.pow(1 - e, e / 2);
            });
        for (var r = e.parentElement, o = 0, i = t.validTarget || l, u = t.isScrollable; r; ) {
          if ((i(r, o) && (u ? u(r, c) : c(r)) && (o++, a(e, r, t, s)), !(r = r.parentElement))) return;
          "BODY" === r.tagName && (r = (r = r.ownerDocument).defaultView || r.ownerWindow);
        }
      }
      function s(e) {
        --o || (n && n(e));
      }
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.default = function () {
      return document.querySelector(".page-wrapper").clientHeight + 200 > document.querySelector(".menu").clientHeight;
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.default = 991;
  },
  ,
  ,
  function (e, t, n) {
    e.exports = n(8);
  },
  function (e, t, n) {
    "use strict";
    n(9), n(10), n(11), n(12), n(13), n(15), n(16), n(17), n(18), n(19);
    var r,
      o = n(1),
      i = (r = o) && r.__esModule ? r : { default: r };
    function a(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    document.querySelector("[hidden]") && document.querySelector("[hidden]").removeAttribute("hidden"),
      i.default && document.body.classList.add("safari-fix"),
      document.querySelector(".main-page_horizontal-scroll") && n.e(2).then(n.bind(null, 20)),
      document.querySelector(".brief") && n.e(3).then(n.bind(null, 21)),
      document.querySelector(".studio-map") && n.e(4).then(n.bind(null, 22)),
      document.querySelector("[data-hover-slideshow]") && n.e(5).then(n.bind(null, 23));
    var c = document.querySelector(".main-page__services-content");
    c &&
      n
        .e(1)
        .then(n.bind(null, 6))
        .then(function (e) {
          new (0, e.default)(c);
        });
    var l = [].concat(a(document.querySelectorAll(".landing-accordion-wrapper")));
    l.length > 0 &&
      l.forEach(function (e) {
        n.e(1)
          .then(n.bind(null, 6))
          .then(function (t) {
            new (0, t.default)(e, !1);
          });
      }),
      [].concat(a(document.querySelectorAll("[data-link]"))).forEach(function (e) {
        e.addEventListener("click", function (t) {
          t.preventDefault();
          var n = window.location.origin + e.dataset.href;
          window.location.href = n;
        });
      });
  },
  function (e, t, n) {
    "use strict";
    var r = a(n(4)),
      o = a(n(0)),
      i = a(n(3));
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = void 0,
      l = void 0,
      u = function () {
        return +window
          .getComputedStyle(document.querySelector(".header"), null)
          .getPropertyValue("padding-left")
          .split("px")
          .join("");
      },
      s = function () {
        var e = document.querySelector(".main-page"),
          t = (0, o.default)();
        document.body.classList.contains("menu_visible")
          ? setTimeout(function () {
              window.scroll(0, l);
            }, 0)
          : (l = window.scrollY),
          document.body.classList.toggle("menu_visible"),
          window.innerWidth > r.default
            ? e
              ? (e.style.paddingBottom = (document.body.classList.contains("menu_visible") ? t : 0) + "px")
              : (0, i.default)() &&
                ((document.body.style.paddingRight = (document.body.classList.contains("menu_visible") ? t : 0) + "px"),
                (document.querySelector(".menu").style.paddingRight =
                  (document.body.classList.contains("menu_visible") ? t : 0) + "px"),
                (document.querySelector(".header .header__menu").style.transform =
                  "translate3d(" + (document.body.classList.contains("menu_visible") ? -t : 0) + "px, 0, 0)"),
                (document.querySelector(".header").style.paddingRight =
                  (document.body.classList.contains("menu_visible") ? t + 32 : 32) + "px"),
                (document.querySelector(".menu .menu__searchbar").style.transform =
                  "translate3d(" + (document.body.classList.contains("menu_visible") ? -t : 0) + "px, 0, 0)"))
            : ((document.body.style.paddingRight = (document.body.classList.contains("menu_visible") ? t : 0) + "px"),
              (document.querySelector(".menu").style.paddingRight =
                (document.body.classList.contains("menu_visible") ? t : 0) + "px"),
              (document.querySelector(".header .header__menu").style.transform =
                "translate3d(" + (document.body.classList.contains("menu_visible") ? -t : 0) + "px, 0, 0)"),
              (document.querySelector(".header").style.paddingRight =
                (document.body.classList.contains("menu_visible") ? t + c : c) + "px"),
              (document.querySelector(".menu .menu__searchbar").style.transform =
                "translate3d(" + (document.body.classList.contains("menu_visible") ? -t : 0) + "px, 0, 0)"));
      };
    if (document.querySelector(".menu")) {
      var d = document.querySelector(".header__menu");
      (c = u()),
        window.addEventListener("resize", function () {
          (c = u()), (document.querySelector(".header").style.paddingRight = c + "px");
        }),
        window.addEventListener("keyup", function (e) {
          document.querySelector(".menu_visible") && 27 === e.keyCode && s();
        }),
        d.addEventListener("click", s);
    }
  },
  function (e, t, n) {
    "use strict";
    var r =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    function o(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    document.querySelector(".swiper-container") &&
      n
        .e(0)
        .then(n.bind(null, 5))
        .then(function (e) {
          var t = e.default;
          if (document.querySelector(".main-page__recommendations .swiper-container"))
            var n = new t(".main-page__recommendations .swiper-container", {
              slidesPerView: 1,
              centeredSlides: !0,
              navigation: { prevEl: ".recommendations__nav_prev", nextEl: ".recommendations__nav_next" },
              pagination: {
                el: ".recommendations__swiper-pagination",
                clickable: !0,
                renderBullet: function (e, t) {
                  return (
                    '<button class="' + t + ' recommendations__swiper-pagination-bullet">0' + (e + 1) + "</button>"
                  );
                },
              },
              on: {
                slideChange: function () {
                  document.querySelector(".main-page__recommendation-number").innerHTML = "0" + (n.realIndex + 1);
                },
              },
            });
          (document.querySelector(".project__similar-swiper") &&
            new t(".project__similar-swiper", {
              slidesPerView: 3,
              spaceBetween: 6,
              loop: !0,
              navigation: { prevEl: ".project__similar-swiper-nav_prev", nextEl: ".project__similar-swiper-nav_next" },
              pagination: { el: ".project__similar-swiper-pagination", clickable: !0 },
              breakpoints: { 991: { slidesPerView: 2 }, 570: { slidesPerView: 1 } },
            }),
          document.querySelector(".studio__team-swiper")) &&
            [].concat(o(document.querySelectorAll(".studio__team-swiper"))).forEach(function (e) {
              var n = e.closest(".studio__team-swiper-wrapper"),
                o = {
                  slidesPerView: "auto",
                  spaceBetween: 0,
                  navigation: {
                    prevEl: n.querySelector(".studio__team-swiper-nav_prev"),
                    nextEl: n.querySelector(".studio__team-swiper-nav_next"),
                  },
                  pagination: { el: n.querySelector(".studio__team-swiper-pagination"), clickable: !0 },
                  breakpoints: { 991: {}, 479: { slidesPerView: 1 } },
                };
              e.dataset.spaceBetween &&
                (o = r({}, o, {
                  breakpoints: {
                    991: { spaceBetween: +e.dataset.spaceBetween },
                    479: { slidesPerView: 1, spaceBetween: +e.dataset.spaceBetween },
                  },
                })),
                new t(e, o);
            });
          (document.querySelector(".studio__clients-swiper") &&
            new t(".studio__clients-swiper", {
              slidesPerView: "auto",
              spaceBetween: 32,
              navigation: { prevEl: ".studio__clients-swiper-nav_prev", nextEl: ".studio__clients-swiper-nav_next" },
              pagination: { el: ".studio__clients-swiper-pagination", clickable: !0 },
            }),
          document.querySelector(".blog__jumbotron-swiper") &&
            new t(".blog__jumbotron-swiper", {
              slidesPerView: 1,
              spaceBetween: 0,
              loop: !0,
              navigation: { prevEl: ".blog__jumbotron-swiper-nav_prev", nextEl: ".blog__jumbotron-swiper-nav_next" },
              pagination: { el: ".blog__jumbotron-swiper-pagination", clickable: !0 },
            }),
          document.querySelector(".social-swiper-container")) &&
            [].concat(o(document.querySelectorAll(".social-swiper-container"))).forEach(function (e) {
              var n = e.closest(".social-swiper-wrapper");
              new t(e, {
                slidesPerView: 1,
                spaceBetween: 60,
                loop: !0,
                loopAdditionalSlides: 1,
                navigation: {
                  prevEl: n.querySelector(".social-swiper-nav_prev"),
                  nextEl: n.querySelector(".social-swiper-nav_next"),
                },
                pagination: { el: n.querySelector(".social-swiper-pagination"), clickable: !0 },
                breakpoints: { 1199: { spaceBetween: 32 }, 767: { spaceBetween: 16 } },
              });
            });
        });
  },
  function (e, t, n) {
    "use strict";
    window.innerWidth > 991 &&
      document.querySelectorAll(".main-page__category-link a").length > 0 &&
      []
        .concat(
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
              return n;
            }
            return Array.from(e);
          })(document.querySelectorAll(".main-page__category-link a"))
        )
        .forEach(function (e) {
          e.addEventListener("mouseenter", function (e) {
            if (!document.querySelector(".category-bg_visible")) {
              var t = e.target.closest(".main-page__category-link"),
                n = e.target.dataset.category,
                r = t.getBoundingClientRect().left,
                o = t.getBoundingClientRect().top,
                i = t.getBoundingClientRect().width,
                a = t.getBoundingClientRect().height,
                c = e.target.dataset.categoryBg,
                l = document.querySelector('.category-background[data-category="' + n + '"]'),
                u = l.querySelector(".main-page__category-link"),
                s = l.querySelector("img");
              document.body.classList.add("category-bg_visible"),
                l.classList.add("category-background_visible"),
                (u.style.transform = "translate3d(" + r + "px, " + o + "px, 0)"),
                (u.style.width = i + "px"),
                (u.style.height = a + "px"),
                (u.innerHTML = t.innerHTML),
                (s.src = c);
            }
          }),
            e.addEventListener("mouseleave", function () {
              document.body.classList.remove("category-bg_visible"),
                document
                  .querySelector(".category-background.category-background_visible")
                  .classList.remove("category-background_visible");
            });
        });
  },
  function (e, t, n) {
    "use strict";
    var r,
      o = n(1),
      i = (r = o) && r.__esModule ? r : { default: r };
    []
      .concat(
        (function (e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n;
          }
          return Array.from(e);
        })(document.querySelectorAll("[data-theme-switch]"))
      )
      .forEach(function (e) {
        e.addEventListener("click", function () {
          (document.body.dataset.theme = this.dataset.mode),
            (document.cookie = "theme=" + this.dataset.mode + "; path=/"),
            i.default &&
              ((document.body.style.transform = "scale(1)"),
              setTimeout(function () {
                document.body.style.transform = "";
              }, 3e3));
        });
      });
  },
  function (e, t, n) {
    "use strict";
    var r,
      o = n(14),
      i = (r = o) && r.__esModule ? r : { default: r };
    i.default.offset(50),
      (0, i.default)("[data-enter-animation]").on("enter", function (e) {
        e.setAttribute("data-enter-animation-entered", !0);
      });
  },
  function (e, t, n) {
    var r;
    (r = function () {
      return (function (e) {
        function t(r) {
          if (n[r]) return n[r].exports;
          var o = (n[r] = { exports: {}, id: r, loaded: !1 });
          return e[r].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports;
        }
        var n = {};
        return (t.m = e), (t.c = n), (t.p = ""), t(0);
      })([
        function (e, t, n) {
          "use strict";
          var r = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n(2));
          e.exports = r.default;
        },
        function (e, t) {
          e.exports = function (e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t);
          };
        },
        function (e, t, n) {
          "use strict";
          function r(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var o = r(n(9)),
            i = r(n(3)),
            a = n(4);
          t.default = (function () {
            if ("undefined" != typeof window) {
              var e = { history: [] },
                t = { offset: {}, threshold: 0, test: a.inViewport },
                n = (0, o.default)(function () {
                  e.history.forEach(function (t) {
                    e[t].check();
                  });
                }, 100);
              ["scroll", "resize", "load"].forEach(function (e) {
                return addEventListener(e, n);
              }),
                window.MutationObserver &&
                  addEventListener("DOMContentLoaded", function () {
                    new MutationObserver(n).observe(document.body, { attributes: !0, childList: !0, subtree: !0 });
                  });
              var r = function (n) {
                if ("string" == typeof n) {
                  var r = [].slice.call(document.querySelectorAll(n));
                  return (
                    e.history.indexOf(n) > -1
                      ? (e[n].elements = r)
                      : ((e[n] = (0, i.default)(r, t)), e.history.push(n)),
                    e[n]
                  );
                }
              };
              return (
                (r.offset = function (e) {
                  if (void 0 === e) return t.offset;
                  var n = function (e) {
                    return "number" == typeof e;
                  };
                  return (
                    ["top", "right", "bottom", "left"].forEach(
                      n(e)
                        ? function (n) {
                            return (t.offset[n] = e);
                          }
                        : function (r) {
                            return n(e[r]) ? (t.offset[r] = e[r]) : null;
                          }
                    ),
                    t.offset
                  );
                }),
                (r.threshold = function (e) {
                  return "number" == typeof e && e >= 0 && e <= 1 ? (t.threshold = e) : t.threshold;
                }),
                (r.test = function (e) {
                  return "function" == typeof e ? (t.test = e) : t.test;
                }),
                (r.is = function (e) {
                  return t.test(e, t);
                }),
                r.offset(0),
                r
              );
            }
          })();
        },
        function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })(),
            r = (function () {
              function e(t, n) {
                (function (e, t) {
                  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.options = n),
                  (this.elements = t),
                  (this.current = []),
                  (this.handlers = { enter: [], exit: [] }),
                  (this.singles = { enter: [], exit: [] });
              }
              return (
                n(e, [
                  {
                    key: "check",
                    value: function () {
                      var e = this;
                      return (
                        this.elements.forEach(function (t) {
                          var n = e.options.test(t, e.options),
                            r = e.current.indexOf(t),
                            o = r > -1,
                            i = !n && o;
                          n && !o && (e.current.push(t), e.emit("enter", t)),
                            i && (e.current.splice(r, 1), e.emit("exit", t));
                        }),
                        this
                      );
                    },
                  },
                  {
                    key: "on",
                    value: function (e, t) {
                      return this.handlers[e].push(t), this;
                    },
                  },
                  {
                    key: "once",
                    value: function (e, t) {
                      return this.singles[e].unshift(t), this;
                    },
                  },
                  {
                    key: "emit",
                    value: function (e, t) {
                      for (; this.singles[e].length; ) this.singles[e].pop()(t);
                      for (var n = this.handlers[e].length; --n > -1; ) this.handlers[e][n](t);
                      return this;
                    },
                  },
                ]),
                e
              );
            })();
          t.default = function (e, t) {
            return new r(e, t);
          };
        },
        function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.inViewport = function (e, t) {
              var n = e.getBoundingClientRect(),
                r = n.top,
                o = n.right,
                i = n.bottom,
                a = n.left,
                c = n.width,
                l = n.height,
                u = i,
                s = window.innerWidth - a,
                d = window.innerHeight - r,
                f = o,
                m = t.threshold * c,
                p = t.threshold * l;
              return u > t.offset.top + p && s > t.offset.right + m && d > t.offset.bottom + p && f > t.offset.left + m;
            });
        },
        function (e, t) {
          (function (t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.exports = n;
          }.call(
            t,
            (function () {
              return this;
            })()
          ));
        },
        function (e, t, n) {
          var r = n(5),
            o = "object" == typeof self && self && self.Object === Object && self,
            i = r || o || Function("return this")();
          e.exports = i;
        },
        function (e, t, n) {
          var r = n(1),
            o = n(8),
            i = n(10),
            a = "Expected a function",
            c = Math.max,
            l = Math.min;
          e.exports = function (e, t, n) {
            function u(t) {
              var n = p,
                r = y;
              return (p = y = void 0), (w = t), (g = e.apply(r, n));
            }
            function s(e) {
              var n = e - _;
              return void 0 === _ || n >= t || n < 0 || (S && e - w >= v);
            }
            function d() {
              var e = o();
              return s(e)
                ? f(e)
                : void (h = setTimeout(
                    d,
                    (function (e) {
                      var n = t - (e - _);
                      return S ? l(n, v - (e - w)) : n;
                    })(e)
                  ));
            }
            function f(e) {
              return (h = void 0), q && p ? u(e) : ((p = y = void 0), g);
            }
            function m() {
              var e = o(),
                n = s(e);
              if (((p = arguments), (y = this), (_ = e), n)) {
                if (void 0 === h)
                  return (function (e) {
                    return (w = e), (h = setTimeout(d, t)), b ? u(e) : g;
                  })(_);
                if (S) return (h = setTimeout(d, t)), u(_);
              }
              return void 0 === h && (h = setTimeout(d, t)), g;
            }
            var p,
              y,
              v,
              g,
              h,
              _,
              w = 0,
              b = !1,
              S = !1,
              q = !0;
            if ("function" != typeof e) throw new TypeError(a);
            return (
              (t = i(t) || 0),
              r(n) &&
                ((b = !!n.leading),
                (v = (S = "maxWait" in n) ? c(i(n.maxWait) || 0, t) : v),
                (q = "trailing" in n ? !!n.trailing : q)),
              (m.cancel = function () {
                void 0 !== h && clearTimeout(h), (w = 0), (p = _ = y = h = void 0);
              }),
              (m.flush = function () {
                return void 0 === h ? g : f(o());
              }),
              m
            );
          };
        },
        function (e, t, n) {
          var r = n(6);
          e.exports = function () {
            return r.Date.now();
          };
        },
        function (e, t, n) {
          var r = n(7),
            o = n(1),
            i = "Expected a function";
          e.exports = function (e, t, n) {
            var a = !0,
              c = !0;
            if ("function" != typeof e) throw new TypeError(i);
            return (
              o(n) && ((a = "leading" in n ? !!n.leading : a), (c = "trailing" in n ? !!n.trailing : c)),
              r(e, t, { leading: a, maxWait: t, trailing: c })
            );
          };
        },
        function (e, t) {
          e.exports = function (e) {
            return e;
          };
        },
      ]);
    }),
      (e.exports = r());
  },
  function (e, t, n) {
    "use strict";
    var r = i(n(0)),
      o = i(n(2));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    var c = function (e) {
        e.classList.remove("gallery_active"),
          setTimeout(function () {
            document.documentElement.classList.remove("overflow-hidden"), (document.body.style.paddingRight = "0px");
          }, 150),
          window.removeEventListener("keyup", l);
      },
      l = function (e) {
        var t = document.querySelector(".gallery_active"),
          n = t.querySelector(".gallery__content-swiper").swiper;
        37 === e.keyCode && n.slidePrev(), 39 === e.keyCode && n.slideNext(), 27 === e.keyCode && c(t);
      };
    document.querySelector("[data-photo-gallery]") &&
      n
        .e(0)
        .then(n.bind(null, 5))
        .then(function (e) {
          var t = e.default,
            n = [].concat(a(document.querySelectorAll(".gallery__content-swiper.swiper-container"))),
            i = [].concat(a(document.querySelectorAll("[data-photo-gallery-button]"))),
            u = (0, r.default)(),
            s = document.body;
          n.forEach(function (e) {
            var n = e.closest("[data-photo-gallery]"),
              r = n.querySelector(".gallery__header .gallery__close"),
              i = n.querySelector(".gallery__footer"),
              l = n.querySelector(".gallery__fullscreen"),
              u = n.querySelector(".gallery__fullscreen .gallery__close"),
              s = new t(e, {
                slidesPerView: 1,
                centeredSlides: !0,
                spaceBetween: 30,
                observer: !0,
                observeParents: !0,
                loopedSlides: 1,
                loop: !0,
                lazy: !0,
                navigation: {
                  prevEl: n.querySelector(".gallery__content-nav-prev"),
                  nextEl: n.querySelector(".gallery__content-nav-next"),
                },
                on: {
                  slideChange: function () {
                    var e = n.querySelector("[data-swiper-thumb-active]"),
                      t = n.querySelector('[data-swiper-thumb="' + (s ? s.realIndex || 0 : 0) + '"]');
                    e.removeAttribute("data-swiper-thumb-active"),
                      t.setAttribute("data-swiper-thumb-active", "true"),
                      (0, o.default)(t, {
                        time: 150,
                        ease: function (e) {
                          return Math.pow(e, 1.5);
                        },
                        validTarget: function (e, t) {
                          return e !== window;
                        },
                      });
                  },
                },
                pagination: {
                  el: n.querySelector('.swiper-pagination'),
                  clickable: true,
                },
              });
            [].concat(a(n.querySelectorAll("[data-swiper-thumb]"))).forEach(function (e) {
              e.addEventListener("click", function (t) {
                t.preventDefault(), s.slideTo(e.dataset.swiperThumb);
              });
            }),
              r.addEventListener("click", function () {
                return c(n);
              }),
              [].concat(a(n.querySelectorAll("[data-gallery-fullscreen-button]"))).forEach(function (e) {
                e.addEventListener("click", function (t) {
                  var n = e.closest(".gallery__content-slide").querySelector("[data-fullscreen-image]").src,
                    r = l.querySelector("img");
                  (r.src = n), l.classList.add("gallery__fullscreen_active");
                });
              }),
              u.addEventListener("click", function () {
                l.classList.remove("gallery__fullscreen_active");
              }),
              window.innerWidth > 1199 &&
                i.addEventListener("wheel", function (e) {
                  i.scrollLeft += e.deltaY;
                });
          }),
            i.forEach(function (e) {
              e.addEventListener("click", function (t) {
                var n = e.dataset.galleryId,
                  r = document.querySelector("#" + n),
                  o = r.querySelector(".gallery__content-swiper.swiper-container").swiper;
                t.preventDefault();
                var i = +e.dataset.photoIndex;
                document.querySelector(".page-wrapper") &&
                  (document.documentElement.classList.add("overflow-hidden"), (s.style.paddingRight = u + "px")),
                  o.slideTo(i, 0),
                  r.classList.add("gallery_active"),
                  window.addEventListener("keyup", l);
              });
            });
        });
  },
  function (e, t, n) {
    "use strict";
    var r,
      o = n(0),
      i = (r = o) && r.__esModule ? r : { default: r };
    function a(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    if (document.querySelector("[data-video-gallery]")) {
      var c = (0, i.default)(),
        l = document.body;
      [].concat(a(document.querySelectorAll("[data-video-gallery-button]"))).forEach(function (e) {
        e.addEventListener("click", function (t) {
          t.preventDefault();
          var n = e.hash,
            r = document.querySelector("" + n);
          document.querySelector(".page-wrapper") &&
            (document.documentElement.classList.add("overflow-hidden"), (l.style.paddingRight = c + "px")),
            r.classList.add("gallery_active");
        });
      }),
        [].concat(a(document.querySelectorAll("[data-video-gallery] .gallery__close"))).forEach(function (e) {
          e.addEventListener("click", function () {
            e.closest("[data-video-gallery]").classList.remove("gallery_active"),
              e.closest("[data-video-gallery]").querySelector("video") &&
                e.closest("[data-video-gallery]").querySelector("video").pause(),
              setTimeout(function () {
                document.documentElement.classList.remove("overflow-hidden"), (l.style.paddingRight = "0px");
              }, 150);
          });
        });
    }
  },
  function (e, t, n) {
    "use strict";
    var r,
      o = n(0),
      i = (r = o) && r.__esModule ? r : { default: r };
    if (document.querySelector("[data-modal]")) {
      var a = document.querySelector("[data-modal]"),
        c = a.querySelector("[data-modal-close]"),
        l = document.querySelector("[data-open-modal]"),
        u = document.body,
        s = (0, i.default)();
      l.addEventListener("click", function () {
        a.classList.add("modal_visible"),
          document.documentElement.classList.add("overflow-hidden"),
          (u.style.paddingRight = s + "px");
      }),
        c.addEventListener("click", function () {
          a.classList.remove("modal_visible"),
            setTimeout(function () {
              document.documentElement.classList.remove("overflow-hidden"), (u.style.paddingRight = "0px");
            }, 300);
        });
    }
  },
  function (e, t, n) {
    "use strict";
    var r = i(n(0)),
      o = i(n(3));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    if (document.querySelector(".modal-fullscreen")) {
      var a = document.querySelectorAll(".modal-fullscreen-open"),
        c = document.body,
        l = (0, r.default)(),
        u = function (e) {
          e.classList.remove("modal-fullscreen_active"),
            setTimeout(function () {
              document.documentElement.classList.remove("overflow-hidden"), (c.style.paddingRight = "0px");
            }, 150);
        };
      a.forEach(function (e) {
        var t = document.querySelector("#" + e.dataset.target),
          n = t.querySelector(".modal-fullscreen__close");
        e.addEventListener("click", function (e) {
          e.preventDefault(),
            t.classList.add("modal-fullscreen_active"),
            document.querySelector(".page-wrapper") &&
              (document.documentElement.classList.add("overflow-hidden"),
              (0, o.default)() && (c.style.paddingRight = l + "px"));
        }),
          n.addEventListener("click", function () {
            u(t);
          }),
          t.addEventListener("click", function (e) {
            e.target.closest(".modal-fullscreen__content") || u(t);
          });
      });
    }
  },
  function (e, t, n) {
    "use strict";
    var r,
      o = n(2),
      i = (r = o) && r.__esModule ? r : { default: r };
    document.querySelectorAll("[data-scroll-button]") &&
      []
        .concat(
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
              return n;
            }
            return Array.from(e);
          })(document.querySelectorAll("[data-scroll-button]"))
        )
        .forEach(function (e) {
          e.addEventListener("click", function (e) {
            e.preventDefault();
            var t = e.target.hash,
              n = document.querySelector(t);
            n &&
              (0, i.default)(n, {
                time: 500,
                ease: function (e) {
                  return Math.pow(e, 1.5);
                },
              });
          });
        });
  },
]);
