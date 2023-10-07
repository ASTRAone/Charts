import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import { ScreenRoute } from "../../types/Screen.routes.enum";
import { DashboardPage } from "../../pages/DashboardPage/DashboardPage";
import { ExchangePageContainer } from "./ExchangePageContainer";

export const ExchangeRoute: React.FC = () => {
  const routesData: RouteObject[] = [
    {
      path: `${ScreenRoute.DASHBOARD}`,
      element: <DashboardPage />,
    },
  ];

  const routes = useRoutes(routesData);
  return <ExchangePageContainer>{routes}</ExchangePageContainer>;
};
