import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <SubTitle text={"0 productos"} alignment={"left"}/>
      <HugeTitle text={"Total: $0"}/>
      <LinkButton text={"Ver productos"}/>
    </footer>
  )
}
