import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import  ScrollContainer  from "react-indiana-drag-scroll";
import SmallText from "../../atoms/SmallText/SmallText";
import Icon from "../Icon/Icon";
import s from "./Categories.module.scss";
export default function Categories({handleCategory, category}) {
  const activeCategories = useSelector((state) => state.allCategories);

  const [t, i18n] = useTranslation(["global"]);

  //!Precargado con iconos demostrativos.
  //!Reemplazar los iconos precargados por los iconos de las categorias del comercio.
  return (
    <section className={s.categories}>
      <div className={s.sectionTitle}>
        <SmallText
          text={t("categories.title")}
          secundary={true}
          noMargin={true}
        />
      </div>
      <div style={{ position: "relative", height: "75px" }}>
        <ScrollContainer className={s.scrollContainer}>
          {activeCategories?.map((categoryObject, index)=> (
            <Icon key={index} id={categoryObject.id} name={categoryObject.category} handleCategory={handleCategory} category={category}/>
          ))}
        </ScrollContainer>
      </div>
    </section>
  );
}