"use strict";

(function () {
  var houseElem = document.querySelector(".house");
  var maxScrollHeight;
  window.addEventListener("scroll", function () {
    var zMove = pageYOffset / maxScrollHeight * 960 - 490;
    houseElem.style.transform = "translateZ(" + zMove + "vw)";
  });

  function resizeHandler() {
    maxScrollHeight = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener("resize", resizeHandler);
  resizeHandler();
})();