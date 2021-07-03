import { SET_CLUB, START_FETCH, END_FETCH } from "../actions/types";

const initalState = {
  clubs: [],
  loading: true,
};

export default function clubReducer(state = initalState, action) {
  switch (action.type) {
    case SET_CLUB:
      return {
        ...state,
        clubs: action.payload,
      };
    case START_FETCH:
      return {
        ...state,
        loading: true,
      };
    case END_FETCH:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
