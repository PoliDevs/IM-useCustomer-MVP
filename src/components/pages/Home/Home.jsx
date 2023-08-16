/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { ReactComponent as Logo} from "../../../assets/Burgers.svg";
import { ReactComponent as ImenuLogo} from '../../../assets/ImenuHorizontal.svg';
import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import LinkButton from "../../atoms/LinkButton/LinkButton";
// import { useEffect, useState } from "react";
// import { getCommerce } from "../../utils/functions";
import s from "./Home.module.scss";
import { useEffect, useState } from "react";
import LoadingPage from "../../molecules/LoadingPage/LoadingPage";
export default function Home() {
  const [commerce, setCommerce] = useState();

  const [t, i18n] = useTranslation(["global"]);

  useEffect(() => {
    setTimeout(() => {
      setCommerce(true);
    }, 5500);
  }, []);

  return (
    <div className={s.home}>
      {commerce ? (
      <>
        <HugeTitle text={t("home.title")} />
        <Paragraph text={t("home.subtitle")} />
        <HugeTitle text={"Burger Store"} />
        <div className={s.spacing}>
          <Logo className={s.logo} />
          <Paragraph text={t("home.table")} />
        </div>
        <Paragraph bold={true} text={t("home.poweredby")}>
          <ImenuLogo className={s.imenuLogo} />
        </Paragraph>
        <LinkButton text={t("home.order")} />
        <LinkButton
          path="/instruction"
          text={t("home.instructions")}
          type="secundary"
        />
    </>
      ) : (
        <LoadingPage/>
      )}
      </div>
  );
}
