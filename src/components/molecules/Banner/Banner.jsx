import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import burger from "../../../assets/Burgers.svg";
import s from "./Banner.module.scss";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../../redux/actions/index";

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
        <HugeTitle text={"Burgers Store"} />
        <SubTitle alignment={"left"} text={"Mesa 1"} />
      </div>
    </section>
  );
}
