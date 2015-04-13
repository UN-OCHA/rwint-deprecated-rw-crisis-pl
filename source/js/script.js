$(document).ready(function() {

  // Apply styles to dropdowns.
  $('select').selectric();

  function accordion_set_clear_all_active() {
    $('.accordion-set')
      .find('.accordion-set--check').removeClass('is-active').end()
      .find('.accordion-set--label').removeClass('is-active').end()
      .find('.accordion-set--content').removeClass('is-active');
  }
  function accordion_set_clear_active(el) {
    $(el)
      .removeClass('is-active')
      .next('.accordion-set--label').removeClass('is-active')
      .next('.accordion-set--content').removeClass('is-active');
  }
  function accordion_set_add_active(el) {
    $(el)
      .addClass('is-active')
      .next('.accordion-set--label').addClass('is-active')
      .next('.accordion-set--content').addClass('is-active');
  }
  $('.accordion-set--check').change(function(ev){
    if($(this).is('[type=radio]')) {
      accordion_set_clear_all_active();
    }
    if ($(this).is(':checked')) {
      accordion_set_add_active($(this));
    } else {
      accordion_set_clear_active($(this));
    }
  });
  // init
  accordion_set_add_active($('.accordion-set--check:checked'));
});

