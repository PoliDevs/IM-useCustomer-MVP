import {
  dataDecrypt,
  // menuTranslate,
  // translateText,
} from '../../utils/Functions';
import CryptoJS from 'crypto-js';
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
  GET_STATUS,
  GET_ACTIVE_PRODUCTS,
  GET_ALL_ADITIONALS,
  CHANGE_LANGUAGE,
  SET_TABLE_PRICE,
  SET_SECTOR_PRICE,
  CLEAR_SEARCH_PRODUCT,
  GET_PAYMENT_METHODS,
  IS_PRODUCT_AVAILABLE,
  GET_ORDER_STATUS,
  PUT_ORDER_DATA,
  GET_ORDER_PENDING,
  REMOVE_CART,
  REMOVE_ORDER_ID,
  GET_ORDERS_BY_USER,
  CLEAR_ORDER_STATUS,
  HIDE_BANNER,
} from '../actions/actionTypes';
// import { all_app_texts } from '../../utils/language';

const getEncriptedItem = (item) => {
  const clave = import.meta.env.VITE_REACT_APP_KEY;
  const objetoCifradoRecuperado = localStorage.getItem(item);
  if (objetoCifradoRecuperado) {
    const bytes = CryptoJS.AES.decrypt(objetoCifradoRecuperado, clave);
    const objetoOriginal = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return objetoOriginal;
  } else return;
};

// const translation = async () => {
//   await translateText(localStorage.getItem('Lang'), all_app_texts);
// };

const initalState = {
  table: localStorage.getItem('Pos')
    ? dataDecrypt(localStorage.getItem('Pos')).table
    : 0,
  sector: localStorage.getItem('Pos')
    ? dataDecrypt(localStorage.getItem('Pos')).sector
    : 0,
  allProducts: [],
  allDishes: [],
  products: [],
  allAditionals: [],
  allCategories: [],
  filtroPor: '',
  search: [],
  paymentMethods: [],
  productAvailable: true,
  statusBanner: false,
  cart: localStorage.getItem('cart') ? getEncriptedItem('cart') : [],
  user: localStorage.getItem('user') ? getEncriptedItem('user') : {},
  commerce: localStorage.getItem('CM') ? getEncriptedItem('CM') : {},
  status: false,
  loading: false,
  // language: localStorage.getItem("Lang")
  //   ? // ? await translateText(localStorage.getItem("Lang"), all_app_texts)
  //     translation()
  //   : "es",
  tablePrice: {},
  sectorPrice: {},
  orderId: localStorage.getItem('CSMO_ID')
    ? localStorage.getItem('CSMO_ID')
    : '',
  orderStatus: '',
  ordersByUser: [],
};

export const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    ////////////////////* Commerce Cases *////////////////////
    case SET_TABLE:
      return { ...state, table: action.payload };
    case SET_SECTOR:
      return { ...state, sector: action.payload };

    case GET_SEARCHED_PRODUCT: {
      const allProducts = [
        ...state.allProducts,
        ...state.products,
        ...state.allAditionals,
      ];

      const searchTerm = action.payload.toLowerCase();
      const matchingResults = allProducts.filter((p) => {
        const productName = p.name.toLowerCase();
        const categoryName = p.category.category.toLowerCase();

        return (
          productName.includes(searchTerm) || categoryName.includes(searchTerm)
        );
      });

      if (matchingResults.length === 0) {
        return { ...state, search: [], loading: true };
      }

      const groupedResults = matchingResults.reduce((acc, product) => {
        const categoryId = product.category.id;
        if (!acc[categoryId]) {
          acc[categoryId] = {
            id: `category-${categoryId}`,
            category: product.category.category,
            isCategoryHeader: true,
            products: [],
          };
        }
        acc[categoryId].products.push(product);
        return acc;
      }, {});

      return {
        ...state,
        search: Object.values(groupedResults),
        loading: false,
      };
    }
    case CLEAR_SEARCH_PRODUCT:
      return { ...state, search: [], loading: false };
    case ADD_CART:
      {
        const clave = import.meta.env.VITE_REACT_APP_KEY;
        const objetoCifrado = CryptoJS.AES.encrypt(
          JSON.stringify(action.payload),
          clave
        ).toString();

        localStorage.setItem('cart', objetoCifrado);
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

      localStorage.setItem('user', objetoCifrado);

      return { ...state, user: action.payload };
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

      localStorage.setItem('CM', objetoCifrado);
      return { ...state, commerce: CM };
    }
    case GET_STATUS:
      return { ...state, status: action.payload };
    case GET_PAYMENT_METHODS:
      return { ...state, paymentMethods: action.payload };
    case GET_ACTIVE_MENUS:
      {
        const allActive = action.payload.filter((m) => m.active === true);
        state = { ...state, allProducts: allActive };
      }
      return state;
    case GET_ACTIVE_DISHES:
      {
        const allActive = action.payload.dishes.filter(
          (d) => d.commerce.id === action.payload.id
        );
        state = { ...state, allDishes: allActive };
      }
      return state;
    case GET_ACTIVE_PRODUCTS:
      {
        state = { ...state, products: action.payload };
      }
      return state;
    case GET_ALL_CATEGORIES:
      return { ...state, allCategories: action.payload };
    case GET_ALL_ADITIONALS: {
      return { ...state, allAditionals: action.payload };
    }
    case FILTER_CATEGORY: {
      const products = [...state.allProducts, ...state.allDishes];
      const filteredResults = products.filter(
        (p) => p.category.id === action.payload
      );
      return { ...state, allProducts: filteredResults };
    }
    case FILTER_BY_CATEGORY:
      return { ...state, filtroPor: action.payload };
    case IS_PRODUCT_AVAILABLE: {
      const allItemsAvailable = [
        ...state.allProducts,
        ...state.allAditionals,
        state.products,
      ];
      let available = allItemsAvailable.findIndex(
        (i) => i.name === action.payload.name
      );
      if (available !== -1) {
        action.payload.setLoading(false);
        return { ...state, productAvailable: true };
      } else {
        action.payload.setLoading(false);
        return { ...state, productAvailable: false };
      }
    }
    case REMOVE_USER:
      {
        localStorage.removeItem('user');
        state = { ...state, user: '' };
      }
      return state;
    case CHANGE_LANGUAGE:
      {
        localStorage.setItem('Lang', action.payload.lang);
        // state = { ...state, language: action.payload };
        //!descomentar - probando loader en cambio de idioma - home
        // state = { ...state, language: action.payload.language, allProducts: [], allAditionals: [], products: [], allCategories: [] };
        state = { ...state, language: action.payload.language };
      }
      return state;
    case SET_TABLE_PRICE:
      return { ...state, tablePrice: action.payload };
    case SET_SECTOR_PRICE:
      return { ...state, sectorPrice: action.payload };
    case GET_ORDER_STATUS: {
      let orderId = action.payload.allOrders.find(
        (o) => o.id == action.payload.orderId
      );
      let status = orderId ? orderId.status : '';
      return { ...state, orderStatus: status };
    }
    case PUT_ORDER_DATA:
      return { ...state, orderId: action.payload.CSMO_ID };
    case GET_ORDER_PENDING: {
      let pendingOrder = action.payload.allOrders.filter((o) => {
        let pending =
          o.status !== 'delivered' &&
          o.sector.id == action.payload.sectorID &&
          o.po.id == action.payload.tableID;
        return pending;
      });
      if (pendingOrder.length) {
        localStorage.setItem('CSMO_ID', pendingOrder[0].id);
        return {
          ...state,
          orderId: pendingOrder && pendingOrder[0].id,
          orderStatus: pendingOrder[0].status,
        };
      } else {
        localStorage.removeItem('CSMO_ID');
        return state;
      }
    }
    case GET_ORDERS_BY_USER:
      return { ...state, ordersByUser: action.payload };
    case REMOVE_CART:
      return { ...state, cart: [] };
    case REMOVE_ORDER_ID:
      return { ...state, orderId: '' };
    case CLEAR_ORDER_STATUS:
      return { ...state, orderStatus: '' };
    case HIDE_BANNER:
      return { ...state, statusBanner: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
