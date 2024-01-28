import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage, ListPage, DetailPage } from "@/scenes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail/:login" element={<DetailPage />} />
        <Route path="/*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};