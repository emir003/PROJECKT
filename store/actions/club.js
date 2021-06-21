import { SET_CLUB } from "./types";

export function setClub(data) {
  return {
    type: SET_CLUB,
    payload: data,
  };
}

export function fetchClub() {
  return function (dispatch) {
    fetch("http://azizdavletov.pythonanywhere.com/club/table")
      .then((data) => data.json())
      .then((data) => {
        dispatch(setClub(data));
      });
  };
}
