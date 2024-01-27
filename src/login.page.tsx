import React from "react";

interface UserFormDataModel {
  userName: string
  password: string
}

export const LoginPage: React.FC = () => {
  const [userFormData, setUserFormData] = React.useState<UserFormDataModel>({
    userName: "",
    password: "",
  });

  const handleChange = (field: keyof UserFormDataModel  ,e: React.ChangeEvent<HTMLInputElement>) => {
    setUserFormData({
      ...userFormData,
      [field]: e.target.value,
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
        onChange={(e) => handleChange('userName', e)}
        placeholder="Please, insert your name"
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={userFormData.password}
        onChange={(e) => handleChange('password', e)}
        placeholder="Please, insert your password"
      />
      <button>Enter</button>
    </>
  );
};
