import { dataDecrypt } from "../../../utils/Functions";
import { getCommerce } from "../../../redux/actions";
import { ReactComponent as IMenu } from "../../../assets/ImenuHorizontal.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const language = useSelector((state)=> state.language);
  const dispatch = useDispatch();
  
  const [t, i18n] = useTranslation(["global"]);

  const handleChange = (option)=> {
    setMethod(option)
  }

  // useEffect(() => {
  //   const id = dataDecrypt(localStorage.getItem("Pos")).commerce;
  //   dispatch(getCommerce(id))
  // }, [])
  

  const handleCash = ()=> {
    // if (method === 2) dispatch(postOrder());
     return;
  }

  return (
    <main className={s.paymentContainer}>
      <Banner arrow={true} />
      <section className={s.paymentContent}>
        <SubTitle text={language.payment_title} alignment={"left"}>
          <CashIcon className={s.cashIcon} />
        </SubTitle>
        <SmallText text={language.payment_managePayment} alignment={"left"} />
        <OrderInfo />
        <PaymentOptionButton
          text={language.payment_cash}
          option={2}
          setMethod={setMethod}
          handleChange={handleChange}
        />
        <PaymentOptionButton
          text={"Mercadopago"}
          option={1}
          setMethod={setMethod}
          handleChange={handleChange}
        />
        <div className={s.bottomContent}>
          <Paragraph
            text={language.payment_poweredby}
            bold={true}
            centered={true}
          >
            <IMenu className={s.imenuLogo} />
          </Paragraph>
          <LinkButton
            path={paymentUrl[method]}
            text={language.payment_continue}
            onClick={handleCash}
          />
        </div>
      </section>
    </main>
  );
}
