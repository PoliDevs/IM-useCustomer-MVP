import { useSelector } from "react-redux";
import { ReactComponent as IMenu } from "../../../assets/ImenuHorizontal.svg";
import { ReactComponent as CashIcon } from "../../../assets/CashIcon.svg";
import ScrollContainer from "react-indiana-drag-scroll";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import Banner from "../../molecules/Banner/Banner";
import SmallText from "../../atoms/SmallText/SmallText";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import PaymentProduct from "../../molecules/PaymentProduct/PaymentProduct";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import PaymentOptionButton from "../../atoms/PaymentOptionButton/PaymentOptionButton";
import s from "./Payment.module.scss";

export default function Payment() {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce((count, p) => count + p.price * p.amount, 0);

  return (
    <main className={s.paymentContainer}>
      <Banner />
      <section className={s.paymentContent}>
        <SubTitle text={"Pagar"} alignment={"left"}>
          <CashIcon className={s.cashIcon} />
        </SubTitle>
        <SmallText text={"Gestione su pago desde aqui"} alignment={"left"} />
        <div className={s.orderInfo}>
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
          <Paragraph text={`Total a pagar: ${totalPrice}`} alignment={"right"} bold={true} />
        </div>
        <PaymentOptionButton text={"Mercadopago"} />
        <PaymentOptionButton text={"Efectivo"} />
        <div className={s.bottomContent}>
          <Paragraph text={"impulsado por "} bold={true} centered={true}>
            <IMenu className={s.imenuLogo} />
          </Paragraph>
          <LinkButton path={"/rating"} text={"Continuar"} />
        </div>
      </section>
    </main>
  );
}
