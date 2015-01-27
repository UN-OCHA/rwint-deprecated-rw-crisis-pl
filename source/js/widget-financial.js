// Open popup.
$('.cluster-bubble').click(function(){
  console.log('bubble');
  $('#finance-bubbles #detail-overlay').css('display', 'block');
});

// Close popup.
$('#finance-bubbles #detail-overlay').click(function(){
  console.log('close bubble');
  $('#finance-bubbles #detail-overlay').css('display', 'none');
});
