export const GET_PRICE_RANGE = "GET_PRICE_RANGE"

export const getPriceRange = (products) => ({
  type: GET_PRICE_RANGE,
  payload: products,

})