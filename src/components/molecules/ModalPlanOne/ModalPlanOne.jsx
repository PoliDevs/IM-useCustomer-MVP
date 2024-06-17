/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { ReactComponent as XIcon } from "../../../assets/xIcon.svg";
// import { useAmountControls } from "../../../utils/Functions";
// import { useTranslation } from "react-i18next";
// import TextArea from "../../atoms/TextArea/TextArea";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import s from "./ModalPlanOne.module.scss";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
export default function ModalPlanOne({
  productData,
  isOpen,
  closeModal,
  changeStyle,
}) {
  
  const dropdownRef = useRef(null);
  
  const handleOutsideClick = () => {
    closeModal();
  };

  useOnClickOutside(
    document.getElementById("productContainer"),
    handleOutsideClick,
    dropdownRef
  );



  return (
    <div className={`${s.modalBackground} ${isOpen && s.open}`}>
      <article className={`${s.modalContainer} ${isOpen && s.open}`}>
        <div className={s.modal} ref={dropdownRef}>
          <XIcon
            className={s.closeIcon}
            onClick={() => {
              closeModal();
              // setAmount(0);
              // setComment("");
            }}
          />
          <div className={s.productHeader}>
            {/* <span role="img" aria-label="Emoji" className={s.productIcon}>
          {emoji1}
        </span> */}
            {/* <img
          src={getPng(productData.image)}
          style={{ width: "60px", height: "60px" }}
        /> */}
            <div className={s.productInfo}>
              <SubTitle
                className={s.productTitle}
                alignment={"left"}
                text={productData.name}
                bold={true}
              />
              <Paragraph
                className={s.productDescription}
                text={productData.description}
                alignment={"left"}
                scrollable={false}
                maxHeight={2}
              />
              <h3 className={s.productPrice}>{`$ ${productData.price}`}</h3>
            </div>
          </div>
         
        </div>
      </article>
    </div>
  );
}