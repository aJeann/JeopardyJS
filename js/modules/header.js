import UI from "../ui.js";
import MainSection from "./mainsection.js";

let numberOfProducts = JSON.parse(localStorage.getItem("numberInCart"));
if (numberOfProducts == null)
    numberOfProducts = "";

export default class Header extends UI {
    constructor(appendTo) {
        super(appendTo);
        this.html = `
        <header>
    <div class="shadow p-3 mb-5 bg-white rounded">
      <nav class="navbar navbar-expand-lg navbar-light">
      
        
      
        <a class="navbar-brand" href="index.html">
            <img src="images/c5e487ea1ec04aaf9aad26611755e3f2.png" alt=""/>
        </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
    
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
        
          
            <ul class="navbar-nav mr-auto mr-4 mt-lg-0">
              <li class="nav-item mr-4">
                  <button
                    type="button"
                    id="add-player"
                    class="btn btn-secondary btn-lg btn-block text-nowrap t-1 btn-space hover-shadow"
                    data-bs-toggle="modal"
                    data-bs-target="#addPlayerModal"
                  >
                  Lägg till spelare
                  </button>
              </li>

              <li class="nav-item mr-4 p-6 mx-5">
                  <button
                    type="button"
                    id="choose-game"
                    class="choose-game btn btn-secondary btn-lg btn-block text-nowrap t-1 btn-space hover-shadow"
                    data-bs-toggle="modal"
                    data-bs-target="#choose-game-modal"
                  >
                    Ändra plan
                </button>
              </li>
              <li class="nav-item mr-4">
                    <button
                      type="button"
                      id="fj-button"
                      class="btn btn-secondary btn-lg btn-block text-nowrap t-1 btn-space hover-shadow"
                      data-bs-toggle="modal"
                      data-bs-target="#final-jeopardy-modal"
                    >Final Jeopardy!
                    </button></a
                  >
              </li>
            </ul>
          </div>
      </nav>
    </div>
  </header>
  `;
        super.container.innerHTML = this.html;

        localStorage.setItem("category", "./data/categories.JSON")

        this.mainSection = new MainSection(".main-section");
        this.mainSection.showCategories("./data/categories.JSON");
        
    }

}
