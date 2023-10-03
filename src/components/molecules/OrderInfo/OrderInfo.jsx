/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import PaymentProduct from "../PaymentProduct/PaymentProduct";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import s from "./OrderInfo.module.scss";

export default function OrderInfo({ border, price, tablePrice, sectorPrice }) {
  const language = useSelector((state) => state.language);
  const cart = useSelector((state) => state.cart);
  const commerceInfo = useSelector((state) => state.commerce);
  const table = useSelector((state) => state.table);
  const totalPrice = cart.reduce((count, p) => count + p.price * p.amount, 0);
  //const totalPrice = cart.reduce((count, p) => count + p.cost * p.amount, 0);

  const [t, i18n] = useTranslation(["global"]);

  //!descomentar para mostrar info del producto real
  return (
    <div className={`${s.orderInfo} ${border && s.border}`}>
      <div className={s.paymentTitle}>
        <SubTitle text={commerceInfo.name} bold={true} />
        <SubTitle text={`${language.orderInfo_table} ${table}`} />
      </div>
      <div className={s.productsContainer}>
        {cart.map((p, index) => (
          <PaymentProduct
            key={index}
            amount={p.amount}
            text={p.name}
            price={p.price * p.amount}
            //price={p.cost * p.amount}
          />
        ))}
      </div>
      {!!price.totalPromotion && (
        <Paragraph
          text={`${language.orderInfo_promotion} % ${price.totalPromotion}`}
          alignment={"left"}
          bold={true}
        />
      )}
      {!!price.totalDiscount && (
        <Paragraph
          text={`${language.orderInfo_discount} % ${price.totalDiscount}`}
          alignment={"left"}
          bold={true}
        />
      )}
      {!!price.totalSurcharge && (
        <Paragraph
          text={`${language.orderInfo_surcharge} % ${price.totalSurcharge}`}
          alignment={"left"}
          bold={true}
        />
      )}
      {!!price.partial && (
        <Paragraph
          text={`${language.orderInfo_pricePartial}${price.partial.toFixed(2)}`}
          alignment={"left"}
          bold={true}
        />
      )}
      {!!tablePrice.tablePromotion && (
        <Paragraph
          text={`${language.orderInfo_priceTablePromotion} %${tablePrice.tablePromotion}`}
          alignment={"left"}
          bold={true}
        />
      )}
      {!!tablePrice.tableDiscount && (
        <Paragraph
          text={`${language.orderInfo_priceTableDiscount} %${tablePrice.tableDiscount}`}
          alignment={"left"}
          bold={true}
        />
      )}
      {!!tablePrice.tableSurcharge && (
        <Paragraph
          text={`${language.orderInfo_priceTableSurcharge} %${tablePrice.tableSurcharge}`}
          alignment={"left"}
          bold={true}
        />
      )}
      {!!sectorPrice.sectorPromotion && (
        <Paragraph
          text={`${language.orderInfo_priceSectorPromotion} %${sectorPrice.sectorPromotion}`}
          alignment={"left"}
          bold={true}
        />
      )}
      {!!sectorPrice.sectorDiscount && (
        <Paragraph
          text={`${language.orderInfo_priceSectorDiscount} %${sectorPrice.sectorDiscount}`}
          alignment={"left"}
          bold={true}
        />
      )}
      {!!sectorPrice.sectorSurcharge && (
        <Paragraph
          text={`${language.orderInfo_priceSectorSurcharge} %${sectorPrice.sectorSurcharge}`}
          alignment={"left"}
          bold={true}
        />
      )}
      {!!price.finalPrice && (
        <Paragraph
          text={`${language.orderInfo_paymentTotal}${price.finalPrice.toFixed(2)}`}
          alignment={"left"}
          bold={true}
        />
      )}
    </div>
  );
}
