/* eslint-disable react/prop-types */
import { ReactComponent as MpLogo } from "../../../assets/MpLogo.svg";
import {ReactComponent as CashIcon} from "../../../assets/CashIcon.svg"
import Paragraph from "../Paragraph/Paragraph";
import s from "./PaymentOptionButton.module.scss";

export default function PaymentOptionButton({ text, option, handleChange }) {

  return (
    <label
    className={s.paymentButton}
    htmlFor={`option-${option}`}
    onClick={() => handleChange(option)}
  >
    <div className={s.method}>
      {option === 1 && <MpLogo className={s.logo} />}
      {option === 2 && <CashIcon className={s.logo} />}
      <Paragraph text={text} />
    </div>
    <input
      name="method"
      type="radio"
      id={`option-${option}`}
      className={s.input}
      onChange={() => handleChange(option)}
    />
  </label>
  );
}
