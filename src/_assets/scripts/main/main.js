$('#js-toggle-nav').on('click', function() {
  $(this).toggleClass('isNavOpen');
  $('.Navigation').toggleClass('isOpen');
  $('body').toggleClass('isNavOpen');
});

$('.Navigation-item').on('click', function(e) {
  e.preventDefault();

  $('#js-toggle-nav').removeClass('isNavOpen');
  $('.Navigation').removeClass('isOpen');
  $('body').removeClass('isNavOpen');

  var target = $(this).attr('data-anchor');
  var offset = $('#' + target).offset().top;

  $('html, body').animate({ scrollTop: offset - 60 }, 300);
});
