/* eslint-disable react/prop-types */
import { useEffect} from "react";
import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import s from "./Footer.module.scss";

export default function Footer({cant, total, setTotal}) {


  useEffect(() => {
    if (cant.length) setTotal(cant.reduce((count, p) => count + p.price, 0));
  }, [cant])
  

  return (
    <footer className={`${s.footer} ${cant.length ? s.active : ""}`}>
      <div className={s.textContainer}>
      <SubTitle text={`${cant ? cant.length : 0} productos`} alignment={"left"}/>
      <HugeTitle text={`Total: $ ${total}`}/>
      </div>
      <button onClick={()=>{console.log("clicleado");}} disabled={!cant.length} className={`${s.Products} ${!cant.length ? s.disabled : ""}`}>Ver productos</button>
    </footer>
  )
}
