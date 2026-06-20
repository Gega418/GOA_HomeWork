import cart from "../assets/icon-add-to-cart.svg";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col">
      <div >
        <img src={product.img} alt="" />
        <button className=""><img src={cart} alt="" />add to cart</button>
      </div>
      <div>
        <h3>{product.name}</h3>
        <h2>{product.description}</h2>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
