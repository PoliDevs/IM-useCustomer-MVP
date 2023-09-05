import { ReactComponent as MpLogo } from "../../../assets/MpLogo.svg";
import { ReactComponent as CashLogo } from "../../../assets/CashLogo.svg";
import Paragraph from "../Paragraph/Paragraph";
import s from "./PaymentOptionButton.module.scss";

export default function PaymentOptionButton({text}) {

  return (
    <div className={s.paymentButton}>
      <div className={s.method}>
      {text === "Mercadopago" && <MpLogo className={s.logo} />}
      {text === "Efectivo" && <CashLogo className={s.logo} />}
      <Paragraph text={text} />
      </div>
      <input name="method" type="radio" className={s.input}/>
    </div>
  );
}
