import React from "react";
import { LoginFormData } from "./login.vm";

interface Props {
  onLogin: (data: LoginFormData) => void;
}

export const Login: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const [formData, setFormData] = React.useState<LoginFormData>({
    username: "",
    password: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(formData);
  };

  const handleChange =
    (field: keyof LoginFormData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label htmlFor="userName">Name:</label>
      <input
        type="text"
        name="userName"
        id="userName"
        value={formData.username}
        onChange={handleChange("username")} // onChange={handleChange("userName")}  == onChange={(e) =>handleChange("userName")(e)}
        placeholder="Please, insert your name"
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={formData.password}
        onChange={handleChange("password")}
        placeholder="Please, insert your password"
      />
      <button type="submit">Enter</button>
    </form>
  );
};
