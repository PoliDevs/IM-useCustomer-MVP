/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { ReactComponent as Logo } from "../../../assets/Burgers.svg";
import iMenuFull from '../../../assets/logo-imenu-full.png';
import { ReactComponent as ImenuLogo } from "../../../assets/ImenuHorizontal.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getOrderPending, getStatus } from "../../../redux/actions";
import ClosedCommerce from "../../molecules/ClosedCommerce/ClosedCommerce";
import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import LoadingPage from "../../molecules/LoadingPage/LoadingPage";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import NavBar from "../../molecules/NavBar/NavBar";
import s from "./WelcomePage.module.scss";
import ContactFooter from "../../molecules/ContactFooter/ContactFooter";
import { useNavigate } from "react-router-dom";
export default function WelcomePage() {
  const orderStatus = useSelector((state)=> state.orderStatus)
  const orderPending = useSelector((state)=> state.orderId);
  const language = useSelector((state) => state.language);
  const commerce = useSelector((state) => state.commerce);
  const sector = useSelector((state) => state.sector);
  const table = useSelector((state) => state.table);
  const open = useSelector((state) => state.status);
  const [isLoading, setIsloading] = useState(true);
  const [t, i18n] = useTranslation(["global"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOrderPending(commerce.id, sector, table))
    dispatch(getStatus(commerce.id, setIsloading));
  }, []);

  useEffect(() => {
    orderPending && orderStatus !== "delivered" && orderStatus !== "" && navigate('/rating');
  }, [orderPending])
  

  return (
    <div className={s.home}>
      <>
        <NavBar navarrow={true} path={"/login"} setIsloading={setIsloading} />
        {isLoading ? (
          <LoadingPage />
        ) : (
          <>
            {open ? (
              <div className={s.top}>
                <div className={s.mainContent}>
                  <HugeTitle text={t("welcome.title")} />
                  <SubTitle text={t("welcome.subtitle")} />
                  <HugeTitle text={commerce.name} />
                  <div className={s.spacing}>
                    <Logo className={s.logo} />

                    {/* <img src={iMenuFull} className={s.logo}/> */}
                    <SubTitle
                      text={`${t("welcome.sector")} ${sector} - ${t(
                        "welcome.table"
                      )} ${table}`}
                    />
                  </div>
                </div>
                <div className={s.bottomContent}>
                  <Paragraph bold={true} text={t("welcome.poweredby")}>
                    {/* <ImenuLogo className={s.imenuLogo} /> */}
                    <img
                      src={iMenuFull}
                      className={s.imemuLogo}
                      width={"70px"}
                    />
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
                  <ContactFooter />
                </div>
              </div>
            ) : (
              <>
                {/* <NavBar /> */}
                <ClosedCommerce />
              </>
            )}
          </>
        )}
      </>
    </div>
  );
}
