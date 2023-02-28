import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Importamos los reducers necesarios
import categoriesReducer from './categories/categories-reducer';
import productsReducer from './products/products-reducer';
import cartReducer from './cart/cart-reducer';
import userReducer from './user/user-reducer';
import ordersReducer from './orders/orders-reducer';
import filterReducer from './filter/filter-reducers';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart', 'user'],
};

const rootReducer = combineReducers({
  // Agregar reducers
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  user: userReducer,
  orders: ordersReducer,
  filter: filterReducer,
});

export default persistReducer(persistConfig, rootReducer);
