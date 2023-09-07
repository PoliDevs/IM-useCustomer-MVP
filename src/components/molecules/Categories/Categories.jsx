import { ProductsInfo } from "../../../utils/Constants";
import { useTranslation } from "react-i18next";
import  ScrollContainer  from "react-indiana-drag-scroll";
import Icon from "../Icon/Icon";
import s from "./Categories.module.scss";
import SmallText from "../../atoms/SmallText/SmallText";
import { useSelector } from "react-redux";
export default function Categories({handleCategory, category}) {
  const products = useSelector((state)=> state.allProducts);

  const [t, i18n] = useTranslation(["global"]);

  //!Precargado con iconos demostrativos.
  //!Reemplazar los iconos precargados por los iconos de las categorias del comercio.
  return (
    <section className={s.categories}>
      <div className={s.sectionTitle}>
        <SmallText text={t("categories.title")} secundary={true} noMargin={true}/>
      </div>
      <div style={{ position: "relative", height: "75px" }}>
        <ScrollContainer className={s.scrollContainer}>
          {ProductsInfo?.map((icon, index) => (
            <Icon key={index} icon={icon} handleCategory={handleCategory} category={category}/>
          ))}
        </ScrollContainer>
      </div>
    </section>
  );
}