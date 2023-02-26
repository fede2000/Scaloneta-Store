import { FILTER_BY_SEARCH } from "./filter-actions";
import { FILTER_BY_CATEGORY } from "./filter-actions";
import { FILTER_BY_BRAND } from "./filter-actions";
import { FILTER_BY_PRICE } from "./filter-actions";
import { SORT_PRODUCTS } from "./filter-actions";
import { filterByBrandReducer, filterByCategoryReducer, filterByPriceReducer, sortProductsReducer } from "./filter-utils";


const INITIAL_STATE = {
    filteredProducts: []
  };

const filterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case FILTER_BY_SEARCH:
            const { products, search } = action.payload;
            const tempProducts = products.products.filter(
              (product) =>
                product.name.toLowerCase().includes(products.search.toLowerCase()) ||
                product.category.toLowerCase().includes(products.search.toLowerCase())
            );
            return {
                ...state,
                filteredProducts: tempProducts,
            };
        case SORT_PRODUCTS:
            return{
                ...state,
                filteredProducts: sortProductsReducer(state.filteredProducts,action.payload)
            }
        case FILTER_BY_CATEGORY:
            return{
                ...state,
                filteredProducts: filterByCategoryReducer(state.filteredProducts,action.payload)
            }
        case FILTER_BY_BRAND:
            return{
                ...state,
                filteredProducts: filterByBrandReducer(state.filteredProducts,action.payload)
            }
        case FILTER_BY_PRICE:
            return{
                ...state,
                filteredProducts: filterByPriceReducer(state.filteredProducts,action.payload)
            }
        default:
            return state;
        }
}

export default filterReducer