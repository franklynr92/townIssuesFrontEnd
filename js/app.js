//variables
let creation = document.querySelector(".creation");

//functions


//event listener
document.addEventListener("DOMcontentLoaded", console.log("DOM is loaded"));



window.addEventListener('DOMContentLoaded', (event) => {
    console.log(event);
});

creation.addEventListener("click", (event) => {
    let btn = event.currentTarget;
    console.log(btn);
});


//when user clicks on button to `create issue` an event is triggerd []
// the event will then either go to a function and create form || create form right after event listener []
// form will have input for issue name []