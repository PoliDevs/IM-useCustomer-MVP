import s from "./SubTitle.module.scss"

export default function SubTitle({text, children, alignment}) {
  return (
    <h2 className={`${s.subTitle} ${alignment === "left" ? s.left : ""}`}>{children} {text}</h2>
  )
}
