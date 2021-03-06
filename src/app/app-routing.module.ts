import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { LoginComponent } from "./pages/login/login.component";
import { EventListComponent } from "./pages/events/event-list/event-list.component";
import { EventComponent } from "./pages/events/event/event.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "events", component: EventListComponent },
  { path: "event/:eventId", component: EventComponent },
  { path: "", component: LandingPageComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
