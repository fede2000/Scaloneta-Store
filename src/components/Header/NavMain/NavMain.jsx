import React, { useContext } from 'react'
import {  LogoMobile, NavContainer, NavItem, NavUl } from './NavMainStyles'
import { NavLink, useNavigate } from 'react-router-dom'
import Cart from '../CartIcon/CartIcon'
import Logo from '../Logo/Logo'
import { FaTimes, FaUserCircle} from "react-icons/fa";
import { MenuContext } from '../../../Context/Context'
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase-utils";
import ShowOnLogin, { ShowOnLogout } from "./hiddenLink/hiddenLink";
import { toast } from "react-toastify";
import * as userActions from '../../../redux/user/user-actions';

const NavMenu = () => {
    const context = useContext(MenuContext)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser} = useSelector(state => state.user);


  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch(userActions.toggleIsLoggedIn())
        window.location.replace('');
        toast.success("Cerraste Sesión");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <NavContainer>
        <NavUl>
            <LogoMobile>
                <Logo onClick={context.toggleMenu}></Logo>
                <FaTimes size={40} color="#fff" onClick={context.toggleMenu}></FaTimes>
            </LogoMobile>

            <NavItem>
                <NavLink to="/" onClick={context.toggleMenu} >
                    Inicio
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/contact" onClick={context.toggleMenu}>
                    Contacto
                </NavLink>
            </NavItem>
            <ShowOnLogout>
                <NavItem>
                    <NavLink to="/login" onClick={context.toggleMenu}>Login</NavLink>
                </NavItem>
            </ShowOnLogout>
            <ShowOnLogin>
                <NavItem>
                <a href="#home" style={{ color: "#75aadb" }}>
                    <FaUserCircle size={14} />
                    Hi, {currentUser?.displayName}
                  </a>
                </NavItem>
            </ShowOnLogin>
            <ShowOnLogin>
                <NavItem>
                    <NavLink to="/my-orders" onClick={context.toggleMenu}>Mis ordenes</NavLink>
                </NavItem>
            </ShowOnLogin>
            <ShowOnLogin>
                <NavItem onClick={context.toggleMenu}>
                    <NavLink to="/" onClick={logoutUser} >
                        Logout
                    </NavLink>
                </NavItem>
            </ShowOnLogin>
            <NavItem>
                <Cart></Cart>
            </NavItem>
        </NavUl>
    </NavContainer>
  )
}

export default NavMenu