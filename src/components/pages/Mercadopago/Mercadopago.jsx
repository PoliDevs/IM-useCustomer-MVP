import { ReactComponent as MpLogo } from "../../../assets/MpLogo.svg";
import { useTranslation } from "react-i18next";
import MpButton from "../../atoms/MpButton/MpButton";
import OrderInfo from "../../molecules/OrderInfo/OrderInfo";
import s from "./Mercadopago.module.scss";
export default function Mercadopago() {

  const [t, i18n] = useTranslation(["global"]);

  return (
    <main className={s.mainContainer}>
      <MpLogo className={s.mpLogo} />
      <OrderInfo border={true} />
      <MpButton text={t("mercadoPago.payButton")}/>
    </main>
  );
}
