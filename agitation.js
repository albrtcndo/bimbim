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
    $("#palla-della-verita").addClass("shake-slow").delay(3000);
}
