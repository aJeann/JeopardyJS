import UI from "../ui.js";

export default class Footer extends UI {
    constructor(appendTo) {
        super(appendTo);
        this.html = `
        <footer class="bg-dark text-center text-white sticky-bottom">
          <!-- Grid container -->
          <div class="container p-4">
          
          <!-- Copyright -->
          <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2021 Copyright: Axel Jeansson!
      
          </div>
          <!-- Copyright -->
        </footer>
        <!-- Footer -->
        `;
        super.container.innerHTML = this.html;
    }
}