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

const drawPhoto = function () {
    const headSec = document.querySelector(".head");
    const canvas = /** @type {HTMLCanvasElement} */(document.getElementById('bubbleCanvas'));
    const ctx = canvas.getContext('2d');
    canvas.width = headSec.offsetWidth;
    canvas.height = headSec.offsetHeight;
    const images = [almond, bloody, burger, rainbow, peach, fruity, 
        martini, coconuts, darkness, tots, lime, redwine, whitewine, gin1, gin2];

    // const test = new Image();
    // test.src = images[0];
    // test.addEventListener("load", (e) => {
    //     ctx.drawImage(test, 0,0);
    //   });
    for (let img of images) {
        const draw = new Image();
        draw.src = img;
        draw.addEventListener("load", () => {
            ctx.drawImage(draw, 0, 0);
        })
        // ctx.drawImage(draw, Math.floor(Math.random() * canvas.width), 
        // Math.floor(Math.random() * canvas.height));
    }
    
}

export {drawPhoto};