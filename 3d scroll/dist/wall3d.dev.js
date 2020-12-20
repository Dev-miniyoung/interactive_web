"use strict";

(function () {
  var houseElem = document.querySelector(".house");
  var barElem = document.querySelector(".progress-bar");
  var maxScrollHeight;
  window.addEventListener("scroll", function () {
    var scrollPer = pageYOffset / maxScrollHeight;
    var zMove = scrollPer * 960 - 490;
    houseElem.style.transform = "translateZ(" + zMove + "vw)"; // progress bar

    barElem.style.width = scrollPer * 100 + "%";
  });

  function resizeHandler() {
    maxScrollHeight = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener("resize", resizeHandler);
  resizeHandler();
})();