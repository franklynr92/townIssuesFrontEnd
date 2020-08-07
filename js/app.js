//variables
let creation = document.querySelector(".creation");
let btn = document.querySelector("#change");
let btnTown = document.querySelector("#town");
let divIssues = document.querySelector(".issues");
let town = document.querySelector(".town");
let category = document.querySelector(".issue_category");
let btnCategory = document.querySelector("#town");
const townUrl = "http://localhost:3000/towns";
let townsObj = [];
let categoryObj = [];
let issueObj = [];
//functions

function townForm(e){
  if (e.target.id ==="town"){
    btnTown.innerText = "Add your Town"
  town.innerHTML = `
  <form id="town-form">
    <input type="text" id="town_name" placeholder="name"/>
    <input type="submit" value="Add The Town" />
    <input type="reset"/>
  </form>
`}
};

function categoryForm(e){
  if (e.target.id ==="category"){
    btnCategory.innerText = "Add your Category"
  category.innerHTML = `
  <form id="category-form">
    <input type="text" id="category_name" placeholder="name"/>
    <input type="submit" value="Add The Category" />
    <input type="reset"/>
  </form>
`}
};

function changeBtn(e){
  if (e.target.id === "change"){
  btn.innerText = "Add the Issue"
  creation.innerHTML = `
  <form id="issues-form">
    <input type="text" id="issue-name" placeholder="name"/>
    <input type="text" id="issue-description" placeholder="description of issue"/>
    <input type="text" id="issue-cross-street1" placeholder="cross-street1"/>
    <input type="text" id="issue-cross-street2" placeholder="cross-street2"/>
    <input type="date" id="issue-date"/>
    <input type="submit" value="Add The Issue" />
    <input type="reset"/>
  </form>
`}
}

function addTownName(e){
e.preventDefault()
let inputName = town.querySelector("#town_name");
divIssues.innerHTML += `<h3>${inputName.value}</h3>`
alert("You have added an issue")
};

function addCategory(e){
  e.preventDefault()
  let inputName = category.querySelector("#category_name");
  divIssues.innerHTML += `<h4>${inputName.value}</h4>`
  alert("You have added a category")
};

function addIssueName(e){
  e.preventDefault()
  let inputName = creation.querySelector('#issue-name');
  let inputDesc = creation.querySelector('#issue-description');
  let inputSt1 = creation.querySelector('#issue-cross-street1');
  let inputSt2 = creation.querySelector('#issue-cross-street2');
  let inputDate = creation.querySelector('#issue-date');
  divIssues.innerHTML +=`<ul>
  <p>${inputName.value}</p>
  <li>${inputDesc.value}</li>
  <li>${inputSt1.value}</li>
  <li>${inputSt2.value}</li>
  <li>${inputDate.value}</li>
  </ul>`
  alert("You have added an issue")
};



//event listener
document.addEventListener("DOMcontentLoaded", console.log );


town.addEventListener("click", townForm);

town.addEventListener("submit", addTownName);

category.addEventListener("click", categoryForm);
category.addEventListener("submit", addCategory);

creation.addEventListener("click", changeBtn);



creation.addEventListener("submit", addIssueName);

 



  

//when user clicks on button to `create issue` an event is triggerd []
// the event will then either go to a function and create form || create form right after event listener []
// form will have input for issue name []