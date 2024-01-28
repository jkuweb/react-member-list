import React from "react";
import { useNavigate } from "react-router-dom";

interface UserFormDataModel {
  userName: string;
  password: string;
}

export const LoginPage: React.FC = () => {
  const [userFormData, setUserFormData] = React.useState<UserFormDataModel>({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange =
    (field: keyof UserFormDataModel) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserFormData({
        ...userFormData,
        [field]: e.target.value,
      });
    };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    if (userFormData.userName === "admin" && userFormData.password === "test") {
      navigate("/list");
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label htmlFor="userName">Name:</label>
      <input
        type="text"
        name="userName"
        id="userName"
        value={userFormData.userName}
        onChange={handleChange("userName")} // onChange={handleChange("userName")}  == onChange={(e) =>handleChange("userName")(e)}
        placeholder="Please, insert your name"
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={userFormData.password}
        onChange={handleChange("password")}
        placeholder="Please, insert your password"
      />
      <button type="submit">Enter</button>
    </form>
    </>
  );
};
