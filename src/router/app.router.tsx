import { BrowserRouter, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routers";
import { ListPage, DetailPage, LoginScene } from "@/scenes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginScene />} />
        <Route path={switchRoutes.list} element={<ListPage />} />
        <Route path={switchRoutes.detail} element={<DetailPage />} />
        <Route path="/*" element={<div>404 Not Found</div>}/>
      </Routes>
    </BrowserRouter>
  )
};

