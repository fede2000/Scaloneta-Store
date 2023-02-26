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
      font-size: 1rem;
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

      @media (max-width: 1024px){
          font-size: .9rem;
        }
      p {
        position: absolute;
        top: -6px;
        right: -10px;
        font-weight: 500;
        font-size: .8rem;
        @media (max-width: 1024px){
          font-size: .9rem;
        }
      }
    }
    @media (max-width: 992px){
        display: block;
        padding: 5px 0;

        display: none;

        a{
          color: #fff;
          position: relative;
          &:hover{
            color: #75AADB;
          }
        }
    }
`