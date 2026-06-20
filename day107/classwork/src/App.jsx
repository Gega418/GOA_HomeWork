import './App.css'
import ProductCard from './components/productCard.jsx'

function App() {
  const products = [
    {
      name: "Waffle",
      description: "Waffle with Berries",
      price: 6.50,
      img: "./image-waffle-desktop.jpg"
    },
    {
      name: "creme brulee",
      description: "vanilla bean creme brulee",
      price: 7.00,
      img: "./image-creme-brulee-desktop.jpg"
    },
    {
      name: "macaron",
      description: "macaron mix of five",
      price: 8.00,
      img: "./image-macaron-desktop.jpg"
    },
    {
      name: "tiramisu",
      description: "classic tiramisu",
      price: 5.50,
      img: "./image-tiramisu-desktop.jpg"
    },
    {
      name: "baklava",
      description: "pistachio baklava",
      price: 4.00,
      img: "./image-baklava-desktop.jpg"
    },
    {
      name: "pie",
      description: "lemon meringue pie",
      price: 5.00,
      img: "./image-meringue-desktop.jpg"
    },
    {
      name: "cake",
      description: "red velvet cake",
      price: 4.50,
      img: "./image-cake-desktop.jpg"
    },
    {
      name: "brownie",
      description: "salted caramel brownie",
      price: 5.50,
      img: "./image-brownie-desktop.jpg"
    },
    {
      name: "panna cotta",
      description: "vanilla panna cotta",
      price: 6.50,
      img: "./image-panna-cotta-desktop.jpg"
    },
  ]

  return (
    <>
      {products.map(product => {
        return <ProductCard />
      })}
    </>
  )
}

export default App
