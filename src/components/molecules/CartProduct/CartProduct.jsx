/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ReactComponent as AddLogo } from "../../../assets/plus.svg";
import { ReactComponent as RemoveLogo } from "../../../assets/minus.svg";
import { ReactComponent as TrashLogo } from "../../../assets/TrashIcon.svg";
import { useAmountControls } from "../../../utils/Functions";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import SmallText from "../../atoms/SmallText/SmallText";
import s from "./CartProduct.module.scss";
import { emojiPng } from "../../../utils/Constants";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function CartProduct({image, name, description, comment, price, amount}) {
  const { addToCart, removeFromCart } = useAmountControls();
  const language = useSelector((state)=> state.language);
  const [t, i18n] = useTranslation(["global"]);
  
  let emoji1 = "";
  if (image) {
    const unicodeArray = image.split(" ");

    // const unicodeCodes = ["U+D83C", "U+DF70"];
    // Convierte los códigos Unicode al formato correcto (sin el "U+")
    const formattedCodes = unicodeArray.map((code) => code.replace("U+", ""));

    // Obtén el emoji a partir de los códigos Unicode formateados
    const emoji = String.fromCodePoint(
      parseInt(formattedCodes[0], 16),
      parseInt(formattedCodes[1], 16)
    );
    emoji1 = emoji;
  }

    const getPng = (text) => {
      if (text) {
        let png = emojiPng.find((e) => e.name === text);
        return png.src;
      }
    };

  return (
    <div className={s.cartProduct}>
      {/* <img className={s.icon} src={image} alt={"product icon"} /> */}
      {/* <span role="img" aria-label="Emoji" className={s.icon}>
        {emoji1}
      </span> */}
      <img src={getPng(image)} style={{ width: "60px", height: "60px" }} />
      <div className={s.info}>
        <Paragraph alignment={"left"} text={name} bold={true} />
        <SmallText alignment={"left"} text={description} />
        {comment && (
          <SmallText
            alignment={"left"}
            text={`*${t("productModal.commentLabel")}:`}
            bold={true}
          />
        )}
        <Paragraph alignment={"left"} text={comment} />
        <Paragraph
          alignment={"left"}
          text={`$ ${price * amount}`}
          bold={true}
        />
        <div className={s.amountControl}>
          {amount !== 1 ? (
            <RemoveLogo
              className={s.amountIcon}
              onClick={() => {
                removeFromCart(name);
              }}
            />
          ) : (
            <TrashLogo
              className={s.amountIcon}
              onClick={() => {
                removeFromCart(name);
              }}
            />
          )}
          <div className={s.amount}>
            <Paragraph text={amount} bold={true} />
          </div>
          <AddLogo
            className={s.amountIcon}
            onClick={() => {
              addToCart(image, name, description, price, 1, comment);
            }}
          />
        </div>
      </div>
    </div>
  );
}
