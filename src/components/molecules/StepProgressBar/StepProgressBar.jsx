import { ProgressBar, Step } from "react-step-progress-bar";
import { useState } from "react";
import "./StepProgressBar.css";
import { useSelector } from "react-redux";

export default function StepProgressBar() {
  const language = useSelector((state)=> state.language);
  const [page, setPage] = useState(1);

  const stepPercentage = {
    1: 30,
    2: 75,
    3: 100
  }

  const nextPageNumber = (pageNumber) => {
    setPage(pageNumber);
  }

  return (
    <ProgressBar percent={stepPercentage[page]}>
      <Step>
        {({ accomplished, index }) => (
          <div className="customStep">
            <div
              className={`indexedStep ${accomplished && "accomplished"}`}
              onClick={() => nextPageNumber(1)}
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
              onClick={() => nextPageNumber(2)}
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
              onClick={() => nextPageNumber(3)}
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
  );}
