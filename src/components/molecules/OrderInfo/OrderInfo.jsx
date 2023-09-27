import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import PaymentProduct from "../PaymentProduct/PaymentProduct";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import s from "./OrderInfo.module.scss";

export default function OrderInfo({border}) {
  const language = useSelector((state)=> state.language);
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
        <SubTitle text={`${language.orderInfo_table} ${table}`} />
      </div>
      <div className={s.productsContainer}>
        {cart.map((p, index) => (
          <PaymentProduct
            key={index}
            amount={p.amount}
            text={p.name}
            price={p.price * p.amount}
            //price={p.cost * p.amount}
          />
        ))}
      </div>
      <Paragraph
        text={`${language.orderInfo_paymentTotal} $${totalPrice}`}
        alignment={"right"}
        bold={true}
      />
    </div>
  );
}
