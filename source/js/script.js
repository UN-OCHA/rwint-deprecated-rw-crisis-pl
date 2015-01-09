$(document).ready(function() {

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

  // Control resizing.
  $(window).resize(function(e) {
    $width = $frame.width();
    $item.width($width);
    $sly.reload();
  });

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
    prev: $wrap.find('.prev'),
    next: $wrap.find('.next')
  }).init();

  /*var $slyPager = new Sly($pager, {
    horizontal: 1,
    itemNav: 'centered',
    smart: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 0,
    //scrollBar: $wrap.find('.scrollbar'),
    scrollBy: 1,
    speed: 300,
    elasticBounds: 1,
    easing: 'easeOutExpo',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1

    // Buttons
    //prev: $wrap.find('.prev'),
    //next: $wrap.find('.next')
  }).init();*/

  $('.timeline-widget-pager--item').click(function(){

    var $index = $(this).attr('data-slide');
    var $pos = $sly.getPos($index);
    $sly.slideTo($pos.start);

    console.log($index);
  });
});
