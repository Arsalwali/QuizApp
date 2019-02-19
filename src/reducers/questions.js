import { GET_QUESTION_SUCCESS } from "../actionTypes/questions";

const INITIAL_STATE = {
  response: null,
  questionList: [],
  isLoaded: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_QUESTION_SUCCESS:
      return { ...state, isLoaded: true, questionList: action.payload };
    default:
      return state;
  }
}