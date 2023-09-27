import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../redux/actions";
import { categoryIcons } from "./Constants";
import CryptoJS from "crypto-js";
import dotenv from "dotenv";

export default function useModal(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);
  const [productData, setProductData] = useState({
    name: "",
    price: 0,
    image: "",
    description: "",
  });

  const openModal = (name, price, image, description) => {
    setIsOpen(true);
    setProductData({
      name: name,
      price: price,
      image: image,
      description: description,
    });
  };

  const closeModal = () => setIsOpen(false);

  return { isOpen, openModal, closeModal, productData };
}

export function useAmountControls() {
  const dispatch = useDispatch();

  const addToCart = (image, name, description, price, amount, comment) => {
    const product = {
      image: image,
      name: name,
      description: description,
      price: price,
      amount: amount,
      comment: comment,
    };
    dispatch(addProduct(product));
  };

  const removeFromCart = (name) => {
    dispatch(removeProduct(name));
  };

  return { addToCart, removeFromCart };
}

export function useRating() {
  const [stars, setStars] = useState(0);
  const starsArray = [...Array(5)];

  const handleStars = (currentRate) => {
    setStars(currentRate);
  };

  return { starsArray, stars, handleStars };
}

export function useTermsAndConditions() {
  const [loginModal, setLoginModal] = useState(false);

  const openLoginModal = () => {
    setLoginModal(true);
  };

  const closeLoginModal = () => {
    setLoginModal(false);
  };
  return { loginModal, openLoginModal, closeLoginModal };
}

export const randomIcon = () => {
  let icon = categoryIcons[Math.floor(Math.random() * categoryIcons.length)];
  return icon;
};
export const dataDecrypt = (data) => {
  const password = import.meta.env.VITE_REACT_APP_KEY;
  const result = CryptoJS.AES.decrypt(data, password);
  const originalText = result.toString(CryptoJS.enc.Utf8).split("/");
  const urlInfo = {
    commerce: originalText[0],
    sector: originalText[1],
    table: originalText[2],
  };
  return urlInfo;
};

import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { all_app_texts } from "./language";

//! funcionando -- falta pasar como variable from y to
export async function translateText(lang = "en", all_app_texts) {
  //! obtengo todos los valores de un array con objetos
  const arrayTexts = all_app_texts.map((obj) => {
    const clave = Object.keys(obj)[0];
    const valor = obj[clave];
    return valor;
  });
  //! les doy la forma que requiere microsoft translator
  const formattedTextArray = arrayTexts.map((text) => ({ text }));
  const objetoResultado = {};
  //! hago la traduccion
  return await axios({
    baseURL: "https://api.cognitive.microsofttranslator.com",
    url: "/translate",
    method: "post",
    headers: {
      "Ocp-Apim-Subscription-Key": "7cb91588e50b4b12beffd5ab477bce1a",
      "Ocp-Apim-Subscription-Region": "brazilsouth",
      "Content-type": "application/json",
      "X-ClientTraceId": uuidv4().toString(),
    },
    params: {
      "api-version": "3.0",
      from: "es",
      to: lang,
    },
    data: formattedTextArray,
    responseType: "json",
  }).then(function (response) {
    // console.log(JSON.stringify(response.data, null, 4));
    const all_app_texts_translated = all_app_texts.map((o, index) => {
      const key = Object.keys(o)[0];
      return { [key]: response.data[index].translations[0].text };
    });
    // const objetoResultado = {};
  
    for (const obj of all_app_texts_translated) {
      Object.assign(objetoResultado, obj);
    }
    //! resultado en forma de objeto
    return objetoResultado;
  })
}

// Call the function to translate text.
// export const languageSelected = await translateText("en", all_app_texts); 
// console.log(`${(localStorage.getItem("Lang"))}`);
// export const languageSelected = await translateText(
//   localStorage.getItem("Lang") ? `${localStorage.getItem("Lang")}` : "en",
//   all_app_texts
// ); 

// storeLanguages(languageSelected);

