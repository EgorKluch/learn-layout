/**
 * @author EgorKluch (EgorKluch@gmail.com)
 * @date: 02.10.2014
 */

'use strict';

$.fn.menu = function (options) {
  var $menuItems = $(options.items, this);

  $menuItems.click(function () {
    var $this = $(this);
    if ($this.hasClass('selected')) return;
    $menuItems.removeClass('selected');
    $(this).addClass('selected');
  });
};
