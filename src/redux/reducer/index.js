import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_USER,
  GET_COMMERCE,
  GET_ACTIVE_MENUS,
  GET_ACTIVE_DISHES,
  FILTER_CATEGORY,
  GET_ALL_CATEGORIES,
  GET_SEARCHED_PRODUCT,
  SET_TABLE,
} from "../actions/actionTypes";

const initalState = {
  table: localStorage.getItem("table") ? localStorage.getItem("table") : 0,
  allProducts: [],
  allDishes: [],
  allCategories: [],
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
    case SET_TABLE: {
      state = { ...state, table: action.payload };
      localStorage.setItem("table", action.payload);
      return state;
    }
    case GET_SEARCHED_PRODUCT: {
      const copy = [...state.allProducts];
      const results = state.allProducts.filter((p) =>
        p.altName.toLowerCase().includes(action.payload.toLowerCase())
      );
      if (results.length) {
        return (state = { ...state, allProducts: results });
      } else {
        state = { ...state, allProducts: copy };
      }
      return state;
    }
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
              ? {
                  ...p,
                  amount: p.amount + action.payload.amount,
                  comment: action.payload.comment,
                }
              : p
          ),
        };
      }
      return state;
    }
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
    case SET_USER: { //!agregar funcionalidad de token
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
    case GET_ACTIVE_MENUS:
    {
    const allActive = action.payload.menus.filter((m)=> m.commerce.id === action.payload.id);
    state= {...state, allProducts: allActive}
    }
    return state
    case GET_ACTIVE_DISHES:
      {
        const allActive = action.payload.dishes.filter(
          (d) => d.commerce.id === action.payload.id
        );
        state = { ...state, allDishes: allActive };
        //state = { ...state, allProducts: state.allProducts.concat(allActive) };//!descomentar para agregar los platos activos del comercio
      }
      return state;
    case GET_ALL_CATEGORIES:
      return { ...state, allCategories: action.payload };
    case FILTER_CATEGORY: {
      const products = [...state.allProducts];
      const filteredResults = products.filter(
        (p) => p.category.id === action.payload 
      );
      return { ...state, allProducts: filteredResults };
    }
    default:
      return state;
  }
};

export default rootReducer;
