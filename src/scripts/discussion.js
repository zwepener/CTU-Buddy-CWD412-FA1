window.addEventListener("load", () => {
  document.querySelectorAll(".post-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert(
        "Due to the static nature of FA 1, no logic has been added to this element yet."
      );
    });
  });
});
