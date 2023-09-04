import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Banner from "../../molecules/Banner/Banner";
import Categories from "../../molecules/Categories/Categories";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import s from "./Home.module.scss";
import Products from "../../molecules/Products/Products";
import Footer from "../../molecules/Footer/Footer";
export default function Home() {
  const cant = useSelector(state=> state.cart);
  const[red, setRed] = useState(false);  

  const changeStyle = () => {
    setRed(true);
    setTimeout(() => {
      setRed(false);
    }, 1000); // 1000 milisegundos = 1 segundo
  };

    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cant));
  }, [cant]);

  return (
    <main className={s.home}>
      <Banner />
      <SearchBar />
      <Categories />
      <Products changeStyle={changeStyle} />
      <Footer red={red} />
    </main>
  );
}
