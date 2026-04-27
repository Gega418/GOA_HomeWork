// დავალება 2: ობიექტის შექმნა და this საკვანძო სიტყვა
// პირობა: შექმენი ობიექტი robot, რომელსაც ექნება შემდეგი თვისებები:

// model (ტექსტი, მაგ: 'R2-D2')

// energyLevel (რიცხვი, მაგ: 100)

// მეთოდი provideInfo(), რომელიც this-ის გამოყენებით კონსოლში დაბეჭდავს ტექსტს: "მე ვარ მოდელი [model] და ჩემი ენერგიაა [energyLevel]%."


// დავალება 3: სტუდენტმა უნდა გაასწოროს ის ისე, რომ this სწორად მუშაობდეს.

// JavaScript
// const smartphone = {
//   brand: 'Apple',
//   battery: 85,
//   checkBattery: () => {
//     console.log(`ბატარეა არის: ${this.battery}%`); // აქ არის შეცდომა!
//   }
// };

// smartphone.checkBattery();



// დავალება 4: Getters & Setters (მონაცემთა დაცვა)
// პირობა: შექმენი ობიექტი bankAccount, რომელიც გააკონტროლებს თანხის მითითებას.

// დაამატე თვისება _balance (საწყისი მნიშვნელობა 0).

// შექმენი Getter balance, რომელიც დააბრუნებს ტექსტს: "თქვენს ანგარიშზეა: [თანხა] ლარი".

// შექმენი Setter deposit, რომელიც მიიღებს ახალ მნიშვნელობას. თუ გადაცემული მნიშვნელობა არის რიცხვი და მეტია 0-ზე, განაახლოს _balance. წინააღმდეგ შემთხვევაში, დაბეჭდოს: "გთხოვთ, შეიყვანოთ სწორი თანხა".




// დავალება 5:შექმენი constructor createCourse(title, instructor, duration).

// დაამატე მეთოდი getSummary(), რომელიც დააბრუნებს კურსის მოკლე აღწერას.


// 1
const robot = {
  model: 'R2-D2',
  energyLevel: 100,
  provideInfo() {
    console.log(`მე ვარ მოდელი ${this.model} და ჩემი ენერგიაა ${this.energyLevel}%.`)
  }
};

robot.provideInfo()

// 2
const smartphone = {
  brand: 'Apple',
  battery: 85,
  checkBattery() {
    console.log(`ბატარეა არის: ${this.battery}%`)
  }
};

smartphone.checkBattery()

// 3
const bankAccount = {
  _balance: 0,

  get balance() {
    return `თქვენს ანგარიშზეა: ${this._balance} ლარი`
  },
 
  set deposit(amount) {
    if (typeof amount === 'number' && amount > 0) {
      this._balance += amount
    } else {
      console.log("გთხოვთ, შეიყვანოთ სწორი თანხა")
    }
  }
}

bankAccount.deposit = 50
bankAccount.deposit = -10
console.log(bankAccount.balance)

// 4
function CreateCourse(title, instructor, duration) {
  this.title = title
  this.instructor = instructor
  this.duration = duration

  this.getSummary = function() {
    return `კურსი "${this.title}", ლექტორი: ${this.instructor}, ხანგრძლივობა: ${this.duration}.`
  };
}

const jsCourse = new CreateCourse('JavaScript საფუძვლები', 'გეგა', '7 თვე')
console.log(jsCourse.getSummary())