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
             

