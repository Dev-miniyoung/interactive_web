(function () {
  const stageElem = document.querySelector(".stage");
  const houseElem = document.querySelector(".house");
  const barElem = document.querySelector(".progress-bar");
  const mousePos = { x: 0, y: 0 };
  let maxScrollHeight;

  window.addEventListener("scroll", function () {
    const scrollPer = pageYOffset / maxScrollHeight;
    const zMove = scrollPer * 960 - 490;
    houseElem.style.transform = "translateZ(" + zMove + "vw)";

    // progress bar
    barElem.style.width = scrollPer * 100 + "%";
  });

  window.addEventListener("mouseover", function (e) {
    mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
    mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
    stageElem.style.transform =
      "rotateX(" + mousePos.y * 7 + "deg) rotateY(" + mousePos.x * 7 + "deg)";
  });

  function resizeHandler() {
    maxScrollHeight = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener("resize", resizeHandler);
  resizeHandler();
})();
