import React from "react";
import { useStyles } from "../../hooks/useStyles";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { MainRoute, ScreenRoute } from "../../types/Screen.routes.enum";

type Props = {
  children: React.ReactNode;
};

export const ExchangePageContainer: React.FC<Props> = ({ children }) => {
  const cx = useStyles(styles);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  if (!token) {
    navigate(`/${MainRoute.AUTH}/${ScreenRoute.LOGIN}`, { replace: true });
  }

  return <div className={cx("container")}>{children}</div>;
};
