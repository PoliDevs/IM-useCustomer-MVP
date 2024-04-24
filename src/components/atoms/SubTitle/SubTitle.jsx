import s from "./SubTitle.module.scss"

export default function SubTitle({
  text,
  children,
  alignment,
  bold,
  secundary,
  review,
  noLineheight,
  selected
}) {
  return (
    <h2
      className={`${s.subTitle} ${alignment === "left" ? s.left : ""} ${
        alignment === "right" ? s.right : ""
      } ${bold ? s.bold : ""} ${secundary && s.secundary} ${
        review && s.review
      } ${noLineheight && s.noLineheight} ${selected ? s.selected : ""}`}
    >
      {children}
      {text}
    </h2>
  );
}
