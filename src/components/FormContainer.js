import { useEffect, useState } from "react";
import Question from "../Question";
import "./FormContainer.scss";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";

const FormContainer = () => {
  const [progress, setProgress] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(-1);

  useEffect(() => {
    setProgress(progress + 20);
    setCurrentQuestion(0);
  }, []);

  const handleNextQuestion = () => {
    setProgress(progress + 20);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="form-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <div className="form-container-blur"></div>
      <div
        className="form-carousel"
        style={{ transform: `translateY(-${currentQuestion * 100}%)` }}
      >
        <Question1 onClick={() => handleNextQuestion()} />
        <Question2 onClick={() => handleNextQuestion()} />
        <Question3 onClick={() => handleNextQuestion()} />
        <Question4 onClick={() => handleNextQuestion()} />
      </div>
    </div>
  );
};

export default FormContainer;
