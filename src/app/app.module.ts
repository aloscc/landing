import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { authInterceptorProviders } from "./helpers/auth.interceptor";

// Routes
import { AppRoutingModule } from "./app-routing.module";

// Custom Modules
import { AppComponent } from "./app.component";
import { LandingPageModule } from "./pages/landing-page/landing-page.module";
import { LoginModule } from "./pages/login/login.module";
import { EventsModule } from "./pages/events/events.module";

// Redux
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { appReducers } from "./store/app.reducers";
import { environment } from "../environments/environment";
import { EffectsArray } from "./store/effects/index";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LandingPageModule,
    LoginModule,
    EventsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
