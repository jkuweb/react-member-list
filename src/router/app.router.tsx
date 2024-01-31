import { BrowserRouter, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routers";
import { LoginScene, MemberDetailScene, MemberListScene } from "@/scenes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<MemberListScene />} />
        <Route path={switchRoutes.list} element={< MemberListScene/>} />
        <Route path={switchRoutes.detail} element={<MemberDetailScene/>} />
        <Route path="/*" element={<div>404 Not Found</div>}/>
      </Routes>
    </BrowserRouter>
  )
};

