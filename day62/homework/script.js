// 1) რა არის console.log()  დეტალურად ახსენით.

// 2) ამ სტრინგის მეთოდებზე მოიყვანეთ თითო-თოთო მაგალითი და კოდი ახსენით კომენტარის სახით:
// .charAt()
// .concat()
// .slice()
// .toUpperCase()
// .toLowerCase()
// .trim()
// .trimStart()
// .trimEnd()
// .repeat()
// .replace()
// .replaceAll()
// .split()
// .startsWith()
// .endsWith()

// 3) რა არის Math ობიექტი? ეს მეთოდები ახსენით კომენტარის სახით და მოიყვანეთ თითო-თითო მაგალითი:
// Math.round()
// Math.ceil()
// Math.floor()
// Math.trunc()
// Math.sign()
// Math.pow()
// Math.sqrt()
// Math.min()
// Math.max()

// 1
// მისი მთავარი დანიშნულებაა ინფორმაციის გამოყვანა ბრაუზერის inspect, Console ფანჯარაში.

// 2
let text = "  Hello World  ";
console.log(text.charAt(2));
// აბრუნებს კონკრეტულ ინდექსზე მყოფ სიმბოლოს

let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(str2));
// აერთებს ორ სტრინგს

console.log(text.slice(2, 7));
// ამოჭრის ტექსტის ნაწილს 2 ინდექსიდან 7-მდე

console.log(text.toUpperCase());
// ყველა ასოს გადააქცევს დიდ ასოებად

console.log(text.toLowerCase());
// ყველა ასოს გადააქცევს პატარა ასოებად

console.log(text.trim());
// აშორებს space-ებს დასაწყისშიც და ბოლოშიც

console.log(text.trimStart());
// აშორებს space-ებს მხოლოდ დასაწყისში

console.log(text.trimEnd());
// აშორებს space-ებს მხოლოდ ბოლოში

console.log("Hi ".repeat(3));
// გაიმეორებს ტექსტს მითითებული რაოდენობით

let sentence = "I like cats";
console.log(sentence.replace("cats", "dogs"));
// ცვლის მხოლოდ პირველ ნაპოვნ სიტყვას

let animals = "cat cat cat";
console.log(animals.replaceAll("cat", "dog"));
// ცვლის ყველა შესაბამის სიტყვას

let words = "Hello World";
console.log(words.split(" "));
// ყოფს სტრინგს მასივად (აქ space-ის მიხედვით)

console.log(words.startsWith("Hello"));
// ამოწმებს იწყება თუ არა ტექსტი მითითებული მნიშვნელობით
// აბრუნებს true ან false

console.log(words.endsWith("World"));
// ამოწმებს მთავრდება თუ არა ტექსტი მითითებული მნიშვნელობით
// აბრუნებს true ან false

// 3
// Math არის ჩაშენებული (built-in) JavaScript ობიექტი, რომელიც შეიცავს მათემატიკურ ფუნქციებსა და კონსტანტებს.

console.log(Math.round(4.6));
// ამრგვალებს უახლოეს მთელ რიცხვამდე
// შედეგი: 5

console.log(Math.ceil(4.1));
// ამრგვალებს ზემოთ 
// შედეგი: 5

console.log(Math.floor(4.9));
// ამრგვალებს ქვემოთ 
// შედეგი: 4

console.log(Math.trunc(4.9));
// ამრგვალებს პატარა რიცხვამდე
// შედეგი: 4

console.log(Math.sign(-10));
// -1 თუ რიცხვი უარყოფითია
// 1 თუ დადებითია
// 0 თუ ნულია

console.log(Math.pow(2, 3));
// ხარისხში აყვანა
// 2 მე-3 ხარისხში = 8

console.log(Math.sqrt(16));
// აბრუნებს კვადრატულ ფესვს
// შედეგი: 4

console.log(Math.min(5, 2, 8));
// აბრუნებს ყველაზე პატარა რიცხვს
// შედეგი: 2

console.log(Math.max(5, 2, 8));
// აბრუნებს ყველაზე დიდ რიცხვს
// შედეგი: 8