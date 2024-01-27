import React from "react";

export const LoginPage: React.FC = () => {
  const [userFormData, setUserFormData] = React.useState({
    userName: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserFormData({
      ...userFormData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Login</h1>
      <label htmlFor="userName">Name:</label>
      <input
        type="text"
        name="userName"
        id="userName"
        value={userFormData.userName}
        onChange={handleChange}
        placeholder="Please, insert your name"
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={userFormData.password}
        onChange={handleChange}
        placeholder="Please, insert your password"
      />
      <button>Enter</button>
    </>
  );
};
