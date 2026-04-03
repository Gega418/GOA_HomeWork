// 1) შექმენი სია სადაც შეინახავთ რიცხვებს 1 დან 10-ის ჩათვლით მაპის საშუალებით თითუელი ელემენტი გაამრავლეთ 7-ზე.

// 2) შემენი სია სადაც შეინახავთ სპორტის სხვადასხვა სახეობებს, For Each-ის საშუალებით გამოიტანეთ თითოეული ელემენეტი ცალ-ცალკე და გვერძე ქონდეს მისი ინდექსი.

// 3) შემქენი სია სადაც გექნება 20 ნებისმიერი რიცხვი filter-ის საშულებით დატოვეთ მხოლოდ ის რიცხვები რომლის ინდექსიც არის ლუწი.

// 4) კომენტარის სახით ახსენით რა არის reduce.

// 5) კომენტარის სახით ახსენით რა არის ac"cumulator.

// 6) შემქენი სია სადაც გექნებათ 5-ი ნებისმიერი რიცხვი reduce-ის საშუალებით დააჯამე თითოეული რიცხვი ერთმანეთს.

// 7)წარმოიდგინე, გაქვს მაღაზიის პროდუქტების სია და გინდა ისინი კატეგორიების მიხედვით დააჯგუფო.

// აქ accumulator აღარ იქნება უბრალო რიცხვი, ის იქნება ობიექტი {}, რომელიც ნელ-ნელა შეივსება. 

// 1
const numbers = [1,2,3,4,5,6,7,8,9,10]
const multiply = numbers.map(number => {
    return number * 7
})
console.log(multiply)

// 2
const sports = ["football","basketball","rugby","slapping"]
const si = sports.forEach((sport, index) =>{
    console.log(`sport is ${sport} and index is ${index}`)
})

// 3
const nums = [12,57,19,20,71,69,67,10,8]
const onlyEvens = nums.filter(num => {
    return num % 2 === 0
})
console.log(onlyEvens)

// 4
// reduce ქართულად ნიშნავს შემცირებას, არის მასივი მეთოდი რომელიც გვაძლევს საშუალებას ერთ მნიშვნელობამდე შევამციროთ მასივი

// 5
// accumulator არის reduceში ცვლადი რომელიც აგროვებს საბოლოო შედეგს თითოეულ ნაბიჯზე

// 6
const nums1 = [10,21,35,41,54]
const sum = nums1.reduce((accumulator, num1) =>
accumulator + num1, 0)
console.log(sum)

// 7
const products = [
    { name: "apple", category: "fruit" },
    { name: "banana", category: "fruit" },
    { name: "potato", category: "vegetable" },
    { name: "tomato", category: "vegetable"}
]

const grouped = products.reduce((accumulator, product) => {
    const key = product.category
    if(!accumulator[key]) {
        accumulator[key] = []
    }
    accumulator[key].push(product)
    return accumulator
}, {})
console.log(grouped)