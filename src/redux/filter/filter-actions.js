export const FILTER_BY_SEARCH = "FILTER_BY_SEARCH"
export const SORT_PRODUCTS = "SORT_PRODUCTS"
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY"
export const FILTER_BY_BRAND = "FILTER_BY_BRAND"
export const FILTER_BY_PRICE = "FILTER_BY_PRICE"

export const filterBySearch = (products , search) => ({
    type: FILTER_BY_SEARCH ,
    payload: {products,search}
})

export const sortProducts = (products, sort) => ({
    type: SORT_PRODUCTS,
    payload: {products , sort}
})

export const filterByCategory = (products, category) => ({
    type: FILTER_BY_CATEGORY,
    payload: {products, category}
})
export const filterByBrand = (products, brand) => ({
    type: FILTER_BY_BRAND,
    payload: {products, brand}
})
export const filterByPrice = (products, price) => ({
    type: FILTER_BY_PRICE,
    payload: {products, price}
})

