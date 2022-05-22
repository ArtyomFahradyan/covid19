import { LineConfig } from "@ant-design/plots";

export const config: LineConfig = {
  data: [],
  xField: "date",
  yField: "total_tests",
  label: {},
  point: {
    size: 2,
    shape: "diamond",
    style: {
      fill: "white",
      stroke: "#5B8FF9",
      lineWidth: 2,
    },
  },
  tooltip: {
    showMarkers: false,
  },
  state: {
    active: {
      style: {
        shadowBlur: 4,
        stroke: "#000",
        fill: "red",
      },
    },
  },
  interactions: [
    {
      type: "marker-active",
    },
  ],
};
