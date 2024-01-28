import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage, ListPage, DetailPage } from "@/scenes";
import { switchRoutes } from "./routers";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginPage />} />
        <Route path={switchRoutes.list} element={<ListPage />} />
        <Route path={switchRoutes.detail} element={<DetailPage />} />
        <Route path="/*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};