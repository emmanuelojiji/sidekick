import Question from "../Question";
import "./Question3.scss";

const Question3 = ({onClick}) => {
  return (
    <div className="question-container">
       <Question
        question="Question Three"
        desc="Description here"
      />
      <button onClick={onClick}>Next</button>
    </div>
  );
};

export default Question3;
