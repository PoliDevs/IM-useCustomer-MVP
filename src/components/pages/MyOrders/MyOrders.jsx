// import { getOrdersByUser } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import MyOrdersHeader from "../../molecules/MyOrdersHeader/MyOrdersHeader";
import ReviewExpandFooter from "../../molecules/ReviewExpandFooter/ReviewExpandFooter";
import OrderCard from "../../molecules/OrderCard/OrderCard";
import ScrollContainer from "react-indiana-drag-scroll";
import s from "./MyOrders.module.scss";

export default function MyOrders() {
  const userEmail = useSelector((state) => state.user.email);
  const orders = useSelector((state) => state.ordersByUser);
  const commerce = useSelector((state) => state.commerce);
  const table = useSelector((state) => state.table);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [t, i18n] = useTranslation(["global"]);

  useEffect(() => {
    if (!userEmail) navigate("/home");
  }, []);

  // useEffect(() => {
  //   userEmail && dispatch(getOrdersByUser(userEmail, commerce.id));
  // }, [commerce, userEmail])

  return (
    <div className={s.myOrdersContainer}>
      {orders && (
        <>
          <MyOrdersHeader commerce={commerce.name} table={table} />
          <ScrollContainer className={s.mainContent}>
            {orders?.map((order, index) => (
              <OrderCard
                commerce={commerce.name}
                table={table}
                order={order}
                key={index}
              />
            ))}
          </ScrollContainer>
          <ReviewExpandFooter />
        </>
      )}
    </div>
  );
}
