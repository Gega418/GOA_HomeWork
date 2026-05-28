import fetchData from "../utils/api.js";
import { setLocal, getLocal } from "../utils/localstorage.js";


const div = document.getElementById("products");

let cart = getLocal("product") || []


const addToCart = (product) => {
    let totalPrice = 0
    const exists = cart.find(clothes => clothes.title === product.title)
    if(exists){
        exists.quantity ++
        exists.totalPrice = exists.quantity * exists.price
        setLocal("product", cart)
    }else{
        product.quantity = 1
        product.totalPrice = product.price
        cart.push(product)
        setLocal("product", cart)
    }
    
    console.log(cart); 
    alert("Product Has Been Added To Cart")
}

const renderData = async () => {
    const data = await fetchData('https://fakestoreapi.com/products')

    data.forEach(product => {

        const productDiv = document.createElement("div")
        productDiv.className = "product"
        productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p class="category">${product.category}</p>
        <p class="desc">${product.description}</p>
        <p class="price">$${product.price}</p>
        <button class="add">Add To Cart</button>
        `
        div.appendChild(productDiv)



        const button = productDiv.querySelector(".add");
        button.addEventListener("click", () => {
            addToCart(product)
        })
    });

}

renderData()

export default cart