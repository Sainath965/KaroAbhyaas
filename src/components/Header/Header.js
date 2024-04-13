// Write your JS code here
import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="logo">Karo Abhyaas</div>
      <nav>
        <ul>
          <li>
            <a href="/">JOIN US</a>
          </li>
          <li>
            <a href="/classes">Classes</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
