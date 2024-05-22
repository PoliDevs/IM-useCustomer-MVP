import SmallText from "../../atoms/SmallText/SmallText";
import s from "./PaymentProduct.module.scss";
export default function PaymentProduct({ amount, text, price }) {
  
  return (
    <>
      <div className={s.paymentProduct}>
        <SmallText text={`${amount} ${text}`} />
        <SmallText text={`$ ${price}`} />
      </div>
      <hr className={s.line} />
    </>
  );
}
