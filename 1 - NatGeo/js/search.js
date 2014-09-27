/**
 * @author EgorKluch (EgorKluch@gmail.com)
 * @date: 26.09.2014
 */

'use strict';

$.fn.searchInput = function () {
  var $labelContainer = $('.search_category_labelContainer', this);
  var toggleClass;

  var $searchCategories = $('#searchCategories', this);
  $labelContainer.click(function () { toggleClass = true; });

  $(document).click(function () {
    if (toggleClass) {
      $labelContainer.toggleClass('active');
      if ($labelContainer.hasClass('active')) {
        $searchCategories.show();
      } else {
        $searchCategories.hide();
      }
      toggleClass = false;
    } else {
      $labelContainer.removeClass('active');
      $searchCategories.hide();
    }
  });

  return this;
};

$(document).ready(function () {
  $('#search').searchInput();
});
