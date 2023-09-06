import ScrollContainer from "react-indiana-drag-scroll";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import s from "./OrderInfo.module.scss";
import PaymentProduct from "../PaymentProduct/PaymentProduct";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import { useSelector } from "react-redux";

export default function OrderInfo({border}) {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce((count, p) => count + p.price * p.amount, 0);

  return (
    <div className={`${s.orderInfo} ${border && s.border}`}>
      <div className={s.paymentTitle}>
        <SubTitle text={"Burger Store"} bold={true} />
        <SubTitle text={"Mesa 1"} />
      </div>
      <ScrollContainer className={s.productsContainer}>
        {cart.map((p, index) => (
          <PaymentProduct
            key={index}
            amount={p.amount}
            text={p.name}
            price={p.price * p.amount}
          />
        ))}
      </ScrollContainer>
      <Paragraph
        text={`Total a pagar: ${totalPrice}`}
        alignment={"right"}
        bold={true}
      />
    </div>
  );
}
