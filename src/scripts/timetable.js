// Create variable to store the changing words for the typwriter effect
const JobTitles = ["Designer", "Developer", "Enigneer"];

// Create variable to store the index of the active word for the typewriter effect
let currTitleIndex = 0;

// Wait for page contents to finish loading
window.addEventListener("load", () => {
  // Get the element that displays the changing word
  const typer = document.getElementById("typer");

  // Make the element display the next word in the array after each animation iteration
  typer.addEventListener("animationiteration", (event) => {
    if (event.animationName == "typing") {
      typer.textContent = JobTitles[currTitleIndex];
      currTitleIndex = (currTitleIndex + 1) % JobTitles.length;
    }
  });
});
