import React, { useState } from "react";
import "./multipleInputForm.css";

const MultipleInputForm = () => {
  const [userRegister, setUserRegister] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userRegister.username);
    console.log(userRegister.email);
    console.log(userRegister.phone);
    console.log(userRegister.password);
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegister({ ...userRegister, [name]: value });
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            value={userRegister.username}
            onChange={handleInput}
            id="username"
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            value={userRegister.email}
            onChange={handleInput}
            id="email"
          />
        </div>
        <div>
          <label htmlFor="phone">phone</label>
          <input
            type="text"
            name="phone"
            value={userRegister.phone}
            onChange={handleInput}
            id="phone"
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="text"
            name="password"
            value={userRegister.password}
            onChange={handleInput}
            id="password"
          />
        </div>
        <button type="submit">register</button>
      </form>
    </>
  );
};

export default MultipleInputForm;
