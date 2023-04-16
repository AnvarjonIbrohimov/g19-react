import React, { Component } from 'react';
import {NavberWrapper, NavbarContainer, Logo, Nav, NavItems,NavItem,NavRight, Btn} from './style.js'
// import './style.css';

class Navbar2 extends Component {
  render() {
    return (
      <NavberWrapper>
        <NavbarContainer>
            <Logo>Logo 2</Logo>

            <Nav>
                <NavItems>
                    <NavItem className='nav__item'>Home</NavItem>
                    <NavItem className='nav__item'>Product</NavItem>
                    <NavItem className='nav__item'>About</NavItem>
                    <NavItem className='nav__item'>Contact</NavItem>
                </NavItems>
            </Nav>

            <NavRight>
                <Btn type='primary' >primary</Btn>
                <Btn type='secondary' >secondary</Btn>
                <Btn type='success'>success</Btn>
                <Btn type='danger'>danger</Btn>
                <Btn type='warning'>warning</Btn>
                <Btn type='info'>info</Btn>
                <Btn type='light'>light</Btn>
                <Btn type='dark'>dark</Btn>
                <Btn type='link'>link</Btn>
            </NavRight>
        </NavbarContainer>
      </NavberWrapper>
    )
  }
}

export default Navbar2;