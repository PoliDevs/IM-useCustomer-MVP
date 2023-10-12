/* eslint-disable react/prop-types */
import s from './SmallText.module.scss';

export default function SmallText({ text, children, bold, noMargin, secundary, alignment, scrollable, smaller, standarSpacing }) {
  return (
    <h6
      className={`${s.small} ${secundary && s.secundary} ${
        alignment === "left" ? s.left : ""
      } ${scrollable && s.scrollable} ${children && s.align} ${
        smaller && s.smaller
      } ${bold && s.bold} ${noMargin && s.noMargin} ${standarSpacing && s.standarSpacing}`}
    >
      {scrollable
        ? text
        : (text.length > 110)
        ? `${text.substring(0, 110)}...`
        : text}
    </h6>
  );
}
