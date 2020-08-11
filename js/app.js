//variables
let creation = document.querySelector(".creation");
let makeCategory = document.querySelector(".make_category");
let divIssues = document.querySelector(".issues");
let town = document.querySelector(".town");
let categoryDiv = document.querySelector(".issue_category");
let creationIssueForm = document.querySelector(".creation_issue_form");
let currentIssues = document.querySelector("#current_issues");
const issueUrl = "http://localhost:3000/issues";
let getCategories = document.querySelector(".get_category")



//functions 


function getIssueCategories(){
fetch(`http://localhost:3000/categories`)
  .then(function(obj){
    return obj.json()
  })
  .then(function (categoriesArray){
    categoriesArray.forEach(function(category){
      
      let divCard = document.createElement("div");
      divCard.setAttribute("id", `category-${category.id}`);
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
      makeCategory.removeAttribute("id", "hide_this")
      divCard.addEventListener("click", (e) => {
        if (e.currentTarget.querySelector(".btn.btn-info").className === "btn btn-info"){
        divCategory = e.currentTarget;
        divCategory.setAttribute("class", "hide_this");
        categoryDiv.setAttribute("class",  "hide_this");
        let categoryId = e.currentTarget.getAttribute("id").charAt(9);
        let categoryName = e.currentTarget.innerText;
        changeBtn(divCard, categoryId, categoryName
          
          )}
        }
      );
    })
  })
};

  function getTownIssues(){
    fetch(issueUrl)
  .then(function(obj){
    return obj.json()
  })
  .then(function (issuesArray){
    issuesArray.forEach(issue => addIssue(issue))});
  };

function categoryForm(){
  makeCategory.innerHTML = `
    <form id="category-form">
      <input type="text" name="type" placeholder="type_of_category"/> 
      <input type="submit" value="Add The Category" />
      <input type="reset"/>
    </form>
`
}



function changeBtn(categoryId, categoryName){
  btn.innerText = "Add the Issue"
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


function addTownName(name){
town.innerHTML += `<h3>${name}</h3>`
alert(`You have added a Town${name}`)
};



function addIssue(issue){
let categoryName =  document.getElementById(`category-${issue.category_id}`).innerText;
  let titleToUp = issue.title.toUpperCase();
  creationIssueForm.innerHTML +=`  
  <div id=${issue.id}>
  <h3>Category: ${categoryName}</h3>
  <ul>Issue #${issue.id}
  <p>Title: ${titleToUp}</p>
  <li>Description ${issue.description}</li>
  <li>Cross street 1${issue.cross_street_1}</li>
  <li>Cross street 2${issue.cross_street_2}</li>
  <li>Date: ${issue.date}</li>
  <li id="resolved">Resolved: ${issue.resolved}</li>
  </ul>
   <!-- <p>If Issue is Resolved click button</p>
   <button type="button" class="btn btn-primary" id="issue-${issue.id}">True</button> -->
  </div>
  <br>
`
window.scrollTo(0,document.body.scrollHeight);
  // alert(`You have added the issue ${issue.title}`)
  
};

makeCategory.addEventListener("click", function () {
  categoryDiv.setAttribute("id", "hidethis");
  creationIssueForm.setAttribute("id", "hidethis")
categoryForm();
})


 currentIssues.addEventListener("click", function(){
  divIssues.setAttribute("id", "hidethis")
  creationIssueForm.innerHTML = ""
  alert("Let's get those issues!")
  getTownIssues();
});

getCategories.addEventListener("click", (e) => {
  e.currentTarget.setAttribute("class", "hide_this")
  alert("Let's get those categories!")
  getIssueCategories();
})


creationIssueForm.addEventListener("submit", (e) => {
  editIssueHandler(e)
});

//event listener

function editIssueHandler(e){
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



   
// );
//select it
//listen to it
//then you have to do it
//select it again
//push it through 
//dataset


//when user clicks on button to `create issue` an event is triggerd []
// the event will then either go to a function and create form || create form right after event listener []
// form will have input for issue name []


    
   


 