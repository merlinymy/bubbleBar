const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");

const popupMenu = document.querySelector(".pop-up");
const body = document.querySelector("body");

const toggleMenu = function(show) {
    body.classList.toggle("noscroll");
    if(show) {
        popupMenu.classList.add("fade-in");
        popupMenu.classList.remove("hidden", "fade-out");

        menuBtn.classList.add("animateClose");
        menuBtn.classList.remove("animateClose");
        closeBtn.classList.remove("hidden", "animateClose");
        closeBtn.classList.add("animateOpen");
    } else {
        popupMenu.classList.remove("fade-in");
        popupMenu.classList.add("fade-out");

        closeBtn.classList.remove("animateOpen");
        closeBtn.classList.add("animateClose");

        menuBtn.classList.remove("animateClose");
        menuBtn.classList.add("animateOpen");

        setTimeout(() => {
            popupMenu.classList.add("hidden");
            closeBtn.classList.add("hidden");
        }, 300);

    }
}

export {toggleMenu};