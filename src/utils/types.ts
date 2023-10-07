type ItemChart = {
  active: number;
  completed: number;
  inactive: number;
};

type ObjProps = {
  label: Label;
  value: number;
};

type Label = "completed" | "active" | "inactive";

type PropsPieChartEvent = {
  color: string;
  data: number;
  endAngle: number;
  formattedValue: string;
  id: string;
  index: number;
  label: string;
  padAngle: number;
  startAngle: number;
  value: number;
};

export type { PropsPieChartEvent, Label, ObjProps, ItemChart };
