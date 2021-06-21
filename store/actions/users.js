export function registerFetch(body) {
  return function (dispatch) {
    let request = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch("https://azizdavletov.pythonanywhere.com/user/register/", request)
      .then((r) => r.json())
      .then((data) => console.log(data));
  };
}
