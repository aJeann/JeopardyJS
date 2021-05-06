import UI from "../ui.js";

let numberOfProducts = JSON.parse(localStorage.getItem("numberInCart"));
if (numberOfProducts == null)
    numberOfProducts = "";

export default class Header extends UI {
    constructor(appendTo) {
        super(appendTo);
        localStorage.setItem("category", "./data/categories.JSON")
    }

    async loadHeader(){
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
              <a href="index.html">
                  <button
                    type="button"
                    id="back-to-start"
                    class="btn btn-secondary btn-lg btn-block text-nowrap t-1 btn-space hover-shadow"
                  >
                  Tillbaka
                  </button>
                  </a>
              </li>

            
            </ul>
          </div>
      </nav>
    </div>
  </header>
  `;
        super.container.innerHTML = this.html;
    }
}
