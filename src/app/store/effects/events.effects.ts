import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EventService } from "../../services/event/event.service";
import * as eventsActions from "../actions/events.actions";
import { tap, mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class EventsEffects {
  constructor(private actions$: Actions, private eventService: EventService) {}
  loadEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(eventsActions.loadEvents),
      mergeMap(() =>
        this.eventService.getEvents().pipe(
          map(events =>
            eventsActions.loadEventsSuccess({ events: events.data })
          ),
          catchError(err => of(eventsActions.loadEventsError({ payload: err })))
        )
      )
    )
  );
}
