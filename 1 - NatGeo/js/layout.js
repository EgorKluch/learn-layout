/**
 * @author EgorKluch (EgorKluch@gmail.com)
 * @date: 27.09.2014
 */

'use strict';

$(document).ready(function () {
  var $pageContainer = $('.page_container');
  var pageWidth = 1020;

  var onResize = function () {
    if (screen.width < pageWidth) {
      $pageContainer.css({
        left: 0,
        margin: 0
      });
      return;
    }
    $pageContainer.css({
      left: '50%',
      'margin-left': -pageWidth / 2
    });
  };

  $(window).resize(onResize);
  onResize()
});
