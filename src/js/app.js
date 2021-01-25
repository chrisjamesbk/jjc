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

var scrollTo = function(scrollTo, scrollDuration) {
	//
	// Set a default for where we're scrolling to
	//
	if (typeof scrollTo === 'string') {

		// Assuming this is a selector we can use to find an element
		var scrollToObj = document.querySelector(scrollTo);

		if (scrollToObj && typeof scrollToObj.getBoundingClientRect === 'function') {
			scrollTo = window.pageYOffset + scrollToObj.getBoundingClientRect().top;
		} else {
			throw 'error: No element found with the selector "' + scrollTo + '"';
		}
	} else if (typeof scrollTo !== 'number') {

		// If it's nothing above and not an integer, we assume top of the window
		scrollTo = 0;
	}

	// Set this a bit higher

	var anchorHeightAdjust = 30;
	if (scrollTo > anchorHeightAdjust) {
		scrollTo = scrollTo - anchorHeightAdjust;
	}

	//
	// Set a default for the duration
	//

	if ( typeof scrollDuration !== 'number' || scrollDuration < 0 ) {
		scrollDuration = 1000;
	}

	// Declarations

	var cosParameter = (window.pageYOffset - scrollTo) / 2,
		scrollCount = 0,
		oldTimestamp = window.performance.now();

	function step(newTimestamp) {

		var tsDiff = newTimestamp - oldTimestamp;

		// Performance.now() polyfill loads late so passed-in timestamp is a larger offset
		// on the first go-through than we want so I'm adjusting the difference down here.
		// Regardless, we would rather have a slightly slower animation than a big jump so a good
		// safeguard, even if we're not using the polyfill.

		if (tsDiff > 100) {
			tsDiff = 30;
		}

		scrollCount += Math.PI / (scrollDuration / tsDiff);

		// As soon as we cross over Pi, we're about where we need to be

		if (scrollCount >= Math.PI) {
			return;
		}

		var moveStep = Math.round(scrollTo + cosParameter + cosParameter * Math.cos(scrollCount));
		window.scrollTo(0, moveStep);
		oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
    console.log('step');
	}

	window.requestAnimationFrame(step);
};

// var navToggle = document.getElementById('js-toggle-nav');
// var nav = document.getElementsByClassName('Navigation')[0];
// var navItems = document.getElementsByClassName('Navigation-item');
var email = document.getElementsByClassName('Footer--email')[0];
var phone = document.getElementsByClassName('Footer--phone')[0];

// var onNavClick = function() {
//   navToggle.classList.toggle('isNavOpen');
//   nav.classList.toggle('isOpen');
//   document.body.classList.toggle('isNavOpen');
// };

// var onNavItemClick = function(e) {
//   e.preventDefault();
//   console.log('click');

//   navToggle.classList.remove('isNavOpen');
//   nav.classList.remove('isOpen');
//   document.body.classList.remove('isNavOpen');

//   var target = this.getAttribute('data-anchor');
//   var offset = document.getElementById(target).offsetTop;

//   ga('send', 'event', 'Navigation', 'click', target);

//   scrollTo(offset - 60, 300);
// };

// Click handlers

// navToggle.addEventListener('click', onNavClick);
// for (var i = 0; i < navItems.length; i++) {
//   navItems[i].addEventListener('click', onNavItemClick);
// }
email.addEventListener('click', function() {
  ga('send', 'event', 'Contact', 'click', 'email');
});
phone.addEventListener('click', function() {
  ga('send', 'event', 'Contact', 'click', 'phone');
});

// Scroll handler

// var offset = getBreakpoint() === 'large' ? 364 : 302;
// var isSticky = window.scrollY >= offset;

// if (isSticky) {
//   document.body.classList.add('is-headerSticky');
// }

// window.addEventListener('scroll', function(e) {
//   var scrollTop = window.scrollY;
//   var offset = getBreakpoint() === 'large' ? 364 : 302;
//   var isSticky = scrollTop >= offset;
//   var action = isSticky ? 'add' : 'remove';

//   document.body.classList[action]('is-headerSticky');
// });

console.log('hey');
window.onload = function() {
  let myiFrame = document.getElementById("signup");
  console.log('hi', myiFrame);
  let doc = myiFrame.contentDocument;
  doc.body.innerHTML = doc.body.innerHTML + `
    <style>
      .embed-page {
        padding: 0;
      }
    </style>
  `;
}

