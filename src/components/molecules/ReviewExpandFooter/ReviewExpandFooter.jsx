import React, { useState } from 'react'
import { useRating } from '../../../utils/Functions';
import { sendReview } from '../../../redux/actions';
import { useSelector } from 'react-redux';
import { ReactComponent as ArrowDown } from "../../../assets/ArrowDown.svg";
import { ReactComponent as ArrowUp } from "../../../assets/ArrowUp.svg";
import iMenuFull from '../../../assets/logo-imenu-full.png';
import LinkButton from '../../atoms/LinkButton/LinkButton';
import SubTitle from '../../atoms/SubTitle/SubTitle';
import Stars from '../../atoms/Stars/Stars';
import HugeTitle from '../../atoms/HugeTitle/HugeTitle';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import ReviewTextArea from '../../atoms/ReviewTextArea/ReviewTextArea';
import FeedbackButton from '../../atoms/FeedbackButton/FeedbackButton';
import s from './ReviewExpandFooter.module.scss';
import { useTranslation } from 'react-i18next';
export default function ReviewExpandFooter() {
   const language = useSelector((state) => state.language);
   const commerce = useSelector((state) => state.commerce);
   const [openFooter, setOpenFooter] = useState(false)
   const [comment, setComment] = useState("");
   const [sent, setSent] = useState(false);
     const [t, i18n] = useTranslation(["global"]);

    const { starsArray, stars, handleStars } = useRating();

    const handleSent = () => {
      const review = {
        rating: stars,
        feedback: comment,
      };
      sendReview(review, commerce.id);
      setSent(true);
    };

    const handleFooter = () => {
      setOpenFooter(!openFooter);
    }

  return (
    <footer className={s.footerExpandContainer}>
      <ArrowDown
        className={`${s.arrowDown} ${openFooter && s.visible}`}
        onClick={handleFooter}
      />
      <ArrowUp
        className={`${s.arrowUp} ${!openFooter && s.visible}`}
        onClick={handleFooter}
      />
      <img
        src={iMenuFull}
        className={s.imemuLogo}
        width={"70px"}
        style={{ margin: "0 auto" }}
      />
      <SubTitle text={t("rating.reviewQuestion")} />
      <div className={`${s.contentContainer} ${openFooter && s.visible}`}>
        <Stars
          stars={stars}
          starsArray={starsArray}
          handleStars={handleStars}
        />
        {sent ? (
          <div style={{ padding: "20px" }}>
            <HugeTitle text={t("rating.thanks")} centered={true} />
            <Paragraph text={t("rating.yourOpinion")} />
          </div>
        ) : (
          <>
            <div className={s.textAreaHeader}>
              <label className={s.label} htmlFor="comment">
                {t("rating.reviewLabel")}
              </label>
              <Paragraph text={`${comment.length}/240`} />
            </div>
            <ReviewTextArea
              name="comment"
              comment={comment}
              setComment={setComment}
              maxLength={240}
              placeholder={t("rating.reviewPlaceholder")}
            />
            <FeedbackButton text={t("rating.send")} handleSent={handleSent} />
          </>
        )}
      </div>
      <div className={s.buttonWrapper}>
        <LinkButton
          text={t("rating.backButton")}
          path={"/home"}
          centered={true}
          // newHeight={"61px"}
          // newFz={"21px"}
        />
      </div>
    </footer>
  );
}
