const JobTitles = ["Designer", "Developer", "Enigneer"];
let currTitleIndex = 0;

window.addEventListener("load", () => {
  const typer = document.getElementById("typer");
  typer.addEventListener("animationiteration", (event) => {
    if (event.animationName == "typing") {
        typer.textContent = JobTitles[currTitleIndex];
      currTitleIndex = (currTitleIndex + 1) % JobTitles.length;
    }
  });
});
