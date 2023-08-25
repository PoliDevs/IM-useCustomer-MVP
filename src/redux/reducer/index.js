import { ADD_PRODUCT, GET_ALL_PRODUCTS, REMOVE_PRODUCT } from "../actions/actionTypes";


const initalState = {
  allProducts: [],
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

export const  rootReducer = (state= initalState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
     {
      const index = state.cart.findIndex((p) => p.name === action.payload.name);
      if (index === -1){
        return {...state, cart: [...state.cart, action.payload]}
      }
      else {
        state = {...state, cart: state.cart.filter(p=> p.name !== action.payload.name)}
        return {...state, cart: [...state.cart, action.payload]}
      }
    }
    case GET_ALL_PRODUCTS:
      return {...state, allProducts: action.payload}
    case REMOVE_PRODUCT:
      {
        const index = state.cart.findIndex((p)=> p.name === action.payload);
        return index !== -1 ? {...state, cart: [...state.cart.slice(0, index), ...state.cart.slice(index + 1)]} : state}
    default:
      return state;
  }
}

export default rootReducer;