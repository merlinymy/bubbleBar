import "../styles/sideMenu.css";

const buildSideMenu = function() {
    const sideMenuWrapper = document.createElement("div");
    sideMenuWrapper.className = "menu-wrapper";

    const closeBtn = document.createElement("span");
    closeBtn.classList.add("material-symbols-outlined", "close-btn");
    closeBtn.textContent = "close";

    closeBtn.addEventListener("click", (event) => {
        event.preventDefault();
    })

    const homeBtn = document.createElement("button");
    homeBtn.textContent = "HOME";
    homeBtn.id = "home-btn";
    const cocktailBtn = document.createElement("button");
    cocktailBtn.textContent = "COCKTAILS";
    const foodBtn = document.createElement("button");
    foodBtn.textContent = "FOOD";
    const beerBtn = document.createElement("button");
    beerBtn.textContent = "BEER & WINE";
    const spiritBtn = document.createElement("button");
    spiritBtn.textContent = "SPIRIT LIST";

    sideMenuWrapper.append(closeBtn,homeBtn,cocktailBtn,foodBtn,beerBtn,spiritBtn);

    return sideMenuWrapper;
}

export {buildSideMenu};
