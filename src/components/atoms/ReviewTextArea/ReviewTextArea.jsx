import s from "./ReviewTextArea.module.scss";
export default function ReviewTextArea({comment, setComment, maxLength, placeholder}) {
  return (
    <textarea
      className={s.feedback}
      value={comment}
      rows="5"
      cols="25"
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={(e) => setComment(e.target.value)}
    ></textarea>
  );
}
