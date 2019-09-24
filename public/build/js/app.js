(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wow.js */ "./node_modules/wow.js/dist/wow.js");
/* harmony import */ var wow_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wow_js__WEBPACK_IMPORTED_MODULE_2__);


__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");

var routes = __webpack_require__(/*! ../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.setRoutingData(routes);

$(document).ready(function () {
  new wow_js__WEBPACK_IMPORTED_MODULE_2___default.a().init();
  $('[data-toggle="popover"]').popover();
  $('.main-navbar .nav-item').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $('.navbar-nav .nav-item').removeClass('active');
    $this.addClass('active');
    var href = $($this.find('.nav-link').attr('href'));
    $('html, body').animate({
      scrollTop: href.offset().top - 70
    }, 1000, function () {
      // Callback after animation
      // Must change focus!
      var $target = href;
      $target.focus();

      if ($target.is(":focus")) {
        // Checking if the target was focused
        return false;
      } else {
        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable

        $target.focus(); // Set focus again
      }

      ;
    });
  });
  $('.contact-send').on('click', function (e) {
    e.preventDefault();
    console.log($(this).parent('form').serialize());
    $.ajax({
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate('homepage'),
      method: "POST",
      data: $(this).parent('form').serialize()
    }).always(function (data) {
      console.log(data);
      $('form').html(data.view);
    });
  });
  $('.custom-switch input').on('click', function (e) {
    $.post(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate('contact_switch_update', {
      id: $(this).data('entity')
    }), {
      fieldname: $(this).data('fieldname'),
      value: $(this).prop('checked')
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./public/js/fos_js_routes.json":
/*!**************************************!*\
  !*** ./public/js/fos_js_routes.json ***!
  \**************************************/
/*! exports provided: base_url, routes, prefix, host, port, scheme, locale, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"base_url\":\"\",\"routes\":{\"contact_switch_update\":{\"tokens\":[[\"text\",\"/switch-value\"],[\"variable\",\"/\",\"[^/]++\",\"id\",true],[\"text\",\"/admin/contact\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"POST\"],\"schemes\":[]},\"homepage\":{\"tokens\":[[\"text\",\"/\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"GET\",\"POST\"],\"schemes\":[]}},\"prefix\":\"\",\"host\":\"localhost\",\"port\":\"\",\"scheme\":\"http\",\"locale\":[]}");

/***/ }),

/***/ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js":
/*!************************************************************************************!*\
  !*** ./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.freeze */ "./node_modules/core-js/modules/es.object.freeze.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  var n = t();
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (n.Routing),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  var t = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];

      for (var o in n) {
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      }
    }

    return e;
  },
      n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
  },
      o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }

    return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }(),
      i = function () {
    function i(t, n) {
      e(this, i), this.context_ = t || {
        base_url: "",
        prefix: "",
        host: "",
        port: "",
        scheme: "",
        locale: ""
      }, this.setRoutes(n || {});
    }

    return o(i, [{
      key: "setRoutingData",
      value: function value(e) {
        this.setBaseUrl(e.base_url), this.setRoutes(e.routes), "prefix" in e && this.setPrefix(e.prefix), "port" in e && this.setPort(e.port), "locale" in e && this.setLocale(e.locale), this.setHost(e.host), this.setScheme(e.scheme);
      }
    }, {
      key: "setRoutes",
      value: function value(e) {
        this.routes_ = Object.freeze(e);
      }
    }, {
      key: "getRoutes",
      value: function value() {
        return this.routes_;
      }
    }, {
      key: "setBaseUrl",
      value: function value(e) {
        this.context_.base_url = e;
      }
    }, {
      key: "getBaseUrl",
      value: function value() {
        return this.context_.base_url;
      }
    }, {
      key: "setPrefix",
      value: function value(e) {
        this.context_.prefix = e;
      }
    }, {
      key: "setScheme",
      value: function value(e) {
        this.context_.scheme = e;
      }
    }, {
      key: "getScheme",
      value: function value() {
        return this.context_.scheme;
      }
    }, {
      key: "setHost",
      value: function value(e) {
        this.context_.host = e;
      }
    }, {
      key: "getHost",
      value: function value() {
        return this.context_.host;
      }
    }, {
      key: "setPort",
      value: function value(e) {
        this.context_.port = e;
      }
    }, {
      key: "getPort",
      value: function value() {
        return this.context_.port;
      }
    }, {
      key: "setLocale",
      value: function value(e) {
        this.context_.locale = e;
      }
    }, {
      key: "getLocale",
      value: function value() {
        return this.context_.locale;
      }
    }, {
      key: "buildQueryParams",
      value: function value(e, t, o) {
        var i = this,
            r = void 0,
            s = new RegExp(/\[\]$/);
        if (t instanceof Array) t.forEach(function (t, r) {
          s.test(e) ? o(e, t) : i.buildQueryParams(e + "[" + ("object" === ("undefined" == typeof t ? "undefined" : n(t)) ? r : "") + "]", t, o);
        });else if ("object" === ("undefined" == typeof t ? "undefined" : n(t))) for (r in t) {
          this.buildQueryParams(e + "[" + r + "]", t[r], o);
        } else o(e, t);
      }
    }, {
      key: "getRoute",
      value: function value(e) {
        var t = this.context_.prefix + e,
            n = e + "." + this.context_.locale,
            o = this.context_.prefix + e + "." + this.context_.locale,
            i = [t, n, o, e];

        for (var r in i) {
          if (i[r] in this.routes_) return this.routes_[i[r]];
        }

        throw new Error('The route "' + e + '" does not exist.');
      }
    }, {
      key: "generate",
      value: function value(e, n) {
        var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = this.getRoute(e),
            r = n || {},
            s = t({}, r),
            u = "",
            c = !0,
            a = "",
            f = "undefined" == typeof this.getPort() || null === this.getPort() ? "" : this.getPort();

        if (i.tokens.forEach(function (t) {
          if ("text" === t[0]) return u = t[1] + u, void (c = !1);
          {
            if ("variable" !== t[0]) throw new Error('The token type "' + t[0] + '" is not supported.');
            var n = i.defaults && t[3] in i.defaults;

            if (!1 === c || !n || t[3] in r && r[t[3]] != i.defaults[t[3]]) {
              var o = void 0;
              if (t[3] in r) o = r[t[3]], delete s[t[3]];else {
                if (!n) {
                  if (c) return;
                  throw new Error('The route "' + e + '" requires the parameter "' + t[3] + '".');
                }

                o = i.defaults[t[3]];
              }
              var a = !0 === o || !1 === o || "" === o;

              if (!a || !c) {
                var f = encodeURIComponent(o).replace(/%2F/g, "/");
                "null" === f && null === o && (f = ""), u = t[1] + f + u;
              }

              c = !1;
            } else n && t[3] in s && delete s[t[3]];
          }
        }), "" === u && (u = "/"), i.hosttokens.forEach(function (e) {
          var t = void 0;
          return "text" === e[0] ? void (a = e[1] + a) : void ("variable" === e[0] && (e[3] in r ? (t = r[e[3]], delete s[e[3]]) : i.defaults && e[3] in i.defaults && (t = i.defaults[e[3]]), a = e[1] + t + a));
        }), u = this.context_.base_url + u, i.requirements && "_scheme" in i.requirements && this.getScheme() != i.requirements._scheme ? u = i.requirements._scheme + "://" + (a || this.getHost()) + u : "undefined" != typeof i.schemes && "undefined" != typeof i.schemes[0] && this.getScheme() !== i.schemes[0] ? u = i.schemes[0] + "://" + (a || this.getHost()) + u : a && this.getHost() !== a + ("" === f ? "" : ":" + f) ? u = this.getScheme() + "://" + a + ("" === f ? "" : ":" + f) + u : o === !0 && (u = this.getScheme() + "://" + this.getHost() + u), Object.keys(s).length > 0) {
          var l = void 0,
              h = [],
              y = function y(e, t) {
            t = "function" == typeof t ? t() : t, t = null === t ? "" : t, h.push(encodeURIComponent(e) + "=" + encodeURIComponent(t));
          };

          for (l in s) {
            this.buildQueryParams(l, s[l], y);
          }

          u = u + "?" + h.join("&").replace(/%20/g, "+");
        }

        return u;
      }
    }], [{
      key: "getInstance",
      value: function value() {
        return r;
      }
    }, {
      key: "setData",
      value: function value(e) {
        var t = i.getInstance();
        t.setRoutingData(e);
      }
    }]), i;
  }();

  i.Route, i.Context;
  var r = new i();
  return {
    Router: i,
    Routing: r
  };
});

/***/ })

},[["./assets/js/app.js","runtime","vendors~js/app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJyb3V0ZXMiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIldPVyIsImluaXQiLCJwb3BvdmVyIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCIkdGhpcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJocmVmIiwiZmluZCIsImF0dHIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwiJHRhcmdldCIsImZvY3VzIiwiaXMiLCJjb25zb2xlIiwibG9nIiwicGFyZW50Iiwic2VyaWFsaXplIiwiYWpheCIsInVybCIsImdlbmVyYXRlIiwibWV0aG9kIiwiZGF0YSIsImFsd2F5cyIsImh0bWwiLCJ2aWV3IiwicG9zdCIsImlkIiwiZmllbGRuYW1lIiwidmFsdWUiLCJwcm9wIiwidCIsIm4iLCJkZWZpbmUiLCJUeXBlRXJyb3IiLCJPYmplY3QiLCJhc3NpZ24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJvIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiaSIsImNvbnRleHRfIiwiYmFzZV91cmwiLCJwcmVmaXgiLCJob3N0IiwicG9ydCIsInNjaGVtZSIsImxvY2FsZSIsInNldFJvdXRlcyIsInNldEJhc2VVcmwiLCJzZXRQcmVmaXgiLCJzZXRQb3J0Iiwic2V0TG9jYWxlIiwic2V0SG9zdCIsInNldFNjaGVtZSIsInJvdXRlc18iLCJmcmVlemUiLCJyIiwicyIsIlJlZ0V4cCIsIkFycmF5IiwiZm9yRWFjaCIsInRlc3QiLCJidWlsZFF1ZXJ5UGFyYW1zIiwiRXJyb3IiLCJnZXRSb3V0ZSIsInUiLCJjIiwiYSIsImYiLCJnZXRQb3J0IiwidG9rZW5zIiwiZGVmYXVsdHMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwiaG9zdHRva2VucyIsInJlcXVpcmVtZW50cyIsImdldFNjaGVtZSIsIl9zY2hlbWUiLCJnZXRIb3N0Iiwic2NoZW1lcyIsImtleXMiLCJsIiwiaCIsInkiLCJwdXNoIiwiam9pbiIsImdldEluc3RhbmNlIiwiUm91dGUiLCJDb250ZXh0IiwiUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLG1CQUFPLENBQUMsZ0VBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxtSEFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLHVHQUFELENBQVA7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLDBFQUFELENBQXRCOztBQUNBO0FBRUFFLGtIQUFPLENBQUNDLGNBQVIsQ0FBdUJGLE1BQXZCO0FBQ0E7QUFFQUcsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCLE1BQUlDLDZDQUFKLEdBQVVDLElBQVY7QUFDQUosR0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJLLE9BQTdCO0FBQ0FMLEdBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCTSxFQUE1QixDQUErQixPQUEvQixFQUF3QyxVQUFVQyxDQUFWLEVBQWE7QUFDakRBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQUlDLEtBQUssR0FBR1QsQ0FBQyxDQUFDLElBQUQsQ0FBYjtBQUNBQSxLQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQlUsV0FBM0IsQ0FBdUMsUUFBdkM7QUFDQUQsU0FBSyxDQUFDRSxRQUFOLENBQWUsUUFBZjtBQUNBLFFBQUlDLElBQUksR0FBR1osQ0FBQyxDQUFDUyxLQUFLLENBQUNJLElBQU4s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dWlyZSgnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJyk7XG5yZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnKTtcbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcblxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xuaW1wb3J0IFdPVyBmcm9tICd3b3cuanMnO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgbmV3IFdPVygpLmluaXQoKTtcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3ZlcigpO1xuICAgICQoJy5tYWluLW5hdmJhciAubmF2LWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICQoJy5uYXZiYXItbmF2IC5uYXYtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB2YXIgaHJlZiA9ICQoJHRoaXMuZmluZCgnLm5hdi1saW5rJykuYXR0cignaHJlZicpKTtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiBocmVmLm9mZnNldCgpLnRvcCAtIDcwXG4gICAgICAgIH0sIDEwMDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENhbGxiYWNrIGFmdGVyIGFuaW1hdGlvblxuICAgICAgICAgICAgLy8gTXVzdCBjaGFuZ2UgZm9jdXMhXG4gICAgICAgICAgICB2YXIgJHRhcmdldCA9IGhyZWY7XG4gICAgICAgICAgICAkdGFyZ2V0LmZvY3VzKCk7XG4gICAgICAgICAgICBpZiAoJHRhcmdldC5pcyhcIjpmb2N1c1wiKSkgeyAvLyBDaGVja2luZyBpZiB0aGUgdGFyZ2V0IHdhcyBmb2N1c2VkXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7IC8vIEFkZGluZyB0YWJpbmRleCBmb3IgZWxlbWVudHMgbm90IGZvY3VzYWJsZVxuICAgICAgICAgICAgICAgICR0YXJnZXQuZm9jdXMoKTsgLy8gU2V0IGZvY3VzIGFnYWluXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAkKCcuY29udGFjdC1zZW5kJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLnBhcmVudCgnZm9ybScpLnNlcmlhbGl6ZSgpKTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnaG9tZXBhZ2UnKSxcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBkYXRhOiAkKHRoaXMpLnBhcmVudCgnZm9ybScpLnNlcmlhbGl6ZSgpXG4gICAgICAgIH0pLmFsd2F5cyhmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAkKCdmb3JtJykuaHRtbChkYXRhLnZpZXcpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICAkKCcuY3VzdG9tLXN3aXRjaCBpbnB1dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICQucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdjb250YWN0X3N3aXRjaF91cGRhdGUnLCB7aWQ6ICQodGhpcykuZGF0YSgnZW50aXR5Jyl9KSwge1xuICAgICAgICAgICAgZmllbGRuYW1lOiAkKHRoaXMpLmRhdGEoJ2ZpZWxkbmFtZScpLFxuICAgICAgICAgICAgdmFsdWU6ICQodGhpcykucHJvcCgnY2hlY2tlZCcpXG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7IiwiIWZ1bmN0aW9uKGUsdCl7dmFyIG49dCgpO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sbi5Sb3V0aW5nKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1uLlJvdXRpbmc6KGUuUm91dGluZz1uLlJvdXRpbmcsZS5mb3M9e1JvdXRlcjpuLlJvdXRlcn0pfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9dmFyIHQ9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYoZVtvXT1uW29dKX1yZXR1cm4gZX0sbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLmtleSxvKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixvKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxvJiZlKHQsbyksdH19KCksaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGkodCxuKXtlKHRoaXMsaSksdGhpcy5jb250ZXh0Xz10fHx7YmFzZV91cmw6XCJcIixwcmVmaXg6XCJcIixob3N0OlwiXCIscG9ydDpcIlwiLHNjaGVtZTpcIlwiLGxvY2FsZTpcIlwifSx0aGlzLnNldFJvdXRlcyhufHx7fSl9cmV0dXJuIG8oaSxbe2tleTpcInNldFJvdXRpbmdEYXRhXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5zZXRCYXNlVXJsKGUuYmFzZV91cmwpLHRoaXMuc2V0Um91dGVzKGUucm91dGVzKSxcInByZWZpeFwiaW4gZSYmdGhpcy5zZXRQcmVmaXgoZS5wcmVmaXgpLFwicG9ydFwiaW4gZSYmdGhpcy5zZXRQb3J0KGUucG9ydCksXCJsb2NhbGVcImluIGUmJnRoaXMuc2V0TG9jYWxlKGUubG9jYWxlKSx0aGlzLnNldEhvc3QoZS5ob3N0KSx0aGlzLnNldFNjaGVtZShlLnNjaGVtZSl9fSx7a2V5Olwic2V0Um91dGVzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5yb3V0ZXNfPU9iamVjdC5mcmVlemUoZSl9fSx7a2V5OlwiZ2V0Um91dGVzXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yb3V0ZXNffX0se2tleTpcInNldEJhc2VVcmxcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmJhc2VfdXJsPWV9fSx7a2V5OlwiZ2V0QmFzZVVybFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uYmFzZV91cmx9fSx7a2V5Olwic2V0UHJlZml4XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5wcmVmaXg9ZX19LHtrZXk6XCJzZXRTY2hlbWVcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnNjaGVtZT1lfX0se2tleTpcImdldFNjaGVtZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uc2NoZW1lfX0se2tleTpcInNldEhvc3RcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmhvc3Q9ZX19LHtrZXk6XCJnZXRIb3N0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5ob3N0fX0se2tleTpcInNldFBvcnRcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnBvcnQ9ZX19LHtrZXk6XCJnZXRQb3J0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5wb3J0fX0se2tleTpcInNldExvY2FsZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ubG9jYWxlPWV9fSx7a2V5OlwiZ2V0TG9jYWxlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5sb2NhbGV9fSx7a2V5OlwiYnVpbGRRdWVyeVBhcmFtc1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCxvKXt2YXIgaT10aGlzLHI9dm9pZCAwLHM9bmV3IFJlZ0V4cCgvXFxbXFxdJC8pO2lmKHQgaW5zdGFuY2VvZiBBcnJheSl0LmZvckVhY2goZnVuY3Rpb24odCxyKXtzLnRlc3QoZSk/byhlLHQpOmkuYnVpbGRRdWVyeVBhcmFtcyhlK1wiW1wiKyhcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6bih0KSk/cjpcIlwiKStcIl1cIix0LG8pfSk7ZWxzZSBpZihcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6bih0KSkpZm9yKHIgaW4gdCl0aGlzLmJ1aWxkUXVlcnlQYXJhbXMoZStcIltcIityK1wiXVwiLHRbcl0sbyk7ZWxzZSBvKGUsdCl9fSx7a2V5OlwiZ2V0Um91dGVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmNvbnRleHRfLnByZWZpeCtlLG49ZStcIi5cIit0aGlzLmNvbnRleHRfLmxvY2FsZSxvPXRoaXMuY29udGV4dF8ucHJlZml4K2UrXCIuXCIrdGhpcy5jb250ZXh0Xy5sb2NhbGUsaT1bdCxuLG8sZV07Zm9yKHZhciByIGluIGkpaWYoaVtyXWluIHRoaXMucm91dGVzXylyZXR1cm4gdGhpcy5yb3V0ZXNfW2lbcl1dO3Rocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJytlKydcIiBkb2VzIG5vdCBleGlzdC4nKX19LHtrZXk6XCJnZW5lcmF0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsbil7dmFyIG89YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXSxpPXRoaXMuZ2V0Um91dGUoZSkscj1ufHx7fSxzPXQoe30sciksdT1cIlwiLGM9ITAsYT1cIlwiLGY9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHRoaXMuZ2V0UG9ydCgpfHxudWxsPT09dGhpcy5nZXRQb3J0KCk/XCJcIjp0aGlzLmdldFBvcnQoKTtpZihpLnRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKFwidGV4dFwiPT09dFswXSlyZXR1cm4gdT10WzFdK3Usdm9pZChjPSExKTt7aWYoXCJ2YXJpYWJsZVwiIT09dFswXSl0aHJvdyBuZXcgRXJyb3IoJ1RoZSB0b2tlbiB0eXBlIFwiJyt0WzBdKydcIiBpcyBub3Qgc3VwcG9ydGVkLicpO3ZhciBuPWkuZGVmYXVsdHMmJnRbM11pbiBpLmRlZmF1bHRzO2lmKCExPT09Y3x8IW58fHRbM11pbiByJiZyW3RbM11dIT1pLmRlZmF1bHRzW3RbM11dKXt2YXIgbz12b2lkIDA7aWYodFszXWluIHIpbz1yW3RbM11dLGRlbGV0ZSBzW3RbM11dO2Vsc2V7aWYoIW4pe2lmKGMpcmV0dXJuO3Rocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJytlKydcIiByZXF1aXJlcyB0aGUgcGFyYW1ldGVyIFwiJyt0WzNdKydcIi4nKX1vPWkuZGVmYXVsdHNbdFszXV19dmFyIGE9ITA9PT1vfHwhMT09PW98fFwiXCI9PT1vO2lmKCFhfHwhYyl7dmFyIGY9ZW5jb2RlVVJJQ29tcG9uZW50KG8pLnJlcGxhY2UoLyUyRi9nLFwiL1wiKTtcIm51bGxcIj09PWYmJm51bGw9PT1vJiYoZj1cIlwiKSx1PXRbMV0rZit1fWM9ITF9ZWxzZSBuJiZ0WzNdaW4gcyYmZGVsZXRlIHNbdFszXV19fSksXCJcIj09PXUmJih1PVwiL1wiKSxpLmhvc3R0b2tlbnMuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD12b2lkIDA7cmV0dXJuXCJ0ZXh0XCI9PT1lWzBdP3ZvaWQoYT1lWzFdK2EpOnZvaWQoXCJ2YXJpYWJsZVwiPT09ZVswXSYmKGVbM11pbiByPyh0PXJbZVszXV0sZGVsZXRlIHNbZVszXV0pOmkuZGVmYXVsdHMmJmVbM11pbiBpLmRlZmF1bHRzJiYodD1pLmRlZmF1bHRzW2VbM11dKSxhPWVbMV0rdCthKSl9KSx1PXRoaXMuY29udGV4dF8uYmFzZV91cmwrdSxpLnJlcXVpcmVtZW50cyYmXCJfc2NoZW1lXCJpbiBpLnJlcXVpcmVtZW50cyYmdGhpcy5nZXRTY2hlbWUoKSE9aS5yZXF1aXJlbWVudHMuX3NjaGVtZT91PWkucmVxdWlyZW1lbnRzLl9zY2hlbWUrXCI6Ly9cIisoYXx8dGhpcy5nZXRIb3N0KCkpK3U6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkuc2NoZW1lcyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkuc2NoZW1lc1swXSYmdGhpcy5nZXRTY2hlbWUoKSE9PWkuc2NoZW1lc1swXT91PWkuc2NoZW1lc1swXStcIjovL1wiKyhhfHx0aGlzLmdldEhvc3QoKSkrdTphJiZ0aGlzLmdldEhvc3QoKSE9PWErKFwiXCI9PT1mP1wiXCI6XCI6XCIrZik/dT10aGlzLmdldFNjaGVtZSgpK1wiOi8vXCIrYSsoXCJcIj09PWY/XCJcIjpcIjpcIitmKSt1Om89PT0hMCYmKHU9dGhpcy5nZXRTY2hlbWUoKStcIjovL1wiK3RoaXMuZ2V0SG9zdCgpK3UpLE9iamVjdC5rZXlzKHMpLmxlbmd0aD4wKXt2YXIgbD12b2lkIDAsaD1bXSx5PWZ1bmN0aW9uKGUsdCl7dD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QoKTp0LHQ9bnVsbD09PXQ/XCJcIjp0LGgucHVzaChlbmNvZGVVUklDb21wb25lbnQoZSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHQpKX07Zm9yKGwgaW4gcyl0aGlzLmJ1aWxkUXVlcnlQYXJhbXMobCxzW2xdLHkpO3U9dStcIj9cIitoLmpvaW4oXCImXCIpLnJlcGxhY2UoLyUyMC9nLFwiK1wiKX1yZXR1cm4gdX19XSxbe2tleTpcImdldEluc3RhbmNlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gcn19LHtrZXk6XCJzZXREYXRhXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9aS5nZXRJbnN0YW5jZSgpO3Quc2V0Um91dGluZ0RhdGEoZSl9fV0pLGl9KCk7aS5Sb3V0ZSxpLkNvbnRleHQ7dmFyIHI9bmV3IGk7cmV0dXJue1JvdXRlcjppLFJvdXRpbmc6cn19KTsiXSwic291cmNlUm9vdCI6IiJ9