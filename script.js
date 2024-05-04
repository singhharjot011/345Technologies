const arrows = document.querySelectorAll(".arrow");

arrows.forEach((arrow) => {
  arrow.addEventListener("mouseover", () => {
    arrow.classList.add("active");
  });

  arrow.addEventListener("mouseout", () => {
    arrow.classList.remove("active");
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".arrow")) {
    arrows.forEach((arrow) => {
      arrow.classList.remove("active");
    });
  }
});
