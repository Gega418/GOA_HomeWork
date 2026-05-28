import { getLocal } from "../utils/localstorage.js";
import cart from "../products/products.js";

const yc = document.getElementById("yc");

const products = getLocal("product") || [];

// const deleteCart = (index) =>{
//     const filteredCart = products.filter((item,i) => index !== i)
//     products = filteredCart
//     console.log(products)
//     renderCart()
// }

const renderCart = () => {
    if (products.length === 0) {
        yc.innerHTML += "<p>Your Cart Is Empty</p>"
        return
    }

    cart.forEach((product) => {
        yc.innerHTML += `
            <div id="cartitem">
                <div id="cartitems">
                    <img src="${product.image}">
                </div>
                <div id="cartitemdetails">
                    <h3 id="producttitle">${product.title}</h3>
                    <p id="productquantity">Quantity: <span>${product.quantity}</span></p>
                    <p id="productprice">Total Price: <span>$${product.totalPrice}</span></p>
                </div>
            </div>
            `
  });
};

renderCart()