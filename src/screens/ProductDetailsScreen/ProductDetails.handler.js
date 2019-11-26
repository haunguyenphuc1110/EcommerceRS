const checkExistProduct = (product, listProduct) => {
  for (let i = 0; i < listProduct.length; i++) {
    if (listProduct[i].product_id === product.product_id) {
      return true;
    }
  }
  return false;
}

export {
  checkExistProduct
}