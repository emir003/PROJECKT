import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  let [loginForm, setLoginForm] = useState({});

  let handleChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  let loginHandler = (e) => {
    e.preventDefault();

    let request = {
      method: "POST",
      body: JSON.stringify(loginForm),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("https://azizdavletov.pythonanywhere.com/user/login/", request)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.key);
        window.location.href = "/";
      });
  };

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Login</h4>
        </div>
        <div className="card-body">
          <form onSubmit={loginHandler}>
            <div className="mb-3">
              <label for="login" class="form-label">
                Login
              </label>
              <input
                type="text"
                class="form-control"
                id="login"
                name="username"
                onChange={handleChange}
                value={loginForm.username}
              />
            </div>

            <div className="mb-3">
              <label for="password" class="form-label">
                Passwrod
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                onChange={handleChange}
                value={loginForm.password}
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="card-footer">
          Have no account? <Link to="./register">Register</Link>
        </div>
      </div>
    </>
  );
}
