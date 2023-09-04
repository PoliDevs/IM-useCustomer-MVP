import s from "./FeedbackButton.module.scss";

export default function FeedbackButton({text, handleSent}) {
  return (
    <button className={s.feedbackButton} onClick={handleSent}>{text}</button>
  )
}
