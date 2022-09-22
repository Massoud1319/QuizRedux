import { actionTypes } from "./actionTypes";

export const setQuestions = (questions) => {
  return {
    type: actionTypes.SET_QUESTIONS,
    payload: questions,
  };
};
