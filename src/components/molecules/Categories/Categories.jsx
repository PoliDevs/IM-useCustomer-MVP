import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ScrollContainer from "react-indiana-drag-scroll";
import Icon from "../Icon/Icon";
import s from "./Categories.module.scss";
import { useEffect } from "react";
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
}) {
  const activeCategories = useSelector((state) => state.allCategories);
  // const commerceId = useSelector((state) => state.commerce.id);
  const search = useSelector((state) => state.search);
  const loading = useSelector((state) => state.loading);
  // const language = useSelector((state) => state.language);
  // const [t, i18n] = useTranslation(["global"]);
  // const dispatch = useDispatch();
  // const activeCategories = categories.categories;
  const dispatch = useDispatch();
  // activeCategories.slice().sort((a, b) => a.category.localeCompare(b.category));

  // activeCategories.forEach((categoryObject) => {
  //   categoryObject.category =
  //     categoryObject.category.charAt(0).toUpperCase() +
  //     categoryObject.category.slice(1);
  // });
  useEffect(() => {
    activeCategories
      .slice()
      .sort((a, b) => a.category.localeCompare(b.category));

    activeCategories.forEach((categoryObject) => {
      categoryObject.category =
        categoryObject.category.charAt(0).toUpperCase() +
        categoryObject.category.slice(1);
    });
  }, [activeCategories]);

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
          {activeCategories?.map((categoryObject, index) => (
            <Icon
              key={index}
              id={categoryObject.id}
              name={categoryObject.category}
              handleCategory={handleCategory}
              category={category}
              disabled={search.length > 0 || loading}
            />
          ))}
        </ScrollContainer>
      </div>
    </section>
  );
}
