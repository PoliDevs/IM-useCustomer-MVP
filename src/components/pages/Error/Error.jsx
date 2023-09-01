import HugeTitle from '../../atoms/HugeTitle/HugeTitle';
import ReloadButton from '../../atoms/ReloadButton/ReloadButton';
import errorIcon from "../../../assets/no-food.png"
import s from './Error.module.scss';

export default function Error({active}) {
  return (
    <section className={`${s.error} ${active && s.visible}`}>
    <HugeTitle text={"Ups, algo salio mal..."} centered={true}/>
    <img src={errorIcon} alt="page not found" className={s.icon} />
    <ReloadButton/>
    </section>
  )
}
