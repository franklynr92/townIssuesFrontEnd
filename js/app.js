//variables
let creation = document.querySelector(".creation");
let btn = document.querySelector("#change");
let btnTown = document.querySelector("#town");
let divIssues = document.querySelector(".issues");

//functions

function changeBtn(e){
  if (e.target.id === "change"){
  btn.innerText = "Add the Issue"
  creation.innerHTML = `
  <form id="issues-form">
    <input type="text" id="issue-name" placeholder="name"/>
    <input type="text" id="issue-description" placeholder="description of issue"/>
    <input type="textarea" id="issue-cross-street1" placeholder="cross-street1"/>
    <input type="textarea" id="issue-cross-street2" placeholder="cross-street2"/>
    <input type="date" id="issue-date"/>
    <input type="submit" value="Add The Issue" />
    <input type="reset"/>
  </form>
`}
}

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




creation.addEventListener("click", changeBtn);

creation.addEventListener("click", changeBtn);

creation.addEventListener("submit", addIssueName);

 



  

//when user clicks on button to `create issue` an event is triggerd []
// the event will then either go to a function and create form || create form right after event listener []
// form will have input for issue name []