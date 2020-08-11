1. The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

2. The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.

3. The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.

4. The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use `fetch` with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

For the AJAX calls
 for this I will create a form where user can enter issue, then once it is added,  I will then append it to the site, and change button to say enter date and time, and then change button to enter description, and then change button to display enter name of issue.

 3 fetch requests

 make town have many categories
 make categories have many issues
 possible:
 town has many issues through categories
 
 enter category, data gets sent through then that ID is picked up for that issue
 user clicks on category
    form is displayed
    user enters category name
        data is fetched to the server and saved
    user wants to enter an issue
        category name is displayed
            then user clicks on which category they want to create the issue for
             then user clicks on add issue, it creates a fetch request and along with that data
             the id of the category is taken and put into the submit data for the user
             

Once a user clicks on a category the other category's are hidden
categorys are given an attribute of display: none or only issues with a category id matching of that category can be displayed
or only issues with a category ID of that category is dispalyed

click

 let issueCategoryId = e.currenTarget.id;
pass issueCategoryId into a fetch


addIssue(issueCategoryID, issue)
 if issue.category_id === issueCategoryID
 issue.map




change flow


retrieve issues by category id by passing in the id attribute of the div which houses the id of the category and using that in the issues url,  to find those issues and pass it back to the fetch with HTTP verb of `GET`  and then pass in that object to the addIssue(issue) function{ }

// if i only display that category, in theory I should only be able
//to get those issues that match with the id
//or... i can make it so that it only displays the issue with that //category_id
//make an if statement if(issue.category_id === category_id)
    ///either div.setAttribute = display:blocK
    // ||
    // creationIssueForm.innerHTML += <div></div>}
    //else { creationIssueForm.removeElement || creationIssueForm.innerHTML = ""}
//fetch with url of "http://localhost:3000/{issue.category_id}"
// in controller scope method
//select an issue and grab that single one using fetch
//make controller action with update to edit the issue
// the update would be to be able to  update that it is resolved
//or not
//|| && make controller action to destroy that issue
//document.querySelector grab by id and then create a pop that 
//will say you are removing this issue with this ?id?
// and make if statment if(document.querySelector("))

do the same thing with the categories once one is clicked, hide the others

// do this by when category is clicked
// the innerHTML of the parent div is either removed or cleared
// make another fetch to get the categories, 
// but only pass in the id to retrive that cateogry
// in the backen only category = Category.find_by_id(params[:category_id])
render json: category


// show only that category

//issues that are

//when user clicks on category, form appears and sets other categories to an attribute of hide_this or hidethis or remove click from issues_category div