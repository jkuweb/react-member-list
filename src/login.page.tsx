import React from "react";

export const LoginPage: React.FC = () => {
  const [userFormData, setUserFormData] = React.useState({
    userName: "",
    password: "",
  });

  const handleChangeUserName = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUserFormData({
      ...userFormData,
      userName: e.target.value,
    });
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserFormData({
      ...userFormData,
      password: e.target.value,
    });
  };

  return (
    <>
      <h1>Login</h1>
      <label htmlFor="userName">Name:</label>
      <input
        type="text"
        id="userName"
        value={userFormData.userName}
        onChange={handleChangeUserName}
        placeholder="Please, insert your name"
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={userFormData.password}
        onChange={handleChangePassword}
        placeholder="Please, insert your password"
      />
      <button>Enter</button>
    </>
  );
};
