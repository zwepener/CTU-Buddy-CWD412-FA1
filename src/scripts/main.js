const Pages = [
  "home.html",
  "timetable.html",
  "discussion.html",
  "share-resources.html",
  "about-us.html",
  "contact-us.html",
];

loadContent = (Page) => {
  const PagePath = `pages/${Page}`;
  $.get(PagePath, (content) => {
    if (content) {
      $(".content").html(content);
    }
  });
};

var currOpt;
$(document).ready(() => {
  const Spans = document.querySelectorAll(".navbar menu li span");
  for (let i = 0; i < Pages.length; i++) {
    const Span = Spans[i];
    const Page = Pages[i];
    Span.addEventListener("click", () => {
      loadContent(Page);
      document.getElementById("check").checked = false;
      currOpt.parentNode.classList.remove("active");
      Span.parentNode.classList.add("active");
      currOpt = Span;
    });
  }
  currOpt = Spans[0];
  currOpt.parentNode.classList.add("active");
  loadContent(Pages[0]);
});
