import UI from "../ui.js";

export default class MainSection extends UI {
    constructor(appendTo) {
        super(appendTo);
        super.container.addEventListener("click", async (e) => {
        
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
            if (e.target.className == "fj-button"){
                this.header;
            }
            
        });
        
        super.container.addEventListener("click", async (e) => {
            if (e.target.classList.contains("btn") && e.target.dataset.questionValue){
                this.changeValue(e, localStorage.getItem("category"));
            }
        });

        if(!localStorage.getItem("amountOfPlayers")){
            localStorage.setItem("amountOfPlayers", 3);
          }

    }

    async showCategories(category){
        let CategoriesArray = await super.loadData("GET", "https://jeopardy-oscar.herokuapp.com/allCats");
        CategoriesArray = JSON.parse(CategoriesArray);
        
        console.log(CategoriesArray);
        console.log(category)
        let buttonArray = ['primary', 'danger', 'success', 'info', 'secondary'];
        let buttonNumber = 0;

        let GameArray = [];

        for(let i = 0; i<CategoriesArray.length; i++){
            if(CategoriesArray[i].game.id == category){
                GameArray.push(CategoriesArray[i]);
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
                          id="${buttonNumber}" data-bs-toggle="modal" data-bs-target="#modal${buttonNumber}">100</button>
                    </div>
                </div>
                <div class="modal fade" id="modal${buttonNumber}" aria-hidden="true" aria-labelledby="..." tabindex="-1">
                    <div class="modal-dialog modal-xl modal-dialog-centered">
                        <div class="modal-content">
                            <div class="card border-${buttonArray[i]} h-100 rounded"> 
                                <div class="card-body text-center">
                                <br>
                                ${doublePoints == buttonNumber ? `<p>Dagens dubbel!</p><input class="form-control" placeholder="Hur mycket vågar du satsa?"><button class="btn btn-light" id="show-q">Visa fråga</button><br><div id="question" style="display:none"><p>${GameArray[i].question1}</p></div>` : `<p id="show-answer">${GameArray[i].question1}</p>`}
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
                        id="${buttonNumber}" data-bs-toggle="modal" href="#modal${buttonNumber}">200</button>
                    </div>
                </div>
                <div class="modal fade" id="modal${buttonNumber}" aria-hidden="true" aria-labelledby="..." tabindex="-1">
                    <div class="modal-dialog modal-xl modal-dialog-centered">
                        <div class="modal-content">
                            <div class="card border-${buttonArray[i]} h-100 rounded">
                                <div class="card-body text-center">
                                <br>
                                ${doublePoints == buttonNumber ? `<p>Dagens dubbel!</p><input class="form-control" placeholder="Hur mycket vågar du satsa?"><button class="btn btn-light" id="show-q">Visa fråga</button><br><div id="question" style="display:none"><p>${GameArray[i].question2}</p></div>` : `<p>${GameArray[i].question2}</p>`}
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
                          id="${buttonNumber}" data-bs-toggle="modal" href="#modal${buttonNumber}">300</button>
                    </div>
                </div>
                <div class="modal fade" id="modal${buttonNumber}" aria-hidden="true" aria-labelledby="..." tabindex="-1">
                    <div class="modal-dialog modal-xl modal-dialog-centered">
                        <div class="modal-content">
                            <div class="card border-${buttonArray[i]} h-100 rounded">
                                <div class="card-body text-center">
                                <br>
                                ${doublePoints == buttonNumber ? `<p>Dagens dubbel!</p><input class="form-control" placeholder="Hur mycket vågar du satsa?"><button class="btn btn-light" id="show-q">Visa fråga</button><br><div id="question" style="display:none"><p>${GameArray[i].question3}</p></div>` : `<p>${GameArray[i].question3}</p>`}
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
                          id="${buttonNumber}" data-bs-toggle="modal" href="#modal${buttonNumber}">400</button>
                    </div>
                </div>
                <div class="modal fade" id="modal${buttonNumber}" aria-hidden="true" aria-labelledby="..." tabindex="-1">
                    <div class="modal-dialog modal-xl modal-dialog-centered">
                        <div class="modal-content">
                            <div class="card border-${buttonArray[i]} h-100 rounded">
                                <div class="card-body text-center">
                                <br>
                                ${doublePoints == buttonNumber ? `<p>Dagens dubbel!</p><input class="form-control" placeholder="Hur mycket vågar du satsa?"><button class="btn btn-light" id="show-q">Visa fråga</button><br><div id="question" style="display:none"><p>${GameArray[i].question4}</p></div>` : `<p>${GameArray[i].question4}</p>`}
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
                          id="${buttonNumber}" data-bs-toggle="modal" href="#modal${buttonNumber}">500</button>
                    </div>
                </div>
                <div class="modal fade" id="modal${buttonNumber}" aria-hidden="true" aria-labelledby="..." tabindex="-1">
                    <div class="modal-dialog modal-xl modal-dialog-centered">
                        <div class="modal-content">
                            <div class="card border-${buttonArray[i]} h-100 rounded">
                                <div class="card-body text-center">
                                <br>
                                ${doublePoints == buttonNumber ? `<p>Dagens dubbel!</p><input class="form-control" placeholder="Hur mycket vågar du satsa?"><button class="btn btn-light" id="show-q">Visa fråga</button><br><div id="question" style="display:none"><p>${GameArray[i].question5}</p></div>` : `<p>${GameArray[i].question5}</p>`}
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

        this.fillOutChoices();

    }

    async fillOutChoices(){
        let dropdown = document.getElementById("cat-choice");
        let output = ``;
        let CategoriesArray = await super.loadData("GET", "https://jeopardy-oscar.herokuapp.com/all");
        CategoriesArray = JSON.parse(CategoriesArray);
        console.log(CategoriesArray);

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

        if(e.target.innerText == "100" || e.target.innerText == "200" ||e.target.innerText == "300" || e.target.innerText == "400" || e.target.innerText == "500")
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

}