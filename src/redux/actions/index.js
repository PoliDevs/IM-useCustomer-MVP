import axios from "axios";
import {
  ADD_PRODUCT,
  GET_ALL_PRODUCTS,
  REMOVE_PRODUCT,
  SET_USER,
  GET_COMMERCE,
  GET_ACTIVE_MENUS,
  GET_ACTIVE_DISHES,
  FILTER_CATEGORY,
  GET_ALL_CATEGORIES,
} from "./actionTypes";
import { ProductsInfo } from "../../utils/Constants";

////////////////////* Cart Actions Creators *////////////////////
export function addProduct(product) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: ADD_PRODUCT,
        payload: product,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllProducts() {
  return async function (dispatch) {
    try {
      return dispatch({
        type: GET_ALL_PRODUCTS,
        payload: ProductsInfo,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function removeProduct(name) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: REMOVE_PRODUCT,
        payload: name,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

////////////////////* Commerce Actions Creators *////////////////////

export function getCommerce(id) {
  return async function (dispatch) {
    try {
      let commerceInfo = await axios.get(
        `http://localhost:3001/commerce/detail/${id}`
      );
      console.log(commerceInfo.data);
      return dispatch({
        type: GET_COMMERCE,
        payload: commerceInfo.data[0],
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function getActiveMenus(id) {
  return async function (dispatch) {
    try {
      let allActiveMenus = await axios.get(
        "http://localhost:3001/menu/all_active"
      );
      return dispatch({
        type: GET_ACTIVE_MENUS,
        payload: { menus: allActiveMenus.data, id: id },
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function getActiveDishes(id) {
  return async function (dispatch) {
    try {
      let allActiveDishes = await axios.get(
        "http://localhost:3001/dish/all_active"
      );
      return dispatch({
        type: GET_ACTIVE_DISHES,
        payload: { dishes: allActiveDishes.data, id: id },
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function getAllCategorys() {
  return async function (dispatch) {
    try {
      let allActiveCategorys = await axios.get(
        "http://localhost:3001/category/all_active"
      );
      return dispatch({
        type: GET_ALL_CATEGORIES,
        payload: allActiveCategorys.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function filterCategory(name) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: FILTER_CATEGORY,
        payload: name,
      });
    } catch (error) {
      console.error(error);
    }
  };
}


////////////////////* User Actions Creators *////////////////////
export function setUser(user) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: SET_USER,
        payload: user,
      });
    } catch (error) {
      console.error(error);
    }
  };
}
