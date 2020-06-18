import { createAction, props } from "@ngrx/store";
import { Event } from "../../models/event";

export const loadEvents = createAction("[Events] Load Events");
export const loadEventsSuccess = createAction(
  "[Events] Load Events Success",
  props<{ events: Event[] }>()
);
export const loadEventsError = createAction(
  "[Events] Load Events Error",
  props<{ payload: any }>()
);
