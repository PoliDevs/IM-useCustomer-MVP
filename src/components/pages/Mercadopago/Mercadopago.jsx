import { ReactComponent as MpLogo } from "../../../assets/MpLogo.svg";
import MpButton from "../../atoms/MpButton/MpButton";
import OrderInfo from "../../molecules/OrderInfo/OrderInfo";
import s from "./Mercadopago.module.scss";
export default function Mercadopago() {
  return (
    <main className={s.mainContainer}>
      <MpLogo className={s.mpLogo} />
      <OrderInfo border={true} />
      <MpButton/>
    </main>
  );
}
