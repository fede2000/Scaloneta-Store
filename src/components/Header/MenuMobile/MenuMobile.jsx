import React, { useContext } from 'react'
import { MenuContext } from '../../../Context/Context'
import Cart from './Cart/Cart'
import { Menu, MenuMobileContainer} from './MenuMobileStyles'
import { GiHamburgerMenu } from "react-icons/gi"

const MenuMobile = () => {
  const context = useContext(MenuContext)

  return (
    <MenuMobileContainer>
      <Cart></Cart>
      <Menu>
        <GiHamburgerMenu size={28} color="#fff" onClick={context.toggleMenu}></GiHamburgerMenu>
      </Menu>


    </MenuMobileContainer>
    
  
  )
}

export default MenuMobile