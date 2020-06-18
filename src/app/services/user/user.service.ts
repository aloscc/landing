import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../../models/user";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

const baseUrl = environment.baseUrl;
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  registerUserToEvent(user: User, eventId: number): Observable<any> {
    const url = `${baseUrl}/users/register`;
    return this.http.post(url, { ...user, eventId }, httpOptions);
  }
}
