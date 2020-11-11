$( document ).ready(function() {


  //quando la pagina è carica rimuovo il loader
  $(".loading").addClass("hide-loading");

  //rimuovo blocco desktop
  if(window.outerWidth < 425) {
    $(".blocchettino-su-desktop").addClass("nascondi");
  }

  var quantiClik = 0;
  //test on click
  /*
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

 });*/

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
      start: "center bottom",
      toggleActions: "play none none reverse",
      markers: false
    },
    defaults: {
      opacity: 0,
      duration: 1.5
    }
  })
  .add('appearDoggo')
  .from(".doggo",{x: 200},'appearDoggo += 1.5')
  .from(".pray",{x: -200},'appearDoggo')

  //variabile contatore sfondo
  var contaSfondi = 0;

  //vettore sfondi
  var arraySfondiPalla = [
    "imgs/palla-black-min.png",
    "imgs/palla-bisc-min.png",
    "imgs/palla-calzin-min.png",
    "imgs/palla-bicchierin-min.png"
  ];

  //click sul cambia sfondo
  $('#immaginette-finali').click(function() {

    //animzione delle mani
    gsap.timeline()
    .add("animazione1")
    .add("animazione2 += 1")
    .add("animazione3 += 1")
    .to(".pray-1", {
        opacity: 0,
        duration: 0.7,
        ease: Power1. easeOut
    },'animazione1')
    .to(".pray-2", {
        opacity: 1,
        duration: 0.7,
        ease: Power1. easeOut
    },'animazione1')
    .to(".pray-2", {
        opacity: 0,
        duration: 0.7,
        ease: Power1. easeOut
    },'animazione2')
    .to(".pray-3", {
        opacity: 1,
        duration: 0.7,
        ease: Power1. easeOut
    },'animazione2')
    .to(".pray-3", {
        opacity: 0,
        duration: 0.7,
        ease: Power1. easeOut
    },'animazione3')
    .to(".pray-1", {
        opacity: 1,
        duration: 0.7,
        ease: Power1. easeOut
    },'animazione3');

    //controllo di non aver superato gli sfondi disponibili
    contaSfondi += 1;

    if (contaSfondi >= arraySfondiPalla.length) {
      contaSfondi = 0;
    }
    //cambio sfondo
    $('#palla-della-verita').css("background-image", "url("+ arraySfondiPalla[contaSfondi]);

  });


  //popup iniziale con cookie
  /*
  var check_width = $("body").width();
    if (check_width < 981) {
      var datamodalpopup = sessionStorage.getItem('shown-modal-pop');
      console.log("questo è il valore del session storage: " + datamodalpopup );
      if( !sessionStorage.getItem('shown-modal-pop')){
        //visualizzo il pop up
        setTimeout(function(){
              $(".pop-up").addClass("show-popup");
          }, 10);
        sessionStorage.setItem('shown-modal-pop', 'true');
        $(".close-pop-up").on('click', function(){
            console.log("close-pop-up cliccato");
            $(".pop-up").removeClass("show-popup");
        });
    	}
    }*/
    //popup senza cookie
    var check_width = $("body").width();
      if (check_width < 981) {
        $(".close-pop-up").on('click', function(){
            console.log("close-pop-up cliccato");
            $(".pop-up").removeClass("show-popup");

            // feature detect
            if (typeof DeviceMotionEvent.requestPermission === 'function') {
              DeviceMotionEvent.requestPermission()
                .then(permissionState => {
                  if (permissionState === 'granted') {
                    window.addEventListener('devicemotion', () => {});
                  }
                })
                .catch(console.error);
            } else {
              // handle regular non iOS 13+ devices
            }
            // feature detect
            if (typeof DeviceOrientationEvent.requestPermission === 'function') {
              DeviceOrientationEvent.requestPermission()
                .then(permissionState => {
                  if (permissionState === 'granted') {
                    window.addEventListener('deviceorientation', () => {});
                  }
                })
                .catch(console.error);
            } else {
              // handle regular non iOS 13+ devices
            }


        });
      }


});
