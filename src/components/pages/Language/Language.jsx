import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getCommerce, setSector, setTable } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { dataDecrypt } from "../../../utils/Functions";
import { ReactComponent as ArrowRight } from "../../../assets/ArrowLongRight.svg";
import ScrollContainer from "react-indiana-drag-scroll";
import LanguageOption from "../../molecules/LanguageOption/LanguageOption";
import LoadingPage from "../../molecules/LoadingPage/LoadingPage";
import TermsAndConditions from "../../molecules/TermsAndConditions/TermsAndConditions";
import SmallText from "../../atoms/SmallText/SmallText";
import s from "./Language.module.scss";

export default function Language() {
  const language = useSelector((state) => state.language);
  const commerce = useSelector((state) => state.commerce);
  const [accepted, setAccepted] = useState(false);
  const [checked, setChecked] = useState("");
  const [modal, setModal] = useState(false);
  const [t, i18n] = useTranslation(["global"]);
  const dispatch = useDispatch();
  const params = useParams();
  
  useEffect(() => {
    localStorage.setItem("Pos", params["*"]);
    const decripted = dataDecrypt(params["*"]);
    if (localStorage.getItem("cart")) localStorage.removeItem("cart");
    dispatch(getCommerce(decripted.commerce));
    dispatch(setSector(decripted.sector));
    dispatch(setTable(decripted.table));

    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    } else {
      // Si no hay idioma almacenado, establecer el idioma por defecto como "es"
      i18n.changeLanguage("es");
    }
  }, []);

  // Función para cambiar el idioma
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang); // Almacenar el idioma seleccionado en el almacenamiento local
  };

  return (
    <main className={s.mainContainer}>
      {Object.keys(commerce).length ? (
        // Object.keys(language).length ? (
        <>
          <ScrollContainer className={s.optionsMainContainer}>
            {/* //!Comentadas opciones de traduccion con Microsoft */}
            {/* {idiomas.map((idioma, index) => (
                  <LanguageOption
                  text={idioma.message}
                  lang={idioma.lang}
                  id={index}
                  key= {index}
                  accepted={accepted}
                  checked={checked}
                  setChecked={setChecked}
                />
              ))} */}
            <LanguageOption
              text={"Bienvenido"}
              lang={"es"}
              // id={index}
              // key={index}
              accepted={accepted}
              checked={checked}
              setChecked={setChecked}
              onChange={handleLanguageChange}
            />
            <LanguageOption
              text={"Welcome"}
              lang={"en"}
              // id={index}
              // key={index}
              accepted={accepted}
              checked={checked}
              setChecked={setChecked}
              onChange={handleLanguageChange}
            />
            <LanguageOption
              text={"Bem-vindo"}
              lang={"por"}
              // id={index}
              // key={index}
              accepted={accepted}
              checked={checked}
              setChecked={setChecked}
              onChange={handleLanguageChange}
            />
            <LanguageOption
              text={"Bem-vindo (Br)"}
              lang={"bra"}
              // id={index}
              // key={index}
              accepted={accepted}
              checked={checked}
              setChecked={setChecked}
              onChange={handleLanguageChange}
            />
          </ScrollContainer>
          <div className={s.buttonWrapper}>
            <div className={s.checker}>
              <span
                className={`${s.checkbox} ${accepted && s.checked}`}
                onClick={() => setAccepted(!accepted)}
              />
              <div className={s.checkerText}>
                <SmallText
                  // text={language.languages_termsConditions}
                  text={t("language.terms")}
                  noMargin={true}
                  secundary={true}
                />
                <span
                  className={s.viewConditions}
                  onClick={() => setModal(true)}
                >
                  {t("language.viewConditions")}
                </span>
              </div>
            </div>
            <Link
              to={accepted && "/login"}
              className={`${s.arrowButton} ${!accepted && s.buttonDisabled}`}
            >
              <ArrowRight
                style={{
                  width: "24px",
                  height: "24px",
                  color: accepted ? "#FFFFFF" : "#858585",
                }}
              />
            </Link>
          </div>
          {modal && (
            <TermsAndConditions
              accepted={accepted}
              setAccepted={setAccepted}
              modal={modal}
              setModal={setModal}
            />
          )}
        </>
      ) : (
        // ) : (
        //   ""
        // )
        <LoadingPage text={t("loader.title")} />
      )}
    </main>
  );
}
