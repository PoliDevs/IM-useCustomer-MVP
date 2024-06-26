import {
  getActiveProducts,
  getCommerce,
  getPaymentMethods,
  getPosValue,
  getSectorValue,
  getStatus,
  hideBanner,
  postOrder,
  removerCart,
} from "../../../redux/actions";
import { formattedOrder, roundToTwo } from "../../../utils/Functions";
import { useDispatch, useSelector } from "react-redux";
import { paymentUrl } from "../../../utils/Constants";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PaymentOptionButton from "../../atoms/PaymentOptionButton/PaymentOptionButton";
import ClosedCommerce from "../../molecules/ClosedCommerce/ClosedCommerce";
import LoadingPage from "../../molecules/LoadingPage/LoadingPage";
import OrderInfo from "../../molecules/OrderInfo/OrderInfo";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import Banner from "../../molecules/Banner/Banner";
import s from "./Payment.module.scss";
import ScrollContainer from "react-indiana-drag-scroll";

export default function Payment() {
  const [method, setMethod] = useState("");
  const [price, setPrice] = useState({});
  const [order, setOrder] = useState({});
  const [mp, setMp] = useState([]);
  const [cash, setCash] = useState([]);
  const paymentMethods = useSelector((state) => state.paymentMethods);
  const sectorPrice = useSelector((state) => state.sectorPrice);
  const commerceID = useSelector((state) => state.commerce.id);
  const productsList = useSelector((state) => state.products);
  const tablePrice = useSelector((state) => state.tablePrice);
  // const language = useSelector((state) => state.language);
  const user = useSelector((state) => state.user);
  const sectorID = useSelector((state) => state.sector);
  const open = useSelector((state) => state.status);
  const tableID = useSelector((state) => state.table);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((count, p) => count + p.cost * p.amount, 0);
  // let mercadopago = null;
  // const [t, i18n] = useTranslation(["global"]);
  const [isLoading, setIsloading] = useState(true);
  const navigate = useNavigate();
  const handleChange = (option) => {
    setMethod(option);
  };

  useEffect(() => {
    setMp(paymentMethods.filter((p) => p.type === "mercadopago"));
    setCash(paymentMethods.filter((p) => p.type === "efectivo"));
  }, [paymentMethods]);

  useEffect(() => {
    !cart.length && navigate("/home");
    localStorage.removeItem("CSMO");
    dispatch(getPosValue(tableID));
    dispatch(getSectorValue(sectorID));
    // dispatch(getActiveProducts(commerceID));
    dispatch(getStatus(commerceID, setIsloading));
    dispatch(getPaymentMethods(commerceID));
  }, [cart.length, commerceID, sectorID, dispatch, tableID, navigate]);

  useEffect(() => {
    dispatch(hideBanner(true));
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
  }, [
    tablePrice,
    sectorPrice,
    productsList,
    cart,
    commerceID,
    sectorID,
    tableID,
    totalPrice,
    user,
    dispatch
  ]);

  const handleCash = () => {
    if (method === 2) {
      const methodId = paymentMethods.filter((m) => m.type === "efectivo")[0]
        .id;
      postOrder(order, methodId);
      localStorage.removeItem("cart");
      localStorage.removeItem("CSMO_ID");
      dispatch(removerCart());
    }
    return;
  };
  return !isLoading ? (
    open ? (
      <main className={s.paymentContainer}>
        <Banner
          ordersButton={false}
          navarrow={false}
          path={"/home"}
          arrow={true}
        />
        <section className={s.paymentContent}>
          <SubTitle text={"Tu pedido"} alignment={"left"} bold={true} />
          {/* <SmallText
            text={t("payment.managePayment")}
            alignment={"left"}
            standarSpacing={true}
          /> */}
          <ScrollContainer horizontal={true} vertical={false}>
            <OrderInfo
              price={price}
              tablePrice={tablePrice}
              sectorPrice={sectorPrice}
            />
          </ScrollContainer>

          <div className={s.totalContainer}>
            <Paragraph text={`Total: `} alignment={"left"} bold={true} />
            <Paragraph
              text={`$ ${roundToTwo(totalPrice)}`}
              alignment={"right"}
              bold={true}
            />
          </div>

          <div style={{ marginTop: "20px" }} className={s.paymentOption}>
            <SubTitle text={"Pago"} bold={true} alignment={"left"} size={2} />

            {cash.length ? (
              <PaymentOptionButton
                text={"Pagar al Mozo"}
                option={2}
                setMethod={setMethod}
                handleChange={handleChange}
              />
            ) : (
              ""
            )}
            {mp.length ? (
              <PaymentOptionButton
                text={"Mercadopago"}
                option={1}
                setMethod={setMethod}
                handleChange={handleChange}
              />
            ) : (
              ""
            )}
          </div>
          {/* <PaymentOptionButton
            text={language.payment_deferred}
            option={3}
            setMethod={setMethod}
            handleChange={handleChange}
          /> */}
          <div className={s.bottomContent}>
            {/* <Paragraph
              text={t("payment.poweredby")}
              bold={true}
              centered={true}
            > */}
            {/* <IMenu className={s.imenuLogo} /> */}
            {/* <img src={iMenuFull} className={s.imemuLogo} width={"70px"} />
            </Paragraph> */}
            <Link
              className={`${s.linkButton} ${method === "" ? s.disabled : ""}`}
              to={paymentUrl[method]}
              onClick={handleCash}
              disabled={method === ""}
            >
              {"Hacer Pedido"}
            </Link>
          </div>
        </section>
      </main>
    ) : (
      <ClosedCommerce fullHeight={true} />
    )
  ) : (
    <LoadingPage text={"Espera mientras preparamos el menu"} />
  );
}
