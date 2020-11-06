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

 //apertura/chiusura menu
 $('.icon-about').click(function() {
   //disattivo lo shake
   myShakeEvent.stop();

   //faccio comparire il menu
   var menuCheSiApre = $('.menu-about .menu-open');

   gsap.to(menuCheSiApre,{
     x: 0,
     ease: Bounce. easeOut,
     duration: 2
   });
 });

 $('.close-menu').click(function() {

   //faccio sparire il menu
   var menuCheSichiude = $('.menu-about .menu-open');

   //lascio il coefficente nel caso si voglia modificare lo spsotamento
   var wiiidth = 1 * (window.outerWidth);
   gsap.to(menuCheSichiude,{
     x: wiiidth,
     ease: Bounce. easeOut,
     duration: 2
   });

   //riattivo lo shake
   myShakeEvent.start();

 });






 //animazioncina doggo
 var tl = gsap.timeline({
  scrollTrigger: {
    scroller: ".menu-open",
    trigger: "#immaginette-finali",
    start: "bottom bottom",
    markers: true
  },
  defaults: {
    opacity: 0,
    duration: 1.5
  }
})
.add('appearDoggo')
.from(".doggo",{x: 200},'appearDoggo += 1.5')
.from(".pray",{x: -200},'appearDoggo')





});
