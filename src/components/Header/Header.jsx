import React, { useContext } from 'react'
import { HeaderContainer, HeaderNavContainer, HeaderSection, NavWrapper } from './HeaderStyles'
import Logo from "./Logo/Logo"
// import MenuMobile from './MenuMobile/MenuMobile'
import NavMenu from './NavMain/NavMain'
import { MenuContext } from '../../Context/Context'
import MenuMobile from './MenuMobile/MenuMobile'



const Header = () => {
  const context = useContext(MenuContext)


  return (
    <>
      <HeaderSection>
         <HeaderContainer>
          
          <Logo></Logo>
          <NavWrapper isOpen={context.isMenuOpen} onClick={context.toggleMenu}></NavWrapper>
          <HeaderNavContainer isOpen={context.isMenuOpen}>
            <NavMenu></NavMenu>
          </HeaderNavContainer>
          <MenuMobile></MenuMobile>
        </HeaderContainer>

      </HeaderSection>
    </>

  )
}

export default Header