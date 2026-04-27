// დავალება 1: კლასის შექმნა და ინსტანცია
// შექმენი კლასი სახელად Book (წიგნი).

// კონსტრუქტორმა უნდა მიიღოს ორი პარამეტრი: title (სათაური) და author (ავტორი).


// შექმენი ამ კლასით ერთი ობიექტი (მაგალითად, "ვეფხისტყაოსანი") და გამოიტანე კონსოლში ეს ობიექტი.


// დავალება 2: მემკვიდრეობითობა (Inheritance)
// გვაქვს მშობელი კლასი Vehicle (ტრანსპორტი):

// class Vehicle {
//   constructor(brand) {
//     this._brand = brand;
//     this._speed = 0;
//   }
//   get brand() { return this._brand; }
//   get speed() { return this._speed; }
  
//   accelerate() {
//     this._speed += 10;
//   }
// }
// შენი დავალებაა:

// შექმენი შვილი კლასი Car, რომელიც მემკვიდრეობით მიიღებს თვისებებს Vehicle-სგან.

// Car კლასის კონსტრუქტორმა უნდა მიიღოს brand და model.

// გამოიყენე super(brand), რომ ბრენდი მშობელ კლასს გადასცე.

// შექმენი მანქანის ეგზემპლარი, აუჩქარე (accelerate()) და დაბეჭდე მისი სიჩქარე.


// დავალება 3: მეთოდების დამატება
// გააფართოე წინა დავალების Car კლასი:

// დაამატე Car კლასს ახალი თვისება _fuel (საწვავი), რომელიც თავიდან იქნება 100.

// დაამატე მეთოდი drive(), რომელიც კონსოლში დაბეჭდავს: "მანქანა [brand] [model] მოძრაობს" და საწვავს დააკლებს 10-ს.

// შეამოწმე, მუშაობს თუ არა მეთოდი.


// 1
class Book {
    constructor(title, author){
        this.title = title
        this.author = author
    }
}

const book = new Book("ვეფხისტყაოსანი", "შოთა რუსთველი")
console.log(book)

// 2
class Vehicle {
  constructor(brand) {
    this._brand = brand;
    this._speed = 0;
    this._fuel = 100
  }
  get brand() { return this._brand; }
  get speed() { return this._speed; }
  
  drive() {
    console.log(`მანქანა ${this.br}`)
  }

  accelerate() {
    this._speed += 10;
  }
}

class Car extends Vehicle {
    constructor(brand, model){
        super(brand)
        this.model = model
    }
}

const myCar = new Car("Mercedes", "C-Class")
myCar.accelerate()
console.log(myCar.speed)

// 3
