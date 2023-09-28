import { useTranslation } from "react-i18next";
import Loader from "../../atoms/Loader/Loader";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import s from "./LoadingPage.module.scss";
import { useSelector } from "react-redux";

export default function LoadingPage({small}) {
  const [t, i18n] = useTranslation(["global"]);
  const language = useSelector((state)=> state.language);

  return (
    <div className={`${s.loadingPage} ${small && s.small}`}>
      <Loader />
      <div className={s.iMenuIcon}></div>
      <SubTitle text={language.loader_wait} />
    </div>
  );
}
