/*jslint browser:true */

/* NIGHT STORIES TOGGLE */

/* BRON : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show */

function myFunction() {
    "use strict";
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}








/* ADD +1 WHEN YOU SAVE A STORY */

/* "Mijn Verhalen" heeft als ID "save". Het plusje om een verhaal toe te voegen aan je lijst heeft als ID "plus". Als je op de plus klikt wordt de class 'yay' getoggled en wordt er 1 aan toegevoegd.*/

var button = document.getElementById("plus");
var element = document.getElementById("save");
button.addEventListener("click", function () {
    "use strict";
    element.classList.toggle("yay");
});








/* BACK TO TOP */

/* BRON : https://dzone.com/articles/back-to-top-pure-javascript */

var timeOut;
function scrollToTop() {

    /*De code gaat eerst checken of de pagina al bovenaan is*/

    "use strict"; if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
        window.scrollBy(0, -50);
        timeOut = setTimeout('scrollToTop()', 10);
    } else clearTimeout(timeOut);
}
