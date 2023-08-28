import {
  ADD_PRODUCT,
  GET_ALL_PRODUCTS,
  REMOVE_PRODUCT,
} from "../actions/actionTypes";

const initalState = {
  allProducts: [],
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

export const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const index = state.cart.length
        ? state.cart.findIndex((p) => p.name === action.payload.name)
        : -1;
      if (index === -1 && action.payload.amount !== 0) {
        return { ...state, cart: [...state.cart, action.payload] };
      } else if (action.payload.amount !== 0) {
        return {
          ...state,
          cart: state.cart.map((p) =>
            p.name === action.payload.name ? { ...p, amount: p.amount + 1 } : p
          ),
        };
      }
      return state;
    }
    case GET_ALL_PRODUCTS:
      return { ...state, allProducts: action.payload };
    case REMOVE_PRODUCT: {
      const productIndex = state.cart.findIndex(
        (p) => p.name === action.payload
      );
      if (state.cart[productIndex].amount === 1) {
        state = {
          ...state,
          cart: state.cart.filter((p) => p.name !== action.payload),
        };
        return state;
      } else {
        return {
          ...state,
          cart: state.cart.map((p) =>
            p.name === action.payload ? { ...p, amount: p.amount - 1 } : p
          ),
        };
      }
    }
    default:
      return state;
  }
};

export default rootReducer;
