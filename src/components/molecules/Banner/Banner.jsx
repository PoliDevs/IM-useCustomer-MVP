import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import burger from "../../../assets/Burgers.svg";
import s from "./Banner.module.scss";

export default function Banner() {
  return (
    <section className={s.banner} style={{ backgroundImage: `url(${burger})` }}>
      <div className={s.content}>
        <HugeTitle text={"Burgers Store"} />
        <SubTitle alignment={"left"} text={"Mesa 1"} />
      </div>
    </section>
  );
}
