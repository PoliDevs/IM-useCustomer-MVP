import { useRef, useEffect, useLayoutEffect, useMemo, useState } from "react";
/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import useModal from "../../../utils/Functions";
import ScrollContainer from "react-indiana-drag-scroll";
import Product from "../Product/Product";
import Modal from "../Modal/Modal";
import LoadingPage from "../LoadingPage/LoadingPage";
import s from "./Products.module.scss";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import { capitalizeFirstLetter, formatNumber } from "../../../utils/Functions";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { hideBanner, getIdCategory } from "../../../redux/actions";
export default function Products({
  changeStyle,
  commercePlan,
  aditionals,
  categoryRefs,
  observerEnabled,
}) {
  const [t] = useTranslation(["global"]);
  const divRef = useRef(null);
  const h2TitleRef = useRef({});
  const dispatch = useDispatch();
  const allproducts = useSelector((state) => {
    const { allProducts, filtroPor, allAditionals, products, search } = state;
    if (search.length) {
      return search.flatMap((category) => category.products);
    }
    if (!filtroPor && !aditionals) {
      return allProducts.concat(products);
    }
    if (!filtroPor && aditionals) return allAditionals;
    return allProducts;
  });

  const search = useSelector((state) => state.search);
  const loading = useSelector((state) => state.loading);
  const productsByCategory = useMemo(() => {
    return allproducts.reduce((acc, product) => {
      const categoryId = product.category.id;

      if (!acc.has(categoryId)) {
        acc.set(categoryId, []);
      }

      acc.get(categoryId).push({ ...product });

      return acc;
    }, new Map());
  }, [allproducts]);

  useEffect(() => {
    const titleRefsSnapshot = h2TitleRef.current;
    if (productsByCategory.size || search.length === 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const categoryId = entry.target.id;
              dispatch(getIdCategory(categoryId));
            }
          });
        },
        {
          threshold: 0.8,
          rootMargin: "0px 0px -50% 0px",
        }
      );

      Object.entries(titleRefsSnapshot).forEach(([categoryId, ref]) => {
        if (ref) {
          observer.observe(ref);
        }
      });

      return () => {
        Object.values(titleRefsSnapshot).forEach((ref) => {
          if (ref && ref.current) {
            observer.unobserve(ref.current);
          }
        });
      };
    }
  }, [
    h2TitleRef,
    dispatch,
    productsByCategory.size,
    search.length,
    observerEnabled,
  ]);

  const handleScrollChange = (scrollCords) => {
    if (scrollCords >= 247) {
      dispatch(hideBanner(false));
    } else {
      dispatch(hideBanner(true));
    }
  };

  const { isOpen, openModal, closeModal, productData } = useModal(false);
  return (
    <>
      {loading && search.length === 0 ? (
        <LoadingPage
          small={true}
          text={t("No se pudo encontrar el producto o categoria ingresado")}
        />
      ) : (
        <ScrollContainer
          className={s.productsContainer}
          ref={divRef}
          onScroll={() => handleScrollChange(divRef.current.scrollTop)}
        >
          {search.length > 0
            ? search.map((category, index) => (
                <div key={index} className={s.titleConteiner}>
                  <SubTitle alignment={"left"} id={`category-${category.id}`}>
                    {capitalizeFirstLetter(category.category)}
                  </SubTitle>
                  {category.products.map((product, index) => (
                    <Product
                      key={`${product.id}-${index}`}
                      name={capitalizeFirstLetter(product.name) || ""}
                      description={
                        capitalizeFirstLetter(product.description) || ""
                      }
                      price={formatNumber(product.cost) || 0}
                      bg={product.photo || ""}
                      id={product.id || ""}
                      active={product.active || false}
                      promotion={product.promotion || false}
                      discount={product.discount || 0}
                      surcharge={product.surcharge || 0}
                      openModal={openModal}
                      product={product.product || false}
                      aditional={product.aditional || false}
                      menuTypeId={product.menuType ? product.menuType.id : ""}
                      categoryId={product.category ? product.category.id : ""}
                      unitTypeId={product.unitType ? product.unitType.id : ""}
                      productTypeId={
                        product.productType ? product.productType.id : ""
                      }
                      supplierId={product.supplier ? product.supplier.id : ""}
                      allergenType={product.allergenType || ""}
                      careful={product.careful || false}
                    />
                  ))}
                </div>
              ))
            : Array.from(productsByCategory).map(([categoryId, products]) => (
                <div
                  key={categoryId}
                  id={categoryId}
                  className={s.titleConteiner}
                  ref={(e) => (categoryRefs.current[categoryId] = e)}
                >
                  <h2
                    id={categoryId}
                    ref={(e) => (h2TitleRef.current[categoryId] = e)}
                  >
                    {capitalizeFirstLetter(products[0]?.category?.category)}
                  </h2>
                  {products.map((product, index) => (
                    <Product
                      key={`${product.id}-${index}`}
                      name={capitalizeFirstLetter(product.name) || ""}
                      description={
                        capitalizeFirstLetter(product.description) || ""
                      }
                      price={formatNumber(product.cost) || 0}
                      bg={product.photo || ""}
                      id={product.id || ""}
                      active={product.active || false}
                      promotion={product.promotion || false}
                      discount={product.discount || 0}
                      surcharge={product.surcharge || 0}
                      openModal={openModal}
                      product={product.product || false}
                      aditional={product.aditional || false}
                      menuTypeId={product.menuType ? product.menuType.id : ""}
                      categoryId={product.category ? product.category.id : ""}
                      unitTypeId={product.unitType ? product.unitType.id : ""}
                      productTypeId={
                        product.productType ? product.productType.id : ""
                      }
                      supplierId={product.supplier ? product.supplier.id : ""}
                      allergenType={product.allergenType || ""}
                      careful={product.careful || false}
                    />
                  ))}
                </div>
              ))}
        </ScrollContainer>
      )}
      {!loading && !productsByCategory.size && search.length === 0 && (
        <LoadingPage small={true} text={t("loader.title")} />
      )}

      {/* {commercePlan !== "m1" && ()} */}
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        productData={productData}
        changeStyle={changeStyle}
      />
    </>
  );
}
