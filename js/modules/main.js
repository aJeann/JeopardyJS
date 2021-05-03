import MainSection from "./mainsection.js";
import Footer from "./footer.js";
import PlayerSection from "./playersection.js";

window.addEventListener("load", async (e) => {
    new MainSection(".main-section").showCategories("./data/categories.JSON");
    new PlayerSection(".player-section");
    new Footer("footer");
});