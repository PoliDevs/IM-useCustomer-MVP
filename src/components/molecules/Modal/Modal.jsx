/* eslint-disable react/prop-types */
import { useState } from "react";
import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import TextArea from "../../atoms/TextArea/TextArea";
import s from "./Modal.module.scss";

export default function Modal({ image, name, description, price, addToCart, removeFromCart, isOpen, closeModal }) {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value)
  }


  return (
    <article className={`${s.modalContainer} ${isOpen && s.open}`}>
      <div className={s.modal}>
        <img src={image} alt={`${name} icon`} />
        <HugeTitle text={name} />
        <Paragraph text={description} />
        <SubTitle text={`$ ${price}`} />
        <label htmlFor="comment">Comentarios</label>
        <TextArea id="comment" text={comment} onChange={handleChange} />
        <div>
          <button onClick={()=>addToCart(name, price)}>+</button>
          <Paragraph text={1} />
          <button onClick={()=> removeFromCart(name)}>-</button>
        </div>
        <button onClick={closeModal}>Agregar</button>
      </div>
    </article>
  );
}
