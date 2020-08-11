class Category{
    constructor(type_of_issue){
        this.type_of_issue = type_of_issue
    }
    
}


class Issue extends Category{
    constructor(title, description, cross_street_1, cross_street_2, date, id){
    this.title = title
    this.description = description
    this.cross_street_1 = cross_street_1
    this.cross_street_2 = cross_street_2
    this.date = date
    this.id = id
    }
}
