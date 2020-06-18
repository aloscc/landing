import { createAction, props } from "@ngrx/store";
import { Event } from "../../models/event";

export const loadEvent = createAction(
  "[Event] Load Event",
  props<{ eventId: number }>()
);
export const loadEventSuccess = createAction(
  "[Event] Load Event Success",
  props<{ event: Event }>()
);
export const loadEventError = createAction(
  "[Event] Load Event Error",
  props<{ payload: any }>()
);
