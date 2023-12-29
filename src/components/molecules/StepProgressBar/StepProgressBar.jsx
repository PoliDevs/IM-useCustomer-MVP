import { ProgressBar, Step } from "react-step-progress-bar";
import { useState } from "react";
import "./StepProgressBar.css";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function StepProgressBar() {
  const language = useSelector((state) => state.language);
  const orderStatus = useSelector((state)=> state.orderStatus);
  const [t, i18n] = useTranslation(["global"]);
  // orderStatus === "delivered" && localStorage.removeItem("CSMO_ID")

  const stepPercentage = {
    '': 25,
    orderPlaced: 25,
    orderInPreparation: 75,
    orderReady: 100,
    delivered: 100
  };

  return (
    <ProgressBar percent={stepPercentage[orderStatus]}>
      <Step>
        {({ accomplished, index }) => (
          <div className="customStep">
            <div className={`indexedStep ${accomplished && "accomplished"}`}>
              {index + 1}
            </div>
            <span className="stepText">{t("rating.progressBar_received")}</span>
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div className="customStep">
            <div className={`indexedStep ${accomplished && "accomplished"}`}>
              {index + 1}
            </div>
            <span className="stepText">
              {t("rating.progressBar_preparing")}
            </span>
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div className="customStep">
            <div className={`indexedStep ${accomplished && "accomplished"}`}>
              {index + 1}
            </div>
            <span className="stepText">
              {" "}
              {t("rating.progressBar_ready")}
            </span>
          </div>
        )}
      </Step>
    </ProgressBar>
  );
}
