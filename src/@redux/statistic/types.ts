import { CountryStat } from "types";

export default {
  SET_STATISTICS: "SET_STATISTICS",
  SET_SELECTED_COUNTRY: "SET_SELECTED_COUNTRY",
  SET_LOADING_STATISTIC: "SET_LOADING_STATISTIC",
  CLEAR_STATISTICS: "CLEAR_STATISTICS",
};

export type StatisticsStore = {
  statistic: CountryStat[];
  selectedCountry?: CountryStat;
  loading: boolean;
};
