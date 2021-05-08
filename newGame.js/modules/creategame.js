import UI from "../ui.js";

export default class CreateGame extends UI {
    constructor(appendTo) {
        super(appendTo);

        this.createForms();
    }

    async createForms(){
    let output = ``;

    output += `
    
    <div class="container mb-5">
    <p>Instruktioner: <br>
    -Kontakta Axel när du vill skapa ett nytt spel!!! 
    -Varje spel har fem kategorier. Det vill säga för varje spel du skapar så måste du skicka fem separata kategorier med samma Spelnamn.<br>
    -Varje gång du vill skicka en ny kategori som ska tillhöra ett specifikt spel så måste du använda exakt samma Spelnamn.<br>
    -Fyll i frågor i "Fråga 1, 2 etc"<br>
    -Fyll i svar för respektive frågor i "Svar 1, 2 etc"<br>
    -Varje spel har en "final jeopardy"-fråga. Denna behöver du bara fylla i när du skickar SISTA kategorin<br>
    -Så fyll i SAMMA spelnamn varje gång(upp till fem kategorier), fyll i namnet på den kategori du skapar, fyll i frågor och svar för den kategorin och tryck sedan på "Skicka kategori"
    </p>
    <form id="myForm" type="post">
    <div class="form-group">
      <label for="title">Spelnamn</label>
      <input type="text" class="form-control" id="gametitle" placeholder="Namn på ditt spel">
    </div>
    <div class="form-group">
      <label for="category">Kategorinamn</label>
      <input type="text" class="form-control" id="categoryname" placeholder="Namn på kategori">
    </div>
    <br>
    <div class="form-group">
      <label for="question1">Fråga 1</label>
      <input type="text" class="form-control" id="question1" placeholder="Fråga 1">
    </div>
    <div class="form-group">
      <label for="answer1">Svar på fråga 1</label>
      <input type="text" class="form-control" id="answer1" placeholder="Svar 1">
    </div>
    <br>
    <div class="form-group">
      <label for="question2">Fråga 2</label>
      <input type="text" class="form-control" id="question2" placeholder="Fråga 2">
    </div>
    <div class="form-group">
      <label for="answer2">Svar på fråga 2</label>
      <input type="text" class="form-control" id="answer2" placeholder="Svar 2">
    </div>
    <br>
    <div class="form-group">
      <label for="question3">Fråga 3</label>
      <input type="text" class="form-control" id="question3" placeholder="Fråga 3">
    </div>
    <div class="form-group">
      <label for="answer3">Svar på fråga 3</label>
      <input type="text" class="form-control" id="answer3" placeholder="Svar 3">
    </div>
    <br>
    <div class="form-group">
      <label for="question4">Fråga 4</label>
      <input type="text" class="form-control" id="question4" placeholder="Fråga 4">
    </div>
    <div class="form-group">
      <label for="answer4">Svar på fråga 4</label>
      <input type="text" class="form-control" id="answer4" placeholder="Svar 4">
    </div>
    <br>
    <div class="form-group">
      <label for="question5">Fråga 5</label>
      <input type="text" class="form-control" id="question5" placeholder="Fråga 5">
    </div>
    <div class="form-group">
      <label for="answer5">Svar på fråga 5</label>
      <input type="text" class="form-control" id="answer5" placeholder="Svar 5">
    </div>
    <br>
    <div class="form-group">
      <label for="finalQ">Final Jeopardy Fråga</label>
      <input type="text" class="form-control" id="finalQ" placeholder="Final jeopardy">
    </div>
    <div class="form-group mb-2">
      <label for="finalA">Final Jeopardy Svar</label>
      <input type="text" class="form-control" id="finalA" placeholder="Final jeopardy answer">
    </div>
    <button type="submit" class="btn btn-outline-success" id="add-btn">Skicka kategori</button>
    </form>
    </div>`
    
        
    super.container.innerHTML = output;

    $("#add-btn").click( function(e){
        let OrderNumbers = [];
        let maxCat = [];
        let catID = 0;
        let newNumber = 0;
        let gameName = document.getElementById("gametitle").value;

        let jsonData = {'name': gameName};
          console.log(jsonData)
          $.ajax(
            {
                url : 'https://jeopardy-oscar.herokuapp.com/addGame',
                type: "POST",
                crossDomain: true,
                dataType: 'jsonp',
                data : jsonData,
                async: true,
                 success : function(response) {
                   console.log(response);
                  },
                  
                headers: {
                  accept: "application/json",
                  "Access-Control-Allow-Origin":"*"
                  
              }
              
            });         
  
        

        let cateName = document.getElementById("categoryname").value;
        let q1 = document.getElementById("question1").value;
        let a1 = document.getElementById("answer1").value;
        let q2 = document.getElementById("question2").value;
        let a2 = document.getElementById("answer2").value;
        let q3 = document.getElementById("question3").value;
        let a3 = document.getElementById("answer3").value;
        let q4 = document.getElementById("question4").value;
        let a4 = document.getElementById("answer4").value;
        let q5 = document.getElementById("question5").value;
        let a5 = document.getElementById("answer5").value;
        let finalq = document.getElementById("finalQ").value;
        let finala = document.getElementById("finalA").value;

        const xhr = new XMLHttpRequest();
            xhr.open("GET", "https://jeopardy-oscar.herokuapp.com/all");
            xhr.send();
            xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
            let customer = JSON.parse(xhr.responseText);

            customer.forEach(customer =>{
            console.log(customer.id)
            OrderNumbers.push(customer.id);
            })
          }
        }
        const xhr2 = new XMLHttpRequest();
            xhr2.open("GET", "https://jeopardy-oscar.herokuapp.com/allCats");
            xhr2.send();
            xhr2.onreadystatechange = function () {
            if (xhr2.readyState === 4 && xhr2.status === 200) {
            let customer = JSON.parse(xhr2.responseText);

            customer.forEach(customer =>{
            console.log(customer.id)
            maxCat.push(customer.id);
            })
          }
        }
        
          
        setTimeout(()=>{
                 
        console.log(OrderNumbers)

        catID = Math.max(...maxCat);
        if (!isFinite(catID)){
          catID = 1;
          }

        newNumber = Math.max(...OrderNumbers);
        console.log(newNumber)
            
        if (!isFinite(newNumber)){
        newNumber = 1;
        }
        console.log(newNumber);
              let jsonData2 = {'game_id': newNumber, 'cat_id': catID+1, 'name': cateName, 'q1': q1, 'a1': a1, 'q2': q2, 'a2': a2, 'q3': q3, 'a3': a3, 'q4': q4, 'a4': a4, 'q5': q5, 'a5': a5, 'finalA': finala, 'finalQ': finalq};
              console.log(jsonData2)
              $.ajax(
                  {
                      url : 'https://jeopardy-oscar.herokuapp.com/addCategory',
                      type: "POST",
                      crossDomain: true,
                      dataType: 'jsonp',
                      data : jsonData2,
                      async: true,
                       success : function(response) {
                         console.log(response);
                        },
                        
                      headers: {
                        accept: "application/json",
                        "Access-Control-Allow-Origin":"*"
                        
                    }
                    
                  }); 
              
           }, 3500);
           e.preventDefault();
           
     
     
           document.getElementById("myForm").reset();
    
  });
    

      
      
    }
    

    
}