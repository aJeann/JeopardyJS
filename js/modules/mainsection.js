import UI from "../ui.js";

export default class MainSection extends UI {
    constructor(appendTo) {
        super(appendTo);
        super.container.addEventListener("click", async (e) => {
            if (e.target.className == 'choose-game btn btn-secondary btn-lg btn-block text-nowrap t-1 btn-space hover-shadow'){
              this.mainSection.showCategories("./data/categories2.JSON");
            }
        });
        
        let doublePoints = this.getRandomNumber();
        console.log(doublePoints);
        super.container.addEventListener("click", async (e) => {
            if (e.target.classList.contains("btn") && e.target.dataset.questionValue){
                this.changeValue(e, doublePoints, localStorage.getItem("category"));
            }
        });
    }

    async showCategories(category){
        let CategoriesArray = await super.loadData("GET", category);
        CategoriesArray = JSON.parse(CategoriesArray);
        console.log(CategoriesArray);

        let buttonArray = ['btn-primary', 'btn-danger', 'btn-success', 'btn-info', 'btn-secondary'];
        let buttonNumber = 0;

        let output = `
        <div class="row">
        <div class="col-1">
        </div>
        `;

        for(let i = 0; i<CategoriesArray.length; i++){
            console.log("test");
            output +=
            `
            <div class="col-2 text-center">
                <h4>${CategoriesArray[i].name}<h4>
                <div class="card w-80 rounded">
                    <div class="card-body text-center">
                        <button class="btn ${buttonArray[i]} w-100 h-100" data-question-value="${CategoriesArray[i].q1}" id="${buttonNumber}">100</button>
                    </div>
                </div>
                `
                buttonNumber++
            output +=
            `
            <div class="card w-80 rounded">
                    <div class="card-body text-center">
                        <button class="btn ${buttonArray[i]} w-100 h-100" data-question-value="${CategoriesArray[i].q2}" id="${buttonNumber}">200</button>
                    </div>
                </div>
                `
                
                buttonNumber++
            output +=
            `
                <div class="card w-80 rounded">
                    <div class="card-body text-center">
                        <button class="btn ${buttonArray[i]} w-100 h-100" data-question-value="${CategoriesArray[i].q3}" id="${buttonNumber}">300</button>
                    </div>
                </div>
                `
                buttonNumber++
            output +=
                `
                <div class="card w-80 rounded">
                    <div class="card-body text-center">
                        <button class="btn ${buttonArray[i]} w-100 h-100" data-question-value="${CategoriesArray[i].q4}" id="${buttonNumber}">400</button>
                    </div>
                </div>
                `
                buttonNumber++
            output +=
                `
                <div class="card w-80 rounded">
                    <div class="card-body text-center">
                        <button class="btn ${buttonArray[i]} w-100 h-100" data-question-value="${CategoriesArray[i].q5}" id="${buttonNumber}">500</button>
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
                
        </div>`

        super.container.innerHTML = output;

    }

    async changeValue(e, doublePoints, category){
        let CategoriesArray = await super.loadData("GET", category);
        CategoriesArray = JSON.parse(CategoriesArray);
        let answer = "";

        if(e.target.innerText == "100" || e.target.innerText == "200" ||e.target.innerText == "300" || e.target.innerText == "400" || e.target.innerText == "500")
        sessionStorage.setItem("valueOf", e.target.innerText);

        if(e.target.id == doublePoints){
            let doubleP = parseInt(e.target.innerText);
            sessionStorage.setItem("valueOf", doubleP*2);
            alert("DUBBEL!")
        }



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

    getRandomNumber(){
        return Math.floor(Math.random() * 25);
    }

}