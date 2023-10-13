/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import s from "./AllCategoryIcon.module.scss";
import { getActiveMenus } from "../../../redux/actions";

export default function AllCategoryIcon({ all, setAll, handleCategory, text }) {


  return (
    <div
      className={`${s.iconContainer} ${all && s.selected}`}
      onClick={() => {handleCategory(null);setAll(true); }}
    >
      <div className={s.icon}></div>
      <h4 className={s.name}>{text}</h4>
    </div>
  );
}
