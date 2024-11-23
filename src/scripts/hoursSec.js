import "../styles/hourSec.css";

const buildHourSec = function() {
    const sec = document.createElement("section");
    sec.classList.add("hours");

    const locationHour = document.createElement("div");
    locationHour.classList.add("sec-title");
    locationHour.textContent = "Location & Hour";

    const locationHourInfo = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.textContent = "Level 7";
    p2.textContent = "Next to the Observation Deck";
    p3.textContent = "Open 24/7";

    locationHourInfo.classList.add("sec-info");

    locationHourInfo.append(p1, p2, p3);

    sec.append(locationHour, locationHourInfo);

    return sec;
}

export {buildHourSec};