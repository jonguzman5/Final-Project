function openNav() {
    'use strict';
    document.getElementById("rightnav").style.width = "100%";
}
function closeNav() {
    'use strict';
    document.getElementById("rightnav").style.width = "0";
}
window.onload = function(){
    var promo = document.getElementById("WaynePromo");
    var play = document.getElementById("WaynePromo");
    play.addEventListener("click",function(){promo.play();
    });
   }
/*-----------------------------*/
function move() {
  var elem = document.getElementById("myAnimation");
  var pos = 0;
  var id = setInterval(frame, 5);
function frame() {
  if (pos == 1140) {
    clearInterval(id);
  } else {
    pos++;
    elem.style.left = pos + 'px';
  }
 }
}
/*---------------------------------*/
var organization = 0;
organize(organization);

function addDivs(n) {
    organize(organization += n);
}
function organize(n) {
    var i;
    var x = document.getElementsByClassName("wayneexec");
    if (n > x.length) {organization = 1}
    if (n < 1) {organization = x.length}
    for (i=0; i<x.length; i++) {
        x[i].style.display = "none";
    }
    x[organization-1].style.display = "block";
    }
/*----------------------------------*/
