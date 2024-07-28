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

// Navbar

const handleNavbar = function () {
  const header = document.querySelector("header");
  const nav = header.querySelector("nav");
  const expNav = header.querySelector("#expanded-navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  document.addEventListener("scroll", () => {
    if (window.scrollY <= 99) {
      nav.classList.add("h-20");
      nav.classList.remove("h-16");
      expNav.classList.add("top-20");
      expNav.classList.remove("top-16");
      navLinks.forEach((link) => link.classList.remove("text-greenText"));
    } else {
      nav.classList.remove("h-20");
      nav.classList.add("h-16");
      expNav.classList.remove("top-20");
      expNav.classList.add("top-16");
      navLinks.forEach((link) => link.classList.add("text-greenText"));
    }
  });

  header.addEventListener("click", (e) => {
    if (!e.target.classList.contains("nav-link")) return;
    navLinks.forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");
  });
};
handleNavbar();

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

// Reveal Sections

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1, // Increased threshold
  rootMargin: "300px", // Increased root margin
});

// Observe each section
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");

  // Manually trigger the reveal if already in view
  if (section.getBoundingClientRect().top < window.innerHeight) {
    section.classList.remove("section--hidden");
    sectionObserver.unobserve(section);
  }
});
