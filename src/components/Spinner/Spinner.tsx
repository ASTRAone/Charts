import React from "react";
import { useStyles } from "../../hooks/useStyles";
import styles from "./styles.module.scss";

type Props = {
  className?: string;
}

export const Spinner: React.FC<Props> = ({className}) => {
  const cx = useStyles(styles);
  return <span className={cx("container", className)} />;
};
