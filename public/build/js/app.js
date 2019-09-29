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
    tags: true,
    createTag: function createTag(item) {
      return {
        id: item.term,
        text: item.term
      };
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJyb3V0ZXMiLCJSb3V0aW5nIiwic2V0Um91dGluZ0RhdGEiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIldPVyIsImluaXQiLCJzZWxlY3QyIiwibXVsdGlwbGUiLCJ0YWdzIiwiY3JlYXRlVGFnIiwiaXRlbSIsImlkIiwidGVybSIsInRleHQiLCJwb3BvdmVyIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCIkdGhpcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJocmVmIiwiZmluZCIsImF0dHIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwiJHRhcmdldCIsImZvY3VzIiwiaXMiLCJjb25zb2xlIiwibG9nIiwicGFyZW50Iiwic2VyaWFsaXplIiwiYWpheCIsInVybCIsImdlbmVyYXRlIiwibWV0aG9kIiwiZGF0YSIsImFsd2F5cyIsInN1Y2Nlc3MiLCJOb3R5IiwidHlwZSIsInRoZW1lIiwidGltZW91dCIsInNob3ciLCJodG1sIiwidmlldyIsInBvc3QiLCJmaWVsZG5hbWUiLCJ2YWx1ZSIsInByb3AiLCJ0IiwibiIsImRlZmluZSIsIlR5cGVFcnJvciIsIk9iamVjdCIsImFzc2lnbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm8iLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJpIiwiY29udGV4dF8iLCJiYXNlX3VybCIsInByZWZpeCIsImhvc3QiLCJwb3J0Iiwic2NoZW1lIiwibG9jYWxlIiwic2V0Um91dGVzIiwic2V0QmFzZVVybCIsInNldFByZWZpeCIsInNldFBvcnQiLCJzZXRMb2NhbGUiLCJzZXRIb3N0Iiwic2V0U2NoZW1lIiwicm91dGVzXyIsImZyZWV6ZSIsInIiLCJzIiwiUmVnRXhwIiwiQXJyYXkiLCJmb3JFYWNoIiwidGVzdCIsImJ1aWxkUXVlcnlQYXJhbXMiLCJFcnJvciIsImdldFJvdXRlIiwidSIsImMiLCJhIiwiZiIsImdldFBvcnQiLCJ0b2tlbnMiLCJkZWZhdWx0cyIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJob3N0dG9rZW5zIiwicmVxdWlyZW1lbnRzIiwiZ2V0U2NoZW1lIiwiX3NjaGVtZSIsImdldEhvc3QiLCJzY2hlbWVzIiwia2V5cyIsImwiLCJoIiwieSIsInB1c2giLCJqb2luIiwiZ2V0SW5zdGFuY2UiLCJSb3V0ZSIsIkNvbnRleHQiLCJSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxtQkFBTyxDQUFDLGdFQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsbUhBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx1R0FBRCxDQUFQOztBQUNBLElBQU1DLE1BQU0sR0FBR0QsbUJBQU8sQ0FBQywwRUFBRCxDQUF0Qjs7QUFDQTtBQUVBRSxrSEFBTyxDQUFDQyxjQUFSLENBQXVCRixNQUF2QjtBQUNBO0FBQ0E7O0FBRUFELG1CQUFPLENBQUMsNEZBQUQsQ0FBUDs7QUFFQUksQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCLE1BQUlDLDZDQUFKLEdBQVVDLElBQVY7QUFDQUosR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkssT0FBbkIsQ0FBMkI7QUFDdkJDLFlBQVEsRUFBRSxJQURhO0FBRXZCQyxRQUFJLEVBQUUsSUFGaUI7QUFHdkJDLGFBQVMsRUFBRSxtQkFBU0MsSUFBVCxFQUFlO0FBQ3RCLGFBQU87QUFDSEMsVUFBRSxFQUFFRCxJQUFJLENBQUNFLElB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O0FBQTJDbEIsV0FBQyxHQUFDQSxDQUFDLEdBQUMsR0FBRixHQUFNaUIsQ0FBQyxDQUFDRyxJQUFGLENBQU8sR0FBUCxFQUFZWixPQUFaLENBQW9CLE1BQXBCLEVBQTJCLEdBQTNCLENBQVI7QUFBd0M7O0FBQUEsZUFBT1IsQ0FBUDtBQUFTO0FBQXJzRCxLQUE1cEQsQ0FBSCxFQUF1MkcsQ0FBQztBQUFDM0IsU0FBRyxFQUFDLGFBQUw7QUFBbUJyQixXQUFLLEVBQUMsaUJBQVU7QUFBQyxlQUFPdUMsQ0FBUDtBQUFTO0FBQTdDLEtBQUQsRUFBZ0Q7QUFBQ2xCLFNBQUcsRUFBQyxTQUFMO0FBQWVyQixXQUFLLEVBQUMsZUFBU25DLENBQVQsRUFBVztBQUFDLFlBQUlxQyxDQUFDLEdBQUNvQixDQUFDLENBQUMrQyxXQUFGLEVBQU47QUFBc0JuRSxTQUFDLENBQUNyRCxjQUFGLENBQWlCZ0IsQ0FBakI7QUFBb0I7QUFBM0UsS0FBaEQsQ0FBdjJHLENBQUQsRUFBdStHeUQsQ0FBOStHO0FBQWcvRyxHQUF4bkgsRUFBM21COztBQUFzdUlBLEdBQUMsQ0FBQ2dELEtBQUYsRUFBUWhELENBQUMsQ0FBQ2lELE9BQVY7QUFBa0IsTUFBSWhDLENBQUMsR0FBQyxJQUFJakIsQ0FBSixFQUFOO0FBQVksU0FBTTtBQUFDa0QsVUFBTSxFQUFDbEQsQ0FBUjtBQUFVMUUsV0FBTyxFQUFDMkY7QUFBbEIsR0FBTjtBQUEyQixDQUE3bEosQ0FBRCxDIiwiZmlsZSI6ImpzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xucmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJyk7XG5yZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnKTtcbmNvbnN0IHJvdXRlcyA9IHJlcXVpcmUoJy4uLy4uL3B1YmxpYy9qcy9mb3NfanNfcm91dGVzLmpzb24nKTtcbmltcG9ydCBSb3V0aW5nIGZyb20gJy4uLy4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIubWluLmpzJztcblxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShyb3V0ZXMpO1xuaW1wb3J0IFdPVyBmcm9tICd3b3cuanMnO1xuaW1wb3J0IE5vdHkgZnJvbSAnbm90eSc7XG5cbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9zZWxlY3QyLmZ1bGwubWluJyk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgV09XKCkuaW5pdCgpO1xuICAgICQoJy50YWdzLXNlbGVjdDInKS5zZWxlY3QyKHtcbiAgICAgICAgbXVsdGlwbGU6IHRydWUsXG4gICAgICAgIHRhZ3M6IHRydWUsXG4gICAgICAgIGNyZWF0ZVRhZzogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogaXRlbS50ZXJtLFxuICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0udGVybSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoKTtcbiAgICAkKCcubWFpbi1uYXZiYXIgLm5hdi1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAkKCcubmF2YmFyLW5hdiAubmF2LWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgdmFyIGhyZWYgPSAkKCR0aGlzLmZpbmQoJy5uYXYtbGluaycpLmF0dHIoJ2hyZWYnKSk7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogaHJlZi5vZmZzZXQoKS50b3AgLSA3MFxuICAgICAgICB9LCAxMDAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDYWxsYmFjayBhZnRlciBhbmltYXRpb25cbiAgICAgICAgICAgIC8vIE11c3QgY2hhbmdlIGZvY3VzIVxuICAgICAgICAgICAgdmFyICR0YXJnZXQgPSBocmVmO1xuICAgICAgICAgICAgJHRhcmdldC5mb2N1cygpO1xuICAgICAgICAgICAgaWYgKCR0YXJnZXQuaXMoXCI6Zm9jdXNcIikpIHsgLy8gQ2hlY2tpbmcgaWYgdGhlIHRhcmdldCB3YXMgZm9jdXNlZFxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5hdHRyKCd0YWJpbmRleCcsICctMScpOyAvLyBBZGRpbmcgdGFiaW5kZXggZm9yIGVsZW1lbnRzIG5vdCBmb2N1c2FibGVcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmZvY3VzKCk7IC8vIFNldCBmb2N1cyBhZ2FpblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuY29udGFjdC1zZW5kJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLnBhcmVudCgnZm9ybScpLnNlcmlhbGl6ZSgpKTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnaG9tZXBhZ2UnKSxcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBkYXRhOiAkKHRoaXMpLnBhcmVudCgnZm9ybScpLnNlcmlhbGl6ZSgpXG4gICAgICAgIH0pLmFsd2F5cyhmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgbmV3IE5vdHkoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lOiAncmVsYXgnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnVm90cmUgbWVzc2FnZSDDoCBiaWVuIMOpdMOpIGVudm95w6knLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAyMDAwXG4gICAgICAgICAgICAgICAgfSkuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3IE5vdHkoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB0aGVtZTogJ3JlbGF4JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMjAwMFxuICAgICAgICAgICAgICAgIH0pLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQoJ2Zvcm0nKS5odG1sKGRhdGEudmlldyk7XG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgICQoJy5jdXN0b20tc3dpdGNoIGlucHV0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgJC5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2NvbnRhY3Rfc3dpdGNoX3VwZGF0ZScsIHtpZDogJCh0aGlzKS5kYXRhKCdlbnRpdHknKX0pLCB7XG4gICAgICAgICAgICBmaWVsZG5hbWU6ICQodGhpcykuZGF0YSgnZmllbGRuYW1lJyksXG4gICAgICAgICAgICB2YWx1ZTogJCh0aGlzKS5wcm9wKCdjaGVja2VkJylcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTsiLCIhZnVuY3Rpb24oZSx0KXt2YXIgbj10KCk7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxuLlJvdXRpbmcpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPW4uUm91dGluZzooZS5Sb3V0aW5nPW4uUm91dGluZyxlLmZvcz17Um91dGVyOm4uUm91dGVyfSl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX12YXIgdD1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciBvIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sbykmJihlW29dPW5bb10pfXJldHVybiBlfSxuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LG89ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBvPXRbbl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8ua2V5LG8pfX1yZXR1cm4gZnVuY3Rpb24odCxuLG8pe3JldHVybiBuJiZlKHQucHJvdG90eXBlLG4pLG8mJmUodCxvKSx0fX0oKSxpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gaSh0LG4pe2UodGhpcyxpKSx0aGlzLmNvbnRleHRfPXR8fHtiYXNlX3VybDpcIlwiLHByZWZpeDpcIlwiLGhvc3Q6XCJcIixwb3J0OlwiXCIsc2NoZW1lOlwiXCIsbG9jYWxlOlwiXCJ9LHRoaXMuc2V0Um91dGVzKG58fHt9KX1yZXR1cm4gbyhpLFt7a2V5Olwic2V0Um91dGluZ0RhdGFcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnNldEJhc2VVcmwoZS5iYXNlX3VybCksdGhpcy5zZXRSb3V0ZXMoZS5yb3V0ZXMpLFwicHJlZml4XCJpbiBlJiZ0aGlzLnNldFByZWZpeChlLnByZWZpeCksXCJwb3J0XCJpbiBlJiZ0aGlzLnNldFBvcnQoZS5wb3J0KSxcImxvY2FsZVwiaW4gZSYmdGhpcy5zZXRMb2NhbGUoZS5sb2NhbGUpLHRoaXMuc2V0SG9zdChlLmhvc3QpLHRoaXMuc2V0U2NoZW1lKGUuc2NoZW1lKX19LHtrZXk6XCJzZXRSb3V0ZXNcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnJvdXRlc189T2JqZWN0LmZyZWV6ZShlKX19LHtrZXk6XCJnZXRSb3V0ZXNcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJvdXRlc199fSx7a2V5Olwic2V0QmFzZVVybFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uYmFzZV91cmw9ZX19LHtrZXk6XCJnZXRCYXNlVXJsXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5iYXNlX3VybH19LHtrZXk6XCJzZXRQcmVmaXhcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmNvbnRleHRfLnByZWZpeD1lfX0se2tleTpcInNldFNjaGVtZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uc2NoZW1lPWV9fSx7a2V5OlwiZ2V0U2NoZW1lXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0Xy5zY2hlbWV9fSx7a2V5Olwic2V0SG9zdFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8uaG9zdD1lfX0se2tleTpcImdldEhvc3RcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmhvc3R9fSx7a2V5Olwic2V0UG9ydFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY29udGV4dF8ucG9ydD1lfX0se2tleTpcImdldFBvcnRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLnBvcnR9fSx7a2V5Olwic2V0TG9jYWxlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0Xy5sb2NhbGU9ZX19LHtrZXk6XCJnZXRMb2NhbGVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRfLmxvY2FsZX19LHtrZXk6XCJidWlsZFF1ZXJ5UGFyYW1zXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG8pe3ZhciBpPXRoaXMscj12b2lkIDAscz1uZXcgUmVnRXhwKC9cXFtcXF0kLyk7aWYodCBpbnN0YW5jZW9mIEFycmF5KXQuZm9yRWFjaChmdW5jdGlvbih0LHIpe3MudGVzdChlKT9vKGUsdCk6aS5idWlsZFF1ZXJ5UGFyYW1zKGUrXCJbXCIrKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpuKHQpKT9yOlwiXCIpK1wiXVwiLHQsbyl9KTtlbHNlIGlmKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpuKHQpKSlmb3IociBpbiB0KXRoaXMuYnVpbGRRdWVyeVBhcmFtcyhlK1wiW1wiK3IrXCJdXCIsdFtyXSxvKTtlbHNlIG8oZSx0KX19LHtrZXk6XCJnZXRSb3V0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuY29udGV4dF8ucHJlZml4K2Usbj1lK1wiLlwiK3RoaXMuY29udGV4dF8ubG9jYWxlLG89dGhpcy5jb250ZXh0Xy5wcmVmaXgrZStcIi5cIit0aGlzLmNvbnRleHRfLmxvY2FsZSxpPVt0LG4sbyxlXTtmb3IodmFyIHIgaW4gaSlpZihpW3JdaW4gdGhpcy5yb3V0ZXNfKXJldHVybiB0aGlzLnJvdXRlc19baVtyXV07dGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInK2UrJ1wiIGRvZXMgbm90IGV4aXN0LicpfX0se2tleTpcImdlbmVyYXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSxuKXt2YXIgbz1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXSYmYXJndW1lbnRzWzJdLGk9dGhpcy5nZXRSb3V0ZShlKSxyPW58fHt9LHM9dCh7fSxyKSx1PVwiXCIsYz0hMCxhPVwiXCIsZj1cInVuZGVmaW5lZFwiPT10eXBlb2YgdGhpcy5nZXRQb3J0KCl8fG51bGw9PT10aGlzLmdldFBvcnQoKT9cIlwiOnRoaXMuZ2V0UG9ydCgpO2lmKGkudG9rZW5zLmZvckVhY2goZnVuY3Rpb24odCl7aWYoXCJ0ZXh0XCI9PT10WzBdKXJldHVybiB1PXRbMV0rdSx2b2lkKGM9ITEpO3tpZihcInZhcmlhYmxlXCIhPT10WzBdKXRocm93IG5ldyBFcnJvcignVGhlIHRva2VuIHR5cGUgXCInK3RbMF0rJ1wiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7dmFyIG49aS5kZWZhdWx0cyYmdFszXWluIGkuZGVmYXVsdHM7aWYoITE9PT1jfHwhbnx8dFszXWluIHImJnJbdFszXV0hPWkuZGVmYXVsdHNbdFszXV0pe3ZhciBvPXZvaWQgMDtpZih0WzNdaW4gcilvPXJbdFszXV0sZGVsZXRlIHNbdFszXV07ZWxzZXtpZighbil7aWYoYylyZXR1cm47dGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInK2UrJ1wiIHJlcXVpcmVzIHRoZSBwYXJhbWV0ZXIgXCInK3RbM10rJ1wiLicpfW89aS5kZWZhdWx0c1t0WzNdXX12YXIgYT0hMD09PW98fCExPT09b3x8XCJcIj09PW87aWYoIWF8fCFjKXt2YXIgZj1lbmNvZGVVUklDb21wb25lbnQobykucmVwbGFjZSgvJTJGL2csXCIvXCIpO1wibnVsbFwiPT09ZiYmbnVsbD09PW8mJihmPVwiXCIpLHU9dFsxXStmK3V9Yz0hMX1lbHNlIG4mJnRbM11pbiBzJiZkZWxldGUgc1t0WzNdXX19KSxcIlwiPT09dSYmKHU9XCIvXCIpLGkuaG9zdHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PXZvaWQgMDtyZXR1cm5cInRleHRcIj09PWVbMF0/dm9pZChhPWVbMV0rYSk6dm9pZChcInZhcmlhYmxlXCI9PT1lWzBdJiYoZVszXWluIHI/KHQ9cltlWzNdXSxkZWxldGUgc1tlWzNdXSk6aS5kZWZhdWx0cyYmZVszXWluIGkuZGVmYXVsdHMmJih0PWkuZGVmYXVsdHNbZVszXV0pLGE9ZVsxXSt0K2EpKX0pLHU9dGhpcy5jb250ZXh0Xy5iYXNlX3VybCt1LGkucmVxdWlyZW1lbnRzJiZcIl9zY2hlbWVcImluIGkucmVxdWlyZW1lbnRzJiZ0aGlzLmdldFNjaGVtZSgpIT1pLnJlcXVpcmVtZW50cy5fc2NoZW1lP3U9aS5yZXF1aXJlbWVudHMuX3NjaGVtZStcIjovL1wiKyhhfHx0aGlzLmdldEhvc3QoKSkrdTpcInVuZGVmaW5lZFwiIT10eXBlb2YgaS5zY2hlbWVzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgaS5zY2hlbWVzWzBdJiZ0aGlzLmdldFNjaGVtZSgpIT09aS5zY2hlbWVzWzBdP3U9aS5zY2hlbWVzWzBdK1wiOi8vXCIrKGF8fHRoaXMuZ2V0SG9zdCgpKSt1OmEmJnRoaXMuZ2V0SG9zdCgpIT09YSsoXCJcIj09PWY/XCJcIjpcIjpcIitmKT91PXRoaXMuZ2V0U2NoZW1lKCkrXCI6Ly9cIithKyhcIlwiPT09Zj9cIlwiOlwiOlwiK2YpK3U6bz09PSEwJiYodT10aGlzLmdldFNjaGVtZSgpK1wiOi8vXCIrdGhpcy5nZXRIb3N0KCkrdSksT2JqZWN0LmtleXMocykubGVuZ3RoPjApe3ZhciBsPXZvaWQgMCxoPVtdLHk9ZnVuY3Rpb24oZSx0KXt0PVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dCgpOnQsdD1udWxsPT09dD9cIlwiOnQsaC5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChlKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQodCkpfTtmb3IobCBpbiBzKXRoaXMuYnVpbGRRdWVyeVBhcmFtcyhsLHNbbF0seSk7dT11K1wiP1wiK2guam9pbihcIiZcIikucmVwbGFjZSgvJTIwL2csXCIrXCIpfXJldHVybiB1fX1dLFt7a2V5OlwiZ2V0SW5zdGFuY2VcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiByfX0se2tleTpcInNldERhdGFcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1pLmdldEluc3RhbmNlKCk7dC5zZXRSb3V0aW5nRGF0YShlKX19XSksaX0oKTtpLlJvdXRlLGkuQ29udGV4dDt2YXIgcj1uZXcgaTtyZXR1cm57Um91dGVyOmksUm91dGluZzpyfX0pOyJdLCJzb3VyY2VSb290IjoiIn0=