class CategoryAdapter{
      
  static baseUrl = `http://localhost:3000/categories`;

      static fetchCategories(){
        return fetch(CategoryAdapter.baseUrl)
        .then((obj) => obj.json())
        .then(function(categoriesArray){
          alert("Click on a category to create an issue for that category")
          categoriesArray.forEach(function(category){
            makeCategoryParent.removeAttribute("class", "hidethis")
            creationCategoryForm.innerHTML = ""  
            getCategoriesIssue(category);
          })
        })
        .catch(() => alert("Something went wrong"));
      }

      static submitCategory = category => {
        let postData = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(category)
        };
        return fetch(CategoryAdapter.baseUrl, postData)
      } 
      
      
}
// const categoryAdapter = new CategoriesAdapter ("http://localhost:3000/categorys")

//adapter.getIssueCategories()