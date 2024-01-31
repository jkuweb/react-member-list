import React from "react";
import { LoginFormData, LoginFormErrors, createEmptyLoginFormData, createEmptyLoginFormErrors } from "./login.vm";
import { formLoginValidation } from "./login.validation";

interface Props {
  onLogin: (data: LoginFormData) => void;
}

export const Login: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const [formData, setFormData] = React.useState<LoginFormData>(createEmptyLoginFormData);
  const [errors, setErrors] = React.useState<LoginFormErrors>(createEmptyLoginFormErrors)

  const hasErrors = Object.keys(errors).some((x) => errors[x] !== '')
console.log(errors)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formLoginValidation.validateForm(formData).then((validationResult) => {
      console.log(errors)
      if(validationResult.succeeded) {
        onLogin(formData);
      } 
    })
  };

  const handleChange =
    (field: keyof LoginFormData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      formLoginValidation.validateField(field, e.target.value)
        .then((validationResult) => {
          setErrors({
            ...errors,
            [field]: validationResult.message
          })
        })
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div style={{display: "flex", flexDirection:"column", gap:16 }}>
      <label htmlFor="userName">Name:</label>
      <input
        type="text"
        name="userName"
        id="userName"
        value={formData.username}
        onChange={handleChange("username")} // onChange={handleChange("userName")}  == onChange={(e) =>handleChange("userName")(e)}
        placeholder="Please, insert your name"
        required
      />
      {errors.username &&<div>{errors.username}</div>}
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={formData.password}
        onChange={handleChange("password")}
        placeholder="Please, insert your password"
        required
      />
      {errors.password &&<div>{errors.password}</div>}
      
      <button type="submit" disabled={hasErrors}>Enter</button>
      </div>
    </form>
  );
};
