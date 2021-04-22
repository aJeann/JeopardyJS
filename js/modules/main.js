import Header from "./header.js";
import Footer from "./footer.js";
import MainSection from "./mainsection.js";

window.addEventListener("load", async (e) => {
    new Header("header");
    new MainSection(".main-section");
    new Footer("footer");
});