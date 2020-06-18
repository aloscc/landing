import { ActionReducerMap } from "@ngrx/store";
import * as reducers from "./reducers";

export interface AppState {
  events: reducers.EventsState;
  event: reducers.EventState;
}

export const appReducers: ActionReducerMap<AppState> = {
  events: reducers.eventsReducer,
  event: reducers.eventReducer
};
