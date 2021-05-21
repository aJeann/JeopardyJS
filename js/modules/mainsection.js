import UI from "../ui.js";

export default class MainSection extends UI {
    constructor(appendTo) {
        super(appendTo);

        super.container.addEventListener("click", async (e) => {
            let p0points = Number(localStorage.getItem("0-points"));
            let p1points = Number(localStorage.getItem("1-points"));
            let p2points = Number(localStorage.getItem("2-points"));
            let p3points = Number(localStorage.getItem("3-points"));
            let p4points = Number(localStorage.getItem("4-points"));
        
            if (e.target.id == "show-q"){
                let inputValue = Number(document.querySelector(".form-control").value);
                sessionStorage.setItem("valueOf", inputValue);
                this.showQ();
            }
            if (e.target.id == "show-a"){
                let value = e.target.dataset.clickedButton;
                sessionStorage.setItem("clickedButton", value)
                this.showA();
            }
            if (e.target.className == "dropdown-item"){
                $("#choose-game-modal").modal('hide');
                let path = e.target.dataset.categoryId;
                localStorage.setItem("category", path)
                console.log(path)
                await this.showCategories(path);
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
                this.showFinalA();
            }
            
        });
        
        super.container.addEventListener("click", async (e) => {
            if (e.target.classList.contains("btn") && e.target.dataset.questionValue){
                this.changeValue(e, localStorage.getItem("category"));
            }
        });

    }

    async showCategories(category){
        let CategoriesArray = await super.loadData("GET", "https://jeopardy-oscar.herokuapp.com/allCats");
        CategoriesArray = JSON.parse(CategoriesArray);
        

        let buttonArray = ['primary', 'danger', 'success', 'info', 'secondary'];
        let buttonNumber = 0;

        let GameArray = [];

        for(let i = 0; i<CategoriesArray.length; i++){
            if(CategoriesArray[i].game.id == category){
                GameArray.push(CategoriesArray[i]);
                sessionStorage.setItem("finalQ", CategoriesArray[i].finalQ)
                sessionStorage.setItem("finalA", CategoriesArray[i].finalA)
                sessionStorage.setItem("finalC", CategoriesArray[i].finalC)
               }
        }

        console.log(GameArray)

        let doublePoints = this.getRandomNumber();
        console.log(doublePoints)

        let output = `
        <div class="row">
        <div class="col-1">
        </div>
        `;

        for(let i = 0; i<5; i++){
            console.log("test");
            output +=
            `
            <div class="col-2 text-center">
                <h4>${GameArray[i].name}<h4>
                <div class="card w-80 rounded">
                    <div class="card-body text-center">
                        <button class="btn btn-${buttonArray[i]} w-100 h-100"
                         data-question-value="${GameArray[i].question1}"
                          id="${buttonNumber}" data-bs-toggle="modal" data-bs-target="#modal${buttonNumber}">200</button>
                    </div>
                </div>
                <div class="modal fade" id="modal${buttonNumber}" aria-hidden="true" aria-labelledby="..." tabindex="-1">
                    <div class="modal-dialog modal-xl modal-dialog-centered">
                        <div class="modal-content">
                            <div class="card h-100 rounded"> 
                                <div class="card-header text-center">
                                <h3>200</h3>
                                </div>
                                <div class="card-body text-center">
                                <br>
                                ${doublePoints == buttonNumber ? `<p>Dagens dubbel!</p><input class="form-control" type="number" placeholder="Hur mycket vågar du satsa?"><button class="btn btn-light" id="show-q">Visa fråga</button><br><div id="question" style="display:none"><h1>${GameArray[i].question1}</h1></div>` : `<h1>${GameArray[i].question1}</h1>`}
                                <br>        
                                <div id="answer${buttonNumber}" style="display:none"><p>${GameArray[i].answer1}</p></div>
                                <button class="btn btn-light" id="show-a" data-clicked-button="${buttonNumber}">Visa svar</button>         
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            buttonNumber++
            output +=
            `
            <div class="card w-80 rounded">
                    <div class="card-body text-center">
                        <button class="btn btn-${buttonArray[i]} w-100 h-100"
                        data-question-value="${GameArray[i].question2}"
                        id="${buttonNumber}" data-bs-toggle="modal" href="#modal${buttonNumber}">400</button>
                    </div>
                </div>
                <div class="modal fade" id="modal${buttonNumber}" aria-hidden="true" aria-labelledby="..." tabindex="-1">
                    <div class="modal-dialog modal-xl modal-dialog-centered">
                        <div class="modal-content">
                            <div class="card h-100 rounded">
                            <div class="card-header text-center">
                                <h3>400</h3>
                                </div>
                                <div class="card-body text-center">
                                <br>
                                ${doublePoints == buttonNumber ? `<p>Dagens dubbel!</p><input class="form-control" type="number" placeholder="Hur mycket vågar du satsa?"><button class="btn btn-light" id="show-q">Visa fråga</button><br><div id="question" style="display:none"><h1>${GameArray[i].question2}</h1></div>` : `<h1>${GameArray[i].question2}</h1>`}
                                <br> 
                                <div id="answer${buttonNumber}" style="display:none"><p>${GameArray[i].answer2}</p></div>
                                <button class="btn btn-light" id="show-a" data-clicked-button="${buttonNumber}">Visa svar</button>     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
                
            buttonNumber++
            output +=
            `
                <div class="card w-80 rounded">
                    <div class="card-body text-center">
                        <button class="btn btn-${buttonArray[i]} w-100 h-100"
                         data-question-value="${GameArray[i].question3}"
                          id="${buttonNumber}" data-bs-toggle="modal" href="#modal${buttonNumber}">600</button>
                    </div>
                </div>
                <div class="modal fade" id="modal${buttonNumber}" aria-hidden="true" aria-labelledby="..." tabindex="-1">
                    <div class="modal-dialog modal-xl modal-dialog-centered">
                        <div class="modal-content">
                            <div class="card h-100 rounded">
                            <div class="card-header text-center">
                                <h3>600</h3>
                                </div>
                                <div class="card-body text-center">
                                <br>
                                ${doublePoints == buttonNumber ? `<p>Dagens dubbel!</p><input class="form-control" type="number" placeholder="Hur mycket vågar du satsa?"><button class="btn btn-light" id="show-q">Visa fråga</button><br><div id="question" style="display:none"><h1>${GameArray[i].question3}</h1></div>` : `<h1>${GameArray[i].question3}</h1>`}
                                <br>  
                                <div id="answer${buttonNumber}" style="display:none"><p>${GameArray[i].answer3}</p></div>
                                <button class="btn btn-light" id="show-a" data-clicked-button="${buttonNumber}">Visa svar</button>     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
            buttonNumber++
            output +=
                `
                <div class="card w-80 rounded">
                    <div class="card-body text-center">
                        <button class="btn btn-${buttonArray[i]} w-100 h-100"
                         data-question-value="${GameArray[i].question4}"
                          id="${buttonNumber}" data-bs-toggle="modal" href="#modal${buttonNumber}">800</button>
                    </div>
                </div>
                <div class="modal fade" id="modal${buttonNumber}" aria-hidden="true" aria-labelledby="..." tabindex="-1">
                    <div class="modal-dialog modal-xl modal-dialog-centered">
                        <div class="modal-content">
                            <div class="card h-100 rounded">
                                <div class="card-header text-center">
                                <h3>800</h3>
                                </div>
                                <div class="card-body text-center">
                                <br>
                                ${doublePoints == buttonNumber ? `<p>Dagens dubbel!</p><input class="form-control" type="number" placeholder="Hur mycket vågar du satsa?"><button class="btn btn-light" id="show-q">Visa fråga</button><br><div id="question" style="display:none"><h1>${GameArray[i].question4}</h1></div>` : `<h1>${GameArray[i].question4}</h1>`}
                                <br>
                                <div id="answer${buttonNumber}" style="display:none"><p>${GameArray[i].answer4}</p></div>
                                <button class="btn btn-light" id="show-a" data-clicked-button="${buttonNumber}">Visa svar</button>     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
            buttonNumber++
            output +=
                `
                <div class="card w-80 rounded">
                    <div class="card-body text-center">
                        <button class="btn btn-${buttonArray[i]} w-100 h-100"
                         data-question-value="${GameArray[i].question5}"
                          id="${buttonNumber}" data-bs-toggle="modal" href="#modal${buttonNumber}">1000</button>
                    </div>
                </div>
                <div class="modal fade" id="modal${buttonNumber}" aria-hidden="true" aria-labelledby="..." tabindex="-1">
                    <div class="modal-dialog modal-xl modal-dialog-centered">
                        <div class="modal-content">
                            <div class="card h-100 rounded">
                                <div class="card-header text-center">
                                <h3>1000</h3>
                                </div>
                                <div class="card-body text-center">
                                <br>
                                ${doublePoints == buttonNumber ? `<p>Dagens dubbel!</p><input class="form-control" type="number" placeholder="Hur mycket vågar du satsa?"><button class="btn btn-light" id="show-q">Visa fråga</button><br><div id="question" style="display:none"><h1>${GameArray[i].question5}</h1></div>` : `<h1>${GameArray[i].question5}</h1>`}
                                <br>
                                <div id="answer${buttonNumber}" style="display:none"><p>${GameArray[i].answer5}</p></div>
                                <button class="btn btn-light" id="show-a" data-clicked-button="${buttonNumber}">Visa svar</button>     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
            buttonNumber++
            
        }

        output +=
        `
        <div class="row-1">
        </div>
                
        </div>
        <div class="modal fade" id="choose-game-modal" aria-hidden="true" aria-labelledby="..." tabindex="-1">
                    <div class="modal-dialog modal-xl modal-dialog-centered">
                        <div class="modal-content">
                            <div class="card h-100 rounded">
                                <div class="card-body text-center">
                                    <div class="btn-group">
                                        <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Välj omgång
                                        </button>
                                        <div class="dropdown-menu" id="cat-choice">
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`

        super.container.innerHTML = output;

        this.printFinalJeopardy();
        this.fillOutChoices();
    }
    
    printFinalJeopardy(){
        let amountOfPlayers = Number(localStorage.getItem("amountOfPlayers"));
        let finalQ = sessionStorage.getItem("finalQ");
        let category = sessionStorage.getItem("finalC");
        let answer = sessionStorage.getItem("finalA");
        let buttonArray = ['primary', 'danger', 'success', 'info', 'warning'];
        let output = ``;
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
                                        <div class="card bg-${buttonArray[i]} text-center" id="finalcard">
                                            <div class="card-body">
                                            <h5 class="card-title"></h5>
                                                <hr>
                                                <p class="fs-2" id="p${i}-points">${document.getElementById(i+"-points").textContent}</p>
                                                <div class="row">
                                                <div class="col-3"><button type="button" class="p${i+1}-btn-nega btn btn-outline-danger">-</button></div>                                            
                                                <div class="col-6"><input type="number" class="form-control" id="p${i}bet" placeholder="0"></div>
                                                <div class="col-3"><button type="button" class="p${i+1}-btn-poss btn btn-outline-success">+</button></div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>`
                                    }
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
                                    <div id="answerfinal" style="display:none"><h2>${answer}</h2></div>
                                    <button class="show-a btn btn-light" id="show-final-a">Visa svar</button>
                                    </div>
                                    <embed src="jeptheme.mp3" loop="true" autostart="true">
                                </div>
                            </div>
                        </div>
                    </div>`

                super.container.innerHTML += output;

                

    }

    async fillOutChoices(){
        let dropdown = document.getElementById("cat-choice");
        let output = ``;
        let CategoriesArray = await super.loadData("GET", "https://jeopardy-oscar.herokuapp.com/all");
        CategoriesArray = JSON.parse(CategoriesArray);
        console.log(CategoriesArray);
        console.log("test");

        for(let i = 0; i < CategoriesArray.length; i++){
            output += `<a type="button" class="dropdown-item" href="#" data-category-id="${CategoriesArray[i].id}">${CategoriesArray[i].name}</a>`
        }

        dropdown.innerHTML += output;
                
    }

    async changeValue(e){
        let CategoriesArray = await super.loadData("GET", "https://jeopardy-oscar.herokuapp.com/allCats");
        CategoriesArray = JSON.parse(CategoriesArray);
        let answer = "";

        let GameArray = [];

        for(let i = 0; i<CategoriesArray.length; i++){
            if(CategoriesArray[i].game.id == localStorage.getItem("category")){
                GameArray.push(CategoriesArray[i]);
            }
        }

        if(e.target.innerText == "200" || e.target.innerText == "400" ||e.target.innerText == "600" || e.target.innerText == "800" || e.target.innerText == "1000")
        sessionStorage.setItem("valueOf", e.target.innerText);


        for (let i in GameArray){
            if(GameArray[i].question1 == e.target.dataset.questionValue){
                answer = GameArray[i].a1;
            }
            if(GameArray[i].question2 == e.target.dataset.questionValue){
                answer = GameArray[i].a2;
            }
            if(GameArray[i].question3 == e.target.dataset.questionValue){
                answer = GameArray[i].answer3;
            }
            if(GameArray[i].question4 == e.target.dataset.questionValue){
                answer = GameArray[i].a4;
            }
            if(GameArray[i].question5 == e.target.dataset.questionValue){
                answer = GameArray[i].a5;
            }
            
        }
            e.target.innerHTML = "";
        
    }

    getRandomNumber(){
        return Math.floor(Math.random() * 25);
    }

    showQ(){
        var x = document.getElementById("question");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }

    showA(){
        var x = document.getElementById("answer"+sessionStorage.getItem("clickedButton"));
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }

    showFinalA(){
        var x = document.getElementById("answerfinal");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
    }

}