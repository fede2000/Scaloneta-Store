import React, { useEffect, useState } from "react";
import { DivMobile, IconsContainer, IconsContainerMobile, IconShowFilter, ProductsListContainer, ProductsListSection, SearchContainer, SearchContainerMobile, Sort, SortMobile, TopProductsList, TopProductsListMobile } from './ProductListStyled'
import Search from "../../Search/Search";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import * as filterActions from "../../../redux/filter/filter-actions"
import Pagination from "../../Pagination/Pagination";
import { BsFillGridFill } from "react-icons/bs";

import { FaCogs } from "react-icons/fa";
import { useContext } from 'react';
import { CategoryContext } from '../../../Context/Context';

const ProductList = ({ 
  products,
  currentPage,
  setCurrentPage, 
  }) => {
    const context = useContext(CategoryContext)
    const [grid, setGrid] = useState(true);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("latest");
    const filteredProducts = useSelector(state => state.filter.filteredProducts)

      // Pagination states
      // const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(9);
      // Get Current Products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterActions.sortProducts({ products, sort }));
      }, [dispatch, products, sort]);

    useEffect(() => {
        dispatch(filterActions.filterBySearch({ products, search }));
      }, [dispatch, products, search]);
  return (
    <ProductsListSection id='product'>
        <TopProductsList>
            <IconsContainer>
              <IconShowFilter onClick={context.toggleCategory}>
                <FaCogs size={27} color="orangered" />
                
              </IconShowFilter>
              <span class="material-symbols-outlined grid" onClick={() => setGrid(true)}>
                grid_view
              </span>
              <i class="fa-solid fa-list" onClick={() => setGrid(false)}></i>
                <p>
                    <b>{filteredProducts.length}</b> Productos encontrados.
                </p>
            </IconsContainer>
            <SearchContainer>
                <Search value={search} onChange={(e) => setSearch(e.target.value)}></Search>
            </SearchContainer>
            <Sort>
                <label>Buscar por:</label>
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="latest">Reciente</option>
                    <option value="lowest-price">Menor Precio</option>
                    <option value="highest-price">Mayor Precio</option>
                    <option value="a-z">A - Z</option>
                    <option value="z-a">Z - A</option>
                </select>
            </Sort>
        </TopProductsList>
        <TopProductsListMobile>
          <SearchContainerMobile>
                <Search value={search} onChange={(e) => setSearch(e.target.value)}></Search>
            </SearchContainerMobile>
            <DivMobile>
              <IconShowFilter onClick={context.toggleCategory}>
                  <span><FaCogs size={27} color="orangered" /></span>
                  <p>Filtrar</p>
                </IconShowFilter>

              <IconsContainerMobile>
                <div>

                <span class="material-symbols-outlined grid" onClick={() => setGrid(true)}>
                  grid_view
                </span>
                </div>
                <div>
                  <i class="fa-solid fa-list" onClick={() => setGrid(false)}></i>

                </div>
                <div>

                    <p>
                        <b>{filteredProducts.length}</b> Productos encontrados.
                    </p>
                </div>
              </IconsContainerMobile>

              <SortMobile>
                  <label>Buscar por:</label>
                  <select value={sort} onChange={(e) => setSort(e.target.value)}>
                      <option value="latest">Reciente</option>
                      <option value="lowest-price">Menor Precio</option>
                      <option value="highest-price">Mayor Precio</option>
                      <option value="a-z">A - Z</option>
                      <option value="z-a">Z - A</option>
                  </select>
              </SortMobile>
            </DivMobile>
            
        </TopProductsListMobile>

        
        <ProductsListContainer grid>
            {products.lenght === 0 ? (
                <p>No se encontraron productos</p>
                ): (
                    <>
                        {currentProducts.map((product) => {
                        return (
                            <div key={product.id}>
                            <ProductCard {...product} grid={grid} product={product} />
                            </div>
                        );
            })}
                    </>
                )}
        </ProductsListContainer>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
        />
    </ProductsListSection>
  )
}

export default ProductList