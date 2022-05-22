import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Dispatch, CountryStat } from "types";
import types from "./types";

/**
 * Main action dispatcher
 * see react-redux examples: https://react-redux.js.org/api/hooks#examples
 */
export default function () {
  const dispatch: Dispatch = useDispatch();

  const setStatistics = useCallback(
    (payload: CountryStat[]) => {
      dispatch({ type: types.SET_STATISTICS, payload });
    },
    [dispatch]
  );

  const setSelectedCountry = useCallback(
    (payload: CountryStat) => {
      dispatch({ type: types.SET_SELECTED_COUNTRY, payload });
    },
    [dispatch]
  );

  const setLoading = useCallback(
    (payload: boolean) => {
      dispatch({ type: types.SET_LOADING_STATISTIC, payload });
    },
    [dispatch]
  );

  const clearStatistic = useCallback(() => {
    dispatch({ type: types.CLEAR_STATISTICS });
  }, [dispatch]);

  return {
    setStatistics,
    clearStatistic,
    setSelectedCountry,
    setLoading,
  };
}
