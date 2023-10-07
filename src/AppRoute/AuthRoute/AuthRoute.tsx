import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import { ScreenRoute } from "../../types/Screen.routes.enum";
import { AuthPage } from "../../pages/AuthPage/AuthPage";
import { AuthPageContainer } from "./AuthPageContainer";

export const AuthRoute: React.FC = () => {
  const routesData: RouteObject[] = [
    {
      path: `${ScreenRoute.LOGIN}`,
      element: <AuthPage />,
    },
  ];

  const routes = useRoutes(routesData);
  return <AuthPageContainer>{routes}</AuthPageContainer>;
};
