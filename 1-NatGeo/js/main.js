/**
 * @author EgorKluch (EgorKluch@gmail.com)
 * @date: 02.10.2014
 */

'use strict';

$(document).ready(function () {
  $('#mainMenu').menu({
    items: '.mainMenu_item'
  });
  $('#subMenu').menu({
    items: '.subMenu_item'
  });
  $('#sliderMenu').menu({
    items: '.slider_menu_item'
  });
  $('#search').searchInput();

  $('#slider').slider({
    slider: '.slider_slides',
    slides: '.slider_slide',
    markers: '.slider_index',
    control: '.slider_control',
    nextTime: 5000
  });
});
