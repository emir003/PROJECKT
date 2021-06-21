import { SET_CLUB } from "../actions/types";

const initalState = {
  clubs: [],
};

export default function clubReducer(state = initalState, action) {
  switch (action.type) {
    case SET_CLUB:
      return {
        ...state,
        clubs: action.payload,
      };

    default:
      return state;
  }
}
