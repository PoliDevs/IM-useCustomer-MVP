import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getCommerce} from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { dataDecrypt } from "../../../utils/Functions";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import LanguageOption from "../../molecules/LanguageOption/LanguageOption";
import LoadingPage from "../../molecules/LoadingPage/LoadingPage";
import CryptoJS from "crypto-js";
import s from "./Language.module.scss";

export default function Language() {
  const commerce = useSelector((state) => state.commerce);
  const [t, i18n] = useTranslation(["global"]);
  const dispatch = useDispatch();
  const  data  = useParams().data;

  useEffect(() => {
    const decripted = dataDecrypt(data);
    dispatch(getCommerce(decripted.commerce));
  }, []);

  return (
    <main className={s.mainContainer}>
      {Object.keys(commerce).length ? (
        <>
          <div className={s.optionsMainContainer}>
            <LanguageOption
              text={"¡Bienvenido!"}
              lang={"es"}
              id={1}
            />
            <LanguageOption
              text={"¡Welcome!"}
              lang={"en"}
              id={2}
            />
            <LanguageOption
              text={"¡Bem vindo!"}
              lang={"por"}
              id={3}
            />
          </div>
          <div className={s.buttonWrapper}>
            <LinkButton
              path={"/login"}
              text={t("language.button")}
              darker={true}
            />
          </div>
        </>
      ) : (
        <LoadingPage />
      )}
    </main>
  );
}
