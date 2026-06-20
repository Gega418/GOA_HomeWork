// 1) შექმენით მაღაზიის ვებ-აპლიკაცია React ის გამოყენებით, საიტს უნდა გააჩნდეს რეგისტრაციის გვერდი, login გვერდი, products გვერდი და cart გვერდი.
// როდესაც მომხმარებელი დარეგისტრირდება, ავტომატურად უნდა გადავიდეს login page ზე, ხოლო როცა ლოგინს გაივლის მომხმარებელი უნდა გადმოვიდეს ავტომატურად products გვერდზე, პროდუქტები წამოიღეთ ამ API ლინკის დახმარებით:'https://fakestoreapi.com/products'. თითოეული პროდუქტის დამატება უნდა შეგეძლოთ cart ში და შემდეგ cart გვერდზე დარენდერება

import {Routes, Route, BrowserRouter, Link} from 'react-router-dom';

import { useState } from 'react'
import './App.css'
import Register from './components/Register';
import Login from "./components/Login"
import Products from './components/products';
import Cart from './components/cart';

function App() {

  const [registeredUser, setRegisteredUser] = useState([])
  const [LoggedInUser, setLoggedInUser] = useState([])
  const [cart, setCart] = useState([])
  
  return (
    <>
    <Routes>
      <Route path='/Register' element={<Register />}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/'element={<Products/>}/>
      <Route path='/Cart'element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default App
