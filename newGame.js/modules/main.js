
import Header from "./header.js";
import Footer from "./footer.js";
import CreateGame from "./creategame.js";


window.addEventListener("load", async (e) => {
    new Header("header").loadHeader();
    new CreateGame(".formsection");
    new Footer("footer");
    
});