/**
 * @author EgorKluch (EgorKluch@gmail.com)
 * @date: 02.10.2014
 */

'use strict';

$(document).ready(function () {
  $('#mainMenu').menu({
    items: '.mainMenu_item'
  });
  $('#search').searchInput();
});
