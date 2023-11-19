import Question from "../Question";
import "./Question2.scss";

const Question2 = ({onClick}) => {
  return (
    <div className="question-container">
       <Question
        question="Question Two"
        desc="Description here"
      />
      <button onClick={onClick}>Next</button>
    </div>
  );
};

export default Question2;
