const Pages = [
  "home.html",
  "timetable.html",
  "discussion.html",
  "share-resources.html",
  "about-us.html",
  "contact-us.html",
];

function loadContent(Page) {
  const PagePath = `pages/${Page}`;
  $.get(PagePath, (content) => {
    if (content) {
      $(".content").html(content);
    }
  });
}

var currOpt;
$(document).ready(() => {
  const ListItems = document.querySelectorAll(".navbar menu li");
  for (let i = 0; i < Pages.length; i++) {
    const ListItem = ListItems[i];
    const Page = Pages[i];
    ListItem.addEventListener("click", () => {
      loadContent(Page);
      document.getElementById("check").checked = false;
      currOpt.classList.remove("active");
      ListItem.classList.add("active");
      currOpt = ListItem;
    });
  }
  currOpt = ListItems[0];
  currOpt.classList.add("active");
  loadContent(Pages[0]);
});

function uploadClick() {
  alert(
    "Due to the static requirement of FA 1, no logic has been added to this button yet."
  );
}

function downloadClick() {
  alert(
    "Due to the static requirement of FA 1, no logic has been added to this button yet."
  );
}
