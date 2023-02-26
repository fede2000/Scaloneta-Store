import { SAVE_BILLING_ADDRESS, SAVE_SHIPPING_ADDRESS } from "./checkout-actions";

const INITIAL_STATE = {
    shippingAddress: {},
    billingAddress: {},
  };

  const checkoutReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SAVE_SHIPPING_ADDRESS:
        return {
          ...state,
          shippingAddress: action.payload

        };
      case SAVE_BILLING_ADDRESS:
        return {
          ...state,
            billingAddress: action.payload
        };
      
      default:
        return state;
    }
  };

export default checkoutReducer