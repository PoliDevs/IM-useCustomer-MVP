import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  addCart,
  getActiveAditionals,
  getActiveMenus,
  getAllCategorys,
  hideBanner,
  // getOrdersByUser,
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
// import LoadingPage from "../../molecules/LoadingPage/LoadingPage";
import Toast from "../../atoms/Toast/Toast";
export default function Home() {
  const commerce = useSelector((state) => state.commerce);
  // const userEmail = useSelector((state) => state.user.email);
  const cant = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);
  const categoryScroll = useSelector((state) => parseInt(state.idCategory));
  const pendingOrders = useSelector((state) => state.ordersByUser);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState(null);
  const [aditionals, setAditionals] = useState(false);
  const [all, setAll] = useState(category || aditionals ? false : true);
  const [red, setRed] = useState(false);
  const dispatch = useDispatch();

  const changeStyle = () => {
    setRed(true);
    setTimeout(() => {
      setRed(false);
    }, 1500);
  };

  const handleCategory = (id) => {
    dispatch(setFiltro(id));
    setCategory(id);
    setAditionals(false);
    setAll(false);
  };

  const handleAditionals = () => {
    setAditionals(true);
    setCategory(null);
    dispatch(getActiveAditionals(commerce.id));
    setAll(false);
  };

  const categoryTitleRefs = useRef({});
  useEffect(() => {
    const categoryTitleRefsSnapshot = categoryTitleRefs.current;
    const firstCategoryId =
      Object.values(categoryTitleRefsSnapshot).length > 0
        ? parseInt(Object.values(categoryTitleRefsSnapshot)[0].id)
        : null;

    if (categoryScroll !== firstCategoryId) {
      dispatch(hideBanner(false));
    } else {
      dispatch(hideBanner(true));
    }
  }, [dispatch, categoryScroll]);
  const scrollToCategory = (categoryId) => {
    const firstCategoryId = parseInt(
      Object.values(categoryTitleRefs.current)[0].id
    );
    if (categoryId === firstCategoryId) {
      dispatch(hideBanner(true));
      categoryTitleRefs.current[categoryId].scrollIntoView({
        behavior: "smooth",
      });
    } else if (categoryTitleRefs.current[categoryId]) {
      dispatch(hideBanner(false));
      categoryTitleRefs.current[categoryId].scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    dispatch(addCart(cant));
    let id = dataDecrypt(localStorage.getItem("Pos")).commerce;
    dispatch(getActiveMenus(commerce.id, setIsLoading));
    // dispatch(getActiveProducts(commerce.id))
    dispatch(getAllCategorys(commerce.id));
    dispatch(removerOrderId());
    // dispatch(getOrdersByUser(userEmail, commerce.id));
  }, [cant]);

  return (
    <main className={s.home}>
      {/* //?agregado setIsLoading a navBar */}

      <Banner
        ordersButton={pendingOrders.length && true}
        navarrow={true}
        setCategory={setCategory}
        setAditionals={setAditionals}
        setAll={setAll}
        setIsLoading={setIsLoading}
      />

      {/* //movi hacia arriba searchBar y Categories */}
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
        scrollToCategory={scrollToCategory}
      />
      {/* {isLoading ? (
        <LoadingPage small={true}/>
      ) : ( */}
      <>
        <Products
          changeStyle={changeStyle}
          commercePlan={commerce.plan}
          aditionals={aditionals}
          scrollToCategory={scrollToCategory}
          categoryRefs={categoryTitleRefs}
        />
        {!isLoading && cart.length > 0 ? (
          <Toast
            text={`Tienes ${cart.length} productos pendientes, click para ir a ver tu pedido`}
            link={"payment"}
          />
        ) : null}

        {!isLoading && commerce.plan !== "m1" && <Footer red={red} />}
      </>
    </main>
  );
}
