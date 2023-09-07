/* eslint-disable react/prop-types */
// import { randomIcon } from "../../../utils/Functions";
import s from "./Icon.module.scss";

export default function Icon({icon, handleCategory, category}) {
  // export default function Icon({id, name, handleCategory, category}) {
  return (
    <div
      className={`${s.iconContainer} ${
        category === icon.category && s.selected
      }`}
      onClick={() => handleCategory(icon.category)}
    >
      {/* <div
      className={`${s.iconContainer} ${
        category === id && s.selected
      }`}
      onClick={() => handleCategory(id)}
    > */}
  
      {/* //? Generar un icono random para cada categoria */}
      <img className={s.icon} src={icon.src} />
      {/* <img className={s.icon} src={randomIcon()} />
      <h4 className={s.name}>{name}</h4> */}
      <h4 className={s.name}>{icon.name}</h4>
    </div>
  );
}
