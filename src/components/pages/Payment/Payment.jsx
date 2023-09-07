
import { ReactComponent as IMenu } from "../../../assets/ImenuHorizontal.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as CashIcon } from "../../../assets/CashIcon.svg";
import { paymentUrl } from "../../../utils/Constants";
import { useTranslation } from "react-i18next";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import Banner from "../../molecules/Banner/Banner";
import SmallText from "../../atoms/SmallText/SmallText";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import PaymentOptionButton from "../../atoms/PaymentOptionButton/PaymentOptionButton";
import OrderInfo from "../../molecules/OrderInfo/OrderInfo";
import s from "./Payment.module.scss";

export default function Payment() {
  const [method, setMethod] = useState('');
  const dispatch = useDispatch();
  
  const [t, i18n] = useTranslation(["global"]);

  const handleChange = (option)=> {
    setMethod(option)
  }

  const handleCash = ()=> {
    // if (method === 2) dispatch(postOrder());
     return;
  }

  return (
    <main className={s.paymentContainer}>
      <Banner />
      <section className={s.paymentContent}>
        <SubTitle text={t("payment.title")} alignment={"left"}>
          <CashIcon className={s.cashIcon} />
        </SubTitle>
        <SmallText text={t("payment.managePayment")} alignment={"left"} />
        {/* <div className={s.orderInfo}>
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
        </div> */}
        <OrderInfo />
        <PaymentOptionButton
          text={"Mercadopago"}
          option={1}
          setMethod={setMethod}
          handleChange={handleChange}
        />
        <PaymentOptionButton
          text={t("payment.cash")}
          option={2}
          setMethod={setMethod}
          handleChange={handleChange}
        />
        <div className={s.bottomContent}>
          <Paragraph text={t("payment.poweredby")} bold={true} centered={true}>
            <IMenu className={s.imenuLogo} />
          </Paragraph>
          <LinkButton path={paymentUrl[method]} text={t("payment.continue")} onClick={handleCash} />
        </div>
      </section>
    </main>
  );
}
