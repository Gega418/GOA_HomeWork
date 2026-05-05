// დავალება 1: "მათემატიკური დამხმარე"შექმენი კლასი MathHelper, რომელსაც ექნება შემდეგი სტატიკური მეთოდები:

// 1)isEven(number): აბრუნებს true-ს თუ რიცხვი ლუწია, სხვა შემთხვევაში — false.

// 2)average(numbers): იღებს რიცხვების მასივს და აბრუნებს მათ საშუალო არითმეტიკულს.

// მოთხოვნა: კოდში არ გამოიყენო new MathHelper(). მეთოდებს მიმართე პირდაპირ კლასიდან.
 
// დავალება 2: "კალკულატორის მოდული"
// შექმენი ორი ფაილი:

// ფაილი 1: calculator.js

// შექმენი და დააექსპორტე (named export) მარტივი ფუნქციები: add(a, b) და subtract(a, b).

// შექმენი და დააექსპორტე (default export) კლასი Calculator, რომელსაც ექნება მეთოდი multiply(a, b).

// ფაილი 2: main.js

// დააიმპორტე ფუნქციები და კლასი calculator.js-დან.

// გამოიყენე ყველა ფუნქცია და დაბეჭდე შედეგები კონსოლში.

// ----------------------------------------
// 3. კომბინირებული დავალება: "ავტომობილების მენეჯერი"
// ეს დავალება აერთიანებს ორივე თემას და გვეხმარება ლოგიკურ დაყოფაში.

// ნაბიჯი 1: მოდულის შექმნა (Car.js)
// შექმენი კლასი Car, რომელსაც აქვს:

// კონსტრუქტორი: brand და model.

// სტატიკური მეთოდი compare(car1, car2): ეს მეთოდი უნდა იღებდეს ორ მანქანას და აბრუნებდეს ტექსტს: "ეს მანქანები ერთი ბრენდისაა", თუ მათი brand ერთნაირია.

// დააექსპორტე ეს კლასი.

// ნაბიჯი 2: გამოყენება (app.js)
// დააიმპორტე Car კლასი.

// შექმენი ორი მანქანის ობიექტი (მაგალითად: Toyota Camry და Toyota Corolla).

// გამოიყენე სტატიკური მეთოდი Car.compare() მათ შესადარებლად.


// 1
let sum = 0
class MathHelper{
    static isEven(number){
        if(number % 2 === 0){
            return true
        }else{
            return false
        }
    }
    static average(numbers){
        numbers.forEach(number => {
            sum += number
        });
        return sum / numbers.length
    }
}

console.log(MathHelper.isEven(4))
console.log(MathHelper.average([6,7,1,4,9,2]))

// 2
import { add, subtract } from './calculator.js'
import Calculator from './calculator.js'

console.log(add(5, 3))
console.log(subtract(5, 3))
console.log(Calculator.multiply(5, 3))

// 3
import { Car } from './Car.js'
const car1 = new Car('Toyota', 'Camry')
const car2 = new Car('Toyota', 'Corolla')

console.log(Car.compare(car1, car2))