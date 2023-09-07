/* eslint-disable react/prop-types */
import Paragraph from "../../atoms/Paragraph/Paragraph";
import SmallText from "../../atoms/SmallText/SmallText";
import s from "./Product.module.scss";
export default function Product({
  name,
  description,
  price,
  bg,
  openModal
}) {

//!descomentar para mostrar info del producto real
//   export default function Product({
//   name,
//   description,
//   cost,
//   photo,
//   openModal
// }) {

  return (
    <div
      className={s.productContainer}
      onClick={() => openModal(name, price, bg, description)}
      //!descomentar para mostrar info del producto real
      //onClick={()=> openModal(name, cost, photo, description)}
    >
      <img className={s.productIcon} src={bg} />
      <div className={s.infoContainer}>
        <Paragraph alignment={"left"} text={name} bold={true} />
        <SmallText alignment={"left"} text={description} smaller={true} />
        {/* <Paragraph alignment={"left"} text={`$ ${cost}`} bold={true} /> */}
        <Paragraph alignment={"left"} text={`$ ${price}`} bold={true} />
      </div>
    </div>
  );
}
