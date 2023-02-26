export const sortProductsReducer = (filteredProducts,{products, sort}) => {
  let tempProducts = [];
    if (products.sort === "latest") {
      tempProducts = products.products;
    }

    if (products.sort === "lowest-price") {
      tempProducts = products.products.slice().sort((a, b) => {
        return a.price - b.price;
      });
    }

    if (products.sort === "highest-price") {
      tempProducts = products.products.slice().sort((a, b) => {
        return b.price - a.price;
      });
    }

    if (products.sort === "a-z") {
      tempProducts = products.products.slice().sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (products.sort === "z-a") {
      tempProducts = products.products.slice().sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

    filteredProducts = tempProducts;
    return filteredProducts;
}

export const filterByCategoryReducer = (filteredProducts, {products, category}) => {

  let tempProducts = [];
    if (products.category === "All") {
        tempProducts = products.products;
    } else {
        tempProducts = products.products.filter(
          (product) => product.category === products.category
        );
    }

    filteredProducts = tempProducts;

    return filteredProducts;
}

export const filterByBrandReducer = (filteredProducts, {products, brand}) => {
    let tempProducts = [];

    if (products.brand === "All") {
      tempProducts = products.products;
    } else {
      tempProducts = products.products.filter((product) => product.brand === products.brand);
    }
    filteredProducts = tempProducts;
    return filteredProducts;
}

export const filterByPriceReducer = (filteredProducts,{products,price}) => {

    let tempProducts = [];
    tempProducts = products.products.filter((product) => product.price <= products.price);
    filteredProducts = tempProducts;

    return filteredProducts;
}