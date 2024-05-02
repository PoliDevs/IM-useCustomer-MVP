import { useState } from "react";
import { ReactComponent as SearchIcon } from "../../../assets/SearchIcon.svg";
import { ReactComponent as XIcon } from "../../../assets/xIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSearchProduct,
  getActiveMenus,
  getAllProducts,
  searchProduct,
} from "../../../redux/actions";
import { useTranslation } from "react-i18next";
import SearchField from "../../atoms/SearchField/SearchField";
import s from "./SearchBar.module.scss";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const commerceId = useSelector((state) => state.commerce.id);
  const comerce = useSelector((state) => state.commerce.name);
  const language = useSelector((state) => state.language);
  const [t, i18n] = useTranslation(["global"]);

  const handleDelete = () => {
    setInputValue("");
    dispatch(getActiveMenus(commerceId));
    dispatch(clearSearchProduct());
  };

  // const handleChange = (e) => {
  //   setInputValue(e.target.value);
  //   if (inputValue.length > 1){
  //     dispatch(searchProduct(inputValue))
  //   }
  //   else {
  //     dispatch(getActiveMenus(commerceId))
  //     dispatch(clearSearchProduct());
  //   }
  // };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 0) {
      dispatch(searchProduct(value));
    } else {
      dispatch(getActiveMenus(commerceId));
      dispatch(clearSearchProduct());
    }
  };

  return (
    <div className={`${s.searchBar} ${inputValue ? s.border : ""}`}>
      <SearchIcon className={`${s.searchIcon} ${inputValue ? s.strong : ""}`} />
      <SearchField
        placeholder={`Buscar en ${comerce}`}
        inputValue={inputValue}
        handleChange={handleChange}
      />
      <XIcon
        onClick={handleDelete}
        className={`${s.xIcon} ${inputValue ? `${s.visible} ${s.strong}` : ""}`}
      />
    </div>
  );
}
