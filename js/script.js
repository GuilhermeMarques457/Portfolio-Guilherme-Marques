"use strict";

//////////////////////////////
// Carrousell functionality //
//////////////////////////////
const boxSlides = document.querySelector(".box-slides");
const slides = document.querySelectorAll(".box-slide");
const btnRight = document.querySelector(".btn-right");
const btnLeft = document.querySelector(".btn-left");

let slideIndex = 0;

function updateSlideClasses() {
  slides.forEach((element) => {
    removeAllClasses(element);
  });

  for (let index = 0; index < slides.length; index++) {
    const slide = slides[index];

    if (index === slideIndex) {
      slide.classList.add("element-showed");

      if (index === 0) {
        addLeftClasses(slides[slides.length - 1]);
        addRightClasses(slides[index + 1]);
      } else if (index === slides.length - 1) {
        addLeftClasses(slides[index - 1]);
        addRightClasses(slides[0]);
      } else {
        addLeftClasses(slides[index - 1]);
        addRightClasses(slides[index + 1]);
      }

      break;
    }
  }
}

function addRightClasses(slide) {
  slide.classList.add("element-right", "element-showed");
}

function addLeftClasses(slide) {
  slide.classList.add("element-left", "element-showed");
}

function removeAllClasses(slide) {
  slide.classList.remove("element-left", "element-showed", "element-right");
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  updateSlideClasses();
}

function previousSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  updateSlideClasses();
}

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", previousSlide);

updateSlideClasses();

//End

//////////////////////////////
// Dark-mode functionality //
//////////////////////////////

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
  if (document.body.classList.contains("modo-claro")) {
    ativarModoClaro();
  } else {
    ativarModoNoturno();
  }
});

function ativarModoNoturno() {
  document.body.classList.add("modo-claro");
}

function ativarModoClaro() {
  document.body.classList.remove("modo-claro");
}

//End
