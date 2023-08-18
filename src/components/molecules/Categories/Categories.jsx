import  ScrollContainer  from "react-indiana-drag-scroll";
import { iconImages } from "../../../utils/Constants";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Icon from "../../atoms/ICon/Icon";
import s from "./Categories.module.scss";
export default function Categories() {
  return (
    <section className={s.categories}>
      <div className={s.sectionTitle}>
        <Paragraph text={"Categorias"} centered={true}/>
      </div>
      <ScrollContainer className={s.scrollContainer}>
        {iconImages?.map((icon, index)=> (<Icon key={index} icon={icon}/>))}
      </ScrollContainer>
    </section>
  );
}