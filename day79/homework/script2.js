const square = document.getElementById("color-square")

const colors = ["red", "blue", "green", "yellow", "purple", "orange"]
let colorIndex = 0

setInterval(() => {
  square.style.backgroundColor = colors[colorIndex]

  colorIndex = (colorIndex + 1) % colors.length;
}, 2000)
