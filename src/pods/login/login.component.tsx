import React from "react";
import { Card, CardHeader, CardContent } from "@/common/components/card";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from "@/common/components/forms";
import { Button } from "@/common/components/button";
import {
  LoginFormData,
  LoginFormErrors,
  createEmptyLoginFormData,
  createEmptyLoginFormErrors,
} from "./login.vm";
import { formLoginValidation } from "./login.validation";

interface Props {
  onLogin: (data: LoginFormData) => void;
}

export const Login: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const [formData, setFormData] = React.useState<LoginFormData>(
    createEmptyLoginFormData
  );
  const [errors, setErrors] = React.useState<LoginFormErrors>(
    createEmptyLoginFormErrors
  );

  const hasErrors = Object.keys(errors).some((x) => errors[x] !== "");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formLoginValidation.validateForm(formData).then((validationResult) => {
      console.log(errors);
      if (validationResult.succeeded) {
        onLogin(formData);
      }
    });
  };

  const handleChange =
    (field: keyof LoginFormData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      formLoginValidation
        .validateField(field, e.target.value)
        .then((validationResult) => {
          setErrors({
            ...errors,
            [field]: validationResult.message,
          });
        });
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    };
  return (
    <Card sx={{ padding: "20px" }}>
      <CardHeader title="Login" />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <FormControl variant="standard">
              <InputLabel htmlFor="userName" error={Boolean(errors.username)}>
                Email
              </InputLabel>
              <Input
                type="text"
                id="userName"
                name="userName"
                value={formData.username}
                onChange={handleChange("username")}
                required
                error={Boolean(errors.username)}
              />
              {errors.username && (
                <FormHelperText id="userName" error={Boolean(errors.username)}>
                  {errors.username}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl variant="standard">
              <InputLabel htmlFor="password" error={Boolean(errors.password)}>
                Password
              </InputLabel>
              <Input
                type="text"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange("password")}
                required
                error={Boolean(errors.password)}
              />
              {errors.password && (
                <FormHelperText id="password" error={Boolean(errors.password)}>
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              size="medium"
              disabled={hasErrors}
            >
              Enter
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
