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
//!
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import LoadingPage from "../../molecules/LoadingPage/LoadingPage";

export default function Mercadopago() {
  const language = useSelector((state) => state.language);
  const paymentMethods = useSelector((state) => state.paymentMethods);
  const sectorPrice = useSelector((state) => state.sectorPrice);
  const commerce = useSelector((state) => state.commerce);
  const commerceID = commerce.id;
  const productsList = useSelector((state) => state.products);
  const tablePrice = useSelector((state) => state.tablePrice);
  const user = useSelector((state) => state.user);
  const sectorID = useSelector((state) => state.sector);
  const open = useSelector((state) => state.status);
  const tableID = useSelector((state) => state.table);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((count, p) => count + p.price * p.amount, 0);
  const [price, setPrice] = useState({});
  const [order, setOrder] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [t, i18n] = useTranslation(["global"]);
  //!
  //const PUBLIC_KEY = import.meta.env.PUBLIC_KEY;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
  //console.log(PUBLIC_KEY)

  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago(PUBLIC_KEY);

  const createPreference = async () => {
    const methodId = paymentMethods.filter((m) => m.type === "mercadopago")[0]
      .id;
    let mercadoPago = true;
    try {
      const response = await postOrder(
        order,
        methodId,
        mercadoPago,
        commerce.name
      );
      let mpOrder = {
        order: order,
        methodId: methodId,
        mercadoPago: mercadoPago,
        commerceName: commerce.name
      }
      localStorage.setItem('mporder', JSON.stringify(mpOrder))
/*       const { preferenceId } = response.data;
      console.log(preferenceId)
      return preferenceId;  */

      const { paymentURL } = response.data;
      console.log(paymentURL);
      return paymentURL;
    } catch (error) {
      console.log(error);
    }
  };

  //!

  useEffect(() => {
    dispatch(getPosValue(tableID));
    dispatch(getSectorValue(sectorID));
    dispatch(getActiveProducts(commerceID));
    dispatch(getStatus(commerceID, setIsloading));
    dispatch(getPaymentMethods(commerceID));
  }, []);

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

  const handleMp = async () => {
    setIsloading(true)
    const methodId = paymentMethods.filter((m) => m.type === "mercadopago")[0]
      .id;
    let mercadoPago = true;
    await postOrder(order, methodId, mercadoPago, commerce.name);
    dispatch(removerCart());
    //!
    const url = await createPreference();
    console.log(url,"id 105")
    if (url) {
      window.location.href = url;
    }
    //!
  }
  

  return (
    <main className={s.mainContainer}>
      {!isLoading ? (
        <>
          {" "}
          <MpLogo className={s.mpLogo} />
          <div className={s.orderContainer}>
            <OrderInfo
              border={true}
              price={price}
              tablePrice={tablePrice}
              sectorPrice={sectorPrice}
            />
          </div>
          <MpButton
            /* path={"/rating"}  */ text={t("mercadoPago.payButton")}
            onClick={handleMp}
          />{" "}
        </>
      ) : (
        <LoadingPage text={t("loader.title")} />
      )}
      {/*  {preferenceId && <Wallet initialization={createPreference}/>} */}
    </main>
  );
};
