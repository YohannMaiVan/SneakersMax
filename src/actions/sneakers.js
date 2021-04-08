export const FETCH_SNEAKERS = 'FETCH_SNEAKERS';
export const GET_SNEAKERS = 'GET_SNEAKERS';

export const fetchSneakers = () => ({
  type: FETCH_SNEAKERS,
});

export const getSneakers = (sneakers) => ({
  type: GET_SNEAKERS,
  sneakers,
});