import React from "react";
import { LoginPage } from "./login.page";
import { ListPage } from "./list.page";
import { DetailPage } from "./detail.page";

export const Demo: React.FC = () => {
  const path = window.location.pathname;

  const renderComponent = (path: string) => {
    switch (path) {
      case '/':
        return <LoginPage/>
      case '/list':
        return <ListPage/>
      case '/detail':
        return <DetailPage/>
      default:
        return <div>404 Not Found</div>  
    }
  }

  return (
    <>
      {renderComponent(path)}
    </>
  );
};
