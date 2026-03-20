// 1) კომენტარების სახით ახსენით, რა განსხვავებაა ჩვეულებრივ ფუნქციასა (function) და arrow function-ს შორის. მიუთითეთ მინიმუმ 2 განსხვავება.

// 2) შექმენით arrow function სახელად multiplyByThree,რომელიც მიიღებს ერთ რიცხვს პარამეტრად და დააბრუნებს მას სამჯერ გამრავლებულ მნიშვნელობას.

// 3) შექმენით 3 სხვადასხვა ფუნქცია, რომლებიც აბრუნებენ ტექსტს "JavaScript is fun": 
// პირველი — function keyword-ით
// მეორე — ცვლადში შენახული ფუნქცია
// მესამე — arrow function


// 1
// I განსხვავება
// function test(test1){...}
// const arrowtest = (arrow) => ...
// განსხვავება ვიზუალში და ფუნქციის შექმნაშია arrow ფუნქციის შექმნისას ვიყენებთ const-ს რომ ფუნქცია შევქმნათ ჩვეულებრივ ფუნქციაში კი არა.

// II განსხვავება
// function test(testA, testB) {
//   return testA + testB;
// }
// const test = (testA, testB) => testA + testB;
// მეორე განსხვავება ისაა რომ ჩვეულებრივ ფუნქციაში რამის დასაბრუნებლად საჭიროა return ის გამოყენება ხოლო arrow ფუნქციაში არა

// 2
const multiplyByThree = (num) => num * 3;
console.log(multiplyByThree(5));

// 3
function fun1() {
  return "GOA BEST";
}

const fun2 = function() {
  return "GOA BEST";
};

const fun3 = () => "GOA BEST";

console.log(fun1());
console.log(fun2());
console.log(fun3());