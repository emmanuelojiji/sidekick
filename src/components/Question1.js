import Question from "../Question";
import "./Question1.scss";

const Question1 = ({ onClick }) => {
  return (
    <div className="question-container">
      <Question
        question="Your nearest delivery location is Frankfurt 🇩🇪"
        desc="Is this where you’d like your parts delivered?"
      />
      <button onClick={onClick}>Next</button>
    </div>
  );
};

export default Question1;
