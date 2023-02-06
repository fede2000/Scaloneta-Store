import React, { useContext } from 'react'
import {  LogoMobile, NavContainer, NavItem, NavUl } from './NavMainStyles'
import { NavLink, useNavigate } from 'react-router-dom'
import Cart from '../Cart/Cart'
import Logo from '../Logo/Logo'
import { FaTimes, FaUserCircle} from "react-icons/fa";
import { MenuContext } from '../../../Context/Context'
import {
    REMOVE_ACTIVE_USER,
    SET_ACTIVE_USER,
  } from "../../../redux/Slice/authslice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase-utils";
import { useState } from "react";
import ShowOnLogin, { ShowOnLogout } from "./hiddenLink/hiddenLink";
import { toast } from "react-toastify";
import * as userActions from '../../../redux/user/user-actions';

const NavMenu = () => {
    const [displayName, setdisplayName] = useState("");
    const context = useContext(MenuContext)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser, isLoggedIn } = useSelector(state => state.user);

    useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(currentUser)
        if (user.displayName == null) {
          const u1 = user.email.slice(0, -10);
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setdisplayName(uName);
        } else {
          setdisplayName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        setdisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch]);

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch(userActions.toggleIsLoggedIn())
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
            <ShowOnLogout>
                <NavItem>
                    <NavLink to="/login">Login</NavLink>
                </NavItem>
            </ShowOnLogout>
            <ShowOnLogin>
                <NavItem>
                <a href="#home" style={{ color: "#ff7722" }}>
                    <FaUserCircle size={16} />
                    Hi, {currentUser?.displayName}
                  </a>
                </NavItem>
            </ShowOnLogin>
            <ShowOnLogin>
                <NavItem>
                    <NavLink to="/order-history">My Orders</NavLink>
                </NavItem>
            </ShowOnLogin>
            <ShowOnLogin>
                <NavItem>
                    <NavLink to="/" onClick={logoutUser}>
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