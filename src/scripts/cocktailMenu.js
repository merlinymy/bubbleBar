import menu from "../data/menu.json";
import "../styles/foodmenu.css";
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
import terran_chardonnay from "../photos/flux/beerNWine/terran_chardonnay.png";

import vulcan_firewater from "../photos/flux/spirits/vulcan_firewater.png";
import klingon_gagh_vodka from "../photos/flux/spirits/klingon_gagh_vodka.png";
import andorian_ice_whisky from "../photos/flux/spirits/andorian_ice_whisky.png";
import romulan_flame from "../photos/flux/spirits/romulan_flame.png";
import ferengi_profit_brandy from "../photos/flux/spirits/ferengi_profit_brandy.png";

import plomeek_soup from "../photos/flux/food/plomeek_soup.png";
import hasperat_wrap from "../photos/flux/food/hasperat_wrap.png";
import gagh_platter from "../photos/flux/food/gagh_platter.png";
import tribble_tacos from "../photos/flux/food/tribble_tacos.png";
import photon_fries from "../photos/flux/food/photon_fries.png";
import warp_speed_wings from "../photos/flux/food/warp_speed_wings.png";
import tribble_chicken_strips from "../photos/flux/food/tribble_chicken_strips.png";


const foodList = [plomeek_soup, hasperat_wrap, gagh_platter,
    tribble_tacos, photon_fries, warp_speed_wings,tribble_chicken_strips
];

const spiritList = [vulcan_firewater, klingon_gagh_vodka, andorian_ice_whisky,
    romulan_flame, ferengi_profit_brandy];

const beerWine = [synthehol_lager, klingon_ale, andorian_pale_ale,
    romulan_stout, bajoran_wheat_beer, vulcan_red, betazed_rose,
    cardassian_noir, risan_white, terran_chardonnay];

const cocktailList = [warp_core_breach, vulcan_mind_meld, romulan_ale,
    klingon_bloodwine, holodeck_hologram, nebula_nectar, ferengi_gold_press,
    andorian_frost, trill_symbiosis, borg_assimilation, q_continuum,
    temporal_distortion, starfleet_martini, betazoid_bliss, mirror_universe];

const buildMenu = function(menuType) {
    //menuType is a string

    let itemList;
    let menuTitle;

    switch (menuType) {
        case 'cocktail':
            itemList = cocktailList;
            menuTitle = 'COCKTAILS';
            break;
        case 'beerNWine':
            itemList = beerWine;
            menuTitle = 'BEER & WINE';
            break;
        case 'spirit':
            itemList = spiritList;
            menuTitle = 'SPIRIT';
            break;
        case 'food':
            itemList = foodList;
            menuTitle = 'FOOD';
            break;
    }


    const menuWrapper = document.createElement("div");
    menuWrapper.classList.add("card-wrapper");
    const menuTitleDiv = document.createElement("h1");
    menuTitleDiv.textContent = menuTitle;

    const items = menu.menu.filter((item) => {
        return item.type === menuType;
    }); 
    let i = 0;
    for (const item of items) {

        // console.log(drink);
        const drinkCard = document.createElement("div");
        drinkCard.classList.add("card");

        const imgWrap = document.createElement("div");
        imgWrap.classList.add("img-wrap");

        const img = document.createElement("img");
        // console.log(drink.img.slice(0, -4))
        img.src = itemList[i];
        i++;
        img.classList.add("drink-img", `${item.img.slice(0,-4)}`)
        // TODO: img alt
        
        const nameTag = document.createElement("div");
        nameTag.classList.add("drink-name");
        nameTag.textContent = item.name;

        const priceTag = document.createElement("div");
        priceTag.classList.add("drink-price")
        priceTag.textContent = item.price;

        const descTag = document.createElement("div");
        descTag.classList.add("drink-desc");
        descTag.textContent = item.description;

        imgWrap.append(img, nameTag, priceTag);

        drinkCard.append(imgWrap, descTag);

        console.log(drinkCard);

        menuWrapper.append(drinkCard);
    }

    console.log(menuWrapper);
    return {menuWrapper, menuTitleDiv};

}

export {buildMenu};