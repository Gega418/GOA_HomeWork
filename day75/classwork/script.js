// 1)შექმენით ობიექტი სადაც შეინახება მომხმარებლის ინფორმაცია (სახელი,გვარი, ასაკი, ქალაქი და ა.შ) ეს ობიექტი გააკეთეთ constructor ის გამოყენებით


// 2)მოიძიეთ ინფორმაცია რას აკეთებს this და new keywordებზე და ახსენით კომენტარებით ასევე მაგალითებიც მოიყვანეთ


// 1
function user(firstName, lastName, age, city){
    this.firstName = firstName
    this.lastName = lastName
    this.city = city
}

const myInfo = new user("Gega", "Pirtskhelava", 15, "Chkhorotskhu")
console.log(myInfo)

// 2
// this keyword გამოიყენება ობიექტის შიგნით და ნიშნავს მიმდინარე ობიექტს
// მაგ:
const person = {
    name: "Gega",
    greet: function(){
        console.log("Hello, my name is" + this.name)
    }
}
person.greet()

// new ქმნის ახალ ცალკე ცარიელ ობიექტს constructior იდან 
// მაგ:
function car(brand, year){
    this.brand = brand
    this.year = year
}
const userCar = new car("Mercedes", 2021)
console.log(userCar)