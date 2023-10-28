import { useState } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../../redux/actions";
import s from "./LoginCheckBox.module.scss";
import { useDispatch } from "react-redux";

export default function LoginCheckBox({ id, checked, setChecked, lang}) {
  const [t, i18n] = useTranslation("global");
  const dispatch = useDispatch()
  return (
    <>
      <label className={s.checkbox}>
        <input
          className={`${s.inputCheckbox} ${checked === lang && s.checked}`}
          type="checkbox"
          id={id}
          name="language"
          checked={checked}
          onChange={() => {
            setChecked(lang);
            i18n.changeLanguage(lang)
            // dispatch(changeLanguage(lang.toLowerCase()))
          }}
        />
        <div className={s.checkbox_circle}>
          <svg viewBox="0 0 52 52" className={s.checkmark}>
            <circle
              fill="none"
              r="25"
              cy="26"
              cx="26"
              className={s.checkmark_circle}
            ></circle>
            <path
              d="M16 26l9.2 8.4 17.4-21.4"
              className={s.checkmark_kick}
            ></path>
          </svg>
        </div>
      </label>
    </>
  );
}
