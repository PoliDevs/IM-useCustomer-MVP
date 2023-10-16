import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage, getCommerce, setSector, setTable} from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { dataDecrypt } from "../../../utils/Functions";
import { ReactComponent as ArrowRight } from "../../../assets/ArrowLongRight.svg";
import { idiomas } from "../../../utils/Constants";
import ScrollContainer from "react-indiana-drag-scroll";
import LanguageOption from "../../molecules/LanguageOption/LanguageOption";
import LoadingPage from "../../molecules/LoadingPage/LoadingPage";
import TermsAndConditions from "../../molecules/TermsAndConditions/TermsAndConditions";
import SmallText from "../../atoms/SmallText/SmallText";
import s from "./Language.module.scss";

export default function Language() {
  const language = useSelector((state)=> state.language);
  const commerce = useSelector((state) => state.commerce);
  const [accepted, setAccepted] = useState(false);
  const [checked, setChecked] = useState("");
  const [modal, setModal] = useState(false);
  const [t, i18n] = useTranslation(["global"]);
  const dispatch = useDispatch();
  const  params  = useParams();

  useEffect(() => {
    localStorage.setItem("Pos", params['*']);
    const decripted = dataDecrypt(params["*"]);
    if (localStorage.getItem('cart')) localStorage.removeItem('cart');
    dispatch(getCommerce(decripted.commerce));
    dispatch(setSector(decripted.sector));
    dispatch(setTable(decripted.table))
    dispatch(changeLanguage("es"))
  }, []);

  return (
    <main className={s.mainContainer}>
      {Object.keys(commerce).length ? (
        // Object.keys(language).length ? (
          <>
            <ScrollContainer className={s.optionsMainContainer}>
              {idiomas.map((idioma, index) => (
                  <LanguageOption
                  text={idioma.message}
                  lang={idioma.lang}
                  id={index}
                  key= {index}
                  accepted={accepted}
                  checked={checked}
                  setChecked={setChecked}
                />
              ))}
            </ScrollContainer>
            <div className={s.buttonWrapper}>
              <div className={s.checker}>
                <span
                  className={`${s.checkbox} ${accepted && s.checked}`}
                  onClick={() => setAccepted(!accepted)}
                />
                <div className={s.checkerText}>
                  <SmallText
                    text={language.languages_termsConditions}
                    noMargin={true}
                    secundary={true}
                  />
                  <span
                    className={s.viewConditions}
                    onClick={() => setModal(true)}
                  >
                    {language.languages_seeConditions}
                  </span>
                </div>
              </div>
              <Link
                to={accepted  && "/login"}
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
        // ) : (
        //   ""
        // )
      ) : (
        <LoadingPage />
      )}
    </main>
  );
}
