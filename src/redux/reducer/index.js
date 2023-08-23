import { ADD_PRODUCT } from "../actions/actionTypes";


const initalState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

export const  rootReducer = (state= initalState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
     return {...state, cart:  [...state.cart, action.payload]};

    default:
      return state;
  }
}

export default rootReducer;