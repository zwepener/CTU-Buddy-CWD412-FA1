const NavMenuItemIDs = [
  "home",
  "timetable",
  "discussion",
  "share-resources",
  "about-us",
  "contact-us",
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
function configureNavbar() {
  NavMenuItemIDs.forEach((NavMenuItemID) => {
    const MenuItem = document.getElementById(NavMenuItemID).parentElement;
    MenuItem.addEventListener("click", () => {
      loadContent(`${NavMenuItemID}.html`);
      document.getElementById("check").checked = false;
      currOpt.classList.remove("active");
      MenuItem.classList.add("active");
      currOpt = MenuItem;
    });
  });
  currOpt = document.getElementById(NavMenuItemIDs[0]).parentElement;
  currOpt.classList.add("active");
  loadContent(`${NavMenuItemIDs[0]}.html`);
}

$(document).ready(() => {
  configureNavbar();
});

// Default Functions
function defaultAlert() {
  alert(
    "Due to the static nature of FA 1, no logic has been added to this element yet."
  );
}

// For "Share Resources" Page
function uploadClick() {
  defaultAlert();
}
