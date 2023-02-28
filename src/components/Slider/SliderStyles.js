import styled from "styled-components";

export const SliderSection = styled.section`
    width: 100%;
    height: 90vh;
    position: relative;
    overflow: hidden;
    background-color: #333;
    @media (max-width:900px){
    height: 70vh;
    }
    @media (max-width:700px){
          height: 60vh;
    }
    @media (max-width:600px){
          height: 50vh;
    }
    @media (max-width:500px){
          height: 40vh;
    }
    @media (max-width:400px){
          height: 30vh;
    }
`

export const Slide = styled.div`


    img{
        height: 100vh;
        width: 100vw;
        background-size: cover;
        @media (max-width:900px){
          height: 70vh;
        }
        @media (max-width:700px){
          height: 60vh;
        }
        @media (max-width:600px){
          height: 50vh;
        }
        @media (max-width:500px){
              height: 40vh;
        }
        @media (max-width:400px){
              height: 30vh;
        }
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
  gap: 20px;
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
    @media (max-width:900px){
          
          top: 22rem;
          @keyframes slide-up {
          0% {
            visibility: visible;
            top: 22rem;
          }
          100% {
            visibility: visible;
            top: 15rem;
          }
        }
        @media (max-width:700px){
          top: 15rem;
          @keyframes slide-up {
          0% {
            visibility: visible;
            top: 15rem;
          }
          100% {
            visibility: visible;
            top: 10rem;
          }
        }
        }
        @media (max-width:600px){
          top: 13rem;
          padding: 2rem;
          @keyframes slide-up {
          0% {
            visibility: visible;
            top: 13rem;
          }
          100% {
            visibility: visible;
            top: 8rem;
          }
        }
        }
        @media (max-width:500px){
          top: 10rem;
          @keyframes slide-up {
          0% {
            visibility: visible;
            top: 10rem;
          }
          100% {
            visibility: visible;
            top: 5rem;
          }
        }
        }
        @media (max-width:400px){
          top: 5rem;
          padding: 1rem;
          @keyframes slide-up {
          0% {
            visibility: visible;
            top: 5rem;
          }
          100% {
            visibility: visible;
            top: 2rem;
          }
        }
        }
}
`

export const Heading = styled.h2`
    font-size: 4.5rem;
    @media (max-width:900px){
          font-size: 3.2rem;
        }
        @media (max-width:700px){
          font-size: 3rem;
        }
        @media (max-width:600px){
          font-size: 2rem;
        }
        @media (max-width:500px){
          font-size: 1.4rem;
        }
        @media (max-width:400px){
          font-size: .9rem;
        }


`

export const Description = styled.p`
    @media (max-width:900px){
          font-size: 1rem;
        }
        @media (max-width:700px){
          font-size: 1rem;
        }
        @media (max-width:600px){
          font-size: 1rem;
        }
        @media (max-width:500px){
          font-size: .9rem;
        }
        @media (max-width:400px){
          font-size: .7rem;
        }

`

export const Arrow = styled.span`
    border: 2px solid #75aadb;
    border-radius: 50%;
    background: #75aadb;
    color: blue;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    z-index: 0;
    right: ${props => props.right ? "1.5rem" : "none"};
    left: ${props => props.left ? "1.5rem" : "none"};
    :hover{
        
    }

`

export const ButtonSlide = styled.span`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: #75aadb;
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  width: 200px;
  margin: 1rem auto;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  :hover{
    padding: 1rem 1.7rem;
  }
  @media (max-width:900px){
          font-size: 1rem;
        }
        @media (max-width:700px){
          font-size: .7rem,;
        }
        @media (max-width:600px){
          font-size: .7rem;
        }
        @media (max-width:500px){
          font-size: .6rem;
          padding: .5rem .8rem;
        }
`


