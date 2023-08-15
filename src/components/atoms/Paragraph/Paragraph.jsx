import s from "./Paragraph.module.scss";

export default function Paragraph({text, children, bold, centered}) {
  return (
    <p className={`${s.paragraph} ${bold ? s.bold : ""} ${centered ? s.centered : ""}`}>{text}{children}</p>
  )
}
