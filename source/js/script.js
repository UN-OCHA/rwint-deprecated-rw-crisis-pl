$(document).ready(function() {

  $('select').selectric();

  var $frame = $('.timeline-widget-frames');
  var $item = $('.timeline-widget-item');
  var $pager = $('.timeline-widget-pager');
  var $pagerItem = $('.timeline-widget-pager--item');
  var $wrap  = $frame.parent();
  var $margin = '40px';

  // Set initial.
  var $initialWidth = $frame.width();
  var $width = $initialWidth;
  $item.width($initialWidth);
  $item.css({ marginRight : $margin});
  $('.timeline-widget-pager li').width(Math.floor($initialWidth/3));

  // Control resizing.
  $(window).resize(function(e) {
    $width = $frame.width();
    $item.width($width);
    $sly.reload();
    $('.timeline-widget-pager li').width(Math.floor($width/3));
    $slyPager.reload();
  });

  // Main slider.
  var $sly = new Sly($frame, {
    horizontal: 1,
    itemNav: 'forceCentered',
    smart: 1,
    activateMiddle: 1,
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 0,
    scrollBy: 1,
    speed: 200,
    elasticBounds: 1,
    //easing: 'easeOutExpo',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1,

    // Buttons
    prev: $('.prev'),
    next: $('.next')
  }).init();

  // Pager.
  var $slyPager = new Sly('.timeline-widget-pager', {
    horizontal: 1,
    itemNav: 'forceCentered',
    smart: 1,
    activateMiddle: 1,
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 0,
    scrollBy: 1,
    speed: 200,
    elasticBounds: 1,
    //easing: 'easeOutExpo',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1
  }).init();

  // Dropdowns.
  var $slyDropdown = new Sly('.timeline-widget--dropdown--container', {
    itemNav: 'basic',
    smart: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 0,
    scrollBy: 1,
    activatePageOn: 'click',
    speed: 300,
    elasticBounds: 1,
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1
  }).init();

  $('.timeline-widget-pager--item, .timeline-widget-dropdown--item').click(function(){
    var $index = $(this).attr('data-slide');
    var $pos = $sly.getPos($index);
    $sly.slideTo($pos.start);
    var $dropDownPos = $slyDropdown.getPos($index);
  });

  // Open popup.
  $('.timeline-widget--dropdown-heading').click(function(){
    $('.timeline-widget--dropdown--wrapper').toggleClass('open');
    $slyDropdown.reload();
  });

  // Update other sliders based on main.
  $sly.on('moveEnd', function(){
    $index = $sly.rel.activeItem;

    var $pagerPos = $slyPager.getPos($index);
    $slyPager.slideTo($pagerPos.center);

    var $dropDownPos = $slyDropdown.getPos($index);
    $slyDropdown.slideTo($dropDownPos.start);
  });
});

