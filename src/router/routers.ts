import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  list: string;
  detail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "/list",
  detail: "/detail/:login",
};

export const routes = {
  ...switchRoutes,
  detail: (login: string) => generatePath(switchRoutes.detail, { login }),
};
