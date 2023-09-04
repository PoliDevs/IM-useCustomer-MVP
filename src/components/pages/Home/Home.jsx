import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../molecules/Banner/Banner";
import Categories from "../../molecules/Categories/Categories";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import s from "./Home.module.scss";
import Products from "../../molecules/Products/Products";
import Footer from "../../molecules/Footer/Footer";
import { getActiveDishes, getActiveMenus } from "../../../redux/actions";
export default function Home() {
  const cant = useSelector((state) => state.cart);
  const commerce = useSelector((state) => state.commerce);
  const dispatch = useDispatch();
  const [red, setRed] = useState(false);

  const changeStyle = () => {
    setRed(true);
    setTimeout(() => {
      setRed(false);
    }, 1500); // 1000 milisegundos = 1 segundo
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cant));
    dispatch(getActiveMenus(commerce.id))
    dispatch(getActiveDishes(commerce.id))

  }, [cant]);

  return (
    <main className={s.home}>
      <Banner />
      {commerce.active ? (
        <>
          <SearchBar />
          <Categories />
          <Products changeStyle={changeStyle} commercePlan={commerce.plan} />
          {commerce.plan !== "m1" && <Footer red={red} />}
        </>
      ) : (
        <h2>commerce closed</h2>
      )}
    </main>
  );
}
