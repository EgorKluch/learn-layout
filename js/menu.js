/**
 * @author EgorKluch (EgorKluch@gmail.com)
 * @date: 02.10.2014
 */

'use strict';

$.fn.menu = function (options) {
  var self = this;
  options = options || {};
  var $menuItems = $(options.items || 'li', this);

  this.selectItem = function (item) {
    var $item;
    if (_.isNumber(item)) {
      $item = $menuItems.eq(item);
    } else {
      $item = $(item);
    }

    if ($item.hasClass('selected')) return;
    $menuItems.removeClass('selected');
    $item.addClass('selected');

    if (options.onSelect) options.onSelect($item);
  };

  $menuItems.click(function () {
    self.selectItem(this);
  });

  this.selectItem(options.selectedIndex || 0);

  return this;
};
