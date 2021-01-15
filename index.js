const cvBtnContainer = document.getElementById("cv-btn-container");
const heroContainer = document.getElementById("hero");
const mainInfo = document.getElementById("cv-main-info");

function toggleDev() {
  const x = document.getElementById("toggle-dev");
  const y = document.getElementById("toggle-employment");
  const z = document.getElementById("toggle-contact");

  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
    mainInfo.style.display = "none";
    cvBtnContainer.style.margin = "0rem";
    hero.style.height = "105vh";
    heroContainer.style.background =
      'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./images/home-bg.jpg") center/cover no-repeat';
  } else {
    x.style.display = "none";
    mainInfo.style.display = "block";
    cvBtnContainer.style.margin = "10rem 0rem 0rem 0rem";
    heroContainer.style.background =
      'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("./images/home-bg.jpg") center/cover no-repeat';
  }
}
function toggleEmployment() {
  const x = document.getElementById("toggle-dev");
  const y = document.getElementById("toggle-employment");
  const z = document.getElementById("toggle-contact");
  if (y.style.display === "none" || y.style.display === "") {
    y.style.display = "block";
    x.style.display = "none";
    z.style.display = "none";
    mainInfo.style.display = "none";
    cvBtnContainer.style.margin = "0rem";
    heroContainer.style.background =
      '-moz-linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./images/home-bg.jpg") center/cover no-repeat';
  } else {
    y.style.display = "none";
    cvBtnContainer.style.margin = "10rem 0rem 0rem 0rem";
    mainInfo.style.display = "block";
    heroContainer.style.background =
      '-moz-linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("./images/home-bg.jpg") center/cover no-repeat';
  }
}
function toggleContact() {
  const x = document.getElementById("toggle-dev");
  const y = document.getElementById("toggle-employment");
  const z = document.getElementById("toggle-contact");
  if (z.style.display === "none" || z.style.display === "") {
    z.style.display = "block";
    x.style.display = "none";
    y.style.display = "none";
    mainInfo.style.display = "none";
    cvBtnContainer.style.margin = "0rem";
    heroContainer.style.background =
      '-moz-linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./images/home-bg.jpg") center/cover no-repeat';
  } else {
    z.style.display = "none";
    mainInfo.style.display = "block";
    cvBtnContainer.style.margin = "10rem 0rem 0rem 0rem";
    heroContainer.style.background =
      '-moz-linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("./images/home-bg.jpg") center/cover no-repeat';
  }
}
