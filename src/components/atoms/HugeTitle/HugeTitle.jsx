import s from "./HugeTitle.module.scss"

export default function HugeTitle({text, children, centered, secundary, noWeight}) {
  return (
    <h1
      className={`${s.hugeTitle} ${centered && s.centered} ${
        secundary && s.secundary
      } ${noWeight && s.noWeight}`}
    >
      {children}
      {text}
    </h1>
  );
}
