(function () {
  const houseElem = document.querySelector(".house");
  let maxScrollHeight;

  window.addEventListener("scroll", function () {
    const zMove = (pageYOffset / maxScrollHeight) * 960 - 490;
    houseElem.style.transform = "translateZ(" + zMove + "vw)";
  });

  function resizeHandler() {
    maxScrollHeight = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener("resize", resizeHandler);
  resizeHandler();
})();
