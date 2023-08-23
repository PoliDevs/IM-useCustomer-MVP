import axios from "axios";
import {ADD_PRODUCT} from "./actionTypes";

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