import React, { PropsWithChildren } from "react";
import "./centered.layout.css"

export const CenteredLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <div className="layout-center">
        {children}
      </div>
    </>
  )
}