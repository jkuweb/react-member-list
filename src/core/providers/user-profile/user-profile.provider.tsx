import React from "react";
import { UserProfileContext } from "./user-profile.context";
import { UserProfileContextModel } from "./user-profile.vm";

export const UserProfileProvider : React.FC<React.PropsWithChildren> = ({children}) => {
  const [username, setUsername] = React.useState<string>(null)
  return <UserProfileContext.Provider value={{username}}>
    {children}
  </UserProfileContext.Provider>
   
}