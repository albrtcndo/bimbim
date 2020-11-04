$( document ).ready(function() {

  //rimuovo blocco desktop
  if(window.outerWidth < 425) {
    $(".blocchettino-su-desktop").addClass("nascondi");
  }
  //test on click
  $('body').click(function() {
   // do something here
   shakeEventDidOccur();
  });

});
