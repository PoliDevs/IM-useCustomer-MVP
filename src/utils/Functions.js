import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../redux/actions";
export default function useModal(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);
  const [productData, setProductData] = useState({
    name: '',
    price: 0,
    image: '',
    description: '',
  })

  const openModal = (name, price, image, description)=> {
    setIsOpen(true);
    setProductData({
      name: name,
      price: price,
      image: image,
      description: description
    })
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



