/**
 * @author EgorKluch (EgorKluch@gmail.com)
 * @date: 05.10.2014
 */

'use strict';

$.fn.slider = function (options) {
  var self = this;
  var $slider = $(options.slider, this);
  var $slides = $(options.slides, $slider);
  var $control = options.control ? $(options.control, this) : null;
  var state = 'play';
  var isHover = false;

  _.extend(this, {
    selectSlide: function (index) {
      var $slide = $slides.eq(index);
      if ($slide.hasClass('selected')) return;

      var animationSpeed = 450;
      $slides
        .fadeOut(animationSpeed)
        .removeClass('selected');
      $slide
        .fadeIn(animationSpeed)
        .addClass('selected');

      self.selectItem(index);
    },

    next: function () {
      var selectedIndex = $slides
        .filter('.selected')
        .index();
      if (++selectedIndex === $slides.length) selectedIndex = 0;
      self.selectSlide(selectedIndex);
    },

    pause: function () {
      if ('pause' === state) return;
      state = 'pause';
      $control.addClass('pause');
    },

    play: function () {
      if ('play' === state) return;
      state = 'play';
      $control.removeClass('pause');
    }
  });

  this.menu({
    items: options.markers,
    onSelect: function ($item) {
      var index = $item.index();
      self.selectSlide(index);
    }
  });

  $slider.hover(
    function () { isHover = true; },
    function () { isHover = false; }
  );

  $control.click(function () {
    if ('play' === state) {
      self.pause();
      return;
    }
    self.play();
  });

  setInterval(function () {
    if (isHover) return;
    if ('play' === state) self.next();
  }, options.nextTime);

  this.selectSlide(options.selectedIndex || 0);
  this.play();
};
