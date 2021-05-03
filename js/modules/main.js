import Header from "./header.js";
import Footer from "./footer.js";
import PlayerSection from "./playersection.js";

window.addEventListener("load", async (e) => {
    new Header("header");
    new PlayerSection(".player-section");
    new Footer("footer");
});