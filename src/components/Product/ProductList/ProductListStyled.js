import styled from "styled-components";


export const ProductsListSection = styled.div`
    width: 100%;
`

export const TopProductsList = styled.div`
    width: 100%;
    border-bottom: 2px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;
    color: black;
    @media screen and (max-width: 700px){
        display: none;
    }

`
export const TopProductsListMobile = styled.div`
    width: 100%;
    border-bottom: 2px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;
    color: black;
    display: none;
    flex-direction: column;
    @media screen and (max-width: 700px){
        display: flex;
    }
`

export const DivMobile = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 50px;
`

export const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    & > * {
        margin-right: 7px;
        cursor: pointer;
      }

      b,p{
        color: #000;
        font-size: .9rem;
      }
      i{
        background-color: orange;
        font-size: 21px;
        padding: 2px;
      }
      span{
        color: #fff;
        background-color: #75aadb;
        font-size: 25px;
      }
      @media screen and (max-width: 700px){
        p,b{
            font-size: .8rem;
        }

    }
`
export const IconsContainerMobile = styled(IconsContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        width: 100px;
    }
    b,p{
        color: #000;
        font-size: .8rem;
    
        margin: 0;
        padding: 0%;
      }
      i{
        background-color: orange;
        font-size: 20px;
        padding: 2px;
        display: none;
      }
      span{
        color: #fff;
        background-color: #75aadb;
        font-size: 24px;
        margin-top: 3px;
        display: none;
      }
`

export const SearchContainer = styled.div`
    
`
export const SearchContainerMobile = styled.div`
    
`

export const Sort = styled.div`
    label{
        font-size: 1.1rem;
        font-weight: 500;
        margin: 0 5px;
        color: #000;
    }

    select{
        font-size: 1rem;
        font-weight: 300;
        border: none;
        outline: none;
        color: #000;
    }
    option{
        color: #000;
    }
    @media screen and (max-width: 700px){
        label{
            font-size: .9rem;
        }
        select{
            font-size: .9rem;
            color: #000;
        }
        option{
            font-size: .8rem;
        }

    }
`
export const SortMobile = styled(Sort)`
    width: 110px;
    margin-right: 10px;
    label{
        font-size: 1.1rem;

    }

    select{
        font-size: 1rem;

    }
    option{
        font-size: 1rem;
        color: #000;
    }
`

export const ProductsListContainer = styled.div`
    display: ${props => props.grid === true ? "flex" : "block"};
    width: ${props => props.grid === true ? "" : "100%"};
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: #fffdf7;
    padding: 0px 25px;
`

export const IconShowFilter = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    display: none;
    cursor: pointer;
    span{
        padding: 3px 5px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
        border-radius: 50%;
    }
    p{
        margin-left: 5px;
        color: #000;
    }

    @media screen and (max-width: 700px){
        display: flex;
        align-items: center;

    }
`