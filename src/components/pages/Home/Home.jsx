import { useEffect, useState } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  addCart,
  filterCategory,
  getActiveDishes,
  getActiveMenus,
  getAllCategorys,
  getCommerce,
  setFiltro,
} from "../../../redux/actions";
import Banner from "../../molecules/Banner/Banner";
import Categories from "../../molecules/Categories/Categories";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import Products from "../../molecules/Products/Products";
import Footer from "../../molecules/Footer/Footer";
import s from "./Home.module.scss";
import { dataDecrypt } from "../../../utils/Functions";
export default function Home() {
  const [red, setRed] = useState(false);
  const [category, setCategory] = useState("");
  const cant = useSelector((state) => state.cart);
  const commerce = useSelector((state) => state.commerce);
  const dispatch = useDispatch();

  const [t, i18n] = useTranslation(["global"]);

  const changeStyle = () => {
    setRed(true);
    setTimeout(() => {
      setRed(false);
    }, 1500);
  };

  const handleCategory = (id) => {
    dispatch(setFiltro(id));
    setCategory(id);
  };

  useEffect(() => {
    // localStorage.setItem("cart", JSON.stringify(cant));
    dispatch(addCart(cant))
    let id = dataDecrypt(localStorage.getItem("Pos")).commerce;
    // dispatch(getCommerce(id));
    dispatch(getActiveMenus(commerce.id));
    dispatch(getAllCategorys(commerce.id));
  }, [cant]);

  //! Tener en cuenta si el local esta abierto o cerrado

  return (
    <main className={s.home}>
      <Banner setCategory={setCategory} />
        <>
          <SearchBar />
          <Categories handleCategory={handleCategory} category={category} />
          <Products changeStyle={changeStyle} commercePlan={commerce.plan} />
          {commerce.plan !== "m1" && <Footer red={red} />}
        </>
    </main>
  );
}
