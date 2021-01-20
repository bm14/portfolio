const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const cvMainContent = document.querySelector(".cv-main-content");
  const heroCv = document.getElementById("hero");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    if (nav.classList.contains("nav-active")) {
      heroCv.style.height = "100vh";
      cvMainContent.style.display = "none";
    } else {
      cvMainContent.style.display = "";
      heroCv.style.height = "100vh";
    }

    //burger toggle animation
    burger.classList.toggle("toggle-btn");

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.2}s`;
      }
    });
  });
};

navSlide();
