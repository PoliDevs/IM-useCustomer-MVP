import { ReactComponent as MpLogo } from "../../../assets/MpLogo.svg";
import Paragraph from "../Paragraph/Paragraph";
import s from "./PaymentOptionButton.module.scss";

export default function PaymentOptionButton({ text, option, handleChange }) {

  return (
    <div className={s.paymentButton}>
      <div className={s.method}>
        {option === 1 && <MpLogo className={s.logo} />}
        <Paragraph text={text} />
      </div>
      <input
        name="method"
        type="radio"
        className={s.input}
        onChange={()=> handleChange(option)}
      />
    </div>
  );
}
