import "./styles.css";
import 'material-icons/iconfont/material-icons.css';
import {animateBubbles} from "./scripts/animate.js";
import { drawPhoto } from "./scripts/drawPhotos.js";
import { toggleMenu } from "./scripts/utils.js";
import { buildHeadSec } from "./scripts/headSec.js";
import { buildAboutSec } from "./scripts/aboutSec.js";
import { buildHourSec } from "./scripts/hoursSec.js";
import { buildFooter } from "./scripts/footerSec.js";
import { test } from "./scripts/cocktailMenu.js";
import { buildBeerWineMenu, buildCocktailMenu, buildFoodMenu, buildSpiritMenu } 
from "./scripts/cocktailMenu.js";

const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");
const contentDiv = document.querySelector("#content");
const cocktailBtns = document.querySelectorAll(".cocktail");
const homeBtn = document.querySelector(".bar-name");
const body = document.querySelector("body");
// contentDiv.classList.add("fade-in", "fade-out");
let isPopUpNav = false;

homeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // toggleMenu(false);
    contentDiv.innerHTML = "";
    contentDiv.append(buildHeadSec(), buildAboutSec(),
                        buildHourSec(), buildFooter());
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
        contentDiv.append(buildCocktailMenu());
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


