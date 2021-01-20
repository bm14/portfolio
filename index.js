const cvBtnContainer = document.getElementById("cv-btn-container");
const heroContainer = document.getElementById("hero");
const mainInfo = document.getElementById("cv-main-info");
const x = document.getElementById("toggle-dev");
const y = document.getElementById("toggle-employment");
const z = document.getElementById("toggle-contact");
const bcgGradient =
  'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./images/home-bg.jpg") center/cover no-repeat';

function toggleDev(one, two, three) {
  if (one.style.display === "none" || one.style.display === "") {
    one.style.display = "block";
    two.style.display = "none";
    three.style.display = "none";
    mainInfo.style.display = "none";
    cvBtnContainer.style.margin = "0rem";
    hero.style.height = "105vh";
    heroContainer.style.background = bcgGradient;
  } else {
    one.style.display = "none";
    mainInfo.style.display = "block";
    cvBtnContainer.style.margin = "10rem 0rem 0rem 0rem";
    heroContainer.style.background =
      'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("./images/home-bg.jpg") center/cover no-repeat';
  }
}
toggleDev();
