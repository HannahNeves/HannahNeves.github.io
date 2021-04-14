$(document).ready(function() {
  var cards = $('.cards');

  function flicitySlider() {
    cards.flickity({
      freeScroll: true,
      contain: true,
      prevNextButtons: true,
      accessibility: true,
      groupCells: 2,
      arrowShape: { 
        x0: 10,
        x1: 45, y1: 25,
        x2: 30, y2: 5,
        x3: 75
      }
    });
  }

  flicitySlider();

  $('.item-filter').on('click', function() {

    const value = $(this).attr('data-filter');

    var card = cards.find('.card');

    if(value == 'all') {
      card.fadeIn(500);
      card.addClass('flickity');
    } else {
      var active = $('.' + value).fadeIn(700);
      card.addClass('flickity');
      card.not(active).removeClass('flickity');
      card.not(active).hide();
    }

    cards.flickity('destroy');
    flicitySlider();

    $('.item-filter').removeClass('active');
    $(this).addClass('active');
    
  });

});