  // Open popup.
  $('.river-widget--dropdown-heading, .close').click(function(){
    $('.river-widget--dropdown--wrapper').toggleClass('open');
    $slyDropdown.reload();
  });

  // Close popup.
  $('.river-widget-dropdown--item').click(function(){
    $('.river-widget--dropdown--wrapper').removeClass('open');
  });