(function () {
  const houseElem = document.querySelector(".house");
  const barElem = document.querySelector(".progress-bar");
  let maxScrollHeight;

  window.addEventListener("scroll", function () {
    const scrollPer = pageYOffset / maxScrollHeight;
    const zMove = scrollPer * 960 - 490;
    houseElem.style.transform = "translateZ(" + zMove + "vw)";

    // progress bar
    barElem.style.width = scrollPer * 100 + "%";
  });

  function resizeHandler() {
    maxScrollHeight = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener("resize", resizeHandler);
  resizeHandler();
})();
