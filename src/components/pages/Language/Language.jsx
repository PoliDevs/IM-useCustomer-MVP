import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getCommerce, setTable } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import LanguageOption from "../../molecules/LanguageOption/LanguageOption";
import s from "./Language.module.scss";
import LoadingPage from "../../molecules/LoadingPage/LoadingPage";

export default function Language() {
  const commerce = useSelector((state) => state.commerce);

  const [t, i18n] = useTranslation(["global"]);
  const dispatch = useDispatch();
  const { commerceId, ...params } = useParams();

  useEffect(() => {
    dispatch(setTable(params.tableId));
    dispatch(getCommerce(commerceId));
    console.log(i18n.language);
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
              lang={"port"}
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
