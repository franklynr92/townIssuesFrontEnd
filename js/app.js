//variables
let creation = document.querySelector(".creation");
let btn = document.querySelector("#change");
let btnTown = document.querySelector("#town");
let divIssues = document.querySelector(".issues");
let town = document.querySelector(".town");
let category = document.querySelector(".issue_category");
let btnCategory = document.querySelector("#town");
// let townFormForm = document.querySelector("#town_form");
const townUrl = "http://localhost:3000/towns";
const isssueUrl = "http://localhost:3000/issues";
let townsObj = [];
let issueObj = [];
//functions


// fetch("http://localhost:3000/towns")
//   .then(function(obj){
//     return obj.json()
//   })
//   .then (console.log)

//   fetch(`http://localhost:3000/issues`)
//   .then(function(obj){
//     return obj.json()
//   })
//   .then(console.log)

function townForm(e){
  if (e.target.id ==="town"){
    btnTown.innerText = "Add your Town"
  town.innerHTML = `
  <form id="town_form">
    <input type="text" name="name" placeholder="name"/>
    <input type="submit" value="Add The Town" />
    <input type="reset"/>
  </form>
`}
};

function submitTown(town){
  let postData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(town)
  };
  return fetch(townUrl, postData)
  .then(resp => resp.json())
  .then(town => addTownName(town.name))
  .catch(() => alert("Something went wrong"))
} 



function changeBtn(e){
  if (e.target.id === "change"){
  btn.innerText = "Add the Issue"
  creation.innerHTML = `
  <form id="issues-form">
    <input type="text" name="name" placeholder="name"/>
    <input type="text" name="description" placeholder="description of issue"/>
    <input type="text" name="cross_street_1" placeholder="cross street 1"/>
    <input type="text" name="cross_street_2" placeholder="cross street 2"/>
    <input type="date" name="date"/>
    <input type="checkbox" name="resolved" value="resolved"  />
    <label for="resolved"> Is the issue resolved?</label>
    <input type="submit" value="Add The Issue" />
    <input type="reset"/>
  </form>
`}
}

function addTownName(name){
console.log(name)
divIssues.innerHTML += `<h3>${name}</h3>`
alert(`You have added a Town${name}`)
};


function addIssue(issue){
  console.log(issue)
  
  divIssues.innerHTML +=`<ul>
  <p>${issue.name}</p>
  <li>${issue.description}</li>
  <li>${issue.cross_street_1}</li>
  <li>${issue.cross_street_2}</li>
  <li>${issue.date}</li>
  </ul>`
  alert(`You have added the issue ${issue.name}`)
};



//event listener
document.addEventListener("DOMcontentLoaded", console.log );


town.addEventListener("click", townForm);

// town.addEventListener("submit", addTownName);

town.addEventListener("submit", function(){
    event.preventDefault();
    let town = { 
      town: {name: document.querySelector("[name='name']").value} 
    }
    
    // let townName = event.currentTarget.querySelector("#town_name").value;
    submitTown(town)}
    //event.currentTarget.reset()
);
//select it
//listen to it

//then you have to do it
//select it again
//push it through that bitch
//dataset

creation.addEventListener("click", changeBtn);



creation.addEventListener("submit", (e) => {
  editIssueHandler(e)
});

function editIssueHandler(e){
  e.preventDefault();
  
    let nameInput =  document.querySelector("[name='name']").value;
    let descriptionInput = document.querySelector("[name='description']").value;
    let cross_street_1Input = document.querySelector("[name='cross_street_1']").value;
    let cross_street_2Input = document.querySelector("[name='cross_street_2']").value;
    let dateInput = document.querySelector("[name='date']").value
  submitIssue(nameInput, descriptionInput, cross_street_1Input, cross_street_2Input, dateInput);
}

function submitIssue(name, description, cross_street_1, cross_street_2, date){
 issue = {
  name: name,
  description: description,
  cross_street_1: cross_street_1,
  cross_street_2: cross_street_2,
  date: date
  }
let postData = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(issue)
};
return fetch(isssueUrl, postData)
.then(resp => resp.json())
.then
(issue =>
  addIssue(issue))

.catch(() => alert("Something went wrong"))
};


//when user clicks on button to `create issue` an event is triggerd []
// the event will then either go to a function and create form || create form right after event listener []
// form will have input for issue name []


// function categoryForm(e){
  //   if (e.target.id ==="category"){
    //     btnCategory.innerText = "Add your Category"
    //   category.innerHTML = `
    //   <form id="category-form">
    //     <input type="text" id="category_name" placeholder="name"/>
    //     <input type="submit" value="Add The Category" />
    //     <input type="reset"/>
    //   </form>
    // `}
    // };
    
    // function addCategory(e){
      //   e.preventDefault()
      //   let inputName = category.querySelector("#category_name");
      //   divIssues.innerHTML += `<h4>${inputName.value}</h4>`
      //   alert("You have added a category")
      // };



      // category.addEventListener("click", categoryForm);
      // category.addEventListener("submit", addCategory);