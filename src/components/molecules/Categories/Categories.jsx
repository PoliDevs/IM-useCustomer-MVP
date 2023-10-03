import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import  ScrollContainer  from "react-indiana-drag-scroll";
import SmallText from "../../atoms/SmallText/SmallText";
import Icon from "../Icon/Icon";
import s from "./Categories.module.scss";
import { getActiveAditionals } from "../../../redux/actions";
import AllCategoryIcon from "../../atoms/AllCategoryIcon/AllCategoryIcon";
import AditionalsCategoryIcon from "../../atoms/AditionalsCategoryIcon/AditionalsCategoryIcon";
export default function Categories({handleCategory, category, setCategory,handleAditionals, aditionals, setAditionals, all, setAll}) {
  const activeCategories = useSelector((state) => state.allCategories);
  const commerceId = useSelector((state)=> state.commerce.id);
  const language = useSelector((state)=> state.language);
  const [t, i18n] = useTranslation(["global"]);
  const dispatch = useDispatch();



  return (
    <section className={s.categories}>
      <div className={s.sectionTitle}>
        <SmallText
          text={language.categories_title}
          secundary={true}
          noMargin={true}
        />
      </div>
      <div style={{ position: "relative", height: "75px" }}>
        <ScrollContainer className={s.scrollContainer}>
          <AllCategoryIcon
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
          />
          {activeCategories?.map((categoryObject, index) => (
            <Icon
              key={index}
              id={categoryObject.id}
              name={categoryObject.category}
              handleCategory={handleCategory}
              category={category}
            />
          ))}
        </ScrollContainer>
      </div>
    </section>
  );
}