
import Paragraph from "../../atoms/Paragraph/Paragraph";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import s from "./Product.module.scss";
export default function Product({name, description, price, bg, addProduct}) {
  return (
    <div className={s.productContainer}>
      <img className={s.productIcon} src={bg} />
      <div className={s.infoContainer}>
        <SubTitle alignment={"left"} text={name} bold={true} />
        <Paragraph alignment={"left"} text={description} />
        <SubTitle alignment={"left"} text={`$ ${price}`} bold={true} />
        <div className={s.plus} onClick={() => addProduct(name, price)}>
        </div>
      </div>
    </div>
  );
}
