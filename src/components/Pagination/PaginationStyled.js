import styled from "styled-components";

export const PaginationContainer = styled.ul`
    list-style: none;
    margin-top: 1rem;
    padding: 1rem;
    border-top: 2px solid #ccc;

    display: flex;
    justify-content: center;
    align-items: center;
    .hiddenItem{
        display: none;
    }
    .active{
        background-color: #75aadb;
        color: white;
    }
`

export const PageItem = styled.li`
    font-size: 1rem;
    border: 1px solid #ccc;
    min-width: 3rem;
    height: 2rem;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #000;

    .hiddenItem{
        display: none;
    }

    .active{
        background-color: #75aadb;
        color: white;
    }
`

export const TextPagination = styled.p`
    margin-left: 1rem;
    b,span{
        color: #000;
        font-size: .8rem;
    }
    .page{
        color: #75aadb;
    }
`