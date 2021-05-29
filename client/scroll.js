$(".scrollup").click(function (e) {
  e.preventDefault();
  var goTo = this.getAttribute("href");

  var interval = setInterval(function () {
    if (!$("main").hasClass("nav-is-visible")) {
      clearInterval(interval);
      window.location = goTo;
    }
  }, 100);
});

$("$.nav-link").click(function (e) {
  e.preventDefault();
  var goTo = this.getAttribute("href");

  var interval = setInterval(function () {
    if (!$("main").hasClass("nav-is-visible")) {
      clearInterval(interval);
      window.location = goTo;
    }
  }, 100);
});
