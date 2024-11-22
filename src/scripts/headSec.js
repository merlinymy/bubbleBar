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
import warp_core_breach from "../photos/flux/cocktails/warp_core_breach.png";
import vulcan_mind_meld from "../photos/flux/cocktails/vulcan_mind_meld.png";
import romulan_ale from "../photos/flux/cocktails/romulan_ale.png";
import klingon_bloodwine from "../photos/flux/cocktails/klingon_bloodwine.png";
import holodeck_hologram from "../photos/flux/cocktails/holodeck_hologram.png";
import nebula_nectar from "../photos/flux/cocktails/nebula_nectar.png";
import ferengi_gold_press from "../photos/flux/cocktails/ferengi_gold_press.png";
import andorian_frost from "../photos/flux/cocktails/andorian_frost.png";
import trill_symbiosis from "../photos/flux/cocktails/trill_symbiosis.png";
import borg_assimilation from "../photos/flux/cocktails/borg_assimilation.png";
import q_continuum from "../photos/flux/cocktails/q_continuum.png";
import temporal_distortion from "../photos/flux/cocktails/temporal_distortion.png";
import starfleet_martini from "../photos/flux/cocktails/starfleet_martini.png";
import betazoid_bliss from "../photos/flux/cocktails/betazoid_bliss.png";
import mirror_universe from "../photos/flux/cocktails/mirror_universe.png";
import synthehol_lager from "../photos/flux/beerNWine/synthehol_lager.png";
import klingon_ale from "../photos/flux/beerNWine/klingon_ale.png";
import andorian_pale_ale from "../photos/flux/beerNWine/andorian_pale_ale.png";
import romulan_stout from "../photos/flux/beerNWine/romulan_stout.png";
import bajoran_wheat_beer from "../photos/flux/beerNWine/bajoran_wheat_beer.png";
import vulcan_red from "../photos/flux/beerNWine/vulcan_red.png";
import betazed_rose from "../photos/flux/beerNWine/betazed_rose.png";
import cardassian_noir from "../photos/flux/beerNWine/cardassian_noir.png";
import risan_white from "../photos/flux/beerNWine/risan_white.png";

const buildHeadSec = function(){

    const pics = [warp_core_breach, vulcan_mind_meld, romulan_ale,
        klingon_bloodwine, holodeck_hologram, nebula_nectar, ferengi_gold_press,
        andorian_frost, trill_symbiosis, borg_assimilation, q_continuum,
        temporal_distortion, starfleet_martini, betazoid_bliss, mirror_universe,
        synthehol_lager, klingon_ale, andorian_pale_ale,
        romulan_stout, bajoran_wheat_beer, vulcan_red, betazed_rose,
        cardassian_noir, risan_white];

        console.log(pics.length)

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

    const picDiv = document.createElement("div");
    picDiv.classList.add("pic-grid");

    const picGridWrap = document.createElement("div");
    picGridWrap.classList.add("pic-grid-wrap");

    for (let pic of pics) {
        const drinkPic = document.createElement("img");
        drinkPic.src = pic;
        drinkPic.classList.add("drink-pic");
        picDiv.append(drinkPic);
    }

    picGridWrap.append(picDiv);
    
    headSec.append(bubbleCanvas, title, picGridWrap);
    return headSec;
}

export {buildHeadSec};
