// შექმენით მარტივი counter,სადაც იქნება ორი ღილაკი(გაზრდა და შემცირება) და ერთი პარაგრაფი სადაც აისახება რიცხვი

const increase1 = document.getElementById("increase")
const decrease1 = document.getElementById("decrease")
const value1 = document.getElementById("value")

let counter = 0

function increase(){
    counter ++
    value1.innerHTML = counter
}

function decrease(){
    counter --
    value1.innerHTML = counter
}

increase1.onclick = increase
decrease1.onclick = decrease