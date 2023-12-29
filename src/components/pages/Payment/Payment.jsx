import { getActiveProducts, getCommerce, getPaymentMethods, getPosValue, getSectorValue, getStatus, postOrder, removerCart } from "../../../redux/actions";
import { ReactComponent as IMenu } from "../../../assets/ImenuHorizontal.svg";
import { dataDecrypt, formattedOrder } from "../../../utils/Functions";
import { ReactComponent as CashIcon } from "../../../assets/CashIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { paymentUrl } from "../../../utils/Constants";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import PaymentOptionButton from "../../atoms/PaymentOptionButton/PaymentOptionButton";
import ClosedCommerce from "../../molecules/ClosedCommerce/ClosedCommerce";
import LoadingPage from "../../molecules/LoadingPage/LoadingPage";
import OrderInfo from "../../molecules/OrderInfo/OrderInfo";
import iMenuFull from "../../../assets/logo-imenu-full.png";
import SmallText from "../../atoms/SmallText/SmallText";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import Banner from "../../molecules/Banner/Banner";
import s from "./Payment.module.scss";

export default function Payment() {
  const [method, setMethod] = useState('');
  const [price, setPrice] = useState({});
  const [order, setOrder] = useState({});
  const [mp, setMp] = useState([]);
  const [cash, setCash] = useState([]);
  const paymentMethods = useSelector((state)=> state.paymentMethods);
  const sectorPrice = useSelector((state)=> state.sectorPrice);
  const commerceID = useSelector((state)=> state.commerce.id);
  const productsList = useSelector((state)=> state.products);
  const tablePrice = useSelector((state)=> state.tablePrice);
  const language = useSelector((state)=> state.language);
  const user = useSelector((state) => state.user);
  const sectorID = useSelector((state) => state.sector);
  const open = useSelector((state) => state.status);
  const tableID = useSelector((state)=> state.table);
  const cart = useSelector((state)=> state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((count, p) => count + p.price * p.amount, 0);
  // let mercadopago = null;
  const [t, i18n] = useTranslation(["global"]);
  const [isLoading, setIsloading] = useState(true);
  const navigate = useNavigate();
  const handleChange = (option)=> {
    setMethod(option)
  }

  useEffect(() => {
    setMp(paymentMethods.filter((p)=> p.type === "mercadopago"));
    setCash(paymentMethods.filter((p)=> p.type === "efectivo"));
  }, [paymentMethods])
  


  useEffect(() => {
    !cart.length && navigate('/home');
      localStorage.removeItem("CSMO");
      dispatch(getPosValue(tableID));
      dispatch(getSectorValue(sectorID));
      dispatch(getActiveProducts(commerceID))
      dispatch(getStatus(commerceID, setIsloading));
      dispatch(getPaymentMethods(commerceID));
  }, [])

  useEffect(() => {
    formattedOrder(
      user,
      cart,
      productsList,
      sectorID,
      tableID,
      commerceID,
      tablePrice,
      sectorPrice,
      totalPrice,
      setPrice,
      setOrder
    );
  }, [tablePrice, sectorPrice, productsList]);
  
  const handleCash = ()=> {
    if (method === 2) {
      const methodId = paymentMethods.filter((m)=> m.type === "efectivo")[0].id
      postOrder(order, methodId);
      localStorage.removeItem("cart");
      dispatch(removerCart())
    }
     return;
  }
  return !isLoading ? (
    open ? (
      <main className={s.paymentContainer}>
        <Banner ordersButton={false} navarrow={false} path={"/home"} arrow={true} />
        <section className={s.paymentContent}>
          <SubTitle text={t("payment.title")} alignment={"left"} bold={true}>
            <CashIcon className={s.cashIcon} />
          </SubTitle>
          <SmallText
            text={t("payment.managePayment")}
            alignment={"left"}
            standarSpacing={true}
          />
          <OrderInfo
            price={price}
            tablePrice={tablePrice}
            sectorPrice={sectorPrice}
          />
          {cash.length ? <PaymentOptionButton
            text={t("payment.cash")}
            option={2}
            setMethod={setMethod}
            handleChange={handleChange}
          /> : ""}
          {mp.length? <PaymentOptionButton
            text={"Mercadopago"}
            option={1}
            setMethod={setMethod}
            handleChange={handleChange}
          /> : ""}
          {/* <PaymentOptionButton
            text={language.payment_deferred}
            option={3}
            setMethod={setMethod}
            handleChange={handleChange}
          /> */}
          <div className={s.bottomContent}>
            <Paragraph
              text={t("payment.poweredby")}
              bold={true}
              centered={true}
            >
              {/* <IMenu className={s.imenuLogo} /> */}
              <img src={iMenuFull} className={s.imemuLogo} width={"70px"} />
            </Paragraph>
            <Link
              className={s.linkButton}
              to={paymentUrl[method]}
              onClick={handleCash}
            >
              {t("payment.continue")}
            </Link>
          </div>
        </section>
      </main>
    ) : (
      <ClosedCommerce fullHeight={true} />
    )
  ) : (
    <LoadingPage />
  ); 
}
