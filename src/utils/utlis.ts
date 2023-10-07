import { labelDictionary } from "./contants";
import { ItemChart, ObjProps } from "./types";

export const createDataChart = (obj: ItemChart) => {

  const entries = Object.entries(obj);
  const result = [];
  let ourSum: number = 0;

  for (const [key, value] of entries) {
    if (key !== "__typename") {
      const payload: ObjProps = {
        label: labelDictionary[key] as "completed" | "active" | "inactive",
        value,
      };
      result.push(payload);
      ourSum += value;
    }
  }

  return {
    result,
    ourSum,
  };
};
