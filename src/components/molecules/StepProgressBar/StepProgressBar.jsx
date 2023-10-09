import { ProgressBar, Step } from "react-step-progress-bar";
import { useState } from "react";
import "./StepProgressBar.css";
import { useSelector } from "react-redux";

export default function StepProgressBar() {
  const language = useSelector((state) => state.language);
  const orderStatus = useSelector((state)=> state.orderStatus);

  const stepPercentage = {
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
            <div
              className={`indexedStep ${accomplished && "accomplished"}`}
            >
              {index + 1}
            </div>
            <span className="stepText">
              {language.rating_progressBar_received}
            </span>
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div className="customStep">
            <div
              className={`indexedStep ${accomplished && "accomplished"}`}
            >
              {index + 1}
            </div>
            <span className="stepText">
              {language.rating_progressBar_preparing}
            </span>
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div className="customStep">
            <div
              className={`indexedStep ${accomplished && "accomplished"}`}
            >
              {index + 1}
            </div>
            <span className="stepText">
              {" "}
              {language.rating_progressBar_ready}
            </span>
          </div>
        )}
      </Step>
    </ProgressBar>
  );
}
