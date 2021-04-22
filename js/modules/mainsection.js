import UI from "../ui.js";

export default class MainSection extends UI {
    constructor(appendTo) {
        super(appendTo);
        super.container.addEventListener("click", async (e) => {
            if (e.target.classList.contains("btn") && e.target.dataset.questionValue){
                this.changeValue(e);
            }
        
        });
        this.showCategories();
    }

    async showCategories(){
        let CategoriesArray = await super.loadData("GET", "./data/categories.JSON");
        CategoriesArray = JSON.parse(CategoriesArray);
        console.log(CategoriesArray);

        let output = `
        <div class="row">
        <div class="col-1">
        </div>
        `;

        for(let i = 0; i<CategoriesArray.length; i++){
            console.log("test");
            output +=
            `
            <div class="col-2">
                <h4>${CategoriesArray[i].name}<h4>
                <div class="card w-80 rounded p-2">
                    <div class="card-body text-center">
                        <button class="btn btn-primary w-100 h-100" data-question-value="${CategoriesArray[i].q1}">100</button>
                    </div>
                </div>
                <div class="card w-80 rounded p-2">
                    <div class="card-body text-center">
                        <button class="btn btn-secondary w-100 h-100" data-question-value="${CategoriesArray[i].q2}">200</button>
                    </div>
                </div>
                <div class="card w-80 rounded p-2">
                    <div class="card-body text-center">
                        <button class="btn btn-danger w-100 h-100" data-question-value="${CategoriesArray[i].q3}">300</button>
                    </div>
                </div>
                <div class="card w-80 rounded p-2">
                    <div class="card-body text-center">
                        <button class="btn btn-info w-100 h-100" data-question-value="${CategoriesArray[i].q4}">400</button>
                    </div>
                </div>
                <div class="card w-80 rounded p-2">
                    <div class="card-body text-center">
                        <button class="btn btn-success w-100 h-100" data-question-value="${CategoriesArray[i].q5}">500</button>
                    </div>
                </div>
        
            </div>

            `
        }

        output +=
        `
        <div class="row-1">
        </div>
                
        </div>`

        super.container.innerHTML = output;

    }

    async changeValue(e){
        let CategoriesArray = await super.loadData("GET", "./data/categories.JSON");
        CategoriesArray = JSON.parse(CategoriesArray);
        let answer = "";

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

        console.log(e.target.innerText);
        if(e.target.innerText == ""){
            return;
        }
        else if(e.target.innerText != e.target.dataset.questionValue && e.target.innerText != answer){
            e.target.innerHTML = e.target.dataset.questionValue;
        }
        else if(e.target.innerText == e.target.dataset.questionValue){
            e.target.innerHTML = answer;
        }
        else
            e.target.innerHTML = "";
        
    }

}