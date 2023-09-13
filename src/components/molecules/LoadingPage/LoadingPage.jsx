import { useTranslation } from "react-i18next";
import Loader from "../../atoms/Loader/Loader";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import s from "./LoadingPage.module.scss";

export default function LoadingPage({small}) {
  const [t, i18n] = useTranslation(["global"]);

  return (
    <div className={`${s.loadingPage} ${small && s.small}`}>
      <Loader />
      <div className={s.iMenuIcon}></div>
      <SubTitle text={t("loader.title")} />
    </div>
  );
}
