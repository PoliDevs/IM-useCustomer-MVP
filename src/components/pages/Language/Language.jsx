import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getCommerce, setSector, setTable} from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { dataDecrypt } from "../../../utils/Functions";
import { ReactComponent as ArrowRight } from "../../../assets/ArrowLongRight.svg";
import LanguageOption from "../../molecules/LanguageOption/LanguageOption";
import LoadingPage from "../../molecules/LoadingPage/LoadingPage";
import TermsAndConditions from "../../molecules/TermsAndConditions/TermsAndConditions";
import SmallText from "../../atoms/SmallText/SmallText";
import s from "./Language.module.scss";

export default function Language() {
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
    dispatch(getCommerce(decripted.commerce));
    dispatch(setSector(decripted.sector));
    dispatch(setTable(decripted.table))
  }, []);

  return (
    <main className={s.mainContainer}>
      {Object.keys(commerce).length ? (
        <>
          <div className={s.optionsMainContainer}>
            <LanguageOption text={"¡Bienvenido!"} lang={"Es"} id={1} accepted={accepted} checked={checked} setChecked={setChecked}/>
            <LanguageOption text={"¡Welcome!"} lang={"En"} id={2} accepted={accepted} checked={checked} setChecked={setChecked}/>
            <LanguageOption text={"¡Bem vindo!"} lang={"Por"} id={3} accepted={accepted} checked={checked} setChecked={setChecked}/>
          </div>
          <div className={s.buttonWrapper}>
            <div className={s.checker}>
              <span
                className={`${s.checkbox} ${accepted && s.checked}`}
                onClick={() => setAccepted(!accepted)}
              />
              <div className={s.checkerText}>
              <SmallText
                text={"Acepto los términos y condiciones de uso"}
                noMargin={true}
                secundary={true}
              />
              <span className={s.viewConditions} onClick={()=> setModal(true)}>Ver condiciones aqui</span>
              </div>
            </div>
            <Link to={accepted && i18n.language && "/login"} className={`${s.arrowButton} ${!accepted && s.buttonDisabled}`}>
              <ArrowRight style={{width: "24px", height: "24px", color: accepted ? "#FFFFFF" : "#858585"}}/>
            </Link>
          </div>
          {modal && <TermsAndConditions
            accepted={accepted}
            setAccepted={setAccepted}
            modal={modal}
            setModal={setModal}
          />}
        </>

      
      ) : (
        <LoadingPage />
      )}
    </main>
  );
}
