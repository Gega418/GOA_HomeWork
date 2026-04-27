// class User {

//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     alert(this.name);
//   }

// }

// Usage:
// let user = new User("John");
// user.sayHi();


// 1
class Vehicle {
  constructor(brand) {
    this.brand = brand
  }
  move() {
    console.log(`${this.brand} moves`)
  }
}

let vehicle = new Vehicle("BMW")
vehicle.move()

// 2
class User {
  constructor(name) {
     this.name = name;
   }

  sayHi() {
    alert(this.name);
  }
}

let user = new User("Gega")
user.sayHi()

class Price {
  constructor(car) {
    this.car = car
  }
  carPrice() {
    console.log(`${this.car} worths 10000$`)
  }
}

let price = new Price("Mercedes")
price.carPrice()