import React from 'react'
import "./Header.css"
export function Header() {
  return (
    <div className="header">
      <div className="img-logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1R0sW84he6t6H9QpnOaqrTsm8cmH1RSr_w&s"
          alt="logo"
        />
      </div>

      <nav className='navbar'>
        <ul className='list-items'>
          <li>Home</li>
          <li>Cart</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}