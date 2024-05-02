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
  // const truncatedText =
  //   text && text.length > 110 ? `${text.substring(0, 110)}...` : text;

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
      }   `}
      style={{
        color: color && color,
      }}
    >
      {text}
      {children}
    </p>
  );
}
