import { useState } from "react";
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

