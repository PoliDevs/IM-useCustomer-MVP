/* eslint-disable react/prop-types */
import React from 'react'
import { ReactComponent as ArrowDown } from "../../../assets/ArrowDown.svg";
import { ReactComponent as ArrowUp } from "../../../assets/ArrowUp.svg";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SubTitle from '../../atoms/SubTitle/SubTitle';
import Paragraph from '../../atoms/Paragraph/Paragraph'
import PaymentProduct from '../../molecules/PaymentProduct/PaymentProduct';
import s from "./OrderCard.module.scss";

export default function OrderCard({commerce, table, order}) {
  const [openCard, setOpenCard] = useState(true);
    const [t, i18n] = useTranslation(["global"]);

  const orderStatus = {
    orderPlaced: t("orderCard.orderPlaced"),
    orderInPreparation: t("orderCard.orderInPreparation"),
    orderReady: t("orderCard.orderReady"),
    delivered: t("orderCard.orderDelivered"),
  };

  const orderColor = {
    orderPlaced: "#4B47FF",
    orderInPreparation: "#FF4A4A",
    orderReady: "#21D849",
    delivered: "#21D849",
  };
  
  const handleOpen = () => {
    setOpenCard(!openCard);
  };

  return (
    <article className={s.orderCardContainer}>
      <ArrowDown
        className={`${s.arrowDown} ${!openCard && s.visible} ${
          openCard && s.hidden
        }`}
        onClick={handleOpen}
      />
      <ArrowUp
        className={`${s.arrowUp} ${openCard && s.visible} ${
          !openCard && s.hidden
        }`}
        onClick={handleOpen}
      />
      <Paragraph
        text={`${commerce}: ${order.order}`}
        alignment={"left"}
        bold={true}
      />
      <div className={`${!openCard && s.hidden} ${openCard && s.flex}`}>
        <Paragraph
          text={`${t("orderCard.table")} ${table}`}
          alignment={"left"}
          bold={true}
          noMargin={true}
        />
        <div style={{ margin: "5px" }}>
          <Paragraph
            text={`${t("orderCard.date")}: ${order.date}`}
            alignment={"right"}
            bold={true}
            // noMargin={true}
          />
          <Paragraph
            text={`${t("orderCard.time")}: ${order.hour}`}
            alignment={"left"}
            bold={true}
            // noMargin={true}
          />
        </div>
      </div>
      <Paragraph
        text={orderStatus[order.status]}
        alignment={"left"}
        color={orderColor[order.status]}
      />
      <div className={`${!openCard && s.hidden} ${s.products}`}>
        {order?.menu?.name?.map((name, index) => (
          <PaymentProduct
            key={index}
            amount={order.menu.amount[index]}
            text={name}
            price={order.menu.cost[index]}
          />
        ))}
        <div style={{ width: "100%", marginTop: "20px" }}>
          <Paragraph
            text={`${t("orderCard.total")} ${order.paid}`}
            alignment={"right"}
            bold={true}
          />
        </div>
      </div>
    </article>
  );
}
