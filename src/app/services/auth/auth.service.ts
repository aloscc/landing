import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Credentials } from "../../interfaces/credentials.interface";
import { User } from "../../models/user";

const baseUrl = `${environment.baseUrl}/auth/`;
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: Credentials): Observable<any> {
    return this.http.post(baseUrl + "signin", credentials, httpOptions);
  }

  register(user: User): Observable<any> {
    return this.http.post(baseUrl + "signup", user, httpOptions);
  }
}
