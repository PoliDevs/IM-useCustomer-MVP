/* eslint-disable react/prop-types */
import { useState } from "react";
import { ReactComponent as XIcon } from "../../../assets/xIcon.svg";
import TextArea from "../../atoms/TextArea/TextArea";
import s from "./Modal.module.scss";

export default function Modal({ productData, addToCart, isOpen, closeModal }) {
  const [comment, setComment] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <article className={`${s.modalContainer} ${isOpen && s.open}`}>
      <div className={s.modal}>
        <XIcon className={s.closeIcon} onClick={()=>{
          closeModal();
          setAmount(0);
          setComment('')
        }}/>
        <div className={s.productHeader}>
          <img
            className={s.productIcon}
            src={productData.image}
            alt={`${productData.name} icon`}
          />
          <div className={s.productInfo}>
            <h1 className={s.productTitle}>{productData.name}</h1>
            <p className={s.productDescription}>{productData.description}</p>
            <h3 className={s.productPrice}>{`$ ${productData.price}`}</h3>
          </div>
        </div>
        <div>
          <div className={s.textAreaHeader}>
            <label className={s.label} htmlFor="comment">
              Comentarios
            </label>
            <p className={s.textLimit}>{`${comment.length}/140`}</p>
          </div>
          <TextArea id="comment" comment={comment} setComment={setComment} />
        </div>
        <div className={s.amount}>
          <button
            className={s.amountButton}
            onClick={() => setAmount((prevAmount) => prevAmount - 1)}
            disabled={amount <= 0}
          >
            -
          </button>
          <p className={s.cant}>{amount}</p>
          <button
            className={s.amountButton}
            onClick={() => setAmount((prevAmount) => prevAmount + 1)}
          >
            +
          </button>
        </div>
        <button className={s.addButton} onClick={()=> addToCart(productData.name, productData.price, amount, comment) }>
          Agregar
        </button>
      </div>
    </article>
  );
}
