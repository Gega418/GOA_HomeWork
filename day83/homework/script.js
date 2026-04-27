class Book {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }

  getSummary() {
    return `წიგნი '${this.title}' დაწერილია '${this.author}'-ს მიერ ${this.year} წელს.`
  }

  getAge() {
    const currentYear = new Date().getFullYear()
    return currentYear - this.year
  }
}

const myBook = new Book('ვეფხისტყაოსანი', 'შოთა რუსთაველი', 1180)
console.log(myBook.getSummary())
console.log(`წიგნი ${myBook.getAge()} წლისაა.`)


class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  set width(value) {
    if (value <= 0) {
      console.log("შეცდომა: სიგანე უნდა იყოს 0-ზე მეტი. დაყენდა დეფოლტ მნიშვნელობა: 1")
      this._width = 1
    } else {
      this._width = value
    }
  }

  set height(value) {
    if (value <= 0) {
      console.log("შეცდომა: სიმაღლე უნდა იყოს 0-ზე მეტი. დაყენდა დეფაულტ მნიშვნელობა: 1")
      this._height = 1
    } else {
      this._height = value
    }
  }

  get area() {
    return this._width * this._height
  }

  get perimeter() {
    return 2 * (this._width + this._height)
  }
}

const rect = new Rectangle(10, 5)
console.log(`ფართობი: ${rect.area}`)
rect.width = -2
console.log(`ახალი პერიმეტრი: ${rect.perimeter}`)
