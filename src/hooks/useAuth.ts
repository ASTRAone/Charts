import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainRoute, ScreenRoute } from "../types/Screen.routes.enum";

export const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate(`/${MainRoute.EXCHANGE}/${ScreenRoute.DASHBOARD}`);
    } else {
      navigate(`/${MainRoute.AUTH}/${ScreenRoute.LOGIN}`);
    }
  }, [navigate]);
};
