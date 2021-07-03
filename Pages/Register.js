import { useState } from "react";

export default function Login() {
  let [regForm, setRegForm] = useState({});

  let handleChange = (e) => {
    setRegForm({
      ...regForm,
      [e.target.name]: e.target.value,
    });
  };

  let registerHandler = (e) => {
    e.preventDefault();

    let request = {
      method: "POST",
      body: JSON.stringify(regForm),
      header: {
        "Content-Type": "application/json",
      },
    };

    fetch("https://azizdavletov.pythonanywhere.com/user/register/", request)
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        localStorage.setItem("token",data.key);
      }
      
      );
  };

  return (
    <>
      <div className="card">
        <h4 className="title">Register</h4>
        <div className="card-body">
          <form onSubmit={registerHandler}>
            <div className="mb-3">
              <label for="login" class="form-label">
                Login
              </label>
              <input
                type="text"
                class="form-control"
                id="login"
                name="login"
                onChange={handleChange}
                value={regForm.login}
              />
            </div>

            <div className="mb-3">
              <label for="firstname" class="form-label">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                id="firstname"
                name="firstname"
                onChange={handleChange}
                value={regForm.firstname}
              />
            </div>

            <div className="mb-3">
              <label for="lastname" class="form-label">
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                id="lastname"
                name="lastname"
                onChange={handleChange}
                value={regForm.lastname}
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
                value={regForm.password}
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
