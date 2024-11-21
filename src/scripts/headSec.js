import martini from "../photos/martini.png";
import coconuts from "../photos/coconuts.png";
import darkness from "../photos/darkness.png";
import rainbow from "../photos/rainbow.png";
import bloody from "../photos/bloody.png";
import peach from "../photos/peach.png";
import fruity from "../photos/fruity.png";
import burger from "../photos/burgerFries.png";
import tots from "../photos/tots.png";
import almond from "../photos/almond.png";
import lime from "../photos/lime.png";
import redwine from "../photos/redwine.png";
import whitewine from "../photos/whitewine.png";
import gin1 from "../photos/gin1.png";
import gin2 from "../photos/gin2.png";
import "../styles/headsec.css";

const buildHeadSec = function(){

    const pics = [martini, coconuts, darkness, rainbow, bloody,
        peach, fruity, almond, lime, redwine, whitewine, gin1, gin2
    ]

    const headSec = document.createElement("section");
    
    headSec.classList.add("head");
    
    const bubbleCanvas = document.createElement("canvas");
    bubbleCanvas.id = "bubbleCanvas";
    
    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "WHERE GOOD TIME RISE TO THE TOP";

    const subTitle = document.createElement("p");
    subTitle.classList.add("sub-title");
    subTitle.textContent = "Locally Sourced × Crafted with Love";
    
    const almondPic = document.createElement("img");
    almondPic.src = peach;
    almondPic.id = "almond";
    almondPic.classList.add("drinks");
    almondPic.alt = "almond drink";
    
    const coconutDrink = document.createElement("img");
    coconutDrink.src = rainbow;
    coconutDrink.id = "fruity";
    coconutDrink.classList.add("drinks");
    coconutDrink.alt = "fruit drink";

    
    headSec.append(bubbleCanvas, title, almondPic, coconutDrink);
    return headSec;
}

export {buildHeadSec};
