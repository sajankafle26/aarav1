import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
function Header() {
  return (
    <div>
      <h1>Header</h1>
      <nav>
        <ul>
            <li><Link to="/">HOme</Link></li>
            <li><Link to="/a/3">About Us</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/a/:id/' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default Header
