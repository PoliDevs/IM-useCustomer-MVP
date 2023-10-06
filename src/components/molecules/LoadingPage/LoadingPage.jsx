import { useTranslation } from "react-i18next";
import Loader from "../../atoms/Loader/Loader";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import s from "./LoadingPage.module.scss";
import { useSelector } from "react-redux";
import iMenuFull from "../../../assets/logo-imenu-full.png";
export default function LoadingPage({small}) {
  const [t, i18n] = useTranslation(["global"]);
  const language = useSelector((state)=> state.language);

  return (
    <div className={`${s.loadingPage} ${small && s.small}`}>
      <Loader />
      {/* <div className={s.iMenuIcon}></div> */}
      <img src={iMenuFull} className={s.imemuLogo} width={"70px"} style={{margin: "0 auto"}}/>
      <SubTitle text={language.loader_wait} />
    </div>
  );
}
