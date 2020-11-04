$( document ).ready(function() {

  //rimuovo blocco desktop
  if(window.outerWidth < 425) {
    $(".blocchettino-su-desktop").addClass("nascondi");
  }

  var quantiClik = 0;
  //test on click
  $('body').click(function() {
   // do something here
   console.log("ci sono "+ quantiClik + " click");
   if(quantiClik % 2 === 0  ){
     shakeEventDidOccur();
     quantiClik += 1;
     console.log("ok inizia a vibrare");
   } else {
     quantiClik += 1;
     console.log("no ora sta fermo");
   }

  });

});
