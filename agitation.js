var myShakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 1000 // optional, determines the frequency of event generation
});
myShakeEvent.start();
window.addEventListener('shake', shakeEventDidOccur, false);

//function to call when shake occurs
function shakeEventDidOccur () {

    //put your own code here etc.

    // per prma cosa disattivo lo shake
    myShakeEvent.stop();

    //animazione palla
    $("#palla-della-verita").addClass("shake-slow");
    console.log("inizia a vibrare la palla no?");


    //alert('shake!');
    const paginaMessaggio = document.getElementById("container-messaggio");
    //controllo se esiste una frase aperta se sì chiudo

    //ipotetico controllo su esistenza di frase aperta se sì non eseguo il codice qui sotto

    setTimeout(function myFunction() {

        var arrayFrasi = ["Un sorriso💙, un caffè, un buongiorno per te!",
        'Se al mattino<br> la <span style="color:red">tua</span> casa profuma di caffè, sicuramente il tuo sarà un giorno da Re!',
        "Le migliori frasi di vin disel"];

        var fraseFinta = "Un sorriso, un caffè, un buongiorno per te!";
        var indiceAcaso = getRandomInt(0, 2);
        var fraseFinta2 = arrayFrasi[indiceAcaso];
        const fraseNew = document.createElement("p");
        fraseNew.classList.add("messaggio");
        fraseNew.innerHTML = fraseFinta2;

        paginaMessaggio.appendChild(fraseNew);



        //animazione messaggio
        var bgAppear = $("#container-messaggio");
        var messageAppear = $("#container-messaggio .messaggio");
        var closeAppear = $(".chiudi");
        var titolon = $("#titoloo");

        gsap.timeline()
        .add("messaggione")
        .add("chiuditioh +=10")
        .fromTo(bgAppear, {
            autoAlpha: 0,
        }, {
            autoAlpha: 1,
            duration: 2,
            ease: Bounce. easeOut
        },'messaggione')
        .fromTo(messageAppear, {
            x: -400,
            display: "none",
            autoAlpha: 0,
            scale: 1,
            transformOrigin: '50% 0%'
        }, {
            x: 0,
            display: "block",
            autoAlpha: 1,
            scale: 1,
            duration: 4,
            ease: Bounce. easeOut
        },'messaggione += 0.1')
        .to(closeAppear, {
            x: 0,
            opacity: 1,
            duration: 2,
            ease: Power1. easeOut
        },'chiuditioh')
        .to(titolon, {
            x: 0,
            opacity: 0,
            duration: 2,
            ease: Power1. easeOut
        },'messaggione -= 1.1');
    }, 2000);

    //ora gestisco il click su chiudi messaggio
    $('.chiudi').click(function() {

      //animazione di chiusura
      var bgDisappear = $("#container-messaggio");
      var msg = $("#container-messaggio .messaggio");
      var titl = $("#titoloo");
      var chiudeee = $(".chiudi");

      gsap.timeline()
      .add("dissolvi")
      .to(bgDisappear, {
          opacity: 0,
          duration: 2,
          ease: Power1. easeOut
      },'dissolvi += 0.1')
      .to(msg, {
          x: 40,
          opacity: 0,
          duration: 2,
          ease: Bounce. easeOut
      },'dissolvi -= 0.1')
      .to(chiudeee, {
          x: 0,
          opacity: 0,
          duration: 2,
          ease: Power1. easeOut
      },'dissolvi -= 0.1')
      .to(titl, {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: Power1. easeOut
      },'dissolvi -= 0.1');

      //rimuovo l'elemento
      paginaMessaggio.firstElementChild.remove();
      console.log("elemento rimosso");

      //rimuovo la classe vibrazione
      $("#palla-della-verita").removeClass("shake-slow");

      //riattivo lo shake
      myShakeEvent.start();

    });

};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
