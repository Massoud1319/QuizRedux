import classes from "./QuestionForm.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setQuestions } from "../redux/actions/actions";

const categories = {
  sports: "21",
  history: "23",
  politics: "24",
};

const QuestionsForm = (props) => {
  const dispatch = useDispatch();
  const [enteredCategory, setEnteredCategory] = useState("history");
  const [enteredDifficulty, setEnteredDifficulty] = useState("easy");
  const [enteredNumberOfQuestions, setEnteredNumberOfQuestions] = useState(10);

  const numberOfQuestionsHandler = (ref) => {
    setEnteredNumberOfQuestions(ref.target.value);
  };
  const categorychangeHandler = (ref) => {
    setEnteredCategory(ref.target.value);
  };

  const diffcultychangeHandler = (ref) => {
    setEnteredDifficulty(ref.target.value);
  };

  const navigate = useNavigate();

  const fetchQuestions = async () => {
    const response = await axios
      .get(
        `https://opentdb.com/api.php?amount=${enteredNumberOfQuestions}&difficulty=${enteredDifficulty}&category=${categories[enteredCategory]}&type=multiple`
      )
      .catch((err) => {
        console.log("error founded is", err);
      });
    dispatch(setQuestions(response.data.results));
  };
  const submitHandler = async () => {
    await fetchQuestions();
    navigate("/questions");
  };

  return (
    <div className={classes.parent}>
      <form className={classes.App}>
        <h1> Setup Quiz </h1>
        <div className={classes.labelInput}>
          <label htmlFor="questionsNumber">Number Of Questions</label>
          <input
            type="number"
            name="number"
            min="1"
            max="50"
            Value="10"
            step="1"
            id="questionsNumber"
            onChange={numberOfQuestionsHandler}
          />
        </div>
        <div className={classes.labelInput}>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            onChange={categorychangeHandler}
            value={enteredCategory}
          >
            <option value="history">history</option>
            <option value="sports">sports</option>
            <option value="politics">politics</option>
          </select>
        </div>
        <div className={classes.labelInput}>
          <label htmlFor="difficulty">Select Difficulty</label>
          <select
            id="difficulty"
            onChange={diffcultychangeHandler}
            value={enteredDifficulty}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        <button type="button" onClick={submitHandler}>
          Start
        </button>
      </form>
    </div>
  );
};

export default QuestionsForm;
