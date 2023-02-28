import { Products } from '../../data/Products';
import { GET_PRICE_RANGE } from './products-actions';

const INITIAL_STATE = {
  products: Products,
  minPrice: null,
  maxPrice: null,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRICE_RANGE:
      const array = [];
      Products.map((product => {
        const price = product.price;
        return array.push(price)
      }))
      const max = Math.max(...array);
      const min = Math.min(...array);
      return {
        ...state,
        minPrice: min,
        maxPrice: max,
      }
    default:
      return state;
  }
};

export default productsReducer;
