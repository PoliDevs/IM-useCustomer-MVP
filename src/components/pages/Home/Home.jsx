import Banner from "../../molecules/Banner/Banner";
import Categories from "../../molecules/Categories/Categories";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import s from "./Home.module.scss";
import Products from "../../molecules/Products/Products";
import Footer from "../../molecules/Footer/Footer";
import { useEffect, useState } from "react";
export default function Home() {
  const [cant, setCant] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);

  const addProduct = async (name, price) => {
     setCant(prevCant => [...prevCant, { name: name, price: price }]);
    };
    
    useEffect(() => {
      
      localStorage.setItem("cart", JSON.stringify(cant));
  }, [cant]);

  return (
    <main className={s.home}>
      <Banner />
      <SearchBar />
      <Categories />
      <Products addProduct={addProduct} />
      <Footer cant={cant} setCant={setCant}/>
    </main>
  );
}
