import { BarConfig } from "@ant-design/plots";

export const config: BarConfig = {
  data: [],
  xField: "value",
  yField: "name",
  seriesField: "type",
  legend: false,
  color: ({ type }) => {
    return type === "selected" ? "#FAAD14" : "#5B8FF9";
  },
  meta: {
    type: {
      alias: "high",
    },
    sales: {
      alias: "low",
    },
  },
};

export const countOptions = [
  { value: "10" },
  { value: "15" },
  { value: "20" },
  { value: "25" },
];
