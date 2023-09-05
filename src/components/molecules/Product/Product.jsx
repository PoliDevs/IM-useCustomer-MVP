/* eslint-disable react/prop-types */
import Paragraph from "../../atoms/Paragraph/Paragraph";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import SmallText from "../../atoms/SmallText/SmallText";
import s from "./Product.module.scss";
export default function Product({
  name,
  description,
  price,
  bg,
  openModal
}) {

  return (
    <div
      className={s.productContainer}
      onClick={() => openModal(name, price, bg, description)}
    >
      <img className={s.productIcon} src={bg} />
      <div className={s.infoContainer}>
        <Paragraph alignment={"left"} text={name} bold={true} />
        <SmallText alignment={"left"} text={description} smaller={true} />
        <Paragraph alignment={"left"} text={`$ ${price}`} bold={true} />
      </div>
    </div>
  );
}
