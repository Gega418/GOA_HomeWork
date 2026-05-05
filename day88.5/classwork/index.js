import { addProduct,cart } from "./helper.js"

const cards = Array.from(document.getElementsByClassName("card"))
const cartDiv = document.getElementById("cart")

const renderCart = () => {
    const productDiv = document.createElement("div")
    productDiv.className = "productDiv"
    cart.forEach(product => {
        productDiv.innerHTML = `
        <h3>Product name:${product.name}</h3>
        <p>Product category:${product.category}</p>
        <p>Product price:${product.price}</p>
        <hr>
        `
    })
    cartDiv.appendChild(productDiv)
}

cards.forEach(card => {
    const butt = card.querySelector("button")
    butt.addEventListener("click", () => {
        addProduct(card)
        renderCart()
    })
})