import React from 'react'
import { useParams } from 'react-router-dom'
import { ButtonCount, ButtonProduct, CartQuantity, ContentDetails, DetailsSection, DivContent, DivHead, ImgContainer, ProductBrand, ProductCount, ProductDescription, ProductDetailsContainer, ProductDetailsSection, ProductId, ProductName, ProductPrice, ProductReviews, ReviewsContent, TitleReviews, TitleSection } from './ProductDetailsStyled'
import StarsRating from "react-star-rate";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../../redux/cart/cart-actions"
import { toast } from 'react-toastify';
import Link from '../../../components/UtilsComponents/Link/Link';

const ProductDetails = () => {
    const { id } = useParams();
    const p = useSelector(state => state.products.products)
    const cartItems = useSelector(state => state.cart.cartItems);
    const data = []
    const filteredReviews = data.filter((review) => review.productID === id);
    const dispatch = useDispatch();
    const idProduct = id - 1
    const product = p[idProduct]

    const addToCart = (product) => {
      dispatch(cartActions.addToCart(product));
      toast.success(`${product.name} agregado al carrito`);

    };

    const decrementFromCart = (product) => {
      dispatch(cartActions.decrementFromCart(product));
    };

    const calcProductQuantity = (cartItems, product) => {
      let productInCart = null;
      productInCart = cartItems.find(item => item.id === product.id);
      if (productInCart != null){
        const quantity = productInCart.quantity
        return quantity
      }
      else{
        return productInCart
      }
    };
    const quantity = calcProductQuantity(cartItems,product)
    console.log(product.imageURL)
  return (
    <ProductDetailsSection>
      <ProductDetailsContainer>

        <DivHead>
          <TitleSection>Detalles del producto</TitleSection>
          <Link to="/#product"></Link>
        </DivHead>
        <DetailsSection>
          <DivContent>

            <ImgContainer>
            
                <img src={product.imageURL} alt={product.name} />
            </ImgContainer>
            <ContentDetails>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{`$${product.price}`}</ProductPrice>
                <ProductDescription>{product.desc}</ProductDescription>
                <ProductId>
                    <b>SKU: </b> {product.id}
                </ProductId>
                <ProductBrand>
                    <b>Marca: </b> {product.brand}
                </ProductBrand>
                <ProductCount>
                {quantity === undefined ? null : (
                  <>
                      <ButtonCount
                        className="--btn"
                        onClick={() => decrementFromCart(product.id)}
                      >
                        -
                      </ButtonCount>
                      <CartQuantity>
                        <b>{quantity}</b>
                      </CartQuantity>
                      <ButtonCount
                        className="--btn"
                        onClick={() => addToCart(product)}
                      >
                        +
                      </ButtonCount>
                 </>
                 )}
                </ProductCount>
                <ButtonProduct onClick={() => addToCart(product)}>
                    AGREGAR AL CARRITO
                </ButtonProduct>
            </ContentDetails>
          </DivContent>
            <ProductReviews>
                <TitleReviews>Product Reviews</TitleReviews>
                <div>
            {filteredReviews.length === 0 ? (
              <p>There are no reviews for this product yet.</p>
            ) : (
              <>
                {filteredReviews.map((item, index) => {
                  const { rate, review, reviewDate, userName } = item;
                  return (
                    <ReviewsContent key={index} >
                      <StarsRating value={rate} />
                      <p>{review}</p>
                      <span>
                        <b>{reviewDate}</b>
                      </span>
                      <br />
                      <span>
                        <b>by: {userName}</b>
                      </span>
                    </ReviewsContent>
                  );
                })}
              </>
            )}
          </div>
            </ProductReviews>
        </DetailsSection>
      </ProductDetailsContainer>
    </ProductDetailsSection>
  )
}

export default ProductDetails