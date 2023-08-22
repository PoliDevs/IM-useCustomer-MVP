import s from "./SubTitle.module.scss"

export default function SubTitle({text, children, alignment, bold}) {
  return (
    <h2 className={`${s.subTitle} ${alignment === "left" ? s.left : ""} ${bold ? s.bold : ""}`}>{children} {text}</h2>
  )
}
