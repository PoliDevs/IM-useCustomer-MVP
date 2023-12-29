/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as DownArrow } from "../../../assets/down-arrow.svg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CartProduct from "../CartProduct/CartProduct";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import ScrollContainer from "react-indiana-drag-scroll";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import s from "./Footer.module.scss";

export default function Footer({ red }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const language = useSelector((state)=> state.language);
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce((count, p) => count + p.price * p.amount, 0);
  //const totalPrice = cart.reduce((count, p) => count + p.cost * p.amount, 0);
  const totalProducts = cart.reduce((count, p) => count + p.amount, 0);

  const [t, i18n] = useTranslation(["global"]);

    //!descomentar para mostrar info del producto real
  return (
    <footer
      className={`${s.footer} ${expanded ? s.expanded : ""} ${red && s.red}`}
    >
      {expanded ? (
        <div className={s.productsList}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <SubTitle
              text={t("footer.yourOrder")}
              alignment={"left"}
              bold={true}
            />
            <Paragraph
              text={`${cart.length} ${t("footer.products")}`}
              alignment={"left"}
            />
          </div>
          <DownArrow className={s.arrow} onClick={() => setExpanded(false)} />
          <ScrollContainer className={s.scrollContainer}>
            {cart.map((p, i) => (
              <CartProduct
                key={i}
                image={p.image}
                //image={p.photo}
                name={p.name}
                description={p.description}
                comment={p.comment}
                price={p.price}
                //price={p.cost}
                amount={p.amount}
              />
            ))}
            <div style={{ marginTop: "10px" }}></div>
          </ScrollContainer>
          <div className={s.bottomContent}>
            <SubTitle
              text={`${t("footer.total")}: $ ${totalPrice}`}
              alignment={"left"}
            />
            <button
              disabled={!cart.length}
              className={`${s.payButton} ${!cart.length && s.disabled}`}
              onClick={() => navigate("/payment")}
            >
              {t("footer.payButton")}
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className={`${s.textContainer} ${red && s.red}`}>
            <Paragraph
              text={`${cart ? totalProducts : 0} ${t("footer.products")}`}
              alignment={"left"}
            />
            <SubTitle
              text={`${t("footer.total")}: $ ${totalPrice}`}
              alignment={"left"}
              bold={true}
            />
          </div>
          <button
            onClick={() => {
              setExpanded(!expanded);
            }}
            disabled={!cart.length}
            className={`${s.products} ${!cart.length ? s.disabled : ""}`}
          >
            {t("footer.viewproducts")}
          </button>
        </>
      )}
    </footer>
  );
}
