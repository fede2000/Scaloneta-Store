import styled from "styled-components"

export const FilterContainer = styled.div`
color: #000;
padding-top: 1.5rem;
`

export const TopFilter = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const TitleFilters = styled.h4`
    margin-top: 1rem;
    color: #000;
    font-size: 1.1rem;
    margin: 10px 0;

`

export const FilterCategory = styled.div`
    button{
        display: block;
        text-align: left;
        width: 80%;
        height: 3rem;
        font-size: 1rem;
        border: none;
        background-color: transparent;
        cursor: pointer;
        // margin-bottom: 5px;
        border-bottom: 1px solid #ccc;

        
        div{
            color: #000;
        }
    }
    
    .active {
    position: relative;
    // margin-bottom: 2px;
    padding-left: 1rem;
    }
    .active::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 2px;
        height: 100%;
        background-color: #75aadb;
    }

`

export const FilterBrand = styled.div`
    select {
      font-size: 1rem;
      font-weight: 300;
      padding: 5px;

      width: 80%;
      border: 1px solid #777;
      border-radius: 3px;
      outline: none;
      color: #000;
      background-color: white;
    }
    .option{
        color: #000;
        background-color: white;
        font-size: 1rem;
    }

`

export const FilterPrice = styled.div`
   p{
        color: #000;
        font-size: 1rem;
        margin-bottom: 10px;
    }
    input{
        width: 90%;
        color: #75aadb;
    }

`

export const ButtonClear = styled.div`
    font-size: 1.1rem;
    font-weight: 400;
    padding: 6px 8px;
    margin: 0 5px 0 0;
    border: 1px solid transparent;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    background-color: #75aadb;

    :hover{
        transform: translateY(-2px);
    }
`
