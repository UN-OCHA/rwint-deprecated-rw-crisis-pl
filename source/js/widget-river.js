$(document).ready(function () {
  $width = $(window).width();
  if ($width > 640) {
    $('.widget-river--filters input:first-of-type').click();
  }
});
