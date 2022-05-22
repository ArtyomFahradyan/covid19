import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import statisticsReducer from "./statistic/reducers";

const configureStore = (initialState = {}) => {
  const reducers = combineReducers({
    statistic: statisticsReducer,
  });

  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware())
  );

  return { store };
};

export default configureStore;
