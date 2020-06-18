import { createReducer, on } from "@ngrx/store";
import { loadEvent, loadEventSuccess, loadEventError } from "../actions";
import { Event } from "../../models/event";

export interface EventState {
  eventId: number;
  event: Event;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const eventInitialState: EventState = {
  eventId: null,
  event: null,
  loaded: false,
  loading: false,
  error: null
};

const _eventReducer = createReducer(
  eventInitialState,
  on(loadEvent, (state, { eventId }) => ({
    ...state,
    loading: true,
    eventId
  })),
  on(loadEventSuccess, (state, { event }) => ({
    ...state,
    loading: false,
    loaded: true,
    event: { ...event }
  })),
  on(loadEventError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { url: payload.url, name: payload.name, message: payload.message }
  }))
);

export function eventReducer(state, action) {
  return _eventReducer(state, action);
}
