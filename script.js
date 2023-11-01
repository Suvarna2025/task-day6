// 1. a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
// a String representing the studio, and a String representing the rating as its arguments, and sets the 
// respective class properties to these values.

class movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
}
    const rating1= {
        getrating() {
            console.log("the rating is  ");
            return  this._rating;
          }
          
    }
    
  var obj= new movie("Avengers", "Marvel Studio",10);
  console.log(obj.title);
  console.log(obj.studio);
  console.log(obj.rating);

  
  // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
   
  class movie1 {
      constructor(title, studio, rating= "PG"){
          this.title = title;
          this.studio = studio;
         this.rating = rating;
      }
  }
  var obj1=("Gadar 2", "Zee Studio");


  // d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
  // the studio “Eon Productions”, and the rating “PG­13”
  
  class movie2 {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
}
  var film = new movie2( "Casino Royal", "Eon Productions", "PG13");
  console.log(film.title);
  console.log(film.studio);
  console.log(film.rating);


  //2. Cirlce 


  class circle{
    constructor(radius,color){
      this.radius=radius;
      this.color=color;

    }

  get radiuscircle(){
    return this.radius;
  }

  set radiuscircle(radius){
    this.radius = radius;
  }
  get colorcircle(){
    return this.color;
  }
  
  get toString(){
    return '"Circle[radius = ${this.radius}, color = ${this.color}]"'
  }
  get areacircle(){
    return Math.PI * this.radius * this.radius;
  }
  get circumferencecircle(){
    return 2* Math.PI * this.radius;
  }
  }

  var obj1 = new circle(1.0, "red");
  console.log(obj1. radiuscircle);// get radius
  obj.radiuscircle = 2.2

  console.log(obj1. radiuscircle);//set radius
  obj.radiuscircle = 2.4

  
  //3.Write a “person” class to hold all the details.

  class person{
    constructor(name, age, gender,salary) {
      this.name= name;
      this.age= age;
      this.gender= gender;
      this.salary= salary;
    }
}
  var a = new person( "Suvarna", 25, "Female", 80000);
  console.log(a.name);
  console.log(a.age);
  console.log(a.gender);
  console.log(a.salary);

