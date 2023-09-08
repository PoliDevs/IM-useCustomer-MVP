import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ScrollContainer from "react-indiana-drag-scroll";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import PaymentProduct from "../PaymentProduct/PaymentProduct";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import s from "./OrderInfo.module.scss";

export default function OrderInfo({border}) {
  const cart = useSelector((state) => state.cart);
  const commerceInfo = useSelector((state) => state.commerce);
  const table = useSelector((state)=> state.table);
  const totalPrice = cart.reduce((count, p) => count + p.price * p.amount, 0);
  //const totalPrice = cart.reduce((count, p) => count + p.cost * p.amount, 0);

  const [t, i18n] = useTranslation(["global"]);

  //!descomentar para mostrar info del producto real
  return (
    <div className={`${s.orderInfo} ${border && s.border}`}>
      <div className={s.paymentTitle}>
        <SubTitle text={commerceInfo.name} bold={true} />
        <SubTitle text={`${t("orderInfo.table")} ${table}`} />
      </div>
      <ScrollContainer className={s.productsContainer}>
        {cart.map((p, index) => (
          <PaymentProduct
            key={index}
            amount={p.amount}
            text={p.name}
            price={p.price * p.amount}
            //price={p.cost * p.amount}
          />
        ))}
      </ScrollContainer>
      <Paragraph
        text={`${t("orderInfo.paymentTotal")} ${totalPrice}`}
        alignment={"right"}
        bold={true}
      />
    </div>
  );
}
