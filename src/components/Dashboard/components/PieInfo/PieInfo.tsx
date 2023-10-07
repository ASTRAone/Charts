import React from "react";
import { useStyles } from "../../../../hooks/useStyles";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
};

export const PieInfo: React.FC<Props> = ({ children, active, onClick }) => {
  const cx = useStyles(styles);
  return (
    <div onClick={onClick} className={cx("container", { active })}>
      {children}
    </div>
  );
};
