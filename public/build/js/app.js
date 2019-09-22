(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

$(document).ready(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInBvcG92ZXIiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIiR0aGlzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImhyZWYiLCJmaW5kIiwiYXR0ciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCIkdGFyZ2V0IiwiZm9jdXMiLCJpcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQUEsbUJBQU8sQ0FBQyxnRUFBRCxDQUFQOztBQUNBQyxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUJGLEdBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCRyxPQUE3QjtBQUNBSCxHQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQkksRUFBM0IsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBVUMsQ0FBVixFQUFhO0FBQ2hEQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFJQyxLQUFLLEdBQUdQLENBQUMsQ0FBQyxJQUFELENBQWI7QUFDQUEsS0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJRLFdBQTNCLENBQXVDLFFBQXZDO0FBQ0FELFNBQUssQ0FBQ0UsUUFBTixDQUFlLFFBQWY7QUFDQSxRQUFJQyxJQUFJLEdBQUdWLENBQUMsQ0FBQ08sS0FBSyxDQUFDSSxJQUFOLENBQVcsV0FBWCxFQUF3QkMsSUFBeEIsQ0FBNkIsTUFBN0IsQ0FBRCxDQUFaO0FBQ0FaLEtBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JhLE9BQWhCLENBQXdCO0FBQ3BCQyxlQUFTLEVBQUVKLElBQUksQ0FBQ0ssTUFBTCxHQUFjQyxHQUFkLEdBQW9CO0FBRFgsS0FBeEIsRUFFRyxJQUZILEVBRVMsWUFBWTtBQUNqQjtBQUNBO0FBQ0EsVUFBSUMsT0FBTyxHQUFHUCxJQUFkO0FBQ0FPLGFBQU8sQ0FBQ0MsS0FBUjs7QUFDQSxVQUFJRCxPQUFPLENBQUNFLEVBQVIsQ0FBVyxRQUFYLENBQUosRUFBMEI7QUFBRTtBQUN4QixlQUFPLEtBQVA7QUFDSCxPQUZELE1BRU87QUFDSEYsZUFBTyxDQUFDTCxJQUFSLENBQWEsVUFBYixFQUF5QixJQUF6QixFQURHLENBQzZCOztBQUNoQ0ssZUFBTyxDQUFDQyxLQUFSLEdBRkcsQ0FFYztBQUNwQjs7QUFDRDtBQUNILEtBZEQ7QUFlSCxHQXJCRDtBQXNCSCxDQXhCRCxFIiwiZmlsZSI6ImpzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKCk7XG4gICAgJCgnLm5hdmJhci1uYXYgLm5hdi1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAkKCcubmF2YmFyLW5hdiAubmF2LWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgdmFyIGhyZWYgPSAkKCR0aGlzLmZpbmQoJy5uYXYtbGluaycpLmF0dHIoJ2hyZWYnKSk7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogaHJlZi5vZmZzZXQoKS50b3AgLSA3MFxuICAgICAgICB9LCAxMDAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDYWxsYmFjayBhZnRlciBhbmltYXRpb25cbiAgICAgICAgICAgIC8vIE11c3QgY2hhbmdlIGZvY3VzIVxuICAgICAgICAgICAgdmFyICR0YXJnZXQgPSBocmVmO1xuICAgICAgICAgICAgJHRhcmdldC5mb2N1cygpO1xuICAgICAgICAgICAgaWYgKCR0YXJnZXQuaXMoXCI6Zm9jdXNcIikpIHsgLy8gQ2hlY2tpbmcgaWYgdGhlIHRhcmdldCB3YXMgZm9jdXNlZFxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5hdHRyKCd0YWJpbmRleCcsICctMScpOyAvLyBBZGRpbmcgdGFiaW5kZXggZm9yIGVsZW1lbnRzIG5vdCBmb2N1c2FibGVcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmZvY3VzKCk7IC8vIFNldCBmb2N1cyBhZ2FpblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICB9KTtcbiAgICB9KVxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==