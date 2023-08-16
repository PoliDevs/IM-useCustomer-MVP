import Loader from "../../atoms/Loader/Loader"
import SubTitle from "../../atoms/SubTitle/SubTitle"
import s from "./LoadingPage.module.scss"

export default function LoadingPage() {
  return (
    <div className={s.loadingPage}>
      <Loader/>
      <div className={s.iMenuIcon}></div>
      <SubTitle text={"Espera mientras preparamos el menu"}/>
    </div>
  )
}
