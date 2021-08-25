export const FETCH_SNEAKERS = 'FETCH_SNEAKERS';
export const GET_SNEAKERS = 'GET_SNEAKERS';
export const SELECTED_PRODUCT = 'SELECTED_PRODUCT';

export const fetchSneakers = () => ({
  type: FETCH_SNEAKERS,
});

export const getSneakers = (sneakers) => ({
  type: GET_SNEAKERS,
  sneakers,
});

export const selectedProduct = (sneaker) => ({
  type: SELECTED_PRODUCT,
  sneaker,
});