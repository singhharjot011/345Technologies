// Handle Navbar Menu

const handleNavbarMenu = function () {
  const toggle = document.getElementById("menu-toggle");
  const expNav = document.getElementById("expanded-navbar");

  window.addEventListener("scroll", () => {
    if (expNav.classList.contains("flex")) {
      expNav.classList.remove("flex");
      expNav.classList.add("hidden");
    }
  });

  toggle.addEventListener("click", () => {
    if (expNav.classList.contains("hidden")) {
      expNav.classList.remove("hidden");
      expNav.classList.add("flex");
    } else {
      expNav.classList.remove("flex");
      expNav.classList.add("hidden");
    }
  });
};

handleNavbarMenu();

// Latest Work Images

const ltwDivs = document.querySelectorAll(".ltw");

ltwDivs.forEach((ltwDiv) => {
  const ltwContent = ltwDiv.querySelector(".ltw-content");
  const imgTargets = ltwDiv.querySelectorAll("img[data-frame]");
  ltwDiv.addEventListener("mouseover", (e) => {
    // ltwContent.classList.add("hidden");
    ltwContent.classList.remove("z-40");
    imgTargets.forEach((entry) => {
      // Replace src with data-frame
      entry.dataset.originalSrc = entry.src; // Save the original src
      entry.src = entry.dataset.frame;
      entry.classList.add("scroll-up");
    });
  });

  ltwDiv.addEventListener("mouseout", (e) => {
    // ltwContent.classList.remove("hidden");
    ltwContent.classList.add("z-40");
    imgTargets.forEach((entry) => {
      // Restore original src
      entry.src = entry.dataset.originalSrc;
      entry.classList.remove("scroll-up");
    });
  });
});
