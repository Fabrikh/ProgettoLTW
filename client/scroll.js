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

$(document).ready(function () {
  $("#js-content").load("/about.html");

  $("#js-navigation a").click(function (e) {
    e.preventDefault();
    $("#js-content").load(e.target.href);
  });
});
