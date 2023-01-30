import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderLogo } from './LogoStyles'

const Logo = () => {
  return (

    <HeaderLogo>
        <Link to="/">
            <h2>Scaloneta<span color="#75aadb">Store</span> </h2>
        </Link>
    </HeaderLogo>
  )
}

export default Logo