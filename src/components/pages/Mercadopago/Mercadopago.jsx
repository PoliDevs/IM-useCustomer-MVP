import { ReactComponent as MpLogo } from "../../../assets/MpLogo.svg";
import { useTranslation } from "react-i18next";
import MpButton from "../../atoms/MpButton/MpButton";
import OrderInfo from "../../molecules/OrderInfo/OrderInfo";
import s from "./Mercadopago.module.scss";
import { useSelector } from "react-redux";
export default function Mercadopago() {
  const language = useSelector((state)=> state.language);

  const [t, i18n] = useTranslation(["global"]);

  return (
    <main className={s.mainContainer}>
      <MpLogo className={s.mpLogo} />
      <OrderInfo border={true} />
      <MpButton path={"/rating"} text={language.mercadoPago_payButton} />
    </main>
  );
}
