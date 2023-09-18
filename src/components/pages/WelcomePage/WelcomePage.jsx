/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { ReactComponent as Logo } from "../../../assets/Burgers.svg";
import { ReactComponent as ImenuLogo } from "../../../assets/ImenuHorizontal.svg";
import CryptoJS from "crypto-js";
import { useDispatch, useSelector } from "react-redux";
import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import LoadingPage from "../../molecules/LoadingPage/LoadingPage";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import NavBar from "../../molecules/NavBar/NavBar";
import s from "./WelcomePage.module.scss";
import { dataDecrypt } from "../../../utils/Functions";
import { getCommerce } from "../../../redux/actions";
import { useEffect } from "react";
export default function WelcomePage() {
  const commerce = useSelector((state) => state.commerce);
  const table = useSelector((state) => state.table);
  const dispatch = useDispatch();
  const [t, i18n] = useTranslation(["global"]);
  
  return (
    <div className={s.home}>
      <NavBar />
      {Object.keys(commerce).length ? (
        <div className={s.top}>
          <div className={s.mainContent}>
          <HugeTitle text={t("welcome.title")} />
          <SubTitle text={t("welcome.subtitle")} />
          <HugeTitle text={commerce.name} />
          <div className={s.spacing}>
            <Logo className={s.logo} />
            <SubTitle text={`${t("welcome.table")} ${table}`} />
          </div>
          </div>
          <div className={s.bottomContent}>
            <Paragraph bold={true} text={t("welcome.poweredby")}>
              <ImenuLogo className={s.imenuLogo} />
            </Paragraph>
            <LinkButton
              path="/home"
              text={
                commerce.plan !== "m1"
                  ? t("welcome.order")
                  : t("welcome.viewproducts")
              }
            />
            <LinkButton
              path="/instruction"
              text={t("welcome.instructions")}
              type="secundary"
            />
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}
