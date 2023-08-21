import Banner from "../../molecules/Banner/Banner";
import Categories from "../../molecules/Categories/Categories";
import Product from "../../molecules/Product/Product";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import { iconImages } from "../../../utils/Constants";
import s from "./Home.module.scss";
import Products from "../../molecules/Products/Products";
export default function Home() {
  return (
    <main className={s.home}>
      <Banner />
      <SearchBar />
      <Categories/>
      <Products/>
    </main>
  );
}
