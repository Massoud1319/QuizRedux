import classes from "./Questions.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const Question = (props) => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const questions = useSelector((state) => state.allQuestions.questions);

  useEffect(() => {
    if (questions.length === 0) {
      navigate("/");
    }
  }, []);

  if (!questions.length) {
    return null;
  }
  const currentQuestion = questions[index];
  const { incorrect_answers, correct_answer, question } = currentQuestion;

  let answers = [...incorrect_answers];

  const randomIndex = Math.floor(Math.random() * 4);

  if (randomIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[randomIndex]);
    answers[randomIndex] = correct_answer;
  }

  const nextQuestionHandler = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index === questions.length - 1) {
        setIsModalOpen(true);
        return 0;
      } else {
        return index;
      }
    });
  };
  const checkAnswerHandler = (isCorrectAnswer) => {
    if (isCorrectAnswer) {
      setCorrect((oldState) => oldState + 1);
    }
    nextQuestionHandler();
  };
  return (
    <section className={classes.questionContainer}>
      <div className={classes.Questions}>
        <span>
          Correct Answers :{correct}/{index}
        </span>
        <div className={classes.quizContainer}>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          {answers.map((answer, index) => {
            return (
              <button
                key={index}
                className={classes.answerBtn}
                onClick={() => checkAnswerHandler(correct_answer === answer)}
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            );
          })}
        </div>
        <button
          className={classes.nextQuestionButton}
          onClick={nextQuestionHandler}
        >
          Next Question
        </button>
      </div>
      {isModalOpen && <Modal correct={correct} questions={questions.length} />}
    </section>
  );
};
export default Question;
