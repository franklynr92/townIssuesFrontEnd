//variables
let creation = document.querySelector(".creation");
let btn = document.querySelector(".btn.btn-primary");

//functions
function changeBtn(btn) {
btn.innerText = "Name the issue";
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