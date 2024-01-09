"use strict";

//////////////////////////////
// Navigation functionality //
//////////////////////////////

const navAbout = document.querySelector(".btn-navigation-about");
const navProjects = document.querySelector(".btn-navigation-projects");
const aboutSection = document.querySelector(".about-me-section");
const projectsSection = document.querySelector(".projects-section");
const navEfect = document.querySelector(".nav-line");

navAbout.addEventListener("click", function (e) {
  navEfect.classList.add("about");
  navEfect.classList.remove("projects");

  navEfect.style.width = `${e.currentTarget.getBoundingClientRect().width}px`;

  aboutSection.classList.remove("element-will-desapear-if-not-in-screen");

  aboutSection.classList.add("element-will-show");
  setTimeout(() => {
    aboutSection.classList.remove("carrousel-hidden");
    aboutSection.classList.remove("container-left");
  }, 10);

  projectsSection.classList.add("carrousel-hidden");
  projectsSection.classList.add("container-right");
  projectsSection.classList.add("element-will-desapear-if-not-in-screen");
});

navProjects.addEventListener("click", function (e) {
  navEfect.classList.add("projects");
  navEfect.classList.remove("about");

  navEfect.style.width = `${e.currentTarget.getBoundingClientRect().width}px`;

  projectsSection.classList.remove("element-will-desapear-if-not-in-screen");

  setTimeout(() => {
    projectsSection.classList.remove("carrousel-hidden");
    projectsSection.classList.remove("container-right");
  }, 10);

  aboutSection.classList.add("carrousel-hidden");
  aboutSection.classList.remove("element-will-show");
  aboutSection.classList.add("container-left");
  aboutSection.classList.add("element-will-desapear-if-not-in-screen");
});

//////////////////////////////
// Carrousell Useful Classes //
//////////////////////////////

function addRightClasses(slide) {
  slide.classList.remove("element-will-desapear-if-not-in-screen");
  setTimeout(() => {
    slide.classList.add("element-right", "element-showed");
  }, 10);
}

function addLeftClasses(slide) {
  slide.classList.remove("element-will-desapear-if-not-in-screen");
  setTimeout(() => {
    slide.classList.add("element-left", "element-showed");
  }, 10);
}

function removeAllClasses(slide) {
  slide.classList.remove("element-left", "element-showed", "element-right");

  slide.classList.add("element-will-desapear-if-not-in-screen");
}

// Drag functionality

let startX;
let currentIndex = 0;

const calcIndexSlideAbout = (mouseDragX, mouseDragY) => {
  if (mouseDragX > 50) {
    if (mouseDragX > mouseDragY) {
      if (slideIndexAbout == slidesAbout.length - 1) {
        slideIndexAbout = 0;
      } else {
        slideIndexAbout++;
      }
    }
  } else if (mouseDragX < -50) {
    if (mouseDragX < mouseDragY) {
      if (slideIndexAbout == 0) {
        slideIndexAbout = slidesAbout.length - 1;
      } else {
        slideIndexAbout--;
      }
    }
  } else {
    return "failed";
  }

  updateSlideClassesAbout();
};

const calcIndexSlideProjects = (mouseDragX, mouseDragY) => {
  if (mouseDragX > 50) {
    if (mouseDragX > mouseDragY) {
      if (slideIndexProjects == slidesProjects.length - 1) {
        slideIndexProjects = 0;
      } else {
        slideIndexProjects++;
      }
    }
  } else if (mouseDragX < -50) {
    if (mouseDragX < mouseDragY) {
      if (slideIndexProjects == 0) {
        slideIndexProjects = slidesProjects.length - 1;
      } else {
        slideIndexProjects--;
      }
    }
  } else {
    return "failed";
  }

  updateSlideClassesProjects();
};

let disableDrag = function (boxSlide) {
  boxSlide.removeEventListener("mousedown", handleDragStartOrTouchStart);
  boxSlide.removeEventListener("mouseup", handleDragEndOrTouchEnd);
  boxSlide.removeEventListener("touchstart", handleDragStartOrTouchStart);
  boxSlide.removeEventListener("touchend", handleDragEndOrTouchEnd);

  setTimeout(function () {
    boxSlide.addEventListener("mousedown", handleDragStartOrTouchStart, {
      passive: true,
    });
    boxSlide.addEventListener("mouseup", handleDragEndOrTouchEnd, {
      passive: true,
    });
    boxSlide.addEventListener("touchstart", handleDragStartOrTouchStart, {
      passive: true,
    });
    boxSlide.addEventListener("touchend", handleDragEndOrTouchEnd, {
      passive: true,
    });
  }, 500);
};

let startPositionX;
let startPositionY;

function handleDragStartOrTouchStart(e) {
  const isTouch = e.type.startsWith("touch");

  const startX = isTouch ? e.touches[0].pageX : e.pageX;
  const startY = isTouch ? e.touches[0].pageY : e.pageY;

  startPositionX = startX;
  startPositionY = startY;
}

function handleDragEndOrTouchEnd(e) {
  const isTouch = e.type.startsWith("touch");

  const endX = isTouch ? e.changedTouches[0].pageX : e.pageX;
  const endY = isTouch ? e.changedTouches[0].pageY : e.pageY;

  const dragDistanceX = endX - startPositionX;
  const dragDistanceY = endY - startPositionY;

  // const isHorizontalDrag =
  //   Math.abs(dragDistance) >
  //   Math.abs(e.changedTouches[0].pageY - startPositionX);

  // if (!isHorizontalDrag) return;

  // console.log("passou");

  if (e.currentTarget === boxSlidesAbout) {
    const status = calcIndexSlideAbout(dragDistanceX, dragDistanceY);

    if (status === "failed") {
      return;
    }
  }

  if (e.currentTarget === boxSlidesProjects) {
    const status = calcIndexSlideProjects(dragDistanceX, dragDistanceY);

    if (status === "failed") {
      return;
    }
  }

  disableDrag(e.currentTarget);
}

//End

//////////////////////////////////
// Images Projects functionality //
//////////////////////////////////

const imgsProject = [...document.querySelectorAll(".image-project-effect")];

const addImage = function (imgEl) {
  document.body.appendChild(imgEl);

  setTimeout(() => {
    imgEl.style.opacity = 0.1;
  }, 200);
};

const removeImage = function (imgEl) {
  imgEl.style.opacity = 0;

  setTimeout(() => {
    imgEl.remove();
  }, 400);
};

imgsProject.forEach((img) => {
  const imgFile = img.src;
  const imgEl = document.createElement("img");
  imgEl.src = imgFile;
  imgEl.classList.add("img-highlited-project-hover");

  img.addEventListener("mouseenter", function (e) {
    setTimeout(() => {
      addImage(imgEl);
    }, 100);
  });

  img.addEventListener("touchstart", function (e) {
    setTimeout(() => {
      addImage(imgEl);
    }, 100);
  });

  img.addEventListener("mouseleave", function (e) {
    setTimeout(() => {
      removeImage(imgEl);
    }, 100);
  });

  img.addEventListener("touchend", function (e) {
    setTimeout(() => {
      removeImage(imgEl);
    }, 100);
  });
});

//////////////////////////////////
// Carrousell functionality ABOUT //
//////////////////////////////////

const boxSlidesAbout = document.querySelector(".box-slides-about");
const slidesAbout = document.querySelectorAll(".box-slide-about");
const btnRightAbout = document.querySelector(".btn-right-about");
const btnLeftAbout = document.querySelector(".btn-left-about");

let slideIndexAbout = 0;

//Drag functionallity
boxSlidesAbout.addEventListener("mousedown", handleDragStartOrTouchStart);
boxSlidesAbout.addEventListener("mouseup", handleDragEndOrTouchEnd);

boxSlidesAbout.addEventListener("touchstart", handleDragStartOrTouchStart);
boxSlidesAbout.addEventListener("touchend", handleDragEndOrTouchEnd);

let disableButton1s = function (btn) {
  btn.disabled = true;

  setTimeout(function () {
    btn.disabled = false;
  }, 500);
};

function updateSlideClassesAbout() {
  slidesAbout.forEach((element) => {
    removeAllClasses(element);
  });

  for (let index = 0; index < slidesAbout.length; index++) {
    const slide = slidesAbout[index];

    if (index === slideIndexAbout) {
      slide.classList.add("element-showed");
      slide.classList.remove("element-will-desapear-if-not-in-screen");

      if (index === 0) {
        addLeftClasses(slidesAbout[slidesAbout.length - 1]);
        addRightClasses(slidesAbout[index + 1]);
        slide.classList.remove("element-will-desapear-if-not-in-screen");
      } else if (index === slidesAbout.length - 1) {
        addLeftClasses(slidesAbout[index - 1]);
        addRightClasses(slidesAbout[0]);
        slide.classList.remove("element-will-desapear-if-not-in-screen");
      } else {
        addLeftClasses(slidesAbout[index - 1]);
        addRightClasses(slidesAbout[index + 1]);
        slide.classList.remove("element-will-desapear-if-not-in-screen");
      }

      break;
    }
  }
}

function nextSlideAbout() {
  disableButton1s(btnRightAbout);

  slideIndexAbout++;
  if (slideIndexAbout >= slidesAbout.length) {
    slideIndexAbout = 0;
  }
  updateSlideClassesAbout();
}

function previousSlideAbout() {
  disableButton1s(btnLeftAbout);

  slideIndexAbout--;
  if (slideIndexAbout < 0) {
    slideIndexAbout = slidesAbout.length - 1;
  }
  updateSlideClassesAbout();
}

btnRightAbout.addEventListener("click", nextSlideAbout);
btnLeftAbout.addEventListener("click", previousSlideAbout);

updateSlideClassesAbout();

if (!boxSlidesAbout.classList.contains("carrousel-hidden")) {
  document.addEventListener("keydown", function (e) {
    switch (e.key) {
      case "ArrowLeft":
        previousSlideAbout();
        break;
      case "ArrowRight":
        nextSlideAbout();
        break;
    }
  });
}

//////////////////////////////////
// Carrousell functionality PROJECTS //
//////////////////////////////////

const boxSlidesProjects = document.querySelector(".box-slides-projects");
const slidesProjects = document.querySelectorAll(".box-slide-projects");
const btnRightProjects = document.querySelector(".btn-right-projects");
const btnLeftProjects = document.querySelector(".btn-left-projects");

let slideIndexProjects = 0;

//Drag functionallity
boxSlidesProjects.addEventListener("mousedown", handleDragStartOrTouchStart);
boxSlidesProjects.addEventListener("mouseup", handleDragEndOrTouchEnd);

boxSlidesProjects.addEventListener("touchstart", handleDragStartOrTouchStart);
boxSlidesProjects.addEventListener("touchend", handleDragEndOrTouchEnd);

function updateSlideClassesProjects() {
  slidesProjects.forEach((element) => {
    removeAllClasses(element);
  });

  for (let index = 0; index < slidesProjects.length; index++) {
    const slide = slidesProjects[index];

    if (index === slideIndexProjects) {
      slide.classList.add("element-showed");

      if (index === 0) {
        addLeftClasses(slidesProjects[slidesProjects.length - 1]);
        addRightClasses(slidesProjects[index + 1]);
      } else if (index === slidesProjects.length - 1) {
        addLeftClasses(slidesProjects[index - 1]);
        addRightClasses(slidesProjects[0]);
      } else {
        addLeftClasses(slidesProjects[index - 1]);
        addRightClasses(slidesProjects[index + 1]);
      }

      break;
    }
  }
}

function nextSlideProjects() {
  disableButton1s(btnRightProjects);

  slideIndexProjects++;
  if (slideIndexProjects >= slidesProjects.length) {
    slideIndexProjects = 0;
  }
  updateSlideClassesProjects();
}

function previousSlideProjects() {
  disableButton1s(btnLeftProjects);

  slideIndexProjects--;
  if (slideIndexProjects < 0) {
    slideIndexProjects = slidesProjects.length - 1;
  }
  updateSlideClassesProjects();
}

btnRightProjects.addEventListener("click", nextSlideProjects);
btnLeftProjects.addEventListener("click", previousSlideProjects);

if (!boxSlidesProjects.classList.contains("carrousel-hidden")) {
  document.addEventListener("keydown", function (e) {
    switch (e.key) {
      case "ArrowLeft":
        previousSlideProjects();
        break;
      case "ArrowRight":
        nextSlideProjects();
        break;
    }
  });
}

updateSlideClassesProjects();

//End

//////////////////////////////
// Dark-mode functionality //
//////////////////////////////

const themeToggle = document.getElementById("theme-toggle");
document.documentElement.style.setProperty("--dark-color", "#080202");

themeToggle.addEventListener("click", function () {
  if (
    document.documentElement.style.getPropertyValue("--dark-color") == "#080202"
  ) {
    ativarModoClaro();
  } else {
    ativarModoNoturno();
  }
});

function ativarModoNoturno() {
  document.body.classList.remove("modo-claro");
  document.documentElement.style.setProperty("--dark-color", "#080202");
  document.documentElement.style.setProperty("--white-color", "#fefbfc");
}

function ativarModoClaro() {
  document.body.classList.add("modo-claro");

  document.documentElement.style.setProperty("--dark-color", "#fefbfc");
  document.documentElement.style.setProperty("--white-color", "#080202");
}

//End

//////////////////////////////
// Technology-section //
//////////////////////////////

const technologyBox = document.querySelector(".img-box-technologies");
const technologiesImgs = document.querySelectorAll(".img-technology");
const technolgiesItems = document.querySelectorAll(".tecnology-item");
const contentTechnolgies = document.querySelector(
  ".content-technolgies-info-box"
);

technologiesImgs.forEach((elem) => {
  elem.addEventListener("mouseenter", function (e) {
    const id = e.target.id;

    const imageBoxTech = document.querySelector(`.${id}-tech`);
    const containerRect = contentTechnolgies.getBoundingClientRect();
    const listItemRect = imageBoxTech.getBoundingClientRect();

    if (listItemRect.bottom > containerRect.bottom) {
      contentTechnolgies.scrollTop +=
        listItemRect.bottom - containerRect.bottom;

      console.log("bottom");
    } else if (listItemRect.top < containerRect.top) {
      contentTechnolgies.scrollTop += listItemRect.top - containerRect.top - 10;

      console.log("top");
    }

    imageBoxTech.classList.add("technology-highlighted");
  });
});

technologiesImgs.forEach((elem) => {
  elem.addEventListener("mouseleave", function (e) {
    technolgiesItems.forEach((elem) => {
      elem.classList.remove("technology-highlighted");
    });
  });
});

//End

//////////////////////////////////
// Certification & Achivments funcionality //
//////////////////////////////////

const listCertificates = document.querySelector(".list");

listCertificates.addEventListener("click", function (e) {
  const target = e.target.closest(".list-dropdown");

  if (!target.classList.contains("list-dropdown")) return;

  const icon = target.querySelector(".ph");
  const listDescription = target.querySelector(".list-description");

  if (target.classList.contains("opened-list")) {
    target.classList.remove("opened-list");
    icon.classList.add("ph-caret-down");
    icon.classList.remove("ph-caret-up");

    listDescription.style.transition = "0.15s all";

    listDescription.classList.add("description-not-showed");
  } else {
    target.classList.add("opened-list");
    icon.classList.remove("ph-caret-down");
    icon.classList.add("ph-caret-up");

    listDescription.style.transition = "0.5s all";

    listDescription.classList.remove("description-not-showed");
  }
});
