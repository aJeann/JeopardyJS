import UI from "../ui.js";
import Header from "./header.js";

export default class PlayerSection extends UI {
    constructor(appendTo) {
        super(appendTo);

        this.hmtl = `
        <button class="add-btn btn btn-outline-primary">Lägg till spelare</button>
        <button class="remove-btn btn btn-outline-primary">Ta bort spelare</button>`
        super.container.innerHTML = this.hmtl;


        this.header = new Header("header");
        this.header.loadHeader();

        this.printPlayerSection();
        
        super.container.addEventListener("click", function(e){
            
            let value = Number(sessionStorage.getItem("valueOf"));
            let p0points = Number(localStorage.getItem("0-points"));
            let p1points = Number(localStorage.getItem("1-points"));
            let p2points = Number(localStorage.getItem("2-points"));
            let p3points = Number(localStorage.getItem("3-points"));
            let p4points = Number(localStorage.getItem("4-points"));
            let amount = Number(localStorage.getItem("amountOfPlayers"));
            if(e.target.className == "p1-btn-neg btn btn-outline-danger btn-sm"){
                let tempV = Number(document.getElementById("0-points").innerText);
                tempV -= value;
                console.log(tempV);
                document.getElementById("0-points").innerHTML = tempV
                localStorage.setItem("0-points", tempV);
            }
            if(e.target.className == "p2-btn-neg btn btn-outline-danger btn-sm"){
                let tempV = Number(document.getElementById("1-points").innerText);
                tempV -= value;
                document.getElementById("1-points").innerHTML = tempV;
                localStorage.setItem("1-points", tempV);
            }
            if(e.target.className == "p3-btn-neg btn btn-outline-danger btn-sm"){
                let tempV = Number(document.getElementById("2-points").innerText);
                tempV -= value;
                document.getElementById("2-points").innerHTML = tempV;
                localStorage.setItem("2-points", tempV);
            }
            if(e.target.className == "p4-btn-neg btn btn-outline-danger btn-sm"){
                let tempV = Number(document.getElementById("3-points").innerText);
                tempV -= value;
                document.getElementById("3-points").innerHTML = tempV;
                localStorage.setItem("3-points", tempV);
            }
            if(e.target.className == "p5-btn-neg btn btn-outline-danger btn-sm"){
                let tempV = Number(document.getElementById("4-points").innerText);
                tempV -= value;
                document.getElementById("4-points").innerHTML = tempV;
                localStorage.setItem("4-points", tempV);
            }
            if(e.target.className == "p1-btn-pos btn btn-outline-success btn-sm"){
                let tempV = Number(document.getElementById("0-points").innerText);
                tempV += value;
                console.log(tempV);
                document.getElementById("0-points").innerHTML = tempV
                localStorage.setItem("0-points", tempV);
            }
            if(e.target.className == "p2-btn-pos btn btn-outline-success btn-sm"){
                let tempV = Number(document.getElementById("1-points").innerText);
                tempV += value;
                document.getElementById("1-points").innerHTML = tempV;
                localStorage.setItem("1-points", tempV);
            }
            if(e.target.className == "p3-btn-pos btn btn-outline-success btn-sm"){
                let tempV = Number(document.getElementById("2-points").innerText);
                tempV += value;
                document.getElementById("2-points").innerHTML = tempV;
                localStorage.setItem("2-points", tempV);
            }
            if(e.target.className == "p4-btn-pos btn btn-outline-success btn-sm"){
                let tempV = Number(document.getElementById("3-points").innerText);
                tempV += value;
                document.getElementById("3-points").innerHTML = tempV;
                localStorage.setItem("3-points", tempV);
            }
            if(e.target.className == "p5-btn-pos btn btn-outline-success btn-sm"){
                let tempV = Number(document.getElementById("4-points").innerText);
                tempV += value;
                document.getElementById("4-points").innerHTML = tempV;
                localStorage.setItem("4-points", tempV);
            }
            //MODAL CARDS
            if(e.target.className == "p1-btn-nega btn btn-outline-danger"){
               
                let bet = Number(document.getElementById("p0bet").value);
                let tempV = Number(p0points-bet)
                document.getElementById("p0-points").innerHTML = tempV;
            }
            if(e.target.className == "p2-btn-nega btn btn-outline-danger"){
                
                let bet = Number(document.getElementById("p1bet").value);
                let tempV =Number(p1points-bet)
                document.getElementById("p1-points").innerHTML = tempV;        
            }
            if(e.target.className == "p3-btn-nega btn btn-outline-danger"){
                
                let bet = Number(document.getElementById("p2bet").value);
                let tempV = Number(p2points-bet)
                document.getElementById("p2-points").innerHTML = tempV;        
            }
            if(e.target.className == "p4-btn-nega btn btn-outline-danger"){
                
                let bet = Number(document.getElementById("p3bet").value);
                let tempV = Number(p3points-bet)
                document.getElementById("p3-points").innerHTML = tempV;        
            }
            if(e.target.className == "p5-btn-nega btn btn-outline-danger"){
                
                let bet = Number(document.getElementById("p4bet").value);
                let tempV = Number(p4points-bet)
                document.getElementById("p4-points").innerHTML = tempV;        
            }
            if(e.target.className == "p1-btn-poss btn btn-outline-success"){
                
                let bet = Number(document.getElementById("p0bet").value);
                let tempV =Number(p0points+bet)
                document.getElementById("p0-points").innerHTML = tempV
            }
            if(e.target.className == "p2-btn-poss btn btn-outline-success"){
                
                let bet = Number(document.getElementById("p1bet").value);
                let tempV =Number(p1points+bet)
                document.getElementById("p1-points").innerHTML = tempV
            }
            if(e.target.className == "p3-btn-poss btn btn-outline-success"){
                
                let bet = Number(document.getElementById("p2bet").value);
                let tempV = Number(p2points+bet)
                document.getElementById("p2-points").innerHTML = tempV;
            }
            if(e.target.className == "p4-btn-poss btn btn-outline-success"){
                
                let bet = Number(document.getElementById("p3bet").value);
                let tempV = Number(p3points+bet)
                document.getElementById("p3-points").innerHTML = tempV;
            }
            if(e.target.className == "p5-btn-poss btn btn-outline-success"){
                
                let bet = Number(document.getElementById("p4bet").value);
                let tempV = Number(p4points+bet)
                document.getElementById("p4-points").innerHTML = tempV;
            }
            if(e.target.className == "show-a btn btn-light"){
                showA();
            }
            if(e.target.className == "add-btn btn btn-outline-primary"){
                let newAmount = amount;
                if(amount < 5){
                    newAmount = amount + 1;
                }
                localStorage.setItem("amountOfPlayers", newAmount)
                window.location.reload();
            }
            if(e.target.className == "remove-btn btn btn-outline-primary"){
                let newAmount = amount;
                if(amount > 1){
                     newAmount = amount - 1;
                }
                localStorage.setItem("amountOfPlayers", newAmount)
                window.location.reload();
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

    printPlayerSection(){
        let amountOfPlayers = Number(localStorage.getItem("amountOfPlayers"));
        let finalQ = "Om en triangel har två hörn som är 4° respektive 44°, vad är vinkeln på det tredje och sista hörnet?";
        let category = "Geometri";
        let answer = "Vad är 132°"
        let output = ``
        let buttonArray = ['primary', 'danger', 'success', 'info', 'warning'];


        for (let i = 0; i<amountOfPlayers; i++){
            output += `
            <div class="card bg-${buttonArray[i]} text-center">
                <div class="card-body">
                    <h5 class="card-title">Spelare ${i+1}</h5>
                    <hr>
                    <p class="fs-1" id="${i}-points">0</p>
                    <button type="button" class="p${i+1}-btn-neg btn btn-outline-danger btn-sm">-</button>
                    <button type="button" class="p${i+1}-btn-pos btn btn-outline-success btn-sm">+</button>
                </div>
            </div>`
        }
        

                /*<div class="card bg-success text-center">
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
                </div>*/
        output += ` 
                    <div class="modal fade" id="final-jeopardy-modal" aria-hidden="true" aria-labelledby="..." tabindex="-1">
                        <div class="modal-dialog modal-lg modal-dialog-centered">
                            <div class="modal-content">
                                <div class="card h-100 rounded">
                                    <div class="card-body text-center">
                                    <h1>Final Jeopardy!</h1>
                                    <div class="row">`
                                
                                    for(let i = 0; i<amountOfPlayers; i++){
                                        output += `
                                        <div class="col-4">
                                        <div class="card bg-${buttonArray[i]} text-center">
                                            <div class="card-body">
                                            <h5 class="card-title">Spelare ${i+1}</h5>
                                                <hr>
                                                <p class="fs-2" id="p${i}-points">${localStorage.getItem(i+"-points")}</p>
                                                <div class="row">
                                                <div class="col-3"><button type="button" class="p${i+1}-btn-nega btn btn-outline-danger">-</button></div>                                            
                                                <div class="col-6"><input type="number" class="form-control" id="p${i}bet" placeholder="0"></div>
                                                <div class="col-3"><button type="button" class="p${i+1}-btn-poss btn btn-outline-success">+</button></div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>`
                                    }/*

                                    <div class="col-4">
                                        <div class="card bg-success text-center">
                                            <div class="card-body">
                                            <h5 class="card-title">Spelare 2</h5>
                                                <hr>
                                                <p class="fs-2" id="p2-points">${localStorage.getItem("p-points")}</p>    
                                                <div class="row">
                                                <div class="col-3"><button type="button" class="p2-btn-nega btn btn-outline-danger">-</button></div>                                            
                                                <div class="col-6"><input type="number" class="form-control" id="p2bet" placeholder="0"></div>
                                                <div class="col-3"><button type="button" class="p2-btn-poss btn btn-outline-success">+</button></div>
                                                </div>
                                                            
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-4">
                                        <div class="ake-card card bg-info text-center">
                                            <div class="card-body">
                                                <h5 class="card-title">Spelare 3</h5>
                                                <hr>
                                                <p class="fs-2" id="p3-points">${localStorage.getItem("a-points")}</p> 
                                                <div class="row">
                                                <div class="col-3"><button type="button" class="p3-btn-nega btn btn-outline-danger">-</button></div>                                            
                                                <div class="col-6"><input type="number" class="form-control" id="p3bet" placeholder="0"></div>
                                                <div class="col-3"><button type="button" class="p3-btn-poss btn btn-outline-success">+</button></div>
                                                </div>
                                                
                                                
                                            </div>
                                        </div>
                                    </div>*/
                                    output +=`
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
                                <div class="card h-100 rounded">
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
                    </div>`

                super.container.innerHTML += output;
    }

    

}