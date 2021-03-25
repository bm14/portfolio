const cvBtnContainer = document.getElementById("cv-btn-container");
const heroContainer = document.getElementById("hero");
const mainInfo = document.getElementById("cv-main-info");
// const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const x = document.getElementById("toggle-dev");
const y = document.getElementById("toggle-employment");
const z = document.getElementById("toggle-contact");
// const a = document.getElementById("toggle-aboutme");
const cvAboutMe = document.getElementById("cv-main-info");

const bcgGradient =
  'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./images/home-bg.jpg") center/cover no-repeat';

function toggleDev(one, two, three) {
  if (one.style.display === "none" || one.style.display === "") {
    one.style.display = "block";
    two.style.display = "none";
    three.style.display = "none";
    mainInfo.style.display = "none";
    cvAboutMe.style.display = "none";
    cvBtnContainer.style.margin = "0rem";
    hero.style.height = "100vh";
    heroContainer.style.background = bcgGradient;
  } else {
    one.style.display = "none";
    // window.innerWidth > 583
    //   ? (cvAboutMe.style.display = "block")
    //   : (cvAboutMe.style.display = "none");
     mainInfo.style.display = "block";
    // cvAboutMe.style.display = "";
    cvBtnContainer.style.margin = "10rem 0rem 0rem 0rem";
    heroContainer.style.background =
      'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("./images/home-bg.jpg") center/cover no-repeat';
  }
}
// const width = [582];

// function addButton() {
//   if (window.innerWidth <= width) {
//     cvAboutMe.style.display = "none";
//     btn0.style.display = "block";
//   }
//   window.onresize = addButton;
// }
// function removeButton() {
//   if (window.innerWidth > width) {
//     btn0.style.display = "none";
//     cvAboutMe.style.display = "block";
//   }
//   window.onresize = removeButton;
// }
// function showButton() {
//   if (window.innerWidth <= width) {
//     cvAboutMe.style.display = "none";
//     btn0.style.display = "block";
//   } else if (window.innerWidth > width) {
//     btn0.style.display = "none";
//     cvAboutMe.style.display = "block";
//   }
//   window.onresize = showButton;
// }

// removeButton();
// addButton();

// Event Listeners - CV Page

btn1.addEventListener("click", () => {
  toggleDev(x, y, z);
  heroContainer.style.overflow = "hidden";
});
btn2.addEventListener("click", () => {
  toggleDev(y, z, x);
  heroContainer.style.overflow = "hidden";
});
btn3.addEventListener("click", () => {
  toggleDev(z, x, y);
  heroContainer.style.overflow = "hidden";
});
// btn0.addEventListener("click", () => {
//   toggleDev(a, x, y, z);
//   heroContainer.style.overflow = "hidden";
// });

// extra button for about me when screen is below 590px
// showButton();
