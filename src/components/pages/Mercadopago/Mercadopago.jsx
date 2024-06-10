import { ReactComponent as MpLogo } from "../../../assets/MpLogo.svg";
import { useTranslation } from "react-i18next";
import MpButton from "../../atoms/MpButton/MpButton";
import OrderInfo from "../../molecules/OrderInfo/OrderInfo";
import s from "./Mercadopago.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getActiveProducts,
  getPaymentMethods,
  getPosValue,
  getSectorValue,
  getStatus,
  postOrder,
  removerCart,
} from "../../../redux/actions";
import { formattedOrder } from "../../../utils/Functions";
import { useNavigate } from "react-router-dom";
import { initMercadoPago } from "@mercadopago/sdk-react";
import LoadingPage from "../../molecules/LoadingPage/LoadingPage";

export default function Mercadopago() {
  // const language = useSelector((state) => state.language);
  const paymentMethods = useSelector((state) => state.paymentMethods);
  const sectorPrice = useSelector((state) => state.sectorPrice);
  const commerce = useSelector((state) => state.commerce);
  const commerceID = commerce.id;
  const productsList = useSelector((state) => state.products);
  const tablePrice = useSelector((state) => state.tablePrice);
  const user = useSelector((state) => state.user);
  const sectorID = useSelector((state) => state.sector);
  // const open = useSelector((state) => state.status);
  const tableID = useSelector((state) => state.table);
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce((count, p) => count + p.cost * p.amount, 0);
  const [price, setPrice] = useState({});
  const [order, setOrder] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [t] = useTranslation(["global"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mercadoPagoMethod = paymentMethods.find(
    (m) => m.type === "mercadopago"
  );
  const PUBLIC_KEY = mercadoPagoMethod ? mercadoPagoMethod.publicKey : "";

  // Inicializa MercadoPago con la publicKey obtenida
  if (PUBLIC_KEY) {
    initMercadoPago(PUBLIC_KEY);
  }

  const createPreference = async () => {
    const methodId = paymentMethods.filter((m) => m.type === "mercadopago")[0]
      .id;
    let mercadoPago = true;
    try {
      const response = await postOrder(
        order,
        methodId,
        mercadoPago,
        commerce.name,
        commerceID
      );
      let mpOrder = {
        order: order,
        methodId: methodId,
        mercadoPago: mercadoPago,
        commerceName: commerce.name,
        commerceId: commerceID,
      };
      localStorage.setItem("mporder", JSON.stringify(mpOrder));
      const { paymentURL } = response.data;
      return paymentURL;
    } catch (error) {
      console.log(error);
    }
  };

  //!

  useEffect(() => {
    dispatch(getPosValue(tableID));
    dispatch(getSectorValue(sectorID));
    // dispatch(getActiveProducts(commerceID));
    dispatch(getStatus(commerceID, setIsloading));
    dispatch(getPaymentMethods(commerceID));
  }, [commerceID, dispatch, sectorID, tableID]);

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
  ]);

  const handleMp = async () => {
    setIsloading(true);
    const methodId = paymentMethods.filter((m) => m.type === "mercadopago")[0]
      .id;
    let mercadoPago = true;
    await postOrder(order, methodId, mercadoPago, commerce.name, commerceID);
    //!
    const url = await createPreference();
    if (url) {
      window.location.href = url;
    }
    dispatch(removerCart());
    //!
  };

  useEffect(() => {
    if (!isLoading && (!localStorage.getItem("cart") || cart.length === 0)) {
      navigate("/home");
    } else if (!isLoading) {
      handleMp();
    }
  }, [navigate, cart, isLoading]);

  return (
    <main className={s.mainContainer}>
      {isLoading ? (
        <LoadingPage text={"Te estamos redirigiendo a Mercado Pago"} />
      ) : (
        <>
          <MpLogo className={s.mpLogo} />
          {/* <div className={s.orderContainer}>
            <OrderInfo
              border={true}
              price={price}
              tablePrice={tablePrice}
              sectorPrice={sectorPrice}
            />
          </div> */}
        </>
      )}
    </main>
    // <main className={s.mainContainer}>
    //   {!isLoading ? (
    //     <>
    //       {" "}
    //       <MpLogo className={s.mpLogo} />
    //       <div className={s.orderContainer}>
    //         <OrderInfo
    //           border={true}
    //           price={price}
    //           tablePrice={tablePrice}
    //           sectorPrice={sectorPrice}
    //         />
    //       </div>
    //       <MpButton
    //         /* path={"/rating"}  */ text={t("mercadoPago.payButton")}
    //         onClick={handleMp}
    //       />{" "}
    //     </>
    //   ) : (
    //     <LoadingPage text={"Te estamos redirigiendo a Mercado Pago"} />
    //   )}
    //   {/*  {preferenceId && <Wallet initialization={createPreference}/>} */}
    // </main>
  );
}
