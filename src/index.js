import "./styles.css";
import 'material-icons/iconfont/material-icons.css';
import {animateBubbles} from "./scripts/animate.js";
import { drawPhoto } from "./scripts/drawPhotos.js";
import { toggleMenu } from "./scripts/utils.js";
import { buildHeadSec } from "./scripts/headSec.js";
import { buildAboutSec } from "./scripts/aboutSec.js";
import { buildHourSec } from "./scripts/hoursSec.js";
import { buildFooter } from "./scripts/footerSec.js";
import { buildMenu } from "./scripts/cocktailMenu.js";

const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");
const contentDiv = document.querySelector("#content");
const cocktailBtns = document.querySelectorAll(".cocktail");
const beerBtns = document.querySelectorAll(".beer");
const spiritBtns = document.querySelectorAll(".spirit");
const foodBtns = document.querySelectorAll(".food");
const homeBtn = document.querySelector(".bar-name");
const body = document.querySelector("body");
const linkedinIcon = document.querySelector("linked-in-icon");

// contentDiv.classList.add("fade-in", "fade-out");
let isPopUpNav = false;

const scrollToTop = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

homeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // toggleMenu(false);
    contentDiv.innerHTML = "";
    contentDiv.append(buildHeadSec(), buildAboutSec(), buildHourSec());
    animateBubbles();
    drawPhoto();
    if (isPopUpNav) {
        toggleMenu(false);
    }
    scrollToTop();
});

for (const btn of cocktailBtns) {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToTop();
        if (isPopUpNav) {
            toggleMenu(false);
        }
        contentDiv.innerHTML = "";
        contentDiv.append(buildMenu('cocktail').menuTitleDiv, buildMenu('cocktail').menuWrapper);
    })
}

for (const btn of spiritBtns) {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToTop();
        if (isPopUpNav) {
            toggleMenu(false);
        }
        contentDiv.innerHTML = "";
        contentDiv.append(buildMenu('spirit').menuTitleDiv, buildMenu('spirit').menuWrapper);
    })
}

for (const btn of foodBtns) {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToTop();
        if (isPopUpNav) {
            toggleMenu(false);
        }
        contentDiv.innerHTML = "";
        contentDiv.append(buildMenu('food').menuTitleDiv, buildMenu('food').menuWrapper);
    })
}

for (const btn of beerBtns) {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToTop();
        if (isPopUpNav) {
            toggleMenu(false);
        }
        contentDiv.innerHTML = "";
        contentDiv.append(buildMenu('beerNWine').menuTitleDiv, buildMenu('beerNWine').menuWrapper);
    })
}

contentDiv.append(buildHeadSec(), buildAboutSec(),
buildHourSec());

menuBtn.addEventListener("click", () => {
    toggleMenu(true);
    isPopUpNav = true;
});

closeBtn.addEventListener("click", () => {
    toggleMenu(false);
    isPopUpNav = false;
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 720) {
        isPopUpNav = false;
        toggleMenu(false);
    }
    
    if (!isPopUpNav) {
        body.classList.remove("noscroll");
    }

})


animateBubbles();
drawPhoto();


