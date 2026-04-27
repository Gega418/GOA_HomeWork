const timerDisplay = document.getElementById("timer")
let count = 0

setInterval(() => {
  count++
  timerDisplay.innerText = count
}, 1000)
