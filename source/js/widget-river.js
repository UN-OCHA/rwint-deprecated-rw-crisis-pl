  // Open popup.
  $('.widget-river--results--item').click(function(){
    var item_name  = $(this).attr('data-type-name'),
        item_class = $(this).attr('data-type-class')
    $('.widget-river--filters').removeClass (function (index, css) {
      return (css.match (/\bresults--item--\S+/g) || []).join(' ');
    });
    $('.widget-river--filters')
        .addClass('open')
        .addClass(item_class)
        .find('.widget-river--filters--title .tab').text(item_name);
  });

  // Close popup.
  $('.close').click(function(){
    $('.widget-river--filters').removeClass('open');
  });
