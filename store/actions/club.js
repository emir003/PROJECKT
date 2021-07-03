import { SET_CLUB, START_FETCH, END_FETCH } from "./types";

export function setClub(data) {
  return {
    type: SET_CLUB,
    payload: data,
  };
}

export function fetchClub(id) {
  return function (dispatch) {
    dispatch({type: START_FETCH});
    fetch("https://azizdavletov.pythonanywhere.com/club/computer_clubs/" + id)
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        dispatch(setClub(data));
        dispatch({type: END_FETCH});
      });
  };
}

export function fetchGames(id) {
  return function (dispatch) {
    fetch("https://azizdavletov.pythonanywhere.com/club/computer_clubs/")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        dispatch(setClub(data));
      });
  };
}
