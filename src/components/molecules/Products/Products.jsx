/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import useModal from "../../../utils/Functions";
import ScrollContainer from "react-indiana-drag-scroll";
import Product from "../Product/Product";
import Modal from "../Modal/Modal";
import LoadingPage from "../LoadingPage/LoadingPage";
import s from "./Products.module.scss";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import { capitalizeFirstLetter } from "../../../utils/Functions";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
export default function Products({
  changeStyle,
  commercePlan,
  aditionals,
  scrollToCategory,
  categoryRefs,
}) {
  const [t] = useTranslation(["global"]);
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

  // const reorderedProductsByCategory = {};

  // if (filtroPro && productsByCategory[filtroPro]) {
  //   reorderedProductsByCategory[filtroPro] = productsByCategory[filtroPro];
  //   delete productsByCategory[filtroPro];
  // }

  // const reorderedEntries = Object.entries(reorderedProductsByCategory);
  // const productsEntries = Object.entries(productsByCategory);

  // const sortedEntries = reorderedEntries.concat(productsEntries);
  const sortedEntries = Object.entries(productsByCategory);

  useEffect(() => {
    if (filtroPro) {
      scrollToCategory(filtroPro);
    }
  }, [filtroPro, scrollToCategory]);

  const { isOpen, openModal, closeModal, productData } = useModal(false);

  return (
    <>
      {loading && search.length === 0 ? (
        <LoadingPage
          small={true}
          text={t("No se pudo encontrar el producto o categoria ingresado")}
        />
      ) : sortedEntries.length > 0 ? (
        <ScrollContainer className={s.productsContainer}>
          {Array.isArray(sortedEntries[0])
            ? sortedEntries.map(([categoryId, products]) => (
                <div
                  key={categoryId}
                  className={s.titleConteiner}
                  ref={(el) => {
                    categoryRefs.current[categoryId] = el;
                  }}
                >
                  <SubTitle alignment={"left"}>
                    {capitalizeFirstLetter(products[0]?.category?.category)}
                  </SubTitle>
                  {products.map((product, index) => (
                    <Product
                      key={`${product.id}-${index}`}
                      name={capitalizeFirstLetter(product.name) || ""}
                      description={
                        capitalizeFirstLetter(product.description) || ""
                      }
                      price={product.cost || 0}
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
