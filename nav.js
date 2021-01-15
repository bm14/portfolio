const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const heros = document.querySelectorAll("#hero .hero");
  const card = document.querySelector(".cards");
  const title = document.querySelector(".page-main-title");
  const hero = document.querySelector(".hero");
  const mainContent = document.querySelector(".main-content");
  const heroCv = document.getElementById("hero");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    if (nav.classList.contains("nav-active")) {
      hero.style.height = "100vh";
      mainContent.style.display = "none";
    } else {
      mainContent.style.display = "";
      hero.style.height = "";
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
