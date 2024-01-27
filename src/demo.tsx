import React from "react";
import { LoginPage } from "./login.page";
import { ListPage } from "./list.page";
import { DetailPage } from "./detail.page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export const Demo: React.FC = () => {
  return (
    <>
      <header>
        <h1>App Title</h1>
      </header>
      <AppRouter />
    </>
  );
};
