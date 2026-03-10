// 1) შექმენი 3-ი ცვლადი ჯერ შეინახეთ თქვენი სახელი,გვარი,საყვარელი სპორტი, სტრინგ ლიტერალის გამოყენებით გამოიტანეთ ერთი დიდი წინადადება.

// 2)შექმენი სია სადაც შეინახავთ ნებისმიერ მონაცემთა ტიპის ელემენტს, შენი დავალებაა ამოიღო სიიდან ერთი რანმომული ელემენტი და გამოიტანო კონსოლში, მინიშნება: Math.random()

let name = "Gega";
let surname = "Pirtskhelava";
let favoriteSport = "Football";
let mySelf = `My name is ${name} ${surname}, favorite sport is ${favoriteSport}.`;

console.log(mySelf)

let lst = ["apple", 25, true, "Javascript"]

let random = Math.floor(Math.random() * lst.length)
console.log(random)