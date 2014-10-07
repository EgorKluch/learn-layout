/**
 * @author EgorKluch (EgorKluch@gmail.com)
 * @date: 05.10.2014
 */

'use strict';

$.fn.newsOrder = function () {
  var $label = $('.label', this);
  var $list = $('.list', this);
  var $items = $('.item', this);
  var hideList = true;

  $label.click(function () {
    $label.toggleClass('active');
    var showSelectList = $label.hasClass('active');
    $list.toggle(showSelectList);
    hideList = false;
  });

  $items.click(function () {
    var value = $(this).html();
    $label.html(value);
  });

  $(document).click(function () {
    if (hideList) {
      $list.hide();
      $label.removeClass('active');
    }
    hideList = true;
  });

  $label.html($items.eq(0).html());
};
