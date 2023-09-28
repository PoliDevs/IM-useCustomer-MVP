/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { ReactComponent as Logo } from "../../../assets/Burgers.svg";
import { ReactComponent as ImenuLogo } from "../../../assets/ImenuHorizontal.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getStatus } from "../../../redux/actions";
import ClosedCommerce from "../../molecules/ClosedCommerce/ClosedCommerce";
import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import LoadingPage from "../../molecules/LoadingPage/LoadingPage";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import NavBar from "../../molecules/NavBar/NavBar";
import s from "./WelcomePage.module.scss";
import ContactFooter from "../../molecules/ContactFooter/ContactFooter";
export default function WelcomePage() {
  const language = useSelector((state) => state.language);
  const commerce = useSelector((state) => state.commerce);
  const sector = useSelector((state) => state.sector);
  const table = useSelector((state) => state.table);
  const open = useSelector((state) => state.status);
  const [isLoading, setIsloading] = useState(true);
  const [t, i18n] = useTranslation(["global"]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatus(commerce.id, setIsloading));
  }, []);

  return (
    <div className={s.home}>
      <>
        <NavBar setIsloading={setIsloading} />
        {isLoading ? (
          <LoadingPage />
        ) : (
          <>
            {open ? (
              <div className={s.top}>
                <div className={s.mainContent}>
                  <HugeTitle text={language.welcome_title} />
                  <SubTitle text={language.welcome_subtitle} />
                  <HugeTitle text={commerce.name} />
                  <div className={s.spacing}>
                    <Logo className={s.logo} />
                    <SubTitle
                      text={`${language.welcome_sector} ${sector} - ${language.welcome_table} ${table}`}
                    />
                  </div>
                </div>
                <div className={s.bottomContent}>
                  <Paragraph bold={true} text={language.welcome_poweredby}>
                    <ImenuLogo className={s.imenuLogo} />
                  </Paragraph>
                  <LinkButton
                    path="/home"
                    text={
                      commerce.plan !== "m1"
                        ? language.welcome_order
                        : language.welcome_viewproducts
                    }
                  />
                  <LinkButton
                    path="/instruction"
                    text={language.welcome_instructions}
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
