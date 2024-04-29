import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ScrollContainer from "react-indiana-drag-scroll";
import Icon from "../Icon/Icon";
import s from "./Categories.module.scss";
import { useState } from "react";
// import categories from "../../../categories.json";
// import { getActiveAditionals } from "../../../redux/actions";
// import AllCategoryIcon from "../../atoms/AllCategoryIcon/AllCategoryIcon";
// import AditionalsCategoryIcon from "../../atoms/AditionalsCategoryIcon/AditionalsCategoryIcon";
export default function Categories({
  handleCategory,
  category,
  setCategory,
  handleAditionals,
  aditionals,
  setAditionals,
  all,
  setAll,
  scrollToCategory,
}) {
  const activeCategories = useSelector((state) => state.allCategories);
  console.log(activeCategories);
  const allProducts = useSelector((state) => state.allProducts);
  const search = useSelector((state) => state.search);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryClick = (categoryId) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
      scrollToCategory(null);
    } else {
      setSelectedCategory(categoryId);
      scrollToCategory(categoryId);
    }
  };
  const filteredActiveCategories = activeCategories.filter((category) => {
    return allProducts.some((product) => product.category.id === category.id);
  });

  filteredActiveCategories.forEach((categoryObject) => {
    categoryObject.category =
      categoryObject.category.charAt(0).toUpperCase() +
      categoryObject.category.slice(1);
  });

  return (
    <section className={s.categories}>
      {/* <div className={s.sectionTitle}>
        <SmallText
          text={t("categories.title")}
          secundary={true}
          noMargin={true}
        />
      </div> */}
      <div style={{ position: "relative", height: "auto" }}>
        <ScrollContainer className={s.scrollContainer}>
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
          {filteredActiveCategories?.map((categoryObject, index) => (
            <Icon
              key={index}
              id={categoryObject.id}
              name={categoryObject.category}
              handleCategory={handleCategoryClick}
              category={category}
              selected={selectedCategory === categoryObject.id}
              disabled={search.length > 0 || loading}
            />
          ))}
        </ScrollContainer>
      </div>
    </section>
  );
}
