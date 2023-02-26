import styled from "styled-components";

export const SearchDiv = styled.div`
    margin: 5px 0;
    position: relative;
    flex: 1;
    span{
        position: absolute;
        top: 50%;
        left: 1rem;
        transform: translateY(-50%);
        color: #000;
        font-size: 25px;
    }
`

export const InputSearch = styled.input`
    display: block;
    font-size: 1.2rem;
    font-weight: 300;
    padding: 0px;
    padding-left: 50px;
    margin: 1rem auto;
    width: 100%;
    border: 1px solid #000;
    border-radius: 15px;
    outline: none;
    /* background-color: #000; */
`

