import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About/About'
import PriceList from '../pages/PriceList/PriceList'
import Contact from '../pages/Contact/Contact'
import Products from '../pages/Products/Products'
import Home from '../pages/Home/Home'

export default function PublicRoutes() {
  return (
    <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/about" exact element={<About/>}></Route>
        <Route path="/pricelist" exact element={<PriceList/>}></Route>
        <Route path="/contact" exact element={<Contact/>}></Route>
        <Route path="/products" exact element={<Products/>}></Route>
    </Routes>
  )
}
