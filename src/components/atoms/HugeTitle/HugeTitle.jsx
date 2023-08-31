import s from "./HugeTitle.module.scss"

export default function HugeTitle({text, children, centered}) {
  return (
    <h1 className={`${s.hugeTitle} ${centered && s.centered}`}>{children}{text}</h1>
  )
}
