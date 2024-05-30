/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { ReactComponent as XIcon } from "../../../assets/xIcon.svg";
import { useAmountControls } from "../../../utils/Functions";
import { useTranslation } from "react-i18next";
import TextArea from "../../atoms/TextArea/TextArea";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import s from "./Modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { hideBanner, isAvailable } from "../../../redux/actions";
// import { emojiPng } from "../../../utils/Constants";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
export default function Modal({
  productData,
  isOpen,
  closeModal,
  changeStyle,
}) {
  const cart = useSelector((state) => state.cart);
  const allproducts = useSelector((state) => state.allProducts);
  const alladitionals = useSelector((state) => state.allAditionals);
  const products = useSelector((state) => state.products);
  const language = useSelector((state) => state.language);
  const available = useSelector((state) => state.productAvailable);
  const [comment, setComment] = useState("");
  const [amount, setAmount] = useState(1);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const { addToCart } = useAmountControls();

  const [t, i18n] = useTranslation(["global"]);
  //  let emoji1 = "";
  //  if (productData.image) {
  //    const unicodeArray = productData.image.split(" ");
  //    const formattedCodes = unicodeArray.map((code) => code.replace("U+", ""));
  //    const emoji = String.fromCodePoint(
  //      parseInt(formattedCodes[0], 16),
  //      parseInt(formattedCodes[1], 16)
  //    );
  //    emoji1 = emoji;
  //  }
  const handleOutsideClick = () => {
    closeModal();
  };

  useOnClickOutside(
    document.getElementById("productContainer"),
    handleOutsideClick,
    dropdownRef
  );

  //? useEffect para consultar si el producto abierto esta activo.
  useEffect(() => {
    productData.name && dispatch(isAvailable(productData.name, setLoading));
  }, [allproducts, alladitionals, products, dispatch, productData.name]);

  // const getPng = (text) => {
  //   if (text) {
  //     let png = emojiPng.find((e) => e.name === text);
  //     return png.src;
  //   }
  // };

  return (
    <div className={`${s.modalBackground} ${isOpen && s.open}`}>
      <article className={`${s.modalContainer} ${isOpen && s.open}`}>
        <div className={s.modal} ref={dropdownRef}>
          <XIcon
            className={s.closeIcon}
            onClick={() => {
              closeModal();
              setAmount(0);
              setComment("");
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
            </div>
          </div>
          <div>
            {loading === false && available === false && (
              <p className={`${s.notAvailableProduct} ${s.visible}`}>
                {t("productModal.available")}
              </p>
            )}
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
              disabled={amount > 1}
            />
          </div>
          <div className={s.amount}>
            <button
              className={s.amountButton}
              onClick={() => {
                if (comment.length === 0 || amount === 1) {
                  setAmount((prevAmount) => prevAmount - 1);
                }
              }}
              disabled={(comment.length > 0 && amount > 1) || amount <= 1}
            >
              -
            </button>
            <p className={s.cant}>{amount}</p>
            <button
              className={s.amountButton}
              onClick={() => {
                if (comment.length === 0) {
                  setAmount((prevAmount) => prevAmount + 1);
                }
              }}
              disabled={comment.length > 0}
            >
              +
            </button>
          </div>
          <div className={s.buttonContainer}>
            <h3 className={s.productPrice}>{`$ ${
              productData.cost * amount
            }`}</h3>
            <button
              className={`${s.addButton} ${!available && s.unavailable}`}
              onClick={() => {
                available &&
                  addToCart(
                    productData.image,
                    //productData.photo
                    productData.name,
                    productData.description,
                    productData.price,
                    productData.cost,
                    amount,
                    comment,
                    productData.id,
                    productData.promotion,
                    productData.discount,
                    productData.surcharge,
                    productData.product,
                    productData.aditional,
                    productData.menuTypeId,
                    productData.categoryId,
                    productData.unitTypeId,
                    productData.productTypeId,
                    productData.supplierId,
                    productData.allergenType,
                    productData.careful
                  );
                available && changeStyle();
                setAmount(1);
                setComment("");
                closeModal();
              }}
            >
              {t("productModal.addButton")}
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
