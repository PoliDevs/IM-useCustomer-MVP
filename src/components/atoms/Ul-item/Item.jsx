import s from "./Item.module.scss"

export default function Item({text, number}) {
  return (
    <li className={s.item}>
      <p className={s.childContainer}>{number}</p>
      <p className={s.childContainer}>{text}</p>
    </li>
  );
}
