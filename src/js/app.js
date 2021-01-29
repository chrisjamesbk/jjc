var email = document.getElementsByClassName('Footer--email')[0];
var phone = document.getElementsByClassName('Footer--phone')[0];
var signup = document.getElementsByClassName('Footer--signup')[0];

email.addEventListener('click', function() {
  ga('send', 'event', 'Contact', 'click', 'email');
});
phone.addEventListener('click', function() {
  ga('send', 'event', 'Contact', 'click', 'phone');
});
signup.addEventListener('click', function() {
  ga('send', 'event', 'Contact', 'click', 'signup');
});

