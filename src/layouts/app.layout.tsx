import React, { PropsWithChildren } from "react";
import "./app.layout.css"

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="layout-app-container">
          <div className="layout-app-header">User Login in</div>
          {children}
      </div>
    </>
  );
};
