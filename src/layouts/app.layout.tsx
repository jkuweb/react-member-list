import React, { PropsWithChildren } from "react";
import "./app.layout.css"
import { UserProfileContext } from "@/core/providers/user-profile";

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const {username} = React.useContext(UserProfileContext)
  return (
    <>
      <div className="layout-app-container">
          <div className="layout-app-header">Hello {username}</div>
          {children}
      </div>
    </>
  );
};
