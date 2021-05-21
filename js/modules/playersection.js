import UI from "../ui.js";
import Header from "./header.js";

export default class PlayerSection extends UI {
    constructor(appendTo) {
        super(appendTo);

        this.hmtl = `
        <button class="add-btn btn btn-outline-primary bg-light">Lägg till spelare</button>
        <button class="remove-btn btn btn-outline-primary bg-light">Ta bort spelare</button>`
        super.container.innerHTML = this.hmtl;

        this.printPlayerSection();
        
        super.container.addEventListener("click", function(e){        
            console.log(e)
            let value = Number(sessionStorage.getItem("valueOf"));
            let amount = Number(localStorage.getItem("amountOfPlayers"));
            if(e.target.className == "p1-btn-neg btn btn-outline-danger btn-sm"){
                let tempV = Number(document.getElementById("0-points").innerText);
                tempV -= value/2;
                document.getElementById("0-points").innerHTML = tempV
                localStorage.setItem("0-points", tempV);
            }
            if(e.target.className == "p2-btn-neg btn btn-outline-danger btn-sm"){
                let tempV = Number(document.getElementById("1-points").innerText);
                tempV -= value/2;
                document.getElementById("1-points").innerHTML = tempV;
                localStorage.setItem("1-points", tempV);
            }
            if(e.target.className == "p3-btn-neg btn btn-outline-danger btn-sm"){
                let tempV = Number(document.getElementById("2-points").innerText);
                tempV -= value/2;
                document.getElementById("2-points").innerHTML = tempV;
                localStorage.setItem("2-points", tempV);
            }
            if(e.target.className == "p4-btn-neg btn btn-outline-danger btn-sm"){
                let tempV = Number(document.getElementById("3-points").innerText);
                tempV -= value/2;
                document.getElementById("3-points").innerHTML = tempV;
                localStorage.setItem("3-points", tempV);
            }
            if(e.target.className == "p5-btn-neg btn btn-outline-danger btn-sm"){
                let tempV = Number(document.getElementById("4-points").innerText);
                tempV -= value/2;
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
            
            if(e.target.className == "add-btn btn btn-outline-primary bg-light"){
                let newAmount = amount;
                if(amount < 5){
                    newAmount = amount + 1;
                }
                localStorage.setItem("amountOfPlayers", newAmount)
                window.location.reload();
            }
            if(e.target.className == "remove-btn btn btn-outline-primary bg-light"){
                console.log("test")
                let newAmount = amount;
                if(amount > 1){
                     newAmount = amount - 1;
                }
                localStorage.setItem("amountOfPlayers", newAmount)
                window.location.reload();
            }
        });

    
    }

    printPlayerSection(){
        let amountOfPlayers = Number(localStorage.getItem("amountOfPlayers"));
        let output = ``
        let buttonArray = ['primary', 'danger', 'success', 'info', 'warning'];


        for (let i = 0; i<amountOfPlayers; i++){
            output += `
            <div class="card bg-${buttonArray[i]} text-center">
                <div class="card-body">
                    <input type="text" class="form-control-text" id="Namn" placeholder="Namn">
                    <hr>
                    <p class="fs-2" id="${i}-points"></p>
                    <button type="button" class="p${i+1}-btn-neg btn btn-outline-danger btn-sm">-</button>
                    <button type="button" class="p${i+1}-btn-pos btn btn-outline-success btn-sm">+</button>
                </div>
            </div>`
        }
        super.container.innerHTML += output;

        this.header = new Header("header").loadHeader();
    }
    

}