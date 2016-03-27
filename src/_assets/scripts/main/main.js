var $window = $(window);

var BREAKPOINT = {
  '--sm-viewport': '(min-width:0)',
  '--md-viewport': '(min-width:780px)',
  '--lg-viewport': '(min-width:1040px)',
};

var getBreakpoint = function() {
  if (window.matchMedia(BREAKPOINT['--lg-viewport']).matches) {
    return 'large';
  } else if (window.matchMedia(BREAKPOINT['--md-viewport']).matches) {
    return 'medium';
  } else if (window.matchMedia(BREAKPOINT['--sm-viewport']).matches) {
    return 'small';
  }
};


// Click handlers

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

  ga('send', 'event', 'Navigation', 'click', target);

  $('html, body').animate({ scrollTop: offset - 60 }, 300);
});

$('.Footer--email').on('click', function() {
  ga('send', 'event', 'Contact', 'click', 'email');
});
$('.Footer--phone').on('click', function() {
  ga('send', 'event', 'Contact', 'click', 'phone');
});


// Scroll handler

var offset = getBreakpoint() === 'large' ? 364 : 302;
var isSticky = $window.scrollTop() >= offset;

if (isSticky) {
  $('body').addClass('is-headerSticky');
}

$window.on('scroll', function() {
  var scrollTop = $window.scrollTop();
  var offset = getBreakpoint() === 'large' ? 364 : 302;
  var isSticky = scrollTop >= offset;
  var action = isSticky ? 'addClass' : 'removeClass';

  $('body')[action]('is-headerSticky');
});
