import styled from "styled-components";

export const SliderSection = styled.section`
    width: 100%;
    height: 90vh;
    position: relative;
    overflow: hidden;
    background-color: #333;
`

export const Slide = styled.div`

    img{
        height: 100vh;
        width: 100vw;
    }
    .slide{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transform: translateX(-50%);
        transition: all 0.5s ease;
    }

    .current{
        opacity: 1;
        transform: translateX(0);
    }
`

export const Content = styled.div`
  position: absolute;
  text-align: center;
  top: 23rem;
  left: 50%;
  opacity: 1;
  width: 50%;
  padding: 3rem;
  display: flex;
  justify-self: center;
  align-items: center;
  flex-direction: column;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.4);
  animation: slide-up 1s ease 0.5s;
  animation-fill-mode: forwards;


    @keyframes slide-up {
    0% {
      visibility: visible;
      top: 23rem;
    }
    100% {
      visibility: visible;
      top: 17rem;
    }
  }

    hr {
    height: 2px;
    background: #fff;
    width: 50%;
    }
`

export const Heading = styled.h2`
    font-size: 4.5rem;
`

export const Description = styled.p`

`

export const Arrow = styled.span`
    border: 2px solid blue;
    border-radius: 50%;
    background: transparent;
    color: blue;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    right: ${props => props.right ? "1.5rem" : "none"};
    left: ${props => props.left ? "1.5rem" : "none"};
    :hover{
        background-color: aquamarine;
    }

`

export const ButtonSlide = styled.span`
    font-size: 1.6rem;
    font-weight: 400;
    padding: 6px 8px;
    margin: 0 5px 0 0;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    background-color: #007bff;
    color: #fff;
`


