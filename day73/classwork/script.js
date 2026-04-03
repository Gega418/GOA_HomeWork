// 1) კომენტარის სახით ახსენით რა არის Higher Order Function და Callback Function
// 2) შექმენი ფუნქცია, რომელიც იღებს რიცხვების მასივს და ქოლბექ ფუნქციას, თითოეულ რიცხვს გადასცემს ქოლბექს რომ იქცეს სხვა რიცხვად, შემდეგ აჯამებს მიღებულ შედეგებს და აბრუნებს მათ საშუალო მნიშვნელობას.

// 1
// higher order function იღებს სხვა ფუნქციას როგორც პარამეტრს
// callback function არის ფუნქცია რომელიც გადაეცემა სხვა ფუნქციას 

// 2
function averageWithCallback(nums, callback){
    let total =0
    for(let i = 0; i < nums.length; i++){
        total += callback(nums[i])
    }
    return total / nums.length
}

const numbers = [1, 2, 3, 4, 5]

function double(x) {
    return x * 2
}

const avg = averageWithCallback(numbers, double)

console.log(avg)


// forEach() მეთოდი არის იტერაციული მეთოდი. ის იძახებს მოწოდებულ callbackFn ფუნქციას ერთხელ მასივის თითოეული ელემენტისთვის ზრდადი ინდექსის მიხედვით
// მაგ:
const numbers1 = [1,2,3,4,5]
numbers.forEach((num) => {
    console.log(num)
})

// map() მეთოდი არის იტერაციული მეთოდი. ის მასივში თითოეული ელემენტისთვის ერთხელ იძახებს მოცემულ callbackFn ფუნქციას და შედეგებიდან ქმნის ახალ მასივს.
// მაგ:
const numbers2 = [1,2,3,4,5]
const roots = numbers2.map((num) => Math.sqrt(num))
console.log(roots)

// მასივის ინსტანციების filter() მეთოდი ქმნის მოცემული მასივის ნაწილის ზედაპირულ ასლს, რომელიც გაფილტრულია მოცემული მასივიდან მხოლოდ იმ ელემენტებამდე, რომლებიც წარმატებით ასრულებენ მოცემული ფუნქციით განხორციელებულ ტესტს.
// მაგ:
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result);