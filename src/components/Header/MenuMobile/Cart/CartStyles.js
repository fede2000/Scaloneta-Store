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
      p {
        position: absolute;
        top: -10px;
        right: -10px;
        font-weight: 500;
        font-size: .8rem;
        @media (max-width: 800px) {
          font-size: .7rem;
          top: -8px;
          right: -.8rem;
      }
      }

      .icon{
        font-size: 22px;
        @media (max-width: 1024px) {
            font-size: 18px
      }
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

      @media (max-width: 800px) {
          a{
              font-size: .9rem;
          }
          .icon{
            font-size: 25px;
          }
      }
`