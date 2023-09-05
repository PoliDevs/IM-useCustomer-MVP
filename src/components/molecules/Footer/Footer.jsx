/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as DownArrow } from "../../../assets/down-arrow.svg";
import CartProduct from "../CartProduct/CartProduct";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import ScrollContainer from "react-indiana-drag-scroll";
import s from "./Footer.module.scss";
import { useNavigate } from "react-router-dom";
import Paragraph from "../../atoms/Paragraph/Paragraph";

export default function Footer({ red }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate()

  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce((count, p) => count + p.price * p.amount, 0);
  const totalProducts = cart.reduce((count, p) => count + p.amount, 0);

  return (
    <footer
      className={`${s.footer} ${expanded ? s.expanded : ""} ${red && s.red}`}
    >
      {expanded ? (
        <div className={s.productsList}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <SubTitle text={"Tu pedido"} alignment={"left"} />
            <Paragraph text={`${cart.length} Productos`} alignment={"left"} />
          </div>
          <DownArrow className={s.arrow} onClick={() => setExpanded(false)} />
          <ScrollContainer className={s.scrollContainer}>
            {cart.map((p, i) => (
              <CartProduct
                key={i}
                image={p.image}
                name={p.name}
                description={p.description}
                comment={p.comment}
                price={p.price}
                amount={p.amount}
              />
            ))}
            <div style={{ marginTop: "10px" }}>
              <SubTitle text={`Total: $ ${totalPrice}`} alignment={"left"} />
            </div>
          </ScrollContainer>
          <button
            disabled={!cart.length}
            className={`${s.payButton} ${!cart.length && s.disabled}`}
            onClick={()=>navigate("/payment")}
          >
            Pagar
          </button>
        </div>
      ) : (
        <>
          <div className={s.textContainer}>
            <Paragraph
              text={`${cart ? totalProducts : 0} productos`}
              alignment={"left"}
            />
            <SubTitle text={`Total: $ ${totalPrice}`} alignment={"left"} />
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
