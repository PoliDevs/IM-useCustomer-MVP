import { useState } from "react";
import { ReactComponent as ImenuLogo } from "../../../assets/ImenuHorizontal.svg";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import logo from "../../../assets/ReviewIcon.png";
import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Stars from "../../atoms/Stars/Stars";
import Confetti from "react-confetti";
import ReviewTextArea from "../../atoms/ReviewTextArea/ReviewTextArea";
import useWindowSize from "react-use/lib/useWindowSize";
import s from "./Review.module.scss";
import FeedbackButton from "../../atoms/FeedbackButton/FeedbackButton";

export default function Review() {
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);
  const {width, height} = useWindowSize()

  const handleSent = ()=> {
    //! Crear accion que envie el feedback al backend
    setSent(true);
  }


  return (
    <section className={s.reviewContainer}>
      <header className={s.reviewHeader}>
        {!sent && (
          <Confetti numberOfPieces={200} height={(height / 2)} width={width} />
        )}
        <img src={logo} className={s.logo} />
        <div>
        <HugeTitle text={"Burger Store"} centered={true} />
        <SubTitle text={"está preparando tu pedido"} />
        </div>
      </header>
      <article className={s.article}>
        <ImenuLogo style={{ margin: "0 auto", height: "36px" }} />
        <SubTitle text={"¿Como te fue con la app?"} />
        <Stars />
        {
          //? Conditional render if not sent
          sent ? (
            <div style={{ marginTop: "50px" }}>
              <HugeTitle text={"¡Gracias!"} centered={true} />
              <Paragraph text={"Tu opinion nos ayuda a crecer"} />
            </div>
          ) : (
            <>
              <div className={s.textAreaHeader}>
                <label className={s.label} htmlFor="comment">
                  {"Danos tu opinión"}
                </label>
                <Paragraph text={`${comment.length}/240`} />
              </div>
              <ReviewTextArea
                name="comment"
                comment={comment}
                setComment={setComment}
                maxLength={240}
                placeholder={"¿Te gusta nuestra forma de hacer las cosas?"}
              />
              <FeedbackButton text={"Enviar"} handleSent={handleSent} />
            </>
          )
        }
        <div style={{ margin: "auto 0 15px 0" }}>
          <LinkButton
            text={"volver a pedir"}
            path={"/home"}
            centered={true}
            newHeight={"61px"}
            newFz={"21px"}
            
          />
        </div>
      </article>
    </section>
  );
}
