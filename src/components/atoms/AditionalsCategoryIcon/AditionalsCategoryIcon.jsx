/* eslint-disable react/prop-types */
import s from "./AditionalsCategoryIcon.module.scss";

export default function AditionalsCategoryIcon({ aditionals, handleAditionals }) {
  return (
    <div
      className={`${s.iconContainer} ${aditionals && s.selected}`}
      onClick={() => handleAditionals()}
    >
      <div className={s.icon}></div>
      <h4 className={s.name}>Aditionals</h4>
    </div>
  );
}
