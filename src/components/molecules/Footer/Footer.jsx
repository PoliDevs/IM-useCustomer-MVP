import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.textContainer}>
      <SubTitle text={"0 productos"} alignment={"left"}/>
      <HugeTitle text={"Total: $0"}/>
      </div>
      <button disabled className={s.seeProducts}>Ver productos</button>
    </footer>
  )
}
