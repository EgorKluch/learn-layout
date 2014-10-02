/**
 * @author EgorKluch (EgorKluch@gmail.com)
 * @date: 26.09.2014
 */

'use strict';

$.fn.searchInput = function () {
  var $labelContainer = $('.search_category_labelContainer', this);
  var $categoryContainer = $('#searchCategories', this);
  var $categoryLabel = $('.search_category_label');
  var $categoryItems = $('.search_category_listItem', this);
  var $selectAllCategory = $('.search_category_selectAll', this);
  var clickedHover = false;

  var isSelectAll = function () {
    return !$categoryItems.not('.selected').length;
  };

  var setCategoryLabel = function () {
    if (isSelectAll() || $selectAllCategory.hasClass('checked')) {
      $categoryLabel.html('All categories');
      $categoryLabel.attr('title', 'All categories');
      return;
    }

    var $selectedCategories = $categoryItems.filter('.selected');
    if (!$selectedCategories.length) {
      $categoryLabel.html('All categories');
      $categoryLabel.attr('title', 'All categories');
      return;
    }

    var label = '';
    $selectedCategories.each(function (index, el) {
      if (label.length) {
        label += ', ';
      }
      label += $(el).html();
    });
    $categoryLabel.attr('title', label);
    var postfix = label.length > 13 ? ' ..' : '';
    label = label.substr(0, 13) + postfix;
    $categoryLabel.html(label);
  };

  $labelContainer.click(function () {
    $labelContainer.toggleClass('active');
    $categoryContainer.toggle();
    clickedHover = true;
  });
  $categoryContainer.click(function () {
    clickedHover = true;
  });
  $categoryItems.click(function () {
    $(this).toggleClass('selected');
    setCategoryLabel();
  });
  $selectAllCategory.click(function () {
    $(this).toggleClass('checked');
    setCategoryLabel();
  });

  $(document).click(function () {
    if (clickedHover) {
      clickedHover = false;
      return;
    }
    $labelContainer.removeClass('active');
    $categoryContainer.hide();
  });

  return this;
};
