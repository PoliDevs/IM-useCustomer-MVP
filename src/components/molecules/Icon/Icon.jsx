/* eslint-disable react/prop-types */
import s from "./Icon.module.scss";

export default function Icon({icon, handleCategory, category}) {
  return (
    <div className={`${s.iconContainer} ${(category === icon.category) && s.selected}`} onClick={() => handleCategory(icon.category)}>
      <img className={s.icon} src={icon.src} />
      <h4 className={s.name}>{icon.name}</h4>
    </div>
  );
}
