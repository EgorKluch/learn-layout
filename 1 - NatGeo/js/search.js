/**
 * @author EgorKluch (EgorKluch@gmail.com)
 * @date: 26.09.2014
 */

'use strict';

$.fn.searchInput = function () {
  var $labelContainer = $('.search_category_labelContainer', this);
  var toggleClass;

  $labelContainer.click(function () { toggleClass = true; });

  $(document).click(function () {
    if (toggleClass) {
      $labelContainer.toggleClass('active');
      toggleClass = false;
      return;
    }
    $labelContainer.removeClass('active');
  });

  return this;
};

$(document).ready(function () {
  $('#headerSearch').searchInput();
});
