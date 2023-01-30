import styled from "styled-components";

export const HeaderSection = styled.header`
    margin: 0 auto;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 2;
    background-color: #000;
    @media (max-width: 992px) {

  }
`

export const HeaderContainer = styled.div`
    width: 100%;
    height: 6rem;
    max-width: 1400px;
    padding-left: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px 0 50px;
`

export const HeaderNavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;

    @media (max-width:992px){
        position: absolute;
        flex-direction: column;
        top: 0rem;
        left: 0;
        width: 80%;
        height: 100vh;
        background-color: #000;
        z-index: 1000;
        transition: 0.1s all ease-in-out;
        
        /* transition: all 0.3s; */
        
        transform: ${props =>
        props.isOpen ? 'translateX(0%)' : 'translateX(-200%)'};
        
        
    }
    `


export const NavWrapper = styled.div`
    @media (max-width: 992px){
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.1s;
        z-index: 999;

        transform: ${props =>
        props.isOpen ? 'translateX(0)' : 'translateX(-200%)'};
        
    }
`


