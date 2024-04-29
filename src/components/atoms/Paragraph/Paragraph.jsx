/* eslint-disable react/prop-types */
import { useState } from "react";
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
  noMargin,
  gap,
  color,
  underline,
  maxHeight,
}) {
  const [expanded, setExpanded] = useState(false);
  const truncatedText =
    text && text.length > 110 ? `${text.substring(0, 110)}...` : text;

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <p
      className={`${s.paragraph} ${bold ? s.bold : ""} ${
        centered ? s.centered : ""
      } ${secundary ? s.secundary : ""} ${alignment === "left" ? s.left : ""} ${
        scrollable && s.scrollable
      } ${children && s.align} ${alignment === "right" && s.right} ${
        disabled && s.disabled
      } ${gap && s.gap} ${noMargin && s.noMargin} ${
        underline && s.underline
      }   ${expanded ? s.maxHeight-1  : s.maxHeight-2}`}
      style={{
        color: color && color,
        cursor: maxHeight ? "pointer" : "inherit",
      }}
      onClick={maxHeight ? handleClick : undefined}
    >
      {expanded ? text : truncatedText}
      {children}
    </p>
  );
}
