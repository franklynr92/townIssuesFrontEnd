//variables
let makeCategory = document.querySelector(".make_category");
const makeCategoryParent = makeCategory.parentElement;
let creationCategoryForm = document.querySelector(".creation_category_form")
let divIssues = document.querySelector("#issues");
const divIssuesParent = divIssues.parentElement;
let town = document.querySelector(".town");
let categoryDiv = document.querySelector(".issue_category");
const categoryDivParent = categoryDiv.parentElement
const updateIssues = document.querySelector(".update_issue");
let creationIssueForm = document.querySelector(".creation_issue_form");
let currentIssues = document.querySelector("#current_issues");
const editIssue = document.querySelector(".edit_form");
const singleIssue = document.querySelector(".issue");
const singleIssueParent = singleIssue.parentElement;

const issueUrl = "http://localhost:3000/issues";
const categoryUrl = "http://localhost:3000/categories";
let getCategories = document.querySelector(".get_category")
const getCategoriesParent = getCategories.parentElement;
const displayIssues = document.querySelector(".display_issue");
const displayCategories = document.querySelector(".display_category");

//functions 


function triggerSubmitFetch(category){
  CategoryAdapter.submitCategory(category)
  .then(resp => resp.json())
  .then(category => getCategoriesIssue(category))
  .then(function(){creationCategoryForm.innerHTML = "" })
  .catch(() => alert("Something went wrong"))
}

function getCategoriesIssue(category) {
  categoryDivParent.removeAttribute("class", "hidethis");
  let divCard = document.createElement("div");
  divCard.setAttribute("id", `category-${category.id}`);
  divCard.setAttribute("class", "categories");
  let type_of_issue = document.createElement("BUTTON");
  categoryDiv.appendChild(divCard);
  let ul = document.createElement("ul");
  ul.appendChild(type_of_issue)
  divCard.appendChild(ul);
  type_of_issue.innerText = category.type_of_issue;
  type_of_issue.setAttribute("id", `${category.id}`);
  type_of_issue.setAttribute("class", "btn btn-info");
  divCard.innerHTML += `<br><br>`;
  divIssuesParent.removeAttribute("class", "hidethis")
  divCard.addEventListener("click", (e) => {
    if (e.currentTarget.className === "categories"){
    divCategoryChild = e.currentTarget;
    categoryDivParent.setAttribute("class", "hidethis");
    let categoryId = divCategoryChild.getAttribute("id").charAt(9);
    let categoryName = divCategoryChild.innerText;
    addIssueToCategory(categoryId, categoryName)
    }
    }
  );
}

const getTownIssues = () =>{
    fetch(issueUrl)
  .then(function(obj){
    return obj.json()
  })
  .then(function (issuesArray){
    issuesArray.forEach(issue => addIssue(issue))});
};

const categoryForm = () => {


  creationCategoryForm.innerHTML = `
    <form id="category-form">
      <input type="text" name="type_of_issue" placeholder="type of category"/> 
      <input type="submit" value="Add The Category" />
      <input type="reset"/>
    </form>
`
}

function displayCat(){
  getCategoriesParent.setAttribute("class", "hidethis")
  categoryDivParent.removeAttribute("class", "hidethis");
  divIssuesParent.removeAttribute("class", "hidethis")
  
}


const addIssueToCategory = (categoryId, categoryName) => {
  
  creationIssueForm.innerHTML += `
  <h3 class="heading">Enter Issue for ${categoryName}</h3>
  <form class="issues-form" id=${categoryId}>
    <input type="text" name="title" placeholder="title"/>
    <input type="text" name="description" placeholder="description of issue"/>
    <input type="text" name="cross_street_1" placeholder="cross street 1"/>
    <input type="text" name="cross_street_2" placeholder="cross street 2"/>
    <input type="date" name="date"/>
    <input type="submit" value="Add The Issue" />
    <input type="reset"/>
  </form>
  <br>
  <br>
  <hr>
  <button type="button" class="btn btn-primary">Display Categories</button>
`

window.scrollTo(0,document.body.scrollHeight);

// creationIssueForm.addEventListener("click", (e) =>{
//   e.currentTarget.innerText = "";
//   alert("Let's get those categories!")
//   CategoryAdapter.fetchCategories()
// })
}


const addIssue = issue => {
let getIssueBtn = divIssues.querySelector("BUTTON")
getIssueBtn.setAttribute("class", "hidethis");
  let categoryName =  document.getElementById(`category-${issue.category_id}`).innerText;
  let titleToUp = issue.title.toUpperCase();
  divIssuesParent.removeAttribute("class", "hidethis");
  divIssues.innerHTML +=`  
  <div class="resolved" id=${issue.id}>
  <h3>Category: ${categoryName}</h3>
  <ul>Issue #${issue.id}
  <p>Title: ${titleToUp}</p>
  <li>Description ${issue.description}</li>
  <li>Cross street 1${issue.cross_street_1}</li>
  <li>Cross street 2${issue.cross_street_2}</li>
  <li>Date: ${issue.date}</li>
  <li id="resolution">Resolved: ${issue.resolved}</li>
  </ul>
<div id="resolved">
  <p id=${issue.id}>Click here to view a single issue</p>
  <button type="button" class="btn btn-primary" class="resolved" id="issue-${issue.id}">View issue # ${issue.id}</button> 
</div>
<div id="make an issue">
<p>Click on a category to create an issue for that category</p>
</div>
  </div>
  <br>
`
window.scrollTo(0,document.body.scrollHeight); 
const resolvedIssues = document.querySelectorAll(".resolved");
resolvedIssues.forEach(resolvedIssue => resolvedIssue.addEventListener("click", (e) => {
  const resolvingIssue = e.currentTarget;
showIssue(resolvingIssue)
  }))
}

const editIssueHandler = e =>{
  e.preventDefault();
    let titleInput =  document.querySelector("[name='title']").value;
    let descriptionInput = document.querySelector("[name='description']").value;
    let cross_street_1Input = document.querySelector("[name='cross_street_1']").value;
    let cross_street_2Input = document.querySelector("[name='cross_street_2']").value;
    let dateInput = document.querySelector("[name='date']").value
    let categoryInput = e.currentTarget.querySelector("form").getAttribute("id");
    creationIssueForm.innerHTML = "";
    categoryDiv.removeAttribute("class", "hidethis")
    divIssues.removeAttribute("class", "hidethis")
  submitIssue(titleInput, descriptionInput, cross_street_1Input, cross_street_2Input, dateInput, categoryInput);
}

function submitIssue(title, description, cross_street_1, cross_street_2, date, id){
issue = {
  title: title,
  description: description,
  cross_street_1: cross_street_1,
  cross_street_2: cross_street_2,
  date: date,
  category_id: id
  }
let postData = {
  method: "POST", 
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(issue)
};
return fetch(`http://localhost:3000/issues`, postData)
.then(resp => resp.json())
.then (getTownIssues())
.catch(() => alert("Something went wrong"))
};

function showIssue(resolvingIssue) {
  singleIssue.innerHTML = resolvingIssue.innerHTML;
  singleIssue.querySelector("BUTTON").innerText = "View all Issues"
  let pTag = singleIssue.querySelector("DIV").firstElementChild;
  pTag.innerText = "Click here to view all issues";
  divIssuesParent.setAttribute("class", "hidethis")
  singleIssue.addEventListener("click", () => {
  viewAllIssues();
  })
} 

function viewAllIssues(){
  divIssuesParent.removeAttribute("class", "hidethis");
  singleIssueParent.setAttribute('class', 'hidethis');
  divIssues.addEventListener("click", () =>{
    singleIssueParent.removeAttribute("class", "hidethis")
  })
}





//event listener
makeCategory.addEventListener("click", function(){
  categoryDivParent.setAttribute("class", "hidethis");
  divIssuesParent.setAttribute("class", "hidethis")
  categoryForm();
})

getCategories.addEventListener("click", () =>{
  divIssuesParent.removeAttribute("class", "hidethis");
  categoryDivParent.removeAttribute("class", "hidethis");
})

creationCategoryForm.addEventListener("submit", function(){
  event.preventDefault();
  let category = { 
    type_of_issue:document.querySelector("[name='type_of_issue']").value
  }
triggerSubmitFetch(category);
})
currentIssues.addEventListener("click", function(){
  creationIssueForm.innerHTML = ""
  alert("Let's get those issues!")
  getTownIssues();
});

getCategories.addEventListener("click", (e) => {
  e.currentTarget.setAttribute("class", "hidethis")
  alert("Let's get those categories!")
  CategoryAdapter.fetchCategories()
});


creationIssueForm.addEventListener("submit", (e) => {
  editIssueHandler(e)
});



