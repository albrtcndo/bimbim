var myShakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 1000 // optional, determines the frequency of event generation
});
myShakeEvent.start();
window.addEventListener('shake', shakeEventDidOccur, false);

//function to call when shake occurs
function shakeEventDidOccur () {

    //put your own code here etc.



    //animazione su palla della verità
    //far apparire il messaggio
    //alert('shake!');
    const paginaMessaggio = document.getElementById("container-messaggio");
    //controllo se esiste una frase aperta se sì chiudo
    if (paginaMessaggio.children.length > 0) {
        console.log("c'era già un messaggio aperto, mo lo chiudiamo");

        //aggiungo animazione chiusura
        var bgDisappear = $("#container-messaggio");
        var messageDisappear = $("#container-messaggio .messaggio");
        gsap.to(bgAppear, {
            autoAlpha: 0,
            duration: 2,
            ease: Bounce. easeOut
        },'+= 0.1')
        gsap.to(messageDisappear, {
            x: -400,
            autoAlpha: 0,
            transformOrigin: '50% 0%',
            duration: 5,
            ease: Bounce. easeOut
        },'-= 0.1')

        paginaMessaggio.firstElementChild.remove();
        console.log("elemento rimosso");
    }

    var arrayFrasi = ["Un sorriso, un caffè, un buongiorno per te!",
    "Se al mattino la tua casa profuma di caffè, sicuramente il tuo sarà un giorno da Re!",
    "Le migliori frasi di vin disel"];

    var fraseFinta = "Un sorriso, un caffè, un buongiorno per te!";
    var indiceAcaso = getRandomInt(0, 2);
    console.log("questo è l'indice a caso generato");
    console.log(indiceAcaso);

    var fraseFinta2 = arrayFrasi[indiceAcaso];
    const fraseNew = document.createElement("p");
    fraseNew.classList.add("messaggio");
    fraseNew.innerHTML = fraseFinta2;

    paginaMessaggio.appendChild(fraseNew);

    //animazione palla
    $("#palla-della-verita").addClass("shake-slow");

    //animazione messaggio
    var bgAppear = $("#container-messaggio");
    var messageAppear = $("#container-messaggio .messaggio");
    gsap.fromTo(bgAppear, {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        duration: 2,
        ease: Bounce. easeOut
    },'+= 0.1')
    gsap.fromTo(messageAppear, {
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
        duration: 5,
        ease: Bounce. easeOut
    },'+= 0.1')

};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
