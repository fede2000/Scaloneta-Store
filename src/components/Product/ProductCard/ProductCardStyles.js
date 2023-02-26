import styled from "styled-components";

export const CardProductContainerGrid = styled.div`
    border: 1px solid transparent;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 350px;
    margin: 30px 0;

    @media (max-width:1150px){
          
        }
        @media (max-width:700px){
          
        }
        @media (max-width:600px){
          
        }
        @media (max-width:500px){
        
        }
        @media (max-width:400px){
            
    }
`

export const ImgContainerGrid = styled.div`
    width: 100%;
    height: 230px;
    overflow: hidden;
    border-bottom: 2px solid #eee;
    
`

export const ImgProductGrid = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`

export const ContentCardGrid = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
`

export const DescriptionProductCardGrid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 100%;
    margin-top: 10px;
    /* margin: 20px 0; */
`

export const NameProductCardGrid = styled.h3`
    font-size: 1.3rem;
    font-weight: 400;
    color: #000;
`

export const PriceProductCardGrid = styled.p`
    font-weight: 700;
    color: aliceblue;
    color: #000;
    font-size: 1rem;
`

export const ButtonProductGrid = styled.span`
  padding: 0.5rem 0.2rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: #75aadb;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  width: 80%;
  font-size: .7rem;
  margin: .7rem auto;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  :hover{
    padding: .65rem 1.3rem;
  }
`

// card de producto en contenedor en forma de lista

export const CardProductContainerList = styled.div`
    border: 1px solid transparent;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    display: flex;
    width: 100%;
    height: 270px;
    margin: 1rem 0;
    a{
        display: flex;
        width: 100%;
    }
    @media (max-width:1000px){
          height: 270px;
        }
    @media (max-width:600px){
          height: 230px;
        }
    @media (max-width:500px){
          height: 210px;
        }
    @media (max-width:400px){
          height: 170px;
        }

        
`

export const ImgContainerList = styled.div`
    padding: 1rem;
    width: 60%;
    height: 100%;
    overflow: hidden;
    border-bottom: 2px solid #eee;
`

export const ImgProductList = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`

export const ContentCardList = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 65%;
    gap: 20px;
    position: relative;
    padding: 2rem .5rem;
    justify-content: space-between;
`

export const DescriptionProductCardList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`

export const NameProductCardList = styled.h3`
    font-size: 1.6rem;
    font-weight: 500;
    color: #000;
    @media (max-width:600px){
          font-size: 1.4rem;
        }
    @media (max-width:400px){
          font-size: 1rem;
        }

`

export const PriceProductCardList = styled.p`
    font-weight: 600;
    color: #75aadb;
    font-size: 1.1rem;
    @media (max-width:600px){
          font-size: 1rem;
        }
    @media (max-width:400px){
          font-size: .8rem;
        }

`

export const DetailsProductList = styled.p`
    font-weight: 500;
    color: #555;
    font-size: 1rem;
    @media (max-width:600px){
          font-size: 1rem;
        }
    @media (max-width:400px){
          font-size: .8rem;
        }
`

export const ButtonProductList = styled.span`
  padding: .6rem 1rem;
  outline: none;
  border: none;
  text-align: center;
  border-radius: 10px;
  background: #75aadb;
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  /* margin: 0 auto; */
  width: 80%;
  max-width: 200px;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (max-width:600px){
          font-size: .8rem;
          padding: .6rem .7rem;
        }
  @media (max-width:500px){
          font-size: .6rem;
          padding: .5rem .5rem;
        }
  @media (max-width:400px){
          font-size: .6rem;
          padding: .4rem .5rem;
        }
        
`