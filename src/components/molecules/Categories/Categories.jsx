import  ScrollContainer  from "react-indiana-drag-scroll";
import { ProductsInfo } from "../../../utils/Constants";
import Icon from "../Icon/Icon";
import s from "./Categories.module.scss";
import SmallText from "../../atoms/SmallText/SmallText";
export default function Categories({handleCategory, category}) {

  return (
    <section className={s.categories}>
      <div className={s.sectionTitle}>
        <SmallText text={"Categorias"} secundary={true} noMargin={true}/>
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