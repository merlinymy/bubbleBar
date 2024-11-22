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
// contentDiv.classList.add("fade-in", "fade-out");
let isPopUpNav = false;

homeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // toggleMenu(false);
    contentDiv.innerHTML = "";
    contentDiv.append(buildHeadSec(), buildAboutSec(), buildHourSec(), buildFooter());
    animateBubbles();
    drawPhoto();
    if (isPopUpNav) {
        toggleMenu(false);
    }
});

for (const btn of cocktailBtns) {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
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
        if (isPopUpNav) {
            toggleMenu(false);
        }
        contentDiv.innerHTML = "";
        contentDiv.append(buildMenu('beerNWine').menuTitleDiv, buildMenu('beerNWine').menuWrapper);
    })
}

contentDiv.append(buildHeadSec(), buildAboutSec(),
buildHourSec(), buildFooter());

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


