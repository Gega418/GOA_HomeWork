import { set } from "./localstorage.js"
let cart = []

const addProduct = (element) => {
    const name = element.querySelector("h3").textContent
    const price = element.querySelector(".price").textContent

    let currentProduct = {
        name: name,
        price: price,
        quantity: 1
    }

    const exists = cart.find(product => product.name === currentProduct.name)

    if (exists) {
        exists.quantity++
        // price += quantity * price
        set("clothes", cart)
    } else {
        cart.push(currentProduct)
        set("clothes", cart)
    }

}

export { addProduct, cart }