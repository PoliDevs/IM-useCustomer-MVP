import s from "./Item.module.scss"

export default function Item({text}) {
  return <li className={s.item}>{text}</li>;
}
