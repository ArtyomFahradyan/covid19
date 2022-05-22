import { createSelector } from "reselect";
import { StatisticsStore } from "./types";

type State = { statistic: StatisticsStore };

const getMainState = (state: State) => state.statistic;
const getStatistic = createSelector(
  getMainState,
  (statistics) => statistics.statistic
);
const getLoading = createSelector(
  getMainState,
  (statistics) => statistics.loading
);
const getSelectedCountry = createSelector(
  getMainState,
  (statistics) => statistics.selectedCountry
);

export default {
  getMainState,
  getStatistic,
  getSelectedCountry,
  getLoading,
};
