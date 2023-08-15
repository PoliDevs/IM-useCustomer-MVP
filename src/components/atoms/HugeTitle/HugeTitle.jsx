import s from "./HugeTitle.module.scss"

export default function HugeTitle({text, children}) {
  return (
    <h1 className={s.hugeTitle}>{children}{text}</h1>
  )
}
