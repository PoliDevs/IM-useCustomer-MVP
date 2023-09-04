import axios from "axios";
import { ADD_PRODUCT, GET_ALL_PRODUCTS, REMOVE_PRODUCT, SET_USER, GET_COMMERCE } from "./actionTypes";
import { ProductsInfo } from "../../utils/Constants";

////////////////////* Cart Actions Creators *////////////////////
export function addProduct (product){
  return async function (dispatch) {
    try {
      return dispatch ({
        type: ADD_PRODUCT,
        payload: product,
      })
    } catch (error) {
      console.log(error) }
  }
}

export function getAllProducts (){
  return async function (dispatch) {
    try {
      return dispatch ({
        type: GET_ALL_PRODUCTS,
        payload: ProductsInfo
      })
    } catch (error) {
      console.error(error);
    }
  }
}

export function removeProduct (name){
  return async function (dispatch) {
    try {
      return dispatch ({
        type: REMOVE_PRODUCT,
        payload: name
      })
    } catch (error) {
      console.error(error)
    }
  }
}

////////////////////* Cart Actions Creators *////////////////////

////////////////////* Commerce Action Creator *////////////////////

export function getCommerce (id){
  return async function (dispatch){
    try {
      let commerceInfo = await axios.get(
        `http://localhost:3001/commerce/detail/${id}`
      );
      console.log(commerceInfo.data);
      return dispatch ({
        type: GET_COMMERCE,
        payload: commerceInfo.data[0]
      })
    } catch (error) {
      console.error(error)
    }
  }
}

////////////////////* Commerce Action Creator *////////////////////
export function setUser (user){
  return async function (dispatch) {
    try {
      return dispatch({
        type: SET_USER,
        payload: user
      });
    } catch (error) {
      console.error(error)      
    }
  }
}