import React from 'react'
import { ButtonProductGrid, ButtonProductList, CardProductContainerGrid, CardProductContainerList, ContentCardGrid, ContentCardList, DescriptionProductCardGrid, DescriptionProductCardList, DetailsProductList, ImgContainerGrid, ImgContainerList, ImgProductGrid, ImgProductList, NameProductCardGrid, NameProductCardList, PriceProductCardGrid, PriceProductCardList } from './ProductCardStyles'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import * as cartActions from "../../../redux/cart/cart-actions"
import { toast } from 'react-toastify';



const ProductCard = ({product, grid , id, name, price, desc, imageURL}) => {
    const dispatch = useDispatch();
    const shortenText = (text, n) => {
        if (text.length > n) {
          const shortenedText = text.substring(0, n).concat("...");
          return shortenedText;
        }
        return text;
      };

      const addToCart = (product) => {
        dispatch(cartActions.addToCart(product));
        toast.success(`${product.name} agregado al carrito`);
      };



    const productsGrid = (grid) => {
        const isGrid = grid;
        if(isGrid){
            return (
                <CardProductContainerGrid>
                <Link to={`/product-details/${id}`} className="link_img_container">
                    <ImgContainerGrid>
                        <ImgProductGrid src={imageURL} alt={name}></ImgProductGrid>
                    </ImgContainerGrid>
                </Link>
                <ContentCardGrid>
                    <DescriptionProductCardGrid>
                        <PriceProductCardGrid>{`$${price}`}</PriceProductCardGrid>
                        <NameProductCardGrid>{shortenText(name,18)}</NameProductCardGrid>
                    </DescriptionProductCardGrid>
                    <ButtonProductGrid onClick={() => addToCart(product)}>Añadir al carrito</ButtonProductGrid>
                </ContentCardGrid>
                
                </CardProductContainerGrid>
            )
        } else{
            return(
                <CardProductContainerList>
                    <Link to={`/product-details/${id}`}>
                        <ImgContainerList>
                            <ImgProductList src={imageURL}></ImgProductList>
                        </ImgContainerList>
                        <ContentCardList>
                            <DescriptionProductCardList>
                                <PriceProductCardList>{`$${price}`}</PriceProductCardList>
                                <NameProductCardList>{shortenText(name,18)}</NameProductCardList>
                                <DetailsProductList>{desc}</DetailsProductList>
                            </DescriptionProductCardList>
                            <ButtonProductList >Añadir al carrito</ButtonProductList>
                        </ContentCardList>
                    </Link>
                </CardProductContainerList>
            )
        }
    }
    return productsGrid(grid)
    }

export default ProductCard