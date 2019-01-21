/*jslint browser:true */


/* MICROINTERACTIE 1 : NIGHT STORIES TOGGLE */
/* BRON : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show */

/* Door de nighttime stories knop (moon) de onclick attribute te geven van "myFunction()" wordt deze gelinked met het togglen van #myDIV. Als je op de knop klikt wisselt de display tussen "none" en flex". Bij "none" worden de nighttime stories niet getoond, en bij "flex" wel.*/

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}






/* MICROINTERACTIE 2 : ADD +1 WHEN YOU SAVE A STORY */

/* "Mijn Verhalen" in de nav heeft als ID "save". Het plusje om een verhaal toe te voegen aan je leeslijst heeft als ID "plus". Als je op de plus klikt wordt de class 'yay' getoggled, waarbij er een "1" aan "Mijn Verhalen" toegevoegd.*/

var button = document.getElementById("plus");
var element = document.getElementById("save");
button.addEventListener("click", function () {
    element.classList.toggle("yay");
});








/* MICROINTERACTIE 3 : BACK TO TOP */
/* BRON : https://dzone.com/articles/back-to-top-pure-javascript */

/* De code gaat eerst checken of de pagina al bovenaan is. Vervolgens gaat het d.m.v. scrollBy de document window met 50px omhoog scrollen. Dan is er een timeout van 10 milisec. Als de pagina daarna nog niet helemaal bovenaan is, wordt de functie weer uitgevoerd. Als het al wel bovenaan is, wordt de "else" uitgevoerd, en dat is dan clearTimeout. */

var timeOut;
function scrollToTop() {

    "use strict"; if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
        window.scrollBy(0, -50);
        timeOut = setTimeout('scrollToTop()', 10);
    } else clearTimeout(timeOut);
}
