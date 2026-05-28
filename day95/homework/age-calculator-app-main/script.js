const dayInput = document.getElementById("day")
const monthInput = document.getElementById("month")
const yearInput = document.getElementById("year")
const submitBtn = document.querySelector("button")

const resultYears = document.getElementById("yearres")
const resultMonths = document.getElementById("monthres")
const resultDays = document.getElementById("dayres")

function calculateAge() {
  const day = parseInt(dayInput.value)
  const month = parseInt(monthInput.value)
  const year = parseInt(yearInput.value)

  if (!day || !month || !year) {
    alert("გთხოვთ შეავსოთ ყველა ველი სწორად!")
    return
  }

  const today = new Date();
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth() + 1
  const currentDay = today.getDate()

  if (day < 1 || day > 31 || month < 1 || month > 12 || year > currentYear) {
    alert("შეყვანილი თარიღი არასწორია!")
    return
  }

  let calculatedYears = currentYear - year
  let calculatedMonths = currentMonth - month
  let calculatedDays = currentDay - day

  if (calculatedDays < 0) {
    const previousMonthTarget = new Date(currentYear, currentMonth - 1, 0)
    calculatedDays += previousMonthTarget.getDate()
    calculatedMonths--
  }

  if (calculatedMonths < 0) {
    calculatedMonths += 12
    calculatedYears--
  }

  renderResult(resultYears, calculatedYears)
  renderResult(resultMonths, calculatedMonths)
  renderResult(resultDays, calculatedDays)
}

function renderResult(element, value) {
  element.textContent = value;
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault()
  calculateAge()
})
