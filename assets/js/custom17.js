lenis.stop();
$(window).on("beforeunload", function () {
  $("body").hide();
  $(window).scrollTop(0);
});

if (screen && screen.width > 768) {
  setTimeout(function () {
    lenis.start();
  }, 5000);
} else {
  setTimeout(function () {
    lenis.start();
  }, 3000);
}
