/**
 * @author EgorKluch (EgorKluch@gmail.com)
 * @date: 30.09.2014
 */

'use strict';

$.fn.leftMenu = function () {
  var $menuItems = $('.leftMenu_item', this);

  $menuItems.click(function () {
    var $this = $(this);
    if ($this.hasClass('selected')) return;
    $menuItems.removeClass('selected');
    $(this).addClass('selected');
  });
};

$(document).ready(function () {
  $('#leftMenu').leftMenu();
});
