import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import burger from "../../../assets/Burgers.svg";
import s from "./Banner.module.scss";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../../redux/actions/index";
import Paragraph from "../../atoms/Paragraph/Paragraph";

export default function Banner({ setCategory }) {
  const dispatch = useDispatch();
  return (
    <section
      className={s.banner}
      style={{ backgroundImage: `url(${burger})` }}
      onClick={() => {
        dispatch(getAllProducts());
        setCategory("");
      }}
    >
      <div className={s.content}>
        <SubTitle text={"Burgers Store"} alignment={"left"} />
        <Paragraph alignment={"left"} text={"Mesa 1"} secundary={true}/>
      </div>
    </section>
  );
}
