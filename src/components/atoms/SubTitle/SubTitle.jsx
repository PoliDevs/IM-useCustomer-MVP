import s from "./SubTitle.module.scss"

export default function SubTitle({text, children}) {
  return (
    <h2 className={s.subTitle}>{children} {text}</h2>
  )
}
