import React from "react";
import { useStyles } from "../../../../hooks/useStyles";
import styles from "./styles.module.scss";
import { useDrawingArea } from "@mui/x-charts";

type Props = {
  children: React.ReactNode;
  title: string;
};

export const PieCenterLabel: React.FC<Props> = ({ children, title }) => {
  const cx = useStyles(styles);
  const { left, top, width, height } = useDrawingArea();
  return (
    <div
      className={cx("container")}
      style={{
        left: left + width / 2 + "px",
        top: top + height / 2 + "px",
      }}
    >
      <h3 className={cx("title")}>{title}</h3>
      <p className={cx("text")}>{children}</p>
    </div>
  );
};
