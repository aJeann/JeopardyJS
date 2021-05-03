import UI from "../ui.js";
import Header from "./header.js";

export default class MainSection extends UI {
    constructor(appendTo) {
        super(appendTo);
        super.container.addEventListener("click", async (e) => {
        
            if (e.target.id == "show-q"){
                let inputValue = Number(document.querySelector(".form-control").value);
                sessionStorage.setItem("valueOf", inputValue);
                this.showQ();
            }
            if (e.target.className == "dropdown-item"){
                $("#choose-game-modal").modal('hide');
                let path = e.target.dataset.categoryId;
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

    }

    async showCategories(category){
        let CategoriesArray = await super.loadData("GET", category);
        CategoriesArray = JSON.parse(CategoriesArray);
        
        for(let i = 0; i<CategoriesArray.length; i++){
            if(i == 5){
                localStorage.setItem("finalQ", JSON.stringify(CategoriesArray[i]));
            }
        }

        let buttonArray = ['primary', 'danger', 'success', 'info', 'secondary'];
        let buttonNumber = 0;

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
                <h4>${CategoriesArray[i].name}<h4>
                <div class="card w-80 rounded">
                    <div class="card-body text-center">
                        <button class="btn btn-${buttonArray[i]} w-100 h-100" data-question-value="${CategoriesArray[i].q1}" id="${buttonNumber}" data-bs-toggle="modal" data-bs-target="#modal${buttonNumber}">100</button>
                    </div>
                </div>
                <div class="modal fade" id="modal${buttonNumber}" aria-hidden="true" aria-labelledby="..." tabindex="-1">
                    <div class="modal-dialog modal-xl modal-dialog-centered">
                        <div class="modal-content">
                            <div class="card bg-${buttonArray[i]} h-100 rounded"> 
                                <div class="card-body text-center">
                                <br>
                                ${doublePoints == buttonNumber ? `<p>Dagens dubbel!</p><input class="form-control" placeholder="Hur mycket vågar du satsa?"><button class="btn btn-light" id="show-q">Visa fråga</button><br><div id="question" style="display:none"><p>${CategoriesArray[i].q2}</p></div>` : `<p>${CategoriesArray[i].q1}</p>`}
                                <br>                              
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
                        <button class="btn btn-${buttonArray[i]} w-100 h-100" data-question-value="${CategoriesArray[i].q2}" id="${buttonNumber}" data-bs-toggle="modal" href="#modal${buttonNumber}">200</button>
                    </div>
                </div>
                <div class="modal fade" id="modal${buttonNumber}" aria-hidden="true" aria-labelledby="..." tabindex="-1">
                    <div class="modal-dialog modal-xl modal-dialog-centered">
                        <div class="modal-content">
                            <div class="card bg-${buttonArray[i]} h-100 rounded">
                                <div class="card-body text-center">
                                <br>
                                ${doublePoints == buttonNumber ? `<p>Dagens dubbel!</p><input class="form-control" placeholder="Hur mycket vågar du satsa?"><button class="btn btn-light" id="show-q">Visa fråga</button><br><div id="question" style="display:none"><p>${CategoriesArray[i].q2}</p></div>` : `<p>${CategoriesArray[i].q2}</p>`}
                                <br> 
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
                        <button class="btn btn-${buttonArray[i]} w-100 h-100" data-question-value="${CategoriesArray[i].q3}" id="${buttonNumber}" data-bs-toggle="modal" href="#modal${buttonNumber}">300</button>
                    </div>
                </div>
                <div class="modal fade" id="modal${buttonNumber}" aria-hidden="true" aria-labelledby="..." tabindex="-1">
                    <div class="modal-dialog modal-xl modal-dialog-centered">
                        <div class="modal-content">
                            <div class="card bg-${buttonArray[i]} h-100 rounded">
                                <div class="card-body text-center">
                                <br>
                                ${doublePoints == buttonNumber ? `<p>Dagens dubbel!</p><input class="form-control" placeholder="Hur mycket vågar du satsa?"><button class="btn btn-light" id="show-q">Visa fråga</button><br><div id="question" style="display:none"><p>${CategoriesArray[i].q2}</p></div>` : `<p>${CategoriesArray[i].q3}</p>`}
                                <br>  
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
                        <button class="btn btn-${buttonArray[i]} w-100 h-100" data-question-value="${CategoriesArray[i].q4}" id="${buttonNumber}" data-bs-toggle="modal" href="#modal${buttonNumber}">400</button>
                    </div>
                </div>
                <div class="modal fade" id="modal${buttonNumber}" aria-hidden="true" aria-labelledby="..." tabindex="-1">
                    <div class="modal-dialog modal-xl modal-dialog-centered">
                        <div class="modal-content">
                            <div class="card bg-${buttonArray[i]} h-100 rounded">
                                <div class="card-body text-center">
                                <br>
                                ${doublePoints == buttonNumber ? `<p>Dagens dubbel!</p><input class="form-control" placeholder="Hur mycket vågar du satsa?"><button class="btn btn-light" id="show-q">Visa fråga</button><br><div id="question" style="display:none"><p>${CategoriesArray[i].q2}</p></div>` : `<p>${CategoriesArray[i].q4}</p>`}
                                <br>
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
                        <button class="btn btn-${buttonArray[i]} w-100 h-100" data-question-value="${CategoriesArray[i].q5}" id="${buttonNumber}" data-bs-toggle="modal" href="#modal${buttonNumber}">500</button>
                    </div>
                </div>
                <div class="modal fade" id="modal${buttonNumber}" aria-hidden="true" aria-labelledby="..." tabindex="-1">
                    <div class="modal-dialog modal-xl modal-dialog-centered">
                        <div class="modal-content">
                            <div class="card bg-${buttonArray[i]} h-100 rounded">
                                <div class="card-body text-center">
                                <br>
                                ${doublePoints == buttonNumber ? `<p>Dagens dubbel!</p><input class="form-control" placeholder="Hur mycket vågar du satsa?"><button class="btn btn-light" id="show-q">Visa fråga</button><br><div id="question" style="display:none"><p>${CategoriesArray[i].q2}</p></div>` : `<p>${CategoriesArray[i].q5}</p>`}
                                <br>
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
        let CategoriesArray = await super.loadData("GET", "data/categoryChoice.JSON");
        CategoriesArray = JSON.parse(CategoriesArray);
        console.log(CategoriesArray);

        for(let i = 0; i < CategoriesArray.length; i++){
            output += `<a type="button" class="dropdown-item" href="#" data-category-id="${CategoriesArray[i].path}">${CategoriesArray[i].name}</a>`
        }

        dropdown.innerHTML += output;
        

        
    }

    async changeValue(e, category){
        let CategoriesArray = await super.loadData("GET", category);
        CategoriesArray = JSON.parse(CategoriesArray);
        let answer = "";

        if(e.target.innerText == "100" || e.target.innerText == "200" ||e.target.innerText == "300" || e.target.innerText == "400" || e.target.innerText == "500")
        sessionStorage.setItem("valueOf", e.target.innerText);


        for (let i in CategoriesArray){
            if(CategoriesArray[i].q1 == e.target.dataset.questionValue){
                answer = CategoriesArray[i].a1;
            }
            if(CategoriesArray[i].q2 == e.target.dataset.questionValue){
                answer = CategoriesArray[i].a2;
            }
            if(CategoriesArray[i].q3 == e.target.dataset.questionValue){
                answer = CategoriesArray[i].a3;
            }
            if(CategoriesArray[i].q4 == e.target.dataset.questionValue){
                answer = CategoriesArray[i].a4;
            }
            if(CategoriesArray[i].q5 == e.target.dataset.questionValue){
                answer = CategoriesArray[i].a5;
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

}