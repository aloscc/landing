import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Event } from "../../models/event";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

const baseUrl = environment.baseUrl;
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable({
  providedIn: "root"
})
export class EventService {
  constructor(private http: HttpClient) {}
  getEvents(): Observable<any> {
    return this.http.get(`${baseUrl}/events`);
  }

  getEvent(eventId: number): Observable<any> {
    return this.http.get(`${baseUrl}/events/${eventId}`);
  }
}
