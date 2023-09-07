/* eslint-disable react/prop-types */
import { useState } from "react";
import { ReactComponent as XIcon } from "../../../assets/xIcon.svg";
import { useAmountControls} from "../../../utils/Functions";
import { useTranslation } from "react-i18next";
import TextArea from "../../atoms/TextArea/TextArea";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import s from "./Modal.module.scss";

export default function Modal({ productData,  isOpen, closeModal, changeStyle}) {
  const [comment, setComment] = useState("");
  const [amount, setAmount] = useState(0);
  const {addToCart} = useAmountControls();

  const [t, i18n] = useTranslation(["global"]);

  return (
    <article className={`${s.modalContainer} ${isOpen && s.open}`}>
      <div className={s.modal}>
        <XIcon
          className={s.closeIcon}
          onClick={() => {
            closeModal();
            setAmount(0);
            setComment("");
          }}
        />
        <div className={s.productHeader}>
          <img
            className={s.productIcon}
            src={productData.image}
            alt={`${productData.name} icon`}
          />
          <div className={s.productInfo}>
            <SubTitle
              className={s.productTitle}
              alignment={"left"}
              text={productData.name}
            />
            <Paragraph
              className={s.productDescription}
              text={productData.description}
              alignment={"left"}
              scrollable={true}
            />
            <h3 className={s.productPrice}>{`$ ${productData.price}`}</h3>
          </div>
        </div>
        <div>
          <div className={s.textAreaHeader}>
            <label className={s.label} htmlFor="comment">
              {t("productModal.commentLabel")}
            </label>
            <p className={s.textLimit}>{`${comment.length}/140`}</p>
          </div>
          <TextArea
            id="comment"
            comment={comment}
            setComment={setComment}
            maxLength={140}
            placeholder={t("productModal.commentPlaceholder")}
          />
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
        <button
          className={s.addButton}
          onClick={() => {
            addToCart(
              productData.image,
              productData.name,
              productData.description,
              productData.price,
              amount,
              comment
            );
            changeStyle();
          }}
        >
          {t("productModal.addButton")}
        </button>
      </div>
    </article>
  );
}
