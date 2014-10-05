/**
 * @author EgorKluch (EgorKluch@gmail.com)
 * @date: 05.10.2014
 */

'use strict';

$.fn.newsOrder = function () {
  var $label = $('.news_order_label', this);
  var $list = $('.news_order_list', this);
  var $items = $('.news_order_list_item', this);
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
