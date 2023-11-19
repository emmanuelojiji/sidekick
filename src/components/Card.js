import "./Card.scss";

const Card = ({ title, desc, isActive, onClick, cardNumber }) => {
  return (
    <div className={`Card ${isActive} ${cardNumber}`} onClick={onClick}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
