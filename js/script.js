$(window).load(function() {

  var $container = $('.parent-block');

  $container.isotope({
    itemSelector: '.item',
  });

  $('#filters').on('click', 'a', function() {
    var selector = $(this).data('filter');
    $container.isotope({
      filter: selector
    });
    $('#filters li').removeClass("active");
    $(this).parent().addClass("active")
  });

});