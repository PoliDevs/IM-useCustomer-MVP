import { useEffect, useState } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  addCart,
  filterCategory,
  getActiveAditionals,
  getActiveDishes,
  getActiveMenus,
  getActiveProducts,
  getAllCategorys,
  getCommerce,
  getOrdersByUser,
  removerOrderId,
  setFiltro,
} from "../../../redux/actions";
import Banner from "../../molecules/Banner/Banner";
import Categories from "../../molecules/Categories/Categories";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import Products from "../../molecules/Products/Products";
import Footer from "../../molecules/Footer/Footer";
import s from "./Home.module.scss";
import { dataDecrypt } from "../../../utils/Functions";
import LoadingPage from "../../molecules/LoadingPage/LoadingPage";
export default function Home() {
  const commerce = useSelector((state) => state.commerce);
  const userEmail = useSelector((state)=> state.user.email)
  const cant = useSelector((state) => state.cart);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState(null);
  const [aditionals, setAditionals] = useState(false);
  const [all, setAll] = useState((category || aditionals )? false : true);
  const [red, setRed] = useState(false);
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
    setAditionals(false)
    setAll(false)
  };

    const handleAditionals = () => {
      setAditionals(true);
      setCategory(null);
      dispatch(getActiveAditionals(commerce.id));
      setAll(false);
    };

  useEffect(() => {
    dispatch(addCart(cant));
    let id = dataDecrypt(localStorage.getItem("Pos")).commerce;
    dispatch(getActiveMenus(commerce.id, setIsLoading));
    dispatch(getActiveProducts(commerce.id))
    dispatch(getAllCategorys(commerce.id));
    dispatch(removerOrderId())
    dispatch(getOrdersByUser(userEmail, commerce.id))
  }, [cant]);

  return (
    <main className={s.home}>
      {/* //?agregado setIsLoading a navBar */}
      <Banner navarrow={true} path={"/welcome"} setCategory={setCategory} setAditionals={setAditionals} setAll={setAll} setIsLoading={setIsLoading}/>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <SearchBar />
          <Categories
            handleCategory={handleCategory}
            category={category}
            aditionals={aditionals}
            setAditionals={setAditionals}
            setCategory={setCategory}
            all={all}
            setAll={setAll}
            handleAditionals={handleAditionals}
          />
          <Products
            changeStyle={changeStyle}
            commercePlan={commerce.plan}
            aditionals={aditionals}
          />
          {commerce.plan !== "m1" && <Footer red={red} />}
        </>
      )}
    </main>
  );
}
