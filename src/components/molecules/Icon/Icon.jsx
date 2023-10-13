/* eslint-disable react/prop-types */
import s from "./Icon.module.scss";

//? Comentado para mostrar categorias del comercio
// export default function Icon({icon, handleCategory, category}) {
  export default function Icon({
    id,
    name,
    handleCategory,
    category,
  }) {
    return (
      <div
        className={`${s.iconContainer} ${category === id && s.selected}`}
        onClick={() => category === id ? handleCategory('') : handleCategory(id)}
      >
        <div className={s.icon}></div>
        <h4 className={s.name}>{name}</h4>
      </div>
    );
  }
