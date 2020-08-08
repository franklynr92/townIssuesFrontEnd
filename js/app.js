//variables
let creation = document.querySelector(".creation");
let btn = document.querySelector("#change");
let btnTown = document.querySelector("#town");
let divIssues = document.querySelector(".issues");
let town = document.querySelector(".town");
let categoryDiv = document.querySelector(".issue_category");
let btnCategory = document.querySelector("#town");
// let townFormForm = document.querySelector("#town_form");
const townUrl = "https://localhost:3000/towns";
const issueUrl = "https://localhost:3000/issues";
let townsObj = [];
let issueObj = [];





  
// function townForm(e){
//   if (e.target.id ==="town"){
//     btnTown.innerText = "Add your Town"
//   town.innerHTML = `
//   <form id="town_form">
//     <input type="text" name="name" placeholder="name"/>
//     <input type="submit" value="Add The Town" />
//     <input type="reset"/>
//   </form>
// `}
// };

// function submitTown(town){
//   let postData = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(town)
//   };
//   return fetch(townUrl, postData)
//   .then(resp => resp.json())
//   .then(town => addTownName(town.name))
//   .catch(() => alert("Something went wrong"))
// } 

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
      divCard.appendChild(type_of_issue);
      type_of_issue.innerText = category.type_of_issue;
      type_of_issue.setAttribute("id", `${category.id}`);
      type_of_issue.setAttribute("class", "btn btn-info");
      divCard.innerHTML += `<br><br>`
      divCard.addEventListener("click", (e) => {
        let categoryId = e.currentTarget.getAttribute("id").charAt(9);
        changeBtn(categoryId)
      });
    })
  })



function changeBtn(categoryId){
  btn.innerText = "Add the Issue"
  creation.innerHTML = `
  <form class="issues-form" id=${categoryId}>
    <input type="text" name="title" placeholder="title"/>
    <input type="text" name="description" placeholder="description of issue"/>
    <input type="text" name="cross_street_1" placeholder="cross street 1"/>
    <input type="text" name="cross_street_2" placeholder="cross street 2"/>
    <input type="date" name="date"/>
    <input type="submit" value="Add The Issue" />
    <input type="reset"/>
  </form>
`

}


function addTownName(name){
town.innerHTML += `<h3>${name}</h3>`
alert(`You have added a Town${name}`)
};


function addIssue(issue){
  
  categoryDiv.innerHTML +=`
  <p>${issue.title}</p>
  <li>${issue.description}</li>
  <li>${issue.cross_street_1}</li>
  <li>${issue.cross_street_2}</li>
  <li>${issue.date}</li>
  <li id="resolved">Resolved: ${issue.resolved}</li>
  <p>If Issue is Resolved click button</p>
  <button type="button" class="btn btn-primary" id="issue-${issue.id}">True</button> `
  alert(`You have added the issue ${issue.title}`)
  
};


  // somethingDiv.addEventListener("click", (e) => {
  //   console.log(e.currentTarget)
  //   debugger
  // });


creation.addEventListener("submit", (e) => {
  editIssueHandler(e)
});

//event listener



// town.addEventListener("click", townForm);

// town.addEventListener("submit", addTownName);

// town.addEventListener("submit", function(){
//     event.preventDefault();
//     let town = { 
//       town: {name: document.querySelector("[name='name']").value} 
//     }
//     submitTown(town)}
   
// );
//select it
//listen to it
//then you have to do it
//select it again
//push it through 
//dataset





creation.addEventListener("submit", (e) => {
  editIssueHandler(e)
});

function editIssueHandler(e){
  e.preventDefault();
    
    let titleInput =  document.querySelector("[name='title']").value;
    let descriptionInput = document.querySelector("[name='description']").value;
    let cross_street_1Input = document.querySelector("[name='cross_street_1']").value;
    let cross_street_2Input = document.querySelector("[name='cross_street_2']").value;
    let dateInput = document.querySelector("[name='date']").value
    let categoryInput = e.currentTarget.querySelector("form").getAttribute("id");
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

 .then (issue =>
   addIssue(issue))

// .catch(() => alert("Something went wrong"))
};


//when user clicks on button to `create issue` an event is triggerd []
// the event will then either go to a function and create form || create form right after event listener []
// form will have input for issue name []

// function categoryForm(e){
  //   if (e.target.class ==="category"){
    //     btnCategory.innerText = "Add your Category"
    //   category.innerHTML = `
    //   <form id="category-form">
    //     <input type="text" name="type" placeholder="type_of_category"/> 
    //     <input type="submit" value="Add The Category" />
    //     <input type="reset"/>
    //   </form>
    // `}
    // };
    
    // function addCategory(e){
      //   e.preventDefault()
      //   let inputName = category.querySelector("#category_name");
      //   divIssues.innerHTML += `<h4>${inputName.value}</h4>`
      //   alert("You have added a category")
      // };



      // category.addEventListener("click", categoryForm);
      // category.addEventListener("submit", addCategory);

  //     fetch("http://localhost:3000/towns")
  // .then(function(obj){
  //   return obj.json()
  // })
  // .then (console.log)

//   fetch(`http://localhost:3000/issues`)
//   .then(function(obj){
//     return obj.json()
//   })
//   .then(console.log)