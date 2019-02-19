import { GET_QUESTION, GET_QUESTION_SUCCESS, START_QUIZ, END_QUIZ } from "../actionTypes/questions";

export const getQuestion = () => ({ type: GET_QUESTION });
export const getQuestionSuccess = (payload) => ({
  type: GET_QUESTION_SUCCESS,
  payload,
});
export const getQuestionFailure = () => ({ type: GET_QUESTION_FAILURE });
