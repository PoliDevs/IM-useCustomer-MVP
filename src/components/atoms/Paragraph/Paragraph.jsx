/* eslint-disable react/prop-types */
import s from "./Paragraph.module.scss";

export default function Paragraph({
  text,
  children,
  bold,
  centered,
  secundary,
  alignment,
  scrollable,
  disabled,
}) {
  return (
    <p
      className={`${s.paragraph} ${bold ? s.bold : ""} ${
        centered ? s.centered : ""
      } ${secundary ? s.secundary : ""} ${alignment === "left" ? s.left : ""} ${
        scrollable && s.scrollable
      } ${children && s.align} ${alignment === "right" && s.right} ${
        disabled && s.disabled
      }`}
    >
      {scrollable
        ? text
        : text.length > 110
        ? `${text.substring(0, 110)}...`
        : text}
      {children}
    </p>
  );
}
