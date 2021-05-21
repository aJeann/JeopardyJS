import MainSection from "./mainsection.js";
import Footer from "./footer.js";
import PlayerSection from "./playersection.js";

window.addEventListener("load", async (e) => {
    new MainSection(".main-section").showCategories();
    new PlayerSection(".player-section");
    new Footer("footer");
});

for(let i=0; i<5; i++){
    if(!localStorage.getItem(i+"-points")){
        localStorage.setItem(i+"-points", 0)
    }
}

if(!localStorage.getItem("amountOfPlayers")){
    localStorage.setItem("amountOfPlayers", 3);
  }