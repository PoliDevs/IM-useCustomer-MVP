import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { filterCategory, getActiveDishes, getActiveMenus, getAllCategorys, getAllProducts } from "../../../redux/actions";
import Banner from "../../molecules/Banner/Banner";
import Categories from "../../molecules/Categories/Categories";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import Products from "../../molecules/Products/Products";
import Footer from "../../molecules/Footer/Footer";
import s from "./Home.module.scss";
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
    }, 1500); // 1000 milisegundos = 1 segundo
  };

    const handleCategory = (name) => {
      dispatch(getAllProducts());
      dispatch(filterCategory(name));
      setCategory(name);
    };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cant));
    dispatch(getActiveMenus(commerce.id));
    dispatch(getActiveDishes(commerce.id));
    dispatch(getAllCategorys());
    dispatch(getAllProducts());
  }, [cant]);

  //! Tener en cuenta si el local esta abierto o cerrado

  return (
    <main className={s.home}>
      <Banner setCategory={setCategory}/>
      {commerce.active ? (
        <>
          <SearchBar />
          <Categories handleCategory={handleCategory} category={category} />
          <Products changeStyle={changeStyle} commercePlan={commerce.plan} />
          {commerce.plan !== "m1" && <Footer red={red} />}
        </>
      ) : (
        <h2>commerce closed</h2>
      )}
    </main>
  );
}
