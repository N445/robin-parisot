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
/* harmony import */ var wow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wow.js */ "./node_modules/wow.js/dist/wow.js");
/* harmony import */ var wow_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wow_js__WEBPACK_IMPORTED_MODULE_1__);


__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");


$(document).ready(function () {
  new wow_js__WEBPACK_IMPORTED_MODULE_1___default.a().init();
  $('[data-toggle="popover"]').popover();
  $('.navbar-nav .nav-item').on('click', function (e) {
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
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/app.js","runtime","vendors~js/app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIldPVyIsImluaXQiLCJwb3BvdmVyIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCIkdGhpcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJocmVmIiwiZmluZCIsImF0dHIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwiJHRhcmdldCIsImZvY3VzIiwiaXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLG1CQUFPLENBQUMsZ0VBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxtSEFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLHVHQUFELENBQVA7O0FBQ0E7QUFDQUMsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCLE1BQUlDLDZDQUFKLEdBQVVDLElBQVY7QUFDQUosR0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJLLE9BQTdCO0FBQ0FMLEdBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCTSxFQUEzQixDQUE4QixPQUE5QixFQUF1QyxVQUFVQyxDQUFWLEVBQWE7QUFDaERBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQUlDLEtBQUssR0FBR1QsQ0FBQyxDQUFDLElBQUQsQ0FBYjtBQUNBQSxLQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQlUsV0FBM0IsQ0FBdUMsUUFBdkM7QUFDQUQsU0FBSyxDQUFDRSxRQUFOLENBQWUsUUFBZjtBQUNBLFFBQUlDLElBQUksR0FBR1osQ0FBQyxDQUFDUyxLQUFLLENBQUNJLElBQU4sQ0FBVyxXQUFYLEVBQXdCQyxJQUF4QixDQUE2QixNQUE3QixDQUFELENBQVo7QUFDQWQsS0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQmUsT0FBaEIsQ0FBd0I7QUFDcEJDLGVBQVMsRUFBRUosSUFBSSxDQUFDSyxNQUFMLEdBQWNDLEdBQWQsR0FBb0I7QUFEWCxLQUF4QixFQUVHLElBRkgsRUFFUyxZQUFZO0FBQ2pCO0FBQ0E7QUFDQSxVQUFJQyxPQUFPLEdBQUdQLElBQWQ7QUFDQU8sYUFBTyxDQUFDQyxLQUFSOztBQUNBLFVBQUlELE9BQU8sQ0FBQ0UsRUFBUixDQUFXLFFBQVgsQ0FBSixFQUEwQjtBQUFFO0FBQ3hCLGVBQU8sS0FBUDtBQUNILE9BRkQsTUFFTztBQUNIRixlQUFPLENBQUNMLElBQVIsQ0FBYSxVQUFiLEVBQXlCLElBQXpCLEVBREcsQ0FDNkI7O0FBQ2hDSyxlQUFPLENBQUNDLEtBQVIsR0FGRyxDQUVjO0FBQ3BCOztBQUNEO0FBQ0gsS0FkRDtBQWVILEdBckJEO0FBc0JILENBekJELEUiLCJmaWxlIjoianMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnYm9vdHN0cmFwJyk7XG5yZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnKTtcbnJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcycpO1xuaW1wb3J0IFdPVyBmcm9tICd3b3cuanMnO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIG5ldyBXT1coKS5pbml0KCk7XG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoKTtcbiAgICAkKCcubmF2YmFyLW5hdiAubmF2LWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICQoJy5uYXZiYXItbmF2IC5uYXYtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB2YXIgaHJlZiA9ICQoJHRoaXMuZmluZCgnLm5hdi1saW5rJykuYXR0cignaHJlZicpKTtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiBocmVmLm9mZnNldCgpLnRvcCAtIDcwXG4gICAgICAgIH0sIDEwMDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENhbGxiYWNrIGFmdGVyIGFuaW1hdGlvblxuICAgICAgICAgICAgLy8gTXVzdCBjaGFuZ2UgZm9jdXMhXG4gICAgICAgICAgICB2YXIgJHRhcmdldCA9IGhyZWY7XG4gICAgICAgICAgICAkdGFyZ2V0LmZvY3VzKCk7XG4gICAgICAgICAgICBpZiAoJHRhcmdldC5pcyhcIjpmb2N1c1wiKSkgeyAvLyBDaGVja2luZyBpZiB0aGUgdGFyZ2V0IHdhcyBmb2N1c2VkXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7IC8vIEFkZGluZyB0YWJpbmRleCBmb3IgZWxlbWVudHMgbm90IGZvY3VzYWJsZVxuICAgICAgICAgICAgICAgICR0YXJnZXQuZm9jdXMoKTsgLy8gU2V0IGZvY3VzIGFnYWluXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgIH0pO1xuICAgIH0pXG59KTsiXSwic291cmNlUm9vdCI6IiJ9