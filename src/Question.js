import "./Question.scss";

const Question = ({ question, desc }) => {
  return (
    <div className="question-wrap">
      <h2 className="question">{question}</h2>
      <p className="question-desc">{desc}</p>
    </div>
  );
};

export default Question;
