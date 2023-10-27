import React from "react";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import logo from "../../../assets/ReviewIconBlack.png";
import s from "./MyOrdersHeader.module.scss";
import { useTranslation } from "react-i18next";
export default function MyOrdersHeader({ commerce, table }) {
  const [t, i18n] = useTranslation(["global"]);

  return (
    <header className={s.header}>
      <div className={s.headerContent}>
        <img
          src={logo}
          alt="checkLogo"
          className={s.logo}
          style={{ width: "40px", height: "40px", margin: "5px", color: "#2b2b2b" }}
        />
        <div className={s.headerText}>
          <SubTitle text={t("myorders.thanks")} alignment={"left"} bold={true} noLineheight={true}/>
          <HugeTitle text={`${commerce}`} alignment={"left"}/>
          <SubTitle text={`${t("myorders.table")} ${table}`} alignment={"left"} bold={true} noLineheight={true}/>
        </div>
      </div>
      <div className={s.orderTracking}>
        <SubTitle text={t("myorders.follow")} centered={true} review={true}/>
      </div>
    </header>
  );
}
