import {
  clearStatus,
  getOrderStatus,
  removerCart,
  sendReview,
} from "../../../redux/actions";
import { ReactComponent as ArrowRight } from "../../../assets/ArrowLongRight.svg";
import { ReactComponent as ImenuLogo } from "../../../assets/ImenuHorizontal.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postMpOrder } from "../../../redux/actions";
import { useRating } from "../../../utils/Functions";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import StepProgressBar from "../../molecules/StepProgressBar/StepProgressBar";
import CopyOrderCode from "../../molecules/CopyOrderCode/CopyOrderCode";
import ReviewTextArea from "../../atoms/ReviewTextArea/ReviewTextArea";
import FeedbackButton from "../../atoms/FeedbackButton/FeedbackButton";
import iMenuFull from "../../../assets/logo-imenu-full.png";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import useWindowSize from "react-use/lib/useWindowSize";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import logo from "../../../assets/ReviewIcon.png";
import Stars from "../../atoms/Stars/Stars";
import Confetti from "react-confetti";
import s from "./Review.module.scss";

export default function Review() {
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);
  const [duration, setDuration] = useState(true);
  // const [loading, setLoading] = useState(true);
  const userEmail = useSelector((state) => state.user.email);
  const language = useSelector((state) => state.language);
  const commerceInfo = useSelector((state) => state.commerce);
  const orderStatus = useSelector((state) => state.orderStatus);
  const orderId = useSelector((state) => state.orderId);
  const { width, height } = useWindowSize();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const currentURL = window.location.href;
  const url = new URL(currentURL);
  // Obtén el valor de "status" de la URL actual
  const status = url.searchParams.get("status");
  const payment = url.searchParams.get("payment_id");
  const merchantOrder = url.searchParams.get("merchant_order_id");
  const externalReference = url.searchParams.get("external_reference");
  const paymentType = url.searchParams.get("payment_type");
  const mpInfo = {
    payment,
    merchantOrder,
    externalReference,
    paymentType,
  };
  if (id) localStorage.setItem("CSMO_ID", id);
  const [t, i18n] = useTranslation(["global"]);

  const { starsArray, stars, handleStars } = useRating();

  const handleSent = () => {
    const review = {
      rating: stars,
      feedback: comment,
    };
    sendReview(review, commerceInfo.id);
    setSent(true);
  };

  setTimeout(() => {
    setDuration(false);
  }, 6000);

  useEffect(() => {
    if (status && status === "rejected") {
      navigate("/home");
      localStorage.removeItem("mporder");
    }
    if (status && status === "approved") {
      localStorage.getItem("mporder")
        ? postMpOrder(
            JSON.parse(localStorage.getItem("mporder")).order,
            JSON.parse(localStorage.getItem("mporder")).methodId,
            mpInfo
          )
        : "";
      dispatch(removerCart());
    }
  }, [dispatch, mpInfo, navigate, status]);

  useEffect(() => {
    dispatch(clearStatus());
    const updateStatus = async () => {
      orderId && (await dispatch(getOrderStatus(orderId, commerceInfo.id)));
    };
    updateStatus();
  }, [orderId, commerceInfo.id, dispatch]);

  return (
    <section className={s.reviewContainer}>
      <>
        <header className={s.reviewHeader}>
          {duration && (
            <Confetti numberOfPieces={200} height={height / 2} width={width} />
          )}
          <img src={logo} className={s.logo} />
          <div>
            <HugeTitle text={commerceInfo.name} centered={true} review={true} />
            <SubTitle text={t("rating.preparingOrder")} review={true} />
          </div>
          {/* <div className={s.progressBar}> */}
          <StepProgressBar status={orderStatus} />
          {userEmail ? (
            <Link
              to="/myorders"
              className={s.myOrdersLink}
              // style={{
              //   textDecoration: "underline",
              //   color: "#2b2b2b",
              //   marginTop: "30px",
              // }}
            >
              <Paragraph text={t("rating.viewOrders")}>
                <ArrowRight style={{ width: "30px", height: "20px" }} />
              </Paragraph>
            </Link>
          ) : (
            <div style={{ marginTop: "15px" }}>
              {localStorage.getItem("CSMO") && (
                <Paragraph text={t("rating.order")} underline={true}>
                  <span
                    className="copyText"
                    style={{
                      fontWeight: "bold",
                      margin: "0 4px",
                      textDecoration: "underline",
                    }}
                  >
                    {localStorage.getItem("CSMO")}
                  </span>
                  <CopyOrderCode />
                </Paragraph>
              )}
            </div>
          )}
          {/* </div> */}
        </header>
        <article className={s.article}>
          {/* <ImenuLogo style={{ margin: "0 auto", height: "36px" }} /> */}
          <img
            src={iMenuFull}
            className={s.imemuLogo}
            width={"70px"}
            style={{ margin: "0 auto" }}
          />
          <SubTitle text={t("rating.reviewQuestion")} />
          <Stars
            stars={stars}
            starsArray={starsArray}
            handleStars={handleStars}
          />
          {sent ? (
            <div style={{ marginTop: "50px" }}>
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
          <div className={s.buttonWrapper}>
            <LinkButton
              text={t("rating.backButton")}
              path={"/home"}
              onClick={() => {
                localStorage.removeItem("cart");
              }}
              centered={true}
              // newHeight={"61px"}
              // newFz={"21px"}
            />
          </div>
        </article>
      </>
    </section>
  );
}
