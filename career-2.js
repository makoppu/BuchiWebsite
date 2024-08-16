const details = document.querySelectorAll("details");
const toggleButtons = document.querySelectorAll(".toggleAll");

let allOpen = false;

toggleButtons.forEach(button => {
  button.addEventListener("click", () => {
    allOpen = !allOpen;
    toggleButtons.forEach(btn => {
      if (allOpen) {
        btn.classList.add("active");
        btn.textContent = "– Collapse All";
      } else {
        btn.classList.remove("active");
        btn.textContent = "+ Expand All";
      }
    });
    details.forEach(detail => {
      detail.open = allOpen;
    });
  });
});
