// Wait for page contents to finish loading
window.addEventListener("load", () => {
  // Bind logic to the 'submit' event of the feedback form
  document
    .getElementById("feedback-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      alert(
        "Due to the static nature of FA 1, no logic has been added to this element yet."
      );
    });
});
