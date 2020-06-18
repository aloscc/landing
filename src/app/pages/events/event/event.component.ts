import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppState } from "src/app/store/app.reducers";
import { Event } from "src/app/models/event";
import { Store } from "@ngrx/store";
import { loadEvent } from "src/app/store/actions/event.actions";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.scss"]
})
export class EventComponent implements OnInit {
  event: Event = null;
  loading = false;
  error: any;
  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.router.params.subscribe(({ eventId }) => {
      console.log(eventId);
      this.store.dispatch(loadEvent({ eventId }));
    });
  }
}
