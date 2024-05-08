/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
// import { useTranslation } from "react-i18next";
import ScrollContainer from "react-indiana-drag-scroll";
import Icon from "../Icon/Icon";
import s from "./Categories.module.scss";
import { useState, useEffect, useRef } from "react";
import { capitalizeFirstLetter } from "../../../utils/Functions";
// import categories from "../../../categories.json";
// import { getActiveAditionals } from "../../../redux/actions";
// import AllCategoryIcon from "../../atoms/AllCategoryIcon/AllCategoryIcon";
// import AditionalsCategoryIcon from "../../atoms/AditionalsCategoryIcon/AditionalsCategoryIcon";
export default function Categories({
  // handleCategory,
  category,
  // setCategory,
  // handleAditionals,
  // aditionals,
  // setAditionals,
  // all,
  // setAll,
  scrollToCategory,
}) {
  const allProducts = useSelector((state) => state.allProducts);
  const search = useSelector((state) => state.search);
  const showSearchbar = useSelector((state) => state.showSearchbar);
  const loading = useSelector((state) => state.loading);
  const categoryProductsId = useSelector((state) => parseInt(state.idCategory));
  const categoryProductString = useSelector((state) => state.idCategory);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isCategoryClickSelected, setIsCategoryClickSelected] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setIsCategoryClickSelected(true);
    scrollToCategory(categoryId);
  };

  useEffect(() => {
    const categoryElement = Array.from(
      scrollContainerRef.current.container.current.childNodes
    ).find((node) => {
      return node.id === categoryProductString;
    });

    if (categoryElement) {
      categoryElement.scrollIntoView({
        block: "end",
        inline: "center",
      });
      setIsCategoryClickSelected(false);
    }
  }, [categoryProductString]);

  const uniqueCategoryIds = [
    ...allProducts.reduce((uniqueCategories, product) => {
      if (!uniqueCategories.has(product.category.id)) {
        uniqueCategories.add(product.category.id);
      }
      return uniqueCategories;
    }, new Set()),
  ];
  return (
    <section
      className={`${s.categories} ${showSearchbar ? s.fadeIn : s.fadeOut}}`}
    >
      {/* <div className={s.sectionTitle}>
        <SmallText
          text={t("categories.title")}
          secundary={true}
          noMargin={true}
        />
      </div> */}
      <div style={{ position: "relative", height: "auto" }}>
        <ScrollContainer
          className={s.scrollContainer}
          ref={scrollContainerRef}
          vertical={false}
          horizontal={true}
        >
          {/* <AllCategoryIcon
            all={all}
            setAll={setAll}
            commerceId={commerceId}
            handleCategory={handleCategory}
            text={language.categories_all}
          />
          <AditionalsCategoryIcon
            aditionals={aditionals}
            handleAditionals={handleAditionals}
            handleCategory={handleCategory}
            text={language.categories_aditionals}
          /> */}
          {/* {filteredActiveCategories?.map((categoryObject, index) => (
            <Icon
              key={index}
              id={categoryObject.id}
              name={categoryObject.category}
              handleCategory={handleCategoryClick}
              category={category}
              selected={
                (isCategoryClickSelected &&
                  categoryObject.id === selectedCategory) ||
                (!isCategoryClickSelected &&
                  categoryObject.id === categoryProductsId)
              }
              disabled={search.length > 0 || loading}
            />
          ))} */}
          {uniqueCategoryIds.map((categoryId) => {
            const product = allProducts.find(
              (product) => product.category.id === categoryId
            );
            return (
              <Icon
                key={categoryId}
                id={categoryId}
                name={capitalizeFirstLetter(product.category.category)}
                handleCategory={handleCategoryClick}
                category={category}
                selected={
                  (isCategoryClickSelected &&
                    categoryId === selectedCategory) ||
                  (!isCategoryClickSelected &&
                    categoryId === categoryProductsId)
                }
                disabled={search.length > 0 || loading}
              />
            );
          })}
        </ScrollContainer>
      </div>
    </section>
  );
}
