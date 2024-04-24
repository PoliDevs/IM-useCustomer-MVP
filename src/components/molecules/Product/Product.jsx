/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import SmallText from "../../atoms/SmallText/SmallText";
import s from "./Product.module.scss";
import {
  getActiveAditionals,
  getActiveMenus,
  getActiveProducts,
  isAvailable,
} from "../../../redux/actions";
// import { useEffect, useState } from "react";
// import { emojiPng } from "../../../utils/Constants";

export default function Product({
  name,
  description,
  price,
  bg,
  openModal,
  id,
  promotion,
  discount,
  surcharge,
  product,
  aditional,
  menuTypeId,
  categoryId,
  unitTypeId,
  productTypeId,
  supplierId,
  allergenType,
  careful,
}) {
  const commerceId = useSelector((state) => state.commerce.id);
  const dispatch = useDispatch();

  // let emoji1 = "";
  // if (bg) {
  //   const unicodeArray = bg.split(" ");

  //   // const unicodeCodes = ["U+D83C", "U+DF70"];
  //   // Convierte los códigos Unicode al formato correcto (sin el "U+")
  //   const formattedCodes = unicodeArray.map((code) => code.replace("U+", ""));

  //   // Obtén el emoji a partir de los códigos Unicode formateados
  //   const emoji = String.fromCodePoint(
  //     parseInt(formattedCodes[0], 16),
  //     parseInt(formattedCodes[1], 16)
  //   );
  //   emoji1 = emoji;
  // }

  // const getPng = (text) => {
  //   if (text) {
  //     let png = emojiPng.find((e) => e.name === text);
  //     return png.src;
  //   }
  // };

  return (
    <div
      className={s.productContainer}
      onClick={() => {
        openModal(
          name,
          price,
          bg,
          description,
          id,
          promotion,
          discount,
          surcharge,
          product,
          aditional,
          menuTypeId,
          categoryId,
          unitTypeId,
          productTypeId,
          supplierId,
          allergenType,
          careful
        );
        dispatch(getActiveMenus(commerceId));
        dispatch(getActiveProducts(commerceId));
        dispatch(getActiveAditionals(commerceId));
        // setIsClicked(true)
      }}
    >
      {/* <img src={getPng(bg)} style={{width: "60px", height:"60px"}}/> */}
      {/* <div style={{backgroundImage: getPng(bg)}} className={s.productIcon}></div> */}
      {/* <span role="img" aria-label="Emoji" className={s.productIcon}>
        {emoji1}
      </span> */}
      <div className={s.infoContainer}>
        <div className={s.headerInfo}>
          <Paragraph
            alignment={"left"}
            text={name}
            bold={true}
            noMargin={true}
          />
          <SmallText
            alignment={"left"}
            text={description}
            smaller={true}
            noMargin={true}
          />
        </div>
        {/* <Paragraph alignment={"left"} text={`$ ${cost}`} bold={true} /> */}
        <Paragraph alignment={"left"} text={`$ ${price}`} bold={true} />
      </div>
    </div>
  );
}
