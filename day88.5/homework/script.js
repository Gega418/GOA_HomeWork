import { addProduct, cart } from "./cart.js"

const cards = Array.from(document.getElementsByClassName("productcard"))
const cartDiv = document.getElementById("cart")

const renderCart = () => {
    cartDiv.innerHTML = ""
    
    cart.forEach(product => {
        const productDiv = document.createElement("div")
        productDiv.className = "cartitem"
        
        productDiv.innerHTML = `
            <h3>პროდუქტი: ${product.name}</h3>
            <p>ფასი: ${product.price}</p>
            <p>რაოდენობა: ${product.quantity}</p>
            <hr>
        `
        cartDiv.appendChild(productDiv)
    })
}

cards.forEach(card => {
    const butt = card.querySelector("button")
    butt.addEventListener("click", () => {
        addProduct(card)
        renderCart()
    })
})