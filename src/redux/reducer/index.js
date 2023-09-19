import { dataDecrypt } from "../../utils/Functions";
import CryptoJS from "crypto-js";
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
  FILTER_BY_CATEGORY,
  REMOVE_USER,
  ADD_CART,
  SET_SECTOR,
} from "../actions/actionTypes";
import dotenv from "dotenv";


const getEncriptedItem = (item)=> {
  const clave = import.meta.env.VITE_REACT_APP_KEY;
  const objetoCifradoRecuperado = localStorage.getItem(item);
  if (objetoCifradoRecuperado){const bytes = CryptoJS.AES.decrypt(
    objetoCifradoRecuperado,
    clave
    );
    const objetoOriginal = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
  return objetoOriginal
}else return
}

const initalState = {
  table: localStorage.getItem("Pos")
    ? dataDecrypt(localStorage.getItem("Pos")).table
    : 0,
  sector: localStorage.getItem("Pos")
    ? dataDecrypt(localStorage.getItem("Pos")).sector
    : 0,
  allProducts: [],
  allDishes: [],
  allCategories: [],
  filtroPor: "",
  cart: localStorage.getItem("cart") ? getEncriptedItem("cart") : [],
  user: localStorage.getItem("user") ? getEncriptedItem("user") : {},
  // ? JSON.parse(localStorage.getItem("user"))
  // : {},
  commerce: localStorage.getItem("CM") ? getEncriptedItem("CM") : {},
  // commerce: {},
};

export const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_TABLE:
      return { ...state, table: action.payload };
    case SET_SECTOR:
      return { ...state, sector: action.payload };
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
    case ADD_CART:
      {
        const clave = import.meta.env.VITE_REACT_APP_KEY;
        const objetoCifrado = CryptoJS.AES.encrypt(
          JSON.stringify(action.payload),
          clave
        ).toString();

        localStorage.setItem("cart", objetoCifrado);
      }
      return state;
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
    case SET_USER: {
      const clave = import.meta.env.VITE_REACT_APP_KEY;
      const objetoCifrado = CryptoJS.AES.encrypt(
        JSON.stringify(action.payload),
        clave
      ).toString();

      localStorage.setItem("user", objetoCifrado);

      return { ...state, user: action.payload };
      // state = { ...state, user: action.payload };
      // localStorage.setItem("user", JSON.stringify(action.payload));
      // return state;
    }
    case GET_COMMERCE: {
      const CM = {
        id: action.payload.id,
        name: action.payload.name,
        active: action.payload.active,
        plan: action.payload.commercialPlan.plan,
        schedule: action.payload.workSchedule,
      };
      const clave = import.meta.env.VITE_REACT_APP_KEY;
      const objetoCifrado = CryptoJS.AES.encrypt(
        JSON.stringify(CM),
        clave
      ).toString();

      localStorage.setItem("CM", objetoCifrado);
      return { ...state, commerce: CM };
    }
    case GET_ACTIVE_MENUS:
      {
        //!comentado hasta que este listo el nuevo endpoint, desp borrar
        // const allActive = action.payload.menus.filter((m)=> m.commerce.id === action.payload.id);
        // state= {...state, allProducts: allActive}
        //? nuevo endpoint, falta que Luis lo acomode(get->post)
        state = { ...state, allProducts: action.payload.menus };
      }
      return state;
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
    case FILTER_BY_CATEGORY:
      return { ...state, filtroPor: action.payload };
    case REMOVE_USER:
      {
        localStorage.removeItem("user");
        state = { ...state, user: "" };
      }
      return state;
    default:
      return state;
  }
};

export default rootReducer;
