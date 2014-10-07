/**
 * @author EgorKluch (EgorKluch@gmail.com)
 * @date: 26.09.2014
 */

'use strict';

$.fn.searchInput = function () {
  var $searchCategory = $('.search_category', this);
  var $labelContainer = $('.label_wrapper', $searchCategory);
  var $categoryLabel = $('.label', $labelContainer);
  var $listContainer = $('.list_wrapper', $searchCategory);
  var $categoryItems = $('.list_item', $listContainer);
  var $selectAllCategory = $('.selectAll', $listContainer);
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
    $listContainer.toggle();
    clickedHover = true;
  });
  $listContainer.click(function () {
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
    $listContainer.hide();
  });

  return this;
};
