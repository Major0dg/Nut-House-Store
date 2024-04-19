import { combineReducers } from "redux";
import {
  FETCH_CART_ITEMS_REQUEST,
  FETCH_CART_ITEMS_SUCCESS,
  FETCH_CART_ITEMS_FAILURE,
  ADD_TO_CART_ITEMS,
  SUBTRACT_CART_ITEMS,
} from "../actions";

const products = {
  count: 0,
  items: [],
  cartItems: [],
  loading: false,
  error: null,
};

const cartReducer = (state = products, action) => {
  switch (action.type) {
    case FETCH_CART_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CART_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: null,
      };
    case FETCH_CART_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_TO_CART_ITEMS:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        count: state.count + 1,
      };
    case SUBTRACT_CART_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        count: state.count > 0 ? state.count - 1 : 0,
      };

    default:
      return state;
  }
};

export default combineReducers({
  cart: cartReducer,
});
