import { useState } from "react";
import SearchField from "../../atoms/SearchField/SearchField";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState();
  
  const handleChange = (e) => {
    e.prevenDefault();
    setInputValue(e.target.value)
  }
  return (
    <div>
      <SearchField placeholder={"Que quieres pedir?"} inputValue={inputValue} handleChange={handleChange}/>
    </div>
  )
}
