import s from "./SearchField.scss";

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
