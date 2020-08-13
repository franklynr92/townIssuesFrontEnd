//variables
let creation = document.querySelector(".creation");
let makeCategory = document.querySelector(".make_category");
let creationCategoryForm = document.querySelector(".creation_category_form")
let divIssues = document.querySelector(".issues");
let town = document.querySelector(".town");
let categoryDiv = document.querySelector(".issue_category");
const updateIssues = document.querySelector(".update_issue");
let creationIssueForm = document.querySelector(".creation_issue_form");
let currentIssues = document.querySelector("#current_issues");
const editIssue = document.querySelector(".edit_form");
const singleIssue = document.querySelector(".issue");
const getIssueBtn = divIssues.querySelector("BUTTON")
const issueUrl = "http://localhost:3000/issues";
const categoryUrl = "http://localhost:3000/categories";
let getCategories = document.querySelector(".get_category")
const categoryAdapter = new CategoriesAdapter("http://localhost:3000/categories");

//functions 

function getCategoriesIssue(category) {
      let divCard = document.createElement("div");
      divCard.setAttribute("id", `category-${category.id}`);
      divCard.setAttribute("class", "categories");
      let type_of_issue = document.createElement("BUTTON");
      categoryDiv.appendChild(divCard);
      categoryDiv.removeAttribute("id", "hidethis");
      let ul = document.createElement("ul");
      ul.appendChild(type_of_issue)
      divCard.appendChild(ul);
      type_of_issue.innerText = category.type_of_issue;
      type_of_issue.setAttribute("id", `${category.id}`);
      type_of_issue.setAttribute("class", "btn btn-info");
      divCard.innerHTML += `<br><br>`;
      divIssues.removeAttribute("id", "hide_this")
      divCard.addEventListener("click", (e) => {
        if (e.currentTarget.className === "categories"){
        divCategory = e.currentTarget;
        divCategory.setAttribute("class", "hide_this");
        categoryDiv.setAttribute("class",  "hide_this");
        let categoryId = e.currentTarget.getAttribute("id").charAt(9);
        let categoryName = e.currentTarget.innerText;
        changeBtn(categoryId, categoryName)
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

const changeBtn = (categoryId, categoryName) => {
  creationIssueForm.innerHTML += `
  <h3>Enter Issue for ${categoryName}</h3>
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
`
 window.scrollTo(0,document.body.scrollHeight);
}


const addTownName = name => {
town.innerHTML += `<h3>${name}</h3>`
alert(`You have added a Town${name}`)
};



const addIssue = issue => {
 getIssueBtn.setAttribute("id", "hidethis");
  let categoryName =  document.getElementById(`category-${issue.category_id}`).innerText;
  let titleToUp = issue.title.toUpperCase();
  divIssues.removeAttribute("id", "hidethis")
  divIssues.innerHTML = 
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

function showIssue(resolvingIssue) {
  singleIssue.innerHTML = resolvingIssue.innerHTML;
  singleIssue.querySelector("BUTTON").innerText = "View all Issues"
  let pTag = singleIssue.querySelector("DIV").firstElementChild;
  pTag.innerText = "Click here to view all issues";
  divIssues.setAttribute("id", "hidethis")
  singleIssue.addEventListener("click", () => {
  viewAllIssues();
  })

} 
function viewAllIssues(){
  divIssues.removeAttribute("id", "hidethis");
  singleIssue.setAttribute('id', 'hidethis');
  divIssues.addEventListener("click", () =>{
    singleIssue.removeAttribute("id", "hidethis")
  })
}


const submitCategory = category => {
    let postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(category)
    };
    return fetch(categoryUrl, postData)
    .then(resp => resp.json())
    .then(getCategoriesIssue())
  } 

makeCategory.addEventListener("click", function(){
  categoryDiv.setAttribute("id", "hidethis");
  divIssues.setAttribute("id", "hidethis")
  creation.setAttribute("id", "hidethis")
  categoryForm();
  
})



creationCategoryForm.addEventListener("submit", function(){
  event.preventDefault();
  let category = { 
    type_of_issue:document.querySelector("[name='type_of_issue']").value
  }
  submitCategory(category)
})

 currentIssues.addEventListener("click", function(){
  creationIssueForm.innerHTML = ""
  alert("Let's get those issues!")
  getTownIssues();
});

getCategories.addEventListener("click", (e) => {
  e.currentTarget.setAttribute("class", "hide_this")
  alert("Let's get those categories!")
  categoryAdapter.fetchCategories()
  .then(function(categoriesArray){
    categoriesArray.forEach(function(category){
      makeCategory.removeAttribute("id", "hide_this")
      creationCategoryForm.innerHTML = ""  
      getCategoriesIssue(category);
    })
  });
});


creationIssueForm.addEventListener("submit", (e) => {
  editIssueHandler(e)
});

//event listener

const editIssueHandler = e =>{
  e.preventDefault();
    let titleInput =  document.querySelector("[name='title']").value;
    let descriptionInput = document.querySelector("[name='description']").value;
    let cross_street_1Input = document.querySelector("[name='cross_street_1']").value;
    let cross_street_2Input = document.querySelector("[name='cross_street_2']").value;
    let dateInput = document.querySelector("[name='date']").value
    let categoryInput = e.currentTarget.querySelector("form").getAttribute("id");
    creationIssueForm.innerHTML = "";
    categoryDiv.removeAttribute("class", "hide_this")
    divIssues.removeAttribute("id", "hide_this")
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
 .then (issue => addIssue(issue))

.catch(() => alert("Something went wrong"))
};