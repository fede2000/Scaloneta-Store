import styled from "styled-components";
import { GlobalContainer, GlobalSecondTitle, GlobalSection, GlobalTitleSection } from "../../GlobalComponents/GlobalComponents"

export const ProductDetailsSection = styled(GlobalSection)`

    justify-content: center;
    align-items: flex-start;
  
`
export const ProductDetailsContainer = styled(GlobalContainer)`
    flex-direction: column;

    justify-content: flex-start;


`

export const DivHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding-right: 1rem;
`
export const TitleSection = styled(GlobalTitleSection)`

`

export const BackToProduct = styled.div`
    color: #000;
    .link{
        color: #000;

    }
`

export const DetailsSection = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
`
export const DivContent = styled.div`
    display: flex;
   
        @media (max-width:600px){
            flex-direction: column;
            
    }
`

export const ImgContainer = styled.div`
    width: 45%;
    border: 1px solid #ccc;
    border-radius: 3px;
    img{
        width: 100%;
        height: 100%;
    }
    @media (max-width:1024px){
          height: 450px;
        }
        @media (max-width:900px){
            height: 400px;
        }
        @media (max-width:800px){
          height: 350px;
        }
        @media (max-width:700px){
            height: 300px;
        }
        @media (max-width:600px){
            height: 300px;
            width: 80%;
            margin: 0 auto;
        }
`


export const ContentDetails = styled.div`
    width: 55%;
    padding: 20px;
    & > * {
        margin-bottom: 1rem;
      }
`

export const ProductName = styled.h3`
    color: #000;
    font-size: 2rem;
    @media (max-width:1024px){
        font-size: 1.8rem;
        }
        @media (max-width:800px){
            font-size: 1.6rem;
        }
        @media (max-width:700px){
            font-size: 1.4rem;
        }
        @media (max-width:500px){
        
        }
        @media (max-width:400px){
            
    }
`

export const ProductPrice = styled.p`
    font-weight: 500;
    font-size: 1.3rem;
    color: #000;
    font-weight: 700;
    @media (max-width:1024px){
        font-size: 1.2rem;
        }
        @media (max-width:800px){
          font-size: 1.1rem;
        }
        @media (max-width:700px){
            font-size: 1rem;
        }
        @media (max-width:500px){
        
        }
        @media (max-width:400px){
            
    }
`

export const ProductDescription = styled.p`
    color: #000;
    font-size: 1.3rem;
    @media (max-width:1024px){
        font-size: 1.2rem;
        }
        @media (max-width:800px){
            font-size: 1.1rem;
        }
        @media (max-width:700px){
            font-size: 1rem;
        }
        @media (max-width:500px){
        
        }
        @media (max-width:400px){
            
    }
`

export const ProductId = styled.p`
    color: #000;
    font-size: 1.3rem;
    b{
        color: #000;
    }
    @media (max-width:1024px){
        font-size: 1.2rem;
        }
        @media (max-width:800px){
            font-size: 1.1rem;
        }
        @media (max-width:700px){
            font-size: 1rem;
        }
        @media (max-width:500px){
        
        }
        @media (max-width:400px){
            
    }
`
export const ProductBrand = styled.p`
    color: #000;
    font-size: 1.3rem;
    b{
        color: #000;
    }
    @media (max-width:1024px){
        font-size: 1.2rem;
        }
        @media (max-width:800px){
            font-size: 1.1rem;
        }
        @media (max-width:700px){
            font-size: 1rem;
        }
        @media (max-width:500px){
        
        }
        @media (max-width:400px){
            
    }
`

export const ProductCount = styled.div`
    display: flex;

    align-items: center;
    justify-content: space-around;
    width: 150px;
    b{
        color: #000;
    }
    @media (max-width:1024px){
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

export const ButtonProduct = styled.button`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: #75aadb;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  max-width: 220px;
  margin: 1rem auto;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  :hover{
    padding: .9rem 1.5rem;
  }
  @media (max-width:1024px){
    margin: 0;
        }
        @media (max-width:800px){
            padding: 0.7rem 1.5rem;
        }
        @media (max-width:600px){
          
        }
        @media (max-width:500px){
        
        }
        @media (max-width:400px){
            
    }
`
export const ButtonCount = styled.button`
  padding: 0.4rem .5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: #75aadb;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  width: 50px;
  margin: 1rem 0;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  :hover{
    padding: .5rem .6rem;
  }
  @media (max-width:1024px){
    margin: 0;

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

export const CartQuantity = styled.p`
    color: #000;
    text-align: center;
    width: 50px;
    @media (max-width:1024px){
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

export const ProductReviews = styled.div`
    color: #000;
    height: 300px;
    padding: 2rem;
    p{
        color: #000;
        font-size: 1.5rem;
    }
`

export const TitleReviews = styled(GlobalSecondTitle)`
    color: #444;
    margin-bottom: 1rem;
`

export const ReviewsContent = styled.div`
    color: #444;
    p,b{
        color: #444;
    }
`
