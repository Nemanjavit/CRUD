import React, { useState } from "react";
import { useHistory } from "react-router";
import { BiLockAlt } from "react-icons/bi";
import { logIn } from "../Api/Api";

function LogIn({ toggleClass }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const history = useHistory();
  const updateField = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    logIn(user).then((res) => {
      localStorage.setItem("token", res.data.accessToken);
      history.push("/dashboard");
    });
  };
  return (
    <form onSubmit={submitHandler} id="loginForm" className="form form--login">
      <BiLockAlt className="form__lock__icon" />
      <h3>Log In</h3>
      <div className="formRow">
        <input
          autoComplete="off"
          className="formRow__input"
          onChange={updateField}
          name="email"
          value={user.email}
          type="text"
        />
        <label className="formRow__label" htmlFor="email">
          <span className="formRow__label__text">Email</span>
        </label>
      </div>
      <div className="formRow">
        <input
          autoComplete="off"
          className="formRow__input"
          onChange={updateField}
          name="password"
          value={user.password}
          type="password"
        />
        <label className="formRow__label" htmlFor="password">
          <span className="formRow__label__text">Password</span>
        </label>
      </div>
      <button
        type="button"
        className="form__link"
        onClick={() => toggleClass()}
      >
        Register new user
      </button>
      <button className="form__submit__button" type="submit">
        Log In
      </button>
    </form>
  );
}

export default LogIn;
