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
  SET_SECTOR,
  GET_STATUS,
  GET_ACTIVE_PRODUCTS,
  GET_ALL_ADITIONALS,
  CHANGE_LANGUAGE,
} from "./actionTypes";
import { ProductsInfo } from "../../utils/Constants";
import { TRANSLATE_TEXT } from "./actionTypes";
import { v4 as uuidv4 } from "uuid";
import { all_app_texts } from "../../utils/language";
import { translateText } from "../../utils/Functions";

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

export function setSector(sector) {
  return async function (dispatch) {
    try {
      //llamado a api para consultar datos de Pos
      return dispatch({
        type: SET_SECTOR,
        payload: sector,
      });
    } catch (error) {
      console, error(error);
    }
  };
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

export function getStatus(id, setIsLoading) {
  return async function (dispatch) {
    try {
      let status = await axios.get(
        `http://localhost:3001/commerce/openCommerce/${id}`
      );
      setIsLoading(false)
      return dispatch({
        type: GET_STATUS,
        payload: status.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function getActiveMenus(id, setIsLoading) {
  return async function (dispatch) {
    try {
      let allActiveMenus = await axios.get(
        // `http://localhost:3001/menu/all_active/${id}`
        `http://localhost:3001/menu/lastMenu/${id}`
      );
      if (setIsLoading) setIsLoading(false)
      return dispatch({
        type: GET_ACTIVE_MENUS,
        // payload: { menus: allActiveMenus.data, id: id },
        payload: allActiveMenus.data
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

export function getActiveProducts(id) {
  return async function (dispatch) {
    try {
      let allActiveProducts = await axios.get(
        `http://localhost:3001/product/all_active/${id}`
      );
      return dispatch({
        type: GET_ACTIVE_PRODUCTS,
        payload: allActiveProducts.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function getActiveAditionals (id) {
  return async function (dispatch) {
    try {
      let allActiveAditionals = await axios.get(
        `http://localhost:3001/additional/all_active/${id}`
      );
      return dispatch({
        type: GET_ALL_ADITIONALS,
        payload: allActiveAditionals.data,
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

////////////////////* Language Action type *////////////////////

export function changeLanguage(lang, setIsloading) {
  return async function (dispatch) {
    try {
      if (setIsloading) setIsloading(true);
      const result = dispatch({
        type: CHANGE_LANGUAGE,
        payload: {
          lang: lang,
          language: await translateText(lang, all_app_texts),
        },
      });
      if(setIsloading)setIsloading(false);
      return result;
    } catch (error) {
      console.error(error);
    }
  };
}
