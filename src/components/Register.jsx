import React, { useState } from "react";
import { Col, Row } from "react-grid-system";
import { BiLockAlt } from "react-icons/bi";
import { registerUser } from "../Api/Api";

function Register({ toggleClass }) {
  const [newUser, setnewUser] = useState({ name: "", email: "", password: "" });

  const upadateField = (e) => {
    setnewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    registerUser(newUser).then((res) => {
      toggleClass();
    });
  };

  return (
    <form
      className="form form--register"
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <BiLockAlt className="form__lock__icon" />
      <h3>Register</h3>
      <div className="formRow">
        <input
          autoComplete="off"
          className="formRow__input"
          onChange={upadateField}
          name="name"
          id="name"
          value={newUser.name}
          type="search"
        />
        <label className="formRow__label" htmlFor="name">
          <span className="formRow__label__text">Name</span>
        </label>
      </div>
      <div className="formRow">
        <input
          autoComplete="off"
          className="formRow__input"
          onChange={upadateField}
          id="email"
          name="email"
          value={newUser.email}
          type="search"
        />
        <label className="formRow__label" htmlFor="email">
          <span className="formRow__label__text">Email</span>
        </label>
      </div>
      <div className="formRow">
        <input
          autoComplete="off"
          className="formRow__input"
          onChange={upadateField}
          id="password"
          name="password"
          value={newUser.password}
          type="password"
        />
        <label className="formRow__label" htmlFor="password">
          <span className="formRow__label__text">Password</span>
        </label>
      </div>
      <button
        className="form__link"
        type="button"
        onClick={() => toggleClass()}
      >
        Already have an account? Sign in{" "}
      </button>
      <button className="form__submit__button" type="submit">
        Register
      </button>
    </form>
  );
}

export default Register;
