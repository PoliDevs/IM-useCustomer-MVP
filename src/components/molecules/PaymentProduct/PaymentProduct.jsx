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
  id,
}) {
  const dispatch = useDispatch();
  const handleDeleteProduct = () => {
    dispatch(removeProductFromCart(id));
    // removeFromCart(text);
  };

  return (
    <>
      <div className={s.paymentProduct}>
        <div className={s.amountContainer}>
          <span className={s.titleAmount}>{amount}</span>
          <div className={s.productContainer}>
            <SubTitle
              text={`${text}`}
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
        </div>
        <div className={s.price}>
          <SmallText text={`$${price}`} alignment={"right"} />
          <button className={s.deleteButton} onClick={handleDeleteProduct}>
            <img src={borrar} alt="borrar" width={20} height={20} />
          </button>
        </div>
      </div>
      <hr className={s.line} />
    </>
  );
}
