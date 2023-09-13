import { useState } from "react";
import { ReactComponent as SearchIcon } from "../../../assets/SearchIcon.svg";
import { ReactComponent as XIcon } from "../../../assets/xIcon.svg";
import { useDispatch} from "react-redux";
import { getAllProducts, searchProduct } from "../../../redux/actions";
import { useTranslation } from "react-i18next";
import SearchField from "../../atoms/SearchField/SearchField";
import s from "./SearchBar.module.scss";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const [t, i18n] = useTranslation(["global"]);


  const handleDelete = () => {
    setInputValue("");
    dispatch(getAllProducts())
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (inputValue.length > 2){
      dispatch(searchProduct(inputValue))
    }else {
      dispatch(getAllProducts())
    }
  };

  return (
    <div className={`${s.searchBar} ${inputValue ? s.border : ""}`}>
      <SearchIcon className={`${s.searchIcon} ${inputValue ? s.strong : ""}`} />
      <SearchField
        placeholder={t("searchbar.placeholder")}
        inputValue={inputValue}
        handleChange={handleChange}
      />
      <XIcon
        onClick={handleDelete}
        className={`${s.xIcon} ${inputValue ? (`${s.visible} ${s.strong}`) : ""}`}
      />
    </div>
  );
}
