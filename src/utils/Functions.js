import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../redux/actions";
import { categoryIcons } from "./Constants";
import CryptoJS from "crypto-js";
export default function useModal(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);
  const [productData, setProductData] = useState({
    name: '',
    price: 0,
    image: '',
    description: '',
  })


  //!descomentar para mostrar info del producto real
  const openModal = (name, price, image, description)=> {
    //  const openModal = (name, cost, photo, description)=> {
    setIsOpen(true);
    // setProductData({
    //   name: name,
    //   cost: cost,
    //   photo: photo,
    //   description: description,
    // });
    setProductData({
      name: name,
      price: price,
      image: image,
      description: description,
    });
  };

  const closeModal = ()=> setIsOpen(false);

  return {isOpen, openModal, closeModal, productData}
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


  return {addToCart, removeFromCart}
}

export function useRating() {
  const [stars, setStars] = useState(0);
  const starsArray = [...Array(5)]

  const handleStars = (currentRate) => {
    setStars(currentRate);
  };

  return { starsArray, stars, handleStars };
}

export function useLogin() {
  const [loginModal, setLoginModal] = useState(false);

  const openLoginModal = ()=>{
    setLoginModal(true);
  }

  const closeLoginModal = ()=>{
    setLoginModal(false);
  }
  return { loginModal, openLoginModal, closeLoginModal}
}

export const randomIcon = ()=>{
  let icon = categoryIcons[Math.floor(Math.random()*categoryIcons.length)];
  return icon
}


const urlInfo = "2/4";
const urlInfo2 = "1/5";
const password = "PureBlood";

//* linea para cifrar id de comercio y mesa
const ciphredUrl = CryptoJS.AES.encrypt(urlInfo2, password).toString();
//* linea para cifrar id de comercio y mesa
export const dataDecrypt = (data)=>{

const result = CryptoJS.AES.decrypt(data, password);
const originalText = result.toString(CryptoJS.enc.Utf8).split("/");
const urlInfo = {
  commerce: originalText[0],
  table: originalText[1],
};
return urlInfo;
}
