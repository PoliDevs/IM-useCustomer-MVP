import { useState } from "react";
import { ReactComponent as SearchIcon } from "../../../assets/SearchIcon.svg";
import { ReactComponent as XIcon } from "../../../assets/xIcon.svg";
import SearchField from "../../atoms/SearchField/SearchField";
import s from "./SearchBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, searchProduct } from "../../../redux/actions";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();


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
        placeholder={"¿Que quieres pedir?"}
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
