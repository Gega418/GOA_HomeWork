// 1. დაპირება მეგობარს (Simple Promise)
// შექმენი ცვლადი isSuccess. შექმენი Promise, რომელიც:

// თუ isSuccess არის true, resolve-დება ტექსტით: "შესრულდა წარმატებით!".

// თუ isSuccess არის false, reject-დება ტექსტით: "მოხდა შეცდომა!".

// გამოიყენე .then() და .catch(), რომ შედეგი კონსოლში დაბეჭდო.


// 2. "დაგვიანებული" მისალმება (setTimeout-ის გამოყენება)
// შექმენი ფუნქცია sayHello, რომელიც აბრუნებს Promise-ს.

// Promise-მა 2 წამის შემდეგ უნდა დააბრუნოს (resolve) ტექსტი: "გამარჯობა, სამყარო!".

// გამოიყენე setTimeout ფუნქციის შიგნით.

// 3.3. ციფრების შემოწმება
// შექმენი ფუნქცია checkNumber(num), რომელიც აბრუნებს Promise-ს:

// თუ num მეტია 10-ზე, დააბრუნე წარმატება: "რიცხვი ვალიდურია".

// თუ ნაკლებია ან ტოლია, დააბრუნე შეცდომა: "რიცხვი ძალიან პატარაა".

// გამოიძახე ეს ფუნქცია სხვადასხვა ციფრით და ნახე ორივე შემთხვევა.


// 4. მონაცემების "მოპოვება" (Data Fetching simulation)
// წარმოიდგინე, რომ სერვერიდან მოგაქვს მომხმარებლის სახელი.

// შექმენი ფუნქცია getUserData().

// Promise-მა 1.5 წამის შემდეგ უნდა დააბრუნოს ობიექტი: { name: "გიორგი", age: 25 }.

// დაბეჭდე კონსოლში მხოლოდ მომხმარებლის სახელი.

// ----------------------------------------------------------------------------------------

// 1
const isSuccess = true
const myPromise = new Promise((resolve, reject) => {
    if(isSuccess){
        resolve("შესრულდა წარმატებით!")
    }else{
        reject("მოხდა შეცდომა!")
    }
})

console.log(myPromise)

// 2
function sayHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("გამარჯობა, სამყარო!")
    }, 2000)
  })
}

sayHello().then((message) => {
  console.log(message)
})

// 3
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("რიცხვი ვალიდურია")
    } else {
      reject("რიცხვი ძალიან პატარაა")
    }
  })
}

checkNumber(15)
  .then((message) => console.log("წარმატება (15):", message))
  .catch((error) => console.error("შეცდომა (15):", error))

checkNumber(5)
  .then((message) => console.log("წარმატება (5):", message))
  .catch((error) => console.error("შეცდომა (5):", error))

// 4
function getUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "გიორგი", age: 25 })
    }, 1500)
  })
}

getUserData().then((user) => {
  console.log(user.name)
})