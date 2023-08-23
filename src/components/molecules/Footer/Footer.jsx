/* eslint-disable react/prop-types */
import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import s from "./Footer.module.scss";

export default function Footer({cant}) {

  return (
    <footer className={s.footer}>
      <div className={s.textContainer}>
      <SubTitle text={`${cant ? cant.length : 0} productos`} alignment={"left"}/>
      <HugeTitle text={"Total: $0"}/>
      </div>
      <button disabled className={s.Products}>Ver productos</button>
    </footer>
  )
}
