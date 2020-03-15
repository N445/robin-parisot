(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var noty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! noty */ "./node_modules/noty/lib/noty.js");
/* harmony import */ var noty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(noty__WEBPACK_IMPORTED_MODULE_1__);
// this loads jquery, but does *not* set a global $ or jQuery variable
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");

var routes = __webpack_require__(/*! ../../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

var highlight = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

 // var moment = require('moment');
// require('moment/locale/fr');
// moment.locale('fr');

_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.setRoutingData(routes);


__webpack_require__(/*! jquery-parallax.js */ "./node_modules/jquery-parallax.js/parallax.min.js");

$(document).ready(function () {
  // $('[data-toggle="popover"]').popover();
  highlight.initHighlightingOnLoad(); // $.each($('.actualite-date'), function (key, actualiteDate) {
  //     var data = $(actualiteDate).data('data');
  //     // $(actuality).find('.actualite-date').html(moment(data, "DD-MM-YYYY").format("dddd Do MMMM YYYY"));
  //     $(actualiteDate).html(moment(data, "DD-MM-YYYY").fromNow());
  // })

  /* $('.main-navbar .nav-item').on('click', function (e) {
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
           if ($target.is(":focus")) { // Checking if the target was focused
               return false;
           } else {
               $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
               $target.focus(); // Set focus again
           }
           ;
       });
   })*/

  $('body').on('click', '.contact-send', function (e) {
    e.preventDefault();
    console.log($(this).parent('form').serialize());
    $.ajax({
      url: _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.generate('homepage'),
      method: "POST",
      data: $(this).parent('form').serialize()
    }).always(function (data) {
      console.log(data);

      if (data.success) {
        new noty__WEBPACK_IMPORTED_MODULE_1___default.a({
          type: 'success',
          theme: 'relax',
          text: 'Votre message à bien été envoyé',
          timeout: 2000
        }).show();
      } else {
        new noty__WEBPACK_IMPORTED_MODULE_1___default.a({
          type: 'error',
          theme: 'relax',
          text: 'Une erreur est survenue',
          timeout: 2000
        }).show();
      }

      $('form').html(data.view);
    });
  });
});

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
        }), u = this.context_.base_url + u, i.requirements && "_scheme" in i.requirements && this.getScheme() != i.requirements._scheme ? u = i.requirements._scheme + "://" + (a || this.getHost()) + ("" === f ? "" : ":" + f) + u : "undefined" != typeof i.schemes && "undefined" != typeof i.schemes[0] && this.getScheme() !== i.schemes[0] ? u = i.schemes[0] + "://" + (a || this.getHost()) + ("" === f ? "" : ":" + f) + u : a && this.getHost() !== a + ("" === f ? "" : ":" + f) ? u = this.getScheme() + "://" + a + ("" === f ? "" : ":" + f) + u : o === !0 && (u = this.getScheme() + "://" + this.getHost() + ("" === f ? "" : ":" + f) + u), Object.keys(s).length > 0) {
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

},[["./assets/js/app.js","runtime","vendors~js/admin~js/app","vendors~js/app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwicm91dGVzIiwiaGlnaGxpZ2h0IiwiUm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwiZG9jdW1lbnQiLCJyZWFkeSIsImluaXRIaWdobGlnaHRpbmdPbkxvYWQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJwYXJlbnQiLCJzZXJpYWxpemUiLCJhamF4IiwidXJsIiwiZ2VuZXJhdGUiLCJtZXRob2QiLCJkYXRhIiwiYWx3YXlzIiwic3VjY2VzcyIsIk5vdHkiLCJ0eXBlIiwidGhlbWUiLCJ0ZXh0IiwidGltZW91dCIsInNob3ciLCJodG1sIiwidmlldyIsInQiLCJuIiwiZGVmaW5lIiwiVHlwZUVycm9yIiwiT2JqZWN0IiwiYXNzaWduIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwibyIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsImkiLCJjb250ZXh0XyIsImJhc2VfdXJsIiwicHJlZml4IiwiaG9zdCIsInBvcnQiLCJzY2hlbWUiLCJsb2NhbGUiLCJzZXRSb3V0ZXMiLCJ2YWx1ZSIsInNldEJhc2VVcmwiLCJzZXRQcmVmaXgiLCJzZXRQb3J0Iiwic2V0TG9jYWxlIiwic2V0SG9zdCIsInNldFNjaGVtZSIsInJvdXRlc18iLCJmcmVlemUiLCJyIiwicyIsIlJlZ0V4cCIsIkFycmF5IiwiZm9yRWFjaCIsInRlc3QiLCJidWlsZFF1ZXJ5UGFyYW1zIiwiRXJyb3IiLCJnZXRSb3V0ZSIsInUiLCJjIiwiYSIsImYiLCJnZXRQb3J0IiwidG9rZW5zIiwiZGVmYXVsdHMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwiaG9zdHRva2VucyIsInJlcXVpcmVtZW50cyIsImdldFNjaGVtZSIsIl9zY2hlbWUiLCJnZXRIb3N0Iiwic2NoZW1lcyIsImtleXMiLCJsIiwiaCIsInkiLCJwdXNoIiwiam9pbiIsImdldEluc3RhbmNlIiwiUm91dGUiLCJDb250ZXh0IiwiUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUNBQSxtQkFBTyxDQUFDLGdFQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsbUhBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx1R0FBRCxDQUFQOztBQUVBLElBQU1DLE1BQU0sR0FBR0QsbUJBQU8sQ0FBQywwRUFBRCxDQUF0Qjs7QUFDQSxJQUFNRSxTQUFTLEdBQUdGLG1CQUFPLENBQUMsOERBQUQsQ0FBekI7O0NBR0E7QUFDQTtBQUNBOztBQUNBRyxrSEFBTyxDQUFDQyxjQUFSLENBQXVCSCxNQUF2QjtBQUNBOztBQUNBRCxtQkFBTyxDQUFDLDZFQUFELENBQVA7O0FBRUFELENBQUMsQ0FBQ00sUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUUxQjtBQUNBSixXQUFTLENBQUNLLHNCQUFWLEdBSDBCLENBSzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJDUixHQUFDLENBQUMsTUFBRCxDQUFELENBQVVTLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLGVBQXRCLEVBQXVDLFVBQVVDLENBQVYsRUFBYTtBQUNoREEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZYixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFjLE1BQVIsQ0FBZSxNQUFm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QzFCLGNBQUYsQ0FBaUJLLENBQWpCO0FBQW9CO0FBQTNFLEtBQWhELENBQTc1RyxDQUFELEVBQTZoSHlDLENBQXBpSDtBQUFzaUgsR0FBOXFILEVBQTNtQjs7QUFBNHhJQSxHQUFDLENBQUNpRCxLQUFGLEVBQVFqRCxDQUFDLENBQUNrRCxPQUFWO0FBQWtCLE1BQUloQyxDQUFDLEdBQUMsSUFBSWxCLENBQUosRUFBTjtBQUFZLFNBQU07QUFBQ21ELFVBQU0sRUFBQ25ELENBQVI7QUFBVS9DLFdBQU8sRUFBQ2lFO0FBQWxCLEdBQU47QUFBMkIsQ0FBbnBKLENBQUQsQyIsImZpbGUiOiJqcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGxvYWRzIGpxdWVyeSwgYnV0IGRvZXMgKm5vdCogc2V0IGEgZ2xvYmFsICQgb3IgalF1ZXJ5IHZhcmlhYmxlXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5yZXF1aXJlKCdib290c3RyYXAnKTtcbnJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcycpO1xucmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJyk7XG5cbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcbmNvbnN0IGhpZ2hsaWdodCA9IHJlcXVpcmUoJ2hpZ2hsaWdodC5qcycpO1xuaW1wb3J0IFJvdXRpbmcgZnJvbSAnLi4vLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5taW4uanMnO1xuXG4vLyB2YXIgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG4vLyByZXF1aXJlKCdtb21lbnQvbG9jYWxlL2ZyJyk7XG4vLyBtb21lbnQubG9jYWxlKCdmcicpO1xuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xuaW1wb3J0IE5vdHkgZnJvbSAnbm90eSc7XG5yZXF1aXJlKCdqcXVlcnktcGFyYWxsYXguanMnKTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoKTtcbiAgICBoaWdobGlnaHQuaW5pdEhpZ2hsaWdodGluZ09uTG9hZCgpO1xuXG4gICAgLy8gJC5lYWNoKCQoJy5hY3R1YWxpdGUtZGF0ZScpLCBmdW5jdGlvbiAoa2V5LCBhY3R1YWxpdGVEYXRlKSB7XG4gICAgLy8gICAgIHZhciBkYXRhID0gJChhY3R1YWxpdGVEYXRlKS5kYXRhKCdkYXRhJyk7XG4gICAgLy8gICAgIC8vICQoYWN0dWFsaXR5KS5maW5kKCcuYWN0dWFsaXRlLWRhdGUnKS5odG1sKG1vbWVudChkYXRhLCBcIkRELU1NLVlZWVlcIikuZm9ybWF0KFwiZGRkZCBEbyBNTU1NIFlZWVlcIikpO1xuICAgIC8vICAgICAkKGFjdHVhbGl0ZURhdGUpLmh0bWwobW9tZW50KGRhdGEsIFwiREQtTU0tWVlZWVwiKS5mcm9tTm93KCkpO1xuICAgIC8vIH0pXG5cblxuICAgLyogJCgnLm1haW4tbmF2YmFyIC5uYXYtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgJCgnLm5hdmJhci1uYXYgLm5hdi1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkdGhpcy5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHZhciBocmVmID0gJCgkdGhpcy5maW5kKCcubmF2LWxpbmsnKS5hdHRyKCdocmVmJykpO1xuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IGhyZWYub2Zmc2V0KCkudG9wIC0gNzBcbiAgICAgICAgfSwgMTAwMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2FsbGJhY2sgYWZ0ZXIgYW5pbWF0aW9uXG4gICAgICAgICAgICAvLyBNdXN0IGNoYW5nZSBmb2N1cyFcbiAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gaHJlZjtcbiAgICAgICAgICAgICR0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICAgIGlmICgkdGFyZ2V0LmlzKFwiOmZvY3VzXCIpKSB7IC8vIENoZWNraW5nIGlmIHRoZSB0YXJnZXQgd2FzIGZvY3VzZWRcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICR0YXJnZXQuYXR0cigndGFiaW5kZXgnLCAnLTEnKTsgLy8gQWRkaW5nIHRhYmluZGV4IGZvciBlbGVtZW50cyBub3QgZm9jdXNhYmxlXG4gICAgICAgICAgICAgICAgJHRhcmdldC5mb2N1cygpOyAvLyBTZXQgZm9jdXMgYWdhaW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgfSk7XG4gICAgfSkqL1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuY29udGFjdC1zZW5kJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLnBhcmVudCgnZm9ybScpLnNlcmlhbGl6ZSgpKTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnaG9tZXBhZ2UnKSxcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBkYXRhOiAkKHRoaXMpLnBhcmVudCgnZm9ybScpLnNlcmlhbGl6ZSgpXG4gICAgICAgIH0pLmFsd2F5cyhmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgbmV3IE5vdHkoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lOiAncmVsYXgnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnVm90cmUgbWVzc2FnZSDDoCBiaWVuIMOpdMOpIGVudm95w6knLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAyMDAwXG4gICAgICAgICAgICAgICAgfSkuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3IE5vdHkoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB0aGVtZTogJ3JlbGF4JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMjAwMFxuICAgICAgICAgICAgICAgIH0pLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQoJ2Zvcm0nKS5odG1sKGRhdGEudmlldyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn0pO1xuIiwiIWZ1bmN0aW9uKGUsdCl7dmFyIG49dCgpO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sbi5Sb3V0aW5nKTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1uLlJvdXRpbmc6KGUuUm91dGluZz1uLlJvdXRpbmcsZS5mb3M9e1JvdXRlcjpuLlJvdXRlcn0pfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9dmFyIHQ9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYoZVtvXT1uW29dKX1yZXR1cm4gZX0sbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLmtleSxvKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixvKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxvJiZlKHQsbyksdH19KCksaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGkodCxuKXtlKHRoaXMsaSksdGhpcy5jb250ZXh0Xz10fHx7YmFzZV91cmw6XCJcIixwcmVmaXg6XCJcIixob3N0OlwiXCIscG9ydDpcIlwiLHNjaGVtZTpcIlwiLGxvY2FsZTpcIlwifSx0aGlzLnNldFJvdXRlcyhufHx7fSl9cmV0dXJuIG8oaSxbe2tleTpcInNldFJvdXRpbmdEYXRhXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5zZXRCYXNlVXJsKGUuYmFzZV91cmwpLHRoaXMuc2V0Um91dGVzKGUucm91dGVzKSxcInByZWZpeFwiaW4gZSYmdGhpcy5zZXRQcmVmaXgoZS5wcmVmaXgpLFwicG9ydFwiaW4gZSYmdGhpcy5zZXRQb3J0KGUucG9ydCksXCJsb2NhbGVcImluIGUmJnRoaXMuc2V0TG9jYWxlKGUubG9jYWxlKSx0aGlzLnNldEhvc3QoZS5ob3N0KSx0aGlzLnNldFNjaGVtZShlLnNjaGVtZSl9fSx7a2V5Olwic2V0Um91dGVzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5yb3V0ZXNfPU9iamVjdC5mcmVlemUoZSl9fSx7a2V5OlwiZ2V0Um91dGVzXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yb3V0ZXNffX0se2tleTpcInNldEJhc2VVcmxcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmJhc2VfdXJsPWV9fSx7a2V5OlwiZ2V0QmFzZVVybFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uYmFzZV91cmx9fSx7a2V5Olwic2V0UHJlZml4XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5wcmVmaXg9ZX19LHtrZXk6XCJzZXRTY2hlbWVcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnNjaGVtZT1lfX0se2tleTpcImdldFNjaGVtZVwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dF8uc2NoZW1lfX0se2tleTpcInNldEhvc3RcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLmhvc3Q9ZX19LHtrZXk6XCJnZXRIb3N0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5ob3N0fX0se2tleTpcInNldFBvcnRcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnBvcnQ9ZX19LHtrZXk6XCJnZXRQb3J0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5wb3J0fX0se2tleTpcInNldExvY2FsZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ubG9jYWxlPWV9fSx7a2V5OlwiZ2V0TG9jYWxlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5sb2NhbGV9fSx7a2V5OlwiYnVpbGRRdWVyeVBhcmFtc1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCxvKXt2YXIgaT10aGlzLHI9dm9pZCAwLHM9bmV3IFJlZ0V4cCgvXFxbXFxdJC8pO2lmKHQgaW5zdGFuY2VvZiBBcnJheSl0LmZvckVhY2goZnVuY3Rpb24odCxyKXtzLnRlc3QoZSk/byhlLHQpOmkuYnVpbGRRdWVyeVBhcmFtcyhlK1wiW1wiKyhcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6bih0KSk/cjpcIlwiKStcIl1cIix0LG8pfSk7ZWxzZSBpZihcIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6bih0KSkpZm9yKHIgaW4gdCl0aGlzLmJ1aWxkUXVlcnlQYXJhbXMoZStcIltcIityK1wiXVwiLHRbcl0sbyk7ZWxzZSBvKGUsdCl9fSx7a2V5OlwiZ2V0Um91dGVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLmNvbnRleHRfLnByZWZpeCtlLG49ZStcIi5cIit0aGlzLmNvbnRleHRfLmxvY2FsZSxvPXRoaXMuY29udGV4dF8ucHJlZml4K2UrXCIuXCIrdGhpcy5jb250ZXh0Xy5sb2NhbGUsaT1bdCxuLG8sZV07Zm9yKHZhciByIGluIGkpaWYoaVtyXWluIHRoaXMucm91dGVzXylyZXR1cm4gdGhpcy5yb3V0ZXNfW2lbcl1dO3Rocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJytlKydcIiBkb2VzIG5vdCBleGlzdC4nKX19LHtrZXk6XCJnZW5lcmF0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsbil7dmFyIG89YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXSxpPXRoaXMuZ2V0Um91dGUoZSkscj1ufHx7fSxzPXQoe30sciksdT1cIlwiLGM9ITAsYT1cIlwiLGY9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHRoaXMuZ2V0UG9ydCgpfHxudWxsPT09dGhpcy5nZXRQb3J0KCk/XCJcIjp0aGlzLmdldFBvcnQoKTtpZihpLnRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKFwidGV4dFwiPT09dFswXSlyZXR1cm4gdT10WzFdK3Usdm9pZChjPSExKTt7aWYoXCJ2YXJpYWJsZVwiIT09dFswXSl0aHJvdyBuZXcgRXJyb3IoJ1RoZSB0b2tlbiB0eXBlIFwiJyt0WzBdKydcIiBpcyBub3Qgc3VwcG9ydGVkLicpO3ZhciBuPWkuZGVmYXVsdHMmJnRbM11pbiBpLmRlZmF1bHRzO2lmKCExPT09Y3x8IW58fHRbM11pbiByJiZyW3RbM11dIT1pLmRlZmF1bHRzW3RbM11dKXt2YXIgbz12b2lkIDA7aWYodFszXWluIHIpbz1yW3RbM11dLGRlbGV0ZSBzW3RbM11dO2Vsc2V7aWYoIW4pe2lmKGMpcmV0dXJuO3Rocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJytlKydcIiByZXF1aXJlcyB0aGUgcGFyYW1ldGVyIFwiJyt0WzNdKydcIi4nKX1vPWkuZGVmYXVsdHNbdFszXV19dmFyIGE9ITA9PT1vfHwhMT09PW98fFwiXCI9PT1vO2lmKCFhfHwhYyl7dmFyIGY9ZW5jb2RlVVJJQ29tcG9uZW50KG8pLnJlcGxhY2UoLyUyRi9nLFwiL1wiKTtcIm51bGxcIj09PWYmJm51bGw9PT1vJiYoZj1cIlwiKSx1PXRbMV0rZit1fWM9ITF9ZWxzZSBuJiZ0WzNdaW4gcyYmZGVsZXRlIHNbdFszXV19fSksXCJcIj09PXUmJih1PVwiL1wiKSxpLmhvc3R0b2tlbnMuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD12b2lkIDA7cmV0dXJuXCJ0ZXh0XCI9PT1lWzBdP3ZvaWQoYT1lWzFdK2EpOnZvaWQoXCJ2YXJpYWJsZVwiPT09ZVswXSYmKGVbM11pbiByPyh0PXJbZVszXV0sZGVsZXRlIHNbZVszXV0pOmkuZGVmYXVsdHMmJmVbM11pbiBpLmRlZmF1bHRzJiYodD1pLmRlZmF1bHRzW2VbM11dKSxhPWVbMV0rdCthKSl9KSx1PXRoaXMuY29udGV4dF8uYmFzZV91cmwrdSxpLnJlcXVpcmVtZW50cyYmXCJfc2NoZW1lXCJpbiBpLnJlcXVpcmVtZW50cyYmdGhpcy5nZXRTY2hlbWUoKSE9aS5yZXF1aXJlbWVudHMuX3NjaGVtZT91PWkucmVxdWlyZW1lbnRzLl9zY2hlbWUrXCI6Ly9cIisoYXx8dGhpcy5nZXRIb3N0KCkpKyhcIlwiPT09Zj9cIlwiOlwiOlwiK2YpK3U6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkuc2NoZW1lcyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkuc2NoZW1lc1swXSYmdGhpcy5nZXRTY2hlbWUoKSE9PWkuc2NoZW1lc1swXT91PWkuc2NoZW1lc1swXStcIjovL1wiKyhhfHx0aGlzLmdldEhvc3QoKSkrKFwiXCI9PT1mP1wiXCI6XCI6XCIrZikrdTphJiZ0aGlzLmdldEhvc3QoKSE9PWErKFwiXCI9PT1mP1wiXCI6XCI6XCIrZik/dT10aGlzLmdldFNjaGVtZSgpK1wiOi8vXCIrYSsoXCJcIj09PWY/XCJcIjpcIjpcIitmKSt1Om89PT0hMCYmKHU9dGhpcy5nZXRTY2hlbWUoKStcIjovL1wiK3RoaXMuZ2V0SG9zdCgpKyhcIlwiPT09Zj9cIlwiOlwiOlwiK2YpK3UpLE9iamVjdC5rZXlzKHMpLmxlbmd0aD4wKXt2YXIgbD12b2lkIDAsaD1bXSx5PWZ1bmN0aW9uKGUsdCl7dD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QoKTp0LHQ9bnVsbD09PXQ/XCJcIjp0LGgucHVzaChlbmNvZGVVUklDb21wb25lbnQoZSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KHQpKX07Zm9yKGwgaW4gcyl0aGlzLmJ1aWxkUXVlcnlQYXJhbXMobCxzW2xdLHkpO3U9dStcIj9cIitoLmpvaW4oXCImXCIpLnJlcGxhY2UoLyUyMC9nLFwiK1wiKX1yZXR1cm4gdX19XSxbe2tleTpcImdldEluc3RhbmNlXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gcn19LHtrZXk6XCJzZXREYXRhXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9aS5nZXRJbnN0YW5jZSgpO3Quc2V0Um91dGluZ0RhdGEoZSl9fV0pLGl9KCk7aS5Sb3V0ZSxpLkNvbnRleHQ7dmFyIHI9bmV3IGk7cmV0dXJue1JvdXRlcjppLFJvdXRpbmc6cn19KTsiXSwic291cmNlUm9vdCI6IiJ9