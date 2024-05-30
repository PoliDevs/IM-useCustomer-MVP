import SmallText from "../../atoms/SmallText/SmallText";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import borrar from "../../../assets/delete.svg";
import { useDispatch } from "react-redux";
import s from "./PaymentProduct.module.scss";
import { removeProductFromCart } from "../../../redux/actions";
export default function PaymentProduct({
  amount,
  text,
  price,
  description,
  comment,
  id
}) {
  const dispatch = useDispatch()

  const handleDeleteProduct = () => {
    dispatch(removeProductFromCart(id))
  }

  return (
    <>
      <div className={s.paymentProduct}>
        <div className={s.productContainer}>
          {/* <span className={s.titleAmount}>{amount}</span> */}
          <SubTitle
            text={`${amount} ${text}`}
            alignment={"left"}
            size={2}
            bold={true}
          />
          <SmallText text={description} alignment={"left"} smaller={true} />
          {comment && (
            <SmallText
              text={`Obs: ${comment}`}
              alignment={"left"}
              smaller={true}
            />
          )}
        </div>
        <div className={s.price}>
          <SmallText text={`$${price}`} alignment={"right"} />
          <button className={s.deleteButton} onClick={handleDeleteProduct}>
            <img src={borrar} alt="borrar" width={20} height={20} />
          </button>
        </div>
      </div>
      <a className={s.line} />
    </>
  );
}
