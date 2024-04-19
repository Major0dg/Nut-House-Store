export const FETCH_CART_ITEMS_REQUEST = "FETCH_CART_ITEMS_REQUEST";
export const FETCH_CART_ITEMS_SUCCESS = "FETCH_CART_ITEMS_SUCCESS";
export const FETCH_CART_ITEMS_FAILURE = "FETCH_CART_ITEMS_FAILURE";
export const ADD_TO_CART_ITEMS = "ADD_TO_CART_ITEMS";
export const SUBTRACT_CART_ITEMS = "SUBTRACT_CART_ITEMS";

export const fetchCartItemsRequest = () => ({
  type: FETCH_CART_ITEMS_REQUEST,
});

export const fetchCartItemsSuccess = (items) => ({
  type: FETCH_CART_ITEMS_SUCCESS,
  payload: items,
});

export const fetchCartItemsFailure = (error) => ({
  type: FETCH_CART_ITEMS_FAILURE,
  payload: error,
});

export const addToCart = (item) => ({
  type: ADD_TO_CART_ITEMS,
  payload: item,
});

export const subtractFromCart = (itemId) => ({
  type: SUBTRACT_CART_ITEMS,
  payload: itemId,
});

export const fetchCartItems = () => {
  return (dispatch) => {
    dispatch(fetchCartItemsRequest());
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchCartItemsSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchCartItemsFailure(error.message));
      });
  };
};
