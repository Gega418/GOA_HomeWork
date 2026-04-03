// 1) ახსენით რაში გამოიყენება forEach map filter 

// 2)  შექმენით რიცხვების მასივი, თქვენი დავალებაა დაბეჭდოთ კონსოლში თითოეული რიცხვი და მის გვერდით ტექსტი:

// Number is: 5
// Number is: 10
// ...ასე შემდეგ

// 3) შექმენით რიცხვების მასივი, დატოვე მხოლოდ ისეთი რიცხვები რომელიც არის ლუწი და არის მეტი 5 ზე


// 4) შექმენით რიცხვების მასივი, შენი დავალებაა დატოვო მხოლოდ ლუწი რიცხვები, შემდგომ დარჩენილი რიცხვები გაამრავლეთ 3 ზე, და საბოლოოდ გაიგეთ მასივში არსებული რიცხვების ჯამი

// 5) გადახედეთ რესურსებს:
// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

// https://www.geeksforgeeks.org/javascript/how-to-use-map-filter-and-reduce-in-javascript/?utm_source=chatgpt.com

// https://dev.to/yogeshraj/from-beginner-to-pro-the-ultimate-guide-to-map-filter-reduce-and-foreach-3f0j


// 1
// forEach გავს for ციკლს ის იძახებს მოწოდებულ callbackFn ფუნქციას ერთხელ მასივის თითოეული ელემენტისთვის ზრდადი ინდექსის მიხედვით
// map() მეთოდი არის იტერაციული მეთოდი. ის მასივში თითოეული ელემენტისთვის ერთხელ იძახებს მოცემულ callbackFn ფუნქციას და შედეგებიდან ქმნის ახალ მასივს.
// მასივის ინსტანციების filter() მეთოდი ქმნის მოცემული მასივის ნაწილის ზედაპირულ ასლს, რომელიც გაფილტრულია მოცემული მასივიდან მხოლოდ იმ ელემენტებამდე, რომლებიც წარმატებით ასრულებენ მოცემული ფუნქციით განხორციელებულ ტესტს.

// 2
const nums = [1,2,3,4,5]

nums.forEach(num => {
    console.log(`Number is ${num}`)
})

// 3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers.filter(num => num % 2 === 0 && num > 5);
console.log(result)

// 4
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = numbers1.filter(num => num % 2 === 0);
const multiplied = evenNumbers.map(num => num * 3);
const sum = multiplied.reduce((acc, num) => acc + num, 0);
console.log(sum);