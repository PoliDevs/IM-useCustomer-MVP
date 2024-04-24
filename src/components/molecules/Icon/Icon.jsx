/* eslint-disable react/prop-types */
import s from "./Icon.module.scss";

//? Comentado para mostrar categorias del comercio
// export default function Icon({icon, handleCategory, category}) {
export default function Icon({ id, name, handleCategory, category, disabled, selected }) {
  return (
    <a
      id={`category-${id}`}
      className={`${s.iconContainer} ${selected ? s.selected : ""} ${
        disabled && s.disabled
      }`}
      onClick={() => handleCategory(id)}
    >
      <div className={s.icon}></div>
      <h4 className={s.name}>{name}</h4>
    </a>
  );
}
