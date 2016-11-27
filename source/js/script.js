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
