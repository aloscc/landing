import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import { Event } from "src/app/models/event";
import { loadEvents } from "src/app/store/actions/events.actions";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.scss"]
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  loading = false;
  error: any;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select("events").subscribe(({ events, loading, error }) => {
      console.log(events);
      this.events = events;
      this.loading = loading;
      this.error = error;
    });
    this.store.dispatch(loadEvents());
  }
}
