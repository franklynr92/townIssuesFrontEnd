class CategoriesAdapter{
constructor(categoryURL){
  this.baseURL = categoryURL;
}
    
  
      fetchCategories(){
        return fetch(this.baseURL)
        .then((obj) => obj.json()
      )
    }
}
// const categoryAdapter = new CategoriesAdapter ("http://localhost:3000/categorys")

//adapter.getIssueCategories()