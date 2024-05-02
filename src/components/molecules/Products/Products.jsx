import { useRef, useState } from "react";
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
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideBanner, getIdCategory } from "../../../redux/actions";
export default function Products({
  changeStyle,
  commercePlan,
  aditionals,
  scrollToCategory,
  categoryRefs: categoryTitleRefs,
}) {
  const [t] = useTranslation(["global"]);
  const divRef = useRef(null);
  // console.log(divRef.current)
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

  const filtroPro = useSelector((state) => state.filtroPor);
  const search = useSelector((state) => state.search);
  const loading = useSelector((state) => state.loading);

  const productsByCategory = allproducts.reduce((acc, product) => {
    const categoryId = product.category.id;
    if (!acc[categoryId]) {
      acc[categoryId] = [];
    }

    acc[categoryId].push({ ...product });
    return acc;
  }, {});

  const sortedEntries = Object.entries(productsByCategory);

  useEffect(() => {
    if (filtroPro) {
      scrollToCategory(filtroPro);
    }
  }, [filtroPro, scrollToCategory]);

  // const getCurrentCategoryId = (scrollPosition) => {
  //   for (const categoryId in categoryRefs.current) {
  //     const categoryElement = categoryRefs.current[categoryId];
  //     // const categoryPosition = categoryElement.offsetTop;
  //     const categoryHeight = categoryElement.offsetHeight;
  //     // console.log(
  //     //   "categoryPosition, categoryHeight, scrollPosition",
  //     //   categoryPosition,
  //     //   categoryHeight,
  //     //   scrollPosition
  //     // );
  //     // Ajusta el rango según tus necesidades
  //     if (scrollPosition >= categoryHeight) {
  //       console.log(categoryId);
  //       return categoryId;
  //     }
  //   }

  //   return null; // Si no se encuentra una categoría actual
  // };
  // const getCurrentCategoryId = (scrollPosition) => {
  //   let lastCategoryId = null;
  //   let accumulatedHeight = 0;

  //   for (const categoryId in categoryRefs.current) {
  //     const categoryElement = categoryRefs.current[categoryId];
  //     const categoryHeight = categoryElement.offsetHeight;

  //     // Compara el scrollPosition con el rango de la categoría actual
  //     if (
  //       scrollPosition >= accumulatedHeight &&
  //       scrollPosition < accumulatedHeight + categoryHeight
  //     ) {
  //       lastCategoryId = categoryId;
  //       break; // Salimos del bucle una vez que encontramos la categoría actual
  //     }

  //     // Añade la altura de la categoría actual al total acumulado
  //     accumulatedHeight += categoryHeight;
  //   }
  //   console.log(lastCategoryId);
  //   return lastCategoryId;
  // };

  const getCurrentCategoryId = (scrollPosition) => {
    let lastCategoryId = null;
    let accumulatedHeight = 0;
    const secondLastChildIndex =
      divRef.current.container.current.childNodes.length - 2;
    const secondLast =
      divRef.current.container.current.childNodes[secondLastChildIndex];
    const totalContentHeight =
      divRef.current.container.current.lastElementChild.offsetTop;
    const categoryIds = Object.keys(categoryTitleRefs.current);

    for (let i = 0; i < categoryIds.length; i++) {
      const categoryId = categoryIds[i];

      const categoryElement = categoryTitleRefs.current[categoryId];
      const categoryHeight = categoryElement.offsetHeight;

      if (
        scrollPosition >= accumulatedHeight &&
        scrollPosition < accumulatedHeight + categoryHeight
      ) {
        lastCategoryId = categoryId;
        break;
      }
      accumulatedHeight += categoryHeight;
    }

    if (
      scrollPosition >= secondLast.offsetTop &&
      scrollPosition <= totalContentHeight
    ) {
      lastCategoryId = categoryIds[categoryIds.length - 1];
    }
    if (lastCategoryId !== null) {
      dispatch(getIdCategory(lastCategoryId));
    }
  };

  const handleScrollChange = (scrollCords) => {
    const scrollTop = scrollCords;
    if (scrollTop < 230) {
      dispatch(hideBanner(false));
    } else {
      dispatch(hideBanner(true));
    }
    getCurrentCategoryId(scrollTop);
  };

  const { isOpen, openModal, closeModal, productData } = useModal(false);

  return (
    <>
      {loading && search.length === 0 ? (
        <LoadingPage
          small={true}
          text={t("No se pudo encontrar el producto o categoria ingresado")}
        />
      ) : sortedEntries.length > 0 ? (
        <ScrollContainer
          className={s.productsContainer}
          ref={divRef}
          nativeMobileScroll={false}
          onScroll={() => handleScrollChange(divRef.current.scrollTop)}
        >
          {Array.isArray(sortedEntries[0])
            ? sortedEntries.map(([categoryId, products]) => (
                <div
                  key={categoryId}
                  className={s.titleConteiner}
                  ref={(el) => {
                    categoryTitleRefs.current[categoryId] = el;
                  }}
                  id={categoryId}
                >
                  <SubTitle alignment={"left"} id={categoryId}>
                    {capitalizeFirstLetter(products[0]?.category?.category)}
                  </SubTitle>
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
              ))
            : search.map((category) => (
                <div key={category.id} className={s.titleConteiner}>
                  <SubTitle alignment={"left"}>
                    {capitalizeFirstLetter(category.category)}
                  </SubTitle>
                  {category.products.map((product, index) => (
                    <Product
                      key={`${product.id}-${index}`}
                      name={capitalizeFirstLetter(product.name) || ""}
                      description={
                        capitalizeFirstLetter(product.description) || ""
                      }
                      price={product.cost || 0}
                      bg={product.photo || ""}
                      id={product.id || ""}
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
      ) : (
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
