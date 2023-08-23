import { ADD_PRODUCT, GET_ALL_PRODUCTS } from "../actions/actionTypes";


const initalState = {
  allProducts: [],
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

export const  rootReducer = (state= initalState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
     return {...state, cart:  [...state.cart, action.payload]};
    case GET_ALL_PRODUCTS:
      return {...state, allProducts: action.payload}
    default:
      return state;
  }
}

export default rootReducer;