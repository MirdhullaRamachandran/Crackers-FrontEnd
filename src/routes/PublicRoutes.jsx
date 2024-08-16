import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import About from '../pages/About/About'
import Footer from '../components/NavBar/Footer/Footer'

export default function PublicRoutes() {
  return (
    <Routes>
        <Route path="/" exact element={<NavBar/>}></Route>
        <Route path="/about" exact element={<About/>}></Route>
    </Routes>
  )
}
