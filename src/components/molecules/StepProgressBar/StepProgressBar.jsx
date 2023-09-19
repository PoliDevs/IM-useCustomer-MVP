import { ProgressBar, Step } from "react-step-progress-bar";
import { useState } from "react";
import "./StepProgressBar.css";

export default function StepProgressBar() {
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
            <span className="stepText">Pedido recibido</span>
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
            <span className="stepText">Preparando pedido</span>
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
            <span className="stepText">¡Tu pedido esta listo!</span>
          </div>
        )}
      </Step>
    </ProgressBar>
  );}
