import axios from "axios";
import { ADD_PRODUCT, GET_ALL_PRODUCTS, REMOVE_PRODUCT } from "./actionTypes";
import { ProductsInfo } from "../../utils/Constants";

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