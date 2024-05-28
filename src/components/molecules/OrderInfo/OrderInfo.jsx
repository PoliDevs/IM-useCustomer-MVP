/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import PaymentProduct from "../PaymentProduct/PaymentProduct";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import s from "./OrderInfo.module.scss";
export default function OrderInfo({ border, price, tablePrice, sectorPrice }) {
  const language = useSelector((state) => state.language);
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const commerceInfo = useSelector((state) => state.commerce);
  const table = useSelector((state) => state.table);
  const totalPrice = cart.reduce((count, p) => count + p.cost * p.amount, 0);
  // const totalPrice = cart.reduce((count, p) => {
  //   const numericPrice = p.price.replace(/[^0-9.-]+/g, ""); // Elimina todos los caracteres que no sean números, puntos o guiones
  //   const priceNumber = parseFloat(numericPrice);
  //   return count + priceNumber * p.amount;
  // }, 0);
  const [t, i18n] = useTranslation(["global"]);
  // const numericPrice = cart.price.replace(/\D/g, '');
  // const priceNumber = parseInt(numericPrice);
  // console.log(priceNumber)
  //!descomentar para mostrar info del producto real
  return (
    <div className={`${s.orderInfo} ${border && s.border}`}>
      {/* <div className={s.paymentTitle}>
        <SubTitle text={commerceInfo.name} bold={true} />
        <SubTitle text={`${t("orderInfo.table")} ${table}`} />
      </div> */}
        <div className={s.productsContainer}>
          {cart.map((p, index) => (
            <PaymentProduct
              key={index}
              amount={p.amount}
              text={p.name}
              price={p.cost * p.amount}
              description={p.description}
              comment={p.comment}
              //price={p.cost * p.amount}
            />
          ))}
        </div>
    </div>
  );
}
