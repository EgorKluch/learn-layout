/**
 * @author EgorKluch (EgorKluch@gmail.com)
 * @date: 02.10.2014
 */

'use strict';

$(document).ready(function () {
  $('#mainMenu').menu();
  $('#subMenu').menu();
  $('#sliderMenu').menu();
  $('#displayModes').menu({
    items: '.news_displayMode'
  });

  $('#search').searchInput();

  $('#slider').slider({
    slides: '.slide',
    markers: '.marker',
    control: '.slider_control',
    nextTime: 5000
  });

  $('#newsOrder').newsOrder();
});
