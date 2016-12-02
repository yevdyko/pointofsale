'use strict';

// Catalog Control Tabs

$('.catalog-control__tab').on('click', function(event){
  event.preventDefault();
  var parent = $(this).parents('.catalog-control');
  parent.find('.catalog-control__tab').removeClass('active');
  $(this).addClass('active');
})
