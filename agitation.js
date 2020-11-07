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

        var arrayFrasi = getVettoreFrasi();
        var maxIndice = arrayFrasi.length - 1;

        var indiceAcaso = getRandomInt(0, maxIndice);
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

// funzione che resituisce il vettore di frasi
function getVettoreFrasi(min, max) {
  var vettoreFrasi = [
    "Tondo non so come mai (mi pia) riesco a dormire così tanto",
    "- Buona festa della liberazione bisc!<br>- PERCHÈ NON ABBIAMO UN GIORNO IN PIÙ :(",
    "Tondo la vostra luce sembra un cannone!",
    "Tondo perché? :( ...<br>PERCHÈ DOBBIAMO ALZARCI!??",
    "- Tigro cosa ne sai tu?<br>- Di che cosa?<br>- Della democrazia",
    "Indiana Jones se sei in rischio fai un occhiolino eh",
    "Cazzo ti ridi Davide? Pensi di poter ridere?",
    "Bravo Tigro anche oggi ti sei giocato da solo",
    "Non so perchè mi viene così tanto tanto tanto da dormire",
    "Minchia Davide che spari le conoscenze",
    "Tondo mi alzo eh...Oppure un'altra mezzora???😏... No dai...",
    "Tigro che carino che sei [da il pollo]<br>Rosicaaa[a Leon]",
    "[al telefono] Franci tu hai dei problemi tecnici molto seri",
    "Tigro...volevo darti una botta.....se questo è quello che volevi tu",
    "Top 5 band metal:<br>Lost in the forest<br>Night animals<br>Trattore non perdona<br>Shout in the sky<br>Cut the leather Jacket",
    "Che lampadona qua fuori",
    "Tondo, Tondo🎶<br>Non ti arriverà un domani!🎶",
    "I fiori!!!<br>Per te!!!<br>Auguri!!!!",
    "Tondo tu sei quelle tazze...<br>che vanno in giro",
    "- Bisco che cos'è questo? [barattolo di 🍪] - Non chiedere le domande troppo scomode",
    "Ranieri, Ranieri🎶<br>Tu bevi l'acqua senza bicchieri!🎶",
    "Tigrol tu non puoi muovere"
  ];
  return vettoreFrasi;
};
