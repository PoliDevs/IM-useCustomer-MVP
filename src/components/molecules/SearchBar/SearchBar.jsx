import { useState } from "react";
import { ReactComponent as SearchIcon } from "../../../assets/SearchIcon.svg";
import { ReactComponent as XIcon } from "../../../assets/xIcon.svg";
import SearchField from "../../atoms/SearchField/SearchField";
import s from "./SearchBar.module.scss";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const handleDelete = () => {
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className={s.searchBar}>
      <SearchIcon className={s.searchIcon} />
      <SearchField
        placeholder={"¿Que quieres pedir?"}
        inputValue={inputValue}
        handleChange={handleChange}
      />
      <XIcon
        onClick={handleDelete}
        className={`${s.xIcon} ${inputValue ? s.visible : ""}`}
      />
    </div>
  );
}
