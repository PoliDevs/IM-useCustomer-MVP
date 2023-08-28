/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as DownArrow } from "../../../assets/down-arrow.svg";
import s from "./Footer.module.scss";
import CartProduct from "../CartProduct/CartProduct";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import HugeTitle from "../../atoms/HugeTitle/HugeTitle";

export default function Footer() {
  const [expanded, setExpanded] = useState(false);
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce((count, p) => count + p.price * p.amount, 0);

  return (
    <footer
      className={`${s.footer} ${cart.length ? s.active : ""} ${
        expanded ? s.expanded : ""
      }`}
    >
      {expanded ? (
        <div className={s.productsList}>
          <HugeTitle text={"Tu pedido"} alignment={"left"} />
          <SubTitle text={`${cart.length} Productos`} alignment={"left"} />
          <DownArrow className={s.arrow} onClick={() => setExpanded(false)} />
          {cart.map((p, i) => (
            <div key={i}>
              <CartProduct
                image={p.image}
                name={p.name}
                description={p.description}
                comment={p.comment}
                price={p.price}
                amount={p.amount}
              />
            </div>
          ))}

          <h1>Total: {totalPrice}</h1>
        </div>
      ) : (
        <>
          <div className={s.textContainer}>
            <SubTitle
              text={`${cart ? cart.length : 0} productos`}
              alignment={"left"}
            />
            <HugeTitle text={`Total: $ ${totalPrice}`} alignment={"left"} />
          </div>
          <button
            onClick={() => {
              setExpanded(!expanded);
            }}
            disabled={!cart.length}
            className={`${s.products} ${!cart.length ? s.disabled : ""}`}
          >
            Ver productos
          </button>
        </>
      )}
    </footer>
  );
}
