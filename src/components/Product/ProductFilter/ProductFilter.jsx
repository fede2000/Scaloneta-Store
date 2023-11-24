import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import * as filterActions from "../../../redux/filter/filter-actions"
import { ButtonClear, FilterBrand, FilterCategory, FilterContainer, FilterPrice, TitleFilters, TopFilter } from './ProductFilterStyled';
import { useContext } from 'react';
import { CategoryContext } from '../../../Context/Context';
import { FaTimes} from "react-icons/fa";

// import axios from 'axios';
const ProductFilter = ({setCurrentPage,}) => {
  const [data, setData] = useState([]);
    const context = useContext(CategoryContext)
    const [category, setCategory] = useState("All");
    const [brand, setBrand] = useState("All");
    const [price, setPrice] = useState(3000);
    const products = useSelector(state => state.products.products);
    const minPrice = useSelector(state => state.products.minPrice);
    const maxPrice = useSelector(state => state.products.maxPrice);

    const dispatch = useDispatch();
    useEffect(() => {
      // Define the API URL you want to fetch data from
      const apiUrl = "https://api-scaloneta-store.onrender.com/api/v1/category";
  
      // Fetch data from the API
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setData(data.data.result);
        })
        .catch((error) => {
        });
    }, []);

    




    const allCategories = [
        "All",

        ...new Set(data.map((category) => category.category)),

      ];
      const allBrands = [
        "All",
        ...new Set(products.map((product) => product.brand)),

      ];

      useEffect(() => {
        dispatch(filterActions.filterByBrand({ products, brand }));
      }, [dispatch, products, brand]);
    
      useEffect(() => {
        dispatch(filterActions.filterByPrice({ products, price }));
      }, [dispatch, products, price]);
    
      const filterProducts = (cat) => {
        setCategory(cat);
        dispatch(filterActions.filterByCategory({ products, category: cat }));
        setCurrentPage(1);
      };
    
      const clearFilters = () => {
        setCategory("All");
        setBrand("All");
        setPrice(maxPrice);
        setCurrentPage(1);
      };
  return (
    <FilterContainer>
        <TopFilter>  
        <TitleFilters>Categorias</TitleFilters>
        <FaTimes size={30} color="#fff" onClick={context.toggleCategory}></FaTimes>
        </TopFilter>
        <FilterCategory>
            {allCategories.map((cat, index) => {
              // setCurrentPage(1);
                return (
                    <button key={index} type="button" className={`${category}` === cat ? `active` : null} onClick={() => {filterProducts(cat); }}>
                        <div onClick={context.toggleCategory}>
                        &#8250; {cat}
                        </div>
                    </button>
                )
            })}
        </FilterCategory>
        <TitleFilters>Marca</TitleFilters>
        <FilterBrand>
        <select value={brand} onChange={(e) => {setBrand(e.target.value); setCurrentPage(1)}} >
          {allBrands.map((brand, index) => {
            return (
              <option className='option' key={index} value={brand} onClick={context.toggleCategory}>
                {brand}
              </option>
            );
          })}
        </select>
        </FilterBrand>
        <TitleFilters>Precio</TitleFilters>
        
        <FilterPrice>
            <p>{`$${price}`}</p>
            <input type="range"
            value={price}
            onChange={(e) => {setPrice(e.target.value);setCurrentPage(1);}}
            min={minPrice}
            max={maxPrice
            }>
            </input>
        </FilterPrice>
        <br />
        <ButtonClear onClick={clearFilters}>Limpiar Filtros</ButtonClear>
    </FilterContainer>
  )
}

export default ProductFilter