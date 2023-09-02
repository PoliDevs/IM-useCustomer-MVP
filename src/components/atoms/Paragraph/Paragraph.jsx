/* eslint-disable react/prop-types */
import s from "./Paragraph.module.scss";

export default function Paragraph({text, children, bold, centered, secundary, alignment, scrollable}) {
  return (
    <p
      className={`${s.paragraph} ${bold ? s.bold : ""} ${
        centered ? s.centered : ""
      } ${secundary ? s.secundary : ""} ${alignment === "left" ? s.left : ""} ${scrollable && s.scrollable}`}
    >
      {
        scrollable ? text :
      ((text.length > 110) ? (`${text.substring(0, 110)}...`) : text)
      }
      {children}
    </p>
  );
}
