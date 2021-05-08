import UI from "../ui.js";
import Header from "./header.js";

export default class PlayerSection extends UI {
    constructor(appendTo) {
        super(appendTo);
        this.header = new Header("header");
        this.header.loadHeader();

        let finalQ = "Om en triangel har två hörn som är 4° respektive 44°, vad är vinkeln på det tredje och sista hörnet?";
        let category = "Geometri";
        let answer = "Vad är 132°"
        
        this.html = `
        <h3>Spelare:</h3>
            <div class="card bg-warning text-center">
            <div class="card-body">
            <h5 class="card-title">Spelare 1</h5>
                <hr>
                <p class="fs-1" id="k-points">0</p>
                <button type="button" class="p1-btn-neg btn btn-outline-danger btn-sm">-</button>
                <button type="button" class="p1-btn-pos btn btn-outline-success btn-sm">+</button>
            </div>
        </div>

            <div class="card bg-success text-center">
            <div class="card-body">
            <h5 class="card-title">Spelare 2</h5>
                <hr>
                <p class="fs-1" id="p-points">0</p>
                <button type="button" class="p2-btn-neg btn btn-outline-danger btn-sm">-</button>
                <button type="button" class="p2-btn-pos btn btn-outline-success btn-sm">+</button>
            </div>
            </div>

            <div class="ake-card card bg-info text-center">
            <div class="card-body">
                <h5 class="card-title">Spelare 3</h5>
                <hr>
                <p class="fs-1" id="a-points">0</p>
                
                <button type="button" class="p3-btn-neg btn btn-outline-danger btn-sm">-</button>
                <button type="button" class="p3-btn-pos btn btn-outline-success btn-sm">+</button>
                
            </div>
            </div>
            <div class="modal fade" id="final-jeopardy-modal" aria-hidden="true" aria-labelledby="..." tabindex="-1">
                    <div class="modal-dialog modal-lg modal-dialog-centered">
                        <div class="modal-content">
                            <div class="card h-100 rounded">
                                <div class="card-body text-center">
                                <h1>Final Jeopardy!</h1>
                                <div class="row">
                                <div class="col-4">
                                    <div class="card bg-warning text-center">
                                        <div class="card-body">
                                        <h5 class="card-title">Spelare 1</h5>
                                            <hr>
                                            <p class="fs-2">${localStorage.getItem("k-points")}</p>
                                        </div>
                                    </div>
                                    </div>

                                <div class="col-4">
                                    <div class="card bg-success text-center">
                                        <div class="card-body">
                                        <h5 class="card-title">Spelare 2</h5>
                                            <hr>
                                            <p class="fs-2">${localStorage.getItem("p-points")}</p>    
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-4">
                                    <div class="ake-card card bg-info text-center">
                                        <div class="card-body">
                                            <h5 class="card-title">Spelare 3</h5>
                                            <hr>
                                            <p class="fs-2">${localStorage.getItem("a-points")}</p> 
                                        </div>
                                    </div>
                                </div>
                                </div>

                                <h2>${category}</h2>
                                <button class="btn btn-light"
                                    id="show-q"
                                    data-bs-toggle="modal"
                                    data-bs-target="#final-q-modal">
                                    Visa fråga
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="final-q-modal" aria-hidden="true" aria-labelledby="..." tabindex="-1">
                    <div class="modal-dialog modal-xl modal-dialog-centered">
                        <div class="modal-content">
                            <div class="card bg-primary h-100 rounded">
                                <div class="card-body text-center">
                                <hr>
                                <br>
                                <p class="fs-1">${finalQ}</p>            
                                <br>            
                                <hr>
                                <div id="answer" style="display:none"><h2>${answer}</h2></div>
                                <button class="show-a btn btn-light" id="show-a">Visa svar</button>
                                </div>
                                <embed src="jeptheme.mp3" loop="true" autostart="true">
                            </div>
                        </div>
                    </div>
                </div>
       `

        super.container.innerHTML = this.html; 
        
        super.container.addEventListener("click", function(e){
            let value = Number(sessionStorage.getItem("valueOf"));
            if(e.target.className == "p1-btn-neg btn btn-outline-danger btn-sm"){
                let tempV = Number(document.getElementById("k-points").innerText);
                tempV -= value;
                console.log(tempV);
                document.getElementById("k-points").innerHTML = tempV
                localStorage.setItem("k-points", tempV);
            }
            if(e.target.className == "p2-btn-neg btn btn-outline-danger btn-sm"){
                let tempV = Number(document.getElementById("p-points").innerText);
                tempV -= value;
                document.getElementById("p-points").innerHTML = tempV;
                localStorage.setItem("p-points", tempV);
            }
            if(e.target.className == "p3-btn-neg btn btn-outline-danger btn-sm"){
                let tempV = Number(document.getElementById("a-points").innerText);
                tempV -= value;
                document.getElementById("a-points").innerHTML = tempV;
                localStorage.setItem("a-points", tempV);
            }
            if(e.target.className == "p1-btn-pos btn btn-outline-success btn-sm"){
                let tempV = Number(document.getElementById("k-points").innerText);
                tempV += value;
                console.log(tempV);
                document.getElementById("k-points").innerHTML = tempV
                localStorage.setItem("k-points", tempV);
            }
            if(e.target.className == "p2-btn-pos btn btn-outline-success btn-sm"){
                let tempV = Number(document.getElementById("p-points").innerText);
                tempV += value;
                document.getElementById("p-points").innerHTML = tempV;
                localStorage.setItem("p-points", tempV);
            }
            if(e.target.className == "p3-btn-pos btn btn-outline-success btn-sm"){
                let tempV = Number(document.getElementById("a-points").innerText);
                tempV += value;
                document.getElementById("a-points").innerHTML = tempV;
                localStorage.setItem("a-points", tempV);
            }
            if(e.target.className == "show-a btn btn-light"){
                showA();
            }
        });
        super.container.addEventListener("click", async(e) => {
            await this.header.loadHeader();
        })

        function showA(){
            var x = document.getElementById("answer");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
        }
    

    
    }

    

}