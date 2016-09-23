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
  var parent = $(this).parents('.js-tab-container');
  parent.find('.js-tab-control').removeClass('active');
  $(this).addClass('active');
  parent.find('.js-tab').removeClass('js-tab--open');
  parent.find('.' + $(this).attr('data-tab') ).addClass('js-tab--open');
})

// Modal Windows

var button_checkout = document.querySelector('.order-control .btn--checkout');
var button_checkout_close = document.querySelector('.js-modal-close--checkout');
var modal_content_checkout = document.querySelector('.modal-content-wrapper--checkout');

if (button_checkout != null) {
  button_checkout.addEventListener('click', function(event) {
    event.preventDefault();
    modal_content_checkout.classList.add('modal-content-wrapper__show');
  });
}

if (button_checkout_close != null) {
  button_checkout_close.addEventListener('click', function(event) {
    event.preventDefault();
    modal_content_checkout.classList.remove('modal-content-wrapper__show');
  });
}

