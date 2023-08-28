/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ReactComponent as AddLogo } from "../../../assets/plus.svg";
import { ReactComponent as RemoveLogo } from "../../../assets/minus.svg";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import s from "./CartProduct.module.scss";
import { useAmountControls } from "../../../utils/Functions";

export default function CartProduct({image, name, description, comment, price, amount}) {
  const { addToCart, removeFromCart } = useAmountControls();

  return (
    <div className={s.cartProduct}>
      <img className={s.icon} src={image} alt={"product icon"} />
      <div className={s.info}>
        <SubTitle alignment={"left"} text={name} bold={true} />
        <Paragraph alignment={"left"} text={description} />
        {comment && <Paragraph alignment={"left"} text={"*Observaciones:"} bold={true}/>}
        <Paragraph alignment={"left"} text={comment}/>
        <SubTitle alignment={"left"} text={`$ ${price * amount}`} bold={true} />
      <div className={s.amountControl}>
        <RemoveLogo className={s.amountIcon} onClick={()=>{removeFromCart(name)}}/>
        <div className={s.amount}>
        <SubTitle text={amount} bold={true}/>
        </div>
        <AddLogo className={s.amountIcon} onClick={()=>{addToCart(image, name, description, price, 1, comment);}}/>
      </div>
      </div>
    </div>
  );
}
