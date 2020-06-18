import { createReducer, on } from "@ngrx/store";
import { loadEvents, loadEventsSuccess, loadEventsError } from "../actions";
import { Event } from "../../models/event";

export interface EventsState {
  events: Event[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const eventsInitialState: EventsState = {
  events: [],
  loaded: false,
  loading: false,
  error: null
};

const _eventsReducer = createReducer(
  eventsInitialState,
  on(loadEvents, state => ({ ...state, loading: true })),
  on(loadEventsSuccess, (state, { events }) => ({
    ...state,
    loading: false,
    loaded: true,
    events: [...events]
  })),
  on(loadEventsError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { url: payload.url, name: payload.name, message: payload.message }
  }))
);

export function eventsReducer(state, action) {
  return _eventsReducer(state, action);
}
