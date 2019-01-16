/*jslint browser:true */


/* BRON : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show */
/* NIGHT STORIES TOGGLE */

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

var button = document.getElementById("plus");
var element = document.getElementById("save");
button.addEventListener("click", function () {
    "use strict";
    element.classList.toggle("yay");
});





/* BRON : https://dzone.com/articles/back-to-top-pure-javascript */
/* BACK TO TOP */

var timeOut;
function scrollToTop() {

    /*first check if the page is already at the top of the window*/
    "use strict"; if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
        window.scrollBy(0, -50);
        timeOut = setTimeout('scrollToTop()', 10);
    }
    else clearTimeout(timeOut);
}
