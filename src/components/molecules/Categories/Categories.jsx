import  ScrollContainer  from "react-indiana-drag-scroll";
import { iconImages } from "../../../utils/Constants";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Icon from "../Icon/Icon";
import s from "./Categories.module.scss";
export default function Categories() {
  return (
    <section className={s.categories}>
      <div className={s.sectionTitle}>
        <Paragraph text={"Categorias"} centered={true} secundary={true}/>
      </div>
      <div style={{position: "relative", height: "75px"}}>
      <ScrollContainer className={s.scrollContainer}>
        {iconImages?.map((icon, index)=> (<Icon key={index} icon={icon}/>))}
      </ScrollContainer>
      </div>
    </section>
  );
}