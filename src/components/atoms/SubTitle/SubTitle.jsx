import s from "./SubTitle.module.scss"

export default function SubTitle({text, children, alignment, bold, secundary, review}) {
  return (
    <h2
      className={`${s.subTitle} ${alignment === "left" ? s.left : ""} ${
        bold ? s.bold : ""
      } ${secundary && s.secundary} ${review && s.review}`}
    >
      {children}
      {text}
    </h2>
  );
}
