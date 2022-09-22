import classes from "./Modal.module.css";
import { Link } from "react-router-dom";

const Modal = (props) => {
  const answerRate = (props.correct / props.questions) * 100;
  return (
    <div className={classes.backdrop}>
      <section className={classes.modal}>
        <h1>Congrats!</h1>
        <h3>You Scored {answerRate} % of questions correctly</h3>
        <Link to={"/"}>
          <button>Play Again</button>
        </Link>
      </section>
    </div>
  );
};

export default Modal;
