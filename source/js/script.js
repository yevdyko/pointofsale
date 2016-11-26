'use strict';

// Hamburger Menu

var hamburger = document.querySelector('.hamburger');
var close = document.querySelector('.is-active');

if (hamburger != null) {
  hamburger.addEventListener('click', function(event) {
    event.preventDefault();
    hamburger.classList.toggle('is-active');
  });
}

// Catalog Control Tabs

$('.js-tab-control').on('click', function(event){
  event.preventDefault();
  var parent = $(this).parents('.catalog-control');
  parent.find('.js-tab-control').removeClass('active');
  $(this).addClass('active');
})

// Modal Windows

var button_checkout = document.querySelector('.order-control .btn--checkout');
var button_checkout_close = document.querySelector('.js-modal-close--checkout');
var modal_content_checkout = document.querySelector('.modal-content-wrapper--checkout');

var button_username = document.querySelector('.user .user__link');
var button_username_close = document.querySelector('.js-modal-close--username');
var modal_content_username = document.querySelector('.modal-content-wrapper--username');

var button_guest = document.querySelector('.order .order-heading__link');
var button_guest_close = document.querySelector('.js-modal-close--guest');
var modal_content_guest = document.querySelector('.modal-content-wrapper--guest');

if (button_checkout != null) {
  button_checkout.addEventListener('click', function(event) {
    event.preventDefault();
    modal_content_checkout.classList.add('modal-content-wrapper__show');
  });
}

if (button_username != null) {
  button_username.addEventListener('click', function(event) {
    event.preventDefault();
    modal_content_username.classList.add('modal-content-wrapper__show');
  });
}

if (button_guest != null) {
  button_guest.addEventListener('click', function(event) {
    event.preventDefault();
    modal_content_guest.classList.add('modal-content-wrapper__show');
  });
}

if (button_checkout_close != null) {
  button_checkout_close.addEventListener('click', function(event) {
    event.preventDefault();
    modal_content_checkout.classList.remove('modal-content-wrapper__show');
  });
}

if (button_username_close != null) {
  button_username_close.addEventListener('click', function(event) {
    event.preventDefault();
    modal_content_username.classList.remove('modal-content-wrapper__show');
  });
}

if (button_guest_close != null) {
  button_guest_close.addEventListener('click', function(event) {
    event.preventDefault();
    modal_content_guest.classList.remove('modal-content-wrapper__show');
  });
}

