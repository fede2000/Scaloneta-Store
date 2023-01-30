import styled from "styled-components";

export const CartContainer = styled.span`
    display: flex;
    margin: 0 5px;
    justify-content: center;
    align-items: center;

    a {
      display: flex;
      color: #fff;
      position: relative;
      font-size: 1.5rem;
      text-decoration: none;
      justify-content: center;
      align-items: center;
      gap: 5px;
      &:hover {
        color: #75AADB
      }
      &.active {
        color: aliceblue;
      }
      p {
        position: absolute;
        top: -10px;
        right: -1rem;
        font-weight: 500;
        font-size: 1.2rem;
      }
    }
    @media (max-width: 992px){
        display: block;
        padding: 5px 0;
        a{
          color: #fff;
          position: relative;
          &:hover{
            color: #75AADB;
          }
        }
    }
`