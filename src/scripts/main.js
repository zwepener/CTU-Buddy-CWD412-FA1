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
  const MenuItems = document.querySelectorAll(".navbar menu li");
  for (let i = 0; i < Pages.length; i++) {
    const MenuItem = MenuItems[i];
    const Page = Pages[i];
    MenuItem.addEventListener("click", () => {
      loadContent(Page);
      document.getElementById("check").checked = false;
      currOpt.classList.remove("active");
      MenuItem.classList.add("active");
      currOpt = MenuItem;
    });
  }
  currOpt = MenuItems[0];
  currOpt.classList.add("active");
  loadContent(Pages[0]);
});

function defaultAlert() {
  alert(
    "Due to the static nature of FA 1, no logic has been added to this element yet."
  );
}

// For "Share Resources" Page
function uploadClick() {
  defaultAlert();
}

function downloadClick() {
  defaultAlert();
}
