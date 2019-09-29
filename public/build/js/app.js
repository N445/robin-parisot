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
/* harmony import */ var noty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! noty */ "./node_modules/noty/lib/noty.js");
/* harmony import */ var noty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(noty__WEBPACK_IMPORTED_MODULE_3__);


__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");

var routes = __webpack_require__(/*! ../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");


_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.setRoutingData(routes);



__webpack_require__(/*! select2/dist/js/select2.full.min */ "./node_modules/select2/dist/js/select2.full.min.js");

$(document).ready(function () {
  new wow_js__WEBPACK_IMPORTED_MODULE_2___default.a().init();
  $('.tags-select2').select2({
    multiple: true,
    tags: true
  });
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
  $('body').on('click', '.contact-send', function (e) {
    e.preventDefault();
    console.log($(this).parent('form').serialize());
    $.ajax({
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.generate('homepage'),
      method: "POST",
      data: $(this).parent('form').serialize()
    }).always(function (data) {
      console.log(data);

      if (data.success) {
        new noty__WEBPACK_IMPORTED_MODULE_3___default.a({
          type: 'success',
          theme: 'relax',
          text: 'Votre message à bien été envoyé',
          timeout: 2000
        }).show();
      } else {
        new noty__WEBPACK_IMPORTED_MODULE_3___default.a({
          type: 'error',
          theme: 'relax',
          text: 'Une erreur est survenue',
          timeout: 2000
        }).show();
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJyb3V0ZXMiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIldPVyIsImluaXQiLCJzZWxlY3QyIiwibXVsdGlwbGUiLCJ0YWdzIiwicG9wb3ZlciIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiJHRoaXMiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaHJlZiIsImZpbmQiLCJhdHRyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsIiR0YXJnZXQiLCJmb2N1cyIsImlzIiwiY29uc29sZSIsImxvZyIsInBhcmVudCIsInNlcmlhbGl6ZSIsImFqYXgiLCJ1cmwiLCJnZW5lcmF0ZSIsIm1ldGhvZCIsImRhdGEiLCJhbHdheXMiLCJzdWNjZXNzIiwiTm90eSIsInR5cGUiLCJ0aGVtZSIsInRleHQiLCJ0aW1lb3V0Iiwic2hvdyIsImh0bWwiLCJ2aWV3IiwicG9zdCIsImlkIiwiZmllbGRuYW1lIiwidmFsdWUiLCJwcm9wIiwidCIsIm4iLCJkZWZpbmUiLCJUeXBlRXJyb3IiLCJPYmplY3QiLCJhc3NpZ24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJvIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiaSIsImNvbnRleHRfIiwiYmFzZV91cmwiLCJwcmVmaXgiLCJob3N0IiwicG9ydCIsInNjaGVtZSIsImxvY2FsZSIsInNldFJvdXRlcyIsInNldEJhc2VVcmwiLCJzZXRQcmVmaXgiLCJzZXRQb3J0Iiwic2V0TG9jYWxlIiwic2V0SG9zdCIsInNldFNjaGVtZSIsInJvdXRlc18iLCJmcmVlemUiLCJyIiwicyIsIlJlZ0V4cCIsIkFycmF5IiwiZm9yRWFjaCIsInRlc3QiLCJidWlsZFF1ZXJ5UGFyYW1zIiwiRXJyb3IiLCJnZXRSb3V0ZSIsInUiLCJjIiwiYSIsImYiLCJnZXRQb3J0IiwidG9rZW5zIiwiZGVmYXVsdHMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwiaG9zdHRva2VucyIsInJlcXVpcmVtZW50cyIsImdldFNjaGVtZSIsIl9zY2hlbWUiLCJnZXRIb3N0Iiwic2NoZW1lcyIsImtleXMiLCJsIiwiaCIsInkiLCJwdXNoIiwiam9pbiIsImdldEluc3RhbmNlIiwiUm91dGUiLCJDb250ZXh0IiwiUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsbUJBQU8sQ0FBQyxnRUFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLG1IQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsdUdBQUQsQ0FBUDs7QUFDQSxJQUFNQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsMEVBQUQsQ0FBdEI7O0FBQ0E7QUFFQUUsa0hBQU8sQ0FBQ0MsY0FBUixDQUF1QkYsTUFBdkI7QUFDQTtBQUNBOztBQUVBRCxtQkFBTyxDQUFDLDRGQUFELENBQVA7O0FBRUFJLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQixNQUFJQyw2Q0FBSixHQUFVQyxJQUFWO0FBQ0FKLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJLLE9BQW5CLENBQTJCO0FBQ3ZCQyxZQUFRLEVBQUUsSUFEYTtBQUV2QkMsUUFBSSxFQUFFO0FBRmlCLEdBQTNCO0FBSUFQLEdBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCUSxPQUE3QjtBQUNBUixHQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QlMsRUFBNUIsQ0FBK0IsT0FBL0IsRUFB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QUM7QUFBQzNCLFNBQUcsRUFBQyxhQUFMO0FBQW1CckIsV0FBSyxFQUFDLGlCQUFVO0FBQUMsZUFBT3VDLENBQVA7QUFBUztBQUE3QyxLQUFELEVBQWdEO0FBQUNsQixTQUFHLEVBQUMsU0FBTDtBQUFlckIsV0FBSyxFQUFDLGVBQVNyQyxDQUFULEVBQVc7QUFBQyxZQUFJdUMsQ0FBQyxHQUFDb0IsQ0FBQyxDQUFDK0MsV0FBRixFQUFOO0FBQXNCbkUsU0FBQyxDQUFDbEQsY0FBRixDQUFpQlcsQ0FBakI7QUFBb0I7QUFBM0UsS0FBaEQsQ0FBdjJHLENBQUQsRUFBdStHMkQsQ0FBOStHO0FBQWcvRyxHQUF4bkgsRUFBM21COztBQUFzdUlBLEdBQUMsQ0FBQ2dELEtBQUYsRUFBUWhELENBQUMsQ0FBQ2lELE9BQVY7QUFBa0IsTUFBSWhDLENBQUMsR0FBQyxJQUFJakIsQ0FBSixFQUFOO0FBQVksU0FBTTtBQUFDa0QsVUFBTSxFQUFDbEQsQ0FBUjtBQUFVdkUsV0FBTyxFQUFDd0Y7QUFBbEIsR0FBTjtBQUEyQixDQUE3bEosQ0FBRCxDIiwiZmlsZSI6ImpzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xucmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJyk7XG5yZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnKTtcbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcblxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xuaW1wb3J0IFdPVyBmcm9tICd3b3cuanMnO1xuaW1wb3J0IE5vdHkgZnJvbSAnbm90eSc7XG5cbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9zZWxlY3QyLmZ1bGwubWluJyk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgV09XKCkuaW5pdCgpO1xuICAgICQoJy50YWdzLXNlbGVjdDInKS5zZWxlY3QyKHtcbiAgICAgICAgbXVsdGlwbGU6IHRydWUsXG4gICAgICAgIHRhZ3M6IHRydWUsXG4gICAgfSk7XG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoKTtcbiAgICAkKCcubWFpbi1uYXZiYXIgLm5hdi1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAkKCcubmF2YmFyLW5hdiAubmF2LWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgdmFyIGhyZWYgPSAkKCR0aGlzLmZpbmQoJy5uYXYtbGluaycpLmF0dHIoJ2hyZWYnKSk7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogaHJlZi5vZmZzZXQoKS50b3AgLSA3MFxuICAgICAgICB9LCAxMDAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDYWxsYmFjayBhZnRlciBhbmltYXRpb25cbiAgICAgICAgICAgIC8vIE11c3QgY2hhbmdlIGZvY3VzIVxuICAgICAgICAgICAgdmFyICR0YXJnZXQgPSBocmVmO1xuICAgICAgICAgICAgJHRhcmdldC5mb2N1cygpO1xuICAgICAgICAgICAgaWYgKCR0YXJnZXQuaXMoXCI6Zm9jdXNcIikpIHsgLy8gQ2hlY2tpbmcgaWYgdGhlIHRhcmdldCB3YXMgZm9jdXNlZFxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5hdHRyKCd0YWJpbmRleCcsICctMScpOyAvLyBBZGRpbmcgdGFiaW5kZXggZm9yIGVsZW1lbnRzIG5vdCBmb2N1c2FibGVcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmZvY3VzKCk7IC8vIFNldCBmb2N1cyBhZ2FpblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuY29udGFjdC1zZW5kJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLnBhcmVudCgnZm9ybScpLnNlcmlhbGl6ZSgpKTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnaG9tZXBhZ2UnKSxcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBkYXRhOiAkKHRoaXMpLnBhcmVudCgnZm9ybScpLnNlcmlhbGl6ZSgpXG4gICAgICAgIH0pLmFsd2F5cyhmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgbmV3IE5vdHkoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lOiAncmVsYXgnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnVm90cmUgbWVzc2FnZSDDoCBiaWVuIMOpdMOpIGVudm95w6knLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAyMDAwXG4gICAgICAgICAgICAgICAgfSkuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3IE5vdHkoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB0aGVtZTogJ3JlbGF4JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMjAwMFxuICAgICAgICAgICAgICAgIH0pLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQoJ2Zvcm0nKS5odG1sKGRhdGEudmlldyk7XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgICQoJy5jdXN0b20tc3dpdGNoIGlucHV0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgJC5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2NvbnRhY3Rfc3dpdGNoX3VwZGF0ZScsIHtpZDogJCh0aGlzKS5kYXRhKCdlbnRpdHknKX0pLCB7XG4gICAgICAgICAgICBmaWVsZG5hbWU6ICQodGhpcykuZGF0YSgnZmllbGRuYW1lJyksXG4gICAgICAgICAgICB2YWx1ZTogJCh0aGlzKS5wcm9wKCdjaGVja2VkJylcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTsiLCIhZnVuY3Rpb24oZSx0KXt2YXIgbj10KCk7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxuLlJvdXRpbmcpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPW4uUm91dGluZzooZS5Sb3V0aW5nPW4uUm91dGluZyxlLmZvcz17Um91dGVyOm4uUm91dGVyfSl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX12YXIgdD1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciBvIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sbykmJihlW29dPW5bb10pfXJldHVybiBlfSxuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LG89ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBvPXRbbl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8ua2V5LG8pfX1yZXR1cm4gZnVuY3Rpb24odCxuLG8pe3JldHVybiBuJiZlKHQucHJvdG90eXBlLG4pLG8mJmUodCxvKSx0fX0oKSxpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSh0LG4pe2UodGhpcyxpKSx0aGlzLmNvbnRleHRfPXR8fHtiYXNlX3VybDpcIlwiLHByZWZpeDpcIlwiLGhvc3Q6XCJcIixwb3J0OlwiXCIsc2NoZW1lOlwiXCIsbG9jYWxlOlwiXCJ9LHRoaXMuc2V0Um91dGVzKG58fHt9KX1yZXR1cm4gbyhpLFt7a2V5Olwic2V0Um91dGluZ0RhdGFcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnNldEJhc2VVcmwoZS5iYXNlX3VybCksdGhpcy5zZXRSb3V0ZXMoZS5yb3V0ZXMpLFwicHJlZml4XCJpbiBlJiZ0aGlzLnNldFByZWZpeChlLnByZWZpeCksXCJwb3J0XCJpbiBlJiZ0aGlzLnNldFBvcnQoZS5wb3J0KSxcImxvY2FsZVwiaW4gZSYmdGhpcy5zZXRMb2NhbGUoZS5sb2NhbGUpLHRoaXMuc2V0SG9zdChlLmhvc3QpLHRoaXMuc2V0U2NoZW1lKGUuc2NoZW1lKX19LHtrZXk6XCJzZXRSb3V0ZXNcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnJvdXRlc189T2JqZWN0LmZyZWV6ZShlKX19LHtrZXk6XCJnZXRSb3V0ZXNcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJvdXRlc199fSx7a2V5Olwic2V0QmFzZVVybFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uYmFzZV91cmw9ZX19LHtrZXk6XCJnZXRCYXNlVXJsXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5iYXNlX3VybH19LHtrZXk6XCJzZXRQcmVmaXhcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnByZWZpeD1lfX0se2tleTpcInNldFNjaGVtZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uc2NoZW1lPWV9fSx7a2V5OlwiZ2V0U2NoZW1lXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5zY2hlbWV9fSx7a2V5Olwic2V0SG9zdFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uaG9zdD1lfX0se2tleTpcImdldEhvc3RcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmhvc3R9fSx7a2V5Olwic2V0UG9ydFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ucG9ydD1lfX0se2tleTpcImdldFBvcnRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLnBvcnR9fSx7a2V5Olwic2V0TG9jYWxlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5sb2NhbGU9ZX19LHtrZXk6XCJnZXRMb2NhbGVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmxvY2FsZX19LHtrZXk6XCJidWlsZFF1ZXJ5UGFyYW1zXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG8pe3ZhciBpPXRoaXMscj12b2lkIDAscz1uZXcgUmVnRXhwKC9cXFtcXF0kLyk7aWYodCBpbnN0YW5jZW9mIEFycmF5KXQuZm9yRWFjaChmdW5jdGlvbih0LHIpe3MudGVzdChlKT9vKGUsdCk6aS5idWlsZFF1ZXJ5UGFyYW1zKGUrXCJbXCIrKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpuKHQpKT9yOlwiXCIpK1wiXVwiLHQsbyl9KTtlbHNlIGlmKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpuKHQpKSlmb3IociBpbiB0KXRoaXMuYnVpbGRRdWVyeVBhcmFtcyhlK1wiW1wiK3IrXCJdXCIsdFtyXSxvKTtlbHNlIG8oZSx0KX19LHtrZXk6XCJnZXRSb3V0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuY29udGV4dF8ucHJlZml4K2Usbj1lK1wiLlwiK3RoaXMuY29udGV4dF8ubG9jYWxlLG89dGhpcy5jb250ZXh0Xy5wcmVmaXgrZStcIi5cIit0aGlzLmNvbnRleHRfLmxvY2FsZSxpPVt0LG4sbyxlXTtmb3IodmFyIHIgaW4gaSlpZihpW3JdaW4gdGhpcy5yb3V0ZXNfKXJldHVybiB0aGlzLnJvdXRlc19baVtyXV07dGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInK2UrJ1wiIGRvZXMgbm90IGV4aXN0LicpfX0se2tleTpcImdlbmVyYXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSxuKXt2YXIgbz1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdLGk9dGhpcy5nZXRSb3V0ZShlKSxyPW58fHt9LHM9dCh7fSxyKSx1PVwiXCIsYz0hMCxhPVwiXCIsZj1cInVuZGVmaW5lZFwiPT10eXBlb2YgdGhpcy5nZXRQb3J0KCl8fG51bGw9PT10aGlzLmdldFBvcnQoKT9cIlwiOnRoaXMuZ2V0UG9ydCgpO2lmKGkudG9rZW5zLmZvckVhY2goZnVuY3Rpb24odCl7aWYoXCJ0ZXh0XCI9PT10WzBdKXJldHVybiB1PXRbMV0rdSx2b2lkKGM9ITEpO3tpZihcInZhcmlhYmxlXCIhPT10WzBdKXRocm93IG5ldyBFcnJvcignVGhlIHRva2VuIHR5cGUgXCInK3RbMF0rJ1wiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7dmFyIG49aS5kZWZhdWx0cyYmdFszXWluIGkuZGVmYXVsdHM7aWYoITE9PT1jfHwhbnx8dFszXWluIHImJnJbdFszXV0hPWkuZGVmYXVsdHNbdFszXV0pe3ZhciBvPXZvaWQgMDtpZih0WzNdaW4gcilvPXJbdFszXV0sZGVsZXRlIHNbdFszXV07ZWxzZXtpZighbil7aWYoYylyZXR1cm47dGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInK2UrJ1wiIHJlcXVpcmVzIHRoZSBwYXJhbWV0ZXIgXCInK3RbM10rJ1wiLicpfW89aS5kZWZhdWx0c1t0WzNdXX12YXIgYT0hMD09PW98fCExPT09b3x8XCJcIj09PW87aWYoIWF8fCFjKXt2YXIgZj1lbmNvZGVVUklDb21wb25lbnQobykucmVwbGFjZSgvJTJGL2csXCIvXCIpO1wibnVsbFwiPT09ZiYmbnVsbD09PW8mJihmPVwiXCIpLHU9dFsxXStmK3V9Yz0hMX1lbHNlIG4mJnRbM11pbiBzJiZkZWxldGUgc1t0WzNdXX19KSxcIlwiPT09dSYmKHU9XCIvXCIpLGkuaG9zdHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PXZvaWQgMDtyZXR1cm5cInRleHRcIj09PWVbMF0/dm9pZChhPWVbMV0rYSk6dm9pZChcInZhcmlhYmxlXCI9PT1lWzBdJiYoZVszXWluIHI/KHQ9cltlWzNdXSxkZWxldGUgc1tlWzNdXSk6aS5kZWZhdWx0cyYmZVszXWluIGkuZGVmYXVsdHMmJih0PWkuZGVmYXVsdHNbZVszXV0pLGE9ZVsxXSt0K2EpKX0pLHU9dGhpcy5jb250ZXh0Xy5iYXNlX3VybCt1LGkucmVxdWlyZW1lbnRzJiZcIl9zY2hlbWVcImluIGkucmVxdWlyZW1lbnRzJiZ0aGlzLmdldFNjaGVtZSgpIT1pLnJlcXVpcmVtZW50cy5fc2NoZW1lP3U9aS5yZXF1aXJlbWVudHMuX3NjaGVtZStcIjovL1wiKyhhfHx0aGlzLmdldEhvc3QoKSkrdTpcInVuZGVmaW5lZFwiIT10eXBlb2YgaS5zY2hlbWVzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgaS5zY2hlbWVzWzBdJiZ0aGlzLmdldFNjaGVtZSgpIT09aS5zY2hlbWVzWzBdP3U9aS5zY2hlbWVzWzBdK1wiOi8vXCIrKGF8fHRoaXMuZ2V0SG9zdCgpKSt1OmEmJnRoaXMuZ2V0SG9zdCgpIT09YSsoXCJcIj09PWY/XCJcIjpcIjpcIitmKT91PXRoaXMuZ2V0U2NoZW1lKCkrXCI6Ly9cIithKyhcIlwiPT09Zj9cIlwiOlwiOlwiK2YpK3U6bz09PSEwJiYodT10aGlzLmdldFNjaGVtZSgpK1wiOi8vXCIrdGhpcy5nZXRIb3N0KCkrdSksT2JqZWN0LmtleXMocykubGVuZ3RoPjApe3ZhciBsPXZvaWQgMCxoPVtdLHk9ZnVuY3Rpb24oZSx0KXt0PVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dCgpOnQsdD1udWxsPT09dD9cIlwiOnQsaC5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChlKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQodCkpfTtmb3IobCBpbiBzKXRoaXMuYnVpbGRRdWVyeVBhcmFtcyhsLHNbbF0seSk7dT11K1wiP1wiK2guam9pbihcIiZcIikucmVwbGFjZSgvJTIwL2csXCIrXCIpfXJldHVybiB1fX1dLFt7a2V5OlwiZ2V0SW5zdGFuY2VcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiByfX0se2tleTpcInNldERhdGFcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1pLmdldEluc3RhbmNlKCk7dC5zZXRSb3V0aW5nRGF0YShlKX19XSksaX0oKTtpLlJvdXRlLGkuQ29udGV4dDt2YXIgcj1uZXcgaTtyZXR1cm57Um91dGVyOmksUm91dGluZzpyfX0pOyJdLCJzb3VyY2VSb290IjoiIn0=