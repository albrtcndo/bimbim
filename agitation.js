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
    paginaMessaggio = $(".container-messaggio");
    //controllo se esiste una frase aperta se sì chiudo
    if (paginaMessaggio.children.length > 1) {
        console.log("c'era già un messaggio aperto, mo lo chiudiamo");

        //aggiungo animazione chiusura

        paginaMessaggio.firstElementChild.remove();
    }

    var fraseFinta = "Un sorriso, un caffè, un buongiorno per te!";
    const fraseNew = document.createElement("p");
    fraseNew.classList.add("messaggio");
    fraseNew.innerHTML = fraseFinta;

    paginaMessaggio.appendChild(fraseNew);

    //animazione palla
    $("#palla-della-verita").addClass("shake-slow");

    //animazione messaggio
    var messageAppear = $(".container-messaggio .messaggio");
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

}
