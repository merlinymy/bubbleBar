import "./styles.css";
import 'material-icons/iconfont/material-icons.css';
import {buildSideMenu} from "./scripts/sideMenu.js";
import {animateBubbles} from "./scripts/animate.js";
const menuBtn = document.querySelector(".menu-icon");

menuBtn.addEventListener("click", (event) => {
    event.preventDefault();
});

animateBubbles();


