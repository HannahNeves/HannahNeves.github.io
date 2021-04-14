const gif = document.querySelector('#gif');

$(window).on("load", function(){

  gif.classList.add('loader-inner');

  setTimeout(() => {
    $(".loader").fadeOut(500);
    $(".loader-inner").toggleClass('animate');
    $('html, body').animate({scrollTop: 0}, 0);
  }, 2500);
  
});