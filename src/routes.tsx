import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: '/login',
    element: <div>login</div>
  },
  {
    path: '/registration',
    element: <div>registration</div>
  },
  {
    path: '/',
    element: <div>dashboard</div>
  }
];