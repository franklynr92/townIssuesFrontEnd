//variables
let creation = document.querySelector(".creation");
let btn = document.querySelector("#change");
let divIssues = document.querySelector(".issues");

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
// let submitInput = document.createElement("input");
//   submitInput.setAttribute("type", "submit");
//   submitInput.setAttribute("value", "Submit");
  issueForm.appendChild(firstInput);
  // issueForm.appendChild(submitInput);
   creation.appendChild(issueForm);
firstInput.addEventListener('keypress', function (e){
  
  if (e.key === 'Enter') {
    event.preventDefault();
    addIssueName()}
});  //issueForm.addEventListener('submit', function(){
//   event.preventDefault();
//   getIssueDescription();
// });

};

function addIssueName(){
   let newIssueName = document.getElementById("issue-name");
   let newLi = document.createElement("li");
   newLi.innerText += "Name: "
   let newIssueNameNode = document.createTextNode(newIssueName.value);
   newLi.appendChild(newIssueNameNode);
    let newUl = document.createElement("ul");
    newUl.setAttribute("id", "issues")
    divIssues.appendChild(newUl);
    newUl.append(newLi);
let descBtn = document.createElement("BUTTON");
descBtn.setAttribute("class", "btn btn-primary");
    descBtn.innerText = "Description of the issue";
let descForm = document.createElement("form");
    descForm.setAttribute("id", "desc-Name");
let secondInput = document.createElement("textarea");
  secondInput.setAttribute("type", "text-area")
  secondInput.setAttribute("placeholder", "description");
  secondInput.setAttribute("id", "desc-name");
  secondInput.setAttribute("name", "desc-name");
let submitInput = document.createElement("input");
  submitInput.setAttribute("type", "submit");
  submitInput.setAttribute("value", "Submit");
  descForm.appendChild(secondInput);
  descForm.appendChild(descBtn)
  creation.appendChild(descForm);

descBtn.addEventListener("click",  () => {
  
    makeIssueDescription()
});

};


function makeIssueDescription (){
  event.preventDefault();
  btn.removeAttribute("id", "change");
  btn.setAttribute("id", "changes");
  let newIssueName = document.getElementById("desc-name");
  let newLi = document.createElement("li");
  let newIssueNameNode = document.createTextNode(newIssueName.value);
  newLi.innerText += "Description: ";
  newLi.appendChild(newIssueNameNode);
   let ul = document.getElementById("issues");
   ul.append(newLi);
};

//event listener
document.addEventListener("DOMcontentLoaded", console.log );




btn.addEventListener("click", () => {
  changeBtn(btn);
});
 



  

//when user clicks on button to `create issue` an event is triggerd []
// the event will then either go to a function and create form || create form right after event listener []
// form will have input for issue name []