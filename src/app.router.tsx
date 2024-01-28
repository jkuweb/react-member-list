import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailPage } from "@/scenes/detail.page";
import { ListPage } from "@/scenes/list.page";
import { LoginPage } from "@/scenes/login.page";

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