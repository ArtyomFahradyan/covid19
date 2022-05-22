import { Payload } from "types";
import { cloneDeep } from "lodash";
import types, { StatisticsStore } from "./types";

export const initialValues: StatisticsStore = {
  statistic: [],
  selectedCountry: undefined,
  loading: false,
};

export default function (
  state: StatisticsStore = initialValues,
  { type, payload }: Payload
) {
  switch (type) {
    case types.SET_STATISTICS:
      return {
        ...state,
        statistic: payload,
      };
    case types.SET_SELECTED_COUNTRY:
      return {
        ...state,
        selectedCountry: payload,
      };
    case types.SET_LOADING_STATISTIC:
      return {
        ...state,
        loading: payload,
      };
    case types.CLEAR_STATISTICS:
      return cloneDeep(initialValues);
    default:
      return state;
  }
}
