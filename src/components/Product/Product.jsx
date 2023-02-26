import React, { useEffect, useState , useContext } from 'react'
import ProductFilter from './ProductFilter/ProductFilter'
import ProductList from './ProductList/ProductList'
import { FilterContainer, IconShowFilter, NavWrapper, ProductContainer, ProductContent, ProductSection } from './ProductStyles'
import { FaCogs } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import * as productsActions from "../../redux/products/products-actions"
import { CategoryContext } from '../../Context/Context';



const Product = () => {
  const [showFilter, setShowFilter] = useState(false);
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const context = useContext(CategoryContext)
  

  useEffect(() => {
    dispatch(productsActions.getPriceRange({products}))
  }, [dispatch, products])
  // const toggleFilter = () => {
  //   setShowFilter(!showFilter);
  // };
 
  return (
    <ProductSection>
      <ProductContent>
        <NavWrapper isOpenCat={context.isCategoryOpen} onClick={context.toggleCategory}></NavWrapper>
        <FilterContainer  isOpenCat={context.isCategoryOpen} >
          <ProductFilter setCurrentPage={setCurrentPage}></ProductFilter>
        </FilterContainer>
        <ProductContainer>
          <ProductList products={products} setCurrentPage={setCurrentPage} currentPage={currentPage}></ProductList>

        </ProductContainer>

      </ProductContent>

    </ProductSection>
  )
}

export default Product