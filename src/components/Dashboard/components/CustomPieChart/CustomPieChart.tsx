import React from "react";
import { useStyles } from "../../../../hooks/useStyles";
import styles from "./styles.module.scss";
import {
  DefaultizedPieValueType,
  PieChart,
  PieItemIdentifier,
} from "@mui/x-charts";
import { PieCenterLabel } from "../PieCenterLabel";
import { PieInfo } from "../PieInfo";
import { ObjProps } from "../../../../utils/types";

type Props = {
  onClick: (item: DefaultizedPieValueType) => void;
  onChange: (value: undefined) => void;
  data: ObjProps[];
  sumValue?: number;
  sumChart: number;
  activeField?: string;
  title: string;
};

const size = {
  width: 350,
  height: 200,
};

export const CustomPieChart: React.FC<Props> = ({
  onChange,
  onClick,
  data,
  sumValue,
  sumChart,
  activeField,
  title,
}) => {
  const cx = useStyles(styles);

  const onMouseOut = () => {
    onChange(undefined);
  };

  const handleOnClick = (
    event: React.MouseEvent<SVGPathElement, MouseEvent>,
    itemIdentifier: PieItemIdentifier,
    item: DefaultizedPieValueType
  ) => {
    onClick(item);
  };

  const onActiveLegend = (item: ObjProps) => {
    return () => {
      console.log(item);
    };
  };

  return (
    <div className={cx("pie")}>
      <div onMouseOut={onMouseOut} style={{ position: "relative" }}>
        <PieChart
          onClick={handleOnClick}
          disableAxisListener
          series={[{ data, innerRadius: 80 }]}
          {...size}
          legend={{ hidden: true }} 
        ></PieChart>
        <PieCenterLabel title={title}>{sumValue ?? sumChart}</PieCenterLabel>
      </div>
      <div className={cx("pie-labels")}>
        <div className={cx("our")}>
          <p>Всего:</p>
          <p>{sumChart}</p>
        </div>
        {data.map((item, index) => {
          const active = item.label === activeField;

          return (
            <PieInfo onClick={onActiveLegend(item)} key={index} active={active}>
              <p>{item.label}:</p> <p>{item.value}</p>
            </PieInfo>
          );
        })}
      </div>
    </div>
  );
};
