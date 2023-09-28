import s from "./HugeTitle.module.scss"

export default function HugeTitle({text, children, centered, secundary, noWeight, review}) {
  return (
    <h1
      className={`${s.hugeTitle} ${centered && s.centered} ${
        secundary && s.secundary
      } ${noWeight && s.noWeight} ${review && s.review}`}
    >
      {children}
      {text}
    </h1>
  );
}
