class CategoriesAdapter{
constructor(categoryURL){
  this.baseURL = categoryURL;
}
    
  
      fetchCategories(){
        return fetch(this.baseURL)
        .then((obj) => obj.json())
        .then(function(categoriesArray){
          alert("Click on a category to create an issue for that category")
          categoriesArray.forEach(function(category){
            makeCategory.removeAttribute("id", "hide_this")
            creationCategoryForm.innerHTML = ""  
            getCategoriesIssue(category);
          })
        });
      }
}
// const categoryAdapter = new CategoriesAdapter ("http://localhost:3000/categorys")

//adapter.getIssueCategories()