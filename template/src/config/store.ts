import {
  configureStore,
  combineReducers,
  Action,
  ThunkAction,
} from "@reduxjs/toolkit";
import { application } from "shared/reducers";

const rootReducer = combineReducers({
  application,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
