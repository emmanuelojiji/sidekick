import Question from "../Question";
import "./Question4.scss";

const Question4 = ({ onClick }) => {
  return (
    <div className="question-container">
      <Question question="Question Four" desc="Description here" />
      <button onClick={onClick}>Next</button>
    </div>
  );
};

export default Question4;
