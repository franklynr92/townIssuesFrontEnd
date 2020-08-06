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
    addDescription()
});

};

function addDescription(){
    alert("we made it")
   let newIssueName = document.getElementById("issue-name");
   let newLi = document.createElement("li");
   let newIssueNameNode = document.createTextNode(newIssueName.value);
   newLi.appendChild(newIssueNameNode);
    let newUl = document.createElement("ul");
    document.body.appendChild(newUl);
    newUl.append(newLi);
    document.querySelector(".btn.btn-primary").innerText = "Add Date and Time to the Issue";

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