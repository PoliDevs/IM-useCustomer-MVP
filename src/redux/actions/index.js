import axios from "axios";
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
  REMOVE_USER,
  ADD_CART,
} from "./actionTypes";
import { ProductsInfo } from "../../utils/Constants";

////////////////////* SearchBar Action Creator *////////////////////

export function searchProduct(product) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: GET_SEARCHED_PRODUCT,
        payload: product,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

////////////////////* Cart Actions Creators *////////////////////

export function addCart(cart) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: ADD_CART,
        payload: cart
      })
    } catch (error) {
      console.error(error);
    }
  }
}

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

////////////////////* Order *////////////////////

export async function postOrder(order){
    try {
      const newOrder = {
        name: order.name,
        date: "2023-08-19",
        hour: "09:57",
        status: "orderPlaced",
        detail: "",
        validity: "2023-08-18",
        promotion: 0,
        discount: 0,
        surcharge: 0,
        rating: 5,
        feedback: order.comment,
        menu: order.menu,
        pos: order.table,
        employee: 2,
        dish: "",
        account: 1,
        payment: order.payment,
        commerce: order.commerce,
      };
      let response = await axios.post("http://localhost:3001/order/order",newOrder);
      return response;
    } catch (error) {
      console.error(error);
    }
  }


////////////////////* Commerce Actions Creators *////////////////////

export function setTable(table) {
  return async function (dispatch) {
    try {
      //llamado a api para consultar datos de Pos
      return dispatch({
        type: SET_TABLE,
        payload: table
      })
    } catch (error) {
      console,error(error)
    }
  }
}

export function getCommerce(id) {
  return async function (dispatch) {
    try {
      let commerceInfo = await axios.get(
        `http://localhost:3001/commerce/detail/${id}`
      );
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
        `http://localhost:3001/menu/all_active/${id}`
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

//!comentado hasta que arreguen este nuevo endpoint
// export function getActiveMenus(id) {
//   return async function (dispatch) {
//     try {
//       let date = new Date().toJSON().slice(0, 10);
//       const info = {
//         commerceId: id,
//         date: date,
//       };
//       let allActiveMenus = await axios.get(
//         "http://localhost:3001/menu/menuCommerceActive",
//         info
//       );
//       return dispatch({
//         type: GET_ACTIVE_MENUS,
//         payload: { menus: allActiveMenus.data},
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };
// }
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

export function getAllCategorys(id) {
  return async function (dispatch) {
    try {
      let allActiveCategorys = await axios.get(
        `http://localhost:3001/category/all_active/${id}`
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

export function filterCategory(id) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: FILTER_CATEGORY,
        payload: id,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export const setFiltro = (filtroPor) => {
  return {
    type: "FILTER_BY_CATEGORY",
    payload: filtroPor,
  };};


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

export function removeUser () {
  return async function (dispatch) {
    try {
      return dispatch ({
        type: REMOVE_USER,
      })
    } catch (error) {
      console.error(error);
    }
  }
}
