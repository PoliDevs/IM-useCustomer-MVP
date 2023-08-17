import s from "./SearchField.module.scss";

export default function SearchField({ placeholder, handleChange, inputValue }) {


  return (
    <input
      type="text"
      value={inputValue}
      placeholder={placeholder}
      onChange={handleChange}
      className={s.searchField}
    />
  );
}
