/* eslint-disable react/prop-types */
import s from "./SmallText.module.scss";

export default function SmallText({
  text,
  children,
  bold,
  noMargin,
  secundary,
  alignment,
  scrollable,
  smaller,
  standarSpacing,
  disabled,
  truncate = false,
}) {
  const truncatedText =
    text && text.length > 50 ? `${text.substring(0, 55)}...` : text;
  return (
    <h6
      className={`${s.small} ${secundary && s.secundary} ${
        alignment === "left" ? s.left : ""
      } ${scrollable && s.scrollable} ${children && s.align} ${
        smaller && s.smaller
      } ${bold && s.bold} ${noMargin && s.noMargin} ${
        standarSpacing && s.standarSpacing
      } ${disabled && s.disabled}`}
    >
      {/* {scrollable
        ? text
        : (text.length > 110)
        ? `${text.substring(0, 110)}...`
        : text} */}
      {truncate ? truncatedText : text}
    </h6>
  );
}
