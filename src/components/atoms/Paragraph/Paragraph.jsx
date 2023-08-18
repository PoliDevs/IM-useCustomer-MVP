import s from "./Paragraph.module.scss";

export default function Paragraph({text, children, bold, centered, secundary}) {
  return (
    <p
      className={`${s.paragraph} ${bold ? s.bold : ""} ${
        centered ? s.centered : ""
      } ${secundary ? s.secundary : ""}`}
    >
      {text}
      {children}
    </p>
  );
}
