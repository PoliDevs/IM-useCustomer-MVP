import s from "./LoginCheckBox.module.scss";

export default function LoginCheckBox() {
  return (
    <>
      <label className={s.checkbox}>
        <input type={s.checkbo} x />
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
