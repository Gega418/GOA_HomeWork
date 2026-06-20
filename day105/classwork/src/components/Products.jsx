import { useEffect, useState } from "react";
import fetchData from "../utils/fetch";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData("https://fakestoreapi.com/products").then((data) => {
      setProducts(data);
    });
  }, []);

  console.log(products);

  return (
    <div>
      <header>
        <Link to="/Cart">Cart</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Login">Login</Link>
      </header>
      <div>
        <h2>products</h2>
        <ul>
          {products.map((product) => {
            return (
              <li>
                <img src={product.image} alt="" />
                {product.title} {product.description} {product.price}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Products;
