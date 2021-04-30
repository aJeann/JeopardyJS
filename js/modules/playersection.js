import UI from "../ui.js";

export default class MainSection extends UI {
    constructor(appendTo) {
        super(appendTo);

        this.html = `<h2>Spelare:</h2>
            <div class="card bg-warning text-center" style="width: 18rem;">
            <div class="card-body">
            <button class="btn btn-warning"><h5 class="card-title">Katarina</h5></button>
                <hr>
                <p class="card-text" id="k-points"></p>
            </div>
            </div>

            <div class="card bg-success text-center" style="width: 18rem;">
            <div class="card-body">
            <button class="btn btn-success"><h5 class="card-title">Pelle</h5></button>
                <hr>
                <p class="card-text" id="p-points"></p>
            </div>
            </div>

            <div class="ake-card card bg-info text-center" style="width: 18rem;">
            <div class="card-body">
                <button class="btn btn-info"><h5 class="card-title">Åke</h5></button>
                <hr>
                <p class="card-text" id="a-points"></p>
            </div>
            </div>
       `

        super.container.innerHTML = this.html;

        
        super.container.addEventListener("click", function(e){
            let value = Number(sessionStorage.getItem("valueOf"));
            if(e.target.className == 'btn btn-info'){
                let tempV = Number(document.getElementById("a-points").innerText);
                tempV += value;
                console.log(tempV);
                document.getElementById("a-points").innerHTML = tempV
            }
            if(e.target.className == "btn btn-success"){
                let tempV = Number(document.getElementById("p-points").innerText);
                tempV += value;
                document.getElementById("p-points").innerHTML = tempV;
            }
            if(e.target.className == "btn btn-warning"){
                let tempV = Number(document.getElementById("k-points").innerText);
                tempV += value;
                document.getElementById("k-points").innerHTML = tempV;
            }
        })

    
    }


}