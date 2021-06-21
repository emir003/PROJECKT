import React from "react";
import { useState } from "react";
import { registerFetch } from "../store/actions/users";
import { useDispatch } from "react-redux"


export default function Reg() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  let [registerForm, setRegisterForm] = useState({});
  let dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    registerFetch()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="user-name"
          placeholder="user-name"
          onChange={(e) => setUserName(e.target.value)}
          value={registerForm.userName}
        ></input>
        <input
          className="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={registerForm.password}
        ></input>
        <input
          className="firstName"
          placeholder="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          value={registerForm.firstName}
        ></input>
        <input
          className="lastName"
          placeholder="lastName"
          onChange={(e) => setLastName(e.target.value)}
          value={registerForm.lastName}
        ></input>
        <button type="submit">
          register
        </button>
      </form>
    </>
  );
}
