import Banner from "../../molecules/Banner/Banner";
import Categories from "../../molecules/Categories/Categories";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import s from "./Home.module.scss";
import Products from "../../molecules/Products/Products";
import Footer from "../../molecules/Footer/Footer";
import { useEffect, useState} from "react";
import { useSelector } from "react-redux";
export default function Home() {
  const [total, setTotal] = useState(0);
  const cant = useSelector(state=> state.cart);
  
    
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cant));
  }, [cant]);

  return (
    <main className={s.home}>
      <Banner />
      <SearchBar />
      <Categories />
      <Products />
      <Footer cant={cant} total={total} setTotal={setTotal}/>
    </main>
  );
}
