//variables
let creation = document.querySelector(".creation");
let btn = document.querySelector(".btn.btn-primary");

//functions
function changeBtn(btn) {
btn.innerText = "Name the issue";

let issueForm = document.createElement("form");
  issueForm.setAttribute("id", "Issue-Name");
let firstInput = document.createElement("input");
  firstInput.setAttribute("type", "text")
  firstInput.setAttribute("placeholder", "issue-name");
  firstInput.setAttribute("id", "issue-name");
  firstInput.setAttribute("name", "issue-name");
let submitInput = document.createElement("input");
  submitInput.setAttribute("type", "submit");
  submitInput.setAttribute("value", "Submit");
  issueForm.appendChild(firstInput);
  issueForm.appendChild(submitInput);
let creationDiv = btn.parentNode;
   creationDiv.appendChild(issueForm);
issueForm.addEventListener('submit', function(){
    event.preventDefault();
    addIssueName()
});  issueForm.addEventListener('submit', function(){
  getIssueDescription();
});

};

function addIssueName(){
   let newIssueName = document.getElementById("issue-name");
   let newLi = document.createElement("li");
   let newIssueNameNode = document.createTextNode(newIssueName.value);
   newLi.appendChild(newIssueNameNode);
    let newUl = document.createElement("ul");
    newUl.setAttribute("id", "issues")
    document.body.appendChild(newUl);
    newUl.append(newLi);
};

function getIssueDescription() {
  document.querySelector(".btn.btn-primary").innerText = "Description of the issue";
  let descForm = document.createElement("form");
descForm.setAttribute("id", "desc-Name");
let firstInput = document.createElement("textarea");
  firstInput.setAttribute("type", "text-area")
  firstInput.setAttribute("placeholder", "description");
  firstInput.setAttribute("id", "desc-name");
  firstInput.setAttribute("name", "desc-name");
let submitInput = document.createElement("input");
  submitInput.setAttribute("type", "submit");
  submitInput.setAttribute("value", "Submit");
  descForm.appendChild(firstInput);
  descForm.appendChild(submitInput);
let creationDiv = btn.parentNode;
  creationDiv.appendChild(descForm);
  descForm.addEventListener("submit", function(){
    event.preventDefault();
    makeIssueDescription();
  })
};

function makeIssueDescription (){
  let newIssueName = document.getElementById("desc-name");
  let newLi = document.createElement("li");
  let newIssueNameNode = document.createTextNode(newIssueName.value);
  newLi.innerText += "Description: ";
  newLi.appendChild(newIssueNameNode);
   let ul = document.getElementById("issues");
   ul.append(newLi);
   event.preventDefault();
}

//event listener
document.addEventListener("DOMcontentLoaded", console.log );



window.addEventListener('DOMContentLoaded', (event) => {
    console.log(event);
});

btn.addEventListener("click", () => {
    changeBtn(btn);
});



  

//when user clicks on button to `create issue` an event is triggerd []
// the event will then either go to a function and create form || create form right after event listener []
// form will have input for issue name []