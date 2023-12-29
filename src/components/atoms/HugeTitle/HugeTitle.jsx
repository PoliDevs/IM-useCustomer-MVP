import s from "./HugeTitle.module.scss"

export default function HugeTitle({text, children, centered, left, secundary, noWeight, review}) {
  return (
    <h1
      className={`${s.hugeTitle} ${centered && s.centered} ${left && s.left} ${
        secundary && s.secundary
      } ${noWeight && s.noWeight} ${review && s.review}`}
    >
      {children}
      {text}
    </h1>
  );
}
