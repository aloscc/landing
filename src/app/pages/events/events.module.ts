import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';
import { EventListComponent } from './event-list/event-list.component';



@NgModule({
  declarations: [EventComponent, EventListComponent],
  imports: [
    CommonModule
  ]
})
export class EventsModule { }
