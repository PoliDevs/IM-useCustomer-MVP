import { useState } from "react";
export default function useModal(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const openModal = (name, price)=> {
    setIsOpen(true);
    setName(name);
    setPrice(price)
    }; 

  const closeModal = ()=> setIsOpen(false);

  return {isOpen, openModal, closeModal, name, price}
}

