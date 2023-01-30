import React, { useContext } from 'react'
import {  LogoMobile, NavContainer, NavItem, NavUl } from './NavMainStyles'
import { Link , NavLink} from 'react-router-dom'
import Cart from '../Cart/Cart'
import Logo from '../Logo/Logo'
import { FaTimes} from "react-icons/fa";
import { MenuContext } from '../../../Context/Context'


const NavMenu = () => {
    const context = useContext(MenuContext)
  return (
    <NavContainer>
        <NavUl>
            <LogoMobile>
                <Logo></Logo>
                <FaTimes size={40} color="#fff" onClick={context.toggleMenu}></FaTimes>
            </LogoMobile>

            <NavItem>
                <NavLink to="/" >
                    Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/contact">
                    Contact Us
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/login">Login</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/register">Register</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/order-history">My Orders</NavLink>
            </NavItem>
            <NavItem>
                <Cart></Cart>
            </NavItem>
        </NavUl>
    </NavContainer>
  )
}

export default NavMenu