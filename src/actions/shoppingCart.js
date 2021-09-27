export const ADD_SHOPPING_CART = 'ADD_SHOPPING_CART';
export const SAVE_SHOPPING_CART = 'SAVE_SHOPPING_CART';

export const addShoppingCart = () => ({
  type: ADD_SHOPPING_CART,
});

export const saveShoppingCart = (shoppingCart) => ({
  type: SAVE_SHOPPING_CART,
  shoppingCart
});
