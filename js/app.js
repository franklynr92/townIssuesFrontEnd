//variables
let creation = document.querySelector(".creation");
let btn = document.querySelector(".btn.btn-primary");

//functions
function changeBtn(btn) {
btn.innerText = "Name the issue";

let issueForm = document.createElement("form");
  issueForm.setAttribute("id", "Issue.Name");
let firstInput = document.createElement("input");
  firstInput.setAttribute("type", "text", "placeholder", "name");
  firstInput.setAttribute("name", "name of the issue");
let submitInput = document.createElement("input");
  submitInput.setAttribute("type", "submit");
  submitInput.setAttribute("value", "Submit");
  issueForm.appendChild(firstInput);
  issueForm.appendChild(submitInput);
let creationDiv = btn.parentNode;
   creationDiv.appendChild(issueForm);

};

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