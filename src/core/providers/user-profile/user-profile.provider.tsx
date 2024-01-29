import React from "react";
import { UserProfileContext } from "./user-profile.context";
import { LoginPage } from "@/scenes";

export const UserProfileProvider : React.FC<React.PropsWithChildren> = ({children}) => {
  const [username, setUsername] = React.useState<string>('')
  
  return <UserProfileContext.Provider value={{username, setUsername}}>
    {username ? <>{children}</> : <LoginPage/>}
  </UserProfileContext.Provider>
   
}