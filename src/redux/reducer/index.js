import {
  ADD_PRODUCT,
  GET_ALL_PRODUCTS,
  REMOVE_PRODUCT,
  SET_USER,
  GET_COMMERCE,
} from "../actions/actionTypes";

const initalState = {
  allProducts: [],
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
  commerce: localStorage.getItem("commerce")
    ? JSON.parse(localStorage.getItem("commerce"))
    : {},
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
            p.name === action.payload.name
              ? { ...p, amount: p.amount + 1, comment: action.payload.comment }
              : p
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
    case SET_USER: {
      state = { ...state, user: action.payload };
      localStorage.setItem("user", JSON.stringify(action.payload));
      return state;
    }
    case GET_COMMERCE:
      state = {
        ...state,
        commerce: {
          id: action.payload.id,
          name: action.payload.name,
          active: action.payload.active,
          plan: action.payload.commercialPlan.plan,
          schedule: action.payload.workSchedule,
        },
      };
      localStorage.setItem("commerce", JSON.stringify(state.commerce));
      return state;

    default:
      return state;
  }
};

export default rootReducer;
