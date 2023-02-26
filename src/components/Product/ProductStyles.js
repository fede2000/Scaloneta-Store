import styled from "styled-components";
import { GlobalContainer, GlobalSection } from "../../components/GlobalComponents/GlobalComponents"

export const ProductSection = styled(GlobalSection)`
    padding: 0;
    position: relative;
    /* overflow: hidden; */

`
export const ProductContent = styled(GlobalContainer)`
    align-items: flex-start;
    padding: 0 2rem ;

    @media screen and (max-width: 500px){
        padding: 0;
    }

`

export const FilterContainer = styled.aside`
    width: 20%;
    transition: all 0.3s;

    @media (max-width: 700px) {
        position: absolute;
        flex-direction: column;
        top: 0;
        left: 0;
        width: 80%;
        height: 100vh;
        z-index: 1000;
        transition: 0.1s all ease-in-out;
        background-color: #75aadb;
        padding: 2rem;
        
        /* transition: all 0.3s; */
        
        transform: ${props =>
        props.isOpenCat ? 'translateX(0%)' : 'translateX(-200%)'};
        
        
    }

    .show{
        left: 200%;
        position: relative;
    }
`

export const ProductContainer = styled.div`
    width: 80%;
    padding-left: 5px;
    position: relative;
    @media screen and (max-width: 700px){
        width: 100%;

    }
`

export const IconShowFilter = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    display: none;
    background-color: red;
    width: 30px;
    cursor: pointer;


    @media screen and (max-width: 700px){
        display: flex;

    }
`

export const NavWrapper = styled.div`
    @media (max-width: 700px){
        position: absolute;
        top: -30rem;
        right: 0;
        width: 100%;
        height: 280vh;
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.1s;
        z-index: 999;

        transform: ${props =>
        props.isOpenCat ? 'translateX(0)' : 'translateX(-200%)'};
        
    }
    @media (max-width: 620px){
        position: absolute;
        top: -30rem;
        right: 0;
        width: 100%;
        height: 447vh;
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.1s;
        z-index: 999;

        transform: ${props =>
        props.isOpenCat ? 'translateX(0)' : 'translateX(-200%)'};
        
    }
`