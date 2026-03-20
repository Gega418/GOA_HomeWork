// 1)ახსენით ეს მეთოდები კომენტარებით და მოიყვანეთ 2-2 მაგალითი თითოეულზე:
// .length
// .join()
// .toString()
// .pop()
// .push()
// .shift()
// Array.isArray();
// .concat()
// .slice()
// .splice()


// 1
// .length
// აბრუნებს მასივის სიგრძეს (რამდენი ელემენტია)
const arr1 = [1, 2, 3, 4];
console.log(arr1.length);

const arr2 = ["a", "b"];
console.log(arr2.length); 

// .join()
// აერთიანებს მასივის ელემენტებს ერთ სტრინგად
const arr3 = ["Hello", "World"];
console.log(arr3.join(" "));

const arr4 = [1, 2, 3];
console.log(arr4.join("-"));

// .toString()
// მასივს გარდაქმნის სტრიქონად (default არის მძიმე)
const arr5 = [1, 2, 3];
console.log(arr5.toString()); 

const arr6 = ["a", "b", "c"];
console.log(arr6.toString()); 

// .pop()
// შლის ბოლო ელემენტს მასივიდან და შეგვიძლია პირდაპირ დავაბრუნოთ ის
const arr7 = [1, 2, 3];
console.log(arr7.pop()); 
console.log(arr7);

const arr8 = ["x", "y"];
arr8.pop();
console.log(arr8);

// .push()
// ამატებს ელემენტს მასივის ბოლოში
const arr9 = [1, 2];
arr9.push(3);
console.log(arr9); 

const arr10 = ["a"];
arr10.push("b", "c");
console.log(arr10); 

// .shift()
// შლის პირველ ელემენტს და შეგვიძლია პირდაპირ დავაბრუნოთ ის
const arr11 = [10, 20, 30];
console.log(arr11.shift()); 
console.log(arr11); 

const arr12 = ["a", "b"];
arr12.shift();
console.log(arr12);

// Array.isArray()
// ამოწმებს არის თუ არა მნიშვნელობა მასივი
console.log(Array.isArray([1, 2, 3])); 
console.log(Array.isArray("hello"));

// .concat()
// აერთიანებს ორ ან მეტ მასივს ახალ მასივად
const arr13 = [1, 2];
const arr14 = [3, 4];
console.log(arr13.concat(arr14));

const arr15 = ["a"];
console.log(arr15.concat(["b", "c"]));

// .slice()
// აბრუნებს მასივის ნაწილს რომელსაც გადავცემთ
const arr16 = [1, 2, 3, 4];
console.log(arr16.slice(1, 3)); 

const arr17 = ["a", "b", "c"];
console.log(arr17.slice(0, 2));

// .splice()
// შლის ან ამატებს ელემენტებს
const arr18 = [1, 2, 3];
arr18.splice(1, 1); 
console.log(arr18); 

const arr19 = ["a", "b", "c"];
arr19.splice(1, 0, "x");
console.log(arr19);

// დავალება 2: შეასწორე Scope Pollution (დაბინძურება)
// ქვემოთ მოცემულ კოდში ფუნქცია changePrice შემთხვევით ცვლის გლობალურ ფასს. შეასწორე კოდი ისე, რომ ფუნქციამ შექმნას საკუთარი ლოკალური ცვლადი და არ შეეხოს გლობალურს.

// შესასწორებელი კოდი

// let price = 100;

// const changePrice = () => {
//     price = 50; // აქ არის შეცდომა
//     console.log("ახალი ფასი ფუნქციაში:", price);
// };

// changePrice();
// console.log("გლობალური ფასი:", price); // აქ ისევ 100 უნდა ეწეროს!

// შესწორებული

let price = 100;

const changePrice = () => {
    let price = 50; 
    console.log("ახალი ფასი ფუნქციაში:", price);
};

changePrice();
console.log("გლობალური ფასი:", price);


// დავალება 3: Lexical Scope და Scope Chain
// გამოიცანი, რას დაბეჭდავს ეს კოდი:

let nickname = "Gigi";

function outer() {
    let nickname = "Gio";

    function inner() {
        console.log(nickname);
    }

    inner();
}

outer();
// კითხვა: დაიბეჭდება "Gigi" თუ "Gio"? გახსოვდეს ლექსიკური არე — ფუნქცია ჯერ თავისთან ეძებს, მერე კი მშობელთან

// გამოვა Gio 


// დავალება 4: პარამეტრები და Scope
// ფუნქციის პარამეტრებიც ლოკალური სკოუპის ნაწილია. გამოიცანი შედეგი:

let hero = "Batman";

function transform(hero) {
    hero = "Superman";
    console.log("ფუნქციის შიგნით:", hero);
}

transform("Iron Man");
console.log("გარეთ:", hero);
// კითხვა: რატომ არ შეიცვალა გლობალური hero Superman-ით? და რა როლი ითამაშა აქ "Iron Man"-მა?

// function transform(hero) ეს არის ლოკალური ცვლადი როცა ვიძახებთ transform("Iron Man"); თავიდან hero ხდება iron man. hero = "Superman"; იცვლება მხოლოდ ლოკალური ცვლადი. გლობალური hero არ შეცვლილა რადგან ჩვენ hero ფუნქციაში შევცვალეთ