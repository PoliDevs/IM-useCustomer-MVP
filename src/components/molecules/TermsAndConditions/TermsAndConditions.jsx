import { useSelector } from "react-redux";
import { ReactComponent as XIcon } from "../../../assets/xIcon.svg"
import { useTranslation } from "react-i18next";
import SmallText from "../../atoms/SmallText/SmallText";
import SubTitle from '../../atoms/SubTitle/SubTitle';
import s from './TermsAndConditions.module.scss';
import { terms_en, terms_es, terms_port } from "../../../utils/Constants";
import i18next from "i18next";

export default function TermsAndConditions({accepted, setAccepted, modal, setModal}) {
  const language = useSelector((state)=> state.language);
    const [t, i18n] = useTranslation(["global"]);
  const terms = {
    es: terms_es,
    en: terms_en,
    por: terms_port,
    bra: terms_port
  }
  return (
    <main className={s.modalContainer}>
      <section className={s.modal}>
        <XIcon className={s.closeIcon} onClick={() => setModal(false)} />
        <SubTitle text={t("language.terms")} bold={true} alignment={"left"} />
        <div className={s.terms}>{terms[i18next.language]}</div>
        <div className={s.checker}>
          <span
            className={`${s.checkbox} ${accepted && s.checked}`}
            onClick={() => setAccepted(!accepted)}
          />
          <SmallText text={t("language.terms")} noMargin={true} />
        </div>
        <button
          className={`${s.button}`}
          onClick={() => {
            setAccepted(true);
            setModal(false);
          }}
        >
          {t("language.acceptButton")}
        </button>
        <button
          className={`${s.button} ${s.light}`}
          onClick={() => {
            setModal(false);
            setAccepted(false);
          }}
        >
          {t("language.cancelButton")}
        </button>
      </section>
    </main>
  );
}
