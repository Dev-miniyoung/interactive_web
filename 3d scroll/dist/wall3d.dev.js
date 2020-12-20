"use strict";

(function () {
  var stageElem = document.querySelector(".stage");
  var houseElem = document.querySelector(".house");
  var barElem = document.querySelector(".progress-bar");
  var mousePos = {
    x: 0,
    y: 0
  };
  var maxScrollHeight;
  window.addEventListener("scroll", function () {
    var scrollPer = pageYOffset / maxScrollHeight;
    var zMove = scrollPer * 960 - 490;
    houseElem.style.transform = "translateZ(" + zMove + "vw)"; // progress bar

    barElem.style.width = scrollPer * 100 + "%";
  });
  window.addEventListener("mouseover", function (e) {
    mousePos.x = -1 + e.clientX / window.innerWidth * 2;
    mousePos.y = 1 - e.clientY / window.innerHeight * 2;
    stageElem.style.transform = "rotateX(" + mousePos.y * 7 + "deg) rotateY(" + mousePos.x * 7 + "deg)";
  });

  function resizeHandler() {
    maxScrollHeight = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener("resize", resizeHandler);
  resizeHandler();
})();