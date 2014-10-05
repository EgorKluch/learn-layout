/**
 * @author EgorKluch (EgorKluch@gmail.com)
 * @date: 05.10.2014
 */

'use strict';

$.fn.slider = function (options) {
  var self = this;
  var $slider = $(options.slider, this);
  var $slides = $(options.slides, $slider);
  var animationSpeed = options.animationSpeed || 450;

  this.selectSlide = function (index) {
    var $slide = $slides.eq(index);
    if ($slide.hasClass('selected')) return;
    self.selectItem(index);
    $slides
      .fadeOut(animationSpeed)
      .removeClass('selected');
    $slide
      .fadeIn(animationSpeed)
      .addClass('selected');
  };

  this.nextSlide = function () {
    var selectedIndex = $slides
      .filter('.selected')
      .index();
    if (++selectedIndex === $slides.length) selectedIndex = 0;
    self.selectSlide(selectedIndex);
  };

  self.menu({
    items: options.markers,
    onSelect: function ($item) {
      var index = $item.index();
      self.selectSlide(index);
    }
  });

  this.selectSlide(options.selectedIndex || 0);

  if (options.nextTime) {
    setInterval(function () {
      self.nextSlide()
    }, options.nextTime)
  }
};
