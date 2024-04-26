import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import iMenuFull from "../../../assets/logo-imenu-full.png";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import Loader from "../../atoms/Loader/Loader";
import s from "./LoadingPage.module.scss";

export default function LoadingPage({small, text}) {
  const [t, i18n] = useTranslation(["global"]);
  const language = useSelector((state)=> state.language);

  return (
    <div className={`${s.loadingPage} ${small && s.small}`}>
      <Loader />
      {/* <div className={s.iMenuIcon}></div> */}
      <img src={iMenuFull} className={s.imemuLogo} width={"70px"} style={{margin: "0 auto"}}/>
      <SubTitle text={text} />
    </div>
  );
}
