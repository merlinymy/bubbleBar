import "../styles/aboutSec.css";

const buildAboutSec = function() {
    const sec = document.createElement("section");
    sec.classList.add("about");

    const aboutDiv = document.createElement("div");
    aboutDiv.textContent = `
    Welcome to Bubble, the galaxy-renowned cocktail bar at Starbase 77 in the 
    Alpha Quadrant. Founded in the 21st century in Monterey, California, 
    by Chief Engineer Merlin Yang and Professor A’Lester Allen, Bubble was 
    inspired by Yang’s love for Earth’s Pacific Ocean and Allen’s bubbly 
    personality. Originally a safe haven for the LGBTQ+ community, it became 
    legendary after the Federation's founding, attracting explorers and 
    dignitaries with its creative cocktails and vibrant culture. 
    Today, Bubble remains a cherished hub where stories are shared, 
    and every drink celebrates connection and innovation.
    `;

    sec.append(aboutDiv);
    return sec;
}

export {buildAboutSec};