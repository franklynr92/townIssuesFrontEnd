//variables
let creation = document.querySelector(".creation");
let btn = document.querySelector("#change");
let divIssues = document.querySelector(".issues");

//functions

function changeBtn(btn){
  btn.innerText ="Name the Issue"
  creation.innerHTML = `
  <form id="issues-form">
    <input type="text" id="issue-name"/>
    <input type="textarea" id="issue-description"/>
    <input type="textarea" id="issue-cross-street1"/>
    <input type="textarea" id="issue-cross-street2"/>
    <input type="date" id="issue-date"/>
    <input type="submit" value="Add The Issue" />
  </form>
`
}
function changeBtns(btn) {
btn.innerText = "Name the issue";
let issueForm = document.createElement("form");
  issueForm.setAttribute("id", "Issue-Name");
let firstInput = document.createElement("input");
  firstInput.setAttribute("type", "text")
  firstInput.setAttribute("placeholder", "issue-name");
  firstInput.setAttribute("id", "issue-name");
  firstInput.setAttribute("name", "issue-name");
  issueForm.appendChild(firstInput);
   creation.appendChild(issueForm);
let descBtn = document.createElement("BUTTON");
   descBtn.setAttribute("class", "btn btn-primary");
    descBtn.innerText = "Description of the issue";
let secondInput = document.createElement("textarea");
  secondInput.setAttribute("type", "text-area")
  secondInput.setAttribute("placeholder", "description");
  secondInput.setAttribute("id", "desc-name");
  secondInput.setAttribute("name", "desc-name");
  issueForm.appendChild(secondInput);
  issueForm.appendChild(descBtn)
let locationBtn = document.createElement("BUTTON");
  locationBtn.setAttribute("class", "btn btn-primary");
    locationBtn.innerText = "Location of the issue";
let thirdInput = document.createElement("textarea");
    thirdInput.setAttribute("type", "text-area")
    thirdInput.setAttribute("placeholder", " Enter cross street");
    thirdInput.setAttribute("id", "cros-street");
    thirdInput.setAttribute("name", "cros-street");
    issueForm.appendChild(thirdInput);
    issueForm.appendChild(locationBtn);
    let dateBtn = document.createElement("BUTTON");
  dateBtn.setAttribute("class", "btn btn-primary");
    dateBtn.innerText = "Date of the issue";
let fourthInput = document.createElement("textarea");
    fourthInput.setAttribute("type", "text-area")
    fourthInput.setAttribute("placeholder", " Enter cross street");
    fourthInput.setAttribute("id", "cros-street");
    fourthInput.setAttribute("name", "cros-street");
    issueForm.appendChild(fourthInput);
    issueForm.appendChild(dateBtn);
firstInput.addEventListener('submit', function (){ 

    event.preventDefault();
   debugger   
  
  //issueForm.addEventListener('submit', function(){
//   event.preventDefault();
//   getIssueDescription();
// });

});
}


function addIssueName(){
   let newIssueName = document.getElementById("issue-name");
   let newLi = document.createElement("li");
   newLi.innerText += "Name: "
   let newIssueNameNode = document.createTextNode(newIssueName.value);
   newLi.appendChild(newIssueNameNode);
    let newUl = document.createElement("ul");
    newUl.setAttribute(`id`, `${newIssueNameNode}`);
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
  descForm.appendChild(secondInput);
  descForm.appendChild(descBtn)
  creation.appendChild(descForm);
  

descBtn.addEventListener("click",  () => {
  
    makeIssueDescription()
});

};


function makeIssueDescription (){
  event.preventDefault();
  let newIssueDesc = document.getElementById("desc-name");
  let newLi = document.createElement("li");
  let newIssueDescNode = document.createTextNode(newIssueDesc.value);
  newLi.innerText += "Description: ";
  newLi.appendChild(newIssueDescNode);
   let ul = document.getElementById("issues");
   ul.append(newLi);
   
    locationForm.appendChild(thirdInput);
  let locationForm = document.createElement("form");
        locationForm.setAttribute("id", "location-Name");
  locationForm.appendChild(locationBtn)
  creation.appendChild(locationForm);

locationBtn.addEventListener("click",  () => {
  event.preventDefault();
    makeIssueLocation()
});
};

function makeIssueLocation(){

};
//event listener
document.addEventListener("DOMcontentLoaded", console.log );




btn.addEventListener("click", () => {
  changeBtn(btn);
});
 



  

//when user clicks on button to `create issue` an event is triggerd []
// the event will then either go to a function and create form || create form right after event listener []
// form will have input for issue name []