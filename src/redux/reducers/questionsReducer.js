import { actionTypes } from "../actions/actionTypes";

const intialState = {
  questions: [],
  currentQuestionIndex: -1,
};

const questionsReducer = (state = intialState, action) => {
  if (action.type === actionTypes.SET_QUESTIONS) {
    console.log(action);
    return { ...state, questions: action.payload, currentQuestionIndex: 0 };
  }
  return state;
};

export default questionsReducer;
