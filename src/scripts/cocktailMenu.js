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

const cocktailList = [warp_core_breach, vulcan_mind_meld, romulan_ale,
    klingon_bloodwine, holodeck_hologram, nebula_nectar, ferengi_gold_press,
    andorian_frost, trill_symbiosis, borg_assimilation, q_continuum,
    temporal_distortion, starfleet_martini, betazoid_bliss, mirror_universe];

const buildCocktailMenu = function() {
    const menuWrapper = document.createElement("div");
    menuWrapper.classList.add("card-wrapper");
    const cocktails = menu.menu.filter((item) => {
        return item.type === 'cocktail';
    }); //15 drinks objects

    // console.log(cocktails);
    let i = 0;
    // {name, what's inside, flavor(2 words), price, img}
    for (const drink of cocktails) {

        // console.log(drink);
        const drinkCard = document.createElement("div");
        drinkCard.classList.add("card");

        const imgWrap = document.createElement("div");
        imgWrap.classList.add("img-wrap");

        const img = document.createElement("img");
        // console.log(drink.img.slice(0, -4))
        img.src = cocktailList[i];
        i++;
        img.classList.add("drink-img", `${drink.img.slice(0,-4)}`)
        // TODO: img alt
        
        const nameTag = document.createElement("div");
        nameTag.classList.add("drink-name");
        nameTag.textContent = drink.name;

        const priceTag = document.createElement("div");
        priceTag.classList.add("drink-price")
        priceTag.textContent = drink.price;

        const descTag = document.createElement("div");
        descTag.classList.add("drink-desc");
        descTag.textContent = drink.description;

        imgWrap.append(img, nameTag, priceTag);

        drinkCard.append(imgWrap, descTag);

        console.log(drinkCard);

        menuWrapper.append(drinkCard);
    }

    console.log(menuWrapper);
    return menuWrapper;

}

const buildBeerWineMenu = function() {
    const menuWrapper = document.createElement("div");

    const beerNWine = menu.menu.filter((item) => {
        item.type === 'beerNWine';
    }); 

    // {name, what's inside, flavor(2 words), price, img}
    for (const item in beerNWine) {
        const foodCard = document.createElement("div");
        foodCard.classList.add("card");

        const imgWrap = document.createElement("div");
        imgWrap.classList.add("img-wrap");

        const img = document.createElement("img");
        img.src = `../photos/flux/beerNWine/${item.img}`;
        img.classList.add("beer-img")
        // TODO: img alt
        
        const nameTag = document.createElement("div");
        nameTag.classList.add("beer-name");
        nameTag.textContent = item.name;

        const priceTag = document.createElement("div");
        priceTag.classList.add("beer-price")
        priceTag.textContent = item.price;

        const descTag = document.createElement("div");
        descTag.classList.add("beer-desc");
        descTag.textContent = item.description;

        imgWrap.append(img, nameTag, priceTag);

        drinkCard.append(imgWrap, descTag);

        menuWrapper.append(drinkCard);
    }
    return menuWrapper;

}

const buildSpiritMenu = function() {
    const menuWrapper = document.createElement("div");

    const spirits = menu.menu.filter((item) => {
        item.type === 'spirit';
    }); 

    // {name, what's inside, flavor(2 words), price, img}
    for (const item in spirits) {
        const foodCard = document.createElement("div");
        foodCard.classList.add("card");

        const imgWrap = document.createElement("div");
        imgWrap.classList.add("img-wrap");

        const img = document.createElement("img");
        img.src = `../photos/flux/spirits/${item.img}`;
        img.classList.add("spirit-img")
        // TODO: img alt
        
        const nameTag = document.createElement("div");
        nameTag.classList.add("spirit-name");
        nameTag.textContent = item.name;

        const priceTag = document.createElement("div");
        priceTag.classList.add("spirit-price")
        priceTag.textContent = item.price;

        const descTag = document.createElement("div");
        descTag.classList.add("spirit-desc");
        descTag.textContent = item.description;

        imgWrap.append(img, nameTag, priceTag);

        drinkCard.append(imgWrap, descTag);

        menuWrapper.append(drinkCard);
    }
    return menuWrapper;

}

const buildFoodMenu = function() {
    const menuWrapper = document.createElement("div");

    const food = menu.menu.filter((item) => {
        item.type === 'food';
    }); 

    // {name, what's inside, flavor(2 words), price, img}
    for (const item in food) {
        const foodCard = document.createElement("div");
        foodCard.classList.add("card");

        const imgWrap = document.createElement("div");
        imgWrap.classList.add("img-wrap");

        const img = document.createElement("img");
        img.src = `../photos/flux/food/${item.img}`;
        img.classList.add("food-img")
        // TODO: img alt
        
        const nameTag = document.createElement("div");
        nameTag.classList.add("food-name");
        nameTag.textContent = item.name;

        const priceTag = document.createElement("div");
        priceTag.classList.add("food-price")
        priceTag.textContent = item.price;

        const descTag = document.createElement("div");
        descTag.classList.add("food-desc");
        descTag.textContent = item.description;

        imgWrap.append(img, nameTag, priceTag);

        drinkCard.append(imgWrap, descTag);

        menuWrapper.append(drinkCard);
    }
    return menuWrapper;

}

export {buildBeerWineMenu, buildCocktailMenu, buildFoodMenu, buildSpiritMenu};