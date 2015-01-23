  // Open popup.
  $('.widget-river--results--item, .close').click(function(){
    $('.widget-river--filters').toggleClass('open');
  });

  // Close popup.
  $('.close').click(function(){
    $('.widget-river--filters').removeClass('open');
  });
