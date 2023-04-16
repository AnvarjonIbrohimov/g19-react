import React, { Component } from 'react';
import './style.css';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar__wrapper'>
        <div className='navbar__container'>
            <span className='logo'>Logo</span>

            <nav>
                <ul className='nav__items'>
                    <li className='nav__item'>Home</li>
                    <li className='nav__item'>Product</li>
                    <li className='nav__item'>About</li>
                    <li className='nav__item'>Contact</li>
                </ul>
            </nav>

            <div className='nav__right'>
                <button className='btn basket'>Basket</button>
                <button className='btn login'>Login</button>
                <button className='btn register'>Login</button>
            </div>
        </div>
      </div>
    )
  }
}

export default Navbar;