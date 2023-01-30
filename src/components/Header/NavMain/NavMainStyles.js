import styled from "styled-components";

export const NavContainer = styled.nav`
    display: flex;
    height: 100%;
    width: 100%;
    @media (max-width: 992px){
        margin-top: 28px;

    }
`

export const NavUl = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0 auto;
    gap: 15px;
    @media (max-width: 992px){
        height: 80%;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        gap: 50px;
        
        width: 80%;
        margin: 0 auto;
    
    }
`

export const LogoMobile = styled.li`
    display: none;
    @media (max-width: 992px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
`

export const NavItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;

    a{
        &:hover{
                color: #75AADB
        }
        font-size: 1.5rem;
        text-decoration: none;
        color: #fff;
        border-bottom:${props => props.IsActive ? '2px solid white' : ''}
    }   

    @media (max-width: 992px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        a{
            font-size: 2.3rem;
        }
    }
`