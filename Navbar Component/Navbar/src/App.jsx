import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Price from './Pages/Price.jsx'
import About from './Pages/About.jsx'
import Home from './Pages/Home.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'
import './App.css'



function App() { 
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/Home' element = {<Home />} />
        <Route path = '/Price' element = {<Price />} />
        <Route path = '/About' element = {<About />} />
      </Routes>    
    </div>
  )
}

export default App
