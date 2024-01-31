import React from "react";
import { UserProfileContext } from "@/core/providers/user-profile";
import { LoginFormData } from "./login.vm";
import { Login } from "./login.component";
 

export const LoginContainer: React.FC = () => {
  const {setUsername} = React.useContext(UserProfileContext)
  const handleLogin = (data: LoginFormData) => {
    if (data.username === "admin@test.com" && data.password === "test") {
      setUsername(data.username)
    }
  }
  return <Login onLogin={handleLogin}></Login>
}